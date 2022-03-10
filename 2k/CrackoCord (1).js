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

/*
Quake Flying damage numbers...
Author https://onetap.su/members/tilestra.54952/
*/

//Vars
var iVictim_index, First_pos, Second_pos, Third_pos, Fourth_pos, Fifth_pos, First, Second, Third, Fourth, Five, iDamageCount = iOffsetCount = YOffsetFirst = YOffsetSecond = YOffsetThird = YOffsetFourth = YOffsetFive = loadFont = HitAttack = 0;  

//Store coordinates array
const first_screen_pos = [], second_screen_pos = [], third_screen_pos = [], fourth_screen_pos = [], fifth_screen_pos = [];

//>_<
//Damage event
function EVENT_PLAYER_HURT()
{
    //Get attacker
    iAttacker = Event.GetInt("attacker"); iAttacker_index = Entity.GetEntityFromUserID(iAttacker);
   
    //Get victim
    iVictim = Event.GetInt("userid"); iVictim_index = Entity.GetEntityFromUserID(iVictim);  
   
    if(Entity.GetLocalPlayer() == iVictim_index && Entity.GetLocalPlayer() !== iAttacker_index)    return;
   
    //BEGIN ANIM
    if(Entity.GetLocalPlayer() == iAttacker_index)
    {
        //First hit
        HitAttack = 1;
       
        //Reset every 5 hit
        if(iDamageCount == 5) iDamageCount = 0; if(iOffsetCount == 5) iOffsetCount = 0;
       
        //Collect them and set only 5 hits
        iDamageCount+=1;
       
        //This is offset for Y for each
        iOffsetCount+=1;        
       
        //This shit reads every hit with a new var...
        if(iDamageCount == 1)    {    First = Event.GetInt("dmg_health");    First_pos = Entity.GetRenderOrigin(iVictim_index);    }  
        if(iDamageCount == 2)    {    Second = Event.GetInt("dmg_health");    Second_pos = Entity.GetRenderOrigin(iVictim_index);    }              
        if(iDamageCount == 3)    {    Third = Event.GetInt("dmg_health");    Third_pos = Entity.GetRenderOrigin(iVictim_index);    }      
        if(iDamageCount == 4)    {    Fourth = Event.GetInt("dmg_health");    Fourth_pos = Entity.GetRenderOrigin(iVictim_index);    }      
        if(iDamageCount == 5)    {    Five = Event.GetInt("dmg_health");    Fifth_pos = Entity.GetRenderOrigin(iVictim_index);    }

        //Setup offsets
        if(iOffsetCount == 1)    YOffsetFirst = 255; if(iOffsetCount == 2)    YOffsetSecond = 255; if(iOffsetCount == 3)    YOffsetThird = 255; if(iOffsetCount == 4)    YOffsetFourth = 255; if(iOffsetCount == 5)    YOffsetFive = 255;              
    }      
}

function HUD_REDRAW()
{
    //Once and lock font load
    if(loadFont == 0)
    {
        //this font u can get here https://onetap.su/threads/beta-in-development-onetap-hud-engine-0-1-dev-18945-18952-dec-27-2019.13647/
        fontSM2 = Render.AddFont("Roboto Medium", 18, 100);
        loadFont = 1;
    }
   
    /*Render.StringCustom(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]/2, 1, "" + iDamageCount, [ 255, 255, 255, 255 ], fontSM2);
    Render.StringCustom(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]/2+50, 1, "" + iOffsetCount, [ 255, 255, 255, 255 ], fontSM2);*/

    //Stop flooding
    if(!HitAttack || !getCustomValue('Quake Damage Numbers'))    return;

    //Doing cycle through all players will affect on FPS heavily... so
    if(Entity.IsValid(iVictim_index))
    {
        //Push Y
        if(YOffsetFirst > 1)    YOffsetFirst--; if(YOffsetSecond > 1)    YOffsetSecond-=2; if(YOffsetThird > 1)    YOffsetThird-=3; if(YOffsetFourth > 1)    YOffsetFourth-=2; if(YOffsetFive > 1)    YOffsetFive--;  
   
        //Setup x,y,z
        if(iDamageCount == 1)    first_screen_pos = Render.WorldToScreen(First_pos);    if(iDamageCount == 2)    second_screen_pos = Render.WorldToScreen(Second_pos);
        if(iDamageCount == 3)    third_screen_pos = Render.WorldToScreen(Third_pos);    if(iDamageCount == 4)    fourth_screen_pos = Render.WorldToScreen(Fourth_pos);
        if(iDamageCount == 5)    fifth_screen_pos = Render.WorldToScreen(Fifth_pos);
           
        //Five pieces of damage, the hell
        Render.StringCustom(first_screen_pos[0]-15, first_screen_pos[1]-50+YOffsetFirst-255, 1, "" + First, [ 255, 255, 255, YOffsetFirst ], fontSM2);
        Render.StringCustom(second_screen_pos[0]+15, second_screen_pos [1]-50+YOffsetSecond-255, 1, "" + Second, [ 255, 255, 255, YOffsetSecond ], fontSM2);
        Render.StringCustom(third_screen_pos[0]-25, third_screen_pos[1]-50+YOffsetThird-255, 1, "" + Third, [ 255, 255, 255, YOffsetThird ], fontSM2);
        Render.StringCustom(fourth_screen_pos[0]+25, fourth_screen_pos[1]-50+YOffsetFourth-255, 1, "" + Fourth, [ 255, 255, 255, YOffsetFourth ], fontSM2);
        Render.StringCustom(fifth_screen_pos[0]-10, fifth_screen_pos[1]-50+YOffsetFive-255, 1, "" + Five, [ 255, 255, 255, YOffsetFive ], fontSM2);
    }      
}  

