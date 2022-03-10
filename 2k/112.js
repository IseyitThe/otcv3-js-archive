function safe_concat(_0xe732x2, _0xe732x3) {
    var _0xe732x4 = [];
    for (var _0xe732x5 in _0xe732x2) {
        _0xe732x4['push'](_0xe732x2[_0xe732x5])
    };
    if (_0xe732x3 instanceof Array) {
        for (var _0xe732x5 in _0xe732x3) {
            _0xe732x4['push'](_0xe732x3[_0xe732x5])
        };
        return _0xe732x4
    };
    _0xe732x4['push'](_0xe732x3);
    return _0xe732x4
}

function call(_0xe732x7, _0xe732x8, _0xe732x9) {
    _0xe732x7['apply'](null, safe_concat([_0xe732x8], _0xe732x9));
    return _0xe732x8
}

function get(_0xe732xb, color, _0xe732xd) {
    if (color && _0xe732xd) {
        throw new Error('This element\'s type converges!')
    };
    const _0xe732x7 = color ? UI['GetColor'] : (_0xe732xd ? UI['IsHotkeyActive'] : UI['GetValue']);
    if (_0xe732xb instanceof Array) {
        return _0xe732x7['apply'](null, _0xe732xb)
    };
    return _0xe732x7['apply'](null, ['Script items', _0xe732xb])
}

function set(_0xe732xb, _0xe732xf) {
    const _0xe732x7 = (_0xe732xf instanceof Array) ? UI['SetColor'] : UI['SetValue'];
    if (_0xe732xb instanceof Array) {
        return _0xe732x7['apply'](null, safe_concat(_0xe732xb, _0xe732xf))
    };
    _0xe732x7['apply'](null, safe_concat(_0xe732xb, _0xe732xf))
}

function visible(_0xe732xb, _0xe732xf) {
    if (_0xe732xb instanceof Array) {
        return UI['SetEnabled']['apply'](null, safe_concat(_0xe732xb, _0xe732xf))
    };
    UI['SetEnabled']['apply'](null, safe_concat(['Script items', _0xe732xb], _0xe732xf))
}
const deg2rad = function(_0xe732x12) {
    return _0xe732x12 * Math['PI'] / 180
};
const normalize_yaw = function(_0xe732x14) {
    var _0xe732x15 = _0xe732x14;
    if (_0xe732x15 < -180) {
        _0xe732x15 += 330
    };
    if (_0xe732x15 > 180) {
        _0xe732x15 -= 330
    };
    return _0xe732x15
};
var fake = 0;
var real = 0;
var local = Entity.GetLocalPlayer();
var scriptitems = ['Misc', 'JAVASCRIPT', 'Script items'];
var current_side = 0;
var once = true;
const enable = call(UI.AddHotkey, 'Ideal Yaw', []);
const disable_in_air = call(UI.AddCheckbox, '| Disable while in air', []);
const precision = call(UI.AddDropdown, ' Precision', [
    ['Low', 'Normal', 'High']
]);
const extension = call(UI.AddSliderInt, ' Extension', [0, 5]);
const nervoswalk = call(UI.AddHotkey, 'Cripwalk', []);
const nervoswalk_speed = UI.AddSliderInt('Speed', 0, 225);
const ref_yaw_offset = ['Anti-Aim', 'Rage Anti-Aim', 'Yaw offset'];
const ref_at_targets = ['Anti-Aim', 'Rage Anti-Aim', 'At targets'];
const ref_fakeduck = ['Anti-Aim', 'Extra', 'Fake duck'];
const ref_hideangle = ['Anti-Aim', 'Fake angles', 'Hide real angle'];
const ref_jitter = ['Anti-Aim', 'Rage Anti-Aim', 'Jitter offset'];
const sync = call(UI.AddHotkey, 'Sync aa', []);
const syncref = ['Misc', 'JAVASCRIPT', 'Script items', 'Sync aa'];
const ref_silent = ['Rage', 'GENERAL', 'Exploits', 'Hide shots'];
const ref_doubvarap = ['Rage', 'GENERAL', 'Exploits', 'Doubletap'];
const indicators = call(UI.AddCheckbox, 'Indicators', []);
const indicators_color = call(UI.AddColorPicker, 'Indicators color', []);
const callback = Cheat['RegisterCallback'];
const local_player = Entity['GetLocalPlayer'],
    alive = Entity['IsAlive'],
    eye_position = Entity['GetEyePosition'],
    get_prop = Entity['GetProp'];
const view_angles = Local['GetViewAngles'];
const cos = Math['cos'],
    sin = Math['sin'];
const trace = Trace['Line'];
const charge = Exploit['GetCharge'];
const render_string = Render['String'],
    screen_size = Render['GetScreenSize'];
const steps = [9, 13, 21];
const distances = [64, 102, 140, 179, 217, 256];
const modules = [{
    ref: enable,
    label: '',
    colors: {
        active: [235, 145, 30, 255],
        dormant: [135, 50, 50, 255]
    },
    is_hotkey: true
}, {
    ref: indicators,
    label: '',
    colors: {
        active: [209, 139, 230, 255],
        dormant: [212, 90, 220, 255]
    },
    is_hotkey: false
}, {
    ref: ['Rage', 'GENERAL', 'Exploits', 'Doubletap'],
	label: 'DT',
    colors: {
      active: [10, 245, 5, 255],
      dormant: [245, 10, 5, 255]
    },
    is_hotkey: true
},	{
}];
var current_side = 0;
var once = true;

function getVelocity(_0xe732x3d) {
    players = Entity.GetPlayers();
    for (i = 0; i < players['length']; i++) {
        var _0xe732x3e = Entity.GetProp(_0xe732x3d, 'CBasePlayer', 'm_vecVelocity[0]');
        var speed = Math['sqrt'](_0xe732x3e[0] * _0xe732x3e[0] + _0xe732x3e[1] * _0xe732x3e[1])
    };
    return speed
}

