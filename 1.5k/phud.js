//SIMPLE QUAKE CHAMPIONS LIKE ANIMATED KILL MESSAGES
//AUTHOR https://onetap.su/members/tilestra.54952/

//HUD, INTERFACE MOD

//Vars
var iKills = 0, iSize = 0, iFrame = 0, iAlpha = 0, iTotalKills = 0, iExp = 0, iScore = 0, getExp = 0, yOffset = 0, iMedal = 0;

//Out match is ended
function EVENT_MATCH_END()
{
    RESET();
    //Next map
    iTotalKills = 0, iExp = 0, iScore = 0, getExp = 0, iMedal = 0;
}   

//Setup to default everything at player spawn
function EVENT_PLAYER_SPAWN()
{
    PlayerIndex = Event.GetInt("userid"); iPlayerIndex = Entity.GetEntityFromUserID(PlayerIndex);
    
    //Reset for us
    if(Entity.GetLocalPlayer() == iPlayerIndex)    RESET();
}

//Setup to default everything at round start
function EVENT_ROUND_START()
{
    RESET();
}

//HUD_REDRAW
function HUD_REDRAW()
{   
    //Variables
    getExp++;
    if(getExp > 20) getExp = 1;    //Cannot be lower

    if (!Entity.IsAlive(Entity.GetLocalPlayer()) || iKills < 1) return;   

    //BUG
    /*if(iSize < 49 && iSize > 30)    iSize--;
    else    iSize = 30;
    Render.String(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]-70, 1, "" +iKills, [ 146,232,240,255 ], iSize);*/

    iFrame--;
    iAlpha--;
    
    //Depended on your FPS, not using globaltime
    if(iFrame < 255 && iFrame > 0)
    {   
        if(iSize < 49 && iSize > 30)    iSize--;
        else    iSize = 30;   
    
        //Just don't ask me why xD
        if(iKills == 1)
        {   
            if(iSize < 49 && iSize > 42)    Render.String(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]/3-35, 1, " " +iKills +" ENEMY ANNIHILATED", [ 255,255,255,iAlpha ], 48);
            if(iSize < 43 && iSize > 37)    Render.String(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]/3-30, 1, " " +iKills +" ENEMY ANNIHILATED", [ 255,255,255,iAlpha ], 42);
            if(iSize < 38 && iSize > 32)    Render.String(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]/3-25, 1, " " +iKills +" ENEMY ANNIHILATED", [ 255,255,255,iAlpha ], 36);   
            if(iSize < 32 && iSize > 29)    Render.String(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]/3-20, 1, " " +iKills +" ENEMY ANNIHILATED", [ 146,232,240,iAlpha ], 30);
        }
        else
        {       
            if(iSize < 49 && iSize > 42)    Render.String(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]/3-35, 1, " " +iKills +" ENEMIES ANNIHILATED", [ 255,255,255,iAlpha ], 48);
            if(iSize < 43 && iSize > 37)    Render.String(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]/3-30, 1, " " +iKills +" ENEMIES ANNIHILATED", [ 255,255,255,iAlpha ], 42);
            if(iSize < 38 && iSize > 32)    Render.String(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]/3-25, 1, " " +iKills +" ENEMIES ANNIHILATED", [ 255,255,255,iAlpha ], 36);   
            if(iSize < 32 && iSize > 29)    Render.String(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]/3-20, 1, " " +iKills +" ENEMIES ANNIHILATED", [ 146,232,240,iAlpha ], 30);
        }
        
        //Killed enemy name
        Render.String(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]/3+30, 1, "YOU FRAGGED " +playerName, [ 255,255,255,iAlpha ], 4);
        Render.String(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]/3+60, 1, " " +iKills + " killsreak kills with total " +iTotalKills + " frags", [ 255,255,255,iAlpha ], 1);

        //Other info
        Render.String(Global.GetScreenSize()[0]/3-20, Global.GetScreenSize()[1]/3+120, 0, "SUMMARY SCORE: " +iScore, [ 255,180,30,iAlpha ], 1);
        Render.String(Global.GetScreenSize()[0]/3-20, Global.GetScreenSize()[1]/3+135, 0, "SUMMARY XP: " +iExp, [ 255,180,30,iAlpha ], 1);

        //xD, alien calculation, not for humans >_<
        if(yOffset <= 0 && yOffset > -60)
        {   
            yOffset--;
            Render.String(Global.GetScreenSize()[0]/3-60-yOffset-20, Global.GetScreenSize()[1]/3+150, 0, "KILL +" +iTotalKills, [ 255,255,255,iAlpha ], 1);
            if(iMedal > 0)    Render.String(Global.GetScreenSize()[0]/3-60-yOffset-20, Global.GetScreenSize()[1]/3+165, 0, "MEDAL +" +iMedal, [ 255,255,255,iAlpha ], 1);
        }
        else
        {
            Render.String(Global.GetScreenSize()[0]/3-20, Global.GetScreenSize()[1]/3+150, 0, "KILL +" +iTotalKills, [ 255,255,255,iAlpha ], 1);
            if(iMedal > 0)    Render.String(Global.GetScreenSize()[0]/3-20, Global.GetScreenSize()[1]/3+165, 0, "MEDAL +" +iMedal, [ 255,255,255,iAlpha ], 1);           
        }       
    }
}

