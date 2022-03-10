// Removed circle for this build.

//var screen_size = Render.GetScreenSize( );
//function fake_indicator( ) {
  //  if( !Entity.GetLocalPlayer( ) || !Entity.IsAlive( Entity.GetLocalPlayer( ) ) || !Entity.IsValid( Entity.GetLocalPlayer( ) ) )
    //    return;
    //var difference = Math.abs( Local.GetRealYaw( ) - Local.GetFakeYaw( ) );
//
  //  Render.String( 6, screen_size[1] - 104, 0, "FAKE", [0, 0, 0, 250], 4 );
    //Render.String( 5, screen_size[1] - 105, 0, "FAKE", [ difference * 250 / 58, 250 - ( difference * 250 / 58 ), 0, 255 ], 4 );
//}
//Cheat.RegisterCallback( "Draw", "fake_indicator" )

// Lagsync js script by mooon and solutionz
function addtomenu(){
  UI.AddSliderInt("", 0, 0);
  UI.AddLabel("Lagsync by mooon#8337 and soft#1488");
  UI.AddDropdown( "State", [ "Enable", "Disable"] );
	UI.AddDropdown( "Method", [ "Off", "Switch", "Jitter" ] );
}

var aa=1;
var aad=1;
var lasttime = Global.Realtime();
var realtime = Global.Realtime();
var yawoffset =UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset");
var jitteroffset =UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset");
var de=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay");
var status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH Way");
var yawnewoffset;

// Get a random int between min and max
function randomIntFrom(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Credit to soft for this part:
// Setting values based on settings:
// ----------------------------------------------------------------------------------------------------------------------------------------

function V1(){
	// Disable Breaker
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","Breaker", 0);

	// Fake Angles

  UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -10);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", false);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 0);
	UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true);

	// Fake Lag

	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 15);

}
function V2(){

	// Fake Angles

    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -25);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);

	// Fake Lag

	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 5);

}
function V3(){

	// Fake Angles

//	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 2);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", false);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", true);

	// Fake Lag

	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 9);

}

function S1(){
	// Disable Breaker
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","Breaker", 0);

	yawnewoffset = randomIntFrom(-10, -20);

	// Fake Angles

    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", false);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 2);
	UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true);
    UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", true);

}
function S2(){
	// Disable Breaker

	yawnewoffset = randomIntFrom(-10, -20);

	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","Breaker", 0);
		UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 2);

	// Fake Angles

    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);

}

function A1(){
	// Disable Breaker
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","Breaker", 0);

	yawnewoffset = randomIntFrom(-20, 20);

    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 2);
	UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", true);

	// Fake Lag

	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 15);

}
function A2(){
	// Disable Breaker
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","Breaker", 0);

	yawnewoffset = randomIntFrom(-20, 20);

	// Fake Angles

    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", false);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);

	// Fake Lag

	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 5);

}
function A3(){
	// Disable Breaker
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","Breaker", 0);

	yawnewoffset = randomIntFrom(-20, 20);

	// Fake Angles

	UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
    UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 2);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", true);

	// Fake Lag

	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 9);

}

function BR1(){
	// Disable Lagsync
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","Lagsync mode", 0);

	yawnewoffset = randomIntFrom(-10, 7);

    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 0);
	UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", true);

	// Fake Lag

	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 13);

}
function BR2(){
	// Disable Lagsync
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","Lagsync mode", 0);

	yawnewoffset = randomIntFrom(-11, 7);

	// Fake Angles

    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", true);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", false);

	// Fake Lag

	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 9);

}
function BR3(){
	// Disable Lagsync
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","Lagsync mode", 0);

	yawnewoffset = randomIntFrom(-10, -5);

	// Fake Angles

	UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
    UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 2);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", true);

	// Fake Lag

	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 11);

}

