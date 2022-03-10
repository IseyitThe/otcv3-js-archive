//@Menu Start
var screen_size = Global.GetScreenSize();

var onetapWeapons = ["General", "Pistol", "Heavy pistol", "Scout", "AWP", "Autosniper"];

var hitboxModes = ["Normal", "Wall", "Mindmg", "DT"];

var weaponModes = ["Normal", "Wall", "Minimum", "DT"];

var jsLoaded = false;

var valve = false;

var defaultConfig = {
    "Play Style": 2,
    "Premium Anti-Aim": true,
    "Jitter Real": true,
    "Yaw Mode": 0,
    "Jitter Mode": 1,
	"Air Mode": true,
    "Freestanding Mode": 2,
    "Dodge Bruteforce": true,
    "Invert On": 0,
    "Disable On": 1,
    "Max Yaw": 20,
    "Max Jitter": 14,
    "Desync Mode": 0,
	"On Shot Mode":1,
    "Min LBY": 12,
    "Max LBY": 20,
    "Min Offset": 40,
    "Max Offset": 50,
    "Better Weapon Config": true,
    "Automatic Mindmg": true,
    "Weapon": 0,
    "General Normal Damage": 15,
    "Pistol Normal Damage": 10,
    "Heavy pistol Normal Damage": 100,
    "Scout Normal Damage": 100,
    "AWP Normal Damage": 101,
    "Autosniper Normal Damage": 50,
    "General Wall Damage": 10,
    "Pistol Wall Damage": 5,
    "Heavy pistol Wall Damage": 35,
    "Scout Wall Damage": 80,
    "AWP Wall Damage": 101,
    "Autosniper Wall Damage": 20,
    "General Minimum Damage": 1,
    "Pistol Minimum Damage": 1,
    "Heavy pistol Minimum Damage": 1,
    "Scout Minimum Damage": 30,
    "AWP Minimum Damage": 15,
    "Autosniper Minimum Damage": 1,
    "General DT Damage": 20,
    "Pistol DT Damage": 20,
    "Heavy pistol DT Damage": 30,
    "Scout DT Damage": 100,
    "AWP DT Damage": 100,
    "Autosniper DT Damage": 50,
    "General Normal Hitchance": 47,
    "Pistol Normal Hitchance": 40,
    "Heavy pistol Normal Hitchance": 60,
    "Scout Normal Hitchance": 70,
    "AWP Normal Hitchance": 70,
    "Autosniper Normal Hitchance": 70,
    "General Wall Hitchance": 47,
    "Pistol Wall Hitchance": 35,
    "Heavy pistol Wall Hitchance": 60,
    "Scout Wall Hitchance": 65,
    "AWP Wall Hitchance": 70,
    "Autosniper Wall Hitchance": 70,
    "General Minimum Hitchance": 30,
    "Pistol Minimum Hitchance": 30,
    "Heavy pistol Minimum Hitchance": 40,
    "Scout Minimum Hitchance": 70,
    "AWP Minimum Hitchance": 70,
    "Autosniper Minimum Hitchance": 40,
    "General DT Hitchance": 50,
    "Pistol DT Hitchance": 50,
    "Heavy pistol DT Hitchance": 60,
    "Scout DT Hitchance": 65,
    "AWP DT Hitchance": 65,
    "Autosniper DT Hitchance": 65,
    "Dynamic FOV": false,
    "Min FOV": 10,
    "Max FOV": 30,
    "Slow Walk": true,
    "Slow Walk Mode": 1,
    "Min Speed": 10,
    "Max Speed": 70,
    "Rage Fake Lag": 2,
    "Semi-Rage Fake Lag": 5,
    "Clan Tag": 1,
    "Rage Bot Optimization": true,
    "Auto Swap": true,
	"Auto Wall Fightback": true,
    "Dynamic Multipoint": true,
    "No Scope Distance": 300,
    "Safe Point Conditions": 0,
    "Body Conditions": 0,
	"Legit Auto Wall Penetration":1,
    "Auto Wall Mode": 0,
    "Show Indicators": true,
    "Show Watermark": true,
    "Show Direction": true,
    "Show Status": true,
    "Top Bar": 1,
    "Show Hit and Miss": true,
    "Show Damage Given": true,
    "Show Death Mark": true,
	"Show Enemy Weapons": true,
	"Hide Automatically":true,
    "Show Bullet Tracer": true,
    "Bullet Tracer Thickness": 10,
    "Show Keybind States": 44,
    "Desync Indicator": 1,
    "Theme": 1,
    "Font": 0,
    "Real Angle": [0, 0, 0, 200],
    "Fake Angle": [210, 210, 210, 200],
    "Bullet Tracer Color": [1, 165, 175, 200],
    "UI Color": [251, 34, 80, 255],
    "Fast Duck": true,
    "Reply Bot": false,
    "Rage Crash": false,
    "Chat Spam": false,
    "Logging (spams a lot)": false,
    "Load Default Config": false,
    //DO NOT CHANGE THIS OTHERWISE YOU ARE GOING TO REGRET FOR IT
    "Performance Optimization": 64
};

function onMenuUpdate() {
    //Update the menu once every [int] ticks
    if (Globals.Tickcount() % getValue("Performance Optimization") != 0) return;
    //Load the default config if requested
    if (getValue("Load Default Config")) {
        loadDefaultConfig();
    }
    //Hide the unnecessary menu items
    optimizeMenuItems();
}

function optimizeMenuItems() {
    if (getValue("Play Style") == 0) hideAllMenuItems();
    if (getValue("Play Style") == 1) showSemiRageItems();
    if (getValue("Play Style") == 2) showRageItems();
    maxIsAlwaysGreaterThanMin();
    dodgeBruteforceDisablesAllInverters();
}

function maxIsAlwaysGreaterThanMin() {
    if (getValue("Min LBY") > getValue("Max LBY")) {
        setValue("Max LBY", getValue("Min LBY"));
    }
    if (getValue("Min Offset") > getValue("Max Offset")) {
        setValue("Max Offset", getValue("Min Offset"));
    }
    if (getValue("Min FOV") > getValue("Max FOV")) {
        setValue("Max FOV", getValue("Min FOV"));
    }
    if (getValue("Min Speed") > getValue("Max Speed")) {
        setValue("Max Speed", getValue("Min Speed"));
    }
}

function dodgeBruteforceDisablesAllInverters() {
    if (getValue("Dodge Bruteforce")) {
        setValue("Invert On", 0);
        setVisibility("Invert On", false);
    }
}

function showActiveItems(rage) {
    if (rage) {
        if (getValue("Premium Anti-Aim")) {
            UI.SetValue("Anti-Aim", "Fake angles", "Enabled", false);
            setVisibility("Yaw Mode", true);
            setVisibility("Jitter Mode", true);
            setVisibility("Jitter Real", false);
            setVisibility("Freestanding Mode", true);
			setVisibility("On Shot Mode", true);
			setVisibility("Air Mode", true);
            setVisibility("Dodge Bruteforce", true);
            setVisibility("Invert On", true);
            setVisibility("Disable On", true);
            setVisibility("Max Yaw", true);
            setVisibility("Max Jitter", true);
            setVisibility("Desync Mode", true);
            if (getValue("Desync Mode") == 3) {
                setVisibility("Min LBY", true);
                setVisibility("Max LBY", true);
                setVisibility("Min Offset", true);
                setVisibility("Max Offset", true);
            }
            setVisibility("Inverter", true);
            setVisibility("Legit AA On Key", true);
            setVisibility("Min FOV", false);
            setVisibility("Max FOV", false);
            setVisibility("Maximum FOV On Key", false);
        }
    } else {
        if (getValue("Premium Anti-Aim")) {
            UI.SetValue("Anti-Aim", "Fake angles", "Enabled", false);
            setVisibility("Jitter Real", true);
			setVisibility("Air Mode", false);
            setVisibility("Freestanding Mode", true);
            setVisibility("Dodge Bruteforce", true);
            setVisibility("Invert On", true);
            setVisibility("Disable On", true);
            setVisibility("Inverter", true);
        }
        if (getValue("Dynamic FOV")) {
            setVisibility("Min FOV", true);
            setVisibility("Max FOV", true);
            setVisibility("Maximum FOV On Key", true);
        }
    }
    if (getValue("Rage Bot Optimization")) {
        setVisibility("Dynamic Multipoint", true);
        setVisibility("Auto Swap", true);
        setVisibility("No Scope Distance", true);
        setVisibility("Body Conditions", true);
        setVisibility("Safe Point Conditions", true);
        if (getValue("Play Style") == 1) {
			setVisibility("Legit Auto Wall Penetration", true);
			setVisibility("Auto Wall Fightback", true);
            setVisibility("Auto Wall Mode", true);
            setVisibility("Auto Wall Switch", true);
        }
    }
    if (getValue("Slow Walk")) {
        setVisibility("Slow Walk Mode", true);
        setVisibility("Min Speed", true);
        setVisibility("Max Speed", true);
    }
    if (getValue("Show Indicators")) {
        setVisibility("Show Watermark", true);
        setVisibility("Show Direction", true);
        setVisibility("Show Status", true);
        setVisibility("Top Bar", true);
        setVisibility("Show Hit and Miss", true);
        setVisibility("Show Damage Given", true);
        setVisibility("Show Death Mark", true);
        setVisibility("Show Bullet Tracer", true);
		setVisibility("Show Enemy Weapons", true);
		if (getValue("Show Enemy Weapons")) {
			setVisibility("Hide Automatically", true);
		}
        setVisibility("Show Keybind States", true);
        setVisibility("Desync Indicator", true);
        setVisibility("Font", true);
        if (getValue("Show Bullet Tracer")) {
            setVisibility("Bullet Tracer Thickness", true);
            setVisibility("Bullet Tracer Color", true);
        }
        if (getValue("Desync Indicator") != 0) {
            setVisibility("Real Angle", true);
            setVisibility("Fake Angle", true);
        }
        setVisibility("UI Color", true);
        setVisibility("Theme", true);
    }
    if (fakeLagMode != 0) {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", false);
        setVisibility("Maximum Fake Lag", true);
    }
    if (getValue("Better Weapon Config")) {
        setVisibility("Automatic Mindmg", true);
        setVisibility("Weapon", true);
        setVisibility("Minimum Damage", true);
        setVisibility("Minimum Accuracy", true);
		if(getString("Weapon")!="..."){
			setVisibility(getString("Weapon") + " Normal Damage", true);
			setVisibility(getString("Weapon") + " Wall Damage", true);
			setVisibility(getString("Weapon") + " Minimum Damage", true);
			setVisibility(getString("Weapon") + " DT Damage", true);
			setVisibility(getString("Weapon") + " Normal Hitchance", true);
			setVisibility(getString("Weapon") + " Wall Hitchance", true);
			setVisibility(getString("Weapon") + " Minimum Hitchance", true);
			setVisibility(getString("Weapon") + " DT Hitchance", true);
			setVisibility(getString("Weapon") + " Dynamic Hitboxes", true);
			if (getValue(getString("Weapon") + " Dynamic Hitboxes")) {
				setVisibility("Dynamic Hitboxes", true);
				if(getString("Dynamic Hitboxes")!="..."){
					setVisibility(getString("Weapon") + " " + getString("Dynamic Hitboxes") + " Hitboxes", true);
					setVisibility(getString("Weapon") + " " + getString("Dynamic Hitboxes") + " Multipoint Hitboxes", true);
				}
			}
		}
    }
}

function showRageItems() {
    showSemiRageItems();
    setVisibility("0x04", false);
    setVisibility("Dynamic FOV", false);
    setVisibility("Rage Removals", true);
    setVisibility("Semi-Rage Removals", false);
    setVisibility("Semi-Rage Fake Lag", false);
    setVisibility("Rage Fake Lag", true);
    showActiveItems(true);
}

function showSemiRageItems() {
    setVisibility("0x02", true);
    setVisibility("0x03", true);
    setVisibility("0x04", true);
    setVisibility("0x05", true);
    setVisibility("0x06", true);
    setVisibility("0x07", true);
    setVisibility("0x08", true);
    setVisibility("0x09", true);
    setVisibility("0x0A", true);
    setVisibility("Semi-Rage Removals", true);
    setVisibility("Rage Removals", false);
    setVisibility("Premium Anti-Aim", true);
    setVisibility("Jitter Real", false);
    setVisibility("Yaw Mode", false);
    setVisibility("Jitter Mode", false);
	setVisibility("Air Mode", false);
    setVisibility("Freestanding Mode", false);
	setVisibility("On Shot Mode", false);
    setVisibility("Dodge Bruteforce", false);
    setVisibility("Invert On", false);
    setVisibility("Disable On", false);
    setVisibility("Max Yaw", false);
    setVisibility("Max Jitter", false);
    setVisibility("Desync Mode", false);
    setVisibility("Min LBY", false);
    setVisibility("Max LBY", false);
    setVisibility("Min Offset", false);
    setVisibility("Max Offset", false);
    setVisibility("Inverter", false);
    setVisibility("Legit AA On Key", false);
    setVisibility("Better Weapon Config", true);
    setVisibility("Automatic Mindmg", false);
    setVisibility("Weapon", false);
    for (i = 0; i < onetapWeapons.length; i++) {
        for (x = 0; x < weaponModes.length; x++) {
            setVisibility(onetapWeapons[i] + " " + weaponModes[x] + " Damage", false);
            setVisibility(onetapWeapons[i] + " " + weaponModes[x] + " Hitchance", false);
        }
        setVisibility(onetapWeapons[i] + " Dynamic Hitboxes", false);
        for (y = 0; y < hitboxModes.length; y++) {
            setVisibility(onetapWeapons[i] + " " + hitboxModes[y] + " Hitboxes", false);
            setVisibility(onetapWeapons[i] + " " + hitboxModes[y] + " Multipoint Hitboxes", false);
        }
    }
    setVisibility("Dynamic Hitboxes", false);
    setVisibility("Minimum Accuracy", false);
    setVisibility("Dynamic FOV", true);
    setVisibility("Min FOV", false);
    setVisibility("Max FOV", false);
    setVisibility("Maximum FOV On Key", false);
    setVisibility("Slow Walk", true);
    setVisibility("Slow Walk Mode", false);
    setVisibility("Min Speed", false);
    setVisibility("Max Speed", false);
    setVisibility("Semi-Rage Fake Lag", true);
    setVisibility("Rage Fake Lag", false);
    setVisibility("Maximum Fake Lag", false);
    setVisibility("Clan Tag", true);
    setVisibility("Rage Bot Optimization", true);
    setVisibility("Dynamic Multipoint", false);
    setVisibility("Auto Swap", false);
	setVisibility("Auto Wall Fightback", false);
    setVisibility("No Scope Distance", false);
    setVisibility("Body Conditions", false);
    setVisibility("Safe Point Conditions", false);
	setVisibility("Legit Auto Wall Penetration", false);
    setVisibility("Auto Wall Mode", false);
    setVisibility("Auto Wall Switch", false);
    setVisibility("Show Indicators", true);
    setVisibility("Show Watermark", false);
    setVisibility("Show Direction", false);
    setVisibility("Show Status", false);
    setVisibility("Top Bar", false);
    setVisibility("Show Hit and Miss", false);
    setVisibility("Show Damage Given", false);
    setVisibility("Show Death Mark", false);
	setVisibility("Show Enemy Weapons", false);
	setVisibility("Hide Automatically", false);
    setVisibility("Show Bullet Tracer", false);
    setVisibility("Bullet Tracer Thickness", false);
    setVisibility("Show Keybind States", false);
    setVisibility("Desync Indicator", false);
    setVisibility("Theme", false);
    setVisibility("Font", false);
    setVisibility("Real Angle", false);
    setVisibility("Fake Angle", false);
    setVisibility("UI Color", false);
    setVisibility("Bullet Tracer Color", false);
    setVisibility("Fast Duck", true);
    setVisibility("Reply Bot", true);
    setVisibility("Chat Spam", true);
    setVisibility("Logging (spams a lot)", true);
    setVisibility("Fake Duck", true);
    setVisibility("Rage Crash", true);
    showActiveItems(false);
}

