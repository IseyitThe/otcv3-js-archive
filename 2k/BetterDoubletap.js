function on_ragebot_fire()
{
 
    ragebot_target_exploit = Event.GetInt("exploit");
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Better doubletap"))
    {
        if (ragebot_target_exploit == 2)
        {
            UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery","teleport Release", false);
        }
        else
        {
            UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery","teleport Release", true);
        }
    }     
}
Global.RegisterCallback("ragebot_fire", "on_ragebot_fire");