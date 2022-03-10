UI.AddCheckbox("Head/Body/Safety conditions");
UI.AddMultiDropdown("Force head conditions", ["Standing", "Crouching", "Slow-walking", "Running", "In-air"]);
UI.AddMultiDropdown("Force body conditions", ["Lethal", "Standing", "Crouching", "Slow-walking", "Running", "In-air"]);
UI.AddMultiDropdown("Force safety conditions", ["Lethal", "Standing", "Crouching", "Slow-walking", "Running", "In-air"]);
UI.AddSliderInt("Extrapolated ticks", 0, 64);

function extrapolate_tick(entity, ticks, x, y, z) {
    velocity = Entity.GetProp(entity, "CBasePlayer", "m_vecVelocity[0]");
    new_pos = [x, y, z];
    new_pos[0] = new_pos[0] + velocity[0] * Globals.TickInterval() * ticks;
    new_pos[1] = new_pos[1] + velocity[1] * Globals.TickInterval() * ticks;
    new_pos[2] = new_pos[2] + velocity[2] * Globals.TickInterval() * ticks;
    return new_pos;
}

function is_lethal(entity) {
    local_player = Entity.GetLocalPlayer();
    eye_pos = Entity.GetEyePosition(local_player);
    ticks = UI.GetValue(["Misc", "JAVASCRIPT", "Script items", "Extrapolated ticks"]);
    extrapolated_location = extrapolate_tick(local_player, ticks, eye_pos[0], eye_pos[1], eye_pos[2]);
    entity_hp = Entity.GetProp(entity, "CBasePlayer", "m_iHealth");
    pelvis_pos = Entity.GetHitboxPosition(entity, 2);
    body_pos = Entity.GetHitboxPosition(entity, 3);
    thorax_pos = Entity.GetHitboxPosition(entity, 4);
    pelvis_trace = Trace.Bullet(local_player, entity, extrapolated_location, pelvis_pos);
    body_trace = Trace.Bullet(local_player, entity, extrapolated_location, body_pos);
    thorax_trace = Trace.Bullet(local_player, entity, extrapolated_location, thorax_pos);
    lethal_damage = Math.max(pelvis_trace[1], body_trace[1], thorax_trace[1]);
    if (lethal_damage > entity_hp) return true;
    else return false;
}

function get_condition(entity) {
    flags = Entity.GetProp(entity, "CBasePlayer", "m_fFlags");
    entity_velocity = Entity.GetProp(entity, "CBasePlayer", "m_vecVelocity[0]");
    entity_speed = Math.sqrt(entity_velocity[0] * entity_velocity[0] + entity_velocity[1] * entity_velocity[1]).toFixed(0);
    wpn_info = Entity.GetCCSWeaponInfo(entity);
    if (wpn_info == undefined) return;
    if (flags & 1 << 1) return "crouching";
    else if (!(flags & 1 << 0) && !(flags & 1 << 0x12)) return "in-air";
    else if (entity_speed <= 2) return "standing";
    else if (entity_speed >= wpn_info["max_speed"]) return "running";
    else if (entity_speed <= (wpn_info["max_speed"] / 2.6).toFixed(0)) return "slow-walking";
}

function force_head(entity) {
    local_player = Entity.GetLocalPlayer();
    head_pos = Entity.GetHitboxPosition(entity, 0);
    head_damage = Trace.Bullet(local_player, entity, Entity.GetEyePosition(local_player), head_pos);
    Ragebot.ForceTargetMinimumDamage(entity, head_damage[1]);
}

function force_body(entity) {
    Ragebot.ForceHitboxSafety(entity, 0);
    if (!UI.GetValue(["Rage", "GENERAL", "General", "Force body aim"])) {
        UI.ToggleHotkey(["Rage", "GENERAL", "General", "Force body aim"]);
    }
}

function disable_body() {
    if (UI.GetValue(["Rage", "GENERAL", "General", "Force body aim"])) {
        UI.ToggleHotkey(["Rage", "GENERAL", "General", "Force body aim"])
    }
}

function ui() {
    var mast = UI.GetValue(["Misc", "JAVASCRIPT", "Script items", "Head/Body/Safety conditions"]);
    UI.SetEnabled(["Misc", "JAVASCRIPT", "Script items", "Force head conditions"], mast);
    UI.SetEnabled(["Misc", "JAVASCRIPT", "Script items", "Force body conditions"], mast);
    UI.SetEnabled(["Misc", "JAVASCRIPT", "Script items", "Force safety conditions"], mast);
    UI.SetEnabled(["Misc", "JAVASCRIPT", "Script items", "Extrapolated ticks"], mast);
}

function main() {
    var local_player = Entity.GetLocalPlayer();
    if (!UI.GetValue(["Misc", "JAVASCRIPT", "Script items", "Head/Body/Safety conditions"]) || !Entity.IsValid(local_player) || !Entity.IsAlive(local_player)) return;
    var head_opt = UI.GetValue(["Misc", "JAVASCRIPT", "Script items", "Force head conditions"]);
    var body_opt = UI.GetValue(["Misc", "JAVASCRIPT", "Script items", "Force body conditions"]);
    var safety_opt = UI.GetValue(["Misc", "JAVASCRIPT", "Script items", "Force safety conditions"]);
    var enemies = Entity.GetEnemies();
    for (i = 0; i < enemies.length; i++) {
        if (!Entity.IsValid(enemies[i]) || !Entity.IsAlive(enemies[i]) || Entity.IsDormant(enemies[i])) continue;

        if (head_opt & (1 << 0) && get_condition(enemies[i]) == "standing" || head_opt & (1 << 1) && get_condition(enemies[i]) == "crouching" || head_opt & (1 << 2) && get_condition(enemies[i]) == "slow-walking" || head_opt & (1 << 3) && get_condition(enemies[i]) == "running" || head_opt & (1 << 4) && get_condition(enemies[i]) == "in-air") {
            force_head(enemies[i]);
        }
        else if (body_opt & (1 << 0) && is_lethal(enemies[i]) || body_opt & (1 << 1) && get_condition(enemies[i]) == "standing" || body_opt & (1 << 2) && get_condition(enemies[i]) == "crouching" || body_opt & (1 << 3) && get_condition(enemies[i]) == "slow-walking" || body_opt & (1 << 4) && get_condition(enemies[i]) == "running" || body_opt & (1 << 5) && get_condition(enemies[i]) == "in-air") {
            force_body(enemies[i]);
        }
        else {
            disable_body();
        }
        if (safety_opt & (1 << 0) && is_lethal(enemies[i]) || safety_opt & (1 << 1) && get_condition(enemies[i]) == "standing" || safety_opt & (1 << 2) && get_condition(enemies[i]) == "crouching" || safety_opt & (1 << 3) && get_condition(enemies[i]) == "slow-walking" || safety_opt & (1 << 4) && get_condition(enemies[i]) == "running" || safety_opt & (1 << 5) && get_condition(enemies[i]) == "in-air") {
            Ragebot.ForceTargetSafety(enemies[i]);
        }
    }
}

Cheat.RegisterCallback("Draw", "ui");
Cheat.RegisterCallback("CreateMove", "main");