// yuca

function hsv_to_rgb(h, s, v)
{
    var r, g, b, i, f, p, q, t;
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}
function getCustomValue(xy) {
var value = UI.GetValue("Misc", "JAVASCRIPT", "Script items", xy);
return value;}
var position = {
  x1: 0,
  y1: 0
}

function draw_fatality_rect(x, y, width, height)
{


}

function draw_fatality_rect2(x2, y2, width2, height2)
{



     Render.FilledRect( x2 + 49, y2 + 3, width2 + 52, height2 + -17, [ 23, 121, 182, 255 ] );
     Render.FilledRect( x2 + 50, y2 + 4, width2 - -50, height2 - 19, [ 15, 15, 15, 255 ] ); // black

}

function draw_fatality_rect3(x3, y3, width3, height3)
{

}

function draw_gs_watermark()
{
  var fps1 = 1 / Global.Frametime()
  var fps = Math.floor(fps1)
  var watermark_name = Entity.GetName(Entity.GetLocalPlayer( ));
  var today = new Date();
  var datetime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    x1 = getCustomValue("X");
    y1 = getCustomValue("Y");





    draw_fatality_rect(x1, y1, 40, 35);
    draw_fatality_rect2(x1 - 150, y1, 140, 35);
    draw_fatality_rect3(x1 - 300, y1, 140, 35);
    Render.String( x1 + -76, y1 + 7, 0, "tap.com", [ 255, 255, 255, 255], 8 );
    Render.String( x1 + -98, y1 + 7, 0, "one", [ 23, 121, 182, 255], 8 );
    Render.String( x1 + -28, y1 + 7, 0, "|", [ 255, 255, 255, 255], 8 );
    Render.String( x1 - 20, y1 + 7, 0, "" + fps, [ 23, 121, 182, 255], 8 );
    Render.String( x1 - -3, y1 + 7, 0, "fps |", [ 255, 255, 255, 255], 8 );
    Render.String( x1 + 32, y1 + 7, 0, " " + datetime, [ 255, 255, 255, 255 ], 8 );

}

function main()
{
        var screensize = Global.GetScreenSize();
        UI.AddSliderInt("X", 0, screensize[0]);
        UI.AddSliderInt("Y", 0, screensize[0]);
}
main()

Global.RegisterCallback("Draw", "draw_gs_watermark")