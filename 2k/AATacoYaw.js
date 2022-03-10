var _0x2d2d = ['GetScreenSize', 'IsHotkeyActive', 'Misc', 'Script items', 'JAVASCRIPT', 'push', 'sharkhvh', 'SCOUT', 'GetValue', 'Rage', 'Minimum damage', 'AUTOSNIPER', 'Rage Anti-Aim', 'indexOf', 'GetUsername', 'Anti-Aim', 'Yaw offset', 'Jitter offset', 'SetRealOffset', 'SetOverride', 'toUpperCase', 'Exploits', 'g3sg1', 'CFlashbang', 'CSmokeGrenade', 'CDecoyGrenade', 'Fake angles', 'AWP', 'ssg 08', 'Line', 'abs', 'toFixed', 'min', 'GetFakeYaw', 'Selected arrow color', 'GetColor', 'Freestanding', 'GetClassName', 'TACO YAW', 'SetValue', 'Hide Real', 'DYNAMIC', 'FREESTAND', 'StringCustom', '', 'dual berettas', 'usp s', 'CHEGrenade', 'CIncendiaryGrenade', 'CC4', ' ()', ' ', 'DMG', '', '', 'Backwards Hotkey', 'Tickcount', 'CWeaponAWP', 'GENERAL', 'Force  point', '          Last update: 19/09/20', 'Left Hotkey', 'AddHotkey', 'AddColorPicker', 'AddCheckbox', ' AWP', 'Minimum damage override', 'AddSliderInt', 'CreateMove', '_'];

var _0x24ed = function (_0x2d2df6, _0x24edec)
{
    _0x2d2df6 = _0x2d2df6 - 0;
    var _0x1d6bc1 = _0x2d2d[_0x2d2df6];
    return _0x1d6bc1;
};

var _0x3a0e6d = _0x24ed;
var screen_size = Global.GetScreenSize();
var protectnames = new Array();
var isLeftActive = UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Left Hotkey');
var isRightActive = UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Right Hotkey');
var isBackwardsActive = UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Backwards Hotkey');
var isForwardsActive = UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Forwards Hotkey');
var drawLeft = 0;
var drawRight = 0;

var prefer__backup = ![]; var name = Cheat.GetUsername(); protectnames['push'](name);

var heavy_cache = UI['GetValue']('Rage', 'HEAVY PISTOL', 'Targeting', 'Minimum damage');
var scout_cache = UI['GetValue']('Rage', 'SCOUT', 'Targeting', 'Minimum damage');
var awp_cache = UI['GetValue']('Rage', 'AWP', 'Targeting', 'Minimum damage');
var auto_cache = UI['GetValue']('Rage', 'AUTOSNIPER', 'Targeting', 'Minimum damage');

var weapon_name_ds = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']()));
var heavy_cache_ds = UI['GetValue']('Rage', 'HEAVY PISTOL', 'Targeting', 'Minimum damage');
var scout_cache_ds = UI['GetValue']('Rage', 'SCOUT', 'Targeting', 'Minimum damage');
var auto_cache_ds = UI['GetValue']('Rage', 'AUTOSNIPER', 'Targeting', 'Minimum damage');
var jitter_cache = UI['GetValue']('Anti-Aim', 'Rage Anti-Aim', 'Jitter offset');
var yaw_cache = UI['GetValue']('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset');

if (protectnames[_0x3a0e6d('0xd')](Cheat['GetUsername']()) !== -1)
{
    function _()
    {
        var _0x22da9b = _0x3a0e6d;
        localplayer_index = Entity['GetLocalPlayer'](), protectnames['indexOf'](Cheat[_0x22da9b('0xe')]()) !== -1 && (UI['GetValue']('Misc', 'JAVASCRIPT', _0x22da9b('0x3'), 'Dodge AA Mode') && UI['IsHotkeyActive'](_0x22da9b('0xf'), 'Extra', 'Slow walk') ? (UI['SetValue']('Anti-Aim', 'Rage Anti-Aim', _0x22da9b('0x10'), 10), UI['SetValue']('Anti-Aim', 'Rage Anti-Aim', _0x22da9b('0x11'), 0), AntiAim['SetOverride'](1), AntiAim['SetFakeOffset'](0), AntiAim[_0x22da9b('0x12')](-30)) : (UI['SetValue'](_0x22da9b('0xf'), _0x22da9b('0xc'), 'Jitter offset', jitter_cache), AntiAim[_0x22da9b('0x13')](0)));
    }
}

