var enable = true;
var screenSize = Global.GetScreenSize();

function render() {
	
var username = Cheat.GetUsername();
var myPing = Math.floor( 1 / Local.Latency());
var fakeyaw = Local.GetFakeYaw();
var realyaw = Local.GetRealYaw();
var dif = Math.abs(realyaw) - Math.abs(fakeyaw);
font = Render.AddFont("Tahoma", 10, 700);

  if (!enable) {
    return;
  }

  if(!Entity.GetLocalPlayer() || !Entity.IsValid( Entity.GetLocalPlayer()))
	return;

	Render.StringCustom( screenSize[0] / 6, 0, 0, "Hello " + username + " :)", [ 255, 255, 0, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 15, 0, "Hello llama :) ", [ 255, 255, 0, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 45, 0, "Triggerbot: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 60, 0, "BunnyHop: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 75, 0, "Radar: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 90, 0, "ESP: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 105, 0, "RankESP: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 120, 0, "Pingspike: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 135, 0, "AA: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 150, 0, "AA Mode: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 165, 0, "Clantag: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 180, 0, "FOV: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 195, 0, "Weapon FOV: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 210, 0, "Crosshair: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 225, 0, "Legit: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 6, 240, 0, "HS Only: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 4.3, 45, 0, "Slide: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 4.3, 60, 0, "NoRecoil: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 4.3, 75, 0, "Thirdperson: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 4.3, 90, 0, "Backtrack: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 4.3, 105, 0, "Fakelag: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 4.3, 120, 0, "Hitlog: ", [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 4.3, 135, 0, "Eventlog: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 4.3, 150, 0, "pSilent: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 4.3, 165, 0, "Hide Shots: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 4.3, 180, 0, "Doubletap: " , [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 4.3, 195, 0, "Safepoint: ", [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 4.3, 210, 0, "Ping: ", [ 255, 255, 255, 255 ], font );
	Render.StringCustom( screenSize[0] / 3.6, 210, 0, ""+myPing , [ 255, 255, 255, 255 ], font );


	//Triggerbot
	if (UI.GetValue("Legit", "GENERAL", "Triggerbot", "Enabled", true)) 
	{
			Render.StringCustom( screenSize[0] / 4.7, 45, 0, "ON", [ 6, 72, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 4.7, 45, 0, "OFF", [ 255, 255, 255, 255 ], font );
    }
	
	//BunnyHop
	if (UI.GetValue("Misc", "GENERAL", "Movement", "Auto bunnyhop", "Enabled", true)) 
	{
			Render.StringCustom( screenSize[0] / 4.7, 60, 0, "ON", [ 6, 72, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 4.7, 60, 0, "OFF", [ 255, 255, 255, 255 ], font );
    }
	
	//Radar
	if (UI.GetValue("Visual", "ENEMIES", "HUD", "Radar reveal", "Enabled", true))
	{
			Render.StringCustom( screenSize[0] / 4.7, 75, 0, "ON", [ 6, 72, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 4.7, 75, 0, "OFF", [ 255, 255, 255, 255 ], font );
    }

	//ESP
	if (UI.GetValue("Visual", "ENEMIES", "ESP", "Glow", "Enabled", true) || UI.GetValue("Visual", "ENEMIES", "ESP", "Box", "Enabled", true)|| UI.GetValue("Visual", "ENEMIES", "ESP", "Name", "Enabled", true)|| 
	UI.GetValue("Visual", "ENEMIES", "ESP", "Ammo", "Enabled", true)|| UI.GetValue("Visual", "ENEMIES", "ESP", "Dormant", "Enabled", true) || UI.GetValue("Visual", "ENEMIES", "ESP", "Health", "Enabled", true) 
	|| UI.GetValue("Visual", "ENEMIES", "ESP", "Skeleton", "Enabled", true) || UI.GetValue("Visual", "SELF", "ESP", "Glow", "Enabled", true)|| UI.GetValue("Visual", "SELF", "ESP", "Box", "Enabled", true)|| UI.GetValue("Visual", "SELF", "ESP", "Helath", "Enabled", true)
	|| UI.GetValue("Visual", "SELF", "ESP", "Name", "Enabled", true)|| UI.GetValue("Visual", "SELF", "ESP", "Ammo", "Enabled", true)|| UI.GetValue("Visual", "SELF", "ESP", "Shot timer", "Enabled", true)|| UI.GetValue("Visual", "SELF", "ESP", "Taser range", "Enabled", true)
	|| UI.GetValue("Visual", "SELF", "ESP", "Glow", "Enabled", true)|| UI.GetValue("Visual", "SELF", "ESP", "Knife range", "Enabled", true)|| UI.GetValue("Visual", "SELF", "ESP", "Weapon spread", "Enabled", true)|| UI.GetValue("Visual", "SELF", "ESP", "Weapon recoil", "Enabled", true)
	|| UI.GetValue("Visual", "FRIENDLIES", "ESP", "Box", "Enabled", true)|| UI.GetValue("Visual", "FRIENDLIES", "ESP", "Glow", "Enabled", true)|| UI.GetValue("Visual", "FRIENDLIES", "ESP", "Name", "Enabled", true)|| UI.GetValue("Visual", "FRIENDLIES", "ESP", "Health", "Enabled", true))
	{
			Render.StringCustom( screenSize[0] / 4.7, 90, 0, "ON", [ 6, 72, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 4.7, 90, 0, "OFF", [ 255, 255, 255, 255 ], font );
    }
	
	
	//RankESP
	if (UI.GetValue("Misc", "GENERAL", "Rank revealer", "Enabled", true)) 
	{
			Render.StringCustom( screenSize[0] / 4.7, 105, 0, "ON", [ 6, 72, 255, 255 ], font );
	}
		
    else
    {
              Render.StringCustom( screenSize[0] / 4.7, 105, 0, "OFF", [ 255, 255, 255, 255 ], font );
    }
	
	//Ping spike
	if (UI.GetValue("Misc", "GENERAL", "Extended backtracking", "Enabled", true)) 
	{
			Render.StringCustom( screenSize[0] / 4.7, 120, 0, "ON", [ 6, 72, 255, 255], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 4.7, 120, 0, "OFF", [ 255, 255, 255, 255 ], font );
    }
	
	//AA
	if (UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", true) || UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", true)) 
	{
			Render.StringCustom( screenSize[0] / 6, 30, 0, "Fake: "+ fakeyaw.toFixed(2), [ 255, 255, 0, 255 ], font );
			Render.StringCustom( screenSize[0] / 4.7, 30, 0, "Real: "+ realyaw.toFixed(2), [ 255, 255, 0, 255 ], font );
			Render.StringCustom( screenSize[0] / 3.6, 30, 0, "Diff: "+ Math.abs(dif.toFixed(2)), [ 51, 255, 51, 255 ], font );
			Render.StringCustom( screenSize[0] / 4.7, 135, 0, "ON", [6, 72, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 4.7, 135, 0, "OFF", [ 255, 255, 255, 255 ], font );
    }
	
	//AA Mode
	if (UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", true)) 
	{
			Render.StringCustom( screenSize[0] / 4.7, 150, 0, ("Legit"), [ 255, 255, 255, 255 ], font );
	}
	
	else if(UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", true)) 
	{
			Render.StringCustom( screenSize[0] / 4.7, 150, 0, ("Sync"), [ 255, 255, 255, 255 ], font );
	}
			
    else
	{
		Render.StringCustom( screenSize[0] / 4.7, 150, 0, "OFF", [ 255, 255, 255, 255 ], font );
	}
	
	//Clantag
	if (UI.GetValue("Misc", "GENERAL", "Clantag", true)) 
	{
			Render.StringCustom( screenSize[0] / 4.7, 165, 0, "ON", [ 6, 72, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 4.7, 165, 0, "OFF", [ 255, 255, 255, 255 ], font );
    }
	
	//FOV
	Render.StringCustom( screenSize[0] / 4.7, 180, 0, "" +UI.GetValue("Visual", "WORLD", "View", "Field of view"), [ 255, 255, 255, 255 ], font);
	
	//Weapon FOV
	Render.StringCustom( screenSize[0] / 4.7, 195, 0, "" +UI.GetValue("MISC", "SKINS", "Viewmodel", "FOV"), [ 255, 255, 255, 255 ], font);
	
	//Crosshair
	if (UI.GetValue("Visual", "SELF", "ESP", "Force crosshair", "Enabled", true))
	{
			Render.StringCustom( screenSize[0] / 4.7, 210, 0, "ON", [ 6, 72, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 4.7, 210, 0, "OFF", [ 255, 255, 255, 255 ], font );
    }
	
	//Legitbot
	if (UI.GetValue("Legit", "GENERAL", "General", "Enabled", true))
	{
			Render.StringCustom( screenSize[0] / 4.7, 225, 0, "ON", [ 6, 72, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 4.7, 225, 0, "OFF", [ 255, 255, 255, 255 ], font );
    }
	
	//HS Only
	if (UI.GetValue("Legit", "GENERAL", "Default config", "Hitbox priority", 0))
	{
			Render.StringCustom( screenSize[0] / 4.7, 240, 0, "OFF", [ 255, 255, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 4.7, 240, 0, "ON", [6, 72, 255, 255 ], font );
    }
	
	
	//Slide
	if (UI.GetValue("Misc", "GENERAL", "Movement", "Slide walk", "Enabled", true))
	{
		        Render.StringCustom( screenSize[0] / 3.6, 45, 0, "ON", [ 0, 255, 255, 255 ], font );
			
	}
			
    else
    {
				Render.StringCustom( screenSize[0] / 3.6, 45, 0, "OFF", [ 255, 255, 255, 255 ], font );
    }
	
	//Norecoil
	Render.StringCustom( screenSize[0] / 3.6, 60, 0, "" +UI.GetValue("Legit", "GENERAL", "Default config", "Recoil control"), [ 255, 255, 255, 255 ], font );
		
	//Thirdperson
	if (UI.IsHotkeyActive("Visual", "WORLD", "View", "Thirdperson"))
	{
			Render.StringCustom( screenSize[0] / 3.6, 75, 0, ("ON "+UI.GetValue("Visual", "WORLD", "View", "Thirdperson")), [ 0, 255, 255, 255 ], font );
			
	}
			
    else
    {
            Render.StringCustom( screenSize[0] / 3.6, 75, 0, "OFF", [ 255, 255, 255, 255 ], font );  
    }

	//Backtrack
	if (UI.GetValue("Legit", "GENERAL", "Backtracking", "Enabled", true))
	{
			Render.StringCustom( screenSize[0] / 3.6, 90, 0, ("Legit"), [ 0, 255, 255, 255 ], font );
	}
	
	else if (UI.GetValue("Rage", "GENERAL", "General", "Enabled", true))
	{
			Render.StringCustom( screenSize[0] / 3.6, 90, 0, ("LBY"), [ 0, 255, 255, 255 ], font );
	}
				
    else
		{
              Render.StringCustom( screenSize[0] / 3.6, 90, 0, "OFF", [255, 255, 255, 255  ], font );
    }
	
	//Fakelag
	if (UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled", true))
	{
			Render.StringCustom( screenSize[0] / 3.6, 105, 0, ("ON "+UI.GetValue("Anti-Aim", "Fake-Lag", "Limit")), [ 0, 255, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 3.6, 105, 0, "OFF", [ 255, 255, 255, 255  ], font );
    }
		
	//Hitlog
	if (UI.GetValue("Misc", "Log output", true))
	{
			Render.StringCustom( screenSize[0] / 3.6, 120, 0, "ON", [ 0, 255, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 3.6, 120, 0, "OFF", [ 255, 255, 255, 255  ], font );
    }
	
	//Eventlog
	if (UI.GetValue("Misc", "Log events", true))
	{
			Render.StringCustom( screenSize[0] / 3.6, 135, 0, "ON", [ 0, 255, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 3.6, 135, 0, "OFF", [ 255, 255, 255, 255  ], font );
    }
	
	//Silent Aim
	if (UI.GetValue("Rage", "GENERAL", "General", "Silent", "Enabled", true) && UI.GetValue("Rage", "GENERAL", "General", "Enabled", true))
	{
			Render.StringCustom( screenSize[0] / 3.6, 150, 0, "ON", [ 0, 255, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 3.6, 150, 0, "OFF", [ 255, 255, 255, 255  ], font );
    }
	
	//Hide Shots
	if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots"))
	{
			Render.StringCustom( screenSize[0] / 3.6, 165, 0, "ON", [ 0, 255, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 3.6, 165, 0, "OFF", [ 255, 255, 255, 255  ], font );
    }
	
	//Doubletap
	if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap"))
	{
			Render.StringCustom( screenSize[0] / 3.6, 180, 0, "ON", [ 0, 255, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 3.6, 180, 0, "OFF", [ 255, 255, 255, 255 ], font );
    }
	
	//Safepoint
	if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Safe point override"))
	{
			Render.StringCustom( screenSize[0] / 3.6, 195, 0, "ON", [ 0, 255, 255, 255 ], font );
	}
			
    else
    {
              Render.StringCustom( screenSize[0] / 3.6, 195, 0, "OFF", [ 255, 255, 255, 255 ], font );
    }

}
function main() {
  if (Global.FrameStage() !== 2) {
    return;
  }
  
  var me = Entity.GetLocalPlayer();

  if (!Entity.IsAlive(me)) {
    return;
  }

  enable = UI.IsHotkeyActive('MISC', 'JAVASCRIPT', 'Script items', 'x88');
}

function init() {
  UI.AddHotkey('x88');
  Global.RegisterCallback('FrameStageNotify', 'main');
  Global.RegisterCallback('Draw', 'render');
}

init();