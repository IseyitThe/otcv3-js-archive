// ZeroDNA = Luna
// Script compiled/made by Luna
// If there arent credits for a feature then its because its selfcoded
// Credits to:
// illfated for mindmg (https://www.onetap.com/members/illfated.4180/)
// ggwproot for legit aa (https://www.onetap.com/threads/legit-aa-on-key.28500/)
// trickykaden for replying to a guy who once needed help with multidropdown boxes that helped me with dropdown boxes (https://www.onetap.com/threads/ui-addmultidropdown-i-need-help.25004/post-204436)
// Salvatore for double tap script (https://www.onetap.com/threads/increase-double-tap-speed.23814/)
// Rory for the autobuy script (https://www.onetap.com/threads/release-fastest-autobuy.13868/)
// Brotgeschmack for the fastduck on valve servers (https://www.onetap.com/threads/fast-duck-wingman-matchmaking.24254/)
//

// Start of Script selection
UI.AddDropdown("Selection", ["Rage", "Limit Fake", "Anti-Aim", "Custom Jitter", "Misc", "Help/Notes"]);
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
/*
function getRandom(min, max) {
  return Math.round(Math.random() * (JitterFakeMax - JitterFakeMin) + JitterFakeMin);
}
*/
function JitterDelta() { // start of function
	var JitterFakeMax = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Fake Max") // Grabs value from Slider
	var JitterFakeMin = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Fake Min") // Grabs value from Slider
	var JitterRealMax = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Real Max") // Grabs value from Slider
	var JitterRealMin = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Real Min") // Grabs value from Slider
	//Inverted
	var JitterFakeInvertedMax = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Inverted Fake Max") // Grabs value from Slider for inverted Value
	var JitterFakeInvertedMin = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Inverted Fake Min") // Grabs value from Slider for inverted Value
	var JitterRealInvertedMax = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Inverted Real Max") // Grabs value from Slider for inverted Value
	var JitterRealInvertedMin = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Inverted Real Min") // Grabs value from Slider for inverted Value
	
	var getFake = Math.floor(Math.random() * JitterFakeMin * JitterFakeMax); // Makes a shortcut for doing getting a random value from the fake Sliders
    var getReal = Math.round(Math.random() * (JitterRealMax - JitterRealMin) + JitterRealMin); // Makes a shortcut for doing getting a random value from the real Sliders

    var getFakeInverted = Math.floor(Math.random() * JitterFakeInvertedMax * JitterFakeInvertedMin);  // Makes a shortcut for doing getting a random value from the inverted fake Sliders
    var getRealInverted = Math.round(Math.random() * (JitterRealInvertedMax - JitterRealInvertedMin) + JitterRealInvertedMin);  // Makes a shortcut for doing getting a random value from the inverted real Sliders
	
/*	Accurate jitter(ever worse than the original)
	var getFake = Math.round(Math.random() * (JitterFakeMax - JitterFakeMin) + JitterFakeMin); // Makes a shortcut for doing getting a random value from the fake Sliders
	var getReal = Math.round(Math.random() * (JitterRealMax - JitterRealMin) + JitterRealMin); // Makes a shortcut for doing getting a random value from the real Sliders
	
	var getFakeInverted = Math.round(Math.random() * (JitterFakeInvertedMax - JitterFakeInvertedMin) + JitterFakeInvertedMin);  // Makes a shortcut for doing getting a random value from the inverted fake Sliders
	var getRealInverted = Math.round(Math.random() * (JitterRealInvertedMax - JitterRealInvertedMin) + JitterRealInvertedMin); // Makes a shortcut for doing getting a random value from the inverted real Sliders
*/	
	if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Jitter Key") && UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) { //checks if the jitter and antiaim inverter hotkeys are being pressed
		AntiAim.SetOverride(1); //enables antiaim override
		AntiAim.SetFakeOffset(0); //Sets the fake offset to 0
		AntiAim.SetRealOffset(getRealInverted); // Sets the real body value to to the inverted real Math.random answer
		AntiAim.SetLBYOffset(getFakeInverted); // Sets the fake body value to to the inverted fake Math.random answer
	}else if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Jitter Key")) { //checks if only the jitter hotkey is being pressed and will the do following for none inverted antiaim
		AntiAim.SetOverride(1); //enables antiaim override
		AntiAim.SetFakeOffset(0); //Sets the fake offset to 0
		AntiAim.SetRealOffset(getReal); // Sets the real body value to to the inverted real Math.random answer
		AntiAim.SetLBYOffset(getFake);  // Sets the fake body value to to the inverted fake Math.random answer
	}//end of none inverted aa
}//ends of function


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

