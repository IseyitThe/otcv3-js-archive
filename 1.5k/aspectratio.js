

UI.AddSliderFloat( "Shift Level", 0.0, 180.0 );


function aspectratio( ) {
menu_val = UI.GetValue("Shift Level");
string_menu_val = menu_val.toString();

Convar.SetString ("bot_mimic_yaw_offset ", string_menu_val );
}
function reset() {
Convar.SetString ("bot_mimic_yaw_offset ", 180 );
}
Global.RegisterCallback("CreateMove", "reset")
Global.RegisterCallback("ragebot_fire", "aspectratio");

