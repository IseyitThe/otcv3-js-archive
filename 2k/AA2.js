//Modified by Reptar
//Modified again by dragonbomb
//Originals made by :
//Signal for the idea
//Ultranite for help
//AA Indicators by 57777
//Fake Indicator by dummy (Decommissioned)
//Base by Snipi https://onetap.su/threads/release-manual-aa-indicators.13542/#post-110857
//shoutout to edeen and ntrzr
//Thanks for all the guys

//ui
UI.AddLabel("      __|__Thanks Reptar__|__");
UI.AddLabel("      __|__Thanks Signal__|__");
UI.AddLabel("#  Manual  dir  #");
UI.AddColorPicker("Selected arrow color");
UI.AddColorPicker("Selected fake arrow color");
UI.AddHotkey( "Left Hotkey" );
UI.AddHotkey( "Back Hotkey" );
UI.AddHotkey( "Right Hotkey" );
UI.AddLabel("                                      ");
UI.AddLabel("                                      ");
UI.AddLabel("-------------------------------------------");
UI.AddLabel("                FAKE Indicator");
UI.AddLabel("              (BY IDK but thanks)");
UI.AddSliderInt("Circle Radius", 10, 50);
UI.AddSliderInt("Arc Length", 0, 90);
UI.AddSliderInt("Arc Thickness", 0, 20);
UI.AddSliderInt("Arc Precision (Use less for more fps)", 20, 500);
UI.AddColorPicker("Circle Color");
UI.AddColorPicker("Real Color");
UI.AddColorPicker("Fake Color");
//indicator vars
var screen_size = Global.GetScreenSize();
var isLeftActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Left Hotkey" );
var isRightActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Right Hotkey" );
var isBackActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Back Hotkey" );
var isInverted;
var drawLeft = 0;
var drawRight = 0;
var drawBack = 1;

//Polygon Points
LPx = [(screen_size[0] /2) - 43, (screen_size[1] /2) + 13];
LPy = [(screen_size[0] /2) - 43, (screen_size[1] /2) - 7];
LPz = [(screen_size[0] /2) - 63, (screen_size[1] /2) + 3];
RPx = [(screen_size[0] /2) + 41, (screen_size[1] /2) + 13];
RPy = [(screen_size[0] /2) + 41, (screen_size[1] /2) - 7];
RPz = [(screen_size[0] /2) + 61, (screen_size[1] /2) + 3];
LPxx = [(screen_size[0] /2) - 42, (screen_size[1] /2) + 14];
LPyy = [(screen_size[0] /2) - 42, (screen_size[1] /2) - 6];
LPzz = [(screen_size[0] /2) - 62, (screen_size[1] /2) + 4];
RPxx = [(screen_size[0] /2) + 42, (screen_size[1] /2) + 14];
RPyy = [(screen_size[0] /2) + 42, (screen_size[1] /2) - 6];
RPzz = [(screen_size[0] /2) + 62, (screen_size[1] /2) + 4];
BPx = [(screen_size[0] /2) + 9, (screen_size[1] /2) + 47];
BPy = [(screen_size[0] /2) - 11, (screen_size[1] /2) + 47];
BPz = [(screen_size[0] /2) - 1, (screen_size[1] /2) + 67];
BPxx = [(screen_size[0] /2) + 10, (screen_size[1] /2) + 48];
BPyy = [(screen_size[0] /2) - 10, (screen_size[1] /2) + 48];
BPzz = [(screen_size[0] /2), (screen_size[1] /2) + 68];
// here is the Polygon for fake 
FPLx = [(screen_size[0] /2) - 54, (screen_size[1] /2) + 32];
FPLy = [(screen_size[0] /2) - 30, (screen_size[1] /2) + 56];
FPLz = [(screen_size[0] /2) - 51, (screen_size[1] /2) + 53];
FPRx = [(screen_size[0] /2) + 54, (screen_size[1] /2) + 32];
FPRy = [(screen_size[0] /2) + 30, (screen_size[1] /2) + 56];
FPRz = [(screen_size[0] /2) + 51, (screen_size[1] /2) + 53];
FPLxx = [(screen_size[0] /2) - 56, (screen_size[1] /2) + 31];
FPLyy = [(screen_size[0] /2) - 32, (screen_size[1] /2) + 55];
FPLzz = [(screen_size[0] /2) - 53, (screen_size[1] /2) + 52];
FPRxx = [(screen_size[0] /2) + 53, (screen_size[1] /2) + 31];
FPRyy = [(screen_size[0] /2) + 29, (screen_size[1] /2) + 55];
FPRzz = [(screen_size[0] /2) + 50, (screen_size[1] /2) + 52];
Cheat.PrintColor([255, 75, 100, 25], "\n------------------------\nReptar's Indicators\n------------------------\n");
Cheat.PrintColor([252, 210, 23, 25], "\n------------------------\nModified by DRAGONBOMB \n------------------------\n");

