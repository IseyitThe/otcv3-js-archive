UI.AddLabel("| FrikerHook.JS |");
UI.AddLabel("======================");

UI.AddCheckbox("Low delta");
UI.AddDropdown( "Low delta type", [ "Custom", "On key" ] );
const lowdelta_modes = UI.AddMultiDropdown("Low delta modes", [ "Slow walk", "Low HP", "Standing" ]);
UI.AddHotkey("Low delta on key");
UI.AddLabel("======================");

UI.AddLabel("ASPECT RATIO");
UI.AddSliderFloat("Aspect Ratio",1.0,2.0); // you can customize limites here (1.0 - lowest, 2.0 - highest)
UI.AddLabel("1.33 is 4:3                  1.77 is 16:9");
UI.AddCheckbox("4:3 mode");
UI.AddCheckbox("16:9 mode");
UI.AddLabel("======================");
UI.AddLabel("OnShot Backtrack");
UI.AddCheckbox( "Wait for on shot" );
UI.AddCheckbox( "Wait for on shot indicator" );
UI.AddHotkey( "Wait for on shot key" );
UI.AddLabel("======================");
UI.AddLabel("Resolver");
UI.AddCheckbox("Low Delta Resolver");
UI.AddLabel("======================");
UI.AddCheckbox("Jumpscout Hitchance");
UI.AddSliderInt("Hitchance", 1, 100);
UI.AddSliderInt("Accuracy Boost", 1, 100);
UI.AddLabel("======================");
UI.AddHotkey("Slow-walk:");

UI.AddSliderInt("Speed:", 0, 135);

UI.AddCheckbox("Individual speeds:", 0, 135);

UI.AddSliderInt("Forward Speed:", 0, 135);
UI.AddSliderInt("Side Speed:", 0, 135);
UI.AddSliderInt("Back Speed:", 0, 135);
UI.AddLabel("======================");
UI.AddSliderInt("Safety after x misses", 1, 6);
UI.AddLabel("======================");

//Whether or not the script is listening for a 'player_hurt' event
var waiting_for_hit = false;

//The target the ragebot last fired at
var target_idx = 0;

//The tick the ragebot last fired on
var tick_count = -1;

//Miss count for each individual player
var misses = [64];

//Safety state for each individual player
var safety_ents = [64];

//Set the default values for 'misses' and 'safety_ents'
reset_miss_logs()


function getVal(valName) {return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valName);}

function cMove() {
    //forward, side, up.
    if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Slow-walk:")) return;

    speed = getVal("Speed:");

    fSpeed = speed;
    bSpeed = speed;
    sSpeed = speed;

    if (getVal("Individual speeds:")) {
        fSpeed = getVal("Forward Speed:");
        bSpeed = getVal("Back Speed:");
        sSpeed = getVal("Side Speed:");
    }

    dir = [0, 0, 0];

    if (Input.IsKeyPressed(0x57)) {
        //'W' AKA Forward
        dir[0] += fSpeed;
    }
    if (Input.IsKeyPressed(0x44)) {
        //'D' AKA Right
        dir[1] += sSpeed;
    }
    if (Input.IsKeyPressed(0x41)) {
        //'A' AKA Left
        dir[1] -= sSpeed;
    }
    if (Input.IsKeyPressed(0x53)) {
        //'S' AKA Back
        dir[0] -= bSpeed;
    }

    UserCMD.SetMovement(dir);
}


var last_shot_time = []
var oldHitChance = UI.GetValue("Rage", "SCOUT", "Accuracy", "Hitchance");
var oldAccBoost = UI.GetValue("Rage", "SCOUT", "Accuracy", "Accuracy boost");

var isInAir = function(){
    if(Global.IsKeyPressed((0x20))){
    return true;
    }else{
    return false;
    }
    }
    
    function updateValues(){
    if(isInAir()){
    var Hitchance = UI.GetValue("Script Items","Hitchance");
    var AccuracyBoost = UI.GetValue("Script Items", "Accuracy Boost");
    UI.SetValue("Rage", "SCOUT", "Accuracy", "Hitchance", Hitchance);
    UI.SetValue("Rage", "SCOUT", "Accuracy", "Accuracy boost", AccuracyBoost);
    }else{
    UI.SetValue("Rage", "SCOUT", "Accuracy", "Hitchance", oldHitChance);
    UI.SetValue("Rage", "SCOUT", "Accuracy", "Accuracy boost", oldAccBoost);
    }
    }
    

