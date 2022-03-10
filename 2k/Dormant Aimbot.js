function calc_dist(a, b) {
    x = a[0] - b[0];
    y = a[1] - b[1];
    z = a[2] - b[2];
    return Math.sqrt(x * x + y * y + z * z);
}
// from chicken aimbot
function normalize_yaw(angle) {
    angle = (angle % 360 + 360) % 360;
    return angle > 180 ? angle - 360 : angle;
}
function subtract(a,b){
    x = a[0] - b[0];
    y = a[1] - b[1];
    z = a[2] - b[2];
    var vec = [x,y,z];
    return(vec)
}
function VectorAngles(forward)
{
    var angles;
    var tmp, yaw, pitch;
    
    if (forward[1] == 0 && forward[0] == 0)
    {
        yaw = 0;
        if (forward[2] > 0)
            pitch = 270;
        else
            pitch = 90;
    }
    else
    {
        yaw = (Math.atan2(forward[1], forward[0]) * 180 / Math.PI);
        if (yaw < 0)
            yaw += 360;
        tmp = Math.sqrt (forward[0]*forward[0] + forward[1]*forward[1]);
        pitch = (Math.atan2(-forward[2], tmp) * 180 / Math.PI);
        if (pitch < 0)
            pitch += 360;
    }
    
    x = pitch;
    y = yaw;
    z = 0;
    angles = [x,y,z];
    
    return angles;
}
function can_shoot(Player){
    var index = Entity.GetWeapon(Player)
    var classid = Entity.GetClassID(index);
    
    var weapon =  classid == 107 || classid == 108 || classid == 96 || classid == 99 || classid ==112 || classid == 155 || classid == 47;//checking if the selected weapon is knife or nade
    var clip = Entity.GetProp(index, "DT_BaseCombatWeapon", "m_iClip1");
    var getbuttons = Entity.GetProp(index,'CBasePlayer', 'm_fFlags' );
    if(weapon || clip == 0 || getbuttons & 1 << 1 )//check if player is jumping or as an empty mag // UserCMD.GetButtons() & (1 << 1)
        return false;
    return true;
}
// end
// vector +
va = function(a, b){
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
// from oof
function calculate_yaw(src, to) {
    var delta = [src[0] - to[0], src[1] - to[1]];
    var yaw = Math.atan(delta[1]/delta[0]);
    yaw = normalize_yaw(yaw * 180 / Math.PI);
    if (delta[0] >= 0)
        yaw = normalize_yaw(yaw + 180);
    return yaw;
}
var a, d, c;
// hotkey
var shot = false;

UI.AddHotkey("Dormant Aimbot"); 
function check(){
    // enenies arr
    var e = Entity.GetEnemies();
    // filter as only dormant, alive and hittable enemies
    var d = e.filter(function(e){
        return Entity.IsDormant(e) && Entity.IsAlive(e) && Trace.Bullet(Entity.GetLocalPlayer(), e, Entity.GetEyePosition(Entity.GetLocalPlayer()), va(Entity.GetRenderOrigin(e), [0, 0, 45]))[1] > 1;
    });
    // sort hittable by damage
    var c = d.sort(function(a, b){
        return Trace.Bullet(Entity.GetLocalPlayer(), a, Entity.GetEyePosition(Entity.GetLocalPlayer()), va(Entity.GetRenderOrigin(a), [0, 0, 45]))[1] - Trace.Bullet(Entity.GetLocalPlayer(), b, Entity.GetEyePosition(Entity.GetLocalPlayer()), va(Entity.GetRenderOrigin(b), [0, 0, 45]))[1];
    })[0];
    // if no enemies return
    if(!c) {
        return;
    }
    var weapon_index = Entity.GetWeapon(Entity.GetLocalPlayer());  
    var m_flNextPrimaryAttack = Entity.GetProp(weapon_index,"DT_BaseCombatWeapon","m_flNextPrimaryAttack"); //gets time until next attack
    var viewangle = VectorAngles(subtract(va(Entity.GetRenderOrigin(c), [0, 0, 45]),Entity.GetEyePosition(Entity.GetLocalPlayer())));
    if(!can_shoot(Entity.GetLocalPlayer()))//checks if you can shoot
    {
        return;
    }

    Cheat.Print("active: " + UI.IsHotkeyActive("Script Items", "Dormant Aimbot") + " value: " + UI.GetValue("Dormant Aimbot") + "\n")
    if(UI.IsHotkeyActive("Script Items", "Dormant Aimbot")){ // UI.GetValue("Dormant Aimbot") // ["Rage", "General", "General", "Key assignment",
        Cheat.Print("can_shoot YES\n");
        if( Globals.Curtime() - m_flNextPrimaryAttack > 0.1){
        //UserCMD.SetViewAngles(viewangle, true)
        UserCMD.SetAngles(viewangle);
        //UserCMD.SetButtons((1 << 0) | UserCMD.GetButtons())
        var getbuttons = Entity.GetProp(Entity.GetLocalPlayer(),'CBasePlayer', 'm_fFlags');
        Cheat.ExecuteCommand("+attack");
        shot = true;
    
       
        dmg = Trace.Bullet(Entity.GetLocalPlayer(), c, Entity.GetEyePosition(Entity.GetLocalPlayer()), va(Entity.GetRenderOrigin(c), [0, 0, 45]))[1];
        // log shot
        Cheat.Print("Dormant aimed at " + Entity.GetName(c) + " for " + dmg + " dmg"); 
        }
    }
}
function wrap() {
    try {
        check()
    } catch (e) {
        Cheat.Print("error: \n" + e.stack)
    }
}
Cheat.RegisterCallback("CreateMove", "wrap");

function shoot() {
    if(shot) { // don't care who shot
        Cheat.ExecuteCommand("-attack");
        shot = false
    }
}
Cheat.RegisterCallback("weapon_fire", "shoot");