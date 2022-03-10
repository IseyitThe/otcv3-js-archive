


function aspectratio( ) {
var curTimem = ((Globals.Curtime() * 190) % 30);
var rand = ((Globals.Curtime() * 90) * Globals.Curtime()) % 30
menu_val = UI.GetValue("Aspect Ratio");
var randx = 1;
string_menu_val = curTimem.toString();
if (randx == 1)
	randx = -1;
else if (randx == -1)
	randx = 1;
UI.SetValue("Misc", "SKINS", "Viewmodel", "Z offset", curTimem * -1)
UI.SetValue("Misc", "SKINS", "Viewmodel", "Roll", rand * (randx / 2))
}

Cheat.RegisterCallback( "FrameStageNotify", "aspectratio" );