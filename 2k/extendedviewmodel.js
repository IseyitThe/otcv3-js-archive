function extendedviewmodel(){
    UI.SetValue("Misc", "SKINS", "Viewmodel","X offset", UI.GetValue("Misc","JAVASCRIPT","Script items","Viewmodel X"))
    UI.SetValue("Misc", "SKINS", "Viewmodel","Y offset", UI.GetValue("Misc","JAVASCRIPT","Script items","Viewmodel Y"))
    UI.SetValue("Misc", "SKINS", "Viewmodel","Z offset", UI.GetValue("Misc","JAVASCRIPT","Script items","Viewmodel Z"))
    UI.SetValue("Misc", "SKINS", "Viewmodel","Roll", UI.GetValue("Misc","JAVASCRIPT","Script items","Roll"))
    UI.SetValue("Misc", "SKINS", "Viewmodel","FOV", UI.GetValue("Misc","JAVASCRIPT","Script items","FOV"))
}
function Main(){  
    UI.AddLabel("")
    UI.AddLabel("           Extended View-Model")
    UI.AddLabel("_________________________________________")
    UI.AddSliderInt("FOV", -300 , 300)
    UI.AddSliderInt("Viewmodel X", -300 , 300)
    UI.AddSliderInt("Viewmodel Y", -300 , 300)
    UI.AddSliderInt("Viewmodel Z", -300 , 300)
    UI.AddSliderInt("Roll", -300 , 300)
    UI.AddLabel("_________________________________________")
    UI.AddLabel("")
    Global.RegisterCallback("Draw","extendedviewmodel");
}
Main();