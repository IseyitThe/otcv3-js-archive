//                         _____      _____       __  __           _            
//                        |  __ \    / ____|     |  \/  |         | |           
//                     ___| |__) |__| |     ___  | \  / | __ _ ___| |_ ___ _ __ 
//                    / __|  ___/ _ \ |    / __| | |\/| |/ _` / __| __/ _ \ '__|
//                    \__ \ |  |  __/ |____\__ \ | |  | | (_| \__ \ ||  __/ |   
//                    |___/_|   \___|\_____|___/ |_|  |_|\__,_|___/\__\___|_|   
//                                                                              
//                                                                              
//                      _____           _       _          ___  
//                     / ____|         (_)     | |        |__ \ 
//                    | (___   ___ _ __ _ _ __ | |_  __   __ ) |
//                     \___ \ / __| '__| | '_ \| __| \ \ / // / 
//                     ____) | (__| |  | | |_) | |_   \ V // /_ 
//                    |_____/ \___|_|  |_| .__/ \__|   \_/|____|
//                                       | |                    
//                                       |_|                    
var screenSize = Render.GetScreenSize();

function main() {
    UI.AddSliderInt("     -> sPeC's Master Script <-", -1, 0);
    UI.AddCheckbox("Anti-Flicker");
    UI.AddSliderInt("Max Ping", 100, 200);
    UI.AddLabel("________________________________________");
    UI.AddCheckbox("Anti Trigger");
    UI.AddSliderInt("Hidden Limit", 0, 14);
    UI.AddSliderInt("Hidden Jitter", 0, 100);
    UI.AddSliderInt("Hidden Trigger Limit", 0, 16);
    UI.AddMultiDropdown("Hidden Triggers", ["In Air", "On Peek", "On Shot", "On Land", "While Reloading", "Weapon Switch", "Velocity Change", "Break Lag Comp"]);
    UI.AddSliderInt("Exposed Limit", 0, 14);
    UI.AddSliderInt("Exposed Jitter", 0, 100);
    UI.AddSliderInt("Exposed Trigger Limit", 0, 16);
    UI.AddMultiDropdown("Exposed Triggers", ["In Air", "On Peek", "On Shot", "On Land", "While Reloading", "Weapon Switch", "Velocity Change", "Break Lag Comp"]);
    UI.AddCheckbox("Ignore Bots");
    UI.AddLabel("________________________________________");
    UI.AddCheckbox("Rage on Key");
    UI.AddHotkey("Rage Key");
    UI.AddCheckbox("Use Trigger Ragebot");
    UI.AddHotkey("Toggle Auto Wall");
    UI.AddCheckbox("A-Wall Indicator");
    UI.AddLabel("________________________________________");
    UI.AddCheckbox("Slow Walk");
    UI.AddHotkey("Hotkey:");
    UI.AddSliderInt("Speed:", 1, 135);
    UI.AddLabel("________________________________________");
    UI.AddCheckbox("Trigger Hitchance");
    UI.AddSliderInt("Pistol", 0, 100);
    UI.AddSliderInt("Heavy Pistol", 0, 100);
    UI.AddSliderInt("SMGs", 0, 100);
    UI.AddSliderInt("Rifles", 0, 100);
    UI.AddSliderInt("Scout", 0, 100);
    UI.AddSliderInt("AWP", 0, 100);
    UI.AddLabel("________________________________________");
    UI.AddMultiDropdown("Quick Switch", ["AWP", "SSG", "Deagle", "Rifles", "Pistols"]);
    UI.AddDropdown("Determination Mode", ["Legit", "Semi Rage", "Rage"]);
    UI.AddLabel("________________________________________");
    UI.AddCheckbox("Anti Media");
    UI.AddCheckbox("Auto Stop");
    UI.AddCheckbox("Keep Bots in Spawn");
    UI.AddCheckbox("Show Votes");
    UI.AddCheckbox("Third Person While Dead");
    UI.AddSliderInt("                 -> v2 <-", -1, 0);

    UI.SetEnabled("Max Ping", false);
    UI.SetEnabled("Hidden Limit", false);
    UI.SetEnabled("Hidden Jitter", false);
    UI.SetEnabled("Hidden Trigger Limit", false);
    UI.SetEnabled("Hidden Triggers", false);
    UI.SetEnabled("Exposed Limit", false);
    UI.SetEnabled("Exposed Jitter", false);
    UI.SetEnabled("Exposed Trigger Limit", false);
    UI.SetEnabled("Exposed Triggers", false);
    UI.SetEnabled("Ignore Bots", false);
    UI.SetEnabled("Hotkey:", false);
    UI.SetEnabled("Speed:", false);
    UI.SetEnabled("Rage Key", false);
    UI.SetEnabled("Toggle Auto Wall", false);
    UI.SetEnabled("A-Wall Indicator", false);
    UI.SetEnabled("Use Trigger Ragebot", false);
    UI.SetEnabled("Pistol", false);
    UI.SetEnabled("Heavy Pistol", false);
    UI.SetEnabled("SMGs", false);
    UI.SetEnabled("Rifles", false);
    UI.SetEnabled("Scout", false);
    UI.SetEnabled("AWP", false);

    Cheat.PrintColor([0, 255, 255, 255], "\n\n======================================================================\n");
    Cheat.PrintColor([0, 255, 255, 255], "\n    - - - > sPeC's Legit Master Script v2 has been loaded! < - - -");
    Cheat.PrintColor([0, 255, 255, 255], "\n\n======================================================================\n");
    Cheat.PrintChat(" \x06sPeC's Legit Master Script has been loaded! \x0E[ \x06v2 \x0E] ");
}
main();

