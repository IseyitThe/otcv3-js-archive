function on_ragebot_fire()
{
    Convar.SetString ("host_timescale", 2 );
}

function recover()
{
    Convar.SetString ("host_timescale", 1 );
}

Global.RegisterCallback("ragebot_fire", "on_ragebot_fire");
Global.RegisterCallback("CreateMove", "recover");