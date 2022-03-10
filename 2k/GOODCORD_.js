UI.AddLabel( "            |   Double-tap   | " );

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

UI.AddSliderInt("Tickbase_x", 0, Global.GetScreenSize()[0]);
UI.AddSliderInt("Tickbase_y", 0, Global.GetScreenSize()[1]);

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}
var fa = 0;
var sa = 0;

function main_dt() {
    if (!World.GetServerString()) return;

    const x = UI.GetValue("Misc", "JAVASCRIPT", "Tickbase_x"),
        y = UI.GetValue("Misc", "JAVASCRIPT", "Tickbase_y");

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
        var text = "DT [ppgodzcord] | tickbase(v): 16";
        var color = [89, 119, 239, 255];
    } else if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
        var text = "DT [ppgodzcord] | tickbase(v): 7";
        var color = [89, 119, 239, 255];
    } else {
        var text = "DT [ppgodzcord] | tickbase(v): 0";
        var color = [89, 89, 89, 255];
    }
    var w = Render.TextSizeCustom(text, font)[0] + 8;

    Render.FilledRect(x, y, w, 2, color);
    Render.FilledRect(x, y + 2, w, 18, [17, 17, 17, 60]);
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
            UI.SetValue("Misc", "JAVASCRIPT", "Tickbase_x", mouse_pos[0] - w / 2);
            UI.SetValue("Misc", "JAVASCRIPT", "Tickbase_y", mouse_pos[1] - 20);
        }
    }
}
Global.RegisterCallback("Draw", "main_dt");

UI.AddLabel("---Indicator---");
 UI.AddCheckbox("Hot-Keys");
     UI.AddCheckbox("Spectator-List");
     UI.AddColorPicker("Header Text Color");
     UI.AddColorPicker("Active Text Color");
     UI.AddColorPicker("Logo Color");
     UI.AddLabel(" ");
     UI.AddColorPicker("Top Bar Color");
     UI.AddColorPicker("Bottom Bar Color");
     UI.SetColor("Script items", "Bottom Bar Color", [2, 23, 37, 255 ]);
     UI.SetColor("Script items", "Top Bar Color", [4, 13, 25, 255 ]);
     UI.SetColor("Script items", "Logo Color", [45, 121, 126, 255]);
     UI.SetColor("Script items", "Active Text Color", [255, 255, 255, 255]);
     UI.SetColor("Script items", "Header Text Color", [255, 255, 255, 255]);
     //
     const Binds_x = UI.AddSliderInt("Binds_x", 0, Global.GetScreenSize()[0])
     const Binds_y = UI.AddSliderInt("Binds_y", 0, Global.GetScreenSize()[1])
     const Bindss_x = UI.AddSliderInt("Bindss_x", +40, Global.GetScreenSize()[0])
     const Bindss_y = UI.AddSliderInt("Bindss_y", +40, Global.GetScreenSize()[1])
     UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Binds_x", false)
     UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Binds_y", false)
     UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Bindss_x", false)
     UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Bindss_y", false)
     var screensize = Global.GetScreenSize();
     //
