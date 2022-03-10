//load js
user = Cheat.GetUsername();
Cheat.PrintChat("\x10 Hello, " + user);
Cheat.Print("Edit: ");
Cheat.PrintColor([255, 0, 0, 255], "mafia $" + "\n");

//GUI
UI.AddLabel("___________________________________________");
UI.AddLabel("                 Creator-Yaw                ");
UI.AddDropdown("Menu:", ["Information", "Rage", "Anti-Aim", "Misc"]);
UI.AddLabel("Edit by Creative");
UI.AddLabel("discord: Creative #3802");
UI.AddCheckbox("Peek Helper for AWP/Scout");
UI.AddCheckbox("Adaptive Auto-Scope");
UI.AddCheckbox("Safe point on limps");
UI.AddHotkey("Ping Spike");
UI.AddHotkey("Damage Override");
UI.AddSliderInt("value:", 1, 130);
UI.AddCheckbox("Fluctate Fake-Lag");
UI.AddCheckbox("Switch with granade");
UI.AddCheckbox("Break-Leg");
UI.AddHotkey("Low delta");
UI.AddHotkey("Legit Anti-Aim");
UI.AddHotkey("Freestanding");
UI.AddCheckbox("Indicator's");
UI.AddCheckbox("Keybinds");
UI.AddCheckbox("Watermark");
UI.AddColorPicker("color (indicator)");
UI.AddColorPicker("color (keybind)");
UI.AddColorPicker("color (watermark)");
UI.AddColorPicker("selected arrow");
UI.AddSliderInt("Turn speed", 1, 2);
UI.AddSliderInt( "Aspect ratio", 0, 500 );
UI.AddLabel("___________________________________________");



//SetEnabled
function menu() {
	if (UI.IsMenuOpen() == true) {
		if (UI.GetValue("Script items", "Menu:") ==  0) {
			UI.SetEnabled("Script items", "Edit by Creative", true);
			UI.SetEnabled("Script items", "discord: Creative #3802", true);
		} else {
			UI.SetEnabled("Script items", "Edit by Creative", false);
			UI.SetEnabled("Script items", "discord: Creative #3802",false);			
		}		
		if (UI.GetValue("Script items", "Menu:") ==  1) {
			UI.SetEnabled("Script items", "Damage Override", true);
			UI.SetEnabled("Script items", "value:", true);
			UI.SetEnabled("Script items", "Ping Spike", true);
			UI.SetEnabled("Script items", "Safe point on limps", true);
			UI.SetEnabled("Script items", "Adaptive Auto-Scope", true);
			UI.SetEnabled("Script items", "Peek Helper for AWP/Scout", true);			
		} else {
			UI.SetEnabled("Script items", "Damage Override", false);
			UI.SetEnabled("Script items", "value:",false);
			UI.SetEnabled("Script items", "Ping Spike", false);
			UI.SetEnabled("Script items", "Safe point on limps", false);
			UI.SetEnabled("Script items", "Adaptive Auto-Scope", false);
			UI.SetEnabled("Script items", "Peek Helper for AWP/Scout", false);			
		}
		if (UI.GetValue("Script items", "Menu:") ==  2) {
			UI.SetEnabled("Script items", "Low delta", true);
			UI.SetEnabled("Script items", "Break-Leg", true);
            UI.SetEnabled("Script items", "Freestanding", true);
            UI.SetEnabled("Script items", "Legit Anti-Aim", true);
			UI.SetEnabled("Script items", "Switch with granade", true);
			UI.SetEnabled("Script items", "Fluctate Fake-Lag", true);			
		} else {
			UI.SetEnabled("Script items", "Low delta", false);
			UI.SetEnabled("Script items", "Break-Leg", false);
			UI.SetEnabled("Script items", "Freestanding", false);
            UI.SetEnabled("Script items", "Legit Anti-Aim", false);
			UI.SetEnabled("Script items", "Switch with granade", false);
			UI.SetEnabled("Script items", "Fluctate Fake-Lag", false);			
		}				
		if (UI.GetValue("Script items", "Menu:") ==  3) {
			UI.SetEnabled("Script items", "Indicator's", true);
			UI.SetEnabled("Script items", "color (indicator)", true);
			UI.SetEnabled("Script items", "selected arrow", true);
			UI.SetEnabled("Script items", "Watermark", true);
			UI.SetEnabled("Script items", "color (watermark)", true);
			UI.SetEnabled("Script items", "Aspect ratio", true);
			UI.SetEnabled("Script items", "Keybinds", true);
			UI.SetEnabled("Script items", "color (keybind)", true);
            UI.SetEnabled("Script items", "Turn speed", true);			
		} else {
			UI.SetEnabled("Script items", "Indicator's", false);
			UI.SetEnabled("Script items", "color (indicator)", false);			
			UI.SetEnabled("Script items", "selected arrow", false);
			UI.SetEnabled("Script items", "Watermark", false);
			UI.SetEnabled("Script items", "color (watermark)", false);
			UI.SetEnabled("Script items", "Aspect ratio", false);
			UI.SetEnabled("Script items", "Keybinds", false);
			UI.SetEnabled("Script items", "color (keybind)", false);
            UI.SetEnabled("Script items", "Turn speed", false);			
		}
		if (UI.GetValue("Script items", "Menu:") ==  3 && UI.GetValue("Script items", "Indicator's", true)) {
			UI.SetEnabled("Script items", "color (indicator)", true);
			UI.SetEnabled("Script items", "selected arrow", true);
		} else {
			UI.SetEnabled("Script items", "color (indicator)", false);			
			UI.SetEnabled("Script items", "selected arrow", false);
		}
		if (UI.GetValue("Script items", "Menu:") ==  3 && UI.GetValue("Script items", "Watermark", true)) {
			UI.SetEnabled("Script items", "color (watermark)", true);
		} else {
			UI.SetEnabled("Script items", "color (watermark)", false);
		}
		if (UI.GetValue("Script items", "Menu:") ==  3 && UI.GetValue("Script items", "Keybinds", true)) {
			UI.SetEnabled("Script items", "color (keybind)", true);
		} else {
			UI.SetEnabled("Script items", "color (keybind)", false);
		}		
	}
}

