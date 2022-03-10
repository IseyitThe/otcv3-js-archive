//@Menu Start
var defaultConfig = {
	"Play Style": 2,
	"Premium Anti-Aim": true,
	"Random Yaw": true,
	"Random Jitter": true,
	"Dodge Bruteforce": true,
	"Invert On": 0,
	"Disable On": 1,
	"Max Yaw": 8,
	"Max Jitter": 16,
	"Min LBY": 40,
	"Max LBY": 90,
	"Better Weapon Config": true,
	"Automatic Mindmg": true,
	"Weapon": 0,
	"General Normal Damage": 17,
	"Pistol Normal Damage": 10,
	"Heavy Pistol Normal Damage": 55,
	"Scout Normal Damage": 100,
	"AWP Normal Damage": 101,
	"Autosniper Normal Damage": 50,
	"General Wall Damage": 10,
	"Pistol Wall Damage": 5,
	"Heavy Pistol Wall Damage": 35,
	"Scout Wall Damage": 80,
	"AWP Wall Damage": 101,
	"Autosniper Wall Damage": 20,
	"General Minimum Damage": 1,
	"Pistol Minimum Damage": 1,
	"Heavy Pistol Minimum Damage": 1,
	"Scout Minimum Damage": 30,
	"AWP Minimum Damage": 15,
	"Autosniper Minimum Damage": 1,
	"General DT Damage": 20,
	"Pistol DT Damage": 20,
	"Heavy Pistol DT Damage": 30,
	"Scout DT Damage": 51,
	"AWP DT Damage": 60,
	"Autosniper DT Damage": 30,
	"General Normal Hitchance": 47,
	"Pistol Normal Hitchance": 50,
	"Heavy Pistol Normal Hitchance": 60,
	"Scout Normal Hitchance": 70,
	"AWP Normal Hitchance": 70,
	"Autosniper Normal Hitchance": 70,
	"General Wall Hitchance": 47,
	"Pistol Wall Hitchance": 50,
	"Heavy Pistol Wall Hitchance": 60,
	"Scout Wall Hitchance": 65,
	"AWP Wall Hitchance": 70,
	"Autosniper Wall Hitchance": 70,
	"General Minimum Hitchance": 30,
	"Pistol Minimum Hitchance": 30,
	"Heavy Pistol Minimum Hitchance": 40,
	"Scout Minimum Hitchance": 70,
	"AWP Minimum Hitchance": 70,
	"Autosniper Minimum Hitchance": 40,
	"General DT Hitchance": 50,
	"Pistol DT Hitchance": 50,
	"Heavy Pistol DT Hitchance": 60,
	"Scout DT Hitchance": 65,
	"AWP DT Hitchance": 65,
	"Autosniper DT Hitchance": 65,
	"Dynamic FOV": false,
	"Min FOV": 10,
	"Max FOV": 30,
	"Slow Walk": true,
	"Min Speed": 10,
	"Max Speed": 70,
	"Fake Lag": 2,
	"Clan Tag": 1,
	"Rage Bot Optimization":true,
	"Dynamic Multipoint": true,
	"Safe Point Conditions":0,
	"Body Conditions":0,
	"Show Indicators":true,
	"Show Watermark":true,
	"Show Direction":true,
	"Show Status": true,
	"Show Rainbow": true,
	"Show Hit and Miss": true,
	"Show Keybind States": 44,
	"Desync Indicator":1,
	"Theme":0,
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
	if (getValue("Min FOV") > getValue("Max FOV")) {
		setValue("Max FOV", getValue("Min FOV"));
	}
	if (getValue("Min Speed") > getValue("Max Speed")) {
		setValue("Max Speed", getValue("Min Speed"));
	}
}

function dodgeBruteforceDisablesAllInverters(){
	if(getValue("Dodge Bruteforce")){
		setValue("Invert On",0);
		setVisibility("Invert On", false);
	}
}

