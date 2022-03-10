/*
 * Name: keybinds
 * Version: 2.1
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

 const keybinds_x = UI.AddSliderInt("keybinds_x", 0, Global.GetScreenSize()[0])
 const keybinds_y = UI.AddSliderInt("keybinds_y", 0, Global.GetScreenSize()[1])

 function in_bounds(vec, x, y, x2, y2)
{
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

 function bycat()
 {
     UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "keybinds_x", false)
     UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "keybinds_y", false)
 }
 bycat();

function keybinds()
 {
     var h = [];

     if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
       h.push("Slow walk")
     }
     if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
       h.push("Fake duck")
     }
     if (UI.IsHotkeyActive("Misc", "General", "Movement", "Auto peek")) {
       h.push("Auto peek")
     }
     if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
       h.push("Anti-Aim invert")
     }
     if (UI.IsHotkeyActive("Rage", "General", "General", "Safe point override")) {
       h.push("Safe point override")
     }
     if (UI.IsHotkeyActive("Rage", "Pistol", "Pistol config", "Hitbox override")) {
       h.push("Hitbox override")
     }
     if (UI.IsHotkeyActive("Rage", "Pistol", "Damage", "Minimum damage (on key)")) {
       h.push("Minimum damage (on key)")
     }
     if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
       h.push("Doubletap")
     }
     if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
       h.push("Hide shots")
     }
     if (UI.IsHotkeyActive("Legit", "GENERAL", "Triggerbot", "Enabled")) {
       h.push("Triggerbot")
     }

     const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_x"),
           y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_y");

     const rainbow = [
         Math.floor(Math.sin(Global.Realtime() * 2) * 127 + 128),
         Math.floor(Math.sin(Global.Realtime() * 2 + 2) * 127 + 128),
         Math.floor(Math.sin(Global.Realtime() * 2 + 4) * 127 + 128),
         255
     ];

        Render.Rect(x - 1, y - 1, 202, 61 + 15 * (h.length - 1), [2, 2, 2, 100]);
     Render.FilledRect(x, y, 200, 60 + 15 * (h.length - 1), [55, 55, 55, 200]);
     Render.Rect(x + 5, y + 5, 190, 50 + 15 * (h.length - 1), [2, 2, 2, 100]);
     Render.FilledRect(x + 5, y + 5, 190, 50 + 15 * (h.length - 1), [25, 25, 25, 200]);
     Render.FilledRect(x + 9, y + 25, 181, 3, rainbow);
     Render.String(x + 100, y + 10, 1, "keybinds", [200, 200, 200, 200], 3);

     for (i = 0; i < h.length; i++)
     {
         Render.String(x + 100, y + 35 + 15 * i, 1, h[i], [200, 200, 200, 200], 3);
     }

     if (Global.IsKeyPressed(1)) {
         const mouse_pos = Global.GetCursorPosition();
         if (in_bounds(mouse_pos, x, y, x + 200, y + 30)) {
             UI.SetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_x", mouse_pos[0] - 100);
             UI.SetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_y", mouse_pos[1] - 20);
         }
     }

 }

function main() {
   Global.PrintColor([186, 235, 52, 255], "\n\n[ByCat] Keybinds Loaded! \n bycat.cf \n\n\n");
   Global.RegisterCallback("Draw", "keybinds");
}
main();