function on_draw()
{
  if(!UI.GetValue("Misc", "Wait for on shot") || !UI.IsHotkeyActive("Misc","Wait for on shot key") || !UI.GetValue("Misc","Wait for on shot indicator" )) return;

  var font = Render.AddFont("Verdana",6,800);
  Render.StringCustom(960,550,10,"| ONSHOT |",[0,255,0,255],font);
}
function on_create_move()
{
  if(!UI.GetValue("Misc", "Wait for on shot") || !UI.IsHotkeyActive("Misc","Wait for on shot key")) return;

  var local = Entity.GetLocalPlayer( );
  if(!Entity.IsAlive(local)) return;
  var enemies = Entity.GetEnemies();

  for(var i = 0; i < enemies.length;i++)
  {
    var enemy = enemies[i];
    var dif = Globals.Tickcount() - last_shot_time[enemy]
    var has_shot = dif >= 0 && dif <= 12;
    if(!has_shot)
      Ragebot.IgnoreTarget(enemy)
  }

}
function on_weapon_fire()
{
  var shooter = Entity.GetEntityFromUserID(Event.GetInt("userid"));
  last_shot_time[shooter] = Globals.Tickcount();
}

function on_player_connect()
{
  var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));
  if(entity == Entity.GetLocalPlayer())
    last_shot_time = []
}

function SetEnabled()
{
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta type", 1)
    }
    else
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta type", 0)
    }

    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 0 && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta modes", 1)
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta on key", 0)
    }
    else if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 1 && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta modes", 0)
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta on key", 1)
    }
    else
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta modes", 0)
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta on key", 0)
    }
}

function get_velocity(index)
{
    var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

function get_health(index)
{
    health_override = Entity.GetProp(index, "CBasePlayer", "m_iHealth");
    return health_override;
}

function Low_delta()
{
    localplayer_index = Entity.GetLocalPlayer( );
    const lowdelta_dropdown_value = UI.GetValue.apply(null, lowdelta_modes);

    var velocity = get_velocity(localplayer_index)
    var health = get_health(localplayer_index)
    var LowHP = false
    var SlowWalk = false
    var Standing = false
    var Onkey = false

    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 0)
    {
       if (lowdelta_dropdown_value & (1 << 0) && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk"))
       SlowWalk = true
       else
       SlowWalk = false

       if (lowdelta_dropdown_value & (1 << 1) && health < 50)
       LowHP = true
       else
       LowHP = false

       if (lowdelta_dropdown_value & (1 << 2) && velocity < 3)
       Standing = true
       else
       Standing = false
    }
    else if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 1)
    {
       if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Low delta on key"))
       Onkey = true
       else
       Onkey = false
    }

        if (Standing == true || LowHP == true || SlowWalk == true || Onkey == true && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
        {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 10);
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(-29);
        }
        else
        {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
            AntiAim.SetOverride(0);
        }
}

function drawString()
{
    localplayer_index = Entity.GetLocalPlayer( );
    localplayer_alive = Entity.IsAlive( localplayer_index );
    const fontpixel = Render.AddFont( "Verdana Bold", 8, 100);
    const lowdelta_dropdown_value = UI.GetValue.apply(null, lowdelta_modes);
    var SFOnkey = false
    var screen_size = Global.GetScreenSize();
    var velocity = get_velocity(localplayer_index)
    var health = get_health(localplayer_index)

    SlowWalk = false
    LowHP = false
    Standing = false
    Onkey = false

    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 0)
    {
       if (lowdelta_dropdown_value & (1 << 0) && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk"))
       SlowWalk = true
       else
       SlowWalk = false

       if (lowdelta_dropdown_value & (1 << 1) && health < 50)
       LowHP = true
       else
       LowHP = false

       if (lowdelta_dropdown_value & (1 << 2) && velocity < 3)
       Standing = true
       else
       Standing = false
    }
    else if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 1)
    {
       if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Low delta on key"))
       Onkey = true
       else
       Onkey = false
    }

    if (Standing == true || LowHP == true || SlowWalk == true || Onkey == true)
    {
        drawIND = true
    }
    else
    {
        drawIND = false
    }

    if (drawIND == true && localplayer_alive == true && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") == true)
    {
       Render.StringCustom(screen_size[0] /2 , screen_size[1] /2 +25, 1, "| Low-Delta |", [ 246, 162, 0, 255 ], fontpixel );
    }
}

