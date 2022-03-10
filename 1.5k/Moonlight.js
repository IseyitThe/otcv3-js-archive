// Script compiled/made by Luna
// Credits to:
// illfated for mindmg (https://www.onetap.com/members/illfated.4180/)
// ggwproot for legit aa (https://www.onetap.com/threads/legit-aa-on-key.28500/)
// Luna for adding a inverter for the legit AA
// Luna for Limit Fake/Delta Sliders
// Luna for Indicators
// Luna for THE MOST RETARDED JITTER SYSTEM EVER!! (dont ask how it works, i literally have no idea whatsoever)
// trickykaden for replying to a guy who once needed help with multidropdown boxes that helped me with dropdown boxes (https://www.onetap.com/threads/ui-addmultidropdown-i-need-help.25004/post-204436)
// Salvatore for double tap script (https://www.onetap.com/threads/increase-double-tap-speed.23814/)


// Start of Script selection
UI.AddDropdown("Selection", ["Rage", "Limit Fake", "Anti-Aim", "Custom Jitter", "Indicators"]);
// Minimum Damage -- Start
var first_call = false;
UI.AddCheckbox("Minimum Damage")
UI.AddHotkey("Mindamage override")
UI.AddDropdown("Weapon type", ["General","Pistol", "Heavy pistol", "Scout", "AWP", "Auto"])

UI.AddSliderInt("Heavy Pistol mindamage override",0 , 130)
UI.AddSliderInt("Pistol mindamage override",0 ,130 )
UI.AddSliderInt("Scout mindamage override",0 ,130 )
UI.AddSliderInt("Auto mindamage override",0 ,130 )
UI.AddSliderInt("Awp mindamage override",0 ,130 )
UI.AddSliderInt("General mindamage override",0 ,130)

damage_values = function(_override_damage, _restore_damage) 
{
    this.override_damage = _override_damage;
    this.restore_damage = _restore_damage;
}

