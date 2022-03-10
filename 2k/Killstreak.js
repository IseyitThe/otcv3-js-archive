//ADVANCED KILLSTREAKS, RESPECTING ONETAP.SU V3 UPDATED DEC 1/19 V 1.1
//AUTHOR https://onetap.su/members/tilestra.54952/

/*
Update log:
DEC 1/19: Added an additional check vars, to prevent the previous killmarker from disappearing. More FX. Added killstreak taunts and checkbox fo enabling them
Fixed bug with invalid player index flooding in console
*/

//Store here our Screen size info vars for each Screen Message
var x = Global.GetScreenSize()[0]/2, y = Global.GetScreenSize()[1]/2, x2 = Global.GetScreenSize()[0]/2, y2 = Global.GetScreenSize()[1]/2,
x3 = Global.GetScreenSize()[0]/2, y3 = Global.GetScreenSize()[1]/2, x4 = Global.GetScreenSize()[0]/2, y4 = Global.GetScreenSize()[1]/2,
x5 = Global.GetScreenSize()[0]/2, y5 = Global.GetScreenSize()[1]/2, x6 = Global.GetScreenSize()[0]/2, y6 = Global.GetScreenSize()[1]/2,
x7 = Global.GetScreenSize()[0]/2, y7 = Global.GetScreenSize()[1]/2, x8 = Global.GetScreenSize()[0]/2, y8 = Global.GetScreenSize()[1]/2,
iX = Global.GetScreenSize()[0]/2, iY = Global.GetScreenSize()[1]/2;

//Our killstreak count + a dumbest thing ever you will see, yes
var iKills = null, alpha = null, alpha2 = null, alpha3 = null, alpha4 = null, alpha5 = null, alpha6 = null, alpha7 = null, alpha8 = null, iMessage = null, iMessage2 = null,
iMessage3 = null, iMessage4 = null, iMessage5 = null, iMessage6 = null, iMessage7 = null, iMessage8 = null, custom_sounds = null;

//Setup to default everything
function EVENT_ROUND_START()
{
    RESET();
}

//HUD_REDRAW
function HUD_REDRAW()
{
    custom_sounds++;
    if(custom_sounds >8) custom_sounds = 0;
    
    //To avoid console flood
    if (!Entity.IsAlive(Entity.GetLocalPlayer()) || iKills < 1) return;
 
    //Pushing them
    KILLMARKS(); 
}

//EVENT DEATH
function EVENT_DEATH()
{
    iVictim = Event.GetInt("userid"); iVictim_index = Entity.GetEntityFromUserID(iVictim);
    iAttacker = Event.GetInt("attacker"); iAttacker_index = Entity.GetEntityFromUserID(iAttacker);
  
    //reset here HUD posistion if our character died
    if(/*iKills >= 9 || */Entity.GetLocalPlayer() == iVictim_index)    RESET(); 
  
    if(Entity.GetLocalPlayer() == iVictim_index && Entity.GetLocalPlayer() !== iAttacker_index)    return; 
  
    //A kill count only for US + info
    if(Entity.GetLocalPlayer() == iAttacker_index)
    { 
        iKills++;
        //Get a victim name
        playerName = Entity.GetName(iVictim_index);
  
        //Get our weapon name
        localplayer_weapon = Entity.GetWeapon(iAttacker_index);
        weapon_name = Entity.GetName(localplayer_weapon);
    }
  
    //KICK ASS 2 and setup
    if(iKills == 1)    iMessage = 1, SOUND_PICKER();   
    if(iKills == 2)    iMessage2 = 1;    if(iKills == 3)    iMessage3 = 1;    if(iKills == 4)    iMessage4 = 1;
    if(iKills == 5)    iMessage5 = 1, SOUND_PICKER();   
    if(iKills == 6)    iMessage6 = 1;    if(iKills == 7)    iMessage7 = 1;    if(iKills == 8)    iMessage8 = 1, SOUND_PICKER();
}

