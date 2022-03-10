var screen_size = Global.GetScreenSize();
var isLeftActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Left Hotkey" );
var isRightActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Right Hotkey" );
var isBackActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Back Hotkey" );
var isInverted;
var drawLeft = 0;
var drawRight = 0;
var drawBack = 1;
var swayOpposite = 1;
//DT vars
var indicator = true;
var iExploitID = 0;
var bDoubleTapped = false;
var bShouldRecharge = false;
var ForceCharge = false;
var iLastShotTime = 0;
runTime = Global.Curtime();
var secondsElapsed = 0;
waiting = indicator ? 0 : 1;
//ui
UI.AddColorPicker("Dsync Color");
UI.AddColorPicker("Double tap Onkey Color");
UI.AddColorPicker("Minimum damage Onkey Color");
UI.AddColorPicker("Hide shots Onkey Color");
UI.AddColorPicker("Anim Color");
UI.AddColorPicker("Hitbox override Onkey Color");
UI.AddColorPicker("Selected arrow color");
UI.AddHotkey( "Left Hotkey" );
UI.AddHotkey( "Back Hotkey" );
UI.AddHotkey( "Right Hotkey" );
UI.AddCheckbox("DT");
UI.AddDropdown("DT Mode", ["DT", "Passive"]);
UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 1 );

//Polygon Points
LPx = [(screen_size[0] /2) - 50, (screen_size[1] /2) + 10];
LPy = [(screen_size[0] /2) - 50, (screen_size[1] /2) - 10];
LPz = [(screen_size[0] /2) - 70, (screen_size[1] /2)];
RPx = [(screen_size[0] /2) + 50, (screen_size[1] /2) + 10];
RPy = [(screen_size[0] /2) + 50, (screen_size[1] /2) - 10];
RPz = [(screen_size[0] /2) + 70, (screen_size[1] /2)];
LPxx = [(screen_size[0] /2) - 49, (screen_size[1] /2) + 12];
LPyy = [(screen_size[0] /2) - 49, (screen_size[1] /2) - 12];
LPzz = [(screen_size[0] /2) - 73, (screen_size[1] /2)];
RPxx = [(screen_size[0] /2) + 49, (screen_size[1] /2) + 12];
RPyy = [(screen_size[0] /2) + 49, (screen_size[1] /2) - 12];
RPzz = [(screen_size[0] /2) + 73, (screen_size[1] /2)];
BPx = [(screen_size[0] /2) + 10, (screen_size[1] /2) + 50];
BPy = [(screen_size[0] /2) - 10, (screen_size[1] /2) + 50];
BPz = [(screen_size[0] /2), (screen_size[1] /2) + 70];
BPxx = [(screen_size[0] /2) + 12, (screen_size[1] /2) + 49];
BPyy = [(screen_size[0] /2) - 12, (screen_size[1] /2) + 49];
BPzz = [(screen_size[0] /2), (screen_size[1] /2) + 73];
   