function getCustomValue(name)
{
    var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", name);
    return value;
}

function Main()
{
    Global.RegisterCallback("Draw", "HUD_REDRAW");
    Global.RegisterCallback("player_hurt", "EVENT_PLAYER_HURT");
    UI.AddCheckbox('Quake Damage Numbers');
}

Main();

UI.AddCheckbox("Display indicator")
UI.AddHotkey("Heavy Pistol Override")
UI.AddSliderInt("Heavy Pistol Mindmg", 0, 130)
UI.AddHotkey("Scout Override")
UI.AddSliderInt("Scout Mindmg", 0, 130)
UI.AddHotkey("AWP Override")
UI.AddSliderInt("AWP Mindmg", 0, 130)
UI.AddHotkey("Auto Override")
UI.AddSliderInt("Auto Mindmg", 0, 130)

var heavy_cache = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage")
var scout_cache = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage")
var awp_cache = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage")
var auto_cache = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage")
function isActive(a)
{
    return UI.IsHotkeyActive("Script Items", a)
}
function setValue(cat, value)
{
    UI.SetValue("Rage", cat.toUpperCase(), "Targeting", "Minimum damage", value)
}
function isHeavyPistol(name)
{
    if (name == "r8 revolver" || name == "desert eagle")
    {
        return true
    }
}
function isAutoSniper(name)
{
    if(name == "scar 20" || weapon_name == "g3sg1")
    {
        return true
    }
}
function onCM()
{
    heavy_value = UI.GetValue("Script items", "Heavy Pistol Mindmg")
    scout_value = UI.GetValue("Script items", "Scout Mindmg")
    awp_value = UI.GetValue("Script items", "AWP Mindmg")
    auto_value = UI.GetValue("Script items", "Auto Mindmg")
    weapon_name =  Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
  
    if (isActive("Heavy Pistol Override") && isHeavyPistol(weapon_name))
    {
        setValue("HEAVY PISTOL", heavy_value)
    }
    else{
        setValue("HEAVY PISTOL", heavy_cache)
    }
  
    if (isActive("Scout Override") && weapon_name == "ssg 08")
    {
        setValue("SCOUT", scout_value)
    }
    else{
        setValue("SCOUT", scout_cache)
    }

    if (isActive("AWP Override") && weapon_name == "awp")
    {
        setValue("AWP", awp_value)
    }
    else{
        setValue("AWP", awp_cache)
    }

    if (isActive("Auto Override") && isAutoSniper(weapon_name))
    {
      
        setValue("AUTOSNIPER", auto_value)
    }
    else
    {
        setValue("AUTOSNIPER", auto_cache)
    }
  
}
function indicator()
{
    screen = Render.GetScreenSize()
    wep = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
    x = screen[0]/2
    y = screen[1]/2
    heavy = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage")
    scout = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage")
    awp = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage")
    auto = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage")
	isFDuking = UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck");
	isDoubletap = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap"	);
    var str = ""
	const font = Render.AddFont("Verdana Bold", 21, 600);
    if (UI.GetValue("Script items", "Display indicator") && Entity.IsValid(Entity.GetLocalPlayer()) && Entity.IsAlive(Entity.GetLocalPlayer()))
    {
        if (isHeavyPistol(wep))
        {
            str = heavy
        }
        else if(wep == "ssg 08")
        {
            str = scout
        }
        else if(wep == "awp")
        {
            str = awp
        }
        else if (isAutoSniper(wep))
        {
            str = auto
        }
    }
    Render.String(12, 994, 0, str+"", [10, 10, 10, 125],4);
    Render.String(11, 993, 0, str+"", [255,255,255,255],4)
}
Cheat.RegisterCallback("Draw", "indicator")
Cheat.RegisterCallback("CreateMove", "onCM")

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
   
    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()

    if (can_shift_shot(14) && is_charged != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    }
}

