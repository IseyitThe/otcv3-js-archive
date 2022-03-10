

//js by rias#4990 s/o to someone who i stole getvelocity from and saith that told me how to modulate font LOL
function getVelocity(index)
{
    players = Entity.GetPlayers();
    for (i=0; i < players.length; i++);
    {
    var velocity = Entity.GetProp( index, "CBasePlayer", "m_vecVelocity[0]" );
    var speed = Math.sqrt( velocity[0] * velocity[0] + velocity[1] * velocity[1] );
    }
    return speed;
}
function indicators()
{
  // calculation shit
  var fakeyaw
  var realyaw
  var diffrence
fakeyaw = (Local.GetFakeYaw());
realyaw = (Local.GetRealYaw()); 
diffrence =  Math.round(realyaw - fakeyaw)
desyncAmt = Math.abs(diffrence)
var r
var g
var b
// color shit
if (desyncAmt <= 29)
{
  r = 255
  g = 0
  b = 0
}
else if (desyncAmt >= 45)
{
  r = 132
  g = 195
  b = 16
}
else
{
  r = 255 - (desyncAmt * 3)
  g = desyncAmt * 3
  b = 0
}


  //// acutal shit
    var local = Entity.GetLocalPlayer()

    if(!local || !Entity.IsAlive(local))
    return

    charge = Exploit.GetCharge()
    var pos =  (Global.GetScreenSize()[1] / 2)
    var lp = Entity.GetLocalPlayer();
    var velocity = Math.round(getVelocity(lp)).toString();
    var red = Math.sqrt( 255 + velocity)
    var color1
	var localplayer_index = Entity.GetLocalPlayer( );
	var localplayer_alive = Entity.IsAlive( localplayer_index );
    var color2
    var color3
    const font = Render.AddFont("Verdana", 19, 600); 
    if (Input.IsKeyPressed(0x20) & velocity > 250)
    {
    pos =  (Global.GetScreenSize()[1] / 2) - 30
    if (velocity > 295)
    {
    var color1 = 132
    var color2 = 195
    var color3 = 16
    }
    else
    {
    var color1 = 255
    var color2 = 0
	isDoubletap = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap"	);
	var screen = Render.GetScreenSize();
    screen[0] /= 2
    screen[1] /= 2
    var color3 = 0
    }
    Render.StringCustom( 10+1, (Global.GetScreenSize()[1] / 2)+1, 0, "LC", [ 0, 0, 0, 255 ], font );
    Render.StringCustom( 10,  (Global.GetScreenSize()[1] / 2), 0, "LC", [ color1, color2, color3, 255 ], font );
    }
    Render.StringCustom( 10+1, pos+1, 0, "FAKE", [ 0, 0, 0, 255 ], font );
    Render.StringCustom( 10, pos, 0, "FAKE", [ r, g, b, 255 ], font );
    if (UI.GetValue("Rage", "GENERAL", "Exploits", "Doubletap"))
   {
    if(charge < 1)
    {
      Render.StringCustom( 10+1,  (Global.GetScreenSize()[1] / 2)+30+1, 0, "DT", [ 0, 0, 0, 255 ], font );
    Render.StringCustom( 10,  (Global.GetScreenSize()[1] / 2)+30, 0, "DT", [ 255, 0, 0, 255 ], font );
    }
    else
    {
      Render.StringCustom( 10+1,  (Global.GetScreenSize()[1] / 2)+30+1, 0, "DT", [ 0, 0, 0, 255 ], font );
    Render.StringCustom( 10,  (Global.GetScreenSize()[1] / 2)+30, 0, "DT", [ 132, 195, 16, 255 ], font );
    }
   }
  
}


//js by rias#4990 s/o to someone who i stole getvelocity from and saith bcuz told me how to modulate font LOL
Cheat.RegisterCallback("Draw", "indicators")//js by rias#4990 s/o to someone who i stole getvelocity from and saith bcuz told me how to modulate font LOL
//Cheat.RegisterCallback("CreateMove", "antiaim")

