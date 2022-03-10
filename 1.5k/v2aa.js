var alternate = true
var invertedbodylean
var bodylean
var manualyaw = 0
var left
var right
var back
UI.AddCheckbox("V2 AntiAim");
UI.AddCheckbox("Inverter spam");
UI.AddHotkey( "Inverter" );
UI.AddSliderInt("Body lean", -60, 60);
UI.AddSliderInt("Inverted body lean", -60, 60);
UI.AddSliderInt("Jitter", 0, 30);
UI.AddCheckbox("Manual");
UI.AddHotkey( "Left" );
UI.AddHotkey( "Right" );
UI.AddHotkey( "Back" );
function v2aa()
{

    local_ent = Entity.GetLocalPlayer( );
    local_entalive= Entity.IsAlive( local_ent );
    invertedbodylean = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Inverted body lean");
    bodylean = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Body lean");
    jitter = Math.floor(Math.random() * UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Jitter")) + 1;
    if (!local_entalive)//checking if local player is alive
    return
    // iverter spam bs
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Inverter spam"))
    {
      if (alternate == true)
      UI.ToggleHotkey("Script items", "Inverter")
      else
      UI.ToggleHotkey("Script items", "Inverter")
    }
  // iverter spam bs
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Manual"))
    {
        if (UI.IsHotkeyActive("Script items", "Left"))
        {
        left = true
        right = false
        back = false
        }
        if (UI.IsHotkeyActive("Script items", "Right"))
        {
        left = false
        right = true
        back = false
        }
        if (UI.IsHotkeyActive("Script items", "Back"))
        {
        left = false
        right = false
        back = true
        }
        if (left == true)
          manualyaw = -90
        else if (right == true)
          manualyaw = 90
        else if (back == true)
          manualyaw = 0
    }
    else
    {
    left = false
    right = false
    back = false 
    manualyaw = 0
    }


    if (UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "V2 AntiAim"))
    {
    //changing override to 1 so we can manipulate our angels in every way we want
    AntiAim.SetOverride(1);
    // micromovement start
    if (!Input.IsKeyPressed(0x20) && !Input.IsKeyPressed(0x57) && !Input.IsKeyPressed(0x53) && !Input.IsKeyPressed(0x41) && !Input.IsKeyPressed(0x44)) // checking if any of the movement keys are pressed
    {
    if (alternate == true)
    {
        UserCMD.SetMovement( [ 3.3, -1, 0 ] ); // moving forward
        alternate = false
    }
    else if (alternate == false)
    {
        UserCMD.SetMovement( [ -3.3, 1, 0 ] ); // moving backward
        alternate = true
    }
    }
    // micromovement end
  
    //antiaim function start
   if (!UI.IsHotkeyActive("Script items", "Inverter"))
   {
    AntiAim.SetFakeOffset(0);//setting our head backwards
    AntiAim.SetRealOffset(-120);//setting our fakehead 120 degrees from real
    AntiAim.SetLBYOffset(120);//does not really matter with micromovement
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", bodylean + manualyaw + jitter)
   }
   else if (UI.IsHotkeyActive("Script items", "Inverter"))
   {
    AntiAim.SetFakeOffset(0);
    AntiAim.SetRealOffset(120);
    AntiAim.SetLBYOffset(-120);
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", invertedbodylean + manualyaw + jitter)
   }
   // antiaim function end
   }
  // AntiAim.SetOverride(0);//changing override to 0 so the default antiaim works correctly when v2 checkbox is not enabled/js unloaded
   }
//lua by rias#4990
Cheat.RegisterCallback("CreateMove", "v2aa")