function BRR1(){
	// Disable Lagsync
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","Lagsync mode", 0);

	yawnewoffset = randomIntFrom(-6, 8);

    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 2);
	UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", true);

	// Fake Lag

	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 13);

}
function BRR2(){
	// Disable Lagsync
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","Lagsync mode", 0);

	yawnewoffset = randomIntFrom(-16, 9);

	// Fake Angles

    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", false);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 2);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);

	// Fake Lag

	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 7);

}
function BRR3(){
	// Disable Lagsync
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","Lagsync mode", 0);

	yawnewoffset = randomIntFrom(2, -4);

	// Fake Angles

	UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
    UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 2);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", true);

	// Fake Lag

	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 9);

}

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// All values set
// Actual lagsync:

function lagsyncmain() {
	mode=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","Lagsync");
	breakermenu=UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Method");

	if (mode==0) { lagsyncdisable(); }
	if (mode==1) { lagsyncv2(); }
	if (mode==2) { lagsyncv1(); }
	if (mode==3) { lagsyncv3(); }

	if (breakermenu==0) { breakerdisable(); }
	if (breakermenu==1) { breakerv1(); }
	if (breakermenu==2) { breakerv2(); }
}

function breakerv1() {
	status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","Lagsync");
    de=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay");
    realtime = Global.Realtime();
    if(realtime-lasttime>=de){
        if(status==1){
            aad=aa+1;
            if(aad>3){
                aad=1;
            }
            aa=aad;
        }
        if(aa==1){
           BR1();
        }
        if(aa==2){
            BR2();
        }
        if(aa==3){
            BR3();
        }
        lasttime = realtime;
    }
    if(realtime<lasttime){
        lasttime = Global.Realtime();
        realtime = Global.Realtime();
    }
}

function lagsyncdisable() {

}

function breakerv2() {
	status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","Lagsync");
    de=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay");
    realtime = Global.Realtime();
    if(realtime-lasttime>=de){
        if(status==1){
            aad=1+Math.floor(Math.random()*3);
            aa=aad;
        }
        if(status==2){
            aad=aa+1;
            if(aad>3){
                aad=1;
            }
            aa=aad;
        }
        if(aa==1){
           BRR1();
        }
        if(aa==2){
            BRR2();
        }
        if(aa==3){
            BRR3();
        }
        lasttime = realtime;
    }
    if(realtime<lasttime){
        lasttime = Global.Realtime();
        realtime = Global.Realtime();
    }
}

function breakerdisable() {

}

function lagsyncv1() {
	status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","Lagsync");
    de=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay");
    realtime = Global.Realtime();
    if(realtime-lasttime>=de){
        if(status==1){
            aad=aa+1;
            if(aad>2){
                aad=1;
            }
            aa=aad;
        }
        if(aa==1){
           S1();
        }
        if(aa==2){
            S2();
        }
        lasttime = realtime;
    }
    if(realtime<lasttime){
        lasttime = Global.Realtime();
        realtime = Global.Realtime();
    }
}

function lagsyncv2() {
	status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","Lagsync");
    de=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay");
    realtime = Global.Realtime();
    if(realtime-lasttime>=de){

        if(status==1){
            aad=aa+1;
            if(aad>3){
                aad=1;
            }
            aa=aad;
        }
        if(aa==1){
            V1();
        }
        if(aa==2){
            V2();
        }
        if(aa==3){
            V3();
        }
        lasttime = realtime;
    }
    if(realtime<lasttime){
        lasttime = Global.Realtime();
        realtime = Global.Realtime();
    }
}

function lagsyncv3() {
	status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","Lagsync");
    de=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay");
    realtime = Global.Realtime();
    if(realtime-lasttime>=de){
        if(status==1){
            aad=1+Math.floor(Math.random()*3);
            aa=aad;
        }
        if(status==2){
            aad=aa+1;
            if(aad>3){
                aad=1;
            }
            aa=aad;
        }
        if(aa==1){
            A1();
        }
        if(aa==2){
            A2();
        }
        if(aa==3){
            A3();
        }
        lasttime = realtime;
    }
    if(realtime<lasttime){
        lasttime = Global.Realtime();
        realtime = Global.Realtime();
    }
}

