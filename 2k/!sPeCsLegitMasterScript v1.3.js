/*    _____      _____ _       _                _ _     __  __           _               _____           _       _          __   ____
     |  __ \    / ____( )     | |              (_) |   |  \/  |         | |             / ____|         (_)     | |        /_ | |___ \
  ___| |__) |__| |    |/ ___  | |     ___  __ _ _| |_  | \  / | __ _ ___| |_ ___ _ __  | (___   ___ _ __ _ _ __ | |_  __   _| |   __) |
 / __|  ___/ _ \ |      / __| | |    / _ \/ _` | | __| | |\/| |/ _` / __| __/ _ \ '__|  \___ \ / __| '__| | '_ \| __| \ \ / / |  |__ <
 \__ \ |  |  __/ |____  \__ \ | |___|  __/ (_| | | |_  | |  | | (_| \__ \ ||  __/ |     ____) | (__| |  | | |_) | |_   \ V /| |_ ___) |
 |___/_|   \___|\_____| |___/ |______\___|\__, |_|\__| |_|  |_|\__,_|___/\__\___|_|    |_____/ \___|_|  |_| .__/ \__|   \_/ |_(_)____/
                                           __/ |                                                          | |
                                          |___/                                                           |_|                          */

Cheat.RegisterCallback("Draw", "drawShit");
Cheat.RegisterCallback("CreateMove", "moveBitch");
Cheat.RegisterCallback("vote_options", "onVoteOptions");
Cheat.RegisterCallback("vote_cast", "onVoteCast");
Cheat.RegisterCallback("weapon_fire", "onWeaponFire");
Cheat.RegisterCallback("round_start", "onRoundStart");
Cheat.RegisterCallback("player_radio", "onRadio");
Cheat.RegisterCallback("buytime_ended", "buyTimeOver");
Cheat.RegisterCallback("round_start", "onReset");
Cheat.RegisterCallback("player_jump", "onJump");

function main() {
	screenSize = Render.GetScreenSize();
	
    UI.AddSliderInt(" -> sPeC's Legit Master Script <-", -1, 0);

	UI.AddCheckbox("Anti-Flicker");
	UI.AddSliderInt("Max Ping", 100, 200);
	UI.AddLabel("________________________________________");
	UI.AddCheckbox("Anti Trigger");
	UI.AddSliderInt("Limit", 0, 16);
	UI.AddSliderInt("Jitter", 0, 100);
	UI.AddSliderInt("Trigger Limit", 0, 16);
	UI.AddMultiDropdown("Triggers", ["In Air", "On Peek", "On Shot", "On Land", "While Reloading", "Weapon Switch", "Velocity Change", "Break Lag Comp"]);
	UI.AddCheckbox("Ignore Bots");
	UI.AddCheckbox("Show Indicator");
	UI.AddSliderInt("Indicator X", 0, (screenSize[0] - 80));
	UI.AddSliderInt("Indicator Y", 0, (screenSize[1] - 40));
	UI.AddSliderInt("Indicator Size", 10, 40);
	UI.AddLabel("________________________________________");
	UI.AddCheckbox("Slow Walk");
	UI.AddHotkey("Hotkey:");
	UI.AddSliderInt("Speed:", 1, 135);
	UI.AddLabel("________________________________________");
	UI.AddCheckbox("Rage on Key");
	UI.AddHotkey("Rage Key");
	UI.AddCheckbox("Avoid Auto Wall");
	UI.AddCheckbox("Use Trigger Ragebot");
	UI.AddLabel("________________________________________");
	UI.AddDropdown("Auto Stop", ["Disabled", "Counter Strafe", "Full Stop"]);
	UI.AddMultiDropdown("Jump Shot", ["AWP", "SSG", "Deagle"]);
	UI.AddSliderInt("AWP Hit Chance", 0, 100);
	UI.AddSliderInt("SSG Hit Chance", 0, 100);
	UI.AddSliderInt("Deagle Hit Chance", 0, 100);
	UI.AddMultiDropdown("Quick Switch", ["AWP", "SSG", "Deagle", "Rifles", "Pistols"]);
	UI.AddLabel("________________________________________");
	UI.AddCheckbox("Anti Media");
	UI.AddCheckbox("Reset Anti Media");
	UI.AddCheckbox("Keep Bots in Spawn");
	UI.AddCheckbox("Show Votes");
	UI.AddSliderInt("                 -> v1.3 <-", -1, 0);
	
	if (UI.IsHotkeyActive("Legit", "Triggerbot")) { isTrigger = true; } else { isTrigger = false; }
	if (getVal("Auto Stop") == 257) { UI.SetValue("Script items", "Auto Stop", 0); }
	flOn = UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled");
	oCTag = UI.GetValue("Misc", "GENERAL", "Miscellaneous", "Clantag");
	if (flOn){
		oLimit = UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");
		oJitter = UI.GetValue("Anti-Aim", "Fake-Lag", "Jitter");
		oTrigs = UI.GetValue("Anti-Aim", "Fake-Lag", "Triggers");
		oTLimit = UI.GetValue("Anti-Aim", "Fake-Lag", "Trigger limit");
	} else {
		oLimit = 0;
		oJitter = 0;
		oTLimit = 0;
		oTrigs = "None";
	}
	jSniper = false;
	jDeag = false;
	oSHC = UI.GetValue("Legit", "SNIPER", "Sniper config", "Triggerbot hitchance");
	oDHC = UI.GetValue("Legit", "GENERAL", "Default config", "Triggerbot hitchance");
	UI.SetEnabled("Max Ping", false);
	UI.SetEnabled("Limit", false);
	UI.SetEnabled("Jitter", false);
	UI.SetEnabled("Trigger Limit", false);
	UI.SetEnabled("Triggers", false);
	UI.SetEnabled("Ignore Bots", false);
	UI.SetEnabled("Show Indicator", false);
	UI.SetEnabled("Indicator X", false);
	UI.SetEnabled("Indicator Y", false);
	UI.SetEnabled("Indicator Size", false);
	UI.SetEnabled("AWP Hit Chance", false);
	UI.SetEnabled("SSG Hit Chance", false);
	UI.SetEnabled("Deagle Hit Chance", false);
	UI.SetEnabled("Hotkey:", false);
	UI.SetEnabled("Speed:", false);
	UI.SetEnabled("Rage Key", false);
	UI.SetEnabled("Avoid Auto Wall", false);
	UI.SetEnabled("Use Trigger Ragebot", false);
	UI.SetEnabled("Reset Anti Media", false);
	
	Cheat.PrintColor([0, 255, 255, 255], "\n\n======================================================================\n");
	Cheat.PrintColor([0, 255, 255, 255], "\n    - - - > sPeC's Legit Master Script v1.3 has been loaded! < - - -");
	Cheat.PrintColor([0, 255, 255, 255], "\n\n======================================================================\n");
	Cheat.PrintChat(" \x06sPeC's Legit Master Script has been loaded! \x0E[ \x06v1.3 \x0E] ");
}

