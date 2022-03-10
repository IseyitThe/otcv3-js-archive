UI.AddDropdown( "Kits", [ "KITS", "Default 1", "Default 2", "Crimson Assault", "Sharpened", "Insurgency", "AD8", "High Noon", "Death's Head Demolition",
"Desert Fire", "LNOE", "Skog Metal", "All I Want For Christmas", "IsoRhythm", "For No Mankind", "Hotline Miami", "Total Domination", "The Talos Principle",
"Battlepack", "MOLOTOV", "Uber Blasto Phone", "Hazardous Environments", "II-Headshot", "The 8-Bit Kit", "I Am", "Diamonds", "Invasion!", "Lion's Mouth",
"Sponge Fingerz", "Disgusting", "Java Havana Funkaloo", "Moments CSGO", "Aggressive", "The Good Youth", "FREE", "Life's Not Out To Get You", "Backbone",
"GLA", "III-Arena", "EZ4ENCE", "Master Chief Collection", "King, Scar", "Anti-Citizen", "Bachram", "Gunman Taco Truck", "Eye of the Dragon", "M.U.D.D Force",
"Neo Noir", "Bodacious", "Drifter" ] );

var s = 0;

function music() {
    var d = UI.GetValue("Kits");
    if (s != d) {
        s = d;
        Entity.SetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_unMusicID", UI.GetValue("Kits"))
        Entity.SetProp(Entity.GetLocalPlayer(), "CCSPlayerResource", "m_nMusicID", UI.GetValue("Kits"))
    }
}


Cheat.RegisterCallback("CreateMove", "music");