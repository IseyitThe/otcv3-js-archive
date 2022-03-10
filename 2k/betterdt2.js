UI.AddCheckbox("Better doubletap");
function on_ragebot_fire()
{
 
    ragebot_target_exploit = Event.GetInt("exploit");
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Better doubletap"))
    {
        if (ragebot_target_exploit == 2)
        {
          Exploit.DisableRecharge()
          UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap", false);
        }
        else if (ragebot_target_exploit == 0)
        {
          UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap", true);
          Exploit.EnableRecharge()
        }
    }     
}
Global.RegisterCallback("ragebot_fire", "on_ragebot_fire");
Global.RegisterCallback("player_death", "attacker", "on_ragebot_fire");