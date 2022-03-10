var wepList = {
    0: "Auto",
    1: "AWP",
    2: "Scout",
    3: "Rifle",
    4: "SMG",
    5: "Heavy Pistol",
    6: "Deagle",
    7: "Pistol",
    8: "Heavy"
};
var gen_weps = [
    "SMG",
    "Rifle",
    "Heavy"
]
var no_dt_weps = [
    "AWP",
    "Scout",
    "Heavy Pistol"
]
var wepname_category = {
    "usp s": "Pistol",
    "glock 18": "Pistol",
    "p2000": "Pistol",
    "dual berettas": "Pistol",
    "r8 revolver": "Heavy Pistol",
    "desert eagle": "Heavy Pistol",
    "p250": "Pistol",
    "tec 9": "Pistol",
    "mp9": "SMG",
    "mac 10": "SMG",
    "pp bizon": "SMG",
    "ump 45": "SMG",
    "ak 47": "Rifle",
    "sg 553": "Rifle",
    "aug": "Rifle",
    "m4a1 s": "Rifle",
    "m4a4": "Rifle",
    "ssg 08": "Scout",
    "awp": "AWP",
    "g3sg1": "Auto",
    "scar 20": "Auto",
    "nova": "Heavy",
    "xm1014": "Heavy",
    "mag 7": "Heavy",
    "m249": "Heavy",
    "negev": "Heavy"
};
var target = -1;
var x = 500;
var y = 200;
setup();
function setup() {
    UI.AddLabel("___________________________________");
    UI.AddLabel("#    Adaptive Hitchance V2    #")
    UI.AddLabel("   ------------------------------    ")
    UI.AddCheckbox("AHC2 Player Indicator");
    UI.AddColorPicker("AHC2 Player Indicator Color");
    UI.AddDropdown("AHC2 Indicator Type", ["x", "o", "!"]);
    UI.AddCheckbox("AHC2 HC Indicator");
    UI.AddColorPicker("AHC2 HC Indicator Color");
    UI.AddDropdown("Calculation mode", ["Increasing", "Decreasing"]);
    UI.AddCheckbox("[EXP] Account for target damage");
    UI.AddLabel("   ------------------------------    ")
    UI.AddDropdown("AHC2 Configuration", ["Auto", "AWP", "Scout", "Rifle", "SMG", "Heavy Pistol", "Deagle", "Pistol", "Heavy"]);
    for(i in wepList) {
        UI.AddCheckbox(wepList[i] + " enabled");
        UI.AddCheckbox(wepList[i] + " agressive playstyle")
        UI.AddCheckbox(wepList[i] + " account for inaccuracy")
        UI.AddSliderInt(wepList[i] + " minimum hitchance", 0, 100);
        UI.AddSliderInt(wepList[i] + " maximum hitchance", 0, 100);
        if(!~no_dt_weps.indexOf(wepList[i])) {
            UI.AddCheckbox(wepList[i] + " doubletap hitchance");
            UI.AddSliderInt(wepList[i] + " minimum doubletap hitchance", 0, 100);
            UI.AddSliderInt(wepList[i] + " maximum doubletap hitchance", 0, 100);
        }
        UI.AddCheckbox(wepList[i] + " override in air hitchance");
        UI.AddSliderInt(wepList[i] + " air hitchance", 0, 100);
        UI.SetEnabled(wepList[i] + " override", false);
        UI.SetEnabled(wepList[i] + " agressive playstyle", false);
        UI.SetEnabled(wepList[i] + " account for inaccuracy", false)
        UI.SetEnabled(wepList[i] + " minimum hitchance", false);
        UI.SetEnabled(wepList[i] + " maximum hitchance", false);
        if(!~no_dt_weps.indexOf(wepList[i])) {
            UI.SetEnabled(wepList[i] + " doubletap hitchance", false);
            UI.SetEnabled(wepList[i] + " minimum doubletap hitchance", false);
            UI.SetEnabled (wepList[i] + " maximum doubletap hitchance", false);
        }
        UI.SetEnabled(wepList[i] + " override in air hitchance", false)
        UI.SetEnabled(wepList[i] + " air hitchance", false);
    }
    UI.AddLabel("___________________________________");
}
function menuVisibility() {
    opts = UI.GetString("Script items", "AHC2 Configuration");
    for(i in wepList) {
        UI.SetEnabled(wepList[i] + " enabled", opts == wepList[i]);
        UI.SetEnabled(wepList[i] + " agressive playstyle", opts == wepList[i]);
        UI.SetEnabled(wepList[i] + " account for inaccuracy", opts == wepList[i]);
        UI.SetEnabled(wepList[i] + " minimum hitchance", opts == wepList[i]);
        UI.SetEnabled(wepList[i] + " maximum hitchance", opts == wepList[i]);
        if(!~no_dt_weps.indexOf(wepList[i])) {
            UI.SetEnabled(wepList[i] + " doubletap hitchance", opts == wepList[i]);
            UI.SetEnabled(wepList[i] + " minimum doubletap hitchance", opts == wepList[i] && UI.GetValue(wepList[i] + " doubletap hitchance"));
            UI.SetEnabled (wepList[i] + " maximum doubletap hitchance", opts == wepList[i] && UI.GetValue(wepList[i] + " doubletap hitchance"));
        }
        UI.SetEnabled(wepList[i] + " override in air hitchance", opts == wepList[i])
        UI.SetEnabled(wepList[i] + " air hitchance", opts == wepList[i] && UI.GetValue("Script items", wepList[i] + " override in air hitchance"));
    }
}
function drawIndicator() {
    var local = Entity.GetLocalPlayer();
    hc = ~gen_weps.indexOf(weaponType()) ? UI.GetValue("Rage", "GENERAL", "Accuracy", "Hitchance") : UI.GetValue("Rage", weaponType().toUpperCase(), "Accuracy", "Hitchance");
    if(UI.GetValue("Script items", "AHC2 HC Indicator") && weaponType() != "") {
        font = Render.AddFont("Inria Sans", 15, 100);
        shadow(Render.TextSizeCustom("Hitchance - " + hc, font)[0]/1.5, Render.GetScreenSize()[1]/2, 1, "Hitchance - " + hc, true, font, UI.GetColor("Script items", "AHC2 HC Indicator Color"), 15);
    }
    if(!Entity.IsAlive(local)) return;
    if(!Entity.IsAlive(target) || !Entity.IsValid(target) || target == -1) {
        target = closestTarget();
        if(!Entity.IsValid(target))
            return;
    }
    if(UI.GetValue("Script items", "AHC2 Player Indicator")) {
        target_world_pos = Render.WorldToScreen(Entity.GetHitboxPosition(target, 0));
        if(target_world_pos == undefined) return;
        Render.String(target_world_pos[0], target_world_pos[1], 1, UI.GetString("Script items", "AHC2 Indicator Type"), UI.GetColor("Script items", "AHC2 Player Indicator Color"), 20);
    }
}
function setHC() {
    var local = Entity.GetLocalPlayer();
    var weapon = weaponType();
    if(Entity.GetName(Entity.GetWeapon(local)) == "desert eagle")
        weapon = "Deagle";
    if(!UI.GetValue(weapon + " enabled")) return;
    var rbot_target = Ragebot.GetTarget();
    if(Entity.IsAlive(rbot_target) && Entity.IsValid(rbot_target))
        target = rbot_target;
    air_hc = UI.GetValue("Script items", weapon + " air hitchance");
    min_hc = UI.GetValue("Script items", weapon + " minimum hitchance");
    max_hc = UI.GetValue("Script items", weapon + " maximum hitchance");
    min_dt_hc = UI.GetValue("Script items", weapon + " minimum doubletap hitchance");
    max_dt_hc = UI.GetValue("Script items", weapon + " maximum doubletap hitchance");
    distance = calcDist(Entity.GetHitboxPosition(local, 0), Entity.GetHitboxPosition(target, 0));
    if(max_hc < min_hc) {
        UI.SetValue("Script items", weapon + " minimum hitchance", max_hc);
    }
    if(max_dt_hc < min_dt_hc) {
        UI.SetValue("Script items", weapon + " minimum doubletap hitchance", max_dt_hc);
    }
    if(!Entity.IsValid(target) || !Entity.IsAlive(target) || Entity.IsDormant(target)) {
        target = closestTarget();
        if(!Entity.IsValid(target))
            return;
    }
    if(in_air(local) && UI.GetValue(weapon + " override in air hitchance")) {
        if(~gen_weps.indexOf(weapon))
            UI.SetValue("Rage", "GENERAL", "Accuracy", "Hitchance", air_hc);
        else {
            if(weapon == "Deagle")
                UI.SetValue("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance", UI.GetValue("Script items", weapon + " air hitchance"));
            else
                UI.SetValue("Rage", weapon.toUpperCase(), "Accuracy", "Hitchance", UI.GetValue("Script items", weapon + " air hitchance"));
        }
    }
    if(UI.GetValue("Script items", weapon + " doubletap hitchance")) {
        hc = dtEquation(min_dt_hc, max_dt_hc, distance);
        hc = calculateFinal(hc, min_dt_hc, max_dt_hc, UI.GetValue("Script items", weapon + " account for inaccuracy"), UI.GetValue("Script items", weapon + " agressive playstyle"), distance);
        UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap hitchance", hc)
    }
    if(in_air(local)) return;
    hc = hcEquation(min_hc, max_hc, distance);
    hc = calculateFinal(hc, min_hc, max_hc, UI.GetValue("Script items", weapon + " account for inaccuracy"), UI.GetValue("Script items", weapon + " agressive playstyle"), distance);
    if(hc < min_hc)
        hc = min_hc;
    if(~gen_weps.indexOf(weapon))
        UI.SetValue("Rage", "GENERAL", "Accuracy", "Hitchance", hc);
    else {
        if(weapon == "Deagle")
            UI.SetValue("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance", hc);
        else
            UI.SetValue("Rage", weapon.toUpperCase(), "Accuracy", "Hitchance", hc);
    }
}
/* HELPER FUNCTIONS */
// clean dist func, thanks rzr
function calcDist(a, b)
{
    x = a[0] - b[0];
    y = a[1] - b[1];
    z = a[2] - b[2];
    return Math.sqrt( x * x + y * y + z * z );
}
function inacc_calc() {
    return [Local.GetInaccuracy() * 55, Local.GetInaccuracy() * .15];
}
function in_air(index) {
    fv = Entity.GetProp(index, "CBasePlayer", "m_flFallVelocity");
    return (fv < -1 || fv > 1);
}
function closestTarget() {
    var local = Entity.GetLocalPlayer();
    var enemies = Entity.GetEnemies();
    var dists = [];
    var damage = [];
    for(e in enemies) {
        if(!Entity.IsAlive(enemies[e]) || Entity.IsDormant(enemies[e]) || !Entity.IsValid(enemies[e])) continue;
        dists.push([enemies[e], calcDist(Entity.GetHitboxPosition(local, 0), Entity.GetHitboxPosition(enemies[e], 0))]);
        if(Entity.IsAlive(local)) {
            result = Trace.Bullet(enemies[e], local, Entity.GetHitboxPosition(local, 0), Entity.GetHitboxPosition(enemies[e], 0));  
            damage.push([enemies[e], result]);
        }
    }
    dists.sort(function(a, b)
    {
        return a[1] - b[1];
    });
    damage.sort(function(a, b)
    {
        return a[1][1] - b[1][1];
    });
    if(dists.length == 0 || dists == []) return target = -1;
    if(damage.length != 0 && damage != [] && Entity.IsAlive(local)) {
        result = Trace.Bullet(dists[0][0], local, Entity.GetHitboxPosition(local, 0), Entity.GetHitboxPosition(dists[0][0], 0));
        if(result[1] > damage[0][1][1] && UI.GetValue("Script items", "[EXP] Account for target damage")) {
            Cheat.Print(result[1] + " :: " + damage[0][1][1] + "\n");
            return damage[0][0];
        }
    }
    return dists[0][0];
}
function hcEquation(min, max, distance)
    {
        mode = UI.GetString("Script items", "Calculation mode");
        if (mode == "Decreasing")
            return Math.round(Math.min(Math.max((1 / 250) * (100 * (distance / 20)) + min, min), max));
        else
        if (mode == "Increasing")
            return Math.round(Math.min(Math.max((-1 / 250) * (100 * (distance / 20)) + max, min), max));
    }
function dtEquation(min, max, distance)
{
    mode = UI.GetString("Script items", "Calculation mode");
    if (mode == "Decreasing")
        return Math.round(Math.min(Math.max((1 / 125) * (100 * (distance / 20)) + min, min), max));
    else
    if (mode == "Increasing")
        return Math.round(Math.min(Math.max((-1 / 125) * (100 * (distance / 20)) + max, min), max));
}
function calculateFinal(input, min, max, inacc, agressive) {
    final = input;
    if(inacc)
        final -= inacc_calc()[0];
    if(agressive)
        final -= 15;
    return Math.min(Math.max(final, min), max);
}
function weaponType()
{
    var local = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(local));
    if(wepname_category[weapon] == undefined)
      return "";
    return wepname_category[weapon];
}
function shadow(x,y,align,text,custom,font,color,size) {
    if(custom) {
        Render.StringCustom(x+((size/7.17)),y+((size/7.17)),align,text,[0,0,0,255],font);
        Render.StringCustom(x,y,align,text,color,font);
    } else {
        Render.String(x+((size/7.17)),y+((size/7.17)),align,text,[0,0,0,255],size);
        Render.String(x,y,align,text,color,size);
    }
}
/* END HELPER FUNCTIONS */
/* CALLBACKS */
Cheat.RegisterCallback("Draw", "menuVisibility");
Cheat.RegisterCallback("Draw", "drawIndicator");
Cheat.RegisterCallback("CreateMove", "setHC");