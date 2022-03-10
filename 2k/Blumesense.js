var screensize = Render.GetScreenSize()
function ui()
{

    UI.AddSubTab(["Config", "SUBTAB_MGR"], "Blumesense")
    UI.AddSliderInt(["Config", "Blumesense", "Blumesense"], "                         Blumesense v1.1", 0.0, 0.0);
    UI.AddCheckbox(["Config", "Blumesense", "Blumesense"], "Watermark")
    UI.AddColorPicker(["Config", "Blumesense", "Blumesense"], "Line Color")
    UI.AddColorPicker(["Config", "Blumesense", "Blumesense"], "Background Color")
    UI.AddSliderInt(["Config", "Blumesense", "Blumesense"], "Watermark X", 200, screensize[0]);
    UI.AddSliderInt(["Config", "Blumesense", "Blumesense"], "Watermark Y", 7, screensize[1]);
    UI.SetColor(["Config", "Blumesense", "Blumesense", "Background Color"], [0, 0, 0, 130])
    getcolor1();

}

function getcolor1()
{

    cl1 = UI.GetColor(["Config", "Blumesense", "Blumesense", "Line Color"]);
    cl2 = UI.GetColor(["Config", "Blumesense", "Blumesense", "Background Color"]);

}

function drawFilledRect()
{
    getcolor1();
    if(UI.GetValue(["Config", "Blumesense", "Blumesense", "Watermark"])==1)
    {  
        {
            if(!World.GetServerString()) return;

                server = World.GetServerString();
                x = screensize[0];
                y = screensize[1];
                var xx = UI.GetValue(["Config", "Blumesense", "Blumesense", "Watermark X"]);
                var yy = UI.GetValue(["Config", "Blumesense", "Blumesense", "Watermark Y"])
                var ping = Local.Latency();
                var font = Render.AddFont("Rotonda Bold", 15,400);

                var server_tickrate = Globals.Tickrate().toString()

                Render.FilledRect( x - xx, yy, 194, 22, cl2 );
                Render.FilledRect( x - xx-1, yy-0, 4, 22, cl1);
                const date = new Date();
                const hrs = date.getHours();
                const mins = date.getMinutes();
                var fps = Math.floor( 1 / Global.Frametime());
                var text = "Blume          | " + Cheat.GetUsername() + " | " + (hrs < 10 ? "0" + hrs.toString() : hrs.toString()) + ":" + (mins < 10 ? "0" + mins.toString() : mins.toString());
                Render.String(x+7 - xx, yy + 2, 0, text, [ 255, 255, 255,     255 ], font);
                Render.String(x+49 - xx, yy + 2, 0, "sense", cl1 , font);
        }
    }
}

ui();
Cheat.RegisterCallback("Draw", "drawFilledRect")