var tickRate = Globals.Tickcount();
var localEnt = Entity.GetLocalPlayer();
var velocity = Entity.GetProp(localEnt, "DT_CSPlayer", "m_vecVelocity[0]");
var visPeeking, weapon, isTrigger, isBot, curGuns, doSwitch, oCTag, oCCTag, oACTag;
var delays = [];

const ping = Math.floor(Global.Latency() * 1000 / 1.5);
const fps = Math.floor(1 / Global.Frametime());
// OG Legit Settings
const oLegit = UI.GetValue("Legit", "GENERAL", "General", "Enabled");
const oLegitAA = UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled");
const lAAInverter = UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Direction key");

// OG Rage Settings
const oRageAA = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled");

//OG Misc Settings
const oRestrictions = UI.GetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions");

var wCategory = {
    "usp s": "Pistol",
    "glock 18": "Pistol",
    "p2000": "Pistol",
    "dual berettas": "Pistol",
    "r8 revolver": "Heavy Pistol",
    "desert eagle": "Heavy Pistol",
    "p250": "Pistol",
    "tec 9": "Pistol",
    "mp9": "SMG",
    "mac 10": "SMG",
    "pp bizon": "SMG",
    "ump 45": "SMG",
    "ak 47": "Rifle",
    "sg 553": "Rifle",
    "aug": "Rifle",
    "m4a1 s": "Rifle",
    "m4a4": "Rifle",
    "ssg 08": "Scout",
    "awp": "AWP",
    "g3sg1": "Auto",
    "scar 20": "Auto",
    "nova": "Heavy",
    "xm1014": "Heavy",
    "mag 7": "Heavy",
    "m249": "Heavy",
    "negev": "Heavy"
};

//
//
//          HELPER FUNCTIONS
//
//

function getVal(valueName) {
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valueName);
}

function weaponType() {
    var localEnt = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    if (wCategory[weapon] == undefined)
        return "";

    return wCategory[weapon];
}

