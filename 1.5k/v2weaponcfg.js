

/////////////////////////
// written by desc/jo  //
// free to use         //
// no pasterino        //
// for onetap.su/com   //
/////////////////////////

//List of all guns that aren't in a category in RAGEBOT
/**
I tried using them with an array but i dont know jack shit about arrays so i gave up
const shotguns = ["mag 7", "nova", "sawed off", "xm1014"]
const lmgs = ["m249", "negev"]
const smgs = ["mac 10", "mp7", "mp9", "mp5 sd", "pp bizon", "p90", "ump 45"]
const rifles = ["ak 47", "aug", "famas", "galil ar", "m4a1 s", "m4a4", "sg 553"]
**/

//checkboxes
UI.AddLabel("_________________________________________")
UI.AddCheckbox("Enable Advanced CFG");

//vars/arrays
const wpn = "";

//I hardcoded autostop + autoscope so i dont get ppl saying "hitchance isnt coded properly ajskldhalskdh"
UI.SetValue("Rage", "GENERAL", "Accuracy", "Auto stop", true)
UI.SetValue("Rage", "GENERAL", "Accuracy", "Auto stop mode", 2)
UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true)

//prints in chat that the script was loaded
Cheat.PrintChat("Loaded Advanced CFG Script by desc/jo");

//Config sliders/switches
//SMG CFG
UI.AddSliderInt("SMG Hitchance", 0, 100);
UI.AddSliderInt("SMG Min DMG (Autowall)", 0, 100);
UI.AddSliderInt("SMG Min DMG", 0, 100);
UI.AddSliderInt("SMG Accuracy Boost", 0, 100);
UI.AddCheckbox("SMG Static Pointscale")
UI.AddSliderInt("SMG Head Pointscale", 0, 100)
UI.AddSliderInt("SMG Body Pointscale", 0, 100)
UI.AddLabel("_________________________________________")
//LMG CFG
UI.AddSliderInt("LMG Hitchance", 0, 100);
UI.AddSliderInt("LMG Min DMG (Autowall)", 0, 100);
UI.AddSliderInt("LMG Min DMG", 0, 100);
UI.AddSliderInt("LMG Accuracy Boost", 0, 100);
UI.AddCheckbox("LMG Static Pointscale")
UI.AddSliderInt("LMG Head Pointscale", 0, 100)
UI.AddSliderInt("LMG Body Pointscale", 0, 100)
UI.AddLabel("_________________________________________")
//Rifle CFG
UI.AddSliderInt("RIFLE Hitchance", 0, 100);
UI.AddSliderInt("RIFLE Min DMG (Autowall)", 0, 100);
UI.AddSliderInt("RIFLE Min DMG", 0, 100);
UI.AddSliderInt("RIFLE Accuracy Boost", 0, 100);
UI.AddCheckbox("RIFLE Static Pointscale")
UI.AddSliderInt("RIFLE Head Pointscale", 0, 100)
UI.AddSliderInt("RIFLE Body Pointscale", 0, 100)
UI.AddLabel("_________________________________________")
//Shotgun CFG
UI.AddSliderInt("SHOTGUN Hitchance", 0, 100);
UI.AddSliderInt("SHOTGUN Min DMG (Autowall)", 0, 100);
UI.AddSliderInt("SHOTGUN Min DMG", 0, 100);
UI.AddSliderInt("SHOTGUN Accuracy Boost", 0, 100);
UI.AddCheckbox("SHOTGUN Static Pointscale")
UI.AddSliderInt("SHOTGUN Head Pointscale", 0, 100)
UI.AddSliderInt("SHOTGUN Body Pointscale", 0, 100)
UI.AddLabel("_________________________________________")
//Removed Zeus settings as Zeus is hardcoded

function main() {
    if (World.GetServerString() != "") {
        if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Advanced CFG")) {

            //Detects what gun we're holding
            const localplayer_index = Entity.GetLocalPlayer();
            const localplayer_weapon = Entity.GetWeapon(localplayer_index);
            const weapon_name = Entity.GetName(localplayer_weapon);
            const current = wpn

            if (weapon_name === "mag 7" || weapon_name === "nova" || weapon_name === "sawed off" || weapon_name === "xm1014") {
                wpn = "SHOTGUN"
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Hitchance", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "SHOTGUN Hitchance"));
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Minimum damage (behind wall)", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "SHOTGUN Min DMG (Autowall)"));
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Minimum damage (visible)", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "SHOTGUN Min DMG"));
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Accuracy boost", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "SHOTGUN Accuracy Boost"));

                if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "SHOTGUN Static Pointscale")) {
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Static point scale", true);
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Head point scale", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "SHOTGUN Head Pointscale"));
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Body point scale", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "SHOTGUN Body Pointscale"));
                } else {
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Static point scale", false)
                }

            } else if (weapon_name === "m249" || weapon_name === "negev") {
                wpn = "LMG"
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Hitchance", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "LMG Hitchance"));
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Minimum damage (behind wall)", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "LMG Min DMG (Autowall)"));
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Minimum damage (visible)", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "LMG Min DMG"));
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Accuracy boost", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "LMG Accuracy Boost"));
                //const hitboxes = UI.GetString("Misc", "JAVASCRIPT", "Script Items", "LMG Hitboxes");

                if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "LMG Static Pointscale")) {
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Static point scale", true);
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Head point scale", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "LMG Head Pointscale"));
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Body point scale", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "LMG Body Pointscale"));
                } else {
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Static point scale", false)
                }

            } else if (weapon_name === "mac 10" || weapon_name === "mp7" || weapon_name === "mp9" || weapon_name === "mp5 sd" || weapon_name === "pp bizon" || weapon_name === "p90" || weapon_name === "ump 45") {
                wpn = "SMG"
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Hitchance", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "SMG Hitchance"));
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Minimum damage (behind wall)", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "SMG Min DMG (Autowall)"));
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Minimum damage (visible)", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "SMG Min DMG"));
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Accuracy boost", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "SMG Accuracy Boost"));
                //const hitboxes = UI.GetString("Misc", "JAVASCRIPT", "Script Items", "SMG Hitboxes");

                if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "SMG Static Pointscale")) {
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Static point scale", true);
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Head point scale", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "SMG Head Pointscale"));
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Body point scale", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "SMG Body Pointscale"));
                } else {
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Static point scale", false)
                }

            } else if (weapon_name === "ak 47" || weapon_name === "aug" || weapon_name === "famas" || weapon_name === "galil ar" || weapon_name === "m4a1 s" || weapon_name === "m4a4" || weapon_name === "sg 553") {
                wpn = "RIFLE"
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Hitchance", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "RIFLE Hitchance"));
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Minimum damage (behind wall)", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "RIFLE Min DMG (Autowall)"));
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Minimum damage (visible)", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "RIFLE Min DMG"));
                UI.SetValue("Rage", "GENERAL", "Accuracy", "Accuracy boost", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "RIFLE Accuracy Boost"));
                //const hitboxes = UI.GetString("Misc", "JAVASCRIPT", "Script Items", "RIFLE Hitboxes");

                if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "RIFLE Static Pointscale")) {
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Static point scale", true);
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Head point scale", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "RIFLE Head Pointscale"));
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Body point scale", UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "RIFLE Body Pointscale"));
                } else {
                    UI.SetValue("Rage", "GENERAL", "Accuracy", "Static point scale", false)
                }

            } else if (weapon_name === "knife") {
                wpn = "KNIFE"
            }
        }
    }
}


Global.RegisterCallback("Draw", "main")