username = Cheat.GetUsername();
Cheat.PrintColor([87, 195, 194, 25],"\n"+"-----------------------"+"\n"+"Wellcome! "+username+"\n"+"-----------------------"+"\n")

function render_arc(x, y, radius, radius_inner, start_angle, end_angle, segments, color)
    {
        while(360 % segments != 0)
        {
            segments++;
        }

        segments = 360 / segments;

        for (var i = start_angle; i < start_angle + end_angle; i = i + segments)
        {	

            var rad = i * Math.PI / 180;
            var rad2 = (i + segments) * Math.PI / 180;

            var rad_cos = Math.cos(rad)
            var rad_sin = Math.sin(rad)

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

            Render.Polygon( [
                [ x1_outer, y1_outer ],
                [ x2_outer, y2_outer ],
                [ x1_inner, y1_inner ] ],
                color
            );

            Render.Polygon( [
                [ x1_inner, y1_inner ],
                [ x2_outer, y2_outer ],
                [ x2_inner, y2_inner ] ],
                color
            );
        }
    }

// Default 
UI.SetColor("Misc", "Selected arrow color", [36, 116, 181, 255]);
UI.SetColor("Misc", "Selected fake arrow color", [222, 120, 151, 255]);
function drawString()
{
    selectedcp = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Selected arrow color");
    selected_red = selectedcp[0];
    selected_green = selectedcp[1];
    selected_blue = selectedcp[2];
    selected_alpha = selectedcp[3];
    selectedfcp = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Selected fake arrow color");
	selectedf_r = selectedfcp[0];
	selectedf_g = selectedfcp[1];
	selectedf_b = selectedfcp[2];
	selectedf_al = selectedfcp[3];
	const alpha = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / .75)) % (Math.PI * 2))) * 255;
    const Falpha = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / .25)) % (Math.PI * 2))) * 255;
	const alphaa = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / .3)) % (Math.PI * 2))) * 255;
	isHideshots = UI.IsHotkeyActive("Rage", "Exploits", "Hide shots");
    isFakeduck = UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck");
    isDoubletap = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
    isInverted = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter" );
    isBAIM = UI.IsHotkeyActive("Rage", "General", "Force body aim");
    isLbyMode = UI.GetValue("Anti-Aim", "Fake angles", "LBY mode");
    isDesyncMode = UI.GetValue("Anti-Aim", "Fake angles", "Fake desync");
    isOVRD = UI.IsHotkeyActive("Rage", "General", "Resolver override")
	localplayer_index = Entity.GetLocalPlayer( );
    localplayer_alive = Entity.IsAlive( localplayer_index );
	charge = Exploit.GetCharge();
	max_angle = 360*Exploit.GetCharge();
	center = Render.GetScreenSize();
	X = center[0] / 2
	Y = center[1] / 2
	limit = UI.GetValue("Anti-Aim", "Limit" );
	jitter = UI.GetValue("Anti-Aim", "Jitter" );
	tlimit = UI.GetValue("Anti-Aim", "Trigger limit");
	//Fake Indicator Plus
	var difference = Math.abs( Local.GetRealYaw( ) - Local.GetFakeYaw( ) );
    //Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +101, 1, "FAKE", [ 0, 0, 0, 255 ], 3 );
    //Render.String(screen_size[0] /2, screen_size[1] /2 +100, 1, "FAKE", [ difference * 255 / 58, 255 - ( difference * 255 / 58 ), 0 , 255], 3 )
	
    if (localplayer_alive == true){
    //Shadows
	Render.Polygon([LPxx, LPzz, LPyy], [0, 0, 0, 150] );
    Render.Polygon([RPyy, RPzz, RPxx], [0, 0, 0, 150] );
    Render.Polygon([BPyy, BPxx, BPzz], [0, 0, 0, 150] );
	Render.Polygon([FPLx, FPLy, FPLz], [0, 0, 0, 120] );
	Render.Polygon([FPRx, FPRz, FPRy], [0, 0, 0, 120] );
	Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +101, 1, isLbyMode ? "FAKE" : "NORM", [ 0, 0, 0, 220 ], 3 );
    Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +131, 1, isBAIM ? "BAIM" : "HITBOX", isBAIM ? [ 0, 0, 0, 220 ] : [ 0, 0, 0, 220 ], 3 );
    Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +141, 1, isHideshots ? "HIDE" : "ANIM", isHideshots ? [ 0, 0, 0, 220 ] : [ 0, 0, 0, alpha ], 3 );
    Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +151, 1, isFakeduck ? "DUCK" : "DUCK", isFakeduck ? [ 0, 0, 0, 230 ] : [ 0, 0, 0, 0 ], 3 );
	//indicators
	Render.String(screen_size[0] /2, screen_size[1] /2 +100, 1, isLbyMode ? "FAKE" : "NORM", [ 23, 150, 200, 220], 3 );
	if (isDoubletap){
		if (charge >= 1){
	Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +121, 1, isDoubletap ? "DT" : "DT", isDoubletap ? [ 0, 0, 0, 220 ] : [ 0, 0, 0, 220 ], 3 );
	Render.String(screen_size[0] /2, screen_size[1] /2 +120, 1, isDoubletap ? "DT" : "DT", isDoubletap ? [ 65, 179, 73, 255 ] : [ 255, 0, 0, 255 ], 3 );}
	if (charge < 1){
		Render.String(screen_size[0] /2 -4, screen_size[1] /2 +121, 1, isDoubletap ? "DT" : "DT", isDoubletap ? [ 0, 0, 0, 255 ] : [ 0, 0, 0, 255 ], 3 );
		Render.String(screen_size[0] /2 -5, screen_size[1] /2 +120, 1, isDoubletap ? "DT" : "DT", isDoubletap ? [ 248, 223, 112, 255 ] : [ 255, 0, 0, 255 ], 3 );
		render_arc(X + 9, Y + 124, 5, 2.4, -90, 360, 360, [120, 120, 120, 190]);
		render_arc(X + 9, Y + 124, 5, 2.4, -90, max_angle, 360, [248, 223, 112, 255]);
	}
	}
	if (!isDoubletap){
	Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +121, 1, isDoubletap ? "DT" : "DT", isDoubletap ? [ 0, 0, 0, 220 ] : [ 0, 0, 0, 220 ], 3 );
	Render.String(screen_size[0] /2, screen_size[1] /2 +120, 1, isDoubletap ? "DT" : "DT", isDoubletap ? [ 65, 179, 73, 255 ] : [ 255, 0, 0, 255 ], 3 );}
    Render.String(screen_size[0] /2, screen_size[1] /2 +130, 1, isBAIM ? "BAIM" : "HITBOX", isBAIM ? [ 0, 255, 255, 220 ] : [ 255, 255, 255, 255 ], 3 );
    Render.String(screen_size[0] /2, screen_size[1] /2 +140, 1, isHideshots ? "HIDE" : "ANIM", isHideshots ? [ 145, 120, 229, 255 ] : [ 255, 153, 0, alpha ], 3 );
    Render.String(screen_size[0] /2, screen_size[1] /2 +150, 1, isFakeduck ? "DUCK" : "DUCK", isFakeduck ? [ 255, 255, 255, 255 ] : [ 255, 0, 0, 0 ], 3 );
    //inverter indicators
	if(isDesyncMode == 0)
    {
        Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +111, 1, isInverted ? "LEFT" : "RIGHT", [ 0, 0, 0, 255 ], 3 );
        Render.String(screen_size[0] /2, screen_size[1] /2 +110, 1, isInverted ? "LEFT" : "RIGHT", [ 255, 255, 255, 255 ], 3 );
		if(isInverted){
		Render.Polygon([FPLxx, FPLyy, FPLzz], [selectedf_r, selectedf_g, selectedf_b, Falpha] );
		}else{
		Render.Polygon([FPRyy, FPRxx, FPRzz], [selectedf_r, selectedf_g, selectedf_b, Falpha] );
		}
	}
    else if(isDesyncMode == 1)
    {
        Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +111, 1, isInverted ? "RIGHT" : "LEFT", [ 0, 0, 0, 255 ], 3 );
        Render.String(screen_size[0] /2, screen_size[1] /2 +110, 1, isInverted ? "RIGHT" : "LEFT", [ 255, 255, 255, 255 ], 3 );
		if(isInverted){
		Render.Polygon([FPRxx, FPRzz, FPRyy], [selectedf_r, selectedf_g, selectedf_b, Falpha] );
		}else{
		Render.Polygon([FPLxx, FPLyy, FPLzz], [selectedf_r, selectedf_g, selectedf_b, Falpha] );
		}
	}
	
    if(drawLeft)
    {
        Render.Polygon([LPx, LPz, LPy], [ selected_red, selected_green, selected_blue, selected_alpha] );
    }
    else if(drawRight)
    {      
        Render.Polygon([RPy, RPz, RPx], [ selected_red, selected_green, selected_blue, selected_alpha] );
    }
    else if(drawBack)
    {
        Render.Polygon([BPy, BPx, BPz], [ selected_red, selected_green, selected_blue, selected_alpha] );
    }	
}}
function onCreateMove()
{
    isLeftActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Left Hotkey" );
    isRightActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Right Hotkey" );
    isBackActive = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Back Hotkey" );
	isFakeduck = UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck");
    if(isLeftActive)
    {  
        drawLeft = 1;
        drawBack = 0;
        drawRight = 0;
        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -90 );
        UI.SetValue( "Anti-Aim", "Fake angles", "Hide real angle", false);
    }
    else if(isRightActive)
    {  
        drawLeft = 0;
        drawBack = 0;
        drawRight = 1;
        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 90 );
        UI.SetValue( "Anti-Aim", "Fake angles", "Hide real angle", false);
       
    }
        else if(isBackActive)
    {  
        drawLeft = 0;
        drawBack = 1;
        drawRight = 0;
        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0 );
        UI.SetValue( "Anti-Aim", "Fake angles", "Hide real angle", true);
       
    }
}