function hideAllMenuItems() {
    setVisibility("0x02", false);
    setVisibility("0x03", false);
    setVisibility("0x04", false);
    setVisibility("0x05", false);
    setVisibility("0x06", false);
    setVisibility("0x07", false);
    setVisibility("0x08", false);
    setVisibility("0x09", false);
    setVisibility("0x0A", false);
    setVisibility("Semi-Rage Removals", false);
    setVisibility("Rage Removals", false);
    setVisibility("Premium Anti-Aim", false);
    setVisibility("Jitter Real", false);
	setVisibility("Air Mode", false);
    setVisibility("Yaw Mode", false);
    setVisibility("Jitter Mode", false);
    setVisibility("Freestanding Mode", false);
	setVisibility("On Shot Mode", false);
    setVisibility("Dodge Bruteforce", false);
    setVisibility("Invert On", false);
    setVisibility("Disable On", false);
    setVisibility("Max Yaw", false);
    setVisibility("Max Jitter", false);
    setVisibility("Desync Mode", false);
    setVisibility("Min LBY", false);
    setVisibility("Max LBY", false);
    setVisibility("Min Offset", false);
    setVisibility("Max Offset", false);
    setVisibility("Inverter", false);
    setVisibility("Legit AA On Key", false);
    setVisibility("Better Weapon Config", false);
    setVisibility("Automatic Mindmg", false);
    setVisibility("Weapon", false);
    for (i = 0; i < onetapWeapons.length; i++) {
        for (x = 0; x < weaponModes.length; x++) {
            setVisibility(onetapWeapons[i] + " " + weaponModes[x] + " Damage", false);
            setVisibility(onetapWeapons[i] + " " + weaponModes[x] + " Hitchance", false);
        }
        setVisibility(onetapWeapons[i] + " Dynamic Hitboxes", false);
        for (y = 0; y < hitboxModes.length; y++) {
            setVisibility(onetapWeapons[i] + " " + hitboxModes[y] + " Hitboxes", false);
            setVisibility(onetapWeapons[i] + " " + hitboxModes[y] + " Multipoint Hitboxes", false);
        }
    }
    setVisibility("Dynamic Hitboxes", false);
    setVisibility("Minimum Accuracy", false);
    setVisibility("Dynamic FOV", false);
    setVisibility("Min FOV", false);
    setVisibility("Max FOV", false);
    setVisibility("Maximum FOV On Key", false);
    setVisibility("Slow Walk", false);
    setVisibility("Slow Walk Mode", false);
    setVisibility("Min Speed", false);
    setVisibility("Max Speed", false);
    setVisibility("Semi-Rage Fake Lag", false);
    setVisibility("Rage Fake Lag", false);
    setVisibility("Maximum Fake Lag", false);
    setVisibility("Clan Tag", false);
    setVisibility("Rage Bot Optimization", false);
    setVisibility("Dynamic Multipoint", false);
	setVisibility("Legit Auto Wall Penetration", false);
    setVisibility("Auto Swap", false);
	setVisibility("Auto Wall Fightback", false);
    setVisibility("No Scope Distance", false);
    setVisibility("Body Conditions", false);
    setVisibility("Safe Point Conditions", false);
    setVisibility("Auto Wall Mode", false);
    setVisibility("Auto Wall Switch", false);
    setVisibility("Show Indicators", false);
    setVisibility("Show Watermark", false);
    setVisibility("Show Direction", false);
    setVisibility("Show Status", false);
    setVisibility("Top Bar", false);
    setVisibility("Show Hit and Miss", false);
    setVisibility("Show Damage Given", false);
    setVisibility("Show Death Mark", false);
	setVisibility("Show Enemy Weapons", false);
	setVisibility("Hide Automatically", false);
    setVisibility("Show Bullet Tracer", false);
    setVisibility("Bullet Tracer Thickness", false);
    setVisibility("Show Keybind States", false);
    setVisibility("Desync Indicator", false);
    setVisibility("Theme", false);
    setVisibility("Font", false);
    setVisibility("Real Angle", false);
    setVisibility("Fake Angle", false);
    setVisibility("UI Color", false);
    setVisibility("Bullet Tracer Color", false);
    setVisibility("Fast Duck", false);
    setVisibility("Reply Bot", false);
    setVisibility("Chat Spam", false);
    setVisibility("Logging (spams a lot)", false);
    setVisibility("Fake Duck", false);
    setVisibility("Rage Crash", false);
}

function initializeMenuItems() {
    UI.AddSliderInt("Welcome, " + Cheat.GetUsername(), 0, 0);
    UI.AddLabel("You have enabled dhdj's script.");
    UI.AddLabel("Please do not share this script");
    UI.AddLabel("with other unpaid users. Thank you.");
    UI.AddLabel("Version: 1.3 PREMIUM");
    UI.AddSliderInt("0x01", 0, 0);
    UI.AddDropdown("Play Style", ["Why would I cheat", "Semi-Rage", "Rage"]);
    UI.AddMultiDropdown("Semi-Rage Removals", ["Smoke", "Flash", "Scope", "Visual kick", "Visual punch", "Scope time", "Landing bob", "Fire"]);
    UI.AddMultiDropdown("Rage Removals", ["Smoke", "Flash", "Scope", "Visual kick", "Visual punch", "Scope time", "Landing bob", "Fire"]);
    UI.AddSliderInt("0x02", 0, 0);
    UI.AddCheckbox("Premium Anti-Aim");
    UI.AddCheckbox("Dodge Bruteforce");
	UI.AddCheckbox("Air Mode");
    UI.AddCheckbox("Jitter Real");
    UI.AddDropdown("Yaw Mode", ["Ideal", "Random"]);
    UI.AddDropdown("Jitter Mode", ["Static", "Random"]);
    UI.AddDropdown("Freestanding Mode", ["Disabled", "Normal", "Reversed"]);
    UI.AddDropdown("Desync Mode", ["Ideal", "Minimum Delta", "Maximum Delta", "Custom"]);
	UI.AddDropdown("On Shot Mode", ["Disabled", "Opposite"]);
    UI.AddMultiDropdown("Invert On", ["Shot", "Slow Walk", "Hurt", "Enemy Fire", "Luck"]);
    UI.AddMultiDropdown("Disable On", ["Round End", "Enemy Invisible", "Luck"]);
    UI.AddSliderInt("Max Yaw", 0, 180);
    UI.AddSliderInt("Max Jitter", 0, 180);
    UI.AddSliderInt("Min LBY", 0, 90);
    UI.AddSliderInt("Max LBY", 0, 90);
    UI.AddSliderInt("Min Offset", 0, 60);
    UI.AddSliderInt("Max Offset", 0, 60);
    UI.AddHotkey("Inverter");
    UI.AddHotkey("Legit AA On Key");
    UI.AddSliderInt("0x03", 0, 0);
    UI.AddCheckbox("Better Weapon Config");
    UI.AddCheckbox("Automatic Mindmg");
    UI.AddDropdown("Weapon", ["General", "Pistol", "Heavy pistol", "Scout", "AWP", "Autosniper"]);
    for (i = 0; i < onetapWeapons.length; i++) {
        for (x = 0; x < weaponModes.length; x++) {
            UI.AddSliderInt(onetapWeapons[i] + " " + weaponModes[x] + " Damage", 0, 130);
            UI.AddSliderInt(onetapWeapons[i] + " " + weaponModes[x] + " Hitchance", 0, 100);
			setVisibility(onetapWeapons[i] + " " + weaponModes[x] + " Damage",false);
			setVisibility(onetapWeapons[i] + " " + weaponModes[x] + " Hitchance",false);
        }
        UI.AddCheckbox(onetapWeapons[i] + " Dynamic Hitboxes");
    }
    UI.AddDropdown("Dynamic Hitboxes", ["Normal", "Wall", "Mindmg", "DT"]);
    for (i = 0; i < onetapWeapons.length; i++) {
        for (y = 0; y < hitboxModes.length; y++) {
            UI.AddMultiDropdown(onetapWeapons[i] + " " + hitboxModes[y] + " Hitboxes", ["Head", "Upper chest", "Chest", "Lower chest", "Stomach", "Pelvis", "Legs", "Feet"]);
            UI.AddMultiDropdown(onetapWeapons[i] + " " + hitboxModes[y] + " Multipoint Hitboxes", ["Head", "Upper chest", "Chest", "Lower chest", "Stomach", "Pelvis", "Legs", "Feet"]);
			setVisibility(onetapWeapons[i] + " " + hitboxModes[y] + " Hitboxes",false);
			setVisibility(onetapWeapons[i] + " " + hitboxModes[y] + " Multipoint Hitboxes",false);
			setValue(onetapWeapons[i] + " " + hitboxModes[y] + " Hitboxes", (getValue(onetapWeapons[i] + " " + hitboxModes[y] + " Hitboxes") == 0) ? UI.GetValue("Rage",onetapWeapons[i].toUpperCase(),"Targeting","Hitboxes") : getValue(onetapWeapons[i] + " " + hitboxModes[y] + " Hitboxes"));
			setValue(onetapWeapons[i] + " " + hitboxModes[y] + " Multipoint Hitboxes", (getValue(onetapWeapons[i] + " " + hitboxModes[y] + " Multipoint Hitboxes") == 0) ? UI.GetValue("Rage",onetapWeapons[i].toUpperCase(),"Targeting","Multipoint hitboxes") : getValue(onetapWeapons[i] + " " + hitboxModes[y] + " Multipoint Hitboxes"));
        }
    }
    UI.AddHotkey("Minimum Damage");
    UI.AddHotkey("Minimum Accuracy");
    UI.AddSliderInt("0x04", 0, 0);
    UI.AddCheckbox("Dynamic FOV");
    UI.AddSliderInt("Min FOV", 0, 180);
    UI.AddSliderInt("Max FOV", 0, 180);
    UI.AddHotkey("Maximum FOV On Key");
    UI.AddSliderInt("0x05", 0, 0);
    UI.AddCheckbox("Slow Walk");
    UI.AddDropdown("Slow Walk Mode", ["Anti Skeet", "Anti Onetap", "Anti Brain"]);
    UI.AddSliderInt("Min Speed", 0, 100);
    UI.AddSliderInt("Max Speed", 0, 100);
    UI.AddSliderInt("0x06", 0, 0);
    UI.AddDropdown("Semi-Rage Fake Lag", ["Disabled", "HVH", "Match-Making", "Maximum", "Velocity", "Legit"]);
    UI.AddDropdown("Rage Fake Lag", ["Disabled", "HVH", "Match-Making", "Maximum", "Velocity", "Legit"]);
    UI.AddHotkey("Maximum Fake Lag");
    UI.AddSliderInt("0x07", 0, 0);
    UI.AddDropdown("Clan Tag", ["Disabled", "dhdj", "Random Chinese Characters", "Random Integers", "FPS", "Latency", "Weapon", "Health"]);
    UI.AddSliderInt("0x08", 0, 0);
    UI.AddCheckbox("Rage Bot Optimization");
    UI.AddCheckbox("Dynamic Multipoint");
    UI.AddCheckbox("Auto Swap");
	UI.AddCheckbox("Auto Wall Fightback");
    UI.AddSliderInt("No Scope Distance", 0, 2048);
    UI.AddMultiDropdown("Body Conditions", ["Slow Walk", "Low Health", "Luck"]);
    UI.AddMultiDropdown("Safe Point Conditions", ["Bunnyhopping", "Luck"]);
	UI.AddDropdown("Legit Auto Wall Penetration", ["Defensive","Aggresive"]);
    UI.AddDropdown("Auto Wall Mode", ["Disabled","Legit", "Rage"]);
    UI.AddHotkey("Auto Wall Switch");
    UI.AddSliderInt("0x09", 0, 0);
    UI.AddCheckbox("Show Indicators");
    UI.AddCheckbox("Show Watermark");
    UI.AddCheckbox("Show Direction");
    UI.AddCheckbox("Show Status");
    UI.AddCheckbox("Show Hit and Miss");
    UI.AddCheckbox("Show Damage Given");
    UI.AddCheckbox("Show Death Mark");
	UI.AddCheckbox("Show Enemy Weapons");
	UI.AddCheckbox("Hide Automatically");
    UI.AddCheckbox("Show Bullet Tracer");
    UI.AddSliderInt("Bullet Tracer Thickness", 2, 50);
	UI.AddDropdown("Top Bar", ["Disabled", "Gradient", "Reversed Gradient", "Blue & Red Pause"]);
    UI.AddMultiDropdown("Show Keybind States", ["Inverter", "Legit AA On Key", "Damage Modes", "Accuracy Modes", "Maximum FOV On Key", "Maximum Fake Lag", " Slow Walk", "Auto Wall", "Fake Duck"]);
    UI.AddDropdown("Desync Indicator", ["Disabled", "Equilateral Triangle", "Circular", "Right Triangle", "Smaller Triangle"]);
    UI.AddDropdown("Theme", ["Blanco", "Arco Iris", "Negro"]);
    UI.AddDropdown("Font", ["Bold", "Normal","Comic Sans","Times New Roman"]);
    UI.AddColorPicker("Real Angle");
    UI.AddColorPicker("Fake Angle");
    UI.AddColorPicker("Bullet Tracer Color");
    UI.AddColorPicker("UI Color");
    UI.AddSliderInt("0x0A", 0, 0);
    UI.AddCheckbox("Fast Duck");
    UI.AddCheckbox("Reply Bot");
    UI.AddCheckbox("Chat Spam");
    UI.AddCheckbox("Rage Crash");
    UI.AddCheckbox("Logging (spams a lot)");
    UI.AddHotkey("Fake Duck");
    UI.AddSliderInt("0x0B", 0, 0);
    UI.AddCheckbox("Load Default Config");
    UI.AddSliderInt("Performance Optimization", 1, 256);
    UI.AddLabel("PUT 64 IF YOU DON'T UNDERSTAND");
    UI.AddSliderInt("0x0C", 0, 0);
    UI.AddSliderInt("x1", 0, screen_size[0]);
    UI.AddSliderInt("y1", 0, screen_size[1]);
    UI.AddSliderInt("x2", 0, screen_size[0]);
    UI.AddSliderInt("y2", 0, screen_size[1]);
    UI.AddSliderInt("x3", 0, screen_size[0]);
    UI.AddSliderInt("y3", 0, screen_size[1]);
    UI.AddSliderInt("x5", 0, screen_size[0]);
    UI.AddSliderInt("y5", 0, screen_size[1]);
	UI.AddSliderInt("x6", 0, screen_size[0]);
    UI.AddSliderInt("y6", 0, screen_size[1]);
    setVisibility("x1", false);
    setVisibility("y1", false);
    setVisibility("x2", false);
    setVisibility("y2", false);
    setVisibility("x3", false);
    setVisibility("y3", false);
    setVisibility("x5", false);
    setVisibility("y5", false);
	setVisibility("x6", false);
    setVisibility("y6", false);
    setValue("x1", (getValue("x1") == 0) ? screen_size[0] - 320 : getValue("x1"));
    setValue("y1", (getValue("y1") == 0) ? Math.ceil(screen_size[1] * 0.01) : getValue("y1"));
    setValue("x2", (getValue("x2") == 0) ? screen_size[0] - 320 : getValue("x2"));
    setValue("y2", (getValue("y2") == 0) ? Math.ceil(screen_size[1] * 0.37) : getValue("y2"));
    setValue("x3", (getValue("x3") == 0) ? Math.ceil(screen_size[0] * 0.01) : getValue("x3"));
    setValue("y3", (getValue("y3") == 0) ? Math.ceil(screen_size[1] * 0.47) : getValue("y3"));
    setValue("x5", (getValue("x5") == 0) ? Math.ceil(screen_size[0] * 0.01) : getValue("x5"));
    setValue("y5", (getValue("y5") == 0) ? Math.ceil(screen_size[1] * 0.60) : getValue("y5"));
	setValue("x6", (getValue("x6") == 0) ? screen_size[0] - 275 : getValue("x6"));
    setValue("y6", (getValue("y6") == 0) ? Math.ceil(screen_size[1] * 0.20) : getValue("y6"));
    if (getValue("Semi-Rage Removals") == 0 && UI.GetValue("Visual", "WORLD", "Entities", "Removals") != 0) {
        setValue("Semi-Rage Removals", UI.GetValue("Visual", "WORLD", "Entities", "Removals"));
    }
    if (getValue("Rage Removals") == 0 && UI.GetValue("Visual", "WORLD", "Entities", "Removals") != 0) {
        setValue("Rage Removals", UI.GetValue("Visual", "WORLD", "Entities", "Removals"));
    }
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0);
	jsLoaded=true;
}

function loadDefaultConfig() {
    Object.keys(defaultConfig).forEach(function(key) {
        setValue(key, defaultConfig[key]);
    });
    setColor("Bullet Tracer Color", defaultConfig["Bullet Tracer Color"]);
    setColor("UI Color", defaultConfig["UI Color"]);
    setColor("Fake Angle", defaultConfig["Fake Angle"]);
    setColor("Real Angle", defaultConfig["Real Angle"]);
}

function setVisibility(key, visible) {
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", key, visible);
}

function getHotkey(key) {
    return UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", key);
}

function toggleHotkey(key) {
    UI.ToggleHotkey("Misc", "JAVASCRIPT", "Script items", key);
}

function getValue(key) {
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", key);
}

function setValue(key, value) {
    UI.SetValue("Misc", "JAVASCRIPT", "Script items", key, value);
}

function setColor(key, value) {
    UI.SetColor("Misc", "JAVASCRIPT", "Script items", key, value);
}

function getColor(key) {
    return UI.GetColor("Misc", "JAVASCRIPT", "Script items", key);
}

function getString(key) {
    return UI.GetString("Misc", "JAVASCRIPT", "Script items", key);
}

initializeMenuItems();

Cheat.RegisterCallback("Draw", "onMenuUpdate");
//@Menu End
//@Main Start
var logging = false;
var frameCount = 0;
var frameLimit = 60;

function onCreateMove() {
	if(!jsLoaded)return;
    othersUpdate();
    if (Globals.Tickcount() % 6 == 0 || onShotFire>0 || (Input.IsKeyPressed(0x20) && getValue("Air Mode"))) antiAimUpdate(getValue("Premium Anti-Aim"));
    if (getValue("Play Style") != 0 && getValue("Better Weapon Config")) weaponConfigUpdate();
    if (getValue("Play Style") != 0 && getValue("Rage Bot Optimization")) rageBotOptimizationUpdate();
    if (getValue("Play Style") != 0 && getValue("Slow Walk")) slowWalkUpdate();
    if (getValue("Play Style") != 0 && getValue("Fast Duck")) fastDuckUpdate();
    if (getValue("Play Style") != 0 && (("Rage Fake Lag") != 0 || getValue("Semi-Rage Fake Lag") != 0)) fakeLagUpdate();
	if(onShotFire>0){
		onShotFire--;
	}
}

