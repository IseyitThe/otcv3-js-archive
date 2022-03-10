var usernames = new Array();
usernames.push(''), usernames.push(''), usernames.push(''), usernames.push(''), usernames.push(''), UI.AddLabel('           Anti-aimbot angles          '), UI.AddCheckbox('Enabled'), UI.AddDropdown('Yaw base', ['Local view', 'At targets']), UI.AddSliderInt('Yaw', -(14 * -199 + -3813 + 1 * 6779), -1 * 811 + -314 + 1305), UI.AddDropdown('Yaw jitter', ['Off', 'Offset', 'Center', 'Random']), UI.AddSliderInt('Yaw jitter value', -(-650 + -6072 + -14 * -493), 2782 * 1 + 97 * -45 + 1763), UI.AddDropdown('Body yaw', ['Opposite', 'Static', 'Jitter']), UI.AddSliderInt('Body yaw value', -(3607 * 2 + -8278 + 1244), 1 * -9373 + -1 * 1101 + 14 * 761), UI.AddDropdown('Lower body yaw target', ['Sway', 'Opposite', 'Eye yaw']), UI.AddSliderInt('Fake yaw limit', -5823 + -2894 + -23 * -379, -3440 + 9605 + -6105), UI.AddLabel('               Freestanding          '), UI.AddCheckbox('Freestanding'), UI.AddHotkey('Freestanding hotkey'), UI.AddDropdown('Freestand body yaw', ['Off', 'Static', 'Crooked']), UI.AddHotkey('Freestanding body yaw hotkey'), UI.AddHotkey('Lowerize fake yaw limit'), UI.AddCheckbox('Enable jitter when running'), UI.AddCheckbox('Allow to use inverter'), UI.AddLabel('     Override anti-aimbot angles          ');
var leftWasPressed = ![],
    rightWasPressed = ![],
    backWasPressed = ![],
    oldTick = -3551 + 9135 * 1 + 698 * -8,
    lastPressed = -6 * -991 + -5 * 791 + -1991,
    drawLeft = 144 + -7938 + -1299 * -6,
    drawRight = -8184 + -13 * -548 + -1 * -1060,
    isHideRealActive = ![],
    SetRealYaw = -3095 + -7619 * -1 + -4524,
    SetFakeYaw = 3266 + 14 * 23 + 69 * -52,
    SetLBYYaw = 1 * 4436 + -8877 + -1 * -4441,
    RealSwitch = ![],
    FakeSwitch = ![],
    LbySwitch = ![],
    IsInverted = ![],
    left_distance, right_distance, fontalpha = 1 * 3761 + -1155 + -1303 * 2,
    inverter = {
        'get': function () {
            return IsInverted;
        }
    };

function deg2rad(_0x919d82) {
    return _0x919d82 * Math.PI / (9 * 402 + 5263 + -8701);
}

function angle_to_vec(_0x6b4e75, _0x2bf2b2) {
    var _0x2938b3 = deg2rad(_0x6b4e75),
        _0x33a2df = deg2rad(_0x2bf2b2),
        _0x58e941 = Math.sin(_0x2938b3),
        _0x48806d = Math.cos(_0x2938b3),
        _0x60448b = Math.sin(_0x33a2df),
        _0x1ddfe6 = Math.cos(_0x33a2df);
    return [_0x48806d * _0x1ddfe6, _0x48806d * _0x60448b, -_0x58e941];
}

