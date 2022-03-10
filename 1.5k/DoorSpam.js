var spam = true;
var button = UserCMD.GetButtons();
var color;
UI.AddHotkey( "Door Spam Key" );

function test(){
   
  const local = Entity.GetLocalPlayer();
   
    if (!local || !Entity.IsAlive(local)) return;

if (!UI.IsHotkeyActive("Misc", "Door Spam Key")) return;

    if(spam){
       
    UserCMD.SetButtons(button | (1 << 5));
   
}
   
    spam = !spam;
}

function paint(){
   
    const local = Entity.GetLocalPlayer();
   
    if (!local || !Entity.IsAlive(local)) return;

    var screen_size = Render.GetScreenSize();
   
    if(UI.IsHotkeyActive("Misc", "Door Spam Key")){
   
    color = [165, 255, 0, 255];
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", false);   
    UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", false);
   
    }else{

        color = [255, 0, 0, 255];
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", true);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", true);
       
        }
   
Render.String( screen_size[0] / 2, (screen_size[1] / 2) + 35, 1, "DOOR SPAM", color );
   
}
UI.AddLabel("________________________________________");

Cheat.RegisterCallback("CreateMove", "test");
Cheat.RegisterCallback("Draw", "paint");