function vectorangles(forward) {
    var angles = []
    if (forward[1] == 0 && forward[0] == 0) {
        angles[0] = forward[2] > 0 ? 270 : 90
        angles[1] = 0
    } else {
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

function Delay(delay, func, times) {
    this.delay = delay;
    this.resume = Globals.Curtime() + delay;
    this.func = func;
    this.times = 0;
    this.max = times || 1;
    delays.push(this);
}

Delay.prototype.run = function() {
    this.func();
    this.times++;
    this.resume += this.delay;
    return this.times >= this.max;
}

function checkDelays() {
    currTime = Globals.Curtime();

    delays.forEach(function(delay, index) {
        currTime >= delay.resume && delay.run() && delays.splice(index, 1);
    })
}

function switchSlot1() {
    Cheat.ExecuteCommand("slot1");
    doSwitch = false;
}

function switchSlot2() {
    Cheat.ExecuteCommand("slot2");
    doSwitch = false;
}

function switchSlot3() {
    Cheat.ExecuteCommand("slot3");
    doSwitch = false;
}

function keepBots() {
    Cheat.ExecuteCommand("holdpos");
}

function enemyVis() {
    dMode = getVal("Determination Mode");
    enemies = Entity.GetEnemies();
    localEnt = Entity.GetLocalPlayer();
    var i = 0;
    var localHeadPos;
    var localLFootPos;
    var localRFootPos;
    var localLHandPos;
    var localRHandPos;

    var allResultArray = Array();
    var fracArray = Array();

    // Array for hitboxes
    var headHitbox = Array();
    var neckHitbox = Array();
    var pelvisHitbox = Array();
    var bodyHitbox = Array();
    var thoraxHitbox = Array();
    var chestHitbox = Array();
    var uChestHitbox = Array();
    var lFootHitbox = Array();
    var rFootHitbox = Array();
    var lHandHitbox = Array();
    var rHandHitbox = Array();

    // Array for head to x values of Trace.Line()
    var headToHeadBT = Array();
    var headToNeckBT = Array();
    var headToLHandBT = Array();
    var headToRHandBT = Array();
    var headToLFootBT = Array();
    var headToRFootBT = Array();
    var headToUChestBT = Array();
    var headToChestBT = Array();
    var headToPelvisBT = Array();
    var headToBodyBT = Array();
    var headToThoraxBT = Array();

    // LEFT
    // Array for hand to hand values of Trace.Line()    HAND
    var lHandToLHandBT = Array();
    var lFootToLFootBT = Array();

    // RIGHT
    // Array for hand to hand values of Trace.Line()    HAND
    var rHandToRHandBT = Array();
    var rFootToRFootBT = Array();

    if (dMode == 0) {
        while (i < enemies.length) {
            if (!Entity.IsBot(enemies[i]) && !getVal("Ignore Bots")) {
                // set the values for each hitbox relative to local
                localEyePos = Entity.GetEyePosition(localEnt);
                localHeadPos = Entity.GetHitboxPosition(localEnt, 0);
                localLFootPos = Entity.GetHitboxPosition(localEnt, 11);
                localRFootPos = Entity.GetHitboxPosition(localEnt, 12);
                localLHandPos = Entity.GetHitboxPosition(localEnt, 13);
                localRHandPos = Entity.GetHitboxPosition(localEnt, 14);

                // set the values for each hitbox relative to each enemy 
                headHitbox[i] = Entity.GetHitboxPosition(enemies[i], 0);
                neckHitbox[i] = Entity.GetHitboxPosition(enemies[i], 1);
                chestHitbox[i] = Entity.GetHitboxPosition(enemies[i], 5);
                uChestHitbox[i] = Entity.GetHitboxPosition(enemies[i], 6);
                lFootHitbox[i] = Entity.GetHitboxPosition(enemies[i], 11);
                rFootHitbox[i] = Entity.GetHitboxPosition(enemies[i], 12);
                lHandHitbox[i] = Entity.GetHitboxPosition(enemies[i], 13);
                rHandHitbox[i] = Entity.GetHitboxPosition(enemies[i], 14);

                allResultArray = [
                    headToHeadBT, headToLHandBT, headToRHandBT, headToLFootBT, headToRFootBT, headToNeckBT,
                    headToUChestBT, headToChestBT,
                    lHandToLHandBT, lFootToLFootBT,
                    rHandToRHandBT, rFootToRFootBT
                ]

                if (Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i])) {
                    // checks if hitboxes are null or 0, if not, then set the location values of the hitboxes inside each respective fromTo array
                    if ((headHitbox[i] == 0 || headHitbox[i] == null) || (lFootHitbox[i] == 0 || lFootHitbox[i] == null) || (rFootHitbox[i] == 0 || rFootHitbox[i] == null) || (lHandHitbox[i] == 0 || lHandHitbox[i] == null) || (rHandHitbox[i] == 0 || rHandHitbox[i] == null) || (uChestHitbox[i] == 0 || uChestHitbox[i] == null) || (chestHitbox[i] == 0 || chestHitbox[i] == null) || (neckHitbox[i] == 0 || neckHitbox == null)) {
                        allResultArray = [
                            headToHeadBT, headToLHandBT, headToRHandBT, headToLFootBT, headToRFootBT, headToNeckBT,
                            headToUChestBT, headToChestBT,
                            lHandToLHandBT, lFootToLFootBT,
                            rHandToRHandBT, rFootToRFootBT
                        ]

                        for (var ind = 0; ind < allResultArray.length; ind++) {
                            allResultArray[ind][i] = 0;
                        }
                    } else {
                        headToHeadBT[i] = Trace.Line(localEnt, localHeadPos, headHitbox[i]);
                        headToNeckBT[i] = Trace.Line(localEnt, localHeadPos, neckHitbox[i]);
                        headToLHandBT[i] = Trace.Line(localEnt, localHeadPos, lHandHitbox[i]);
                        headToRHandBT[i] = Trace.Line(localEnt, localHeadPos, rHandHitbox[i]);
                        headToLFootBT[i] = Trace.Line(localEnt, localHeadPos, lFootHitbox[i]);
                        headToRFootBT[i] = Trace.Line(localEnt, localHeadPos, rFootHitbox[i]);
                        headToUChestBT[i] = Trace.Line(localEnt, localHeadPos, uChestHitbox[i]);
                        headToChestBT[i] = Trace.Line(localEnt, localHeadPos, chestHitbox[i]);

                        lHandToLHandBT[i] = Trace.Line(localEnt, localLHandPos, lHandHitbox[i]);
                        lFootToLFootBT[i] = Trace.Line(localEnt, localLFootPos, lFootHitbox[i]);
                        rHandToRHandBT[i] = Trace.Line(localEnt, localRHandPos, rHandHitbox[i]);
                        rFootToRFootBT[i] = Trace.Line(localEnt, localRFootPos, rFootHitbox[i]);

                        for (var ind = 0; ind < allResultArray.length; ind++) {
                            fracArray[ind] = allResultArray[ind][i][1];
                        }
                    }
                }

                function isBiggerThan5(element, index, array) {
                    return element > .5;
                }

                if (fracArray != null && typeof fracArray !== 'undefined') {
                    if (fracArray.some(isBiggerThan5)) {
                        visPeeking = true;

                    } else {
                        visPeeking = false;
                    }
                } else {
                    Cheat.Print("\nnot working");
                }
            }

            if (i == enemies.length) {
                i = 0;
            } else {
                i++;
            }
        }
    } else if (dMode == 1) {
        while (i < enemies.length) {
            if (!Entity.IsBot(enemies[i]) && !getVal("Ignore Bots")) {
                localHeadPos = Entity.GetHitboxPosition(localEnt, 0);
                localLFootPos = Entity.GetHitboxPosition(localEnt, 11);
                localRFootPos = Entity.GetHitboxPosition(localEnt, 12);
                localLHandPos = Entity.GetHitboxPosition(localEnt, 13);
                localRHandPos = Entity.GetHitboxPosition(localEnt, 14);
                localEyePos = Entity.GetEyePosition(localEnt);
 
                headHitbox[i] = Entity.GetHitboxPosition(enemies[i], 0);
                neckHitbox[i] = Entity.GetHitboxPosition(enemies[i], 1);
                chestHitbox[i] = Entity.GetHitboxPosition(enemies[i], 5);
                uChestHitbox[i] = Entity.GetHitboxPosition(enemies[i], 6);
                lFootHitbox[i] = Entity.GetHitboxPosition(enemies[i], 11);
                rFootHitbox[i] = Entity.GetHitboxPosition(enemies[i], 12);
                lHandHitbox[i] = Entity.GetHitboxPosition(enemies[i], 13);
                rHandHitbox[i] = Entity.GetHitboxPosition(enemies[i], 14);

                allResultArray = [
                    headToHeadBT, headToLHandBT, headToRHandBT, headToLFootBT, headToRFootBT, headToNeckBT,
                    headToUChestBT, headToChestBT,
                    lHandToLHandBT, lFootToLFootBT,
                    rHandToRHandBT, rFootToRFootBT
                ]

                if (Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i])) {
                    if ((headHitbox[i] == 0 || headHitbox[i] == null) || (lFootHitbox[i] == 0 || lFootHitbox[i] == null) || (rFootHitbox[i] == 0 || rFootHitbox[i] == null) || (lHandHitbox[i] == 0 || lHandHitbox[i] == null) || (rHandHitbox[i] == 0 || rHandHitbox[i] == null) || (uChestHitbox[i] == 0 || uChestHitbox[i] == null) || (chestHitbox[i] == 0 || chestHitbox[i] == null) || (neckHitbox[i] == 0 || neckHitbox[i] == null)) {
                        for (var ind = 0; ind < allResultArray.length; ind++) {
                            allResultArray[ind][i] = 0;
                        }
                    } else {
                        headToHeadBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, headHitbox[i]);
                        headToLHandBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, lHandHitbox[i]);
                        headToRHandBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, rHandHitbox[i]);
                        headToLFootBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, lFootHitbox[i]);
                        headToRFootBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, rFootHitbox[i]);
                        headToNeckBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, neckHitbox[i]);
                        headToChestBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, chestHitbox[i]);
                        headToUChestBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, uChestHitbox[i]);

                        lHandToLHandBT[i] = Trace.Bullet(localEnt, enemies[i], localLHandPos, lHandHitbox[i]);
                        lFootToLFootBT[i] = Trace.Bullet(localEnt, enemies[i], localLFootPos, lFootHitbox[i]);
                        rHandToRHandBT[i] = Trace.Bullet(localEnt, enemies[i], localRHandPos, rHandHitbox[i]);
                        rFootToRFootBT[i] = Trace.Bullet(localEnt, enemies[i], localRFootPos, rFootHitbox[i]);

                        for (var ind = 0; ind < allResultArray.length; ind++) {
                            fracArray[ind] = allResultArray[ind][i][1];
                        }
                    }
                }

                function is1(element, index, array) {
                    return element >= 1;
                }

                if (Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i])) {
                    if (fracArray != null && typeof fracArray !== 'undefined') {
                        if (fracArray.some(is1)) {
                            visPeeking = true;
                        } else {
                            visPeeking = false;
                        }
                    } else {
                        Cheat.Print("\nnot populating frac array \n");
                    }
                } else {
                    for (var ind = 0; ind < allResultArray.length; ind++) {
                        allResultArray[ind][i] = 0;
                    }
                }
            }

            if (i == enemies.length) {
                i = 0;
            } else {
                i++;
            }
        }
    } else if (dMode == 2) {
        while (i < enemies.length) {
            if (!Entity.IsBot(enemies[i]) && !getVal("Ignore Bots")) {
                localHeadPos = Entity.GetHitboxPosition(localEnt, 0);
                localLFootPos = Entity.GetHitboxPosition(localEnt, 11);
                localRFootPos = Entity.GetHitboxPosition(localEnt, 12);
                localLHandPos = Entity.GetHitboxPosition(localEnt, 13);
                localRHandPos = Entity.GetHitboxPosition(localEnt, 14);
                localEyePos = Entity.GetEyePosition(localEnt);

                headHitbox[i] = Entity.GetHitboxPosition(enemies[i], 0);
                neckHitbox[i] = Entity.GetHitboxPosition(enemies[i], 1);
                pelvisHitbox[i] = Entity.GetHitboxPosition(enemies[i], 2);
                bodyHitbox[i] = Entity.GetHitboxPosition(enemies[i], 3);
                thoraxHitbox[i] = Entity.GetHitboxPosition(enemies[i], 4);
                chestHitbox[i] = Entity.GetHitboxPosition(enemies[i], 5);
                uChestHitbox[i] = Entity.GetHitboxPosition(enemies[i], 6);
                lFootHitbox[i] = Entity.GetHitboxPosition(enemies[i], 11);
                rFootHitbox[i] = Entity.GetHitboxPosition(enemies[i], 12);
                lHandHitbox[i] = Entity.GetHitboxPosition(enemies[i], 13);
                rHandHitbox[i] = Entity.GetHitboxPosition(enemies[i], 14);

                allResultArray = [
                    headToHeadBT, headToLHandBT, headToRHandBT, headToLFootBT, headToRFootBT, headToNeckBT,
                    headToUChestBT, headToChestBT,
                    headToPelvisBT, headToBodyBT, headToThoraxBT,
                    lHandToLHandBT, lFootToLFootBT,
                    rHandToRHandBT, rFootToRFootBT
                ]

                if (Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i])) {
                    if ((headHitbox[i] == 0 || headHitbox[i] == null) || (lFootHitbox[i] == 0 || lFootHitbox[i] == null) || (rFootHitbox[i] == 0 || rFootHitbox[i] == null) || (lHandHitbox[i] == 0 || lHandHitbox[i] == null) || (rHandHitbox[i] == 0 || rHandHitbox[i] == null) || (uChestHitbox[i] == 0 || uChestHitbox[i] == null) || (chestHitbox[i] == 0 || chestHitbox[i] == null) || (neckHitbox[i] == 0 || neckHitbox[i] == null) || (pelvisHitbox[i] == 0 || pelvisHitbox[i] == null) || (bodyHitbox[i] == 0 || bodyHitbox[i] == null) || (thoraxHitbox[i] == 0 || thoraxHitbox[i] == null)) {
                        for (var ind = 0; ind < allResultArray.length; ind++) {
                            allResultArray[ind][i] = 0;
                        }
                    } else {
                        headToHeadBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, headHitbox[i]);
                        headToLHandBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, lHandHitbox[i]);
                        headToRHandBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, rHandHitbox[i]);
                        headToLFootBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, lFootHitbox[i]);
                        headToRFootBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, rFootHitbox[i]);
                        headToNeckBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, neckHitbox[i]);
                        headToChestBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, chestHitbox[i]);
                        headToUChestBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, uChestHitbox[i]);
                        headToPelvisBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, pelvisHitbox[i]);
                        headToBodyBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, bodyHitbox[i]);
                        headToThoraxBT[i] = Trace.Bullet(localEnt, enemies[i], localHeadPos, thoraxHitbox[i]);

                        lHandToLHandBT[i] = Trace.Bullet(localEnt, enemies[i], localLHandPos, lHandHitbox[i]);
                        lFootToLFootBT[i] = Trace.Bullet(localEnt, enemies[i], localLFootPos, lFootHitbox[i]);
                        rHandToRHandBT[i] = Trace.Bullet(localEnt, enemies[i], localRHandPos, rHandHitbox[i]);
                        rFootToRFootBT[i] = Trace.Bullet(localEnt, enemies[i], localRFootPos, rFootHitbox[i]);

                        for (var ind = 0; ind < allResultArray.length; ind++) {
                            fracArray[ind] = allResultArray[ind][i][1];
                        }
                    }
                }

                function isBiggerThan1(element, index, array) {
                    return element >= 1;
                }

                if (Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i])) {
                    if (fracArray != null && typeof fracArray !== 'undefined') {
                        if (fracArray.some(isBiggerThan1)) {
                            visPeeking = true;
                        } else {
                            visPeeking = false;
                        }
                    } else {
                        Cheat.Print("\nnot populating frac array \n");
                    }
                } else {
                    for (var ind = 0; ind < allResultArray.length; ind++) {
                        allResultArray[ind][i] = 0;
                    }
                }
            }

            if (i == enemies.length) {
                i = 0;
            } else {
                i++;
            }
        }
    }
}

