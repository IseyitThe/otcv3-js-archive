UI.AddLabel("[ KillSound's Spam ]");
UI.AddCheckbox("KillSound Spam Activate");
UI.AddCheckbox("KillSound loop back");
UI.AddSliderFloat("KillSound sound time", 0.1, 10);

var get = {
    value(v) {
        return UI.GetValue("Misc", "JAVASCRIPT", "Script items", v);
    },

    string(s) {
        return UI.GetString("Misc", "JAVASCRIPT", "Script items", s);
    }
}
disable_func = function(){
    Global.ExecuteCommand("voice_loopback "+0);
    Global.ExecuteCommand("voice_inputfromfile "+ 0);
    Global.ExecuteCommand('-voicerecord');
    }

var handler = null;
var timer = 0;
var enabled = true;


loopback = get.value("KillSound loop back");
time = get.value("KillSound sound time");
active = get.value("KillSound Spam Activate");

handler = function (){
    if (Global.Realtime() >= timer)
    {
        time = get.value("KillSound sound time");
        timer = Global.Realtime() + time;
        if (enabled){
            disable_func();
            enabled = false;
        }
    }
}

function onPlayerDeath()
{
    
    attacker = Event.GetInt("attacker");
    victim = Event.GetInt("userid");

    attacker_index = Entity.GetEntityFromUserID(attacker);
    victim_index = Entity.GetEntityFromUserID(victim);

    attacker_name = Entity.GetName(attacker_index);
    victim_name = Entity.GetName(victim_index);

    attacker_me = Entity.IsLocalPlayer(attacker_index);
    victim_enemy = Entity.IsEnemy(victim_index);
    
    
    loopback = get.value("KillSound loop back");
    time = get.value("KillSound sound time");
    active = get.value("KillSound Spam Activate");
    
    handler();
    if (attacker_me && active ){
        var lp_activate = loopback ? 1 : 0;
        Global.ExecuteCommand("voice_loopback "+lp_activate);
        Global.ExecuteCommand("voice_inputfromfile "+1);
        Global.ExecuteCommand("say " + time + " " + lp_activate);
        Global.ExecuteCommand('+voicerecord');
        
        timer = Global.Realtime() + time;
        enabled = true;
        
        
    }
}
Global.RegisterCallback("player_death", "onPlayerDeath");