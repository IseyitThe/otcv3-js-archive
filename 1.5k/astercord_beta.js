var _0x2d2d = ['GetScreenSize', 'IsHotkeyActive', 'Misc', 'Script items', 'JAVASCRIPT', 'push', 'sharkhvh', 'SCOUT', 'GetValue', 'Rage', 'Minimum damage', 'AUTOSNIPER', 'Rage Anti-Aim', 'indexOf', 'GetUsername', 'Anti-Aim', 'Yaw offset', 'Jitter offset', 'SetRealOffset', 'SetOverride', 'toUpperCase', 'Exploits', 'g3sg1', 'CFlashbang', 'CSmokeGrenade', 'CDecoyGrenade', 'Fake angles', 'AWP', 'ssg 08', 'Line', 'abs', 'toFixed', 'min', 'GetFakeYaw', 'Selected arrow color', 'GetColor', '[astercord] Freestanding', 'GetClassName', 'ASTERCORD', 'SetValue', '[astercord] Hide real', 'DYNAMIC', 'FREESTAND', 'StringCustom', 'DEFAULT', 'dual berettas', 'usp s', 'CHEGrenade', 'CIncendiaryGrenade', 'CC4', 'DT (onshot)', 'DT (active weapon)', 'DMG', 'SAFE', 'HEAD', 'Backwards Hotkey', 'Tickcount', 'CWeaponAWP', 'GENERAL', 'Force safe point', '          Last update: 13/10/20', 'Left Hotkey', 'AddHotkey', 'AddColorPicker', 'AddCheckbox', '[astercord] Safe AWP', 'Minimum damage override', 'AddSliderInt', 'CreateMove', 'Safe_Head'];
var _0x24ed = function (_0x2d2df6, _0x24edec) {
    _0x2d2df6 = _0x2d2df6 - 0x0;
    var _0x1d6bc1 = _0x2d2d[_0x2d2df6];
    return _0x1d6bc1;
};
var _0x3a0e6d = _0x24ed,
    screen_size = Global[_0x3a0e6d('0x0')](),
    protectnames = new Array(),
    isLeftActive = UI[_0x3a0e6d('0x1')](_0x3a0e6d('0x2'), 'JAVASCRIPT', 'Script items', 'Left Hotkey'),
    isRightActive = UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', _0x3a0e6d('0x3'), 'Right Hotkey'),
    isBackwardsActive = UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Backwards Hotkey'),
    isForwardsActive = UI['IsHotkeyActive']('Misc', _0x3a0e6d('0x4'), 'Script items', 'Forwards Hotkey'),
    drawLeft = 0x0,
    drawRight = 0x0,
    prefer_safe_backup = ![];
	protectnames['push'](Cheat.GetUsername());
var heavy_cache = UI['GetValue']('Rage', 'HEAVY PISTOL', 'Targeting', 'Minimum damage'),
    scout_cache = UI['GetValue']('Rage', _0x3a0e6d('0x7'), 'Targeting', 'Minimum damage'),
    awp_cache = UI[_0x3a0e6d('0x8')](_0x3a0e6d('0x9'), 'AWP', 'Targeting', _0x3a0e6d('0xa')),
    auto_cache = UI[_0x3a0e6d('0x8')]('Rage', _0x3a0e6d('0xb'), 'Targeting', _0x3a0e6d('0xa')),
    weapon_name_ds = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']())),
    heavy_cache_ds = UI['GetValue']('Rage', 'HEAVY PISTOL', 'Targeting', _0x3a0e6d('0xa')),
    scout_cache_ds = UI['GetValue']('Rage', 'SCOUT', 'Targeting', 'Minimum damage'),
    auto_cache_ds = UI['GetValue']('Rage', 'AUTOSNIPER', 'Targeting', 'Minimum damage'),
    jitter_cache = UI['GetValue']('Anti-Aim', _0x3a0e6d('0xc'), 'Jitter offset'),
    yaw_cache = UI[_0x3a0e6d('0x8')]('Anti-Aim', _0x3a0e6d('0xc'), 'Yaw offset');
if (protectnames[_0x3a0e6d('0xd')](Cheat['GetUsername']()) !== -0x1) {
    function Safe_Head() {
        var _0x22da9b = _0x3a0e6d;
        localplayer_index = Entity['GetLocalPlayer'](), protectnames['indexOf'](Cheat[_0x22da9b('0xe')]()) !== -0x1 && (UI['GetValue']('Misc', 'JAVASCRIPT', _0x22da9b('0x3'), '[astercord] Dodge AA Mode') && UI['IsHotkeyActive'](_0x22da9b('0xf'), 'Extra', 'Slow walk') ? (UI['SetValue']('Anti-Aim', 'Rage Anti-Aim', _0x22da9b('0x10'), 0xa), UI['SetValue']('Anti-Aim', 'Rage Anti-Aim', _0x22da9b('0x11'), 0x0), AntiAim['SetOverride'](0x1), AntiAim['SetFakeOffset'](0x0), AntiAim[_0x22da9b('0x12')](-0x1e)) : (UI['SetValue'](_0x22da9b('0xf'), _0x22da9b('0xc'), 'Jitter offset', jitter_cache), AntiAim[_0x22da9b('0x13')](0x0)));
    }
}

function isActive(_0x1d6bc1) {
    var _0x271850 = _0x3a0e6d;
    return UI[_0x271850('0x1')]('Script items', _0x1d6bc1);
}

function setValue(_0x55f59f, _0x23fade) {
    var _0x12a98e = _0x3a0e6d;
    UI['SetValue']('Rage', _0x55f59f[_0x12a98e('0x14')](), 'Targeting', _0x12a98e('0xa'), _0x23fade);
}

function isHeavyPistol(_0x5e4edc) {
    if (_0x5e4edc == 'r8 revolver' || _0x5e4edc == 'desert eagle') return !![];
}

function isAutoSniper(_0x4bd23d) {
    if (_0x4bd23d == 'scar 20' || weapon_name == 'g3sg1') return !![];
}

function isDoubleTapActive() {
    var _0x4486dc = _0x3a0e6d,
        _0x584fa7 = UI['GetValue'](_0x4486dc('0x9'), _0x4486dc('0x15'), 'Doubletap'),
        _0x4bcc58 = UI['IsHotkeyActive']('Rage', 'Exploits', 'Doubletap');
    return _0x584fa7 && _0x4bcc58 && Exploit['GetCharge']() == 0x1;
}

