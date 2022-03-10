ScreenSize = Render.GetScreenSize();
UI.AddSliderInt("Basic Semirage", 0, 0);
UI.AddCheckbox("Disable all");
UI.AddCheckbox("Semirage Script");
UI.AddLabel("___________________________________________");
UI.AddCheckbox("All Autowall On Key");
UI.AddHotkey("All On Key");
UI.AddCheckbox("Disable on weapons");
const weapon = UI.AddMultiDropdown("Weapons", ["General", "Pistol", "Heavy", "Scout", "AWP", "Auto"]);
UI.AddCheckbox("Autowall Indicator");
UI.AddColorPicker("Enable AW");
UI.AddColorPicker("Disable AW");
UI.AddSliderInt("X Autowall Indicator", 0, ScreenSize[0]);
UI.AddSliderInt("Y Autowall Indicator", 0, ScreenSize[1]);
UI.AddLabel("___________________________________________");
UI.AddCheckbox("Semirage");
UI.AddCheckbox("Rage Option");
UI.AddCheckbox("Legit AA on rage");
const dropdown = UI.AddMultiDropdown("Legit AA", ["Fix Desync", "Fake Indicator"]);
UI.AddColorPicker("Inv. Color");
UI.AddSliderInt("X Indicator", 0, ScreenSize[0]);
UI.AddSliderInt("Y Indicator", 0, ScreenSize[1]);
UI.AddHotkey("Rage on key");
UI.AddCheckbox("Rage Indicator");
UI.AddColorPicker("Rage Enabled")
UI.AddColorPicker("Rage Disabled")
UI.AddSliderInt("X Rage Indicator", 0, ScreenSize[0]);
UI.AddSliderInt("Y Rage Indicator", 0, ScreenSize[1]);
UI.AddCheckbox("Fake Duck MM");
UI.AddHotkey("Fake Duck");
UI.AddLabel("___________________________________________");

function main() {
const man = UI.GetValue("Semirage Script");
UI.SetEnabled("All Autowall On Key", man);
UI.SetEnabled("Disable on weapons", man);
UI.SetEnabled("Autowall Indicator", man);
UI.SetEnabled("Semirage", man);
}

function disableall() {
var ofi = UI.GetValue( "Script items", "Semirage" );
var off = UI.GetValue( "Script items", "Semirage Script" );
var dis = UI.GetValue( "Script items", "Disable all" );
if (off == 0) {
UI.SetValue( "Script items", "All Autowall On Key", false );
UI.SetValue( "Script items", "Disable on weapons", false );
UI.SetValue( "Script items", "Autowall Indicator", false );
UI.SetValue( "Script items", "Semirage", false );
UI.SetValue( "Script items", "Rage Option", false );
UI.SetValue( "Script items", "Legit AA on rage", false );
UI.SetValue( "Script items", "Rage Indicator", false );
UI.SetValue( "Script items", "Fake Duck MM", false );
}
if (dis) {
UI.SetValue( "Script items", "Semirage Script", false );
UI.SetValue( "Script items", "All Autowall On Key", false );
UI.SetValue( "Script items", "Disable on weapons", false );
UI.SetValue( "Script items", "Autowall Indicator", false );
UI.SetValue( "Script items", "Semirage", false );
UI.SetValue( "Script items", "Rage Option", false );
UI.SetValue( "Script items", "Legit AA on rage", false );
UI.SetValue( "Script items", "Rage Indicator", false );
UI.SetValue( "Script items", "Fake Duck MM", false );
}
if (ofi == 0) {
UI.SetValue( "Script items", "Rage Option", false );
UI.SetValue( "Script items", "Legit AA on rage", false );
UI.SetValue( "Script items", "Rage Indicator", false );   
UI.SetValue( "Script items", "Fake Duck MM", false );       
}
}

