UI.AddLabel("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
UI.AddSliderInt("Min Dmg", 0, 100)
UI.AddCheckbox( "Indicator" )
var cIndicator = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Indicator")
var remaining_health = Event.GetInt("health")
var rHealth = remaining_health + 1
var lMinDmg = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Min Dmg")


function mindmgOverride()
{
remaining_health = Event.GetInt("health") // Gets remaining health of enemy
rHealth = remaining_health + 1  //Sets a variable for the remaining health of enemy plus one
UI.SetValue("Rage", "SCOUT", "Targeting", "Minimum damage", rHealth) //Sets your min dmg as the enemy's remaining health after first shot plus one
}
Cheat.RegisterCallback("player_hurt", "mindmgOverride")
function resetMinDmg()
{
    jMinDmg = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Min Dmg")
    UI.SetValue("Rage", "SCOUT", "Targeting", "Minimum damage", lMinDmg) //This whole thins just resets your min dmg to what you set it as in the script
}
Cheat.RegisterCallback("player_death", "resetMinDmg")
function drawString()
{
    MinDmg = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage")
    if (UI.GetValue("Indicator"))   
    {
        Render.String( 135, 680, 6, "Scout Min Dmg is " + MinDmg, [  255,255,255,255 ], 4); //This is the indicator, says on the screen "Min Dmg is (whatever your min dmg is)
    }
}
Cheat.RegisterCallback("Draw", "drawString")
UI.AddLabel("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")