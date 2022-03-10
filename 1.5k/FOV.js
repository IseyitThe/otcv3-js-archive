UI.AddSliderInt("FOV", 0, 150);
UI.AddSliderInt("FOV Scoped", 0, 150);
UI.AddSliderInt("Thidperson", 0, 150);

function drawfov()
{	
var fov = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "FOV");
var fov2 = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "FOV Scoped");
var tp = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Thidperson");
g_Local = Entity.GetLocalPlayer( );
	
	var localScoped = Boolean(Entity.GetProp(g_Local, "CCSPlayer", "m_bIsScoped"));
	if(localScoped) 
	{

		UI.SetValue("Visual", "World", "View", "Field of view", fov2); 

	}
	else {

		UI.SetValue("Visual", "World", "View", "Field of view", fov);
		UI.SetValue("Visual", "World", "View", "Thirdperson", tp);

	}	
}
	Global.RegisterCallback("Draw", "drawfov")
	//made by -xgor#4727