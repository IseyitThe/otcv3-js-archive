UI.AddCheckbox("Grenade warning");

var positions = [];
var trace = [];
var render = [];
var local = Entity.GetLocalPlayer();

function Clamp(v, min, max)
{
    return Math.max(Math.min(v, max), min);
}

render.arc = function(x, y, r1, r2, s, d, col)
{
    for (var i = s; i < s + d; i++)
    {

        var rad = i * Math.PI / 180;

        Render.Line(x + Math.cos(rad) * r1, y + Math.sin(rad) * r1, x + Math.cos(rad) * r2, y + Math.sin(rad) * r2, col);
    }
}

function ImportGrenades()
{
    var grenades = Entity.GetEntitiesByClassID(9).concat(Entity.GetEntitiesByClassID(113).concat(Entity.GetEntitiesByClassID(100)));
    for (e in grenades)
    {
        pass = false;
        for (g in positions)
        {
            if (positions[g][0] == grenades[e])
            {
                pass = true;
                continue;
            }
        }
        if (pass)
            continue;

        positions.push([grenades[e], Globals.Curtime(), [Entity.GetRenderOrigin(grenades[e])], Globals.Curtime()]);
    }
}

function GrenadeWarning()
{
    var grenades = Entity.GetEntitiesByClassID(9).concat(Entity.GetEntitiesByClassID(113).concat(Entity.GetEntitiesByClassID(100)));
    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Grenade warning"))
    {
        if (!Entity.IsAlive(local))
            return;
        
        for (g in grenades)
        {
            for (var i = 0; i < grenades.length; i++)
            {
                var g = grenades[i];
                var isInferno = Entity.GetClassID(g) === 100;
                var isHeGrenade = Entity.GetClassID(g) === 9;
                var DistanceInFeet = function(origin, destination)
                {
                    var sub = [destination[0] - origin[0], destination[1] - origin[1], destination[2] - origin[2]];
                    return Math.round(Math.sqrt(sub[0] ** 2 + sub[1] ** 2 + sub[2] ** 2) / 12);
                }
                var destination = Entity.GetRenderOrigin(g);
                var origin = Entity.GetEyePosition(local);
                var distance = DistanceInFeet(origin, destination);
                var screen = Render.WorldToScreen(destination);
                var isSafe = distance > (isInferno ? 15 : 20) || trace[1] < 0.61;

                if (distance > 256)
                {
                    continue;
                }

                if (isHeGrenade && Entity.GetProp(g, "CBaseCSGrenadeProjectile", "m_nExplodeEffectTickBegin"))
                {
                    continue;
                }

                Render.FilledCircle(screen[0], screen[1] -50, 30, !isSafe ? [225, 20, 20, 175 ] : [20, 20, 20, 175])
                Render.String(screen[0], screen[1] - 75, 1, "!", [255, 250, 175, 200], 4);
                Render.String(screen[0], screen[1] - 40, 1, distance + " ft", [232, 232, 232, 200], 3);

                if (isInferno)
                {
                    time = Entity.GetProp(g, "CInferno", "m_nFireEffectTickBegin") * Globals.TickInterval();
                    factor = Clamp(((time + 7) - Globals.Curtime()) / 7, 0, 7);
        
                    render.arc(screen[0], screen[1] - 50, 30, 32, -90, 360 * factor, [232, 232, 232, 200]);
                }
            }
        }
    }
}

function onDraw()
{
    ImportGrenades();
    GrenadeWarning();
}

Cheat.RegisterCallback("Draw", "onDraw");