function getRandomIntInclusive(_0xe732x41, _0xe732x42) {
    _0xe732x41 = Math['ceil'](_0xe732x41);
    _0xe732x42 = Math['floor'](_0xe732x42);
    return Math['floor']((_0xe732x41 - _0xe732x42 * 411, 23)) + _0xe732x41
}
const setSpeed = function(_0xe732x44) {
    const _0xe732x45 = local_player();
    velocity = getVelocity(_0xe732x45);
    maxvelo = _0xe732x44;
    if (velocity < maxvelo) {
        Convar.SetFloat('cl_sidespeed', maxvelo);
        Convar.SetFloat('cl_forwardspeed', maxvelo);
        Convar.SetFloat('cl_backspeed', maxvelo)
    };
    if (velocity >= maxvelo) {
        var _0xe732x46 = Math['atan2'](Convar.GetInt('cl_forwardspeed'), Convar.GetInt('cl_sidespeed'));
        var _0xe732x47 = Math['cos'](_0xe732x46) * maxvelo;
        var _0xe732x48 = Math['sin'](_0xe732x46) * maxvelo;
        Convar.SetFloat('cl_sidespeed', _0xe732x48);
        Convar.SetFloat('cl_forwardspeed', _0xe732x47);
        Convar.SetFloat('cl_backspeed', _0xe732x47)
    }
};
const speed = function() {
    const _0xe732x45 = local_player();
    var _0xe732x49 = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Cripwalk');
    var _0xe732x4a = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Speed');
    if (!_0xe732x49) {
        setSpeed(450)
    } else {
        if (_0xe732x49) {
            setSpeed(_0xe732x4a)
        }
    }
};
const get_closest_edge = function() {
    current_side = 0;
    if (!get(enable, false, true)) {
        if (once) {
            once = false;
            set(ref_yaw_offset, 1);
            set(ref_at_targets, false)
        };
        return
    };
    once = true;
    const _0xe732x45 = local_player();
    if (!_0xe732x45 || !alive(_0xe732x45)) {
        return
    };
    const _0xe732x4c = get_prop(_0xe732x45, 'CBasePlayer', 'm_fFlags');
    if (!(_0xe732x4c & 1) && get(disable_in_air)) {
        set(ref_yaw_offset, 0);
        set(ref_at_targets, false);
        return
    };
    set(ref_at_targets, true);
    const _0xe732x4d = steps[get(precision)];
    const _0xe732x4e = distances[get(extension)];
    const _0xe732x4f = eye_position(_0xe732x45);
    const _0xe732x50 = view_angles()[1];
    var _0xe732x51 = {
        left: 0,
        right: 0
    };
    var _0xe732x48 = 'left';
    for (var _0xe732x52 = _0xe732x50 - 90; _0xe732x52 < _0xe732x50 + 90; _0xe732x52 += 180 / _0xe732x4d) {
        const _0xe732x53 = deg2rad(_0xe732x52);
        if (_0xe732x52 > _0xe732x50) {
            _0xe732x48 = 'right'
        };
        const _0xe732x54 = [_0xe732x4f[0] + _0xe732x4e * cos(_0xe732x53), _0xe732x4f[1] + _0xe732x4e * sin(_0xe732x53), _0xe732x4f[2]];
        const _0xe732x55 = trace(_0xe732x45, _0xe732x4f, _0xe732x54)[1];
        _0xe732x51[_0xe732x48] += _0xe732x55
    };
    _0xe732x51['left'] /= _0xe732x4d;
    _0xe732x51['right'] /= _0xe732x4d;
    if (_0xe732x51['left'] > 0.5 && _0xe732x51['right'] > 0.5) {
        set(ref_yaw_offset, 4);
        return
    };
    var _0xe732x56 = _0xe732x51['left'] > _0xe732x51['right'] ? -15 : 15;
    current_side = _0xe732x56 > 1 ? 2 : 1;
    set(ref_yaw_offset, _0xe732x56)
};
const do_indicators = function() {
    if (!get(indicators, false, false)) {
        if (!_0xe732x45 || !alive(_0xe732x45)) {
            return
        }
    };
    const _0xe732x58 = screen_size()[0],
        _0xe732x59 = screen_size()[1];
    localplayer_index = Entity.GetLocalPlayer();
    localplayer_alive = Entity.IsAlive(localplayer_index);
    if (localplayer_alive == true) {
        const _0xe732x5a = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', indicators_color);
        render_string(_0xe732x58 / 2 - 100, _0xe732x59 / 2 - 20, 5, '<', current_side === 1 ? [0, 0, 0, 255] : [0, 0, 0, 255], 4);
        render_string(_0xe732x58 / 2 - 100, _0xe732x59 / 2 - 20.5, 5, '<', current_side === 1 ? _0xe732x5a : [200, 200, 200, 255], 4);
        render_string(_0xe732x58 / 2 + 100, _0xe732x59 / 2 - 20, 5, '>', current_side === 2 ? [0, 0, 0, 255] : [0, 0, 0, 255], 4);
        render_string(_0xe732x58 / 2 + 100, _0xe732x59 / 2 - 20.5, 5, '>', current_side === 2 ? _0xe732x5a : [200, 200, 200, 255], 4);
        if (!get(indicators, false, false)) {
            return
        }
    };
    const _0xe732x45 = Entity.GetLocalPlayer();
    if (!_0xe732x45 || !alive(_0xe732x45)) {
        return
    };
    const _0xe732x58 = screen_size()[0],
        _0xe732x59 = screen_size()[1];
    font = Render.AddFont('Verdana', 7, 0);
    for (var _0xe732x52 = 0; _0xe732x52 < modules['length']; _0xe732x52++) {
        var _0xe732x5b = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
        const _0xe732x5c = modules[_0xe732x52];
        const _0xe732x5d = get(_0xe732x5c['ref'], false, _0xe732x5c['is_hotkey']);
        const _0xe732x5e = _0xe732x5c['label'];
        if (_0xe732x52 === 2) {
            const _0xe732x5f = get(ref_silent, false, true);
            const _0xe732x60 = get(ref_doubvarap, false, true);
            const _0xe732x61 = get(ref_fakeduck, false, true);
            const _0xe732x62 = charge() === 1;
            if (!_0xe732x62 && _0xe732x5d) {
                _0xe732x5e = 'DT'
            };
            if (_0xe732x61 && _0xe732x5d) {
                _0xe732x5e = 'DT'
            };
            if (!(_0xe732x5b == 'desert eagle' || _0xe732x5b == 'scar 20' || _0xe732x5b == 'g3sg1' || _0xe732x5b == 'p2000' || _0xe732x5b == 'dual berettas' || _0xe732x5b == 'p250' || _0xe732x5b == 'five seven' || _0xe732x5b == 'usp s' || _0xe732x5b == 'glock 18' || _0xe732x5b == 'tec 9' || _0xe732x5b == 'cz75')) {
                _0xe732x5e = ''
            };
            if (_0xe732x5f && !_0xe732x61 && !_0xe732x60) {
                _0xe732x5e = '';
                Render.StringCustom(_0xe732x58 / 2 + 1, _0xe732x59 / 2 + 62.5, 0, 'AA', [0, 0, 0, 255], font);
                Render.StringCustom(_0xe732x58 / 2, _0xe732x59 / 2 + 62, 0, 'AA', [255, 255, 255, 255], font)
            };
            _0xe732x5d = _0xe732x5d && !_0xe732x61 && _0xe732x62
        };
        if (get(sync, false, true)) {
            set(ref_at_targets, true)
        } else {
            set(ref_at_targets, false)
        };
        const _0xe732x45 = Entity.GetLocalPlayer();
        if (!_0xe732x45 || !alive(_0xe732x45)) {
            return
        };
        const _0xe732x58 = screen_size()[0],
            _0xe732x59 = screen_size()[1];
        font = Render.AddFont('Verdana', 7, 0);
        for (var _0xe732x52 = 0; _0xe732x52 < modules['length']; _0xe732x52++) {
            var _0xe732x5b = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
            const _0xe732x5c = modules[_0xe732x52];
            const _0xe732x5d = get(_0xe732x5c['ref'], false, _0xe732x5c['is_hotkey']);
            const _0xe732x5e = _0xe732x5c['label'];
            if (_0xe732x52 === 1) {
                if (get(sync, false, true)) {
                    _0xe732x5e = '';
                    Render.StringCustom(_0xe732x58 / 2 + 1, _0xe732x59 / 2 + 52.5, 10, 'DYNAMIC', [0, 0, 0, 255], font);
                    Render.StringCustom(_0xe732x58 / 2, _0xe732x59 / 2 + 52, 10, 'DYNAMIC', [200, 151, 239, 255], font)
                } else {
                    _0xe732x5e = '';
                    Render.StringCustom(_0xe732x58 / 2 + 1, _0xe732x59 / 2 + 52.5, 0, 'DEFAULT', [0, 0, 0, 255], font);
                    Render.StringCustom(_0xe732x58 / 2, _0xe732x59 / 2 + 52, 0, 'DEFAULT', [255, 0, 0, 255], font)
                }
            };
            if (_0xe732x52 === 0) {
                if (get(enable, false, true)) {
                    _0xe732x5e = '';
                    Render.StringCustom(_0xe732x58 / 2, _0xe732x59 / 2 + 42, 23, 'Cartof SYNC', [0, 0, 0, 255], font);
                    Render.StringCustom(_0xe732x58 / 2, _0xe732x59 / 2 + 42, 23, 'Cartof SYNC', [235, 145, 30, 255], font)
                } else {
                    _0xe732x5e = '';
                    Render.StringCustom(_0xe732x58 / 2, _0xe732x59 / 2 + 42, 23, 'OPPOSITE', [0, 0, 0, 255], font);
                    Render.StringCustom(_0xe732x58 / 2, _0xe732x59 / 2 + 42, 23, 'OPPOSITE', [177, 151, 255, 255], font)
                }
            };
            const color = _0xe732x5d ? _0xe732x5c['colors']['active'] : _0xe732x5c['colors']['dormant'];
            const _0xe732x63 = [0, 0, 0, 255];
            Render.StringCustom(_0xe732x58 / 2.02, _0xe732x59 / 2 + 40.5 + _0xe732x52 * 11, 0, _0xe732x5e, _0xe732x63, font);
            Render.StringCustom(_0xe732x58 / 2.02, _0xe732x59 / 2 + 40 + _0xe732x52 * 11, 0, _0xe732x5e, color, font);
            const _0xe732x5a = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', indicators_color)
        }
    }
};
callback('CreateMove', 'get_closest_edge');
callback('Draw', 'do_indicators');
callback('CreateMove', 'speed');

