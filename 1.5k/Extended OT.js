Global.PrintColor([186, 235, 52, 255], "\n\n OT Extended  \n Beta \n\n\n")
Cheat.PrintColor( [ 255, 0, 0, 255 ], "This Script is made by Swiftz4k#9917" )
UI.AddCheckbox("Default AA");
UI.AddCheckbox("Custom AA");
UI.AddLabel("Standing/Moving AA:");
UI.AddSliderInt("Yaw", -180, 180);
UI.AddSliderInt("Inverted Yaw", -180, 180);
UI.AddDropdown("Jitter Type", ["Offset","Random"]);
UI.AddLabel("Enable Offset Jitter first");
UI.AddSliderInt("Jitter", -180, 180);
UI.AddSliderInt("LBY", -60, 60);
UI.AddSliderInt("Inverted LBY", -60, 60);
UI.AddSliderInt("Fake", -60, 60);
UI.AddSliderInt("Inverted Fake", -60, 60);
UI.AddLabel("Slowwalk AA:");
UI.AddSliderInt("YawS", -180, 180);
UI.AddSliderInt("Inverted YawS", -180, 180);
UI.AddDropdown("Jitter TypeS", ["Offset","Random"]);
UI.AddLabel("Enable Offset Jitter first");
UI.AddSliderInt("JitterS", -180, 180);
UI.AddSliderInt("LBYS", -60, 60);
UI.AddSliderInt("FakeS", -60, 60);
UI.AddSliderInt("Inverted FakeS", -60, 60);
UI.AddSliderInt("Speed:", 0, 100);
UI.AddHotkey("Slow-walk");
UI.AddLabel("In-Air AA");
UI.AddSliderInt("YawA", -180, 180);
UI.AddSliderInt("Inverted YawA", -180, 180);
UI.AddDropdown("Jitter TypeA", ["Offset", "Random"]);
UI.AddLabel("Enable Offset Jitter first");
UI.AddSliderInt("JitterA", -180, 180);
UI.AddSliderInt("LBYA", -60, 60);
UI.AddSliderInt("FakeA", -60, 60);
UI.AddSliderInt("Inverted FakeA", -60, 60);
UI.AddHotkey("In Air(Jump Key)")
UI.AddLabel("========================");
UI.AddLabel("AA Inverter");
UI.AddHotkey("Inverter");
UI.AddLabel("========================");
UI.AddCheckbox("Custom Fakelag(beta)");
UI.AddSliderInt("Randomize", 0, 14);
UI.AddLabel("========================");
UI.AddCheckbox("Custom DT");
UI.AddSliderInt("Shift", 0, 17);
UI.AddSliderInt("Tolerance", 0, 8);
UI.AddLabel("========================");
UI.AddLabel("Custom Aspect Ratio");
UI.AddSliderFloat( "Ratio", 0.0, 5.0 );



function getVal(valName) {return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valName);}



function AA( )
{

var enabled = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Custom AA");
    if(enabled == 1) {

 
AntiAim.SetOverride(1);
AntiAim.SetFakeOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Yaw"));
AntiAim.SetRealOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Fake"));
AntiAim.SetLBYOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "LBY"));

}
   if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Inverter")) {
AntiAim.SetRealOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Inverted Fake"));
    AntiAim.SetFakeOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Inverted Yaw"));
    AntiAim.SetLBYOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Inverted LBY"));
}

var enableds = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter Type");
var jtr=UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter");
    if(enableds == 0) {

UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset",jtr);
}
else if(enableds == 1) {

UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset",Math.floor(Math.random() * jtr));
}
 
}









function DT()
{
  var enabled = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Custom DT");
    if(enabled == 1) {
    Exploit.OverrideShift(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Shift"))
    Exploit.OverrideTolerance(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tolerance"))
   }

   else {
   Exploit.OverrideShift(14)
   Exploit.OverrideTolerance(2)
   
}
}




function Slow() {

  var enabled = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Custom AA");
    if(enabled == 1) {
    if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Slow-walk")) return;
      AntiAim.SetOverride(1);
     AntiAim.SetFakeOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "YawS"));
     AntiAim.SetRealOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "FakeS"));
     AntiAim.SetLBYOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "LBYS"));

    speed = getVal("Speed:");

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
if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Inverter")) {
    AntiAim.SetRealOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Inverted FakeS"));
    AntiAim.SetFakeOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Inverted YawS"));
}
var enableds = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter TypeS");
var jtrS=UI.GetValue("Misc", "JAVASCRIPT", "Script items", "JitterS");
    if(enableds == 0) {

UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset",jtrS);
}
else if(enableds == 1) {

UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset",Math.floor(Math.random() * jtrS));
}
}

function Air() {

  var enabled = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Custom AA");
    if(enabled == 1) {
    if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "In Air(Jump Key)")) return;
      AntiAim.SetOverride(1);
     AntiAim.SetFakeOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "YawA"));
     AntiAim.SetRealOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "FakeA"));
     AntiAim.SetLBYOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "LBYA"));
}

if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Inverter")) {
    AntiAim.SetRealOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Inverted FakeA"));
    AntiAim.SetFakeOffset(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Inverted YawA"));
}
var enableds = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter TypeA");
var jtrA=UI.GetValue("Misc", "JAVASCRIPT", "Script items", "JitterA");
    if(enableds == 0) {

UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset",jtrA);
}
else if(enableds == 1) {

UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset",Math.floor(Math.random() * jtrA));
}

}

function normalaa() {
var enabled = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Default AA");
    if(enabled == 1) {
    AntiAim.SetOverride(0);
   }
else {
AntiAim.SetOverride(1)
}
}

function fakel() {
var enabled = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Custom Fakelag(beta)");
    if(enabled == 1) {
      
      var Randm=UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Randomize");
      UI.SetValue("Anti-Aim", "Fake-Lag","Enabled", 1);
      
      UI.SetValue("Anti-Aim", "Fake-Lag","Limit",Math.floor(Math.random() * Randm));
}
}

function aspectratio( ) {
 menu_val = UI.GetValue("Ratio");
string_menu_val = menu_val.toString();

Convar.SetString ("r_aspectratio", string_menu_val );
}






Cheat.RegisterCallback("CreateMove","AA");
Cheat.RegisterCallback("CreateMove","DT");
Cheat.RegisterCallback("CreateMove", "Slow");
Cheat.RegisterCallback("CreateMove", "Air");
Cheat.RegisterCallback("CreateMove", "normalaa");
Cheat.RegisterCallback("CreateMove", "fakel");

Cheat.RegisterCallback( "FrameStageNotify", "aspectratio" );













