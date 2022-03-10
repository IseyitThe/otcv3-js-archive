// UI-ADDITIONS
UI.AddSliderInt("[DT] Hitchance", 0, 100)
UI.AddSliderInt("[DT] Minimum Damage", 0, 100)
UI.AddSliderInt("Hitchance", 0, 100)
UI.AddSliderInt("Minimum Damage", 0, 100)

//MAIN CODE

function dthc() {

    //Variables
    var getdt_hc = UI.GetValue( "Misc", "JAVASCRIPT", "Items", "[DT] Hitchance" )
    var hit      = UI.GetValue( "Misc", "JAVASCRIPT", "Items", "Hitchance")
    var enabled  = UI.IsHotkeyActive( "Rage", "GENERAL", "Exploits", "Double tap" )
    //variables end

    if (enabled){

        UI.SetValue("Rage", "AUTOSNIPER", "Accuracy", "Hitchance", getdt_hc);
    }

    if (!enabled) {

        UI.SetValue("Rage", "AUTOSNIPER", "Accuracy", "Hitchance", hit);
    }

}


function dtdmg() {

    //Variables 2
    var dmg      = UI.GetValue("Misc", "JAVASCRIPT", "Items", "Minimum Damage")
    var dt_dmg   = UI.GetValue("Misc", "JAVASCRIPT", "Items", "[DT] Minimum Damage")
    var enabled2 = UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Double tap")
    //variables end

    if (enabled2) {
        UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", dt_dmg);
    }


    if (!enabled2) {
        UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", dmg);
    }

}

Cheat.RegisterCallback("CreateMove", "dtdmg");
Cheat.RegisterCallback("CreateMove", "dthc");