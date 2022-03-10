function RADTODEG(radians){
    return radians * 180 / Math.PI
}
function calcAngle(source,entityPos){
    var delta = []
    delta[0] = source[0] - entityPos[0]
    delta[1] = source[1] - entityPos[1]
    delta[2] = source[2] - entityPos[2]
    var angles = []
    var viewangles = Local.GetViewAngles()
    angles[0] = RADTODEG(Math.atan(delta[2] / Math.hypot(delta[0], delta[1]))) - viewangles[0]
    angles[1] = RADTODEG(Math.atan(delta[1] / delta[0])) - viewangles[1]
    angles[2] = 0
    if(delta[0] >= 0)
        angles[1] += 180

    return angles
}
UI.AddSliderInt("Max Brute FOV", 0, 35)
UI.AddCheckbox("Anti-Enable")
var shots = 0
function onBulletImpact(){
    var ent = Entity.GetEntityFromUserID(Event.GetInt("userid"))
    if(ent == Entity.GetLocalPlayer() || Entity.IsTeammate(ent))
        return
    var pos = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")]
    var ang = calcAngle(Entity.GetEyePosition(ent), pos)
    var angToLocal = calcAngle(Entity.GetEyePosition(ent), Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0))
    var delta = [angToLocal[0]-ang[0],angToLocal[1]-ang[1],0]
    var FOV = Math.sqrt(delta[0] * delta[0] + delta[1] * delta[1])
    if(FOV < UI.GetValue("Max Brute FOV"))
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter")
    if(UI.GetValue("Anti-Enable")){
        shots++
        if(!(shots % 4)) UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter")
    }
}
function playerhurt(){
    if(Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer())
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter")
}
Cheat.RegisterCallback("player_hurt", "playerhurt")
Cheat.RegisterCallback("bullet_impact", "onBulletImpact")


var LOFI_MODES = [
    "Static",
    "Switch",
    "Sway"
]

var LOFI_YAW_MODE = UI.AddDropdown( "Yaw Mode", LOFI_MODES );
var LOFI_YAW_BASE = UI.AddSliderInt( "Yaw Base Value", -180, 180 );
var LOFI_YAW_FROM = UI.AddSliderInt( "Yaw From Value", -180, 180 );
var LOFI_YAW_TO = UI.AddSliderInt( "Yaw To Value", -180, 180 );
var LOFI_YAW_INT = UI.AddSliderInt( "Yaw Tick Interval", 2, 64 );

var LOFI_ROT_MODE = UI.AddDropdown( "Rotation Mode", LOFI_MODES ); 
var LOFI_ROT_BASE = UI.AddSliderInt( "Rotation Base Value", -180, 180 ); 
var LOFI_ROT_FROM = UI.AddSliderInt( "Rotation From Value", -180, 180 ); 
var LOFI_ROT_TO = UI.AddSliderInt( "Rotation To Value", -180, 180 ); 
var LOFI_ROT_INT = UI.AddSliderInt( "Rotation Tick Interval", 2, 64 ); 

var LOFI_LBY_MODE = UI.AddDropdown( "LBY Mode", LOFI_MODES ); 
var LOFI_LBY_BASE = UI.AddSliderInt( "LBY Base Value", -180, 180 );
var LOFI_LBY_FROM = UI.AddSliderInt( "LBY From Value", -180, 180 );
var LOFI_LBY_TO = UI.AddSliderInt( "LBY To Value", -180, 180 );
var LOFI_LBY_INT = UI.AddSliderInt( "LBY Tick Interval", 2, 64 );

var LOFI_SWITCH = function(START, END, FROM, TO) {
    var INTERVAL_LENGTH = END-START;
    var LENGTH_PROGRESS = (Global.Tickcount() - START) / INTERVAL_LENGTH;
    if (LENGTH_PROGRESS < 0.5) {
        return FROM
    } else {
        return TO
    }
}

var LOFI_SWAY = function(START, END, FROM, TO) {
    var INTERVAL_LENGTH = END-START;
    var LENGTH_PROGRESS = (Global.Tickcount() - START) / INTERVAL_LENGTH
    if (LENGTH_PROGRESS < 0.5) {
        return FROM + (TO-FROM) * (LENGTH_PROGRESS * 2)
    } else {
        return FROM + (TO-FROM) * 2 - (TO-FROM) * (LENGTH_PROGRESS * 2)
    }
}

var LOFI_DRAW = function() {
    var YAW, ROT, LBY;
    var YAW_MODE = LOFI_MODES[UI.GetValue("Yaw Mode")];
    var ROT_MODE = LOFI_MODES[UI.GetValue("Rotation Mode")]
    var LBY_MODE = LOFI_MODES[UI.GetValue("LBY Mode")]

    var START_TICK = Math.floor( Global.Tickcount() / UI.GetValue("Yaw Tick Interval") ) * UI.GetValue("Yaw Tick Interval")
    var END_TICK = Math.floor( Global.Tickcount() / UI.GetValue("Yaw Tick Interval") + 1 ) * UI.GetValue("Yaw Tick Interval")
    if (YAW_MODE == "Static") {
        YAW = UI.GetValue("Yaw Base Value")
    } else if(YAW_MODE == "Switch") {
        YAW = LOFI_SWITCH(START_TICK, END_TICK, UI.GetValue("Yaw From Value"), UI.GetValue("Yaw To Value"))
    } else if(YAW_MODE == "Sway") {
        YAW = LOFI_SWAY(START_TICK, END_TICK, UI.GetValue("Yaw To Value"), UI.GetValue("Yaw To Value"))
    }

    var START_TICK = Math.floor( Global.Tickcount() / UI.GetValue("Rotation Tick Interval") ) * UI.GetValue("Rotation Tick Interval")
    var END_TICK = Math.floor( Global.Tickcount() / UI.GetValue("Rotation Tick Interval") + 1 ) * UI.GetValue("Rotation Tick Interval")
    if (ROT_MODE == "Static") {
        ROT = UI.GetValue("Rotation Base Value")
    } else if(ROT_MODE == "Switch") {
        ROT = LOFI_SWITCH(START_TICK, END_TICK, UI.GetValue("Rotation From Value"), UI.GetValue("Rotation To Value"))
    } else if(ROT_MODE == "Sway") {
        ROT = LOFI_SWAY(START_TICK, END_TICK, UI.GetValue("Rotation From Value"), UI.GetValue("Rotation To Value"))
    }

    var START_TICK = Math.floor( Global.Tickcount() / UI.GetValue("LBY Tick Interval") ) * UI.GetValue("LBY Tick Interval")
    var END_TICK = Math.floor( Global.Tickcount() / UI.GetValue("LBY Tick Interval") + 1 ) * UI.GetValue("LBY Tick Interval")
    if (LBY_MODE == "Static") {
        LBY = UI.GetValue("Yaw Base Value")
    } else if(LBY_MODE == "Switch") {
        LBY = LOFI_SWITCH(START_TICK, END_TICK, UI.GetValue("LBY From Value"), UI.GetValue("LBY To Value"))
    } else if(LBY_MODE == "Sway") {
        LBY = LOFI_SWAY(START_TICK, END_TICK, UI.GetValue("LBY From Value"), UI.GetValue("LBY To Value"))
    }

    AntiAim.SetOverride(1);
    AntiAim.SetRealOffset( YAW );
    AntiAim.SetFakeOffset( ROT );
    AntiAim.SetLBYOffset( LBY );
}

function Unload() {
    AntiAim.SetOverride(0);
}

Cheat.RegisterCallback("Draw", "LOFI_DRAW");
Cheat.RegisterCallback("Unload", "Unload")