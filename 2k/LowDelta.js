function lowdelta()
{
    localplayer_index = Entity.GetLocalPlayer( );
    var inverted = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"], "AA Inverter");

        if (UI.GetValue (["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]) && !inverted)
        {    
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(-17);
        }
        else if(UI.GetValue (["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]) && inverted)
        {
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(17);
        }
        else
        {
         
            AntiAim.SetOverride(0);
        }
}

Cheat.RegisterCallback("CreateMove", "lowdelta");