//Faster(?) autobuy -- Start

var run = false;
var estimate = 0;
var firstBuy = 0;
var alias = [
    ["awp"],
    ["ssg08"],
    ["scar20", "g3sg1"],
	["disabled"]
]

function roundEnded() {
    run = true;
    estimate = Globals.Curtime()+Convar.GetInt("mp_round_restart_delay");
    firstBuy = 0;
}

function purchase(index) {
    alias[index].forEach(function(v) { Cheat.ExecuteCommand("buy "+v); })
    run = false;
}

function onDraw2() {
    run && Globals.Curtime()+(Local.Latency()/1000) >= estimate && purchase(UI.GetValue.apply(this, dropdown));
}

function purchased() {
    if (firstBuy == 0) firstBuy = Globals.Curtime()-estimate;
    if (!Entity.GetEntityFromUserID(Event.GetInt("userid")) || firstBuy == -1) return;

    Cheat.Print("The first item of the round was purchased at " + firstBuy + "s, you purchased at " + (Globals.Curtime()-estimate) + "s.\n");
    firstBuy = -1;
}

//Faster(?) autobuy -- End

Cheat.RegisterCallback("round_end", "roundEnded");
Cheat.RegisterCallback("Draw", "onDraw2");
Cheat.RegisterCallback("item_purchase", "purchased");

//Safe r8 (still working on) -- Start

function safer8() {
	local_weapon_id = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CBaseAttributableItem", "m_iItemDefinitionIndex");
    local_origin = Entity.GetProp(Entity.GetLocalPlayer(), "CBaseEntity", "m_vecOrigin");
    if (UI.GetValue("Safe Revolver")) {
        if(local_weapon_id === 262208) {
            in_act_sr = Math.round(1/Globals.Frametime()) < 65 ? true : false;
            UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", Math.round(1/Globals.Frametime()) < 65 ? false : true);
        }
        else {
            in_act_sr = false;
            UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", true);
        }
    }
}

//Safe r8 (still working on) -- End

//Force head -- Start

//Storing User's Chosen Hitboxes.
autoHitboxes = (UI.GetValue("Rage", "AUTOSNIPER", "Hitboxes"))
awpHitboxes = (UI.GetValue("Rage", "AWP", "Hitboxes"))
scoutHitboxes = (UI.GetValue("Rage", "SCOUT", "Hitboxes"))
hvypistolHitboxes = (UI.GetValue("Rage", "HEAVY PISTOL", "Hitboxes"))
pistolHitboxes = (UI.GetValue("Rage", "PISTOL", "Hitboxes"))
generalHitboxes = (UI.GetValue("Rage", "GENERAL", "Hitboxes"))

var original = true;

UI.AddCheckbox("Force Head on Key")
UI.AddHotkey("Head on Key")

