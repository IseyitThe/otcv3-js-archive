var prevVal =  0;
var nextVal =  1;
var lines   = 20; // Last case number + 1

function fsn() {

    if (Cheat.FrameStage() != 0)   return;
    if (!World.GetServerString()) return;
    if (Entity.GetLocalPlayer() == undefined) return;
    if (Globals.TickInterval()  == undefined ) return;

    var tickbase   = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_nTickBase");
    var servertime = Math.floor((Globals.TickInterval() * tickbase) *3.8);
    var value      = (servertime % lines);

    if(prevVal == value) return;
    if(value != nextVal) return;

    switch(value){
        case 0:  Local.SetClanTag(" g ");break;
        case 1:  Local.SetClanTag(" ga ");break;
        case 2:  Local.SetClanTag(" gam ");break;
        case 3:  Local.SetClanTag(" game ");break;
        case 4:  Local.SetClanTag(" games ");break;
        case 5:  Local.SetClanTag(" gamese ");break;
        case 6:  Local.SetClanTag(" gamesen ");break;
        case 7:  Local.SetClanTag("  gamesens ");break;
        case 8:  Local.SetClanTag(" gamesense ");break;
        case 9:  Local.SetClanTag(" gamesense ");break;
        case 10: Local.SetClanTag(" gamesense ");break;
        case 11: Local.SetClanTag(" gamesense ");break;
        case 12: Local.SetClanTag(" gamesens ");break;
        case 13: Local.SetClanTag(" gamesen ");break;
        case 14: Local.SetClanTag(" gamese ");break;
        case 15: Local.SetClanTag(" games ");break;
        case 16: Local.SetClanTag(" game ");break;
        case 17: Local.SetClanTag(" gam ");break;
        case 18: Local.SetClanTag(" ga  ");break;
        case 19: Local.SetClanTag(" g ");break;
        case 20: Local.SetClanTag("  ");break;
    }
    prevVal = value;
    if(prevVal == (lines-1))
        nextVal = 0;
    else
        nextVal = prevVal+1;
}

Cheat.RegisterCallback("FrameStageNotify", "fsn");