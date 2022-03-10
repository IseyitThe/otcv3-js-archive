UI.AddCheckbox("Strafe Assistance")
//strafe assistance
var bhop_better = UI.AddSliderInt("Strafe Speed: ",0, 300)
function bhop_1()
{
    UI.SetValue("Misc", "GENERAL", "Movement", "Turn speed", UI.GetValue.apply(null,bhop_better))
}
Cheat.RegisterCallback("Draw", "bhop_1")

//watermark
UI.AddColorPicker("Watermark");
UI.AddColorPicker("TextColor");

var color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");
var color_1 = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "TextColor");
if (color[3] == 0)
    UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Watermark", [175, 143, 204, 1]);


function draw() {
    if(!World.GetServerString())
        return;

    var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();
    
    var hours = hours1 <= 9 ? "0"+hours1+":" : hours1+":";
    var minutes = minutes1 <= 9 ? "0" + minutes1+":" : minutes1+":";
    var seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;
    
    var server_tickrate = Globals.Tickrate().toString()
    var ebanaya_hueta = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString()

    color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");
    color_1 = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "TextColor");
    var font = Render.AddFont("Verdana", 7, 400);
    var text = "hill.js [debug] | " + 'jasowo' + " | delay: " + ebanaya_hueta + "ms | " + server_tickrate + "tick | " + hours + minutes + seconds;
    
    var w = Render.TextSizeCustom(text, font)[0] + 8;
    var x = Global.GetScreenSize()[0];

    x = x - w - 10;

    Render.FilledRect(x, 10, w, 2, [ color[0], color[1], color[2], 255 ]);
    Render.FilledRect(x, 12, w, 18, [ 17, 17, 17, color[3] ]);
    Render.StringCustom(x+4, 10 + 4, 0, text, [ color_1[0], color_1[1], color_1[2], 255 ], font);
}


Cheat.RegisterCallback("Draw", "draw");
//fakelag
UI.AddCheckbox("FakeLag")
UI.AddSliderInt("Minimum Value", 1, 14)
UI.AddSliderInt("Maximum Value", 1, 14)
UI.AddSliderInt("Jitter Value Min", 0, 100)
UI.AddSliderInt("Jitter Value Max", 0, 100)
var lag_value = UI.GetValue("Anti-Aim", "Fake-Lag", "Limit")
var jitter_value = UI.GetValue("Anti-Aim", "Fake-Lag", "Jitter")
function CM()
{
    var min_value = UI.GetValue("Minimum Value")
    var max_value = UI.GetValue("Maximum Value")
    var jitter_value_min = UI.GetValue("Jitter Value Min")
    var jitter_value_max = UI.GetValue("Jitter Value Max")
    lag_value = Math.round(Math.random() * (max_value - min_value) + min_value)
    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", lag_value)
    jitter_value = Math.round(Math.random() * (jitter_value_max - jitter_value_min) + jitter_value_min)
    UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", jitter_value)
}
Cheat.RegisterCallback("CreateMove", "CM")
//lowdelta
var jitter_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset")
var yaw_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset")
UI.AddCheckbox("AntiAim");
UI.AddHotkey("Dangerous");
UI.AddHotkey("At Targets");
UI.AddHotkey("Ideal Yaw");
function Safe_Head()
{
    localplayer_index = Entity.GetLocalPlayer( );


        if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "AntiAim") && UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Dangerous"))
        {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 10);
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 4);
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(5);
            AntiAim.SetRealOffset(-7);
        }
        else
        {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", jitter_cache);
            AntiAim.SetOverride(0);
            
        }
}



function Main()
{
    Cheat.RegisterCallback("CreateMove", "Safe_Head");
}
Main();


//ïàðàøà ñ èíäèêàòîðàìè(íèíàâèæó ñïàñèòå)
var screen_size = Global.GetScreenSize();
var DT = 1;


