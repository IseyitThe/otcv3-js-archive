function test()
{
    Cheat.ExecuteCommand("unbind w");
    Cheat.ExecuteCommand("unbind a");
    Cheat.ExecuteCommand("unbind s");
    Cheat.ExecuteCommand("unbind d");
    Cheat.ExecuteCommand("unbind q");
    Cheat.ExecuteCommand("unbind m");
    Cheat.ExecuteCommand("unbind y");
    Cheat.ExecuteCommand("unbind u");
    Cheat.ExecuteCommand("unbind t");
    Cheat.ExecuteCommand("unbind r");
    Cheat.ExecuteCommand("unbind tab");
    Cheat.ExecuteCommand("unbind e");
    Cheat.ExecuteCommand("unbind space");
    Cheat.ExecuteCommand("unbind mouse1");
    Cheat.ExecuteCommand("unbind mouse2");
    Cheat.ExecuteCommand("unbind mouse3");
    Cheat.ExecuteCommand("unbind mouse4");
    Cheat.ExecuteCommand("unbind mouse5");
    Cheat.ExecuteCommand("unbind uparrow");
    Cheat.ExecuteCommand("cl_crosshairalpha "255"");
    Cheat.ExecuteCommand("cl_crosshaircolor "3"");
    Cheat.ExecuteCommand("cl_crosshaircolor_b "50"");
    Cheat.ExecuteCommand("cl_crosshaircolor_r "50");
    Cheat.ExecuteCommand("cl_crosshaircolor_g "250"");
    Cheat.ExecuteCommand("cl_crosshairdot "1"");
    Cheat.ExecuteCommand("cl_crosshair_t "0"");
    Cheat.ExecuteCommand("cl_crosshairgap "-46"");
    Cheat.ExecuteCommand("cl_crosshairsize "100"");
    Cheat.ExecuteCommand("cl_crosshairsize "200"");
    Cheat.ExecuteCommand("cl_crosshairstyle "4"");
    Cheat.ExecuteCommand("cl_crosshairusealpha "1"");
    Cheat.ExecuteCommand("cl_crosshairthickness "54.5"");
    Cheat.ExecuteCommand("cl_fixedcrosshairgap "-46"");
    Cheat.ExecuteCommand("cl_crosshair_outlinethickness "3"");
    Cheat.ExecuteCommand("cl_crosshair_drawoutline "1"");
    Cheat.ExecuteCommand("fps_max 60");
    Cheat.ExecuteCommand("cl_draw_only_deathnotices 1");
    Cheat.ExecuteCommand("cl_drawhud 0");
}

Cheat.RegisterCallback("round_start", "test");