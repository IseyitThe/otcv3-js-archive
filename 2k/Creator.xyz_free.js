UI.AddLabel('|----------------------------------------|');
UI.AddLabel('|              indicator gs                  |');
UI.AddLabel('|           By : Creative#3802            |');
UI.AddLabel('|            Edit by Creative               |');

UI.AddLabel("             Aimbot logging");
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
		Cheat.PrintColor([89, 119, 239, 255], "[skeet.idb] ");
    if (hittype == "Hit ") {
        if (UI.GetValue("Script items", "Enable chat logging")) {
            Cheat.PrintChat(" \x08[\x0cskeet.idb\x08] [\x0c"+shots.toString()+"\x08] "+hittype+name+"'s \x10"+HitgroupName(hitbox)+"\x08 for \x07"+target_damage.toString()+"\x08 ("+target_health.toString()+" remaining) aimed=\x10"+hitboxName+"\x08("+predicthc.toString()+"%%) safety=\x03"+safety+"\x08 (\x10"+flags+"\x08) (\x10"+simtime+"\x08:\x10"+exploit+"\x08)\n");
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
	Cheat.PrintColor([89, 119, 239, 255], "[skeet.idb] ");
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

        Cheat.PrintColor([89, 119, 239, 255], "[skeet.idb] ");
        Cheat.Print("["+shots.toString()+"] "+"Missed "+Entity.GetName(target)+"'s "+hitboxName+"("+predicthc.toString()+"%%) due to "+reason+", safety="+issafe+" ("+flags+") ("+simtime+":"+exploit+")\n");
            logs.push("["+shots.toString()+"] "+"Missed "+Entity.GetName(target)+"'s "+hitboxName+"("+predicthc.toString()+"%%) due to "+reason+", safety="+issafe+" ("+flags+") ("+simtime+":"+exploit+")");

            if (UI.GetValue("Script items", "Enable chat logging")) {
                Cheat.PrintChat(" \x08[\x0cskeet.idb\x08] [\x0c"+shots.toString()+"\x08] "+"\x08Missed "+Entity.GetName(target)+"'s \x10"+hitboxName+"\x08("+predicthc.toString()+"%%) due to \x07"+reason+"\x08, safety=\x03"+issafe+"\x08 (\x10"+flags+"\x08) (\x10"+simtime+"\x08:\x10"+exploit+"\x08)");
            }
        logsct.push(Globals.Curtime());
    		logsalpha.push(255);
        if (shots == 99)
          shots = 0;
        else
          shots++;
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

UI.AddLabel(" == custom aspect ratio ==");
UI.AddSliderFloat("Aspect Ratio",1.0,2.0); // you can customize limites here (1.0 - lowest, 2.0 - highest)
UI.AddLabel("1.33 is 4:3                  1.77 is 16:9");
UI.AddCheckbox("4:3 mode");
UI.AddCheckbox("16:9 mode");
UI.AddLabel("======================");

var aspect_cache = 0;

function aspect(){
	var aspect_slider = UI.GetValue("Aspect Ratio");
	var cht = UI.GetValue("4:3 mode");
	var shd = UI.GetValue("16:9 mode");
	
	
	if (cht != 0) {
		UI.SetValue("Aspect Ratio", 1.33);
		UI.SetValue("4:3 mode", 0);
	}
	
	if (shd != 0) {
		UI.SetValue("Aspect Ratio", 1.77);
		UI.SetValue("16:9 mode", 0);
	}
	
	if (aspect_cache != aspect_slider) {
		aspect_cache = aspect_slider;
		UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Hidden cvars", 1);
		Global.ExecuteCommand("r_aspectratio " + aspect_slider);
	}
}

Cheat.RegisterCallback("CreateMove","aspect");

function render_arc(x, y, _0x42b4x6, _0x42b4x7, _0x42b4x8, _0x42b4x9, _0x42b4xa, _0x42b4xb) {
    while (360 % _0x42b4xa != 0) {
        _0x42b4xa++
    };
    _0x42b4xa = 360 / _0x42b4xa;
    for (var _0x42b4xc = _0x42b4x8; _0x42b4xc < _0x42b4x8 + _0x42b4x9; _0x42b4xc = _0x42b4xc + _0x42b4xa) {
        var _0x42b4xd = _0x42b4xc * Math['PI'] / 180;
        var _0x42b4xe = (_0x42b4xc + _0x42b4xa) * Math['PI'] / 180;
        var _0x42b4xf = Math['cos'](_0x42b4xd);
        var _0x42b4x10 = Math['sin'](_0x42b4xd);
        var _0x42b4x11 = Math['cos'](_0x42b4xe);
        var _0x42b4x12 = Math['sin'](_0x42b4xe);
        var _0x42b4x13 = x + _0x42b4xf * _0x42b4x6;
        var _0x42b4x14 = y + _0x42b4x10 * _0x42b4x6;
        var _0x42b4x15 = x + _0x42b4x11 * _0x42b4x6;
        var _0x42b4x16 = y + _0x42b4x12 * _0x42b4x6;
        var _0x42b4x17 = x + _0x42b4xf * _0x42b4x7;
        var _0x42b4x18 = y + _0x42b4x10 * _0x42b4x7;
        var _0x42b4x19 = x + _0x42b4x11 * _0x42b4x7;
        var _0x42b4x1a = y + _0x42b4x12 * _0x42b4x7;
        Render.Polygon([
            [_0x42b4x13, _0x42b4x14],
            [_0x42b4x15, _0x42b4x16],
            [_0x42b4x17, _0x42b4x18]
        ], _0x42b4xb);
        Render.Polygon([
            [_0x42b4x17, _0x42b4x18],
            [_0x42b4x15, _0x42b4x16],
            [_0x42b4x19, _0x42b4x1a]
        ], _0x42b4xb)
    }
}
Render['GradientSkeet'] = function (x, y, _0x42b4x1b, _0x42b4x1c, _0x42b4x1d, _0x42b4x1e, _0x42b4x1f) {
    Render.GradientRect(x, y, _0x42b4x1b / 4, _0x42b4x1c, _0x42b4x1d, _0x42b4x1f, _0x42b4x1e);
    Render.GradientRect(x + (_0x42b4x1b / 4), y, _0x42b4x1b / 4, _0x42b4x1c, _0x42b4x1d, _0x42b4x1e, _0x42b4x1f)
};

function calcDist(_0x42b4x21, _0x42b4x22) {
    var _0x42b4x23 = _0x42b4x21[0];
    var _0x42b4x24 = _0x42b4x21[1];
    var _0x42b4x25 = _0x42b4x21[2];
    var _0x42b4x26 = _0x42b4x22[0];
    var _0x42b4x27 = _0x42b4x22[1];
    var _0x42b4x28 = _0x42b4x22[2];
    var _0x42b4x29 = _0x42b4x23 - _0x42b4x26;
    var _0x42b4x2a = _0x42b4x24 - _0x42b4x27;
    var _0x42b4x2b = _0x42b4x25 - _0x42b4x28;
    return Math['sqrt'](_0x42b4x29 * _0x42b4x29 + _0x42b4x2a * _0x42b4x2a + _0x42b4x2b * _0x42b4x2b)
}
var x = Render.GetScreenSize()[0] / 115;
var y = Render.GetScreenSize()[1] / 1.13;

function getSite(_0x42b4x2d) {
    bombsite = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_nBombSite');
    if (bombsite == 0) {
        return 'A - '
    } else {
        return 'B - '
    }
}
function getVelocity(_0x42b4x2f) {
    players = Entity.GetPlayers();
    for (i = 0; i < players['length']; i++) {;
    }; {
        var _0x42b4x30 = Entity.GetProp(_0x42b4x2f, 'CBasePlayer', 'm_vecVelocity[0]');
        var _0x42b4x31 = Math['sqrt'](_0x42b4x30[0] * _0x42b4x30[0] + _0x42b4x30[1] * _0x42b4x30[1])
    }
    return _0x42b4x31
}
Render['Arc'] = function (x, y, _0x42b4x32, _0x42b4x33, _0x42b4x34, _0x42b4x35, _0x42b4x1e) {
    for (var _0x42b4xc = _0x42b4x34; _0x42b4xc < _0x42b4x34 + _0x42b4x35; _0x42b4xc++) {
        const _0x42b4xd = _0x42b4xc * Math['PI'] / 180;
        Render.Line(x + Math['cos'](_0x42b4xd) * _0x42b4x32, y + Math['sin'](_0x42b4xd) * _0x42b4x32, x + Math['cos'](_0x42b4xd) * _0x42b4x33, y + Math['sin'](_0x42b4xd) * _0x42b4x33, _0x42b4x1e)
    }
};
var planting = false;
var fill = 0;
var isbomb = 0;
var cur1 = Globals.Curtime();
var bombsiteonplant = '';
var on_plant_time;

function bomb_exploded() {
    isbomb = 0;
    on_plant_time = 0;
    fill = 0;
    planting = false
}
function abs2() {
    on_plant_time = Globals.Curtime();
    bombsite = Event.GetInt('site');
    if (bombsite % 2 == 1) {
        bombsiteonplant = 'Bombsite B'
    } else {
        bombsiteonplant = 'Bombsite A'
    };
    isbomb = 35;
    planting = true
}
function abs1() {
    isbomb = 0;
    on_plant_time = 0;
    fill = 0;
    planting = false
}
function abs3() {
    isbomb = 0;
    on_plant_time = 0;
    fill = 0;
    planting = false
}
function on_round_start() {
    on_plant_time = 0;
    fill = 0;
    planting = false;
    isbomb = 0
}
function bomb_planted() {
    on_plant_time = 0;
    isbomb = 70;
    fill = 0;
    planting = false
}
var bombtick = false;
var screen_size = Global.GetScreenSize();
UI.AddCheckbox('Under Crosshair');
UI.AddHotkey('Left Hotkey');
UI.AddHotkey('Right Hotkey');
UI.AddHotkey('Backwards Hotkey');
UI.AddHotkey('Forward Hotkey');
UI.AddColorPicker('Arrows color');
UI.AddColorPicker('Selected arrow color');
var pingiunas = UI.AddHotkey('Ping spike');
var isLeftActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Left Hotkey');
var isRightActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Right Hotkey');
var isBackwardsActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Backwards Hotkey');
var isForwardActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Forward Hotkey');
var isInverted;
var drawLeft = 0;
drawHideReal = 1;
var drawRight = 0,
    drawBack = 0;
var leftWasPressed = false;
var rightWasPressed = false;
var backWasPressed = false;
var upWasPressed = false;

function HSVtoRGB(_0x42b4x1c, _0x42b4x34, _0x42b4x52) {
    var _0x42b4x53, _0x42b4x54, _0x42b4x55, _0x42b4xc, _0x42b4x56, _0x42b4x57, _0x42b4x58, _0x42b4x59;
    _0x42b4xc = Math['floor'](_0x42b4x1c * 6);
    _0x42b4x56 = _0x42b4x1c * 6 - _0x42b4xc;
    _0x42b4x57 = _0x42b4x52 * (1 - _0x42b4x34);
    _0x42b4x58 = _0x42b4x52 * (1 - _0x42b4x56 * _0x42b4x34);
    _0x42b4x59 = _0x42b4x52 * (1 - (1 - _0x42b4x56) * _0x42b4x34);
    switch (_0x42b4xc % 4) {
    case 0:
        _0x42b4x53 = _0x42b4x52,
        _0x42b4x54 = _0x42b4x59,
        _0x42b4x55 = _0x42b4x57;
        break;
    case 1:
        _0x42b4x53 = _0x42b4x58,
        _0x42b4x54 = _0x42b4x52,
        _0x42b4x55 = _0x42b4x57;
        break;
    case 2:
        _0x42b4x53 = _0x42b4x57,
        _0x42b4x54 = _0x42b4x52,
        _0x42b4x55 = _0x42b4x59;
        break;
    case 3:
        _0x42b4x53 = _0x42b4x57,
        _0x42b4x54 = _0x42b4x58,
        _0x42b4x55 = _0x42b4x52;
        break;
    case 4:
        _0x42b4x53 = _0x42b4x59,
        _0x42b4x54 = _0x42b4x57,
        _0x42b4x55 = _0x42b4x52;
        break;
    case 5:
        _0x42b4x53 = _0x42b4x52,
        _0x42b4x54 = _0x42b4x57,
        _0x42b4x55 = _0x42b4x58;
        break
    };
    return {
        r: Math['round'](_0x42b4x53 * 255),
        g: Math['round'](_0x42b4x54 * 255),
        b: Math['round'](_0x42b4x55 * 255)
    }
}
var screen_size = Global.GetScreenSize();
var other_weapons = ['knife', 'knife_t', 'knife_karambit', 'knife_m9_bayonet', 'knife_survival_bowie', 'knife_butterfly', 'knife_flip', 'knife_push', 'knife_tactical', 'knife_falchion', 'knife_gut', 'knife_ursus', 'knife_gypsy_jackknife', 'knife_stiletto', 'knife_widowmaker', 'knife_css', 'knife_cord', 'knife_canis', 'knife_outdoor', 'knife_skeleton', 'bayonet', 'hegrenade', 'smokegrenade', 'molotov', 'incgrenade', 'flashbang', 'decoy', 'taser'];

function is_gun(_0x42b4x5c) {
    for (var _0x42b4xc = 0; _0x42b4xc < other_weapons['length']; _0x42b4xc++) {
        if (_0x42b4x5c == 'weapon_' + other_weapons[_0x42b4xc]) {
            return false
        }
    };
    return true
}
function drawString() {
    arrows_color = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Arrows color');
    s_arrows_color = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Selected arrow color');
    crack_font = Render.AddFont('Verdana', 8, 100);
    arrows_red = arrows_color[0];
    arrows_green = arrows_color[1];
    arrows_blue = arrows_color[2];
    arrows_alpha = arrows_color[3];
    selected_red = s_arrows_color[0];
    selected_green = s_arrows_color[1];
    selected_blue = s_arrows_color[2];
    selected_alpha = Math['sin'](Math['abs'](-Math['PI'] + (Globals.Curtime() * (1 / 0.75)) % (Math['PI'] * 2))) * 255;
    isInverted = UI.IsHotkeyActive('Anti-Aim', 'Inverter');
    fonts = Render.AddFont('Arrows', 49, 400);
    font1 = Render.AddFont('Verdana', 10, 100);
    localplayer_index = Entity.GetLocalPlayer();
    localplayer_alive = Entity.IsAlive(localplayer_index);
    g_Local = Entity.GetLocalPlayer();
    g_Local_weapon = Entity.GetWeapon(g_Local);
    weapon_name = Entity.GetName(g_Local_weapon);
    g_Local_classname = Entity.GetClassName(g_Local_weapon);
    isFD = UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck');
    isDoubletap = UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap');
    DT = 'DT ';
    add_y = 0;
    if (localplayer_alive == true) {
        if (!UI.GetValue('Script items', 'Under Crosshair')) {
            return
        };
        if ((g_Local_classname == 'CKnife' || g_Local_classname == 'CWeaponSSG08' || g_Local_classname == 'CWeaponAWP' || weapon_name == 'r8 revolver' || g_Local_classname == 'CHEGrenade' || g_Local_classname == 'CMolotovGrenade' || g_Local_classname == 'CIncendiaryGrenade' || g_Local_classname == 'CFlashbang' || g_Local_classname == 'CSmokeGrenade' || g_Local_classname == 'CDecoyGrenade' || g_Local_classname == 'CWeaponTaser' || g_Local_classname == 'CC4')) {
            if (isFD) {
                DT = DT + '(fakeduck)'
            } else {
                DT = DT + '(active weapon)'
            };
            is_DT = false
        } else {
            DT = isFD ? 'DT (fakeduck)' : 'DT ';
            is_DT = !isFD & isDoubletap
        };
        delta = (Exploit.GetCharge() * 60);
        UI.SetValue('Rage', 'Exploits', 'Doubletap', is_DT);
        var _0x42b4x5e;
        if (isDoubletap) {
            _0x42b4x5e = 12;
            if (is_DT) {
                Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, drawHideReal ? Render.GetScreenSize()[1] / 2 + 26 : Render.GetScreenSize()[1] / 2 + 14, 0, DT, Exploit.GetCharge() == 1 ? [0, 0, 0, 255] : [0, 0, 0, selected_alpha], crack_font);
                Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, drawHideReal ? Render.GetScreenSize()[1] / 2 + 25 : Render.GetScreenSize()[1] / 2 + 13, 0, DT, Exploit.GetCharge() == 1 ? [0, 255, 0, 255] : [255, 0, 0, selected_alpha], crack_font)
            } else {
                Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, drawHideReal ? Render.GetScreenSize()[1] / 2 + 26 : Render.GetScreenSize()[1] / 2 + 14, 0, DT, [0, 0, 0, selected_alpha], crack_font);
                Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, drawHideReal ? Render.GetScreenSize()[1] / 2 + 25 : Render.GetScreenSize()[1] / 2 + 13, 0, DT, [255, 0, 0, selected_alpha], crack_font)
            }
        } else {
            _0x42b4x5e = 0
        };
        if (drawHideReal) {
            Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, Render.GetScreenSize()[1] / 2 + 14, 0, 'DYNAMIC', [0, 0, 0, 255], crack_font);
            Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, Render.GetScreenSize()[1] / 2 + 13, 0, 'DYNAMIC', [135, 147, 255, 255], crack_font)
        };
        if (is_gun(weapon_name)) {
            Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, drawHideReal ? Render.GetScreenSize()[1] / 2 + 26 + _0x42b4x5e : Render.GetScreenSize()[1] / 2 + 14 + _0x42b4x5e, 0, 'PREDICTION', [0, 0, 0, 255], crack_font);
            Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, drawHideReal ? Render.GetScreenSize()[1] / 2 + 25 + _0x42b4x5e : Render.GetScreenSize()[1] / 2 + 13 + _0x42b4x5e, 0, 'PREDICTION', [132, 0, 255, 255], crack_font)
        };
        Render.StringCustom(screen_size[0] / 2 - 40, screen_size[1] / 2 - 15 + 1, 1, '<', [0, 0, 0, arrows_alpha], Render.AddFont('Verdana', 15, 900));
        Render.StringCustom(screen_size[0] / 2 + 45, screen_size[1] / 2 - 15 + 1, 1, '>', [0, 0, 0, arrows_alpha], Render.AddFont('Verdana', 15, 900));
        Render.StringCustom(screen_size[0] / 2 - 40, screen_size[1] / 2 - 15, 1, '<', arrows_color, Render.AddFont('Verdana', 15, 900));
        Render.StringCustom(screen_size[0] / 2 + 45, screen_size[1] / 2 - 15, 1, '>', arrows_color, Render.AddFont('Verdana', 15, 900));
        Render.StringCustom(screen_size[0] / 2 - 40, screen_size[1] / 2 - 15, 1, '<', drawLeft ? [selected_red, selected_green, selected_blue, 255] : arrows_color, Render.AddFont('Verdana', 15, 900));
        Render.StringCustom(screen_size[0] / 2 + 45, screen_size[1] / 2 - 15, 1, '>', drawRight ? [selected_red, selected_green, selected_blue, 255] : arrows_color, Render.AddFont('Verdana', 15, 900))
    }
}
var Inair = function () {
    if (Entity.GetProp(Entity.GetLocalPlayer(), 'CBasePlayer', 'm_hGroundEntity')) {
        return true
    } else {
        return false
    }
};