function drawString()
{
  
 
    isDoubletap = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
    isTargets = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "At Targets");
    isLowDelta = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Dangerous");
    isFakeYaw = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Dangerous");
    isOnShot = UI.IsHotkeyActive("Rage", "Exploits", "Hide shots");
    isMaxDmg = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Max Dmg");
    isIdealYaw = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Ideal Yaw");
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "AntiAim") && UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "At Targets"))
        {
            UI.SetValue("Anti-Aim", "At targets", true);
            
        }   
    else
        {
            UI.SetValue("Anti-Aim", "At targets", false);
        }
    //ideal yaw omg
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "AntiAim") && UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Ideal Yaw"))
        {
            UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', true);   
            Render.String(screen_size[0] /2.013 - 15, screen_size[1] /2.1 +45, 0, isIdealYaw ? "IDEAL YAW" : "FAKE YAW", isIdealYaw ? [ 224, 159, 94, 255 ] : [ 144, 101, 214, 255 ],2 );
        }
    else
        {
            UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', false);
            Render.String(screen_size[0] /2.013 - 15, screen_size[1] /2.1 +45, 0, isFakeYaw ? "FAKE YAW" : "FAKE YAW", isFakeYaw ? [ 79, 76, 84, 255 ] : [ 144, 101, 214, 255 ],2 );
            
            
        }
    if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap"))
        {
            UI.SetValue("Rage", "Exploits", "Hide shots", false);
            UI.SetValue("Rage", "Exploits", "Doubletap", true);
            Render.String(screen_size[0] /2.013  + 2, screen_size[1] /2.1 +75, 0, isDoubletap ? "DT" : "DT", isDoubletap ? [ 101, 163, 214, 255] : [ 101, 163, 214, 0 ],2 );
            
        }   
    else if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots"))
        {
            UI.SetValue("Rage", "Exploits", "Hide shots", true);
            UI.SetValue("Rage", "Exploits", "Doubletap", false);
            Render.String(screen_size[0] /2.013 + 2, screen_size[1] /2.1 +75, 0, isOnShot ? "AA" : "AA", isOnShot ? [ 101, 163, 214, 255 ] : [ 144, 101, 214, 0 ],2 );
        }
    else
        {
            UI.SetValue("Rage", "Exploits", "Doubletap", false);
            UI.SetValue("Rage", "Exploits", "Hide shots", false);
        }
    {
        
        
        Render.String(screen_size[0] /2.013 - 18, screen_size[1] /2.1 +55, 0, isLowDelta ? "DANGEROUS" : "DANGEROUS", isLowDelta ? [ 222, 7, 82, 255 ] : [ 79, 76, 84, 255 ],2 );
        Render.String(screen_size[0] /2.013 - 12, screen_size[1] /2.1 +35, 0, isTargets ? "DYNAMIC" : "DEFAULT", isTargets ? [ 144, 101, 214, 255 ] : [ 79, 76, 84, 255 ],2 );
    }   
}
Global.RegisterCallback("Draw", "drawString")

//dmg
UI.AddCheckbox("Display indicator")
UI.AddHotkey("Heavy Pistol Override")
UI.AddSliderInt("Heavy Pistol Mindmg", 0, 130)
UI.AddHotkey("Scout Override")
UI.AddSliderInt("Scout Mindmg", 0, 130)
UI.AddHotkey("AWP Override")
UI.AddSliderInt("AWP Mindmg", 0, 130)
UI.AddHotkey("Auto Override")
UI.AddSliderInt("Auto Mindmg", 0, 130)
UI.AddHotkey("Pistol Override")
UI.AddSliderInt("Pistol Mindmg", 0, 130)
UI.AddHotkey("Max Dmg")
UI.AddCheckbox("Better Knifebot")
var heavy_cache = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage")
var scout_cache = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage")
var awp_cache = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage")
var auto_cache = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage")
var pistol_cache = UI.GetValue("Rage", "PISTOL", "Targeting", "Minimum damage")
var hitchance_cache = UI.GetValue("Rage", "GENERAL", "Accuracy", "Hitchance")
function isActive(a)
{
    return UI.IsHotkeyActive("Script items", a)
}
function setValue(cat, value)
{
    UI.SetValue("Rage", cat.toUpperCase(), "Targeting", "Minimum damage", value)
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
    if(name == "scar 20" || name == "g3sg1")
    {
        return true
    }
}
function isPistol(name)
{
if(name == "glock 18" || name == "usp s" || name == "p250" || name == "five seven" || name == "tec 9" || name == "cz75 auto" || name == "p2000" || name == "dual berettas")
    {
        return true
    }
}

