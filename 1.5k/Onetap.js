var hasAccess = function()
{
	return true;
};

var loadEvents = false;

var sliders = [];

var visuals;
var rage;
var misc;
var main;

var tint_tint;
var	tint_intensity;

var fog_color;
var fog_distance;
var fog_density;

var vis_aspectratio;
var aspectratio = Convar.GetString("r_aspectratio");

var ent_bloom;
var ent_ambient;

var or_hc;
var or_velocity;
var or_bvelocity;
var or_md;

var hk_mindmg;
var hk_minhc;

var esp_flags;

var aa_override;
var aa_realoffset;
var aa_fakeoffset;
var aa_lbyoffset;
var aa_flips;
var aa_flip_delay;
var aa_flip_time;
var aa_jitter;
var aa_jitterangles;

var skin_rarity;
var skin_name;
var change_skin;

var jitter = false;
var backup_ticks = 0;
var next_flip = 0;
var stay_flipped = 0;
var flipped = false;

var reveal_votes;
var reveal_votes_to;

var trashtalk_messages;
var trashtalk_type;
var trashtalk_delay;
var trashtalk_target;
var lastTime;

// FSP SETTINGS
var fps_boost;
var fps_boost_max_dist;

// CHANGERS
var rank;
var coin;

var wins;
var commends_leader;
var commends_teacher;
var commends_friendly;
var music_kit;

var level;

var server_crash;

function UpdateRank() {};
function UpdateInventory() {};
function UpdateStats() {};
function UpdateLevel() {};

var ChatColor =
{
    white: "\x01",
    red: "\x02",
    purple: "\x03",
    green: "\x04",
    light_green: "\x05",
    turquoise: "\x06",
    light_red: "\x07",
    gray: "\x08",
    yellow: "\x09",
    gray2: "\x0A",
    light_blue: "\x0B",
    grayPurpleSpec: "\x0C",
    blue: "\x0D",
    pink: "\x0E",
    dark_orange: "\x0F",
    orange: "\x10"
}

var coins = 
[
    "5 Year Veteran Coin", "Champion at DreamHack 2013", "Finalist at DreamHack 2013", "Semifinalist at DreamHack 2013", "Quarterfinalist at DreamHack 2013",
	"Champion at EMS One Katowice 2014", "Finalist at EMS One Katowice 2014", "Semifinalist at EMS One Katowice 2014", "Quarterfinalist at EMS One Katowice 2014",
	"Champion at ESL One Cologne 2014", "Finalist at ESL One Cologne 2014", "Semifinalist at ESL One Cologne 2014", "Semifinalist at ESL One Cologne 2014",
	"Quarterfinalist at ESL One Cologne 2014", "Bronze Cologne 2014 Pick'Em Trophy", "Silver Cologne 2014 Pick'Em Trophy", "Gold Cologne 2014 Pick'Em Trophy",
	"Champion at DreamHack Winter 2014", "Finalist at DreamHack Winter 2014", "Semifinalist at DreamHack Winter 2014", "Quarterfinalist at DreamHack Winter 2014",
	"Bronze DreamHack 2014 Pick'Em Trophy", "Silver DreamHack 2014 Pick'Em Trophy", "Gold DreamHack 2014 Pick'Em Trophy", "Champion at ESL One Katowice 2015",
	"Finalist at ESL One Katowice 2015", "Semifinalist at ESL One Katowice 2015", "Quarterfinalist at ESL One Katowice 2015", "Bronze Katowice 2015 Pick'Em Trophy",
	"Silver Katowice 2015 Pick'Em Trophy", "Gold Katowice 2015 Pick'Em Trophy", "Champion at ESL One Cologne 2015", "Finalist at ESL One Cologne 2015", 
	"Semifinalist at ESL One Cologne 2015", "Quarterfinalist at ESL One Cologne 2015", "Bronze Cologne 2015 Pick'Em Trophy", "Silver Cologne 2015 Pick'Em Trophy", 
	"Gold Cologne 2015 Pick'Em Trophy", "Bronze Cluj-Napoca 2015 Pick'Em Trophy", "Silver Cluj-Napoca 2015 Pick'Em Trophy", "Gold Cluj-Napoca 2015 Pick'Em Trophy",
	"Bronze Cluj-Napoca 2015 Fantasy Trophy", "Silver Cluj-Napoca 2015 Fantasy Trophy", "Gold Cluj-Napoca 2015 Fantasy Trophy", "Champion at DreamHack Cluj-Napoca 2015",
	"Finalist at DreamHack Cluj-Napoca 2015", "Semifinalist at DreamHack Cluj-Napoca 2015", "Quarterfinalist at DreamHack Cluj-Napoca 2015", "Operation Payback Challenge Coin",
	"Silver Operation Payback Coin", "Gold Operation Payback Coin", "Museum Map Coin", "Downtown Map Coin", "Thunder Map Coin", "Favela Map Coin", "Motel Map Coin",
	"Seaside Map Coin", "Library Map Coin", "Operation Bravo Challenge Coin", "Silver Operation Bravo Coin", "Gold Operation Bravo Coin", "Agency Map Coin",
	"Ali Map Coin", "Cache Map Coin", "Chinatown Map Coin", "Gwalior Map Coin", "Ruins Map Coin", "Siege Map Coin", "Operation Phoenix Challenge Coin",
	"Silver Operation Phoenix Coin", "Gold Operation Phoenix Coin", "Operation Breakout Challenge Coin", "Silver Operation Breakout Coin", "Gold Operation Breakout Coin",
	"Castle Map Coin", "Black Gold Map Coin", "Rush Map Coin", "Mist Map Coin", "Insertion Map Coin", "Overgrown Map Coin", "Marquis Map Coin", "Workout Map Coin",
	"Backalley Map Coin", "Season Map Coin", "Bazaar Map Coin", "Facade Map Coin", "Log Map Coin", "Rails Map Coin", "Resort Map Coin", "Zoo Map Coin", "Operation Vanguard Challenge Coin",
	"Silver Operation Vanguard Coin", "Gold Operation Vanguard Coin", "Operation Bloodhound Challenge Coin", "Silver Operation Bloodhound Coin", "Gold Operation Bloodhound Coin",
	"2015 Service Medal", "2015 Service Medal", "2016 Service Medal", "2016 Service Medal", "2016 Service Medal", "2016 Service Medal", "2016 Service Medal", "2016 Service Medal",
	"Dust II Pin", "Guardian Elite Pin", "Mirage Pin", "Inferno Pin", "Italy Pin", "Victory Pin", "Militia Pin", "Nuke Pin", "Train Pin", "Guardian Pin", "Tactics Pin"
];

