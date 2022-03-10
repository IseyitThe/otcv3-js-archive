local ref_doubletap_speed = ui.new_checkbox("RAGE", "Other", "Increase doubletap speed")
local ref_doubletap_consistency = ui.new_slider("RAGE", "Other", "Double tap consistency", -1, 4, 4, true, nil, 1, {[-1] = "Instant"})

local ref_limit = ui.reference("AA", "Fake lag", "Limit")
local ref_doubletap_reserve = ui.reference("MISC", "Settings", "Double tap reserve")
local ref_maxusrcmdprocessticks = ui.reference("MISC", "Settings", "sv_maxusrcmdprocessticks")

local function handle_menu()
    local state = ui.get(ref_doubletap_speed)
    ui.set_visible(ref_doubletap_consistency, state)
    if state then
        local consistency = ui.get(ref_doubletap_consistency)
        ui.set(ref_doubletap_reserve, consistency < 1 and 1 or consistency)
        ui.set(ref_maxusrcmdprocessticks, consistency >= 1 and 16 or 17)
        ui.set(ref_limit, consistency >= 1 and 14 or 15)
        client.set_cvar("cl_clock_correction", consistency == -1 and "0" or "1")
		function _FrameNetUpdateStart( )
{
    Exploit.OverrideTolerance(1);
    Exploit.OverrideShift(14);
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
    var reserve = 0;

    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()

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

Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");
Cheat.RegisterCallback("FRAME_NET_UPDATE_START", "_FrameNetUpdateStart");
    else
        ui.set(ref_doubletap_reserve, 4)
        ui.set(ref_maxusrcmdprocessticks, 16)
        ui.set(ref_limit, 14)
        client.set_cvar("cl_clock_correction", "1")
    end
end

handle_menu()
ui.set_callback(ref_doubletap_speed, handle_menu)
ui.set_callback(ref_doubletap_consistency, handle_menu)
