function ui()
{
    UI.AddSliderFloat("Yaw Upper And Lower Limit", 0, 180);
    UI.AddSliderFloat("Yaw Frequency", 0.01, 1);
    UI.AddSliderFloat("Yaw Center Value", -180, 180);
    UI.AddSliderFloat("Fake-Lag Upper And Lower Limit", 0, 5);
    UI.AddSliderFloat("Fake-Lag Frequency", 0.01, 1);
    UI.AddSliderFloat("Fake-Lag Center Value", 0, 16);
}  

function yawvalues()
{
    var realtime = Global.Realtime();
    var yawlimit = UI.GetValue("Misc","JAVASCRIPT","Script items","Yaw Upper And Lower Limit");
    var yawfreq = UI.GetValue("Misc","JAVASCRIPT","Script items","Yaw Frequency");
    var yawcenter = UI.GetValue("Misc","JAVASCRIPT","Script items","Yaw Center Value");
    var yaw = (yawlimit*Math.cos((realtime)/yawfreq) + yawcenter);
    return yaw;
}

function fakelagRando()
{  
    var realtime = Global.Realtime();
    var fllimit = UI.GetValue("Misc","JAVASCRIPT","Script items","Fake-Lag Upper And Lower Limit");
    var flfreq = UI.GetValue("Misc","JAVASCRIPT","Script items","Fake-Lag Frequency");
    var flcenter = UI.GetValue("Misc","JAVASCRIPT","Script items","Fake-Lag Center Value");
    var fl = (fllimit*Math.cos((realtime)/flfreq) + flcenter);
    return fl;
}

/*function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}*/

function Initialize()
{  
    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit",fakelagRando());
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawvalues());
}
ui();
Global.RegisterCallback("Draw", "Initialize");
Global.Print("Just another probably useless anti-aim script\n");