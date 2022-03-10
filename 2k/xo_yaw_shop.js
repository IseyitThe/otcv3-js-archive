/* is grenade? */
function is_gren(name) {
	if(name == "high explosive grenade") {
		return true
	} else if(name == "incendiary grenade") {
		return true
	} else if(name == "molotov") {
		return true
	} else if(name == "flashbang") {
		return true
	} else if(name == "smoke grenade") {
		return true
	}
	return false
}
/* array of states */
var states = {
		"beta": "[beta]",
		"debug": "[dbg]"
	}
	/* math random */
Math.RandomInt = function(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	/* distance */
distanceflag = function(origin, destination) {
		const sub = [destination[0] - origin[0], destination[1] - origin[1], destination[2] - origin[2]];
		return Math.hypot(sub[0], sub[1], sub[2]);
	}
	/* calc distance */
function calcDist(local, target) {
	var lx = local[0];
	var ly = local[1];
	var lz = local[2];
	var tx = target[0];
	var ty = target[1];
	var tz = target[2];
	var dx = lx - tx;
	var dy = ly - ty;
	var dz = lz - tz;
	return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
/* outline */
function draw_shadow(x, y, int, text, outline_color, font) {
	Render.String(x + 1, y + 1, int, text, outline_color, font);
	Render.String(x, y + 1, int, text, outline_color, font);
	Render.String(x + 1, y, int, text, outline_color, font);
	Render.String(x - 1, y - 1, int, text, outline_color, font);
	Render.String(x - 1, y, int, text, outline_color, font);
	Render.String(x, y - 1, int, text, outline_color, font);
	Render.String(x + 1, y - 1, int, text, outline_color, font);
	Render.String(x - 1, y + 1, int, text, outline_color, font);
}
/* inair */
var Inair = function() {
		if(!(Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_fFlags") & (1 << 0))) {
			return true;
		} else {
			return false;
		}
	}
	/* outline / arc */
function render_arc(x, y, radius, radius_inner, start_angle, end_angle, segments, color) {
	while(360 % segments != 0) {
		segments++;
	}
	segments = 360 / segments;
	for(var i = start_angle; i < start_angle + end_angle; i = i + segments) {
		var rad = i * Math.PI / 180;
		var rad2 = (i + segments) * Math.PI / 180;
		var rad_cos = Math.cos(rad);
		var rad_sin = Math.sin(rad);
		var rad2_cos = Math.cos(rad2);
		var rad2_sin = Math.sin(rad2);
		var x1_outer = x + rad_cos * radius;
		var y1_outer = y + rad_sin * radius;
		var x2_outer = x + rad2_cos * radius;
		var y2_outer = y + rad2_sin * radius;
		var x1_inner = x + rad_cos * radius_inner;
		var y1_inner = y + rad_sin * radius_inner;
		var x2_inner = x + rad2_cos * radius_inner;
		var y2_inner = y + rad2_sin * radius_inner;
		Render.Polygon([
			[x1_outer, y1_outer],
			[x2_outer, y2_outer],
			[x1_inner, y1_inner]
		], color);
		Render.Polygon([
			[x1_inner, y1_inner],
			[x2_outer, y2_outer],
			[x2_inner, y2_inner]
		], color);
	}
}
Render.OutlineCircle = function(x, y, what, col) {
		render_arc(x, y, 9, 4, 0, 360, 32, [0, 0, 0, 255])
		render_arc(x, y, 8, 5, 0, what * 360, 32, col)
	}
	/* get velocity */
function getVelocity(index) {
	players = Entity.GetPlayers();
	for(i = 0; i < players.length; i++); {
		var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
		var speed = Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
	}
	return speed;
}
/* getdropdownvalue */
function getDropdownValue(value, index) {
	var mask = 1 << index;
	return value & mask ? true : false;
}
/* tickbase */
function can_shift_shot(ticks_to_shift) {
	var me = Entity.GetLocalPlayer();
	var wpn = Entity.GetWeapon(me);
	if(me == null || wpn == null) return false;
	var tickbase = Entity.GetProp(me, "CCSPlayer", "m_nTickBase");
	var curtime = Globals.TickInterval() * (tickbase - ticks_to_shift)
	if(curtime < Entity.GetProp(me, "CCSPlayer", "m_flNextAttack")) return false;
	if(curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack")) return false;
	return true;
}
/* dormant function */
function dormant() {
	enemies = Entity.GetEnemies()
	for(var i in enemies)
		if(Entity.IsDormant(enemies[i])) {
			return true
		}
	return false
}
/* weapons */
var weaponTabNames = {"usp s": "USP", "glock 18": "Glock", "dual berettas": "Dualies", "r8 revolver": "Revolver", "desert eagle": "Deagle", "p250": "P250", "tec 9": "Tec-9", "mp9": "MP9", "mac 10": "Mac10", "pp bizon": "PP-Bizon", "ump 45": "UMP45", "ak 47": "AK47", "sg 553": "SG553", "aug": "AUG", "m4a1 s": "M4A1-S", "m4a4": "M4A4", "ssg 08": "SSG08", "awp": "AWP", "g3sg1": "G3SG1", "scar 20": "SCAR20", "xm1014": "XM1014", "mag 7": "MAG7", "m249": "M249", "negev": "Negev", "p2000": "P2000", "famas": "FAMAS", "five seven": "Five Seven", "mp7": "MP7", "ump 45": "UMP45", "p90": "P90", "cz75 auto": "CZ-75", "mp5 sd": "MP5", "galil ar": "GALIL", "sawed off": "Sawed off", }
var other_weapons = ["knife", "knife_t", "knife_karambit", "knife_m9_bayonet", "knife_survival_bowie", "knife_butterfly", "knife_flip", "knife_push", "knife_tactical", "knife_falchion", "knife_gut", "knife_ursus", "knife_gypsy_jackknife", "knife_stiletto", "knife_widowmaker", "knife_css", "knife_cord", "knife_canis", "knife_outdoor", "knife_skeleton", "bayonet", "hegrenade", "smokegrenade", "molotov", "incgrenade", "flashbang", "decoy", "taser"]

function in_bounds(vec, x, y, x2, y2) {
	return(vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}
/* c4 */
function getSite(c4) {
	bombsite = Entity.GetProp(c4, "CPlantedC4", "m_nBombSite");
	if(bombsite == 0) {
		return "A - ";
	} else {
		return "B - ";
	}
}

function bomb_exploded() {
	isbomb = 0
	on_plant_time = 0
	fill = 0
	planting = false
}
function autobuy(){
    if(UI.GetValue(["Rage", "XO-YAW", "XO-YAW", "AWP Fast Buy"])){
        Cheat.ExecuteCommand("buy awp;buy awp;buy awp;buy awp;buy awp;buy awp;buy awp;")
    }
}
function bomb_beginplant() {
	on_plant_time = Globals.Curtime()
	bombsite = Event.GetInt("site")
	world = World.GetMapName()
	if(world == "de_mirage") {
		if(bombsite == 447) {
			bombsiteonplant = "Bombsite B"
		} else {
			bombsiteonplant = "Bombsite A"
		}
	}
	if(world == 'de_dust2') {
		if(bombsite == 366) {
			bombsiteonplant = "Bombsite A"
		} else {
			bombsiteonplant = "Bombsite B"
		}
	};
	if(world == 'de_dust2_old') {
		if(bombsite == 366) {
			bombsiteonplant = "Bombsite A"
		} else {
			bombsiteonplant = "Bombsite B"
		}
	};
	if(world == 'de_dust2_old_1') {
		if(bombsite == 366) {
			bombsiteonplant = "Bombsite A"
		} else {
			bombsiteonplant = "Bombsite B"
		}
	};
	if(world == 'de_dust2_old_ht') {
		if(bombsite == 366) {
			bombsiteonplant = "Bombsite A"
		} else {
			bombsiteonplant = "Bombsite B"
		}
	};
	if(world == 'de_vertigo') {
		if(bombsite == 79) {
			bombsiteonplant = "Bombsite A"
		} else {
			bombsiteonplant = "Bombsite B"
		}
	};
	if(world == 'de_overpass') {
		if(bombsite == 85) {
			bombsiteonplant = "Bombsite A"
		} else {
			bombsiteonplant = "Bombsite B"
		}
	};
	if(world == 'de_inferno') {
		if(bombsite == 370) {
			bombsiteonplant = "Bombsite A"
		} else {
			bombsiteonplant = "Bombsite B"
		}
	};
	if(world == 'gd_rialto') {
		bombsiteonplant = "Bombsite A"
	};
	if(world == 'de_cbble') {
		if(bombsite == 216) {
			bombsiteonplant = "Bombsite A"
		} else {
			bombsiteonplant = "Bombsite B"
		}
	};
	if(world == 'de_tulip') {
		if(bombsite == 620) {
			bombsiteonplant = "Bombsite A"
		} else {
			bombsiteonplant = "Bombsite B"
		}
	};
	if(world == 'de_tulip_ht') {
		if(bombsite == 620) {
			bombsiteonplant = "Bombsite A"
		} else {
			bombsiteonplant = "Bombsite B"
		}
	};
	planting = true
}

function bomb_abortplant() {
	on_plant_time = 0
	fill = 0
	planting = false
}

function bomb_defused() {
	on_plant_time = 0
	fill = 0
	planting = false
}

function bomb_planted() {
	on_plant_time = 0
	fill = 0
	planting = false
}

function on_round_start() {
	on_plant_time = 0
	fill = 0
	planting = false
	curtick = Globals.Tickcount()
}
/* ui */
UI.AddSubTab(["Rage", "SUBTAB_MGR"], "XO-YAW");
UI.AddDropdown(["Rage", "XO-YAW", "XO-YAW"], "Tab", ["Rage & AA", "Visual", "Misc"], 0)
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "Watermark")
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "Arrows")
UI.AddMultiDropdown(["Rage", "XO-YAW", "XO-YAW"], "Additional Flags", ["R8 Lethal", "Zeus"])
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "Tag [Glass of xo]")
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "Advanced shot logger")
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "AWP Fast Buy")
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "Blend While Grenade")
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "Keybinds")
UI.AddSliderInt(["Rage", "XO-YAW", "XO-YAW"], "k_x", 0, Render.GetScreenSize()[0])
UI.AddSliderInt(["Rage", "XO-YAW", "XO-YAW"], "k_y", 0, Render.GetScreenSize()[1])
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "Desync Circle")
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "Indicators")
UI.AddMultiDropdown(["Rage", "XO-YAW", "XO-YAW"], "Indicators Style", ["Cross", "Old Skeet", "Cross #2", "Taco", "Cross #3", "Cross #4", "Ideal Yaw", "AntiAim & Indication v3", "Skeet", "omskcord"])
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "Advanced Double-Tap")
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "Advanced Fake-Lag")
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "Manual Anti-Aim")
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "Fakelag Indicator")
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "Advanced Anti-Aim")
UI.AddMultiDropdown(["Rage", "XO-YAW", "XO-YAW"], "Anti-Aim Conditions", ["On Slow Walk", "On Dormant", "On Air", "On Duck", "On Move"])
UI.AddCheckbox(["Rage", "XO-YAW", "XO-YAW"], "Leg Fucker")
UI.AddHotkey(["Config", "Scripts", "JS Keybinds"], "Damage Override", "Damage Override")
UI.AddHotkey(["Config", "Scripts", "JS Keybinds"], "Hitchance Override", "Hitchance Override")
UI.AddHotkey(["Config", "Scripts", "JS Keybinds"], "Legit AA", "Legit AA")
UI.AddHotkey(["Config", "Scripts", "JS Keybinds"], "Left key", "")
UI.AddHotkey(["Config", "Scripts", "JS Keybinds"], "Back key", "")
UI.AddHotkey(["Config", "Scripts", "JS Keybinds"], "Right key", "")
UI.AddHotkey(["Config", "Scripts", "JS Keybinds"], "Forward Key", "")
UI.AddHotkey(["Config", "Scripts", "JS Keybinds"], "Ping Spike", "Ping Spike")
UI.AddHotkey(["Config", "Scripts", "JS Keybinds"], "Freestanding", "Freestanding")
UI.AddColorPicker(["Rage", "XO-YAW", "XO-YAW"], "Desync Circle Color")
UI.AddColorPicker(["Rage", "XO-YAW", "XO-YAW"], "Arrows Color")
UI.AddColorPicker(["Rage", "XO-YAW", "XO-YAW"], "Selected Arrows Color")
UI.AddColorPicker(["Rage", "XO-YAW", "XO-YAW"], "Accent Color");
UI.AddSliderFloat(["Rage", "XO-YAW", "XO-YAW"], "Aspect ratio", 0.0, 5.0)
UI.AddSliderInt(["Rage", "XO-YAW", "XO-YAW"], "ThirdPerson Dist", 50, 150)
UI.AddSliderInt(["Rage", "Accuracy", "General"], "Hitchance Override", 0, 100)
UI.AddSliderInt(["Rage", "Target", "General"], "Damage Override", 0, 130)
for(var name in weaponTabNames) {
	UI.AddSliderInt(["Rage", "Target", weaponTabNames[name]], "Damage Override", 0, 130)
	UI.AddSliderInt(["Rage", "Accuracy", weaponTabNames[name]], "Hitchance Override", 1, 100)
}
var weap_rev = (Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF) == 64
var username = Cheat.GetUsername()
var screen_size = Global.GetScreenSize()
var lp = Entity.GetLocalPlayer()
var velocity = Math.round(getVelocity(lp)).toString()
var weaponName = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
var oldTick = 0
var lastPressed = 0
var curtick = 0
var h = [];
var drawLeft = 0
var drawHideReal = 1
var drawRight = 0
var drawBack = 0
var leftWasPressed = 0
var rightWasPressed = 0
var backWasPressed = 0
var upWasPressed = 0
var isHideRealActive = 0
var altfakelag = 0
var cur_dmg = 0
var cur_hit = 0
var anim = 10 * Math.abs(Math.sin(64 * Globals.Realtime()))
var antiaim_state = "default"
var weapon = ""
var recharge = 0
var r8dt = false
var legitaa_time = Global.Realtime()
var E = true
var defuse = false
var distance = 0
var distance1 = 0
var original_aa = true
var planting = false
var fill = 0
var isbomb = 0
var bombsiteonplant = ""
var on_plant_time
	/* PATHES ARRAY */
