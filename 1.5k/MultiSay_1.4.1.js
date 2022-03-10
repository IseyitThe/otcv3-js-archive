var binlib = {};

// Made by MikiMiki ;)
// Latest Update - 1.4.1
// UI Stuff
UI.AddSliderInt("", 0, 0);
UI.AddLabel("MultiSay by MikiMiki");

createDropdown("Customize", ["Killsay", "Deathsay", "Killsound", "Deathsound"], false);

UI.AddCheckbox("Enable Killsay");
UI.AddCheckbox("Use Enemy Name");
UI.AddTextbox("Killsay(s)");
UI.AddSliderInt("Killsay Delay", 0, 10);

UI.AddCheckbox("Enable Killsound");
UI.AddTextbox("Killsound(s)");
UI.AddCheckbox("Hear Killsound");
UI.AddSliderFloat("Play Length", 0.0, 10.0);

UI.AddCheckbox("Enable Deathsay");
UI.AddCheckbox("Use Enemy Name (Deathsay)");
UI.AddTextbox("Deathsay(s)");
UI.AddSliderInt("Deathsay Delay", 0, 10);

UI.AddCheckbox("Enable Deathsound");
UI.AddTextbox("Deathsound(s)");
UI.AddCheckbox("Hear Deathsound");
UI.AddSliderFloat("Play Length (Deathsound)", 0.0, 10.0);
UI.AddLabel("Note: Set length to longest sound");
UI.AddSliderInt("", 0, 0);

// Dropdown framework
// Helper Function
function dictLength(dict) {
    var count = 0;
    for (_ in dict) {
        count++;
    }
    return count;
}

function createDropdown(name, values, multi) {
    UI[multi ? "AddMultiDropdown" : "AddDropdown"](name, values);

    binlib[name] = { "multi": multi, "values": {} };

    multi && values.reverse();

    var i = 0; for (value in values) {
        var index = multi ? (1 << (values.length - (i + 1))) : i;
        binlib[name].values[index] = values[value];
        i++;
    }
}

/**
  * @param {(string|undefined)} name - Fetches the selected option(s) of a specified dropdown, if undefined it will return all saved dropdowns' selected item(s).
  * @return {(Array|Dictionary[])} - If name is undefined the format is {Dropdown1: ["Slecected1", "Selected2"], Dropdown2: ["Slecected1", "Selected2"]}, else it will return a single array of selected items.
**/

function fetchDropdown(name) {
    var selection = (name ? [] : {})
    var bin = UI.GetValue("Misc", name);

    !name && function () { for (dropdown in binlib) selection[dropdown] = fetchDropdown(dropdown) }();

    if (name) {
        !binlib[name].multi && bin == 0 && selection.push(binlib[name].values[0]) && function () { return selection; }();
        for (var i = dictLength(binlib[name].values) - 1; i >= 0; i--) {
            if (!binlib[name].multi && i == 0) continue;

            var index = binlib[name].multi ? (1 << i) : i;
            if (bin - index >= 0) {
                bin -= (index);
                selection.push(binlib[name].values[index]);
            }
        }
    }

    return selection;
}

// Functions to return killsays and killsounds
function rand_chat() {
    killsays = UI.GetString("Misc", "JAVASCRIPT", "Script items", "Killsay(s)").split(", ");
    return killsays[randint(0, killsays.length)];
}

function rand_chat_ds() {
    deathsays = UI.GetString("Misc", "JAVASCRIPT", "Script items", "Deathsay(s)").split(", ");
    return deathsays[randint(0, deathsays.length)];
}

function rand_sound() {
    sounds = UI.GetString("Misc", "JAVASCRIPT", "Script items", "Killsound(s)").split(", ");
    return sounds[randint(0, sounds.length)] + ".wav";
}

function rand_sound_ds() {
    sounds = UI.GetString("Misc", "JAVASCRIPT", "Script items", "Deathsound(s)").split(", ");
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
function delay_handler() {
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

// Deathsay Section

// Variables used by deathsay functions
var kill_time_ds = 0;
var say_ds = "";
var state_ds = false;

function deathsay() {
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Deathsay")) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) {
        kill_time_ds = Globals.Realtime();
        string_ds = name_handler_ds();
        if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Deathsay Delay" == 0)) {
            display(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Deathsay Delay" == 0));
            display(string_ds);
        }
        else {
            say_ds = string_ds;
            state_ds = true;
        }
    }
}

function name_handler_ds() {
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Use Enemy Name (Deathsay)")) {
        return (Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("attacker"))) + " " + rand_chat_ds());
    }
    else {
        return (rand_chat_ds());
    }
}