var coin_ids =
[
	874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 
	904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1013, 1014, 
	1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1024, 1025, 1026, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 
	1044, 1045, 1046, 1316, 1317, 1318, 1327, 1328, 1329, 1331, 1332, 1339, 1340, 1341, 1342, 1343, 1344, 6001, 6002, 6003, 6004, 6005, 6006, 6007, 6008, 6009, 6010, 6011
];

var music = 
[
	"MusicKit | Daniel Sadowski, Crimson Assault", "MusicKit | Noisia, Sharpened", "MusicKit | Robert Allaire, Insurgency", "MusicKit | Sean Murray, A*D*8",
	"MusicKit | Feed Me, High Noon", "MusicKit | Dren, Death's Head Demolition", "MusicKit | Austin Wintory, Desert Fire","MusicKit | Sasha, LNOE", "MusicKit | Skog, Metal",
	"MusicKit | Midnight Riders, All I Want for Christmas", "MusicKit | Daniel Sadowski, Total Domination", "MusicKit | Various Artists, Hotline Miami",
	"MusicKit | Matt Lange, IsoRhythm", "MusicKit | Mateo Messina, For No Mankind", "MusicKit | Damjan Mravunac, The Talos Principle", "MusicKit | Proxy, Battlepack",
	"MusicKit | Ki:Theory, MOLOTOV", "MusicKit | Troels Folmann, Uber Blasto Phone", "MusicKit | Kelly Bailey, Hazardous Environments", "MusicKit | Skog, II-Headshot",
	"MusicKit | Daniel Sadowski, The 8-Bit Kit","MusicKit | AWOLNATION, I Am","MusicKit | Mord Fustang, Diamonds","MusicKit | Michael Bross, Invasion!",
	"MusicKit | Ian Hultquist, Lion's Mouth","MusicKit | New Beat Fund, Sponge Fingerz","MusicKit | Beartooth, Disgusting","MusicKit | Lennie Moore, Java Havana Funkaloo",
	"MusicKit | Darude, Moments CS:GO","StatTrak™ MusicKit | Proxy, Battlepack","StatTrak™ MusicKit | Ki:Theory, MOLOTOV",
	"StatTrak™ MusicKit | Troels Folmann, Uber Blasto Phone","StatTrak™ MusicKit | Kelly Bailey, Hazardous Environments","StatTrak™ MusicKit | Skog, II-Headshot",
	"StatTrak™ MusicKit | Daniel Sadowski, The 8-Bit Kit","StatTrak™ MusicKit | AWOLNATION, I Am","StatTrak™ MusicKit | Mord Fustang, Diamonds",
	"StatTrak™ MusicKit | Michael Bross, Invasion!","StatTrak™ MusicKit | Ian Hultquist, Lion's Mouth","StatTrak™ MusicKit | New Beat Fund, Sponge Fingerz",
	"StatTrak™ MusicKit | Beartooth, Disgusting","StatTrak™ MusicKit | Lennie Moore, Java Havana Funkaloo","StatTrak™ MusicKit | Darude, Moments CS:GO",
	"StatTrak™ MusicKit | Daniel Sadowski, Crimson Assault","StatTrak™ MusicKit | Noisia, Sharpened","StatTrak™ MusicKit | Robert Allaire, Insurgency",
	"StatTrak™ MusicKit | Sean Murray, A*D*8","StatTrak™ MusicKit | Feed Me, High Noon","StatTrak™ MusicKit | Dren, Death's Head Demolition",
	"StatTrak™ MusicKit | Austin Wintory, Desert Fire","StatTrak™ MusicKit | Sasha, LNOE","StatTrak™ MusicKit | Skog, Metal",
	"StatTrak™ MusicKit | Midnight Riders, All I Want for Christmas","StatTrak™ MusicKit | Daniel Sadowski, Total Domination",
	"StatTrak™ MusicKit | Various Artists, Hotline Miami","StatTrak™ MusicKit | Matt Lange, IsoRhythm","StatTrak™ MusicKit | Mateo Messina, For No Mankind",
	"StatTrak™ MusicKit | Damjan Mravunac, The Talos Principle"
];

var music_ids =
[
	20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20050, 20051, 20052, 20053, 20054, 20055, 20069, 20070, 20071, 20072, 20073, 20085, 20086, 20087, 
	20088, 20089, 20090, 20091, 20092, 20093, 20094, 20095, 20096, 20097, 20098, 20099, 20100, 20101, 20102, 20103, 20104, 20105, 20106, 20107, 20108, 20109, 20110, 
	20110, 20112, 20113, 20114, 20115, 20116, 20117, 20118, 20119, 20120, 20121, 20122
];

// ---

//System vars
var	force_license_color;
var propsLoaded = false;

var unloading = false;

var indicator_fake;
var indicator_ping;
var indicator_lagcomp;
var indicator_lagfps;
var indicator_fakeduck;
var watermark;

var lc_lastdelta;

var indicator_font;

var last_spam  = Globals.Tickcount()

var lastFPS = 0;
var lastFPSTick = 0;

var vote_options = [];
var vote_issue;

var velocity_graph;
var velocity_graph_offset;
var velocity_graph_color;
var velocity_graph_linesize;
var last_log = 0;
var last_delta = 0;
var last_color = null;
var velocity_data = [];

function GetOTPValue(){}
function IsMultiComboSelected() {}
function GetState() {}
function CanModify(){}

function OnRender(){}
function OnCreateMove(){}
function OnDraw(){}
function OnUnload(){}
function OnMatchEnd() {}


function SendMessage(str, msg)
{
	Cheat.PrintChat(" \x0C[\x0A"+str+"\x0C] \x04"+msg);
}

// Votes
function OnVoteOptions(){}
function OnVoteCast(){}
function OnVoteStarted(){}

function clamp(v, min, max)
{
	return Math.min(Math.max(v, min), max);
}

function GetFadeRGB(speed, alpha)
{
    var r = Math.floor( Math.sin( Globals.Realtime() * speed + 0) * 127 + 128 )
    var g = Math.floor( Math.sin( Globals.Realtime() * speed + 2) * 127 + 128 )
    var b = Math.floor( Math.sin( Globals.Realtime() * speed + 4) * 127 + 128 )
    return [r, g, b, alpha];
}

function GetFadeRGBOffset(speed, alpha, offset)
{
    var r = Math.floor( Math.sin( (Globals.Realtime() + offset) * speed + 0) * 127 + 128 )
    var g = Math.floor( Math.sin( (Globals.Realtime() + offset) * speed + 2) * 127 + 128 )
    var b = Math.floor( Math.sin( (Globals.Realtime() + offset) * speed + 4) * 127 + 128 )
    return [r, g, b, alpha];
}
		
