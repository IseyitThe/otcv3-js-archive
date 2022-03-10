var x = 200;
var y = 200;
var width = 900;
var height = 500;
var globaltime = Globals.Realtime();
var menuopen = true;

var aimbottab = false;
var antiaimtab = false;
var visualstab = false;
var misctab = false;
var musictab = false;

var aimbot_enabled = false;
var aimbot_silent = false;
var aimbot_teamcheck = false;
var aimbot_autoscope = false;

var musicplaying = false;
var song = ["PIPPI", "Dree Low"];
var songtime = 0;
var songlength = 0;

function create_menu(x, y, width, height) {
    Render.FilledRect(x, y, width, height, [18, 18, 18, 255]);
    Render.FilledRect(x + 150, y, width - 150, height, [24, 24, 24, 255]);
    Render.GradientRect(x + 150, y, width - 150, height * 0.35, 0, [255, 255, 255, 20], [24, 24, 24, 20]);
}

function create_tab(text, x, y, selected) {
    var curPos = Input.GetCursorPosition();
    var font = Render.AddFont("Proxima Nova Bold", 11, 700);
    var curx = curPos[0];
    var cury = curPos[1];
    var textsize = Render.TextSizeCustom(text, font);
    var textsizex = textsize[0];
    var textsizey = textsize[1];
    var clicked = false;

    var col = [180, 180, 180, 255];

    if (selected) {
        Render.FilledRect(x - 20, y, 4, textsizey, [30, 215, 96, 255]);
        col = [255, 255, 255, 255];
    }

    if (curx > x && curx < x + textsizex && cury > y && cury < y + textsizey) {
        col = [255, 255, 255, 255];
        if (Input.IsKeyPressed(0x01) && Globals.Realtime() > globaltime + 0.2) {
            globaltime = Globals.Realtime();
            clicked = true;
            col = [150, 150, 150, 255];
        }
    }

    Render.StringCustom(x, y, 0, text, [col[0], col[1], col[2], col[3]], font);
    return clicked;
}

function create_group(title, desc, x, y) {
    var font = Render.AddFont("Proxima Nova Bold", 30, 700);
    var font2 = Render.AddFont("Proxima Nova Thin", 8, 600);
    var titlesize = Render.TextSizeCustom(title, font)[1];
    Render.StringCustom(x, y, 0, title, [255, 255, 255, 255], font);
    Render.StringCustom(x, y + titlesize, 0, desc, [180, 180, 180, 255], font2);
}

function create_checkbox(text, desc, x, y, width, enabled) {
    var font = Render.AddFont("Proxima Nova Bold", 10, 600);
    var textsizey = Render.TextSizeCustom(text, font)[1];
    var curPos = Input.GetCursorPosition();
    var curx = curPos[0];
    var cury = curPos[1];
    var bgCol = [24, 24, 24, 255];
    var clicked = false;
    var gwidth = width - 150 - 60;
    var displayTooltip = false;

    if (curx > x && curx < x + gwidth && cury > y && cury < y + textsizey + 20) {
        bgCol = [40, 40, 40, 255];
        displayTooltip = true;
        if (Input.IsKeyPressed(0x01) && Globals.Realtime() > globaltime + 0.2) {
            globaltime = Globals.Realtime();
            clicked = true;
        }
    }

    Render.FilledRect(x, y, gwidth, textsizey + 20, [bgCol[0], bgCol[1], bgCol[2], bgCol[3]]);
    Render.Line(x, y, x + gwidth, y, [40, 40, 40, 255]);
    Render.Line(x, y + textsizey + 20, x + gwidth, y + textsizey + 20, [40, 40, 40, 255]);
    Render.StringCustom(x + 70, y + (textsizey / 2) + 3, 0, text, [255, 255, 255, 255], font);
    Render.StringCustom(x + 200, y + (textsizey / 2) + 4, 0, desc, [255, 255, 255, 255], font);
    Render.Rect(x + 10, y + 10, 17, 17, [30, 215, 96, 255]);
    if (enabled) {
        Render.FilledRect(x + 10, y + 10, 17, 17, [30, 215, 96, 255]);
        Render.Line(x + 12, y + 19, x + 15, y + 22, [255, 255, 255, 255]);
        Render.Line(x + 13, y + 19, x + 16, y + 22, [255, 255, 255, 255]);
        Render.Line(x + 13, y + 18, x + 16, y + 21, [255, 255, 255, 255]);
        Render.Line(x + 13, y + 20, x + 16, y + 23, [255, 255, 255, 255]);
        Render.Line(x + 14, y + 19, x + 17, y + 22, [255, 255, 255, 255]);
        Render.Line(x + 15, y + 22, x + 22, y + 14, [255, 255, 255, 255]);
        Render.Line(x + 16, y + 22, x + 23, y + 14, [255, 255, 255, 255]);
        Render.Line(x + 16, y + 21, x + 23, y + 13, [255, 255, 255, 255]);
        Render.Line(x + 16, y + 23, x + 23, y + 15, [255, 255, 255, 255]);
        Render.Line(x + 17, y + 22, x + 24, y + 14, [255, 255, 255, 255]);
    }

    if (clicked) {
        return true;
    }
}