pathes = []
var lasttime = 0
function get_all_keys() {
	ragekeysgeneral = UI.GetChildren(["Rage", "General", "SHEET_MGR", "General", "Key assignment"])
	ragekeysexploits = UI.GetChildren(["Rage", "Exploits", "SHEET_MGR", "Keys", "Key assignment"])
	ragekeysantiaim = UI.GetChildren(["Rage", "Anti Aim", "SHEET_MGR", "General", "Key assignment"])
	miskkeys = UI.GetChildren(["Misc.", "Keys", "SHEET_MGR", "General", "Key assignment"])
    scriptkeys = UI.GetChildren(["Config", "Scripts", "Keys", "JS Keybinds", ])
	for(p in ragekeysgeneral) {
		pathes.push([
			["Rage", "General", "SHEET_MGR", "General", "Key assignment", ragekeysgeneral[p]], ragekeysgeneral[p]
		])
	}
	for(o in ragekeysexploits) {
		pathes.push([
			["Rage", "Exploits", "SHEET_MGR", "Keys", "Key assignment", ragekeysexploits[o]], ragekeysexploits[o]
		])
	}
	for(r in ragekeysantiaim) {
		pathes.push([
			["Rage", "Anti Aim", "SHEET_MGR", "General", "Key assignment", ragekeysantiaim[r]], ragekeysantiaim[r]
		])
	}
	for(n in miskkeys) {
		pathes.push([
			["Misc.", "Keys", "SHEET_MGR", "General", "Key assignment", miskkeys[n]], miskkeys[n]
		])
	}
    for(z in scriptkeys) {
		pathes.push([
			["Config", "Scripts", "Keys", "JS Keybinds", scriptkeys[z]], scriptkeys[z]
		])
	}
}
/* On start */
get_all_keys()
/* shadow */
Render.Strings = function(x, y, align, txt, col, font){
    Render.String(x, y + 1, align, txt, [0, 0, 0, 255], font);
    Render.String(x, y, align, txt, col, font);
}
	/* Keybinds main function */
