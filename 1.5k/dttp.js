var local = Entity.GetLocalPlayer();
var shot_time = 0;
var shotCount = 0;
UI.AddDropdown("Better DT Mode", ["Set", "Increasing"]);
UI.AddSliderInt("FL Limit Start", 0,8);
UI.AddSliderInt("FL Default", 0,16);

function calcFakeLag() {
    mode = UI.GetString("Script items", "Better DT Mode");
    if(mode == "Increasing") {
        if(shotCount == 1 && UI.GetValue("Anti-Aim", "Fake-Lag", "Limit") <= 7) {
            if(Globals.Tickcount() - shot_time >= 1) {
                UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", UI.GetValue("Anti-Aim", "Fake-Lag", "Limit")+1);
                shot_time = Globals.Tickcount();
                UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", true);
                //Cheat.Print("SHOT 1: " +  UI.GetValue("Anti-Aim", "Fake-Lag", "Limit") + "\n");
            }
        } else if(shotCount == 2 && UI.GetValue("Anti-Aim", "Fake-Lag", "Limit") <= 16) {
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", UI.GetValue("Anti-Aim", "Fake-Lag", "Limit")+1);
            shot_time = Globals.Tickcount();
            //Cheat.Print("SHOT 2: " +  UI.GetValue("Anti-Aim", "Fake-Lag", "Limit") + "\n");
            if(UI.GetValue("Anti-Aim", "Fake-Lag", "Limit") == 16) {
                UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Doubletap");
                //UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", true);
                shot_time = 0;
                shotCount = 0;
            }
        }
    } else {
        if(shotCount == 1) {
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 7);
            UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", true);
            shot_time = Globals.Tickcount();
        } else if(shotCount == 2) {
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 16);
            shot_time = Globals.Tickcount();
            UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Doubletap");
            //UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", true);
            shot_time = 0;
            shotCount = 0;
        }
    }

    if(shotCount > 0 && Globals.Tickcount() - shot_time >= 24) {
        if(!UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap"))
            UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Doubletap");
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", UI.GetValue("Script items", "FL Default"));
            UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", true);
        shot_time = 0;
        shotCount = 0;
    } else if((Globals.Tickcount() - shot_time >= 24 && UI.GetValue("Anti-Aim", "Fake-Lag", "Limit") != UI.GetValue("Script items", "FL Default" && shotCount == 0))) {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", UI.GetValue("Script items", "FL Default"));
        UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", true);
    }
}

function on_ragebot_shot() {
    limit = UI.GetValue("FL Limit Start");
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")) {
	UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", limit);
        shot_time = Globals.Tickcount();
        shotCount++;
    } else if(shotCount == 1) {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", limit);
        shot_time = Globals.Tickcount();
        shotCount++;
    }
}

Cheat.RegisterCallback("ragebot_fire", "on_ragebot_shot");
Cheat.RegisterCallback("Draw", "calcFakeLag");