UI.AddCheckbox("Safe Revolver");
UI.AddCheckbox("Safe Revolver");
UI.AddCheckbox("Prevent Anti-Aim Correction");
UI.AddCheckbox("Prevent Height Advantage");
UI.AddCheckbox("Prevent Taser Threat");
UI.AddCheckbox("Anti Aim Clock");
var old_fake_desync = UI.GetValue("Anti-Aim", "Fake angles", "Fake desync");
var old_at_targets = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "At targets");
var old_auto_direction = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction");
var old_yaw_offset = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset");
var res = Render.GetScreenSize();
var prevent_correction = false;
var last_prevent_time = 0;
var in_act_pha = false;
var in_act_pac = false;
var in_act_sr = false;
var in_act_ptt = false;
var local_viewangles = [];
var local_yaw_real = 0;
var local_yaw_fake = 0;
function distance(a, b) {
    ax = a[0], ay = a[1], az = a[2];
    bx = b[0], by = b[1], bz = b[2];
    dx = ax - bx, dy = ay - by, dz = az - bz;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
function distance2D( x1, y1, x2, y2 ) {
    xs = x2 - x1, ys = y2 - y1;
     
    xs *= xs;
    ys *= ys;
  
    return Math.sqrt( xs + ys );
}
function difference(a, b) {
    if (a > b) {
      return a - b;
    } else {
      return b - a;
    }
}
function get_nearest_player() {
    players = Entity.GetPlayers();
    local_origin = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
    target_origin = 0;
    target = 0;
    for (i=0; i < players.length; i++) {
        if (!Entity.IsAlive(players[i]))
            continue;
        if (Entity.IsTeammate(players[i])) //filters local player too
            continue;
        if(Entity.IsDormant(players[i]))
            continue;
        entity_origin = Entity.GetRenderOrigin(players[i]);
        if (target === 0)
            target_origin = [999999, 999999, 999999]; //FK FLT_MAX LOL
        if (distance(local_origin, target_origin) > distance(local_origin, entity_origin)){
            target = players[i];
            target_origin = entity_origin;
        }
    }
    return target;
}
function draw_angle_line(angle, x, y, length, color) {//improper since we only use our viewangles
    _angle = angle + 45;
    yaw = (_angle) * (3.14159 / 180.0);
    c_yaw = Math.cos(yaw);
    s_yaw = Math.sin(yaw);
    _x = 50 * (-c_yaw) + 50 * s_yaw;
    _y = 50 * (-c_yaw) - 50 * s_yaw;
    screen_x = x + (_x / 50 * length);
    screen_y = y + (_y / 50 * length)
    Render.Line(x, y, screen_x, screen_y, color)
    Render.Line(x, y, screen_x, screen_y + 1, color)
}
function player_hurt() {
    target = Event.GetInt("userid");
    attacker = Event.GetInt("attacker");
    damage = Event.GetInt("dmg_health");
    hitgroup = Event.GetInt("hitgroup");
    if ((Entity.GetLocalPlayer() === Entity.GetEntityFromUserID(target))
    && Entity.GetLocalPlayer() !==  Entity.GetEntityFromUserID(attacker)) {
        health = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_iHealth");
        if (hitgroup === 1 && (health / damage) >= 2)
            prevent_correction = true;
        else
            prevent_correction = false;
    }
}
function create_move() {
    local_weapon_id = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CBaseAttributableItem", "m_iItemDefinitionIndex");
    local_origin = Entity.GetProp(Entity.GetLocalPlayer(), "CBaseEntity", "m_vecOrigin");
    local_viewangles = Local.GetViewAngles();
    local_yaw_real = Local.GetRealYaw();
    local_yaw_fake = Local.GetFakeYaw();
    if (UI.GetValue("Safe Revolver")) {
        if(local_weapon_id === 262208) {
            in_act_sr = Math.round(1/Globals.Frametime()) < 65 ? true : false;
            UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", Math.round(1/Globals.Frametime()) < 65 ? false : true);
        }