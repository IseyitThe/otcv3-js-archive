var x = 100;
var y = 100;
var width = 520;
var height = 410;//640
var indropdown = false;
var col_top = [186, 129, 240, 255];
var col_bottom = [110, 59, 156, 255];
var tickcount = Globals.Tickcount(tag);
Cheat.Print("Ticks elapsed on server: " + tickcount);
var tag = [
    "$",
	"$$",
	"E$$",
	"B$$",
	"N$$", 
	"Ben$$",
	"O'Ben$$", 
    "O'BEN$$", 	
	"O'BE$$",
	"OBEN'$$",
	]

var tickcount = Globals.Tickcount();
Cheat.Print("Ticks elapsed on server: " + tickcount);
	
var last_time = 0;
var index = 0;

var menuopen = true;

var ragetab = true;
var legittab = false;
var espcreator = false;
var antiaimtab = false;
var visualstab = false;
var misctab = false;

var namepos = [160, 280];
var weaponpos = [160, 300];

var eb_enabled = false;
var eb_box = false;
var eb_health = false;

var doubletap_enable = false;
var doubletap_tolerance_value = [0, 0];
var doubletap_shift_value = [0, 0];
var minimumdamage_enable = false;
var minimumdamage_override_value_autosniper = [0, 0];
var minimumdamage_default_value_autosniper = [0, 0];
var minimumdamage_override_value_scout = [0, 0];
var minimumdamage_default_value_scout = [0, 0];
var minimumdamage_override_value_awp = [0, 0];
var minimumdamage_default_value_awp = [0, 0];
var minimumdamage_override_value_heavypistols = [0, 0];
var minimumdamage_default_value_heavypistols = [0, 0];
var minimumdamage_array_opened = false;
var minimumdamage_array_selectedoption = 0;
var minimumdamage_array = ["auto sniper", "scout", "awp", "heavy pistols"];
var minimumdamage_keybind = 0x3A;
var other_forcedoubletap = false;
var other_noscopedistance = false;
var other_noscope_keybind = 0x3A;
var visuals_general_indicator = false;
var visuals_general_indicatorarray_opened = false;
var visuals_general_indicatorarray_selectedoptions = [];
var visuals_general_indicatorarray = ["anti-aim inversion", "doubletap"];
var visuals_informationbox = false;
var visuals_informationbox_x = [0, 0];
var visuals_informationbox_y = [0, 0];
var legit_triggerbot_hitchance = false;
var legit_triggerbot_hitchance_keybind = 0x3A;
var legit_triggerbot_hitchance_value = [0, 0];
var legit_triggerbot_hitchance_resetvalue = [UI.GetValue("Legit", "GENERAL", "Triggerbot", "Hitchance"), UI.GetValue("Legit", "GENERAL", "Triggerbot", "Hitchance") / 0.59];
var branding_clantag = false;

var invert_onshot = false;
var invert_onhit = false;
var e_onpeek = false;
var fakelag_step = false;
var fakelag_step_delay = [1000, 1000 * 0.034];

var globaltime = Globals.Realtime();

var keyNames = ["KEY_Z", "KEY_Y", "KEY_X", "KEY_W", "KEY_V", "KEY_U", "KEY_T", "KEY_S", "KEY_R", "KEY_Q", "KEY_P", "KEY_O", "KEY_N", "KEY_M", "KEY_L", "KEY_K", "KEY_J", "KEY_F", "KEY_G", "KEY_H", "KEY_I", "KEY_E", "KEY_D", "KEY_C", "KEY_B", "KEY_A", "NUM_9", "NUM_8", "NUM_7", "NUM_6", "NUM_5", "NUM_4", "NUM_3", "NUM_2", "NUM_1", "NUM_0", "VK_DELETE", "VK_INSERT", "VK_DOWN", "VK_RIGHT", "VK_UP", "VK_LEFT", "VK_HOME", "VK_SPACE", "VK_LBUTTON", "VK_RBUTTON", "VK_MBUTTON", "VK_XBUTTON1", "VK_XBUTTON2", "VK_BACK", "VK_TAB", "VK_RETURN", "VK_SHIFT", "VK_CONTROL", "VK_MENU", "VK_CAPITAL", "VK_ESCAPE"];
var keyCodes = [0x5A, 0x59, 0x58, 0x57, 0x56, 0x55, 0x54, 0x53, 0x52, 0x51, 0x50, 0x4F, 0x4E, 0x4D, 0x4C, 0x4B, 0x4A, 0x46, 0x47, 0x48, 0x49, 0x45, 0x44, 0x43, 0x42, 0x41, 0x39, 0x38, 0x37, 0x36, 0x35, 0x34, 0x33, 0x32, 0x31, 0x30, 0x2E, 0x2D, 0x28, 0x27, 0x26, 0x25, 0x24, 0x20, 0x01, 0x02, 0x04, 0x05, 0x06, 0x08, 0x09, 0x0D, 0x10, 0x11, 0x12, 0x14, 0x1B];

