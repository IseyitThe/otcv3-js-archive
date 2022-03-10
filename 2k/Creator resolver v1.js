UI.AddLabel("___________Creative___________");
UI.AddLabel("____________Beta___________");
UI.AddLabel("_If you look to the left the Resolver_");
UI.AddLabel("_is not activated but it works_");


UI.AddCheckbox(" Enable Resolver ");
UI.AddDropdown("Resolver Modes(beta)", ["off", "v12"]);
UI.AddCheckbox("Baim if GAY -75");
 

    var resolver = UI.GetValue("Script items", " Enable Resolver ");
    var resolver = UI.GetValue("Script items", "v12");
    var resolver = UI.GetValue("Script items", "Baim if Lethal 90+");
    var resolver = UI.GetValue("Rage", "Force body aim = 1");
    
    localplayer_index = Entity.GetLocalPlayer( );
    var_0x16("Resolver_index_var", "resolve.index_var(-60,60)");
    var_0x16("Resolver_index_var", "resolve.index,var(0,0)");
    var_0x16("Resolver_index_var", "resolve.index_Entity.enemyPlayer_var(-60,60)");

//pula mea care esti ma?

    var_0x_16("Resolver_index_var", "resolve.index_var(60,-60)");
    var_0x_42("Resolver.Get_index", "resolver_var.globalCurtime");
    var_1x_43("Resolver_index_var", "resolve.index_var(-0,0)");
    var_2x_32("Resolver_index_var", "resolve.index_var(60,-60)");
    
   var_Get.Value("Script items", "JAVASCRIPT");

Cheat.RegisterCallback("weapon_fire", "on_weapon_fire")
Cheat.RegisterCallback("player_connect_full", "on_player_connect")
Cheat.RegisterCallback("CreateMove","on_create_move")
Cheat.RegisterCallback("Draw","on_draw")
Cheat.RegisterCallback("Draw", "onRender")