function _TBC_UNLOAD() {
    Exploit.EnableRecharge();
}

Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");

var materials = []

function createMat(name){
    UI.AddColorPicker(name + " chams")
    UI.AddCheckbox("Hollow " + name.toLowerCase() + " chams")
    UI.AddCheckbox("Pulse " + name.toLowerCase() + " chams")
    UI.AddCheckbox("Rainbow " + name.toLowerCase() + " chams")
    UI.AddCheckbox("Wireframe " + name.toLowerCase() + " chams")
    Material.Create(name + " chams")
    materials.push([name,
         name + " chams",
         "Hollow " + name.toLowerCase() + " chams",
         "Pulse " + name.toLowerCase() + " chams",
         "Rainbow " + name.toLowerCase() + " chams",
         "Wireframe " + name.toLowerCase() + " chams"]);
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
            Material.SetKeyValue(mat_index, "$envmapfresnelminmaxexp", wireframe ? "[0 2 4]" : "[0 1 2]")
            Material.SetKeyValue(mat_index, "$envmaptint", "[" + uicol[0]/255 + " " + uicol[1]/255 + " " + uicol[2]/255 + "]")
            Material.SetKeyValue(mat_index, "$alpha", "1")
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
        Material.Destroy(materials[i][0])
    }
}
Cheat.RegisterCallback("Unload", "onUnload")

var math = require("mathlib.js")
var attacked = false
var settings = UI.AddMultiDropdown("Knifebot", ["Backstab", "Normal", "Doubletap (inconsistent)"])
var backstab = UI.AddHotkey("Wait for backstab")
function isbehind(enemy) {
    var delta = math.VectorSub(Entity.GetRenderOrigin(enemy), Entity.GetEyePosition(Entity.GetLocalPlayer()))
    delta[2] = 0

    var ang = Entity.GetProp(enemy, "CCSPlayer", "m_angEyeAngles")
    ang[0] = ang[0] / 180 * Math.PI
    ang[1] = ang[1] / 180 * Math.PI
    var forward = math.AngleVectors(ang)
    forward[2] = 0
    return (delta[0] * forward[0] + delta[1] * forward[1]) > 18
}
var next_tick_shift = false
function oncm() {
    var local = Entity.GetLocalPlayer()
    var enemies = Entity.GetEnemies()
    if (!(Entity.GetName(Entity.GetWeapon(local)).includes("knife")))
        return
    var weapon = Entity.GetWeapon(local)
    var next_attack = Entity.GetProp(weapon, "DT_BaseCombatWeapon", "m_flNextPrimaryAttack")
    var tickbase = Entity.GetProp(local, "DT_CSPlayer", "m_nTickBase")
    var server_time = tickbase * Globals.TickInterval()
    if(next_attack > server_time)
        return
    var best = -1
    var maxdist = 65
    for (i in enemies) {
        if (Entity.IsAlive(enemies[i])) {
            var start = Entity.GetEyePosition(local)
            var end = Entity.GetHitboxPosition(enemies[i], 3)
            var delta = math.VectorSub(start, end)
            delta = math.VectorLength(delta)
            if (delta < maxdist) {
                maxdist = delta
                best = enemies[i]
            }

            var end = Entity.GetHitboxPosition(enemies[i], 5)
            var delta = math.VectorSub(start, end)
            delta = math.VectorLength(delta)
            if (delta < maxdist) {
                maxdist = delta
                best = enemies[i]
            }

            var end = Entity.GetHitboxPosition(enemies[i], 4)
            var delta = math.VectorSub(start, end)
            delta = math.VectorLength(delta)
            if (delta < maxdist) {
                maxdist = delta
                best = enemies[i]
            }

            var end = Entity.GetRenderOrigin(enemies[i]); end[2] += 30
            var delta = math.VectorSub(start, end)
            delta = math.VectorLength(delta)
            if (delta < maxdist) {
                maxdist = delta
                best = enemies[i]
            }
        }
    }
    if (best == -1)
        return
    var start = Entity.GetEyePosition(local)
    var end = Entity.GetHitboxPosition(best, 3)
    var ang = math.CalculateAngle(start, end)
    if (isbehind(enemies[i]) && maxdist < 70 && (UI.GetValue.apply(null, settings) & 1)) {
        attacked = true
        var buttons = UserCMD.GetButtons()
        buttons |= 2048
        UserCMD.SetButtons(buttons)

        UserCMD.SetViewAngles(ang, true)
    }
    else if (UI.GetValue.apply(null, settings) & 2) {
        var can_slash = false
        var health = Entity.GetProp(best, "CBasePlayer", "m_iHealth")
        if (health <= 55)
            can_slash = true
        var buttons = UserCMD.GetButtons()
        if (can_slash && UI.IsHotkeyActive.apply(null, backstab)) {
            buttons |= 2048
            var dt = Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")

            UserCMD.SetViewAngles(ang, true)
            UserCMD.SetButtons(buttons)
        }
        else if (!UI.IsHotkeyActive.apply(null, backstab)) {
            buttons |= can_slash ? 2048 : 1
            var dt = Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")

            if (buttons & 1 && dt && (UI.GetValue.apply(null, settings) & 4)) {
                UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Doubletap")
            }

            UserCMD.SetViewAngles(ang, true)
            UserCMD.SetButtons(buttons)
        }
    }
}
Cheat.RegisterCallback("CreateMove", "oncm")

