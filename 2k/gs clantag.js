UI.AddDropdown( "Custom ClanTag", [ "Disabled", "gamesense", "onetap.su"] );
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
            switch((time) % 26)
            {
            case 0: { Local.SetClanTag("                  "); break; }
            case 1: { Local.SetClanTag("                ga"); break; }
            case 2: { Local.SetClanTag("               gam"); break; }
            case 3: { Local.SetClanTag("              game"); break; }
            case 4: { Local.SetClanTag("             games"); break; }
            case 5: { Local.SetClanTag("            gamese"); break; }
            case 6: { Local.SetClanTag("           gamesen"); break; }
            case 7: { Local.SetClanTag("          gamesens"); break; }
            case 8: { Local.SetClanTag("         gamesense"); break; }
            case 9: { Local.SetClanTag("        gamesense "); break; }
            case 10:{ Local.SetClanTag("       gamesense  "); break; }
            case 11:{ Local.SetClanTag("      gamesense   "); break; }
            case 12:{ Local.SetClanTag("     gamesense    "); break; }
            case 13:{ Local.SetClanTag("    gamesense     "); break; }
            case 14:{ Local.SetClanTag("   gamesense      "); break; }
            case 15:{ Local.SetClanTag("  gamesense       "); break; }
            case 16:{ Local.SetClanTag(" gamesense        "); break; }
            case 17:{ Local.SetClanTag("gamesense         "); break; }
            case 18:{ Local.SetClanTag("amesense          "); break; }
            case 19:{ Local.SetClanTag("mesense           "); break; }
            case 20:{ Local.SetClanTag("esense            "); break; }
            case 21:{ Local.SetClanTag("sense             "); break; }
            case 22:{ Local.SetClanTag("ense              "); break; }
            case 23:{ Local.SetClanTag("nse               "); break; }
            case 24:{ Local.SetClanTag("se                "); break; }
            case 25:{ Local.SetClanTag("e                 "); break; }
            case 26:{ Local.SetClanTag("                  "); break; }

            }
        }
    if(tag == 2)
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