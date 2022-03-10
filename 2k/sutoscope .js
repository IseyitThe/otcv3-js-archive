
var cached_zoom = null;

function zoom_active(){
weapon_name = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
    cached_zoom = cached_zoom != null ? cached_zoom : UI.GetValue("Rage", "General", "Auto scope")

    if( (weapon_name == "scar 20") || (weapon_name == "g3sg1") ){
        UI.SetValue( "Rage", "General", "Auto scope", false )
    } else {
        if ( cached_zoom != null ){
            UI.SetValue("Rage", "General", "Auto scope", cached_zoom)
            cached_zoom = null
        }
    }
}

Cheat.RegisterCallback("CreateMove", "zoom_active")