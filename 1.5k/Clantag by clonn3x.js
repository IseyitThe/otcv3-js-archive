UI.AddDropdown( "Custom ClanTag", [ "Disabled", "NR by clonn3x"] );
UI.AddSliderInt( "Custom ClanTag Speed", 1, 10 );
var lasttime = 0;
function onRender( )
{
    var tag = UI.GetValue( "Script Items", "Custom ClanTag" );
    var speed = UI.GetValue( "Script Items", "Custom ClanTag Speed" );
    var time = parseInt((Globals.Curtime() * speed))
    if (time != lasttime)
    {
        if(tag == 0) { Local.SetClanTag(""); }
        if(tag == 1)
            {
            switch((time) % 56)
            {
            case 1: { Local.SetClanTag(" "); break; }
            case 2: { Local.SetClanTag(" F"); break; }
            case 3: { Local.SetClanTag(" FL"); break; }
            case 4: { Local.SetClanTag(" FLO"); break; }
            case 5: { Local.SetClanTag(" FLOW"); break; }
            case 6: { Local.SetClanTag(" FLOWS"); break; }
            case 7: { Local.SetClanTag(" FLOWSW"); break; }
            case 8: { Local.SetClanTag(" FLOWSWA"); break; }
            case 9: { Local.SetClanTag(" FLOWSWAP"); break; }
            case 10: { Local.SetClanTag(" flowswap"); break; }
            case 11: { Local.SetClanTag(" flowswap"); break; }
            case 12: { Local.SetClanTag(" flowswap"); break; }
            case 13: { Local.SetClanTag(" flowswap"); break; }
            case 14: { Local.SetClanTag(" flowswap"); break; }
            case 15: { Local.SetClanTag(" flowswap"); break; }
            case 16: { Local.SetClanTag(" flowswap"); break; }
            case 17: { Local.SetClanTag(" flowswap"); break; }
            case 18: { Local.SetClanTag(" flowswap"); break; }
            case 19: { Local.SetClanTag(" flowswap"); break; }
            case 20: { Local.SetClanTag(" flowswap"); break; }
            case 21: { Local.SetClanTag(" flowswap<"); break; }
            case 22: { Local.SetClanTag(" flowswa<"); break; }
            case 23: { Local.SetClanTag(" flowsw<"); break; }
            case 24: { Local.SetClanTag(" flows<"); break; }
            case 25: { Local.SetClanTag(" flow<"); break; }
            case 26: { Local.SetClanTag(" flo<"); break; }
            case 27: { Local.SetClanTag(" fl<"); break; }
            case 28: { Local.SetClanTag(" f<"); break; }
            case 29: { Local.SetClanTag(" <"); break; }
            case 30: { Local.SetClanTag(" >"); break; }
            case 31: { Local.SetClanTag(" >"); break; }
            case 32: { Local.SetClanTag(" >"); break; }

            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");