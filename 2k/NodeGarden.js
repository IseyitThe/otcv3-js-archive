var nodesY = [];
var nodesX = [];
var first = 1;
var directionX = [];
var directionY = [];
var dots = [];

UI.AddSliderInt( 'dots number', 10, 100 )
UI.AddSliderFloat( 'background alpha', 0, 255 )
UI.AddColorPicker( 'dots color' )
UI.AddColorPicker( 'lines color' )

function generate() {
    for (var i = 0; i < dots; i++) {
        directionX.push( Math.random() * 5 - 2.5 )
        directionY.push( Math.random() * 5 - 2.5 )
        nodesX.push( Math.random() * Render.GetScreenSize()[0] )
        nodesY.push( Math.random() * Render.GetScreenSize()[1] )
    }
}

function nGarden() {
    dots = UI.GetValue( 'Script items', 'dots number' )
    bgAlpha = UI.GetValue( 'Script items', 'background alpha' )
    lColor = UI.GetColor( 'Script items', 'lines color' )
    dColor = UI.GetColor( 'Script items', 'dots color' )
    if ( UI.IsMenuOpen() ) {
        Render.FilledRect( 0, 0, Render.GetScreenSize()[0], Render.GetScreenSize()[1], [ 0, 0, 0, bgAlpha ] )
        if ( first == 1 ) { generate(); first = 0 }
        for (var i = 0; i < dots; i++) {
            nodesX[i] = nodesX[i] + directionX[i]
            nodesY[i] = nodesY[i] + directionY[i]
            if ( nodesX[i] > Render.GetScreenSize()[0] ) { nodesX[i] = 0 }
            if ( nodesY[i] > Render.GetScreenSize()[1] ) { nodesY[i] = 0 }
            if ( nodesY[i] < 0 ) { nodesY[i] = Render.GetScreenSize()[1] }
            if ( nodesX[i] < 0 ) { nodesX[i] = Render.GetScreenSize()[0] }
            Render.FilledCircle( nodesX[i], nodesY[i], 3, dColor )
        }
        for (var i = 0; i < dots; i++) {
            var nodesA = [ nodesX[i], nodesY[i] ]
            for (var j = 0; j < dots; j++) {
                var nodesB = [ nodesX[j], nodesY[j] ]
                var dx = Math.sqrt( Math.pow( nodesA[0] - nodesB[0], 2 ) + Math.pow( nodesA[1] - nodesB[1], 2 ) )
                if ( dx < 255 ) {
                Render.Line( nodesA[0], nodesA[1], nodesB[0], nodesB[1], [ lColor[0], lColor[1], lColor[2], ( 255 - dx ) ] )
                }
            }
        }
    }
}
Cheat.RegisterCallback( 'Draw', 'nGarden' )