UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Team based");

UI.AddCheckbox(["Misc.", "Team based", "SHEET_MGR", "Team based"], "Team based model");
UI.AddDropdown(["Misc.", "Team based", "SHEET_MGR", "Team based"], "CT Model", ["None", "'TwoTimes' McCoy'", "Seal Team 6 Solider", "Buckshot", "Lt. Commander Ricksaw", "Dragomir", "Rezan The Ready", "Maximus", "Blackwolf", "The Doctor' Romanov", "B Squadron Officer", "3rd Commando Company", "Special Agent Ava", "Operator", "Markus Delrow", "Michael Syfers", "Enforcer", "Slingshot", "Solider", "The Elite Mr. Muhlik", "Ground Rebel", "Osiris", "Prof. Shahmat"], 0);
UI.AddDropdown(["Misc.", "Team based", "SHEET_MGR", "Team based"], "T Model", ["None", "'TwoTimes' McCoy'", "Seal Team 6 Solider", "Buckshot", "Lt. Commander Ricksaw", "Dragomir", "Rezan The Ready", "Maximus", "Blackwolf", "The Doctor' Romanov", "B Squadron Officer", "3rd Commando Company", "Special Agent Ava", "Operator", "Markus Delrow", "Michael Syfers", "Enforcer", "Slingshot", "Solider", "The Elite Mr. Muhlik", "Ground Rebel", "Osiris", "Prof. Shahmat"], 0);

function onFSN() {
    if (Cheat.FrameStage() != 2)
        return;

    var team = Entity.GetProp(Entity.GetLocalPlayer(), "DT_BaseEntity", "m_iTeamNum")
    if (UI.GetValue(["Misc.", "Team based", "SHEET_MGR", "Team based", "Team based model"]) == 1) {

        if (team == 2) {
            UI.SetValue(["Misc.", "Skins", "Models", "Player model"], UI.GetValue(["Misc.", "Team based", "SHEET_MGR", "Team based", "T Model"]))
        }
        if (team == 3) {
            UI.SetValue(["Misc.", "Skins", "Models", "Player model"], UI.GetValue(["Misc.", "Team based", "SHEET_MGR", "Team based", "CT Model"]))
        }
    }
}
Cheat.RegisterCallback("FrameStageNotify", "onFSN")
