function dsl(){
    var local = Entity.GetLocalPlayer()
    if(!local || !Entity.IsAlive(local))
        return
    var velocity = Entity.GetProp(local, "DT_BasePlayer", "m_vecVelocity[0]")
    var length = Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1] + velocity[2] * velocity[2])
    var active = false
    if(length > 5)
        active = true
    UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", active)
}
Cheat.RegisterCallback("CreateMove", "dsl")