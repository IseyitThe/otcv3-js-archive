UI.AddSliderInt("           -> Meme AA <-", -1, 0);
UI.AddCheckbox("Stay spinnin'");
UI.AddCheckbox("Random Spin Speed");
UI.AddSliderInt("Spin Speed", 0, 100);
UI.AddCheckbox("Random Pitch");
UI.AddSliderInt("                 -> v1 <-", -1, 0);

UI.SetEnabled("Random Spin Speed", false);
UI.SetEnabled("Spin Speed", false);

var aa = 0;
var rp = 0;
var p = false;
var res;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getVal(valueName) {
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valueName);
}

function spin() {
    UI.SetEnabled("Random Spin Speed", true);
    UI.SetEnabled("Spin Speed", true);
    var sSpeed = getVal("Spin Speed");
    if (getVal("Random Spin Speed")) {
        sSpeed = getRandomInt(101);
        UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Spin Speed", sSpeed);
    }
    aa = aa - sSpeed;
    if (aa <= -180) { aa = 180; }
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", aa);
}

function pitch() {
    if (UI.GetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions") != 0) { 
        res = UI.GetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions");
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0);
        p = true;
    }
    rp = getRandomInt(5);
    UI.SetValue("Anti-Aim", "Extra", "Pitch", rp);
}

function handle() {
    if (getVal("Stay spinnin'")) { 
        spin();
    } else {
        UI.SetEnabled("Random Spin Speed", false);
        UI.SetEnabled("Spin Speed", false);
        aa = 0;
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", aa);
    }
    if (getVal("Random Pitch")) { pitch(); }
}

function onUnload() {
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
    if (p == true) { UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", res); }
}

Cheat.RegisterCallback("Draw", "handle");
Cheat.RegisterCallback("Unload", "onUnload");