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

    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Team based gloves")){
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "CT Gloves", true)
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "T Gloves", true)
        if(team == 2){
            UI.SetValue("Misc", "SKINS", "Gloves", "Glove model", UI.GetValue("Script items", "T Gloves"))
        }
        if(team == 3){
            UI.SetValue("Misc", "SKINS", "Gloves", "Glove model", UI.GetValue("Script items", "CT Gloves"))
        }
    }
    else{
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "CT Gloves", false)
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "T Gloves", false)
    }
    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Team based knife")){
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "CT Knife", true)
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "T Knife", true)
        if(team == 2){
            UI.SetValue("Misc", "SKINS", "Knife", "Knife model", UI.GetValue("Script items", "T Knife"))
        }
        if(team == 3){
            UI.SetValue("Misc", "SKINS", "Knife", "Knife model", UI.GetValue("Script items", "CT Knife"))
        }
    }
    else{
        UI.SetEnabled("Script items", "CT Knife", false)
        UI.SetEnabled("Script items", "T Knife", false)
    }
    if(UI.GetValue("Script items", "Team based model")){
        UI.SetEnabled("Script items", "CT Model", true)
        UI.SetEnabled("Script items", "T Model", true)
        if(team == 2){
            UI.SetValue("Misc", "SKINS", "Player", "Player model", UI.GetValue("Script items", "T Model"))
        }
        if(team == 3){
            UI.SetValue("Misc", "SKINS", "Player", "Player model", UI.GetValue("Script items", "CT Model"))
        }
    }
    else{
        UI.SetEnabled("Script items", "CT Model", false)
        UI.SetEnabled("Script items", "T Model", false)
    }
}
Cheat.RegisterCallback("FrameStageNotify","onFSN")