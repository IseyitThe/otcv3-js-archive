UI.AddLabel("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
UI.AddSliderInt("Add to Min Dmg", 0, 100)
UI.AddSliderInt("Min Dmg", 0, 100)
UI.AddSliderInt("Max Min Dmg", 0, 100)
UI.AddCheckbox( "Indicator" )
UI.AddColorPicker("Indicator Color")
UI.AddLabel("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
var RageTarget = 0
function CM(){
    NewTarget = Ragebot.GetTarget()
    if (NewTarget != 0){
        RageTarget = NewTarget
    }
}
function Hurt()
{
    addHealth = UI.GetValue("Add to Min Dmg")
    mMinDmg = UI.GetValue("Script items", "Max Min Dmg")
    mHealth = Event.GetInt("health") + 1
    Target = Event.GetInt("userid")
    if (Entity.GetEntityFromUserID(Target) == RageTarget && Event.GetInt("health") > 0 && mHealth < mMinDmg){
        UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", Event.GetInt("health") + addHealth)
    }else{
        UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", UI.GetValue("Script items", "Min Dmg"))
    }
}
function drawString()
{
    iColor = UI.GetColor("Script items", "Indicator Color")
    MinDmg = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage")
    if (MinDmg === 0 && UI.GetValue("Script items", "Max Min Dmg")){
            Render.String( 135, 650, 6, "Min Dmg is Dynamic", iColor, 4);
    }else{
        Render.String( 95, 650, 6, "Min Dmg is " + MinDmg, iColor, 4);
    }
}
Cheat.RegisterCallback("player_hurt", "Hurt")
Cheat.RegisterCallback("CreateMove", "CM")
Cheat.RegisterCallback("Draw", "drawString")