function showActiveItems(rage) {
	if (rage) {
		if (getValue("Premium Anti-Aim")) {
			setVisibility("Random Yaw", true);
			setVisibility("Random Jitter", true);
			setVisibility("Dodge Bruteforce", true);
			setVisibility("Invert On", true);
			setVisibility("Disable On", true);
			setVisibility("Max Yaw", true);
			setVisibility("Max Jitter", true);
			setVisibility("Min LBY", true);
			setVisibility("Max LBY", true);
			setVisibility("Inverter", true);
			setVisibility("Legit AA On Key", true);
			setVisibility("Min FOV", false);
			setVisibility("Max FOV", false);
			setVisibility("Maximum FOV On Key", false);
		}
	} else {
		if (getValue("Premium Anti-Aim")) {
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
		setVisibility("Body Conditions", true);
		setVisibility("Safe Point Conditions", true);
	}
	if (getValue("Slow Walk")) {
		setVisibility("Min Speed", true);
		setVisibility("Max Speed", true);
	}
	if(getValue("Show Indicators")){
		setVisibility("Show Watermark", true);
		setVisibility("Show Direction", true);
		setVisibility("Show Status", true);
		setVisibility("Show Rainbow", true);
		setVisibility("Show Hit and Miss", true);
		setVisibility("Show Keybind States", true);
		setVisibility("Desync Indicator", true);
		setVisibility("UI Color", true);
		setVisibility("Theme", true);
	}
	if (getValue("Fake Lag") != 0) {
		setVisibility("Maximum Fake Lag", true);
	}
	if (getValue("Better Weapon Config")) {
		setVisibility("Automatic Mindmg", true);
		setVisibility("Weapon", true);
		setVisibility("Minimum Damage", true);
		setVisibility("Minimum Accuracy", true);
		switch (getValue("Weapon")) {
		case 0:
			setVisibility("General Normal Damage", true);
			setVisibility("General Wall Damage", true);
			setVisibility("General Minimum Damage", true);
			setVisibility("General DT Damage", true);
			setVisibility("General Normal Hitchance", true);
			setVisibility("General Wall Hitchance", true);
			setVisibility("General Minimum Hitchance", true);
			setVisibility("General DT Hitchance", true);
			break;
		case 1:
			setVisibility("Pistol Normal Damage", true);
			setVisibility("Pistol Wall Damage", true);
			setVisibility("Pistol Minimum Damage", true);
			setVisibility("Pistol DT Damage", true);
			setVisibility("Pistol Normal Hitchance", true);
			setVisibility("Pistol Wall Hitchance", true);
			setVisibility("Pistol Minimum Hitchance", true);
			setVisibility("Pistol DT Hitchance", true);
			break;
		case 2:
			setVisibility("Heavy Pistol Normal Damage", true);
			setVisibility("Heavy Pistol Wall Damage", true);
			setVisibility("Heavy Pistol Minimum Damage", true);
			setVisibility("Heavy Pistol DT Damage", true);
			setVisibility("Heavy Pistol Normal Hitchance", true);
			setVisibility("Heavy Pistol Wall Hitchance", true);
			setVisibility("Heavy Pistol Minimum Hitchance", true);
			setVisibility("Heavy Pistol DT Hitchance", true);
			break;
		case 3:
			setVisibility("Scout Normal Damage", true);
			setVisibility("Scout Wall Damage", true);
			setVisibility("Scout Minimum Damage", true);
			setVisibility("Scout DT Damage", true);
			setVisibility("Scout Normal Hitchance", true);
			setVisibility("Scout Wall Hitchance", true);
			setVisibility("Scout Minimum Hitchance", true);
			setVisibility("Scout DT Hitchance", true);
			break;
		case 4:
			setVisibility("AWP Normal Damage", true);
			setVisibility("AWP Wall Damage", true);
			setVisibility("AWP Minimum Damage", true);
			setVisibility("AWP DT Damage", true);
			setVisibility("AWP Normal Hitchance", true);
			setVisibility("AWP Wall Hitchance", true);
			setVisibility("AWP Minimum Hitchance", true);
			setVisibility("AWP DT Hitchance", true);
			break;
		case 5:
			setVisibility("Autosniper Normal Damage", true);
			setVisibility("Autosniper Wall Damage", true);
			setVisibility("Autosniper Minimum Damage", true);
			setVisibility("Autosniper DT Damage", true);
			setVisibility("Autosniper Normal Hitchance", true);
			setVisibility("Autosniper Wall Hitchance", true);
			setVisibility("Autosniper Minimum Hitchance", true);
			setVisibility("Autosniper DT Hitchance", true);
			break;
		}
	}
}

function showRageItems() {
	showSemiRageItems();
	setVisibility("0x04", false);
	setVisibility("Dynamic FOV", false);
	setVisibility("Auto Wall", false);
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
	setVisibility("Premium Anti-Aim", true);
	setVisibility("Random Yaw", false);
	setVisibility("Random Jitter", false);
	setVisibility("Dodge Bruteforce", false);
	setVisibility("Invert On", false);
	setVisibility("Disable On", false);
	setVisibility("Max Yaw", false);
	setVisibility("Max Jitter", false);
	setVisibility("Min LBY", false);
	setVisibility("Max LBY", false);
	setVisibility("Inverter", false);
	setVisibility("Legit AA On Key", false);
	setVisibility("Better Weapon Config", true);
	setVisibility("Automatic Mindmg", false);
	setVisibility("Weapon", false);
	setVisibility("General Normal Damage", false);
	setVisibility("Pistol Normal Damage", false);
	setVisibility("Heavy Pistol Normal Damage", false);
	setVisibility("Scout Normal Damage", false);
	setVisibility("AWP Normal Damage", false);
	setVisibility("Autosniper Normal Damage", false);
	setVisibility("General Wall Damage", false);
	setVisibility("Pistol Wall Damage", false);
	setVisibility("Heavy Pistol Wall Damage", false);
	setVisibility("Scout Wall Damage", false);
	setVisibility("AWP Wall Damage", false);
	setVisibility("Autosniper Wall Damage", false);
	setVisibility("General Minimum Damage", false);
	setVisibility("Pistol Minimum Damage", false);
	setVisibility("Heavy Pistol Minimum Damage", false);
	setVisibility("Scout Minimum Damage", false);
	setVisibility("AWP Minimum Damage", false);
	setVisibility("Autosniper Minimum Damage", false);
	setVisibility("General DT Damage", false);
	setVisibility("Pistol DT Damage", false);
	setVisibility("Heavy Pistol DT Damage", false);
	setVisibility("Scout DT Damage", false);
	setVisibility("AWP DT Damage", false);
	setVisibility("Autosniper DT Damage", false);
	setVisibility("Minimum Damage", false);
	setVisibility("General Normal Hitchance", false);
	setVisibility("Pistol Normal Hitchance", false);
	setVisibility("Heavy Pistol Normal Hitchance", false);
	setVisibility("Scout Normal Hitchance", false);
	setVisibility("AWP Normal Hitchance", false);
	setVisibility("Autosniper Normal Hitchance", false);
	setVisibility("General Wall Hitchance", false);
	setVisibility("Pistol Wall Hitchance", false);
	setVisibility("Heavy Pistol Wall Hitchance", false);
	setVisibility("Scout Wall Hitchance", false);
	setVisibility("AWP Wall Hitchance", false);
	setVisibility("Autosniper Wall Hitchance", false);
	setVisibility("General Minimum Hitchance", false);
	setVisibility("Pistol Minimum Hitchance", false);
	setVisibility("Heavy Pistol Minimum Hitchance", false);
	setVisibility("Scout Minimum Hitchance", false);
	setVisibility("AWP Minimum Hitchance", false);
	setVisibility("Autosniper Minimum Hitchance", false);
	setVisibility("General DT Hitchance", false);
	setVisibility("Pistol DT Hitchance", false);
	setVisibility("Heavy Pistol DT Hitchance", false);
	setVisibility("Scout DT Hitchance", false);
	setVisibility("AWP DT Hitchance", false);
	setVisibility("Autosniper DT Hitchance", false);
	setVisibility("Minimum Accuracy", false);
	setVisibility("Dynamic FOV", true);
	setVisibility("Min FOV", false);
	setVisibility("Max FOV", false);
	setVisibility("Maximum FOV On Key", false);
	setVisibility("Slow Walk", true);
	setVisibility("Min Speed", false);
	setVisibility("Max Speed", false);
	setVisibility("Fake Lag", true);
	setVisibility("Maximum Fake Lag", false);
	setVisibility("Clan Tag", true);
	setVisibility("Rage Bot Optimization",true);
	setVisibility("Dynamic Multipoint", false);
	setVisibility("Body Conditions", false);
	setVisibility("Safe Point Conditions", false);
	setVisibility("Show Indicators", true);
	setVisibility("Show Watermark", false);
	setVisibility("Show Direction", false);
	setVisibility("Show Status", false);
	setVisibility("Show Rainbow", false);
	setVisibility("Show Hit and Miss", false);
	setVisibility("Show Keybind States", false);
	setVisibility("Desync Indicator", false);
	setVisibility("Theme", false);
	setVisibility("UI Color", false);
	setVisibility("Fast Duck", true);
	setVisibility("Reply Bot", true);
	setVisibility("Chat Spam", true);
	setVisibility("Logging (spams a lot)", true);
	setVisibility("Auto Wall", true);
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
	setVisibility("Premium Anti-Aim", false);
	setVisibility("Random Yaw", false);
	setVisibility("Random Jitter", false);
	setVisibility("Dodge Bruteforce", false);
	setVisibility("Invert On", false);
	setVisibility("Disable On", false);
	setVisibility("Max Yaw", false);
	setVisibility("Max Jitter", false);
	setVisibility("Min LBY", false);
	setVisibility("Max LBY", false);
	setVisibility("Inverter", false);
	setVisibility("Legit AA On Key", false);
	setVisibility("Better Weapon Config", false);
	setVisibility("Automatic Mindmg", false);
	setVisibility("Weapon", false);
	setVisibility("General Normal Damage", false);
	setVisibility("Pistol Normal Damage", false);
	setVisibility("Heavy Pistol Normal Damage", false);
	setVisibility("Scout Normal Damage", false);
	setVisibility("AWP Normal Damage", false);
	setVisibility("Autosniper Normal Damage", false);
	setVisibility("General Wall Damage", false);
	setVisibility("Pistol Wall Damage", false);
	setVisibility("Heavy Pistol Wall Damage", false);
	setVisibility("Scout Wall Damage", false);
	setVisibility("AWP Wall Damage", false);
	setVisibility("Autosniper Wall Damage", false);
	setVisibility("General Minimum Damage", false);
	setVisibility("Pistol Minimum Damage", false);
	setVisibility("Heavy Pistol Minimum Damage", false);
	setVisibility("Scout Minimum Damage", false);
	setVisibility("AWP Minimum Damage", false);
	setVisibility("Autosniper Minimum Damage", false);
	setVisibility("General DT Damage", false);
	setVisibility("Pistol DT Damage", false);
	setVisibility("Heavy Pistol DT Damage", false);
	setVisibility("Scout DT Damage", false);
	setVisibility("AWP DT Damage", false);
	setVisibility("Autosniper DT Damage", false);
	setVisibility("Minimum Damage", false);
	setVisibility("General Normal Hitchance", false);
	setVisibility("Pistol Normal Hitchance", false);
	setVisibility("Heavy Pistol Normal Hitchance", false);
	setVisibility("Scout Normal Hitchance", false);
	setVisibility("AWP Normal Hitchance", false);
	setVisibility("Autosniper Normal Hitchance", false);
	setVisibility("General Wall Hitchance", false);
	setVisibility("Pistol Wall Hitchance", false);
	setVisibility("Heavy Pistol Wall Hitchance", false);
	setVisibility("Scout Wall Hitchance", false);
	setVisibility("AWP Wall Hitchance", false);
	setVisibility("Autosniper Wall Hitchance", false);
	setVisibility("General Minimum Hitchance", false);
	setVisibility("Pistol Minimum Hitchance", false);
	setVisibility("Heavy Pistol Minimum Hitchance", false);
	setVisibility("Scout Minimum Hitchance", false);
	setVisibility("AWP Minimum Hitchance", false);
	setVisibility("Autosniper Minimum Hitchance", false);
	setVisibility("General DT Hitchance", false);
	setVisibility("Pistol DT Hitchance", false);
	setVisibility("Heavy Pistol DT Hitchance", false);
	setVisibility("Scout DT Hitchance", false);
	setVisibility("AWP DT Hitchance", false);
	setVisibility("Autosniper DT Hitchance", false);
	setVisibility("Minimum Accuracy", false);
	setVisibility("Dynamic FOV", false);
	setVisibility("Min FOV", false);
	setVisibility("Max FOV", false);
	setVisibility("Maximum FOV On Key", false);
	setVisibility("Slow Walk", false);
	setVisibility("Min Speed", false);
	setVisibility("Max Speed", false);
	setVisibility("Fake Lag", false);
	setVisibility("Maximum Fake Lag", false);
	setVisibility("Clan Tag", false);
	setVisibility("Rage Bot Optimization",false);
	setVisibility("Dynamic Multipoint", false);
	setVisibility("Body Conditions", false);
	setVisibility("Safe Point Conditions", false);
	setVisibility("Show Indicators", false);
	setVisibility("Show Watermark", false);
	setVisibility("Show Direction", false);
	setVisibility("Show Status", false);
	setVisibility("Show Rainbow", false);
	setVisibility("Show Hit and Miss", false);
	setVisibility("Show Keybind States", false);
	setVisibility("Desync Indicator", false);
	setVisibility("Theme", false);
	setVisibility("UI Color", false);
	setVisibility("Fast Duck", false);
	setVisibility("Reply Bot", false);
	setVisibility("Chat Spam", false);
	setVisibility("Logging (spams a lot)", false);
	setVisibility("Auto Wall", false);
	setVisibility("Fake Duck", false);
	setVisibility("Rage Crash", false);
}

function initializeMenuItems() {
	UI.AddSliderInt("Welcome, " + Cheat.GetUsername(), 0, 0);
	UI.AddLabel("You have enabled dhdj's script.");
	UI.AddLabel("Please do not share this script");
	UI.AddLabel("with other free users. Thank you.");
	UI.AddLabel("Version: 1.0 PREMIUM");
	UI.AddSliderInt("0x01", 0, 0);
	UI.AddDropdown("Play Style", ["Why would I cheat", "Semi-Rage", "Rage"]);
	UI.AddSliderInt("0x02", 0, 0);
	UI.AddCheckbox("Premium Anti-Aim");
	UI.AddCheckbox("Random Yaw");
	UI.AddCheckbox("Random Jitter");
	UI.AddCheckbox("Dodge Bruteforce");
	UI.AddMultiDropdown("Invert On", ["Shot", "Slow Walk", "Hurt", "Enemy Fire", "Luck"]);
	UI.AddMultiDropdown("Disable On", ["Round End", "Enemy Invisible", "Luck"]);
	UI.AddSliderInt("Max Yaw", 0, 180);
	UI.AddSliderInt("Max Jitter", 0, 180);
	UI.AddSliderInt("Min LBY", 0, 90);
	UI.AddSliderInt("Max LBY", 0, 90);
	UI.AddHotkey("Inverter");
	UI.AddHotkey("Legit AA On Key");
	UI.AddSliderInt("0x03", 0, 0);
	UI.AddCheckbox("Better Weapon Config");
	UI.AddCheckbox("Automatic Mindmg");
	UI.AddDropdown("Weapon", ["General", "Pistol", "Heavy Pistol", "Scout", "AWP", "Autosniper"]);
	UI.AddSliderInt("General Normal Damage", 0, 130);
	UI.AddSliderInt("Pistol Normal Damage", 0, 130);
	UI.AddSliderInt("Heavy Pistol Normal Damage", 0, 130);
	UI.AddSliderInt("Scout Normal Damage", 0, 130);
	UI.AddSliderInt("AWP Normal Damage", 0, 130);
	UI.AddSliderInt("Autosniper Normal Damage", 0, 130);
	UI.AddSliderInt("General Wall Damage", 0, 130);
	UI.AddSliderInt("Pistol Wall Damage", 0, 130);
	UI.AddSliderInt("Heavy Pistol Wall Damage", 0, 130);
	UI.AddSliderInt("Scout Wall Damage", 0, 130);
	UI.AddSliderInt("AWP Wall Damage", 0, 130);
	UI.AddSliderInt("Autosniper Wall Damage", 0, 130);
	UI.AddSliderInt("General Minimum Damage", 0, 130);
	UI.AddSliderInt("Pistol Minimum Damage", 0, 130);
	UI.AddSliderInt("Heavy Pistol Minimum Damage", 0, 130);
	UI.AddSliderInt("Scout Minimum Damage", 0, 130);
	UI.AddSliderInt("AWP Minimum Damage", 0, 130);
	UI.AddSliderInt("Autosniper Minimum Damage", 0, 130);
	UI.AddSliderInt("General DT Damage", 0, 130);
	UI.AddSliderInt("Pistol DT Damage", 0, 130);
	UI.AddSliderInt("Heavy Pistol DT Damage", 0, 130);
	UI.AddSliderInt("Scout DT Damage", 0, 130);
	UI.AddSliderInt("AWP DT Damage", 0, 130);
	UI.AddSliderInt("Autosniper DT Damage", 0, 130);
	UI.AddSliderInt("General Normal Hitchance", 0, 100);
	UI.AddSliderInt("Pistol Normal Hitchance", 0, 100);
	UI.AddSliderInt("Heavy Pistol Normal Hitchance", 0, 100);
	UI.AddSliderInt("Scout Normal Hitchance", 0, 100);
	UI.AddSliderInt("AWP Normal Hitchance", 0, 100);
	UI.AddSliderInt("Autosniper Normal Hitchance", 0, 100);
	UI.AddSliderInt("General Wall Hitchance", 0, 100);
	UI.AddSliderInt("Pistol Wall Hitchance", 0, 100);
	UI.AddSliderInt("Heavy Pistol Wall Hitchance", 0, 100);
	UI.AddSliderInt("Scout Wall Hitchance", 0, 100);
	UI.AddSliderInt("AWP Wall Hitchance", 0, 100);
	UI.AddSliderInt("Autosniper Wall Hitchance", 0, 100);
	UI.AddSliderInt("General Minimum Hitchance", 0, 100);
	UI.AddSliderInt("Pistol Minimum Hitchance", 0, 100);
	UI.AddSliderInt("Heavy Pistol Minimum Hitchance", 0, 100);
	UI.AddSliderInt("Scout Minimum Hitchance", 0, 100);
	UI.AddSliderInt("AWP Minimum Hitchance", 0, 100);
	UI.AddSliderInt("Autosniper Minimum Hitchance", 0, 100);
	UI.AddSliderInt("General DT Hitchance", 0, 100);
	UI.AddSliderInt("Pistol DT Hitchance", 0, 100);
	UI.AddSliderInt("Heavy Pistol DT Hitchance", 0, 100);
	UI.AddSliderInt("Scout DT Hitchance", 0, 100);
	UI.AddSliderInt("AWP DT Hitchance", 0, 100);
	UI.AddSliderInt("Autosniper DT Hitchance", 0, 100);
	UI.AddHotkey("Minimum Damage");
	UI.AddHotkey("Minimum Accuracy");
	UI.AddSliderInt("0x04", 0, 0);
	UI.AddCheckbox("Dynamic FOV");
	UI.AddSliderInt("Min FOV", 0, 180);
	UI.AddSliderInt("Max FOV", 0, 180);
	UI.AddHotkey("Maximum FOV On Key");
	UI.AddSliderInt("0x05", 0, 0);
	UI.AddCheckbox("Slow Walk");
	UI.AddSliderInt("Min Speed", 0, 100);
	UI.AddSliderInt("Max Speed", 0, 100);
	UI.AddSliderInt("0x06", 0, 0);
	UI.AddDropdown("Fake Lag", ["Disabled", "HVH", "Match-Making", "Maximum"]);
	UI.AddHotkey("Maximum Fake Lag");
	UI.AddSliderInt("0x07", 0, 0);
	UI.AddDropdown("Clan Tag", ["Disabled", "dhdj", "Random Chinese Characters", "Random Integers", "FPS", "Latency", "Weapon", "Health"]);
	UI.AddSliderInt("0x08", 0, 0);
	UI.AddCheckbox("Rage Bot Optimization");
	UI.AddCheckbox("Dynamic Multipoint");
	UI.AddMultiDropdown("Body Conditions", ["Slow Walk", "Low Health", "Luck"]);
	UI.AddMultiDropdown("Safe Point Conditions", ["Bunnyhopping", "Luck"]);
	UI.AddSliderInt("0x09", 0, 0);
	UI.AddCheckbox("Show Indicators");
	UI.AddCheckbox("Show Watermark");
	UI.AddCheckbox("Show Direction");
	UI.AddCheckbox("Show Status");
	UI.AddCheckbox("Show Rainbow");
	UI.AddCheckbox("Show Hit and Miss");
	UI.AddMultiDropdown("Show Keybind States", ["Inverter", "Legit AA On Key", "Damage Modes", "Accuracy Modes","Maximum FOV On Key","Maximum Fake Lag"," Slow Walk","Auto Wall", "Fake Duck"]);
	UI.AddDropdown("Desync Indicator", ["Disabled","Triangular", "Circular"]);
	UI.AddDropdown("Theme", ["Blanco","Negro"]);
	UI.AddColorPicker("UI Color");
	UI.AddSliderInt("0x0A", 0, 0);
	UI.AddCheckbox("Fast Duck");
	UI.AddCheckbox("Reply Bot");
	UI.AddCheckbox("Chat Spam");
	UI.AddCheckbox("Rage Crash");
	UI.AddCheckbox("Logging (spams a lot)");
	UI.AddHotkey("Auto Wall");
	UI.AddHotkey("Fake Duck");
	UI.AddSliderInt("0x0B", 0, 0);
	UI.AddCheckbox("Load Default Config");
	UI.AddSliderInt("Performance Optimization", 1, 256);
	UI.AddLabel("PUT 64 IF YOU DON'T UNDERSTAND");
	UI.AddSliderInt("0x0C", 0, 0);
}

function loadDefaultConfig() {
	Object.keys(defaultConfig).forEach(function(key) {
		setValue(key, defaultConfig[key]);
	});
	setColor("UI Color", defaultConfig["UI Color"]);
}

function setVisibility(key, visible) {
	UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", key, visible);
}

function getHotkey(key){
	return UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items",key);
}

function toggleHotkey(key){
	UI.ToggleHotkey("Misc", "JAVASCRIPT", "Script items",key);
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

initializeMenuItems();

Cheat.RegisterCallback("Draw", "onMenuUpdate");
//@Menu End
//@Main Start
var logging = false;
var frameCount = 0;
var frameLimit = 60;

function onCreateMove() {
	if(Globals.Tickcount()%6==0) antiAimUpdate(getValue("Premium Anti-Aim"));
	if (getValue("Play Style")!=0 && getValue("Better Weapon Config")) weaponConfigUpdate();
	if (getValue("Play Style")!=0 && getValue("Rage Bot Optimization")) rageBotOptimizationUpdate();
	if (getValue("Play Style")!=0 && getValue("Slow Walk")) slowWalkUpdate();
	if (getValue("Play Style")!=0 && getValue("Fast Duck")) fastDuckUpdate();
	if (getValue("Play Style")!=0 && getValue("Fake Lag") != 0) fakeLagUpdate();
	othersUpdate();
}

function onDraw() {
	if (getFrameCount() >= frameLimit) {
		resetFrameCount();
	}
	if (getValue("Play Style")!=0 && getFrameCount() % frameLimit == 0 && getValue("Clan Tag") != 0) clanTagUpdate();
	if (getFrameCount() % frameLimit == 15 && getValue("Dynamic FOV")){ if(getValue("Play Style")==1){FOVUpdate();}else{setRageFOV(180);}}
	if (getValue("Play Style")!=0 && getFrameCount() % frameLimit == 30 && getValue("Chat Spam")) chatSpamUpdate();
	if (getValue("Play Style")!=0 && getFrameCount() % frameLimit == 45 && getValue("Logging (spams a lot)")){ logging = true;}else{logging=false;}
	if (getValue("Play Style")!=0 && getValue("Show Indicators")){
		UIUpdate();
	}
	nextFrame();
}

function onUnload(){
	if(getValue("Dynamic Multipoint")){
		if(JSON.stringify(defaultMulti)!=JSON.stringify({
			"GENERAL": [ 0, 0 ],
			"PISTOL": [ 0, 0 ],
			"HEAVY PISTOL": [ 0, 0 ],
			"SCOUT": [ 0, 0 ],
			"AWP": [ 0, 0 ],
			"AUTOSNIPER": [ 0, 0 ]
		})){
			setMultiPoint( defaultMulti );
		}
	}
	AntiAim.SetOverride(0)
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

function getRandomChineseWord () {
    var _rsl = "";
    var _randomUniCode = Math.floor(Math.random() * (40870 - 19968) + 19968).toString(16);
    eval("_rsl=" + '"\\u' + _randomUniCode + '"');
    return _rsl;
}

function Print(msg){
	if(logging){
		Cheat.Print(msg+"\n");
	}
}

function PrintChat(msg){
	if(logging){
		Cheat.PrintChat(msg+"\n");
	}
}

function getRandomInteger(min,max){
	return min+Math.ceil( Math.random() * (max-min) );
}

Cheat.RegisterCallback("CreateMove", "onCreateMove");
Cheat.RegisterCallback("Draw", "onDraw");
Cheat.RegisterCallback( "Unload", "onUnload" );
//@Main End
//@Anti-Aim Start
var enableAA = true;
var roundEnd = false;
var rageTarget = 0;
var shotStart={};
var shotEnd={};

function antiAimUpdate(enabled){
	target=Ragebot.GetTarget();
	
	if(target!=0){
		rageTarget=target;
	}
	
	if(getValue("Disable On") & (1 << 1) && !roundEnd){
		shouldEnable = false;
		enemies=Entity.GetEnemies();
		for ( i = 0; i < enemies.length; i++ ) {
			if ( Entity.IsAlive( enemies[ i ] ) && !Entity.IsDormant( enemies[ i ] ) ) {
				shouldEnable = true;
			}
		}
		if ( shouldEnable ) {
			enableAA = true;
		} else {
			enableAA = false;
		}
	}
	if(getValue("Disable On") & (1 << 2) && !roundEnd){
		if(getRandomInteger(0,10)>1){
			enableAA=true;
		}else{
			enableAA=false;
		}
	}
	if(getValue("Invert On") & (1 << 1) && UI.IsHotkeyActive( "Anti-Aim", "Extra", "Slow walk" )){
		toggleHotkey("Inverter");
	}
	if(getValue("Invert On") & (1 << 4)){
		if(getRandomInteger(0,10)<2){
			toggleHotkey("Inverter");
		}
	}
	if ( getValue("Dodge Bruteforce") ) {
		head = Entity.GetHitboxPosition( Entity.GetLocalPlayer(), 0 );
		if ( head != 0 ) {
			Object.keys( shotStart )
				.forEach( function ( key ) {
					if ( shotStart.hasOwnProperty( key ) && shotEnd.hasOwnProperty( key ) && shotStart[ key ] != undefined && shotEnd[ key ] != undefined && shotStart[ key ][ 0 ] != undefined ) {
						start = JSON.parse( JSON.stringify( shotStart[ key ] ) );
						end = JSON.parse( JSON.stringify( shotEnd[ key ] ) );
						delete shotStart[ key ];
						delete shotEnd[ key ];
						vec = [ end[ 0 ] - start[ 0 ], end[ 1 ] - start[ 1 ], end[ 2 ] - start[ 2 ] ];
						equation = [ vec[ 1 ], -vec[ 2 ] - vec[ 0 ], vec[ 1 ], ( vec[ 0 ] * start[ 1 ] ) - ( vec[ 1 ] * start[ 0 ] ) - ( vec[ 1 ] * start[ 2 ] ) + ( vec[ 2 ] * start[ 1 ] ) ];
						distance = Math.abs( ( equation[ 0 ] * head[ 0 ] ) + ( equation[ 1 ] * head[ 1 ] ) + ( equation[ 2 ] * head[ 2 ] ) + equation[ 3 ] ) / Math.sqrt( Math.pow( equation[ 0 ], 2 ) + Math.pow( equation[ 1 ], 2 ) + Math.pow( equation[ 2 ], 2 ) );
						PrintChat( distance + "\n" );
						if ( distance < 60 && distance > 1 ) {
							toggleHotkey("Inverter");
						}
					}
				} );
		}
	}
	
	if(enableAA && enabled && getValue("Play Style")!=0){
		AntiAim.SetOverride(1);
		invert = getHotkey("Inverter");
		if(getValue("Play Style")==1){
			setLegitAA(!invert);
		}
		if(getValue("Play Style")==2){
			if(getHotkey("Legit AA On Key")){
				setLegitAA(!invert);
			}else{
				setRageAA(invert);
			}
		}
	}else{
		AntiAim.SetOverride(0);
		disableAA();
	}
}

function disableAA(){
	UI.SetValue( "Anti-Aim", "Extra", "Pitch", 0 );
	UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "At targets", false );
	UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180 );
	UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0 );
}

