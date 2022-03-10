UI.AddHotkey("Toggle Rage Anti-Aim");

function LegitAAToggle()
{
    UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Enabled", false );
    if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items", "Toggle Rage Anti-Aim")) {
        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Enabled", true );
        Render.String( 24, 1000 - 60, 0, "Fake", [0, 0, 0, 0], 4);
    } else {
        Render.String( 25, 1000 - 60, 0, "Fake", [0, 0, 0, 0], 4);
    }
}

Global.RegisterCallback("Draw", "LegitAAToggle");