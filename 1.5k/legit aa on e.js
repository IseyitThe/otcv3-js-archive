UI.AddHotkey("Pitch Zero")

var restrictions_cache = UI.GetValue ("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions")
var hiderealangle_cache = UI.GetValue ("Anti-Aim", "Fake angles", "Hide real angle")
var yawoffset_cache = UI.GetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset")
var pitch_cache = UI.GetValue ("Anti-Aim", "Extra", "Pitch")
var isOriginal = true;

function main()
{
    if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Pitch Zero"))
    {
        if(isOriginal)
        {
            restrictions_cache = UI.GetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions")
            hiderealangle_cache = UI.GetValue ("Anti-Aim", "Fake angles", "Hide real angle")
            yawoffset_cache = UI.GetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset")
            pitch_cache = UI.GetValue ("Anti-Aim", "Extra", "Pitch")
            isOriginal = false;
        }
        UI.SetValue ("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0)
        UI.SetValue ("Anti-Aim", "Fake angles", "Hide real angle", true)
        UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180)
        UI.SetValue ("Anti-Aim", "Extra", "Pitch", 0)
    }
    else
    {
        if(!isOriginal)
        {
            UI.SetValue ("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", restrictions_cache)
            UI.SetValue ("Anti-Aim", "Fake angles", "Hide real angle", hiderealangle_cache)
            UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawoffset_cache)
            UI.SetValue ("Anti-Aim", "Extra", "Pitch", pitch_cache)
            isOriginal = true;
        }
    }
}

Cheat.RegisterCallback("CreateMove", "main")