var _0x539e = ["            NeoSync without spam      ", "        Last update: 22.10.2020", "              owned .", "", "Script items", "Freestanding on key", "Script Items", "Freestanding", "Anti-Aim", "Rage Anti-Aim", "Auto direction", "Misc", "JAVASCRIPT", "Generic", "Standing", "Moving", "Slowwalking", "Aerial", "Passive", "Step", "Jitter", "fluctuate", "sqrt", "Enable modified fakelag", "Fakelag conditions", "Currently configured fakelag condition", "Fakelag mode for ", "toLowerCase", " condition", " passive limit", " passive jitter", " step", " maximum step", " jitter minimum", " jitter maximum", " ping-pong minimum", " ping-pong maximum", "CBasePlayer", "m_fFlags", "m_vecVelocity[0]", "Extra", "Slow walk", "fl_mode", "min_lag", "max_lag", "min", "max", "random", "ceil", "floor", "Fake-Lag", "Triggers", "DT_BaseEntity", "m_flSimulationTime", "Limit", "userid", "Shift amount", "Tolerance", "Rage", "GENERAL", "Exploits", "Doubletap", "Hide shots", "Fast recharge", "Fake duck", "Recharge time", "Watermark", "getHours", "getMinutes", "getSeconds", "0", ":", "CPlayerResource", "m_iPing", "round", "Verdana", "owned.js |  ", "delay: ", "ms | ", "tick | ", "Aspect Ratio", "r_aspectratio", "Animfucker", "Animfucker speed", "Movement", "Slide walk", "m_iTeamNum", "Team based model", "CT Model", "T Model", "SKINS", "Player", "Player model", "Jitter offset", "Yaw offset", "Safe head", "toUpperCase", "Targeting", "Minimum damage", "r8 revolver", "desert eagle", "scar 20", "g3sg1", "Minimum damage override", "HEAVY PISTOL", "SCOUT", "AWP", "AUTOSNIPER", "Heavy Pistol Mindmg", "Scout Mindmg", "AWP Mindmg", "Auto Mindmg", "ssg 08", "awp", "CreateMove", "onCreateMove", "player_connect_full", "player_connect", "player_death", "dt_charge", "Draw", "fs", "AnimfuckerVisibility", "round_start", "Unload", "unload", "cm", "weapon_fire", "handle_fakelag", "handle_visibility", "FrameStageNotify", "aspectratio", "TeamBasedModels", "SafeHead", "draw", "None", "\'TwoTimes\' McCoy", "Seal Team 6 Soldier", "Buckshot", "Lt. Commander Ricksaw", "Dragomir", "Rezan The Ready", "Maximus", "Blackwolf", "The Doctor\' Romanov", "B Squadron Officer", "3rd Commando Company", "Special Agent Ava", "Operator", "Markus Delrow", "Michael Syfers", "Enforcer", "Slingshot", "Soldier", "The Elite Mr. Muhlik", "Ground Rebel", "Osiris", "Prof. Shahmat", "Heavy armor", "Doubletap booster"];
UI.AddLabel(_0x539e[0]);
UI.AddLabel(_0x539e[1]);
UI.AddLabel(_0x539e[2]);
UI.AddLabel(_0x539e[3]);

function fs() {
    if (!UI.GetValue(_0x539e[4], _0x539e[5])) {
        UI.SetEnabled(_0x539e[6], _0x539e[7], false);
        return
    }
    UI.SetEnabled(_0x539e[6], _0x539e[7], true)
}

function Freestanding() {
    var _0x51ebx3 = UI.IsHotkeyActive(_0x539e[4], _0x539e[7]);
    if (_0x51ebx3) {
        UI.SetValue(_0x539e[8], _0x539e[9], _0x539e[10], true)
    } else {
        if (UI.GetValue(_0x539e[5])) {
            UI.SetValue(_0x539e[8], _0x539e[9], _0x539e[10], false)
        }
    }
}
var js_items = [_0x539e[11], _0x539e[12], _0x539e[6]];
var fakelag_conditions = [_0x539e[13], _0x539e[14], _0x539e[15], _0x539e[16], _0x539e[17]];
var fakelag_modes = [_0x539e[18], _0x539e[19], _0x539e[20], _0x539e[21]];
var last_visible_condition = 999;
var last_fl_flag_mode = 999;
var was_menu_visible = false;

function vec_length_2d(_0x51ebxb) {
    return Math[_0x539e[22]](_0x51ebxb[0] * _0x51ebxb[0] + _0x51ebxb[1] * _0x51ebxb[1])
}

function setup_menu() {
    UI.AddCheckbox(_0x539e[23]);
    UI.AddMultiDropdown(_0x539e[24], fakelag_conditions);
    UI.AddDropdown(_0x539e[25], fakelag_conditions);
    for (var _0x51ebxd = 0; _0x51ebxd <= 4; _0x51ebxd++) {
        UI.AddDropdown(_0x539e[26] + fakelag_conditions[_0x51ebxd][_0x539e[27]]() + _0x539e[28], fakelag_modes);
        UI.AddSliderInt(fakelag_conditions[_0x51ebxd] + _0x539e[29], 1, 16);
        UI.AddSliderInt(fakelag_conditions[_0x51ebxd] + _0x539e[30], 1, 100);
        UI.AddSliderInt(fakelag_conditions[_0x51ebxd] + _0x539e[31], 1, 16);
        UI.AddSliderInt(fakelag_conditions[_0x51ebxd] + _0x539e[32], 1, 16);
        UI.AddSliderInt(fakelag_conditions[_0x51ebxd] + _0x539e[33], 1, 16);
        UI.AddSliderInt(fakelag_conditions[_0x51ebxd] + _0x539e[34], 1, 16);
        UI.AddSliderInt(fakelag_conditions[_0x51ebxd] + _0x539e[35], 1, 16);
        UI.AddSliderInt(fakelag_conditions[_0x51ebxd] + _0x539e[36], 1, 16)
    }
}
setup_menu();

function handle_visibility() {
    if (!UI.IsMenuOpen()) {
        return
    }
    var _0x51ebxf = UI.GetValue(js_items, _0x539e[23]);
    if (!_0x51ebxf && !was_menu_visible) {
        return
    }
    var _0x51ebx10 = UI.GetValue(js_items, _0x539e[24]);
    UI.SetValue(js_items, _0x539e[24], _0x51ebx10 |= (1 << 0));
    UI.SetEnabled(js_items, _0x539e[24], _0x51ebxf);
    var _0x51ebx11 = UI.GetValue(js_items, _0x539e[25]);
    var _0x51ebx12 = UI.GetValue(js_items, _0x539e[26] + fakelag_conditions[_0x51ebx11][_0x539e[27]]() + _0x539e[28]);
    if (_0x51ebx11 == last_visible_condition && _0x51ebxf && was_menu_visible && _0x51ebx13 == last_fl_flag_mode) {
        return
    }
    last_visible_condition = _0x51ebx11;
    last_fl_flag_mode = _0x51ebx12;
    UI.SetEnabled(js_items, _0x539e[25], _0x51ebxf);
    for (var _0x51ebxd = 0; _0x51ebxd <= 4; _0x51ebxd++) {
        var _0x51ebx13 = UI.GetValue(js_items, _0x539e[26] + fakelag_conditions[_0x51ebxd][_0x539e[27]]() + _0x539e[28]);
        UI.SetEnabled(js_items, _0x539e[26] + fakelag_conditions[_0x51ebxd][_0x539e[27]]() + _0x539e[28], _0x51ebxf && _0x51ebx11 == _0x51ebxd && _0x51ebx10 & (1 << _0x51ebxd));
        UI.SetEnabled(js_items, fakelag_conditions[_0x51ebxd] + _0x539e[29], _0x51ebxf && _0x51ebx11 == _0x51ebxd && _0x51ebx13 == 0 && _0x51ebx10 & (1 << _0x51ebxd));
        UI.SetEnabled(js_items, fakelag_conditions[_0x51ebxd] + _0x539e[30], _0x51ebxf && _0x51ebx11 == _0x51ebxd && _0x51ebx13 == 0 && _0x51ebx10 & (1 << _0x51ebxd));
        UI.SetEnabled(js_items, fakelag_conditions[_0x51ebxd] + _0x539e[31], _0x51ebxf && _0x51ebx11 == _0x51ebxd && _0x51ebx13 == 1 && _0x51ebx10 & (1 << _0x51ebxd));
        UI.SetEnabled(js_items, fakelag_conditions[_0x51ebxd] + _0x539e[32], _0x51ebxf && _0x51ebx11 == _0x51ebxd && _0x51ebx13 == 1 && _0x51ebx10 & (1 << _0x51ebxd));
        UI.SetEnabled(js_items, fakelag_conditions[_0x51ebxd] + _0x539e[33], _0x51ebxf && _0x51ebx11 == _0x51ebxd && _0x51ebx13 == 2 && _0x51ebx10 & (1 << _0x51ebxd));
        UI.SetEnabled(js_items, fakelag_conditions[_0x51ebxd] + _0x539e[34], _0x51ebxf && _0x51ebx11 == _0x51ebxd && _0x51ebx13 == 2 && _0x51ebx10 & (1 << _0x51ebxd));
        UI.SetEnabled(js_items, fakelag_conditions[_0x51ebxd] + _0x539e[35], _0x51ebxf && _0x51ebx11 == _0x51ebxd && _0x51ebx13 == 3 && _0x51ebx10 & (1 << _0x51ebxd));
        UI.SetEnabled(js_items, fakelag_conditions[_0x51ebxd] + _0x539e[36], _0x51ebxf && _0x51ebx11 == _0x51ebxd && _0x51ebx13 == 3 && _0x51ebx10 & (1 << _0x51ebxd))
    }
    was_menu_visible = _0x51ebxf
}

function get_condition(_0x51ebx15) {
    var _0x51ebx16 = Entity.GetProp(_0x51ebx15, _0x539e[37], _0x539e[38]);
    var _0x51ebx17 = Entity.GetProp(_0x51ebx15, _0x539e[37], _0x539e[39]);
    var _0x51ebx18 = vec_length_2d(_0x51ebx17);
    var _0x51ebx19 = UI.IsHotkeyActive(_0x539e[8], _0x539e[40], _0x539e[41]) && _0x51ebx18 > 1.0;
    var _0x51ebx10 = UI.GetValue(js_items, _0x539e[24]);
    if (!(_0x51ebx16 & (1 << 0))) {
        return _0x51ebx10 & (1 << 4) ? 4 : 0
    }
    if (_0x51ebx19) {
        return _0x51ebx10 & (1 << 3) ? 3 : 0
    }
    if (_0x51ebx18 > 3.5) {
        return _0x51ebx10 & (1 << 2) ? 2 : 0
    } else {
        return _0x51ebx10 & (1 << 1) ? 1 : 0
    }
    return 0
}

function get_fl_data_based_on_conditions(_0x51ebx15) {
    var _0x51ebx1b = get_condition(_0x51ebx15);
    var _0x51ebx1c = {
        fl_mode: 0,
        min_lag: 0,
        max_lag: 1
    };
    _0x51ebx1c[_0x539e[42]] = UI.GetValue(js_items, _0x539e[26] + fakelag_conditions[_0x51ebx1b][_0x539e[27]]() + _0x539e[28]);
    switch (_0x51ebx1c[_0x539e[42]]) {
    case 0:
        _0x51ebx1c[_0x539e[43]] = UI.GetValue(js_items, fakelag_conditions[_0x51ebx1b] + _0x539e[29]);
        _0x51ebx1c[_0x539e[44]] = UI.GetValue(js_items, fakelag_conditions[_0x51ebx1b] + _0x539e[30]);
        break
    case 1:
        _0x51ebx1c[_0x539e[43]] = UI.GetValue(js_items, fakelag_conditions[_0x51ebx1b] + _0x539e[31]);
        _0x51ebx1c[_0x539e[44]] = UI.GetValue(js_items, fakelag_conditions[_0x51ebx1b] + _0x539e[32]);
        break
    case 2:
        _0x51ebx1c[_0x539e[43]] = UI.GetValue(js_items, fakelag_conditions[_0x51ebx1b] + _0x539e[33]);
        _0x51ebx1c[_0x539e[44]] = UI.GetValue(js_items, fakelag_conditions[_0x51ebx1b] + _0x539e[34]);
        break
    case 3:
        _0x51ebx1c[_0x539e[43]] = UI.GetValue(js_items, fakelag_conditions[_0x51ebx1b] + _0x539e[35]);
        _0x51ebx1c[_0x539e[44]] = UI.GetValue(js_items, fakelag_conditions[_0x51ebx1b] + _0x539e[36]);
        break
    }
    return _0x51ebx1c
}

function clamp(_0x51ebx1e, _0x51ebx1f, _0x51ebx20) {
    return Math[_0x539e[46]](_0x51ebx1f, Math[_0x539e[45]](_0x51ebx20, _0x51ebx1e))
}

function random_int(_0x51ebx1f, _0x51ebx20) {
    return Math[_0x539e[49]](Math[_0x539e[47]]() * (Math[_0x539e[48]](_0x51ebx20) - Math[_0x539e[49]](_0x51ebx1f) + 1)) + Math[_0x539e[49]](_0x51ebx1f)
}
var old_simtime = 0.0;

function handle_fakelag() {
    if (UI.GetValue(js_items, _0x539e[23])) {
        var _0x51ebx15 = Entity.GetLocalPlayer();
        if (Entity.IsValid(_0x51ebx15) && Entity.IsAlive(_0x51ebx15)) {
            UI.SetValue(_0x539e[8], _0x539e[50], _0x539e[51], 0);
            var _0x51ebx1c = get_fl_data_based_on_conditions(_0x51ebx15);
            var _0x51ebx24 = Entity.GetProp(_0x51ebx15, _0x539e[52], _0x539e[53]);
            var _0x51ebx25 = UI.GetValue(_0x539e[8], _0x539e[50], _0x539e[54]);
            if (_0x51ebx1c[_0x539e[42]] == 0) {
                UI.SetValue(_0x539e[8], _0x539e[50], _0x539e[54], _0x51ebx1c[_0x539e[43]]);
                UI.SetValue(_0x539e[8], _0x539e[50], _0x539e[20], _0x51ebx1c[_0x539e[44]]);
                return
            } else {
                if (_0x51ebx1c[_0x539e[42]] != 0) {
                    UI.SetValue(_0x539e[8], _0x539e[50], _0x539e[20], 0)
                }
            }
            if (_0x51ebx24 != old_simtime) {
                var _0x51ebx26 = 0;
                old_simtime = _0x51ebx24;
                switch (_0x51ebx1c[_0x539e[42]]) {
                case 1:
                    if (_0x51ebx25 >= _0x51ebx1c[_0x539e[44]]) {
                        break
                    }
                    _0x51ebx26 = clamp(_0x51ebx25 + _0x51ebx1c[_0x539e[43]], 0, _0x51ebx1c[_0x539e[44]]);
                    break
                case 2:
                    _0x51ebx26 = random_int(_0x51ebx1c[_0x539e[43]], _0x51ebx1c[_0x539e[44]]);
                    break
                case 3:
                    _0x51ebx26 = _0x51ebx1c[_0x539e[43]] == _0x51ebx25 ? _0x51ebx1c[_0x539e[44]] : _0x51ebx1c[_0x539e[43]];
                    break
                }
                UI.SetValue(_0x539e[8], _0x539e[50], _0x539e[54], _0x51ebx26)
            }
        }
    }
}
var last_shot_tick = 0;
var in_recharge = false;
var shot = false;
var was_not_dt = false;

function weapon_fire() {
    if (Entity.GetEntityFromUserID(Event.GetInt(_0x539e[55])) == Entity.GetLocalPlayer()) {
        last_shot_tick = Globals.Tickcount();
        shot = true
    }
}

