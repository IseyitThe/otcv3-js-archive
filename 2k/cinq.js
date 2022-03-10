var screen_size = Global.GetScreenSize();
var isLeftActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Left Hotkey" );
var isRightActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Right Hotkey" );
var isBackwardsActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Backwards Hotkey" );
var isHideRealActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "HideReal Hotkey" );
var isInverted; 
var drawLeft = 1; drawHideReal = 1;
var drawRight = 0, drawBack = 0;
		
function drawString()
{
	isHideshots = UI.IsHotkeyActive("Rage", "Exploits", "Hide shots");
	isSafepoint = UI.IsHotkeyActive("Rage", "General", "Safe point override");
	isDoubletap = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
	isInverted = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter");
	Render.String(screen_size[0] /2 , screen_size[1] /2 +50, 0, "DESYNC", [ 177, 151, 255, 255 ],3 );
	var colors = UI.GetColor("MISC", "JAVASCRIPT", "Script items", "Indicator color");
	
	if(drawLeft)
	{
		Render.String(screen_size[0] /2 -50, screen_size[1] /2 -20, 1,  "<", [ colors[0], colors[1], colors[2], 255 ], 4 );
		Render.String(screen_size[0] /2 +50, screen_size[1] /2 -20, 1,  ">", [ 255, 255, 255, 255 ], 4 );
		Render.String(screen_size[0] /2, screen_size[1] /2 +30, 1,  "v", [ 255, 255, 255, 255 ], 4 );
		Render.String(screen_size[0] /2 , screen_size[1] /2 +58, 0, isInverted ? "LEFT" : "RIGHT", [ 177, 151, 255, 255 ],3 );
		Render.String(screen_size[0] /2 , screen_size[1] /2 +66, 0, isHideshots ? "HIDE" : "HIDE", isHideshots ? [ 124, 195, 13, 255 ] : [ 255, 0, 0, 255 ],3 );
		Render.String(screen_size[0] /2 , screen_size[1] /2 +74, 0, isDoubletap ? "DT" : "DT", isDoubletap ? [ 124, 195, 13, 255 ] : [ 255, 0, 0, 255 ],3 );
		Render.String(screen_size[0] /2 , screen_size[1] /2 +82, 0, isSafepoint ? "SP" : "SP", isSafepoint ? [ 124, 195, 13, 255 ] : [ 255, 0, 0, 255 ],3 );
	}
	else if(drawRight)
	{	
		Render.String(screen_size[0] /2 -50, screen_size[1] /2 -20, 1,  "<", [ 255, 255, 255, 255 ], 4 );
		Render.String(screen_size[0] /2 +50, screen_size[1] /2 -20, 1,  ">", [ colors[0], colors[1], colors[2], 255 ], 4 );
		Render.String(screen_size[0] /2, screen_size[1] /2 +30, 1,  "v", [ 255, 255, 255, 255 ], 4 )
		Render.String(screen_size[0] /2 , screen_size[1] /2 +58, 0, isInverted ? "LEFT" : "RIGHT", [ 177, 151, 255, 255 ],3 );
		Render.String(screen_size[0] /2 , screen_size[1] /2 +66, 0, isHideshots ? "HIDE" : "HIDE", isHideshots ? [ 124, 195, 13, 255 ] : [ 255, 0, 0, 255 ],3 );
		Render.String(screen_size[0] /2 , screen_size[1] /2 +74, 0, isDoubletap ? "DT" : "DT", isDoubletap ? [ 124, 195, 13, 255 ] : [ 255, 0, 0, 255 ],3 );
		Render.String(screen_size[0] /2 , screen_size[1] /2 +82, 0, isSafepoint ? "SP" : "SP", isSafepoint ? [ 124, 195, 13, 255 ] : [ 255, 0, 0, 255 ],3 );
	}
	else if(drawBack)
	{
		Render.String(screen_size[0] /2 -50, screen_size[1] /2 -20, 1,  "<", [ 255, 255, 255, 255 ], 4 );
		Render.String(screen_size[0] /2 +50, screen_size[1] /2 -20, 1,  ">", [ 255, 255, 255, 255 ], 4 );
		Render.String(screen_size[0] /2, screen_size[1] /2 +30, 1,  "v", [ colors[0], colors[1], colors[2], 255 ], 4 );	
		Render.String(screen_size[0] /2 , screen_size[1] /2 +58, 0, isInverted ? "LEFT" : "RIGHT", [ 177, 151, 255, 255 ],3 );
		Render.String(screen_size[0] /2 , screen_size[1] /2 +66, 0, isHideshots ? "HIDE" : "HIDE", isHideshots ? [ 124, 195, 13, 255 ] : [ 255, 0, 0, 255 ],3 );
		Render.String(screen_size[0] /2 , screen_size[1] /2 +74, 0, isDoubletap ? "DT" : "DT", isDoubletap ? [ 124, 195, 13, 255 ] : [ 255, 0, 0, 255 ],3 );
		Render.String(screen_size[0] /2 , screen_size[1] /2 +82, 0, isSafepoint ? "SP" : "SP", isSafepoint ? [ 124, 195, 13, 255 ] : [ 255, 0, 0, 255 ],3 );
	
	}
	else if(drawHideReal)
	{
		Render.String(screen_size[0] /2 -50, screen_size[1] /2 -20, 1,  "<", [ 255, 255, 255, 255 ], 4 );
		Render.String(screen_size[0] /2 +50, screen_size[1] /2 -20, 1,  ">", [ 255, 255, 255, 255 ], 4 );
		Render.String(screen_size[0] /2, screen_size[1] /2 +30, 1,  "v", [ 255, 255, 255, 255 ], 4 );
		Render.String(screen_size[0] /2 , screen_size[1] /2 +58, 0, isHideshots ? "HIDE" : "HIDE", isHideshots ? [ 124, 195, 13, 255 ] : [ 255, 0, 0, 255 ],3 );
		Render.String(screen_size[0] /2, screen_size[1] /2 +66, 0, isDoubletap ? "DT" : "DT", isDoubletap ? [ 124, 195, 13, 255 ] : [ 255, 0, 0, 255 ],3 );
		Render.String(screen_size[0] /2 , screen_size[1] /2 +74, 0, isSafepoint ? "SP" : "SP", isSafepoint ? [ 124, 195, 13, 255 ] : [ 255, 0, 0, 255 ],3 );
	}
}

