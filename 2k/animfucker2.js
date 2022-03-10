var clock = 0
function createmove()
{
    clock = clock + 0.5
    if (clock > 1)
    {
        if (UI.GetValue("Misc", "GENERAL", "Movement", "Slide walk"))
        {
            UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", 0);
            clock = 0
        }
        else
        {
            UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", 1);
            clock = 0
        }
    }
}
Cheat.RegisterCallback("CreateMove", "createmove")