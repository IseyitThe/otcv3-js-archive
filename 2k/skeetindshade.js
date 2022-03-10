Render.AddFont = function(name, size, _) {
    if (name.indexOf('.ttf') === -1) name = name + '.ttf';
  
    return Render.GetFont(name, size, true);
  }

/**
 *
 * Title: Skeet indicators
 * Author: hotline
 * Type: Paid script
 *
 */


//const pingspike_hotkey = UI.AddHotkey( ["Visuals", "General", "General", "Key assignment"], "Ping spike", "Ping spike" )
const _ui = require("./module/uilib.js");
const x = Render.GetScreenSize()[0] / 115,
	  y = Render.GetScreenSize()[1] / 1.13;

Render.GradientSkeet = function (x, y, w, h, dir, col1, col2)
{
	Render.GradientRect(x, y - 4, w / 4, h, dir, col2, col1);
	Render.GradientRect(x + (w / 4), y - 4, w / 4, h, dir, col1, col2);
};
Render.Arc = function (x, y, radius, radius_inner, start_angle, end_angle, segments)
{
	for (var i = start_angle; i < start_angle + end_angle; i++)
	{
		const rad = i * Math.PI / 180;
		Render.Line(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius, x + Math.cos(rad) * radius_inner, y + Math.sin(rad) * radius_inner, segments);
	}
};