function onCreateMove()
{
	isLeftActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Left Hotkey" );
	isRightActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Right Hotkey" );
	isBackwardsActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Backwards Hotkey" );
	isHideRealActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "HideReal Hotkey" );
	
	if(isLeftActive)
	{	
		drawLeft = 1;
		drawBack = 0;
		drawRight = 0;
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -90 );
		UI.SetValue( "Anti-Aim", "Fake Angles", "Hide real angle", false);
	}
	else if(isRightActive)
	{	
		drawLeft = 0;
		drawBack = 0;
		drawRight = 1;
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 90 );
		UI.SetValue( "Anti-Aim", "Fake Angles", "Hide real angle", false);
		
	}
	else if(isBackwardsActive)
	{	
		drawLeft = 0;
		drawBack = 1;
		drawRight = 0;
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0 );
		UI.SetValue( "Anti-Aim", "Fake Angles", "Hide real angle", false);
	}
	else if(isHideRealActive)
	{
		drawLeft = 0;
		drawBack = 0;
		drawRight = 0;
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0 );
		UI.SetValue("Anti-Aim", "Fake Angles", "Hide real angle", true);
	}
}

function Main()
{
	UI.AddHotkey( "Left Hotkey" );
	UI.AddHotkey( "Right Hotkey" );
	UI.AddHotkey( "Backwards Hotkey" );
	UI.AddHotkey( "HideReal Hotkey" );
	UI.AddColorPicker("Indicator color");
	
	//  callbacks
	Global.RegisterCallback("Draw", "drawString")
	Global.RegisterCallback("CreateMove", "onCreateMove")
}
Main();
