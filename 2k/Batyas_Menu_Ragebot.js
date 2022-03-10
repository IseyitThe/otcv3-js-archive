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

// -------------------------------------------------------------------- ZERUS --------------------------------------------------------------------

UI.AddSliderInt("            ", 0, 0)
var real_types = ["Fake", "Opposing fake", "Middle", "Smart Middle", "Follow Fake", "Opposing Follow Fake", "Smart", "Opposite Smart"]
var lby_types = ["Opposite", "Middle", "Switch Opposite", "Smart", "Opposite Smart"]
var real_additional_types = ["None", "Full Sine", "Full Jitter", "Half Sine", "Half Jitter"]
var moving_real_types = ["None", "Switch", "Jitter", "Sine"]
var override = UI.AddCheckbox("| Zerus Anti-Aim")
var ui = {
    real_type : UI.AddDropdown("Real type", real_types),
    lby_type : UI.AddDropdown("LBY type", lby_types),
    real_additional_type : UI.AddDropdown("Real additional type", real_additional_types),
    moving_real_type : UI.AddDropdown("Moving real type", moving_real_types),
    smart_range : UI.AddSliderInt("Smart Range", 0, 100)
}
function LBY_opposite(inverter)
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

// -------------------------------------------------------------------- Dodge Bruteforce -----------------------------------------------------------

UI.AddSliderInt("             ", 0, 0);
UI.AddHotkey("Dodge bruteforce");

function DodgeBruteforce(){
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce')) {
        shouldDisableOverride = !![], AntiAim.SetOverride(1);
        var Vjeefkhk9s = -9,
            Kf65sxpnun = 0,
            F9trm78mwl = !![],
            V8qnuq84rc = 30,
            Qvm6fqtd7x = 17,
            N6wkyzzmce = F9trm78mwl ? V8qnuq84rc : V8qnuq84rc * 2;
        AntiAim.SetFakeOffset(Kf65sxpnun);
        if (Vjeefkhk9s > 0) {
            if ('enBZW' === 'enBZW') {
                AntiAim.SetRealOffset(Kf65sxpnun - Vjeefkhk9s + N6wkyzzmce);
                if (Vjeefkhk9s < Qvm6fqtd7x) {
                    if ('ORqXw' === 'ORqXw') Qvm6fqtd7x = Vjeefkhk9s;
                    else {
                        function Wnpf4vzvbv() {
                            firedThisTick = [], storedShotTime = [], info = [];
                        }
                    }
                }
                F9trm78mwl ? AntiAim.SetLBYOffset(Kf65sxpnun - Qvm6fqtd7x) : AntiAim.SetLBYOffset(Kf65sxpnun + Vjeefkhk9s - Qvm6fqtd7x * 2);
            } else {
                function Mwlgkbc5f6() {
                    if (Exploit.GetCharge() == 1) return !![];
                    return ![];
                }
            }
        } else {
            if ('oTQmZ' !== 'oTQmZ') {
                function Ef39trvdnd() {
                    var B23hhc3dau = Entity.GetProp(entity_id, 'CBasePlayer', 'm_vecVelocity[0]'),
                        mBrtvzd2pu = Math.sqrt(B23hhc3dau[0] * B23hhc3dau[0] + B23hhc3dau[1] * B23hhc3dau[1]);
                    if (mBrtvzd2pu >= 10 && mBrtvzd2pu <= 85) return !![];
                    else return ![];
                }
            } else Vjeefkhk9s > Qvm6fqtd7x && (Qvm6fqtd7x = Vjeefkhk9s), AntiAim.SetRealOffset(Kf65sxpnun - Vjeefkhk9s - N6wkyzzmce), F9trm78mwl ? AntiAim.SetLBYOffset(Kf65sxpnun + Qvm6fqtd7x) : AntiAim.SetLBYOffset(Kf65sxpnun + Vjeefkhk9s + Qvm6fqtd7x * 2);
        }
    }
    if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && shouldDisableOverride == !![]) {
        if ('oWWho' === 'biXan') {
            function xRdafysm8y() {
                var rDmaaf83xa = Entity.GetProp(entity_id, 'CBasePlayer', 'm_vecVelocity[0]'),
                    bCvvd6u7xd = Math.sqrt(rDmaaf83xa[0] * rDmaaf83xa[0] + rDmaaf83xa[1] * rDmaaf83xa[1]);
                return 58 - 58 * bCvvd6u7xd / 580;
            }
        } else shouldDisableOverride = ![], AntiAim.SetOverride(0);
    }
}

// -------------------------------------------------------------------- Ragebot(Addons) --------------------------------------------------------------------

