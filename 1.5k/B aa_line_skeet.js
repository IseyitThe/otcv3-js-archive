UI.AddLabel("            -----AA Lines-----");
UI.AddSliderInt("Length", 1, 200);
UI.AddColorPicker("Real");
UI.AddColorPicker("Fake");
UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Fake", [255,0,0,255]);
UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Real", [0,255,0,255]);
UI.AddLabel("         --------------------------");

function getVector(yaw, str){

    //yaw = Local.GetFakeYaw();
    local = Entity.GetLocalPlayer();
    base_pos = Entity.GetEyePosition(local);
    feet_pos = Entity.GetHitboxPosition(local, 11);

    x1 = base_pos[0];
    y1 = base_pos[1];

    x2 = getUIVal("Length") * Math.cos(yaw * (Math.PI/180)) + x1;
    y2 = getUIVal("Length") * Math.sin(yaw * (Math.PI/180)) + y1;
    z = feet_pos[2];

    return Render.WorldToScreen([x2,y2,z]);

}

function getUIVal(str){
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", str);
}

function getColor(str){
    return UI.GetColor("Misc", "JAVASCRIPT", "Script items", str);
}

function draw(){

    local = Entity.GetLocalPlayer();
    if(!Entity.IsValid(local) || !Entity.IsAlive(local))
      return;
    base_world_pos = Entity.GetEyePosition(local);
    feet_pos = Entity.GetHitboxPosition(local, 11);
    base_pos1 = Render.WorldToScreen([base_world_pos[0], base_world_pos[1], feet_pos[2]]);


    fake1 = getVector(Local.GetFakeYaw(), "Fake");
    real1 = getVector(Local.GetRealYaw(), "Real");

    Render.Line(base_pos1[0], base_pos1[1], fake1[0], fake1[1], getColor("Fake"));
    Render.Line(base_pos1[0], base_pos1[1], real1[0], real1[1], getColor("Real"));
    Render.String( fake1[0] - 9, fake1[1] + 11, 0, "FAKE", [0,0,0,255], 3 );
    Render.String( real1[0] - 9, real1[1] + 11, 0, "REAL", [0,0,0,255], 3 );
    Render.String( fake1[0] - 10, fake1[1] + 10, 0, "FAKE", getColor("Fake"), 3 );
    Render.String( real1[0] - 10, real1[1] + 10, 0, "REAL", getColor("Real"), 3 );

}

Cheat.RegisterCallback("Draw", "draw");