function cm() {
    Exploit.OverrideShift(UI.GetValue(_0x539e[4], _0x539e[56]));
    Exploit.OverrideTolerance(UI.GetValue(_0x539e[4], _0x539e[57]));
    var _0x51ebx2d = UI.IsHotkeyActive(_0x539e[58], _0x539e[59], _0x539e[60], _0x539e[61]) && UI.GetValue(_0x539e[58], _0x539e[59], _0x539e[60], _0x539e[61]);
    var _0x51ebx2e = UI.IsHotkeyActive(_0x539e[58], _0x539e[59], _0x539e[60], _0x539e[62]) && UI.GetValue(_0x539e[58], _0x539e[59], _0x539e[60], _0x539e[62]);
    if (!UI.GetValue(_0x539e[4], _0x539e[63]) || (_0x51ebx2e && !_0x51ebx2d)) {
        Exploit.EnableRecharge();
        return
    }
    Exploit.DisableRecharge();
    var _0x51ebx2f = Exploit.GetCharge();
    if (_0x51ebx2f != 1) {
        if (UI.GetValue(_0x539e[8], _0x539e[40], _0x539e[64]) || !_0x51ebx2d) {
            was_not_dt = true;
            return
        }
        if (Globals.Tickcount() - last_shot_tick > UI.GetValue(_0x539e[4], _0x539e[65]) && shot) {
            in_recharge = true;
            shot = false
        }
        if (was_not_dt) {
            was_not_dt = false;
            in_recharge = true
        }
    }
    if (in_recharge) {
        Exploit.Recharge();
        if (_0x51ebx2f == 1) {
            in_recharge = false
        }
    }
}

function unload() {
    Exploit.EnableRecharge();
    Exploit.OverrideShift(12);
    Exploit.OverrideTolerance(2)
}

function round_start() {
    last_shot_tick = 0;
    in_recharge = true
}
var color = UI.GetColor(_0x539e[11], _0x539e[12], _0x539e[4], _0x539e[66]);

function Watermark() {
    if (!World.GetServerString()) {
        return
    }
    var _0x51ebx34 = new Date();
    var _0x51ebx35 = _0x51ebx34[_0x539e[67]]();
    var _0x51ebx36 = _0x51ebx34[_0x539e[68]]();
    var _0x51ebx37 = _0x51ebx34[_0x539e[69]]();
    var _0x51ebx38 = _0x51ebx35 <= 9 ? _0x539e[70] + _0x51ebx35 + _0x539e[71] : _0x51ebx35 + _0x539e[71];
    var _0x51ebx39 = _0x51ebx36 <= 9 ? _0x539e[70] + _0x51ebx36 + _0x539e[3] : _0x51ebx36 + _0x539e[71];
    var _0x51ebx3a = _0x51ebx37 <= 9 ? _0x539e[70] + _0x51ebx37 : _0x51ebx37;
    var _0x51ebx3b = Globals.Tickrate().toString();
    var _0x51ebx3c = Math[_0x539e[74]](Entity.GetProp(Entity.GetLocalPlayer(), _0x539e[72], _0x539e[73])).toString();
    color = UI.GetColor(_0x539e[11], _0x539e[12], _0x539e[4], _0x539e[66]);
    var _0x51ebx3d = Render.AddFont(_0x539e[75], 7, 400);
    var _0x51ebx3e = _0x539e[76] + _0x539e[77] + _0x51ebx3c + _0x539e[78] + _0x51ebx3b + _0x539e[79] + _0x51ebx38 + _0x51ebx39 + _0x51ebx3a;
    var _0x51ebx3f = Render.TextSizeCustom(_0x51ebx3e, _0x51ebx3d)[0] + 8;
    var _0x51ebx40 = Global.GetScreenSize()[0];
    _0x51ebx40 = _0x51ebx40 - _0x51ebx3f - 20;;
    Render.FilledRect(_0x51ebx40 + 2, 14, _0x51ebx3f, 1, [color[0], color[1], color[2], 255]);
    Render.FilledRect(_0x51ebx40 + 2, 15, _0x51ebx3f, 18, [17, 17, 17, color[3]]);
    Render.FilledRect(_0x51ebx40, 16, _0x51ebx3f + 2, 17, [17, 17, 17, color[3]]);
    Render.FilledRect(_0x51ebx40 - 1, 17, _0x51ebx3f + 2, 16, [17, 17, 17, color[3]]);
    Render.Line(_0x51ebx40 + 2, 14, _0x51ebx40 - 2, 18, [color[0], color[1], color[2], 255]);
    Render.Line(_0x51ebx40 - 2, 18, _0x51ebx40 - 2, 32, [color[0], color[1], color[2], 255]);
    Render.StringCustom(_0x51ebx40 + 5, 17, 0, _0x51ebx3e, [255, 255, 255, 255], _0x51ebx3d)
}

function aspectratio() {
    menu_val = UI.GetValue(_0x539e[80]);
    string_menu_val = menu_val.toString();
    Convar.SetString(_0x539e[81], string_menu_val)
}

function AnimfuckerVisibility() {
    if (!UI.GetValue(_0x539e[6], _0x539e[82])) {
        UI.SetEnabled(_0x539e[6], _0x539e[83], false);
        return
    }
    UI.SetEnabled(_0x539e[6], _0x539e[83], true)
}
var old_tick_count = 0;

function Animfucker() {
    if (UI.GetValue(_0x539e[4], _0x539e[82]) && (Globals.Tickcount() - old_tick_count) > (UI.GetValue(_0x539e[4], _0x539e[83]))) {
        if (UI.GetValue(_0x539e[11], _0x539e[59], _0x539e[84], _0x539e[85])) {
            UI.SetValue(_0x539e[11], _0x539e[59], _0x539e[84], _0x539e[85], 0)
        } else {
            UI.SetValue(_0x539e[11], _0x539e[59], _0x539e[84], _0x539e[85], 1)
        }
        old_tick_count = Globals.Tickcount()
    }
}

function TeamBasedModels() {
    if (Cheat.FrameStage() != 2) {
        return
    }
    var _0x51ebx46 = Entity.GetProp(Entity.GetLocalPlayer(), _0x539e[52], _0x539e[86]);
    if (!UI.GetValue(_0x539e[6], _0x539e[87])) {
        UI.SetEnabled(_0x539e[6], _0x539e[88], false);
        UI.SetEnabled(_0x539e[6], _0x539e[89], false);
        return
    }
    UI.SetEnabled(_0x539e[6], _0x539e[89], true);
    UI.SetEnabled(_0x539e[6], _0x539e[88], true);
    if (_0x51ebx46 == 2) {
        UI.SetValue(_0x539e[11], _0x539e[90], _0x539e[91], _0x539e[92], UI.GetValue(_0x539e[6], _0x539e[89]))
    } else {
        if (_0x51ebx46 == 3) {
            UI.SetValue(_0x539e[11], _0x539e[90], _0x539e[91], _0x539e[92], UI.GetValue(_0x539e[6], _0x539e[88]))
        }
    }
}
var jitter_cache = UI.GetValue(_0x539e[8], _0x539e[9], _0x539e[93]);
var yaw_cache = UI.GetValue(_0x539e[8], _0x539e[9], _0x539e[94]);

function SafeHead() {
    localplayer_index = Entity.GetLocalPlayer();
    if (UI.GetValue(_0x539e[11], _0x539e[12], _0x539e[4], _0x539e[95]) && UI.IsHotkeyActive(_0x539e[8], _0x539e[40], _0x539e[41])) {
        UI.SetValue(_0x539e[8], _0x539e[9], _0x539e[94], 10);
        UI.SetValue(_0x539e[8], _0x539e[9], _0x539e[93], 0);
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(-30)
    } else {
        UI.SetValue(_0x539e[8], _0x539e[9], _0x539e[93], jitter_cache);
        AntiAim.SetOverride(0)
    }
}
var screen_size = Global.GetScreenSize();

function isActive(_0x51ebx4c) {
    return UI.IsHotkeyActive(_0x539e[4], _0x51ebx4c)
}

function setValue(_0x51ebx4e, _0x51ebx4f) {
    UI.SetValue(_0x539e[58], _0x51ebx4e[_0x539e[96]](), _0x539e[97], _0x539e[98], _0x51ebx4f)
}

function isHeavyPistol(_0x51ebx51) {
    if (_0x51ebx51 == _0x539e[99] || _0x51ebx51 == _0x539e[100]) {
        return true
    }
}

function isAutoSniper(_0x51ebx51) {
    if (_0x51ebx51 == _0x539e[101] || weapon_name == _0x539e[102]) {
        return true
    }
}
g_Local = Entity.GetLocalPlayer();
g_Local_weapon = Entity.GetWeapon(g_Local);
weapon_name = Entity.GetName(g_Local_weapon);
g_Local_classname = Entity.GetClassName(g_Local_weapon);
var restore_values = false;

function override_mindmg() {
    if (!isActive(_0x539e[103])) {
        if (restore_values) {
            restore_values = false;
            setValue(_0x539e[104], heavy_cache);
            setValue(_0x539e[105], scout_cache);
            setValue(_0x539e[106], awp_cache);
            setValue(_0x539e[107], auto_cache)
        } else {
            heavy_cache = UI.GetValue(_0x539e[58], _0x539e[104], _0x539e[97], _0x539e[98]);
            scout_cache = UI.GetValue(_0x539e[58], _0x539e[105], _0x539e[97], _0x539e[98]);
            awp_cache = UI.GetValue(_0x539e[58], _0x539e[106], _0x539e[97], _0x539e[98]);
            auto_cache = UI.GetValue(_0x539e[58], _0x539e[107], _0x539e[97], _0x539e[98])
        }
        return
    }
    restore_values = true;
    heavy_value = UI.GetValue(_0x539e[11], _0x539e[12], _0x539e[4], _0x539e[108]);
    scout_value = UI.GetValue(_0x539e[11], _0x539e[12], _0x539e[4], _0x539e[109]);
    awp_value = UI.GetValue(_0x539e[11], _0x539e[12], _0x539e[4], _0x539e[110]);
    auto_value = UI.GetValue(_0x539e[11], _0x539e[12], _0x539e[4], _0x539e[111]);
    weapon_name = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (isHeavyPistol(weapon_name)) {
        setValue(_0x539e[104], heavy_value)
    }
    if (weapon_name == _0x539e[112]) {
        setValue(_0x539e[105], scout_value)
    }
    if (weapon_name == _0x539e[113]) {
        setValue(_0x539e[106], awp_value)
    }
    if (isAutoSniper(weapon_name)) {
        setValue(_0x539e[107], auto_value)
    }
}
var oldTick = 0;
var lastPressed = 0;
var isHideRealActive = false;

function onCreateMove() {
    override_mindmg()
}

function player_connect() {
    lastPressed = Global.Tickcount();
    oldTick = Global.Tickcount()
}
Global.RegisterCallback(_0x539e[114], _0x539e[115]);
Global.RegisterCallback(_0x539e[116], _0x539e[117]);
Global.RegisterCallback(_0x539e[118], _0x539e[119]);
Cheat.RegisterCallback(_0x539e[120], _0x539e[66]);
Cheat.RegisterCallback(_0x539e[114], _0x539e[7]);
Cheat.RegisterCallback(_0x539e[114], _0x539e[121]);
Cheat.RegisterCallback(_0x539e[114], _0x539e[122]);
Cheat.RegisterCallback(_0x539e[123], _0x539e[123]);
Cheat.RegisterCallback(_0x539e[124], _0x539e[125]);
Cheat.RegisterCallback(_0x539e[114], _0x539e[126]);
Cheat.RegisterCallback(_0x539e[127], _0x539e[127]);
Cheat.RegisterCallback(_0x539e[120], _0x539e[128]);
Cheat.RegisterCallback(_0x539e[120], _0x539e[129]);
Cheat.RegisterCallback(_0x539e[130], _0x539e[131]);
Cheat.RegisterCallback(_0x539e[130], _0x539e[132]);
Cheat.RegisterCallback(_0x539e[114], _0x539e[82]);
Cheat.RegisterCallback(_0x539e[114], _0x539e[133]);
Cheat.RegisterCallback(_0x539e[120], _0x539e[134]);
UI.AddCheckbox(_0x539e[5]);
UI.AddHotkey(_0x539e[7]);
UI.AddCheckbox(_0x539e[87]);
UI.AddDropdown(_0x539e[88], [_0x539e[135], _0x539e[136], _0x539e[137], _0x539e[138], _0x539e[139], _0x539e[140], _0x539e[141], _0x539e[142], _0x539e[143], _0x539e[144], _0x539e[145], _0x539e[146], _0x539e[147], _0x539e[148], _0x539e[149], _0x539e[150], _0x539e[151], _0x539e[152], _0x539e[153], _0x539e[154], _0x539e[155], _0x539e[156], _0x539e[157], _0x539e[158]]);
UI.AddDropdown(_0x539e[89], [_0x539e[135], _0x539e[136], _0x539e[137], _0x539e[138], _0x539e[139], _0x539e[140], _0x539e[141], _0x539e[142], _0x539e[143], _0x539e[144], _0x539e[145], _0x539e[146], _0x539e[147], _0x539e[148], _0x539e[149], _0x539e[150], _0x539e[151], _0x539e[152], _0x539e[153], _0x539e[154], _0x539e[155], _0x539e[156], _0x539e[157], _0x539e[158]]);
UI.AddCheckbox(_0x539e[82]);
UI.AddSliderInt(_0x539e[83], 1, 10);
UI.AddCheckbox(_0x539e[95]);
UI.AddColorPicker(_0x539e[66]);
UI.AddSliderFloat(_0x539e[80], 0.0, 1.6);
UI.AddLabel(_0x539e[3]);
UI.AddLabel(_0x539e[159]);
UI.AddSliderInt(_0x539e[56], 8, 14);
UI.AddSliderInt(_0x539e[57], 1, 8);
UI.AddSliderInt(_0x539e[65], 0, 64);
UI.AddLabel(_0x539e[3]);
UI.AddHotkey(_0x539e[103]);
UI.AddSliderInt(_0x539e[108], 0, 130);
UI.AddSliderInt(_0x539e[109], 0, 130);
UI.AddSliderInt(_0x539e[110], 0, 130);
UI.AddSliderInt(_0x539e[111], 0, 130)

