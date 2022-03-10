/*--------------------------------------------------------------------------------
-- ANTI AIM TAB
--------------------------------------------------------------------------------*/
      UI.AddLabel("|                 ANTI-AIM                 | ");
	   UI.AddLabel("****************************************");

/*--------------------------------------------------------------------------------
-- DYNAMIC FAKE LAG 
--------------------------------------------------------------------------------*/

Global.RegisterCallback( "FrameStageNotify", "fsn" ); // dynamic fake-lag
UI.AddCheckbox("Dynamic Fakelag")
UI.AddSliderInt("Minimum Value", 1, 14)
UI.AddSliderInt("Maximum Value", 1, 14)
function CM() { 
    var lag_value = UI.GetValue("Anti-Aim", "Fake-Lag", "Limit")
    var min_value = UI.GetValue("Minimum Value")
    var max_value = UI.GetValue("Maximum Value")
    if (UI.GetValue("Dynamic Fakelag")) {
        UI.SetEnabled("Minimum Value", true)
        UI.SetEnabled("Maximum Value", true)
        if (lag_value >= min_value) {
            lag_value -= 1
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", lag_value)
        }
        if (lag_value < min_value) {
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", max_value)
        }
    } else {
        UI.SetEnabled("Minimum Value", false)
        UI.SetEnabled("Maximum Value", false)
    }
} 

/*--------------------------------------------------------------------------------
-- SLOW WALK 
--------------------------------------------------------------------------------*/

Cheat.RegisterCallback("CreateMove", "cMove");
UI.AddHotkey("Slow-walk:");

UI.AddSliderInt("Speed:", 0, 135);

function getVal(valName) {return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valName);}

function cMove() {
    //forward, side, up.
    if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Slow-walk:")) return;

    speed = getVal("Speed:");

    fSpeed = speed;
    bSpeed = speed;
    sSpeed = speed;

    dir = [0, 0, 0];

    if (Input.IsKeyPressed(0x57)) {
        //'W' AKA Forward
        dir[0] += fSpeed;
    }
    if (Input.IsKeyPressed(0x44)) {
        //'D' AKA Right
        dir[1] += sSpeed;
    }
    if (Input.IsKeyPressed(0x41)) {
        //'A' AKA Left
        dir[1] -= sSpeed;
    }
    if (Input.IsKeyPressed(0x53)) {
        //'S' AKA Back
        dir[0] -= bSpeed;
    }

    UserCMD.SetMovement(dir);
}

/*--------------------------------------------------------------------------------
-- RAGEBOT TAB 
--------------------------------------------------------------------------------*/ 
      UI.AddLabel("________________________________________");
      UI.AddLabel("|                  RAGEBOT                 | ");
	  UI.AddLabel("****************************************");
	 
/*--------------------------------------------------------------------------------
-- DOUBLE TAP
--------------------------------------------------------------------------------*/  
	  
UI.AddSliderInt("Double-tap speed", 0, 3);  //doubletap
function can_shift_shot(ticks_to_shift) {
    var me = Entity.GetLocalPlayer();
    var wpn = Entity.GetWeapon(me);

    if (me == null || wpn == null)
        return false;

    var tickbase = Entity.GetProp(me, "CCSPlayer", "m_nTickBase");
    var curtime = Globals.TickInterval() * (tickbase-ticks_to_shift)

    if (curtime < Entity.GetProp(me, "CCSPlayer", "m_flNextAttack"))
        return false;

    if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
        return false;

    return true;
}
function _TBC_CREATE_MOVE() {
    var is_charged = Exploit.GetCharge()
    var reserve = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Double-tap speed")

    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()

    if (can_shift_shot(14) && is_charged != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    }

    Exploit.OverrideTolerance(reserve);
    Exploit.OverrideShift(14-reserve);
}

function _TBC_UNLOAD() {
    Exploit.EnableRecharge();
}                                                                                             

/*--------------------------------------------------------------------------------
-- FAST AUTOBUY
--------------------------------------------------------------------------------*/

Cheat.RegisterCallback("CreateMove", "CM")                              
var run = false;
var estimate = 0;
var firstBuy = 0;
var alias = [
    ["awp"],
    ["ssg08"],
    ["scar20", "g3sg1"]
]