function setLegitAA(invert){
	UI.SetValue( "Anti-Aim", "Extra", "Pitch", 0 );
	UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "At targets", false );
	UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180 );
	UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0 );
	if(invert){
		AntiAim.SetFakeOffset(0);
		AntiAim.SetRealOffset(-60);
		AntiAim.SetLBYOffset(90);
	}else{
		AntiAim.SetFakeOffset(0);
		AntiAim.SetRealOffset(60);
		AntiAim.SetLBYOffset(-90);
	} 
}

function setRageAA(invert){
	UI.SetValue( "Anti-Aim", "Extra", "Pitch", 1 );
	UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "At targets", true );
	if(getValue("Random Jitter")){
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Jitter offset", getRandomInteger(-getValue("Max Jitter"),getValue("Max Jitter")));
	}else{
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0 );
	}
	if(invert){
		basedir=getRandomInteger(-20,0);
		AntiAim.SetFakeOffset( 0 );
		AntiAim.SetRealOffset( -40-basedir );
		AntiAim.SetLBYOffset(getRandomInteger(getValue("Min LBY"),getValue("Max LBY")));
	}else{
		basedir=getRandomInteger(0,20);
		AntiAim.SetFakeOffset( 0 );
		AntiAim.SetRealOffset( 40+basedir );
		AntiAim.SetLBYOffset(-getRandomInteger(getValue("Min LBY"),getValue("Max LBY")));
	}
	if(getValue("Random Yaw")){
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -basedir+getRandomInteger(-getValue("Max Yaw"),getValue("Max Yaw")));
	}else{
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0 );
	}
}

