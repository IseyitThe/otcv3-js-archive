function font()
{
  var watermark_name = Entity.GetName(Entity.GetLocalPlayer( ));
  var today = new Date();
  var hours1 = today.getHours();
  var minutes1 = today.getMinutes();
  var seconds1 = today.getSeconds();
  var localplayer_index = Entity.GetLocalPlayer();
  var velocity = Entity.GetProp(localplayer_index, "CBasePlayer", "m_vecVelocity[0]");
  var speed = Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
  var finalspeed = Math.min( 9999, speed ) + 0.2
  var hours = hours1 <= 9 ? "0" + today.getHours() + ":" : today.getHours() + ":";
  var minutes = minutes1 <= 9 ? "0" + today.getMinutes() + ":" : today.getMinutes() + ":";
  var seconds = seconds1 <= 9 ? "0" + today.getSeconds() : today.getSeconds()    ;
  const tickrate = Globals.Tickrate();
   const ping = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString();
   const fps = Math.floor( 1 / Global.Frametime() );
   const fontpixel = Render.AddFont( "Verdana", 7, 100);
   const fontpixel2 = Render.AddFont( "Verdana", 8, 100);
   
   
    const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "watermark_xw"),
            y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "watermark_yw");


    const rainbow = [
        Math.floor(Math.sin(Global.Realtime() * 2) * 127 + 128),
        Math.floor(Math.sin(Global.Realtime() * 2 + 2) * 127 + 128),
        Math.floor(Math.sin(Global.Realtime() * 2 + 4) * 127 + 128),
        255
    ];


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
    Render.FilledRect(x + 12, y + 625, 170, 19, [183,21,42, 255]); // 1 top
    Render.FilledRect(x + 14, y + 644, 166, 50, [0,0,0, 180]); // 1 black
    Render.FilledRect(x + 12, y + 694, 170, 3, [183,21,42, 255]); // 1 down
    Render.FilledRect(x + 13, y + 697, 168, 1, [183,21,42, 255]); // 2 down
    Render.FilledRect(x + 14, y + 698, 166, 1, [183,21,42, 255]); // 3 down
    Render.String(x + 14, y + 627, 0, "Bomb timer", [255, 255, 255, 255], "Arial Black", 3); //bomb timer
    Render.String(x + 16, y + 649, 0, "Plant:", [255, 255, 255, 255], 9); //plant
    Render.String(x + 70, y + 649, 0, "Time:", [255, 255, 255, 255], 9); //Time
    Render.String(x + 16, y + 670, 0, "Damage:", [255, 255, 255, 255], 9); //damage

}


Global.RegisterCallback("Draw", "font")
 
 
 
 
 
 
 
 
 
 
UI.AddLabel("------------ C4 aimware -------------");
UI.AddCheckbox("Enable C4 Indicator");
UI.AddLabel("--------------    Project    -------------");
UI.AddLabel("------------   by MAGMA   -------------");
 
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
   
    if (!UI.GetValue("Script items", "Enable C4 Indicator")) return;
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
    bomb_font = Render.AddFont("Arial Black", 20, 800);
   
    if (!isbombticking) return;
   
    if (gotdefused) return;
        if (timer >= 1 && timer > 10)
        {
            Render.StringCustom(55, 648, 0, getSite(c4) + timer + "s", [255, 255, 255, 255], 8);
        }
        else if (timer <= 10 && timer > 5 && timer >= 1)
        {
            Render.StringCustom(55, 648, 0, getSite(c4)+ timer2 + "s", [255, 255, 255, 255], 8);
        }
        else if (timer <= 5 && timer >= 1)
        {
            Render.StringCustom(55, 648, 0, getSite(c4) + timer2 + "s", [255, 255, 255, 255], 8);
        }
        else if (timer < 1 && timer >= 0.1)
        {
            Render.StringCustom(55, 648, 0, getSite(c4) + timer3 + "s", [255, 255, 255, 255], 8);
        }
        // defuse time bar
        if (isbeingdefused > 0){
            if (timer > deflength && timer >= 0.1) {
                Render.FilledRect(0, 0, 12, defbarlength, [98,145,255, 255]);
            }
            else {
                Render.FilledRect(0, 0, 12, defbarlength, [255,55,48, 255]);
            }
        }
   
    if (!Entity.IsAlive(local)) return;
        if (willKill) {
            Render.StringCustom(76, 670, 0, "fatal", [255,255,255, 255], 8);
        }
        else if (damage > 0.5) {
            Render.StringCustom(76, 670, 0, "" + dmg, [255, 255, 255, 255], 8);
        }
        else if (damage > 0) {
            Render.StringCustom(76, 670, 0, "0", [255, 255, 255, 255], 8);
        }
}
 
function getSite(c4) {
    bombsite = Entity.GetProp(c4, "CPlantedC4", "m_nBombSite");
 
    if (bombsite == 0) {
        return "a         ";
    } else {
        return "b         ";
    }
}
 
Cheat.RegisterCallback("Draw", "dispDamage");
