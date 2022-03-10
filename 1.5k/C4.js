UI.AddCheckbox("Enable C4 Indicator");
 
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
 
    if (!Entity.IsAlive(local) || !UI.GetValue("Script items", "Enable C4 Indicator")) return;
 
    var c4 = Entity.GetEntitiesByClassID(128)[0];
 
    if (c4 == undefined) return;
 
    var eLoc = Entity.GetRenderOrigin(c4);
    var lLoc = Entity.GetRenderOrigin(local)
    var distance = calcDist(eLoc, lLoc);
    var willKill = false;
    var dmg;
    var armor = Entity.GetProp(local, "CCSPlayerResource", "m_iArmor");
    var health = Entity.GetProp(local, "CBasePlayer", "m_iHealth");
    var length = Entity.GetProp(c4, "CPlantedC4", "m_flTimerLength");
    var timer = (Entity.GetProp(c4, "CPlantedC4", "m_flC4Blow") - Globals.Curtime());
    var bar_length = (((Render.GetScreenSize()[1] - 50) / length) * (timer));
 
 
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
 
    if (dmg >= health)
        willKill = true;
    else
        willKill = false;
 
    timer = parseFloat(timer.toPrecision(3));
    big_font = Render.AddFont("Arial Black", 16, 50);
    small_font = Render.AddFont("Arial Black", 12, 50);
    if (willKill) {
        Render.StringCustom(15, Render.GetScreenSize()[1] - 80, 0, "LETHAL", [255, 0, 0, 255], big_font);
    } else if (damage > 10) {
        Render.StringCustom(5, Render.GetScreenSize()[1] - 80, 0, "" + dmg, [255, 255, 255, 255], big_font);
    }
 
    if (timer > 0) {
        Render.StringCustom(5, (bar_length + 20), 0, getSite(c4) + timer, [255, 255, 255, 255], small_font);
    }
 
    Render.GradientRect(5, 10, 8, bar_length + 10, 0, [255, 0, 0, 200], [0, 255, 0, 100]);
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