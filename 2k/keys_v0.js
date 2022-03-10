function loadTex(subPath, mag) {
	mag = mag || 0;

	if ( !mag ) {
		mag = "";
	} else {
		mag = "@" + mag + "x";
	}

	var fullPath = "ot/data/louie/" + subPath + mag + ".png";

	if ( loadTex._cache[ fullPath ] !== undefined ) return loadTex._cache[ fullPath ];

	var tex = Render.AddTexture( fullPath );
	loadTex._cache[ fullPath ] = tex;
	Cheat.Print( "Loaded texture: " + fullPath + "\n" );
	return tex;
}

loadTex._cache = {};

var Vertex = function(x,y) {
    var self = {
        x : x,
        y : y
    };

    self.mul = function(x, y) {
        if ( y === undefined ) y = x;
        if ( typeof x == 'object' ) {
            y = x.y;
            x = x.x;
        }
        return new Vertex( self.x * x, self.y * y );
    };

    self.add = function(x, y) {
        if ( y === undefined ) y = x;
        if ( typeof x == 'object' ) {
            y = x.y;
            x = x.x;
        }
        return new Vertex( self.x + x, self.y + y );
    };

    self.copy = function() {
        return new Vertex(self.x, self.y);
    };

    self.compare = function(other) { 
    	return (other.x == self.x) && (other.y == self.y);
    };

    self.print = function() {
    	Cheat.Print( "X: " + self.x + " | Y: " + self.y + "\n" );
    };

    return self;
};

var Point = function(x,y) { return new Vertex(x,y); }; 

var magFromSize = function(size) {
	if ( size.h <= 150 ) return 1;
	if ( size.h <= 250 ) return 2;
	return 4;
};
var tex = {
	Q : function(size) {
		return loadTex( "keys.js/q", magFromSize( size ) );
	},
	W : function(size) {
		return loadTex( "keys.js/w", magFromSize( size ) );
	},
	E : function(size) {
		return loadTex( "keys.js/e", magFromSize( size ) );
	},
	A : function(size) {
		return loadTex( "keys.js/a", magFromSize( size ) );
	},
	S : function(size) {
		return loadTex( "keys.js/s", magFromSize( size ) );
	},
	D : function(size) {
		return loadTex( "keys.js/d", magFromSize( size ) );
	},
	CTRL : function(size) {
		return loadTex( "keys.js/ctrl", magFromSize( size ) );
	},
	FrameL : function(size) {
		return loadTex( "keys.js/frameL", magFromSize( size ) );
	},
	FrameM : function(size) {
		return loadTex( "keys.js/frameM", magFromSize( size ) );
	},
	FrameR : function(size) {
		return loadTex( "keys.js/frameR", magFromSize( size ) );
	},
	FrameLActive : function(size) {
		return loadTex( "keys.js/frameLActive", magFromSize( size ) );
	},
	FrameMActive : function(size) {
		return loadTex( "keys.js/frameMActive", magFromSize( size ) );
	},
	FrameRActive : function(size) {
		return loadTex( "keys.js/frameRActive", magFromSize( size ) );
	},
	SHIFT : function(size) {
		return loadTex( "keys.js/shift", magFromSize( size ) );
	}
};

var Frame = function(settings) {
	var self = Object.assign({
		leftPieceWidth  : 86,
		rightPieceWidth : 90,
		middlePieceWidth: 0,
		glyphSize 		: {
			w : 400,
			h : 400
		},
		glyph 			: null,
		listenForVK 	: null,
		scale 			: 1,
		pos 			: new Point(0,0),

		draw 			: null,
		getSize 		: null,
		getUnscaledSize : null,
		destroy 		: null
	}, settings);

	self.draw = function() {
		var scaledHeight = Math.floor( self.glyphSize.h * self.scale );
		var scaledWidth = Math.floor( self.glyphSize.w * self.scale );
		var scaledMiddle = Math.floor( self.middlePieceWidth * self.scale );
		var scaledLeft = Math.floor( self.leftPieceWidth * self.scale );
		var scaledRight = Math.floor( self.rightPieceWidth * self.scale );
		var size = self.getSize();

		Render.TexturedRect( self.pos.x, self.pos.y, scaledLeft, scaledHeight, Global.IsKeyPressed( Frame.keyToVK[ self.listenForVK ] ) ? tex.FrameLActive( size ) : tex.FrameL( size ) );
		var offset = scaledLeft;
		Render.TexturedRect( self.pos.x + offset, self.pos.y, scaledMiddle, scaledHeight, Global.IsKeyPressed( Frame.keyToVK[ self.listenForVK ] ) ? tex.FrameMActive( size ) : tex.FrameM( size ) );
		offset += scaledMiddle;
		Render.TexturedRect( self.pos.x + offset, self.pos.y, scaledRight, scaledHeight, Global.IsKeyPressed( Frame.keyToVK[ self.listenForVK ] ) ? tex.FrameRActive( size ) : tex.FrameR( size ) );

		if ( self.glyph ) {
			Render.TexturedRect( self.pos.x, self.pos.y, scaledWidth, scaledHeight, tex[ self.glyph ]( size ) );
		}
	};

	self.getSize = function() {
		return { w : Math.floor( (self.leftPieceWidth + self.rightPieceWidth + self.middlePieceWidth) * self.scale ), h : Math.floor( self.glyphSize.h * self.scale ) }
	};

	self.getUnscaledSize = function() {
		return { w : self.leftPieceWidth + self.rightPieceWidth + self.middlePieceWidth, h : self.glyphSize.h }
	};

	self.init = function() {
		if ( self.middlePieceWidth == 0 ) self.middlePieceWidth = 400 - (self.leftPieceWidth + self.rightPieceWidth);
		return self;
	}

	return self.init();
};