/* fucking gay damage values */
var general = new damage_values(UI.GetValue('Misc','JAVASCRIPT','Script items', "General Air hitchance"), UI.GetValue("Rage", "GENERAL", "Targeting", "Minimum damage"));
var pistol = new damage_values(UI.GetValue('Misc','JAVASCRIPT','Script items', "Pistol mindamage override"), UI.GetValue("Rage", "PISTOL", "Targeting", "Minimum damage"));
var heavy = new damage_values(UI.GetValue('Misc','JAVASCRIPT','Script items', "Heavy Pistol mindamage override"), UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage"));
var scout = new damage_values(UI.GetValue('Misc','JAVASCRIPT','Script items', "Scout Air hitchance"), UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage"));
var awp = new damage_values(UI.GetValue('Misc','JAVASCRIPT','Script items', "Awp mindamage override"), UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage"));
var auto = new damage_values(UI.GetValue('Misc','JAVASCRIPT','Script items', "Auto mindamage override"), UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage"));

function on_cm()
{
    if (UI.IsMenuOpen())
    {
        if (UI.IsHotkeyActive('Misc',  'JAVASCRIPT', 'Script items',"Mindamage override" ))
            UI.ToggleHotkey('Misc',  'JAVASCRIPT', 'Script items',"Mindamage override")

          /*
           we want to set our restore damage back to the original value
           this will only get called once each time the menu gets opened
          */
        if (!first_call)
        {
            UI.SetValue("Rage", "GENERAL", "Targeting", "Minimum damage", general.restore_damage);
            UI.SetValue("Rage", "PISTOL", "Targeting", "Minimum damage", pistol.restore_damage);
            UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", heavy.restore_damage);
            UI.SetValue("Rage", "SCOUT", "Targeting", "Minimum damage", scout.restore_damage);
            UI.SetValue("Rage", "AWP", "Targeting", "Minimum damage", awp.restore_damage);
            UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", auto.restore_damage);

            first_call = true;
        }

        /*while you're in the menu you could make changes to either */
        /* the script sliders or the onetap damage sliders so we want to store both incase that happens */
        
        //store the restore damage values in a weapon object
        general.restore_damage = UI.GetValue("Rage", "GENERAL", "Targeting", "Minimum damage");
        pistol.restore_damage = UI.GetValue("Rage", "PISTOL", "Targeting", "Minimum damage");
        heavy.restore_damage = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage");
        scout.restore_damage = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage");
        awp.restore_damage = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage");
        auto.restore_damage = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage");

        //store the override damage values in the same objects
        general.override_damage = UI.GetValue('Misc','JAVASCRIPT','Script items', "General mindamage override");
        pistol.override_damage = UI.GetValue('Misc','JAVASCRIPT','Script items', "Pistol mindamage override");
        heavy.override_damage = UI.GetValue('Misc','JAVASCRIPT','Script items', "Heavy Pistol mindamage override");
        scout.override_damage = UI.GetValue('Misc','JAVASCRIPT','Script items', "Scout mindamage override");
        awp.override_damage = UI.GetValue('Misc','JAVASCRIPT','Script items', "Awp mindamage override");
        auto.override_damage = UI.GetValue('Misc','JAVASCRIPT','Script items', "Auto mindamage override");

        /*so now  all weapon objects hold both the restore damage and the override damage */

        /*  this code will keep looping while the menu is open */
        /*so whenever you change something it will update live without fucking up and just reseting your mindamage to the old restore value*/
    }
    else
    {
        //whenever the menu is not open:
        //store if our hotkey is true or false in a variable
        var hotkey_state = UI.IsHotkeyActive( 'Misc',  'JAVASCRIPT', 'Script items',"Mindamage override" )

        /* set our actual minimum damage slider to either our restore damage or our override damage */
        
        UI.SetValue("Rage", "GENERAL", "Targeting", "Minimum damage", hotkey_state ? general.override_damage : general.restore_damage);
        UI.SetValue("Rage", "PISTOL", "Targeting", "Minimum damage", hotkey_state ? pistol.override_damage : pistol.restore_damage);
        UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", hotkey_state ? heavy.override_damage : heavy.restore_damage);
        UI.SetValue("Rage", "SCOUT", "Targeting", "Minimum damage", hotkey_state ? scout.override_damage : scout.restore_damage);
        UI.SetValue("Rage", "AWP", "Targeting", "Minimum damage", hotkey_state ? awp.override_damage : awp.restore_damage);
        UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", hotkey_state ? auto.override_damage : auto.restore_damage);

        /* this code will keep looping */
        /*we want our script to set our damage sliders back to the restore damage when our menu is open so we can edit it*/
        /*setting first_call to false will trigger the if on line 31 again when the menu gets opened*/
        
        first_call = false;
    }
}


function on_draw()
{
    var index = UI.GetValue('Misc','JAVASCRIPT','Script items', "Weapon type");
    var rage_switch = true;
	var menuitems = ("Misc", "JAVASCRIPT", "Script items")
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Minimum Damage") == false) {
		UI.SetEnabled(menuitems, "Weapon type", false);
		UI.SetEnabled(menuitems, "Mindamage override", false);
		UI.SetEnabled(menuitems, "Heavy Pistol mindamage override", false);
		UI.SetEnabled(menuitems, "Pistol mindamage override", false);
		UI.SetEnabled(menuitems, "Scout mindamage override", false);
		UI.SetEnabled(menuitems, "Auto mindamage override", false);
		UI.SetEnabled(menuitems, "Awp mindamage override", false);
		UI.SetEnabled(menuitems, "General mindamage override", false);
	}else{
    UI.SetEnabled('Misc','JAVASCRIPT','Script items', "Weapon type", rage_switch)
    UI.SetEnabled('Misc','JAVASCRIPT','Script items', "Mindamage override",rage_switch)

    UI.SetEnabled('Misc','JAVASCRIPT','Script items', "General mindamage override", index == 0 ? rage_switch: false);
    /* normal pistols*/
    UI.SetEnabled('Misc','JAVASCRIPT','Script items', "Pistol mindamage override",  index == 1 ? rage_switch : false);
  
    /* heavy pistols */
    UI.SetEnabled('Misc','JAVASCRIPT','Script items', "Heavy Pistol mindamage override",  index == 2 ? rage_switch : false);
 
    /* Scout settings */
    UI.SetEnabled('Misc','JAVASCRIPT','Script items', "Scout mindamage override",  index == 3 ? rage_switch : false);
  
    
    /* awp settings */
    UI.SetEnabled('Misc','JAVASCRIPT','Script items', "Awp mindamage override",  index == 4 ? rage_switch : false);

    /* Auto settings */
    UI.SetEnabled('Misc','JAVASCRIPT','Script items', "Auto mindamage override",  index == 5 ? rage_switch : false);  
	}

    /* debug code 
    var heavymd = "" + UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage") 
    var scoutmd = "" +UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage")
    var awpmd = "" +UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage")
    var automd = "" +UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage")
    var pistolmd = "" +UI.GetValue("Rage", "PISTOL", "Targeting", "Minimum damage")
    var generalmd = "" +UI.GetValue("Rage", "GENERAL", "Targeting", "Minimum damage")

    Cheat.Print("Auto : " + automd + " Scout : " + scoutmd + " Awp : " + awpmd + " heavy pistols : " + heavymd + " pistols : " + pistolmd + " Generals : " + generalmd + "\n") */
}
// Minimum Damage -- End

// Legit AA on Key -- Start
var jitter_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset") // memory jitter useless but need
var yaw_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset") // // memory yaw player useless but need
var pitch_cache = UI.GetValue("Anti-Aim", "Extra", "Pitch") // needed to cache the pitch
var attargets_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "At targets")

function legitaa() {
    localplayer_index = Entity.GetLocalPlayer( ); // need
    if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Legit AA") && UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) { // check if enabled + inverted
		UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Restrictions", "0");
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180); // changed value if enabled
        UI.SetValue ("Anti-Aim", "Extra", "Pitch", 0) // changed value if enabled
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0); // changed value if enabled
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", 0)
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(0); // idk maybe this rotate legs work i will test working and it is work good
        AntiAim.SetRealOffset(-60);
        AntiAim.SetLBYOffset(120);
	}else if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Legit AA")) { // check if only the key is enabled
		UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Restrictions", "0");
	    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180); // changed value if enabled
        UI.SetValue ("Anti-Aim", "Extra", "Pitch", 0) // changed value if enabled
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0); // changed value if enabled
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", 0)
		AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(0); // idk maybe this rotate legs work i will test working and it is work good
        AntiAim.SetRealOffset(60);
        AntiAim.SetLBYOffset(-120);
	}else { // if disabled
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Restrictions", "1");
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", jitter_cache);
        UI.SetValue ("Anti-Aim", "Extra", "Pitch", pitch_cache);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", attargets_cache)
    }
}
// Legit AA on Key -- end

