//Trashtalker
var frags = 0;    //count
function event_player_death()
{
    iVictim = Event.GetInt("userid"); iVictim_index = Entity.GetEntityFromUserID(iVictim);
    iAttacker = Event.GetInt("attacker"); iAttacker_index = Entity.GetEntityFromUserID(iAttacker);
    if(Entity.GetLocalPlayer()==iVictim_index && Entity.GetLocalPlayer( )!==iAttacker_index)    return;   
    frags++;
    //Global.PrintChat(frags + "\n");    // kill amount
    Global.PrintChat("Hi, retard u got pwned by nixware.cc!" + "\n"); //set here and uncomment any trash u want
    Global.PrintChat("Уебище глупое упало!" + "\n");
}
Global.RegisterCallback("player_death","event_player_death");