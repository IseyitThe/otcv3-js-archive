var commands = [
    "go",
    "fallback",
    "sticktog",
    "holdpos",
    "followme",
    "roger",
    "negative",
    "cheer",
    "compliment",
    "thanks",
    "enemyspot",
    "needbackup",
    "takepoint",
    "sectorclear",
    "inposition",
    "coverme",
    "regroup",
    "takingfire",
    "report",
    "reportingin"
]
UI.AddCheckbox("Radio spam Toggle");
UI.AddDropdown("Radio command", commands);
var lastspam = Globals.Tickcount();
function menuVis()
{
    (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Radio spam Toggle")) ? UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Radio command", true) : UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Radio command", false)
}
Cheat.RegisterCallback("Draw", "menuVis")
function radiospam()
{
    var selectedCmd = UI.GetString("Misc", "JAVASCRIPT", "Script items", "Radio command")
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Radio spam Toggle") && Entity.IsAlive(Entity.GetLocalPlayer()))
    {
        if (Globals.Tickcount() - lastspam >= 66)
        {
            Cheat.ExecuteCommand("cmd " + selectedCmd)
            lastspam = Globals.Tickcount()
        }
    }
}
Cheat.RegisterCallback("CreateMove", "radiospam")