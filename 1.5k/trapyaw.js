function clamp(num, min, max) {return num <= min ? min : num >= max ? max : num;}
function rand(min, max) {return min + Math.floor((max - min) * Math.random());}
function deg2rad(degress) {return degress * Math.PI / 180.0;}
function angle_to_vec(pitch, yaw) {var p = deg2rad(pitch);var y = deg2rad(yaw);var sin_p = Math.sin(p);var cos_p = Math.cos(p);var sin_y = Math.sin(y);var cos_y = Math.cos(y);return [cos_p * cos_y, cos_p * sin_y, -sin_p];}
function get_velocity(player) {var velocity = Entity.GetProp(player, "CBasePlayer", "m_vecVelocity[0]");return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);}
function get_delta(player) {var speed = get_velocity(player);var delta = (speed / 8);return (58 - delta);}
function trace(entity_id, entity_angles) {var entity_vec = angle_to_vec(entity_angles[0], entity_angles[1]);var entity_pos = Entity.GetRenderOrigin(entity_id);entity_pos[2] += 50;var stop = [entity_pos[0] + entity_vec[0] * 8192, entity_pos[1] + entity_vec[1] * 8192, (entity_pos[2]) + entity_vec[2] * 8192];var traceResult = Trace.Line(entity_id, entity_pos, stop);if (traceResult[1] == 1.0)return;stop = [entity_pos[0] + entity_vec[0] * traceResult[1] * 8192, entity_pos[1] + entity_vec[1] * traceResult[1] * 8192, entity_pos[2] + entity_vec[2] * traceResult[1] * 8192];var distance = Math.sqrt((entity_pos[0] - stop[0]) * (entity_pos[0] - stop[0]) + (entity_pos[1] - stop[1]) * (entity_pos[1] - stop[1]) + (entity_pos[2] - stop[2]) * (entity_pos[2] - stop[2]));entity_pos = Render.WorldToScreen(entity_pos);stop = Render.WorldToScreen(stop);if (stop[2] != 1 || entity_pos[2] != 1)return;return distance;}
function radian(degree){return degree * Math.PI / 180.0;}
function ExtendVector(vector, angle, extension){var radianAngle = radian(angle);return [extension * Math.cos(radianAngle) + vector[0], extension * Math.sin(radianAngle) + vector[1], vector[2]];}
function VectorAdd(a, b){return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];}
function VectorSubtract(a, b){return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];}
function VectorMultiply(a, b){return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];}
function VectorLength(x, y, z){return Math.sqrt(x * x + y * y + z * z);}
function VectorNormalize(vec){var length = VectorLength(vec[0], vec[1], vec[2]);return [vec[0] / length, vec[1] / length, vec[2] / length];}
function VectorDot(a, b){return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];}
function VectorDistance(a, b){return VectorLength(a[0] - b[0], a[1] - b[1], a[2] - b[2]);}
function ClosestPointOnRay(target, rayStart, rayEnd){var to = VectorSubtract(target, rayStart);var dir = VectorSubtract(rayEnd, rayStart);var length = VectorLength(dir[0], dir[1], dir[2]);dir = VectorNormalize(dir);var rangeAlong = VectorDot(dir, to);if (rangeAlong < 0.0){ return rayStart;}if (rangeAlong > length){return rayEnd;}return VectorAdd(rayStart, VectorMultiply(dir, [rangeAlong, rangeAlong, rangeAlong]));}

UI.AddCheckbox("indicators")
UI.AddCheckbox("buy awp")
UI.AddSliderInt('yaw randomizer min', 0, 60);
UI.AddSliderInt('yaw randomizer max', 0, 60);
UI.AddCheckbox("trap-walk")
UI.AddColorPicker("indicators color")
UI.AddHotkey("min dmg override indicator");
var predicted_time = 0;
var buy = false;
var jagowalking = false;


function auto_buy_prediction() {
    predicted_time = Globals.Curtime() + Convar.GetInt("mp_round_restart_delay");
    buy = true;
}

