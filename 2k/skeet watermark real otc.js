//Created by : s1linw#5674


UI.AddSliderInt("             Skeet watermark", 0, 0);

UI.AddColorPicker("Color 'sense'");
UI.SetColor("Script Items", "Color 'sense'", [255, 255, 255, 255])

UI.AddMultiDropdown("Watermark", [ "Custom Text", "Fps", "Ping", "Kdr", "Time","Map name", "Tickrate", "Velocity", "Duck amount", "Enemies", "Server ip", "Forum username", "Time + seconds" ] );

UI.AddTextbox("Custom Nick Name");

UI.AddCheckbox("Watermark rainbow header");
UI.AddSliderFloat("Watermark Rainbow Speed", 0.01, 1.0);

UI.SetValue("Script Items", "Watermark Rainbow Speed", 0.10)
UI.SetEnabled("Script Items", "Watermark Rainbow Speed", 0);

UI.AddSliderInt("", 0, 0);

var current_map;

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

var get = {
    state(state) {
        return UI.GetValue("Script Items", state);
    },
    string(string) {
        return UI.GetString("Script Items", string);
    }
}

function getVelocity(index)
{
    players = Entity.GetPlayers();
    for (i=0; i < players.length; i++);
    {
        var velocity = Entity.GetProp( index, "CBasePlayer", "m_vecVelocity[0]" );
        var speed = Math.sqrt( velocity[0] * velocity[0] + velocity[1] * velocity[1] );
    }
    
    return speed;
}