//-------------------------hitlog--------------------------
hitboxes = [
  'generic',
  'head',
  'chest',
  'stomach',
  'left arm',
  'right arm',
  'left leg',
  'right leg',
  'body'
];
function getHitboxName(index) {
  return hitboxes[index] || 'Generic';
}
function hitlog()
{
    me = Entity.GetLocalPlayer();
    hitbox = Event.GetInt('hitgroup');
    target_damage = Event.GetInt("dmg_health");
    victim = Event.GetInt('userid');
    attacker = Event.GetInt('attacker');
    victimIndex = Entity.GetEntityFromUserID(victim);
    attackerIndex = Entity.GetEntityFromUserID(attacker);
    name = Entity.GetName(victimIndex);
    var namee = "ONETAP"
 
if( UI.GetValue ( "Misc", "JAVASCRIPT", "Script items", "logs in chat" ) ){
if (me == attackerIndex && me != victimIndex) {
    Global.PrintChat("\x01[\x06" + namee + "\x01] \x04" + "\x01hurt \x04" + name + " \x01for \x04" + target_damage + " \x01in \x04" + getHitboxName(hitbox))
}
}
}

//-----------------------Draw Shooooooot-----------------------
var timee, delayy, delayyy, shotsfired;
//FIREEEEEEEEEEEEEEEEEEEEE!!!!!!!!!
function WEAPON_FIRE()
{
    iShotsFired = Event.GetInt("userid"); iShotsFired_index = Entity.GetEntityFromUserID(iShotsFired);
    
    if(Entity.GetLocalPlayer() == iShotsFired_index)
    {
        if(shotsfired == 0)
        {   
            timee = Globals.Curtime();
            delayy = timee+0.005;
			delayyy = timee+0.33
		}       
    }       
}

