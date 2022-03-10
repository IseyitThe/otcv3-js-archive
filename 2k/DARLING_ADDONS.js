var iExploitID = 0;
var bDoubleTapped = false;
var bShouldRecharge = false;
var ForceCharge = false;
var iLastShotTime = 0;

UI.AddCheckbox("Tripletap");
UI.AddDropdown("Tripletap Mode", ["Agressive", "Passive"]);
UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 1 );
UI.AddSliderFloat( "aspect_ratio", 0.5, 1.5 );

function on_ragebot_fire()
{
    ragebot_target_exploit = Event.GetInt("exploit");
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tripletap"))
    {
        if (ragebot_target_exploit == 2)
        {
            UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", true);
        }
        else
        {
            UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", false);
        }
    }
}

function event_rbot_fire( ) {
    iExploitID = Event.GetInt( "exploit" );
    if ( !UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Tripletap" ) )
        return;

    if ( iExploitID == 2 ) {
        iLastShotTime = Global.Tickcount( );
        bDoubleTapped = true;
        UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 0 );
        bShouldRecharge = true;
    }

    ForceCharge = bShouldRecharge ? true : false;

    if ( ForceCharge && Global.Tickcount( ) >= ( Global.TickInterval( ) * 10 + iLastShotTime ) )
        UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 1 );
}

function modecheck()
{
  if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tripletap Mode") == 0) { on_ragebot_fire(); }
  if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tripletap Mode") == 1) { event_rbot_fire(); }
}

Global.RegisterCallback("ragebot_fire", "modecheck");

function GetVelocity(index) {
    var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

function test()
{
	Convar.SetFloat("r_aspectratio", UI.GetValue("Misc", "JAVASCRIPT", "Script Items","aspect_ratio"));
	chargestate = Exploit.GetCharge()
	if ( chargestate > 0.3 ) {
		if ( GetVelocity(Entity.GetLocalPlayer()) < 2 ) {
			UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", false);
		}
		else {
			UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);
		}
	}
	else {
		UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", true);
	}
}
Cheat.RegisterCallback("CreateMove", "test")
UI.AddSliderFloat("Noscope distance (m)", 0, 100);
var target = -1;
function CreateMove() {
    if(!Ragebot.GetTarget())
        target = closestTarget();
    else
        target = Ragebot.GetTarget();
    if(!Entity.IsAlive(target)) {
        UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true);
        return;
    }
    if(get_metric_distance(Entity.GetRenderOrigin(Entity.GetLocalPlayer()), Entity.GetRenderOrigin(target)) < UI.GetValue("Script items", "Noscope distance (m)")) {
        UI.SetValue("Rage", "GENERAL", "General", "Auto scope", false);
    } else {
        UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true);
    }
}
Cheat.RegisterCallback("CreateMove", "CreateMove");
function closestTarget() {
    var local = Entity.GetLocalPlayer();
    var enemies = Entity.GetEnemies();
    var dists = [];
    var damage = [];
    for(e in enemies) {
        if(!Entity.IsAlive(enemies[e]) || Entity.IsDormant(enemies[e]) || !Entity.IsValid(enemies[e])) continue;
        dists.push([enemies[e], calcDist(Entity.GetHitboxPosition(local, 0), Entity.GetHitboxPosition(enemies[e], 0))]);
    }
    dists.sort(function(a, b)
    {
        return a[1] - b[1];
    });
    if(dists.length == 0 || dists == []) return target = -1; 
    return dists[0][0];
}

// clean dist func, thanks rzr
function calcDist(a, b)
{
    x = a[0] - b[0];
    y = a[1] - b[1];
    z = a[2] - b[2];
    return Math.sqrt( x * x + y * y + z * z );
}

function get_metric_distance(a, b)
{
    return Math.floor(Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2)) * 0.0254 );
}

// UI Stuff
UI.AddSliderInt("", 0, 0);
UI.AddLabel("MultiSay");
UI.AddCheckbox("Enable Killsay");
UI.AddCheckbox("Use Enemy Name");
UI.AddTextbox("Say(s)");
UI.AddSliderInt("Killsay Delay", 0, 10);
UI.AddCheckbox("Enable Killsound");
UI.AddTextbox("Filename(s)");
UI.AddCheckbox("Hear Killsound");
UI.AddSliderFloat("Play Length", 0.0, 10.0);
UI.AddLabel("Note: Set length to longest sound");
UI.AddSliderInt("", 0, 0);

// Functions to return killsays and killsounds
function rand_chat() {
    string = UI.GetString("Misc", "JAVASCRIPT", "Script items", "Say(s)");
    killsays = string.split(", ");
    return killsays[randint(0, killsays.length)];
}

function rand_sound() {
    string = UI.GetString("Misc", "JAVASCRIPT", "Script items", "Filename(s)");
    sounds = string.split(", ");
    return sounds[randint(0, sounds.length)] + ".wav";
}

// Killsay Section

// Variables used by killsay functions
var kill_time = 0;
var say = "";
var state = false;

// Function to create killsay
function killsay() {
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Killsay")) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("attacker")) == Entity.GetLocalPlayer()) {
        kill_time = Globals.Realtime();
        string = name_handler();
        if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Killsay Delay" == 0)) {
            display(string);
        }
        else {
            say = string;
            state = true;
        }
    }
}