function onDraw() {
    if (getFrameCount() >= frameLimit) {
        resetFrameCount();
    }
    if (getValue("Play Style") != 0 && getFrameCount() % frameLimit == 0 && getValue("Clan Tag") != 0) clanTagUpdate();
    if (getFrameCount() % frameLimit == 15 && getValue("Dynamic FOV")) {
        if (getValue("Play Style") == 1) {
            FOVUpdate();
        } else {
            setRageFOV(180);
        }
    }
    if (getValue("Play Style") != 0 && getFrameCount() % frameLimit == 30 && getValue("Chat Spam")) chatSpamUpdate();
    if (getValue("Play Style") != 0 && getFrameCount() % frameLimit == 45 && getValue("Logging (spams a lot)")) {
        logging = true;
    } else {
        logging = false;
    }
    if (getValue("Play Style") != 0 && getValue("Show Indicators")) {
        UIUpdate();
    }
    nextFrame();
}

function onUnload() {
    if (getValue("Dynamic Multipoint")) {
        if (JSON.stringify(defaultMulti) != JSON.stringify({
            "GENERAL": [0, 0],
            "PISTOL": [0, 0],
            "HEAVY PISTOL": [0, 0],
            "SCOUT": [0, 0],
            "AWP": [0, 0],
            "AUTOSNIPER": [0, 0]
        })) {
            setMultiPoint(defaultMulti);
        }
    }
    AntiAim.SetOverride(0);
	jsLoaded = false;
}

function nextFrame() {
    frameCount++;
}

function resetFrameCount() {
    frameCount = 0;
}

function getFrameCount() {
    return frameCount;
}

function getRandomChineseWord() {
    var _rsl = "";
    var _randomUniCode = Math.floor(Math.random() * (40870 - 19968) + 19968).toString(16);
    eval("_rsl=" + '"\\u' + _randomUniCode + '"');
    return _rsl;
}

function Print(msg) {
    if (logging) {
        Cheat.Print(msg + "\n");
    }
}

function PrintChat(msg) {
    if (logging) {
        Cheat.PrintChat(msg + "\n");
    }
}

function getRandomInteger(min, max) {
    return min + Math.ceil(Math.random() * (max - min));
}

Cheat.RegisterCallback("CreateMove", "onCreateMove");
Cheat.RegisterCallback("Draw", "onDraw");
Cheat.RegisterCallback("Unload", "onUnload");
//@Main End
//@Anti-Aim Start
var enableAA = true;
var aaDisabled = false;
var roundEnd = false;
var rageTarget = 0;
var shotStart = {};
var shotEnd = {};
var slowWalkInitialized = 9;
var slowWalkRealOffset = 0;
var slowWalkLBYOffset = 0;
var slowWalkFakeOffset = 0;
var slowWalkSwitched = 0;
var slowWalkJitterOffset = 0;
var slowWalkLowDelta = true;
var aaMode="Disabled";
var maxOffset = 0,
    minOffset = 0,
    MinLBY = 0,
    MaxLBY = 0;
var airYaw=-60;

function antiAimUpdate(enabled) {
    target = Ragebot.GetTarget();

    if (target != 0) {
        rageTarget = target;
    }

    if (getValue("Disable On") & (1 << 1) && !roundEnd) {
        shouldEnable = false;
        enemies = Entity.GetEnemies();
        for (i = 0; i < enemies.length; i++) {
            if (Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i])) {
                shouldEnable = true;
            }
        }
        if (shouldEnable) {
            enableAA = true;
        } else {
            enableAA = false;
        }
    }
    if (getValue("Disable On") & (1 << 2) && !roundEnd) {
        if (getRandomInteger(0, 10) > 1) {
            enableAA = true;
        } else {
            enableAA = false;
        }
    }
    if (getValue("Invert On") & (1 << 1) && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
        toggleHotkey("Inverter");
    }
    if (getValue("Invert On") & (1 << 4)) {
        if (getRandomInteger(0, 10) < 2) {
            toggleHotkey("Inverter");
        }
    }
    if (getValue("Dodge Bruteforce")) {
        head = Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0);
        if (head != 0) {
            Object.keys(shotStart).forEach(function(key) {
                if (shotStart.hasOwnProperty(key) && shotEnd.hasOwnProperty(key) && shotStart[key] != undefined && shotEnd[key] != undefined && shotStart[key][0] != undefined) {
                    start = JSON.parse(JSON.stringify(shotStart[key]));
                    end = JSON.parse(JSON.stringify(shotEnd[key]));
                    delete shotStart[key];
                    delete shotEnd[key];
                    vec = [end[0] - start[0], end[1] - start[1], end[2] - start[2]];
                    equation = [vec[1], -vec[2] - vec[0], vec[1], (vec[0] * start[1]) - (vec[1] * start[0]) - (vec[1] * start[2]) + (vec[2] * start[1])];
                    distance = Math.abs((equation[0] * head[0]) + (equation[1] * head[1]) + (equation[2] * head[2]) + equation[3]) / Math.sqrt(Math.pow(equation[0], 2) + Math.pow(equation[1], 2) + Math.pow(equation[2], 2));
                    //Cheat.PrintChat(distance + "\n");
                    if (distance < 20 && distance > 0) {
                        toggleHotkey("Inverter");
                    }
                }
            });
        }
    }

    if (enableAA && enabled && getValue("Play Style") != 0) {
        AntiAim.SetOverride(1);
        if ((getValue("Yaw Mode") == 0 && getValue("Play Style") == 2) || getValue("Freestanding Mode") != 0) {
            angles = Local.GetViewAngles();
            right = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1] + 60]);
            left = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1] - 60]);
            front = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1]]);
            diff = Math.abs(left - right);
        }
        if (getValue("Freestanding Mode") != 0 && !UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            if (front < 40) {
                if (getValue("Freestanding Mode") == 1) {
					aaMode="Freestanding Fake";
                    setInvert(right < left);
                } else if (getValue("Freestanding Mode") == 2) {
					aaMode="Freestanding Real";
                    setInvert(left < right);
                }
            }else{
				aaMode="Normal";
			}
        }else{
			aaMode="Normal";
		}
        invert = getHotkey("Inverter");
        if (getValue("Play Style") == 1) {
            setLegitAA(!invert);
        }
        if (getValue("Play Style") == 2) {
            if (getHotkey("Legit AA On Key")) {
                setLegitAA(!invert);
            } else {
                setRageAA(invert);
            }
        }
    } else {
        AntiAim.SetOverride(0);
        disableAA();
    }
}

function disableAA() {
    if (!aaDisabled) {
        UI.SetValue("Anti-Aim", "Extra", "Pitch", 0);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", false);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
        aaDisabled = true;
		aaMode="Disabled";
    }
}

function setLegitAA(invert) {
    aaDisabled = false;
    UI.SetValue("Anti-Aim", "Extra", "Pitch", 0);
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", false);
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180);
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
    if (invert) {
        AntiAim.SetFakeOffset(0);
        if (getValue("Jitter Real")) {
            realOffset = -getRandomInteger(0, 60);
            lbyOffset = getRandomInteger(60, 90);
        } else {
            realOffset = -60;
            lbyOffset = 90;
        }
    } else {
        AntiAim.SetFakeOffset(0);
        if (getValue("Jitter Real")) {
            realOffset = getRandomInteger(0, 60);
            lbyOffset = -getRandomInteger(60, 90);
        } else {
            realOffset = 60;
            lbyOffset = -90;
        }
    }
    if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk") && getValue("Slow Walk")) {
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true);
		aaMode="Slow Walk";
        if (slowWalkInitialized > 4) {
            slowWalkInitialized = 0;
            slowWalkSwitched++;
            if (slowWalkSwitched == 1) {
                toggleHotkey("Inverter");
            }
            if (slowWalkSwitched > 256) {
                slowWalkSwitched = 0;
            }
        } else {
            slowWalkInitialized++;
        }
		slowWalkRealOffset = getRandomInteger(50, 60);
        slowWalkLBYOffset = getRandomInteger(0, 1);
		if(getValue("On Shot Mode")==1 && onShotFire>0){
			aaMode="Slow Walk On Shot";
			slowWalkRealOffset=-slowWalkRealOffset;
			slowWalkLBYOffset=-slowWalkLBYOffset;
		}
        if (invert) {
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(-slowWalkRealOffset);
            AntiAim.SetLBYOffset(-slowWalkLBYOffset);
        } else {
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(slowWalkRealOffset);
            AntiAim.SetLBYOffset(slowWalkLBYOffset);
        }
    } else {
		if(getValue("On Shot Mode")==1 && onShotFire>0){
			aaMode="On Shot";
			realOffset=-realOffset;
			lbyOffset=-lbyOffset;
		}
        slowWalkInitialized = 9;
        slowWalkSwitched = 0;
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(realOffset);
        AntiAim.SetLBYOffset(lbyOffset);
    }
}

function setRageAA(invert) {
    aaDisabled = false;
    UI.SetValue("Anti-Aim", "Extra", "Pitch", 1);
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true);
    if (!UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk") || !getValue("Slow Walk")) {
        if (getValue("Jitter Mode") == 1) {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", getRandomInteger(-getValue("Max Jitter"), getValue("Max Jitter")));
        } else {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", getValue("Max Jitter"));
        }
    }
    switch (getValue("Desync Mode")) {
        case 0:
            minOffset = 40;
            maxOffset = 50;
            minLBY = 12;
            maxLBY = 20;
            break;
        case 1:
            minOffset = 15;
            maxOffset = 25;
            minLBY = 5;
            maxLBY = 10;
            break;
        case 2:
            minOffset = 55;
            maxOffset = 60;
            minLBY = 85;
            maxLBY = 90;
            break;
        case 3:
            minOffset = getValue("Min Offset");
            maxOffset = getValue("Max Offset");
            minLBY = getValue("Min LBY");
            maxLBY = getValue("Max LBY");
            break;
    }
    if (invert) {
        basedir = getRandomInteger(-(maxOffset - minOffset), 0);
        AntiAim.SetFakeOffset(0);
        realOffset = -minOffset - basedir;
        lbyOffset = getRandomInteger(minLBY, maxLBY);
    } else {
        basedir = getRandomInteger(0, (maxOffset - minOffset));
        AntiAim.SetFakeOffset(0);
        realOffset = minOffset + basedir;
        lbyOffset = -getRandomInteger(minLBY, maxLBY);
    }
	if (getValue("Yaw Mode") == 1) {
        yawOffset = -basedir + getRandomInteger(-getValue("Max Yaw"), getValue("Max Yaw"));
    } else {
        if (diff > 30) {
            if (right > left) {
                yawOffset = -basedir + getValue("Max Yaw");
            } else {
                yawOffset = -basedir - getValue("Max Yaw");
            }
        } else {
            yawOffset = -basedir;
        }
    }
	
	if(Input.IsKeyPressed(0x20)){
		if(airYaw<66){
			airYaw+=3;
		}else{
			airYaw=-66;
		}
	}else{
		airYaw=-66;
	}
	
	
    if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk") && getValue("Slow Walk")) {
		aaMode="Slow Walk";
        if (slowWalkInitialized > 4) {
            slowWalkInitialized = 0;
            slowWalkSwitched++;
            if (slowWalkSwitched == 1) {
				
				toggleHotkey("Inverter");
				/*
                enemies = Entity.GetEnemies();
                for (i = 0; i < enemies.length; i++) {
                    if (Entity.IsAlive(enemies[i]) && Entity.IsDormant(enemies[i]) == false) {
                        toggleHotkey("Inverter");
                        break;
                    }
                }
				*/
            }
            if (slowWalkSwitched > 1024) {
                slowWalkSwitched = 0;
            }
            if (getValue("Slow Walk Mode") == 0) {
				if (invert) {
                mode0RealOffset = getRandomInteger(25, 35);
                mode0LBYOffset = getRandomInteger(10, 20);
				}else{
				mode0RealOffset = getRandomInteger(30, 40);
                mode0LBYOffset = getRandomInteger(10, 20);
				}
				slowWalkYawOffset=-(mode0RealOffset/2);
				slowWalkFakeOffset = 0;
                slowWalkJitterOffset = 0;
            } else if (getValue("Slow Walk Mode") == 1) {
                slowWalkRealOffset = getRandomInteger(15, 19);
                slowWalkFakeOffset = -getRandomInteger(15, 19);
                slowWalkLBYOffset = getRandomInteger(20, 29);
                slowWalkJitterOffset = getRandomInteger(5, 10);
				slowWalkYawOffset = 0;
            } else {
                slowWalkRealOffset = getRandomInteger(5, 10);
                slowWalkFakeOffset = getRandomInteger(-5, -10);
                slowWalkLBYOffset = getRandomInteger(10, 20);
                slowWalkJitterOffset = getRandomInteger(0, 10);
				slowWalkYawOffset = 0;
            }
        } else {
            slowWalkInitialized++;
        }
		if(getValue("Slow Walk Mode") == 0){
			if(slowWalkInitialized%2==0){
				slowWalkYawOffset+=5;
				slowWalkLBYOffset=mode0LBYOffset-40;
				slowWalkRealOffset=mode0RealOffset-5;
			}else{
				slowWalkYawOffset-=5;
				slowWalkLBYOffset=mode0LBYOffset+40;
				slowWalkRealOffset=mode0RealOffset+5;
			}
		}
		if(getValue("On Shot Mode")==1 && onShotFire>0){
			aaMode="Slow Walk On Shot";
			slowWalkRealOffset=-slowWalkRealOffset;
			slowWalkLBYOffset=-slowWalkLBYOffset;
			slowWalkFakeOffset=-slowWalkFakeOffset;
		}
        if (invert) {
            AntiAim.SetFakeOffset(-slowWalkFakeOffset);
            AntiAim.SetRealOffset(-slowWalkRealOffset);
            AntiAim.SetLBYOffset(-slowWalkLBYOffset);
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -slowWalkYawOffset);
        } else {
            AntiAim.SetFakeOffset(slowWalkFakeOffset);
            AntiAim.SetRealOffset(slowWalkRealOffset);
            AntiAim.SetLBYOffset(slowWalkLBYOffset);
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", slowWalkYawOffset);
        }
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", slowWalkJitterOffset);
    } else {
		slowWalkYawOffset = 0;
		if(getValue("On Shot Mode")==1 && onShotFire>0){
			aaMode="On Shot";
			realOffset=-realOffset;
			lbyOffset=-lbyOffset;
		}
        slowWalkInitialized = 9;
        slowWalkSwitched = 0;
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(realOffset);
        AntiAim.SetLBYOffset(lbyOffset);
		if(Input.IsKeyPressed(0x20) && getValue("Air Mode")){
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", airYaw);
		}else{
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawOffset);
		}
    }
}

function setInvert(shouldInvert) {
    if (shouldInvert) {
        if (!getHotkey("Inverter")) {
            toggleHotkey("Inverter");
        }
    } else {
        if (getHotkey("Inverter")) {
            toggleHotkey("Inverter");
        }
    }
}

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

function rage_onRoundStart() {
    enableAA = true;
    roundEnd = false;
}

function rage_onRoundEnd() {
    if (getValue("Disable On") & (1 << 0)) {
        var players = Entity.GetEnemies();
        for (i = 0; i < players.length; i++) {
            if (Entity.IsAlive(players[i])) {
                return;
            }
        }
        enableAA = false;
        roundEnd = true;
    }
}

function rage_onPlayerHurt() {
    if (getValue("Invert On") & (1 << 2)) {
        if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) {
            toggleHotkey("Inverter");
        }
    }
}

function rage_onWeaponFire() {
    if (getValue("Invert On") & (1 << 0)) {
        if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) {
            toggleHotkey("Inverter");
        }
    }
    if (getValue("Invert On") & (1 << 3)) {
        if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == rageTarget) {
            toggleHotkey("Inverter");
        }
    }
    if (getValue("Dodge Bruteforce") && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
        if (Entity.IsEnemy(Entity.GetEntityFromUserID(Event.GetInt("userid")))) {
            shotStart[Entity.GetEntityFromUserID(Event.GetInt("userid"))] = Entity.GetEyePosition(Entity.GetEntityFromUserID(Event.GetInt("userid")));
        }
    }
}

function rage_onBulletImpact() {
    if (getValue("Dodge Bruteforce") && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
        if (Entity.IsEnemy(Entity.GetEntityFromUserID(Event.GetInt("userid")))) {
            shotEnd[Entity.GetEntityFromUserID(Event.GetInt("userid"))] = [Event.GetInt("x"), Event.GetInt("y"), Event.GetInt("z")];
        }
    }
}

Cheat.RegisterCallback("round_end", "rage_onRoundEnd");
Cheat.RegisterCallback("round_start", "rage_onRoundStart");
Cheat.RegisterCallback("player_hurt", "rage_onPlayerHurt");
Cheat.RegisterCallback("weapon_fire", "rage_onWeaponFire");
Cheat.RegisterCallback("bullet_impact", "rage_onBulletImpact");
//@Anti-Aim End
//@Weapon Config Start
var damageMode = "Normal"
var lastExploit = 0;

function weaponConfigUpdate() {
    target = Ragebot.GetTarget();

    if (target != 0) {
        rageTarget = target;
    }
    getCurrentWeapon(Entity.GetLocalPlayer());
    //559
    weaponDamageUpdate();
    weaponAccuracyUpdate();
}

