UI.AddCheckbox("Override On/Off");
UI.AddHotkey("Invert");
UI.AddSliderInt( "Default Real", -60, 60 );
UI.AddSliderInt( "Default LBY", -60, 60 );
UI.AddSliderInt( "Inverted Real", -60, 60 );
UI.AddSliderInt( "Inverted LBY", -60, 60 );

function setAA(){

    if(GetScriptOption("Override On/Off")) AntiAim.SetOverride(1);
    else{
        AntiAim.SetOverride(0);
        return;
    }
    
    if(UI.IsHotkeyActive("Script Items", "left")) type = "Default ";
    else type = "Inverted ";
    
    AntiAim.SetFakeOffset(180);
    
    realoff = GetScriptOption(type + "Real");
    lbyoff = GetScriptOption(type + "LBY");
    
    if(realoff >= 0) AntiAim.SetRealOffset( 180 - realoff );
    else AntiAim.SetRealOffset( - ( 180 - Math.abs(realoff) ));
    
    if(lbyoff >= 0) AntiAim.SetLBYOffset( 180 - lbyoff );
    else AntiAim.SetLBYOffset( - ( 180 - Math.abs(lbyoff) ));
    
}

function GetScriptOption(Name){
    var Value = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", Name);
    return Value;
}

Global.RegisterCallback("CreateMove", "setAA");