function getVal(valueName) {
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valueName);
}

function vectorangles(forward) {
	var angles = []
	if (forward[1] == 0 && forward[0] == 0) {
		angles[0] = forward[2] > 0 ? 270 : 90
		angles[1] = 0
	}
	else {
		angles[0] = Math.atan2(-forward[2], Math.sqrt(forward[0] * forward[0] + forward[1] * forward[1])) * -180 / Math.PI
		angles[1] = Math.atan2(forward[1], forward[0]) * 180 / Math.PI
		if (angles[1] > 90)
			angles[1] -= 180
		else if (angles[1] < 90)
			angles[1] += 180
		else if (angles[1] == 90)
			angles[1] = 0
	}
	return angles
}
function anglevectors(angles) {
	var sy = Math.sin(angles[1] * 180 / Math.PI)
	var cy = Math.cos(angles[1] * 180 / Math.PI)
	var sp = Math.sin(angles[0] * 180 / Math.PI)
	var cp = Math.cos(angles[0] * 180 / Math.PI)
	return [cp * cy, cp * sy, -sp]
}
var currentAction = 2
var lastTickShot = 0
function onReset() {
	lastTickShot = 0
}
var lasttarget = 0

main();
visPeeking = false;
visiblePeeking = false;
time = Globals.Curtime();
var tickRate = Globals.Tickcount();
const ping = Math.floor(Global.Latency() * 1000 / 1.5);
const fps = Math.floor(1 / Global.Frametime());
var last_set = 0;
var delay = 5;
var stopBots = false;
var teamC = "\x0B";
var voteC = "\x07";
headVisible = 1;
lHandVisible = 1;
rHandVisible = 1;
lFootVisible = 1;
rFootVisible = 1;

function onRadio() {
	userID = Event.GetInt("userid")
	response = Event.GetInt("slot");
	userID_index = Entity.GetEntityFromUserID(userID);
	if (Entity.IsBot(userID_index) && response == 2) {
		stopBots = false;
	}
}

function buyTimeOver() {
	stopBots = false;
}

function onRoundStart() {
	stopBots = true;
}