function rage_onRoundStart () {
	enableAA = true;
	roundEnd=false;
}

function rage_onRoundEnd () {
	if ( getValue("Disable On") & (1 << 0) ) {
		var players = Entity.GetEnemies();
		for (i=0; i < players.length; i++)
		{
			if (Entity.IsAlive(players[i])) {
				return;
			}
		}
		enableAA = false;
		roundEnd=true;
	}
}

function rage_onPlayerHurt(){
	if(getValue("Invert On") & (1 << 2)){
		if(Entity.GetEntityFromUserID( Event.GetInt( "userid" )) == Entity.GetLocalPlayer()){
			toggleHotkey("Inverter");
		}
	}
}

function rage_onWeaponFire(){
	if(getValue("Invert On") & (1 << 0)){
		if(Entity.GetEntityFromUserID( Event.GetInt( "userid" )) == Entity.GetLocalPlayer()){
			toggleHotkey("Inverter");
		}
	}
	if(getValue("Invert On") & (1 << 3)){
		if(Entity.GetEntityFromUserID( Event.GetInt( "userid" )) == rageTarget){
			toggleHotkey("Inverter");
		}
	}
	if ( getValue("Dodge Bruteforce") ) {
		if ( Entity.IsEnemy( Entity.GetEntityFromUserID( Event.GetInt( "userid" ) ) ) ) {
			shotStart[ Entity.GetEntityFromUserID( Event.GetInt( "userid" ) ) ] = Entity.GetEyePosition( Entity.GetEntityFromUserID( Event.GetInt( "userid" ) ) );
		}
	}
}
function rage_onBulletImpact () {
	if ( getValue("Dodge Bruteforce") ) {
		if ( Entity.IsEnemy( Entity.GetEntityFromUserID( Event.GetInt( "userid" ) ) ) ) {
			shotEnd[ Entity.GetEntityFromUserID( Event.GetInt( "userid" ) ) ] = [ Event.GetInt( "x" ), Event.GetInt( "y" ), Event.GetInt( "z" ) ];
		}
	}
}

Cheat.RegisterCallback( "round_end", "rage_onRoundEnd" );
Cheat.RegisterCallback( "round_start", "rage_onRoundStart" );
Cheat.RegisterCallback( "player_hurt", "rage_onPlayerHurt" )
Cheat.RegisterCallback( "weapon_fire", "rage_onWeaponFire" )
Cheat.RegisterCallback( "bullet_impact", "rage_onBulletImpact" )
//@Anti-Aim End
//@Weapon Config Start
var damageMode="Normal"

function weaponConfigUpdate(){
	target=Ragebot.GetTarget();
	
	if(target!=0){
		rageTarget=target;
	}
	weaponDamageUpdate();
	weaponAccuracyUpdate();
}

function weaponDamageUpdate(){
	if(getHotkey("Minimum Damage")){
		setDamageMode("Minimum");
		return;
	}
	if(UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
		setDamageMode("DT");
		return;
	}
	if ( Entity.IsValid( rageTarget ) == true && Entity.IsAlive( rageTarget ) && Entity.IsDormant( rageTarget ) == false ) {
			localPlayer_index = Entity.GetLocalPlayer();
			localPlayer_eyepos = Entity.GetEyePosition( localPlayer_index );
			hitbox_pos = Entity.GetHitboxPosition( rageTarget, 0 );
			result = Trace.Bullet( localPlayer_index, rageTarget, localPlayer_eyepos, hitbox_pos );
			if ( result[ 2 ] && result[ 1 ] > getValue( getWeapon( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )) + " Normal Damage" ) ) {
				setDamageMode("Normal");
			} else {
				setDamageMode("Wall");
			}
			if(getValue("Automatic Mindmg")){
				if ( Entity.GetProp( rageTarget, "CBasePlayer", "m_iHealth" ) < UI.GetValue( "Rage", getWeapon( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ) ).toUpperCase(), "Targeting", "Minimum damage" ) && Entity.GetProp( rageTarget, "CBasePlayer", "m_iHealth" ) > 0 ) {
					UI.SetValue( "Rage", getWeapon( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ) ).toUpperCase(), "Targeting", "Minimum damage", Entity.GetProp( rageTarget, "CBasePlayer", "m_iHealth" ) + 1 )
					damageMode = "Auto"
				}
			}
	}else{
		setDamageMode("Normal");
	}
}

function weaponAccuracyUpdate(){
	if(getHotkey("Minimum Accuracy")){
		setAccuracyMode("Minimum");
		return;
	}
	if(UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
		setAccuracyMode("DT");
		return;
	}
	if ( Entity.IsValid( rageTarget ) == true && Entity.IsAlive( rageTarget ) && Entity.IsDormant( rageTarget ) == false ) {
			localPlayer_index = Entity.GetLocalPlayer();
			localPlayer_eyepos = Entity.GetEyePosition( localPlayer_index );
			hitbox_pos = Entity.GetHitboxPosition( rageTarget, 0 );
			result = Trace.Bullet( localPlayer_index, rageTarget, localPlayer_eyepos, hitbox_pos );
			if ( result[ 2 ] ) {
				setAccuracyMode("Normal");
			} else {
				setAccuracyMode("Wall");
			}
	}else{
		setAccuracyMode("Normal");
	}
}

function getWeapon ( wep ) {
	if ( wep == "awp" ) {
		return "AWP";
	} else if ( wep == "ssg 08" ) {
		return "Scout";
	} else if ( wep == "scar 20" || wep == "g3sg1" ) {
		return "Autosniper";
	} else if ( typeof ( wep ) == "string" && ( wep == "deagle" || wep.indexOf( "r8" ) != -1 ) ) {
		return "Heavy Pistol";
	} else if ( typeof ( wep ) == "string" && (wep == "elite" || wep == "fiveseven" || wep == "p2000" || wep == "glock" || wep == "tec9" || wep.indexOf( "usp" ) != -1) ) {
		return 'Pistol';
	} else {
		return 'General';
	}
}

function getWeaponConfig ( wep ) {
	if ( wep == "awp" ) {
		return "AWP config";
	} else if ( wep == "ssg 08" ) {
		return "Scout config";
	} else if ( wep == "scar 20" || wep == "g3sg1" ) {
		return "Auto config";
	} else if ( typeof ( wep ) == "string" && ( wep == "deagle" || wep.indexOf( "r8" ) != -1 ) ) {
		return "Heavy pistol config";
	} else if ( typeof ( wep ) == "string" && (wep == "elite" || wep == "fiveseven" || wep == "p2000" || wep == "glock" || wep == "tec9" || wep.indexOf( "usp" ) != -1) ) {
		return 'Pistol config';
	} else {
		return 'Targeting';
	}
}