Frame.keyToVK = {
	"Q" : 81,
	"W" : 87,
	"E" : 69,
	"A" : 65,
	"S" : 83,
	"D" : 68,
	"SHIFT" : 16,
	"SPACE" : 32,
	"CTRL" : 17
};

// Init
UI.AddSliderInt( '[KS] X', 0, 100 );
UI.AddSliderInt( '[KS] Y', 0, 100 );
UI.AddSliderFloat( '[KS] ScaleTest', 0, 100 );

var screenSize = [0,0];
var globalScale = parseInt( UI.GetValue( 'Misc', 'JAVASCRIPT', 'Script items', '[KS] ScaleTest' ) ) / 100;
var globalOffset = new Point( 
	( parseInt( UI.GetValue( 'Misc', 'JAVASCRIPT', 'Script items', '[KS] X' ) ) / 100 ) * screenSize[0], 
	( parseInt( UI.GetValue( 'Misc', 'JAVASCRIPT', 'Script items', '[KS] Y' ) ) / 100 ) * screenSize[1]
);

var drawables = [];

function resetDrawables(scale, pos) {
	scale = scale || 1.0;
	pos = pos || new Point(0, 0);

	var offsetPerIteration = 50;
	var spaceWidth = 900;
	var firstRowOffset = 390;

	var xOffs = pos.x;
	var yOffs = pos.y;
	
	drawables = [];

	[
		[ {type: "offset", x: Math.floor(firstRowOffset * scale)}, "Q", "W", "E" ],
		[ "SHIFT", "A", "S", "D" ],
		[ "CTRL", {type: "specific", glyph : null, width : spaceWidth, listenFor : "SPACE" } ]
	].forEach(function(row) {
		row.forEach(function(col) {
			if (typeof col == "object") {
				if ( col.type == "offset" ) {
					xOffs += col.x;		
				} else if ( col.type == "specific" ) {
					var frame = new Frame({ glyph : col.glyph, pos : new Point(xOffs, yOffs), middlePieceWidth : col.width, scale : scale, listenForVK : col.listenFor });
					drawables.push( frame );
					xOffs += frame.getSize().w - Math.floor(offsetPerIteration * scale);
				}
				return;
			}

			var frame = new Frame({ glyph : col, pos : new Point(xOffs, yOffs), scale : scale, listenForVK : col });
			drawables.push( frame );
			xOffs += frame.getSize().w - Math.floor(offsetPerIteration * scale);
		});

		xOffs = pos.x;
		yOffs += drawables[ drawables.length - 1 ].getSize().h - Math.floor(offsetPerIteration * scale);
	});
}

resetDrawables(
	globalScale,
	globalOffset
);

function onDraw() {
	drawables.forEach(function(drawable) {
		drawable.scale = globalScale;
		drawable.draw();
	});

	screenSize = Render.GetScreenSize();
}

function onUpdate() {
	if ( Cheat.FrameStage() != 0 ) return;
	var newScale = parseInt( UI.GetValue( 'Misc', 'JAVASCRIPT', 'Script items', '[KS] ScaleTest' ) ) / 100;
	var newOffset = new Point( 
		( parseInt( UI.GetValue( 'Misc', 'JAVASCRIPT', 'Script items', '[KS] X' ) ) / 100 ) * screenSize[ 0 ],
		( parseInt( UI.GetValue( 'Misc', 'JAVASCRIPT', 'Script items', '[KS] Y' ) ) / 100 ) * screenSize[ 1 ]
	);

	if ( (newScale != globalScale) || !newOffset.compare( globalOffset ) ) {
		globalScale = newScale;
		globalOffset = newOffset;
		resetDrawables( globalScale, globalOffset );
	}
}

Cheat.RegisterCallback( "Draw", "onDraw" );
Cheat.RegisterCallback( "FrameStageNotify", "onUpdate" );
