UI.AddLabel("HoldESP - By Snekondplace");
UI.AddLabel("Hold key to enable ESP");
UI.AddLabel("");
UI.AddHotkey("ESP Hold Key");

function toggleHKey(){

    var active = UI.IsHotkeyActive("Script Items", "ESP Hold Key"); //you don't have to store value in a variable, but just know you can if you think you'll need it more than once
    
    if(active === 1) toggled = true;
    else toggled = false;
    
    //since the method takes strings, variables containing strings can also be used
    UI.SetValue("Visual", "ENEMIES", "ESP", "Box", toggled);
    UI.SetValue("Visual", "ENEMIES", "ESP", "Glow", toggled);
    UI.SetValue("Visual", "ENEMIES", "ESP", "Name", toggled);

}

Global.RegisterCallback("CreateMove", "toggleHKey");