function forceheadonkey() {
    if (World.GetServerString() !== "") { 
        if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Force Head on Key")) {
            
            var forceHeadOnly = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Head on Key")
            
            //Detecting if the hotkeys are pressed, if not make a small indicator in the bottom left corner.
            if (forceHeadOnly) {
                if (original === true) {
                    autoHitboxes = (UI.GetValue("Rage", "AUTOSNIPER", "Hitboxes"))
                    awpHitboxes = (UI.GetValue("Rage", "AWP", "Hitboxes"))
                    scoutHitboxes = (UI.GetValue("Rage", "SCOUT", "Hitboxes"))
                    hvypistolHitboxes = (UI.GetValue("Rage", "HEAVY PISTOL", "Hitboxes"))
                    pistolHitboxes = (UI.GetValue("Rage", "PISTOL", "Hitboxes"))
                    generalHitboxes = (UI.GetValue("Rage", "GENERAL", "Hitboxes"))
                    original = false
                }
                UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Hitboxes", 1)
                UI.SetValue("Rage", "AWP", "Hitboxes", 1)
                UI.SetValue("Rage", "SCOUT", "Hitboxes", 1)
                UI.SetValue("Rage", "HEAVY PISTOL", "Hitboxes", 1)
                UI.SetValue("Rage", "PISTOL", "Hitboxes", 1)
                UI.SetValue("Rage", "GENERAL", "Hitboxes", 1)
            } else {
                if (original !== true) {
                    UI.SetValue("Rage", "AUTOSNIPER", "Hitboxes", autoHitboxes)
                    UI.SetValue("Rage", "AWP", "Hitboxes", awpHitboxes)
                    UI.SetValue("Rage", "SCOUT", "Hitboxes", scoutHitboxes)
                    UI.SetValue("Rage", "HEAVY PISTOL", "Hitboxes", hvypistolHitboxes)
                    UI.SetValue("Rage", "PISTOL", "Hitboxes", pistolHitboxes)
                    UI.SetValue("Rage", "GENERAL", "Hitboxes", generalHitboxes)
                    original = true;
                }
            }
        }
    }
}

//Force Head -- End

//Break Prediction -- Start

//Soon

//Break Prediction -- End

//Fast duck for MM -- Start

function on_create_move()
{
    var buttons = UserCMD.GetButtons();
    
    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Fast duck"))
        UserCMD.SetButtons(buttons | (1 << 22));
}

//Fast duck for MM -- End

//Prefer X on DT

function preferx() {
	var setsp = ("Accuracy", "Prefer safe point")
	var setbaim = ("Accuracy", "Prefer body aim")
	var getdt = UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")
	var tagdt = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Doubletap")
	if(tagdt == 1 && getdt) {
		//Enable Prefer Body Aim//
		UI.SetValue("Rage", "GENERAL", setbaim, 1);
		UI.SetValue("Rage", "PISTOL", setbaim, 1);
		UI.SetValue("Rage", "AUTOSNIPER", setbaim, 1);
		//Disable Prefer Safe Point//
		UI.SetValue("Rage", "GENERAL", setsp, 0);
		UI.SetValue("Rage", "PISTOL", setsp, 0);
		UI.SetValue("Rage", "AUTOSNIPER", setsp, 0);
	}else if(tagdt == 2 && getdt) {
		UI.SetValue("Rage", "GENERAL", setbaim, 0);
		UI.SetValue("Rage", "PISTOL", setbaim, 0);
		UI.SetValue("Rage", "AUTOSNIPER", setbaim, 0);
		//Enable Prefer Safe Point//
		UI.SetValue("Rage", "GENERAL", setsp, 1);
		UI.SetValue("Rage", "PISTOL", setsp, 1);
		UI.SetValue("Rage", "AUTOSNIPER", setsp, 1);
	}else if(tagdt == 3 && getdt) {
		UI.SetValue("Rage", "GENERAL", setbaim, 0);
		UI.SetValue("Rage", "PISTOL", setbaim, 0);
		UI.SetValue("Rage", "HEAVY PISTOL", setbaim, 0);
		UI.SetValue("Rage", "AUTOSNIPER", setbaim, 0);
		//Enable Prefer Safe Point//
		UI.SetValue("Rage", "GENERAL", setsp, 1);
		UI.SetValue("Rage", "PISTOL", setsp, 1);
		UI.SetValue("Rage", "HEAVY PISTOL", setsp, 1);
		UI.SetValue("Rage", "AUTOSNIPER", setsp, 1);
	}else if(tagdt == 4 && getdt) {
		UI.SetValue("Rage", "GENERAL", setbaim, 1);
		UI.SetValue("Rage", "PISTOL", setbaim, 1);
		UI.SetValue("Rage", "HEAVY PISTOL", setbaim, 1);
		UI.SetValue("Rage", "AUTOSNIPER", setbaim, 1);
		//Enable Prefer Safe Point//
		UI.SetValue("Rage", "GENERAL", setsp, 0);
		UI.SetValue("Rage", "PISTOL", setsp, 0);
		UI.SetValue("Rage", "HEAVY PISTOL", setsp, 0);
		UI.SetValue("Rage", "AUTOSNIPER", setsp, 0);
	}
}

