var iExploitID = 0;
var bDoubleTapped = false;
var bShouldRecharge = false;
var ForceCharge = false;
var iLastShotTime = 0;
var indicator = true;

UI.AddCheckbox("Instant DoubleTap");
UI.AddDropdown("dt mode", ["Aggressive", "Passive"]);
UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 1 );



function on_ragebot_fire()
{
    ragebot_target_exploit = Event.GetInt("exploit");
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tripletap"))
    {
        if (ragebot_target_exploit == 2)
        {
            UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", true);
            indicator = false;
        }
        else
        {
            UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", false);
            indicator = true;
        }
    }
}

function event_rbot_fire( ) {
    iExploitID = Event.GetInt( "exploit" );
    if ( !UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Instant DoubleTap" ) )
        return;

    if ( iExploitID == 2 ) {
        iLastShotTime = Global.Tickcount( );
        bDoubleTapped = true;
        UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 0 );
        bShouldRecharge = true;
        indicator = false;
    }

    ForceCharge = bShouldRecharge ? true : false;

    if ( ForceCharge && Global.Tickcount( ) >= ( Global.TickInterval( ) * 10 + iLastShotTime ) ) {
        indicator = true;
        UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 1 );
    }
}

var length = 0;

function drawIndicator() {
    if(!UI.GetValue("Script items", "DT Indicator"))
        return;
    if(!Entity.IsValid(Entity.GetLocalPlayer()) || !Entity.IsAlive(Entity.GetLocalPlayer()))
      return;
    screenSize = Global.GetScreenSize();
    x = 25;
    y = screenSize[1]-100;
  

    if(!UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")) {
        Render.String(x, y, 0, "DT", [145,0,0,255], 30);
        return;
    }

   
    if(indicator) {

        Render.String(x, y, 0, "DT", [0,255,0,255], 30);

        if(length > maxLength) {
                return;
        }

        if(outline)
            Render.FilledRect(x, y+41, maxLength, height+3, [0,0,0,255]);

        if(Global.Tickcount() > (iLastShotTime+(Global.TickInterval()*.2))-(Global.TickInterval()*.3)) {
            length+=Math.round(maxLength*.03);
            Render.FilledRect(x, y+42, length, height, [0,255,0,255]);
        }

    } else {
        if(!UI.GetValue("Script items", "Hide indicator when empty"))
            if(outline)
            Render.FilledRect(x, y+41, maxLength, height+3, [0,0,0,255]);

        waiting = 1;
        length = 0;
        Render.String(x, y, 0, "DT", [255,0,0,255], 30);
    }

}

runTime = Global.Curtime();
var secondsElapsed = 0;
waiting = indicator ? 0 : 1;

function check() {
    if (waiting == 1) {
        if (Global.Curtime() - runTime > .2) {
            secondsElapsed += 1;
            runTime = Global.Curtime();
            indicator = true;
        }
    }
}

function modecheck()
{
  if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tripletap Mode") == 0) { on_ragebot_fire(); }
  if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tripletap Mode") == 1) { event_rbot_fire(); }
}

Global.RegisterCallback("ragebot_fire", "modecheck");
Global.RegisterCallback("Draw", "drawIndicator");
Global.RegisterCallback("Draw", "check");
