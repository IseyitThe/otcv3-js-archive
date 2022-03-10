function main() {
    
    UI.AddCheckbox("Override:");
    UI.AddHotkey("Flip:");
    UI.AddCheckbox("Flip on-shot:");
    UI.AddCheckbox("Jitter:");
    UI.AddCheckbox("Pitch:");
    UI.AddCheckbox("Random flick to mid:");
    
    Cheat.RegisterCallback("CreateMove", "adjustAA");
    Cheat.RegisterCallback("Draw", "showAA");
    Cheat.RegisterCallback("weapon_fire", "toggleFlip");
}

function toggleFlip() {
    if (UI.GetValue("Misc", "JAVSCRIPT", "Script items", "Flip on-shot:")) {
        if (getRandomInt(0, 1)) {
            UI.ToggleHotkey("Misc", "JAVASCRIPT", "Script items", "Flip:");
        }
    }
}

main();

function setPitch(index) {
    UI.SetValue("Anti-Aim", "Extra", "Pitch", index);
}

function showAA() {
    Render.String(0, Render.GetScreenSize()[1] / 2, 0, "FAKE: " + text, [151, 200, 50, 255]);
}

text = "LEFT";

function adjustAA() {
    AntiAim.SetOverride(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Override:"));
    
    fake = -76;
    LBY = -130;
    //fake = -30;
    //LBY = -150;
    real = 10;
    text = "LEFT";
    
    if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Flip:")) {
        fake = 10;
        real = -60;
        LBY = 60;
        text = "RIGHT";
    }
    
    if (UI.GetValue("Misc", "JAVSCRIPT", "Script items", "Pitch:")) {
        setPitch([1, 4][getRandomInt(0, 1)]);
    }
    else {
        setPitch(1);
    }
    
    if (UI.GetValue("Misc", "JAVSCRIPT", "Script items", "Jitter:")) {
        fake += (getRandomInt(0, 20));
        real - (getRandomInt(-2, 2) * 10);
    }
    
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Random flick to mid:") && !getRandomInt(0, 100)) {
        fake = -20;
        LBY = -30;
        real = 10;
    }
    
    AntiAim.SetLBYOffset(LBY);
    AntiAim.SetFakeOffset(fake);
    AntiAim.SetRealOffset(real);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive
}