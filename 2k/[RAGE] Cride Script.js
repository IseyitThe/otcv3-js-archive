UI.AddLabel("Welcome to the Cride Script 1.0")
UI.AddLabel("")
var time, delay, fillbar, shotsfired;
var Xoffset = 'X offset';
var Yoffset = 'Y offset';
UI.AddCheckbox("Doubletap (beta)")

function haha()
{
    iShotsFired = Event.GetInt("userid"); iShotsFired_index = Entity.GetEntityFromUserID(iShotsFired);
 
    if(Entity.GetLocalPlayer() == iShotsFired_index)
    {
        if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Doubletap (beta)") && UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap", "Enabled"))
        {
            if(shotsfired == 0)
            {
                time = Globals.Curtime();
                delay = time+0.3;
                fillbar = 0;
            }            
        }
        else
        {
            if(shotsfired == 0)
            {
                time = Globals.Curtime();
                delay = time+0.3;
                fillbar = 0;
            }         
        }
    }    
}

var jitter_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset")
var yaw_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset")
UI.AddCheckbox("Low delta");

function hamiskacsaxd()
{
    localplayer_index = Entity.GetLocalPlayer( );


        if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
        {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets",true)
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 10);
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 5);
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(-37);
        }
        if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
        {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
            AntiAim.SetOverride(0);
        }
}
UI.AddCheckbox("!!DT in MatchMaking!!");
function dt_mm()
{
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "DT in MatchMaking"))
    {
        UI.SetValue("Rage", "Exploits", "Doubletap instant", true)
        UI.SetValue("Rage", "Exploits", "Doubletap", true)

    }
}
var iVictim_index, First_pos, Second_pos, Third_pos, Fourth_pos, Fifth_pos, First, Second, Third, Fourth, Five, iDamageCount = iOffsetCount = YOffsetFirst = YOffsetSecond = YOffsetThird = YOffsetFourth = YOffsetFive = loadFont = HitAttack = 0;  
const first_screen_pos = [], second_screen_pos = [], third_screen_pos = [], fourth_screen_pos = [], fifth_screen_pos = [];
function skerusersalwaysfanboying()
{
    iAttacker = Event.GetInt("attacker"); iAttacker_index = Entity.GetEntityFromUserID(iAttacker);
    iVictim = Event.GetInt("userid"); iVictim_index = Entity.GetEntityFromUserID(iVictim);  
    if(Entity.GetLocalPlayer() == iVictim_index && Entity.GetLocalPlayer() !== iAttacker_index)    return;
    if(Entity.GetLocalPlayer() == iAttacker_index)
    {
        HitAttack = 1;
        if(iDamageCount == 5) iDamageCount = 0; if(iOffsetCount == 5) iOffsetCount = 0;
        iDamageCount+=1;
        iOffsetCount+=1;        
        if(iDamageCount == 1)    {    First = Event.GetInt("dmg_health");    First_pos = Entity.GetRenderOrigin(iVictim_index);    }  
        if(iDamageCount == 2)    {    Second = Event.GetInt("dmg_health");    Second_pos = Entity.GetRenderOrigin(iVictim_index);    }              
        if(iDamageCount == 3)    {    Third = Event.GetInt("dmg_health");    Third_pos = Entity.GetRenderOrigin(iVictim_index);    }      
        if(iDamageCount == 4)    {    Fourth = Event.GetInt("dmg_health");    Fourth_pos = Entity.GetRenderOrigin(iVictim_index);    }      
        if(iDamageCount == 5)    {    Five = Event.GetInt("dmg_health");    Fifth_pos = Entity.GetRenderOrigin(iVictim_index);    }
        if(iOffsetCount == 1)    YOffsetFirst = 255; if(iOffsetCount == 2)    YOffsetSecond = 255; if(iOffsetCount == 3)    YOffsetThird = 255; if(iOffsetCount == 4)    YOffsetFourth = 255; if(iOffsetCount == 5)    YOffsetFive = 200;              
    }      
}

