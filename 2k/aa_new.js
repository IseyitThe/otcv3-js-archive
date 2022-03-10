var screen_size = Global.GetScreenSize();
var isLeftActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Left Key" );
var isRightActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Right Key" );
var isBackwardsActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Backward Key" );
var drawLeft = 1; drawHideReal = 1;
var drawRight = 0, drawBack = 0;
var leftWasPressed = false; var rightWasPressed = false; var backWasPressed = false;
var time, delay, fillbar, shotsfired;
var drafHotkey = 1;
var counter = 0;
var invert = 1;

function EVENT_WEAPON_FIRE()
{
    iShotsFired = Event.GetInt("userid"); iShotsFired_index = Entity.GetEntityFromUserID(iShotsFired);
 
    if(Entity.GetLocalPlayer() == iShotsFired_index)
    {
        if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap", "Enabled"))
        {
            //Released only once
            if(shotsfired == 0)
            {
                time = Globals.Curtime();
                delay = time+0.3;
                fillbar = 0;
            }            
        }    
    }    
}

var jump = false

function drawString()
{	
	font = Render.AddFont( "Arrows", 30, 400);
	arrow_color = UI.GetColor( "Misc", "JAVASCRIPT", "Script items", "Arrows color" );
	s_arrow_color = UI.GetColor( "Misc", "JAVASCRIPT", "Script items", "Selected arrow color" );
	var speed = UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Manual color speed" );
	var colors = UI.GetColor("MISC", "JAVASCRIPT", "Script items", "Indicator color");
	fade_color = UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Fade" );
	isDoubletap = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
	isDMG = UI.IsHotkeyActive("Rage", "Damage", "Minimum Damage (on key)");
	isHideReal = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Hide real angle");
	isHIDESHOTS = UI.IsHotkeyActive("Rage", "Exploits", "Hide shots");
	isSP = UI.IsHotkeyActive("Rage", "General", "Safe point override");
	isFD = UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck");
	arrows_type = UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Arrows" );
	
	dt_color = [255,0,0,255]
	
	Render.String(screen_size[0] /2, screen_size[1] /2 +57, 0,  "OPPOSITE", [ 102, 204, 238, 204 ], 3 );
	Render.String(screen_size[0] /2, screen_size[1] /2 +66, 0,  "WALL", [ 124, 195, 13, 255 ], 3 );

	
	is_DT = false

	g_Local = Entity.GetLocalPlayer( );
	g_Local_weapon = Entity.GetWeapon(g_Local);
	weapon_name = Entity.GetName(g_Local_weapon);
	g_Local_classname = Entity.GetClassName( g_Local_weapon );

	DT = "DT ";
	add_y = 75
	add_x = 84

	if(UI.GetValue( "Rage", "GENERAL", "Exploits", "Doubletap" ))
    {
        //Enabled
        if(isDoubletap)
        {
            curtime = Globals.Curtime();
         
            //>_<
            if (curtime <= delay)
            {
                fillbar+=2;
                shotsfired = 1;    
             
                //Not allowing fill more
                if(fillbar >= 30) fillbar = 30;
				dt_color = [255, 0, 0, 255]
			}
            else
            {
				dt_color = [124, 195, 13, 255]
                shotsfired = 0;    //Released
            }    
        }
        else
        {
			//Disabled
			dt_color = [255, 0, 0, 255]
        }    
    }    
	
	if ((g_Local_classname == "CKnife" || g_Local_classname == "CWeaponSSG08" || g_Local_classname == "CWeaponAWP" || weapon_name == "r8 revolver" || g_Local_classname == "CHEGrenade" || g_Local_classname == "CMolotovGrenade" || g_Local_classname == "CIncendiaryGrenade" || g_Local_classname == "CFlashbang" || g_Local_classname == "CSmokeGrenade" || g_Local_classname == "CDecoyGrenade" || g_Local_classname == "CWeaponTaser" || g_Local_classname == "CC4")) 
	{
		if (isFD) {
			DT = DT + "(fakeduck)";
		} else {
			DT = DT + "(active weapon)";
		} 
		is_DT = false;
	} else 
	{
		DT = isFD ? "DT (fakeduck)" : "DT ";
		is_DT = !isFD & isDoubletap;
	}

	UI.SetValue( "Rage", "Exploits", "Doubletap", is_DT );
	

	if(fade_color)
        {
	if(counter >= 255)
	{
		counter = 255;
		invert = -invert;
	}
	if(counter <= 50)
	{
		counter = 50;
		invert = -invert;
	}
        }
        else
{
counter = 255
}	
	if(arrows_type != 0)
{
	if(drawLeft)
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Left amount") );
	if(drawRight)
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Right amount") );
}
	if (arrows_type == 1) {
	 
	Render.Polygon( [ [ screen_size[0] /2 -62, screen_size[1] /2 ], [ screen_size[0] /2 -45, screen_size[1] /2 -10 ], [ screen_size[0] /2 -45, screen_size[1] /2 + 10] ], drawLeft ? [s_arrow_color[0],s_arrow_color[1],s_arrow_color[2] , counter] : [arrow_color[0],arrow_color[1],arrow_color[2] , 255] ); // LEFT

	Render.Polygon( [ [ screen_size[0] /2 - 10, screen_size[1] /2 + 35 ], [ screen_size[0] /2 + 10, screen_size[1] /2 +35 ], [ screen_size[0] /2, screen_size[1] /2 + 52] ], drawBack ? [s_arrow_color[0],s_arrow_color[1],s_arrow_color[2] , counter] : [arrow_color[0],arrow_color[1],arrow_color[2] , 255] ); // BACK

	Render.Polygon( [ [ screen_size[0] /2 + 45, screen_size[1] /2 + 10], [ screen_size[0] /2 + 45, screen_size[1] /2 -10], [ screen_size[0] /2 + 62, screen_size[1] /2] ], drawRight ? [s_arrow_color[0],s_arrow_color[1],s_arrow_color[2] , counter] : [arrow_color[0],arrow_color[1],arrow_color[2] , 255] ); // RIGHT
	}
	if (arrows_type == 2) {
		Render.String(screen_size[0] /2 -50, screen_size[1] /2 -20, 1,  "<", drawLeft ? [s_arrow_color[0],s_arrow_color[1],s_arrow_color[2] , counter] : [arrow_color[0],arrow_color[1],arrow_color[2] , 255], 4 );
		Render.String(screen_size[0] /2 +50, screen_size[1] /2 -20, 1,  ">", drawRight ? [s_arrow_color[0],s_arrow_color[1],s_arrow_color[2] , counter] : [arrow_color[0],arrow_color[1],arrow_color[2] , 255], 4 );
		Render.String(screen_size[0] /2, screen_size[1] /2 +20, 1,  "v", drawBack ? [s_arrow_color[0],s_arrow_color[1],s_arrow_color[2] , counter] : [arrow_color[0],arrow_color[1],arrow_color[2] , 255], 4 );		
	}
	if (arrows_type == 3) {
		Render.StringCustom(screen_size[0] /2 -50, screen_size[1] /2 -20, 1,  "b", drawLeft ? [s_arrow_color[0],s_arrow_color[1],s_arrow_color[2] , counter] : [arrow_color[0],arrow_color[1],arrow_color[2] , 255], font );
		Render.StringCustom(screen_size[0] /2 +50, screen_size[1] /2 -20, 1,  "a", drawRight ? [s_arrow_color[0],s_arrow_color[1],s_arrow_color[2] , counter] : [arrow_color[0],arrow_color[1],arrow_color[2] , 255], font );
		Render.StringCustom(screen_size[0] /2, screen_size[1] /2 +25, 1,  "d", drawBack ? [s_arrow_color[0],s_arrow_color[1],s_arrow_color[2] , counter] : [arrow_color[0],arrow_color[1],arrow_color[2] , 255], font );		
	}
	
	if(drawLeft)
	{
		Render.String(screen_size[0] /2 , screen_size[1] /2 +75, 0, is_DT ? DT : DT, dt_color,3 );
		if (isHIDESHOTS) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 , screen_size[1] /2 + add_y, 0, "ONSHOT", [ 124, 195, 13, 255 ],3 );
		}
		if (isDMG) {
			add_y = add_y + 9;
		    Render.String(screen_size[0] /2 , screen_size[1] /2 + add_y, 0, "DMG", [ 255, 255, 255, 255 ],3 );
		}
		if (isFD) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 , screen_size[1] /2 + add_y, 0, "DUCK", [ 255, 255, 255, 255 ],3 );
		}
		if (isSP) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 , screen_size[1] /2 + add_y, 0, "SP", [ 124, 195, 13, 255 ] ,3 );
		}
		counter += speed * invert;
	}
	else if(drawRight)
	{
		Render.String(screen_size[0] /2 , screen_size[1] /2 +75, 0, is_DT ? DT : DT, dt_color,3 );
		if (isHIDESHOTS) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 , screen_size[1] /2 + add_y, 0, "ONSHOT", [ 124, 195, 13, 255 ],3 );
		}
		if (isDMG) {
			add_y = add_y + 9;
		    Render.String(screen_size[0] /2 , screen_size[1] /2 + add_y, 0, "DMG", [ 255, 255, 255, 255 ],3 );
		}
		if (isFD) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 , screen_size[1] /2 + add_y, 0, "DUCK", [ 255, 255, 255, 255 ],3 );
		}
		if (isSP) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 , screen_size[1] /2 + add_y, 0, "SP", [ 124, 195, 13, 255 ] ,3 );
		}
		counter += speed * invert;
	}
	else if(drawBack)
    {	
        Render.String(screen_size[0] /2 , screen_size[1] /2 +75, 0, is_DT ? DT : DT, dt_color,3 );
		if (isHIDESHOTS) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 , screen_size[1] /2 + add_y, 0, "ONSHOT", [ 124, 195, 13, 255 ],3 );
		}
		if (isDMG) {
			add_y = add_y + 9;
		    Render.String(screen_size[0] /2 , screen_size[1] /2 + add_y, 0, "DMG", [ 255, 255, 255, 255 ],3 );
		}
		if (isFD) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 , screen_size[1] /2 + add_y, 0, "DUCK", [ 255, 255, 255, 255 ],3 );
		}
		if (isSP) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 , screen_size[1] /2 + add_y, 0, "SP", [ 124, 195, 13, 255 ] ,3 );
		}
		counter += speed * invert;
	}
	else if(drawHideReal)
	{
		Render.String(screen_size[0] /2 , screen_size[1] /2 +75, 0, isHideReal ? "HIDE" : "HIDE", [ 204, 0, 255, 255 ],3 );
		Render.String(screen_size[0] /2 , screen_size[1] /2 +84, 0, is_DT ? DT : DT, dt_color,3 );
		if (isHIDESHOTS) {
			add_x = add_x + 9;
			Render.String(screen_size[0] /2 , screen_size[1] /2 + add_x, 0, "ONSHOT", [ 124, 195, 13, 255 ],3 );
		}
		if (isDMG) {
			add_x = add_x + 9;
		    Render.String(screen_size[0] /2 , screen_size[1] /2 + add_x, 0, "DMG", [ 255, 255, 255, 255 ],3 );
		}
		if (isFD) {
			add_x = add_x + 9;
			Render.String(screen_size[0] /2 , screen_size[1] /2 + add_x, 0, "DUCK", [ 255, 255, 255, 255 ],3 );
		}
		if (isSP) {
			add_x = add_x + 9;
			Render.String(screen_size[0] /2 , screen_size[1] /2 + add_x, 0, "SP", [ 124, 195, 13, 255 ] ,3 );
		}
		counter = 0;
	}


}

