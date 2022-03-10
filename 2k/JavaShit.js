var vFlip = false;
var isInBuyzone = false;

function onEnterBuyzone(){
    var vPlayer = Entity.GetEntityFromUserID(Event.GetInt("userid"));

    if (!vPlayer){
        return;

    } if (Entity.IsLocalPlayer(vPlayer)){
        if (Event.GetInt("canbuy")){
            isInBuyzone = true;
        }
    }
};

function onRoundStart(){
    isInBuyzone = true;
};

function onExitBuyzone(){
    var vPlayer = Entity.GetEntityFromUserID(Event.GetInt("userid"));

    if (!vPlayer){
        return;

    } if (Entity.IsLocalPlayer(vPlayer)){
        isInBuyzone = false;
    }
};

function onClientDisconnect(){
    isInBuyzone = true;
};

function onCreateMove(){
    var vLocalPlayer = Entity.GetLocalPlayer();

    if (!vLocalPlayer || !Entity.IsAlive(vLocalPlayer)){
        return;

    } if (isInBuyzone){
        return;
    }

    if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "[SuicidEE.cf] Doorstuck Enable")){
        if (vFlip){
            Global.ExecuteCommand("+use");

        } else {
            Global.ExecuteCommand("-use");
        }
        vFlip = !vFlip;

    } else if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "[SuicidEE.cf] Doorstuck Enable") && flip){
        vFlip = false;
        Global.ExecuteCommand( "-use" );
    }
}

Global.RegisterCallback( "round_start", "onRoundStart" );
Global.RegisterCallback( "enter_buyzone", "onEnterBuyzone" );
Global.RegisterCallback( "exit_buyzone", "onExitBuyzone" );
Global.RegisterCallback( "client_disconnect", "onClientDisconnect" );
Global.RegisterCallback( "CreateMove", "onCreateMove" );
UI.AddHotkey("[SuicidEE.cf] Doorstuck Enable");