UI.AddSliderInt("                  ", 0, 0);
const menu = 
{
    menu_types: 
    {
        TYPE_VALUE: 0,
        TYPE_COLOR: 1,
        TYPE_KEYBIND: 2,
        TYPE_REFERENCE: 3
    },

    menu_array: [],

    create_checkbox: function(created_var_name)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddCheckbox(created_var_name), is_item_visible: true}) - 1; //I guess the variable naming is a bit gay rofl
    },

    create_slider_int: function(created_var_name, created_var_min, created_var_max)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddSliderInt(created_var_name, created_var_min, created_var_max), is_item_visible: true}) - 1;
    },

    create_slider_float: function(created_var_name, created_var_min, created_var_max)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddSliderFloat(created_var_name, created_var_min, created_var_max), is_item_visible: true}) - 1;
    },

    create_dropdown: function(created_var_name, created_var_dropdown_array)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddDropdown(created_var_name, created_var_dropdown_array), is_item_visible: true}) - 1;
    },

    create_multi_dropdown: function(created_var_name, created_var_dropdown_array)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddMultiDropdown(created_var_name, created_var_dropdown_array), is_item_visible: true}) - 1;
    },

    create_colorpicker: function(created_var_name)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_COLOR, var_name: UI.AddColorPicker(created_var_name), is_item_visible: true}) - 1;
    },

    create_keybind: function(created_var_name)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_KEYBIND, var_name: UI.AddHotkey(created_var_name), is_item_visible: true}) - 1;
    },

    create_menu_reference: function(var_path, var_type)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_REFERENCE, var_name: var_path, is_item_visible: true, reference_subtype: var_type}) - 1;
    },

    get_item_value: function(var_index)
    {
        if(typeof(this.menu_array[var_index]) != "undefined")
        {
            const var_type = this.menu_array[var_index].type == this.menu_types.TYPE_REFERENCE ? this.menu_array[var_index].reference_subtype : this.menu_array[var_index].type;
            switch(var_type)
            {
                case this.menu_types.TYPE_VALUE:
                    return UI.GetValue.apply(null, this.menu_array[var_index].var_name); 
                case this.menu_types.TYPE_COLOR:
                    return UI.GetColor.apply(null, this.menu_array[var_index].var_name);
                case this.menu_types.TYPE_KEYBIND:
                    return UI.IsHotkeyActive.apply(null, this.menu_array[var_index].var_name);
                default:
                    throw new Error("[onetap] invalid type specified for get_script_item_value call (variable name " + menu_array[var_index].var_name + ", specified type: " + type + ")\n");
            }
        }
        throw new Error("[onetap] invalid menu item specified for get_script_item_value\n");
    },

    set_item_visibility: function(var_index, visibility_status)
    {
        if(typeof(this.menu_array[var_index]) != "undefined")
        {
            if(this.menu_array[var_index].is_item_visible != visibility_status && UI.IsMenuOpen())
            {
                UI.SetEnabled.apply(null, this.menu_array[var_index].var_name.concat(visibility_status));
                this.menu_array[var_index].is_item_visible = visibility_status;
            }
        }
        else
        {
            throw new Error("[onetap] invalid menu item specified for set_item_visibility\n");
        }
    },

    set_item_value: function(var_index, new_value)
    {
        if(typeof(this.menu_array[var_index]) != "undefined")
        {
            const var_type = this.menu_array[var_index].type == this.menu_types.TYPE_REFERENCE ? this.menu_array[var_index].reference_subtype : this.menu_array[var_index].type;
            switch(var_type)
            {
                case this.menu_types.TYPE_VALUE:
                    UI.SetValue.apply(null, this.menu_array[var_index].var_name.concat(new_value));
                    break;
                case this.menu_types.TYPE_COLOR:
                    UI.SetColor.apply(null, this.menu_array[var_index].var_name.concat(new_value));
                    break;
                case this.menu_types.TYPE_KEYBIND:
                    const keybind_state = this.get_item_value(var_index);
                    if(keybind_state != new_value)
                    {
                        UI.ToggleHotkey.apply(null, this.menu_array[var_index].var_name);
                    }
                    break;
                default:
                    throw new Error("[onetap] invalid type specified for set_item_value (variable name " + menu_array[var_index].var_name + ", specified type: " + this.menu_array[var_index].type + ")\n");
            }
        }
        else
        {
            throw new Error("[onetap] invalid menu item specified for set_item_value\n");
        }
    }
};