var _0x33bc = ['ccOKZjrDl0rDjMKaasOE', 'w4vDisKXBEg=', 'wpXDpMKrHWc=', 'wpvDrMKVw7Fv', 'w53DuW3DiWPChMOyRsK5wpU=', 'wolWbsOgwp8=', 'w4rDiMK7F2c=', 'wpAwwqnClFjChFlHPcKN', 'PiPDg8KSHQ==', 'w77DrF3Dl8Ki', 'PHhyI8O8PjTCsQ==', 'wqMjwr/CkGM=', 'wr3Cq8ONwq3Cvg==', 'HUbDs8Odw47CmsK9wqDDtGc=', 'wrEiwpjCtUQ=', 'wpVDVm7DnUcY', 'Bnw6w53DsQ==', 'wqnDr8KZCU0ow4XCscO4wrs=', 'ccOKZiDDnV3DmcKYYcOZ', 'WcK7fsKRYMKgw5lydsOO', 'woI8EsO2fHob', 'woTDq8O1wpPDsw==', 'GS3DlMOGw7zCgyvCr8KdEA==', 'HUbDs8OOw4nCi8KjwpXDo0Y=', 'UcK1w5bCtzc=', 'wppewoDCnlMsw6/CohtG', 'wp8cw5XClFlnw6nClsOBAg==', 'wr/Cs8K+w5rDpQ==', 'wrLChmHDvQ==', 'K2RsTA==', 'w68QwrDCusKK', 'wppUwqbClH0=', 'wqDDoCDDiHU0VMKnw5vChQ==', 'w6/DucKFJFnDgXzDo0Jy', 'EgfDjMOA', 'wrPDgsKsHls=', 'w5TCrsKvM8Kl', 'wo/CqcOx', 'JDXDiMOVw4g=', 'w6Zmw7fCuFg=', 'wrzChcK8w5XDr8OyFMKlw7hi', 'w6TCpcKSw6YqZcKafiFe', 'Q8ONX8O5Bw==', 'wrfDrcKqw4w=', 'LiRGw5chAQ==', 'wpPDrcK3w6N7wrnCvCnDqsKo', 'wrLCo8OhwpTCvA==', 'fm3CtyRww53Cu8OAZ8KE', 'DlDCo8KUK8OQwoYLw6I3', 'ScOaw48SaQ==', 'wrpuwpzCmsK9az7DlDXDng==', 'wrjCnMK/w5bDuA==', 'w590w7/Ct3I=', 'HG1+MnE=', 'w5vCmcKNCMKe', 'w6HDvjLDqsKeDCJmwqLCvg==', 'OmBrRMKEDQ==', 'GmVJJHbDuVEywpTCuA==', 'wo7Do8OSwoA=', 'wpFTUEnDl1gYM3/Dmg==', 'RMOAfzjDgU7DjsK8QA==', 'wq/CqcOxwqTCv8OKw4Y/IDY=', 'w53DqMKDKGQ=', 'bMOtZjfDug==', 'wr/DsMKzSMKySSo=', 'w5vDrlDCglQ=', 'wpPChQfDt8K0', 'wr/DhG1dIw==', 'FHRXCWI=', 'JVAmw77DsA==', 'w5gVB8KIw7QUwrvDmA==', 'Dz5Aw44BCxzDlMOJwqM=', 'wpnDlMO8wqLDkQ==', 'wr3CnMKJw7jDpw==', 'w6XDmSfDlcKUPy9rwovCtw==', 'TcOcfsOXPA==', 'dcK4fMKXQQ==', 'YMKRw4U=', 'w6TChMK3PsKf', 'wr/DqMOewpzDiMK4EsOASsKb', 'W8Kwa8K6YsKx', 'BgEXw4vCmj9k', 'wr3Dr8KZB00yw4/Crg==', 'wp86FQ==', 'wq/DvcKlHEE=', 'OnXDrcOd', 'GTjDj8OKw5g=', 'w7ppw7vCoGUjw6HCkjwY', 'wo7CgsK5w5fDvg==', 'DGMaw5TDhsOSC1DCr8Km', 'w7wuwq4=', 'TMK5fsKKQcKsw6hlesOW', 'w6HDvjLDqMKQAiY=', 'w6Fuw4fCs1Y=', 'SUzDisKyYg==', 'd8OFWS/Dmw==', 'w7/CvsKQ', 'OHtUQsKT', 'w5Y2wrHCoMKL', 'TsOnw4kLcQ==', 'QBhUw4LDhiY=', 'dcOaYBnDm0bDmQ==', 'w5UXw4Fqew==', 'wrEUw4LCtXo=', 'w47DqcKf', 'wp/DmcKQSFg=', 'w53DtMK6B3k=', 'w6wiJMKXw68=', 'TGrCgDlB', 'w4zDjsKvBHo=', 'd8OFw4ofYw==', 'w4DDhsKOIVMBA8OfMcKJ', 'MxfDlsOzw63Cuj4=', 'dmvDhsK2SMKCPMOabwc=', 'wpPDrcK3w6xhwqjCrirDiMKU', 'CsKwwoY=', 'wpTCimzDnFc=', 'wr3DkBDDlHY=', 'F3FkFMO+OQ==', 'w4LCtcKsw6IJ', 'w5XDsXLDj8Km', 'w5fDpsKOwo7CicKHTsOQFMOZ', 'wrnDscKjXcKpVTfDhMKD', 'wp/DgxDDv1s=', 'wrJXacOcwps=', 'Y37DgsKjJcKKMcOPbBI=', 'w4AiKcKlw7E=', 'HUbDs8ORw47Cmg==', 'wr3DqybDnEU=', 'Bh3Dj8O2w6zCsDzCisK2', 'GjNHw7YkDAzDlMOJwpM=', 'w4XDmsKUC1s=', 'w7rCqMKXw6IrYQ==', 'S8KAw7bCkDQ=', 'wrJdUQ==', 'Q2zDscKPfw==', 'HHBcQcKq', 'JELCqg==', 'w50ww7tbSQ7DiMO4', 'w7c+wrDCosKF', 'w4DDqk/ClXI=', 'w7gBAcK6', 'wp8cw5XCkltyw7PCkcOhIw==', 'aDZew7LDsw==', 'w5HCocKBw5A8eMKHTyA=', 'wqrCh8K1fGE=', 'wr/Dm8KXMnI=', 'wqLDoMOjwrfDpA==', 'A8K7wpFQMFtx', 'IUA4w6HDsw==', 'IyVow6IN', 'wqrDpcKBPUUxw44=', 'YnrDncKQZMKHKsON', 'wqQ8MMOnbEUHwqluwog=', 'wrbCs8K1Xlc=', 'UsKGw4/CjSw=', 'MFh2ccKP', 'LlIlw7/Dqg==', 'wrxrwq3CjcKubzfDkADDmA==', 'w5l6w60=', 'wqLCp2DDukE=', 'wozDhcKvW1A=', 'w5jDq0fCgV7CiMOTVcO8wrY=', 'CEbDpsO0w5TCh8K5wrE=', 'wrHCgcK/w7HDgA==', 'w7LDr0fDrMKAXcK9EMOWVg==', 'woVTUFbDtnMyMHfDug==', 'I3d/JcO2', 'AG3DssOJwoc=', 'woNQTsODwrLCp1s=', 'TMKIw6jChDg=', 'LBPDisKgOA==', 'w4XDucKBLnI=', 'woMjwqPCmHE=', 'T0bCqT1k', 'w4LCrcKWw6g6a8KaRA==', 'GGMaw4rDjMOQBnPCmcKs', 'w5TDhsKOJFIW', 'w7/DsWfCkV3CucO9SMO4wr8=', 'DnDCg8OqIcOnwqs=', 'P3bDqcOXwpk=', 'J0Ihw43DgA==', 'f3bDpcKcTw==', 'EjlVw4A6EQ3Dgw==', 'A8KkwrBSCQ==', 'd8K/w5nChDY=', 'wp50wqvCscKt', 'LS7Dn8KTHMOkwqvCljA=', 'w6kBwqzCpMKE', 'w5UBwqJLXQHDlsK9WMOt', 'wp8cw5XCnVhww6HCjsO4Cw==', 'wqJOccOewrw=', 'wqBkUGLDjg==', 'wq3DscKjQcKrQizDmMKNw68=', 'wqTCjC7Dj8KR', 'JTzDv8KoAw==', 'On3DpMKVwpgRZhbDsw4=', 'w6jDtMKBAFo=', 'w4w+PMK+w54=', 'wpU5woDCuGA=', 'ccOKZijDnF/DlcKBfcOx', 'WMOlaMOGPQ==', 'I8K1wohwcVl3wrbCi8KC', 'DU9yDcOn', 'w4Z6w6o=', 'MG7DosOVwq4cYRjCtg==', 'wr4qD8ONY3AHwr50wp8=', 'wpHDm2dkMw==', 'wpPDrcK3w7N+wrnCqifDvA==', 'wq7DqMKueGTCgwrCpA==', 'w7Z6w6zCql4=', 'csKXw4g=', 'wpXDpMKvMU4yw4XCqMOUwrg=', 'IxlMw4c6', 'OnPDtMKYwp0JZADCtg==', 'UsKXw4jCkwXCm8KCwrjCh8Kx', 'woHChinDscKKI8OQwoE7woA=', 'wq3Du8KBw4VY', 'RGbDjMK0', 'L8KhwrtiCw==', 'w70+wrQ=', 'HUbDs8OMw4XCj8K5wrnDrFU=', 'MlxCB8Op', 'woFaQ8OWwqHCoVjCuw==', 'wpbCp8OkwoLCtg==', 'woTCscKKcH8=', 'ecOZdx/DgELDmMKQTMOe', 'dmvDm8Kva8KM', 'wpfDmsKOT8K0', 'wrfCiGHDvA==', 'MxfDlsOmw6bCsB7CrMKBGg==', 'wqxhwonCqVw=', 'Qy1ew5rDnA==', 'w6/DtWzDqMK9WMKsDMOlQw==', 'wr/DvsKcTMK0', 'woQnwq/CkE7Co0hUGcKJ', 'w5TDnEzDvsKC', 'SFLDvcKScA==', 'w4LDqSfDkcKuBi1uwpvCsQ==', 'w7BKw5HCmXY=', 'H2kJw7/DhcOUIlPCi8Kh', 'worChmPDoVTDt8K1', 'J1TCqg==', 'w7shw65j', 'w7fDoUbCkFw=', 'w4TDhcKCMFM=', 'X8KXfsKAacKAw6VjfMOS', 'w54Fw4dhbw==', 'BF7CtsOaHcOqwpoHwrcZ', 'f8OcUALDhg==', 'CEbDoMOxw5PCmsKxwqbDjkA=', 'wrQ7wqjCm28=', 'WWHCrAY=', 'NH/Cj8OpFQ==', 'wofDrcK3w7ZvwqfCuiM=', 'EiRrw4o8Dg3DiMO6wrY=', 'GW/DqsOMwqIHZg==', 'wpTCiy7Dl8K2IcOQwo0NwoQ=', 'wrPDjW9dKcOfw4bCkijChA==', 'OiTDh8KpE8Oqwrc=', 'w6zDhcKCDHE=', 'RAxiw6DDiA==', 'w50vwrLChMKuw70=', 'wp3Cp0DDqHU=', 'w6HDvjLDo8KIChNlwoHCuw==', 'TsOaw7AcVA==', 'H0BJNEQ=', 'wpF0SWrDpg==', 'w4rDgGDDtsKG', 'PE/DqMO3w5I=', 'OmJJHH8=', 'wojClcKPel4=', 'w6XCocKB', 'V3bDjsKvaw==', 'W1rCtxBI', 'w6/DmsKRFXg=', 'wo/DuMK0XQ==', 'w7tww7rCoXg=', 'IgDDpsKJNg==', 'Z8Oow7wYJw==', 'wrpTSn3DgEI=', 'ZhREw5zDiCwpLWI=', 'w6YYwozCu8KO', 'wp0mDMOmZA==', 'QcO6w640FcKkwo8TN8Kp', 'ccKTw5/CtQ==', 'wpRRwqPCqFI=', 'w5gpPcKNw5E1wp0=', 'acO6eMOGGQ==', 'Q8Oww7cKV2Ug', 'w5HCocKBw4UkZcKPVQ==', 'w7fCrsK3FMKwwr98OQ==', 'wprDqMKu', 'MQrDh8OAw6rCoSvCgMKdHg==', 'w5TDo1fDssKkVg==', 'FsKxwpc=', 'woVTUEnDgFgUOHY=', 'GxDDksOnw4Y=', 'wqLDs8OEwpE=', 'wpnDr8Kyek4=', 'wqVmbV/Dsg==', 'wrAPwqbChGA=', 'wrjDu8KlbcK4bSvDh8KU', 'Mm5SEMO8PyzCtcOZwok=', 'cxNTw57ChgI1Lg==', 'wpvCmMKLSVYjGsKxCyQ=', 'MzhNw4A=', 'w5HCocKBw4Ymb8KDSCJE', 'wqHCghrDu8Ki', 'S8OqZcOIPX0Uw5/CncKX', 'wrvDrcKRw4NZ', 'EcK9wox7', 'woDDvsKVK3Y=', 'NjZb', 'S8Oiw5ciUg==', 'VMO6w68jQmU+', 'HUbDs8OLw4PCnMKxwrHDo3I=', 'w7oUwobCuMKN', 'PDnDr8O6w50=', 'G0fDo8Obw4/CgsK7wqbDnUg=', 'QMO9ZhXDiA==', 'wp/DqTbDr3c0', 'X8OqZcOfOn8Pw7vCgA==', 'YRhTw7vDqRoTJXBI', 'WcKCdcK2bw==', 'BhPDjMOHw7DCuA==', 'Di1uw6cQ', 'w6oJFsK8', 'wo5FwprCkUUDw6LCkQo=', 'w4HDlHPDnsK+', 'w6PCrsK3FMK9wrt4AsKwLA==', 'wrvDjcKpLmQ=', 'VsKww5XCthk=', 'MxfDlsOzw7PCtDfCpsKAAA==', 'NXRtDMOI', 'w6/DqMKCLXs=', 'dnrDncKUYMKKM8OnZhE=', 'QAhJ', 'w7rDvcKaBBfDgXDDqEtz', 'HU1sBg==', 'wpXDrMKnw6R8wqTCvyLDt8KP', 'w6rCnsKvFcK/', 'UsO4w5wlMw==', 'wq7Dm1JHH8Obw4U=', 'V8KHRcKYZQ==', 'w4gCFsKvw6wewpfDg07Crw==', 'wqjDv8ODwrrDlcKPH8ODXcK5', 'w4DDhsKOPVADG8OWE8KW', 'wrzDv8ODwqDDmcKaEcOjQ8KP', 'woTCvhPDiMK6', 'w58ZEMKlw5EVwq7DiUrCvA==', 'wq8VD8OBXQ==', 'w7sjwrXCn8K1', 'Fl7Co8OeFMOMwqAHwrYR', 'A0dtDFXDjiMSwrDCiQ==', 'wpvCmMKLXl05F8KgAC0=', 'KCdPw4wrAA==', 'w5DDisKwAW8=', 'w7Zqw6zCpn4nw6A=', 'wpnClcKkw7DDpMOy', 'w7XDo1DDlcKsUsKlOsOCRg==', 'w7PDtcKKDnA=', 'GUV2JcOp', 'KnPDpcOzw4U=', 'S8KXdsKEdQ==', 'wqrCmcK/w5c=', 'w5puw7HCml0=', 'wrFTwpY=', 'am3Ctz1Bw6HChsOIYMKa', 'wrDDqRPDqnE=', 'w4bCq8KZw7ovZcKA', 'wqzDr8OFwobDlcKWGA==', 'QGnCrQw=', 'UcKdw5DCuAfClcKA', 'w6PCrsK3HsKewolSK8KwOQ==', 'w5vCtsK3w6wA', 'wpbDrcK8dsKZ', 'w7XDr8KwDV7Dlns=', 'TXDDh8Kj', 'B3Q8w7DDpg==', 'RsKXw4jCiQnCjsKMwpjCmcKH', 'Eh3DkMOAw7o=', 'HDJXw6knBgnDncOrwrk=', 'W8Kwa8KlbcKpw75y', 'DUlMA8ON', 'fF7CrCtc', 'w7NHw7/Cols=', 'woDDlR3Di1I=', 'w7PDisKVAw==', 'XMO9eMOwIA==', 'F0FrM0TDlnYe', 'wqJcRsOvwoc=', 'w7zDhFDDncKB', 'HFHDpsO1w4XCvcKgwrXDqkQ=', 'bMOZw5IDEw==', 'wocEwrTCi3s=', 'wrdNwrzCh3U=', 'w57DksKbNGE=', 'fsKcfsK4fQ==', 'w6HDk8KpKmQ=', 'wqjCmsKHcn0=', 'wrLCnMKyw5jDqcOt', 'wonDr8KZ', 'am3Ctz5Tw6jCgcOD', 'wqLDoMKUFEk=', 'JxfDlsOlw77CvivCjMKUFQ==', 'wrokwovCnmQ=', 'YcOdw5s+JQ==', 'wqgTwpjChHE=', 'JGnDgMOBwpo=', 'Ky/Dj8KUBsOqwqnClTrDtA==', 'ZcO9w4g8aw==', 'woJfR3HDl0UIOGU=', 'wps7w4DColJDw6zCg8ORAg==', 'wo7Co8OowrLCoMOOw5oiBQ==', 'Y3XDpMKrcg==', 'w4vDuijDgg==', 'BEhkd8K/', 'wo56UXHDuA==', 'w5fDkcKZMWc=', 'NlLCrMOYFsOKwo0=', 'wpjDvMKsWEA=', 'GGMaw57DiMOaD3PCmcKs', 'w73DtGjChVPClg==', 'wq7Cm2bDtlQ=', 'LzPDjsKzAcOxwrzCsjrDrg==', 'w4bDjcKOBBEgEMOGFcKA', 'wrnDv8KfMEszw4U=', 'JhjDu8Ohw5k=', 'wrQcw5I=', 'LS7Dn8KABsOqwqk=', 'wpzCscKYw77Drw==', 'SlLCryF2', 'woXDocK4X2vChw==', 'eX0zXMOcHMOgDgMY', 'w7HDkMKKIHU=', 'GB7DgMOCw7zCvg==', 'wq7DqMKuaGHCiRzCkcOow7M=', 'fmvCsQFCw7DDlMOPdcKS', 'MxfDlsOxw7rCtCLCmsKTBA==', 'FjzDiMO2w4k=', 'w6jDtTTDtMKg', 'wrzDksKMNG4=', 'c8O7w74=', 'dT9Kw4fDuQ==', 'w5nChcKaE8K1', 'JXnDt8Oqwq4JZDrCtSU=', 'w73CscKXF8KE', 'TMOHdwrDmA==', 'SsO2w6AeQQ==', 'RMK5ZcKHVQ==', 'wrPDrsKDS8KF', 'w6fCtcKDw6UA', 'IcK3wrZ+HQ==', 'WsOKYQ==', 'PXJgUsKCBA==', 'wphsworCnsKT', 'ERZ1w6QbJjrDuMOrwoE=', 'wrrDqMKueGnChw7Cn8Ogw7I=', 'Z8Kew5PCrhI=', 'O1YMw7PDjA==', 'wpLDksKTf8KS', 'wqhHworCsEs=', 'RcKTw4bChjo=', 'wobCmznDlsKP', 'wp3CpSXDnMKU', 'OUl8AWg=', 'w6Vtw7fCvGMJw6rCmx4D', 'XwpFw4XDqQ==', 'RsKXw4jCiA7Cjg==', 'b3bDncKyYMKZ', 'AGzDusO3wrE=', 'wojCpcOowoLCoA==', 'TcOhZcO3eVkKw7M=', 'woQ1Hg==', 'wrk6w4/Cslg=', 'wp3DpsK1w4V8wr/CqjQ=', 'wqLDlA3DnG0=', 'w7w0wrXCg8Kk', 'wrFxSMOvwoM=', 'I1RzDFE=', 'FR7Dhw==', 'wqdWT8OfwqY=', 'ZMOKdQTDgV/DmcKHR8OW', 'w7Mvw6o=', 'wqBHYU3Dlw==', 'wr47CcOre3I=', 'RsO/w6ESXcKgwoIfOcKj', 'HWRKAcOx', 'w5LDl1g=', 'wrR4wrzCrMK5dCXDkDPDqA==', 'X8O7Y8O3On8=', 'MxfDlsOvw7DCti/Cr8KiHw==', 'KwzDr8K6Mg==', 'DXNgE8OZ', 'woPDpsK7W20=', 'w6/CocKH', 'd8OLdjnDl1PDiMKAdsOS', 'R8O7w746HMKxwqIZOMKj', 'w7XCtsKQw6I8b8KxTChB', 'wp4hw4DCoXs=', 'w5bDp03DqcK9', 'w5PDo2rDhcKG', 'w6DDtEXDqsKsR8KgGMOB', 'IwLDs8KAEA==', 'BXPCqcOJKg==', 'w6o5w650TRDDosO1a8OQ', 'wqzDnMKNfUw=', 'wpnClcKkw6/Dq8OqPsKp', 'wr7DucKuw65r', 'MVTCsA==', 'ZMOKfQbDnA==', 'U8KjesKBfsKsw69yWMOT', 'w6XCosKhw4El', 'VghUw4TDuA==', 'ZcOKZjvDm07Di8K0asOQ', 'wo7CmMKYckA5G8KmOgo=', 'w6fDokDDj8KmR8KiEMOd', 'wq9TVFXDsQ==', 'wpjDicKEw7NXwoXCjA==', 'csOmw7MXbA==', 'wqdswpHCnsKd', 'wo3DrsKjZ2w=', 'N27Dk8OMw5U=', 'MXnDt8O9wrINWBrCoCo=', 'L3h+AcOoICTCsMO/wok=', 'w6HDvjLDoMKdACJ+', 'wqMaP8OYdw==', 'wp0IDsOwZw==', 'wqbClMKEw6HDqQ==', 'w47DkMK7AVUUBw==', 'VMO7RsOTNQ==', 'wq7CpknDjX4=', 'ZRFpw7LDoA==', 'wpsMw5PCpV5+w6U=', 'KWPCisOjOg==', 'G2RxbMKpOcKfFFEX', 'AGBHE0g=', 'wpXDj8KHw4pI', 'G2J3ScKbFMOwG0MB', 'S8KBw7rCsCQ=', 'wrEwwro=', 'CSJgw5wZ', 'wp7Cm27Drw==', 'bcK3w6vCtQQ=', 'wqTDnWVdE8Obw5k=', 'XMOefyPDlw==', 'wrzDrsOFwpvDksKc', 'wqkHwoDCp2k=', 'wpDCmcK7w4DDnw==', 'OC7DiMKk', 'woTDksKsW2vCug7CvMOpw7c=', 'VnbDhw==', 'RxFAw6/DuQ==', 'IsKxwpdZPlt4wr3Ct8KL', 'wqLDiMKcFXM=', 'TsKweMKaf8Kxw65lVsOH', 'wqdnVXDDkA==', 'wojDhlFwPw==', 'wp3DtcOawqfDj8KeD8OlYQ==', 'wrR4wrzCsMKqYyHDhyjDnw==', 'bMO7w6QQCcKp', 'w7XDr8KnAFvDiXo=', 'wozCvsOqwpPCvMOfw5EbJA==', 'wpTCrcO3woDCtg==', 'c8KmdsKHZcKqw6U=', 'bFvCrCFa', 'wppWwonCuGs=', 'wpXCvGvDvUE=', 'w4kww7tLSQnDmMOSeMOE', 'F0FrMFbDn3EVwqXCgQ==', 'MXnDt8O/wqoFbSfCpi8=', 'CmIKw5TDiMOTD1A=', 'w4XDrUHDtQ==', 'G2RxcsKOAcK8PVEC', 'wofDvMKsw5BDwqLCrDTDt8KI', 'wrxbRw==', 'P0FNBnI=', 'd8KIw7bCpjI=', 'w4bDsUDCiGM=', 'M1nDiMOgw6Q=', 'w6HDvjLDs8KCCjFkwpPCvw==', 'wqjDqcK+bWTChQ/CtcO0w50=', 'wpbDiTnDhUQ=', 'BMKgwoxn', 'w5Mmw4diXAnDmMOkX8OB', 'eMOmZ8O7', 'w7PCosKxMcKwwrU=', 'EGxEFMOS', 'wqjCpMOtwqXCug==', 'LHHDs8Ogw5o=', 'w5bDvX7Cp1zCnMOvVsOXwrk=', 'wrUYw5k=', 'aMOsaMOHMA==', 'woFaRcOTwqbCvFDCrMKLSw==', 'GCrDjMK1FsOqwq3ClzzDsQ==', 'w4LDtsObOBciwpfCoMKpwqk=', 'XljCii10', 'wpt6VmzDrg==', 'VGrDgMKy', 'w6tLw4DCgwU8wrrCjExZ', 'fcOsdcOLBg==', 'wrtPwpDCq1U=', 'wovCvsKjw53Dvg==', 'NMOpwrAmF3Zh', 'wrnDhcKXw7R7', 'wrlSwrvCucKt', 'w5/DsWHCnWU=', 'w43DoFzDpsKE', 'wr8Pw5fCvm0=', 'w7LDtCHDgcKdCgtlwobCuQ==', 'w7zCucKROsKT', 'JsKhwpFhOFV8', 'wo3DlsKuTcKxRi3DmcKtw48=', 'RcOyw4sQSA==', 'wq9mwoLClVU=', 'asOoX8OPJw==', 'MVLDjMOIwo0=', 'K1LDlMO8w4k=', 'wpPDhUdIGw==', 'Q8OKXC/DvQ==', 'w5knw6psXAfDsMOyaMOH', 'EVTCsMO1OsOwwqcOwqQJ', 'wrvDqMK1VWY=', 'wpBKUMOOwrzCpVA=', 'F0vCicO7IA==', 'wqZuwoDCrlU=', 'wpp3Y0nDrWQ+', 'wrzDkXnDiGE8WsOIw7vCrA==', 'woBLUMOTwrvCrw==', 'WApww5/Drw==', 'aMOdw4YhMw==', 'YGfDjMKlcMKfOsOrbxo=', 'FlZ+CEDDqXcawqPCiQ==', 'Q8Oww7cKSWspe8KTwoY=', 'woBaVsOswrzCrULCn8KmTQ==', 'wq/CmMKL', 'wrzChRPDucKJ', 'SMO8w60/', 'wrLCpcOuwp7Chg==', 'w5XDqmvCkw==', 'am3CtyVTw7TCusOHbMKS', 'A0FrNVfDlXM=', 'ezlCw7bDsw==', 'wr3DhsKaw6Fn', 'E2wXw4jDgg==', 'EnLDjMOgw7g=', 'JmpUNUg=', 'w4gww6hkWxbDmMOvXcOD', 'ccOKZivDk0DDmcKsZcOA', 'w7J6w6rChHYmw7DCkg==', 'wrAAw5HCvkM=', 'wpfCnsOLwr3CkQ==', 'w4khw71kRgU=', 'wqXDrMOtwpTDmA==', 'w5Nzw7HCvWU=', 'YWnCtw1cw6fCjQ==', 'wo7CnMKxw4DDh8OvKMK+w7pi', 'DUbCkMOBDw==', 'U1HDosKWaA==', 'wrXCmmbDrFrDt8K1', 'Q8Oww7cNQGsgccKP', 'WsK/UsKeew==', 'w6jDucKJFWTDiWTDqg==', 'w4sKwpfCrsKE', 'w685woPCvMKz', 'w4XDt23Cg1zCmMOUSsOtwrM=', 'esKlTMK0VA==', 'woTDjMKbw5Zj', 'wq1GwoHCiw==', 'wqZfU37DhQ==', 'wrTDpcKZLUQn', 'w4HDt2bCnVfCksOy', 'wqrCuW3Ds1Y=', 'c8Ouw6YeCQ==', 'wqXDrMK9E1vClQXCs8Kmw5k=', 'U8OcQh/DnVPDhQ==', 'wqjDoMK0BmQ=', 'VcOnw4YrZw==', 'wp9bwozCjsKT', 'w6HDvjLDr8KfGw==', 'AcKhwpBmAg==', 'w67DucKSCVbDknnDqg==', 'w57DjW7CgUI=', 'RmrDm8KnZsKSHcOHbwQ=', 'w7ghworCisKS', 'wpnCgMOowqzCgw==', 'PiJKw70F', 'Xm3Ctw==', 'wpzCgGHDvHXDt8K1wpM=', 'woXDsGd5Dg==', 'KlBpH3Y=', 'wrHDgMO6SMKoRDU=', 'NnR1Fg==', 'wobDi2M=', 'wqo6wqDCmA==', 'w6s2wqXClMKu', 'w5RUw67ChV0=', 'UDRGw7zDmg==', 'DRxOw6w5', 'wozCvi7Dt8Kk', 'a8O3w7MefA==', 'CUbDs8OUw6LCt8KbwrLDq1I=', 'wqHDinNjNg==', 'wp3Dv8OEwofDkcKe', 'wqLCp1XDqVs=', 'w4/Drz/DvcOBMg==', 'w6Vtw7fCvGMJw63ClgU=', 'w7lWw7/ChUM=', 'S8OqZcOWPWwBw7HCi8Kg', 'wrjCsCzDtsKQJMOJwpElwpc=', 'JG5kVA==', 'w6DDr0jDq8KsV8KKHMOWQw==', 'w7nCpcK1N8KuwqR4Pw==', 'wqA9OcOtXQ==', 'cMK5fcKSb8Ku', 'JMKwwodGPVF9wrTClcKu', 'wr5WQcO0wqQ=', 'wqZDV3I=', 'WTBPw6fDuw==', 'w7DDjUnDjsK4', 'wow7GsOs', 'PyDDjsOlw7c=', 'w7/DksK/DnM=', 'SWzCli98', 'PTtMw4o6', 'woNTQ8OD', 'DCfDhMK/Bg==', 'wpfDqjjDr3MsSMKGw54=', 'TmTCmilf', 'SMO6w7R6c2s8a8KEw5U=', 'w4nDvyM=', 'wol1wq3CmMK2', 'wp58S1zDow==', 'w6Vzw7/Cq0Qlw7DCmRU=', 'Fm1jIsOr', 'w6jDs8KWBlvDhVbDoFN9', 'w7l+w6rCt3kpw7w=', 'w58YG8KMw7E=', 'JirDjMO9J8O8wrfCknXDjg==', 'SMK8fMKYfsKkw79y', 'MXnDt8O+wqcHaQE=', 'w6XCvMKLCsK/', 'w5lYw4bCpnk=', 'wqPDmnZe'];
(function (_0x19133a, _0x33bc74) {
    var _0x1508a8 = function (_0x5227d5) {
        while (--_0x5227d5) {
            _0x19133a['push'](_0x19133a['shift']());
        }
    };
    _0x1508a8(++_0x33bc74);
}(_0x33bc, 0xcd));
var _0x1508 = function (_0x19133a, _0x33bc74) {
    _0x19133a = _0x19133a - 0x0;
    var _0x1508a8 = _0x33bc[_0x19133a];
    if (_0x1508['fHYkvM'] === undefined) {
        (function () {
            var _0x2d8f8a = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x4ff6bd = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x2d8f8a['atob'] || (_0x2d8f8a['atob'] = function (_0x3ac350) {
                var _0x5615f8 = String(_0x3ac350)['replace'](/=+$/, '');
                var _0x5b28c4 = '';
                for (var _0x5bbae2 = 0x0, _0x3cb8ba, _0x308940, _0x5e2a27 = 0x0; _0x308940 = _0x5615f8['charAt'](_0x5e2a27++); ~_0x308940 && (_0x3cb8ba = _0x5bbae2 % 0x4 ? _0x3cb8ba * 0x40 + _0x308940 : _0x308940, _0x5bbae2++ % 0x4) ? _0x5b28c4 += String['fromCharCode'](0xff & _0x3cb8ba >> (-0x2 * _0x5bbae2 & 0x6)) : 0x0) {
                    _0x308940 = _0x4ff6bd['indexOf'](_0x308940);
                }
                return _0x5b28c4;
            });
        }());
        var _0x20d35f = function (_0x13813e, _0x338fdf) {
            var _0x43e6f3 = [],
                _0x41c149 = 0x0,
                _0xf6b4d1, _0x556c1e = '',
                _0x275a85 = '';
            _0x13813e = atob(_0x13813e);
            for (var _0x2aaadb = 0x0, _0x22f916 = _0x13813e['length']; _0x2aaadb < _0x22f916; _0x2aaadb++) {
                _0x275a85 += '%' + ('00' + _0x13813e['charCodeAt'](_0x2aaadb)['toString'](0x10))['slice'](-0x2);
            }
            _0x13813e = decodeURIComponent(_0x275a85);
            var _0x5b8c74;
            for (_0x5b8c74 = 0x0; _0x5b8c74 < 0x100; _0x5b8c74++) {
                _0x43e6f3[_0x5b8c74] = _0x5b8c74;
            }
            for (_0x5b8c74 = 0x0; _0x5b8c74 < 0x100; _0x5b8c74++) {
                _0x41c149 = (_0x41c149 + _0x43e6f3[_0x5b8c74] + _0x338fdf['charCodeAt'](_0x5b8c74 % _0x338fdf['length'])) % 0x100;
                _0xf6b4d1 = _0x43e6f3[_0x5b8c74];
                _0x43e6f3[_0x5b8c74] = _0x43e6f3[_0x41c149];
                _0x43e6f3[_0x41c149] = _0xf6b4d1;
            }
            _0x5b8c74 = 0x0;
            _0x41c149 = 0x0;
            for (var _0x6b0e75 = 0x0; _0x6b0e75 < _0x13813e['length']; _0x6b0e75++) {
                _0x5b8c74 = (_0x5b8c74 + 0x1) % 0x100;
                _0x41c149 = (_0x41c149 + _0x43e6f3[_0x5b8c74]) % 0x100;
                _0xf6b4d1 = _0x43e6f3[_0x5b8c74];
                _0x43e6f3[_0x5b8c74] = _0x43e6f3[_0x41c149];
                _0x43e6f3[_0x41c149] = _0xf6b4d1;
                _0x556c1e += String['fromCharCode'](_0x13813e['charCodeAt'](_0x6b0e75) ^ _0x43e6f3[(_0x43e6f3[_0x5b8c74] + _0x43e6f3[_0x41c149]) % 0x100]);
            }
            return _0x556c1e;
        };
        _0x1508['AauXfQ'] = _0x20d35f;
        _0x1508['BvLlLX'] = {};
        _0x1508['fHYkvM'] = !![];
    }
    var _0x5227d5 = _0x1508['BvLlLX'][_0x19133a];
    if (_0x5227d5 === undefined) {
        if (_0x1508['PsoLky'] === undefined) {
            _0x1508['PsoLky'] = !![];
        }
        _0x1508a8 = _0x1508['AauXfQ'](_0x1508a8, _0x33bc74);
        _0x1508['BvLlLX'][_0x19133a] = _0x1508a8;
    } else {
        _0x1508a8 = _0x5227d5;
    }
    return _0x1508a8;
};
const global_print = Global[_0x1508('0x274', 'EZdY')],
    global_print_chat = Global[_0x1508('0x7b', 'o1I!')],
    global_print_color = Global[_0x1508('0x26b', 'jzFs')],
    global_register_callback = Global[_0x1508('0x223', 'hpcj') + 'llback'],
    global_execute_command = Global[_0x1508('0x1ab', 'Avs$') + _0x1508('0xa7', 'DWKn')],
    global_frame_stage = Global[_0x1508('0xbc', '0392')],
    global_tickcount = Global[_0x1508('0xcf', '29x]')],
    global_tickrate = Global[_0x1508('0x2cb', 'CO2^')],
    global_tick_interval = Global[_0x1508('0xb', 'PDQh') + 'al'],
    global_curtime = Global[_0x1508('0x99', 'kiAm')],
    global_realtime = Global[_0x1508('0x2bf', '0392')],
    global_frametime = Global[_0x1508('0x12a', 'ILfm')],
    global_latency = Global[_0x1508('0x214', 'kiAm')],
    global_get_view_angles = Global[_0x1508('0xe8', '4Cgr') + _0x1508('0xf9', 'Y1G^')],
    global_set_view_angles = Global[_0x1508('0x136', 'Y1G^') + _0x1508('0x2bb', 'kiAm')],
    global_get_map_name = Global[_0x1508('0x125', '8%Ua')],
    global_is_key_pressed = Global[_0x1508('0x2b5', 'a%8F') + 'ed'],
    global_get_screen_size = Global[_0x1508('0x257', '29x]') + _0x1508('0x27c', 'CO2^')],
    global_get_cursor_position = Global['GetCursorP' + _0x1508('0x33', '2Cqy')],
    global_play_sound = Global[_0x1508('0x211', 'kiAm')],
    global_play_microphone = Global[_0x1508('0x1c4', 'EZdY') + _0x1508('0x238', 'd!XZ')],
    global_stop_microphone = Global[_0x1508('0x28d', 'Avs$') + _0x1508('0x65', 'wqdq')],
    global_get_username = Global[_0x1508('0x178', 'jEcV') + 'e'],
    global_set_clan_tag = Global[_0x1508('0x259', 'HFmO')],
    globals_tickcount = Globals[_0x1508('0x4c', 'Y)wX')],
    globals_tickrate = Globals[_0x1508('0x217', 'kj4L')],
    globals_tick_interval = Globals[_0x1508('0x2c1', 'ILfm') + 'al'],
    globals_curtime = Globals['Curtime'],
    globals_realtime = Globals[_0x1508('0x12', '(%g%')],
    globals_frametime = Globals[_0x1508('0x0', '2Cqy')],
    sound_play = Sound[_0x1508('0x209', '(%g%')],
    sound_play_microphone = Sound[_0x1508('0x277', 'kj4L') + _0x1508('0x1ea', 'hpcj')],
    sound_stop_microphone = Sound[_0x1508('0x172', 'XXVg') + _0x1508('0xad', 'Avs$')],
    cheat_get_username = Cheat[_0x1508('0xa3', 'DWKn') + 'e'],
    cheat_register_callback = cheat_register_callback = new Proxy(Cheat['RegisterCa' + _0x1508('0x292', '6FLh')], {
        'apply': function (_0x4da8b9, _0x4da8b9, _0x54761f) {
            var _0x58e6e6 = {};
            _0x58e6e6[_0x1508('0xf4', '%Qq!')] = _0x1508('0x128', 'ILfm');
            _0x58e6e6[_0x1508('0x48', 'kiAm')] = _0x1508('0x1b3', '!Sc1');
            _0x58e6e6[_0x1508('0xc1', 'kj4L')] = _0x1508('0x126', 'CO2^') + 'e';
            _0x58e6e6[_0x1508('0x2ae', 'b5Nj')] = _0x1508('0x1a0', 'pNak');
            _0x58e6e6[_0x1508('0x22', 'kiAm')] = _0x1508('0x2a5', 'C4jT');
            _0x58e6e6[_0x1508('0x234', '7BTC')] = _0x1508('0x1e', 'hpcj') + _0x1508('0x1d2', 'b5Nj');
            var _0x394548 = _0x58e6e6;
            switch (_0x54761f[0x0]) {
            case _0x394548[_0x1508('0x290', 'd!XZ')]:
                Cheat[_0x1508('0x15f', 'kj4L') + _0x1508('0x74', '0i)m')](_0x394548[_0x1508('0x24a', 'HFmO')], _0x54761f[0x1]);
                break;
            case _0x394548[_0x1508('0x1ed', 'Y)wX')]:
                Cheat[_0x1508('0x185', '(%g%') + _0x1508('0xda', '!Sc1')](_0x394548[_0x1508('0xbe', 'hpcj')], _0x54761f[0x1]);
                break;
            case _0x394548['EUOKa']:
                Cheat['RegisterCa' + 'llback'](_0x394548[_0x1508('0x242', '^[)&')], _0x54761f[0x1]);
                break;
            default:
                Cheat[_0x1508('0x2d', '0392') + _0x1508('0x1fe', 'kj4L')](_0x54761f[0x0], _0x54761f[0x1]);
                break;
            }
        }
    }),
    cheat_execute_command = Cheat[_0x1508('0x58', '^[)&') + _0x1508('0x18', 'd!XZ')],
    cheat_frame_stage = Cheat[_0x1508('0x1ac', 'EDBf')],
    cheat_print = Cheat[_0x1508('0xb8', 'BX8Y')],
    cheat_print_chat = Cheat[_0x1508('0x1f6', 'kiAm')],
    cheat_print_color = Cheat[_0x1508('0x106', 'kiAm')],
    local_latency = Local[_0x1508('0x1c3', 'DWKn')],
    local_get_view_angles = Local[_0x1508('0x233', '0392') + _0x1508('0xf9', 'Y1G^')],
    local_set_view_angles = Local[_0x1508('0x1ae', '(%g%') + 'les'],
    local_set_clan_tag = Local['SetClanTag'],
    local_get_real_yaw = Local[_0x1508('0xea', '^[)&')],
    local_get_fake_yaw = Local[_0x1508('0x1bc', 'Y1G^')],
    local_get_spread = Local[_0x1508('0x3', 'XXVg')],
    local_get_inaccuracy = Local['GetInaccur' + _0x1508('0x269', '7BTC')],
    world_get_map_name = World[_0x1508('0x1b4', 'DWKn')],
    world_get_server_string = World[_0x1508('0x11d', 'DE&d') + _0x1508('0xdb', 'd!XZ')],
    input_get_cursor_position = Input[_0x1508('0x249', 'XXVg') + _0x1508('0x1c7', 'd!XZ')],
    input_is_key_pressed = Input['IsKeyPress' + 'ed'],
    render_string = Render[_0x1508('0x16', 'Avs$')],
    render_text_size = Render[_0x1508('0x1ca', 'd]AM')],
    render_line = Render[_0x1508('0x271', '2Cqy')],
    render_rect = Render[_0x1508('0x159', 'Xzkf')],
    render_filled_rect = Render['FilledRect'],
    render_gradient_rect = Render['GradientRe' + 'ct'],
    render_circle = Render[_0x1508('0x17e', 'U]&B')],
    render_filled_circle = Render[_0x1508('0x1fb', 'ILfm') + 'le'],
    render_polygon = Render['Polygon'],
    render_world_to_screen = Render['WorldToScr' + _0x1508('0x25', 'C4jT')],
    render_add_font = Render[_0x1508('0x25c', 'IUyy')],
    render_find_font = Render[_0x1508('0x1e4', 'd!XZ')],
    render_string_custom = Render['StringCust' + 'om'],
    render_textured_rect = Render[_0x1508('0x140', '6FLh') + 'ct'],
    render_add_texture = Render[_0x1508('0x124', 'Y1G^')],
    render_text_size_custom = Render[_0x1508('0x35', '&An9') + 'stom'],
    render_get_screen_size = Render[_0x1508('0x6f', '0392') + _0x1508('0x117', 'pNak')],
    ui_get_value = UI[_0x1508('0x1bd', 'kiAm')],
    ui_set_value = UI[_0x1508('0x31', 'XXVg')],
    ui_add_checkbox = UI[_0x1508('0x4f', '8%Ua') + 'x'],
    ui_add_slider_int = UI[_0x1508('0x1ff', 'X4Z&') + 'nt'],
    ui_add_slider_float = UI[_0x1508('0x29e', 'wqdq') + _0x1508('0x1fa', '!KTn')],
    ui_add_hotkey = UI[_0x1508('0x138', 'ILfm')],
    ui_add_label = UI[_0x1508('0x16f', 'ifj6')],
    ui_add_dropdown = UI[_0x1508('0x87', 'XXVg') + 'n'],
    ui_add_multi_dropdown = UI[_0x1508('0x34', 'PDQh') + 'opdown'],
    ui_add_color_picker = UI[_0x1508('0x72', '0392') + _0x1508('0x170', 'ILfm')],
    ui_add_textbox = UI['AddTextbox'],
    ui_set_enabled = UI[_0x1508('0x23d', 'd]AM')],
    ui_get_string = UI[_0x1508('0x2ac', 'CO2^')],
    ui_get_color = UI[_0x1508('0x26e', 'b5Nj')],
    ui_set_color = UI['SetColor'],
    ui_is_hotkey_active = UI[_0x1508('0x32', 'wqdq') + _0x1508('0x17d', 'BX8Y')],
    ui_toggle_hotkey = UI[_0x1508('0x195', 'jEcV') + 'ey'],
    ui_is_menu_open = UI[_0x1508('0x2be', '!Sc1')],
    convar_get_int = Convar[_0x1508('0x29b', '0392')],
    convar_set_int = Convar[_0x1508('0x2cd', ']G5!')],
    convar_get_float = Convar['GetFloat'],
    convar_set_float = Convar[_0x1508('0x262', 't4JZ')],
    convar_get_string = Convar['GetString'],
    convar_set_string = Convar[_0x1508('0x5b', '29x]')],
    event_get_int = Event[_0x1508('0x108', '7BTC')],
    event_get_float = Event[_0x1508('0x4', '4Cgr')],
    event_get_string = Event[_0x1508('0x296', 'IUyy')],
    entity_get_entities = Entity[_0x1508('0x236', 'b&&d') + 's'],
    entity_get_entities_by_class_i_d = Entity['GetEntitie' + _0x1508('0x198', 'IUyy')],
    entity_get_players = Entity[_0x1508('0x8e', ']G5!')],
    entity_get_enemies = Entity[_0x1508('0x66', 'CO2^')],
    entity_get_teammates = Entity[_0x1508('0x10', '0392') + 'es'],
    entity_get_local_player = Entity[_0x1508('0x15d', 'X4Z&') + _0x1508('0x256', 'jzFs')],
    entity_get_game_rules_proxy = Entity[_0x1508('0x16e', '2Cqy') + _0x1508('0x1d7', 'Y1G^')],
    entity_get_entity_from_user_i_d = Entity[_0x1508('0x2e4', 'Y1G^') + _0x1508('0x162', 'jzFs')],
    entity_is_teammate = Entity[_0x1508('0x62', '6FLh')],
    entity_is_enemy = Entity[_0x1508('0x8a', '&An9')],
    entity_is_bot = Entity[_0x1508('0x2c', 'Y1G^')],
    entity_is_local_player = Entity['IsLocalPla' + _0x1508('0x123', 'CO2^')],
    entity_is_valid = Entity[_0x1508('0x165', 'd]AM')],
    entity_is_alive = Entity[_0x1508('0xac', 'd]AM')],
    entity_is_dormant = Entity['IsDormant'],
    entity_get_class_i_d = Entity[_0x1508('0x2aa', 'b&&d')],
    entity_get_class_name = Entity[_0x1508('0x182', '!Sc1') + 'me'],
    entity_get_name = Entity[_0x1508('0x278', 'jEcV')],
    entity_get_weapon = Entity[_0x1508('0x1c8', '%Qq!')],
    entity_get_weapons = Entity[_0x1508('0x21c', 'Y1G^')],
    entity_get_render_origin = Entity[_0x1508('0x64', 'Q([B') + _0x1508('0x44', 'Avs$')],
    entity_get_prop = Entity[_0x1508('0xe1', 'Xzkf')],
    entity_set_prop = Entity[_0x1508('0x1b5', 'EDBf')],
    entity_get_hitbox_position = Entity[_0x1508('0xaf', '7BTC') + 'osition'],
    entity_get_eye_position = Entity['GetEyePosi' + _0x1508('0x2f', 'DWKn')],
    trace_line = Trace[_0x1508('0x1b1', '%Qq!')],
    trace_bullet = Trace['Bullet'],
    usercmd_set_movement = UserCMD[_0x1508('0x22d', 'b5Nj') + 't'],
    usercmd_get_movement = UserCMD[_0x1508('0x22e', 'Y1G^') + 't'],
    usercmd_set_angles = UserCMD[_0x1508('0x75', 'BX8Y')],
    usercmd_force_jump = UserCMD[_0x1508('0x61', 'IUyy')],
    usercmd_force_crouch = UserCMD[_0x1508('0x2b', 'C4jT') + 'h'],
    antiaim_get_override = AntiAim[_0x1508('0x163', 'DE&d') + 'e'],
    antiaim_set_override = AntiAim[_0x1508('0x2dd', 'IUyy') + 'e'],
    antiaim_set_real_offset = AntiAim[_0x1508('0x2cc', 'ifj6') + _0x1508('0x5a', 'X4Z&')],
    antiaim_set_fake_offset = AntiAim['SetFakeOff' + _0x1508('0xee', '8%Ua')],
    antiaim_set_l_b_y_offset = AntiAim[_0x1508('0x24b', 'DWKn') + 'et'],
    exploit_get_charge = Exploit[_0x1508('0x2d7', 'Xzkf')],
    exploit_recharge = Exploit[_0x1508('0x1dd', 'd]AM')],
    exploit_disable_recharge = Exploit[_0x1508('0x235', 'o1I!') + _0x1508('0x167', 'HFmO')],
    exploit_enable_recharge = Exploit[_0x1508('0x22f', 'kj4L') + 'arge'],
    ragebot_override_minimum_damage = Ragebot[_0x1508('0x273', 'kiAm') + _0x1508('0x2ce', '!Sc1') + 'e'],
    ragebot_override_hitchance = Ragebot[_0x1508('0x15', 'Y1G^') + _0x1508('0xd7', 'C4jT')],
    ragebot_override_accuracy_boost = Ragebot[_0x1508('0x2ba', 'DE&d') + _0x1508('0x1df', 'Avs$') + 't'],
    ragebot_override_multipoint_scale = Ragebot[_0x1508('0x133', 'kj4L') + 'ltipointSc' + _0x1508('0x114', '^[)&')],
    ragebot_force_safety = Ragebot['ForceSafet' + 'y'];
