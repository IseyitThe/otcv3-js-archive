var last = 0
var shot = false
UI.AddHotkey("Fast Recharge Hotkey")
function lastShot(){
    if(Entity.GetLocalPlayer() == Entity.GetEntityFromUserID(Event.GetInt("userid")) && UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
      
        last = Globals.Tickcount()
        shot = true
    }
}
var wasActive = true
var wasfding = false
var lastfding = 0
function cm(){
    if((UI.IsHotkeyActive("Rage","GENERAL","Exploits","Hide shots") && !UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")) || !UI.IsHotkeyActive("Script Items","Fast Recharge Hotkey")){
        UI.SetValue("Rage","GENERAL","Exploits","Doubletap instant", false)
        Exploit.EnableRecharge()
        Cheat.Print(Exploit.GetCharge() + "\n")
        return
    }
    UI.SetValue("Rage","GENERAL","Exploits","Doubletap instant", true)
    Exploit.DisableRecharge()
    if(!UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap"))
    wasActive = false
    if(!wasActive && UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
        Exploit.Recharge()
        wasActive = true
    }
    if(UI.IsHotkeyActive("Anti-Aim","Extra","Fake duck")){
        wasfding = true
        lastfding = Globals.Tickcount()
    }
    if(!UI.IsHotkeyActive("Anti-Aim","Extra","Fake duck") && wasfding && Globals.Tickcount() - 2 > lastfding){
        Exploit.Recharge()
        wasfding = false
    }
  
    if(last + 4 < Globals.Tickcount() && shot){
        Exploit.Recharge()
        shot = false
    }
}
function roundStart(){
    if(!UI.GetValue("Script Items", "Fast DT Recharge") || (UI.IsHotkeyActive("Rage","GENERAL","Exploits","Hide shots") && !UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap"))) return
    if(Exploit.GetCharge() != 0){
        Exploit.Recharge()
        last = Globals.Tickcount()
    }
}
Cheat.RegisterCallback("weapon_fire","lastShot")
Cheat.RegisterCallback("CreateMove","cm")
Cheat.RegisterCallback("round_start","roundStart")
Cheat.RegisterCallback("round_prestart","roundStart")
Cheat.RegisterCallback("round_end","roundStart")