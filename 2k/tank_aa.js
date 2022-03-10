//Test Version 1.0 by Ominous
var master = {
    dir: "back",
    cycle: false,
    iteration: 1,
    showArrows: false,
    showCycle: false,
    showDegree: false,
    showInverted: false,
    getAAInvert: function() { return UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter") },
    setAAInvert: function() { return UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter") },
    getInvert: function() { return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Auto-Inverter") },
    setVisible: function() {  
    }
}

function invert() {
	
    if (!master.getInvert() || Entity.GetEntityFromUserID(Event.GetInt("userid")) != Entity.GetLocalPlayer()) return;

    master.setAAInvert();
}

function ui() 
{
    UI.AddSliderFloat("Tank AA Active", 16.28, 16.28);
    UI.AddSliderFloat("Version 1.0", 0.17, 0.17);
    UI.AddSliderFloat("Created By Ominous", 0.90, 0.90);
	UI.AddCheckbox("Auto-Inverter");
}  

function yawvalues() 
{
    var realtime = Global.Realtime();
    var yawlimit = UI.GetValue("Misc","JAVASCRIPT","Script items","Tank AA Active");
    var yawfreq = UI.GetValue("Misc","JAVASCRIPT","Script items","Version 1.0");
    var yawcenter = UI.GetValue("Misc","JAVASCRIPT","Script items","Created By Ominous#7262");
    var yaw = (yawlimit*Math.cos((realtime)/yawfreq) + yawcenter);
    return yaw;
}

function Initialize() 
{  
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawvalues());
}

function main() {
    ui();
    Global.RegisterCallback("Draw", "Initialize", "CreateMove");
    Global.RegisterCallback("player_hurt", "invert");
    Global.Print("Welcome To Tank School");
} main();