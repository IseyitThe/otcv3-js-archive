var screen_size = Global.GetScreenSize();
var x = Global.GetScreenSize()[0] / 2;
var y = Global.GetScreenSize()[1] / 2 + 65;
var x1 = Global.GetScreenSize()[0]

function getVelocity(index) {
    players = Entity.GetPlayers();
    for (i = 0; i < players['length']; i++) {
        ;
    }; {
        var velocity = Entity.GetProp(index, 'CBasePlayer', 'm_vecVelocity[0]');
        var velocity_result = Math['sqrt'](velocity[0] * velocity[0] + velocity[1] * velocity[1])
    }
    return velocity_result
}

function ebalmatb() {
    add_y = +35
    add_x = 0;
    var font = Render.AddFont('Calibri', 16, 700);
    if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")) {
        add_y = add_y + 32
        if (Exploit.GetCharge() == 1) {
            Render.GradientRect(25, y + add_y - 1, 15, 29, 90, [0, 0, 0, 50], [0, 0, 0, 0]);
            Render.GradientRect(5, y + add_y - 1, 20, 29, 90, [0, 0, 0, 0], [0, 0, 0, 50]);
            Render.StringCustom(10, y + add_y + 1, 0, "DT", [0, 0, 0, 255], font);
            Render.StringCustom(10, y + add_y, 0, "DT", [255, 255, 255, 255], font);
        }
        else {
            Render.GradientRect(25, y + add_y - 1, 15, 29, 90, [0, 0, 0, 50], [0, 0, 0, 0]);
            Render.GradientRect(5, y + add_y - 1, 20, 29, 90, [0, 0, 0, 0], [0, 0, 0, 50]);
            Render.StringCustom(10, y + add_y + 1, 0, "DT", [0, 0, 0, 255], font);
            Render.StringCustom(10, y + add_y, 0, "DT", [250, 20, 20, 255], font);
        }
    }
    if (getVelocity(Entity.GetLocalPlayer()) >= 251 && getVelocity(Entity.GetLocalPlayer()) < 280) {
        add_y = add_y + 32
        Render.GradientRect(25, y + add_y - 1, 15, 29, 90, [0, 0, 0, 50], [0, 0, 0, 0]);
        Render.GradientRect(5, y + add_y - 1, 20, 29, 90, [0, 0, 0, 0], [0, 0, 0, 50]);
        Render.StringCustom(10, y + add_y + 1, 0, "LC", [0, 0, 0, 255], font);
        Render.StringCustom(10, y + add_y, 0, "LC", [250, 20, 20, 255], font);
    }
    if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
        add_y = add_y + 32
        Render.GradientRect(35, y + add_y - 1, 30, 29, 90, [0, 0, 0, 50], [0, 0, 0, 0]);
        Render.GradientRect(5, y + add_y - 1, 30, 29, 90, [0, 0, 0, 0], [0, 0, 0, 50]);
        Render.StringCustom(10, y + add_y + 1, 0, "DUCK", [0, 0, 0, 255], font);
        Render.StringCustom(10, y + add_y, 0, "DUCK", [255, 255, 255, 255], font);
    }
    if (getVelocity(Entity.GetLocalPlayer()) >= 281) {
        add_y = add_y + 32
        Render.GradientRect(25, y + add_y - 1, 15, 29, 90, [0, 0, 0, 50], [0, 0, 0, 0]);
        Render.GradientRect(5, y + add_y - 1, 20, 29, 90, [0, 0, 0, 0], [0, 0, 0, 50]);
        Render.StringCustom(10, y + add_y + 1, 0, "LC", [0, 0, 0, 255], font);
        Render.StringCustom(10, y + add_y, 0, "LC", [132, 195, 16, 255], font);
    }
    if (UI.GetValue("Misc", "GENERAL", "Miscellaneous", "Extended backtracking")) {
        add_y = add_y + 32
        Render.GradientRect(25, y + add_y - 1, 30, 29, 90, [0, 0, 0, 50], [0, 0, 0, 0]);
        Render.GradientRect(5, y + add_y - 1, 20, 29, 90, [0, 0, 0, 0], [0, 0, 0, 50]);
        Render.StringCustom(10, y + add_y + 1, 0, "PING", [0, 0, 0, 255], font);
        Render.StringCustom(10, y + add_y, 0, "PING", [132, 195, 16, 255], font);
    }
    if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots")) {
        add_y = add_y + 32
        Render.GradientRect(45, y + add_y - 1, 40, 29, 90, [0, 0, 0, 50], [0, 0, 0, 0]);
        Render.GradientRect(5, y + add_y - 1, 40, 29, 90, [0, 0, 0, 0], [0, 0, 0, 50]);
        Render.StringCustom(10, y + add_y + 1, 0, "ONSHOT", [0, 0, 0, 255], font);
        Render.StringCustom(10, y + add_y, 0, "ONSHOT", [132, 195, 16, 255], font);
    }
    if (UI.IsHotkeyActive('Script items', 'Scout Override')) {
        add_y = add_y + 32
        Render.GradientRect(55, y + add_y - 1, 50, 29, 90, [0, 0, 0, 50], [0, 0, 0, 0]);
        Render.GradientRect(5, y + add_y - 1, 50, 29, 90, [0, 0, 0, 0], [0, 0, 0, 50]);
        Render.StringCustom(10, y + add_y + 1, 0, "Damage: 10", [0, 0, 0, 255], font);
        Render.StringCustom(10, y + add_y, 0, "Damage: 10", [200, 200, 200, 255], font);
    }
    if (UI.IsHotkeyActive("Script Items", "Dormant Aimbot")) {
        add_y = add_y + 32
        Render.GradientRect(25, y + add_y - 1, 15, 29, 90, [0, 0, 0, 50], [0, 0, 0, 0]);
        Render.GradientRect(5, y + add_y - 1, 20, 29, 90, [0, 0, 0, 0], [0, 0, 0, 50]);
        Render.StringCustom(10, y + add_y + 1, 0, "DA", [0, 0, 0, 255], font);
        Render.StringCustom(10, y + add_y, 0, "DA", [132, 195, 16, 255], font);
    }
    if (UI.GetValue("Anti-Aim", "Fake angles", "LBY mode") == 0) {
        add_y = add_y + 32
        Render.GradientRect(40, y + add_y - 1, 35, 29, 90, [0, 0, 0, 50], [0, 0, 0, 0]);
        Render.GradientRect(5, y + add_y - 1, 35, 29, 90, [0, 0, 0, 0], [0, 0, 0, 50]);
        Render.StringCustom(10, y + add_y + 1, 0, "Normal", [0, 0, 0, 255], font);
        Render.StringCustom(10, y + add_y, 0, "Normal", [250, 20, 20, 255], font);

    }
    if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
        add_y = add_y + 32
        Render.GradientRect(35, y + add_y - 1, 30, 29, 90, [0, 0, 0, 50], [0, 0, 0, 0]);
        Render.GradientRect(5, y + add_y - 1, 30, 29, 90, [0, 0, 0, 0], [0, 0, 0, 50]);
        Render.StringCustom(10, y + add_y + 1, 0, "BAIM", [0, 0, 0, 255], font);
        Render.StringCustom(10, y + add_y, 0, "BAIM", [250, 20, 20, 255], font);

    }
    if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
        add_y = add_y + 32
        Render.GradientRect(32, y + add_y - 1, 27, 29, 90, [0, 0, 0, 50], [0, 0, 0, 0]);
        Render.GradientRect(5, y + add_y - 1, 27, 29, 90, [0, 0, 0, 0], [0, 0, 0, 50]);
        Render.StringCustom(10, y + add_y + 1, 0, "SAFE", [0, 0, 0, 255], font);
        Render.StringCustom(10, y + add_y, 0, "SAFE", [132, 195, 16, 255], font);

    }
    if (UI.GetValue("Anti-Aim", "Rage Anti-Aim", "At targets")) {
        add_y = add_y + 32
        Render.GradientRect(22, y + add_y - 1, 17, 29, 90, [0, 0, 0, 50], [0, 0, 0, 0]);
        Render.GradientRect(5, y + add_y - 1, 17, 29, 90, [0, 0, 0, 0], [0, 0, 0, 50]);
        Render.StringCustom(10, y + add_y + 1, 0, "AT", [0, 0, 0, 255], font);
        Render.StringCustom(10, y + add_y, 0, "AT", [132, 195, 16, 255], font);

    }
    if (UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction")) {
        add_y = add_y + 32
        Render.GradientRect(60, y + add_y - 1, 55, 29, 90, [0, 0, 0, 50], [0, 0, 0, 0]);
        Render.GradientRect(5, y + add_y - 1, 55, 29, 90, [0, 0, 0, 0], [0, 0, 0, 50]);
        Render.StringCustom(10, y + add_y + 1, 0, "FREESTAND", [0, 0, 0, 255], font);
        Render.StringCustom(10, y + add_y, 0, "FREESTAND", [132, 195, 16, 255], font);

    }

}

Global.RegisterCallback("Draw", "ebalmatb");
Cheat.RegisterCallback("Draw", "getVelocity");