function getOnetapHitboxName(index) {
    var hitboxName = "";
    switch (index) {
        case 0:
            hitboxName = "Head";
            break;
        case 1:
            hitboxName = "Neck";
            break;
        case 2:
            hitboxName = "Pelvis";
            break;
        case 3:
            hitboxName = "Body";
            break;
        case 4:
            hitboxName = "Thorax";
            break;
        case 5:
            hitboxName = "Chest";
            break;
        case 6:
            hitboxName = "Upper chest";
            break;
        case 7:
            hitboxName = "Left thigh";
            break;
        case 8:
            hitboxName = "Right thigh";
            break;
        case 9:
            hitboxName = "Left calf";
            break;
        case 10:
            hitboxName = "Right calf";
            break;
        case 11:
            hitboxName = "Left foot";
            break;
        case 12:
            hitboxName = "Right foot";
            break;
        case 13:
            hitboxName = "Left hand";
            break;
        case 14:
            hitboxName = "Right hand";
            break;
        case 15:
            hitboxName = "Left upper arm";
            break;
        case 16:
            hitboxName = "Left forearm";
            break;
        case 17:
            hitboxName = "Right upper arm";
            break;
        case 18:
            hitboxName = "Right forearm";
            break;
        default:
            hitboxName = "Generic";
    }

    return hitboxName;
}

function ragebotLogs() {
    lastExploit = Event.GetInt("exploit");
    Cheat.Print("[dhdj] DAMAGE MODE: " + damageMode + " \n");
}

function weaponDamageUpdate() {
    if (getHotkey("Minimum Damage")) {
        setDamageMode("Minimum");
		setHitboxes("Mindmg");
        return;
    }
    if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && (Exploit.GetCharge() == 1.0 || lastExploit == 1)) {
        setDamageMode("DT");
		setHitboxes("DT");
        if (getValue("Automatic Mindmg")) {
            if (Exploit.GetCharge() == 1.0) {
                if (Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") < (UI.GetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "Minimum damage") * 2) && Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") > 0 && UI.GetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "Minimum damage") < 101) {
                    UI.SetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "Minimum damage", (Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") / 2) + 1);
                    damageMode = "Auto DT";
                }
            } else {
                if (Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") < UI.GetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "Minimum damage") && Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") > 0 && UI.GetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "Minimum damage") < 101) {
                    UI.SetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "Minimum damage", Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") + 1);
                    damageMode = "Auto";
                }
            }
        }
        return;
    }
    if (Entity.IsValid(rageTarget) == true && Entity.IsAlive(rageTarget) && Entity.IsDormant(rageTarget) == false) {
        localPlayer_index = Entity.GetLocalPlayer();
        localPlayer_eyepos = Entity.GetEyePosition(localPlayer_index);
        damageMode = "Wall";
        for (x = 0; x < 13; x++) {
            hitboxPos = Entity.GetHitboxPosition(rageTarget, x);
            result = Trace.Bullet(localPlayer_index, rageTarget, localPlayer_eyepos, hitboxPos);
            if (result[2] && result[1] > getValue(currentWeapon + " Normal Damage")) {
                damageMode = "Normal";
                break;
            }
        }
        setDamageMode(damageMode);
		setHitboxes(damageMode);
        if (getValue("Automatic Mindmg")) {
            if (Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") < UI.GetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "Minimum damage") && Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") > 0 && UI.GetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "Minimum damage") < 101) {
                UI.SetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "Minimum damage", Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") + 1);
                damageMode = "Auto";
            }
        }
    } else {
		setHitboxes("Normal");
        setDamageMode("Normal");
    }
}

function weaponAccuracyUpdate() {
    if (getHotkey("Minimum Accuracy")) {
        setAccuracyMode("Minimum");
        return;
    }
    if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")) {
        setAccuracyMode("DT");
        return;
    }
    if (Entity.IsValid(rageTarget) == true && Entity.IsAlive(rageTarget) && Entity.IsDormant(rageTarget) == false) {
        localPlayer_index = Entity.GetLocalPlayer();
        localPlayer_eyepos = Entity.GetEyePosition(localPlayer_index);
        hitbox_pos = Entity.GetHitboxPosition(rageTarget, 0);
        result = Trace.Bullet(localPlayer_index, rageTarget, localPlayer_eyepos, hitbox_pos);
        if (result[2]) {
            setAccuracyMode("Normal");
        } else {
            setAccuracyMode("Wall");
        }
    } else {
        setAccuracyMode("Normal");
    }
}

//pistol 61 2 36 63 
//heavy pistol 64 1
//general 35 25 27 28 14 34 33 24 19 26 10 60 8 31
//scout 40
//awp 9
//autosniper 38

function getCurrentWeapon(player) {
    if (!Entity.IsAlive(player)) return "General";
    weapon = Entity.GetProp(player, "CBasePlayer", "m_hActiveWeapon");
    if (weapon == "m_hActiveWeapon") return "General";
    weapon = (Entity.GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
    if (weapon == 61 || weapon == 2 || weapon == 36 || weapon == 63) {
        return "Pistol";
    } else if (weapon == 1 || weapon == 64) {
        return "Heavy pistol";
    } else if (weapon == 40) {
        return "Scout";
    } else if (weapon == 9) {
        return "AWP";
    } else if (weapon == 38 || weapon == 11) {
        return "Autosniper";
    } else {
        return "General";
    }
}

function getCurrentWeaponConfig(player) {
    if (!Entity.IsAlive(player)) return "Targeting";
    weapon = Entity.GetProp(player, "CBasePlayer", "m_hActiveWeapon");
    if (weapon == "m_hActiveWeapon") return "Targeting";
    weapon = (Entity.GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
    if (weapon == 61 || weapon == 2 || weapon == 36 || weapon == 63) {
        return "Pistol config";
    } else if (weapon == 1 || weapon == 64) {
        return "Heavy pistol config";
    } else if (weapon == 40) {
        return "Scout config";
    } else if (weapon == 9) {
        return "AWP config";
    } else if (weapon == 38 || weapon == 11) {
        return "Auto config";
    } else {
        return "Targeting";
    }
}

iconList = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    7: "e",
    8: "f",
    9: "g",
    10: "h",
    11: "j",
    13: "k",
    14: "i",
    16: "l",
	17: "n",
    19: "C",
    23: "p",
    24: "q",
    25: "r",
    26: "s",
    27: "t",
    28: "u",
    30: "w",
    31: "x",
    32: "o",
    33: "t",
    34: "A",
    35: "B",
    36: "y",
    39: "E",
    40: "F",
	42: "G",
    43: "H",
    44: "I",
    45: "J",
    46: "K",
    47: "L",
	59: "O",
    61: "P",
    63: "Q",
    64: "R",
    38: "D",
    513: "1",
    514: "2",
    515: "3",
    516: "4",
    517: "5",
    518: "6",
    519: "7",
    520: "8",

}

function getWeaponIcon(player) {
    if (!Entity.IsAlive(player)) return "9";
    weapon = Entity.GetProp(player, "CBasePlayer", "m_hActiveWeapon");
    if (weapon == "m_hActiveWeapon") return "9";
    weapon = (Entity.GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
    if (iconList[weapon] != undefined) {
        return iconList[weapon];
    } else {
        return "9";
    }
}

function setDamageMode(mode) {
    damageMode = mode;
    UI.SetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "Minimum damage", getValue(currentWeapon+" " + mode + " Damage"));
}

function setAccuracyMode(mode) {
    UI.SetValue("Rage", currentWeapon.toUpperCase(), "Accuracy", "Hitchance", getValue(currentWeapon+" " + mode + " Hitchance"));
}
	
function setHitboxes(mode){
	if(getValue(currentWeapon+" Dynamic Hitboxes")){
		UI.SetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "Hitboxes", getValue(currentWeapon+" " + mode + " Hitboxes"));
		UI.SetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "Multipoint hitboxes", getValue(currentWeapon+" " + mode + " Multipoint Hitboxes"));
	}
}
    //@Weapon Config End
    //@Rage Bot Start
var defaultMulti = {
    "GENERAL": [0, 0],
    "PISTOL": [0, 0],
    "HEAVY PISTOL": [0, 0],
    "SCOUT": [0, 0],
    "AWP": [0, 0],
    "AUTOSNIPER": [0, 0]
};
var players = {};
var multiHitbox = 0;
var ignoreList = []
var onShotFire = 0;
var swapBack = false;
var playerWeaponFire=[];

function rageBotOptimizationUpdate() {
    target = Ragebot.GetTarget();

    if (target != 0) {
        rageTarget = target;
    }
    if (getValue("Dynamic Multipoint")) {
        multipointUpdate();
    }
    if (getValue("No Scope Distance") > 0 && Globals.Tickcount() % 32 == 0) {
        noScopeUpdate();
    }
    if (getValue("Safe Point Conditions") != 0) {
        calculateSafePointConditions();
    }
    if (getValue("Body Conditions") != 0) {
        calculateBodyConditions();
    }
    if (getValue("Play Style") == 1) {
		if (getHotkey("Auto Wall Switch")) {
			toggleHotkey("Auto Wall Switch");
			setValue("Auto Wall Mode",(getValue("Auto Wall Mode")==2)?0:(getValue("Auto Wall Mode")+1));
		}
		switch(getValue("Auto Wall Mode")){
			case 0:
				setAutoWall(false);
				break;
			case 1:
				ignoreIfCannotSee();
				break;
			case 2:
				setAutoWall(true);
				break;
		}
    } else {
        setAutoWall(true);
    }
    if (getValue("Auto Swap") && swapBack && !UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
        Global.ExecuteCommand("slot1");
        swapBack = false;
    }
}

function noScopeUpdate() {
    if (Entity.IsAlive(rageTarget) && !Entity.IsDormant(rageTarget)) {
        origin = Entity.GetRenderOrigin(rageTarget);
        myself = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
        distance_to_target = Math.sqrt(Math.pow(origin[0] - myself[0], 2) + Math.pow(origin[1] - myself[1], 2) + Math.pow(origin[2] - myself[2], 2));
        if (distance_to_target < getValue("No Scope Distance")) {
            UI.SetValue("Rage", "GENERAL", "General", "Auto scope", false);
        } else {
            UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true);
        }
    } else {
        UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true);
    }
}

function setAutoWall(on) {
    UI.SetValue("Rage", "GENERAL", "Targeting", "Disable autowall", !on);
    UI.SetValue("Rage", "PISTOL", "Pistol config", "Disable autowall", !on);
    UI.SetValue("Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall", !on);
    UI.SetValue("Rage", "SCOUT", "Scout config", "Disable autowall", !on);
    UI.SetValue("Rage", "AWP", "AWP config", "Disable autowall", !on);
    UI.SetValue("Rage", "AUTOSNIPER", "Auto config", "Disable autowall", !on);
}

function ignoreIfCannotSee() {　　
	penetrable=(getValue("Legit Auto Wall Penetration")==1)?0.98:0.99;
    ignoreList = [];
    enemies = Entity.GetEnemies();
    localEyePos = Entity.GetEyePosition(Entity.GetLocalPlayer());
    for (i = 0; i < enemies.length; i++) {
        if (Entity.IsAlive(enemies[i]) && Entity.IsDormant(enemies[i]) == false) {
			if(getValue("Auto Wall Fightback") && playerWeaponFire[enemies[i]]!=undefined && ((Globals.Tickcount()-playerWeaponFire[enemies[i]])<128)){
				//dunno what to add
			}else{
				cannotFire = true;
				for (x = 0; x < 18; x++) {
					enemyHitbox = Entity.GetHitboxPosition(enemies[i], x);
					if (typeof(enemyHitbox) != "undefined") {
						result = Trace.Line(Entity.GetLocalPlayer(), localEyePos, enemyHitbox);
						if (result[1] > penetrable) {
							cannotFire = false;
							break;
						}
					}
				}
				if (cannotFire) {
					ignoreList.push(enemies[i]);
				}
			}
        }else{
			ignoreList.push(enemies[i]);
		}
    }
    //Cheat.PrintChat(ignoreList+"\n");
    for (i = 0; i < ignoreList.length; i++) {
        Ragebot.IgnoreTarget(ignoreList[i]);
    }
    setAutoWall(true);
}

function ragebotoptimization_onWeaponFire(){
	if(getValue("Auto Wall Fightback")){
		playerWeaponFire[Entity.GetEntityFromUserID(Event.GetInt("userid"))]=Globals.Tickcount();
	}
	if(Entity.GetEntityFromUserID(Event.GetInt("userid"))==Entity.GetLocalPlayer()){
		onShotFire = 6;
	}
}

function getJump(index) {
    return Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]")[2]
}

function calculateSafePointConditions() {
    if (getValue("Safe Point Conditions") & (1 << 0)) {
        if (Math.abs(getJump(rageTarget)) >= 40) {
            Ragebot.ForceTargetSafety(rageTarget);
        }
    }
    if (getValue("Safe Point Conditions") & (1 << 1)) {
        if (getRandomInteger(0, 10) > 5) {
            Ragebot.ForceTargetSafety(rageTarget);
        }
    }
}

function calculateBodyConditions() {
    doBaim = false;
    if (getValue("Body Conditions") & (1 << 0)) {
        if (getVelocity(rageTarget) <= 90 && getVelocity(rageTarget) >= 20) {
            if (!UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
                UI.ToggleHotkey("Rage", "GENERAL", "General", "Force body aim");
            }
            doBaim = true;
        }
    }
    if (getValue("Body Conditions") & (1 << 1)) {
        if (Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") < 20) {
            if (!UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
                UI.ToggleHotkey("Rage", "GENERAL", "General", "Force body aim");
            }
            doBaim = true;
        }
    }
    if (getValue("Body Conditions") & (1 << 2)) {
        if (getRandomInteger(0, 10) > 5) {
            if (!UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
                UI.ToggleHotkey("Rage", "GENERAL", "General", "Force body aim");
            }
            doBaim = true;
        }
    }
    if (!doBaim) {
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
            UI.ToggleHotkey("Rage", "GENERAL", "General", "Force body aim");
        }
    }
}

function multipointUpdate() {
    if (JSON.stringify(defaultMulti) == JSON.stringify({
        "GENERAL": [0, 0],
        "PISTOL": [0, 0],
        "HEAVY PISTOL": [0, 0],
        "SCOUT": [0, 0],
        "AWP": [0, 0],
        "AUTOSNIPER": [0, 0]
    })) {
        saveDefaultMultiPoint();
    }
    if (players[rageTarget] == null || players[rageTarget] == undefined) {
        players[rageTarget] = duplicate(defaultMulti);
    }
    setMultiPoint(players[rageTarget]);
}

function ragebotoptimization_onRagebotFire() {
    if (getValue("Dynamic Multipoint")) {
        ragebot_target = Event.GetInt("target_index");
        ragebot_target_hitbox = Event.GetInt("hitbox");
        ragebot_target_hitchance = Event.GetInt("hitchance");
        ragebot_target_safepoint = Event.GetInt("safepoint");
        ragebot_target_exploit = Event.GetInt("exploit");
        targetName = Entity.GetName(ragebot_target);

        if (ragebot_target != rageTarget) {
            rageTarget = ragebot_target;
        }

        if (players[rageTarget] == null || players[rageTarget] == undefined) {
            players[rageTarget] = duplicate(defaultMulti);
        }

        if (ragebot_target_hitbox == 0) {
            multiHitbox = 0;
        } else {
            multiHitbox = 1;
        }
        players[rageTarget][currentWeapon.toUpperCase()][multiHitbox] -= 5;
        if (players[rageTarget][currentWeapon.toUpperCase()][multiHitbox] < 1) {
            players[rageTarget][currentWeapon.toUpperCase()][multiHitbox] = 1;
        }

    }
    if (getValue("Auto Swap") && (currentWeapon == "Scout" || currentWeapon == "AWP") && !UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
        Global.ExecuteCommand("slot3");
        swapBack = true;
    }
}

function ragebotoptimization_onPlayerHurt() {
    if (getValue("Dynamic Multipoint")) {
        if (Entity.GetEntityFromUserID(Event.GetInt("attacker")) == Entity.GetLocalPlayer() && getValue("Dynamic Multipoint")) {
            players[rageTarget][currentWeapon.toUpperCase()][multiHitbox] += 10;
            if (players[rageTarget][currentWeapon.toUpperCase()][multiHitbox] > 100) {
                players[rageTarget][currentWeapon.toUpperCase()][multiHitbox] = 100;
            }
        }
    }
}

function duplicate(theObject) {
    return JSON.parse(JSON.stringify(theObject));
}

