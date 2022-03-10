var local = Entity.GetLocalPlayer();
var target = -1;
var binlib = {};

createDropdown("AA Options on X", ["Invert on Hit", "Flip Offset on Hit", "Randomize Yaw on Hit", "Randomize Yaw on Shot", "Flip Yaw on Shot", "Invert on Shot"], true);
UI.AddCheckbox("Enable Yaw Flags");
UI.AddCheckbox("Reset Yaw on Kill");
UI.AddSliderInt("Default Yaw", -180, 180);
UI.AddSliderInt("Maximum + Offset", 0, 180);
UI.AddSliderInt("Maximum - Offset", -180, 0);

function damage() {
    if(!Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("userid"))) || !UI.GetValue("Script items", "Enable Yaw Flags")) return;

    opts = fetchDropdown("AA Options on X");
    if (!Entity.IsAlive(local)) return;

    if(opts.indexOf("Invert on Hit") != -1)
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");

    if(opts.indexOf("Flip Offset on Hit") != -1)
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset"));
    
    if(opts.indexOf("Randomize Yaw on Hit") != -1)
        randomizeYaw();
}

function shot() {
    if(!Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("userid"))) || !UI.GetValue("Script items", "Enable Yaw Flags")) return;

    opts = fetchDropdown("AA Options on X");
    if(opts.indexOf("Invert on Shot") != -1)
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");

    if(opts.indexOf("Flip Offset on Shot") != -1)
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset"));
    
    if(opts.indexOf("Randomize Yaw on Shot") != -1)
        randomizeYaw();   


}

function randomizeYaw() {
    np = Math.random() * 100;
    rand = 0;

    if (np <= 50) {
        rand = (Math.random() * UI.GetValue("Scipt items", "Maximum - Offset"));
    } else
        rand = Math.random() * UI.GetValue("Scipt items", "Maximum + Offset");

    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", rand);
}

function set_target() {
    if(!UI.GetValue("Enable Yaw Flags")) return;

    target = Event.GetInt("target_index");
}

function reset_yaw() {
    if(!UI.GetValue("Script items", "Enable Yaw Flags") || !UI.GetValue("Script items", "Reset Yaw on Kill")) return;

    if(!Entity.IsAlive(target) && Entity.IsValid(target)) {
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", UI.GetValue("Script items", "Default Yaw"));
        target = -1;
    }
}


function dictLength(dict) {
    var count = 0;
    for (_ in dict) {
        count++;
    }
    return count;
}

function createDropdown(name, values, multi) {
    UI[multi ? "AddMultiDropdown" : "AddDropdown"](name, values);
  
    binlib[name] = {"multi": multi, "values": {}};

    multi && values.reverse();

    var i = 0; for (value in values) {
        var index = multi ? (1 << (values.length-(i+1))) : i;
        binlib[name].values[index] = values[value];
        i++;
    }
}

function fetchDropdown(name) {
    var selection = (name ? [] : {})
    var bin = UI.GetValue("Misc", name);

    !name && function() {for (dropdown in binlib) selection[dropdown] = fetchDropdown(dropdown) }();

    if (name) {
        !binlib[name].multi && bin == 0 && selection.push(binlib[name].values[0]) && function() { return selection; }();
        for (var i = dictLength(binlib[name].values)-1; i >= 0; i--) {
            if (!binlib[name].multi && i == 0) continue;

            var index = binlib[name].multi ? (1 << i) : i;
            if (bin-index >= 0) {
                bin -= (index);
                selection.push(binlib[name].values[index]);
            }
        }
    }

    return selection;
}

Cheat.RegisterCallback("player_hurt", "damage");
Cheat.RegisterCallback("weapon_fire", "shot");
Cheat.RegisterCallback("ragebot_fire", "set_target");
Cheat.RegisterCallback("Draw", "reset_yaw");