// ==================================================================== Bátya's_Menu ====================================================================

//┏━━┓   ┏┓            ┏━┓┏━┓           
//┃┏┓┃  ┏┛┗┓      ┏┓   ┃┃┗┛┃┃
//┃┗┛┗┳━┻┓┏╋┓ ┏┳━━┫┣━━┓┃┏┓┏┓┣━━┳━┓┏┓┏┓
//┃┏━┓┃┏┓┃┃┃┃ ┃┃┏┓┣┫━━┫┃┃┃┃┃┃┃━┫┏┓┫┃┃┃
//┃┗━┛┃┏┓┃┗┫┗━┛┃┏┓┃┣━━┃┃┃┃┃┃┃┃━┫┃┃┃┗┛┃
//┗━━━┻┛┗┻━┻━┓┏┻┛┗┛┗━━┛┗┛┗┛┗┻━━┻┛┗┻━━┛
//         ┏━┛┃
//         ┗━━┛

// User configurable

// Pasted JS by Bátya's (Don't hate me when it pasted)
// Help = QuiTsKrills#8449

UI.AddLabel("====== Batya's_Menu ======")

// -------------------------------------------------------------------- Watermark --------------------------------------------------------------------

UI.AddSliderInt("                  ", 0, 0);
username = Cheat.GetUsername();
Cheat.PrintColor([255, 165, 0, 25],"\n"+"-----------------------"+"\n"+"Welcome, "+" "+username+"\n"+"-----------------------"+"\n")
UI.AddColorPicker("Watermark");
UI.AddSliderInt("                  ", 0, 0);
var color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");
if (color[3] == 0) {
	UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Watermark", [255, 165, 0, 254]);
}
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
function draw() {
	if(!World.GetServerString()) return;
	
	var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();
    var hours = hours1 <= 9 ? "0" + today.getHours() + ":" : today.getHours() + ":";
    var minutes = minutes1 <= 9 ? "0" + today.getMinutes() + ":" : today.getMinutes() + ":";
    var seconds = seconds1 <= 9 ? "0" + today.getSeconds() : today.getSeconds()    ;
	
	color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");
	var font = Render.AddFont( "Verdana", 7, 400);
	var text = "Batya's Menu | " +username+ " | delay: " +Math.round(Global.Latency() * 1000).toString()+ "ms | " +Globals.Tickrate().toString()+ "tick | " + hours + minutes + seconds;
	var h = 18;
	var w = Render.TextSizeCustom(text, font)[0] + 8;
	var x = Global.GetScreenSize()[0];
	var y = 10;
	x = x - w - 10;
	
	Render.FilledRect(x, y, w, 2, [color[0], color[1], color[2], color[3]]);
	Render.FilledRect(x, y+2, w, h, [17, 17, 17, 100]);
	
	Render.StringCustom(x+4, y + 4, 0, text, [255,255,255,255], font);
	
}
Cheat.RegisterCallback("Draw", "draw");

// ==================================================================== Anti-Aim ====================================================================

// -------------------------------------------------------------------- Desync Fix --------------------------------------------------------------------

function angle_diff(angle_1, angle_2)
{
    var delta = angle_1 - angle_2;
    delta %= 360;
    if(delta > 180)
    {
        delta -= 360;
    }
    if(delta < -180)
    {
        delta += 360;
    }
    return delta;
}

function set_move()
{
    if(UI.GetValue("Anti-Aim", "Fake angles", "LBY mode") == 1)
    {
        AntiAim.SetOverride(1);
        var fake_direction = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter") == 1 ? 1 : -1;
        var real_yaw_offset = 60 * fake_direction;
        var lower_body_offset = -60 * fake_direction;
        var current_fake_yaw = Local.GetFakeYaw();
        var current_real_yaw = Local.GetRealYaw();
        if(Math.abs(angle_diff(current_fake_yaw, current_real_yaw)) > 100)
        {
            lower_body_offset = 180;
        }
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(real_yaw_offset);
        AntiAim.SetLBYOffset(lower_body_offset);
    }
    else
    {
        AntiAim.SetOverride(0);
    }
}

function set_unload()
{
    AntiAim.SetOverride(0);
}

Cheat.RegisterCallback("CreateMove", "set_move");
Cheat.RegisterCallback("Unload", "set_unload");

// -------------------------------------------------------------------- Anti-Brute --------------------------------------------------------------------

UI.AddCheckbox("| Enable Anti-Bruteforce")
UI.AddSliderInt("Bruteforce FOV", 0, 40)

