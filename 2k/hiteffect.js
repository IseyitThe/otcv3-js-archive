UI.AddSliderFloat( "Aspect Ratio", 0.0, 5.0 );

function hurt() {
	var me = Entity.GetLocalPlayer();
    var attacker = Event.GetInt('attacker');
    var victimIndex = Entity.GetEntityFromUserID(victim);
    var attackerIndex = Entity.GetEntityFromUserID(attacker);
    //if (me === attackerIndex) {
        var curTimem = (Globals.Curtime() * 2) % 5;
        menu_val = curTimem;
        string_menu_val = menu_val.toString();

        Convar.SetString ("r_aspectratio", string_menu_val );
    //}
}

function aspectratio( ) {
		menu_val = UI.GetValue("Aspect Ratio");
		string_menu_val = menu_val.toString();

		Convar.SetString ("r_aspectratio", string_menu_val );
}


Global.RegisterCallback("player_hurt", "hurt");
Global.RegisterCallback("FrameStageNotify", "return");