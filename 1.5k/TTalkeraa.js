UI.AddLabel("===TOXIC TRASHTALK ACTIVE===");
UI.AddCheckbox("include killed player name");

///-----------------------------
///Write trash message on kill
///-----------------------------
function getToxicStringOnKill(killweapon, isHeadshot)
{
    var finalstring = "ahahaha";
    var tickrate = (Globals.Tickcount() % 200);

    if(tickrate >= 0 && tickrate <= 20)
    {
        finalstring = ", el lett vontatva,viszlat";
    }
    else if(tickrate > 20 && tickrate <= 40)
    {
        finalstring = ", le lett foglalva";
    }
    else if(tickrate > 40 && tickrate <= 60)
    {
        finalstring = ", el lett szallitva";
    }
    else if(tickrate > 60 && tickrate <= 80)
    {
        finalstring = ", 0 iq????";
    }
    else if(tickrate > 80 && tickrate <= 100)
    {
        finalstring = ", le lett tk-zva";
    }
    else if(tickrate > 100 && tickrate <= 120)
    {
        finalstring = ", meg lett olve xd";
    }
    else if(tickrate > 120 && tickrate <= 140)
    {
        finalstring = ", el lett szallitva magan repulovel";
    }
    else if(tickrate > 140 && tickrate <= 160)
    {
        finalstring = ", 1 te cigany ";
    }
    else if(tickrate > 160 && tickrate <= 180)
    {
        finalstring = ", ennyi vagy cigany";
    }
    else if(tickrate > 180 && tickrate <= 200)
    {
        finalstring = ", ennyi vagy";
    }
  
    if(isHeadshot && tickrate < 100)
    {
        finalstring = ", fejloves volt ocskos";
    }
  
  
    return finalstring;
}

function onPlayerDeath()
{
    killer = Event.GetInt("attacker");
    victim = Event.GetInt("userid");

    killer_index = Entity.GetEntityFromUserID(killer);
    victim_index = Entity.GetEntityFromUserID(victim);

    victim_enemy = Entity.IsEnemy(victim_index);
    var victim_name = Entity.GetName(victim_index);
  
    if(!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "include killed player name"))
    {
        victim_name = "";
    }
  
    if (Entity.IsLocalPlayer(killer_index))
    {
            Global.ExecuteCommand("say " + victim_name + getToxicStringOnKill(Event.GetInt("weapon"), Event.GetInt("headshot")));
    }
}

Global.RegisterCallback("player_death", "onPlayerDeath");