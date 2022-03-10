var screen_size = Global.GetScreenSize();
var DT = 1;

function drawString()
{
    isHideshots = UI.IsHotkeyActive("Rage", "Exploits", "Hide shots");
    isDoubletap = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
    isInverted = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter");


    if(DT)
    {
        Render.String(screen_size[0] /2 + 0 , screen_size[1] /2 +0, 0, isHideshots ? "HIDE" : "HIDE", isHideshots ? [ 124, 195, 13, 255 ] : [ 255, 0, 0, 255 ],3 );
        Render.String(screen_size[0] /2 + 0, screen_size[1] /2 +8, 0, isDoubletap ? "DT" : "DT", isDoubletap ? [ 124, 195, 13, 255 ] : [ 255, 0, 0, 255 ],3 );
        Render.String(screen_size[0] /2 + 0, screen_size[1] /2 +16, 0, isDoubletap ? "R" : "R", isInverted ? [ 124, 195, 13, 255 ] : [ ,,, ],3 );
        Render.String(screen_size[0] /2 + 0, screen_size[1] /2 +16, 0, isDoubletap ? "L" : "L", isInverted ? [ ,,, ] : [ 124, 195, 13, 255 ],3 );
    }
}

Global.RegisterCallback("Draw", "drawString")