function DrawSHOOT()
{
	localplayer_index = Entity.GetLocalPlayer( );
	localplayer_alive = Entity.IsAlive( localplayer_index );
	curtime = Globals.Curtime();
	if (localplayer_alive == true){
		if (curtime <= delayyy){
		shotsfired = 1;
		Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +81, 1, "ATTACKING", [ 0, 0, 0, 220 ], 3 );
		Render.String(screen_size[0] /2, screen_size[1] /2 +80, 1, "ATTACKING", [ 254, 209, 16, 255 ], 3 );
	}else{
		shotsfired = 0;
	}
}
}   
	   
function getValue(name)
{
    var value = UI.GetValue('Script items', name);

    return value;
}

function Main()
{
	UI.AddCheckbox("logs in chat");
	Global.RegisterCallback("player_hurt", "hitlog");
	Global.RegisterCallback("weapon_fire", "WEAPON_FIRE");
	Global.RegisterCallback("Draw", "DrawSHOOT");	
    Global.RegisterCallback("Draw", "drawString");
	Global.RegisterCallback("CreateMove", "onCreateMove");
}

Main();

//--------------------FAKE indicator BY I don know, BUT thanks alot------------------------

// Default values //
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Circle Radius", 37);
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Arc Length", 30);
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Arc Thickness", 2);
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Arc Precision (Use less for more fps)", 250);
UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Circle Color", [0, 0, 0, 0]);
UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Real Color", [255, 0, 196, 255]);
UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Fake Color", [35, 254, 250, 255]);