function keybinds() {
	if(!UI.GetValue(["Rage", "XO-YAW", "XO-YAW", "Keybinds"]) || !Entity.IsAlive(Entity.GetLocalPlayer()) || World.GetServerString() == "" || pathes.length == 0) return;
    font_keys = Render.GetFont("verdana.ttf", 10, true)
	/* Translate ui name to render text */
	const ui_to_type = {
		"Always": "[~]",
		"Hold": "[holding]",
		"Toggle": "[toggled]"
	}
	var keys = []
	for(var i in pathes) {
		active = UI.GetValue(pathes[i][0])
		if(!active) continue;
		type = ui_to_type[UI.GetHotkeyState(pathes[i][0])]
        if(type == "[~]") continue;
		text = pathes[i][1]
		keys.push({
			"text": text,
			"type": type
		})
	}
    const x = UI.GetValue(["Rage", "XO-YAW", "XO-YAW", "k_x"]), y = UI.GetValue(["Rage", "XO-YAW", "XO-YAW", "k_y"])
	if(keys.length == 0 && !UI.IsMenuOpen()) return;
    var max_size = 25
    for(var b in keys){
        if(Render.TextSize(keys[b].text, font_keys)[0] > max_size){
            max_size = Render.TextSize(keys[b].text, font_keys)[0]
        }
    }
	for(var i in keys) {
		bind = keys[i]
		data = {
			"a": bind.text,
            "b": bind.type,
            "c": Render.TextSize(bind.text, font_keys)
		}
        Render.Strings(x + 2, y + 5 + 15*i, 0, data.a, [255, 255, 255, 255], font_keys);
        Render.Strings(x + 2 + max_size + 10, y + 5 + 15*i, 0, data.b, [255, 255, 255, 255], font_keys);
	}
    w_ = 60 + max_size
    Render.FilledRect(x + 5, y - 15, w_ - 10, 18, UI.GetColor(["Rage", "XO-YAW", "XO-YAW", "Accent Color"]))
    render_arc(x + 5, y - 6.5, 9, 0, 90, 180, 32, UI.GetColor(["Rage", "XO-YAW", "XO-YAW", "Accent Color"]))
    render_arc(x + 4 + w_ - 10, y - 6.5, 9, 0, 270, 180, 32, UI.GetColor(["Rage", "XO-YAW", "XO-YAW", "Accent Color"]))
    Render.Strings(x + w_ / 2, y - 14, 1, "hotkeys", [255, 255, 255, 255], font_keys);
	/* For dragging */
    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const mouse_pos = Input.GetCursorPosition();
        if (in_bounds(mouse_pos, x, y - 20, x + w_, y + 20)) {
            UI.SetValue(["Rage", "XO-YAW", "XO-YAW", "k_x"], mouse_pos[0] - w_ / 2);
            UI.SetValue(["Rage", "XO-YAW", "XO-YAW", "k_y"], mouse_pos[1]);
        }
    }
}
/* dt */
function doubletap() {
	if(UI.GetValue(["Rage", "XO-YAW", "Advanced Double-Tap"])) {
		var exploitCharge = Exploit.GetCharge();
		Exploit[(1 != exploitCharge ? "Enable" : "Disable") + "Recharge"](), Exploit.OverrideMaxProcessTicks(19		), Exploit.OverrideShift(19)
		Exploit.OverrideTolerance(0), can_shift_shot(12) && 1 != exploitCharge && (Exploit.DisableRecharge(), Exploit.Recharge())
	} else {
		Exploit.EnableRecharge(), Exploit.OverrideShift(12), Exploit.OverrideTolerance(3)
	}
	if(weap_rev) {
		if(r8dt && recharge + 20 == Globals.Tickcount()) {
			UI.ToggleHotkey(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"])
			r8dt = false
		}
	}
}

function on_wpn_fire() {
	if((Entity.GetEntityFromUserID(Event.GetInt("userid")) != Entity.GetLocalPlayer()) || !weap_rev) return;
	recharge = Globals.Tickcount();
	if(UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"])) {
		UI.ToggleHotkey(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"])
		r8dt = true;
	}
}

function doubletapunload() {
	Exploit.EnableRecharge(), Exploit.OverrideShift(16), Exploit.OverrideTolerance(0)
}
/* damage/hitchance override */
function dmghcoverride() {
	var target = Entity.GetEnemies()
	var weaponName = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
	if(!Entity.IsAlive(Entity.GetLocalPlayer())) return;
	if(!weaponTabNames.hasOwnProperty(weaponName)) {
		return;
	}
	var isDamageOverride = UI.GetValue(["Config", "Scripts", "JS Keybinds", "Damage Override"]) ? true : false
	var isHitchanceOverride = UI.GetValue(["Config", "Scripts", "JS Keybinds", "Hitchance Override"]) ? true : false
	for(var i in target) {
		if(isDamageOverride) {
			if(UI.GetValue(["Rage", "Target", weaponTabNames[weaponName], "Damage Override"]) != 0) {
				Ragebot.ForceTargetMinimumDamage(target[i], UI.GetValue(["Rage", "Target", weaponTabNames[weaponName], "Damage Override"]))
			} else {
				Ragebot.ForceTargetMinimumDamage(target[i], UI.GetValue(["Rage", "Target", "General", "Damage Override"]))
			}
		}
		if(isHitchanceOverride) {
			if(UI.GetValue(["Rage", "Accuracy", weaponTabNames[weaponName], "Hitchance Override"]) != 0) {
				Ragebot.ForceTargetHitchance(target[i], UI.GetValue(["Rage", "Accuracy", weaponTabNames[weaponName], "Hitchance Override"]))
			} else {
				Ragebot.ForceTargetHitchance(target[i], UI.GetValue(["Rage", "Accuracy", "General", "Hitchance Override"]))
			}
		}
	}
}
/* UI Status controller */
function on_menu_changes() {
	var type = UI.GetValue(["Rage", "XO-YAW", "XO-YAW", "Tab"])
	var is_rage = type == 0 ? 1 : 0,
		is_vis = type == 1 ? 1 : 0,
		is_misc = type == 2 ? 1 : 0
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Watermark"], is_vis)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Arrows"], is_vis)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Blend While Grenade"], is_misc)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Keybinds"], is_vis)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Keybinds"], 0)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Indicators"], is_vis)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Indicators Style"], is_vis == 1 && UI.GetValue(["Rage", "XO-YAW", "Indicators"]) ? 1 : 0)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Fakelag Indicator"], is_vis == 1 && getDropdownValue(UI.GetValue(["Rage", "XO-YAW", "Indicators Style"]), 8) ? 1 : 0)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Advanced Anti-Aim"], is_rage)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Anti-Aim Conditions"], is_rage == 1 && UI.GetValue(["Rage", "XO-YAW", "Advanced Anti-Aim"]) ? 1 : 0)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Advanced Fake-Lag"], is_rage)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Advanced Double-Tap"], is_rage)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Manual Anti-Aim"], is_rage)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Leg Fucker"], is_misc)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Arrows Color"], is_vis == 1 && UI.GetValue(["Rage", "XO-YAW", "Arrows"]) ? 1 : 0)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Selected Arrows Color"], is_vis == 1 && UI.GetValue(["Rage", "XO-YAW", "Arrows"]) ? 1 : 0)
    UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Keybinds"], is_vis);
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Accent Color"], is_vis == 1 &&( UI.GetValue(["Rage", "XO-YAW", "Keybinds"]) || UI.GetValue(["Rage", "XO-YAW", "Watermark"]))? 1 : 0);
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Aspect ratio"], is_misc)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Advanced shot logger"], is_misc)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "ThirdPerson Dist"], is_misc)
    UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "AWP Fast Buy"], is_misc)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Desync Circle"], is_vis)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Desync Circle Color"], is_vis == 1 && UI.GetValue(["Rage", "XO-YAW", "Desync Circle"]) ? 1 : 0)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Additional Flags"], is_misc)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "Tag [Glass of xo]"], is_misc)
		/* Keybinds */
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "k_x"], 0)
	UI.SetEnabled(["Rage", "XO-YAW", "XO-YAW", "k_y"], 0)
}
/* misc functions */
function misc() {
	var weaponName = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
	cur_dmg = weaponTabNames[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] != undefined ? UI.GetValue(["Rage", "Target", weaponTabNames[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))], "Damage Override"]) : UI.GetValue(["Rage", "Target", "General", "Damage Override"])
	cur_hit = weaponTabNames[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] != undefined ? UI.GetValue(["Rage", "Accuracy", weaponTabNames[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))], "Hitchance Override"]) : UI.GetValue(["Rage", "Accuracy", "General", "Hitchance Override"])
	var fl = function(fl1, fl2) {
		return fl1 < fl2
	}
	if(UI.GetValue(["Rage", "XO-YAW", "Advanced Fake-Lag"])) {
		fl(altfakelag, 15 - 1) ? (UserCMD.Choke(), altfakelag++) : altfakelag < 14 + 8 ? (UserCMD.Send(), altfakelag++) : altfakelag = 0;
	}
	var valueas = UI.GetValue(["Rage", "XO-YAW", "Aspect ratio"]).toString(); {
		Convar.SetString("r_aspectratio", valueas);
	}
	UI.SetValue(["Misc.", "View", "General", "Thirdperson Distance"], UI.GetValue(["Rage", "XO-YAW", "XO-YAW", "ThirdPerson Dist"]))
	if(UI.GetValue(["Config", "Scripts", "JS Keybinds", "Ping Spike"])) {
		UI.SetValue(["Misc.", "Helpers", "General", "Extended backtracking"], 1)
	} else {
		UI.SetValue(["Misc.", "Helpers", "General", "Extended backtracking"], 0)
	}
	if(UI.GetValue(["Config", "Scripts", "JS Keybinds", "Freestanding"]) && !UI.GetValue(["Config", "Scripts", "JS Keybinds", "Legit AA"])) {
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Auto direction"], 1)
	} else {
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Auto direction"], 0)
	}
	if(UI.GetValue(["Rage", "XO-YAW", "Blend While Grenade"])) {
		if(is_gren(weaponName)) {
			if(a == 0){
				cache = {
					"a": UI.GetValue(["Visuals", "Chams", "Local", "Visible material type"]),
					"b": UI.GetValue(["Visuals", "Chams", "Local", "Visible material override"]),
					"c": UI.GetColor(["Visuals", "Chams", "Local", "Visible material color"])
				}
				a = 1
			}
			UI.SetValue(["Visuals", "Chams", "Local", "Visible material type"], 66)
			UI.SetValue(["Visuals", "Chams", "Local", "Visible material override"], 1)
			UI.SetColor(["Visuals", "Chams", "Local", "Visible material color"], [0, 0, 0, 100])
		} else {
			if(a == 1){
			UI.SetValue(["Visuals", "Chams", "Local", "Visible material type"], cache.a)
			UI.SetValue(["Visuals", "Chams", "Local", "Visible material override"], cache.b)
			UI.SetColor(["Visuals", "Chams", "Local", "Visible material color"], cache.c)
			a = 0
			}
		}
	}
	if(UI.GetValue(["Rage", "XO-YAW", "Tag [Glass of xo]"])){
		var time = parseInt((Globals.Curtime() * 2))
		if (time != lasttime)
		{
			switch((time) % 10)
			{
			case 1:{ Local.SetClanTag("Glass off xo"); break; }
			case 2:{ Local.SetClanTag("8l433 0ff x0"); break; }
			case 3:{ Local.SetClanTag("Gl4ss 0ff x0"); break; }
			case 4:{ Local.SetClanTag("8la3s off x0"); break; }
			case 5:{ Local.SetClanTag("8l433 0ff x0"); break; }
			case 6:{ Local.SetClanTag("Gl4ss 0ff x0"); break; }
			case 7:{ Local.SetClanTag("Gl4ss 0ff x0"); break; }
			case 8:{ Local.SetClanTag("8l433 0ff x0"); break; }
			case 9:{ Local.SetClanTag("Gl4ss 0ff x0"); break; }
			case 10:{ Local.SetClanTag("Glass off xo"); break; }
			}
		}
		lasttime = time;
	}
	UI.GetValue(["Rage", "XO-YAW", "Leg Fucker"]) && (anim = 10 * Math.abs(Math.sin(64 * Globals.Realtime())), anim > 5 && UI.SetValue(["Misc.", "Movement", "Leg movement"], 0), anim < 5 && UI.SetValue(["Misc.", "Movement", "Leg movement"], 1))
	flags = UI.GetValue(["Rage", "XO-YAW", "Additional Flags"])
	enemys = Entity.GetEnemies()
	if(enemys != "") {
		for(i = 0; i < enemys.length; i++) {
			if(!Entity.IsDormant(enemys[i])) {
				weap_rev = (Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF) == 64
				no_kev = Entity.GetProp(enemys[i], "CCSPlayerResource", "m_iArmor") == 0
				dist = distanceflag(Entity.GetRenderOrigin(Entity.GetLocalPlayer()), Entity.GetRenderOrigin(enemys[i]))
				good = distanceflag(Entity.GetRenderOrigin(Entity.GetLocalPlayer()), Entity.GetRenderOrigin(enemys[i])) <= 580
				if(good && weap_rev && no_kev && getDropdownValue(flags, 0)) {
					Entity.DrawFlag(enemys[i], dist < 511 ? "TAP+" : "TAP", [151, 164, 252, 255])
				}
				if(Entity.GetWeapons( enemys[i] ).indexOf("zeus") > -1 && getDropdownValue(flags, 1)){
					Entity.DrawFlag(enemys[i], "ZEUS", [151, 164, 252, 255])
				}
			}
		}
	}
}
var a = 0
/* antiaim options */
function antiaim() {
	antiaimEnabled = UI.GetValue(["Rage", "XO-YAW", "Anti-Aim Conditions"]);
	invertsp = Globals.Tickcount() % 4 >= 2 ? 22 : -22;
	random = Globals.Tickcount() % 3 >= 2 ? -35 : 20;
	inverted = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
	if(UI.GetValue(["Rage", "XO-YAW", "Advanced Anti-Aim"])) {
		if(getDropdownValue(antiaimEnabled, 0) && UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"])) {
			antiaim_state = "slowwalk"
			AntiAim.SetOverride(1);
			AntiAim.SetFakeOffset(7);
			AntiAim.SetRealOffset(-14);
			AntiAim.SetLBYOffset(0);
		} else {
			if(getDropdownValue(antiaimEnabled, 2) && (Inair()) && !inverted) {
				antiaim_state = "air"
				AntiAim.SetOverride(1);
				AntiAim.SetFakeOffset(0);
				AntiAim.SetRealOffset(-32);
				AntiAim.SetLBYOffset(0);
			} else if(getDropdownValue(antiaimEnabled, 2) && (Inair()) && inverted) {
				antiaim_state = "air"
				AntiAim.SetOverride(1);
				AntiAim.SetFakeOffset(22);
				AntiAim.SetRealOffset(-43);
				AntiAim.SetLBYOffset(0);
			} else if(getDropdownValue(antiaimEnabled, 3) && Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_flDuckAmount") > 0.8 && !inverted || getDropdownValue(antiaimEnabled, 3) && UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) && !inverted) {
				antiaim_state = "duck"
				AntiAim.SetOverride(1);
				AntiAim.SetFakeOffset(-20);
				AntiAim.SetRealOffset(30);
				AntiAim.SetLBYOffset(0);
			} else if(getDropdownValue(antiaimEnabled, 3) && Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_flDuckAmount") > 0.8 && inverted || getDropdownValue(antiaimEnabled, 3) && UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) && inverted) {
				antiaim_state = "duck"
				AntiAim.SetOverride(1);
				AntiAim.SetFakeOffset(-8);
				AntiAim.SetRealOffset(34);
				AntiAim.SetLBYOffset(0);
			} else if(getDropdownValue(antiaimEnabled, 1) && dormant() && original_aa) {
				AntiAim.SetOverride(1);
				AntiAim.SetRealOffset(invertsp);
				AntiAim.SetFakeOffset(0);
				AntiAim.SetLBYOffset(-invertsp)
			} else if(getDropdownValue(antiaimEnabled, 4) && velocity > 2 && !inverted) {
				antiaim_state = "normal"
				AntiAim.SetOverride(1);
				AntiAim.SetFakeOffset(0);
				AntiAim.SetRealOffset(-22);
				AntiAim.SetLBYOffset(0);
			} else if(getDropdownValue(antiaimEnabled, 4) && velocity > 2 && inverted) {
				antiaim_state = "normal"
				AntiAim.SetOverride(1);
				AntiAim.SetFakeOffset(22);
				AntiAim.SetRealOffset(-22);
				AntiAim.SetLBYOffset(0);
			} else {
				AntiAim.SetOverride(0)
			}
		}
	}
}
/* manuals */
function onCreateMove() {
	if(!UI.GetValue(["Rage", "XO-YAW", "XO-YAW", "Manual Anti-Aim"])) return;
	isLeftActive = UI.GetValue(["Config", "Scripts", "JS Keybinds", "Left key"]);
	isBackwardsActive = UI.GetValue(["Config", "Scripts", "JS Keybinds", "Back key"]);
	isRightActive = UI.GetValue(["Config", "Scripts", "JS Keybinds", "Right key"]);
	isForwardActive = UI.GetValue(["Config", "Scripts", "JS Keybinds", "Forward Key"]);
	if(isLeftActive && leftWasPressed == 0) {
		lastPressed = Global.Tickcount();
		isHideRealActive = 0;
		leftWasPressed = 1;
		backWasPressed = 0;
		rightWasPressed = 0;
		upWasPressed = 0;
		drawLeft = 1;
		drawBack = 0;
		drawRight = 0;
		drawHideReal = 0;
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], -90);
	} else if(isLeftActive && leftWasPressed == 1 && Global.Tickcount() > lastPressed + 16) {
		isHideRealActive = 1;
		oldTick = Global.Tickcount();
		drawHideReal = 1;
	}
	if(isRightActive && rightWasPressed == 0) {
		lastPressed = Global.Tickcount();
		isHideRealActive = 0;
		backWasPressed = 0;
		leftWasPressed = 0;
		rightWasPressed = 1;
		upWasPressed = 0;
		drawLeft = 0;
		drawBack = 0;
		drawRight = 1;
		drawHideReal = 0;
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 90);
	} else if(isRightActive && rightWasPressed == 1 && Global.Tickcount() > lastPressed + 16) {
		isHideRealActive = 1;
		oldTick = Global.Tickcount();
		drawHideReal = 1;
	}
	if(isBackwardsActive && backWasPressed == 0 && Global.Tickcount() > lastPressed + 16) {
		lastPressed = Global.Tickcount();
		isHideRealActive = 0;
		backWasPressed = 1;
		rightWasPressed = 0;
		leftWasPressed = 0;
		upWasPressed = 0;
		drawLeft = 0;
		drawHideReal = 0;
		drawBack = 1;
		drawRight = 0;
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 0);
	} else if(isBackwardsActive && backWasPressed == 1 && Global.Tickcount() > lastPressed + 16) {
		isHideRealActive = 1;
		oldTick = Global.Tickcount();
		drawHideReal = 1;
	}
	if(isForwardActive && upWasPressed == 0 && Global.Tickcount() > lastPressed + 16) {
		lastPressed = Global.Tickcount();
		isHideRealActive = 0;
		backWasPressed = 0;
		rightWasPressed = 0;
		drawHideReal = 0;
		leftWasPressed = 0;
		upWasPressed = 1;
		drawLeft = 0;
		drawBack = 0;
		drawRight = 0;
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 180);
	}
	if(isHideRealActive) {
		if(Global.Tickcount() > oldTick + 16) {
			backWasPressed = 0;
			rightWasPressed = 0;
			leftWasPressed = 0;
			upWasPressed = 0;
			oldTick = Global.Tickcount();
			drawHideReal = 1;
		}
		drawLeft = 0;
		drawBack = 0;
		drawRight = 0;
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 0);
	}
	UI.SetValue(["Rage", "Anti Aim", "Directions", "At targets"], isHideRealActive ? 1 : 0);
}
/* Invert arrows render */
function drawarrows() {
	if(UI.GetValue(["Rage", "XO-YAW", "Arrows"])) {
		var inverted = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])
		fontarrow = Render.GetFont("verdana.ttf", 21, true)
		arrows_color = UI.GetColor(["Rage", "XO-YAW", "Arrows Color"]);
		s_arrows_color = UI.GetColor(["Rage", "XO-YAW", "Selected Arrows Color"]);
		arrows_red = arrows_color[0];
		arrows_green = arrows_color[1];
		arrows_blue = arrows_color[2];
		arrows_alpha = arrows_color[3];
		selected_red = s_arrows_color[0];
		selected_green = s_arrows_color[1];
		selected_blue = s_arrows_color[2];
		Render.String(screen_size[0] / 2 - 42, screen_size[1] / 2 - 15, 1, "|", !inverted ? [selected_red, selected_green, selected_blue, 0] : s_arrows_color, fontarrow);
		Render.String(screen_size[0] / 2 + 43, screen_size[1] / 2 - 15, 1, "|", inverted ? [selected_red, selected_green, selected_blue, 0] : s_arrows_color, fontarrow);
		Render.Polygon([
				[screen_size[0] / 2 - 62, screen_size[1] / 2],
				[screen_size[0] / 2 - 45, screen_size[1] / 2 - 10],
				[screen_size[0] / 2 - 45, screen_size[1] / 2 + 10]
			], drawLeft ? [selected_red, selected_green, selected_blue, 255] : arrows_color)
			//Render.Polygon( [ [ screen_size[0] /2 - 10, screen_size[1] /2 + 35 ], [ screen_size[0] /2 + 10, screen_size[1] /2 +35 ], [ screen_size[0] /2, screen_size[1] /2 + 52] ], drawBack ? [selected_red, selected_green, selected_blue, 255] : arrows_color )
		Render.Polygon([
			[screen_size[0] / 2 + 45, screen_size[1] / 2 + 10],
			[screen_size[0] / 2 + 45, screen_size[1] / 2 - 10],
			[screen_size[0] / 2 + 62, screen_size[1] / 2]
		], drawRight ? [selected_red, selected_green, selected_blue, 255] : arrows_color)
	}
}
/* indicators */
function drawString() {
	var fake = Local.GetFakeYaw();
	var real = Local.GetRealYaw();
	if(fake < 0) {
		fake = 360 + fake;
	}
	if(real < 0) {
		real = 360 + real;
	}
	angle = fake - real;
	if(Math.abs(angle) > 240) {
		if(real > fake) {
			angle = 360 + angle;
		} else {
			angle = angle - 360;
		}
	}
	angle = angle / 2;
	if(fake > real) delta = (fake - real) / 2;
	else delta = (real - fake) / 2;
	var fonts = {
		"tahomabd": Render.GetFont("tahomabd.ttf", 10, true),
		"verdanab": Render.GetFont("verdanab.ttf", 19, true),
		"calibrib": Render.GetFont("calibrib.ttf", 11, true),
		"ebrimabd": Render.GetFont("ebrimabd.ttf", 10, true),
		"verdanab8": Render.GetFont("verdanab.ttf", 8, true),
		"verdana8": Render.GetFont("verdana.ttf", 10, true),
		"tahoma10": Render.GetFont("tahoma.ttf", 10, true),
		"calibrib20": Render.GetFont("calibrib.ttf", 20, true),
		"tahoma18": Render.GetFont("tahoma.ttf", 18, true),
		"pixel": Render.GetFont("arialbd.ttf", 10, true)
	}
	lp = Entity.GetLocalPlayer();
	velocity = Math.round(getVelocity(lp)).toString();
	fix_posdmg = Render.TextSize(cur_dmg + "", fonts.tahomabd)[0] / 2
	fix_poshc = Render.TextSize(cur_hit + "", fonts.tahomabd)[0] / 2
	inverted = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])
	isDmg = UI.GetValue(["Config", "Scripts", "JS Keybinds", "Damage Override"]);
	isDoubletap = UI.GetValue(["Rage", "Exploits", "Keys", "Double tap"]);
	isHideshots = UI.GetValue(["Rage", "Exploits", "Keys", "Hide shots"]);
	isSafe = UI.GetValue(["Rage", "General", "General", "Key assignment", "Force safe point"]);;
	isBody = UI.GetValue(["Rage", "General", "General", "Key assignment", "Force body aim"]);
	isFs = UI.GetValue(["Rage", "Anti Aim", "Directions", "At targets"]);
	isAuto = UI.GetValue(["Rage", "Anti Aim", "Directions", "Auto direction"]);
	isDuck = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]);
	isPing = UI.GetValue(["Config", "Scripts", "JS Keybinds", "Ping Spike"]);
	isPeek = UI.GetValue(["Misc.", "Keys", "Key assignment", "Auto peek"]);
	isAntiAim = UI.GetValue(["Rage", "Anti Aim", "General", "Enabled"])
	isHc = UI.GetValue(["Config", "Scripts", "JS Keybinds", "Hitchance Override"])
	isSlow = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]);
	isFLind = UI.GetValue(["Rage", "XO-YAW", "Fakelag Indicator"]);
	add_y = 0;
	add_x = 0;
	indicatorsEnabled = UI.GetValue(["Rage", "XO-YAW", "Indicators Style"]);
	if(Entity.IsAlive(Entity.GetLocalPlayer())) {
		if(UI.GetValue(["Rage", "XO-YAW", "Indicators"])) {
			if(getDropdownValue(indicatorsEnabled, 0)) {
				add_y = 80;
				if(isSlow) {
					Render.String(screen_size[0] / 2 - 31, screen_size[1] / 2 + add_y + 1, 0, "PEDALWALK", [0, 0, 0, 255], fonts.tahomabd);
					Render.String(screen_size[0] / 2 - 31, screen_size[1] / 2 + add_y, 0, "PEDALWALK", [177, 171, 255, 255], fonts.tahomabd);
				} else if(isAntiAim) {
					Render.String(screen_size[0] / 2 - 26, screen_size[1] / 2 + add_y + 1, 0, "FAKE YAW", [0, 0, 0, 255], fonts.tahomabd);
					Render.String(screen_size[0] / 2 - 26, screen_size[1] / 2 + add_y, 0, "FAKE YAW", [177, 171, 255, 255], fonts.tahomabd);
				}
				if(isFs) {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - 29, screen_size[1] / 2 + add_y + 1, 0, "FREESTAND", [0, 0, 0, 255], fonts.tahomabd);
					Render.String(screen_size[0] / 2 - 29, screen_size[1] / 2 + add_y, 0, "FREESTAND", [209, 159, 230, 255], fonts.tahomabd);
				} else {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - 25, screen_size[1] / 2 + add_y + 1, 0, "DYNAMIC", [0, 0, 0, 255], fonts.tahomabd);
					Render.String(screen_size[0] / 2 - 25, screen_size[1] / 2 + add_y, 0, "DYNAMIC", [209, 139, 230, 255], fonts.tahomabd);
				}
				if(isDoubletap) {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - 7, screen_size[1] / 2 + add_y + 1, 0, "DT", [0, 0, 0, 255], fonts.tahomabd);
					Render.String(screen_size[0] / 2 - 7, screen_size[1] / 2 + add_y, 0, "DT", Exploit.GetCharge() == 1 ? [72, 255, 16, 255] : [255, 0, 0, 255], fonts.tahomabd);
				}
				if(isDuck) {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - 14, screen_size[1] / 2 + add_y + 1, 0, "DUCK", [0, 0, 0, 255], fonts.tahomabd);
					Render.String(screen_size[0] / 2 - 14, screen_size[1] / 2 + add_y, 0, "DUCK", [255, 255, 255, 255], fonts.tahomabd);
				}
				if(isHideshots) {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - 22, screen_size[1] / 2 + add_y + 1, 0, "ONSHOT", [0, 0, 0, 255], fonts.tahomabd);
					Render.String(screen_size[0] / 2 - 22, screen_size[1] / 2 + add_y, 0, "ONSHOT", [132, 255, 16, 255], fonts.tahomabd);
				}
				if(isBody) {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - 14, screen_size[1] / 2 + add_y + 1, 0, "BAIM", [0, 0, 0, 255], fonts.tahomabd);
					Render.String(screen_size[0] / 2 - 14, screen_size[1] / 2 + add_y, 0, "BAIM", [132, 255, 16, 255], fonts.tahomabd);
				}
				if(isSafe) {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - 13, screen_size[1] / 2 + add_y + 1, 0, "SAFE", [0, 0, 0, 255], fonts.tahomabd);
					Render.String(screen_size[0] / 2 - 13, screen_size[1] / 2 + add_y, 0, "SAFE", [132, 255, 16, 255], fonts.tahomabd);
				}
				if(isHc) {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - 5 - fix_poshc, screen_size[1] / 2 + add_y + 1, 0, cur_hit + "%", [0, 0, 0, 255], fonts.tahomabd)
					Render.String(screen_size[0] / 2 - 5 - fix_poshc, screen_size[1] / 2 + add_y, 0, cur_hit + "%", [250, 85, 85, 255], fonts.tahomabd)
				}
				if(isDmg) {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - fix_posdmg, screen_size[1] / 2 + add_y + 1, 0, cur_dmg + "", [0, 0, 0, 255], fonts.tahomabd);
					Render.String(screen_size[0] / 2 - fix_posdmg, screen_size[1] / 2 + add_y, 0, cur_dmg + "", [200, 185, 255, 255], fonts.tahomabd);
				}
			}
			if(getDropdownValue(indicatorsEnabled, 1)) {
				add_y = 325;
				if(isDmg) {
					add_y = add_y - 24
					Render.String(5, screen_size[1] / 1.5 + add_y + 1, 0, cur_dmg + "", [0, 0, 0, 255], fonts.verdanab);
					Render.String(5, screen_size[1] / 1.5 + add_y, 0, cur_dmg + "", [200, 185, 255, 255], fonts.verdanab);
				}
				if(isHc) {
					add_y = add_y - 24
					Render.String(5, screen_size[1] / 1.5 + add_y + 1, 0, cur_hit + "%", [0, 0, 0, 170], fonts.verdanab)
					Render.String(5, screen_size[1] / 1.5 + add_y, 0, cur_hit + "%", [250, 85, 85, 255], fonts.verdanab)
				}
				if(isDuck) {
					add_y = add_y - 24
					Render.String(5, screen_size[1] / 1.5 + add_y + 1, 0, "DUCK", [0, 0, 0, 255], fonts.verdanab);
					Render.String(5, screen_size[1] / 1.5 + add_y, 0, "DUCK", [255, 255, 255, 255], fonts.verdanab);
				}
				if(isBody) {
					add_y = add_y - 24
					Render.String(5, screen_size[1] / 1.5 + add_y + 1, 0, "BAIM", [0, 0, 0, 255], fonts.verdanab);
					Render.String(5, screen_size[1] / 1.5 + add_y, 0, "BAIM", [255, 0, 0, 255], fonts.verdanab);
				}
				if(isFs) {
					add_y = add_y - 24
					Render.String(5, screen_size[1] / 1.5 + add_y + 1, 0, "FS", [0, 0, 0, 255], fonts.verdanab);
					Render.String(5, screen_size[1] / 1.5 + add_y, 0, "FS", [132, 210, 16, 255], fonts.verdanab);
				}
				if(isSafe) {
					add_y = add_y - 24
					Render.String(5, screen_size[1] / 1.5 + add_y + 1, 0, "SP", [0, 0, 0, 255], fonts.verdanab);
					Render.String(5, screen_size[1] / 1.5 + add_y, 0, "SP", [30, 144, 255, 255], fonts.verdanab);
				}
				if(Inair() & velocity > 250) {
					add_y = add_y - 24
					Render.String(5, screen_size[1] / 1.5 + add_y + 1, 0, "LC", velocity > 295 ? [0, 0, 0, 255] : [0, 0, 0, 255], fonts.verdanab)
					Render.String(5, screen_size[1] / 1.5 + add_y, 0, "LC", velocity > 295 ? [132, 210, 16, 255] : [255, 0, 0, 255], fonts.verdanab)
				}
				add_y = add_y - 24
				Render.String(5, screen_size[1] / 1.5 + add_y + 1, 0, "FAKE", [0, 0, 0, 255], fonts.verdanab)
				Render.String(5, screen_size[1] / 1.5 + add_y, 0, "FAKE", [255 - (delta * 2.29824561404), delta * 3.42105263158, delta * 0.22807017543, 255], fonts.verdanab)
				if(isDoubletap) {
					add_y = add_y - 24
					Render.String(5, screen_size[1] / 1.5 + add_y + 1, 0, "DT", [0, 0, 0, 255], fonts.verdanab);
					Render.String(5, screen_size[1] / 1.5 + add_y, 0, "DT", Exploit.GetCharge() == 1 ? [132, 210, 16, 255] : [255, 0, 0, 255], fonts.verdanab);
				}
				if(isHideshots) {
					add_y = add_y - 24
					Render.String(5, screen_size[1] / 1.5 + add_y + 1, 0, "HIDE", [0, 0, 0, 255], fonts.verdanab);
					Render.String(5, screen_size[1] / 1.5 + add_y, 0, "HIDE", [132, 210, 16, 255], fonts.verdanab);
				}
			}
			if(getDropdownValue(indicatorsEnabled, 2)) {
				add_y = 50
				if(isBody) {
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "BODY", [0, 0, 0, 255], fonts.calibrib);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "BODY", [95, 128, 255, 255], fonts.calibrib);
				} else if(isSafe) {
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "SAFE", [0, 0, 0, 255], fonts.calibrib);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "SAFE", [95, 128, 255, 255], fonts.calibrib);
				} else {
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "NORM", [0, 0, 0, 255], fonts.calibrib);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "NORM", [240, 155, 79, 255], fonts.calibrib);
				}
				if(isFs) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "SMART", [0, 0, 0, 255], fonts.calibrib);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "SMART", [132, 245, 16, 255], fonts.calibrib);
				} else {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "DYNAMIC", [0, 0, 0, 255], fonts.calibrib);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "DYNAMIC", [209, 159, 230, 255], fonts.calibrib);
				}
				if(isDuck && isDoubletap) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "DT (fakeduck)", [0, 0, 0, 255], fonts.calibrib);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "DT (fakeduck)", [255, 0, 0, 255], fonts.calibrib);
				} else if(isDoubletap) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "DT", [0, 0, 0, 255], fonts.calibrib);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "DT", Exploit.GetCharge() == 1 ? [255, 255, 255, 255] : [255, 0, 0, 255], fonts.calibrib);
				}
				if(isHideshots) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "HIDE", [0, 0, 0, 255], fonts.calibrib);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "HIDE", [115, 215, 255, 255], fonts.calibrib);
				}
				if(isDmg) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "DMG", [0, 0, 0, 255], fonts.calibrib);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "DMG", [200, 185, 255, 255], fonts.calibrib);
				}
				if(isHc) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "HC", [0, 0, 0, 255], fonts.calibrib)
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "HC", [250, 85, 85, 255], fonts.calibrib)
				}
			}
			if(getDropdownValue(indicatorsEnabled, 3)) {
				add_y = 15;
				if(isBody) {
					draw_shadow(screen_size[0] / 2 - 11, screen_size[1] / 2 + add_y, 0, "body", [0, 0, 0, 200], fonts.ebrimabd);
					Render.String(screen_size[0] / 2 - 11, screen_size[1] / 2 + add_y, 0, "body", [177, 171, 255, 255], fonts.ebrimabd);
				} else if(isSafe) {
					draw_shadow(screen_size[0] / 2 - 9, screen_size[1] / 2 + add_y, 0, "safe", [0, 0, 0, 200], fonts.ebrimabd);
					Render.String(screen_size[0] / 2 - 9, screen_size[1] / 2 + add_y, 0, "safe", [177, 171, 255, 255], fonts.ebrimabd);
				} else {
					draw_shadow(screen_size[0] / 2 - 17, screen_size[1] / 2 + add_y, 0, "normal", [0, 0, 0, 200], fonts.ebrimabd);
					Render.String(screen_size[0] / 2 - 17, screen_size[1] / 2 + add_y, 0, "normal", [177, 171, 255, 255], fonts.ebrimabd);
				}
				if(isFs) {
					add_y = add_y + 11
					draw_shadow(screen_size[0] / 2 - 11, screen_size[1] / 2 + add_y, 0, "auto", [0, 0, 0, 200], fonts.ebrimabd);
					Render.String(screen_size[0] / 2 - 11, screen_size[1] / 2 + add_y, 0, "auto", [209, 159, 230, 255], fonts.ebrimabd);
				} else {
					add_y = add_y + 11
					draw_shadow(screen_size[0] / 2 - 20, screen_size[1] / 2 + add_y, 0, "dynamic", [0, 0, 0, 200], fonts.ebrimabd);
					Render.String(screen_size[0] / 2 - 20, screen_size[1] / 2 + add_y, 0, "dynamic", [209, 159, 230, 255], fonts.ebrimabd);
				}
				if(isDuck && isDoubletap) {
					add_y = add_y + 11
					draw_shadow(screen_size[0] / 2 - 24, screen_size[1] / 2 + add_y, 0, "doubletap (fd)", [0, 0, 0, 200], fonts.ebrimabd);
					Render.String(screen_size[0] / 2 - 24, screen_size[1] / 2 + add_y, 0, "doubletap (fd)", [255, 0, 0, 255], fonts.ebrimabd);
				} else if(isDoubletap) {
					add_y = add_y + 11
					draw_shadow(screen_size[0] / 2 - 24, screen_size[1] / 2 + add_y, 0, "doubletap", [0, 0, 0, 200], fonts.ebrimabd);
					Render.String(screen_size[0] / 2 - 24, screen_size[1] / 2 + add_y, 0, "doubletap", Exploit.GetCharge() == 1 ? [255, 255, 255, 255] : [255, 0, 0, 255], fonts.ebrimabd);
				}
				if(isHideshots) {
					add_y = add_y + 11
					draw_shadow(screen_size[0] / 2 - 17, screen_size[1] / 2 + add_y, 0, "onshot", [0, 0, 0, 200], fonts.ebrimabd);
					Render.String(screen_size[0] / 2 - 17, screen_size[1] / 2 + add_y, 0, "onshot", [64, 255, 163, 255], fonts.ebrimabd);
				}
				if(isDmg) {
					add_y = add_y + 11
					draw_shadow(screen_size[0] / 2 - 11, screen_size[1] / 2 + add_y, 0, "dmg", [0, 0, 0, 200], fonts.ebrimabd);
					Render.String(screen_size[0] / 2 - 11, screen_size[1] / 2 + add_y, 0, "dmg", [200, 185, 255, 255], fonts.ebrimabd);
				}
				if(isHc) {
					add_y = add_y + 11
					draw_shadow(screen_size[0] / 2 - 6, screen_size[1] / 2 + add_y, 0, "hc", [0, 0, 0, 200], fonts.ebrimabd);
					Render.String(screen_size[0] / 2 - 6, screen_size[1] / 2 + add_y, 0, "hc", [250, 85, 85, 255], fonts.ebrimabd)
				}
			}
			if(getDropdownValue(indicatorsEnabled, 4)) {
				add_y = 6
				if(isFs) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2 - 15, screen_size[1] / 2 + add_y + 1, 0, "SMART", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2 - 15, screen_size[1] / 2 + add_y, 0, "SMART", [135, 147, 255, 255], fonts.verdanab8);
				} else {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2 - 22, screen_size[1] / 2 + add_y + 1, 0, "DYNAMIC", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2 - 22, screen_size[1] / 2 + add_y, 0, "DYNAMIC", [135, 147, 255, 255], fonts.verdanab8);
				}
				if(isDoubletap) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2 - 27, screen_size[1] / 2 + add_y + 1, 0, "DOUBLETAP", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2 - 27, screen_size[1] / 2 + add_y, 0, "DOUBLETAP", Exploit.GetCharge() == 1 ? [152, 240, 16, 255] : [255, 15, 15, 255], fonts.verdanab8);
				}
				if(isHideshots) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2 - 20, screen_size[1] / 2 + add_y + 1, 0, "ONSHOT", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2 - 20, screen_size[1] / 2 + add_y, 0, "ONSHOT", [255, 135, 178, 255], fonts.verdanab8);
				}
				if(isBody) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2 - 13, screen_size[1] / 2 + add_y + 1, 0, "BODY", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2 - 13, screen_size[1] / 2 + add_y, 0, "BODY", [177, 171, 255, 255], fonts.verdanab8);
				} else if(isSafe) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2 - 12, screen_size[1] / 2 + add_y + 1, 0, "SAFE", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2 - 12, screen_size[1] / 2 + add_y, 0, "SAFE", [177, 171, 255, 255], fonts.verdanab8);
				}
				if(isDmg) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2 - 11, screen_size[1] / 2 + add_y + 1, 0, "DMG", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2 - 11, screen_size[1] / 2 + add_y, 0, "DMG", [255, 255, 255, 255], fonts.verdanab8);
				}
				if(isHc) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2 - 6, screen_size[1] / 2 + add_y + 1, 0, "HC", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2 - 6, screen_size[1] / 2 + add_y, 0, "HC", [250, 85, 85, 255], fonts.verdanab8);
				}
			}
			if(getDropdownValue(indicatorsEnabled, 5)) {
				add_y = -5;
				if(isFs) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 - 12, screen_size[1] / 2 + 7 + add_y + 1, 0, "logic", [0, 0, 0, 255], fonts.verdana8);
					Render.String(screen_size[0] / 2 - 12, screen_size[1] / 2 + 7 + add_y, 0, "logic", [117, 234, 255, 255], fonts.verdana8);
				}
				if(isDoubletap) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 - 25, screen_size[1] / 2 + 7 + add_y + 1, 0, "doubletap", [0, 0, 0, 255], fonts.verdana8);
					Render.String(screen_size[0] / 2 - 25, screen_size[1] / 2 + 7 + add_y, 0, "doubletap", Exploit.GetCharge() == 1 ? [233, 230, 229, 255] : [255, 0, 0, 255], fonts.verdana8);
				}
				if(isHideshots) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 - 10, screen_size[1] / 2 + 7 + add_y + 1, 0, "hide", [0, 0, 0, 255], fonts.verdana8);
					Render.String(screen_size[0] / 2 - 10, screen_size[1] / 2 + 7 + add_y, 0, "hide", [132, 210, 16, 255], fonts.verdana8);
				}
				if(isDmg) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 - 11, screen_size[1] / 2 + 7 + add_y + 1, 0, "dmg", [0, 0, 0, 255], fonts.verdana8);
					Render.String(screen_size[0] / 2 - 11, screen_size[1] / 2 + 7 + add_y, 0, "dmg", [200, 185, 255, 255], fonts.verdana8);
				}
				if(isBody) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 - 11, screen_size[1] / 2 + 7 + add_y + 1, 0, "baim", [0, 0, 0, 255], fonts.verdana8);
					Render.String(screen_size[0] / 2 - 11, screen_size[1] / 2 + 7 + add_y, 0, "baim", [255, 0, 0, 255], fonts.verdana8);
				}
				if(isSafe) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 - 10, screen_size[1] / 2 + 7 + add_y + 1, 0, "safe", [0, 0, 0, 255], fonts.verdana8);
					Render.String(screen_size[0] / 2 - 10, screen_size[1] / 2 + 7 + add_y, 0, "safe", [30, 144, 255, 255], fonts.verdana8);
				}
				if(isDuck) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 - 11, screen_size[1] / 2 + 7 + add_y + 1, 0, "duck", [0, 0, 0, 255], fonts.verdana8);
					Render.String(screen_size[0] / 2 - 11, screen_size[1] / 2 + 7 + add_y, 0, "duck", [255, 255, 255, 255], fonts.verdana8);
				}
				if(isPing) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 - 10, screen_size[1] / 2 + 7 + add_y + 1, 0, "ping", [0, 0, 0, 255], fonts.verdana8);
					Render.String(screen_size[0] / 2 - 10, screen_size[1] / 2 + 7 + add_y, 0, "ping", [255 - ((Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing") / 189 * 60) * 2.29824561404), (Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing") / 189 * 60) * 3.42105263158, (Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing") / 189 * 60) * 0.22807017543, 255], fonts.verdana8)
				}
				if(isPeek) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 - 11, screen_size[1] / 2 + 7 + add_y + 1, 0, "peek", [0, 0, 0, 255], fonts.verdana8);
					Render.String(screen_size[0] / 2 - 11, screen_size[1] / 2 + 7 + add_y, 0, "peek", [50, 255, 150, 255], fonts.verdana8);
				}
			}
			if(getDropdownValue(indicatorsEnabled, 6)) {
				add_y = +35
				Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y + 1, 0, "IDEAL YAW", [0, 0, 0, 255], fonts.tahoma10);
				Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y, 0, "IDEAL YAW", [220, 135, 49, 255], fonts.tahoma10);
				if(isFs) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y + 1, 0, "FREESTAND", [0, 0, 0, 255], fonts.tahoma10);
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y, 0, "FREESTAND", [209, 159, 230, 255], fonts.tahoma10);
				} else {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y + 1, 0, "DYNAMIC", [0, 0, 0, 255], fonts.tahoma10);
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y, 0, "DYNAMIC", [209, 159, 230, 255], fonts.tahoma10);
				}
				if(isDoubletap) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y + 1, 0, "DT", [0, 0, 0, 255], fonts.tahoma10);
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y, 0, "DT", Exploit.GetCharge() == 1 ? [25, 255, 25, 255] : [255, 0, 0, 255], fonts.tahoma10);
				} else {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y + 1, 0, "DT", [0, 0, 0, 255], fonts.tahoma10);
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y, 0, "DT", [255, 0, 0, 255], fonts.tahoma10);
				}
				if(isHideshots) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y + 1, 0, "AA", [0, 0, 0, 255], fonts.tahoma10);
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y, 0, "AA", [95, 128, 255, 255], fonts.tahoma10);
				}
				if(isDmg) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y + 1, 0, "DMG", [0, 0, 0, 255], fonts.tahoma10);
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y, 0, "DMG", [200, 185, 255, 255], fonts.tahoma10);
				}
				if(isHc) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y + 1, 0, "HC", [0, 0, 0, 255], fonts.tahoma10)
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y, 0, "HC", [250, 85, 85, 255], fonts.tahoma10)
				}
				if(isBody) {
					add_y = add_y + 10
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y + 1, 0, "BODY", [0, 0, 0, 255], fonts.tahoma10);
					Render.String(screen_size[0] / 2 + 2, screen_size[1] / 2 + add_y, 0, "BODY", [9, 228, 155, 255], fonts.tahoma10);
				}
			}
			if(getDropdownValue(indicatorsEnabled, 7)) {
				add_y = 60
				Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "OPPOSITE", [0, 0, 0, 255], fonts.verdanab8);
				Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "OPPOSITE", [177, 171, 255, 255], fonts.verdanab8);
				if(isAuto) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "FREESTAND", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "FREESTAND", [209, 139, 230, 255], fonts.verdanab8);
				} else if(isFs) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "SMART", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "SMART", [209, 139, 230, 255], fonts.verdanab8);
				} else {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "DYNAMIC", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "DYNAMIC", [209, 139, 230, 255], fonts.verdanab8);
				}
				if(isDuck && isDoubletap) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "DT (fakeduck)", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "DT (fakeduck)", [255, 0, 0, 255], fonts.verdanab8);
				} else if(isDoubletap) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "DT", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "DT", [255 * (1.0 - Exploit.GetCharge()), 255 * Exploit.GetCharge(), 0, 255], fonts.verdanab8);
				}
				if(isHideshots) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "ONSHOT", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "ONSHOT", [152, 240, 16, 255], fonts.verdanab8);
				}
				if(isDmg) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "DMG", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "DMG", [255, 255, 255, 255], fonts.verdanab8);
				}
				if(isHc) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "HC", [0, 0, 0, 255], fonts.verdanab8)
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "HC", [250, 85, 85, 255], fonts.verdanab8)
				}
				if(isBody) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "BAIM", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "BAIM", [124, 215, 13, 255], fonts.verdanab8);
				}
				if(isSafe) {
					add_y = add_y + 9
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y + 1, 0, "SAFE", [0, 0, 0, 255], fonts.verdanab8);
					Render.String(screen_size[0] / 2, screen_size[1] / 2 + add_y, 0, "SAFE", [124, 215, 13, 255], fonts.verdanab8);
				}
			}
			if(getDropdownValue(indicatorsEnabled, 9)) {
				add_y = 0
				if(inverted) {
					Render.String(screen_size[0] / 2 + 38, screen_size[1] / 2 - 9, 0, ">", [0, 0, 0, 200], fonts.calibrib20)
					Render.String(screen_size[0] / 2 + 38, screen_size[1] / 2 - 9, 0, ">", [184, 184, 184, 255], fonts.calibrib20)
					Render.String(screen_size[0] / 2 - 48, screen_size[1] / 2 - 9, 0, "<", [0, 0, 0, 200], fonts.calibrib20)
					Render.String(screen_size[0] / 2 - 48, screen_size[1] / 2 - 9, 0, "<", [147, 135, 255, 255], fonts.calibrib20)
				} else if(!inverted) {
					Render.String(screen_size[0] / 2 - 48, screen_size[1] / 2 - 9, 0, "<", [0, 0, 0, 200], fonts.calibrib20)
					Render.String(screen_size[0] / 2 - 48, screen_size[1] / 2 - 9, 0, "<", [184, 184, 184, 255], fonts.calibrib20)
					Render.String(screen_size[0] / 2 + 38, screen_size[1] / 2 - 9, 0, ">", [0, 0, 0, 200], fonts.calibrib20)
					Render.String(screen_size[0] / 2 + 38, screen_size[1] / 2 - 9, 0, ">", [147, 135, 255, 255], fonts.calibrib20)
				}
				Render.GradientRect(screen_size[0] / 2 + 1, screen_size[1] / 2 + 40, (Math.abs(angle)), 2, 1, [147, 135, 255, 255], [147, 135, 255, 5])
				Render.GradientRect(screen_size[0] / 2 - (Math.abs(angle)) + 2, screen_size[1] / 2 + 40, (Math.abs(angle)), 2, 1, [147, 135, 255, 5], [147, 135, 255, 255])
				Render.String(screen_size[0] / 2 - 6, screen_size[1] / 2 + 24, 0, Math.round(Math.abs(angle)) + "°", [255, 255, 255, 255], fonts.ebrimabd)
				Render.Circle(screen_size[0] / 2 + 7, screen_size[1] / 2 + 29, 1, [255, 255, 255, 255]);
				Render.String(screen_size[0] / 2 - 18, screen_size[1] / 2 + 44 + add_y, 0, "XO-YAW", [0, 0, 0, 255], fonts.calibrib)
				Render.String(screen_size[0] / 2 - 18, screen_size[1] / 2 + 43, 0 + add_y, "XO-YAW", [255, 255, 255, 255], fonts.calibrib)
				if(drawLeft) {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - 10, screen_size[1] / 2 + 44 + add_y, 0, "LEFT", [0, 0, 0, 255], fonts.calibrib)
					Render.String(screen_size[0] / 2 - 10, screen_size[1] / 2 + 43 + add_y, 0, "LEFT", [255, 255, 255, 255], fonts.calibrib)
				} else if(drawRight) {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - 14, screen_size[1] / 2 + 44 + add_y, 0, "RIGHT", [0, 0, 0, 255], fonts.calibrib)
					Render.String(screen_size[0] / 2 - 14, screen_size[1] / 2 + 43 + add_y, 0, "RIGHT", [255, 255, 255, 255], fonts.calibrib)
				}
				if(isHideshots) {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - 19, screen_size[1] / 2 + 44 + add_y, 0, "ONSHOT", [0, 0, 0, 255], fonts.calibrib);
					Render.String(screen_size[0] / 2 - 19, screen_size[1] / 2 + 43 + add_y, 0, "ONSHOT", [255, 255, 255, 255], fonts.calibrib);
				}
				if(isBody) {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - 13, screen_size[1] / 2 + 44 + add_y, 0, "BAIM", [0, 0, 0, 255], fonts.calibrib);
					Render.String(screen_size[0] / 2 - 13, screen_size[1] / 2 + 43 + add_y, 0, "BAIM", [255, 255, 255, 255], fonts.calibrib);
				}
				if(isDmg) {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - 12, screen_size[1] / 2 + 44 + add_y, 0, "DMG", [0, 0, 0, 255], fonts.calibrib);
					Render.String(screen_size[0] / 2 - 12, screen_size[1] / 2 + 43 + add_y, 0, "DMG", [255, 255, 255, 255], fonts.calibrib);
				}
				if(isDoubletap) {
					add_y = add_y + 11
					Render.String(screen_size[0] / 2 - 6, screen_size[1] / 2 + 44 + add_y, 0, "DT", [0, 0, 0, 255], fonts.calibrib);
					Render.String(screen_size[0] / 2 - 6, screen_size[1] / 2 + 43 + add_y, 0, "DT", Exploit.GetCharge() == 1 ? [255, 255, 255, 255] : [255, 0, 0, 255], fonts.calibrib);
				}
			}
			if(getDropdownValue(indicatorsEnabled, 8)) {
				add_y = 0
				Render.Indicator = function(text, col) {
					x = screen_size[0] / 100
					y = screen_size[1] / 1.33
					fonts = Render.GetFont("calibrib.ttf", 21, true)
					text_size = Render.TextSize(text, fonts)
					width = text_size[0] - 2;
					add_y = add_y + 33
					Render.GradientRect(13, y - add_y - 3, width / 2, 26, 1, [0, 0, 0, 0], [0, 0, 0, 55]);
					Render.GradientRect(13 + width / 2, y - add_y - 3, width / 2, 26, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
					Render.String(x, y + 1 - add_y, 0, text, [33, 33, 33, 180], fonts)
					Render.String(x, y - add_y, 0, text, col, fonts)
				}
				fill = 3.125 - (3.125 + on_plant_time - Globals.Curtime())
				if(fill > 3.125) {
					fill = 3.125
				}
				fonts = Render.GetFont("calibrib.ttf", 21, true)
				if(Entity.IsAlive(Entity.GetLocalPlayer())) {
					if(velocity > 255 || Inair()) {
						Render.Indicator("LC", velocity > 275 ? [132, 195, 16, 255] : [255, 0, 0, 255])
					}
					if(isDuck) {
						Render.Indicator("DUCK", [255, 255, 255, 255])
					}
					if(isBody) {
						Render.Indicator("BAIM", [255, 0, 0, 255])
					}
					if(isSafe) {
						Render.Indicator("SAFE", [132, 195, 16, 255])
					}
					if(isPing) {
						Render.Indicator("PING", [255 - ((Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing") / 189 * 60) * 2.29824561404), (Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing") / 189 * 60) * 3.42105263158, (Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing") / 189 * 60) * 0.22807017543, 255])
					}
					if(isDmg) {
						Render.Indicator("DMG : " + cur_dmg + "", [164, 164, 164, 255]);
					}
					if(isHc) {
						Render.Indicator("HC : " + cur_hit + "", [200, 185, 255, 255]);
					}
					if(isAuto) {
						Render.Indicator("FREESTAND", [132, 195, 16, 255]);
					}
					if(Convar.GetInt("weapon_accuracy_nospread") != 0) {
						Render.Indicator("NS", [255, 0, 0, 255])
					}
					if(isFs) {
						Render.Indicator("AT", [132, 195, 16, 255])
					}
				}
				var c4 = Entity.GetEntitiesByClassID(129)[0];
				if(c4 != undefined) {
					var eLoc = Entity.GetRenderOrigin(c4);
					var lLoc = Entity.GetRenderOrigin(Entity.GetLocalPlayer())
					var distance = calcDist(eLoc, lLoc);
					var willKill = false;
					var dmg;
					//player checks
					var armor = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayerResource", "m_iArmor"); // player armor
					var health = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_iHealth"); // player health
					//c4 things
					var isbombticking = Entity.GetProp(c4, "CPlantedC4", "m_bBombTicking");
					var timer = (Entity.GetProp(c4, "CPlantedC4", "m_flC4Blow") - Globals.Curtime()); // c4 left time
					var c4length = Entity.GetProp(c4, "CPlantedC4", "m_flTimerLength");
					var bar_length = (((Render.GetScreenSize()[1] - 50) / c4length) * (timer));
					//defusing things
					var deflength = Entity.GetProp(c4, "CPlantedC4", "m_flDefuseLength"); // length of defuse
					var deftimer = (Entity.GetProp(c4, "CPlantedC4", "m_flDefuseCountDown") - Globals.Curtime()); // timer when defusing
					var defbarlength = (((Render.GetScreenSize()[1] - 50) / deflength) * (deftimer)); // lenght for left bar
					var isbeingdefused = Entity.GetProp(c4, "CPlantedC4", "m_hBombDefuser"); // check if bomb is being defused
					var gotdefused = Entity.GetProp(c4, "CPlantedC4", "m_bBombDefused"); // check if bomb has or hasnt defused
					const a = 450.7;
					const b = 75.68;
					const c = 789.2;
					const d = (distance - b) / c;
					var damage = a * Math.exp(-d * d);
					if(armor > 0) {
						var newDmg = damage * 0.5;
						var armorDmg = (damage - newDmg) * 0.5;
						if(armorDmg > armor) {
							armor = armor * (1 / .5);
							newDmg = damage - armorDmg;
						}
						damage = newDmg;
					}
					dmg = Math.ceil(damage);
					if(dmg >= health) {
						willKill = true;
					} else {
						willKill = false;
					}
					timer = parseFloat(timer.toPrecision(3));
					timer2 = parseFloat(timer.toPrecision(2));
					timer3 = parseFloat(timer.toPrecision(1));
					if(!isbombticking) return;
					if(gotdefused) return;
					if(timer >= 0.1) {
						Render.Indicator(getSite(c4) + timer.toFixed(1) + "s", [255, 255, 255, 255])
					}
					if(willKill) {
						Render.Indicator("FATAL", [255, 0, 0, 255])
					} else if(damage > 0.5) {
						Render.Indicator("-" + dmg + "HP", [210, 216, 112, 255])
					}
					// defuse time bar
					if(isbeingdefused > 0) {
						if(timer > deflength && timer >= 0.1) {
							Render.FilledRect(0, 0, 10, Render.GetScreenSize()[1], [25, 25, 25, 120]);
							Render.FilledRect(0, Render.GetScreenSize()[1] - defbarlength, 10, Render.GetScreenSize()[1], [58, 191, 54, 120]);
							Render.Rect(0, 0, 10, Render.GetScreenSize()[1], [25, 25, 25, 120]);
						} else {
							Render.FilledRect(0, 0, 10, Render.GetScreenSize()[1], [25, 25, 25, 120]);
							Render.FilledRect(0, Render.GetScreenSize()[1] - defbarlength, 10, Render.GetScreenSize()[1], [252, 18, 19, 120]);
							Render.Rect(0, 0, 10, Render.GetScreenSize()[1], [25, 25, 25, 120]);
						}
					}
				}
				if(planting) {
					textsize_C4 = Render.TextSize(bombsiteonplant, fonts)[0] + 15;
					Render.Indicator(bombsiteonplant, [210, 216, 112, 255])
					Render.OutlineCircle(x + textsize_C4, y - 25 - add_y + 35, fill / 3.3, [255, 255, 255, 255])
				}
				if(Entity.IsAlive(Entity.GetLocalPlayer())) {
					if(isFLind) {
						textsize_FL = Render.TextSize("FL", fonts)[0] + 15;
						Render.Indicator("FL", [135, 147, 255, 255])
						Render.OutlineCircle(x + textsize_FL, y - 25 - add_y + 35, (Globals.ChokedCommands() / 14), [135, 147, 255, 255])
					}
					if(isHideshots) {
						Render.Indicator("ONSHOT", [132, 195, 16, 255])
					}
					if(isDoubletap) {
						Render.Indicator("DT", Exploit.GetCharge() == 1 ? [255, 255, 255, 255] : [255, 0, 0, 255])
					}
				}
			}
		}
	}
	if(UI.GetValue(["Rage", "XO-YAW", "Watermark"])) {
		var ping = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString()
		var today = new Date();
		var hours1 = today.getHours();
		var minutes1 = today.getMinutes();
		var font = Render.GetFont("verdana.ttf", 10, true);
		var hours = hours1 <= 9 ? "0" + today.getHours() + ":" : today.getHours() + ":";
		var minutes = minutes1 <= 9 ? "0" + today.getMinutes() + "" : today.getMinutes();
		var text = ""
		var betas = ["ragerly", "demyaha"]
		if(betas.indexOf(username) > -1) {
			text += "xo-yaw " + "[beta]" + " | " + username + " ";
		} else {
			text += "xo-yaw | " + username + " ";
		}
		if(World.GetServerString() != "") text += "| " + ping + "ms ";
		text += "| " + hours + minutes;
		var h = 28;
		var w = Render.TextSize(text, font)[0] + 3;
		var x = Global.GetScreenSize()[0] - 2;
		var y = 29;
		x = x - w - 12;
        Render.FilledRect(x + 5, y - 15, w - 10, 18, UI.GetColor(["Rage", "XO-YAW", "XO-YAW", "Accent Color"]))
        render_arc(x + 5, y - 6.5, 9, 0, 90, 180, 32, UI.GetColor(["Rage", "XO-YAW", "XO-YAW", "Accent Color"]))
        render_arc(x + 4 + w - 10, y - 6.5, 9, 0, 270, 180, 32, UI.GetColor(["Rage", "XO-YAW", "XO-YAW", "Accent Color"]))
		Render.String(x, 7 + 8, 0, text, [0, 0, 0, 255], font);
		Render.String(x, 7 + 8, 0, text, [255, 255, 255, 255], font);
	}
	if(UI.GetValue(["Rage", "XO-YAW", "Desync Circle"])) {
		var adjust_angle = function(angle) {
			if(angle < 0) {
				angle = (90 + angle * (-1))
			} else if(angle > 0) {
				angle = (90 - angle)
			}
			return angle
		}
		var dsy = {
			"col": UI.GetColor(["Rage", "XO-YAW", "Desync Circle Color"]),
			"inv": UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])
		}
		var local_player = Entity.GetLocalPlayer();
		if(Entity.IsAlive(local_player)) {
			var screens_size = Render.GetScreenSize();
			var screen_middle_x = screens_size[0] * 0.5;
			var screen_middle_y = screens_size[1] * 0.5;
			var view_angles = Local.GetViewAngles();
			var real_yaw = Local.GetRealYaw();
			var fake_yaw = Local.GetFakeYaw();
			var view_yaw = view_angles[1] - 180;
			var real = adjust_angle(real_yaw - view_yaw);
			var fake = adjust_angle(fake_yaw - view_yaw);
			render_arc(screen_middle_x, screen_middle_y, 8, 3, 0, 360, 32, [0, 0, 0, 255])
			render_arc(screen_middle_x, screen_middle_y, 7, 4, dsy.inv ? 90 : 270, dsy.inv ? 180 : 180, 32, dsy.col)
			render_arc(screen_middle_x, screen_middle_y, 15, 12, fake - (12 * 0.5), 44, 32, dsy.col)
		}
	}
}
/* legit aa */
function legit_aa2() {
	if(UI.GetValue(["Config", "Scripts", "JS Keybinds", "Legit AA"])) {
		if(original_aa) {
			restrictions_cache = UI.GetValue(["Config", "Cheat", "General", "Restrictions"])
			yaw_offset_cache = UI.GetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"])
			jitter_offset_cache = UI.GetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"])
			pitch_cache = UI.GetValue(["Rage", "Anti Aim", "General", "Pitch mode"])
			original_aa = false
		}
		UI.SetValue(["Config", "Cheat", "General", "Restrictions"], 0);
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 180);
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 0);
		UI.SetValue(["Rage", "Anti Aim", "General", "Pitch mode"], 0)
        AntiAim.SetOverride(0)
		IN_USE = UserCMD.GetButtons() & (1 << 5)
		if(IN_USE) {
			E = false;
			if(Globals.Realtime() > legitaa_time + 0.2) {
				if(E == false) {
					Cheat.ExecuteCommand("+use");
					E = true;
				}
				if(E == true) {
					Cheat.ExecuteCommand("-use");
				}
			}
		} else {
			if(E == true) {
				Cheat.ExecuteCommand("-use")
				E = false
			}
		}
	} else {
		if(!original_aa) {
			UI.SetValue(["Config", "Cheat", "General", "Restrictions"], restrictions_cache)
			UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], yaw_offset_cache)
			UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], jitter_offset_cache)
			UI.SetValue(["Rage", "Anti Aim", "General", "Pitch mode"], pitch_cache)
			original_aa = true
		}
		legitaa_time = Global.Realtime();
	}
}