function RGB(h, s, v) {
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
var ticksToDelay = 1



var alpha = 255
var up = true
function rainbowColors()
{

        tickcount = Global.Tickcount();
        color = RGB(tickcount % 350 / 350, 1, 1, 1, 255);
        UI.SetColor(["Config", "Blumesense", "Blumesense", "Line Color"], [color.r, color.g, color.b, alpha]);

    }

Global.RegisterCallback("Draw", "rainbowColors");


UI.AddCheckbox(["Config", "Blumesense", "Blumesense"], "Blumesense clantag");

//clantag
var retard = 0;

function cltag() {  

if (UI.GetValue(["Config", "Blumesense", "Blumesense", "Blumesense clantag"]))
{
    var speed = 2;
    var time = parseInt((Globals.Curtime() * speed))
    if (time != retard)
    {
        {
            switch((time) % 7)
            {        
            case 1: { Local.SetClanTag(" BLUMESENSE "); break; }
            case 2: { Local.SetClanTag("BLVM3S3NSE"); break; }
            case 3: { Local.SetClanTag("  BLUMESENSE  "); break; }
            case 4: { Local.SetClanTag("   B1UME$EN$E"); break; }
            case 5: { Local.SetClanTag("  BLUMESENSE  "); break; }
            }       
        }
    }
    retard = time;
    }
    else
    {
        Local.SetClanTag("");
    }
}
Cheat.RegisterCallback("CreateMove", "cltag")

UI.AddCheckbox(["Config", "Blumesense","Blumesense"], "Gachi killsay")

var sayWhat =
[
        "♂ im boss of this gym ♂",
		"♂ Fucking slaves get your ass back here ♂",
		"♂ ass we can ♂",
		"♂ boy next door ♂",
		"♂ U can go now ♂",
		"♂ That turns me on ♂",
		"♂ Deep dark fantasies ♂",
		"♂ Another victim ♂",
		"♂ i want to see 1 more round ♂",
		"♂ im taking that ass ♂",
		"♂ im ready for 1 more ♂",
		"♂ Its so fucking deep ♂",
		"♂ Oh shit im sorry ♂",
		"♂ oh my shoulder ♂",
		"♂ Take it boy ♂",
		"♂ Thats power son ♂",
		"♂ yeah work that tool ♂",
		"♂ HUH U LIKE EMBARRASING ME HUH ♂",
		"♂ HOW U LIKE THAT. ♂",
		"♂ I dont do Anal ♂",
		"♂ Get out of that outfit ♂",
		"♂ Fuck you leather man ♂",
		"♂ Do you like what you see? ♂",
		"♂ Do you like watching me? ♂",
		"♂ come on college boy ♂",
		"♂ Beat me 1 2 3 ♂",
		"♂ Have you seen two man kissing before? ♂",
		"♂ im fucking cumming ♂",
		"♂ Lube it up ♂",
		"♂ Our daddy told us not to be ashamed ♂",
		"♂ Swallow my cum ♂",
		"♂ Why dont u get fucked ♂",
		"♂ you got me mad now ♂",
		"♂ i wanna see 6 hot loads ♂",
		"♂ FUCK YOU ♂",
		"Fisting is 300$"
];

function getRandomArrayElement(arr){
    var min = 0;
    var max = (arr.length - 1);
    var randIndex = Math.floor(Math.random() * (max - min)) + min;
    return arr[randIndex];
}

function onPlayerDeath() {
    if (!UI.GetValue(["Config","Blumesense","Blumesense","Gachi killsay"])) return;

    attacker = Event.GetInt("attacker");
    attacker_index = Entity.GetEntityFromUserID(attacker);
    attacker_name = Entity.GetName(attacker_index);
    attacker_me = Entity.IsLocalPlayer(attacker_index);

    if (attacker_me) {
        Global.ExecuteCommand("say " + getRandomArrayElement(sayWhat));
    }
}


Global.RegisterCallback("player_death", "onPlayerDeath");

var BreakLeg = true
var Loop = 1;
var Loop2 = 1;

function legs () {
    
    var Amount = 10 * 0
    if (BreakLeg == true) {
        if ( Loop2 > Amount ) {
            UI.SetValue( ["Misc." , "Movement" , "Leg movement"] , 1 )
            UI.SetValue( ["Rage" , "Anti Aim" , "Jitter move"] , 1 )
            
            
            
            Loop2 = 0;
            BreakLeg = false
        }
    }else if (BreakLeg == false) {
        if ( Loop2 > Amount ){
            UI.SetValue( ["Misc." , "Movement" , "Leg movement"] , 2 )
            UI.SetValue( ["Rage" , "Anti Aim" , "Jitter move"] , 0 )
            
            
            Loop2 = 0;
            BreakLeg = true
        }
    }
    
    Loop2 = Loop2 + 1;
}

Cheat.RegisterCallback("Draw", "legs");

function ase()
{
UI.SetValue(["Misc.", "Movement", "General", "Turn speed"], 277)
}
Cheat.RegisterCallback("Draw", "ase")

UI.AddCheckbox(["Config", "Blumesense", "Blumesense",], 'Jump Scout / Revolver');
UI.AddSliderInt(["Config", "Blumesense", "Blumesense"], 'Hitchance', 0, 100);

function AirHitchance() {
    if (!UI.GetValue(['Config', 'Blumesense', 'Blumesense', 'Jump Scout / Revolver'])) {
        return
    };
    var weapons = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (weapons != 'ssg 08' && weapons != 'r8 revolver') {
        return
    };
    var flags = Entity.GetProp(Entity.GetLocalPlayer(), 'CBasePlayer', 'm_fFlags');
    if (!(flags & 1 << 0) && !(flags & 1 << 18)) {
            target = Ragebot.GetTarget();
            value = UI.GetValue(['Config', 'Blumesense', 'Blumesense', 'Hitchance']);
            Ragebot.ForceTargetHitchance(target, value);
    }
}

function SetEnabledjumphs()
{
    if (UI.GetValue(["Config", "Blumesense", "Blumesense", "Jump Scout / Revolver"]))
    {
       UI.SetEnabled(["Config", "Blumesense", "Blumesense", 'Hitchance'], 1)
    }
    else
    {
       UI.SetEnabled(["Config", "Blumesense", "Blumesense", 'Hitchance'], 0)
    }

}

function Main() {
    Global.RegisterCallback("Draw", "SetEnabledjumphs");
    Cheat.RegisterCallback('CreateMove', 'AirHitchance');
}
Main()

function lowdelta()
{
    localplayer_index = Entity.GetLocalPlayer( );
    var inverted = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"], "AA Inverter");

        if (UI.GetValue (["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]) && !inverted)
        {    
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(-17);
        }
        else if(UI.GetValue (["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]) && inverted)
        {
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(17);
        }
        else
        {
         
            AntiAim.SetOverride(0);
        }
}

Cheat.RegisterCallback("CreateMove", "lowdelta");

UI.AddCheckbox(["Config", "Blumesense", "Blumesense"], "Faster double tap")

function fasterDoubleTap() {
    if (UI.GetValue(["Config", "Blumesense", "Blumesense", "Faster double tap"])) {
        var exploitCharge = Exploit.GetCharge();
 
        Exploit[(1 != exploitCharge ? "Enable" : "Disable") + "Recharge"](), Convar.SetInt("cl_clock_correction", 0), Convar.SetInt("sv_maxusrcmdprocessticks", 18), Exploit.OverrideShift(16),
            Exploit.OverrideTolerance(0), canShiftShot(18) && 1 != exploitCharge && (Exploit.DisableRecharge(), Exploit.Recharge())
    } else
        Exploit.EnableRecharge(), Exploit.OverrideShift(12), Exploit.OverrideTolerance(3)
}
 
function fasterDoubleTapUnload() {
    Exploit.EnableRecharge(), Exploit.OverrideShift(16), Exploit.OverrideTolerance(0)
}
 

var loop = true
UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 36)


function idealyawjitter() {
var check = UI.GetValue(["Config", "Blumesense", "Blumesense", "Ideal Yaw Jitter"])
    if (check == 1) {
        UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 36)
            if (loop == true) {
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 18)
            loop = false
        }
        else if (loop == false) {
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], -18)
            loop = true
        }
    }
}
Cheat.RegisterCallback("CreateMove", "idealyawjitter")

UI.AddCheckbox(["Config", "Blumesense", "Blumesense"], "Better double tap accuracy")

function attemptTwoShotKill(dXm8nmbeef) {
    if (!UI.GetValue(["Config", "Blumesense", "Blumesense", "Better double tap accuracy"])) return false;
 
    if (UI.GetValue(["Rage", "Anti Aim", "Key assignment", "Fake duck"])) return false;
    var localWeapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (localWeapon != 'scar 20' && localWeapon != 'g3sg1') return false;
    Ragebot.ForceHitboxSafety(0);
    var cLvs6anps2 = Entity.GetProp(dXm8nmbeef, 'CBasePlayer', 'm_iHealth'),
        d7Qeyanvsw = getClosestEnemyToCrosshair();
    pelvis_pos = Entity.GetHitboxPosition(dXm8nmbeef, 2), body_pos = Entity.GetHitboxPosition(dXm8nmbeef, 3), thorax_pos = Entity.GetHitboxPosition(dXm8nmbeef, 4);
    var pKz4ghbrnb = [0, -1],
        kF65sxpnun = [0, -1],
        KF65sxpnun = [0, -1],
        VEk5kwzgtz = [0, -1];
    result_thorax = Trace.Bullet(Entity.GetLocalPlayer(), dXm8nmbeef, Entity.GetEyePosition(Entity.GetLocalPlayer()), thorax_pos);
    if (dXm8nmbeef = d7Qeyanvsw) dynamicDamage = result_thorax[1];
    if (result_thorax[1] * 2 >= cLvs6anps2 && isExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(dXm8nmbeef, cLvs6anps2 / 2 + 1), true;
    kF65sxpnun = Trace.Bullet(Entity.GetLocalPlayer(), dXm8nmbeef, Entity.GetEyePosition(Entity.GetLocalPlayer()), pelvis_pos), pKz4ghbrnb = Trace.Bullet(Entity.GetLocalPlayer(), dXm8nmbeef, Entity.GetEyePosition(Entity.GetLocalPlayer()), body_pos);
    if (dXm8nmbeef = d7Qeyanvsw) dynamicDamage = kF65sxpnun[1];
    if (kF65sxpnun[1] * 2 >= cLvs6anps2 && isExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(dXm8nmbeef, cLvs6anps2 / 2 + 1), true;
    if (dXm8nmbeef = d7Qeyanvsw) dynamicDamage = pKz4ghbrnb[1];
    if (pKz4ghbrnb[1] * 2 >= cLvs6anps2 && isExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(dXm8nmbeef, cLvs6anps2 / 2 + 1), true;
 
    result_thorax_extrapolated = Trace.Bullet(Entity.GetLocalPlayer(), dXm8nmbeef, extrapolateTick(15), thorax_pos);
    if (dXm8nmbeef = d7Qeyanvsw) dynamicDamage = result_thorax_extrapolated[1];
    if (result_thorax_extrapolated[1] * 2 >= cLvs6anps2 && isExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(dXm8nmbeef, cLvs6anps2 / 2 + 1), true;
    VEk5kwzgtz = Trace.Bullet(Entity.GetLocalPlayer(), dXm8nmbeef, extrapolateTick(25), pelvis_pos), KF65sxpnun = Trace.Bullet(Entity.GetLocalPlayer(), dXm8nmbeef, extrapolateTick(25), body_pos);
    if (dXm8nmbeef = d7Qeyanvsw) dynamicDamage = VEk5kwzgtz[1];
    if (VEk5kwzgtz[1] * 2 >= cLvs6anps2 && isExploitCharged() == true) {
        return Ragebot.ForceTargetMinimumDamage(dXm8nmbeef, cLvs6anps2 / 2 + 1), true;
    }
    if (dXm8nmbeef = d7Qeyanvsw) dynamicDamage = KF65sxpnun[1];
    if (KF65sxpnun[1] * 2 >= cLvs6anps2 && isExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(dXm8nmbeef, cLvs6anps2 / 2 + 1), true;
 
    return dynamicDamage = 0, false;
}

var time, delay, fillbar, shotsfired;

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

    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()

    if (can_shift_shot(17) && is_charged != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    }

    Exploit.OverrideTolerance(0);
    Exploit.OverrideShift(17);
}

function _TBC_UNLOAD() {
    Exploit.EnableRecharge();
}

Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");

UI.AddCheckbox(["Config", "Blumesense", "Blumesense"], "Ideal Yaw Jitter");
var loop = true
UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 36)


function idealyawjitter() {
var check = UI.GetValue(["Config", "Blumesense", "Blumesense", "Ideal Yaw Jitter"])
    if (check == 1) {
        UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 36)
            if (loop == true) {
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 18)
            loop = false
        }
        else if (loop == false) {
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], -18)
            loop = true
        }
    }
}
Cheat.RegisterCallback("CreateMove", "idealyawjitter")

UI.AddCheckbox( ["Config", "Blumesense", "Blumesense"], "Enable C4 Indicator");

function calcDist(local, target) {
    var lx = local[0];
    var ly = local[1];
    var lz = local[2];
    var tx = target[0];
    var ty = target[1];
    var tz = target[2];
    var dx = lx - tx;
    var dy = ly - ty;
    var dz = lz - tz;

    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function dispDamage() {
    local = Entity.GetLocalPlayer();

    if (!UI.GetValue( ["Config", "Blumesense", "Blumesense", "Enable C4 Indicator"] )) return;
    var c4 = Entity.GetEntitiesByClassID(128)[0];

    if (c4 == undefined) return;

    var eLoc = Entity.GetRenderOrigin(c4);
    var lLoc = Entity.GetRenderOrigin(local)
    var distance = calcDist(eLoc, lLoc);
    var willKill = false;
    var dmg;
    //player checks
    var armor = Entity.GetProp(local, "CCSPlayerResource", "m_iArmor"); // player armor
    var health = Entity.GetProp(local, "CBasePlayer", "m_iHealth"); // player health
    //c4 things
    var timer = (Entity.GetProp(c4, "CPlantedC4", "m_flC4Blow") - Globals.Curtime()); // c4 left time
    var c4length = Entity.GetProp(c4, "CPlantedC4", "m_flTimerLength");
    var bar_length = (((Render.GetScreenSize()[1] - 50) / c4length) * (timer));
    var isbombticking = Entity.GetProp(c4, "CPlantedC4", "m_bBombTicking");
    //defusing things
    var deflength = Entity.GetProp(c4, "CPlantedC4", "m_flDefuseLength"); // length of defuse
    var deftimer = (Entity.GetProp(c4, "CPlantedC4", "m_flDefuseCountDown") - Globals.Curtime()); // timer when defusing
    var defbarlength = (((Render.GetScreenSize()[1] - 50) / deflength) * (deftimer)); // lenght for left bar
    var isbeingdefused = Entity.GetProp(c4, "CPlantedC4", "m_hBombDefuser"); // check if bomb is being defused
    var gotdefused = Entity.GetProp(c4, "CPlantedC4", "m_bBombDefused"); // check if bomb has or hasnt defused

    const a = 450.7;
    const b = 75.68;
    const c = 789.2;

    const d = (distance - b) / c;

    var damage = a * Math.exp(-d * d);

    if (armor > 0) {
        var newDmg = damage * 0.5;
        var armorDmg = (damage - newDmg) * 0.5;

        if (armorDmg > armor) {
            armor = armor * (1 / .5);
            newDmg = damage - armorDmg;
        }
        damage = newDmg;
    }
    dmg = Math.ceil(damage);

    if (dmg >= health) {
        willKill = true;
    }
    else {
        willKill = false;
    }

    timer = parseFloat(timer.toPrecision(3));
    timer2 = parseFloat(timer.toPrecision(2));
    timer3 = parseFloat(timer.toPrecision(1));
    bomb_font = Render.AddFont("Verdana", 16, 800);

    if (!isbombticking) return;

    if (gotdefused) return;
        if (timer >= 1 && timer > 10)
        {
            Render.String(10 + 1, 5 + 1, 0, getSite(c4) + timer + "s", [0, 0, 0, 255], bomb_font);
            Render.String(10, 5, 0, getSite(c4) + timer + "s", [129, 177, 14, 255], bomb_font);
        }
        else if (timer <= 10 && timer > 5 && timer >= 1)
        {
            Render.String(10 + 1, 5 + 1, 0, getSite(c4) + timer2 + "s", [0, 0, 0, 255], bomb_font);
            Render.String(10, 5, 0, getSite(c4) + timer2 + "s", [210, 216, 112, 255], bomb_font);
        }
        else if (timer <= 5 && timer >= 1)
        {
            Render.String(10 + 1, 5 + 1, 0, getSite(c4) + timer2 + "s", [0, 0, 0, 255], bomb_font);
            Render.String(10, 5, 0, getSite(c4) + timer2 + "s", [252, 18, 19, 255], bomb_font);
        }
        else if (timer < 1 && timer >= 0.1)
        {
            Render.String(10 + 1, 5 + 1, 0, getSite(c4) + timer3 + "s", [0, 0, 0, 255], bomb_font);
            Render.String(10, 5, 0, getSite(c4) + timer3 + "s", [252, 18, 19, 255], bomb_font);
        }
        // defuse time bar
        if (isbeingdefused > 0){
            if (timer > deflength && timer >= 0.1) {
                Render.FilledRect(0, 0, 15, defbarlength, [58, 191, 54, 120]);
            }
            else {
                Render.FilledRect(0, 0, 15, defbarlength, [252, 18, 19, 120]);
            }
        }

    if (!Entity.IsAlive(local)) return;
        if (willKill) {
            Render.String(10 + 1, 25 + 1, 0, "FATAL", [0, 0 , 0, 200], bomb_font);
            Render.String(10, 25, 0, "FATAL", [252, 18, 19, 200], bomb_font);
        }
        else if (damage > 0.5) {
            Render.String(10 + 1, 25 + 1, 0, "-" + dmg + "HP", [0, 0, 0, 255], bomb_font);
            Render.String(10, 25, 0, "-" + dmg + "HP", [210, 216, 112, 255], bomb_font);
        }
}

function getSite(c4) {
    bombsite = Entity.GetProp(c4, "CPlantedC4", "m_nBombSite");

    if (bombsite == 0) {
        return "A - ";
    } else {
        return "B - ";
    }
}

Cheat.RegisterCallback("Draw", "dispDamage");