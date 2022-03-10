

UI.AddSliderFloat( "Shift Level", 0.0, 180.0 );

var type = 1;

function aspectratio( ) {
	AntiAim.SetRealOffset(45);
}

function reset( ) {
	if (type == 1)
		AntiAim.SetRealOffset(180);
	else
		AntiAim.SetRealOffset(-90);
}

Global.RegisterCallback("CreateMove", "reset")
Global.RegisterCallback("ragebot_fire", "aspectratio");