const math = 
{
    vector: 
    {
        add: function(a, b)
        {
            return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
        },

        sub: function(a, b)
        {
            return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
        },

        mul_fl: function(a, fl)
        {
            return [a[0] * fl, a[1] * fl, a[2] * fl];
        },

        div_fl: function(a, fl)
        {
            return [a[0] / fl, a[1] / fl, a[2] / fl];
        },

        length: function(a)
        {
            return Math.sqrt(a[0] ** 2 + a[1] ** 2 + a[2] ** 2);
        },

        length_2d: function(a)
        {
            return Math.sqrt(a[0] ** 2 + a[1] ** 2);
        },

        angle_vector: function(ang)
        {
            const sp = Math.sin(math.angle.deg2rad(ang[0])), cp = Math.cos(math.angle.deg2rad(ang[0]));
            const sy = Math.sin(math.angle.deg2rad(ang[1])), cy = Math.cos(math.angle.deg2rad(ang[1]));
            return [cp * cy, cp * sy, -sp];
        }
    },

    angle: 
    {
        rad2deg: function(rad)
        {
            return rad * (180 / Math.PI);
        },

        deg2rad: function(deg)
        {
            return deg * (Math.PI / 180);
        },

        difference: function(angle1, angle2)
        {
            var diff = angle1 - angle2;
            diff %= 360;
            if(diff > 180)
            {
                diff -= 360;
            }
            if(diff < -180)
            {
                diff += 360;
            }
            return diff;
        },

        normalize: function(angle)
        {
            const ang = angle;
            ang[0] = math.clamp(ang[0], -89, 89);
            ang[1] %= 360;
            if(ang[1] > 180)
            {
                ang[1] -= 360;
            }
            if(ang[1] < -180)
            {
                ang[1] += 360;
            }
            ang[2] = 0;
            return ang;
        },

        calculate_angle(from, to, base_angle)
        {
            const delta = math.vector.sub(from, to);
            const ret_angle = [];
            ret_angle[0] = this.rad2deg(Math.atan(delta[2] / Math.hypot(delta[0], delta[1]))) - base_angle[0];
            ret_angle[1] = this.rad2deg(Math.atan(delta[1] / delta[0])) - base_angle[1];
            ret_angle[2] = 0;
            if(delta[0] >= 0.0)
                ret_angle[1] += 180.0;

            return this.normalize(ret_angle);
        }
    },

    clamp: function(val, min, max)
    {
        return Math.max(min,Math.min(max,val));
    },

    random_float: function(min, max)
    {
        return Math.random() * (max - min) + min;
    }
};

const setup_helpers = 
{
    ragebot_head_conditions: ["Shooting", "Moving", "In air"],
    ragebot_fallback_modes: ["Safepoint", "Bodyaim"],
    ragebot_fallback_conditions: ["Lethal", "Standing", "Slowwalking", "Moving", "In air"],
    ragebot_weapon_groups: ["General", "Pistol", "Heavy pistol", "Scout", "AWP", "Autosniper"],
};

