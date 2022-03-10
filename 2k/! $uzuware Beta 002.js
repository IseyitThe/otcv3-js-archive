Cheat.RegisterCallback('Draw', 'handle_visibility');
UI.AddCheckbox('Enable Advanced Misslogs');
UI.AddCheckbox('Enable chat logging');
UI.AddCheckbox('Enable Keybinds');
UI.AddColorPicker('Hotkeys');
UI.AddCheckbox('Enable AntiAim & Indicators');
UI.AddCheckbox('Enable Indicators');
UI.AddHotkey('Smart Peek');
UI.AddDropdown('Smart Peek Options', ['Peek Fake', 'Peek Real']);
UI.AddHotkey('Smart Fake');
UI.AddHotkey('Smart Freestand');
UI.AddHotkey('Low Delta AA');
UI.AddHotkey('Legit AA');
UI.AddCheckbox('Enable dmg override');
UI.AddHotkey('Dmg override');
UI.AddSliderInt('Default override', 1, 130);
UI.AddSliderInt('Pistol override', 1, 130);
UI.AddSliderInt('Heavy pistol override', 1, 130);
UI.AddSliderInt('Scout override', 1, 130);
UI.AddSliderInt('AWP override', 1, 130);
UI.AddSliderInt('Auto override', 1, 130);
UI.AddCheckbox('Enable AA Arrows');
UI.AddCheckbox('Draw Desync Circle');
UI.AddHotkey('Left Hotkey');
UI.AddHotkey('Back Hotkey');
UI.AddHotkey('Right Hotkey');
UI.AddColorPicker('Selected arrow color');
UI.AddColorPicker('Selected fake arrow color');
UI.AddDropdown("Custom ClanTag", ["off", "SuzuWare.Vip"]);
UI.AddSliderInt("Custom ClanTag Speed", 1, 10);
UI.AddCheckbox("Scope");
UI.AddColorPicker("Scope color");
UI.AddCheckbox("Indicator");
UI.AddColorPicker("Indicator color");

var lasttime = 0;

function onRender() {
    var tag = UI.GetValue("Script Items", "Custom ClanTag");
    var speed = UI.GetValue("Script Items", "Custom ClanTag Speed");
    var time = parseInt((Globals.Curtime() * speed))
    if (time != lasttime) {
        if (tag == 0) { Local.SetClanTag(" "); }
        if (tag == 1) {
            switch ((time) % 30) {
                case 1: { Local.SetClanTag(" "); break; }
                case 2: { Local.SetClanTag("S "); break; }
                case 3: { Local.SetClanTag("Su "); break; }
                case 4: { Local.SetClanTag("Suz "); break; }
                case 5: { Local.SetClanTag("Suzu "); break; }
                case 6: { Local.SetClanTag("Suzu. "); break; }
                case 7: { Local.SetClanTag("Suzu.V "); break; }
                case 8: { Local.SetClanTag("Suzu.Vi "); break; }
                case 9: { Local.SetClanTag("SuzuWare.Vip "); break; }
                case 10: { Local.SetClanTag("Suzu.Vi "); break; }
                case 11: { Local.SetClanTag("Suzu.V "); break; }
                case 12: { Local.SetClanTag("Suzu. "); break; }
                case 13: { Local.SetClanTag("Suzu "); break; }
                case 14: { Local.SetClanTag("Suz "); break; }
                case 15: { Local.SetClanTag("Su "); break; }
                case 16: { Local.SetClanTag("S "); break; }
                case 17: { Local.SetClanTag(" "); break; }


            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");

var screen_size = Render.GetScreenSize();

function d() {

    local = Entity.GetLocalPlayer();
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Scope") || !Entity.IsValid(local) || !Entity.IsAlive(local)) return;
    col = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Scope color");
    var local = Entity.GetLocalPlayer();
    var is_scope = Entity.GetProp(local, "DT_CSPlayer", "m_bIsScoped");
    if (is_scope) {
        var screen_size = Global.GetScreenSize();
        x = screen_size[0];
        y = screen_size[1];

        Render.GradientRect(x / 2, y / 2 - 350, 2, 280, 0, col, [55, 59, 68, 150]);
        Render.GradientRect(x / 2 - 380, y / 2, 280, 2, 1, col, [55, 59, 68, 100]);
        Render.GradientRect(x / 2 + 110, y / 2, 280, 2, 1, [100, 68, 59, 55], col);
        Render.GradientRect(x / 2, y / 2 + 75, 2, 280, 0, [55, 59, 68, 100], col);
    }
}

Cheat.RegisterCallback("Draw", "d")

function draw() {
    local = Entity.GetLocalPlayer();
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Indicator") || !Entity.IsValid(local) || !Entity.IsAlive(local)) return;
    font = Render.AddFont("Verdana", 8, 400);
    x = screen_size[0];
    y = screen_size[1];
    col = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Indicator color");
    real_yaw = Local.GetRealYaw();
    fake_yaw = Local.GetFakeYaw();
    delta = Math.min(Math.abs(real_yaw - fake_yaw) / 2, 60).toFixed(0);
    delta_size = Render.TextSizeCustom(delta, font);
    Render.StringCustom(x / 2, y / 2 + 2430, 1, delta, [255, 255, 255, 255], font);
    Render.Circle(x / 2 + delta_size[0] - 2, y / 2 + 2545, 2, [255, 255, 255, 255])
    Render.GradientRect(x / 2, y / 2 + 52, (125 / 60) * delta, 2, 1, col, [0, 0, 0, 0]);
    Render.GradientRect(x / 2 - (125 / 60) * delta + 1, y / 2 + 52, (125 / 60) * delta, 2, 1, [0, 0, 0, 0], col);
}

Cheat.RegisterCallback("Draw", "draw");


function random_int(_0xf303x2, _0xf303x3) {
    return Math['floor'](Math['random']() * (Math['ceil'](_0xf303x3) - Math['floor'](_0xf303x2) + 1)) + Math['floor'](_0xf303x2)
}
username = Cheat.GetUsername();
var aa_state = 'STATIC';
var aa_state2 = 'ON-SHOT';
var aa_color = [255, 255, 255, 255];
var aa_color2 = [170, 170, 170, 0];
var time = Globals.Realtime();
var time123 = Globals.Realtime();
var state = 10;
var screen_size = Render.GetScreenSize();
var CanUse1 = false;
var CanUse2 = false;
var CanUse3 = false;
var CanUse4 = false;
var alpha = 0;
var alpha_b = 0;
var y = screen_size[1] - 200;
var y1 = screen_size[1] - 200;
var alpha1 = 0;
var alpha1_b = 0;
var y2 = screen_size[1] - 200;
var alpha2 = 0;
var alpha2_b = 0;
var y3 = screen_size[1] - 200;
var alpha3 = 0;
var alpha3_b = 0;
var y3 = screen_size[1] - 200;
var alpha3 = 0;
var alpha3_b = 0;
var y4 = screen_size[1] - 200;
var alpha4 = 0;
var alpha4_b = 0;
var y5 = screen_size[1] - 200;
var alpha5 = 0;
var alpha5_b = 0;
var y6 = screen_size[1] - 200;
var alpha6 = 0;
var alpha6_b = 0;
var y7 = screen_size[1] - 200;
var alpha7 = 0;
var alpha7_b = 0;
var cache = [UI.GetValue('Rage', 'GENERAL', 'Targeting', 'Minimum damage'), UI.GetValue('Rage', 'PISTOL', 'Targeting', 'Minimum damage'), UI.GetValue('Rage', 'HEAVY PISTOL', 'Targeting', 'Minimum damage'), UI.GetValue('Rage', 'SCOUT', 'Targeting', 'Minimum damage'), UI.GetValue('Rage', 'AWP', 'Targeting', 'Minimum damage'), UI.GetValue('Rage', 'AUTOSNIPER', 'Targeting', 'Minimum damage')];
const whitelist = function () {
    const _0xf303x2a = [username];
    if (~_0xf303x2a['indexOf'](username)) {
        return true
    } else {
        return false
    }
};

function isNative(_0xf303x2c) {
    return ("yes")
}
var switch_ = false;
var jitterupdate = false;
var spam = false;

function clamp(_0xf303x31, _0xf303x2, _0xf303x3) {
    return Math['max'](_0xf303x2, Math['min'](_0xf303x3, _0xf303x31))
}

function advanced_fakelag() {
    if (!World.GetServerString()) {
        return
    };
    var _0xf303x33 = UI.GetValue('Script items', 'Fakelag type');
    var _0xf303x34 = UI.GetValue('Script items', 'Random Min');
    var _0xf303x35 = UI.GetValue('Script items', 'Random Max');
    var _0xf303x36 = UI.GetValue('Script items', 'Max Value');
    var _0xf303x37 = UI.GetValue('Script items', 'First Value');
    var _0xf303x38 = UI.GetValue('Script items', 'Second Value');
    var _0xf303x39 = UI.GetValue('Script items', 'Step');
    var _0xf303x3a = UI.GetValue('Script items', 'Base Value');
    var _0xf303x3b = UI.GetValue('Script items', 'Spam Delay');
    var _0xf303x3c = UI.GetValue('Anti-Aim', 'Fake-Lag', 'Limit');
    var _0xf303x3d = 0;
    if (CanUse4 && UI.GetValue('Script items', 'Enable Advanced Fakelag') == 1) {
        switch (_0xf303x33) {
        case 0:
            UI.SetValue('Anti-Aim', 'Fake-Lag', 'Trigger limit', 14);
            UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 1);
            _0xf303x3d = random_int(_0xf303x34, _0xf303x35);
            break;
        case 1:
            UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 1);
            UI.SetValue('Anti-Aim', 'Fake-Lag', 'Trigger limit', 14);
            if (_0xf303x3c >= _0xf303x36) {
                break
            };
            _0xf303x3d = clamp(_0xf303x3c + _0xf303x39, 0, _0xf303x36);
            break;
        case 2:
            UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 1);
            UI.SetValue('Anti-Aim', 'Fake-Lag', 'Trigger limit', 14);
            if (!jitterupdate) {
                _0xf303x3d = _0xf303x37;
                jitterupdate = !jitterupdate
            } else {
                if (jitterupdate) {
                    _0xf303x3d = _0xf303x38;
                    jitterupdate = !jitterupdate
                }
            };
            break;
        case 3:
            UI.SetValue('Anti-Aim', 'Fake-Lag', 'Trigger limit', 14);
            _0xf303x3d = _0xf303x3a;
            if (!spam && Globals.Realtime() > time123 + _0xf303x3b) {
                UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 0);
                spam = !spam;
                time123 = Globals.Realtime()
            } else {
                if (spam && Globals.Realtime() > time123 + _0xf303x3b) {
                    UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 1);
                    spam = !spam;
                    time123 = Globals.Realtime()
                }
            };
            break
        };
        UI.SetValue('Anti-Aim', 'Fake-Lag', 'Limit', _0xf303x3d)
    }
}
Cheat.RegisterCallback('CreateMove', 'advanced_fakelag');

function indicators() {
    if (!World.GetServerString()) {
        return
    };
    if (CanUse3 && UI.GetValue('Script items', 'Enable Indicators') == 1 && UI.GetValue('Script items', 'Enable AntiAim & Indicators') == 1) {
        const _0xf303x3f = Math['sin'](Math['abs'](-Math['PI'] + (Globals.Curtime() * (1 / 0.75)) % (Math['PI'] * 2))) * 255;
        const _0xf303x40 = Math['sin'](Math['abs'](-Math['PI'] + (Globals.Curtime() * (1 / 0.75)) % (Math['PI'] * 2))) * 155;
        const _0xf303x41 = Math['sin'](Math['abs'](-Math['PI'] + (Globals.Curtime() * (1 / 0.75)) % (Math['PI'] * 2))) * 55;
        var _0xf303x42 = UI.IsHotkeyActive('Rage', 'GENERAL', 'Exploits', 'Doubletap');
        var _0xf303x43 = Exploit.GetCharge();
        var _0xf303x44 = UI.IsHotkeyActive('Rage', 'GENERAL', 'General', 'Force safe point');
        var _0xf303x45 = UI.IsHotkeyActive('Rage', 'GENERAL', 'General', 'Force body aim');
        var _0xf303x46 = UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck');
        var _0xf303x47 = UI.IsHotkeyActive('Script items', 'Dmg override');
        var _0xf303x48 = Render.TextSize('Suzu YAW', 7);
        var _0xf303x49 = Render.TextSize(aa_state, 7);
        var _0xf303x4a = Render.TextSize(aa_state2, 7);
        var _0xf303x4b = Render.TextSize('DT', 7);
        var _0xf303x4f = Render.TextSize('DMG', 7);
        if (UI.IsHotkeyActive('Script items', 'Smart Peek')) {
            aa_state = 'otter peek'
        } else {
            if (UI.IsHotkeyActive('Script items', 'Smart Fake')) {
                aa_state = 'otter peek'
            } else {
                if (UI.IsHotkeyActive('Script items', 'Smart Freestand')) {
                    aa_state = 'Freestanding'
                } else {
                    if (UI.IsHotkeyActive('Script items', 'Low Delta AA')) {
                        aa_state = 'Minimized delta'
                    } else {
                        if (UI.IsHotkeyActive('Script items', 'Legit AA')) {
                            aa_state = 'Legit Break'
                        } else {
                            aa_state = 'STATIC'
                        }
                    }
                }
            }
        };
        if (UI.IsHotkeyActive('Rage', 'GENERAL', 'Exploits', 'Hide shots')) {
            aa_state2 = '';
            aa_color2 = [128, 255, 0, 255]
        } else {
            aa_state2 = '';
            aa_color2 = [150, 150, 150, 0]
        };
        switch (aa_state) {
        case 'otter peek':
            aa_color = [51, 255, 255, 255];
            break;
        case 'hviox peek':
            aa_color = [178, 102, 255, 255];
            break;
        case 'Freestanding':
            aa_color = [104, 203, 0, 255];
            break;
        case 'Minimized Delta':
            aa_color = [95, 234, 250, 255];
            break;
        case 'Legit Break':
            aa_color = [255, 102, 178, 255];
            break;
        default:
            aa_color = [255, 255, 255, 255];
            break
        };
        Render.String(screen_size[0] / 2 - _0xf303x48[0] / 2 + 2, screen_size[1] / 2 + 30 + _0xf303x48[1] / 2 + 2, 0, 'Suzu yaw', [242, 150, 250, _0xf303x41], 8);
        Render.String(screen_size[0] / 2 - _0xf303x48[0] / 2 + 1, screen_size[1] / 2 + 30 + _0xf303x48[1] / 2 + 1, 0, 'Suzu yaw', [242, 150, 250, _0xf303x40], 8);
        Render.String(screen_size[0] / 2 - _0xf303x48[0] / 2, screen_size[1] / 2 + 30 + _0xf303x48[1] / 2, 0, 'Suzu yaw', [242, 150, 250, _0xf303x3f], 8);
        Render.String(screen_size[0] / 2 - _0xf303x49[0] / 2, screen_size[1] / 2 + 50 + _0xf303x49[1] / 2, 0, aa_state, aa_color, 8);
        Render.String(screen_size[0] / 2 - _0xf303x4a[0] / 2 + 2, screen_size[1] / 2 + 90 + _0xf303x4a[1] / 2 + 2, 0, aa_state2, [aa_color2[0], aa_color2[1], aa_color2[2], 55], 8);
        Render.String(screen_size[0] / 2 - _0xf303x4a[0] / 2 + 1, screen_size[1] / 2 + 90 + _0xf303x4a[1] / 2 + 1, 0, aa_state2, [aa_color2[0], aa_color2[1], aa_color2[2], 155], 8);
        Render.String(screen_size[0] / 2 - _0xf303x4a[0] / 2, screen_size[1] / 2 + 90 + _0xf303x4a[1] / 2, 0, aa_state2, aa_color2, 8);
        Render.String(screen_size[0] / 2 - _0xf303x4c[0] / 2 + 2, screen_size[1] / 2 + 160 + _0xf303x4c[1] / 2 + 2, 0, 'BAIM', _0xf303x45 ? [128, 255, 0, 55] : [150, 150, 150, 55], 8);
        Render.String(screen_size[0] / 2 - _0xf303x4c[0] / 2 + 1, screen_size[1] / 2 + 160 + _0xf303x4c[1] / 2 + 1, 0, 'BAIM', _0xf303x45 ? [128, 255, 0, 155] : [150, 150, 150, 155], 8);
        Render.String(screen_size[0] / 2 - _0xf303x4c[0] / 2, screen_size[1] / 2 + 160 + _0xf303x4c[1] / 2, 0, 'BAIM', _0xf303x45 ? [128, 255, 0, 255] : [150, 150, 150, 255], 8);
        Render.String(screen_size[0] / 2 - _0xf303x4e[0] / 2 + 2, screen_size[1] / 2 + 180 + _0xf303x4e[1] / 2 + 2, 0, 'FD', _0xf303x46 ? [128, 255, 0, 55] : [150, 150, 150, 55], 8);
        Render.String(screen_size[0] / 2 - _0xf303x4e[0] / 2 + 1, screen_size[1] / 2 + 180 + _0xf303x4e[1] / 2 + 1, 0, 'FD', _0xf303x46 ? [128, 255, 0, 155] : [150, 150, 150, 155], 8);
        Render.String(screen_size[0] / 2 - _0xf303x4e[0] / 2, screen_size[1] / 2 + 180 + _0xf303x4e[1] / 2, 0, 'FD', _0xf303x46 ? [128, 255, 0, 255] : [150, 150, 150, 255], 8);
        Render.String(screen_size[0] / 2 - _0xf303x4f[0] / 2 + 2, screen_size[1] / 2 + 200 + _0xf303x4f[1] / 2 + 2, 0, 'DMG', _0xf303x47 ? [128, 255, 0, 55] : [150, 150, 150, 55], 8);
        Render.String(screen_size[0] / 2 - _0xf303x4f[0] / 2 + 1, screen_size[1] / 2 + 200 + _0xf303x4f[1] / 2 + 1, 0, 'DMG', _0xf303x47 ? [128, 255, 0, 155] : [150, 150, 150, 155], 8);
        Render.String(screen_size[0] / 2 - _0xf303x4f[0] / 2, screen_size[1] / 2 + 200 + _0xf303x4f[1] / 2, 0, 'DMG', _0xf303x47 ? [128, 255, 0, 255] : [150, 150, 150, 255], 8)
    }
}

