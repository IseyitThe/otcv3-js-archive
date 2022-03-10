
const noblea = ['min', 'tM9IBgu=', 'tK9cteu=', 'wYbUB2jSzsbDigXLyw5PBMC=', 'GetScreenSize', 'CMLNAhq=', 'r2v0rMfRzvLHDW==', '[ noble ] freestanding  ', 'C2v0DxbFzM9UDhm=', 'GetViewAngles', 'u2v0rw5HyMXLza==', 'Unload', 'safety', 'BgvMDa==', 'r2v0tg9JywXqBgf5zxi=', 'r2v0uhjVCa==', 'GetLocalPlayer', 'ug9SEwDVBG==', 'cos', 'q29UzMLN', 'JS Keybinds', 'RawLine', 'GetCharge', 'y29Z', 'Tickcount', 'right', 'zgf0yq==', 'freestanding', 'Config', 'small', 'SetEnabled', 'qw50AsbbAw0=', 'AddMultiDropdown', 'AddSubTab', 'q3jLyxrLtw92zq==', 'ANvTCgLUzW==', 'r2v0u2nYzwvUu2L6zq==', 'wYbUB2jSzsbDigfUDgKTywLT', 'Bv9MrMXHz3m=', 'length', 'toFixed', 'yxbWBhK=', 'C2LU', 'wYbUB2jSzsbDigzYzwvZDgfUzgLUzYaGia==', 'r3jHzgLLBNrszwn0', 'data', 'r2vUzxjHBa==', 'setup_fonts', 'BwfPBG==', 'u2v0t3zLCNjPzgu=', 'condition', 'r2v0vMfSDwu=', 'onUnload', 'GetValue', 'CBasePlayer', 'zxLL', 'toString', 'GetProp', 'C2XPy2u=', 'Scripts', 's2v5igfZC2LNBM1LBNq=', 'Add', 'OutlineString', 'y29UzgL0Aw9U', 'wYbUB2jSzsbDigzYzwvZDgfUzgLUzW==', 'RegisterCallback', 'BI9H', 'abs', 'wYbUB2jSzsbDihnHzMv0EsaG', 'yxnJvxm=', 'r2v0rxLLug9ZAxrPB24=', 'last_condition', 'qwrKrM9UDa==', '[ noble ] inverter', 'wYbUB2jSzsbDigzYzwvZDgfUzgLUzYa=', 'y29Uy2f0', 'uMvNAxn0zxjdywXSyMfJAW==', 'u3rYAw5N', 'IsMenuOpen', 'vgLJA0LUDgvYDMfS', '[ noble ] condition', 'IsAlive', 'm_vecVelocity[0]', 'GetFakeYaw', 'verdanab', 'ywjZ', 'C2fMzxr5', 'main', '[ noble ] leaning   ', 'rLjbtuvFuKvorevsx1nuqvju', 'qwrKq2HLy2TIB3G=', 'call', 'Bv92zwnwzwXVy2L0EvSWxq==', 'C2v0DgLUz3m=', 'zNjLzxn0yw5KAw5N', 'settings', 'Dodge', 'wYbUB2jSzsbDihnHzMv0EsaGia==', 'wYbUB2jSzsbDihnHzMv0Eq==', 'BgvHBG==', 'qxjJ', 'sxnbBgL2zq==', 'SyaeQ', 'sin', 'eye', 'onFrameRenderStart', 'AddSliderInt', 'C3rHBMrPBMC=', 'lean', 'left', 'side', 'C21HBgW=', 'q0jHC2vqBgf5zxi=', 'slow-walking', 'u2v0rMfRzu9MzNnLDa==', 'wYbUB2jSzsbDigXLyw5PBMCGia==', 'C2LKzq==', 'sLmGs2v5yMLUzhm=', 'Polygon', 'GetRealYaw', 'JumwO', 'qwrKu2XPzgvYsw50', 'Aw5KzxHpzG==', 'onCreateMove', 'prototype', 'AddHotkey', 'HjOxq', 'ascUs', 'uMfNzq==', 'DMvYzgfUywi=', 'qwrKrhjVCgrVD24=', 'body', 'AddFont'];
(function (a, b) {
    const c = function (d) {
        while (--d) {
            a['push'](a['shift']());
        }
    };
    c(++b);
}(noblea, 0x86));
const nobleb = function (a, b) {
    a = a - 0x0;
    var c = noblea[a];
    return c;
};
const noblec = function (a, b) {
    a = a - 0x0;
    var c = noblea[a];
    if (noblec['BauKND'] === undefined) {
        var d = function (f) {
            const g = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            const h = String(f)['replace'](/=+$/, '');
            var i = '';
            for (var j = 0x0, k, l, m = 0x0; l = h['charAt'](m++); ~l && (k = j % 0x4 ? k * 0x40 + l : l, j++ % 0x4) ? i += String['fromCharCode'](0xff & k >> (-0x2 * j & 0x6)) : 0x0) {
                l = g['indexOf'](l);
            }
            return i;
        };
        noblec['TtICti'] = function (f) {
            const g = d(f);
            var h = [];
            for (var j = 0x0, k = g['length']; j < k; j++) {
                h += '%' + ('00' + g['charCodeAt'](j)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(h);
        };
        noblec['ZJLaSy'] = {};
        noblec['BauKND'] = !![];
    }
    const e = noblec['ZJLaSy'][a];
    if (e === undefined) {
        c = noblec['TtICti'](c);
        noblec['ZJLaSy'][a] = c;
    } else {
        c = e;
    }
    return c;
};
const aV = noblec;
const aS = nobleb;

function fixUIBehaviour() {
    const aO = nobleb;
    const aN = noblec;
    for (var a in UI) {
        if (!~a[aN('0x79')](aO('0x3c'))) continue;
        (function (b) {
            UI[a] = function () {
                const aP = noblec;
                b[aP('0x28')](this, Array['prototype'][aP('0x39')]['call'](arguments));
                return arguments[0x0]['concat'](arguments[0x1]);
            };
        }(UI[a]));
    }
}
fixUIBehaviour();


Render[aS('0x3d')] = function (b, d, e, g, h, i) {
    const aU = noblec;
    const aT = aS;
    const j = Math[aT('0x84')](0x7d, h[0x3]);
    Render[aU('0x4c')](b - 0x1, d - 0x1, e, g, [0xa, 0xa, 0xa, j], i);
    Render[aU('0x4c')](b - 0x1, d + 0x1, e, g, [0xa, 0xa, 0xa, j], i);
    Render[aU('0x4c')](b + 0x1, d - 0x1, e, g, [0xa, 0xa, 0xa, j], i);
    Render[aU('0x4c')](b + 0x1, d + 0x1, e, g, [0xa, 0xa, 0xa, j], i);
    Render[aU('0x4c')](b, d, e, g, h, i);
};
Render[aV('0x63')] = function (a, b, c, d, e, f, g, h) {
    const aX = aS;
    const aW = aV;
    g = 0x168 / g;
    for (var j = e; j < e + f; j = j + g) {
        var k = j * Math['PI'] / 0xb4;
        var l = (j + g) * Math['PI'] / 0xb4;
        var m = Math[aW('0x16')](k);
        var n = Math[aW('0x29')](k);
        var o = Math['cos'](l);
        var p = Math[aX('0x66')](l);
        var q = a + m * d;
        var r = b + n * d;
        var s = a + m * c;
        var t = b + n * c;
        var u = a + o * d;
        var v = b + p * d;
        var w = a + o * c;
        var z = b + p * c;
        Render[aW('0x10')]([
            [s, t],
            [w, z],
            [q, r]
        ], h);
        Render[aW('0x10')]([
            [q, r],
            [w, z],
            [u, v]
        ], h);
    }
};

function Length2D(a) {
    return Math['sqrt'](a[0x0] ** 0x2 + a[0x1] ** 0x2);
}

function Normalize(a) {
    if (a < -0xb4) a += 0x168;
    if (a > 0xb4) a -= 0x168;
    return a;
}
const nobleaF = {};
nobleaF['side'] = 0x0;
nobleaF[aV('0x55')] = 0x0;
const nobleaG = {};
nobleaG['freestanding'] = 0x0;
nobleaG['lean'] = 0x0;
nobleaG[aV('0x55')] = 0x0;
const nobleaH = {};
nobleaH[aV('0x3e')] = 0x0;
nobleaH[aS('0x46')] = -0x1;
nobleaH[aS('0x2c')] = nobleaF;
nobleaH[aV('0x5c')] = nobleaG;
nobleaH[aV('0x7')] = !![];
var shared = nobleaH;
const nobleaI = {};
nobleaI[aV('0x2f')] = null;
nobleaI[aV('0x6e')] = null;
var fonts = nobleaI;
var labels = [aV('0x41'), 'left', aS('0x18')];
const path = [aV('0x12'), 'Noble', 'Noble'];
const enable = UI[aV('0x59')](path, aV('0x24'));
const conditions = UI[aV('0x81')](path, aS('0x4f'), [aV('0x6a'), 'moving', aS('0x70'), aV('0x22')], 0x0);
const inverter = UI[aS('0x7c')]([aS('0x1b'), 'Scripts', 'Keys', aV('0x74')], aS('0x48'), 'Inverter');
const dodge = UI[aS('0x7c')]([aV('0x12'), aS('0x3a'), 'Keys', aS('0x13')], '[ noble ] dodge', aS('0x5f'));
const nobleaJ = {};
nobleaJ[aV('0x5d')] = UI['AddMultiDropdown'](path, aV('0x3f'), [aS('0x67'), aS('0x82')], 0x0);
nobleaJ[aS('0x6b')] = UI[aV('0x78')](path, aV('0x2'), 0x0, 0x64);
nobleaJ[aS('0xb')] = UI[aV('0x78')](path, aV('0x61'), 0x0, 0x64);
const nobleaK = {};
nobleaK[aV('0x5d')] = UI[aS('0x1f')](path, aV('0x49'), [aV('0x36'), aS('0x82')], 0x0);
nobleaK[aV('0x62')] = UI[aV('0x78')](path, '[ noble ] leaning ', 0x0, 0x64);
nobleaK[aV('0x55')] = UI[aV('0x78')](path, '[ noble ] safety ', 0x0, 0x64);
const nobleaL = {};
nobleaL[aS('0x1a')] = UI[aS('0x1f')](path, aS('0x6'), [aV('0x36'), aS('0x82')], 0x0);
nobleaL['lean'] = UI[aS('0x69')](path, aV('0x72'), 0x0, 0x64);
nobleaL[aS('0xb')] = UI[aV('0x78')](path, aV('0x43'), 0x0, 0x64);
const nobleaM = {};
nobleaM[aS('0x1a')] = UI['AddMultiDropdown'](path, aV('0x2a'), ['eye', 'body'], 0x0);
nobleaM[aS('0x6b')] = UI[aV('0x78')](path, aS('0x57'), 0x0, 0x64);
nobleaM[aV('0x55')] = UI[aS('0x69')](path, aV('0x60'), 0x0, 0x64);
const options = [nobleaJ, nobleaK, nobleaL, nobleaM];
const ref_slowwalk = [aV('0x7f'), aV('0x1e'), aV('0x2d'), aV('0x3b'), 'Slow walk'];
function RenderIndicators() {
    const bg = aV;
    const bf = aS;
    if (shared['setup_fonts']) {
        shared[bf('0x2e')] = ![];
        fonts['main'] = Render[bf('0x83')](bg('0x80'), 0x9, 0x0);
        fonts[bg('0x6e')] = Render[bg('0x47')]('verdanab', 0x7, 0x0);
    }
    const a = Entity[bg('0xd')]();
    if (!a || !Entity[bf('0x50')](a)) return;
    const b = Render[bf('0x3')]()[0x0],
        c = Render[bg('0x23')]()[0x1];
    const d = Normalize(Local[bf('0x76')]() - Local[bg('0x5')]()) / 0x2;
    const e = [0xc0 - Math[bf('0x42')](d) * 0x47 / 0x3c, 0x20 + Math[bf('0x42')](d) * 0x92 / 0x3c, 0x1c, 0xff];
    const f = Math[bf('0x42')](d) * 0x23 / 0x3c;
    Render[bf('0x3d')](b / 0x2, c / 0x2 + 0x19, 0x1, 'FAKE', e, fonts[bf('0x56')]);
    Render[bg('0x2b')](b / 0x2 - f + 0x1, c / 0x2 + 0x27, f + 0x1, 0x2, 0x1, [e[0x0], e[0x1], e[0x2], 0x0], [e[0x0], e[0x1], e[0x2], 0xff]);
    Render['GradientRect'](b / 0x2 + 0x1, c / 0x2 + 0x27, f, 0x2, 0x1, [e[0x0], e[0x1], e[0x2], 0xff], [e[0x0], e[0x1], e[0x2], 0x0]);
    Render[bf('0x3d')](b / 0x2, c / 0x2 + 0x2b, 0x1, Math[bg('0x54')](d[bf('0x27')](0x0))['toString'](), [0xeb, 0xeb, 0xeb, 0xc8], fonts[bf('0x1c')]);
}




function onDraw() {
    RenderIndicators();
}


Cheat[aS('0x40')]('Draw', 'onDraw');