function ali() {
main();
const ato = UI.GetValue("All Autowall On Key");
UI.SetEnabled("All On Key", ato);
const at = UI.GetValue("Autowall Indicator");
UI.SetEnabled("Disable AW", at);
UI.SetEnabled("Enable AW", at);
UI.SetEnabled("X Autowall Indicator", at);
UI.SetEnabled("Y Autowall Indicator", at);
const ate = UI.GetValue("Disable on weapons")
UI.SetEnabled("Weapons",ate)
const andi = UI.GetValue("Semirage");
UI.SetEnabled("Rage Option", andi);
UI.SetEnabled("Rage Indicator", andi);
UI.SetEnabled("Fake Duck MM", andi);
const epla = UI.GetValue("Rage Option");
UI.SetEnabled("Legit AA on rage", epla);
UI.SetEnabled("Rage on key", epla);
const epl = UI.GetValue("Legit AA on rage");
UI.SetEnabled("Legit AA", epl);
UI.SetEnabled("Inv. Color", epl);
UI.SetEnabled("X Indicator", epl);
UI.SetEnabled("Y Indicator", epl);
const indi = UI.GetValue("Rage Indicator");
UI.SetEnabled("X Rage Indicator", indi);
UI.SetEnabled("Y Rage Indicator", indi);  
UI.SetEnabled("Rage Enabled", indi);
UI.SetEnabled("Rage Disabled", indi);
const plo = UI.GetValue("Fake Duck MM");
UI.SetEnabled("Fake Duck", plo);
}

var wCategory = { "usp s": "Pistol", "glock 18": "Pistol", "p2000": "Pistol", "dual berettas": "Pistol", "r8 revolver": "Heavy Pistol", "desert eagle": "Heavy Pistol", "p250": "Pistol", "tec 9": "Pistol", "five seven": "Pistol", "mp9": "SMG", "mac 10": "SMG", "pp bizon": "SMG", "p90": "SMG", "mp7": "SMG", "ump 45": "SMG", "ak 47": "Heavy", "famas": "Heavy", "sg 553": "Heavy", "aug": "Heavy", "m4a1 s": "Heavy", "recortada": "Heavy", "m4a4": "Heavy", "ssg 08": "Scout", "awp": "AWP", "g3sg1": "Auto", "scar 20": "Auto", "nova": "Heavy", "xm1014": "Heavy", "mag 7": "Heavy", "m249": "Heavy", "negev": "Heavy"
};

function weaponType() {
var localEnt = Entity.GetLocalPlayer();
var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
if (wCategory[weapon] == undefined)
return "";
return wCategory[weapon];
}

function indi() {
disableall();
ali();
const color = UI.GetColor( "Misc", "JAVASCRIPT", "Script items", "Enable AW" );
const r = color[0];
const g = color[1];
const b = color[2];
const col = UI.GetColor( "Misc", "JAVASCRIPT", "Script items", "Disable AW" );
const a = col[0];
const e = col[1];
const c = col[2];
var x = UI.GetValue( "Script items", "X Autowall Indicator" );
var y = UI.GetValue( "Script items", "Y Autowall Indicator" );
var on = UI.GetValue( "Script items", "Autowall Indicator" );
var pistol = UI.GetValue( "Rage", "PISTOL", "Disable autowall" );
var general = UI.GetValue( "Rage", "GENERAL", "Targeting", "Disable autowall" );
var heavy = UI.GetValue( "Rage", "HEAVY PISTOL", "Disable autowall" );
var scout = UI.GetValue( "Rage", "SCOUT", "Disable autowall" );
var awp = UI.GetValue( "Rage", "AWP", "Disable autowall" );
var auto = UI.GetValue( "Rage", "AUTOSNIPER", "Disable autowall" );
var localEnt = Entity.GetLocalPlayer();
var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
if (on) {
    if (wCategory[weapon] == "Pistol") { if (pistol) { Render.String(x, y, 0, "Pistol AW", col, 4); } else { Render.String(x, y, 0, "Pistol AW", color, 4); } }
    if (wCategory[weapon] == "Heavy" || wCategory[weapon] == "SMG") { if (general) { Render.String(x, y, 0, "General AW", col, 4); } else { Render.String(x, y, 0, "General AW", color, 4); } }
    if (wCategory[weapon] == "Heavy Pistol") { if (heavy) { Render.String(x, y, 0, "Heavy AW", col, 4); } else { Render.String(x, y, 0, "Heavy AW", color, 4); } }
    if (wCategory[weapon] == "Scout") { if (scout) { Render.String(x, y, 0, "Scout AW", col, 4); } else { Render.String(x, y, 0, "Scout AW", color, 4); } }
    if (wCategory[weapon] == "AWP") { if (awp) { Render.String(x, y, 0, "AWP AW", col, 4); } else { Render.String(x, y, 0, "AWP AW", color, 4); } }
    if (wCategory[weapon] == "Auto") { if (auto) { Render.String(x, y, 0, "Auto AW", col, 4); } else { Render.String(x, y, 0, "Auto AW", color, 4); } }
}
}