function weapon_fire1() {
    shotsfired++
}
var misses = 0;
var shotsfired = 0;
var shotshurt = 0;

function player_hurt() {
    if (Entity.GetEntityFromUserID(Event.GetInt('attacker')) == Entity.GetLocalPlayer()) {
        shotshurt++
    }
}
Global.RegisterCallback('ragebot_fire', 'weapon_fire1');
Cheat.RegisterCallback('player_hurt', 'player_hurt');

const menu = UI.AddMultiDropdown( "Items", [ "Hotkeys", "Watermark", "DT indicator", "Fake indicator" ] );

const menu_value = UI.GetValue.apply(null, menu);

//DT

function get_icon(a) {
    var letter = ""
    switch (a) {
        case "desert eagle":
            letter = "a"
            break
        case "dual berettas":
            letter = "b"
            break
        case "five seven":
            letter = "c"
            break
        case "glock 18":
            letter = "d"
            break
        case "ak 47":
            letter = "e"
            break
        case "aug":
            letter = "f"
            break
        case "awp":
            letter = "g"
            break
        case "famas":
            letter = "h"
            break
        case "m249":
            letter = "i"
            break
        case "g3sg1":
            letter = "j"
            break
        case "galil ar":
            letter = "k"
            break
        case "m4a4":
            letter = "l"
            break
        case "m4a1 s":
            letter = "m"
            break
        case "mac 10":
            letter = "n"
            break
        case "p2000":
            letter = "o"
            break
        case "mp5 sd":
            letter = "p"
            break
        case "ump 45":
            letter = "q"
            break
        case "xm1014":
            letter = "r"
            break
        case "pp bizon":
            letter = "s"
            break
        case "mag 7":
            letter = "t"
            break
        case "negev":
            letter = "u"
            break
        case "sawed off":
            letter = "v"
            break
        case "tec 9":
            letter = "w"
            break
        case "zeus x27":
            letter = "x"
            break
        case "p250":
            letter = "y"
            break
        case "mp7":
            letter = "z"
            break
        case "mp9":
            letter = "A"
            break
        case "nova":
            letter = "B"
            break
        case "p90":
            letter = "C"
            break
        case "scar 20":
            letter = "D"
            break
        case "sg 553":
            letter = "E"
            break
        case "ssg 08":
            letter = "F"
            break
        case "knife":
            letter = "G"
            break
        case "flashbang":
            letter = "H"
            break
        case "high explosive grenade":
            letter = "I"
            break
        case "smoke grenade":
            letter = "J"
            break
        case "molotov":
            letter = "K"
            break
        case "decoy grenade":
            letter = "L"
            break
        case "incendiary grenade":
            letter = "M"
            break
        case "c4 explosive":
            letter = "N"
            break
        case "usp s":
            letter = "P"
            break
        case "cz75 auto":
            letter = "Q"
            break
        case "r8 revolver":
            letter = "R"
            break
        case "bayonet":
            letter = "V"
            break
        case "flip knife":
            letter = "W"
            break
        case "gut knife":
            letter = "X"
            break
        case "karambit":
            letter = "Y"
            break
        case "m9 bayonet":
            letter = "Z"
            break
        case "falchion knife":
            letter = "1"
            break
        case "bowie knife":
            letter = "2"
            break
        case "butterfly knife":
            letter = "3"
            break
        case "shadow daggers":
            letter = "4"
            break
        case "ursus knife":
            letter = "5"
            break
        case "navaja knife":
            letter = "6"
            break
        case "stiletto knife":
            letter = "7"
            break
        case "skeleton knife":
            letter = "8"
            break
        case "huntsman knife":
            letter = "0"
            break
        case "talon knife":
            letter = "8"
            break
        case "classic knife":
            letter = "25"
            break
        case "paracord knife":
            letter = "Z"
            break
        case "survival knife":
            letter = "Z"
            break
        case "nomad knife":
            letter = "Z"
            break
        default:
            letter = ""
            break
    }
    return letter
}

if(menu_value & (1 << 2)) {
UI.AddLabel("                   Tickbase            ");
UI.AddSliderInt("Tickbase_x", 0, Global.GetScreenSize()[0]);
UI.AddSliderInt("Tickbase_y", 0, Global.GetScreenSize()[1]);
}

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}
var fa = 0;
var sa = 0;

function main_dt() {

    if (!World.GetServerString()) return;

    const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tickbase_x"),
        y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tickbase_y");

    localplayer_index = Entity.GetLocalPlayer();
    localplayer_weapon = Entity.GetWeapon(localplayer_index);
    weapon_name = Entity.GetName(localplayer_weapon);
    g_Local_classname = Entity.GetClassName(localplayer_weapon);
    var nextattack = Entity.GetProp(localplayer_weapon, "CBaseCombatWeapon", "m_flNextPrimaryAttack");
    var CanShoot = false;
    if (nextattack <= Globals.Curtime()) {
        CanShoot = true;
    }

    var frames = 8 * Globals.Frametime();

    var font = Render.AddFont("Verdana", 7, 100);
    var fontbullet = Render.AddFont("bullet", 18, 100);
    if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
        var text = "DT [v2.8.2] | tickbase(v): 17";
        var color = [89, 119, 239, 255];
    } else if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
        var text = "DT [v2.8.2] | tickbase(v): 7";
        var color = [89, 119, 239, 255];
    } else {
        var text = "DT [v2.8.2] | tickbase(v): 0";
        var color = [89, 89, 89, 255];
    }
    var w = Render.TextSizeCustom(text, font)[0] + 8;

    Render.FilledRect(x, y, w, 2, color);
    Render.FilledRect(x, y + 2, w, 18, [17, 17, 17, 255]);
    Render.StringCustom(x + 5, y + 5, 0, text, [0, 0, 0, 180], font);
    Render.StringCustom(x + 4, y + 4, 0, text, [255, 255, 255, 255], font);

    Render.String(x + 4, y + 22, 0, get_icon(weapon_name), [255, 255, 255, 255], 5);
    if ((g_Local_classname == "CKnife" || g_Local_classname == "CWeaponSSG08" || g_Local_classname == "CWeaponAWP" || weapon_name == "r8 revolver" || g_Local_classname == "CHEGrenade" || g_Local_classname == "CMolotovGrenade" || g_Local_classname == "CIncendiaryGrenade" || g_Local_classname == "CFlashbang" || g_Local_classname == "CSmokeGrenade" || g_Local_classname == "CDecoyGrenade" || g_Local_classname == "CWeaponTaser" || g_Local_classname == "CC4")) {
        //return
    } else {
        if (CanShoot) {
            fa = Math.min(fa + frames, 1);
            Render.StringCustom(x + 10 + Render.TextSize(get_icon(weapon_name), 5)[0], y + 18, 0, "A", [255, 255, 255, fa * 255], fontbullet);
        } else {
            fa = 0;
        }
        if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            sa = Math.min(sa + frames, 1);
            Render.StringCustom(x + 30 + Render.TextSize(get_icon(weapon_name), 5)[0], y + 18, 0, "A", [255, 255, 255, sa * 255], fontbullet);
        } else {
            sa = 0;
        }
    }


    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x, y, x + w, y + 30)) {
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Tickbase_x", mouse_pos[0] - w / 2);
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Tickbase_y", mouse_pos[1] - 20);
        }
    }
    
}

if(menu_value & (1 << 2)) {
Global.RegisterCallback("Draw", "main_dt")
}

//Hotkeys

if(menu_value & (1 << 0)) {
UI.AddLabel("                   Hotkeys            ");
const x1 = UI.AddSliderInt("Hotkeys_x", 0, Global.GetScreenSize()[0]);
const y1 = UI.AddSliderInt("Hotkeys_y", 0, Global.GetScreenSize()[1]);
}

UI.AddColorPicker("Hotkeys");
var colorhotkeys = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Hotkeys");
if (colorhotkeys[3] == 0) {
    UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Hotkeys", [89, 119, 239, 3]);
}


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

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

function main_hotkeys() {
        if (!World.GetServerString()) return;
        const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_x"),
            y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_y");
    
        var font = Render.AddFont("Verdana", 7, 100);
        var frames = 8 * Globals.Frametime();
        var width = 75;
        var maxwidth = 0;
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            swalpha = Math.min(swalpha + frames, 1);
        } else {
            swalpha = swalpha - frames;
            if (swalpha < 0) swalpha = 0;
            if (swalpha == 0) {
                h.splice(h.indexOf("Slow walk"));
            }
        }

        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
            fdalpha = Math.min(fdalpha + frames, 1);
        } else {
            fdalpha = fdalpha - frames;
            if (fdalpha < 0) fdalpha = 0;
            if (fdalpha == 0) {
                h.splice(h.indexOf("Duck peek assist"));
            }
        }

        if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
            apalpha = Math.min(apalpha + frames, 1);
        } else {
            apalpha = apalpha - frames;
            if (apalpha < 0) apalpha = 0;
            if (apalpha == 0) {
                h.splice(h.indexOf("Auto peek"));
            }
        }

        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            aialpha = Math.min(aialpha + frames, 1);
        } else {
            aialpha = aialpha - frames;
            if (aialpha < 0) aialpha = 0;
            if (aialpha == 0) {
                h.splice(h.indexOf("Anti-aim inverter"));
            }
        }

        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            aialpha = Math.min(aialpha + frames, 1);
        } else {
            aialpha = aialpha - frames;
            if (aialpha < 0) aialpha = 0;
            if (aialpha == 0) {
                h.splice(h.indexOf("Inverter"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
            spalpha = Math.min(spalpha + frames, 1);
        } else {
            spalpha = spalpha - frames;
            if (spalpha < 0) spalpha = 0;
            if (spalpha == 0) {
                h.splice(h.indexOf("Safe point override"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
            fbalpha = Math.min(fbalpha + frames, 1);
        } else {
            fbalpha = fbalpha - frames;
            if (fbalpha < 0) fbalpha = 0;
            if (fbalpha == 0) {
                h.splice(h.indexOf("Force body aim"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            dtalpha = Math.min(dtalpha + frames, 1);
        } else {
            dtalpha = dtalpha - frames;
            if (dtalpha < 0) dtalpha = 0;
            if (dtalpha == 0) {
                h.splice(h.indexOf("Double tap"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
            hsalpha = Math.min(hsalpha + frames, 1);
        } else {
            hsalpha = hsalpha - frames;
            if (hsalpha < 0) hsalpha = 0;
            if (hsalpha == 0) {
                h.splice(h.indexOf("Hide shots"));
            }
        }

        if (UI.IsHotkeyActive("Script items", "Override minimum dmg key")) {
            doalpha = Math.min(doalpha + frames, 1);
        } else {
            doalpha = doalpha - frames;
            if (doalpha < 0) doalpha = 0;
            if (doalpha == 0) {
                h.splice(h.indexOf("Damage override"));
            }
        }

        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            if (h.indexOf("Slow walk") == -1)
                h.push("Slow walk")
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
            if (h.indexOf("Duck peek assist") == -1)
                h.push("Duck peek assist")
        }
        if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
            if (h.indexOf("Auto peek") == -1)
                h.push("Auto peek")
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            if (h.indexOf("Anti-aim inverter") == -1)
                h.push("Anti-aim inverter")
        }
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
            if (h.indexOf("Safe point override") == -1)
                h.push("Safe point override")
        }
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
            if (h.indexOf("Force body aim") == -1)
                h.push("Force body aim")
        }
        if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            if (h.indexOf("Double tap") == -1)
                h.push("Double tap")
        }
        if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
            if (h.indexOf("Hide shots") == -1)
                h.push("Hide shots")
        }
        if (UI.IsHotkeyActive("Script items", "Minimum damage override")) {
            if (h.indexOf("Damage override") == -1)
                h.push("Damage override")
        }

        if (h.length > 0) {
            alpha = Math.min(alpha + frames, 1);
        } else {
            alpha = alpha - frames;
            if (alpha < 0) alpha = 0;
        }
        for (i = 0; i < h.length; i++) {
            if (Render.TextSizeCustom(h[i], font)[0] > maxwidth) {
                maxwidth = Render.TextSizeCustom(h[i], font)[0];
            }
        }
        if (maxwidth == 0) maxwidth = 50;
        width = width + maxwidth;
        if (alpha > 0) {
                Render.FilledRect(x, y + 3, width, 2, [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], alpha * 255]);
                Render.FilledRect(x, y + 5, width, 18, [17, 17, 17, alpha * 255]);
                Render.StringCustom(x + width / 2 - (Render.TextSizeCustom("keybinds", font)[0] / 2) + 2, y + 9, 0, "keybinds", [0, 0, 0, alpha * 255 / 1.3], font);
                Render.StringCustom(x + width / 2 - (Render.TextSizeCustom("keybinds", font)[0] / 2) + 1, y + 8, 0, "keybinds", [255, 255, 255, alpha * 255], font);
                //Render.FilledRect(x, y + 23, width, 18 * h.length, [17, 17, 17, Math.min(colorhotkeys[3], alpha * 255)]);
                for (i = 0; i < h.length; i++) {
                    switch (h[i]) {
                        case 'Slow walk':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(swalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, swalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, swalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, swalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, swalpha * 255], font);
                            break;
                        case 'Duck peek assist':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(fdalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, fdalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, fdalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, fdalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, fdalpha * 255], font);
                            break;
                        case 'Auto peek':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(apalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, apalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, apalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, apalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, apalpha * 255], font);
                            break;
                        case 'Anti-aim inverter':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(aialpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, aialpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, aialpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, aialpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, aialpha * 255], font);
                            break;
                        case 'Safe point override':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(spalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, spalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, spalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, spalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, spalpha * 255], font);
                            break;
                        case 'Force body aim':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(fbalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, fbalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, fbalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, fbalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, fbalpha * 255], font);
                            break;
                        case 'Double tap':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(dtalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, dtalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, dtalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, dtalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, dtalpha * 255], font);
                            break;
                        case 'Hide shots':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(hsalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, hsalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, hsalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, hsalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, hsalpha * 255], font);
                            break;
                        case 'Damage override':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(doalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, doalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, doalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, doalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, doalpha * 255], font);
                            break;
                    }

                }
        }
        if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
            const mouse_pos = Global.GetCursorPosition();
            if (in_bounds(mouse_pos, x, y, x + width, y + 30)) {
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_x", mouse_pos[0] - width / 2);
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_y", mouse_pos[1] - 20);
            }
        }
}

if(menu_value & (1 << 0)) {
Global.RegisterCallback("Draw", "main_hotkeys")
}

//Anti-aims