function correctLBYMode() {
    var _0x196c1a = _0x3a0e6d;
    if (isDoubletap == 0x1 && isHideshots == 0x1) UI['SetValue'](_0x196c1a('0xf'), 'Fake angles', 'LBY mode', 0x1);
    else {
        if (isDoubletap == 0x1 && (weapon_name == 'five seven' || weapon_name == 'glock 18' || weapon_name == 'dual berettas' || weapon_name == 'usp s' || weapon_name == 'tec 9' || weapon_name == 'p250' || weapon_name == 'desert eagle' || weapon_name == _0x196c1a('0x16') || weapon_name == 'scar 20')) UI['SetValue']('Anti-Aim', 'Fake angles', 'LBY mode', 0x0);
        else {
            if (isDoubletap == 0x0) UI['SetValue'](_0x196c1a('0xf'), 'Fake angles', 'LBY mode', 0x1);
            else isDoubletap == 0x1 && (localplayer_classname == 'CKnife' || weapon_name == 'ssg 08' || weapon_name == 'awp' || weapon_name == 'r8 revolver' || localplayer_classname == 'CHEGrenade' || localplayer_classname == 'CMolotovGrenade' || localplayer_classname == 'CIncendiaryGrenade' || localplayer_classname == _0x196c1a('0x17') || localplayer_classname == _0x196c1a('0x18') || localplayer_classname == _0x196c1a('0x19') || localplayer_classname == 'CWeaponTaser' || localplayer_classname == 'CC4') && UI['SetValue']('Anti-Aim', _0x196c1a('0x1a'), 'LBY mode', 0x1);
        }
    }
}
var restore_values_ds = ![];

function delay_shot() {
    var _0x3eec1f = _0x3a0e6d;
    if (!isActive('[astercord] Delay shot')) {
        restore_values_ds ? (restore_values_ds = ![], setValue('HEAVY PISTOL', heavy_cache_ds), setValue('SCOUT', scout_cache_ds), setValue('AUTOSNIPER', auto_cache_ds)) : (heavy_cache_ds = UI['GetValue'](_0x3eec1f('0x9'), 'HEAVY PISTOL', 'Targeting', 'Minimum damage'), scout_cache_ds = UI['GetValue']('Rage', 'SCOUT', 'Targeting', 'Minimum damage'), auto_cache_ds = UI['GetValue']('Rage', 'AUTOSNIPER', 'Targeting', 'Minimum damage'));
        return;
    }
    restore_values_ds = !![], heavy_value_ds = 0x64, scout_value_ds = 0x64, auto_value_ds = 0x64, weapon_name_ds = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']())), isHeavyPistol(weapon_name_ds) && setValue('HEAVY PISTOL', heavy_value_ds), weapon_name_ds == 'ssg 08' && setValue('SCOUT', scout_value_ds), isAutoSniper(weapon_name_ds) && setValue(_0x3eec1f('0xb'), auto_value_ds);
}
var restore_values = ![];

function override_mindmg() {
    var _0x3cdc3d = _0x3a0e6d;
    if (!isActive('Minimum damage override')) {
        restore_values ? (restore_values = ![], setValue('HEAVY PISTOL', heavy_cache), setValue('SCOUT', scout_cache), setValue('AWP', awp_cache), setValue('AUTOSNIPER', auto_cache)) : (heavy_cache = UI[_0x3cdc3d('0x8')]('Rage', 'HEAVY PISTOL', 'Targeting', 'Minimum damage'), scout_cache = UI['GetValue']('Rage', _0x3cdc3d('0x7'), 'Targeting', 'Minimum damage'), awp_cache = UI['GetValue']('Rage', _0x3cdc3d('0x1b'), 'Targeting', 'Minimum damage'), auto_cache = UI['GetValue']('Rage', _0x3cdc3d('0xb'), 'Targeting', 'Minimum damage'));
        return;
    }
    restore_values = !![], heavy_value = UI['GetValue']('Script items', 'Heavy Pistol Mindmg'), scout_value = UI['GetValue']('Script items', 'Scout Mindmg'), awp_value = UI[_0x3cdc3d('0x8')]('Script items', 'AWP Mindmg'), auto_value = UI[_0x3cdc3d('0x8')](_0x3cdc3d('0x3'), 'Auto Mindmg'), weapon_name = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']())), isHeavyPistol(weapon_name) && setValue('HEAVY PISTOL', heavy_value), weapon_name == _0x3cdc3d('0x1c') && setValue('SCOUT', scout_value), weapon_name == 'awp' && setValue(_0x3cdc3d('0x1b'), awp_value), isAutoSniper(weapon_name) && setValue('AUTOSNIPER', auto_value);
}
const draw_triangle = function (_0x568dc9, _0x5472e9, _0xba6ba7, _0xa7cdc2, _0x1a40a4, _0x3bde0c) {
    var _0x3a6a8c = _0x3a0e6d;
    for (var _0x378c02 = 0x0; _0x378c02 < _0xba6ba7; _0x378c02++) {
        _0x3bde0c === 0x1 && Render[_0x3a6a8c('0x1d')](_0x568dc9 + _0x378c02 + 0x1 - _0xba6ba7 / 0x2, _0x5472e9 - _0x378c02 / _0x1a40a4 + 0x1, _0x568dc9 + _0x378c02 + 0x1 - _0xba6ba7 / 0x2, _0x5472e9 + _0x378c02 / _0x1a40a4 + 0x1, _0xa7cdc2), _0x3bde0c === 0x2 && Render['Line'](_0x568dc9 - _0x378c02 - 0x1 + _0xba6ba7 / 0x2, _0x5472e9 - _0x378c02 / _0x1a40a4 + 0x1, _0x568dc9 - _0x378c02 - 0x1 + _0xba6ba7 / 0x2, _0x5472e9 + _0x378c02 / _0x1a40a4 + 0x1, _0xa7cdc2);
    }
};

function adjust_angle(_0x558893) {
    if (_0x558893 < 0x0) _0x558893 = 0x5a + _0x558893 * -0x1;
    else _0x558893 > 0x0 && (_0x558893 = 0x5a - _0x558893);
    return _0x558893;
}
Render['Arc'] = function (_0x5c2a1d, _0x503f5f, _0x5adf46, _0x2c9f65, _0x26b88f, _0x5ee49e, _0x4cc384) {
    for (var _0x19b86b = _0x26b88f; _0x19b86b < _0x26b88f + _0x5ee49e; _0x19b86b++) {
        const _0x5b7a57 = _0x19b86b * Math['PI'] / 0xb4;
        Render['Line'](_0x5c2a1d + Math['cos'](_0x5b7a57) * _0x5adf46, _0x503f5f + Math['sin'](_0x5b7a57) * _0x5adf46, _0x5c2a1d + Math['cos'](_0x5b7a57) * _0x2c9f65, _0x503f5f + Math['sin'](_0x5b7a57) * _0x2c9f65, _0x4cc384);
    }
};
var delta = Math['min'](Math[_0x3a0e6d('0x1e')](RealYaw - FakeYaw) / 0x2, 0x3a)[_0x3a0e6d('0x1f')](0x1),
    safety = Math[_0x3a0e6d('0x20')](Math['round'](1.7 * Math['abs'](delta)), 0x64),
    RealYaw = Local['GetRealYaw'](),
    FakeYaw = Local[_0x3a0e6d('0x21')]();