function GetDistance(a, b)
{
    x = a[0] - b[0];
    y = a[1] - b[1];
    z = a[2] - b[2];
    return Math.sqrt( x * x + y * y + z * z );
}

function GetMetricDistance(a, b)
{
    return Math.floor(Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2)) * 0.0254 );
}		
	var ChatColor =
{
    white: "\x01",
    red: "\x02",
    purple: "\x03",
    green: "\x04",
    light_green: "\x05",
    turquoise: "\x06",
    light_red: "\x07",
    gray: "\x08",
    yellow: "\x09",
    gray2: "\x0A",
    light_blue: "\x0B",
    grayPurpleSpec: "\x0C",
    blue: "\x0D",
    pink: "\x0E",
    dark_orange: "\x0F",
    orange: "\x10"
}

var oldName;
var doChange;
var nexttime;

function SendFakeCaseOpening() {
	doChange = true;
	oldName = Convar.GetString("name"); 
	Convar.SetString("name", "\n\xAD\xAD\xAD");
	nexttime = Globals.Curtime() + 5;
} 
	
function get_delta_color(delta)
{
	// Rounds our delta to get more consistent results
	delta = Math.round(delta);

		// Who the f*ck made this code?!
		// If the delta is positive, then set the color to red (confusing, right? I thought that too).
		if (delta > 0)
		{
			delta = [255, 31, 49, 255];
	} else
		// If the delta is negative, then set the color to green.
		if (delta < 0)
		{
			delta = [125, 255, 51, 255];
	} else
		// If there's no delta, then set the color to yellow.
		if (delta > -1 && delta < 1)
		{
			delta = [255, 213, 46, 255];
		}
 
	// Return the final color
	return delta;
}

