UI.AddSliderInt("watermark_x", 0, Global.GetScreenSize()[0]);
UI.AddSliderInt("watermark_y", 0, Global.GetScreenSize()[0]);

function fakeamount(){
    const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "watermark_x"),
    y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "watermark_y");
    delta = 0;
    if(Entity.IsAlive(Entity.GetLocalPlayer()) == true){
        fontpixel = Render.AddFont( "Verdana", 7, 100);
        fake = Math.abs(Local.GetFakeYaw());
        real = Math.abs(Local.GetRealYaw());
        
        if(fake > real)
            delta = (fake - real) / 2;
        else
            delta = (real - fake) / 2;
        
        if (UI.IsHotkeyActive( "Anti-Aim", "Fake angles", "Inverter" ))
            side = "<"
        else
            side = ">"
        
        if(UI.GetValue( "Anti-Aim", "Fake angles", "LBY mode") == 1){
            textd = "FAKE (" + delta.toFixed(0).toString() + ") | safety: " + (delta.toFixed(0).toString() / 60 * 100).toFixed(0).toString() + "% | LBY: Opposite" + " | side: " + side
            
            if (delta <= 29)
            {
                r = 255
                g = 0
                b = 0
            }
            else if (delta >= 45)
            {
                r = 132
                g = 195
                b = 16
            }
            else
            {
                r = 255 - (delta * 3)
                g = delta * 3
                b = 0
            }
        }
        
        if(UI.GetValue( "Anti-Aim", "Fake angles", "LBY mode") == 0){
            textd = "FAKE (" + delta.toFixed(0).toString() + ") | safety: " + (delta.toFixed(0).toString() / 30 * 100).toFixed(0).toString() + "% | LBY: Normal" + " | side: " + side
            if (delta <= 10)
            {
                r = 255
                g = 0
                b = 0
            }
            else if (delta >= 15)
            {
                r = 132
                g = 195
                b = 16
            }
            else
            {
                r = 255 - (delta * 3)
                g = delta * 3
                b = 0
            }
        }
        
        if(UI.GetValue( "Anti-Aim", "Fake angles", "Fake desync") == 1){
            textd = "FAKE (" + delta.toFixed(0).toString() + ") | safety: " + (delta.toFixed(0).toString() / 31 * 100).toFixed(0).toString() + "% | side: " + side
            
            if (delta <= 10)
            {
                r = 255
                g = 0
                b = 0
            }
            else if (delta >= 15)
            {
                r = 132
                g = 195
                b = 16
            }
            else
            {
                r = 255 - (delta * 3)
                g = delta * 3
                b = 0
            }
        }
            
        const textw = Render.TextSize(textd)[0];
        Render.FilledRect(x, y, textw, 20, [15, 15, 15, 255]);
        Render.FilledRect(x + textw, y, 3, 20, [r, g, b, 255]);
        if(UI.GetValue( "Anti-Aim", "Fake angles", "Fake desync") == 1){
            Render.StringCustom(x + 97, y + 3, 1, textd, [255, 255, 255, 255], fontpixel);
        }
        else {
            Render.StringCustom(x + 140, y + 3, 1, textd, [255, 255, 255, 255], fontpixel);
        }
    }
}
Cheat.RegisterCallback( "Draw", "fakeamount" )