//Prefer X on dt -- End

//Menu checks -- Start
UI.AddLabel("-----------Doubletap Stuff-----------")
UI.AddSliderInt("Double tap tolerance", 0, 3);
UI.AddDropdown("Doubletap", ["None", "Prefer baim on DT", "Prefer Safe Point on DT", "Include Heavy (SP)", "Include Heavy (BM)"]);

UI.AddCheckbox("Anti-Aim")
UI.AddHotkey("Legit AA")
UI.AddHotkey("Break Prediction - Not released yet")
UI.AddCheckbox("Fast duck")
UI.AddHotkey("Freestanding")
UI.AddDropdown("Freestanding Mode", ["Disabled", "Normal", "Reversed"]);
UI.AddCheckbox("Safe Revolver")
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
UI.AddSliderInt("Jitter Inverted Real Max", 0, 90)
UI.AddSliderInt("Jitter Inverted Real Min", 0, 90)

UI.AddCheckbox("Indicator")
UI.AddCheckbox("Autobuy")
var dropdown = UI.AddDropdown("Auto buy", ["AWP", "Scout", "Auto", "Disabled"]);

function checkmenu() {
	var menuitems = ("Misc", "JAVASCRIPT", "Script items")
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Anti-Aim") == false) {
		UI.SetEnabled(menuitems, "Legit AA", false);
		UI.SetEnabled(menuitems, "Freestanding Mode", false);
		UI.SetEnabled(menuitems, "Freestanding", false);
		UI.SetEnabled(menuitems, "Break Prediction - Not released yet", false);
		UI.SetEnabled(menuitems, "Fast duck", false);
	}else{
		UI.SetEnabled(menuitems, "Legit AA", true);
		UI.SetEnabled(menuitems, "Freestanding", true);
		UI.SetEnabled(menuitems, "Freestanding Mode", true);
		UI.SetEnabled(menuitems, "Break Prediction - Not released yet", true);
		UI.SetEnabled(menuitems, "Fast duck", true);
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
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Force Head on Key") == false) {
		UI.SetEnabled(menuitems, "Head on Key", false);
	}else{
		UI.SetEnabled(menuitems, "Head on Key", true);
	}
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Autobuy") == false) {
		UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Auto buy", false);
	}else{
		UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Auto buy", true);
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
	 if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Head on Key")) {
       h.push("Force Head")
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
		UI.SetEnabled(menuitems, "Autobuy", false);
		UI.SetEnabled(menuitems, "Double tap tolerance", true);
		UI.SetEnabled(menuitems, "-----------Doubletap Stuff-----------", true);
		UI.SetEnabled(menuitems, "Doubletap",true);
		UI.SetEnabled(menuitems, "Jitter Key", false);
		UI.SetEnabled(menuitems, "Jitter Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Real Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Min", false);
		UI.SetEnabled(menuitems, "Autobuy", false);
		UI.SetEnabled(menuitems, "Auto buy", false);
		UI.SetEnabled(menuitems, "Force Head on Key", true);
		UI.SetEnabled(menuitems, "Break Prediction - Not released yet", false);
		UI.SetEnabled(menuitems, "Fast duck", false);
		//Notes shit//
		UI.SetEnabled(menuitems, "--------------Safe Revolver--------------", false);
		UI.SetEnabled(menuitems, "Disable fakelag if", false);
		UI.SetEnabled(menuitems, "fps is lower than tick", false);
		UI.SetEnabled(menuitems, "------------Double tap stuff-------------", false);
		UI.SetEnabled(menuitems, "Lower DT Slider, Faster DT 0 = Fastest", false);
		UI.SetEnabled(menuitems, "-------------Prefer X on DT-------------", false);
		UI.SetEnabled(menuitems, "Will enable a Mode depending on", false);
		UI.SetEnabled(menuitems, "what you've set the mode to", false);
		UI.SetEnabled(menuitems, "----------Heavy Modes on DT----------", false);
		UI.SetEnabled(menuitems, "Include Heavy means that it'll enable", false);
		UI.SetEnabled(menuitems, "On heavy pistols too", false);
		UI.SetEnabled(menuitems, "This has been disabled due to some", false);
		UI.SetEnabled(menuitems, "ppl are using revolvers", false);
		UI.SetEnabled(menuitems, "BM = Body aim || SP = Safe Point", false);
		UI.SetEnabled(menuitems, "--------------Custom Jitter--------------", false);
		UI.SetEnabled(menuitems, "I mean, try to use it.", false);
		UI.SetEnabled(menuitems, "It has been set up in a", false);
		UI.SetEnabled(menuitems, "very dumb way because it works", false);
		
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
		UI.SetEnabled(menuitems, "Autobuy", false);
		UI.SetEnabled(menuitems, "Double tap tolerance", false);
		UI.SetEnabled(menuitems, "-----------Doubletap Stuff-----------", false);
		UI.SetEnabled(menuitems, "Doubletap", false);
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
		UI.SetEnabled(menuitems, "Safe Revolver", false);
		UI.SetEnabled(menuitems, "Autobuy", false);
		UI.SetEnabled(menuitems, "Auto buy", false);
		UI.SetEnabled(menuitems, "Head on Key", false);
		UI.SetEnabled(menuitems, "Force Head on Key", false);
		UI.SetEnabled(menuitems, "Break Prediction - Not released yet", false);
		UI.SetEnabled(menuitems, "Fast duck", false);
		//Notes shit//
		UI.SetEnabled(menuitems, "--------------Safe Revolver--------------", false);
		UI.SetEnabled(menuitems, "Disable fakelag if", false);
		UI.SetEnabled(menuitems, "fps is lower than tick", false);
		UI.SetEnabled(menuitems, "------------Double tap stuff-------------", false);
		UI.SetEnabled(menuitems, "Lower DT Slider, Faster DT 0 = Fastest", false);
		UI.SetEnabled(menuitems, "-------------Prefer X on DT-------------", false);
		UI.SetEnabled(menuitems, "Will enable a Mode depending on", false);
		UI.SetEnabled(menuitems, "what you've set the mode to", false);
		UI.SetEnabled(menuitems, "----------Heavy Modes on DT----------", false);
		UI.SetEnabled(menuitems, "Include Heavy means that it'll enable", false);
		UI.SetEnabled(menuitems, "On heavy pistols too", false);
		UI.SetEnabled(menuitems, "This has been disabled due to some", false);
		UI.SetEnabled(menuitems, "ppl are using revolvers", false);
		UI.SetEnabled(menuitems, "BM = Body aim || SP = Safe Point", false);
		UI.SetEnabled(menuitems, "--------------Custom Jitter--------------", false);
		UI.SetEnabled(menuitems, "I mean, try to use it.", false);
		UI.SetEnabled(menuitems, "It has been set up in a", false);
		UI.SetEnabled(menuitems, "very dumb way because it works", false);
		
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
		UI.SetEnabled(menuitems, "Limit Fake", false);
		UI.SetEnabled(menuitems, "Delta Key", false);
		UI.SetEnabled(menuitems, "LBY Delta", false);
		UI.SetEnabled(menuitems, "Inverted LBY Delta", false);
		UI.SetEnabled(menuitems, "Real Delta", false);
		UI.SetEnabled(menuitems, "Inverted Real Delta", false);
		UI.SetEnabled(menuitems, "Custom Delta Jitter", false);
		UI.SetEnabled(menuitems, "Indicator", false);
		UI.SetEnabled(menuitems, "Autobuy", false);
		UI.SetEnabled(menuitems, "Double tap tolerance", false);
		UI.SetEnabled(menuitems, "-----------Doubletap Stuff-----------", false);
		UI.SetEnabled(menuitems, "Doubletap", false);
		UI.SetEnabled(menuitems, "Jitter Key", false);
		UI.SetEnabled(menuitems, "Jitter Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Real Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Min", false);
		UI.SetEnabled(menuitems, "Safe Revolver", false);
		UI.SetEnabled(menuitems, "Autobuy", false);
		UI.SetEnabled(menuitems, "Auto buy", false);
		UI.SetEnabled(menuitems, "Head on Key", false);
		UI.SetEnabled(menuitems, "Force Head on Key", false);
		//Notes shit//
		UI.SetEnabled(menuitems, "--------------Safe Revolver--------------", false);
		UI.SetEnabled(menuitems, "Disable fakelag if", false);
		UI.SetEnabled(menuitems, "fps is lower than tick", false);
		UI.SetEnabled(menuitems, "------------Double tap stuff-------------", false);
		UI.SetEnabled(menuitems, "Lower DT Slider, Faster DT 0 = Fastest", false);
		UI.SetEnabled(menuitems, "-------------Prefer X on DT-------------", false);
		UI.SetEnabled(menuitems, "Will enable a Mode depending on", false);
		UI.SetEnabled(menuitems, "what you've set the mode to", false);
		UI.SetEnabled(menuitems, "----------Heavy Modes on DT----------", false);
		UI.SetEnabled(menuitems, "Include Heavy means that it'll enable", false);
		UI.SetEnabled(menuitems, "On heavy pistols too", false);
		UI.SetEnabled(menuitems, "This has been disabled due to some", false);
		UI.SetEnabled(menuitems, "ppl are using revolvers", false);
		UI.SetEnabled(menuitems, "BM = Body aim || SP = Safe Point", false);
		UI.SetEnabled(menuitems, "--------------Custom Jitter--------------", false);
		UI.SetEnabled(menuitems, "I mean, try to use it.", false);
		UI.SetEnabled(menuitems, "It has been set up in a", false);
		UI.SetEnabled(menuitems, "very dumb way because it works", false);
		
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
		UI.SetEnabled(menuitems, "Autobuy", false);
		UI.SetEnabled(menuitems, "Double tap tolerance", false);
		UI.SetEnabled(menuitems, "-----------Doubletap Stuff-----------", false);
		UI.SetEnabled(menuitems, "Doubletap", false);
		UI.SetEnabled(menuitems, "Custom Delta Jitter", true);
		UI.SetEnabled(menuitems, "Safe Revolver", false);
		UI.SetEnabled(menuitems, "Autobuy", false);
		UI.SetEnabled(menuitems, "Auto buy", false);
		UI.SetEnabled(menuitems, "Head on Key", false);
		UI.SetEnabled(menuitems, "Force Head on Key", false);
		UI.SetEnabled(menuitems, "Break Prediction - Not released yet", false);
		UI.SetEnabled(menuitems, "Fast duck", false);
		//Notes shit//
		UI.SetEnabled(menuitems, "--------------Safe Revolver--------------", false);
		UI.SetEnabled(menuitems, "Disable fakelag if", false);
		UI.SetEnabled(menuitems, "fps is lower than tick", false);
		UI.SetEnabled(menuitems, "------------Double tap stuff-------------", false);
		UI.SetEnabled(menuitems, "Lower DT Slider, Faster DT 0 = Fastest", false);
		UI.SetEnabled(menuitems, "-------------Prefer X on DT-------------", false);
		UI.SetEnabled(menuitems, "Will enable a Mode depending on", false);
		UI.SetEnabled(menuitems, "what you've set the mode to", false);
		UI.SetEnabled(menuitems, "----------Heavy Modes on DT----------", false);
		UI.SetEnabled(menuitems, "Include Heavy means that it'll enable", false);
		UI.SetEnabled(menuitems, "On heavy pistols too", false);
		UI.SetEnabled(menuitems, "This has been disabled due to some", false);
		UI.SetEnabled(menuitems, "ppl are using revolvers", false);
		UI.SetEnabled(menuitems, "BM = Body aim || SP = Safe Point", false);
		UI.SetEnabled(menuitems, "--------------Custom Jitter--------------", false);
		UI.SetEnabled(menuitems, "I mean, try to use it.", false);
		UI.SetEnabled(menuitems, "It has been set up in a", false);
		UI.SetEnabled(menuitems, "very dumb way because it works", false);
		
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
		UI.SetEnabled(menuitems, "Autobuy", true);
		UI.SetEnabled(menuitems, "Double tap tolerance", false);
		UI.SetEnabled(menuitems, "-----------Doubletap Stuff-----------", false);
		UI.SetEnabled(menuitems, "Doubletap", false);
		UI.SetEnabled(menuitems, "Jitter Key", false);
		UI.SetEnabled(menuitems, "Jitter Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Real Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Min", false);
		UI.SetEnabled(menuitems, "Safe Revolver", false);
		UI.SetEnabled(menuitems, "Head on Key", false);
		UI.SetEnabled(menuitems, "Force Head on Key", false);
		UI.SetEnabled(menuitems, "Break Prediction - Not released yet", false);
		UI.SetEnabled(menuitems, "Fast duck", false);
		//Notes shit//
		UI.SetEnabled(menuitems, "--------------Safe Revolver--------------", false);
		UI.SetEnabled(menuitems, "Disable fakelag if", false);
		UI.SetEnabled(menuitems, "fps is lower than tick", false);
		UI.SetEnabled(menuitems, "------------Double tap stuff-------------", false);
		UI.SetEnabled(menuitems, "Lower DT Slider, Faster DT 0 = Fastest", false);
		UI.SetEnabled(menuitems, "-------------Prefer X on DT-------------", false);
		UI.SetEnabled(menuitems, "Will enable a Mode depending on", false);
		UI.SetEnabled(menuitems, "what you've set the mode to", false);
		UI.SetEnabled(menuitems, "----------Heavy Modes on DT----------", false);
		UI.SetEnabled(menuitems, "Include Heavy means that it'll enable", false);
		UI.SetEnabled(menuitems, "On heavy pistols too", false);
		UI.SetEnabled(menuitems, "This has been disabled due to some", false);
		UI.SetEnabled(menuitems, "ppl are using revolvers", false);
		UI.SetEnabled(menuitems, "BM = Body aim || SP = Safe Point", false);
		UI.SetEnabled(menuitems, "--------------Custom Jitter--------------", false);
		UI.SetEnabled(menuitems, "I mean, try to use it.", false);
		UI.SetEnabled(menuitems, "It has been set up in a", false);
		UI.SetEnabled(menuitems, "very dumb way because it works", false);
	}else if(tag == 5) {
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
		UI.SetEnabled(menuitems, "Indicator", false);
		UI.SetEnabled(menuitems, "Autobuy", false);
		UI.SetEnabled(menuitems, "Double tap tolerance", false);
		UI.SetEnabled(menuitems, "-----------Doubletap Stuff-----------", false);
		UI.SetEnabled(menuitems, "Doubletap", false);
		UI.SetEnabled(menuitems, "Jitter Key", false);
		UI.SetEnabled(menuitems, "Jitter Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Real Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Fake Min", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Max", false);
		UI.SetEnabled(menuitems, "Jitter Inverted Real Min", false);
		UI.SetEnabled(menuitems, "Safe Revolver", false);
		UI.SetEnabled(menuitems, "Auto buy", false);
		UI.SetEnabled(menuitems, "Head on Key", false);
		UI.SetEnabled(menuitems, "Force Head on Key", false);
		UI.SetEnabled(menuitems, "Break Prediction - Not released yet", false);
		UI.SetEnabled(menuitems, "Fast duck", false);
		//Notes shit//
		UI.SetEnabled(menuitems, "--------------Safe Revolver--------------", true);
		UI.SetEnabled(menuitems, "Disable fakelag if", true);
		UI.SetEnabled(menuitems, "fps is lower than tick", true);
		UI.SetEnabled(menuitems, "------------Double tap stuff-------------", true);
		UI.SetEnabled(menuitems, "Lower DT Slider, Faster DT 0 = Fastest", true);
		UI.SetEnabled(menuitems, "-------------Prefer X on DT-------------", true);
		UI.SetEnabled(menuitems, "Will enable a Mode depending on", true);
		UI.SetEnabled(menuitems, "what you've set the mode to", true);
		UI.SetEnabled(menuitems, "----------Heavy Modes on DT----------", true);
		UI.SetEnabled(menuitems, "Include Heavy means that it'll enable", true);
		UI.SetEnabled(menuitems, "On heavy pistols too", true);
		UI.SetEnabled(menuitems, "This has been disabled due to some", true);
		UI.SetEnabled(menuitems, "ppl are using revolvers", true);
		UI.SetEnabled(menuitems, "BM = Body aim || SP = Safe Point", true);
		UI.SetEnabled(menuitems, "--------------Custom Jitter--------------", true);
		UI.SetEnabled(menuitems, "I mean, try to use it.", true);
		UI.SetEnabled(menuitems, "It has been set up in a", true);
		UI.SetEnabled(menuitems, "very dumb way because it works", true);
	}
}

