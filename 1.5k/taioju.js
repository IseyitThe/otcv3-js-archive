UI.AddSubTab(['Config', 'SUBTAB_MGR'], 'Jump Hitchance');
UI.AddCheckbox(['Config', 'SUBTAB_MGR', 'Jump Hitchance', 'SHEET_MGR', 'Jump Hitchance'], 'Jump Scout/Revolver Hitchance');
UI.AddSliderInt(['Config', 'SUBTAB_MGR', 'Jump Hitchance', 'SHEET_MGR', 'Jump Hitchance'], 'Hitchance', 0, 100);

function AirHitchance() {
    if (!UI.GetValue(['Config', 'SUBTAB_MGR', 'Jump Hitchance', 'SHEET_MGR', 'Jump Hitchance', 'Jump Scout/Revolver Hitchance'])) {
        return
    };
    var weapons = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (weapons != 'ssg 08' && weapons != 'r8 revolver') {
        return
    };
    var flags = Entity.GetProp(Entity.GetLocalPlayer(), 'CBasePlayer', 'm_fFlags');
    if (!(flags & 1 << 0) && !(flags & 1 << 18)) {
            target = Ragebot.GetTarget();
            value = UI.GetValue(['Config', 'SUBTAB_MGR', 'Jump Hitchance', 'SHEET_MGR', 'Jump Hitchance', 'Hitchance']);
            Ragebot.ForceTargetHitchance(target, value);
    }
}

function SetEnabledjumphs()
{
    if (UI.GetValue(["Config","SUBTAB_MGR", "Jump Hitchance", "SHEET_MGR", "Jump Hitchance", 'Jump Scout/Revolver Hitchance']))
    {
       UI.SetEnabled(["Config","SUBTAB_MGR", "Jump Hitchance", "SHEET_MGR", "Jump Hitchance", 'Hitchance'], 1)
    }
    else
    {
       UI.SetEnabled(["Config","SUBTAB_MGR", "Jump Hitchance", "SHEET_MGR", "Jump Hitchance", 'Hitchance'], 0)
    }

}

function Main() {
    Global.RegisterCallback("Draw", "SetEnabledjumphs");
    Cheat.RegisterCallback('CreateMove', 'AirHitchance');
}
Main()