function drawShit() {
	visPeeking = false;
	headVis = false;
	lFootVis = false;
	rFootVis = false;
	lHandVis = false;
	rHandVis = false;
	enemies = Entity.GetEnemies();
	if (getVal("Anti Trigger") || getVal("Trigger Ragebot") || getVal("Auto Stop") != 0) {
		for (i = 0; i < enemies.length; i++) {
			localEnt = Entity.GetLocalPlayer();
			localHeadPos = Entity.GetHitboxPosition(localEnt, 0);
			localEyePos = Entity.GetEyePosition(localEnt);
			localRFootPos = Entity.GetHitboxPosition(localEnt, 12);
			localLFootPos = Entity.GetHitboxPosition(localEnt, 11);
			localLHandPos = Entity.GetHitboxPosition(localEnt, 13);
			localRHandPos = Entity.GetHitboxPosition(localEnt, 14);
			headHitbox = Entity.GetHitboxPosition(enemies[i], 0);
			lFootHitbox = Entity.GetHitboxPosition(enemies[i], 11);
			rFootHitbox = Entity.GetHitboxPosition(enemies[i], 12);
			lHandHitbox = Entity.GetHitboxPosition(enemies[i], 13);
			rHandHitbox = Entity.GetHitboxPosition(enemies[i], 14);
			headToHeadBT = Trace.Bullet(enemies[i], localEnt, headHitbox, localHeadPos);
			headVis = 1;
			if (headToHeadBT != null) { headVis = headToHeadBT[1]; }
			headToLHandBT = Trace.Bullet(enemies[i], localEnt, lHandHitbox, localHeadPos);
			lHandVis = 1;
			if (headToLHandBT != null) { lHandVis = headToLHandBT[1]; }
			lFootToLHandBT = Trace.Bullet(enemies[i], localEnt, lHandHitbox, localLFootPos);
			lHandVis = 1;
			if (lFootToLHandBT != null) { lHandVis = lFootToLHandBT[1]; }
			headToRHandBT = Trace.Bullet(enemies[i], localEnt, rHandHitbox, localHeadPos);
			rHandVis = 1;
			if (headToRHandBT != null) { rHandVis = headToRHandBT[1]; }
			rFootToRHandBT = Trace.Bullet(enemies[i], localEnt, rHandHitbox, localRFootPos);
			rHandVis = 1;
			if (rFootToRHandBT != null) { rHandVis = rFootToRHandBT[1]; }
			lHandToLFootBT = Trace.Bullet(enemies[i], localEnt, lFootHitbox, localLHandPos);
			lFootVis = 1;
			if (lHandToLFootBT != null) { lFootVis = lHandToLFootBT[1]; }
			lFootToLFootBT = Trace.Bullet(enemies[i], localEnt, lFootHitbox, localLFootPos);
			lFootVis = 1;
			if (lFootToLFootBT != null) { lFootVis = lFootToLFootBT[1]; }
			rHandToRFootBT = Trace.Bullet(enemies[i], localEnt, rFootHitbox, localRHandPos);
			rFootVis = 1;
			if (rHandToRFootBT != null) { rFootVis = rHandToRFootBT[1]; }
			rFootToRFootBT = Trace.Bullet(enemies[i], localEnt, rFootHitbox, localRFootPos);
			rFootVis = 1;
			if (rFootToRFootBT != null) { rFootVis = rFootToRFootBT[1]; }

			if (getVal("Anti Trigger") && getVal("Ignore Bots")) {
				if (Entity.IsValid(enemies[i]) && !Entity.IsDormant(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsBot(enemies[i])) {
					if (headVis >= 1 || lHandVis >= 1 || rHandVis >= 1 || lFootVis >= 1 || rFootVis >= 1) {
						visPeeking = true;
					}
				}
			}
			if (getVal("Anti Trigger") || getVal("Trigger Ragebot")) {
				if (Entity.IsValid(enemies[i]) && !Entity.IsDormant(enemies[i]) && Entity.IsAlive(enemies[i])) {
					if (headVis >= 1 || lHandVis >= 1 || rHandVis >= 1 || lFootVis >= 1 || rFootVis >= 1) {
						visPeeking = true;
					}
				}
			}
		}
	}

	if (getVal("Anti Trigger")) {
		localEnt = Entity.GetLocalPlayer();
		UI.SetEnabled("Limit", true);
		UI.SetEnabled("Jitter", true);
		UI.SetEnabled("Trigger Limit", true);
		UI.SetEnabled("Triggers", true);
		UI.SetEnabled("Ignore Bots", true);
		UI.SetEnabled("Show Indicator", true);
		indX = getVal("Indicator X");
		indY = getVal("Indicator Y");
		indS = getVal("Indicator Size");
		nLimit = getVal("Limit");
		nJitter = getVal("Jitter");
		nTLimit = getVal("Trigger Limit");
		nTrigs = getVal("Triggers");

		if (getVal("Show Indicator")) {
			UI.SetEnabled("Indicator X", true);
			UI.SetEnabled("Indicator Y", true);
			UI.SetEnabled("Indicator Size", true);
		} else {
			UI.SetEnabled("Indicator X", false);
			UI.SetEnabled("Indicator Y", false);
			UI.SetEnabled("Indicator Size", false);
		}

		if (!Entity.IsAlive(localEnt) && !Entity.IsValid(localEnt)) {
			nLimit = oLimit;
			nJitter = oJitter;
			nTLimit = oTLimit;
			nTrigs = oTrigs;
			visPeeking = false;
		}

		if (visPeeking) {
			UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 1);
			UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", nLimit);
			UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", nJitter);
			UI.SetValue("Anti-Aim", "Fake-Lag", "Triggers", nTrigs);
			UI.SetValue("Anti-Aim", "Fake-Lag", "Trigger limit", nTLimit);

			if (getVal("Show Indicator")) {
				Render.String((indX + 1), (indY + 1), 0, "PEEKING", [19, 19, 19, 255], indS);
				Render.String(indX, indY, 0, "PEEKING", [50, 255, 50, 255], indS);
			}
		} else {
			if (getVal("Show Indicator")) {
				Render.String((indX + 1), (indY + 1), 0, "NOT PEEKING", [19, 19, 19, 255], indS);
				Render.String(indX, indY, 0, "NOT PEEKING", [220, 20, 20, 255], indS);
			}
			if (flOn == 1) {
				UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 1);
				UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", oLimit);
				UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", oJitter);
				UI.SetValue("Anti-Aim", "Fake-Lag", "Triggers", oTrigs);
				UI.SetValue("Anti-Aim", "Fake-Lag", "Trigger limit", oTLimit);
			} else {
				UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 0);
				UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", oLimit);
				UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", oJitter);
				UI.SetValue("Anti-Aim", "Fake-Lag", "Triggers", oTrigs);
				UI.SetValue("Anti-Aim", "Fake-Lag", "Trigger limit", oTLimit);
			}
		}
	} else {
		UI.SetEnabled("Limit", false);
		UI.SetEnabled("Jitter", false);
		UI.SetEnabled("Trigger Limit", false);
		UI.SetEnabled("Triggers", false);
		UI.SetEnabled("Ignore Bots", false);
		UI.SetEnabled("Show Indicator", false);
		UI.SetEnabled("Indicator X", false);
		UI.SetEnabled("Indicator Y", false);
		UI.SetEnabled("Indicator Size", false);
	}

	if (getVal("Rage on Key")) {
		UI.SetEnabled("Rage Key", true);
		UI.SetEnabled("Avoid Auto Wall", true);
		UI.SetEnabled("Use Trigger Ragebot", true);
		UI.SetEnabled("Disable Legit Auto Stop", true);
		
		oLAAInverter = UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Direction key");
		rKey = UI.IsHotkeyActive("Script items", "Rage Key");
		oRestrictions = UI.GetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions");

		if (UI.GetValue("Legit", "GENERAL", "General", "Enabled") && UI.GetValue("Rage", "GENERAL", "General", "Enabled")) {
			UI.SetValue("Rage", "GENERAL", "General", "Enabled", 0);
			UI.SetValue("Legit", "GENERAL", "General", "Enabled", 1);
		}

		if (rKey) {
			oLegitAA = UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled");
			oRageAA = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled");
			
			if (getVal("Avoid Auto Wall")) {
				localEnt = Entity.GetLocalPlayer();
				localHead = Entity.GetHitboxPosition(localEnt, 0);
				enemies = Entity.GetEnemies();
				for (i = 0; i < enemies.length; i++) {
					headHitbox = Entity.GetHitboxPosition(enemies[i], 0);
					lFootHitbox = Entity.GetHitboxPosition(enemies[i], 11);
					rFootHitbox = Entity.GetHitboxPosition(enemies[i], 12);
					lHandHitbox = Entity.GetHitboxPosition(enemies[i], 13);
					rHandHitbox = Entity.GetHitboxPosition(enemies[i], 14);
					headToHeadVis = Trace.Bullet(enemies[i], localEnt, headHitbox, localHead);
					headVisible = 1;
					if (headToHeadVis != null) { headVisible = headToHeadVis[2]; }
					headToLHandVis = Trace.Bullet(enemies[i], localEnt, lHandHitbox, localHead);
					lHandVisible = 1;
					if (headToLHandVis != null) { lHandVisible = headToLHandVis[2]; }
					headToRHandVis = Trace.Bullet(enemies[i], localEnt, rHandHitbox, localHead);
					rHandVisible = 1;
					if (headToRHandVis != null) { rHandVisible = headToRHandVis[2]; }
					headToLFootVis = Trace.Bullet(enemies[i], localEnt, lFootHitbox, localHead);
					lFootVisible = 1;
					if (headToLFootVis != null) { lFootVisible = headToLFootVis[2]; }
					headToRFootVis = Trace.Bullet(enemies[i], localEnt, rFootHitbox, localHead);
					rFootVisible = 1;
					if (headToRFootVis != null) { rFootVisible = headToRFootVis[2]; }

					if (Entity.IsValid(enemies[i]) && !Entity.IsDormant(enemies[i]) && Entity.IsAlive(enemies[i])) {
						if (headVisible >= 1 || lHandVisible == 1 || rHandVisible == 1 || lFootVisible == 1 || rFootVisible == 1) { visiblePeeking = true; } else { visiblePeeking = false; }
					}
				}
			}

			if (getVal("Use Trigger Ragebot")) {
				if (getVal("Avoid Auto Wall") && visiblePeeking) {
					if (oRestrictions == 0 && UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled")) {
						UI.SetValue("Legit", "GENERAL", "Enabled", 0);
						UI.SetValue("Rage", "GENERAL", "Enabled", 1);
						UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 1);
					} else {
						UI.SetValue("Legit", "GENERAL", "Enabled", 0);
						UI.SetValue("Rage", "GENERAL", "Enabled", 1);
						UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 0);
					}
				} else if (!getVal("Avoid Auto Wall") && visPeeking) {
					if (oRestrictions == 0 && UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled")) {
						UI.SetValue("Legit", "GENERAL", "Enabled", 0);
						UI.SetValue("Rage", "GENERAL", "Enabled", 1);
						UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 1);
					} else {
						UI.SetValue("Legit", "GENERAL", "Enabled", 0);
						UI.SetValue("Rage", "GENERAL", "Enabled", 1);
						UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 0);
					}
				}
			} else if (getVal("Avoid Auto Wall") && visiblePeeking && rKey) {
				if (oRestrictions == 0 && UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled")) {
					UI.SetValue("Legit", "GENERAL", "Enabled", 0);
					UI.SetValue("Rage", "GENERAL", "Enabled", 1);
					UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 1);
				} else {
					UI.SetValue("Legit", "GENERAL", "Enabled", 0);
					UI.SetValue("Rage", "GENERAL", "Enabled", 1);
					UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 0);
				}
			} else if (rKey) {
				if (oRestrictions == 0 && UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled")) {
					UI.SetValue("Legit", "GENERAL", "Enabled", 0);
					UI.SetValue("Rage", "GENERAL", "Enabled", 1);
					UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 1);
				} else {
					UI.SetValue("Legit", "GENERAL", "Enabled", 0);
					UI.SetValue("Rage", "GENERAL", "Enabled", 1);
					UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 0);
				}
			} else {
				UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 0);
				UI.SetValue("Rage", "GENERAL", "Enabled", 0);
				UI.SetValue("Legit", "GENERAL", "Enabled", 1);
				if (oLegitAA) {
					UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", 1);
				}
			}
		}
	} else {
		UI.SetEnabled("Rage Key", false);
		UI.SetEnabled("Avoid Auto Wall", false);
		UI.SetEnabled("Use Trigger Ragebot", false);
	}

	if (getVal("Anti-Flicker")) {
		if (getVal("Anti Trigger")) { UI.SetValue("Script items", "Anti Trigger", 0); }
		UI.SetEnabled("Max Ping", true);
		trigs = UI.GetValue("Anti-Aim", "Fake-Lag", "Triggers");
		maxPing = getVal("Max Ping");
		UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 0);
		UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 0);
		UI.SetValue("Anti-Aim", "Fake-Lag", "Triggers", 2);
		UI.SetValue("Anti-Aim", "Fake-Lag", "Trigger limit", 0);
		if (fps <= tickRate) {
			oLegit = UI.GetValue("Legit", "GENERAL", "General", "Enabled");
			oRage = UI.GetValue("Rage", "GENERAL", "General", "Enabled");
			if (UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled")) {
				UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", 0);
			} else if (UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled")) {
				UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 0)
			}
		} else {
			if (oLegit == 1) {
				UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", 1);
			} else if (oRage == 1) {
				UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 1);
			}
		}
		if (ping >= maxPing) {
			oLegit = UI.GetValue("Legit", "GENERAL", "General", "Enabled");
			oRage = UI.GetValue("Rage", "GENERAL", "General", "Enabled");
			if (UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled")) {
				UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", 0);
			} else if (UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled")) {
				UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 0)
			}
		} else {
			if (oLegit == 1) {
				UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", 1);
			} else if (oRage == 1) {
				UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 1);
			}
		}
	} else {
		UI.SetEnabled("Max Ping", false);
	}

	if (getVal("Slow Walk")) {
		UI.SetEnabled("Hotkey:", true);
		UI.SetEnabled("Speed:", true);
	} else {
		UI.SetEnabled("Hotkey:", false);
		UI.SetEnabled("Speed:", false);
	}

	if (getVal("Keep Bots in Spawn")) {
		team = Entity.GetTeammates();
		for (i = 0; i < team.length; i++) {
			if (Entity.IsValid(team[i]) && Entity.IsAlive(team[i]) && Entity.IsBot(team[i])) {
				if (stopBots == true) {
					if (Globals.Curtime() - last_set >= delay) {
						Cheat.ExecuteCommand("holdpos");
						last_set = Globals.Curtime();
					}
				}
			}
		}
	}

	curGuns = getVal("Jump Shot");
	if (curGuns == 0) {
		UI.SetEnabled("AWP Hit Chance", false);
		UI.SetEnabled("SSG Hit Chance", false);
		UI.SetEnabled("Deagle Hit Chance", false);
	} else if (curGuns == 1) {
		UI.SetEnabled("AWP Hit Chance", true);
		UI.SetEnabled("SSG Hit Chance", false);
		UI.SetEnabled("Deagle Hit Chance", false);
	} else if (curGuns == 2) {
		UI.SetEnabled("AWP Hit Chance", false);
		UI.SetEnabled("SSG Hit Chance", true);
		UI.SetEnabled("Deagle Hit Chance", false);
	} else if (curGuns == 3) {
		UI.SetEnabled("AWP Hit Chance", true);
		UI.SetEnabled("SSG Hit Chance", true);
		UI.SetEnabled("Deagle Hit Chance", false);
	} else if (curGuns == 4) {
		UI.SetEnabled("AWP Hit Chance", false);
		UI.SetEnabled("SSG Hit Chance", false);
		UI.SetEnabled("Deagle Hit Chance", true);
	} else if (curGuns == 5) {
		UI.SetEnabled("AWP Hit Chance", true);
		UI.SetEnabled("SSG Hit Chance", false);
		UI.SetEnabled("Deagle Hit Chance", true);
	} else if (curGuns == 6) {
		UI.SetEnabled("AWP Hit Chance", false);
		UI.SetEnabled("SSG Hit Chance", true);
		UI.SetEnabled("Deagle Hit Chance", true);
	} else if (curGuns == 7) {
		UI.SetEnabled("AWP Hit Chance", true);
		UI.SetEnabled("SSG Hit Chance", true);
		UI.SetEnabled("Deagle Hit Chance", true);
	}

	if (getVal("Anti Media")) {
		UI.SetEnabled("Reset Anti Media", true);
		oCTag = UI.GetValue("Misc", "GENERAL", "Miscellaneous", "Clantag");
		oCCTag = UI.GetValue("Misc", "GENERAL", "Miscellaneous", "Custom");
		oACTag = UI.GetValue("Misc", "GENERAL", "Miscellaneous", "Animated");
		Local.SetClanTag("\n".repeat(15));
		UI.SetEnabled("Anti Media", false);
	}

	if (getVal("Reset Anti Media")) {
		UI.SetEnabled("Anti Media", true);
		if (oCTag == 1) {
			UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Clantag", 1);
		} else if (oCTag == 2) {
			UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Clantag", 2);
			UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Custom", oCCTag);
			UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Animated", oACTag);
		} else if (oCTag == 3) {
			UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Clantag", 3);
		}
		UI.SetEnabled("Reset Anti Media", false);
	}
}

