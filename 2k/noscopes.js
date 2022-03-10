var g_bOriginalNoScopeHC = true;

UI.AddCheckbox("[SuicidEE.cf] Override No-Scope Hitchance")
UI.AddSliderInt("[SuicidEE.cf] No-Scope Hitchance", 0, 100)

function NoScope(){
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "[SuicidEE.cf] Override No-Scope Hitchance")){
        nsHC = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "[SuicidEE.cf] No-Scope Hitchance")
        local = Entity.GetLocalPlayer()
        isScoped = Entity.GetProp(local, "CCSPlayer", "m_bIsScoped")

        if (!isScoped){
            if (g_bOriginalNoScopeHC){
                hcAutoCache = UI.GetValue("Rage", "AUTOSNIPER", "Accuracy", "Hitchance")
                g_bOriginalNoScopeHC = false
            }
            UI.SetValue("Rage", "AUTOSNIPER", "Accuracy", "Hitchance", nsHC)

        } else {
            if (!g_bOriginalNoScopeHC){
                UI.SetValue("Rage", "AUTOSNIPER", "Accuracy", "Hitchance", hcAutoCache)
                g_bOriginalNoScopeHC = true
            }
        }
    }
} Cheat.RegisterCallback("CreateMove", "NoScope")