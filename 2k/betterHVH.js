Cheat.PrintChat(" ");
Cheat.PrintChat(" ");
Cheat.PrintChat(" ");
Cheat.PrintChat(" ");
Cheat.PrintChat(" ");
Cheat.PrintChat("thank you for purchasing XanaXsoftware!");
Cheat.PrintChat("Join the discord https://discord.gg/83qgF8s");


//instant dt

function insta_dt()
{	
	var dt_speed = UI.GetValue("DT Speed");
	if(dt_speed == 0) return;
	Exploit.OverrideShift(14);
	Exploit.OverrideTolerance(-1+dt_speed);
}
Cheat.RegisterCallback("CreateMove", "insta_dt")
//toe safety
function cm()
{	
	if(UI.GetValue("Script items","Toe Safety") == 1)
	{
		Ragebot.ForceHitboxSafety(9)
		Ragebot.ForceHitboxSafety(10)
		Ragebot.ForceHitboxSafety(11)
		Ragebot.ForceHitboxSafety(12)
	}
}
Cheat.RegisterCallback("CreateMove", "cm")
//prefer same target dt
var last_target = -1
var tick = 0
function rage_fire()
{
	if(UI.GetValue("Script items","Prefer Same Target DT") == 1)
	{
		var exploit = Event.GetInt("exploit")
		var target = Event.GetInt("target_index")
		var dt = UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && UI.GetValue("Rage", "GENERAL", "Exploits", "Doubletap")
		if(dt && exploit == 1)
		{
			last_target = target
			tick = Globals.Tickcount()
		}
		else if(exploit == 2)
		{
			last_target = -1
		}
	}
}
function cm2()
{
    if(last_target == -1 || !Entity.IsValid(last_target) || !Entity.IsAlive(last_target) || Globals.Tickcount() - tick > 12)
    {
        last_target = -1
        return
    }
    Ragebot.ForceTarget(last_target)
}
Cheat.RegisterCallback("ragebot_fire", "rage_fire")
Cheat.RegisterCallback("CreateMove", "cm2")


//mm fastduck
function on_create_move()
{
    var buttons = UserCMD.GetButtons();
    
    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "MM Fast Duck"))
        UserCMD.SetButtons(buttons | (1 << 22));
}

Cheat.RegisterCallback("CreateMove", "on_create_move");

//aa

