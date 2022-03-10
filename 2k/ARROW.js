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
UI.AddSliderFloat("manual arrow fade speed", 0, 1);
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
RPx = [(screen_size[0] /2) + 42, (screen_size[1] /2) + 13];
RPy = [(screen_size[0] /2) + 42, (screen_size[1] /2) - 7];
RPz = [(screen_size[0] /2) + 62, (screen_size[1] /2) + 3];
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
// Default 
UI.SetColor("Misc", "Selected arrow color", [36, 116, 181, 255]);
UI.SetColor("Misc", "Selected fake arrow color", [222, 120, 151, 255]);
function drawString()
{
    fadesp = UI.GetValue("Misc", "manual arrow fade speed");
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
	const alpha = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / fadesp)) % (Math.PI * 2))) * 255;
    const Falpha = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / .75)) % (Math.PI * 2))) * 255;
	const alphaa = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / .3)) % (Math.PI * 2))) * 255;
    isFakeduck = UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck");
    isInverted = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter" );
    isLbyMode = UI.GetValue("Anti-Aim", "Fake angles", "LBY mode");
    isDesyncMode = UI.GetValue("Anti-Aim", "Fake angles", "Fake desync");
	localplayer_index = Entity.GetLocalPlayer( );
    localplayer_alive = Entity.IsAlive( localplayer_index );
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
	//indicators

    //inverter indicators
	if(isDesyncMode == 0)
    {
		if(isInverted){
		Render.Polygon([FPLxx, FPLyy, FPLzz], [selectedf_r, selectedf_g, selectedf_b, selectedf_al] );
		}else{
		Render.Polygon([FPRyy, FPRxx, FPRzz], [selectedf_r, selectedf_g, selectedf_b, selectedf_al] );
		}
	}
    else if(isDesyncMode == 1)
    {
		if(isInverted){
		Render.Polygon([FPRxx, FPRzz, FPRyy], [selectedf_r, selectedf_g, selectedf_b, selectedf_al] );
		}else{
		Render.Polygon([FPLxx, FPLyy, FPLzz], [selectedf_r, selectedf_g, selectedf_b, selectedf_al] );
		}
	}
	
    if(drawLeft)
    {
        Render.Polygon([LPx, LPz, LPy], [ selected_red, selected_green, selected_blue, alpha] );
    }
    else if(drawRight)
    {      
        Render.Polygon([RPy, RPz, RPx], [ selected_red, selected_green, selected_blue, alpha] );
    }
    else if(drawBack)
    {
        Render.Polygon([BPy, BPx, BPz], [ selected_red, selected_green, selected_blue, alpha] );
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

function getValue(name)
{
    var value = UI.GetValue('Script items', name);

    return value;
}

function Main()
{
	UI.AddCheckbox("logs in chat");
	Global.RegisterCallback("player_hurt", "hitlog");
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