function moveBitch() {
	if (UI.IsHotkeyActive("Legit", "Triggerbot")) { isTrigger = true; } else { isTrigger = false; }
	speed = getVal("Speed:");
	inaccuracy = Local.GetInaccuracy();
	enemies = Entity.GetEnemies();
	localEnt = Entity.GetLocalPlayer();
	var local = Entity.GetLocalPlayer();
	var velo = Entity.GetProp(local, "DT_CSPlayer", "m_vecVelocity[0]");
	var speed = Math.sqrt((velo[0] * velo[0]) + (velo[1] * velo[2]) + (velo[2] * velo[2]));
	var direction = vectorangles(velo);
	direction[1] = Local.GetViewAngles()[1] - direction[1];
	var forward = anglevectors(direction);
	var negative = [];
	mode = getVal("Auto Stop");
	if (mode == 0) { headPeeking = false; }
	if (mode != 0) {
		for (i = 0; i < enemies.length; i++) {
			localHeadPos = Entity.GetHitboxPosition(localEnt, 0);
			headHitbox = Entity.GetHitboxPosition(enemies[i], 0);
			headToHeadBT = Trace.Bullet(enemies[i], localEnt, headHitbox, localHeadPos);
			headVis = 1;
			if (headToHeadBT != null) { headVis = headToHeadBT[1]; }
			if (Entity.IsValid(enemies[i]) && !Entity.IsDormant(enemies[i]) && headVis >= 1) {
				headPeeking = true;
			} else { headPeeking = false; }
		}
	}

	if (headPeeking && isTrigger) {
		if (mode == 2) {
			negative[0] = forward[0] * speed;
			negative[1] = forward[1] * speed;
			negative[2] = forward[2] * speed;
			UserCMD.SetMovement([negative[0], negative[1], 0]);
		}
		if (mode == 1) {
			if (inaccuracy >= 0.0121) {
				if (Global.IsKeyPressed(0x57) && Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([-145, 145, 0]); }
				if (Global.IsKeyPressed(0x57) && Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([-145, -145, 0]); }
				if (Global.IsKeyPressed(0x53) && Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([145, 145, 0]); }
				if (Global.IsKeyPressed(0x53) && Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([145, -145, 0]); }
				if (Global.IsKeyPressed(0x57)) { UserCMD.SetMovement([-145, 0, 0]); }
				if (Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([0, 145, 0]); }
				if (Global.IsKeyPressed(0x53)) { UserCMD.SetMovement([145, 0, 0]); }
				if (Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([0, -145, 0]); }
			} else if (inaccuracy <= 0.0120 && inaccuracy >= 0.0100) {
				if (Global.IsKeyPressed(0x57) && Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([-120, 120, 0]); }
				if (Global.IsKeyPressed(0x57) && Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([-120, -120, 0]); }
				if (Global.IsKeyPressed(0x53) && Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([120, 120, 0]); }
				if (Global.IsKeyPressed(0x53) && Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([120, -120, 0]); }
				if (Global.IsKeyPressed(0x57)) { UserCMD.SetMovement([-120, 0, 0]); }
				if (Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([0, 120, 0]); }
				if (Global.IsKeyPressed(0x53)) { UserCMD.SetMovement([120, 0, 0]); }
				if (Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([0, -120, 0]); }
			} else if (inaccuracy <= 0.0099) {
				if (Global.IsKeyPressed(0x57) && Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([-100, 100, 0]); }
				if (Global.IsKeyPressed(0x57) && Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([-100, -100, 0]); }
				if (Global.IsKeyPressed(0x53) && Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([100, 100, 0]); }
				if (Global.IsKeyPressed(0x53) && Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([100, -100, 0]); }
				if (Global.IsKeyPressed(0x57)) { UserCMD.SetMovement([-100, 0, 0]); }
				if (Global.IsKeyPressed(0x41)) { UserCMD.SetMovement([0, 100, 0]); }
				if (Global.IsKeyPressed(0x53)) { UserCMD.SetMovement([100, 0, 0]); }
				if (Global.IsKeyPressed(0x44)) { UserCMD.SetMovement([0, -100, 0]); }
			}
		}
	}

	if (getVal("Slow Walk") && UI.IsHotkeyActive("Script items", "Hotkey:")) {
		dir = [0, 0, 0];
		if (Input.IsKeyPressed(0x57)) { dir[0] += speed; }
		if (Input.IsKeyPressed(0x44)) { dir[1] += speed; }
		if (Input.IsKeyPressed(0x41)) { dir[1] -= speed; }
		if (Input.IsKeyPressed(0x53)) { dir[0] -= speed; }
		UserCMD.SetMovement(dir);
	}
}

