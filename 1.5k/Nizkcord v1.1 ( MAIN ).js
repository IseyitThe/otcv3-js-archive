//////////////////////////////////////////////////////////////////////////////////////
//
//                     ..
//      NN       NN    NN    NNNNNNNNNNNNNNNN   NN 		NN
//		NNNN     NN    NN    NNNNNNNNNNNNNNNN   NN	   NN
//		NN NNN	 NN    NN                 NNN   NN	  NN
//		NN	 NNN NN    NN 				 NNN    NN   NN
//		NN	  NNNNN    NN 			   NNN      NN  NN
//		NN		NNN    NN  			 NNN        NN NN
//		NN		 NN    NN 			NNN		    NNNNNN
//		NN       NN    NN 		  NNN		    NN  NN
//		NN       NN    NN 		NNN			    NN   NN
//		NN       NN    NN    IIIIIIIIIIIIIIII   NN    NN
//		NN       NN    NN    IIIIIIIIIIIIIIII   NN     NN





//																			
//                           Pasted by Nizk#6261									//
//                 Alot of visuals js are from april#0001							//
//  Custom AA, that are FactorsAA, credit goes to Anth0ny UDT#0490 and PopsSu#7915  //
//          THIS IS A FREE JS, IF YOU BOUGHT THIS YOU GOT SCAMMED =)))))))))))))	//
//               Help me improve the whole js :) Thank you!							//
//    If you want to paste this JS just go ahead. Don't forget to mention me!       // 
//																					//  
//////////////////////////////////////////////////////////////////////////////////////


UI.AddLabel('    Nizkcord v1.1 | Public Version 	'); // dont worry, the other ver is just for beta tester, they will check errors for me
UI.AddLabel('CFG for this JS: dsc.gg/cheaterbase');	 // https://dsc.gg/cheaterbase ( just another short link of discord invite )

	    UI.AddSliderInt(" ", 0, 0); // better looking


	UI.AddLabel('                  	  Visuals');
	
	UI.AddLabel('_________________________________________'); // this will be used much


UI.AddLabel('             Healthshot effect  ');
	UI.AddLabel('	');
/**
 *
 * Title: Healthshot effect on kill // I choose to keep all credits and creators msg
 * Author: april#0001 // hes a real pro lul
 * Description: Plugin that apparently every cheat needs!
 *
*/

//region main

// Our rendering data
var alpha = 0;
var size = 0;

UI.AddColorPicker("Color of Indicator");
   var color1 = UI.GetColor("MISC", "JAVASCRIPT", "Script Items", "color");
    var color1 = UI.GetColor("MISC", "JAVASCRIPT", "Script Items", "Make Aplha2");
//endregion

//region menu

// Creates our time slider
const time = UI.AddSliderFloat("Effect duration", 0, 300);
const sizeget = UI.AddSliderFloat("size get", 0, 2);
//endregion

//region functions

/**
 * Clamps a value between two other numbers
 *
 * @param v
 * @param min
 * @param max
 * @returns {number}
 */
function clamp(v, min, max)
{
    return Math.max(Math.min(v, max), min);
}

/**
 * Returns the value of a script menu element
 *
 * @param element
 * @returns {*}
 */
function get(element)
{
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", element);
}

/**
 * Renders the effect
 */
function render_effect()
{
    if (alpha === 0)
        return;

    const inc_alpha = ((1 / get("Effect duration")) * Global.Frametime()) * 255
    const inc_size = ((1 / get("size get")) * Global.Frametime()) * 360

    alpha = clamp(alpha - inc_alpha, 0, 255);
    size = clamp(size - inc_size, 0, 360);

    const x = Global.GetScreenSize()[0], y = Global.GetScreenSize()[1];

    Render.GradientRect(0, 0, x, size, 0, [128, 195, 255, alpha], [128, 195, 255, 0]);
    Render.GradientRect(0, y - size, x, size, 0, [128, 195, 255, 0], [128, 195, 255, alpha]);
    Render.GradientRect(x - size, 0, size, y, 1, [128, 195, 255, 0], [128, 195, 255, alpha]);
    Render.GradientRect(0, 0, size, y, 1, [128, 195, 255, alpha], [128, 195, 255, 0]);
}

/**
 * Updates rendering data
 */
function on_death()
{
    const attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    const userid = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    const player = Entity.GetLocalPlayer();

    if (attacker === player && userid != player)
    {
        alpha = 255;
        size = 360;
    }
}

//endregion

//region callbacks

// Callbacks our functions
Global.RegisterCallback("player_hurt", "on_death");
Global.RegisterCallback("Draw", "render_effect");

//endregion

// END OF HEALTHSHOT EFFECT




UI.AddLabel('_________________________________________');
UI.AddLabel('             1-way indicator  ');
	UI.AddLabel('	');

function get_metric_distance(a, b)
{
    return Math.floor(Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2)) * 0.0254 );
}
var local = Entity.GetLocalPlayer();
var mirage = [
    //[ "Balcony", "Stand ", 15, [-1170.448974609375,-2351.35009765625,-112.76617431640625], [-6.143388271331787,14.879289627075195,0 ], "Oneway" ],
    [ "Palace Entrance", "Fake duck + E", 15, [-32.827205657958984,-1747.707763671875,-116.18266296386719], [-13.562880516052246,-80.47711944580078,0 ], "Oneway"  ],
    [ "Palace Entrace", "Crouch + E", 25, [146.87937927246094,-2078.0126953125,9.615781784057617], [-0.2739872932434082,-108.96994018554688,0 ], "Oneway"  ],
    [ "Sniper's Nest", "Crouch + E (manual)", 40, [-886.25830078125,-1317.399658203125,-120.41223907470703], [-0.3445321321487427,-177.3930206298828,0 ], "Oneway"  ],
    [ "Cat Box", "Stand ", 10, [-691.8399658203125,-885.2897338867188,-182.1551055908203], [-1.4627931118011475,102.77088165283203,0 ], "Oneway"  ],
    [ "Connector", "Stand ", 1, [-758.4989013671875,-1321.30224609375,-108.56095123291016], [10.404932975769043,82.45069122314453,0 ], "Oneway"  ],
    [ "Cat", "Fake duck ", 10, [-1495.3671875,-1112.000732421875,-183.45028686523438], [-2.77838134765625,38.17058563232422,0 ], "Oneway"  ],
    [ "Apartments", "Fake duck ", 0, [-2336.7314453125,766.5013427734375,-79.1664810180664], [-5.943861484527588,-2.0283021926879883,0 ], "Oneway"  ],
    [ "Cat", "Fake duck ", 0, [-394.3824768066406,-796.3460693359375,-216.0263214111328], [-5.173882484436035,122.90838623046875,0 ], "Oneway"  ],
    [ "T Stairs", "Stand ", 25, [275.092529296875,316.94354248046875,-201.4618377685547], [0.7233693599700928,11.497645378112793,0 ], "Oneway"  ],
    [ "Top Mid", "Stand ", 35, [219.89126586914063,877.2789306640625,-76.8647232055664], [2.8979110717773438,-90.38306427001953,0 ], "Oneway"  ],
    [ "House Stairs / Top Mid Connector", "Fake duck ", 32, [454.9155578613281,852.4118041992188,-53.246543884277344], [16.369403839111328,-44.87099838256836,0 ], "Oneway"  ],
    [ "Underpass Stairs", "Fake duck ", 10, [-1264.1064453125,218.20901489257813,-120.45449829101563], [12.757319450378418,27.84868621826172,0 ], "Oneway"  ],
    [ "Underpass Stairs", "Stand ", 15, [-1124.922119140625,310.01190185546875,-100.71343994140625], [29.21480369567871,42.90019226074219,0 ], "Wallbang" ],
    [ "Market Entrace", "Fake duck ", 0, [-1705.237548828125,-1220.2938232421875,-207.29591369628906], [-7.482339859008789,79.5807113647461,0 ], "Oneway"],
    [ "Apartment Entrance", "Stand ", 12, [-374.2903137207031,779.552978515625,-20.803316116333008], [1.6386109590530396,-161.68849182128906,0 ], "Oneway" ],
    [ "Underpass Stairs", "Crouch ", 12, [-1101.185791015625,522.3583984375,-38.548126220703125], [80.03816223144531,-51.8855094909668,0 ], "Oneway" ],
    [ "Right Side Connector", "Stand ", 10, [-842.7730102539063,32.43463134765625,-108.64161682128906], [1.2841607332229614,-85.02303314208984,0 ], "Oneway" ],
    [ "Palace Entrance", "Fake duck ", 0, [-811.739013671875,-1145.87060546875,-72.66464233398438], [-2.2234721183776855,-50.907833099365234,0 ], "Oneway" ],
    [ "CT Stairs", "Stand ", 20, [-1495.1767578125,-1588.8564453125,-201.6099395751953], [-0.707923412322998,-79.56673431396484,0 ], "Oneway" ],
    [ "CT Spawn", "Stand ", 1, [-1722.5516357421875,-680.75244140625,-108.86699676513672], [3.074936866760254,-86.70063781738281,0 ], "Wallbang" ],
    [ "Market Entrace", "Stand (AWP)", 10, [-2231.71142578125,32.56330490112305,-108.5659408569336], [-0.22803455591201782,-47.783348083496094,0 ], "Wallbang" ],
    [ "A Ramp", "Fake duck ", 0, [-291.80877685546875,-2112.17333984375,-53.190345764160156], [7.508554935455322,48.7481803894043,0 ], "Oneway" ],
    [ "Palace/A Ramp Connector", "Fake duck + E", 0, [1127.9307861328125,228.2334747314453,-185.51644897460938], [-1.6344425678253174,-89.02660369873047,0 ], "ESP Oneway" ],
    [ "Apartments + House", "Fake duck + E", 0, [-477.98028564453125,492.88311767578125,-99.00080871582031], [-0.6445350646972656,89.8587417602539,0 ], "Oneway" ],
    [ "Ramp", "Crouch ", 0, [780.37841796875,-1550.7978515625,-60.35479736328125], [18.644933700561523,-176.00025939941406,0 ], "Oneway" ],
    [ "House exit", "Stand", 0, [-859.4331665039063,614.7947387695313,-14.041431427001953], [2.2666337490081787,7.958107948303223,0 ], "Oneway" ],
    [ "Apartment entrance", "Stand (AWP)", 0, [-1843.001220703125,488.68048095703125,-101.81539916992188], [-2.849693775177002,3.4349939823150635,0 ], "Oneway" ],
    [ "B Van", "Fake duck ", 0, [-2259.607421875,677.5836791992188,7.429899215698242], [5.68641996383667,-71.17919158935547,0 ], "Oneway" ],
    [ "Palace", "Stand (manual shoot/ESP) ", 0, [-1506.1005859375,-990.6868896484375,-149.39236450195313], [-3.874444007873535,-38.0708122253418,0 ], "Wallbang" ],
    [ "Top Mid", "Stand", 0, [-266.930573,-366.495056,-103.172424], [1.882086,19.124743,0 ], "Oneway" ],
    [ "Balcony", "Stand ", 1, [462.96588134765625,-2084.01904296875,18.9892520904541], [1.6673067808151245,177.59693908691406,0 ], "Wallbang" ]
];
 
var dust2 = [
    [ "T Spawn", "Fake duck ", 0, [-1828.306884765625,-455.19976806640625,141.17587280273438], [-2.199988603591919,-17.8001766204834,0 ], "Oneway" ],
    [ "Tunnels", "Fake duck + E", 0, [-2071.30908203125,2895.8076171875,82.59713745117188], [0.7149654626846313,-83.99018859863281,0 ], "Oneway" ],
    [ "Tunnels Exit", "Crouch ", 0, [-776.18408203125,2555.6904296875,-25.649532318115234], [-4.512523174285889,-147.3076629638672,0 ], "Wallbang" ],
    [ "Mid/Cat", "Fake duck ", 0, [-210.51968383789063,542.5650634765625,47.2431755065918], [5.387450218200684,100.62740325927734,0 ], "Oneway" ],
    [ "Long Doors / Blue", "Fake duck ", 25, [1299.95654296875,620.3975219726563,-3.8381288051605225], [1.5557122230529785,150.635986328125,0 ], "Oneway" ],
    [ "A Site / Long", "Fake duck ", 0, [1528.8955078125,505.183837890625,-49.267723083496094], [-3.854454517364502,99.73228454589844,0 ], "Oneway" ],
    [ "A Site", "Fake duck (Long Plant)", 0, [1570.482421875,461.5287170410156,-63.220176696777344], [-5.327244758605957,99.6102294921875,0 ], "Oneway" ],
    [ "B Doors", "Crouch ", 0, [16.597061157226563,2311.9716796875,17.10267448425293], [-0.5667411088943481,-177.3401641845703,0 ], "Wallbang" ],
    [ "Long Cross / Ramp", "Fake duck ", 0, [493.2771911621094,2613.61572265625,143.1537322998047], [5.055543422698975,-37.76759338378906,0 ], "Oneway" ],
    [ "Long Doors", "Stand ", 1, [1372.70068359375,1358.381103515625,50.24076843261719], [-0.30388620495796204,-139.5752716064453,0 ], "Wallbang" ],
    [ "Long Doors Box", "Stand ", 1, [530.4532470703125,826.2880249023438,62.459720611572266], [0.7473396062850952,-50.05582046508789,0 ], "Wallbang" ],
    [ "Outside Long House", "Stand ", 10, [554.1951293945313,353.6593017578125,69.35932159423828], [2.23449444770813,-145.07130432128906,0 ], "Oneway" ],
    [ "Top Mid", "Stand ", 10, [654.1134033203125,297.8545227050781,59.560081481933594], [0.6505045294761658,-179.7573699951172,0 ], "Oneway" ],
    [ "Lower Tunnels", "Stand ", 35, [-216.03515625,1160.060791015625,89.53584289550781], [11.780013084411621,153.25389099121094,0 ], "Wallbang" ],
    [ "Cat", "Stand ", 10, [-874.2039794921875,1464.575927734375,-53.34953308105469], [-10.956621170043945,-24.002500534057617,0 ], "Oneway" ]
];
 
var maps = {
    "de_mirage": mirage,
    "de_dust2": dust2
};
 
UI.AddCheckbox("Enable WB/1W Helper");
UI.AddDropdown("Themes", ["Default", "Custom"]);
UI.AddColorPicker("Circle");
UI.AddColorPicker("Location");
UI.AddColorPicker("Extra");
UI.AddColorPicker("Distance");
UI.AddColorPicker("Line");
UI.AddColorPicker("Type");
UI.AddSliderInt("Line Length", 0,300);
UI.AddSliderInt("Render Dist.", 0,100);
 
function showPositions() {
      master =  UI.GetValue("Script items", "Enable WB/1W Helper");
      theme = UI.GetString("Script items", "Themes") == "Default";
      UI.SetEnabled ("Render Dist.",master);
      UI.SetEnabled ("Themes", master);
      UI.SetEnabled ("Circle",master && !theme);
      UI.SetEnabled ("Location",master && !theme);
      UI.SetEnabled ("Extra",master && !theme);
      UI.SetEnabled ("Distance",master && !theme);
      UI.SetEnabled ("Line", master && !theme);
      UI.SetEnabled ("Type",master && !theme);
      UI.SetEnabled ("Line Length", master);
 
      if(UI.GetString("Script items", "Themes") == "Default") {
          UI.SetColor("Script items", "Circle", [251, 2, 2, 240]);
          UI.SetColor("Script items", "Location", [249, 247, 247, 240]);
          UI.SetColor("Script items", "Extra", [249, 247, 247, 240]);
          UI.SetColor("Script items", "Distance", [249, 247, 247, 240]);
          UI.SetColor("Script items", "Line", [249, 247, 247, 240]);
          UI.SetColor("Script items", "Type", [0, 240, 85, 251]);
      }
 
    if(!Entity.IsAlive(local) || World.GetMapName() == "" || !UI.GetValue("Script items", "Enable WB/1W Helper"))
        return;
 
    color_circle = UI.GetColor("Script items","Circle");
    color_type = UI.GetColor("Script items", "Type")
    color_loc = UI.GetColor("Script items","Location");
    color_extra = UI.GetColor("Script items","Extra");
    color_distance = UI.GetColor("Script items","Distance");
    color_line = UI.GetColor("Script items", "Line");
    render_dist = UI.GetValue("Script items", "Render Dist.");
    render_line = UI.GetValue("Script items", "Line Length");
   
    map = World.GetMapName();
    oneways = maps[map];
 
    localPos = Entity.GetHitboxPosition(local, 5);
   
    for(oneway in oneways) {
        distance = get_metric_distance(localPos, oneways[oneway][3]);
 
        if(distance > render_dist)
            continue;
 
        world = Render.WorldToScreen(oneways[oneway][3]);
 
        Render.Circle(world[0], world[1], 5, color_circle);
        Render.String(world[0]+10, world[1]-24,0, oneways[oneway][5], color_type);
        Render.String(world[0]+10, world[1]-12,0, oneways[oneway][0], color_loc);
        Render.String(world[0]+10, world[1] ,0, oneways[oneway][1], color_extra);
        Render.String(world[0]+10, world[1]+12,0, Math.floor(distance)+"m", color_distance);
 
        eye_vec = getVec(oneways[oneway][4][0], oneways[oneway][4][1]);
 
        end = [oneways[oneway][3][0] + eye_vec[0] * render_line, oneways[oneway][3][1] + eye_vec[1] * render_line, oneways[oneway][3][2] + eye_vec[2] * render_line];
 
        world_end = Render.WorldToScreen(end);
 
        Render.Line(world[0], world[1], world_end[0], world_end[1], color_line);
    }
}
 
function getVec(pitch, yaw)
{
    var p = deg2Rad(pitch);
    var y = deg2Rad(yaw)
    var sin_p = Math.sin(p);
    var cos_p = Math.cos(p);
    var sin_y = Math.sin(y);
    var cos_y = Math.cos(y);
    return [cos_p * cos_y, cos_p * sin_y, -sin_p];
}
 
function deg2Rad(angle)
{
    return angle * Math.PI / 180;
}
 
Cheat.RegisterCallback("Draw", "showPositions");




// END OF !WAY Indicator






UI.AddLabel('_________________________________________');
UI.AddLabel('             Better glow-chams  ');
	UI.AddLabel('	');
	
	var materials = []
function createMat(name){
    UI.AddColorPicker(name + " chams")
    UI.AddCheckbox("Hollow " + name.toLowerCase() + " chams")
    UI.AddCheckbox("Pulse " + name.toLowerCase() + " chams")
    UI.AddCheckbox("Rainbow " + name.toLowerCase() + " chams")
    UI.AddCheckbox("Wireframe " + name.toLowerCase() + " chams")
    UI.AddCheckbox("Less vibrant " + name.toLowerCase() + " chams")
    Material.Create(name + " chams")
    materials.push([name,
         name + " chams",
         "Hollow " + name.toLowerCase() + " chams",
         "Pulse " + name.toLowerCase() + " chams",
         "Rainbow " + name.toLowerCase() + " chams",
         "Wireframe " + name.toLowerCase() + " chams",
         "Less vibrant " + name.toLowerCase() + " chams"]);
}
function HSVtoRGB(h,s,v){
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
    return [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255),
        255
    ]
}
function materialUpdate(){    
    for(i in materials){
        var mat = materials[i]
        var mat_index = Material.Get(mat[0] + " chams")
        if ( mat_index > 0 )
        {
            
            Material.SetKeyValue(mat_index, "$baseTexture", "vgui/white")
            var additive = UI.GetValue("Script items", "Hollow " + mat[0] .toLowerCase() + " chams")
            Material.SetKeyValue(mat_index, "$additive", additive ? "1" : "0")
            Material.SetKeyValue(mat_index, "$envmap", "models/effects/cube_white")
            Material.SetKeyValue(mat_index, "$envmapfresnel", "1")
            
            var uicol = UI.GetColor("Script items", mat[0]  + " chams")
            var pulse = UI.GetValue("Script items", mat[3])
            var rainbow = UI.GetValue("Script items", mat[4])
            if(rainbow){
                uicol = HSVtoRGB(Globals.Realtime() / 5 % 1, 1, 1)
                uicol[0] /= 10
                uicol[1] /= 10
                uicol[2] /= 10
            }
            if(pulse){
                var speed = 7
                var additive = 5
                var intensity = 0.6
                var sine = (Math.sin(Globals.Realtime() * 7) + 5) * intensity
                uicol[0] *= sine
                uicol[1] *= sine
                uicol[2] *= sine
            }
            var wireframe = UI.GetValue("Script items", mat[5])
            Material.SetKeyValue(mat_index, "$wireframe", wireframe ? "1" : "0")
            var aaa = UI.GetValue("Script items", mat[6])
            Material.SetKeyValue(mat_index, "$envmapfresnelminmaxexp", aaa ? "[0 2 4]" : "[0 1 2]")
            Material.SetKeyValue(mat_index, "$envmaptint", "[" + uicol[0]/255 + " " + uicol[1]/255 + " " + uicol[2]/255 + "]")
            Material.SetKeyValue(mat_index, "$alpha", uicol[3] / 255 + "")
            Material.Refresh(mat_index)        
        }
    }
}
createMat("Better glow")
Cheat.RegisterCallback("Material", "materialUpdate")
function onUnload()
{
    for(i in materials)
    {
        Material.Destroy(materials[i][1])
    }
}
Cheat.RegisterCallback("Unload", "onUnload")

// END OF BETTER GLOW CHAMS





	

// END OF SAFETY 

	    UI.AddSliderInt(" ", 0, 0);
UI.AddLabel('              Improved DT  ');
	UI.AddLabel('	');
	
	UI.AddSliderInt("Double tap tolerance", 0, 3);

function can_shift_shot(ticks_to_shift) {
    var me = Entity.GetLocalPlayer();
    var wpn = Entity.GetWeapon(me);

    if (me == null || wpn == null)
        return false;

    var tickbase = Entity.GetProp(me, "CCSPlayer", "m_nTickBase");
    var curtime = Globals.TickInterval() * (tickbase-ticks_to_shift)

    if (curtime < Entity.GetProp(me, "CCSPlayer", "m_flNextAttack"))
        return false;

    if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
        return false;

    return true;
}

function _TBC_CREATE_MOVE() {
    var is_charged = Exploit.GetCharge()
    var reserve = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Double tap tolerance")

    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()

    if (can_shift_shot(14) && is_charged != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    }

    Exploit.OverrideTolerance(reserve);
    Exploit.OverrideShift(14-reserve);
}

function _TBC_UNLOAD() {
    Exploit.EnableRecharge();
}

Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");

// END OF 1TICK

UI.AddCheckbox("Doubletap Teleport");
UI.SetValue("Rage", "GENERAL", "Exploits", "Teleport release", true);
function on_ragebot_fire()
{
    ragebot_target_exploit = Event.GetInt("exploit");
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Doubletap Teleport"))
    {
        (ragebot_target_exploit == 2) ? UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Doubletap") : UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Doubletap");
    }   
}
Global.RegisterCallback("ragebot_fire", "on_ragebot_fire");

// END OF DT TELEPORT

var last = 0
var shot = false
UI.AddCheckbox("Fast DT Recharge")