function create_song(text, desc, x, y, width) {
    var font = Render.AddFont("Proxima Nova Bold", 10, 600);
    var textsizey = Render.TextSizeCustom(text, font)[1];
    var curPos = Input.GetCursorPosition();
    var curx = curPos[0];
    var cury = curPos[1];
    var bgCol = [24, 24, 24, 255];
    var clicked = false;
    var gwidth = width - 150 - 60;
    var displayTooltip = false;

    if (curx > x && curx < x + gwidth && cury > y && cury < y + textsizey + 20) {
        bgCol = [40, 40, 40, 255];
        displayTooltip = true;
        if (Input.IsKeyPressed(0x01) && Globals.Realtime() > globaltime + 0.2) {
            globaltime = Globals.Realtime();
            clicked = true;
        }
    }

    Render.FilledRect(x, y, gwidth, textsizey + 20, [bgCol[0], bgCol[1], bgCol[2], bgCol[3]]);
    Render.Line(x, y, x + gwidth, y, [40, 40, 40, 255]);
    Render.Line(x, y + textsizey + 20, x + gwidth, y + textsizey + 20, [40, 40, 40, 255]);
    Render.StringCustom(x + 70, y + (textsizey / 2) + 3, 0, text, [255, 255, 255, 255], font);
    Render.StringCustom(x + 250, y + (textsizey / 2) + 4, 0, desc, [255, 255, 255, 255], font);
    if (clicked) {
        return true;
    }
}

function create_tabsquare(text, x, y, width, height) {
    var curPos = Input.GetCursorPosition();
    var curx = curPos[0];
    var cury = curPos[1];
    var font = Render.AddFont("Proxima Nova Bold", 10, 600);
    var mainfont = Render.AddFont("undefeated", 50, 300);
    var icoString = "";
    var clicked = false;
    Render.FilledRect(x, y, width, height, [24, 24, 24, 255]);
    if (text == "Aimbot")
        icoString = "s";
    if (text == "Visuals")
        icoString = "t";
    if (text == "Misc")
        icoString = "u";
    if (text == "Anti-Aim")
        icoString = "v";
    if (text == "Music")
        icoString = "n";
    Render.StringCustom(x + (width / 2), y + (height / 2) - 33, 1, icoString, [255, 255, 255, 255], mainfont);

    if (curx > x && curx < x + width && cury > y && cury < y + height) {
        Render.FilledRect(x, y, width, height, [24, 24, 24, 240]);
        if (Input.IsKeyPressed(0x01) && Globals.Realtime() > globaltime + 0.2) {
            globaltime = Globals.Realtime();
            clicked = true;
        }
        Render.StringCustom(x + (width / 2), y + (height / 2) - 8, 1, text, [255, 255, 255, 255], font);
    }
    Render.Rect(x, y, width, height, [40, 40, 40, 255]);
    if (clicked)
        return true;
}

function cleartabs() {
    aimbottab = false;
    visualstab = false;
    antiaimtab = false;
    misctab = false;
    musictab = false;
}

