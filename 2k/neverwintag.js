UI.AddDropdown( "Custom ClanTag", [ "Disabled", "Neverlose"] );
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
            switch((time) % 53)
            {
                case 1: { Local.SetClanTag("  "); break; }
                case 2: { Local.SetClanTag(" | "); break; }
                case 3: { Local.SetClanTag(" |\\ "); break; }
                case 4: { Local.SetClanTag(" |\\| "); break; }
                case 5: { Local.SetClanTag(" N "); break; }
                case 6: { Local.SetClanTag(" N3 "); break; }
                case 7: { Local.SetClanTag(" Ne "); break; }
                case 8: { Local.SetClanTag(" Ne\\ "); break; }
                case 9: { Local.SetClanTag(" Ne\\/ "); break; }
                case 10: { Local.SetClanTag(" Nev "); break; }
                case 11: { Local.SetClanTag(" Nev3 "); break; }
                case 12: { Local.SetClanTag(" Neve "); break; }
                case 13: { Local.SetClanTag(" Neve| "); break; }
                case 14: { Local.SetClanTag(" Neve|2 "); break; }
                case 15: { Local.SetClanTag(" Never\/\/ "); break; }
                case 16: { Local.SetClanTag(" Neverw "); break; }
                case 17: { Local.SetClanTag(" Neverw1 "); break; }
                case 18: { Local.SetClanTag(" Neverwi "); break; }
                case 19: { Local.SetClanTag(" Neverwi|\| "); break; }
                case 20: { Local.SetClanTag(" Neverwin. "); break; }
                case 21: { Local.SetClanTag(" Neverwin.< "); break; }
                case 22: { Local.SetClanTag(" Neverwin.c "); break; }
                case 23: { Local.SetClanTag(" Neverwin.c< "); break; }
                case 24: { Local.SetClanTag(" Neverwin.cc "); break; }
                case 25: { Local.SetClanTag(" Neverwin.c< "); break; }
                case 26: { Local.SetClanTag(" Neverwin.c "); break; }
                case 27: { Local.SetClanTag(" Neverwin.< "); break; }
                case 28: { Local.SetClanTag(" Neverwin. "); break; }
                case 29: { Local.SetClanTag(" Neverwin "); break; }
                case 30: { Local.SetClanTag(" Neverwi|\| "); break; }
                case 31: { Local.SetClanTag(" Neverwi "); break; }
                case 32: { Local.SetClanTag(" Neverw1 "); break; }
                case 33: { Local.SetClanTag(" Neverw "); break; }
                case 34: { Local.SetClanTag(" Never\/\/ "); break; }
                case 35: { Local.SetClanTag(" Never "); break; }
                case 36: { Local.SetClanTag(" Never "); break; }
                case 40: { Local.SetClanTag(" Neve|2 "); break; }
                case 41: { Local.SetClanTag(" Neve| "); break; }
                case 42: { Local.SetClanTag(" Neve "); break; }
                case 43: { Local.SetClanTag(" Nev3 "); break; }
                case 44: { Local.SetClanTag(" Nev "); break; }
                case 45: { Local.SetClanTag(" Ne\\/ "); break; }
                case 46: { Local.SetClanTag(" Ne\\ "); break; }
                case 47: { Local.SetClanTag(" Ne "); break; }
                case 48: { Local.SetClanTag(" N3 "); break; }
                case 49: { Local.SetClanTag(" N "); break; }
                case 50: { Local.SetClanTag(" |\\| "); break; }
                case 51: { Local.SetClanTag(" |\\ "); break; }
                case 52: { Local.SetClanTag(" | "); break; }
                case 53: { Local.SetClanTag("  "); break; }
			
			
            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");


//dyson the gay lol