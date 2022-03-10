
UI.AddLabel("-----Anti-Aim presets v3-----");
UI.AddDropdown( "Anti-Aim presets", [ "Off", "On"] );
UI.AddDropdown( "Anti-Aim presets mode", [ "Off", "Anti-Aim presets V1", "Anti-Aim presets V2", "Anti-Aim presets V3" ] );
UI.AddSliderFloat("SWITCH delay ",0, 5);
UI.AddLabel("chance slider for diffrent aa");
UI.AddLabel("-----Anti-Aim presets v3-----");
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

// -------------------------------------------------------------------- Anti-Aim presets V1 --------------------------------------------------------------------

function V1(){
     
     
    
    // Fake Angles
    
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -10);
    UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
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
    
    UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
    UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
    
    // Fake Lag
    
    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 9);
    
}

// -------------------------------------------------------------------- Anti-Aim presets V2 --------------------------------------------------------------------

function S1(){
     
     

    yawnewoffset = randomIntFrom(-10, -20);
    
    // Fake Angles
    
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
    UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true);
    
}
function S2(){
     

    yawnewoffset = randomIntFrom(-10, -20);

     
    UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
    
    // Fake Angles
    
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
    
}

function S3(){
     

    yawnewoffset = randomIntFrom(-10, -20);

     
    UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
    
    // Fake Angles
    
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
    
}

// -------------------------------------------------------------------- Anti-Aim presets V3 --------------------------------------------------------------------

function A1(){
     
     
    
    yawnewoffset = randomIntFrom(-20, 20);
    
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
    UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true);
    
    // Fake Lag
    
    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 15);
    
}
function A2(){
     
     
    
    yawnewoffset = randomIntFrom(-20, 20);
    
    // Fake Angles
    
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
    UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
    
    // Fake Lag
    
    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 5);
    
}
function A3(){
     
     
    
    yawnewoffset = randomIntFrom(-20, 20);
    
    // Fake Angles
    
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawnewoffset);
    UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
    // Fake Lag
    
    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 9);
    
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------










// --- THIS IS Anti-Aim presets V2 ---

function Anti-Aim presetsv1() {
    status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","Anti-Aim presets");
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

// --- THIS IS Anti-Aim presets V1 ---

function Anti-Aim presetsv2() {
    status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","Anti-Aim presets");
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

// --- THIS IS Anti-Aim presets V3 ---

function Anti-Aim presetsv3() {
    status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","Anti-Aim presets");
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
    status=UI.GetValue("Misc", "JAVASCRIPT", "Script Items","Anti-Aim presets");
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

//addtomenu();
UI.SetValue("Misc", "JAVASCRIPT", "Script Items","YAW Offset #1",yawoffset);
UI.SetValue("Misc", "JAVASCRIPT", "Script Items","JITTER Offset #1",jitteroffset);
UI.SetValue("Misc", "JAVASCRIPT", "Script Items","YAW Offset #2",yawoffset);
UI.SetValue("Misc", "JAVASCRIPT", "Script Items","JITTER Offset #2",jitteroffset);
UI.SetValue("Misc", "JAVASCRIPT", "Script Items","YAW Offset #3",yawoffset);
UI.SetValue("Misc", "JAVASCRIPT", "Script Items","JITTER Offset #3",jitteroffset);
UI.SetValue("Misc", "JAVASCRIPT", "Script Items","SWITCH delay",de);
Global.RegisterCallback("Draw", "main")