//Selection -- End

//Notes -- Start

var l1 = UI.AddLabel

l1("--------------Safe Revolver--------------")
l1("Disable fakelag if")
l1("fps is lower than tick")
l1("------------Double tap stuff-------------")
l1("Lower DT Slider, Faster DT 0 = Fastest")
l1("-------------Prefer X on DT-------------")
l1("Will enable a Mode depending on")
l1("what you've set the mode to")
l1("----------Heavy Modes on DT----------")
l1("Include Heavy means that it'll enable")
l1("On heavy pistols too")
l1("This has been disabled due to some")
l1("ppl are using revolvers")
l1("BM = Body aim || SP = Safe Point")
l1("--------------Custom Jitter--------------")
l1("I mean, try to use it.")
l1("It has been set up in a")
l1 ("very dumb way because it works")
//Notes -- End

//Callbacks -- Start

Cheat.RegisterCallback("Draw", "drawselection")
Cheat.RegisterCallback("Draw", "checkmenu")
Cheat.RegisterCallback('Draw',"on_draw" )
Cheat.RegisterCallback("Draw", "drawselection")
Cheat.RegisterCallback("Draw", "forceheadonkey")
Cheat.RegisterCallback("CreateMove", "disableOverride")
Cheat.RegisterCallback("CreateMove", "JitterDelta")
Cheat.RegisterCallback("CreateMove", "legitaa")
Cheat.RegisterCallback("CreateMove", "LimFake")
Cheat.RegisterCallback("CreateMove","on_cm")
Cheat.RegisterCallback("CreateMove", "on_create_move")
Cheat.RegisterCallback("CreateMove", "safer8")
Cheat.RegisterCallback("Draw", "preferx")
Cheat.RegisterCallback("CreateMove", "Freestanding")
UI.AddLabel("-------------Moonlight end-------------")

//Callbacks -- End