function dmg_override() {
    if (UI.IsHotkeyActive('Script items', 'Dmg override')) {
        UI.SetValue('Rage', 'GENERAL', 'Targeting', 'Minimum damage', UI.GetValue('Script items', 'Default override'));
        UI.SetValue('Rage', 'PISTOL', 'Targeting', 'Minimum damage', UI.GetValue('Script items', 'Pistol override'));
        UI.SetValue('Rage', 'HEAVY PISTOL', 'Targeting', 'Minimum damage', UI.GetValue('Script items', 'Heavy pistol override'));
        UI.SetValue('Rage', 'SCOUT', 'Targeting', 'Minimum damage', UI.GetValue('Script items', 'Scout override'));
        UI.SetValue('Rage', 'AWP', 'Targeting', 'Minimum damage', UI.GetValue('Script items', 'AWP override'));
        UI.SetValue('Rage', 'AUTOSNIPER', 'Targeting', 'Minimum damage', UI.GetValue('Script items', 'Auto override'))
    } else {
        UI.SetValue('Rage', 'GENERAL', 'Targeting', 'Minimum damage', cache[0]);
        UI.SetValue('Rage', 'PISTOL', 'Targeting', 'Minimum damage', cache[1]);
        UI.SetValue('Rage', 'HEAVY PISTOL', 'Targeting', 'Minimum damage', cache[2]);
        UI.SetValue('Rage', 'SCOUT', 'Targeting', 'Minimum damage', cache[3]);
        UI.SetValue('Rage', 'AWP', 'Targeting', 'Minimum damage', cache[4]);
        UI.SetValue('Rage', 'AUTOSNIPER', 'Targeting', 'Minimum damage', cache[5])
    }
}

function on_unload() {
    UI.SetValue('Rage', 'GENERAL', 'Targeting', 'Minimum damage', cache[0]);
    UI.SetValue('Rage', 'PISTOL', 'Targeting', 'Minimum damage', cache[1]);
    UI.SetValue('Rage', 'HEAVY PISTOL', 'Targeting', 'Minimum damage', cache[2]);
    UI.SetValue('Rage', 'SCOUT', 'Targeting', 'Minimum damage', cache[3]);
    UI.SetValue('Rage', 'AWP', 'Targeting', 'Minimum damage', cache[4]);
    UI.SetValue('Rage', 'AUTOSNIPER', 'Targeting', 'Minimum damage', cache[5])
}

function authorization() {
    var _0xf303x61 = UI.GetValue('Enable Advanced Misslogs');
    var _0xf303x62 = false;
    if (whitelist() && isNative(Cheat.GetUsername) && isNative(Cheat.Print) && isNative(Cheat.PrintChat) && isNative(Cheat.PrintColor) && isNative(Cheat.RegisterCallback) && isNative(Cheat.ExecuteCommand)) {
        _0xf303x62 = true
    } else {
        _0xf303x62 = false
    };
    if (y <= screen_size[1] - 250 && alpha >= 0 && state >= 0 && alpha_b > 0) {
        y--;
        alpha -= 1.275;
        alpha_b -= 0.775
    };
    if (y > screen_size[1] - 250 && state >= 1 && alpha < 255 && alpha_b < 155) {
        y -= 0.25;
        alpha += 1.275;
        alpha_b += 0.775
    };
    if (y1 <= screen_size[1] - 250 && alpha1 >= 0 && state == 3 && alpha1_b > 0 && state != 10) {
        y1--;
        alpha1 -= 1.275;
        alpha1_b -= 0.775
    };
    if (y1 > screen_size[1] - 250 && state >= 2 && alpha1 < 255 && alpha1_b < 155 && state != 10) {
        y1 -= 0.25;
        alpha1 += 1.275;
        alpha1_b += 0.775
    };
    if (y2 <= screen_size[1] - 250 && alpha2 >= 0 && state >= 4 && alpha2_b > 0 && state != 10) {
        y2--;
        alpha2 -= 1.275;
        alpha2_b -= 0.775
    };
    if (y2 > screen_size[1] - 250 && state >= 3 && alpha2 < 255 && alpha2_b < 155 && state != 10) {
        y2 -= 0.25;
        alpha2 += 1.275;
        alpha2_b += 0.775
    };
    if (y3 <= screen_size[1] - 250 && alpha3 >= 0 && state >= 5 && alpha3_b > 0) {
        y3--;
        alpha3 -= 1.275;
        alpha3_b -= 0.775
    };
    if (y3 > screen_size[1] - 250 && state == 4 && alpha3 < 255 && alpha3_b < 155) {
        y3 -= 0.25;
        alpha3 += 1.275;
        alpha3_b += 0.775
    };
    if (y4 <= screen_size[1] - 250 && alpha4 >= 0 && state >= 9 && alpha4_b > 0 && state != 10) {
        y4--;
        alpha4 -= 1.275;
        alpha4_b -= 0.775
    };
    if (y4 > screen_size[1] - 250 && state >= 8 && state != 10 && alpha4 < 255 && alpha4_b < 155 && state != 10) {
        y4 -= 0.25;
        alpha4 += 1.275;
        alpha4_b += 0.775
    };
    if (y5 <= screen_size[1] - 250 && alpha5 >= 0 && state >= 6 && alpha5_b > 0 && state != 10) {
        y5--;
        alpha5 -= 1.275;
        alpha5_b -= 0.775
    };
    if (y5 > screen_size[1] - 250 && state >= 5 && alpha5 < 255 && alpha5_b < 155 && state != 10) {
        y5 -= 0.25;
        alpha5 += 1.275;
        alpha5_b += 0.775
    };
    if (y6 <= screen_size[1] - 250 && alpha6 >= 0 && state >= 7 && alpha6_b > 0 && state != 10) {
        y6--;
        alpha6 -= 1.275;
        alpha6_b -= 0.775
    };
    if (y6 > screen_size[1] - 250 && state >= 6 && alpha6 < 255 && alpha6_b < 155 && state != 10) {
        y6 -= 0.25;
        alpha6 += 1.275;
        alpha6_b += 0.775
    };
    if (y7 <= screen_size[1] - 250 && alpha7 >= 0 && state >= 8 && alpha7_b > 0 && state != 10) {
        y7--;
        alpha7 -= 1.275;
        alpha7_b -= 0.775
    };
    if (y7 > screen_size[1] - 250 && state >= 7 && alpha7 < 255 && alpha7_b < 155 && state != 10) {
        y7 -= 0.25;
        alpha7 += 1.275;
        alpha7_b += 0.775
    };
    if (state >= 1) {
        width = 310;
        font = Render.AddFont('Verdana', 7, 8050);
        Render.FilledRect((screen_size[0] / 2) - width / 2, y, width, 25, [0, 0, 0, alpha_b]);
        Render.GradientRect((screen_size[0] / 2) - width / 2, y - 3, 310, 3, 0, [255, 255, 255, alpha], [5, 30, 110, alpha]);
        Render.StringCustom((screen_size[0] / 2) - (width / 2) + 135, y + 6, 0, 'Injecting SuzuWare.Vip', [255, 255, 255, alpha], font);
    };
    if (state >= 2 && state < 4) {
        font = Render.AddFont('Verdana', 10, 800);
        Render.FilledRect((screen_size[0] / 2) - 170, y1, 340, 30, [0, 0, 0, alpha1_b]);
        Render.GradientRect((screen_size[0] / 2) - 170, y1 - 3, 340, 3, 0, [255, 255, 255, alpha1], [5, 30, 110, alpha1]);
        Render.StringCustom((screen_size[0] / 2) - 90, y1 + 9, 0, 'Injecting almost done.', [255, 255, 255, alpha1], font);
    };
    if (state >= 3 && state < 7) {
        font = Render.AddFont('Verdana', 10, 800);
        Render.FilledRect((screen_size[0] / 2) - 200, y2, 380, 30, [0, 0, 0, alpha2_b]);
        Render.GradientRect((screen_size[0] / 2) - 200, y2 - 3, 380, 3, 0, [255, 255, 255, alpha2], [5, 30, 110, alpha2]);
        Render.StringCustom((screen_size[0] / 2) - 90, y2 + 9, 0, 'Successfully Injected.', [255, 255, 255, alpha2], font);
    };
    if (state >= 4 && _0xf303x62 && state <= 5) {
        font = Render.AddFont('Verdana', 8, 800);
        Render.FilledRect((screen_size[0] / 2) - 200, y3, 320, 30, [0, 0, 0, alpha3_b]);
        Render.GradientRect((screen_size[0] / 2) - 200, y3 - 3, 320, 3, 0, [255, 255, 255, alpha3], [5, 30, 110, alpha3]);
        Render.StringCustom((screen_size[0] / 2) - 140, y3 + 9, 0, ' Successfully loaded: Hitlogs ', [255, 255, 255, alpha3], font);
    };
    if (state >= 5 && state < 1231 && _0xf303x62) {
        font = Render.AddFont('Verdana', 8, 800);
        Render.FilledRect((screen_size[0] / 2) - 200, y5, 320, 30, [0, 0, 0, alpha5_b]);
        Render.GradientRect((screen_size[0] / 2) - 200, y5 - 3, 320, 3, 0, [255, 255, 255, alpha5], [5, 30, 110, alpha5]);
        Render.StringCustom((screen_size[0] / 2) - 140, y5 + 9, 0, 'Wait', [255, 255, 255, alpha5], font);
    };
    if (state >= 6 && state < 853443 && _0xf303x62) {
        font = Render.AddFont('Verdana', 7, 800);
        Render.FilledRect((screen_size[0] / 2) - 225, y6, 370, 30, [0, 0, 0, alpha6_b]);
        Render.GradientRect((screen_size[0] / 2) - 225, y6 - 3, 370, 3, 0, [255, 255, 255, alpha6], [5, 30, 110, alpha6]);
        Render.StringCustom((screen_size[0] / 2) - 165, y6 + 9, 0, ' Successfully loaded: AntiAim & Indicators ', [255, 255, 255, alpha6], font);
    };
    if (state >= 7 && state < 853443 && _0xf303x62 && CanUse4) {
        font = Render.AddFont('Verdana', 7, 800);
        Render.FilledRect((screen_size[0] / 2) - 225, y7, 370, 30, [0, 0, 0, alpha7_b]);
        Render.GradientRect((screen_size[0] / 2) - 225, y7 - 3, 370, 3, 0, [255, 255, 255, alpha7], [5, 30, 110, alpha7]);
        Render.StringCustom((screen_size[0] / 2) - 165, y7 + 9, 0, ' Successfully loaded: Advanced Fakelag & DT  ', [255, 255, 255, alpha7], font);
    };
    if (state >= 7 && _0xf303x62) {
        font = Render.AddFont('Verdana', 10, 800);
        var _0xf303x63 = (username['length'] * 10) + 390;
        Render.FilledRect((screen_size[0] / 2) - 245, y4, _0xf303x63, 30, [0, 0, 0, alpha4_b]);
        Render.GradientRect((screen_size[0] / 2) - 245, y4 - 3, _0xf303x63, 3, 0, [255, 255, 255, alpha4], [5, 30, 110, alpha4]);
        Render.StringCustom((screen_size[0] / 2) - 200, y4 + 9, 0, '-ooo-', [246, 224, 23, alpha4], font);
        Render.StringCustom((screen_size[0] / 2) - 155, y4 + 9, 0, 'SuzuWare.Vip has finished setup. Welcome, ' + username + '.', [255, 255, 255, alpha4], font);
    };
    if (state >= 4 && state < 9 && !_0xf303x62) {
        font = Render.AddFont('Verdana', 10, 800);
        Render.FilledRect((screen_size[0] / 2) - 210, y3, 390, 30, [0, 0, 0, alpha3_b]);
        Render.GradientRect((screen_size[0] / 2) - 210, y3 - 3, 390, 3, 0, [104, 106, 128, alpha3], [5, 30, 110, alpha3]);
        Render.StringCustom((screen_size[0] / 2) - 160, y3 + 9, 0, '[-]', [255, 0, 0, alpha3], font);
        Render.StringCustom((screen_size[0] / 2) - 130, y3 + 9, 0, 'Authorization failed. Closing the game', [255, 255, 255, alpha3], font);
        Render.String((screen_size[0] / 2) - 190, y3 + 9, 0, 'U', [255, 255, 255, alpha3], 5)
    };
    if (state >= 4 && state != 10 && _0xf303x62) {
        CanUse1 = true
    };
    if (state >= 5 && state != 10 && _0xf303x62) {
        CanUse2 = true
    };
    if (state >= 6 && state != 10 && _0xf303x62) {
        CanUse3 = true
    };
    if (state >= 7 && state != 10 && _0xf303x62) {
        CanUse4 = true
    };
    if (Globals.Realtime() > time + 1 && state == 10) {
        Cheat.PrintColor([46, 246, 53, 255], '[+] ');
        Cheat.PrintColor([255, 255, 255, 255], 'Ratting your pc <3' + '\x0A');
        time = Globals.Realtime();
        state = 1
    };
    if (Globals.Realtime() > time + 2 && state == 1) {
        Cheat.PrintColor([46, 246, 53, 255], '[+] ');
        Cheat.PrintColor([255, 255, 255, 255], 'Ratting your pc <3 x2' + '\x0A');
        time = Globals.Realtime();
        state = 2
    };
    if (Globals.Realtime() > time + 2 && state == 2) {
        Cheat.PrintColor([246, 146, 46, 255], '[!] ');
        Cheat.PrintColor([255, 255, 255, 255], 'Ratting your pc <3 x3' + '\x0A');
        time = Globals.Realtime();
        state = 3
    };
    if (Globals.Realtime() > time + 2 && state == 3 && _0xf303x62) {
        Cheat.PrintColor([46, 246, 53, 255], '[+] ');
        Cheat.PrintColor([255, 255, 255, 255], 'Successfully loaded: Miss Logger |' + '\x0A');
        time = Globals.Realtime();
        state = 4
    };
    if (Globals.Realtime() > time + 2 && state == 4 && _0xf303x62) {
        Cheat.PrintColor([46, 246, 53, 255], '[+] ');
        Cheat.PrintColor([255, 255, 255, 255], 'Wait' + '\x0A');
        time = Globals.Realtime();
        state = 5
    };
    if (Globals.Realtime() > time + 2 && state == 5 && _0xf303x62) {
        Cheat.PrintColor([46, 246, 53, 255], '[+] ');
        Cheat.PrintColor([255, 255, 255, 255], 'Successfully loaded: AntiAim & Indicators | ' + '\x0A');
        time = Globals.Realtime();
        state = 6
    };
    if (Globals.Realtime() > time + 2 && state == 3 && !_0xf303x62) {
        Cheat.PrintColor([255, 0, 0, 255], '[-] ');
        Cheat.PrintColor([255, 255, 255, 255], 'Authorization failed. Closing the game' + '\x0A');
        time = Globals.Realtime();
        state = 4
    };
    if (Globals.Realtime() > time + 2 && state == 4 && !_0xf303x62) {
        time = Globals.Realtime();
        state = 5;
        //Cheat.ExecuteCommand('quit')
    };
    if (Globals.Realtime() > time + 0.1 && state == 8 && _0xf303x62) {
        time = Globals.Realtime();
        state = 9
    };
    if (Globals.Realtime() > time + 2 && state == 6 && _0xf303x62) {
        Cheat.PrintColor([46, 246, 53, 255], '[+] ');
        Cheat.PrintColor([255, 255, 255, 255], 'Successfully loaded: Advanced Fakelag & DT | ' + '\x0A');
        time = Globals.Realtime();
        CanUse4 = true;
        state = 7
    };
    if (Globals.Realtime() > time + 2 && state == 8 && _0xf303x62) {
        time = Globals.Realtime();
        state = 9
    };
    if (Globals.Realtime() > time + 2 && state == 7 && _0xf303x62) {
        Cheat.PrintColor([246, 224, 23, 255], '[POG <3]');
        Cheat.PrintColor([255, 255, 255, 255], 'SUZUWARE BETA has finished setup. Hello, ' + username + '\x0A');
        time = Globals.Realtime();
        state = 8
    };
    if (Globals.Realtime() > time + 2 && state == 5 && _0xf303x62) {
        time = Globals.Realtime();
        state = 6
    };
    if (Globals.Realtime() > time + 2 && state == 6 && _0xf303x62) {
        time = Globals.Realtime();
        state = 7
    }
}