// Settings //
var circle_radius       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Circle Radius");
var arc_length          = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Length");
var arc_thickness       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Thickness");
var arc_precision       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Precision (Use less for more fps)");
var circle_color        = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Circle Color");
var real_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Real Color");
var fake_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Fake Color");

function update_settings()
{
    circle_radius       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Circle Radius");
    arc_length          = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Length");
    arc_thickness       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Thickness");
    arc_precision       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Precision (Use less for more fps)");
    circle_color        = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Circle Color");
    real_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Real Color");
    fake_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Fake Color");


    if(arc_thickness > circle_radius)
        UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Arc Thickness", circle_radius);
}

function draw_circle(x, y, radius, thickness, color)
{
    var inner = radius - thickness;

    for(; radius > inner; --radius)
    {
        Render.Circle(x, y, radius, color);
    }
}

function draw_arc(x, y, radius, start_angle, percent, thickness, color)
{
    var precision   = (2 * Math.PI) / arc_precision;
    var step        = Math.PI / 180;
    var inner       = radius - thickness;
    var end_angle   = (start_angle + percent) * step;
    var start_angle = (start_angle * Math.PI) / 180;

    for(; radius > inner; --radius)
    {
        for(var angle = start_angle; angle < end_angle; angle += precision)
        {
            var cx = Math.round(x + radius * Math.cos(angle));
            var cy = Math.round(y + radius * Math.sin(angle));

            var cx2 = Math.round(x + radius * Math.cos(angle + precision));
            var cy2 = Math.round(y + radius * Math.sin(angle + precision));

            Render.Line(cx, cy, cx2, cy2, color);
        }
    }
}

