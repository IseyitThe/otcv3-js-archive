/**************************************
*        Trash talk
*        by EviL
**************************************/
var get = {
    state(state) {
        return UI.GetValue("Misc", "JAVASCRIPT", "Script items", state);
    },
    string(string) {
        return UI.GetString("Misc", "JAVASCRIPT", "Script items", string);
    }
}

function main() {
    initUI();
    Global.RegisterCallback ( "player_death" , "modeCheck" );
}

function initUI() {
    UI.AddLabel( "=======Modes======");
    UI.AddMultiDropdown( "Select Mode(s)", [
        "BotSay",
        "DeathSay",
        "KillSay",
        "TeamSay"
    ] );

    UI.AddLabel( "=======KillSay=======");
    UI.AddDropdown( "KillSay Type", [
        "BOT Insult",
        "Custom Mode",
        "Hitbox",
        "KD",
        "PreMade",
        "WeaponSay"
    ] );
    UI.AddCheckbox("Kill: Include Victim Name");
    UI.AddTextbox("Custom KillSay");

    UI.AddLabel( "=======DeathSay======");
    UI.AddDropdown( "DeathSay Type", [
        "BOT Insult",
        "Custom Mode",
        "Premade",
        "WeaponSay"
    ] );
    UI.AddCheckbox("Death: Include Attacker Name");
    UI.AddTextbox("Custom DeathSay");
}

function modeCheck() {
    var mode = get.state("Select Mode(s)").toString(2).split("").reverse().map(Number);
    if (mode[0]) {
        if (Entity.IsBot(getPlayerID("victim")) && Entity.IsLocalPlayer(getPlayerID("attacker"))) botSay(getPlayerID("victim"));
    }
    if (mode[1]) {
        if (Entity.GetLocalPlayer() == getPlayerID("victim")) {
            deathSay((get.state("Death: Include Attacker Name") ? getPlayerName(getPlayerID("attacker")) + " " : ""), getPlayerWeapon(getPlayerID("attacker")));
        }
    }
    if (mode[2]) {
        if (Entity.IsLocalPlayer(getPlayerID("attacker"))) {
            killSay((get.state("Kill: Include Victim Name") ? "Hey " + getPlayerName(getPlayerID("victim")) + ", " : ""), getPlayerWeapon(getPlayerID("attacker")));
        }
    }
    if (mode[3]) {
        if (Entity.IsLocalPlayer(getPlayerID("attacker"))) return;
        if (Entity.IsTeammate(getPlayerID("attacker"))) teamSay(getPlayerName(getPlayerID("victim")), getPlayerName(getPlayerID("attacker")));
    }
}

function botSay(victimID) {
        Global.ExecuteCommand("say I just killed a noob, RIP "
            + getPlayerName(victimID));
}

function deathSay(attackerName, weaponName) {
    switch (get.state("DeathSay Type")) {
        case 0:
            Global.ExecuteCommand("say "
                + "Wow, I got killed by noob " + (get.state("Death: Include Attacker Name") ? "BOT " + attackerName + "..." : "Cheater..."));
            break;
        case 1:
            Global.ExecuteCommand("say "
                + attackerName + get.string("Custom DeathSay"));
            break;
        case 2:
            Global.ExecuteCommand("say "
                + attackerName + cycleRoasts("death"));
                d++;
                if (d + 1 > deathRoasts.length) {
                    d = 0;
                }
            break;
        case 3:
            Global.ExecuteCommand("say "
                + (get.state("Death: Include Attacker Name") ? "Wow " + attackerName : "Wow ") + "you killed me with a " + weaponName + "...");
            break;
    }
}

