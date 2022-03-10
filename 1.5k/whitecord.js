    UI.AddColorPicker("color")

UI.AddSliderInt("Send Limit", 0, 14)
UI.AddSliderInt("Choke Limit", 0, 14)
var tickcount = 0
var flip = false
function onCM()
{
    var send = UI.GetValue("Script items", "Send Limit")
    var choke = UI.GetValue("Script items", "Choke Limit")
    if(tickcount >= choke && !flip)
    {
        flip = true
        tickcount = 0
    }
    if(tickcount >= send && flip)
    {
        flip = false
        tickcount = 0
    }
    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", !flip ? choke : 0)
    tickcount++
}
function roundstart()
{
    tickcount = 0
}
var real_types = ["Fake", "Opposing fake", "Middle", "Smart Middle", "Follow Fake", "Opposing Follow Fake", "Smart", "Opposite Smart"]
var lby_types = ["Opposite", "Middle", "Switch Opposite", "Smart", "Opposite Smart"] // not much you can do with lby but opposite is best
var real_additional_types = ["None", "Full Sine", "Full Jitter", "Half Sine", "Half Jitter"]
var moving_real_types = ["None", "Switch", "Jitter", "Sine"]
var override = UI.AddCheckbox("Override Anti-Aim")
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
    if(len < 0)
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
    var left_ang = [0,(ang[1]+90)/180*Math.PI,0]
    var right_ang = [0,(ang[1]-90)/180*Math.PI,0] 
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
function autodirection()
{
    var local = Entity.GetLocalPlayer()

    var ent = closest_to_fov()
    if(ent == -1)
        return
    var eye = Entity.GetEyePosition(local)
    var ang = calc_angle(eye, Entity.GetHitboxPosition(ent, 5))
    var left_ang = [0,(ang[1]+90)/180*Math.PI,0] 
    var right_ang = [0,(ang[1]-90)/180*Math.PI,0]
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
    var range = 50
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
        return 90
    if(!tr_left[0] && tr_right[0])
        return -90
    if(!tr_left[0] && !tr_right[0])
        return 0
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
var brutee = UI.AddCheckbox("Anti-Brute")
UI.AddLabel("- Overrides Anti-Aim settings")
var autodir = UI.AddCheckbox("Autodirection")
function onCreateMove()
{
    if(UI.GetValue.apply(null, autodir))
    {
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", autodirection())
    }
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
    var antibrute = UI.GetValue.apply(null,brutee)
    if(antibrute)
    {
        smart_lby(inverter, false)
        process_shot()
        var enemies = Entity.GetEnemies()
        var enemy_shooting = -1
        for(i in enemies)
        {
            if(!Entity.IsAlive(enemies[i]) || Entity.IsDormant(enemies[i]))
                continue
            var time = Entity.GetProp(enemies[i], "CCSPlayer", "m_nTickBase") * Globals.TickInterval()
            var next_primary_attack = Entity.GetProp(Entity.GetWeapon(enemies[i]), "CBaseCombatWeapon", "m_flNextPrimaryAttack")
            var ammo = Entity.GetProp(Entity.GetWeapon(enemies[i]), "CBaseCombatWeapon", "m_iClip1")
            var canshoot = (next_primary_attack <= time && ammo > 0)
            if(canshoot)
            {
                enemy_shooting = enemies[i]
                break
            }
        }
  
        if(enemy_shooting == -1)
            return
        if(!enemy_brute_stage[enemy_shooting])
            enemy_brute_stage[enemy_shooting] = 0
        switch(enemy_brute_stage[enemy_shooting])
        {
            case 0: AntiAim.SetRealOffset(0); break
            case 1: AntiAim.SetRealOffset(58); break
            case 2: AntiAim.SetRealOffset(-58); break
        }
        return
    }
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
Cheat.RegisterCallback("round_start", "roundstart")
Cheat.RegisterCallback("CreateMove", "onCM")


var color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "color");

if (color[3] == 0)
	UI.SetColor("Misc", "JAVASCRIPT", "Script items", "color", [89, 119, 239, 255]);

function draw() {
	if(!World.GetServerString())
		return;

	var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
	var seconds1 = today.getSeconds();
	
    var hours = hours1 <= 9 ? "0"+hours1+":" : hours1+":";
    var minutes = minutes1 <= 9 ? "0" + minutes1+":" : minutes1+":";
	var seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;
	
	var server_tickrate = Globals.Tickrate().toString()
	var ebanaya_hueta = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString()

	color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "color");

	var font = Render.AddFont("Verdana", 7, 400);
	var text = "onetap [whitecord] | " + Cheat.GetUsername() + " | delay: " + ebanaya_hueta + "ms | " + server_tickrate + "tick | " + hours + minutes + seconds;
	
	var w = Render.TextSizeCustom(text, font)[0] + 8;
	var x = Global.GetScreenSize()[0];

	x = x - w - 10;

	Render.FilledRect(x, 10, w, 2, [ color[0], color[1], color[2], 255 ]);
	Render.FilledRect(x, 12, w, 18, [ 17, 17, 17, color[3] ]);
	Render.StringCustom(x+4, 10 + 4, 0, text, [ 255, 255, 255, 255 ], font);
}