Cheat.RegisterCallback("Draw", "menu");

//function
//RAGE


//Peek Helper
//var
autostopmodescout = UI.GetValue("Rage", "SCOUT", "Accuracy", "Auto stop mode");
autostopmodeawp = UI.GetValue("Rage", "AWP", "Accuracy", "Auto stop mode");
safepointscout = UI.GetValue("Rage", "SCOUT", "Accuracy", "Prefer safe point");
safepointawp = UI.GetValue("Rage", "AWP", "Accuracy", "Prefer safe point");
bodyaimscout = UI.GetValue("Rage", "SCOUT", "Accuracy", "Prefer body aim");
bodyaimawp = UI.GetValue("Rage", "AWP", "Accuracy", "Prefer body aim");

function helper() {
	
	if (UI.GetValue("Script items", "Peek Helper for AWP/Scout", true)) {
		if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek") && UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")) {
                UI.SetValue("Rage", "SCOUT", "Accuracy", "Auto stop mode", false);
                UI.SetValue("Rage", "AWP", "Accuracy", "Auto stop mode", false);
                UI.SetValue("Rage", "SCOUT", "Accuracy", "Prefer safe point", true);
                UI.SetValue("Rage", "AWP", "Accuracy", "Prefer safe point", true);
                UI.SetValue("Rage", "SCOUT", "Accuracy", "Prefer body aim", true);
                UI.SetValue("Rage", "AWP", "Accuracy", "Prefer body aim", true);
			} else {
                UI.SetValue("Rage", "SCOUT", "Accuracy", "Auto stop mode", autostopmodescout);
                UI.SetValue("Rage", "AWP", "Accuracy", "Auto stop mode", autostopmodeawp);
                UI.SetValue("Rage", "SCOUT", "Accuracy", "Prefer safe point", safepointscout);
                UI.SetValue("Rage", "AWP", "Accuracy", "Prefer safe point", safepointawp);
                UI.SetValue("Rage", "SCOUT", "Accuracy", "Prefer body aim", bodyaimscout);
                UI.SetValue("Rage", "AWP", "Accuracy", "Prefer body aim", bodyaimawp);
			}
		} else {
                UI.SetValue("Rage", "SCOUT", "Accuracy", "Auto stop mode", autostopmodescout);
                UI.SetValue("Rage", "AWP", "Accuracy", "Auto stop mode", autostopmodeawp);
                UI.SetValue("Rage", "SCOUT", "Accuracy", "Prefer safe point", safepointscout);
                UI.SetValue("Rage", "AWP", "Accuracy", "Prefer safe point", safepointawp);
                UI.SetValue("Rage", "SCOUT", "Accuracy", "Prefer body aim", bodyaimscout);
                UI.SetValue("Rage", "AWP", "Accuracy", "Prefer body aim", bodyaimawp);
		}				
	}						