/*
*
* Customer: GARBIS#7644
* Author: april#0001
*
*/

//region api
const global = [], globals = [], sound = [], cheat = [], local = [], world = [], input = [], render = [], ui = [], convar = [], event = [], entity = [], trace = [], usercmd = [], antiaim = [], exploit = [], ragebot = [], material = []; global.print = Global.Print, global.print_chat = Global.PrintChat, global.print_color = Global.PrintColor, global.register_callback = Global.RegisterCallback, global.execute_command = Global.ExecuteCommand, global.frame_stage = Global.FrameStage, global.tickcount = Global.Tickcount, global.tickrate = Global.Tickrate, global.tick_interval = Global.TickInterval, global.curtime = Global.Curtime, global.realtime = Global.Realtime, global.frametime = Global.Frametime, global.latency = Global.Latency, global.get_view_angles = Global.GetViewAngles, global.set_view_angles = Global.SetViewAngles, global.get_map_name = Global.GetMapName, global.is_key_pressed = Global.IsKeyPressed, global.get_screen_size = Global.GetScreenSize, global.get_cursor_position = Global.GetCursorPosition, global.play_sound = Global.PlaySound, global.play_microphone = Global.PlayMicrophone, global.stop_microphone = Global.StopMicrophone, global.get_username = Global.GetUsername, global.set_clan_tag = Global.SetClanTag, globals.tickcount = Globals.Tickcount, globals.tickrate = Globals.Tickrate, globals.tick_interval = Globals.TickInterval, globals.curtime = Globals.Curtime, globals.realtime = Globals.Realtime, globals.frametime = Globals.Frametime, sound.play = Sound.Play, sound.play_microphone = Sound.PlayMicrophone, sound.stop_microphone = Sound.StopMicrophone, cheat.get_username = Cheat.GetUsername, cheat.register_callback = function(c, f) { switch (c) { case 'create_move': Cheat.RegisterCallback("CreateMove", f); break; case 'paint': Cheat.RegisterCallback("Draw", f); break; case 'fsn': Cheat.RegisterCallback("FrameStageNotify", f); break; case 'shutdown': Cheat.RegisterCallback("Unload", f); break; default: Cheat.RegisterCallback(c, f); break; } }, cheat.execute_command = Cheat.ExecuteCommand, cheat.frame_stage = Cheat.FrameStage, cheat.print = Cheat.Print, cheat.print_chat = Cheat.PrintChat, cheat.print_color = Cheat.PrintColor, local.latency = Local.Latency, local.get_view_angles = Local.GetViewAngles, local.set_view_angles = Local.SetViewAngles, local.set_clan_tag = Local.SetClanTag, local.get_real_yaw = Local.GetRealYaw, local.get_fake_yaw = Local.GetFakeYaw, local.get_spread = Local.GetSpread, local.get_inaccuracy = Local.GetInaccuracy, world.get_map_name = World.GetMapName, world.get_server_string = World.GetServerString, input.get_cursor_position = Input.GetCursorPosition, input.is_key_pressed = Input.IsKeyPressed, render.string = Render.String, render.text_size = Render.TextSize, render.line = Render.Line, render.rect = Render.Rect, render.filled_rect = Render.FilledRect, render.gradient_rect = Render.GradientRect, render.circle = Render.Circle, render.filled_circle = Render.FilledCircle, render.polygon = Render.Polygon, render.world_to_screen = Render.WorldToScreen, render.add_font = Render.AddFont, render.find_font = Render.FindFont, render.string_custom = Render.StringCustom, render.textured_rect = Render.TexturedRect, render.add_texture = Render.AddTexture, render.text_size_custom = Render.TextSizeCustom, render.get_screen_size = Render.GetScreenSize, ui.get_value = UI.GetValue, ui.set_value = UI.SetValue, ui.add_checkbox = UI.AddCheckbox, ui.add_slider_int = UI.AddSliderInt, ui.add_slider_float = UI.AddSliderFloat, ui.add_hotkey = UI.AddHotkey, ui.add_label = UI.AddLabel, ui.add_dropdown = UI.AddDropdown, ui.add_multi_dropdown = UI.AddMultiDropdown, ui.add_color_picker = UI.AddColorPicker, ui.add_textbox = UI.AddTextbox, ui.set_enabled = UI.SetEnabled, ui.get_string = UI.GetString, ui.get_color = UI.GetColor, ui.set_color = UI.SetColor, ui.is_hotkey_active = UI.IsHotkeyActive, ui.toggle_hotkey = UI.ToggleHotkey, ui.is_menu_open = UI.IsMenuOpen, convar.get_int = Convar.GetInt, convar.set_int = Convar.SetInt, convar.get_float = Convar.GetFloat, convar.set_float = Convar.SetFloat, convar.get_string = Convar.GetString, convar.set_string = Convar.SetString, event.get_int = Event.GetInt, event.get_float = Event.GetFloat, event.get_string = Event.GetString, entity.get_entities = Entity.GetEntities, entity.get_entities_by_class_i_d = Entity.GetEntitiesByClassID, entity.get_players = Entity.GetPlayers, entity.get_enemies = Entity.GetEnemies, entity.get_teammates = Entity.GetTeammates, entity.get_local_player = Entity.GetLocalPlayer, entity.get_game_rules_proxy = Entity.GetGameRulesProxy, entity.get_entity_from_user_i_d = Entity.GetEntityFromUserID, entity.is_teammate = Entity.IsTeammate, entity.is_enemy = Entity.IsEnemy, entity.is_bot = Entity.IsBot, entity.is_local_player = Entity.IsLocalPlayer, entity.is_valid = Entity.IsValid, entity.is_alive = Entity.IsAlive, entity.is_dormant = Entity.IsDormant, entity.get_class_i_d = Entity.GetClassID, entity.get_class_name = Entity.GetClassName, entity.get_name = Entity.GetName, entity.get_weapon = Entity.GetWeapon, entity.get_weapons = Entity.GetWeapons, entity.get_render_origin = Entity.GetRenderOrigin, entity.get_render_box = Entity.GetRenderBox, entity.get_prop = Entity.GetProp, entity.set_prop = Entity.SetProp, entity.get_hitbox_position = Entity.GetHitboxPosition, entity.get_eye_position = Entity.GetEyePosition, trace.line = Trace.Line, trace.bullet = Trace.Bullet, usercmd.set_movement = UserCMD.SetMovement, usercmd.get_movement = UserCMD.GetMovement, usercmd.set_angles = UserCMD.SetAngles, usercmd.force_jump = UserCMD.ForceJump, usercmd.force_crouch = UserCMD.ForceCrouch, antiaim.get_override = AntiAim.GetOverride, antiaim.set_override = AntiAim.SetOverride, antiaim.set_real_offset = AntiAim.SetRealOffset, antiaim.set_fake_offset = AntiAim.SetFakeOffset, antiaim.set_l_b_y_offset = AntiAim.SetLBYOffset, exploit.get_charge = Exploit.GetCharge, exploit.recharge = Exploit.Recharge, exploit.disable_recharge = Exploit.DisableRecharge, exploit.enable_recharge = Exploit.EnableRecharge, ragebot.get_target = Ragebot.GetTarget, ragebot.ignore_target = Ragebot.IgnoreTarget, ragebot.force_target = Ragebot.ForceTarget, ragebot.force_target_safety = Ragebot.ForceTargetSafety, ragebot.force_target_hitchance = Ragebot.ForceTargetHitchance, ragebot.force_target_minimum_damage = Ragebot.ForceTargetMinimumDamage, ragebot.force_hitbox_safety = Ragebot.ForceHitboxSafety, material.create = Material.Create, material.destroy = Material.Destroy, material.get = Material.Get, material.set_key_value = Material.SetKeyValue, material.refresh = Material.Refresh
//endregion