function RADTODEG(radians){
    return radians * 180 / Math.PI
}
function calcAngle(source,entityPos){
    var delta = []
    delta[0] = source[0] - entityPos[0]
    delta[1] = source[1] - entityPos[1]
    delta[2] = source[2] - entityPos[2]
    var angles = []
    var viewangles = Local.GetViewAngles()
    angles[0] = RADTODEG(Math.atan(delta[2] / Math.hypot(delta[0], delta[1]))) - viewangles[0]
    angles[1] = RADTODEG(Math.atan(delta[1] / delta[0])) - viewangles[1]
    angles[2] = 0
    if(delta[0] >= 0)
        angles[1] += 180

    return angles
}

var shots = 0
function onBulletImpact(){
    var ent = Entity.GetEntityFromUserID(Event.GetInt("userid"))
    if(ent == Entity.GetLocalPlayer() || Entity.IsTeammate(ent))
        return
    var pos = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")]
    var ang = calcAngle(Entity.GetEyePosition(ent), pos)
    var angToLocal = calcAngle(Entity.GetEyePosition(ent), Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0))
    var delta = [angToLocal[0]-ang[0],angToLocal[1]-ang[1],0]
    var FOV = Math.sqrt(delta[0] * delta[0] + delta[1] * delta[1])
    if(FOV < UI.GetValue("Bruteforce FOV"))
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter")
    if(UI.GetValue("| Enable Anti-Bruteforce")){
        shots++
        if(!(shots % 4)) UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter")
    }
}
function playerhurt(){
    if(Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer())
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter")
}
Cheat.RegisterCallback("player_hurt", "playerhurt")
Cheat.RegisterCallback("bullet_impact", "onBulletImpact")

// -------------------------------------------------------------------- ZERUS AA --------------------------------------------------------------------

