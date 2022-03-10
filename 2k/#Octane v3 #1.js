// Made by
// __            __                                                         
//|  \          |  \                                                        
//| $$ __    __ | $$   __   ______   __    __   ______   __    __   ______  
//| $$|  \  |  \| $$  /  \ /      \ |  \  |  \ /      \ |  \  |  \ /      \ 
//| $$| $$  | $$| $$_/  $$|  $$$$$$\| $$  | $$|  $$$$$$\| $$  | $$|  $$$$$$\
//| $$| $$  | $$| $$   $$ | $$    $$| $$  | $$| $$  | $$| $$  | $$| $$   \$$
//| $$| $$__/ $$| $$$$$$\ | $$$$$$$$| $$__/ $$| $$__/ $$| $$__/ $$| $$      
//| $$ \$$    $$| $$  \$$\ \$$     \ \$$    $$ \$$    $$ \$$    $$| $$      
// \$$  \$$$$$$  \$$   \$$  \$$$$$$$ _\$$$$$$$  \$$$$$$   \$$$$$$  \$$      
//                                 |  \__| $$                              
//                                   \$$    $$                           
//

function rotate_left(string,amount)
{
    for(i = 0; i < amount; i++)
    {
        var a = string.substring(0,1)
        string = string.substring(1)
        string += a
    }
    return string
}
var old = ""
function onCM()
{
    if(!(Globals.Tickcount() % 16))
        return
    var newtag = "0CT4N3 v3              "
    newtag = rotate_left(newtag, Math.floor(Globals.Tickcount() / (32/2)) % newtag.length)
    if(newtag != old){
        Local.SetClanTag(newtag)
        old = newtag
    }
    
}
function unload()
{
    Local.SetClanTag("")
}
Cheat.RegisterCallback("Unload", "unload")
Cheat.RegisterCallback("Draw", "onCM")


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
    var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", name);
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
        fontNormal = Render.AddFont("Verdana", 7, 100)
        loadFont = 1;
    }
     
 
 
    x = getCustomValue("X bar");
    y = getCustomValue("Y bar");
    var height = 47
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap", "Enabled"))
        height += 14
    if(UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck", "Enabled"))
        height += 14
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots", "Enabled"))
        height += 14
    if(UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point", "Enabled"))
        height += 14
    var width = 197
    //grey all
    Render.FilledRect( x + 45, y , width, height, [ 40, 40, 40, 255 ] );
   
    //main
    Render.FilledRect( x + 50, y + 7, width-11, height-12 , [ 19, 19, 19, 255 ] ); // black
 
    //white
    Render.Rect( x + 50, y + 5, width-10, height-9, [ 50, 50, 50, 255 ] ); // white
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
    Render.StringCustom(x + 81, y + 10, 1, "Fake lag", [ 255, 255, 255,255 ], font);
 
    //grey inactive
    Render.FilledRect(x + 130, y + 16, 100, 5, [ 50, 50, 50, 255 ]);
 
    //CALCULATOR: 100/16
    Render.GradientRect( x + 130, y + 16, fakelag*6.25, 5, 0, [ 255, 255, 255, 255 ], [ 255, 255, 255, 255 ]);
 
    //Little font
    Render.StringCustom(x + 130 + fakelag*6.25, y + 16, 1, "" + fakelag, [ 255, 255, 255,255 ], fontSmall);
 
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Yaw
    Render.StringCustom(x + 85, y + 24, 1, "Body yaw", [ 255, 255, 255,255 ], font);

    //grey inactive
    Render.FilledRect(x + 130, y + 30, 100, 5, [ 50, 50, 50, 255 ]);

    yawOffset = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset");

    /*CALCULATOR: 100/180, so the -value should become + hehe
    if you want to numbers indicator just uncomment them*/
    if(yawOffset > 0)
    {
        Render.GradientRect( x + 130, y + 30, yawOffset*0.55, 5, 0, [ 255, 255, 255, 255 ], [ 255, 255, 255, 255 ]);
     
        //Little font
        Render.StringCustom(x + 130 + yawOffset*0.55, y + 30, 1, "" + yawOffset, [ 255, 255, 255,255 ], fontSmall);    
    }
    else if(yawOffset < 1)
    {
        Render.GradientRect( x + 130, y + 30, -yawOffset*0.55, 5, 0, [ 255, 255, 255, 255 ], [ 0, 0, 0, 50 ]);
     
        //Little font
        Render.StringCustom(x + 130 + -yawOffset*0.55, y + 30, 1, "" + yawOffset, [ 255, 255, 255,255 ], fontSmall);        
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(iWeapon_name == "ssg 08")    //scount
    {
        mindamage = UI.GetValue("Rage", "SCOUT", "Damage", "Minimum damage (on key)");
        hitchance = UI.GetValue("Rage", "SCOUT", "Accuracy", "Hitchance");
    }
    else if(iWeapon_name == "awp")    //awp
    {
        mindamage = UI.GetValue("Rage", "AWP", "Damage", "Minimum damage (on key)");
        hitchance = UI.GetValue("Rage", "AWP", "Accuracy", "Hitchance");
    }
    else if(iWeapon_name == "g3sg1" || iWeapon_name == "scar 20")    //scars
    {
        mindamage = UI.GetValue("Rage", "AUTOSNIPER", "Damage", "Minimum damage (on key)");
        hitchance = UI.GetValue("Rage", "AUTOSNIPER", "Accuracy", "Hitchance");
    }
    else if(iWeapon_name == "r8 revolver" || iWeapon_name == "desert eagle")    //heavy pist
    {
        mindamage = UI.GetValue("Rage", "HEAVY PISTOL", "Damage", "Minimum damage (on key)");
        hitchance = UI.GetValue("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance");
    }
    else if(iWeapon_name == "dual berettas" || iWeapon_name == "usp s" || iWeapon_name == "glock 18" || iWeapon_name == "p2000" || iWeapon_name == "p250" || iWeapon_name == "tec9")    //elites
    {
        mindamage = UI.GetValue("Rage", "PISTOL", "Damage", "Minimum damage (on key)");
        hitchance = UI.GetValue("Rage", "PISTOL", "Accuracy", "Hitchance");
    }
    else
    {
        mindamage = UI.GetValue("Rage", "GENERAL", "Damage", "Minimum damage (on key)");
        hitchance = UI.GetValue("Rage", "GENERAL", "Accuracy", "Hitchance");    
    }
 
 
    y -= 27
 
    //DT
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap", "Enabled"))
        Render.StringCustom(x + 87, y + 66, 1, "Double tap", [ 255, 255, 255,255 ], font);

    //ON/OFF
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap", "Enabled"))
        Render.StringCustom(x + 198, y + 66, 1, "[Offensive]", [ 199, 234, 70,255 ], font);
 
    if(!UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap", "Enabled"))
        y -= 14

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    y -= 14
    //Fakeduck
    if(UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck", "Enabled"))
    Render.StringCustom(x + 86, y + 94, 1, "Fake duck", [ 255, 255, 255,255 ], font);
 
    //Fakeducking state
    if(UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck", "Enabled"))
        Render.StringCustom(x + 218, y + 94, 1, "[On]", [ 199, 234, 70,255 ], font);
    if(!UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck", "Enabled"))
        y -= 14
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Hideshots
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots", "Enabled"))
        Render.StringCustom(x + 87, y + 108, 1, "Hide shots", [ 255, 255, 255,255 ], font);
 
    //Hideshots state
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots", "Enabled"))
        Render.StringCustom(x + 218, y + 108, 1, "[On]", [ 199, 234, 70,255 ], font);
    if(!UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots", "Enabled"))
        y -= 14
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Safe point
    if(UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point", "Enabled"))
        Render.StringCustom(x + 86, y + 122, 1, "Safe point", [ 255, 255, 255,255 ], font);
 
    //Safepoint state
    if(UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point", "Enabled"))
        Render.StringCustom(x + 218, y + 122, 1, "[On]", [ 199, 234, 70,255 ], font);
    if(!UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point", "Enabled"))
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
    var namee = "Octane"
 
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


const username = Cheat.GetUsername();
UI.AddColorPicker("Watermark");
function draw() {
    if(!World.GetServerString()) return;
    var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();
    var hours = hours1 <= 9 ? "0" + today.getHours() + ":" : today.getHours() + ":";
    var minutes = minutes1 <= 9 ? "0" + today.getMinutes() + ":" : today.getMinutes() + ":";
    var seconds = seconds1 <= 9 ? "0" + today.getSeconds() : today.getSeconds()    ;
    color = UI.GetColor("Misc", "Javascript", "Script items", "Watermark");
    var font = Render.AddFont( "Verdana", 8, 100);
    var text = "octane [v3] | " +username+ " | delay: " +Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString()+ "ms | " +Globals.Tickrate().toString()+ "tick | " + hours + minutes + seconds;
    var h = 18;
    var w = Render.TextSizeCustom(text, font)[0] + 8;
    var x = Global.GetScreenSize()[0];
    var y = 10;
    x = x - w - 10;
    Render.FilledRect(x, y, w, 3, [color[0], color[1], color[2], 255]);
    Render.StringCustom(x+5, y + 5, 0, text, [0,0,0,180], font);
    Render.StringCustom(x+4, y + 4, 0, text, [255,255,255,255], font);

}
Cheat.RegisterCallback("Draw", "draw");
function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}
var oldTick = Global.Tickcount()
var ticksToDelay = 1 //1 second you can do the math from this point :D

UI.AddCheckbox("RGB line");


var alpha = 50
var up = true
function rainbowColors()
{
    var min_alpha = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Minimum alpha"); //Move this into rainbowColors if you end up adding a a slider

    var enabled = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "RGB line");
    var speed = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Speed");
    if (Entity.IsValid(Entity.GetLocalPlayer()) && enabled) {
        var curTick = Global.Tickcount()
        if (oldTick > curTick + ticksToDelay * speed) {
            oldTick = Global.Tickcount()
        }
        if (curTick > oldTick + (ticksToDelay * speed)){
            if (up) {
                alpha += 10
            }
            if (!up) {
                alpha -= 10
            }
            oldTick = Global.Tickcount()
        }
        if (alpha >= 255) {
            alpha = 255
            up = false
        }
        if (alpha <= min_alpha) {
            alpha = min_alpha
            up = true
        }
        tickcount = Global.Tickcount();
        color = HSVtoRGB(tickcount % 350 / 350, 1, 1, 1, 255);
        UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Watermark", [color.b, color.r, color.g, 50]);


    }
}
Global.RegisterCallback("Draw", "rainbowColors");


var observators = [];
function getObservators(){
	var ents = Entity.GetPlayers();
	var local = Entity.GetLocalPlayer();
	var localtarget = Entity.GetProp(local,"DT_BasePlayer","m_hObserverTarget");
	if(!local)return;
	observators = [];
	for(i = 0; i < ents.length;i++){
		if(Entity.IsAlive(local)){
			if(!ents[i] || Entity.IsAlive(ents[i]))continue;
			var observer = Entity.GetProp(ents[i],"DT_BasePlayer","m_hObserverTarget");
			if(!observer || observer == "m_hObserverTarget")continue;
			if(observer == local)observators.push(Entity.GetName(ents[i]));
		}
		else{
			if(!ents[i] || Entity.IsAlive(ents[i]))continue;
			var observer = Entity.GetProp(ents[i],"DT_BasePlayer","m_hObserverTarget");
			if(!observer || observer == "m_hObserverTarget")continue;
			if(observer == localtarget)observators.push(Entity.GetName(ents[i]));
		}
	}
}
function drawObservators(){
	var screen = Render.GetScreenSize();
	var type = UI.GetValue("Script Items","type");
	var font = Render.AddFont("Verdana",7,150);
	for(i = 0; i < observators.length; i++){
		var name = observators[i];
		var size = Render.TextSizeCustom(name,font);
		Render.StringCustom(screen[0]-size[0]-15,(i*20)+5,0,name,[255,255,255,255],font);
	}
	
}
function onRoundStart(){
	observators = [];
}
Global.RegisterCallback("Draw","getObservators");
Global.RegisterCallback("Draw","drawObservators");
Global.RegisterCallback("round_start","onRoundStart");



var iExploitID = 0;
var bDoubleTapped = false;
var bShouldRecharge = false;
var ForceCharge = false;
var iLastShotTime = 9;

UI.AddCheckbox("Octane DT");
UI.AddDropdown("Doubletap Mode", ["Offensive", "Defensive"]);
UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 1 );

function event_rbot_fire( ) {
    iExploitID = Event.GetInt( "exploit" );
    if ( !UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "ev0" ) )
        return;

    if ( iExploitID == 2 ) {
        iLastShotTime = Global.Tickcount( );
        bDoubleTapped = true;
        UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 0 );
        bShouldRecharge = true;
    }

    ForceCharge = bShouldRecharge ? true : false;

    if ( ForceCharge && Global.Tickcount( ) >= ( Global.TickInterval( ) * 1 + iLastShotTime ) )
        UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 1 );
}

function modecheck()
{
  if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "ev0 Mode") == 0) { on_ragebot_fire(); }
  if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "ev0 Mode") == 1) { event_rbot_fire(); }
}

Global.RegisterCallback("ragebot_fire", "modecheck");