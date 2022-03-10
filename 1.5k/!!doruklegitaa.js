// Toggle Legit Anti-Aim button by antrax.76212
UI.AddHotkey("Toggle Legit Anti-Aim", "JAVASCRIPT", "Script Items", "AAToggle");

function LegitAAToggle()
{
    UI.SetValue( "Anti-Aim", "Legit Anti-Aim", "Enabled", false );
    if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items", "AAToggle")) {
        UI.SetValue( "Anti-Aim", "Legit Anti-Aim", "Enabled", true );
        Render.String( 25, 1000 - 5, 0, "AA", [0, 255, 0, 255], 4);
    } else {
        Render.String( 25, 1000 - 5, 0, "AA", [255, 0, 0, 255], 4);
    }
}

Global.RegisterCallback("Draw", "LegitAAToggle");