function handle_visibility() {
    if (CanUse1) {
        if (UI.GetValue('Script items', 'Enable dmg override') == 1 && UI.GetValue('Script items', 'Enable AntiAim & Indicators') == 1 && CanUse3) {
            UI.SetEnabled('Script items', 'Dmg override', true);
            UI.SetEnabled('Script items', 'Default override', true);
            UI.SetEnabled('Script items', 'Pistol override', true);
            UI.SetEnabled('Script items', 'Heavy pistol override', true);
            UI.SetEnabled('Script items', 'Scout override', true);
            UI.SetEnabled('Script items', 'AWP override', true);
            UI.SetEnabled('Script items', 'Auto override', true)
        } else {
            UI.SetEnabled('Script items', 'Dmg override', false);
            UI.SetEnabled('Script items', 'Default override', false);
            UI.SetEnabled('Script items', 'Pistol override', false);
            UI.SetEnabled('Script items', 'Heavy pistol override', false);
            UI.SetEnabled('Script items', 'Scout override', false);
            UI.SetEnabled('Script items', 'AWP override', false);
            UI.SetEnabled('Script items', 'Auto override', false)
        };
        UI.SetEnabled('Script items', 'Enable Advanced Misslogs', true);
        if (UI.GetValue('Script items', 'Enable Keybinds') == 1 && CanUse2) {
            UI.SetEnabled('Script items', 'Hotkeys', true)
        } else {
            UI.SetEnabled('Script items', 'Hotkeys', false)
        };
        if (UI.GetValue('Script items', 'Enable AntiAim & Indicators') == 1 && CanUse3) {
            UI.SetEnabled('Script items', 'Smart Peek', true);
            UI.SetEnabled('Script items', 'Smart Peek Options', true);
            UI.SetEnabled('Script items', 'Smart Fake', true);
            UI.SetEnabled('Script items', 'Smart Freestand', true);
            UI.SetEnabled('Script items', 'Low Delta AA', true);
            UI.SetEnabled('Script items', 'Legit AA', true);
            UI.SetEnabled('Script items', 'Enable dmg override', true);
            UI.SetEnabled('Script items', 'Enable AA Arrows', true);
            UI.SetEnabled('Script items', 'Enable Indicators', true);
            UI.SetEnabled('Script items', 'Draw Desync Circle', true);
            if (UI.GetValue('Script items', 'Enable AA Arrows') == 1) {
                UI.SetEnabled('Script items', 'Selected arrow color', true);
                UI.SetEnabled('Script items', 'Selected fake arrow color', true);
                UI.SetEnabled('Script items', 'Left Hotkey', true);
                UI.SetEnabled('Script items', 'Back Hotkey', true);
                UI.SetEnabled('Script items', 'Right Hotkey', true);
                UI.SetEnabled('Script items', 'Draw Desync Circle', true)
            } else {
                UI.SetEnabled('Script items', 'Selected arrow color', false);
                UI.SetEnabled('Script items', 'Selected fake arrow color', false);
                UI.SetEnabled('Script items', 'Left Hotkey', false);
                UI.SetEnabled('Script items', 'Back Hotkey', false);
                UI.SetEnabled('Script items', 'Right Hotkey', false);
                UI.SetEnabled('Script items', 'Draw Desync Circle', false)
            }
        } else {
            UI.SetEnabled('Script items', 'Selected arrow color', false);
            UI.SetEnabled('Script items', 'Selected fake arrow color', false);
            UI.SetEnabled('Script items', 'Left Hotkey', false);
            UI.SetEnabled('Script items', 'Back Hotkey', false);
            UI.SetEnabled('Script items', 'Right Hotkey', false);
            UI.SetEnabled('Script items', 'Smart Peek', false);
            UI.SetEnabled('Script items', 'Smart Peek Options', false);
            UI.SetEnabled('Script items', 'Smart Fake', false);
            UI.SetEnabled('Script items', 'Smart Freestand', false);
            UI.SetEnabled('Script items', 'Low Delta AA', false);
            UI.SetEnabled('Script items', 'Legit AA', false);
            UI.SetEnabled('Script items', 'Enable dmg override', false);
            UI.SetEnabled('Script items', 'Enable AA Arrows', false);
            UI.SetEnabled('Script items', 'Enable Indicators', false);
        };
        if (UI.GetValue('Script items', 'Enable Advanced Misslogs') == 1 && CanUse1) {
            UI.SetEnabled('Script items', 'Enable chat logging', true)
        } else {
            UI.SetEnabled('Script items', 'Enable chat logging', false)
        };
        var _0xf303x33 = UI.GetValue('Script items', 'Fakelag type');
        if (UI.GetValue('Script items', 'Enable Advanced Fakelag') == 1 && CanUse4) {
            UI.SetEnabled('Script items', 'Fakelag type', true);
            switch (_0xf303x33) {
            case 0:
                UI.SetEnabled('Script items', 'Random Min', true);
                UI.SetEnabled('Script items', 'Random Max', true);
                UI.SetEnabled('Script items', 'Max Value', false);
                UI.SetEnabled('Script items', 'Step', false);
                UI.SetEnabled('Script items', 'First Value', false);
                UI.SetEnabled('Script items', 'Second Value', false);
                UI.SetEnabled('Script items', 'Spam Delay', false);
                UI.SetEnabled('Script items', 'Base Value', false);
                break;
            case 1:
                UI.SetEnabled('Script items', 'Random Min', false);
                UI.SetEnabled('Script items', 'Random Max', false);
                UI.SetEnabled('Script items', 'Max Value', true);
                UI.SetEnabled('Script items', 'Step', true);
                UI.SetEnabled('Script items', 'First Value', false);
                UI.SetEnabled('Script items', 'Second Value', false);
                UI.SetEnabled('Script items', 'Spam Delay', false);
                UI.SetEnabled('Script items', 'Base Value', false);
                break;
            case 2:
                UI.SetEnabled('Script items', 'Random Min', false);
                UI.SetEnabled('Script items', 'Random Max', false);
                UI.SetEnabled('Script items', 'Max Value', false);
                UI.SetEnabled('Script items', 'Step', false);
                UI.SetEnabled('Script items', 'First Value', true);
                UI.SetEnabled('Script items', 'Second Value', true);
                UI.SetEnabled('Script items', 'Spam Delay', false);
                UI.SetEnabled('Script items', 'Base Value', false);
                break;
            case 3:
                UI.SetEnabled('Script items', 'Random Min', false);
                UI.SetEnabled('Script items', 'Random Max', false);
                UI.SetEnabled('Script items', 'Max Value', false);
                UI.SetEnabled('Script items', 'Step', false);
                UI.SetEnabled('Script items', 'First Value', false);
                UI.SetEnabled('Script items', 'Second Value', false);
                UI.SetEnabled('Script items', 'Spam Delay', true);
                UI.SetEnabled('Script items', 'Base Value', true);
                break
            }
        } else {
            UI.SetEnabled('Script items', 'Fakelag type', false);
            UI.SetEnabled('Script items', 'Random Min', false);
            UI.SetEnabled('Script items', 'Random Max', false);
            UI.SetEnabled('Script items', 'Max Value', false);
            UI.SetEnabled('Script items', 'Step', false);
            UI.SetEnabled('Script items', 'First Value', false);
            UI.SetEnabled('Script items', 'Second Value', false);
            UI.SetEnabled('Script items', 'Spam Delay', false);
            UI.SetEnabled('Script items', 'Base Value', false)
        };
        if (CanUse2) {
            UI.SetEnabled('Script items', 'Enable Keybinds', true)
        };
        if (CanUse3) {
            UI.SetEnabled('Script items', 'Enable AntiAim & Indicators', true)
        };
        if (CanUse4) {
            UI.SetEnabled('Script items', 'Enable Advanced Fakelag', true);
            UI.SetEnabled('Script items', 'Enable instant DT', true);
            if (UI.GetValue('Script items', 'Enable instant DT') == 1) {
                UI.SetEnabled('Script items', 'Recharge delay(13-20 is recomended)', true)
            } else {
                UI.SetEnabled('Script items', 'Recharge delay(13-20 is recomended)', false)
            }
        };
        if (!CanUse2) {}
    };
    if (!CanUse1) {
        UI.SetEnabled('Script items', 'Enable Advanced Misslogs', false);
        UI.SetEnabled('Script items', 'Enable AntiAim & Indicators', false);
        UI.SetEnabled('Script items', 'Selected arrow color', false);
        UI.SetEnabled('Script items', 'Selected fake arrow color', false);
        UI.SetEnabled('Script items', 'Left Hotkey', false);
        UI.SetEnabled('Script items', 'Back Hotkey', false);
        UI.SetEnabled('Script items', 'Right Hotkey', false);
        UI.SetEnabled('Script items', 'Smart Peek', false);
        UI.SetEnabled('Script items', 'Smart Peek Options', false);
        UI.SetEnabled('Script items', 'Smart Fake', false);
        UI.SetEnabled('Script items', 'Smart Freestand', false);
        UI.SetEnabled('Script items', 'Low Delta AA', false);
        UI.SetEnabled('Script items', 'Legit AA', false);
        UI.SetEnabled('Script items', 'Enable dmg override', false);
        UI.SetEnabled('Script items', 'Dmg override', false);
        UI.SetEnabled('Script items', 'Default override', false);
        UI.SetEnabled('Script items', 'Pistol override', false);
        UI.SetEnabled('Script items', 'Heavy pistol override', false);
        UI.SetEnabled('Script items', 'Scout override', false);
        UI.SetEnabled('Script items', 'AWP override', false);
        UI.SetEnabled('Script items', 'Auto override', false);
        UI.SetEnabled('Script items', 'Enable AA Arrows', false);
        UI.SetEnabled('Script items', 'Enable Indicators', false);
        UI.SetEnabled('Script items', 'Enable Advanced Fakelag', false);
        UI.SetEnabled('Script items', 'Fakelag type', false);
        UI.SetEnabled('Script items', 'Random Min', false);
        UI.SetEnabled('Script items', 'Random Max', false);
        UI.SetEnabled('Script items', 'Max Value', false);
        UI.SetEnabled('Script items', 'Step', false);
        UI.SetEnabled('Script items', 'First Value', false);
        UI.SetEnabled('Script items', 'Second Value', false);
        UI.SetEnabled('Script items', 'Spam Delay', false);
        UI.SetEnabled('Script items', 'Base Value', false);
        UI.SetEnabled('Script items', 'Enable instant DT', false);
        UI.SetEnabled('Script items', 'Recharge delay(13-20 is recomended)', false);
        UI.SetEnabled('Script items', 'Hotkeys', false);
        UI.SetEnabled('Script items', 'Enable Keybinds', false);
        UI.SetEnabled('Script items', 'Hotkeys_x', false);
        UI.SetEnabled('Script items', 'Hotkeys_y', false);
        UI.SetEnabled('Script items', 'Enable chat logging', false);
        UI.SetEnabled('Script items', 'Draw Desync Circle', false);
    }
}

function radians_to_degrees(_0xf303x66) {
    return _0xf303x66 * (180 / Math['PI'])
}

function draw_circle1(_0xf303x5f, y, _0xf303x68, _0xf303x69, _0xf303x6a, _0xf303x6b) {
    first = true;
    old_screen_pos = Render.WorldToScreen([_0xf303x5f, y, _0xf303x68]);
    for (t = 0.000; t <= Math['PI'] * 2.1; t += _0xf303x6a) {
        if (first) {
            world_pos = [(_0xf303x69 * Math['cos'](-t) + _0xf303x5f), (_0xf303x69 * Math['sin'](-t) + y), _0xf303x68];
            old_screen_pos = Render.WorldToScreen(world_pos);
            first = false
        };
        world_pos = [(_0xf303x69 * Math['cos'](t) + _0xf303x5f), (_0xf303x69 * Math['sin'](t) + y), _0xf303x68];
        screen_pos = Render.WorldToScreen(world_pos);
        Render.Line(screen_pos[0], screen_pos[1], old_screen_pos[0], old_screen_pos[1], _0xf303x6b);
        old_screen_pos = screen_pos
    }
}
var huesos = Globals.Realtime();


function AA() {
    if (CanUse3) {
        if (UI.IsHotkeyActive('Script items', 'Low Delta AA')) {
            AntiAim.SetOverride(1);
            var _0xf303x71 = -10;
            var _0xf303x72 = 0;
            var _0xf303x73 = 1;
            var _0xf303x74 = 32;
            var _0xf303x75 = 15;
            var _0xf303x76 = _0xf303x73 ? _0xf303x74 : (_0xf303x74 * 2);
            AntiAim.SetFakeOffset(_0xf303x72);
            if (_0xf303x71 > 0) {
                AntiAim.SetRealOffset(_0xf303x72 - _0xf303x71 + _0xf303x76);
                if (_0xf303x71 < _0xf303x75) {
                    _0xf303x75 = _0xf303x71
                };
                _0xf303x73 ? AntiAim.SetLBYOffset(_0xf303x72 - _0xf303x75) : AntiAim.SetLBYOffset(_0xf303x72 + _0xf303x71 - _0xf303x75 * 2)
            } else {
                if (_0xf303x71 > _0xf303x75) {
                    _0xf303x75 = _0xf303x71
                };
                AntiAim.SetRealOffset(_0xf303x72 - _0xf303x71 - _0xf303x76);
                _0xf303x73 ? AntiAim.SetLBYOffset(_0xf303x72 + _0xf303x75) : AntiAim.SetLBYOffset(_0xf303x72 + _0xf303x71 + _0xf303x75 * 2)
            }
        } else {
            AntiAim.SetOverride(0)
        };
        if (UI.IsHotkeyActive('Script items', 'Legit AA')) {
            UI.SetValue('Misc', 'PERFORMANCE & INFORMATION', 'Information', 'Restrictions', 0);
            UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 180);
            UI.SetValue('Anti-Aim', 'Extra', 'Pitch', 0);
            yaw_cache = 0
        } else {
            UI.SetValue('Misc', 'PERFORMANCE & INFORMATION', 'Information', 'Restrictions', 1);
            UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', yaw_cache);
            UI.SetValue('Anti-Aim', 'Extra', 'Pitch', 1)
        };
        if (UI.IsHotkeyActive('Script items', 'Smart Fake')) {
            UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'At targets', 1)
        } else {
            UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'At targets', 0)
        };
        if (UI.IsHotkeyActive('Script items', 'Smart Freestand')) {
            UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Auto direction', 1)
        } else {
            UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Auto direction', 0)
        }
    }
}

