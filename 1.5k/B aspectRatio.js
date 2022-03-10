var old_percentage = 0;

function on_draw( ) {
    var percentage = UI.GetValue( "MISC", "JAVASCRIPT", "Script items", "aspect ratio" );
    
    if ( old_percentage != percentage ) {
        old_percentage = percentage;
            
        var multiplied = 3 * percentage; // note: 3 is the maximum value.
        var value = multiplied / 100;
        
        Convar.SetFloat( "r_aspectratio", value );
    }
}

function initialize( ) {
  UI.AddSliderFloat( "aspect ratio", 0.0, 100.0 );

  Global.RegisterCallback( "Draw", "on_draw" );
}

initialize( );