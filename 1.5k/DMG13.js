
screen = Render.GetScreenSize()
UI.AddLabel("___________________________________________");
UI.AddLabel("----------------Revolver----------------");
UI.AddSliderInt("Revolver Min Damage", 0, 130);
UI.AddSliderInt("Revolver Hitchance", 0, 100);
UI.AddCheckbox("Revolver Prefer Baim");
UI.AddCheckbox("Revolver Prefer Safe");
UI.AddLabel("---------------Min Override-------------");
UI.AddHotkey("Min Damage Override");
UI.AddSliderInt("General Override", 0, 130);
UI.AddSliderInt("Pistol Override", 0, 130);
UI.AddSliderInt("Revolver Override", 0, 130);
UI.AddSliderInt("Deagle Override", 0, 130);
UI.AddSliderInt("Scout Override", 0, 130);
UI.AddSliderInt("AWP Override", 0, 130);
UI.AddSliderInt("Auto Override", 0, 130);
UI.AddLabel("----------------Indicators--------------");
UI.AddCheckbox("Override Indicator");
UI.AddColorPicker("Override Color");
UI.AddSliderInt("X Override", -screen[0], screen[0])
UI.AddSliderInt("Y Override", -screen[1], screen[1])
UI.AddLabel("           DXgamerawr890#5983");
UI.AddLabel("___________________________________________");
 
function on_menu() {
    var indica = UI.GetValue("Script items", "Override Indicator");
    if (indica) {
        UI.SetEnabled("Script items", "Override Color", true);
        UI.SetEnabled("Script items", "X Override", true);
        UI.SetEnabled("Script items", "Y Override", true);
    } else {
        UI.SetEnabled("Script items", "Override Color", false);
        UI.SetEnabled("Script items", "X Override", false);
        UI.SetEnabled("Script items", "Y Override", false);
    }
}
 
var weapons = {
    "zeus x27": "taser", "usp s": "Pistol", "glock 18": "Pistol", "p2000": "Pistol", "dual berettas": "Pistol", "r8 revolver": "Heavy Pistol", "desert eagle": "Heavy Pistol", "p250": "Pistol", "tec 9": "Pistol", "five seven": "Pistol", "mp9": "SMG", "mac 10": "SMG", "pp bizon": "SMG", "p90": "SMG", "mp7": "SMG", "ump 45": "SMG", "ak 47": "Heavy", "famas": "Heavy", "sg 553": "Heavy", "aug": "Heavy", "m4a1 s": "Heavy", "recortada": "Heavy", "m4a4": "Heavy", "ssg 08": "Scout", "awp": "AWP", "g3sg1": "Auto", "scar 20": "Auto", "nova": "Heavy", "xm1014": "Heavy", "mag 7": "Heavy", "m249": "Heavy", "negev": "Heavy"
};
 
var mHYdxfeYAX = UI.GetValue("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance");
var TjoFwIOdWu = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage");
var KUhGPuAuRF = UI.GetValue("Rage", "HEAVY PISTOL", "Accuracy", "Prefer body aim");
var lYtXZLWWaC = UI.GetValue("Rage", "HEAVY PISTOL", "Accuracy", "Prefer safe point");
var tVHUhryUQr = true;
 
function HtnApfUYkJ() {
    on_menu();
    var onkey = UI.IsHotkeyActive("Script items", "Min Damage Override");
    var overrmin = UI.GetValue("Script items", "Revolver Override");
    var Hitchance = UI.GetValue("Script items", "Revolver Hitchance");
    var min = UI.GetValue("Script items", "Revolver Min Damage");
    var baim = UI.GetValue("Script items", "Revolver Prefer Baim");
    var safe = UI.GetValue("Script items", "Revolver Prefer Safe");
    local_weapon_id = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CBaseAttributableItem", "m_iItemDefinitionIndex");
    if (local_weapon_id === 262208) {
        if (tVHUhryUQr) {
            mHYdxfeYAX = UI.GetValue("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance");
            TjoFwIOdWu = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage");
            KUhGPuAuRF = UI.GetValue("Rage", "HEAVY PISTOL", "Accuracy", "Prefer body aim");
            lYtXZLWWaC = UI.GetValue("Rage", "HEAVY PISTOL", "Accuracy", "Prefer safe point");
            tVHUhryUQr = false;
        }
        UI.SetValue("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance", Hitchance);
        if (onkey) {
            UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", overrmin);
        } else {
            UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", min);
        }
        UI.SetValue("Rage", "HEAVY PISTOL", "Accuracy", "Prefer body aim", baim);
        UI.SetValue("Rage", "HEAVY PISTOL", "Accuracy", "Prefer safe point", safe);
    } else {
        if (!tVHUhryUQr) {
            UI.SetValue("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance", mHYdxfeYAX);
            UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", TjoFwIOdWu);
            UI.SetValue("Rage", "HEAVY PISTOL", "Accuracy", "Prefer body aim", KUhGPuAuRF);
            UI.SetValue("Rage", "HEAVY PISTOL", "Accuracy", "Prefer safe point", lYtXZLWWaC);
            tVHUhryUQr = true;
        }
    }
}
 
