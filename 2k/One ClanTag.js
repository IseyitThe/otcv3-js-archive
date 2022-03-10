/* 
╭━━━╮╱╱╱╱╱╱╱╱╱╭┳━━━┳━━━╮╱╱╱╱╱╱╭━╮
┃╭━╮┃╱╱╱╱╱╱╱╱╱┃┃╭━━┫╭━━╯╱╱╱╱╱╱┃╭╯
┃╰━━┳╮╭┳┳━━┳┳━╯┃╰━━┫╰━━╮╱╱╭━━┳╯╰╮
╰━━╮┃┃┃┣┫╭━╋┫╭╮┃╭━━┫╭━━╯╱╱┃╭━┻╮╭╯
┃╰━╯┃╰╯┃┃╰━┫┃╰╯┃╰━━┫╰━━╮╭╮┃╰━╮┃┃
╰━━━┻━━┻┻━━┻┻━━┻━━━┻━━━╯╰╯╰━━╯╰╯
Made by suicidee.cf coding team | SuicidEE.cf | Contact@SuicidEE.cf | $uicidE#8262
*/

var screen_size = Render.GetScreenSize();
var lasttime = 0;
UI.AddCheckbox("[SuicidEE.cf] Better doubletap");
UI.AddDropdown("[SuicidEE.cf] Custom Clan tag", ["Disabled", "fakesense", "Win > Acc", "faktality"]);
UI.AddSliderInt("[SuicidEE.cf] Custom clan tag speed", 1, 5);