function saveDefaultMultiPoint() {
    if (UI.GetValue("Rage", "GENERAL", "Targeting", "Force pointscale")) {
        defaultMulti["GENERAL"][0] = UI.GetValue("Rage", "GENERAL", "Targeting", "Head pointscale");
        defaultMulti["GENERAL"][1] = UI.GetValue("Rage", "GENERAL", "Targeting", "Body pointscale");
    }
    if (UI.GetValue("Rage", "PISTOL", "Pistol config", "Force pointscale")) {
        defaultMulti["PISTOL"][0] = UI.GetValue("Rage", "PISTOL", "Pistol config", "Head pointscale");
        defaultMulti["PISTOL"][1] = UI.GetValue("Rage", "PISTOL", "Pistol config", "Body pointscale");
    }
    if (UI.GetValue("Rage", "HEAVY PISTOL", "Heavy pistol config", "Force pointscale")) {
        defaultMulti["HEAVY PISTOL"][0] = UI.GetValue("Rage", "HEAVY PISTOL", "Heavy pistol config", "Head pointscale");
        defaultMulti["HEAVY PISTOL"][1] = UI.GetValue("Rage", "HEAVY PISTOL", "Heavy pistol config", "Body pointscale");
    }
    if (UI.GetValue("Rage", "SCOUT", "Scout config", "Force pointscale")) {
        defaultMulti["SCOUT"][0] = UI.GetValue("Rage", "SCOUT", "Scout config", "Head pointscale");
        defaultMulti["SCOUT"][1] = UI.GetValue("Rage", "SCOUT", "Scout config", "Body pointscale");
    }
    if (UI.GetValue("Rage", "AWP", "AWP config", "Force pointscale")) {
        defaultMulti["AWP"][0] = UI.GetValue("Rage", "AWP", "AWP config", "Head pointscale");
        defaultMulti["AWP"][1] = UI.GetValue("Rage", "AWP", "AWP config", "Body pointscale");
    }
    if (UI.GetValue("Rage", "AUTOSNIPER", "Auto config", "Force pointscale")) {
        defaultMulti["AUTOSNIPER"][0] = UI.GetValue("Rage", "AUTOSNIPER", "Auto config", "Head pointscale");
        defaultMulti["AUTOSNIPER"][1] = UI.GetValue("Rage", "AUTOSNIPER", "Auto config", "Body pointscale");
    }
}

function setMultiPoint(multipointData) {
    if (UI.GetValue("Rage", "GENERAL", "Targeting", "Force pointscale")) {
        UI.SetValue("Rage", "GENERAL", "Targeting", "Head pointscale", multipointData["GENERAL"][0]);
        UI.SetValue("Rage", "GENERAL", "Targeting", "Body pointscale", multipointData["GENERAL"][1]);
    }
    if (UI.GetValue("Rage", "PISTOL", "Pistol config", "Force pointscale")) {
        UI.SetValue("Rage", "PISTOL", "Pistol config", "Head pointscale", multipointData["PISTOL"][0]);
        UI.SetValue("Rage", "PISTOL", "Pistol config", "Body pointscale", multipointData["PISTOL"][1]);
    }
    if (UI.GetValue("Rage", "HEAVY PISTOL", "Heavy pistol config", "Force pointscale")) {
        UI.SetValue("Rage", "HEAVY PISTOL", "Heavy pistol config", "Head pointscale", multipointData["HEAVY PISTOL"][0]);
        UI.SetValue("Rage", "HEAVY PISTOL", "Heavy pistol config", "Body pointscale", multipointData["HEAVY PISTOL"][1]);
    }
    if (UI.GetValue("Rage", "SCOUT", "Scout config", "Force pointscale")) {
        UI.SetValue("Rage", "SCOUT", "Scout config", "Head pointscale", multipointData["SCOUT"][0]);
        UI.SetValue("Rage", "SCOUT", "Scout config", "Body pointscale", multipointData["SCOUT"][1]);
    }
    if (UI.GetValue("Rage", "AWP", "AWP config", "Force pointscale")) {
        UI.SetValue("Rage", "AWP", "AWP config", "Head pointscale", multipointData["AWP"][0]);
        UI.SetValue("Rage", "AWP", "AWP config", "Body pointscale", multipointData["AWP"][1]);
    }
    if (UI.GetValue("Rage", "AUTOSNIPER", "Auto config", "Force pointscale")) {
        UI.SetValue("Rage", "AUTOSNIPER", "Auto config", "Head pointscale", multipointData["AUTOSNIPER"][0]);
        UI.SetValue("Rage", "AUTOSNIPER", "Auto config", "Body pointscale", multipointData["AUTOSNIPER"][1]);
    }
}

Cheat.RegisterCallback("ragebot_fire", "ragebotoptimization_onRagebotFire");
Cheat.RegisterCallback("player_hurt", "ragebotoptimization_onPlayerHurt");
Cheat.RegisterCallback("ragebot_fire", "ragebotLogs");
Cheat.RegisterCallback("weapon_fire", "ragebotoptimization_onWeaponFire");
//Cheat.RegisterCallback("Draw", "ragebotoptimization_onDraw");
//@Rage Bot End
//@Slow Walk Start
function slowWalkUpdate() {
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            dir = [0, 0, 0]
            if (Input.IsKeyPressed(0x57)) {
                dir[0] += getRandomInteger(getValue("Min Speed"), getValue("Max Speed"));
            }
            if (Input.IsKeyPressed(0x44)) {
                dir[1] += getRandomInteger(getValue("Min Speed"), getValue("Max Speed"));
            }
            if (Input.IsKeyPressed(0x41)) {
                dir[1] -= getRandomInteger(getValue("Min Speed"), getValue("Max Speed"));
            }
            if (Input.IsKeyPressed(0x53)) {
                dir[0] -= getRandomInteger(getValue("Min Speed"), getValue("Max Speed"));
            }
            UserCMD.SetMovement(dir);
        }
    }
    //@Slow Walk End
    //@Fast Duck Start
var enableFakeLag = true;
var maxLevel = 28;

function fastDuckUpdate() {
        var buttons = UserCMD.GetButtons();
        maxLevel = (getValue("Play Style") == 1) ? 28 : 25;
        if (valve) {
            if (getHotkey("Fake Duck")) {
                enableFakeLag = false;
                duckAmount = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_flDuckAmount");
                UserCMD.Choke();
                if (duckAmount <= maxLevel / 100) {
                    crouched = true
                };
                if (duckAmount >= 0.8) {
                    crouched = false;
                    UserCMD.Send()
                };
                if (crouched) {
                    UserCMD.SetButtons(buttons | (1 << 2));
                } else {
                    UserCMD.SetButtons(buttons | (1 << 22));
                }
            } else {
                UserCMD.SetButtons(buttons | (1 << 22));
                enableFakeLag = true;
            }
        }
    }
    //@Fast Duck End
    //@Fake Lag Start
var fakeLagMode = 0;
var lastChokedCommands = 0;
var commandSequence = 0;

function fakeLagUpdate() {
    //realyaw = Local.GetRealYaw();
    //Cheat.Print(realyaw + "\n");
    if (onShotFire>0) {
        UserCMD.Send();
        return;
    }
    if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk") && getValue("Slow Walk")) {
        if (slowWalkSwitched % 3 == 0) {
            UserCMD.Choke();
        } else {
            UserCMD.Send();
        }
        return;
    }

    if (!enableFakeLag || !enableAA) return;
    if (getHotkey("Maximum Fake Lag") && fakeLagMode != 0) {
        if (getVelocity(Entity.GetLocalPlayer()) > 50) {
            UserCMD.Choke();
        } else {
            UserCMD.Send();
        }
        return;
    }

    if (getValue("Play Style") == 1) {
        fakeLagMode = getValue("Semi-Rage Fake Lag");
    }
    if (getValue("Play Style") == 2) {
        fakeLagMode = getValue("Rage Fake Lag");
    }

    switch (fakeLagMode) {
        case 1:
            if (Math.random() < 0.7) {
                if (Globals.ChokedCommands() > 14) {
                    UserCMD.Send();
                } else {
                    UserCMD.Choke();
                }
            } else {
                if (Globals.ChokedCommands() > 9) {
                    UserCMD.Send();
                } else {
                    UserCMD.Choke();
                }
            }
            break;
        case 2:
            if (Math.random() < 0.6) {
                if (Globals.ChokedCommands() > 6) {
                    UserCMD.Send();
                } else {
                    UserCMD.Choke();
                }
            } else {
                if (Globals.ChokedCommands() > 3) {
                    UserCMD.Send();
                } else {
                    UserCMD.Choke();
                }
            }
            break;
        case 3:
            UserCMD.Choke();
            break;
        case 4:
            if (getVelocity(Entity.GetLocalPlayer()) < 40) {
                UserCMD.Send();
            } else if (getVelocity(Entity.GetLocalPlayer()) < 100) {
                if (Math.random() < 0.6) {
                    UserCMD.Choke();
                } else {
                    USerCMD.Send();
                }
            } else if (getVelocity(Entity.GetLocalPlayer()) < 200) {
                if (Math.random() < 0.8) {
                    UserCMD.Choke();
                } else {
                    USerCMD.Send();
                }
            } else {
                UserCMD.Choke();
            }
            break;
        case 5:
            enemies = Entity.GetEnemies();
            unlag = true;
            for (i = 0; i < enemies.length; i++) {
                if (Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i])) {
                    unlag = false;
                    break;
                }
            }
            if (unlag) {
                UserCMD.Send();
            } else {
                UserCMD.Choke();
            }
            break;
    }
}

function getVelocity(index) {
        var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
        return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
    }
    //@Fake Lag End
    //@Clan Tag Start
var clantag = ["☠", "☠☠", "☠o", "☠o☠", "☠on", "☠on☠", "☠one☠", "☠onet", "☠onet☠", "☠oneta", "☠oneta☠", "☠onetap", "☠onetap☠", "☣onetap☣", "☠onetap☠", "☣onetap☣", "☠onetap☠", "☣onetap☣", "☠onetap☠", "☣onetap☣", "☛onetap☚", "☠onetap☠", "☣onetap☣", "☛onetap☚", "☠onetap☠", "☣onetap☣", "☛onetap☚", "☠onetap☠", "☣onetap☣", "☛onetap☚", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap", "★oneta", "★onet", "★one", "★on", "★o", "★", "★", "★", "★", "☠", "☠", "☠", "☠", "☠"]

function clanTagUpdate() {
        if (World.GetServerString() != "") {
            switch (getValue("Clan Tag")) {
                case 1:
                    Local.SetClanTag(clantag[Math.round(new Date().getTime() / 500) % clantag.length]);
                    break;
                case 2:
                    Local.SetClanTag(getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord());
                    break;
                case 3:
                    Local.SetClanTag(getRandomInteger(10000000, 99999999).toString());
                    break;
                case 4:
                    Local.SetClanTag(Math.ceil(1 / Global.Frametime()) + "FPS");
                    break;
                case 5:
                    Local.SetClanTag(Math.ceil(Local.Latency() * 1000) + "MS");
                    break;
                case 6:
                    Local.SetClanTag(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())).toString());
                    break;
                case 7:
                    Local.SetClanTag(Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_iHealth") + "HP");
                    break;
            }
        }
    }
    //@Clan Tag End
    //@FOV Start

function FOVUpdate() {
    if (getHotkey("Maximum FOV On Key")) {
        setRageFOV(getValue("Max FOV"));
        return;
    }
    if (Entity.IsAlive(Entity.GetLocalPlayer())) {
        distance = 0;
        FOV = getValue("Min FOV");
        enemies = Entity.GetEnemies();
        for (i = 0; i < enemies.length; i++) {
            if (Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i])) {
                origin = Entity.GetRenderOrigin(enemies[i]);
                myself = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
                distance_to_enemy = Math.sqrt(Math.pow(origin[0] - myself[0], 2) + Math.pow(origin[1] - myself[1], 2) + Math.pow(origin[2] - myself[2], 2));
                if (distance == 0 || distance_to_enemy < distance) {
                    distance = distance_to_enemy;
                }
            }
        }
        diff = 1000 - distance;
        if (diff > 0) {
            FOV += (getValue("Max FOV") - getValue("Min FOV")) * (diff / 1000);
        }
        FOV = Math.ceil(FOV);
        setRageFOV(FOV);
    }
}

function setRageFOV(fov) {
        UI.SetValue("Rage", "GENERAL", "Targeting", "FOV", fov);
        UI.SetValue("Rage", "PISTOL", "Targeting", "FOV", fov);
        UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "FOV", fov);
        UI.SetValue("Rage", "SCOUT", "Targeting", "FOV", fov);
        UI.SetValue("Rage", "AWP", "Targeting", "FOV", fov);
        UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "FOV", fov);
    }
    //@FOV End
    //@Chat Spam Start

function chatSpamUpdate() {
        Cheat.ExecuteCommand("say " + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord());
    }
    //@Chat Spam End
    //@Others Start
var currentWeapon = "General";
var currentWeaponConfig = "Targeting";
var enemyList = [];

function othersUpdate() {
    if (getValue("Rage Crash")) {
        Cheat.PrintChat("矺眣鑟媤锵咏看殽旯咥玡訢傔閝吣丝蛕粄蹞竪釡钦驁昈柘籱拙挀淔免鲇鵏姃厼玒麪饫邈郂诗瀘谞瑳豒圏囨蔚藙灦砸讗綜硏鍟疆肴阥鹩畡庙輚郌摖淛虵岊瞋椙繧曏橯稺箸籺脍銺浯潠狂赀咕牉羊敜蕨撋軟岓掘畧廢");
    }
    currentWeapon = getCurrentWeapon(Entity.GetLocalPlayer());
    currentWeaponConfig = getCurrentWeaponConfig(Entity.GetLocalPlayer());
    if (Globals.Tickcount() % 64 == 0) {
        if (getValue("Play Style") == 1) {
            UI.SetValue("Visual", "WORLD", "Entities", "Removals", getValue("Semi-Rage Removals"));
        }
        if (getValue("Play Style") == 2) {
            UI.SetValue("Visual", "WORLD", "Entities", "Removals", getValue("Rage Removals"));
        }
    }
    Exploit.OverrideTolerance(0);
    Exploit.OverrideShift(14);
	
	valve = Entity.GetProp(Entity.GetGameRulesProxy(), "CCSGameRulesProxy", "m_bIsValveDS");
}

function others_onPlayerSay() {
    if (getValue("Reply Bot")) {
        Cheat.ExecuteCommand("say " + Event.GetString("text"));
    }
}

Cheat.RegisterCallback("player_say", "others_onPlayerSay")
    //@Others End
var tickrate = Global.Tickrate();
var ping = Math.ceil(Global.Latency() * 1000);
var fps = Math.ceil(1 / Global.Frametime());
var today = new Date();
var datetime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var fakeLagMax = (fakeLagMode == 2) ? 6 : 14;
var fakeLag = 0;
var lastChoke = Globals.ChokedCommands();
var colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
var shot = {};
var hit = {};
var percentage = 1;
var percentageSum = 1;
var headScale = 100;
var bodyScale = 100;
var keybinds = [];

var theme_text = [30, 30, 30, 200];
var theme_bar_border = [80, 80, 80, 255];
var theme_bar_content = [120, 120, 120, 255];
var theme_bar_separator = false;
var theme_background_border = [210, 210, 210, 200];
var theme_background_margin = [230, 230, 230, 255];
var theme_background_content = [240, 240, 240, 255];
var theme_rainbow = false;

var theme_font = 1;

var damageList = [];

var playerLocation = {};
var deathTime = {};
var deathMark = 0;

var bullets = [];

var hitboxes = [
    'Generic',
    'Head',
    'Chest',
    'Stomach',
    'Left arm',
    'Right arm',
    'Left leg',
    'Right leg',
    'Body'
];

function UIUpdate() {
    if (getValue("Theme") == 0) {
        theme_text = [30, 30, 30, 200];
        theme_bar_border = [80, 80, 80, 255];
        theme_bar_content = [120, 120, 120, 255];
        theme_bar_separator = false;
        theme_background_border = [210, 210, 210, 200];
        theme_background_margin = [230, 230, 230, 255];
        theme_background_content = [240, 240, 240, 255];
        theme_rainbow = false;
    } else if (getValue("Theme") == 1) {
        theme_text = [255, 255, 255, 200];
        theme_bar_border = [40, 40, 40, 255];
        theme_bar_separator = false;
        theme_bar_content = [120, 120, 120, 255];
        theme_background_border = [30, 30, 30, 150];
        theme_background_margin = [30, 30, 30, 255];
        theme_background_content = [30, 30, 30, 255];
        theme_rainbow = true;
    } else {
        theme_text = [255, 255, 255, 200];
        theme_bar_border = [80, 80, 80, 255];
        theme_bar_content = [240, 240, 240, 255];
        theme_bar_separator = true;
        theme_background_border = [30, 30, 30, 150];
        theme_background_margin = [30, 30, 30, 255];
        theme_background_content = [30, 30, 30, 255];
        theme_rainbow = false;
    }
	/*
    if (getValue("Font") == 0) {
        theme_font = 1;
    } else {
        theme_font = 9;
    }*/
	switch(getValue("Font")){
		 case 0:
			theme_font=Render.AddFont( "Segoe UI", 9, 700);
			theme_font_big=Render.AddFont( "Segoe UI", 15, 700);
		 break;
		 case 1:
			theme_font=Render.AddFont( "Segoe UI", 9, 400);
			theme_font_big=Render.AddFont( "Segoe UI", 15, 400);
		 break;
		 case 2:
			theme_font=Render.AddFont( "Comic Sans MS", 9, 400);
			theme_font_big=Render.AddFont( "Comic Sans MS", 15, 400);
		 break;
		 case 3:
			theme_font=Render.AddFont( "Times New Roman", 9, 400);
			theme_font_big=Render.AddFont( "Times New Roman", 15, 400);
		 break;
	}
    if (getValue("Show Watermark")) drawWaterMark();
    if (getValue("Top Bar")!=0) drawRainbow();
    if (World.GetServerString() != "" && Entity.IsAlive(Entity.GetLocalPlayer())) {
        if (getValue("Premium Anti-Aim")) drawDesyncIndicator();
        if (getValue("Premium Anti-Aim") && getValue("Show Direction")) drawDirectionIndicator();
        if (getValue("Show Status")) drawStatusIndicator();
        if (getValue("Show Hit and Miss")) drawHitAndMiss();
        if (getValue("Show Damage Given")) drawDamageGiven();
        if (getValue("Show Death Mark")) drawDeathMark();
		if (getValue("Show Enemy Weapons")) drawEnemyWeapons();
        if (getValue("Show Bullet Tracer")) drawBulletTracer();
        if (getValue("Show Keybind States") != 0) drawKeybindStates();
        if (getHotkey("Fake Duck")) drawFakeDuckIndicator();
        dragMenuItems();
    }
}

