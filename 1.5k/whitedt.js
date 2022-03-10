const fontpixel2 = Render.AddFont( "Verdana", 8, 100);
var Xoffset = 'X offset';
var Yoffset = 'Y offset';

UI.AddSliderInt("Shift", 1, 14);
UI.AddSliderInt("Tolerance", 0, 3);
UI.AddCheckbox("DT whitecord [beta] v2.0")
UI.AddCheckbox("Teleport [beta] v0.1")
UI.AddSliderInt("Teleport", 14, 20);
UI.AddSliderInt(Xoffset, -1000, 2000);
UI.AddSliderInt(Yoffset, -1000, 1000);
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
    var reserve = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tolerance")

    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"](1)

    if (can_shift_shot(14) && is_charged != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    }

    Exploit.OverrideTolerance(reserve);
    Exploit.OverrideShift(14-reserve);
}

function _TBC_UNLOAD() {
    Exploit.EnableRecharge();
}

function _FrameNetUpdateStart( )
{
    Exploit.OverrideShift(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Shift"));
}
function speed_booster(Recharge) {
if (me == null || wpn == null)
    return false;
}
function dmg_in_shot() {
    var dmg = Local.GetDmgPlayer()

    set (dmg > null)

    if (dmg == null)
    return true;

    var dmg_in_tick = Entity.GetProp(dmg, "Player", "m_nDmg");s
    dmg_in_tick = 50%(dmg, "Player")
    const dtdmg = check("Player","userid",Health);
    var Health = player_health;
}
function proccesticktotake(){
    const proccesticks = onetap.menu.proccesticks(applicationCache);
    if (proccesticks << 14);
    return true;
}
function Teleport(){
    UI.IsCheckboxActive("Misc", "JAVASCRIPT", "Script Items", "Teleport [beta] v0.1", "Enabled");
    UI.IsCheckboxActive("Rage", "GENERAL", "Exploits", "Extras", "Teleport stop", "Enabled");
    Teleport = 20(proccesticks);
    Exploit.Teleport(reserve);
}
Cheat.RegisterCallback("dmg_in_shot", "speed_booster")
Cheat.RegisterCallback("proccesticktotake", "")

Cheat.RegisterCallback("FRAME_NET_UPDATE_START", "_FrameNetUpdateStart");
Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");