function main() {
    if (Input.IsKeyPressed(0x2D) && Globals.Realtime() > globaltime + 0.2) {
        globaltime = Globals.Realtime();
        menuopen = !menuopen;
    }
    if (menuopen) {
        setupoptions();
        create_menu(x, y, width, height);
        var font = Render.AddFont("Proxima Nova Thin", 8, 600);
        var font2 = Render.AddFont("Proxima Nova Thin", 8, 300);
        Render.StringCustom(x + 20, y + 20, 0, "SPOTITAP", [180, 180, 180, 255], font);
        if (create_tab("Aimbot", x + 20, y + 40, aimbottab)) {
            cleartabs();
            aimbottab = true;
        }
        if (create_tab("Anti-Aim", x + 20, y + 65, antiaimtab)) {
            cleartabs();
            antiaimtab = true;
        }
        if (create_tab("Visuals", x + 20, y + 90, visualstab)) {
            cleartabs();
            visualstab = true;
        }
        if (create_tab("Misc", x + 20, y + 115, misctab)) {
            cleartabs();
            misctab = true;
        }
        if (create_tab("Music", x + 20, y + 140, musictab)) {
            cleartabs();
            musictab = true;
        }

        var gx = x + 150;

        if (!aimbottab && !visualstab && !misctab && !antiaimtab && !musictab) {
            create_group("Home", "Where next?", gx + 30, y + 30);
            if (create_tabsquare("Aimbot", gx + 50, y + 150, 140, 140)) {
                aimbottab = true;
            }
            if (create_tabsquare("Anti-Aim", gx + 220, y + 150, 140, 140)) {
                antiaimtab = true;
            }
            if (create_tabsquare("Visuals", gx + 390, y + 150, 140, 140)) {
                visualstab = true;
            }
            if (create_tabsquare("Misc", gx + 560, y + 150, 140, 140)) {
                misctab = true;
            }
            if (create_tabsquare("Music", gx + 50, y + 320, 140, 140)) {
                musictab = true;
            }
        }

        if (aimbottab) {
            create_group("Aimbot", "Settings related to your shit aim", gx + 30, y + 30);
            if (create_checkbox("Enabled", "", gx + 30, y + 150, width, aimbot_enabled)) {
                aimbot_enabled = !aimbot_enabled;
            }
            if (create_checkbox("Silent", "Visual snapping", gx + 30, y + 186, width, aimbot_silent)) {
                aimbot_silent = !aimbot_silent;
            }// you are fucking gay dumbass retard
            if (create_checkbox("Team check", "Checks if team-mate is in line of sight", gx + 30, y + 222, width, aimbot_teamcheck)) {
                aimbot_teamcheck = !aimbot_teamcheck;
            }
            if (create_checkbox("Auto scope", "Scopes in your weapon automatically", gx + 30, y + 258, width, aimbot_autoscope)) {
                aimbot_autoscope = !aimbot_autoscope;
            }
        }

        if (musictab) {
            create_group("Music", "Listen to epic swedish rap while hvhing", gx + 30, y + 30);
            if (create_song("stopButton", "Stops music", gx + 30, y + 150, width)) {
                Sound.Play("C:\\Program Files (x86)\\Steam\\steamapps\\common\\Counter-Strike Global Offensive\\csgo\\sound\\bubble.wav");
                musicplaying = false;
                songlength = 0;
                songtime = 0;
            }
            if (create_song("PIPPI", "Dree Low", gx + 30, y + 186, width)) {
                Sound.Play("C:\\Program Files (x86)\\Steam\\steamapps\\common\\Counter-Strike Global Offensive\\csgo\\sound\\pippi.wav");
                song = ["PIPPI", "Dree Low"];
                musicplaying = true;
                songlength = 164;
                songtime = 0;
            }
            if (create_song("Dreams and Nightmares", "Lil Peep", gx + 30, y + 222, width)) {
                Sound.Play("C:\\Program Files (x86)\\Steam\\steamapps\\common\\Counter-Strike Global Offensive\\csgo\\sound\\dreamsandnightmares.wav");
                song = ["Dreams and Nightmares", "Lil Peep"];
                musicplaying = true;
                songlength = 205;
                songtime = 0;
            }
            if (create_song("ALL GIRLS ARE THE SAME", "RONIN", gx + 30, y + 258, width)) {
                Sound.Play("C:\\Program Files (x86)\\Steam\\steamapps\\common\\Counter-Strike Global Offensive\\csgo\\sound\\allgirlsarethesame.wav");
                song = ["ALL GIRLS ARE THE SAME", "RONIN"];
                musicplaying = true;
                songlength = 122;
                songtime = 0;
            }
        }

        if (musicplaying) {
            Render.FilledRect(x, y + height - 70, width, 70, [40, 40, 40, 255]);
            Render.StringCustom(x + 23, y + height - 45, 0, song[0], [255, 255, 255, 255], font);
            Render.StringCustom(x + 23, y + height - 32, 0, song[1], [180, 180, 180, 255], font);
            Render.FilledRect(x + (width * 0.25), y + height - 20, width / 2, 5, [64, 64, 64, 255]);
            Render.FilledRect(x + (width * 0.25), y + height - 20, songtime * (450 / songlength), 5, [180, 180, 180, 255]);
            var curMinutes = Math.floor(songtime / 60);
            var curSeconds = Math.round(songtime - (curMinutes * 60));
            if (curSeconds < 10)
                curSeconds = "0" + curSeconds;
            var curOveralltime = curMinutes + ":" + curSeconds;
            Render.StringCustom(x + (width * 0.25) - 30, y + height - 24, 0, "" + curOveralltime, [180, 180, 180, 255], font2);
            var minutes = Math.floor(songlength / 60);
            var seconds = songlength - (minutes * 60);
            if (seconds < 10)
                seconds = "0" + seconds;
            var overalltime = minutes + ":" + seconds;
            Render.StringCustom(x + (width * 0.25) + (width / 2) + 10, y + height - 24, 0, "" + overalltime, [180, 180, 180, 255], font2);
        }

        checkoptions();
    }

    if (musicplaying) {
        if (!menuopen) {
            var font2 = Render.AddFont("Proxima Nova Thin", 8, 300);
            var size = Render.GetScreenSize();
            var sizex = size[0] / 2;
            var sizey = size[1];
            var font = Render.AddFont("Proxima Nova Bold", 10, 600);
            Render.FilledRect(sizex - 200, 0, 400, 50, [24, 24, 24, 255]);
            Render.FilledRect(sizex - 200, 0, 5, 50, [30, 215, 96, 255]);
            Render.StringCustom(sizex, 8, 1, song[0] + " by " + song[1], [255, 255, 255, 255], font);
            Render.FilledRect(sizex - 150, 33, 300, 5, [60, 60, 60, 255]);
            Render.FilledRect(sizex - 150, 33, songtime * (300 / songlength), 5, [180, 180, 180, 255]);
            var minutes = Math.floor(songlength / 60);
            var seconds = songlength - (minutes * 60);
            if (seconds < 10)
                seconds = "0" + seconds;
            var overalltime = minutes + ":" + seconds;
            Render.StringCustom(sizex + 150 + 10, 29, 0, "" + overalltime, [180, 180, 180, 255], font2);
            var curMinutes = Math.floor(songtime / 60);
            var curSeconds = Math.round(songtime - (curMinutes * 60));
            if (curSeconds < 10)
                curSeconds = "0" + curSeconds;
            var curOveralltime = curMinutes + ":" + curSeconds;
            Render.StringCustom(sizex - 150 - 30, 29, 0, "" + curOveralltime, [180, 180, 180, 255], font2);
        }
        updatesongtime();
    }
}

var globalsongtime = 0;

function updatesongtime() {
    if (Globals.Realtime() > globalsongtime + 0.05) {
        globalsongtime = Globals.Realtime();
        songtime += 0.05;
    }

    if (songtime >= songlength) {
        musicplaying = false;
        songtime = 0;
    }
}

function setupoptions() {
    aimbot_enabled = UI.GetValue("Rage", "GENERAL", "General", "Enabled");
    aimbot_silent = UI.GetValue("Rage", "GENERAL", "General", "Silent");
    aimbot_teamcheck = UI.GetValue("Rage", "GENERAL", "General", "Team check");
    aimbot_autoscope = UI.GetValue("Rage", "GENERAL", "General", "Auto scope");
}

function checkoptions() {
    UI.SetValue("Rage", "GENERAL", "General", "Enabled", aimbot_enabled);
    UI.SetValue("Rage", "GENERAL", "General", "Silent", aimbot_silent);
    UI.SetValue("Rage", "GENERAL", "General", "Team check", aimbot_teamcheck);
    UI.SetValue("Rage", "GENERAL", "General", "Auto scope", aimbot_autoscope);
}

Cheat.RegisterCallback("Draw", "main");