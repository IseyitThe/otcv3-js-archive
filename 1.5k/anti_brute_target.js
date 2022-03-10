/////////////////////////////////////////////////////////////////////////////////////////
// AntiBrute - By ERRORNAME (onetap forum name wntjq69)                                //
// Public Version - feel free to paste anything from this, just remember to credit me. //
/////////////////////////////////////////////////////////////////////////////////////////
// Credits:                                                                            //
// Valve - many shits from mathlib                                                     //
// https://github.com/ValveSoftware/source-sdk-2013/tree/master/sp/src/public/mathlib  //
/////////////////////////////////////////////////////////////////////////////////////////

UI.AddDropdown("Anti Bruteforce", ["Off", "On Hit", "On Shot"]);
UI.AddCheckbox("[Anti Bruteforce] At targets");


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

var playerList = [];

function OnHurt()
{
    if (GetScriptOption("Anti Bruteforce") == 0) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) !== Entity.GetLocalPlayer()) return;
    var hitbox = Event.GetInt('hitgroup');
	var entity = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
	
    //if (hitbox == 1 || hitbox == 6 || hitbox == 7)  //head, both toe
    //{
        var curtime = Global.Curtime();
        if (Math.abs(lastHitTime - curtime) > 0.5)   //0.2s backtrack + 0.2 extand + 0.1 extra
        {
            lastHitTime = curtime;
            Flip();
			
			var invertState = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter");
			var doesExist = false;
			var entityName = Entity.GetName(entity);
			
			for (var i = 0; i < playerList.length; i++) 
			{
				if(playerList[i][0] == entity) 
				{
					playerList[i][2] = invertState;
					doesExist = true;
					break;
				}
			}
			if(!doesExist) 
			{
				playerList.push([entity, entityName, invertState]);
			}
        }
   // }
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
        
        if (bodyDist < 96.0)       //he clearly shot at us!
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

            if (VectorDistance(closestRayPoint, fakePos) > VectorDistance(closestRayPoint, realPos))        //they shot at our fake. they will probably not gonna shoot it again.
            {
                lastHitTime = curtime;
                Flip();
				
				var invertState = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter");
				var doesExist = false;
				var entityName = Entity.GetName(entity);
				
				for (var i = 0; i < playerList.length; i++) 
				{
					if(playerList[i][0] == entity) 
					{
						playerList[i][2] = invertState;
						doesExist = true;
						break;
					}
				}
				if(!doesExist) 
				{
					playerList.push([entity, entityName, invertState]);
				}
            }
        }

        lastImpacts[entity] = impact;
        lastImpactTimes[entity] = curtime;
    }
	//var isKeyActive = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter");
    //Cheat.Print( "Key is: " + isKeyActive + "\n" );
}

function closestToCrosshair() {
	var closestTarget = -1;
	var closestTargetPosition = [100000, 100000];
	
	var screenSize = Render.GetScreenSize();
	var screenMiddle = [(screenSize[0] / 2), (screenSize[1] / 2)];
	var enemies = Entity.GetEnemies();
	
	var closestTargetDistance = 100000;
    for (var i=0; i < enemies.length; i++)
    {
        var eyePosition = Entity.GetEyePosition(enemies[i]);
		var w2s = Render.WorldToScreen(eyePosition);

		if(w2s == undefined)
			continue;
			
		var buffer = Math.sqrt(Math.pow(screenMiddle[0] - w2s[0], 2) + Math.pow(screenMiddle[1] - w2s[1], 2));
		
		if(buffer < closestTargetDistance) {
			closestTarget = enemies[i];
			closestTargetPosition = w2s;
			closestTargetDistance = buffer;
		}

    }
	
	return closestTarget
}
var closest = -1;
var oldPlayerList = "";
var was_key_down = false;

function AtTarget() {

	/*var c4 = Entity.GetEntitiesByClassID(128);
	for ( i = 0; i < c4.length; i++)
    {
		var name = Entity.GetClassName( c4[i] );
		var leftTime = (Globals.Curtime() - Entity.GetProp(c4[i], "CPlantedC4", "m_flC4Blow"));
		Cheat.Print("Name: " + name + " Time: " + leftTime + " " + i + '\n');
	}*/
	if (GetScriptOption("Anti Bruteforce") == 0) return;
	if (GetScriptOption("[Anti Bruteforce] At targets") == 0) return;
	if (closestToCrosshair() == -1) return;
	
	var closestTarget = closestToCrosshair();
	Render.String( 50, 400, 0, "Anti-Aim Target: " + Entity.GetName(closestTarget), [ 255, 255, 255, 255 ] );
	
    var invertState = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter");
    
    if(!was_key_down)
        was_key_down = Input.IsKeyPressed(0x43);

	closest = closestToCrosshair();
	
	var enemies = Entity.GetEnemies();
	
    for (var i = 0; i < playerList.length; i++)
    {
		var doesExist = false;
		
        for (var j = 0; j < enemies.length; j++)
		{
			var name = Entity.GetName(enemies[j]);
			
			if(name == playerList[i][1])
			{
				doesExist = true;
			}
		}
		
		if(!doesExist)
		{
			playerList.splice(i, 1);
		}
    }
	
	for (var i = 0; i < playerList.length; i++) 
	{
		if(playerList[i][0] == closest) 
		{
            if(was_key_down && !Input.IsKeyPressed(0x43))
            {
                if(playerList[i][2] == 0)
                {
                    playerList[i][2] = 1;
                }
                else
                {
                    playerList[i][2] = 0;
                }
                Cheat.Print("gay");
                was_key_down = false;
            }
			if(playerList[i][2] != invertState)
			{
				Flip();
			}
			break;
		}
	}
	
	if(JSON.stringify(playerList) != oldPlayerList) 
	{
		Cheat.Print(JSON.stringify(playerList) + "\n");
		oldPlayerList = JSON.stringify(playerList);
	}
}

realPos = [0, 0, 0]
fakePos = [0, 0, 0]
function main()
{
    
    /*var posi2 = Render.WorldToScreen(realPos);
    var posi = Render.WorldToScreen(fakePos);
    Render.Line( posi2[0], posi2[1], posi[0], posi[1], [ 255, 0, 0, 255 ] );

    Render.Line( posi2[0], posi2[1], 0, 0, [ 0, 255, 0, 255 ] );

    Render.Line( posi[0], posi[1], 0, 0, [ 0, 0, 255, 255 ] );*/
}

Cheat.RegisterCallback("player_hurt", "OnHurt");
Cheat.RegisterCallback("bullet_impact", "OnBulletImpact");
Cheat.RegisterCallback("Draw", "AtTarget");
Cheat.RegisterCallback("Draw", "main");