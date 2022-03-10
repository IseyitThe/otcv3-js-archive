UI.AddCheckbox("New models")
UI.AddDropdown("Custom CT Model", ["None", "St.Marc | Collection", "Rezan the Redshirt", "Dragomir", "Dead Cold", "1st Lieutenant Farlow", "Safecracker Voltzmann", "Sir Bloody Darryl Miami", "Sir Bloody Darryl Skullhead", "Office | Collection", "Sir Bloody Darryl Loudmouth", "B Squadron Officer", "Little Kev", "Train | Collection", "Getaway Sally", "Train | Collection", "Train | Collection", "Bio-Haz Specialist", "Danger Zone | Collection", "Danger Zone | Collection", "Street Soldier", "NSWC Seal | 'Blueberries' Buckshot", "Number K"])
UI.AddDropdown("Custom T Model", ["None", "St.Marc | Collection", "Rezan the Redshirt", "Dragomir", "Dead Cold", "1st Lieutenant Farlow", "Safecracker Voltzmann", "Sir Bloody Darryl Miami", "Sir Bloody Darryl Skullhead", "Office | Collection", "Sir Bloody Darryl Loudmouth", "B Squadron Officer", "Little Kev", "Train | Collection", "Getaway Sally", "Train | Collection", "Train | Collection", "Bio-Haz Specialist", "Danger Zone | Collection", "Danger Zone | Collection", "Street Soldier", "NSWC Seal | 'Blueberries' Buckshot", "Number K"])

function onFSN(){
    if(Cheat.FrameStage() != 2)
        return
    var team = Entity.GetProp(Entity.GetLocalPlayer(),"DT_BaseEntity", "m_iTeamNum")
    if(!UI.GetValue("Script Items", "New models")){
        UI.SetEnabled("Script Items", "Custom CT Model", false)
        UI.SetEnabled("Script Items", "Custom T Model", false)
        return;
    }
    UI.SetEnabled("Script Items", "Custom T Model", true)
    UI.SetEnabled("Script Items", "Custom CT Model", true)
    if(team == 2){
        UI.SetValue("Misc", "SKINS", "Player", "Player model", UI.GetValue("Script Items", "Custom T Model"))
    }
    else if(team == 3){
        UI.SetValue("Misc", "SKINS", "Player", "Player model", UI.GetValue("Script Items", "Custom CT Model"))
    }
}
Cheat.RegisterCallback("FrameStageNotify","onFSN")