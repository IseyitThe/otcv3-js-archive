const keybinds_x = UI.AddSliderInt("keybinds_x", 0, Global.GetScreenSize()[0])
const keybinds_y = UI.AddSliderInt("keybinds_y", 0, Global.GetScreenSize()[1])

function in_bounds(vec, x, y, x2, y2)
{
   return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

 function xy()
 {
     UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "keybinds_x", false)
     UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "keybinds_y", false)
 }
 xy();

function keybinds()
 {
     var h = [];
     const fontpixel = Render.AddFont( "Verdana", 7, 100);
     const fontpixel1 = Render.AddFont( "Arial Black", 9, 100);

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
     if (UI.IsHotkeyActive("Rage", "General", "General", "Force safe point")) {
       h.push("Safe point")
     }
     if (UI.IsHotkeyActive("Rage", "General", "General", "Force body aim")) {
       h.push("Body aim")
     }
     if (UI.IsHotkeyActive("Rage", "Exploits", "Double tap")) {
       h.push("Double tap")
     }
     if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Desync on shot")) {
       h.push("On shot anti-aim")
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
     

     Render.FilledRect(x, y, 170, 19, [183,21,42, 255]);
     Render.StringCustom(x + 4, y + 1, 0, "Keybinds", [255, 255, 255, 255], fontpixel1);
     Render.FilledRect(x + 2, y + 19, 166, 18 + 15 * (h.length - 1), [0,0,0, 210]);
     Render.FilledRect(x, y + 37 + 15 * (h.length - 1), 170, 3, [183,21,42, 255]);
     Render.FilledRect(x + 1, y + 40 + 15 * (h.length - 1), 168, 1, [183,21,42, 255]);
     Render.FilledRect(x + 2, y + 41 + 15 * (h.length - 1), 166, 1, [183,21,42, 255]);
     for (i = 0; i < h.length; i++)
     {
        Render.StringCustom(x + 4, y + 23 + 15 * i, 0, h[i], [255, 255, 255, 255], fontpixel);
        Render.StringCustom(x + 122, y + 23 + 15 * i, 0, "[toggled]", [255, 255, 255, 255], fontpixel);
     }

     if (Global.IsKeyPressed(1)) {
         const mouse_pos = Global.GetCursorPosition();
         if (in_bounds(mouse_pos, x, y, x + 200, y + 30)) {
          if (UI.IsMenuOpen( ) == false)
            return;
             UI.SetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_x", mouse_pos[0] - 100);
             UI.SetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_y", mouse_pos[1] - 20);
         }
     }

 }

Global.RegisterCallback("Draw", "keybinds");