function unloadhelper() {
                UI.SetValue("Rage", "SCOUT", "Accuracy", "Auto stop mode", autostopmodescout);
                UI.SetValue("Rage", "AWP", "Accuracy", "Auto stop mode", autostopmodeawp);
                UI.SetValue("Rage", "SCOUT", "Accuracy", "Prefer safe point", safepointscout);
                UI.SetValue("Rage", "AWP", "Accuracy", "Prefer safe point", safepointawp);
                UI.SetValue("Rage", "SCOUT", "Accuracy", "Prefer body aim", bodyaimscout);
                UI.SetValue("Rage", "AWP", "Accuracy", "Prefer body aim", bodyaimawp);	
}

Cheat.RegisterCallback("Draw", "helper");
Cheat.RegisterCallback("Unload", "unloadhelper");


//Adaptive autoscope
autoscope_default = UI.GetValue("Rage", "GENERAL", "Auto scope");

function autoscope() {
//var
localplayer_index = Entity.GetLocalPlayer( );
localplayer_weapon = Entity.GetWeapon(localplayer_index);
weapon_name = Entity.GetName(localplayer_weapon);
	
	if (UI.GetValue("Script items", "Adaptive Auto-Scope", true)) {
		if (weapon_name  == "scar 20" || weapon_name  == "g3sg1") {
			UI.SetValue("Rage", "GENERAL", "Auto scope", false);
		} else {
			UI.SetValue("Rage", "GENERAL", "Auto scope", true);
		}	
	} else {
		    UI.SetValue("Rage", "GENERAL", "Auto scope", autoscope_default);
	}
		
}

function unloadautoscope() {
UI.SetValue("Rage", "GENERAL", "Auto scope", autoscope_default);	
}

Cheat.RegisterCallback("Draw", "autoscope");
Cheat.RegisterCallback("Unload", "unloadautoscope");


//Safe point on lims
function safepoint() {
 if (UI.GetValue("Script items", "Safe point on limps")) {
//var
localplayer_index = Entity.GetLocalPlayer( );
localplayer_weapon = Entity.GetWeapon(localplayer_index);
weapon_name = Entity.GetName(localplayer_weapon);

    if (GetVelocity(localplayer_index) <= 100 && weapon_name  == "awp" || weapon_name  == "scar 20" || weapon_name  == "g3sg1" || weapon_name  == "r8 revolver" || weapon_name  == "desert eagle" ) {
       Ragebot.ForceHitboxSafety(0);
       Ragebot.ForceHitboxSafety(9);
       Ragebot.ForceHitboxSafety(10);
       Ragebot.ForceHitboxSafety(11);
       Ragebot.ForceHitboxSafety(12);
	}	 
  }
}

