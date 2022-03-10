notspam = 0; netspam = 0; x = -45; y = Render.GetScreenSize()[1] - 75; w = 360; h = 75; whit = 0; bomb = 0; bombsite = -1; white = 200;health2 = 0;armor2 = 0;
UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Force sv_cheats", true)
UI.AddCheckbox("Better HUD");
UI.AddCheckbox("Gamesense Menu");
if (Convar.GetString("cl_detail_max_sway") == 5){
	Cheat.PrintColor([255,255,255,255], ("["));
	Cheat.PrintColor([60,255,60,255], ("SCRIPT"));
	Cheat.PrintColor([255,255,255,255], ("] By")); 
	Cheat.PrintColor([255,60,60,255], (" Zero Two \n"));
	Convar.SetString ("cl_detail_max_sway", "5.1");
}

function on_bomb_beginplant(){
	bomb = 1;
	bombsite = Event.GetInt("site");
	last_time = Globals.Curtime();
}
function on_bomb_abortplant()
{
    bomb = 0;
	bombsite = -1;
}
function on_bomb_exploded()
{
    bomb = 0;
	bombsite = -1;
}	
function endround(){
	bomb = 0;
	bombsite = -1;
}
function on_bomb_defused(){
	bomb = 0;
	bombsite = -1;
	white = 200;
}
function on_bomb_begindefuse(){
	white = 50;
}
function on_bomb_abortdefuse(){
	white = 200;
}
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