function roundEnded() {
    run = true;
    estimate = Globals.Curtime()+Convar.GetInt("mp_round_restart_delay");
    firstBuy = 0;
}

function purchase(index) {
    alias[index].forEach(function(v) { Cheat.ExecuteCommand("buy "+v); })
    run = false;
}

function onDraw() {
    run && Globals.Curtime()+(Local.Latency()/1000) >= estimate && purchase(UI.GetValue.apply(this, dropdown));
}

function purchased() {
    if (firstBuy == 0) firstBuy = Globals.Curtime()-estimate;
    if (!Entity.GetEntityFromUserID(Event.GetInt("userid")) || firstBuy == -1) return;

    Cheat.Print("The first item of the round was purchased at " + firstBuy + "s, you purchased at " + (Globals.Curtime()-estimate) + "s.\n");
    firstBuy = -1;
}

var dropdown = UI.AddDropdown("Fast Autobuy", ["AWP", "Scout", "Auto"]);

Cheat.RegisterCallback("round_end", "roundEnded");
Cheat.RegisterCallback("Draw", "onDraw");
Cheat.RegisterCallback("item_purchase", "purchased");
Cheat.RegisterCallback("CreateMove", "cMove");                               
   
/*----------------------------------------------------------------------------------------------------------------------------------
-- INDICATORS & DT RECHARGE & OVERRIDE
-----------------------------------------------------------------------------------------------------------------------------------*/     
-
-
/*--------------------------------------------------------------------------------
-- NO SCOPE 
--------------------------------------------------------------------------------*/

UI.AddSliderFloat("Noscope distance (m)", 0, 100);
var target = -1;
function CreateMove() {
    if(!Ragebot.GetTarget())
        target = closestTarget();
    else
        target = Ragebot.GetTarget();
    if(!Entity.IsAlive(target)) {
        UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true);
        return;
    }
    if(get_metric_distance(Entity.GetRenderOrigin(Entity.GetLocalPlayer()), Entity.GetRenderOrigin(target)) < UI.GetValue("Script items", "Noscope distance (m)")) {
        UI.SetValue("Rage", "GENERAL", "General", "Auto scope", false);
    } else {
        UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true);
    }
}
Cheat.RegisterCallback("CreateMove", "CreateMove");
function closestTarget() {
    var local = Entity.GetLocalPlayer();
    var enemies = Entity.GetEnemies();
    var dists = [];
    var damage = [];
    for(e in enemies) {
        if(!Entity.IsAlive(enemies[e]) || Entity.IsDormant(enemies[e]) || !Entity.IsValid(enemies[e])) continue;
        dists.push([enemies[e], calcDist(Entity.GetHitboxPosition(local, 0), Entity.GetHitboxPosition(enemies[e], 0))]);
    }
    dists.sort(function(a, b)
    {
        return a[1] - b[1];
    });
    if(dists.length == 0 || dists == []) return target = -1; 
    return dists[0][0];
}

// clean dist func, thanks rzr
function calcDist(a, b)
{
    x = a[0] - b[0];
    y = a[1] - b[1];
    z = a[2] - b[2];
    return Math.sqrt( x * x + y * y + z * z );
}

function get_metric_distance(a, b)
{
    return Math.floor(Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2)) * 0.0254 );
}

/*--------------------------------------------------------------------------------
-- MISC TAB
--------------------------------------------------------------------------------*/
     UI.AddLabel("_______________________________________");
      UI.AddLabel("|                     MISC                    | ");
	  UI.AddLabel("****************************************");
	   

/*--------------------------------------------------------------------------------
-- ASPECT RATIO
--------------------------------------------------------------------------------*/

Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");          
Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");
UI.AddSliderInt( "Aspect ratio", 0, 500 );

function fsn( ) {
    ui_arat_val = UI.GetValue( "Aspect ratio" );

    switch ( Global.FrameStage( ) ) {
        case 5: {
            Global.ExecuteCommand( "r_aspectratio " + ui_arat_val.toString()/100 );

            break;
        }
        default: break;
    }
}

/*--------------------------------------------------------------------------------
-- SKIN CHANGER HELPER
--------------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------------------------------------------------------------
-- INDICATORS & DT RECHARGE & OVERRIDE
-----------------------------------------------------------------------------------------------------------------------------------*/     