const menu_items = 
{
    references: {},

    setup_menu_items: function()
    {
        this.master_switch = menu.create_checkbox("| Zerus Ragebot (Addons)");
        this.damage_override_key = menu.create_keybind("Damage override");
        this.selected_weapon = menu.create_dropdown("Selected weapon", setup_helpers.ragebot_weapon_groups);
        for(var i = 0; i <= 5; i++)
        {
            const ragebot_weapon = setup_helpers.ragebot_weapon_groups[i];
            const ragebot_weapon_cfg = ragebot_weapon.split(" ").join("_").toLowerCase();
            this[ragebot_weapon_cfg + "_standard_damage_amount"] = menu.create_slider_int(ragebot_weapon + " minimum damage", 0, 130);
            this[ragebot_weapon_cfg + "_damage_override_amount"] = menu.create_slider_int(ragebot_weapon + " damage override", 0, 130);
            this[ragebot_weapon_cfg + "_ragebot_head_conditions"] = menu.create_multi_dropdown(ragebot_weapon + " head conditions", setup_helpers.ragebot_head_conditions);
            this[ragebot_weapon_cfg + "_ragebot_fallback_mode"] = menu.create_dropdown(ragebot_weapon + " fallback mode", setup_helpers.ragebot_fallback_modes);
            this[ragebot_weapon_cfg + "_ragebot_fallback_conditions"] = menu.create_multi_dropdown(ragebot_weapon + " fallback conditions", setup_helpers.ragebot_fallback_conditions);
            
            if(i == 2 || i == 3)
            {
                this[ragebot_weapon_cfg + "_jumping_hitchance"] = menu.create_slider_int(ragebot_weapon + " jumping hitchance", 1, 100);
            }

            if(i == 2 || i == 5)
            {
                this[ragebot_weapon_cfg + "_doubletap_hitchance"] = menu.create_slider_int(ragebot_weapon + " DT second shot hitchance", 0, 100);
            }

            if(i == 4)
            {
                this[ragebot_weapon_cfg + "_safety"] = menu.create_checkbox("Safe AWP");
            }

            if(i == 5)
            {
                this[ragebot_weapon_cfg + "_lethal_wait"] = menu.create_checkbox("Delay shot until DT lethal");
            }
        }
        this.improve_dt = menu.create_checkbox("Doubletap corrections");
        this.indicators = menu.create_multi_dropdown("Indicators", ["Enemy mode", "Damage override", "Body aim", "Safe point", "Doubletap state"]);
    },
    
    setup_references: function()
    {
        this.references.ragebot_bodyaim_hotkey_reference = menu.create_menu_reference(["Rage", "Force body aim"], menu.menu_types.TYPE_KEYBIND);
        this.references.ragebot_safepoint_hotkey_reference = menu.create_menu_reference(["Rage", "Force safe point"], menu.menu_types.TYPE_KEYBIND);

        this.references.ragebot_doubletap_hotkey_reference = menu.create_menu_reference(["Rage", "Doubletap"], menu.menu_types.TYPE_KEYBIND);
        this.references.ragebot_doubletap_value_reference = menu.create_menu_reference(["Rage", "Doubletap"], menu.menu_types.TYPE_VALUE);

        for(var i = 0; i <= 5; i++)
        {
            const ragebot_weapon = setup_helpers.ragebot_weapon_groups[i].toUpperCase();
            const ragebot_weapon_cfg = ragebot_weapon.split(" ").join("_").toLowerCase();

            this.references["ragebot_" + ragebot_weapon_cfg + "_mindmg_reference"] = menu.create_menu_reference(["Rage", ragebot_weapon, "Targeting", "Minimum damage"], menu.menu_types.TYPE_VALUE);
            menu.set_item_visibility(this.references["ragebot_" + ragebot_weapon_cfg + "_mindmg_reference"], false);
        }
    },

    handle_menu_item_visibility: function()
    {
        if(UI.IsMenuOpen())
        {
            const master_switch_active = menu.get_item_value(this.master_switch);
            const selected_menu_weapon = menu.get_item_value(this.selected_weapon);
            menu.set_item_visibility(this.damage_override_key, master_switch_active);
            menu.set_item_visibility(this.selected_weapon, master_switch_active);   
            for(var i = 0; i <= 5; i++)
            {
                const ragebot_weapon_cfg = setup_helpers.ragebot_weapon_groups[i].split(" ").join("_").toLowerCase();

                menu.set_item_visibility(this[ragebot_weapon_cfg + "_standard_damage_amount"], master_switch_active && selected_menu_weapon == i);
                menu.set_item_visibility(this[ragebot_weapon_cfg + "_damage_override_amount"], master_switch_active && selected_menu_weapon == i);
                menu.set_item_visibility(this[ragebot_weapon_cfg + "_ragebot_head_conditions"], master_switch_active && selected_menu_weapon == i);
                menu.set_item_visibility(this[ragebot_weapon_cfg + "_ragebot_fallback_mode"], master_switch_active && selected_menu_weapon == i);
                menu.set_item_visibility(this[ragebot_weapon_cfg + "_ragebot_fallback_conditions"], master_switch_active && selected_menu_weapon == i);

                if(i == 2 || i == 3)
                {
                    menu.set_item_visibility(this[ragebot_weapon_cfg + "_jumping_hitchance"], master_switch_active && selected_menu_weapon == i);
                }

                if(i == 2 || i == 5)
                {
                    menu.set_item_visibility(this[ragebot_weapon_cfg + "_doubletap_hitchance"], master_switch_active && selected_menu_weapon == i);
                }

                if(i == 4)
                {
                    menu.set_item_visibility(this[ragebot_weapon_cfg + "_safety"], master_switch_active && selected_menu_weapon == i);
                }

                if(i == 5)
                {
                    menu.set_item_visibility(this[ragebot_weapon_cfg + "_lethal_wait"], master_switch_active && selected_menu_weapon == i);
                }
            }
            menu.set_item_visibility(this.improve_dt, master_switch_active);
            menu.set_item_visibility(this.indicators, master_switch_active);
        }
    }
};


