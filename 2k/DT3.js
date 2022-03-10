UI.AddCheckbox("Fast DT ");
UI.AddLabel("JS By Word si ren js");
var iLastShotTime;
function LastShotTime()
{
if ( !UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Better double(triple)-tap" ) )
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