function auto_buy_purchase() {
    if (buy && Globals.Curtime() + (Local.Latency() / 1000) >= predicted_time + (Local.Latency() / 1000)) {
        Cheat.ExecuteCommand("buy awp");
        Cheat.ExecuteCommand("buy awp");
        Cheat.ExecuteCommand("buy awp");
        buy = false;
    }
}

function auto_buy_purchased() {
    buy = false;
}

function main_yaw() {
    var local_player = Entity.GetLocalPlayer();
    var target_player = Entity.IsAlive(Ragebot.GetTarget());
    var distance_delta = left_distance = trace(local_player, [0, Local.GetViewAngles()[1] - 23]) - (right_distance = trace(local_player, [0, Local.GetViewAngles()[1] + 23]));
    var swap = 1;

    var max_desync = UI.GetValue('Misc', 'JAVASCRIPT', 'yaw randomizer max')
    var min_desync = UI.GetValue('Misc', 'JAVASCRIPT', 'yaw randomizer min')
    


if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter"))
{
    swap = 1;
}
else 
{
    swap = -1;
}
var trapwalk_delta = 0;
    var desync_delta = 0;
    desync_delta = rand(min_desync, max_desync);
    trapwalk_delta = rand(17, 24);
                                                    
  //  if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "legit desync")) {
  //      UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true);
  //      UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", true);
  //      UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0)
  //      UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180)
  //      UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
  //      UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180)
  //      UI.SetValue("Anti-Aim", "Extra", "Pitch", 0)
  //  }
  //  else {
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0)
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", false);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0)
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
        UI.SetValue("Anti-Aim", "Extra", "Pitch", 1)
  //  }
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script Items","trap-walk") == true && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk"))
    {
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(trapwalk_delta * swap);
        AntiAim.SetLBYOffset(0);
        jagowalking = true;
        side = 3
    }
    else
    {
        jagowalking = false;
        if (target_player != true) 
        {
            if (distance_delta >= 1) 
            {
                AntiAim.SetOverride(1);
                    AntiAim.SetFakeOffset(0);
                    AntiAim.SetRealOffset(desync_delta * swap);
            
                AntiAim.SetLBYOffset(0);
                side = 1
            }
            else if (distance_delta <= -1) 
            {

                    AntiAim.SetFakeOffset(0);
                    AntiAim.SetRealOffset(desync_delta * swap);
                
                AntiAim.SetLBYOffset(0);
                side = 2
            }
        }
        else 
        {

                AntiAim.SetOverride(1);
                AntiAim.SetFakeOffset(0);
                AntiAim.SetRealOffset(desync_delta * swap);
                AntiAim.SetLBYOffset(0);
                side = 3
            
        }
    }
}

function hsv_to_rgb(h, s, v)
{
    var r, g, b, i, f, p, q, t;
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}
function getCustomValue(xy) {
    var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", xy);
        return value;}
    var position = {
      x1: 0,
      y1: 0
    }