//
//
//          MAIN FUNCTIONS
//
//

function antiFlicker() {
    if (getVal("Anti Trigger")) { UI.SetValue("Script items", "Anti Trigger", false); }

    UI.SetEnabled("Max Ping", true);
    maxPing = getVal("Max Ping");
    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 0);
    UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 0);
    UI.SetValue("Anti-Aim", "Fake-Lag", "Triggers", 2);
    UI.SetValue("Anti-Aim", "Fake-Lag", "Trigger limit", 0);

    if (fps <= tickRate) {
        if (UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled")) {
            UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", false);
        } else if (UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled")) {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", false);
        }
    } else {
        if (oLegitAA == 1) {
            UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", true);
        } else if (oRageAA == 1) {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", true);
        }
    }

    if (ping >= maxPing) {
        if (UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled")) {
            UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", false);
        } else if (UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled")) {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", false);
        }
    } else {
        if (oLegitAA == 1) {
            UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", true);
        } else if (oRageAA == 1) {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", true);
        }
    }
}

function antiTrigger() {
    if (getVal("Anti-Flicker")) { UI.SetValue("Script items", "Anti-Flicker", false); }
    localEnt = Entity.GetLocalPlayer();
    UI.SetEnabled("Hidden Limit", true);
    UI.SetEnabled("Hidden Jitter", true);
    UI.SetEnabled("Hidden Trigger Limit", true);
    UI.SetEnabled("Hidden Triggers", true);
    UI.SetEnabled("Exposed Limit", true);
    UI.SetEnabled("Exposed Jitter", true);
    UI.SetEnabled("Exposed Trigger Limit", true);
    UI.SetEnabled("Exposed Triggers", true);
    UI.SetEnabled("Ignore Bots", true);

    hLimit = getVal("Hidden Limit");
    hJitter = getVal("Hidden Jitter");
    hTLimit = getVal("Hidden Trigger Limit");
    hTrigs = getVal("Hidden Triggers");
    eLimit = getVal("Exposed Limit");
    eJitter = getVal("Exposed Jitter");
    eTLimit = getVal("Exposed Trigger Limit");
    eTrigs = getVal("Exposed Triggers");

    enemies = Entity.GetEnemies();
    if (!Entity.IsAlive(localEnt) && !Entity.IsValid(localEnt)) {
        visPeeking = false;
    }

    if (visPeeking) {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", eLimit);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", eJitter);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Triggers", eTrigs);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Trigger limit", eTLimit);
    } else {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", hLimit);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", hJitter);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Triggers", hTrigs);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Trigger limit", hTLimit);
    }
}