function setDamageMode(mode){
	damageMode=mode;
	UI.SetValue( "Rage", "GENERAL", "Targeting", "Minimum damage", getValue("General "+mode+" Damage" ) )
	UI.SetValue( "Rage", "PISTOL", "Targeting", "Minimum damage", getValue("Pistol "+mode+" Damage" ) )
	UI.SetValue( "Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", getValue("Heavy Pistol "+mode+" Damage" ) )
	UI.SetValue( "Rage", "SCOUT", "Targeting", "Minimum damage", getValue("Scout "+mode+" Damage" ) )
	UI.SetValue( "Rage", "AWP", "Targeting", "Minimum damage", getValue("AWP "+mode+" Damage" ) )
	UI.SetValue( "Rage", "AUTOSNIPER", "Targeting", "Minimum damage", getValue("Autosniper "+mode+" Damage" ) )
}

function setAccuracyMode(mode){
	UI.SetValue( "Rage", "GENERAL", "Accuracy", "Hitchance", getValue("General "+mode+" Hitchance" ) )
	UI.SetValue( "Rage", "PISTOL", "Accuracy", "Hitchance", getValue( "Pistol "+mode+" Hitchance" ) )
	UI.SetValue( "Rage", "HEAVY PISTOL", "Accuracy", "Hitchance", getValue( "Heavy Pistol "+mode+" Hitchance" ) )
	UI.SetValue( "Rage", "SCOUT", "Accuracy", "Hitchance", getValue( "Scout "+mode+" Hitchance" ) )
	UI.SetValue( "Rage", "AWP", "Accuracy", "Hitchance", getValue( "AWP "+mode+" Hitchance" ) )
	UI.SetValue( "Rage", "AUTOSNIPER", "Accuracy", "Hitchance", getValue( "Autosniper "+mode+" Hitchance" ) )
}
//@Weapon Config End
//@Rage Bot Start
var defaultMulti = {
	"GENERAL": [ 0, 0 ],
	"PISTOL": [ 0, 0 ],
	"HEAVY PISTOL": [ 0, 0 ],
	"SCOUT": [ 0, 0 ],
	"AWP": [ 0, 0 ],
	"AUTOSNIPER": [ 0, 0 ]
};
var players = {};
var multiHitbox = 0

function rageBotOptimizationUpdate(){
	if(getValue("Dynamic Multipoint")){
		multipointUpdate();
	}
	if(getValue("Safe Point Conditions")!=0){
		calculateSafePointConditions();
	}
	if(getValue("Body Conditions")!=0){
		calculateBodyConditions();
	}
}

function calculateSafePointConditions(){
	if(getValue("Safe Point Conditions") & (1<<0)){
		if ( Math.abs( GetJump( rageTarget ) ) >= 40 ) {
			Ragebot.ForceTargetSafety(rageTarget);
		}
	}
	if(getValue("Safe Point Conditions") & (1<<1)){
		if(getRandomInteger(0,10)>5){
			Ragebot.ForceTargetSafety(rageTarget);
		}
	}
}

function calculateBodyConditions(){
	doBaim=false;
	if(getValue("Body Conditions") & (1<<0)){
		if ( getVelocity( rageTarget ) <= 90 && getVelocity( rageTarget ) >= 20 ) {
			if(!UI.IsHotkeyActive("Rage","GENERAL","General","Force body aim")){
				UI.ToggleHotkey("Rage","GENERAL","General","Force body aim");
			}
			doBaim=true;
		}
	}
	if(getValue("Body Conditions") & (1<<1)){
		if(Entity.GetProp( rageTarget, "CBasePlayer", "m_iHealth" )<20){
			if(!UI.IsHotkeyActive("Rage","GENERAL","General","Force body aim")){
				UI.ToggleHotkey("Rage","GENERAL","General","Force body aim");
			}
			doBaim=true;
		}
	}
	if(getValue("Body Conditions") & (1<<2)){
		if(getRandomInteger(0,10)>5){
			if(!UI.IsHotkeyActive("Rage","GENERAL","General","Force body aim")){
				UI.ToggleHotkey("Rage","GENERAL","General","Force body aim");
			}
			doBaim=true;
		}
	}
	if(!doBaim){
		if(UI.IsHotkeyActive("Rage","GENERAL","General","Force body aim")){
			UI.ToggleHotkey("Rage","GENERAL","General","Force body aim");
		}
	}
}

function multipointUpdate(){
	if(JSON.stringify(defaultMulti)==JSON.stringify({
		"GENERAL": [ 0, 0 ],
		"PISTOL": [ 0, 0 ],
		"HEAVY PISTOL": [ 0, 0 ],
		"SCOUT": [ 0, 0 ],
		"AWP": [ 0, 0 ],
		"AUTOSNIPER": [ 0, 0 ]
	})){
		saveDefaultMultiPoint();
	}
	if ( players[ rageTarget ] == null || players[ rageTarget ] == undefined ) {
			players[ rageTarget ] = duplicate( defaultMulti );
	}
	setMultiPoint( players[ rageTarget ] );
}

function ragebotoptimization_onRagebotFire(){
	if(getValue("Dynamic Multipoint")){
		ragebot_target = Event.GetInt( "target_index" );
		ragebot_target_hitbox = Event.GetInt( "hitbox" );
		ragebot_target_hitchance = Event.GetInt( "hitchance" );
		ragebot_target_safepoint = Event.GetInt( "safepoint" );
		ragebot_target_exploit = Event.GetInt( "exploit" );
		targetName = Entity.GetName( ragebot_target );

		if(ragebot_target!=rageTarget){
			rageTarget=ragebot_target;
		}
		
		if ( getValue("Dynamic Multipoint") ) {
			if ( ragebot_target_hitbox == 0 ) {
				multiHitbox = 0;
			} else {
				multiHitbox = 1;
			}
			players[ rageTarget ][ getWeapon( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ) ).toUpperCase() ][ multiHitbox ] -= 5;
			if ( players[ rageTarget ][ getWeapon( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ) ).toUpperCase() ][ multiHitbox ] < 1 ) {
				players[ rageTarget ][ getWeapon( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ) ).toUpperCase() ][ multiHitbox ] = 1;
			}

		}
	}
}

function ragebotoptimization_onPlayerHurt(){
	if(getValue("Dynamic Multipoint")){
		if ( Entity.GetEntityFromUserID( Event.GetInt( "attacker" ) ) == Entity.GetLocalPlayer() && getValue("Dynamic Multipoint") ) {
			players[ rageTarget ][ getWeapon( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ) ).toUpperCase() ][ multiHitbox ] += 10
			if ( players[ rageTarget ][ getWeapon( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ) ).toUpperCase() ][ multiHitbox ] > 100 ) {
				players[ rageTarget ][ getWeapon( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ) ).toUpperCase() ][ multiHitbox ] = 100
			}
		}
	}
}

function duplicate(theObject){
	return JSON.parse( JSON.stringify(theObject));
}

function saveDefaultMultiPoint () {
	if ( UI.GetValue( "Rage", "GENERAL", "Targeting", "Force pointscale" ) ) {
		defaultMulti[ "GENERAL" ][ 0 ] = UI.GetValue( "Rage", "GENERAL", "Targeting", "Head pointscale" )
		defaultMulti[ "GENERAL" ][ 1 ] = UI.GetValue( "Rage", "GENERAL", "Targeting", "Body pointscale" )
	}
	if ( UI.GetValue( "Rage", "PISTOL", "Pistol config", "Force pointscale" ) ) {
		defaultMulti[ "PISTOL" ][ 0 ] = UI.GetValue( "Rage", "PISTOL", "Pistol config", "Head pointscale" )
		defaultMulti[ "PISTOL" ][ 1 ] = UI.GetValue( "Rage", "PISTOL", "Pistol config", "Body pointscale" )
	}
	if ( UI.GetValue( "Rage", "HEAVY PISTOL", "Heavy pistol config", "Force pointscale" ) ) {
		defaultMulti[ "HEAVY PISTOL" ][ 0 ] = UI.GetValue( "Rage", "HEAVY PISTOL", "Heavy pistol config", "Head pointscale" )
		defaultMulti[ "HEAVY PISTOL" ][ 1 ] = UI.GetValue( "Rage", "HEAVY PISTOL", "Heavy pistol config", "Body pointscale" )
	}
	if ( UI.GetValue( "Rage", "SCOUT", "Scout config", "Force pointscale" ) ) {
		defaultMulti[ "SCOUT" ][ 0 ] = UI.GetValue( "Rage", "SCOUT", "Scout config", "Head pointscale" )
		defaultMulti[ "SCOUT" ][ 1 ] = UI.GetValue( "Rage", "SCOUT", "Scout config", "Body pointscale" )
	}
	if ( UI.GetValue( "Rage", "AWP", "AWP config", "Force pointscale" ) ) {
		defaultMulti[ "AWP" ][ 0 ] = UI.GetValue( "Rage", "AWP", "AWP config", "Head pointscale" )
		defaultMulti[ "AWP" ][ 1 ] = UI.GetValue( "Rage", "AWP", "AWP config", "Body pointscale" )
	}
	if ( UI.GetValue( "Rage", "AUTOSNIPER", "Auto config", "Force pointscale" ) ) {
		defaultMulti[ "AUTOSNIPER" ][ 0 ] = UI.GetValue( "Rage", "AUTOSNIPER", "Auto config", "Head pointscale" )
		defaultMulti[ "AUTOSNIPER" ][ 1 ] = UI.GetValue( "Rage", "AUTOSNIPER", "Auto config", "Body pointscale" )
	}
}

function setMultiPoint ( multipointData ) {
	if ( UI.GetValue( "Rage", "GENERAL", "Targeting", "Force pointscale" ) ) {
		UI.SetValue( "Rage", "GENERAL", "Targeting", "Head pointscale", multipointData[ "GENERAL" ][ 0 ] )
		UI.SetValue( "Rage", "GENERAL", "Targeting", "Body pointscale", multipointData[ "GENERAL" ][ 1 ] )
	}
	if ( UI.GetValue( "Rage", "PISTOL", "Pistol config", "Force pointscale" ) ) {
		UI.SetValue( "Rage", "PISTOL", "Pistol config", "Head pointscale", multipointData[ "PISTOL" ][ 0 ] )
		UI.SetValue( "Rage", "PISTOL", "Pistol config", "Body pointscale", multipointData[ "PISTOL" ][ 1 ] )
	}
	if ( UI.GetValue( "Rage", "HEAVY PISTOL", "Heavy pistol config", "Force pointscale" ) ) {
		UI.SetValue( "Rage", "HEAVY PISTOL", "Heavy pistol config", "Head pointscale", multipointData[ "HEAVY PISTOL" ][ 0 ] )
		UI.SetValue( "Rage", "HEAVY PISTOL", "Heavy pistol config", "Body pointscale", multipointData[ "HEAVY PISTOL" ][ 1 ] )
	}
	if ( UI.GetValue( "Rage", "SCOUT", "Scout config", "Force pointscale" ) ) {
		UI.SetValue( "Rage", "SCOUT", "Scout config", "Head pointscale", multipointData[ "SCOUT" ][ 0 ] )
		UI.SetValue( "Rage", "SCOUT", "Scout config", "Body pointscale", multipointData[ "SCOUT" ][ 1 ] )
	}
	if ( UI.GetValue( "Rage", "AWP", "AWP config", "Force pointscale" ) ) {
		UI.SetValue( "Rage", "AWP", "AWP config", "Head pointscale", multipointData[ "AWP" ][ 0 ] )
		UI.SetValue( "Rage", "AWP", "AWP config", "Body pointscale", multipointData[ "AWP" ][ 1 ] )
	}
	if ( UI.GetValue( "Rage", "AUTOSNIPER", "Auto config", "Force pointscale" ) ) {
		UI.SetValue( "Rage", "AUTOSNIPER", "Auto config", "Head pointscale", multipointData[ "AUTOSNIPER" ][ 0 ] )
		UI.SetValue( "Rage", "AUTOSNIPER", "Auto config", "Body pointscale", multipointData[ "AUTOSNIPER" ][ 1 ] )
	}
}

