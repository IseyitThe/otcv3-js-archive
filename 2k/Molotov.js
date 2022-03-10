function draw_circle( x, y, z, radius ) {

    first = true;

    old_screen_pos = Render.WorldToScreen( [ x, y, z ] );

    for ( t = 0.000; t <= Math.PI * 2.1; t += 0.005 ) {

        if ( first ) {

            world_pos = [ ( radius * Math.cos( -t ) + x ), ( radius * Math.sin(-t) + y), z];

            old_screen_pos = Render.WorldToScreen( world_pos );

            first = false;

        }

        world_pos = [(radius * Math.cos(t) + x), (radius * Math.sin(t) + y), z];

        screen_pos = Render.WorldToScreen( world_pos );

        Render.Line(screen_pos[0], screen_pos[1], old_screen_pos[0], old_screen_pos[1], [ 235, 52, 177, 255 ])

        old_screen_pos = screen_pos;

    }

}



function on_render( ) {

    entities = Entity.GetEntities();

    if( UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Molotov Circle" ) ) {

        for ( i = 0; i < entities.length; i++ ) {

            world_pos = Entity.GetRenderOrigin( entities );

            name = Entity.GetClassName( entities );

            screen_pos = Render.WorldToScreen( world_pos );

            if ( name != "CInferno" )

                continue;

             

            Render.String( screen_pos[0]+1, screen_pos[1]+1 - 50, 1, "molotov", [ 0, 0, 0, 255 ] );

            Render.String( screen_pos[0], screen_pos[1] - 50, 1, "molotov", [ 255, 255, 255, 255 ] );

         

            draw_circle( world_pos[0], world_pos[1], world_pos[2], 150 );

        }

    }

}

Global.RegisterCallback("Draw", "on_render");

UI.AddCheckbox("Molotov Circle");