function values(name) {
     var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", name);
     return value;
} 
function HotkeyersXD() {
         const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Binds_x"),
         y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Binds_y");
         //Color
         Color = UI.GetColor("Script items","Header Text Color");
         Color2 = UI.GetColor("Script items","Active Text Color");
         ColorLogo = UI.GetColor("Script items","Logo Color");
         ColorTop = UI.GetColor("Script items","Top Bar Color");
         ColorBottom = UI.GetColor("Script items","Bottom Bar Color");

     var h = [];

     if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
       h.push("Slow walk")
     }
     if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
       h.push("Fake Duck")
     }
     if (UI.IsHotkeyActive("Misc", "General", "Movement", "Auto peek")) {
       h.push("Auto peek")
     }
     if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
       h.push("Anti-Aim invert")
     }
     if (UI.IsHotkeyActive("Rage", "General", "General", "Safe point override")) {
       h.push("Safe point override")
     }
     if (UI.IsHotkeyActive("Rage", "Pistol", "Pistol config", "Hitbox override")) {
       h.push("Hitbox override")
	 }
	 if (UI.IsHotkeyActive("Rage", "General", "Force body aim")) {
		 h.push("Force body aim")
     }
     if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
       h.push("Doubletap")
     }
     if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
       h.push("Hide shots")
     }
     if (UI.IsHotkeyActive("Legit", "GENERAL", "Triggerbot", "Enabled")) {
       h.push("Triggerbot")
     }

     if (!UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Hot-Keys"))

        return;
        //Light bottom
        Render.FilledRect(x + 78, y + 26, 250, 60 + 30 * (h.length - 1), ColorBottom);
        //Dark Top rectangle
        Render.FilledRect( x + 78, y + 26, 250, 30, ColorTop );
        //Logo
        Render.Circle( x + 94, y + 39, 6, ColorLogo );
        Render.Circle( x + 94, y + 39, 9, ColorLogo );
        Render.Circle( x + 94, y + 39, 3, ColorLogo );
        //Line top
        Render.Line( x + 93, y + 30, x + 93, y + 36, ColorLogo);
        Render.Line( x + 94, y + 30, x + 94, y + 36, ColorLogo);
        Render.Line( x + 95, y + 30, x + 95, y + 36, ColorLogo);
        //Line bottom
        Render.Line( x + 95, y + 42, x + 95, y + 48, ColorLogo);
        Render.Line( x + 94, y + 42, x + 94, y + 48, ColorLogo);
        Render.Line( x + 93, y + 42, x + 93, y + 48, ColorLogo);
        //line left
        Render.Line( x + 85, y + 38, x + 91, y + 38, ColorLogo);
        Render.Line( x + 85, y + 39, x + 91, y + 39, ColorLogo);
        Render.Line( x + 85, y + 40, x + 91, y + 40, ColorLogo);
        //Line Right
        Render.Line( x + 97, y + 38, x + 103, y + 38, ColorLogo);
        Render.Line( x + 97, y + 39, x + 103, y + 39, ColorLogo);
        Render.Line( x + 97, y + 40, x + 103, y + 40, ColorLogo);
        //Binds text
        Render.String(x + 110, y + 33, 0, "Binds", Color, 4, 3);
        //Logo ENd
      
        //Render Active Keybind
     for (i = 0; i < h.length; i++) {
        Render.String(x + 80, y + 65 + 25 * i, 0, h[i], Color2,4, 3);
        Render.String(x + 273, y + 65 + 25 * i, 0, "toggled", Color2,4, 3);
     }
        //Move menu
        if (Global.IsKeyPressed(1)) {
         const mouse_pos = Global.GetCursorPosition();
         if (in_bounds(mouse_pos, x, y, x + 320, y + 110)) {
          if (UI.IsMenuOpen( ) == false)
            return;
             UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Binds_x", mouse_pos[0] - 200);
             UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Binds_y", mouse_pos[1] - 60);
         }
     }

}
function get_spectators() {
    var specs = [];
    const players = Entity.GetPlayers();
    for (i = 0; i < players.length; i++) {
        const cur = players[i];
        if (Entity.GetProp(cur, "CBasePlayer", "m_hObserverTarget") != "m_hObserverTarget") {
            const obs = Entity.GetProp(cur, "CBasePlayer", "m_hObserverTarget")

            if (obs === Entity.GetLocalPlayer())
            {
                const name = Entity.GetName(cur);
                specs.push(name);
            }}}
return specs;
}
function Spectatorss() {
        const names = get_spectators();
         const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Bindss_x"),
         y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Bindss_y");
         //Color
         Color = UI.GetColor("Script items","Header Text Color");
         Color2 = UI.GetColor("Script items","Active Text Color");
         ColorLogo = UI.GetColor("Script items","Logo Color");
         ColorTop = UI.GetColor("Script items","Top Bar Color");
         ColorBottom = UI.GetColor("Script items","Bottom Bar Color");

        if (!UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Spectator-List"))

        return;
        //Light bottom
        Render.FilledRect(x + 78, y + 26, 125, 60 + 30 * (names.length - 1), ColorBottom);
        //Dark Top rectangle
        Render.FilledRect( x + 78, y + 26, 125, 30, ColorTop );
        //Logo
        Render.Circle( x + 94, y + 39, 6, ColorLogo );
        Render.Circle( x + 94, y + 39, 9, ColorLogo );
        Render.Circle( x + 94, y + 39, 3, ColorLogo );
        //Line top
        Render.Line( x + 93, y + 30, x + 93, y + 36, ColorLogo);
        Render.Line( x + 94, y + 30, x + 94, y + 36, ColorLogo);
        Render.Line( x + 95, y + 30, x + 95, y + 36, ColorLogo);
        //Line bottom
        Render.Line( x + 95, y + 42, x + 95, y + 48, ColorLogo);
        Render.Line( x + 94, y + 42, x + 94, y + 48, ColorLogo);
        Render.Line( x + 93, y + 42, x + 93, y + 48, ColorLogo);
        //line left
        Render.Line( x + 85, y + 38, x + 91, y + 38, ColorLogo);
        Render.Line( x + 85, y + 39, x + 91, y + 39, ColorLogo);
        Render.Line( x + 85, y + 40, x + 91, y + 40, ColorLogo);
        //Line Right
        Render.Line( x + 97, y + 38, x + 103, y + 38, ColorLogo);
        Render.Line( x + 97, y + 39, x + 103, y + 39, ColorLogo);
        Render.Line( x + 97, y + 40, x + 103, y + 40, ColorLogo);
        //Spectators text
        Render.String(x + 110, y + 33, 0, "Spectators", Color, 4, 3);
      
        //Logo ENd
      
        //Render Active Keybind
        for (i = 0; i < names.length; i++){
         Render.String(x + 80, y + 65 + 25 * i, 0, names[i], [255, 255, 255, 255],4, 3);
     }
  
        //Move menu
        if (Global.IsKeyPressed(1)) {
         const mouse_pos = Global.GetCursorPosition();
         if (in_bounds(mouse_pos, x + 50, y + 20, x + 220, y + 60)) {
          if (UI.IsMenuOpen( ) == false)
            return;
             UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Bindss_x", mouse_pos[0] - 140);
             UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Bindss_y", mouse_pos[1] - 35);
         }
     }

}



Global.RegisterCallback("Draw", "Spectatorss");
Global.RegisterCallback("Draw", "HotkeyersXD");

//hitlogs
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
		Cheat.PrintColor([89, 119, 239, 255], "[goodcord] ");
    if (hittype == "Hit ") {
        if (UI.GetValue("Script items", "Enable chat logging")) {
            Cheat.PrintChat(" \x08[\x0cgoodcord\x08] [\x0c"+shots.toString()+"\x08] "+hittype+name+"'s \x10"+HitgroupName(hitbox)+"\x08 for \x07"+target_damage.toString()+"\x08 ("+target_health.toString()+" remaining) aimed=\x10"+hitboxName+"\x08("+predicthc.toString()+"%%) safety=\x03"+safety+"\x08 (\x10"+flags+"\x08) (\x10"+simtime+"\x08:\x10"+exploit+"\x08)\n");
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
	Cheat.PrintColor([89, 119, 239, 255], "[goodcord] ");
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

//ClanTag
UI.AddLabel("---ClanTag---");
UI.AddDropdown( "Custom ClanTag", [ "Disabled", "goodcord"] );
UI.AddSliderInt( "Custom ClanTag Speed", 1, 10 );
var lasttime = 0;
function onRender( )
{
    var tag = UI.GetValue( "Script Items", "Custom ClanTag" );
    var speed = UI.GetValue( "Script Items", "Custom ClanTag Speed" );
    var time = parseInt((Globals.Curtime() * speed))
    if (time != lasttime)
    {
        if(tag == 0) { Local.SetClanTag(""); }
        if(tag == 1)
            {
            switch((time) % 21)
            {
            case 1: { Local.SetClanTag("                  "); break; }
            case 2: { Local.SetClanTag("        32"); break; }
            case 3: { Local.SetClanTag("           go"); break; }
            case 4: { Local.SetClanTag("       432"); break; }
            case 5: { Local.SetClanTag("           good"); break; }
            case 6: { Local.SetClanTag("       6432"); break; }
            case 7: { Local.SetClanTag("          goodc"); break; }
            case 8: { Local.SetClanTag("       96432"); break; }
            case 8: { Local.SetClanTag("          goodco"); break; }
            case 8: { Local.SetClanTag("       296432"); break; }
            case 8: { Local.SetClanTag("          goodcor"); break; }
            case 9: { Local.SetClanTag("      429642"); break; }
            case 10:{ Local.SetClanTag("        goodcord"); break; }
            case 11:{ Local.SetClanTag("       429642"); break; }
            case 12:{ Local.SetClanTag("      goodcor"); break; }
            case 13:{ Local.SetClanTag("      296432"); break; }
            case 14:{ Local.SetClanTag("      goodco"); break; }
            case 15:{ Local.SetClanTag("      96432"); break; }
            case 16:{ Local.SetClanTag("       goodc"); break; }
            case 17:{ Local.SetClanTag("        6432"); break; }
            case 18:{ Local.SetClanTag("       good"); break; }
            case 19:{ Local.SetClanTag("      432"); break; }
            case 20:{ Local.SetClanTag("       go"); break; }
            case 21:{ Local.SetClanTag("                  "); break; }
            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");

UI.AddLabel("---Aspect Ratio---");
UI.AddSliderInt( "Aspect ratio", 0, 500 );

function fsn( ) {
    ui_arat_val = UI.GetValue( "Aspect ratio" );

    switch ( Global.FrameStage( ) ) {
        case 5: {
            Global.ExecuteCommand( "r_aspectratio " + ui_arat_val.toString()/100 );

            break;
        }
        default: break;
    }
}


Global.RegisterCallback( "FrameStageNotify", "fsn" );

UI.AddLabel("---Jumpscout---");
var oldHitChance = UI.GetValue("Rage", "SCOUT", "Accuracy", "Hitchance");
var oldAccBoost = UI.GetValue("Rage", "SCOUT", "Accuracy", "Accuracy boost");

UI.AddCheckbox("Jumpscout Hitchance");
UI.AddSliderInt("Hitchance", 1, 100);
UI.AddSliderInt("Accuracy Boost", 1, 100);

var isInAir = function(){
if(Global.IsKeyPressed((0x20))){
return true;
}else{
return false;
}
}

function updateValues(){
if(isInAir()){
var Hitchance = UI.GetValue("Script Items","Hitchance");
var AccuracyBoost = UI.GetValue("Script Items", "Accuracy Boost");
UI.SetValue("Rage", "SCOUT", "Accuracy", "Hitchance", Hitchance);
UI.SetValue("Rage", "SCOUT", "Accuracy", "Accuracy boost", AccuracyBoost);
}else{
UI.SetValue("Rage", "SCOUT", "Accuracy", "Hitchance", oldHitChance);
UI.SetValue("Rage", "SCOUT", "Accuracy", "Accuracy boost", oldAccBoost);
}
}

Global.RegisterCallback("CreateMove", "updateValues");

UI.AddLabel("---Ranibow Bar---");
var screen_width = Math.round(Global.GetScreenSize()[0]);

function HSVtoRGB(h, s, v)
{
    var r, g, b, i, f, p, q, t;

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6)
    {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

function onDrawEvent()
{
    var colors = HSVtoRGB(Global.Realtime() * UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Rainbow Line Speed"), 1, 1);

    Render.GradientRect(0, 0, screen_width/2, 4, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
    Render.GradientRect(screen_width/2, 0, screen_width/2, 4, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.r, colors.g, 255]);
}

Global.RegisterCallback("Draw", "onDrawEvent");
UI.AddSliderFloat("Rainbow Line Speed", 0.01, 1.0);
UI.SetValue("MISC", "JAVASCRIPT", "Script Items", "Rainbow Line Speed", 0.1);

UI.AddLabel("---Chat---");
UI.AddCheckbox("Hide Chat");
function hide()
{


var i_chat = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hide Chat");
if (i_chat)
{
    Cheat.ExecuteCommand("cl_chatfilters 0")
}
else
{
    Cheat.ExecuteCommand("cl_chatfilters 63")
}


}
Cheat.RegisterCallback("CreateMove", "hide");

UI.AddLabel("---Kill Effect---");
/**
 *
 * Title: Healthshot effect on kill
 * Author: april#0001
 * Description: Plugin that apparently every cheat needs!
 *
*/

//region main

// Our rendering data
var alpha = 0;
var size = 0;

//endregion

//region menu

// Creates our time slider
UI.AddSliderFloat("Effect duration", 0, 2);

//endregion

//region functions

/**
 * Clamps a value between two other numbers
 *
 * @param v
 * @param min
 * @param max
 * @returns {number}
 */
function clamp(v, min, max)
{
    return Math.max(Math.min(v, max), min);
}

/**
 * Returns the value of a script menu element
 *
 * @param element
 * @returns {*}
 */
function get(element)
{
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", element);
}

/**
 * Renders the effect
 */
function render_effect()
{
    if (alpha === 0)
        return;

    const inc_alpha = ((1 / get("Effect duration")) * Global.Frametime()) * 255
    const inc_size = ((1 / get("Effect duration")) * Global.Frametime()) * 360

    alpha = clamp(alpha - inc_alpha, 0, 255);
    size = clamp(size - inc_size, 0, 360);

    const x = Global.GetScreenSize()[0], y = Global.GetScreenSize()[1];

    Render.GradientRect(0, 0, x, size, 0, [128, 195, 255, alpha], [128, 195, 255, 0]);
    Render.GradientRect(0, y - size, x, size, 0, [128, 195, 255, 0], [128, 195, 255, alpha]);
    Render.GradientRect(x - size, 0, size, y, 1, [128, 195, 255, 0], [128, 195, 255, alpha]);
    Render.GradientRect(0, 0, size, y, 1, [128, 195, 255, alpha], [128, 195, 255, 0]);
}

/**
 * Updates rendering data
 */
function on_death()
{
    const attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    const userid = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    const player = Entity.GetLocalPlayer();

    if (attacker === player && userid != player)
    {
        alpha = 255;
        size = 360;
    }
}

//endregion

//region callbacks

// Callbacks our functions
Global.RegisterCallback("player_death", "on_death");
Global.RegisterCallback("Draw", "render_effect");

//endregion
UI.AddLabel("---Trash Tolk---");
UI.AddCheckbox("trashtalk");

const normal_killsays = ["ну ну от goodcord падаешь","прикупи js","1 сын собачьего оборта ","это мне говорит сын хуйни"
];
    
const hs_killsays = ["мда на держи у тебя упало","братуха голову подорить","iq?","1 бот","ну да мне можно"
];

function on_player_death()
{
    if(UI.GetValue("Misc", "trashtalk"))
    {
        const victim = Entity.GetEntityFromUserID(Event.GetInt("userid"));
        const attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
        const headshot = Event.GetInt("headshot") == 1;
        
        if(Entity.IsLocalPlayer(attacker) && attacker != victim)
        {
            const normal_say = normal_killsays[Math.floor(Math.random() * normal_killsays.length)];
            const hs_say = hs_killsays[Math.floor(Math.random() * hs_killsays.length)];
            
            if(headshot && Math.random() * 2 > 1) //gamer style randomizer
            {
                Cheat.ExecuteCommand("say " + hs_say);
                return;
            }
            Cheat.ExecuteCommand("say " + normal_say);
        }
    }
}

var killsay_amt = normal_killsays.length + hs_killsays.length;

Cheat.Print("trashtalk js loaded, killsay count: " + killsay_amt + "\n");
Cheat.RegisterCallback("player_death", "on_player_death");

const show_edition = [  1  /* ВКЛЮЧЕН ЛИ КАСТОМНЫЙ ТЕКСТ 1/0 */,  "goodcord" /* КАСТОМНЫЙ ТЕКСТ */];

const primary_clr = [198, 65, 116, 255]; /* ЦВЕТ (RGB)*/
const secondary_clr = [primary_clr[0] - 120, primary_clr[1] - 1, primary_clr[2] - 1, 255]; /* ВТОРОЙ ЦВЕТ, МОЖНО ПОМЕНЯТЬ НА СВОЙ */
const text_clr = [255,255,255,255];
const bg_clr = [40,40,47, 125];

const elleqt_ne_trap_3 = function(x, y, a, text, color, font) {
    Render.StringCustom(x + 1, y + 1, a, text, [15, 15, 15, 55], font);
    Render.StringCustom(x, y, a, text, color, font);
}

const elleqt_ne_trap_2 = function(x, y, w, custom_text, font, base_clr) {
    Render.GradientRect(x, y, w / 2, 2, 1, primary_clr, secondary_clr);
    Render.GradientRect(x + w / 2, y, w / 2, 2, 1, secondary_clr, primary_clr);
    Render.FilledRect(x, y + 2, w, 16, bg_clr);
    elleqt_ne_trap_3(x + w / 2, y + 2, 1, custom_text, text_clr, font);
}

const elleqt_ne_trap_1 = function( ) {
        const text = show_edition[0] ? ("onetap | " + Cheat.GetUsername() + " | ") : ("onetap | " + Cheat.GetUsername() + " | ");
        const server_name = World.GetServerString();
        if (server_name != "")
        {
            text += server_name + " | delay: " + Math.round(Local.Latency( ) * 1000 - 16) + " | " + Globals.Tickrate() + "tick | ";
        }
        const now = new Date();
        const hours = now.getHours(), mins = now.getMinutes(), secs = now.getSeconds();
        const time = (hours < 10 ? "0" + hours : hours) + ":" + (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs);
        text += time;
        return text
    }

const elleqt_ne_trap = function() {
    const font = Render.AddFont("Segoe UI", 8, 400);
    const text = elleqt_ne_trap_1();
    const width = Render.TextSizeCustom(text, font)[0] + 15;
    const screen_width = Render.GetScreenSize()[0];

    elleqt_ne_trap_2(screen_width - 10 - width, 10, width, text, font, [255,255,255,255]);
}

Cheat.RegisterCallback('Draw', 'elleqt_ne_trap');