function naja()
{
    if(loadFont == 0)
    {
        fontSM2 = Render.AddFont("Verdana", 8, 550)
        loadFont = 1;
    }
    if(!HitAttack || !getCustomValue('Cool DMG indicator'))    return;
    if(Entity.IsValid(iVictim_index))
    {
        if(iDamageCount < 6)    
		{
			first_screen_pos = Render.WorldToScreen(First_pos);
			second_screen_pos = Render.WorldToScreen(Second_pos);
			third_screen_pos = Render.WorldToScreen(Third_pos);
			fourth_screen_pos = Render.WorldToScreen(Fourth_pos);
			fifth_screen_pos = Render.WorldToScreen(Fifth_pos);
		}
		
		color = UI.GetColor("MISC", "JAVASCRIPT", "Script items", "Color");
			Render.StringCustom(first_screen_pos[0]-15+1, first_screen_pos[1]-50+YOffsetFirst-255+1, 1, "" + First, [ 0, 0,0, YOffsetFirst ], fontSM2);
			Render.StringCustom(first_screen_pos[0]-15, first_screen_pos[1]-50+YOffsetFirst-255, 1, "" + First, alp( color, YOffsetFirst ), fontSM2);
		
			Render.StringCustom(second_screen_pos[0]+15+1, second_screen_pos [1]-50+YOffsetSecond-255+1, 1, "" + Second, [ 0, 0, 0, YOffsetSecond ], fontSM2);
			Render.StringCustom(second_screen_pos[0]+15, second_screen_pos [1]-50+YOffsetSecond-255, 1, "" + Second, alp( color, YOffsetSecond ), fontSM2);
		
			Render.StringCustom(third_screen_pos[0]-25+1, third_screen_pos[1]-50+YOffsetThird-255+1, 1, "" + Third, [ 0,0,0, YOffsetThird ], fontSM2);
			Render.StringCustom(third_screen_pos[0]-25, third_screen_pos[1]-50+YOffsetThird-255, 1, "" + Third, alp( color, YOffsetThird ), fontSM2);
		
			Render.StringCustom(fourth_screen_pos[0]+25+1, fourth_screen_pos[1]-50+YOffsetFourth-255+1, 1, "" + Fourth, [ 0, 0, 0, YOffsetFourth ], fontSM2);
			Render.StringCustom(fourth_screen_pos[0]+25, fourth_screen_pos[1]-50+YOffsetFourth-255, 1, "" + Fourth, alp(color, YOffsetFourth ), fontSM2);
		
			Render.StringCustom(fifth_screen_pos[0]-10+1, fifth_screen_pos[1]-50+YOffsetFive-255+1, 1, "" + Five, [ 0, 0, 0, YOffsetFive ], fontSM2);
			Render.StringCustom(fifth_screen_pos[0]-10, fifth_screen_pos[1]-50+YOffsetFive-255, 1, "" + Five, alp( color, YOffsetFive ), fontSM2);
		
    }      
}  

function getCustomValue(name)
{
    var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", name);
    return value;
}

function coolthingy_totallypasted()
{
    if(YOffsetFirst > 1)    YOffsetFirst--; if(YOffsetSecond > 1)    YOffsetSecond--; if(YOffsetThird > 1)    YOffsetThird--; if(YOffsetFourth > 1)    YOffsetFourth--; if(YOffsetFive > 1)    YOffsetFive--; 
}

function alp(c, a) {
  return [c[0], c[1], c[2], a]
}
UI.AddCheckbox("Crooked jitter");
UI.AddLabel("This is going to disable DT")
var jitter = 0;
function crooked()
{
    localplayer_index = Entity.GetLocalPlayer( );

    jitter += 1;
    var xd = jitter % 2;

        if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Crooked jitter"))
        {
            UI.SetValue("Rage", "Exploits", "Doubletap instant", false)
            UI.SetValue("Rage", "Exploits", "Doubletap", false)
            UI.SetValue("Rage", "Exploits", "Hide shots", false)
            if (xd == 0)
            {
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -20);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
                AntiAim.SetOverride(1);
                AntiAim.SetFakeOffset(58);
                AntiAim.SetRealOffset(0);
            }
            else
            {
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 200);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
                AntiAim.SetOverride(1);
                AntiAim.SetFakeOffset(-58);
                AntiAim.SetRealOffset(0);
            }
            if (jitter == 500)
            {
                jitter = jitter - jitter;
            }
            if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter"))
            {
                if (xd == 0)
            {
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 40);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
                AntiAim.SetOverride(1);
                AntiAim.SetFakeOffset(-60);
                AntiAim.SetRealOffset(0);
            }
            else
            {
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -210);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
                AntiAim.SetOverride(1);
                AntiAim.SetFakeOffset(60);
                AntiAim.SetRealOffset(0);
            }
            }

        }
        if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Crooked jitter"))
        {
            if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
            {

            }
            else
            {
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
                AntiAim.SetOverride(0);
                if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Fakelag v2"))
                {
                    UI.SetValue("Rage", "Exploits", "Doubletap instant", true)
                    UI.SetValue("Rage", "Exploits", "Doubletap", true)
                    UI.SetValue("Rage", "Exploits", "Hide shots", true)
                }
            }
        }
}