function rageOnKey() {
    UI.SetEnabled("Rage Key", true);
    UI.SetEnabled("Use Trigger Ragebot", true);
    UI.SetEnabled("Toggle Auto Wall", true);
    UI.SetEnabled("A-Wall Indicator", true);
    var rKey = UI.IsHotkeyActive("Script items", "Rage Key");
    var aWallKey = UI.IsHotkeyActive("Script items", "Toggle Auto Wall");
    var localEnt = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    
    gAWall = UI.GetValue("Rage", "GENERAL", "Targeting", "Disable autowall");
    pAWall = UI.GetValue("Rage", "PISTOL", "Pistol config", "Disable autowall");
    hpAWall = UI.GetValue("Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall");
    sAWall = UI.GetValue("Rage", "SCOUT", "Scout config", "Disable autowall");
    aAWall = UI.GetValue("Rage", "AWP", "AWP config", "Disable autowall");
    autoAWall = UI.GetValue("Rage", "AUTOSNIPER", "Auto config", "Disable autowall");

    mX = screenSize[0]/2;
    mY = screenSize[1]/2;

    if (UI.GetValue("Legit", "GENERAL", "General", "Enabled") && UI.GetValue("Rage", "GENERAL", "General", "Enabled")) {
        UI.SetValue("Rage", "GENERAL", "General", "Enabled", 0);
        UI.SetValue("Legit", "GENERAL", "General", "Enabled", 1);
    }

    if (!UI.GetValue("Legit", "GENERAL", "Backtracking", "Enabled")) {
        UI.SetValue("Legit", "GENERAL", "Backtracking", "Enabled", 1);
    }

    if (getVal("A-Wall Indicator")) {
        if (wCategory[weapon] == "Rifle" || wCategory[weapon] == "SMG" || wCategory[weapon] == "Heavy") {
            if (gAWall) { Render.String(mX, mY, 0, "AWALL", [255,0,0,255]); } else { Render.String(mX, mY, 0, "AWALL", [0,255,0,255]); }
        }
        if (wCategory[weapon] == "Pistol") { 
            if (pAWall) { Render.String(mX, mY, 0, "AWALL", [255,0,0,255]); } else { Render.String(mX, mY, 0, "AWALL", [0,255,0,255]); }
        }
        if (wCategory[weapon] == "Heavy Pistol") {
            if (hpAWall) { Render.String(mX, mY, 0, "AWALL", [255,0,0,255]); } else { Render.String(mX, mY, 0, "AWALL", [0,255,0,255]); }
        }
        if (wCategory[weapon] == "Scout") {
            if (sAWall == 1) { Render.String(mX, mY, 0, "AWALL", [255,0,0,255]); } else { Render.String(mX, mY, 0, "AWALL", [0,255,0,255]); }
        }
        if (wCategory[weapon] == "AWP") {
            if (aAWall == 1) { Render.String(mX, mY, 0, "AWALL", [255,0,0,255]); } else { Render.String(mX, mY, 0, "AWALL", [0,255,0,255]); }
        }
        if (wCategory[weapon] == "Auto") {
            if (autoAWall == 1) { Render.String(mX, mY, 0, "AWALL", [255,0,0,255]); } else { Render.String(mX, mY, 0, "AWALL", [0,255,0,255]); }
        }
    }

    if (aWallKey) {
        if (wCategory[weapon] == "Rifle" || wCategory[weapon] == "SMG" || wCategory[weapon] == "Heavy") {
            if (gAWall) { UI.SetValue("Rage", "GENERAL", "Target", "Disable autowall", false); } 
            if (!gAWall) { UI.SetValue("Rage", "GENERAL", "Target", "Disable autowall", true); }
        }
        if (wCategory[weapon] == "Pistol") { 
            if (pAWall) { UI.SetValue("Rage", "PISTOL", "Pistol config", "Disable autowall", false); } 
            if (!pAWall) { UI.SetValue("Rage", "PISTOL", "Pistol config", "Disable autowall", true); }
        }
        if (wCategory[weapon] == "Heavy Pistol") {
            if (hpAWall) { UI.SetValue("Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall", false); } 
            if (!hpAWall) { UI.SetValue("Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall", true); }
        }
        if (wCategory[weapon] == "Scout") {
            if (sAWall) { UI.SetValue("Rage", "SCOUT", "Scout config", "Disable autowall", false); } 
            if (!sAWall) { UI.SetValue("Rage", "SCOUT", "Scout config", "Disable autowall", true); }
        }
        if (wCategory[weapon] == "AWP") {
            if (aAWall) { UI.SetValue("Rage", "AWP", "AWP config", "Disable autowall", false); } 
            if (!aAWall) { UI.SetValue("Rage", "AWP", "AWP config", "Disable autowall", true); }
        }
        if (wCategory[weapon] == "Auto") {
            if (autoAWall) { UI.SetValue("Rage", "AUTOSNIPER", "Auto config", "Disable autowall", false); } 
            if (!autoAWall) { UI.SetValue("Rage", "AUTOSNIPER", "Auto config", "Disable autowall", true); }
        }
    }

    if (rKey) {
        if (getVal("Use Trigger Ragebot") && visPeeking) {
            if (oRestrictions != 0) {
                UI.SetValue("Legit", "GENERAL", "Enabled", 0);
                UI.SetValue("Rage", "GENERAL", "Enabled", 1);
            } else {
                UI.SetValue("Rage", "GENERAL", "Enabled", 0);
                UI.SetValue("Legit", "GENERAL", "Enabled", 1);
            }

            if (oRestrictions == 0 && UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled")) {
                UI.SetValue("Legit", "GENERAL", "Enabled", 0);
                UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", 0);
                UI.SetValue("Rage", "GENERAL", "Enabled", 1);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 1);
            } else {
                UI.SetValue("Rage", "GENERAL", "Enabled", 0);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 0);
                UI.SetValue("Legit", "GENERAL", "Enabled", 1);
                UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", 1);
            }
        } else {
            if (oRestrictions != 0) {
                UI.SetValue("Legit", "GENERAL", "Enabled", 0);
                UI.SetValue("Rage", "GENERAL", "Enabled", 1);
            } else {
                UI.SetValue("Rage", "GENERAL", "Enabled", 0);
                UI.SetValue("Legit", "GENERAL", "Enabled", 1);
            }

            if (oRestrictions == 0 && UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled")) {
                UI.SetValue("Legit", "GENERAL", "Enabled", 0);
                UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", 0);
                UI.SetValue("Rage", "GENERAL", "Enabled", 1);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 1);
            } else {
                UI.SetValue("Rage", "GENERAL", "Enabled", 0);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 0);
                UI.SetValue("Legit", "GENERAL", "Enabled", 1);
                UI.SetValue("Anti-Aim", "Legit Anti-Aim", "Enabled", 1);
            }
        }
    }
}