const get_distance = function (a, b)
{
	var lx = a[0];
	var ly = a[1];
	var lz = a[2];
	var tx = b[0];
	var ty = b[1];
	var tz = b[2];
	var dx = lx - tx;
	var dy = ly - ty;
	var dz = lz - tz;

	return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

const get_bombsite = function (c4_entity)
{
	return Entity.GetProp(c4_entity, 'CPlantedC4', 'm_nBombSite') ? 'B - ' : 'A - ';
}

const get_velocity = function (index)
{
	const velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
	return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

var planting = false;
var fill = 0;
var isbomb = 0;
var bombsiteonplant = '';
var on_plant_time;

const on_paint = function ()
{
	const velocity = Math.round(get_velocity(Entity.GetLocalPlayer())).toString();
	const font = Render.AddFont('calibrib.ttf', 24, 100);

	var sp_height, dmg_height, dt_height, hs_height, lc_height;
	var lc_color = [];

	if (_ui.GetValue(["Rage", "General", "Key assignment", "Damage Override"]))
		dmg_height = 35;
	else
		dmg_height = 0;
	if (_ui.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]))
		dt_height = 35;
	else
		dt_height = 0;
	if (velocity > 255 && Entity.IsAlive(Entity.GetLocalPlayer()))
		lc_height = 35;
	else
		lc_height = 0;
	if (_ui.GetValue(["Rage", "General", "General", "Key assignment", "Force safe point"]))
		sp_height = 35;
	else
		sp_height = 0;
	if (_ui.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"]))
		hs_height = 35;
	else
		hs_height = 0;


	if (Entity.IsAlive(Entity.GetLocalPlayer()))
	{
		if (_ui.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]))
		{
			Render.GradientSkeet(7, y - 350 + 70 - sp_height - lc_height - isbomb, 50, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
			Render.String(x, y + 1 - 350 + 70 - sp_height - lc_height - isbomb, 0, 'DT', [17, 17, 17, 255], font);
			if (Exploit.GetCharge().toFixed(1) >= 1)
				Render.String(x, y - 350 + 70 - sp_height - lc_height - isbomb, 0, 'DT', [255, 255, 255, 255], font);
			else
				Render.String(x, y - 350 + 70 - sp_height - lc_height - isbomb, 0, 'DT', [255, 1, 1, 255], font);
		}
		if (_ui.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]))
		{
			Render.GradientSkeet(7, y - 350 + 70 - sp_height - dt_height - lc_height - isbomb, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
			Render.String(x, y + 1 - 350 + 70 - sp_height - dt_height - lc_height - isbomb, 0, 'DUCK', [17, 17, 17, 255], font);
			Render.String(x, y - 350 + 70 - sp_height - dt_height - lc_height - isbomb, 0, 'DUCK', [255, 255, 255, 255], font);
		}
		if (_ui.GetValue(["Rage", "General", "General", "Key assignment", "Force safe point"]))
		{
			Render.GradientSkeet(7, y - 350 + 70 - lc_height, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
			Render.String(x, y + 1 - 350 + 70 - lc_height, 0, 'SAFE', [17, 17, 17, 255], font);
			Render.String(x, y - 350 + 70 - lc_height, 0, 'SAFE', [132, 195, 16, 255], font);
		}
		if (velocity > 295)
		{
			if (_ui.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]) || _ui.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"]))
			{
				lc_color[0] = 255, lc_color[1] = 0, lc_color[2] = 0;
			}
			else
			{
				lc_color[0] = 132, lc_color[1] = 195, lc_color[2] = 16;
			}
		}
		else
		{
			lc_color[0] = 255, lc_color[1] = 0, lc_color[2] = 0;
		}
		if (velocity > 255)
		{
			Render.GradientSkeet(7, y - 350 + 70, 50, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
			Render.String(x, y + 1 - 350 + 70, 0, 'LC', [17, 17, 17, 255], font);
			Render.String(x, y - 350 + 70, 0, 'LC', [lc_color[0], lc_color[1], lc_color[2], 255], font);
		}
		if (_ui.GetValue(["Rage", "General", "Key assignment", "Damage Override"]))
		{
			Render.GradientSkeet(7, y - 350 + 105 + hs_height, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
			Render.String(x, y + 1 - 350 + 105 + hs_height, 0, 'DMG', [17, 17, 17, 255], font);
			Render.String(x, y - 350 + 105 + hs_height, 0, 'DMG', [225, 225, 225, 255], font);
		}
		if (_ui.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"]))
		{
			Render.GradientSkeet(7, y - 350 + 105, 170, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
			Render.String(x, y + 1 - 350 + 105, 0, 'ONSHOT', [17, 17, 17, 255], font);
			Render.String(x, y - 350 + 105, 0, 'ONSHOT', [132, 195, 16, 255], font);
		}
		if (_ui.GetValue(["Misc.", "Helpers", "General", "Extended backtracking"]))
		{
			Render.GradientSkeet(7, y - 350 + 105 + hs_height + dmg_height + 0, 75, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
			Render.String(x, y + 1 - 350 + 105 + hs_height + dmg_height + 0, 0, 'PING', [17, 17, 17, 255], font);
			Render.String(x, y - 350 + 105 + hs_height + dmg_height + 0, 0, 'PING', [255 - ((Entity.GetProp(Entity.GetLocalPlayer(), 'CPlayerResource', 'm_iPing') / 189 * 60) * 2.29824561404), (Entity.GetProp(Entity.GetLocalPlayer(), 'CPlayerResource', 'm_iPing') / 189 * 60) * 3.42105263158, (Entity.GetProp(Entity.GetLocalPlayer(), 'CPlayerResource', 'm_iPing') / 189 * 60) * 0.22807017543, 255], font);
		}
	};
	fill = 3.3 - (3.3 + on_plant_time - Globals.Curtime());
	if (fill > 3.3)
		fill = 3.3;

	if (planting)
	{
		Render.GradientSkeet(7, y - 350 + 70 + 1 - sp_height - lc_height, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
		Render.String(x, y + 1 - 350 + 70 - sp_height - lc_height, 0, bombsiteonplant, [0, 0, 0, 255], font);
		Render.String(x, y - 350 + 70 - sp_height - lc_height, 0, bombsiteonplant, [210, 216, 112, 255], font);
		Render.Arc(x + 135, y - 355 + 85 - sp_height - lc_height, 11, 7, 0, 360, [17, 17, 17, 255]);
		Render.Arc(x + 135, y - 355 + 85 - sp_height - lc_height, 10, 8, 0, (fill / 3.3) * 360, [255, 255, 255, 255]);
	}

	const c4_entity = Entity.GetEntitiesByClassID(128)[0];
	if (c4_entity == undefined)
		return;

	const local_origin = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
	const armor_value = Entity.GetProp(Entity.GetLocalPlayer(), 'CCSPlayerResource', 'm_iArmor');
	const health_value = Entity.GetProp(Entity.GetLocalPlayer(), 'CBasePlayer', 'm_iHealth');

	const c4_origin = Entity.GetRenderOrigin(c4_entity);
	const c4_to_local_dist = get_distance(c4_origin, local_origin);
	const c4_ticking = Entity.GetProp(c4_entity, 'CPlantedC4', 'm_bBombTicking');
	const c4_blowtime = (Entity.GetProp(c4_entity, 'CPlantedC4', 'm_flC4Blow') - Globals.Curtime());
	const c4_defuselength = Entity.GetProp(c4_entity, 'CPlantedC4', 'm_flDefuseLength');
	const c4_defusecountdown = (Entity.GetProp(c4_entity, 'CPlantedC4', 'm_flDefuseCountDown') - Globals.Curtime());
	const c4_barlength = (((Render.GetScreenSize()[1] - 50) / c4_defuselength) * (c4_defusecountdown));
	const c4_isdefusing = Entity.GetProp(c4_entity, 'CPlantedC4', 'm_hBombDefuser');
	const c4_isdefused = Entity.GetProp(c4_entity, 'CPlantedC4', 'm_bBombDefused');

	const a = 450.7;
	const b = 75.68;
	const c = 789.2;
	const d = (c4_to_local_dist - b) / c;
	const bomb_damage = a * Math.exp(-d * d);

	var is_fatal = false;

	if (armor_value > 0)
	{
		var new_value = bomb_damage * 0.5;
		var armor = (bomb_damage - new_value) * 0.5;
		if (armor > armor_value)
		{
			armor_value = armor_value * (1 / 0.5);
			new_value = bomb_damage - armor;
		}
		bomb_damage = new_value;
	}

	const hp_damage = Math.ceil(bomb_damage);
	if (hp_damage >= health_value)
		is_fatal = true;
	else
		is_fatal = false;

	c4_blowtime = parseFloat(c4_blowtime.toPrecision(3));
	if (!c4_ticking || c4_isdefused)
		return;

	if (c4_blowtime >= 1)
	{
		Render.GradientSkeet(7, y - 350 + 70 + 1 - sp_height - lc_height, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
		Render.String(x, y - 350 + 70 + 1 - sp_height - lc_height, 0, get_bombsite(c4_entity) + c4_blowtime.toFixed(1) + 's', [0, 0, 0, 255], font);
		Render.String(x, y - 350 + 70 - sp_height - lc_height, 0, get_bombsite(c4_entity) + c4_blowtime.toFixed(1) + 's', [255, 255, 255, 255], font);
	}
	if (c4_isdefusing > 0)
	{
		if (c4_blowtime > c4_defuselength && c4_blowtime >= 0.1)
		{
			Render.FilledRect(0, 0, 10, 1080, [25, 25, 25, 120]);
			Render.FilledRect(0, 1080 - c4_barlength, 10, 1080, [58, 191, 54, 120]);
			Render.Rect(0, 0, 10, 1080, [25, 25, 25, 120]);
		}
		else
		{
			Render.FilledRect(0, 0, 10, 1080, [25, 25, 25, 120]);
			Render.FilledRect(0, 1080 - c4_barlength, 10, 1080, [252, 18, 19, 120]);
			Render.Rect(0, 0, 10, 1080, [25, 25, 25, 120]);
		}
	}
	if (Entity.IsAlive(Entity.GetLocalPlayer()))
	{
		if (is_fatal)
		{
			Render.GradientSkeet(7, y - 315 + 1 - sp_height - lc_height, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
			Render.String(x, y - 315 + 1 - sp_height - lc_height, 0, 'FATAL', [0, 0, 0, 255], font);
			Render.String(x, y - 315 - sp_height - lc_height, 0, 'FATAL', [255, 1, 1, 255], font);
		}
		else
		{
			if (bomb_damage > 0.5)
			{
				Render.GradientSkeet(7, y - 315 + 1 - sp_height - lc_height, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
				Render.String(x, y - 315 + 1 - sp_height - lc_height, 0, '-' + hp_damage + ' HP', [0, 0, 0, 255], font);
				Render.String(x, y - 315 - sp_height - lc_height, 0, '-' + hp_damage + ' HP', [210, 216, 112, 255], font);
			}
			else
			{
				Render.GradientSkeet(7, y - 315 + 1 - sp_height - lc_height, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
				Render.String(x, y - 315 + 1 - sp_height - lc_height, 0, 'SAFE', [0, 0, 0, 255], font);
				Render.String(x, y - 315 - sp_height - lc_height, 0, 'SAFE', [132, 195, 16, 255], font);
			}
		}
	}
}

const on_player_connect = function ()
{
	on_plant_time = 0;
	fill = 0;
	planting = false;
	const c4_entity = Entity.GetEntitiesByClassID(128)[0];
	if (c4_entity == undefined)
		return;

	const c4_ticking = Entity.GetProp(c4_entity, 'CPlantedC4', 'm_bBombTicking');
	if (c4_ticking)
		isbomb = 70;
	else
		isbomb = 0;
}

const on_bomb_exploded = function ()
{
	isbomb = 0;
	on_plant_time = 0;
	fill = 0;
	planting = false;
}

const on_bomb_abortplant = function ()
{
	isbomb = 0;
	on_plant_time = 0;
	fill = 0;
	planting = false;
}

const on_bomb_beginplant = function ()
{
	on_plant_time = Globals.Curtime();
	bombsite = Event.GetInt('site');
	if (bombsite % 2 == 1)
		bombsiteonplant = 'Bombsite A';
	else
		bombsiteonplant = 'Bombsite B';
	isbomb = 35;
	planting = true;
}

const on_bomb_defused = function ()
{
	isbomb = 0;
	on_plant_time = 0;
	fill = 0;
	planting = false;
}

const on_round_start = function ()
{
	on_plant_time = 0;
	fill = 0;
	planting = false;
	isbomb = 0;
}

const on_bomb_plant = function ()
{
	on_plant_time = 0;
	isbomb = 70;
	fill = 0;
	planting = false;
}

/* Onetap Callbacks */
Cheat.RegisterCallback('Draw', 'on_paint'); 

/* CSGO Callbacks */
Cheat.RegisterCallback('player_connect_full', 'on_player_connect');
Cheat.RegisterCallback('bomb_abortplant', 'on_bomb_abortplant');
Cheat.RegisterCallback('bomb_beginplant', 'on_bomb_beginplant');
Cheat.RegisterCallback('bomb_defused', 'on_bomb_defused');
Cheat.RegisterCallback('round_start', 'on_round_start');
Cheat.RegisterCallback('bomb_planted', 'on_bomb_plant');
Cheat.RegisterCallback('bomb_exploded', 'on_bomb_exploded')