var switch_tick = Globals[_0x1508('0x149', 'b&&d')]();
var screen_size = Render['GetScreenS' + _0x1508('0x10d', 'a%8F')]();
var lagsync_text = _0x1508('0x13a', 'XXVg');
var r = 0x6c,
    g = 0xc3,
    b = 0x0;
var shots = 0x0;
UI[_0x1508('0xcd', 'Xzkf') + 'n'](_0x1508('0x2e0', '2Cqy') + _0x1508('0xa2', 'o1I!'), [_0x1508('0xdd', ']G5!') + _0x1508('0xb0', '^[)&'), _0x1508('0x109', 'Avs$'), _0x1508('0x1e7', 'IUyy'), _0x1508('0x9', '2Cqy'), _0x1508('0x20d', '%Qq!') + 'V2']);
UI[_0x1508('0x179', '4Cgr') + 'nt'](_0x1508('0x2d9', 'pNak') + 'V', 0x0, 0x23);
LPx = [screen_size[0x0] / 0x2 - 0x32, screen_size[0x1] / 0x2 + 0xa];
LPy = [screen_size[0x0] / 0x2 - 0x32, screen_size[0x1] / 0x2 - 0xa];
LPz = [screen_size[0x0] / 0x2 - 0x46, screen_size[0x1] / 0x2];
RPx = [screen_size[0x0] / 0x2 + 0x32, screen_size[0x1] / 0x2 + 0xa];
RPy = [screen_size[0x0] / 0x2 + 0x32, screen_size[0x1] / 0x2 - 0xa];
RPz = [screen_size[0x0] / 0x2 + 0x46, screen_size[0x1] / 0x2];
LPxx = [screen_size[0x0] / 0x2 - 0x31, screen_size[0x1] / 0x2 + 0xc];
LPyy = [screen_size[0x0] / 0x2 - 0x31, screen_size[0x1] / 0x2 - 0xc];
LPzz = [screen_size[0x0] / 0x2 - 0x49, screen_size[0x1] / 0x2];
RPxx = [screen_size[0x0] / 0x2 + 0x31, screen_size[0x1] / 0x2 + 0xc];
RPyy = [screen_size[0x0] / 0x2 + 0x31, screen_size[0x1] / 0x2 - 0xc];
RPzz = [screen_size[0x0] / 0x2 + 0x49, screen_size[0x1] / 0x2];
BPx = [screen_size[0x0] / 0x2 + 0xa, screen_size[0x1] / 0x2 + 0x32];
BPy = [screen_size[0x0] / 0x2 - 0xa, screen_size[0x1] / 0x2 + 0x32];
BPz = [screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 + 0x46];
BPxx = [screen_size[0x0] / 0x2 + 0xc, screen_size[0x1] / 0x2 + 0x31];
BPyy = [screen_size[0x0] / 0x2 - 0xc, screen_size[0x1] / 0x2 + 0x31];
BPzz = [screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 + 0x49];
multiplierOptions = [0x0, 0x1];

