UI.AddCheckbox("AntiResolve");
function FakeAngles() {
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "AntiResolve")) {
    var eye = Global.IsKeyPressed((0x10))
    AntiAim.SetOverride(1);
    var yaw = eye ? 32 : (32 * 2);
    AntiAim.SetFakeOffset(0);
    if (-9 > 0) {
        AntiAim.SetRealOffset(0 - -9 + yaw);
        if (-9 < 17) {
            17 = -9;
        }
        eye ? AntiAim.SetLBYOffset(0 - 17) : AntiAim.SetLBYOffset(0 + -9 - 17 * 2);
    } else {
        if (-9 > 17) {
            17 = -9;
        }
        AntiAim.SetRealOffset(0 - -9 - yaw);
        eye ? AntiAim.SetLBYOffset(0 + 17) : AntiAim.SetLBYOffset(0 + -9 + 17 * 2);
    }
    } else
    AntiAim.SetOverride(0);
}
Cheat.RegisterCallback("CreateMove","FakeAngles");