function name_handler() {
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Use Enemy Name")) {
        return (Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid"))) + " " + rand_chat());
    }
    else {
        return (rand_chat());
    }
}

// Function that handles when to send chat via delay value
function delay_handler(string) {
    time = Globals.Realtime();
    if (time - kill_time == UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Killsay Delay") && state == true) {
        display(say);
        state = false;
        say = "";
    }
}

// Function used to send in chat
function display(string) {
    Global.ExecuteCommand("say " + string);
}

// Function that returns random ints (for indexes)
function randint(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Killsound Section

// Variables used by killsound functions
var playing = false;
var started = 0.0;

// Function that plays killsound
function killsound() {
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Enable Killsound")) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("attacker")) != Entity.GetLocalPlayer()) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) return;
    started = Global.Realtime();
    playing = true;
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Hear Killsound")) {
        Global.ExecuteCommand("voice_loopback 1");
    }
    Sound.PlayMicrophone('..\\Counter-Strike Global Offensive\\' + rand_sound());
}

// Function to handle when to stop playing killsound
function soundreset() {
    if (playing && Math.abs(started + UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Play Length") - Global.Realtime()) < 0.05) {
        playing = false;
        Sound.StopMicrophone();
        Global.ExecuteCommand("voice_loopback 0");
    }
}

// Callbacks
Global.RegisterCallback("player_death", "killsay");
Global.RegisterCallback("player_death", "killsound");
Global.RegisterCallback("FrameStageNotify", "soundreset");
Global.RegisterCallback("FrameStageNotify", "delay_handler");
UI.AddSliderInt("", 0, 0);
UI.AddTextbox("Custom clantag");
UI.AddDropdown("Animation type", ["Type 1", "Type 2", "Type 3", "Type 4"]);
UI.AddSliderInt("Animation speed", 1, 50);

var currentTick = 0;
var lastTick = 0;

var clantag = "";
var type = 0;
var speed = 1;

var type1 = {forward: true, lastChar: 0};
var type2 = {forward: true, lastChar: 0};
var type3 = {left: true};
var type4 = {left: ["|", "\\", "-", "/"], right: ["|", "/", "-", "\\"], lastIndex: 0};

var disabled = false;

var result = "";

function Render() {
    clantag = UI.GetString("Script Items", "Custom clantag");
    type = UI.GetValue("Script Items", "Animation type");
    speed = UI.GetValue("Script Items", "Animation speed");

    currentTick = parseInt(Globals.Curtime() * 1000);

    if (UI.GetString("Script Items", "Custom clantag") != clantag) {
        type1 = {forward: true, lastChar: 0};
        type2 = {forward: true, lastChar: 0};
        type3 = {left: true};
        type4 = {left: ["|", "\\", "-", "/"], right: ["|", "/", "-", "\\"], lastIndex: 0};        
    }

    if (clantag.length != 0) {
        if (currentTick - (10000 / speed) >= lastTick) {
            //Cheat.Print(clantag + " " + type + " " + speed + "\n");

            if (type == 0) {
                if (type1["forward"]) {
                    if (type1["lastChar"] < clantag.length - 1)
                        type1["lastChar"]++;

                    if (type1["lastChar"] == clantag.length - 1)
                        type1["forward"] = false
                }
                else {
                    if (type1["lastChar"] > 0)
                        type1["lastChar"]--;

                    if (type1["lastChar"] == 1)
                        type1["forward"] = true;
                }

                result = clantag.slice(0, type1["lastChar"]) + "'" + clantag.slice(type1["lastChar"]);
            }
            else if (type == 1) {
                if (type2["forward"]) {
                    if (type2["lastChar"] < clantag.length)
                        type2["lastChar"]++;

                    if (type2["lastChar"] == clantag.length)
                        type2["forward"] = false
                }
                else {
                    if (type2["lastChar"] > 0)
                        type2["lastChar"]--;

                    if (type2["lastChar"] == 1)
                        type2["forward"] = true;
                }

                result = clantag.slice(0, type2["lastChar"]);
            }
            else if (type == 2) {
                if (type3["left"])
                    result = "-" + clantag;
                else
                    result = clantag + "-";

                type3["left"] = !type3["left"];
            }
            else if (type == 3) {
                if (type4["lastIndex"] == type4["left"].length - 1)
                    type4["lastIndex"] = 0;

                result = "[" + type4["left"][type4["lastIndex"]] + "] " + clantag + " [" + type4["right"][type4["lastIndex"]] + "]";

                type4["lastIndex"]++;
            }

            Local.SetClanTag(result);
            lastTick = currentTick;
        }
    }
    else {
        if (!disabled) {
            Local.SetClanTag("");

            type1 = {forward: true, lastChar: 0};
            type2 = {forward: true, lastChar: 0};
            type3 = {left: true};
            type4 = {left: ["|", "\\", "-", "/"], right: ["|", "/", "-", "\\"], lastIndex: 0};

            disabled = true;
        }
    }
}

Cheat.RegisterCallback("Draw", "Render");
UI.AddSliderInt("", 0, 0);