//Custom Delta -- Start

function LimFake() {
	var LBYDelta = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "LBY Delta");
	var RealDelta = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Real Delta");
	var InvertedLBYDelta = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Inverted LBY Delta");
	var InvertedRealDelta = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Inverted Real Delta");
	
	//--------------------------------------------------------------------------------------//
	if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Delta Key") && UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
		AntiAim.SetOverride(1);
		AntiAim.SetFakeOffset(0);
		AntiAim.SetRealOffset(InvertedRealDelta);
		AntiAim.SetLBYOffset(InvertedLBYDelta);
	}else if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Delta Key")) {
		AntiAim.SetOverride(1);
		AntiAim.SetFakeOffset(0);
		AntiAim.SetRealOffset(RealDelta);
		AntiAim.SetLBYOffset(LBYDelta);
	}
}

//Custom Delta -- End

//Custom Delta Jitter -- Start

function JitterDelta() {
	var JitterFakeMax = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Fake Max")
	var JitterFakeMin = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Fake Min")
	var JitterRealMax = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Real Max")
	var JitterRealMin = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Real Min")
	//Inverted
	var JitterFakeInvertedMax = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Inverted Fake Max")
	var JitterFakeInvertedMin = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Inverted Fake Min")
	var JitterRealInvertedMax = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Inverted Real Max")
	var JitterRealInvertedMin = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Inverted Real Min")
	
	var getFake = Math.floor(Math.random() * JitterFakeMin * JitterFakeMax)
	var getReal = Math.floor(Math.random() * JitterRealMax + JitterRealMin)
	
	getFakeInverted = Math.floor(Math.random() * JitterFakeInvertedMax * JitterFakeInvertedMin)
	getRealInverted = Math.floor(Math.random() * JitterRealInvertedMax * JitterRealInvertedMin)
	
	if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Jitter Key") && UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
		AntiAim.SetOverride(1);
		AntiAim.SetFakeOffset(0);
		AntiAim.SetRealOffset(getRealInverted);
		AntiAim.SetLBYOffset(getFakeInverted);
	}else if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Jitter Key")) {
		AntiAim.SetOverride(1);
		AntiAim.SetFakeOffset(0);
		AntiAim.SetRealOffset(getReal);
		AntiAim.SetLBYOffset(getFake);
	}
}

