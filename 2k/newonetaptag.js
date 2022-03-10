UI.AddDropdown( "Custom ClanTag", [ "Off", "generaltag", "[ot]", "onetap.su", ] );
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
            switch((time) % 65)
            {
			case 0: { Local.SetClanTag("w"); break; }
			case 1: { Local.SetClanTag("$"); break; }
			case 2: { Local.SetClanTag("§"); break; }
			case 3: { Local.SetClanTag("wa"); break; }
			case 4: { Local.SetClanTag("wan"); break; }
			case 5: { Local.SetClanTag("%%"); break; }
			case 6: { Local.SetClanTag("wanh"); break; }
			case 7: { Local.SetClanTag("wanh%"); break; }
			case 8: { Local.SetClanTag("wanhe"); break; }
			case 9: { Local.SetClanTag("wanhe1"); break; }
			case 10: { Local.SetClanTag("wanhed"); break; }
			case 11: { Local.SetClanTag("wanhed4"); break; }
			case 12: { Local.SetClanTag("wanheda"); break; }
			case 13: { Local.SetClanTag("wanheda%"); break; }
			case 14: { Local.SetClanTag("wanheda."); break; }
			case 15: { Local.SetClanTag("wanheda.$"); break; }
			case 16: { Local.SetClanTag("wanheda.p"); break; }
			case 17: { Local.SetClanTag("wanheda.p/"); break; }
			case 18: { Local.SetClanTag("wanheda.pr"); break; }
			case 19: { Local.SetClanTag("wanheda.pr&"); break; }
			case 20: { Local.SetClanTag("wanheda.pro$"); break; }
			case 21: { Local.SetClanTag("$wanheda.pro$"); break; }
			case 22: { Local.SetClanTag("$wanheda.pro"); break; }
			case 23: { Local.SetClanTag("wanheda.pro"); break; }
			case 24: { Local.SetClanTag("wanheda.pro"); break; }
			case 25: { Local.SetClanTag("wanheda.pr"); break; }
			case 26: { Local.SetClanTag("wanheda.pr%"); break; }
			case 27: { Local.SetClanTag("wanheda.pr"); break; }
			case 28: { Local.SetClanTag("wanheda.p4"); break; }
			case 29: { Local.SetClanTag("wanheda.p"); break; }
			case 30: { Local.SetClanTag("wanheda.%"); break; }
			case 31: { Local.SetClanTag("wanheda."); break; }
			case 32: { Local.SetClanTag("wanheda%"); break; }
			case 33: { Local.SetClanTag("wanheda"); break; }
			case 34: { Local.SetClanTag("wanhed%"); break; }
			case 35: { Local.SetClanTag("wanhed"); break; }
			case 36: { Local.SetClanTag("wanhe$"); break; }
			case 37: { Local.SetClanTag("wanhe$"); break; }
			case 38: { Local.SetClanTag("wanh%"); break; }
			case 39: { Local.SetClanTag("wanh"); break; }
			case 40: { Local.SetClanTag("wan%"); break; }
			case 41: { Local.SetClanTag("wan"); break; }
			case 42: { Local.SetClanTag("wa$"); break; }
			case 43: { Local.SetClanTag("w"); break; }
			case 44: { Local.SetClanTag("%"); break; }
			case 45: { Local.SetClanTag("$"); break; }
			case 46: { Local.SetClanTag("$"); break; }
			case 47: { Local.SetClanTag("Stay w"); break; }
			case 48: { Local.SetClanTag("Stay wa"); break; }
			case 49: { Local.SetClanTag("Stay wan%"); break; }
			case 50: { Local.SetClanTag("Stay wanh%"); break; }
			case 51: { Local.SetClanTag("Stay wanhe%"); break; }
			case 52: { Local.SetClanTag("Stay wanhed%"); break; }
			case 53: { Local.SetClanTag("Stay wanheda%"); break; }
			case 54: { Local.SetClanTag("Stay wanheda.%"); break; }
			case 55: { Local.SetClanTag("Stay wanheda.p%"); break; }
			case 56: { Local.SetClanTag("Stay wanheda.pr%"); break; }
			case 57: { Local.SetClanTag("Stay wanheda.pro%"); break; }
			case 58: { Local.SetClanTag("Stay $wanheda.pro$"); break; }

			}				
		}
		if(tag == 2)
			{
            switch((time) % 52)
            {
			case 0: { Local.SetClanTag("["); break; }
            case 1: { Local.SetClanTag("[."); break; }
            case 2: { Local.SetClanTag("[.."); break; }
            case 3: { Local.SetClanTag("[..."); break; }
            case 4: { Local.SetClanTag("[...."); break; }
            case 5: { Local.SetClanTag("[....."); break; }
            case 6: { Local.SetClanTag("[....."); break; }
            case 7: { Local.SetClanTag("[......"); break; }
            case 8: { Local.SetClanTag("[......"); break; }
            case 9: { Local.SetClanTag("[......."); break; }
            case 10:{ Local.SetClanTag("[........"); break; }
            case 11:{ Local.SetClanTag("[........."); break; }
			case 12:{ Local.SetClanTag("[.........."); break; }
			case 13:{ Local.SetClanTag("[o.........]"); break; }
			case 14:{ Local.SetClanTag("[on........]"); break; }
            case 15:{ Local.SetClanTag("[one.......]"); break; }
            case 16:{ Local.SetClanTag("[onet......]"); break; }
            case 17:{ Local.SetClanTag("[oneta.....]"); break; }
            case 18:{ Local.SetClanTag("[onetap....]"); break; }
            case 19:{ Local.SetClanTag("[onetap....]"); break; }
            case 20:{ Local.SetClanTag("[onetap.c..]"); break; }
            case 21:{ Local.SetClanTag("[onetap.co.]"); break; }
            case 22:{ Local.SetClanTag("[onetap.com]"); break; }
			case 23:{ Local.SetClanTag("[onetap.com]"); break; }
            case 24:{ Local.SetClanTag("[onetap.com]"); break; }
			case 25:{ Local.SetClanTag("[onetap.com]"); break; }
			case 26:{ Local.SetClanTag("[onetap.com]"); break; }
			case 27:{ Local.SetClanTag("[onetap.com]"); break; }
			case 28:{ Local.SetClanTag("[onetap.com]"); break; }
			case 29:{ Local.SetClanTag("[onetap.com]"); break; }
			case 30:{ Local.SetClanTag("[onetap.com]"); break; }
			case 31:{ Local.SetClanTag("[onetap.co.]"); break; }
			case 32:{ Local.SetClanTag("[onetap.c..]"); break; }
            case 33:{ Local.SetClanTag("[onetap....]"); break; }
			case 34:{ Local.SetClanTag("[onetap....]"); break; }
			case 35:{ Local.SetClanTag("[oneta.....]"); break; }
			case 36:{ Local.SetClanTag("[onet......]"); break; }
			case 37:{ Local.SetClanTag("[one.......]"); break; }
            case 38:{ Local.SetClanTag("[on........]"); break; }
			case 39:{ Local.SetClanTag("[o.........]"); break; }
			case 40:{ Local.SetClanTag("[..........]"); break; }
			case 41:{ Local.SetClanTag("[.........."); break; }
			case 42:{ Local.SetClanTag("[........."); break; }
            case 43:{ Local.SetClanTag("[........"); break; }
			case 44:{ Local.SetClanTag("[......."); break; }
			case 45:{ Local.SetClanTag("[......"); break; }
			case 46:{ Local.SetClanTag("[....."); break; }
			case 47:{ Local.SetClanTag("[...."); break; }
			case 48:{ Local.SetClanTag("[..."); break; }
			case 49:{ Local.SetClanTag("[.."); break; }
			case 50:{ Local.SetClanTag("[."); break; }
			case 51:{ Local.SetClanTag("["); break; }
			case 52:{ Local.SetClanTag(""); break; }
			}
		}
		if(tag == 3)
			{
            switch((time) % 26)
            {
            case 0: { Local.SetClanTag("                  "); break; }
            case 1: { Local.SetClanTag("                 o"); break; }
            case 2: { Local.SetClanTag("                on"); break; }
            case 3: { Local.SetClanTag("               one"); break; }
            case 4: { Local.SetClanTag("              onet"); break; }
            case 5: { Local.SetClanTag("             oneta"); break; }
            case 6: { Local.SetClanTag("            onetap"); break; }
            case 7: { Local.SetClanTag("           onetap."); break; }
            case 8: { Local.SetClanTag("          onetap.s"); break; }
            case 9: { Local.SetClanTag("         onetap.su"); break; }
            case 10:{ Local.SetClanTag("        onetap.su "); break; }
            case 11:{ Local.SetClanTag("       onetap.su  "); break; }
            case 12:{ Local.SetClanTag("      onetap.su   "); break; }
            case 13:{ Local.SetClanTag("     onetap.su    "); break; }
            case 14:{ Local.SetClanTag("    onetap.su     "); break; }
            case 15:{ Local.SetClanTag("   onetap.su      "); break; }
            case 16:{ Local.SetClanTag("  onetap.su       "); break; }
            case 17:{ Local.SetClanTag(" onetap.su        "); break; }
            case 18:{ Local.SetClanTag("onetap.su         "); break; }
            case 19:{ Local.SetClanTag("netap.su          "); break; }
            case 20:{ Local.SetClanTag("etap.su           "); break; }
            case 21:{ Local.SetClanTag("tap.su            "); break; }
            case 22:{ Local.SetClanTag("ap.su             "); break; }
            case 23:{ Local.SetClanTag("p.su              "); break; }
            case 24:{ Local.SetClanTag(".su               "); break; }
            case 25:{ Local.SetClanTag("su                "); break; }
            case 26:{ Local.SetClanTag("u                 "); break; }
			}
		}
	}
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");