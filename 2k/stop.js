UI.AddSliderInt("Ticks to slow prior to peek", 1, 12);
UI.AddSliderInt("Slow speed", 0, 100);
UI.AddCheckbox("Disable when in air");
UI.AddCheckbox("Draw debug lines");

var wepname_category = {
    "usp s": "Pistol",
    "glock 18": "Pistol",
    "p2000": "Pistol",
    "dual berettas": "Pistol",
    "r8 revolver": "Heavy Pistol",
    "desert eagle": "Heavy Pistol",
    "p250": "Pistol",
    "tec 9": "Pistol",
    "mp9": "SMG",
    "mac 10": "SMG",
    "pp bizon": "SMG",
    "ump 45": "SMG",
    "ak 47": "Rifle",
    "sg 553": "Rifle",
    "aug": "Rifle",
    "m4a1 s": "Rifle",
    "m4a4": "Rifle",
    "ssg 08": "Scout",
    "awp": "AWP",
    "g3sg1": "Auto",
    "scar 20": "Auto",
    "nova": "Heavy",
    "xm1014": "Heavy",
    "mag 7": "Heavy",
    "m249": "Heavy",
    "negev": "Heavy"
};

var gen_weps = [
    "SMG",
    "Rifle",
    "Heavy"
]

var slow = false;
var last_shot = 0;

function check_extrapolated_position() {
    var ticks = UI.GetValue("Script items", "Ticks to slow prior to peek")
    var local = Entity.GetLocalPlayer();
    var enemies = Entity.GetEnemies();
    var extrapolated = extrapolate_position(Entity.GetHitboxPosition(local, 5), ticks, local);
    var weapon = weaponType(Entity.GetName(Entity.GetWeapon(local)));
    var min_dmg = ~gen_weps.indexOf(weapon) ? UI.GetValue("Rage", "GENERAL", "Targeting", "Minimum damage") : UI.GetValue("Rage", weapon.toUpperCase(), "Targeting", "Minimum damage");
    var disable_in_air = UI.GetValue("Script items", "Disable when in air");
    var debug = UI.GetValue("Script items", "Draw debug lines");
    for (var e in enemies) {
        if(!Entity.IsAlive(enemies[e]) || !Entity.IsValid(enemies[e]) || Entity.IsDormant(enemies[e]) || (in_air(local) && disable_in_air)) {
            slow = false;
            continue;
        }
        var trace = Trace.Bullet(local, enemies[e], extrapolated, Entity.GetHitboxPosition(enemies[e], 5));

        if(trace[1] > min_dmg || trace[2] && Globals.Curtime() - last_shot > 5) {
            slow = true;
            if(debug) {
                var world_p = Render.WorldToScreen(Entity.GetHitboxPosition(local, 5));
                var world_e = Render.WorldToScreen(extrapolated);
                var world_en = Render.WorldToScreen(Entity.GetHitboxPosition(enemies[e], 5));
                Render.Line(world_p[0], world_p[1], world_e[0], world_e[1], [255,255,255,255]);
                Render.Line(world_e[0], world_e[1], world_en[0], world_en[1], [255,255,255,255]);
            }
        } else {
            slow = false;
        }
       
    }
}

function handle_movement() {
    var speed = UI.GetValue("Script items", "Slow speed");

    if(!slow) return;

    var forward_move = 0;
    var side_move = 0;

    if(Input.IsKeyPressed(0x57))
        forward_move = 1;
    else if(Input.IsKeyPressed(0x53))
        forward_move = -1;

    if(Input.IsKeyPressed(0x44))
        side_move = 1;
    else if(Input.IsKeyPressed(0x41))
        side_move = -1;

    UserCMD.SetMovement([forward_move * speed, side_move * speed, 0]);
}

function ragebot_fire() {
    last_shot = Globals.Curtime();
}

Cheat.RegisterCallback("CreateMove", "handle_movement");
Cheat.RegisterCallback("ragebot_fire", "ragebot_fire");
Cheat.RegisterCallback("Draw", "check_extrapolated_position");

function weaponType()
{
    var local = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(local));

    if(wepname_category[weapon] == undefined)
      return "";

    return wepname_category[weapon];
}

function in_air(index) {
    fv = Entity.GetProp(index, "CBasePlayer", "m_flFallVelocity");
    return (fv < -1 || fv > 1);
}

function extrapolate_position(pos, ticks, ent) {
    var curVel = Entity.GetProp(ent, "DT_CSPlayer", "m_vecVelocity[0]");
    var newPos = [pos[0], pos[1], pos[2]]
    for (var i = 0; i < ticks; i++) {
        newPos[0] += (curVel[0] * Globals.TickInterval());
        newPos[1] += (curVel[1] * Globals.TickInterval());
        newPos[2] += (curVel[2] * Globals.TickInterval() + (9.81 * ((Globals.TickInterval()) * (Globals.TickInterval()) / 2)))
    }
    return newPos;
}