function random_number(_0xf303x2, _0xf303x3) {
    _0xf303x2 = Math['ceil'](_0xf303x2);
    _0xf303x3 = Math['floor'](_0xf303x3);
    return Math['floor'](Math['random'] * (_0xf303x3 - _0xf303x2) + _0xf303x2)
}
hitboxes = ['generic', 'head', 'chest', 'stomach', 'left arm', 'right arm', 'left leg', 'right leg', '?'];
var scriptitems = ('Misc', 'JAVASCRIPT', 'Script items');
var shots = 0;
var predicthc = 0;
var safety = 0;
var hitboxName = '';
var choked = 0;
var exploit = 0;
var logs = [];
var logsct = [];
var logsalpha = [];

function getHitboxName(_0xf303x83) {
    switch (_0xf303x83) {
    case 0:
        hitboxName = 'head';
        break;
    case 1:
        hitboxName = 'head';
        break;
    case 2:
        hitboxName = 'stomach';
        break;
    case 3:
        hitboxName = 'stomach';
        break;
    case 4:
        hitboxName = 'stomach';
        break;
    case 5:
        hitboxName = 'chest';
        break;
    case 6:
        hitboxName = 'chest';
        break;
    case 7:
        hitboxName = 'left leg';
        break;
    case 8:
        hitboxName = 'right leg';
        break;
    case 9:
        hitboxName = 'left leg';
        break;
    case 10:
        hitboxName = 'right leg';
        break;
    case 11:
        hitboxName = 'left leg';
        break;
    case 12:
        hitboxName = 'right leg';
        break;
    case 13:
        hitboxName = 'left arm';
        break;
    case 14:
        hitboxName = 'right arm';
        break;
    case 15:
        hitboxName = 'left arm';
        break;
    case 16:
        hitboxName = 'left arm';
        break;
    case 17:
        hitboxName = 'right arm';
        break;
    case 18:
        hitboxName = 'right arm';
        break;
    default:
        hitboxName = 'body'
    };
    return hitboxName
}

function HitgroupName(_0xf303x83) {
    return hitboxes[_0xf303x83] || 'body'
}
var target = -1;
var shots_fired = 0;
var hits = 0;
var lastUpdate = 0;
var logged = false;

function ragebot_fire() {
    if (!CanUse1 || UI.GetValue('Script items', 'Enable Advanced Misslogs') == 0) {
        return
    };
    predicthc = Event.GetInt('hitchance');
    safety = Event.GetInt('safepoint');
    hitboxName = getHitboxName(Event.GetInt('hitbox'));
    exploit = (Event.GetInt('exploit') + 1).toString();
    target = Event.GetInt('target_index');
    shots_fired++;
    shots++;
    logged = false;
    lastUpdate = Globals.Curtime()
}

function hitlog() {
    if (!CanUse1 || UI.GetValue('Script items', 'Enable Advanced Misslogs') == 0) {
        return
    };
    var _0xf303x8c = Entity.GetEntityFromUserID(Event.GetInt('userid'));
    var _0xf303x8d = Entity.GetEntityFromUserID(Event.GetInt('attacker'));
    if (_0xf303x8d == Entity.GetLocalPlayer() && _0xf303x8c == target) {
        hits++
    };
    var _0xf303x8e = 'Hit ';
    me = Entity.GetLocalPlayer();
    hitbox = Event.GetInt('hitgroup');
    target_damage = Event.GetInt('dmg_health');
    target_health = Event.GetInt('health');
    victim = Event.GetInt('userid');
    _0xf303x8d = Event.GetInt('attacker');
    weapon = Event.GetString('weapon');
    victimIndex = Entity.GetEntityFromUserID(victim);
    attackerIndex = Entity.GetEntityFromUserID(_0xf303x8d);
    name = Entity.GetName(victimIndex);
    var _0xf303x8f = Globals.Tickcount() % 17;
    var _0xf303x90 = '';
    if (exploit == 2) {
        _0xf303x90 += 'T'
    };
    _0xf303x90 += 'B';
    if (hitbox == 1) {
        _0xf303x90 += 'H'
    };
    if (safety == 1) {
        safety = 'true'
    } else {
        safety = 'false'
    };
    if (weapon == 'hegrenade') {
        _0xf303x8e = 'Naded '
    } else {
        if (weapon == 'inferno') {
            _0xf303x8e = 'Burned '
        } else {
            if (weapon == 'knife') {
                _0xf303x8e = 'Knifed '
            }
        }
    };
    if (me == attackerIndex && me != victimIndex) {
        Cheat.PrintColor([255, 255, 255, 255], '[');
        Cheat.PrintColor([255, 255, 255, 255], ']');
        Cheat.PrintColor([198, 198, 198, 255], '[');
        Cheat.PrintColor([51, 255, 0, 255], '' + shots.toString() + '');
        Cheat.PrintColor([198, 198, 198, 255], '] ');
        Cheat.PrintColor([198, 198, 198, 255], '' + _0xf303x8e + name + '');
        Cheat.PrintColor([198, 198, 198, 255], '\'s ');
        Cheat.PrintColor([255, 231, 149, 255], '' + HitgroupName(hitbox) + '' + ' ');
        Cheat.PrintColor([198, 198, 198, 255], 'for ');
        Cheat.PrintColor([255, 0, 0, 255], '' + target_damage.toString() + '' + ' ');
        Cheat.PrintColor([198, 198, 198, 255], '(');
        Cheat.PrintColor([47, 253, 24, 255], '' + target_health.toString() + '' + ' ');
        Cheat.PrintColor([198, 198, 198, 255], 'remaining');
        Cheat.PrintColor([198, 198, 198, 255], ') ');
        Cheat.PrintColor([198, 198, 198, 255], 'aimed=');
        Cheat.PrintColor([255, 0, 0, 255], '' + hitboxName + '');
        Cheat.PrintColor([198, 198, 198, 255], '(');
        Cheat.PrintColor([198, 198, 198, 255], '' + predicthc.toString() + '');
        Cheat.PrintColor([198, 198, 198, 255], '%%');
        Cheat.PrintColor([198, 198, 198, 255], ') ');
        Cheat.PrintColor([198, 198, 198, 255], '(');
        Cheat.PrintColor([255, 231, 149, 255], '' + _0xf303x90 + '');
        Cheat.PrintColor([198, 198, 198, 255], ') ');
        Cheat.PrintColor([198, 198, 198, 255], '(');
        Cheat.PrintColor([255, 231, 149, 255], '' + _0xf303x8f + ':' + exploit + '');
        Cheat.PrintColor([198, 198, 198, 255], ')\x0A');
        if (_0xf303x8e == 'Hit ') {
            if (UI.GetValue('Script items', 'Enable chat logging')) {
                Cheat.PrintChat(' \x01[\x10SuzuWare\x08Js\x01][\x04' + shots.toString() + '\x08] ' + _0xf303x8e + name + '\'s 	' + HitgroupName(hitbox) + '\x08 for \x02' + target_damage.toString() + '\x08 (\x06' + target_health.toString() + '\x08 remaining) aimed=\x02' + hitboxName + '\x08(' + predicthc.toString() + '%%)\x08 (\x10' + _0xf303x90 + '\x08) (\x10' + _0xf303x8f + '\x08:\x10' + exploit + '\x08)\x0A')
            };
            logs['push']('[' + shots.toString() + '] ' + _0xf303x8e + name + '\'s ' + HitgroupName(hitbox) + ' for ' + target_damage.toString() + ' (' + target_health.toString() + ' remaining) aimed=' + hitboxName + '(' + predicthc.toString() + '%%) safety=' + safety + ' (' + _0xf303x90 + ') (' + _0xf303x8f + ':' + exploit + ')')
        } else {
            logs['push']('[' + shots.toString() + '] ' + _0xf303x8e + name + '\'s ' + HitgroupName(hitbox) + ' for ' + target_damage.toString() + ' (' + target_health.toString() + ' remaining)')
        };
        logsct['push'](Globals.Curtime());
        logsalpha['push'](255)
    };
    if (shots == 99) {
        shots = 0
    }
}

function removelogs() {
    if (!CanUse1 || UI.GetValue('Script items', 'Enable Advanced Misslogs') == 0) {
        return
    };
    if (logs['length'] > 6) {
        logs['shift']();
        logsct['shift']();
        logsalpha['shift']()
    };
    if (logsct[0] + 6.5 < Globals.Curtime()) {
        logsalpha[0] -= Globals.Frametime() * 600;
        if (logsalpha[0] < 0) {
            logs['shift']();
            logsct['shift']();
            logsalpha['shift']()
        }
    }
}

function onDraw1111() {
    if (!CanUse1 || UI.GetValue('Script items', 'Enable Advanced Misslogs') == 0) {
        return
    };
    if (!World.GetServerString()) {
        return
    };
    var _0xf303x5c = Render.AddFont('Lucida Console', 8, 0);
    var _0xf303x5b = Math['round'](Entity.GetProp(Entity.GetLocalPlayer(), 'CPlayerResource', 'm_iPing')).toString();
    if (!World.GetServerString()) {
        _0xf303x5b = 0
    };
    for (i = 0; i < logs['length']; i++) {
        Render.StringCustom(4, 4 + 13 * i, 0, logs[i], [0, 0, 0, logsalpha[i]], _0xf303x5c);
        Render.StringCustom(3, 3 + 13 * i, 0, logs[i], [255, 255, 255, logsalpha[i]], _0xf303x5c)
    };
    if (shots_fired > hits && (Globals.Curtime() - lastUpdate > (_0xf303x5b + 0.05) / 100)) {
        if (Globals.Curtime() - lastUpdate > 1) {
            shots_fired = 0;
            hits = 0
        };
        if (!logged) {
            var _0xf303x8f = Globals.Tickcount() % 16;
            logged = true;
            var _0xf303x93 = 'true';
            var _0xf303x94 = '?';
            if (safety == 0) {
                _0xf303x93 = 'false'
            };
            if (Entity.IsAlive(target) == false) {
                _0xf303x94 = 'death [death]'
            } else {
                if (Entity.IsAlive(Entity.GetLocalPlayer()) == false) {
                    _0xf303x94 = 'unknown [unregistered]'
                } else {
                    if (safety == true && predicthc < 76) {
                        _0xf303x94 = 'spread [S]'
                    } else {
                        if (safety == true && predicthc > 76) {
                            _0xf303x94 = 'animation desync [resolver]'
                        }
                    }
                }
            };
            var _0xf303x90 = '';
            if (exploit == 2) {
                _0xf303x90 += 'T'
            };
            _0xf303x90 += 'B';
            Cheat.PrintColor([255, 255, 255, 255], '[');
            Cheat.PrintColor([255, 0, 0, 255], '-');
            Cheat.PrintColor([255, 255, 255, 255], ']');
            Cheat.PrintColor([198, 198, 198, 255], '[');
            Cheat.PrintColor([51, 255, 0, 255], '' + shots.toString() + '');
            Cheat.PrintColor([198, 198, 198, 255], ']');
            Cheat.PrintColor([198, 198, 198, 255], ' Missed ');
            Cheat.PrintColor([198, 198, 198, 255], '' + Entity.GetName(target) + '');
            Cheat.PrintColor([198, 198, 198, 255], '\'s ');
            Cheat.PrintColor([255, 231, 149, 255], '' + hitboxName + '');
            Cheat.PrintColor([198, 198, 198, 255], '(');
            Cheat.PrintColor([198, 198, 198, 255], '' + predicthc.toString() + '');
            Cheat.PrintColor([198, 198, 198, 255], '%%) ');
            Cheat.PrintColor([198, 198, 198, 255], 'due to ');
            Cheat.PrintColor([255, 0, 0, 255], '' + _0xf303x94 + '' + ' ');
            Cheat.PrintColor([198, 198, 198, 255], '(');
            Cheat.PrintColor([255, 231, 149, 255], '' + _0xf303x90 + '');
            Cheat.PrintColor([198, 198, 198, 255], ') ');
            Cheat.PrintColor([198, 198, 198, 255], '(');
            Cheat.PrintColor([255, 231, 149, 255], '' + _0xf303x8f + ':' + exploit + '');
            Cheat.PrintColor([198, 198, 198, 255], ')\x0A');
            logs['push']('[' + shots.toString() + '] ' + 'Missed ' + Entity.GetName(target) + '\'s ' + hitboxName + '(' + predicthc.toString() + '%%) due to ' + _0xf303x94 + ', safety=' + _0xf303x93 + ' (' + _0xf303x90 + ') (' + _0xf303x8f + ':' + exploit + ')');
            if (UI.GetValue('Script items', 'Enable chat logging')) {
                Cheat.PrintChat(' \x01[\x02-\x01]\x08[\x04' + shots.toString() + '\x08] Missed ' + Entity.GetName(target) + '\'s \x10' + hitboxName + '\x08(' + predicthc.toString() + '%%) due to \x07' + _0xf303x94 + '\x08 (\x10' + _0xf303x90 + '\x08) (\x10' + _0xf303x8f + '\x08:\x10' + exploit + '\x08)')
            };
            logsct['push'](Globals.Curtime());
            logsalpha['push'](255);
            if (shots == 99) {
                shots = 0
            }
        }
    }
}
Global.RegisterCallback('ragebot_fire', 'ragebot_fire');
Global.RegisterCallback('player_hurt', 'hitlog');
Cheat.RegisterCallback('Draw', 'onDraw1111');
Global.RegisterCallback('Draw', 'removelogs');
Cheat.RegisterCallback('Draw', 'authorization');
var screen_size = Global.GetScreenSize();
var isLeftActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Left Hotkey');
var isRightActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Right Hotkey');
var isBackActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Back Hotkey');
var isInverted;
var drawLeft = 0;
var drawRight = 0;
var drawBack = 1;
LPx = [(screen_size[0] / 2) - 43, (screen_size[1] / 2) + 13];
LPy = [(screen_size[0] / 2) - 43, (screen_size[1] / 2) - 7];
LPz = [(screen_size[0] / 2) - 63, (screen_size[1] / 2) + 3];
RPx = [(screen_size[0] / 2) + 42, (screen_size[1] / 2) + 13];
RPy = [(screen_size[0] / 2) + 42, (screen_size[1] / 2) - 7];
RPz = [(screen_size[0] / 2) + 62, (screen_size[1] / 2) + 3];
LPxx = [(screen_size[0] / 2) - 42, (screen_size[1] / 2) + 14];
LPyy = [(screen_size[0] / 2) - 42, (screen_size[1] / 2) - 6];
LPzz = [(screen_size[0] / 2) - 62, (screen_size[1] / 2) + 4];
RPxx = [(screen_size[0] / 2) + 42, (screen_size[1] / 2) + 14];
RPyy = [(screen_size[0] / 2) + 42, (screen_size[1] / 2) - 6];
RPzz = [(screen_size[0] / 2) + 62, (screen_size[1] / 2) + 4];
BPx = [(screen_size[0] / 2) + 9, (screen_size[1] / 2) + 47];
BPy = [(screen_size[0] / 2) - 11, (screen_size[1] / 2) + 47];
BPz = [(screen_size[0] / 2) - 1, (screen_size[1] / 2) + 67];
BPxx = [(screen_size[0] / 2) + 10, (screen_size[1] / 2) + 48];
BPyy = [(screen_size[0] / 2) - 10, (screen_size[1] / 2) + 48];
BPzz = [(screen_size[0] / 2), (screen_size[1] / 2) + 68];
FPLx = [(screen_size[0] / 2) - 54, (screen_size[1] / 2) + 30];
FPLy = [(screen_size[0] / 2) - 30, (screen_size[1] / 2) + 56];
FPLz = [(screen_size[0] / 2) - 51, (screen_size[1] / 2) + 55];
FPRx = [(screen_size[0] / 2) + 54, (screen_size[1] / 2) + 30];
FPRy = [(screen_size[0] / 2) + 30, (screen_size[1] / 2) + 56];
FPRz = [(screen_size[0] / 2) + 51, (screen_size[1] / 2) + 55];
FPLxx = [(screen_size[0] / 2) - 56, (screen_size[1] / 2) + 29];
FPLyy = [(screen_size[0] / 2) - 32, (screen_size[1] / 2) + 55];
FPLzz = [(screen_size[0] / 2) - 53, (screen_size[1] / 2) + 54];
FPRxx = [(screen_size[0] / 2) + 53, (screen_size[1] / 2) + 29];
FPRyy = [(screen_size[0] / 2) + 29, (screen_size[1] / 2) + 55];
FPRzz = [(screen_size[0] / 2) + 50, (screen_size[1] / 2) + 54];
UI.SetColor('Misc', 'Selected arrow color', [36, 116, 181, 255]);
UI.SetColor('Misc', 'Selected fake arrow color', [222, 120, 151, 255]);