function main(){
    status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","Lagsync");
    de=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay");
    realtime = Global.Realtime();
    if(realtime-lasttime>=de){
        if(status==1){
            aad=1+Math.floor(Math.random()*3);
            aa=aad;
        }
        if(status==2){
            aad=aa+1;
            if(aad>3){
                aad=1;
            }
            aa=aad;
        }
        if(aa==1){
            S1();
        }
        if(aa==2){
            S2();
        }
        if(aa==3){
            S3();
        }
        lasttime = realtime;
    }
    if(realtime<lasttime){
        lasttime = Global.Realtime();
        realtime = Global.Realtime();
    }

}

addtomenu();
UI.SetValue("Misc", "JAVASCRIPT", "Script Items","YAW Offset #1",yawoffset);
UI.SetValue("Misc", "JAVASCRIPT", "Script Items","JITTER Offset #1",jitteroffset);
//UI.SetValue("Misc", "JAVASCRIPT", "Script Items","YAW Offset #2",yawoffset);
//UI.SetValue("Misc", "JAVASCRIPT", "Script Items","JITTER Offset #2",jitteroffset);
//UI.SetValue("Misc", "JAVASCRIPT", "Script Items","YAW Offset #3",yawoffset);
//UI.SetValue("Misc", "JAVASCRIPT", "Script Items","JITTER Offset #3",jitteroffset);
//UI.SetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay",de);
//Global.RegisterCallback("Draw", "main")
Global.RegisterCallback("Draw", "lagsyncmain")

// UI
// mooon
UI.AddSliderInt("Arc Length", 0, 90);
UI.AddSliderInt("Arc Thickness", 0, 20);
UI.AddSliderInt("Arc Precision (Use less for more fps)", 20, 500);
UI.AddLabel("Built on 10/05/2020");
UI.AddSliderInt("", 0, 0);

// Default values //
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Circle Radius", 30);
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Arc Length", 45);
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Arc Thickness", 5);
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Arc Precision (Use less for more fps)", 280);
UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Circle Color", [120, 120, 120, 192]);
UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Real Color", [255, 0, 196, 255]);
UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Fake Color", [170, 128, 255, 255]);

// Settings //
var circle_radius       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Circle Radius");
var arc_length          = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Length");
var arc_thickness       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Thickness");
var arc_precision       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Precision (Use less for more fps)");
var circle_color        = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Circle Color");
var real_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Real Color");
var fake_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Fake Color");
var text_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Text Color");
var text_active_color   = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Text Active Color");

function update_settings()
{
    circle_radius       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Circle Radius");
    arc_length          = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Length");
    arc_thickness       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Thickness");
    arc_precision       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Precision (Use less for more fps)");
    circle_color        = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Circle Color");
    real_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Real Color");
    fake_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Fake Color");
    text_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Text Color");
    text_active_color   = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Text Active Color");

    if(arc_thickness > circle_radius)
        UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Arc Thickness", circle_radius);

    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Reset Indicator Colors"))
    {
        UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Circle Color", [120, 120, 120, 192]);
        UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Real Color", [255, 0, 196, 255]);
        UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Fake Color", [170, 128, 255, 255]);
        UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Reset Indicator Colors", false)
    }

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

function main()
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

    var double_tap_color = UI.IsHotkeyActive( "Rage", "GENERAL", "Exploits", "Doubletap" ) ? real_color : circle_color;
    var hide_shots_color = UI.IsHotkeyActive( "Rage", "GENERAL", "Exploits", "Hide shots" ) ? real_color : circle_color;
    var safe_point_color = UI.IsHotkeyActive( "Rage", "GENERAL", "General", "Force safe point" ) ? real_color : circle_color;

    var text_offset = screen_middle_y + circle_radius;
    var text_spacing = screen_size[1] * 0.0185185185;

    Render.String(screen_middle_x, text_offset + text_spacing, 1, "ON-SHOT", hide_shots_color);
    Render.String(screen_middle_x, text_offset + (text_spacing * 2), 1, "DOUBLE TAP", double_tap_color);
    Render.String(screen_middle_x, text_offset + (text_spacing * 3), 1, "SAFE POINT", safe_point_color);
}

Cheat.RegisterCallback("Draw", "main");