function drawString() {
    var _0x1aa8e2 = _0x3a0e6d,
        _0x5089b6 = Local['GetViewAngles']()[0x1] - 0xb4,
        _0x3f1d06 = adjust_angle(Local['GetRealYaw']() - _0x5089b6),
        _0x5a93c3 = adjust_angle(Local[_0x1aa8e2('0x21')]() - _0x5089b6),
        _0x2cf94a = Exploit['GetCharge'](),
        _0x36baae = Local['GetRealYaw'](),
        _0x2a5111 = Local['GetFakeYaw'](),
        _0x1b6a39 = Math['min'](Math['abs'](_0x36baae - _0x2a5111) / 0x2, 0x3a)['toFixed'](0x1),
        _0x5dc18d = Math['min'](Math['round'](1.7 * Math['abs'](_0x1b6a39)), 0x64),
        _0x84d654 = Math[_0x1aa8e2('0x1e')](_0x1b6a39);
    const _0x5e98f1 = _0x1b6a39 / 0x3c;
    font = Render['AddFont']('Verdana', 0x7, 0x1f4), weapon_name = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']())), selectedcp = UI['GetColor']('Misc', _0x1aa8e2('0x4'), 'Script items', 'Selected arrow color'), selected_red = selectedcp[0x0], selected_green = selectedcp[0x1], selected_blue = selectedcp[0x2], selected_alpha = selectedcp[0x3];
    var _0x46751e = UI['GetColor']('Misc', 'JAVASCRIPT', 'Script items', _0x1aa8e2('0x22')),
        _0x5bcba4 = UI[_0x1aa8e2('0x23')]('Misc', _0x1aa8e2('0x4'), 'Script items', 'Arrow color');
    const _0xf577ea = Render['GetScreenSize']()[0x0],
        _0x173766 = Render['GetScreenSize']()[0x1],
        _0x387948 = Math['sin'](Math[_0x1aa8e2('0x1e')](-Math['PI'] + Globals['Curtime']() * (0x1 / 0.75) % (Math['PI'] * 0x2))) * 0xff;
    isHideshots = UI['IsHotkeyActive']('Rage', 'Exploits', 'Hide shots'), isFakeduck = UI['IsHotkeyActive']('Anti-Aim', 'Extra', 'Fake duck'), isDoubletap = UI[_0x1aa8e2('0x1')]('Rage', 'Exploits', 'Doubletap'), isDmgActive = UI['IsHotkeyActive'](_0x1aa8e2('0x2'), 'JAVASCRIPT', 'Script items', 'Minimum damage override'), isLbyMode = UI['GetValue']('Anti-Aim', 'Fake angles', 'LBY mode'), isSafepoints = UI['IsHotkeyActive'](_0x1aa8e2('0x9'), 'GENERAL', 'General', 'Force safe point'), isDelayshot = UI[_0x1aa8e2('0x1')](_0x1aa8e2('0x2'), 'JAVASCRIPT', 'Script items', '[astercord] Delay shot'), isBaim = UI[_0x1aa8e2('0x1')]('Rage', 'GENERAL', 'General', 'Force body aim'), isSlowwalk = UI['IsHotkeyActive']('Anti-Aim', 'Extra', 'Slow walk'), isFreestand = UI[_0x1aa8e2('0x1')]('Misc', 'JAVASCRIPT', 'Script items', '[astercord] Hide real'), isInverter = UI[_0x1aa8e2('0x1')]('Anti-Aim', _0x1aa8e2('0x1a'), 'Inverter'), isFreestandBody = UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', _0x1aa8e2('0x24')), localplayer_index = Entity['GetLocalPlayer'](), localplayer_alive = Entity['IsAlive'](localplayer_index), localplayer_weapon = Entity['GetWeapon'](localplayer_index), localplayer_classname = Entity[_0x1aa8e2('0x25')](localplayer_weapon);
    if (protectnames[_0x1aa8e2('0xd')](Cheat[_0x1aa8e2('0xe')]()) !== -0x1) {
        if (localplayer_alive == !![]) {
            Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 + 0x26, 0x1, 'ASTERCORD', [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 + 0x25, 0x1, _0x1aa8e2('0x26'), [0xff, 0xff, 0xff, 0xff], font), Render['Arc'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2, 0x11, 0x15, _0x3f1d06, 0x32, [0xa, 0xa, 0xa, 0x46]), Render['Arc'](screen_size[0x0] / 0x2 - 0x1, screen_size[0x1] / 0x2, 0x11, 0x15, _0x3f1d06, 0x32, [0xc0 - _0x84d654 * 0x47 / 0x3c, 0x20 + _0x84d654 * 0x92 / 0x3c, 0x1c, 0xc8]);
            var _0x27b357 = _0x1b6a39['toString'](),
                _0x1450ce = Render['TextSizeCustom'](_0x27b357, font)[0x0] + 0x8;
            Render['Arc'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2, 0x7, 0xb, 0x0, 0x168, [0xa, 0xa, 0xa, 0x46]);
            if (isInverter == 0x1) Render['Arc'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2, 0x8, 0xb, -0x5a, 0xb4, [0xc0 - _0x84d654 * 0x47 / 0x3c, 0x20 + _0x84d654 * 0x92 / 0x3c, 0x1c, 0xc8]);
            else isInverter == 0x0 && Render['Arc'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2, 0x8, 0xb, 0x5a, 0xb4, [0xc0 - _0x84d654 * 0x47 / 0x3c, 0x20 + _0x84d654 * 0x92 / 0x3c, 0x1c, 0xc8]);
            if (isFreestand == 0x1 && isFreestandBody == 0x0) UI[_0x1aa8e2('0x27')]('Misc', _0x1aa8e2('0x4'), 'Script items', _0x1aa8e2('0x28'), !![]), UI['SetValue']('Anti-Aim', 'Rage Anti-Aim', 'Auto direction', ![]), Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 + 0x25 + 0x14, 0x1, _0x1aa8e2('0x29'), [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 + 0x24 + 0x14, 0x1, 'DYNAMIC', [0x9e, 0x81, 0xef, 0xff], font);
            else {
                if (isFreestand == 0x0 && isFreestandBody == 0x1) UI[_0x1aa8e2('0x27')]('Anti-Aim', _0x1aa8e2('0x1a'), 'Hide real angle', ![]), UI[_0x1aa8e2('0x27')]('Anti-Aim', _0x1aa8e2('0xc'), 'Auto direction', !![]), Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 + 0x25 + 0x14, 0x1, 'FREESTAND', [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 + 0x24 + 0x14, 0x1, _0x1aa8e2('0x2a'), [0x9e, 0x81, 0xef, 0xff], font);
                else {
                    if (isFreestand == 0x1 && isFreestandBody == 0x1) UI['SetValue']('Anti-Aim', 'Fake angles', 'Hide real angle', ![]), UI[_0x1aa8e2('0x27')]('Anti-Aim', _0x1aa8e2('0xc'), 'Auto direction', !![]), Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 + 0x25 + 0x14, 0x1, 'FREESTAND', [0x0, 0x0, 0x0, 0xff], font), Render[_0x1aa8e2('0x2b')](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 + 0x24 + 0x14, 0x1, 'FREESTAND', [0x9e, 0x81, 0xef, 0xff], font);
                    else isFreestand == 0x0 && isFreestandBody == 0x0 && (UI['SetValue'](_0x1aa8e2('0xf'), _0x1aa8e2('0x1a'), 'Hide real angle', ![]), UI[_0x1aa8e2('0x27')]('Anti-Aim', 'Rage Anti-Aim', 'Auto direction', ![]), Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 + 0x25 + 0x14, 0x1, 'DEFAULT', [0x0, 0x0, 0x0, 0xff], font), Render[_0x1aa8e2('0x2b')](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 + 0x24 + 0x14, 0x1, _0x1aa8e2('0x2c'), [0x9e, 0x81, 0xef, 0xff], font));
                }
            }
            if (isFakeduck && (localplayer_classname == 'CKnife' || weapon_name == 'five seven' || weapon_name == 'glock 18' || weapon_name == _0x1aa8e2('0x2d') || weapon_name == _0x1aa8e2('0x2e') || weapon_name == 'tec 9' || weapon_name == 'p250' || weapon_name == 'desert eagle' || weapon_name == _0x1aa8e2('0x16') || weapon_name == 'scar 20' || weapon_name == 'ssg 08' || weapon_name == 'awp' || weapon_name == 'r8 revolver' || localplayer_classname == _0x1aa8e2('0x2f') || localplayer_classname == 'CMolotovGrenade' || localplayer_classname == _0x1aa8e2('0x30') || localplayer_classname == 'CFlashbang' || localplayer_classname == 'CSmokeGrenade' || localplayer_classname == 'CDecoyGrenade' || localplayer_classname == 'CWeaponTaser' || localplayer_classname == _0x1aa8e2('0x31'))) UI['SetValue'](_0x1aa8e2('0x9'), 'GENERAL', 'Exploits', 'Doubletap', ![]), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x2e + 0xa + 0x14, 0x1, 'DT (fakeduck)', [0x0, 0x0, 0x0, _0x387948], font), Render[_0x1aa8e2('0x2b')](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x2d + 0xa + 0x14, 0x1, 'DT (fakeduck)', [0xff, 0x0, 0x0, _0x387948], font);
            else {
                if (isDoubletap == 0x1 && isHideshots == 0x1) UI['SetValue']('Rage', 'GENERAL', 'Exploits', 'Doubletap', ![]), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x2e + 0xa + 0x14, 0x1, _0x1aa8e2('0x32'), [0x0, 0x0, 0x0, _0x387948], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x2d + 0xa + 0x14, 0x1, 'DT (onshot)', [0xff, 0x0, 0x0, _0x387948], font);
                else {
                    if (isDoubletap == 0x0) UI['SetValue']('Rage', 'GENERAL', 'Exploits', 'Doubletap', !![]), Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x2e + 0xa + 0x14, 0x1, 'DT', [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x2d + 0xa + 0x14, 0x1, 'DT', [0xff, 0x0, 0x0, 0xff], font);
                    else {
                        if (isDoubletap == 0x1 && (localplayer_classname == 'CKnife' || weapon_name == 'ssg 08' || weapon_name == 'awp' || weapon_name == 'r8 revolver' || localplayer_classname == 'CHEGrenade' || localplayer_classname == 'CMolotovGrenade' || localplayer_classname == _0x1aa8e2('0x30') || localplayer_classname == 'CFlashbang' || localplayer_classname == 'CSmokeGrenade' || localplayer_classname == 'CDecoyGrenade' || localplayer_classname == 'CWeaponTaser' || localplayer_classname == _0x1aa8e2('0x31'))) UI['SetValue']('Rage', 'GENERAL', 'Exploits', 'Doubletap', ![]), Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x2e + 0xa + 0x14, 0x1, _0x1aa8e2('0x33'), [0x0, 0x0, 0x0, _0x387948], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x2d + 0xa + 0x14, 0x1, 'DT (active weapon)', [0xff, 0x0, 0x0, _0x387948], font);
                        else {
                            if (isDoubletap == 0x1 && weapon_name == 'five seven' || weapon_name == 'glock 18' || weapon_name == 'dual berettas' || weapon_name == 'usp s' || weapon_name == 'tec 9' || weapon_name == 'p250' || weapon_name == 'desert eagle' || weapon_name == _0x1aa8e2('0x16') || weapon_name == 'scar 20') {
                                UI['SetValue']('Rage', 'GENERAL', _0x1aa8e2('0x15'), 'Doubletap', !![]), curtime = Globals['Curtime']();
                                if (_0x2cf94a < 0x1) Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x2e + 0xa + 0x14, 0x1, 'DT', [0x0, 0x0, 0x0, 0xff], font), Render[_0x1aa8e2('0x2b')](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x2d + 0xa + 0x14, 0x1, 'DT', [0xff, 0x0, 0x0, 0xff], font);
                                else _0x2cf94a >= 0x1 && (Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x2e + 0xa + 0x14, 0x1, 'DT', [0x0, 0x0, 0x0, 0xff], font), Render[_0x1aa8e2('0x2b')](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x2d + 0xa + 0x14, 0x1, 'DT', [0x24, 0xff, 0x0, 0xff], font), shotsfired = 0x0);
                            }
                        }
                    }
                }
            }
            if (isDmgActive == 0x1 && isHideshots == 0x1) Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x4c + 0xa + 0x14, 0x1, 'DMG', [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x4b + 0xa + 0x14, 0x1, 'DMG', [0xff, 0xff, 0xff, 0xff], font);
            else isHideshots == 0x0 && isDmgActive == 0x1 && (Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x3d + 0xa + 0x14, 0x1, _0x1aa8e2('0x34'), [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x3c + 0xa + 0x14, 0x1, _0x1aa8e2('0x34'), [0xff, 0xff, 0xff, 0xff], font));
            isHideshots && (Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x3d + 0xa + 0x14, 0x1, 'ONSHOT', [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x3c + 0xa + 0x14, 0x1, 'ONSHOT', [0xc8, 0xff, 0x0, 0xff], font));
            if (isSafepoints == 0x1 && isDmgActive == 0x0 && isHideshots == 0x0) Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x3d + 0xa + 0x14, 0x1, 'SAFE', [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x3c + 0xa + 0x14, 0x1, 'SAFE', [0x24, 0xff, 0x0, 0xff], font);
            else {
                if (isSafepoints == 0x1 && isDmgActive == 0x0 && isHideshots == 0x1) Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x4c + 0xa + 0x14, 0x1, 'SAFE', [0x0, 0x0, 0x0, 0xff], font), Render[_0x1aa8e2('0x2b')](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x4b + 0xa + 0x14, 0x1, 'SAFE', [0x24, 0xff, 0x0, 0xff], font);
                else {
                    if (isSafepoints == 0x1 && isDmgActive == 0x1 && isHideshots == 0x0) Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x4c + 0xa + 0x14, 0x1, 'SAFE', [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x4b + 0xa + 0x14, 0x1, 'SAFE', [0x24, 0xff, 0x0, 0xff], font);
                    else isSafepoints == 0x1 && isDmgActive == 0x1 && isHideshots == 0x1 && (Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x5b + 0xa + 0x14, 0x1, 'SAFE', [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x5a + 0xa + 0x14, 0x1, _0x1aa8e2('0x35'), [0x24, 0xff, 0x0, 0xff], font));
                }
            }
            if (isDelayshot == 0x1 && isSafepoints == 0x0 && isDmgActive == 0x0 && isHideshots == 0x0) Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x3d + 0xa + 0x14, 0x1, _0x1aa8e2('0x36'), [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x3c + 0xa + 0x14, 0x1, _0x1aa8e2('0x36'), [0xff, 0xff, 0xff, 0xff], font);
            else {
                if (isDelayshot == 0x1 && isSafepoints == 0x0 && isDmgActive == 0x0 && isHideshots == 0x1) Render[_0x1aa8e2('0x2b')](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x4c + 0xa + 0x14, 0x1, 'HEAD', [0x0, 0x0, 0x0, 0xff], font), Render[_0x1aa8e2('0x2b')](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x4b + 0xa + 0x14, 0x1, 'HEAD', [0xff, 0xff, 0xff, 0xff], font);
                else {
                    if (isDelayshot == 0x1 && isSafepoints == 0x0 && isDmgActive == 0x1 && isHideshots == 0x0) Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x4c + 0xa + 0x14, 0x1, _0x1aa8e2('0x36'), [0x0, 0x0, 0x0, 0xff], font), Render[_0x1aa8e2('0x2b')](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x4b + 0xa + 0x14, 0x1, _0x1aa8e2('0x36'), [0xff, 0xff, 0xff, 0xff], font);
                    else {
                        if (isDelayshot == 0x1 && isSafepoints == 0x1 && isDmgActive == 0x0 && isHideshots == 0x0) Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x4c + 0xa + 0x14, 0x1, 'HEAD', [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x4b + 0xa + 0x14, 0x1, 'HEAD', [0xff, 0xff, 0xff, 0xff], font);
                        else {
                            if (isDelayshot == 0x1 && isSafepoints == 0x0 && isDmgActive == 0x1 && isHideshots == 0x1) Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x5b + 0xa + 0x14, 0x1, 'HEAD', [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x5a + 0xa + 0x14, 0x1, 'HEAD', [0xff, 0xff, 0xff, 0xff], font);
                            else {
                                if (isDelayshot == 0x1 && isSafepoints == 0x1 && isDmgActive == 0x0 && isHideshots == 0x1) Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x5b + 0xa + 0x14, 0x1, 'HEAD', [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x5a + 0xa + 0x14, 0x1, 'HEAD', [0xff, 0xff, 0xff, 0xff], font);
                                else {
                                    if (isDelayshot == 0x1 && isSafepoints == 0x1 && isDmgActive == 0x1 && isHideshots == 0x0) Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x5b + 0xa + 0x14, 0x1, 'HEAD', [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x5a + 0xa + 0x14, 0x1, _0x1aa8e2('0x36'), [0xff, 0xff, 0xff, 0xff], font);
                                    else isDelayshot == 0x1 && isSafepoints == 0x1 && isDmgActive == 0x1 && isHideshots == 0x1 && (Render['StringCustom'](screen_size[0x0] / 0x2 + 0x1, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x6a + 0xa + 0x14, 0x1, _0x1aa8e2('0x36'), [0x0, 0x0, 0x0, 0xff], font), Render['StringCustom'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 - 0x5 - 0x5 + 0x69 + 0xa + 0x14, 0x1, _0x1aa8e2('0x36'), [0xff, 0xff, 0xff, 0xff], font));
                                }
                            }
                        }
                    }
                }
            }
            draw_triangle(_0xf577ea / 0x2 - 0x4b, _0x173766 / 0x2, 0x14, _0x5bcba4, 0x2, 0x1), draw_triangle(_0xf577ea / 0x2 + 0x4b, _0x173766 / 0x2, 0x14, _0x5bcba4, 0x2, 0x2), correctLBYMode(), drawLeft == 0x1 && draw_triangle(_0xf577ea / 0x2 - 0x4b, _0x173766 / 0x2, 0x14, [selected_red, selected_green, selected_blue, _0x387948], 0x2, 0x1), drawRight == 0x1 && draw_triangle(_0xf577ea / 0x2 + 0x4b, _0x173766 / 0x2, 0x14, [selected_red, selected_green, selected_blue, _0x387948], 0x2, 0x2);
        }
    }
}