function KILLMARKS()
{
    /*By itself this will just interrupt next kill message, so let's do it another way (YES, MORE TRASHCODING :P) 
    Let this crap now FLY AWAY like it was before update, TRUST MEH, YOU HAVE NEVER SEEN BADASS LIKE THAT BEFORE =)))*/     
    if(iMessage == 1) { if(alpha < 255) alpha++; Render.String(x+=1, y+=1, 1, "EXCELLENT", [ 255,0,0, alpha ], 40); }     
    if(iMessage2 == 1) { if(alpha2 < 255) alpha2++; Render.String(x2-=1, y2+=1, 1, "DOUBLE KILL", [ 0,255,255, alpha2 ], 40); }
    if(iMessage3 == 1) { if(alpha3 < 255) alpha3++; Render.String(x3+=1, y3-=1, 1, "TRIPLE KILL", [ 0,255,0, alpha3 ], 40);    }
    if(iMessage4 == 1) { if(alpha4 < 255) alpha4++; Render.String(x4-=1, y4-=1, 1, "ULTRA KILL", [ 30, 144, 255, alpha4 ], 40); }
    if(iMessage5 == 1) { if(alpha5 < 255) alpha5++; Render.String(x5+=1, y5+=1, 1, "MULTI KILL", [ 255, 255, 0, alpha5 ], 40); }
    if(iMessage6 == 1) { if(alpha6 < 255) alpha6++; Render.String(x6-=1, y6+=1, 1, "RAMPAGE", [ 0, 255, 255, alpha6 ], 40); }
    if(iMessage7 == 1) { if(alpha7 < 255) alpha7++; Render.String(x7+=1, y7-=1, 1, "MONSTER KILL", [ 255, 165, 0, alpha7 ], 40); }
    if(iMessage8 == 1) { if(alpha8 < 255) alpha8++; Render.String(x8-=1, y8-=1, 1, "KILLING SPREE", [ 138, 43, 226, alpha8 ], 40); }
  
    //Our flying messages are gone, so let's show some info instead
    if(Entity.GetLocalPlayer() == iAttacker_index && iKills >=9)
    {
        Render.String(iX+150, iY+120, 0, "Killstreak count: "+iKills, [ 123,104,238,255 ], 12);    //love toxic colors, YES         
        Render.String(iX+150, iY+140, 0, "You killed enemy with: "+weapon_name, [ 123,104,238,255 ], 12); 
        Render.String(iX+150, iY+160, 0, "Enemy killed: "+playerName, [ 123,104,238,255 ], 12); 
    }
} 

function SOUND_PICKER()
{
    if (getCustomValue('Enable killstreak taunts'))
    {
        if(custom_sounds == 1 || custom_sounds == 0)   
            Global.PlaySound("ot/killstreaks/female_taunt1.wav");
        if(custom_sounds == 2)   
            Global.PlaySound("ot/killstreaks/female_taunt2.wav");
        if(custom_sounds == 3)   
            Global.PlaySound("ot/killstreaks/female_taunt3.wav");           
        if(custom_sounds == 4)   
            Global.PlaySound("ot/killstreaks/female_taunt4.wav");
        if(custom_sounds == 5)   
            Global.PlaySound("ot/killstreaks/female_taunt5.wav");
        if(custom_sounds == 6)   
            Global.PlaySound("ot/killstreaks/female_taunt6.wav");
        if(custom_sounds == 7)   
            Global.PlaySound("ot/killstreaks/female_taunt7.wav");
        if(custom_sounds == 8 || custom_sounds == 9)   
            Global.PlaySound("ot/killstreaks/female_taunt8.wav");           
    }
}
function RESET()
{
    x = Global.GetScreenSize()[0]/2, y = Global.GetScreenSize()[1]/2; x2 = Global.GetScreenSize()[0]/2, y2 = Global.GetScreenSize()[1]/2; x3 = Global.GetScreenSize()[0]/2, y3 = Global.GetScreenSize()[1]/2;
    x4 = Global.GetScreenSize()[0]/2, y4 = Global.GetScreenSize()[1]/2; x5 = Global.GetScreenSize()[0]/2, y5 = Global.GetScreenSize()[1]/2; x6 = Global.GetScreenSize()[0]/2, y6 = Global.GetScreenSize()[1]/2;
    x7 = Global.GetScreenSize()[0]/2, y7 = Global.GetScreenSize()[1]/2; x8 = Global.GetScreenSize()[0]/2, y8 = Global.GetScreenSize()[1]/2; 
      
    iMessage = null, iMessage2 = null, iMessage3 = null, iMessage4 = null, iMessage5 = null, iMessage6 = null, iMessage7 = null, iMessage8 = null;
    alpha = null, alpha2 = null, alpha3 = null, alpha4 = null, alpha5 = null, alpha6 = null, alpha7 = null, alpha8 = null;
    iKills = null; 
}

function getCustomValue(name)
{
    var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", name);
    return value;
}
  
function Main()
{
    UI.AddCheckbox('Enable killstreak taunts');       
    Global.RegisterCallback("Draw", "HUD_REDRAW");
    Global.RegisterCallback("player_death", "EVENT_DEATH");
    Global.RegisterCallback("round_start", "EVENT_ROUND_START");
} 

Main();