function lastShot(){
    if(Entity.GetLocalPlayer() == Entity.GetEntityFromUserID(Event.GetInt("userid")) && UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
       
        last = Globals.Tickcount()
        shot = true
    }
}
var wasActive = true
var wasfding = false
var lastfding = 0
function cm(){
    if(!UI.GetValue("Script Items", "Fast DT Recharge") || (UI.IsHotkeyActive("Rage","GENERAL","Exploits","Hide shots") && !UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap"))){
        Exploit.EnableRecharge()
        return
    }
    Exploit.DisableRecharge()
    if(!UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap"))
    wasActive = false
    if(!wasActive && UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
        Exploit.Recharge()
        wasActive = true
    }
    if(UI.IsHotkeyActive("Anti-Aim","Extra","Fake duck")){
        wasfding = true
        lastfding = Globals.Tickcount()
    }
    if(!UI.IsHotkeyActive("Anti-Aim","Extra","Fake duck") && wasfding && Globals.Tickcount() - 2 > lastfding){
        Exploit.Recharge()
        wasfding = false
    }
   
    if(last + 4 < Globals.Tickcount() && shot){
        Exploit.Recharge()
        shot = false
    }
}
function roundStart(){
    if(!UI.GetValue("Script Items", "Fast DT Recharge") || (UI.IsHotkeyActive("Rage","GENERAL","Exploits","Hide shots") && !UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap"))) return
    if(Exploit.GetCharge() != 0){
        Exploit.Recharge()
        last = Globals.Tickcount()
    }
}
Cheat.RegisterCallback("weapon_fire","lastShot")
Cheat.RegisterCallback("CreateMove","cm")
Cheat.RegisterCallback("round_start","roundStart")
Cheat.RegisterCallback("round_prestart","roundStart")
Cheat.RegisterCallback("round_end","roundStart")
    
// END OF DT RECHARGE



   	

UI.AddLabel('_________________________________________');


var iExploitID = 0;
var bDoubleTapped = false;
var bShouldRecharge = false;
var ForceCharge = false;
var iLastShotTime = 0;

UI.AddCheckbox("DT Abuse");
UI.AddDropdown("DT Mode", ["Agressive", "Passive"]);
UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 1 );

function on_ragebot_fire()
{
    ragebot_target_exploit = Event.GetInt("exploit");
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tripletap"))
    {
        if (ragebot_target_exploit == 2)
        {
            UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", true);
        }
        else
        {
            UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap fast recovery", false);
        }
    }
}

function event_rbot_fire( ) {
    iExploitID = Event.GetInt( "exploit" );
    if ( !UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Tripletap" ) )
        return;

    if ( iExploitID == 2 ) {
        iLastShotTime = Global.Tickcount( );
        bDoubleTapped = true;
        UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 0 );
        bShouldRecharge = true;
    }

    ForceCharge = bShouldRecharge ? true : false;

    if ( ForceCharge && Global.Tickcount( ) >= ( Global.TickInterval( ) * 10 + iLastShotTime ) )
        UI.SetValue( "Rage", "GENERAL", "Exploits", "Doubletap", 1 );
}

function modecheck()
{
  if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tripletap Mode") == 0) { on_ragebot_fire(); }
  if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tripletap Mode") == 1) { event_rbot_fire(); }
}

Global.RegisterCallback("ragebot_fire", "modecheck");

// END OF TRIPLETAP

// END OF DOUBLETAP


	    UI.AddSliderInt(" ", 0, 0);
 
UI.AddLabel('                 Anti-Aim  ');
	
	UI.AddCheckbox("Low delta");
UI.AddDropdown( "Low delta type", [ "Custom", "On key" ] );
const lowdelta_modes = UI.AddMultiDropdown("Low delta modes", [ "Slow walk", "Low HP", "Standing" ]);
UI.AddHotkey("Low delta on key");

function SetEnabled()
{
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta type", 1)
    }
    else
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta type", 0)
    }

    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 0 && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta modes", 1)
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta on key", 0)
    }
    else if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 1 && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta modes", 0)
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta on key", 1)
    }
    else
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta modes", 0)
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta on key", 0)
    }
}

function get_velocity(index)
{
    var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

function get_health(index)
{
    health_override = Entity.GetProp(index, "CBasePlayer", "m_iHealth");
    return health_override;
}

function Low_delta()
{
	localplayer_index = Entity.GetLocalPlayer( );
	const lowdelta_dropdown_value = UI.GetValue.apply(null, lowdelta_modes);
	
	var velocity = get_velocity(localplayer_index)
    var health = get_health(localplayer_index)
	var LowHP = false
    var SlowWalk = false
	var Standing = false
	var Onkey = false

	if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 0)
	{
	   if (lowdelta_dropdown_value & (1 << 0) && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk"))
       SlowWalk = true
       else
       SlowWalk = false

       if (lowdelta_dropdown_value & (1 << 1) && health < 50)
       LowHP = true
       else
       LowHP = false

       if (lowdelta_dropdown_value & (1 << 2) && velocity < 3)
       Standing = true
       else
       Standing = false
	}
    else if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 1)
	{
	   if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Low delta on key"))
       Onkey = true
       else
       Onkey = false
	}
   
        if (Standing == true || LowHP == true || SlowWalk == true || Onkey == true && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
        {
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 10);
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(-20);
		}
        else
		{
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
            AntiAim.SetOverride(0);
		}
}

function drawString()
{
    const fontpixel = Render.AddFont( "Verdana", 8, 100);
    const lowdelta_dropdown_value = UI.GetValue.apply(null, lowdelta_modes);
    var SFOnkey = false
    var screen_size = Global.GetScreenSize();

    localplayer_index = Entity.GetLocalPlayer( );
    localplayer_alive = Entity.IsAlive( localplayer_index );

    var velocity = get_velocity(localplayer_index)
    var health = get_health(localplayer_index)

    SlowWalk = false
    LowHP = false
    Standing = false
    Onkey = false

    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 0)
	{
	   if (lowdelta_dropdown_value & (1 << 0) && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk"))
       SlowWalk = true
       else
       SlowWalk = false

       if (lowdelta_dropdown_value & (1 << 1) && health < 50)
       LowHP = true
       else
       LowHP = false

       if (lowdelta_dropdown_value & (1 << 2) && velocity < 3)
       Standing = true
       else
       Standing = false
	}
    else if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 1)
	{
	   if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Low delta on key"))
       Onkey = true
       else
       Onkey = false
    }
    
    if (Standing == true || LowHP == true || SlowWalk == true || Onkey == true)
    {
        drawIND = true
    }
    else
    {
        drawIND = false
    }
    
    if (drawIND == true && localplayer_alive == true && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") == true)
	{
	   Render.StringCustom(screen_size[0] /2 , screen_size[1] /2 +25, 1, "", [ 255, 0, 0, 255 ], fontpixel );
    }
}

Global.RegisterCallback("Draw", "drawString");
Global.RegisterCallback("Draw", "SetEnabled");
Cheat.RegisterCallback("CreateMove", "Low_delta");

// END OF LOWDELTA

