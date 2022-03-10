var direction;
UI.AddHotkey("Left");
UI.AddHotkey("Right");
UI.AddHotkey("Back");
UI.AddHotkey("Forward");

function onCreateMove() {
    if (UI.IsHotkeyActive("JAVASCRIPT", "Left")) {
        direction = 0;
    }
    if (UI.IsHotkeyActive("JAVASCRIPT", "Right")) {
        direction = 1;
    }
    if (UI.IsHotkeyActive("JAVASCRIPT", "Back")) {
        direction = 2;
    }
    if (UI.IsHotkeyActive("JAVASCRIPT", "Forward")) {
        direction = 3;
    }

    switch (direction) {
        case 0:
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -90);
            break;
        case 1:
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 90);
            break;
        case 2:
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
            break;
        case 3:
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180);
            break;
        default:
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
    }
}

Global.RegisterCallback("CreateMove", "onCreateMove");

UI.AddColorPicker("Real Color");
UI.AddColorPicker("Fake Color");

var real_color = UI.GetColor("JAVASCRIPT", "Real Color");
var fake_color = UI.GetColor("JAVASCRIPT", "Fake Color");

function draw_circle(x, y, radius, thickness, color) {
    var inner = radius - thickness;

    for (; radius > inner; --radius) {
        Render.Circle(x, y, radius, color);
    }
}

function draw_arc(x, y, radius, start_angle, percent, thickness, color) {
    var precision = (2 * Math.PI) / 50;
    var step = Math.PI / 180;
    var inner = radius - thickness;
    var end_angle = (start_angle + percent) * step;
    var start_angle = (start_angle * Math.PI) / 180;

    for (; radius > inner; --radius) {
        for (var angle = start_angle; angle < end_angle; angle += precision) {
            var cx = Math.round(x + radius * Math.cos(angle));
            var cy = Math.round(y + radius * Math.sin(angle));

            var cx2 = Math.round(x + radius * Math.cos(angle + precision));
            var cy2 = Math.round(y + radius * Math.sin(angle + precision));

            Render.Line(cx, cy, cx2, cy2, color);
        }
    }
}

function adjust_angle(angle) {
    if (angle < 0) {
        angle = (90 + angle * (-1));
    } else if (angle > 0) {
        angle = (90 - angle);
    }

    return angle;
}

function main() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    var screen_middle_x = Render.GetScreenSize()[0] * 0.5;
    var screen_middle_y = Render.GetScreenSize()[1] * 0.5;
    var view_yaw = Local.GetViewAngles()[1] - 180;
    var real = adjust_angle(Local.GetRealYaw() - view_yaw);
    var fake = adjust_angle(Local.GetFakeYaw() - view_yaw);

    draw_arc(screen_middle_x, screen_middle_y, 200, real - (10 * 0.5), 10, 2, UI.GetColor("JAVASCRIPT", "Real Color"));
    draw_arc(screen_middle_x, screen_middle_y, 200, fake - (10 * 0.5), 10, 2, UI.GetColor("JAVASCRIPT", "Fake Color"));
}

Cheat.RegisterCallback("Draw", "main");