function allauto(){
disableall();
ali();
var osa = UI.GetValue( "Script items", "All Autowall On Key");
var enable = (UI.IsHotkeyActive( "Script items", "All On Key" ));
if (osa) {
if (enable) {
UI.SetValue( "Rage", "GENERAL", "Targeting", "Disable autowall", true );
UI.SetValue( "Rage", "PISTOL", "Pistol config", "Disable autowall", true );
UI.SetValue( "Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall", true );
UI.SetValue( "Rage", "SCOUT", "Scout config", "Disable autowall", true );  
UI.SetValue( "Rage", "AWP", "AWP config", "Disable autowall", true );
UI.SetValue( "Rage", "AUTOSNIPER", "Auto config", "Disable autowall", true );
} else {
UI.SetValue( "Rage", "GENERAL", "Targeting", "Disable autowall", false );
UI.SetValue( "Rage", "PISTOL", "Pistol config", "Disable autowall", false );
UI.SetValue( "Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall", false );
UI.SetValue( "Rage", "SCOUT", "Scout config", "Disable autowall", false ); 
UI.SetValue( "Rage", "AWP", "AWP config", "Disable autowall", false );
UI.SetValue( "Rage", "AUTOSNIPER", "Auto config", "Disable autowall", false );
}
}
}

function oneauto() {
disableall();
ali();
var enable = UI.GetValue("Script items", "Disable on weapons");
var osap = UI.GetValue( "Script items", "All Autowall On Key");
const dropdown_value = UI.GetValue.apply(null, weapon);
if (enable) {
if(dropdown_value & (1 << 0)) { UI.SetValue( "Rage", "GENERAL", "Targeting", "Disable autowall", true ); } else { UI.SetValue( "Rage", "GENERAL", "Targeting", "Disable autowall", false ); }
if(dropdown_value & (1 << 1)) { UI.SetValue( "Rage", "PISTOL", "Pistol config", "Disable autowall", true ); } else { UI.SetValue( "Rage", "PISTOL", "Pistol config", "Disable autowall", false ); }
if(dropdown_value & (1 << 2)) { UI.SetValue( "Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall", true ); } else { UI.SetValue( "Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall", false ); }
if(dropdown_value & (1 << 3)) { UI.SetValue( "Rage", "SCOUT", "Scout config", "Disable autowall", true ); } else { UI.SetValue( "Rage", "SCOUT", "Scout config", "Disable autowall", false ); }
if(dropdown_value & (1 << 4)) { UI.SetValue( "Rage", "AWP", "AWP config", "Disable autowall", true ); } else { UI.SetValue( "Rage", "AWP", "AWP config", "Disable autowall", false ); }
if(dropdown_value & (1 << 5)) { UI.SetValue( "Rage", "AUTOSNIPER", "Auto config", "Disable autowall", true ); } else { UI.SetValue( "Rage", "AUTOSNIPER", "Auto config", "Disable autowall", false ); }
if (osap) { Render.String( 960, 600, 0, "Dont use options together", [255, 0, 0, 255], 4); }
}
}

function angle_diff(angle_1, angle_2)
{
    var delta = angle_1 - angle_2;
    delta %= 360;
    if(delta > 180)
    {
        delta -= 360;
    }
    if(delta < -180)
    {
        delta += 360;
    }
    return delta;
}

function legit() {
var x = UI.GetValue("Script items", "X Indicator")
var y =  UI.GetValue("Script items", "Y Indicator")
const col = UI.GetColor( "Misc", "JAVASCRIPT", "Script items", "Inv. Color" );
const dropdown_value = UI.GetValue.apply(null, dropdown);
var enable = UI.GetValue("Rage", "GENERAL", "General", "Enabled");
var enb = UI.GetValue("Script items", "Legit AA on rage")
var inv = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter") ? 1 : 0;
if (enb) {
if (enable) {
if(dropdown_value & (1 << 0)) {
UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
if(UI.GetValue("Anti-Aim", "Fake angles", "LBY mode") == 1) {
AntiAim.SetOverride(1);
var fake_direction = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter") == 1 ? 1 : -1;
var real_yaw_offset = 60 * fake_direction;
var lower_body_offset = -60 * fake_direction;
var current_fake_yaw = Local.GetFakeYaw();
var current_real_yaw = Local.GetRealYaw();
if(Math.abs(angle_diff(current_fake_yaw, current_real_yaw)) > 100) {
lower_body_offset = 180;
}
AntiAim.SetFakeOffset(0);
AntiAim.SetRealOffset(real_yaw_offset);
AntiAim.SetLBYOffset(lower_body_offset);
} else {
AntiAim.SetOverride(0);
}
}
}
if(dropdown_value & (1 << 1)) {
if (enb) {
if (enable) {
if (inv) {
    Render.String(x, y, 0, "FAKE: RIGHT", col, 0);
} else {
    Render.String(x, y, 0, "FAKE: LEFT", col, 0);
}
}
}
}
}
}