var options = []
function onVoteOptions() {
	options[0] = Event.GetString("option1")
	options[1] = Event.GetString("option2")
	options[2] = Event.GetString("option3")
	options[3] = Event.GetString("option4")
	options[4] = Event.GetString("option5")
	}

function onVoteCast() {
	if (getVal("Show Votes")) {
		var entid = Event.GetInt("entityid");
		if (entid) {
			var team = Event.GetInt("team");
			var option = Event.GetInt("vote_option");
			var name = Entity.GetName(entid);
			var chTeam = "null";
			switch (team) {
				case 0: chTeam = "[N] "; break;
				case 1: chTeam = "[SPECTATOR] "; break;
				case 2: chTeam = "[TERRORIST] "; break;
				case 3: chTeam = "[COUNTER-TERRORIST] "; break;
				default: chTeam = "[UNKOWN] "; break;
			}
			var vote = options[option];

			if (chTeam == "[COUNTER-TERRORIST] ") { teamC = "\x0B"; } else if (chTeam == "[TERRORIST] ") { teamC = "\x07"; }
			if (vote == "Yes") { voteC = "\x04"; } else if (vote == "No") { voteC = "\x07"; }

			Global.PrintColor([0, 255, 255, 255], "[onetap.com] \0");
			Global.Print(chTeam + name + " voted " + vote + "\n");
			Global.PrintChat(teamC + chTeam + "\x0E" + name + teamC + " voted " + voteC + vote);
		}
	}
}