function trace(_0x1b1483, _0x32452c) {
    var _0x562a7e = angle_to_vec(_0x32452c[-5 * -837 + -13 * 614 + -1 * -3797], _0x32452c[8083 * 1 + 1 * 9655 + -17737]),
        _0x57777d = Entity.GetRenderOrigin(_0x1b1483);
    _0x57777d[9771 + -2 * 1073 + -7623] += -8256 + 8583 + -277 * 1;
    var _0x3c5804 = [_0x57777d[-9746 + -9613 + 19359] + _0x562a7e[-131 * -5 + -6965 + 3155 * 2] * (-5981 * -2 + 15004 + -894 * 21), _0x57777d[-18 * -157 + -9478 + 6653] + _0x562a7e[-6861 + 5374 + 744 * 2] * (11945 + -30 * 4 + -3633), _0x57777d[-1 * 486 + -8553 * 1 + 1 * 9041] + _0x562a7e[9724 + 8646 + 14 * -1312] * (1 * -3662 + -2375 + -527 * -27)],
        _0x528945 = Trace.Line(_0x1b1483, _0x57777d, _0x3c5804);
    if (_0x528945[-4905 + 2232 + 2674] == -8668 + -13 * -759 + -1198) return;
    _0x3c5804 = [_0x57777d[7989 + -2 * 1 + -49 * 163] + _0x562a7e[-9947 * 1 + -2267 * -4 + 879] * _0x528945[5363 + -4620 + 53 * -14] * (-10371 + -4050 + -1 * -22613), _0x57777d[9225 + -1 * 8353 + 1 * -871] + _0x562a7e[6429 * 1 + 1 * -9956 + -294 * -12] * _0x528945[6602 + 4427 + -2757 * 4] * (3219 + 2122 + 2851 * 1), _0x57777d[2109 * -2 + -4387 + -8607 * -1] + _0x562a7e[-26 * 4 + -3162 + 38 * 86] * _0x528945[4 * -755 + 3 * -2021 + 9084] * (5152 + 14208 + -11168)];
    var _0x344f39 = Math.sqrt((_0x57777d[6945 + -6823 * -1 + -13768] - _0x3c5804[-4968 * -1 + 968 + -5936]) * (_0x57777d[-7881 + -1929 + 6 * 1635] - _0x3c5804[-64 * -59 + 2999 * -2 + -11 * -202]) + (_0x57777d[2926 + -4169 + -1 * -1244] - _0x3c5804[4 * -1714 + -137 * 67 + 1 * 16036]) * (_0x57777d[27 * 349 + 2 * -166 + -9090] - _0x3c5804[855 * 2 + 19 + -1728]) + (_0x57777d[1313 * -7 + -9614 + 18807] - _0x3c5804[-1 * -8107 + -2435 * -1 + -10540]) * (_0x57777d[1 * 7634 + 2344 + 4988 * -2] - _0x3c5804[2434 * -2 + 1202 * -8 + 14486]));
    _0x57777d = Render.WorldToScreen(_0x57777d), _0x3c5804 = Render.WorldToScreen(_0x3c5804);
    if (_0x3c5804[9991 * 1 + -8587 + -1402] != -11 * 116 + 2055 + -778 || _0x57777d[-74 * 23 + -2792 + 1 * 4496] != -30 * -221 + -4583 + -2046) return;
    return _0x344f39;
}

function RandomInt(_0x5251ef, _0x47ccbe) {
    return Math.floor(Math.random() * (_0x47ccbe - _0x5251ef)) + _0x5251ef;
}

function clamp(_0xbb680a, _0x5013de, _0x59325d) {
    return _0xbb680a <= _0x5013de ? _0x5013de : _0xbb680a >= _0x59325d ? _0x59325d : _0xbb680a;
}

function getVelocity() {
    var _0x4bb8ff = Entity.GetProp(Entity.GetLocalPlayer(), 'CBasePlayer', 'm_vecVelocity[0]'),
        _0x37a867 = Math.sqrt(_0x4bb8ff[2 * -2326 + 1 * -9299 + 13951 * 1] * _0x4bb8ff[724 + 5488 + -2 * 3106] + _0x4bb8ff[9 * -1 + -6 * -1429 + -8564] * _0x4bb8ff[-5242 + -606 + 5849]);
    return _0x37a867;
}

function onUnload() {
    AntiAim.SetOverride(-9581 + 279 * 1 + 4651 * 2);
}
var yawbasecache = UI.GetValue('Script items', 'Yaw base');

