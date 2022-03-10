UI.AddLabel("v4cum paste")
UI.AddCheckbox("Enable watermark")
function hsv_to_rgb(h, s, v) {
				var r, g, b, i, f, p, q, t;
				if (arguments.length === 1) {
					s = h.s, v = h.v, h = h.h;
				}
				i = Math.floor(h * 6);
				f = h * 6 - i;
				p = v * (1 - s);
				q = v * (1 - f * s);
				t = v * (1 - (1 - f) * s);
				switch (i % 6) {
					case 0:
						r = v, g = t, b = p;
						break;
					case 1:
						r = q, g = v, b = p;
						break;
					case 2:
						r = p, g = v, b = t;
						break;
					case 3:
						r = p, g = q, b = v;
						break;
					case 4:
						r = t, g = p, b = v;
						break;
					case 5:
						r = v, g = p, b = q;
						break;
				}
				return {
					r: Math.round(r * 255),
					g: Math.round(g * 255),
					b: Math.round(b * 255)
				};
			}

			function getCustomValue(xy) {
				var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", xy);
				return value;
			}
			var position = {
				x1: 0,
				y1: 0
			}
			//watermark gs
			function draw_fatality_rect(x, y, width, height) {
				
			}

			function draw_fatality_rect2(x2, y2, width2, height2) {
				var rgbcolor = {
					r: 59,
					g: 59,
					b: 59
				};
				Render.Rect(x2 + 43, y2 - 1, width2 + 64, height2 + -4, [0, 0, 0, 25]);
				Render.Rect(x2 + 44, y2 + 0, width2 + 62, height2 + -6, [39, 39, 39, 255]);
				Render.Rect(x2 + 45, y2 + 1, width2 + 60, height2 + -8, [59, 59, 59, 255]);
				Render.FilledRect(x2 + 46, y2 + 2, width2 + 58, height2 + -10, [39, 39, 39, 255]);
				Render.FilledRect(x2 + 50, y2 + 6, width2 - -50, height2 - 19, [12, 12, 12, 255]); // black
				Render.Rect(x2 + 50, y2 + 6, width2 - -50, height2 + -17, [59, 59, 59, 255]);
			}

			function draw_fatality_rect3(x3, y3, width3, height3) {

			}
			var fps = 0;
			var iterate = 0;
			var averagefps = 0;

			function draw_gs_watermark() // credit to dude who already made it :D
			{
				
					if (UI.GetValue("Enable watermark") == true) {
						UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Watermark", false);
						var rgbcolor = hsv_to_rgb(Global.Realtime() * UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Gradient Speed"), 1, 1);
						var fps1 = 1 / Global.Frametime()
						var fps2 = Math.floor(fps1);
						averagefps = (fps1 + fps2) / 2;
						
						//var fps = Math.floor(fps1)
						iterate++;
						var rgb = hsv_to_rgb(Global.Tickcount() % 350 / 350, 1, 1);
						if (iterate % 100 == 0) {
							fps = Math.floor(averagefps);
						}
						var watermark_name = Entity.GetName(Entity.GetLocalPlayer());
						var today = new Date();
						var hours = today.getHours();
						var currenthours = hours % 12;
						var pmamtext = hours >= 12 ? "pm" : "am";
						var minutestext = today.getMinutes() >= 10 ? today.getMinutes() : "0" + today.getMinutes();
						var datetime = currenthours + ":" + minutestext + " " + pmamtext;
						var screensize = Global.GetScreenSize();
						x1 = screensize[0] / 1.06;
						y1 = screensize[1] / 150;
						draw_fatality_rect(x1, y1, 30, 25);
						draw_fatality_rect2(x1 - 180, y1, 143, 35);
						draw_fatality_rect3(x1 - 330, y1, 143, 35);
						

						Render.GradientRect(x1 - 129, y1 + 7, 100, 1, 1, [100, 150, 200/*55, 177, 218*/, 255], [180, 100, 160/*203, 70, 205*/, 255]);
						Render.GradientRect(x1 - 31, y1 + 7, 93, 1, 1, [180, 100, 160/*203, 70, 205*/, 255], [180, 230, 100/*204, 227, 53*/, 255]);
						Render.String(x1 + -126, y1 + 9, 0, "game", [240, 240, 240, 255], 8);
						Render.String(x1 + -94, y1 + 9, 0, "sense", [/*134, 184, 6*/160, 200, 80, 240], 8);
						Render.String(x1 + -58, y1 + 9, 0, "|", [240, 240, 240, 255], 8);
						Render.String(x1 - 50, y1 + 10, 0, "" + fps, [240, 240, 240, 255], 8); //134, 184, 6, 255
						Render.String(x1 + -26, y1 + 10, 0, "fps |", [240, 240, 240, 255], 8);
						Render.String(x1 + -1, y1 + 10, 0, " " + datetime, [240, 240, 240, 255], 8);
					}
				
			}
			Cheat.RegisterCallback("Draw", "draw_gs_watermark")
			
			
			
			
			
			UI.AddCheckbox("Enable keybinds")
			const keybinds_x = UI.AddSliderInt("keybinds_x", 0, Global.GetScreenSize()[0])
			const keybinds_y = UI.AddSliderInt("keybinds_y", 0, Global.GetScreenSize()[1])

			
					UI.AddCheckbox("Enable Line");
					UI.AddColorPicker("line");
				var colorline = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "line");

				if (colorline[3] == 0)
					UI.SetColor("Misc", "JAVASCRIPT", "Script items", "line", [89, 119, 239, 255]);
					var colorline = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "line");
			function in_bounds(vec, x, y, x2, y2) {
				return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
			}

			function xy() {
				UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "keybinds_x", false)
				UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "keybinds_y", false)
			}
			xy();
			//keybids
			function keybinds() {
				
					if (UI.GetValue("Enable keybinds") == true) {
						UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Show keybind states", false);
						var h = [];
						const fontpixel = Render.AddFont("Verdana", 7, 100);
						colorline = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "line");
						if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
							h.push("Slow motion")
						}
						if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
							h.push("Duck peek assist")
						}
						if (UI.IsHotkeyActive("Misc", "General", "Movement", "Auto peek")) {
							h.push("Quick peek")
						}
						if (UI.IsHotkeyActive("Anti-Aim", "Legit Anti-Aim", "Direction key")) {
							h.push("Anti-Aim invert")
						}
						if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
							h.push("Anti-Aim invert")
						}
						if (UI.IsHotkeyActive("Rage", "General", "General", "Force safe point")) {
							h.push("Safe point")
						}
						if (UI.IsHotkeyActive("Rage", "General", "General", "Resolver override")) {
							h.push("Resolver override")
						}
						if (UI.IsHotkeyActive("Rage", "General", "General", "Force body aim")) {
							h.push("Body aim")
						}
						if (UI.IsHotkeyActive("Rage", "Exploits", "Double tap")) {
							h.push("Double tap")
						}
						if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Desync on shot")) {
							h.push("On shot anti-aim")
						}
						if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
							h.push("Hide shots")
						}
						if (UI.IsHotkeyActive("Visual", "World", "View", "Zoom")) {
							h.push("Zoom")
						}
						if (UI.IsHotkeyActive("Visual", "Self", "Freecam", "Enable")) {
							h.push("Freecam")
						}
						if (UI.IsHotkeyActive("Misc", "Movement", "Edge jump")) {
							h.push("Jump at edge")
						}
						if (UI.IsHotkeyActive("Legit", "GENERAL", "Triggerbot", "Enabled")) {
							h.push("Triggerbot")
						}
						if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Minimum damage override")) {
							h.push("Minimum damage")
						}
						
						const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_x"),
							y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_y");

						const rainbow = [
							Math.floor(Math.sin(Global.Realtime() * 2) * 127 + 128),
							Math.floor(Math.sin(Global.Realtime() * 2 + 2) * 127 + 128),
							Math.floor(Math.sin(Global.Realtime() * 2 + 4) * 127 + 128),
							255
						];
						Render.Rect(x - 4, y + -4, 178, 48 + 15 * (h.length - 1), [59, 59, 59, 255]);
						
						Render.FilledRect(x - 3, y + -3, 176, 46 + 15 * (h.length - 1), [39, 39, 39, 255]);
						Render.FilledRect(x, y, 170, 20, [12, 12, 12, 255]);
						Render.StringCustom(x + 60, y + 4, 0, "hotkey list", [240, 240, 240, 255], fontpixel);
						
						Render.FilledRect(x, y + 20, 170, 20 + 15 * (h.length - 1), [12, 12, 12, 255]);
						Render.Rect(x, y, 170, 40 + 15 * (h.length - 1), [59, 59, 59, 255]);
						for (i = 0; i < h.length; i++) {
							Render.StringCustom(x + 5, y + 23 + 15 * i, 0, h[i], [240, 240, 240, 255], fontpixel);
							Render.StringCustom(x + 123, y + 23 + 15 * i, 0, "[toggled]", [240, 240, 240, 255], fontpixel);
						}
						Render.GradientRect(x + 1, y + 1, 84, 1, 1, [100, 150, 200/*55, 177, 218*/, 255], [180, 100, 160/*203, 70, 205*/, 255]);
						Render.GradientRect(x + 85, y + 1, 84, 1, 1, [180, 100, 160/*203, 70, 205*/, 255], [180, 230, 100/*204, 227, 53*/, 255]);
						if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Line")){
							Render.GradientRect(x + 5, y + 20, 80, 1, 1, [12, 12, 12, 255], [colorline[0], colorline[1], colorline[2], colorline[3]]);
							Render.GradientRect(x + 85, y + 20, 80, 1, 1, [colorline[0], colorline[1], colorline[2], colorline[3]], [12, 12, 12, 255]);
							//Render.FilledRect(x + 5, y + 20, 160, 1, [colorline[0], colorline[1], colorline[2], colorline[3]]);
						}
						
						if (Global.IsKeyPressed(1)) {
							const mouse_pos = Global.GetCursorPosition();
							if (in_bounds(mouse_pos, x, y, x + 175, y + 30)) {
								if (UI.IsMenuOpen() == false)
									return;
								UI.SetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_x", mouse_pos[0] - 85);
								UI.SetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_y", mouse_pos[1] - 12);
							}
						}
					}
				
			}


Global.RegisterCallback("Draw", "keybinds");