function RADTODEG(_0xe732x65) {
    return _0xe732x65 * 180 / Math['PI']
}

function calcAngle(_0xe732x67, _0xe732x68) {
    var _0xe732x69 = [];
    _0xe732x69[0] = _0xe732x67[0] - _0xe732x68[0];
    _0xe732x69[1] = _0xe732x67[1] - _0xe732x68[1];
    _0xe732x69[2] = _0xe732x67[2] - _0xe732x68[2];
    var _0xe732x50 = [];
    var _0xe732x6a = Local.GetViewAngles();
    _0xe732x50[0] = RADTODEG(Math['atan'](_0xe732x69[2] / Math['hypot'](_0xe732x69[0], _0xe732x69[1]))) - _0xe732x6a[0];
    _0xe732x50[1] = RADTODEG(Math['atan'](_0xe732x69[1] / _0xe732x69[0])) - _0xe732x6a[1];
    _0xe732x50[2] = 0;
    if (_0xe732x69[0] >= 0) {
        _0xe732x50[1] += 180
    };
    return _0xe732x50
}

function RADTODEG(_0xe732x65) {
    return _0xe732x65 * 180 / Math['PI']
}

function calcAngle(_0xe732x67, _0xe732x68) {
    var _0xe732x69 = [];
    _0xe732x69[0] = _0xe732x67[0] - _0xe732x68[0];
    _0xe732x69[1] = _0xe732x67[1] - _0xe732x68[1];
    _0xe732x69[2] = _0xe732x67[2] - _0xe732x68[2];
    var _0xe732x50 = [];
    var _0xe732x6a = Local.GetViewAngles();
    _0xe732x50[0] = RADTODEG(Math['atan'](_0xe732x69[2] / Math['hypot'](_0xe732x69[0], _0xe732x69[1]))) - _0xe732x6a[0];
    _0xe732x50[1] = RADTODEG(Math['atan'](_0xe732x69[1] / _0xe732x69[0])) - _0xe732x6a[1];
    _0xe732x50[2] = 0;
    if (_0xe732x69[0] >= 0) {
        _0xe732x50[1] += 180
    };
    return _0xe732x50
}
UI.AddSliderInt('FOV', 0, 35);
UI.AddCheckbox('Anti-Bruteforce');
var shots = 0;

function onBulletImpact() {
    var _0xe732x6d = Entity.GetEntityFromUserID(Event.GetInt('userid'));
    if (_0xe732x6d == Entity.GetLocalPlayer() || Entity.IsTeammate(_0xe732x6d)) {
        return
    };
    var _0xe732x6e = [Event.GetFloat('x'), Event.GetFloat('y'), Event.GetFloat('z')];
    var _0xe732x6f = calcAngle(Entity.GetEyePosition(_0xe732x6d), _0xe732x6e);
    var _0xe732x70 = calcAngle(Entity.GetEyePosition(_0xe732x6d), Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0));
    var _0xe732x69 = [_0xe732x70[0] - _0xe732x6f[0], _0xe732x70[1] - _0xe732x6f[1], 0];
    var _0xe732x71 = Math['sqrt'](_0xe732x69[0] * _0xe732x69[0] + _0xe732x69[1] * _0xe732x69[1]);
    if (_0xe732x71 < UI.GetValue('FOV')) {
        UI.ToggleHotkey('Anti-Aim', 'Fake angles', 'Inverter')
    };
    if (UI.GetValue('Anti-Bruteforce')) {
        shots++;
        if (!(shots % 4)) {
            UI.ToggleHotkey('Anti-Aim', 'Fake angles', 'Inverter')
        }
    }
}
Cheat.RegisterCallback('bullet_impact', 'onBulletImpact');
UI.AddSliderInt('Double tap tolerance', 0, 3);