function hide_real() {
    var _0x36cc52 = _0x3a0e6d;
    if (isFreestand == 0x1) UI['SetValue'](_0x36cc52('0xf'), 'Fake angles', 'Hide real angle', !![]);
    else isFreestand == 0x0 && UI['SetValue']('Anti-Aim', 'Fake angles', 'Hide real angle', ![]);
}
var oldTick = 0x0,
    lastPressed = 0x0,
    isHideRealActive = ![],
    leftWasPressed = ![],
    rightWasPressed = ![],
    backWasPressed = ![],
    upWasPressed = ![];

function onCreateMove() {
    var _0x1b9cc8 = _0x3a0e6d;
    protectnames['indexOf'](Cheat['GetUsername']()) !== -0x1 && (hide_real(), override_mindmg(), delay_shot(), safeAWP());
    isLeftActive = UI['IsHotkeyActive'](_0x1b9cc8('0x2'), 'JAVASCRIPT', _0x1b9cc8('0x3'), 'Left Hotkey'), isRightActive = UI['IsHotkeyActive']('Misc', _0x1b9cc8('0x4'), 'Script items', 'Right Hotkey'), isBackwardsActive = UI['IsHotkeyActive']('Misc', _0x1b9cc8('0x4'), 'Script items', _0x1b9cc8('0x37'));
    if (isLeftActive && leftWasPressed == ![]) lastPressed = Global['Tickcount'](), isHideRealActive = ![], leftWasPressed = !![], backWasPressed = ![], rightWasPressed = ![], upWasPressed = ![], drawLeft = 0x1, drawBack = 0x0, drawRight = 0x0, UI['SetValue']('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', -0x5a), UI['SetValue']('Anti-Aim', 'Fake Angles', 'Hide real angle', ![]);
    else isLeftActive && leftWasPressed == !![] && Global['Tickcount']() > lastPressed + 0x10 && (isHideRealActive = !![], oldTick = Global[_0x1b9cc8('0x38')]());
    if (isRightActive && rightWasPressed == ![]) lastPressed = Global[_0x1b9cc8('0x38')](), isHideRealActive = ![], backWasPressed = ![], leftWasPressed = ![], rightWasPressed = !![], upWasPressed = ![], drawLeft = 0x0, drawBack = 0x0, drawRight = 0x1, UI[_0x1b9cc8('0x27')]('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 0x5a), UI['SetValue'](_0x1b9cc8('0xf'), _0x1b9cc8('0x1a'), 'Hide real angle', ![]);
    else isRightActive && rightWasPressed == !![] && Global['Tickcount']() > lastPressed + 0x10 && (isHideRealActive = !![], oldTick = Global['Tickcount']());
    if (isBackwardsActive && backWasPressed == ![] && Global['Tickcount']() > lastPressed + 0x10) lastPressed = Global[_0x1b9cc8('0x38')](), isHideRealActive = ![], backWasPressed = !![], rightWasPressed = ![], leftWasPressed = ![], upWasPressed = ![], drawLeft = 0x0, drawBack = 0x1, drawRight = 0x0, UI['SetValue']('Anti-Aim', _0x1b9cc8('0xc'), _0x1b9cc8('0x10'), 0x0), UI['SetValue']('Anti-Aim', 'Fake angles', 'Hide real angle', ![]);
    else isBackwardsActive && backWasPressed == !![] && Global['Tickcount']() > lastPressed + 0x10 && (isHideRealActive = !![], oldTick = Global['Tickcount']());
    isHideRealActive && (Global['Tickcount']() > oldTick + 0x10 && (backWasPressed = ![], rightWasPressed = ![], leftWasPressed = ![], upWasPressed = ![], oldTick = Global['Tickcount']()), drawLeft = 0x0, drawBack = 0x0, drawRight = 0x0, UI['SetValue']('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', -0xa), UI[_0x1b9cc8('0x27')]('Anti-Aim', 'Fake angles', 'Hide real angle', ![])), UI['SetValue'](_0x1b9cc8('0xf'), 'Rage Anti-Aim', 'At targets', isHideRealActive ? !![] : ![]);
}

function safeAWP() {
    var _0x539183 = _0x3a0e6d;
    if (UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', '[astercord] Safe AWP') && localplayer_classname == _0x539183('0x39')) is_force_safe_point = UI['IsHotkeyActive']('Rage', 'GENERAL', 'General', 'Force safe point'), !is_force_safe_point && (UI['ToggleHotkey'](_0x539183('0x9'), _0x539183('0x3a'), 'General', _0x539183('0x3b')), prefer_safe_backup = !![]);
    else prefer_safe_backup && (UI['ToggleHotkey']('Rage', 'GENERAL', 'General', 'Force safe point'), prefer_safe_backup = ![]);
}

function setup1() {
    var _0x394796 = _0x3a0e6d;
    UI['AddLabel']('-------------------------------------'), UI['AddLabel']('                astercord.js'), UI['AddLabel']( 'For Any questions - asterope#9226'), UI['AddLabel'](_0x394796('0x3c')), UI['AddLabel']('-------------------------------------'), UI['AddLabel']('         Anti-aim and indicators            '), Cheat['Print']('astercord.js finished setup. U are verified.');
}

function setup2() {
    UI['AddLabel']('                 Other stuff            ');
}

function Main() {
    var _0x59c8b1 = _0x3a0e6d;
    protectnames['indexOf'](Cheat['GetUsername']()) !== -0x1 && (setup1(), UI['AddHotkey']('[astercord] Freestanding'), UI['AddHotkey'](_0x59c8b1('0x3d')), UI[_0x59c8b1('0x3e')]('Right Hotkey'), UI[_0x59c8b1('0x3e')]('Backwards Hotkey'), UI['AddHotkey']('Forwards Hotkey'), UI['AddColorPicker']('Selected arrow color'), UI[_0x59c8b1('0x3f')]('Arrow color'), UI['AddHotkey']('[astercord] Hide real'), UI['AddCheckbox']('[astercord] Dodge AA Mode'), setup2(), UI[_0x59c8b1('0x40')](_0x59c8b1('0x41')), UI['AddHotkey']('[astercord] Delay shot'), UI['AddHotkey'](_0x59c8b1('0x42')), UI[_0x59c8b1('0x43')]('Heavy Pistol Mindmg', 0x0, 0x82), UI['AddSliderInt']('Scout Mindmg', 0x0, 0x82), UI['AddSliderInt']('AWP Mindmg', 0x0, 0x82), UI[_0x59c8b1('0x43')]('Auto Mindmg', 0x0, 0x82), Global['RegisterCallback']('Draw', 'drawString'), Global['RegisterCallback']('CreateMove', 'onCreateMove'), Cheat['RegisterCallback'](_0x59c8b1('0x44'), _0x59c8b1('0x45')));
}
protectnames[_0x3a0e6d('0xd')](Cheat['GetUsername']()) !== -0x1 && Main();




/////////////////////////////




UI.AddDropdown( "Clantag", [ "Disabled", "astercord"] );
UI.AddSliderInt( "Custom ClanTag Speed", 4.5, 4.5 );
var lasttime = 0;
function onRender( )
{
var tag = UI.GetValue("Clantag" );
var speed = UI.GetValue("Custom ClanTag Speed" );
var time = parseInt((Globals.Curtime() * speed))
if (time != lasttime)
{
if(tag == 0) { Local.SetClanTag(""); }
if(tag == 1)
{
switch((time) % 30)
{

case 0:  Local.SetClanTag(" |a"); break; 
case 1:  Local.SetClanTag(" <as"); break; 
case 2:  Local.SetClanTag(" ast"); break; 
case 3:  Local.SetClanTag(" aste"); break; 
case 4:  Local.SetClanTag(" aster"); break; 
case 5:  Local.SetClanTag(" asterc"); break; 
case 6:  Local.SetClanTag(" asterco"); break; 
case 7:  Local.SetClanTag(" astercor"); break; 
case 8:  Local.SetClanTag(" astercord "); break; 
case 9:  Local.SetClanTag(" astercor "); break; 
case 10: Local.SetClanTag(" asterc "); break; 
case 11: Local.SetClanTag(" aster "); break; 
case 12: Local.SetClanTag(" aste "); break; 
case 13: Local.SetClanTag(" ast "); break; 
case 14: Local.SetClanTag(" as< "); break; 
case 15: Local.SetClanTag(" a| "); break; 
case 16: Local.SetClanTag("  "); break; 
case 17: Local.SetClanTag(" |a "); break; 
case 18: Local.SetClanTag(" <as "); break; 
case 19: Local.SetClanTag(" ast "); break; 
case 20: Local.SetClanTag(" aste "); break; 
case 21: Local.SetClanTag(" aster "); break; 
case 22: Local.SetClanTag(" asterc "); break; 
case 23: Local.SetClanTag(" asterco "); break; 
case 24: Local.SetClanTag(" astercor "); break; 
case 25: Local.SetClanTag(" astercord "); break; 
case 26: Local.SetClanTag(" astercor "); break; 
case 27: Local.SetClanTag(" astero "); break; 
case 28: Local.SetClanTag(" aster "); break; 
case 29: Local.SetClanTag(" aste"); break; 
case 13: Local.SetClanTag(" ast "); break; 
case 14: Local.SetClanTag(" as< "); break; 
case 15: Local.SetClanTag(" a| "); break; 
case 16: Local.SetClanTag("  "); break; 




}
}
}
lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");






//////////////////////////





UI.AddCheckbox("animfucker");
UI.AddSliderInt("animfucker speed", 0, 10);
var old_tick_count = 0;
function draw()
{
    if (UI.GetValue("Script items", "animfucker") && (Globals.Tickcount() - old_tick_count) > (UI.GetValue("Script items", "animfucker speed")))
    {
        if (UI.GetValue("Misc", "GENERAL", "Movement", "Slide walk"))
            UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", 0);
        else
            UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", 1);
        old_tick_count = Globals.Tickcount();
    }
}
Cheat.RegisterCallback("Draw", "draw");






UI.AddLabel("             Astercord Hitlogs");
UI.AddCheckbox( "Enable chat logging" );

hitboxes = [
    'generic',
    'head',
    'chest',
    'stomach',
    'left arm',
    'right arm',
    'left leg',
    'right leg',
    '?'
];
var scriptitems = ("Misc", "JAVASCRIPT", "Script items");
var shots = 0;
var predicthc = 0;
var safety = 0;
var hitboxName = "";
var choked = 0;
var exploit = 0;
var logs = [];
var logsct = [];
var logsalpha = [];
function getHitboxName(index)
{
    switch (index)
    {
        case 0:
            hitboxName = "head";
            break;
        case 1:
            hitboxName = "head";
            break;
        case 2:
            hitboxName = "stomach";
            break;
        case 3:
            hitboxName = "stomach";
            break;
        case 4:
            hitboxName = "stomach";
            break;
        case 5:
            hitboxName = "chest";
            break;
        case 6:
            hitboxName = "chest";
            break;
        case 7:
            hitboxName = "left leg";
            break;
        case 8:
            hitboxName = "right leg";
            break;
        case 9:
            hitboxName = "left leg";
            break;
        case 10:
            hitboxName = "right leg";
            break;
        case 11:
            hitboxName = "left leg";
            break;
        case 12:
            hitboxName = "right leg";
            break;
        case 13:
            hitboxName = "left arm";
            break;
        case 14:
            hitboxName = "right arm";
            break;
        case 15:
            hitboxName = "left arm";
            break;
        case 16:
            hitboxName = "left arm";
            break;
        case 17:
            hitboxName = "right arm";
            break;
        case 18:
            hitboxName = "right arm";
            break;
        default:
            hitboxName = "body";
    }
    return hitboxName;
}
function HitgroupName(index) {
    return hitboxes[index] || 'body';
}

var target = -1;
var shots_fired = 0;
var hits = 0;
var lastUpdate = 0;
var logged = false;

function ragebot_fire() {
	predicthc = Event.GetInt("hitchance");
	safety = Event.GetInt("safepoint");
	hitboxName = getHitboxName(Event.GetInt("hitbox"));
	exploit = (Event.GetInt("exploit")+1).toString();
  target = Event.GetInt("target_index");
  shots_fired++;
  logged = false;
  lastUpdate = Globals.Curtime();
}

function hitlog() {
    var hit = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    if (attacker == Entity.GetLocalPlayer() && hit == target) hits++;

    var hittype = "Hit ";
    me = Entity.GetLocalPlayer();
    hitbox = Event.GetInt('hitgroup');
    target_damage = Event.GetInt("dmg_health");
    target_health = Event.GetInt("health");
    victim = Event.GetInt('userid');
    attacker = Event.GetInt('attacker');
    weapon = Event.GetString('weapon');
    victimIndex = Entity.GetEntityFromUserID(victim);
    attackerIndex = Entity.GetEntityFromUserID(attacker);
    name = Entity.GetName(victimIndex);
  	var simtime = Globals.Tickcount() % 17;

    var flags = "";

    if (exploit == 2)
      flags += "T";

    flags += "B";

    if (hitbox == 1)
      flags += "H";

  	if (safety == 1) {
  		safety = "true";
  	}
  	else {
  		safety = "false";
  	}

    if (weapon == "hegrenade")
      hittype = "Naded ";
    else if (weapon == "inferno")
      hittype = "Burned ";
    else if (weapon == "knife")
      hittype = "Knifed ";

    if (me == attackerIndex && me != victimIndex) {
		Cheat.PrintColor([89, 119, 239, 255], "[astercord] ");
    if (hittype == "Hit ") {
        if (UI.GetValue("Script items", "Enable chat logging")) {
            Cheat.PrintChat(" \x08[\x0castercord\x08] [\x0c"+shots.toString()+"\x08] "+hittype+name+"'s \x10"+HitgroupName(hitbox)+"\x08 for \x07"+target_damage.toString()+"\x08 ("+target_health.toString()+" remaining) aimed=\x10"+hitboxName+"\x08("+predicthc.toString()+"%%) safety=\x03"+safety+"\x08 (\x10"+flags+"\x08) (\x10"+simtime+"\x08:\x10"+exploit+"\x08)\n");
        }
      Cheat.Print("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining) aimed="+hitboxName+"("+predicthc.toString()+"%%) safety="+safety+" ("+flags+") ("+simtime+":"+exploit+")\n");
  		logs.push("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining) aimed="+hitboxName+"("+predicthc.toString()+"%%) safety="+safety+" ("+flags+") ("+simtime+":"+exploit+")");
    }
    else {
      Cheat.Print("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining) \n");
  		logs.push("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining)");
    }

		logsct.push(Globals.Curtime());
		logsalpha.push(255);
	}

  if (shots == 99)
    shots = 0;
  else
    shots++;

}

function removelogs() {
	if (logs.length > 6) {
		logs.shift();
		logsct.shift();
		logsalpha.shift();
	}

	if (logsct[0] + 6.5 < Globals.Curtime()) {
		logsalpha[0] -= Globals.Frametime() * 600;
		if (logsalpha[0] < 0) {
			logs.shift();
			logsct.shift();
			logsalpha.shift();
		}
	}
}

function item_purchase() {
	Cheat.PrintColor([89, 119, 239, 255], "[astercord] ");
	Cheat.Print(Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))+" bought "+Event.GetString("weapon")+"\n");
	logs.push(Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))+" bought "+Event.GetString("weapon")+"");
	logsct.push(Globals.Curtime());
	logsalpha.push(255);
}

