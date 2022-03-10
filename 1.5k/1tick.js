

var time, delay, fillbar, shotsfired;

//Weapon fire event
function EVENT_WEAPON_FIRE()
{
    iShotsFired = Event.GetInt("userid"); iShotsFired_index = Entity.GetEntityFromUserID(iShotsFired);

    if(Entity.GetLocalPlayer() == iShotsFired_index)
    {
            //Released only once
            if(shotsfired == 0)
            {
                time = Globals.Curtime();
                delay = time+0.3;
                fillbar = 0;
            }            
    }  
}

function can_shift_shot(ticks_to_shift) {
    var me = Entity.GetLocalPlayer();
    var wpn = Entity.GetWeapon(me);

    if (me == null || wpn == null)
        return false;

    var tickbase = Entity.GetProp(me, "CCSPlayer", "m_nTickBase");
    var curtime = Globals.TickInterval() * (tickbase-ticks_to_shift)

    if (curtime < Entity.GetProp(me, "CCSPlayer", "m_flNextAttack"))
        return false;

    if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
        return false;

    return true;
}

function _TBC_CREATE_MOVE() {
    var is_charged = Exploit.GetCharge()
    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()
    if (can_shift_shot(14) && is_charged != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    }
    Exploit.OverrideTolerance(0);
    Exploit.OverrideShift(14);
}

function _TBC_UNLOAD() {
    Exploit.EnableRecharge();
}
function Main()
{
    Global.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
    Global.RegisterCallback("Unload", "_TBC_UNLOAD");
    Global.RegisterCallback("weapon_fire", "EVENT_WEAPON_FIRE");
    UI.AddLabel("--------------DOUBLETAP--------------");
    UI.AddLabel("--------------BY REVERSE--------------");
}

Main();