var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = Base64._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }
        return output;
    },
    decode: function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = Base64._utf8_decode(output);
        return output;
    },
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    },
    _utf8_decode: function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

function create_string(x, y, aligned, string, col) {
    var font = Render.AddFont("Small Fonts", 7, 300);
    Render.StringCustom(x - 1, y, aligned, string, [0, 0, 0, 255], font);
    Render.StringCustom(x + 1, y, aligned, string, [0, 0, 0, 255], font);
    Render.StringCustom(x, y - 1, aligned, string, [0, 0, 0, 255], font);
    Render.StringCustom(x, y + 1, aligned, string, [0, 0, 0, 255], font);
    Render.StringCustom(x, y, aligned, string, col, font);
}

function create_menu(x, y, width, height) {
    Render.GradientRect(x + 7, y + 3, width - 14, 4, 0, col_top, col_bottom);
    Render.FilledRect(x + 7, y + 7, width - 14, height - 14, [24, 24, 24, 255]);
    Render.Rect(x + 7, y + 7, width - 14, height - 14, [20, 20, 20, 150]);
    Render.FilledRect(x + 20, y + 36, width - 40, height - 55, [3, 3, 3, 255]);
    Render.Rect(x + 20, y + 36, width - 40, height - 55, [40, 40, 40, 255]);
}

function create_tab(text, x, y, tab) {
    var curPos = Input.GetCursorPosition();
    var curx = curPos[0];
    var cury = curPos[1];
    var clicked = false;

    if (tab) {
        Render.FilledRect(x, y + 14, 56, 2, col_top);
        Render.FilledRect(x, y + 16, 56, 2, col_bottom);
        create_string(x + 28, y, 1, text, [180, 180, 180, 255]);
    } else {
        Render.FilledRect(x, y + 14, 56, 2, [65, 65, 65, 255]);
        Render.FilledRect(x, y + 16, 56, 2, [40, 40, 40, 255]);
        create_string(x + 28, y, 1, text, [180, 180, 180, 255]);
    }

    if (curx > x && curx < x + 56 && cury > y && cury < y + 18 && !tab && !indropdown) {
        create_string(x + 28, y, 1, text, [170, 170, 170, 255]);
        Render.FilledRect(x, y + 14, 56, 2, [85, 85, 85, 255]);
        Render.FilledRect(x, y + 16, 56, 2, [60, 60, 60, 255]);
        if (Input.IsKeyPressed(0x01) && Globals.Realtime() > globaltime + 0.2) {
            globaltime = Globals.Realtime();
            clicked = true;
        }
    }

    return clicked;
}

function create_group(title, x, y, height) {
    create_string(x + 10, y - 5, 0, title, [255, 255, 255, 255]);
    var font = Render.AddFont("Small Fonts", 7, 300);
    var textsizex = Render.TextSizeCustom(title, font)[0];
    Render.Line(x, y, x + 5, y, [40, 40, 40, 255]);
    Render.Line(x + textsizex + 15, y, x + 210, y, [40, 40, 40, 255]);
    Render.Line(x + 210, y, x + 210, y + height, [40, 40, 40, 255]);
    Render.Line(x + 210, y + height, x, y + height, [40, 40, 40, 255]);
    Render.Line(x, y + height, x, y, [40, 40, 40, 255]);
    return true;
}

function create_checkbox(title, x, y, item) {
    var curPos = Input.GetCursorPosition();
    var curx = curPos[0];
    var cury = curPos[1];
    var clicked = item;

    if (item) {
        Render.GradientRect(x, y, 8, 8, 0, col_top, col_bottom);
        Render.Rect(x, y, 8, 8, [0, 0, 0, 255]);
    } else {
        Render.FilledRect(x, y, 8, 8, [60, 60, 60, 255]);
        Render.Rect(x, y, 8, 8, [0, 0, 0, 255]);
    }
    create_string(x + 15, y - 2, 0, title, [255, 255, 255, 255]);
    var font = Render.AddFont("Small Font", 7, 300);
    var textsizex = Render.TextSizeCustom(title, font)[0];

    if (curx > x && curx < x + 15 + textsizex && cury > y && cury < y + 10 && !indropdown) {
        if (Input.IsKeyPressed(0x01) && Globals.Realtime() > globaltime + 0.2) {
            globaltime = Globals.Realtime();
            clicked = !item;
        }
    }

    return clicked;
}

function create_slider(title, x, y, min, max, value, type) {
    var curPos = Input.GetCursorPosition();
    var curx = curPos[0];
    var cury = curPos[1];
    var relval = Math.round(value * ((max - min) / 170) + min);
    var stringvalue = 0;

    create_string(x, y, 0, title, [255, 255, 255, 255]);
    Render.GradientRect(x, y + 12, 170, 8, 0, [60, 60, 60, 255], [40, 40, 40, 255]);
    Render.GradientRect(x, y + 12, value, 8, 0, col_top, col_bottom);
    Render.Rect(x, y + 12, 170, 8, [0, 0, 0, 255]);

    if (curx > x - 1 && curx < x + 171 && cury > y + 10 && cury < y + 22 && !indropdown) {
        if (Input.IsKeyPressed(0x01)) {
            value = curx - x;
            relval = Math.round(value * ((max - min) / 170) + min);
            stringvalue = 25;
        }
    }
    var font = Render.AddFont("Small Font", 7, 300);
    var textsizex = Render.TextSizeCustom(relval + "", font)[0] / 2;
    create_string(x + value + stringvalue - textsizex, y + 20, 0, relval + type, [255, 255, 255, 255]);

    var valueArray = new Array(2);
    valueArray[0] = relval;
    valueArray[1] = value;
    return valueArray;
}

