UI.AddCheckbox("Advanced Anti Aim"); // ui shit
UI.AddSliderFloat("JitterPlu", 0, 60);
UI.AddSliderFloat("JitterNeg", -60, 0);
UI.AddSliderFloat("Jitter Speed", 0.0005, 0.5);
UI.AddSliderFloat("YawPlu", 0, 100);
UI.AddSliderFloat("YawNeg", -180, 0);
UI.AddSliderFloat("Yaw Speed", 0.0005, 0.5);
var LastAAJitter = 0;
var LastAAYaw = 0;
function check() {
    if (UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Advanced Anti Aim")) {
        UI.SetEnabled("Misc","JAVASCRIPT","Script items","JitterPlu", true)
        UI.SetEnabled("Misc","JAVASCRIPT","Script items","JitterNeg", true)
        UI.SetEnabled("Misc","JAVASCRIPT","Script items","Jitter Speed", true)
        UI.SetEnabled("Misc","JAVASCRIPT","Script items","YawPlu", true)
        UI.SetEnabled("Misc","JAVASCRIPT","Script items","YawNeg", true)
        UI.SetEnabled("Misc","JAVASCRIPT","Script items","Yaw Speed", true)
    }else{
        UI.SetEnabled("Misc","JAVASCRIPT","Script items","JitterPlu", false)
        UI.SetEnabled("Misc","JAVASCRIPT","Script items","JitterNeg", false)
        UI.SetEnabled("Misc","JAVASCRIPT","Script items","Jitter Speed", false)
        UI.SetEnabled("Misc","JAVASCRIPT","Script items","YawPlu", false)
        UI.SetEnabled("Misc","JAVASCRIPT","Script items","YawNeg", false)
        UI.SetEnabled("Misc","JAVASCRIPT","Script items","Yaw Speed", false)
    }
}
function jitterAA() {
    var currJitter = UI.GetValue( "Anti-Aim", "Rage Anti-Aim", "Jitter offset" )
    var CurrentTime = Global.Realtime();
if (UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Advanced Anti Aim")) {
    if(CurrentTime - LastAAJitter > UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Jitter Speed")) {
        if(currJitter != (Math.round(UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "JitterNeg")))) {
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", Math.round(UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "JitterNeg")))
        LastAAJitter = CurrentTime
    }else{
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", Math.round(UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "JitterPlu")))
        LastAAJitter = CurrentTime;
   }
  }
 }
}
function yawAA() {
    var currJitter = UI.GetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset" )
    var CurrentTime2 = Global.Realtime();
if (UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Advanced Anti Aim")) {
    if(CurrentTime2 - LastAAYaw > UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Yaw Speed")) {
        if(currJitter != (Math.round(UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "YawNeg")))) {
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", Math.round(UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "YawNeg")))
        LastAAYaw = CurrentTime2
    }else{
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", Math.round(UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "YawPlu")))
        LastAAYaw = CurrentTime2;
   }
  }
 }
}
Global.RegisterCallback("Draw", "jitterAA");
Global.RegisterCallback("Draw", "yawAA");
Global.RegisterCallback("Draw", "check");