function drawString() {
    if (CanUse3 && UI.GetValue('Script items', 'Enable AA Arrows') == 1 && UI.GetValue('Script items', 'Enable AntiAim & Indicators') == 1) {
        selectedcp = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Selected arrow color');
        selected_red = selectedcp[0];
        selected_green = selectedcp[1];
        selected_blue = selectedcp[2];
        selected_alpha = selectedcp[3];
        selectedfcp = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Selected fake arrow color');
        selectedf_r = selectedfcp[0];
        selectedf_g = selectedfcp[1];
        selectedf_b = selectedfcp[2];
        selectedf_al = selectedfcp[3];
        const alpha = Math['sin'](Math['abs'](-Math['PI'] + (Globals.Curtime() * (1 / 0.3)) % (Math['PI'] * 2))) * 255;
        const _0xf303x9d = Math['sin'](Math['abs'](-Math['PI'] + (Globals.Curtime() * (1 / 0.7)) % (Math['PI'] * 2))) * 255;
        isFakeFD = UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake FD');
        isInverted = UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter');
        isLbyMode = UI.GetValue('Anti-Aim', 'Fake angles', 'LBY mode');
        isDesyncMode = UI.GetValue('Anti-Aim', 'Fake angles', 'Fake desync');
        localplayer_index = Entity.GetLocalPlayer();
        localplayer_alive = Entity.IsAlive(localplayer_index);
        var _0xf303x9e = Math['abs'](Local.GetRealYaw() - Local.GetFakeYaw());
        if (localplayer_alive == true) {
            Render.Polygon([LPxx, LPzz, LPyy], [0, 0, 0, 150]);
            Render.Polygon([RPyy, RPzz, RPxx], [0, 0, 0, 150]);
            Render.Polygon([BPyy, BPxx, BPzz], [0, 0, 0, 150]);
            Render.Polygon([FPLx, FPLy, FPLz], [0, 0, 0, 120]);
            Render.Polygon([FPRx, FPRz, FPRy], [0, 0, 0, 120]);
            if (isDesyncMode == 0) {
                if (isInverted) {
                    Render.Polygon([FPLxx, FPLyy, FPLzz], [selectedf_r, selectedf_g, selectedf_b, _0xf303x9d])
                } else {
                    Render.Polygon([FPRyy, FPRxx, FPRzz], [selectedf_r, selectedf_g, selectedf_b, _0xf303x9d])
                }
            } else {
                if (isDesyncMode == 1) {
                    if (isInverted) {
                        Render.Polygon([FPRxx, FPRzz, FPRyy], [selectedf_r, selectedf_g, selectedf_b, _0xf303x9d])
                    } else {
                        Render.Polygon([FPLxx, FPLyy, FPLzz], [selectedf_r, selectedf_g, selectedf_b, _0xf303x9d])
                    }
                }
            };
            if (drawLeft) {
                Render.Polygon([LPx, LPz, LPy], [selected_red, selected_green, selected_blue, alpha])
            } else {
                if (drawRight) {
                    Render.Polygon([RPy, RPz, RPx], [selected_red, selected_green, selected_blue, alpha])
                } else {
                    if (drawBack) {
                        Render.Polygon([BPy, BPx, BPz], [selected_red, selected_green, selected_blue, alpha])
                    }
                }
            }
        }
    }
}

function onCreateMove() {
    isLeftActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Left Hotkey');
    isRightActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Right Hotkey');
    isBackActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Back Hotkey');
    isFakeFD = UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake FD');
    if (isLeftActive) {
        drawLeft = 1;
        drawBack = 0;
        drawRight = 0;
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', -90);
        yaw_cache = -90;
        UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', false)
    } else {
        if (isRightActive) {
            drawLeft = 0;
            drawBack = 0;
            drawRight = 1;
            UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 90);
            yaw_cache = 90;
            UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', false)
        } else {
            if (isBackActive) {
                drawLeft = 0;
                drawBack = 1;
                drawRight = 0;
                yaw_cache = 0;
                UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 0);
                UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', true)
            }
        }
    }
}

function getValue(_0xf303xa1) {
    var _0xf303xa2 = UI.GetValue('Script items', _0xf303xa1);
    return _0xf303xa2
}

function Main() {
    Global.RegisterCallback('Draw', 'drawString');
    Global.RegisterCallback('CreateMove', 'onCreateMove')
}
Main();
var circle_radius = 35;
var arc_length = 35;
var arc_thickness = 4.5;
var arc_precision = 400;

function draw_circle(_0xf303x5f, y, _0xf303x69, _0xf303xa9, _0xf303x6b) {
    var _0xf303xaa = _0xf303x69 - _0xf303xa9;
    for (; _0xf303x69 > _0xf303xaa; --_0xf303x69) {
        Render.Circle(_0xf303x5f, y, _0xf303x69, _0xf303x6b)
    }
}

function draw_arc(_0xf303x5f, y, _0xf303x69, _0xf303xac, _0xf303xad, _0xf303xa9, _0xf303x6b) {
    var _0xf303xae = (2 * Math['PI']) / arc_precision;
    var _0xf303x39 = Math['PI'] / 180;
    var _0xf303xaa = _0xf303x69 - _0xf303xa9;
    var _0xf303xaf = (_0xf303xac + _0xf303xad) * _0xf303x39;
    var _0xf303xac = (_0xf303xac * Math['PI']) / 180;
    for (; _0xf303x69 > _0xf303xaa; --_0xf303x69) {
        for (var _0xf303xb0 = _0xf303xac; _0xf303xb0 < _0xf303xaf; _0xf303xb0 += _0xf303xae) {
            var _0xf303xb1 = Math['round'](_0xf303x5f + _0xf303x69 * Math['cos'](_0xf303xb0));
            var _0xf303xb2 = Math['round'](y + _0xf303x69 * Math['sin'](_0xf303xb0));
            var _0xf303xb3 = Math['round'](_0xf303x5f + _0xf303x69 * Math['cos'](_0xf303xb0 + _0xf303xae));
            var _0xf303xb4 = Math['round'](y + _0xf303x69 * Math['sin'](_0xf303xb0 + _0xf303xae));
            Render.Line(_0xf303xb1, _0xf303xb2, _0xf303xb3, _0xf303xb4, _0xf303x6b)
        }
    }
}

function adjust_angle(_0xf303xb0) {
    if (_0xf303xb0 < 0) {
        _0xf303xb0 = (90 + _0xf303xb0 * (-1))
    } else {
        if (_0xf303xb0 > 0) {
            _0xf303xb0 = (90 - _0xf303xb0)
        }
    };
    return _0xf303xb0
}
var inner_radius = 7;
var segments = 80;
distance = 12;

function draw1() {
    if (CanUse3 && UI.GetValue('Script items', 'Enable AA Arrows') == 1 && UI.GetValue('Script items', 'Enable AntiAim & Indicators') == 1 && UI.GetValue('Script items', 'Draw Desync Circle') == 1) {
        var _0xf303xb9 = UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter');
        var _0xf303x5f = screen_size[0] / 2;
        var y = screen_size[1] / 2;
        var _0xf303x5c = Render.AddFont('Verdana Bold', 20, 800);
        var _0xf303xba = Local.GetFakeYaw();
        var _0xf303xbb = Local.GetRealYaw();
        if (_0xf303xba < 0) {
            _0xf303xba = 360 + _0xf303xba
        };
        if (_0xf303xbb < 0) {
            _0xf303xbb = 360 + _0xf303xbb
        };
        angle = _0xf303xba - _0xf303xbb;
        if (Math['abs'](angle) > 240) {
            if (_0xf303xbb > _0xf303xba) {
                angle = 360 + angle
            } else {
                angle = angle - 360
            }
        };
        angle = angle / 2;
        localplayer_index = Entity.GetLocalPlayer();
        localplayer_alive = Entity.IsAlive(localplayer_index);
        if (localplayer_alive == true) {
            var _0xf303x6b = [255 - Math['abs'](angle * 3), Math['abs'](angle * 4), 0, 255];
            max_angle = 360 * (Math['abs'](angle) / 100) * 0.84;
            var _0xf303xbc = Entity.GetLocalPlayer();
            if (!Entity.IsAlive(_0xf303xbc)) {
                return
            };
            var _0xf303xbd = screen_size[0] * 0.5;
            var _0xf303xbe = screen_size[1] * 0.5;
            var _0xf303xbf = Local.GetViewAngles();
            var _0xf303xc0 = Local.GetRealYaw();
            var _0xf303xc1 = Local.GetFakeYaw();
            var _0xf303xc2 = _0xf303xbf[1] - 180;
            var _0xf303xc3 = adjust_angle(_0xf303xc1 - _0xf303xc2);
            draw_arc(_0xf303xbd, _0xf303xbe, circle_radius, _0xf303xc3 - (arc_length * 0.5), arc_length, arc_thickness, _0xf303x6b);
            var _0xf303xc4 = _0xf303xbe + circle_radius;
            var _0xf303xc5 = screen_size[1] * 0.0185185185;
            render_arc(_0xf303x5f, y, distance, inner_radius, -90, 360, segments, [0, 0, 0, 150]);
            render_arc(_0xf303x5f, y, distance, inner_radius, _0xf303xb9 ? -max_angle - 90 : -90, max_angle, segments, _0xf303x6b)
        }
    }
}
Cheat.RegisterCallback('Draw', 'draw1');

function render_arc(_0xf303x5f, y, _0xf303x69, _0xf303xc7, _0xf303xac, _0xf303xaf, segments, _0xf303x6b) {
    while (360 % segments != 0) {
        segments++
    };
    segments = 360 / segments;
    for (var _0xf303xc8 = _0xf303xac; _0xf303xc8 < _0xf303xac + _0xf303xaf; _0xf303xc8 = _0xf303xc8 + segments) {
        var _0xf303xc9 = _0xf303xc8 * Math['PI'] / 180;
        var _0xf303xca = (_0xf303xc8 + segments) * Math['PI'] / 180;
        var _0xf303xcb = Math['cos'](_0xf303xc9);
        var _0xf303xcc = Math['sin'](_0xf303xc9);
        var _0xf303xcd = Math['cos'](_0xf303xca);
        var _0xf303xce = Math['sin'](_0xf303xca);
        var _0xf303xcf = _0xf303x5f + _0xf303xcb * _0xf303x69;
        var _0xf303xd0 = y + _0xf303xcc * _0xf303x69;
        var _0xf303xd1 = _0xf303x5f + _0xf303xcd * _0xf303x69;
        var _0xf303xd2 = y + _0xf303xce * _0xf303x69;
        var _0xf303xd3 = _0xf303x5f + _0xf303xcb * _0xf303xc7;
        var _0xf303xd4 = y + _0xf303xcc * _0xf303xc7;
        var _0xf303xd5 = _0xf303x5f + _0xf303xcd * _0xf303xc7;
        var _0xf303xd6 = y + _0xf303xce * _0xf303xc7;
        Render.Polygon([
            [_0xf303xcf, _0xf303xd0],
            [_0xf303xd1, _0xf303xd2],
            [_0xf303xd3, _0xf303xd4]
        ], _0xf303x6b);
        Render.Polygon([
            [_0xf303xd3, _0xf303xd4],
            [_0xf303xd1, _0xf303xd2],
            [_0xf303xd5, _0xf303xd6]
        ], _0xf303x6b)
    }
}

function shadow(_0xf303x5f, y, _0xf303xd8, _0xf303x5d, _0xf303xd9, _0xf303x5c, _0xf303x6b, _0xf303xda) {
    if (_0xf303xd9) {
        Render.StringCustom(_0xf303x5f + ((_0xf303xda / 7.17)), y + ((_0xf303xda / 7.17)), _0xf303xd8, _0xf303x5d, [0, 0, 0, 255], _0xf303x5c);
        Render.StringCustom(_0xf303x5f, y, _0xf303xd8, _0xf303x5d, _0xf303x6b, _0xf303x5c)
    } else {
        Render.String(_0xf303x5f + ((_0xf303xda / 7.17)), y + ((_0xf303xda / 7.17)), _0xf303xd8, _0xf303x5d, [0, 0, 0, 255], _0xf303xda);
        Render.String(_0xf303x5f, y, _0xf303xd8, _0xf303x5d, _0xf303x6b, _0xf303xda)
    }
}
const global_print = Global['Print'],
    global_print_chat = Global['PrintChat'],
    global_print_color = Global['PrintColor'],
    global_register_callback = Global['RegisterCallback'],
    global_execute_command = Global['ExecuteCommand'],
    global_frame_stage = Global['FrameStage'],
    global_tickcount = Global['Tickcount'],
    global_tickrate = Global['Tickrate'],
    global_tick_interval = Global['TickInterval'],
    global_curtime = Global['Curtime'],
    global_realtime = Global['Realtime'],
    global_frametime = Global['Frametime'],
    global_latency = Global['Latency'],
    global_get_view_angles = Global['GetViewAngles'],
    global_set_view_angles = Global['SetViewAngles'],
    global_get_map_name = Global['GetMapName'],
    global_is_key_pressed = Global['IsKeyPressed'],
    global_get_screen_size = Global['GetScreenSize'],
    global_get_cursor_position = Global['GetCursorPosition'],
    global_play_sound = Global['PlaySound'],
    global_play_microphone = Global['PlayMicrophone'],
    global_stop_microphone = Global['StopMicrophone'],
    global_get_username = Global['GetUsername'],
    global_set_clan_tag = Global['SetClanTag'],
    globals_tickcount = Globals['Tickcount'],
    globals_tickrate = Globals['Tickrate'],
    globals_tick_interval = Globals['TickInterval'],
    globals_curtime = Globals['Curtime'],
    globals_realtime = Globals['Realtime'],
    globals_frametime = Globals['Frametime'],
    sound_play = Sound['Play'],
    sound_play_microphone = Sound['PlayMicrophone'],
    sound_stop_microphone = Sound['StopMicrophone'],
    cheat_get_username = Cheat['GetUsername'],
    cheat_register_callback = cheat_register_callback = new Proxy(Cheat.RegisterCallback, {
        apply: function (_0xf303x169, _0xf303x169, _0xf303x16a) {
            switch (_0xf303x16a[0]) {
            case 'paint':
                Cheat.RegisterCallback('Draw', _0xf303x16a[1]);
                break;
            case 'create_move':
                Cheat.RegisterCallback('CreateMove', _0xf303x16a[1]);
                break;
            case 'fsn':
                Cheat.RegisterCallback('FrameStageNotify', _0xf303x16a[1]);
                break;
            default:
                Cheat.RegisterCallback(_0xf303x16a[0], _0xf303x16a[1]);
                break
            }
        }
    }),
    cheat_execute_command = Cheat['ExecuteCommand'],
    cheat_frame_stage = Cheat['FrameStage'],
    cheat_print = Cheat['Print'],
    cheat_print_chat = Cheat['PrintChat'],
    cheat_print_color = Cheat['PrintColor'],
    local_latency = Local['Latency'],
    local_get_view_angles = Local['GetViewAngles'],
    local_set_view_angles = Local['SetViewAngles'],
    local_set_clan_tag = Local['SetClanTag'],
    local_get_real_yaw = Local['GetRealYaw'],
    local_get_fake_yaw = Local['GetFakeYaw'],
    local_get_spread = Local['GetSpread'],
    local_get_inaccuracy = Local['GetInaccuracy'],
    world_get_map_name = World['GetMapName'],
    world_get_server_string = World['GetServerString'],
    input_get_cursor_position = Input['GetCursorPosition'],
    input_is_key_pressed = Input['IsKeyPressed'],
    render_string = Render['String'],
    render_text_size = Render['TextSize'],
    render_line = Render['Line'],
    render_rect = Render['Rect'],
    render_filled_rect = Render['FilledRect'],
    render_gradient_rect = Render['GradientRect'],
    render_circle = Render['Circle'],
    render_filled_circle = Render['FilledCircle'],
    render_polygon = Render['Polygon'],
    render_world_to_screen = Render['WorldToScreen'],
    render_add_font = Render['AddFont'],
    render_find_font = Render['FindFont'],
    render_string_custom = Render['StringCustom'],
    render_textured_rect = Render['TexturedRect'],
    render_add_texture = Render['AddTexture'],
    render_text_size_custom = Render['TextSizeCustom'],
    render_get_screen_size = Render['GetScreenSize'],
    ui_get_value = UI['GetValue'],
    ui_set_value = UI['SetValue'],
    ui_add_checkbox = UI['AddCheckbox'],
    ui_add_slider_int = UI['AddSliderInt'],
    ui_add_slider_float = UI['AddSliderFloat'],
    ui_add_hotkey = UI['AddHotkey'],
    ui_add_label = UI['AddLabel'],
    ui_add_dropdown = UI['AddDropdown'],
    ui_add_multi_dropdown = UI['AddMultiDropdown'],
    ui_add_color_picker = UI['AddColorPicker'],
    ui_add_textbox = UI['AddTextbox'],
    ui_set_enabled = UI['SetEnabled'],
    ui_get_string = UI['GetString'],
    ui_get_color = UI['GetColor'],
    ui_set_color = UI['SetColor'],
    ui_is_hotkey_active = UI['IsHotkeyActive'],
    ui_toggle_hotkey = UI['ToggleHotkey'],
    ui_is_menu_open = UI['IsMenuOpen'],
    convar_get_int = Convar['GetInt'],
    convar_set_int = Convar['SetInt'],
    convar_get_float = Convar['GetFloat'],
    convar_set_float = Convar['SetFloat'],
    convar_get_string = Convar['GetString'],
    convar_set_string = Convar['SetString'],
    event_get_int = Event['GetInt'],
    event_get_float = Event['GetFloat'],
    event_get_string = Event['GetString'],
    entity_get_entities = Entity['GetEntities'],
    entity_get_entities_by_class_i_d = Entity['GetEntitiesByClassID'],
    entity_get_players = Entity['GetPlayers'],
    entity_get_enemies = Entity['GetEnemies'],
    entity_get_teammates = Entity['GetTeammates'],
    entity_get_local_player = Entity['GetLocalPlayer'],
    entity_get_game_rules_proxy = Entity['GetGameRulesProxy'],
    entity_get_entity_from_user_i_d = Entity['GetEntityFromUserID'],
    entity_is_teammate = Entity['IsTeammate'],
    entity_is_enemy = Entity['IsEnemy'],
    entity_is_bot = Entity['IsBot'],
    entity_is_local_player = Entity['IsLocalPlayer'],
    entity_is_valid = Entity['IsValid'],
    entity_is_alive = Entity['IsAlive'],
    entity_is_dormant = Entity['IsDormant'],
    entity_get_class_i_d = Entity['GetClassID'],
    entity_get_class_name = Entity['GetClassName'],
    entity_get_name = Entity['GetName'],
    entity_get_weapon = Entity['GetWeapon'],
    entity_get_weapons = Entity['GetWeapons'],
    entity_get_render_origin = Entity['GetRenderOrigin'],
    entity_get_prop = Entity['GetProp'],
    entity_set_prop = Entity['SetProp'],
    entity_get_hitbox_position = Entity['GetHitboxPosition'],
    entity_get_eye_position = Entity['GetEyePosition'],
    trace_line = Trace['Line'],
    trace_bullet = Trace['Bullet'],
    usercmd_set_movement = UserCMD['SetMovement'],
    usercmd_get_movement = UserCMD['GetMovement'],
    usercmd_set_angles = UserCMD['SetAngles'],
    usercmd_force_jump = UserCMD['ForceJump'],
    usercmd_force_crouch = UserCMD['ForceCrouch'],
    antiaim_get_override = AntiAim['GetOverride'],
    antiaim_set_override = AntiAim['SetOverride'],
    antiaim_set_real_offset = AntiAim['SetRealOffset'],
    antiaim_set_fake_offset = AntiAim['SetFakeOffset'],
    antiaim_set_l_b_y_offset = AntiAim['SetLBYOffset'],
    exploit_get_charge = Exploit['GetCharge'],
    exploit_recharge = Exploit['Recharge'],
    exploit_disable_recharge = Exploit['DisableRecharge'],
    exploit_enable_recharge = Exploit['EnableRecharge'],
    ragebot_override_minimum_damage = Ragebot['OverrideMinimumDamage'],
    ragebot_override_hitchance = Ragebot['OverrideHitchance'],
    ragebot_override_accuracy_boost = Ragebot['OverrideAccuracyBoost'],
    ragebot_override_multipoint_scale = Ragebot['OverrideMultipointScale'],
    ragebot_force_safety = Ragebot['ForceSafety'];
