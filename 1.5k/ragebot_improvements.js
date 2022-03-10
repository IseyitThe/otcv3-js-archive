var target = 0

function GetVelocity(index) {
    var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

function getDelta(player) {
    var speed = GetVelocity(player)
    var delta = (speed / 8)
    return (58 - delta)
}

function GetHealth(index) {
    health_override = Entity.GetProp(index, "CBasePlayer", "m_iHealth");
    return health_override;
}

function cm() {

    var lp = Entity.GetLocalPlayer();
    var target = Ragebot.GetTarget()
    if (GetHealth(target) <= 55) {

        Ragebot.ForceTargetMinimumDamage(target, GetHealth(target))
    }
    Ragebot.ForceHitboxSafety(11)
    Ragebot.ForceHitboxSafety(12)
    if (getDelta(target) > 35) {
        Ragebot.ForceHitboxSafety(0)
    }

   // Cheat.Print("Delta is " + getDelta(target) + "\n");
  //  Cheat.Print("Health is " + GetHealth(target) + "\n");
}



Cheat.RegisterCallback("CreateMove", "cm")