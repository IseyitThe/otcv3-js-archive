UI.AddHotkey("Toggle on keybind");
function keybindToggle() {
	if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Toggle on keybind")) {
		UI.SetValue("Legit", "GENERAL", "General", "Enabled", false);
		UI.SetValue("Rage", "GENERAL", "Enabled", true);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", true);
		UI.SetValue("Anti-Aim", "Fake angles", "Enabled", true);
		UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", false);
		UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", true);
	}
	else {
		UI.SetValue("Legit", "GENERAL", "General", "Enabled", true);
		UI.SetValue("Rage", "GENERAL", "Enabled", false);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", false);
		UI.SetValue("Anti-Aim", "Fake angles", "Enabled", false);
		UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", false);
		UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", true);
	}
}
Global.RegisterCallback("Draw", "keybindToggle")