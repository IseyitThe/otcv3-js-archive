/*
 *
 * Orginal theard https://www.onetap.com/threads/release-team-based-model-changer.16618/
 * Modified by ByCat
 *
 */

UI.AddCheckbox("Team based gloves")
UI.AddDropdown("CT Gloves", ["None", "Bloodhound", "Sporty", "Slick", "Handwrap", "Motorcycle", "Specialist"])
UI.AddDropdown("T Gloves", ["None", "Bloodhound", "Sporty", "Slick", "Handwrap", "Motorcycle", "Specialist"])
UI.AddCheckbox("Team based knife")
UI.AddDropdown("CT Knife", ["None", "Bayonet", "Flip knife", "Gut knife", "Karambit", "M9 bayonet", "Butterfly", "Falchion", "Navaja", "Shadow daggers", "Stiletto", "Bowie", "Huntsman", "Talon", "Ursus", "Classic", "Paracord", "Survival", "Nomad", "Skeleton"])
UI.AddDropdown("T Knife", ["None", "Bayonet", "Flip knife", "Gut knife", "Karambit", "M9 bayonet", "Butterfly", "Falchion", "Navaja", "Shadow daggers", "Stiletto", "Bowie", "Huntsman", "Talon", "Ursus", "Classic", "Paracord", "Survival", "Nomad", "Skeleton"])
UI.AddCheckbox("Team based model")
UI.AddDropdown("CT Model", ["None", "'TwoTimes' McCoy", "Seal Team 6 Soldier", "Buckshot", "Lt. Commander Ricksaw", "Dragomir", "Rezan The Ready", "Maximus", "Blackwolf", "The Doctor' Romanow", "8 Squadron Officer", "3rd Commando Company", "Special Agent Ava", "Operator", "Markus Delrow", "Michael Syfers", "Enforcer", "Slingshot", "Soldier", "The Elite Mr. Muhlik", "Ground Rebel", "Osiris", "Prof. Shahmat", "Heavy armor"])
UI.AddDropdown("T Model", ["None", "'TwoTimes' McCoy", "Seal Team 6 Soldier", "Buckshot", "Lt. Commander Ricksaw", "Dragomir", "Rezan The Ready", "Maximus", "Blackwolf", "The Doctor' Romanow", "8 Squadron Officer", "3rd Commando Company", "Special Agent Ava", "Operator", "Markus Delrow", "Michael Syfers", "Enforcer", "Slingshot", "Soldier", "The Elite Mr. Muhlik", "Ground Rebel", "Osiris", "Prof. Shahmat", "Heavy armor"])
function onFSN(){
    if(Cheat.FrameStage() != 2)
        return
    var team = Entity.GetProp(Entity.GetLocalPlayer(),"DT_BaseEntity", "m_iTeamNum")

    if(UI.GetValue("Script Items", "Team based gloves")){
        UI.SetEnabled("Script Items", "CT Gloves", true)
        UI.SetEnabled("Script Items", "T Gloves", true)
        if(team == 2){
            UI.SetValue("Misc", "SKINS", "Gloves", "Glove model", UI.GetValue("Script Items", "T Gloves"))
        }
        if(team == 3){
            UI.SetValue("Misc", "SKINS", "Gloves", "Glove model", UI.GetValue("Script Items", "CT Gloves"))
        }
    }
    else{
        UI.SetEnabled("Script Items", "CT Gloves", false)
        UI.SetEnabled("Script Items", "T Gloves", false)
    }
    if(UI.GetValue("Script Items", "Team based knife")){
        UI.SetEnabled("Script Items", "CT Knife", true)
        UI.SetEnabled("Script Items", "T Knife", true)
        if(team == 2){
            UI.SetValue("Misc", "SKINS", "Knife", "Knife model", UI.GetValue("Script Items", "T Knife"))
        }
        if(team == 3){
            UI.SetValue("Misc", "SKINS", "Knife", "Knife model", UI.GetValue("Script Items", "CT Knife"))
        }
    }
    else{
        UI.SetEnabled("Script Items", "CT Knife", false)
        UI.SetEnabled("Script Items", "T Knife", false)
    }
    if(UI.GetValue("Script Items", "Team based model")){
        UI.SetEnabled("Script Items", "CT Model", true)
        UI.SetEnabled("Script Items", "T Model", true)
        if(team == 2){
            UI.SetValue("Misc", "SKINS", "Player", "Player model", UI.GetValue("Script Items", "T Model"))
        }
        if(team == 3){
            UI.SetValue("Misc", "SKINS", "Player", "Player model", UI.GetValue("Script Items", "CT Model"))
        }
    }
    else{
        UI.SetEnabled("Script Items", "CT Model", false)
        UI.SetEnabled("Script Items", "T Model", false)
    }
}
Cheat.RegisterCallback("FrameStageNotify","onFSN")