var menu = {
    _class: 'BetterUI'
};
const menu_spacer = '                                                                                  ';
menu['concat'] = function (_0xf303x16d, _0xf303x16e) {
    var _0xf303x16f = [];
    for (var _0xf303x170 in _0xf303x16d) {
        _0xf303x16f['push'](_0xf303x16d[_0xf303x170])
    };
    _0xf303x16f['push'](_0xf303x16e);
    return _0xf303x16f
};
menu['label'] = function (_0xf303x171) {
    UI.AddLabel(_0xf303x171)
};
menu['call'] = function (_0xf303x172, _0xf303xa1, _0xf303x171, _0xf303x173) {
    const _0xf303x174 = _0xf303xa1 + menu_spacer + _0xf303x171;
    var _0xf303x175 = [_0xf303x174];
    const _0xf303x176 = {
        path: ['Misc', 'JAVASCRIPT', 'Script items', _0xf303x174]
    };
    if (_0xf303x173 != null) {
        for (var _0xf303xc8 = 0; _0xf303xc8 < _0xf303x173['length']; _0xf303xc8++) {
            _0xf303x175['push'](_0xf303x173[_0xf303xc8])
        }
    };
    _0xf303x172['apply'](null, _0xf303x175);
    return _0xf303x176
};
menu['reference'] = function (_0xf303x177) {
    const _0xf303x176 = {
        path: _0xf303x177
    };
    return _0xf303x176
};
menu['get'] = function (_0xf303x178) {
    if (!(_0xf303x178['path'])) {
        throw new Error('[Menu] This element doesn\'t exist!')
    };
    return UI['GetValue']['apply'](null, _0xf303x178['path'])
};
menu['get_hotkey'] = function (_0xf303x178) {
    if (!(_0xf303x178['path'])) {
        throw new Error('[Menu] This element doesn\'t exist!')
    };
    return UI['IsHotkeyActive']['apply'](_0xf303x178['path'])
};
menu['get_color'] = function (_0xf303x178) {
    if (!(_0xf303x178['path'])) {
        throw new Error('[Menu] This element doesn\'t exist!')
    };
    return UI['GetColor']['apply'](null, _0xf303x178['path'])
};
menu['set'] = function (_0xf303x178, _0xf303xa2) {
    if (!(_0xf303x178['path'])) {
        throw new Error('[Menu] This element doesn\'t exist!')
    };
    const _0xf303x173 = _0xf303x178;
    UI['SetValue']['apply'](null, this['concat'](_0xf303x173['path'], _0xf303xa2))
};
menu['set_color'] = function (_0xf303x178, _0xf303x6b) {
    if (!(_0xf303x178['path'])) {
        throw new Error('[Menu] This element doesn\'t exist!')
    };
    const _0xf303x173 = _0xf303x178;
    UI['SetColor']['apply'](null, this['concat'](_0xf303x173['path'], _0xf303x6b))
};
menu['toggle'] = function (_0xf303x178) {
    if (!(_0xf303x178['path'])) {
        throw new Error('[Menu] This element doesn\'t exist!')
    };
    UI['ToggleHotkey']['apply'](null, _0xf303x178['path'])
};
menu['visibility'] = function (_0xf303x178, _0xf303x179) {
    if (!(_0xf303x178['path'])) {
        throw new Error('[Menu] This element doesn\'t exist!')
    };
    const _0xf303x173 = _0xf303x178;
    UI['SetEnabled']['apply'](null, this['concat'](_0xf303x173['path'], _0xf303x179))
};
var vector = {
    _class: 'vector'
};
vector['new'] = function (_0xf303x17b) {
    return {
        x: _0xf303x17b[0],
        y: _0xf303x17b[1],
        z: _0xf303x17b[2]
    }
};
vector['operate'] = function (_0xf303x17c, _0xf303x17d, _0xf303x17e) {
    switch (_0xf303x17e) {
    case '+':
        return {
            x: _0xf303x17c['x'] + _0xf303x17d['x'], y: _0xf303x17c['y'] + _0xf303x17d['y'], z: _0xf303x17c['z'] + _0xf303x17d['z']
        };
    case '-':
        return {
            x: _0xf303x17c['x'] - _0xf303x17d['x'], y: _0xf303x17c['y'] - _0xf303x17d['y'], z: _0xf303x17c['z'] - _0xf303x17d['z']
        };
    case '*':
        return {
            x: _0xf303x17c['x'] * _0xf303x17d['x'], y: _0xf303x17c['y'] * _0xf303x17d['y'], z: _0xf303x17c['z'] * _0xf303x17d['z']
        };
    case '/':
        return {
            x: _0xf303x17c['x'] / _0xf303x17d['x'], y: _0xf303x17c['y'] / _0xf303x17d['y'], z: _0xf303x17c['z'] / _0xf303x17d['z']
        };
    default:
        throw new Error('[Vector] Invalid operation type.')
    }
};
vector['length2d'] = function (_0xf303x17c) {
    return Math['sqrt'](_0xf303x17c['x'] * _0xf303x17c['x'] + _0xf303x17c['y'] * _0xf303x17c['y'])
};
vector['angles'] = function (_0xf303x17c) {
    return {
        x: -Math['atan2'](_0xf303x17c['z'], this['length2d'](_0xf303x17c)) * 180 / Math['PI'],
        y: Math['atan2'](_0xf303x17c['y'], _0xf303x17c['x']) * 180 / Math['PI'],
        z: 0
    }
};
vector['fov_to'] = function (_0xf303x17f, _0xf303x180, _0xf303x181) {
    const _0xf303x182 = this['angles'](this['operate'](_0xf303x180, _0xf303x17f, '-'));
    const _0xf303x183 = this['new']([Math['abs'](_0xf303x181['x'] - _0xf303x182['x']), Math['abs'](_0xf303x181['y'] % 360 - _0xf303x182['y'] % 360) % 360, 0]);
    if (_0xf303x183['y'] > 180) {
        _0xf303x183['y'] = 360 - _0xf303x183['y']
    };
    return this['length2d'](_0xf303x183)
};
vector['to_array'] = function (_0xf303x17c) {
    return [_0xf303x17c['x'], _0xf303x17c['y'], _0xf303x17c['z']]
};

function normalize_yaw(_0xf303xb0) {
    var _0xf303x185 = _0xf303xb0;
    if (_0xf303x185 < -180) {
        _0xf303x185 += 360
    };
    if (_0xf303x185 > 180) {
        _0xf303x185 -= 360
    };
    return _0xf303x185
}
var plugin = {
    _info: {},
    last_hit_lby: [],
    last_target_visibility: false,
    last_override_time: globals_curtime()
};
const ref_inverter = menu['reference'](['Anti-Aim', 'Fake angles', 'Inverter']);
const ref_bodyflip = menu['reference'](['Anti-Aim', 'Fake angles', 'Inverter flip']);
const ref_inverter_legit = menu['reference'](['Anti-Aim', 'Legit Anti-Aim', 'Direction key']);
const ref_ragebot = menu['reference'](['Rage', 'GENERAL', 'General', 'Enabled']);

function update_anti_aim_state(state) {
    if (UI.GetValue('Rage', 'GENERAL', 'General', 'Enabled')) {
        if (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter') !== state) {
            UI.ToggleHotkey('Anti-Aim', 'Fake angles', 'Inverter')
        };
        return
    };
    state = (state + 1) % 2;
    if (menu['get_hotkey'](ref_inverter_legit) !== state) {
        menu['toggle'](ref_inverter_legit)
    }
}

function get_closest_target() {
    const _0xf303x18d = entity_get_enemies();
    const _0xf303x18e = entity_get_local_player();
    const _0xf303x17b = {
        id: null,
        fov: 180
    };
    for (var _0xf303xc8 = 0; _0xf303xc8 < _0xf303x18d['length']; _0xf303xc8++) {
        const _0xf303x18f = _0xf303x18d[_0xf303xc8];
        const _0xf303x180 = vector['new'](entity_get_hitbox_position(_0xf303x18f, 0)),
            _0xf303x17f = vector['new'](entity_get_eye_position(_0xf303x18e));
        const _0xf303x182 = vector['new'](local_get_view_angles());
        const _0xf303x190 = vector['fov_to'](_0xf303x17f, _0xf303x180, _0xf303x182);
        if (_0xf303x190 < _0xf303x17b['fov']) {
            _0xf303x17b['id'] = _0xf303x18f;
            _0xf303x17b['fov'] = _0xf303x190
        }
    };
    return _0xf303x17b['id']
}

function get_target_visibility() {
    const target = get_closest_target();
    if (!target || !entity_is_valid(target)) {
        return false
    };
    if (entity_is_dormant(target)) {
        return false
    };
    const _0xf303x18e = entity_get_local_player();
    var _0xf303x17f = vector['new'](entity_get_eye_position(_0xf303x18e)),
        _0xf303x192 = vector['new'](entity_get_prop(_0xf303x18e, 'CBasePlayer', 'm_vecVelocity[0]')),
        _0xf303x180 = entity_get_hitbox_position(target, 0);
    _0xf303x192 = vector['operate'](_0xf303x192, vector['new']([0.25, 0.25, 0.25]), '*');
    _0xf303x17f = vector['operate'](_0xf303x17f, _0xf303x192, '+');
    const _0xf303x193 = trace_line(_0xf303x18e, vector['to_array'](_0xf303x17f), _0xf303x180)[0];
    return _0xf303x193 === target
}

function get_optimal_angle() {
    const _0xf303x195 = UI.GetValue('Script items', 'Smart Peek Options');
    const _0xf303x18e = entity_get_local_player();
    const _0xf303x17f = vector['new'](entity_get_render_origin(_0xf303x18e));
    var _0xf303x196 = local_get_view_angles()[1];
    var _0xf303x17b = {
        left: 0,
        right: 0
    };
    for (var _0xf303x197 = _0xf303x196 - 90; _0xf303x197 <= _0xf303x196 + 90; _0xf303x197 += 30) {
        if (_0xf303x197 === _0xf303x196) {
            continue
        };
        const _0xf303xc9 = _0xf303x197 * Math['PI'] / 180;
        const _0xf303x198 = vector['operate'](_0xf303x17f, vector['new']([256 * Math['cos'](_0xf303xc9), 256 * Math['sin'](_0xf303xc9), 0]), '+');
        const _0xf303x199 = trace_line(_0xf303x18e, vector['to_array'](_0xf303x17f), vector['to_array'](_0xf303x198));
        const _0xf303x19a = _0xf303x197 < _0xf303x196 ? 'left' : 'right';
        _0xf303x17b[_0xf303x19a] += _0xf303x199[1]
    };
    _0xf303x17b['left'] /= 3;
    _0xf303x17b['right'] /= 3;
    if (_0xf303x17b['left'] > _0xf303x17b['right']) {
        return _0xf303x195 === 0 ? 0 : 1
    };
    return _0xf303x195 === 0 ? 1 : 0
}

function update_anti_aim() {
    const _0xf303x18e = entity_get_local_player();
    if (!entity_is_valid(_0xf303x18e) || !entity_is_alive(_0xf303x18e)) {
        return
    };
    const target = get_closest_target();
    if (target == null) {
        update_anti_aim_state(get_optimal_angle());
        return
    };
    if (plugin['last_hit_lby'][target] == null) {
        update_anti_aim_state(get_optimal_angle());
        return
    };
    if (plugin['last_hit_lby'][target] === 0) {
        update_anti_aim_state(1);
        return
    };
    update_anti_aim_state(0);
    return;
    update_anti_aim_state(get_optimal_angle())
}

function do_indicators() {
    const _0xf303x18e = entity_get_local_player();
    if (!entity_is_valid(_0xf303x18e) || !entity_is_alive(_0xf303x18e)) {
        return
    };
    const y = render_get_screen_size()[1];
    const _0xf303x196 = local_get_real_yaw(),
        _0xf303xba = local_get_fake_yaw();
    var _0xf303x183 = Math['round'](normalize_yaw(_0xf303x196 - _0xf303xba) / 2),
        _0xf303x19d = Math['abs'](_0xf303x183);
    if (menu['get'](ref_ragebot)) {
        _0xf303x183 *= -1
    }
}

