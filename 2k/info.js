/////////////////////////
// written by desc/jo  //
// free to use         //
// no pasterino        //
// for onetap.su/com   //
/////////////////////////


//checkboxes
UI.AddCheckbox("Enable Information");

//vars
const wpn = ""

//prints in chat that the cheat was loaded
Cheat.PrintChat("Loaded Information Script by desc/jo");

//Color Picker
const color = UI.AddColorPicker("Information Color");
//This NEEDs to be here or when the script is loaded, it starts the menu with 100% transparency
UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Information Color", [255, 255, 255, 255])

//Sliders
UI.AddSliderInt("X Position", 0, 1920);
UI.AddSliderInt("Y Position", 0, 1080);

function main() {
  //Detects if we're ingame or not, disables the menu if not.
  if (World.GetServerString() != "") {

    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Information")) {

        //Color Picker
        const clr = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Information Color");


        x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "X Position")
        y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Y Position")

        //Forum Name
        Render.String(11 + x, 12 + y, 0, "Username: " + Cheat.GetUsername(), clr, 8)

        //Server IP
        Render.String(11 + x, 24 + y, 0, "Server IP: " + World.GetServerString(), clr, 8)

        //Map
        Render.String(11 + x, 36 + y, 0, "Map: " + World.GetMapName(), clr, 8)

        //Time In-game
        game_time = Math.round(Globals.Realtime() * 100) / 100;
        Render.String(11 + x, 48 + y, 0, "Game Time: " + Math.round(game_time / 60)  + " Minutes", clr, 8)

        //FPS
        Render.String(11 + x, 60 + y, 0, "FPS: " + Math.floor( 1 / Global.Frametime()), clr, 8)

        //Frametimes
        Render.String(11 + x, 72 + y, 0, "Frametimes: " + Math.round(Globals.Frametime() * 1000) + "ms", clr, 8)

        //Ping
        latency = Global.Latency();
        Render.String(11 + x, 84 + y, 0, "Ping: " + Math.round(latency * 1000), clr, 8)

        //weapon (i'll be adding HC/MinDMG for this soon)
        localplayer_index = Entity.GetLocalPlayer( );
        localplayer_weapon = Entity.GetWeapon(localplayer_index);
        weapon_name = Entity.GetName(localplayer_weapon);
        Render.String(11 + x, 96 + y, 0, "Weapon: " + weapon_name, clr, 8)

        //RageBot Enabled
        if (UI.GetValue("Rage", "GENERAL", "General", "Enabled")) {
          Render.String(11 + x, 108 + y, 0, "RageBot: Enabled", clr, 8)
        } else {
          Render.String(11 + x, 108 + y, 0, "RageBot: Disabled", clr, 8)
        }

        //AntiAim Enabled
        if (UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled")) {
          Render.String(11 + x, 120 + y, 0, "Anti-Aim: Enabled", clr, 8)
        } else {
          Render.String(11 + x, 120 + y, 0, "Anti-Aim: Disabled", clr, 8)
        }

        //AntiAim Positions
        Render.String(11 + x, 132 + y, 0, "Real Yaw: " + Math.round(Local.GetRealYaw() / 1), clr, 8)
        Render.String(11 + x, 144 + y, 0, "Fake Yaw: " + Math.round(Local.GetFakeYaw() / 1), clr, 8)


        //Weapon Information
        if (weapon_name === "ssg 08") {
          wpn = "SCOUT"
        } else if (weapon_name === "knife") {
          wpn = "GENERAL"
        } else if (weapon_name === "r8 revolver") {
          wpn = "HEAVY PISTOL"
        } else if (weapon_name === "desert eagle") {
          wpn = "HEAVY PISTOL"
        } else if (weapon_name === "scar 20") {
          wpn = "AUTOSNIPER"
        } else if (weapon_name === "g3sg1") {
          wpn = "AUTOSNIPER"
        } else if (weapon_name === "dual berettas") {
          wpn = "PISTOL"
        } else if (weapon_name === "awp") {
          wpn = "AWP"
        } else if (weapon_name === "glock 18") {
          wpn = "PISTOL"
        } else if (weapon_name === "usp s") {
          wpn = "PISTOL"
        } else if (weapon_name === "zeus x27") {
          wpn = "GENERAL"
        }
        hc = UI.GetValue("Rage", wpn, "Accuracy", "Hitchance")
        mindmgv = UI.GetValue("Rage", wpn, "Damage", "Minimum damage (visible)")
        mindmgbw = UI.GetValue("Rage", wpn, "Damage", "Minimum damage (behind wall)")
        Render.String(11 + x, 156 + y, 0, "Inaccuracy: " + Math.round(Local.GetInaccuracy() * 1000), clr, 8)
        Render.String(11 + x, 168 + y, 0, "Hitchance: " + hc, clr, 8)
        Render.String(11 + x, 180 + y, 0, "Min DMG Visible: " + mindmgv, clr, 8)
        Render.String(11 + x, 192 + y, 0, "Min DMG Hidden: " + mindmgbw, clr, 8)

        
    }

 }

}

Global.RegisterCallback("Draw", "main")