Cheat.RegisterCallback( "ragebot_fire", "ragebotoptimization_onRagebotFire" );
Cheat.RegisterCallback( "player_hurt", "ragebotoptimization_onPlayerHurt" );
//@Rage Bot End
//@Slow Walk Start
function slowWalkUpdate(){
	if(UI.IsHotkeyActive( "Anti-Aim", "Extra", "Slow walk" )){
		dir = [ 0, 0, 0 ]
		if ( Input.IsKeyPressed( 0x57 ) ) {
			dir[ 0 ] += getRandomInteger(getValue("Min Speed"),getValue("Max Speed"));
		}
		if ( Input.IsKeyPressed( 0x44 ) ) {
			dir[ 1 ] += getRandomInteger(getValue("Min Speed"),getValue("Max Speed"));
		}
		if ( Input.IsKeyPressed( 0x41 ) ) {
			dir[ 1 ] -= getRandomInteger(getValue("Min Speed"),getValue("Max Speed"));
		}
		if ( Input.IsKeyPressed( 0x53 ) ) {
			dir[ 0 ] -= getRandomInteger(getValue("Min Speed"),getValue("Max Speed"));
		}
		UserCMD.SetMovement( dir )
	}
}
//@Slow Walk End
//@Fast Duck Start
var enableFakeLag=true;

function fastDuckUpdate(){
	var buttons = UserCMD.GetButtons();
	if ( getHotkey( "Fake Duck" ) ) {
		enableFakeLag = false;
		if ( Globals.Tickcount() % 14 >= 7 ) {
			UserCMD.SetButtons( buttons | ( 1 << 22 ) );
		} else {
			UserCMD.SetButtons( buttons | ( 1 << 2 ) );
		}
		if ( Globals.Tickcount() % 14 == 6) {
			UserCMD.Send();
		} else {
			UserCMD.Choke();
		}
	} else {
		UserCMD.SetButtons( buttons | ( 1 << 22 ) );
		enableFakeLag = true;
	}
}
//@Fast Duck End
//@Fake Lag Start
function fakeLagUpdate(){
	//realyaw = Local.GetRealYaw();
	//Cheat.Print(realyaw + "\n");
	if(!enableFakeLag || !enableAA)return;
	if(getHotkey("Maximum Fake Lag")){
		if(getVelocity( Entity.GetLocalPlayer() ) > 50){
			UserCMD.Choke();
		}else{
			UserCMD.Send();
		}
		return;
	}
	switch(getValue("Fake Lag")){
		case 1:
		if ( Math.random() < 0.7 ) {
			UserCMD.Choke();
		}else{
			if(Globals.ChokedCommands()>9){
				UserCMD.Send();
			}else{
				UserCMD.Choke();
			}
		}
		break;
		case 2:
		if ( Math.random() < 0.6 ) {
			UserCMD.Choke();
		}else{
			if(Globals.ChokedCommands()>3){
				UserCMD.Send();
			}else{
				UserCMD.Choke();
			}
		}
		break;
		case 3:
		UserCMD.Choke();
		break;
	}
}

function getVelocity ( index ) {
	var velocity = Entity.GetProp( index, "CBasePlayer", "m_vecVelocity[0]" )
	return Math.sqrt( velocity[ 0 ] * velocity[ 0 ] + velocity[ 1 ] * velocity[ 1 ] )
}
//@Fake Lag End
//@Clan Tag Start
var clantag = [ "☠", "☠☠", "☠o", "☠o☠", "☠on", "☠on☠", "☠one☠", "☠onet", "☠onet☠", "☠oneta", "☠oneta☠", "☠onetap", "☠onetap☠", "☣onetap☣", "☠onetap☠", "☣onetap☣", "☠onetap☠", "☣onetap☣", "☠onetap☠", "☣onetap☣", "☛onetap☚", "☠onetap☠", "☣onetap☣", "☛onetap☚", "☠onetap☠", "☣onetap☣", "☛onetap☚", "☠onetap☠", "☣onetap☣", "☛onetap☚", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap", "★oneta", "★onet", "★one", "★on", "★o", "★", "★", "★", "★", "☠", "☠", "☠", "☠", "☠" ]

function clanTagUpdate(){
	if(World.GetServerString()!=""){
		switch(getValue("Clan Tag")){
			case 1:
			Local.SetClanTag( clantag[ Math.round( new Date()
						.getTime() / 500 ) % clantag.length ] );
			break;
			case 2:
			Local.SetClanTag(getRandomChineseWord()+getRandomChineseWord()+getRandomChineseWord()+getRandomChineseWord()+getRandomChineseWord());
			break;
			case 3:
			Local.SetClanTag(getRandomInteger(10000000,99999999).toString());
			break;
			case 4:
			Local.SetClanTag(Math.ceil(1 / Global.Frametime())+"FPS");
			break;
			case 5:
			Local.SetClanTag(Math.ceil(Local.Latency()*1000)+"MS");
			break;
			case 6:
			Local.SetClanTag(Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ).toString());
			break;
			case 7:
			Local.SetClanTag(Entity.GetProp( Entity.GetLocalPlayer(), "CBasePlayer", "m_iHealth" )+"HP");
			break;
		}
	}
}
//@Clan Tag End
//@FOV Start
function FOVUpdate(){
	if(getHotkey("Maximum FOV On Key")){
		setRageFOV(getValue("Max FOV"));
		return;
	}
	if(Entity.IsAlive(Entity.GetLocalPlayer()) ) {
		distance=0;
		FOV=getValue("Min FOV");
		enemies=Entity.GetEnemies();
		for ( i = 0; i < enemies.length; i++ ) {
			if ( Entity.IsAlive( enemies[ i ] ) && !Entity.IsDormant( enemies[ i ] )) {
				origin = Entity.GetRenderOrigin( enemies[ i ] );
				myself = Entity.GetRenderOrigin( Entity.GetLocalPlayer() );
				distance_to_enemy = Math.sqrt(Math.pow(origin[0]-myself[0],2)+Math.pow(origin[1]-myself[1],2)+Math.pow(origin[2]-myself[2],2));
				if(distance == 0 || distance_to_enemy < distance){
					distance = distance_to_enemy;
				}
			}
		}
		diff=1000-distance;
		if(diff>0){ 
			FOV+=(getValue("Max FOV")-getValue("Min FOV"))*(diff/1000);
		}
		FOV=Math.ceil(FOV);
		setRageFOV(FOV);
	}
}

function setRageFOV(fov){
	UI.SetValue( "Rage", "GENERAL", "Targeting", "FOV", fov )
	UI.SetValue( "Rage", "PISTOL", "Targeting","FOV",fov)
	UI.SetValue( "Rage", "HEAVY PISTOL", "Targeting","FOV",fov)
	UI.SetValue( "Rage", "SCOUT", "Targeting","FOV",fov)
	UI.SetValue( "Rage", "AWP", "Targeting","FOV",fov)
	UI.SetValue( "Rage", "AUTOSNIPER", "Targeting","FOV",fov)
}
//@FOV End
//@Chat Spam Start
function chatSpamUpdate(){
	Cheat.ExecuteCommand( "say " + getRandomChineseWord()+getRandomChineseWord()+getRandomChineseWord()+getRandomChineseWord()+getRandomChineseWord()+getRandomChineseWord()+getRandomChineseWord()+getRandomChineseWord()+getRandomChineseWord()+getRandomChineseWord()+getRandomChineseWord()+getRandomChineseWord()+getRandomChineseWord() )
}
//@Chat Spam End
//@Others Start
function othersUpdate(){
	if(getValue("Rage Crash")){
		Cheat.PrintChat("矺眣鑟媤锵咏看殽旯咥玡訢傔閝吣丝蛕粄蹞竪釡钦驁昈柘籱拙挀淔免鲇鵏姃厼玒麪饫邈郂诗瀘谞瑳豒圏囨蔚藙灦砸讗綜硏鍟疆肴阥鹩畡庙輚郌摖淛虵岊瞋椙繧曏橯稺箸籺脍銺浯潠狂赀咕牉羊敜蕨撋軟岓掘畧廢");
	}
	if(getValue("Play Style")==1){
		setAutoWall(getHotkey("Auto Wall"));
	}else{
		setAutoWall(true);
	}
}

function others_onPlayerSay () {
	if ( getValue("Reply Bot") ) {
		Cheat.ExecuteCommand( "say " + Event.GetString( "text" ) )
	}
}

function setAutoWall(on){
	if(on){
		UI.SetValue( "Rage", "GENERAL", "Targeting", "Disable autowall", false )
		UI.SetValue( "Rage", "PISTOL", "Pistol config", "Disable autowall", false )
		UI.SetValue( "Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall", false )
		UI.SetValue( "Rage", "SCOUT", "Scout config", "Disable autowall", false )
		UI.SetValue( "Rage", "AWP", "AWP config", "Disable autowall", false )
		UI.SetValue( "Rage", "AUTOSNIPER", "Auto config", "Disable autowall", false )
	}else{
		UI.SetValue( "Rage", "GENERAL", "Targeting", "Disable autowall", true )
		UI.SetValue( "Rage", "PISTOL", "Pistol config", "Disable autowall", true )
		UI.SetValue( "Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall", true )
		UI.SetValue( "Rage", "SCOUT", "Scout config", "Disable autowall", true )
		UI.SetValue( "Rage", "AWP", "AWP config", "Disable autowall", true )
		UI.SetValue( "Rage", "AUTOSNIPER", "Auto config", "Disable autowall", true )
	}
}