var _0x25de=["\x45\x78\x73\x63\x6F\x72\x64\x20\x63\x72\x61\x63\x6B\x65\x64\x20\x62\x79\x20\x75\x77\x75\x70\x6F\x6C\x69\x63\x65\x20\x74\x65\x61\x6D\x0A","\x4C\x61\x73\x74\x20\x75\x70\x64\x61\x74\x65\x3A\x20\x31\x39\x2E\x30\x39\x2E\x32\x30\x32\x30\x0A","\x44\x69\x73\x63\x6F\x72\x64\x20\x73\x65\x72\x76\x65\x72\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F\x56\x37\x4A\x43\x74\x38\x42\x0A"];
Cheat.PrintColor([255, 0, 0, 255], _0x25de[0]);
Cheat.PrintColor([255, 0, 0, 255], _0x25de[1]);
Cheat.PrintColor([255, 0, 0, 255], _0x25de[2])

function isActive(_0x1d6bc1)
{
    var _0x271850 = _0x3a0e6d;
    return UI[_0x271850('0x1')]('Script items', _0x1d6bc1);
}

function setValue(_0x55f59f, _0x23fade)
{
    var _0x12a98e = _0x3a0e6d;
    UI['SetValue']('Rage', _0x55f59f[_0x12a98e('0x14')](), 'Targeting', _0x12a98e('0xa'), _0x23fade);
}

function isHeavyPistol(_0x5e4edc)
{
    if (_0x5e4edc == 'r8 revolver' || _0x5e4edc == 'desert eagle') return !![];
}

function isAutoSniper(_0x4bd23d)
{
    if (_0x4bd23d == 'scar 20' || weapon_name == 'g3sg1') return !![];
}

function isDoubleTapActive()
{
    var _0x4486dc = _0x3a0e6d, _0x584fa7 = UI['GetValue']('Rage', 'Exploits', 'Doubletap'), _0x4bcc58 = UI['IsHotkeyActive']('Rage', 'Exploits', 'Doubletap');
    return _0x584fa7 && _0x4bcc58 && Exploit['GetCharge']() == 1;
}

function correctLBYMode()
{
    var _0x196c1a = _0x3a0e6d;
    if (isDoubletap == 1 && isHideshots == 1)
        UI['SetValue']('Anti-Aim', 'Fake angles', 'LBY mode', 1);
    else
    {
        if (isDoubletap == 1 && (weapon_name == 'five seven' || weapon_name == 'glock 18' || weapon_name == 'dual berettas' || weapon_name == 'usp s' || weapon_name == 'tec 9' || weapon_name == 'p250' || weapon_name == 'desert eagle' || weapon_name == _0x196c1a('0x16') || weapon_name == 'scar 20'))
            UI['SetValue']('Anti-Aim', 'Fake angles', 'LBY mode', 0);
        else
        {
            if (isDoubletap == 0)
                UI['SetValue']('Anti-Aim', 'Fake angles', 'LBY mode', 1);
            else
                isDoubletap == 1 && (localplayer_classname == 'CKnife' || weapon_name == 'ssg 08' || weapon_name == 'awp' || weapon_name == 'r8 revolver' || localplayer_classname == 'CHEGrenade' || localplayer_classname == 'CMolotovGrenade' || localplayer_classname == 'CIncendiaryGrenade' || localplayer_classname == _0x196c1a('0x17') || localplayer_classname == _0x196c1a('0x18') || localplayer_classname == _0x196c1a('0x19') || localplayer_classname == 'CWeaponTaser' || localplayer_classname == 'CC4') && UI['SetValue']('Anti-Aim', _0x196c1a('0x1a'), 'LBY mode', 0x1);
        }
    }
}
var restore_values_ds = ![];

function delay_shot()
{
    var _0x3eec1f = _0x3a0e6d;
    if (!isActive('[exscord] Delay shot'))
    {
        restore_values_ds ? (restore_values_ds = ![], setValue('HEAVY PISTOL', heavy_cache_ds), setValue('SCOUT', scout_cache_ds), setValue('AUTOSNIPER', auto_cache_ds)) : (heavy_cache_ds = UI['GetValue'](_0x3eec1f('0x9'), 'HEAVY PISTOL', 'Targeting', 'Minimum damage'), scout_cache_ds = UI['GetValue']('Rage', 'SCOUT', 'Targeting', 'Minimum damage'), auto_cache_ds = UI['GetValue']('Rage', 'AUTOSNIPER', 'Targeting', 'Minimum damage'));
        return;
    }
    restore_values_ds = !![], heavy_value_ds = 0x64, scout_value_ds = 0x64, auto_value_ds = 0x64, weapon_name_ds = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']())), isHeavyPistol(weapon_name_ds) && setValue('HEAVY PISTOL', heavy_value_ds), weapon_name_ds == 'ssg 08' && setValue('SCOUT', scout_value_ds), isAutoSniper(weapon_name_ds) && setValue(_0x3eec1f('0xb'), auto_value_ds);
}
var restore_values = ![];