Cheat.RegisterCallback("Draw", "draw");
UI.AddLabel("whitecord Hotkeys");
const x1 = UI.AddSliderInt("Hotkeys_x", 0, Global.GetScreenSize()[0]);
const y1 = UI.AddSliderInt("Hotkeys_y", 0, Global.GetScreenSize()[1]);
var colorhotkeys = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "color");
if (colorhotkeys[3] == 0) {
    UI.SetColor("Misc", "JAVASCRIPT", "Script items", "color", [89, 119, 239, 3]);
}
var alpha = 0;
var maxwidth = 0;
var swalpha = 0;
var fdalpha = 0;
var apalpha = 0;
var aialpha = 0;
var spalpha = 0;
var fbalpha = 0;
var dtalpha = 0;
var hsalpha = 0;
var doalpha = 0;
var textalpha = 0;
var h = new Array();

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

function main_hotkeys() {
        if (!World.GetServerString()) return;
        const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_x"),
            y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_y");
        colorhotkeys = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "color");
        var font = Render.AddFont("Verdana", 7, 100);
        var frames = 8 * Globals.Frametime();
        var width = 75;
        var maxwidth = 0;
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            swalpha = Math.min(swalpha + frames, 1);
        } else {
            swalpha = swalpha - frames;
            if (swalpha < 0) swalpha = 0;
            if (swalpha == 0) {
                h.splice(h.indexOf("Slow walk"));
            }
        }

        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
            fdalpha = Math.min(fdalpha + frames, 1);
        } else {
            fdalpha = fdalpha - frames;
            if (fdalpha < 0) fdalpha = 0;
            if (fdalpha == 0) {
                h.splice(h.indexOf("Duck peek assist"));
            }
        }

        if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
            apalpha = Math.min(apalpha + frames, 1);
        } else {
            apalpha = apalpha - frames;
            if (apalpha < 0) apalpha = 0;
            if (apalpha == 0) {
                h.splice(h.indexOf("Auto peek"));
            }
        }

        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            aialpha = Math.min(aialpha + frames, 1);
        } else {
            aialpha = aialpha - frames;
            if (aialpha < 0) aialpha = 0;
            if (aialpha == 0) {
                h.splice(h.indexOf("Anti-aim inverter"));
            }
        }

        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            aialpha = Math.min(aialpha + frames, 1);
        } else {
            aialpha = aialpha - frames;
            if (aialpha < 0) aialpha = 0;
            if (aialpha == 0) {
                h.splice(h.indexOf("Inverter"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
            spalpha = Math.min(spalpha + frames, 1);
        } else {
            spalpha = spalpha - frames;
            if (spalpha < 0) spalpha = 0;
            if (spalpha == 0) {
                h.splice(h.indexOf("Safe point override"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
            fbalpha = Math.min(fbalpha + frames, 1);
        } else {
            fbalpha = fbalpha - frames;
            if (fbalpha < 0) fbalpha = 0;
            if (fbalpha == 0) {
                h.splice(h.indexOf("Force body aim"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            dtalpha = Math.min(dtalpha + frames, 1);
        } else {
            dtalpha = dtalpha - frames;
            if (dtalpha < 0) dtalpha = 0;
            if (dtalpha == 0) {
                h.splice(h.indexOf("Double tap"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
            hsalpha = Math.min(hsalpha + frames, 1);
        } else {
            hsalpha = hsalpha - frames;
            if (hsalpha < 0) hsalpha = 0;
            if (hsalpha == 0) {
                h.splice(h.indexOf("Hide shots"));
            }
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            if (h.indexOf("Slow walk") == -1)
                h.push("Slow walk")
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
            if (h.indexOf("Duck peek assist") == -1)
                h.push("Duck peek assist")
        }
        if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
            if (h.indexOf("Auto peek") == -1)
                h.push("Auto peek")
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            if (h.indexOf("Anti-aim inverter") == -1)
                h.push("Anti-aim inverter")
        }
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
            if (h.indexOf("Safe point override") == -1)
                h.push("Safe point override")
        }
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
            if (h.indexOf("Force body aim") == -1)
                h.push("Force body aim")
        }
        if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            if (h.indexOf("Double tap") == -1)
                h.push("Double tap")
        }
        if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
            if (h.indexOf("Hide shots") == -1)
                h.push("Hide shots")
        }
		if (h.length > 0) {
            alpha = Math.min(alpha + frames, 1);
        } else {
            alpha = alpha - frames;
            if (alpha < 0) alpha = 0;
        }
        for (i = 0; i < h.length; i++) {
            if (Render.TextSizeCustom(h[i], font)[0] > maxwidth) {
                maxwidth = Render.TextSizeCustom(h[i], font)[0];
            }
        }
        if (maxwidth == 0) maxwidth = 50;
        width = width + maxwidth;
        if (alpha > 0) {
                Render.FilledRect(x, y + 3, width, 2, [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], alpha * 255]);
                Render.FilledRect(x, y + 5, width, 18, [17, 17, 17, alpha * 255]);
                Render.StringCustom(x + width / 2 - (Render.TextSizeCustom("keybinds", font)[0] / 2) + 2, y + 9, 0, "keybinds", [0, 0, 0, alpha * 255 / 1.3], font);
                Render.StringCustom(x + width / 2 - (Render.TextSizeCustom("keybinds", font)[0] / 2) + 1, y + 8, 0, "keybinds", [255, 255, 255, alpha * 255], font);
                //Render.FilledRect(x, y + 23, width, 18 * h.length, [17, 17, 17, Math.min(colorhotkeys[3], alpha * 255)]);
                for (i = 0; i < h.length; i++) {
                    switch (h[i]) {
                        case 'Slow walk':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(swalpha * 100, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, swalpha * 100 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 100, swalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, swalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, swalpha * 255], font);
                            break;
                        case 'Duck peek assist':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(fdalpha * 100, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, fdalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, fdalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, fdalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [100, 255, 255, fdalpha * 255], font);
                            break;
                        case 'Auto peek':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(apalpha * 100, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, apalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, apalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, apalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, apalpha * 255], font);
                            break;
                        case 'Anti-aim inverter':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(aialpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, aialpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, aialpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, aialpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, aialpha * 255], font);
                            break;
                        case 'Safe point override':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(spalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, spalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, spalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, spalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, spalpha * 255], font);
                            break;
                        case 'Force body aim':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(fbalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, fbalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, fbalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, fbalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, fbalpha * 255], font);
                            break;
                        case 'Double tap':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(dtalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, dtalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, dtalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, dtalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, dtalpha * 255], font);
                            break;
                        case 'Hide shots':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(hsalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, hsalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, hsalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, hsalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, hsalpha * 255], font);
                            break;
                        case 'Damage override':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(doalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, doalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, doalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, doalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, doalpha * 255], font);
                            break;
                    }

                }
        }
        if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
            const mouse_pos = Global.GetCursorPosition();
            if (in_bounds(mouse_pos, x, y, x + width, y + 30)) {
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_x", mouse_pos[0] - width / 2);
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_y", mouse_pos[1] - 20);
            }
        }
}
Global.RegisterCallback("Draw", "main_hotkeys")