//region dependencies

/**
 * @title BetterUI
 * @version 2.0.1
 * @description A better UI system for Onetap
 */

var menu = {
    _class: 'BetterUI'
};
const menu_spacer = "                                                                                  ";

/**
 * Concats two elements into an array without increasing the array length.
 * Prevents the memory leak in 2.0.0 from happening
 * 
 * @param a {array}
 * @param b {any}
 */
menu.concat = function(a, b)
{
    // Creates a new array.
    var arr = [];

    // Push all items from the array 'a' into our array.
    for (var c in a)
    {
        arr.push(a[c]);
    }

    // Push the value 'b' into our array.
    arr.push(b);

    // Return the new array.
    return arr;
}

/**
 * Creates a new menu label
 *
 * @param label {string}
 */
menu.label = function(label)
{
    // Creates the label
    UI.AddLabel(label);
};

/**
 * Creates a new menu element
 *
 * @param func {function}
 * @param name {string}
 * @param label {string},
 * @param properties {array}
 */
menu.call = function(func, name, label, properties)
{
    // Get properties
    const final_name = name + menu_spacer + label;
    var final_props = [final_name];
    const element_info_t = {
        path: ["Misc", "JAVASCRIPT", "Script Items", final_name]
    };

    // If our properties aren't null, then pack them together.
    if (properties != null)
    {
        for (var i = 0; i < properties.length; i++)
        {
            final_props.push(properties[i]);
        }
    }

    // Create our menu element and return properties
    func.apply(null, final_props);
    return element_info_t;
};

