UI.AddSliderFloat( "ASPECT-RATIO", 0.0, 5.0 );


function aspectratio( ) {
menu_val = UI.GetValue("ASPECT-RATIO");
string_menu_val = menu_val.toString();

Convar.SetString ("r_aspectratio", string_menu_val );
}

Cheat.RegisterCallback( "FrameStageNotify", "aspectratio" );