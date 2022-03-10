UI.AddCheckbox("Pulse")

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
 }
var screen_size = Global.GetScreenSize();
LPx = [(screen_size[0] / 2) - 50, (screen_size[1] / 2) + 10];
LPy = [(screen_size[0] / 2) - 50, (screen_size[1] / 2) - 10];
LPz = [(screen_size[0] / 2) - 70, (screen_size[1] / 2)];
RPx = [(screen_size[0] / 2) + 50, (screen_size[1] / 2) + 10];
RPy = [(screen_size[0] / 2) + 50, (screen_size[1] / 2) - 10];
RPz = [(screen_size[0] / 2) + 70, (screen_size[1] / 2)];
LPxx = [(screen_size[0] / 2) - 49, (screen_size[1] / 2) + 12];
LPyy = [(screen_size[0] / 2) - 49, (screen_size[1] / 2) - 12];
LPzz = [(screen_size[0] / 2) - 73, (screen_size[1] / 2)];
RPxx = [(screen_size[0] / 2) + 49, (screen_size[1] / 2) + 12];
RPyy = [(screen_size[0] / 2) + 49, (screen_size[1] / 2) - 12];
RPzz = [(screen_size[0] / 2) + 73, (screen_size[1] / 2)];
BPx = [(screen_size[0] / 2) + 10, (screen_size[1] / 2) + 50];
BPy = [(screen_size[0] / 2) - 10, (screen_size[1] / 2) + 50];
BPz = [(screen_size[0] / 2), (screen_size[1] / 2) + 70];
BPxx = [(screen_size[0] / 2) + 12, (screen_size[1] / 2) + 49];
BPyy = [(screen_size[0] / 2) - 12, (screen_size[1] / 2) + 49];
BPzz = [(screen_size[0] / 2), (screen_size[1] / 2) + 73];

function arrows() {
    font = Render.AddFont("Tahoma", 24, 0);
   Render.StringCustom(  (Global.GetScreenSize()[0] / 2) + 35,  (Global.GetScreenSize()[1] / 2) - 22, 0, ">", [0, 0, 0, 60] , font );
   Render.StringCustom(  (Global.GetScreenSize()[0] / 2) - 57,  (Global.GetScreenSize()[1] / 2) - 22, 0, "<", [0, 0, 0, 60] , font );
   Render.StringCustom(  (Global.GetScreenSize()[0] / 2) - 7,  (Global.GetScreenSize()[1] / 2) + 15, 0, "v", [0, 0, 0, 60] , font );
   switch (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items" , "Inverter")) {
    case 0:
        Render.StringCustom(  (Global.GetScreenSize()[0] / 2) - 57,  (Global.GetScreenSize()[1] / 2) - 22, 0, "<", [255,140,133, 200] , font );
        break;
    case 1:
        Render.StringCustom(  (Global.GetScreenSize()[0] / 2) + 35,  (Global.GetScreenSize()[1] / 2) - 22, 0, ">", [255,140,133, 200] , font );
        break;
   }
    switch (UI.GetValue("Script items", "Pulse")) {
        case 0:
            alpha = 255
            break;
        case 1:
            alpha = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / .75)) % (Math.PI * 2))) * 255;
            break;
    }

   
    }

function doubletap() {
    charge = Exploit.GetCharge()
    font = Render.AddFont("Verdana", 20, 10000);
    var choked = Globals.ChokedCommands();
    var random = randomInt(1,3)
//    Render.StringCustom(10 + 1, (Global.GetScreenSize()[1] / 2) + 60 + 1, 0, "" + choked, [0, 0, 0, 255], font);
//	Render.StringCustom(10, (Global.GetScreenSize()[1] / 2) + 60, 0, "" + choked, [255, 255, 255, 255], font);
    if (UI.GetValue("Rage", "GENERAL", "Exploits", "Doubletap")) {
		if (charge < 1) {
     
			Render.StringCustom(10 + 1, (Global.GetScreenSize()[1] / 2) + 30 + 1, 0, "DT", [0, 0, 0, 255], font);
			Render.StringCustom(10, (Global.GetScreenSize()[1] / 2) + 30, 0, "DT", [255, 0, 0, 255], font);
		} else {
          
			Render.StringCustom(10 + 1, (Global.GetScreenSize()[1] / 2) + 30 + 1, 0, "DT", [0, 0, 0, 255], font);
            Render.StringCustom(10, (Global.GetScreenSize()[1] / 2) + 30, 0, "DT", [255,255,255, 255], font);
            
		}
	}
}





Global.RegisterCallback("Draw", "arrows")
Global.RegisterCallback("Draw", "doubletap")