function draw_fatality_rect(x, y, width, height)
{
    var rgbcolor = hsv_to_rgb(Global.Realtime() * UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Gradient Speed"), 1, 1);

}

function draw_fatality_rect2(x2, y2, width2, height2)
{
    var rgbcolor = {r:0,g:0,b:0};

    Render.Rect( x2 + 45, y2 + 2, width2 + 60, height2 + -10, [ rgbcolor.g, rgbcolor.b, rgbcolor.r, 200 ] );
    Render.FilledRect( x2 + 46, y2 + 3, width2 + 58, height2 + -10, [ 55, 55, 55, 200 ] );
    Render.FilledRect( x2 + 50, y2 + 7, width2 - -50, height2 - 19, [ 30, 30, 30, 200 ] ); // black
    Render.Rect( x2 + 50, y2 + 6, width2 - -50, height2 + -17, [ rgbcolor.g, rgbcolor.b, rgbcolor.r, 200 ] );
}   


function main_indicators() {
    var desync_delta = clamp(Math.abs(Math.round(Local.GetRealYaw() - Local.GetFakeYaw())), 0, 60)
    var alpha = Math.sin(Math.abs(-3.14 + (Globals.Curtime() * (1 / .75)) % (3.14 * 2))) * 255;
    var col = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "indicators color");
    var font = Render.AddFont("Verdana", 11, 11);
    var font2 = Render.AddFont("Verdana", 15, 15);
    var font3 = Render.AddFont("Verdana", 20, 20);
    var font4 = Render.AddFont("Verdana", 11, 11);
    var font5 = Render.AddFont("Verdana", 11, 11);
    if (desync_delta > 10) {
        Render.String(Global.GetScreenSize()[0] / 2 - 7, Global.GetScreenSize()[1] / 2 + 20, 0, "" + desync_delta, [col[0], col[1], col[2], 255], font3);
        Render.String(Global.GetScreenSize()[0] / 2 + 7, Global.GetScreenSize()[1] / 2 + 10, 0, "", [col[0], col[1], col[2], 255], font2);
    }
    else {
        Render.String(Global.GetScreenSize()[0] / 2 - 3, Global.GetScreenSize()[1] / 2 + 20, 0, "" + desync_delta, [col[0], col[1], col[2], 255], font);
        Render.String(Global.GetScreenSize()[0] / 2 + 3, Global.GetScreenSize()[1] / 2 + 10, 0, "", [col[0], col[1], col[2], 255], font2);
    }
     if (jagowalking == true)
    {
        Render.String(Global.GetScreenSize()[0] / 2 + 1 - 31, Global.GetScreenSize()[1] / 2 + 1 + 50, 0, "TRAPWALK", [0, 0, 0, alpha], font4);
        Render.String(Global.GetScreenSize()[0] / 2 - 31, Global.GetScreenSize()[1] / 2 + 50, 0, "TRAPWALK", [col[0], col[1], col[2], alpha], font4);
    }
    else {
        Render.String(Global.GetScreenSize()[0] / 2 + 1 - 28, Global.GetScreenSize()[1] / 2 + 1 + 50, 0, "TRAPYAW", [0, 0, 0, alpha], font4);
        Render.String(Global.GetScreenSize()[0] / 2 - 28, Global.GetScreenSize()[1] / 2 + 50, 0, "TRAPYAW", [col[0], col[1], col[2], alpha], font4);
    }
    Render.GradientRect((Global.GetScreenSize()[0] / 2 + -desync_delta * 2) + desync_delta + 2, Global.GetScreenSize()[1] / 2 + 40, desync_delta, 3, 1, [col[0], col[1], col[2], 0], [col[0], col[1], col[2], 255]);
    Render.GradientRect((Global.GetScreenSize()[0] / 2 + -desync_delta * 2) + (desync_delta * 2), Global.GetScreenSize()[1] / 2 + 40, desync_delta, 3, 1, [col[0], col[1], col[2], 255], [col[0], col[1], col[2], 0]);
    var pos = 65
    if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "min dmg override indicator")) {
        Render.String(Global.GetScreenSize()[0] / 2 + 1 - 12, Global.GetScreenSize()[1] / 2 + 1 + pos, 0, "dmg", [0, 0, 0, alpha], font5);
        Render.String(Global.GetScreenSize()[0] / 2 - 12, Global.GetScreenSize()[1] / 2 + pos, 0, "dmg", [col[0], col[1], col[2], alpha], font5);
    }
}


function main_Draw() {
    var local_player = Entity.GetLocalPlayer();
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "indicators") == true) {
        if (Entity.IsAlive(local_player)) {
            main_indicators();
        }
    }
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "watermark") == true) {
        watermark();
    }
}

function main_CreateMove() {
    main_yaw();
    prediction_breaker();
    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items","buy awp") == true) {
        auto_buy_purchase();
    }
}

Cheat.RegisterCallback("CreateMove", "main_CreateMove")
Cheat.RegisterCallback("round_end", "auto_buy_prediction");
Cheat.RegisterCallback("item_purchase", "auto_buy_purchased");
Cheat.RegisterCallback("Draw", "main_Draw");