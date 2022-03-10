var width = 500
var height = 200
var posx = 100
var posy = 100
var barheigh = 20

UI.AddColorPicker("Default color")
UI.SetColor("Script items", "Default color", [255, 255, 255, 255]);

color = [0, 0, 0, 100]

function main() {
    const time = Globals.Tickcount() * Globals.TickInterval() / 0.2;

    const r = Math.sin(time) * 127 + 128;
    const g = Math.sin(time + 2) * 127 + 128;
    const b = Math.sin(time + 4) * 127 + 128;

    pressedcolor = [r, g, b, 255]

    var cursorpos = Input.GetCursorPosition()
    var curx = cursorpos[0]
    var cury = cursorpos[1]

    row1w = width / 15
    row2w = width / 14
    row1h = height / 5

    buttoncolor = UI.GetColor("Script items", "Default color")

    Render.FilledRect(posx, posy, width, height, color) // UI
    // Render.FilledRect(posx, posy, width, barheigh, color) // Top bar

    Render.Rect(posx, posy, row1w, row1h, buttoncolor) // Escape + "posy  " because top bar (won't remove it, imo looks nice) 
    Render.Rect(posx + row1w, posy, row1w, row1h, buttoncolor) // 1
    Render.Rect(posx + 2 * row1w, posy, row1w, row1h, buttoncolor) // 2
    Render.Rect(posx + 3 * row1w, posy, row1w, row1h, buttoncolor) // 3
    Render.Rect(posx + 4 * row1w, posy, row1w, row1h, buttoncolor) // 4
    Render.Rect(posx + 5 * row1w, posy, row1w, row1h, buttoncolor) // 5
    Render.Rect(posx + 6 * row1w, posy, row1w, row1h, buttoncolor) // 6
    Render.Rect(posx + 7 * row1w, posy, row1w, row1h, buttoncolor) // 7
    Render.Rect(posx + 8 * row1w, posy, row1w, row1h, buttoncolor) // 8
    Render.Rect(posx + 9 * row1w, posy, row1w, row1h, buttoncolor) // 9
    Render.Rect(posx + 10 * row1w, posy, row1w, row1h, buttoncolor) // 0
    Render.Rect(posx + 11 * row1w, posy, row1w, row1h, buttoncolor) // -
    Render.Rect(posx + 12 * row1w, posy, row1w, row1h, buttoncolor) // =
    Render.Rect(posx + 13 * row1w, posy, 2 * row1w, row1h, buttoncolor) // Backspace

    Render.Rect(posx, posy + row1h, 1.1 * row2w, row1h, buttoncolor) // TAB
    Render.Rect(posx + 1.1 * row2w, posy + row1h, row2w, row1h, buttoncolor) // Q 
    Render.Rect(posx + 1.1 * row2w + row2w, posy + row1h, row2w, row1h, buttoncolor) // W
    Render.Rect(posx + 1.1 * row2w + 2 * row2w, posy + row1h, row2w, row1h, buttoncolor) // E
    Render.Rect(posx + 1.1 * row2w + 3 * row2w, posy + row1h, row2w, row1h, buttoncolor) // R
    Render.Rect(posx + 1.1 * row2w + 4 * row2w, posy + row1h, row2w, row1h, buttoncolor) // T
    Render.Rect(posx + 1.1 * row2w + 5 * row2w, posy + row1h, row2w, row1h, buttoncolor) // Y
    Render.Rect(posx + 1.1 * row2w + 6 * row2w, posy + row1h, row2w, row1h, buttoncolor) // U
    Render.Rect(posx + 1.1 * row2w + 7 * row2w, posy + row1h, row2w, row1h, buttoncolor) // I
    Render.Rect(posx + 1.1 * row2w + 8 * row2w, posy + row1h, row2w, row1h, buttoncolor) // O
    Render.Rect(posx + 1.1 * row2w + 9 * row2w, posy + row1h, row2w, row1h, buttoncolor) // P
    Render.Rect(posx + 1.1 * row2w + 10 * row2w, posy + row1h, row2w, row1h, buttoncolor) // [
    Render.Rect(posx + 1.1 * row2w + 11 * row2w, posy + row1h, row2w, row1h, buttoncolor) // ]

    Render.Rect(posx, posy + 2 * row1h, 1.3 * row2w, row1h, buttoncolor) // CAPS LOCK
    Render.Rect(posx + 1.3 * row2w, posy + 2 * row1h, row2w, row1h, buttoncolor) // A
    Render.Rect(posx + 1.3 * row2w + row2w, posy + 2 * row1h, row2w, row1h, buttoncolor) // S
    Render.Rect(posx + 1.3 * row2w + 2 * row2w, posy + 2 * row1h, row2w, row1h, buttoncolor) // D
    Render.Rect(posx + 1.3 * row2w + 3 * row2w, posy + 2 * row1h, row2w, row1h, buttoncolor) // F
    Render.Rect(posx + 1.3 * row2w + 4 * row2w, posy + 2 * row1h, row2w, row1h, buttoncolor) // G
    Render.Rect(posx + 1.3 * row2w + 5 * row2w, posy + 2 * row1h, row2w, row1h, buttoncolor) // H
    Render.Rect(posx + 1.3 * row2w + 6 * row2w, posy + 2 * row1h, row2w, row1h, buttoncolor) // J
    Render.Rect(posx + 1.3 * row2w + 7 * row2w, posy + 2 * row1h, row2w, row1h, buttoncolor) // K
    Render.Rect(posx + 1.3 * row2w + 8 * row2w, posy + 2 * row1h, row2w, row1h, buttoncolor) // L
    Render.Rect(posx + 1.3 * row2w + 9 * row2w, posy + 2 * row1h, row2w, row1h, buttoncolor) // ;
    Render.Rect(posx + 1.3 * row2w + 10 * row2w, posy + 2 * row1h, row2w, row1h, buttoncolor) // '

    Render.Rect(posx, posy + 3 * row1h, 1.5 * row2w, row1h, buttoncolor) // LEFT SHIFT
    Render.Rect(posx + 1.5 * row2w, posy + 3 * row1h, row2w, row1h, buttoncolor) // Z
    Render.Rect(posx + 1.5 * row2w + row2w, posy + 3 * row1h, row2w, row1h, buttoncolor) // X
    Render.Rect(posx + 1.5 * row2w + 2 * row2w, posy + 3 * row1h, row2w, row1h, buttoncolor) // C
    Render.Rect(posx + 1.5 * row2w + 3 * row2w, posy + 3 * row1h, row2w, row1h, buttoncolor) // V
    Render.Rect(posx + 1.5 * row2w + 4 * row2w, posy + 3 * row1h, row2w, row1h, buttoncolor) // B
    Render.Rect(posx + 1.5 * row2w + 5 * row2w, posy + 3 * row1h, row2w, row1h, buttoncolor) // N
    Render.Rect(posx + 1.5 * row2w + 6 * row2w, posy + 3 * row1h, row2w, row1h, buttoncolor) // M
    Render.Rect(posx + 1.5 * row2w + 7 * row2w, posy + 3 * row1h, row2w, row1h, buttoncolor) // ,
    Render.Rect(posx + 1.5 * row2w + 8 * row2w, posy + 3 * row1h, row2w, row1h, buttoncolor) // .
    Render.Rect(posx + 1.5 * row2w + 9 * row2w, posy + 3 * row1h, row2w, row1h, buttoncolor) // /
    Render.Rect(posx + 1.5 * row2w + 10 * row2w, posy + 3 * row1h, 2.5 * row2w, row1h, buttoncolor) // RIGHT SHIFT

    Render.Rect(posx, posy + 4 * row1h, 1.3 * row1w, row1h, buttoncolor) // LEFT CONTROL
    Render.Rect(posx + 1.3 * row1w, posy + 4 * row1h, 1.2 * row1w, row1h, buttoncolor) // LEFT WINDOWS
    Render.Rect(posx + 1.3 * row1w + 1.2 * row1w, posy + 4 * row1h, 1.2 * row1w, row1h, buttoncolor) // LEFT ALT
    Render.Rect(posx + 1.3 * row1w + 2.4 * row1w, posy + 4 * row1h, 6.5 * row1w, row1h, buttoncolor) // SPACEBAR
    Render.Rect(posx + 1.3 * row1w + 2.4 * row1w + 6.5 * row1w, posy + 4 * row1h, 1.2 * row1w, row1h, buttoncolor) // RIGHT ALT (ALT GR)
    Render.Rect(posx + 1.3 * row1w + 3.6 * row1w + 6.5 * row1w, posy + 4 * row1h, 1.2 * row1w, row1h, buttoncolor) // RIGHT ALT (ALT GR)
    Render.Rect(posx + 1.3 * row1w + 4.8 * row1w + 6.5 * row1w, posy + 4 * row1h, 1.2 * row1w, row1h, buttoncolor) // RIGHT ALT (ALT GR)
    Render.Rect(posx + 1.3 * row1w + 6 * row1w + 6.5 * row1w, posy + 4 * row1h, 1.2 * row1w, row1h, buttoncolor) // RIGHT ALT (ALT GR)

    // SPacebar with lines
    Render.Line(posx + 1.3 * row2w + 10 * row2w + row2w, posy + 2 * row1h, posx + 1.1 * row2w + 11 * row2w + row2w, posy + 2 * row1h, buttoncolor)
    Render.Line(posx + 1.1 * row2w + 12 * row2w, posy + 2 * row1h, posx + 1.1 * row2w + 12 * row2w, posy + row1h, buttoncolor)
    Render.Line(posx + 1.1 * row2w + 11 * row2w + row2w, posy + row1h, posx + 15 * row1w - 1, posy + row1h, buttoncolor)
    Render.Line(posx + 15 * row1w - 2, posy + row1h, posx + 15 * row1w - 2, posy + 2 * row1h + row1h, buttoncolor)
    Render.Line(posx + 15 * row1w - 2, posy + 2 * row1h + row1h - 1, posx + 1.3 * row2w + 10 * row2w + row2w, posy + 2 * row1h + row1h - 1, buttoncolor)
    Render.Line(posx + 1.3 * row2w + 10 * row2w + row2w, posy + 2 * row1h + row1h - 1, posx + 1.3 * row2w + 10 * row2w + row2w, posy + 2 * row1h, buttoncolor)
    // Spacebar done

    if (curx > posx + width - 50 && cury > posy + height - 50 && curx < posx + width + 50 && cury < posy + height + 50) { // Resizing ui
        if (UI.IsMenuOpen()) {
            if (Global.IsKeyPressed(0x01)) {
                width = curx - posx;
                height = cury - posy;
            }
        }
    }
    else if (curx > posx && curx < posx + width && cury > barheigh - 10 && cury < posy + barheigh + 10) {
        if (UI.IsMenuOpen()) {
            if (Global.IsKeyPressed(0x01)) {
                posx = curx - width / 2;
                posy = cury;
            }
        }
    }

    if (Global.IsKeyPressed(0x1B)) {
        Render.FilledRect(posx, posy, row1w, row1h, pressedcolor) // ESCAPE
    }
    if (Global.IsKeyPressed(0x31)) {
        Render.FilledRect(posx + row1w, posy, row1w, row1h, pressedcolor) // 1
    }
    if (Global.IsKeyPressed(0x32)) {
        Render.FilledRect(posx + 2 * row1w, posy, row1w, row1h, pressedcolor) // 2
    }
    if (Global.IsKeyPressed(0x33)) {
        Render.FilledRect(posx + 3 * row1w, posy, row1w, row1h, pressedcolor) // 3
    }
    if (Global.IsKeyPressed(0x34)) {
        Render.FilledRect(posx + 4 * row1w, posy, row1w, row1h, pressedcolor) // 4
    }
    if (Global.IsKeyPressed(0x35)) {
        Render.FilledRect(posx + 5 * row1w, posy, row1w, row1h, pressedcolor) // 5
    }
    if (Global.IsKeyPressed(0x36)) {
        Render.FilledRect(posx + 6 * row1w, posy, row1w, row1h, pressedcolor) // 6
    }
    if (Global.IsKeyPressed(0x37)) {
        Render.FilledRect(posx + 7 * row1w, posy, row1w, row1h, pressedcolor) // 7
    }
    if (Global.IsKeyPressed(0x38)) {
        Render.FilledRect(posx + 8 * row1w, posy, row1w, row1h, pressedcolor) // 8
    }
    if (Global.IsKeyPressed(0x39)) {
        Render.FilledRect(posx + 9 * row1w, posy, row1w, row1h, pressedcolor) // 9
    }
    if (Global.IsKeyPressed(0x30)) {
        Render.FilledRect(posx + 10 * row1w, posy, row1w, row1h, pressedcolor) // 0
    }
    if (Global.IsKeyPressed(0x08)) {
        Render.FilledRect(posx + 13 * row1w, posy, 2 * row1w, row1h, pressedcolor) // Backspace
    }
    if (Global.IsKeyPressed(0x09)) {
        Render.FilledRect(posx, posy + row1h, 1.1 * row2w, row1h, pressedcolor) // TAB
    }
    if (Global.IsKeyPressed(0x51)) {
        Render.FilledRect(posx + 1.1 * row2w, posy + row1h, row2w, row1h, pressedcolor) // Q 
    }
    if (Global.IsKeyPressed(0x57)) {
        Render.FilledRect(posx + 1.1 * row2w + row2w, posy + row1h, row2w, row1h, pressedcolor) // W
    }
    if (Global.IsKeyPressed(0x45)) {
        Render.FilledRect(posx + 1.1 * row2w + 2 * row2w, posy + row1h, row2w, row1h, pressedcolor) // E
    }
    if (Global.IsKeyPressed(0x52)) {
        Render.FilledRect(posx + 1.1 * row2w + 3 * row2w, posy + row1h, row2w, row1h, pressedcolor) // R
    }
    if (Global.IsKeyPressed(0x54)) {
        Render.FilledRect(posx + 1.1 * row2w + 4 * row2w, posy + row1h, row2w, row1h, pressedcolor) // T
    }
    if (Global.IsKeyPressed(0x59)) {
        Render.FilledRect(posx + 1.1 * row2w + 5 * row2w, posy + row1h, row2w, row1h, pressedcolor) // Y
    }
    if (Global.IsKeyPressed(0x55)) {
        Render.FilledRect(posx + 1.1 * row2w + 6 * row2w, posy + row1h, row2w, row1h, pressedcolor) // U
    }
    if (Global.IsKeyPressed(0x49)) {
        Render.FilledRect(posx + 1.1 * row2w + 7 * row2w, posy + row1h, row2w, row1h, pressedcolor) // I
    }
    if (Global.IsKeyPressed(0x4F)) {
        Render.FilledRect(posx + 1.1 * row2w + 8 * row2w, posy + row1h, row2w, row1h, pressedcolor) // O
    }
    if (Global.IsKeyPressed(0x50)) {
        Render.FilledRect(posx + 1.1 * row2w + 9 * row2w, posy + row1h, row2w, row1h, pressedcolor) // P
    }
    if (Global.IsKeyPressed(0xDB)) {
        Render.FilledRect(posx + 1.1 * row2w + 10 * row2w, posy + row1h, row2w, row1h, pressedcolor) // [
    }
    if (Global.IsKeyPressed(0xDD)) {
        Render.FilledRect(posx + 1.1 * row2w + 11 * row2w, posy + row1h, row2w, row1h, pressedcolor) // ]
    }
    if (Global.IsKeyPressed(0x14)) {
        Render.FilledRect(posx, posy + 2 * row1h, 1.3 * row2w, row1h, pressedcolor) // CAPS LOCK
    }
    if (Global.IsKeyPressed(0x41)) {
        Render.FilledRect(posx + 1.3 * row2w, posy + 2 * row1h, row2w, row1h, pressedcolor) // A
    }
    if (Global.IsKeyPressed(0x53)) {
        Render.FilledRect(posx + 1.3 * row2w + row2w, posy + 2 * row1h, row2w, row1h, pressedcolor) // S
    }
    if (Global.IsKeyPressed(0x44)) {
        Render.FilledRect(posx + 1.3 * row2w + 2 * row2w, posy + 2 * row1h, row2w, row1h, pressedcolor) // D
    }
    if (Global.IsKeyPressed(0x46)) {
        Render.FilledRect(posx + 1.3 * row2w + 3 * row2w, posy + 2 * row1h, row2w, row1h, pressedcolor) // F
    }
    if (Global.IsKeyPressed(0x47)) {
        Render.FilledRect(posx + 1.3 * row2w + 4 * row2w, posy + 2 * row1h, row2w, row1h, pressedcolor) // G
    }
    if (Global.IsKeyPressed(0x48)) {
        Render.FilledRect(posx + 1.3 * row2w + 5 * row2w, posy + 2 * row1h, row2w, row1h, pressedcolor) // H
    }
    if (Global.IsKeyPressed(0x4A)) {
        Render.FilledRect(posx + 1.3 * row2w + 6 * row2w, posy + 2 * row1h, row2w, row1h, pressedcolor) // J
    }
    if (Global.IsKeyPressed(0x4B)) {
        Render.FilledRect(posx + 1.3 * row2w + 7 * row2w, posy + 2 * row1h, row2w, row1h, pressedcolor) // K
    }
    if (Global.IsKeyPressed(0x4C)) {
        Render.FilledRect(posx + 1.3 * row2w + 8 * row2w, posy + 2 * row1h, row2w, row1h, pressedcolor) // L
    }
    if (Global.IsKeyPressed(0xBA)) {
        Render.FilledRect(posx + 1.3 * row2w + 9 * row2w, posy + 2 * row1h, row2w, row1h, pressedcolor) // ;
    }
    if (Global.IsKeyPressed(0xDE)) {
        Render.FilledRect(posx + 1.3 * row2w + 10 * row2w, posy + 2 * row1h, row2w, row1h, pressedcolor) // '
    }
    if (Global.IsKeyPressed(0x10)) {
        Render.FilledRect(posx, posy + 3 * row1h, 1.5 * row2w, row1h, pressedcolor) // LEFT SHIFT
    }
    if (Global.IsKeyPressed(0x5A)) {
        Render.FilledRect(posx + 1.5 * row2w, posy + 3 * row1h, row2w, row1h, pressedcolor) // Z
    }
    if (Global.IsKeyPressed(0x58)) {
        Render.FilledRect(posx + 1.5 * row2w + row2w, posy + 3 * row1h, row2w, row1h, pressedcolor) // X
    }
    if (Global.IsKeyPressed(0x43)) {
        Render.FilledRect(posx + 1.5 * row2w + 2 * row2w, posy + 3 * row1h, row2w, row1h, pressedcolor) // C
    }
    if (Global.IsKeyPressed(0x56)) {
        Render.FilledRect(posx + 1.5 * row2w + 3 * row2w, posy + 3 * row1h, row2w, row1h, pressedcolor) // V
    }
    if (Global.IsKeyPressed(0x42)) {
        Render.FilledRect(posx + 1.5 * row2w + 4 * row2w, posy + 3 * row1h, row2w, row1h, pressedcolor) // B
    }
    if (Global.IsKeyPressed(0x4E)) {
        Render.FilledRect(posx + 1.5 * row2w + 5 * row2w, posy + 3 * row1h, row2w, row1h, pressedcolor) // N
    }
    if (Global.IsKeyPressed(0x4D)) {
        Render.FilledRect(posx + 1.5 * row2w + 6 * row2w, posy + 3 * row1h, row2w, row1h, pressedcolor) // M
    }
    if (Global.IsKeyPressed(0xBC)) {
        Render.FilledRect(posx + 1.5 * row2w + 7 * row2w, posy + 3 * row1h, row2w, row1h, pressedcolor) // ,
    }
    if (Global.IsKeyPressed(0xBE)) {
        Render.FilledRect(posx + 1.5 * row2w + 8 * row2w, posy + 3 * row1h, row2w, row1h, pressedcolor) // .
    }
    if (Global.IsKeyPressed(0xBF)) {
        Render.FilledRect(posx + 1.5 * row2w + 9 * row2w, posy + 3 * row1h, row2w, row1h, pressedcolor) // /
    }
    if (Global.IsKeyPressed(0xA1)) {
        Render.FilledRect(posx + 1.5 * row2w + 10 * row2w, posy + 3 * row1h, 2.5 * row2w, row1h, pressedcolor) // RIGHT SHIFT
    }
    if (Global.IsKeyPressed(0xA2)) {
        Render.FilledRect(posx, posy + 4 * row1h, 1.3 * row1w, row1h, pressedcolor) // LEFT CONTROL
    }
    if (Global.IsKeyPressed(0x5B)) {
        Render.FilledRect(posx + 1.3 * row1w, posy + 4 * row1h, 1.2 * row1w, row1h, pressedcolor) // LEFT WINDOWS
    }
    if (Global.IsKeyPressed(0x12)) {
        Render.FilledRect(posx + 1.3 * row1w + 1.2 * row1w, posy + 4 * row1h, 1.2 * row1w, row1h, pressedcolor) // LEFT ALT
    }
    if (Global.IsKeyPressed(0x12)) {
        Render.FilledRect(posx + 1.3 * row1w + 2.4 * row1w + 6.5 * row1w, posy + 4 * row1h, 1.2 * row1w, row1h, pressedcolor) // RIGHT ALT (ALT GR)
    }
    if (Global.IsKeyPressed(0x5C)) {
        Render.FilledRect(posx + 1.3 * row1w + 3.6 * row1w + 6.5 * row1w, posy + 4 * row1h, 1.2 * row1w, row1h, pressedcolor) // RIGHT WINDOWS
    }
    if (Global.IsKeyPressed(0xA5)) {
        Render.FilledRect(posx + 1.3 * row1w + 4.8 * row1w + 6.5 * row1w, posy + 4 * row1h, 1.2 * row1w, row1h, pressedcolor) // MENU KEY ??
    }
    if (Global.IsKeyPressed(0xA3)) {
        Render.FilledRect(posx + 1.3 * row1w + 6 * row1w + 6.5 * row1w, posy + 4 * row1h, 1.2 * row1w, row1h, pressedcolor) // RIGHT CONTROL
    }
    if (Global.IsKeyPressed(0x0D)) {
        Render.FilledRect(posx + 1.3 * row2w + 11 * row2w + 1, posy + 2 * row1h + 1, 2 * (Math.floor(width / 17)) + 1, row1h - 1, pressedcolor) // ENTER!
        Render.FilledRect(posx + 14 * row1w + 2, posy + row1h + 1, Math.floor(width / 16), row1h + 10, pressedcolor) // ENTER!
    }
    if (Global.IsKeyPressed(0x20)) {
        Render.FilledRect(posx + 1.3 * row1w + 2.4 * row1w, posy + 4 * row1h, 6.5 * row1w, row1h, pressedcolor) // SPACEBAR
    }
}
Cheat.RegisterCallback("Draw", "main")