function main() {
    Cheat.RegisterCallback("Draw", "naderLoopFunc");
}

main();

function naderLoopFunc() {
    entList = Entity.GetPlayers();

    for (var i = 0; i < entList.length; i++) {
        currEnt = entList[i];

        entWeaponName = Entity.GetName(Entity.GetWeapon(currEnt));
        entPos = Entity.GetEyePosition(currEnt);
        entPos[2] += 20;
        entScreenPos = Render.WorldToScreen(entPos);
        test = Entity.GetProp(currEnt, "CBaseGrenade", "m_bIsLive");
        testSTR = test.toString();
     

        if (entWeaponName == "high explosive grenade" || entWeaponName == "molotov" || entWeaponName == "incendiary grenade") {
            foregroundColor = [230, 0, 0, 255];

            if (entScreenPos[2]) {

                drawWarning(entScreenPos[0], entScreenPos[1]);

       
            }

        }
        else if (entWeaponName == "flashbang") {
            foregroundColor = [200, 200, 40, 255];
            if (entScreenPos[2]) {
                drawWarning(entScreenPos[0], entScreenPos[1]);              
            }
        }
        else if (entWeaponName == "smoke grenade") {
            foregroundColor = [40, 96, 200, 255];
            if (entScreenPos[2]) {
                drawWarning(entScreenPos[0] + 30, entScreenPos[1] - 30);              
            }
        }

    }
}

backgroundColor = [40, 40, 40, 255];
foregroundColor = [230, 0, 0, 255];

function drawWarning(x, y) {

    radius = 20;
    for (var i = radius; i > 0; i--) {
        Render.Circle(x, y, i - 1, backgroundColor);
    }
    Render.Line(x - 1, y, x + 1, y, backgroundColor);

    Render.Circle(x, y, radius, foregroundColor );

    verdanaFont = Render.AddFont("Verdana", 15, 300);
    Render.StringCustom(x + 1, y - 13, 1, "!", foregroundColor, verdanaFont);
}