function create_dropdown(title, x, y, array, opened, selectedoption) {
    var curPos = Input.GetCursorPosition();
    var curx = curPos[0];
    var cury = curPos[1];

    create_string(x, y, 0, title, [255, 255, 255, 255]);
    Render.FilledRect(x, y + 12, 170, 20, [51, 51, 51, 255]);
    Render.Rect(x, y + 12, 170, 20, [0, 0, 0, 255]);
    create_string(x + 5, y + 16, 0, array[selectedoption], [150, 150, 150, 255]);
    Render.Polygon([[x + 155, y + 20], [x + 165, y + 20], [x + 160, y + 25]], [150, 150, 150, 255]);

    if (curx > x && curx < x + 170 && cury > y + 12 && cury < y + 32) {
        Render.Polygon([[x + 155, y + 20], [x + 165, y + 20], [x + 160, y + 25]], col_top);
        if (Input.IsKeyPressed(0x01) && Globals.Realtime() > globaltime + 0.2) {
            globaltime = Globals.Realtime();
            return "closed";
        }
    }

    if (opened) {
        indropdown = true;
        Render.FilledRect(x, y + 35, 170, array.length * 17 + 3, [51, 51, 51, 255]);
        Render.Rect(x, y + 35, 170, array.length * 17 + 3, [0, 0, 0, 255]);
        for (i = 0; i < array.length; i++) {
            create_string(x + 5, y + 40 + (16 * i), 0, array[i], [255, 255, 255, 255]);
            if (curx > x && curx < x + 170 && cury > y + 40 + (16 * i) && cury < y + 40 + (16 * i) + 15) {
                create_string(x + 5, y + 40 + (16 * i), 0, array[i], col_top);
                if (Input.IsKeyPressed(0x01) && Globals.Realtime() > globaltime + 0.2) {
                    globaltime = Globals.Realtime();
                    return i;
                }
            }
        }
    } else {
        indropdown = false;
    }

    if (Input.IsKeyPressed(0x01) && Globals.Realtime() > globaltime + 0.2 && opened) {
        globaltime = Globals.Realtime();
        if (curx < x || curx > x + 170 || cury < y + 35 || cury > y + 35 + array.length * 17 + 3) {
            return "closed";
        }
    }
}

Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

function create_multidropdown(title, x, y, array, opened, selectedoptions) {
    var curPos = Input.GetCursorPosition();
    var curx = curPos[0];
    var cury = curPos[1];
    var displayValue = "";
    var clicked = false;
    var needclosed = false;

    create_string(x, y, 0, title, [255, 255, 255, 255]);
    Render.FilledRect(x, y + 12, 170, 20, [51, 51, 51, 255]);
    Render.Rect(x, y + 12, 170, 20, [0, 0, 0, 255]);
    for (i = 0; i < array.length; i++) {
        if (selectedoptions.contains(i)) {
            displayValue += array[i] + ", ";
        }
    }
    displayValue = displayValue.substring(0, displayValue.length - 2);
    var font = Render.AddFont("Small Fonts", 7, 300);
    var displaysizex = Render.TextSizeCustom(displayValue, font)[0];
    var keepvalue = -1;
    if (displaysizex > 160) {
        for (i = 0; i < selectedoptions.length; i++) {
            if (selectedoptions[i] != undefined && keepvalue == -1) {
                keepvalue = i;
            }
        }
        displayValue = array[selectedoptions[keepvalue]] + ", ...";
    }
    if (displayValue == "")
        displayValue = "none";
    create_string(x + 5, y + 16, 0, displayValue, [150, 150, 150, 255]);
    var text_col = [150, 150, 150, 255];
    Render.Polygon([[x + 155, y + 20], [x + 165, y + 20], [x + 160, y + 25]], [150, 150, 150, 255]);

    if (curx > x && curx < x + 170 && cury > y + 12 && cury < y + 32) {
        Render.Polygon([[x + 155, y + 20], [x + 165, y + 20], [x + 160, y + 25]], col_top);
        text_col = col_top;
        if (Input.IsKeyPressed(0x01) && Globals.Realtime() > globaltime + 0.2) {
            globaltime = Globals.Realtime();
            needclosed = true;
        }
    }

    Render.FilledRect(x + 160, y + 20, 5, 2, [51, 51, 51, 255]);
    Render.Line(x + 161, y + 16, x + 164, y + 16, text_col);
    Render.Line(x + 164, y + 16, x + 164, y + 18, text_col);
    Render.Line(x + 164, y + 18, x + 161, y + 18, text_col);
    Render.Line(x + 161, y + 18, x + 161, y + 20, text_col);
    Render.Line(x + 161, y + 20, x + 164, y + 20, text_col);

    if (needclosed)
        return "closed";

    if (opened) {
        indropdown = true;
        Render.FilledRect(x, y + 35, 170, array.length * 17 + 3, [51, 51, 51, 255]);
        Render.Rect(x, y + 35, 170, array.length * 17 + 3, [0, 0, 0, 255]);
        for (i = 0; i < array.length; i++) {
            if (selectedoptions.contains(i)) {
                create_string(x + 5, y + 40 + (16 * i), 0, array[i], col_top);
            } else {
                create_string(x + 5, y + 40 + (16 * i), 0, array[i], [255, 255, 255, 255]);
            }
            if (curx > x && curx < x + 170 && cury > y + 40 + (16 * i) && cury < y + 40 + (16 * i) + 15) {
                create_string(x + 5, y + 40 + (16 * i), 0, array[i], col_top);
                if (Input.IsKeyPressed(0x01) && Globals.Realtime() > globaltime + 0.2) {
                    globaltime = Globals.Realtime();
                    if (selectedoptions.contains(i)) {
                        delete selectedoptions[i];
                    } else {
                        selectedoptions[i] = i;
                    }
                    clicked = true;
                }
            }
        }
        if (clicked)
            return selectedoptions;
    } else {
        indropdown = false;
    }

    if (Input.IsKeyPressed(0x01) && Globals.Realtime() > globaltime + 0.2 && opened) {
        globaltime = Globals.Realtime();
        if (curx < x || curx > x + 170 || cury < y + 35 || cury > y + 35 + array.length * 17 + 3) {
            return "closed";
        }
    }

}