var dx1 = 0,
    dy1 = 0,
    dx2 = 0,
    dy2 = 0,
    dx3 = 0,
    dy3 = 0,
    dx5 = 0,
    dy5 = 0,
	dx6 = 0,
	dy6 = 0;

function dragMenuItems() {
    cursorPos = Input.GetCursorPosition();
    if (Input.IsKeyPressed(0x01)) {
		if (cursorPos[0] >= getValue("x6") && cursorPos[1] >= getValue("y6") + 2 && cursorPos[0] <= getValue("x6") + 260 && cursorPos[1] <= getValue("y6") + 40+20*(Object.getOwnPropertyNames(enemyWeapons).length)) {
            if (dx6 != 0 && dy6 != 0) {
                setValue("x6", cursorPos[0] - dx6);
                setValue("y6", cursorPos[1] - 2 - dy6);
            }
            dx6 = cursorPos[0] - (getValue("x6"));
            dy6 = cursorPos[1] - (getValue("y6") + 2);
        } else
        if (cursorPos[0] >= getValue("x5") && cursorPos[1] >= getValue("y5") + 2 && cursorPos[0] <= getValue("x5") + 260 && cursorPos[1] <= getValue("y5") + 167) {
            if (dx5 != 0 && dy5 != 0) {
                setValue("x5", cursorPos[0] - dx5);
                setValue("y5", cursorPos[1] - 2 - dy5);
            }
            dx5 = cursorPos[0] - (getValue("x5"));
            dy5 = cursorPos[1] - (getValue("y5") + 2);
        } else
        if (cursorPos[0] >= getValue("x3") && cursorPos[1] >= getValue("y3") + 2 && cursorPos[0] <= getValue("x3") + 260 && cursorPos[1] <= getValue("y3") + 102) {
            if (dx3 != 0 && dy3 != 0) {
                setValue("x3", cursorPos[0] - dx3);
                setValue("y3", cursorPos[1] - 2 - dy3);
            }
            dx3 = cursorPos[0] - (getValue("x3"));
            dy3 = cursorPos[1] - (getValue("y3") + 2);
        } else
        if (cursorPos[0] >= getValue("x2") + 45 && cursorPos[1] >= getValue("y2") + 2 && cursorPos[0] <= getValue("x2") + 305 && cursorPos[1] <= getValue("y2") + 242) {
            if (dx2 != 0 && dy2 != 0) {
                setValue("x2", cursorPos[0] - 45 - dx2);
                setValue("y2", cursorPos[1] - 2 - dy2);
            }
            dx2 = cursorPos[0] - (getValue("x2") + 45);
            dy2 = cursorPos[1] - (getValue("y2") + 2);
        } else
        if (cursorPos[0] >= getValue("x1") + 45 && cursorPos[1] >= getValue("y1") + 2 && cursorPos[0] <= getValue("x1") + 305 && cursorPos[1] <= getValue("y1") + 57) {
            if (dx1 != 0 && dy1 != 0) {
                setValue("x1", cursorPos[0] - 45 - dx1);
                setValue("y1", cursorPos[1] - 2 - dy1);
            }
            dx1 = cursorPos[0] - (getValue("x1") + 45);
            dy1 = cursorPos[1] - (getValue("y1") + 2);
        }
    } else {
        dx1 = 0;
        dy1 = 0;
        dx2 = 0;
        dy2 = 0;
        dx3 = 0;
        dy3 = 0;
        dx5 = 0;
        dy5 = 0;
		dx6 = 0;
		dy6 = 0;
    }
}

var enemyWeapons={};
var lastEnemyWeapons={};
var noUpdate=0;

function drawEnemyWeapons(){
	//if(!valve)return;
	if(getFrameCount()%frameLimit == 0){
		lastEnemyWeapons=duplicate(enemyWeapons);
		enemyWeapons={};
		all_enemies = Entity.GetEnemies();
		living_enemies= [];
		for(i=0;i<all_enemies.length;i++){
			if(Entity.IsAlive(all_enemies[i])){
				living_enemies.push(all_enemies[i]);
				//Cheat.PrintChat(Entity.GetProp(all_enemies[i], "CCSPlayer", "m_iWeaponPurchasesThisRound")+"\n");
			}
		}
		for(i=0;i<living_enemies.length;i++){
			enemyWeapons[Entity.GetName(living_enemies[i])]="";
			weapons = Entity.GetWeapons(living_enemies[i]);
			for(x=0;x<weapons.length;x++){
				weapon = (Entity.GetProp(weapons[x], "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
				if(iconList[weapon]!=undefined){
					enemyWeapons[Entity.GetName(living_enemies[i])]+=iconList[weapon];
				}
			}
			if(Entity.GetProp(living_enemies[i], "CCSPlayer", "m_bHasHelmet")){
				enemyWeapons[Entity.GetName(living_enemies[i])]+="T";
			}
			if(Entity.GetProp(living_enemies[i], "CCSPlayerResource", "m_iArmor")>0){
				enemyWeapons[Entity.GetName(living_enemies[i])]+="S";
			}
			if(Entity.GetProp(living_enemies[i], "CCSPlayer", "m_bHasDefuser")){
				enemyWeapons[Entity.GetName(living_enemies[i])]+="U";
			}
		}
		if(JSON.stringify(lastEnemyWeapons)==JSON.stringify(enemyWeapons)){
			if(noUpdate<100){
				noUpdate++;
			}
		}else{
			noUpdate=0;
		}
	}
	if(getValue("Hide Automatically") && noUpdate>20){
		return;
	}
	Render.FilledRect(getValue("x6"), getValue("y6") + 2, 260, 40+20*(Object.getOwnPropertyNames(enemyWeapons).length), theme_background_border); // background
    Render.Rect(getValue("x6"), getValue("y6") + 2, 260, 40+20*(Object.getOwnPropertyNames(enemyWeapons).length), theme_background_margin);
    Render.FilledRect(getValue("x6") + 5, getValue("y6") + 7, 250, 30+20*(Object.getOwnPropertyNames(enemyWeapons).length), theme_background_content); // background1
    Render.String(getValue("x6") + 130, getValue("y6") + 12, 1, "ENEMY  WEAPONS", theme_text, 3);
    drawFilledOrRainbowRect(getValue("x6") + 10, getValue("y6") + 25, 240, 3, true); // lol
	i=0;
	/*
	Render.String(getValue("x6")-1000, getValue("y6") + 135, 0, "abcdefghijklmnopqrstuvwxyz", theme_text, 5);
	Render.String(getValue("x6")-1000, getValue("y6") + 155, 0, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", theme_text, 5);
	Render.String(getValue("x6")-1000, getValue("y6") + 175, 0, "1234567890", theme_text, 5);
	Render.String(getValue("x6")-1000, getValue("y6") + 195, 0, "!@#$%^&*()_+-=", theme_text, 5);
	*/
	Object.keys(enemyWeapons).forEach(function(key) {
		Render.StringCustom(getValue("x6") + 15, getValue("y6") + 35+i*20, 0, key, theme_text, theme_font);
		Render.String(getValue("x6") + 15+key.length*8, getValue("y6") + 35+i*20, 0, enemyWeapons[key], theme_text, 5);
		i++;
    });
}

function drawFakeDuckIndicator() {
    eyePos = Entity.GetEyePosition(Entity.GetLocalPlayer());
    origin = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
    eyePos[2] = origin[2] + 46 + (18 - (maxLevel + 1) / 100 * 18);
    screenPos = Render.WorldToScreen(eyePos);
    Render.FilledCircle(screenPos[0] + 1, screenPos[1], 7, [0, 0, 0, 150]);
    Render.Circle(screenPos[0] + 1, screenPos[1], 7, [255, 255, 255, 255]);
}

function UI_onBulletImpact() {
    if (!getValue("Show Bullet Tracer")) return;
    player = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    if (Entity.GetLocalPlayer() !== player) return;
    if (bullets.length > 20) bullets = [];
    eyePos = Entity.GetEyePosition(Entity.GetLocalPlayer());
    vector = [Event.GetFloat("x") - eyePos[0], Event.GetFloat("y") - eyePos[1], Event.GetFloat("z") - eyePos[2]];
    eyePos[0] += vector[0] * 0.01;
    eyePos[1] += vector[1] * 0.01;
    eyePos[2] += vector[2] * 0.01;
    bullets.push({
        "impact": [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")],
        "origin": eyePos,
        "time": Globals.Curtime()
    });
}

function drawBulletTracer() {
    if (bullets.length < 1) return;
    for (i = 0; i < bullets.length; i++) {
        if (bullets[i] != undefined) {
            if (bullets[i]["time"] + 2 < Globals.Curtime()) {
                delete bullets[i];
            } else {
                impact = Render.WorldToScreen(bullets[i]["impact"]);
                origin = Render.WorldToScreen(bullets[i]["origin"]);
                if (origin != undefined && impact != undefined) {
                    if (origin[2] == 0 && !UI.IsHotkeyActive("Visual", "WORLD", "View", "Thirdperson")) {
                        vector = [bullets[i]["impact"][0] - bullets[i]["origin"][0], bullets[i]["impact"][1] - bullets[i]["origin"][1], bullets[i]["impact"][2] - bullets[i]["origin"][2]];
                        newOrigin = duplicate(bullets[i]["origin"]);
                        length = getDistance(bullets[i]["impact"], newOrigin) - getDistance(bullets[i]["impact"], Entity.GetEyePosition(Entity.GetLocalPlayer()));
                        newOrigin[0] += vector[0] * (length / getDistance(bullets[i]["impact"], newOrigin) + 0.05);
                        newOrigin[1] += vector[1] * (length / getDistance(bullets[i]["impact"], newOrigin) + 0.05);
                        newOrigin[2] += vector[2] * (length / getDistance(bullets[i]["impact"], newOrigin) + 0.05);
                        origin = Render.WorldToScreen(newOrigin);
                    }
                    if (impact[2] != 0 && origin[1] < screen_size[1] && origin[0] < screen_size[0] && origin[0] > 0) {
                        Render.Line(impact[0], impact[1], origin[0], origin[1], getColor("Bullet Tracer Color"));
                        step = Math.floor(getColor("Bullet Tracer Color")[3] / getValue("Bullet Tracer Thickness"));
                        for (x = 1; x < getValue("Bullet Tracer Thickness"); x++) {
                            Render.Line(impact[0] + (x - 1), impact[1], origin[0] + x, origin[1], [getColor("Bullet Tracer Color")[0], getColor("Bullet Tracer Color")[1], getColor("Bullet Tracer Color")[2], getColor("Bullet Tracer Color")[3] - (x * step)]);
                            Render.Line(impact[0], impact[1] + (x - 1), origin[0], origin[1] + x, [getColor("Bullet Tracer Color")[0], getColor("Bullet Tracer Color")[1], getColor("Bullet Tracer Color")[2], getColor("Bullet Tracer Color")[3] - (x * step)]);
                            Render.Line(impact[0] - (x - 1), impact[1], origin[0] - x, origin[1], [getColor("Bullet Tracer Color")[0], getColor("Bullet Tracer Color")[1], getColor("Bullet Tracer Color")[2], getColor("Bullet Tracer Color")[3] - (x * step)]);
                            Render.Line(impact[0], impact[1] - (x - 1), origin[0], origin[1] - x, [getColor("Bullet Tracer Color")[0], getColor("Bullet Tracer Color")[1], getColor("Bullet Tracer Color")[2], getColor("Bullet Tracer Color")[3] - (x * step)]);
                        }
                    }
                }
            }
        }
    }
}

function getDistance(A, B) {
    return Math.sqrt(Math.pow(A[0] - B[0], 2) + Math.pow(A[1] - B[1], 2) + Math.pow(A[2] - B[2], 2));
}

function drawDeathMark() {
    enemies = Entity.GetEnemies();
    deathMark = Render.AddTexture("ot/scripts/death.png");
    //deathMark = Render.AddTexture("ot/scripts/nudes/"+getRandomInteger(1,14)+".png");
    //if(Globals.Tickcount()%256==0){
    //	deathMark = Render.AddTexture("ot/scripts/nudes/"+getRandomInteger(1,14)+".png");
    //}
    for (i = 0; i < enemies.length; i++) {
        pos = Entity.GetHitboxPosition(enemies[i], 0);
        if (Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i]) && pos != 0 && pos != [0, 0, 0] && pos != undefined) {
            playerLocation[enemies[i]] = pos;
            deathTime[enemies[i]] = 0;
        }
        if (!Entity.IsAlive(enemies[i]) && playerLocation[enemies[i]] != undefined) {
            if (deathTime[enemies[i]] < 300) {
                deathTime[enemies[i]]++;
                playerLocation[enemies[i]][2]++;
                myself = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
                distance_to_pic = Math.sqrt(Math.pow(playerLocation[enemies[i]][0] - myself[0], 2) + Math.pow(playerLocation[enemies[i]][1] - myself[1], 2) + Math.pow(playerLocation[enemies[i]][2] - myself[2], 2));
                if (distance_to_pic > 1000) distance_to_pic = 1000;
                screenpos = Render.WorldToScreen(playerLocation[enemies[i]]);
                //Render.TexturedRect( screenpos[0]-200*((1000-distance_to_pic)/1000), screenpos[1]-200*((1000-distance_to_pic)/1000), 400*((1000-distance_to_pic)/1000), 400*((1000-distance_to_pic)/1000), deathMark );
                Render.TexturedRect(screenpos[0] - 80 * ((1000 - distance_to_pic) / 1000), screenpos[1] - 80 * ((1000 - distance_to_pic) / 1000), 160 * ((1000 - distance_to_pic) / 1000), 160 * ((1000 - distance_to_pic) / 1000), deathMark);
            }
        }
    }
}

// Pasted from https://www.onetap.com/threads/release-cornflakes-indicator-script.27327/. LOLLOLLOLLOLLOL
function normalizeYaw(angle) {
    angle = (angle % 360 + 360) % 360;
    return angle > 180 ? angle - 360 : angle;
}

function drawKeybindStates() {
    //Cheat.Print(getValue("Show Keybind States")+"\n");
    if (getValue("Show Keybind States") & (1 << 0) && getValue("Premium Anti-Aim")) {
        if (getHotkey("Inverter")) {
            keybinds.push("INVERT");
        }
    }
    if (getValue("Show Keybind States") & (1 << 1) && getValue("Premium Anti-Aim")) {
        if (getHotkey("Legit AA On Key")) {
            keybinds.push("LEGIT");
        }
    }
    if (getValue("Show Keybind States") & (1 << 2) && getValue("Better Weapon Config")) {
        if (getHotkey("Minimum Damage")) {
            keybinds.push("MINDMG");
        } else if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")) {
            keybinds.push("DTDMG");
        }
    }
    if (getValue("Show Keybind States") & (1 << 3) && getValue("Better Weapon Config")) {
        if (getHotkey("Minimum Accuracy")) {
            keybinds.push("MINAC");
        } else if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")) {
            keybinds.push("DTAC");
        }
    }
    if (getValue("Show Keybind States") & (1 << 4) && getValue("Play Style") == 1) {
        if (getHotkey("Maximum FOV On Key")) {
            keybinds.push("FOV");
        }
    }
    if (getValue("Show Keybind States") & (1 << 5) && fakeLagMode != 0) {
        if (getHotkey("Maximum Fake Lag")) {
            keybinds.push("LAG");
        }
    }
    if (getValue("Show Keybind States") & (1 << 6)) {
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            keybinds.push("SLOW-WALK");
        }
    }
    if (getValue("Show Keybind States") & (1 << 7) && getValue("Play Style") == 1) {
        if (getValue("Auto Wall Mode") == 1) {
            keybinds.push("LEGIT AUTO-WALL");
        } else if (getValue("Auto Wall Mode") == 2) {
            keybinds.push("RAGE AUTO-WALL");
        }
    }
    if (getValue("Show Keybind States") & (1 << 8)) {
        if (getHotkey("Fake Duck")) {
            keybinds.push("FAKE-DUCK");
        }
    }
    drawAllKeybinds();
    keybinds = [];
}

function drawAllKeybinds() {
    x4 = screen_size[0] / 2;
    y4 = (screen_size[1] / 2) + 50;
    for (i = 0; i < keybinds.length; i++) {
        Render.StringCustom(x4, y4, 1, keybinds[i], getColor("UI Color"), theme_font_big);
        y4 += 25;
    }
}

function UI_onWeaponFire() {
    if (Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("userid")))) {
        if (shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] == undefined) {
            shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] = 1;
        } else {
            shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))]++;
        }
    }
}