function slowWalk() {
    UI.SetEnabled("Hotkey:", true);
    UI.SetEnabled("Speed:", true);

    localEnt = Entity.GetLocalPlayer();
    velocity = Entity.GetProp(localEnt, "DT_CSPlayer", "m_vecVelocity[0]");
    hKey = UI.IsHotkeyActive("Script items", "Hotkey:");

    var speed = Math.sqrt((velocity[0] * velocity[0]) + (velocity[1] * velocity[2]) + (velocity[2] * velocity[2]));
    dir = [0, 0, 0];
    if (hKey) {
        // W,S -- Forward, Backwards
        if (Input.IsKeyPressed(0x57)) { dir[0] += speed; }
        if (Input.IsKeyPressed(0x53)) { dir[0] -= speed; }

        // D,A -- Right, Left
        if (Input.IsKeyPressed(0x44)) { dir[1] += speed; }
        if (Input.IsKeyPressed(0x41)) { dir[1] -= speed; }
        UserCMD.SetMovement(dir);
    }
}

function triggerHitchance() {
    UI.SetEnabled("Pistol", true);
    UI.SetEnabled("Heavy Pistol", true);
    UI.SetEnabled("SMGs", true);
    UI.SetEnabled("Rifles", true);
    UI.SetEnabled("Scout", true);
    UI.SetEnabled("AWP", true);
    pistolHC = getVal("Pistol");
    hPistolHC = getVal("Heavy Pistol");
    smgHC = getVal("SMGs");
    rifleHC = getVal("Rifles");
    scoutHC = getVal("Scout");
    awpHC = getVal("AWP");
    var localEnt = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    if (wCategory[weapon] == "Pistol") { UI.SetValue("Legit", "GENERAL", "Triggerbot", "Hitchance", pistolHC); }
    if (wCategory[weapon] == "Heavy Pistol") { UI.SetValue("Legit", "GENERAL", "Triggerbot", "Hitchance", hPistolHC); }
    if (wCategory[weapon] == "SMG") { UI.SetValue("Legit", "GENERAL", "Triggerbot", "Hitchance", smgHC); }
    if (wCategory[weapon] == "Rifle") { UI.SetValue("Legit", "GENERAL", "Triggerbot", "Hitchance", rifleHC); }
    if (wCategory[weapon] == "Scout") { UI.SetValue("Legit", "GENERAL", "Triggerbot", "Hitchance", scoutHC); }
    if (wCategory[weapon] == "AWP") { UI.SetValue("Legit", "GENERAL", "Triggerbot", "Hitchance", awpHC); }
}