const config = 
{
    weapon_settings: [],
    
    update_weapon_config: function()
    {
        for(var i = 0; i <= 5; i++)
        {
            const ragebot_weapon_cfg = setup_helpers.ragebot_weapon_groups[i].split(" ").join("_").toLowerCase();
            this.weapon_settings[i] = 
            {
                standard_damage_amount: menu.get_item_value(menu_items[ragebot_weapon_cfg + "_standard_damage_amount"]),

                damage_override_amount: menu.get_item_value(menu_items[ragebot_weapon_cfg + "_damage_override_amount"]),
                ragebot_head_conditions: menu.get_item_value(menu_items[ragebot_weapon_cfg + "_ragebot_head_conditions"]),

                ragebot_fallback_mode: menu.get_item_value(menu_items[ragebot_weapon_cfg + "_ragebot_fallback_mode"]),
                ragebot_fallback_conditions: menu.get_item_value(menu_items[ragebot_weapon_cfg + "_ragebot_fallback_conditions"]),

                jumping_hitchance: (i == 2 || i == 3 ? menu.get_item_value(menu_items[ragebot_weapon_cfg + "_jumping_hitchance"]) : 0),
                dt_hitchance: (i == 2 || i == 5 ? menu.get_item_value(menu_items[ragebot_weapon_cfg + "_doubletap_hitchance"]) : 0),

                force_safety: (i == 4 ? menu.get_item_value(menu_items[ragebot_weapon_cfg + "_safety"]) : 0),
                lethal_wait: (i == 5 ? menu.get_item_value(menu_items[ragebot_weapon_cfg + "_lethal_wait"]) : 0) 
            };
        }
    },

    update_settings: function()
    {
        this.damage_override_key = menu.get_item_value(menu_items.damage_override_key);
        this.master_switch = menu.get_item_value(menu_items.master_switch);
        this.improve_dt = menu.get_item_value(menu_items.improve_dt);
        this.indicators = menu.get_item_value(menu_items.indicators);
        this.update_weapon_config();
    }
};

const utility = 
{
    weapon_groups:
    [
        null, //General
        [32, 61, 4, 36, 3, 30, 2, 63], //Pistols
        [1, 64], //Heavy pistols
        [40], //SSG
        [9], //AWP
        [11, 38] //Autosnipers
    ],

    entity_movement_types:
    {
        TYPE_STAND: 0,
        TYPE_SLOWWALK: 1,
        TYPE_RUN: 2,
        TYPE_AERIAL: 3
    },

    doubletap_states:
    {
        STATE_CANNOT_DOUBLETAP: 0, //Our charge is too low and we cannot shift 
        STATE_SHOULD_RECHARGE: 1,
        STATE_READY: 2
    },

    global_variables:
    {
        local_player: -1,
        fake_yaw: -1,
        real_yaw: -1,
        doubletap_state: -1,
        
        in_doubletap_shot: false,
        current_weapon_group: 0,

        update: function()
        {
            this.local_player = Entity.GetLocalPlayer();
            this.fake_yaw = Local.GetFakeYaw();
            this.real_yaw = Local.GetRealYaw();
            
            if(Entity.IsValid(this.local_player) && Entity.IsAlive(this.local_player))
            {
                this.doubletap_state = (Exploit.GetCharge() == 1 ? utility.doubletap_states.STATE_READY : features.exploit_handler.helpers.can_shift_shot() ? utility.doubletap_states.STATE_SHOULD_RECHARGE : utility.doubletap_states.STATE_CANNOT_DOUBLETAP);
            }
        },

        update_weapon_group: function()
        {
            if(Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("userid"))))
            {
                const item_id = Event.GetInt("defindex") & 0xFFFF;
                var weapon_group = 0;
                for(var i = 1; i <= 5; i++)
                {
                    if(utility.weapon_groups[i].some(function(value) { return value == item_id; }))
                    {
                        weapon_group = i;
                        break;
                    }
                }
                this.current_weapon_group = weapon_group;
            }
        }
    },

    console_log_prefix: ".",
    console_log_prefix_color: [255, 0, 0, 255],

    log: function(text)
    {
        Cheat.PrintColor(this.console_log_prefix_color, this.console_log_prefix);
        Cheat.Print(text + "\n");
    }
};