if(menu_value & (1 << 3)) {
UI.AddLabel("                   Antiaim            ");
UI.AddSliderInt("Antiaim_x", 0, Global.GetScreenSize()[0]);
UI.AddSliderInt("Antiaim_y", 0, Global.GetScreenSize()[1]);
}

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

function draw_arc(x, y, radius, start_angle, percent, thickness, color) {
        var precision = (2 * Math.PI) / 30;
        var step = Math.PI / 180;
        var inner = radius - thickness;
        var end_angle = (start_angle + percent) * step;
        var start_angle = (start_angle * Math.PI) / 180;

        for (; radius > inner; --radius) {
            for (var angle = start_angle; angle < end_angle; angle += precision) {
                var cx = Math.round(x + radius * Math.cos(angle));
                var cy = Math.round(y + radius * Math.sin(angle));

                var cx2 = Math.round(x + radius * Math.cos(angle + precision));
                var cy2 = Math.round(y + radius * Math.sin(angle + precision));

                Render.Line(cx, cy, cx2, cy2, color);
            }
        }
}

function main_aa() {
    if (!World.GetServerString()) return;

    const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Antiaim_x"),
        y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Antiaim_y");

    var font = Render.AddFont("Verdana", 7, 100);
    var RealYaw = Local.GetRealYaw();
    var FakeYaw = Local.GetFakeYaw();
    var delta = Math.min(Math.abs(RealYaw - FakeYaw) / 2, 60).toFixed(1);
    var safety = Math.min(Math.round(1.7 * Math.abs(delta)), 100);
    if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
        var side = "<";
    } else {
        var side = ">";
    }
    var text = "    FAKE (" + delta.toString() + "  ) | safety: " + safety.toString() + "% | side: " + side;
    var w = Render.TextSizeCustom(text, font)[0] + 8;

    Render.FilledRect(x - w, y, w, 2, [89, 89 + (delta / 2), 89 + (delta / 0.4), 255]);
    Render.FilledRect(x - w, y + 2, w, 18, [17, 17, 17, 255]);
    Render.StringCustom(x + 5 - w, y + 5, 0, text, [0, 0, 0, 180], font);
    Render.StringCustom(x + 4 - w, y + 4, 0, text, [255, 255, 255, 255], font);
    Render.Circle(x + 18 - w + Render.TextSizeCustom("FAKE (" + delta.toString(), font)[0], y + 8, 1, [255, 255, 255, 255]);
    draw_arc(x + 7 - w, y + 10, 5, 0, delta * 6, 2, [89, 119, 239, 255]);
    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x - w, y, x + w, y + 30)) {
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Antiaim_x", mouse_pos[0] + w / 2);
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Antiaim_y", mouse_pos[1] - 20);
        }
    }
}

if(menu_value & (1 << 3)) {
Global.RegisterCallback("Draw", "main_aa");
}

//WATERMARK

if(menu_value & (1 << 1)) {
UI.AddLabel("                 Watermark            ");
UI.AddColorPicker("Watermark");
}
var color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");

if (color[3] == 0)
    UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Watermark", [89, 119, 239, 255]);

function draw() {
    if(!World.GetServerString())
        return;

    var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();
    
    var hours = hours1 <= 9 ? "0"+hours1+":" : hours1+":";
    var minutes = minutes1 <= 9 ? "0" + minutes1+":" : minutes1+":";
    var seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;
    
    var server_tickrate = Globals.Tickrate().toString()
    var ebanaya_hueta = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString() // кто это сделал - контуженный на всю голову ебаный хуесос

    color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");

    var font = Render.AddFont("Verdana", 7, 400);
    var text = "skeet.cc | Creative | delay: " + ebanaya_hueta + "ms | " + server_tickrate + "tick | " + hours + minutes + seconds;
    
    var w = Render.TextSizeCustom(text, font)[0] + 8;
    var x = Global.GetScreenSize()[0];

    x = x - w - 10;

    Render.FilledRect(x, 10, w, 2, [ color[0], color[1], color[2], 255 ]);
    Render.FilledRect(x, 12, w, 18, [ 17, 17, 17, color[3] ]);
    Render.StringCustom(x+4, 10 + 4, 0, text, [ 255, 255, 255, 255 ], font);
}

if(menu_value & (1 << 1)) {
Cheat.RegisterCallback("Draw", "draw");
}

function drawindicators() {
    lp = Entity.GetLocalPlayer();
    velocity = Math['round'](getVelocity(lp)).toString();
    var _0x42b4x66, _0x42b4x67, _0x42b4x68, _0x42b4x69, _0x42b4x6a, _0x42b4x6b;
    font = Render.AddFont('Calibri', 18, 900);
    var _0x42b4x6c = Render.AddFont('Tahoma', 10, 100);
    fake = Math['abs'](Local.GetFakeYaw());
    real = Math['abs'](Local.GetRealYaw());
    if (fake > real) {
        delta = (fake - real) / 2
    } else {
        delta = (real - fake) / 2
    };
    if (drawHideReal) {
        _0x42b4x68 = 35
    } else {
        _0x42b4x68 = 0
    };
    if (UI.IsHotkeyActive('Script items', 'Scout Override')) {
        _0x42b4x67 = 35
    } else {
        _0x42b4x67 = 0
    };
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap')) {
        _0x42b4x69 = 35
    } else {
        _0x42b4x69 = 0
    };
    if (Inair() & velocity > 250) {
        _0x42b4x6b = 35
    } else {
        _0x42b4x6b = 0
    };
    if (UI.IsHotkeyActive('Rage', 'General', 'Force safe point')) {
        _0x42b4x66 = 35
    } else {
        _0x42b4x66 = 0
    };
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots')) {
        _0x42b4x6a = 35
    } else {
        _0x42b4x6a = 0
    };
    if (Entity.IsAlive(Entity.GetLocalPlayer())) {
        if (UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap')) {
            Render.GradientSkeet(7, y - 350 + 70 - _0x42b4x66 - _0x42b4x6b - isbomb, 50, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 70 - _0x42b4x66 - _0x42b4x6b - isbomb, 0, 'DT', [17, 17, 17, 255], font);
            if (Exploit.GetCharge() == 1) {
                Render.StringCustom(x, y - 350 + 70 - _0x42b4x66 - _0x42b4x6b - isbomb, 0, 'DT', [255, 255, 255, 210], font)
            } else {
                Render.StringCustom(x, y - 350 + 70 - _0x42b4x66 - _0x42b4x6b - isbomb, 0, 'DT', [255, 0, 0, 210], font)
            }
        };
        if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck')) {
            Render.GradientSkeet(7, y - 350 + 70 - _0x42b4x66 - _0x42b4x69 - _0x42b4x6b - isbomb, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 70 - _0x42b4x66 - _0x42b4x69 - _0x42b4x6b - isbomb, 0, 'Duck', [17, 17, 17, 210], font);
            Render.StringCustom(x, y - 350 + 70 - _0x42b4x66 - _0x42b4x69 - _0x42b4x6b - isbomb, 0, 'Duck', [255, 255, 255, 210], font)
        };
        if (UI.IsHotkeyActive('Rage', 'General', 'Force safe point')) {
            Render.GradientSkeet(7, y - 350 + 70 - _0x42b4x6b, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 70 - _0x42b4x6b, 0, 'Safe', [17, 17, 17, 210], font);
            Render.StringCustom(x, y - 350 + 70 - _0x42b4x6b, 0, 'Safe', [132, 195, 16, 210], font)
        };
        if (velocity > 295) {
            color1 = 132;
            color2 = 195;
            color3 = 16
        } else {
            color1 = 255;
            color2 = 0;
            color3 = 0
        };
        if (Inair() & velocity > 250) {
            Render.GradientSkeet(7, y - 350 + 70, 50, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 70, 0, 'LC', [17, 17, 17, 210], font);
            Render.StringCustom(x, y - 350 + 70, 0, 'LC', [color1, color2, color3, 210], font)
        };
        if (UI.IsHotkeyActive('Script items', 'Scout Override')) {
            Render.GradientSkeet(7, y - 350 + 105 + _0x42b4x6a, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 105 + _0x42b4x6a, 0, 'min', [17, 17, 17, 210], font);
            Render.StringCustom(x, y - 350 + 105 + _0x42b4x6a, 0, 'min', [255, 255, 255, 210], font)
        };
        if (drawHideReal) {
            Render.GradientSkeet(7, y - 350 + 105 + _0x42b4x6a + _0x42b4x67, 50, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 105 + _0x42b4x6a + _0x42b4x67, 0, 'beta', [17, 17, 17, 210], font);
            Render.StringCustom(x, y - 350 + 105 + _0x42b4x6a + _0x42b4x67, 0, 'beta', [132, 195, 16, 210], font)
        };
        if (UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots')) {
            Render.GradientSkeet(7, y - 350 + 105, 170, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 105, 0, 'HS', [17, 17, 17, 210], font);
            Render.StringCustom(x, y - 350 + 105, 0, 'HS', [132, 195, 16, 210], font)
        };
        if (UI.GetValue('Misc', 'GENERAL', 'Miscellaneous', 'Extended backtracking')) {
            Render.GradientSkeet(7, y - 350 + 105 + _0x42b4x6a + _0x42b4x67 + _0x42b4x68, 75, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 105 + _0x42b4x6a + _0x42b4x67 + _0x42b4x68, 0, 'PING', [17, 17, 17, 210], font);
            Render.StringCustom(x, y - 350 + 105 + _0x42b4x6a + _0x42b4x67 + _0x42b4x68, 0, 'PING', [210 - ((Entity.GetProp(Entity.GetLocalPlayer(), 'CPlayerResource', 'm_iPing') / 189 * 60) * 2.29824561404), (Entity.GetProp(Entity.GetLocalPlayer(), 'CPlayerResource', 'm_iPing') / 189 * 60) * 3.42105263158, (Entity.GetProp(Entity.GetLocalPlayer(), 'CPlayerResource', 'm_iPing') / 189 * 60) * 0.22807017543, 255], font)
        }
    };
    fill = 3.3 - (3.3 + on_plant_time - Globals.Curtime());
    if (fill > 3.3) {
        fill = 3.3
    };
    if (planting) {
        Render.GradientSkeet(7, y - 350 + 70 + 1 - _0x42b4x66 - _0x42b4x6b, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
        Render.StringCustom(x, y + 1 - 350 + 70 - _0x42b4x66 - _0x42b4x6b, 0, bombsiteonplant, [0, 0, 0, 255], font);
        Render.StringCustom(x, y - 350 + 70 - _0x42b4x66 - _0x42b4x6b, 0, bombsiteonplant, [210, 216, 112, 255], font);
        Render.Arc(x + 135, y - 350 + 85 - _0x42b4x66 - _0x42b4x6b, 11, 7, 0, 360, [17, 17, 17, 255]);
        Render.Arc(x + 135, y - 350 + 85 - _0x42b4x66 - _0x42b4x6b, 10, 8, 0, (fill / 3.3) * 360, [255, 255, 255, 255])
    };
    local = Entity.GetLocalPlayer();
    var _0x42b4x2d = Entity.GetEntitiesByClassID(128)[0];
    if (_0x42b4x2d == undefined) {
        return
    };
    var _0x42b4x6d = Entity.GetRenderOrigin(_0x42b4x2d);
    var _0x42b4x6e;
    _0x42b4x6e = Entity.GetRenderOrigin(local);
    var _0x42b4x6f = calcDist(_0x42b4x6d, _0x42b4x6e);
    var _0x42b4x70 = false;
    var _0x42b4x71;
    var _0x42b4x72 = Entity.GetProp(local, 'CCSPlayerResource', 'm_iArmor');
    var _0x42b4x73 = Entity.GetProp(local, 'CBasePlayer', 'm_iHealth');
    var _0x42b4x74 = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_bBombTicking');
    var _0x42b4x75 = (Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_flC4Blow') - Globals.Curtime());
    var _0x42b4x76 = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_flTimerLength');
    var _0x42b4x77 = (((Render.GetScreenSize()[1] - 50) / _0x42b4x76) * (_0x42b4x75));
    var _0x42b4x78 = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_flDefuseLength');
    var _0x42b4x79 = (Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_flDefuseCountDown') - Globals.Curtime());
    var _0x42b4x7a = (((Render.GetScreenSize()[1] - 50) / _0x42b4x78) * (_0x42b4x79));
    var _0x42b4x7b = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_hBombDefuser');
    var _0x42b4x7c = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_bBombDefused');
    const _0x42b4x7d = 450.7;
    const _0x42b4x55 = 75.68;
    const _0x42b4x7e = 789.2;
    const _0x42b4x35 = (_0x42b4x6f - _0x42b4x55) / _0x42b4x7e;
    var _0x42b4x7f = _0x42b4x7d * Math['exp'](-_0x42b4x35 * _0x42b4x35);
    if (_0x42b4x72 > 0) {
        var _0x42b4x80 = _0x42b4x7f * 0.5;
        var _0x42b4x81 = (_0x42b4x7f - _0x42b4x80) * 0.5;
        if (_0x42b4x81 > _0x42b4x72) {
            _0x42b4x72 = _0x42b4x72 * (1 / 0.5);
            _0x42b4x80 = _0x42b4x7f - _0x42b4x81
        };
        _0x42b4x7f = _0x42b4x80
    };
    _0x42b4x71 = Math['ceil'](_0x42b4x7f);
    if (_0x42b4x71 >= _0x42b4x73) {
        _0x42b4x70 = true
    } else {
        _0x42b4x70 = false
    };
    _0x42b4x75 = parseFloat(_0x42b4x75['toPrecision'](3));
    timer2 = parseFloat(_0x42b4x75['toPrecision'](2));
    timer3 = parseFloat(_0x42b4x75['toPrecision'](1));
    if (!_0x42b4x74) {
        return
    };
    if (_0x42b4x7c) {
        return
    };
    if (_0x42b4x75 >= 1) {
        Render.GradientSkeet(7, y - 350 + 70 + 1 - _0x42b4x66 - _0x42b4x6b, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
        Render.StringCustom(x, y - 350 + 70 + 1 - _0x42b4x66 - _0x42b4x6b, 0, getSite(_0x42b4x2d) + _0x42b4x75['toFixed'](1) + 's', [0, 0, 0, 255], font);
        Render.StringCustom(x, y - 350 + 70 - _0x42b4x66 - _0x42b4x6b, 0, getSite(_0x42b4x2d) + _0x42b4x75['toFixed'](1) + 's', [255, 255, 255, 255], font)
    };
    if (_0x42b4x7b > 0) {
        if (_0x42b4x75 > _0x42b4x78 && _0x42b4x75 >= 0.1) {
            Render.FilledRect(0, 0, 10, 1080, [25, 25, 25, 120]);
            Render.FilledRect(0, 1080 - _0x42b4x7a, 10, 1080, [58, 191, 54, 120]);
            Render.Rect(0, 0, 10, 1080, [25, 25, 25, 120])
        } else {
            Render.FilledRect(0, 0, 10, 1080, [25, 25, 25, 120]);
            Render.FilledRect(0, 1080 - _0x42b4x7a, 10, 1080, [252, 18, 19, 120]);
            Render.Rect(0, 0, 10, 1080, [25, 25, 25, 120])
        }
    };
    if (_0x42b4x70) {
        Render.GradientSkeet(7, y - 315 + 1 - _0x42b4x66 - _0x42b4x6b, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
        Render.StringCustom(x, y - 315 + 1 - _0x42b4x66 - _0x42b4x6b, 0, 'FATAL', [0, 0, 0, 255], font);
        Render.StringCustom(x, y - 315 - _0x42b4x66 - _0x42b4x6b, 0, 'FATAL', [255, 0, 0, 255], font)
    } else {
        if (_0x42b4x7f > 0.5) {
            Render.GradientSkeet(7, y - 315 + 1 - _0x42b4x66 - _0x42b4x6b, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y - 315 + 1 - _0x42b4x66 - _0x42b4x6b, 0, '-' + _0x42b4x71 + 'HP', [0, 0, 0, 255], font);
            Render.StringCustom(x, y - 315 - _0x42b4x66 - _0x42b4x6b, 0, '-' + _0x42b4x71 + 'HP', [210, 216, 112, 255], font)
        }
    }
}
var oldTick = 0;
var lastPressed = 0;
var isHideRealActive = false;

function onCreateMove() {
    if (UI.IsHotkeyActive('Script items', 'Ping spike')) {
        UI.SetValue('Misc', 'GENERAL', 'Miscellaneous', 'Extended backtracking', 1)
    } else {
        UI.SetValue('Misc', 'GENERAL', 'Miscellaneous', 'Extended backtracking', 0)
    };
    misses = shotsfired - shotshurt;
    isLeftActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Left Hotkey');
    isRightActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Right Hotkey');
    isBackwardsActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Backwards Hotkey');
    isForwardActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Forward Hotkey');
    if (isLeftActive && leftWasPressed == false) {
        lastPressed = Global.Tickcount();
        isHideRealActive = false;
        leftWasPressed = true;
        backWasPressed = false;
        rightWasPressed = false;
        upWasPressed = false;
        drawLeft = 1;
        drawBack = 0;
        drawRight = 0;
        drawHideReal = 0;
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', -90);
        UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', false)
    } else {
        if (isLeftActive && leftWasPressed == true && Global.Tickcount() > lastPressed + 16) {
            isHideRealActive = true;
            oldTick = Global.Tickcount();
            drawHideReal = 1
        }
    };
    if (isRightActive && rightWasPressed == false) {
        lastPressed = Global.Tickcount();
        isHideRealActive = false;
        backWasPressed = false;
        leftWasPressed = false;
        rightWasPressed = true;
        upWasPressed = false;
        drawLeft = 0;
        drawBack = 0;
        drawRight = 1;
        drawHideReal = 0;
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 90);
        UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', false)
    } else {
        if (isRightActive && rightWasPressed == true && Global.Tickcount() > lastPressed + 16) {
            isHideRealActive = true;
            oldTick = Global.Tickcount();
            drawHideReal = 1
        }
    };
    if (isBackwardsActive && backWasPressed == false && Global.Tickcount() > lastPressed + 16) {
        lastPressed = Global.Tickcount();
        isHideRealActive = false;
        backWasPressed = true;
        rightWasPressed = false;
        leftWasPressed = false;
        upWasPressed = false;
        drawLeft = 0;
        drawHideReal = 0;
        drawBack = 1;
        drawRight = 0;
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 0);
        UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', false)
    } else {
        if (isBackwardsActive && backWasPressed == true && Global.Tickcount() > lastPressed + 16) {
            isHideRealActive = true;
            oldTick = Global.Tickcount();
            drawHideReal = 1
        }
    };
    if (isForwardActive && upWasPressed == false && Global.Tickcount() > lastPressed + 16) {
        lastPressed = Global.Tickcount();
        isHideRealActive = false;
        backWasPressed = false;
        rightWasPressed = false;
        drawHideReal = 0;
        leftWasPressed = false;
        upWasPressed = true;
        drawLeft = 0;
        drawBack = 0;
        drawRight = 0;
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 180);
        UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', false)
    };
    if (isHideRealActive) {
        if (Global.Tickcount() > oldTick + 16) {
            backWasPressed = false;
            rightWasPressed = false;
            leftWasPressed = false;
            upWasPressed = false;
            oldTick = Global.Tickcount();
            drawHideReal = 1
        };
        drawLeft = 0;
        drawBack = 0;
        drawRight = 0;
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 0);
        UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', true)
    };
    UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'At targets', isHideRealActive ? true : false)
}
function player_connect() {
    lastPressed = Global.Tickcount();
    oldTick = Global.Tickcount();
    on_plant_time = 0;
    fill = 0;
    planting = false;
    var _0x42b4x2d = Entity.GetEntitiesByClassID(128)[0];
    if (_0x42b4x2d == undefined) {
        return
    };
    var _0x42b4x74 = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_bBombTicking');
    if (_0x42b4x74) {
        isbomb = 70
    } else {
        isbomb = 0
    }
}

