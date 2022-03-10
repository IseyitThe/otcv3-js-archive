UI.AddTextbox("Onetap say")
var hits = []
function onPlayerHurt(){
    if(Entity.GetEntityFromUserID(Event.GetInt("attacker")) == Entity.GetLocalPlayer()){
        if(!hits[Entity.GetEntityFromUserID(Event.GetInt("userid"))] || hits[Entity.GetEntityFromUserID(Event.GetInt("userid"))] == 0){
            hits[Entity.GetEntityFromUserID(Event.GetInt("userid"))] = 1
        }
        else{
            hits[Entity.GetEntityFromUserID(Event.GetInt("userid"))]++
        }
    }
}
function onPlayerDeath(){
    if(Entity.GetEntityFromUserID(Event.GetInt("attacker")) == Entity.GetLocalPlayer()){
        if(hits[Entity.GetEntityFromUserID(Event.GetInt("userid"))] == 1){
            Cheat.ExecuteCommand("say " + UI.GetString("Script Items", "Onetap say"))
            
        }
        hits[Entity.GetEntityFromUserID(Event.GetInt("userid"))] = 0   
    }
}
function reset(){
    hits = []
}
Cheat.RegisterCallback("player_hurt", "onPlayerHurt")
Cheat.RegisterCallback("player_death", "onPlayerDeath")
Cheat.RegisterCallback("round_start", "reset")
