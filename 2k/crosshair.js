var cnt = 0
UI.AddSliderFloat("Length", 0, 100)
UI.AddSliderFloat("Speed", 0, 10)
UI.AddColorPicker("Crosshair Color")
UI.AddCheckbox("Rainbow Crosshair")
function rotateAroundPoint(center,point,angle){
    angle = angle / 180 * Math.PI
    var x = Math.cos(angle) * (point[0]-center[0])-Math.sin(angle)*(point[1]-center[1])+center[0]
    var y = Math.sin(angle) * (point[0]-center[0])+Math.cos(angle)*(point[1]-center[1])+center[1]
    return [x,y]
}
function hsv2rgb(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}
function draw(){
    var scr = Render.GetScreenSize()
    scr[0]/=2
    scr[1]/=2
   
    var col = UI.GetColor("Script Items", "Crosshair Color")
    if(UI.GetValue("Script Items", "Rainbow Crosshair")){
        var coll = hsv2rgb(cnt * .002,1,1)
        col = [coll.r,coll.g,coll.b,col[3]]
    }
    var range = UI.GetValue("Script Items", "Length")
    // top
    var topx = scr[0]
    var topy = scr[1]+range
    var topxx = scr[0]-range
    var topyy = scr[1]+range
    var topp = rotateAroundPoint(scr,[topx,topy], cnt)
    var toppp = rotateAroundPoint(scr,[topxx,topyy], cnt)
    Render.Line(scr[0],scr[1],topp[0],topp[1],col)
    Render.Line(topp[0],topp[1],toppp[0],toppp[1],col)
    // bottom
    var botx = scr[0]
    var boty = scr[1]-range
    var botxx = scr[0]+range
    var botyy = scr[1]-range
    var bott = rotateAroundPoint(scr,[botx,boty], cnt)
    var bottt = rotateAroundPoint(scr,[botxx,botyy],cnt)
    Render.Line(scr[0],scr[1],bott[0],bott[1],col)
    Render.Line(bott[0],bott[1],bottt[0],bottt[1],col)
    // right
    var rightx = scr[0]+range
    var righty = scr[1]
    var rightxx = scr[0]+range
    var rightyy = scr[1]+range
    var rightt = rotateAroundPoint(scr,[rightx,righty],cnt)
    var righttt = rotateAroundPoint(scr,[rightxx,rightyy],cnt)
    Render.Line(scr[0],scr[1],rightt[0],rightt[1],col)
    Render.Line(rightt[0],rightt[1],righttt[0],righttt[1],col)
    // left
    var leftx = scr[0]-range
    var lefty = scr[1]
    var leftxx = scr[0]-range
    var leftyy = scr[1]-range
    var leftt = rotateAroundPoint(scr,[leftx,lefty],cnt)
    var lefttt = rotateAroundPoint(scr,[leftxx,leftyy],cnt)
    Render.Line(scr[0],scr[1],leftt[0],leftt[1],col)
    Render.Line(leftt[0],leftt[1],lefttt[0],lefttt[1],col)
    cnt+= Globals.Frametime() * (UI.GetValue("Script Items", "Speed")*100)
}
Cheat.RegisterCallback("Draw","draw")