function onWeaponFire() {
	quickSwitch = getVal("Quick Switch");
	if (quickSwitch != 0) {
		userID = Event.GetInt("userid")
		userID_index = Entity.GetEntityFromUserID(userID);
		localIndex = Entity.GetLocalPlayer();
		localWeapon = Entity.GetWeapon(localIndex);
		wName = Entity.GetName(localWeapon);
		doSwitch = false;

		if (wName == "awp") { curAwp = true; } else { curAwp = false; }
		if (wName == "ssg 08") { curSSG = true; } else { curSSG = false; }
		if (wName == "desert eagle") { curDeag = true; } else { curDeag = false; }
		if (wName == "ak 47" || wName == "scar 20" || wName == "g3sg1" || wName == "sg 553" || wName == "galil ar" || wName == "aug" || wName == "m4a4" || wName == "famas" || wName == "m4a1 s") { curRif = true; } else { curRif = false; }
		if (wName == "tec 9" || wName == "p2000" || wName == "usp s" || wName == "p250" || wName == "dual berettas" || wName == "glock 18" || wName == "five seven" || wName == "cz75 auto") { curPis = true; } else { curPis = false; }
		if (userID_index == localIndex) {
			switch (quickSwitch) {
				case 0: break;
				case 1: if (curAwp) { doSwitch = true; } break;
				case 2: if (curSSG) { doSwitch = true; } break;
				case 3: if (curAwp || curSSG) { doSwitch = true; } break;
				case 4: if (curDeag) { doSwitch = true; } break;
				case 5: if (curAwp || curDeag) { doSwitch = true; } break;
				case 6: if (curSSG || curDeag) { doSwitch = true; } break;
				case 7: if (curAwp || curSSG || curDeag) { doSwitch = true; } break;
				case 8: if (curRif) { doSwitch = true; } break;
				case 9: if (curAwp || curRif) { doSwitch = true; } break;
				case 10: if (curSSG || curRif) { doSwitch = true; } break;
				case 11: if (curAwp || curSSG || curRif) { doSwitch = true; } break;
				case 12: if (curDeag || curRif) { doSwitch = true; } break;
				case 13: if (curAwp || curDeag || curRif) { doSwitch = true; } break;
				case 14: if (curSSG || curDeag || curRif) { doSwitch = true; } break;
				case 15: if (curAwp || curSSG || curDeag || curRif) { doSwitch = true; } break;
				case 16: if (curPis) { doSwitch = true; } else { doSwitch = false; } break;
				case 17: if (curAwp || curPis) { doSwitch = true; } break;
				case 18: if (curSSG || curPis) { doSwitch = true; } break;
				case 19: if (curAwp || curSSG || curPis) { doSwitch = true; } break;
				case 20: if (curDeag || curPis) { doSwitch = true; } break;
				case 21: if (curAwp || curDeag || curPis) { doSwitch = true; } break;
				case 22: if (curSSG || curDeag || curPis) { doSwitch = true; } break;
				case 23: if (curAwp || curSSG || curDeag || curPis) { doSwitch = true; } break;
				case 24: if (curRif || curPis) { doSwitch = true; } break;
				case 25: if (curAwp || curRif || curPis) { doSwitch = true; } break;
				case 26: if (curSSG || curRif || curPis) { doSwitch = true; } break;
				case 27: if (curAwp || curSSG || curRif || curPis) { doSwitch = true; } break;
				case 28: if (curDeag || curRif || curPis) { doSwitch = true; } break;
				case 29: if (curAwp || curDeag || curRif || curPis) { doSwitch = true; } break;
				case 30: if (curSSG || curDeag || curRif || curPis) { doSwitch = true; } break;
				case 31: if (curAwp || curSSG || curDeag || curRif || curPis) { doSwitch = true; } break;
				default: Cheat.Print("Shit's broke xd"); break;
			}
		}
		
		if (doSwitch) {
			if (curAwp || curSSG || curRif) {
				Cheat.ExecuteCommand("use weapon_knife");
				Cheat.ExecuteCommand("slot1");
			}
			if (curPis || curDeag) {
				Cheat.ExecuteCommand("use weapon_knife");
				Cheat.ExecuteCommand("slot2");
			}
		}
	}
}