UI.AddSliderInt("            ", 0, 0)
var real_types = ["Fake", "Opposing fake", "Middle", "Smart Middle", "Follow Fake", "Opposing Follow Fake", "Smart", "Opposite Smart"]
var lby_types = ["Opposite", "Middle", "Switch Opposite", "Smart", "Opposite Smart"] // not much you can do with lby but opposite is best
var real_additional_types = ["None", "Full Sine", "Full Jitter", "Half Sine", "Half Jitter"]
var moving_real_types = ["None", "Switch", "Jitter", "Sine"]
var override = UI.AddCheckbox("Zerus Anti-Aim")
var ui = {
    real_type : UI.AddDropdown("Real type", real_types),
    lby_type : UI.AddDropdown("LBY type", lby_types),
    real_additional_type : UI.AddDropdown("Real additional type", real_additional_types),
    moving_real_type : UI.AddDropdown("Moving real type", moving_real_types),
    smart_range : UI.AddSliderInt("Smart Range", 0, 100)
}
function LBY_opposite(inverter) // inverter is just side basically
{
    var real = Local.GetRealYaw()
    var fake = Local.GetFakeYaw()
    var local = Entity.GetLocalPlayer()
    var yaw = Entity.GetProp(local, "CCSPlayer", "m_angEyeAngles[0]")[1]
    var delta = yaw - fake
    if(delta > 180)
        delta -= 360
    if(delta < -180)
        delta += 360

    if(delta > -20 && inverter)
    {
        AntiAim.SetLBYOffset(90)
        return 90
    }
    else if (delta < 20 && !inverter)
    {
        AntiAim.SetLBYOffset(-90)
        return -90
    }
    else {
        AntiAim.SetLBYOffset(180)
        return 180
    }
}
function smart_middle(inverter)
{
    var local = Entity.GetLocalPlayer()
    var v = Entity.GetProp(local, "CBasePlayer", "m_vecVelocity[0]")
    var len = Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])
    AntiAim.SetRealOffset(len < 30 ? 0 : (inverter ? 58 : -58))
    return len < 30 ? 0 : (inverter ? 58 : -58)
}
function follow_fake(inverter, a)
{
    var real = Local.GetRealYaw()
    var fake = Local.GetFakeYaw()
    var local = Entity.GetLocalPlayer()
    var yaw = Entity.GetProp(local, "CCSPlayer", "m_angEyeAngles[0]")[1]
    var delta = yaw - fake
    if(delta > 180)
        delta -= 360
    if(delta < -180)
        delta += 360
    AntiAim.SetRealOffset(a ? delta : -delta)
    return a ? delta : -delta
}
function half_sine(inverter, real_yaw)
{
    var sine = ((Math.sin(Globals.Curtime() * 5) + 1) / 2) * 58
    var new_yaw = inverter ? real_yaw + sine : real_yaw - sine
    AntiAim.SetRealOffset(-new_yaw)
}
function half_jitter(inverter, real_yaw)
{
    var rand = Math.random() * 58
    var new_yaw = inverter ? real_yaw + rand : real_yaw - rand
    AntiAim.SetRealOffset(-new_yaw)
}
var flip = false
function switch_opposite(inverter)
{
    var fake = LBY_opposite(flip ? !inverter : inverter)
    if(fake == 180)
    {
        flip = !flip
    }
}
var flip2 = false
var last = 0
function switch_real_moving(inverter)
{
    var local = Entity.GetLocalPlayer()
    var v = Entity.GetProp(local, "CBasePlayer", "m_vecVelocity[0]")
    var len = Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])
    if(len < 30)
        return
    var sim = Globals.Curtime() - Entity.GetProp(local, "CBaseEntity", "m_flSimulationTime")
    if(last > sim)
    {
        flip2 = !flip2
    }
    AntiAim.SetRealOffset(flip2 ? 58 : -58)
    last = sim
}
function jitter_real_moving(inverter)
{
    var local = Entity.GetLocalPlayer()
    var v = Entity.GetProp(local, "CBasePlayer", "m_vecVelocity[0]")
    var len = Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])
    if(len < 30)
        return

    var new_yaw = Math.random() * 58 * 2 - 58
    AntiAim.SetRealOffset(new_yaw)
}
function sine_real_moving(inverter)
{
    var local = Entity.GetLocalPlayer()
    var v = Entity.GetProp(local, "CBasePlayer", "m_vecVelocity[0]")
    var len = Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])
    if(len < 30)
        return
    var factor = 0
    if(len < 90)
        factor = 40
    else
        factor = 30
    var sine = Math.sin(Globals.Curtime() * 5) * factor
    AntiAim.SetRealOffset(sine)
}
function RadToDeg(a){
    return a * 180 / Math.PI
}
function calc_angle(source, entityPos){
    var delta = []
    delta[0] = source[0] - entityPos[0]
    delta[1] = source[1] - entityPos[1]
    delta[2] = source[2] - entityPos[2]
    var angles = []
    var viewangles = Local.GetViewAngles()
    angles[0] = RadToDeg(Math.atan(delta[2] / Math.hypot(delta[0], delta[1])))
    angles[1] = RadToDeg(Math.atan(delta[1] / delta[0]))
    angles[2] = 0
    if(delta[0] >= 0)
        angles[1] += 180
    while(angles[1] > 180)
        angles[1] -= 360
    while(angles[1] < -180)
        angles[1] += 360
    return angles
}
function closest_to_fov()
{
    var local = Entity.GetLocalPlayer()
    var eye = Entity.GetEyePosition(local)
    var ang = Local.GetViewAngles()
    var enemies = Entity.GetEnemies()
    var closest = -1
    var last = 180
    for(i in enemies)
    {
        if(!Entity.IsAlive(enemies[i]))
            continue
        var ang_to = calc_angle(eye, Entity.GetHitboxPosition(enemies[i], 5))
        ang_to[0] -= ang[0]
        ang_to[1] -= ang[1]
        var len = Math.sqrt(ang_to[0]*ang_to[0]+ang_to[1]*ang_to[1])
        if(len < last)
        {
            last = len
            closest = enemies[i]
        }
    }
    return closest
}
function ang_vec(a){
    var sy = Math.sin(a[1])
    var cy = Math.cos(a[1])
    var sp = Math.sin(a[0])
    var cp = Math.cos(a[0])
    return [cp*cy,cp*sy,-sp]
}
function vmf(a,b){
    return [a[0]*b,a[1]*b,a[2]*b]
}
function va(a,b){
    return [a[0]+b[0],a[1]+b[1],a[2]+b[2]]
}
var smart = false
function smart_yaw(side)
{
    var local = Entity.GetLocalPlayer()

    var ent = closest_to_fov()
    if(ent == -1)
        return
    var eye = Entity.GetEyePosition(local)
    var ang = calc_angle(eye, Entity.GetHitboxPosition(ent, 5))
    var left_ang = [0,(ang[1]+90)/180*Math.PI,0] // fucking stupid, had a bug with it and SOMEHOW this fixed it (1000 iq coder)
    var right_ang = [0,(ang[1]-90)/180*Math.PI,0] // fucking stupid, had a bug with it and SOMEHOW this fixed it (1000 iq coder)
    var normalize = function(vec)
    {
        if(vec[1] > 180)
            vec[1] -= 360
        if(vec[1] < -180)
            vec[1] += 360
        return vec
    }
    left_ang = normalize(left_ang)
    right_ang = normalize(right_ang)
    var range = UI.GetValue.apply(null, ui.smart_range)
    var left = vmf(ang_vec(left_ang), range)
    var right = vmf(ang_vec(right_ang), range)
    var temp_left = va(left, eye)
    var temp_right = va(right, eye)
    var tr_left = Trace.Line(local, eye, temp_left)
    var tr_right = Trace.Line(local, eye, temp_right)

    left = vmf(ang_vec(left_ang), range * tr_left[1])
    temp_left = va(left, eye)
    right = vmf(ang_vec(right_ang), range * tr_right[1])
    temp_right = va(right, eye)
    tr_left = Trace.Line(local, temp_left, Entity.GetHitboxPosition(ent, 5))
    tr_right = Trace.Line(local, temp_right, Entity.GetHitboxPosition(ent, 5))
    if(tr_left[0] && !tr_right[0])
        return true
    if(!tr_left[0] && tr_right[0])
        return false
    if(!tr_left[0] && !tr_right[0])
        return side
}
function smart_lby(inverter, flipped)
{
    LBY_opposite(flipped ? smart_yaw(inverter) : !smart_yaw(inverter))
}
var enemy_brute_stage = []
function reset()
{
    enemy_brute_stage = []
}
var shots_fired = []
var last_shots_fired = []
var bullet_pos = []
var hurt = -1
var shooting = -1
function weapon_fire()
{
    if(Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer())
        return
    if(!shots_fired[Entity.GetEntityFromUserID(Event.GetInt("userid"))])
        shots_fired[Entity.GetEntityFromUserID(Event.GetInt("userid"))] = 0
    shots_fired[Entity.GetEntityFromUserID(Event.GetInt("userid"))]++
    shooting = Entity.GetEntityFromUserID(Event.GetInt("userid"))
}
function player_hurt()
{
    if(Entity.GetEntityFromUserID(Event.GetInt("attacker")) == Entity.GetLocalPlayer())
        return
    hurt = Entity.GetEntityFromUserID(Event.GetInt("attacker"))
}
function bullet_impact()
{
    if(Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer())
        return
    if(Entity.GetEntityFromUserID(Event.GetInt("userid")) == shooting)
        bullet_pos = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")]
}
function process_shot()
{
    if(shooting == -1)
        return
    var eye = Entity.GetEyePosition(shooting)
    var impact = bullet_pos
    var local = Entity.GetLocalPlayer()
    var head = Entity.GetHitboxPosition(local, 0)
    var ang_to_impact = calc_angle(eye, impact)
    var ang_to_local = calc_angle(eye, head)
    var delta = [ang_to_local[0]-ang_to_impact[0],ang_to_local[1]-ang_to_impact[1], 0]
    var len = Math.sqrt(delta[0]*delta[0]+delta[1]*delta[1])
    delta = [head[0]-eye[0],head[1]-eye[1],head[2]-eye[2]]
    var dist = Math.sqrt(delta[0]*delta[0]+delta[1]*delta[1]+delta[2]*delta[2])
    if(dist > 500)
        dist = 500
    dist = 500 - dist
    dist /= 450
    dist *= 20
    if(dist < 2)
        dist = 2
    if(hurt != shooting && len < dist)
    {
 
        if(!enemy_brute_stage[shooting])
            enemy_brute_stage[shooting] = 0
        enemy_brute_stage[shooting] = (enemy_brute_stage[shooting] + 1) % 3
    }
    shooting = -1
    hurt = -1
    bullet_pos = []
}
function onCreateMove()
{
    if(!UI.GetValue.apply(null, override))
    {
        AntiAim.SetOverride(0)
        return
    }
    AntiAim.SetOverride(1)
    var real_type = UI.GetValue.apply(null, ui.real_type)
    var lby_type = UI.GetValue.apply(null, ui.lby_type)
    var real_additional_type = UI.GetValue.apply(null, ui.real_additional_type)
    var moving_real_type = UI.GetValue.apply(null,ui.moving_real_type)
    var inverter = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")
    var real_yaw = 0

    switch(real_type)
    {
        case 0: AntiAim.SetRealOffset(inverter ? 58 : -58); real_yaw = inverter ? 58 : -58; break
        case 1: AntiAim.SetRealOffset(inverter ? -58 : 58); real_yaw = inverter ? -58 : 58; break
        case 2: AntiAim.SetRealOffset(0); break
        case 3: real_yaw = smart_middle(inverter); break
        case 4: real_yaw = follow_fake(inverter, false); break
        case 5: real_yaw = follow_fake(inverter, true); break
        case 6: AntiAim.SetRealOffset(smart_yaw(inverter) ? 58 : -58); break
        case 7: AntiAim.SetRealOffset(smart_yaw(inverter) ? -58 : 58); break
    }
    switch(lby_type)
    {
        case 0: LBY_opposite(inverter); break
        case 1: AntiAim.SetLBYOffset(0); break
        case 2: switch_opposite(inverter); break
        case 3: smart_lby(inverter, false); break
        case 4: smart_lby(inverter, true); break
    }
    switch(real_additional_type)
    {
        case 1: AntiAim.SetRealOffset(Math.sin(Globals.Curtime() * 5) * 58); break
        case 2: AntiAim.SetRealOffset(Math.random() * 58 * 2 - 58); break
        case 3: half_sine(inverter, real_yaw); break
        case 4: half_jitter(inverter, real_yaw); break
    }
    switch(moving_real_type)
    {
        case 1: switch_real_moving(inverter); break
        case 2: jitter_real_moving(inverter); break
        case 3: sine_real_moving(inverter); break
    }
}
Cheat.RegisterCallback("round_start", "reset")
Cheat.RegisterCallback("weapon_fire", "weapon_fire")
Cheat.RegisterCallback("bullet_impact", "bullet_impact")
Cheat.RegisterCallback("player_hurt", "player_hurt")
Cheat.RegisterCallback("CreateMove", "onCreateMove")

