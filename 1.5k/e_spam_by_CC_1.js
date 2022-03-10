UI.AddHotkey("Fake E spam")

var yaw_reference = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset");
var pitch_reference = UI.GetValue("Anti-Aim", "Extra", "Pitch");

var cached_pitch = null;
var cached_yaw = null;

function script_active(){
cached_yaw = cached_yaw != null ? cached_yaw : UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset");
cached_pitch = cached_pitch != null ? cached_pitch : UI.GetValue("Anti-Aim", "Extra", "Pitch");

if ( UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Fake E spam" ) ){

    UI.SetValue("Anti-Aim", "Extra", "Pitch", "0")
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -180)

    } else {
        if ( cached_pitch != null ){
                    UI.SetValue("Anti-Aim", "Extra", "Pitch", cached_pitch);
                    cached_pitch = null;
        }

        if ( cached_yaw != null ){
                    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", cached_yaw)
                    cached_yaw = null;
        }
    }
}

Cheat.RegisterCallback("CreateMove", "script_active")