var hitlist = [[], [], []];
function drawSkel(hitboxPos, color) {
    var skelMesh = [
        [0, 1],
        [1, 6],
        [6, 5],
        [5, 4],
        [4, 3],
        [3, 2],
        [2, 7],
        [2, 8],
        [8, 10],
        [10, 12],
        [7, 9],
        [9, 11],
        [6, 15],
        [15, 16],
        [16, 13],
        [6, 17],
        [17, 18],
        [18, 14]
    ];
    for (var i = 0; i < skelMesh.length; i++) {
        var p1 = Render.WorldToScreen(hitboxPos[skelMesh[i][0]]);
        var p2 = Render.WorldToScreen(hitboxPos[skelMesh[i][1]]);
        Render.Line(p1[0], p1[1], p2[0], p2[1], color);
    }
} function h() {
    var attackerplayer = Entity.GetEntityFromUserID(Event.GetString("attacker"))
    var localplayer = Entity.GetLocalPlayer();
    if (attackerplayer == localplayer) {
        var victimplayer = Entity.GetEntityFromUserID(Event.GetString("userid"))
        var color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Color Hit");
        if (Event.GetInt("health") < 1) {
            color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Color Kill");
        }
        var hitboxPos = [];
        for (var i = 0; i < 19; i++) {
            var p = Entity.GetHitboxPosition(victimplayer, i);
            hitboxPos.push(p);
        }
        hitlist[0].push(Global.Curtime() + UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Draw Time"));
        hitlist[1].push(hitboxPos);
        hitlist[2].push(color);
    }
} function d() {
    if (hitlist[0].length == 0 || !UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Draw Lagcomp")) return;
    for (var i = 0; i < hitlist[0].length; i++) {
        if (Global.Curtime() < hitlist[0][i]) {
            drawSkel(hitlist[1][i], hitlist[2][i]);
        } else {
            hitlist[0].splice(i, 1);
            hitlist[1].splice(i, 1);
            hitlist[2].splice(i, 1);
        }
    }
}
var xdasdasd = 0;
UI.AddCheckbox("Fakelag v2")
function FunTeleport()
{
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Fakelag v2"))
    {
        UI.SetValue("Rage", "General", "Auto scope", true)
        xdasdasd += 1;
        if (xdasdasd % 10 == 0)
        {
            UI.SetValue("Rage", "Exploits", "Doubletap instant", false)
            UI.SetValue("Rage", "Exploits", "Doubletap", false)
            UI.SetValue("Rage", "Exploits", "Hide shots", false)
        }
        else
        {
            UI.SetValue("Rage", "Exploits", "Doubletap instant", false)
            UI.SetValue("Rage", "Exploits", "Doubletap", false)
            UI.SetValue("Rage", "Exploits", "Hide shots", true)
        }
        if (xdasdasd == 500)
        {
            xdasdasd = xdasdasd - xdasdasd;
        }
    }

}

UI.AddCheckbox("Resolver BETA") //LOLOLOLOLOLOLOLOLOL
function Main()
{
    Global.RegisterCallback("weapon_fire", "haha");
    Cheat.RegisterCallback("CreateMove", "hamiskacsaxd");
    Global.RegisterCallback("weapon_fire", "dt_mm");
    Global.RegisterCallback("Draw", "naja");
    Global.RegisterCallback("player_hurt", "skerusersalwaysfanboying");
	Global.RegisterCallback("CreateMove", "coolthingy_totallypasted");      //all of the features are pasted
    UI.AddCheckbox('Cool DMG indicator');                                   //crooked and the antibrute are own 8)
    UI.AddColorPicker("Color");
    Global.RegisterCallback("CreateMove", "crooked");

    UI.AddCheckbox("Draw Lagcomp");
    UI.AddSliderFloat("Draw Time", .1, 10);
    UI.AddColorPicker("Color Hit");
    UI.AddColorPicker("Color Kill");                //by Eugen1763 -> https://onetap.su/members/eugen1763.8474/
    Cheat.RegisterCallback("Draw", "d");
    Cheat.RegisterCallback("player_hurt", "h");
    Global.RegisterCallback("CreateMove", "FunTeleport");
}
Main();