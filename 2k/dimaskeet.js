UI.AddDropdown( "Custom ClanTag", [ "Disabled", "dima skeet"] );
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
            switch((time) % 64)
            {
                case 1: { Local.SetClanTag("  "); break; }
                case 2: { Local.SetClanTag(" c "); break; }
                case 3: { Local.SetClanTag(" c|"); break; }
                case 4: { Local.SetClanTag(" d "); break; }
                case 5: { Local.SetClanTag(" d1"); break; }
                case 6: { Local.SetClanTag(" di "); break; }
                case 7: { Local.SetClanTag(" di111 "); break; }
                case 8: { Local.SetClanTag(" dim"); break; }
                case 9: { Local.SetClanTag(" dim@ "); break; }
                case 10: { Local.SetClanTag(" dima "); break; }
                case 11: { Local.SetClanTag(" dima / "); break; }
                case 12: { Local.SetClanTag(" dima \ "); break; }
                case 13: { Local.SetClanTag(" dima s "); break; }
                case 14: { Local.SetClanTag(" dima |"); break; }
                case 15: { Local.SetClanTag(" dima s|/"); break; }
                case 16: { Local.SetClanTag(" dima s|\ "); break; }
                case 17: { Local.SetClanTag(" dima sk "); break; }
                case 18: { Local.SetClanTag(" dima sk3 "); break; }
                case 19: { Local.SetClanTag(" dima ske"); break; }
                case 20: { Local.SetClanTag(" dima ske3"); break; }
                case 21: { Local.SetClanTag(" dima skee "); break; }
                case 22: { Local.SetClanTag(" dima skee|_ "); break; }
                case 23: { Local.SetClanTag(" dima skee|7 "); break; }
                case 24: { Local.SetClanTag(" dima skeet "); break; }
                case 25: { Local.SetClanTag(" dima skeet0 "); break; }
                case 26: { Local.SetClanTag(" dima skeeto "); break; }
                case 27: { Local.SetClanTag(" dima skeeto\ "); break; }
                case 28: { Local.SetClanTag(" dima skeeto\/ "); break; }
                case 29: { Local.SetClanTag(" dima skeetov "); break; }
                case 30: { Local.SetClanTag(" dima skeetov "); break; }
                case 31: { Local.SetClanTag(" dima skeetov "); break; }
                case 32: { Local.SetClanTag(" dima skeetov "); break; }
                case 33: { Local.SetClanTag(" dima skeetov "); break; }
                case 34: { Local.SetClanTag(" dima skeetov "); break; }
                case 35: { Local.SetClanTag(" dima skeetov "); break; }
                case 36: { Local.SetClanTag(" dima skeetov "); break; }
                case 37: { Local.SetClanTag(" dima skeeto\/ "); break; }
                case 38: { Local.SetClanTag(" dima skeeto\ "); break; }
                case 39: { Local.SetClanTag(" dima skeet0 "); break; }
                case 40: { Local.SetClanTag(" dima skeet "); break; }
                case 41: { Local.SetClanTag(" dima skee|7 "); break; }
                case 42: { Local.SetClanTag(" dima skee|_ "); break; }
                case 43: { Local.SetClanTag(" dima skee"); break; }
                case 44: { Local.SetClanTag(" dima ske3 "); break; }
                case 45: { Local.SetClanTag(" dima sk3 "); break; }
                case 46: { Local.SetClanTag(" dima sk "); break; }
                case 47: { Local.SetClanTag(" dima s|\ "); break; }
                case 48: { Local.SetClanTag(" dima s|/ "); break; }
                case 49: { Local.SetClanTag(" dima s "); break; }
                case 50: { Local.SetClanTag(" dima / "); break; }
                case 51: { Local.SetClanTag(" dima \ "); break; }
                case 52: { Local.SetClanTag(" dima  "); break; }
                case 53: { Local.SetClanTag(" dim@ "); break; }
                case 54: { Local.SetClanTag(" dim "); break; }
                case 55: { Local.SetClanTag(" di111 "); break; }
                case 56: { Local.SetClanTag(" di "); break; }
                case 56: { Local.SetClanTag(" d1 "); break; }
                case 57: { Local.SetClanTag(" c| "); break; }
                case 58: { Local.SetClanTag("   "); break; }
          
            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");
                