function can_shift_shot(_0xe732x73) {
    var _0xe732x45 = Entity.GetLocalPlayer();
    var _0xe732x74 = Entity.GetWeapon(_0xe732x45);
    if (_0xe732x45 == null || _0xe732x74 == null) {
        return false
    };
    var _0xe732x75 = Entity.GetProp(_0xe732x45, 'CCSPlayer', 'm_nTickBase');
    var _0xe732x76 = Globals.TickInterval() * (_0xe732x75 - _0xe732x73);
    if (_0xe732x76 < Entity.GetProp(_0xe732x45, 'CCSPlayer', 'm_flNextAttack')) {
        return false
    };
    if (_0xe732x76 < Entity.GetProp(_0xe732x74, 'CBaseCombatWeapon', 'm_flNextPrimaryAttack')) {
        return false
    };
    return true
}

function _TBC_CREATE_MOVE() {
    var _0xe732x62 = Exploit.GetCharge();
    var _0xe732x78 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Double tap tolerance');
    Exploit[(_0xe732x62 != 1 ? 'Enable' : 'Disable') + 'Recharge']();
    if (can_shift_shot(14) && _0xe732x62 != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    };
    Exploit.OverrideTolerance(_0xe732x78);
    Exploit.OverrideShift(14 - _0xe732x78)
}

function _TBC_UNLOAD() {
    Exploit.EnableRecharge()
}
Cheat.RegisterCallback('CreateMove', '_TBC_CREATE_MOVE');
Cheat.RegisterCallback('Unload', '_TBC_UNLOAD');
UI.AddLabel('                   Antiaim            ');
UI.AddSliderInt('Antiaim_x', 0, Global.GetScreenSize()[0]);
UI.AddSliderInt('Antiaim_y', 0, Global.GetScreenSize()[1]);

function in_bounds(_0xe732x7b, _0xe732x58, _0xe732x59, _0xe732x7c, _0xe732x7d) {
    return (_0xe732x7b[0] > _0xe732x58) && (_0xe732x7b[1] > _0xe732x59) && (_0xe732x7b[0] < _0xe732x7c) && (_0xe732x7b[1] < _0xe732x7d)
}

function draw_arc(_0xe732x58, _0xe732x59, _0xe732x7f, _0xe732x80, _0xe732x81, _0xe732x82, color) {
    var precision = (2 * Math['PI']) / 30;
    var _0xe732x4d = Math['PI'] / 180;
    var _0xe732x83 = _0xe732x7f - _0xe732x82;
    var _0xe732x84 = (_0xe732x80 + _0xe732x81) * _0xe732x4d;
    var _0xe732x80 = (_0xe732x80 * Math['PI']) / 180;
    for (; _0xe732x7f > _0xe732x83; --_0xe732x7f) {
        for (var _0xe732x14 = _0xe732x80; _0xe732x14 < _0xe732x84; _0xe732x14 += precision) {
            var _0xe732x85 = Math['round'](_0xe732x58 + _0xe732x7f * Math['cos'](_0xe732x14));
            var _0xe732x86 = Math['round'](_0xe732x59 + _0xe732x7f * Math['sin'](_0xe732x14));
            var _0xe732x87 = Math['round'](_0xe732x58 + _0xe732x7f * Math['cos'](_0xe732x14 + precision));
            var _0xe732x88 = Math['round'](_0xe732x59 + _0xe732x7f * Math['sin'](_0xe732x14 + precision));
            Render.Line(_0xe732x85, _0xe732x86, _0xe732x87, _0xe732x88, color)
        }
    }
}

function main_aa() {
    if (!World.GetServerString()) {
        return
    };
    const _0xe732x58 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Antiaim_x'),
        _0xe732x59 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Antiaim_y');
    var _0xe732x8a = Render.AddFont('Verdana', 7, 100);
    var _0xe732x8b = Local.GetRealYaw();
    var _0xe732x8c = Local.GetFakeYaw();
    var _0xe732x69 = Math['min'](Math['abs'](_0xe732x8b - _0xe732x8c) / 2, 60)['toFixed'](1);
    var _0xe732x8d = Math['min'](Math['round'](1.7 * Math['abs'](_0xe732x69)), 100);
    if (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter')) {
        var _0xe732x48 = '<'
    } else {
        var _0xe732x48 = '>'
    };
    var _0xe732x8e = '    FAKE (' + _0xe732x69.toString() + '  ) | safety: ' + _0xe732x8d.toString() + '% | side: ' + _0xe732x48;
    var _0xe732x8f = Render.TextSizeCustom(_0xe732x8e, _0xe732x8a)[0] + 8;
    Render.FilledRect(_0xe732x58 - _0xe732x8f, _0xe732x59, _0xe732x8f, 2, [89, 89 + (_0xe732x69 / 2), 89 + (_0xe732x69 / 0.4), 255]);
    Render.FilledRect(_0xe732x58 - _0xe732x8f, _0xe732x59 + 2, _0xe732x8f, 18, [17, 17, 17, 255]);
    Render.StringCustom(_0xe732x58 + 5 - _0xe732x8f, _0xe732x59 + 5, 0, _0xe732x8e, [0, 0, 0, 180], _0xe732x8a);
    Render.StringCustom(_0xe732x58 + 4 - _0xe732x8f, _0xe732x59 + 4, 0, _0xe732x8e, [255, 255, 255, 255], _0xe732x8a);
    Render.Circle(_0xe732x58 + 18 - _0xe732x8f + Render.TextSizeCustom('FAKE (' + _0xe732x69.toString(), _0xe732x8a)[0], _0xe732x59 + 8, 1, [255, 255, 255, 255]);
    draw_arc(_0xe732x58 + 7 - _0xe732x8f, _0xe732x59 + 10, 5, 0, _0xe732x69 * 6, 2, [89, 119, 239, 255]);
    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const _0xe732x90 = Global.GetCursorPosition();
        if (in_bounds(_0xe732x90, _0xe732x58 - _0xe732x8f, _0xe732x59, _0xe732x58 + _0xe732x8f, _0xe732x59 + 30)) {
            UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Antiaim_x', _0xe732x90[0] + _0xe732x8f / 2);
            UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Antiaim_y', _0xe732x90[1] - 20)
        }
    }
}
UI.AddLabel('                   Hotkeys            ');
const x1 = UI.AddSliderInt('Hotkeys_x', 0, Global.GetScreenSize()[0]);
const y1 = UI.AddSliderInt('Hotkeys_y', 0, Global.GetScreenSize()[1]);
UI.AddColorPicker('Hotkeys');
var colorhotkeys = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Hotkeys');
if (colorhotkeys[3] == 0) {
    UI.SetColor('Misc', 'JAVASCRIPT', 'Script items', 'Hotkeys', [89, 119, 239, 3])
};
var alpha = 0;
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
var textalpha = 0;
var h = new Array();