function delay_handler_ds() {
    time_ds = Globals.Realtime();
    if (time_ds - kill_time_ds == UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Deathsay Delay") && state_ds == true) {
        display(say_ds);
        state_ds = false;
        say_ds = "";
    }
}

// Killsound Section

// Variables used by killsound functions
var playing = false;
var started = 0.0;

// Function that plays killsound
function killsound() {
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Killsound")) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("attacker")) != Entity.GetLocalPlayer()) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) return;
    started = Global.Realtime();
    playing = true;
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hear Killsound")) {
        Global.ExecuteCommand("voice_loopback 1");
    }
    Sound.PlayMicrophone('..\\Counter-Strike Global Offensive\\' + rand_sound());
}

// Function to handle when to stop playing killsound
function soundreset() {
    if (playing && Math.abs(started + UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Play Length") - Global.Realtime()) < 0.05) {
        playing = false;
        Sound.StopMicrophone();
        Global.ExecuteCommand("voice_loopback 0");
    }
}

// Deathsound Section

// Variables used by killsound functions
var playing_ds = false;
var started_ds = 0.0;

// Function that plays deathsound
function deathsound() {
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Deathsound")) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("attacker")) == Entity.GetLocalPlayer()) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) != Entity.GetLocalPlayer()) return;
    started_ds = Global.Realtime();
    playing_ds = true;
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hear Deathsound")) {
        Global.ExecuteCommand("voice_loopback 1");
    }
    Sound.PlayMicrophone('..\\Counter-Strike Global Offensive\\' + rand_sound_ds());
}

// Function to handle when to stop playing deathsound
function soundreset_ds() {
    if (playing_ds && Math.abs(started_ds + UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Play Length (Deathsound)") - Global.Realtime()) < 0.05) {
        playing_ds = false;
        Sound.StopMicrophone();
        Global.ExecuteCommand("voice_loopback 0");
    }
}

// Menu visibility, too lazy to make this more efficient
function menuVisibility() {
    editSelection = fetchDropdown("Customize");
    switch (String(editSelection)) {
        case "Killsay":
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Killsay", true);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Use Enemy Name", true);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsay(s)", true);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsay Delay", true);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Deathsay", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Use Enemy Name (Deathsay)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsay(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsay Delay", false);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Killsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsound(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Hear Killsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Play Length", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Note: Set length to longest sound", false);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Deathsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsound(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Hear Deathsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Play Length (Deathsound)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Note: Set length to longest sound", false);
            break;
        case "Killsound":
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Killsound", true);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsound(s)", true);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Hear Killsound", true);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Play Length", true);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Note: Set length to longest sound", true);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Killsay", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Use Enemy Name", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsay(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsay Delay", false);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Deathsay", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Use Enemy Name (Deathsay)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsay(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsay Delay", false);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Deathsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsound(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Hear Deathsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Play Length (Deathsound)", false);
            break;
        case "Deathsay":
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Deathsay", true);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Use Enemy Name (Deathsay)", true);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsay(s)", true);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsay Delay", true);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Killsay", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Use Enemy Name", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsay(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsay Delay", false);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Killsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsound(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Hear Killsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Play Length", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Note: Set length to longest sound", false);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Deathsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsound(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Hear Deathsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Play Length (Deathsound)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Note: Set length to longest sound", false);
            break;
        case "Deathsound":
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Deathsound", true);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsound(s)", true);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Hear Deathsound", true);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Play Length (Deathsound)", true);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Note: Set length to longest sound", true);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Deathsay", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Use Enemy Name (Deathsay)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsay(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsay Delay", false);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Killsay", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Use Enemy Name", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsay(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsay Delay", false);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Killsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsound(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Hear Killsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Play Length", false);
            break;
        case "Mocker":
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Deathsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsound(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Hear Deathsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Play Length (Deathsound)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Note: Set length to longest sound", false);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Deathsay", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Use Enemy Name (Deathsay)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsay(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Deathsay Delay", false);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Killsay", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Use Enemy Name", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsay(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsay Delay", false);

            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable Killsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Killsound(s)", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Hear Killsound", false);
            UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Play Length", false);
            break;
    }
}

// Callbacks
Global.RegisterCallback("Draw", "menuVisibility");
Global.RegisterCallback("player_death", "killsay");
Global.RegisterCallback("player_death", "deathsay");
Global.RegisterCallback("player_death", "killsound");
Global.RegisterCallback("player_death", "deathsound");
Global.RegisterCallback("FrameStageNotify", "soundreset");
Global.RegisterCallback("FrameStageNotify", "soundreset_ds");
Global.RegisterCallback("FrameStageNotify", "delay_handler");
Global.RegisterCallback("FrameStageNotify", "delay_handler_ds");