function inbox(curx, minx, maxx, cury, miny, maxy) {
    if (curx > minx && curx < maxx && cury > miny && cury < maxy && !indropdown)
        return true;
}

function create_keybind(title, x, y, key) {
    var curPos = Input.GetCursorPosition();
    var curx = curPos[0];
    var cury = curPos[1];
    var displayKey = "";
    var displayAlpha = 150;
    for (i = 0; i < keyCodes.length; i++) {
        if (keyCodes[i] == key) {
            displayKey = keyNames[i];
        }
    }

    if (key == 0x3A) {
        displayKey = "none";
    }

    create_string(x, y, 0, title, [255, 255, 255, 255]);
    Render.FilledRect(x, y + 12, 170, 20, [51, 51, 51, 255]);
    Render.Rect(x, y + 12, 170, 20, [0, 0, 0, 255]);

    if (inbox(curx, x, x + 170, cury, y + 12, y + 32)) {
        displayAlpha = 230;
        for (i = 0; i < keyCodes.length; i++) {
            if (Input.IsKeyPressed(keyCodes[i]) && Globals.Realtime() > globaltime + 0.2) {
                globaltime = Globals.Realtime();
                key = keyCodes[i];
            }
        }
    }

    create_string(x + 5, y + 16, 0, displayKey, [255, 255, 255, displayAlpha]);


    return key;
}

function create_button(text, x, y) {
    var curPos = Input.GetCursorPosition();
    var curx = curPos[0];
    var cury = curPos[1];

    Render.FilledRect(x, y, 75, 20, [51, 51, 51, 255]);
    Render.Rect(x, y, 75, 20, [0, 0, 0, 255]);
    create_string(x + 35, y + 4, 1, text, [255, 255, 255, 255]);
    if (inbox(curx, x, x + 75, cury, y, y + 20)) {
        create_string(x + 35, y + 4, 1, text, col_top);
        if (Input.IsKeyPressed(0x01) && Globals.Realtime() > globaltime + 0.4) {
            globaltime = Globals.Realtime();
            return true;
        }
    }
}

function cleartabs() {
    ragetab = false;
    legittab = false;
    antiaimtab = false
    visualstab = false;
    misctab = false;
}

function get_tsize(text) {
    var font = Render.AddFont("Small Fonts", 7, 300);
    var textsizex = Render.TextSizeCustom(text, font)[0] / 2;
    return textsizex;
}

function IsPeeking(entity) {
    const pos = Entity.GetEyePosition(entity);
    const velocity = Entity.GetProp(entity, "CBasePlayer", "m_vecVelocity[0]");
    const interval = Globals.TickInterval();
    // this certified tranny code was written by @realapril
    pos[0] += velocity[0] * interval * 14;
    pos[1] += velocity[1] * interval * 14;
    pos[2] += velocity[2] * interval * 14;

    const enemies = Entity.GetEnemies();

    for (var i = 0; i < enemies.length; i++) {
        const ent = enemies[i];

        if (!ent || !Entity.IsAlive(ent) || Entity.IsDormant(ent))
            continue;

        const hitbox_pos = Entity.GetHitboxPosition(ent, 0);

        const frac = Trace.Line(entity, pos, hitbox_pos)[1];

        if (frac > 0.88) return true;
    }

    return false;
}

