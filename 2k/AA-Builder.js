UI.AddLabel("-------------------------------------------");
UI.AddSliderInt("LBY offset", -60, 60)
UI.AddSliderInt("Real offset", -60, 60)
UI.AddSliderInt("Fake offset", -180, 180)
UI.AddSliderInt("Jitter offset", -180, 180)
UI.AddLabel(" ");
UI.AddSliderInt("Inverted LBY offset", -60, 60)
UI.AddSliderInt("Inverted Real offset", -60, 60)
UI.AddSliderInt("Inverted Fake offset", -180, 180)
UI.AddSliderInt("Inverted Jitter offset", -180, 180)
UI.AddCheckbox("AntiAim.SetOverride(0)")
UI.AddLabel("-------------------------------------------");
function main() {
    var LBYOffset = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "LBY offset")
    var RealOffset = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Real offset")
    var FakeOffset = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Fake offset")
	var JitterOffset = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Jitter offset")
	
    var LBYInvert = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Inverted LBY offset")
    var RealInvert = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Inverted Real offset")
    var FakeInvert = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Inverted Fake offset")
	var JitterInvert = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Inverted Jitter offset")

    var Inverted = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")
	var SetJitterOffset = UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset")

    if(Inverted) {
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(FakeInvert);
        AntiAim.SetRealOffset(RealInvert);
        AntiAim.SetLBYOffset(LBYInvert);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", JitterInvert)
	} else {
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(FakeOffset);
        AntiAim.SetRealOffset(RealOffset);
        AntiAim.SetLBYOffset(LBYOffset);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", JitterOffset)
	}if(UI.GetValue("Misc", "AntiAim.SetOverride(0)")) {
		AntiAim.SetOverride(0)
	}else{
		AntiAim.SetOverride(1)
	}
}
Cheat.RegisterCallback("CreateMove", "main");