//Custom Delta Jitter -- End

//AntiAim.SetOverride(0) -- Start

function disableOverride() {
	AntiAim.SetOverride(0); //For disabling AntiAim Override when none of the keybinds are in use which is making it possible to use Legit AA values and Limit Fake Values at the same time and shit
}

//AntiAim.SetOverride(0) -- End

//Speed up DT - Start

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
    var reserve = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Double tap tolerance")

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

//Speed up DT -- End

//Reverse Freestanding -- Start

function Freestanding() {
	angles = Local.GetViewAngles();
    right = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1] + 60]);
    left = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1] - 60]);
	front = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1]]);
    diff = Math.abs(left - right);
	if (UI.GetValue("Freestanding Mode") != 0 && !UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
        if (front < 40) {
            if (UI.GetValue("Freestanding Mode") == 2 && UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Freestanding")) {
                setInvert(right < left);
                } else if (UI.GetValue("Freestanding Mode") == 1 && UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Freestanding")) {
				setInvert(left < right);
            }
		}
	}
}


//Reverse Freestanding -- End

//Math shit -- Start

function DEG2RAD(degree) {
    return (Math.PI / 180) * degree;
}

function ANGLE2VEC(angle) {
    pitch = angle[0];
    yaw = angle[1];
    return [Math.cos(DEG2RAD(pitch)) * Math.cos(DEG2RAD(yaw)), Math.cos(DEG2RAD(pitch)) * Math.sin(DEG2RAD(yaw)), -Math.sin(DEG2RAD(pitch))];
}

function getWallDistance(entity, angle) {
    vector = ANGLE2VEC(angle);
    origin = Entity.GetRenderOrigin(entity);
    origin[2] += Entity.GetProp(entity, "CBasePlayer", "m_vecViewOffset[2]")[0];
    end = [origin[0] + vector[0] * 8192, origin[1] + vector[1] * 8192, origin[2] + vector[2] * 8192];
    result = Trace.Line(entity, origin, end);
    if (result[1] != 1) {
        wall = [origin[0] + vector[0] * result[1] * 8192, origin[1] + vector[1] * result[1] * 8192, origin[2] + vector[2] * result[1] * 8192];
        distance = Math.sqrt(Math.pow(origin[0] - wall[0], 2) + Math.pow(origin[1] - wall[1], 2) + Math.pow(origin[2] - wall[2], 2));
        return distance;
    } else {
        return 0;
    }
}

//Math shit -- End

//Inverter -- Start

function setInvert(shouldInvert) {
    if (shouldInvert) {
        if (!UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
        }
    } else {
        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
        }
    }
}

//Inverter -- End

//Clamping -- Start

function adjustAngle(angle) {
    if (angle < 0) {
        angle = (90 + angle * (-1));
    } else if (angle > 0) {
        angle = (90 - angle);
    }

    return angle;
}

//Clamping -- End

//Menu checks -- Start
UI.AddLabel("-----------Doubletap Speed-----------")
UI.AddSliderInt("Double tap tolerance", 0, 3);