/**
 * Creates a new menu reference
 *
 * @param path {array}
 */
menu.reference = function(path)
{
    const element_info_t = {
        path: path
    };

    return element_info_t;
};

/**
 * Gets the value of a menu element
 *
 * @param elem {array}
 * @return {*}
 */
menu.get = function(elem)
{
    // If the element doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Returns the element's value
    return UI.GetValue.apply(null, elem.path);
};

/**
 * Gets the value of a menu element
 *
 * @param elem {array}
 * @return {*}
 */
menu.get_hotkey = function(elem)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Returns the element's value
    return UI.IsHotkeyActive.apply(null, elem.path);
};

/**
 * Gets the value of a menu element
 *
 * @param elem {array}
 * @return {*}
 */
menu.get_color = function(elem)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Returns the element's value
    return UI.GetColor.apply(null, elem.path);
};

/**
 * Sets the value of a menu element
 *
 * @param elem {array}
 * @param value {*}
 */
menu.set = function(elem, value)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Get properties
    const properties = elem;

    // Set the element's value
    UI.SetValue.apply(null, this.concat(properties.path, value));
};

/**
 * Sets the value of a color picker
 *
 * @param elem {array}
 * @param color {array|Color}
 */
menu.set_color = function(elem, color)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Get properties
    const properties = elem;

    // Set the element's value
    UI.SetColor.apply(null, this.concat(properties.path, color));
};

/**
 * Toggles a hotkey
 *
 * @param elem {array}
 */
menu.toggle = function(elem)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Set the element's value
    UI.ToggleHotkey.apply(null, elem.path);
};

/**
 * Changes the visibility of a menu elements
 *
 * @param elem {array}
 * @param visible {boolean}
 */
