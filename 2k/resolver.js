
function isVisible()
{

    localPlayer_index = Entity.GetLocalPlayer();
    localPlayer_eyepos = Entity.GetEyePosition(localPlayer_index);
    enemies = Entity.GetEnemies();
    for ( i = 0; i < enemies.length; i++)
    {
        if (Entity.IsValid(enemies[i]) == true && Entity.IsAlive(enemies[i]) && Entity.IsDormant(enemies[i]) == false)
        {
        var inverted = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")
        if (inverted){
            var a = 50
        }
        if (!inverted){
            var a =- 50
        }
        hitbox_pos = Entity.GetHitboxPosition(localPlayer_index, 0);
        bot_eyepos = Entity.GetEyePosition(enemies[i])
        
        w2s_s = Render.WorldToScreen(bot_eyepos)
        w2s_e = Render.WorldToScreen(hitbox_pos)
        Render.Line(w2s_s[0], w2s_s[1], w2s_e[0], w2s_e[1]-50, [255, 255, 255, 255])
        Render.String(w2s_s[0], w2s_s[1], 0, "REAL", [0, 255, 0, 255])
        Render.String(w2s_s[0]+a, w2s_s[1], 0, "FAKE", [255, 0, 0, 255])
        Render.String(w2s_e[0], w2s_e[1]-50, 0, "START", [2, 255, 255, 255])
        }
    }
}

function cm()
{
    localPlayer_index = Entity.GetLocalPlayer();
    localPlayer_eyepos = Entity.GetEyePosition(localPlayer_index);
    enemies = Entity.GetEnemies();
    for ( i = 0; i < enemies.length; i++)
    {
       if (Entity.IsValid(enemies[i]) == true && Entity.IsAlive(enemies[i]) && Entity.IsDormant(enemies[i]) == false)
        {
        hitbox_pos = Entity.GetHitboxPosition(localPlayer_index, 0);
        bot_eyepos = Entity.GetEyePosition(enemies[i])
        result = Trace.Bullet(enemies[i], localPlayer_index, bot_eyepos, hitbox_pos);
        

        }
    }

}
Cheat.RegisterCallback("Draw", "isVisible");
Cheat.RegisterCallback("CreateMove", "cm");