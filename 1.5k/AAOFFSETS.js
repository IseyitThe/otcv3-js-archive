/*
    05/2/2020:
        Added probably a terrible way of doing anti-aim invert indicators
    27/02/2020
        Added: toggle switch to go from script Anti-Aim to default onetap aa
*/
UI.AddCheckbox("Use custom AA")
UI.AddSliderInt("LBY offset", -180, 180)
UI.AddSliderInt("Real offset", -180, 180)
UI.AddSliderInt("Fake offset", -180, 180)
UI.AddSliderInt("Inverted LBY offset", -180, 180)
UI.AddSliderInt("Inverted Real offset", -180, 180)
UI.AddSliderInt("Inverted Fake offset", -180, 180)


function main() {
  
    // ignore this
    /*
    forumBG = Render.AddTexture("ot/scripts/vrijqau.png");
    Render.TexturedRect( 0, 0, 450, 450, forumBG );     */
    // suggestion: https://www.onetap.com/threads/something-that-anyone-making-an-aa-script-should-do.17302/
   if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Use custom AA")) {
        AntiAim.SetOverride(1);
   } else {
        AntiAim.SetOverride(0);
   }
    LBYOffset = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "LBY offset")
    RealOffset = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Real offset")
    FakeOffset = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Fake offset")
    LBYInvert = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Inverted LBY offset")
    RealInvert = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Inverted Real offset")
    FakeInvert = UI.GetValue ("Misc", "JAVASCRIPT", "Script items", "Inverted Fake offset")
    Inverted = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")
  
    if(Inverted) {
        AntiAim.SetFakeOffset(FakeInvert);
        AntiAim.SetRealOffset(RealInvert);
        AntiAim.SetLBYOffset(LBYInvert);
    } else {
        AntiAim.SetFakeOffset(FakeOffset);
        AntiAim.SetRealOffset(RealOffset);
        AntiAim.SetLBYOffset(LBYOffset);
    }
}
// terribly made function for indicators
function test() {
    var local = Entity.GetLocalPlayer()
    if (Entity.IsAlive(local)) {
      
    var test = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")
     
        Render.String( 900, 525 -5, 0, "<", [137, 142, 208, 1505], 4)
        Render.String( 1000, 525 -5, 0, ">", [255, 0, 0, 255], 4)
    if (test) {
        Render.String( 900, 525 -5, 0, "<", [255, 0, 0, 255], 4)
        Render.String( 1000, 525 -5, 0, ">", [137, 142, 208, 1505], 4)
        }
    }
}
Cheat.RegisterCallback("Draw", "test");
Cheat.RegisterCallback("CreateMove", "main");