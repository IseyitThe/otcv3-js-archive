var next_tick_should_fakelag = true
function fire(){
    var ent = Entity.GetEntityFromUserID(Event.GetInt("userid"))
    if(ent != Entity.GetLocalPlayer())
        return
    next_tick_should_fakelag = false
}
function cM(){
    UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", true)
    if(!next_tick_should_fakelag)
    {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", false)
        next_tick_should_fakelag = true
    }
}
Cheat.RegisterCallback("CreateMove", "cM")
Cheat.RegisterCallback("weapon_fire", "fire")