const features = 
{
    shared:
    {
        entity_data: []
    },

    ragebot_handler:
    {
        helpers:
        {
            force_head: function(local_eyepos, entity_index)
            {
                menu.set_item_value(menu_items.references.ragebot_bodyaim_hotkey_reference, false);
                const entity_head_position = Entity.GetHitboxPosition(entity_index, 0);
                if(typeof(entity_head_position) != "undefined")
                {
                    const trace = Trace.Bullet(utility.global_variables.local_player, entity_index, local_eyepos, entity_head_position);
                    if(trace[0] == entity_index && trace[3] == 0)
                    {
                        Ragebot.ForceTargetMinimumDamage(entity_index, trace[1]);
                    }
                }
            },

            get_entity_movement_type: function(entity_index)
            {
                if(!(Entity.GetProp(entity_index, "CBasePlayer", "m_fFlags") & (1 << 0)))
                {
                    return utility.entity_movement_types.TYPE_AERIAL;
                }
                const entity_velocity_length2d = math.vector.length_2d(Entity.GetProp(entity_index, "CBasePlayer", "m_vecVelocity[0]"));
                return entity_velocity_length2d > 150 ? utility.entity_movement_types.TYPE_RUN : entity_velocity_length2d > 15 ? utility.entity_movement_types.TYPE_SLOWWALK : utility.entity_movement_types.TYPE_STAND;
            },

            lethality_check: function(local_eyepos, entity_index, doubletap_state)
            {
                const extrapolated_shootpos = math.vector.add(local_eyepos, math.vector.mul_fl(Entity.GetProp(utility.global_variables.local_player, "CBasePlayer", "m_vecVelocity[0]"), Globals.TickInterval() * 10));

            }
        },

        handle: function(createmove_data)
        {
            if(createmove_data.enemy_array_length > 0)
            {
                const doubletap_ready = Exploit.GetCharge() == 1 && menu.get_item_value(menu_items.references.ragebot_doubletap_hotkey_reference) && menu.get_item_value(menu_items.references.ragebot_doubletap_value_reference);
                const ragebot_target = Ragebot.GetTarget();
                const force_head_conditions = config.weapon_settings[utility.global_variables.current_weapon_group].ragebot_head_conditions;

                const force_fallback_mode = config.weapon_settings[utility.global_variables.current_weapon_group].ragebot_fallback_mode;
                const force_fallback_conditions = config.weapon_settings[utility.global_variables.current_weapon_group].ragebot_fallback_conditions;
                const should_force_safety = config.weapon_settings[utility.global_variables.current_weapon_group].force_safety;

                const min_damage = config.damage_override_key ? config.weapon_settings[utility.global_variables.current_weapon_group].damage_override_amount : config.weapon_settings[utility.global_variables.current_weapon_group].standard_damage_amount;
                const jumpscout_hitchance = config.weapon_settings[utility.global_variables.current_weapon_group].jumping_hitchance;
                const eligible_for_jumpscout = jumpscout_hitchance != 0 && !(Entity.GetProp(utility.global_variables.local_player, "CBasePlayer", "m_fFlags") & (1 << 0));

                const should_delay_for_lethal_dt = utility.global_variables.current_weapon_group == 5 && config.weapon_settings[utility.global_variables.current_weapon_group].lethal_wait;

                for(var i = 0; i < createmove_data.enemy_array_length; i++)
                {
                    const entity_index = createmove_data.enemies[i];
                    const is_ragebot_target = entity_index == ragebot_target;
                                        
                    Ragebot.ForceTargetMinimumDamage(entity_index, min_damage);
                    if(eligible_for_jumpscout)
                    {
                        Ragebot.ForceTargetHitchance(entity_index, jumpscout_hitchance);
                    }
                    if(should_force_safety)
                    {
                        Ragebot.ForceTargetSafety(entity_index);
                    }
                    if(force_fallback_mode == 1 && force_head_conditions == 0 && !is_ragebot_target)
                    {
                        continue;
                    }

                    const entity_movetype = this.helpers.get_entity_movement_type(entity_index);
                    if(force_fallback_conditions & (1 << 1) && entity_movetype == utility.entity_movement_types.TYPE_STAND || force_fallback_conditions & (1 << 2) && entity_movetype == utility.entity_movement_types.TYPE_SLOWWALK || force_fallback_conditions & (1 << 3) && entity_movetype == utility.entity_movement_types.TYPE_RUN || force_fallback_conditions & (1 << 4) && entity_movetype == utility.entity_movement_types.TYPE_AERIAL)
                    {
                        force_fallback_mode == 0 ? Ragebot.ForceTargetSafety(entity_index) : is_ragebot_target ? menu.set_item_value(menu_items.references.ragebot_bodyaim_hotkey_reference, true) : null;
                        continue;
                    }
                    
                }
            }   
        }
    },

    exploit_handler:
    {
        helpers:
        {
            can_shift_shot() //still from Salvatore
            {
                const server_time = (Entity.GetProp(utility.global_variables.local_player, "CCSPlayer", "m_nTickBase") - 14) * Globals.TickInterval(); //Shifted ticks are fixed to 14 because that's the most likely option
                return server_time > Entity.GetProp(utility.global_variables.local_player, "CCSPlayer", "m_flNextAttack") && server_time > Entity.GetProp(Entity.GetWeapon(utility.global_variables.local_player), "CBaseCombatWeapon", "m_flNextPrimaryAttack");
            }
        },

        handle: function()
        {

        }
    },

    renderer:
    {
        helpers:
        {
            screen_size: [],

            generic_color: function(fraction)
            {
                return [190 - ((fraction * 60) * 75 / 40), 40 + ((fraction * 60) * 146 / 60), 10, 200];
            },

            render_localplayer_indicators: function()
            {
                const indicator_selections = config.indicators;

                const base_x = this.screen_size[0] * 0.5;
                const base_y = this.screen_size[1] * 0.52;

                var offset = 0;

                const push_indicator = function(string, color)
                {
                    Render.String(base_x + 1, base_y + 1 + offset, 1, string, [0, 0, 0, 255], 3);
                    Render.String(base_x, base_y + offset, 1, string, color, 3);
                    offset += 12;
                };

                if(indicator_selections & (1 << 1) && config.damage_override_key)
                {
                    push_indicator("DAMAGE", [255, 255, 0, 200]);
                }

                if(indicator_selections & (1 << 2) && menu.get_item_value(menu_items.references.ragebot_bodyaim_hotkey_reference))
                {
                    push_indicator("BAIM", [255, 0, 255, 200]);
                }

                if(indicator_selections & (1 << 3) && (menu.get_item_value(menu_items.references.ragebot_safepoint_hotkey_reference) || config.weapon_settings[utility.global_variables.current_weapon_group].force_safety))
                {
                    push_indicator("SAFE", [77.5, 186, 10, 200]);
                }

                if(indicator_selections & (1 << 4) && menu.get_item_value(menu_items.references.ragebot_doubletap_hotkey_reference))
                {
                    push_indicator("DOUBLETAP", this.generic_color(Exploit.GetCharge()));
                }
            }
        },

        handle: function()
        {
            this.helpers.screen_size = Render.GetScreenSize();
            if(Entity.IsValid(utility.global_variables.local_player) && Entity.IsAlive(utility.global_variables.local_player))
            {
                this.helpers.render_localplayer_indicators();
            }

            if(config.indicators & (1 << 5))
            {
                const font = Render.AddFont("Segoe UI", 8, 400);
                const string = "Batya's_Menu.js | " + Cheat.GetUsername() + " | " + World.GetServerString();
                const string_size = Render.TextSizeCustom(string, font);
                string_size[0] += 8;
                string_size[1] += 4;
                const x = this.helpers.screen_size[0] - string_size[0] - 10, y = 80;

                Render.FilledRect(x - 4, y + 1, 3, string_size[1], [255, 255, 0, 200]);
                Render.FilledRect(x - 1, y + 1, string_size[0] + 3, string_size[1], [17, 17, 17, 200]);
                Render.StringCustom(x + 4, y + 2, 0, string, [255, 255, 255, 255], font);
            }
        }
    }
};

