UI.AddCheckbox("Enabled sway")
UI.AddCheckbox("Enabled slow jitter")
UI.AddSliderInt("Sway speed", 1, 10)
UI.AddSliderFloat("Slow jitter speed", 1, 5)
UI.AddSliderInt("Slow jitter", 1, 10)
var real_offset = 0
var sway = real_offset += 1
function aaSway() {
    if (UI.GetValue("Enabled sway")) {
        UI.SetEnabled("Sway speed", true)
        AntiAim.SetOverride(1)
        var sway_speed = UI.GetValue("Sway speed")
        var sway = real_offset += 1
        AntiAim.SetRealOffset(sway * sway_speed)
    } else {
        UI.SetEnabled("Sway speed", false)
        AntiAim.SetOverride(0)
    }
}
function fakeAA() {
    if (UI.GetValue("Enabled slow jitter")) {
        if (!UI.GetValue("Enabled sway")) {
            AntiAim.SetRealOffset(-58)
        }
        UI.SetEnabled("Slow jitter speed", true)
        UI.SetEnabled("Slow jitter", true)
        AntiAim.SetOverride(1)
        var slow_jitter_speed = UI.GetValue("Slow jitter speed") * 10
        var slow_jitter = UI.GetValue("Slow jitter")
        var fake = Math.sin(Globals.Curtime() * slow_jitter_speed) * slow_jitter
        AntiAim.SetFakeOffset(fake)
    } else {
        UI.SetEnabled("Slow jitter speed", false)
        UI.SetEnabled("Slow jitter", false)
    }
}
function onUnload() {
    AntiAim.SetOverride(0)
}
Cheat.RegisterCallback("CreateMove", "aaSway")
Cheat.RegisterCallback("CreateMove", "fakeAA")
Cheat.RegisterCallback("Unload", "onUnload")