// ==================================================================== Ragebot ====================================================================

// -------------------------------------------------------------------- Doubletap --------------------------------------------------------------------

UI.AddSliderInt("                  ", 0, 0);
UI.AddCheckbox("| Zerus DT");
UI.AddCheckbox("| Crouch on DT");

function DT(){
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "| Zerus DT")){
        return;
    Exploit.OverrideTolarence(0);
    Exploit.OverrideShift(14);
    }
}

function DTunload(){
    Exploit.OverrideTolarence(2);
    Exploit.OverrideShift(12);
}

function on_ragebot_fire() {
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "| Zerus DT")){
        return;
    }
    player = Entity.GetLocalPlayer();
    weapon = Entity.GetWeapon(player);
    weaponName = Entity.GetName(weapon);
    Global.Print('Printing:');
    Global.Print(weaponName + '\n');
function lastShot(){
    if(Entity.GetLocalPlayer() == Entity.GetEntityFromUserID(Event.GetInt("userid")) && UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
       
        last = Globals.Tickcount()
        shot = true
    }
}
var wasActive = true
var wasfding = false
var lastfding = 0
function cm(){
/*    if(!UI.GetValue("Script Items", "Fast DT Recharge") || (UI.IsHotkeyActive("Rage","GENERAL","Exploits","Hide shots") && !UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap"))){
        Exploit.EnableRecharge()
        return*/
    Exploit.DisableRecharge()
    if(!UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap"))
    wasActive = false
    if(!wasActive && UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
        Exploit.Recharge()
        wasActive = true
    }
    if(UI.IsHotkeyActive("Anti-Aim","Extra","Fake duck")){
        wasfding = true
        lastfding = Globals.Tickcount()
    }
    if(!UI.IsHotkeyActive("Anti-Aim","Extra","Fake duck") && wasfding && Globals.Tickcount() - 2 > lastfding){
        Exploit.Recharge()
        wasfding = false
    }
   
    if(last + 5 < Globals.Tickcount() && shot){
        Exploit.Recharge()
        shot = false
    }
}
    if (!(weaponName.includes('g3sg1')|| weaponName.includes('scar')|| weaponName.includes('xm1014')|| weaponName.includes('desert')|| weaponName.includes('nova')|| weaponName.includes('sawed off'))) {
        Global.Print('Includes Blacklisted Gun... Setting fast recovery true' + '\n');
        UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", true);
        return;
    }
    ragebot_target_exploit = Event.GetInt("exploit");
    if (ragebot_target_exploit == 2) {
        UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", true);
    } else {
        UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", false);
    }   
}

