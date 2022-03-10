x = 100;
var y = 100, width = 520, height = 410, indropdown = false, col_top = [
        112,
        49,
        175,
        255
    ], col_bottom = [
        145,
        53,
        255,
        255
    ], tag = [
        '[--------]',
        '[--------]',
        '[--------]',
        '[M-------]',
        '[M-------]',
        '[M-------]',
        '[Mo------]',
        '[Mo------]',
        '[Mo------]',
        '[Mon-----]',
        '[Mon-----]',
        '[Mon-----]',
        '[Mono----]',
        '[Mono----]',
        '[Mono----]',
        '[Monol---]',
        '[Monol---]',
        '[Monol---]',
        '[Monoli--]',
        '[Monoli--]',
        '[Monoli--]',
        '[Monolit-]',
        '[Monolit-]',
        '[Monolit-]',
        '[Monolith]',
        '[Monolith]',
        '[Monolith]',
        '[Monolith]',
        '[Monolith]',
        '[Monolith]',
        '[Monolith]',
        '[Monolith]',
        '[Monolith]',
        '[Monolith]',
        '[Monolith]',
        '[Monolith]',
        '[>onolith]',
        '[>onolith]',
        '[>onolith]',
        '[s>nolith]',
        '[s>nolith]',
        '[s>nolith]',
        '[js>olith]',
        '[js>olith]',
        '[js>olith]',
        '[<js>lith]',
        '[<js>lith]',
        '[<js>lith]',
        '[-<js>ith]',
        '[-<js>ith]',
        '[-<js>ith]',
        '[--<js>th]',
        '[--<js>th]',
        '[--<js>th]',
        '[---<js>h]',
        '[---<js>h]',
        '[---<js>h]',
        '[----<js>]',
        '[----<js>]',
        '[----<js>]',
        '[-----<js]',
        '[-----<js]',
        '[-----<js]',
        '[------<j]',
        '[------<j]',
        '[------<j]',
        '[-------<]',
        '[-------<]',
        '[-------<]',
        '[--------]',
        '[--------]',
        '[--------]',
        '[--------]'
    ], last_time = 1.3, index = 0, menuopen = true, hometab = true, ragetab = false, legittab = false, espcreator = false, antiaimtab = false, visualstab = false, misctab = false, namepos = [
        160,
        280
    ], weaponpos = [
        160,
        300
    ], eb_enabled = false, eb_box = false, eb_health = false, visuals_indicators = false, other_fastdtrecharge = false, acc_safepoint_onlimbs = false, acc_baim_slowwalk = false, resolver_general = false, doubletap_enable = false, doubletap_tolerance_value = [
        0,
        0
    ], doubletap_shift_value = [
        0,
        0
    ], minimumdamage_enable = false, minimumdamage_override_value_autosniper = [
        0,
        0
    ], minimumdamage_default_value_autosniper = [
        0,
        0
    ], minimumdamage_override_value_scout = [
        0,
        0
    ], minimumdamage_default_value_scout = [
        0,
        0
    ], minimumdamage_override_value_awp = [
        0,
        0
    ], minimumdamage_default_value_awp = [
        0,
        0
    ], minimumdamage_override_value_heavypistols = [
        0,
        0
    ], minimumdamage_default_value_heavypistols = [
        0,
        0
    ], minimumdamage_array_opened = false, minimumdamage_array_selectedoption = 0, minimumdamage_array = [
        'auto sniper',
        'scout',
        'awp',
        'heavy pistols'
    ], minimumdamage_keybind = 58, other_forcedoubletap = false, other_noscopedistance = false, other_noscope_keybind = 58, visuals_general_indicator = false, visuals_general_indicatorarray_opened = false, visuals_general_indicatorarray_selectedoptions = [], visuals_general_indicatorarray = [
        'anti-aim inversion',
        'doubletap'
    ], visuals_informationbox = false, visuals_informationbox_x = [
        0,
        0
    ], visuals_informationbox_y = [
        0,
        0
    ], legit_triggerbot_hitchance = false, legit_triggerbot_hitchance_keybind = 58, legit_triggerbot_hitchance_value = [
        0,
        0
    ], legit_triggerbot_hitchance_resetvalue = [
        UI.GetValue('Legit', 'GENERAL', 'Triggerbot', 'Hitchance'),
        UI.GetValue('Legit', 'GENERAL', 'Triggerbot', 'Hitchance') / 0.59
    ], branding_clantag = false, invert_onshot = false, invert_onhit = false, e_onpeek = false, fakelag_step = false, fakelag_step_delay = [
        1000,
        34
    ], globaltime = Globals.Realtime(), keyNames = [
        'KEY_Z',
        'KEY_Y',
        'KEY_X',
        'KEY_W',
        'KEY_V',
        'KEY_U',
        'KEY_T',
        'KEY_S',
        'KEY_R',
        'KEY_Q',
        'KEY_P',
        'KEY_O',
        'KEY_N',
        'KEY_M',
        'KEY_L',
        'KEY_K',
        'KEY_J',
        'KEY_F',
        'KEY_G',
        'KEY_H',
        'KEY_I',
        'KEY_E',
        'KEY_D',
        'KEY_C',
        'KEY_B',
        'KEY_A',
        'NUM_9',
        'NUM_8',
        'NUM_7',
        'NUM_6',
        'NUM_5',
        'NUM_4',
        'NUM_3',
        'NUM_2',
        'NUM_1',
        'NUM_0',
        'VK_DELETE',
        'VK_INSERT',
        'VK_DOWN',
        'VK_RIGHT',
        'VK_UP',
        'VK_LEFT',
        'VK_HOME',
        'VK_SPACE',
        'VK_LBUTTON',
        'VK_RBUTTON',
        'VK_MBUTTON',
        'VK_XBUTTON1',
        'VK_XBUTTON2',
        'VK_BACK',
        'VK_TAB',
        'VK_RETURN',
        'VK_SHIFT',
        'VK_CONTROL',
        'VK_MENU',
        'VK_CAPITAL',
        'VK_ESCAPE'
    ], keyCodes = [
        90,
        89,
        88,
        87,
        86,
        85,
        84,
        83,
        82,
        81,
        80,
        79,
        78,
        77,
        76,
        75,
        74,
        70,
        71,
        72,
        73,
        69,
        68,
        67,
        66,
        65,
        57,
        56,
        55,
        54,
        53,
        52,
        51,
        50,
        49,
        48,
        46,
        45,
        40,
        39,
        38,
        37,
        36,
        32,
        1,
        2,
        4,
        5,
        6,
        8,
        9,
        13,
        16,
        17,
        18,
        20,
        27
    ], Base64 = {
        _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        encode: function (_0x394ad7) {
            var _0x1abec7 = '', _0x281d61, _0x1c54e2, _0x4c2d76, _0x194f6e, _0x39326b, _0x4c6212, _0x21265d, _0x12df05 = 0;
            _0x394ad7 = Base64._utf8_encode(_0x394ad7);
            while (_0x12df05 < _0x394ad7.length) {
                _0x281d61 = _0x394ad7.charCodeAt(_0x12df05++);
                _0x1c54e2 = _0x394ad7.charCodeAt(_0x12df05++);
                _0x4c2d76 = _0x394ad7.charCodeAt(_0x12df05++);
                _0x194f6e = _0x281d61 >> 2;
                _0x39326b = (_0x281d61 & 3) << 4 | _0x1c54e2 >> 4;
                _0x4c6212 = (_0x1c54e2 & 15) << 2 | _0x4c2d76 >> 6;
                _0x21265d = _0x4c2d76 & 63;
                if (isNaN(_0x1c54e2)) {
                    _0x4c6212 = _0x21265d = 64;
                } else {
                    if (isNaN(_0x4c2d76)) {
                        _0x21265d = 64;
                    }
                }
                _0x1abec7 = _0x1abec7 + this._keyStr.charAt(_0x194f6e) + this._keyStr.charAt(_0x39326b) + this._keyStr.charAt(_0x4c6212) + this._keyStr.charAt(_0x21265d);
            }
            return _0x1abec7;
        },
        decode: function (_0x44ee86) {
            var _0x2845af = '', _0x2ef254, _0x193f8a, _0x124663, _0x544fd2, _0x3c7d22, _0x4437f4, _0x220bae, _0x55cf87 = 0;
            _0x44ee86 = _0x44ee86.replace(/[^A-Za-z0-9\+\/\=]/g, '');
            while (_0x55cf87 < _0x44ee86.length) {
                _0x544fd2 = this._keyStr.indexOf(_0x44ee86.charAt(_0x55cf87++));
                _0x3c7d22 = this._keyStr.indexOf(_0x44ee86.charAt(_0x55cf87++));
                _0x4437f4 = this._keyStr.indexOf(_0x44ee86.charAt(_0x55cf87++));
                _0x220bae = this._keyStr.indexOf(_0x44ee86.charAt(_0x55cf87++));
                _0x2ef254 = _0x544fd2 << 2 | _0x3c7d22 >> 4;
                _0x193f8a = (_0x3c7d22 & 15) << 4 | _0x4437f4 >> 2;
                _0x124663 = (_0x4437f4 & 3) << 6 | _0x220bae;
                _0x2845af = _0x2845af + String.fromCharCode(_0x2ef254);
                if (_0x4437f4 != 64) {
                    _0x2845af = _0x2845af + String.fromCharCode(_0x193f8a);
                }
                if (_0x220bae != 64) {
                    _0x2845af = _0x2845af + String.fromCharCode(_0x124663);
                }
            }
            _0x2845af = Base64._utf8_decode(_0x2845af);
            return _0x2845af;
        },
        _utf8_encode: function (_0x10d49e) {
            _0x10d49e = _0x10d49e.replace(/\r\n/g, '\n');
            var _0x34ebfe = '';
            for (var _0xf599fa = 0; _0xf599fa < _0x10d49e.length; _0xf599fa++) {
                var _0x24fdc2 = _0x10d49e.charCodeAt(_0xf599fa);
                if (_0x24fdc2 < 128) {
                    _0x34ebfe += String.fromCharCode(_0x24fdc2);
                } else {
                    if (_0x24fdc2 > 127 && _0x24fdc2 < 2048) {
                        _0x34ebfe += String.fromCharCode(_0x24fdc2 >> 6 | 192);
                        _0x34ebfe += String.fromCharCode(_0x24fdc2 & 63 | 128);
                    } else {
                        _0x34ebfe += String.fromCharCode(_0x24fdc2 >> 12 | 224);
                        _0x34ebfe += String.fromCharCode(_0x24fdc2 >> 6 & 63 | 128);
                        _0x34ebfe += String.fromCharCode(_0x24fdc2 & 63 | 128);
                    }
                }
            }
            return _0x34ebfe;
        },
        _utf8_decode: function (_0x11e330) {
            var _0x9d469d = '', _0x5f3619 = 0, _0x78f69f = c1 = c2 = 0;
            while (_0x5f3619 < _0x11e330.length) {
                _0x78f69f = _0x11e330.charCodeAt(_0x5f3619);
                if (_0x78f69f < 128) {
                    _0x9d469d += String.fromCharCode(_0x78f69f);
                    _0x5f3619++;
                } else {
                    if (_0x78f69f > 191 && _0x78f69f < 224) {
                        c2 = _0x11e330.charCodeAt(_0x5f3619 + 1);
                        _0x9d469d += String.fromCharCode((_0x78f69f & 31) << 6 | c2 & 63);
                        _0x5f3619 += 2;
                    } else {
                        c2 = _0x11e330.charCodeAt(_0x5f3619 + 1);
                        c3 = _0x11e330.charCodeAt(_0x5f3619 + 2);
                        _0x9d469d += String.fromCharCode((_0x78f69f & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                        _0x5f3619 += 3;
                    }
                }
            }
            return _0x9d469d;
        }
    };
function create_string(_0x3d894d, _0x5be091, _0x4bce41, _0x1a20e8, _0x2af17c) {
    var _0x157a36 = Render.AddFont('Roboto', 8, 150);
    Render.StringCustom(_0x3d894d - 1, _0x5be091, _0x4bce41, _0x1a20e8, [
        0,
        0,
        0,
        255
    ], _0x157a36);
    Render.StringCustom(_0x3d894d + 1, _0x5be091, _0x4bce41, _0x1a20e8, [
        0,
        0,
        0,
        255
    ], _0x157a36);
    Render.StringCustom(_0x3d894d, _0x5be091 - 1, _0x4bce41, _0x1a20e8, [
        0,
        0,
        0,
        255
    ], _0x157a36);
    Render.StringCustom(_0x3d894d, _0x5be091 + 1, _0x4bce41, _0x1a20e8, [
        0,
        0,
        0,
        255
    ], _0x157a36);
    Render.StringCustom(_0x3d894d, _0x5be091, _0x4bce41, _0x1a20e8, _0x2af17c, _0x157a36);
}
function create_menu(_0x28ab43, _0x555ec5, _0x4ebf05, _0x2a81b4) {
    Render.GradientRect(_0x28ab43 + 7, _0x555ec5 + 3, _0x4ebf05 - 14, 4, 0, col_top, col_bottom);
    Render.FilledRect(_0x28ab43 + 7, _0x555ec5 + 7, _0x4ebf05 - 14, _0x2a81b4 - 14, [
        24,
        24,
        24,
        250
    ]);
    Render.Rect(_0x28ab43 + 7, _0x555ec5 + 7, _0x4ebf05 - 14, _0x2a81b4 - 14, [
        20,
        20,
        20,
        150
    ]);
    Render.Rect(_0x28ab43 + 20, _0x555ec5 + 36, _0x4ebf05 - 40, _0x2a81b4 - 55, [
        40,
        40,
        40,
        100
    ]);
}
function create_tab(_0x5bbc56, _0x18ce92, _0x2b47ea, _0x7795c7) {
    var _0x30e711 = Input.GetCursorPosition(), _0x207283 = _0x30e711[0], _0x3971a7 = _0x30e711[1], _0x4d02f8 = false;
    if (_0x7795c7) {
        Render.FilledRect(_0x18ce92, _0x2b47ea + 16, 56, 2, col_bottom);
        create_string(_0x18ce92 + 28, _0x2b47ea, 1, _0x5bbc56, [
            180,
            180,
            180,
            255
        ]);
    } else {
        Render.FilledRect(_0x18ce92, _0x2b47ea + 16, 56, 1, [
            40,
            40,
            40,
            250
        ]);
        create_string(_0x18ce92 + 28, _0x2b47ea, 1, _0x5bbc56, [
            180,
            180,
            180,
            255
        ]);
    }
    if (_0x207283 > _0x18ce92 && _0x207283 < _0x18ce92 + 56 && _0x3971a7 > _0x2b47ea && _0x3971a7 < _0x2b47ea + 18 && !_0x7795c7 && !indropdown) {
        create_string(_0x18ce92 + 32, _0x2b47ea, 5, _0x5bbc56, [
            83,
            0,
            122,
            255
        ]);
        create_string(_0x18ce92 + 27, _0x2b47ea, 1, _0x5bbc56, [
            182,
            58,
            255,
            255
        ]);
        Render.FilledRect(_0x18ce92, _0x2b47ea + 16, 56, 2, [
            108,
            36,
            181,
            255
        ]);
        if (Input.IsKeyPressed(1) && Globals.Realtime() > globaltime + 0.2) {
            globaltime = Globals.Realtime();
            _0x4d02f8 = true;
        }
    }
    return _0x4d02f8;
}
function create_group(_0x3b92d0, _0x3fc10e, _0x429c41, _0x244b11) {
    create_string(_0x3fc10e + 10, _0x429c41 - 5, 0, _0x3b92d0, [
        255,
        255,
        255,
        255
    ]);
    var _0x43d63f = Render.AddFont('Small Fonts', 8, 300), _0x54711d = Render.TextSizeCustom(_0x3b92d0, _0x43d63f)[0];
    Render.Line(_0x3fc10e, _0x429c41, _0x3fc10e + 5, _0x429c41, [
        40,
        40,
        40,
        255
    ]);
    Render.Line(_0x3fc10e + _0x54711d + 15, _0x429c41, _0x3fc10e + 210, _0x429c41, [
        40,
        40,
        40,
        255
    ]);
    Render.Line(_0x3fc10e + 210, _0x429c41, _0x3fc10e + 210, _0x429c41 + _0x244b11, [
        40,
        40,
        40,
        255
    ]);
    Render.Line(_0x3fc10e + 210, _0x429c41 + _0x244b11, _0x3fc10e, _0x429c41 + _0x244b11, [
        40,
        40,
        40,
        255
    ]);
    Render.Line(_0x3fc10e, _0x429c41 + _0x244b11, _0x3fc10e, _0x429c41, [
        40,
        40,
        40,
        255
    ]);
    return true;
}
function create_checkbox(_0x3670e2, _0x582d44, _0x2a8353, _0x1c31a2) {
    var _0x266f82 = Input.GetCursorPosition(), _0x6bacee = _0x266f82[0], _0x1a0a51 = _0x266f82[1], _0x1b84f5 = _0x1c31a2;
    if (_0x1c31a2) {
        Render.GradientRect(_0x582d44, _0x2a8353, 7, 8, 0, col_top, col_bottom);
        Render.Rect(_0x582d44, _0x2a8353, 8, 8, [
            0,
            0,
            0,
            255
        ]);
    } else {
        Render.FilledRect(_0x582d44, _0x2a8353, 7, 8, [
            60,
            60,
            60,
            255
        ]);
        Render.Rect(_0x582d44, _0x2a8353, 8, 8, [
            0,
            0,
            0,
            255
        ]);
    }
    create_string(_0x582d44 + 13, _0x2a8353 - 2, 0, _0x3670e2, [
        255,
        255,
        255,
        255
    ]);
    var _0x4ad0f5 = Render.AddFont('Small Font', 7, 300), _0x2c56e0 = Render.TextSizeCustom(_0x3670e2, _0x4ad0f5)[0];
    if (_0x6bacee > _0x582d44 && _0x6bacee < _0x582d44 + 15 + _0x2c56e0 && _0x1a0a51 > _0x2a8353 && _0x1a0a51 < _0x2a8353 + 10 && !indropdown) {
        if (Input.IsKeyPressed(1) && Globals.Realtime() > globaltime + 0.2) {
            globaltime = Globals.Realtime();
            _0x1b84f5 = !_0x1c31a2;
        }
    }
    return _0x1b84f5;
}
function create_slider(_0x5a2f88, _0x42d902, _0x2dbc77, _0x3959c9, _0x39f8cb, _0x33f748, _0x46f162) {
    var _0x527b66 = Input.GetCursorPosition(), _0x3d6eac = _0x527b66[0], _0xf8cf7 = _0x527b66[1], _0x32a954 = Math.round(_0x33f748 * ((_0x39f8cb - _0x3959c9) / 170) + _0x3959c9), _0x22246f = 0;
    create_string(_0x42d902, _0x2dbc77, 0, _0x5a2f88, [
        255,
        255,
        255,
        255
    ]);
    Render.GradientRect(_0x42d902, _0x2dbc77 + 12, 170, 8, 0, [
        60,
        60,
        60,
        255
    ], [
        40,
        40,
        40,
        255
    ]);
    Render.GradientRect(_0x42d902, _0x2dbc77 + 12, _0x33f748, 8, 0, col_top, col_bottom);
    Render.Rect(_0x42d902, _0x2dbc77 + 12, 170, 8, [
        0,
        0,
        0,
        255
    ]);
    if (_0x3d6eac > _0x42d902 - 1 && _0x3d6eac < _0x42d902 + 171 && _0xf8cf7 > _0x2dbc77 + 10 && _0xf8cf7 < _0x2dbc77 + 22 && !indropdown) {
        if (Input.IsKeyPressed(1)) {
            _0x33f748 = _0x3d6eac - _0x42d902;
            _0x32a954 = Math.round(_0x33f748 * ((_0x39f8cb - _0x3959c9) / 170) + _0x3959c9);
            _0x22246f = 25;
        }
    }
    var _0x5d018f = Render.AddFont('Small Font', 7, 300), _0x43a962 = Render.TextSizeCustom(_0x32a954 + '', _0x5d018f)[0] / 2;
    create_string(_0x42d902 + _0x33f748 + _0x22246f - _0x43a962, _0x2dbc77 + 20, 0, _0x32a954 + _0x46f162, [
        255,
        255,
        255,
        255
    ]);
    var _0x414634 = new Array(2);
    _0x414634[0] = _0x32a954;
    _0x414634[1] = _0x33f748;
    return _0x414634;
}
function create_dropdown(_0x4d579b, _0x45bbe5, _0x21aeda, _0x4a53d1, _0x795364, _0x1418ad) {
    var _0x8feb3d = Input.GetCursorPosition(), _0x20b3f9 = _0x8feb3d[0], _0x4f54b6 = _0x8feb3d[1];
    create_string(_0x45bbe5, _0x21aeda, 0, _0x4d579b, [
        255,
        255,
        255,
        255
    ]);
    Render.FilledRect(_0x45bbe5, _0x21aeda + 12, 170, 20, [
        51,
        51,
        51,
        255
    ]);
    Render.Rect(_0x45bbe5, _0x21aeda + 12, 170, 20, [
        0,
        0,
        0,
        255
    ]);
    create_string(_0x45bbe5 + 5, _0x21aeda + 16, 0, _0x4a53d1[_0x1418ad], [
        150,
        150,
        150,
        255
    ]);
    Render.Polygon([
        [
            _0x45bbe5 + 155,
            _0x21aeda + 20
        ],
        [
            _0x45bbe5 + 165,
            _0x21aeda + 20
        ],
        [
            _0x45bbe5 + 160,
            _0x21aeda + 25
        ]
    ], [
        150,
        150,
        150,
        255
    ]);
    if (_0x20b3f9 > _0x45bbe5 && _0x20b3f9 < _0x45bbe5 + 170 && _0x4f54b6 > _0x21aeda + 12 && _0x4f54b6 < _0x21aeda + 32) {
        Render.Polygon([
            [
                _0x45bbe5 + 155,
                _0x21aeda + 20
            ],
            [
                _0x45bbe5 + 165,
                _0x21aeda + 20
            ],
            [
                _0x45bbe5 + 160,
                _0x21aeda + 25
            ]
        ], col_top);
        if (Input.IsKeyPressed(1) && Globals.Realtime() > globaltime + 0.2) {
            globaltime = Globals.Realtime();
            return 'closed';
        }
    }
    if (_0x795364) {
        indropdown = true;
        Render.FilledRect(_0x45bbe5, _0x21aeda + 35, 170, _0x4a53d1.length * 17 + 3, [
            51,
            51,
            51,
            255
        ]);
        Render.Rect(_0x45bbe5, _0x21aeda + 35, 170, _0x4a53d1.length * 17 + 3, [
            0,
            0,
            0,
            255
        ]);
        for (i = 0; i < _0x4a53d1.length; i++) {
            create_string(_0x45bbe5 + 5, _0x21aeda + 40 + 16 * i, 0, _0x4a53d1[i], [
                255,
                255,
                255,
                255
            ]);
            if (_0x20b3f9 > _0x45bbe5 && _0x20b3f9 < _0x45bbe5 + 170 && _0x4f54b6 > _0x21aeda + 40 + 16 * i && _0x4f54b6 < _0x21aeda + 40 + 16 * i + 15) {
                create_string(_0x45bbe5 + 5, _0x21aeda + 40 + 16 * i, 0, _0x4a53d1[i], col_top);
                if (Input.IsKeyPressed(1) && Globals.Realtime() > globaltime + 0.2) {
                    globaltime = Globals.Realtime();
                    return i;
                }
            }
        }
    } else {
        indropdown = false;
    }
    if (Input.IsKeyPressed(1) && Globals.Realtime() > globaltime + 0.2 && _0x795364) {
        globaltime = Globals.Realtime();
        if (_0x20b3f9 < _0x45bbe5 || _0x20b3f9 > _0x45bbe5 + 170 || _0x4f54b6 < _0x21aeda + 35 || _0x4f54b6 > _0x21aeda + 35 + _0x4a53d1.length * 17 + 3) {
            return 'closed';
        }
    }
}
Array.prototype.contains = function (_0x5a891e) {
    var _0x4c00ac = this.length;
    while (_0x4c00ac--) {
        if (this[_0x4c00ac] === _0x5a891e) {
            return true;
        }
    }
    return false;
};
function create_multidropdown(_0x254064, _0x2e06ba, _0x5059e9, _0x4a75ec, _0x19dd5c, _0x556b80) {
    var _0x3d9c21 = Input.GetCursorPosition(), _0x3f00ac = _0x3d9c21[0], _0x45f81e = _0x3d9c21[1], _0x5d87a8 = '', _0x11125d = false, _0x2e3c6a = false;
    create_string(_0x2e06ba, _0x5059e9, 0, _0x254064, [
        255,
        255,
        255,
        255
    ]);
    Render.FilledRect(_0x2e06ba, _0x5059e9 + 12, 170, 20, [
        51,
        51,
        51,
        255
    ]);
    Render.Rect(_0x2e06ba, _0x5059e9 + 12, 170, 20, [
        0,
        0,
        0,
        255
    ]);
    for (i = 0; i < _0x4a75ec.length; i++) {
        if (_0x556b80.contains(i)) {
            _0x5d87a8 += _0x4a75ec[i] + ', ';
        }
    }
    _0x5d87a8 = _0x5d87a8.substring(0, _0x5d87a8.length - 2);
    var _0x50628f = Render.AddFont('Small Fonts', 7, 300), _0x16c5d9 = Render.TextSizeCustom(_0x5d87a8, _0x50628f)[0], _0x197044 = -1;
    if (_0x16c5d9 > 160) {
        for (i = 0; i < _0x556b80.length; i++) {
            if (_0x556b80[i] != undefined && _0x197044 == -1) {
                _0x197044 = i;
            }
        }
        _0x5d87a8 = _0x4a75ec[_0x556b80[_0x197044]] + ', ...';
    }
    if (_0x5d87a8 == '') {
        _0x5d87a8 = 'none';
    }
    create_string(_0x2e06ba + 5, _0x5059e9 + 16, 0, _0x5d87a8, [
        150,
        150,
        150,
        255
    ]);
    var _0x43576d = [
        150,
        150,
        150,
        255
    ];
    Render.Polygon([
        [
            _0x2e06ba + 155,
            _0x5059e9 + 20
        ],
        [
            _0x2e06ba + 165,
            _0x5059e9 + 20
        ],
        [
            _0x2e06ba + 160,
            _0x5059e9 + 25
        ]
    ], [
        150,
        150,
        150,
        255
    ]);
    if (_0x3f00ac > _0x2e06ba && _0x3f00ac < _0x2e06ba + 170 && _0x45f81e > _0x5059e9 + 12 && _0x45f81e < _0x5059e9 + 32) {
        Render.Polygon([
            [
                _0x2e06ba + 155,
                _0x5059e9 + 20
            ],
            [
                _0x2e06ba + 165,
                _0x5059e9 + 20
            ],
            [
                _0x2e06ba + 160,
                _0x5059e9 + 25
            ]
        ], col_top);
        _0x43576d = col_top;
        if (Input.IsKeyPressed(1) && Globals.Realtime() > globaltime + 0.2) {
            globaltime = Globals.Realtime();
            _0x2e3c6a = true;
        }
    }
    Render.FilledRect(_0x2e06ba + 160, _0x5059e9 + 20, 5, 2, [
        51,
        51,
        51,
        255
    ]);
    Render.Line(_0x2e06ba + 161, _0x5059e9 + 16, _0x2e06ba + 164, _0x5059e9 + 16, _0x43576d);
    Render.Line(_0x2e06ba + 164, _0x5059e9 + 16, _0x2e06ba + 164, _0x5059e9 + 18, _0x43576d);
    Render.Line(_0x2e06ba + 164, _0x5059e9 + 18, _0x2e06ba + 161, _0x5059e9 + 18, _0x43576d);
    Render.Line(_0x2e06ba + 161, _0x5059e9 + 18, _0x2e06ba + 161, _0x5059e9 + 20, _0x43576d);
    Render.Line(_0x2e06ba + 161, _0x5059e9 + 20, _0x2e06ba + 164, _0x5059e9 + 20, _0x43576d);
    if (_0x2e3c6a) {
        return 'closed';
    }
    if (_0x19dd5c) {
        indropdown = true;
        Render.FilledRect(_0x2e06ba, _0x5059e9 + 35, 170, _0x4a75ec.length * 17 + 3, [
            51,
            51,
            51,
            255
        ]);
        Render.Rect(_0x2e06ba, _0x5059e9 + 35, 170, _0x4a75ec.length * 17 + 3, [
            0,
            0,
            0,
            255
        ]);
        for (i = 0; i < _0x4a75ec.length; i++) {
            if (_0x556b80.contains(i)) {
                create_string(_0x2e06ba + 5, _0x5059e9 + 40 + 16 * i, 0, _0x4a75ec[i], col_top);
            } else {
                create_string(_0x2e06ba + 5, _0x5059e9 + 40 + 16 * i, 0, _0x4a75ec[i], [
                    255,
                    255,
                    255,
                    255
                ]);
            }
            if (_0x3f00ac > _0x2e06ba && _0x3f00ac < _0x2e06ba + 170 && _0x45f81e > _0x5059e9 + 40 + 16 * i && _0x45f81e < _0x5059e9 + 40 + 16 * i + 15) {
                create_string(_0x2e06ba + 5, _0x5059e9 + 40 + 16 * i, 0, _0x4a75ec[i], col_top);
                if (Input.IsKeyPressed(1) && Globals.Realtime() > globaltime + 0.2) {
                    globaltime = Globals.Realtime();
                    if (_0x556b80.contains(i)) {
                        delete _0x556b80[i];
                    } else {
                        _0x556b80[i] = i;
                    }
                    _0x11125d = true;
                }
            }
        }
        if (_0x11125d) {
            return _0x556b80;
        }
    } else {
        indropdown = false;
    }
    if (Input.IsKeyPressed(1) && Globals.Realtime() > globaltime + 0.2 && _0x19dd5c) {
        globaltime = Globals.Realtime();
        if (_0x3f00ac < _0x2e06ba || _0x3f00ac > _0x2e06ba + 170 || _0x45f81e < _0x5059e9 + 35 || _0x45f81e > _0x5059e9 + 35 + _0x4a75ec.length * 17 + 3) {
            return 'closed';
        }
    }
}
function inbox(_0x302a26, _0x434e13, _0x40b425, _0x610c12, _0x557727, _0x35ddde) {
    if (_0x302a26 > _0x434e13 && _0x302a26 < _0x40b425 && _0x610c12 > _0x557727 && _0x610c12 < _0x35ddde && !indropdown) {
        return true;
    }
}
function create_keybind(_0x25745f, _0x2e52d8, _0x4bc787, _0x52a9d4) {
    var _0x355dde = Input.GetCursorPosition(), _0x44a985 = _0x355dde[0], _0x4230e2 = _0x355dde[1], _0x31ae1a = '', _0x2e5f8d = 150;
    for (i = 0; i < keyCodes.length; i++) {
        if (keyCodes[i] == _0x52a9d4) {
            _0x31ae1a = keyNames[i];
        }
    }
    if (_0x52a9d4 == 58) {
        _0x31ae1a = '';
    }
    create_string(_0x2e52d8, _0x4bc787, 0, _0x25745f, [
        255,
        255,
        255,
        255
    ]);
    Render.FilledRect(_0x2e52d8, _0x4bc787 + 12, 170, 20, [
        51,
        51,
        51,
        255
    ]);
    Render.Rect(_0x2e52d8, _0x4bc787 + 12, 170, 20, [
        0,
        0,
        0,
        255
    ]);
    if (inbox(_0x44a985, _0x2e52d8, _0x2e52d8 + 170, _0x4230e2, _0x4bc787 + 12, _0x4bc787 + 32)) {
        _0x2e5f8d = 230;
        for (i = 0; i < keyCodes.length; i++) {
            if (Input.IsKeyPressed(keyCodes[i]) && Globals.Realtime() > globaltime + 0.2) {
                globaltime = Globals.Realtime();
                _0x52a9d4 = keyCodes[i];
            }
        }
    }
    create_string(_0x2e52d8 + 5, _0x4bc787 + 16, 0, _0x31ae1a, [
        255,
        255,
        255,
        _0x2e5f8d
    ]);
    return _0x52a9d4;
}
function create_button(_0x4736c0, _0x1cac78, _0x2f055b) {
    var _0x164d5b = Input.GetCursorPosition(), _0x4db2d4 = _0x164d5b[0], _0x4720a7 = _0x164d5b[1];
    Render.FilledRect(_0x1cac78, _0x2f055b, 75, 20, [
        30,
        30,
        30,
        255
    ]);
    Render.Rect(_0x1cac78, _0x2f055b, 75, 20, [
        0,
        0,
        0,
        255
    ]);
    create_string(_0x1cac78 + 35, _0x2f055b + 4, 1, _0x4736c0, [
        255,
        255,
        255,
        255
    ]);
    if (inbox(_0x4db2d4, _0x1cac78, _0x1cac78 + 75, _0x4720a7, _0x2f055b, _0x2f055b + 20)) {
        create_string(_0x1cac78 + 35, _0x2f055b + 4, 1, _0x4736c0, col_top);
        if (Input.IsKeyPressed(1) && Globals.Realtime() > globaltime + 0.4) {
            globaltime = Globals.Realtime();
            return true;
        }
    }
}
function cleartabs() {
    hometab = false;
    ragetab = false;
    legittab = false;
    antiaimtab = false;
    visualstab = false;
    misctab = false;
}
function get_tsize(_0x54571b) {
    var _0x462a71 = Render.AddFont('Small Fonts', 7, 300), _0x46db31 = Render.TextSizeCustom(_0x54571b, _0x462a71)[0] / 2;
    return _0x46db31;
}
function IsPeeking(_0x552d78) {
    const _0x2db7a5 = Entity.GetEyePosition(_0x552d78), _0x1e628c = Entity.GetProp(_0x552d78, 'CBasePlayer', 'm_vecVelocity[0]'), _0x351c99 = Globals.TickInterval();
    _0x2db7a5[0] += _0x1e628c[0] * _0x351c99 * 14;
    _0x2db7a5[1] += _0x1e628c[1] * _0x351c99 * 14;
    _0x2db7a5[2] += _0x1e628c[2] * _0x351c99 * 14;
    const _0x478b75 = Entity.GetEnemies();
    for (var _0x53087a = 0; _0x53087a < _0x478b75.length; _0x53087a++) {
        const _0xf92423 = _0x478b75[_0x53087a];
        if (!_0xf92423 || !Entity.IsAlive(_0xf92423) || Entity.IsDormant(_0xf92423)) {
            continue;
        }
        const _0x309c60 = Entity.GetHitboxPosition(_0xf92423, 0), _0x3fb2ea = Trace.Line(_0x552d78, _0x2db7a5, _0x309c60)[1];
        if (_0x3fb2ea > 0.88) {
            return true;
        }
    }
    return false;
}
function main() {
    if (UI.IsMenuOpen()) {
        create_menu(x, y, width, height);
        var _0x170b17 = x + 40, _0x58a65d = y + 55;
        if (create_tab('Rage', x + 25 + 66, y + 15, legittab)) {
            cleartabs();
            legittab = !legittab;
        }
        if (create_tab('Anti-Aim', x + 20 + 132, y + 15, antiaimtab)) {
            cleartabs();
            antiaimtab = !antiaimtab;
        }
        if (create_tab('Visuals', x + 15 + 198, y + 15, visualstab)) {
            cleartabs();
            visualstab = !visualstab;
        }
        if (create_tab('Misc', x + 10 + 264, y + 15, misctab)) {
            cleartabs();
            misctab = !misctab;
        }
        if (create_group('Config ', _0x170b17 + 250, _0x58a65d + 260, 75, [
                153,
                50,
                255,
                255
            ])) {
            create_string(x + 300, y + 325, 0, 'Version:', [
                255,
                255,
                255,
                255
            ]);
            create_string(x + 345, y + 325, 0, 'Onetap Crack', [
                255,
                106,
                0,
                255
            ]);
            bx = _0x170b17 + 235;
            by = _0x58a65d + 237;
            if (create_button('  Load Config  ', x + 315, y + 355)) {
                var _0x22f2c4 = Base64.decode(Convar.GetString('xbox_throttlespoof')), _0x560985 = Base64.decode(Convar.GetString('xbox_throttlebias')), _0x2bfcac = JSON.parse(_0x22f2c4), _0x1b1e07 = JSON.parse(_0x560985);
                legit_triggerbot_hitchance = _0x2bfcac.legit[0].a543f;
                legit_triggerbot_hitchance_keybind = _0x2bfcac.legit[0].a241b;
                legit_triggerbot_hitchance_value = [
                    _0x2bfcac.legit[0].a612c,
                    _0x2bfcac.legit[0].a612c / 0.59
                ];
                legit_triggerbot_hitchance_resetvalue = [
                    _0x2bfcac.legit[0].a981p,
                    _0x2bfcac.legit[0].a981p / 0.59
                ];
                minimumdamage_enable = _0x2bfcac.ragebot[0].mdo[0].k092s;
                minimumdamage_keybind = _0x2bfcac.ragebot[0].mdo[0].k142v;
                minimumdamage_array_selectedoption = _0x2bfcac.ragebot[0].mdo[0].k152l;
                minimumdamage_override_value_autosniper = [
                    _0x2bfcac.ragebot[0].mdo[0].k682q,
                    _0x2bfcac.ragebot[0].mdo[0].k682q * 1.308
                ];
                minimumdamage_override_value_scout = [
                    _0x2bfcac.ragebot[0].mdo[0].k735b,
                    _0x2bfcac.ragebot[0].mdo[0].k735b * 1.308
                ];
                minimumdamage_override_value_awp = [
                    _0x2bfcac.ragebot[0].mdo[0].k208h,
                    _0x2bfcac.ragebot[0].mdo[0].k208h * 1.308
                ];
                minimumdamage_override_value_heavypistols = [
                    _0x1b1e07.extra[0].mdo[0].k814c,
                    _0x1b1e07.extra[0].mdo[0].k814c * 1.308
                ];
                minimumdamage_default_autosniper = [
                    _0x2bfcac.ragebot[0].mdo[0].k092j,
                    _0x2bfcac.ragebot[0].mdo[0].k092j * 1.308
                ];
                minimumdamage_default_scout = [
                    _0x2bfcac.ragebot[0].mdo[0].k714a,
                    _0x2bfcac.ragebot[0].mdo[0].k714a * 1.308
                ];
                minimumdamage_default_awp = [
                    _0x2bfcac.ragebot[0].mdo[0].k352m,
                    _0x2bfcac.ragebot[0].mdo[0].k352m * 1.308
                ];
                other_forcedoubletap = _0x2bfcac.ragebot[0].other[0].h123c;
                other_fastdtrecharge = _0x2bfcac.ragebot[0].other[0].h223c;
                other_noscopedistance = _0x2bfcac.ragebot[0].other[0].h143p;
                other_noscope_keybind = _0x2bfcac.ragebot[0].other[0].h432c;
                acc_safepoint_onlimbs = _0x2bfcac.ragebot[0].other[0].h542c;
                acc_baim_slowwalk = _0x2bfcac.ragebot[0].other[0].h152p;
                resolver_general = _0x2bfcac.ragebot[0].other[0].h532c;
                invert_onshot = _0x1b1e07.antiaim[0].inversions[0].z452f;
                invert_onhit = _0x1b1e07.antiaim[0].inversions[0].z152u;
                e_onpeek = _0x1b1e07.antiaim[0].inversions[0].z153u;
                branding_clantag = _0x1b1e07.misc[0].g309s;
                visuals_informationbox = _0x1b1e07.visuals[0].l294p;
                visuals_informationbox_x = [
                    _0x1b1e07.visuals[0].l962z,
                    _0x1b1e07.visuals[0].l962z * 0.088
                ];
                visuals_informationbox_y = [
                    _0x1b1e07.visuals[0].l512g,
                    _0x1b1e07.visuals[0].l512g * 0.157
                ];
                Cheat.PrintChat('[\x03Monolith\x01] Loaded config successfully!');
            }
            if (create_button('  Save Config  ', x + 390, y + 355)) {
                var _0x22f2c4 = '{ "ragebot":[{ "other":[{ "h532c":' + resolver_general + ', "h143p":' + other_noscopedistance + ', "h432c":' + other_fastdtrecharge + ', "h152c":' + acc_baim_slowwalk + ', "h542c":' + acc_safepoint_onlimbs + ', "h223c":' + other_forcedoubletap + ', "h123c":' + other_noscope_keybind + ' }], "mdo":[{ "k092s":' + minimumdamage_enable + ', "k142v":' + minimumdamage_keybind + ', "k152l":' + minimumdamage_array_selectedoption + ', "k682q":' + minimumdamage_override_value_autosniper[0] + ', "k735b":' + minimumdamage_override_value_scout[0] + ', "k208h":' + minimumdamage_override_value_awp[0] + ', "k092j":' + minimumdamage_default_value_autosniper[0] + ', "k714a":' + minimumdamage_default_value_scout[0] + ', "k352m":' + minimumdamage_default_value_awp[0] + ' }] }], "legit":[{"a543f":' + legit_triggerbot_hitchance + ', "a241b":' + legit_triggerbot_hitchance_keybind + ', "a612c":' + legit_triggerbot_hitchance_value[0] + ', "a981p":' + legit_triggerbot_hitchance_resetvalue[0] + '}] }', _0x286623 = '{ "visuals":[{ "l294p":' + visuals_informationbox + ', "l962z":' + visuals_general_indicator + ', "1295p":' + visuals_informationbox_x[0] + ', "l512g":' + visuals_informationbox_y[0] + ' }], "misc":[{ "g309s":' + branding_clantag + ' }], "extra":[{ "mdo":[{ "k814c":' + minimumdamage_override_value_heavypistols[0] + ', "k292x":' + minimumdamage_default_value_heavypistols[0] + ' }] }], "antiaim":[{ "inversions":[{ "z452f":' + invert_onshot + ', "z153u":' + e_onpeek + ',  "z152u":' + invert_onhit + ' }] }] }', _0x3eb4f8 = Base64.encode(_0x22f2c4), _0x4850e8 = Base64.encode(_0x286623);
                Cheat.ExecuteCommand('xbox_throttlespoof ' + _0x3eb4f8);
                Cheat.ExecuteCommand('xbox_throttlebias ' + _0x4850e8);
                Cheat.PrintChat('[\x03Monolith\x01] Saved config successfully!');
            }
        }
        if (misctab) {
            LOGO = Render.AddTexture('ot/scripts/monolith1.png');
            Render.TexturedRect(x2 - 1805, 85, 58, 65, LOGO);
            if (create_group('General', _0x170b17, _0x58a65d, 90)) {
                branding_clantag = create_checkbox('Monolith ClanTag', _0x170b17 + 20, _0x58a65d + 20, branding_clantag);
            }
        }
        if (ragetab) {
            LOGO = Render.AddTexture('ot/scripts/monolith1.png');
            Render.TexturedRect(x2 - 1805, 85, 58, 65, LOGO);
            if (create_group('General', _0x170b17, _0x58a65d, 150)) {
                legit_triggerbot_hitchance = create_checkbox('TriggerBot noscope', _0x170b17 + 20, _0x58a65d + 20, legit_triggerbot_hitchance);
                if (legit_triggerbot_hitchance) {
                    legit_triggerbot_hitchance_keybind = create_keybind('Noscope keybind', _0x170b17 + 20, _0x58a65d + 35, legit_triggerbot_hitchance_keybind);
                    legit_triggerbot_hitchance_value = create_slider('Noscope hitchance', _0x170b17 + 20, _0x58a65d + 75, 0, 100, legit_triggerbot_hitchance_value[1], '');
                    legit_triggerbot_hitchance_resetvalue = create_slider('Reset hitchance', _0x170b17 + 20, _0x58a65d + 110, 0, 100, legit_triggerbot_hitchance_resetvalue[1], '');
                }
            }
        }
        if (visualstab) {
            if (create_group('Indicators', _0x170b17, _0x58a65d, 150)) {
                LOGO = Render.AddTexture('ot/scripts/monolith1.png');
                Render.TexturedRect(x2 - 1805, 85, 58, 65, LOGO);
                visuals_indicators = create_checkbox('Indicators', _0x170b17 + 20, _0x58a65d + 20, visuals_indicators);
                visuals_informationbox = create_checkbox('Information Box', _0x170b17 + 20, _0x58a65d + 40, visuals_informationbox);
                if (visuals_informationbox) {
                    ax = _0x170b17 + 250;
                    var _0x147eb0 = Render.GetScreenSize(), _0x5d74fe = _0x147eb0[0], _0x259ffb = _0x147eb0[1];
                    visuals_informationbox_x = create_slider('x position', ax + -235, _0x58a65d + 53, 0, _0x5d74fe, visuals_informationbox_x[1], '');
                    visuals_informationbox_y = create_slider('y-position', ax + -235, _0x58a65d + 85, 0, _0x259ffb, visuals_informationbox_y[1], '');
                    by = 110;
                }
                if (visuals_indicators) {
                    Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 50, 0, isInverted ? 'DESYNC: <-' : 'DESYNC: ->', [
                        text_red,
                        text_green,
                        text_blue,
                        text_alpha
                    ], 3);
                    Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 58, 0, isHideshots ? 'HIDE' : 'HIDE', isHideshots ? [
                        124,
                        195,
                        13,
                        255
                    ] : [
                        255,
                        0,
                        0,
                        255
                    ], 3);
                    Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 66, 0, isDoubletap ? 'DT' : 'DT', isDoubletap ? [
                        124,
                        195,
                        13,
                        255
                    ] : [
                        255,
                        0,
                        0,
                        255
                    ], 3);
                    Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 74, 0, isSafepoint ? 'SP' : 'SP', isSafepoint ? [
                        124,
                        195,
                        13,
                        255
                    ] : [
                        255,
                        0,
                        0,
                        255
                    ], 3);
                }
            }
        }
        if (hometab) {
            LOGO = Render.AddTexture('ot/scripts/monolith1.png');
            Render.TexturedRect(x2 - 1805, 85, 58, 65, LOGO);
            if (create_group('Changelog', _0x170b17, _0x58a65d, 280)) {
                create_string(x + 50, y + 75, 0, '- New watermark', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 90, 0, '- Fixed ClanTag', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 105, 0, '- Added Resolver [Beta]', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 120, 0, '- Added Force Baim on Slowwalkers', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 135, 0, '- Added Force Safepont onlimbs', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 150, 0, '- Added Indicators', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 165, 0, '- Added Shadows on tab picking', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 180, 0, '- Remove other group in antiaim', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 195, 0, '- Remove other group in visuals', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 210, 0, '- Changed values in fakelag step', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 225, 0, '- Remaked AntiAim Flick', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 240, 0, '- Removed Home Tab', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 255, 0, '- Changelog will only be visible on load', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 270, 0, '- Corrected Colors in menu', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 285, 0, '- Recolorized save and load buttons', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 50, y + 300, 0, '- Made Config group small and clean', [
                    255,
                    255,
                    255,
                    255
                ]);
                create_string(x + 45, y + 318, 0, 'Current build: 29.09.2020', [
                    255,
                    255,
                    255,
                    255
                ]);
            }
        }
        if (antiaimtab) {
            if (create_group('General', _0x170b17, _0x58a65d, 135)) {
                LOGO = Render.AddTexture('ot/scripts/monolith1.png');
                Render.TexturedRect(x2 - 1805, 85, 58, 65, LOGO);
                invert_onshot = create_checkbox('Anti-Aim Invertion on shot', _0x170b17 + 20, _0x58a65d + 20, invert_onshot);
                invert_onhit = create_checkbox('Anti-Aim Flick', _0x170b17 + 20, _0x58a65d + 35, invert_onhit);
                e_onpeek = create_checkbox('E on peek', _0x170b17 + 20, _0x58a65d + 50, e_onpeek);
                fakelag_step = create_checkbox('FakeLag Step Exploit', _0x170b17 + 20, _0x58a65d + 65, fakelag_step);
                if (fakelag_step) {
                    fakelag_step_delay = create_slider('Step delay', _0x170b17 + 20, _0x58a65d + 75, 25, 300, fakelag_step_delay[1], 'ms');
                }
            }
        }
        if (legittab) {
            if (create_group(' DoubleTap', _0x170b17, _0x58a65d, 122)) {
                other_fastdtrecharge = create_checkbox('Fast DoubleTap recharge', _0x170b17 + 20, _0x58a65d + 20, other_fastdtrecharge);
                acc_baim_slowwalk = create_checkbox('Force Baim Slowwalkers on DT', _0x170b17 + 20, _0x58a65d + 50, acc_baim_slowwalk);
                create_string(x + 50, y + 105, 0, ' ', [
                    255,
                    255,
                    255,
                    255
                ]);
            }
            if (create_group(' Min Dmg Override', _0x170b17, _0x58a65d + 130, 187)) {
                ay = _0x58a65d + 110 + 20;
                minimumdamage_enable = create_checkbox('Override minimum damage', _0x170b17 + 20, ay + 20, minimumdamage_enable);
                if (minimumdamage_enable) {
                    minimumdamage_keybind = create_keybind('Override damage keybind', _0x170b17 + 20, ay + 35, minimumdamage_keybind);
                    if (minimumdamage_array_selectedoption == 0) {
                        minimumdamage_override_value_autosniper = create_slider('Override damage', _0x170b17 + 20, ay + 110, 0, 130, minimumdamage_override_value_autosniper[1], 'hp');
                        minimumdamage_default_value_autosniper = create_slider('Reset damage', _0x170b17 + 20, ay + 145, 0, 130, minimumdamage_default_value_autosniper[1], 'hp');
                    }
                    if (minimumdamage_array_selectedoption == 1) {
                        minimumdamage_override_value_scout = create_slider('Override damage', _0x170b17 + 20, ay + 110, 0, 130, minimumdamage_override_value_scout[1], 'hp');
                        minimumdamage_default_value_scout = create_slider('Reset damage', _0x170b17 + 20, ay + 145, 0, 130, minimumdamage_default_value_scout[1], 'hp');
                    }
                    if (minimumdamage_array_selectedoption == 2) {
                        minimumdamage_override_value_awp = create_slider('Override damage', _0x170b17 + 20, ay + 110, 0, 130, minimumdamage_override_value_awp[1], 'hp');
                        minimumdamage_default_value_awp = create_slider('Reset damage', _0x170b17 + 20, ay + 145, 0, 130, minimumdamage_default_value_awp[1], 'hp');
                    }
                    if (minimumdamage_array_selectedoption == 3) {
                        minimumdamage_override_value_heavypistols = create_slider('Override damage', _0x170b17 + 20, ay + 110, 0, 130, minimumdamage_override_value_heavypistols[1], 'hp');
                        minimumdamage_default_value_heavypistols = create_slider('Reset damage', _0x170b17 + 20, ay + 145, 0, 130, minimumdamage_default_value_heavypistols[1], 'hp');
                    }
                    var _0x2a9463 = create_dropdown('Weapon', _0x170b17 + 20, ay + 70, minimumdamage_array, minimumdamage_array_opened, minimumdamage_array_selectedoption);
                    if (_0x2a9463 != undefined) {
                        if (_0x2a9463 == 'closed') {
                            minimumdamage_array_opened = !minimumdamage_array_opened;
                        } else {
                            minimumdamage_array_selectedoption = _0x2a9463;
                            minimumdamage_array_opened = !minimumdamage_array_opened;
                        }
                    }
                }
            }
            if (create_group(' Other', _0x170b17 + 230, _0x58a65d, 150)) {
                LOGO = Render.AddTexture('ot/scripts/monolith1.png');
                Render.TexturedRect(x2 - 1805, 85, 58, 65, LOGO);
                ax = _0x170b17 + 250;
                other_forcedoubletap = create_checkbox('Force DoubleTap', ax + -230, _0x58a65d + 35, other_forcedoubletap);
                acc_safepoint_onlimbs = create_checkbox('Safepoint onlimbs', ax, _0x58a65d + 20, acc_safepoint_onlimbs);
                resolver_general = create_checkbox('Resolver [Beta]', ax, _0x58a65d + 35, resolver_general);
                other_noscopedistance = create_checkbox('Noscope on key', ax, _0x58a65d + 50, other_noscopedistance);
                ay = _0x58a65d + 40;
                if (other_noscopedistance) {
                    other_noscope_keybind = create_keybind('Noscope keybind', ax, _0x58a65d + 60, other_noscope_keybind);
                }
            }
        }
    }
    if (legit_triggerbot_hitchance && Input.IsKeyPressed(legit_triggerbot_hitchance_keybind)) {
        UI.SetValue('Legit', 'GENERAL', 'Triggerbot', 'Hitchance', legit_triggerbot_hitchance_value[0]);
    } else {
        if (legit_triggerbot_hitchance) {
            UI.SetValue('Legit', 'GENERAL', 'Triggerbot', 'Hitchance', legit_triggerbot_hitchance_resetvalue[0]);
        }
    }
    if (other_noscopedistance && Input.IsKeyPressed(other_noscope_keybind)) {
        if (UI.GetValue('Rage', 'GENERAL', 'General', 'Auto scope')) {
            UI.SetValue('Rage', 'GENERAL', 'General', 'Auto scope', false);
        }
    } else {
        if (other_noscopedistance) {
            UI.SetValue('Rage', 'GENERAL', 'General', 'Auto scope', true);
        }
    }
    if (minimumdamage_enable && Input.IsKeyPressed(minimumdamage_keybind)) {
        var _0x22a645 = minimumdamage_array_selectedoption;
        if (_0x22a645 == 0) {
            UI.SetValue('Rage', 'AUTOSNIPER', 'Targeting', 'Minimum damage', minimumdamage_override_value_autosniper[0]);
        }
        if (_0x22a645 == 1) {
            UI.SetValue('Rage', 'SCOUT', 'Targeting', 'Minimum damage', minimumdamage_override_value_scout[0]);
        }
        if (_0x22a645 == 2) {
            UI.SetValue('Rage', 'AWP', 'Targeting', 'Minimum damage', minimumdamage_override_value_awp[0]);
        }
        if (_0x22a645 == 3) {
            UI.SetValue('Rage', 'HEAVY PISTOL', 'Targeting', 'Minimum damage', minimumdamage_override_value_heavypistols[0]);
        }
    } else {
        if (minimumdamage_enable && !Input.IsKeyPressed(minimumdamage_keybind)) {
            if (UI.GetValue('Rage', 'AUTOSNIPER', 'Targeting', 'Minimum damage') != minimumdamage_default_value_autosniper[0]) {
                UI.SetValue('Rage', 'AUTOSNIPER', 'Targeting', 'Minimum damage', minimumdamage_default_value_autosniper[0]);
            }
            if (UI.GetValue('Rage', 'SCOUT', 'Targeting', 'Minimum damage') != minimumdamage_default_value_scout[0]) {
                UI.SetValue('Rage', 'SCOUT', 'Targeting', 'Minimum damage', minimumdamage_default_value_scout[0]);
            }
            if (UI.GetValue('Rage', 'AWP', 'Targeting', 'Minimum damage') != minimumdamage_default_value_awp[0]) {
                UI.SetValue('Rage', 'AWP', 'Targeting', 'Minimum damage', minimumdamage_default_value_awp[0]);
            }
            if (UI.GetValue('Rage', 'HEAVY PISTOL', 'Targeting', 'Minimum damage') != minimumdamage_default_value_heavypistols[0]) {
                UI.SetValue('Rage', 'HEAVY PISTOL', 'Targeting', 'Minimum damage', minimumdamage_default_value_heavypistols[0]);
            }
        }
    }
    if (visuals_informationbox) {
        create_informationbox(visuals_informationbox_x[0], visuals_informationbox_y[0]);
    }
    if (fakelag_step) {
        fakelagStep(fakelag_step_delay[0] / 1000);
    }
    drawWatermark();
}
function create_informationbox(_0x3297ef, _0x254e2c) {
    create_menu(_0x3297ef, _0x254e2c, 210, 100, [
        155,
        255,
        255,
        155
    ]);
    create_string(_0x3297ef + 105, _0x254e2c + 17, 1, 'Information', [
        255,
        255,
        255,
        255
    ]);
    var _0x243b01 = 0, _0x2c938c = 0;
    if (Entity.IsAlive(Entity.GetLocalPlayer())) {
        var _0x243b01 = Globals.ChokedCommands(), _0x2c938c = Exploit.GetCharge();
    }
    create_string(_0x3297ef + 27, _0x254e2c + 45, 0, 'FakeLag', [
        255,
        255,
        255,
        255
    ]);
    Render.FilledRect(_0x3297ef + 80, _0x254e2c + 50, 102, 2, [
        51,
        51,
        51,
        255
    ]);
    Render.FilledRect(_0x3297ef + 80, _0x254e2c + 50, 100, 4, [
        51,
        51,
        51,
        255
    ]);
    Render.GradientRect(_0x3297ef + 80, _0x254e2c + 50, _0x243b01 * 7.14 + 2, 2, 0, col_top, col_bottom);
    Render.GradientRect(_0x3297ef + 80, _0x254e2c + 50, _0x243b01 * 7.14, 4, 0, col_top, col_bottom);
    create_string(_0x3297ef + 25, _0x254e2c + 60, 0, 'DoubleTap', [
        255,
        255,
        255,
        255
    ]);
    Render.FilledRect(_0x3297ef + 80, _0x254e2c + 65, 102, 2, [
        51,
        51,
        51,
        255
    ]);
    Render.FilledRect(_0x3297ef + 80, _0x254e2c + 65, 100, 4, [
        51,
        51,
        51,
        255
    ]);
    Render.GradientRect(_0x3297ef + 80, _0x254e2c + 65, _0x2c938c * 100 + 2, 2, 0, col_top, col_bottom);
    Render.GradientRect(_0x3297ef + 80, _0x254e2c + 65, _0x2c938c * 100, 4, 0, col_top, col_bottom);
}
var steptime = Globals.Realtime();
function fakelagStep(_0x28b9d8) {
    var _0xd1efbc = UI.GetValue('Anti-Aim', 'Fake-Lag', 'Limit'), _0x4f7cb8 = _0xd1efbc + 1;
    if (Globals.Realtime() > steptime + _0x28b9d8 && _0xd1efbc < 14) {
        steptime = Globals.Realtime();
        UI.SetValue('Anti-Aim', 'Fake-Lag', 'Limit', _0x4f7cb8);
    }
    if (_0xd1efbc == 14 && Globals.Realtime() > steptime + _0x28b9d8) {
        steptime = Globals.Realtime();
        UI.SetValue('Anti-Aim', 'Fake-Lag', 'Limit', 0);
    }
}
function drawWatermark() {
    var _0x26b869 = get_tsize(''), _0x31f59b = get_tsize('');
    create_string(5, 5, 0, '', [
        255,
        255,
        255,
        255
    ]);
    create_string(+(_0x26b869 * 1), 0, 0, 'Monolith - 29.09.2020 alpha build', col_top);
    create_string(5 + _0x26b869 * 1 + _0x31f59b * 2, 5, 0, '', [
        255,
        255,
        255,
        255
    ]);
    create_string(44, 5, 0, '', [
        255,
        255,
        255,
        255
    ]);
}
function weaponFired() {
    var _0x1abc9e = Entity.GetEntityFromUserID(Event.GetInt('userid')), _0x302874 = Entity.GetLocalPlayer();
    if (_0x1abc9e == _0x302874 && invert_onshot) {
        UI.ToggleHotkey('Anti-Aim', 'Fake angles', 'Inverter');
    }
}
function playerHurt() {
    var _0x1c8ed7 = Entity.GetEntityFromUserID(Event.GetInt('userid')), _0x58d98b = Entity.GetLocalPlayer();
    if (_0x1c8ed7 == _0x58d98b && invert_onhit) {
        UI.ToggleHotkey('Anti-Aim', 'Fake angles', 'Inverter');
    }
}
function ragebotFunction() {
    if (e_onpeek && IsPeeking(Entity.GetLocalPlayer())) {
        var _0x44e241 = UserCMD.GetButtons();
        UserCMD.SetButtons(_0x44e241 | 32);
    }
    if (other_forcedoubletap) {
        var _0x750b73 = Exploit.GetCharge();
        if (_0x750b73 < 1) {
            Ragebot.IgnoreTarget();
        }
    }
}
function clantag() {
    if (!branding_clantag) {
        return;
    }
    var _0x50da78 = Math.round(Globals.Curtime() * 3);
    if (_0x50da78 === last_time) {
        return;
    }
    last_time = _0x50da78;
    index = Math.round(_0x50da78 % tag.length);
    Local.SetClanTag(tag[index]);
}
Cheat.RegisterCallback('Draw', 'main');
Cheat.RegisterCallback('weapon_fire', 'weaponFired');
Cheat.RegisterCallback('player_hurt', 'playerHurt');
Cheat.RegisterCallback('CreateMove', 'ragebotFunction');
Cheat.RegisterCallback('FrameStageNotify', 'clantag');
trigger = true;
halftimeval = false;
var lasttime = 0;
function start() {
    var _0x780823 = UI.GetValue('Script items', 'clantag');
    if (trigger) {
        if (_0x780823 == 0) {
            speed = 0;
        }
        if (_0x780823 == 1) {
            speed = 1.3;
        }
        if (_0x780823 == 2) {
            speed = 1.3;
        }
        if (_0x780823 == 3) {
            speed = 1.3;
        }
    }
    var _0xacc1dc = parseInt(Math.round(Globals.Curtime() * speed));
    if (_0xacc1dc != lasttime) {
        if (_0x780823 == 0) {
            Local.SetClanTag('');
        }
        if (_0x780823 == 1) {
            monolith71 = [
                '[--------]',
                '[M-------]',
                '[Mo------]',
                '[Mon-----]',
                '[Mono----]',
                '[Monol---]',
                '[Monoli--]',
                '[Monolit-]',
                '[Monolith]',
                '[Monolith]',
                '[1>nolith]',
                '[71>olith]',
                '[<71>lith]',
                '[-<71>ith]',
                '[--<71>th]',
                '[---<71>h]',
                '[----<71>]',
                '[-----<71]',
                '[------<7]',
                '[-------<]',
                '[--------]'
            ];
            Num = _0xacc1dc % monolith71.length;
            Local.SetClanTag(monolith71[Num]);
        } else {
            if (_0x780823 == 2) {
                monolith136 = [
                    '[--------]',
                    '[M-------]',
                    '[Mo------]',
                    '[Mon-----]',
                    '[Mono----]',
                    '[Monol---]',
                    '[Monoli--]',
                    '[Monolit-]',
                    '[Monolith]',
                    '[Monolith]',
                    '[6>nolith]',
                    '[36>olith]',
                    '[136>lith]',
                    '[<136>ith]',
                    '[-<136>th]',
                    '[--<136>h]',
                    '[---<136>]',
                    '[----<136]',
                    '[-----<13]',
                    '[------<1]',
                    '[-------<]',
                    '[--------]'
                ];
                Num = _0xacc1dc % monolith136.length;
                Local.SetClanTag(monolith136[Num]);
            } else {
                if (_0x780823 == 3) {
                    monolith76 = [
                        '[--------]',
                        '[M-------]',
                        '[Mo------]',
                        '[Mon-----]',
                        '[Mono----]',
                        '[Monol---]',
                        '[Monoli--]',
                        '[Monolit-]',
                        '[Monolith]',
                        '[Monolith]',
                        '[6>nolith]',
                        '[76>olith]',
                        '[<76>lith]',
                        '[-<76>ith]',
                        '[--<76>th]',
                        '[---<76>h]',
                        '[----<76>]',
                        '[-----<76]',
                        '[------<7]',
                        '[-------<]',
                        '[--------]'
                    ];
                    Num = _0xacc1dc % monolith76.length;
                    Local.SetClanTag(monolith76[Num]);
                }
            }
        }
        lasttime = _0xacc1dc;
    }
}
Cheat.RegisterCallback('Draw', 'start');
Cheat.RegisterCallback('Draw', 'start');
UI.AddSliderInt('', 0, 0);
UI.AddSliderInt('monolith.js | developed by strzelam', 0, 0);
function can_shift_shot(_0x1b61af) {
    var _0x22569c = Entity.GetLocalPlayer(), _0x9ac0d3 = Entity.GetWeapon(_0x22569c);
    if (_0x22569c == null || _0x9ac0d3 == null) {
        return false;
    }
    var _0x3c88ff = Entity.GetProp(_0x22569c, 'CCSPlayer', 'm_nTickBase'), _0x2929d2 = Globals.TickInterval() * (_0x3c88ff - _0x1b61af);
    if (_0x2929d2 < Entity.GetProp(_0x22569c, 'CCSPlayer', 'm_flNextAttack')) {
        return false;
    }
    if (_0x2929d2 < Entity.GetProp(_0x9ac0d3, 'CBaseCombatWeapon', 'm_flNextPrimaryAttack')) {
        return false;
    }
    return true;
}
function _TBC_CREATE_MOVE() {
    var _0x1ec25 = Exploit.GetCharge();
    Exploit[(_0x1ec25 != 1 ? 'Enable' : 'Disable') + 'Recharge']();
    if (can_shift_shot(14) && _0x1ec25 != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge();
    }
}
function _TBC_UNLOAD() {
    Exploit.EnableRecharge();
}
Cheat.RegisterCallback('CreateMove', '_TBC_CREATE_MOVE');
Cheat.RegisterCallback('Unload', '_TBC_UNLOAD');
function watermark() {
    UI.SetValue('Misc', 'PERFORMANCE & INFORMATION', 'Information', 'Watermark', false);
    var _0x1e6d30 = Render.GetScreenSize();
    x1 = _0x1e6d30[0] - _0x1e6d30[0];
    x2 = _0x1e6d30[0];
    y1 = _0x1e6d30[1] - _0x1e6d30[1];
    y2 = _0x1e6d30[1];
    current_map = World.GetMapName();
    const _0x52db8e = World.GetServerString(), _0x3d827e = Math.floor(Global.Latency() * 1000 / 1.5) + 'ms', _0x6b5950 = Cheat.GetUsername();
    var _0x11844f = new Date(), _0x3c3a71 = _0x11844f.getHours(), _0x42ea66 = _0x11844f.getMinutes(), _0x242fc1 = _0x3c3a71 <= 9 ? '0' + _0x11844f.getHours() : _0x11844f.getHours(), _0x3da7a3, _0x202f5b = _0x42ea66 <= 9 ? '0' + _0x11844f.getMinutes() : _0x11844f.getMinutes(), _0x3da7a3;
    font = Render.AddFont('Calibri', 12, 300);
    LOGO = Render.AddTexture('ot/scripts/monolith1.png');
    color = [
        182,
        58,
        255,
        255
    ];
    _0x3da7a3 = [
        182,
        58,
        255,
        255
    ];
    Render.GradientRect(x2 - 275, 10, 250, 20, 1, [
        24,
        24,
        24,
        245
    ], [
        24,
        24,
        24,
        245
    ]);
    Render.GradientRect(x2 - 275, 25, 250, 20, 1, [
        24,
        24,
        24,
        245
    ], [
        24,
        24,
        24,
        245
    ]);
    Render.StringCustom(x2 - 270, 10, 0, 'Monolith.js', color, font);
    Render.StringCustom(x2 - 270, 25, 0, 'Delay: ' + _0x3d827e, color, font);
    font = Render.AddFont('Bookman', 11, 295);
    Render.StringCustom(x2 - 187, 11, 0, '|  ' + _0x6b5950, [
        255,
        255,
        255,
        220
    ], font);
    Render.StringCustom(x2 - 80, 11, 0, '', [
        255,
        255,
        255,
        220
    ], font);
    Render.StringCustom(x2 - 270, 30, 0, '', [
        255,
        255,
        255,
        180
    ], font);
    Render.StringCustom(x2 - 187, 30, 0, '', [
        255,
        255,
        255,
        220
    ], font);
    Render.StringCustom(x2 - 176, 25, 0, '' + _0x242fc1 + ':' + _0x202f5b, [
        255,
        255,
        255,
        220
    ], font);
    Render.StringCustom(x2 - 187, 25, 0, '|', [
        255,
        255,
        255,
        220
    ], font);
    Render.GradientRect(x2 - 275, 10, 250, 1, 2, color, _0x3da7a3);
    Render.FilledCircle(x2 - 14, 18, 0, _0x3da7a3);
    Render.TexturedRect(x2 - 77, -2, 45, 50, LOGO);
}
Global.RegisterCallback('Draw', 'watermark');
function ragebotFunction() {
    if (config.options['acc_safepoint_onlimbs'][0]) {
        Ragebot.ForceHitboxSafety(9);
        Ragebot.ForceHitboxSafety(10);
        Ragebot.ForceHitboxSafety(11);
        Ragebot.ForceHitboxSafety(12);
    }
    if (config.options.acc_safepoint_onhead[0]) {
        Ragebot.ForceHitboxSafety(0);
        Ragebot.ForceHitboxSafety(1);
    }
    if (config.options.acc_wait_foronshot[0]) {
        waitforonshot();
    }
    runEnemies();
}
function waitforonshot() {
    var _0x2f8cb8 = Entity.GetEnemies();
    for (i = 0; i < _0x2f8cb8.length; i++) {
        if (!Entity.IsValid(_0x2f8cb8[i])) {
            continue;
        }
        if (!Entity.IsAlive(_0x2f8cb8[i])) {
            continue;
        }
        if (Entity.IsDormant(_0x2f8cb8[i])) {
            continue;
        }
        var _0x3ae6e2 = Entity.GetWeapon(_0x2f8cb8[i]), _0x15692f = Entity.GetProp(_0x3ae6e2, 'CWeaponCSBase', 'm_fLastShotTime');
        if (_0x15692f != storedShotTime[_0x2f8cb8[i]]) {
            firedThisTick[_0x2f8cb8[i]] = true;
            storedShotTime[_0x2f8cb8[i]] = _0x15692f;
        } else {
            firedThisTick[_0x2f8cb8[i]] = false;
        }
        if (firedThisTick[_0x2f8cb8[i]] == true) {
            force_head(_0x2f8cb8[i]);
        } else {
            Ragebot.IgnoreTarget(_0x2f8cb8[i]);
        }
    }
}
isHideshots = UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots');
isSafepoint = UI.IsHotkeyActive('Rage', 'General', 'Safe point override');
isDoubletap = UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap');
function getoptions() {
    config.options.invert_onshot[0] = UI.GetValue('Script items', 'invert_onshot');
}
function setoptions() {
    UI.SetValue('Script items', 'invert_onshot', config.options.invert_onshot[0]);
}
var screen_size = Global.GetScreenSize(), isInverted, drawLeft = 1;
drawHideReal = 1;
var drawRight = 0, drawBack = 0;
function drawIndicators() {
    arrowscp = [
        44,
        44,
        44,
        255
    ];
    textcp = [
        111,
        58,
        255,
        255
    ];
    selectedcp = [
        161,
        58,
        255,
        255
    ];
    arrows_red = arrowscp[0];
    arrows_green = arrowscp[1];
    arrows_blue = arrowscp[2];
    arrows_alpha = arrowscp[3];
    text_red = textcp[0];
    text_green = textcp[1];
    text_blue = textcp[2];
    text_alpha = textcp[3];
    selected_red = selectedcp[0];
    selected_green = selectedcp[1];
    selected_blue = selectedcp[2];
    selected_alpha = selectedcp[3];
    isHideshots = UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots');
    isSafepoint = UI.IsHotkeyActive('Rage', 'General', 'Safe point override');
    isDoubletap = UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap');
    isInverted = UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter');
    Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 50, 0, '', [
        text_red,
        text_green,
        text_blue,
        text_alpha
    ], 3);
    if (drawLeft) {
        Render.String(screen_size[0] / 2 - 50, screen_size[1] / 2 - 30, 1, '', [
            selected_red,
            selected_green,
            selected_blue,
            selected_alpha
        ], 4);
        Render.String(screen_size[0] / 2 + 50, screen_size[1] / 2 - 30, 1, '', [
            arrows_red,
            arrows_green,
            arrows_blue,
            arrows_alpha
        ], 4);
        Render.String(screen_size[0] / 2, screen_size[1] / 2 + 25, 1, '', [
            arrows_red,
            arrows_green,
            arrows_blue,
            arrows_alpha
        ], 4);
        Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 58, 0, isInverted ? '' : '', [
            text_red,
            text_green,
            text_blue,
            text_alpha
        ], 3);
        Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 66, 0, isHideshots ? '' : '', isHideshots ? [
            124,
            195,
            13,
            255
        ] : [
            255,
            0,
            0,
            255
        ], 3);
        Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 74, 0, isDoubletap ? '' : '', isDoubletap ? [
            124,
            195,
            13,
            255
        ] : [
            255,
            0,
            0,
            255
        ], 3);
        Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 82, 0, isSafepoint ? '' : '', isSafepoint ? [
            124,
            195,
            13,
            255
        ] : [
            255,
            0,
            0,
            255
        ], 3);
    } else {
        if (drawRight) {
            Render.String(screen_size[0] / 2 - 50, screen_size[1] / 2 - 30, 1, '', [
                arrows_red,
                arrows_green,
                arrows_blue,
                arrows_alpha
            ], 4);
            Render.String(screen_size[0] / 2 + 50, screen_size[1] / 2 - 30, 1, '', [
                selected_red,
                selected_green,
                selected_blue,
                selected_alpha
            ], 4);
            Render.String(screen_size[0] / 2, screen_size[1] / 2 + 25, 1, '', [
                arrows_red,
                arrows_green,
                arrows_blue,
                arrows_alpha
            ], 4);
            Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 58, 0, isInverted ? '' : '', [
                text_red,
                text_green,
                text_blue,
                text_alpha
            ], 3);
            Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 66, 0, isHideshots ? '' : '', isHideshots ? [
                124,
                195,
                13,
                255
            ] : [
                255,
                0,
                0,
                255
            ], 3);
            Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 74, 0, isDoubletap ? '' : '', isDoubletap ? [
                124,
                195,
                13,
                255
            ] : [
                255,
                0,
                0,
                255
            ], 3);
            Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 82, 0, isSafepoint ? '' : '', isSafepoint ? [
                124,
                195,
                13,
                255
            ] : [
                255,
                0,
                0,
                255
            ], 3);
        } else {
            if (drawBack) {
                Render.String(screen_size[0] / 2 - 50, screen_size[1] / 2 - 30, 1, '', [
                    arrows_red,
                    arrows_green,
                    arrows_blue,
                    arrows_alpha
                ], 4);
                Render.String(screen_size[0] / 2 + 50, screen_size[1] / 2 - 30, 1, '', [
                    arrows_red,
                    arrows_green,
                    arrows_blue,
                    arrows_alpha
                ], 4);
                Render.String(screen_size[0] / 2, screen_size[1] / 2 + 25, 1, '', [
                    selected_red,
                    selected_green,
                    selected_blue,
                    selected_alpha
                ], 4);
                Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 58, 0, isInverted ? '' : '', [
                    text_red,
                    text_green,
                    text_blue,
                    text_alpha
                ], 3);
                Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 66, 0, isHideshots ? '' : '', isHideshots ? [
                    124,
                    195,
                    13,
                    255
                ] : [
                    255,
                    0,
                    0,
                    255
                ], 3);
                Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 74, 0, isDoubletap ? '' : '', isDoubletap ? [
                    124,
                    195,
                    13,
                    255
                ] : [
                    255,
                    0,
                    0,
                    255
                ], 3);
                Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 82, 0, isSafepoint ? '' : '', isSafepoint ? [
                    124,
                    195,
                    13,
                    255
                ] : [
                    255,
                    0,
                    0,
                    255
                ], 3);
            } else {
                if (drawHideReal) {
                    Render.String(screen_size[0] / 2 - 50, screen_size[1] / 2 - 20, 1, '', [
                        255,
                        255,
                        255,
                        255
                    ], 4);
                    Render.String(screen_size[0] / 2 + 50, screen_size[1] / 2 - 20, 1, '', [
                        255,
                        255,
                        255,
                        255
                    ], 4);
                    Render.String(screen_size[0] / 2, screen_size[1] / 2 + 25, 1, '', [
                        255,
                        255,
                        255,
                        255
                    ], 4);
                    Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 58, 0, isHideshots ? '' : '', isHideshots ? [
                        124,
                        195,
                        13,
                        255
                    ] : [
                        255,
                        0,
                        0,
                        255
                    ], 3);
                    Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 66, 0, isDoubletap ? '' : '', isDoubletap ? [
                        124,
                        195,
                        13,
                        255
                    ] : [
                        255,
                        0,
                        0,
                        255
                    ], 3);
                    Render.String(screen_size[0] / 2 + 14, screen_size[1] / 2 + 74, 0, isSafepoint ? '' : '', isSafepoint ? [
                        124,
                        195,
                        13,
                        255
                    ] : [
                        255,
                        0,
                        0,
                        255
                    ], 3);
                }
            }
        }
    }
}
function onCreateMove() {
    if (isLeftActive) {
        drawLeft = 1;
        drawBack = 0;
        drawRight = 0;
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', -90);
        UI.SetValue('Anti-Aim', 'Fake Angles', 'Hide real angle', false);
    } else {
        if (isRightActive) {
            drawLeft = 0;
            drawBack = 0;
            drawRight = 1;
            UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 90);
            UI.SetValue('Anti-Aim', 'Fake Angles', 'Hide real angle', false);
        } else {
            if (isBackwardsActive) {
                drawLeft = 0;
                drawBack = 1;
                drawRight = 0;
                UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 0);
                UI.SetValue('Anti-Aim', 'Fake Angles', 'Hide real angle', false);
            } else {
                if (isHideRealActive) {
                    drawLeft = 0;
                    drawBack = 0;
                    drawRight = 0;
                    UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 0);
                    UI.SetValue('Anti-Aim', 'Fake Angles', 'Hide real angle', true);
                }
            }
        }
    }
}
function Main() {
    Global.RegisterCallback('Draw', 'drawIndicators');
    Global.RegisterCallback('CreateMove', 'onCreateMove');
}
Main();