const callbacks =
{
    game_functions:
    {
        create_move:
        {
            on_function: function()
            {
                utility.global_variables.update();
                if(config.master_switch)
                {
                    const generate_createmove_data = function()
                    {
                        const object = 
                        {
                            local_eye_position: Entity.GetEyePosition(utility.global_variables.local_player),
                            enemies: Entity.GetEnemies().filter(function(entity_index) { return Entity.IsValid(entity_index) && Entity.IsAlive(entity_index) && !Entity.IsDormant(entity_index); }),
                            enemy_array_length: 0
                        };

                        object.enemy_array_length = object.enemies.length;
                        return object;
                    };

                    const createmove_data = generate_createmove_data();
                    features.ragebot_handler.handle(createmove_data);
                }
            }
        },

        draw:
        {
            on_function: function()
            {
                menu_items.handle_menu_item_visibility();
                config.update_settings();
                features.renderer.handle();
            }
        }
    },

    events:
    {
        item_equip:
        {
            on_function: function()
            {
                utility.global_variables.update_weapon_group();
            }
        }
    },

    register_callbacks: function()
    {
        Cheat.RegisterCallback("CreateMove", "callbacks.game_functions.create_move.on_function");
        Cheat.RegisterCallback("Draw", "callbacks.game_functions.draw.on_function");

        Cheat.RegisterCallback("item_equip", "callbacks.events.item_equip.on_function");
    }
};

const on_script_start = function()
{
    menu_items.setup_menu_items();
    menu_items.setup_references();
    callbacks.register_callbacks();

    for(var i = 1; i <= 64; i++)
    {
        features.shared.entity_data[i] = 
        {
            last_shot_time: -1,
            entity_info: "",
            visible: false
        };
    }

    utility.log("loaded, user: " + Cheat.GetUsername());
}

