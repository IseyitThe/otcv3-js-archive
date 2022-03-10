/***************************************************************************/
var _$_655b = ["Anti-Aim", "Fake-Lag", "Limit", "GetValue", "Jitter", "Trigger limit", "GetScreenSize", "Realtime", "limit min", "AddSliderInt", "limit max", "jitter min", "jitter max", "tigger limit min", "tigger limit max", "cycle", "AddSliderFloat", "Misc", "JAVASCRIPT", "Script Items", "random", "floor", "SetValue", " ", "String", "ANTI-L M", "-", "Draw", "main", "RegisterCallback"];
var limit = UI[_$_655b[3]](_$_655b[0], _$_655b[1], _$_655b[2]);
var jitter = UI[_$_655b[3]](_$_655b[0], _$_655b[1], _$_655b[4]);
var tlimit = UI[_$_655b[3]](_$_655b[0], _$_655b[1], _$_655b[5]);
var nlimit = UI[_$_655b[3]](_$_655b[0], _$_655b[1], _$_655b[2]);
var njitter = UI[_$_655b[3]](_$_655b[0], _$_655b[1], _$_655b[4]);
var ntlimit = UI[_$_655b[3]](_$_655b[0], _$_655b[1], _$_655b[5]);
var screen_size = Global[_$_655b[6]]();
var lasttime = Global[_$_655b[7]]();
var realtime = Global[_$_655b[7]]();
var r = 255;
var g = 255;
var b = 255;
var r1 = 255;
var g1 = 255;
var b1 = 255 ;

function addtomenu() {
    UI[_$_655b[9]](_$_655b[8], 0, 16);
    UI[_$_655b[9]](_$_655b[10], 0, 16);
    UI[_$_655b[9]](_$_655b[11], 0, 100);
    UI[_$_655b[9]](_$_655b[12], 0, 100);
    UI[_$_655b[9]](_$_655b[13], 0, 16);
    UI[_$_655b[9]](_$_655b[14], 0, 16);
    UI[_$_655b[16]](_$_655b[15], 0, 5)
}

function SFAKE() {
    var _0x1BE0B = UI[_$_655b[3]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[8]);
    var _0x1BDE5 = UI[_$_655b[3]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[10]);
    var _0x1BE31 = _0x1BE0B + Math[_$_655b[21]](Math[_$_655b[20]]() * (_0x1BDE5 - _0x1BE0B + 1));
    UI[_$_655b[22]](_$_655b[0], _$_655b[1], _$_655b[2], _0x1BE31);
    var _0x1BE0B = UI[_$_655b[3]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[11]);
    var _0x1BDE5 = UI[_$_655b[3]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[12]);
    var _0x1BE31 = _0x1BE0B + Math[_$_655b[21]](Math[_$_655b[20]]() * (_0x1BDE5 - _0x1BE0B + 1));
    UI[_$_655b[22]](_$_655b[0], _$_655b[1], _$_655b[4], _0x1BE31);
    var _0x1BE0B = UI[_$_655b[3]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[13]);
    var _0x1BDE5 = UI[_$_655b[3]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[14]);
    var _0x1BE31 = _0x1BE0B + Math[_$_655b[21]](Math[_$_655b[20]]() * (_0x1BDE5 - _0x1BE0B + 1));
    UI[_$_655b[22]](_$_655b[0], _$_655b[1], _$_655b[5], _0x1BE31)
}

function check() {
    var _0x1BE0B = UI[_$_655b[3]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[8]);
    var _0x1BDE5 = UI[_$_655b[3]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[10]);
    if (_0x1BE0B > _0x1BDE5) {
        UI[_$_655b[22]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[8], _0x1BDE5)
    };
    var _0x1BE0B = UI[_$_655b[3]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[11]);
    var _0x1BDE5 = UI[_$_655b[3]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[12]);
    if (_0x1BE0B > _0x1BDE5) {
        UI[_$_655b[22]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[11], _0x1BDE5)
    };
    var _0x1BE0B = UI[_$_655b[3]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[13]);
    var _0x1BDE5 = UI[_$_655b[3]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[14]);
    if (_0x1BE0B > _0x1BDE5) {
        UI[_$_655b[22]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[13], _0x1BDE5)
    }
}

function main() {
    check();
    limit = UI[_$_655b[3]](_$_655b[0], _$_655b[1], _$_655b[2]);
    jitter = UI[_$_655b[3]](_$_655b[0], _$_655b[1], _$_655b[4]);
    tlimit = UI[_$_655b[3]](_$_655b[0], _$_655b[1], _$_655b[5]);
    screen_size = Global[_$_655b[6]]();
    Render[_$_655b[24]](20, screen_size[1] - 400, 0, _$_655b[23], [r, g, b, 255], 4);
    Render[_$_655b[24]](20, screen_size[1] - 370, 0, _$_655b[25], [0, 255, 51, 255], 4);
    Render[_$_655b[24]](20, screen_size[1] - 340, 0, String(limit) + _$_655b[26] + String(jitter) + _$_655b[26] + String(tlimit), [r, g, b, 255], 4);
    de = UI[_$_655b[3]](_$_655b[17], _$_655b[18], _$_655b[19], _$_655b[15]);
    r = 255;
    g = 255;
    b = 255;
    if (r == 1) {
        r1 = -r1
    };
    if (g == 1) {
        g1 = -g1
    };
    if (b == 1) {
        b1 = -b1
    };
    if (r == 255) {
        r1 = -r1
    };
    if (g == 255) {
        g1 = -g1
    };
    if (b == 255) {
        b1 = -b1
    };
    realtime = Global[_$_655b[7]]();
    if (realtime - lasttime >= de) {
        SFAKE();
        lasttime = realtime
    };
    if (realtime < lasttime) {
        lasttime = Global[_$_655b[7]]();
        realtime = Global[_$_655b[7]]()
    }
}
addtomenu();
Global[_$_655b[29]](_$_655b[27], _$_655b[28])