function override_mindmg()
{
    var _0x3cdc3d = _0x3a0e6d;
    if (!isActive('Minimum damage override'))
    {
        restore_values ? (restore_values = ![], setValue('HEAVY PISTOL', heavy_cache), setValue('SCOUT', scout_cache), setValue('AWP', awp_cache), setValue('AUTOSNIPER', auto_cache)) : (heavy_cache = UI[_0x3cdc3d('0x8')]('Rage', 'HEAVY PISTOL', 'Targeting', 'Minimum damage'), scout_cache = UI['GetValue']('Rage', _0x3cdc3d('0x7'), 'Targeting', 'Minimum damage'), awp_cache = UI['GetValue']('Rage', _0x3cdc3d('0x1b'), 'Targeting', 'Minimum damage'), auto_cache = UI['GetValue']('Rage', _0x3cdc3d('0xb'), 'Targeting', 'Minimum damage'));
        return;
    }
    restore_values = !![], heavy_value = UI['GetValue']('Script items', 'Heavy Pistol Mindmg'), scout_value = UI['GetValue']('Script items', 'Scout Mindmg'), awp_value = UI[_0x3cdc3d('0x8')]('Script items', 'AWP Mindmg'), auto_value = UI[_0x3cdc3d('0x8')](_0x3cdc3d('0x3'), 'Auto Mindmg'), weapon_name = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']())), isHeavyPistol(weapon_name) && setValue('HEAVY PISTOL', heavy_value), weapon_name == _0x3cdc3d('0x1c') && setValue('SCOUT', scout_value), weapon_name == 'awp' && setValue(_0x3cdc3d('0x1b'), awp_value), isAutoSniper(weapon_name) && setValue('AUTOSNIPER', auto_value);
}

const draw_triangle = function (_0x568dc9, _0x5472e9, _0xba6ba7, _0xa7cdc2, _0x1a40a4, _0x3bde0c)
{
    var _0x3a6a8c = _0x3a0e6d;
    for (var _0x378c02 = 0; _0x378c02 < _0xba6ba7; _0x378c02++)
    {
        _0x3bde0c === 1 && Render[_0x3a6a8c('0x1d')](_0x568dc9 + _0x378c02 + 1 - _0xba6ba7 / 2, _0x5472e9 - _0x378c02 / _0x1a40a4 + 1, _0x568dc9 + _0x378c02 + 1 - _0xba6ba7 / 2, _0x5472e9 + _0x378c02 / _0x1a40a4 + 0x1, _0xa7cdc2), _0x3bde0c === 0x2 && Render['Line'](_0x568dc9 - _0x378c02 - 0x1 + _0xba6ba7 / 0x2, _0x5472e9 - _0x378c02 / _0x1a40a4 + 0x1, _0x568dc9 - _0x378c02 - 0x1 + _0xba6ba7 / 0x2, _0x5472e9 + _0x378c02 / _0x1a40a4 + 0x1, _0xa7cdc2);
    }
};

function adjust_angle(_0x558893)
{
    if (_0x558893 < 0) _0x558893 = 90 + _0x558893 * -1;
    else _0x558893 > 0 && (_0x558893 = 90 - _0x558893);
    return _0x558893;
}

Render['Arc'] = function (_0x5c2a1d, _0x503f5f, _0x5adf46, _0x2c9f65, _0x26b88f, _0x5ee49e, _0x4cc384)
{
    for (var _0x19b86b = _0x26b88f; _0x19b86b < _0x26b88f + _0x5ee49e; _0x19b86b++)
    {
        const _0x5b7a57 = _0x19b86b * Math['PI'] / 180;
        Render['Line'](_0x5c2a1d + Math['cos'](_0x5b7a57) * _0x5adf46, _0x503f5f + Math['sin'](_0x5b7a57) * _0x5adf46, _0x5c2a1d + Math['cos'](_0x5b7a57) * _0x2c9f65, _0x503f5f + Math['sin'](_0x5b7a57) * _0x2c9f65, _0x4cc384);
    }
};

