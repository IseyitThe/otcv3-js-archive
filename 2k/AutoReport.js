UI.AddCheckbox("AutoReport");

function dSay(dName) {
    var r1 = Math.floor(Math.random() * 10);
    var r2 = Math.floor(Math.random() * 10);
    var r3 = Math.floor(Math.random() * 10);
    var r4 = Math.floor(Math.random() * 10);
    var r5 = Math.floor(Math.random() * 10);
    var r6 = Math.floor(Math.random() * 10);
    var r7 = Math.floor(Math.random() * 10);
    var r8 = Math.floor(Math.random() * 10);
    var r9 = Math.floor(Math.random() * 10);
    var r10 = Math.floor(Math.random() * 10);
    var r11 = Math.floor(Math.random() * 10);
    var r12 = Math.floor(Math.random() * 10);
    var r13 = Math.floor(Math.random() * 10);
    var r14 = Math.floor(Math.random() * 10);
    var r15 = Math.floor(Math.random() * 10);
    var r16 = Math.floor(Math.random() * 10);
    var r17 = Math.floor(Math.random() * 10);
    var r18 = Math.floor(Math.random() * 10);
    var r19 = Math.floor(Math.random() * 10);
    var rtotal = (r1+10*r2+100*r3+1000*r4+10000*r5+100000*r6+1000000*r7+10000000*r8+100000000*r9+1000000000*r10+10000000000*r11+100000000000*r12+1000000000000*r13+10000000000000*r14+100000000000000*r15+1000000000000000*r16+10000000000000000*r17+100000000000000000*r18+1000000000000000000*r19);
    Global.ExecuteCommand( "say" + " " + "Report for " + dName +  " " + "submitted, report id" + " "+ rtotal + ".");
}
function isDead() {
    playerCheck(getPlayerID("victim"), getPlayerID("attacker"));
}
function playerCheck(victimENT, attackerENT) {
    if (Entity.GetLocalPlayer() == victimENT) {
        if(UI.GetValue("Misc", "JAVASCRIPT", "Script items","AutoReport")){
            dSay(getPlayerName(attackerENT));
        }
    }
}
function getPlayerID(player) {
    if (player == "victim") {
        victim = Event.GetInt("userid");
        victimENT = Entity.GetEntityFromUserID(victim);
        return victimENT;
    }
    if (player == "attacker") {
        attacker = Event.GetInt("attacker");
        attackerENT = Entity.GetEntityFromUserID(attacker);
        return attackerENT;
    }
}

function getPlayerName(player) {
        playerName = Entity.GetName(player);
        return playerName;
}
Global.RegisterCallback ( "player_death" , "isDead" );