function onWeaponFire(userid) {
    qSwitch = getVal("Quick Switch");
    if (qSwitch == 0) return;
    var localEnt = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    userID = Event.GetInt("userid");
    userID_index = Entity.GetEntityFromUserID(userID);
    if (userID_index == localEnt) {
        doSwitch = true;
    } else { doSwitch = false; }
}

function quickSwitch() {
    if (!doSwitch) return;
    var localEnt = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    qSwitch = getVal("Quick Switch");
    switch (qSwitch) {
        case 0:
            break;
        case 1:
            if (wCategory[weapon] == "AWP") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            }
            break;
        case 2:
            if (wCategory[weapon] == "Scout") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            }
            break;
        case 3:
            if (wCategory[weapon] == "AWP" || wCategory[weapon] == "Scout") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            }
            break;
        case 4:
            if (wCategory[weapon] == "Heavy Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 5:
            if (wCategory[weapon] == "AWP") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Heavy Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 6:
            if (wCategory[weapon] == "Scout") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Heavy Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 7:
            if (wCategory[weapon] == "AWP" || wCategory[weapon] == "Scout") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Heavy Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 8:
            if (wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            }
            break;
        case 9:
            if (wCategory[weapon] == "AWP" || wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            }
        case 10:
            if (wCategory[weapon] == "Scout" || wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            }
        case 11:
            if (wCategory[weapon] == "AWP" || wCategory[weapon] == "Scout" || wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            }
        case 12:
            if (wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Heavy Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 13:
            if (wCategory[weapon] == "AWP" || wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Heavy Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 14:
            if (wCategory[weapon] == "Scout" || wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Heavy Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 15:
            if (wCategory[weapon] == "AWP" || wCategory[weapon] == "Scout" || wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Heavy Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 16:
            if (wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 17:
            if (wCategory[weapon] == "AWP") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 18:
            if (wCategory[weapon] == "Scout") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 19:
            if (wCategory[weapon] == "AWP" || wCategory[weapon] == "Scout") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 20:
            if (wCategory[weapon] == "Heavy Pistol" || wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 21:
            if (wCategory[weapon] == "AWP") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Heavy Pistol" || wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 22:
            if (wCategory[weapon] == "Scout") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Heavy Pistol" || wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 23:
            if (wCategory[weapon] == "AWP" || wCategory[weapon] == "Scout") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Heavy Pistol" || wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 24:
            if (wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 25:
            if (wCategory[weapon] == "AWP" || wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 26:
            if (wCategory[weapon] == "Scout" || wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 27:
            if (wCategory[weapon] == "AWP" || wCategory[weapon] == "Scout" || wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 28:
            if (wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Heavy Pistol" || wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 29:
            if (wCategory[weapon] == "AWP" || wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Heavy Pistol" || wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 30:
            if (wCategory[weapon] == "Scout" || wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Heavy Pistol" || wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        case 31:
            if (wCategory[weapon] == "AWP" || wCategory[weapon] == "Scout" || wCategory[weapon] == "Rifle") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot1);
            } else if (wCategory[weapon] == "Heavy Pistol" || wCategory[weapon] == "Pistol") {
                new Delay(0.1, switchSlot3);
                new Delay(0.3, switchSlot2);
            }
            break;
        default:
            Cheat.Print("\nQuick Switch is broken!");
            break;
    }
}

function antiMedia() {
    oCTag = UI.GetValue("Misc", "GENERAL", "Miscellaneous", "Clantag");
    oCCTag = UI.GetValue("Misc", "GENERAL", "Miscellaneous", "Custom");
    oACTag = UI.GetValue("Misc", "GENERAL", "Miscellaneous", "Animated");
    Local.SetClanTag("\n".repeat(15));
}

function autoStop() {
    if (UI.IsHotkeyActive("Legit", "Triggerbot")) { isTrigger = true; } else { isTrigger = false; }
    localEnt = Entity.GetLocalPlayer();
    velocity = Entity.GetProp(localEnt, "DT_CSPlayer", "m_vecVelocity[0]");
    var speed = Math.sqrt((velocity[0] * velocity[0]) + (velocity[1] * velocity[2]) + (velocity[2] * velocity[2]));
    var direction = vectorangles(velocity);
    direction[1] = Local.GetViewAngles()[1] - direction[1];
    var forward = anglevectors(direction);
    var negative = [];

    if (visPeeking && isTrigger) {
        negative[0] = forward[0] * speed;
        negative[1] = forward[1] * speed;
        negative[2] = forward[2] * speed;
        UserCMD.SetMovement([negative[0], negative[1], 0]);
    }
}

function botSpawn() {
    if (getVal("Keep Bots in Spawn")) {
        team = Entity.GetTeammates();
        for (i = 0; i < team.length; i++) {
            if (Entity.IsValid(team[i]) && Entity.IsAlive(team[i]) && Entity.IsBot(team[i])) {
                new Delay(17, keepBots);
                new Delay(20, keepBots);
            }
        }
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
                case 0:
                    chTeam = "[N] ";
                    break;
                case 1:
                    chTeam = "[SPECTATOR] ";
                    break;
                case 2:
                    chTeam = "[TERRORIST] ";
                    break;
                case 3:
                    chTeam = "[COUNTER-TERRORIST] ";
                    break;
                default:
                    chTeam = "[UNKOWN] ";
                    break;
            }
            var vote = options[option];

            if (chTeam == "[COUNTER-TERRORIST] ") { teamC = "\x0B"; } else if (chTeam == "[TERRORIST] ") { teamC = "\x07"; }
            if (vote == "Yes") { voteC = "\x04"; } else if (vote == "No") { voteC = "\x07"; }

            Global.PrintColor([0, 255, 255, 255], "[onetap.com] \0");
            Global.Print(chTeam + name + " voted " + vote + "\n");
            Global.PrintChat(teamC + chTeam + "\x0E" + name + teamC + "voted" + voteC + vote);
        }
    }
}

function thirdPerson() {
    localEnt = Entity.GetLocalPlayer();
    thirdPersonKey = UI.IsHotkeyActive("Visual", "WORLD", "View", "Thirdperson");
    if (Entity.IsAlive(localEnt)) return;
    if (thirdPersonKey && UI.GetValue("Visual", "WORLD", "View", "Spectator third person")) {
        UI.ToggleHotkey("Visual", "WORLD", "View", "Thirdperson");
        UI.SetValue("Visual", "WORLD", "View", "Spectator third person", false);
    } else if (thirdPersonKey && !UI.GetValue("Visual", "WORLD", "View", "Spectator third person")) {
        UI.ToggleHotkey("Visual", "WORLD", "View", "Thirdperson");
        UI.SetValue("Visual", "WORLD", "View", "Spectator third person", true);
    }
}

//
//
//          CALLBACK FUNCTIONS
//
//

function cm() {
    weaponType();
    checkDelays();
    if (getVal("Anti Trigger") || getVal("Auto Stop") || getVal("Use Trigger Ragebot")) { enemyVis(); }
    if (getVal("Slow Walk")) { slowWalk(); } else {
        UI.SetEnabled("Hotkey:", false);
        UI.SetEnabled("Speed:", false);
    }
    if (getVal("Auto Stop")) { autoStop(); }
}

function paint() {
    if (getVal("Anti-Flicker")) { antiFlicker(); } else { UI.SetEnabled("Max Ping", false); }
    if (getVal("Anti Trigger")) { antiTrigger(); } else {
        UI.SetEnabled("Hidden Limit", false);
        UI.SetEnabled("Hidden Jitter", false);
        UI.SetEnabled("Hidden Trigger Limit", false);
        UI.SetEnabled("Hidden Triggers", false);
        UI.SetEnabled("Exposed Limit", false);
        UI.SetEnabled("Exposed Jitter", false);
        UI.SetEnabled("Exposed Trigger Limit", false);
        UI.SetEnabled("Exposed Triggers", false);
        UI.SetEnabled("Ignore Bots", false);
    }
    if (getVal("Rage on Key")) { rageOnKey(); weaponType(); } else {
        UI.SetEnabled("Rage Key", false);
        UI.SetEnabled("Use Trigger Ragebot", false);
        UI.SetEnabled("Toggle Auto Wall", false);
        UI.SetEnabled("A-Wall Indicator", false);
    }
    if (getVal("Trigger Hitchance")) { triggerHitchance(); } else {
        UI.SetEnabled("Pistol", false);
        UI.SetEnabled("Heavy Pistol", false);
        UI.SetEnabled("SMGs", false);
        UI.SetEnabled("Rifles", false);
        UI.SetEnabled("Scout", false);
        UI.SetEnabled("AWP", false);
    }
    if (getVal("Quick Switch") != 0) { quickSwitch(); }
    if (getVal("Anti Media")) { antiMedia(); } else {
        if (oCTag == 1) {
            UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Clantag", 1);
        } else if (oCTag == 2) {
            UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Clantag", 2);
            UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Custom", oCCTag);
            UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Animated", oACTag);
        } else if (oCTag == 3) {
            UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Clantag", 3);
        }
    }
    if (getVal("Third Person While Dead")) { thirdPerson(); }
}


//
//
//          CALLBACKS
//
//

Cheat.RegisterCallback("CreateMove", "cm");
Cheat.RegisterCallback("Draw", "paint");
Cheat.RegisterCallback("weapon_fire", "onWeaponFire");
Cheat.RegisterCallback("round_start", "botSpawn");
Cheat.RegisterCallback("vote_options", "onVoteOptions");
Cheat.RegisterCallback("vote_cast", "onVoteCast");