Cheat.RegisterCallback( "player_say", "others_onPlayerSay" )
//@Others End
var screen_size = Global.GetScreenSize()
var tickrate = Global.Tickrate();
var	ping = Math.ceil(Global.Latency() * 1000);
var	fps = Math.ceil( 1 / Global.Frametime() );
var	today = new Date();
var	datetime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var fakeLagMax= (getValue("Fake Lag")==2)?6:14;
var fakeLag = 0;
var lastChoke=Globals.ChokedCommands();
var colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
var shot={};
var hit={};
var percentage=1;
var percentageSum=1;
var headScale=100;
var bodyScale=100;
var keybinds=[];
var x1 = screen_size[0]-320;
var	y1 = Math.ceil(screen_size[1]*0.01);  
var x2 = screen_size[0]-320;
var	y2 = Math.ceil(screen_size[1]*0.37);  
var x3 = Math.ceil(screen_size[0]*0.01);
var	y3 = Math.ceil(screen_size[1]*0.47);  

var theme_text = [ 30, 30, 30, 200];
var theme_bar_border = [ 80, 80, 80, 255];
var theme_bar_content = [ 120, 120, 120, 255];
var theme_background_border = [ 210,210,210, 200 ];
var theme_background_margin = [ 230,230,230, 255 ];
var theme_background_content = [ 240,240,240, 255 ];
var theme_rainbow = false;

function UIUpdate(){
	if(getValue("Theme")==0){
		theme_text = [ 30, 30, 30, 200];
		theme_bar_border = [ 80, 80, 80, 255];
		theme_bar_content = [ 120, 120, 120, 255];
		theme_background_border = [ 210,210,210, 200 ];
		theme_background_margin = [ 230,230,230, 255 ];
		theme_background_content = [ 240,240,240, 255 ];
		theme_rainbow = false;
	}else{
		theme_text = [ 255, 255, 255, 200];
		theme_bar_border = [ 40, 40, 40, 255];
		theme_bar_content = [ 120, 120, 120, 255];
		theme_background_border = [ 30, 30, 30, 150 ];
		theme_background_margin = [ 30, 30, 30, 255 ];
		theme_background_content = [ 30, 30, 30, 255 ];
		theme_rainbow = true;
	}
	if(getValue("Show Watermark")) drawWaterMark();
	if(getValue("Show Rainbow")) drawRainbow();
	if(World.GetServerString()!=""){
		if(getValue("Premium Anti-Aim")) drawDesyncIndicator();
		if(getValue("Premium Anti-Aim") && getValue("Show Direction")) drawDirectionIndicator();
		if(getValue("Show Status")) drawStatusIndicator();
		if(getValue("Show Hit and Miss")) drawHitAndMiss();
		if(getValue("Show Keybind States")!=0) drawKeybindStates();
	}
}
// Pasted from https://www.onetap.com/threads/release-cornflakes-indicator-script.27327/. LOLLOLLOLLOLLOL
function normalizeYaw(angle)
{
    angle = (angle % 360 + 360) % 360;
    return angle > 180 ? angle - 360 : angle;
}

function drawKeybindStates(){
	//Cheat.Print(getValue("Show Keybind States")+"\n");
	if(getValue("Show Keybind States") & (1 << 0) && getValue("Premium Anti-Aim")){
		if(getHotkey("Inverter")){
			keybinds.push("INVERT");
		}
	}
	if(getValue("Show Keybind States") & (1 << 1) && getValue("Premium Anti-Aim")){
		if(getHotkey("Legit AA On Key")){
			keybinds.push("LEGIT");
		}
	}
	if(getValue("Show Keybind States") & (1 << 2) && getValue("Better Weapon Config")){
		if(getHotkey("Minimum Damage")){
			keybinds.push("MINDMG");
		}else if(UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
			keybinds.push("DTDMG");
		}
	}
	if(getValue("Show Keybind States") & (1 << 3) && getValue("Better Weapon Config")){
		if(getHotkey("Minimum Accuracy")){
			keybinds.push("MINAC");
		}else if(UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
			keybinds.push("DTAC");
		}
	}
	if(getValue("Show Keybind States") & (1 << 4) && getValue("Play Style")==1){
		if(getHotkey("Maximum FOV On Key")){
			keybinds.push("FOV");
		}
	}
	if(getValue("Show Keybind States") & (1 << 5) && getValue("Fake Lag")){
		if(getHotkey("Maximum Fake Lag")){
			keybinds.push("LAG");
		}
	}
	if(getValue("Show Keybind States") & (1 << 6)){
		if(UI.IsHotkeyActive( "Anti-Aim", "Extra", "Slow walk" )){
			keybinds.push("SLOW-WALK");
		}
	}
	if(getValue("Show Keybind States") & (1 << 7) && getValue("Play Style")==1){
		if(getHotkey("Auto Wall")){
			keybinds.push("AUTO-WALL");
		}
	}
	if(getValue("Show Keybind States") & (1 << 8)){
		if(getHotkey("Fake Duck")){
			keybinds.push("FAKE-DUCK");
		}
	}
	drawAllKeybinds();
	keybinds=[];
}

function drawAllKeybinds(){
	x4=screen_size[0]/2;
	y4=770;
	for(i=0;i<keybinds.length;i++){
		Render.String( x4,  y4, 1, keybinds[i], UI.GetColor( "Misc", "JAVASCRIPT", "Script items", "UI Color" ),16 );
		y4+=25;
	}
}


function UI_onWeaponFire(){
	if(Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("userid")))) {
		if(shot[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )]==undefined){
			shot[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )]=1;
		}else{
			shot[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )]++;
		}
	}
}

function UI_onPlayerHurt(){
	if(Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("attacker")))) {
		if(hit[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )]==undefined){
			hit[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )]=1;
		}else{
			hit[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )]++;
		}
	}
}

function drawHitAndMiss(){
	if(shot[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )]==undefined) shot[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )]=0;
	if(hit[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )]==undefined) hit[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )]=0;
	if(getFrameCount() % frameLimit ==35){
		percentage=(shot[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )]==0)?1:hit[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )]/shot[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )];
		percentage=(percentage>1)?1:percentage;
		shotSum=0;
		hitSum=0;
		Object.keys( shot )
					.forEach( function ( key ) {
						shotSum+=shot[key];
		});
		Object.keys( hit )
					.forEach( function ( key ) {
						hitSum+=hit[key];
		});
		percentageSum=(shotSum==0)?1:hitSum/shotSum;
		percentageSum=(percentageSum>1)?1:percentageSum;
	}
	Render.FilledRect( x3, y3 + 2, 260, 100 , theme_background_border ); // background
    Render.Rect( x3, y3 + 2, 260, 100, theme_background_margin );
    Render.FilledRect( x3 + 5, y3 + 7, 250, 90, theme_background_content ); // background1
	Render.String( x3 +130, y3 + 12, 1, "HIT | MISS", theme_text, 3 );
	drawFilledOrRainbowRect( x3 + 10,  y3 + 25, 240, 3 ); // lol
	Render.String( x3 + 15,  y3 + 35, 0, "Weapon: "+Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )+" shot: "+shot[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )]+" hit: "+hit[Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) )], theme_text,1 );
	Render.String( x3 + 15,  y3 + 55, 0, "Current "+(percentage*100).toFixed(0)+"%", theme_text,1 );
	Render.Rect( x3 + 100,  y3 + 60, 145, 6, theme_bar_border );
	drawFilledOrRainbowRect( x3 + 100,  y3 + 61, Math.floor(145*percentage), 4 );
	Render.String( x3 + 15,  y3 + 75, 0, "Total "+(percentageSum*100).toFixed(0)+"%", theme_text,1 );
	Render.Rect( x3 + 100,  y3 + 80, 145, 6, theme_bar_border );
	drawFilledOrRainbowRect( x3 + 100,  y3 + 81, Math.floor(145*percentageSum), 4 );
}

function drawRainbow(){
	colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
	Render.GradientRect( 0,  0, screen_size[0], 3, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
}

function drawFilledOrRainbowRect(x,y,a,b){
	if(theme_rainbow){
		Render.GradientRect(x,  y, a, b, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
	}else{
		Render.FilledRect( x,  y, a, b, theme_bar_content );
	}
}

function drawStatusIndicator(){
	targetName=rageTarget==0?"None":Entity.GetName(rageTarget);
	if(getFrameCount() % frameLimit ==35){
		headScale=UI.GetValue( "Rage", getWeapon( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ) ).toUpperCase(), getWeaponConfig( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ) ), "Head pointscale" );
		bodyScale=UI.GetValue( "Rage", getWeapon( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ) ).toUpperCase(), getWeaponConfig( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ) ), "Body pointscale" );
	}
	expectedDamage=UI.GetValue( "Rage", getWeapon( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ) ).toUpperCase(), "Targeting", "Minimum damage" );
	dodgeBruteforce=(getValue("Premium Anti-Aim") && getValue("Dodge Bruteforce"))?"On":"Off";
	desyncSize=Math.abs(normalizeYaw(Local.GetRealYaw()-Local.GetFakeYaw()));
	desyncSize= (desyncSize>120)?120:desyncSize;
	fakeLagMax= (getValue("Fake Lag")==2)?6:14;
	if(Globals.ChokedCommands()==0){
		fakeLag = (lastChoke>fakeLagMax)?fakeLagMax:lastChoke;
	}else{
		lastChoke=Globals.ChokedCommands();
	}
	rageFOV=UI.GetValue( "Rage", getWeapon( Entity.GetName( Entity.GetWeapon( Entity.GetLocalPlayer() ) ) ).toUpperCase(), "Targeting", "FOV" );
	FOVMax=(getValue("Play Style")==1 && getValue("Dynamic FOV") && getValue("Max FOV") != 0)?getValue("Max FOV"):180;
	accuracy=( ( 1 - Local.GetInaccuracy() ) * 100 ).toFixed( 2 );
	
	Render.FilledRect( x2 + 45, y2 + 2, 260, 240 , theme_background_border ); // background
    Render.Rect( x2 + 45, y2 + 2, 260, 240, theme_background_margin );
    Render.FilledRect( x2 + 50, y2 + 7, 250, 230, theme_background_content ); // background1
	Render.String( x2 +175, y2 + 12, 1, "STATUS", theme_text, 3 );
	drawFilledOrRainbowRect( x2 + 55,  y2 + 25, 240, 3 ); // lol
	Render.String( x2 + 60,  y2 + 35, 0, "Current Target: "+targetName, theme_text,1 );
	Render.String( x2 + 60,  y2 + 55, 0, "Head Scale ", theme_text,1 );
	Render.Rect( x2 + 135,  y2 + 59, 155, 6, theme_bar_border );
	drawFilledOrRainbowRect( x2 + 135,  y2 + 60, Math.floor(155*(headScale/100)), 4 );
	Render.String( x2 + 60,  y2 + 75, 0, "Body Scale ", theme_text,1 );
	Render.Rect( x2 + 135,  y2 + 79, 155, 6, theme_bar_border );
	drawFilledOrRainbowRect( x2 + 135,  y2 + 80, Math.floor(155*(bodyScale/100)), 4 );
	Render.String( x2 + 60,  y2 + 95, 0, "Damage Mode: "+damageMode, theme_text,1 );
	Render.String( x2 + 60,  y2 + 115, 0, "Expected Damage: "+expectedDamage+"HP", theme_text,1 );
	Render.String( x2 + 60,  y2 + 135, 0, "Dodge Bruteforce: "+dodgeBruteforce, theme_text,1 );
	Render.String( x2 + 60,  y2 + 155, 0, "Desync ", theme_text,1 );
	Render.Rect( x2 + 135,  y2 + 159, 155, 6, theme_bar_border );
	drawFilledOrRainbowRect( x2 + 135,  y2 + 160, Math.floor(155*(desyncSize/120)), 4 );
	Render.String( x2 + 60,  y2 + 175, 0, "Fake Lag ", theme_text,1 );
	Render.Rect( x2 + 135,  y2 + 179, 155, 6, theme_bar_border );
	drawFilledOrRainbowRect( x2 + 135,  y2 + 180, Math.floor(155*(fakeLag/fakeLagMax)), 4 );
	Render.String( x2 + 60,  y2 + 195, 0, "Rage FOV ", theme_text,1 );
	Render.Rect( x2 + 135,  y2 + 199, 155, 6, theme_bar_border );
	drawFilledOrRainbowRect( x2 + 135,  y2 + 200, Math.floor(155*(rageFOV/FOVMax)), 4 );
	Render.String( x2 + 60,  y2 + 215, 0, "Accuracy ", theme_text,1 );
	Render.Rect( x2 + 135,  y2 + 219, 155, 6, theme_bar_border );
	drawFilledOrRainbowRect( x2 + 135,  y2 + 220, Math.floor(155*(accuracy/100)), 4 );
}