function onJump() {
	if (curGuns == 0) return;
	if (curGuns != 0) {
		nAHC = getVal("AWP Hit Chance");
		nSHC = getVal("SSG Hit Chance");
		nDHC = getVal("Deagle Hit Chance");
		if (UI.IsHotkeyActive("Legit", "Triggerbot")) { isTrigger = true; } else { isTrigger = false; }
		curGuns = getVal("Jump Shot");
		localIndex = Entity.GetLocalPlayer();
		localWeapon = Entity.GetWeapon(localIndex);
		gunName = Entity.GetName(localWeapon);
		if (curGuns == 1 || curGuns == 3 || curGuns == 5 || curGuns == 7 && gunName == "awp") { jumpAwp = true; } else { jumpAwp = false; }
		if (curGuns == 2 || curGuns == 3 || curGuns == 6 || curGuns == 7 && gunName == "ssg 08") { jumpSSG = true; } else { jumpSSG = false; }
		if (curGuns == 4 || curGuns == 5 || curGuns == 6 || curGuns == 7 && gunName == "desert eagle") { jumpDeag = true; } else { jumpDeag = false; }
		
		if (jumpAwp && isTrigger) {
			UI.SetValue("Legit", "SNIPER", "Sniper config", "Triggerbot hitchance", nAHC);
			jSniper = true;
		}
		if (jumpSSG && isTrigger) {
			UI.SetValue("Legit", "SNIPER", "Sniper config", "Triggerbot hitchance", nSHC);
			jSniper = true;
		}
		if (jumpDeag && isTrigger) {
			UI.SetValue("Legit", "GENERAL", "Default config", "Triggerbot hitchance", nDHC);
			jDeag = true;
		}
	}
}

function onPlayerStep() {
	if (curGuns == 0) return;
	if (jSniper == true) {
		jSniper = false;
	}
	if (jDeag == true) {
		jDeag = false;
	}
}