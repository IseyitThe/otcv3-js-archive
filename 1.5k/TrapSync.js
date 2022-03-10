//
function addtomenu(){
    UI.AddLabel("                $ TRAPSYNC $ ");
    UI.AddDropdown( "TRAPSYNC", [ "Enable", "Disable"] );
	UI.AddDropdown( "TRAPSYNC TYPE", [ "Disable", "Version 1", "Version 2", "Version 3" ] );
	UI.AddDropdown( "BREAKER TYPE", [ "Disable", "Version 1", "Version 2" ] );
	UI.AddLabel("Breaker/Trapsync Cant Work Together");
 //   UI.AddSliderFloat("SWITCH delay",0, 5);
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

function randomIntFrom(min,max) // Get a random integer from [min] to [max] 
{
    return Math.floor(Math.random()*(max-min+1)+min);
} 

// -------------------------------------------------------------------- TRAPSYNC V1 --------------------------------------------------------------------

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

// -------------------------------------------------------------------- TRAPSYNC V2 --------------------------------------------------------------------

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

// -------------------------------------------------------------------- TRAPSYNC V3 --------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------- Breaker V1 --------------------------------------------------------------------

function BR1(){
	// Disable TRAPSYNC
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","TRAPSYNC mode", 0);
	
	yawnewoffset = randomIntFrom(-10, -20);
	
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 0);
	UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", true);
	
	// Fake Lag
	
	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 15);
	
}
function BR2(){
	// Disable TRAPSYNC
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","TRAPSYNC mode", 0);
	
	yawnewoffset = randomIntFrom(-15, -25);
	
	// Fake Angles
	
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", true);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", false);
	
	// Fake Lag
	
	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 5);
	
}
function BR3(){
	// Disable TRAPSYNC
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","TRAPSYNC mode", 0);

	yawnewoffset = randomIntFrom(-10, -10);
	
	// Fake Angles
	
	UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
    UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 2);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", true);
	
	// Fake Lag
	
	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 9);
	
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------- Breaker V2 --------------------------------------------------------------------