function watermark() {
    var settings = UI.GetValue("Script Items", "Watermark");

    const ping = Math.floor(Global.Latency() * 1000 / 1.5);
    var colors = HSVtoRGB(Global.Realtime() * UI.GetValue("Script Items",  "Watermark Rainbow Speed"), 1, 1);
    current_map = World.GetMapName();

    var watermark_font = Render.AddFont("Verdana", 7, 250);
    var screensize = Render.GetScreenSize();
    var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();
    var hours = hours1 <= 9 ? "0" + today.getHours() + ":" : today.getHours()+ ":";
    var minutes = minutes1 <= 9 ? "0" + today.getMinutes() + "" : today.getMinutes();
    var seconds = seconds1 <= 9 ? "0" + today.getSeconds() : today.getSeconds();

    var rate = 1 / Globals.Tickrate()
    var tickrate = Math.floor(rate)

    const server = World.GetServerString();
    const usernamea = Cheat.GetUsername();

    localEnt = Entity.GetLocalPlayer();

    const fps = Math.floor( 1 / Global.Frametime() );

    var tickrate = Global.Tickrate()
    var ip = World.GetServerString();

    var velocity = Math.round(getVelocity(localEnt));
    var velstr = velocity.toString();

    color4 = UI.GetColor("Script Items", "Color tap")

    var get_kills = Entity.GetProp(localEnt, "CPlayerResource", "m_iKills");
    var get_deaths = Entity.GetProp(localEnt, "CPlayerResource", "m_iDeaths");
    var get_kd = get_kills/get_deaths
    if (Entity.GetProp(localEnt, "CPlayerResource", "m_iDeaths") != 0) {
        var unfixed = Entity.GetProp(localEnt, "CPlayerResource", "m_iKills") / Entity.GetProp(localEnt, "CPlayerResource", "m_iDeaths");
        var get_kd = unfixed.toFixed(2)
    }
    else {
        get_kd = get_kills
    }  

    duckAmount = Entity.GetProp(localEnt, "CBasePlayer", "m_flDuckAmount");
    duckAmountStr =Math.abs(duckAmount.toString()).toFixed(1);
    if (Math.abs(duckAmount.toString()).length > 4) duckAmountStr = Math.abs(duckAmount.toString()).toFixed(1);

    enemies = Entity.GetEnemies();
    enemyCount = enemies.length;
    enemyCountStr = enemyCount.toString();

    var game = "game"
    var sense = "sense"

    var text = (game+"     ");
    var text1 = ("      "+sense);

    if (settings & (1 << 0)) 
    {
         text  += ("      | " +get.string("Custom Nick Name"));
    }

    if (settings & (1 << 11)) 
    {
         text  += ("      | " +usernamea);
    }

    if (settings & (1 << 1))
    {
         text  += ( " | "+fps+ " fps");
    }

    if (settings & (1 << 2))
    {
         text  += (" | " +ping+"ms");
    }

    if (settings & (1 << 5))
    {
         text  += (" | " +current_map+"");
    }

    if (settings & (1 << 6))
    {
         text  += (" | delay: " +tickrate+" ");
    }

    if (settings & (1 << 7))
    {
         text  += (" | speed: " +velstr+"");
    }

    if (settings & (1 << 10))
    {
         text  += (" | server ip: " +server+"");
    }

    if (settings & (1 << 8))
    {
         text  += (" | duck amount: " +duckAmountStr+"");
    }

    if (settings & (1 << 9))
    {
         text  += (" | enemies: " +enemyCountStr+"");
    }

    if (settings & (1 << 3))
    {
         text  += (" | "+get_kd+ " kdr ");
    }

    if (settings & (1 << 4)) 
    {
         text  += ( "| "+hours + minutes);
    }

    if (settings & (1 << 12)) 
    {
         text  += ( "| "+ hours + minutes + ":" + seconds);
    }

    var font = Render.AddFont( "Verdana", 7, 100);

    var h = 18;
    var w = Render.TextSizeCustom(text, font)[0] + 8;
    var w1 = Render.TextSizeCustom(text1, font)[0] + 8;
    var x = Global.GetScreenSize()[0] - 2;
    var y = 12;
    x = x - w - 10;


    Render.FilledRect(x - 6, y - 6, w + 13, h + 14, [0, 0, 0, 255]);
    Render.FilledRect(x - 5, y - 5, w + 11, h + 12, [34, 34, 34, 255]);
    Render.FilledRect(x + 1, y, w, h + 1, [0, 0, 0, 255]);
    Render.Rect(x - 1, y - 1, w + 3, h + 3, [56, 56, 56, 255]);
    Render.Rect(x - 5, y - 5, w + 11, h + 12, [56, 56, 56, 255]);

    Render.GradientRect(x + 2, y + 1, (w / 2)-1, 1, 1, [ 59, 175, 222, 255], [202, 70, 205, 255]);
    Render.GradientRect(x + 1 + (w / 2), y + 1, (w / 2)-1, 1, 1, [202, 70, 205, 255], [201, 227, 58, 255]);
    Render.GradientRect(x + 2, y + 2, (w / 2)-1, 1, 1, [ 59, 175, 222, 130], [202, 70, 205, 130]);
    Render.GradientRect(x + 1 + (w / 2), y + 2, (w / 2)-1, 1, 1, [202, 70, 205, 130], [201, 227, 58, 130]);

    Render.StringCustom( x + 4, y + 5, 0, text, [0,0,0,180], font);
    Render.StringCustom( x + 4, y + 4, 0, text, [255,255,255,255], font);

    Render.StringCustom( x + 13, y + 5, 0, text1, [0,0,0,180], font);

    if (UI.GetValue("Script Items", "Rainbow 'tap'") == 1) 
    {
        Render.StringCustom( x + 13, y + 4, 0, text1, [colors.r, colors.g, colors.b, 255], font);
    } else  {
        Render.StringCustom( x + 13, y + 4, 0, text1, [color4[0], color4[1], color4[2], 255], font);
    }

    if (UI.GetValue("Script Items", "Watermark rainbow header") == 1) 
    {
        Render.GradientRect(x + 2, y + 1, (w / 2)-1, 1, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
        Render.GradientRect(x + 1 + (w / 2), y + 1, (w / 2)-1, 1, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.r, colors.g, 255]);
        Render.GradientRect(x + 2, y + 2, (w / 2)-1, 1, 1, [colors.g, colors.b, colors.r, 130], [colors.r, colors.g, colors.b, 130]);
        Render.GradientRect(x + 1 + (w / 2), y + 2, (w / 2)-1, 1, 1, [colors.r, colors.g, colors.b, 130], [colors.b, colors.r, colors.g, 130]);
    }


}
//watermark\\


Cheat.RegisterCallback( "Draw", "watermark")
