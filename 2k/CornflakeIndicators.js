UI.AddColorPicker("Gradient Color 1")
UI.AddColorPicker("Gradient Color 2")
UI.AddColorPicker("Text Color")
UI.AddMultiDropdown("Cornflakes Indicators", ["Desync", "LBY", "Choke", "Exploit Charge"])
UI.AddDropdown("Preset", ["", "Save", "Load"])

UI.AddColorPicker("gc1")
UI.SetEnabled("Script items", "gc1", false)
UI.AddColorPicker("gc2")
UI.SetEnabled("Script items", "gc2", false)
UI.AddColorPicker("gc3")
UI.SetEnabled("Script items", "gc3", false)

var cnt = 0
var was_pressed = 0
var last_target_pos = 0
var last_local_pos = 0

var indmenu = {
    dx : 0,
    dy : 0,
    x : 10,
    y : 425
}

function saveconfig(a, b, c)
{
    UI.SetColor("Script items", "gc1", a)
    UI.SetColor("Script items", "gc2", b)
    UI.SetColor("Script items", "gc3", c)
}
function loadconfig()
{
    UI.SetColor("Script items", "Gradient Color 1", UI.GetColor("Script items", "gc1"))
    UI.SetColor("Script items", "Gradient Color 2", UI.GetColor("Script items", "gc2"))
    UI.SetColor("Script items", "Text Color", UI.GetColor("Script items", "gc3"))
}
saveconfig([0, 210, 255, 150], [210, 0, 255, 150], [255, 255, 255, 255])
loadconfig()
function normalizeYaw(angle)
{
    angle = (angle % 360 + 360) % 360;
    return angle > 180 ? angle - 360 : angle;
}
function inbounds(pos, x, y, w, h)
{
    return pos[0] > x && pos[0] < x + w && pos[1] > y && pos[1] < y + h
}
function draw() {
    var gc1 = UI.GetColor("Script items", "Gradient Color 1")
    var gc2 = UI.GetColor("Script items", "Gradient Color 2")
    var tc = UI.GetColor("Script items", "Text Color")
    if (UI.IsMenuOpen())
    {
        var config = UI.GetValue("Script items", "Preset")
        if (config == 1)
        {
            saveconfig(gc1, gc2, tc)
        }
        if (config == 2)
        {
            loadconfig()
        }
        UI.SetValue("Script items", "Preset", 0)
    }

    var cur_pos = Input.GetCursorPosition()
    var inbox = Input.IsKeyPressed(0x01) && inbounds(cur_pos, indmenu.x, indmenu.y, 200, 25)
    var key_pressed = inbox || was_pressed
    var key_down = false
    if (inbox) {
        if (cnt == 0) {
            key_down = true
        }
        was_pressed = true
        cnt++
    }
    else {
        cnt = 0
        if (!Input.IsKeyPressed(0x01)) {
            was_pressed = false
        }
    }

    if (key_down) {
        indmenu.dx = indmenu.x - cur_pos[0]
        indmenu.dy = indmenu.y - cur_pos[1]
    }
    if (key_pressed) {
        indmenu.x = indmenu.dx + cur_pos[0]
        indmenu.y = indmenu.dy + cur_pos[1]
    }
    if (indmenu.x < 0) {
        indmenu.x = 0
    }
    if (indmenu.y < 0) {
        indmenu.y = 0
    }

    val = UI.GetValue("Script items", "Cornflakes Indicators")
    h = []
    a = []
    m = []
    if (val & 1 << 0)
    {
        h.push("Desync")
        diff = normalizeYaw(Local.GetRealYaw() - Local.GetFakeYaw())
        if (diff < 0) diff = -diff
        if (diff > 119) diff = 119
        //Cheat.Print(diff.toString() + "\n")
        a.push(diff)
        m.push(119)
    }
    if (val & 1 << 1)
    {
        h.push("LBY")
        lby = normalizeYaw(Local.GetRealYaw() - Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_flLowerBodyYawTarget"))
        if (lby < 0) lby = -lby
        if (lby > 120) lby = 120
        a.push(lby)
        m.push(120)
    }
    if (val & 1 << 2)
    {
        h.push("Choke")
        a.push(Globals.ChokedCommands())
        m.push(14)
    }
    if (val & 1 << 3)
    {
        h.push("Charge")
        a.push(Exploit.GetCharge())
        m.push(1)
    }

    font = Render.AddFont("Comic Sans MS", 11, 100)
    textsize = Render.TextSizeCustom("Cornflakes", font)

    point = [(indmenu.x + 200 / 2) - (textsize[0] / 2), (indmenu.y + 25 / 2) - (textsize[1] / 2)]
    gap = point[1] - indmenu.y
    
    Render.FilledRect(indmenu.x, indmenu.y, 200, 25, [25, 25, 25, 200])
    Render.GradientRect(indmenu.x + 2, indmenu.y + 2, 196, 21, 1, gc1, gc2)
    Render.StringCustom(point[0], point[1], 0, "Cornflakes", tc, font)

    box2 = indmenu.y + 27
    space = h.length * 25 + gap * 2

    Render.FilledRect(indmenu.x, box2, 200, space, [25, 25, 25, 200])
    Render.GradientRect(indmenu.x + 2, box2 + 2, 196, space - 4, 1, gc1, gc2)

    for (i = 0; i < h.length; i++)
    {
        Render.StringCustom(indmenu.x + (gap * 2), box2 + i * 25 + (gap * 2) - 1, 0, h[i], tc, font)
        Render.FilledRect(indmenu.x + 65, box2 + i * 25 + (gap * 2) + 2, 128, textsize[1] - 4, [25, 25, 25, 200])
        Render.FilledRect(indmenu.x + 67, box2 + i * 25 + (gap * 2) + 4, 124 / m[i] * a[i], textsize[1] - 8, [255, 255, 255, 200])
    }
    
}
Cheat.RegisterCallback("Draw", "draw")