function hsv_to_rgb(h, s, v)
{
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
function getCustomValue(xy) {
var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", xy);
return value;}
var position = {
  x1: 0,
  y1: 0
}

function draw_fatality_rect(x, y, width, height)
{
        var rgbcolor = hsv_to_rgb(Global.Realtime() * UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Gradient Speed"), 1, 1);

}

function draw_fatality_rect2(x2, y2, width2, height2)
{
        var rgbcolor = {r:0,g:0,b:0};

      Render.Rect( x2 + 45, y2 + 2, width2 + 60, height2 + -10, [ rgbcolor.g, rgbcolor.b, rgbcolor.r, 200 ] );
     Render.FilledRect( x2 + 46, y2 + 3, width2 + 58, height2 + -10, [ 55, 55, 55, 200 ] );
     Render.FilledRect( x2 + 50, y2 + 7, width2 - -50, height2 - 19, [ 30, 30, 30, 200 ] ); // black
      Render.Rect( x2 + 50, y2 + 6, width2 - -50, height2 + -17, [ rgbcolor.g, rgbcolor.b, rgbcolor.r, 200 ] );
}

function draw_fatality_rect3(x3, y3, width3, height3)
{

}
var fps = 0;
var iterate = 0;
var averagefps = 0;
function draw_gs_watermark() // credit to dude who already made it :D
{
  var rgbcolor = hsv_to_rgb(Global.Realtime() * UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Gradient Speed"), 1, 1);
  var fps1 = 1 / Global.Frametime()
  var fps2 = Math.floor(fps1);
  averagefps = (fps1 + fps2) / 2;
  //var fps = Math.floor(fps1)
  iterate++;
  var rgb = hsv_to_rgb(Global.Tickcount() % 350 / 350,1,1);
  if(iterate%100==0){fps=Math.floor(averagefps);}
  var watermark_name = Entity.GetName(Entity.GetLocalPlayer( ));
  var today = new Date();
  var hours = today.getHours();
  var currenthours = hours % 12;
  var pmamtext = hours >= 12 ? "pm" : "am";
  var minutestext = today.getMinutes() >= 10 ? today.getMinutes(): "0" + today.getMinutes();
  var datetime = currenthours + ":" + minutestext + " " + pmamtext;
  var screensize = Global.GetScreenSize();
    x1 = screensize[0]/1.06;
    y1 = screensize[1]/150;
    draw_fatality_rect(x1, y1, 40, 35);
    draw_fatality_rect2(x1 - 150, y1, 140, 35);
    draw_fatality_rect3(x1 - 300, y1, 140, 35);
	Render.GradientRect(x1-100,y1+6,190,2,1,[85, 165, 83, 150], [ 138,0,253, 255]);
    Render.String( x1 + -66, y1 + 10, 0, " hook.js", [ 138, 0, 170, 255], 8 );
    Render.String( x1 + -96, y1 + 10, 0, "Friker", [ 255, 255, 255, 255], 8 );
    Render.String( x1 + -20, y1 + 10, 0, " (v1.1)", [ 0, 255, 0, 255], 8 );
    Render.String( x1 + 20, y1 + 10, 0, " |", [ 255, 255, 255, 255], 8 );
    
    
    
    Render.String( x1 + 28, y1 + 10, 0, " " + datetime, [ 255, 255, 255, 255 ], 8 );

}

var aspect_cache = 0;

function aspect(){
	var aspect_slider = UI.GetValue("Aspect Ratio");
	var cht = UI.GetValue("4:3 mode");
	var shd = UI.GetValue("16:9 mode");
	
	
	if (cht != 0) {
		UI.SetValue("Aspect Ratio", 1.33333333);
		UI.SetValue("4:3 mode", 0);
	}
	
	if (shd != 0) {
		UI.SetValue("Aspect Ratio", 1.77777777);
		UI.SetValue("16:9 mode", 0);
	}
	
	if (aspect_cache != aspect_slider) {
		aspect_cache = aspect_slider;
		UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Hidden cvars", 1);
		Global.ExecuteCommand("r_aspectratio " + aspect_slider);
	}
}

function HSVtoRGB(h, s, v) { // i dont know who this belongs to but whoever it is i credit you :D
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
function draw(){
	var local = Entity.GetLocalPlayer();
	if(!local || !Entity.IsValid(local)) return;
	var rgb = HSVtoRGB(Global.Tickcount() % 350 / 350,1,1);
	var screensize = Global.GetScreenSize();
	Render.FilledRect(0,0,screensize[0],2,[rgb.r,rgb.g,rgb.b,255])
}Global.RegisterCallback("Draw", "draw");


function on_ragebot_fire() {
    //The ragebot fired so now we're waiting for a 'player_hurt' event
    waiting_for_hit = true;
    //Update the current target index
    target_idx = Event.GetInt("target_index");
    //Update the tick count
    tick_count = Globals.Tickcount()
}

function on_player_hurt() {
    //The entity that was hurt
    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));

    //Don't continue if the hurt entity is the local player
    if (entity == Entity.GetLocalPlayer())
        return;

    //The entity that attacked 'entity'
    var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));

    //Don't continue unless 'attacker' is the local player
    if (attacker != Entity.GetLocalPlayer())
        return;

    //Don't continue if 'entity' isn't the last target
    if (entity != target_idx)
        return;

    //We damaged the target so we are no longer waiting for a hit. Reset the variables
    waiting_for_hit = false;
    target_idx = 0;
    tick_count = -1;
 
}

