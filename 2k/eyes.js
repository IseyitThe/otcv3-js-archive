/*
    by kseny
*/

function degreesToRadians(degress)
{
    return degress * Math.PI / 180.0;
}

function angle_to_vec(pitch, yaw)
{
    var p = degreesToRadians(pitch);
    var y = degreesToRadians(yaw)

    var sin_p = Math.sin(p);
    var cos_p = Math.cos(p);
    var sin_y = Math.sin(y);
    var cos_y = Math.cos(y);

    return [cos_p*cos_y, cos_p*sin_y, -sin_p];
}

function onDrawEvent()
{
    if(!UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Eye Tracers"))
        return;

    var color = UI.GetColor("MISC", "JAVASCRIPT", "Script Items", "Eye tracers color");

    var localPlayer = Entity.GetLocalPlayer();

    if(!localPlayer)
        return;

    var playerList = Entity.GetEnemies();

    for(var i = 0; i < playerList.length; i++)
    {
        if(!Entity.IsAlive(playerList[i]) || Entity.IsDormant(playerList[i]))
            continue;

        var eyeAngles = Entity.GetProp(playerList[i], "CCSPlayer", "m_angEyeAngles");
        var e_V = angle_to_vec(eyeAngles[0], eyeAngles[1]);

        var entityHead = Entity.GetHitboxPosition(playerList[i], 0); //HITBOX_HEAD

        var stop = [entityHead[0] + e_V[0] * 8192, entityHead[1] + e_V[1] * 8192, entityHead[2] + e_V[2] * 8192];

        var traceResult = Trace.Line(playerList[i], entityHead, stop);

        if(traceResult[1] == 1.0)
            continue;

        stop = [entityHead[0] + e_V[0] * traceResult[1] * 8192, entityHead[1] + e_V[1] * traceResult[1] * 8192, entityHead[2] + e_V[2] * traceResult[1] * 8192];

        entityHead = Render.WorldToScreen(entityHead);
        stop = Render.WorldToScreen(stop);

        if(stop[2] != 1 || entityHead[2] != 1)
            continue;

        Render.Line(entityHead[0], entityHead[1], stop[0], stop[1], color);
    }
}

function onScriptLoad()
{
    Global.RegisterCallback("Draw", "onDrawEvent");

    UI.AddCheckbox("Eye Tracers");
    UI.AddColorPicker("Eye tracers color");

    var colorOnInit = UI.GetColor("MISC", "JAVASCRIPT", "Script Items", "Eye tracers color");

    if(colorOnInit[0] == 0 && colorOnInit[1] == 0 && colorOnInit[2] == 0 && colorOnInit[3] == 0)
        UI.SetColor("MISC", "JAVASCRIPT", "Script Items", "Eye tracers color", [255, 255, 255, 255]);
}

onScriptLoad();