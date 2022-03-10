

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
    if(a[0] == b[0] && a[1] == b[1] && a[2] == b[2] )
      return 0
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
var spots = []
var last_impact = [];
var enemies_list = [];
function OnBulletImpact()

{
    if(!Entity.IsValid(Entity.GetLocalPlayer()) || !Entity.IsAlive(Entity.GetLocalPlayer()))
      return;
    var curtime = Global.Curtime();

    //if (Math.abs(lastHitTime - curtime) < 0.2) return;



    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));

    var impact = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z"), curtime];

    var source;
    if(last_impact[entity] == null)
      last_impact[entity] = 0;
    if (Entity.IsValid(entity) && Entity.IsEnemy(entity) && Global.Tickcount() - last_impact[entity] > 2)
    {

      source = Entity.GetEyePosition(entity);
      closest = ClosestPointOnRay(Entity.GetEyePosition(Entity.GetLocalPlayer()) , source , impact)
      //screen_closest = Render.WorldToScreen(closest);

      dis = VectorDistance(closest,Entity.GetEyePosition(Entity.GetLocalPlayer()))
      if (dis < 128)
      {
        if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "AA Priority Indicator"))
          spots.push(closest)
        last_impact[entity] = Global.Tickcount()
        enemies_list[entity] = UI.IsHotkeyActive( "Anti-Aim", "Fake angles", "Inverter" ) ? 1 : 2; // 1 NOT TOGGLED ---- 2 TOGGLED
        //Cheat.Print("FLIP \n")
      }
    }

}

function OnHurt()

{

    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) != Entity.GetLocalPlayer()) return;

    var hitbox = Event.GetInt('hitgroup');

    entity = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
//    Cheat.Print('Hello? \n')
    if ((hitbox != 1 && hitbox != 6 && hitbox != 7 && hitbox != 0))  //head, both toe
    {
        //UI.ToggleHotkey( "Anti-Aim", "Fake angles", "Inverter" );
        enemies_list[entity] = enemies_list == 1 ? 2 : 1;
        //Cheat.Print("REVERT \n")
    }

}
function dist(v1 , v2){

  deltaX = v1[0] - v2[0];
  deltaY = v1[1] - v2[1];
  deltaZ = v1[2] - v2[2];

  distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);

  return distance;
}
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
function get_angle_amount(x,y,z)
{
  return Math.abs(x) + Math.abs(y) + Math.abs(z);
}
var screen_size = Render.GetScreenSize();
function get_dist_aa(v1)
{
  v2 = [screen_size[0] / 2, screen_size[1] / 2 , 0]
  v1[2] = 0
  deltaX = v1[0] - v2[0];
  deltaY = v1[1] - v2[1];
  deltaZ = v1[2] - v2[2];

  distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);

  return distance;
}
function do_draw()
{

    if(!Entity.IsValid(Entity.GetLocalPlayer()))
    {
      enemies_list = [];
      return;
    }
    if(!Entity.IsAlive(Entity.GetLocalPlayer()))
      return;
    enemy = Entity.GetEnemies();
    for(i = 0; i < enemy.length; i++)
    {
      if(enemies_list[enemy[i]] == null)
        enemies_list[enemy[i]] = 1;
    }
    best = 0;
    best_index = 0;
    closest_angle = 999999999;
    for(i = 0; i < enemies_list.length; i++)
    {

      if(!Entity.IsValid(i) || !Entity.IsAlive(i) || Entity.IsDormant(i) || !Entity.IsEnemy(i))
        continue;

      angle = get_dist_aa(Render.WorldToScreen(Entity.GetEyePosition(i)))
      if(angle < closest_angle)
      {
        closest_angle = angle
        best = enemies_list[i]
        best_index = i
      }
    }
    //Cheat.Print(closest_angle.toString())
  //Cheat.Print("\n")
    for(i = 0; i < enemies_list.length;i++)
    {
      if(!Entity.IsValid(i) || !Entity.IsAlive(i) || Entity.IsDormant(i) || !Entity.IsEnemy(i))
        continue;
      vecOrigin = Entity.GetRenderOrigin(i);

      vecScreenOrigin = Render.WorldToScreen(vecOrigin);
      if(vecScreenOrigin == false)
        continue;
      vecBottom = vecOrigin;
      duckamount = Entity.GetProp( i, "DT_BasePlayer", "m_flDuckAmount" );

      vecBottom = [vecBottom[0] , vecBottom[1] , vecBottom[2] + 72 - 18 * duckamount];

      vecScreenBottom = Render.WorldToScreen(vecBottom);
      if (vecScreenBottom == false)
          continue;

      sx = Math.round(vecScreenOrigin[0])
      sy = Math.round(vecScreenOrigin[1])
      h  = Math.round(vecScreenBottom[1] - vecScreenOrigin[1])
      w  = Math.round(h * 0.25)
      origin = Entity.GetRenderOrigin(i)
      sorigin = Render.WorldToScreen(origin)
      distance = dist(origin , Entity.GetRenderOrigin(Entity.GetLocalPlayer()))
      if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "AA Priority Indicator"))
        Render.String(sorigin[0] , sy + h * 1.35 / Math.min(1 , Math.max(0.9 , 800 /  distance )), 1, enemies_list[i].toString(), best_index == i ? [165,255,20,255] : [255,0,0,255],16 );
    }
  //  Cheat.Print(best.toString())

    if(best == 1 && UI.IsHotkeyActive( "Anti-Aim", "Fake angles", "Inverter" ))
    {
      UI.ToggleHotkey( "Anti-Aim", "Fake angles", "Inverter" );
    }
    if(best == 2 && !UI.IsHotkeyActive("Anti-Aim" , "Fake angles" , "Inverter"))
    {
      UI.ToggleHotkey( "Anti-Aim", "Fake angles", "Inverter" );
    }
}
function Main()
{
  UI.AddCheckbox( "AA" );
  UI.AddCheckbox( "AA Priority Indicator" );
//  UI.AddCheckbox( "AA Desync Amount Indicator" );
//  Cheat.RegisterCallback("weapon_fire", "OnWeaponFire");
  Cheat.RegisterCallback("bullet_impact", "OnBulletImpact");
  Global.RegisterCallback("Draw", "do_draw")
  Cheat.RegisterCallback("player_hurt" , "OnHurt")
//  Global.RegisterCallback("player_disconnect", "on_player_disconnect");
  //Global.RegisterCallback("CreateMove", "do_aa");
//	Global.RegisterCallback("player_connect_full", "player_connect")
}
Main();