function main() {

    if (UI.IsMenuOpen()) {
        create_menu(x, y, width, height);
        var sx = x + 40;
        var sy = y + 55;
        if (create_tab("legit", x + 20, y + 15, ragetab)) {
            cleartabs();
            ragetab = !ragetab;
        }
        if (create_tab("ragebot", x + 20 + 66, y + 15, legittab)) {
            cleartabs();
            legittab = !legittab;
        }
        if (create_tab("anti-aim", x + 20 + 66 * 2, y + 15, antiaimtab)) {
            cleartabs();
            antiaimtab = !antiaimtab;
        }
        if (create_tab("visuals", x + 20 + 66 * 3, y + 15, visualstab)) {
            cleartabs();
            visualstab = !visualstab;
        }
        if (create_tab("misc", x + 20 + 66 * 4, y + 15, misctab)) {
            cleartabs();
            misctab = !misctab;
        }
        if (create_group("global settings", sx + 230, sy + 217, 100)) {
            bx = sx + 250;
            by = sy + 237;
            if (create_button("load config", bx, by)) {
                var config = Base64.decode(Convar.GetString("xbox_throttlespoof"));
                var config2 = Base64.decode(Convar.GetString("xbox_throttlebias"));
                var unConfig = JSON.parse(config);
                var deConfig = JSON.parse(config2);
                legit_triggerbot_hitchance = unConfig.legit[0].a543f;
                legit_triggerbot_hitchance_keybind = unConfig.legit[0].a241b;
                legit_triggerbot_hitchance_value = [unConfig.legit[0].a612c, unConfig.legit[0].a612c / 0.59];
                legit_triggerbot_hitchance_resetvalue = [unConfig.legit[0].a981p, unConfig.legit[0].a981p / 0.59];
                doubletap_enable = unConfig.ragebot[0].doubletap[0].b334z;
                doubletap_shift_value = [unConfig.ragebot[0].doubletap[0].b892f, unConfig.ragebot[0].doubletap[0].b892f * 12.14];
                doubletap_tolerance_value = [unConfig.ragebot[0].doubletap[0].b209a, unConfig.ragebot[0].doubletap[0].b209a * 21.25];
                minimumdamage_enable = unConfig.ragebot[0].mdo[0].k092s;
                minimumdamage_keybind = unConfig.ragebot[0].mdo[0].k142v;
                minimumdamage_array_selectedoption = unConfig.ragebot[0].mdo[0].k152l;
                minimumdamage_override_value_autosniper = [unConfig.ragebot[0].mdo[0].k682q, unConfig.ragebot[0].mdo[0].k682q * 1.308];
                minimumdamage_override_value_scout = [unConfig.ragebot[0].mdo[0].k735b, unConfig.ragebot[0].mdo[0].k735b * 1.308];
                minimumdamage_override_value_awp = [unConfig.ragebot[0].mdo[0].k208h, unConfig.ragebot[0].mdo[0].k208h * 1.308];
                minimumdamage_override_value_heavypistols = [deConfig.extra[0].mdo[0].k814c, deConfig.extra[0].mdo[0].k814c * 1.308]
                minimumdamage_default_autosniper = [unConfig.ragebot[0].mdo[0].k092j, unConfig.ragebot[0].mdo[0].k092j * 1.308];
                minimumdamage_default_scout = [unConfig.ragebot[0].mdo[0].k714a, unConfig.ragebot[0].mdo[0].k714a * 1.308];
                minimumdamage_default_awp = [unConfig.ragebot[0].mdo[0].k352m, unConfig.ragebot[0].mdo[0].k352m * 1.308];
                other_forcedoubletap = unConfig.ragebot[0].other[0].h092a;
                other_noscopedistance = unConfig.ragebot[0].other[0].h143p;
                other_noscope_keybind = unConfig.ragebot[0].other[0].h432c;
                invert_onshot = deConfig.antiaim[0].inversions[0].z452f;
                invert_onhit = deConfig.antiaim[0].inversions[0].z152u;
                branding_clantag = deConfig.misc[0].g309s;
                visuals_informationbox = deConfig.visuals[0].l294p;
                visuals_informationbox_x = [deConfig.visuals[0].l962z, deConfig.visuals[0].l962z * 0.088];
                visuals_informationbox_y = [deConfig.visuals[0].l512g, deConfig.visuals[0].l512g * 0.157];
                Cheat.PrintChat("[\x03Oben\x01] Loaded config successfully!");
            }
            if (create_button("save config", bx + 95, by)) {
                var config = '{ "ragebot":[{ "other":[{ "h092a":' + other_forcedoubletap + ', "h143p":' + other_noscopedistance + ', "h432c":' + other_noscope_keybind + ' }], "mdo":[{ "k092s":' + minimumdamage_enable + ', "k142v":' + minimumdamage_keybind + ', "k152l":' + minimumdamage_array_selectedoption + ', "k682q":' + minimumdamage_override_value_autosniper[0] + ', "k735b":' + minimumdamage_override_value_scout[0] + ', "k208h":' + minimumdamage_override_value_awp[0] + ', "k092j":' + minimumdamage_default_value_autosniper[0] + ', "k714a":' + minimumdamage_default_value_scout[0] + ', "k352m":' + minimumdamage_default_value_awp[0] + ' }], "doubletap":[{ "b334z":' + doubletap_enable + ', "b892f":' + doubletap_shift_value[0] + ', "b209a":' + doubletap_tolerance_value[0] + ' }] }], "legit":[{"a543f":' + legit_triggerbot_hitchance + ', "a241b":' + legit_triggerbot_hitchance_keybind + ', "a612c":' + legit_triggerbot_hitchance_value[0] + ', "a981p":' + legit_triggerbot_hitchance_resetvalue[0] + '}] }';
                var configpart2 = '{ "visuals":[{ "l294p":' + visuals_informationbox + ', "l962z":' + visuals_informationbox_x[0] + ', "l512g":' + visuals_informationbox_y[0] + ' }], "misc":[{ "g309s":' + branding_clantag + ' }], "extra":[{ "mdo":[{ "k814c":' + minimumdamage_override_value_heavypistols[0] + ', "k292x":' + minimumdamage_default_value_heavypistols[0] + ' }] }], "antiaim":[{ "inversions":[{ "z452f":' + invert_onshot + ', "z152u":' + invert_onhit + ' }] }] }';
                var savedValue = Base64.encode(config);
                var savedValue2 = Base64.encode(configpart2);
                Cheat.ExecuteCommand("xbox_throttlespoof " + savedValue);
                Cheat.ExecuteCommand("xbox_throttlebias " + savedValue2);
                Cheat.PrintChat("[\Oben\x01] Saved config successfully!");
            }
        }

        if (misctab) {
            if (create_group("branding", sx, sy, 317)) {
                branding_clantag = create_checkbox("Oben clantag", sx + 20, sy + 20, branding_clantag);
            }
        }

        if (ragetab) {
            if (create_group("general", sx, sy, 317)) {
                legit_triggerbot_hitchance = create_checkbox("triggerbot noscope hitchance", sx + 20, sy + 20, legit_triggerbot_hitchance);
                if (legit_triggerbot_hitchance) {
                    legit_triggerbot_hitchance_keybind = create_keybind("noscope key", sx + 20, sy + 35, legit_triggerbot_hitchance_keybind);
                    legit_triggerbot_hitchance_value = create_slider("noscope hitchance", sx + 20, sy + 75, 0, 100, legit_triggerbot_hitchance_value[1], "");
                    legit_triggerbot_hitchance_resetvalue = create_slider("reset hitchance", sx + 20, sy + 110, 0, 100, legit_triggerbot_hitchance_resetvalue[1], "");
                }
            }
        }

        if (visualstab) {
            if (create_group("indicators", sx, sy, 317)) {
                visuals_general_indicator = create_checkbox("display indicators", sx + 20, sy + 20, visuals_general_indicator);
                if (visuals_general_indicator) {
                    var indicator_array = create_multidropdown("indicators", sx + 20, sy + 35, visuals_general_indicatorarray, visuals_general_indicatorarray_opened, visuals_general_indicatorarray_selectedoptions);
                    if (indicator_array != undefined) {
                        if (indicator_array == "closed") {
                            visuals_general_indicatorarray_opened = !visuals_general_indicatorarray_opened;
                        } else {
                            visuals_general_indicatorarray_selectedoptions = indicator_array;
                        }
                    }
                }
            }

            if (create_group("other", sx + 230, sy, 197)) {
                ax = sx + 250;
                visuals_informationbox = create_checkbox("information box", ax, sy + 20, visuals_informationbox);
                var by = 40;
                if (visuals_informationbox) {
                    var screensize = Render.GetScreenSize();
                    var screenx = screensize[0];
                    var screeny = screensize[1];
                    visuals_informationbox_x = create_slider("x-axis position", ax, sy + 35, 0, screenx, visuals_informationbox_x[1], "");
                    visuals_informationbox_y = create_slider("y-axis position", ax, sy + 70, 0, screeny, visuals_informationbox_y[1], "");
                    by = 110;
                }
            }
        }

        if (antiaimtab) {
            if (create_group("inversions", sx, sy, 317)) {
                invert_onshot = create_checkbox("invert on shot", sx + 20, sy + 20, invert_onshot);
                invert_onhit = create_checkbox("invert on hit", sx + 20, sy + 40, invert_onhit);
            }

            if (create_group("other", sx + 230, sy, 197)) {
                ax = sx + 250;
                e_onpeek = create_checkbox("e-peek", ax, sy + 20, e_onpeek);
                fakelag_step = create_checkbox("fakelag step", ax, sy + 40, fakelag_step);
                if (fakelag_step) {
                    fakelag_step_delay = create_slider("step delay", ax, sy + 55, 0, 5000, fakelag_step_delay[1], "ms");
                }
            }
        }

        if (legittab) {
            if (create_group("doubletap", sx, sy, 110)) {
                doubletap_enable = create_checkbox("override doubletap", sx + 20, sy + 20, doubletap_enable);
                if (doubletap_enable) {
                    doubletap_tolerance_value = create_slider("tolerance", sx + 20, sy + 35, 0, 8, doubletap_tolerance_value[1], "");
                    doubletap_shift_value = create_slider("shift", sx + 20, sy + 70, 0, 14, doubletap_shift_value[1], "");
                    Exploit.OverrideTolerance(doubletap_tolerance_value[0]);
                    Exploit.OverrideShift(doubletap_shift_value[0]);
                }
            }
            if (create_group("min damage override", sx, sy + 130, 187)) {
                ay = sy + 110 + 20;
                minimumdamage_enable = create_checkbox("override minimum damage", sx + 20, ay + 20, minimumdamage_enable);
                if (minimumdamage_enable) {
                    minimumdamage_keybind = create_keybind("override damage key", sx + 20, ay + 35, minimumdamage_keybind);
                    if (minimumdamage_array_selectedoption == 0) {
                        minimumdamage_override_value_autosniper = create_slider("override damage", sx + 20, ay + 110, 0, 130, minimumdamage_override_value_autosniper[1], "hp");
                        minimumdamage_default_value_autosniper = create_slider("reset damage", sx + 20, ay + 145, 0, 130, minimumdamage_default_value_autosniper[1], "hp");
                    }
                    if (minimumdamage_array_selectedoption == 1) {
                        minimumdamage_override_value_scout = create_slider("override damage", sx + 20, ay + 110, 0, 130, minimumdamage_override_value_scout[1], "hp");
                        minimumdamage_default_value_scout = create_slider("reset damage", sx + 20, ay + 145, 0, 130, minimumdamage_default_value_scout[1], "hp");
                    }
                    if (minimumdamage_array_selectedoption == 2) {
                        minimumdamage_override_value_awp = create_slider("override damage", sx + 20, ay + 110, 0, 130, minimumdamage_override_value_awp[1], "hp");
                        minimumdamage_default_value_awp = create_slider("reset damage", sx + 20, ay + 145, 0, 130, minimumdamage_default_value_awp[1], "hp");
                    }
                    if (minimumdamage_array_selectedoption == 3) {
                        minimumdamage_override_value_heavypistols = create_slider("override damage", sx + 20, ay + 110, 0, 130, minimumdamage_override_value_heavypistols[1], "hp");
                        minimumdamage_default_value_heavypistols = create_slider("reset damage", sx + 20, ay + 145, 0, 130, minimumdamage_default_value_heavypistols[1], "hp");
                    }
                    var minimumdamage_dropdown = create_dropdown("weapon", sx + 20, ay + 70, minimumdamage_array, minimumdamage_array_opened, minimumdamage_array_selectedoption);
                    if (minimumdamage_dropdown != undefined) {
                        if (minimumdamage_dropdown == "closed") {
                            minimumdamage_array_opened = !minimumdamage_array_opened;
                        } else {
                            minimumdamage_array_selectedoption = minimumdamage_dropdown;
                            minimumdamage_array_opened = !minimumdamage_array_opened;
                        }
                    }
                }
            }
            if (create_group("other", sx + 230, sy, 197)) {
                ax = sx + 250;
                other_forcedoubletap = create_checkbox("force doubletap", ax, sy + 20, other_forcedoubletap);
                other_noscopedistance = create_checkbox("noscope on key", ax, sy + 40, other_noscopedistance);
                ay = sy + 40;
                if (other_noscopedistance) {
                    other_noscope_keybind = create_keybind("noscope key", ax, sy + 55, other_noscope_keybind);
                }
            }
        }
    }

    if (legit_triggerbot_hitchance && Input.IsKeyPressed(legit_triggerbot_hitchance_keybind)) {
        UI.SetValue("Legit", "GENERAL", "Triggerbot", "Hitchance", legit_triggerbot_hitchance_value[0]);
    } else {
        if (legit_triggerbot_hitchance)
            UI.SetValue("Legit", "GENERAL", "Triggerbot", "Hitchance", legit_triggerbot_hitchance_resetvalue[0]);
    }

    if (other_noscopedistance && Input.IsKeyPressed(other_noscope_keybind)) {
        if (UI.GetValue("Rage", "GENERAL", "General", "Auto scope"))
            UI.SetValue("Rage", "GENERAL", "General", "Auto scope", false);
    } else {
        if (other_noscopedistance)
            UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true);
    }

    if (minimumdamage_enable && Input.IsKeyPressed(minimumdamage_keybind)) {
        var weapon = minimumdamage_array_selectedoption;
        if (weapon == 0)
            UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", minimumdamage_override_value_autosniper[0]);
        if (weapon == 1)
            UI.SetValue("Rage", "SCOUT", "Targeting", "Minimum damage", minimumdamage_override_value_scout[0]);
        if (weapon == 2)
            UI.SetValue("Rage", "AWP", "Targeting", "Minimum damage", minimumdamage_override_value_awp[0]);
        if (weapon == 3)
            UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", minimumdamage_override_value_heavypistols[0]);
    } else {
        if (minimumdamage_enable && !Input.IsKeyPressed(minimumdamage_keybind)) {
            if (UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage") != minimumdamage_default_value_autosniper[0])
                UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", minimumdamage_default_value_autosniper[0]);
            if (UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage") != minimumdamage_default_value_scout[0])
                UI.SetValue("Rage", "SCOUT", "Targeting", "Minimum damage", minimumdamage_default_value_scout[0]);
            if (UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage") != minimumdamage_default_value_awp[0])
                UI.SetValue("Rage", "AWP", "Targeting", "Minimum damage", minimumdamage_default_value_awp[0]);
            if (UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage") != minimumdamage_default_value_heavypistols[0])
                UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", minimumdamage_default_value_heavypistols[0]);
        }
    }

    if (visuals_informationbox)
        create_informationbox(visuals_informationbox_x[0], visuals_informationbox_y[0]);
    if (fakelag_step)
        fakelagStep(fakelag_step_delay[0] / 1000);


    drawWatermark();
}

function create_informationbox(x, y) {
    create_menu(x, y, 230, 117);
    create_string(x + 230 / 2, y + 17, 1, "Oben", [255, 255, 255, 255]);
    var chokedCmds = 0;
    var charge = 0;
    if (Entity.IsAlive(Entity.GetLocalPlayer())) {
        var chokedCmds = Globals.ChokedCommands();
        var charge = Exploit.GetCharge();
    }
    create_string(x + 40, y + 50, 0, "choke", [255, 255, 255, 255]);
    Render.FilledRect(x + 89, y + 56, 102, 2, [51, 51, 51, 255]);
    Render.FilledRect(x + 90, y + 55, 100, 4, [51, 51, 51, 255]);
    Render.GradientRect(x + 89, y + 56, chokedCmds * 7.14 + 2, 2, 0, col_top, col_bottom);
    Render.GradientRect(x + 90, y + 55, chokedCmds * 7.14, 4, 0, col_top, col_bottom);
    create_string(x + 40, y + 70, 0, "charge", [255, 255, 255, 255]);
    Render.FilledRect(x + 89, y + 76, 102, 2, [51, 51, 51, 255]);
    Render.FilledRect(x + 90, y + 75, 100, 4, [51, 51, 51, 255]);
    Render.GradientRect(x + 89, y + 76, charge * 100 + 2, 2, 0, col_top, col_bottom);
    Render.GradientRect(x + 90, y + 75, charge * 100, 4, 0, col_top, col_bottom);
}

var steptime = Globals.Realtime();

function fakelagStep(delay) {
    var fakelag = UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");
    var newfakelag = fakelag + 1;
    if (Globals.Realtime() > steptime + delay && fakelag < 14) {
        steptime = Globals.Realtime();
        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", newfakelag);
    }

    if (fakelag == 14 && Globals.Realtime() > steptime + delay) {
        steptime = Globals.Realtime();
        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 0);
    }
}

function drawWatermark() {
    var size1 = get_tsize("[");
    var size2 = get_tsize("Oben");
    create_string(5, 5, 0, "[", [255, 255, 255, 255]);
    create_string(5 + (size1 * 2), 5, 0, "Oben", col_top);
    create_string(5 + (size1 * 2) + (size2 * 2), 5, 0, "]", [255, 255, 255, 255]);
    create_string(44, 5, 0, "PapaPolags#5431", [255, 255, 255, 255]);
}

function weaponFired() {
    var shot_player = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var localplayer = Entity.GetLocalPlayer();
    if (shot_player == localplayer && invert_onshot) {
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
    }
}

function playerHurt() {
    var hurt_player = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var localplayer = Entity.GetLocalPlayer();
    if (hurt_player == localplayer && invert_onhit) {
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
    }
}

function ragebotFunction() {

    if (e_onpeek && IsPeeking(Entity.GetLocalPlayer())) {
        var buttons = UserCMD.GetButtons();
        UserCMD.SetButtons(buttons | (1 << 5));
    }

    if (other_forcedoubletap) {
        var reg = Exploit.GetCharge();
        if (reg < 1)
            Ragebot.IgnoreTarget();
    }
}

function clantag() {
    if (!branding_clantag) return;

    var now = Math.round(Globals.Curtime() * 3);

    if (now === last_time)
        return;

    last_time = now;
    index = Math.round(now % tag.length);
    Local.SetClanTag(tag[index]);
}

Cheat.RegisterCallback("Draw", "main");
Cheat.RegisterCallback("weapon_fire", "weaponFired");
Cheat.RegisterCallback("player_hurt", "playerHurt");
Cheat.RegisterCallback("CreateMove", "ragebotFunction");
Cheat.RegisterCallback("FrameStageNotify", "clantag");