var oldTick = 0
var lastPressed = 0
var isHideRealActive = false
function onCreateMove()
{
	isLeftActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Left Key" );
	isRightActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Right Key" );
	isBackwardsActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Backward Key" );

	if(isLeftActive)
	{
		lastPressed = Global.Tickcount();
		isHideRealActive = false;
		leftWasPressed = true;
		backWasPressed = false;
		rightWasPressed = false;
		drawLeft = 1;
		drawBack = 0;
		drawRight = 0;
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Left amount") );
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", false );
	} else if(isLeftActive && leftWasPressed == true && Global.Tickcount() > lastPressed + 16){
		isHideRealActive = true;
		oldTick = Global.Tickcount();
	}
	else if(isRightActive)
	{
		lastPressed = Global.Tickcount();
		isHideRealActive = false;
		backWasPressed = false;
		leftWasPressed = false;
		rightWasPressed = true;
		drawLeft = 0;
		drawLeft = 0;
		drawBack = 0;
		drawRight = 1;
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Right amount") );
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", false );
	} else if(isRightActive && rightWasPressed == true && Global.Tickcount() > lastPressed + 16){
		isHideRealActive = true;
		oldTick = Global.Tickcount();
	}
	if(isBackwardsActive && backWasPressed == false && Global.Tickcount() > lastPressed + 16)
	{
		lastPressed = Global.Tickcount();
		isHideRealActive = false;
		backWasPressed = true;
		rightWasPressed = false;
		leftWasPressed = false;
		drawLeft = 0;
		drawBack = 1;
		drawRight = 0;
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0 );
		UI.SetValue( "Anti-Aim", "Fake Angles", "Hide real angle", false);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", false );
	} else if(isBackwardsActive && backWasPressed == true && Global.Tickcount() > lastPressed + 16) {
		isHideRealActive = true;
		drawLeft = 0;
		drawBack = 1;
		drawRight = 0;
		backWasPressed = true;
		rightWasPressed = false;
		leftWasPressed = false;
		oldTick = Global.Tickcount();
	}
	if(isHideRealActive)
	{

		if (Global.Tickcount() > oldTick + 16){
			backWasPressed = false;
			rightWasPressed = false;
			leftWasPressed = false;
			oldTick = Global.Tickcount();
		}

		drawLeft = 0;
		drawBack = 0;
		drawRight = 0;
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0 );
		UI.SetValue("Anti-Aim", "Fake Angles", "Hide real angle", true);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true );
	}
}

function player_connect(){
    lastPressed = Global.Tickcount();
    oldTick = Global.Tickcount();

    time = Globals.Curtime();
    delay = time+0.3;
}


function Main()
{
	UI.AddDropdown( "Arrows", [ "Off", "triangle", "arrows", "arrows2" ] );
	UI.AddColorPicker( "Arrows color" )
	UI.AddColorPicker( "Selected arrow color" )
	
	UI.AddSliderInt( "Manual color speed", 0, 30);
	UI.AddSliderInt( "Left amount", 0, 60);
        UI.AddSliderInt( "Right amount", 0, 60);
	UI.AddCheckbox("Fade");
	UI.AddHotkey( "Left Key" );
	UI.AddHotkey( "Right Key" );
	UI.AddHotkey( "Backward Key" );

	//  callbacks
	Global.RegisterCallback("Draw", "drawString")
	Global.RegisterCallback("CreateMove", "onCreateMove")
	Global.RegisterCallback("player_connect_full", "player_connect")
	Global.RegisterCallback("weapon_fire", "EVENT_WEAPON_FIRE");
}
Main();