function rage() {
disableall();
ali();
const color = UI.GetColor( "Misc", "JAVASCRIPT", "Script items", "Rage Enabled" );
const col = UI.GetColor( "Misc", "JAVASCRIPT", "Script items", "Rage Disabled" );
var mast = UI.GetValue( "Script items", "Semirage" );
var enb = UI.GetValue( "Script items", "Rage Option" );
var legit = UI.GetValue( "Script items", "Legit AA on rage" )
var enable = (UI.IsHotkeyActive( "Script items", "Rage on key" ));
var one = UI.GetValue( "Script items", "Rage Indicator" );
var x = UI.GetValue( "Script items", "X Rage Indicator" );
var y = UI.GetValue( "Script items", "Y Rage Indicator" );
var indi = UI.GetValue( "Rage", "GENERAL", "General", "Enabled" );
if (mast) {
    if (one) { if (indi) { Render.String(x, y, 0, "Rage", color, 4); } else { Render.String(x, y, 0, "Rage", col, 4); } }
if (enb) {
if (enable) {
if (legit) {
UI.SetValue ("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0)
UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180)
UI.SetValue ("Anti-Aim", "Extra", "Pitch", 0)
} else {
UI.SetValue ("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 1)
UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0)
}
UI.SetValue("Rage", "GENERAL", "General", "Enabled", true);
UI.SetValue("Legit", "GENERAL", "General", "Enabled", false);
} else {
UI.SetValue("Rage", "GENERAL", "General", "Enabled", false);
UI.SetValue("Legit", "GENERAL", "General", "Enabled", true);
}
}
}
}

var bSendPacket = false;
var do1 = false;
var cnt = 0;
const buttons = UserCMD.GetButtons();
var shouldSend = false;

function on_create_move() {
var buttons = UserCMD.GetButtons();
if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Fake Duck MM"))
UserCMD.SetButtons(buttons | (1 << 22));
}

function choked_commands() {
if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Fake Duck MM")) {
if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Fake Duck" )) {
shouldSend = true; 
bSendPacket = false;
FakelagShouldLag = false;
if (cnt % 14 == 0)
do1 = false;
if (cnt % 14 == 6)
bSendPacket = true;
else if (cnt % 14 == 7)
do1 = true;
if (do1)
UserCMD.SetButtons(buttons | (1 << 2));
cnt++;
} else {
do1 = false;
shouldSend = false;
cnt = 0;
}
}
}

function sendpacket() {
if(shouldSend) {
if(bSendPacket)
UserCMD.Send()
else UserCMD.Choke()
}
}

function unload() {
    AntiAim.SetOverride(0);
}

Cheat.PrintColor([0, 255, 0, 255], "DXgamerawr890#5983" );
Cheat.RegisterCallback("Draw", "indi")
Cheat.RegisterCallback("Draw", "allauto" )
Cheat.RegisterCallback("Draw", "oneauto" )
Cheat.RegisterCallback("Draw", "legit")
Cheat.RegisterCallback("Draw", "rage")
Cheat.RegisterCallback("CreateMove", "on_create_move");
Cheat.RegisterCallback("CreateMove", "choked_commands")
Cheat.RegisterCallback("CreateMove", "sendpacket")
Cheat.RegisterCallback("Unload", "unload")
UI.SetValue("Script items", "X Autowall Indicator", 960);
UI.SetValue("Script items", "Y Autowall Indicator", 540);
UI.SetValue("Script items", "X Indicator", 960);
UI.SetValue("Script items", "Y Indicator", 570);
UI.SetValue("Script items", "X Rage Indicator", 960);
UI.SetValue("Script items", "Y Rage Indicator", 570);