function UI_onPlayerHurt() {
    if (Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("attacker")))) {
        if (hit[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] == undefined) {
            hit[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] = 1;
        } else {
            hit[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))]++;
        }
        if (damageList.length > 100) {
            damageList = [];
        }
        damageList.push({
            "target": Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt('userid'))),
            "weapon": getWeaponIcon(Entity.GetLocalPlayer()),
            "damage": Event.GetInt('dmg_health'),
            "hitbox": getHitboxName(Event.GetInt('hitgroup'))
        });
    }
}

function drawHitAndMiss() {
    if (shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] == undefined) shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] = 0;
    if (hit[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] == undefined) hit[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] = 0;
    if (getFrameCount() % frameLimit == 35) {
        percentage = (shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] == 0) ? 1 : hit[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] / shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))];
        percentage = (percentage > 1) ? 1 : percentage;
        shotSum = 0;
        hitSum = 0;
        Object.keys(shot).forEach(function(key) {
            shotSum += shot[key];
        });
        Object.keys(hit).forEach(function(key) {
            hitSum += hit[key];
        });
        percentageSum = (shotSum == 0) ? 1 : hitSum / shotSum;
        percentageSum = (percentageSum > 1) ? 1 : percentageSum;
    }
    Render.FilledRect(getValue("x3"), getValue("y3") + 2, 260, 100, theme_background_border); // background
    Render.Rect(getValue("x3"), getValue("y3") + 2, 260, 100, theme_background_margin);
    Render.FilledRect(getValue("x3") + 5, getValue("y3") + 7, 250, 90, theme_background_content); // background1
    Render.String(getValue("x3") + 130, getValue("y3") + 12, 1, "HIT | MISS", theme_text, 3);
    drawFilledOrRainbowRect(getValue("x3") + 10, getValue("y3") + 25, 240, 3, true); // lol
    Render.StringCustom(getValue("x3") + 15, getValue("y3") + 35, 0, "Weapon: " + Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) + " shot: " + shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] + " hit: " + hit[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))], theme_text, theme_font);
    Render.StringCustom(getValue("x3") + 15, getValue("y3") + 55, 0, "Current " + (percentage * 100).toFixed(0) + "%", theme_text, theme_font);
    Render.Rect(getValue("x3") + 100, getValue("y3") + 60, 145, 6, theme_bar_border);
    drawFilledOrRainbowRect(getValue("x3") + 100, getValue("y3") + 61, Math.floor(145 * percentage), 4, false);
    Render.StringCustom(getValue("x3") + 15, getValue("y3") + 75, 0, "Total " + (percentageSum * 100).toFixed(0) + "%", theme_text, theme_font);
    Render.Rect(getValue("x3") + 100, getValue("y3") + 80, 145, 6, theme_bar_border);
    drawFilledOrRainbowRect(getValue("x3") + 100, getValue("y3") + 81, Math.floor(145 * percentageSum), 4, false);
}

function drawDamageGiven() {
    Render.FilledRect(getValue("x5"), getValue("y5") + 2, 260, 165, theme_background_border); // background
    Render.Rect(getValue("x5"), getValue("y5") + 2, 260, 165, theme_background_margin);
    Render.FilledRect(getValue("x5") + 5, getValue("y5") + 7, 250, 155, theme_background_content); // background1
    Render.String(getValue("x5") + 130, getValue("y5") + 12, 1, "DAMAGE GIVEN", theme_text, 3);
    drawFilledOrRainbowRect(getValue("x5") + 10, getValue("y5") + 25, 240, 3, true); // lol
    Render.StringCustom(getValue("x5") + 15, getValue("y5") + 35, 0, "Target", theme_text, theme_font);
    Render.StringCustom(getValue("x5") + 70, getValue("y5") + 35, 0, "Weapon", theme_text, theme_font);
    Render.StringCustom(getValue("x5") + 135, getValue("y5") + 35, 0, "Damage", theme_text, theme_font);
    Render.StringCustom(getValue("x5") + 195, getValue("y5") + 35, 0, "Hitbox", theme_text, theme_font);

    if (damageList.length == 0) return;
    x = 0;
    for (i = damageList.length - 1; i > damageList.length - 6; i--) {
        if (i < 0) break;
        Render.StringCustom(getValue("x5") + 15, getValue("y5") + 55 + (20 * x), 0, damageList[i]["target"].toString(), theme_text, theme_font);
        Render.String(getValue("x5") + 70, getValue("y5") + 55 + (20 * x), 0, damageList[i]["weapon"].toString(), theme_text, 5);
        Render.StringCustom(getValue("x5") + 160, getValue("y5") + 55 + (20 * x), 1, damageList[i]["damage"].toString(), theme_text, theme_font);
        Render.StringCustom(getValue("x5") + 195, getValue("y5") + 55 + (20 * x), 0, damageList[i]["hitbox"].toString(), theme_text, theme_font);
        x++;
    }
}

function UI_onRoundStart() {
    deathTime = [];
}

function getHitboxName(index) {
    return hitboxes[index] || 'Generic';
}