function drawString()
{
    textcp = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Dsync Color");
	dtcp = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Double tap Onkey Color");
	dmgcp = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Minimum damage Onkey Color");
	hidecp = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Hide shots Onkey Color");
	animcp = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Anim Color");
	hitcp = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Hitbox override Onkey Color");
    selectedcp = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Selected arrow color");
    selected_red = selectedcp[0];
    selected_green = selectedcp[1];
    selected_blue = selectedcp[2];
    selected_alpha = selectedcp[3];
	text_red = textcp[0];
    text_green = textcp[1];
    text_blue = textcp[2];
    text_alpha = textcp[3];
	hide_red = hidecp[0];
	hide_green = hidecp[1];
	hide_blue = hidecp[2];
	hide_alpha = hidecp[3];
	hit_red = hitcp[0];
	hit_green = hitcp[1];
	hit_blue = hitcp[2];
	hit_alpha = hitcp[3];
	dt_red = dtcp[0];
	dt_green = dtcp[1];
    dt_blue = dtcp[2];
    dt_alpha = dtcp[3];
	dmg_red = dmgcp[0];
	dmg_green = dmgcp[1];
    dmg_blue = dmgcp[2];
    dmg_alpha = dmgcp[3];
	anim_red = animcp[0];
	anim_green = animcp[1];
    anim_blue = animcp[2];
    anim_alpha = animcp[3];
    const alpha = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / .75)) % (Math.PI * 2))) * 255;
    const alphaa = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / 2)) % (Math.PI * 2))) * 255;
    isHideshots = UI.IsHotkeyActive("Rage", "Exploits", "Hide shots");
    isFakeduck = UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck");
    isDoubletap = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
    isInverted = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter" );
    isDmgActive = UI.IsHotkeyActive("Rage", "GENERAL", "Accuracy", "Minimum damage (on key)");
	isHitboxOverride = UI.IsHotkeyActive("Rage", "General config", "Hitbox override");
	swayOpposite = UI.GetValue("Anti-Aim", "Fake angles", "LBY mode");
    var difference = Math.abs( Local.GetRealYaw( ) - Local.GetFakeYaw( ) );
    localplayer_index = Entity.GetLocalPlayer( );
    localplayer_alive = Entity.IsAlive( localplayer_index );
   
    if (localplayer_alive == true){
    //Shadows
    Render.Polygon([LPxx, LPzz, LPyy], [0, 0, 0, 60] );
    Render.Polygon([RPyy, RPzz, RPxx], [0, 0, 0, 60] );
    Render.Polygon([BPyy, BPxx, BPzz], [0, 0, 0, 60] );
    //Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +101, 1, "FAKE", [ 0, 0, 0, 255 ], 3 );
    Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +111, 1, isInverted ? "LEFT" : "RIGHT", [ 0, 0, 0, 255 ], 3 );
    Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +121, 1, isDoubletap ? "DT" : "DT", isDoubletap ? [ 0, 0, 0, 255 ] : [ 0, 0, 0, 255 ], 3 );
    Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +131, 1, isDmgActive ? "DMG" : "WALL", isDmgActive ? [ 0, 0, 0, 255 ] : [ 0, 0, 0, 255 ], 3 );
    Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +141, 1, isHideshots ? "HIDE" : "ANIM", isHideshots ? [ 0, 0, 0, 255 ] : [ 0, 0, 0, 255 ], 3 );
	Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +151, 1, isHitboxOverride ? "HITBOX" : "", isHitboxOverride ? [ 0, 0, 0, 255 ] : [ 0, 0, 0, 255 ],3 );
    Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +161, 1, isFakeduck ? "DUCK" : "", isFakeduck ? [ 0, 0, 0, 255 ] : [ 0, 0, 0, 0 ], 3 );
   
   		if (swayOpposite == 0)
			Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +101, 1, "NORM", [ 0, 0, 0, 255 ],3 );
		else if (swayOpposite == 1)
			Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +101, 1, "OPPOSITE", [ 0, 0, 0, 255 ],3 );
		else if (swayOpposite == 2)	
			Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +101, 1, "SWAY", [ 0, 0, 0, 255 ],3 );
		
    //indicators
    //Render.String(screen_size[0] /2, screen_size[1] /2 +100, 1, "FAKE", [ difference * 255 / 58, 255 - ( difference * 255 / 58 ), 0 , 255], 3 );
    Render.String(screen_size[0] /2, screen_size[1] /2 +110, 1, isInverted ? "LEFT" : "RIGHT", [ 255, 255, 255, 255 ], 3 );
    Render.String(screen_size[0] /2, screen_size[1] /2 +120, 1, isDoubletap ? "DT" : "DT", isDoubletap ? [ dt_red, dt_green, dt_blue, dt_alpha ] : [ 255, 0, 0, 255 ], 3 );
    Render.String(screen_size[0] /2, screen_size[1] /2 +130, 1, isDmgActive ? "DMG" : "WALL", isDmgActive ? [ dmg_red, dmg_green, dmg_blue, dmg_alpha ] : [ dmg_red, dmg_green, dmg_blue, dmg_alpha ], 3 );
    Render.String(screen_size[0] /2, screen_size[1] /2 +140, 1, isHideshots ? "HIDE" : "ANIM", isHideshots ? [ hide_red, hide_green, hide_blue, hide_alpha ] : [ 255, 153, 0, alpha ], 3 );
	Render.String(screen_size[0] /2, screen_size[1] /2 +150, 1, isHitboxOverride ? "HITBOX" : "", isHitboxOverride ? [ hit_red, hit_green, hit_blue, hit_alpha ] : [ 0, 0, 0, 0 ],3 );
    Render.String(screen_size[0] /2, screen_size[1] /2 +160, 1, isFakeduck ? "DUCK" : "", isFakeduck ? [ 255, 255, 255, 255 ] : [ 0, 0, 0, 0 ], 3 );
   		
		if (swayOpposite == 0)
			Render.String(screen_size[0] /2, screen_size[1] /2 +100, 1, "NORM", [ text_red, text_green, text_blue, text_alpha ],3 );
		else if (swayOpposite == 1)
			Render.String(screen_size[0] /2, screen_size[1] /2 +100, 1, "OPPOSITE", [ text_red, text_green, text_blue, text_alpha ],3 );
		else if (swayOpposite == 2)
			Render.String(screen_size[0] /2, screen_size[1] /2 +100, 1, "SWAY", [ text_red, text_green, text_blue, text_alpha ],3 );
   
    if(drawLeft)
    {
        Render.Polygon([LPx, LPz, LPy], [selected_red,selected_blue,selected_green,alpha] );
    }
    else if(drawRight)
    {    
        Render.Polygon([RPy, RPz, RPx], [selected_red,selected_blue,selected_green,alpha] );
    }
    else if(drawBack)
    {
        Render.Polygon([BPy, BPx, BPz], [selected_red,selected_blue,selected_green,alpha] );
    }
}}