function on_tick() {
    if (!UI.IsHotkeyActive('Script items', 'Smart Peek')) {
        return
    };
    update_anti_aim()
}

function on_frame() {
    if (!UI.IsHotkeyActive('Script items', 'Smart Peek')) {
        return
    };
    do_indicators()
}

function on_player_hurt1() {
    const _0xf303x18e = entity_get_local_player();
    const _0xf303x8d = entity_get_entity_from_user_i_d(event_get_int('attacker'));
    const _0xf303x1a1 = entity_get_entity_from_user_i_d(event_get_int('userid'));
    if (_0xf303x18e !== _0xf303x8d && _0xf303x18e === _0xf303x1a1) {
        plugin['last_hit_lby'][_0xf303x8d] = UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter')
    }
}

function reset() {
    plugin['last_hit_lby'] = []
}
cheat_register_callback('create_move', 'on_tick');
cheat_register_callback('paint', 'on_frame');
cheat_register_callback('player_hurt', 'on_player_hurt1');
cheat_register_callback('player_connect_full', 'reset');
Cheat.RegisterCallback('CreateMove', 'AA');
Cheat.RegisterCallback('CreateMove', 'dmg_override');
Cheat.RegisterCallback('Unload', 'on_unload');
Cheat.RegisterCallback('Draw', 'indicators');
var menu = {};
var menu_elements = {};
const menu_spacer = '                                                                                  ';
menu['concat'] = function (_0xf303x16d, _0xf303x16e) {
    var _0xf303x16f = [];
    for (var _0xf303x170 in _0xf303x16d) {
        _0xf303x16f['push'](_0xf303x16d[_0xf303x170])
    };
    _0xf303x16f['push'](_0xf303x16e);
    return _0xf303x16f
};
menu['label'] = function (_0xf303x171) {
    UI.AddLabel(_0xf303x171)
};
menu['new'] = function (_0xf303x172, _0xf303xa1, _0xf303x171, _0xf303x173, _0xf303x1a4) {
    _0xf303x173 = _0xf303x173 || [];
    _0xf303x1a4 = _0xf303x1a4 || undefined;
    const _0xf303x174 = _0xf303xa1 + menu_spacer + _0xf303x171;
    var _0xf303x175 = [_0xf303x174];
    const _0xf303x176 = {
        path: ['Misc', 'JAVASCRIPT', 'Script items', _0xf303x174],
        cache: _0xf303x1a4,
        func: _0xf303x172
    };
    if (_0xf303x173 != null) {
        for (var _0xf303xc8 = 0; _0xf303xc8 < _0xf303x173['length']; _0xf303xc8++) {
            _0xf303x175['push'](_0xf303x173[_0xf303xc8])
        }
    };
    _0xf303x172['apply'](null, _0xf303x175);
    if (_0xf303x1a4) {
        switch (_0xf303x172) {
        case UI['AddColorPicker']:
            UI['SetColor']['apply'](null, this['concat'](_0xf303x176['path'], _0xf303x1a4));
            break;
        case UI['AddHotkey']:
            break;
        default:
            UI['SetValue']['apply'](this, this['concat'](_0xf303x176['path'], _0xf303x1a4));
            break
        }
    };
    menu_elements[_0xf303x171] = _0xf303x176;
    return _0xf303x176
};
menu['reference'] = function (_0xf303x177, _0xf303x172) {
    return {
        path: _0xf303x177,
        func: _0xf303x172
    }
};
menu['get'] = function (_0xf303x178) {
    if (!(_0xf303x178['path'])) {
        throw new Error('[Menu] This element doesn\'t exist!')
    };
    switch (_0xf303x178['func']) {
    case UI['AddColorPicker']:
        return UI['GetColor']['apply'](null, _0xf303x178['path']);
    case UI['AddHotkey']:
        return UI['IsHotkeyActive']['apply'](null, _0xf303x178['path']);
    default:
        return UI['GetValue']['apply'](null, _0xf303x178['path'])
    }
};
menu['set'] = function (_0xf303x178, _0xf303xa2) {
    if (!(_0xf303x178['path'])) {
        throw new Error('[Menu] This element doesn\'t exist!')
    };
    switch (_0xf303x178['func']) {
    case UI['AddColorPicker']:
        UI['SetColor']['apply'](null, this['concat'](_0xf303x178['path'], _0xf303xa2));
        break;
    case UI['AddHotkey']:
        if (menu['get'](_0xf303x178) !== _0xf303xa2) {
            UI['ToggleHotkey']['apply'](null, _0xf303x178['path'])
        };
        break;
    default:
        UI['SetValue']['apply'](null, this['concat'](_0xf303x178['path'], _0xf303xa2));
        break
    }
};
menu['visibility'] = function (_0xf303x178, _0xf303x179) {
    if (!(_0xf303x178['path'])) {
        throw new Error('[Menu] This element doesn\'t exist!')
    };
    UI['SetEnabled']['apply'](null, this['concat'](_0xf303x178['path'], _0xf303x179))
};
menu['add_event'] = function (_0xf303x178, _0xf303x172) {
    if (!_0xf303x178['path']) {
        throw new Error('[Menu] This element doesn\'t exist!')
    };
    if (!_0xf303x178['func']) {
        throw new Errror('[Menu] This element does not have a valid type. Please, specify one.')
    };
    _0xf303x178['callback'] = _0xf303x172
};
menu['handle_events'] = function () {
    for (var _0xf303x171 in menu_elements) {
        const _0xf303x178 = menu_elements[_0xf303x171];
        if (!_0xf303x178['path'] || !_0xf303x178['callback']) {
            continue
        };
        const _0xf303xa2 = menu['get'](_0xf303x178);
        if (_0xf303x178['cache'] === undefined) {
            _0xf303x178['cache'] = _0xf303xa2
        };
        if (_0xf303x178['cache'] !== _0xf303xa2) {
            _0xf303x178['callback']['apply'](null, [_0xf303x178]);
            _0xf303x178['cache'] = _0xf303xa2
        }
    }
};

function vec_normalize(_0xf303x17c) {
    const _0xf303x1a6 = Math['sqrt'](_0xf303x17c[0] * 2 + _0xf303x17c[1] * 2 + _0xf303x17c[2] * 2);
    return [_0xf303x17c[0] / _0xf303x1a6, _0xf303x17c[1] / _0xf303x1a6, _0xf303x17c[2] / _0xf303x1a6]
}

function vec_sub(_0xf303x5f, y) {
    return [_0xf303x5f[0] - y[0], _0xf303x5f[1] - y[1], _0xf303x5f[2] - y[2]]
}

function vec_mult(_0xf303x5f, y) {
    return [_0xf303x5f[0] * y[0], _0xf303x5f[1] * y[1], _0xf303x5f[2] * y[2]]
}

function is_point_inside_screen(_0xf303x17c) {
    return _0xf303x17c[0] > 0 && _0xf303x17c[1] > 0 && _0xf303x17c[0] < Render.GetScreenSize()[0] && _0xf303x17c[1] < Render.GetScreenSize()[1]
}
const enable = menu['new'](UI.AddCheckbox, 'Bullet tracers', '');
const enemy_color = menu['new'](UI.AddColorPicker, 'Enemy tracer color', '', [], [235, 0, 15, 200]);
const team_color = menu['new'](UI.AddColorPicker, 'Team tracer color', '', [], [125, 245, 15, 200]);
const local_color = menu['new'](UI.AddColorPicker, 'Local tracer color', '', [], [225, 15, 185, 200]);
const xhair_color = menu['new'](UI.AddColorPicker, 'Cross color', '', [], [0, 255, 0, 200]);
var bullets = [];

function handle_menu_visibility() {
    if (UI.GetValue('Script items', 'Enable AntiAim & Indicators') == 1 && CanUse3) {
        menu['visibility'](enable, true);
        const _0xf303x1b1 = menu['get'](enable);
        menu['visibility'](enemy_color, _0xf303x1b1);
        menu['visibility'](team_color, _0xf303x1b1);
        menu['visibility'](local_color, _0xf303x1b1);
        menu['visibility'](xhair_color, _0xf303x1b1)
    } else {
        menu['visibility'](enemy_color, false);
        menu['visibility'](team_color, false);
        menu['visibility'](local_color, false);
        menu['visibility'](xhair_color, false);
        menu['visibility'](enable, false)
    }
}

function on_bullet_impact() {
    const _0xf303x1a1 = Entity.GetEntityFromUserID(Event.GetInt('userid'));
    const _0xf303x5f = Event.GetFloat('x'),
        y = Event.GetFloat('y'),
        _0xf303x68 = Event.GetFloat('z');
    const _0xf303x1b3 = Entity.IsLocalPlayer(_0xf303x1a1) ? 2 : (Entity.IsEnemy(_0xf303x1a1) ? 0 : 1);
    const _0xf303x17f = [_0xf303x5f, y, _0xf303x68];
    const _0xf303x180 = Entity.GetEyePosition(_0xf303x1a1);
    const _0xf303x1b4 = vec_normalize(_0xf303x180);
    bullets['push']({
        type: _0xf303x1b3,
        origin: _0xf303x17f,
        destination: _0xf303x180,
        time: Globals.Curtime()
    })
}

function on_draw() {
    handle_menu_visibility();
    if (!menu['get'](enable)) {
        return
    };
    const _0xf303x1b6 = Globals.Curtime();
    const _0xf303x1b7 = [menu['get'](enemy_color), menu['get'](team_color), menu['get'](local_color), menu['get'](xhair_color)];
    for (var _0xf303xc8 = 0; _0xf303xc8 < bullets['length']; _0xf303xc8++) {
        const _0xf303x1b8 = bullets[_0xf303xc8];
        if (_0xf303x1b6 - _0xf303x1b8['time'] >= 5) {
            bullets['splice'](_0xf303xc8, 1);
            continue
        };
        const _0xf303x1b9 = Render.WorldToScreen(_0xf303x1b8['origin']),
            _0xf303x1ba = Render.WorldToScreen(_0xf303x1b8['destination']);
        if (!is_point_inside_screen(_0xf303x1b9) || !is_point_inside_screen(_0xf303x1ba)) {
            continue
        };
        Render.Line(_0xf303x1b9[0], _0xf303x1b9[1], _0xf303x1ba[0], _0xf303x1ba[1], _0xf303x1b7[_0xf303x1b8['type']]);
        Render.Line(_0xf303x1b9[0] - 5, _0xf303x1b9[1], _0xf303x1b9[0] + 5, _0xf303x1b9[1], _0xf303x1b7[3]);
        Render.Line(_0xf303x1b9[0], _0xf303x1b9[1] - 5, _0xf303x1b9[0], _0xf303x1b9[1] + 5, _0xf303x1b7[3])
    }
}
Cheat.RegisterCallback('Draw', 'on_draw');
Cheat.RegisterCallback('bullet_impact', 'on_bullet_impact');
UI.AddCheckbox('Enable Advanced Fakelag');
UI.AddDropdown('Fakelag type', ['Random', 'Step', 'Jitter', 'Spam']);
UI.AddSliderInt('Random Min', 0, 14);
UI.AddSliderInt('Random Max', 0, 14);
UI.AddSliderInt('Max Value', 0, 14);
UI.AddSliderInt('Step', 0, 14);
UI.AddSliderInt('First Value', 0, 14);
UI.AddSliderInt('Second Value', 0, 14);
UI.AddSliderInt('Base Value', 0, 14);
UI.AddSliderFloat('Spam Delay', 0, 1);
UI.AddCheckbox('Enable instant DT');
UI.AddSliderInt('Recharge delay(13-20 is recomended)', 0, 20);

function can_shift_shot(_0xf303x1bc) {
    if (CanUse4) {
        delay = UI.GetValue('Script items', 'Recharge delay(13-20 is recomended)');
        if (UI.GetValue('Script items', 'Enable instant DT')) {
            var _0xf303x18e = Entity.GetLocalPlayer();
            var _0xf303x1bd = Entity.GetWeapon(_0xf303x18e);
            if (_0xf303x18e == null || _0xf303x1bd == null) {
                return false
            };
            var _0xf303x1be = Entity.GetProp(_0xf303x18e, 'CCSPlayer', 'm_nTickBase') + 14 - delay;
            var _0xf303x1bf = Globals.TickInterval() * (_0xf303x1be - _0xf303x1bc);
            if (_0xf303x1bf < Entity.GetProp(_0xf303x18e, 'CCSPlayer', 'm_flNextAttack')) {
                return false
            };
            if (_0xf303x1bf < Entity.GetProp(_0xf303x1bd, 'CBaseCombatWeapon', 'm_flNextPrimaryAttack')) {
                return false
            };
            return true
        }
    }
}

function _TBC_CREATE_MOVE() {
    if (CanUse4) {
        if (UI.GetValue('Script items', 'Enable instant DT')) {
            var _0xf303x1c1 = Exploit.GetCharge();
            Exploit[(_0xf303x1c1 != 1 ? 'Enable' : 'Disable') + 'Recharge']();
            if (can_shift_shot(14) && _0xf303x1c1 != 1) {
                Exploit.DisableRecharge();
                Exploit.Recharge()
            };
            Exploit.OverrideTolerance(0);
            Exploit.OverrideShift(14)
        }
    }
}

function _TBC_UNLOAD() {
    Exploit.EnableRecharge()
}
Cheat.RegisterCallback('CreateMove', '_TBC_CREATE_MOVE');
Cheat.RegisterCallback('Unload', '_TBC_UNLOAD');
const hitgroup = ['Head', 'Neck', 'Pelvis', 'Body', 'Thorax', 'Chest', 'Upper chest', 'Left thigh', 'Right thigh', 'Left calf', 'Right calf', 'Left foot', 'Right foot', 'Left hand', 'Right hand', 'Left upper arm', 'Left forearm', 'Right upper arm', 'Right forearm'];
const activeLogs = [];
const ragebotTarget = {};

function getMultiColorTextSize(_0xf303x1c7) {
    var _0xf303x5e = 0;
    font = Render.AddFont('Small Fonts', 8, 500);
    for (var _0xf303x5f = 0; _0xf303x5f < _0xf303x1c7['length']; _0xf303x5f++) {
        _0xf303x5e += Render.TextSizeCustom(_0xf303x1c7[_0xf303x5f][1], font)[0]
    };
    return _0xf303x5e
}

function drawMultiColorText(_0xf303x5f, y, _0xf303x1c7) {
    var _0xf303x1c9 = 0;
    font = Render.AddFont('Small Fonts', 8, 500);
    for (var _0xf303xc8 = 0; _0xf303xc8 < _0xf303x1c7['length']; _0xf303xc8++) {
        const _0xf303x199 = _0xf303x1c7[_0xf303xc8];
        const _0xf303x5d = _0xf303x199[1];
        var _0xf303x6b = _0xf303x199[0];
        if (typeof _0xf303x199[0] == 'number') {
            _0xf303x6b = [255, 255, 255, 255]
        };
        Render.StringCustom(_0xf303x5f + _0xf303x1c9, y, 0, _0xf303x5d, _0xf303x6b, font);
        const _0xf303x5e = Render.TextSizeCustom(_0xf303x5d, font)[0];
        _0xf303x1c9 += _0xf303x5e
    }
}

function showLog(_0xf303x1cb, _0xf303x1cc) {
    const _0xf303x5d = _0xf303x1cc['text'];
    const _0xf303x5e = getMultiColorTextSize(_0xf303x5d);
    const _0xf303x1cd = Global.Realtime() < _0xf303x1cc['delay'];
    const y = 10 + (12 * (_0xf303x1cb - 1));
    const h = 12;
    const _0xf303x1cf = (_0xf303x5e < 150) ? 150 : (_0xf303x5e + 15);
    const _0xf303x1d0 = 3;
    const _0xf303x1d1 = 15;
    _0xf303x1cc['firstLayer'] = _0xf303x1cd ? Math['min'](_0xf303x1cc['firstLayer'] + _0xf303x1cf * 0.025, _0xf303x1cf + _0xf303x1d1) : Math['max'](_0xf303x1cc['firstLayer'] - _0xf303x1d0, 0);
    _0xf303x1cc['secondLayer'] = _0xf303x1cd ? Math['min'](_0xf303x1cc['secondLayer'] + _0xf303x1cf * 0.015, _0xf303x1cf) : Math['max'](_0xf303x1cc['secondLayer'] - 2 * _0xf303x1d0, 0);
    drawMultiColorText(_0xf303x1cc['secondLayer'] - _0xf303x1cf + 5, y + 3 + 6, _0xf303x5d);
    activeLogs[_0xf303x1cb] = _0xf303x1cc;
    if (_0xf303x1cc['secondLayer'] === 0) {
        activeLogs['splice'](_0xf303x1cb, 1)
    }
}