on_script_start();

// -------------------------------------------------------------------- AutoStop --------------------------------------------------------------------

// ======================|sPeC's Auto Stop (reworked by bátya's)|======================

UI.AddSliderInt("                  ", 0, 0);
function main() {
    UI.AddCheckbox("| Zerus Auto Stop (beta)");
    Cheat.RegisterCallback("Draw", "logic");
    Cheat.RegisterCallback("CreateMove", "stop");
}
main();
peeking = false;
function logic() {
    if (getVal("| Zerus Auto Stop (beta)")) {
        peeking = false;
        headVis = false;
        isTrigger = false;
        enemies = Entity.GetEnemies();
        for ( i = 0; i < enemies.length; i++) {
            localEnt = Entity.GetLocalPlayer();
            localHeadPos = Entity.GetHitboxPosition(localEnt, 0);
            headHitbox = Entity.GetHitboxPosition(enemies[i], 0);
            headToHeadBT = Trace.Bullet(enemies[i], localEnt, headHitbox, localHeadPos);
            headVis = 1;
            if (headToHeadBT != null) {    headVis = headToHeadBT[1]; }
            if (Entity.IsValid(enemies[i]) && !Entity.IsDormant(enemies[i]) && Entity.IsAlive(enemies[i]) && headVis >= 1) { peeking = true; }
            if (UI.IsHotkeyActive("Legit", "Triggerbot")) { isTrigger = true; }
        }
    } else { return; }
}
function stop()    {
    inaccuracy = Local.GetInaccuracy();
    if (getVal("| Auto Stop (beta)") && peeking && isTrigger) {
    if (inaccuracy >= 0.0121) {
        if(Global.IsKeyPressed(0x57) && Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([-145, 145, 0]); }
        if(Global.IsKeyPressed(0x57) && Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([-145, -145, 0]); }
        if(Global.IsKeyPressed(0x53) && Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([145, 145, 0]); }
        if(Global.IsKeyPressed(0x53) && Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([145, -145, 0]); }
        if(Global.IsKeyPressed(0x57)) { UserCMD.SetMovement([-145, 0, 0]); }
        if(Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([0, 145, 0]); }
        if(Global.IsKeyPressed(0x53)) { UserCMD.SetMovement([145, 0, 0]); }
        if(Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([0, -145, 0]); }
    } else if (inaccuracy <= 0.0120 && inaccuracy >= 0.0100) {
        if(Global.IsKeyPressed(0x57) && Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([-120, 120, 0]); }
        if(Global.IsKeyPressed(0x57) && Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([-120, -120, 0]); }
        if(Global.IsKeyPressed(0x53) && Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([120, 120, 0]); }
        if(Global.IsKeyPressed(0x53) && Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([120, -120, 0]); }
        if(Global.IsKeyPressed(0x57)) { UserCMD.SetMovement([-120, 0, 0]); }
        if(Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([0, 120, 0]); }
        if(Global.IsKeyPressed(0x53)) { UserCMD.SetMovement([120, 0, 0]); }
        if(Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([0, -120, 0]); }
    }else if (inaccuracy <= 0.0099) {
        if(Global.IsKeyPressed(0x57) && Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([-100, 100, 0]); }
        if(Global.IsKeyPressed(0x57) && Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([-100, -100, 0]); }
        if(Global.IsKeyPressed(0x53) && Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([100, 100, 0]); }
        if(Global.IsKeyPressed(0x53) && Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([100, -100, 0]); }
        if(Global.IsKeyPressed(0x57)) { UserCMD.SetMovement([-100, 0, 0]); }
        if(Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([0, 100, 0]); }
        if(Global.IsKeyPressed(0x53)) { UserCMD.SetMovement([100, 0, 0]); }
        if(Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([0, -100, 0]); }
        }
    }
}
function getVal(valueName) {
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valueName);
}

// -------------------------------------------------------------------- Doubletap --------------------------------------------------------------------

UI.AddSliderInt("                  ", 0, 0);
UI.AddCheckbox("| Zerus DT");
UI.AddCheckbox("| Crouch on DT");
UI.AddSliderInt("Tolerance", 0, 8);
UI.AddSliderInt("Shift", 1, 14);

function _FrameNetUpdateStart( )
{
    Exploit.OverrideTolerance(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tolerance"));
    Exploit.OverrideShift(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Shift"));
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
Cheat.RegisterCallback("FRAME_NET_UPDATE_START", "_FrameNetUpdateStart");
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