function on_create_move() {
    //Time in milliseconds between each tick
    var tick_interval = 1000 / Globals.Tickrate();

    //The amount of ticks we're going to wait for a player_hurt event
    var wait_ticks = 1 + Math.ceil((Local.Latency() * 2) / tick_interval);

    //Run this block if more than 'wait_ticks" has passed since the ragebot fired
    if (Globals.Tickcount() - tick_count >= wait_ticks && waiting_for_hit) {
        //Increment the misses for the current target
        misses[target_idx]++;

        //Force safety on the current target if more than x misses
        if (misses[target_idx] >= UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Safety after x misses")) {
            safety_ents[target_idx] = 1;
        }

        //Reset the variables
        waiting_for_hit = false;
        target_idx = 0;
        tick_count = -1;
    }

    //Current target
    var rbot_target = Ragebot.GetTarget();

    //If there is no target, don't continue
    if (rbot_target == 0)
        return;

    //Force safety on the target
    if (safety_ents[rbot_target] == 1) {
        Ragebot.ForceTargetSafety(rbot_target);
    }
}

//Reset variables on death
function on_player_death() {
    var idx = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    reset_specific_miss_logs(idx)
}

//Resets 'misses[]' and 'safety_ents[]'
function reset_miss_logs() {
    for (var i = 0; i < 64; i++) {
        reset_specific_miss_logs(i)
    }
}

//Resets 'misses' and 'safety_ents' for a specific entity
function reset_specific_miss_logs(idx) {
    misses[idx] = 0;
    safety_ents[idx] = 0;
}


Global.RegisterCallback("Draw", "drawString");
Global.RegisterCallback("Draw", "SetEnabled");
Cheat.RegisterCallback("CreateMove", "Low_delta");
Global.RegisterCallback("Draw", "draw_gs_watermark");
Cheat.RegisterCallback("CreateMove","aspect");
Cheat.RegisterCallback("weapon_fire", "on_weapon_fire")
Cheat.RegisterCallback("player_connect_full", "on_player_connect")
Cheat.RegisterCallback("CreateMove","on_create_move")
Cheat.RegisterCallback("Draw","on_draw")
Global.RegisterCallback("CreateMove", "updateValues");
Cheat.RegisterCallback("CreateMove", "cMove");
Cheat.RegisterCallback("ragebot_fire", "on_ragebot_fire");
Cheat.RegisterCallback("player_hurt", "on_player_hurt");
Cheat.RegisterCallback("CreateMove", "on_create_move");
Cheat.RegisterCallback("player_death", "on_player_death")
Cheat.RegisterCallback("round_start", "reset_miss_logs");