function onDraw() {
    if (!World.GetServerString()) return;
    var font = Render.AddFont("Lucida Console", 8, 0);


	for (i = 0; i < logs.length; i++) {
        Render.StringCustom(4, 4 + 13*i, 0, logs[i], [0, 0, 0, logsalpha[i]], font);
		Render.StringCustom(3, 3 + 13*i, 0, logs[i], [255, 255, 255, logsalpha[i]], font);
    }

    if (shots_fired > hits && (Globals.Curtime() - lastUpdate > 0.33)) {
      if (Globals.Curtime() - lastUpdate > 1) {
        shots_fired = 0;
        hits = 0;
      }
      if (!logged) {
        var simtime = Globals.Tickcount() % 16;
        logged = true;
        var issafe = "true";
        var reason = "?";
        if (safety == 0) {
          issafe = "false";
        }

		if (Entity.IsAlive(target) == false)
			reason = "death";
		else if (Entity.IsAlive(Entity.GetLocalPlayer()) == false)
			reason = "dead";
        else if (safety == true && predicthc < 76)
            reason = "spread";
        else if (safety == true && predicthc > 76)
            reason = "prediction error";

        var flags = "";

        if (exploit == 2)
          flags += "T";

          flags += "B";

      }
    }
}

function main() {
	Global.RegisterCallback("ragebot_fire", "ragebot_fire");
	Global.RegisterCallback("item_purchase", "item_purchase");
  Global.RegisterCallback("player_hurt", "hitlog");
	Global.RegisterCallback("Draw", "onDraw");
	Global.RegisterCallback("Draw", "removelogs");
}

