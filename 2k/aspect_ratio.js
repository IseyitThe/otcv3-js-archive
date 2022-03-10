var old_aspectratio = Convar.GetString("r_aspectratio");

UI.AddSliderFloat(["Misc.", "View", "General"], "Aspect ratio", 0.0, 5.0);

function aspectratio() {

    var value = UI.GetValue(["Misc.", "View", "General", "Aspect ratio"]).toString();
    var current = Convar.GetString("r_aspectratio");

    if(current == value) return;
    Convar.SetString("r_aspectratio", value);

}

function restoreAspectRatio() {
    Convar.SetString("r_aspectratio", old_aspectratio);
}

Cheat.RegisterCallback("Unload", "restoreAspectRatio");
Cheat.RegisterCallback("FrameStageNotify", "aspectratio");