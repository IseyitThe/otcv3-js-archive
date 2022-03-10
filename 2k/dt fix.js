is_DT = 0;

function CorrectMode()
{
    isDoubletap = UI.GetValue(["Rage", "Exploits", "Key assignment", "Double tap"]);
    g_Local = Entity.GetLocalPlayer();
    g_Local_weapon = Entity.GetWeapon(g_Local);
    weapon_name = Entity.GetName(g_Local_weapon);
    g_Local_classname = Entity.GetClassName( g_Local_weapon );

    if ((g_Local_classname == "CKnife" || g_Local_classname == "CWeaponSSG08" || g_Local_classname == "CWeaponAWP" || weapon_name == "r8 revolver" || g_Local_classname == "CHEGrenade" || g_Local_classname == "CMolotovGrenade" || g_Local_classname == "CIncendiaryGrenade" || g_Local_classname == "CFlashbang" || g_Local_classname == "CSmokeGrenade" || g_Local_classname == "CDecoyGrenade" || g_Local_classname == "CWeaponTaser" || g_Local_classname == "CC4"))
    {
        is_DT = 0;
    }
    else
    {
        is_DT = isDoubletap;
    }

    UI.SetValue(["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "General", "Double tap"], is_DT);
}

Cheat.RegisterCallback("CreateMove", "CorrectMode");