function GetVelocity(index) {
    var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

Cheat.RegisterCallback("CreateMove", "safepoint");



//Min DMG

	//var (cheat)
	var General_cache = UI.GetValue( "Rage", "GENERAL", "Targeting", "Minimum damage" )
	var Pistol_cache = UI.GetValue( "Rage", "PISTOL", "Targeting", "Minimum damage" )
	var HeavyPistol_cache = UI.GetValue( "Rage", "HEAVY PISTOL", "Targeting", "Minimum damage" )
	var Scout_cache = UI.GetValue( "Rage", "SCOUT", "Targeting", "Minimum damage" )
	var Awp_cache = UI.GetValue( "Rage", "AWP", "Targeting", "Minimum damage" )
	var AutoSniper_cache = UI.GetValue( "Rage", "AUTOSNIPER", "Targeting", "Minimum damage" )

function IshotkeyACTIVE() {
	
	//var (gui)
	var IskeyActive = UI.IsHotkeyActive( "Script items", "Damage Override" )
	var SliderValue = UI.GetValue( "Script items", "value:" )
	
	
	//functionWork
	if ( IskeyActive ) {
	UI.SetValue( "Rage", "GENERAL", "Targeting", "Minimum damage", SliderValue );
	UI.SetValue( "Rage", "PISTOL", "Targeting", "Minimum damage", SliderValue );
	UI.SetValue( "Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", SliderValue );
	UI.SetValue( "Rage", "SCOUT", "Targeting", "Minimum damage", SliderValue );
	UI.SetValue( "Rage", "AWP", "Targeting", "Minimum damage", SliderValue );
	UI.SetValue( "Rage", "AUTOSNIPER", "Targeting", "Minimum damage", SliderValue );	
	} else if ( !IskeyActive ) {
	UI.SetValue( "Rage", "GENERAL", "Targeting", "Minimum damage", General_cache );
	UI.SetValue( "Rage", "PISTOL", "Targeting", "Minimum damage", Pistol_cache );
	UI.SetValue( "Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", HeavyPistol_cache );
	UI.SetValue( "Rage", "SCOUT", "Targeting", "Minimum damage", Scout_cache );
	UI.SetValue( "Rage", "AWP", "Targeting", "Minimum damage", Awp_cache );
	UI.SetValue( "Rage", "AUTOSNIPER", "Targeting", "Minimum damage", AutoSniper_cache );
	}	
}

function UnLoadScript() {
	UI.SetValue( "Rage", "GENERAL", "Targeting", "Minimum damage", General_cache );
	UI.SetValue( "Rage", "PISTOL", "Targeting", "Minimum damage", Pistol_cache );
	UI.SetValue( "Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", HeavyPistol_cache );
	UI.SetValue( "Rage", "SCOUT", "Targeting", "Minimum damage", Scout_cache );
	UI.SetValue( "Rage", "AWP", "Targeting", "Minimum damage", Awp_cache );
	UI.SetValue( "Rage", "AUTOSNIPER", "Targeting", "Minimum damage", AutoSniper_cache );	
}

Cheat.RegisterCallback("Draw", "IshotkeyACTIVE");
Cheat.RegisterCallback("Unload", "UnLoadScript");

//Ping Spike
function ping() {
	if (UI.IsHotkeyActive( "Script items", "Ping Spike" )) {
		UI.SetValue( "Misc", "GENERAL", "Miscellaneous", "Extended backtracking", true);
	} else {
		UI.SetValue( "Misc", "GENERAL", "Miscellaneous", "Extended backtracking", false);
	}
}

//var
ping_cache = UI.GetValue( "Misc", "GENERAL", "Miscellaneous", "Extended backtracking" );

function unloadping() {
	UI.SetValue( "Misc", "GENERAL", "Miscellaneous", "Extended backtracking", ping_cache);
}

Cheat.RegisterCallback("Draw", "ping");
Cheat.RegisterCallback("Unload", "unloadping");


//ANTI-AIM


//Fluctate Fake-Lag
spamlag = false;
fakelag_cache = UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled");
loop = 1;

const fakelag = function () {
//var
amount = 10 * 5
localplayer_index = Entity.GetLocalPlayer( );
localplayer_alive = Entity.IsAlive( localplayer_index );
if (localplayer_alive == true) {	
	

  if (UI.GetValue("Script items", "Fluctate Fake-Lag") == true) {
	if (spamlag == false) {
    if (loop > amount) {    		
		UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", false);
		spamlag = true;
		loop = 0;
	}} else if (spamlag == true) {	
       if (loop > amount) {	
	    UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", true);
		spamlag = false;
		loop = 0;
	}}
	loop = loop + 1;
     }
    } else {
	  UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", fakelag_cache);
  }
	
}

function unloadfake() {
	UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", fakelag_cache);
}

Cheat.RegisterCallback("Draw", "fakelag");
Cheat.RegisterCallback("Unload", "unloadfake");


//Switch with granade

function Switch() {
//var
localplayer_index = Entity.GetLocalPlayer( );
localplayer_weapon = Entity.GetWeapon(localplayer_index);
weapon_name = Entity.GetName(localplayer_weapon);	
	
 if (UI.GetValue("Script items", "Switch with granade", true)) {
 if ( weapon_name == "high explosive grenade" || weapon_name == "molotov" || weapon_name == "smoke grenade" || weapon_name == "flashbang" || weapon_name == "decoy grenade"  || weapon_name == "incendiary grenade" ) {
	 UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
  }
 }	
}

Cheat.RegisterCallback("Draw", "Switch");

//Break-Leg
spam = false;
slide_cache = UI.GetValue("Misc", "GENERAL", "Movement", "Slide walk");

const breakleg = function () {
//var
localplayer_index = Entity.GetLocalPlayer( );
localplayer_alive = Entity.IsAlive( localplayer_index );
if (localplayer_alive == true) {	
	

  if (UI.GetValue("Script items", "Break-Leg", true)) {
	if (spam == false) {    		
		UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", false);
		spam = true;
	} else if (spam == true) {		
	    UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", true);
		spam = false;
	}
     }
    } else {
	  UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", slide_cache);
  }
	
}

function unload() {
	UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", slide_cache);
}

Cheat.RegisterCallback("Draw", "breakleg");
Cheat.RegisterCallback("Unload", "unload");

//Low delta


function LD() {
IsActive = UI.IsHotkeyActive( "Script items", "Low delta" )
IsBlock = UI.IsHotkeyActive( "Script items", "Legit Anti-Aim" )	
	
	if ( IsActive && !IsBlock ) {
	    AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(-24);
	} else {
        AntiAim.SetOverride(0);
	}		
}

Cheat.RegisterCallback("CreateMove", "LD");

//Legit AA
//var
yawoffset_cache = UI.GetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset" )

function legitaa () {
	
	if(UI.IsHotkeyActive( "Script items", "Legit Anti-Aim" ))
	{
	  	UI.SetValue("Misc", "PERFORMANCE&INFORMATION", "Information", "Restrictions", "Anti Untrusted", false);
		UI.SetValue("Anti-Aim", "Extra", "Pitch", 3);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -180);
	    }
		else
		{
		UI.SetValue("Misc", "PERFORMANCE&INFORMATION", "Information", "Restrictions", "Anti Untrusted", true);
		UI.SetValue("Anti-Aim", "Extra", "Pitch", 1);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawoffset_cache);
        }	    			
}

