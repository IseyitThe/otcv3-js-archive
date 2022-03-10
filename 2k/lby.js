 UI.AddCheckbox( "enable" );
 var enab = 0
 
UI.AddDropdown( "Fake angle", [ "Right", "Left" ] );
UI.AddHotkey( "Inverter" );
UI.AddColorPicker("Indicator");
//-------------------------------------------------------------
UI.AddSliderInt( "Right-yaw add",-180,180);
UI.AddSliderInt( "Left-yaw add",-180,180);
UI.AddDropdown( "Body jitter", [ "off","center", "random" ] );
UI.AddSliderInt( "jitter yaw right",-180,180);
UI.AddSliderInt( "jitter yaw left",-180,180);
UI.AddDropdown( "Body type", ["off", "Static", "jitter","Opposite" ] );

UI.AddSliderInt( "Right-Body yaw",0,60);

//------------------

//------------
UI.AddSliderInt( "Left-Body yaw",0,60);

//---------------------------------------------------------------------
UI.AddDropdown( "Indicator type", [ "<>", "none"] );
UI.AddSliderInt( "indicator distance", 1, 100 );
UI.AddCheckbox( "Slowwalk enable" );
UI.AddHotkey( "Slowwalking hotkey" );
UI.AddSliderInt( "Slowwalking speed",1,100);

function rainbow(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}
var aaa = 0	


var main = {
    condition: 0,
};

const velocity = function(player) {
    const vel = Entity.GetProp(player, "CBasePlayer", "m_vecVelocity[0]");
    return (
        Math.sqrt(vel[0] * vel[0] + vel[1] * vel[1])
    )
};

