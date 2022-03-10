UI.AddCheckbox("animbreaker");
UI.AddSliderInt("animbreaker speed", 1, 10);
var old_tick_count = 0;
function draw()
{
    if (UI.GetValue("Script items", "animbreaker") && (Globals.Tickcount() - old_tick_count) > (UI.GetValue("Script items", "animbreaker speed")))
    {
        if (UI.GetValue("Misc", "GENERAL", "Movement", "Slide walk"))
            UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", 0);
        else
            UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", 1);
        old_tick_count = Globals.Tickcount();
    }
}
Cheat.RegisterCallback("Draw", "draw");