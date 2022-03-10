// fakelag on key (pasted by zerxii)
function FLToggle()
{
    
        UI.SetValue( "Anti-Aim", "Fake-Lag", "Enabled", false );
    // draws text when not active (red)
        Render.String( 25, 1000 - 5, 0, "FL", [255, 0, 0, 255], 4);
 
    // checks if fakelag toggle key is held down
        if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items", "FLToggle")) {

         UI.SetValue( "Anti-Aim", "Fake-Lag", "Enabled", true );
    // draws text when active (green)
         Render.String( 25, 1000 - 5, 0, "FL", [0, 255, 0, 255], 4);
        }
}

function FLKey()
{
UI.AddHotkey( "Toggle Fake-Lag", "JAVASCRIPT", "Script Items", "FLToggle" );
}


Global.RegisterCallback("Draw", "FLToggle")

FLKey();