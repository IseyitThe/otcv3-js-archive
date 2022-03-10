UI.AddLabel('               ');
UI.AddLabel('                 Grenade ESP');
function radians_to_degrees( radians ) {
  return radians * ( 180 / Math.PI );
}
function draw_circle( x, y, z, radius, accuracy ) {
  color = UI.GetColor("Script items", "Molotov Color")
    first = true;
    old_screen_pos = Render.WorldToScreen( [ x, y, z ] );
    for ( t = 0.000; t <= Math.PI * 2.1; t += accuracy ) {
        if ( first ) {
            world_pos = [ ( radius * Math.cos( -t ) + x ), ( radius * Math.sin(-t) + y), z];
            old_screen_pos = Render.WorldToScreen( world_pos );
            first = false;
        }
        world_pos = [(radius * Math.cos(t) + x), (radius * Math.sin(t) + y), z];
        screen_pos = Render.WorldToScreen( world_pos );
        Render.Line(screen_pos[0], screen_pos[1], old_screen_pos[0], old_screen_pos[1], color)
        old_screen_pos = screen_pos;
    }
}
function draw_circle2( x, y, z, radius, accuracy ) {
  color = UI.GetColor("Script items", "Smoke Color")
    first = true;
    old_screen_pos = Render.WorldToScreen( [ x, y, z ] );
    for ( t = 0.000; t <= Math.PI * 2.1; t += accuracy ) {
        if ( first ) {
            world_pos = [ ( radius * Math.cos( -t ) + x ), ( radius * Math.sin(-t) + y), z];
            old_screen_pos = Render.WorldToScreen( world_pos );
            first = false;
        }
        world_pos = [(radius * Math.cos(t) + x), (radius * Math.sin(t) + y), z];
        screen_pos = Render.WorldToScreen( world_pos );
        Render.Line(screen_pos[0], screen_pos[1], old_screen_pos[0], old_screen_pos[1], color)
        old_screen_pos = screen_pos;
    }
}
function draw_circle3( x, y, z, radius, accuracy ) {
  color = UI.GetColor("Script items", "Smoke Color")
    first = true;
    old_screen_pos = Render.WorldToScreen( [ x, y, z ] );
    for ( t = 0.000; t <= Math.PI * 2.1; t += accuracy ) {
        if ( first ) {
            world_pos = [ ( radius * Math.cos( -t ) + x ), ( radius * Math.sin(-t) + y), z];
            old_screen_pos = Render.WorldToScreen( world_pos );
            first = false;
        }
        world_pos = [(radius * Math.cos(t) + x), (radius * Math.sin(t) + y), z];
        screen_pos = Render.WorldToScreen( world_pos );
        Render.Line(screen_pos[0], screen_pos[1], old_screen_pos[0], old_screen_pos[1], color)
        old_screen_pos = screen_pos;
    }
}
function on_render( ) {
    entities = Entity.GetEntities();
    if( UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Smoke Circle" ) ) {
        for ( i = 0; i < entities.length; i++ ) {
            world_pos = Entity.GetRenderOrigin( entities[i] );
            name = Entity.GetClassName( entities[i] );
            screen_pos = Render.WorldToScreen( world_pos );
              
            if ( name != "CInferno" )
                continue;
                
              draw_circle( world_pos[0], world_pos[1], world_pos[2], 180, 0.150);
        }
    }
}
function on_render2( ) {
    entities = Entity.GetEntities();
    if( UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Smoke Circle" ) ) {
        for ( i = 0; i < entities.length; i++ ) {
            world_pos = Entity.GetRenderOrigin( entities[i] );
            name = Entity.GetClassName( entities[i] );
            screen_pos = Render.WorldToScreen( world_pos );
              
            if ( name != "CSmokeGrenadeProjectile" )
                continue;
                
              draw_circle2( world_pos[0], world_pos[1], world_pos[2], 149, 0.150);
        }
    }
}
Global.RegisterCallback("Draw", "on_render");
Global.RegisterCallback("Draw", "on_render2");
UI.AddCheckbox("Molotov Circle");
UI.AddColorPicker("Molotov Color")
UI.AddCheckbox("Smoke Circle");
UI.AddColorPicker("Smoke Color")