var canCrouch = false;
var crouchTime = 0;

function onShot() {
    exploit = Event.GetInt("exploit");

        if(exploit == 2) {
            canCrouch = true;
            crouchTime = Globals.Curtime();
        } else {
            canCrouch = false;
            crouchTime = 0;
        }
}

function userCMD() {
    if (!UI.GetValue("| Crouch on DT"))
    UI.SetEnabled("mode", e);
    if(canCrouch) {
        if(Globals.Curtime() - crouchTime > .3) {
            crouchTime = 0;
            canCrouch = false;
        } else {
            UserCMD.ForceCrouch();
        }
    
    }
}

Cheat.RegisterCallback("ragebot_fire", "onShot");
Cheat.RegisterCallback("CreateMove", "userCMD");
Global.RegisterCallback("ragebot_fire", "on_ragebot_fire");
Cheat.RegisterCallback("Unload", "DTunload");

// ==================================================================== MISC ====================================================================

// -------------------------------------------------------------------- Clantag --------------------------------------------------------------------

var tags = {
    "Batya's"     : "Bátya's",
    "Lightning"     : "⚡",
    "Warning"       : "⚠",
    "Skull"      : "☠",
    "911"  : "__✈___[]_[]"
};

function collect_keys(tbl, custom) {
    var keys = Object.keys( tbl );
 
    if ( custom ) {
        keys.unshift( "Disabled" );
        keys.push( "Custom" );
    }
 
    return keys;
}
 