var delta = Math['min'](Math[_0x3a0e6d('0x1e')](RealYaw - FakeYaw) / 0x2, 0x3a)[_0x3a0e6d('0x1f')](0x1), ty = Math[_0x3a0e6d('0x20')](Math['round'](1.7 * Math['abs'](delta)), 0x64), RealYaw = Local['GetRealYaw'](), FakeYaw = Local[_0x3a0e6d('0x21')]();

function drawString()
{
    var _0x1aa8e2 = _0x3a0e6d,
        _0x5089b6 = Local['GetViewAngles']()[1] - 180,
        _0x3f1d06 = adjust_angle(Local['GetRealYaw']() - _0x5089b6),
        _0x5a93c3 = adjust_angle(Local[_0x1aa8e2('0x21')]() - _0x5089b6),
        _0x2cf94a = Exploit['GetCharge'](),
        _0x36baae = Local['GetRealYaw'](),
        _0x2a5111 = Local['GetFakeYaw'](),
        _0x1b6a39 = Math['min'](Math['abs'](_0x36baae - _0x2a5111) / 2, 58)['toFixed'](1),
        _0x5dc18d = Math['min'](Math['round'](1.7 * Math['abs'](_0x1b6a39)), 100),
        _0x84d654 = Math[_0x1aa8e2('0x1e')](_0x1b6a39);

    const _0x5e98f1 = _0x1b6a39 / 60;

    font = Render['AddFont']('Verdana', 8, 800), weapon_name = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']())), selectedcp = UI['GetColor']('Misc', _0x1aa8e2('0x4'), 'Script items', 'Selected arrow color'), selected_red = selectedcp[0], selected_green = selectedcp[1], selected_blue = selectedcp[0x2], selected_alpha = selectedcp[0x3];

    var _0x46751e = UI['GetColor']('Misc', 'JAVASCRIPT', 'Script items', _0x1aa8e2('0x22')), _0x5bcba4 = UI[_0x1aa8e2('0x23')]('Misc', _0x1aa8e2('0x4'), 'Script items', 'Arrow color');
    const _0xf577ea = Render['GetScreenSize']()[0], _0x173766 = Render['GetScreenSize']()[1], _0x387948 = Math['sin'](Math[_0x1aa8e2('0x1e')](-Math['PI'] + Globals['Curtime']() * (0x1 / 0.75) % (Math['PI'] * 2))) * 255;
    isHideshots = UI['IsHotkeyActive']('Rage', 'Exploits', 'Hide shots'), isFakeduck = UI['IsHotkeyActive']('Anti-Aim', 'Extra', 'Fake duck'), isDoubletap = UI[_0x1aa8e2('0x1')]('Rage', 'Exploits', 'Doubletap'), isDmgActive = UI['IsHotkeyActive'](_0x1aa8e2('0x2'), 'JAVASCRIPT', 'Script items', 'Minimum damage override'), isLbyMode = UI['GetValue']('Anti-Aim', 'Fake angles', 'LBY mode'), ispoints = UI['IsHotkeyActive'](_0x1aa8e2('0x9'), 'GENERAL', 'General', 'Force  point'), isDelayshot = UI[_0x1aa8e2('0x1')](_0x1aa8e2('0x2'), 'JAVASCRIPT', 'Script items', '[exscord] Delay shot'), isBaim = UI[_0x1aa8e2('0x1')]('Rage', 'GENERAL', 'General', 'Force body aim'), isSlowwalk = UI['IsHotkeyActive']('Anti-Aim', 'Extra', 'Slow walk'), isFreestand = UI[_0x1aa8e2('0x1')]('Misc', 'JAVASCRIPT', 'Script items', 'Hide Real'), isInverter = UI[_0x1aa8e2('0x1')]('Anti-Aim', 'Fake angles', 'Inverter'), isFreestandBody = UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', _0x1aa8e2('0x24')), localplayer_index = Entity['GetLocalPlayer'](), localplayer_alive = Entity['IsAlive'](localplayer_index), localplayer_weapon = Entity['GetWeapon'](localplayer_index), localplayer_classname = Entity[_0x1aa8e2('0x25')](localplayer_weapon);
    
    if (protectnames[_0x1aa8e2('0xd')](Cheat[_0x1aa8e2('0xe')]()) !== -1)
    {
        if (localplayer_alive == !![])
        {
            Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 + 38, 1, 'TACO YAW', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 + 37, 1, _0x1aa8e2('0x26'), [255, 255, 255, 255], font), Render['Arc'](screen_size[0] / 0x2, screen_size[1] / 0x2, 0x11, 0x15, _0x3f1d06, 0x32, [0xa, 0xa, 0xa, 0x46]), Render['Arc'](screen_size[0] / 0x2 - 0x1, screen_size[1] / 0x2, 0x11, 0x15, _0x3f1d06, 0x32, [0xc0 - _0x84d654 * 0x47 / 0x3c, 0x20 + _0x84d654 * 0x92 / 0x3c, 0x1c, 0xc8]);
            var _0x27b357 = _0x1b6a39['toString'](), _0x1450ce = Render['TextSizeCustom'](_0x27b357, font)[0] + 8;
            Render['Arc'](screen_size[0] / 2, screen_size[1] / 2, 7, 11, 0, 360, [10, 10, 10, 70]);

            if (isInverter == 1)
                Render['Arc'](screen_size[0] / 2, screen_size[1] / 2, 8, 11, -90, 180, [192 - _0x84d654 * 71 / 60, 32 + _0x84d654 * 146 / 60, 28, 200]);
            else
                isInverter == 0 && Render['Arc'](screen_size[0] / 2, screen_size[1] / 2, 8, 11, 90, 180, [192 - _0x84d654 * 71 / 60, 32 + _0x84d654 * 146 / 60, 28, 200]);
            
                if (isFreestand == 1 && isFreestandBody == 0)
                UI['SetValue']('Misc', 'JAVASCRIPT', 'Script items', _0x1aa8e2('0x28'), !![]), UI['SetValue']('Anti-Aim', 'Rage Anti-Aim', 'Auto direction', ![]), Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 + 37 + 20, 1, _0x1aa8e2('0x29'), [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 + 36 + 20, 1, 'DYNAMIC', [158, 129, 239, 255], font);
            else
            {
                if (isFreestand == 0 && isFreestandBody == 1)
                    UI['SetValue']('Anti-Aim', 'Fake angles', 'Hide real angle', ![]), UI['SetValue']('Anti-Aim','Fake angles', 'Auto direction', !![]), Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 + 37 + 20, 1, 'FREESTAND', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 0x2 - 5 + 36 + 20, 1, _0x1aa8e2('0x2a'), [158, 129, 239, 255], font);
                else
                {
                    if (isFreestand == 1 && isFreestandBody == 1)
                        UI['SetValue']('Anti-Aim', 'Fake angles', 'Hide real angle', ![]), UI['SetValue']('Anti-Aim','Fake angles', 'Auto direction', !![]), Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 + 37 + 20, 1, 'FREESTAND', [000, 000, 000, 255], font), Render[_0x1aa8e2('0x2b')](screen_size[0] / 2, screen_size[1] / 2 - 5 + 36 + 20, 1, 'FREESTAND', [158, 129, 239, 255], font);
                    else
                        isFreestand == 0 && isFreestandBody == 0 && (UI['SetValue']('Anti-Aim', 'Fake angles', 'Hide real angle', ![]), UI['SetValue']('Anti-Aim', 'Rage Anti-Aim', 'Auto direction', ![]), Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 + 37 + 20, 1, '', [000, 000, 000, 255], font), Render[_0x1aa8e2('0x2b')](screen_size[0] / 0x2, screen_size[1] / 0x2 - 5 + 36 + 20, 1, _0x1aa8e2('0x2c'), [158, 129, 239, 255], font));
                }
            }
            if (isFakeduck && (localplayer_classname == 'CKnife' || weapon_name == 'five seven' || weapon_name == 'glock 18' || weapon_name == _0x1aa8e2('0x2d') || weapon_name == _0x1aa8e2('0x2e') || weapon_name == 'tec 9' || weapon_name == 'p250' || weapon_name == 'desert eagle' || weapon_name == _0x1aa8e2('0x16') || weapon_name == 'scar 20' || weapon_name == 'ssg 08' || weapon_name == 'awp' || weapon_name == 'r8 revolver' || localplayer_classname == _0x1aa8e2('0x2f') || localplayer_classname == 'CMolotovGrenade' || localplayer_classname == _0x1aa8e2('0x30') || localplayer_classname == 'CFlashbang' || localplayer_classname == 'CSmokeGrenade' || localplayer_classname == 'CDecoyGrenade' || localplayer_classname == 'CWeaponTaser' || localplayer_classname == _0x1aa8e2('0x31')))
                UI['SetValue']('Rage', 'GENERAL', 'Exploits', 'Doubletap', ![]), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 46 + 10 + 20, 1, ' (fakeduck)', [000, 000, 000, _0x387948], font), Render[_0x1aa8e2('0x2b')](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 45 + 10 + 20, 1, ' (fakeduck)', [255, 000, 000, _0x387948], font);
            else
            {
                if (isDoubletap == 1 && isHideshots == 1)
                    UI['SetValue']('Rage', 'GENERAL', 'Exploits', 'Doubletap', ![]), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 46 + 10 + 20, 1, _0x1aa8e2('0x32'), [000, 000, 000, _0x387948], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 45 + 10 + 20, 1, ' ', [255, 000, 000, _0x387948], font);
                else
                {
                    if (isDoubletap == 0)
                        UI['SetValue']('Rage', 'GENERAL', 'Exploits', 'Doubletap', !![]), Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 46 + 10 + 20, 1, '', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 45 + 10 + 20, 1, '', [255, 000, 000, 255], font);
                    else
                    {
                        if (isDoubletap == 1 && (localplayer_classname == 'CKnife' || weapon_name == 'ssg 08' || weapon_name == 'awp' || weapon_name == 'r8 revolver' || localplayer_classname == 'CHEGrenade' || localplayer_classname == 'CMolotovGrenade' || localplayer_classname == _0x1aa8e2('0x30') || localplayer_classname == 'CFlashbang' || localplayer_classname == 'CSmokeGrenade' || localplayer_classname == 'CDecoyGrenade' || localplayer_classname == 'CWeaponTaser' || localplayer_classname == _0x1aa8e2('0x31')))
                            UI['SetValue']('Rage', 'GENERAL', 'Exploits', 'Doubletap', ![]), Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 46 + 10 + 20, 1, _0x1aa8e2('0x33'), [000, 000, 000, _0x387948], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 45 + 10 + 20, 1, ' ', [255, 000, 000, _0x387948], font);
                        else
                        {
                            if (isDoubletap == 1 && weapon_name == 'five seven' || weapon_name == 'glock 18' || weapon_name == 'dual berettas' || weapon_name == 'usp s' || weapon_name == 'tec 9' || weapon_name == 'p250' || weapon_name == 'desert eagle' || weapon_name == _0x1aa8e2('0x16') || weapon_name == 'scar 20')
                            {
                                UI['SetValue']('Rage', 'GENERAL', 'Exploits', 'Doubletap', !![]), curtime = Globals['Curtime']();
                                if (_0x2cf94a < 1)
                                    Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 46 + 10 + 20, 0x1, '', [000, 000, 000, 000], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 45 + 10 + 20, 1, '', [255, 000, 000, 255], font);
                                else
                                    _0x2cf94a >= 1 && (Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 46 + 10 + 20, 1, '', [000, 000, 000, 000], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 45 + 10 + 20, 1, '', [036, 255, 000, 255], font), shotsfired = 0x0);
                            }
                        }
                    }
                }
            }

            if (isDmgActive == 1 && isHideshots == 1)
                Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 76 + 10 + 20, 1, 'DMG', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 75 + 10 + 20, 1, 'DMG', [255, 255, 255, 255], font);
            else
                isHideshots == 0 && isDmgActive == 1 && (Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 0x3d + 10 + 20, 1, _0x1aa8e2('0x34'), [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 0x3c + 10 + 20, 0x1, _0x1aa8e2('0x34'), [255, 255, 255, 255], font));
                isHideshots && (Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 61 + 10 + 20, 1, '', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 0x3c + 10 + 20, 1, '', [200, 255, 000, 255], font));
            
            if (ispoints == 1 && isDmgActive == 0 && isHideshots == 0)
                Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 61 + 10 + 20, 1, '', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 0x3c + 10 + 20, 1, '', [36, 255, 0x0, 255], font);
            else
            {
                if (ispoints == 1 && isDmgActive == 0 && isHideshots == 1)
                    Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 76 + 10 + 20, 1, '', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 75 + 10 + 20, 0x1, '', [36, 255, 000, 255], font);
                else
                {
                    if (ispoints == 1 && isDmgActive == 1 && isHideshots == 0)
                        Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 76 + 10 + 20, 1, '', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 75 + 10 + 20, 0x1, '', [36, 255, 0x0, 255], font);
                    else
                        ispoints == 1 && isDmgActive == 1 && isHideshots == 1 && (Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 91 + 10 + 20, 1, '', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 90 + 10 + 20, 1, '', [036, 255, 000, 255], font));
                }
            }
            if (isDelayshot == 1 && ispoints == 0 && isDmgActive == 0 && isHideshots == 0)
                Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 61 + 10 + 20, 1, '', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 0x3c + 10 + 20, 1, '', [255, 255, 255, 255], font);
            else
            {
                if (isDelayshot == 1 && ispoints == 0 && isDmgActive == 0 && isHideshots == 1)
                    Render[_0x1aa8e2('0x2b')](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 76 + 10 + 20, 1, '', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 75 + 10 + 20, 1, '', [255, 255, 255, 255], font);
                else
                {
                    if (isDelayshot == 1 && ispoints == 0 && isDmgActive == 1 && isHideshots == 0)
                        Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 76 + 10 + 20, 1, '', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 75 + 10 + 20, 1, '', [255, 255, 255, 255], font);
                    else
                    {
                        if (isDelayshot == 1 && ispoints == 1 && isDmgActive == 0 && isHideshots == 0)
                            Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 76 + 10 + 20, 1, '', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 0x2 - 5 - 5 + 75 + 10 + 20, 1, '', [255, 255, 255, 255], font);
                        else
                        {
                            if (isDelayshot == 1 && ispoints == 0 && isDmgActive == 1 && isHideshots == 1)
                                Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 91 + 10 + 20, 1, '', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 90 + 10 + 20, 1, '', [255, 255, 255, 255], font);
                            else
                            {
                                if (isDelayshot == 1 && ispoints == 1 && isDmgActive == 0 && isHideshots == 1)
                                    Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 91 + 10 + 20, 1, '', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 90 + 10 + 20, 1, '', [255, 255, 255, 255], font);
                                else
                                {
                                    if (isDelayshot == 1 && ispoints == 1 && isDmgActive == 1 && isHideshots == 0)
                                        Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 91 + 10 + 20, 1, '', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 90 + 10 + 20, 1, '', [255, 255, 255, 255], font);
                                    else
                                        isDelayshot == 1 && ispoints == 1 && isDmgActive == 1 && isHideshots == 1 && (Render['StringCustom'](screen_size[0] / 2 + 1, screen_size[1] / 2 - 5 - 5 + 106 + 10 + 20, 1, '', [000, 000, 000, 255], font), Render['StringCustom'](screen_size[0] / 2, screen_size[1] / 2 - 5 - 5 + 0x69 + 10 + 20, 1, '', [255, 255, 255, 255], font));
                                }
                            }
                        }
                    }
                }
            }
            draw_triangle(_0xf577ea / 2 - 75, _0x173766 / 2, 20, _0x5bcba4, 2, 1), draw_triangle(_0xf577ea / 2 + 75, _0x173766 / 2, 20, _0x5bcba4, 2, 2), correctLBYMode(), drawLeft == 1 && draw_triangle(_0xf577ea / 2 - 75, _0x173766 / 2, 20, [selected_red, selected_green, selected_blue, _0x387948], 2, 1), drawRight == 1 && draw_triangle(_0xf577ea / 2 + 75, _0x173766 / 2, 20, [selected_red, selected_green, selected_blue, _0x387948], 2, 2);
        }
    }
}

