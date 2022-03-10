UI.AddLabel("                   Hotkeys            ");
const x1 = UI.AddSliderInt("Hotkeys_x", 0, Global.GetScreenSize()[0]);
const y1 = UI.AddSliderInt("Hotkeys_y", 0, Global.GetScreenSize()[1]);
UI.AddColorPicker("Hotkeys");
var colorhotkeys = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Hotkeys");
if (colorhotkeys[3] == 0) {
    UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Hotkeys", [89, 119, 239, 3]);
}
var alpha = 0;
var maxwidth = 0;
var swalpha = 0;
var fdalpha = 0;
var apalpha = 0;
var aialpha = 0;
var spalpha = 0;
var fbalpha = 0;
var dtalpha = 0;
var hsalpha = 0;
var doalpha = 0;
var awpdmgalpha = 0;
var roalpha = 0;
var textalpha = 0;
var h = new Array();

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

function main_hotkeys() {
        if (!World.GetServerString()) return;
        const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_x"),
            y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_y");
        colorhotkeys = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Hotkeys");
        var font = Render.AddFont("Verdana", 7, 100);
        var frames = 8 * Globals.Frametime();
        var width = 75;
        var maxwidth = 0;
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            swalpha = Math.min(swalpha + frames, 1);
        } else {
            swalpha = swalpha - frames;
            if (swalpha < 0) swalpha = 0;
            if (swalpha == 0) {
                h.splice(h.indexOf("Slow Walk"));
            }
        }

        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
            fdalpha = Math.min(fdalpha + frames, 1);
        } else {
            fdalpha = fdalpha - frames;
            if (fdalpha < 0) fdalpha = 0;
            if (fdalpha == 0) {
                h.splice(h.indexOf("Fake Duck"));
            }
        }

        if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
            apalpha = Math.min(apalpha + frames, 1);
        } else {
            apalpha = apalpha - frames;
            if (apalpha < 0) apalpha = 0;
            if (apalpha == 0) {
                h.splice(h.indexOf("Auto-Peek"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
            spalpha = Math.min(spalpha + frames, 1);
        } else {
            spalpha = spalpha - frames;
            if (spalpha < 0) spalpha = 0;
            if (spalpha == 0) {
                h.splice(h.indexOf("Safe Point"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
            fbalpha = Math.min(fbalpha + frames, 1);
        } else {
            fbalpha = fbalpha - frames;
            if (fbalpha < 0) fbalpha = 0;
            if (fbalpha == 0) {
                h.splice(h.indexOf("Force Baim"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            dtalpha = Math.min(dtalpha + frames, 1);
        } else {
            dtalpha = dtalpha - frames;
            if (dtalpha < 0) dtalpha = 0;
            if (dtalpha == 0) {
                h.splice(h.indexOf("Double-Tap"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
            hsalpha = Math.min(hsalpha + frames, 1);
        } else {
            hsalpha = hsalpha - frames;
            if (hsalpha < 0) hsalpha = 0;
            if (hsalpha == 0) {
                h.splice(h.indexOf("Hide Shots"));
            }
        }
		
        if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "AWP Override")) {
            awpdmgalpha = Math.min(awpdmgalpha + frames, 1);
        } else {
            awpdmgalpha = awpdmgalpha - frames;
            if (awpdmgalpha < 0) awpdmgalpha = 0;
            if (awpdmgalpha == 0) {
                h.splice(h.indexOf("Min. Damage"));
            }
        }
		
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Resolver override")) {
            roalpha = Math.min(roalpha + frames, 1);
        } else {
            roalpha = roalpha - frames;
            if (roalpha < 0) roalpha = 0;
            if (roalpha == 0) {
                h.splice(h.indexOf("Min. Damage"));
            }
        }

        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            if (h.indexOf("Slow walk") == -1)
                h.push("Slow Walk")
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
            if (h.indexOf("Duck peek assist") == -1)
                h.push("Fake Duck")
        }
        if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
            if (h.indexOf("Auto peek") == -1)
                h.push("Auto-Peek")
        }
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
            if (h.indexOf("Safe point override") == -1)
                h.push("Safe Point")
        }
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
            if (h.indexOf("Force body aim") == -1)
                h.push("Force Baim")
        }
        if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            if (h.indexOf("Double tap") == -1)
                h.push("Double-Tap")
        }
        if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
            if (h.indexOf("Hide shots") == -1)
                h.push("Hide Shots")
        }
        if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "AWP Override")) {
            if (h.indexOf("AWP Override") == -1)
                h.push("Min. Damage")
        }
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Resolver override")) {
            if (h.indexOf("Resolver override") == -1)
                h.push("Resolver Override")
        }

        if (h.length > 0) {
            alpha = Math.min(alpha + frames, 1);
        } else {
            alpha = alpha - frames;
            if (alpha < 0) alpha = 0;
        }
        for (i = 0; i < h.length; i++) {
            if (Render.TextSizeCustom(h[i], font)[0] > maxwidth) {
                maxwidth = Render.TextSizeCustom(h[i], font)[0];
            }
        }
        if (maxwidth == 0) maxwidth = 50;
        width = width + maxwidth;
        if (alpha > 0) {
                Render.FilledRect(x, y + 3, width, 2, [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], alpha * 255]);
                Render.FilledRect(x, y + 5, width, 18, [17, 17, 17, alpha * 255]);
                Render.StringCustom(x + width / 2 - (Render.TextSizeCustom("keybinds", font)[0] / 2) + 2, y + 9, 0, "keybinds", [0, 0, 0, alpha * 255 / 1.3], font);
                Render.StringCustom(x + width / 2 - (Render.TextSizeCustom("keybinds", font)[0] / 2) + 1, y + 8, 0, "keybinds", [255, 255, 255, alpha * 255], font);
                //Render.FilledRect(x, y + 23, width, 18 * h.length, [17, 17, 17, Math.min(colorhotkeys[3], alpha * 255)]);
                for (i = 0; i < h.length; i++) {
                    switch (h[i]) {
                        case 'Slow Walk':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(swalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, swalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, swalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, swalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, swalpha * 255], font);
                            break;
                        case 'Fake Duck':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(fdalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, fdalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, fdalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, fdalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, fdalpha * 255], font);
                            break;
                        case 'Auto-Peek':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(apalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, apalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, apalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, apalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, apalpha * 255], font);
                            break;
                        case 'Safe Point':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(spalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, spalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, spalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, spalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, spalpha * 255], font);
                            break;
                        case 'Force Baim':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(fbalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, fbalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, fbalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, fbalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, fbalpha * 255], font);
                            break;
                        case 'Double-Tap':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(dtalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, dtalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, dtalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, dtalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, dtalpha * 255], font);
                            break;
                        case 'Hide Shots':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(hsalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, hsalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, hsalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, hsalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, hsalpha * 255], font);
                            break;
                        case 'Min. Damage':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(awpdmgalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, awpdmgalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, awpdmgalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, awpdmgalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, awpdmgalpha * 255], font);
                            break;
                        case 'Resolver Override':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(roalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, roalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, roalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, roalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, roalpha * 255], font);
                            break;
                    }

                }
        }
        if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
            const mouse_pos = Global.GetCursorPosition();
            if (in_bounds(mouse_pos, x, y, x + width, y + 30)) {
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_x", mouse_pos[0] - width / 2);
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_y", mouse_pos[1] - 20);
            }
        }
}
Global.RegisterCallback("Draw", "main_hotkeys")