function main(){
if (!Entity.IsValid(Entity.GetLocalPlayer())) return
	if (UI.GetValue("Script Items", "Better HUD")){
		health = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_iHealth");
		armor = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayerResource", "m_iArmor");
		
		if (health2 != health){
			if (health2 < health){
				health2 = health2 + 1;
			}else{
				health2 = health2 - 1;
			}
		}
		if (armor2 != armor){
			if (armor2 < armor){
				armor2 = armor2 + 1;
			}else{
				armor2 = armor2 - 1;
			}
		}
		
		var text = "" + health2;
		var text2 = "" + armor2;
			
		var red = 255 - (health2 * 2.55);
		var green = health2 * 2.55
			
		var font = Render.AddFont( "Arial", 15, 100);
			
		if (Entity.IsAlive(Entity.GetLocalPlayer())){
			if (UI.GetValue("Script Items", "Gamesense Menu")){
			Render.FilledRect( x + 45, y, w, h, [ 40, 40, 40, 255 ] );
			Render.FilledRect( x + 50, y + 7, w-11, h-12 , [ 19, 19, 19, 255 ] );
			Render.Rect( x + 50, y + 5, w-10, h-9, [ 50, 50, 50, 255 ] );
			colors  = HSVtoRGB(Global.Realtime() * 0.1, 1, 1);
			Render.GradientRect(x + 51, y + 6, w-12, 1, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
				
			h = 75;
			y = Render.GetScreenSize()[1] - 75;
			if (bomb == 1){
				arfor = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayerResource", "m_iArmor");
				var c4 = Entity.GetEntitiesByClassID(128)[0];
				
				h = 105;
				y = Render.GetScreenSize()[1] - 105;
				if (bombsite % 2 == 0){
					Render.StringCustom( x + 70, y + 18, 0, "Bombsite: B", [ 255, 255, 255, 255 ], font );
				}else{
					Render.StringCustom( x + 70, y + 18, 0, "Bombsite: A", [ 255, 255, 255, 255 ], font );
				}
				Render.Rect( x + 190, y + 26, 140, 8, [ 200, 200, 200, 200] );
				
				if ((Globals.Curtime() - last_time) / 3.125 < 1){
					Render.FilledRect( x + 191, y + 27, ((Globals.Curtime() - last_time) / 3.125)*140, 6, [ 200, 200, 200, 200] )
				}
 
				if (c4 != undefined) {
					var timer = (Entity.GetProp(c4, "CPlantedC4", "m_flC4Blow") - Globals.Curtime());
					var eLoc = Entity.GetRenderOrigin(c4);
					var lLoc = Entity.GetRenderOrigin(Entity.GetLocalPlayer())
					var distance = calcDist(eLoc, lLoc);
					var willKill = false;
					var dmg;
					var length = Entity.GetProp(c4, "CPlantedC4", "m_flTimerLength");
					var timer2 = timer^ 0;
					var timer2 = timer2 + 1;
					var text3 = "" + timer2;
					Render.StringCustom( x + 195 + (timer * 3.47), y + 31, 0, text3, [ 255, 255, 255, 255 ], 2 );
					Render.FilledRect( x + 191, y + 27, (timer * 3.47), 6, [ white, white, 200, 200] )
				
					const a = 450.7;
					const b = 75.68;
					const c = 789.2;
				 
					const d = (distance - b) / c;
				 
					var damage = a * Math.exp(-d * d);
				 
					if (arfor > 0) {
						var newDmg = damage * 0.5;
						var armorDmg = (damage - newDmg) * 0.5;
				 
						if (armorDmg > arfor) {
							arfor = arfor * (1 / .5);
							newDmg = damage - armorDmg;
						}
						damage = newDmg;
					}
					dmg = Math.ceil(damage);
				
					if (dmg >= health)
						willKill = true;
					else
						willKill = false;
				
					if (willKill) {
						Render.StringCustom(x + 333, y + 19, 0, "LETHAL", [255, 0, 0, 255], 9);
					} else if (damage > 10) {
						Render.StringCustom(x + 340, y + 18, 0, "-" + dmg, [255, 255, 255, 255], font);
					}
				}
			}

			whit = 200;
			}else{
				whit = 0;
			}
		//hp
		Render.Rect( 25, Render.GetScreenSize()[1] - 27, 116, 8, [ whit, whit, whit, 200 ] );
		Render.StringCustom( 99, Render.GetScreenSize()[1] - 53, 0, "HP", [ 0, 0, 0, 255 ], font );
		Render.StringCustom( 100, Render.GetScreenSize()[1] - 52, 0, "HP", [ 255, 255, 255, 255 ], font );
			
		Render.StringCustom( 27, Render.GetScreenSize()[1] - 53, 0, text, [ 0, 0, 0, 255 ], font );
		Render.StringCustom( 28, Render.GetScreenSize()[1] - 52, 0, text, [ red, green, 0, 255 ], font );
		Render.FilledRect( 26, Render.GetScreenSize()[1] - 26, (health2 * 1.145), 6, [red, green, 0, 255]);

		//armor
		Render.Rect( 174, Render.GetScreenSize()[1] - 27, 160, 8, [ whit, whit, whit, 200] );
		Render.StringCustom( 244, Render.GetScreenSize()[1] - 53, 0, "ARMOR", [ 0, 0, 0, 255 ], font );
		Render.StringCustom( 245, Render.GetScreenSize()[1] - 52, 0, "ARMOR", [ 255, 255, 255, 255 ], font );
			
		Render.StringCustom( 173, Render.GetScreenSize()[1] - 53, 0, text2, [ 0, 0, 0, 255 ], font );
		Render.StringCustom( 174, Render.GetScreenSize()[1] - 52, 0, text2, [ 7, 169, 232, 255 ], font );
		Render.FilledRect( 175, Render.GetScreenSize()[1] - 26, (armor2 * 1.58), 6, [7, 169, 232, 255]);
		
			if ((UI.GetValue("Script Items", "Better HUD")) && (notspam == 0)){
				Cheat.ExecuteCommand("hidehud 8");
				notspam = 1;
			}
			if (netspam == 1){
				Cheat.ExecuteCommand("hidehud 8");
				netspam = 0;	
			}
		}else{
			if (netspam == 0){
				Cheat.ExecuteCommand("hidehud 0");
				netspam = 1;
			}
		}
	}else{
	if (notspam == 1){
		Cheat.ExecuteCommand("hidehud 0");
		notspam = 0;
	}
	}
}

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

Cheat.RegisterCallback("bomb_abortdefuse", "on_bomb_abortdefuse");
Cheat.RegisterCallback("bomb_begindefuse", "on_bomb_begindefuse");
Global.RegisterCallback('round_end', 'endround');
Cheat.RegisterCallback("bomb_exploded", "on_bomb_exploded");
Cheat.RegisterCallback("bomb_defused", "on_bomb_defused");
Cheat.RegisterCallback("bomb_abortplant", "on_bomb_abortplant");
Cheat.RegisterCallback("bomb_beginplant", "on_bomb_beginplant");
Cheat.RegisterCallback("Draw", "main");