UI.AddCheckbox("Anti-Aim")
UI.AddHotkey("Legit AA")
UI.AddHotkey("Freestanding")
UI.AddDropdown("Freestanding Mode", ["Disabled", "Normal", "Reversed"]);
UI.AddCheckbox("Limit Fake")
UI.AddHotkey("Delta Key")
UI.AddSliderInt("LBY Delta", 0, 60)
UI.AddSliderInt("Real Delta", -60, 0)
UI.AddSliderInt("Inverted LBY Delta", -60, 0)
UI.AddSliderInt("Inverted Real Delta", 0, 60)
UI.AddCheckbox("Custom Delta Jitter")
UI.AddHotkey("Jitter Key")
UI.AddSliderInt("Jitter Fake Max", 0, 60)
UI.AddSliderInt("Jitter Fake Min", -60, 60)
UI.AddSliderInt("Jitter Real Max", -90, -1)
UI.AddSliderInt("Jitter Real Min", -90, -1)
UI.AddSliderInt("Jitter Inverted Fake Max", -60, 0)
UI.AddSliderInt("Jitter Inverted Fake Min", -60, 60)
UI.AddSliderInt("Jitter Inverted Real Max", 1, 90)
UI.AddSliderInt("Jitter Inverted Real Min", 1, 90)

UI.AddCheckbox("Indicator")
UI.AddCheckbox("Coming tmr or smth")

function checkmenu() {
	var menuitems = ("Misc", "JAVASCRIPT", "Script items")
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Anti-Aim") == false) {
		UI.SetEnabled(menuitems, "Legit AA", false);
		UI.SetEnabled(menuitems, "Freestanding Mode", false);
		UI.SetEnabled(menuitems, "Freestanding", false);
	}else{
		UI.SetEnabled(menuitems, "Legit AA", true);
		UI.SetEnabled(menuitems, "Freestanding", true);
		UI.SetEnabled(menuitems, "Freestanding Mode", true);
	}
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Limit Fake") == false) {
		UI.SetEnabled(menuitems, "Delta Key", false);
		UI.SetEnabled(menuitems, "LBY Delta", false);
		UI.SetEnabled(menuitems, "Inverted LBY Delta", false);
		UI.SetEnabled(menuitems, "Real Delta", false);
		UI.SetEnabled(menuitems, "Inverted Real Delta", false);
	}else{
		UI.SetEnabled(menuitems, "Delta Key", true);
		UI.SetEnabled(menuitems, "LBY Delta", true);
		UI.SetEnabled(menuitems, "Inverted LBY Delta", true);
		UI.SetEnabled(menuitems, "Real Delta", true);
		UI.SetEnabled(menuitems, "Inverted Real Delta", true);
	}
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Custom Delta Jitter") == false) {
		UI.SetEnabled(menuitems, "Jitter Key", false);
		UI.SetEnabled(menuitems, "Jitter Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Real Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Min", false);
	}else{
		UI.SetEnabled(menuitems, "Jitter Key", true);
		UI.SetEnabled(menuitems, "Jitter Fake Max", true);
		UI.SetEnabled(menuitems, "Jitter Real Max", true);
		UI.SetEnabled(menuitems, "Jitter Fake Min", true);
		UI.SetEnabled(menuitems, "Jitter Real Min", true);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Max", true);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Min", true);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Max", true);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Min", true);
	}
}

//Menu checks -- End

//Keybind list -- Start

const keybinds_x = UI.AddSliderInt("keybinds_x", 0, Global.GetScreenSize()[0])
const keybinds_y = UI.AddSliderInt("keybinds_y", 0, Global.GetScreenSize()[1])

function in_bounds(vec, x, y, x2, y2)
{
   return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

 function xy()
 {
     UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "keybinds_x", false)
     UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "keybinds_y", false)
 }
 xy();