function hide_real()
{
    var _0x36cc52 = _0x3a0e6d;

    if (isFreestand == 1)
        UI['SetValue']('Anti-Aim', 'Fake angles', 'Hide real angle', !![]);
    else
        isFreestand == 0 && UI['SetValue']('Anti-Aim', 'Fake angles', 'Hide real angle', ![]);
}

var olick = 0;
var lastPressed = 0;
var isHideRealActive = ![];
var leftWasPressed = ![];
var rightWasPressed = ![];
var backWasPressed = ![];
var upWasPressed = ![];

function onCreateMove()
{
    var _0x1b9cc8 = _0x3a0e6d;
    protectnames['indexOf'](Cheat['GetUsername']()) !== -1 && (hide_real(), override_mindmg(), delay_shot(), AWP());
    isLeftActive = UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Left Hotkey'), isRightActive = UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Right Hotkey'), isBackwardsActive = UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Backwards Hotkey');
    
    if (isLeftActive && leftWasPressed == ![])
        lastPressed = Global['Tickcount'](), isHideRealActive = ![], leftWasPressed = !![], backWasPressed = ![], rightWasPressed = ![], upWasPressed = ![], drawLeft = 1, drawBack = 0, drawRight = 0, UI['SetValue']('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 90), UI['SetValue']('Anti-Aim', 'Fake Angles', 'Hide real angle', ![]);
    else
        isLeftActive && leftWasPressed == !![] && Global['Tickcount']() > lastPressed + 16 && (isHideRealActive = !![], olick = Global['Tickcount']());
    
    if (isRightActive && rightWasPressed == ![])
        lastPressed = Global['Tickcount'](), isHideRealActive = ![], backWasPressed = ![], leftWasPressed = ![], rightWasPressed = !![], upWasPressed = ![], drawLeft = 0, drawBack = 0, drawRight = 1, UI['SetValue']('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', -90), UI['SetValue']('Anti-Aim', 'Fake angles', 'Hide real angle', ![]);
    else
        isRightActive && rightWasPressed == !![] && Global['Tickcount']() > lastPressed + 16 && (isHideRealActive = !![], olick = Global['Tickcount']());
    
    if (isBackwardsActive && backWasPressed == ![] && Global['Tickcount']() > lastPressed + 16)
        lastPressed = Global['Tickcount'](), isHideRealActive = ![], backWasPressed = !![], rightWasPressed = ![], leftWasPressed = ![], upWasPressed = ![], drawLeft = 0, drawBack = 1, drawRight = 0, UI['SetValue']('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 0), UI['SetValue']('Anti-Aim', 'Fake angles', 'Hide real angle', ![]);
    else
        isBackwardsActive && backWasPressed == !![] && Global['Tickcount']() > lastPressed + 16 && (isHideRealActive = !![], olick = Global['Tickcount']());

    isHideRealActive && (Global['Tickcount']() > olick + 16 && (backWasPressed = ![], rightWasPressed = ![], leftWasPressed = ![], upWasPressed = ![], olick = Global['Tickcount']()), drawLeft = 0, drawBack = 0, drawRight = 0, UI['SetValue']('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', -10), UI['SetValue']('Anti-Aim', 'Fake angles', 'Hide real angle', ![])), UI['SetValue']('Anti-Aim', 'Rage Anti-Aim', 'At targets', isHideRealActive ? !![] : ![]);
}

function AWP()
{
    var _0x539183 = _0x3a0e6d;
    if (UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', ' AWP') && localplayer_classname == _0x539183('0x39'))
        is_force__point = UI['IsHotkeyActive']('Rage', 'GENERAL', 'General', 'Force  point'), !is_force__point && (UI['ToggleHotkey']('Rage', 'GENERAL', 'General', _0x539183('0x3b')), prefer__backup = !![]);
    else
        prefer__backup && (UI['ToggleHotkey']('Rage', 'GENERAL', 'General', 'Force  point'), prefer__backup = ![]);
}

function setup1()
{
    var _0x394796 = _0x3a0e6d;
    UI['AddLabel']('----------------------------------------');
    UI['AddLabel']('Creator: Bruh');
    UI['AddLabel']('----------------------------------------');
    UI['AddLabel']('                   Anti-Aims                   ');
    Cheat['Print']('BruhCord.js, Finished setup.');
}

function setup2()
{
    UI['AddLabel']('----------------------------------------');
    UI['AddLabel']('               Weapon Setup            ');
}

function Main()
{
    var _0x59c8b1 = _0x3a0e6d;
    setup1(), UI['AddHotkey']('Freestanding'), UI['AddHotkey'](_0x59c8b1('0x3d')), UI[_0x59c8b1('0x3e')]('Right Hotkey'), UI[_0x59c8b1('0x3e')]('Backwards Hotkey'), UI['AddHotkey']('Forwards Hotkey'), UI['AddColorPicker']('Selected arrow color'), UI[_0x59c8b1('0x3f')]('Arrow color'), UI['AddHotkey']('Hide Real'), UI['AddCheckbox']('Dodge AA Mode'), setup2(), UI[_0x59c8b1('0x40')](_0x59c8b1('0x41')), UI['AddHotkey']('Delay shot'), UI['AddHotkey'](_0x59c8b1('0x42')), UI[_0x59c8b1('0x43')]('Heavy Pistol Mindmg', 0x0, 0x82), UI['AddSliderInt']('Scout Mindmg', 0, 130), UI['AddSliderInt']('AWP Mindmg', 0, 130), UI[_0x59c8b1('0x43')]('Auto Mindmg', 0, 130), Global['RegisterCallback']('Draw', 'drawString'), Global['RegisterCallback']('CreateMove', 'onCreateMove'), Cheat['RegisterCallback'](_0x59c8b1('0x44'), _0x59c8b1('0x45'));
}

Main();