var __lastSetClanTag = "";
function _setClanTag(tag) {
    if ( __lastSetClanTag == tag ) return false;
    __lastSetClanTag = tag;
    Local.SetClanTag( tag );
    return true;
}
 
var tag = "";
var tag_index = 0;
var tag_index_offset = 0;
var tag_length = 0;
var tag_reverse = 0;
var tag_last_index = 0;
var time_last_update = 0;
 
var update_after = Globals.Curtime();
 
var commands = 0;

 
function staticTag() {
    if (tag == "Disabled") return;
    _setClanTag( tag );
}
 
function timeTag() {
    var curTime = Globals.Curtime();
    if ( curTime - time_last_update < 1 ) return; // Only needs to update once per second. Just a tiny optimization.
    time_last_update = curTime;
 
    var curDate = new Date();
    var hours = curDate.getHours() + "";
    if ( hours.length == 1 ) hours = "0" + hours;
    var minutes = curDate.getMinutes() + "";
    if ( minutes.length == 1 ) minutes = "0" + minutes;
    var seconds = curDate.getSeconds() + "";
    if ( seconds.length == 1 ) seconds = "0" + seconds;
 
    var time_tag = hours + ":" + minutes + ":" + seconds;
    _setClanTag( time_tag );
}
 
function defaultTag() {
    if (tag_index == tag_last_index) return;
    _setClanTag( tag_index == 0 ? "\0" : tag.substr( 0, tag_index ) );
}
 
function reverseTag() {
    if ( tag_index == tag_last_index ) return;
 
    if ( tag_reverse <= tag_length ) {
        _setClanTag( tag.substr( 0, tag_index ) );
    } else {
        _setClanTag( (tag_length - tag_index == 0) ? "\0" : tag.substr( 0, tag_length - tag_index ) );
    }
}
 
function loopTag() {
    if ( tag_index == tag_last_index ) return;
    var loop_tag = tag;
 
    for ( var i = 0; i <= tag_index; i++ ) { // Only until we reach tag_index
        loop_tag = loop_tag + loop_tag.substr( 0, 1 );     // Copy first character to the back
        loop_tag = loop_tag.substr( 1, loop_tag.length );  // Then delete the first character
    }
 
    _setClanTag( loop_tag );
}
 
function loopTagSkip(force) {
    force = force || false;
 
    if ( tag_index == tag_last_index && !force ) return;
    var loop_tag = tag;
 
    for ( var i = 0; i <= tag_index; i++ ) { // Only until we reach tag_index
        loop_tag = loop_tag + loop_tag.substr( 0, 1 );     // Copy first character to the back
        loop_tag = loop_tag.substr( 1, loop_tag.length );  // Then delete the first character
    }
 
    var visibleTag = loop_tag.substr( 0, 15 ).trim();
    if ( visibleTag.length == 1 ) {
        var realLength = loop_tag.length / 3;
        var idx = 9 + (realLength - 8) * 3; // Figure out at which index we need to skip once
 
        if ( tag_index == idx ) {
            tag_index++;
            tag_last_index++;
            tag_index_offset++;
            return loopTagSkip( true );
        }
    }
 
    _setClanTag( loop_tag );
}
 
function killDickTag() {
    // Update once every 0.3 seconds
    var curTime = Globals.Curtime();
    if ( curTime - time_last_update < 0.3 ) return;
    time_last_update = curTime;
 
    var killdick_mode = getUIValue( menu1.killDickMode, undefined, false );
    var maxAmount = getUIValue( menu1.killDickLength, "text" );
 
    // Modes 0, 1, 2 use the scoreboard for maxAmount
    if ( killdick_mode < 3 ) {
        var playerEntities = killdick_mode == 0
            ? Entity.GetPlayers() // relative to
            : killdick_mode == 1
                ? Entity.GetPlayers().filter(function(e) { return Entity.IsTeammate(e); }) // relative to teammates
                : Entity.GetPlayers().filter(function(e) { return !Entity.IsTeammate(e); }); // relative to enemies
 
        // Get highest kill count
        maxAmount = Math.max.apply( Math, playerEntities.map(function(e) { return Entity.GetProp( e, "CPlayerResource", "m_iKills" ); }) );
    } else {
        // Otherwise just use maxAmount from the textbox. On invalid input, default to 1.
        maxAmount = parseInt( maxAmount );
        maxAmount = (maxAmount <= 0 || isNaN( maxAmount )) ? 1 : maxAmount;
    }
 
    // get kills for player
    var playerEntity = Entity.GetLocalPlayer();
    var kills = Entity.GetProp( playerEntity, "CPlayerResource", "m_iKills" );
 
    // calculate size percentage
    var p = maxAmount == 0 ? 0 : (kills / maxAmount); // catch division by zero
    if ( p > 1 ) p = 1;
 
    // We have 15 characters; 1 reserved for balls and 1 for the tip and at least one for shaft. Yes I just wrote that.
    var shaftAmount = Math.floor( p * 12 );
 
    _setClanTag( "8" + "=".repeat( shaftAmount + 1 ) + "D" );
}
 
