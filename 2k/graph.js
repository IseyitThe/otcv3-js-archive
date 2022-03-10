
function isDoubleTapActive() {
    var isCheckboxActive = UI.GetValue("Rage", "Exploits", "Doubletap");
    var isKeyActive = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");

    return isCheckboxActive && isKeyActive;
}
function isHActive() {
    var isCheckboxActive = UI.GetValue("Rage", "Exploits", "Hide shots");
    var isKeyActive = UI.IsHotkeyActive("Rage", "Exploits", "Hide shots");

    return isCheckboxActive && isKeyActive;
}


/*
Render.Circle( x1 - 15, y4 + 42, 13, [ 0, 0, 0, 255 ] );	
Render.Circle( x1 - 16, y4 + 43, 13, [ 255, 255, 255, 255 ] );
*/

function GetVelocity()
{
    var velocity = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

function draw() 
{
	var ping = Math.round(Local.Latency() * 1000 - 16)
    var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();
    var hours = hours1 <= 9 ? "0" + today.getHours() + ":" : today.getHours() + ":";
    var minutes = minutes1 <= 9 ? "0" + today.getMinutes() + ":" : today.getMinutes() + ":";
    var seconds = seconds1 <= 9 ? "0" + today.getSeconds() : today.getSeconds()    ;
	var screen_size = Render.GetScreenSize()
	var font2 = Render.AddFont( "Verdana", 7, 700);
	var font3 = Render.AddFont( "Verdana", 14, 500);
	var local = Entity.GetLocalPlayer();
    var text = "latency: " + (ping * 1) + "ms " + " ticks: " + Globals.Tickrate().toString() + "  time: " + hours + minutes + seconds ;   
    var fps = Math.floor(1 / Global.Frametime());
	
	g_Local_weapon = Entity.GetWeapon(local);
    weapon_name = Entity.GetName(g_Local_weapon);
    g_Local_classname = Entity.GetClassName(g_Local_weapon);

	var x1 = screen_size[0] / 2;
	var y1 = screen_size[1] - 148;
	
	var x2 = screen_size[0] / 2 + 25;
	var y2 = screen_size[1] - 110;
	
	var x3 = screen_size[0] / 2 - 25;
	var y3 = screen_size[1] - 110;		   
	
	var y4 = screen_size[1] - 125;	
	   
	   if(!Entity.IsAlive(local))
        return;
//!!!!!!!!

	Render.StringCustom(screen_size[0] / 2 - 16, screen_size[1] - 92, 0, "!", [0,0,0,255], font3 );    
	Render.StringCustom(screen_size[0] / 2 - 16, screen_size[1] - 94, 0, "!", [0,0,0,255], font3 );    
	Render.StringCustom(screen_size[0] / 2 - 17, screen_size[1] - 93, 0, "!", [0,0,0,255], font3 );    
	Render.StringCustom(screen_size[0] / 2 - 15, screen_size[1] - 93, 0, "!", [0,0,0,255], font3 );               
	Render.StringCustom(screen_size[0] / 2 - 16, screen_size[1] - 93, 0, "!", [255,255,255,255], font3 );               
//top
	Render.Line( screen_size[0] / 2 - 17, screen_size[1] - 96, screen_size[0] / 2 - 11, screen_size[1] - 96, [ 255, 255, 255, 195 ] );
	Render.Line( screen_size[0] / 2 - 17, screen_size[1] - 95, screen_size[0] / 2 - 11, screen_size[1] - 95, [ 255, 255, 255, 195 ] );

	Render.Line( screen_size[0] / 2 - 18, screen_size[1] - 95, screen_size[0] / 2 - 10, screen_size[1] - 95, [ 255, 255, 255, 195 ] );
	Render.Line( screen_size[0] / 2 - 18, screen_size[1] - 94, screen_size[0] / 2 - 10, screen_size[1] - 94, [ 255, 255, 255, 195 ] );
//бока
	Render.Line( screen_size[0] / 2 - 19, screen_size[1] - 93, screen_size[0] / 2 - 26, screen_size[1] - 75, [ 255, 255, 255, 195 ] );
	Render.Line( screen_size[0] / 2 - 19, screen_size[1] - 93, screen_size[0] / 2 - 26, screen_size[1] - 75, [ 255, 255, 255, 195 ] );
	Render.Line( screen_size[0] / 2 - 9, screen_size[1] - 93, screen_size[0] / 2 - 2, screen_size[1] - 75, [ 255, 255, 255, 195 ] );	
	Render.Line( screen_size[0] / 2 - 9, screen_size[1] - 93, screen_size[0] / 2 - 2, screen_size[1] - 75, [ 255, 255, 255, 195 ] );
//низ
	Render.Line( screen_size[0] / 2 - 23, screen_size[1] - 72, screen_size[0] / 2 - 5, screen_size[1] - 72, [ 255, 255, 255, 195 ] );
	Render.Line( screen_size[0] / 2 - 23, screen_size[1] - 71, screen_size[0] / 2 - 5, screen_size[1] - 71, [ 255, 255, 255, 195 ] );
	Render.Line( screen_size[0] / 2 - 23, screen_size[1] - 70, screen_size[0] / 2 - 5, screen_size[1] - 70, [ 255, 255, 255, 195 ] );
//низ право
	Render.Line( screen_size[0] / 2 - 5, screen_size[1] - 71, screen_size[0] / 2 - 2, screen_size[1] - 75, [ 255, 255, 255, 195 ] );
	Render.Line( screen_size[0] / 2 - 5, screen_size[1] - 71, screen_size[0] / 2 - 2, screen_size[1] - 75, [ 255, 255, 255, 195 ] );
//низ лев
	Render.Line( screen_size[0] / 2 - 23, screen_size[1] - 71, screen_size[0] / 2 - 26, screen_size[1] - 75, [ 255, 255, 255, 165 ] );
	Render.Line( screen_size[0] / 2 - 23, screen_size[1] - 71, screen_size[0] / 2 - 26, screen_size[1] - 75, [ 255, 255, 255, 195 ] );
	
	
//text	
	Render.StringCustom(screen_size[0] / 2 - 101 , screen_size[1] - 80, 0, "packet choke", [0,0,0,255], font2 );    
	Render.StringCustom(screen_size[0] / 2 - 100, screen_size[1] - 81, 0, "packet choke", [255,255,255,255], font2 );

	Render.StringCustom(screen_size[0] / 2 + 4 , screen_size[1] - 80, 0, "choke: 0%", [0,0,0,255], font2 );    
	Render.StringCustom(screen_size[0] / 2 + 5, screen_size[1] - 81, 0, "choke: 0%", [255,255,255,255], font2 );	

	Render.StringCustom(screen_size[0] / 2 + 4, screen_size[1] - 66, 0, "loss: 0% (+- 0.5)", [0,0,0,255], font2 );    
	Render.StringCustom(screen_size[0] / 2 + 5, screen_size[1] - 67, 0, "loss: 0% (+- 0.5)", [255,255,255,255], font2 );	
	
	Render.StringCustom(screen_size[0] / 2 - 101 , screen_size[1] - 51, 0, "velocity: " + (GetVelocity().toFixed(0)).toString() + " u/s " + " ticks: " + Globals.Tickrate().toString() + "  time: " + hours + minutes + seconds, [0,0,0,255], font2 );    
	Render.StringCustom(screen_size[0] / 2 - 100, screen_size[1] - 52, 0, "velocity: " + (GetVelocity().toFixed(0)).toString() + " u/s " + " ticks: " + Globals.Tickrate().toString() + "  time: " + hours + minutes + seconds, [255,255,255,255], font2 );

	Render.StringCustom(screen_size[0] / 2 - 101, screen_size[1] - 66, 0, "latency: " + (ping * 1), [0,0,0,255], font2 );    
	Render.StringCustom(screen_size[0] / 2 - 100, screen_size[1] - 67, 0, "latency: " + (ping * 1), [255,255,255,255], font2);

	Render.StringCustom(screen_size[0] / 2 - 48, screen_size[1] - 66, 0, "fps: " + fps , [0,0,0,255], font2 );    
	Render.StringCustom(screen_size[0] / 2 - 47, screen_size[1] - 67, 0, "fps: " + fps, [255,255,255,255], font2);
//LG
	Render.StringCustom(screen_size[0] / 2 - 48, screen_size[1] - 21, 0, "lagcomp: ", [0,0,0,255], font2 );
	Render.StringCustom(screen_size[0] / 2 - 47, screen_size[1] - 22, 0, "lagcomp: ", [255,255,255,255], font2 );
	if (isHActive() == 1)
	{	
	Render.StringCustom(screen_size[0] / 2 +3, screen_size[1] - 21, 0, "broken", [0, 0, 0,255], font2 );
	Render.StringCustom(screen_size[0] / 2 +2, screen_size[1] - 22, 0, "broken", [42, 250, 87,255], font2 );
	}
	if (isDoubleTapActive() == 0 && isHActive() == 0)
	{	
	Render.StringCustom(screen_size[0] / 2 +3, screen_size[1] - 21, 0, "unsafe", [0, 0, 0,255], font2 );
	Render.StringCustom(screen_size[0] / 2 +2, screen_size[1] - 22, 0, "unsafe", [250, 42, 42,255], font2 );
	}
	if (isDoubleTapActive() == 1 || isHActive() == 1)
	{	
	Render.StringCustom(screen_size[0] / 2 +3, screen_size[1] - 21, 0, "broken", [0, 0, 0,255], font2 );
	Render.StringCustom(screen_size[0] / 2 +2, screen_size[1] - 22, 0, "broken", [42, 250, 87,255], font2 );
	}	
	if (isDoubleTapActive() == 1 || isHActive() == 1)
	{	
	Render.StringCustom(screen_size[0] / 2 +3, screen_size[1] - 21, 0, "broken", [0, 0, 0,255], font2 );
	Render.StringCustom(screen_size[0] / 2 +2, screen_size[1] - 22, 0, "broken", [42, 250, 87,255], font2 );
	}	
}
Cheat.RegisterCallback("Draw", "draw");