function keybinds()
 {
	 
	 freetag = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Freestanding Mode")
	 if (freetag == 1) {
		 freestandingmode = "Normal"
	 }else if (freetag == 2) {
		 freestandingmode = "Reversed"
	 }
	 
	 if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Indicator") == true) {
     var h = [];
     const fontpixel = Render.AddFont( "Verdana", 7, 100);

     if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
       h.push("Slow motion")
     }
     if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
       h.push("Duck peek assist")
     }
     if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
       h.push("Quick peek")
     }
     if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
       h.push("Anti-Aim invert")
     }
     if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
       h.push("Safe point")
     }
     if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
       h.push("Body aim")
     }
     if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
       h.push("Double tap")
     }
     if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
       h.push("Hideshots")
     }
	 if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Legit AA")) {
       h.push("Legit AA")
     }
	 if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Freestanding") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Freestanding Mode")) {
       h.push(freestandingmode + " " + "Freestanding")
     }
	 if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Delta Key")) {
       h.push("Custom Delta")
     }
	 if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Jitter Key")) {
       h.push("Delta Jitter")
     }
	 if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Mindamage override")) {
       h.push("Damage Override")
     }

     const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_x"),
           y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_y");

     const rainbow = [
         Math.floor(Math.sin(Global.Realtime() * 2) * 127 + 128),
         Math.floor(Math.sin(Global.Realtime() * 2 + 2) * 127 + 128),
         Math.floor(Math.sin(Global.Realtime() * 2 + 4) * 127 + 128),
         255
     ];
     

     Render.FilledRect(x, y, 170, 20, [15, 15, 25, 255]); // the black-bluh-ish keybinds color - feel free to change it
     Render.StringCustom(x + 60, y + 4, 0, "hotkey list", [255, 255, 255, 255], fontpixel);
     Render.FilledRect(x, y, 170, 2, [80, 0, 80, 255]);
     Render.FilledRect(x, y + 20, 170, 20 + 15 * (h.length - 1), [15, 15, 15, 20]);
     for (i = 0; i < h.length; i++)
     {
        Render.StringCustom(x + 5, y + 23 + 15 * i, 0, h[i], [255, 255, 255, 255], fontpixel);
        Render.StringCustom(x + 123, y + 23 + 15 * i, 0, " ", [255, 255, 255, 255], fontpixel);
     }

     if (Global.IsKeyPressed(1)) {
         const mouse_pos = Global.GetCursorPosition();
         if (in_bounds(mouse_pos, x, y, x + 200, y + 30)) {
          if (UI.IsMenuOpen( ) == false)
            return;
             UI.SetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_x", mouse_pos[0] - 100);
             UI.SetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_y", mouse_pos[1] - 20);
         }
     }
	}

 }

Global.RegisterCallback("Draw", "keybinds");

//Keybind list -- End

//Selection -- Start

