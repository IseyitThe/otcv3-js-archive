UI.AddSubTab( ["Misc.", "SUBTAB_MGR"], "ClanTag");
UI.AddDropdown( ["Misc.", "ClanTag", "SHEET_MGR", "ClanTag"], "ClanTag",["Disabled","1","2","3"],0);
UI.AddSliderInt(["Misc.", "ClanTag", "SHEET_MGR", "ClanTag"], "ClanTag speed", 2,4);

var lasttime = 0;
function onRender( )
{
    var tag = UI.GetValue( ["Misc.","ClanTag","ClanTag", "ClanTag"] );
    var speed = UI.GetValue( ["Misc.","ClanTag","ClanTag", "ClanTag speed"] );
    var time = parseInt((Globals.Curtime() * speed))
    if (time != lasttime)
    {
        if(tag == 0) { Local.SetClanTag(""); }
        if(tag == 1)
            {
            switch((time) % 28)
            {
            case 1: { Local.SetClanTag("  "); break; }
            case 2: { Local.SetClanTag(" m "); break; }
            case 3: { Local.SetClanTag(" ma "); break; }
            case 4: { Local.SetClanTag(" man "); break; }
            case 5: { Local.SetClanTag(" mang "); break; }
            case 6: { Local.SetClanTag(" mango "); break; }
            case 7: { Local.SetClanTag(" mango. "); break; }
            case 8: { Local.SetClanTag(" mango.c "); break; }
            case 9: { Local.SetClanTag(" mango.cl "); break; }
            case 10: { Local.SetClanTag(" mango.clu "); break; }
            case 11: { Local.SetClanTag(" mango.club "); break; }
            case 12: { Local.SetClanTag(" mango.club "); break; }
            case 13: { Local.SetClanTag(" mango.club "); break; }
            case 14: { Local.SetClanTag(" mango.club "); break; }
            case 15: { Local.SetClanTag(" mango.club "); break; }
            case 16: { Local.SetClanTag(" mango.club "); break; }
            case 17: { Local.SetClanTag(" mango.club "); break; }
            case 18: { Local.SetClanTag(" mango.club "); break; }
            case 19: { Local.SetClanTag(" mango.clu "); break; }
            case 20: { Local.SetClanTag(" mango.cl "); break; }
            case 21: { Local.SetClanTag(" mango.c "); break; }
            case 22: { Local.SetClanTag(" mango. "); break; }
            case 23: { Local.SetClanTag(" mango "); break; }
            case 24: { Local.SetClanTag(" mang "); break; }
            case 25: { Local.SetClanTag(" man "); break; }
            case 26: { Local.SetClanTag(" ma "); break; }
            case 27: { Local.SetClanTag(" m "); break; }
            case 28: { Local.SetClanTag(" "); break; }

           
            }
        }
    if(tag == 2)
            {
            switch((time) % 19)
            {
                case 0: { Local.SetClanTag("mango.club"); break; }
                case 1: { Local.SetClanTag("mango.club"); break; }
                case 2: { Local.SetClanTag("m4ng0.cl8b"); break; }
                case 3: { Local.SetClanTag("m4ng0.cl8b"); break; }
                case 4: { Local.SetClanTag("mango.club"); break; }
                case 5: { Local.SetClanTag("mango.club"); break; }
                case 6: { Local.SetClanTag("m4ng0.cl8b"); break; }
                case 7: { Local.SetClanTag("m4ng0.cl8b"); break; }
                case 8: { Local.SetClanTag("mango.club"); break; }
                case 9: { Local.SetClanTag("mango.club"); break; }
                case 10: { Local.SetClanTag("m4ng0.cl8b"); break; }
                case 11: { Local.SetClanTag("m4ng0.cl8b"); break; }
                case 12: { Local.SetClanTag("mango.club"); break; }
                case 13: { Local.SetClanTag("mango.club"); break; }
                case 14: { Local.SetClanTag("m4ng0.cl8b"); break; }
                case 15: { Local.SetClanTag("m4ng0.cl8b"); break; }
                case 16: { Local.SetClanTag("mango.club"); break; }
                case 17: { Local.SetClanTag("mango.club"); break; }
                case 18: { Local.SetClanTag("m4ng0.cl8b"); break; }
                case 19: { Local.SetClanTag("m4ng0.cl8b"); break; }


           }
        }
    if(tag == 3)
            {
            switch((time) % 23)
                {
                    case 0: { Local.SetClanTag("               "); break; }
                    case 1: { Local.SetClanTag("              m"); break; }
					case 2: { Local.SetClanTag("             ma"); break; }
					case 3: { Local.SetClanTag("            man"); break; }
					case 4: { Local.SetClanTag("           mang"); break; }
                    case 5: { Local.SetClanTag("          mango"); break; }
                    case 6: { Local.SetClanTag("         mango."); break; }
					case 7: { Local.SetClanTag("        mango.c"); break; }
					case 8: { Local.SetClanTag("       mango.cl"); break; }
					case 9: { Local.SetClanTag("      mango.clu"); break; }
                    case 10: { Local.SetClanTag("    mango.club"); break; }
                    case 11: { Local.SetClanTag("   mango.club  "); break; }
					case 12: { Local.SetClanTag("  mango.club   "); break; }
					case 13: { Local.SetClanTag(" mango.club    "); break; }
					case 14: { Local.SetClanTag("mango.club     "); break; }
                    case 15: { Local.SetClanTag("ango.club      "); break; }
                    case 16: { Local.SetClanTag("ngo.club       "); break; }
					case 17: { Local.SetClanTag("go.club        "); break; }
					case 18: { Local.SetClanTag("c.club         "); break; }
					case 19: { Local.SetClanTag(".club          "); break; }
					case 20: { Local.SetClanTag("club           "); break; }
					case 21: { Local.SetClanTag("lub            "); break; }
					case 22: { Local.SetClanTag("ub             "); break; }
					case 23: { Local.SetClanTag("b              "); break; }


                }
            }
        }
        lasttime = time;
    }
    Cheat.RegisterCallback("Draw", "onRender");