function dolagsync() {
    var _0x381fc1 = {};
    _0x381fc1[_0x1508('0x210', '29x]')] = function (_0x26d491, _0x11e02e) {
        return _0x26d491 > _0x11e02e;
    };
    _0x381fc1[_0x1508('0x2e2', 't4JZ')] = function (_0x38dc99, _0x47d26e) {
        return _0x38dc99 + _0x47d26e;
    };
    _0x381fc1[_0x1508('0x205', '^[)&')] = function (_0x2c3cfe, _0x3d16b2) {
        return _0x2c3cfe + _0x3d16b2;
    };
    _0x381fc1[_0x1508('0x1c1', 'jzFs')] = function (_0x153831, _0x14fbca, _0x53025c) {
        return _0x153831(_0x14fbca, _0x53025c);
    };
    _0x381fc1[_0x1508('0x298', '(%g%')] = function (_0x288dfd, _0x1c9295, _0x2c86e8) {
        return _0x288dfd(_0x1c9295, _0x2c86e8);
    };
    _0x381fc1[_0x1508('0x1a2', '4Cgr')] = _0x1508('0x2cf', 'C4jT');
    _0x381fc1[_0x1508('0x2b7', '7BTC')] = function (_0x1d95c6, _0x74b4ed) {
        return _0x1d95c6 == _0x74b4ed;
    };
    _0x381fc1[_0x1508('0xeb', '^[)&')] = _0x1508('0x86', 'EDBf');
    _0x381fc1[_0x1508('0x14a', 'C4jT')] = _0x1508('0xfc', 'wqdq');
    _0x381fc1[_0x1508('0x22c', 'ifj6')] = _0x1508('0x95', 'EDBf') + 'ms';
    _0x381fc1['sPIEF'] = _0x1508('0x24c', 'C4jT') + _0x1508('0x28f', 'X4Z&');
    _0x381fc1[_0x1508('0x1c9', 'kj4L')] = function (_0x18e357, _0x4d6e09) {
        return _0x18e357 === _0x4d6e09;
    };
    _0x381fc1[_0x1508('0x294', 'ILfm')] = _0x1508('0x107', 'Y)wX');
    _0x381fc1[_0x1508('0x228', 'HFmO')] = _0x1508('0x2d1', 'ifj6');
    _0x381fc1[_0x1508('0x194', 'b&&d')] = function (_0x4f70aa, _0xd4e58f) {
        return _0x4f70aa >= _0xd4e58f;
    };
    _0x381fc1[_0x1508('0x38', 'Y)wX')] = function (_0x43b5c1, _0x42331a) {
        return _0x43b5c1 > _0x42331a;
    };
    _0x381fc1['uxuru'] = function (_0x5e754e, _0x215494) {
        return _0x5e754e + _0x215494;
    };
    _0x381fc1[_0x1508('0x130', 'XXVg')] = function (_0x31f432, _0x39fc8b) {
        return _0x31f432 + _0x39fc8b;
    };
    _0x381fc1[_0x1508('0x12c', 'C4jT')] = 'JyWGk';
    _0x381fc1[_0x1508('0xab', 'IUyy')] = 'Anti-Aim';
    _0x381fc1['BZtCH'] = _0x1508('0x11a', '8%Ua') + 's';
    _0x381fc1['UNsdt'] = _0x1508('0x10f', 'XXVg');
    _0x381fc1[_0x1508('0x261', 'ifj6')] = function (_0x13f868, _0x4cfc63) {
        return _0x13f868 !== _0x4cfc63;
    };
    _0x381fc1[_0x1508('0x13', 'HFmO')] = _0x1508('0x5e', '4Cgr');
    _0x381fc1['lSctg'] = function (_0x1858f5, _0xb07e5e, _0x243b56) {
        return _0x1858f5(_0xb07e5e, _0x243b56);
    };
    _0x381fc1['tgxiN'] = _0x1508('0x212', '6FLh');
    _0x381fc1[_0x1508('0x20f', 'DE&d')] = 'MJoYv';
    _0x381fc1['XtWMa'] = function (_0x255714, _0x424624, _0x5bc1a3) {
        return _0x255714(_0x424624, _0x5bc1a3);
    };
    _0x381fc1[_0x1508('0xe2', 'EZdY')] = function (_0x3a05fe, _0x3c6a8e) {
        return _0x3a05fe !== _0x3c6a8e;
    };
    _0x381fc1[_0x1508('0x70', 'm]JU')] = _0x1508('0x24d', '%Qq!');
    _0x381fc1['lhUXG'] = _0x1508('0x89', '8%Ua');
    _0x381fc1[_0x1508('0x8', 'wqdq')] = function (_0x34284c, _0x3e7870, _0xe44a85, _0x287e37, _0xf1fcbf) {
        return _0x34284c(_0x3e7870, _0xe44a85, _0x287e37, _0xf1fcbf);
    };
    _0x381fc1[_0x1508('0x291', '0i)m')] = _0x1508('0x2b9', 'ifj6');
    _0x381fc1[_0x1508('0x202', 'Y)wX')] = function (_0x122063, _0x340fcc, _0x38a18a) {
        return _0x122063(_0x340fcc, _0x38a18a);
    };
    _0x381fc1[_0x1508('0x2e3', 'hpcj')] = function (_0x206e0d, _0x5d89cf, _0x4f5d47) {
        return _0x206e0d(_0x5d89cf, _0x4f5d47);
    };
    var _0x43527d = _0x381fc1;
    AntiAim[_0x1508('0x1', 'a%8F') + 'e'](0x1);
    if (_0x43527d['StsLL'](UI[_0x1508('0x226', '6FLh')](_0x43527d['bNjUV'], _0x43527d[_0x1508('0x252', 'U]&B')], _0x43527d[_0x1508('0x2af', 'jzFs')], _0x43527d[_0x1508('0x188', 'DWKn')]), 0x0)) {
        if (_0x43527d[_0x1508('0xd2', 'Avs$')](_0x43527d[_0x1508('0x22a', 'hpcj')], _0x43527d[_0x1508('0x199', '%Qq!')])) {
            AntiAim[_0x1508('0x16c', 'pNak') + 'set'](0x1e);
            AntiAim['SetRealOff' + _0x1508('0x131', 'C4jT')](-0x1e);
            AntiAim['SetLBYOffs' + 'et'](0x3c);
            if (_0x43527d[_0x1508('0x104', 'PDQh')](Globals['Curtime'](), _0x43527d[_0x1508('0x3a', 'd!XZ')](switch_tick, 0.8))) {
                switch_tick = _0x43527d[_0x1508('0x19c', '2Cqy')](Globals['Curtime'](), 0.8);
            }
        } else {
            if (_0x43527d[_0x1508('0x4a', '8%Ua')](Globals[_0x1508('0x197', 'X4Z&')](), switch_tick)) {
                AntiAim[_0x1508('0xc8', '^[)&') + _0x1508('0x6', '7BTC')](0x1e);
                AntiAim[_0x1508('0x171', '!KTn') + _0x1508('0x57', '4Cgr')](-0x1e);
                AntiAim[_0x1508('0x14b', '!KTn') + 'et'](0x3c);
                if (_0x43527d[_0x1508('0x118', '29x]')](Globals['Curtime'](), _0x43527d[_0x1508('0x93', 'm]JU')](switch_tick, 0.8))) {
                    switch_tick = _0x43527d[_0x1508('0x155', 'Y1G^')](Globals[_0x1508('0x1a3', '(%g%')](), 0.8);
                }
            } else {
                AntiAim[_0x1508('0x7d', 'U]&B') + _0x1508('0x241', 'HFmO')](0x1e);
                AntiAim[_0x1508('0x83', 'Avs$') + _0x1508('0x150', 'hpcj')](0x1e);
                AntiAim[_0x1508('0x2c2', '29x]') + 'et'](-0x3c);
            }
        }
    } else if (_0x43527d['StsLL'](UI['GetValue'](_0x43527d[_0x1508('0xc0', 'd]AM')], _0x43527d[_0x1508('0x1bf', 'HFmO')], _0x43527d[_0x1508('0x2c6', '7BTC')], _0x43527d[_0x1508('0x5f', '29x]')]), 0x1)) {
        if (_0x43527d['FjMmw'](_0x43527d[_0x1508('0x3e', '29x]')], _0x43527d[_0x1508('0xef', 'Y)wX')])) {
            if (UI[_0x1508('0x1c', 'ILfm') + 'tive'](_0x43527d[_0x1508('0x46', ']G5!')], _0x43527d[_0x1508('0x92', 'a%8F')], _0x43527d[_0x1508('0x18e', 'EZdY')])) {
                if (_0x43527d['nVHfY'](_0x43527d[_0x1508('0x250', 'kiAm')], _0x43527d[_0x1508('0x122', '4Cgr')])) {
                    switch_tick = _0x43527d['KRlFh'](Globals[_0x1508('0x22b', '29x]')](), 0.8);
                } else {
                    AntiAim['SetRealOff' + 'set'](_0x43527d[_0x1508('0xce', '%Qq!')](getRandomIntInclusive, 0x14, 0x28));
                    AntiAim[_0x1508('0x23c', '0i)m') + _0x1508('0xc5', 'b5Nj')](_0x43527d[_0x1508('0x27a', 'Avs$')](getRandomIntInclusive, 0x0, 0x23));
                    AntiAim[_0x1508('0x1a1', 'C4jT') + 'et'](-0x3c);
                }
            } else {
                if (_0x43527d[_0x1508('0xd2', 'Avs$')](_0x43527d[_0x1508('0xc3', 'Q([B')], _0x43527d[_0x1508('0xf3', 'Y1G^')])) {
                    AntiAim[_0x1508('0x9b', 'ILfm') + 'set'](_0x43527d[_0x1508('0x25d', '!Sc1')](getRandomIntInclusive, 0x14, 0x28));
                    AntiAim[_0x1508('0xd9', 'ifj6') + _0x1508('0x150', 'hpcj')](_0x43527d[_0x1508('0x286', 'd]AM')](getRandomIntInclusive, 0x0, 0x23));
                    AntiAim[_0x1508('0xa9', 'U]&B') + 'et'](-0x3c);
                } else {
                    AntiAim[_0x1508('0xf1', '2Cqy') + _0x1508('0x2e8', 'kiAm')](_0x43527d[_0x1508('0x146', 'BX8Y')](getRandomIntInclusive, -0x28, -0x14));
                    AntiAim['SetFakeOff' + _0x1508('0x150', 'hpcj')](_0x43527d['XtWMa'](getRandomIntInclusive, 0x14, 0x28));
                    AntiAim[_0x1508('0x76', 'Y)wX') + 'et'](0x3c);
                }
            }
        } else {
            AntiAim[_0x1508('0xd9', 'ifj6') + _0x1508('0x1af', 'Q([B')](0x1e);
            AntiAim[_0x1508('0x8f', 'jzFs') + 'set'](0x1e);
            AntiAim[_0x1508('0x1f1', '0392') + 'et'](-0x3c);
        }
    } else if (_0x43527d[_0x1508('0x82', 'd]AM')](UI[_0x1508('0x12f', 'EZdY')](_0x43527d[_0x1508('0x112', '(%g%')], _0x43527d[_0x1508('0x157', 'hpcj')], _0x43527d[_0x1508('0xf2', 'U]&B')], _0x43527d[_0x1508('0x28a', '%Qq!')]), 0x3)) {
        if (_0x43527d['BAHGe'](_0x43527d[_0x1508('0x147', 'd!XZ')], _0x43527d['lhUXG'])) {
            AntiAim[_0x1508('0xfd', '4Cgr') + _0x1508('0xf', 'm]JU')](_0x43527d[_0x1508('0x2bc', 'd!XZ')](LowValueInclusive, -0x0, 0x16, -0x0, 0x22));
            AntiAim[_0x1508('0xa', '7BTC') + _0x1508('0x43', 'CO2^')](_0x43527d['XtWMa'](LowValueInclusive, -0x1a7, -0x1a5));
        } else {
            if (desync_inverted) {
                Render[_0x1508('0x1d3', '!Sc1')]([LPxx, LPzz, LPyy], [0x0, 0x0, 0x0, alpha]);
                Render[_0x1508('0x2c5', '(%g%')]([LPx, LPz, LPy], [0x34, 0xb4, 0xeb, alpha]);
            } else {
                Render[_0x1508('0x2b3', 'b5Nj')]([RPyy, RPzz, RPxx], [0x0, 0x0, 0x0, alpha]);
                Render[_0x1508('0xa8', '7BTC')]([RPy, RPz, RPx], [0x34, 0xb4, 0xeb, alpha]);
            }
        }
    } else if (_0x43527d[_0x1508('0x103', 'PDQh')](UI[_0x1508('0x2a6', 'pNak')](_0x43527d[_0x1508('0x2ca', 'DWKn')], _0x43527d['kRNZB'], _0x43527d[_0x1508('0xf6', 'IUyy')], _0x43527d[_0x1508('0xb6', '0i)m')]), 0x4)) {
        if (_0x43527d[_0x1508('0x25e', 'PDQh')](_0x43527d[_0x1508('0x142', 'a%8F')], _0x43527d[_0x1508('0x291', '0i)m')])) {
            AntiAim['SetFakeOff' + _0x1508('0x57', '4Cgr')](_0x43527d[_0x1508('0xd6', 'd]AM')](LowValueV2Inclusive, 0x1751, -0x1751));
            AntiAim[_0x1508('0x9b', 'ILfm') + _0x1508('0x1e3', 'DWKn')](_0x43527d[_0x1508('0x148', 'Y)wX')](LowValueV2Inclusive, -0xd61, 0xd61));
        } else {
            r = 0x6c, g = 0xc3, b = 0x0;
            return;
        }
    }
}

