// FixesV1.2 Pasted By Pinecone
// Grenades From https://onetap.su/threads/release-disable-fake-lag-on-grenade.13047/
// R8 From https://onetap.su/threads/disable-fake-lag-on-r8.13063/
// Knife From https://onetap.su/threads/avoid-aa-on-knife.13028/
// Slider Title From https://onetap.su/members/12151/ - https://onetap.su/threads/release-customizable-jitter-probably-the-best-anti-aim-available.13157/


var OriginalFakeLagFix = UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled");
var OriginalAAFix      = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled");

function check() {

    var enabled = true;
   

    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Show Fixes")) {
        var enabled = false;
    }
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "No FakeLag With Nades Out", enabled);
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "No FakeLag With Revolver", enabled);
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "No AA on knife fix", enabled);

    if (UI.IsMenuOpen()) {
        UpdateSettingsForFixes();
        return;
    }
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", OriginalAAFix);
    UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", OriginalFakeLagFix);

    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "No FakeLag With Nades Out") || UI.GetValue("Misc", "JAVASCRIPT", "Script items", "No FakeLag With Revolver")) { 
        if (UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled")&& (OriginalFakeLagFix == true)) {
            LagFix();
        }
    }
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "No AA on knife fix")) {
        if (UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled")&& (OriginalAAFix == true)) {
            knifeFix();
        }
    }
}
function UpdateSettingsForFixes() {
    player = Entity.GetLocalPlayer();
    weapon = Entity.GetWeapon(player);
    weaponName = Entity.GetName(weapon);
    if ((UI.IsMenuOpen())&&(Global.IsKeyPressed(0x01))) {
        if ((!weaponName.includes("high explosive grenade") || (!weaponName.includes("molotov") || (!weaponName.includes("incendiary grenade") || (!weaponName.includes("smoke grenade"))))) || (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "No FakeLag With Revolver") && !weaponName.includes("revolver"))) {
            OriginalFakeLagFix = UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled");
        }
        if ((weaponName.includes("high explosive grenade") || (weaponName.includes("molotov") || (weaponName.includes("incendiary grenade") || (weaponName.includes("smoke grenade"))))) || (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "No FakeLag With Revolver") && weaponName.includes("revolver"))) {
            Global.ExecuteCommand('slot3'); // switches to slots 3 incase you dont have a primary
            Global.ExecuteCommand('slot2'); // switches to secondary
            Global.ExecuteCommand('slot1'); // switches to primary
        }
        if (!weaponName.includes("knife")) {
            OriginalAAFix      = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled");
        } else {
            Global.ExecuteCommand('slot10'); // switches to slot10 to prevent not having a pistol or primary messing with the selection
            Global.ExecuteCommand('slot2'); // switches to secondary
            Global.ExecuteCommand('slot1'); // switches to slot1 if you have a weapon that will effect a menu selection
        }
        return;
    }
}
function LagFix() {
    player = Entity.GetLocalPlayer();
    weapon = Entity.GetWeapon(player);
    weaponName = Entity.GetName(weapon);

    if ((weaponName.includes("high explosive grenade") || (weaponName.includes("molotov") || (weaponName.includes("incendiary grenade") || (weaponName.includes("smoke grenade"))))) || (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "No FakeLag With Revolver") && weaponName.includes("revolver"))) {
        var FakeLagDisable = true;
    } else {
        var FakeLagDisable = false;
    }
    if ((!FakeLagDisable) && (OriginalFakeLagFix == true)) {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", true);
    } else {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", false);
    }
}

function knifeFix() {
    player = Entity.GetLocalPlayer();
    weapon = Entity.GetWeapon(player);
    weaponName = Entity.GetName(weapon);
    if (!weaponName.includes("knife") && (OriginalAAFix == true)) {
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", true);
    } else {
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", false);
    }
}

function main() {
    UI.AddSliderInt('                     Fixes',0,0);
    UI.AddCheckbox("Show Fixes");
   
    UI.AddCheckbox("No FakeLag With Nades Out");
    UI.AddCheckbox("No FakeLag With Revolver");
    UI.AddCheckbox("No AA on knife fix");
    UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Show Fixes", false);
    Global.RegisterCallback("Draw", "check");
}
main();