main();





UI.AddLabel( " astercord DT v1 [debug] " );


UI.AddSliderInt("Double tap speed", 0, 3);

function can_shift_shot(ticks_to_shift) {
    var me = Entity.GetLocalPlayer();
    var wpn = Entity.GetWeapon(me);

    if (me == null || wpn == null)
        return false;

    var tickbase = Entity.GetProp(me, "CCSPlayer", "m_nTickBase");
    var curtime = Globals.TickInterval() * (tickbase-ticks_to_shift)

    if (curtime < Entity.GetProp(me, "CCSPlayer", "m_flNextAttack"))
        return false;

    if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
        return false;

    return true;
}

function _TBC_CREATE_MOVE() {
    var is_charged = Exploit.GetCharge()
    var reserve = UI.GetValue("Misc", "JAVASCRIPT", "Double tap speed")

    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()

    if (can_shift_shot(14) && is_charged != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    }

    Exploit.OverrideTolerance(reserve);
    Exploit.OverrideShift(14-reserve);
}

function _TBC_UNLOAD() {
    Exploit.EnableRecharge();
}

Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");



function vectorangles(forward){
    var angles = []
    if(forward[1] == 0 && forward[0] == 0){
        angles[0] = forward[2] > 0 ? 270 : 90
        angles[1] = 0
    }
    else{
        angles[0] = Math.atan2(-forward[2], Math.sqrt(forward[0] * forward[0] + forward[1]*forward[1])) * -180 / Math.PI
        angles[1] = Math.atan2(forward[1],forward[0]) * 180 / Math.PI
        if(angles[1] > 90)
            angles[1] -= 180
        else if(angles[1] < 90)
            angles[1] += 180
        else if(angles[1] == 90)
            angles[1] = 0
    }
    return angles
}
function anglevectors(angles){
    var sy = Math.sin(angles[1] * 180 / Math.PI)
    var cy = Math.cos(angles[1] * 180 / Math.PI)
    var sp = Math.sin(angles[0] * 180 / Math.PI)
    var cp = Math.cos(angles[0] * 180 / Math.PI)
    return [cp * cy, cp * sy, -sp]
}
var currentAction = 2
var lastTickShot = 0
function reset(){
    lastTickShot = 0
}
var lasttarget = 0
function onRageShoot(){
    if(!UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && !UI.GetValue("Rage", "GENERAL", "Exploits", "Doubletap"))
        return
    var type = Event.GetInt("exploit")
    // 1 = 1st shot
    // 2 = 2nd shot
    if(type == 1){
        currentAction = 1
        lastTickShot = Globals.Tickcount()
    }
    if(type == 2){
        currentAction = 2
    }
    lasttarget = Event.GetInt("target_index")
}
function onCM(){
    var local = Entity.GetLocalPlayer()
    if(!local || !Entity.IsAlive(local) || currentAction == 2)
        return
    if(!UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && !UI.GetValue("Rage", "GENERAL", "Exploits", "Doubletap"))
        return
    if(!Entity.IsAlive(lasttarget) || lastTickShot + 12 < Globals.Tickcount()){
        lasttarget = 0
        return
    }
    var velo = Entity.GetProp(local, "DT_CSPlayer", "m_vecVelocity[0]")
    var speed = Math.sqrt((velo[0]*velo[0])+(velo[1]*velo[2])+(velo[2]*velo[2]))
    var direction = vectorangles(velo)
    direction[1] = Local.GetViewAngles()[1] - direction[1]
    var forward = anglevectors(direction)
    var negative = []
    negative[0] = forward[0] * speed
    negative[1] = forward[1] * speed
    negative[2] = forward[2] * speed
    UserCMD.SetMovement([negative[0], negative[1], 0])
}
Cheat.RegisterCallback("ragebot_fire", "onRageShoot")
Cheat.RegisterCallback("CreateMove", "onCM")
Cheat.RegisterCallback("round_start", "reset")





