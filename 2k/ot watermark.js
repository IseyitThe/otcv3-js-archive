function HSVtoRGB(h, s, v)
{
    var r, g, b, i, f, p, q, t;

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6)
    {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}
function getCustomValue(xy) {
  var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", xy);
return value;}
var position = {
  x1: 0,
  y1: 0
}



function watermark()
{


   
    var colors = HSVtoRGB(Global.Realtime() * UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Watermark Rainbow Speed"), 1, 1);

    const ping = Math.floor(Global.Latency() * 1000 / 1.5 );
    const fps = Math.floor( 1 / Global.Frametime() );
     

    x1 = getCustomValue("Watermark position x");
    y1 = getCustomValue("Watermark position y");
    var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();
    var hours = hours1 <= 9 ? "0" + today.getHours() + ":" : today.getHours() + ":";
    var minutes = minutes1 <= 9 ? "0" + today.getMinutes() + ":" : today.getMinutes() + ":";
    var seconds = seconds1 <= 9 ? "0" + today.getSeconds() : today.getSeconds()    ;




    var tickrate = Global.Tickrate()
    font = Render.AddFont( "Verdana", 28, 800);
    font2 = Render.AddFont( "Verdana", 10, 600);
    font3 = Render.AddFont( "Verdana", 9, 500);
    font4 = Render.AddFont( "Verdana", 8, 600);
    font5 = Render.AddFont( "Verdana", 25, 800);
   
    Render.FilledRect( x1 + 45, y1 + 2, 190, 55 , [ 30, 30, 30, 140 ] ); // background
    Render.Rect( x1 + 45, y1 + 2, 190, 55, [ 30, 30, 30, 255 ] ); // background
    Render.FilledRect( x1 + 50, y1 + 7, 180, 45, [ 30, 30, 30, 255 ] ); // background
   
    Render.StringCustom( x1 + 65, y1 + 33, 0, "FPS    " , [ 239, 180, 90, 255 ], font2 ); // RATE
    Render.StringCustom( x1 + 14, y1 + 16, 0, "             " + fps, [ 255, 255, 255, 220 ], font3 ); // RATE1
   
    Render.StringCustom( x1 + 179, y1 + 33, 0, "PING   " , [239, 180, 90, 255 ], font2 ); // PING1
    Render.StringCustom( x1 + 175, y1 + 16, 0, " " + ping + "ms", [ 255, 255, 255, 220 ], font3 ); // PING
   
    Render.StringCustom( x1 + 118, y1 + 32, 0, "RATE   ", [239, 180, 90, 255 ], font2 ); // FPS
    Render.StringCustom( x1 + 93, y1 + 16, 0, "         " + tickrate, [ 255, 255, 255, 220 ], font3 ); // FPS1
   
    Render.GradientRect( x1 + 51,  y1 + 8, 89, 2, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]); // rainbow line
    Render.GradientRect( x1 + 139, y1 + 8, 89, 2, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.r, colors.g, 255]); // rainbow line
   
    // OT background
    Render.FilledRect( x1 + 238, y1 + 2, 80, 55 , [ 30, 30, 30, 140 ] ); // background1
    Render.Rect( x1 + 238, y1 + 2, 80, 55, [ 30, 30, 30, 255 ] ); // background1
    Render.FilledRect( x1 + 243, y1 + 7, 70, 45, [ 30, 30, 30, 255 ] ); // background1
   
    // OT line2
    Render.GradientRect( x1 + 244, y1 + 8, 68, 2, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.r, colors.g, 255]); // rainbow line2
   
    // OT
    Render.StringCustom( x1 + 249, y1 + 11, 0, "O", [239, 180, 90, 255], font5 );
    Render.StringCustom( x1 + 283, y1 + 11, 0, "T", [239, 180, 90, 255], font5 );
   
    // TIME BACKGROUND
    Render.FilledRect( x1 - 70, y1 + 2, 112, 55 , [ 30, 30, 30, 140 ] ); // background2
    Render.Rect( x1 - 70, y1 + 2, 112, 55, [ 30, 30, 30, 255 ] ); // background2
    Render.FilledRect( x1 - 65, y1 + 7, 102, 45, [ 30, 30, 30, 255 ] ); // background2
   
    // TIME line3
    Render.GradientRect( x1 - 64,  y1 + 8, 49, 2, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]); // rainbow line3
    Render.GradientRect( x1 - 16, y1 + 8, 52, 2, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.r, colors.g, 255]); // rainbow line3
   
    //TIME
    Render.StringCustom( x1 - 61, y1 + 33, 0, "CURRENT TIME" , [239, 180, 90, 255 ], font4 ); // TIME
    Render.StringCustom( x1 - 52, y1 + 16, 0, "  " + hours + minutes + seconds, [ 255, 255, 255, 255 ], font3 ); // TIME2


}

function main()
{
        var screensize = Global.GetScreenSize();
        UI.AddSliderInt("Watermark position x", 0, screensize[0]);
        UI.AddSliderInt("Watermark position y", 0, screensize[1]);
       
}
main()

Global.RegisterCallback("Draw", "watermark", "Verdana");
UI.AddSliderFloat("Watermark Rainbow Speed", 0.01, 1.0);
UI.AddLabel("------------TwisTy LUA-------------");
UI.SetValue("MISC", "JAVASCRIPT", "Script Items", "Watermark Rainbow Speed", 0.1);