function ragefire() {
	if (UI.IsHotkeyActive("Script items", "Legit Anti-Aim")) {
	UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
	}
}

Cheat.RegisterCallback("Draw", "legitaa");
Cheat.RegisterCallback("ragebot_fire", "ragefire");

//Freestanding
//var
AutoDir = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction");

function freestand() {
//var
isFreestand = UI.IsHotkeyActive("Script items", "Freestanding");

  if( isFreestand ) {
	  UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", true);
  } else {
	  UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", false);
  }	
}

function script() {
	UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", AutoDir);
}

Cheat.RegisterCallback("Draw", "freestand");
Cheat.RegisterCallback("Unload", "script");

//MISC

//Indicator
//var (screen)
screen_size = Global.GetScreenSize();
x = screen_size[0]/2
y = screen_size[1]/2


function indicator() {
	if (UI.GetValue("Script items", "Indicator's", true)) {
//var (IsActive)
isFreestand = UI.IsHotkeyActive("Script items", "Freestanding");
isLowDelta = UI.IsHotkeyActive("Script items", "Low delta");
isDT = UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap");
isHIDE = UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots");
isDMG = UI.IsHotkeyActive("Script items", "Damage Override");
isSAFE = UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point");
isBODY = UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim");
isInv = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter");
isFakeduck = UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck");
isPing = UI.IsHotkeyActive("Script items", "Ping Spike");
isLBY = UI.GetValue("Anti-Aim", "Fake angles", "LBY mode");
isLegitAA = UI.IsHotkeyActive("Script items", "Legit Anti-Aim");
isPeekHelper = UI.GetValue("Script items", "Peek Helper for AWP/Scout");

//var (Render)
fontind = Render.AddFont("Verdana", 6, 600);
font = Render.AddFont("Verdana", 7, 600);
fontinv = Render.AddFont("Arrows", 10, 600);
color = UI.GetColor("Script items", "color (indicator)");
colorinv = UI.GetColor("Script items", "selected arrow");

//other
localplayer_index = Entity.GetLocalPlayer( );
localplayer_alive = Entity.IsAlive( localplayer_index );
localplayer_weapon = Entity.GetWeapon(localplayer_index);
weapon_name = Entity.GetName(localplayer_weapon);
chargestate = Exploit.GetCharge()
alpha = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / .75)) % (Math.PI * 2))) * 255;
nonactivecolor = [color[0], color[1], color[2], alpha]

//function
//Side
side = " "
if (!isFreestand && !isLowDelta && isLBY == 1) {
side = "Opposite"
}
if (!isFreestand && !isLowDelta && chargestate == 1) {
side = "Normal"
}	
if (!isFreestand && !isLowDelta && isLBY == 0) {
side = "Normal"
}
if (!isFreestand && !isLowDelta && isLBY == 2) {
side = "Sway"
}	
if (isFreestand) {
side = "Freestand"
}
if (isFreestand && isDT && isPeekHelper == true) {
if (weapon_name  == "awp" || weapon_name  == "ssg 08") {
side = "Freestand (Helper)"
}}
if (isLowDelta) {
side = "Low Delta"
} 
if (isLegitAA) {
side = "Legit Anti-Aim"
}


if (isDT && chargestate == 1 && !isFakeduck) {
	DT = "DT"
	nonactivecolor = [color[0], color[1], color[2], 255]
} else if (isDT && !isFakeduck) {
	DT = "DT"
	nonactivecolor = [255, 0, 0, alpha]
}
if (isDT && isFakeduck) {
	DT = "DT (fakeduck)"
	nonactivecolor = [255, 0, 0, alpha]
}

if (isHIDE && chargestate == 1) {
	HIDE = "HIDE"
	nonactivecolor = [color[0], color[1], color[2], 255]
}
if (isHIDE && isFakeduck) {
	HIDE = "HIDE (fakeduck)"
	nonactivecolor = [255, 0, 0, alpha]
}

 

if (localplayer_alive == true) {

Render.StringCustom(x, y + 10, 1, side, [color[0], color[1], color[2], 255], font);
Render.StringCustom(x + 1, y + 11, 1, side, [0, 0, 0, 100], font);

//...
add_y = 15
 
if (isFakeduck && !isDT && !isHIDE) {
add_y = add_y + 10	
Render.StringCustom(x, y + add_y, 1, "DUCK", [color[0], color[1], color[2], alpha], fontind);
Render.StringCustom(x + 1, y + 1 + add_y, 1, "DUCK", [0, 0, 0, 100], fontind);	
} 
if (isDT) {
add_y = add_y + 10
Render.StringCustom(x, y + add_y, 1, DT, nonactivecolor, fontind);
Render.StringCustom(x + 1, y + 1 + add_y, 1, DT, [0, 0, 0, 100], fontind);
}	
if (isHIDE && !isDT) {
add_y = add_y + 10
Render.StringCustom(x, y + add_y, 1, HIDE, nonactivecolor, fontind);
Render.StringCustom(x + 1, y + 1 + add_y, 1, HIDE, [0, 0, 0, 100], fontind);
}	
if (isDMG) {
add_y = add_y + 10	
Render.StringCustom(x, y + add_y, 1, "DMG", [color[0], color[1], color[2], 255], fontind);
Render.StringCustom(x + 1, y + 1 + add_y, 1, "DMG", [0, 0, 0, 100], fontind);
}
if (isSAFE) {
add_y = add_y + 10	
Render.StringCustom(x, y + add_y, 1, "SAFE", [color[0], color[1], color[2], 255], fontind);
Render.StringCustom(x + 1, y + 1 + add_y, 1, "SAFE", [0, 0, 0, 100], fontind);
}
if (isBODY) {
add_y = add_y + 10	
Render.StringCustom(x, y + add_y, 1, "BODY", [color[0], color[1], color[2], 255], fontind);
Render.StringCustom(x + 1, y + 1 + add_y, 1, "BODY", [0, 0, 0, 100], fontind);
}
if (isPing) {
add_y = add_y + 10
Render.StringCustom(x, y + add_y, 1, "PING", [color[0], color[1], color[2], 255], fontind);
Render.StringCustom(x + 1, y + 1 + add_y, 1, "PING", [0, 0, 0, 100], fontind);
}
if (isInv && !isLowDelta) {	
Render.StringCustom(x - 40, y - 5, 1, "b", [colorinv[0], colorinv[1], colorinv[2], 255], fontinv);
Render.StringCustom(x + 40, y - 5, 1, "a", [255, 255, 255, 50], fontinv);
Render.StringCustom(x - 39, y - 4, 1, "b", [0, 0, 0, 100], fontinv);
Render.StringCustom(x + 41, y - 4, 1, "a", [0, 0, 0, 100], fontinv);
} else {
Render.StringCustom(x + 40, y - 5, 1, "a", [colorinv[0], colorinv[1], colorinv[2], 255], fontinv);
Render.StringCustom(x + 41, y - 4, 1, "a", [0, 0, 0, 100], fontinv);
Render.StringCustom(x - 40, y - 5, 1, "b", [255, 255, 255, 100], fontinv);
Render.StringCustom(x - 39, y - 4, 1, "b", [0, 0, 0, 100], fontinv);
}

	}}
}

