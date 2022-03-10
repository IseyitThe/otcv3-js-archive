 UI.AddCheckbox( "enable" );
 UI.AddColorPicker("zhibiao"); 
 UI.AddSliderInt( "juli", 1, 100 ); 
 UI.AddSliderInt( "LEFT YAW", -180, 180 ); 
 UI.AddSliderInt( "LEFT YAW JITTER",-180,180);
 UI.AddSliderInt( "RIGHT YAW", -180, 180 );
 UI.AddSliderInt( "RIGHT YAW JITTER",-180,180);
 UI.AddDropdown( "jiantou type", [ "<>", "()"] );
 UI.AddDropdown( "LBY TYPE", [ "Sway", "Eye yaw", "Opposite" ] );

var ui_visible = UI.SetEnabled
var ui_set = UI.SetValue
var ui_get = UI.GetValue
var ui_get_color = UI.GetColor
UI.IsHotkeyActive("Anti-Aim","Fake angles","Inverter")




function rainbow(h, s, v) {
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
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}


function drawString()
{   
   
	 left = ui_get("Misc","JAVASCRIPT","Script items","LEFT YAW");
	 left_jitter = ui_get("Misc","JAVASCRIPT","Script items","LEFT YAW JITTER");
     right = ui_get("Misc","JAVASCRIPT","Script items","RIGHT YAW");
	 RIGHT_jitter = ui_get("Misc","JAVASCRIPT","Script items","RIGHT YAW JITTER"); 
	var speed = ui_get("Misc","JAVASCRIPT","Script items");
	var jiantou = ui_get("Misc","JAVASCRIPT","Script items","jiantou type")
	var yanse = ui_get_color( "Misc","JAVASCRIPT","Script items","zhibiao" );
	var lby = ui_get("Misc","JAVASCRIPT","Script items","LBY TYPE")
	var size = Render.GetScreenSize()   ;
	var distance = (size[0]/2)/210*ui_get("Misc","JAVASCRIPT","Script items","juli");
	 	tickcount = Global.Tickcount();
	    color = rainbow(tickcount % 350 / 350, 1, 1, 1, 255);
		if (jiantou == 1) {tou_left = "(",tou_right=")"}
		if (jiantou == 0) {tou_left = "<",tou_right=">"}
      if (ui_get("enable")) {
            var swi = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter");
            if (swi == 1) {
                ui_set("Anti-Aim","Rage Anti-Aim","Yaw offset", left);
				ui_set("Anti-Aim","Rage Anti-Aim","Jitter offset",left_jitter);
				  Render.String( size[0] / 2 - distance -20 , size[1] / 2 , 0, tou_left, [ color.r, color.g, color.b, 255 ],24);
				  Render.String( size[0] / 2 + distance -6 , size[1] / 2-0.5 , 0, tou_right, [ yanse[0],yanse[1],yanse[2],yanse[3] ],24);
            }
            if (swi == 0) {
                ui_set("Anti-Aim","Rage Anti-Aim","Yaw offset", right);
				ui_set("Anti-Aim","Rage Anti-Aim","Jitter offset",RIGHT_jitter);
				  Render.String( size[0] / 2 + distance -6 , size[1] / 2-0.5 , 0, tou_right, [ color.r, color.g, color.b, 255 ],24);
				  Render.String( size[0] / 2 - distance -20 , size[1] / 2 , 0, tou_left, [ yanse[0],yanse[1],yanse[2],yanse[3] ],24);	
            }
      }
	   
	  if (lby == 0) {ui_set("Anti-Aim","Fake angles","LBY mode",2)}
	  if (lby == 1) {ui_set("Anti-Aim","Fake angles","LBY mode",0)}
	  if (lby == 2) {ui_set("Anti-Aim","Fake angles","LBY mode",1)}
	
	 if (ui_get("enable") == false)
		 {
		 ui_visible("Misc","JAVASCRIPT","Script items","LEFT YAW",false)
		 ui_visible("Misc","JAVASCRIPT","Script items","LEFT YAW JITTER",false)
		 ui_visible("Misc","JAVASCRIPT","Script items","RIGHT YAW",false)
		 ui_visible("Misc","JAVASCRIPT","Script items","RIGHT YAW JITTER",false)
		 ui_visible("Misc","JAVASCRIPT","Script items","juli",false)
		 ui_visible("Misc","JAVASCRIPT","Script items","zhibiao",false)
		 ui_visible("Misc","JAVASCRIPT","Script items","jiantou type",false)
		 ui_visible("Misc","JAVASCRIPT","Script items","LBY TYPE",false)
		 }
		  if (ui_get("enable") )
		 {
		 ui_visible("Misc","JAVASCRIPT","Script items","LEFT YAW",true)
		 ui_visible("Misc","JAVASCRIPT","Script items","LEFT YAW JITTER",true)
		 ui_visible("Misc","JAVASCRIPT","Script items","RIGHT YAW",true)
		 ui_visible("Misc","JAVASCRIPT","Script items","RIGHT YAW JITTER",true)
		 ui_visible("Misc","JAVASCRIPT","Script items","juli",true)
		 ui_visible("Misc","JAVASCRIPT","Script items","zhibiao",true)
		 ui_visible("Misc","JAVASCRIPT","Script items","jiantou type",true)
		 ui_visible("Misc","JAVASCRIPT","Script items","LBY TYPE",true)
		 } 
//fakeyaw = Local.GetFakeYaw();
//Cheat.Print(fakeyaw + "\n");
//realyaw = Local.GetRealYaw();
//Cheat.Print(realyaw + "\n");
}





Cheat.RegisterCallback("Draw", "drawString")