function onDraw() {
    for (var _0xf303x5f = 0; _0xf303x5f < activeLogs['length']; _0xf303x5f++) {
        showLog(_0xf303x5f, activeLogs[_0xf303x5f])
    }
}

function onRagebotFire() {
    ragebotTarget[Entity.GetName(Event.GetInt('target_index'))] = {
        hitgroup: hitgroup[Event.GetInt('hitbox')],
        hc: Event.GetInt('hitchance'),
        safepoint: Event.GetInt('safepoint'),
        exploit: Event.GetInt('exploit')
    }
}

function onPlayerHurt() {}
Global.RegisterCallback('Draw', 'onDraw');
Global.RegisterCallback('ragebot_fire', 'onRagebotFire');
Global.RegisterCallback('player_hurt', 'onPlayerHurt');
const x1337 = UI.AddSliderInt('Hotkeys_x', 0, Global.GetScreenSize()[0]);
const y1337 = UI.AddSliderInt('Hotkeys_y', 0, Global.GetScreenSize()[1]);
var colorhotkeys = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Hotkeys');
if (colorhotkeys[3] == 0) {
    UI.SetColor('Misc', 'JAVASCRIPT', 'Script items', 'Hotkeys', [89, 119, 239, 3])
};
var alpha1337 = 0;
var maxwidth = 0;
var swalpha = 0;
var fdalpha = 0;
var apalpha = 0;
var aialpha = 0;
var spalpha = 0;
var fbalpha = 0;
var dtalpha = 0;
var hsalpha = 0;
var doalpha = 0;
var menualpha = 0;
var textalpha = 0;
var h = new Array();

function in_bounds(_0xf303x17c, _0xf303x5f, y, _0xf303x1e6, y2) {
    return (_0xf303x17c[0] > _0xf303x5f) && (_0xf303x17c[1] > y) && (_0xf303x17c[0] < _0xf303x1e6) && (_0xf303x17c[1] < y2)
}

function main_hotkeys() {
    if (!World.GetServerString() || UI.GetValue('Script items', 'Enable Keybinds') == 0 || !CanUse2) {
        return
    };
    const _0xf303x5f = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Hotkeys_x'),
        y = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Hotkeys_y');
    colorhotkeys = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Hotkeys');
    var _0xf303x5c = Render.AddFont('Verdana', 7, 100);
    var _0xf303x1e8 = 8 * Globals.Frametime();
    var _0xf303x1e9 = 75;
    var maxwidth = 0;
    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Slow walk')) {
        swalpha = Math['min'](swalpha + _0xf303x1e8, 1)
    } else {
        swalpha = swalpha - _0xf303x1e8;
        if (swalpha < 0) {
            swalpha = 0
        };
        if (swalpha == 0) {
            h['splice'](h['indexOf']('Slow walk'))
        }
    };
    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck')) {
        fdalpha = Math['min'](fdalpha + _0xf303x1e8, 1)
    } else {
        fdalpha = fdalpha - _0xf303x1e8;
        if (fdalpha < 0) {
            fdalpha = 0
        };
        if (fdalpha == 0) {
            h['splice'](h['indexOf']('Duck peek assist'))
        }
    };
    if (UI.IsMenuOpen()) {
        menualpha = Math['min'](menualpha + _0xf303x1e8, 1)
    } else {
        menualpha = menualpha - _0xf303x1e8;
        if (menualpha < 0) {
            menualpha = 0
        };
        if (menualpha == 0) {
            h['splice'](h['indexOf']('Menu Opened'))
        }
    };
    if (UI.IsHotkeyActive('Misc', 'GENERAL', 'Movement', 'Auto peek')) {
        apalpha = Math['min'](apalpha + _0xf303x1e8, 1)
    } else {
        apalpha = apalpha - _0xf303x1e8;
        if (apalpha < 0) {
            apalpha = 0
        };
        if (apalpha == 0) {
            h['splice'](h['indexOf']('Auto peek'))
        }
    };
    if (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter')) {
        aialpha = Math['min'](aialpha + _0xf303x1e8, 1)
    } else {
        aialpha = aialpha - _0xf303x1e8;
        if (aialpha < 0) {
            aialpha = 0
        };
        if (aialpha == 0) {
            h['splice'](h['indexOf']('Anti-aim inverter'))
        }
    };
    if (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter')) {
        aialpha = Math['min'](aialpha + _0xf303x1e8, 1)
    } else {
        aialpha = aialpha - _0xf303x1e8;
        if (aialpha < 0) {
            aialpha = 0
        };
        if (aialpha == 0) {
            h['splice'](h['indexOf']('Inverter'))
        }
    };
    if (UI.IsHotkeyActive('Rage', 'GENERAL', 'General', 'Force safe point')) {
        spalpha = Math['min'](spalpha + _0xf303x1e8, 1)
    } else {
        spalpha = spalpha - _0xf303x1e8;
        if (spalpha < 0) {
            spalpha = 0
        };
        if (spalpha == 0) {
            h['splice'](h['indexOf']('Safe point override'))
        }
    };
    if (UI.IsHotkeyActive('Rage', 'GENERAL', 'General', 'Force body aim')) {
        fbalpha = Math['min'](fbalpha + _0xf303x1e8, 1)
    } else {
        fbalpha = fbalpha - _0xf303x1e8;
        if (fbalpha < 0) {
            fbalpha = 0
        };
        if (fbalpha == 0) {
            h['splice'](h['indexOf']('Force body aim'))
        }
    };
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap')) {
        dtalpha = Math['min'](dtalpha + _0xf303x1e8, 1)
    } else {
        dtalpha = dtalpha - _0xf303x1e8;
        if (dtalpha < 0) {
            dtalpha = 0
        };
        if (dtalpha == 0) {
            h['splice'](h['indexOf']('Double tap'))
        }
    };
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots')) {
        hsalpha = Math['min'](hsalpha + _0xf303x1e8, 1)
    } else {
        hsalpha = hsalpha - _0xf303x1e8;
        if (hsalpha < 0) {
            hsalpha = 0
        };
        if (hsalpha == 0) {
            h['splice'](h['indexOf']('Hide shots'))
        }
    };
    if (UI.IsHotkeyActive('Script items', 'Dmg override')) {
        doalpha = Math['min'](doalpha + _0xf303x1e8, 1)
    } else {
        doalpha = doalpha - _0xf303x1e8;
        if (doalpha < 0) {
            doalpha = 0
        };
        if (doalpha == 0) {
            h['splice'](h['indexOf']('Damage override'))
        }
    };
    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Slow walk')) {
        if (h['indexOf']('Slow walk') == -1) {
            h['push']('Slow walk')
        }
    };
    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake FD')) {
        if (h['indexOf']('FD peek assist') == -1) {
            h['push']('FD peek assist')
        }
    };
    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake FD')) {
        if (h['indexOf']('FD peek assist') == -1) {
            h['push']('FD peek assist')
        }
    };
    if (UI.IsMenuOpen()) {
        if (h['indexOf']('Menu Opened') == -1) {
            h['push']('Menu Opened')
        }
    };
    if (UI.IsHotkeyActive('Misc', 'GENERAL', 'Movement', 'Auto peek')) {
        if (h['indexOf']('Auto peek') == -1) {
            h['push']('Auto peek')
        }
    };
    if (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter')) {
        if (h['indexOf']('Anti-aim inverter') == -1) {
            h['push']('Anti-aim inverter')
        }
    };
    if (UI.IsHotkeyActive('Rage', 'GENERAL', 'General', 'Force safe point')) {
        if (h['indexOf']('Safe point override') == -1) {
            h['push']('Safe point override')
        }
    };
    if (UI.IsHotkeyActive('Rage', 'GENERAL', 'General', 'Force body aim')) {
        if (h['indexOf']('Force body aim') == -1) {
            h['push']('Force body aim')
        }
    };
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap')) {
        if (h['indexOf']('Double tap') == -1) {
            h['push']('Double tap')
        }
    };
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots')) {
        if (h['indexOf']('Hide shots') == -1) {
            h['push']('Hide shots')
        }
    };
    if (UI.IsHotkeyActive('Script items', 'Dmg override')) {
        if (h['indexOf']('Damage override') == -1) {
            h['push']('Damage override')
        }
    };
    if (h['length'] > 0) {
        alpha1337 = Math['min'](alpha1337 + _0xf303x1e8, 1)
    } else {
        alpha1337 = alpha1337 - _0xf303x1e8;
        if (alpha1337 < 0) {
            alpha1337 = 0
        }
    };
    for (i = 0; i < h['length']; i++) {
        if (Render.TextSizeCustom(h[i], _0xf303x5c)[0] > maxwidth) {
            maxwidth = Render.TextSizeCustom(h[i], _0xf303x5c)[0]
        }
    };
    if (maxwidth == 0) {
        maxwidth = 50
    };
    _0xf303x1e9 = _0xf303x1e9 + maxwidth;
    if (alpha1337 > 0) {
        Render.FilledRect(_0xf303x5f, y + 3, _0xf303x1e9, 2, [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], alpha1337 * 255]);
        Render.FilledRect(_0xf303x5f, y + 5, _0xf303x1e9, 18, [17, 17, 17, alpha1337 * 255]);
        Render.StringCustom(_0xf303x5f + _0xf303x1e9 / 2 - (Render.TextSizeCustom('keybinds', _0xf303x5c)[0] / 2) + 2, y + 9, 0, 'keybinds', [0, 0, 0, alpha1337 * 255 / 1.3], _0xf303x5c);
        Render.StringCustom(_0xf303x5f + _0xf303x1e9 / 2 - (Render.TextSizeCustom('keybinds', _0xf303x5c)[0] / 2) + 1, y + 8, 0, 'keybinds', [255, 255, 255, alpha1337 * 255], _0xf303x5c);
        for (i = 0; i < h['length']; i++) {
            switch (h[i]) {
            case 'Slow walk':
                Render.FilledRect(_0xf303x5f, y + 23 + 18 * i, _0xf303x1e9, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](swalpha * 255, colorhotkeys[3]))]);
                Render.StringCustom(_0xf303x5f + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, swalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, swalpha * 255], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 3 + _0xf303x1e9 - Render.TextSizeCustom('[holding]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[holding]', [0, 0, 0, swalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 2 + _0xf303x1e9 - Render.TextSizeCustom('[holding]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[holding]', [255, 255, 255, swalpha * 255], _0xf303x5c);
                break;
            case 'FD peek assist':
                Render.FilledRect(_0xf303x5f, y + 23 + 18 * i, _0xf303x1e9, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](fdalpha * 255, colorhotkeys[3]))]);
                Render.StringCustom(_0xf303x5f + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, fdalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, fdalpha * 255], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 3 + _0xf303x1e9 - Render.TextSizeCustom('[holding]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[holding]', [0, 0, 0, fdalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 2 + _0xf303x1e9 - Render.TextSizeCustom('[holding]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[holding]', [255, 255, 255, fdalpha * 255], _0xf303x5c);
                break;
            case 'Auto peek':
                Render.FilledRect(_0xf303x5f, y + 23 + 18 * i, _0xf303x1e9, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](apalpha * 255, colorhotkeys[3]))]);
                Render.StringCustom(_0xf303x5f + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, apalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, apalpha * 255], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 3 + _0xf303x1e9 - Render.TextSizeCustom('[toggled]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[toggled]', [0, 0, 0, apalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 2 + _0xf303x1e9 - Render.TextSizeCustom('[toggled]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[toggled]', [255, 255, 255, apalpha * 255], _0xf303x5c);
                break;
            case 'Anti-aim inverter':
                Render.FilledRect(_0xf303x5f, y + 23 + 18 * i, _0xf303x1e9, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](aialpha * 255, colorhotkeys[3]))]);
                Render.StringCustom(_0xf303x5f + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, aialpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, aialpha * 255], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 3 + _0xf303x1e9 - Render.TextSizeCustom('[toggled]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[toggled]', [0, 0, 0, aialpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 2 + _0xf303x1e9 - Render.TextSizeCustom('[toggled]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[toggled]', [255, 255, 255, aialpha * 255], _0xf303x5c);
                break;
            case 'Safe point override':
                Render.FilledRect(_0xf303x5f, y + 23 + 18 * i, _0xf303x1e9, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](spalpha * 255, colorhotkeys[3]))]);
                Render.StringCustom(_0xf303x5f + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, spalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, spalpha * 255], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 3 + _0xf303x1e9 - Render.TextSizeCustom('[toggled]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[toggled]', [0, 0, 0, spalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 2 + _0xf303x1e9 - Render.TextSizeCustom('[toggled]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[toggled]', [255, 255, 255, spalpha * 255], _0xf303x5c);
                break;
            case 'Force body aim':
                Render.FilledRect(_0xf303x5f, y + 23 + 18 * i, _0xf303x1e9, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](fbalpha * 255, colorhotkeys[3]))]);
                Render.StringCustom(_0xf303x5f + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, fbalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, fbalpha * 255], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 3 + _0xf303x1e9 - Render.TextSizeCustom('[holding]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[holding]', [0, 0, 0, fbalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 2 + _0xf303x1e9 - Render.TextSizeCustom('[holding]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[holding]', [255, 255, 255, fbalpha * 255], _0xf303x5c);
                break;
            case 'Double tap':
                Render.FilledRect(_0xf303x5f, y + 23 + 18 * i, _0xf303x1e9, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](dtalpha * 255, colorhotkeys[3]))]);
                Render.StringCustom(_0xf303x5f + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, dtalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, dtalpha * 255], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 3 + _0xf303x1e9 - Render.TextSizeCustom('[toggled]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[toggled]', [0, 0, 0, dtalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 2 + _0xf303x1e9 - Render.TextSizeCustom('[toggled]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[toggled]', [255, 255, 255, dtalpha * 255], _0xf303x5c);
                break;
            case 'Hide shots':
                Render.FilledRect(_0xf303x5f, y + 23 + 18 * i, _0xf303x1e9, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](hsalpha * 255, colorhotkeys[3]))]);
                Render.StringCustom(_0xf303x5f + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, hsalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, hsalpha * 255], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 3 + _0xf303x1e9 - Render.TextSizeCustom('[toggled]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[toggled]', [0, 0, 0, hsalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 2 + _0xf303x1e9 - Render.TextSizeCustom('[toggled]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[toggled]', [255, 255, 255, hsalpha * 255], _0xf303x5c);
                break;
            case 'Damage override':
                Render.FilledRect(_0xf303x5f, y + 23 + 18 * i, _0xf303x1e9, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](doalpha * 255, colorhotkeys[3]))]);
                Render.StringCustom(_0xf303x5f + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, doalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, doalpha * 255], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 3 + _0xf303x1e9 - Render.TextSizeCustom('[holding]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[holding]', [0, 0, 0, doalpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 2 + _0xf303x1e9 - Render.TextSizeCustom('[holding]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[holding]', [255, 255, 255, doalpha * 255], _0xf303x5c);
                break;
            case 'Menu Opened':
                Render.FilledRect(_0xf303x5f, y + 23 + 18 * i, _0xf303x1e9, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](menualpha * 255, colorhotkeys[3]))]);
                Render.StringCustom(_0xf303x5f + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, menualpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, menualpha * 255], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 3 + _0xf303x1e9 - Render.TextSizeCustom('[~]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[~]', [0, 0, 0, menualpha * 255 / 1.3], _0xf303x5c);
                Render.StringCustom(_0xf303x5f - 2 + _0xf303x1e9 - Render.TextSizeCustom('[~]', _0xf303x5c)[0], y + 26 + 18 * i, 0, '[~]', [255, 255, 255, menualpha * 255], _0xf303x5c)
            }
        }
    };
    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const _0xf303x1ea = Global.GetCursorPosition();
        if (in_bounds(_0xf303x1ea, _0xf303x5f, y, _0xf303x5f + _0xf303x1e9, y + 30)) {
            UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Hotkeys_x', _0xf303x1ea[0] - _0xf303x1e9 / 2);
            UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Hotkeys_y', _0xf303x1ea[1] - 20)
        }
    }
}
Global.RegisterCallback('Draw', 'main_hotkeys')