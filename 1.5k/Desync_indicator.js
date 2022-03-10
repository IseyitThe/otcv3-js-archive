var screen_size = Render.GetScreenSize();
var fakeParameters = {};
var realParameters = {};
var circleParameters = {};
UI.AddLabel("O===================O")
UI.AddLabel("       R E A L S E N P A I#3854")
UI.AddLabel("O===================O")
UI.AddColorPicker("fake colour");
UI.AddColorPicker("real colour");
UI.AddColorPicker("circle colour");
UI.AddCheckbox("LSD MODE")



function menuSetup()
{
	fakeParameters.color = UI.GetColor("Script Items", "fake colour");
	realParameters.color = UI.GetColor("Script Items", "real colour");
	circleParameters.color = UI.GetColor("Script Items", "circle colour");
	
}

function HSVtoRGB(h, s, v) { // i dont know who this belongs to but whoever it is i credit you :D
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


function drawFake() 
{
    	fake = Local.GetFakeYaw();
    	origin = (-180+(Local.GetViewAngles()[1]));
        deg = (origin - fake);
        x = screen_size[0]/2 + 32 * Math.cos((deg * Math.PI / 180)+Math.PI/2);
    	y = screen_size[1]/2 + 32 * Math.sin((deg * Math.PI / 180)+Math.PI/2);
        Render.FilledCircle(x,y,4, fakeParameters.color );
    }

function drawReal() 
{
    	real = Local.GetRealYaw();
    	origin = (-180+(Local.GetViewAngles()[1]));
        deg = origin - real;[1];
        x = screen_size[0]/2 + 32 * Math.cos((deg * Math.PI / 180)+Math.PI/2);
    	y = screen_size[1]/2 + 32 * Math.sin((deg * Math.PI / 180)+Math.PI/2);
        Render.FilledCircle(x,y,4, realParameters.color );
    }

function drawCircle()
{
	if (UI.GetValue("Misc", "JAVASCRIPT", "LSD MODE")) {
	var rgb = HSVtoRGB(Global.Tickcount() % 50 / 50,1,1);
   	Render.Circle( screen_size[0] /2, screen_size[1] /2, 30, [rgb.r,rgb.g,rgb.b,150] );
   	Render.Circle( screen_size[0] /2, screen_size[1] /2, 31, [rgb.r,rgb.g,rgb.b,150] );
 	Render.Circle( screen_size[0] /2, screen_size[1] /2, 32, [rgb.r,rgb.g,rgb.b,150] );
 	Render.Circle( screen_size[0] /2, screen_size[1] /2, 33, [rgb.r,rgb.g,rgb.b,150] );
   	Render.Circle( screen_size[0] /2, screen_size[1] /2, 34, [rgb.r,rgb.g,rgb.b,150] );
	}
   else
   {
   	Render.Circle( screen_size[0] /2, screen_size[1] /2, 30, circleParameters.color );
   	Render.Circle( screen_size[0] /2, screen_size[1] /2, 31, circleParameters.color );
   	Render.Circle( screen_size[0] /2, screen_size[1] /2, 32, circleParameters.color );
   	Render.Circle( screen_size[0] /2, screen_size[1] /2, 33, circleParameters.color );
   	Render.Circle( screen_size[0] /2, screen_size[1] /2, 34, circleParameters.color );
   }

}

//if(Entity.IsAlive(Entity.GetLocalPlayer()))
	//return;
	Cheat.RegisterCallback("Draw","drawCircle")
	Cheat.RegisterCallback("Draw","menuSetup")
	Cheat.RegisterCallback("Draw","drawFake")
	Cheat.RegisterCallback("Draw","drawReal")