function onCreateMove()
{
    isLeftActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Left Hotkey" );
    isRightActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Right Hotkey" );
    isBackActive = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Back Hotkey" );
 
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
        else if(isBackActive)
    {
        drawLeft = 0;
        drawBack = 1;
        drawRight = 0;
        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0 );
        UI.SetValue( "Anti-Aim", "Fake Angles", "Hide real angle", false);
     
    }
}

function on_ragebot_fire()
{
    ragebot_target_exploit = Event.GetInt("exploit");
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "DT"))
    {
        if (ragebot_target_exploit == 2)
        {
            UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", true);
            indicator = false;
        }
        else
        {
            UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", false);
            indicator = true;
        }
    }
}

function event_rbot_fire( ) {
    iExploitID = Event.GetInt( "exploit" );
    if ( !UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "DT" ) )
        return;

    if ( iExploitID == 2 ) {
        iLastShotTime = Global.Tickcount( );
        bDoubleTapped = true;
        UI.ToggleHotkey( "Rage", "GENERAL", "Exploits", "Doubletap");
        bShouldRecharge = true;
        indicator = false;
    }

    ForceCharge = bShouldRecharge ? true : false;

    if ( ForceCharge && Global.Tickcount( ) >= ( Global.TickInterval( ) * 10 + iLastShotTime ) ) {
        UI.ToggleHotkey( "Rage", "GENERAL", "Exploits", "Doubletap");
        indicator = true;
    }
}


function check() {
    if (waiting == 1) {
        if (Global.Curtime() - runTime > .2) {
            secondsElapsed += 1;
            runTime = Global.Curtime();
        }
    }
}

function modecheck()
{
  if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "DT Mode") == 0) { on_ragebot_fire(); }
  if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "DT Mode") == 1) { event_rbot_fire(); }
}

function Main()
{
    //  callbacks
    Global.RegisterCallback("Draw", "drawString")
    Global.RegisterCallback("CreateMove", "onCreateMove")
    Global.RegisterCallback("ragebot_fire", "modecheck")
    Global.RegisterCallback("Draw", "check")
}
Main();