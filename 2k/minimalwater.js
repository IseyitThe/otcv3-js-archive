function gettime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var ampm1 = hours >= 10 ? Render.String( x1 + 106, y1 + 8.5, 0 , " " + ampm , [255, 165, 0, 150], 3) : Render.String( x1 + 101, y1 + 8.5, 0 , " " + ampm , [255, 165, 0, 150], 3)
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes;
    return strTime;
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
    x1 = getCustomValue("Watermark x");
    y1 = getCustomValue("Watermark y");   
    var date = new Date();
    const fps = Math.floor( 1 / Global.Frametime() );
    Render.FilledRect( x1 + 0, y1 + 0, 133, 25, [40, 40, 40, 220] );
    Render.FilledRect( x1 + 4, y1 + 4, 125, 17, [0, 0, 0, 255]);
    Render.Rect( x1 + 4, y1 + 4, 125, 17, [0, 0, 0, 255] );
    Render.Rect( x1 + 0, y1 + 0, 133, 25, [0, 0, 0, 255] );
    Render.String( x1 + 10, y1 + 8.5, 0, "one", [255, 255, 255, 150], 3 )
    Render.String( x1 + 26, y1 + 8.5, 0, "tap", [255,165,0, 150], 3 )
    Render.String( x1 + 42, y1 + 8.5, 0, "| " + fps , [255, 255, 255, 150], 3 )
    Render.String( x1 + 62, y1 + 8.5, 0," fps" , [255, 165, 0, 150], 3 )
    Render.String( x1 + 77, y1 + 8.5, 0 , " | " + gettime(date) , [255, 255, 255, 150], 3)
    Render.GradientRect( x1 + 5, y1 + 4, 124, 1, 1, [255, 165, 0, 150], [ 65,105,225, 255]);
}

function main()
{
    var screensize = Global.GetScreenSize();
    UI.AddSliderInt("Watermark x", 0, screensize[0]);
    UI.AddSliderInt("Watermark y", 0, screensize[1]);
}
main()

Global.RegisterCallback( "Draw", "watermark")