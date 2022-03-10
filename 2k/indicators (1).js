/*
* Name: indicator
* Version: 2.0
* Creator: ByCat#7797
*
*       ____         _____      _          __
*      |  _ \       / ____|    | |        / _|
*      | |_) |_   _| |     __ _| |_   ___| |_
*      |  _ <| | | | |    / _` | __| / __|  _|
*      | |_) | |_| | |___| (_| | |_ | (__| |
*      |____/ \__, |\_____\__,_|\__(_)___|_|
*             __/ |
*            |___/
*                                                  
*/

var time, delay, fillbar, shotsfired;

function dt()
{
    iShotsFired = Event.GetInt("userid"); iShotsFired_index = Entity.GetEntityFromUserID(iShotsFired);
 
    if(Entity.GetLocalPlayer() == iShotsFired_index)
    {
        if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap", "Enabled"))
        {
            if(shotsfired == 0)
            {
                time = Globals.Curtime();
                delay = time+0.3;
                fillbar = 0;
            }            
        }    
    }    
}

function indicator(){
        var screen_size = Global.GetScreenSize();
        var x = screen_size[0]
        var y = screen_size[1]
        var h = [];
        if (UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled") == true) {
            if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Fake") == true)
            {
                h.push("1");
            }
        }
        if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Double Tap") == true)
            {
                h.push("2");
            }
        }
        if (UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled") == true) {
            if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Ping") == true)
            {
                h.push("3");
            }
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Slow") == true)
            {
                h.push("4");
            }
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
            if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Fake Duck") == true)
            {
                h.push("5");
            }
        }
        if (UI.IsHotkeyActive("Misc", "General", "Movement", "Auto peek")) {
            if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Auto Peek") == true)
            {
                h.push("6");
            }
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Aim-Invert") == true)
            {
                h.push("7");
            }
        }
        if (UI.IsHotkeyActive("Rage", "General", "General", "Safe point override")) {
            if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Safe Point") == true)
            {
                h.push("8");
            }
        }
        if (UI.IsHotkeyActive("Rage", "Pistol", "Pistol config", "Hitbox override")) {
            if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hitbox Override") == true)
            {
                h.push("9");
            }
        }
        if (UI.IsHotkeyActive("Rage", "Pistol", "Damage", "Minimum damage (on key)")) {
            if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Damage Override") == true)
            {
                h.push("10");
            }
        }
       
        if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
            if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hide Shots") == true)
            {
                h.push("11");
            }
        }
       
        var distance = 25;
        for (index = 0; index < h.length; ++index) {
            if(h[index] == 1)
                {
                    if( !Entity.GetLocalPlayer( ) || !Entity.IsAlive( Entity.GetLocalPlayer( ) ) || !Entity.IsValid( Entity.GetLocalPlayer( ) ) )
                        return;
                    var difference = Math.abs( Local.GetRealYaw( ) - Local.GetFakeYaw( ) );
                    Render.String( 1, y - 83 - (index * distance), 0, "FAKE", [0, 0, 0, 255] , 4);
                    Render.String( 2, y - 83 - (index * distance), 0, "FAKE", [ difference * 255 / 58, 255 - ( difference * 255 / 58 ), 0, 255 ] , 4);
                }
            if(h[index] == 2)
                {
                    curtime = Globals.Curtime();
                    if (curtime <= delay) {
                        Render.String( 1, y - 83 - (index * distance), 0, "DT", [0, 0, 0, 255] , 4);
                        Render.String( 2, y - 83 - (index * distance), 0, "DT", [ curtime * 255 / 58, 255 - ( curtime * 255 / 58 ), 0, 255 ] , 4);
                      
                        fillbar+=3;
                        shotsfired = 1;
                     
                        if(fillbar >= 65) fillbar = 65;
                        Render.FilledRect(3, y - 83 - (index * distance), 67, 5, [ 0, 0, 0, 150 ]);
                        Render.FilledRect(3, y - 83 - (index * distance), fillbar, 3, [ 30, 150, 255, 150 ]);
                    }
                    else {
                        Render.String( 1, y - 83 - (index * distance), 0, "DT", [0, 0, 0, 255] , 4);
                        Render.String( 2, y - 83 - (index * distance), 0, "DT", [30, 150, 255, 255] , 4);
                        shotsfired = 0;
                    }
                }
            if(h[index] == 3)
                {
                    var localping = Local.Latency();
                   
                    if (localping >= 100) {
                        Render.String( 1, y - 83 - (index * distance), 0, "PING", [0, 0, 0, 255] , 4);
                        Render.String( 2, y - 83 - (index * distance), 0, "PING", [255, 0, 0, 255] , 4);
                    }
                    else {
                        Render.String( 1, y - 83 - (index * distance), 0, "PING", [0, 0, 0, 255] , 4);
                        Render.String( 2, y - 83 - (index * distance), 0, "PING", [ localping * 255 / 58, 255 - ( localping * 255 / 58 ), 0, 255 ] , 4);
                    }
                }
            if(h[index] == 4)
                {
                    Render.String( 1, y - 83 - (index * distance), 0, "SLOW", [0, 0, 0, 255] , 4);
                    Render.String( 2, y - 83 - (index * distance), 0, "SLOW", [ 0, 252, 231, 255 ] , 4);
                }
            if(h[index] == 5)
                {
                    Render.String( 1, y - 83 - (index * distance), 0, "DUCK", [0, 0, 0, 255] , 4);
                    Render.String( 2, y - 83 - (index * distance), 0, "DUCK", [124, 195, 13, 255] , 4);
                }
            if(h[index] == 6)
                {
                    Render.String( 1, y - 83 - (index * distance), 0, "AUTOPEEK", [0, 0, 0, 255] , 4);
                    Render.String( 2, y - 83 - (index * distance), 0, "AUTOPEEK", [124, 195, 13, 255] , 4);
                }
            if(h[index] == 7)
                {
                    Render.String( 1, y - 83 - (index * distance), 0, "INVERT", [0, 0, 0, 255] , 4);
                    Render.String( 2, y - 83 - (index * distance), 0, "INVERT", [255, 255, 255, 255] , 4);
                }
            if(h[index] == 8)
                {
                    Render.String( 1, y - 83 - (index * distance), 0, "SAFE", [0, 0, 0, 255] , 4);
                    Render.String( 2, y - 83 - (index * distance), 0, "SAFE", [124, 195, 13, 255] , 4);
                }
            if(h[index] == 9)
                {
                    Render.String( 1, y - 83 - (index * distance), 0, "HITBOX", [0, 0, 0, 255] , 4);
                    Render.String( 2, y - 83 - (index * distance), 0, "HITBOX", [124, 195, 13, 255] , 4);
                }
            if(h[index] == 10)
                {
                    Render.String( 1, y - 83 - (index * distance), 0, "DMG", [0, 0, 0, 255] , 4);
                    Render.String( 2, y - 83 - (index * distance), 0, "DMG", [124, 195, 13, 255] , 4);
                }
            if(h[index] == 11)
                {
                    Render.String( 1, y - 83 - (index * distance), 0, "HS", [0, 0, 0, 255] , 4);
                    Render.String( 2, y - 83 - (index * distance), 0, "HS", [124, 195, 13, 255] , 4);
                }
        }
}

function main(){
    Global.PrintColor([186, 235, 52, 255], "\n\n[ByCat] Indicator Loaded! \n bycat.cf \n\n\n");
    Global.RegisterCallback("Draw", "indicator");
    Global.RegisterCallback("weapon_fire", "dt");
  
    UI.AddSliderInt("ByCat - Indicator", -1, 0);
  
    UI.AddCheckbox("Fake");
    UI.AddCheckbox("Ping");
    UI.AddCheckbox("Double Tap");
    UI.AddCheckbox("Slow");
    UI.AddCheckbox("Fake Duck");
    UI.AddCheckbox("Auto Peek");
    UI.AddCheckbox("Aim-Invert");
    UI.AddCheckbox("Safe Point");
    UI.AddCheckbox("Hitbox Override");
    UI.AddCheckbox("Damage Override");
    UI.AddCheckbox("Hide Shots");
  
    UI.AddSliderInt("", -1, 0);
  
}
main();