function drawDirectionIndicator(){
	Render.Circle(screen_size[ 0 ] / 2, screen_size[ 1 ] / 2, 29, [ 170,170,170, 200 ]);
	Render.Circle(screen_size[ 0 ] / 2, screen_size[ 1 ] / 2, 30, [ 180,180,180, 200 ]);
	Render.Circle(screen_size[ 0 ] / 2, screen_size[ 1 ] / 2, 31, [ 190,190,190, 200 ]);
	Render.Circle(screen_size[ 0 ] / 2, screen_size[ 1 ] / 2, 32, [ 180,180,180, 200 ]);
	Render.Circle(screen_size[ 0 ] / 2, screen_size[ 1 ] / 2, 33, [ 170,170,170, 200 ]);
}

function drawDesyncIndicator(){
	if(getValue("Desync Indicator")==1){
		if(!getHotkey("Inverter")){
			Render.Line( screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2 + 14 , screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2 - 14, [ 0, 0, 0, 200 ] );
			Render.Line( screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2 - 14, screen_size[ 0 ] / 2 + 100, screen_size[ 1 ] / 2, [ 0, 0, 0, 200 ] );
			Render.Line( screen_size[ 0 ] / 2 + 100, screen_size[ 1 ] / 2, screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2 + 14, [ 0, 0, 0, 200 ] );
			Render.Line( screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2 + 14 , screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2 - 14, [ 210,210,210, 200 ] );
			Render.Line( screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2 - 14, screen_size[ 0 ] / 2 - 100, screen_size[ 1 ] / 2, [ 210,210,210, 200 ] );
			Render.Line( screen_size[ 0 ] / 2 - 100, screen_size[ 1 ] / 2, screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2 + 14, [ 210,210,210, 200 ] );
			Render.Polygon( [ [ screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2 + 14 ], [ screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2 - 14 ], [ screen_size[ 0 ] / 2 + 100, screen_size[ 1 ] / 2 ] ], [ 30, 30, 30, 150 ] );
			Render.Polygon( [ [ screen_size[ 0 ] / 2 - 100, screen_size[ 1 ] / 2 ], [screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2 - 14 ], [ screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2 + 14 ] ], [ 240, 240, 240, 150 ] );
		}else{
			Render.Line( screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2 + 14 , screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2 - 14, [ 210,210,210, 200 ] );
			Render.Line( screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2 - 14, screen_size[ 0 ] / 2 + 100, screen_size[ 1 ] / 2, [ 210,210,210, 200 ] );
			Render.Line( screen_size[ 0 ] / 2 + 100, screen_size[ 1 ] / 2, screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2 + 14, [ 210,210,210, 200 ] );
			Render.Line( screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2 + 14 , screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2 - 14, [ 0, 0, 0, 200 ] );
			Render.Line( screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2 - 14, screen_size[ 0 ] / 2 - 100, screen_size[ 1 ] / 2, [ 0, 0, 0, 200 ] );
			Render.Line( screen_size[ 0 ] / 2 - 100, screen_size[ 1 ] / 2, screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2 + 14, [ 0, 0, 0, 200 ] );
			Render.Polygon( [ [ screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2 + 14 ], [ screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2 - 14 ], [ screen_size[ 0 ] / 2 + 100, screen_size[ 1 ] / 2 ] ], [ 240, 240, 240, 150 ] );
			Render.Polygon( [ [ screen_size[ 0 ] / 2 - 100, screen_size[ 1 ] / 2 ], [screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2 - 14 ], [ screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2 + 14 ] ], [ 30, 30, 30, 150 ] );
		}
	}else if(getValue("Desync Indicator")==2){
		if(!getHotkey("Inverter")){
			Render.Circle(screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2, 15, [ 0, 0, 0, 200 ]);
			Render.Circle(screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2, 16, [ 0, 0, 0, 200 ]);
			Render.FilledCircle(screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2, 15, [ 30, 30, 30, 150 ]);
			Render.Circle(screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2, 15, [ 210,210,210, 200 ]);
			Render.Circle(screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2, 16, [ 210,210,210, 200 ]);
			Render.FilledCircle(screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2, 15, [ 240, 240, 240, 150 ]);
		}else{
			Render.Circle(screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2, 15, [ 210,210,210, 200 ]);
			Render.Circle(screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2, 16, [ 210,210,210, 200 ]);
			Render.FilledCircle(screen_size[ 0 ] / 2 + 75, screen_size[ 1 ] / 2, 15, [ 240, 240, 240, 150 ]);
			Render.Circle(screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2, 15, [ 0,0,0, 200 ]);
			Render.Circle(screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2, 16, [ 0,0,0, 200 ]);
			Render.FilledCircle(screen_size[ 0 ] / 2 - 75, screen_size[ 1 ] / 2, 15, [ 30,30,30,150 ]);
		}
	}
}

//yes this part of the code is pasted. I didn't even change the comment LOL.
function drawWaterMark(){
	//Cheat.Print(screen_size[0]+"\n");
	if(getFrameCount() % frameLimit ==50){
		ping = Math.ceil(Global.Latency() * 1000);
		fps = Math.ceil( 1 / Global.Frametime() );
	}
	if(getFrameCount() % frameLimit ==10){
		today = new Date();
		datetime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		tickrate = Global.Tickrate();
	}
	
    Render.FilledRect( x1 + 45, y1 + 2, 260, 55 , theme_background_border ); // background
    Render.Rect( x1 + 45, y1 + 2, 260, 55, theme_background_margin );
    Render.FilledRect( x1 + 50, y1 + 7, 250, 45, theme_background_content ); // background1
    Render.String( x1 + 122, y1 + 37, 0, "TCK   ", [ 120, 120, 120, 255 ], 3 ); //TCK
    Render.String( x1 + 127, y1 + 37, 0, "          " + tickrate, theme_text, 3 ); // TCK1
    Render.Rect( x1 + 120, y1 + 35, 23, 13, [ 120, 120, 120, 255] );		 // TCK2
    Render.Rect( x1 + 170, y1 + 35, 6, 13, [ 120, 120, 120, 255] ) ;// ping
    Render.Rect( x1 + 177, y1 + 38, 6, 10, [ 120, 120, 120, 255] ); // ping1
    Render.Rect( x1 + 184, y1 + 41, 6, 7, [ 120, 120, 120, 255] ); // ping2
    Render.Circle( x1 + 237, y1 + 41, 6, [ 120, 120, 120, 255 ] ) ;// clock
    Render.Line( x1 + 237, y1 + 42, x1 + 237, y1 + 36, [ 120, 120, 120, 255 ] ); // clock1
    Render.Line( x1 + 237, y1 + 42, x1 + 243, y1 + 42, [ 120, 120, 120, 255 ] ); // clock2
    Render.String( x1 + 192, y1 + 37, 0, " " + ping + "ms", theme_text, 3 );
    Render.Rect( x1 + 67, y1 + 33, 21, 13, [ 120, 120, 120, 255] ); // fps2
    Render.Rect( x1 + 69, y1 + 31, 21, 13, [ 120, 120, 120, 255] ); // fps3     
    Render.FilledRect( x1 + 65, y1 + 35, 21, 13, theme_background_content ); // background fps
    Render.Rect( x1 + 65, y1 + 35, 21, 13, [ 120, 120, 120, 255] ); // fps1
    Render.String( x1 + 67, y1 + 37, 0, "FPS   " , [ 120, 120, 120, 255 ], 3 );
    Render.String( x1 + 72, y1 + 37, 0, "           " + fps , theme_text, 3 );
    Render.String( x1 + 247, y1 + 37, 0, " " + datetime, theme_text, 3 );
	drawFilledOrRainbowRect( x1 + 55,  y1 + 25, 240, 3 ); // lol
    Render.String( x1 + 175, y1 + 12, 1, "ONETAP  |  DHDJ", theme_text, 3 );
}
function HSV2RGB(h, s, v)
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

Cheat.RegisterCallback("weapon_fire", "UI_onWeaponFire");
Cheat.RegisterCallback("player_hurt", "UI_onPlayerHurt");