(function()
{
	var sync = hasAccess;
	var allowed = sync();
	var ui = {};
	ui.otp_sub = ["Config", "main", "main"];
	ui.otp_sub_visuals = ["Config", "visuals", "visuals"];
	ui.otp_sub_rage = ["Config", "rage", "rage"];
	ui.otp_sub_misc = ["Config", "misc", "misc"];

	switch(allowed)
	{
		case true:
		{
			Cheat.PrintColor([ 144, 252, 3, 255 ], "A valid license has been found for '"+Cheat.GetUsername()+"'.\n");
			loadEvents = true;
			break;
		}
		case false:
			Cheat.PrintColor([ 252, 3, 86, 255 ], "No license found for '"+Cheat.GetUsername()+"'.\n");
			return;
	}

	// Creating UI items
	GetOTPValue = function(name){
		return UI.GetValue(ui.otp_sub, name);
	}
	IsMultiComboSelected = function(path, value) {
		return UI.GetString(path).indexOf(value) >= 0;
	}
	GetState = function(bool) {
		return bool ? 1 : 0;
	}
	CanModify = function(path, str) {
		return IsMultiComboSelected(main, "On") && IsMultiComboSelected(path, str) && !unloading
	}

	UI.AddSubTab(["Config", "SUBTAB_MGR"], "");

	UI.AddSubTab(["Config", "SUBTAB_MGR"], ui.otp_sub[1]);
	UI.AddSubTab(["Config", "SUBTAB_MGR", "SHEET_MGR"], ui.otp_sub[2]);	
	
	// Sub tabs
	UI.AddSubTab(["Config", "SUBTAB_MGR"], ui.otp_sub_visuals[1]);
	UI.AddSubTab(["Config", "SUBTAB_MGR", "SHEET_MGR"], ui.otp_sub_visuals[2]);	

	UI.AddSubTab(["Config", "SUBTAB_MGR"], ui.otp_sub_rage[1]);
	UI.AddSubTab(["Config", "SUBTAB_MGR", "SHEET_MGR"], ui.otp_sub_rage[2]);	

	UI.AddSubTab(["Config", "SUBTAB_MGR"], ui.otp_sub_misc[1]);
	UI.AddSubTab(["Config", "SUBTAB_MGR", "SHEET_MGR"], ui.otp_sub_misc[2]);


	UI.AddSubTab(["Config", "SUBTAB_MGR"], "");

	// --- Main
	main = UI.AddDropdown(ui.otp_sub,"Onetap+ Assistance", ["Off", "On"], 0);

	UI.AddSliderInt(ui.otp_sub,"License: "+Cheat.GetUsername(), 0, 0);
	watermark = UI.AddCheckbox(ui.otp_sub, "Watermark");
	fps_boost = UI.AddMultiDropdown(ui.otp_sub, "Performance boosts", ["ESP"]);
	fps_boost_max_dist = UI.AddSliderFloat(ui.otp_sub, "ESP distance (m)", 0, 1000)
	
	// --- Visuals
	visuals = UI.AddMultiDropdown(ui.otp_sub_visuals,"Advanced visuals", ["Enable Fog", "Enable Tint", "Advanced ESP", "Bloom", "Model ambient", "Aspect ratio", "Velocity graph"]);

	tint_tint = UI.AddSliderInt(ui.otp_sub_visuals, "Tint", 0, 100);
	tint_intensity = UI.AddSliderInt(ui.otp_sub_visuals, "Tint intensity", 0, 100);

	fog_color = UI.AddColorPicker(ui.otp_sub_visuals, "Fog color");
	fog_distance = UI.AddSliderInt(ui.otp_sub_visuals, "Fog distance", 0, 2500);
	fog_density = UI.AddSliderInt(ui.otp_sub_visuals, "Fog density", 0, 100);
 
	ent_bloom = UI.AddSliderInt(ui.otp_sub_visuals, "Bloom scale", 0, 100);
	ent_ambient = UI.AddSliderInt(ui.otp_sub_visuals, "Model ambient", 0, 100);
		
	vis_aspectratio = UI.AddSliderFloat(ui.otp_sub_visuals, "Aspect ratio", 0.0, 5.0);
	
	esp_flags = UI.AddMultiDropdown(ui.otp_sub_visuals,"Flags", ["Bot"]);

	velocity_graph = UI.AddCheckbox(ui.otp_sub_visuals, "Velocity graph");
	velocity_graph_offset = UI.AddSliderInt(ui.otp_sub_visuals, "Graph offset", 0, 500);
	velocity_graph_color = UI.AddColorPicker(ui.otp_sub_visuals, "Line color");
	velocity_graph_linesize = UI.AddSliderInt(ui.otp_sub_visuals, "Line size", 1, 5);

	// --- Rage
	rage = UI.AddMultiDropdown(ui.otp_sub_rage,"Advanced ragebot", ["Custom Desync", "Custom Slowwalk", "Legit AA on peek", "Override HC", "Override MD"]);
 
	aa_override = UI.AddCheckbox(ui.otp_sub_rage, "Override anti-aim");
	aa_fakeoffset = UI.AddSliderInt(ui.otp_sub_rage, "Fake offset", -180, 180);
	aa_realoffset = UI.AddSliderInt(ui.otp_sub_rage, "Real offset", -180, 180);
	aa_lbyoffset = UI.AddSliderInt(ui.otp_sub_rage, "Lower body offset", -180, 180);
	aa_flips = UI.AddCheckbox(ui.otp_sub_rage, "Do flips");
	aa_flip_delay = UI.AddSliderInt(ui.otp_sub_rage, "Flip delay", 0, 100);
	aa_flip_time = UI.AddSliderInt(ui.otp_sub_rage, "Flip time", 0, 100); 
	aa_jitter = UI.AddSliderInt(ui.otp_sub_rage, "Jitter", -180, 180); 
	aa_jitterangles = UI.AddMultiDropdown(ui.otp_sub_rage, "Jitter angles", ["Real", "Fake", "Lower body yaw"]); 
	
	or_bvelocity = UI.AddCheckbox(ui.otp_sub_rage, "Override at velocity");
	or_velocity = UI.AddSliderInt(ui.otp_sub_rage, "Maximum velocity", 0, 255);

	or_hc = UI.AddSliderInt(ui.otp_sub_rage, "Override hit chance", 0, 100);
	or_md = UI.AddSliderInt(ui.otp_sub_rage, "Override minimum damage", 0, 100);

	// --- Misc
	misc = UI.AddMultiDropdown(ui.otp_sub_misc,"Advanced features", ["Trashtalk Plus", "Custom clantag", "Resolve on shot", "Reveals", "Indicators", "Rank changer", "Inventory changer", "Server Crasher"]);

	indicator_fake = UI.AddCheckbox(ui.otp_sub_misc, "Fake indicator"); 
	indicator_ping = UI.AddCheckbox(ui.otp_sub_misc, "Ping indicator"); 
	indicator_lagcomp = UI.AddCheckbox(ui.otp_sub_misc, "Lag compensation indicator"); 
	indicator_lagfps = UI.AddCheckbox(ui.otp_sub_misc, "FPS indicator"); 
	indicator_fakeduck = UI.AddCheckbox(ui.otp_sub_misc, "Fake duck indicator"); 

	// Trashtalk 
	trashtalk_messages = UI.AddTextbox(ui.otp_sub_misc, "Messages (seperate by ';')");
	trashtalk_type = UI.AddDropdown(ui.otp_sub_misc, "Type", ["Disabled", "Global chat", "Team chat", "Radio commands", "On kill"], 0);
	trashtalk_delay = UI.AddSliderInt(ui.otp_sub_misc, "Delay in seconds", 1, 100);

	reveal_votes = UI.AddCheckbox(ui.otp_sub_misc, "Reveal votes"); 
	reveal_votes_to = UI.AddDropdown(ui.otp_sub_misc,"Target", ["Local", "Team", "All"], 0);

	server_crash = UI.AddCheckbox(ui.otp_sub_misc, "Enable Server crasher"); 

	rank = UI.AddDropdown(ui.otp_sub_misc, "Rank", 
	[
		"Expired", "Silver 1", "Silver 2", "Silver 3", "Silver 4", "Silver Elite", "Silver Elite Master", 
		"Gold Nova 1", "Gold Nova 2", "Gold Nova 3", "Gold Nova Master", "Master Guardian 1", "Master Guardian 2", "Master Guardian Elite", "Distinguished Master Guardian", 
		"Legendary Eagle", "Legendary Eagle Master", "Supreme Master First Class", "Global Elite"
	], 1)
	
	coin = UI.AddDropdown(ui.otp_sub_misc, "Coin", coins, 1);
	
	music = UI.AddDropdown(ui.otp_sub_misc, "Music kit", music, 1)

	level = UI.AddSliderInt(ui.otp_sub_misc, "Level", 1, 40);

	/*
	skin_name = UI.AddTextbox(ui.otp_sub_misc, "Skin name");
	skin_rarity = UI.AddDropdown(ui.otp_sub_misc, "Item rarity", ["Consumer-grade", "Industrial grade", "Mil-spec", "Restricted", "Classified", "Covert", "Contraband items"], 1);;
	change_skin = UI.AddCheckbox(ui.otp_sub_misc, "Send fake message");
	*/
	
	hk_mindmg = UI.AddHotkey(["Config", "Scripts", "Keys", "JS Keybinds"], "Override Minimum Damage", "Overriding MD");
	hk_minhc = UI.AddHotkey(["Config", "Scripts", "Keys", "JS Keybinds"], "Override Hit Chance", "Overriding HC");
		
	UI.SetValue(["Misc.", "Helpers", "Client", "Reveal hidden cvars"], 1);
		
	OnMatchEnd = function()
	{
		SendMessage("Info", "Match ended.");
	}
		
	UpdateLevel = function()
	{
		Entity.SetProp(Entity.GetLocalPlayer(), "CCSPlayerResource", "m_nPersonaDataPublicLevel", UI.GetValue(level));
	} 
		
	UpdateInventory = function()
	{	
		Entity.SetProp(Entity.GetLocalPlayer(), "CCSPlayerResource", "m_nMusicID", music_ids[UI.GetValue(music)]);		
		Entity.SetProp(Entity.GetLocalPlayer(), "CCSPlayerResource", "m_nActiveCoinRank", coin_ids[UI.GetValue(coin)]);		
	}
		
	UpdateRank = function()
	{
		Entity.SetProp(Entity.GetLocalPlayer(), "CCSPlayerResource", "m_iCompetitiveRanking", UI.GetValue(rank));
	}
		
	OnVoteStarted = function()
	{
		
//		switch(Event.GetInt("type"))
//		{
//			case 0: 
//				vote_issue = "Kick player: "+Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("vote_parameter")))+"?";
//			case 6: 
//				vote_issue = "Surrender?";
//			case 13: 
//				vote_issue = "Call a timeout?";
//			default:
//				vote_issue = "Unknown";
//		}

		Cheat.Print("Vote started1\n");
//		if(UI.GetValue(reveal_votes))
//			SendMessage("Vote Reveal", "Issue: "+issue);
	}
	
	OnVoteOptions = function()
	{
	    vote_options[0] = Event.GetString("option1")
		vote_options[1] = Event.GetString("option2")
		vote_options[2] = Event.GetString("option3")
		vote_options[3] = Event.GetString("option4")
		vote_options[4] = Event.GetString("option5")
	}
	
	OnVoteCast = function()
	{
		var entid = Event.GetInt("entityid");
		if (entid) {
			var team = Event.GetInt("team");
			var option = Event.GetInt("vote_option");
			var name = Entity.GetName(entid);
			var chTeam = "[?] ";
			
			switch (team) {
				case 2: 
					chTeam = "[T] "; 
					break; 
				case 3: 
					chTeam = "[CT] "; 
					break;
			}

			var vote = vote_options[option];
			
			Cheat.Print("[onetap+] "+chTeam+ name + " voted " + vote + "\n");

			if(UI.GetValue(reveal_votes))
			{
				SendMessage("Vote Reveal", chTeam+name + " voted "+vote);
				if(IsMultiComboSelected(reveal_votes_to, "Team"))
				{
					Cheat.ExecuteCommand("say_team " + chTeam + name + " voted " + vote);	
				} else if(IsMultiComboSelected(reveal_votes_to, "All"))
				{
					Cheat.ExecuteCommand("say " + name + chTeam + " voted " + vote);
				}
			}
		}
	}
	
	OnDraw = function()
	{
		

		UI.SetEnabled(visuals, GetState(IsMultiComboSelected(main, "On")));
		UI.SetEnabled(misc, GetState(IsMultiComboSelected(main, "On")));
		UI.SetEnabled(rage, GetState(IsMultiComboSelected(main, "On")));
		UI.SetEnabled(fps_boost, GetState(IsMultiComboSelected(main, "On")));
		UI.SetEnabled(watermark, GetState(IsMultiComboSelected(main, "On")));
		
		UI.SetEnabled(fps_boost_max_dist, GetState(GetState(IsMultiComboSelected(main, "On")) && IsMultiComboSelected(fps_boost, "ESP")));
		
		UI.SetEnabled(fog_color, GetState(IsMultiComboSelected(visuals, "Enable Fog")));
		UI.SetEnabled(fog_distance, GetState(IsMultiComboSelected(visuals, "Enable Fog")));
		UI.SetEnabled(fog_density, GetState(IsMultiComboSelected(visuals, "Enable Fog")));
	
		UI.SetEnabled(tint_tint, GetState(IsMultiComboSelected(visuals, "Enable Tint")));
		UI.SetEnabled(tint_intensity, GetState(IsMultiComboSelected(visuals, "Enable Tint")));
		UI.SetEnabled(esp_flags, GetState(IsMultiComboSelected(visuals, "Advanced ESP")));

		UI.SetEnabled(ent_bloom, GetState(IsMultiComboSelected(visuals, "Bloom")));
		UI.SetEnabled(ent_ambient, GetState(IsMultiComboSelected(visuals, "Model ambient")));
		UI.SetEnabled(vis_aspectratio, GetState(IsMultiComboSelected(visuals, "Aspect ratio")));
		UI.SetEnabled(velocity_graph, GetState(IsMultiComboSelected(visuals, "Velocity graph")));
		UI.SetEnabled(velocity_graph_offset, GetState(IsMultiComboSelected(visuals, "Velocity graph")));
		UI.SetEnabled(velocity_graph_color, GetState(IsMultiComboSelected(visuals, "Velocity graph")));
		UI.SetEnabled(velocity_graph_linesize, GetState(IsMultiComboSelected(visuals, "Velocity graph")));

		UI.SetEnabled(aa_override, GetState(IsMultiComboSelected(rage, "Custom Desync")));
		UI.SetEnabled(aa_realoffset, GetState(IsMultiComboSelected(rage, "Custom Desync")));
		UI.SetEnabled(aa_fakeoffset, GetState(IsMultiComboSelected(rage, "Custom Desync")));
		UI.SetEnabled(aa_lbyoffset, GetState(IsMultiComboSelected(rage, "Custom Desync")));
		UI.SetEnabled(aa_flips, GetState(IsMultiComboSelected(rage, "Custom Desync")));
		UI.SetEnabled(aa_flip_delay, GetState(IsMultiComboSelected(rage, "Custom Desync")) && GetState(aa_flips));
		UI.SetEnabled(aa_flip_time, GetState(IsMultiComboSelected(rage, "Custom Desync")) && GetState(aa_flips));
		UI.SetEnabled(aa_jitter, GetState(IsMultiComboSelected(rage, "Custom Desync")));
		UI.SetEnabled(aa_jitterangles, GetState(IsMultiComboSelected(rage, "Custom Desync")) && GetState(aa_jitter));
		 
		UI.SetEnabled(reveal_votes, GetState(IsMultiComboSelected(misc, "Reveals")));
		UI.SetEnabled(reveal_votes_to, GetState(IsMultiComboSelected(misc, "Reveals")));
		UI.SetEnabled(indicator_fake, GetState(IsMultiComboSelected(misc, "Indicators")));
		UI.SetEnabled(indicator_ping, GetState(IsMultiComboSelected(misc, "Indicators")));
		UI.SetEnabled(indicator_lagcomp, GetState(IsMultiComboSelected(misc, "Indicators")));
		UI.SetEnabled(indicator_lagfps, GetState(IsMultiComboSelected(misc, "Indicators")));
		UI.SetEnabled(indicator_fakeduck, GetState(IsMultiComboSelected(misc, "Indicators")));
		
		UI.SetEnabled(rank, GetState(IsMultiComboSelected(misc, "Rank changer")));
		UI.SetEnabled(coin, GetState(IsMultiComboSelected(misc, "Inventory changer")));
		UI.SetEnabled(music, GetState(IsMultiComboSelected(misc, "Inventory changer")));
		UI.SetEnabled(level, GetState(IsMultiComboSelected(misc, "Inventory changer")));
		UI.SetEnabled(server_crash, GetState(IsMultiComboSelected(misc, "Server Crasher")));

		UI.SetEnabled(or_hc, GetState(IsMultiComboSelected(rage, "Override HC")));
		UI.SetEnabled(or_md, GetState(IsMultiComboSelected(rage, "Override MD")));
		
		UI.SetEnabled(trashtalk_messages, GetState(IsMultiComboSelected(misc, "Trashtalk Plus")));
		UI.SetEnabled(trashtalk_type, GetState(IsMultiComboSelected(misc, "Trashtalk Plus")));
		UI.SetEnabled(trashtalk_delay, GetState(IsMultiComboSelected(misc, "Trashtalk Plus")));

		if(IsMultiComboSelected(rage, "Override HC") || IsMultiComboSelected(rage, "Override MD"))
		{
			UI.SetEnabled(or_velocity, 1);
			UI.SetEnabled(or_bvelocity, 1);
		} else {
			UI.SetEnabled(or_velocity, 0);
			UI.SetEnabled(or_bvelocity, 0);		
		}
		

	}

	OnCreateMove = function()
	{
		
		if(doChange && nexttime >= Globals.Curtime())
		{	
			var skin = UI.GetString(skin_name);
			var color;
			switch(UI.GetValue(skin_rarity))
			{
			case 0:
				color = ChatColor.gray2;
			case 1:
				color = ChatColor.light_blue;
			case 2:
				color = ChatColor.blue;
			case 3:
				color = ChatColor.purple;
			case 4:
				color = ChatColor.pink;
			case 5:
				color = ChatColor.red;
			case 6:
				color = ChatColor.yellow;
			}
			Convar.SetString("name", oldName+" has opened a container and found: "+color+skin.replace("?", "★"));
			Cheat.ExecuteCommand("say 𐂃");
			Convar.SetString("name", oldName);		
		}
		
		if(UI.GetValue(server_crash))
		{
			UI.SetValue(server_crash, 0);
			Cheat.ExecuteCommand("survival_equip spawn_equip_healthshot");
		}
			

		//Misc

/*
				
		trashtalk_messages = UI.AddTextbox(ui.otp_sub_misc, "Messages (seperate by ';')");
		trashtalk_type = UI.AddDropdown(ui.otp_sub_misc, "Type", ["Disabled", "Global chat", "Team chat", "Radio commands"]);
		trashtalk_delay = UI.AddSliderInt(ui.otp_sub_misc, "Delay in seconds", 1, 100);
			Globals.Curtime()
			
								Cheat.ExecuteCommand("say_team " + name + " voted " + vote);	
				} else if(IsMultiComboSelected(reveal_votes_to, "All"))
				{
					Cheat.ExecuteCommand("say " + name + " voted " + vote);
				}

*/

		if(CanModify(fps_boost, "ESP"))
		{
			var local = Entity.GetLocalPlayer();
			var entities = Entity.GetEntities();
			for(ent in entities) {
				if(Entity.IsEnemy(enemies[e]) || !Entity.IsValid(enemies[e])) continue;
				if(GetMetricDistance(Entity.GetHitboxPosition(local, 0), Entity.GetHitboxPosition(ent, 0) >= UI.GetValue(fps_boost_max_dist)))
				{
					Entity.DisableESP(ent)
				}
			}
		}

		if(CanModify(visuals, "Advanced ESP"))
		{
			var targets = Ragebot.GetTargets();
			if (targets != "")
			{
				for (i = 0; i < targets.length; i++)
				{
					
						Entity.DrawFlag(targets[i], "BOT", [124, 255, 59, 200])

				}
			}
		}
				
		

		//Rage
		function GetVelocity(index) {
			var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
			return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
		}

		// Mindmg/hitchance
		var bvel = UI.GetValue(or_bvelocity);
		var vel = UI.GetValue(or_velocity);
		var cmod_hc = CanModify(rage, "Override HC");
		var cmod_md = CanModify(rage, "Override MD");

		if(cmod_hc || cmod_md)
		{
			for (var i in Entity.GetEnemies()) 
			{
				var target = Entity.GetEnemies()[i];
				var target_vel = GetVelocity(target);

				if(cmod_hc && UI.GetValue(hk_minhc))
				{
					if (bvel && target_vel > vel)
						return;
					
					Ragebot.ForceTargetHitchance(target, UI.GetValue(or_hc))
				}

				if(cmod_md && UI.GetValue(hk_mindmg))
				{
					if (bvel && target_vel > vel)
						return;

					Ragebot.ForceTargetMinimumDamage(target, UI.GetValue(or_md));
				}
			}
		}
		
		// Anti-aim
		if(CanModify(rage, "Custom Desync"))
		{

			backup_ticks++;
			if(UI.GetValue(aa_flips))
			{

				var flip_delay = UI.GetValue(aa_flip_delay);
				var flip_time = UI.GetValue(aa_flip_time);						
	
				if(flipped)
				{
					if(backup_ticks >= stay_flipped)
					{
						flipped = !flipped;
						next_flip = flip_delay;
						backup_ticks = 0;
					} 
				} else {
					if(backup_ticks >= next_flip)
					{
						flipped = !flipped;
						stay_flipped = flip_time;
						backup_ticks = 0;
					}	
				}					
			}
			
			AntiAim.SetOverride(UI.GetValue(aa_override));
			
			var jitteramount = UI.GetValue(aa_jitter);
			var real = UI.GetValue(aa_realoffset);
			var fake = UI.GetValue(aa_fakeoffset);
			var lby = UI.GetValue(aa_lbyoffset);

			jitter = !jitter;	
			
			if(jitter)
			{	
				if(IsMultiComboSelected(aa_jitterangles, "Fake")) fake += jitteramount;
				if(IsMultiComboSelected(aa_jitterangles, "Real")) real += jitteramount;
				if(IsMultiComboSelected(aa_jitterangles, "Lower body yaw")) lby += jitteramount;
			} else {
				if(IsMultiComboSelected(aa_jitterangles, "Fake")) fake -= jitteramount;
				if(IsMultiComboSelected(aa_jitterangles, "Real")) real -= jitteramount;
				if(IsMultiComboSelected(aa_jitterangles, "Lower body yaw")) lby -= jitteramount;			
			}
	
			AntiAim.SetFakeOffset(flipped ? -Math.abs(fake) : fake);
			AntiAim.SetRealOffset(flipped ? -Math.abs(real) : real);
			AntiAim.SetLBYOffset(lby);
		}
	}	

	OnRender = function()
	{

if(CanModify(misc, "Trashtalk Plus"))
		{
			var time = parseInt((Globals.Curtime()))
			var realtime = Global.Tickrate()
			var messages = UI.GetString(trashtalk_messages).split(";");
			
			if(lastTime != time)
			{
				lastTime = time;
				if((time) % UI.GetValue(trashtalk_delay) * 100 == 0)
				{
					if(IsMultiComboSelected(trashtalk_type, "Global chat"))
					{//﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽﷽ ﷽
						Cheat.ExecuteCommand("say " + messages[Math.floor(Math.random() * messages.length)]);
					} else if(IsMultiComboSelected(trashtalk_type, "Team chat"))
					{
						Cheat.ExecuteCommand("say_team " + messages[Math.floor(Math.random() * messages.length)]);
					} else if(IsMultiComboSelected(trashtalk_type, "Radio commands"))
					{
						var voice_cmds = 
						[
							"coverme", "takepoint", "holdpos", "followme", "regroup", "takingfire", "go", "fallback", "sticktog", "stormfront", 
							"cheer", "compliment", "thanks", "roger", "enemyspot", "needbackup", "sectorclear", "inposition", "negative", "report", 
							"getout", "enemydown", "go_a", "go_b", "needrop"
						]
						if(Globals.Tickcount() - last_spam > 32)
						{
							Cheat.ExecuteCommand(voice_cmds[Math.floor(Math.random() * voice_cmds.length)]);
							last_spam = Globals.Tickcount();
						}
					}
				}  
			}
		}
		
		/*
			var x, y, w, h;
			x = UI.GetMenuPosition()[0];
			y = UI.GetMenuPosition()[1]- 30;
			w = UI.GetMenuPosition()[2]/2;
			h = 5;
			
			var font = Render.AddFont( "ariblk.ttf", 20, 800 )
			
			Render.String(x, y, 0, "onetap+", GetFadeRGBOffset(0.5, 255, 0), font )
			
			Render.GradientRect(x, y, w, h, 1, GetFadeRGBOffset(0.5, 255, 0), GetFadeRGBOffset(0.5, 255, 5000));
			Render.GradientRect(x+w, y, w, h, 1, GetFadeRGBOffset(0.5, 255, 5000), GetFadeRGBOffset(0.5, 255, 10000));
		*/
	
		if (!Entity.GetLocalPlayer()) 
			return;
		// Visuals
		
		// Velocity graph
		if(CanModify(visuals, "Velocity graph")) {
			if(UI.GetValue(velocity_graph))
			{
			
				const player = Entity.GetLocalPlayer();

				if (!player || !Entity.IsAlive(player))
					return;

				const x = Render.GetScreenSize()[0], y = Render.GetScreenSize()[1] + UI.GetValue(velocity_graph_offset);

				const vec = Entity.GetProp(player, "CBasePlayer", "m_vecVelocity[0]");
				const velocity = Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
				const in_air = Entity.GetProp(player, "CBasePlayer", "m_fFlags") & 1 || Entity.GetProp(player, "CBasePlayer", "m_fFlags") & 17;

				Render.String(x / 2 + 1, y / 2 + 185, 1, Math.round(velocity).toString(), get_delta_color(last_delta), 2);
				
				if (Globals.Curtime() - last_log > Globals.TickInterval())
				{
					last_log = Globals.Curtime();

					velocity_data.unshift([velocity, in_air]);
				}

				if (velocity_data.length < 2) 
				{
					Render.String(x / 2, 120, 1, "CREATING CHART...", [200, 200, 200, Math.sin((Globals.Realtime() % 3) * 4) * (255 / 2 - 1) + 255 / 2], 12);
					return;
				}

				if (velocity_data.length > 40)
					velocity_data.pop();

				for (var i = 0; i < velocity_data.length - 1; i++)
				{
					const cur = velocity_data[i][0];
					const next = velocity_data[i + 1][0];
					const landed = velocity_data[i][1] && !velocity_data[i + 1][1];

					if (i === 0)
						last_delta = next - cur;

					for(var size = 0; size < UI.GetValue(velocity_graph_linesize); size++)
					{
						Render.Line(x / 2 + 180 - (i - 1) * 10, y / 2 + 130 - (clamp(cur, 0, 450) * 75 / 320) + size, x / 2 + 180 - i * 10, y / 2 + 130 - (clamp(next, 0, 450) * 75 / 320) + size, UI.GetColor(velocity_graph_color));					
						Render.Line(x / 2 + 180 - (i - 1) * 10 + size, y / 2 + 130 - (clamp(cur, 0, 450) * 75 / 320), x / 2 + 180 - i * 10 + size, y / 2 + 130 - (clamp(next, 0, 450) * 75 / 320), UI.GetColor(velocity_graph_color));					
					}
					
					Render.Line(x / 2 + 180 - (i - 1) * 10, y / 2 + 130 - (clamp(cur, 0, 450) * 75 / 320) + UI.GetValue(velocity_graph_linesize)+2, x / 2 + 180 - i * 10, y / 2 + 130 - (clamp(next, 0, 450) * 75 / 320) + UI.GetValue(velocity_graph_linesize)+2, [0, 0, 0, 200]);					
						
					if (landed)
					{ 
						Render.String(x / 2 + 200 - (i + 1) * 10, y / 2 + 115 - (clamp(next, 0, 450) * 75 / 320), 0, Math.round(next).toString(), [255, 28, 28, 255], 3);
					}
				}
			}    
		}
		
		// Indicators
		
		if(CanModify(misc, "Indicators"))
		{
	
			function mix(a, b, v)
			{
				return (1-v)*a + v*b;
			}

			function HSVtoRGB(H, S, V)
			{
				var V2 = V * (1 - S);
				var r  = ((H>=0 && H<=60) || (H>=300 && H<=360)) ? V : ((H>=120 && H<=240) ? V2 : ((H>=60 && H<=120) ? mix(V,V2,(H-60)/60) : ((H>=240 && H<=300) ? mix(V2,V,(H-240)/60) : 0)));
				var g  = (H>=60 && H<=180) ? V : ((H>=240 && H<=360) ? V2 : ((H>=0 && H<=60) ? mix(V2,V,H/60) : ((H>=180 && H<=240) ? mix(V,V2,(H-180)/60) : 0)));
				var b  = (H>=0 && H<=120) ? V2 : ((H>=180 && H<=300) ? V : ((H>=120 && H<=180) ? mix(V2,V,(H-120)/60) : ((H>=300 && H<=360) ? mix(V,V2,(H-300)/60) : 0)));

				return [ Math.round(r * 255), Math.round(g * 255),  Math.round(b * 255), 255 ];
			}
						
			function GetAmountColor(val, max)
			{
				var h = (val/max * 100) * 90 / 360// hue
				var s = 1; // sat
				var l = 1; // bright
				if(h > 90) h = 90;
				return HSVtoRGB(h, s, l);
			}
			
			function DrawIndicator(text, color)
			{
				color[3] = 200;
				Render.String(offset_left + 2, screen_size[1] - (offset_size*ind_offset) - offset_bottom + 3, 0, text, [ 0, 0, 0, 200 ], indicator_font);				
				Render.String(offset_left, screen_size[1] - (offset_size*ind_offset) - offset_bottom, 0, text, color, indicator_font);
				ind_offset++;
			}
			
			if(!indicator_font)
			{
				indicator_font = Render.AddFont( "ariblk.ttf", 30, 900 )
			}
			
			const ind_offset = 0;
			const screen_size = Render.GetScreenSize();
			const offset_left = 10;
			const offset_bottom = 90;
			const offset_size = 30;
			if(World.GetServerString())
			{

				// PING indicator
				if(UI.GetValue(indicator_ping))
				{    
					var difference = Math.abs(Local.Latency() * 1000 - 20);
					DrawIndicator("PING", GetAmountColor(difference, 60))
				}

				// LC indicator				
				if(UI.GetValue(indicator_lagcomp))
				{
					function length2DSqr(d)
					{
						return (d[0]*d[0] + d[1]*d[1]);
					}
					
										
					if(lc_lastdelta)
					{
						var delta = length2DSqr(Entity.GetRenderOrigin(Entity.GetLocalPlayer())+lc_lastdelta);
						if(delta > 64 *64)
						{
							DrawIndicator("LC", [252, 3, 3, 255])
						}
					}
					
					lc_lastdelta = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
					
				}
			
				// DUCK indicator
				if(UI.GetValue(indicator_fakeduck))
				{
					if(UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]))
						DrawIndicator("DUCK", [107, 252, 3, 255]);
					
				}
				
				// FPS indicator
				if(UI.GetValue(indicator_lagfps))
				{
					var fps = Math.round(1 / Globals.Frametime());
					var difference = Math.abs(120 - fps);
					
					if(lastFPSTick > 500 / fps)
					{
						lastFPS = fps;
						lastFPSTick = 0;
					} else lastFPSTick++;
					
					DrawIndicator("FPS "+ lastFPS, GetAmountColor(difference, 60));
					
				}
				
				// FAKE indicator
				if(UI.GetValue(indicator_fake))
				{
					var difference = Math.abs(Local.GetRealYaw() - Local.GetFakeYaw());
					DrawIndicator("FAKE", GetAmountColor(difference, 60))
				}
			}
			
			
		}
		
		if(IsMultiComboSelected(main, "On") && UI.GetValue(watermark))
		{
			var font = Render.AddFont( "ariblk.ttf", 20, 800 )
			if(World.GetServerString())
			{
				Render.String(Render.GetScreenSize()[0] / 2 + 2, 60 + 2, 1, "onetap+", [0, 0, 0, 100], font)
				Render.String(Render.GetScreenSize()[0] / 2, 60, 1, "onetap+", GetFadeRGB(0.5, 100), font)
			} else {
				Render.String(7 + 2, 2 + 2, 0, "onetap+", [0, 0, 0, 100], font)
				Render.String(7, 2, 0, "onetap+", GetFadeRGB(0.5, 100), font)
			}
		}
		
		//Tint
		if(CanModify(visuals, "Enable Tint"))
		{			
			var tint = UI.GetValue(tint_tint);
			Render.FilledRect( 0, 0, Render.GetScreenSize()[0], Render.GetScreenSize()[1], [tint, 0, 255 - tint, UI.GetValue(tint_intensity)]);
		}
		
		// Aspect ratio
		if(CanModify(visuals, "Aspect ratio"))
		{
			var value = UI.GetValue(vis_aspectratio);
			var current = Convar.GetString("r_aspectratio");

			if(current == value) return;
			Convar.SetString("r_aspectratio", value);
		} else {
			Convar.SetString("r_aspectratio", aspectratio);
		}
		
		//Fog
		if(CanModify(visuals, "Enable Fog"))
		{

			if (Convar.GetString("fog_override") !== "1")
				Convar.SetString("fog_override", "1");
			
			var clr = UI.GetColor(fog_color);
			var clr_value = clr[0] + " " + clr[1] + " " + clr[2];

			var dist = UI.GetString(fog_distance);
			var dens = (UI.GetValue(fog_density) / 100).toString();

			if (Convar.GetString("fog_color") != clr_value)
				Convar.SetString("fog_color", clr_value);

			if (Convar.GetString("fog_end") != dist)
			{
				Convar.SetString("fog_start", "0");
				Convar.SetString("fog_end", dist);
			}

			if (Convar.GetString("fog_maxdensity") !== dens)
				Convar.SetString("fog_maxdensity", dens);

		} else {
			if(Convar.GetString("fog_override") != "0")
				Convar.SetString("fog_override", "0");
		}

		// Bloom, ambient
		var entities = Entity.GetEntities();
		for (var i = 0; i < entities.length; i++) {
			var entity = entities[i];
			var name = Entity.GetClassName(entity);		
			if (name !== "CEnvTonemapController") 
				continue;

			if (!propsLoaded) {
				Entity.SetProp(entity, "CEnvTonemapController", "m_bUseCustomBloomScale", true);

				propsLoaded = true;
			}

			Entity.SetProp(entity, "CEnvTonemapController", "m_flCustomBloomScale",  CanModify(visuals, "Bloom") ? UI.GetValue(ent_bloom)/ 10 : 0);
			Convar.SetFloat("r_modelAmbientMin", CanModify(visuals, "Model ambient") ? UI.GetValue(ent_ambient) / 10 : 0);

		}
	
	}

	OnUnload = function()
	{
		unloading = true;
		OnCreateMove()
		reset()
	}
	
	
})();

function reset()
{
    // Reset all data in order to not glitch out.
    last_log = Globals.Curtime();
    velocity_data = [];
}

if(loadEvents)
{
	Cheat.RegisterCallback("Unload", "OnUnload");
	Cheat.RegisterCallback("CreateMove", "OnCreateMove");
	Cheat.RegisterCallback("Draw", "OnDraw");
	Cheat.RegisterCallback("Draw", "OnRender");
	Cheat.RegisterCallback("vote_options", "OnVoteOptions");
	Cheat.RegisterCallback("vote_cast", "OnVoteCast");
	Cheat.RegisterCallback("start_vote", "OnVoteStarted");
	Cheat.RegisterCallback("player_connect_full", "reset");
	Cheat.RegisterCallback("cs_match_end_restart", "OnMatchEnd");
	
	UI.RegisterCallback(rank, "UpdateRank");
	UI.RegisterCallback(coin, "UpdateInventory");
	UI.RegisterCallback(music, "UpdateInventory");
	UI.RegisterCallback(level, "UpdateLevel");
	//UI.RegisterCallback(change_skin, "SendFakeCaseOpening");
	
}

// https://www.onetap.com/threads/onetap-ultimate-free-all-in-one-javascript.34850/