function legit_aa() {
	var C4 = Entity.GetEntitiesByClassID(129)[0]
	var Host = Entity.GetEntitiesByClassID(97)[0]
	if(C4) {
		var C4Loc = Entity.GetRenderOrigin(C4)
		var local = Entity.GetLocalPlayer()
		var lLoc = Entity.GetRenderOrigin(local)
		distance = calcDist(C4Loc, lLoc)
		if(distance >= 100) {
			legit_aa2()
		}
	} else if(Host) {
		var HLoc = Entity.GetRenderOrigin(Host);
		var local = Entity.GetLocalPlayer();
		var lLoc = Entity.GetRenderOrigin(local)
		distance1 = calcDist(HLoc, lLoc);
		if(distance1 >= 100) {
			legit_aa2()
		}
	} else {
		legit_aa2()
	}
}

function player_connect() {
	lastPressed = Global.Tickcount();
	oldTick = Global.Tickcount();
	on_plant_time = 0
	fill = 0
	planting = false
	var c4 = Entity.GetEntitiesByClassID(129)[0];
	if(c4 == undefined) return;
}

function hooked_cm() {
	doubletap()
	dmghcoverride()
	misc()
	antiaim()
	onCreateMove()
	legit_aa()
}

function hooked_painttraverse() {
	drawarrows()
	drawString()
	on_menu_changes()
	keybinds()
}

