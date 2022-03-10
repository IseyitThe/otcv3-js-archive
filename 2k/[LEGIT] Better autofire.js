UI.AddCheckbox("Enable autofire speed");
UI.AddSliderFloat("Autofire Speed", 0.000, 1.000);


function syncjsaf()
{
	UI.SetValue("Misc", "General", "Miscellaneous", "Auto fire", UI.GetValue("Misc", "JAVASCRIPTS", "Script items", "Enable autofire speed"));
}

function custom_autofire()
{
	UI.SetValue("Misc", "General", "Miscellaneous", "Delay", UI.GetValue("Misc", "JAVASCRIPTS", "Scipt items", "Autofire Speed"));
}


function IsEnabled()
{
	UI.SetEnabled("Misc", "JAVASCRIPTS", "Script items", "Autofire Speed", UI.GetValue("Enable autofire speed"));
}


function SelectedWeaponRecovery()
{
    localplayer_index = Entity.GetLocalPlayer();
    localplayer_weapon = Entity.GetWeapon(localplayer_index);
    weapon_name = Entity.GetName(localplayer_weapon);
	
	switch (weapon_name)
	{
	case "glock 18":
	UI.SetValue("Autofire Speed", 0.2)
	break;
	case "dual berettas":
	UI.SetValue("Autofire Speed", 0.437)
	break;
	case "p250":
	UI.SetValue("Autofire Speed", 0.287)
	break;
	case "tec 9":
	UI.SetValue("Autofire Speed", 0.315)
	break;
	case "five seven":
	UI.SetValue("Autofire Speed", 0.2)
	break;
	case "desert eagle":
	UI.SetValue("Autofire Speed", 0.449)
	break;
	case "usp s":
	UI.SetValue("Autofire Speed", 0.291)
	break;
	case "p2000":
	UI.SetValue("Autofire Speed", 0.291)
	break;
	}
}	

Cheat.RegisterCallback("CreateMove", "custom_autofire");
Cheat.RegisterCallback("CreateMove", "syncjsaf");
Cheat.RegisterCallback("CreateMove", "IsEnabled");
Cheat.RegisterCallback("Draw", "SelectedWeaponRecovery");