function drawRainbow() {
    colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
	if(getValue("Top Bar")==1){
		Render.GradientRect(0, 0, screen_size[0], 3, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
	} else if(getValue("Top Bar")==2){
		Render.GradientRect(0, 0, screen_size[0], 3, 1, [colors.r, colors.b, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
	}else{
		Render.GradientRect(0, 0, screen_size[0], 3, 1, [colors.r, colors.b, colors.b, 255], [colors.r, colors.g, colors.g, 255]);
	}
}

function drawFilledOrRainbowRect(x, y, a, b, separator) {
    if (theme_rainbow) {
        Render.GradientRect(x, y, a, b, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
    } else {
        if (separator) {
            if (theme_bar_separator == false) {
                Render.FilledRect(x, y, a, b, theme_bar_content);
            } else {
                Render.GradientRect(x, y, a, b, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
            }
        } else {
            Render.FilledRect(x, y, a, b, theme_bar_content);
        }
    }
}

function drawStatusIndicator() {
        targetName = rageTarget == 0 ? "None" : Entity.GetName(rageTarget);
        if (getFrameCount() % frameLimit == 35) {
            headScale = UI.GetValue("Rage", currentWeapon.toUpperCase(), currentWeaponConfig, "Head pointscale");
            bodyScale = UI.GetValue("Rage", currentWeapon.toUpperCase(), currentWeaponConfig, "Body pointscale");
        }
        expectedDamage = UI.GetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "Minimum damage");
        desyncSize = Math.abs(normalizeYaw(Local.GetRealYaw() - Local.GetFakeYaw()));
        desyncSize = (desyncSize > 120) ? 120 : desyncSize;
        fakeLagMax = (fakeLagMode == 2 || fakeLagMode == 5) ? 6 : 14;
        if (Globals.ChokedCommands() == 0) {
            fakeLag = (lastChoke > fakeLagMax) ? fakeLagMax : lastChoke;
        } else {
            lastChoke = Globals.ChokedCommands();
        }
        rageFOV = UI.GetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "FOV");
        FOVMax = (getValue("Play Style") == 1 && getValue("Dynamic FOV") && getValue("Max FOV") != 0) ? getValue("Max FOV") : 180;
        accuracy = ((1 - Local.GetInaccuracy()) * 100).toFixed(2);

        Render.FilledRect(getValue("x2") + 45, getValue("y2") + 2, 260, 240, theme_background_border); // background
        Render.Rect(getValue("x2") + 45, getValue("y2") + 2, 260, 240, theme_background_margin);
        Render.FilledRect(getValue("x2") + 50, getValue("y2") + 7, 250, 230, theme_background_content); // background1
        Render.String(getValue("x2") + 175, getValue("y2") + 12, 1, "STATUS", theme_text, 3);
        drawFilledOrRainbowRect(getValue("x2") + 55, getValue("y2") + 25, 240, 3, true); // lol
        Render.StringCustom(getValue("x2") + 60, getValue("y2") + 35, 0, "Current Target: " + targetName, theme_text, theme_font);
        Render.StringCustom(getValue("x2") + 60, getValue("y2") + 55, 0, "Head Scale ", theme_text, theme_font);
        Render.Rect(getValue("x2") + 135, getValue("y2") + 59, 155, 6, theme_bar_border);
        drawFilledOrRainbowRect(getValue("x2") + 135, getValue("y2") + 60, Math.floor(155 * (headScale / 100)), 4, false);
        Render.StringCustom(getValue("x2") + 60, getValue("y2") + 75, 0, "Body Scale ", theme_text, theme_font);
        Render.Rect(getValue("x2") + 135, getValue("y2") + 79, 155, 6, theme_bar_border);
        drawFilledOrRainbowRect(getValue("x2") + 135, getValue("y2") + 80, Math.floor(155 * (bodyScale / 100)), 4, false);
        Render.StringCustom(getValue("x2") + 60, getValue("y2") + 95, 0, "Damage Mode: " + damageMode, theme_text, theme_font);
        Render.StringCustom(getValue("x2") + 60, getValue("y2") + 115, 0, "Expected Damage: " + expectedDamage + "HP", theme_text, theme_font);
        Render.StringCustom(getValue("x2") + 60, getValue("y2") + 135, 0, "Anti-Aim Mode: " + aaMode, theme_text, theme_font);
        Render.StringCustom(getValue("x2") + 60, getValue("y2") + 155, 0, "Desync ", theme_text, theme_font);
        Render.Rect(getValue("x2") + 135, getValue("y2") + 159, 155, 6, theme_bar_border);
        drawFilledOrRainbowRect(getValue("x2") + 135, getValue("y2") + 160, Math.floor(155 * (desyncSize / 120)), 4, false);
        Render.StringCustom(getValue("x2") + 60, getValue("y2") + 175, 0, "Fake Lag ", theme_text, theme_font);
        Render.Rect(getValue("x2") + 135, getValue("y2") + 179, 155, 6, theme_bar_border);
        drawFilledOrRainbowRect(getValue("x2") + 135, getValue("y2") + 180, Math.floor(155 * (fakeLag / fakeLagMax)), 4, false);
        Render.StringCustom(getValue("x2") + 60, getValue("y2") + 195, 0, "Rage FOV ", theme_text, theme_font);
        Render.Rect(getValue("x2") + 135, getValue("y2") + 199, 155, 6, theme_bar_border);
        drawFilledOrRainbowRect(getValue("x2") + 135, getValue("y2") + 200, Math.floor(155 * (rageFOV / FOVMax)), 4, false);
        Render.StringCustom(getValue("x2") + 60, getValue("y2") + 215, 0, "Accuracy ", theme_text, theme_font);
        Render.Rect(getValue("x2") + 135, getValue("y2") + 219, 155, 6, theme_bar_border);
        drawFilledOrRainbowRect(getValue("x2") + 135, getValue("y2") + 220, Math.floor(155 * (accuracy / 100)), 4, false);
    }
    //pasted!

function adjustAngle(angle) {
    if (angle < 0) {
        angle = (90 + angle * (-1));
    } else if (angle > 0) {
        angle = (90 - angle);
    }

    return angle;
}

function drawArc(x, y, radius, start_angle, percent, thickness, color) {
    var precision = (2 * Math.PI) / 200;
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

function drawDirectionIndicator() {
    Render.Circle(screen_size[0] / 2, screen_size[1] / 2, 29, [170, 170, 170, 200]);
    Render.Circle(screen_size[0] / 2, screen_size[1] / 2, 30, [180, 180, 180, 200]);
    Render.Circle(screen_size[0] / 2, screen_size[1] / 2, 31, [190, 190, 190, 200]);
    Render.Circle(screen_size[0] / 2, screen_size[1] / 2, 32, [180, 180, 180, 200]);
    Render.Circle(screen_size[0] / 2, screen_size[1] / 2, 33, [170, 170, 170, 200]);
    //Here we go with more pasted code. I love pasted code.
    /*
	viewYaw = Local.GetViewAngles()[1] - 180;
	fake = adjustAngle(Local.GetFakeYaw()-viewYaw);
	real = adjustAngle(Local.GetRealYaw()-viewYaw);
	drawArc(screen_size[0]/2,screen_size[1]/2,31,real - (50 * 0.5),50,3,[0,0,0,255]);
	drawArc(screen_size[0]/2,screen_size[1]/2,33,fake - (50 * 0.5),50,2,[255,255,255,255]);
	*/
}

function drawDesyncIndicator() {
    fakeBorderColor = getColor("Fake Angle");
    realBorderColor = getColor("Real Angle");
    fakeColor = fakeBorderColor;
    realColor = realBorderColor;
    if (fakeColor[3] > 50) {
        fakeColor[3] -= 50;
    }
    if (fakeColor[2] < 225) {
        fakeColor[2] += 30;
    }
    if (fakeColor[1] < 225) {
        fakeColor[1] += 30;
    }
    if (fakeColor[0] < 225) {
        fakeColor[0] += 30;
    }
    if (realColor[3] > 50) {
        realColor[3] -= 50;
    }
    if (realColor[2] < 225) {
        realColor[2] += 30;
    }
    if (realColor[1] < 225) {
        realColor[1] += 30;
    }
    if (realColor[0] < 225) {
        realColor[0] += 30;
    }
    if (getValue("Desync Indicator") == 1) {
        if (!getHotkey("Inverter")) {
            Render.Line(screen_size[0] / 2 + 75, screen_size[1] / 2 + 14, screen_size[0] / 2 + 75, screen_size[1] / 2 - 14, realBorderColor);
            Render.Line(screen_size[0] / 2 + 75, screen_size[1] / 2 - 14, screen_size[0] / 2 + 100, screen_size[1] / 2, realBorderColor);
            Render.Line(screen_size[0] / 2 + 100, screen_size[1] / 2, screen_size[0] / 2 + 75, screen_size[1] / 2 + 14, realBorderColor);
            Render.Line(screen_size[0] / 2 - 75, screen_size[1] / 2 + 14, screen_size[0] / 2 - 75, screen_size[1] / 2 - 14, fakeBorderColor);
            Render.Line(screen_size[0] / 2 - 75, screen_size[1] / 2 - 14, screen_size[0] / 2 - 100, screen_size[1] / 2, fakeBorderColor);
            Render.Line(screen_size[0] / 2 - 100, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2 + 14, fakeBorderColor);
            Render.Polygon([
                [screen_size[0] / 2 + 75, screen_size[1] / 2 + 14],
                [screen_size[0] / 2 + 75, screen_size[1] / 2 - 14],
                [screen_size[0] / 2 + 100, screen_size[1] / 2]
            ], realColor);
            Render.Polygon([
                [screen_size[0] / 2 - 100, screen_size[1] / 2],
                [screen_size[0] / 2 - 75, screen_size[1] / 2 - 14],
                [screen_size[0] / 2 - 75, screen_size[1] / 2 + 14]
            ], fakeColor);
        } else {
            Render.Line(screen_size[0] / 2 + 75, screen_size[1] / 2 + 14, screen_size[0] / 2 + 75, screen_size[1] / 2 - 14, fakeBorderColor);
            Render.Line(screen_size[0] / 2 + 75, screen_size[1] / 2 - 14, screen_size[0] / 2 + 100, screen_size[1] / 2, fakeBorderColor);
            Render.Line(screen_size[0] / 2 + 100, screen_size[1] / 2, screen_size[0] / 2 + 75, screen_size[1] / 2 + 14, fakeBorderColor);
            Render.Line(screen_size[0] / 2 - 75, screen_size[1] / 2 + 14, screen_size[0] / 2 - 75, screen_size[1] / 2 - 14, realBorderColor);
            Render.Line(screen_size[0] / 2 - 75, screen_size[1] / 2 - 14, screen_size[0] / 2 - 100, screen_size[1] / 2, realBorderColor);
            Render.Line(screen_size[0] / 2 - 100, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2 + 14, realBorderColor);
            Render.Polygon([
                [screen_size[0] / 2 + 75, screen_size[1] / 2 + 14],
                [screen_size[0] / 2 + 75, screen_size[1] / 2 - 14],
                [screen_size[0] / 2 + 100, screen_size[1] / 2]
            ], fakeColor);
            Render.Polygon([
                [screen_size[0] / 2 - 100, screen_size[1] / 2],
                [screen_size[0] / 2 - 75, screen_size[1] / 2 - 14],
                [screen_size[0] / 2 - 75, screen_size[1] / 2 + 14]
            ], realColor);
        }
    } else if (getValue("Desync Indicator") == 2) {
        if (!getHotkey("Inverter")) {
            Render.Circle(screen_size[0] / 2 + 75, screen_size[1] / 2, 15, realBorderColor);
            Render.Circle(screen_size[0] / 2 + 75, screen_size[1] / 2, 16, realBorderColor);
            Render.FilledCircle(screen_size[0] / 2 + 75, screen_size[1] / 2, 15, realColor);
            Render.Circle(screen_size[0] / 2 - 75, screen_size[1] / 2, 15, fakeBorderColor);
            Render.Circle(screen_size[0] / 2 - 75, screen_size[1] / 2, 16, fakeBorderColor);
            Render.FilledCircle(screen_size[0] / 2 - 75, screen_size[1] / 2, 15, fakeColor);
        } else {
            Render.Circle(screen_size[0] / 2 + 75, screen_size[1] / 2, 15, fakeBorderColor);
            Render.Circle(screen_size[0] / 2 + 75, screen_size[1] / 2, 16, fakeBorderColor);
            Render.FilledCircle(screen_size[0] / 2 + 75, screen_size[1] / 2, 15, fakeColor);
            Render.Circle(screen_size[0] / 2 - 75, screen_size[1] / 2, 15, realBorderColor);
            Render.Circle(screen_size[0] / 2 - 75, screen_size[1] / 2, 16, realBorderColor);
            Render.FilledCircle(screen_size[0] / 2 - 75, screen_size[1] / 2, 15, realColor);
        }
    } else if (getValue("Desync Indicator") == 3) {
        if (!getHotkey("Inverter")) {
            Render.Line(screen_size[0] / 2 + 75, screen_size[1] / 2 + 16, screen_size[0] / 2 + 75, screen_size[1] / 2, realBorderColor);
            Render.Line(screen_size[0] / 2 + 75, screen_size[1] / 2, screen_size[0] / 2 + 100, screen_size[1] / 2, realBorderColor);
            Render.Line(screen_size[0] / 2 + 100, screen_size[1] / 2, screen_size[0] / 2 + 75, screen_size[1] / 2 + 16, realBorderColor);
            Render.Line(screen_size[0] / 2 - 100, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2, fakeBorderColor);
            Render.Line(screen_size[0] / 2 - 75, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2 + 16, fakeBorderColor);
            Render.Line(screen_size[0] / 2 - 75, screen_size[1] / 2 + 16, screen_size[0] / 2 - 100, screen_size[1] / 2, fakeBorderColor);
            Render.Polygon([
                [screen_size[0] / 2 + 75, screen_size[1] / 2 + 16],
                [screen_size[0] / 2 + 75, screen_size[1] / 2],
                [screen_size[0] / 2 + 100, screen_size[1] / 2]
            ], realColor);
            Render.Polygon([
                [screen_size[0] / 2 - 100, screen_size[1] / 2],
                [screen_size[0] / 2 - 75, screen_size[1] / 2],
                [screen_size[0] / 2 - 75, screen_size[1] / 2 + 16]
            ], fakeColor);
        } else {
            Render.Line(screen_size[0] / 2 + 75, screen_size[1] / 2 + 16, screen_size[0] / 2 + 75, screen_size[1] / 2, fakeBorderColor);
            Render.Line(screen_size[0] / 2 + 75, screen_size[1] / 2, screen_size[0] / 2 + 100, screen_size[1] / 2, fakeBorderColor);
            Render.Line(screen_size[0] / 2 + 100, screen_size[1] / 2, screen_size[0] / 2 + 75, screen_size[1] / 2 + 16, fakeBorderColor);
            Render.Line(screen_size[0] / 2 - 100, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2, realBorderColor);
            Render.Line(screen_size[0] / 2 - 75, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2 + 16, realBorderColor);
            Render.Line(screen_size[0] / 2 - 75, screen_size[1] / 2 + 16, screen_size[0] / 2 - 100, screen_size[1] / 2, realBorderColor);
            Render.Polygon([
                [screen_size[0] / 2 + 75, screen_size[1] / 2 + 16],
                [screen_size[0] / 2 + 75, screen_size[1] / 2],
                [screen_size[0] / 2 + 100, screen_size[1] / 2]
            ], fakeColor);
            Render.Polygon([
                [screen_size[0] / 2 - 100, screen_size[1] / 2],
                [screen_size[0] / 2 - 75, screen_size[1] / 2],
                [screen_size[0] / 2 - 75, screen_size[1] / 2 + 16]
            ], realColor);
        }
    } else if (getValue("Desync Indicator") == 4) {
        if (!getHotkey("Inverter")) {
            Render.Line(screen_size[0] / 2 + 75, screen_size[1] / 2 + 10, screen_size[0] / 2 + 75, screen_size[1] / 2 - 10, realBorderColor);
            Render.Line(screen_size[0] / 2 + 75, screen_size[1] / 2 - 10, screen_size[0] / 2 + 90, screen_size[1] / 2, realBorderColor);
            Render.Line(screen_size[0] / 2 + 90, screen_size[1] / 2, screen_size[0] / 2 + 75, screen_size[1] / 2 + 10, realBorderColor);
            Render.Line(screen_size[0] / 2 - 75, screen_size[1] / 2 + 10, screen_size[0] / 2 - 75, screen_size[1] / 2 - 10, fakeBorderColor);
            Render.Line(screen_size[0] / 2 - 75, screen_size[1] / 2 - 10, screen_size[0] / 2 - 90, screen_size[1] / 2, fakeBorderColor);
            Render.Line(screen_size[0] / 2 - 90, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2 + 10, fakeBorderColor);
            Render.Polygon([
                [screen_size[0] / 2 + 75, screen_size[1] / 2 + 10],
                [screen_size[0] / 2 + 75, screen_size[1] / 2 - 10],
                [screen_size[0] / 2 + 90, screen_size[1] / 2]
            ], realColor);
            Render.Polygon([
                [screen_size[0] / 2 - 90, screen_size[1] / 2],
                [screen_size[0] / 2 - 75, screen_size[1] / 2 - 10],
                [screen_size[0] / 2 - 75, screen_size[1] / 2 + 10]
            ], fakeColor);
        } else {
            Render.Line(screen_size[0] / 2 + 75, screen_size[1] / 2 + 10, screen_size[0] / 2 + 75, screen_size[1] / 2 - 10, fakeBorderColor);
            Render.Line(screen_size[0] / 2 + 75, screen_size[1] / 2 - 10, screen_size[0] / 2 + 90, screen_size[1] / 2, fakeBorderColor);
            Render.Line(screen_size[0] / 2 + 90, screen_size[1] / 2, screen_size[0] / 2 + 75, screen_size[1] / 2 + 10, fakeBorderColor);
            Render.Line(screen_size[0] / 2 - 75, screen_size[1] / 2 + 10, screen_size[0] / 2 - 75, screen_size[1] / 2 - 10, realBorderColor);
            Render.Line(screen_size[0] / 2 - 75, screen_size[1] / 2 - 10, screen_size[0] / 2 - 90, screen_size[1] / 2, realBorderColor);
            Render.Line(screen_size[0] / 2 - 90, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2 + 10, realBorderColor);
            Render.Polygon([
                [screen_size[0] / 2 + 75, screen_size[1] / 2 + 10],
                [screen_size[0] / 2 + 75, screen_size[1] / 2 - 10],
                [screen_size[0] / 2 + 90, screen_size[1] / 2]
            ], fakeColor);
            Render.Polygon([
                [screen_size[0] / 2 - 90, screen_size[1] / 2],
                [screen_size[0] / 2 - 75, screen_size[1] / 2 - 10],
                [screen_size[0] / 2 - 75, screen_size[1] / 2 + 10]
            ], realColor);
        }
    }
}

//yes this part of the code is pasted. I didn't even change the comment LOL.
function drawWaterMark() {
    //Cheat.Print(screen_size[0]+"\n");
    if (getFrameCount() % frameLimit == 50) {
        ping = Math.ceil(Global.Latency() * 1000);
        fps = Math.ceil(1 / Global.Frametime());
    }
    if (getFrameCount() % frameLimit == 10) {
        today = new Date();
        datetime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        tickrate = Global.Tickrate();
    }

    Render.FilledRect(getValue("x1") + 45, getValue("y1") + 2, 260, 55, theme_background_border); // background
    Render.Rect(getValue("x1") + 45, getValue("y1") + 2, 260, 55, theme_background_margin);
    Render.FilledRect(getValue("x1") + 50, getValue("y1") + 7, 250, 45, theme_background_content); // background1
    Render.String(getValue("x1") + 122, getValue("y1") + 37, 0, "TCK   ", [120, 120, 120, 255], 3); //TCK
    Render.String(getValue("x1") + 127, getValue("y1") + 37, 0, "          " + tickrate, theme_text, 3); // TCK1
    Render.Rect(getValue("x1") + 120, getValue("y1") + 35, 23, 13, [120, 120, 120, 255]); // TCK2
    Render.Rect(getValue("x1") + 170, getValue("y1") + 35, 6, 13, [120, 120, 120, 255]); // ping
    Render.Rect(getValue("x1") + 177, getValue("y1") + 38, 6, 10, [120, 120, 120, 255]); // ping1
    Render.Rect(getValue("x1") + 184, getValue("y1") + 41, 6, 7, [120, 120, 120, 255]); // ping2
    Render.Circle(getValue("x1") + 237, getValue("y1") + 41, 6, [120, 120, 120, 255]); // clock
    Render.Line(getValue("x1") + 237, getValue("y1") + 42, getValue("x1") + 237, getValue("y1") + 36, [120, 120, 120, 255]); // clock1
    Render.Line(getValue("x1") + 237, getValue("y1") + 42, getValue("x1") + 243, getValue("y1") + 42, [120, 120, 120, 255]); // clock2
    Render.String(getValue("x1") + 192, getValue("y1") + 37, 0, " " + ping + "ms", theme_text, 3);
    Render.Rect(getValue("x1") + 67, getValue("y1") + 33, 21, 13, [120, 120, 120, 255]); // fps2
    Render.Rect(getValue("x1") + 69, getValue("y1") + 31, 21, 13, [120, 120, 120, 255]); // fps3     
    Render.FilledRect(getValue("x1") + 65, getValue("y1") + 35, 21, 13, theme_background_content); // background fps
    Render.Rect(getValue("x1") + 65, getValue("y1") + 35, 21, 13, [120, 120, 120, 255]); // fps1
    Render.String(getValue("x1") + 67, getValue("y1") + 37, 0, "FPS   ", [120, 120, 120, 255], 3);
    Render.String(getValue("x1") + 72, getValue("y1") + 37, 0, "           " + fps, theme_text, 3);
    Render.String(getValue("x1") + 247, getValue("y1") + 37, 0, " " + datetime, theme_text, 3);
    drawFilledOrRainbowRect(getValue("x1") + 55, getValue("y1") + 25, 240, 3, true); // lol
    Render.String(getValue("x1") + 175, getValue("y1") + 12, 1, "ONETAP  |  DHDJ", theme_text, 3);
}

function HSV2RGB(h, s, v) {
    var r, g, b, i, f, p, q, t;

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0:
            r = v,
                g = t,
                b = p;
            break;
        case 1:
            r = q,
                g = v,
                b = p;
            break;
        case 2:
            r = p,
                g = v,
                b = t;
            break;
        case 3:
            r = p,
                g = q,
                b = v;
            break;
        case 4:
            r = t,
                g = p,
                b = v;
            break;
        case 5:
            r = v,
                g = p,
                b = q;
            break;
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

Cheat.RegisterCallback("weapon_fire", "UI_onWeaponFire");
Cheat.RegisterCallback("player_hurt", "UI_onPlayerHurt");
Cheat.RegisterCallback('round_start', 'UI_onRoundStart');
Cheat.RegisterCallback('bullet_impact', 'UI_onBulletImpact');
/* Callbacks
onMenuUpdate
onCreateMove
onDraw
onUnload
rage_onRoundEnd
rage_onRoundStart
rage_onPlayerHurt
rage_onWeaponFire
rage_onBulletImpact
ragebotoptimization_onRagebotFire
ragebotoptimization_onPlayerHurt
ragebotoptimization_onWeaponFire
others_onPlayerSay
UI_onWeaponFire
UI_onPlayerHurt
UI_onRoundStart
UI_onBulletImpact
*/

//customized part
/*
//customized part
UI.AddCheckbox("SPECIAL UI");
UI.AddSliderInt("xxx", 0, screen_size[0]);
UI.AddSliderInt("yyy", 0, screen_size[1]);
var dxxx=0;
var dyyy=0;

var activeColor=[87,250,255,255];

function specialOnDraw(){
	if(!getValue("SPECIAL UI")) return;
	if (World.GetServerString() == "") return;
	if(!Entity.IsAlive(Entity.GetLocalPlayer())) return;
	
	cursorPos=Input.GetCursorPosition();
	
	if(Input.IsKeyPressed(0x01)){
		if(cursorPos[0]>= getValue("xxx") && cursorPos[1]>=getValue("yyy") && cursorPos[0]<=getValue("xxx")+260 && cursorPos[1]<=getValue("yyy")+215){
		if(dxxx!=0 && dyyy!=0){
			setValue("xxx",cursorPos[0]-dxxx);
			setValue("yyy",cursorPos[1]-dyyy);
		}
			dxxx=cursorPos[0]-(getValue("xxx"));
			dyyy=cursorPos[1]-(getValue("yyy"));
		}
	}else{
		dxxx=0;
		dyyy=0;
	}
	targetName = rageTarget == 0 ? "None": Entity.GetName(rageTarget);

    expectedDamage = UI.GetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "Minimum damage");
    dodgeBruteforce = (getValue("Premium Anti-Aim") && getValue("Dodge Bruteforce")) ? "On": "Off";
    desyncSize = Math.abs(normalizeYaw(Local.GetRealYaw() - Local.GetFakeYaw()));
    desyncSize = (desyncSize > 120) ? 120 : desyncSize;
    fakeLagMax = (fakeLagMode == 2 || fakeLagMode == 5 ) ? 6 : 14;
	if(!getValue("Play Style") == 0){
    if (Globals.ChokedCommands() == 0) {
        fakeLag = (lastChoke > fakeLagMax) ? fakeLagMax: lastChoke;
    } else {
        lastChoke = Globals.ChokedCommands();
    }
	
    Render.FilledRect(getValue("xxx"), getValue("yyy"), 260, 215, theme_background_border); // background
    Render.Rect(getValue("xxx"), getValue("yyy"), 260, 215, theme_background_margin);
    Render.FilledRect(getValue("xxx") + 5, getValue("yyy") + 5, 250, 205, theme_background_content); // background1
    Render.String(getValue("xxx") + 130, getValue("yyy") + 10, 1, "Meow", theme_text, 3);
    drawFilledOrRainbowRect(getValue("xxx") + 10, getValue("yyy") + 23, 240, 3,true); // lol
    Render.String(getValue("xxx") + 15, getValue("yyy") + 33, 0, "Damage Mode: " + damageMode, theme_text, theme_font);
    Render.String(getValue("xxx") + 15, getValue("yyy") + 53, 0, "Expected Damage: " + expectedDamage + "HP", theme_text, theme_font);
    Render.String(getValue("xxx") + 15, getValue("yyy") + 73, 0, "Dodge Bruteforce: " + dodgeBruteforce, theme_text, theme_font);
    Render.String(getValue("xxx") + 15, getValue("yyy") + 93, 0, "Desync ", theme_text, theme_font);
    Render.Rect(getValue("xxx") + 90, getValue("yyy") + 97, 155, 6, theme_bar_border);
    drawFilledOrRainbowRect(getValue("xxx") + 90, getValue("yyy") + 98, Math.floor(155 * (desyncSize / 120)), 4,false);
    Render.String(getValue("xxx") + 15, getValue("yyy") + 113, 0, "Fake Lag ", theme_text, theme_font);
    Render.Rect(getValue("xxx") + 90, getValue("yyy") + 117, 155, 6, theme_bar_border);
    drawFilledOrRainbowRect(getValue("xxx") + 90, getValue("yyy") + 118, Math.floor(155 * (fakeLag / fakeLagMax)), 4,false);
	if(UI.IsHotkeyActive("Rage","GENERAL","General","Enabled")){
		Render.String(getValue("xxx") + 70, getValue("yyy") + 185, 1, ">>Aimbot<<", activeColor, theme_font);
	}else{
		Render.String(getValue("xxx") + 70, getValue("yyy") + 185, 1, "Aimbot", theme_text, theme_font);
	}
	if(getValue("Auto Wall Mode")!=0 || getValue("Play Style")==2){
		if(getValue("Auto Wall Mode")==1 && getValue("Play Style")==1){
			Render.String(getValue("xxx") + 180, getValue("yyy") + 135, 1, ">>Legit AW<<", activeColor, theme_font);
		}else{
			Render.String(getValue("xxx") + 180, getValue("yyy") + 135, 1, ">>Rage AW<<", activeColor, theme_font);
		}
	}else{
		Render.String(getValue("xxx") + 180, getValue("yyy") + 135, 1, "Auto Wall", theme_text, theme_font);
	}
	if(getHotkey("Fake Duck")){
		Render.String(getValue("xxx") + 70, getValue("yyy") + 160, 1, ">>Fake Duck<<", activeColor, theme_font);
	}else{
		Render.String(getValue("xxx") + 70, getValue("yyy") + 160, 1, "Fake Duck", theme_text, theme_font);
	}
	if(UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")){
		Render.String(getValue("xxx") + 180, getValue("yyy") + 160, 1, ">>Slow Walk<<", activeColor, theme_font);
	}else{
		Render.String(getValue("xxx") + 180, getValue("yyy") + 160, 1, "Slow Walk", theme_text, theme_font);
	}
	if(getValue("Dynamic FOV") && getValue("Play Style")==1){
		Render.String(getValue("xxx") + 70, getValue("yyy") + 135, 1, "FOV "+UI.GetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "FOV")+"", [255,165,0,255], theme_font);
	}else{
		Render.String(getValue("xxx") + 70, getValue("yyy") + 135, 1, "FOV "+UI.GetValue("Rage", currentWeapon.toUpperCase(), "Targeting", "FOV"), theme_text, theme_font);
	}
	if(UI.IsHotkeyActive("Rage","GENERAL","General","Force body aim")){
		Render.String(getValue("xxx") + 180, getValue("yyy") + 185, 1, ">>Body Aim<<", activeColor, theme_font);
	}else{
		Render.String(getValue("xxx") + 180, getValue("yyy") + 185, 1, "Body Aim", theme_text, theme_font);
	}
}
}
Cheat.RegisterCallback("Draw","specialOnDraw");
*/