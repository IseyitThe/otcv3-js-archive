function main() {
    UI.AddSliderInt("       Neverlose spectators list", 0, 0);

    var screensize = Global.GetScreenSize()

    UI.AddCheckbox("Spectator-List");

    UI.AddColorPicker("Header Text Color");
    UI.AddColorPicker("Active Text Color");
    UI.AddColorPicker("Logo Color");
    UI.AddLabel(" ");
    UI.AddColorPicker("Top Bar Color");
    UI.AddColorPicker("Bottom Bar Color");
    UI.SetColor("Script items", "Bottom Bar Color", [2, 23, 37, 255 ]);
    UI.SetColor("Script items", "Top Bar Color", [4, 13, 25, 255 ]);
    UI.SetColor("Script items", "Logo Color", [45, 121, 126, 255]);
    UI.SetColor("Script items", "Active Text Color", [255, 255, 255, 255]);
    UI.SetColor("Script items", "Header Text Color", [255, 255, 255, 255]);

    UI.AddSliderInt("", 0, 0);
}
main()

var Renders = {}
Renders.x = "X";
Renders.y = "Y";

Renders.clamp = function(val, min, max) {
    if (val > max)
        return max
    if (val < min)
        return min
    return val
}

Renders.CursorInBox = function(x, y, length, height) {
    var cursor = Input.GetCursorPosition()
    if (cursor[0] > x && cursor[0] < Renders.X() +  length && cursor[1] > y && cursor[1] < Renders.Y() + height)
        return true
    return false
}

Renders.X = function () {
    return UI.GetValue("Script Items", Renders.x)
}
Renders.Y = function () {
    return UI.GetValue("Script Items", Renders.y)
}

function initialize() {
    UI.AddSliderInt(Renders.x, 0, Render.GetScreenSize()[0])
    UI.AddSliderInt(Renders.y, 0, Render.GetScreenSize()[1])
    UI.SetEnabled("Script Items", Renders.x, 0)
    UI.SetEnabled("Script Items", Renders.y, 0)
}
initialize()
     
function values(name) {
     var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", name);
     return value;
} 

function get_spectators() {
    var specs = [];
    const players = Entity.GetPlayers();
    for (i = 0; i < players.length; i++) {
        const cur = players[i];
        if (Entity.GetProp(cur, "CBasePlayer", "m_hObserverTarget") != "m_hObserverTarget") {
            const obs = Entity.GetProp(cur, "CBasePlayer", "m_hObserverTarget")

            if (obs === Entity.GetLocalPlayer())
            {
                const name = Entity.GetName(cur);
                specs.push(name);
            }}}
return specs;
}

function Spectatorss() {
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Spectator-List"))
    return;

    const names = get_spectators();

    Color = UI.GetColor("Script items","Header Text Color");
    Color2 = UI.GetColor("Script items","Active Text Color");
    ColorLogo = UI.GetColor("Script items","Logo Color");
    ColorTop = UI.GetColor("Script items","Top Bar Color");
    ColorBottom = UI.GetColor("Script items","Bottom Bar Color");

    Render.FilledRect(Renders.X() + 78, Renders.Y() + 26, 125, 60 + 25 * (names.length - 1), ColorBottom);
    Render.FilledRect(Renders.X() + 78, Renders.Y() + 26, 125, 35, ColorTop );

    Render.Circle(Renders.X() + 97, Renders.Y() + 43, 3, ColorLogo);
    Render.Circle(Renders.X() + 97, Renders.Y() + 43, 7, ColorLogo);
    Render.Circle(Renders.X() + 97, Renders.Y() + 43, 11, ColorLogo);

    Render.FilledRect(Renders.X() + 96, Renders.Y() + 29, 2, 9, ColorLogo );
    Render.FilledRect(Renders.X() + 96, Renders.Y() + 49, 2, 9, ColorLogo );
    Render.FilledRect(Renders.X() + 103, Renders.Y() + 42, 9, 2, ColorLogo );
    Render.FilledRect(Renders.X() + 83, Renders.Y() + 42, 9, 2, ColorLogo );

    Render.String(Renders.X() + 120, Renders.Y() + 35, 0, "Spectators", Color, 4, 3);
      
    for (i = 0; i < names.length; i++){
        Render.String(Renders.X() + 80, Renders.Y() + 65 + 25 * i, 0, names[i].length > 14 ? names[i].substring(0, 14) : names[i], [255, 255, 255, 255], 4, 3);
    }
}

var moveIndic = false
var waitforup = false
var offsetx = 0
var offsety = 0

function checkMovement() {
    var cursor = Input.GetCursorPosition()
    var onmenu = Renders.CursorInBox(Renders.X() +  78, Renders.Y(), 205, 62)
    if (UI.IsMenuOpen()) {
        if (Input.IsKeyPressed(0x01) && !waitforup && onmenu) {
            moveIndic = true
            offsetx = cursor[0] - Renders.X()
            offsety = cursor[1] - Renders.Y()
            waitforup = true
        }
        if (!Input.IsKeyPressed(0x01)) {
            moveIndic = false
            waitforup = false
        }
        if (moveIndic) {
            UI.SetValue("Script Items","X",cursor[0]-offsetx)
            UI.SetValue("Script Items","Y",cursor[1]-offsety)
        }
    }
}

function main2() {
    Cheat.RegisterCallback("Draw","checkMovement")
    Cheat.RegisterCallback("Draw", "Spectatorss");
}
main2()