function hooked_events() {
	Cheat.RegisterCallback("player_connect_full", "player_connect")
	Cheat.RegisterCallback("Unload", "doubletapunload")
	Cheat.RegisterCallback("weapon_fire", "on_wpn_fire")
	Cheat.RegisterCallback("bomb_beginplant", "bomb_beginplant");
	Cheat.RegisterCallback("bomb_abortplant", "bomb_abortplant");
	Cheat.RegisterCallback("bomb_defused", "bomb_defused");
	Cheat.RegisterCallback("bomb_planted", "bomb_planted");
	Cheat.RegisterCallback("bomb_exploded", "bomb_exploded");
	Cheat.RegisterCallback("round_start", "on_round_start");
    Cheat.RegisterCallback("round_prestart", "autobuy");
}
/* callbacks */
Cheat.RegisterCallback("CreateMove", "hooked_cm")
Cheat.RegisterCallback("Draw", "hooked_painttraverse")
hooked_events()
	/* Welcome info */
Cheat.PrintColor([154, 156, 255, 255], " ​" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "•> Welcome To XO-YAW" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "•> Discord: discord.gg/CuE5yxk6Md​" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "•> Build: 19.02.21​" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "•> Logged in as: " + username + "\n")
Cheat.PrintColor([154, 156, 255, 255], " ​" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "UPDATE LOG 19.02.21" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "  •> Reworked UI" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "  •> Fixed freestanding legit aa" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "  •> Added checkbox for FL indicator in skeet indicators" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "  •> Added center desync circle, like skeet luas" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "  •> Fixed undefined console spam" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "  •> Anti-Aim Corrections" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "  •> Removed Keybinds for rework" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "  •> Minor Fixes with UI" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "  •> Improved Double-Tap" + "\n")
Cheat.PrintColor([154, 156, 255, 255], "  •> Fixed jumping LC indicator in skeet indicators" + "\n")
Cheat.PrintColor([154, 156, 255, 255], " ​" + "\n")