var animations = {
    "Static"  : staticTag,
    "Time"    : timeTag,
    "Default" : defaultTag,
    "Reverse" : reverseTag,
    "Classic" : loopTag,
    "Classic (skip first)" : loopTagSkip,
    "Loop"    : loopTag,
    "Killdick": killDickTag // :^)
};
 
var killdickModes = [
    "Relative to all",
    "Relative to team",
    "Relative to enemies",
    "Relative to custom limit"
];

 
function uiTransform(key, value) {
    var t = {
        "Animation" : function(value) { // index => name, name => index
            if ( typeof value == "string" ) {
                return collect_keys( animations, false ).indexOf( value );
            }
 
            return collect_keys( animations, false )[ value ];
        },
        "Tags" : function(value) { // index => name, name => index
            if ( typeof value == "string" ) {
                return collect_keys( tags, true )[ value ].indexOf( value );
            }
 
            return collect_keys( tags, true )[ value ];
        },
        "Mode" : function(value) {
            if ( typeof value == "string" ) {
                return killdickModes.indexOf( value );
            }
 
            return killdickModes[ value ];
        }
    };
 
    if ( t[ key ] ) return t[ key ]( value );
    return value;
}
 
function setUIValue(key, value) {
    UI.SetValue( "Misc", "JAVASCRIPT", "Script items", "Clan tag " + key, value );
}
 
function getUIValue(key, type, doTransform) {
    doTransform = doTransform === undefined ? true : false;
    type = type || "default";
    var raw = null;
 
    if ( type == "default" ) raw = UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Clan tag " + key );
    if ( type == "text" ) {
        raw = UI.GetString( "Misc", "JAVASCRIPT", "Script items", "Clan tag " + key );
        if ( !raw || !raw.length ) raw = "\0";
    }
 
    return doTransform ? uiTransform( key, raw ) : raw;
}
 
function setUIEnabled(key, value) {
    UI.SetEnabled( "Misc", "JAVASCRIPT", "Script items", "Clan tag " + key, value );
}
 
var menu1 = {
    enabled : "Changer",
    tags : "Tags",
    styles : "Animation",
    killDickMode : "Mode",
    killDickLength : "Kill-dick max size at kill amount",
    speed : "Speed",
    text : "Text"
};

UI.AddSliderInt("                  ", 0, 0);
UI.AddCheckbox( "Clan tag " + menu1.enabled );
UI.AddDropdown( "Clan tag " + menu1.tags, collect_keys( tags, true ) );
UI.AddTextbox( "Clan tag " + menu1.text );
UI.AddDropdown( "Clan tag " + menu1.styles, collect_keys( animations, false ) );
UI.AddDropdown( "Clan tag " + menu1.killDickMode, killdickModes );
UI.AddTextbox( "Clan tag " + menu1.killDickLength );
UI.AddSliderInt( "Clan tag " + menu1.speed, 0, 100 );
setUIValue( menu1.speed, 30 );
UI.AddSliderInt("                  ", 0, 0);

function handle_menu1(e) {
    if ( e && e.what == menu1.tags && e.after == "Disabled" ) {
        _setClanTag( "\0" ); // Set tag to nothing if Tags is set to Disabled.
    }
 
    var state = getUIValue( menu1.enabled );
    var menu1_tag = getUIValue( menu1.tags );
    var tag_style = getUIValue( menu1.styles );
    var killdick_mode = getUIValue( menu1.killDickMode );
 
    setUIEnabled( menu1.tags, state );
    setUIEnabled( menu1.styles, state );
    setUIEnabled( menu1.speed, state );
    setUIEnabled( menu1.killDickMode, state && (tag_style == "Killdick") );
    setUIEnabled( menu1.killDickLength, state && (tag_style == "Killdick") && (killdick_mode == killdickModes[ 3 ]) );
    setUIEnabled( menu1.text, state && (menu1_tag == "Custom") );
 
    if (!state) _setClanTag( "\0" );
}
 
function handle_text_change() {
    update_after = Globals.Curtime() + 1;
    // reset all
    tag_index = 0;
    tag_length = 0;
    tag_reverse = 0;
    tag_last_index = 0;
    _setClanTag( "\0" );
}
 
handle_menu1()
 
// Bridge some stuff that exists in the lua...
var listeners = {};
 
