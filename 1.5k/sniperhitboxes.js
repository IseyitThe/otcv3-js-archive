UI.AddCheckbox("Sniper hitbox priority")

function sniperhitbox()
{
    localplayer_index = Entity.GetLocalPlayer( );
    localplayer_weapon = Entity.GetWeapon(localplayer_index);
    weapon_name = Entity.GetName(localplayer_weapon);

    if (UI.GetValue("Sniper hitbox priority") == true)
    {
        if(weapon_name == "awp")
        {
               UI.SetValue( "Legit", "SNIPER", "General", "Hitbox priority", 1);
        }
            
        if(weapon_name == "ssg 08")
        {
            UI.SetValue( "Legit", "SNIPER", "General", "Hitbox priority",  0);
        }
    }
}

Global.RegisterCallback("CreateMove", "sniperhitbox");