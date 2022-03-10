/*ONETAP.SU Advanced bar indicators
AUTHOR https://onetap.su/members/tilestra.54952/
*/

//123




var loadFont = 0, fakelag, colors, lag_value = 0, switch_value = 0;

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

function getCustomValue(name)
{
    var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", name);
    return value;
}

function HUD_REDRAW()
{
    //Good for peeking, optional
    if(getCustomValue('Randomize Fakelag'))
    {  
        if(switch_value == 0)
        {
            if(lag_value >= 0)    lag_value+=1*0.25;
            if(lag_value == 16)    switch_value = 1;
        }
        if(switch_value == 1)
        {  
            lag_value--;
            if(lag_value == 0)    switch_value = 0;      
        }
   
        UI.SetValue( "Anti-Aim", "Fake-Lag", "Limit", lag_value);
    }      
   
    if(loadFont == 0)
    {
        font = Render.AddFont("Verdana", 8, 100)
        fontSmall = Render.AddFont("Verdana", 6, 100)
        loadFont = 1;
    }      
       
    colors = HSVtoRGB(Global.Realtime() * UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Bar color speed"), 1, 1);
   
    x = getCustomValue("X bar");
    y = getCustomValue("Y bar");  
   
    //grey all
    Render.FilledRect( x + 48, y , 192, 103, [ 44, 44, 44, 255 ] );
   
   
    //main
    //Render.FilledRect( x + 50, y + 7, 190, 80 , [ 11, 11, 11, 255 ] ); // black
	
    Render.GradientRect( x + 50, y + 5, 187, 95, 0, [71, 140, 169, 255 ], [ 43, 43, 43, 255 ]);

   
    //white
    Render.Rect( x + 50, y + 4, 188, 97, [ 217, 217, 217, 255 ] ); // white
   
	
	 Render.StringCustom(x + 119, y + -15, 0, "[1312.js]", [ 255, 255, 255, 255 ], font ); //name
	 Render.StringCustom(x + 111, y + 85, 0, "shoppy.gg/@suppliant", [ 255, 255, 255, 255 ], font ); //shoppy

    //Everything above is just bar related
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////  

    fakelag = UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");
   
    //Fakelag
    Render.StringCustom(x + 82, y + 13, 1, "Fake lag", [ 255, 255, 255,255 ], font);
   
    //grey inactive
    Render.FilledRect(x + 130, y + 19, 100, 5, [ 50, 50, 50, 255 ]);
   
    //CALCULATOR: 100/16
    Render.GradientRect( x + 130, y + 19, fakelag*6.25, 5, 0, [ 255, 255, 255, 255 ], [ 0, 0, 0, 50 ]);
   
   
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Yaw
    Render.StringCustom(x + 88, y + 30, 1, "Yaw offset", [ 255, 255, 255,255 ], font);

    //grey inactive
    Render.FilledRect(x + 130, y + 37, 100, 5, [ 50, 50, 50, 255 ]);

    yawOffset = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset");  

    /*CALCULATOR: 100/180, so the -value should become + hehe
    if you want to numbers indicator just uncomment them*/
    if(yawOffset > 0) //255, 255, 255
    {  
        Render.GradientRect( x + 130, y + 37, yawOffset*0.55, 5, 0, [ 255, 255, 255, 255 ], [ 0, 0, 0, 50 ]);
       
        //Little font
        //Render.StringCustom(x + 130 + yawOffset*0.55, y + 28, 1, "" + yawOffset, [ 255, 255, 255,255 ], fontSmall);      
    }  
    else if(yawOffset < 1)
    {  
        Render.GradientRect( x + 130, y + 37, -yawOffset*0.55, 5, 0, [ 255, 255, 255, 255 ], [ 0, 0, 0, 50 ]);
       
        //Little font
        //Render.StringCustom(x + 130 + -yawOffset*0.55, y + 28, 1, "" + yawOffset, [ 255, 255, 255,255 ], fontSmall);          
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////  
   
    //DT
    Render.StringCustom(x + 88, y + 50, 1, "Double tap", [ 255, 255, 255,255 ], font);

    //ON/OFF
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap", "Enabled"))
        Render.StringCustom(x + 218, y + 50, 1, "[On]", [ 255, 255, 255,255 ], font);  
    else
        Render.StringCustom(x + 218, y + 50, 1, "[Off]", [ 255, 255, 255,255 ], font);
   
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
    //Inverter
    Render.StringCustom(x + 89, y + 68, 1, "Force Baim", [ 255, 255, 255,255 ], font);  
   
    //FAKE ON/OFF
    if(UI.IsHotkeyActive("Rage", "General", "Force body aim", "Enabled"))
        Render.StringCustom(x + 204, y + 68, 1, "       [On]", [ 255, 255, 255,255 ], font);  
    else
        Render.StringCustom(x + 202, y + 68, 1, "        [Off]", [ 255, 255, 255,255 ], font);  
   
}

function Main()
{
    //Full HD >_<
    var screensize = Global.GetScreenSize();
    UI.AddSliderInt("X bar", -45, screensize[0]);
    UI.AddSliderInt("Y bar", 0, screensize[1]);
    //123
    UI.AddCheckbox('Randomize Fakelag');
	UI.AddCheckbox('Doubletap 1.0');
}




Main()

Global.RegisterCallback("Draw", "HUD_REDRAW")