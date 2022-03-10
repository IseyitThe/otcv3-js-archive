function main() {
    Cheat.RegisterCallback("Draw", "killCounterDrawFunc");
    Cheat.RegisterCallback("ragebot_fire", "rFireFunc");
    Cheat.RegisterCallback("player_hurt", "pHurtFunc");
    Cheat.RegisterCallback("round_start", "wipeFunc");
    
    UI.AddCheckbox("Rainbow text:");
}

function wipeFunc() {
    
}

function killCounterDrawFunc() {
    screenSize = Render.GetScreenSize();
    textHeight = 30;
    midScreenY = screenSize[1] / 4;
    
    textColor = [255, 255, 255, 255];
    
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Rainbow text:")) {
        rainbowCol = HSVtoRGB(Globals.Realtime() * 0.5, 1, 1);
        textColor = [rainbowCol.r, rainbowCol.g, rainbowCol.b, 255];
    }
    
    //Hits
    Render.String(0, midScreenY, 0, "Hits: " + hits.toString(), textColor);
    
    //Misses
    Render.String(0, midScreenY - textHeight, 0, "Misses: " + misses.toString(), textColor);
    
    //Percentage
    Render.String(0, midScreenY - (textHeight * 2), 0, hits.toString() + " / " + totalShots.toString() + " = " + percentageStr.toString() + "%", textColor);
}

function recalculate() {
    totalShots = hits + misses;
    percentage = (hits / totalShots) * 100;
    percentageStr = percentage.toString();
    if (percentageStr.length > 5) {
        percentageStr = percentageStr.substring(0, 4)
    }
}

function rFireFunc() {
    misses++;
    recalculate();
}

function pHurtFunc() {
    if (Entity.GetLocalPlayer() == Entity.GetEntityFromUserID(Event.GetInt("attacker"))) {
        
        if (misses != 0) {misses--;}
        
        hits++;
        recalculate();
    }
}

totalShots = 0;
misses = 0;
hits = 0;
percentage = 0;
percentageStr = "0";

main();










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



function getRandomInt(min, max) {
    return Math.floor((Math.random() * (max + 1)) + min);
}