Cheat.RegisterCallback("Draw", "indicator");


//Bhop
function Erectware()
{
    var CustomSpeed = UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Turn speed" );
    var VelocityProp = Entity.GetProp(Entity.GetLocalPlayer(), 'CBasePlayer', 'm_vecVelocity[0]');
    Velocity = Math.sqrt(VelocityProp[0] * VelocityProp[0] + VelocityProp[1] * VelocityProp[1]),
    parseFloat(Velocity);
    Velocity2 = Velocity/1.5;
    VelocityCus = Velocity2/CustomSpeed;
    UI.SetValue( "Misc", "GENERAL", "Movement", "Turn speed", VelocityCus );
}


Cheat.RegisterCallback('CreateMove', 'Erectware');


//Watermark
function watermark()
{
	if (UI.GetValue("Script items", "Watermark", true)) {
	//var
	
    color = UI.GetColor("Script items", "color (watermark)");	
	var font = Render.AddFont("Arial", 7, 100);
    var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();	
    var hours = hours1 <= 9 ? "0" + today.getHours() + ":" : today.getHours() + ":";
    var minutes = minutes1 <= 9 ? "0" + today.getMinutes() + ":" : today.getMinutes() + ":";
    var seconds = seconds1 <= 9 ? "0" + today.getSeconds() : today.getSeconds();	
	
	//watermark
	Render.FilledRect( x + 765, y - 535, 192, 15, [ 0, 0, 0, color[3] ]);
	Render.GradientRect( x + 925, y - 535, 30, 1, 1, [ color[0], color[1], color[2], 0 ], [ color[0], color[1], color[2], 255 ]);
	Render.GradientRect( x + 765, y - 520, 30, 1, 1, [ color[0], color[1], color[2], 255 ], [ color[0], color[1], color[2], 0 ]);
	Render.GradientRect( x + 955, y - 535, 1, 14, 0, [ color[0], color[1], color[2], 255 ], [ color[0], color[1], color[2], 7 ]);
	Render.GradientRect( x + 765, y - 534, 1, 14, 0, [ color[0], color[1], color[2], 7 ], [ color[0], color[1], color[2], 255 ]);	
	Render.StringCustom(x + 768, y - 533, 0, "onetap | DeyzeeYaw (beta) | user | "  + hours + minutes + seconds,  [255, 255, 255, 255], font);
	}
}

Cheat.RegisterCallback("Draw", "watermark");



//aspectratio
function fsn( ) {
	if (UI.GetValue("Misc", "GENERAL", "Miscellaneous", "Hidden cvars", true)) {
    ui_arat_val = UI.GetValue( "Aspect ratio" );

    switch ( Global.FrameStage( ) ) {
        case 5: {
            Global.ExecuteCommand( "r_aspectratio " + ui_arat_val.toString()/100 );

            break;
        }
        default: break;
    }
  }
}

function ratiounload() {
if (UI.GetValue("Misc", "GENERAL", "Miscellaneous", "Hidden cvars", true)) {	
Global.ExecuteCommand( "r_aspectratio 0");
 }	
}

Global.RegisterCallback( "FrameStageNotify", "fsn" );
Cheat.RegisterCallback("Unload", "ratiounload");


