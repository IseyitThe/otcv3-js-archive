UI.AddLabel("----------------");
UI.AddLabel("Reversive Discord");
UI.AddLabel("https://discord.gg/SgjxYfj");
UI.AddCheckbox("Enable Kill Text")
UI.AddCheckbox("Clantag Kill")
UI.AddTextbox("Kill text:");
UI.AddTextbox("Text On Headshot:")
UI.AddLabel("Available Flags:\n{target}, {me}, {tickrate}, {totalKills},\n{totalKillsNth}, {targetKills},\n{targetKillsNth}, {weapon}, {latency},\n{serverIP}, {mapName},\n{targetWeapon}");
UI.AddLabel("\n");
UI.AddLabel("\n");
UI.AddLabel("\n");
UI.AddLabel("\n");
UI.AddLabel("====KillVoice====");
UI.AddCheckbox("Enable Kill Voice")
UI.AddCheckbox("Loopback")
UI.AddTextbox("Kill Voice Path: (relative to /sound/)");
UI.AddSliderFloat("Sound Length", 0.0, 4.0);
UI.AddTextbox("Voice On Headshot:")
UI.AddSliderFloat("Sound Length On Headshot", 0.0, 4.0);
UI.AddLabel("iiVeil#0001");
UI.AddLabel("----------------");

var total_kills = 0
var started = 0.0;
var playing = false;
var kills = {
    
}
var hs = false

var get = {
    value(v) {
        return UI.GetValue("Misc", "JAVASCRIPT", "Script items", v);
    },

    string(s) {
        return UI.GetString("Misc", "JAVASCRIPT", "Script items", s);
    }
}

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

function CreateText(a) {
    var set = "";
    if (a === "kill") {
        set = "Kill text:"
    }else if (a === "kill headshot") {
        set = "Text On Headshot:"
    }
    var final = "";
    var words = get.string(set).split(" ");
    for (var i = 0; i < words.length; i += 1) {
        if (words[i] === "{target}") {
            words[i] = victim_name
        } 
        else if (words[i] === "{me}") {
            words[i] = attacker_name
        }
        else if (words[i] === "{tickrate}"){
            words[i] = Globals.Tickrate()
        }
        else if (words[i] === "{weapon}"){
            words[i] = Entity.GetName(Entity.GetWeapon(attacker_index))
        }
        else if (words[i] === "{latency}"){
            words[i] = Math.round(Local.Latency()*1000)
        }
        else if (words[i] === "{serverIP}"){
            words[i] = World.GetServerString();
        }
        else if (words[i] === "{targetKills}"){
            words[i] = kills[victim]
        }
        else if (words[i] === "{mapName}"){
            words[i] = World.GetMapName()
        }
        else if (words[i] === "{totalKills}"){
            words[i] = total_kills
        }
        else if (words[i] === "{totalKillsNth}"){
            words[i] = ordinal_suffix_of(total_kills)
        }
        else if (words[i] === "{targetKillsNth}"){
            words[i] = ordinal_suffix_of(kills[victim])
        }
        else if (words[i] === "{targetWeapon}"){
            words[i] = Entity.GetName(Entity.GetWeapon(victim_index))
        }
    }
    for (var i = 0; i < words.length; i += 1) {
        final += words[i] + ' '
    }
    return final
}

function OnPlayerDeath() {
    attacker = Event.GetInt("attacker");
    victim = Event.GetInt("userid");

    attacker_index = Entity.GetEntityFromUserID(attacker);
    victim_index = Entity.GetEntityFromUserID(victim);

    attacker_name = Entity.GetName(attacker_index);
    victim_name = Entity.GetName(victim_index);

    attacker_me = Entity.IsLocalPlayer(attacker_index);
    victim_me = Entity.IsLocalPlayer(victim_index)
    victim_enemy = Entity.IsEnemy(victim_index);

    if (attacker_me) {
        total_kills += 1
        if (kills[victim] !== undefined) {
            kills[victim] += 1
        } else {
            kills[victim] = 1
        }
        if (get.value("Clantag Kill")) {
            Local.SetClanTag(victim_name);
        }
        if (get.value("Enable Kill Text")) {
            if (Event.GetInt("headshot")) {
                if (get.string("Text On Headshot:") === "") {
                    Global.ExecuteCommand("say " + CreateText("kill"))
                } else {
                    Global.ExecuteCommand("say " + CreateText("kill headshot"))
                }
            } else {
                Global.ExecuteCommand("say " + CreateText("kill"))
            }
        }
        if (get.value("Enable Kill Voice") && get.string("Kill Voice Path: (relative to /sound/)") !== "") {
            started = Global.Realtime();
            playing = true;
            if (get.value("Loopback"))
            {
                Global.ExecuteCommand("voice_loopback 1");
            }
            var search = "";
            if (Event.GetInt("headshot")) {
                if (get.string("Voice On Headshot:") === "") {
                    hs =  false
                    search = "Kill Voice Path: (relative to /sound/)"
                } else {
                    hs = true
                    search = "Voice On Headshot:"
                }
            } else {
                hs =  false
                search = "Kill Voice Path: (relative to /sound/)"
            }
            Sound.PlayMicrophone('C:\\Program Files (x86)\\Steam\\steamapps\\common\\Counter-Strike Global Offensive\\csgo\\sound\\' + get.string(search));
        }
    }
}



function Reset()
{
    var n = ""
    if (hs) {
        n = get.value("Sound Length On Headshot")
    } else {
        n = get.value("Sound Length")
    }
    if (playing && Math.abs(started + n - Global.Realtime()) <= 0.05)
    {
        Sound.StopMicrophone();
        Global.ExecuteCommand("voice_loopback 0");
    }
}




Global.RegisterCallback("player_death", "OnPlayerDeath");
Global.RegisterCallback("FrameStageNotify", "Reset");