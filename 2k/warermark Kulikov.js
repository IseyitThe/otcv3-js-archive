const show_edition = [  1  /* system`mod 1/0 */,  "system`mod" /* system`mod */];

const primary_clr = [255, 0, 255, 255]; /* ЦВЕТ (RGB)*/
const secondary_clr = [primary_clr[0] - 15, primary_clr[1] - 15, primary_clr[2] - 15, 255]; /* ВТОРОЙ ЦВЕТ, МОЖНО ПОМЕНЯТЬ НА СВОЙ */
const text_clr = [255,255,255,255];
const bg_clr = [40,40,47, 125];

const elleqt_ne_trap_3 = function(x, y, a, text, color, font) {
    Render.StringCustom(x + 1, y + 1, a, text, [15, 15, 15, 55], font);
    Render.StringCustom(x, y, a, text, color, font);
}

const elleqt_ne_trap_2 = function(x, y, w, custom_text, font, base_clr) {
    Render.GradientRect(x, y, w / 2, 2, 1, primary_clr, secondary_clr);
    Render.GradientRect(x + w / 2, y, w / 2, 2, 1, secondary_clr, primary_clr);
    Render.FilledRect(x, y + 2, w, 16, bg_clr);
    elleqt_ne_trap_3(x + w / 2, y + 2, 1, custom_text, text_clr, font);
}

const elleqt_ne_trap_1 = function( ) {
        const text = show_edition[0] ? (" 451squad` | [" + show_edition[1] + "] | " + Cheat.GetUsername() + " | ") : ("451squad` | " + Cheat.GetUsername() + " | ");
        const server_name = World.GetServerString();
        if (server_name != "")
        {
            text += server_name + " | delay: " + Math.round(Local.Latency( ) * 1000 - 16) + " | " + Globals.Tickrate() + "tick | ";
        }
        const now = new Date();
        const hours = now.getHours(), mins = now.getMinutes(), secs = now.getSeconds();
        const time = (hours < 10 ? "0" + hours : hours) + ":" + (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs);
        text += time;
        return text
    }

const elleqt_ne_trap = function() {
    const font = Render.AddFont("Segoe UI", 8, 400);
    const text = elleqt_ne_trap_1();
    const width = Render.TextSizeCustom(text, font)[0] + 15;
    const screen_width = Render.GetScreenSize()[0];

    elleqt_ne_trap_2(screen_width - 10 - width, 10, width, text, font, [255,255,255,255]);
}

Cheat.RegisterCallback('Draw', 'elleqt_ne_trap');