menu.visibility = function(elem, visible)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Get properties
    const properties = elem;

    // Change the element's visibility
    UI.SetEnabled.apply(null, this.concat(properties.path, visible));
};

const distance_in_ft = function(origin, destination)
{
    const sub = [destination[0] - origin[0], destination[1] - origin[1], destination[2] - origin[2]];
    return Math.round(Math.sqrt(sub[0] ** 2 + sub[1] ** 2 + sub[2] ** 2) / 12);
}

const clamp = function(v, f, c)
{
    return Math.min(Math.max(v, f), c);
}

render.arc = function(x, y, r1, r2, s, d, col)
{
    for (var i = s; i < s + d; i++)
    {

        const rad = i * Math.PI / 180;

        render.line(x + Math.cos(rad) * r1, y + Math.sin(rad) * r1, x + Math.cos(rad) * r2, y + Math.sin(rad) * r2, col);
    }
}

const is_inside_screen = function(vec)
{
    const screen_size = render.get_screen_size();
    return vec[0] > 0 && vec[1] > 0 && vec[0] < screen_size[0] && vec[1] < screen_size[1];
}

//endregion

//region globals

var positions = [];

//endregion

//region menu

const enable = menu.call(ui.add_checkbox, "| Grenade warning", "gw_enable", []);
const tracer = menu.call(ui.add_checkbox, "| Grenade tracer", "gw_tracer", []);
const tracer_color = menu.call(ui.add_color_picker, "| Grenade tracer color", "gw_tracer_clr", []);
const max_dst = menu.call(ui.add_slider_int, "| Maximum distance", "gw_dist", [0, 500]);

//endregion

//region main

function import_nades() 
{
    if (!(menu.get(tracer)))
        return;

    grenades = entity.get_entities_by_class_i_d(9).concat(entity.get_entities_by_class_i_d(113)).concat(entity.get_entities_by_class_i_d(100));
    for (e in grenades) 
    {

        should_pass = false;

        for (g in positions) 
        {
            if (positions[g][0] == grenades[e]) {
                should_pass = true;
                continue;
            }
        }

        if (should_pass)
            continue;

        positions.push([grenades[e], Globals.Curtime(), [entity.get_render_origin(grenades[e])], Globals.Curtime()]);
    }
}

function render_trails() 
{
    const length = 256, rate = 0.1;
    const color = menu.get_color(tracer_color);

    for (g in positions) 
    {
        if (globals.curtime() - positions[g][3] > 3 || !entity.is_valid(positions[g][0])) 
        {
            positions.shift();
            continue;
        }

        if (globals.curtime() - positions[g][1] > rate) 
        {
            if (positions[g][2].length > length) 
            {
                positions[g][2].shift();
                positions[g][1] = globals.curtime();
            }

            positions[g][2].push(entity.get_render_origin(positions[g][0]));
        }

        for (l in positions[g][2]) 
        {
            pos = render.world_to_screen(positions[g][2][l]);

            if (l > 0) 
            {
                last = render.world_to_screen(positions[g][2][l - 1]);

                render.line(pos[0] - 1, pos[1] - 1, last[0] - 1, last[1] - 1, color);
                render.line(pos[0] - 1, pos[1] + 1, last[0] - 1, last[1] + 1, color);
                render.line(pos[0] + 1, pos[1] - 1, last[0] + 1, last[1] - 1, color);
                render.line(pos[0] + 1, pos[1] + 1, last[0] + 1, last[1] + 1, color);
                render.line(pos[0], pos[1], last[0], last[1], color);
            }

            last = render.world_to_screen(positions[g][2][positions[g][2].length - 1]);
        }
    }
}

