var iLocalPlayer, iWeapon, iWeapon_name, loadFont = 0, fakelag, hitchance, mindamage, colors, lag_value = 0, switch_value = 0, framerate, fps, current_map, text_width;

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
    var value = UI.GetValue("Misc", "JAVASCRIPT", "Script items", name);
    return value;
}

function HUD_REDRAW()
{
    iLocalPlayer = Entity.GetLocalPlayer();
 
    if(!Entity.IsValid(iLocalPlayer))    return;

    //Weapons
    iWeapon = Entity.GetWeapon(iLocalPlayer);
    iWeapon_name = Entity.GetName(iWeapon);
 
    framerate = 1 / Global.Frametime();
    fps = Math.floor(framerate);
 
    current_map = World.GetMapName();
 
    //sucks
    if(fps > 300)    fps = 300;
 
    //Good for peeking, optional
    if(getCustomValue('Randomize Fakelag'))
    {
        if(switch_value == 0)
        {
            if(lag_value >= 0)    lag_value+=0.25;
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
        font = Render.AddFont("Tahoma", 8, 100)
        fontSmall = Render.AddFont("Tahoma", 6, 100)
        fontNormal = Render.AddFont("Verdana", 7, 100)
        loadFont = 1;
    }
     
    var watermark_font = Render.AddFont("Tahoma", 8, 1600)



 
    x = getCustomValue("X bar");
    y = getCustomValue("Y bar");
    var height = 47
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap"))
        height += 14
    if(UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck"))
        height += 14
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots"))
        height += 14
    if(UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point"))
        height += 14
    var width = 50
    //grey all
    Render.FilledRect( 1214, 8, 217, 32, [ 40, 40, 40, 255 ] );
   
    //main
    Render.FilledRect(1220, 15, 205, 19, [ 19, 19, 19, 255 ] ); // black
 
    //white
    Render.Rect(1220, 13, 206, 21, [ 50, 50, 50, 255 ] ); // white
    width = 93
    Render.GradientRect(1221, 15, 102, 1, 1, [ 59, 175, 222, 255], [202, 70, 205, 255]);
    Render.GradientRect(1323, 15, 102, 1, 1,[202, 70, 205, 255], [201, 227, 58, 255]);
    
    const ping = Math.floor(Global.Latency() * 1000 / 7.84);
    const fps = Math.floor( 1 / Global.Frametime() );
    var today = new Date();
    var datetime = today.getHours() + ":" + today.getMinutes() + ":" + (today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds());
    var tickrate = Global.Tickrate()
    var username = Cheat.GetUsername();
    var ip = World.GetServerString();

    Render.StringCustom(1234, 17, 1, "one", [ 255, 255, 255,255 ], watermark_font);
    Render.StringCustom(1254, 17, 1, "tap", [ 140, 255, 0,255 ], watermark_font);
    Render.StringCustom(1267, 17, 1, "|", [ 255, 255, 255 ,255 ], watermark_font);
    Render.StringCustom(1294, 17, 1, "MaeHvH", [ 255, 255, 255 ,255 ], watermark_font);
    Render.StringCustom(1323, 17, 1, "|", [ 255, 255, 255 ,255 ], watermark_font);
    Render.StringCustom(1337, 17, 1, fps +"", [ 255, 255, 255, 255 ], watermark_font);
    Render.StringCustom(1357, 17, 1, "fps", [ 140, 255, 0,255 ], watermark_font);
    Render.StringCustom(1369, 17, 1, "|", [ 255, 255, 255 ,255 ], watermark_font);
    Render.StringCustom(1398, 17, 1, "" + datetime, [ 255, 255, 255,255 ], watermark_font);

    
    var width = 197
    //grey all
    Render.FilledRect( x + 45, y , width, height+11, [ 40, 40, 40, 255 ] );
   
    //main
    Render.FilledRect( x + 50, y + 7, width-11, height-1 , [ 19, 19, 19, 255 ] ); // black
 
    //white
    Render.Rect( x + 50, y + 5, width-10, height+2, [ 50, 50, 50, 255 ] ); // white
    width = 93
    Render.GradientRect(x + 50, y + 5, width, 1, 1, [ 59, 175, 222, 255], [202, 70, 205, 255]);
    Render.GradientRect(x + 50 + width, y + 5, width, 1, 1, [202, 70, 205, 255], [201, 227, 58, 255]);
 
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var time_to_ticks = function(a)
    {
        return Math.floor(0.5 + a / Globals.TickInterval())
    }

    fakelag = time_to_ticks(Globals.Curtime() - Entity.GetProp(Entity.GetLocalPlayer(), "DT_CSPlayer", "m_flSimulationTime")) + 1
    if(fakelag < 0)
        fakelag = 0
    if(fakelag > 16)
        fakelag = 16
    //Fakelag
    Render.StringCustom(x + 91, y + 10, 1, "Fakelag choke", [ 255, 255, 255,255 ], font);
 
    //grey inactive
    Render.FilledRect(x + 130, y + 16, 100, 5, [ 50, 50, 50, 255 ]);
 
    //CALCULATOR: 100/16
    Render.GradientRect( x + 130, y + 16, fakelag*6.25, 5, 0, [ 125, 255, 0, 255 ], [ 0, 0, 0, 50 ]);
 
    //Little font
    Render.StringCustom(x + 130 + fakelag*6.25, y + 16, 1, "" + fakelag, [ 255, 255, 255,255 ], fontSmall);
 
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Yaw
    Render.StringCustom(x + 80, y + 24, 1, "Jitter Yaw", [ 255, 255, 255,255 ], font);

    //grey inactive
    Render.FilledRect(x + 130, y + 30, 100, 5, [ 50, 50, 50, 255 ]);

    yawOffset = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset");

    /*CALCULATOR: 100/180, so the -value should become + hehe
    if you want to numbers indicator just uncomment them*/
    if(yawOffset > 0)
    {
        Render.GradientRect( x + 130, y + 30, yawOffset*0.55, 5, 0, [ 125, 255, 0, 255 ], [ 0, 0, 0, 50 ]);
     
        //Little font
        Render.StringCustom(x + 130 + yawOffset*0.55, y + 30, 1, "" + yawOffset, [ 255, 255, 255,255 ], fontSmall);    
    }
    else if(yawOffset < 1)
    {
        Render.GradientRect( x + 130, y + 30, -yawOffset*0.55, 5, 0, [ 125, 255, 0, 255 ], [ 0, 0, 0, 50 ]);
     
        //Little font
        Render.StringCustom(x + 130 + -yawOffset*0.55, y + 30, 1, "" + yawOffset, [ 255, 255, 255, 255 ], fontSmall);        
    }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Yaw
    Render.StringCustom(x + 80, y + 37, 1, "Base Yaw", [ 255, 255, 255,255 ], font);

    //grey inactive
    Render.FilledRect(x + 130, y + 45, 100, 5, [ 50, 50, 50, 255 ]);

    yawOffset = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset");

    /*CALCULATOR: 100/180, so the -value should become + hehe
    if you want to numbers indicator just uncomment them*/
    if(yawOffset > 0)
    {
        Render.GradientRect( x + 130, y + 45, yawOffset*0.55, 5, 0, [ 125, 255, 0, 255 ], [ 0, 0, 0, 50 ]);
     
        //Little font
        Render.StringCustom(x + 130 + yawOffset*0.55, y + 45, 1, "" + yawOffset, [ 255, 255, 255,255 ], fontSmall);    
    }
    else if(yawOffset < 1)
    {
        Render.GradientRect( x + 130, y + 45, -yawOffset*0.55, 5, 0, [ 125, 255, 0, 255 ], [ 0, 0, 0, 50 ]);
     
        //Little font
        Render.StringCustom(x + 130 + -yawOffset*0.55, y + 45, 1, "" + yawOffset, [ 255, 255, 255, 255 ], fontSmall);        
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(iWeapon_name == "ssg 08")    //scount
    {

        hitchance = UI.GetValue("Rage", "SCOUT", "Accuracy", "Hitchance");
    }
    else if(iWeapon_name == "awp")    //awp
    {

        hitchance = UI.GetValue("Rage", "AWP", "Accuracy", "Hitchance");
    }
    else if(iWeapon_name == "g3sg1" || iWeapon_name == "scar 20")    //scars
    {
     
        hitchance = UI.GetValue("Rage", "AUTOSNIPER", "Accuracy", "Hitchance");
    }
    else if(iWeapon_name == "r8 revolver" || iWeapon_name == "desert eagle")    //heavy pist
    {
      
        hitchance = UI.GetValue("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance");
    }
    else if(iWeapon_name == "dual berettas" || iWeapon_name == "usp s" || iWeapon_name == "glock 18" || iWeapon_name == "p2000" || iWeapon_name == "p250" || iWeapon_name == "tec9")    //elites
    {
      
        hitchance = UI.GetValue("Rage", "PISTOL", "Accuracy", "Hitchance");
    }
    else
    {
       
        hitchance = UI.GetValue("Rage", "GENERAL", "Accuracy", "Hitchance");    
    }
 
 
    y -= 27
 
    //DT
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap"))
        Render.StringCustom(x + 83, y + 77, 1, "Double tap", [ 255, 255, 255,255 ], font);

    //ON/OFF
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap"))
        Render.StringCustom(x + 205, y + 77, 1, "[Offensive]", [ 199, 234, 70,255 ], font);
 
    if(!UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap"))
        y -= 14

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    y -= 14
    //Fakeduck
    if(UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck"))
    Render.StringCustom(x + 82, y + 105, 1, "Fake duck", [ 255, 255, 255,255 ], font);
 
    //Fakeducking state
    if(UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck"))
        Render.StringCustom(x + 221, y + 105, 1, "[On]", [ 199, 234, 70,255 ], font);
    if(!UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck"))
        y -= 14
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Hideshots
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots"))
        Render.StringCustom(x + 83, y + 118, 1, "Hide shots", [ 255, 255, 255,255 ], font);
 
    //Hideshots state
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots"))
        Render.StringCustom(x + 221, y + 118, 1, "[On]", [ 199, 234, 70,255 ], font);
    if(!UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots"))
        y -= 14
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Safe point
    if(UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point"))
        Render.StringCustom(x + 82, y + 130, 1, "Safe point", [ 255, 255, 255,255 ], font);
 
    //Safepoint state
    if(UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point"))
        Render.StringCustom(x + 221, y + 130, 1, "[On]", [ 199, 234, 70,255 ], font);
    if(!UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point"))
        y -= 14
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

function Main()
{
    //Full HD >_<
    var screensize = Global.GetScreenSize();
    UI.AddSliderInt("X bar", -45, screensize[0]);
    UI.AddSliderInt("Y bar", 0, screensize[1]);
    //123
    UI.AddCheckbox('Randomize Fakelag');
    UI.AddSliderFloat('Bar color speed', 0.0, 5.0);
}

Main()

Global.RegisterCallback("Draw", "HUD_REDRAW")

hitboxes = [
  'generic',
  'head',
  'chest',
  'stomach',
  'left arm',
  'right arm',
  'left leg',
  'right leg',
  'body'
];
function getHitboxName(index) {
  return hitboxes[index] || 'Generic';
}
function hitlog()
{
    me = Entity.GetLocalPlayer();
    hitbox = Event.GetInt('hitgroup');
    target_damage = Event.GetInt("dmg_health");
    victim = Event.GetInt('userid');
    attacker = Event.GetInt('attacker');
    victimIndex = Entity.GetEntityFromUserID(victim);
    attackerIndex = Entity.GetEntityFromUserID(attacker);
    name = Entity.GetName(victimIndex);
    var namee = "onetap"
 
if( UI.GetValue ( "Misc", "JAVASCRIPT", "Script Items", "Hit logs in chat" ) ){
if (me == attackerIndex && me != victimIndex) {
if( UI.GetValue ( "Misc", "JAVASCRIPT", "Script Items", "Say to all" ) ) {
Global.ExecuteCommand("say \x01[\x06" + namee + "\x01] \x04" + "\x01hurt \x04" + name + " \x01for \x04" + target_damage + " \x01in \x04" + getHitboxName(hitbox))
Global.PrintChat("\x01[\x06" + namee + "\x01] \x04" + "\x01hurt \x04" + name + " \x01for \x04" + target_damage + " \x01in \x04" + getHitboxName(hitbox))
}else{
    Global.PrintChat("\x01[\x06" + namee + "\x01] \x04" + "\x01hurt \x04" + name + " \x01for \x04" + target_damage + " \x01in \x04" + getHitboxName(hitbox))
}
}
}
}
function main()
{
UI.AddCheckbox("Hit logs in chat");
UI.AddCheckbox("Say to all");
Global.RegisterCallback("player_hurt", "hitlog");
}
main();