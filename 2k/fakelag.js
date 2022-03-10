UI.AddSliderInt("Target Limit 1", 0, 16)
UI.AddSliderInt("Target Limit 2", 0, 16)

function fakelag() {
    var curlag = UI.GetValue("Anti-Aim", "Fake-Lag", "Limit")
    var curjitter = UI.GetValue("Anti-Aim", "Fake-Lag", "Jitter")
    var target1 = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Target Limit 1")
    var target2 = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Target Limit 2")
    if (curlag < target1 || curlag > target2) {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", target1)
    }
    if (curlag != target2 && curlag == target1) {
        a = true
        b = false
        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", curlag + 1)
    }
    if (curlag == target2 && curlag != target1) {
        a = false
        b = true
        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", curlag - 1)
    }
    if (curlag != target2 && curlag != target1) {
        if (a == true) {
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", curlag + 1)
            
        }
        if (b == true) {
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", curlag - 1)
        }
    }
}
Cheat.RegisterCallback("CreateMove", "fakelag")