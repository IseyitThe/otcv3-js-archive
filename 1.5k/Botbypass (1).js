// Anti-Reportbot Script
// Check forum thread to see how it works
// This is NOT an original idea but we wanted to make it 

UI.AddLabel("Anti-Reportbot");
UI.AddCheckbox("Enable Anti-Reporbot");

var suck = Event.GetString("cs_win_panel_match")
var cock = !UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Anti-Reporbot")

function arb() {
    if (cock) return;
    if (suck, true){
        Cheat.ExecuteCommand("disconnect");
    }
}

Cheat.RegisterCallback("cs_win_panel_match", "arb");