function onCreateMove() {
    if (usernames.indexOf(Cheat.GetUsername()) == -(4115 * 2 + 1225 + -1 * 9454)) {
        if (UI.GetValue('Script items', 'Enabled')) {
            AntiAim.SetOverride(-163 * 7 + -9623 * 1 + 10765);
            const _0x1ee410 = Entity.GetProp(Entity.GetLocalPlayer(), 'CCSPlayer', 'm_iShotsFired');
            var _0x3befc4 = Entity.GetLocalPlayer();
            switch (UI.GetValue('Script items', 'Yaw base')) {
            case 5 * -735 + -7417 * 1 + 188 * 59:
                UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'At targets', ![]);
                break;
            case 4021 + -2639 + -1381:
                UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'At targets', !![]);
                break;
            }
            if (UI.GetValue('Script items', 'Yaw jitter') == 6978 + -8737 * -1 + -5 * 3143) SetRealYaw = UI.GetValue('Script items', 'Yaw');
            else {
                if (Globals.ChokedCommands() == -1 * -1685 + -307 * 9 + -7 * -154) {
                    if (UI.GetValue('Script items', 'Yaw jitter') == -9087 + 9703 * 1 + -123 * 5) RealSwitch ? SetRealYaw = UI.GetValue('Script items', 'Yaw') : SetRealYaw = UI.GetValue('Script items', 'Yaw') + UI.GetValue('Script items', 'Yaw jitter value'), RealSwitch = !RealSwitch;
                    else {
                        if (UI.GetValue('Script items', 'Yaw jitter') == -9865 + 476 * -20 + 19387) RealSwitch ? SetRealYaw = UI.GetValue('Script items', 'Yaw') - UI.GetValue('Script items', 'Yaw jitter value') / (1710 + -3 * -319 + -65 * 41) : SetRealYaw = UI.GetValue('Script items', 'Yaw') + UI.GetValue('Script items', 'Yaw jitter value') / (1 * -3667 + 8180 + -4511), RealSwitch = !RealSwitch;
                        else UI.GetValue('Script items', 'Yaw jitter') == 2 * -2057 + -9483 + 13600 && (SetRealYaw = UI.GetValue('Script items', 'Yaw') + RandomInt(UI.GetValue('Script items', 'Yaw jitter value') / -(94 * -42 + -317 * 31 + -599 * -23), UI.GetValue('Script items', 'Yaw jitter value') / (6590 + 2826 + 6 * -1569)));
                    }
                }
            }
            if (Globals.ChokedCommands() == 4200 + 1810 + -601 * 10) {
                if (UI.GetValue('Enable jitter when running') && getVelocity() > -1172 * -2 + 4 * 782 + -5362 * 1) FakeSwitch ? SetFakeYaw = UI.GetValue('Script items', 'Body yaw value') : SetFakeYaw = UI.GetValue('Script items', 'Body yaw value') + (1 * -5926 + 647 * 6 + 526 * 4), FakeSwitch = !FakeSwitch;
                else {
                    if (UI.GetValue('Script items', 'Body yaw') == 928 * 2 + 9179 + -11035 * 1) SetFakeYaw = 9 * 490 + -2172 + -6 * 353;
                    else {
                        if (UI.GetValue('Script items', 'Body yaw') == -8208 + -1 * -2663 + 5546 * 1) SetFakeYaw = UI.GetValue('Script items', 'Body yaw value');
                        else UI.GetValue('Script items', 'Body yaw') == 4068 + 1 * 6238 + -1472 * 7 && (!UI.IsHotkeyActive('Script items', 'Lowerize fake yaw limit') ? (FakeSwitch ? SetFakeYaw = UI.GetValue('Script items', 'Body yaw value') : SetFakeYaw = UI.GetValue('Script items', 'Body yaw value') + (8751 + -265 + -8426), FakeSwitch = !FakeSwitch) : SetFakeYaw = 6184 + -13 * -327 + -83 * 125);
                    }
                }
            }
            UI.GetValue('Script items', 'Freestanding') && UI.IsHotkeyActive('Script items', 'Freestanding hotkey') ? UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Auto direction', !![]) : UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Auto direction', ![]);
            if (UI.GetValue('Script items', 'Freestand body yaw') != 5518 + 4924 * 1 + -10442 && UI.IsHotkeyActive('Script items', 'Freestanding body yaw hotkey')) {
                var _0x14c096 = Local.GetViewAngles();
                left_distance = trace(_0x3befc4, [973 + 6329 + -2 * 3651, _0x14c096[-1022 + 5636 + 659 * -7] - (221 + 397 * -23 + -11 * -812)]), right_distance = trace(_0x3befc4, [9876 + -5982 + -3894, _0x14c096[-6382 + 2246 * -2 + 10875] + (-9155 + -69 * 3 + 9384)]), left_distance < 1 * 4391 + -215 * -1 + -4006 && right_distance < -8668 + 630 + -617 * -14 && (UI.GetValue('Script items', 'Freestand body yaw') == 2468 * 2 + -109 * 5 + -4389 ? right_distance < left_distance && (SetFakeYaw *= -(2437 * -4 + 1003 * -9 + 18776)) : left_distance < right_distance && (SetFakeYaw *= -(9425 + 637 * -11 + -2417 * 1)));
            }
            UI.GetValue('Script items', 'Allow to use inverter') && (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter') && (SetFakeYaw = SetFakeYaw * -(-2493 + -4214 * 1 + -3354 * -2)));
            _0x1ee410 > -1542 + 45 * 3 + 1408 && (SetFakeYaw = SetFakeYaw * -(3911 * 1 + 9293 * 1 + 3 * -4401));
            SetFakeYaw = clamp(SetFakeYaw, UI.GetValue('Script items', 'Fake yaw limit') * -(-2598 + 516 * -4 + 4663), UI.GetValue('Script items', 'Fake yaw limit'));
            UI.IsHotkeyActive('Script items', 'Lowerize fake yaw limit') && (UI.GetValue('Script items', 'Lower body yaw target') == 1846 + -2056 + 211 && (SetFakeYaw = -8396 + 220 * 12 + 5798), UI.GetValue('Script items', 'Lower body yaw target') == 2 * 914 + -112 * -80 + 5393 * -2 && (SetFakeYaw = 1 * -6583 + -8488 + -1 * -15101));
            if (UI.GetValue('Script items', 'Lower body yaw target') == -17 * -355 + -5 * 1387 + 45 * 20) Math.floor(Globals.Curtime()) % (7288 + 1 * 7334 + 14617 * -1) > 1 * 3007 + -331 * -10 + -6315 ? (SetFakeYaw = UI.GetValue('Script items', 'Fake yaw limit'), SetLBYYaw = UI.GetValue('Script items', 'Fake yaw limit') * (1 * -4345 + -39 * 50 + 6297)) : (SetFakeYaw = UI.GetValue('Script items', 'Fake yaw limit') * -(-41 * 177 + -6794 + 4 * 3513), SetLBYYaw = UI.GetValue('Script items', 'Fake yaw limit') * -(-3774 + -3 * 599 + 5573 * 1));
            else {
                if (UI.GetValue('Script items', 'Lower body yaw target') == 2 * 906 + -301 * -17 + 6928 * -1) SetLBYYaw = SetFakeYaw * (6127 + 2503 + -8628);
                else UI.GetValue('Script items', 'Lower body yaw target') == 3107 + -2 * -152 + -3409 && (SetLBYYaw = SetFakeYaw);
            }
            AntiAim.SetFakeOffset(SetFakeYaw), UI.GetValue('Script items', 'Lower body yaw target') == -413 * -20 + 1831 + -5 * 2018 ? UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', SetRealYaw - SetFakeYaw) : isLeftActive || isRightActive ? UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', SetRealYaw - SetFakeYaw) : UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', SetRealYaw), AntiAim.SetLBYOffset(SetLBYYaw);
        } else AntiAim.SetOverride(1292 * -3 + 7919 + -4043);
    }
}

