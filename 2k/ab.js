function vec_sub(A, B)
{
    var C = []
    var i;
    for (i = 0; i < 3; i++) {
        C[i] = A[i] - B[i]
    }
    return C
}

function vec_div(A, B)
{
    var C = []
    var i;
    for (i = 0; i < 3; i++) {
        C[i] = A[i] / B
    }
    return C
}

function vec_add(A, B)
{
    var C = []
    var i;
    for (i = 0; i < 3; i++) {
        C[i] = A[i] + B[i]
    }
    return C
}

function vec_mul(A, B)
{
    var C = []
    var i;
    for (i = 0; i < 3; i++) {
        C[i] = A[i] * B
    }
    return C
}

function dotProduct(A, B) 
{ 
    var product = 0.0
    var i;
    for (i = 0; i < 3; i++) {
        product += A[i] * B[i]
    }
    return product; 
} 

function getDistance(A, B)
{
    var delta = vec_sub(A, B)
    return Math.sqrt(delta[0]*delta[0]+delta[1]*delta[1]+delta[2]*delta[2])
}

function computeDistance(A, B, C) 
{
    var d = vec_div(vec_sub(C, B), getDistance(C, B)) // vec3
    var v = vec_sub(A, B) // vec3
    var t = dotProduct(v, d) // vec3
    var P = vec_add(B, vec_mul(d, t))
    return getDistance(P,A)
}

UI.AddSliderInt("Max Brute Distance", 0, 60)
UI.AddCheckbox("Anti-Onetap ;)")
var shots = 0 
function onBulletImpact(){
    var ent = Entity.GetEntityFromUserID(Event.GetInt("userid"))
    var local = Entity.GetLocalPlayer()
    if(ent == local || Entity.IsTeammate(ent))
        return
    var pos = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")]
    var delta = computeDistance(Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0), Entity.GetEyePosition(ent), pos)
    Cheat.Print(delta + " delta\n")
    if(delta < UI.GetValue("Max Brute Distance"))
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter")
    if(UI.GetValue("Anti-Onetap")){
        shots++
        if(!(shots % 4)) UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter")
    }
}
function playerhurt(){
    if(Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer())
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter")
}
Cheat.RegisterCallback("player_hurt", "playerhurt")
Cheat.RegisterCallback("bullet_impact", "onBulletImpact")