function onRender(){
    var vTag = UI.GetValue("Script Items", "[SuicidEE.cf] Custom Clan tag");
    var vSpeed = UI.GetValue("Script Items", "[SuicidEE.cf] Custom clan tag speed");
    var vTime = parseInt((Globals.Curtime() * vSpeed));

    if (vTime != lasttime){
        if (vTag == 0){
            Local.SetClanTag("");

        } else if (vTag == 1){
            switch ((vTime) % 31){
                case 1: {
                    Local.SetClanTag("                  ");
                    break;

                } case 2: {
                    Local.SetClanTag("              f");
                    break;

                } case 3: {
                    Local.SetClanTag("             fa");
                    break;

                } case 4: {
                    Local.SetClanTag("            fak");
                    break;

                } case 5: {
                    Local.SetClanTag("           fake");
                    break;

                } case 6: {
                    Local.SetClanTag("          fakes");
                    break;

                } case 7: {
                    Local.SetClanTag("         fakese");
                    break;

                } case 8: {
                    Local.SetClanTag("        fakesen");
                    break;

                } case 9: {
                    Local.SetClanTag("       fakesense");
                    break;

                } case 10: {
                    Local.SetClanTag("      fakesense ");
                    break;

                } case 11: {
                    Local.SetClanTag("     fakesense  ");
                    break;

                } case 12: {
                    Local.SetClanTag("    fakesense   ");
                    break;

                } case 13: {
                    Local.SetClanTag("   fakesense      ");
                    break;

                } case 14: {
                    Local.SetClanTag("  fakesense        ");
                    break;

                } case 15: {
                    Local.SetClanTag(" fakesense        ");
                    break;

                } case 16: {
                    Local.SetClanTag("fakesense         ");
                    break;

                } case 17: {
                    Local.SetClanTag("akesense           ");
                    break;

                } case 18: {
                    Local.SetClanTag("kesense         ");
                    break;

                } case 19: {
                    Local.SetClanTag("esense             ");
                    break;

                } case 20: {
                    Local.SetClanTag("sense              ");
                    break;

                } case 21: {
                    Local.SetClanTag("ense                  ");
                    break;

                } case 22: {
                    Local.SetClanTag("nse                  ");
                    break;

                } case 23: {
                    Local.SetClanTag("se                  ");
                    break;  

                } case 24: {
                    Local.SetClanTag("e                  ");
                    break;

                } case 25: {
                    Local.SetClanTag("                  ");
                    break;
                }

            }

        } else if (vTag == 2){
            switch ((vTime) % 31){
                case 1: {
                    Local.SetClanTag("                  ");
                    break;
        
                } case 2: {
                    Local.SetClanTag("              w");
                    break;
        
                } case 3: {
                    Local.SetClanTag("             wi");
                    break;
                    
                } case 4: {
                    Local.SetClanTag("            win");
                    break;
        
                } case 5: {
                    Local.SetClanTag("           win ");
                    break;
        
                } case 6: {
                    Local.SetClanTag("          win >");
                    break;
        
                } case 7: {
                    Local.SetClanTag("         win > ");
                    break;
        
                } case 8: {
                    Local.SetClanTag("        win > a");
                    break;
        
                } case 9: {
                    Local.SetClanTag("       win > ac");
                    break;
        
                } case 10: {
                    Local.SetClanTag("       win > acc");
                    break;
        
                } case 11: {
                    Local.SetClanTag("      win > acc ");
                    break;
        
                } case 12: {
                    Local.SetClanTag("     win > acc  ");
                    break;
        
                } case 13: {
                    Local.SetClanTag("    win > acc   ");
                    break;
        
                } case 14: {
                    Local.SetClanTag("   win > acc      ");
                    break;
        
                } case 15: {
                    Local.SetClanTag("  win > acc        ");
                    break;
        
                } case 16: {
                    Local.SetClanTag(" win > acc        ");
                    break;
        
                } case 17: {
                    Local.SetClanTag("win > acc         ");
                    break;
        
                } case 18: {
                    Local.SetClanTag("in > acc           ");
                    break;
        
                } case 19: {
                    Local.SetClanTag("n > acc         ");
                    break;
        
                } case 20: {
                    Local.SetClanTag(" > acc             ");
                    break;
        
                } case 21: {
                    Local.SetClanTag("> acc              ");
                    break;
        
                } case 22: {
                    Local.SetClanTag(" acc                  ");
                    break;
        
                } case 23: {
                    Local.SetClanTag("acc                  ");
                    break;
        
                } case 24: {
                    Local.SetClanTag("cc                  ");
                    break;
                    
                } case 25: {
                    Local.SetClanTag("c                  ");
                    break;
        
                } case 26: {
                    Local.SetClanTag("                  ");
                    break;
                }
            }

        } else if (vTag == 3){
            switch ((vTime) % 31){
                case 1: {
                    Local.SetClanTag("");
                    break;

                } case 2: {
                    Local.SetClanTag("f");
                    break;

                } case 3: {
                    Local.SetClanTag("fa");
                    break;

                } case 4: {
                    Local.SetClanTag("fak");
                    break;

                } case 5: {
                    Local.SetClanTag("fakt");
                    break;

                } case 6: {
                    Local.SetClanTag("fakta");
                    break;

                } case 6: {
                    Local.SetClanTag("faktal");
                    break;

                } case 7: {
                    Local.SetClanTag("faktali");
                    break;

                } case 8: {
                    Local.SetClanTag("faktalit");
                    break;

                } case 9: {
                    Local.SetClanTag("faktality");
                    break;

                } case 10: {
                    Local.SetClanTag("faktality");
                    break;

                } case 11: {
                    Local.SetClanTag("faktality");
                    break;

                } case 12: {
                    Local.SetClanTag("faktalit");
                    break;

                } case 13: {
                    Local.SetClanTag("faktali");
                    break;

                } case 14: {
                    Local.SetClanTag("faktal");
                    break;

                } case 15: {
                    Local.SetClanTag("fakta");
                    break;

                } case 16: {
                    Local.SetClanTag("fakt");
                    break;
                    
                } case 17: {
                    Local.SetClanTag("fak");
                    break;

                } case 18: {
                    Local.SetClanTag("fa");
                    break;

                } case 19: {
                    Local.SetClanTag("f");
                    break;

                } case 20: {
                    Local.SetClanTag("");
                    break;

                } case 21: {
                    Local.SetClanTag("");
                }
            }
        }
    }
    lasttime = vTime;
}
Global.RegisterCallback("Draw", "onRender");

function drawIndicators(){
    if (!Entity.GetLocalPlayer() || !Entity.IsAlive(Entity.GetLocalPlayer()) || !Entity.IsValid(Entity.GetLocalPlayer())){
        return;
    }
    
    var difference = Math.abs(Local.GetRealYaw() - Local.GetFakeYaw());
    
    Render.String(6, screen_size[1] - 105, 0, "FAKE", [0, 0, 0, 255], 4);
    Render.String(5, screen_size[1] - 105, 0, "FAKE", [difference * 255 / 58, 255 - (difference * 255 / 58), 0, 255], 4);

    if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")){
        Render.String(4, screen_size[1] - 130, 0, "DT", [255, 255, 255, 255], 4);

    } if (UI.IsHotkeyActive("Rage", "General", "Force body aim")){
        Render.String(4, screen_size[1] - 525, 0, "BAIM", [255, 255, 255, 255], 4);

    } if (UI.IsHotkeyActive("Rage", "General", "Force safe point")){
        Render.String(4, screen_size[1] - 550, 0, "SAFE", [255, 255, 255, 255], 4);

    } if (UI.IsHotkeyActive("Rage", "General", "Resolver override")){
        Render.String(4, screen_size[1] - 500, 0, "RESOLVER", [255, 225, 0, 255], 4);
    }
}
Cheat.RegisterCallback("Draw", "drawIndicators");