//EVENT DEATH
function EVENT_DEATH()
{
    //Get them
    iVictim = Event.GetInt("userid"); iVictim_index = Entity.GetEntityFromUserID(iVictim);
    iAttacker = Event.GetInt("attacker"); iAttacker_index = Entity.GetEntityFromUserID(iAttacker);
  
    if(Entity.GetLocalPlayer() == iVictim_index && Entity.GetLocalPlayer() !== iAttacker_index)    return; 
  
    //A kill count only for us + info
    if(Entity.GetLocalPlayer() == iAttacker_index)
    {
        //Simulating Exp
        iExp = getExp;
        
        //Simulating score
        iScore = iExp + iScore;
        
        //Setup Y offset for medals
        yOffset = 0;
        
        //Reset if MAX (or remove if u want)
        if(iKills > 9)    iKills = 0;       
        
        //Collecting frags for each spawn
        iKills++;
            
        //Collecting total map kills
        iTotalKills++;
        
        //Every kill after 3 kills gives a medal
        if(iKills >= 3)    iMedal += 1;
        
        //Get a victim name   
        playerName = Entity.GetName(iVictim_index);
        
        //Set text size to maximum
        iSize = 48;
        
        //Frame count and transparency
        iFrame = 255;
        iAlpha = 255;

        //Some sounds
        if (getCustomValue('Quake Champions: Enable announcer'))
        {   
            if(iKills == 1)    Global.PlaySound("ot/qckillsounds/excellent.wav");
            if(iKills == 4)    Global.PlaySound("ot/qckillsounds/perfect.wav");
            if(iKills == 8)    Global.PlaySound("ot/qckillsounds/rage.wav");
        }       
    }
}

//Store and reset
function RESET()
{
    iKills = 0, iSize = 0, iFrame = 0, iAlpha = 0, yOffset = 0;
}

//Menu
function getCustomValue(name)
{
    var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", name);
    return value;
}   

//Our script hooks
function Main()
{
    UI.AddCheckbox('Quake Champions: Enable announcer');   
    Global.RegisterCallback("Draw", "HUD_REDRAW");
    Global.RegisterCallback("player_death", "EVENT_DEATH");
    Global.RegisterCallback("round_start", "EVENT_ROUND_START");
    Global.RegisterCallback("player_spawned", "EVENT_PLAYER_SPAWN");
    Global.RegisterCallback("cs_intermission", "EVENT_MATCH_END");
    Global.RegisterCallback("cs_win_panel_match", "EVENT_MATCH_END");
} 

Main();