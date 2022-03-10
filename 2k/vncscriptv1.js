// VnCScript - The Power Script
// VnCScript is made by VacCat#7795 and V8A#4199

//░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//░█░░░█░██░░█░███░░░░███░███░████░█░████░█████
//░█░░░█░█░█░█░█░░░░░░█░░░█░░░█░░█░░░█░░█░░░█░░
//░░█░█░░█░░██░█░░░░░░███░█░░░████░█░████░░░█░░
//░░░█░░░█░░░█░███░░░░░░█░█░░░██░░░█░█░░░░░░█░░
//░░░░░░░░░░░░░░░░░░░░███░███░█░█░░█░█░░░░░░█░░


// if i leave anything about "VnClient" just... dont care about it.
// it was the original name for this script
var scriptitems = ["Misc", "JAVASCRIPT", "Script Items"];
var screenSize = Global.GetScreenSize();
var boxWidth = 240;
var boxHeight = 400;
enemies = Entity.GetEnemies();
username = Cheat.GetUsername();
Cheat.Print("welcome" + " " + username + "\n");
UI.AddLabel("VnClient Activated");
UI.AddCheckbox("Tripletap");
UI.AddCheckbox("4 Layer Jitter");
// UI.AddCheckbox("AA Inverter Spam");
// UI.AddCheckbox("Fakelag Spam");
UI.AddCheckbox("Doubletap Teleport");
UI.AddCheckbox("Frametick Fakelag");

// TRIPLETAP (credits to ntrzr and Ominous) -- WORKING
function tripletap()
{
if ( !UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Tripletap" ) )
        return;
    if ( iExploitID == 2 ) {
        iLastShotTime = Global.Tickcount( );
        UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 0 );
        bShouldRecharge = true;
    }

    ForceCharge = bShouldRecharge ? true : false;

    if ( ForceCharge && Global.Tickcount( ) >= ( Global.TickInterval( ) * 10 + iLastShotTime ) )
        UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 1 );
}
Global.RegisterCallback("ragebot_fire", "tripletap");


// 4 LAYER JITTER -- KINDA WORKING
function layerjitter()
{
if ( !UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "4 Layer Jitter" ) )
        return;
Cheat.Print("Layer Jitter is working" + " " + "\n");
AntiAim.SetOverride(1);
// first layer
AntiAim.SetFakeOffset(30);
AntiAim.SetRealOffset(-36);
AntiAim.SetLBYOffset(90);
// second layer
AntiAim.SetFakeOffset(40);
AntiAim.SetRealOffset(-28);
AntiAim.SetLBYOffset(84);
// third layer
AntiAim.SetFakeOffset(35);
AntiAim.SetRealOffset(-35);
AntiAim.SetLBYOffset(87);
// fourth layer
AntiAim.SetFakeOffset(24);
AntiAim.SetRealOffset(-30);
AntiAim.SetLBYOffset(98);
}
Cheat.RegisterCallback("weapon_fire", "layerjitter");

// ANTIAIM INVERTER SPAM -- NOT COMPLETED
function aainverterspam()
{
if ( !UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "AA Inverter Spam" ) )
        return;
}

// FAKELAG SPAM -- NOT COMPLETED
function fakelagspam()
{
if ( !UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Fakelag Spam" ) )
        return;
}


// PLAYER LINE -- NOT WORKING
function isVisible()
{
    if ( !UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Headshot Line" ) )
       return;

    localPlayer_index = Entity.GetLocalPlayer();
    localPlayer_eyepos = Entity.GetEyePosition(localPlayer_index);
    enemies = Entity.GetEnemies();
    for ( i = 0; i < enemies.length; i++)
    {
        hitbox_pos = Entity.GetHitboxPosition(enemies[i], 0);
        result = Trace.Line(localPlayer_index, localPlayer_eyepos, hitbox_pos);
        Cheat.Print("Entity: " + Entity.GetName(result[0]) + " fraction: " + result[1] + "\n");
    }

}
Cheat.RegisterCallback("Draw", "isVisible");

// TRASHTALK ON KILL -- NOT WORKING
function trashtalkonkill() {
    if ( !UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Trashtalk on Kill" ) )
       return;
   Global.ExecuteCommand("say you bitch just rly killed me?");
   Global.ExecuteCommand("say well your fucking dead smol ass uid 42069 nn");
}
Global.RegisterCallback("player_death", "trashtalkonkill");


// DOUBLETAP TELEPORT (credits to edeen) -- WORKING?
function on_ragebot_fire()
{
if ( !UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Doubletap Teleport" ) )
       return;
UI.SetValue("Rage", "GENERAL", "Exploits", "Teleport release", true);
    ragebot_target_exploit = Event.GetInt("exploit");
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Doubletap Teleport"))
    {
        (ragebot_target_exploit == 2) ? UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Doubletap") : UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Doubletap");
    }
}
Global.RegisterCallback("ragebot_fire", "on_ragebot_fire");


// FRAMETICK FAKELAG (credits to Tilestra) -- WORKING
var frame = 0;

function HUD_REDRAW()
{
    if ( !UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Frametick Fakelag" ) )
            return;
    frame++;    if(frame == 50) frame = 1;
    if (frame >= 25 && frame <= 50)    UI.SetValue( "Anti-Aim", "Fake-Lag", "Enabled", true );
    else    UI.SetValue( "Anti-Aim", "Fake-Lag", "Enabled", false );
}

Global.RegisterCallback("CreateMove", "HUD_REDRAW");

// Credits:
// Ominous - for teaching me alot about Onetap Scripting!
// edeen - for helping.
// ntrzr - for helping.
// Tilestra - for helping.
// You - for being here.