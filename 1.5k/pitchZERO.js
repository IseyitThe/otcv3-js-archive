// Made by trickykaden on forums
// shoutout to Ultranite for the inAir code I stole from him
// shoutout to Oxy for helping me testing this and for ideas of features
// Couldn't have done it without both of them <3

UI.AddSliderFloat("delay thing", 0, 5)


// variables
var local;
var lastAircheck;

var inAir = false;

var firstRun=false; // use on line

var timed1=false;
var delay1 = .2;
var lastTime1=Globals.Curtime();

var timed=false;
var delay = .2;
var lastTime=Globals.Curtime();

var runMainFunction=0;
var info=0;
var delayedPos=0




function setSlide(value){
// turn on and off slide walk
    // 1=on, 0=off
    UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", value);
}


// 0=off, 1=down, 2=  , 3=zero
function setPitch(val){
    UI.SetValue("Anti-Aim", "Extra", "Pitch", val);
}

function checkIfAlive(){
    local = Entity.GetLocalPlayer();
    if(!Entity.IsAlive(local)){
        return;
    }
}

function checkIfInAir(){
    // shoutout to Ultranite for this code, all credits to him for this function.
    air = Entity.GetProp(local, "CBasePlayer", "m_flFallVelocity");
    if (air < -1 || air > 1) {
        inAir = true;
    } else {
        inAir = false;
    }

}

function checkRestrictions(){
   
    info = UI.GetValue( "Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions");
    if (info=1){
        UI.SetValue( "Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0);
    }
}




function poggers(){
    checkRestrictions();
    coolDelay = UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "delay thing");
    local = Entity.GetLocalPlayer();
    if(!Entity.IsAlive(local)){
        return;
    }

   
    if (timed1 == false) {
        lastTime1 = Globals.Curtime();
        timed1 = true;
    }
    if (Globals.Curtime() > lastTime1 + .3) { // delays when to check if you're inair so it doesn't go off as much when you're bhopping.
        // shoutout to Ultranite for this code, all credits to him for this function.
        air = Entity.GetProp(local, "CBasePlayer", "m_flFallVelocity");
        if (air < -1 || air > 1) {
            inAir = true;
        } else {
            inAir = false;
        }
        timed1 = false;
    }
   
   
    // if statement, if space is held, return.
    // This should stop any false activations of the zero pitch, i hope ;-;
    if (Input.IsKeyPressed(0x20)){
        return;
    }
   
   
   

    if (lastAircheck == true && inAir==false){
        //Cheat.Print( 'if statement was ran successfully' ); this is working correctly
        if (delayedPos==0 && firstRun==false) {
            firstRun=true;
        }
       
        runMainFunction=1;
    }
   
    if (runMainFunction==1){
        if (timed == false) {
            lastTime = Globals.Curtime();
            timed = true;
        }
        // the var firstRun lets the shit skip the delay for the zero pitch, so then the delay will put the aa down
        if (Globals.Curtime() > lastTime + coolDelay || firstRun==true) {
            if (delayedPos==1){
                //Cheat.Print("1");
                setSlide(0);
                setPitch(1);
                delayedPos=0;
                runMainFunction=0;
                timed = false;
                return;
            }
           
            if (delayedPos==0){
                //Cheat.Print("0");
                setSlide(1);
                setPitch(3);
                delayedPos=1;
                firstRun=false;
                timed = false;
                return;
            }
            //timed = false;
        }
       
    }
   
   
    lastAircheck=inAir;
}







function onUnload() {
    UI.SetValue( "Misc", "Performance & Information", "Information", "Restrictions", 1);
    setPitch(1);
}

Cheat.RegisterCallback("Unload", "onUnload");
Cheat.RegisterCallback("CreateMove", "poggers");