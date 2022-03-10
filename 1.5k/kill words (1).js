///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////            Sound download link :            ///////////////////
//////            https://anonfile.com/Jdh4LaGfn8/killstreaks_zip            //////
/////////////////////                  Maker:                 /////////////////////
//////                Discord : ZIN#0001 | OT Forum : ZinMain                //////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

var Keep = null
var playing = false;
var started = 0.0
//Store here our Screen size info vars for each Screen Message
var x = Global.GetScreenSize()[0]/2, y = Global.GetScreenSize()[1]/2, x2 = Global.GetScreenSize()[0]/2, y2 = Global.GetScreenSize()[1]/2,
x3 = Global.GetScreenSize()[0]/2, y3 = Global.GetScreenSize()[1]/2, x4 = Global.GetScreenSize()[0]/2, y4 = Global.GetScreenSize()[1]/2,
x5 = Global.GetScreenSize()[0]/2, y5 = Global.GetScreenSize()[1]/2, x6 = Global.GetScreenSize()[0]/2, y6 = Global.GetScreenSize()[1]/2,
x7 = Global.GetScreenSize()[0]/2, y7 = Global.GetScreenSize()[1]/2, x8 = Global.GetScreenSize()[0]/2, y8 = Global.GetScreenSize()[1]/2,
x9 = Global.GetScreenSize()[0]/2, y9 = Global.GetScreenSize()[1]/2, x10 = Global.GetScreenSize()[0]/2, y10 = Global.GetScreenSize()[1]/2,
x11 = Global.GetScreenSize()[0]/2, y11 = Global.GetScreenSize()[1]/2, iX = Global.GetScreenSize()[0]/2, iY = Global.GetScreenSize()[1]/2;
//Our killstreak count + a dumbest thing ever you will see, yes
var iKills = null, alpha = null, alpha2 = null, alpha3 = null, alpha4 = null, alpha5 = null, alpha6 = null, alpha7 = null, alpha8 = null, alpha9 = null, alpha10 = null, alpha11 = null,  iMessage = null, iMessage2 = null,
iMessage3 = null, iMessage4 = null, iMessage5 = null, iMessage6 = null, iMessage7 = null, iMessage8 = null, iMessage9 = null, iMessage10 = null, iMessage11 = null,  iKills = null;
//Setup to default everything
function EVENT_ROUND_START()
{
    RESET();
}
//HUD_REDRAW
function HUD_REDRAW()
{
    if (getCustomValue("KILLSTREAK: Enable taunts on mic")){
        UI.SetValue("MISC", "JAVASCRIPT", "Script items", "KILLSTREAK: Enable taunts", false)
    }
    if (getCustomValue("KILLSTREAK: Enable taunts")){
        UI.SetValue("MISC", "JAVASCRIPT", "Script items", "KILLSTREAK: Enable taunts on mic", false)
    }
    
    //To avoid console flood
    if (!Entity.IsAlive(Entity.GetLocalPlayer()) || iKills < 1) return;
    
    //Pushing them
    KILLMARKS(); 
}
//EVENT DEATH
function EVENT_DEATH()
{
    //Get them
    iVictim = Event.GetInt("userid"); iVictim_index = Entity.GetEntityFromUserID(iVictim);
    iAttacker = Event.GetInt("attacker"); iAttacker_index = Entity.GetEntityFromUserID(iAttacker);
  
    if(Entity.GetLocalPlayer() == iVictim_index && Entity.GetLocalPlayer() !== iAttacker_index)    return; 
  
    //A kill count only for US + info
    if(Entity.GetLocalPlayer() == iAttacker_index)
    {   
        //Keep Reset
        if(Keep == 3){Keep = 0}
        //Collecting frags
        iKills++;
        if(iMessage11 == 1) {
            iMessage11 = null;
            alpha11 = null;
            x11 = Global.GetScreenSize()[0]/2, y11 = Global.GetScreenSize()[1]/2;
            iKills = 11;
        }
        if(iMessage10 == 1){
            Keep = Keep + 1;
        }
        
        //Get a victim name   
        playerName = Entity.GetName(iVictim_index);
  
        //Get our weapon name
        localplayer_weapon = Entity.GetWeapon(iAttacker_index);
        weapon_name = Entity.GetName(localplayer_weapon);
        
        //KICK ASS 2 and setup (yes)
        if(iKills == 1)    iMessage = 1, SOUND_PICKER(), PlayVoice(iKills);   
        if(iKills == 2)    iMessage2 = 1, SOUND_PICKER(), PlayVoice(iKills);
        if(iKills == 3)    iMessage3 = 1, SOUND_PICKER(), PlayVoice(iKills);
        if(iKills == 4)    iMessage4 = 1, SOUND_PICKER(), PlayVoice(iKills);
        if(iKills == 5)    iMessage5 = 1, SOUND_PICKER(), PlayVoice(iKills);
        if(iKills == 6)    iMessage6 = 1, SOUND_PICKER(), PlayVoice(iKills);
        if(iKills == 7)    iMessage7 = 1, SOUND_PICKER(), PlayVoice(iKills);
        if(iKills == 8)    iMessage8 = 1, SOUND_PICKER(), PlayVoice(iKills);
        if(iKills == 9)    iMessage9 = 1, SOUND_PICKER(), PlayVoice(iKills);
        if(iKills == 10)    iMessage10 = 1, SOUND_PICKER(), PlayVoice(iKills);
        if(iKills == 11)    iMessage11 = 1, SOUND_PICKER(), PlayVoice(iKills);
    }
}   
function PlayVoice(kills)
{
    if (getCustomValue("KILLSTREAK: Enable taunts on mic")){
    started = Global.Realtime();
    playing = true;
    
    Global.ExecuteCommand("voice_loopback 1");
    if (kills == 1){
        Sound.PlayMicrophone('D:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/killstreaks/0/voice_input.wav');
    }
    if (kills == 2){
        Sound.PlayMicrophone('D:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/killstreaks/1/voice_input.wav');
    }
    if (kills == 3){
        Sound.PlayMicrophone('D:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/killstreaks/2/voice_input.wav');
    }
    if (kills == 4){
        Sound.PlayMicrophone('D:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/killstreaks/3/voice_input.wav');
    }
    if (kills == 5){
        Sound.PlayMicrophone('D:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/killstreaks/4/voice_input.wav');
    }
    if (kills == 6){
        Sound.PlayMicrophone('D:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/killstreaks/5/voice_input.wav');
    }
    if (kills == 7){
        Sound.PlayMicrophone('D:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/killstreaks/6/voice_input.wav');
    }
    if (kills == 8){
        Sound.PlayMicrophone('D:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/killstreaks/7/voice_input.wav');
    }
    if (kills == 9){
        Sound.PlayMicrophone('D:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/killstreaks/8/voice_input.wav');
    }
    if (kills == 10){
        Sound.PlayMicrophone('D:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/killstreaks/9/voice_input.wav');
    }
    if (kills > 10){
        Sound.PlayMicrophone('D:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/killstreaks/10/voice_input.wav');
    }
}}
//Flying text
function KILLMARKS()
{
    /*By itself this will just interrupt next kill message, so let's do it another way (YES, MORE TRASHCODING :P) 
    Let this crap now FLY AWAY like it was before update, TRUST MEH, YOU HAVE NEVER SEEN BADASS LIKE THAT BEFORE =)))*/     
    if(iMessage == 1) { if(alpha < 255) alpha++; Render.String(x+=1, y+=1, 1, "FIRST BLOOD", [ 255,0,0, alpha ], 40); }     
    if(iMessage2 == 1) { if(alpha2 < 255) alpha2++; Render.String(x2-=1, y2+=1, 1, "DOUBLE KILL", [ 0,255,255, alpha2 ], 40); }
    if(iMessage3 == 1) { if(alpha3 < 255) alpha3++; Render.String(x3+=1, y3-=1, 1, "TRIPLE KILL", [ 0,255,0, alpha3 ], 40);    }
    if(iMessage4 == 1) { if(alpha4 < 255) alpha4++; Render.String(x4-=1, y4-=1, 1, "MULTI KILL", [ 30, 144, 255, alpha4 ], 40); }
    if(iMessage5 == 1) { if(alpha5 < 255) alpha5++; Render.String(x5+=1, y5+=1, 1, "ULTRA KILL", [ 255, 255, 0, alpha5 ], 40); }
    if(iMessage6 == 1) { if(alpha6 < 255) alpha6++; Render.String(x6-=1, y6+=1, 1, "KILLING SPREE", [ 0, 255, 138, alpha6 ], 40); }
    if(iMessage7 == 1) { if(alpha7 < 255) alpha7++; Render.String(x7+=1, y7-=1, 1, "LUDICROUS KILL", [ 0,255,0, alpha7 ], 40); }
    if(iMessage8 == 1) { if(alpha8 < 255) alpha8++; Render.String(x8-=1, y8-=1, 1, "GOD LIKE", [ 30, 144, 255, alpha8 ], 40); }
    if(iMessage9 == 1) { if(alpha9 < 255) alpha9++; Render.String(x9+=1, y9+=1, 1, "RAMPAGE", [ 0,255,0, alpha9 ], 40); }
    if(iMessage10 == 1) { if(alpha10 < 255) alpha10++; Render.String(x10-=1, y10+=1, 1, "DOMINATING", [ 0,255,255, alpha10 ], 40); }
    if (Keep == 0){
        if(iMessage11 == 1) { if(alpha11 < 255) alpha11++; Render.String(x11+=1, y11-=1, 1, "MONSTER KILL", [ 255,0,0,, alpha11 ], 40); }
    }
    if (Keep == 1){
        if(iMessage11 == 1) { if(alpha11 < 255) alpha11++; Render.String(x11-=1, y11-=1, 1, "MONSTER KILL", [ 255,0,0, alpha11 ], 40); }
    }
    if (Keep == 2){
        if(iMessage11 == 1) { if(alpha11 < 255) alpha11++; Render.String(x11+=1, y11+=1, 1, "MONSTER KILL", [ 255,0,0, alpha11 ], 40); }
    }
    if (Keep == 3){
        if(iMessage11 == 1) { if(alpha11 < 255) alpha11++; Render.String(x11-=1, y11+=1, 1, "MONSTER KILL", [ 255,0,0, alpha11 ], 40); }
    }
} 
//Taunts
function SOUND_PICKER()
{
    if (getCustomValue('KILLSTREAK: Enable taunts'))
    {
        if(iKills == 1)    Global.PlaySound("ot/killstreaks/0.wav");
        if(iKills == 2)    Global.PlaySound("ot/killstreaks/1.wav");
        if(iKills == 3)    Global.PlaySound("ot/killstreaks/2.wav");           
        if(iKills == 4)    Global.PlaySound("ot/killstreaks/3.wav");
        if(iKills == 5)    Global.PlaySound("ot/killstreaks/4.wav");
        if(iKills == 6)    Global.PlaySound("ot/killstreaks/5.wav");
        if(iKills == 7)    Global.PlaySound("ot/killstreaks/6.wav");
        if(iKills == 8)    Global.PlaySound("ot/killstreaks/7.wav");
        if(iKills == 9)    Global.PlaySound("ot/killstreaks/8.wav");
        if(iKills == 10)   Global.PlaySound("ot/killstreaks/9.wav");
        if(iKills > 10)    Global.PlaySound("ot/killstreaks/10.wav");           
    }
}
//Variables
function RESET()
{
    //Reset all vars
    x = Global.GetScreenSize()[0]/2, y = Global.GetScreenSize()[1]/2; x2 = Global.GetScreenSize()[0]/2, y2 = Global.GetScreenSize()[1]/2; x3 = Global.GetScreenSize()[0]/2, y3 = Global.GetScreenSize()[1]/2;
    x4 = Global.GetScreenSize()[0]/2, y4 = Global.GetScreenSize()[1]/2; x5 = Global.GetScreenSize()[0]/2, y5 = Global.GetScreenSize()[1]/2; x6 = Global.GetScreenSize()[0]/2, y6 = Global.GetScreenSize()[1]/2;
    x7 = Global.GetScreenSize()[0]/2, y7 = Global.GetScreenSize()[1]/2; x8 = Global.GetScreenSize()[0]/2, y8 = Global.GetScreenSize()[1]/2; x9 = Global.GetScreenSize()[0]/2, y9 = Global.GetScreenSize()[1]/2;
    x10 = Global.GetScreenSize()[0]/2, y10 = Global.GetScreenSize()[1]/2; x11 = Global.GetScreenSize()[0]/2, y11 = Global.GetScreenSize()[1]/2;
      
    iMessage = null, iMessage2 = null, iMessage3 = null, iMessage4 = null, iMessage5 = null, iMessage6 = null, iMessage7 = null, iMessage8 = null, iMessage9 = null, iMessage10 = null
    alpha = null, alpha2 = null, alpha3 = null, alpha4 = null, alpha5 = null, alpha6 = null, alpha7 = null, alpha8 = null, alpha9 = null, alpha10 = null, alpha11 = null;
    iKills = null; 
}
function Reset2()
{
    if (playing && Math.abs(started + 3.30 - Global.Realtime()) < 0.05)
    {
        playing = false;
        Sound.StopMicrophone();
        Global.ExecuteCommand("voice_loopback 0");
    }
}
//Menu
function getCustomValue(name)
{
    var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", name);
    return value;
}
function GetScriptOption(Name)
{
    var Value = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", Name);
    return Value;
}
//Our script hooks
function Main()
{
    UI.AddCheckbox('KILLSTREAK: Enable taunts');   
    UI.AddCheckbox('KILLSTREAK: Enable taunts on mic');   
    Global.RegisterCallback("Draw", "HUD_REDRAW");
    Global.RegisterCallback("player_death", "EVENT_DEATH");
    Global.RegisterCallback("round_start", "EVENT_ROUND_START");
    Global.RegisterCallback("FrameStageNotify", "Reset2");
} 
Main();