function GetScriptOption(name)
{
    var Value = UI.GetValue("Misc", "JAVASCRIPT", "Script items", name);
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
	var aa_type = UI.GetValue("Script items","AA Type");
	if(aa_type == 0)
	{
		UI.ToggleHotkey("Anti-Aim","Fake angles","Inverter");
	}
	if(aa_type == 1)
	{
		UI.ToggleHotkey("Script items","Inverter");
	}
	if(aa_type == 2)
	{
		UI.ToggleHotkey("Script items","Inverter");
	}
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
    if (GetScriptOption("Anti-Bruteforce") == 1)
	{
		if (Entity.GetEntityFromUserID(Event.GetInt("userid")) !== Entity.GetLocalPlayer()) return;
		var hitbox = Event.GetInt('hitgroup');
	
// f	lip on hit
	
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
	if (GetScriptOption("Anti-Bruteforce") == 3)
	{
		if (Entity.GetEntityFromUserID(Event.GetInt("userid")) !== Entity.GetLocalPlayer()) return;
		var hitbox = Event.GetInt('hitgroup');
	
// f	lip on hit
	
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
}

function OnBulletImpact()
{
    if (GetScriptOption("Anti-Bruteforce") == 0) return;
	if (GetScriptOption("Anti-Bruteforce") == 1) return;
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
		var inv_distance = UI.GetValue("Script items","Miss Within X Units");
        var bodyVec = ClosestPointOnRay(localBody, source, impact);
        var bodyDist = VectorDistance(localBody, bodyVec);
        
        if (bodyDist < inv_distance)       //he clearly shot at us!
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


function onCreateMove() {

    if (Entity.IsAlive(Entity.GetLocalPlayer()) && UI.GetValue('Script items', 'Spam Inverter')) {
		
        UI.ToggleHotkey("Script items","Inverter"); 	

    }

}

Cheat.RegisterCallback('CreateMove', 'onCreateMove')
//lol imagine using aa scripts HHH
multiplierOptions = [0,001 ];
var spin = 0;
var movefl = 0;
function wrap(val, min, max) {
    var dif = max - min;
    
    while (val > max) val -= dif;
    while (val < min) val += dif;
    
    return val;
}



function aaLoop() {
	var inverted = UI.IsHotkeyActive("Script items","Inverter");
	var aa_type = UI.GetValue("Script items","AA Type");
	if(aa_type == 0)
	{
		UI.SetValue("Misc","PERFORMANCE & INFORMATION","Information","Restrictions",1);
		UI.SetValue("Anti-Aim","Extra","Pitch",1);
		AntiAim.SetOverride(0);
	}
	if(aa_type == 1)
	{
		UI.SetValue("Misc","PERFORMANCE & INFORMATION","Information","Restrictions",1);
		UI.SetValue("Anti-Aim","Extra","Pitch",1);
		AntiAim.SetOverride(1);
		UI.SetValue("Anti-Aim","Fake-Lag","Limit",14);
		UI.SetValue("Anti-Aim","Fake-Lag","Jitter",0);
		UI.SetValue("Anti-Aim","Fake-Lag","Triggers",0);
		UI.SetValue("Anti-Aim","Fake-Lag","Trigger limit",0);
		UI.SetValue("Anti-Aim","Rage Anti-Aim","Yaw offset",0);
		UI.SetValue("Anti-Aim","Rage Anti-Aim","Jitter offset",3);
	}
	if(aa_type == 2)
	{
		UI.SetValue("Misc","PERFORMANCE & INFORMATION","Information","Restrictions",0);
		UI.SetValue("Anti-Aim","Extra","Pitch",0);
		AntiAim.SetOverride(1);
		UI.SetValue("Script items","Spam Inverter",false);
		UI.SetValue("Anti-Aim","Rage Anti-Aim","Jitter offset",0);
	}
	if(aa_type == 3)
	{
		UI.SetValue("Misc","PERFORMANCE & INFORMATION","Information","Restrictions",1);
		AntiAim.SetOverride(0);
		UI.SetValue("Anti-Aim","Fake-Lag","Limit",movefl);
		movefl = wrap(movefl + 1, 0, 9)
	}
	if(aa_type == 4)
	{
		UI.SetValue("Misc","PERFORMANCE & INFORMATION","Information","Restrictions",1);
		AntiAim.SetOverride(0);
		UI.SetValue("Script items","Spam Inverter",false);
		UI.SetValue("Anti-Aim","Rage Anti-Aim","Jitter offset",96);
		UI.SetValue("Anti-Aim","Fake-Lag","Limit",14);
		UI.SetValue("Anti-Aim","Fake-Lag","Jitter",0);
		UI.SetValue("Anti-Aim","Fake-Lag","Triggers",0);
		UI.SetValue("Anti-Aim","Fake-Lag","Trigger limit",0);
	}	
	if(aa_type == 1 && inverted == 0)
	{
        AntiAim.SetFakeOffset(getRandomIntInclusive( 5969, -5969)+155);
        AntiAim.SetRealOffset(getRandomIntInclusive( -3425, 3425)+155);
	}
	if(aa_type == 1 && inverted == 1)
	{
		AntiAim.SetRealOffset(getRandomIntInclusive( 5969, -5969)+179);
        AntiAim.SetFakeOffset(getRandomIntInclusive( -3425, 3425)+179);
	}
	if(aa_type == 2 && inverted == 0)
	{
        AntiAim.SetFakeOffset(60);
        AntiAim.SetRealOffset(180);
		UI.SetValue("Anti-Aim","Rage Anti-Aim","Yaw offset",135);
	}
	if(aa_type == 2 && inverted == 1)
	{
        AntiAim.SetFakeOffset(-60);
        AntiAim.SetRealOffset(180);
		UI.SetValue("Anti-Aim","Rage Anti-Aim","Yaw offset",-135);
	}
	if (aa_type == 3 && inverted == 0) 
	{
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", spin);
        spin = wrap(spin + 66, -180, 180)
    }
	if (aa_type == 3 && inverted == 1) 
	{
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", spin);
        spin = wrap(spin - 66, -180, 180)
	}
	if (aa_type == 4 && inverted == 0) 
	{
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", spin+90);
        spin = wrap(spin + 66, -180, 180)
    }
	if (aa_type == 4 && inverted == 1) 
	{
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", spin+270);
        spin = wrap(spin - 66, -180, 180)
    }
}
Cheat.RegisterCallback("CreateMove", "aaLoop");


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (min * max - 0,0003)) + min; //The maximum is inclusive and the minimum is inclusive
}
//clantag
var count = 0
var speed_setting = 500;
var xanax_clantag = ["|X|a|n|a|X|","|X|a|n|a|X|","|X|a|n|a|X|","|X|a|n|a|X|","|X|a|n|a|X|","|SX|a|n|a|X|","|SO|a|n|a|X|","|SOFa|n|a|X|","|SOFT|n|a|X|","|SOFTWn|a|X|","|SOFTWA|a|X|","|SOFTWARa|X|","|SOFTWARE|X|","|SOFTWARE.GX|","|SOFTWARE.GA|"]
function poggers_clantag()
{
	var speed_setting = (UI.GetValue("Script items","Clantag Speed") * 250 + 500);
	if(UI.GetValue("Script items","XanaX Clantag") == 1)
	{
		count++
		if (count > 20) {
			count = 0
			Local.SetClanTag(xanax_clantag[Math.round(new Date()
				.getTime() / speed_setting) % xanax_clantag.length]);
		}
	}
	if(UI.GetValue("Script items","XanaX Clantag") == 0)
	{
		Local.SetClanTag(" ");	
	}
}
Cheat.RegisterCallback('CreateMove', 'poggers_clantag');

//killsay
function Killsay()
{	
    var roasts = ['XanaXsoftware - make sure its not laced','dont you wish you had XanaXsoftware?','XanaXsoftware - you cant argue with performance','XanaXsoftware - so good you wont want anything else','XanaXsoftware - created with love (and some fentanyl) by andrew elliot','ask andrew for an invite, i promise you wont get blacklisted!','XanaXsoftware- you wouldnt dream of refunding this','XanaXsoftware - built to be the best','homie should have gotten xanaxsoftware.ga','this kill was brought to you by XanaXsoftware.ga','XanaXsoftware - software for the modern hvher']
    var roast = roasts[Math.floor(Math.random()*roasts.length)];
	var tag = UI.GetValue( "Script items", "XanaX Killsay" );
    if (tag == 1) {
        attacker = Event.GetInt("attacker");
        attacker_index = Entity.GetEntityFromUserID(attacker);

    if (attacker_index == Entity.GetLocalPlayer())
    {
        Global.ExecuteCommand("say " + roast + "\n");
        }
    }
}
Global.RegisterCallback("player_death", "Killsay");
Cheat.RegisterCallback("CreateMove", "slowWalk");

function getVal(valName) {return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valName);}
//slow walk
function slowWalk() {
    //forward, side, up.
    if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Slow-walk")) return;

    speed = getVal("Speed");

    fSpeed = speed;
    bSpeed = speed;
    sSpeed = speed;

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


function render_arc(x, y, radius, radius_inner, start_angle, end_angle, segments, color)
{
    while(360 % segments != 0)
    {
        segments++;
    }

    segments = 360 / segments;

    for (var i = start_angle; i < start_angle + end_angle; i = i + segments)
    {

        var rad = i * Math.PI / 180;
        var rad2 = (i + segments) * Math.PI / 180;

        var rad_cos = Math.cos(rad)
        var rad_sin = Math.sin(rad)

        var rad2_cos = Math.cos(rad2);
        var rad2_sin = Math.sin(rad2);

        var x1_outer = x + rad_cos * radius;
        var y1_outer = y + rad_sin * radius;

        var x2_outer = x + rad2_cos * radius;
        var y2_outer = y + rad2_sin * radius;

        var x1_inner = x + rad_cos * radius_inner;
        var y1_inner = y + rad_sin * radius_inner;

        var x2_inner = x + rad2_cos * radius_inner;
        var y2_inner = y + rad2_sin * radius_inner;

        Render.Polygon( [
            [ x1_outer, y1_outer ],
            [ x2_outer, y2_outer ],
            [ x1_inner, y1_inner ] ],
            color
        );

        Render.Polygon( [
            [ x1_inner, y1_inner ],
            [ x2_outer, y2_outer ],
            [ x2_inner, y2_inner ] ],
            color
        );
    }
}

function draw_circle(x, y, radius, thickness, color)
{
    var inner = radius - thickness;

    for(; radius > inner; --radius)
    {
        Render.Circle(x, y, radius, color);
    }
}

function render() {
    boldness = (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', "Boldness"));
    colorenabled = (UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', "Color Enabled"));
    colordisabled = (UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', "Color Disabled"));
    invertercolor = (UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', "Inverter Color"));
    font = Render.AddFont("tahoma", 17, boldness);
    charge = Exploit.GetCharge();
    max_angle = 360*Exploit.GetCharge();
    selected = (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Indicators")).toString(2).split("").reverse().map(Number);
    var Center = Render.GetScreenSize();
    var CenterX = Center[0] / 3.5
    var CenterY = Center[1] / 2

    //Doubletap Indicator

    if (selected[0]) {

        if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && charge == 1) {
            Render.StringCustom(CenterX, CenterY + 64.5, 1, "iDT", [0, 0, 0, 255], font);
            Render.StringCustom(CenterX, CenterY + 65, 1, "iDT", colorenabled, font);
        } else {
            Render.StringCustom(CenterX, CenterY + 64.5, 1, "iDT", [0, 0, 0, 255], font);
            Render.StringCustom(CenterX, CenterY + 65, 1, "iDT", colordisabled, font);
        }
    }
	
	if (selected[0]) {

        if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")&& charge < 1) {
            Render.StringCustom(CenterX, CenterY + 64.5, 1, "iDT", [0, 0, 0, 255], font);
            Render.StringCustom(CenterX, CenterY + 65, 1, "iDT", [195,195,195,255], font);
        }
    }
    //Hide Indicator

    if (selected[1]) {
        if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots")) {
            Render.StringCustom(CenterX, CenterY + 89.5, 1, "HS", [0, 0, 0, 255], font);
            Render.StringCustom(CenterX, CenterY + 90, 1, "HS", colorenabled, font);
        } else {
            Render.StringCustom(CenterX, CenterY + 89.5, 1, "HS", [0, 0, 0, 255], font);
            Render.StringCustom(CenterX, CenterY + 90, 1, "HS", colordisabled, font);
        }
    }

    //Fakeduck Indicator

    if (selected[2]) {
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
            Render.StringCustom(CenterX, CenterY + 114.5, 1, "FD", [0, 0, 0, 255], font);
            Render.StringCustom(CenterX, CenterY + 115, 1, "FD", colorenabled, font);
        } else {
            Render.StringCustom(CenterX, CenterY + 114.5, 1, "FD", [0, 0, 0, 255], font);
            Render.StringCustom(CenterX, CenterY + 115, 1, "FD", colordisabled, font);
        }
    }

    //Inverter Indicator

    if (selected[3]) {
        if (UI.IsHotkeyActive("Script items","Inverter")) {
            Render.StringCustom(CenterX, CenterY + 139.5, 1, "> R >", [0, 0, 0, 255], font);
            Render.StringCustom(CenterX, CenterY + 140, 1, "> R >", invertercolor, font);
        } else {
            Render.StringCustom(CenterX, CenterY + 139.5, 1, "< L <", [0, 0, 0, 255], font);
            Render.StringCustom(CenterX, CenterY + 140, 1, "< L <", invertercolor, font);
        }
    }
	if (selected[4]) {
        if (UI.IsHotkeyActive("Legit","GENERAL","Triggerbot","Enabled")) {
            Render.StringCustom(CenterX, CenterY + 139.5, 1, "TRIG", [0, 0, 0, 255], font);
            Render.StringCustom(CenterX, CenterY + 140, 1, "TRIG", invertercolor, font);
        } else {
            Render.StringCustom(CenterX, CenterY + 139.5, 1, "TRIG", [0, 0, 0, 255], font);
            Render.StringCustom(CenterX, CenterY + 140, 1, "TRIG", invertercolor, font);
        }
    }
}

Cheat.RegisterCallback("Draw", "render")

UI.AddLabel(" ");
UI.AddSliderFloat("XanaX Utils",0,0);
UI.AddLabel(" ");
UI.AddSliderFloat("//RageBot//",0,0);
UI.AddDropdown("DT Speed",["off","2t","3t","4t","5t"]);
UI.AddCheckbox("Toe Safety");
UI.AddCheckbox("Prefer Same Target DT");
UI.AddDropdown("AA Type",["Disabled","Funny Haha Angle","Freestand Legit AA","Helicockter","140 Farmhou$e"]);
UI.AddHotkey("Inverter");
UI.AddHotkey("Slow-walk");
UI.AddSliderInt("Speed", 0, 135);
UI.AddDropdown("Anti-Bruteforce", ["Off", "Hit", "Miss","Hit/Miss"]);
UI.AddSliderInt("Miss Within X Units",0,240);
UI.AddCheckbox('Spam Inverter');
UI.AddLabel(" ");
UI.AddSliderFloat("//Extras//",0,0);
UI.AddCheckbox("XanaX Killsay");
UI.AddCheckbox("XanaX Clantag");
UI.AddCheckbox("MM Fast Duck");
UI.AddSliderInt("Clantag Speed",0,5);
UI.AddLabel(" ");
UI.AddSliderFloat("//Visuals//",0,0);
UI.AddMultiDropdown( "Indicators", [ "DT", "Hide Shots", "FD", "Inverter", "Triggerbot"] );
UI.AddSliderInt("Boldness", 100, 1000);
UI.AddColorPicker("Color Enabled");
UI.SetColor('Script items', "Color Enabled", [163, 240, 41, 255]);
UI.AddColorPicker("Color Disabled");
UI.SetColor('Script items', "Color Disabled", [242, 29, 29, 255]);
UI.AddColorPicker("Inverter Color");
UI.SetColor('Script items', "Inverter Color", [255, 255, 255, 255]);
UI.AddSliderFloat(" ",0,0);