//whitecord DT IND

function get_icon(a) {
    var letter = ""
    switch (a) {
        case "desert eagle":
            letter = "a"
            break
        case "dual berettas":
            letter = "b"
            break
        case "five seven":
            letter = "c"
            break
        case "glock 18":
            letter = "d"
            break
        case "ak 47":
            letter = "e"
            break
        case "aug":
            letter = "f"
            break
        case "awp":
            letter = "g"
            break
        case "famas":
            letter = "h"
            break
        case "m249":
            letter = "i"
            break
        case "g3sg1":
            letter = "j"
            break
        case "galil ar":
            letter = "k"
            break
        case "m4a4":
            letter = "l"
            break
        case "m4a1 s":
            letter = "m"
            break
        case "mac 10":
            letter = "n"
            break
        case "p2000":
            letter = "o"
            break
        case "mp5 sd":
            letter = "p"
            break
        case "ump 45":
            letter = "q"
            break
        case "xm1014":
            letter = "r"
            break
        case "pp bizon":
            letter = "s"
            break
        case "mag 7":
            letter = "t"
            break
        case "negev":
            letter = "u"
            break
        case "sawed off":
            letter = "v"
            break
        case "tec 9":
            letter = "w"
            break
        case "zeus x27":
            letter = "x"
            break
        case "p250":
            letter = "y"
            break
        case "mp7":
            letter = "z"
            break
        case "mp9":
            letter = "A"
            break
        case "nova":
            letter = "B"
            break
        case "p90":
            letter = "C"
            break
        case "scar 20":
            letter = "D"
            break
        case "sg 553":
            letter = "E"
            break
        case "ssg 08":
            letter = "F"
            break
        case "knife":
            letter = "G"
            break
        case "flashbang":
            letter = "H"
            break
        case "high explosive grenade":
            letter = "I"
            break
        case "smoke grenade":
            letter = "J"
            break
        case "molotov":
            letter = "K"
            break
        case "decoy grenade":
            letter = "L"
            break
        case "incendiary grenade":
            letter = "M"
            break
        case "c4 explosive":
            letter = "N"
            break
        case "usp s":
            letter = "P"
            break
        case "cz75 auto":
            letter = "Q"
            break
        case "r8 revolver":
            letter = "R"
            break
        case "bayonet":
            letter = "V"
            break
        case "flip knife":
            letter = "W"
            break
        case "gut knife":
            letter = "X"
            break
        case "karambit":
            letter = "Y"
            break
        case "m9 bayonet":
            letter = "Z"
            break
        case "falchion knife":
            letter = "1"
            break
        case "bowie knife":
            letter = "2"
            break
        case "butterfly knife":
            letter = "3"
            break
        case "shadow daggers":
            letter = "4"
            break
        case "ursus knife":
            letter = "5"
            break
        case "navaja knife":
            letter = "6"
            break
        case "stiletto knife":
            letter = "7"
            break
        case "skeleton knife":
            letter = "8"
            break
        case "huntsman knife":
            letter = "0"
            break
        case "talon knife":
            letter = "8"
            break
        case "classic knife":
            letter = "25"
            break
        case "paracord knife":
            letter = "Z"
            break
        case "survival knife":
            letter = "Z"
            break
        case "nomad knife":
            letter = "Z"
            break
        default:
            letter = ""
            break
    }
    return letter
}

