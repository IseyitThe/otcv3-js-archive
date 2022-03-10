UI.AddLabel("Skeet Watermark by razex");
UI.AddCheckbox("Enable Watermark");
UI.AddCheckbox("Show Username");
UI.AddCheckbox("Show FPS");
UI.AddCheckbox("Show Server");
UI.AddCheckbox("Show Rainbow Header");
UI.AddCheckbox("Show Tickrate");
UI.AddColorPicker("Split Text Color");
UI.AddColorPicker("Gradient Left");
UI.AddColorPicker("Gradient Mid");
UI.AddColorPicker("Gradient Right");

UI.SetColor("Script items", "Split Text Color", [108,195,18, 255]);

UI.SetColor("Script items", "Gradient Left", [30,87,153, 255]);
UI.SetColor("Script items", "Gradient Mid", [243,0,255, 255]);
UI.SetColor("Script items", "Gradient Right", [224,255,0, 255]);

UI.AddCheckbox("Enable Custom Text");
UI.AddTextbox("Custom Text")
UI.AddLabel("For color add a : between text");

UI.AddDropdown( "Watermark Text", [ "gamesense", "skeet.cc", "onetap" ] );

/**
 * This is our previous frame time
 */
var frameTimePrev = 0.0

/**
 * This function gets the current fps
 */
function getFPS() {
	frameTimePrev = frameTimePrev * 0.9 + Globals.Frametime() * 0.1;
	return Math.floor(1 / frameTimePrev);
}

/**
 * This function returns the server String
 */
function getServerString() {
	var server = World.GetServerString()

	if(server.length == 0) {
		server = "no server"
	}

	return " | " + server
}

/**
 * Returns server tick rate
 */
function getServerTicks() {
	return 1 / Globals.TickInterval();
}

/**
 * This function actually draw the watermark
 */
