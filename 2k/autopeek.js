var last = 0
function DEGTORAD(degrees) {
    return degrees * Math.PI / 180.0;
}
function anglevector(vec) {
    var p = DEGTORAD(vec[0]);
    var y = DEGTORAD(vec[1])
    var sin_p = Math.sin(p);
    var cos_p = Math.cos(p);
    var sin_y = Math.sin(y);
    var cos_y = Math.cos(y);
    return [cos_p * cos_y, cos_p * sin_y, -sin_p];
}
function distanceTo(start, end) {
    var final = []
    final[0] = end[0] - start[0]
    final[1] = end[1] - start[1]
    final[2] = end[2] - start[2]
    final[0] = Math.pow(final[0],2)
    final[1] = Math.pow(final[1],2)
    final[2] = Math.pow(final[2],2)
  
    return Math.pow(final[0] + final[1] + final[2],2)
}
function onCM(){
    if(!Entity.GetLocalPlayer() || !Entity.IsAlive(Entity.GetLocalPlayer()) || !Entity.IsValid(Entity.GetLocalPlayer()))
        return
    var weapon = Entity.GetWeapon(Entity.GetLocalPlayer())
    var delay = 40
    switch(weapon){
        case 84: delay = 90; break;
        case 86: delay = 24; break;
        case 208: delay = 24; break;
    }
  
    if(!UI.IsHotkeyActive("Misc", "GENERAL","Movement", "Auto peek") || last + delay > Globals.Tickcount())
        return
    var degrees = 360/10
    var enemies = Entity.GetEnemies()
    var best = -1
    var maxdist = 9999999999999999 * 9999999999999
    var local = Entity.GetLocalPlayer()
    var localeye = Entity.GetEyePosition(local)
    for(i = 0; i < enemies.length; i++){
        if(Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.GetProp(enemies[i], "DT_CSPlayer", "m_bGunGameImmunity")){
            var hitbox = Entity.GetHitboxPosition(enemies[i], 5)
            if(distanceTo(localeye, hitbox) < maxdist){
                maxdist = distanceTo(localeye, hitbox)
                best = enemies[i]
            }
        }
    }
    if(best == -1)
        return
  
    var bestest = [0,0,0]
    for(i = 0; i < 10; i++){
        var yaw = i * degrees
        var forward= anglevector([0,yaw,0])
        forward[0] *= 100
        forward[1] *= 100
        forward[2] *= 100
        var eye = Entity.GetEyePosition(Entity.GetLocalPlayer())
        var s = Render.WorldToScreen(eye)
        eye[0] += forward[0]
        eye[1] += forward[1]
        eye[2] += forward[2]
        var s2 = Render.WorldToScreen(eye)
        var trace2 = Trace.Line(local,localeye,eye)
        if(trace2[1] > 0.8){
            Render.Line(s[0],s[1],s2[0],s2[1],[255,255,255,255])
        var trace = Trace.Bullet(local,best, eye, Entity.GetHitboxPosition(best, 5))
        var hitbox = Entity.GetHitboxPosition(best, 5)
        if(Entity.IsValid(trace[0]) && trace[0] && trace[1] > 30){
            var s3 = Render.WorldToScreen(hitbox)
            Render.Line(s2[0],s2[1],s3[0],s3[1],[0,255,0,255])
            bestest[0] = eye[0] - localeye[0]
            bestest[1] = eye[1] - localeye[1]
            bestest[2] = eye[2] - localeye[2]
            break
        }
    }
    }
    if(bestest[0] == 0 && bestest[1] == 0 && bestest[2] == 0)
        return
    var yaw = Local.GetViewAngles()[1]
    var cmdMove = []
  
    cmdMove[0] = (((Math.sin(yaw / 180 * Math.PI)) * bestest[1]) + (Math.cos(yaw / 180 * Math.PI) * bestest[0])) * 450
    cmdMove[1] = (((Math.sin(yaw / 180 * Math.PI)) * bestest[0]) + (Math.cos(yaw / 180 * Math.PI) * -bestest[1])) * 450
    UserCMD.SetMovement([cmdMove[0],cmdMove[1],0])
}
function reset(){
    last = 0
}
function onWeaponFire(){
    if(Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()){
        last = Globals.Tickcount()
    }
}
Cheat.RegisterCallback("weapon_fire", "onWeaponFire")
Cheat.RegisterCallback("CreateMove", "onCM")
Cheat.RegisterCallback("round_start", "reset")