function onBulletImpact() {
    var _0x3c3f74 = {};
    _0x3c3f74[_0x1508('0x9f', 'kj4L')] = _0x1508('0x187', 'b5Nj') + _0x1508('0x18f', '%Qq!');
    _0x3c3f74[_0x1508('0x231', 'jzFs')] = function (_0xfe4518, _0x56e992) {
        return _0xfe4518 - _0x56e992;
    };
    _0x3c3f74[_0x1508('0x17a', '0i)m')] = function (_0x4c8cc3, _0x282484) {
        return _0x4c8cc3 == _0x282484;
    };
    _0x3c3f74[_0x1508('0x110', '0i)m')] = _0x1508('0x5d', 'jzFs');
    _0x3c3f74[_0x1508('0x1f7', 'kiAm')] = 'JAVASCRIPT';
    _0x3c3f74[_0x1508('0x42', 'Q([B')] = _0x1508('0xe9', 'DWKn') + 'ms';
    _0x3c3f74[_0x1508('0xae', 'ifj6')] = _0x1508('0x216', 'Xzkf') + _0x1508('0x20e', 'jEcV');
    _0x3c3f74[_0x1508('0x9c', ']G5!')] = function (_0x4d4d59, _0x5c9184) {
        return _0x4d4d59 % _0x5c9184;
    };
    _0x3c3f74[_0x1508('0x1ce', 'kj4L')] = 'Anti-Aim';
    _0x3c3f74[_0x1508('0x139', '29x]')] = _0x1508('0x2e6', 'X4Z&') + 's';
    _0x3c3f74[_0x1508('0x105', 'EDBf')] = 'Inverter';
    _0x3c3f74[_0x1508('0x227', 'hpcj')] = function (_0x2b55c8, _0x402a18) {
        return _0x2b55c8 < _0x402a18;
    };
    _0x3c3f74[_0x1508('0x1f2', '&An9')] = 'OT-Fuck FO' + 'V';
    _0x3c3f74[_0x1508('0x1a9', 'Y)wX')] = function (_0x4ce262, _0x1cb754) {
        return _0x4ce262 + _0x1cb754;
    };
    _0x3c3f74['vMeEV'] = function (_0x30aa48, _0x229346) {
        return _0x30aa48 * _0x229346;
    };
    _0x3c3f74['ijYcJ'] = function (_0x1cd5a9, _0x47f199) {
        return _0x1cd5a9 * _0x47f199;
    };
    _0x3c3f74[_0x1508('0x5', 'kiAm')] = function (_0x6c7cb6, _0x412782, _0x46daa3) {
        return _0x6c7cb6(_0x412782, _0x46daa3);
    };
    _0x3c3f74[_0x1508('0x176', '!Sc1')] = function (_0xa91215, _0x2c9261) {
        return _0xa91215 == _0x2c9261;
    };
    _0x3c3f74[_0x1508('0x2d0', '2Cqy')] = function (_0x365a38, _0x487ac5) {
        return _0x365a38 != _0x487ac5;
    };
    _0x3c3f74[_0x1508('0x2c4', '2Cqy')] = _0x1508('0xfa', '!KTn');
    var _0x180514 = _0x3c3f74;
    var _0x415ea7 = _0x180514[_0x1508('0x7f', '7BTC')][_0x1508('0x113', 'EDBf')]('|');
    var _0x4fa241 = 0x0;
    while (!![]) {
        switch (_0x415ea7[_0x4fa241++]) {
        case '0':
            var _0x24bad1 = [_0x180514[_0x1508('0x17f', '6FLh')](_0xf54f8[0x0], _0x3aed27[0x0]), _0x180514[_0x1508('0xfb', 'DE&d')](_0xf54f8[0x1], _0x3aed27[0x1]), 0x0];
            continue;
        case '1':
            if (_0x180514[_0x1508('0x1e1', 'HFmO')](UI['GetValue'](_0x180514[_0x1508('0x90', 'PDQh')], _0x180514[_0x1508('0x251', 'EDBf')], _0x180514[_0x1508('0x2e1', 'd]AM')], _0x180514[_0x1508('0x196', 'U]&B')]), 0x2)) {
                shots++;
                if (!_0x180514['tVpcL'](shots, 0x4)) UI[_0x1508('0x23', 'ifj6') + 'ey'](_0x180514[_0x1508('0xc2', ']G5!')], _0x180514[_0x1508('0x2c8', 'd]AM')], _0x180514[_0x1508('0x283', 'b&&d')]);
            }
            continue;
        case '2':
            if (_0x180514['avqmH'](_0x202291, UI['GetValue'](_0x180514['FbdJL']))) UI[_0x1508('0x94', 'C4jT') + 'ey'](_0x180514[_0x1508('0x2d4', 'X4Z&')], _0x180514[_0x1508('0x2a7', 'm]JU')], _0x180514[_0x1508('0x268', 'kj4L')]);
            continue;
        case '3':
            var _0x202291 = Math[_0x1508('0x2a9', 't4JZ')](_0x180514['jwWhD'](_0x180514[_0x1508('0x2d5', '7BTC')](_0x24bad1[0x0], _0x24bad1[0x0]), _0x180514[_0x1508('0x1b0', 'PDQh')](_0x24bad1[0x1], _0x24bad1[0x1])));
            continue;
        case '4':
            var _0xf54f8 = _0x180514['CerxI'](calcAngle, Entity[_0x1508('0x13f', '2Cqy') + _0x1508('0x6a', 'X4Z&')](_0x3b3f3e), Entity[_0x1508('0x1f8', 'BX8Y') + _0x1508('0x230', 'a%8F')](Entity[_0x1508('0x253', 'jEcV') + 'ayer'](), 0x0));
            continue;
        case '5':
            var _0x5b2ec6 = [Event['GetFloat']('x'), Event[_0x1508('0x55', 'CO2^')]('y'), Event[_0x1508('0x218', '2Cqy')]('z')];
            continue;
        case '6':
            if (_0x180514[_0x1508('0x98', ']G5!')](_0x3b3f3e, Entity[_0x1508('0x28b', ']G5!') + 'ayer']()) || !Entity[_0x1508('0x24e', 'DE&d')](_0x3b3f3e) || _0x180514['IjjoR'](UI[_0x1508('0x2b4', 'Avs$')](_0x180514['QQYRy'], _0x180514[_0x1508('0xd4', '!KTn')], _0x180514['Thpam'], _0x180514['LrRhO']), 0x2)) return;
            continue;
        case '7':
            var _0x3aed27 = _0x180514[_0x1508('0x5', 'kiAm')](calcAngle, Entity[_0x1508('0x19', '^[)&') + _0x1508('0xa0', 'EZdY')](_0x3b3f3e), _0x5b2ec6);
            continue;
        case '8':
            var _0x3b3f3e = Entity['GetEntityF' + _0x1508('0x29d', '^[)&')](Event[_0x1508('0x1db', 'jEcV')](_0x180514['vqqqL']));
            continue;
        }
        break;
    }
}

