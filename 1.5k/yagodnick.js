function calcDist(local, target) {
    var lx = local[0];
    var ly = local[1];
    var lz = local[2];
    var tx = target[0];
    var ty = target[1];
    var tz = target[2];
    var dx = lx - tx;
    var dy = ly - ty;
    var dz = lz - tz;
 
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
function getDmg(c4) {
    local = Entity.GetLocalPlayer();
    var c4 = Entity.GetEntitiesByClassID(128)[0];
    if (c4 == undefined) return;
    var eLoc = Entity.GetRenderOrigin(c4);
    var lLoc = Entity.GetRenderOrigin(local)
    var distance = calcDist(eLoc, lLoc);
    var willKill = false;
    var dmg;
    var armor = Entity.GetProp(local, "CCSPlayerResource", "m_iArmor");
    var health = Entity.GetProp(local, "CBasePlayer", "m_iHealth");
    var length = Entity.GetProp(c4, "CPlantedC4", "m_flTimerLength");
    var timer = (Entity.GetProp(c4, "CPlantedC4", "m_flC4Blow") - Globals.Curtime());
    var bar_length = (((Render.GetScreenSize()[1] - 50) / length) * (timer));
 
 
    const a = 450.7;
    const b = 75.68;
    const c = 789.2;
 
    const d = (distance - b) / c;
 
    var damage = a * Math.exp(-d * d);
 
    if (armor > 0) {
        var newDmg = damage * 0.5;
        var armorDmg = (damage - newDmg) * 0.5;
 
        if (armorDmg > armor) {
            armor = armor * (1 / .5);
            newDmg = damage - armorDmg;
        }
        damage = newDmg;
    }
    dmg = Math.ceil(damage);
	return dmg;
}

function getTimer(c4) {
    var length = Entity.GetProp(c4, "CPlantedC4", "m_flTimerLength");
    var timer = (Entity.GetProp(c4, "CPlantedC4", "m_flC4Blow") - Globals.Curtime());
	return timer;
}
 
function getSite(c4) {
    bombsite = Entity.GetProp(c4, "CPlantedC4", "m_nBombSite");
 
    if (bombsite == 0) {
        return "A";
    } else {
        return "B";
    }
}
var chargestate;
lbySwitch = false;
function on_cm() {
	if(!World.GetServerString() || Entity.IsAlive(Entity.GetLocalPlayer()) == false) return;
	AntiAim.SetOverride(1);
	lbySwitch ? lbySwitch = false : lbySwitch = true;
    AntiAim.SetFakeOffset(lbySwitch ? 15 : 0);
    AntiAim.SetRealOffset(-45);
    AntiAim.SetLBYOffset(lbySwitch ? 70 : 170);
	chargestate = Exploit.GetCharge();
}
var enabled = false;
UI.AddSliderInt("Indicators position", 0, 64);
function main() {
	if(!World.GetServerString() || Entity.IsAlive(Entity.GetLocalPlayer()) == false) return;
	var weaponid = Entity.GetWeapon(Entity.GetLocalPlayer());
	var nextattack = Entity.GetProp( weaponid, "CBaseCombatWeapon", "m_flNextPrimaryAttack" ) + 1;
	var CanShoot = false;
	var offset = 0;
	var indfont = Render.AddFont( "Calibri", 18, 900);
	var indred = 123;
	var indgreen = 192;
	var lcred = 123;
	var lcgreen = 192;
	var otred = 123;
	var otgreen = 192;
	var RealYaw = Local.GetRealYaw();
	var FakeYaw = Local.GetFakeYaw();
	var DesyncWidth = Math.abs(RealYaw - FakeYaw);
	var velocity = Entity.GetProp( Entity.GetLocalPlayer(), "CBasePlayer", "m_vecVelocity[0]" );
    var speed = Math.sqrt( velocity[0] * velocity[0] + velocity[1] * velocity[1] );
	if (nextattack <= Globals.Curtime()) {
		CanShoot = true;
	}
	if (DesyncWidth >= 55) {
		indred = 124;
		indgreen = 195;
	}
	else if (DesyncWidth < 55 && DesyncWidth >= 50) {
		indred = 150;
		indgreen = 194;
	}
	else if (DesyncWidth < 50 && DesyncWidth >= 45) {
		indred = 176;
		indgreen = 205;
	}
	else if (DesyncWidth < 45 && DesyncWidth >= 40) {
		indred = 213;
		indgreen = 201;
	}
	else if (DesyncWidth < 40 && DesyncWidth >= 35) {
		indred = 220;
		indgreen = 169;
	}
	else if (DesyncWidth < 35 && DesyncWidth >= 30) {
		indred = 228;
		indgreen = 126;
	}
	else if (DesyncWidth < 30 && DesyncWidth >= 25) {
		indred = 229;
		indgreen = 104;
	}
	else if (DesyncWidth < 25 && DesyncWidth >= 20) {
		indred = 235;
		indgreen = 63;
	}
	else if (DesyncWidth < 20 && DesyncWidth >= 1) {
		indred = 237;
		indgreen = 27;
	}
	else {
		indred = 255;
		indgreen = 0;
	}
	
	if (speed > 290) {
		lcred = 123;
		lcgreen = 192;
	}
	else {
		lcred = 255;
		lcgreen = 0;
	}
	if (chargestate > 0.9 && CanShoot == true) {
		var otred = 123;
		var otgreen = 192;
	}
	else if (chargestate > 0.9 ) {
		var otred = 192;
		var otgreen = 192;
	}
	else {
		var otred = 255;
		var otgreen = 0;
	}
	if ((Entity.GetClassID(Entity.GetWeapon(Entity.GetLocalPlayer())) == 266 || Entity.GetClassID(Entity.GetWeapon(Entity.GetLocalPlayer())) == 232) && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
		UI.ToggleHotkey("Rage", "Exploits", "Doubletap");
	}
	/*if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots") && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap") && chargestate < 0.9) {
		UI.ToggleHotkey("Rage", "Exploits", "Hide shots");
	}
	if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots") == false && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap") && chargestate > 0.9) {
		UI.ToggleHotkey("Rage", "Exploits", "Hide shots");
	}
	if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots") && chargestate < 0.9) {
		if ((Globals.Curtime() * 2 - aabar) > 1) {
			aabar = Globals.Curtime() * 2;
		}
	}*/
	var repos = UI.GetValue("Misc", "Javascript", "Script items", "Indicators position");
	/*if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
		var width = 0;
		if ((Globals.Curtime() * 2 - aabar) > 1) {
			width = 28;
		}
		else {
			width = (Globals.Curtime() * 2 - aabar) * 28;
		}
		Render.StringCustom( 11, 1080 - 70 - offset - repos * 29, 0, "AA", [0, 0, 0, 180], indfont)
		Render.StringCustom( 10, 1080 - 71 - offset - repos * 29, 0, "AA", [255, 255, 255, 255], indfont)
		Render.FilledRect(10, 1080 - 71 - offset + 26 - repos * 29, 30, 4, [0,0,0,100]);
		Render.FilledRect(11, 1080 - 71 - offset + 27 - repos * 29, width, 2, [124,195,21,255]);
		offset += 29;
	}*/
	
	if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
		Render.StringCustom( 11, 1080 - 70 - offset - repos * 29, 0, "DUCK", [0, 0, 0, 180], indfont)
		Render.StringCustom( 10, 1080 - 71 - offset - repos * 29, 0, "DUCK", [255, 255, 255, 255], indfont)
		offset += 29;
	}
	
	if (speed > 260) {
		Render.StringCustom( 11, 1080 - 70 - offset - repos * 29, 0, "LC", [0, 0, 0, 180], indfont)
		Render.StringCustom( 10, 1080 - 71 - offset - repos * 29, 0, "LC", [lcred, lcgreen, 21, 255], indfont)
		offset += 29;
	}
	
	Render.StringCustom( 11, 1080 - 70  - offset - repos * 29, 0, "FAKE", [0, 0, 0, 180], indfont)
	Render.StringCustom( 10, 1080 - 71  - offset - repos * 29, 0, "FAKE", [indred, indgreen, 21, 255], indfont)
	offset += 29;
	if (Entity.GetClassID(Entity.GetWeapon(Entity.GetLocalPlayer())) != 266 && Entity.GetClassID(Entity.GetWeapon(Entity.GetLocalPlayer())) != 107 && Entity.GetClassID(Entity.GetWeapon(Entity.GetLocalPlayer())) != 232) {
		if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
			Render.StringCustom( 11, 1080 - 70 - offset - repos * 29, 0, "DT", [0, 0, 0, 180], indfont);
			Render.StringCustom( 10, 1080 - 71 - offset - repos * 29, 0, "DT", [otred, otgreen, 21, 255], indfont);
			offset += 29;
		}
	}
	var indfont = Render.AddFont( "Calibri", 18, 900);
	var c4 = Entity.GetEntitiesByClassID(128)[0];
    if (c4 == undefined) return;
	if (getTimer(c4) > 10) {
		Render.StringCustom( 6, 6, 0, getSite(c4).toString() + " - " + getTimer(c4).toString().substr(0, 4) + "s", [0, 0, 0, 180], indfont);
		Render.StringCustom( 5, 5, 0, getSite(c4).toString() + " - " + getTimer(c4).toString().substr(0, 4) + "s", [123, 194, 21, 255], indfont);
	}
	else if (getTimer(c4) > 5) {
		Render.StringCustom( 6, 6, 0, getSite(c4).toString() + " - " + getTimer(c4).toString().substr(0, 3) + "s", [0, 0, 0, 180], indfont);
		Render.StringCustom( 5, 5, 0, getSite(c4).toString() + " - " + getTimer(c4).toString().substr(0, 3) + "s", [240, 220, 150, 255], indfont);
	}
	else if (getTimer(c4) > 0.1) {
		Render.StringCustom( 6, 6, 0, getSite(c4).toString() + " - " + getTimer(c4).toString().substr(0, 3) + "s", [0, 0, 0, 180], indfont);
		Render.StringCustom( 5, 5, 0, getSite(c4).toString() + " - " + getTimer(c4).toString().substr(0, 3) + "s", [255, 0, 21, 255], indfont);
	}
	
	if (getTimer(c4) > 0.1 && getDmg(c4) > 100) {
		Render.StringCustom( 6, 35, 0, "FATAL", [0, 0, 0, 180], indfont);
		Render.StringCustom( 5, 34, 0, "FATAL", [255, 0, 21, 255], indfont);
	}
	else if (getTimer(c4) > 0.1 && getDmg(c4) > 1) {
		Render.StringCustom( 6, 35, 0, "-"+getDmg(c4).toString()+" HP", [0, 0, 0, 180], indfont);
		Render.StringCustom( 5, 34, 0, "-"+getDmg(c4).toString()+" HP", [240, 220, 150, 255], indfont);
	}
}
Cheat.RegisterCallback("CreateMove", "on_cm")
Cheat.RegisterCallback("Draw", "main");