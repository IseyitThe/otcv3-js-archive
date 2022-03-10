//Modified by Reptar
//Originals made by :
//Signal for the idea
//Ultranite for help
//AA Indicators by 57777
//Fake Indicator by dummy (Decommissioned)
//Base by Snipi https://onetap.su/threads/release-manual-aa-indicators.13542/#post-110857
//shoutout to edeen and ntrzr

//If I forgot you, Please let me know



//indicator vars
var screen_size = Global.GetScreenSize();
var isLeftActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Left Hotkey" );
var isRightActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Right Hotkey" );
var isBackActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Back Hotkey" );
var isInverted;
var drawLeft = 1;
var drawRight = 0;
var drawBack = 0;
//ui
UI.AddColorPicker("Selected arrow color");
UI.AddHotkey( "Left Hotkey" );
UI.AddHotkey( "Back Hotkey" );
UI.AddHotkey( "Right Hotkey" );

const draw_triangle = function(x, y, size, col, narrowness, dir)
{
    for (var i = 0; i < size; i++)
    {
        // Left
        if (dir === 1)
        {
            Render.Line(x + i + 1 - size / 2, y - i / narrowness + 1, x + i + 1 - size / 2, y + i / narrowness + 1, col);
	
        }

        // Right
        if (dir === 2)
        {
            Render.Line(x - i - 1 + size / 2, y - i / narrowness + 1, x - i - 1 + size / 2, y + i / narrowness + 1, col);
        }

        // Down
        if (dir === 3)
        {
            Render.Line(x + i / narrowness + 1, y - i - 1, x - i / narrowness + 1, y - i - 1, col);
        }

    }

};

Cheat.PrintColor([255, 75, 100, 25], "\n------------------------\Indicators\n------------------------\n");

       
function drawString()
{
    //selectedcp = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Selected arrow color");
	//selected_red = selectedcp[0];
    //selected_green = selectedcp[1];
    //selected_blue = selectedcp[2];
    //selected_alpha = selectedcp[3];
    const alpha = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / .75)) % (Math.PI * 2))) * 255;
    const alphaa = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / 2)) % (Math.PI * 2))) * 255;
    isHideshots = UI.IsHotkeyActive("Rage", "Exploits", "Hide shots");
    isFakeduck = UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck");
    isDoubletap = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
    isInverted = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter" );
    isDmgActive = UI.IsHotkeyActive("Rage", "GENERAL", "Accuracy", "Minimum damage (on key)");
    isLbyMode = UI.GetValue("Anti-Aim", "Fake angles", "LBY mode");
    isDesyncMode = UI.GetValue("Anti-Aim", "Fake angles", "Fake desync");
    localplayer_index = Entity.GetLocalPlayer( );
    localplayer_alive = Entity.IsAlive( localplayer_index );
	var colors = UI.GetColor("MISC", "JAVASCRIPT", "Script items", "Selected arrow color")
	const x = Render.GetScreenSize()[0], y = Render.GetScreenSize()[1];
	
    draw_triangle(x / 2 - 50, y / 2, 20, [211, 211, 211, 125], 2, 1)
    draw_triangle(x / 2 + 50, y / 2, 20, [211, 211, 211, 125], 2, 2)
    draw_triangle(x / 2 - 1, y / 2 + 60, 20, [211, 211, 211, 125], 2, 3)
    
    //Fake Indicator Plus
    //var difference = Math.abs( Local.GetRealYaw( ) - Local.GetFakeYaw( ) );
    //Render.String(screen_size[0] /2 + 1, screen_size[1] /2 +101, 1, "FAKE", [ 0, 0, 0, 255 ], 3 );
    //Render.String(screen_size[0] /2, screen_size[1] /2 +100, 1, "FAKE", [ difference * 255 / 58, 255 - ( difference * 255 / 58 ), 0 , 255], 3 );
    
    if (localplayer_alive == true){
    
    if(drawLeft)
    {
        draw_triangle(x / 2 - 50, y / 2, 20, colors, 2, 1)
    }
    else if(drawRight)
    {      
        draw_triangle(x / 2 + 50, y / 2, 20, colors, 2, 2)
    }
    else if(drawBack)
    {
        draw_triangle(x / 2 - 1, y / 2 + 60, 20, colors, 2, 3)
    }
}}

function onCreateMove()
{
    isLeftActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Left Hotkey" );
    isRightActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Right Hotkey" );
    isBackActive = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Back Hotkey" );
   
    if(isLeftActive)
    {  
        drawLeft = 1;
        drawBack = 0;
        drawRight = 0;
        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -90 );
        UI.SetValue( "Anti-Aim", "Fake Angles", "Hide real angle", false);
    }
    else if(isRightActive)
    {  
        drawLeft = 0;
        drawBack = 0;
        drawRight = 1;
        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 90 );
        UI.SetValue( "Anti-Aim", "Fake Angles", "Hide real angle", false);
       
    }
        else if(isBackActive)
    {  
        drawLeft = 0;
        drawBack = 1;
        drawRight = 0;
        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -1 );
        UI.SetValue( "Anti-Aim", "Fake Angles", "Hide real angle", false);
       
    }
}


function Main()
{
    Global.RegisterCallback("Draw", "drawString")
    Global.RegisterCallback("CreateMove", "onCreateMove")
}

Main();