function in_bounds(_0xe732x7b, _0xe732x58, _0xe732x59, _0xe732x7c, _0xe732x7d) {
    return (_0xe732x7b[0] > _0xe732x58) && (_0xe732x7b[1] > _0xe732x59) && (_0xe732x7b[0] < _0xe732x7c) && (_0xe732x7b[1] < _0xe732x7d)
}

function main_hotkeys() {
    if (!World.GetServerString()) {
        return
    };
    const _0xe732x58 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Hotkeys_x'),
        _0xe732x59 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Hotkeys_y');
    colorhotkeys = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Hotkeys');
    var _0xe732x8a = Render.AddFont('Verdana', 7, 100);
    var _0xe732xa2 = 8 * Globals.Frametime();
    var _0xe732xa3 = 75;
    var maxwidth = 0;
    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Slow walk')) {
        swalpha = Math['min'](swalpha + _0xe732xa2, 1)
    } else {
        swalpha = swalpha - _0xe732xa2;
        if (swalpha < 0) {
            swalpha = 0
        };
        if (swalpha == 0) {
            h['splice'](h['indexOf']('Slow motion'))
        }
    };
    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck')) {
        fdalpha = Math['min'](fdalpha + _0xe732xa2, 1)
    } else {
        fdalpha = fdalpha - _0xe732xa2;
        if (fdalpha < 0) {
            fdalpha = 0
        };
        if (fdalpha == 0) {
            h['splice'](h['indexOf']('Duck peek assist'))
        }
    };
    if (UI.IsHotkeyActive('Misc', 'GENERAL', 'Movement', 'Auto peek')) {
        apalpha = Math['min'](apalpha + _0xe732xa2, 1)
    } else {
        apalpha = apalpha - _0xe732xa2;
        if (apalpha < 0) {
            apalpha = 0
        };
        if (apalpha == 0) {
            h['splice'](h['indexOf']('Auto peek'))
        }
    };
    if (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter')) {
        aialpha = Math['min'](aialpha + _0xe732xa2, 1)
    } else {
        aialpha = aialpha - _0xe732xa2;
        if (aialpha < 0) {
            aialpha = 0
        };
        if (aialpha == 0) {
            h['splice'](h['indexOf']('Anti-aim inverter'))
        }
    };
    if (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter')) {
        aialpha = Math['min'](aialpha + _0xe732xa2, 1)
    } else {
        aialpha = aialpha - _0xe732xa2;
        if (aialpha < 0) {
            aialpha = 0
        };
        if (aialpha == 0) {
            h['splice'](h['indexOf']('Inverter'))
        }
    };
    if (UI.IsHotkeyActive('Rage', 'GENERAL', 'General', 'Force safe point')) {
        spalpha = Math['min'](spalpha + _0xe732xa2, 1)
    } else {
        spalpha = spalpha - _0xe732xa2;
        if (spalpha < 0) {
            spalpha = 0
        };
        if (spalpha == 0) {
            h['splice'](h['indexOf']('Safe point override'))
        }
    };
    if (UI.IsHotkeyActive('Rage', 'GENERAL', 'General', 'Force body aim')) {
        fbalpha = Math['min'](fbalpha + _0xe732xa2, 1)
    } else {
        fbalpha = fbalpha - _0xe732xa2;
        if (fbalpha < 0) {
            fbalpha = 0
        };
        if (fbalpha == 0) {
            h['splice'](h['indexOf']('Force body aim'))
        }
    };
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap')) {
        dtalpha = Math['min'](dtalpha + _0xe732xa2, 1)
    } else {
        dtalpha = dtalpha - _0xe732xa2;
        if (dtalpha < 0) {
            dtalpha = 0
        };
        if (dtalpha == 0) {
            h['splice'](h['indexOf']('Double tap'))
        }
    };
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots')) {
        hsalpha = Math['min'](hsalpha + _0xe732xa2, 1)
    } else {
        hsalpha = hsalpha - _0xe732xa2;
        if (hsalpha < 0) {
            hsalpha = 0
        };
        if (hsalpha == 0) {
            h['splice'](h['indexOf']('Hide shots'))
        }

    };
    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Slow walk')) {
        if (h['indexOf']('Slow motion') == -1) {
            h['push']('Slow motion')
        }
    };
    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck')) {
        if (h['indexOf']('Duck peek assist') == -1) {
            h['push']('Duck peek assist')
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
    if (h['length'] > 0) {
        alpha = Math['min'](alpha + _0xe732xa2, 1)
    } else {
        alpha = alpha - _0xe732xa2;
        if (alpha < 0) {
            alpha = 0
        }
    };
    for (i = 0; i < h['length']; i++) {
        if (Render.TextSizeCustom(h[i], _0xe732x8a)[0] > maxwidth) {
            maxwidth = Render.TextSizeCustom(h[i], _0xe732x8a)[0]
        }
    };
    if (maxwidth == 0) {
        maxwidth = 50
    };
    _0xe732xa3 = _0xe732xa3 + maxwidth;
    if (alpha > 0) {
        Render.FilledRect(_0xe732x58, _0xe732x59 + 3, _0xe732xa3, 2, [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], alpha * 255]);
        Render.FilledRect(_0xe732x58, _0xe732x59 + 5, _0xe732xa3, 18, [17, 17, 17, alpha * 255]);
        Render.StringCustom(_0xe732x58 + _0xe732xa3 / 2 - (Render.TextSizeCustom('keybinds', _0xe732x8a)[0] / 2) + 2, _0xe732x59 + 9, 0, 'keybinds', [0, 0, 0, alpha * 255 / 1.3], _0xe732x8a);
        Render.StringCustom(_0xe732x58 + _0xe732xa3 / 2 - (Render.TextSizeCustom('keybinds', _0xe732x8a)[0] / 2) + 1, _0xe732x59 + 8, 0, 'keybinds', [255, 255, 255, alpha * 255], _0xe732x8a);
        for (i = 0; i < h['length']; i++) {
            switch (h[i]) {
                case 'Slow motion':
                    Render.FilledRect(_0xe732x58, _0xe732x59 + 23 + 18 * i, _0xe732xa3, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](swalpha * 255, colorhotkeys[3]))]);
                    Render.StringCustom(_0xe732x58 + 3, _0xe732x59 + 26 + 18 * i, 0, h[i], [0, 0, 0, swalpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 + 2, _0xe732x59 + 26 + 18 * i, 0, h[i], [255, 255, 255, swalpha * 255], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 3 + _0xe732xa3 - Render.TextSizeCustom('[holding]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[holding]', [0, 0, 0, swalpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 2 + _0xe732xa3 - Render.TextSizeCustom('[holding]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[holding]', [255, 255, 255, swalpha * 255], _0xe732x8a);
                    break;
                case 'Duck peek assist':
                    Render.FilledRect(_0xe732x58, _0xe732x59 + 23 + 18 * i, _0xe732xa3, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](fdalpha * 255, colorhotkeys[3]))]);
                    Render.StringCustom(_0xe732x58 + 3, _0xe732x59 + 26 + 18 * i, 0, h[i], [0, 0, 0, fdalpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 + 2, _0xe732x59 + 26 + 18 * i, 0, h[i], [255, 255, 255, fdalpha * 255], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 3 + _0xe732xa3 - Render.TextSizeCustom('[holding]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[holding]', [0, 0, 0, fdalpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 2 + _0xe732xa3 - Render.TextSizeCustom('[holding]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[holding]', [255, 255, 255, fdalpha * 255], _0xe732x8a);
                    break;
                case 'Auto peek':
                    Render.FilledRect(_0xe732x58, _0xe732x59 + 23 + 18 * i, _0xe732xa3, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](apalpha * 255, colorhotkeys[3]))]);
                    Render.StringCustom(_0xe732x58 + 3, _0xe732x59 + 26 + 18 * i, 0, h[i], [0, 0, 0, apalpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 + 2, _0xe732x59 + 26 + 18 * i, 0, h[i], [255, 255, 255, apalpha * 255], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 3 + _0xe732xa3 - Render.TextSizeCustom('[holding]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[holding]', [0, 0, 0, apalpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 2 + _0xe732xa3 - Render.TextSizeCustom('[holding]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[holding]', [255, 255, 255, apalpha * 255], _0xe732x8a);
                    break;
                case 'Anti-aim inverter':
                    Render.FilledRect(_0xe732x58, _0xe732x59 + 23 + 18 * i, _0xe732xa3, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](aialpha * 255, colorhotkeys[3]))]);
                    Render.StringCustom(_0xe732x58 + 3, _0xe732x59 + 26 + 18 * i, 0, h[i], [0, 0, 0, aialpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 + 2, _0xe732x59 + 26 + 18 * i, 0, h[i], [255, 255, 255, aialpha * 255], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 3 + _0xe732xa3 - Render.TextSizeCustom('[toggled]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[toggled]', [0, 0, 0, aialpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 2 + _0xe732xa3 - Render.TextSizeCustom('[toggled]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[toggled]', [255, 255, 255, aialpha * 255], _0xe732x8a);
                    break;
                case 'Safe point override':
                    Render.FilledRect(_0xe732x58, _0xe732x59 + 23 + 18 * i, _0xe732xa3, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](spalpha * 255, colorhotkeys[3]))]);
                    Render.StringCustom(_0xe732x58 + 3, _0xe732x59 + 26 + 18 * i, 0, h[i], [0, 0, 0, spalpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 + 2, _0xe732x59 + 26 + 18 * i, 0, h[i], [255, 255, 255, spalpha * 255], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 3 + _0xe732xa3 - Render.TextSizeCustom('[toggled]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[toggled]', [0, 0, 0, spalpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 2 + _0xe732xa3 - Render.TextSizeCustom('[toggled]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[toggled]', [255, 255, 255, spalpha * 255], _0xe732x8a);
                    break;
                case 'Force body aim':
                    Render.FilledRect(_0xe732x58, _0xe732x59 + 23 + 18 * i, _0xe732xa3, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](fbalpha * 255, colorhotkeys[3]))]);
                    Render.StringCustom(_0xe732x58 + 3, _0xe732x59 + 26 + 18 * i, 0, h[i], [0, 0, 0, fbalpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 + 2, _0xe732x59 + 26 + 18 * i, 0, h[i], [255, 255, 255, fbalpha * 255], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 3 + _0xe732xa3 - Render.TextSizeCustom('[toggled]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[toggled]', [0, 0, 0, fbalpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 2 + _0xe732xa3 - Render.TextSizeCustom('[toggled]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[toggled]', [255, 255, 255, fbalpha * 255], _0xe732x8a);
                    break;
                case 'Double tap':
                    Render.FilledRect(_0xe732x58, _0xe732x59 + 23 + 18 * i, _0xe732xa3, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](dtalpha * 255, colorhotkeys[3]))]);
                    Render.StringCustom(_0xe732x58 + 3, _0xe732x59 + 26 + 18 * i, 0, h[i], [0, 0, 0, dtalpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 + 2, _0xe732x59 + 26 + 18 * i, 0, h[i], [255, 255, 255, dtalpha * 255], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 3 + _0xe732xa3 - Render.TextSizeCustom('[toggled]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[toggled]', [0, 0, 0, dtalpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 2 + _0xe732xa3 - Render.TextSizeCustom('[toggled]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[toggled]', [255, 255, 255, dtalpha * 255], _0xe732x8a);
                    break;
                case 'Hide shots':
                    Render.FilledRect(_0xe732x58, _0xe732x59 + 23 + 18 * i, _0xe732xa3, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](hsalpha * 255, colorhotkeys[3]))]);
                    Render.StringCustom(_0xe732x58 + 3, _0xe732x59 + 26 + 18 * i, 0, h[i], [0, 0, 0, hsalpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 + 2, _0xe732x59 + 26 + 18 * i, 0, h[i], [255, 255, 255, hsalpha * 255], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 3 + _0xe732xa3 - Render.TextSizeCustom('[toggled]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[toggled]', [0, 0, 0, hsalpha * 255 / 1.3], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 2 + _0xe732xa3 - Render.TextSizeCustom('[toggled]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[toggled]', [255, 255, 255, hsalpha * 255], _0xe732x8a);
                    break;
                case 'Damage override':
                    Render.FilledRect(_0xe732x58, _0xe732x59 + 23 + 18 * i, _0xe732xa3, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](255, colorhotkeys[3]))]);
                    Render.StringCustom(_0xe732x58 + 3, _0xe732x59 + 26 + 18 * i, 0, h[i], [0, 0, 0, 255], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 + 2, _0xe732x59 + 26 + 18 * i, 0, h[i], [255, 255, 255, 255], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 3 + _0xe732xa3 - Render.TextSizeCustom('[toggled]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[toggled]', [0, 0, 0, 255], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 2 + _0xe732xa3 - Render.TextSizeCustom('[toggled]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[toggled]', [255, 255, 255, 255], _0xe732x8a);
                    break;
                case 'Head only':
                    Render.FilledRect(_0xe732x58, _0xe732x59 + 23 + 18 * i, _0xe732xa3, 18, [17, 17, 17, Math['min'](colorhotkeys[3], Math['min'](255, colorhotkeys[3]))]);
                    Render.StringCustom(_0xe732x58 + 3, _0xe732x59 + 26 + 18 * i, 0, h[i], [0, 0, 0, 255], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 + 2, _0xe732x59 + 26 + 18 * i, 0, h[i], [255, 255, 255, 255], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 3 + _0xe732xa3 - Render.TextSizeCustom('[toggled]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[toggled]', [0, 0, 0, 255], _0xe732x8a);
                    Render.StringCustom(_0xe732x58 - 2 + _0xe732xa3 - Render.TextSizeCustom('[toggled]', _0xe732x8a)[0], _0xe732x59 + 26 + 18 * i, 0, '[toggled]', [255, 255, 255, 255], _0xe732x8a);
                    break
            }
        }
    };
    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const _0xe732x90 = Global.GetCursorPosition();
        if (in_bounds(_0xe732x90, _0xe732x58, _0xe732x59, _0xe732x58 + _0xe732xa3, _0xe732x59 + 30)) {
            UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Hotkeys_x', _0xe732x90[0] - _0xe732xa3 / 2);
            UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Hotkeys_y', _0xe732x90[1] - 20)
        }
    }
}
Global.RegisterCallback('Draw', 'main_hotkeys');
Global.RegisterCallback('Draw', 'main_aa');

function get_icon(_0xe732x2) {
    var _0xe732xa5 = '';
    switch (_0xe732x2) {
        case 'desert eagle':
            _0xe732xa5 = 'a';
            break;
        case 'dual berettas':
            _0xe732xa5 = 'b';
            break;
        case 'five seven':
            _0xe732xa5 = 'c';
            break;
        case 'glock 18':
            _0xe732xa5 = 'd';
            break;
        case 'ak 47':
            _0xe732xa5 = 'e';
            break;
        case 'aug':
            _0xe732xa5 = 'f';
            break;
        case 'awp':
            _0xe732xa5 = 'g';
            break;
        case 'famas':
            _0xe732xa5 = 'h';
            break;
        case 'm249':
            _0xe732xa5 = 'i';
            break;
        case 'g3sg1':
            _0xe732xa5 = 'j';
            break;
        case 'galil ar':
            _0xe732xa5 = 'k';
            break;
        case 'm4a4':
            _0xe732xa5 = 'l';
            break;
        case 'm4a1 s':
            _0xe732xa5 = 'm';
            break;
        case 'mac 10':
            _0xe732xa5 = 'n';
            break;
        case 'p2000':
            _0xe732xa5 = 'o';
            break;
        case 'mp5 sd':
            _0xe732xa5 = 'p';
            break;
        case 'ump 45':
            _0xe732xa5 = 'q';
            break;
        case 'xm1014':
            _0xe732xa5 = 'r';
            break;
        case 'pp bizon':
            _0xe732xa5 = 's';
            break;
        case 'mag 7':
            _0xe732xa5 = 't';
            break;
        case 'negev':
            _0xe732xa5 = 'u';
            break;
        case 'sawed off':
            _0xe732xa5 = 'v';
            break;
        case 'tec 9':
            _0xe732xa5 = 'w';
            break;
        case 'zeus x27':
            _0xe732xa5 = 'x';
            break;
        case 'p250':
            _0xe732xa5 = 'y';
            break;
        case 'mp7':
            _0xe732xa5 = 'z';
            break;
        case 'mp9':
            _0xe732xa5 = 'A';
            break;
        case 'nova':
            _0xe732xa5 = 'B';
            break;
        case 'p90':
            _0xe732xa5 = 'C';
            break;
        case 'scar 20':
            _0xe732xa5 = 'D';
            break;
        case 'sg 553':
            _0xe732xa5 = 'E';
            break;
        case 'ssg 08':
            _0xe732xa5 = 'F';
            break;
        case 'knife':
            _0xe732xa5 = 'G';
            break;
        case 'flashbang':
            _0xe732xa5 = 'H';
            break;
        case 'high explosive grenade':
            _0xe732xa5 = 'I';
            break;
        case 'smoke grenade':
            _0xe732xa5 = 'J';
            break;
        case 'molotov':
            _0xe732xa5 = 'K';
            break;
        case 'decoy grenade':
            _0xe732xa5 = 'L';
            break;
        case 'incendiary grenade':
            _0xe732xa5 = 'M';
            break;
        case 'c4 explosive':
            _0xe732xa5 = 'N';
            break;
        case 'usp s':
            _0xe732xa5 = 'P';
            break;
        case 'cz75 auto':
            _0xe732xa5 = 'Q';
            break;
        case 'r8 revolver':
            _0xe732xa5 = 'R';
            break;
        case 'bayonet':
            _0xe732xa5 = 'V';
            break;
        case 'flip knife':
            _0xe732xa5 = 'W';
            break;
        case 'gut knife':
            _0xe732xa5 = 'X';
            break;
        case 'karambit':
            _0xe732xa5 = 'Y';
            break;
        case 'm9 bayonet':
            _0xe732xa5 = 'Z';
            break;
        case 'falchion knife':
            _0xe732xa5 = '1';
            break;
        case 'bowie knife':
            _0xe732xa5 = '2';
            break;
        case 'butterfly knife':
            _0xe732xa5 = '3';
            break;
        case 'shadow daggers':
            _0xe732xa5 = '4';
            break;
        case 'ursus knife':
            _0xe732xa5 = '5';
            break;
        case 'navaja knife':
            _0xe732xa5 = '6';
            break;
        case 'stiletto knife':
            _0xe732xa5 = '7';
            break;
        case 'skeleton knife':
            _0xe732xa5 = '8';
            break;
        case 'huntsman knife':
            _0xe732xa5 = '0';
            break;
        case 'talon knife':
            _0xe732xa5 = '8';
            break;
        case 'classic knife':
            _0xe732xa5 = '25';
            break;
        case 'paracord knife':
            _0xe732xa5 = 'Z';
            break;
        case 'survival knife':
            _0xe732xa5 = 'Z';
            break;
        case 'nomad knife':
            _0xe732xa5 = 'Z';
            break;
        default:
            _0xe732xa5 = '';
            break
    };
    return _0xe732xa5
}
UI.AddLabel('                   Tickbase            ');
UI.AddSliderInt('Tickbase_x', 0, Global.GetScreenSize()[0]);
UI.AddSliderInt('Tickbase_y', 0, Global.GetScreenSize()[1]);

function in_bounds(_0xe732x7b, _0xe732x58, _0xe732x59, _0xe732x7c, _0xe732x7d) {
    return (_0xe732x7b[0] > _0xe732x58) && (_0xe732x7b[1] > _0xe732x59) && (_0xe732x7b[0] < _0xe732x7c) && (_0xe732x7b[1] < _0xe732x7d)
}
var fa = 0;
var sa = 0;

function main_dt() {
    if (!World.GetServerString()) {
        return
    };
    const _0xe732x58 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Tickbase_x'),
        _0xe732x59 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Tickbase_y');
    localplayer_index = Entity.GetLocalPlayer();
    localplayer_weapon = Entity.GetWeapon(localplayer_index);
    weapon_name = Entity.GetName(localplayer_weapon);
    g_Local_classname = Entity.GetClassName(localplayer_weapon);
    var _0xe732xa9 = Entity.GetProp(localplayer_weapon, 'CBaseCombatWeapon', 'm_flNextPrimaryAttack');
    var _0xe732xaa = false;
    if (_0xe732xa9 <= Globals.Curtime()) {
        _0xe732xaa = true
    };
    var _0xe732xa2 = 8 * Globals.Frametime();
    var _0xe732x8a = Render.AddFont('Verdana', 7, 100);
    var _0xe732xab = Render.AddFont('bullet', 18, 100);
    if (_0xe732xaa && Exploit.GetCharge() == 1 && UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap')) {
        var _0xe732x8e = 'DT [v2.8 debug] | tickbase(v): 16';
        var color = [89, 119, 239, 255]
    } else {
        if (_0xe732xaa && Exploit.GetCharge() == 1 && UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots')) {
            var _0xe732x8e = 'DT [v2.8 debug] | tickbase(v): 7';
            var color = [89, 119, 239, 255]
        } else {
            var _0xe732x8e = 'DT [v2.8 debug] | tickbase(v): 0';
            var color = [89, 89, 89, 255]
        }
    };
    var _0xe732x8f = Render.TextSizeCustom(_0xe732x8e, _0xe732x8a)[0] + 8;
    Render.FilledRect(_0xe732x58, _0xe732x59, _0xe732x8f, 2, color);
    Render.FilledRect(_0xe732x58, _0xe732x59 + 2, _0xe732x8f, 18, [17, 17, 17, 255]);
    Render.StringCustom(_0xe732x58 + 5, _0xe732x59 + 5, 0, _0xe732x8e, [0, 0, 0, 180], _0xe732x8a);
    Render.StringCustom(_0xe732x58 + 4, _0xe732x59 + 4, 0, _0xe732x8e, [255, 255, 255, 255], _0xe732x8a);
    Render.String(_0xe732x58 + 4, _0xe732x59 + 22, 0, get_icon(weapon_name), [255, 255, 255, 255], 5);
    if ((g_Local_classname == 'CKnife' || g_Local_classname == 'CHEGrenade' || g_Local_classname == 'CMolotovGrenade' || g_Local_classname == 'CIncendiaryGrenade' || g_Local_classname == 'CFlashbang' || g_Local_classname == 'CSmokeGrenade' || g_Local_classname == 'CDecoyGrenade' || g_Local_classname == 'CWeaponTaser' || g_Local_classname == 'CC4')) {} else {
        if (_0xe732xaa) {
            fa = Math['min'](fa + _0xe732xa2, 1);
            Render.StringCustom(_0xe732x58 + 10 + Render.TextSize(get_icon(weapon_name), 5)[0], _0xe732x59 + 18, 0, 'A', [255, 255, 255, fa * 255], _0xe732xab)
        } else {
            fa = 0
        };
        if (_0xe732xaa && Exploit.GetCharge() == 1 && UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap')) {
            sa = Math['min'](sa + _0xe732xa2, 1);
            Render.StringCustom(_0xe732x58 + 30 + Render.TextSize(get_icon(weapon_name), 5)[0], _0xe732x59 + 18, 0, 'A', [255, 255, 255, sa * 255], _0xe732xab)
        } else {
            sa = 0
        }
    };
    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const _0xe732x90 = Global.GetCursorPosition();
        if (in_bounds(_0xe732x90, _0xe732x58, _0xe732x59, _0xe732x58 + _0xe732x8f, _0xe732x59 + 30)) {
            UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Tickbase_x', _0xe732x90[0] - _0xe732x8f / 2);
            UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Tickbase_y', _0xe732x90[1] - 20)
        }
    }
}
Global.RegisterCallback('Draw', 'main_dt');
UI.AddColorPicker('Watermark');
var color = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Watermark');
if (color[3] == 0) {
    UI.SetColor('Misc', 'JAVASCRIPT', 'Script items', 'Watermark', [89, 119, 239, 255])
};

function draw() {
    if (!World.GetServerString()) {
        return
    };
    var _0xe732xad = new Date();
    var _0xe732xae = _0xe732xad['getHours']();
    var _0xe732xaf = _0xe732xad['getMinutes']();
    var _0xe732xb0 = _0xe732xad['getSeconds']();
    var _0xe732xb1 = _0xe732xae <= 9 ? '0' + _0xe732xae + ':' : _0xe732xae + ':';
    var _0xe732xb2 = _0xe732xaf <= 9 ? '0' + _0xe732xaf + ':' : _0xe732xaf + ':';
    var _0xe732xb3 = _0xe732xb0 <= 9 ? '0' + _0xe732xb0 : _0xe732xb0;
    var _0xe732xb4 = Globals.Tickrate().toString();
    var _0xe732xb5 = Math['round'](Entity.GetProp(Entity.GetLocalPlayer(), 'CPlayerResource', 'm_iPing')).toString();
    color = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Watermark');
    var _0xe732x8a = Render.AddFont('Verdana', 7, 400);
    var _0xe732x8f = Render.TextSizeCustom(_0xe732x8e, _0xe732x8a)[0] + 8;
    var _0xe732x58 = Global.GetScreenSize()[0];
    _0xe732x58 = _0xe732x58 - _0xe732x8f - 10;
    Render.FilledRect(_0xe732x58, 10, _0xe732x8f, 2, [color[0], color[1], color[2], 255]);
    Render.FilledRect(_0xe732x58, 12, _0xe732x8f, 18, [17, 17, 17, color[3]]);
    Render.StringCustom(_0xe732x58 + 4, 10 + 4, 0, _0xe732x8e, [255, 255, 255, 255], _0xe732x8a)
}
Cheat.RegisterCallback('Draw', 'draw')