//Keybind
localplayer_index = Entity.GetLocalPlayer( );
localplayer_alive = Entity.IsAlive( localplayer_index );
var stored = false;
var x_offs = 0;
var y_offs = 0;
UI.AddSliderInt("binds x", 0, screen_size[0]);
UI.AddSliderInt("binds y", 0, screen_size[1]);
UI.SetEnabled("Script items", "binds x", false);
UI.SetEnabled("Script items", "binds y", false);
const in_bounds = function(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}
const keybinds = function() {
	if (UI.GetValue("Script items", "Keybinds", true)) {
		if (localplayer_alive == true) {		
	var color = UI.GetColor("Script items", "color (keybind)");
    var keybinds = [];
	var nonactive = (!UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction") && !UI.IsHotkeyActive("Rage", "Exploits", "Double tap") && !UI.IsHotkeyActive("Rage", "Exploits", "Hide shots") && !UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck") && !UI.IsHotkeyActive("Rage", "General", "General", "Force body aim") && !UI.IsHotkeyActive("Rage", "General", "General", "Force safe point") && !UI.IsHotkeyActive("Script items", "Damage Override") && !UI.IsHotkeyActive("Script items", "Low delta") && !UI.IsHotkeyActive("Script items", "Ping Spike"))
	var non = 255
	var line1 = [color[0], color[1], color[2], 5]
	var line2 = [color[0], color[1], color[2], 255]
	var line3 = [color[0], color[1], color[2], 255]
	var line4 = [color[0], color[1], color[2], 5]	
	var text = [255, 255, 255, 255]
	if (keybinds == nonactive || UI.IsMenuOpen() == true && nonactive) {
        non = color[3]
        line1 = [color[0], color[1], color[2], 5]
		line2 = [color[0], color[1], color[2], 255]
		line3 = [color[0], color[1], color[2], 255]
		line4 = [color[0], color[1], color[2], 5]
        text = [255, 255, 255, 255]
	} else {
        non = 0
        line1 = [color[0], color[1], color[2], 0]
		line2 = [color[0], color[1], color[2], 0]
		line3 = [color[0], color[1], color[2], 0]
		line4 = [color[0], color[1], color[2], 0]
        text = [255, 255, 255, 0]	
	}
	
    if (UI.IsHotkeyActive("Rage", "Exploits", "Double tap")) {                   keybinds.push("Doubletap") };
    if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {                   keybinds.push("Hideshots") };
    if (UI.IsHotkeyActive("Script items", "Damage Override")) {                  keybinds.push("Damage Override") };	
    if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {                   keybinds.push("Duck peek assist") };
    if (UI.IsHotkeyActive("Rage", "General", "General", "Force body aim")) {     keybinds.push("Body aim") };
    if (UI.IsHotkeyActive("Rage", "General", "General", "Force safe point")) {   keybinds.push("Safe points") };
    if (UI.IsHotkeyActive("Script items", "Low delta")) {                        keybinds.push("Low delta") };
    if (UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction")) {            keybinds.push("Freestand") };	
    if (UI.IsHotkeyActive("Script items", "Ping Spike")) {                       keybinds.push("Ping spike") };	
    
    const x = UI.GetValue("Script items", "binds x"),
    y = UI.GetValue("Script items", "binds y");
    const font = Render.AddFont("Verdana", 7, 100);
    const active = Render.AddFont("Calibri", 8, 100);
    Render.FilledRect(x, y, 150, 12, [11, 11, 20, non]);
	Render.GradientRect( x, y, 75, 1, 1, line1, line2);
	Render.GradientRect( x + 75, y, 75, 1, 1, line3, line4);
    Render.StringCustom(x + 55, y, 0, "keybind", text, font);
    for (i = 0; i < keybinds.length; i++){
        Render.StringCustom(x + 3, y + 12 + 12 * i, 0, keybinds[i], [255, 255, 255, 255], active);
        Render.StringCustom(x + 112, y + 12 + 12 * i, 0, "(active)", [255, 255, 255, 255], active);
    }
    
    if(UI.IsMenuOpen() && Input.IsKeyPressed(0x1)){
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x, y, x + 150, y + 40)) {
            if(!stored){
                x_offs = mouse_pos[0] - x;
                y_offs = mouse_pos[1] - y;
                stored = true;
            }
            UI.SetValue("Script items", "binds x", mouse_pos[0] - x_offs);
            UI.SetValue("Script items", "binds y", mouse_pos[1] - y_offs);
        }
      } else if(stored) stored = false;
	}
  }
}
Global.RegisterCallback("Draw", "keybinds");