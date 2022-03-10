var scopeable = [
    "awp",
    "scar 20",
    "g3sg1",
    "ssg 08"
]

var wepname_category = {
    "ssg 08": "Scout",
    "awp": "AWP",
    "g3sg1": "Autosniper",
    "scar 20": "Autosniper",
};

UI.AddHotkey("Noscope key");

UI.AddSliderInt("AWP default hitchance", 0, 100);
UI.AddSliderInt("AWP nosc. hitchance", 0, 100);
UI.AddSliderInt("Autosniper default hitchance", 0, 100);
UI.AddSliderInt("Autosniper nosc. hitchance", 0, 100);
UI.AddSliderInt("Scout default hitchance", 0, 100);
UI.AddSliderInt("Scout nosc. hitchance", 0, 100);


function set_noscope() {
    var local = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(local));
    if(~scopeable.indexOf(weapon) && UI.IsHotkeyActive("Script items", "Noscope key")) {
        UI.SetValue("Rage", "GENERAL", "Auto scope", false);
        UI.SetValue("Rage", wepname_category[weapon].toUpperCase(), "Accuracy", "Hitchance", UI.GetValue("Script items", wepname_category[weapon] + " nosc. hitchance"));
    } else {
        UI.SetValue("Rage", "GENERAL", "Auto scope", true);
        UI.SetValue("Rage", wepname_category[weapon].toUpperCase(), "Accuracy", "Hitchance", UI.GetValue("Script items", wepname_category[weapon] + " default hitchance"));
    }
}

Cheat.RegisterCallback("Draw", "set_noscope");