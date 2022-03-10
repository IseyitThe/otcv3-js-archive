var flipper = 1;
function doFlip() { 
    flipper *= -1;
}

var font = false;
function drawAALine(angle, len, color, text) {
    var origin = Entity.GetProp(Entity.GetLocalPlayer(), "DT_BaseEntity", "m_vecOrigin");
    
    var angleRad = angle * (Math.PI / 180);
    var endPos = [origin[0], origin[1], origin[2]];
    endPos[0] += Math.cos(angleRad) * len;
    endPos[1] += Math.sin(angleRad) * len;
    
    var originScreen = Render.WorldToScreen(origin);
    var endScreen = Render.WorldToScreen(endPos);
    
    Render.Line(originScreen[0], originScreen[1], endScreen[0], endScreen[1], color);
    Render.String(endScreen[0]+1, endScreen[1]+1, 1, text, [0,0,0,255], font);
    Render.String(endScreen[0], endScreen[1], 1, text, color, font);
}

function render() {
    font = Render.GetFont("Arial.ttf", 12, true);
    
    // Draw Antiaim Lines
    if (Entity.IsValid(Entity.GetLocalPlayer())) {
        drawAALine(Local.GetFakeYaw(), 40, [0, 150, 255, 255], "FAKE");
        drawAALine(Local.GetRealYaw(), 45, [255, 0, 0, 255], "REAL");
        
        var delta = Math.abs(Math.round(Local.GetFakeYaw() - Local.GetRealYaw()));
        if (delta > 180) { // Angle normalize
            delta -= 360;
        }

        drawAALine(Local.GetRealYaw(), 0, [255, 255, 255, 255], "DELTA: " + Math.abs(delta));
    }
}

var lastMove = false; // If we were moving last tick
var low = false; // Low delta
var ticker = 0; // Ticker for timing
function run() {
    ticker++;
    var v = Entity.GetProp(Entity.GetLocalPlayer(), "DT_CSPlayer", "m_vecVelocity[0]");
    var speed = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
    var shouldSwitch = (speed > 1) != lastMove;
    var crouch = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_flDuckAmount") > 0.4;
    
    var deviator = Math.round(Globals.Realtime()*300) % 100;
    deviator /= 1000;
    var mult = flipper;

    // Helps prevent side logging
    if (shouldSwitch && deviator > 0.4) {
        flipper *= -1;
        if (deviator > 0.6) {
            low = !low;
        }
    }
    
    AntiAim.SetOverride(1);
    if (speed < 1) { // Standing AA
        AntiAim.SetLBYOffset(-60 * mult + deviator*6*mult);
        AntiAim.SetRealOffset(-14 * mult);
        AntiAim.SetFakeOffset(5 * mult * deviator);
    } else { // Moving AA
        var delta = 51 * flipper; // Don't use maxdelta to prevent resolver logging
        
        // Low delta
        if (low) {
            delta /= 5;
            
            // Trick (some) resolvers into thinking we are high-delta
            // by occasionally flicking to max delta
            if (ticker % 20 == 0) {
                delta *= 8; // This should trigger animlayer check (not sure tho)
            }
        }
        
        AntiAim.SetRealOffset(delta);
        AntiAim.SetFakeOffset(-delta/2);
    }
    
    lastMove = speed > 1; // Set move for next tick
}

Cheat.RegisterCallback("bullet_impact", "doFlip");
Cheat.RegisterCallback("CreateMove", "run");

// Comment out this line if you don't want the REAL and FAKE lines.
Cheat.RegisterCallback("Draw", "render");