var _0x45ba=['hackermanburrito','spookyboy','Bite','StringCustom','iShyne','and23ytb','Top\x20Right\x20Corner','yungflip420','Offset\x20Break','Switch\x20Yaw\x20#2','Easty','________________________________________','Snaker','legendbr','RegisterCallback','ciastekbatak1','kylar07','barra195','milletporridge','MemeCmm','Umiranhaa','Range','Pianoman144','FinalStep','ValentineInDecember','RotatesOnPC','RamenChicken103','Advanced\x20Jitter','awper','Draw','Script\x20items','eloot2','builder1909','Presets','Exploits','SuchJitter','Fake\x20Jitter\x20Range','Daddyeli19','Anti-Aim','SetRealOffset','GlockEater','pedrou1512','COMETZ','AddDropdown','vexy','Exploit\x20AA','lee0181','thehash','Death2002','','bambousensei','Curtime','Stoast','Fake\x20Jitter\x20Step','onUnload','antiaimloop','Switch\x20Yaw\x20#3','             Custom Anti-Aim','always321312312','Vas','RektElek2000','falcon77','hawiz','Rey228','ganaseki','Masterplayzzz','Inverter','hippos','FIFI12','Anti-Bruteforce\x20(Not\x20Done)','ytgelatin','RADAK','zoomies','wthz5240','melonbear','arris','getaptd','factor','kenkaneki','floor','gadorexxking','Blank','SetLBYOffset','fuuuuuuuuuuuuuuuuuuuuu','split','Reazon8808','Switch\x20Delay','evostealth','doohsyanskiy','AddFont','SetOverride','byronjones20','random','ishyne','LcsMM','eugek3','NightWatch','Bottom\x20Left\x20Corner','mylesbem','hydratioN','n0tfakegamer','Sneaky','Hide\x20shots','Rage\x20Anti-Aim','Seizure\x20Watermark ( PopsSense )','AddHotkey','jebthepleb','3|0|4|5|6|2|1','1904754227','Sweg','MylesBEM','Segoe\x20UI\x20Semibold','Ciastekbatak1','user','AtomV1','SynzYT','Custom\x20Manual\x20Right','ramoulplayz','4|20|7|3|5|1|0|14|6|12|21|16|8|2|17|9|13|15|19|10|18|11','snnick','SetValue','Watermark\x20Position','AddSliderInt','bite','LEE0181','YTGelatin',' ','Stroast','User\x20is\x20not\x20authorized!','Custom\x20Manual\x20Left','kyszubi','User3860','Spike\x27s','Fake\x20angles','steeog','krajewski12','SyncBetter','MelonBear','PrintChat','ExcellentGoat','payslip','Androidy','dryness','yeawillb','JAVASCRIPT','AddLabel','NeoPrime','kyalr07','shearablesheep2','thembsgamer','GetScreenSize','ReformedNeptuno','med5','Nizkcord, by Nizk#6261. Discord server: dsc.gg/cheaterbase','TotalxsjTriginitillion','mtvvq','RezsoGaming','Dudley','Sway','DXgamerwar890','bjlls0j','joyfilled','Welcome, ','GetValue','Reset\x20Yaw\x20Value','fraxster','Jordan2005','kinglv','RicoCR','emzi','guarts','Limit\x20Amount','Bottom\x20Right\x20Corner','Top\x20Left\x20Corner','MRINAAL','Jyeisaguy','ceil','wcm1289','elecsmith','aus1','SNNICK','Barra195','ScaryClowns41','Kroshiou','Custom','callmeKova','cheesy','Switch\x20Yaw\x20#1','silas','','AddCheckbox','JustHowl','mintylicious','8|7|1|4|0|5|2|6|9|3','Sway\x20Range','ivanosegaming','RaymonRS','itshinch','ImNotThatGay','lilgangbank','leicesterpower','Sway\x20Speed','belugasvigianus','Darknees','Custom\x20Manual\x20AA','baselfi2','Rage','GetUsername','Reset\x20Yaw','yufaan8','crackson','Sway\x20Limit','IsHotkeyActive','carmonafacundo10','xvasu','Fake\x20Jitter','idontknowho','Hotch1p','BOTRalph','cooperdooped','Safeiboi','TheShy112','GENERAL','opx','Groowil','Jitter\x20offset','SetFakeOffset','VexatiousCheff','Yaw\x20offset','Fake\x20Jitter\x20Speed','DankBlankTank','CreateMove','radak','haocaomao','birb18wq','Switch\x20AA','raidnezer','meghr','eckogod3','hypenn','Mrinaal','ApexYRTS','Sensitivity','CometZ'];(function(_0x56c757,_0x45bad1){var _0x5e5494=function(_0x396f19){while(--_0x396f19){_0x56c757['push'](_0x56c757['shift']());}};_0x5e5494(++_0x45bad1);}(_0x45ba,0x1d0));var _0x5e54=function(_0x56c757,_0x45bad1){_0x56c757=_0x56c757-0x0;var _0x5e5494=_0x45ba[_0x56c757];return _0x5e5494;};var scriptitems=[('Misc',_0x5e54('0xa8'),_0x5e54('0x36'))],timer=![],down=![],man_timer=![];lll=![],a=0x0;var czz=0x0,slide=![],fakeoff=0x1,slideFactor=0x0;man_init=![],yawFactor=0x0,rgb_r=0x0,rgb_g=0x64,rgb_b=0xff,current_preset=0x0;var sw_timer=![],sw_cur=0x1;exploit_on=![];var lastTime=0x0;UI[_0x5e54('0xa9')](_0x5e54('0x96')),UI[_0x5e54('0xa9')](_0x5e54('0x23')),UI[_0x5e54('0xa9')](_0x5e54('0x51')),UI[_0x5e54('0x43')]('Presets',[_0x5e54('0xd0'),_0x5e54('0x45'),_0x5e54('0x9c'),_0x5e54('0x69')]),UI[_0x5e54('0xd6')](_0x5e54('0x33')),UI['AddSliderInt'](_0x5e54('0x2d'),-0xb4,0xb4),UI[_0x5e54('0xd6')](_0x5e54('0x20')),UI[_0x5e54('0xd6')](_0x5e54('0x5d')),UI[_0x5e54('0xd6')]('Sway'),UI[_0x5e54('0xd6')](_0x5e54('0xeb')),UI['AddSliderInt'](_0x5e54('0xc3'),0x0,0x3c),UI['AddSliderInt'](_0x5e54('0xda'),0x0,0x168),UI['AddSliderInt'](_0x5e54('0xe1'),0x1,0x32),UI[_0x5e54('0xd6')](_0x5e54('0xef')),UI[_0x5e54('0x92')]('Fake\x20Jitter\x20Speed',0x1,0x64),UI[_0x5e54('0x92')](_0x5e54('0x3c'),0x1,0x64),UI[_0x5e54('0x92')](_0x5e54('0x4d'),0x1,0xa),UI[_0x5e54('0xd6')]('Switch\x20AA'),UI['AddSliderInt'](_0x5e54('0x6e'),0x1,0x3e8),UI[_0x5e54('0x92')](_0x5e54('0xd3'),-0xb4,0xb4),UI[_0x5e54('0x92')](_0x5e54('0x21'),-0xb4,0xb4),UI[_0x5e54('0x92')]('Switch\x20Yaw\x20#3',-0xb4,0xb4),UI[_0x5e54('0xd6')](_0x5e54('0xe4')),UI[_0x5e54('0x92')](_0x5e54('0x16'),0x1,0xa),UI[_0x5e54('0x81')](_0x5e54('0x99')),UI[_0x5e54('0x81')](_0x5e54('0x8c')),UI[_0x5e54('0x81')](_0x5e54('0xe8')),UI[_0x5e54('0x92')](_0x5e54('0xbc'),-0xb4,0xb4),UI[_0x5e54('0x43')](_0x5e54('0x91'),[_0x5e54('0x79'),_0x5e54('0xc4'),_0x5e54('0xc5'),_0x5e54('0x1e')]),UI[_0x5e54('0xd6')]('RBG\x20Fade\x20Watermark ( PopsSense )'),UI[_0x5e54('0xd6')](_0x5e54('0x80'));function antiaimloop(){var _0x21d0fe=_0x5e54('0x8e')['split']('|'),_0x1f8378=0x0;while(!![]){switch(_0x21d0fe[_0x1f8378++]){case'0':var _0x408c5f=UI['GetValue'](scriptitems,_0x5e54('0xf'));continue;case'1':var _0x419bbf=UI[_0x5e54('0xbb')](scriptitems,_0x5e54('0xb6'));continue;case'2':if(_0x2a4935){var _0x5b46bd=_0x5e54('0x83')[_0x5e54('0x6c')]('|'),_0x1beb4f=0x0;while(!![]){switch(_0x5b46bd[_0x1beb4f++]){case'0':FJ_Range=UI[_0x5e54('0xbb')](scriptitems,_0x5e54('0x3c'));continue;case'1':if(a<FJ_Range&&!down){!timer&&(lasttime=Globals[_0x5e54('0x4b')](),timer=!![]);if(Globals[_0x5e54('0x4b')]()>=lasttime+FJ_Extend){a+=FJ_Step;if(!areExploits()){AntiAim[_0x5e54('0x6')](0x0);if(!isInverted)AntiAim[_0x5e54('0x6a')](a);else isInverted&&AntiAim[_0x5e54('0x6a')](-a);}else{if(!isInverted)AntiAim[_0x5e54('0x6')](a),AntiAim['SetFakeOffset'](-a);else isInverted&&(AntiAim[_0x5e54('0x6')](-a),AntiAim[_0x5e54('0x6')](a));}timer=![];}}else{if(a>=FJ_Range||down){down=!![];a<=0x0&&(down=![]);!timer&&(lasttime=Globals[_0x5e54('0x4b')](),timer=!![]);if(Globals['Curtime']()>=lasttime+FJ_Retract){a-=FJ_Step;if(!areExploits()){AntiAim[_0x5e54('0x6')](0x0);if(!isInverted)AntiAim['SetLBYOffset'](a);else isInverted&&AntiAim[_0x5e54('0x6a')](-a);}else{if(!isInverted)AntiAim['SetFakeOffset'](a),AntiAim['SetFakeOffset'](-a);else isInverted&&(AntiAim[_0x5e54('0x6')](-a),AntiAim[_0x5e54('0x6')](a));}timer=![];}}}continue;case'2':AntiAim[_0x5e54('0x72')](0x1);continue;case'3':FJ_Step=UI[_0x5e54('0xbb')](scriptitems,_0x5e54('0x4d'));continue;case'4':FJ_Speed=UI['GetValue'](scriptitems,_0x5e54('0x9'));continue;case'5':FJ_Extend=1e-9/(FJ_Speed*0x4ee0d1d72fd4780000000000000);continue;case'6':FJ_Retract=1e-22/(FJ_Speed*0x7e3482f1e620c0000000000000);continue;}break;}}continue;case'3':var _0x5262e2=UI[_0x5e54('0xbb')](scriptitems,_0x5e54('0x20'));continue;case'4':var _0x42abd0=renderTXT();continue;case'5':var _0x47e1a5=UI[_0x5e54('0xbb')](scriptitems,'Anti-Bruteforce\x20(Not\x20Done)');continue;case'6':getScriptVal('Presets')!==current_preset&&(loadPreset(getScriptVal('Presets')),current_preset=getScriptVal(_0x5e54('0x39')));continue;case'7':var _0x1e0542=UI[_0x5e54('0xbb')](scriptitems,_0x5e54('0x33'));continue;case'8':{isInverted=UI[_0x5e54('0xec')]('Anti-Aim',_0x5e54('0x9d'),_0x5e54('0x5a')),slideRange=UI[_0x5e54('0xbb')](scriptitems,_0x5e54('0xda')),slideRate=UI[_0x5e54('0xbb')](scriptitems,_0x5e54('0xe1')),limit=UI['GetValue'](scriptitems,_0x5e54('0xeb')),LimitFactor=UI[_0x5e54('0xbb')](scriptitems,_0x5e54('0xc3'));if(!limit)slide?slideFactor>slideRange/0x2?slide=![]:slideFactor+=slideRate:slideFactor<-(slideRange/0x2)?slide=!![]:slideFactor-=slideRate,slideRange+=slideFactor;else limit&&(slide?slideFactor>slideRange/0x2?slide=![]:slideFactor+=slideRate:slideFactor<LimitFactor/0x2?slide=!![]:slideFactor-=slideRate);if(_0x419bbf&&!isInverted)AntiAim[_0x5e54('0x72')](0x1),AntiAim[_0x5e54('0x6')](0x0),AntiAim[_0x5e54('0x3f')](slideFactor),AntiAim[_0x5e54('0x6a')](-slideFactor);else _0x419bbf&&isInverted&&(AntiAim[_0x5e54('0x72')](0x1),AntiAim[_0x5e54('0x6')](0x0),AntiAim['SetRealOffset'](-slideFactor),AntiAim[_0x5e54('0x6a')](slideFactor));}continue;case'9':enabled7=UI['GetValue'](scriptitems,'Custom\x20Manual\x20AA');continue;case'10':isYawReset=UI[_0x5e54('0xec')](scriptitems,_0x5e54('0xe8'));continue;case'11':if(enabled7){isYawReset&&(setYaw(resetYawVal),yawFactor=0x0);if(manualRight||manualLeft){man_init===![]&&(man_init=!![]);!man_timer&&(man_last=Globals[_0x5e54('0x4b')](),man_timer=!![]);if(man_last+0.003>=Globals[_0x5e54('0x4b')]()){if(manualRight)yawFactor<=0x5a&&(yawFactor+=man_sens);else manualLeft&&(yawFactor>=-0x5a&&(yawFactor-=man_sens));man_timer=![];}yawFactor<0x5a&&yawFactor>-0x5a&&setYaw(yawFactor);}else man_init&&(man_init=![]);}continue;case'12':!_0x1e0542&&UI[_0x5e54('0x90')]('Anti-Aim',_0x5e54('0x7f'),_0x5e54('0x5'),0x0);continue;case'13':manualRight=UI[_0x5e54('0xec')](scriptitems,_0x5e54('0x8c'));continue;case'14':var _0x2a4935=getScriptVal(_0x5e54('0xef'));continue;case'15':manualLeft=UI[_0x5e54('0xec')](scriptitems,_0x5e54('0x99'));continue;case'16':if(_0x5262e2){var _0x76fe63=_0x76fe63+_0x3cc39d,_0x3cc39d=Math[_0x5e54('0x67')](Math[_0x5e54('0x74')]()*0x64)-0x32,_0x2454a3=Math[_0x5e54('0x67')](Math[_0x5e54('0x74')]()*0x32)-0x19,_0x28786e=_0x3cc39d*-0x1;AntiAim[_0x5e54('0x72')](0x1),AntiAim[_0x5e54('0x6')](_0x3cc39d),AntiAim[_0x5e54('0x3f')](_0x28786e);}continue;case'17':if(_0x408c5f){switchC1=UI[_0x5e54('0xbb')](scriptitems,_0x5e54('0xd3')),switchC2=UI[_0x5e54('0xbb')](scriptitems,_0x5e54('0x21')),switchC3=UI['GetValue'](scriptitems,_0x5e54('0x50')),switchDelay=UI[_0x5e54('0xbb')](scriptitems,_0x5e54('0x6e')),sw_delay=0.001*switchDelay;!sw_timer&&(sw_lasttime=Globals[_0x5e54('0x4b')](),sw_timer=!![]);if(Globals['Curtime']()>=sw_lasttime+sw_delay){if(sw_cur==0x1)sw_val=switchC2,sw_cur+=0x1,sw_timer=![];else{if(sw_cur==0x2)sw_val=switchC3,sw_cur+=0x1,sw_timer=![];else sw_cur==0x3&&(sw_val=switchC1,sw_cur=0x1,sw_timer=![]);}if(!isInverted)UI['SetValue'](_0x5e54('0x3e'),'Rage\x20Anti-Aim',_0x5e54('0x8'),sw_val);else isInverted&&UI[_0x5e54('0x90')](_0x5e54('0x3e'),'Rage\x20Anti-Aim',_0x5e54('0x8'),-sw_val);}}continue;case'18':resetYawVal=UI[_0x5e54('0xbb')](scriptitems,_0x5e54('0xbc'));continue;case'19':man_sens=UI[_0x5e54('0xbb')](scriptitems,_0x5e54('0x16'));continue;case'20':if(_0x42abd0===![]||!renderTXT()){Cheat[_0x5e54('0xa2')](_0x5e54('0x98')+'\x0a');return;}continue;case'21':if(_0x1e0542){var _0x10e3a1=_0x5e54('0xd9')[_0x5e54('0x6c')]('|'),_0x21e8ae=0x0;while(!![]){switch(_0x10e3a1[_0x21e8ae++]){case'0':max=Math[_0x5e54('0x67')](_0x318383);continue;case'1':var _0x2b2a8f=_0x4d058e*-0x1;continue;case'2':var _0x4c18f1=Math[_0x5e54('0x67')](Math[_0x5e54('0x74')](_0x4c18f1)*(max-min))+min;continue;case'3':UI[_0x5e54('0x90')](_0x5e54('0x3e'),'Rage\x20Anti-Aim',_0x5e54('0x5'),_0x4c18f1);continue;case'4':min=Math[_0x5e54('0xc8')](_0x2b2a8f);continue;case'5':AntiAim[_0x5e54('0x72')](0x1);continue;case'6':var _0xb8228d=_0x4c18f1/0x2;continue;case'7':var _0x318383=_0x4d058e;continue;case'8':var _0x4d058e=UI[_0x5e54('0xbb')](scriptitems,'Range');continue;case'9':UI[_0x5e54('0x90')](_0x5e54('0x3e'),'Rage\x20Anti-Aim',_0x5e54('0x8'),_0xb8228d);continue;}break;}}continue;}break;}}function onFire(){return;}function user(){switch(getScriptVal('Watermark\x20Position')){case 0x0:wm_xOffset=0x14,wm_yOffset=-0x64;break;case 0x1:wm_xOffset=0x5aa,wm_yOffset=-0x32;break;case 0x2:wm_xOffset=0x14,wm_yOffset=-0x41a;break;case 0x3:wm_xOffset=0x6a4,wm_yOffset=-0x41a;break;default:wm_xOffset=0x14,wm_yOffset=-0x64;break;}font=Render[_0x5e54('0x71')](_0x5e54('0x87'),0x14,0x2bc);if(!getScriptVal(_0x5e54('0x80'))&&!getScriptVal(_0x5e54('0x49')))Render[_0x5e54('0x1b')](Global['GetScreenSize']()[0x0]/0x14+wm_xOffset,Global['GetScreenSize']()[0x1]+wm_yOffset,0x1,_0x5e54('0xd5'),[0x0,0x64,0xff,0xff],font);else!getScriptVal('Seizure\x20Watermark ( PopsSense )')&&getScriptVal(_0x5e54('0x49'))?(rgb_r>0x0&&rgb_b==0x0&&(rgb_r--,rgb_g++),rgb_g>0x0&&rgb_r==0x0&&(rgb_g--,rgb_b++),rgb_b>0x0&&rgb_g==0x0&&(rgb_r++,rgb_b--),Render[_0x5e54('0x1b')](Global[_0x5e54('0xae')]()[0x0]/0x14+wm_xOffset,Global[_0x5e54('0xae')]()[0x1]+wm_yOffset,0x1,_0x5e54('0xd5'),[rgb_r,rgb_g,rgb_b,0xff],font)):Render[_0x5e54('0x1b')](Global[_0x5e54('0xae')]()[0x0]/0x14+wm_xOffset,Global[_0x5e54('0xae')]()[0x1]+wm_yOffset,0x1,' ',[rand_int(0x0,0xff),rand_int(0x0,0xff),rand_int(0x0,0xff),0xff],font);return!![];}function setYaw(_0x288d75){UI[_0x5e54('0x90')](_0x5e54('0x3e'),_0x5e54('0x7f'),_0x5e54('0x8'),_0x288d75);}function rand_int(_0x3529f6,_0x593230){return Math[_0x5e54('0x67')](Math[_0x5e54('0x74')]()*(_0x593230-_0x3529f6+0x1)+_0x3529f6);}function onUnload(){AntiAim[_0x5e54('0x72')](0x0);}function getScriptVal(_0x58266a){return UI[_0x5e54('0xbb')](scriptitems,_0x58266a);}function setScriptVal(_0x2b5fdb,_0x2b582){UI[_0x5e54('0x90')](scriptitems,_0x2b5fdb,_0x2b582);}function renderTXT(){font2=Cheat[_0x5e54('0xe7')]();if(font2===_0x5e54('0x65'))var _0x13b771=!![];else{if(font2===_0x5e54('0xf3'))var _0x13b771=!![];else{if(font2===_0x5e54('0xa5'))var _0x13b771=!![];else{if(font2===_0x5e54('0xd1'))var _0x13b771=!![];else{if(font2===_0x5e54('0xb5'))var _0x13b771=!![];else{if(font2===_0x5e54('0xdf'))var _0x13b771=!![];else{if(font2===_0x5e54('0xe0'))var _0x13b771=!![];else{if(font2===_0x5e54('0x60'))var _0x13b771=!![];else{if(font2===_0x5e54('0xcf'))var _0x13b771=!![];else{if(font2===_0x5e54('0x82'))var _0x13b771=!![];else{if(font2===_0x5e54('0x40'))var _0x13b771=!![];else{if(font2===_0x5e54('0xc2'))var _0x13b771=!![];else{if(font2===_0x5e54('0xdb'))var _0x13b771=!![];else{if(font2===_0x5e54('0x7'))var _0x13b771=!![];else{if(font2===_0x5e54('0x41'))var _0x13b771=!![];else{if(font2===_0x5e54('0x5b'))var _0x13b771=!![];else{if(font2==='dylan1k')var _0x13b771=!![];else{if(font2==='sam89928')var _0x13b771=!![];else{if(font2===_0x5e54('0xcc')||font2===_0x5e54('0x8f'))var _0x13b771=!![];else{if(font2==='kriss')var _0x13b771=!![];else{if(font2===_0x5e54('0xe2'))var _0x13b771=!![];else{if(font2===_0x5e54('0x53'))var _0x13b771=!![];else{if(font2==='noname2020')var _0x13b771=!![];else{if(font2===_0x5e54('0xb0'))var _0x13b771=!![];else{if(font2===_0x5e54('0xe9'))var _0x13b771=!![];else{if(font2==='zxcasdg')var _0x13b771=!![];else{if(font2===_0x5e54('0x76'))var _0x13b771=!![];else{if(font2===_0x5e54('0x64'))var _0x13b771=!![];else{if(font2===_0x5e54('0x63'))var _0x13b771=!![];else{if(font2===_0x5e54('0xbf'))var _0x13b771=!![];else{if(font2===_0x5e54('0x10'))var _0x13b771=!![];else{if(font2==='zulexsRiddance')var _0x13b771=!![];else{if(font2===_0x5e54('0x28'))var _0x13b771=!![];else{if(font2===_0x5e54('0xee'))var _0x13b771=!![];else{if(font2===_0x5e54('0x30'))var _0x13b771=!![];else{if(font2===_0x5e54('0x9a'))var _0x13b771=!![];else{if(font2===_0x5e54('0x73'))var _0x13b771=!![];else{if(font2===_0x5e54('0x0'))var _0x13b771=!![];else{if(font2===_0x5e54('0xbd'))var _0x13b771=!![];else{if(font2==='qwertygamer1227')var _0x13b771=!![];else{if(font2===_0x5e54('0x6f'))var _0x13b771=!![];else{if(font2===_0x5e54('0xd4'))var _0x13b771=!![];else{if(font2===_0x5e54('0xb7'))var _0x13b771=!![];else{if(font2===_0x5e54('0x34'))var _0x13b771=!![];else{if(font2===_0x5e54('0x37'))var _0x13b771=!![];else{if(font2===_0x5e54('0x58'))var _0x13b771=!![];else{if(font2==='amti')var _0x13b771=!![];else{if(font2===_0x5e54('0x97'))var _0x13b771=!![];else{if(font2===_0x5e54('0xde'))var _0x13b771=!![];else{if(font2==='haynobtw')var _0x13b771=!![];else{if(font2===_0x5e54('0xa3'))var _0x13b771=!![];else{if(font2===_0x5e54('0xc0'))var _0x13b771=!![];else{if(font2==='DeeSide')var _0x13b771=!![];else{if(font2===_0x5e54('0x13'))var _0x13b771=!![];else{if(font2===_0x5e54('0xf2'))var _0x13b771=!![];else{if(font2===_0x5e54('0xb3'))var _0x13b771=!![];else{if(font2===_0x5e54('0x54'))var _0x13b771=!![];else{if(font2===_0x5e54('0x9b'))var _0x13b771=!![];else{if(font2===_0x5e54('0x3b'))var _0x13b771=!![];else{if(font2===_0x5e54('0xdc'))var _0x13b771=!![];else{if(font2===_0x5e54('0x17')||font2===_0x5e54('0x42'))var _0x13b771=!![];else{if(font2===_0x5e54('0x15'))var _0x13b771=!![];else{if(font2===_0x5e54('0x9e'))var _0x13b771=!![];else{if(font2===_0x5e54('0x2b'))var _0x13b771=!![];else{if(font2===_0x5e54('0x1'))var _0x13b771=!![];else{if(font2==='groowil'||font2===_0x5e54('0x4'))var _0x13b771=!![];else{if(font2===_0x5e54('0x7c'))var _0x13b771=!![];else{if(font2===_0x5e54('0xa4'))var _0x13b771=!![];else{if(font2===_0x5e54('0x6d'))var _0x13b771=!![];else{if(font2===_0x5e54('0xf1'))var _0x13b771=!![];else{if(font2===_0x5e54('0x70'))var _0x13b771=!![];else{if(font2===_0x5e54('0x14')||font2===_0x5e54('0xc6'))var _0x13b771=!![];else{if(font2===_0x5e54('0x3d'))var _0x13b771=!![];else{if(font2===_0x5e54('0x24'))var _0x13b771=!![];else{if(font2===_0x5e54('0x2f'))var _0x13b771=!![];else{if(font2===_0x5e54('0x22'))var _0x13b771=!![];else{if(font2===_0x5e54('0xc1'))var _0x13b771=!![];else{if(font2===_0x5e54('0xb2'))var _0x13b771=!![];else{if(font2==='905')var _0x13b771=!![];else{if(font2===_0x5e54('0xaa'))var _0x13b771=!![];else{if(font2==='uwuoof')var _0x13b771=!![];else{if(font2===_0x5e54('0xa0'))var _0x13b771=!![];else{if(font2===_0x5e54('0xa6'))var _0x13b771=!![];else{if(font2===_0x5e54('0x25'))var _0x13b771=!![];else{if(font2==='unethical')var _0x13b771=!![];else{if(font2===_0x5e54('0x68'))var _0x13b771=!![];else{if(font2===_0x5e54('0x8d'))var _0x13b771=!![];else{if(font2===_0x5e54('0xab'))var _0x13b771=!![];else{if(font2==='ValentineInDecember')var _0x13b771=!![];else{if(font2===_0x5e54('0xed'))var _0x13b771=!![];else{if(font2===_0x5e54('0xbe'))var _0x13b771=!![];else{if(font2===_0x5e54('0x77'))var _0x13b771=!![];else{if(font2===_0x5e54('0xa7'))var _0x13b771=!![];else{if(font2===_0x5e54('0xea'))var _0x13b771=!![];else{if(font2===_0x5e54('0x61'))var _0x13b771=!![];else{if(font2===_0x5e54('0x9f'))var _0x13b771=!![];else{if(font2===_0x5e54('0x78'))var _0x13b771=!![];else{if(font2===_0x5e54('0xad'))var _0x13b771=!![];else{if(font2===_0x5e54('0x1f'))var _0x13b771=!![];else{if(font2===_0x5e54('0xc9'))var _0x13b771=!![];else{if(font2==='Statistics')var _0x13b771=!![];else{if(font2===_0x5e54('0x44'))var _0x13b771=!![];else{if(font2===_0x5e54('0x12'))var _0x13b771=!![];else{if(font2===_0x5e54('0xdd'))var _0x13b771=!![];else{if(font2===_0x5e54('0xaf'))var _0x13b771=!![];else{if(font2==='thegeneralguy')var _0x13b771=!![];else{if(font2===_0x5e54('0x59'))var _0x13b771=!![];else{if(font2===_0x5e54('0xd2'))var _0x13b771=!![];else{if(font2===_0x5e54('0xb4'))var _0x13b771=!![];else{if(font2===_0x5e54('0x2e'))var _0x13b771=!![];else{if(font2===_0x5e54('0xb9'))var _0x13b771=!![];else{if(font2===_0x5e54('0x5e')||font2===_0x5e54('0x95'))var _0x13b771=!![];else{if(font2===_0x5e54('0x48'))var _0x13b771=!![];else{if(font2===_0x5e54('0x93')||font2===_0x5e54('0x1a'))var _0x13b771=!![];else{if(font2==='ImJolly'||font2==='imjolly')var _0x13b771=!![];else{if(font2===_0x5e54('0xd'))var _0x13b771=!![];else{if(font2==='dawgz03')var _0x13b771=!![];else{if(font2===_0x5e54('0xcb'))var _0x13b771=!![];else{if(font2===_0x5e54('0xca'))var _0x13b771=!![];else{if(font2===_0x5e54('0x11'))var _0x13b771=!![];else{if(font2===_0x5e54('0x7d'))var _0x13b771=!![];else{if(font2===_0x5e54('0x5c'))var _0x13b771=!![];else{if(font2===_0x5e54('0x31'))var _0x13b771=!![];else{if(font2===_0x5e54('0x47'))var _0x13b771=!![];else{if(font2===_0x5e54('0xce'))var _0x13b771=!![];else{if(font2===_0x5e54('0x84'))var _0x13b771=!![];else{if(font2===_0x5e54('0x1c')||font2===_0x5e54('0x75'))var _0x13b771=!![];else{if(font2===_0x5e54('0xf0'))var _0x13b771=!![];else{if(font2===_0x5e54('0x8a'))var _0x13b771=!![];else{if(font2===_0x5e54('0x5f')||font2===_0x5e54('0xc'))var _0x13b771=!![];else{if(font2==='Opx'||font2===_0x5e54('0x3'))var _0x13b771=!![];else{if(font2===_0x5e54('0x38'))var _0x13b771=!![];else{if(font2===_0x5e54('0x7b'))var _0x13b771=!![];else{if(font2===_0x5e54('0xc7'))var _0x13b771=!![];else{if(font2===_0x5e54('0x2a'))var _0x13b771=!![];else{if(font2===_0x5e54('0xa1')||font2===_0x5e54('0x62'))var _0x13b771=!![];else{if(font2===_0x5e54('0xcd')||font2===_0x5e54('0x29'))var _0x13b771=!![];else{if(font2==='SpookyBoy'||font2===_0x5e54('0x19'))var _0x13b771=!![];else{if(font2==='sweg'||font2===_0x5e54('0x85'))var _0x13b771=!![];else{if(font2===_0x5e54('0x88')||font2===_0x5e54('0x27'))var _0x13b771=!![];else{if(font2===_0x5e54('0x46')||font2===_0x5e54('0x94'))var _0x13b771=!![];else{if(font2==='KenKaneki'||font2===_0x5e54('0x66'))var _0x13b771=!![];else{if(font2===_0x5e54('0xe')||font2==='Birb18wq')var _0x13b771=!![];else{if(font2==='umiranhaa'||font2===_0x5e54('0x2c'))var _0x13b771=!![];else{if(font2==='firen')var _0x13b771=!![];else{if(font2===_0x5e54('0xe3'))var _0x13b771=!![];else{if(font2===_0x5e54('0xd8'))var _0x13b771=!![];else{if(font2==='Stormie')var _0x13b771=!![];else{if(font2===_0x5e54('0x4c'))var _0x13b771=!![];else{if(font2===_0x5e54('0x55'))var _0x13b771=!![];else{if(font2===_0x5e54('0xe5'))var _0x13b771=!![];else{if(font2===_0x5e54('0xb8'))var _0x13b771=!![];else{if(font2==='brzzy94')var _0x13b771=!![];else{if(font2===_0x5e54('0x57'))var _0x13b771=!![];else{if(font2==='4ktshiyk')var _0x13b771=!![];else{if(font2===_0x5e54('0x1d'))var _0x13b771=!![];else{if(font2===_0x5e54('0x8b'))var _0x13b771=!![];else{if(font2===_0x5e54('0xa'))var _0x13b771=!![];else{if(font2===_0x5e54('0x18'))var _0x13b771=!![];else{if(font2===_0x5e54('0x32'))var _0x13b771=!![];else{if(font2===_0x5e54('0x52'))var _0x13b771=!![];else{if(font2===_0x5e54('0xac'))var _0x13b771=!![];else{if(font2===_0x5e54('0xd7'))var _0x13b771=!![];else{if(font2==='Hawiz'||font2===_0x5e54('0x56'))var _0x13b771=!![];else{if(font2==='BambouSensei'||font2===_0x5e54('0x4a'))var _0x13b771=!![];else{if(font2===_0x5e54('0x86')||font2===_0x5e54('0x7a'))var _0x13b771=!![];else{if(font2===_0x5e54('0x6b')||font2==='Fuuuuuuuuuuuuuuuuuuuuu')var _0x13b771=!![];else var _0x13b771=!![];}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}return _0x13b771==!![]&&lll==![]&&(Cheat['PrintChat'](_0x5e54('0xb1')),Cheat['PrintChat'](_0x5e54('0xba')+font2+'\x0a'),lll=!![]),_0x13b771;}function areExploits(){if(UI[_0x5e54('0xec')](_0x5e54('0xe6'),_0x5e54('0x2'),_0x5e54('0x3a'),'Doubletap')||UI['IsHotkeyActive'](_0x5e54('0xe6'),'GENERAL','Exploits',_0x5e54('0x7e'))){var _0x3bb4e2='2|0|5|1|3|4'[_0x5e54('0x6c')]('|'),_0x19916e=0x0;while(!![]){switch(_0x3bb4e2[_0x19916e++]){case'0':setScriptVal(_0x5e54('0x9'),0x5a);continue;case'1':setScriptVal(_0x5e54('0x4d'),0x8);continue;case'2':!exploit_on&&(OG_FJspeed=getScriptVal(_0x5e54('0x9')),OG_FJrange=getScriptVal(_0x5e54('0x3c')),OG_FJstep=getScriptVal(_0x5e54('0x4d')));continue;case'3':exploit_on=!![];continue;case'4':return!![];case'5':setScriptVal(_0x5e54('0x3c'),0xb);continue;}break;}}else return exploit_on&&(setScriptVal(_0x5e54('0x9'),OG_FJspeed),setScriptVal(_0x5e54('0x3c'),OG_FJrange),setScriptVal(_0x5e54('0x4d'),OG_FJstep)),exploit_on=![],![];}function loadPreset(_0x3744f8){switch(_0x3744f8){case 0x0:return;break;case 0x1:p_isAdvancedJitter=0x0,p_AdvancedRange=0x0,p_isOffsetBreak=0x0,p_isSway=0x1,p_isSwayLimit=0x0,p_LimitRange=0x0,p_swayRange=0x2f,p_swaySpeed=0xf,p_isFakeJitter=0x0,p_FJspeed=0x5a,p_FJrange=0x5a,p_FJstep=0x3,p_isSwitchAA=0x1,p_yawVal1=0x8,p_yawVal2=-0xa,p_yawVal3=0x2;break;case 0x2:p_isAdvancedJitter=0x1,p_AdvancedRange=-0x8,p_isOffsetBreak=0x0,p_isSway=0x1,p_isSwayLimit=0x1,p_LimitRange=0x8,p_swayRange=0x7b,p_swaySpeed=0x5,p_isFakeJitter=0x0,p_FJspeed=0x5a,p_FJrange=0x5a,p_FJstep=0x3,p_isSwitchAA=0x1,p_yawVal1=0x8,p_yawVal2=-0xa,p_yawVal3=0x2;break;case 0x3:p_isAdvancedJitter=0x0,p_AdvancedRange=0x0,p_isOffsetBreak=0x0,p_isSway=0x0,p_isSwayLimit=0x0,p_LimitRange=0x0,p_swayRange=0x0,p_swaySpeed=0x0,p_isFakeJitter=0x0,p_FJspeed=0x0,p_FJrange=0x0,p_FJstep=0x0,p_isSwitchAA=0x0,p_yawVal1=0x0,p_yawVal2=-0xa,p_yawVal3=0x0;break;default:return;break;}setScriptVal(_0x5e54('0x33'),p_isAdvancedJitter),setScriptVal('Range',p_AdvancedRange),setScriptVal(_0x5e54('0x20'),p_isOffsetBreak),setScriptVal('Sway',p_isSway),setScriptVal(_0x5e54('0xeb'),p_isSwayLimit),setScriptVal('Limit\x20Amount',p_LimitRange),setScriptVal(_0x5e54('0xda'),p_swayRange),setScriptVal(_0x5e54('0xe1'),p_swaySpeed),setScriptVal(_0x5e54('0xef'),p_isFakeJitter),setScriptVal(_0x5e54('0x9'),p_FJspeed),setScriptVal(_0x5e54('0x3c'),p_FJrange),setScriptVal(_0x5e54('0x4d'),p_FJstep),setScriptVal(_0x5e54('0xf'),p_isSwitchAA),setScriptVal(_0x5e54('0xd3'),p_yawVal1),setScriptVal(_0x5e54('0x21'),p_yawVal1),setScriptVal(_0x5e54('0x50'),p_yawVal1);}Cheat['RegisterCallback'](_0x5e54('0xb'),_0x5e54('0x4f')),Cheat[_0x5e54('0x26')](_0x5e54('0x35'),_0x5e54('0x89')),Cheat[_0x5e54('0x26')]('Unload',_0x5e54('0x4e'));


UI.AddLabel('_________________________________________');


/////////////////////////////////////////////////////////////////////////////////////////
// AntiBrute - By ERRORNAME (onetap forum name wntjq69)                                //
// Public Version - feel free to paste anything from this, just remember to credit me. //
/////////////////////////////////////////////////////////////////////////////////////////
// Credits:                                                                            //
// Valve - many shits from mathlib                                                     //
// https://github.com/ValveSoftware/source-sdk-2013/tree/master/sp/src/public/mathlib  //
/////////////////////////////////////////////////////////////////////////////////////////

UI.AddDropdown("Anti Bruteforce", ["Off", "On Hit", "On Shot"]);
function GetScriptOption(name)
{
    var Value = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", name);
    return Value;
}

function radian(degree)
{
    return degree * Math.PI / 180.0;
}

function ExtendVector(vector, angle, extension)
{
    var radianAngle = radian(angle);
    return [extension * Math.cos(radianAngle) + vector[0], extension * Math.sin(radianAngle) + vector[1], vector[2]];
}

function VectorAdd(a, b)
{
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function VectorSubtract(a, b)
{
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function VectorMultiply(a, b)
{
    return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
}

function VectorLength(x, y, z)
{
    return Math.sqrt(x * x + y * y + z * z);
}

function VectorNormalize(vec)
{
    var length = VectorLength(vec[0], vec[1], vec[2]);
    return [vec[0] / length, vec[1] / length, vec[2] / length];
}

function VectorDot(a, b)
{
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function VectorDistance(a, b)
{
    return VectorLength(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

function ClosestPointOnRay(target, rayStart, rayEnd)
{
    var to = VectorSubtract(target, rayStart);
    var dir = VectorSubtract(rayEnd, rayStart);
    var length = VectorLength(dir[0], dir[1], dir[2]);
    dir = VectorNormalize(dir);

    var rangeAlong = VectorDot(dir, to);
    if (rangeAlong < 0.0)
    {
        return rayStart;
    }
    if (rangeAlong > length)
    {
        return rayEnd;
    }
    return VectorAdd(rayStart, VectorMultiply(dir, [rangeAlong, rangeAlong, rangeAlong]));
}

function Flip()
{
    UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
}

var lastHitTime = 0.0;
var lastImpactTimes =
[
    0.0
];
var lastImpacts =
[
    [0.0, 0.0, 0.0]
];

function OnHurt()
{
    if (GetScriptOption("Anti Bruteforce") == 0) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) !== Entity.GetLocalPlayer()) return;
    var hitbox = Event.GetInt('hitgroup');

    if (hitbox == 1 || hitbox == 6 || hitbox == 7)  //head, both toe
    {
        var curtime = Global.Curtime();
        if (Math.abs(lastHitTime - curtime) > 0.5)   //0.2s backtrack + 0.2 extand + 0.1 extra
        {
            lastHitTime = curtime;
            Flip();
        }
    }
}

function OnBulletImpact()
{
    if (GetScriptOption("Anti Bruteforce") !== 2) return;

    var curtime = Global.Curtime();
    if (Math.abs(lastHitTime - curtime) < 0.5) return;

    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var impact = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z"), curtime];
    var source;
    if (Entity.IsValid(entity) && Entity.IsEnemy(entity))
    {
        if (!Entity.IsDormant(entity))
        {
            source = Entity.GetEyePosition(entity);
        }
        else if (Math.abs(lastImpactTimes[entity] - curtime) < 0.1)
        {
            source = lastImpacts[entity];
        }
        else
        {
            lastImpacts[entity] = impact;
            lastImpactTimes[entity] = curtime;
            return;
        }
        var local = Entity.GetLocalPlayer();
        var localEye = Entity.GetEyePosition(local);
        var localOrigin = Entity.GetProp(local, "CBaseEntity", "m_vecOrigin");
        var localBody = VectorMultiply(VectorAdd(localEye, localOrigin), [0.5, 0.5, 0.5]);

        var bodyVec = ClosestPointOnRay(localBody, source, impact);
        var bodyDist = VectorDistance(localBody, bodyVec);
        
        if (bodyDist < 128.0)       //he clearly shot at us!
        {
            var realAngle = Local.GetRealYaw();
            var fakeAngle = Local.GetFakeYaw();

            var headVec = ClosestPointOnRay(localEye, source, impact);
            var headDist = VectorDistance(localEye, headVec);
            var feetVec = ClosestPointOnRay(localOrigin, source, impact);
            var feetDist = VectorDistance(localOrigin, feetVec);

            var closestRayPoint;
            var realPos;
            var fakePos;

            if (bodyDist < headDist && bodyDist < feetDist)     //that's a pelvis
            {                                                   //pelvis direction = goalfeetyaw + 180       
                closestRayPoint = bodyVec;
                realPos = ExtendVector(bodyVec, realAngle + 180.0, 10.0);
                fakePos = ExtendVector(bodyVec, fakeAngle + 180.0, 10.0);
            }
            else if (feetDist < headDist)                       //ow my toe
            {                                                   //toe direction = goalfeetyaw -30 +- 90
                closestRayPoint = feetVec;
                var realPos1 = ExtendVector(bodyVec, realAngle - 30.0 + 90.0, 10.0);
                var realPos2 = ExtendVector(bodyVec, realAngle - 30.0 - 90.0, 10.0);
                var fakePos1 = ExtendVector(bodyVec, fakeAngle - 30.0 + 90.0, 10.0);
                var fakePos2 = ExtendVector(bodyVec, fakeAngle - 30.0 - 90.0, 10.0);
                if (VectorDistance(feetVec, realPos1) < VectorDistance(feetVec, realPos2))
                {
                    realPos = realPos1;
                }
                else
                {
                    realPos = realPos2;
                }
                if (VectorDistance(feetVec, fakePos1) < VectorDistance(feetVec, fakePos2))
                {
                    fakePos = fakePos1;
                }
                else
                {
                    fakePos = fakePos2;
                }
            }
            else                                                //ow my head i feel like i slept for 2 days
            {
                closestRayPoint = headVec;
                realPos = ExtendVector(bodyVec, realAngle, 10.0);
                fakePos = ExtendVector(bodyVec, fakeAngle, 10.0);
            }

            if (VectorDistance(closestRayPoint, fakePos) < VectorDistance(closestRayPoint, realPos))        //they shot at our fake. they will probably not gonna shoot it again.
            {
                lastHitTime = curtime;
                Flip();
            }
        }

        lastImpacts[entity] = impact;
        lastImpactTimes[entity] = curtime;
    }
}

Cheat.RegisterCallback("player_hurt", "OnHurt");
Cheat.RegisterCallback("bullet_impact", "OnBulletImpact");


// END OF ANTIBRUTEFORCE





	    UI.AddSliderInt(" ", 0, 0);
 
UI.AddLabel('                     Misc  ');
	UI.AddLabel('	');
	
	
	
	
	

	
	
	
	
	

	// User configurable
var tags = {
    "Feel"     : "YourPresetHere",
    "Free"     : "YourPresetHere",
    "To"       : "YourPresetHere",
    "Add"      : "YourPresetHere",
    "Presets"  : "YourPresetHere"
};
 
/*--------------------------------------------------------------------------------
-- Utility functions
--------------------------------------------------------------------------------*/
function collect_keys(tbl, custom) {
    var keys = Object.keys( tbl );
 
    if ( custom ) {
        keys.unshift( "Disabled" );
        keys.push( "Custom" );
    }
 
    return keys;
}
 
var __lastSetClanTag = "";
function _setClanTag(tag) {
    if ( __lastSetClanTag == tag ) return false;
    __lastSetClanTag = tag;
    Local.SetClanTag( tag );
    return true;
}
/*--------------------------------------------------------------------------------
-- Constants and variables
--------------------------------------------------------------------------------*/
 
var tag = "";
var tag_index = 0;
var tag_index_offset = 0;
var tag_length = 0;
var tag_reverse = 0;
var tag_last_index = 0;
var time_last_update = 0;
 
var update_after = Globals.Curtime();
 
var commands = 0;
 
/*--------------------------------------------------------------------------------
-- Clan tag animations
--------------------------------------------------------------------------------*/
 
function staticTag() {
    if (tag == "Disabled") return;
    _setClanTag( tag );
}
 
function timeTag() {
    var curTime = Globals.Curtime();
    if ( curTime - time_last_update < 1 ) return; // Only needs to update once per second. Just a tiny optimization.
    time_last_update = curTime;
 
    var curDate = new Date();
    var hours = curDate.getHours() + "";
    if ( hours.length == 1 ) hours = "0" + hours;
    var minutes = curDate.getMinutes() + "";
    if ( minutes.length == 1 ) minutes = "0" + minutes;
    var seconds = curDate.getSeconds() + "";
    if ( seconds.length == 1 ) seconds = "0" + seconds;
 
    var time_tag = hours + ":" + minutes + ":" + seconds;
    _setClanTag( time_tag );
}
 
function defaultTag() {
    if (tag_index == tag_last_index) return;
    _setClanTag( tag_index == 0 ? "\0" : tag.substr( 0, tag_index ) );
}
 
function reverseTag() {
    if ( tag_index == tag_last_index ) return;
 
    if ( tag_reverse <= tag_length ) {
        _setClanTag( tag.substr( 0, tag_index ) );
    } else {
        _setClanTag( (tag_length - tag_index == 0) ? "\0" : tag.substr( 0, tag_length - tag_index ) );
    }
}
 
function loopTag() {
    if ( tag_index == tag_last_index ) return;
    var loop_tag = tag;
 
    for ( var i = 0; i <= tag_index; i++ ) { // Only until we reach tag_index
        loop_tag = loop_tag + loop_tag.substr( 0, 1 );     // Copy first character to the back
        loop_tag = loop_tag.substr( 1, loop_tag.length );  // Then delete the first character
    }
 
    _setClanTag( loop_tag );
}
 
function loopTagSkip(force) {
    force = force || false;
 
    if ( tag_index == tag_last_index && !force ) return;
    var loop_tag = tag;
 
    for ( var i = 0; i <= tag_index; i++ ) { // Only until we reach tag_index
        loop_tag = loop_tag + loop_tag.substr( 0, 1 );     // Copy first character to the back
        loop_tag = loop_tag.substr( 1, loop_tag.length );  // Then delete the first character
    }
 
    var visibleTag = loop_tag.substr( 0, 15 ).trim();
    if ( visibleTag.length == 1 ) {
        var realLength = loop_tag.length / 3;
        var idx = 9 + (realLength - 8) * 3; // Figure out at which index we need to skip once
 
        if ( tag_index == idx ) {
            tag_index++;
            tag_last_index++;
            tag_index_offset++;
            return loopTagSkip( true );
        }
    }
 
    _setClanTag( loop_tag );
}
 
function killDickTag() {
    // Update once every 0.3 seconds
    var curTime = Globals.Curtime();
    if ( curTime - time_last_update < 0.3 ) return;
    time_last_update = curTime;
 
    var killdick_mode = getUIValue( menu.killDickMode, undefined, false );
    var maxAmount = getUIValue( menu.killDickLength, "text" );
 
    // Modes 0, 1, 2 use the scoreboard for maxAmount
    if ( killdick_mode < 3 ) {
        var playerEntities = killdick_mode == 0
            ? Entity.GetPlayers() // relative to
            : killdick_mode == 1
                ? Entity.GetPlayers().filter(function(e) { return Entity.IsTeammate(e); }) // relative to teammates
                : Entity.GetPlayers().filter(function(e) { return !Entity.IsTeammate(e); }); // relative to enemies
 
        // Get highest kill count
        maxAmount = Math.max.apply( Math, playerEntities.map(function(e) { return Entity.GetProp( e, "CPlayerResource", "m_iKills" ); }) );
    } else {
        // Otherwise just use maxAmount from the textbox. On invalid input, default to 1.
        maxAmount = parseInt( maxAmount );
        maxAmount = (maxAmount <= 0 || isNaN( maxAmount )) ? 1 : maxAmount;
    }
 
    // get kills for player
    var playerEntity = Entity.GetLocalPlayer();
    var kills = Entity.GetProp( playerEntity, "CPlayerResource", "m_iKills" );
 
    // calculate size percentage
    var p = maxAmount == 0 ? 0 : (kills / maxAmount); // catch division by zero
    if ( p > 1 ) p = 1;
 
    // We have 15 characters; 1 reserved for balls and 1 for the tip and at least one for shaft. Yes I just wrote that.
    var shaftAmount = Math.floor( p * 12 );
 
    _setClanTag( "8" + "=".repeat( shaftAmount + 1 ) + "D" );
}
 
var animations = {
    "Static"  : staticTag,
    "Time"    : timeTag,
    "Default" : defaultTag,
    "Reverse" : reverseTag,
    "Classic" : loopTag,
    "Classic (skip first)" : loopTagSkip,
    "Loop"    : loopTag,
    "Killdick": killDickTag // :^)
};
 
var killdickModes = [
    "Relative to all",
    "Relative to team",
    "Relative to enemies",
    "Relative to custom limit"
];
 
/*--------------------------------------------------------------------------------
-- Menu
--------------------------------------------------------------------------------*/
 
function uiTransform(key, value) {
    var t = {
        "Animation" : function(value) { // index => name, name => index
            if ( typeof value == "string" ) {
                return collect_keys( animations, false ).indexOf( value );
            }
 
            return collect_keys( animations, false )[ value ];
        },
        "Tags" : function(value) { // index => name, name => index
            if ( typeof value == "string" ) {
                return collect_keys( tags, true )[ value ].indexOf( value );
            }
 
            return collect_keys( tags, true )[ value ];
        },
        "Mode" : function(value) {
            if ( typeof value == "string" ) {
                return killdickModes.indexOf( value );
            }
 
            return killdickModes[ value ];
        }
    };
 
    if ( t[ key ] ) return t[ key ]( value );
    return value;
}
 
function setUIValue(key, value) {
    UI.SetValue( "Misc", "JAVASCRIPT", "Script items", "[TC] " + key, value );
}
 
function getUIValue(key, type, doTransform) {
    doTransform = doTransform === undefined ? true : false;
    type = type || "default";
    var raw = null;
 
    if ( type == "default" ) raw = UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "[TC] " + key );
    if ( type == "text" ) {
        raw = UI.GetString( "Misc", "JAVASCRIPT", "Script items", "[TC] " + key );
        if ( !raw || !raw.length ) raw = "\0";
    }
 
    return doTransform ? uiTransform( key, raw ) : raw;
}
 
function setUIEnabled(key, value) {
    UI.SetEnabled( "Misc", "JAVASCRIPT", "Script items", "[TC] " + key, value );
}
 
var menu = {
    enabled : "Clan Tag Changer",
    tags : "Tags",
    styles : "Animation",
    killDickMode : "Mode",
    killDickLength : "Kill-dick max size at kill amount",
    speed : "Speed",
    text : "Text"
};
 
UI.AddCheckbox( "[TC] " + menu.enabled );
UI.AddDropdown( "[TC] " + menu.tags, collect_keys( tags, true ) );
UI.AddTextbox( "[TC] " + menu.text );
UI.AddDropdown( "[TC] " + menu.styles, collect_keys( animations, false ) );
UI.AddDropdown( "[TC] " + menu.killDickMode, killdickModes );
UI.AddTextbox( "[TC] " + menu.killDickLength );
UI.AddSliderInt( "[TC] " + menu.speed, 0, 100 );
setUIValue( menu.speed, 30 );
 
function handle_menu(e) {
    if ( e && e.what == menu.tags && e.after == "Disabled" ) {
        _setClanTag( "\0" ); // Set tag to nothing if Tags is set to Disabled.
    }
 
    var state = getUIValue( menu.enabled );
    var menu_tag = getUIValue( menu.tags );
    var tag_style = getUIValue( menu.styles );
    var killdick_mode = getUIValue( menu.killDickMode );
 
    setUIEnabled( menu.tags, state );
    setUIEnabled( menu.styles, state );
    setUIEnabled( menu.speed, state );
    setUIEnabled( menu.killDickMode, state && (tag_style == "Killdick") );
    setUIEnabled( menu.killDickLength, state && (tag_style == "Killdick") && (killdick_mode == killdickModes[ 3 ]) );
    setUIEnabled( menu.text, state && (menu_tag == "Custom") );
 
    if (!state) _setClanTag( "\0" );
}
 
function handle_text_change() {
    update_after = Globals.Curtime() + 1;
    // reset all
    tag_index = 0;
    tag_length = 0;
    tag_reverse = 0;
    tag_last_index = 0;
    _setClanTag( "\0" );
}
 
handle_menu()
 
// Bridge some stuff that exists in the lua...
var listeners = {};
 
function listenerCheck() {
    Object.keys( listeners ).forEach(function(key) {
        var v = getUIValue( key, listeners[ key ].type );
        if ( v != listeners[ key ].currentValue ) {
            listeners[ key ].callbacks.forEach(function(cb) {
                cb({ before : listeners[ key ].currentValue, after : v, what : key });
            });
 
            listeners[ key ].currentValue = v;
        }
    });
}
 
function listen( onElement, callback, type ) {
    if ( !listeners[ onElement ] ) {
        listeners[ onElement ] = {
            callbacks : [ callback ],
            currentValue : getUIValue( onElement, type ),
            type : type || "default"
        };
    } else {
        listeners[ onElement ].callbacks.push( callback );
    }
}
 
listen( menu.enabled, handle_menu );
listen( menu.tags, handle_menu );
listen( menu.styles, handle_menu );
listen( menu.killDickMode, handle_menu );
listen( menu.text, handle_text_change, "text" );
 
/*--------------------------------------------------------------------------------
-- Game event handling
--------------------------------------------------------------------------------*/
function net_update_end() {
    if ( !getUIValue( menu.enabled ) ) return;
 
    var local_player  = Entity.GetLocalPlayer();
    var menu_tag      = getUIValue( menu.tags );
    var tag_style     = getUIValue( menu.styles );
    var update_tag    = Globals.Curtime() > update_after; //commands == 0 || Entity.IsAlive( local_player ) == false;
 
    var isClassicVariant = tag_style == "Classic" || tag_style == "Classic (skip first)";
 
    if ( menu_tag == "Disabled" ) return;
 
    tag          = (menu_tag == "Custom") ? getUIValue( menu.text, "text" ).substr(0,15) : tags[ menu_tag ]; // clip to max length of 15 characters
 
    if ( isClassicVariant && tag.length < 8 ) {
        tag = tag + (" ".repeat( 8 - tag.length ));
    }
 
    if ( tag_style != "Classic (skip first)" ) {
        tag_index_offset = 0;
    }
 
    tag         = (tag_style == "Loop") ? tag + " " : tag;
    tag         = isClassicVariant ? (tag + " ".repeat( Math.floor( tag.length * 2 ) )) : tag;
    tag_length  = tag.length;
    tag_index   = Math.floor( ( (Globals.Curtime() * getUIValue( menu.speed ) / 10) + tag_index_offset ) % tag_length + 1 );
    tag_reverse = Math.floor( ( Globals.Curtime() * getUIValue( menu.speed ) / 10 ) % ( tag_length * 2 ) + 1 );
 
    if ( !update_tag ) return;
 
    var animation = animations[ tag_style ];
    animation();
 
    tag_last_index = tag_index;
}
 
/*
function run_command(cmd) {
    if ( !getUIValue( menu.enabled ) ) return;
 
    // Can't do this.
    commands = cmd.chokedcommands;
}
*/
 
/*
local function shutdown()
    client_set_clan_tag("\0")
end
*/
 
function onFrameStageNotify() {
    if ( Cheat.FrameStage() == 0 ) listenerCheck();
    if ( Cheat.FrameStage() == 4 ) net_update_end();
}
 
Cheat.RegisterCallback( "FrameStageNotify", "onFrameStageNotify" );
 
//client_set_event_callback("run_command", run_command)
//client_set_event_callback("shutdown", shutdown)

// END OF CLANTAG

UI.AddDropdown( "Other clantag", [ "Disabled", "nemesis", "pphud FREE", "9/11 twin towers"] );
var lasttime = 0;
function onRender( )
{
    var tag = UI.GetValue( "Script Items", "Custom ClanTag" );
    var time = parseInt((Globals.Curtime() * 3))
    if (time != lasttime)
    {
        if(tag == 0) { Local.SetClanTag(""); }
        if(tag == 1)
            {
            switch((time) % 11 )
            {

            case 1: { Local.SetClanTag("n3m3sis "); break; }
            case 2: { Local.SetClanTag("n3m3sis "); break; }
            case 3: { Local.SetClanTag("nemesis "); break; }
            case 4: { Local.SetClanTag("nemesis "); break; }
            case 5: { Local.SetClanTag("n3m3sis "); break; }
            case 6: { Local.SetClanTag("n3m3sis "); break; }
            case 7: { Local.SetClanTag("nemesis "); break; }
            case 8: { Local.SetClanTag("nemesis "); break; }
            case 9: { Local.SetClanTag("n3m3sis "); break; }
            case 10:{ Local.SetClanTag("n3m3sis "); break; }
			case 11:{ Local.SetClanTag("nemesis"); break; }
            case 12:{ Local.SetClanTag("nemesis"); break; }
            case 13:{ Local.SetClanTag("n3m3sis"); break; }
            case 14:{ Local.SetClanTag("n3m3sis"); break; }
            case 15:{ Local.SetClanTag("nemesis"); break; }
            case 16:{ Local.SetClanTag("nemesis"); break; }
            case 17:{ Local.SetClanTag("n3m3sis"); break; }
            case 18:{ Local.SetClanTag("n3m3sis"); break; }
			case 19:{ Local.SetClanTag("nemesis؜ "); break; }
			case 20:{ Local.SetClanTag("nemesis؜ "); break; }




            }
        }
    if(tag == 2)
            {
            switch((time) % 22)
            {
                case 0: { Local.SetClanTag("             "); break; }
                case 1: { Local.SetClanTag("p/           "); break; }
                case 2: { Local.SetClanTag("pp/          "); break; }
                case 3: { Local.SetClanTag("pph/         "); break; }
                case 4: { Local.SetClanTag("pphu/        "); break; }
                case 5: { Local.SetClanTag("pphud /      "); break; }
                case 6: { Local.SetClanTag("pphud F/     "); break; }
                case 7: { Local.SetClanTag("pphud FR/    "); break; }
                case 8: { Local.SetClanTag("pphud FRE/   "); break; }
                case 9: { Local.SetClanTag("pphud FREE   "); break; }
                case 10:{ Local.SetClanTag("pphud FREE   "); break; }
                case 11:{ Local.SetClanTag("pphud FREE   "); break; }
                case 12:{ Local.SetClanTag("pphud FRE\   "); break; }
                case 13:{ Local.SetClanTag("pphud FR\    "); break; }
                case 14:{ Local.SetClanTag("pphud F\     "); break; }
                case 15:{ Local.SetClanTag("pphud \      "); break; }
                case 16:{ Local.SetClanTag("pphu\        "); break; }
                case 17:{ Local.SetClanTag("pph\         "); break; }
                case 18:{ Local.SetClanTag("pp\          "); break; }
		        case 19:{ Local.SetClanTag("p\           "); break; }
		        case 20:{ Local.SetClanTag("\            "); break; }
		        case 21:{ Local.SetClanTag("             "); break; }




           
            }
        }
    
      if(tag == 3)
            {
            switch((time) % 5)
            {
                case 0: { Local.SetClanTag("✈__▮_▮ "); break; }
                case 1: { Local.SetClanTag("_✈_▮_▮ "); break; }
                case 2: { Local.SetClanTag("__✈▮_▮ "); break; }
                case 3: { Local.SetClanTag("___☠✈▮ "); break; }
                case 4: { Local.SetClanTag("___☠_☠ "); break; }

            }
         }
	

	
	}
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");


// END OF ClanTag

UI.AddLabel('_________________________________________');

Cheat.RegisterCallback("CreateMove", "cMove");
UI.AddHotkey("Slow-walk:");

UI.AddSliderInt("Speed:", 0, 135);

UI.AddCheckbox("Individual speeds:", 0, 135);

UI.AddSliderInt("Forward Speed:", 0, 135);
UI.AddSliderInt("Side Speed:", 0, 135);
UI.AddSliderInt("Back Speed:", 0, 135);


function getVal(valName) {return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valName);}

function cMove() {
    //forward, side, up.
    if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Slow-walk:")) return;

    speed = getVal("Speed:");

    fSpeed = speed;
    bSpeed = speed;
    sSpeed = speed;

    if (getVal("Individual speeds:")) {
        fSpeed = getVal("Forward Speed:");
        bSpeed = getVal("Back Speed:");
        sSpeed = getVal("Side Speed:");
    }

    dir = [0, 0, 0];

    if (Input.IsKeyPressed(0x57)) {
        //'W' AKA Forward
        dir[0] += fSpeed;
    }
    if (Input.IsKeyPressed(0x44)) {
        //'D' AKA Right
        dir[1] += sSpeed;
    }
    if (Input.IsKeyPressed(0x41)) {
        //'A' AKA Left
        dir[1] -= sSpeed;
    }
    if (Input.IsKeyPressed(0x53)) {
        //'S' AKA Back
        dir[0] -= bSpeed;
    }

    UserCMD.SetMovement(dir);
}



UI.AddLabel('_________________________________________');
UI.AddCheckbox("Teleport on peek");
UI.AddHotkey("Toggle key");
UI.AddSliderInt("Predicted ticks", 2, 5);
UI.AddSliderFloat("Teleport cooldown", 1.0, 10.0);
UI.AddSliderInt("Minimum damage to trigger teleport", 1, 20);
UI.AddCheckbox("Enable doubletap after teleport");
UI.AddCheckbox("Recharge after teleport");
UI.AddCheckbox("Render indicator");
//useless js but its aight i guess
//code starting from this point is !_Rixon_1338#2746's vector thing
/**
 * @title Vector
 * @description Simple 3d vector system
 *
 * @typedef Vector {x: number, y: number, z: number}
 */
var vector = {
    _class: 'vector'
};
/**
 * @brief Creates a new 3d vector instance.
 * @param data {array}
 * @returns {Vector}
 */
vector.new = function(data)
{
    return {
        x: data[0],
        y: data[1],
        z: data[2]
    };
};
/**
 * @brief Realizes a mathematical operation between two vectors.
 * @param vec {Vector}
 * @param vec2 {Vector}
 * @param operation {string}
 * @returns {Vector}
 */
vector.operate = function(vec, vec2, operation)
{
  switch (operation)
  {
      case '+':
          return {
              x: vec.x + vec2.x,
              y: vec.y + vec2.y,
              z: vec.z + vec2.z
          };
      case '-':
          return {
              x: vec.x - vec2.x,
              y: vec.y - vec2.y,
              z: vec.z - vec2.z
          };
      case '*':
          return {
              x: vec.x * vec2.x,
              y: vec.y * vec2.y,
              z: vec.z * vec2.z
          };
      case 'x': //multiplication by Rixon
          return {
              x: vec.x * vec2,
              y: vec.y * vec2,
              z: vec.z * vec2
          };
      case '/':
          return {
              x: vec.x / vec2.x,
              y: vec.y / vec2.y,
              z: vec.z / vec2.z
          };
      default:
          throw new Error("[Vector] Invalid operation type.");
  }
}; 
vector.to_array = function(vec)
{
    return [
        vec.x,
        vec.y,
        vec.z
    ];
};
//end of april's vector stuff
function extrapolate_tick(headpos, velocity, tick_amt)
{
    return vector.operate(headpos, vector.operate(velocity, tick_amt * Globals.TickInterval(), 'x'), "+"); //:flushed:
}
var has_teleported = false; //global variables are a great evil
var should_teleport = false;
var last_teleport_time = 0.5;
var js_items = ["Misc", "JAVASCRIPT", "Script Items"];
function on_move()
{
    if(UI.GetValue(js_items, "Teleport on peek") && UI.IsHotkeyActive(js_items, "Toggle key"))
    {
        var is_dt_enabled = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
        var teleport_cooldown = UI.GetValue(js_items, "Teleport cooldown");
        if(Globals.Curtime() > last_teleport_time + teleport_cooldown)
        {
            if(is_dt_enabled && Exploit.GetCharge() < 0.170) //no point attempting to teleport if charge is too little
            {
                return;
            }
            if(should_teleport && !has_teleported)
            {
                if(is_dt_enabled)
                {
                    UI.ToggleHotkey("Rage", "Exploits", "Doubletap");
                    last_teleport_time = Globals.Curtime();
                    should_teleport = false;
                    has_teleported = true;
                    return;
                }
                else
                {
                    UI.ToggleHotkey("Rage", "Exploits", "Doubletap");
                    return;
                }
            }
            var local = Entity.GetLocalPlayer();
            var local_eyepos = Entity.GetEyePosition(local);
            var local_eyepos_vector = vector.new(local_eyepos);
            var local_velocity = Entity.GetProp(local, "CBasePlayer", "m_vecVelocity[0]");
            var local_velocity_vector = vector.new(local_velocity);
            var extrapolated_headpos = extrapolate_tick(local_eyepos_vector, local_velocity_vector, UI.GetValue(js_items, "Predicted ticks"));
            var enemies = Entity.GetEnemies();
            var teleport_mindamage = UI.GetValue(js_items, "Minimum damage to trigger teleport");
            if(!should_teleport && !has_teleported)
            {
                for(var i = 0; i < enemies.length; i++)
                {
                    if(Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i]))
                    {
                        var enemy_headpos = Entity.GetHitboxPosition(enemies[i], 0);
                        var enemy_pelvispos = Entity.GetHitboxPosition(enemies[i], 2); 
                        var trace = Trace.Bullet(local, enemies[i], vector.to_array(extrapolated_headpos), enemy_pelvispos);
                        var trace2 = Trace.Bullet(local, enemies[i], vector.to_array(extrapolated_headpos), enemy_headpos);
                        if(trace[1] > teleport_mindamage || trace2[1] > teleport_mindamage)
                        {
                            should_teleport = true;
                            break;
                        }
                    }
                }
            }
        }
        else if(has_teleported)
        {
            var should_attempt_to_reenable_dt = UI.GetValue(js_items, "Enable doubletap after teleport");
            var should_attempt_to_recharge = UI.GetValue(js_items, "Recharge after teleport");
            if(should_attempt_to_reenable_dt)
            {
                if(!is_dt_enabled)
                {
                    UI.ToggleHotkey("Rage", "Exploits", "Doubletap"); 
                }
                if(should_attempt_to_recharge)
                {
                     Exploit.Recharge(); 
                }
            }
             has_teleported = false;
        }
    }
}
function update_menu()
{
    var is_script_enabled = UI.GetValue(js_items, "Teleport on peek");
    UI.SetEnabled(js_items, "Toggle key", is_script_enabled);
    UI.SetEnabled(js_items, "Predicted ticks", is_script_enabled);
    UI.SetEnabled(js_items, "Teleport cooldown", is_script_enabled);
    UI.SetEnabled(js_items, "Minimum damage to trigger teleport", is_script_enabled);
    UI.SetEnabled(js_items, "Enable doubletap after teleport", is_script_enabled);
    var is_dt_shit_enabled = UI.GetValue(js_items, "Enable doubletap after teleport");
    UI.SetEnabled(js_items, "Recharge after teleport", is_script_enabled && is_dt_shit_enabled);
    UI.SetEnabled(js_items, "Render indicator", is_script_enabled);
}
function indicator()
{
    if(UI.GetValue(js_items, "Teleport on peek") && UI.GetValue(js_items, "Render indicator") && UI.IsHotkeyActive(js_items, "Toggle key"))
    {
        if(World.GetServerString() == "")
        {
            return;
        }
        if(!Entity.IsAlive(Entity.GetLocalPlayer()))
        {
            return;
        }
        var screen_size = Render.GetScreenSize();
        var teleport_cooldown = UI.GetValue(js_items, "Teleport cooldown");
        Render.String(30, screen_size[1] * 0.924, 1, "TP", (Globals.Curtime() > last_teleport_time + teleport_cooldown) ? [255 * (1.0 - Exploit.GetCharge()), 2555 * Exploit.GetCharge(), 0, 255] : [255, 0, 0, 200], 4);
    }   
}
function reset_shit() //sometimes the script fails after restarting a game
{
    has_teleported = false;
    should_teleport = false;
    last_teleport_time = 0.0;
}
Cheat.RegisterCallback("Draw", "update_menu");
Cheat.RegisterCallback("CreateMove", "on_move");
Cheat.RegisterCallback("round_start", "reset_shit");
Cheat.RegisterCallback("Draw", "indicator");








UI.AddLabel('_________________________________________');
	


UI.AddSliderFloat( "Aspect Ratio", 0.0, 5.0 );


function aspectratio( ) {
menu_val = UI.GetValue("Aspect Ratio");
string_menu_val = menu_val.toString();

Convar.SetString ("r_aspectratio", string_menu_val );
}

Cheat.RegisterCallback( "FrameStageNotify", "aspectratio" );




UI.AddCheckbox("Fix zoom sensitivity");
function zoomfix(){
    if (Cheat.FrameStage() == 5) {
        var zoom_sens = Convar.GetFloat("zoom_sensitivity_ratio_mouse");
        if (UI.GetValue("Misc", "JAVASCRIPT", "Scipt items", "Fix zoom sensitivity")) {
            var zoom_current_sens = Convar.GetFloat("sensitivity");
            var zoom_fov = UI.GetValue("Visual", "WORLD", "View", "Field of view");
            var fixed_zoom_sens = zoom_fov / 100 * zoom_current_sens;
            if (zoom_sens != fixed_zoom_sens) {
                Cheat.ExecuteCommand("zoom_sensitivity_ratio_mouse " + fixed_zoom_sens);
                Cheat.ExecuteCommand("zoom_sensitivity_ratio_joystick " + fixed_zoom_sens);
            }
        } else {
            if (zoom_sens != 1.0) {
                Cheat.ExecuteCommand("zoom_sensitivity_ratio_mouse " + 1.0);
                Cheat.ExecuteCommand("zoom_sensitivity_ratio_joystick " + 1.0);
            }
        }
    }
}
Cheat.RegisterCallback("FrameStageNotify", "zoomfix");

var jitter_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset") // memory jitter useless but need
var yaw_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset") // // memory yaw player useless but need
var pitch_cache = UI.GetValue("Anti-Aim", "Extra", "Pitch") // need

UI.AddHotkey("Legit AA on key") // add hotkey

function isActive(key) // simple api for check enable key
{
    return UI.IsHotkeyActive("Script items", key)
}



function legitaa() // function ok?
{
    localplayer_index = Entity.GetLocalPlayer( ); // need
    if (isActive("Legit AA on key")) { // if else
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180); // if enabled
            UI.SetValue ("Anti-Aim", "Extra", "Pitch", 0)
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(-20); // idk maybe this rotate legs work i will test working and it is work good
            AntiAim.SetRealOffset(-70);
            AntiAim.SetLBYOffset(10);
        }
        else // if disabled
        {
            UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Restrictions", "0");
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", jitter_cache);
            UI.SetValue ("Anti-Aim", "Extra", "Pitch", pitch_cache)
            AntiAim.SetOverride(0);
        }
}
function Main() // register function
{
    Cheat.RegisterCallback("CreateMove", "legitaa");
}
Main();
UI.AddCheckbox("Hide Chat");
function hide()
{


var i_chat = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hide Chat");
if (i_chat)
{
    Cheat.ExecuteCommand("cl_chatfilters 0")
}
else
{
    Cheat.ExecuteCommand("cl_chatfilters 63")
}


}
Cheat.RegisterCallback("CreateMove", "hide");


UI.AddCheckbox( "Enable chat logging" );

hitboxes = [
    'generic',
    'head',
    'chest',
    'stomach',
    'left arm',
    'right arm',
    'left leg',
    'right leg',
    '?'
];
var scriptitems = ("Misc", "JAVASCRIPT", "Script items");
var shots = 0;
var predicthc = 0;
var safety = 0;
var hitboxName = "";
var choked = 0;
var exploit = 0;
var logs = [];
var logsct = [];
var logsalpha = [];
function getHitboxName(index)
{
    switch (index)
    {
        case 0:
            hitboxName = "head";
            break;
        case 1:
            hitboxName = "head";
            break;
        case 2:
            hitboxName = "stomach";
            break;
        case 3:
            hitboxName = "stomach";
            break;
        case 4:
            hitboxName = "stomach";
            break;
        case 5:
            hitboxName = "chest";
            break;
        case 6:
            hitboxName = "chest";
            break;
        case 7:
            hitboxName = "left leg";
            break;
        case 8:
            hitboxName = "right leg";
            break;
        case 9:
            hitboxName = "left leg";
            break;
        case 10:
            hitboxName = "right leg";
            break;
        case 11:
            hitboxName = "left leg";
            break;
        case 12:
            hitboxName = "right leg";
            break;
        case 13:
            hitboxName = "left arm";
            break;
        case 14:
            hitboxName = "right arm";
            break;
        case 15:
            hitboxName = "left arm";
            break;
        case 16:
            hitboxName = "left arm";
            break;
        case 17:
            hitboxName = "right arm";
            break;
        case 18:
            hitboxName = "right arm";
            break;
        default:
            hitboxName = "body";
    }
    return hitboxName;
}
function HitgroupName(index) {
    return hitboxes[index] || 'body';
}

var target = -1;
var shots_fired = 0;
var hits = 0;
var lastUpdate = 0;
var logged = false;

function ragebot_fire() {
	predicthc = Event.GetInt("hitchance");
	safety = Event.GetInt("safepoint");
	hitboxName = getHitboxName(Event.GetInt("hitbox"));
	exploit = (Event.GetInt("exploit")+1).toString();
  target = Event.GetInt("target_index");
  shots_fired++;
  logged = false;
  lastUpdate = Globals.Curtime();
}

function hitlog() {
    var hit = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    if (attacker == Entity.GetLocalPlayer() && hit == target) hits++;

    var hittype = "Hit ";
    me = Entity.GetLocalPlayer();
    hitbox = Event.GetInt('hitgroup');
    target_damage = Event.GetInt("dmg_health");
    target_health = Event.GetInt("health");
    victim = Event.GetInt('userid');
    attacker = Event.GetInt('attacker');
    weapon = Event.GetString('weapon');
    victimIndex = Entity.GetEntityFromUserID(victim);
    attackerIndex = Entity.GetEntityFromUserID(attacker);
    name = Entity.GetName(victimIndex);
  	var simtime = Globals.Tickcount() % 17;

    var flags = "";

    if (exploit == 2)
      flags += "T";

    flags += "B";

    if (hitbox == 1)
      flags += "H";

  	if (safety == 1) {
  		safety = "true";
  	}
  	else {
  		safety = "false";
  	}

    if (weapon == "hegrenade")
      hittype = "Naded ";
    else if (weapon == "inferno")
      hittype = "Burned ";
    else if (weapon == "knife")
      hittype = "Knifed ";

    if (me == attackerIndex && me != victimIndex) {
		Cheat.PrintColor([9, 119, 222, 255], "[Nizkcord] ");
    if (hittype == "Hit ") {
        if (UI.GetValue("Script items", "Enable chat logging")) {
            Cheat.PrintChat(" \x08[\x0cNizkcord\x08] [\x0c"+shots.toString()+"\x08] "+hittype+name+"'s \x10"+HitgroupName(hitbox)+"\x08 for \x07"+target_damage.toString()+"\x08 ("+target_health.toString()+" remaining) aimed=\x10"+hitboxName+"\x08("+predicthc.toString()+"%%) safety=\x03"+safety+"\x08 (\x10"+flags+"\x08) (\x10"+simtime+"\x08:\x10"+exploit+"\x08)\n");
        }
      Cheat.Print("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining) aimed="+hitboxName+"("+predicthc.toString()+"%%) safety="+safety+" ("+flags+") ("+simtime+":"+exploit+")\n");
  		logs.push("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining) aimed="+hitboxName+"("+predicthc.toString()+"%%) safety="+safety+" ("+flags+") ("+simtime+":"+exploit+")");
    }
    else {
      Cheat.Print("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining) \n");
  		logs.push("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining)");
    }

		logsct.push(Globals.Curtime());
		logsalpha.push(255);
	}

  if (shots == 99)
    shots = 0;
  else
    shots++;

}

function removelogs() {
	if (logs.length > 6) {
		logs.shift();
		logsct.shift();
		logsalpha.shift();
	}

	if (logsct[0] + 6.5 < Globals.Curtime()) {
		logsalpha[0] -= Globals.Frametime() * 600;
		if (logsalpha[0] < 0) {
			logs.shift();
			logsct.shift();
			logsalpha.shift();
		}
	}
}

function item_purchase() {
	Cheat.PrintColor([1, 59, 255, 255], "[Nizkcord] ");
	Cheat.Print(Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))+" bought "+Event.GetString("weapon")+"\n");
	logs.push(Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))+" bought "+Event.GetString("weapon")+"");
	logsct.push(Globals.Curtime());
	logsalpha.push(255);
}

function onDraw() {
    if (!World.GetServerString()) return;
    var font = Render.AddFont("Lucida Console", 8, 0);


	for (i = 0; i < logs.length; i++) {
        Render.StringCustom(4, 4 + 13*i, 0, logs[i], [0, 0, 0, logsalpha[i]], font);
		Render.StringCustom(3, 3 + 13*i, 0, logs[i], [255, 255, 255, logsalpha[i]], font);
    }

    if (shots_fired > hits && (Globals.Curtime() - lastUpdate > 0.33)) {
      if (Globals.Curtime() - lastUpdate > 1) {
        shots_fired = 0;
        hits = 0;
      }
      if (!logged) {
        var simtime = Globals.Tickcount() % 16;
        logged = true;
        var issafe = "true";
        var reason = "?";
        if (safety == 0) {
          issafe = "false";
        }

		if (Entity.IsAlive(target) == false)
			reason = "death";
		else if (Entity.IsAlive(Entity.GetLocalPlayer()) == false)
			reason = "dead";
        else if (safety == true && predicthc < 76)
            reason = "spread";
        else if (safety == true && predicthc > 76)
            reason = "prediction error";

        var flags = "";

        if (exploit == 2)
          flags += "T";

          flags += "B";

      }
    }
}

function main() {
	Global.RegisterCallback("ragebot_fire", "ragebot_fire");
	Global.RegisterCallback("item_purchase", "item_purchase");
  Global.RegisterCallback("player_hurt", "hitlog");
	Global.RegisterCallback("Draw", "onDraw");
	Global.RegisterCallback("Draw", "removelogs");
}

main();















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































UI.AddLabel('_________________________________________');

var run = false;
var estimate = 0;
var firstBuy = 0;
var alias = [
    ["awp"],
    ["ssg08"],
    ["scar20", "g3sg1"]
]

function roundEnded() {
    run = true;
    estimate = Globals.Curtime()+Convar.GetInt("mp_round_restart_delay");
    firstBuy = 0;
}

function purchase(index) {
    alias[index].forEach(function(v) { Cheat.ExecuteCommand("buy "+v); })
    run = false;
}

function onDraw() {
    run && Globals.Curtime()+(Local.Latency()/1000) >= estimate && purchase(UI.GetValue.apply(this, dropdown));
}

function purchased() {
    if (firstBuy == 0) firstBuy = Globals.Curtime()-estimate;
    if (!Entity.GetEntityFromUserID(Event.GetInt("userid")) || firstBuy == -1) return;

    Cheat.Print("The first item of the round was purchased at " + firstBuy + "s, you purchased at " + (Globals.Curtime()-estimate) + "s.\n");
    firstBuy = -1;
}

var dropdown = UI.AddDropdown("Fastest Autobuy", ["AWP", "Scout", "Auto"]);

Cheat.RegisterCallback("round_end", "roundEnded");
Cheat.RegisterCallback("Draw", "onDraw");
Cheat.RegisterCallback("item_purchase", "purchased");


UI.AddLabel('_________________________________________');



// UI
var UIOnKey = "Blockbot Targetting Key";
var UIDoBlock = "Blockbot On Key";
var UIMode = "Blockbot Mode";
var UIBHop = "Blockbot BHop Retreat";

var MODE_MATCH_SPEED = "Match Speed";
var MODE_MAX_SPEED = "Maximum Speed";

var blockbotModes = [
    MODE_MATCH_SPEED,
    MODE_MAX_SPEED
];

UI.AddHotkey(UIDoBlock);
UI.AddHotkey(UIOnKey);
UI.AddDropdown(UIMode, blockbotModes);
UI.AddCheckbox(UIBHop);

// Shared
var Target = null;
var CrouchBlock = false;
var LocalPlayer = null;

// Less hard-baked stuff.
var types = {
    DEFAULT: "default",
    HOTKEY: "hotkey"
};

var entities = {
    CCSPlayer: 40
};

// Vector stuff
function print3(desc, vec) {
    Global.Print(desc + ": " + vec[0] + " | " + vec[1] + " | " + vec[2] + "\n");
}

function yaw3(v) {
    var x = v[0];
    var y = v[1];
    return Math.atan2(y, x) * 180 / Math.PI;
}

function dist3(a, b) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var bx = b[0];
    var by = b[1];
    var bz = b[2];

    var dx = ax - bx;
    var dy = ay - by;
    var dz = az - bz;

    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function sub3(a, b) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var bx = b[0];
    var by = b[1];
    var bz = b[2];

    return [ax - bx, ay - by, az - bz];
}

function add3(a, b) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var bx = b[0];
    var by = b[1];
    var bz = b[2];

    return [ax + bx, ay + by, az + bz];
}

function len3(v) {
    return dist3(v, [0, 0, 0]);
}

// UI helpers
function getUIVal(name, type) {
    type = type || "default";
    var value = null;

    if (type == types.HOTKEY) {
        value = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items", name);
    } else {
        value = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", name);
    }

    return value;
}

function setUIVal(name, value, type) {
    if (type == types.HOTKEY) {
        return UI.ToggleHotkey("Misc", "JAVASCRIPT", "Script Items", name);
    }

    return UI.SetValue("Misc", "JAVASCRIPT", "Script Items", name, value);
}

// Helpers
// I would expect to get a single float out of m_vecVelocity[0] but it actually gives me the array.
function getEntityVelocity(entity) {
    return Entity.GetProp(entity, "CBasePlayer", "m_vecVelocity[0]"); // This actually resolves to a vec3 instead of the first float of the vec3
}

function degToRad(deg) {
    return deg * Math.PI / 180;
}

// blockbot.
function OnFrameMain() {
    LocalPlayer = Entity.GetLocalPlayer();

    if (!LocalPlayer) {
        return;
    }

    if (Target && Entity.IsAlive(LocalPlayer) && Entity.IsAlive(Target)) {
        var NearPlayer_toScreen = Render.WorldToScreen(Entity.GetHitboxPosition(Target, 5));
        var targetHitboxPosition = Entity.GetHitboxPosition(Target, 0);
        var playerOrigin = Entity.GetRenderOrigin(LocalPlayer);
        var targetOrigin = Entity.GetRenderOrigin(Target);
        var color = null;

        if ((targetHitboxPosition[2] < playerOrigin[2]) && dist3(playerOrigin, targetOrigin) < 100) {
            CrouchBlock = true;
            color = [255, 255, 0, 255];
        } else {
            CrouchBlock = false;
            color = [255, 0, 0, 255];
        }

        if (NearPlayer_toScreen[0] != null && NearPlayer_toScreen[1] != null) {
            Render.String(NearPlayer_toScreen[0] - (Render.TextSize("x")[0] / 2), NearPlayer_toScreen[1], 0, "x", color);
        }
    }

    if (!getUIVal(UIOnKey, types.HOTKEY) || !Entity.IsAlive(LocalPlayer)) {
        //Global.Print( "Key not pressed or not alive; Bail...\n" );
        return;
    }

    if (getUIVal(UIOnKey, types.HOTKEY)) {
        //Global.Print( "No target selected, looking for victims...\n" );
        var cEntities = Entity.GetEntitiesByClassID(entities.CCSPlayer);

        for (var i = 0; i < cEntities.length; i++) {
            var cEntity = cEntities[i];

            if (cEntity != LocalPlayer && Entity.IsAlive(cEntity) && Entity.IsTeammate(cEntity)) {
                if (!Target) {
                    Target = cEntity;
                    Global.PrintChat("Selected #" + Target + " - " + Entity.GetName(Target) + " as Target.\n");
                } else {
                    var playerOrigin = Entity.GetRenderOrigin(LocalPlayer);
                    var entityOrigin = Entity.GetRenderOrigin(cEntity);
                    var targetOrigin = Entity.GetRenderOrigin(Target);

                    if (dist3(playerOrigin, targetOrigin) > dist3(playerOrigin, entityOrigin)) {
                        // If entity is closer than target, use entity as target
                        Target = cEntity;
                        Global.PrintChat("Selected #" + Target + " - " + Entity.GetName(Target) + " as Target (closer than previous target).\n");
                    }
                }
            }
        }
    } else if (!getUIVal(UIOnKey, types.HOTKEY) || !Entity.IsAlive(Target)) {
        //Global.Print( "Key not pressed or target not alive; De-selecting...\n" );
        Target = null;
    }
}

function OnCreateMoveMain() {
    if (Target && getUIVal(UIDoBlock, types.HOTKEY)) {
        var LocalAngles = Global.GetViewAngles();
        var VecForward = sub3(Entity.GetRenderOrigin(Target), Entity.GetRenderOrigin(LocalPlayer));
        var otherYaw = yaw3(VecForward);
        var TargetSpeed = len3(getEntityVelocity(Target));

        if (CrouchBlock) {
            var cmdMove = [0, 0, 0];

            if (blockbotModes[getUIVal(UIMode)] == MODE_MATCH_SPEED) {
                cmdMove[0] = ((Math.sin(degToRad(LocalAngles[1])) * VecForward[1]) + (Math.cos(degToRad(LocalAngles[1])) * VecForward[0])) * 10;
                cmdMove[1] = ((Math.cos(degToRad(LocalAngles[1])) * -VecForward[1]) + (Math.sin(degToRad(LocalAngles[1])) * VecForward[0])) * 10;
            } else if (blockbotModes[getUIVal(UIMode)] == MODE_MAX_SPEED) {
                cmdMove[0] = ((Math.sin(degToRad(LocalAngles[1])) * VecForward[1]) + (Math.cos(degToRad(LocalAngles[1])) * VecForward[0])) * 200;
                cmdMove[1] = ((Math.cos(degToRad(LocalAngles[1])) * -VecForward[1]) + (Math.sin(degToRad(LocalAngles[1])) * VecForward[0])) * 200;
            }

            UserCMD.SetMovement(cmdMove);
        } else {
            var cmdMove = [0, 0, 0];
            var DiffYaw = otherYaw - LocalAngles[1];

            if (DiffYaw > 180) {
                DiffYaw = DiffYaw - 360;
            } else if (DiffYaw < -180) {
                DiffYaw = DiffYaw + 360;
            }

            if (TargetSpeed > 285 && getUIVal(UIBHop)) {
                cmdMove[0] = -Math.abs(TargetSpeed);
            }

            if (blockbotModes[getUIVal(UIMode)] == MODE_MATCH_SPEED) {
                if (Math.abs(DiffYaw) > 0.75) {
                    cmdMove[1] = 450 * -DiffYaw;
                }
            } else if (blockbotModes[getUIVal(UIMode)] == MODE_MAX_SPEED) {
                if (DiffYaw > 0.25) {
                    cmdMove[1] = -450;
                } else if (DiffYaw < -0.25) {
                    cmdMove[1] = 450;
                }
            }

            UserCMD.SetMovement(cmdMove);
        }
    }
}
Global.RegisterCallback("Draw", "OnFrameMain");
Global.RegisterCallback("CreateMove", "OnCreateMoveMain");






UI.AddLabel('_________________________________________');







//--------------------------------------------------------//
//                                                        //
//            ▀▀█▀▀ █   █  ▀  █▀▀ ▀▀█▀▀ █ █               //
//              █   █▄█▄█ ▀█▀ ▀▀█   █   █▄█▄              //
//              ▀    ▀ ▀  ▀▀▀ ▀▀▀   ▀   ▄▄▄█              //
//                                                        //
//--------------------------------------------------------//
//                     Update 1.1                         //
//--------------------------------------------------------//
// Improvement to lag                                     //
// New design                                             //
// Added a Checkbox to see the nades all over the map     //
// Added new hvh molly pos for the maps -->               //
// shortdust, mirage, overpass                            //
//--------------------------------------------------------//--------------------------------------------------//
//                          |                             // A lot of thanks for Louisiana for helping me     //
//                          V                             // to make auto throw                               //
//--------------------------------------------------------//--------------------------------------------------//
//                     Update 1.2                         //
//--------------------------------------------------------//
// Added Automatic Throw                                  //
// Added Hotkey for throw                                 //
// Changed the text, now looks better than before         //
// Added new nade pos for the maps -->                    //
// de_train, de_mirage, de_cbble                          //
//--------------------------------------------------------//
//                          |                             //
//                          V                             //
//--------------------------------------------------------//

UI.AddCheckbox("Grenade Helper Enable")
UI.AddCheckbox("Automatic Throw")
UI.AddHotkey("Automatic Throw Hotkey")
UI.AddColorPicker("Grenade Helper Color")
UI.AddCheckbox("Render nade on all map")


var delays = []

function Delay(delay, func, times) {
    this.delay = delay;
    this.resume = Globals.Curtime()+delay;
    this.func = func;
    this.times = 0;
    this.max = times || 1;
    delays.push(this);
}

Delay.prototype.run = function() {
    this.func();
    this.times++;
    this.resume += this.delay;
    return this.times >= this.max;
}

function checkDelays() {
    currTime = Globals.Curtime();

    delays.forEach(function(delay, index) {
        currTime >= delay.resume && delay.run() && delays.splice(index, 1);
    })
}

var coords

function vector_sub(vec1, vec2) {
  return [
    vec1[0]-vec2[0],
    vec1[1]-vec2[1],
    vec1[2]-vec2[2]
  ];
}

function getAngles(localPos, pos) {
  newPos = vector_sub(pos, localPos);
  xyDist = Math.sqrt((newPos[0]*newPos[0] + newPos[1]*newPos[1]));
  yaw = Math.atan2(newPos[1], newPos[0]) * 180 / Math.PI;
  pitch = Math.atan2(-newPos[2], xyDist) * 180 / Math.PI;
  roll = 0;
  angles = [pitch, yaw, roll];
  return angles;
}


function atv(pitch, yaw) {

  return [Math.cos(pitch * Math.PI / 180) * Math.cos(yaw * Math.PI / 180), Math.cos(pitch * Math.PI / 180) * Math.sin(yaw * Math.PI / 180), -Math.sin(pitch * Math.PI / 180)]

}

  var scriptitems = ["Misc", "JAVASCRIPT", "Script Items"];

  function menu_cb() {
    var enabled = UI.GetValue(scriptitems, "Grenade Helper Enable");
    UI.SetEnabled(scriptitems, "Automatic Throw", enabled);
    UI.SetEnabled(scriptitems, "Automatic Throw Hotkey", enabled);
    UI.SetEnabled(scriptitems, "Grenade Helper Color", enabled);
    UI.SetEnabled(scriptitems, "Render nade on all map", enabled);
  }

  function grenade_helper() {
    menu_cb();
  }

function dis(a, b) {

  var ax = a[0]

  var ay = a[1]

  var az = a[2]

  var bx = b[0]

  var by = b[1]

  var bz = b[2]

  var dx = ax - bx

  var dy = ay - by

  var dz = az - bz

  return Math.sqrt( dx * dx + dy * dy + dz * dz )

}

function alp(c, a) {

  return [c[0], c[1], c[2], a]

}

test = 0
movement_autothrow = []
function draw() {

  weaponnames = {"flashbang": [43], "molotov": [46, 48], "smoke": [45], "nade": [44]}

  weapon = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CEconEntity", "m_iItemDefinitionIndex")

  world  = World.GetMapName()

  color  = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Grenade Helper Color")

  var enabled = UI.GetValue(scriptitems, "Grenade Helper Enable");

  if (enabled)
  {
    if(!color) color = [255, 255, 255, 255]

    if([46, 48, 45, 43, 44].indexOf(weapon) < 0) return

    // ["", "", "",  ],
    // ["", ,[]],

    if(world == "de_cbble")
    {
      movement_autothrow = [
      ["Boost Corner1", 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 270.74334716796875 ],[ 450, 0, 270.7424011230469 ],[ 450, 0, 270.7424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 245.74240112304688 ]]],


      ]
    }
    if(world == "de_mirage")
    {
      movement_autothrow = [
      ["Under", 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["Window", 10,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["One-Way Ramp", 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ]]],
      ]
    }
    if(world == "de_dust2")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_inferno")
    {
      movement_autothrow = [
      ["Pit" , 8,[[ 450.02211380004883, 0, 0 ],[ 450.65053939819336, 0, 0 ],[ 450.90695571899414, 0, 0 ],[ 450.53515625, 0, 0 ],[ 450.393945693969727, 0, 0 ],[ 450.5786018371582, 0, 0 ],[ 450.5311737060547, 0, 0 ],[ 450.2818603515625, 0, 0 ],[ 450.48575592041016, 0, 0 ],[ 450.93397521972656, 0, 0 ],[ 450.8269958496094, 0, 0 ],[ 450.3787612915039, 0, 0 ],[ 450.398193359375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ]]],
      ["Mid", 1,[[ 1.125562559813261, 0, 0 ],[ 1.1255620624870062, 0, 0 ],[ 1.12556217238307, 0, 0 ],[ 1.1255620624870062, 0, 0 ],[ 1.1255620624870062, 0, 0 ],[ 1.124624202027917, 0, 0 ],[ 1.12556217238307, 0, 0 ],[ 21.543969690799713, 0, 0 ],[ 36.43856465816498, 0, 0 ],[ 66.22589480876923, 0, 0 ],[ 81.11870193481445, 0, 0 ],[ 109.75620746612549, 0, 0 ],[ 122.38414692878723, 0, 0 ],[ 133.98439383506775, 0, 0 ],[ 133.9861981868744, 0, 0 ],[ 144.6437792778015, 0, 0 ],[ 163.4331409931183, 0, 0 ],[ 163.4331409931183, 0, 0 ],[ 179.29327392578125, 0, 0 ],[ 186.26964616775513, 0, 0 ],[ 192.68085193634033, 0, 0 ],[ 198.56950902938843, 0, 0 ],[ 192.68281269073486, 0, 0.00098419189453125 ],[ 208.95178318023682, 0, 0 ],[ 213.5128688812256, 0, 0 ],[ 221.56566047668457, 0, 0 ],[ 231.35248279571533, 0, 0 ],[ 234.10069465637207, 0, 0 ],[ 236.62394905090332, 0, 0 ],[ 238.94390296936035, 0, 0 ],[ 238.94390201568604, 0, 283.24334716796875 ],[ 238.94586277008057, 0, 283.2424011230469 ],[ 254.51007843017578, 0, 270.7424011230469 ]]],
      ["Fountain", 12,[[ 450.900423407554626, 0, 0 ],[ 450.73103332519531, 0, 0 ],[ 450.900423407554626, 0, 0 ],[ 450.3917555809021, 0, 0 ],[ 450.3917555809021, 0, 0 ],[ 450.3917555809021, 0, 0 ],[ 450.22231674194336, 0, 0 ],[ 450.08318901062012, 0, 0 ],[ 450.41434955596924, 0, 0 ],[ 450.15271377563477, 0, 0 ],[ 450.7157211303711, 0, 0 ],[ 450.5017385482788, 0, 0 ],[ 450.57388305664063, 0, 0 ],[ 450.9901828765869, 0, 0 ],[ 450.41479682922363, 0, 0 ],[ 450.06400680541992, 0, 0 ],[ 450.81544876098633, 0, 0 ],[ 450.09961318969727, 0, 0 ],[ 450.41479682922363, 0, 0 ],[ 450.81321144104004, 0, 270.7433776855469 ],[ 450.81321144104004, 0, 270.7433776855469 ],[ 450.18292808532715, 0, 245.74240112304688 ],[ 450.18292808532715, 0, 245.74240112304688 ]]],
      ["Graveyard",1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 258.2433776855469 ],[ 450, 0, 233.24337768554688 ],[ 450, 0, 220.74337768554688 ],[ 450, 0, 195.74337768554688 ],[ 450, 0, 183.24337768554688 ],[ 450, 0, 158.24337768554688 ],[ 450, 0, 145.74337768554688 ]]],
      ["Box" , 1 ,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["Box A" , 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 270.7433776855469 ],[ 450, 0, 258.2433776855469 ],[ 450, 0, 245.74240112304688 ],[ 450, 0, 220.74240112304688 ],[ 450, 0, 208.24240112304688 ],[ 450, 0, 195.74240112304688 ],[ 450, 0, 170.74240112304688 ]]],
      ["Archade", 12,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 270.7433776855469 ],[ 450, 0, 270.7433776855469 ],[ 450, 0, 245.74337768554688 ],[ 450, 0, 245.74337768554688 ],[ 450, 0, 233.2433624267578 ]]],
      ] 

    }
    if(world == "de_nuke")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_overpass")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_train")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_cache")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_shortdust")
    {
      movement_autothrow = [
      ["Box", 4,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["One-Way Car", 8,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],

      ]
    }

    if(world == "de_cbble")        coords = [["Fountain", "Throw", "nade", 280.924866, -80.187576, -12.565859, -8.844892, -94.796295 ], ["Rock", "Throw", "molotov", 591.136230, -132.038406, 0.031250, -9.724643, -145.176041 ], ["Boost Corner", "Throw", "molotov", 47.968750, -16.031250, -23.177315, -31.504919, -124.580345 ], ["Boost Corner1", "Run + JumpThrow", "molotov", -94.259033, -239.954468, -31.968748, -18.909958, 91.239822 ],[ "One-way Long", "Crouch + Right click", "smoke", 272.031250, -291.031250, -63.906189, -30.971577, 17.418360 ],[ "B Long", "JumpThrow", "smoke", -1540.973389, -1226.978027, -25.199188, -50.672855, 41.294445 ],[ "Matrix", "Throw", "smoke", -1864.968750, -1611.968750, 96.093810, -11.221231, 136.023499 ],[ "B Long", "Throw", "smoke", -288.031250, 1020.970520, 128.093811, -51.547066, -53.167721 ],[ "Truck - front", "Throw", "smoke", -3295.975586, 79.968750, -29.906188, -36.680634, -52.524323 ],[ "Truck - right", "Throw", "smoke", -3168.031250, 79.968750, -29.906188, -47.158157, -65.556221 ],[ "Grass", "Throw", "smoke", -3167.270508, 584.685120, 0.093811, -55.144222, -61.434193 ],[ "Skyfall", "Throw", "smoke", -752.031250, -80.031250, 128.093811, 5.361639, -119.332336 ],[ "Hut - right", "Throw", "smoke", -155.970673, -16.010778, -31.906188, -50.869473, -69.637550 ],[ "Hut - left", "Throw", "smoke", -340.020111, -80.031250, -31.907466, -53.921837, -52.166801 ],[ "Sandwich", "Throw", "smoke", 47.968750, -16.031250, -23.114716, -81.378204, -89.289169 ],[ "Fountain", "Throw", "smoke", -418.514893, -95.749924, -32.562836, -75.323563, -61.343159 ],[ "B Door", "Throw", "smoke", -558.031250, -42.535999, 0.093811, -62.173512, -100.720726 ],[ "Balcony", "JumpThrow", "smoke", -2534.005371, -272.031250, -184.407272, -17.127037, -65.392319 ],[ "A Door", "Walk + Throw", "smoke", -3346.178711, 455.572449, 0.093811, -40.327240, -45.610413 ],[ "A Door", "Run + Throw", "smoke", -2989.968750, -944.371948, 32.093811, -12.160514, -4.402364 ],[ "Skyfall", "Throw", "flashbang", -780.031250, 111.931717, 128.093811, -4.768500, -92.183800 ],[ "Skyfall", "Throw", "flashbang", -590.995239, 434.631622, -0.906188, -17.854057, -108.593758 ],[ "Wood", "Throw", "flashbang", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882 ],[ "Balcony", "Run + Throw", "molotov", -2989.968750, -944.036682, 32.093811, -15.675012, -32.634476 ],[ "Wood", "Throw", "molotov", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882 ]]

    if(world == "de_mirage")       coords = [["One-Way Ramp", "Run + JumpThrow", "molotov", -34.403679, -1916.279053, -39.968750, 2.595078, 71.391121 ],["Car", "Throw", "molotov", -1182.872070, 679.580505, -79.968750, -9.450004, 174.482330 ],["Under", "Walk + Throw", "molotov", -34.409924, 822.263123, -135.968750, -8.459991, -150.967743 ],["One-Way Site", "Throw", "molotov", -538.933411, -1309.055664, -159.968750, -11.109911, -75.805000 ],["One-Way Box", "JumpThrow", "molotov", 663.968750, -1128.005005, -127.968750, 0.395009, -136.764679 ],["Window", "Run + Throw", "molotov", 334.825684, -149.313019, -165.968750, -17.259995, -152.143692 ],["Ramp", "Throw", "molotov", -1119.997314, -1527.024292, -156.076477,-17.370033, 0.035920],["Stairs", "Throw", "molotov", 499.251617, -1574.105713, -261.590881, -25.290028, 176.995941 ],[ "Window Mid", "JumpThrow", "smoke", 1423.964355, -248.026840, -167.906188, -25.723558, -170.518921 ],[ "Connector", "JumpThrow ", "smoke", 1135.968750, 647.996033, -261.322754, -34.518116, -140.291428 ],[ "Catwalk", "Throw", "smoke", 1423.997803, 71.985359, -112.840103, -32.653351, -163.530762 ],[ "One-way Mid", "Right click", "smoke", 369.960144, -720.522705, -162.412476, 35.376301, 124.135780 ],[ "Short", "Run + Throw", "smoke", 399.998444, 4.656666, -203.571350, -22.060497, -134.482208 ],[ "Window Mid", "Throw", "smoke", -624.243530, 615.992065, -78.914246, -51.595604, -109.421127 ],[ "Kitchen door", "Throw", "smoke", -2325.227783, 811.800659, -119.773079, -14.883981, -94.343178 ],[ "Short", "Throw", "smoke", -160.031250, 887.968750, -135.265563, -44.269619, -134.435654 ],[ "Kitchen window", "Throw", "smoke", -835.001404, 615.070190, -79.065735, -63.789238, -146.581238 ],[ "Short", "Throw", "smoke", 341.836212, -620.153992, -163.282486, -23.134167, 164.957458 ],[ "Connector + Jungle", "Throw", "smoke", 815.999512, -1457.235596, -108.906189, -26.797188, -174.613022 ],[ "Stairs", "Throw", "smoke", 1148.225586, -1183.999756, -205.509155, -41.168613, -165.354019 ],[ "Window Mid", "Run + Throw", "smoke", 1391.968750, -1011.236084, -167.906188, -42.603077, 172.188919 ],[ "Stairs", "JumpThrow", "smoke", -90.864479, -1418.000244, -115.906189, -31.895834, -62.464306 ],[ "Fireboxes", "JumpThrow", "smoke", 1391.968750, -930.076294, -167.906188, -21.037338, -151.204865 ],[ "One-way", "Throw", "smoke", 457.968750, -1711.996582, -240.886871, -10.477256, 133.144836 ],[ "Bombsite A", "Throw", "smoke", 815.998718, -1272.017944, -108.906189, -32.654591, -149.503601 ],[ "CT Spawn", "JumpThrow", "smoke", 1257.861938, -871.968750, -143.906188, -21.318205, -144.344666 ],[ "One-way", "Throw", "smoke", -1209.077515, -873.270447, -167.906188, -48.526600, 67.790833 ],[ "One-way", "Right click", "smoke", -964.056885, -2489.520264, -167.913391, -41.926632, -10.765607 ],[ "Ramp", "JumpThrow", "smoke", -2026.397583, -2029.968750, -299.060150, -15.312100, 12.573707 ],[ "One-way Kitchen", "Throw", "smoke", -2600.019287, 535.973022, -159.906188, -16.582365, -50.818062 ],[ "B Apps", "Throw", "flashbang", -2114.031250, 830.582214, -121.516441, -69.514664, 38.815456 ],[ "Connector", "Throw", "flashbang", -496.031250, -1309.031250, -159.906188, -65.176048, -10.261290 ],[ "Fireboxes", "Throw", "molotov", -31.432693, -1418.005371, -167.906188, -19.768339, -138.115036 ],[ "Tetris", "Throw", "molotov", -364.996552, -2173.031250, -176.139190, -26.004026, 44.655296 ]]

    if(world == "de_dust2")        coords = [[ "B Entrance", "Throw", "smoke", -1846.553223, 1232.569824, 32.496025, -8.613732, 118.773392 ],[ "CT Mid", "Throw", "smoke", -538.606567, 1382.031250, -111.957108, -35.360550, 53.845985 ],[ "Xbox", "Throw", "smoke", 229.130554, 112.497559, 5.215744, -40.624023, 108.758316 ],[ "Long Corner", "Throw", "smoke", 222.664124, -87.978210, 9.093811, -46.250572, 48.164497 ],[ "CT Spawn", "Run + Throw", "smoke", 860.031250, 790.031250, 3.900847, -23.414322, 43.616291 ],[ "Short (Close)", "Throw", "smoke", 489.998535, 1446.031250, 2.660506, -5.677320, 88.280685 ],[ "Long Gate", "Throw", "smoke", 1752.049561,2046.932739, 0.365111, -33.430305, -130.546280 ],[ "Lower Mid", "Throw", "smoke", -242.031250, 2278.887695, -119.931587, -32.687481, -123.649094 ],[ "Upper Tunnel", "Throw", "smoke", -985.452942, 2553.223877, 1.318862, -26.764244, -143.848251 ],[ "Bombsite B", "Throw", "flashbang", -1273.968750, 2575.968750, 67.353363, -42.043125, 1.218936 ],[ "Bombsite B", "Throw", "molotov", -760.031250, 2066.031250, -45.182931, -23.497030, 132.684860 ]]

    if(world == "de_inferno")      coords = [["Graveyard", "Run + JumpThrow", "molotov", 2017.503174, 1225.968750, 178.031250, -33.659977, -64.684898],["Mid", "Run + JumpThrow", "molotov", 2343.707520, 568.729492, 145.928940, -38.500111, -178.690613],["Fountain", "Run + JumpThrow", "molotov", 362.636536, 1726.205933, 128.376053, -39.875027, 95.339996],["Triple Box", "Throw", "molotov", 877.968750, 2393.092041, 150.504181, -13.529912, 168.994965 ],["Library", "JumpThrow", "molotov", 1314.032593, 797.901489, 153.586700, -26.509958, 10.154735 ] ,["Box", "Run + Throw", "molotov", 1364.515015, 277.541809, 135.426834, -17.755112, -48.144848],["Archade", "Run + JumpThrow", "molotov", 1287.723633, 434.031250, 125.995117, -36.354294, 55.140560],["Default", "JumpThrow", "molotov", 1961.373169, 1225.968750, 175.031250, -34.145012, -79.280289],["Stove", "Throw", "molotov", 698.401245, -267.968750, 105.031250, -21.614807, 32.599926 ],[ "Mid", "Run + Throw", "smoke", -857.968750, 449.902283, -31.604805, -44.401531, 1.405892 ], ["Pit", "Run + Throw", "molotov", 2105.090088, 1168.412354, 165.084000, -13.804811, -63.900101 ], [ "Box A", "Run + JumpThrow", "molotov", 2079.774658, 1225.998535, 180.093811, -37.500053, -89.940086], [ "Coffins", "Throw", "smoke", 338.871887, 1650.802856, 122.093810, -50.093639, 84.572739 ],[ "B Entrance", "Throw", "smoke", 460.464905, 1828.470825, 136.182693, -25.443281, 86.280159 ],[ "CT Spawn", "Throw", "smoke", 119.999580, 1587.966187, 113.307662, -34.798424, 56.149929 ],[ "Long (Deep)", "Run + Throw", "smoke", 274.681335, -224.627777, 88.093810, -41.052132, 31.799410 ],[ "Pit (Crack)", "Throw", "smoke", 704.160339, 11.968750, 88.797089, -52.337799, -2.135024 ],[ "Short (Deep)", "Throw", "smoke", 697.511902, -242.261810, 91.093810, -53.097946, 16.442726 ],[ "Library to A", "Throw", "smoke", 960.900330, 434.006409, 88.093810, -49.863846, 13.159984 ],[ "Pit to Hay", "Throw", "smoke", 726.031250, 220.962921,94.029999, -55.241890, -8.699924 ],[ "Long", "Throw", "smoke", 491.936829, -267.968750, 88.093810, -42.024933, 45.854645 ],[ "Bombsite B", "Throw", "smoke", 1971.687988, 2636.702393, 128.093811, -39.996227, 175.975357 ],[ "Connector", "Throw", "smoke", 726.031250, 288.680084, 96.093810, -43.560978, 41.450943 ],[ "One-way", "Throw", "smoke", 2631.968750, -16.031250, 84.093810, -5.692367, -179.128860 ],[ "Balcony", "Throw", "smoke", 1913.227295, 1225.968750, 174.093811, -46.497322, -87.005005 ],[ "B Entrance", "Throw", "flashbang", 498.968750, 2444.031250, 160.093811, 1.748943, 142.807571 ],[ "Banana", "Throw", "flashbang", 610.968750, 1873.031250, 134.252365, -44.186985, -0.872295 ],[ "Short", "Walk + Throw", "flashbang", 1275.968750, -111.968750, 256.093811, 9.454458, 116.691383 ],[ "Bombsite A", "Crouch + Throw", "flashbang", 1329.031250, -365.989349, 256.093811, -29.733957, -22.831499 ],[ "B Plant", "JumpThrow", "molotov", 929.176636, 3295.995117, 144.093811, -45.887463, -131.960571 ],[ "3s", "Throw", "molotov", 999.982422, 1878.530640, 149.329788, -26.647552, 141.132538 ],[ "Coffins", "Throw", "molotov", 664.968750, 1873.031250, 168.093811, -24.272781, 96.641022 ]]

    if(world == "de_nuke")         coords = [[ "Hangar", "Throw", "smoke", -164.092941, -1954.733765, -415.916107, -13.613587, 1.278547 ],[ "Red container", "Throw", "smoke", -533.003357, -833.215759, -193.634827, -30.904673, -43.816589 ],[ "Between containers", "Run + Throw", "smoke", -423.996399, -1753.002075, -415.914856, -2.624159, -50.804165 ],[ "T Outside", "JumpThrow", "smoke", 1664.031250, -280.002014, -351.906250, -25.048063, -135.212463 ]]

    if(world == "de_overpass")     coords = [["Stairs", "Run + JumpThrow", "molotov", -3750.460938, -250.358826, 520.609863, 5.050490, 35.776577 ],["Barrels", "Run + Throw", "molotov", -430.186157, -1551.968750, 150.031250, -16.164569, 101.556863 ],["Heaven", "Walk + JumpThrow", "molotov", -856.031311, -639.968750, 105.031250, 4.120225, 128.027786 ],["Barrels", "Throw", "molotov", -1580.517578, -710.171814, 135.334778, -14.950030, 60.188404 ],["Water", "Throw", "molotov", -1276.541260, -964.551147, 10.933800, -23.484703, 82.194580],[ "Toilet entrance", "Run + Throw", "smoke", -730.031250, -2225.143799, 240.093811, -51.612926, 149.045975 ],[ "B Bridge", "Throw", "smoke", -617.486389, -1509.028809, 144.093811, -48.988934, 113.071342 ],[ "B Center", "Throw", "smoke", -525.982300, -1551.984375, 144.093811, -43.807911, 110.431473 ],[ "Barrels to Pillar", "Throw", "smoke", -613.014099, -1082.017212, 42.160416, -29.337307, 99.340714 ],[ "B Center", "Throw", "smoke", -1567.968750, -1087.984619, 0.093811, -30.278185, 74.646019 ],[ "Monster to Pillar", "Throw", "smoke", -1645.986938, -1087.982300, 96.093810, -20.015800, 55.835869 ],[ "Heaven", "Throw", "smoke", -1559.968750, -728.785583, 52.574355, -33.446209, 96.293686 ],[ "B Bridge", "Throw", "smoke", -1559.999390, -361.285339, 32.421722, -43.693123, 21.193089 ],[ "Heaven", "Throw", "smoke", -2174.002441, -1151.968750, 398.197235, -26.368107, 71.543701 ],[ "Long to Boxes", "Throw", "smoke", -2025.534058, -865.001343, 395.427856, -28.313963, 114.564102 ],[ "Bank", "Throw", "smoke", -2162.000488, -519.968750, 391.460358, -29.749702, 100.836487 ],[ "Truck to Bank", "Throw", "smoke", -3612.545654, -177.626740, 512.791992, -40.392601, 51.259613 ],[ "Boxes to Truck", "Throw", "smoke", -3540.031250, -381.968750, 528.080200, -14.256992, 41.849758 ],[ "Truck", "Throw", "smoke", -2351.968750, -815.968750, 391.089905, -34.683971, 81.500427 ],[ "Trash", "Throw", "smoke", -2351.968750, -414.031250, 388.562317, -60.588089, 73.825958 ],[ "Trash", "Throw", "smoke", -3383.369629, 35.247875, 516.906006, -18.035419, 31.699080 ],[ "Long", "Crouch + Throw", "smoke", -1993.398926, 537.698242, 475.093810, -28.677984, -169.596695 ],[ "Monster", "Throw", "smoke", -1926.860962, 1311.968750, 355.030579, -46.200985, -40.010532 ],[ "One-way", "Throw", "smoke", -2191.968750, 1311.968750, 356.093811, -8.861760, -55.390415 ],[ "One-way", "Right click", "smoke", -1826.375610, 629.178894, 256.093811, 26.580435, -17.457275 ],[ "One-way", "Throw", "smoke", -2012.968750, -1231.968750, 240.093811, 16.218643, 63.144173 ],[ "Short B", "Throw", "smoke", -2115.841309, 992.920288, 480.093810, -22.936214, -57.690578 ],[ "Bombsite A", "Throw", "flashbang", -2604.023926, 1102.215088, 480.093810, -24.090078, 70.938210 ],[ "Barrels", "Throw", "molotov", -1580.023315, -480.767883, 136.093811, -20.147602, 53.764153 ],[ "Bombsite B", "Throw", "molotov", -1399.968750, -139.998840, 0.093811, -15.444187, 63.084324 ]]

    if(world == "de_train")        coords = [["B site", "Throw", "molotov", -1085.563477, -954.344543, -55.968750, -2.244908, -11.982774 ],["Default", "Walk + Throw", "molotov", 1054.867188, 426.185638, -215.982330, -14.129807, -158.603027 ],["Heaven", "Throw", "molotov", 132.170197, 499.088257, -219.968750, -30.679949, -56.869923 ],["Site", "Run + Throw", "molotov", -338.848297, 307.854095, -215.968750, -29.580017, -36.570026 ],[ "B Upper", "Throw", "smoke", -1055.968750, -1607.969116, -151.906188, -9.076089, -21.028521 ],[ "B Lower", "Throw", "smoke", -1159.978027, -1088.112549, -95.909508, -9.122071, 13.307947 ],[ "Blue to Bombsite", "Run + Throw", "smoke", -1155.979004, -1301.504395, -95.906189, -15.857571, 38.882820 ],[ "Connector", "Run + Throw", "smoke", -1159.999634, -1048.001709, -95.906189, -11.023086, 5.091055 ],[ "Ivy (right)", "Throw", "smoke", 1388.426270, 1446.000488, -223.906189, -6.188282, -95.524574 ],[ "Ivy (left)", "Run + Throw", "smoke", 1535.968750, 1775.968750, -223.906189, -9.818258, -112.486588 ],["Bombsite A to Connector", "Both buttons", "smoke", -655.968750, -399.892731, 16.093811, -46.002502, 10.890710 ],[ "Blue to Red train", "Throw", "smoke", -645.479370, 1697.721924, -209.906189, -41.564690, -65.086685 ],[ "Electric box", "Throw", "smoke", -481.865631, 1725.011597, -209.906189, -45.937080, -78.790627 ],[ "Blue train (Left)", "Throw", "smoke", -555.031250, 1262.031250, -212.532227, -68.096550, -50.974125 ],[ "Green to Red train", "Throw", "smoke", -838.162292, 1268.024414, -222.906189, -37.604507, -42.064575 ],[ "Ivy to Green train", "Throw", "smoke", -640.027832, -583.969666, 16.093811, -44.699406, 32.218452 ],[ "Bombsite A to Red train", "Throw", "smoke", -453.358459, 1286.284668, -86.490753, -25.130558, -58.731426 ],[ "Main", "Throw", "smoke", 1021.096924, -254.988556, -215.906189, -38.494926, 154.562332 ],[ "Bombsite A", "Run + Throw", "flashbang", 400.031250, -420.031250, -211.777573, -28.859020, -89.674629 ],[ "Blue train (Back)", "Run + Throw", "molotov", -790.028748, 375.928741, -215.906189, -11.270589, 27.332729 ]]

    if(world == "de_cache")        coords = [[ "Ventsroom", "Throw", "smoke", 837.744141, -872.015564, 1614.093750, -15.362073, 177.850555 ],[ "Headshot", "Throw", "smoke", 960.031250, -1463.968750, 1644.093750, -26.400745, 162.851730 ],[ "B Center", "Throw", "smoke", 827.971313, -1463.968750, 1614.093750, -21.995483, 162.191437 ],[ "Mid Center", "Throw", "smoke", 1711.974121, 463.987732, 1614.093750, -10.675973, -167.299591 ],[ "Connector", "Throw", "smoke", 1160.711182, 715.841675, 1613.093750, -31.334572, -153.088974 ],[ "White box", "Throw", "smoke", 2156.583740, -182.968750, 1613.483887, -22.077839, 161.943924 ],[ "One-way", "Throw", "smoke", 1037.031250, 513.031250, 1613.550293, -49.137814, 104.639671 ],[ "Mid (Right side)", "Throw", "smoke", 1711.968750, -71.968750, 1614.093750, -10.560504, 161.185349 ],[ "Bombsite A", "Crouch + Throw", "smoke", 154.413376, 2096.080566, 1688.093750, 9.370919, -29.337667 ],[ "Short", "Run + Throw", "smoke", 139.031250, 2197.968750, 1688.093750, -6.040052, -60.836231 ],[ "Bombsite A", "Throw", "smoke", 1319.968750, 1520.395508, 1701.093750, -57.767025, 161.424835 ],[ "Forklift", "Throw", "smoke", 1230.754150, 1612.968750, 1701.965088, -74.514435, -173.894516 ],[ "Main", "Throw", "smoke", -782.198059, 1110.000366, 1689.439697, -9.703021, 24.963852 ],[ "Main", "Throw", "smoke", -429.968750, 2244.968750, 1687.093750, -66.017174, -31.140173 ],[ "Main", "Throw", "smoke", -50.012558, 2261.968750, 1687.093750, -18.612713, -64.612831 ],[ "Vents", "Run + Throw", "smoke", -996.979553, 1440.231689, 1691.182373, -33.181599, -46.326721 ],[ "Bombsite A", "Throw", "flashbang", -358.534668, 2147.728027, 1687.093750, -17.540194, 2.039984 ],[ "Bombsite A", "Throw", "flashbang", 89.984558, 2244.983398, 1687.093750, -71.181236, -93.482628 ],[ "Bombsite B", "Both buttons", "flashbang", -633.975891, -379.968750, 1620.093750, -41.629662, -58.865555 ],[ "Mid", "Crouch + Throw", "flashbang", 114.968750, -107.322037, 1613.718506, -16.913092, -84.200432 ],[ "Mid", "Run + Throw", "flashbang", 1736.970581, 308.968750, 1614.093750, -9.157659, 162.762833 ],[ "Bombsite B", "Throw", "flashbang", 879.802185, -872.031250, 1614.093750, -14.157107, 177.892853 ],[ "Bombsite B", "Throw", "molotov", 907.649597, -1228.031250, 1614.093750, -23.876366, -179.771790 ],[ "White box", "Throw", "molotov", 605.005188, -149.968750, 1689.035889, -6.584105, 133.537994 ],[ "Boost", "Throw", "molotov", 11.759085, -148.994904, 1613.093750, -32.654572, 38.675369 ]]

    if(world == "de_shortdust")    coords = [["Box", "Run + Throw", "molotov", -309.406403, 1933.314819, 32.031250, -5.444888, -45.821072 ],["Car", "Throw", "molotov", -893.477783, 956.593933, 35.031250, -11.485014, -34.438034 ],["One-Way CT", "Throw", "molotov", -450.279297, 780.684265, 40.753510, -19.734886, -50.160259 ],["One-Way Car", "Run + Throw", "molotov", -1279.968750, 1039.968750, -170.329315, -27.609568, -18.734381 ]]


    var font1 = Render.AddFont("Verdana", 10, 600)

    var font2 = Render.AddFont("Verdana", 12, 600)

    var font3 = Render.AddFont("Verdana", 12, 500)

    var scsiz = Render.GetScreenSize()
    var scrmid = [Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2]

    var coordslenght = 0

    color_circle = [0,0,0,0]

    while(coords[coordslenght]) {

      coordslenght++

    }
    // if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Automatic Throw Hotkey") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Automatic Throw"))
    // {
    //   get_velocity()
    // }
    for(var i = 0; i < coordslenght; i++) {

      crd = coords[i]

      if(weaponnames[crd[2]].indexOf(weapon) >= 0) {

        cds = Render.WorldToScreen([crd[3], crd[4], crd[5]])

        var distance = dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer()))
        var nadeallmap = UI.GetValue(scriptitems,"Render nade on all map");

        if(nadeallmap)
        {
          if(distance >= 7000 - 255 && distance <= 7000) {
           Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, Math.round(Math.min(255, 7000 - distance))), font1)
           continue;
          }
          if(distance < 7000 - 255 && distance >= 10) {
            Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, 255), font1)
          }
        }else
        {
          if(distance >= 800 - 255 && distance <= 800) {
           Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, Math.round(Math.min(255, 800 - distance))), font1)
           continue;
          }
          if(distance < 800 - 255 && distance >= 10) {
           Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, 255), font1)
          }
        }

        if(dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer())) < 10) {

          Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, 255), font2)


          vec = atv(crd[6], crd[7])

          wec = Render.WorldToScreen([crd[3] + vec[0] * 200, crd[4] + vec[1] * 200, crd[5] + 64 + vec[2] * 200])


          Render.StringCustom(wec[0] + 14, wec[1] - 9, 0, crd[1], alp(color, 255), font3)

          Render.Line(scsiz[0] / 2, scsiz[1] / 2, wec[0], wec[1], alp(color, 255))


          if(( Math.abs(wec[0] - scrmid[0]) + Math.abs(wec[1] - scrmid[1]) ) <= 5)
          {
            color_circle = [0,255,0,255]
          }
          else {
            color_circle = [255,0,0,255]
          }

          Render.FilledCircle(wec[0], wec[1], 5, (color_circle));

          Render.Circle(wec[0], wec[1], 5, alp(color, 255))
        }
      }
    }
  }
}

coords_auto_throw = []
tickcount = 0
running  = false;

function on_create_move() {

  weaponnames = {"flashbang": [43], "molotov": [46, 48], "smoke": [45], "nade": [44]}

  weapon = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CEconEntity", "m_iItemDefinitionIndex")

  world  = World.GetMapName()

  color  = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Grenade Helper Color")

  var enabled = UI.GetValue(scriptitems, "Grenade Helper Enable");

  if (enabled)
  {
    if(!color) color = [255, 255, 255, 255]

    if([46, 48, 45, 43, 44].indexOf(weapon) < 0) return

    // ["", "", "",  ],
    // ["", ,[]],

    if(world == "de_cbble")
    {
      movement_autothrow = [
      ["Boost Corner1", 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 270.74334716796875 ],[ 450, 0, 270.7424011230469 ],[ 450, 0, 270.7424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 258.2424011230469 ],[ 450, 0, 245.74240112304688 ]]],


      ]
    }
    if(world == "de_mirage")
    {
      movement_autothrow = [
      ["Under", 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["Window", 10,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["One-Way Ramp", 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ]]],
      ]
    }
    if(world == "de_dust2")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_inferno")
    {
      movement_autothrow = [
      ["Pit" , 8,[[ 450.02211380004883, 0, 0 ],[ 450.65053939819336, 0, 0 ],[ 450.90695571899414, 0, 0 ],[ 450.53515625, 0, 0 ],[ 450.393945693969727, 0, 0 ],[ 450.5786018371582, 0, 0 ],[ 450.5311737060547, 0, 0 ],[ 450.2818603515625, 0, 0 ],[ 450.48575592041016, 0, 0 ],[ 450.93397521972656, 0, 0 ],[ 450.8269958496094, 0, 0 ],[ 450.3787612915039, 0, 0 ],[ 450.398193359375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ],[ 450.009521484375, 0, 0 ]]],
      ["Mid", 1,[[ 1.125562559813261, 0, 0 ],[ 1.1255620624870062, 0, 0 ],[ 1.12556217238307, 0, 0 ],[ 1.1255620624870062, 0, 0 ],[ 1.1255620624870062, 0, 0 ],[ 1.124624202027917, 0, 0 ],[ 1.12556217238307, 0, 0 ],[ 21.543969690799713, 0, 0 ],[ 36.43856465816498, 0, 0 ],[ 66.22589480876923, 0, 0 ],[ 81.11870193481445, 0, 0 ],[ 109.75620746612549, 0, 0 ],[ 122.38414692878723, 0, 0 ],[ 133.98439383506775, 0, 0 ],[ 133.9861981868744, 0, 0 ],[ 144.6437792778015, 0, 0 ],[ 163.4331409931183, 0, 0 ],[ 163.4331409931183, 0, 0 ],[ 179.29327392578125, 0, 0 ],[ 186.26964616775513, 0, 0 ],[ 192.68085193634033, 0, 0 ],[ 198.56950902938843, 0, 0 ],[ 192.68281269073486, 0, 0.00098419189453125 ],[ 208.95178318023682, 0, 0 ],[ 213.5128688812256, 0, 0 ],[ 221.56566047668457, 0, 0 ],[ 231.35248279571533, 0, 0 ],[ 234.10069465637207, 0, 0 ],[ 236.62394905090332, 0, 0 ],[ 238.94390296936035, 0, 0 ],[ 238.94390201568604, 0, 283.24334716796875 ],[ 238.94586277008057, 0, 283.2424011230469 ],[ 254.51007843017578, 0, 270.7424011230469 ]]],
      ["Fountain", 12,[[ 450.900423407554626, 0, 0 ],[ 450.73103332519531, 0, 0 ],[ 450.900423407554626, 0, 0 ],[ 450.3917555809021, 0, 0 ],[ 450.3917555809021, 0, 0 ],[ 450.3917555809021, 0, 0 ],[ 450.22231674194336, 0, 0 ],[ 450.08318901062012, 0, 0 ],[ 450.41434955596924, 0, 0 ],[ 450.15271377563477, 0, 0 ],[ 450.7157211303711, 0, 0 ],[ 450.5017385482788, 0, 0 ],[ 450.57388305664063, 0, 0 ],[ 450.9901828765869, 0, 0 ],[ 450.41479682922363, 0, 0 ],[ 450.06400680541992, 0, 0 ],[ 450.81544876098633, 0, 0 ],[ 450.09961318969727, 0, 0 ],[ 450.41479682922363, 0, 0 ],[ 450.81321144104004, 0, 270.7433776855469 ],[ 450.81321144104004, 0, 270.7433776855469 ],[ 450.18292808532715, 0, 245.74240112304688 ],[ 450.18292808532715, 0, 245.74240112304688 ]]],
      ["Graveyard",1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 258.2433776855469 ],[ 450, 0, 233.24337768554688 ],[ 450, 0, 220.74337768554688 ],[ 450, 0, 195.74337768554688 ],[ 450, 0, 183.24337768554688 ],[ 450, 0, 158.24337768554688 ],[ 450, 0, 145.74337768554688 ]]],
      ["Box" , 1 ,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["Box A" , 1,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 270.7433776855469 ],[ 450, 0, 258.2433776855469 ],[ 450, 0, 245.74240112304688 ],[ 450, 0, 220.74240112304688 ],[ 450, 0, 208.24240112304688 ],[ 450, 0, 195.74240112304688 ],[ 450, 0, 170.74240112304688 ]]],
      ["Archade", 12,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 283.2433776855469 ],[ 450, 0, 270.7433776855469 ],[ 450, 0, 270.7433776855469 ],[ 450, 0, 245.74337768554688 ],[ 450, 0, 245.74337768554688 ],[ 450, 0, 233.2433624267578 ]]],
      ] 

    }
    if(world == "de_nuke")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_overpass")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_train")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_cache")
    {
      movement_autothrow = [[]

      ]
    }
    if(world == "de_shortdust")
    {
      movement_autothrow = [
      ["Box", 4,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],
      ["One-Way Car", 8,[[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ],[ 450, 0, 0 ]]],

      ]
    }

    if(world == "de_cbble")        coords = [["Fountain", "Throw", "nade", 280.924866, -80.187576, -12.565859, -8.844892, -94.796295 ], ["Rock", "Throw", "molotov", 591.136230, -132.038406, 0.031250, -9.724643, -145.176041 ], ["Boost Corner", "Throw", "molotov", 47.968750, -16.031250, -23.177315, -31.504919, -124.580345 ], ["Boost Corner1", "Run + JumpThrow", "molotov", -94.259033, -239.954468, -31.968748, -18.909958, 91.239822 ],[ "One-way Long", "Crouch + Right click", "smoke", 272.031250, -291.031250, -63.906189, -30.971577, 17.418360 ],[ "B Long", "JumpThrow", "smoke", -1540.973389, -1226.978027, -25.199188, -50.672855, 41.294445 ],[ "Matrix", "Throw", "smoke", -1864.968750, -1611.968750, 96.093810, -11.221231, 136.023499 ],[ "B Long", "Throw", "smoke", -288.031250, 1020.970520, 128.093811, -51.547066, -53.167721 ],[ "Truck - front", "Throw", "smoke", -3295.975586, 79.968750, -29.906188, -36.680634, -52.524323 ],[ "Truck - right", "Throw", "smoke", -3168.031250, 79.968750, -29.906188, -47.158157, -65.556221 ],[ "Grass", "Throw", "smoke", -3167.270508, 584.685120, 0.093811, -55.144222, -61.434193 ],[ "Skyfall", "Throw", "smoke", -752.031250, -80.031250, 128.093811, 5.361639, -119.332336 ],[ "Hut - right", "Throw", "smoke", -155.970673, -16.010778, -31.906188, -50.869473, -69.637550 ],[ "Hut - left", "Throw", "smoke", -340.020111, -80.031250, -31.907466, -53.921837, -52.166801 ],[ "Sandwich", "Throw", "smoke", 47.968750, -16.031250, -23.114716, -81.378204, -89.289169 ],[ "Fountain", "Throw", "smoke", -418.514893, -95.749924, -32.562836, -75.323563, -61.343159 ],[ "B Door", "Throw", "smoke", -558.031250, -42.535999, 0.093811, -62.173512, -100.720726 ],[ "Balcony", "JumpThrow", "smoke", -2534.005371, -272.031250, -184.407272, -17.127037, -65.392319 ],[ "A Door", "Walk + Throw", "smoke", -3346.178711, 455.572449, 0.093811, -40.327240, -45.610413 ],[ "A Door", "Run + Throw", "smoke", -2989.968750, -944.371948, 32.093811, -12.160514, -4.402364 ],[ "Skyfall", "Throw", "flashbang", -780.031250, 111.931717, 128.093811, -4.768500, -92.183800 ],[ "Skyfall", "Throw", "flashbang", -590.995239, 434.631622, -0.906188, -17.854057, -108.593758 ],[ "Wood", "Throw", "flashbang", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882 ],[ "Balcony", "Run + Throw", "molotov", -2989.968750, -944.036682, 32.093811, -15.675012, -32.634476 ],[ "Wood", "Throw", "molotov", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882 ]]

    if(world == "de_mirage")       coords = [["One-Way Ramp", "Run + JumpThrow", "molotov", -34.403679, -1916.279053, -39.968750, 2.595078, 71.391121 ],["Car", "Throw", "molotov", -1182.872070, 679.580505, -79.968750, -9.450004, 174.482330 ],["Under", "Walk + Throw", "molotov", -34.409924, 822.263123, -135.968750, -8.459991, -150.967743 ],["One-Way Site", "Throw", "molotov", -538.933411, -1309.055664, -159.968750, -11.109911, -75.805000 ],["One-Way Box", "JumpThrow", "molotov", 663.968750, -1128.005005, -127.968750, 0.395009, -136.764679 ],["Window", "Run + Throw", "molotov", 334.825684, -149.313019, -165.968750, -17.259995, -152.143692 ],["Ramp", "Throw", "molotov", -1119.997314, -1527.024292, -156.076477,-17.370033, 0.035920],["Stairs", "Throw", "molotov", 499.251617, -1574.105713, -261.590881, -25.290028, 176.995941 ],[ "Window Mid", "JumpThrow", "smoke", 1423.964355, -248.026840, -167.906188, -25.723558, -170.518921 ],[ "Connector", "JumpThrow ", "smoke", 1135.968750, 647.996033, -261.322754, -34.518116, -140.291428 ],[ "Catwalk", "Throw", "smoke", 1423.997803, 71.985359, -112.840103, -32.653351, -163.530762 ],[ "One-way Mid", "Right click", "smoke", 369.960144, -720.522705, -162.412476, 35.376301, 124.135780 ],[ "Short", "Run + Throw", "smoke", 399.998444, 4.656666, -203.571350, -22.060497, -134.482208 ],[ "Window Mid", "Throw", "smoke", -624.243530, 615.992065, -78.914246, -51.595604, -109.421127 ],[ "Kitchen door", "Throw", "smoke", -2325.227783, 811.800659, -119.773079, -14.883981, -94.343178 ],[ "Short", "Throw", "smoke", -160.031250, 887.968750, -135.265563, -44.269619, -134.435654 ],[ "Kitchen window", "Throw", "smoke", -835.001404, 615.070190, -79.065735, -63.789238, -146.581238 ],[ "Short", "Throw", "smoke", 341.836212, -620.153992, -163.282486, -23.134167, 164.957458 ],[ "Connector + Jungle", "Throw", "smoke", 815.999512, -1457.235596, -108.906189, -26.797188, -174.613022 ],[ "Stairs", "Throw", "smoke", 1148.225586, -1183.999756, -205.509155, -41.168613, -165.354019 ],[ "Window Mid", "Run + Throw", "smoke", 1391.968750, -1011.236084, -167.906188, -42.603077, 172.188919 ],[ "Stairs", "JumpThrow", "smoke", -90.864479, -1418.000244, -115.906189, -31.895834, -62.464306 ],[ "Fireboxes", "JumpThrow", "smoke", 1391.968750, -930.076294, -167.906188, -21.037338, -151.204865 ],[ "One-way", "Throw", "smoke", 457.968750, -1711.996582, -240.886871, -10.477256, 133.144836 ],[ "Bombsite A", "Throw", "smoke", 815.998718, -1272.017944, -108.906189, -32.654591, -149.503601 ],[ "CT Spawn", "JumpThrow", "smoke", 1257.861938, -871.968750, -143.906188, -21.318205, -144.344666 ],[ "One-way", "Throw", "smoke", -1209.077515, -873.270447, -167.906188, -48.526600, 67.790833 ],[ "One-way", "Right click", "smoke", -964.056885, -2489.520264, -167.913391, -41.926632, -10.765607 ],[ "Ramp", "JumpThrow", "smoke", -2026.397583, -2029.968750, -299.060150, -15.312100, 12.573707 ],[ "One-way Kitchen", "Throw", "smoke", -2600.019287, 535.973022, -159.906188, -16.582365, -50.818062 ],[ "B Apps", "Throw", "flashbang", -2114.031250, 830.582214, -121.516441, -69.514664, 38.815456 ],[ "Connector", "Throw", "flashbang", -496.031250, -1309.031250, -159.906188, -65.176048, -10.261290 ],[ "Fireboxes", "Throw", "molotov", -31.432693, -1418.005371, -167.906188, -19.768339, -138.115036 ],[ "Tetris", "Throw", "molotov", -364.996552, -2173.031250, -176.139190, -26.004026, 44.655296 ]]

    if(world == "de_dust2")        coords = [[ "B Entrance", "Throw", "smoke", -1846.553223, 1232.569824, 32.496025, -8.613732, 118.773392 ],[ "CT Mid", "Throw", "smoke", -538.606567, 1382.031250, -111.957108, -35.360550, 53.845985 ],[ "Xbox", "Throw", "smoke", 229.130554, 112.497559, 5.215744, -40.624023, 108.758316 ],[ "Long Corner", "Throw", "smoke", 222.664124, -87.978210, 9.093811, -46.250572, 48.164497 ],[ "CT Spawn", "Run + Throw", "smoke", 860.031250, 790.031250, 3.900847, -23.414322, 43.616291 ],[ "Short (Close)", "Throw", "smoke", 489.998535, 1446.031250, 2.660506, -5.677320, 88.280685 ],[ "Long Gate", "Throw", "smoke", 1752.049561,2046.932739, 0.365111, -33.430305, -130.546280 ],[ "Lower Mid", "Throw", "smoke", -242.031250, 2278.887695, -119.931587, -32.687481, -123.649094 ],[ "Upper Tunnel", "Throw", "smoke", -985.452942, 2553.223877, 1.318862, -26.764244, -143.848251 ],[ "Bombsite B", "Throw", "flashbang", -1273.968750, 2575.968750, 67.353363, -42.043125, 1.218936 ],[ "Bombsite B", "Throw", "molotov", -760.031250, 2066.031250, -45.182931, -23.497030, 132.684860 ]]

    if(world == "de_inferno")      coords = [["Graveyard", "Run + JumpThrow", "molotov", 2017.503174, 1225.968750, 178.031250, -33.659977, -64.684898],["Mid", "Run + JumpThrow", "molotov", 2343.707520, 568.729492, 145.928940, -38.500111, -178.690613],["Fountain", "Run + JumpThrow", "molotov", 362.636536, 1726.205933, 128.376053, -39.875027, 95.339996],["Triple Box", "Throw", "molotov", 877.968750, 2393.092041, 150.504181, -13.529912, 168.994965 ],["Library", "JumpThrow", "molotov", 1314.032593, 797.901489, 153.586700, -26.509958, 10.154735 ] ,["Box", "Run + Throw", "molotov", 1364.515015, 277.541809, 135.426834, -17.755112, -48.144848],["Archade", "Run + JumpThrow", "molotov", 1287.723633, 434.031250, 125.995117, -36.354294, 55.140560],["Default", "JumpThrow", "molotov", 1961.373169, 1225.968750, 175.031250, -34.145012, -79.280289],["Stove", "Throw", "molotov", 698.401245, -267.968750, 105.031250, -21.614807, 32.599926 ],[ "Mid", "Run + Throw", "smoke", -857.968750, 449.902283, -31.604805, -44.401531, 1.405892 ], ["Pit", "Run + Throw", "molotov", 2105.090088, 1168.412354, 165.084000, -13.804811, -63.900101 ], [ "Box A", "Run + JumpThrow", "molotov", 2079.774658, 1225.998535, 180.093811, -37.500053, -89.940086], [ "Coffins", "Throw", "smoke", 338.871887, 1650.802856, 122.093810, -50.093639, 84.572739 ],[ "B Entrance", "Throw", "smoke", 460.464905, 1828.470825, 136.182693, -25.443281, 86.280159 ],[ "CT Spawn", "Throw", "smoke", 119.999580, 1587.966187, 113.307662, -34.798424, 56.149929 ],[ "Long (Deep)", "Run + Throw", "smoke", 274.681335, -224.627777, 88.093810, -41.052132, 31.799410 ],[ "Pit (Crack)", "Throw", "smoke", 704.160339, 11.968750, 88.797089, -52.337799, -2.135024 ],[ "Short (Deep)", "Throw", "smoke", 697.511902, -242.261810, 91.093810, -53.097946, 16.442726 ],[ "Library to A", "Throw", "smoke", 960.900330, 434.006409, 88.093810, -49.863846, 13.159984 ],[ "Pit to Hay", "Throw", "smoke", 726.031250, 220.962921,94.029999, -55.241890, -8.699924 ],[ "Long", "Throw", "smoke", 491.936829, -267.968750, 88.093810, -42.024933, 45.854645 ],[ "Bombsite B", "Throw", "smoke", 1971.687988, 2636.702393, 128.093811, -39.996227, 175.975357 ],[ "Connector", "Throw", "smoke", 726.031250, 288.680084, 96.093810, -43.560978, 41.450943 ],[ "One-way", "Throw", "smoke", 2631.968750, -16.031250, 84.093810, -5.692367, -179.128860 ],[ "Balcony", "Throw", "smoke", 1913.227295, 1225.968750, 174.093811, -46.497322, -87.005005 ],[ "B Entrance", "Throw", "flashbang", 498.968750, 2444.031250, 160.093811, 1.748943, 142.807571 ],[ "Banana", "Throw", "flashbang", 610.968750, 1873.031250, 134.252365, -44.186985, -0.872295 ],[ "Short", "Walk + Throw", "flashbang", 1275.968750, -111.968750, 256.093811, 9.454458, 116.691383 ],[ "Bombsite A", "Crouch + Throw", "flashbang", 1329.031250, -365.989349, 256.093811, -29.733957, -22.831499 ],[ "B Plant", "JumpThrow", "molotov", 929.176636, 3295.995117, 144.093811, -45.887463, -131.960571 ],[ "3s", "Throw", "molotov", 999.982422, 1878.530640, 149.329788, -26.647552, 141.132538 ],[ "Coffins", "Throw", "molotov", 664.968750, 1873.031250, 168.093811, -24.272781, 96.641022 ]]

    if(world == "de_nuke")         coords = [[ "Hangar", "Throw", "smoke", -164.092941, -1954.733765, -415.916107, -13.613587, 1.278547 ],[ "Red container", "Throw", "smoke", -533.003357, -833.215759, -193.634827, -30.904673, -43.816589 ],[ "Between containers", "Run + Throw", "smoke", -423.996399, -1753.002075, -415.914856, -2.624159, -50.804165 ],[ "T Outside", "JumpThrow", "smoke", 1664.031250, -280.002014, -351.906250, -25.048063, -135.212463 ]]

    if(world == "de_overpass")     coords = [["Stairs", "Run + JumpThrow", "molotov", -3750.460938, -250.358826, 520.609863, 5.050490, 35.776577 ],["Barrels", "Run + Throw", "molotov", -430.186157, -1551.968750, 150.031250, -16.164569, 101.556863 ],["Heaven", "Walk + JumpThrow", "molotov", -856.031311, -639.968750, 105.031250, 4.120225, 128.027786 ],["Barrels", "Throw", "molotov", -1580.517578, -710.171814, 135.334778, -14.950030, 60.188404 ],["Water", "Throw", "molotov", -1276.541260, -964.551147, 10.933800, -23.484703, 82.194580],[ "Toilet entrance", "Run + Throw", "smoke", -730.031250, -2225.143799, 240.093811, -51.612926, 149.045975 ],[ "B Bridge", "Throw", "smoke", -617.486389, -1509.028809, 144.093811, -48.988934, 113.071342 ],[ "B Center", "Throw", "smoke", -525.982300, -1551.984375, 144.093811, -43.807911, 110.431473 ],[ "Barrels to Pillar", "Throw", "smoke", -613.014099, -1082.017212, 42.160416, -29.337307, 99.340714 ],[ "B Center", "Throw", "smoke", -1567.968750, -1087.984619, 0.093811, -30.278185, 74.646019 ],[ "Monster to Pillar", "Throw", "smoke", -1645.986938, -1087.982300, 96.093810, -20.015800, 55.835869 ],[ "Heaven", "Throw", "smoke", -1559.968750, -728.785583, 52.574355, -33.446209, 96.293686 ],[ "B Bridge", "Throw", "smoke", -1559.999390, -361.285339, 32.421722, -43.693123, 21.193089 ],[ "Heaven", "Throw", "smoke", -2174.002441, -1151.968750, 398.197235, -26.368107, 71.543701 ],[ "Long to Boxes", "Throw", "smoke", -2025.534058, -865.001343, 395.427856, -28.313963, 114.564102 ],[ "Bank", "Throw", "smoke", -2162.000488, -519.968750, 391.460358, -29.749702, 100.836487 ],[ "Truck to Bank", "Throw", "smoke", -3612.545654, -177.626740, 512.791992, -40.392601, 51.259613 ],[ "Boxes to Truck", "Throw", "smoke", -3540.031250, -381.968750, 528.080200, -14.256992, 41.849758 ],[ "Truck", "Throw", "smoke", -2351.968750, -815.968750, 391.089905, -34.683971, 81.500427 ],[ "Trash", "Throw", "smoke", -2351.968750, -414.031250, 388.562317, -60.588089, 73.825958 ],[ "Trash", "Throw", "smoke", -3383.369629, 35.247875, 516.906006, -18.035419, 31.699080 ],[ "Long", "Crouch + Throw", "smoke", -1993.398926, 537.698242, 475.093810, -28.677984, -169.596695 ],[ "Monster", "Throw", "smoke", -1926.860962, 1311.968750, 355.030579, -46.200985, -40.010532 ],[ "One-way", "Throw", "smoke", -2191.968750, 1311.968750, 356.093811, -8.861760, -55.390415 ],[ "One-way", "Right click", "smoke", -1826.375610, 629.178894, 256.093811, 26.580435, -17.457275 ],[ "One-way", "Throw", "smoke", -2012.968750, -1231.968750, 240.093811, 16.218643, 63.144173 ],[ "Short B", "Throw", "smoke", -2115.841309, 992.920288, 480.093810, -22.936214, -57.690578 ],[ "Bombsite A", "Throw", "flashbang", -2604.023926, 1102.215088, 480.093810, -24.090078, 70.938210 ],[ "Barrels", "Throw", "molotov", -1580.023315, -480.767883, 136.093811, -20.147602, 53.764153 ],[ "Bombsite B", "Throw", "molotov", -1399.968750, -139.998840, 0.093811, -15.444187, 63.084324 ]]

    if(world == "de_train")        coords = [["B site", "Throw", "molotov", -1085.563477, -954.344543, -55.968750, -2.244908, -11.982774 ],["Default", "Walk + Throw", "molotov", 1054.867188, 426.185638, -215.982330, -14.129807, -158.603027 ],["Heaven", "Throw", "molotov", 132.170197, 499.088257, -219.968750, -30.679949, -56.869923 ],["Site", "Run + Throw", "molotov", -338.848297, 307.854095, -215.968750, -29.580017, -36.570026 ],[ "B Upper", "Throw", "smoke", -1055.968750, -1607.969116, -151.906188, -9.076089, -21.028521 ],[ "B Lower", "Throw", "smoke", -1159.978027, -1088.112549, -95.909508, -9.122071, 13.307947 ],[ "Blue to Bombsite", "Run + Throw", "smoke", -1155.979004, -1301.504395, -95.906189, -15.857571, 38.882820 ],[ "Connector", "Run + Throw", "smoke", -1159.999634, -1048.001709, -95.906189, -11.023086, 5.091055 ],[ "Ivy (right)", "Throw", "smoke", 1388.426270, 1446.000488, -223.906189, -6.188282, -95.524574 ],[ "Ivy (left)", "Run + Throw", "smoke", 1535.968750, 1775.968750, -223.906189, -9.818258, -112.486588 ],["Bombsite A to Connector", "Both buttons", "smoke", -655.968750, -399.892731, 16.093811, -46.002502, 10.890710 ],[ "Blue to Red train", "Throw", "smoke", -645.479370, 1697.721924, -209.906189, -41.564690, -65.086685 ],[ "Electric box", "Throw", "smoke", -481.865631, 1725.011597, -209.906189, -45.937080, -78.790627 ],[ "Blue train (Left)", "Throw", "smoke", -555.031250, 1262.031250, -212.532227, -68.096550, -50.974125 ],[ "Green to Red train", "Throw", "smoke", -838.162292, 1268.024414, -222.906189, -37.604507, -42.064575 ],[ "Ivy to Green train", "Throw", "smoke", -640.027832, -583.969666, 16.093811, -44.699406, 32.218452 ],[ "Bombsite A to Red train", "Throw", "smoke", -453.358459, 1286.284668, -86.490753, -25.130558, -58.731426 ],[ "Main", "Throw", "smoke", 1021.096924, -254.988556, -215.906189, -38.494926, 154.562332 ],[ "Bombsite A", "Run + Throw", "flashbang", 400.031250, -420.031250, -211.777573, -28.859020, -89.674629 ],[ "Blue train (Back)", "Run + Throw", "molotov", -790.028748, 375.928741, -215.906189, -11.270589, 27.332729 ]]

    if(world == "de_cache")        coords = [[ "Ventsroom", "Throw", "smoke", 837.744141, -872.015564, 1614.093750, -15.362073, 177.850555 ],[ "Headshot", "Throw", "smoke", 960.031250, -1463.968750, 1644.093750, -26.400745, 162.851730 ],[ "B Center", "Throw", "smoke", 827.971313, -1463.968750, 1614.093750, -21.995483, 162.191437 ],[ "Mid Center", "Throw", "smoke", 1711.974121, 463.987732, 1614.093750, -10.675973, -167.299591 ],[ "Connector", "Throw", "smoke", 1160.711182, 715.841675, 1613.093750, -31.334572, -153.088974 ],[ "White box", "Throw", "smoke", 2156.583740, -182.968750, 1613.483887, -22.077839, 161.943924 ],[ "One-way", "Throw", "smoke", 1037.031250, 513.031250, 1613.550293, -49.137814, 104.639671 ],[ "Mid (Right side)", "Throw", "smoke", 1711.968750, -71.968750, 1614.093750, -10.560504, 161.185349 ],[ "Bombsite A", "Crouch + Throw", "smoke", 154.413376, 2096.080566, 1688.093750, 9.370919, -29.337667 ],[ "Short", "Run + Throw", "smoke", 139.031250, 2197.968750, 1688.093750, -6.040052, -60.836231 ],[ "Bombsite A", "Throw", "smoke", 1319.968750, 1520.395508, 1701.093750, -57.767025, 161.424835 ],[ "Forklift", "Throw", "smoke", 1230.754150, 1612.968750, 1701.965088, -74.514435, -173.894516 ],[ "Main", "Throw", "smoke", -782.198059, 1110.000366, 1689.439697, -9.703021, 24.963852 ],[ "Main", "Throw", "smoke", -429.968750, 2244.968750, 1687.093750, -66.017174, -31.140173 ],[ "Main", "Throw", "smoke", -50.012558, 2261.968750, 1687.093750, -18.612713, -64.612831 ],[ "Vents", "Run + Throw", "smoke", -996.979553, 1440.231689, 1691.182373, -33.181599, -46.326721 ],[ "Bombsite A", "Throw", "flashbang", -358.534668, 2147.728027, 1687.093750, -17.540194, 2.039984 ],[ "Bombsite A", "Throw", "flashbang", 89.984558, 2244.983398, 1687.093750, -71.181236, -93.482628 ],[ "Bombsite B", "Both buttons", "flashbang", -633.975891, -379.968750, 1620.093750, -41.629662, -58.865555 ],[ "Mid", "Crouch + Throw", "flashbang", 114.968750, -107.322037, 1613.718506, -16.913092, -84.200432 ],[ "Mid", "Run + Throw", "flashbang", 1736.970581, 308.968750, 1614.093750, -9.157659, 162.762833 ],[ "Bombsite B", "Throw", "flashbang", 879.802185, -872.031250, 1614.093750, -14.157107, 177.892853 ],[ "Bombsite B", "Throw", "molotov", 907.649597, -1228.031250, 1614.093750, -23.876366, -179.771790 ],[ "White box", "Throw", "molotov", 605.005188, -149.968750, 1689.035889, -6.584105, 133.537994 ],[ "Boost", "Throw", "molotov", 11.759085, -148.994904, 1613.093750, -32.654572, 38.675369 ]]

    if(world == "de_shortdust")    coords = [["Box", "Run + Throw", "molotov", -309.406403, 1933.314819, 32.031250, -5.444888, -45.821072 ],["Car", "Throw", "molotov", -893.477783, 956.593933, 35.031250, -11.485014, -34.438034 ],["One-Way CT", "Throw", "molotov", -450.279297, 780.684265, 40.753510, -19.734886, -50.160259 ],["One-Way Car", "Run + Throw", "molotov", -1279.968750, 1039.968750, -170.329315, -27.609568, -18.734381 ]]

    var scsiz = Render.GetScreenSize()
    var scrmid = [Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2]

    var coordslenght = 0

    color_circle = [0,0,0,0]

    while(coords[coordslenght]) {

      coordslenght++

    }
    for(var i = 0; i < coordslenght; i++) {

      crd = coords[i]

      if(weaponnames[crd[2]].indexOf(weapon) >= 0) {

        cds = Render.WorldToScreen([crd[3], crd[4], crd[5]])

        var distance = dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer()))
        var nadeallmap = UI.GetValue(scriptitems,"Render nade on all map");
        if(dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer())) < 10) {

          vec = atv(crd[6], crd[7])
          local_player = Entity.GetLocalPlayer()

          if(UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Automatic Throw Hotkey") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Automatic Throw") && !running)
          {
            eye_pos = Entity.GetEyePosition(local_player)
            angles = getAngles(eye_pos , [crd[3] + vec[0] * 200, crd[4] + vec[1] * 200, crd[5] + 64 + vec[2] * 200])
            UserCMD.SetAngles([angles[0],angles[1],angles[2]])
            tickcount = Global.Tickcount()

            running = true
          //  coords_auto_throw = crd
            for(t = 0; t < movement_autothrow.length;t++)
            {
              if(movement_autothrow[t][0] == crd[0])
              {
                crd[8] = movement_autothrow[t][2]
                crd[9] = movement_autothrow[t][1]
              }
            }
            coords_auto_throw = crd
            auto_throw_repeat()
          }
        }
      }
    }
  }
}

function auto_throw()
{
  tick = Global.Tickcount()
  if (coords_auto_throw[8] == null)
  {

    if((coords_auto_throw[1].includes("Jump") || coords_auto_throw[1].includes("Throw")) && !coords_auto_throw[1].includes("Run")&&  !coords_auto_throw[1].includes("Walk"))
    {

      if(tick - tickcount == 1)
      {
        Cheat.ExecuteCommand( "+attack" );
      }
      if(tick - tickcount == 2)
      {
        if(coords_auto_throw[1].includes("Jump"))
          UserCMD.ForceJump()
        Cheat.ExecuteCommand( "-attack" );
        new Delay(Global.TickInterval() * 2 - Global.TickInterval() / 100 , stop_attack);
        running = false;
      }
      return
    }

    running = false
    return
  }
  jump_throw = false;
  for(i = 0; i < coords_auto_throw[8].length;i++)
  {
    if(coords_auto_throw[8][i][2] != 0)
    {
      jump_throw = true;
      break;
    }
  }
  if(tick - tickcount < coords_auto_throw[8].length)
  {
      UserCMD.SetMovement( [coords_auto_throw[8][tick - tickcount][0],0,0]);
      if(tick - tickcount < coords_auto_throw[8].length - 1)
      {
        if(coords_auto_throw[8][tick-tickcount+1][2] != 0 && coords_auto_throw[8][tick-tickcount][2] == 0)
        {
          Cheat.ExecuteCommand( "+attack" );
        }
      }
      if(tick - tickcount - 1 >= 0 && coords_auto_throw[8][tick-tickcount][2] != 0 && coords_auto_throw[8][tick - tickcount - 1][2] == 0)
      {
        UserCMD.ForceJump()
        Cheat.ExecuteCommand( "-attack" );
        running = false;
      }
      if(!jump_throw)
      {
        if(tick - tickcount == 1)
          Cheat.ExecuteCommand( "+attack" );
        if(tick - tickcount == coords_auto_throw[8].length - coords_auto_throw[9])
        {
          Cheat.ExecuteCommand( "-attack" );

          running = false;
        }
      }
  }
}
throw_tick = 0
function stop_attack()
{
    Cheat.ExecuteCommand( "-attack" );
}
function set_false()
{
  running = false
}
function auto_throw_repeat()
{
  if (coords_auto_throw[8] == null)
  {
    if((coords_auto_throw[1].includes("Jump") || coords_auto_throw[1].includes("Throw"))&&  !coords_auto_throw[1].includes("Run") &&  !coords_auto_throw[1].includes("Walk"))
    {

      for(i = 0; i < 2;i++)
      {
        new Delay(Global.TickInterval() * i - Global.TickInterval() / 100 , auto_throw);
      }
      new Delay(Global.TickInterval() * 3 - Global.TickInterval() / 100 , set_false);
      return
    }
    new Delay(Global.TickInterval() * 0 - Global.TickInterval() / 100 , set_false)
    return
  }
  for(i = 1; i <= coords_auto_throw[8].length;i++)
  {
    new Delay(Global.TickInterval() * i - Global.TickInterval() / 100 , auto_throw);
  }
}

//REMEMBER TO DELETE THIS AFTER ALL NADES

// function get_velocity()
// {
//     var velocity = Entity.GetProp( Entity.GetLocalPlayer(), "CBasePlayer", "m_vecVelocity[0]" );
//     vel = [velocity[0],velocity[1],velocity[2]]
//     velocity_first = vel[0]
//     if(Math.abs(velocity_first) > 1)
//     {
//       Cheat.Print("[ " + ("450") + ", " + "0" + ", " + (Math.abs(velocity[2])).toString() + " ],")
//     }
// }

// Callback
Cheat.RegisterCallback("CreateMove", "checkDelays");

Cheat.RegisterCallback("CreateMove", "on_create_move");

Cheat.RegisterCallback("Draw","grenade_helper");

Global.RegisterCallback("Draw", "draw")


const show_edition = [  1  /* system`mod 1/0 */,  "system`mod" /* system`mod */];

const primary_clr = [3, 200, 250, 3];
const secondary_clr = [primary_clr[0] - 15, primary_clr[1] - 15, primary_clr[2] - 15, 255]; /* ВТОРОЙ ЦВЕТ, МОЖНО ПОМЕНЯТЬ НА СВОЙ */
const text_clr = [255,255,255,255];
const bg_clr = [40,40,47, 125];

var font = Render.AddFont("Verdana", 10, 90);
    var RealYaw = Local.GetRealYaw();
    var FakeYaw = Local.GetFakeYaw();
    var delta = Math.min(Math.abs(RealYaw - FakeYaw) / 2, 60).toFixed(1);
    var safety = Math.min(Math.round(1.7 * Math.abs(delta)), 100);
    if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
        var side = "<";
    } else {
        var side = ">";
    }
	
const elleqt_ne_trap_3 = function(x, y, a, text, color, font) {
    Render.StringCustom(x + 1, y + 1, a, text, [15, 15, 15, 55], font);
    Render.StringCustom(x, y, a, text, color, font);
}

const elleqt_ne_trap_2 = function(x, y, w, custom_text, font, base_clr) {
    Render.GradientRect(x, y, w / 2, 2, 1, primary_clr, secondary_clr);
    Render.GradientRect(x + w / 2, y, w / 2, 2, 1, secondary_clr, primary_clr);
    Render.FilledRect(x, y + 2, w, 16, bg_clr);
    elleqt_ne_trap_3(x + w / 2, y + 2, 1, custom_text, text_clr, font);
}

const elleqt_ne_trap_1 = function( ) {
	
        const text = show_edition[0] ? (" Nizkcord |  " + Cheat.GetUsername() + " | ") : ("451squad` | " + Cheat.GetUsername() + " |  ");
        const server_name = World.GetServerString();
        if (server_name != "")
        {
            text += server_name + " | delay: " + Math.round(Local.Latency( ) * 1000 - 11) + " | " + Globals.Tickrate() + "tick | ";
        }
        const now = new Date();
        const now = new Date();
        const hours = now.getHours(), mins = now.getMinutes(), secs = now.getSeconds();
        const time = (hours < 10 ? "0" + hours : hours) + ":" + (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs);
        text += time;
        return text
    }

const elleqt_ne_trap = function() {
    const font = Render.AddFont("Segoe UI", 8, 400);
    const text = elleqt_ne_trap_1();
    const width = Render.TextSizeCustom(text, font)[0] + 15;
    const screen_width = Render.GetScreenSize()[0];

    elleqt_ne_trap_2(screen_width - 10 - width, 10, width, text, font, [255,255,255,255]);
}

Cheat.RegisterCallback('Draw', 'elleqt_ne_trap');



