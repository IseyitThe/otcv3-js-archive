UI.AddCheckbox("Automatic score reset");

function resetscore()
{
    if (UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Automatic score reset" ) == 1)
    {
        localplayer_index = Entity.GetLocalPlayer();
        victim = Event.GetInt("userid");
        var kills = Entity.GetProp( localplayer_index, "CPlayerResource", "m_iKills" );
        var deaths = Entity.GetProp( localplayer_index, "CPlayerResource", "m_iDeaths");
        victim_index = Entity.GetEntityFromUserID(victim);
            if (victim_index == localplayer_index)
            {
             var kdr = kills / deaths;
                if (kdr < 1) {
                    Global.ExecuteCommand( "say_team /rs" );
                    UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Custom ClanTag", 0);
                } else {
                    UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Custom ClanTag", 1);
                }
            }
    } 
}

Global.RegisterCallback("player_death", "resetscore");