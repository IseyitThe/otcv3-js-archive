//Created by Ominous
var master = {
    dir: "back",
    cycle: false,
    iteration: 0,
    showArrows: false,
    showCycle: false,
    showDegree: false,
    showInverted: false,
    getYaw: function() { return UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset") },
    setYaw: function(yaw) { return UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yaw) },
    getAAInvert: function() { return UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter") },
    setAAInvert: function() { return UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter") },
    getWidth: function() { return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "[Jitter] Jitter Width") },
    getFreq: function() { return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "[Jitter] Jitter Frequency") },
    getRandom: function() { return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "[Jitter] Randomize Factor") },
    getInvert: function() { return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "[Jitter] Auto-Inverter") },
    setVisible: function() {
        
    }
}

var colors = {
    neg: [255, 255, 255, 255],
    pos: [250, 161, 255, 255]
}

function ui() {
    UI.AddSliderInt("[Jitter] Jitter Width", 0, 90);
    UI.AddSliderInt("[Jitter] Jitter Frequency", 1, 100);
    UI.AddSliderInt("[Jitter] Randomize Factor", 0, 25);
    UI.AddCheckbox("[Jitter] Auto-Inverter");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function jitter() {
    master.iteration++;

    if (master.iteration % master.getFreq() != 0) return;
    master.cycle = !master.cycle;

    if (master.dir == "left") master.setYaw((master.cycle ? -90 : master.getWidth()-90)+getRandomInt(-master.getRandom(), master.getRandom()));
    else if (master.dir == "back") master.setYaw((master.cycle ? master.getWidth()/2 : -(master.getWidth()/2))+getRandomInt(-master.getRandom(), master.getRandom()));
    else if (master.dir == "right") master.setYaw((master.cycle ? 90 : 90-master.getWidth())+getRandomInt(-master.getRandom(), master.getRandom()));
}

function invert() {
    if (!master.getInvert() || Entity.GetEntityFromUserID(Event.GetInt("userid")) != Entity.GetLocalPlayer()) return;

    master.setAAInvert();
}


function main() {
    ui();
    Global.RegisterCallback("CreateMove", "jitter");
    Global.RegisterCallback("player_hurt", "invert");
    Global.Print("SimpleJitter loaded");
} main();