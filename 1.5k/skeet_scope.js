/// Clear Scope Crosshair for OneTap Crack \\\
/// Made by cr1pwalk#7306 & Morty#9999
/// Enjoy \\\




function d()
{
    var local = Entity.GetLocalPlayer();
    var is_scope = Entity.GetProp(local, "DT_CSPlayer", "m_bIsScoped");

    if( is_scope ) {
        var screen_size = Global.GetScreenSize();

        Convar.SetString("cl_drawhud", "0");

        Render.FilledRect( screen_size[0] / 2 + 155, screen_size[0] / 2 - 420, 30, 1, [  255, 255, 255, 100 ] );
        Render.FilledRect( screen_size[0] / 2 + 125, screen_size[0] / 2 - 420, 30, 1, [  255, 255, 255, 160 ] );
        Render.FilledRect( screen_size[0] / 2 + 95, screen_size[0] / 2 - 420, 30, 1, [  255, 255, 255, 200 ] );
        Render.FilledRect( screen_size[0] / 2 + 65, screen_size[0] / 2 - 420, 30, 1, [  255, 255, 255, 255 ] );
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        Render.FilledRect( screen_size[0] / 2 - 180, screen_size[0] / 2 - 420, 30, 1, [  255, 255, 255, 100 ] );
        Render.FilledRect( screen_size[0] / 2 - 150, screen_size[0] / 2 - 420, 30, 1, [  255, 255, 255, 160 ] );
        Render.FilledRect( screen_size[0] / 2 - 120, screen_size[0] / 2 - 420, 30, 1, [  255, 255, 255, 200 ] )
        Render.FilledRect( screen_size[0] / 2 - 90, screen_size[0] / 2 - 420, 30, 1, [  255, 255, 255, 255 ] );
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        Render.FilledRect( screen_size[0] / 2, screen_size[0] / 2 - 600, 1, 30, [  255, 255, 255, 100 ] );
        Render.FilledRect( screen_size[0] / 2, screen_size[0] / 2 - 570, 1, 30, [  255, 255, 255, 160 ] );
        Render.FilledRect( screen_size[0] / 2, screen_size[0] / 2 - 540, 1, 30, [  255, 255, 255, 200 ] );
        Render.FilledRect( screen_size[0] / 2, screen_size[0] / 2 - 510, 1, 30, [  255, 255, 255, 255 ] );
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        Render.FilledRect( screen_size[0] / 2, screen_size[0] / 2 - 355, 1, 30, [  255, 255, 255, 255 ] );
        Render.FilledRect( screen_size[0] / 2, screen_size[0] / 2 - 325, 1, 30, [  255, 255, 255, 200 ] );
        Render.FilledRect( screen_size[0] / 2, screen_size[0] / 2 - 295, 1, 30, [  255, 255, 255, 160 ] );
        Render.FilledRect( screen_size[0] / 2, screen_size[0] / 2 - 265, 1, 30, [  255, 255, 255, 100 ] );
    }
    else {
        Convar.SetString("cl_drawhud", "1");
        Render.String( screen_size[0] /2, screen_size[1] /2, 0, "H", [ 255, 255, 255, 255 ] );
    }
}

Cheat.RegisterCallback("Draw", "d")