function drawselection() {
	//Selections
	// 0 = Rage
	// 1 = Limit Fake/Custom Delta
	// 2 = Anti-Aim
	// 3 = Jitter AA (fucking retarded ngl idfk how it works and i made it g_g)
	// 4 = Indicators
	var menuitems = ("Misc", "JAVASCRIPT", "Script items");
	var tag = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Selection");
	if(tag == 0) {
		UI.SetEnabled(menuitems, "Minimum Damage", true);
		UI.SetEnabled(menuitems, "Custom Delta Jitter", false);
		UI.SetEnabled(menuitems, "Anti-Aim", false);
		UI.SetEnabled(menuitems, "Legit AA", false);
		UI.SetEnabled(menuitems, "Limit Fake", false);
		UI.SetEnabled(menuitems, "Freestanding", false);
		UI.SetEnabled(menuitems, "Freestanding Mode", false);
		UI.SetEnabled(menuitems, "Delta Key", false);
		UI.SetEnabled(menuitems, "LBY Delta", false);
		UI.SetEnabled(menuitems, "Inverted LBY Delta", false);
		UI.SetEnabled(menuitems, "Real Delta", false);
		UI.SetEnabled(menuitems, "Inverted Real Delta", false);
		UI.SetEnabled(menuitems, "Indicator", false);
		UI.SetEnabled(menuitems, "Coming tmr or smth", false);
		UI.SetEnabled(menuitems, "Double tap tolerance", true);
		UI.SetEnabled(menuitems, "-----------Doubletap Speed-----------", true);
		UI.SetEnabled(menuitems, "Jitter Key", false);
		UI.SetEnabled(menuitems, "Jitter Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Real Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Min", false);
		
	}else if(tag == 1) {
		UI.SetEnabled(menuitems, "Weapon type", false);
		UI.SetEnabled(menuitems, "Minimum Damage", false);
		UI.SetEnabled(menuitems, "Mindamage override", false);
		UI.SetEnabled(menuitems, "Heavy Pistol mindamage override", false);
		UI.SetEnabled(menuitems, "Pistol mindamage override", false);
		UI.SetEnabled(menuitems, "Scout mindamage override", false);
		UI.SetEnabled(menuitems, "Auto mindamage override", false);
		UI.SetEnabled(menuitems, "Awp mindamage override", false);
		UI.SetEnabled(menuitems, "General mindamage override", false);
		UI.SetEnabled(menuitems, "Anti-Aim", false);
		UI.SetEnabled(menuitems, "Legit AA", false);
		UI.SetEnabled(menuitems, "Freestanding Mode", false);
		UI.SetEnabled(menuitems, "Freestanding", false);
		UI.SetEnabled(menuitems, "Custom Delta Jitter", false);
		UI.SetEnabled(menuitems, "Indicator", false);
		UI.SetEnabled(menuitems, "Coming tmr or smth", false);
		UI.SetEnabled(menuitems, "Double tap tolerance", false);
		UI.SetEnabled(menuitems, "-----------Doubletap Speed-----------", false);
		UI.SetEnabled(menuitems, "Jitter Key", false);
		UI.SetEnabled(menuitems, "Jitter Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Real Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Min", false);
		UI.SetEnabled(menuitems, "Limit Fake", true)
		
	}else if(tag == 2) {
		UI.SetEnabled(menuitems, "Weapon type", false);
		UI.SetEnabled(menuitems, "Minimum Damage", false);
		UI.SetEnabled(menuitems, "Mindamage override", false);
		UI.SetEnabled(menuitems, "Heavy Pistol mindamage override", false);
		UI.SetEnabled(menuitems, "Pistol mindamage override", false);
		UI.SetEnabled(menuitems, "Scout mindamage override", false);
		UI.SetEnabled(menuitems, "Auto mindamage override", false);
		UI.SetEnabled(menuitems, "Awp mindamage override", false);
		UI.SetEnabled(menuitems, "General mindamage override", false);
		UI.SetEnabled(menuitems, "Anti-Aim", true);
		UI.SetEnabled(menuitems, "Legit AA", true);
		UI.SetEnabled(menuitems, "Freestanding Mode", true);
		UI.SetEnabled(menuitems, "Freestanding", true);
		UI.SetEnabled(menuitems, "Limit Fake", false);
		UI.SetEnabled(menuitems, "Delta Key", false);
		UI.SetEnabled(menuitems, "LBY Delta", false);
		UI.SetEnabled(menuitems, "Inverted LBY Delta", false);
		UI.SetEnabled(menuitems, "Real Delta", false);
		UI.SetEnabled(menuitems, "Inverted Real Delta", false);
		UI.SetEnabled(menuitems, "Custom Delta Jitter", false);
		UI.SetEnabled(menuitems, "Indicator", false);
		UI.SetEnabled(menuitems, "Coming tmr or smth", false);
		UI.SetEnabled(menuitems, "Double tap tolerance", false);
		UI.SetEnabled(menuitems, "-----------Doubletap Speed-----------", false);
		UI.SetEnabled(menuitems, "Jitter Key", false);
		UI.SetEnabled(menuitems, "Jitter Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Real Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Min", false);
		
	}else if(tag == 3) { //Literally the most handicapped jitter system ever
		UI.SetEnabled(menuitems, "Weapon type", false);
		UI.SetEnabled(menuitems, "Minimum Damage", false);
		UI.SetEnabled(menuitems, "Mindamage override", false);
		UI.SetEnabled(menuitems, "Heavy Pistol mindamage override", false);
		UI.SetEnabled(menuitems, "Pistol mindamage override", false);
		UI.SetEnabled(menuitems, "Scout mindamage override", false);
		UI.SetEnabled(menuitems, "Auto mindamage override", false);
		UI.SetEnabled(menuitems, "Awp mindamage override", false);
		UI.SetEnabled(menuitems, "General mindamage override", false);
		UI.SetEnabled(menuitems, "Anti-Aim", false);
		UI.SetEnabled(menuitems, "Legit AA", false);
		UI.SetEnabled(menuitems, "Freestanding Mode", false);
		UI.SetEnabled(menuitems, "Freestanding", false);
		UI.SetEnabled(menuitems, "Limit Fake", false);
		UI.SetEnabled(menuitems, "Delta Key", false);
		UI.SetEnabled(menuitems, "LBY Delta", false);
		UI.SetEnabled(menuitems, "Inverted LBY Delta", false);
		UI.SetEnabled(menuitems, "Real Delta", false);
		UI.SetEnabled(menuitems, "Inverted Real Delta", false);
		UI.SetEnabled(menuitems, "Indicator", false);
		UI.SetEnabled(menuitems, "Coming tmr or smth", false);
		UI.SetEnabled(menuitems, "Double tap tolerance", false);
		UI.SetEnabled(menuitems, "-----------Doubletap Speed-----------", false);
		UI.SetEnabled(menuitems, "Custom Delta Jitter", true);
		
	}else if (tag == 4) {
		UI.SetEnabled(menuitems, "Weapon type", false);
		UI.SetEnabled(menuitems, "Minimum Damage", false);
		UI.SetEnabled(menuitems, "Mindamage override", false);
		UI.SetEnabled(menuitems, "Heavy Pistol mindamage override", false);
		UI.SetEnabled(menuitems, "Pistol mindamage override", false);
		UI.SetEnabled(menuitems, "Scout mindamage override", false);
		UI.SetEnabled(menuitems, "Auto mindamage override", false);
		UI.SetEnabled(menuitems, "Awp mindamage override", false);
		UI.SetEnabled(menuitems, "General mindamage override", false);
		UI.SetEnabled(menuitems, "Anti-Aim", false);
		UI.SetEnabled(menuitems, "Legit AA", false);
		UI.SetEnabled(menuitems, "Freestanding Mode", false);
		UI.SetEnabled(menuitems, "Freestanding", false);
		UI.SetEnabled(menuitems, "Limit Fake", false);
		UI.SetEnabled(menuitems, "Delta Key", false);
		UI.SetEnabled(menuitems, "LBY Delta", false);
		UI.SetEnabled(menuitems, "Inverted LBY Delta", false);
		UI.SetEnabled(menuitems, "Real Delta", false);
		UI.SetEnabled(menuitems, "Inverted Real Delta", false);
		UI.SetEnabled(menuitems, "Custom Delta Jitter", false);
		UI.SetEnabled(menuitems, "Indicator", true);
		UI.SetEnabled(menuitems, "Coming tmr or smth", true);
		UI.SetEnabled(menuitems, "Double tap tolerance", false);
		UI.SetEnabled(menuitems, "-----------Doubletap Speed-----------", false);
		UI.SetEnabled(menuitems, "Jitter Key", false);
		UI.SetEnabled(menuitems, "Jitter Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Real Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Min", false);
	}
}

//Selection -- End

//Callbacks -- Start

Cheat.RegisterCallback("Draw", "drawselection")
Cheat.RegisterCallback("Draw", "checkmenu")
Cheat.RegisterCallback('Draw',"on_draw" )
Cheat.RegisterCallback("Draw", "drawselection")
Cheat.RegisterCallback("CreateMove", "disableOverride")
Cheat.RegisterCallback("CreateMove", "JitterDelta")
Cheat.RegisterCallback("CreateMove", "legitaa")
Cheat.RegisterCallback("CreateMove", "LimFake")
Cheat.RegisterCallback("CreateMove","on_cm")
Cheat.RegisterCallback("CreateMove", "Freestanding")
UI.AddLabel("-------------Moonlight end-------------")

//Callbacks -- End