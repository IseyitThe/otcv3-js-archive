


function aspectratio( ) {
var curTimem = (Globals.Curtime() * 2) % 5;
menu_val = UI.GetValue("Aspect Ratio");
string_menu_val = curTimem.toString();

Convar.SetString ("r_aspectratio", string_menu_val );
}

Cheat.RegisterCallback( "FrameStageNotify", "aspectratio" );