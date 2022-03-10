function rect(x, y, w, h, dir, color1, color2) {
    Render.GradientRect(x - Math.round(w/2), y - Math.round(h/2), w, h, dir, color1, color2);
}

var startX = 1920/2;
var startY = 1080/2;

function run() {
    
    var sizeX = 190;
    var sizeY = 2;
    var off = sizeX /2+20;
    var c2 = [150, 200, 255, 255];
    var c1 = [150,0, 200, 0];
    
    if (Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_bIsScoped")) {
        rect(startX - off, startY, sizeX, sizeY, 1, c1, c2);
        rect(startX + off, startY, sizeX, sizeY, 1, c2, c1);
        rect(startX, startY - off, sizeY, sizeX, 0, c1, c2);
        rect(startX, startY + off, sizeY, sizeX, 0, c2, c1);
    }
}

Cheat.RegisterCallback("Draw", "run");