function isDoubleTapActive() {
    var isCheckboxActive = UI.GetValue("Rage", "Exploits", "Doubletap");
    var isKeyActive = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");

    return isCheckboxActive && isKeyActive;
}
function isHActive() {
    var isCheckboxActive = UI.GetValue("Rage", "Exploits", "Hide shots");
    var isKeyActive = UI.IsHotkeyActive("Rage", "Exploits", "Hide shots");

    return isCheckboxActive && isKeyActive;
}


/*
Render.Circle( x1 - 15, y4 + 42, 13, [ 0, 0, 0, 255 ] );	
Render.Circle( x1 - 16, y4 + 43, 13, [ 255, 255, 255, 255 ] );
*/

function GetVelocity()
{
    var velocity = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

function draw() 
{
	var ping = Math.round(Local.Latency() * 1000 - 16)
    var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();
    var hours = hours1 <= 9 ? "0" + today.getHours() + ":" : today.getHours() + ":";
    var minutes = minutes1 <= 9 ? "0" + today.getMinutes() + ":" : today.getMinutes() + ":";
    var seconds = seconds1 <= 9 ? "0" + today.getSeconds() : today.getSeconds()    ;
	var screen_size = Render.GetScreenSize()
	var font2 = Render.AddFont( "Small fonts", 7, 700);
	var font3 = Render.AddFont( "Small fonts", 14, 500);
	var local = Entity.GetLocalPlayer();
    var text = "latency: " + (ping * 1) + "ms " + " ticks: " + Globals.Tickrate().toString() + "  time: " + hours + minutes + seconds ;   
    var fps = Math.floor(1 / Global.Frametime());
	
	g_Local_weapon = Entity.GetWeapon(local);
    weapon_name = Entity.GetName(g_Local_weapon);
    g_Local_classname = Entity.GetClassName(g_Local_weapon);

	var x1 = screen_size[0] / 2;
	var y1 = screen_size[1] - 148;
	
	var x2 = screen_size[0] / 2 + 25;
	var y2 = screen_size[1] - 110;
	
	var x3 = screen_size[0] / 2 - 25;
	var y3 = screen_size[1] - 110;		   
	
	var y4 = screen_size[1] - 125;	
	   
	   if(!Entity.IsAlive(local))
        return;
//!!!!!!!!

	Render.StringCustom(screen_size[0] / 2 - 16, screen_size[1] - 92, 0, "!", [0,0,0,255], font3 );    
	Render.StringCustom(screen_size[0] / 2 - 16, screen_size[1] - 94, 0, "!", [0,0,0,255], font3 );    
	Render.StringCustom(screen_size[0] / 2 - 17, screen_size[1] - 93, 0, "!", [0,0,0,255], font3 );    
	Render.StringCustom(screen_size[0] / 2 - 15, screen_size[1] - 93, 0, "!", [0,0,0,255], font3 );               
	Render.StringCustom(screen_size[0] / 2 - 16, screen_size[1] - 93, 0, "!", [255,255,255,255], font3 );               
//top
	Render.Line( screen_size[0] / 2 - 17, screen_size[1] - 96, screen_size[0] / 2 - 11, screen_size[1] - 96, [ 255, 255, 255, 195 ] );
	Render.Line( screen_size[0] / 2 - 17, screen_size[1] - 95, screen_size[0] / 2 - 11, screen_size[1] - 95, [ 255, 255, 255, 195 ] );

	Render.Line( screen_size[0] / 2 - 18, screen_size[1] - 95, screen_size[0] / 2 - 10, screen_size[1] - 95, [ 255, 255, 255, 195 ] );
	Render.Line( screen_size[0] / 2 - 18, screen_size[1] - 94, screen_size[0] / 2 - 10, screen_size[1] - 94, [ 255, 255, 255, 195 ] );
//бока
	Render.Line( screen_size[0] / 2 - 19, screen_size[1] - 93, screen_size[0] / 2 - 26, screen_size[1] - 75, [ 255, 255, 255, 195 ] );
	Render.Line( screen_size[0] / 2 - 19, screen_size[1] - 93, screen_size[0] / 2 - 26, screen_size[1] - 75, [ 255, 255, 255, 195 ] );
	Render.Line( screen_size[0] / 2 - 9, screen_size[1] - 93, screen_size[0] / 2 - 2, screen_size[1] - 75, [ 255, 255, 255, 195 ] );	
	Render.Line( screen_size[0] / 2 - 9, screen_size[1] - 93, screen_size[0] / 2 - 2, screen_size[1] - 75, [ 255, 255, 255, 195 ] );
//низ
	Render.Line( screen_size[0] / 2 - 23, screen_size[1] - 72, screen_size[0] / 2 - 5, screen_size[1] - 72, [ 255, 255, 255, 195 ] );
	Render.Line( screen_size[0] / 2 - 23, screen_size[1] - 71, screen_size[0] / 2 - 5, screen_size[1] - 71, [ 255, 255, 255, 195 ] );
	Render.Line( screen_size[0] / 2 - 23, screen_size[1] - 70, screen_size[0] / 2 - 5, screen_size[1] - 70, [ 255, 255, 255, 195 ] );
//низ право
	Render.Line( screen_size[0] / 2 - 5, screen_size[1] - 71, screen_size[0] / 2 - 2, screen_size[1] - 75, [ 255, 255, 255, 195 ] );
	Render.Line( screen_size[0] / 2 - 5, screen_size[1] - 71, screen_size[0] / 2 - 2, screen_size[1] - 75, [ 255, 255, 255, 195 ] );
//низ лев
	Render.Line( screen_size[0] / 2 - 23, screen_size[1] - 71, screen_size[0] / 2 - 26, screen_size[1] - 75, [ 255, 255, 255, 165 ] );
	Render.Line( screen_size[0] / 2 - 23, screen_size[1] - 71, screen_size[0] / 2 - 26, screen_size[1] - 75, [ 255, 255, 255, 195 ] );
	
	
//text	
	Render.StringCustom(screen_size[0] / 2 - 101 , screen_size[1] - 80, 0, "packet choke", [0,0,0,255], font2 );    
	Render.StringCustom(screen_size[0] / 2 - 100, screen_size[1] - 81, 0, "packet choke", [255,255,255,255], font2 );

	Render.StringCustom(screen_size[0] / 2 + 4 , screen_size[1] - 80, 0, "choke: 0%", [0,0,0,255], font2 );    
	Render.StringCustom(screen_size[0] / 2 + 5, screen_size[1] - 81, 0, "choke: 0%", [255,255,255,255], font2 );	

	Render.StringCustom(screen_size[0] / 2 + 4, screen_size[1] - 66, 0, "loss: 0% (+- 0.5)", [0,0,0,255], font2 );    
	Render.StringCustom(screen_size[0] / 2 + 5, screen_size[1] - 67, 0, "loss: 0% (+- 0.5)", [255,255,255,255], font2 );	
	
	Render.StringCustom(screen_size[0] / 2 - 101 , screen_size[1] - 51, 0, "velocity: " + (GetVelocity().toFixed(0)).toString() + " u/s " + " ticks: " + Globals.Tickrate().toString() + "  time: " + hours + minutes + seconds, [0,0,0,255], font2 );    
	Render.StringCustom(screen_size[0] / 2 - 100, screen_size[1] - 52, 0, "velocity: " + (GetVelocity().toFixed(0)).toString() + " u/s " + " ticks: " + Globals.Tickrate().toString() + "  time: " + hours + minutes + seconds, [255,255,255,255], font2 );

	Render.StringCustom(screen_size[0] / 2 - 101, screen_size[1] - 66, 0, "latency: " + (ping * 1), [0,0,0,255], font2 );    
	Render.StringCustom(screen_size[0] / 2 - 100, screen_size[1] - 67, 0, "latency: " + (ping * 1), [255,255,255,255], font2);

	Render.StringCustom(screen_size[0] / 2 - 48, screen_size[1] - 66, 0, "fps: " + fps , [0,0,0,255], font2 );    
	Render.StringCustom(screen_size[0] / 2 - 47, screen_size[1] - 67, 0, "fps: " + fps, [255,255,255,255], font2);
//LG
	Render.StringCustom(screen_size[0] / 2 - 48, screen_size[1] - 21, 0, "lagcomp: ", [0,0,0,255], font2 );
	Render.StringCustom(screen_size[0] / 2 - 47, screen_size[1] - 22, 0, "lagcomp: ", [255,255,255,255], font2 );
	if (isHActive() == 1)
	{	
	Render.StringCustom(screen_size[0] / 2 +3, screen_size[1] - 21, 0, "broken", [0, 0, 0,255], font2 );
	Render.StringCustom(screen_size[0] / 2 +2, screen_size[1] - 22, 0, "broken", [42, 250, 87,255], font2 );
	}
	if (isDoubleTapActive() == 0 && isHActive() == 0)
	{	
	Render.StringCustom(screen_size[0] / 2 +3, screen_size[1] - 21, 0, "unsafe", [0, 0, 0,255], font2 );
	Render.StringCustom(screen_size[0] / 2 +2, screen_size[1] - 22, 0, "unsafe", [250, 42, 42,255], font2 );
	}
	if (isDoubleTapActive() == 1 || isHActive() == 1)
	{	
	Render.StringCustom(screen_size[0] / 2 +3, screen_size[1] - 21, 0, "broken", [0, 0, 0,255], font2 );
	Render.StringCustom(screen_size[0] / 2 +2, screen_size[1] - 22, 0, "broken", [42, 250, 87,255], font2 );
	}	
	if (isDoubleTapActive() == 1 || isHActive() == 1)
	{	
	Render.StringCustom(screen_size[0] / 2 +3, screen_size[1] - 21, 0, "broken", [0, 0, 0,255], font2 );
	Render.StringCustom(screen_size[0] / 2 +2, screen_size[1] - 22, 0, "broken", [42, 250, 87,255], font2 );
	}	
}
Cheat.RegisterCallback("Draw", "draw");
Global.RegisterCallback('Draw', 'drawString');
Global.RegisterCallback('CreateMove', 'onCreateMove');
Global.RegisterCallback('player_connect_full', 'player_connect');
Global.RegisterCallback('Draw', 'drawindicators');
Cheat.RegisterCallback('bomb_beginplant', 'abs2');
Cheat.RegisterCallback('bomb_abortplant', 'abs1');
Cheat.RegisterCallback('bomb_defused', 'abs3');
Cheat.RegisterCallback('round_start', 'on_round_start');
Cheat.RegisterCallback('bomb_planted', 'bomb_planted');
Cheat.RegisterCallback('bomb_exploded', 'bomb_exploded')

UI.SetValue( "Misc", "GENERAL", "Misc", "Force sv_cheats", true );
UI.SetValue( "Misc", "GENERAL", "Misc", "Hidden cvars", true );
Global.ExecuteCommand( "@panorama_disable_blur 1" );

Cheat.ExecuteCommand( "cl_csm_shadows 0" );
Cheat.ExecuteCommand( "cl_csm_rope_shadows 0" );
Cheat.ExecuteCommand( "cl_csm_world_shadows 0" );
Cheat.ExecuteCommand( "cl_csm_world_shadows_in_viewmodelcascade 0" );
Cheat.ExecuteCommand( "cl_csm_static_prop_shadows 0" );
Cheat.ExecuteCommand( "cl_csm_sprite_shadows 0" );
Cheat.ExecuteCommand( "cl_csm_translucent_shadows 0" );
Cheat.ExecuteCommand( "cl_csm_viewmodel_shadows 0" );
Cheat.ExecuteCommand( "cl_csm_entity_shadows 0" );

Cheat.ExecuteCommand( "r_shadows 0" );
Cheat.ExecuteCommand( "r_3dsky 0" );
Cheat.ExecuteCommand( "r_drawdecals 0" );
Cheat.ExecuteCommand( "r_drawrain 0" );
Cheat.ExecuteCommand( "r_drawsprites 0" );


// Cheat.ExecuteCommand( "fog_enable 0" );
// Cheat.ExecuteCommand( "fog_enable_water_fog 0" );
// Cheat.ExecuteCommand( "fog_enableskybox 0" );
// Cheat.ExecuteCommand( "mat_disable_bloom 1" );

UI.AddCheckbox("Grenade Helper Enable")
UI.AddCheckbox("Automatic Throw")
UI.AddHotkey("Automatic Throw Hotkey")
UI.AddColorPicker("Grenade Helper Color")
UI.AddCheckbox("Render nade on all map")
UI.AddLabel("------------TwisTy LUA-------------");


var delays = []

function Delay(delay, func, times) {
    this.delay = delay;
    this.resume = Globals.Curtime()+delay;
    this.func = func;
    this.times = 0;
    this.max = times || 1;
    delays.push(this);
}

Delay.prototype.run = function() {
    this.func();
    this.times++;
    this.resume += this.delay;
    return this.times >= this.max;
}

function checkDelays() {
    currTime = Globals.Curtime();

    delays.forEach(function(delay, index) {
        currTime >= delay.resume && delay.run() && delays.splice(index, 1);
    })
}

var coords

function vector_sub(vec1, vec2) {
  return [
    vec1[0]-vec2[0],
    vec1[1]-vec2[1],
    vec1[2]-vec2[2]
  ];
}

function getAngles(localPos, pos) {
  newPos = vector_sub(pos, localPos);
  xyDist = Math.sqrt((newPos[0]*newPos[0] + newPos[1]*newPos[1]));
  yaw = Math.atan2(newPos[1], newPos[0]) * 180 / Math.PI;
  pitch = Math.atan2(-newPos[2], xyDist) * 180 / Math.PI;
  roll = 0;
  angles = [pitch, yaw, roll];
  return angles;
}


function atv(pitch, yaw) {

  return [Math.cos(pitch * Math.PI / 180) * Math.cos(yaw * Math.PI / 180), Math.cos(pitch * Math.PI / 180) * Math.sin(yaw * Math.PI / 180), -Math.sin(pitch * Math.PI / 180)]

}

  var scriptitems = ["Misc", "JAVASCRIPT", "Script Items"];

  function menu_cb() {
    var enabled = UI.GetValue(scriptitems, "Grenade Helper Enable");
    UI.SetEnabled(scriptitems, "Automatic Throw", enabled);
    UI.SetEnabled(scriptitems, "Automatic Throw Hotkey", enabled);
    UI.SetEnabled(scriptitems, "Grenade Helper Color", enabled);
    UI.SetEnabled(scriptitems, "Render nade on all map", enabled);
  }

  function grenade_helper() {
    menu_cb();
  }

function dis(a, b) {

  var ax = a[0]

  var ay = a[1]

  var az = a[2]

  var bx = b[0]

  var by = b[1]

  var bz = b[2]

  var dx = ax - bx

  var dy = ay - by

  var dz = az - bz

  return Math.sqrt( dx * dx + dy * dy + dz * dz )

}

function alp(c, a) {

  return [c[0], c[1], c[2], a]

}

test = 0
movement_autothrow = []
function draw() {

  weaponnames = {"flashbang": [43], "molotov": [46, 48], "smoke": [45], "nade": [44]}

  weapon = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CEconEntity", "m_iItemDefinitionIndex")

  world  = World.GetMapName()

  color  = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Grenade Helper Color")

  var enabled = UI.GetValue(scriptitems, "Grenade Helper Enable");

  if (enabled)
  {
    if(!color) color = [255, 255, 255, 255]

    if([46, 48, 45, 43, 44].indexOf(weapon) < 0) return

    // ["", "", "",  ],
    // ["", ,[]],

    if(world == "de_cbble")
    {
      movement_autothrow = [
      ["Boost Corner1", 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 270.74334716796875 ],[ 450, 0, 270.7424011230469 ],[ 450, 0, 270.7424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 245.74240112304688 ]]],


      ]
    }
    if(world == "de_mirage")
    {
      movement_autothrow = [
      ["Under", 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["Window", 10,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["One-Way Ramp", 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ]]],
      ]
    }
    if(world == "de_dust2")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_inferno")
    {
      movement_autothrow = [
      ["Pit" , 8,[[ 450.02211380004883, 0, 0 ],[ 450.65053939819336, 0, 0 ],[ 450.90695571899414, 0, 0 ],[ 450.53515625, 0, 0 ],[ 450.393945693969727, 0, 0 ],[ 450.5786018371582, 0, 0 ],[ 450.5311737060547, 0, 0 ],[ 450.2818603515625, 0, 0 ],[ 450.48575592041016, 0, 0 ],[ 450.93397521972656, 0, 0 ],[ 450.8269958496094, 0, 0 ],[ 450.3787612915039, 0, 0 ],[ 450.398193359375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ]]],
      ["Mid", 1,[[ 1.125562559813261, 0, 0 ],[ 1.1255620624870062, 0, 0 ],[ 1.12556217238307, 0, 0 ],[ 1.1255620624870062, 0, 0 ],[ 1.1255620624870062, 0, 0 ],[ 1.124624202027917, 0, 0 ],[ 1.12556217238307, 0, 0 ],[ 21.543969690799713, 0, 0 ],[ 36.43856465816498, 0, 0 ],[ 66.22589480876923, 0, 0 ],[ 81.11870193481445, 0, 0 ],[ 109.75620746612549, 0, 0 ],[ 122.38414692878723, 0, 0 ],[ 133.98439383506775, 0, 0 ],[ 133.9861981868744, 0, 0 ],[ 144.6437792778015, 0, 0 ],[ 163.4331409931183, 0, 0 ],[ 163.4331409931183, 0, 0 ],[ 179.29327392578125, 0, 0 ],[ 186.26964616775513, 0, 0 ],[ 192.68085193634033, 0, 0 ],[ 198.56950902938843, 0, 0 ],[ 192.68281269073486, 0, 0.00098419189453125 ],[ 208.95178318023682, 0, 0 ],[ 213.5128688812256, 0, 0 ],[ 221.56566047668457, 0, 0 ],[ 231.35248279571533, 0, 0 ],[ 234.10069465637207, 0, 0 ],[ 236.62394905090332, 0, 0 ],[ 238.94390296936035, 0, 0 ],[ 238.94390201568604, 0, 283.24334716796875 ],[ 238.94586277008057, 0, 283.2424011230469 ],[ 254.51007843017578, 0, 270.7424011230469 ]]],
      ["Fountain", 12,[[ 450.900423407554626, 0, 0 ],[ 450.73103332519531, 0, 0 ],[ 450.900423407554626, 0, 0 ],[ 450.3917555809021, 0, 0 ],[ 450.3917555809021, 0, 0 ],[ 450.3917555809021, 0, 0 ],[ 450.22231674194336, 0, 0 ],[ 450.08318901062012, 0, 0 ],[ 450.41434955596924, 0, 0 ],[ 450.15271377563477, 0, 0 ],[ 450.7157211303711, 0, 0 ],[ 450.5017385482788, 0, 0 ],[ 450.57388305664063, 0, 0 ],[ 450.9901828765869, 0, 0 ],[ 450.41479682922363, 0, 0 ],[ 450.06400680541992, 0, 0 ],[ 450.81544876098633, 0, 0 ],[ 450.09961318969727, 0, 0 ],[ 450.41479682922363, 0, 0 ],[ 450.81321144104004, 0, 270.7433776855469 ],[ 450.81321144104004, 0, 270.7433776855469 ],[ 450.18292808532715, 0, 245.74240112304688 ],[ 450.18292808532715, 0, 245.74240112304688 ]]],
      ["Graveyard",1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 258.2433776855469 ],[ 450, 0, 233.24337768554688 ],[ 450, 0, 220.74337768554688 ],[ 450, 0, 195.74337768554688 ],[ 450, 0, 183.24337768554688 ],[ 450, 0, 158.24337768554688 ],[ 450, 0, 145.74337768554688 ]]],
      ["Box" , 1 ,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["Box A" , 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 270.7433776855469 ],[ 450, 0, 258.2433776855469 ],[ 450, 0, 245.74240112304688 ],[ 450, 0, 220.74240112304688 ],[ 450, 0, 208.24240112304688 ],[ 450, 0, 195.74240112304688 ],[ 450, 0, 170.74240112304688 ]]],
      ["Archade", 12,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 270.7433776855469 ],[ 450, 0, 270.7433776855469 ],[ 450, 0, 245.74337768554688 ],[ 450, 0, 245.74337768554688 ],[ 450, 0, 233.2433624267578 ]]],
      ] 

    }
    if(world == "de_nuke")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_overpass")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_train")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_cache")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_shortdust")
    {
      movement_autothrow = [
      ["Box", 4,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["One-Way Car", 8,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],

      ]
    }

    if(world == "de_cbble")        coords = [["Fountain", "Throw", "nade", 280.924866, -80.187576, -12.565859, -8.844892, -94.796295 ], ["Rock", "Throw", "molotov", 591.136230, -132.038406, 0.031250, -9.724643, -145.176041 ], ["Boost Corner", "Throw", "molotov", 47.968750, -16.031250, -23.177315, -31.504919, -124.580345 ], ["Boost Corner1", "Run + JumpThrow", "molotov", -94.259033, -239.954468, -31.968748, -18.909958, 91.239822 ],[ "One-way Long", "Crouch + Right click", "smoke", 272.031250, -291.031250, -63.906189, -30.971577, 17.418360 ],[ "B Long", "JumpThrow", "smoke", -1540.973389, -1226.978027, -25.199188, -50.672855, 41.294445 ],[ "Matrix", "Throw", "smoke", -1864.968750, -1611.968750, 96.093810, -11.221231, 136.023499 ],[ "B Long", "Throw", "smoke", -288.031250, 1020.970520, 128.093811, -51.547066, -53.167721 ],[ "Truck - front", "Throw", "smoke", -3295.975586, 79.968750, -29.906188, -36.680634, -52.524323 ],[ "Truck - right", "Throw", "smoke", -3168.031250, 79.968750, -29.906188, -47.158157, -65.556221 ],[ "Grass", "Throw", "smoke", -3167.270508, 584.685120, 0.093811, -55.144222, -61.434193 ],[ "Skyfall", "Throw", "smoke", -752.031250, -80.031250, 128.093811, 5.361639, -119.332336 ],[ "Hut - right", "Throw", "smoke", -155.970673, -16.010778, -31.906188, -50.869473, -69.637550 ],[ "Hut - left", "Throw", "smoke", -340.020111, -80.031250, -31.907466, -53.921837, -52.166801 ],[ "Sandwich", "Throw", "smoke", 47.968750, -16.031250, -23.114716, -81.378204, -89.289169 ],[ "Fountain", "Throw", "smoke", -418.514893, -95.749924, -32.562836, -75.323563, -61.343159 ],[ "B Door", "Throw", "smoke", -558.031250, -42.535999, 0.093811, -62.173512, -100.720726 ],[ "Balcony", "JumpThrow", "smoke", -2534.005371, -272.031250, -184.407272, -17.127037, -65.392319 ],[ "A Door", "Walk + Throw", "smoke", -3346.178711, 455.572449, 0.093811, -40.327240, -45.610413 ],[ "A Door", "Run + Throw", "smoke", -2989.968750, -944.371948, 32.093811, -12.160514, -4.402364 ],[ "Skyfall", "Throw", "flashbang", -780.031250, 111.931717, 128.093811, -4.768500, -92.183800 ],[ "Skyfall", "Throw", "flashbang", -590.995239, 434.631622, -0.906188, -17.854057, -108.593758 ],[ "Wood", "Throw", "flashbang", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882 ],[ "Balcony", "Run + Throw", "molotov", -2989.968750, -944.036682, 32.093811, -15.675012, -32.634476 ],[ "Wood", "Throw", "molotov", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882 ]]

    if(world == "de_mirage")       coords = [["One-Way Ramp", "Run + JumpThrow", "molotov", -34.403679, -1916.279053, -39.968750, 2.595078, 71.391121 ],["Car", "Throw", "molotov", -1182.872070, 679.580505, -79.968750, -9.450004, 174.482330 ],["Under", "Walk + Throw", "molotov", -34.409924, 822.263123, -135.968750, -8.459991, -150.967743 ],["One-Way Site", "Throw", "molotov", -538.933411, -1309.055664, -159.968750, -11.109911, -75.805000 ],["One-Way Box", "JumpThrow", "molotov", 663.968750, -1128.005005, -127.968750, 0.395009, -136.764679 ],["Window", "Run + Throw", "molotov", 334.825684, -149.313019, -165.968750, -17.259995, -152.143692 ],["Ramp", "Throw", "molotov", -1119.997314, -1527.024292, -156.076477,-17.370033, 0.035920],["Stairs", "Throw", "molotov", 499.251617, -1574.105713, -261.590881, -25.290028, 176.995941 ],[ "Window Mid", "JumpThrow", "smoke", 1423.964355, -248.026840, -167.906188, -25.723558, -170.518921 ],[ "Connector", "JumpThrow ", "smoke", 1135.968750, 647.996033, -261.322754, -34.518116, -140.291428 ],[ "Catwalk", "Throw", "smoke", 1423.997803, 71.985359, -112.840103, -32.653351, -163.530762 ],[ "One-way Mid", "Right click", "smoke", 369.960144, -720.522705, -162.412476, 35.376301, 124.135780 ],[ "Short", "Run + Throw", "smoke", 399.998444, 4.656666, -203.571350, -22.060497, -134.482208 ],[ "Window Mid", "Throw", "smoke", -624.243530, 615.992065, -78.914246, -51.595604, -109.421127 ],[ "Kitchen door", "Throw", "smoke", -2325.227783, 811.800659, -119.773079, -14.883981, -94.343178 ],[ "Short", "Throw", "smoke", -160.031250, 887.968750, -135.265563, -44.269619, -134.435654 ],[ "Kitchen window", "Throw", "smoke", -835.001404, 615.070190, -79.065735, -63.789238, -146.581238 ],[ "Short", "Throw", "smoke", 341.836212, -620.153992, -163.282486, -23.134167, 164.957458 ],[ "Connector + Jungle", "Throw", "smoke", 815.999512, -1457.235596, -108.906189, -26.797188, -174.613022 ],[ "Stairs", "Throw", "smoke", 1148.225586, -1183.999756, -205.509155, -41.168613, -165.354019 ],[ "Window Mid", "Run + Throw", "smoke", 1391.968750, -1011.236084, -167.906188, -42.603077, 172.188919 ],[ "Stairs", "JumpThrow", "smoke", -90.864479, -1418.000244, -115.906189, -31.895834, -62.464306 ],[ "Fireboxes", "JumpThrow", "smoke", 1391.968750, -930.076294, -167.906188, -21.037338, -151.204865 ],[ "One-way", "Throw", "smoke", 457.968750, -1711.996582, -240.886871, -10.477256, 133.144836 ],[ "Bombsite A", "Throw", "smoke", 815.998718, -1272.017944, -108.906189, -32.654591, -149.503601 ],[ "CT Spawn", "JumpThrow", "smoke", 1257.861938, -871.968750, -143.906188, -21.318205, -144.344666 ],[ "One-way", "Throw", "smoke", -1209.077515, -873.270447, -167.906188, -48.526600, 67.790833 ],[ "One-way", "Right click", "smoke", -964.056885, -2489.520264, -167.913391, -41.926632, -10.765607 ],[ "Ramp", "JumpThrow", "smoke", -2026.397583, -2029.968750, -299.060150, -15.312100, 12.573707 ],[ "One-way Kitchen", "Throw", "smoke", -2600.019287, 535.973022, -159.906188, -16.582365, -50.818062 ],[ "B Apps", "Throw", "flashbang", -2114.031250, 830.582214, -121.516441, -69.514664, 38.815456 ],[ "Connector", "Throw", "flashbang", -496.031250, -1309.031250, -159.906188, -65.176048, -10.261290 ],[ "Fireboxes", "Throw", "molotov", -31.432693, -1418.005371, -167.906188, -19.768339, -138.115036 ],[ "Tetris", "Throw", "molotov", -364.996552, -2173.031250, -176.139190, -26.004026, 44.655296 ]]

    if(world == "de_dust2")        coords = [[ "B Entrance", "Throw", "smoke", -1846.553223, 1232.569824, 32.496025, -8.613732, 118.773392 ],[ "CT Mid", "Throw", "smoke", -538.606567, 1382.031250, -111.957108, -35.360550, 53.845985 ],[ "Xbox", "Throw", "smoke", 229.130554, 112.497559, 5.215744, -40.624023, 108.758316 ],[ "Long Corner", "Throw", "smoke", 222.664124, -87.978210, 9.093811, -46.250572, 48.164497 ],[ "CT Spawn", "Run + Throw", "smoke", 860.031250, 790.031250, 3.900847, -23.414322, 43.616291 ],[ "Short (Close)", "Throw", "smoke", 489.998535, 1446.031250, 2.660506, -5.677320, 88.280685 ],[ "Long Gate", "Throw", "smoke", 1752.049561,2046.932739, 0.365111, -33.430305, -130.546280 ],[ "Lower Mid", "Throw", "smoke", -242.031250, 2278.887695, -119.931587, -32.687481, -123.649094 ],[ "Upper Tunnel", "Throw", "smoke", -985.452942, 2553.223877, 1.318862, -26.764244, -143.848251 ],[ "Bombsite B", "Throw", "flashbang", -1273.968750, 2575.968750, 67.353363, -42.043125, 1.218936 ],[ "Bombsite B", "Throw", "molotov", -760.031250, 2066.031250, -45.182931, -23.497030, 132.684860 ]]

    if(world == "de_inferno")      coords = [["Graveyard", "Run + JumpThrow", "molotov", 2017.503174, 1225.968750, 178.031250, -33.659977, -64.684898],["Mid", "Run + JumpThrow", "molotov", 2343.707520, 568.729492, 145.928940, -38.500111, -178.690613],["Fountain", "Run + JumpThrow", "molotov", 362.636536, 1726.205933, 128.376053, -39.875027, 95.339996],["Triple Box", "Throw", "molotov", 877.968750, 2393.092041, 150.504181, -13.529912, 168.994965 ],["Library", "JumpThrow", "molotov", 1314.032593, 797.901489, 153.586700, -26.509958, 10.154735 ] ,["Box", "Run + Throw", "molotov", 1364.515015, 277.541809, 135.426834, -17.755112, -48.144848],["Archade", "Run + JumpThrow", "molotov", 1287.723633, 434.031250, 125.995117, -36.354294, 55.140560],["Default", "JumpThrow", "molotov", 1961.373169, 1225.968750, 175.031250, -34.145012, -79.280289],["Stove", "Throw", "molotov", 698.401245, -267.968750, 105.031250, -21.614807, 32.599926 ],[ "Mid", "Run + Throw", "smoke", -857.968750, 449.902283, -31.604805, -44.401531, 1.405892 ], ["Pit", "Run + Throw", "molotov", 2105.090088, 1168.412354, 165.084000, -13.804811, -63.900101 ], [ "Box A", "Run + JumpThrow", "molotov", 2079.774658, 1225.998535, 180.093811, -37.500053, -89.940086], [ "Coffins", "Throw", "smoke", 338.871887, 1650.802856, 122.093810, -50.093639, 84.572739 ],[ "B Entrance", "Throw", "smoke", 460.464905, 1828.470825, 136.182693, -25.443281, 86.280159 ],[ "CT Spawn", "Throw", "smoke", 119.999580, 1587.966187, 113.307662, -34.798424, 56.149929 ],[ "Long (Deep)", "Run + Throw", "smoke", 274.681335, -224.627777, 88.093810, -41.052132, 31.799410 ],[ "Pit (Crack)", "Throw", "smoke", 704.160339, 11.968750, 88.797089, -52.337799, -2.135024 ],[ "Short (Deep)", "Throw", "smoke", 697.511902, -242.261810, 91.093810, -53.097946, 16.442726 ],[ "Library to A", "Throw", "smoke", 960.900330, 434.006409, 88.093810, -49.863846, 13.159984 ],[ "Pit to Hay", "Throw", "smoke", 726.031250, 220.962921,94.029999, -55.241890, -8.699924 ],[ "Long", "Throw", "smoke", 491.936829, -267.968750, 88.093810, -42.024933, 45.854645 ],[ "Bombsite B", "Throw", "smoke", 1971.687988, 2636.702393, 128.093811, -39.996227, 175.975357 ],[ "Connector", "Throw", "smoke", 726.031250, 288.680084, 96.093810, -43.560978, 41.450943 ],[ "One-way", "Throw", "smoke", 2631.968750, -16.031250, 84.093810, -5.692367, -179.128860 ],[ "Balcony", "Throw", "smoke", 1913.227295, 1225.968750, 174.093811, -46.497322, -87.005005 ],[ "B Entrance", "Throw", "flashbang", 498.968750, 2444.031250, 160.093811, 1.748943, 142.807571 ],[ "Banana", "Throw", "flashbang", 610.968750, 1873.031250, 134.252365, -44.186985, -0.872295 ],[ "Short", "Walk + Throw", "flashbang", 1275.968750, -111.968750, 256.093811, 9.454458, 116.691383 ],[ "Bombsite A", "Crouch + Throw", "flashbang", 1329.031250, -365.989349, 256.093811, -29.733957, -22.831499 ],[ "B Plant", "JumpThrow", "molotov", 929.176636, 3295.995117, 144.093811, -45.887463, -131.960571 ],[ "3s", "Throw", "molotov", 999.982422, 1878.530640, 149.329788, -26.647552, 141.132538 ],[ "Coffins", "Throw", "molotov", 664.968750, 1873.031250, 168.093811, -24.272781, 96.641022 ]]

    if(world == "de_nuke")         coords = [[ "Hangar", "Throw", "smoke", -164.092941, -1954.733765, -415.916107, -13.613587, 1.278547 ],[ "Red container", "Throw", "smoke", -533.003357, -833.215759, -193.634827, -30.904673, -43.816589 ],[ "Between containers", "Run + Throw", "smoke", -423.996399, -1753.002075, -415.914856, -2.624159, -50.804165 ],[ "T Outside", "JumpThrow", "smoke", 1664.031250, -280.002014, -351.906250, -25.048063, -135.212463 ]]

    if(world == "de_overpass")     coords = [["Stairs", "Run + JumpThrow", "molotov", -3750.460938, -250.358826, 520.609863, 5.050490, 35.776577 ],["Barrels", "Run + Throw", "molotov", -430.186157, -1551.968750, 150.031250, -16.164569, 101.556863 ],["Heaven", "Walk + JumpThrow", "molotov", -856.031311, -639.968750, 105.031250, 4.120225, 128.027786 ],["Barrels", "Throw", "molotov", -1580.517578, -710.171814, 135.334778, -14.950030, 60.188404 ],["Water", "Throw", "molotov", -1276.541260, -964.551147, 10.933800, -23.484703, 82.194580],[ "Toilet entrance", "Run + Throw", "smoke", -730.031250, -2225.143799, 240.093811, -51.612926, 149.045975 ],[ "B Bridge", "Throw", "smoke", -617.486389, -1509.028809, 144.093811, -48.988934, 113.071342 ],[ "B Center", "Throw", "smoke", -525.982300, -1551.984375, 144.093811, -43.807911, 110.431473 ],[ "Barrels to Pillar", "Throw", "smoke", -613.014099, -1082.017212, 42.160416, -29.337307, 99.340714 ],[ "B Center", "Throw", "smoke", -1567.968750, -1087.984619, 0.093811, -30.278185, 74.646019 ],[ "Monster to Pillar", "Throw", "smoke", -1645.986938, -1087.982300, 96.093810, -20.015800, 55.835869 ],[ "Heaven", "Throw", "smoke", -1559.968750, -728.785583, 52.574355, -33.446209, 96.293686 ],[ "B Bridge", "Throw", "smoke", -1559.999390, -361.285339, 32.421722, -43.693123, 21.193089 ],[ "Heaven", "Throw", "smoke", -2174.002441, -1151.968750, 398.197235, -26.368107, 71.543701 ],[ "Long to Boxes", "Throw", "smoke", -2025.534058, -865.001343, 395.427856, -28.313963, 114.564102 ],[ "Bank", "Throw", "smoke", -2162.000488, -519.968750, 391.460358, -29.749702, 100.836487 ],[ "Truck to Bank", "Throw", "smoke", -3612.545654, -177.626740, 512.791992, -40.392601, 51.259613 ],[ "Boxes to Truck", "Throw", "smoke", -3540.031250, -381.968750, 528.080200, -14.256992, 41.849758 ],[ "Truck", "Throw", "smoke", -2351.968750, -815.968750, 391.089905, -34.683971, 81.500427 ],[ "Trash", "Throw", "smoke", -2351.968750, -414.031250, 388.562317, -60.588089, 73.825958 ],[ "Trash", "Throw", "smoke", -3383.369629, 35.247875, 516.906006, -18.035419, 31.699080 ],[ "Long", "Crouch + Throw", "smoke", -1993.398926, 537.698242, 475.093810, -28.677984, -169.596695 ],[ "Monster", "Throw", "smoke", -1926.860962, 1311.968750, 355.030579, -46.200985, -40.010532 ],[ "One-way", "Throw", "smoke", -2191.968750, 1311.968750, 356.093811, -8.861760, -55.390415 ],[ "One-way", "Right click", "smoke", -1826.375610, 629.178894, 256.093811, 26.580435, -17.457275 ],[ "One-way", "Throw", "smoke", -2012.968750, -1231.968750, 240.093811, 16.218643, 63.144173 ],[ "Short B", "Throw", "smoke", -2115.841309, 992.920288, 480.093810, -22.936214, -57.690578 ],[ "Bombsite A", "Throw", "flashbang", -2604.023926, 1102.215088, 480.093810, -24.090078, 70.938210 ],[ "Barrels", "Throw", "molotov", -1580.023315, -480.767883, 136.093811, -20.147602, 53.764153 ],[ "Bombsite B", "Throw", "molotov", -1399.968750, -139.998840, 0.093811, -15.444187, 63.084324 ]]

    if(world == "de_train")        coords = [["B site", "Throw", "molotov", -1085.563477, -954.344543, -55.968750, -2.244908, -11.982774 ],["Default", "Walk + Throw", "molotov", 1054.867188, 426.185638, -215.982330, -14.129807, -158.603027 ],["Heaven", "Throw", "molotov", 132.170197, 499.088257, -219.968750, -30.679949, -56.869923 ],["Site", "Run + Throw", "molotov", -338.848297, 307.854095, -215.968750, -29.580017, -36.570026 ],[ "B Upper", "Throw", "smoke", -1055.968750, -1607.969116, -151.906188, -9.076089, -21.028521 ],[ "B Lower", "Throw", "smoke", -1159.978027, -1088.112549, -95.909508, -9.122071, 13.307947 ],[ "Blue to Bombsite", "Run + Throw", "smoke", -1155.979004, -1301.504395, -95.906189, -15.857571, 38.882820 ],[ "Connector", "Run + Throw", "smoke", -1159.999634, -1048.001709, -95.906189, -11.023086, 5.091055 ],[ "Ivy (right)", "Throw", "smoke", 1388.426270, 1446.000488, -223.906189, -6.188282, -95.524574 ],[ "Ivy (left)", "Run + Throw", "smoke", 1535.968750, 1775.968750, -223.906189, -9.818258, -112.486588 ],["Bombsite A to Connector", "Both buttons", "smoke", -655.968750, -399.892731, 16.093811, -46.002502, 10.890710 ],[ "Blue to Red train", "Throw", "smoke", -645.479370, 1697.721924, -209.906189, -41.564690, -65.086685 ],[ "Electric box", "Throw", "smoke", -481.865631, 1725.011597, -209.906189, -45.937080, -78.790627 ],[ "Blue train (Left)", "Throw", "smoke", -555.031250, 1262.031250, -212.532227, -68.096550, -50.974125 ],[ "Green to Red train", "Throw", "smoke", -838.162292, 1268.024414, -222.906189, -37.604507, -42.064575 ],[ "Ivy to Green train", "Throw", "smoke", -640.027832, -583.969666, 16.093811, -44.699406, 32.218452 ],[ "Bombsite A to Red train", "Throw", "smoke", -453.358459, 1286.284668, -86.490753, -25.130558, -58.731426 ],[ "Main", "Throw", "smoke", 1021.096924, -254.988556, -215.906189, -38.494926, 154.562332 ],[ "Bombsite A", "Run + Throw", "flashbang", 400.031250, -420.031250, -211.777573, -28.859020, -89.674629 ],[ "Blue train (Back)", "Run + Throw", "molotov", -790.028748, 375.928741, -215.906189, -11.270589, 27.332729 ]]

    if(world == "de_cache")        coords = [[ "Ventsroom", "Throw", "smoke", 837.744141, -872.015564, 1614.093750, -15.362073, 177.850555 ],[ "Headshot", "Throw", "smoke", 960.031250, -1463.968750, 1644.093750, -26.400745, 162.851730 ],[ "B Center", "Throw", "smoke", 827.971313, -1463.968750, 1614.093750, -21.995483, 162.191437 ],[ "Mid Center", "Throw", "smoke", 1711.974121, 463.987732, 1614.093750, -10.675973, -167.299591 ],[ "Connector", "Throw", "smoke", 1160.711182, 715.841675, 1613.093750, -31.334572, -153.088974 ],[ "White box", "Throw", "smoke", 2156.583740, -182.968750, 1613.483887, -22.077839, 161.943924 ],[ "One-way", "Throw", "smoke", 1037.031250, 513.031250, 1613.550293, -49.137814, 104.639671 ],[ "Mid (Right side)", "Throw", "smoke", 1711.968750, -71.968750, 1614.093750, -10.560504, 161.185349 ],[ "Bombsite A", "Crouch + Throw", "smoke", 154.413376, 2096.080566, 1688.093750, 9.370919, -29.337667 ],[ "Short", "Run + Throw", "smoke", 139.031250, 2197.968750, 1688.093750, -6.040052, -60.836231 ],[ "Bombsite A", "Throw", "smoke", 1319.968750, 1520.395508, 1701.093750, -57.767025, 161.424835 ],[ "Forklift", "Throw", "smoke", 1230.754150, 1612.968750, 1701.965088, -74.514435, -173.894516 ],[ "Main", "Throw", "smoke", -782.198059, 1110.000366, 1689.439697, -9.703021, 24.963852 ],[ "Main", "Throw", "smoke", -429.968750, 2244.968750, 1687.093750, -66.017174, -31.140173 ],[ "Main", "Throw", "smoke", -50.012558, 2261.968750, 1687.093750, -18.612713, -64.612831 ],[ "Vents", "Run + Throw", "smoke", -996.979553, 1440.231689, 1691.182373, -33.181599, -46.326721 ],[ "Bombsite A", "Throw", "flashbang", -358.534668, 2147.728027, 1687.093750, -17.540194, 2.039984 ],[ "Bombsite A", "Throw", "flashbang", 89.984558, 2244.983398, 1687.093750, -71.181236, -93.482628 ],[ "Bombsite B", "Both buttons", "flashbang", -633.975891, -379.968750, 1620.093750, -41.629662, -58.865555 ],[ "Mid", "Crouch + Throw", "flashbang", 114.968750, -107.322037, 1613.718506, -16.913092, -84.200432 ],[ "Mid", "Run + Throw", "flashbang", 1736.970581, 308.968750, 1614.093750, -9.157659, 162.762833 ],[ "Bombsite B", "Throw", "flashbang", 879.802185, -872.031250, 1614.093750, -14.157107, 177.892853 ],[ "Bombsite B", "Throw", "molotov", 907.649597, -1228.031250, 1614.093750, -23.876366, -179.771790 ],[ "White box", "Throw", "molotov", 605.005188, -149.968750, 1689.035889, -6.584105, 133.537994 ],[ "Boost", "Throw", "molotov", 11.759085, -148.994904, 1613.093750, -32.654572, 38.675369 ]]

    if(world == "de_shortdust")    coords = [["Box", "Run + Throw", "molotov", -309.406403, 1933.314819, 32.031250, -5.444888, -45.821072 ],["Car", "Throw", "molotov", -893.477783, 956.593933, 35.031250, -11.485014, -34.438034 ],["One-Way CT", "Throw", "molotov", -450.279297, 780.684265, 40.753510, -19.734886, -50.160259 ],["One-Way Car", "Run + Throw", "molotov", -1279.968750, 1039.968750, -170.329315, -27.609568, -18.734381 ]]


    var font1 = Render.AddFont("Verdana", 10, 600)

    var font2 = Render.AddFont("Verdana", 12, 600)

    var font3 = Render.AddFont("Verdana", 12, 500)

    var scsiz = Render.GetScreenSize()
    var scrmid = [Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2]

    var coordslenght = 0

    color_circle = [0,0,0,0]

    while(coords[coordslenght]) {

      coordslenght++

    }
    // if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Automatic Throw Hotkey") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Automatic Throw"))
    // {
    //   get_velocity()
    // }
    for(var i = 0; i < coordslenght; i++) {

      crd = coords[i]

      if(weaponnames[crd[2]].indexOf(weapon) >= 0) {

        cds = Render.WorldToScreen([crd[3], crd[4], crd[5]])

        var distance = dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer()))
        var nadeallmap = UI.GetValue(scriptitems,"Render nade on all map");

        if(nadeallmap)
        {
          if(distance >= 7000 - 255 && distance <= 7000) {
           Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, Math.round(Math.min(255, 7000 - distance))), font1)
           continue;
          }
          if(distance < 7000 - 255 && distance >= 10) {
            Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, 255), font1)
          }
        }else
        {
          if(distance >= 800 - 255 && distance <= 800) {
           Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, Math.round(Math.min(255, 800 - distance))), font1)
           continue;
          }
          if(distance < 800 - 255 && distance >= 10) {
           Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, 255), font1)
          }
        }

        if(dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer())) < 10) {

          Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, 255), font2)


          vec = atv(crd[6], crd[7])

          wec = Render.WorldToScreen([crd[3] + vec[0] * 200, crd[4] + vec[1] * 200, crd[5] + 64 + vec[2] * 200])


          Render.StringCustom(wec[0] + 14, wec[1] - 9, 0, crd[1], alp(color, 255), font3)

          Render.Line(scsiz[0] / 2, scsiz[1] / 2, wec[0], wec[1], alp(color, 255))


          if(( Math.abs(wec[0] - scrmid[0]) + Math.abs(wec[1] - scrmid[1]) ) <= 5)
          {
            color_circle = [0,255,0,255]
          }
          else {
            color_circle = [255,0,0,255]
          }

          Render.FilledCircle(wec[0], wec[1], 5, (color_circle));

          Render.Circle(wec[0], wec[1], 5, alp(color, 255))
        }
      }
    }
  }
}

