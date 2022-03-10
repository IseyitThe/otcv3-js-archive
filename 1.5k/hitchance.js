UI.AddLabel("    -----Made by Vortex#3442-----");
UI.AddCheckbox("Display indicator")
UI.AddHotkey("Heavy Pistol HC Override")
UI.AddSliderInt("Heavy Pistol Hitchance", 0, 100)
UI.AddHotkey("Scout HC Override")
UI.AddSliderInt("Scout Hitchance", 0, 100)
UI.AddHotkey("AWP HC Override")
UI.AddSliderInt("AWP Hitchance", 0, 100)
UI.AddHotkey("Auto HC Override")
UI.AddSliderInt("Auto Hitchance", 0, 100)

var heavy_cache = UI.GetValue("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance")
var scout_cache = UI.GetValue("Rage", "SCOUT", "Accuracy", "Hitchance")
var awp_cache = UI.GetValue("Rage", "AWP", "Accuracy", "Hitchance")
var auto_cache = UI.GetValue("Rage", "AUTOSNIPER", "Accuracy", "Hitchance")
function isActive(a)
{
    return UI.IsHotkeyActive("Script Items", a)
}
function setValue(cat, value)
{
    UI.SetValue("Rage", cat.toUpperCase(), "Accuracy", "Hitchance", value)
}
function isHeavyPistol(name)
{
    if (name == "r8 revolver" || name == "desert eagle")
    {
        return true
    }
}
function isAutoSniper(name)
{
    if(name == "scar 20" || weapon_name == "g3sg1")
    {
        return true
    }
}
function onCM()
{
    heavy_value = UI.GetValue("Script items", "Heavy Pistol Hitchance")
    scout_value = UI.GetValue("Script items", "Scout Hitchance")
    awp_value = UI.GetValue("Script items", "AWP Hitchance")
    auto_value = UI.GetValue("Script items", "Auto Hitchance")
    weapon_name = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
    
    if (isActive("Heavy Pistol Override") && isHeavyPistol(weapon_name))
    {
        setValue("HEAVY PISTOL", heavy_value)
    }
    else{
        setValue("HEAVY PISTOL", heavy_cache)
    }
    
    if (isActive("Scout Override") && weapon_name == "ssg 08")
    {
        setValue("SCOUT", scout_value)
    }
    else{
        setValue("SCOUT", scout_cache)
    }

    if (isActive("AWP Override") && weapon_name == "awp")
    {
        setValue("AWP", awp_value)
    }
    else{
        setValue("AWP", awp_cache)
    }

    if (isActive("Auto Override") && isAutoSniper(weapon_name))
    {
        
        setValue("AUTOSNIPER", auto_value)
    }
    else
    {
        setValue("AUTOSNIPER", auto_cache)
    }
    
}
function indicator()
{
    screen = Render.GetScreenSize()
    wep = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
    x = screen[0]/2
    y = screen[1]/2
    heavy = "Hitchance: " + UI.GetValue("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance")
    scout = "Hitchance: " + UI.GetValue("Rage", "SCOUT", "Accuracy", "Hitchance")
    awp = "Hitchance: " + UI.GetValue("Rage", "AWP", "Accuracy", "Hitchance")
    auto = "Hitchance: " + UI.GetValue("Rage", "AUTOSNIPER", "Accuracy", "Hitchance")
    var str = ""
    if (UI.GetValue("Script items", "Display indicator") && Entity.IsValid(Entity.GetLocalPlayer()) && Entity.IsAlive(Entity.GetLocalPlayer()))
    {
        if (isHeavyPistol(wep))
        {
            str = heavy
        }
        else if(wep == "ssg 08")
        {
            str = scout
        }
        else if(wep == "awp")
        {
            str = awp
        }
        else if (isAutoSniper(wep))
        {
            str = auto
        }
    }
    Render.String(x, y, 0, str+"", [255,255,255,255])
}
Cheat.RegisterCallback("Draw", "indicator")
Cheat.RegisterCallback("CreateMove", "onCM")