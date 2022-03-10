

Cheat.RegisterCallback("CreateMove", "aaLoop");





function aaLoop() {
    if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter"))
	{
	AntiAim.SetOverride(1);
	AntiAim.SetFakeOffset(getRandomIntInclusive(-39, -19));
    AntiAim.SetLBYOffset(-90);
    AntiAim.SetRealOffset(getRandomIntInclusive(5, 22));
    }

    else if (!UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter"))
	{
	AntiAim.SetOverride(1);
    AntiAim.SetFakeOffset(getRandomIntInclusive(19, 39));
    AntiAim.SetLBYOffset(90);
    AntiAim.SetRealOffset(getRandomIntInclusive(-22, -5));
	}
}



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }