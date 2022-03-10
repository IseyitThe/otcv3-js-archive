/* Global Variables */
var local = Entity.GetLocalPlayer();
var targetIndex = -1;
var target = -1;
var distance;
var rageTarget = 0;
var rbotShots = 0;
var target = -1;
var lastShot;
var waiting;
/* ---------------- */
setup();
/* Functions */
function calcDist(local, target)
{
    lx = local[0];
    ly = local[1];
    lz = local[2];
    tx = target[0];
    ty = target[1];
    tz = target[2];
    dx = lx - tx;
    dy = ly - ty;
    dz = lz - tz;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function pickTarget()
{
    if (!UI.GetValue("Script Items", "[AHC] Enable Adaptive Hitchance") || !Entity.IsAlive(local))
        return;
    if (target == undefined || target == -1 || !Entity.IsValid(target) || !Entity.IsAlive(target))
    {
        if (rageTarget == 1)
        {
            waiting = 1;
        }
    }
    if (secondsElapsed >= 5)
    {
        rageTarget = 0;
        secondsElapsed = 0;
        waiting = 0;
    }
    var enemies = Entity.GetEnemies();
    var tempGuess = -1;
    var localPos = Entity.GetHitboxPosition(local, 5);
    for (var i = 0; i < enemies.length; i++)
    {
        if (!Entity.IsValid(enemies[i]) || !Entity.IsAlive(enemies[i]))
        {
            continue;
        }
        if (tempGuess == undefined || !Entity.IsValid(tempGuess) || !Entity.IsAlive(tempGuess) || Entity.IsDormant(
                tempGuess))
        {
            tempGuess = enemies[i];
            continue;
        }
        targetPos = Entity.GetHitboxPosition(tempGuess, 5);
        enemyPos = Entity.GetHitboxPosition(enemies[i], 5);
        if (calcDist(localPos, enemyPos) < calcDist(localPos, targetPos))
        {
            tempGuess = enemies[i];
            continue;
        }
    }
    targetIndex = tempGuess;
    targetPos = Entity.GetHitboxPosition(targetIndex, 5);
    if (rageTarget == 0)
        adjustHitchance(calcDist(localPos, targetPos));
}

function onShot()
{
    if (!UI.GetValue("Script Items", "[AHC] Enable Adaptive Hitchance"))
        return;
    target = Event.GetInt("target_index");
    if (!Entity.IsValid(targetIndex) || !Entity.IsAlive(targetIndex) || !Entity.IsDormant(targetIndex))
    {
        waiting = 1;
        target = -1;
        return;
    }
    targetIndex = target;
    rageTarget = 1;
    secondsElapsed = 0;
    targetPos = Entity.GetHitboxPosition(targetIndex, 5);
    localPos = Entity.GetHitboxPosition(local, 5);
    adjustHitchance(calcDist(localPos, targetPos));
}

function drawIndicator()
{
    if (!UI.GetValue("Script items", "[AHC] Show Indicators"))
        return;
    if(!Entity.IsAlive(local))
    	return;
    if (targetIndex == -1 || targetIndex == undefined)
    {
        return;
    }
    if (!Entity.IsValid(targetIndex) || !Entity.IsAlive(targetIndex))
    {
        return;
    }

    targetPos = Entity.GetHitboxPosition(targetIndex, 5);
    localPos = Entity.GetHitboxPosition(local, 5);

    if(calcDist(localPos, targetPos) >= 2000)
    	return;

    var worldPos = Entity.GetRenderOrigin(targetIndex);
    var loc = Render.WorldToScreen(worldPos);
    var color = UI.GetColor("Script items", "[AHC] Target Indicator");
    Render.Circle(loc[0], loc[1] - 142, 20, color);
    Render.String(loc[0] - 7, loc[1] - 160, 0, "!", color, 24);
}

function drawInMenu()
{
    var opts = UI.GetString("[AHC] Weapon Config");
    UI.SetEnabled("Script items", "Auto Max HC", opts == "Auto");
    UI.SetEnabled("Script items", "Auto Min HC", opts == "Auto");
    UI.SetEnabled("Script items", "AWP Max HC", opts == "AWP");
    UI.SetEnabled("Script items", "AWP Min HC", opts == "AWP");
    UI.SetEnabled("Script items", "Scout Max HC", opts == "Scout");
    UI.SetEnabled("Script items", "Scout Min HC", opts == "Scout");
    UI.SetEnabled("Script items", "Rifle Max HC", opts == "Rifles");
    UI.SetEnabled("Script items", "Rifle Min HC", opts == "Rifles");
    UI.SetEnabled("Script items", "SMG Max HC", opts == "SMG");
    UI.SetEnabled("Script items", "SMG Min HC", opts == "SMG");
    UI.SetEnabled("Script items", "Heavy Pistol Max HC", opts == "Heavy Pistol");
    UI.SetEnabled("Script items", "Heavy Pistol Min HC", opts == "Heavy Pistol");
    UI.SetEnabled("Script items", "Pistol Max HC", opts == "Pistols");
    UI.SetEnabled("Script items", "Pistol Min HC", opts == "Pistols");
}

function weaponType()
{
    var weapon = Entity.GetName(Entity.GetWeapon(local));
    var weapons = {
        "usp s": "Pistol",
        "glock 18": "Pistol",
        "p2000": "Pistol",
        "dual berettas": "Pistol",
        "r8 revolver": "Heavy Pistol",
        "desert eagle": "Heavy Pistol",
        "p250": "Pistol",
        "tec9": "Pistol",
        "mp9": "SMG",
        "mac 10": "SMG",
        "ump 45": "SMG",
        "ak 47": "Rifle",
        "sg 553": "Rifle",
        "aug": "Rifle",
        "m4a1 s": "Rifle",
        "m4a4": "Rifle",
        "ssg 08": "Scout",
        "awp": "AWP",
        "g3sg1": "Auto",
        "scar 20": "Auto"
    };
    return weapons[weapon];
}

function adjustHitchance(distance)
{
    if (weaponType() == undefined)
        return;

    maxHC = UI.GetValue("Script items", weaponType() + " Max HC", "Integer");
    minHC = UI.GetValue("Script items", weaponType() + " Min HC", "Integer");

    if(weaponType() == undefined)
    	return;

    if (weaponType() == "SMG" || weaponType() == "Rifle")
        UI.SetValue("Rage", "GENERAL", "Accuracy", "Hitchance", hcEquation(minHC, maxHC));
    else
        UI.SetValue("Rage", weaponType().toUpperCase(), "Accuracy", "Hitchance", hcEquation(minHC, maxHC));

    function hcEquation(min, max)
    {	
    	if(UI.GetString("[AHC] Mode") == "Low to High")
        	return Math.round(Math.min(Math.max((1 / 250) * (100 * (distance / 20)) + min, min), max));
   		else
   		if(UI.GetString("[AHC] Mode") == "High to Low")
        	return Math.round(Math.min(Math.max((-1 / 250) * (100 * (distance / 20)) + max, min), max));
    }
}

function setup()
{
    UI.AddCheckbox("[AHC] Enable Adaptive Hitchance");
    UI.AddCheckbox("[AHC] Show Indicators");
    UI.AddColorPicker("[AHC] Target Indicator");
    UI.SetColor("Script items", "[AHC] Target Indicator", [255, 0, 255, 255]);
    UI.AddDropdown("[AHC] Weapon Config", ["Auto", "Scout", "AWP", "Rifles", "SMG", "Pistols", "Heavy Pistol"]);
    UI.AddDropdown("[AHC] Mode", ["Low to High", "High to Low"]);
    UI.AddSliderInt("Auto Max HC", 0, 100);
    UI.AddSliderInt("Auto Min HC", 0, 100);
    UI.AddSliderInt("AWP Max HC", 0, 100);
    UI.AddSliderInt("AWP Min HC", 0, 100);
    UI.AddSliderInt("Scout Max HC", 0, 100);
    UI.AddSliderInt("Scout Min HC", 0, 100);
    UI.AddSliderInt("Rifle Max HC", 0, 100);
    UI.AddSliderInt("Rifle Min HC", 0, 100);
    UI.AddSliderInt("SMG Max HC", 0, 100);
    UI.AddSliderInt("SMG Min HC", 0, 100);
    UI.AddSliderInt("Heavy Pistol Max HC", 0, 100);
    UI.AddSliderInt("Heavy Pistol Min HC", 0, 100);
    UI.AddSliderInt("Pistol Max HC", 0, 100);
    UI.AddSliderInt("Pistol Min HC", 0, 100);
    Global.PrintColor([255, 75, 100, 25],
        "\n------------------------\n[AHC] v0.5 by Ultranite\n------------------------\n");
}
runTime = Global.Curtime();
var secondsElapsed = 0;

function check()
{
    if (waiting == 1)
    {
        if (Global.Curtime() - runTime > 1)
        {
            secondsElapsed += 1;
            runTime = Global.Curtime();
        }
    }
}
Global.RegisterCallback('Draw', 'check');
/* --------- */
/* Callbacks */
Global.RegisterCallback("Draw", "pickTarget");
Global.RegisterCallback("Draw", "drawIndicator");
Global.RegisterCallback("Draw", "drawInMenu");
Global.RegisterCallback("ragebot_fire", "onShot");
/* --------- */