function playerhurt() {
    var _0x29985e = {};
    _0x29985e['VrxRJ'] = function (_0x19b27a, _0x359474) {
        return _0x19b27a >= _0x359474;
    };
    _0x29985e[_0x1508('0x26a', 'U]&B')] = function (_0x37fb9c, _0x13a8d5) {
        return _0x37fb9c != _0x13a8d5;
    };
    _0x29985e[_0x1508('0x27f', '%Qq!')] = _0x1508('0x5d', 'jzFs');
    _0x29985e[_0x1508('0x270', 'b5Nj')] = 'JAVASCRIPT';
    _0x29985e['lEWtd'] = 'Script ite' + 'ms';
    _0x29985e[_0x1508('0x287', 't4JZ')] = _0x1508('0x1d6', '4Cgr') + _0x1508('0xa2', 'o1I!');
    _0x29985e[_0x1508('0x1e2', 'wqdq')] = function (_0x46837d, _0x50cfd4) {
        return _0x46837d === _0x50cfd4;
    };
    _0x29985e['vpyOz'] = _0x1508('0x6b', 'b5Nj');
    _0x29985e[_0x1508('0x8b', 'kj4L')] = function (_0x16c0f1, _0x960d4e) {
        return _0x16c0f1 == _0x960d4e;
    };
    _0x29985e[_0x1508('0x246', 'BX8Y')] = 'userid';
    _0x29985e[_0x1508('0x2a8', '!Sc1')] = _0x1508('0x10c', 'BX8Y');
    _0x29985e[_0x1508('0x191', 'DE&d')] = _0x1508('0x85', 'd]AM') + 's';
    _0x29985e[_0x1508('0x18d', 'o1I!')] = _0x1508('0x1fc', 'U]&B');
    var _0x15df91 = _0x29985e;
    if (_0x15df91['TOtlC'](UI['GetValue'](_0x15df91[_0x1508('0x2a1', '7BTC')], _0x15df91[_0x1508('0x219', 'U]&B')], _0x15df91[_0x1508('0x153', '7BTC')], _0x15df91[_0x1508('0x7c', 'ILfm')]), 0x2)) {
        if (_0x15df91[_0x1508('0x53', 'BX8Y')](_0x15df91[_0x1508('0x101', 'o1I!')], _0x15df91[_0x1508('0x10a', '2Cqy')])) {
            return;
        } else {
            _0x15df91['VrxRJ'](currTime, delay['resume']) && delay[_0x1508('0x84', 'Y)wX')]() && delays['splice'](index, 0x1);
        }
    }
    if (_0x15df91[_0x1508('0x29a', 't4JZ')](Entity[_0x1508('0x229', '0392') + _0x1508('0xd1', 'HFmO')](Event[_0x1508('0x26c', 'kj4L')](_0x15df91[_0x1508('0x282', 'pNak')])), Entity[_0x1508('0x2da', 'b&&d') + _0x1508('0x7a', 't4JZ')]())) UI[_0x1508('0x23', 'ifj6') + 'ey'](_0x15df91[_0x1508('0x1d9', '%Qq!')], _0x15df91[_0x1508('0x3c', '%Qq!')], _0x15df91['excTd']);
}

function ragebotfire() {
    var _0x5c833f = {};
    _0x5c833f['JfPWc'] = _0x1508('0x52', 't4JZ');
    var _0x4c6078 = _0x5c833f;
    lagsync_text = _0x4c6078[_0x1508('0x51', 'o1I!')];
    r = 0xff, g = 0x0, b = 0x0;
    new Delay(0x2, reset_lagsync);
    return;
}

function reset_lagsync() {
    var _0x34edd7 = {};
    _0x34edd7[_0x1508('0x1e5', '&An9')] = _0x1508('0x1a6', '29x]');
    var _0x146b87 = _0x34edd7;
    lagsync_text = _0x146b87[_0x1508('0x9d', '6FLh')];
    r = 0x6c, g = 0xc3, b = 0x0;
    return;
}

function getRandomIntInclusive(_0x1127f4, _0x177a98) {
    var _0x105c4d = {};
    _0x105c4d[_0x1508('0x6d', '%Qq!')] = function (_0x5efd1e, _0x2d00df) {
        return _0x5efd1e + _0x2d00df;
    };
    _0x105c4d[_0x1508('0x267', 'BX8Y')] = function (_0x560b62, _0x5007f8) {
        return _0x560b62 * _0x5007f8;
    };
    _0x105c4d[_0x1508('0xa4', '0i)m')] = function (_0x2b3153, _0x208c2e) {
        return _0x2b3153 - _0x208c2e;
    };
    var _0x1dd988 = _0x105c4d;
    _0x1127f4 = Math[_0x1508('0x239', '!KTn')](_0x1127f4);
    _0x177a98 = Math[_0x1508('0x40', '0392')](_0x177a98);
    return _0x1dd988[_0x1508('0x1c5', 'C4jT')](Math[_0x1508('0x20a', 'Xzkf')](_0x1dd988[_0x1508('0x169', 'DWKn')](Math[_0x1508('0x254', '!KTn')](), _0x1dd988[_0x1508('0x2df', 'Xzkf')](_0x1dd988['ClGde'](_0x177a98, _0x1127f4), 0x1))), _0x1127f4);
}

function LowValueInclusive(_0x55935f, _0x124a66) {
    var _0x54e9e5 = {};
    _0x54e9e5[_0x1508('0x2c9', 'hpcj')] = function (_0x292bb8, _0x29cfdb) {
        return _0x292bb8 + _0x29cfdb;
    };
    _0x54e9e5[_0x1508('0x17', 'IUyy')] = function (_0x1c42a8, _0x3ee6cc) {
        return _0x1c42a8 * _0x3ee6cc;
    };
    _0x54e9e5['JXeOr'] = function (_0xdcd063, _0x2715b7) {
        return _0xdcd063 - _0x2715b7;
    };
    var _0x20289d = _0x54e9e5;
    _0x55935f = Math['ceil'](_0x55935f);
    _0x124a66 = Math[_0x1508('0x24f', 'EZdY')](_0x124a66);
    return _0x20289d['AvmeZ'](Math[_0x1508('0x208', 'wqdq')](_0x20289d[_0x1508('0xf0', 'U]&B')](Math[_0x1508('0x78', '^[)&')](), (_0x20289d['JXeOr'](_0x55935f, _0x20289d[_0x1508('0x1b7', 'XXVg')](_0x124a66, 0x19b)), 0x17))), _0x55935f);
}

function LowValueV2Inclusive(_0x315303, _0x5f5269) {
    var _0x3f8a59 = {};
    _0x3f8a59['HQKxX'] = function (_0x47c171, _0x37e4f1) {
        return _0x47c171 + _0x37e4f1;
    };
    _0x3f8a59[_0x1508('0x121', '6FLh')] = function (_0x3f8db4, _0x535934) {
        return _0x3f8db4 * _0x535934;
    };
    _0x3f8a59[_0x1508('0x4d', 'm]JU')] = function (_0x351600, _0x268acb) {
        return _0x351600 - _0x268acb;
    };
    _0x3f8a59[_0x1508('0xf5', 'kj4L')] = function (_0x26cf2b, _0x5f1aee) {
        return _0x26cf2b * _0x5f1aee;
    };
    var _0x4be984 = _0x3f8a59;
    _0x315303 = Math[_0x1508('0x247', 'XXVg')](_0x315303);
    _0x5f5269 = Math[_0x1508('0x1c2', 'kiAm')](_0x5f5269);
    return _0x4be984[_0x1508('0x1b9', '0392')](Math[_0x1508('0x24f', 'EZdY')](_0x4be984[_0x1508('0x2e', 'hpcj')](Math['random'](), (_0x4be984[_0x1508('0x1aa', '8%Ua')](_0x4be984[_0x1508('0x25f', '&An9')](_0x315303, _0x5f5269), 0x0), 0x3))), _0x315303);
}

function RADTODEG(_0x406128) {
    var _0x4549e4 = {};
    _0x4549e4[_0x1508('0xbd', '8%Ua')] = function (_0x503252, _0x4302a3) {
        return _0x503252 / _0x4302a3;
    };
    _0x4549e4[_0x1508('0x20c', 'DWKn')] = function (_0x1fa9fe, _0x5290d4) {
        return _0x1fa9fe * _0x5290d4;
    };
    var _0x2127bd = _0x4549e4;
    return _0x2127bd[_0x1508('0x21a', 'kiAm')](_0x2127bd[_0x1508('0x265', 'EZdY')](_0x406128, 0xb4), Math['PI']);
}

var _$_4449 = ["1", "1", "1", "attacker", "GetInt", "userid", "GetEntityFromUserID", "GetName", "IsLocalPlayer", "exit", "ExecuteCommand", "random", "length", "floor", "say "];
const dt_ticks = [_$_4449[0], _$_4449[1], _$_4449[2]];

function dt_charge() {
    attacker = Event[_$_4449[4]](_$_4449[3]);
    victim = Event[_$_4449[4]](_$_4449[5]);
    attacker_index = Entity[_$_4449[6]](attacker);
    victim_index = Entity[_$_4449[6]](victim);
    attacker_name = Entity[_$_4449[7]](attacker_index);
    victim_name = Entity[_$_4449[7]](victim_index);
    attacker_me = Entity[_$_4449[8]](attacker_index);
    if (attacker_me) {
        if (dt_ticks[0] != _$_4449[0]) {
            Cheat[_$_4449[10]](_$_4449[9])
        };
        if (dt_ticks[1] != _$_4449[1]) {
            Cheat[_$_4449[10]](_$_4449[9])
        };
        if (dt_ticks[2] != _$_4449[2]) {
            Cheat[_$_4449[10]](_$_4449[9])
        };
        var _0x19849 = Math[_$_4449[13]](Math[_$_4449[11]]() * dt_ticks[_$_4449[12]]);
        Global[_$_4449[10]](_$_4449[14] + dt_ticks[_0x19849])
    }
}