UI.AddLabel("whitecord Tickbase");
UI.AddSliderInt("Tickbase_x", 0, Global.GetScreenSize()[0]);
UI.AddSliderInt("Tickbase_y", 0, Global.GetScreenSize()[1]);
function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}
var fa = 0;
var sa = 0;

function main_dt() {
    if (!World.GetServerString()) return;

    const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tickbase_x"),
        y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tickbase_y");

    localplayer_index = Entity.GetLocalPlayer();
    localplayer_weapon = Entity.GetWeapon(localplayer_index);
    weapon_name = Entity.GetName(localplayer_weapon);
    g_Local_classname = Entity.GetClassName(localplayer_weapon);
    var nextattack = Entity.GetProp(localplayer_weapon, "CBaseCombatWeapon", "m_flNextPrimaryAttack");
    var CanShoot = false;
    if (nextattack <= Globals.Curtime()) {
        CanShoot = true;
    }

    var frames = 8 * Globals.Frametime();
    color = UI.GetColor("Misc","JAVASCRIPT","Script items","color")

    var font = Render.AddFont("Verdana", 7, 100);
    var fontbullet = Render.AddFont("bullet", 18, 100);
    if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
        var text = "DT [whitecord] | tickbase(v): 16";
    } else if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
        var text = "DT [whitecord] | tickbase(v): 7";
    } else {
        var text = "DT [whitecord] | tickbase(v): 0";
    }
    var w = Render.TextSizeCustom(text, font)[0] + 8;
    Render.FilledRect(x, y, w, 2, [color[0], color[1], color[2], color[3]]);
    Render.FilledRect(x, y + 2, w, 18, [17, 17, 17, 255]);
    Render.StringCustom(x + 5, y + 5, 0, text, [0, 0, 0, 180], font);
    Render.StringCustom(x + 4, y + 4, 0, text, [255, 255, 255, 255], font);

    Render.String(x + 4, y + 22, 0, get_icon(weapon_name), [255, 255, 255, 255], 5);
    if ((g_Local_classname == "CKnife" || g_Local_classname == "CWeaponSSG08" || g_Local_classname == "CWeaponAWP" || weapon_name == "r8 revolver" || g_Local_classname == "CHEGrenade" || g_Local_classname == "CMolotovGrenade" || g_Local_classname == "CIncendiaryGrenade" || g_Local_classname == "CFlashbang" || g_Local_classname == "CSmokeGrenade" || g_Local_classname == "CDecoyGrenade" || g_Local_classname == "CWeaponTaser" || g_Local_classname == "CC4")) {
        //return
    } else {
        if (CanShoot) {
            fa = Math.min(fa + frames, 1);
            Render.StringCustom(x + 10 + Render.TextSize(get_icon(weapon_name), 5)[0], y + 18, 0, "A", [255, 255, 255, fa * 255], fontbullet);
        } else {
            fa = 0;
        }
        if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            sa = Math.min(sa + frames, 1);
            Render.StringCustom(x + 30 + Render.TextSize(get_icon(weapon_name), 5)[0], y + 18, 0, "A", [255, 255, 255, sa * 255], fontbullet);
        } else {
            sa = 0;
        }
    }


    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x, y, x + w, y + 30)) {
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Tickbase_x", mouse_pos[0] - w / 2);
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Tickbase_y", mouse_pos[1] - 20);
        }
    }
}
Global.RegisterCallback("Draw", "main_dt");