coords_auto_throw = []
tickcount = 0
running  = false;

function on_create_move() {

  weaponnames = {"flashbang": [43], "molotov": [46, 48], "smoke": [45], "nade": [44]}

  weapon = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CEconEntity", "m_iItemDefinitionIndex")

  world  = World.GetMapName()

  color  = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Grenade Helper Color")

  var enabled = UI.GetValue(scriptitems, "Grenade Helper Enable");

  if (enabled)
  {
    if(!color) color = [255, 255, 255, 255]

    if([46, 48, 45, 43, 44].indexOf(weapon) < 0) return

    // ["", "", "",  ],
    // ["", ,[]],

    if(world == "de_cbble")
    {
      movement_autothrow = [
      ["Boost Corner1", 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 270.74334716796875 ],[ 450, 0, 270.7424011230469 ],[ 450, 0, 270.7424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 245.74240112304688 ]]],


      ]
    }
    if(world == "de_mirage")
    {
      movement_autothrow = [
      ["Under", 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["Window", 10,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["One-Way Ramp", 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ]]],
      ]
    }
    if(world == "de_dust2")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_inferno")
    {
      movement_autothrow = [
      ["Pit" , 8,[[ 450.02211380004883, 0, 0 ],[ 450.65053939819336, 0, 0 ],[ 450.90695571899414, 0, 0 ],[ 450.53515625, 0, 0 ],[ 450.393945693969727, 0, 0 ],[ 450.5786018371582, 0, 0 ],[ 450.5311737060547, 0, 0 ],[ 450.2818603515625, 0, 0 ],[ 450.48575592041016, 0, 0 ],[ 450.93397521972656, 0, 0 ],[ 450.8269958496094, 0, 0 ],[ 450.3787612915039, 0, 0 ],[ 450.398193359375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ]]],
      ["Mid", 1,[[ 1.125562559813261, 0, 0 ],[ 1.1255620624870062, 0, 0 ],[ 1.12556217238307, 0, 0 ],[ 1.1255620624870062, 0, 0 ],[ 1.1255620624870062, 0, 0 ],[ 1.124624202027917, 0, 0 ],[ 1.12556217238307, 0, 0 ],[ 21.543969690799713, 0, 0 ],[ 36.43856465816498, 0, 0 ],[ 66.22589480876923, 0, 0 ],[ 81.11870193481445, 0, 0 ],[ 109.75620746612549, 0, 0 ],[ 122.38414692878723, 0, 0 ],[ 133.98439383506775, 0, 0 ],[ 133.9861981868744, 0, 0 ],[ 144.6437792778015, 0, 0 ],[ 163.4331409931183, 0, 0 ],[ 163.4331409931183, 0, 0 ],[ 179.29327392578125, 0, 0 ],[ 186.26964616775513, 0, 0 ],[ 192.68085193634033, 0, 0 ],[ 198.56950902938843, 0, 0 ],[ 192.68281269073486, 0, 0.00098419189453125 ],[ 208.95178318023682, 0, 0 ],[ 213.5128688812256, 0, 0 ],[ 221.56566047668457, 0, 0 ],[ 231.35248279571533, 0, 0 ],[ 234.10069465637207, 0, 0 ],[ 236.62394905090332, 0, 0 ],[ 238.94390296936035, 0, 0 ],[ 238.94390201568604, 0, 283.24334716796875 ],[ 238.94586277008057, 0, 283.2424011230469 ],[ 254.51007843017578, 0, 270.7424011230469 ]]],
      ["Fountain", 12,[[ 450.900423407554626, 0, 0 ],[ 450.73103332519531, 0, 0 ],[ 450.900423407554626, 0, 0 ],[ 450.3917555809021, 0, 0 ],[ 450.3917555809021, 0, 0 ],[ 450.3917555809021, 0, 0 ],[ 450.22231674194336, 0, 0 ],[ 450.08318901062012, 0, 0 ],[ 450.41434955596924, 0, 0 ],[ 450.15271377563477, 0, 0 ],[ 450.7157211303711, 0, 0 ],[ 450.5017385482788, 0, 0 ],[ 450.57388305664063, 0, 0 ],[ 450.9901828765869, 0, 0 ],[ 450.41479682922363, 0, 0 ],[ 450.06400680541992, 0, 0 ],[ 450.81544876098633, 0, 0 ],[ 450.09961318969727, 0, 0 ],[ 450.41479682922363, 0, 0 ],[ 450.81321144104004, 0, 270.7433776855469 ],[ 450.81321144104004, 0, 270.7433776855469 ],[ 450.18292808532715, 0, 245.74240112304688 ],[ 450.18292808532715, 0, 245.74240112304688 ]]],
      ["Graveyard",1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 258.2433776855469 ],[ 450, 0, 233.24337768554688 ],[ 450, 0, 220.74337768554688 ],[ 450, 0, 195.74337768554688 ],[ 450, 0, 183.24337768554688 ],[ 450, 0, 158.24337768554688 ],[ 450, 0, 145.74337768554688 ]]],
      ["Box" , 1 ,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["Box A" , 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 270.7433776855469 ],[ 450, 0, 258.2433776855469 ],[ 450, 0, 245.74240112304688 ],[ 450, 0, 220.74240112304688 ],[ 450, 0, 208.24240112304688 ],[ 450, 0, 195.74240112304688 ],[ 450, 0, 170.74240112304688 ]]],
      ["Archade", 12,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 270.7433776855469 ],[ 450, 0, 270.7433776855469 ],[ 450, 0, 245.74337768554688 ],[ 450, 0, 245.74337768554688 ],[ 450, 0, 233.2433624267578 ]]],
      ] 

    }
    if(world == "de_nuke")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_overpass")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_train")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_cache")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_shortdust")
    {
      movement_autothrow = [
      ["Box", 4,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["One-Way Car", 8,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],

      ]
    }

    if(world == "de_cbble")        coords = [["Fountain", "Throw", "nade", 280.924866, -80.187576, -12.565859, -8.844892, -94.796295 ], ["Rock", "Throw", "molotov", 591.136230, -132.038406, 0.031250, -9.724643, -145.176041 ], ["Boost Corner", "Throw", "molotov", 47.968750, -16.031250, -23.177315, -31.504919, -124.580345 ], ["Boost Corner1", "Run + JumpThrow", "molotov", -94.259033, -239.954468, -31.968748, -18.909958, 91.239822 ],[ "One-way Long", "Crouch + Right click", "smoke", 272.031250, -291.031250, -63.906189, -30.971577, 17.418360 ],[ "B Long", "JumpThrow", "smoke", -1540.973389, -1226.978027, -25.199188, -50.672855, 41.294445 ],[ "Matrix", "Throw", "smoke", -1864.968750, -1611.968750, 96.093810, -11.221231, 136.023499 ],[ "B Long", "Throw", "smoke", -288.031250, 1020.970520, 128.093811, -51.547066, -53.167721 ],[ "Truck - front", "Throw", "smoke", -3295.975586, 79.968750, -29.906188, -36.680634, -52.524323 ],[ "Truck - right", "Throw", "smoke", -3168.031250, 79.968750, -29.906188, -47.158157, -65.556221 ],[ "Grass", "Throw", "smoke", -3167.270508, 584.685120, 0.093811, -55.144222, -61.434193 ],[ "Skyfall", "Throw", "smoke", -752.031250, -80.031250, 128.093811, 5.361639, -119.332336 ],[ "Hut - right", "Throw", "smoke", -155.970673, -16.010778, -31.906188, -50.869473, -69.637550 ],[ "Hut - left", "Throw", "smoke", -340.020111, -80.031250, -31.907466, -53.921837, -52.166801 ],[ "Sandwich", "Throw", "smoke", 47.968750, -16.031250, -23.114716, -81.378204, -89.289169 ],[ "Fountain", "Throw", "smoke", -418.514893, -95.749924, -32.562836, -75.323563, -61.343159 ],[ "B Door", "Throw", "smoke", -558.031250, -42.535999, 0.093811, -62.173512, -100.720726 ],[ "Balcony", "JumpThrow", "smoke", -2534.005371, -272.031250, -184.407272, -17.127037, -65.392319 ],[ "A Door", "Walk + Throw", "smoke", -3346.178711, 455.572449, 0.093811, -40.327240, -45.610413 ],[ "A Door", "Run + Throw", "smoke", -2989.968750, -944.371948, 32.093811, -12.160514, -4.402364 ],[ "Skyfall", "Throw", "flashbang", -780.031250, 111.931717, 128.093811, -4.768500, -92.183800 ],[ "Skyfall", "Throw", "flashbang", -590.995239, 434.631622, -0.906188, -17.854057, -108.593758 ],[ "Wood", "Throw", "flashbang", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882 ],[ "Balcony", "Run + Throw", "molotov", -2989.968750, -944.036682, 32.093811, -15.675012, -32.634476 ],[ "Wood", "Throw", "molotov", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882 ]]

    if(world == "de_mirage")       coords = [["One-Way Ramp", "Run + JumpThrow", "molotov", -34.403679, -1916.279053, -39.968750, 2.595078, 71.391121 ],["Car", "Throw", "molotov", -1182.872070, 679.580505, -79.968750, -9.450004, 174.482330 ],["Under", "Walk + Throw", "molotov", -34.409924, 822.263123, -135.968750, -8.459991, -150.967743 ],["One-Way Site", "Throw", "molotov", -538.933411, -1309.055664, -159.968750, -11.109911, -75.805000 ],["One-Way Box", "JumpThrow", "molotov", 663.968750, -1128.005005, -127.968750, 0.395009, -136.764679 ],["Window", "Run + Throw", "molotov", 334.825684, -149.313019, -165.968750, -17.259995, -152.143692 ],["Ramp", "Throw", "molotov", -1119.997314, -1527.024292, -156.076477,-17.370033, 0.035920],["Stairs", "Throw", "molotov", 499.251617, -1574.105713, -261.590881, -25.290028, 176.995941 ],[ "Window Mid", "JumpThrow", "smoke", 1423.964355, -248.026840, -167.906188, -25.723558, -170.518921 ],[ "Connector", "JumpThrow ", "smoke", 1135.968750, 647.996033, -261.322754, -34.518116, -140.291428 ],[ "Catwalk", "Throw", "smoke", 1423.997803, 71.985359, -112.840103, -32.653351, -163.530762 ],[ "One-way Mid", "Right click", "smoke", 369.960144, -720.522705, -162.412476, 35.376301, 124.135780 ],[ "Short", "Run + Throw", "smoke", 399.998444, 4.656666, -203.571350, -22.060497, -134.482208 ],[ "Window Mid", "Throw", "smoke", -624.243530, 615.992065, -78.914246, -51.595604, -109.421127 ],[ "Kitchen door", "Throw", "smoke", -2325.227783, 811.800659, -119.773079, -14.883981, -94.343178 ],[ "Short", "Throw", "smoke", -160.031250, 887.968750, -135.265563, -44.269619, -134.435654 ],[ "Kitchen window", "Throw", "smoke", -835.001404, 615.070190, -79.065735, -63.789238, -146.581238 ],[ "Short", "Throw", "smoke", 341.836212, -620.153992, -163.282486, -23.134167, 164.957458 ],[ "Connector + Jungle", "Throw", "smoke", 815.999512, -1457.235596, -108.906189, -26.797188, -174.613022 ],[ "Stairs", "Throw", "smoke", 1148.225586, -1183.999756, -205.509155, -41.168613, -165.354019 ],[ "Window Mid", "Run + Throw", "smoke", 1391.968750, -1011.236084, -167.906188, -42.603077, 172.188919 ],[ "Stairs", "JumpThrow", "smoke", -90.864479, -1418.000244, -115.906189, -31.895834, -62.464306 ],[ "Fireboxes", "JumpThrow", "smoke", 1391.968750, -930.076294, -167.906188, -21.037338, -151.204865 ],[ "One-way", "Throw", "smoke", 457.968750, -1711.996582, -240.886871, -10.477256, 133.144836 ],[ "Bombsite A", "Throw", "smoke", 815.998718, -1272.017944, -108.906189, -32.654591, -149.503601 ],[ "CT Spawn", "JumpThrow", "smoke", 1257.861938, -871.968750, -143.906188, -21.318205, -144.344666 ],[ "One-way", "Throw", "smoke", -1209.077515, -873.270447, -167.906188, -48.526600, 67.790833 ],[ "One-way", "Right click", "smoke", -964.056885, -2489.520264, -167.913391, -41.926632, -10.765607 ],[ "Ramp", "JumpThrow", "smoke", -2026.397583, -2029.968750, -299.060150, -15.312100, 12.573707 ],[ "One-way Kitchen", "Throw", "smoke", -2600.019287, 535.973022, -159.906188, -16.582365, -50.818062 ],[ "B Apps", "Throw", "flashbang", -2114.031250, 830.582214, -121.516441, -69.514664, 38.815456 ],[ "Connector", "Throw", "flashbang", -496.031250, -1309.031250, -159.906188, -65.176048, -10.261290 ],[ "Fireboxes", "Throw", "molotov", -31.432693, -1418.005371, -167.906188, -19.768339, -138.115036 ],[ "Tetris", "Throw", "molotov", -364.996552, -2173.031250, -176.139190, -26.004026, 44.655296 ]]

    if(world == "de_dust2")        coords = [[ "B Entrance", "Throw", "smoke", -1846.553223, 1232.569824, 32.496025, -8.613732, 118.773392 ],[ "CT Mid", "Throw", "smoke", -538.606567, 1382.031250, -111.957108, -35.360550, 53.845985 ],[ "Xbox", "Throw", "smoke", 229.130554, 112.497559, 5.215744, -40.624023, 108.758316 ],[ "Long Corner", "Throw", "smoke", 222.664124, -87.978210, 9.093811, -46.250572, 48.164497 ],[ "CT Spawn", "Run + Throw", "smoke", 860.031250, 790.031250, 3.900847, -23.414322, 43.616291 ],[ "Short (Close)", "Throw", "smoke", 489.998535, 1446.031250, 2.660506, -5.677320, 88.280685 ],[ "Long Gate", "Throw", "smoke", 1752.049561,2046.932739, 0.365111, -33.430305, -130.546280 ],[ "Lower Mid", "Throw", "smoke", -242.031250, 2278.887695, -119.931587, -32.687481, -123.649094 ],[ "Upper Tunnel", "Throw", "smoke", -985.452942, 2553.223877, 1.318862, -26.764244, -143.848251 ],[ "Bombsite B", "Throw", "flashbang", -1273.968750, 2575.968750, 67.353363, -42.043125, 1.218936 ],[ "Bombsite B", "Throw", "molotov", -760.031250, 2066.031250, -45.182931, -23.497030, 132.684860 ]]

    if(world == "de_inferno")      coords = [["Graveyard", "Run + JumpThrow", "molotov", 2017.503174, 1225.968750, 178.031250, -33.659977, -64.684898],["Mid", "Run + JumpThrow", "molotov", 2343.707520, 568.729492, 145.928940, -38.500111, -178.690613],["Fountain", "Run + JumpThrow", "molotov", 362.636536, 1726.205933, 128.376053, -39.875027, 95.339996],["Triple Box", "Throw", "molotov", 877.968750, 2393.092041, 150.504181, -13.529912, 168.994965 ],["Library", "JumpThrow", "molotov", 1314.032593, 797.901489, 153.586700, -26.509958, 10.154735 ] ,["Box", "Run + Throw", "molotov", 1364.515015, 277.541809, 135.426834, -17.755112, -48.144848],["Archade", "Run + JumpThrow", "molotov", 1287.723633, 434.031250, 125.995117, -36.354294, 55.140560],["Default", "JumpThrow", "molotov", 1961.373169, 1225.968750, 175.031250, -34.145012, -79.280289],["Stove", "Throw", "molotov", 698.401245, -267.968750, 105.031250, -21.614807, 32.599926 ],[ "Mid", "Run + Throw", "smoke", -857.968750, 449.902283, -31.604805, -44.401531, 1.405892 ], ["Pit", "Run + Throw", "molotov", 2105.090088, 1168.412354, 165.084000, -13.804811, -63.900101 ], [ "Box A", "Run + JumpThrow", "molotov", 2079.774658, 1225.998535, 180.093811, -37.500053, -89.940086], [ "Coffins", "Throw", "smoke", 338.871887, 1650.802856, 122.093810, -50.093639, 84.572739 ],[ "B Entrance", "Throw", "smoke", 460.464905, 1828.470825, 136.182693, -25.443281, 86.280159 ],[ "CT Spawn", "Throw", "smoke", 119.999580, 1587.966187, 113.307662, -34.798424, 56.149929 ],[ "Long (Deep)", "Run + Throw", "smoke", 274.681335, -224.627777, 88.093810, -41.052132, 31.799410 ],[ "Pit (Crack)", "Throw", "smoke", 704.160339, 11.968750, 88.797089, -52.337799, -2.135024 ],[ "Short (Deep)", "Throw", "smoke", 697.511902, -242.261810, 91.093810, -53.097946, 16.442726 ],[ "Library to A", "Throw", "smoke", 960.900330, 434.006409, 88.093810, -49.863846, 13.159984 ],[ "Pit to Hay", "Throw", "smoke", 726.031250, 220.962921,94.029999, -55.241890, -8.699924 ],[ "Long", "Throw", "smoke", 491.936829, -267.968750, 88.093810, -42.024933, 45.854645 ],[ "Bombsite B", "Throw", "smoke", 1971.687988, 2636.702393, 128.093811, -39.996227, 175.975357 ],[ "Connector", "Throw", "smoke", 726.031250, 288.680084, 96.093810, -43.560978, 41.450943 ],[ "One-way", "Throw", "smoke", 2631.968750, -16.031250, 84.093810, -5.692367, -179.128860 ],[ "Balcony", "Throw", "smoke", 1913.227295, 1225.968750, 174.093811, -46.497322, -87.005005 ],[ "B Entrance", "Throw", "flashbang", 498.968750, 2444.031250, 160.093811, 1.748943, 142.807571 ],[ "Banana", "Throw", "flashbang", 610.968750, 1873.031250, 134.252365, -44.186985, -0.872295 ],[ "Short", "Walk + Throw", "flashbang", 1275.968750, -111.968750, 256.093811, 9.454458, 116.691383 ],[ "Bombsite A", "Crouch + Throw", "flashbang", 1329.031250, -365.989349, 256.093811, -29.733957, -22.831499 ],[ "B Plant", "JumpThrow", "molotov", 929.176636, 3295.995117, 144.093811, -45.887463, -131.960571 ],[ "3s", "Throw", "molotov", 999.982422, 1878.530640, 149.329788, -26.647552, 141.132538 ],[ "Coffins", "Throw", "molotov", 664.968750, 1873.031250, 168.093811, -24.272781, 96.641022 ]]

    if(world == "de_nuke")         coords = [[ "Hangar", "Throw", "smoke", -164.092941, -1954.733765, -415.916107, -13.613587, 1.278547 ],[ "Red container", "Throw", "smoke", -533.003357, -833.215759, -193.634827, -30.904673, -43.816589 ],[ "Between containers", "Run + Throw", "smoke", -423.996399, -1753.002075, -415.914856, -2.624159, -50.804165 ],[ "T Outside", "JumpThrow", "smoke", 1664.031250, -280.002014, -351.906250, -25.048063, -135.212463 ]]

    if(world == "de_overpass")     coords = [["Stairs", "Run + JumpThrow", "molotov", -3750.460938, -250.358826, 520.609863, 5.050490, 35.776577 ],["Barrels", "Run + Throw", "molotov", -430.186157, -1551.968750, 150.031250, -16.164569, 101.556863 ],["Heaven", "Walk + JumpThrow", "molotov", -856.031311, -639.968750, 105.031250, 4.120225, 128.027786 ],["Barrels", "Throw", "molotov", -1580.517578, -710.171814, 135.334778, -14.950030, 60.188404 ],["Water", "Throw", "molotov", -1276.541260, -964.551147, 10.933800, -23.484703, 82.194580],[ "Toilet entrance", "Run + Throw", "smoke", -730.031250, -2225.143799, 240.093811, -51.612926, 149.045975 ],[ "B Bridge", "Throw", "smoke", -617.486389, -1509.028809, 144.093811, -48.988934, 113.071342 ],[ "B Center", "Throw", "smoke", -525.982300, -1551.984375, 144.093811, -43.807911, 110.431473 ],[ "Barrels to Pillar", "Throw", "smoke", -613.014099, -1082.017212, 42.160416, -29.337307, 99.340714 ],[ "B Center", "Throw", "smoke", -1567.968750, -1087.984619, 0.093811, -30.278185, 74.646019 ],[ "Monster to Pillar", "Throw", "smoke", -1645.986938, -1087.982300, 96.093810, -20.015800, 55.835869 ],[ "Heaven", "Throw", "smoke", -1559.968750, -728.785583, 52.574355, -33.446209, 96.293686 ],[ "B Bridge", "Throw", "smoke", -1559.999390, -361.285339, 32.421722, -43.693123, 21.193089 ],[ "Heaven", "Throw", "smoke", -2174.002441, -1151.968750, 398.197235, -26.368107, 71.543701 ],[ "Long to Boxes", "Throw", "smoke", -2025.534058, -865.001343, 395.427856, -28.313963, 114.564102 ],[ "Bank", "Throw", "smoke", -2162.000488, -519.968750, 391.460358, -29.749702, 100.836487 ],[ "Truck to Bank", "Throw", "smoke", -3612.545654, -177.626740, 512.791992, -40.392601, 51.259613 ],[ "Boxes to Truck", "Throw", "smoke", -3540.031250, -381.968750, 528.080200, -14.256992, 41.849758 ],[ "Truck", "Throw", "smoke", -2351.968750, -815.968750, 391.089905, -34.683971, 81.500427 ],[ "Trash", "Throw", "smoke", -2351.968750, -414.031250, 388.562317, -60.588089, 73.825958 ],[ "Trash", "Throw", "smoke", -3383.369629, 35.247875, 516.906006, -18.035419, 31.699080 ],[ "Long", "Crouch + Throw", "smoke", -1993.398926, 537.698242, 475.093810, -28.677984, -169.596695 ],[ "Monster", "Throw", "smoke", -1926.860962, 1311.968750, 355.030579, -46.200985, -40.010532 ],[ "One-way", "Throw", "smoke", -2191.968750, 1311.968750, 356.093811, -8.861760, -55.390415 ],[ "One-way", "Right click", "smoke", -1826.375610, 629.178894, 256.093811, 26.580435, -17.457275 ],[ "One-way", "Throw", "smoke", -2012.968750, -1231.968750, 240.093811, 16.218643, 63.144173 ],[ "Short B", "Throw", "smoke", -2115.841309, 992.920288, 480.093810, -22.936214, -57.690578 ],[ "Bombsite A", "Throw", "flashbang", -2604.023926, 1102.215088, 480.093810, -24.090078, 70.938210 ],[ "Barrels", "Throw", "molotov", -1580.023315, -480.767883, 136.093811, -20.147602, 53.764153 ],[ "Bombsite B", "Throw", "molotov", -1399.968750, -139.998840, 0.093811, -15.444187, 63.084324 ]]

    if(world == "de_train")        coords = [["B site", "Throw", "molotov", -1085.563477, -954.344543, -55.968750, -2.244908, -11.982774 ],["Default", "Walk + Throw", "molotov", 1054.867188, 426.185638, -215.982330, -14.129807, -158.603027 ],["Heaven", "Throw", "molotov", 132.170197, 499.088257, -219.968750, -30.679949, -56.869923 ],["Site", "Run + Throw", "molotov", -338.848297, 307.854095, -215.968750, -29.580017, -36.570026 ],[ "B Upper", "Throw", "smoke", -1055.968750, -1607.969116, -151.906188, -9.076089, -21.028521 ],[ "B Lower", "Throw", "smoke", -1159.978027, -1088.112549, -95.909508, -9.122071, 13.307947 ],[ "Blue to Bombsite", "Run + Throw", "smoke", -1155.979004, -1301.504395, -95.906189, -15.857571, 38.882820 ],[ "Connector", "Run + Throw", "smoke", -1159.999634, -1048.001709, -95.906189, -11.023086, 5.091055 ],[ "Ivy (right)", "Throw", "smoke", 1388.426270, 1446.000488, -223.906189, -6.188282, -95.524574 ],[ "Ivy (left)", "Run + Throw", "smoke", 1535.968750, 1775.968750, -223.906189, -9.818258, -112.486588 ],["Bombsite A to Connector", "Both buttons", "smoke", -655.968750, -399.892731, 16.093811, -46.002502, 10.890710 ],[ "Blue to Red train", "Throw", "smoke", -645.479370, 1697.721924, -209.906189, -41.564690, -65.086685 ],[ "Electric box", "Throw", "smoke", -481.865631, 1725.011597, -209.906189, -45.937080, -78.790627 ],[ "Blue train (Left)", "Throw", "smoke", -555.031250, 1262.031250, -212.532227, -68.096550, -50.974125 ],[ "Green to Red train", "Throw", "smoke", -838.162292, 1268.024414, -222.906189, -37.604507, -42.064575 ],[ "Ivy to Green train", "Throw", "smoke", -640.027832, -583.969666, 16.093811, -44.699406, 32.218452 ],[ "Bombsite A to Red train", "Throw", "smoke", -453.358459, 1286.284668, -86.490753, -25.130558, -58.731426 ],[ "Main", "Throw", "smoke", 1021.096924, -254.988556, -215.906189, -38.494926, 154.562332 ],[ "Bombsite A", "Run + Throw", "flashbang", 400.031250, -420.031250, -211.777573, -28.859020, -89.674629 ],[ "Blue train (Back)", "Run + Throw", "molotov", -790.028748, 375.928741, -215.906189, -11.270589, 27.332729 ]]

    if(world == "de_cache")        coords = [[ "Ventsroom", "Throw", "smoke", 837.744141, -872.015564, 1614.093750, -15.362073, 177.850555 ],[ "Headshot", "Throw", "smoke", 960.031250, -1463.968750, 1644.093750, -26.400745, 162.851730 ],[ "B Center", "Throw", "smoke", 827.971313, -1463.968750, 1614.093750, -21.995483, 162.191437 ],[ "Mid Center", "Throw", "smoke", 1711.974121, 463.987732, 1614.093750, -10.675973, -167.299591 ],[ "Connector", "Throw", "smoke", 1160.711182, 715.841675, 1613.093750, -31.334572, -153.088974 ],[ "White box", "Throw", "smoke", 2156.583740, -182.968750, 1613.483887, -22.077839, 161.943924 ],[ "One-way", "Throw", "smoke", 1037.031250, 513.031250, 1613.550293, -49.137814, 104.639671 ],[ "Mid (Right side)", "Throw", "smoke", 1711.968750, -71.968750, 1614.093750, -10.560504, 161.185349 ],[ "Bombsite A", "Crouch + Throw", "smoke", 154.413376, 2096.080566, 1688.093750, 9.370919, -29.337667 ],[ "Short", "Run + Throw", "smoke", 139.031250, 2197.968750, 1688.093750, -6.040052, -60.836231 ],[ "Bombsite A", "Throw", "smoke", 1319.968750, 1520.395508, 1701.093750, -57.767025, 161.424835 ],[ "Forklift", "Throw", "smoke", 1230.754150, 1612.968750, 1701.965088, -74.514435, -173.894516 ],[ "Main", "Throw", "smoke", -782.198059, 1110.000366, 1689.439697, -9.703021, 24.963852 ],[ "Main", "Throw", "smoke", -429.968750, 2244.968750, 1687.093750, -66.017174, -31.140173 ],[ "Main", "Throw", "smoke", -50.012558, 2261.968750, 1687.093750, -18.612713, -64.612831 ],[ "Vents", "Run + Throw", "smoke", -996.979553, 1440.231689, 1691.182373, -33.181599, -46.326721 ],[ "Bombsite A", "Throw", "flashbang", -358.534668, 2147.728027, 1687.093750, -17.540194, 2.039984 ],[ "Bombsite A", "Throw", "flashbang", 89.984558, 2244.983398, 1687.093750, -71.181236, -93.482628 ],[ "Bombsite B", "Both buttons", "flashbang", -633.975891, -379.968750, 1620.093750, -41.629662, -58.865555 ],[ "Mid", "Crouch + Throw", "flashbang", 114.968750, -107.322037, 1613.718506, -16.913092, -84.200432 ],[ "Mid", "Run + Throw", "flashbang", 1736.970581, 308.968750, 1614.093750, -9.157659, 162.762833 ],[ "Bombsite B", "Throw", "flashbang", 879.802185, -872.031250, 1614.093750, -14.157107, 177.892853 ],[ "Bombsite B", "Throw", "molotov", 907.649597, -1228.031250, 1614.093750, -23.876366, -179.771790 ],[ "White box", "Throw", "molotov", 605.005188, -149.968750, 1689.035889, -6.584105, 133.537994 ],[ "Boost", "Throw", "molotov", 11.759085, -148.994904, 1613.093750, -32.654572, 38.675369 ]]

    if(world == "de_shortdust")    coords = [["Box", "Run + Throw", "molotov", -309.406403, 1933.314819, 32.031250, -5.444888, -45.821072 ],["Car", "Throw", "molotov", -893.477783, 956.593933, 35.031250, -11.485014, -34.438034 ],["One-Way CT", "Throw", "molotov", -450.279297, 780.684265, 40.753510, -19.734886, -50.160259 ],["One-Way Car", "Run + Throw", "molotov", -1279.968750, 1039.968750, -170.329315, -27.609568, -18.734381 ]]

    var scsiz = Render.GetScreenSize()
    var scrmid = [Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2]

    var coordslenght = 0

    color_circle = [0,0,0,0]

    while(coords[coordslenght]) {

      coordslenght++

    }
    for(var i = 0; i < coordslenght; i++) {

      crd = coords[i]

      if(weaponnames[crd[2]].indexOf(weapon) >= 0) {

        cds = Render.WorldToScreen([crd[3], crd[4], crd[5]])

        var distance = dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer()))
        var nadeallmap = UI.GetValue(scriptitems,"Render nade on all map");
        if(dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer())) < 10) {

          vec = atv(crd[6], crd[7])
          local_player = Entity.GetLocalPlayer()

          if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Automatic Throw Hotkey") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Automatic Throw") && !running)
          {
            eye_pos = Entity.GetEyePosition(local_player)
            angles = getAngles(eye_pos , [crd[3] + vec[0] * 200, crd[4] + vec[1] * 200, crd[5] + 64 + vec[2] * 200])
            UserCMD.SetAngles([angles[0],angles[1],angles[2]])
            tickcount = Global.Tickcount()

            running = true
          //  coords_auto_throw = crd
            for(t = 0; t < movement_autothrow.length;t++)
            {
              if(movement_autothrow[t][0] == crd[0])
              {
                crd[8] = movement_autothrow[t][2]
                crd[9] = movement_autothrow[t][1]
              }
            }
            coords_auto_throw = crd
            auto_throw_repeat()
          }
        }
      }
    }
  }
}