var oldgeneral = UI.GetValue("Rage", "GENERAL", "Targeting", "Minimum damage");
var oldpistol = UI.GetValue("Rage", "PISTOL", "Targeting", "Minimum damage");
var oldheavy = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage");
var oldscout = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage");
var oldawp = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage");
var oldauto = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage");
var orgmin = true;
 
function on_key() {
    on_menu();
    var onkey = UI.IsHotkeyActive("Script items", "Min Damage Override");
    var mingeneral = UI.GetValue("Script items", "General Override");
    var minpistol = UI.GetValue("Script items", "Pistol Override");
    var mindeagl = UI.GetValue("Script items", "Deagle Override");
    var minscout = UI.GetValue("Script items", "Scout Override");
    var minawp = UI.GetValue("Script items", "AWP Override");
    var minauto = UI.GetValue("Script items", "Auto Override");
    local_weapon_id = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CBaseAttributableItem", "m_iItemDefinitionIndex");
    if (onkey) {
        if (orgmin) {
            oldgeneral = UI.GetValue("Rage", "GENERAL", "Targeting", "Minimum damage");
            oldpistol = UI.GetValue("Rage", "PISTOL", "Targeting", "Minimum damage");
            oldheavy = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage");
            oldscout = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage");
            oldawp = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage");
            oldauto = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage");
            orgmin = false;
        }
        UI.SetValue("Rage", "GENERAL", "Targeting", "Minimum damage", mingeneral);
        UI.SetValue("Rage", "PISTOL", "Targeting", "Minimum damage", minpistol);
        if (local_weapon_id === 1) {
            UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", mindeagl);
        }
        UI.SetValue("Rage", "SCOUT", "Targeting", "Minimum damage", minscout);
        UI.SetValue("Rage", "AWP", "Targeting", "Minimum damage", minawp);
        UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", minauto);
    } else {
        if (!orgmin) {
            UI.SetValue("Rage", "GENERAL", "Targeting", "Minimum damage", oldgeneral);
            UI.SetValue("Rage", "PISTOL", "Targeting", "Minimum damage", oldpistol);
            UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", oldheavy);
            UI.SetValue("Rage", "SCOUT", "Targeting", "Minimum damage", oldscout);
            UI.SetValue("Rage", "AWP", "Targeting", "Minimum damage", oldawp);
            UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", oldauto);
            orgmin = true;
        }
    }
}
 
function on_draw() {
    on_menu();
    var localEnt = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    local_weapon_id = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CBaseAttributableItem", "m_iItemDefinitionIndex");
    var indi = UI.GetValue("Script items", "Override Indicator");
    color = UI.GetColor("Script items", "Override Color");
    xo = UI.GetValue("Script items", "X Override");
    yo = UI.GetValue("Script items", "Y Override");
    x = screen[0] / 2
    y = screen[1] / 2
    general = "DMG: " + UI.GetValue("Rage", "GENERAL", "Targeting", "Minimum damage");
    pistol = "DMG: " + UI.GetValue("Rage", "PISTOL", "Targeting", "Minimum damage");
    heavy = "DMG: " + UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage");
    scout = "DMG: " + UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage");
    awp = "DMG: " + UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage");
    auto = "DMG: " + UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage");
    var indicator = ""
    if (indi && Entity.IsValid(Entity.GetLocalPlayer()) && Entity.IsAlive(Entity.GetLocalPlayer())) {
        if (weapons[weapon] == "Heavy" || weapons[weapon] == "SMG" || weapons[weapon] == "taser") {
            indicator = general
        } else if (weapons[weapon] == "Pistol" || local_weapon_id === 2) {
            indicator = pistol
        } else if (weapons[weapon] == "Heavy Pistol" || local_weapon_id === 262208) {
            indicator = heavy
        } else if (weapons[weapon] == "Scout") {
            indicator = scout
        } else if (weapons[weapon] == "AWP") {
            indicator = awp
        } else if (weapons[weapon] == "Auto") {
            indicator = auto
        }
    }
    Render.String(x + xo, y + yo, 0, indicator + "", color);
}
 
UI.SetValue("Script items", "X Override", -25);
UI.SetValue("Script items", "Y Override", 2);
Global.RegisterCallback("CreateMove", "HtnApfUYkJ");
Global.RegisterCallback("CreateMove", "on_key");
Global.RegisterCallback("Draw", "on_draw");