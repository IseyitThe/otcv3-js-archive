username = Cheat.GetUsername();
Cheat.PrintColor([87, 195, 194, 25],"\n"+"-----------------------"+"\n"+"Welcome! "+"whitecord user "+username+"\n"+"-----------------------"+"\n"+"lua = watermark"+"\n")
UI.AddColorPicker("Watermark");
var color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");
if (color[3] == 0) {
	UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Watermark", [89, 119, 239, 255]);
}
function HSVtoRGB(h, s, v) {
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
function draw() {
	if(!World.GetServerString()) return;
	
	var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();
    var hours = hours1 <= 9 ? "0" + today.getHours() + ":" : today.getHours() + ":";
    var minutes = minutes1 <= 9 ? "0" + today.getMinutes() + ":" : today.getMinutes() + ":";
    var seconds = seconds1 <= 9 ? "0" + today.getSeconds() : today.getSeconds()    ;
	
	color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");
	var font = Render.AddFont( "Verdana", 7, 400);
	var text = "starcord | " +username+ " | delay: " +Math.round(Global.Latency() * 1000).toString()+ "ms | " +Globals.Tickrate().toString()+ "tick | " + hours + minutes + seconds;
	var h = 18;
	var w = Render.TextSizeCustom(text, font)[0] + 8;
	var x = Global.GetScreenSize()[0];
	var y = 10;
	x = x - w - 10;
	
	Render.FilledRect(x, y, w, 2, [color[0], color[1], color[2], color[3]]);
	Render.FilledRect(x, y+2, w, h, [17, 17, 17, 100]);
	
	Render.StringCustom(x+4, y + 4, 0, text, [255,255,255,255], font);
	
}
Cheat.RegisterCallback("Draw", "draw");