function drawWaterMark() {
	if(UI.GetValue("Script items", "Enable Watermark")) {
		var screenSize = Render.GetScreenSize();
		var width = screenSize[0];

		var fontSize = 8

		var watermarkText = UI.GetString("Script items", "Custom Text")


		UI.SetEnabled("Script items", "Watermark Text", !UI.GetValue("Script items", "Enable Custom Text"))
		UI.SetEnabled("Script items", "Custom Text", UI.GetValue("Script items", "Enable Custom Text"))
		UI.SetEnabled("Script items", "For color add a : between text", UI.GetValue("Script items", "Enable Custom Text"))

		if(!UI.GetValue("Script items", "Enable Custom Text")) {
			if(UI.GetString("Script items", "Watermark Text") == "gamesense") {
				watermarkText = "game:sense"
			}

			if(UI.GetString("Script items", "Watermark Text") == "skeet.cc") {
				watermarkText = "skeet:.cc"
			}

			if(UI.GetString("Script items", "Watermark Text") == "onetap") {
				watermarkText = "one:tap"
			}
		}

		if(!watermarkText.includes(":")) {
			watermarkText += ":";
		}

		// This is the entire string width we need
		var gamesenseWidth = Render.TextSize(watermarkText.replace(":", ""), fontSize)[0]

		// This is the width of the entire watermark
		var waterMarkWidth = gamesenseWidth + 20

		// This is only set if show username is true
		var usernameWidth = 0

		if(UI.GetValue("Script items", "Show Username")) {
			usernameWidth = Render.TextSize(" | " + Cheat.GetUsername().toLowerCase(), fontSize)[0]
			waterMarkWidth += usernameWidth
		}

		// This is only set if show fps is true
		var fpsWidth = 0

		if(UI.GetValue("Script items", "Show FPS")) {
			fpsWidth = Render.TextSize(" | " + getFPS() + " fps", fontSize)[0]
			waterMarkWidth += fpsWidth
		}

		// This is only set if show server is true
		var serverWidth = 0

		if(UI.GetValue("Script items", "Show Server")) {
			serverWidth = Render.TextSize(getServerString(), fontSize)[0]
			waterMarkWidth += serverWidth
		}

		// This is only set if show server is true
		var tickrateWidth = 0

		if(UI.GetValue("Script items", "Show Tickrate")) {
			tickrateWidth = Render.TextSize(" | " + getServerTicks() + " ticks", fontSize)[0]
			waterMarkWidth += tickrateWidth
		}

		var xOffset = waterMarkWidth + 5

		// Draws the whole background shit xd
		Render.FilledRect(width - xOffset, 5, waterMarkWidth, 34, [ 17, 17, 17, 255 ] );
		Render.FilledRect(width - xOffset + 2, 5 + 2, waterMarkWidth - 4, 34 - 4, [ 62, 62, 62, 255 ] );
		Render.FilledRect(width - xOffset + 3, 5 + 3, waterMarkWidth - 6, 34 - 6, [ 43, 43, 43, 255 ] );
		Render.FilledRect(width - xOffset + 6, 5 + 6, waterMarkWidth - 12, 34 - 12, [ 62, 62, 62, 255 ] );
		Render.FilledRect(width - xOffset + 7, 5 + 7, waterMarkWidth - 14, 34 - 14, [ 20, 20, 20, 255 ] );

		var textOffset = 0

		if(UI.GetValue("Script items", "Show Rainbow Header")) {
			textOffset = 1
			
			var color1 = UI.GetColor( "Script items", "Gradient Left" );
			var color2 = UI.GetColor( "Script items", "Gradient Mid" );
			var color3 = UI.GetColor( "Script items", "Gradient Right" );
			
			Render.GradientRect(width - xOffset + 8 + 1, 5+8, (waterMarkWidth/2) - 8, 1, 1, color1, color2);
			Render.GradientRect(width - xOffset + (waterMarkWidth/2) + 1, 5+8, (waterMarkWidth/2) - 9, 1, 1, color2, color3);
		}

		// gamesense string
		var splittedText = watermarkText.split(":")

		var textSplitSize = Render.TextSize(splittedText[0], fontSize)[0];

		var splitColor = UI.GetColor( "Script items", "Split Text Color" );

		Render.String( width - (xOffset / 2) - waterMarkWidth/2 + textSplitSize + 7, 16 + textOffset, 0, splittedText[1], splitColor, fontSize);
		Render.String( width - (xOffset / 2) - waterMarkWidth/2 + 7, 16 + textOffset, 0, splittedText[0], [ 255, 255, 255, 255 ], fontSize);

		// username string
		if(UI.GetValue("Script items", "Show Username")) {
			Render.String( width - (xOffset / 2) - waterMarkWidth/2 + 7 + gamesenseWidth, 16 + textOffset, 0, " | " + Cheat.GetUsername().toLowerCase(), [ 255, 255, 255, 255 ], fontSize);
		}

		// fps string
		if(UI.GetValue("Script items", "Show FPS")) {
			Render.String( width - (xOffset / 2) - waterMarkWidth/2 + 7 + gamesenseWidth + usernameWidth, 16 + textOffset, 0, " | " + getFPS() + " fps", [ 255, 255, 255, 255 ], fontSize);
		}

		// server string
		if(UI.GetValue("Script items", "Show Server")) {
			Render.String( width - (xOffset / 2) - waterMarkWidth/2 + 7 + gamesenseWidth + usernameWidth + fpsWidth, 16 + textOffset, 0, getServerString(), [ 255, 255, 255, 255 ], fontSize);
		}

		// tickrate string
		if(UI.GetValue("Script items", "Show Tickrate")) {
			Render.String( width - (xOffset / 2) - waterMarkWidth/2 + 7 + gamesenseWidth + usernameWidth + fpsWidth + serverWidth, 16 + textOffset, 0, " | " + getServerTicks() + " ticks", [ 255, 255, 255, 255 ], fontSize);
		}
	}
}
Cheat.RegisterCallback("Draw", "drawWaterMark")