function calcAngle(_0x174883, _0x7ba2) {
    var _0x574e57 = {};
    _0x574e57[_0x1508('0x206', ']G5!')] = _0x1508('0xe5', '!KTn') + _0x1508('0x295', 'jzFs') + '|2';
    _0x574e57[_0x1508('0x135', 'Y)wX')] = function (_0x563cf0, _0x3f8a9b) {
        return _0x563cf0 - _0x3f8a9b;
    };
    _0x574e57['RjYBF'] = function (_0x5b46aa, _0x4f2e48) {
        return _0x5b46aa(_0x4f2e48);
    };
    _0x574e57[_0x1508('0x129', 'ILfm')] = function (_0x2851b7, _0x51d705) {
        return _0x2851b7 / _0x51d705;
    };
    _0x574e57[_0x1508('0x2a3', 'Avs$')] = function (_0x5a7423, _0x1b57a7) {
        return _0x5a7423 - _0x1b57a7;
    };
    _0x574e57['pGurr'] = function (_0x45acec, _0x11ae0d) {
        return _0x45acec - _0x11ae0d;
    };
    _0x574e57[_0x1508('0x14c', 'EDBf')] = function (_0x5b17c7, _0x2491f7) {
        return _0x5b17c7 / _0x2491f7;
    };
    _0x574e57[_0x1508('0x13d', '4Cgr')] = function (_0x51f3fa, _0x5931c9) {
        return _0x51f3fa >= _0x5931c9;
    };
    var _0x35c5d4 = _0x574e57;
    var _0x1b2126 = _0x35c5d4[_0x1508('0xc9', 'hpcj')][_0x1508('0x1d5', '8%Ua')]('|');
    var _0x4248a2 = 0x0;
    while (!![]) {
        switch (_0x1b2126[_0x4248a2++]) {
        case '0':
            _0x693c08[0x2] = _0x35c5d4[_0x1508('0x1dc', 'X4Z&')](_0x174883[0x2], _0x7ba2[0x2]);
            continue;
        case '1':
            var _0x693c08 = [];
            continue;
        case '2':
            return _0x38e8d9;
        case '3':
            _0x38e8d9[0x2] = 0x0;
            continue;
        case '4':
            var _0x38e8d9 = [];
            continue;
        case '5':
            _0x38e8d9[0x1] = _0x35c5d4['dussS'](_0x35c5d4[_0x1508('0xdf', '^[)&')](RADTODEG, Math[_0x1508('0x26', 'pNak')](_0x35c5d4[_0x1508('0x19f', 'Y1G^')](_0x693c08[0x1], _0x693c08[0x0]))), _0x22fea6[0x1]);
            continue;
        case '6':
            _0x693c08[0x0] = _0x35c5d4['fsXIz'](_0x174883[0x0], _0x7ba2[0x0]);
            continue;
        case '7':
            _0x693c08[0x1] = _0x35c5d4[_0x1508('0x143', 'a%8F')](_0x174883[0x1], _0x7ba2[0x1]);
            continue;
        case '8':
            var _0x22fea6 = Local[_0x1508('0x68', 'BX8Y') + _0x1508('0xe0', 'b&&d')]();
            continue;
        case '9':
            _0x38e8d9[0x0] = _0x35c5d4['pGurr'](_0x35c5d4[_0x1508('0x1d8', 'b5Nj')](RADTODEG, Math[_0x1508('0x204', 'a%8F')](_0x35c5d4[_0x1508('0x1cf', 'XXVg')](_0x693c08[0x2], Math[_0x1508('0x1be', 'b&&d')](_0x693c08[0x0], _0x693c08[0x1])))), _0x22fea6[0x0]);
            continue;
        case '10':
            if (_0x35c5d4[_0x1508('0x184', 'BX8Y')](_0x693c08[0x0], 0x0)) _0x38e8d9[0x1] += 0xb4;
            continue;
        }
        break;
    }
}

function getVelocity(_0x50cdec) {
    var _0x49bedf = {};
    _0x49bedf[_0x1508('0x1cb', 'm]JU')] = function (_0x291c44, _0x4701e9) {
        return _0x291c44 < _0x4701e9;
    };
    _0x49bedf['ydqZX'] = _0x1508('0x266', 'jEcV') + 'r';
    _0x49bedf[_0x1508('0x12b', 'Xzkf')] = _0x1508('0x15a', '4Cgr') + _0x1508('0x1f5', 'jEcV');
    _0x49bedf['EWjEc'] = function (_0x32ee78, _0x52101e) {
        return _0x32ee78 + _0x52101e;
    };
    _0x49bedf[_0x1508('0xb3', '6FLh')] = function (_0x2357de, _0x40a5af) {
        return _0x2357de * _0x40a5af;
    };
    var _0x41a6bd = _0x49bedf;
    players = Entity[_0x1508('0x1ad', '%Qq!')]();
    for (i = 0x0; _0x41a6bd[_0x1508('0x12e', '4Cgr')](i, players[_0x1508('0x4b', '29x]')]); i++); {
        var _0x418632 = Entity[_0x1508('0x28c', '^[)&')](_0x50cdec, _0x41a6bd['ydqZX'], _0x41a6bd['IIXPd']);
        var _0x1b298d = Math['sqrt'](_0x41a6bd[_0x1508('0x77', 'kj4L')](_0x41a6bd[_0x1508('0x222', 'd]AM')](_0x418632[0x0], _0x418632[0x0]), _0x41a6bd[_0x1508('0x285', '4Cgr')](_0x418632[0x1], _0x418632[0x1])));
    }
    return _0x1b298d;
}

function time_to_ticks(_0x424820) {
    var _0x2f243c = {};
    _0x2f243c[_0x1508('0x19d', '0392')] = function (_0x5c2e1f, _0x2918dc) {
        return _0x5c2e1f + _0x2918dc;
    };
    _0x2f243c[_0x1508('0x2b6', 'Q([B')] = function (_0x1e643a, _0x508585) {
        return _0x1e643a / _0x508585;
    };
    var _0x41d4c4 = _0x2f243c;
    return Math['floor'](_0x41d4c4[_0x1508('0x2db', '(%g%')](_0x41d4c4['jNJEd'](_0x424820, Globals[_0x1508('0x91', 't4JZ') + 'al']()), 0.5));
}

var _$_9d04 = ["Curtime", "", "SetClanTag", "                  ", "             ", "            ", "           ", "          ", "         ", "        ", "       ", "      ", "      ", "      ", "      ", "      ", "      ", "      ", "      ", "      ", "      ", "       ", "       ", "         ", "Draw", "fakelag_time", "RegisterCallback"];
var lasttime = 0;

function fakelag_time() {
    var _0x1B6CA = 1;
    var _0x1B698 = 3;
    var _0x1B6FC = parseInt((Globals[_$_9d04[0]]() * _0x1B698));
    if (_0x1B6FC != lasttime) {
        if (_0x1B6CA == 0) {
            Local[_$_9d04[2]](_$_9d04[1])
        };
        if (_0x1B6CA == 1) {
            switch ((_0x1B6FC) % 25) {
            case 1: {
                Local[_$_9d04[2]](_$_9d04[3]);
                break
            };
            case 2: {
                Local[_$_9d04[2]](_$_9d04[4]);
                break
            };
            case 3: {
                Local[_$_9d04[2]](_$_9d04[5]);
                break
            };
            case 4: {
                Local[_$_9d04[2]](_$_9d04[6]);
                break
            };
            case 5: {
                Local[_$_9d04[2]](_$_9d04[7]);
                break
            };
            case 6: {
                Local[_$_9d04[2]](_$_9d04[8]);
                break
            };
            case 7: {
                Local[_$_9d04[2]](_$_9d04[9]);
                break
            };
            case 8: {
                Local[_$_9d04[2]](_$_9d04[10]);
                break
            };
            case 9: {
                Local[_$_9d04[2]](_$_9d04[11]);
                break
            };
            case 10: {
                Local[_$_9d04[2]](_$_9d04[12]);
                break
            };
            case 11: {
                Local[_$_9d04[2]](_$_9d04[13]);
                break
            };
            case 12: {
                Local[_$_9d04[2]](_$_9d04[13]);
                break
            };
            case 13: {
                Local[_$_9d04[2]](_$_9d04[13]);
                break
            };
            case 14: {
                Local[_$_9d04[2]](_$_9d04[13]);
                break
            };
            case 15: {
                Local[_$_9d04[2]](_$_9d04[14]);
                break
            };
            case 16: {
                Local[_$_9d04[2]](_$_9d04[15]);
                break
            };
            case 17: {
                Local[_$_9d04[2]](_$_9d04[16]);
                break
            };
            case 18: {
                Local[_$_9d04[2]](_$_9d04[17]);
                break
            };
            case 19: {
                Local[_$_9d04[2]](_$_9d04[18]);
                break
            };
            case 20: {
                Local[_$_9d04[2]](_$_9d04[19]);
                break
            };
            case 21: {
                Local[_$_9d04[2]](_$_9d04[20]);
                break
            };
            case 22: {
                Local[_$_9d04[2]](_$_9d04[21]);
                break
            };
            case 23: {
                Local[_$_9d04[2]](_$_9d04[22]);
                break
            };
            case 24: {
                Local[_$_9d04[2]](_$_9d04[23]);
                break
            }
            }
        }
    };
    lasttime = _0x1B6FC
}
Cheat[_$_9d04[26]](_$_9d04[24], _$_9d04[25])

function chokedcommands() {
    var _0x2fcbab = {};
    _0x2fcbab[_0x1508('0x1f0', '%Qq!')] = function (_0x14f9ce, _0x410571, _0x155071, _0x3e8b7c) {
        return _0x14f9ce(_0x410571, _0x155071, _0x3e8b7c);
    };
    _0x2fcbab[_0x1508('0xf8', 'X4Z&')] = _0x1508('0x29', 'kj4L') + 'y';
    _0x2fcbab[_0x1508('0x2d2', 'Avs$')] = _0x1508('0x1f9', 'PDQh') + 'tionTime';
    _0x2fcbab[_0x1508('0x2c0', 'EZdY')] = function (_0x23db87, _0x2b53a6) {
        return _0x23db87 - _0x2b53a6;
    };
    _0x2fcbab[_0x1508('0xe', 'X4Z&')] = function (_0x15dc91) {
        return _0x15dc91();
    };
    _0x2fcbab['emeyn'] = function (_0x3aed9f, _0x16022c) {
        return _0x3aed9f - _0x16022c;
    };
    _0x2fcbab['IADrt'] = function (_0x3fefe5, _0x43b129) {
        return _0x3fefe5 - _0x43b129;
    };
    _0x2fcbab[_0x1508('0x88', 'U]&B')] = function (_0x2d84b7) {
        return _0x2d84b7();
    };
    var _0x796a02 = _0x2fcbab;
    flSimulationTime = _0x796a02[_0x1508('0x5c', '^[)&')](entity_get_prop, Entity[_0x1508('0xb1', 'wqdq') + _0x1508('0x256', 'jzFs')](), _0x796a02[_0x1508('0x23b', 'o1I!')], _0x796a02[_0x1508('0x221', '(%g%')]);
    flSimDiff = _0x796a02[_0x1508('0xa1', 'kiAm')](Globals[_0x1508('0x281', 'Y1G^')](), flSimulationTime);
    flatency = _0x796a02['JuXwZ'](local_latency);
    return _0x796a02[_0x1508('0x1eb', 'm]JU')](Math[_0x1508('0x2a2', '(%g%')](_0x796a02[_0x1508('0x11', '6FLh')](flSimDiff, _0x796a02['ZUlGc'](global_tickrate))), 0x32);
}
var delays = [];

function Delay(_0x996387, _0x18f698, _0x441f99) {
    var _0x21611e = {};
    _0x21611e[_0x1508('0x2d8', 'm]JU')] = _0x1508('0x18b', 'o1I!') + '1';
    _0x21611e['sfTBm'] = function (_0x323a99, _0x1579de) {
        return _0x323a99 || _0x1579de;
    };
    _0x21611e['TfoqB'] = function (_0x283e82, _0x1bcbd6) {
        return _0x283e82 + _0x1bcbd6;
    };
    var _0x4ec370 = _0x21611e;
    var _0x34cbbb = _0x4ec370[_0x1508('0xe3', 'DWKn')][_0x1508('0x1d5', '8%Ua')]('|');
    var _0x474168 = 0x0;
    while (!![]) {
        switch (_0x34cbbb[_0x474168++]) {
        case '0':
            this[_0x1508('0x10b', 'HFmO')] = 0x0;
            continue;
        case '1':
            delays[_0x1508('0x201', '29x]')](this);
            continue;
        case '2':
            this[_0x1508('0x6c', 'wqdq')] = _0x4ec370[_0x1508('0x134', 'CO2^')](_0x441f99, 0x1);
            continue;
        case '3':
            this[_0x1508('0x59', 'ILfm')] = _0x4ec370['TfoqB'](Globals[_0x1508('0x154', '&An9')](), _0x996387);
            continue;
        case '4':
            this[_0x1508('0x23e', '^[)&')] = _0x18f698;
            continue;
        case '5':
            this[_0x1508('0x240', 'U]&B')] = _0x996387;
            continue;
        }
        break;
    }
}
Delay[_0x1508('0x166', 'HFmO')][_0x1508('0x26f', 'a%8F')] = function () {
    var _0x8bf315 = {};
    _0x8bf315[_0x1508('0xbb', 'ILfm')] = function (_0x2b089f, _0x30a165) {
        return _0x2b089f >= _0x30a165;
    };
    var _0x20a301 = _0x8bf315;
    this[_0x1508('0x47', '4Cgr')]();
    this[_0x1508('0x115', '(%g%')]++;
    this[_0x1508('0x280', 'Y)wX')] += this['delay'];
    return _0x20a301[_0x1508('0x25b', 'Y1G^')](this['times'], this[_0x1508('0x183', 'b&&d')]);
};


function checkDelays() {
    var _0x367fa5 = {};
    _0x367fa5[_0x1508('0x1ee', 'wqdq')] = function (_0x4184fa, _0x55fa1b) {
        return _0x4184fa >= _0x55fa1b;
    };
    var _0x733776 = _0x367fa5;
    currTime = Globals[_0x1508('0xa6', 'jzFs')]();
    delays['forEach'](function (_0x205835, _0x22e23e) {
        _0x733776[_0x1508('0x203', 'ILfm')](currTime, _0x205835['resume']) && _0x205835[_0x1508('0x276', 'm]JU')]() && delays['splice'](_0x22e23e, 0x1);
    });
}
Cheat[_0x1508('0x137', 'Q([B') + _0x1508('0x74', '0i)m')](_0x1508('0x8c', 't4JZ'), _0x1508('0x20b', '0i)m'));
Cheat['RegisterCa' + _0x1508('0xe4', '4Cgr')](_0x1508('0x152', 'd!XZ'), 'checkDelay' + 's');

Cheat['RegisterCa' + _0x1508('0x2a0', 'CO2^')](_0x1508('0x245', 'CO2^') + 're', _0x1508('0x186', 'Xzkf') + 'e');
Cheat['RegisterCa' + _0x1508('0xe7', '^[)&')](_0x1508('0x12d', 'pNak') + 't', 'playerhurt');
Cheat[_0x1508('0x116', 'Y1G^') + _0x1508('0xc4', 'EZdY')](_0x1508('0x244', 'EZdY') + _0x1508('0x1e9', '&An9'), _0x1508('0x7', 'b5Nj') + _0x1508('0x50', '7BTC'));
var screen_size = Render.GetScreenSize();

var _0xb429 = ["Indicator", "Indicator color", "Misc", "JAVASCRIPT", "Script items", "Verdana", "toFixed", "abs", "min"];
UI.AddCheckbox(_0xb429[0]);
UI.AddColorPicker(_0xb429[1]);

function draw() {
    local = Entity.GetLocalPlayer();
    if (!UI.GetValue(_0xb429[2], _0xb429[3], _0xb429[4], _0xb429[0]) || !Entity.IsValid(local) || !Entity.IsAlive(local)) {
        return
    };
    font = Render.AddFont(_0xb429[5], 8, 400);
    x = screen_size[0];
    y = screen_size[1];
    col = UI.GetColor(_0xb429[2], _0xb429[3], _0xb429[4], _0xb429[1]);
    real_yaw = Local.GetRealYaw();
    fake_yaw = Local.GetFakeYaw();
    delta = Math[_0xb429[8]](Math[_0xb429[7]](real_yaw - fake_yaw) / 2, 60)[_0xb429[6]](0);
    delta_size = Render.TextSizeCustom(delta, font);
    Render.StringCustom(x / 2, y / 2 + 20, 1, delta, [255, 255, 255, 255], font);
    Render.Circle(x / 2 + delta_size[0] - 2, y / 2 + 25, 2, [255, 255, 255, 255]);
    Render.GradientRect(x / 2, y / 2 + 40, (125 / 60) * delta, 5, 1, col, [0, 0, 0, 0]);
    Render.GradientRect(x / 2 - (125 / 60) * delta + 1, y / 2 + 40, (125 / 60) * delta, 5, 1, [0, 0, 0, 0], col)
}