const is_jumping = function(player) {
    return (
        // s/o @leed
        Entity.GetProp(player, "CBasePlayer", "m_hGroundEntity")
    )
};
function update_condition()
{
    const player = Entity.GetLocalPlayer();
    if (!player || !Entity.IsAlive(player))
    {
        main.condition = 0;
        return;
    }
    const slowwalk = UI.IsHotkeyActive("Anti-Aim", "Extra", "Slowwalk");
    if (is_jumping(player)) {main.condition = 3; return;} else {
        if (velocity(player) > 2) {
            if (slowwalk) {
                main.condition = 2;
                return;
            }
            main.condition = 1;
            return;
        }

    }
    main.condition = 0;
}
var delay = 0
var delay_jitter = 0
function drawString()
{
	 
	if (UI.GetValue("enable")) { enab = 1 } else { enab = 0 }
	AntiAim.SetOverride(enab);
	
	
	var jiantou = UI.GetValue("MISC","JAVASCRIPT","Script items","Indicator type")
	
	 
	
	
	tickcount = Global.Tickcount();
	//---------------------------------------------------------------------------------------
	var size = Render.GetScreenSize()   ;
	var distance = (size[0]/2)/210*UI.GetValue("Misc","JAVASCRIPT","Script items","indicator distance");
	//----------------------------------------------------------------------------------------
	
	//----------------------------------------------------------------------------------------
	var color = rainbow(tickcount % 350 / 350, 1, 1, 1, 255);
	var yanse = UI.GetColor( "MISC","JAVASCRIPT","Script items","Indicator" )
	//----------------------------------------------------------------------------------------
	var aa = UI.GetValue("Misc","JAVASCRIPT","Script items","Fake angle")
	//----------------------------------------------------------------------------------------
	var hotkey = UI.IsHotkeyActive("Misc","JAVASCRIPT","Script items","Inverter")
	//----------------------------------------------------------------------------------------
	
	var yaw_right = UI.GetValue("Right-Body yaw")

	
	var yaw_left = UI.GetValue("Left-Body yaw")

    var jitter_body = UI.GetValue("Body jitter")
    var jitter_yaw_right = UI.GetValue("jitter yaw right")  
    var jitter_yaw_left	= UI.GetValue("jitter yaw left")	
	 
    var AA_state = UI.GetValue("Body type")
	
    var ui_yaw_right = UI.GetValue("Right-yaw add")
	var ui_yaw_left = UI.GetValue("Left-yaw add")
	
	
	if (jiantou == 1) {tou_left = " ",tou_right=" "}
	if (jiantou == 0) {tou_left = "<",tou_right=">"}
	if ( AA_state == 3 ) {
		UI.SetEnabled("Left-Body yaw",false)

		UI.SetEnabled("Right-Body yaw",false)


		
		} else {	
	if ( aa == 0 ) {

		UI.SetEnabled("Right-Body yaw",true)

		UI.SetEnabled("Left-Body yaw",false)


	}	
	if ( aa == 1 ) {
		
		UI.SetEnabled("Right-Body yaw",false)

		UI.SetEnabled("Left-Body yaw",true)

		
		} }
	if ( aa == 0 )
	{   UI.SetEnabled("Right-yaw add",true)
		UI.SetEnabled("Left-yaw add",false)
		
		}
	else
	{ UI.SetEnabled("Right-yaw add",false)
		UI.SetEnabled("Left-yaw add",true)
		
		} 
	if ( hotkey==0) {UI.SetValue("Anti-Aim","Rage Anti-Aim","Yaw offset",ui_yaw_right) }
	if ( hotkey==1) {UI.SetValue("Anti-Aim","Rage Anti-Aim","Yaw offset",ui_yaw_left)}
    if ( AA_state == 1 ) {
	if (hotkey == 0 ) {	

AntiAim.SetRealOffset(-yaw_right);	
//AntiAim.SetFakeOffset(body_right);
AntiAim.SetLBYOffset(yaw_right);
	}
	if (hotkey == 1 ) {
AntiAim.SetRealOffset(yaw_left * 2);	
//AntiAim.SetFakeOffset(body_left);
AntiAim.SetLBYOffset(-yaw_left * 2);
	} }
	if ( AA_state == 3 ) {
	 if ( hotkey == 0 ) {

		AntiAim.SetRealOffset(-120);	
        AntiAim.SetLBYOffset(120); 
	 }
	 if ( hotkey == 1 ) {

		AntiAim.SetRealOffset(120);	
        AntiAim.SetLBYOffset(-120); 
	 }
    } 
	
	
	if ( AA_state == 2 ) {
		//AntiAim.SetFakeOffset(ceshi)
    if ( Globals.Realtime() >= delay )
    {		
    if (hotkey==0){
    AntiAim.SetRealOffset(-yaw_right);	
    AntiAim.SetLBYOffset(yaw_right); }
	if (hotkey==1){
    AntiAim.SetRealOffset(yaw_left);	
    AntiAim.SetLBYOffset(-yaw_left);}
	
	delay =  Globals.Realtime() + 0.02
	} else {
	    if (hotkey==0){
    AntiAim.SetRealOffset(-yaw_right/2);	
    AntiAim.SetLBYOffset(yaw_right/2); }
	if (hotkey==1){
    AntiAim.SetRealOffset(yaw_left/1.5);	
    AntiAim.SetLBYOffset(-yaw_left/1.5);}	
		
	}
	}
	if (AA_state==0)
	{   AntiAim.SetRealOffset(0);	
    AntiAim.SetLBYOffset(0);}
	
if ( jitter_body == 0 )
{UI.SetEnabled( "jitter yaw left",false )
 UI.SetEnabled( "jitter yaw right",false ) }
 else
{ 
if (aa == 0)
	{UI.SetEnabled( "jitter yaw left",false )
    UI.SetEnabled( "jitter yaw right",true )}
if (aa == 1)
	{UI.SetEnabled( "jitter yaw left",true )
UI.SetEnabled( "jitter yaw right",false )}
}

if (jitter_body == 1)
{
if (hotkey==0) {UI.SetValue("Anti-Aim","Rage Anti-Aim","Jitter offset",jitter_yaw_right);}
if (hotkey==1) {UI.SetValue("Anti-Aim","Rage Anti-Aim","Jitter offset",jitter_yaw_left);}
}
if (jitter_body == 2)
{
    if ( Globals.Realtime() >= delay_jitter )
    {
if (hotkey==0)		
{  w = jitter_yaw_right - 1
	 ji_1 = Math.round(Math.random() * w + 1)
UI.SetValue("Anti-Aim","Rage Anti-Aim","Jitter offset",ji_1)}
	 //-----------------------------------------------
if (hotkey==1)		
{  w1 = jitter_yaw_left - 1
	 ji_2 = Math.round(Math.random() * w1 + 1)
UI.SetValue("Anti-Aim","Rage Anti-Aim","Jitter offset",ji_2)}	 
	
	delay_jitter =  Globals.Realtime() + 0.02
	}	
	
}
if (AA_state!=0) {	
if (hotkey==1){Render.String( size[0] / 2 - distance -20 , size[1] / 2 , 0, tou_left, [ color.r, color.g, color.b, 255 ],24);
Render.String( size[0] / 2 + distance -6 , size[1] / 2-0.5 , 0, tou_right, [ yanse[0],yanse[1],yanse[2],yanse[3] ],24);}
if (hotkey==0){Render.String( size[0] / 2 + distance -6 , size[1] / 2-0.5 , 0, tou_right, [ color.r, color.g, color.b, 255 ],24);
Render.String( size[0] / 2 - distance -20 , size[1] / 2 , 0, tou_left, [ yanse[0],yanse[1],yanse[2],yanse[3] ],24);}}
  var localplayer_index = Entity.GetLocalPlayer();
  var velocity = Entity.GetProp(localplayer_index, "CBasePlayer", "m_vecVelocity[0]");
  var speed = Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
  var finalspeed = Math.min( 9999, speed ) + 0.2
  var realspeed = Math.round(Math.min( 9999, speed ) + 0.2)
   
   Render.Circle( 11, 1020, 10 + (3*realspeed/350), [ color.r, color.g, color.b, 255 ] );
   Render.Circle( 11, 1020, 9 + (3*realspeed/350) , [ color.r, color.g, color.b, 255 ] );
   Render.Circle( 11, 1020, 8 + (3*realspeed/350) , [ color.r, color.g, color.b, 255 ] );
   Render.Circle( 11, 1020, 7 + (3*realspeed/350) , [ color.r, color.g, color.b, 255 ] );
    
	
	update_condition()
var type = main.condition
var state
if (type == 0) { state = "Stand" }
if (type == 1) { state = "Moving"  }
if (type == 2) { state = "Slowwalk" }  
if (type == 3) { state = "Air" }
	
   Render.String( 33, 1010, 0, ""+state, [ 123, 104, 238, 255 ],14   );
	var fake =  Local.GetFakeYaw();
	var real =  Local.GetRealYaw();

	  Render.String( 0, 980, 0, "PREDICTION", [ 153, 204, 255, 220 ],14   );

	if (Math.abs( real - fake ) > 135) {
     if (hotkey == 0 )	{aaa = 50+yaw_right/60*50 }
	 if (hotkey == 1 )	{aaa = 50-yaw_left/60*50 }
	} else {
    if (hotkey == 0 ) {	
	aaa =  50+(Math.abs( real - fake )) /135 * 58 }
	if (hotkey == 1 ) {
	aaa =  50-(Math.abs( real - fake )) /135 * 58  }
	}
	 Render.Line( 50, 1001, aaa, 1001, [ 153, 204, 255, 220 ] );
	 Render.Line( 50, 1001, aaa, 1001, [ 153, 204, 255, 220 ] );
	 
	 Render.Line( aaa, 1001, aaa+1, 1001, [ 153, 204, 255, 220 ] );
	 Render.Line( aaa, 1001, aaa-1, 1001, [ 153, 204, 255, 220 ] );
		
	

}




Cheat.RegisterCallback("Draw", "drawString")

function slow () {
if  (UI.GetValue("Slowwalk enable")==false) return;	
if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Slowwalk hotkey")) return;

    speed = UI.GetValue("Slowwalk speed")

    fSpeed = speed;
    bSpeed = speed;
    sSpeed = speed;

dir = [0, 0, 0];

    if (Input.IsKeyPressed(0x57)) {
        //'W' AKA Forward
        dir[0] += fSpeed;
    }
    if (Input.IsKeyPressed(0x44)) {
        //'D' AKA Right
        dir[1] += sSpeed;
    }
    if (Input.IsKeyPressed(0x41)) {
        //'A' AKA Left
        dir[1] -= sSpeed;
    }
    if (Input.IsKeyPressed(0x53)) {
        //'S' AKA Back
        dir[0] -= bSpeed;
    }

    UserCMD.SetMovement(dir);




}

Cheat.RegisterCallback("CreateMove", "slow")











