var old_percentage = 0;

function ratio( ) {
    var percentage = UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "aspect ratio" );
    
    if ( old_percentage != percentage ) {
        old_percentage = percentage;
            
        var multiplied = 3 * percentage; // note: 3 is the maximum value.
        var value = multiplied / 100;
        
        Convar.SetFloat( "r_aspectratio", value );
    }
}

function initialize( ) {
  UI.AddSliderFloat( "aspect ratio", 0.0, 100.0 );

  Global.RegisterCallback( "Draw", "ratio" );
}

initialize( );