function killSay(victimName, weaponName) {
    switch (get.state("KillSay Type")) {
        case 0:
            Global.ExecuteCommand("say I just killed a noob, RIP "
                + victimName);
            break;
        case 1:
            Global.ExecuteCommand("say "
                + victimName + get.string("Custom KillSay"));
            break;
        case 2:
            if (Event.GetInt("headshot")) {
                Global.ExecuteCommand("say "
                    + victimName + cycleRoasts("hitboxHead"));
            } else {
                Global.ExecuteCommand("say "
                    + victimName + cycleRoasts("hitboxBody"));
            }
        case 3:
            Global.ExecuteCommand("say "
                + victimName + "No wonder you are  "
                + Entity.GetProp(getPlayerID("victim"), 'CPlayerResource', 'm_iKills')
                + " and "
                + Entity.GetProp(getPlayerID("victim"), 'CPlayerResource', 'm_iDeaths')
                + ". Get tapped.");
            break;
        case 4:
            Global.ExecuteCommand("say "
                + victimName + cycleRoasts("kill"));
            break;
        case 5:
            Global.ExecuteCommand("say "
                + victimName + "I killed you with a " + weaponName + " how? you mad??");
            break;
    }
}

var b = 0;
var d = 0;
var h = 0;
var k = 0;
function cycleRoasts(roast) {
    var deathRoasts = [
        'You finally killed me, Cheater !',
        'Good cheater, you finally hit something!',
        'Your legit aimbot found my real ? lol.',
        'Did you use aimbot to kill me? It\'s okay, that\'s all you got.',
        'Finally you did proud to your family.',
        'Nice shot, I guess you do have luck ?',
        'Noob can kill me faster than you.'
    ];
    var killRoasts = [
        'Did you really sold your anal virginity for that cheat?',
		'Get good, get SiX sense.',
        'Insert > Ragebot > Turn ON.',
        'Refund that aimwhere.',
		'RIP',
		'Change config ffs',
		'Lol u dead lmao',
		'Ez Pz lemon squeezy',
		'Give me ur config so i can fix that trash lmao',
		'Stop trying so hard nn lol',
		
    ];
    var hitboxHeadshotRoasts = [
        'Raped lmao',
        'One',
        '1',
        'SiX sense',
		'Did you really sold your anal virginity for that cheat? ',
    ];
    var hitboxBodyRoasts = [
        'Too Slow.',
        'OOF I\'m sorry, you were not fast enough.',
        'my config is better than yours.',
		'Ez Pz lemon squeezy',
		'Stop trying so hard, your config is bad',
    ];
    switch (roast) {
        case "death":
            if (d > deathRoasts.length - 2) {
                d = 0;
                return deathRoasts[d];
            } else {
                d++;
                return deathRoasts[d];
            }
            break;
        case "kill":
            if (k > killRoasts.length - 2) {
                k = 0;
                return killRoasts[k];
            } else {
                k++;
                return killRoasts[k];
            }
            break;
        case "hitboxHead":
            if (h > hitboxHeadshotRoasts.length - 2) {
                h = 0;
                return hitboxHeadshotRoasts[h];
            } else {
                h++;
                return hitboxHeadshotRoasts[h];
            }
            break;
        case "hitboxBody":
            if (b > hitboxBodyRoasts.length - 2) {
                b = 0;
                return hitboxBodyRoasts[b];
            } else {
                b++;
                return hitboxBodyRoasts[b];
            }
            break;
    }
}

function teamSay(victimName, attackerName) {
    Global.ExecuteCommand("Say Wow " + victimName + ", you got killed by " +  attackerName + "?? How ?");
}

function getPlayerID(player) {
    if (player == "victim") {
        victim = Event.GetInt("userid");
        victimID = Entity.GetEntityFromUserID(victim);
        return victimID;
    }
    if (player == "attacker") {
        attacker = Event.GetInt("attacker");
        attackerID = Entity.GetEntityFromUserID(attacker);
        return attackerID;
    }
}

function getPlayerName(player) {
        playerName = Entity.GetName(player);
        return playerName;
}

function getPlayerWeapon(player) {
        attackerWeapon = Entity.GetWeapon(player);
        weaponName = Entity.GetName(attackerWeapon);
        return weaponName;
}
main();