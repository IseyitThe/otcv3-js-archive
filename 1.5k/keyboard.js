// garbage code written by swoopae
// do not steal you retards

var damage = 0;

function event_player_hurt ( ) {
    victim = Event.GetInt ( "userid" );
    victim_idx = Entity.GetEntityFromUserID ( victim );
    attacker = Event.GetInt ( "attacker" );
    attacker_idx = Entity.GetEntityFromUserID ( attacker );
  
    if ( Entity.GetLocalPlayer( ) == attacker_idx && Entity.GetLocalPlayer( ) !== victim_idx && UI.GetValue ( "Script Items" , "[ keys ] keystrokes mod" ) ) {
        // we attacked, get the damage we done and transform it into minecraft hearts
        damage = Event.GetInt ( "dmg_health" );
      
        damage /= 5;
    }
}

function event_draw ( ) {
    if ( !UI.GetValue ( "Script Items" , "[ keys ] keystrokes mod" ) )
        return;
  
    var box_size = 45;
    var box_size_slash = 22; // autistic
  
    var spacing = 5;
  
    // todo: support for custom colours and refactor the retarded ugly code here ( i don't know how javascript works leave me alone ).
  
    // w key
    Render.FilledRect ( UI.GetValue ( "Script Items" , "[ keys ] keystrokes position x" ) + box_size + spacing , UI.GetValue ( "Script Items" , "[ keys ] keystrokes position y" ) , box_size , box_size , [ 0, 0, 0, 180 ] );
    // a key
    Render.FilledRect ( UI.GetValue ( "Script Items" , "[ keys ] keystrokes position x" ) , UI.GetValue ( "Script Items" , "[ keys ] keystrokes position y" ) + box_size + spacing , box_size , box_size , [ 0, 0, 0, 180 ] );
    // s key
    Render.FilledRect ( UI.GetValue ( "Script Items" , "[ keys ] keystrokes position x" ) + box_size + spacing , UI.GetValue ( "Script Items" , "[ keys ] keystrokes position y" ) + box_size + spacing , box_size , box_size , [ 0, 0, 0, 180 ] );
    // d key
    Render.FilledRect ( UI.GetValue ( "Script Items" , "[ keys ] keystrokes position x" ) + box_size + spacing + box_size + spacing , UI.GetValue ( "Script Items" , "[ keys ] keystrokes position y" ) + box_size + spacing , box_size , box_size , [ 0, 0, 0, 180 ] );
    // space key
    Render.FilledRect ( UI.GetValue ( "Script Items" , "[ keys ] keystrokes position x" ) , UI.GetValue ( "Script Items" , "[ keys ] keystrokes position y" ) + box_size + spacing + box_size + spacing , box_size + spacing + box_size + spacing + box_size , box_size , [ 0, 0, 0, 180 ] );
  
    // draw last hit damage below
    if ( UI.GetValue ( "Script Items" , "[ keys ] last hit damage mod" ) )
        Render.String ( UI.GetValue ( "Script Items" , "[ keys ] keystrokes position x" ) + box_size + spacing + box_size_slash , UI.GetValue ( "Script Items" , "[ keys ] keystrokes position y" ) + box_size + spacing + box_size + spacing + box_size + spacing + 5 , UI.GetValue ( "[ keys ] keystrokes font" ) , damage + " HEARTS DEALT" , [ 255, 255, 255, 180 ] );
  
    // w key text
    if ( Global.IsKeyPressed ( 0x57 ) )
        Render.String ( UI.GetValue ( "Script Items" , "[ keys ] keystrokes position x" ) + box_size + spacing + box_size_slash , UI.GetValue ( "Script Items" , "[ keys ] keystrokes position y" ) + box_size_slash - 3 , UI.GetValue ( "[ keys ] keystrokes font" ) , "W" , [ 255, 255, 255, 180 ] );
  
    // a key text
    if ( Global.IsKeyPressed ( 0x41 ) )
        Render.String ( UI.GetValue ( "Script Items" , "[ keys ] keystrokes position x" ) + box_size_slash , UI.GetValue ( "Script Items" , "[ keys ] keystrokes position y" ) + box_size + spacing + box_size_slash - 3 , UI.GetValue ( "[ keys ] keystrokes font" ) , "A" , [ 255, 255, 255, 180 ] );
  
    // s key text
    if ( Global.IsKeyPressed ( 0x53 ) )
        Render.String ( UI.GetValue ( "Script Items" , "[ keys ] keystrokes position x" ) + box_size + spacing + box_size_slash , UI.GetValue ( "Script Items" , "[ keys ] keystrokes position y" ) + box_size + spacing + box_size_slash - 3 , UI.GetValue ( "[ keys ] keystrokes font" ) , "S" , [ 255, 255, 255, 180 ] );
  
    // d key text
    if ( Global.IsKeyPressed ( 0x44 ) )
        Render.String ( UI.GetValue ( "Script Items" , "[ keys ] keystrokes position x" ) + box_size + spacing + box_size + spacing + box_size_slash , UI.GetValue ( "Script Items" , "[ keys ] keystrokes position y" ) + box_size + spacing + box_size_slash - 3 , UI.GetValue ( "[ keys ] keystrokes font" ) , "D" , [ 255, 255, 255, 180 ] );

    // space key text
    if ( Global.IsKeyPressed ( 0x20 ) )
        Render.String ( UI.GetValue ( "Script Items" , "[ keys ] keystrokes position x" ) + box_size + spacing + box_size / 2 , UI.GetValue ( "Script Items" , "[ keys ] keystrokes position y" ) + box_size + spacing + box_size + spacing + box_size_slash - 3 , UI.GetValue ( "[ keys ] keystrokes font" ) , "SPACEBAR" , [ 255, 255, 255, 180 ] );
}

function main_func ( ) {
    var screen_size = Global.GetScreenSize ( );
  
    UI.AddLabel ( "keystrokes mod by swoopae" );
    UI.AddLabel ( "- soon to feature reach display" );
  
    UI.AddCheckbox ( "[ keys ] keystrokes mod" );
  
    UI.AddSliderInt ( "[ keys ] keystrokes position x" , 0 , screen_size [ 0 ] );
    UI.AddSliderInt ( "[ keys ] keystrokes position y" , 0 , screen_size [ 1 ] );
  
    UI.AddCheckbox ( "[ keys ] last hit damage mod" );
  
    UI.AddSliderInt ( "[ keys ] keystrokes font" , 0 , 20 );
  
    Global.RegisterCallback ( "player_hurt" , "event_player_hurt" );
    Global.RegisterCallback ( "Draw" , "event_draw" );
}

main_func ( );