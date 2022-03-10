function uzzidelta()
{
    localplayer_index = Entity.GetLocalPlayer( );
    var inverted = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter");


        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk") && !inverted)
        {
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(-16);
        }
        else if(UI.IsHotkeyActive ("Anti-Aim", "Extra", "Slow walk") && inverted)
        {
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(1);
            AntiAim.SetRealOffset(18);
        }
        else
        {
            AntiAim.SetOverride(0);
        }
}

Cheat.RegisterCallback("CreateMove", "uzzidelta");