function player_connect() {
    lastPressed = Global.Tickcount(), oldTick = Global.Tickcount();
}
Global.RegisterCallback('player_connect_full', 'player_connect');
var sx = Global.GetScreenSize()[-37 * -269 + 7 * 1327 + -19242] / (5951 + 595 * 5 + 388 * -23),
    sy = Global.GetScreenSize()[-86 * 1 + 26 * 379 + -9767] / (-3 * -1544 + 9310 + -85 * 164);

function onDraw() {
    if (usernames.indexOf(Cheat.GetUsername()) == -(296 * -13 + -6326 + 10175)) {
        if (!World.GetServerString() || Entity.IsAlive(Entity.GetLocalPlayer()) == ![]) return;
        var _0x15a88d = Render.AddFont('Verdana', -22 * 355 + -361 * -3 + -518 * -13, 1 * -15 + -8234 + 961 * 9),
            _0x3ff084 = Render.AddFont('Calibri', -2 * -4635 + -325 * 1 + -8925, -4861 * 2 + 5753 + 23 * 203),
            _0x4fd8b8 = -5425 + -8543 + 13968,
            _0x1eddc6 = ![];
        if (left_distance < -1 * -2269 + -499 * -4 + -3665 && right_distance < 9388 + -1 * -5667 + -413 * 35) {
            if (fontalpha < 8347 + 3525 + -11871) fontalpha += Globals.Frametime() * (302 + -6888 + 1099 * 6);
        } else {
            if (fontalpha > 6 * -1029 + 2498 + 4 * 919) fontalpha -= Globals.Frametime() * (-585 + -8316 + 8909);
        }
        if (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter')) {
            if (left_distance < right_distance) _0x1eddc6 = ![];
            else _0x1eddc6 = !![];
        } else {
            if (right_distance < left_distance) _0x1eddc6 = ![];
            else _0x1eddc6 = !![];
        }
        Render.StringCustom(sx - (-1 * 3847 + -59 * 147 + 12570), sy - (-5147 * 1 + -9844 + 15009), 8621 * 1 + -2 * -109 + -18 * 491, '<', _0x1eddc6 ? [-1 * 3187 + 932 * 10 + -5878, 19 * -146 + 4661 * -1 + 7509, 1 * -2721 + -7479 + -1 * -10351, Math.max(Math.min(fontalpha, 6325 + 7 * 1317 + -1727 * 9), -5090 + -1171 * 2 + 7432) * (-2266 + 19 * 64 + 1305)] : [54 * 69 + 121 * 47 + -1319 * 7, 7431 + 8155 + -2 * 7703, 3 * -2489 + -7377 + 15024, Math.max(Math.min(fontalpha, 1021 + 16 * -430 + -1172 * -5), -4089 + 5991 + -1902) * (-5954 + 3452 * -1 + 9526)], _0x3ff084), Render.StringCustom(sx + (919 * 7 + 115 * -4 + -5923 * 1), sy - (4002 * -2 + -1 * -9323 + -1301), -17 * 214 + -6 * 1 + 3645, '>', !_0x1eddc6 ? [2079 + -1 * -6422 + -4123 * 2, -7575 + -2198 + 9847, -6082 + -7567 + 13800, Math.max(Math.min(fontalpha, -6469 + 4147 + -101 * -23), 8866 + 8743 + -17609 * 1) * (1 * -2962 + 7874 + 1 * -4657)] : [-1508 + -3876 + 5564, -5 * -132 + -542 + 62, 1664 + 1 * -259 + 35 * -35, Math.max(Math.min(fontalpha, -2253 * -3 + -5 * -1493 + -14223), 1 * -5527 + -49 * 193 + -8 * -1873) * (-172 * -54 + -1305 + -7863)], _0x3ff084), Render.StringCustom(sx + (-2800 * -2 + 7310 + -1 * 12909), sy + (-221 * 23 + -1754 * 2 + 8641) + (5 * 960 + -8051 + 3 * 1084) + _0x4fd8b8, 2 * 532 + -7 * 257 + 736, UI.IsHotkeyActive('Script items', 'Lowerize fake yaw limit') ? 'LOW DELTA' : UI.GetValue('Enable jitter when running') && getVelocity() > 10 * -525 + 3206 + 2154 ? 'JITTER WALK' : 'IDEAL YAW', [-1652 + -1 * -338 + 1314, -1420 * -2 + 7 * -111 + -2063, -3714 + -2 * -19 + 4 * 919, 1 * -7804 + -2171 * -4 + -625], _0x15a88d), Render.StringCustom(sx, sy + (1 * -5389 + 9278 + -3839) + _0x4fd8b8, -721 + -3324 + 4046, UI.IsHotkeyActive('Script items', 'Lowerize fake yaw limit') ? 'LOW DELTA' : UI.GetValue('Enable jitter when running') && getVelocity() > -4436 * 2 + -411 * -1 + -2857 * -3 ? 'JITTER WALK' : 'IDEAL YAW', [-6021 + -8435 + 14711, -4189 + -1374 + 1 * 5716, 55 * -5 + 461 * -1 + 736, 4079 + 611 * -1 + -3213], _0x15a88d), _0x4fd8b8 += 55 * 27 + 3839 + -5314, UI.GetValue('Script items', 'Freestand body yaw') == -25 * 107 + 293 * -5 + 4140 ? (Render.StringCustom(sx + (10 * -781 + -3592 + 11403), sy + (-158 * -12 + -5335 + 3489 * 1) + (43 * 25 + -977 + -97 * 1) + _0x4fd8b8, -177 * 7 + 2784 + -1544, UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter') ? 'LEFT' : 'RIGHT', [-350 + 561 * -3 + 2033, -5718 + -3957 + 9675, -901 * -4 + -1 * -255 + -1 * 3859, 5826 + -3749 + -1822], _0x15a88d), Render.StringCustom(sx, sy + (-2734 * 2 + -8651 * 1 + 14169) + _0x4fd8b8, 10 * 179 + 2 * -4535 + 7281 * 1, UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter') ? 'LEFT' : 'RIGHT', [227 * -44 + -3845 + -13991 * -1, 8 * -926 + 1 * 4436 + 3101 * 1, -37 * 111 + -1 * -9764 + -5418, -31 * 127 + -6380 + 2 * 5286], _0x15a88d), _0x4fd8b8 += -21 * 93 + -1 * -4923 + -2960) : (Render.StringCustom(sx + (9930 + 9934 + -3 * 6621), sy + (1 * 1324 + 1 * -1925 + -93 * -7) + (-11 * -709 + 3208 * -1 + 6 * -765) + _0x4fd8b8, 3024 + -596 * -12 + -10175, 'DYNAMIC', [-6229 * 1 + -8859 + 15088 * 1, -7247 + 662 + 439 * 15, -37 * -12 + 8 * -75 + 156, 7129 * 1 + -571 * 5 + -4019], _0x15a88d), Render.StringCustom(sx, sy + (1263 * -5 + -58 + 6423) + _0x4fd8b8, 2383 + 9872 + -12254, 'DYNAMIC', [9262 * -1 + 4 * -451 + -2806 * -4, -4141 + 6969 + -2699 * 1, -2331 + 11 * 58 + 1932, 7290 + -6460 + -575], _0x15a88d), _0x4fd8b8 += 6 * -268 + -1 * -4231 + 2613 * -1), Render.StringCustom(sx + (1 * -4094 + -9523 * -1 + -5428), sy + (5810 + 1 * 3559 + -9319) + (-8083 + -7767 + 121 * 131) + _0x4fd8b8, -7059 + -97 + 17 * 421, 'DT', [139 * 71 + 343 * -21 + 62 * -43, 688 + -5688 + 5000, 7833 + -3 * 1101 + -4530, 792 + -821 * 1 + -142 * -2], _0x15a88d), Render.StringCustom(sx, sy + (8133 + 4173 + -12256) + _0x4fd8b8, 2123 + -2009 * 2 + 3 * 632, 'DT', UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap') ? [-277 * 17 + 2365 + 2467, 216 * -38 + -8787 + 17187, -171 * -11 + 226 * 5 + 1495 * -2, -9824 + -157 * -43 + 26 * 128] : [-1037 + -1 * -2322 + -1030, 886 * -3 + -6320 + 2 * 4489, 1 * -4603 + 6709 + -27 * 78, -7979 + -5465 * -1 + -13 * -213], _0x15a88d), _0x4fd8b8 += 97 * 46 + -7859 + -1 * -3407, UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots') && (Render.StringCustom(sx + (-3491 + -8228 + 11720), sy + (8952 + -9607 + 5 * 141) + (-2442 + 7609 + -5166) + _0x4fd8b8, 1548 + -9966 + 8419, 'ONSHOT', [6065 + 5251 + -164 * 69, 1801 * -1 + 3464 * 1 + -1663, -8384 + 4773 + 157 * 23, 13 * -477 + 161 * 29 + -1787 * -1], _0x15a88d), Render.StringCustom(sx, sy + (-476 + -1 * -3882 + -3356) + _0x4fd8b8, -1 * -4397 + 8302 + -12698, 'ONSHOT', [3588 + -4302 + 9 * 93, 1 * 7542 + 2780 + 5065 * -2, -1759 + -5432 + 1803 * 4, -24 * -10 + 1 * 2222 + 2207 * -1], _0x15a88d), _0x4fd8b8 += -6893 + 5839 * -1 + 6371 * 2), UI.IsHotkeyActive('Rage', 'GENERAL', 'General', 'Force safe point') && (Render.StringCustom(sx + (-833 + -463 * -4 + 1 * -1018), sy + (8839 + 248 * -12 + -5813) + (2 * 2412 + 71 * 121 + -13414) + _0x4fd8b8, 3084 + 1085 + 4168 * -1, 'SAFE', [3125 + -5613 + 2488, -5812 + -6867 * 1 + 31 * 409, 1 * -5715 + 18 * -543 + 15489, -1 * -2953 + 3627 + -6325], _0x15a88d), Render.StringCustom(sx, sy + (-7819 + -1232 + 479 * 19) + _0x4fd8b8, -2 * 2179 + -5416 + 9775, 'SAFE', [3062 + -4778 + 1839, -3620 + -2591 * 3 + 11585, 4821 + -69 * -136 + -1182 * 12, -16 * 390 + 90 * -7 + 95 * 75], _0x15a88d), _0x4fd8b8 += 6627 + -3813 + -1 * 2804), UI.IsHotkeyActive('Rage', 'GENERAL', 'General', 'Force body aim') && (Render.StringCustom(sx + (-49 * 43 + -1675 * 1 + 3783), sy + (1 * 4234 + 9885 + -14069) + (1 * -7945 + -8186 + -436 * -37) + _0x4fd8b8, 4840 + -3844 + 5 * -199, 'BAIM', [9423 + 1 * -911 + -8512, -196 * 38 + -42 * 220 + 16688, 1009 + -8469 + -10 * -746, 9105 + 8283 + -17133], _0x15a88d), Render.StringCustom(sx, sy + (-6391 + -7 * -1275 + -3 * 828) + _0x4fd8b8, -1831 * -3 + 458 * 14 + -992 * 12, 'BAIM', [24 * -52 + 8429 * -1 + 9901, -4502 + 1172 * -8 + -3 * -4659, 3601 + -7651 + 6 * 685, 3994 + -3 * 3224 + 5933], _0x15a88d), _0x4fd8b8 += 3 * 1699 + 5 * -788 + -1147);
    } else Render.FilledRect(3586 + -125 * -47 + -9461 * 1, -627 + -7417 + 8044, Global.GetScreenSize()[-7 * -109 + -1 * -730 + -1493], Global.GetScreenSize()[71 * -84 + 5967 + -2] / (-1 * 5435 + -5869 * -1 + -432), [1895 * 4 + -2419 + -5161, -1 * 7574 + 6726 + -257 * -4, 6986 + -7400 + 669, 1047 + -1915 + 1123]), Render.FilledRect(-2 * -3517 + 3586 + -10620, Global.GetScreenSize()[-6496 + -2138 + 8635] / (3701 + -6143 + 47 * 52), Global.GetScreenSize()[2 * -473 + 3 * -1335 + -4951 * -1], Global.GetScreenSize()[8878 * 1 + -9751 + -19 * -46] / (8224 + 7744 + 1 * -15966), [-4096 + -3346 + -179 * -43, 10 * 556 + -5911 + -202 * -3, -6 * 1559 + -4 * 1576 + 15658, -227 * 4 + 142 * -56 + 9115]);
}

function weapon_fire() {}
Global.RegisterCallback('CreateMove', 'onCreateMove'), Global.RegisterCallback('Draw', 'onDraw'), Global.RegisterCallback('Unload', 'onUnload'), Global.RegisterCallback('weapon_fire', 'weapon_fire');