function onCM()
{
    heavy_value = UI.GetValue("Script items", "Heavy Pistol Mindmg")
    scout_value = UI.GetValue("Script items", "Scout Mindmg")
    awp_value = UI.GetValue("Script items", "AWP Mindmg")
    auto_value = UI.GetValue("Script items", "Auto Mindmg")
    pistol_value = UI.GetValue("Script items", "Pistol Mindmg")
    knife_value = ("81")
    maximum_value = ("100")
    weapon_name =  Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))

//ÏÈÑÒÎËÅÒ ÄÐÎÁÎÂÈÊ ÍÀÕÅÐ
    if (isActive("Max Dmg") && isHeavyPistol(weapon_name))
    {
        setValue("HEAVY PISTOL", maximum_value)
    }
    else if (isActive("Heavy Pistol Override") && isHeavyPistol(weapon_name))
    {
        setValue("HEAVY PISTOL", heavy_value)
    }
    else{
        setValue("HEAVY PISTOL", heavy_cache)
    }
 //awp(useless maxdmg)
    if (isActive("Max Dmg") && weapon_name == "awp")
    {
        setValue("AWP", maximum_value)
    }
    else if (isActive("AWP Override") && weapon_name == "awp")
    {
        setValue("AWP", awp_value)
    }
    else{
        setValue("AWP", awp_cache)
    }
//auto
     if (isActive("Max Dmg") && isAutoSniper(weapon_name))
    {
        setValue("AUTOSNIPER", maximum_value)
    }
    else if (isActive("Auto Override") && isAutoSniper(weapon_name))
    {
      
        setValue("AUTOSNIPER", auto_value)
    }
    else
    {
        setValue("AUTOSNIPER", auto_cache)
    }
//scout
    if (isActive("Max Dmg")&& weapon_name == "ssg 08")
    {
        setValue("SCOUT", maximum_value)
    }
    else if (isActive("Scout Override") && weapon_name == "ssg 08")
    {
        setValue("SCOUT", scout_value)
    }
    else
    {
        setValue("SCOUT", scout_cache)
    }
    //ïèñòîëåòû
    if (isActive("Max Dmg")&& isPistol(weapon_name))
    {
        setValue("Pistol", maximum_value)
    }
    else if (isActive("Pistol Override") && isPistol(weapon_name))
    {
        setValue("Pistol", pistol_value)
    }
    else
    {
        setValue("Pistol", pistol_cache)
    }
    //try2makeknifebotbetter
    if("Misc", "JAVASCRIPT", "Script items", "Better Knifebot" && weapon_name == "butterfly")
    {
        UI.SetValue("Rage", "GENERAL", "Accuracy", "Hitchance", knife_value)
    }
    else
    {
        UI.SetValue("Rage", "GENERAL", "Accuracy", "Hitchance", hitchance_cache)
    }
}
function indicator()
{
    screen = Render.GetScreenSize()
    wep = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
    x = screen_size[0] /2.013 - 9
    y = screen_size[1] /2.1 +65
    heavy = "" + UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage")
    scout = "" + UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage")
    awp = "" + UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage")
    auto = "" + UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage")
    pistol = "" + UI.GetValue("Rage", "PISTOL", "Targeting", "Minimum damage")
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
        else if (isPistol(wep))
        {
            str = pistol
        }
    }
    Render.String(x, y, 0, "DMG: "+str, [237, 217, 116, 255], 2)
}
Cheat.RegisterCallback("Draw", "indicator")
Cheat.RegisterCallback("CreateMove", "onCM")
//maxdmgdraw
function maxdmgdraw()
{
    
    if (isMaxDmg)
    {
    Render.FilledCircle(955, 390, 30 , [ 92, 88, 88, 100 ] );
    Render.String( 955, 373, 15, "!", [ 255, 255, 255, 155 ], 4 );
    Render.Circle( 955, 390, 30, [ 255, 255, 255, 200 ] );
    }
}
Cheat.RegisterCallback("Draw", "maxdmgdraw")
UI.AddLabel("thanks for all ^.^")