//whitecord DT
const fontpixel2 = Render.AddFont( "Verdana", 8, 100);
var Xoffset = 'X offset';
var Yoffset = 'Y offset';

UI.AddSliderInt("Shift", 1, 14);
UI.AddSliderInt("Tolerance", 0, 3);
UI.AddCheckbox("DT [whitecord] v1.0")
UI.AddCheckbox("TP [whitecord] v1.0")
UI.AddSliderInt("Teleport", 14, 20);
function can_shift_shot(ticks_to_shift) {
    var me = Entity.GetLocalPlayer();
    var wpn = Entity.GetWeapon(me);

    if (me == null || wpn == null)
        return false;

    var tickbase = Entity.GetProp(me, "CCSPlayer", "m_nTickBase");
    var curtime = Globals.TickInterval() * (tickbase-ticks_to_shift)

    if (curtime < Entity.GetProp(me, "CCSPlayer", "m_flNextAttack"))
        return false;

    if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
        return false;

    return true;
}

function _TBC_CREATE_MOVE() {
    var is_charged = Exploit.GetCharge()
    var reserve = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tolerance")

    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"](1)

    if (can_shift_shot(14) && is_charged != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    }

    Exploit.OverrideTolerance(reserve);
    Exploit.OverrideShift(14-reserve);
}

function _TBC_UNLOAD() {
    Exploit.EnableRecharge();
}

function _FrameNetUpdateStart( )
{
    Exploit.OverrideShift(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Shift"));
}
function speed_booster(Recharge) {
if (me == null || wpn == null)
    return false;
}
function dmg_in_shot() {
    var dmg = Local.GetDmgPlayer()

    set (dmg > null)

    if (dmg == null)
    return false;

    var dmg_in_tick = Entity.GetProp(dmg, "Player", "m_nDmg");s
    dmg_in_tick = 50%(dmg, "Player")
    const dtdmg = check("Player","userid",Health);
    var Health = player_health;
}
function proccesticktotake(){
    const proccesticks = onetap.menu.proccesticks(applicationCache);
    if (proccesticks << 14);
    return false;
}
function Teleport(){
    UI.IsCheckboxActive("Misc", "JAVASCRIPT", "Script Items", "Teleport [beta] v0.1", "Enabled");
    UI.IsCheckboxActive("Rage", "GENERAL", "Exploits", "Extras", "Teleport stop", "Enabled");
    Teleport = 20(proccesticks);
    Exploit.Teleport(reserve);
}
Cheat.RegisterCallback("dmg_in_shot", "speed_booster")
Cheat.RegisterCallback("proccesticktotake", "")

Cheat.RegisterCallback("FRAME_NET_UPDATE_START", "_FrameNetUpdateStart");
Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");