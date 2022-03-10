// by encourage
// made in Russia (аче)
// update: 2.2
UI.AddDropdown( "clantag setup", [ "offclantag", "skeetfix", "fatality", "legendware", "ev0lve", "nemesis", "SyNoRy", "millionare", "onetap", "onetapanim" ] );
UI.AddSliderInt( "clantag speed", 1, 10 );
var lasttime = 0;
function onRender( )
{
    var tag = UI.GetValue( "Script Items", "clantag setup" );
    var speed = UI.GetValue( "Script Items", "clantag speed" );
    var time = parseInt((Globals.Curtime() * speed))
    if (time != lasttime)
    {
        if(tag == 0) { Local.SetClanTag(""); }
        if(tag == 1)
            {
            switch((time) % 37)
            {
            case 0: { Local.SetClanTag("               "); break; }
            case 1: { Local.SetClanTag("             ga "); break; }
            case 2: { Local.SetClanTag("            gam "); break; }
            case 3: { Local.SetClanTag("           game "); break; }
            case 4: { Local.SetClanTag("          games "); break; }
            case 5: { Local.SetClanTag("         gamese "); break; }
            case 6: { Local.SetClanTag("        gamesen "); break; }
            case 7: { Local.SetClanTag("       gamesens "); break; }
            case 8: { Local.SetClanTag("      gamesense "); break; }
            case 9: { Local.SetClanTag("      gamesense "); break; }
            case 10:{ Local.SetClanTag("      gamesense "); break; }
            case 11:{ Local.SetClanTag("      gamesense "); break; }
            case 12:{ Local.SetClanTag("      gamesense "); break; }
            case 13:{ Local.SetClanTag("     gamesense    "); break; }
            case 14:{ Local.SetClanTag("    gamesense     "); break; }
            case 15:{ Local.SetClanTag("   gamesense      "); break; }
            case 16:{ Local.SetClanTag("  gamesense       "); break; }
            case 17:{ Local.SetClanTag(" gamesense        "); break; }
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
            switch((time) % 28)
            {
                case 0: { Local.SetClanTag(" "); break; }
                case 1: { Local.SetClanTag("f "); break; }
                case 2: { Local.SetClanTag("fa "); break; }
                case 3: { Local.SetClanTag("fat "); break; }
                case 4: { Local.SetClanTag("fata "); break; }
                case 5: { Local.SetClanTag("fatal "); break; }
                case 6: { Local.SetClanTag("fatali "); break; }
                case 7: { Local.SetClanTag("fatalit "); break; }
                case 8: { Local.SetClanTag("fatality "); break; }
                case 9: { Local.SetClanTag("fatality "); break; }
                case 10:{ Local.SetClanTag("fatality"); break; }
                case 11:{ Local.SetClanTag("fatality "); break; }
                case 12:{ Local.SetClanTag("fatality "); break; }
                case 13:{ Local.SetClanTag("fatality "); break; }
                case 14:{ Local.SetClanTag("fatality "); break; }
                case 15:{ Local.SetClanTag("fatalit "); break; }
                case 16:{ Local.SetClanTag("fatali "); break; }
                case 17:{ Local.SetClanTag("fatal "); break; }
                case 18:{ Local.SetClanTag("fata "); break; }
                case 19:{ Local.SetClanTag("fat "); break; }
                case 20:{ Local.SetClanTag("fa "); break; }
                case 21:{ Local.SetClanTag("f "); break; }
                case 22:{ Local.SetClanTag(" "); break; }
 
 
 
         
            }
        }
    if(tag == 3)
            {
            switch((time) % 32)
            {
                case 0: { Local.SetClanTag(" "); break; }
                case 1: { Local.SetClanTag("V "); break; }
                case 2: { Local.SetClanTag("Va "); break; }
                case 3: { Local.SetClanTag("Val "); break; }
                case 4: { Local.SetClanTag("Valo "); break; }
                case 5: { Local.SetClanTag("Valod"); break; }
                case 6: { Local.SetClanTag("  Valody"); break; }
                case 7: { Local.SetClanTag(" Valodya "); break; }
                case 8: { Local.SetClanTag("  ValodyH   "); break; }
                case 9: { Local.SetClanTag("ValodyaHa "); break; }
                case 10:{ Local.SetClanTag("ValodyaHac"); break; }
                case 11:{ Local.SetClanTag(" ValodyaHack  "); break; }
                case 12:{ Local.SetClanTag("D "); break; }
                case 13:{ Local.SetClanTag("De "); break; }
                case 14:{ Local.SetClanTag("Des "); break; }
                case 15:{ Local.SetClanTag("Dest "); break; }
                case 16:{ Local.SetClanTag("Desti "); break; }
                case 17:{ Local.SetClanTag("Destin "); break; }
                case 18:{ Local.SetClanTag("Destiny "); break; }
                case 19:{ Local.SetClanTag("DestinyH "); break; }
                case 20:{ Local.SetClanTag("DestinyHa "); break; }
                case 21:{ Local.SetClanTag("DestinyHac "); break; }
                case 22:{ Local.SetClanTag("DestinyHack "); break; }
				case 23:{ Local.SetClanTag("HACK "); break; }
				case 24:{ Local.SetClanTag("HACK "); break; }
				case 25:{ Local.SetClanTag("HACK "); break; }
				case 26:{ Local.SetClanTag("MYSTERY LOX"); break; }
				case 27:{ Local.SetClanTag(" MYSTERYOWNED "); break; }
 
 
 
         
            }
        }
    if(tag == 4)
            {
            switch((time) % 29)
            {
                case 0: { Local.SetClanTag(" "); break; }
                case 1: { Local.SetClanTag("e "); break; }
                case 2: { Local.SetClanTag("ev "); break; }
                case 3: { Local.SetClanTag("ev0 "); break; }
                case 4: { Local.SetClanTag("ev0l "); break; }
                case 5: { Local.SetClanTag("ev0lv "); break; }
                case 6: { Local.SetClanTag("ev0lve "); break; }
                case 7: { Local.SetClanTag("ev0lve. "); break; }
                case 8: { Local.SetClanTag("ev0lve.x "); break; }
                case 9: { Local.SetClanTag("ev0lve.xy "); break; }
                case 10:{ Local.SetClanTag("ev0lve.xyz "); break; }
                case 11:{ Local.SetClanTag("ev0lve.xyz "); break; }
                case 12:{ Local.SetClanTag("ev0lve.xyz "); break; }
                case 13:{ Local.SetClanTag("ev0lve.xyz "); break; }
                case 14:{ Local.SetClanTag("ev0lve.xyz "); break; }
                case 15:{ Local.SetClanTag("ev0lve.xyz "); break; }
                case 16:{ Local.SetClanTag("ev0lve.xy "); break; }
                case 17:{ Local.SetClanTag("ev0lve.x "); break; }
                case 18:{ Local.SetClanTag("ev0lve. "); break; }
                case 19:{ Local.SetClanTag("ev0lve "); break; }
                case 20:{ Local.SetClanTag("ev0lv "); break; }
                case 21:{ Local.SetClanTag("ev0l "); break; }
                case 22:{ Local.SetClanTag("ev0l "); break; }
				case 23:{ Local.SetClanTag("ev0 "); break; }
				case 24:{ Local.SetClanTag("ev "); break; }
				case 25:{ Local.SetClanTag("e "); break; }
				case 26:{ Local.SetClanTag(" "); break; }

 
 
 
         
            }
        }
    if(tag == 5)
            {
            switch((time) % 37)
            {
                case 0: { Local.SetClanTag("nemesis "); break; }
                case 1: { Local.SetClanTag("nemesis "); break; }
                case 2: { Local.SetClanTag("n3m3sis "); break; }
                case 3: { Local.SetClanTag("n3m3sis "); break; }

 
 
 
         
            }
        }
    if(tag == 6) { Local.SetClanTag("$yηořy"); }
    if(tag == 7)
            {
            switch((time) % 35)
            {
                case 0: { Local.SetClanTag(" "); break; }
                case 1: { Local.SetClanTag("m "); break; }
                case 2: { Local.SetClanTag("mi "); break; }
                case 3: { Local.SetClanTag("mil "); break; }
                case 4: { Local.SetClanTag("mill "); break; }
                case 5: { Local.SetClanTag("milli "); break; }
                case 6: { Local.SetClanTag("millio "); break; }
                case 7: { Local.SetClanTag("million "); break; }
                case 8: { Local.SetClanTag("milliona "); break; }
                case 9: { Local.SetClanTag("millionar "); break; }
                case 10:{ Local.SetClanTag("millionare "); break; }
                case 11:{ Local.SetClanTag("millionare "); break; }
                case 12:{ Local.SetClanTag("millionare "); break; }
                case 13:{ Local.SetClanTag("millionare "); break; }
                case 14:{ Local.SetClanTag("millionare "); break; }
                case 15:{ Local.SetClanTag("millionare "); break; }
                case 16:{ Local.SetClanTag("millionar "); break; }
                case 17:{ Local.SetClanTag("milliona "); break; }
                case 18:{ Local.SetClanTag("million "); break; }
                case 19:{ Local.SetClanTag("millio "); break; }
                case 20:{ Local.SetClanTag("milli "); break; }
                case 21:{ Local.SetClanTag("mill "); break; }
                case 22:{ Local.SetClanTag("mil "); break; }
				case 23:{ Local.SetClanTag("mi "); break; }
				case 24:{ Local.SetClanTag("m "); break; }
				case 25:{ Local.SetClanTag(" "); break; }

 
 
 
         
            }
        }
    if(tag == 8) { Local.SetClanTag("onetap"); }
    if(tag == 9)
            {
            switch((time) % 35)
            {
                case 0: { Local.SetClanTag(" "); break; }
                case 1: { Local.SetClanTag("o "); break; }
                case 2: { Local.SetClanTag("0n "); break; }
                case 3: { Local.SetClanTag("on3 "); break; }
                case 4: { Local.SetClanTag("0neT "); break; }
                case 5: { Local.SetClanTag("on3ta "); break; }
                case 6: { Local.SetClanTag("0n3TaP "); break; }
                case 7: { Local.SetClanTag("onetap "); break; }
                case 8: { Local.SetClanTag("onetap. "); break; }
                case 9: { Local.SetClanTag("onetap.c "); break; }
                case 10:{ Local.SetClanTag("onetap.c0 "); break; }
                case 11:{ Local.SetClanTag("onetap.com "); break; }
                case 12:{ Local.SetClanTag("0n3TaP.c0m "); break; }
                case 13:{ Local.SetClanTag("onetap.com "); break; }
                case 14:{ Local.SetClanTag("onetap.c0 "); break; }
                case 15:{ Local.SetClanTag("onetap.c "); break; }
                case 16:{ Local.SetClanTag("onetap. "); break; }
                case 17:{ Local.SetClanTag("0n3TaP "); break; }
                case 18:{ Local.SetClanTag("on3ta"); break; }
                case 19:{ Local.SetClanTag("0neT "); break; }
                case 20:{ Local.SetClanTag("0n3 "); break; }
                case 21:{ Local.SetClanTag("one "); break; }
                case 22:{ Local.SetClanTag("0n "); break; }
				case 23:{ Local.SetClanTag("o "); break; }
				case 24:{ Local.SetClanTag("0 "); break; }
				case 25:{ Local.SetClanTag(" "); break; }

 
 
 
         
            }
        }

    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");