function auto_throw()
{
  tick = Global.Tickcount()
  if (coords_auto_throw[8] == null)
  {

    if((coords_auto_throw[1].includes("Jump") || coords_auto_throw[1].includes("Throw")) && !coords_auto_throw[1].includes("Run")&&  !coords_auto_throw[1].includes("Walk"))
    {

      if(tick - tickcount == 1)
      {
        Cheat.ExecuteCommand( "+attack" );
      }
      if(tick - tickcount == 2)
      {
        if(coords_auto_throw[1].includes("Jump"))
          UserCMD.ForceJump()
        Cheat.ExecuteCommand( "-attack" );
        new Delay(Global.TickInterval() * 2 - Global.TickInterval() / 100 , stop_attack);
        running = false;
      }
      return
    }

    running = false
    return
  }
  jump_throw = false;
  for(i = 0; i < coords_auto_throw[8].length;i++)
  {
    if(coords_auto_throw[8][i][2] != 0)
    {
      jump_throw = true;
      break;
    }
  }
  if(tick - tickcount < coords_auto_throw[8].length)
  {
      UserCMD.SetMovement( [coords_auto_throw[8][tick - tickcount][0],0,0]);
      if(tick - tickcount < coords_auto_throw[8].length - 1)
      {
        if(coords_auto_throw[8][tick-tickcount+1][2] != 0 && coords_auto_throw[8][tick-tickcount][2] == 0)
        {
          Cheat.ExecuteCommand( "+attack" );
        }
      }
      if(tick - tickcount - 1 >= 0 && coords_auto_throw[8][tick-tickcount][2] != 0 && coords_auto_throw[8][tick - tickcount - 1][2] == 0)
      {
        UserCMD.ForceJump()
        Cheat.ExecuteCommand( "-attack" );
        running = false;
      }
      if(!jump_throw)
      {
        if(tick - tickcount == 1)
          Cheat.ExecuteCommand( "+attack" );
        if(tick - tickcount == coords_auto_throw[8].length - coords_auto_throw[9])
        {
          Cheat.ExecuteCommand( "-attack" );

          running = false;
        }
      }
  }
}
throw_tick = 0
function stop_attack()
{
    Cheat.ExecuteCommand( "-attack" );
}
function set_false()
{
  running = false
}
function auto_throw_repeat()
{
  if (coords_auto_throw[8] == null)
  {
    if((coords_auto_throw[1].includes("Jump") || coords_auto_throw[1].includes("Throw"))&&  !coords_auto_throw[1].includes("Run") &&  !coords_auto_throw[1].includes("Walk"))
    {

      for(i = 0; i < 2;i++)
      {
        new Delay(Global.TickInterval() * i - Global.TickInterval() / 100 , auto_throw);
      }
      new Delay(Global.TickInterval() * 3 - Global.TickInterval() / 100 , set_false);
      return
    }
    new Delay(Global.TickInterval() * 0 - Global.TickInterval() / 100 , set_false)
    return
  }
  for(i = 1; i <= coords_auto_throw[8].length;i++)
  {
    new Delay(Global.TickInterval() * i - Global.TickInterval() / 100 , auto_throw);
  }
}

//REMEMBER TO DELETE THIS AFTER ALL NADES

// function get_velocity()
// {
//     var velocity = Entity.GetProp( Entity.GetLocalPlayer(), "CBasePlayer", "m_vecVelocity[0]" );
//     vel = [velocity[0],velocity[1],velocity[2]]
//     velocity_first = vel[0]
//     if(Math.abs(velocity_first) > 1)
//     {
//       Cheat.Print("[ " + ("450") + ", " + "0" + ", " + (Math.abs(velocity[2])).toString() + " ],")
//     }
// }

// Callback
Cheat.RegisterCallback("CreateMove", "checkDelays");

Cheat.RegisterCallback("CreateMove", "on_create_move");

Cheat.RegisterCallback("Draw","grenade_helper");

Global.RegisterCallback("Draw", "draw")

UI.AddLabel('|              beta by Creative            |');
UI.AddLabel('|----------------------------------------|');