function main() {
    Cheat.RegisterCallback("Draw", "ddosOnPeekLoopFunc");
    UI.AddSliderInt("Min-DMG for DDOS", 0, 200);
}

main();

function ddosOnPeekLoopFunc() {
    peeking = false;
    
    localEnt = Entity.GetLocalPlayer();
    localHeadPos = Entity.GetHitboxPosition(localEnt, 0);
    localLtoePos = Entity.GetHitboxPosition(localEnt, 12);
    
    mDmg = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Min-DMG for DDOS");
    
    enemies = Entity.GetEnemies();
    for ( i = 0; i < enemies.length; i++)
    {
        if (Entity.IsValid(enemies[i]) == true && Entity.IsDormant(enemies[i]) == false)
        {
            headHitbox = Entity.GetHitboxPosition(enemies[i], 0);
            headBulletTrace = Trace.Bullet(localEnt, localHeadPos, headHitbox);
            
            headBulletPotentialDMG = headBulletTrace[1];
            
            //Right -> left toe
            rToeHitbox = Entity.GetHitboxPosition(enemies[i], 12);
            rToeBulletTrace = Trace.Bullet(localEnt, localLtoePos, rToeHitbox);
            
            rToeBulletPotentialDMG = rToeBulletTrace[1];
            
            if (rToeBulletPotentialDMG >= mDmg || headBulletPotentialDMG >= mDmg) {
                
                localHeadScreenPos = Render.WorldToScreen(localHeadPos);
                enemyHeadScreenPos = Render.WorldToScreen(headHitbox);
                
                if (localHeadScreenPos[2] && enemyHeadScreenPos[2]) {
                    Render.Circle(enemyHeadScreenPos[0], enemyHeadScreenPos[1], 7, [255, 255, 255, 255]);
                }
                
                peeking = true;
            }
        }
      
    }
    
    if (!peeking) {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 0);
    }
    else {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 1);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 16);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 100);
    }
}