function listenerCheck() {
    Object.keys( listeners ).forEach(function(key) {
        var v = getUIValue( key, listeners[ key ].type );
        if ( v != listeners[ key ].currentValue ) {
            listeners[ key ].callbacks.forEach(function(cb) {
                cb({ before : listeners[ key ].currentValue, after : v, what : key });
            });
 
            listeners[ key ].currentValue = v;
        }
    });
}
 
function listen( onElement, callback, type ) {
    if ( !listeners[ onElement ] ) {
        listeners[ onElement ] = {
            callbacks : [ callback ],
            currentValue : getUIValue( onElement, type ),
            type : type || "default"
        };
    } else {
        listeners[ onElement ].callbacks.push( callback );
    }
}
 
listen( menu1.enabled, handle_menu1 );
listen( menu1.tags, handle_menu1 );
listen( menu1.styles, handle_menu1 );
listen( menu1.killDickMode, handle_menu1 );
listen( menu1.text, handle_text_change, "text" );
 

function net_update_end() {
    if ( !getUIValue( menu1.enabled ) ) return;
 
    var local_player  = Entity.GetLocalPlayer();
    var menu1_tag      = getUIValue( menu1.tags );
    var tag_style     = getUIValue( menu1.styles );
    var update_tag    = Globals.Curtime() > update_after; //commands == 0 || Entity.IsAlive( local_player ) == false;
 
    var isClassicVariant = tag_style == "Classic" || tag_style == "Classic (skip first)";
 
    if ( menu1_tag == "Disabled" ) return;
 
    tag          = (menu1_tag == "Custom") ? getUIValue( menu1.text, "text" ).substr(0,15) : tags[ menu1_tag ]; // clip to max length of 15 characters
 
    if ( isClassicVariant && tag.length < 8 ) {
        tag = tag + (" ".repeat( 8 - tag.length ));
    }
 
    if ( tag_style != "Classic (skip first)" ) {
        tag_index_offset = 0;
    }
 
    tag         = (tag_style == "Loop") ? tag + " " : tag;
    tag         = isClassicVariant ? (tag + " ".repeat( Math.floor( tag.length * 2 ) )) : tag;
    tag_length  = tag.length;
    tag_index   = Math.floor( ( (Globals.Curtime() * getUIValue( menu1.speed ) / 10) + tag_index_offset ) % tag_length + 1 );
    tag_reverse = Math.floor( ( Globals.Curtime() * getUIValue( menu1.speed ) / 10 ) % ( tag_length * 2 ) + 1 );
 
    if ( !update_tag ) return;
 
    var animation = animations[ tag_style ];
    animation();
 
    tag_last_index = tag_index;
}
 
/*
function run_command(cmd) {
    if ( !getUIValue( menu1.enabled ) ) return;
 
    // Can't do this.
    commands = cmd.chokedcommands;
}
*/
 
/*
local function shutdown()
    client_set_clan_tag("\0")
end
*/
 
function onFrameStageNotify() {
    if ( Cheat.FrameStage() == 0 ) listenerCheck();
    if ( Cheat.FrameStage() == 4 ) net_update_end();
}
 
Cheat.RegisterCallback( "FrameStageNotify", "onFrameStageNotify" );
 
//client_set_event_callback("run_command", run_command)
//client_set_event_callback("shutdown", shutdown)

// -------------------------------------------------------------------- Killsay --------------------------------------------------------------------

UI.AddCheckbox("| Trashtalker");
UI.AddCheckbox("| Include Victim Name");
UI.AddTextbox("Message:");
UI.AddSliderInt("                  ", 0, 0);

var get = {
    value(v) {
        return UI.GetValue("Misc", "JAVASCRIPT", "Script items", v);
    },

    string(s) {
        return UI.GetString("Misc", "JAVASCRIPT", "Script items", s);
    }
}

function onPlayerDeath() {
    if (!get.value("| Trashtalker")) return;

    attacker = Event.GetInt("attacker");
    victim = Event.GetInt("userid");

    attacker_index = Entity.GetEntityFromUserID(attacker);
    victim_index = Entity.GetEntityFromUserID(victim);

    attacker_name = Entity.GetName(attacker_index);
    victim_name = Entity.GetName(victim_index);

    attacker_me = Entity.IsLocalPlayer(attacker_index);
    victim_enemy = Entity.IsEnemy(victim_index);

    is_dm = get.value("Trashtalker: Deathmatch Mode")

    if (attacker_me) {
        if (is_dm) {
            Global.ExecuteCommand("say "
                + (get.value("| Include Victim Name") ? victim_name + " " : "")
                + get.string("Message:"));
        } else if (victim_enemy) {
            Global.ExecuteCommand("say "
                + (get.value("| Include Victim Name") ? victim_name + " " : "")
                + get.string("Message:"));
        }
    }
}

Global.RegisterCallback("player_death", "onPlayerDeath");
