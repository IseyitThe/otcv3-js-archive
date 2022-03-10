UI.AddLabel("                          -                          ")
UI.AddLabel("Clown's Smart Min Damage Script")
var dropdown = UI.AddDropdown("Weapon", ["Auto", "Scout"])
UI.AddSliderInt("Add to Min Dmg (Auto)", 0, 100)
UI.AddSliderInt("Min Dmg (Auto)", 0, 100)
UI.AddSliderInt("Max Min Dmg (Auto)", 0, 100)
UI.AddSliderInt("Add to Min Dmg (Scout)", 0, 100)
UI.AddSliderInt("Min Dmg (Scout)", 0, 100)
UI.AddSliderInt("Max Min Dmg (Scout)", 0, 100)
UI.AddCheckbox("Indicator")
UI.AddColorPicker("Indicator Color")
UI.AddLabel("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
var RageTarget = 0

function hide_sliders() {
    dropdown_value = UI.GetValue.apply(null, dropdown)
    if (dropdown_value == 0) {
        UI.SetEnabled("Add to Min Dmg (Scout)", false)
        UI.SetEnabled("Min Dmg (Scout)", false)
        UI.SetEnabled("Max Min Dmg (Scout)", false)
        UI.SetEnabled("Add to Min Dmg (Auto)", true)
        UI.SetEnabled("Min Dmg (Auto)", true)
        UI.SetEnabled("Max Min Dmg (Auto)", true)
    } else if (dropdown_value == 1) {
        UI.SetEnabled("Add to Min Dmg (Auto)", false)
        UI.SetEnabled("Min Dmg (Auto)", false)
        UI.SetEnabled("Max Min Dmg (Auto)", false)
        UI.SetEnabled("Add to Min Dmg (Scout)", true)
        UI.SetEnabled("Min Dmg (Scout)", true)
        UI.SetEnabled("Max Min Dmg (Scout)", true)
    }
}

function weapon_stuff() {
    local_player = Entity.GetLocalPlayer()
    player_weapon = Entity.GetWeapon(local_player)
    weapon_name = Entity.GetName(player_weapon)
    local_alive = Entity.IsAlive(local_player)
    if (weapon_name == "scar 20" || weapon_name == "g3sg1") {
        UI.SetValue("Weapon", 0)
    } else if (weapon_name == "ssg 08") {
        UI.SetValue("Weapon", 1)
    }
}


function CM() {
    NewTarget = Ragebot.GetTarget()
    if (NewTarget != 0) {
        RageTarget = NewTarget
    }
}

function Hurt() {
    addHealth = UI.GetValue("Add to Min Dmg (Auto)")
    addHealth2 = UI.GetValue("Add to Min Dmg (Scout)")
    mMinDmg = UI.GetValue("Script items", "Max Min Dmg (Auto)")
    mMinDmg2 = UI.GetValue("Script items", "Max Min Dmg (Scout)")
    mHealth = Event.GetInt("health")
    Target = Event.GetInt("userid")
    if (UI.GetValue("Script items", "Weapon") == 0) {
        if (Entity.GetEntityFromUserID(Target) == RageTarget && Event.GetInt("health") > 0 && mHealth < mMinDmg && dropdown_value == 0) {
            UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", Event.GetInt("health") + addHealth)
        } else {
            UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", UI.GetValue("Script items", "Min Dmg (Auto)"))
        }
    } else if (UI.GetValue("Script items", "Weapon") == 1) {
        if (Entity.GetEntityFromUserID(Target) == RageTarget && Event.GetInt("health") > 0 && mHealth < mMinDmg2) {
            UI.SetValue("Rage", "SCOUT", "Targeting", "Minimum damage", Event.GetInt("health") + addHealth2)
        } else {
            UI.SetValue("Rage", "SCOUT", "Targeting", "Minimum damage", UI.GetValue("Script items", "Min Dmg (Scout)"))
        }
    }
}

function drawString() {
    if (UI.GetValue("Script items", "Indicator") == 0) {
        UI.SetEnabled("Script items", "Indicator Color", false)
    } else if (UI.GetValue("Script items", "Indicator") == 1) {
        UI.SetEnabled("Script items", "Indicator Color", true)
    }
    iColor = UI.GetColor("Script items", "Indicator Color")
    MinDmg = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage")
    MinDmg2 = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage")
    if (UI.GetValue("Script items", "Indicator")) {
        if (MinDmg === 0 && UI.GetValue("Script items", "Max Min Dmg (Auto)")) {
            Render.String(170, 650, 6, "Auto Min Dmg is Dynamic", iColor, 4);
        } else {
            Render.String(130, 650, 6, "Auto Min Dmg is " + MinDmg, iColor, 4);
        }
        if (MinDmg2 === 0 && UI.GetValue("Script items", "Max Min Dmg (Scout)")) {
            Render.String(175, 700, 6, "Scout Min Dmg is Dynamic", iColor, 4);
        } else {
            Render.String(135, 700, 6, " Scout Min Dmg is " + MinDmg2, iColor, 4);
        }
    }
}
Cheat.RegisterCallback("player_hurt", "Hurt")
Cheat.RegisterCallback("CreateMove", "CM")
Cheat.RegisterCallback("Draw", "drawString")
Cheat.RegisterCallback("CreateMove", "hide_sliders")
Cheat.RegisterCallback("CreateMove", "weapon_stuff")