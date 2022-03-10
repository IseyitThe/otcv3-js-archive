function on_player_death()
{
    var roasts = ['You\'r so bad that even china declined they made you.', 'I just snapped my neck. Nope, the pain still isn’t as bad as it seeing you playing this game...', 'I would ask how old you are, but I know you can\'t count that high', 'Do you still love nature...despite what it did to you?', 'We all sprang from apes, but you didn\'t spring far enough.','Get good, get onetap.su','When was your last time you got a kill, get a kill, get onetap.su']
    var roast = roasts[Math.floor(Math.random()*roasts.length)];
     

        attacker = Event.GetInt("attacker");
        attacker_index = Entity.GetEntityFromUserID(attacker);
        victim = Event.GetInt("userid");
        victim_index = Entity.GetEntityFromUserID(victim);
        victim_name = Entity.GetName(victim_index);

        if (attacker_index == Entity.GetLocalPlayer())
        {
        Global.ExecuteCommand("say " + victim_name + ", " + roast + "\n");
        }
   
}
Global.RegisterCallback("player_death", "on_player_death");