function BRR1(){
	// Disable TRAPSYNC
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","TRAPSYNC mode", 0);
	
	yawnewoffset = randomIntFrom(-10, -34);
	
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 2);
	UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", true);
	
	// Fake Lag
	
	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 15);
	
}
function BRR2(){
	// Disable TRAPSYNC
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","TRAPSYNC mode", 0);
	
	yawnewoffset = randomIntFrom(-16, -7);
	
	// Fake Angles
	
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
	UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", false);
	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 2);
	UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);
	
	// Fake Lag
	
	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 5);
	
}
function BRR3(){
	// Disable TRAPSYNC
	UI.SetValue("Misc", "JAVASCRIPT", "Script Items","TRAPSYNC mode", 0);
	
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

function TRAPSYNCmain() {
	mode=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","TRAPSYNC mode");
	breakermenu=UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Breaker");
	
	if (mode==0) { TRAPSYNCdisable(); }
	if (mode==1) { TRAPSYNCv2(); }
	if (mode==2) { TRAPSYNCv1(); }
	if (mode==3) { TRAPSYNCv3(); }
	
	if (breakermenu==0) { breakerdisable(); }
	if (breakermenu==1) { breakerv1(); }
	if (breakermenu==2) { breakerv2(); }
}

function breakerv1() {
	status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","TRAPSYNC");
    de=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay");
    realtime = Global.Realtime();
//    Global.Print(String(realtime-lasttime));
    if(realtime-lasttime>=de){
//        Global.Print(String(realtime-lasttime));
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

function TRAPSYNCdisable() {
	
}

function breakerv2() {
	status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","TRAPSYNC");
    de=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay");
    realtime = Global.Realtime();
//    Global.Print(String(realtime-lasttime));
    if(realtime-lasttime>=de){
//        Global.Print(String(realtime-lasttime));
        if(status==1){
            aad=1+Math.floor(Math.random()*3);
            aa=aad;
//            Global.Print(String(aad));
        }
        if(status==2){
            aad=aa+1;
            if(aad>3){
                aad=1;
            }
            aa=aad;
//            Global.Print(String(aad));
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

// --- THIS IS TRAPSYNC V2 ---

function TRAPSYNCv1() {
	status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","TRAPSYNC");
    de=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay");
    realtime = Global.Realtime();
//    Global.Print(String(realtime-lasttime));
    if(realtime-lasttime>=de){
//        Global.Print(String(realtime-lasttime));
        if(status==1){
            aad=aa+1;
            if(aad>2){
                aad=1;
            }
            aa=aad;
//            Global.Print(String(aad));
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

// --- THIS IS TRAPSYNC V1 ---

function TRAPSYNCv2() {
	status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","TRAPSYNC");
    de=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay");
    realtime = Global.Realtime();
//    Global.Print(String(realtime-lasttime));
    if(realtime-lasttime>=de){
//        Global.Print(String(realtime-lasttime));
        
        if(status==1){
            aad=aa+1;
            if(aad>3){
                aad=1;
            }
            aa=aad;
//            Global.Print(String(aad));
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

// --- THIS IS TRAPSYNC V3 ---

function TRAPSYNCv3() {
	status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","TRAPSYNC");
    de=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay");
    realtime = Global.Realtime();
//    Global.Print(String(realtime-lasttime));
    if(realtime-lasttime>=de){
//        Global.Print(String(realtime-lasttime));
        if(status==1){
            aad=1+Math.floor(Math.random()*3);
            aa=aad;
//            Global.Print(String(aad));
        }
        if(status==2){
            aad=aa+1;
            if(aad>3){
                aad=1;
            }
            aa=aad;
//            Global.Print(String(aad));
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
    status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","TRAPSYNC");
    de=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay");
    realtime = Global.Realtime();
//    Global.Print(String(realtime-lasttime));
    if(realtime-lasttime>=de){
//        Global.Print(String(realtime-lasttime));
        if(status==1){
            aad=1+Math.floor(Math.random()*3);
            aa=aad;
//            Global.Print(String(aad));
        }
        if(status==2){
            aad=aa+1;
            if(aad>3){
                aad=1;
            }
            aa=aad;
//            Global.Print(String(aad));
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

function main()
{
  var watermark_name = Entity.GetName(Entity.GetLocalPlayer( ));
  var today = new Date();
  var hours1 = today.getHours();
  var minutes1 = today.getMinutes();
  var seconds1 = today.getSeconds();
  var localplayer_index = Entity.GetLocalPlayer();
  var velocity = Entity.GetProp(localplayer_index, "CBasePlayer", "m_vecVelocity[0]");
  var speed = Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
  var finalspeed = Math.min( 9999, speed ) + 0.2
  var hours = hours1 <= 9 ? "0" + today.getHours() + ":" : today.getHours() + ":";
  var minutes = minutes1 <= 9 ? "0" + today.getMinutes() + ":" : today.getMinutes() + ":";
  var seconds = seconds1 <= 9 ? "0" + today.getSeconds() : today.getSeconds();
  
  const tickrate = Globals.Tickrate();
  const ping = Math.floor(Global.Latency() * 1000 / 1.5);
  const fps = Math.floor( 1 / Global.Frametime() );
  const fontpixel = Render.AddFont( "Verdana", 7, 100);
  const fontpixel2 = Render.AddFont( "Verdana", 8, 100);

    const rainbow = [
        Math.floor(Math.sin(Global.Realtime() * 2) * 127 + 128),
        Math.floor(Math.sin(Global.Realtime() * 2 + 2) * 127 + 128),
        Math.floor(Math.sin(Global.Realtime() * 2 + 4) * 127 + 128),
        255
    ];


function HSVtoRGB(h, s, v)
{
    var r, g, b, i, f, p, q, t;

    i = Math.floor(h * 6);
  f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6)
    {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

    
    Render.FilledRect(1150, 3, 300, 18, [15, 15, 15, 255]);
    Render.FilledRect(1150, 3, 300, 2, [168,168,253, 255]);
    Render.StringCustom(1156, 5, 0, "TRAPSYNC | PING: " + ping + "MS  | " + tickrate + " TICKRATE | " + hours + minutes + seconds, [255, 255, 255, 255], fontpixel);


}

Global.RegisterCallback("Draw", "main")

addtomenu();
UI.SetValue("Misc", "JAVASCRIPT", "Script Items","YAW Offset #1",yawoffset);
UI.SetValue("Misc", "JAVASCRIPT", "Script Items","JITTER Offset #1",jitteroffset);
//UI.SetValue("Misc", "JAVASCRIPT", "Script Items","YAW Offset #2",yawoffset);
//UI.SetValue("Misc", "JAVASCRIPT", "Script Items","JITTER Offset #2",jitteroffset);
//UI.SetValue("Misc", "JAVASCRIPT", "Script Items","YAW Offset #3",yawoffset);
//UI.SetValue("Misc", "JAVASCRIPT", "Script Items","JITTER Offset #3",jitteroffset);
//UI.SetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay",de);
//Global.RegisterCallback("Draw", "main")
Global.RegisterCallback("Draw", "TRAPSYNCmain")
