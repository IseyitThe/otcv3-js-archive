UI.AddCheckbox("Local Bullet Tracer");

var x = 0, y = 0, z = 0;
var eye_angles = [0, 0, 0];
var wts_impact = [0, 0, 0];
var render_time = 0;

function bullet_impact() {
    if (!UI.GetValue("Local Bullet Tracer"))
        return;

    player = Event.GetInt("userid");
    player_id = Entity.GetEntityFromUserID(player);
    impact_x = Event.GetFloat("x"), impact_y = Event.GetFloat("y"), impact_z = Event.GetFloat("z");

    if ( Entity.GetLocalPlayer( ) !== player_id )
        return;

    x = impact_x;
    y = impact_y;
    z = impact_z;

    eye_angles = Entity.GetEyePosition(Entity.GetLocalPlayer());
    render_time = Globals.Curtime();
}

function draw() {
    if (!UI.GetValue("Local Bullet Tracer"))
        return;

    wts_impact = Render.WorldToScreen([x, y, z]);
    wts_eye_angles =  Render.WorldToScreen([eye_angles[0], eye_angles[1], eye_angles[2]]);

    if (wts_impact[2] === 1 && wts_eye_angles[2] === 1//remove this and experience a mess
        && (Globals.Curtime() - render_time) < 4)     //4s just as the client/server impacts
        Render.Line(wts_eye_angles[0], wts_eye_angles[1], wts_impact[0], wts_impact[1], [255,255,0,230]);
}

Cheat.RegisterCallback("bullet_impact", "bullet_impact");
Cheat.RegisterCallback("Draw", "draw");