function on_paint( )
{
    if (!(menu.get(enable)) && !(menu.get(tracer)))
        return;
    
    const grenades = entity.get_entities_by_class_i_d(9).concat(entity.get_entities_by_class_i_d(113)).concat(entity.get_entities_by_class_i_d(100));

    const me = entity.get_local_player( );

    if (!me)
        return;
    
    if (!entity.is_alive(me))
    {
        const obs = entity.get_prop(me, "CBasePlayer", "m_hObserverTarget");

        if (!entity.is_valid(obs))
            return;
        
        me = obs;
    }

    const origin = entity.get_eye_position(me);

    for (var i = 0; i < grenades.length; i++)
    {
        const g = grenades[i];

        const destination = entity.get_render_origin(g);
        const distance = distance_in_ft(origin, destination);

        if (distance > menu.get(max_dst))
        {
            continue;
        }

        const screen = render.world_to_screen(destination);
        const is_he = entity.get_class_i_d(g) === 9, is_inferno = entity.get_class_i_d(g) === 100;

        const trace = Trace.Line(me, origin, destination);

        const is_safe = distance > (is_inferno ? 15 : 20) || trace[1] < 0.61;

        if (is_he && entity.get_prop(g, "CBaseCSGrenadeProjectile", "m_nExplodeEffectTickBegin"))
        {
            continue;
        }

        render.filled_circle(screen[0], screen[1] - 50, 30, !is_safe ? [225, 20, 20, 175 ] : [20, 20, 20, 175]);
        render.string(screen[0], screen[1] - 75, 1, "!", [255, 250, 175, 200], 4);
        render.string(screen[0], screen[1] - 40, 1, distance + " ft", [232, 232, 232, 200], 3);

        if (is_inferno)
        {
            const time = entity.get_prop(g, "CInferno", "m_nFireEffectTickBegin") * globals.tick_interval();
            const factor = clamp(((time + 7) - globals.curtime()) / 7, 0, 7);
            
            render.arc(screen[0], screen[1] - 50, 30, 32, -90, 360 * factor, [232, 232, 232, 200]);
        }
    }
}

//endregion

//region callbacks

cheat.register_callback("paint", "import_nades");
cheat.register_callback("paint", "render_trails");
cheat.register_callback("paint", "on_paint");

//endregion

UI.AddColorPicker("Watermark");
var color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");

if (color[3] == 0)
	UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Watermark", [89, 119, 239, 255]);

function draw() {
	if(!World.GetServerString())
		return;

	var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
	var seconds1 = today.getSeconds();
	
    var hours = hours1 <= 9 ? "0"+hours1+":" : hours1+":";
    var minutes = minutes1 <= 9 ? "0" + minutes1+":" : minutes1+":";
	var seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;
	
	var server_tickrate = Globals.Tickrate().toString()
	var ebanaya_hueta = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString() // кто это сделал - контуженный на всю голову ебаный хуесос

	color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");

	var font = Render.AddFont("Verdana", 7, 400);
	var text = "gamesense | " + Cheat.GetUsername() + " | delay: " + ebanaya_hueta + "ms | " + server_tickrate + "tick | " + hours + minutes + seconds;
	
	var w = Render.TextSizeCustom(text, font)[0] + 8;
	var x = Global.GetScreenSize()[0];

	x = x - w - 10;

	Render.FilledRect(x, 10, w, 2, [ color[0], color[1], color[2], 255 ]);
	Render.FilledRect(x, 12, w, 18, [ 17, 17, 17, color[3] ]);
	Render.StringCustom(x+4, 10 + 4, 0, text, [ 255, 255, 255, 255 ], font);
}

Cheat.RegisterCallback("Draw", "draw");

UI.AddHotkey("Legit AA on bind")
var restrictions_cache = UI.GetValue ("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions")
var hiderealangle_cache = UI.GetValue ("Anti-Aim", "Fake angles", "Hide real angle")
var yawoffset_cache = UI.GetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset")
var pitch_cache = UI.GetValue ("Anti-Aim", "Extra", "Pitch")
var isOriginal = true

function legitaa()
{
    if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Legit AA on bind"))
    {
        if(isOriginal)
        {
            restrictions_cache = UI.GetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions")
            hiderealangle_cache = UI.GetValue ("Anti-Aim", "Fake angles", "Hide real angle")
            yawoffset_cache = UI.GetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset")
            pitch_cache = UI.GetValue ("Anti-Aim", "Extra", "Pitch")
            isOriginal = false;
        }
        UI.SetValue ("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0)
        UI.SetValue ("Anti-Aim", "Fake angles", "Hide real angle", true)
        UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180)
        UI.SetValue ("Anti-Aim", "Extra", "Pitch", 0)
    }
    else
    {
        if(!isOriginal)
        {
            UI.SetValue ("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", restrictions_cache)
            UI.SetValue ("Anti-Aim", "Fake angles", "Hide real angle", hiderealangle_cache)
            UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yawoffset_cache)
            UI.SetValue ("Anti-Aim", "Extra", "Pitch", pitch_cache)
            isOriginal = true;
        }
    }
}
Cheat.RegisterCallback("CreateMove", "legitaa")