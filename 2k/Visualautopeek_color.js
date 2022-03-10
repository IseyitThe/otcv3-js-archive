/* ui init */

UI.AddSliderFloat("", 0, 0)
UI.AddCheckbox("Quick peek")
UI.AddColorPicker("Quick peek fill color")
UI.AddColorPicker("Quick peek outline color")
UI.AddHotkey("Quick peek hotkey")
UI.AddSliderInt("Radius", 5, 20)

/* variables */
var pi = 3.141592653589793;
var state = [
    false, // moving
    false, // in air
    false, // has shot
    false // has to move
]
var saved_pos = Entity.GetLocalPlayer() != null && Entity.IsAlive(Entity.GetLocalPlayer()) && Entity.GetRenderOrigin(Entity.GetLocalPlayer()) || [0, 0, 0];
var latest_velocity = 0;
var timer = Globals.Realtime()+1.5

/* functions */
function d2r(num) { return num*(pi/180) }
function draw_circle_3d(x, y, z, radius, degrees, start_at, clr, filled, fill_clr) {
    var accuracy = 8;
    var old_x, old_y;
    degrees = degrees < 361 && degrees || 360; degrees = degrees > -1 && degrees || 0
    start_at = start_at+1
    for (rot=start_at; rot < degrees+start_at+1; rot+=start_at*accuracy) {
        rot_r = d2r(rot)
        line_x = radius * Math.cos(rot_r) + x, line_y = radius * Math.sin(rot_r) + y
        var curr = Render.WorldToScreen([line_x, line_y, z]), cur = Render.WorldToScreen([x, y, z]);
        if (cur[0] != null && curr[0] != null && old_x != null) {
            if (filled) 
                Render.Polygon([ [curr[0], curr[1]], [old_x, old_y], [cur[0], cur[1]] ], fill_clr)
            Render.Line(curr[0], curr[1], old_x, old_y, clr)
        }
        old_x = curr[0], old_y = curr[1];
    }
}
function go_to(goal) {
    var local = Entity.GetLocalPlayer();
    if (local == null || !Entity.IsAlive(local)) return;

    var pos = Entity.GetRenderOrigin(local);
    var viewAngles = Local.GetViewAngles();
    var moveTo_x = pos[0] - goal[0], moveTo_y = pos[1] - goal[1];
    var tv_x = moveTo_x * Math.cos(viewAngles[1] / 180 * pi) + moveTo_y * Math.sin(viewAngles[1] / 180 * pi), tv_y = moveTo_y * Math.cos(viewAngles[1] / 180 * pi) - moveTo_x * Math.sin(viewAngles[1] / 180 * pi);
    UserCMD.SetMovement([-tv_x*20, tv_y*20, 0]);
}
function get_velocity(ent) {
    var velocity = Entity.GetProp(ent, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

/* callbacks */
function on_paint() {
    var local = Entity.GetLocalPlayer();
    if (local == null || !Entity.IsAlive(local) || !UI.GetValue("Misc", "Quick peek")) return;
    var pos = Entity.GetRenderOrigin(local);
    var distance_x = Math.floor(pos[0]-saved_pos[0]), distance_y = Math.floor(pos[1]-saved_pos[1]), distance = distance_x+distance_y;
    var flags = Entity.GetProp(local, "CBasePlayer", "m_fFlags");
    var color = UI.GetColor("Misc", "Quick peek outline color"), color2 = UI.GetColor("Misc", "Quick peek fill color");
    if (distance_x > 700 || distance_x < -700 || distance_y > 700 || distance_y < -700) {
        if (!state[1])
            saved_pos[0] = pos[0], saved_pos[1] = pos[1], saved_pos[2] = pos[2]
    }

    state[1] = flags == 256
    state[0] = Input.IsKeyPressed(0x57) /*W is held*/ || Input.IsKeyPressed(0x41) /*A is held*/ || Input.IsKeyPressed(0x53) /*S is held*/ || Input.IsKeyPressed(0x44) /*D is held*/
    state[3] = !state[0] && !state[1]
    if (state[2] && latest_velocity > 6) state[3] = true
    if (timer < Globals.Realtime()) {
        timer = timer+1.2
        latest_velocity = Math.floor(get_velocity(local))
    }

    if (UI.IsHotkeyActive("Misc", "Quick peek hotkey")) {
        draw_circle_3d(saved_pos[0], saved_pos[1], saved_pos[2], UI.GetValue("Misc", "Radius"), 360, 0, color, true, color2);
    } else {
        saved_pos[0] = pos[0], saved_pos[1] = pos[1], saved_pos[2] = pos[2]
    }
    if (state[3]) {
        if (Math.floor(pos[0]) == Math.floor(saved_pos[0]) && Math.floor(pos[1]) == Math.floor(saved_pos[1]) || distance_x > -8 && distance_x < 8 && distance_y > -8 && distance_y < 8) {
            state[3] = false
            state[2] = false
        }
    }
}
function on_fire() {
    if (Entity.GetEntityFromUserID(Event.GetString("userid")) == Entity.GetLocalPlayer())
        state[2] = true
}
function on_createmove() {
    if (state[3] && UI.GetValue("Misc", "Quick peek"))
        go_to(saved_pos);
}
Cheat.RegisterCallback("CreateMove", "on_createmove")
Cheat.RegisterCallback("Draw", "on_paint")
Cheat.RegisterCallback("weapon_fire", "on_fire")