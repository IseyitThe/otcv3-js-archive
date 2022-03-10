/*
Main code: https://onetap.su/threads/hits-log-in-chat.13637/
S/O to https://onetap.su/members/belyy.30547/

Chat/Console Logs - Created/Modified by LukazEL

*/


//hitboxes 

hitboxes = [
  'generic',
  'head',
  'chest',
  'stomach',
  'left arm',
  'right arm',
  'left leg',
  'right leg',
  'body'
];
function getHitboxName(index) {
  return hitboxes[index] || 'Generic';
}

//exploits

exploits = [
 'no exploits',
 'hide shots',
 'double tap'
];

function getExploitName(index) {
  return exploits[index] || 'no exploits';
}

function onRagebot() {
  exploitIndex = Event.GetInt('exploit');
}

// logs

function hitLog() {

// events

    me = Entity.GetLocalPlayer();
    hitbox = Event.GetInt('hitgroup');
    target_damage = Event.GetInt("dmg_health");
    victim = Event.GetInt('userid');
    attacker = Event.GetInt('attacker');
    exploit = getExploitName(exploitIndex);
    victimIndex = Entity.GetEntityFromUserID(victim);
    attackerIndex = Entity.GetEntityFromUserID(attacker);
    name = Entity.GetName(victimIndex);
    prefix = UI.GetString ( "Misc", "JAVASCRIPT", "Script Items", "Prefix" ) || 'onetap';
    prefixconsole = UI.GetString ( "Misc", "JAVASCRIPT", "Script Items", "Prefix Console" ) || 'onetap';

// logs
 
// chat log

if( UI.GetValue ( "Misc", "JAVASCRIPT", "Script Items", "Chat Logs" ) ){
if (me == attackerIndex && me != victimIndex) {

// console log

if( UI.GetValue ( "Misc", "JAVASCRIPT", "Script Items", "Console Logs" ) ) {
  Global.PrintColor([65, 100, 255, 255], "[" + prefixconsole + "]" + " hurt " + name + " for " + target_damage + " in " + getHitboxName(hitbox) + " while using " + exploit + "\n")
}

// say to all

if( UI.GetValue ( "Misc", "JAVASCRIPT", "Script Items", "Say to all" ) ) {
Global.ExecuteCommand("say \x01[\x0C" + prefix + "\x01] \x04" + "\x01hurt \x0C" + name + " \x01for \x0C" + target_damage + " \x01in \x0C" + getHitboxName(hitbox) + " \x01while using \x0C" + exploit)
Global.PrintChat("\x01[\x0C" + prefix + "\x01] \x04" + "\x01hurt \x0C" + name + " \x01for \x0C" + target_damage + " \x01in \x0C" + getHitboxName(hitbox) + " \x01while using \x0C" + exploit)

}else{
    Global.PrintChat("\x01[\x0C" + prefix + "\x01] \x04" + "\x01hurt \x0C" + name + " \x01for \x0C" + target_damage + " \x01in \x0C" + getHitboxName(hitbox) + " \x01while using \x0C" + exploit)
}
}
}
}

// main

function main()
{
UI.AddTextbox("Prefix");
UI.AddTextbox("Prefix Console");
UI.AddCheckbox("Chat Logs");
UI.AddCheckbox("Console Logs");
UI.AddCheckbox("Say to all");
UI.SetValue ( "Misc", "JAVASCRIPT", "Script Items", "Chat Logs", true )
Global.RegisterCallback("player_hurt", "hitLog");
Cheat.RegisterCallback('ragebot_fire', 'onRagebot');
}

main();