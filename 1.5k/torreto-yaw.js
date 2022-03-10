const x = Global.GetScreenSize()[0];
const y =  Global.GetScreenSize()[1];

function toretto()
{
    font = Render.AddFont("Verdana", 7, 300);
    Render.StringCustom( x / 2, y / 2 + 35, 0, "TORETTO YAW", [ 249, 144, 59, 255 ], font );
    Render.StringCustom( x / 2, y / 2 + 45, 0, "DYNAMIC", [ 205, 124, 214, 255 ], font );
}

function dtinds()
{
    add_yx = 0;
    font = Render.AddFont("Verdana", 7, 600);
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap"))
    {
        add_yx = add_yx + 10;
        if(Exploit.GetCharge() == 1)
        {
            Render.StringCustom( x / 2, y / 2 + 46 + add_yx, 0, "DT", [ 0, 0, 0, 255 ], font );
            Render.StringCustom( x / 2, y / 2 + 45 + add_yx, 0, "DT", [ 72, 237, 128, 255 ], font );
        }
        else
        {
            Render.StringCustom( x / 2, y / 2 + 46 + add_yx, 0, "DT", [ 0, 0, 0, 255 ], font );
            Render.StringCustom( x / 2, y / 2 + 45 + add_yx, 0, "DT", [ 200, 0, 0, 255 ], font );
        }
    }
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots"))
    {        
        add_yx = add_yx + 10;
        Render.StringCustom( x / 2, y / 2 + 46 + add_yx, 0, "HIDE SHOTS", [ 0, 0, 0, 255 ], font );
        Render.StringCustom( x / 2, y / 2 + 45 + add_yx, 0, "HIDE SHOTS", [ 72, 237, 128, 255 ], font );
    }
    if(UI.IsHotkeyActive("Script items", "Scout Override"))
    {        
        add_yx = add_yx + 10;
        Render.StringCustom( x / 2, y / 2 + 46 + add_yx, 0, "DMG", [ 0, 0, 0, 255 ], font );
        Render.StringCustom( x / 2, y / 2 + 45 + add_yx, 0, "DMG", [ 214, 214, 255, 255 ], font );
    }
    if(UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim"))
    {
        add_yx = add_yx + 10;
        Render.StringCustom( x / 2, y / 2 + 46 + add_yx, 0, "BAIM", [ 0, 0, 0, 255 ], font );
        Render.StringCustom( x / 2, y / 2 + 45 + add_yx, 0, "BAIM", [ 214, 214, 255, 255 ], font );
    }
    if(UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point"))
    {
        add_yx = add_yx + 10;
        Render.StringCustom( x / 2, y / 2 + 46 + add_yx, 0, "SAFE", [ 0, 0, 0, 255 ], font );
        Render.StringCustom( x / 2, y / 2 + 45 + add_yx, 0, "SAFE", [ 214, 214, 255, 255 ], font );
    }
}

Cheat.RegisterCallback("Draw", "toretto");
Cheat.RegisterCallback("Draw", "dtinds");