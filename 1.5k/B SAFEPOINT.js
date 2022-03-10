var force_baim = 0;
var time, delay;
ss = Render.GetScreenSize();
function forcebaim()
{
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Force Baim") && !UI.GetValue("Misc", "JAVASCRIPT", "Script items", "DT Force Baim"))
      return;

    local_player = Entity.GetLocalPlayer();
    local_player_eyepos = Entity.GetEyePosition(local_player);
    enemies = Entity.GetEnemies();
    var is_dt_ready;
    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "DT Force Baim") && Exploit.GetCharge() == 1 && UI.GetValue("Rage" , "GENERAL" , "Exploits" , "Doubletap") && UI.IsHotkeyActive("Rage" , "GENERAL" , "Exploits" , "Doubletap"))
      is_dt_ready = true;
    else {
      is_dt_ready = false;
    }
  //  Cheat.Print(is_dt_ready ? "TRUE \n":"FALSE \n")
    for ( i = 0; i < enemies.length; i++)
    {
      if (Entity.IsAlive(enemies[i]) == true && Entity.IsValid(enemies[i]) == true && Entity.IsDormant(enemies[i]) == false)
      {
          var health = Entity.GetProp(enemies[i], "CBasePlayer", "m_iHealth");
        	for(j = 2; j <= 12; j++)
        	{

          	hitbox_pos = Entity.GetHitboxPosition(enemies[i], j);

          	result = Trace.Bullet(local_player,enemies[i], local_player_eyepos, hitbox_pos);
            if(result == null)
              continue
            if(result[1] >= health)
            {
            //  Ragebot.ForceSafety( 0 )

              force_baim = 1;
              return;
            }
            if(is_dt_ready && result[1] >= health / 2)
            {
              force_baim = 2;
              return;
            }


          }

      }

    }


}
var is_awp;

function draw_fb()
{
	x = UI.GetValue("Script items", "Indicator | X-Pos")
	y = UI.GetValue("Script items", "Indicator | Y-Pos")
	font = Render.AddFont( "Arial", 20, 800);


  if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "SP AWP ALWAYS ON"))
  {
    g_Local = Entity.GetLocalPlayer( );
    g_Local_weapon = Entity.GetWeapon(g_Local);
    weapon_name = Entity.GetName(g_Local_weapon);
    g_Local_classname = Entity.GetClassName( g_Local_weapon );
    if (g_Local_classname == "CWeaponAWP")
    {
      force_baim = 1

    }

  }
  Render.StringCustom(x + 5, y + 20, 0, force_baim == 2 ? "DT SP" : "SP", force_baim > 0 ? [0,255,0,255] : [255,0,0,255], font);

	if(force_baim > 0 && !UI.IsHotkeyActive("Rage", "GENERAL", "General", "Safe point override") )
		UI.ToggleHotkey("Rage", "GENERAL", "General", "Safe point override")
	if(!force_baim > 0 && UI.IsHotkeyActive("Rage", "GENERAL", "General", "Safe point override")  )
		UI.ToggleHotkey("Rage", "GENERAL", "General", "Safe point override")
	force_baim = 0
}

function Main()
{
	UI.AddSliderInt("Indicator | X-Pos", 1, ss[0]);
	UI.AddSliderInt("Indicator | Y-Pos", 1, ss[1]);
	UI.AddCheckbox("Force Baim");
	UI.AddCheckbox("DT Force Baim")
  UI.AddCheckbox("SP AWP ALWAYS ON")
	Global.RegisterCallback("CreateMove", "forcebaim")
	Global.RegisterCallback("Draw","draw_fb")

}
Main();