function adjust_angle(angle)
{
    if(angle < 0)
    {
        angle = (90 + angle * (-1));
    }
    else if(angle > 0)
    {
        angle = (90 - angle);
    }

    return angle;
}

function circle_main()
{
    var local_player = Entity.GetLocalPlayer();

    if(!Entity.IsAlive(local_player))
        return;

    update_settings();

    var screen_size     = Render.GetScreenSize();
    var screen_middle_x = screen_size[0] * 0.5;
    var screen_middle_y = screen_size[1] * 0.5;

    var view_angles = Local.GetViewAngles();

    var real_yaw = Local.GetRealYaw();
    var fake_yaw = Local.GetFakeYaw();
    var view_yaw = view_angles[1] - 180;
 
    var real = adjust_angle(real_yaw - view_yaw);
    var fake = adjust_angle(fake_yaw - view_yaw);

    draw_circle(screen_middle_x, screen_middle_y, circle_radius, arc_thickness, circle_color);
    draw_arc(screen_middle_x, screen_middle_y, circle_radius, fake - (arc_length * 0.5), arc_length, arc_thickness, fake_color);
    draw_arc(screen_middle_x, screen_middle_y, circle_radius, real - (arc_length * 0.5), arc_length, arc_thickness, real_color);
	
    var text_offset = screen_middle_y + circle_radius;
    var text_spacing = screen_size[1] * 0.0185185185;

}
Cheat.RegisterCallback("Draw", "circle_main");
function display() {

    if(Global.GetMapName() == "")
        return;{
    }
    
	function isHeavyPistol(name)
{
    if (name == "r8 revolver" || name == "desert eagle")
    {
        return true
    }
}
    function isPistol(name)
{
    if(weapon_name == "p2000" || weapon_name == "tec9" || weapon_name == "glock 18" || weapon_name == "five seven" || weapon_name == "usp s" || name == "dual berettas" || name == "p250" || name == "cz75 auto")
    {
        return true
    }
}     
	function isAutoSniper(name)
{
    if(name == "scar 20" || weapon_name == "g3sg1")
    {
        return true
    }
}
    function isOthers(name)
{
	if(name == "m249" || weapon_name == "mag 7" || name == "nova" || name == "xm1014" || name == "negav" || name == "mp7" || name == "ump 45" || name == "P90" || name == "PP bizon" || weapon_name == "mac 10" || weapon_name == "ak 47" || weapon_name == "Galil AR" || weapon_name == "sawed off" || weapon_name == "SG 553" || name == "zeus x27" || name == "mp5 sd" || weapon_name == "mp9" || weapon_name == "famas" || weapon_name == "m4a4" || weapon_name == "m4a1 s" || weapon_name == "AUG")
	{
		return true
	}
}

	weapon_name =  Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
	wep = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
	var str = " "
	arroww = "              ->"
	if (Entity.IsValid(Entity.GetLocalPlayer()) && Entity.IsAlive(Entity.GetLocalPlayer()))
    {
        if (isPistol(wep))
		{
			str = ("   DMG        "+UI.GetValue("Rage","PISTOL", "Minimum damage"));
			
		}
		else if (isHeavyPistol(wep))
        {
            str = ("   DMG        "+UI.GetValue("Rage", "HEAVY PISTOL", "Minimum damage"));
			
        }
        else if(wep == "ssg 08")
        {
            str = ("   DMG        "+UI.GetValue("Rage", "SCOUT", "Minimum damage"));
			
        }
        else if(wep == "awp")
        {
            str = ("   DMG        "+UI.GetValue("Rage", "AWP", "Minimum damage"));
			
        }
        else if (isAutoSniper(wep))
        {
            str = ("   DMG        "+UI.GetValue("Rage", "AUTOSNIPER", "Minimum damage"));
			
        }
		else if (isOthers(wep))
			str = ("   DMG        "+UI.GetValue("Rage", "GENERAL", "Minimum damage"));
		
    }
}
Cheat.RegisterCallback("Draw", "display");