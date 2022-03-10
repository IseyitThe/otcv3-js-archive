UI.AddDropdown("Custom ClanTag", ["Disabled", "9/11", "gamesense", "neverlose", "rifk7", "aimware", "getze.us", "ev0lve"]);

var lasttime = 0;

function onRender() 
{
    var tag = UI.GetValue("Script Items", "Custom ClanTag");
    var time = Math.round(new Date().getTime())
	
    if (time != lasttime) 
	{
        if (tag == 0) 
		{
            Local.SetClanTag("");
        }

        if (tag == 1) 
		{
            switch ((parseInt((Globals.Curtime() * 1))) % 8) 
			{
                case 0: { Local.SetClanTag("____█_█"); break; }
				case 1: { Local.SetClanTag("✈___█_█"); break; }
                case 2: { Local.SetClanTag("_✈__█_█"); break; }
                case 3: { Local.SetClanTag("__✈_█_█"); break; }
                case 4: { Local.SetClanTag("___✈█_█"); break; }
                case 5: { Local.SetClanTag("_____☠_█"); break; }
                case 6: { Local.SetClanTag("____☠✈█"); break; }
				case 7: { Local.SetClanTag("____☠_☠"); break; }
            }
        }
		
		if(tag == 2)
        {
            switch ((parseInt((Globals.Curtime() * 1.1))) % 19) 
            {
                case 0: { Local.SetClanTag("           "); break; }
                case 1: { Local.SetClanTag("         ga"); break; }
                case 2: { Local.SetClanTag("        gam"); break; }
                case 3: { Local.SetClanTag("       game"); break; }
                case 4: { Local.SetClanTag("      games"); break; }
                case 5: { Local.SetClanTag("     gamese"); break; }
                case 6: { Local.SetClanTag("    gamesen"); break; }
                case 7: { Local.SetClanTag("   gamesens"); break; }
                case 8: { Local.SetClanTag(" gamesense "); break; }
                case 9: { Local.SetClanTag(" gamesense "); break; }
                case 10: { Local.SetClanTag("amesense   "); break; }
                case 11: { Local.SetClanTag("mesense    "); break; }
                case 12: { Local.SetClanTag("esense     "); break; }
                case 13: { Local.SetClanTag("sense      "); break; }
                case 14: { Local.SetClanTag("ense       "); break; }
                case 15: { Local.SetClanTag("nse        "); break; }
                case 16: { Local.SetClanTag("se         "); break; }
                case 17: { Local.SetClanTag("e          "); break; }
                case 18: { Local.SetClanTag("           "); break; }
            }
        }
		
		if(tag == 3)
        {
            switch ((parseInt((Globals.Curtime() * 2))) % 56)
            {
                case 0: { Local.SetClanTag(" | "); break; }
                case 1: { Local.SetClanTag(" |\\ "); break; }
                case 2: { Local.SetClanTag(" |\\| "); break; }
                case 3: { Local.SetClanTag(" N "); break; }
                case 4: { Local.SetClanTag(" N3 "); break; }
                case 5: { Local.SetClanTag(" Ne "); break; }
                case 6: { Local.SetClanTag(" Ne\\ "); break; }
                case 7: { Local.SetClanTag(" Ne\\/ "); break; }
                case 8: { Local.SetClanTag(" Nev "); break; }
                case 9: { Local.SetClanTag(" Nev3 "); break; }
                case 10: { Local.SetClanTag(" Neve "); break; }
                case 11: { Local.SetClanTag(" Neve| "); break; }
                case 12: { Local.SetClanTag(" Neve|2 "); break; }
                case 13: { Local.SetClanTag(" Never| "); break; }
                case 14: { Local.SetClanTag(" Never|_ "); break; }
                case 15: { Local.SetClanTag(" Neverl "); break; }
                case 16: { Local.SetClanTag(" Neverl0 "); break; }
                case 17: { Local.SetClanTag(" Neverlo "); break; }
                case 18: { Local.SetClanTag(" Neverlo5 "); break; }
                case 19: { Local.SetClanTag(" Neverlos "); break; }
                case 20: { Local.SetClanTag(" Neverlos3 "); break; }
                case 21: { Local.SetClanTag(" Neverlose "); break; }
                case 22: { Local.SetClanTag(" Neverlose. "); break; }
                case 23: { Local.SetClanTag(" Neverlose.< "); break; }
                case 24: { Local.SetClanTag(" Neverlose.c< "); break; }
                case 25: { Local.SetClanTag(" Neverlose.cc "); break; }
                case 26: { Local.SetClanTag(" Neverlose.cc "); break; }
				case 27: { Local.SetClanTag(" Neverlose.cc "); break; }
                case 28: { Local.SetClanTag(" Neverlose.cc "); break; }
                case 29: { Local.SetClanTag(" Neverlose.cc "); break; }
                case 30: { Local.SetClanTag(" Neverlose.c< "); break; }
                case 31: { Local.SetClanTag(" Neverlose.< "); break; }
                case 32: { Local.SetClanTag(" Neverlose. "); break; }
                case 33: { Local.SetClanTag(" Neverlose "); break; }
                case 34: { Local.SetClanTag(" Neverlos3 "); break; }
                case 35: { Local.SetClanTag(" Neverlos "); break; }
                case 36: { Local.SetClanTag(" Neverlo5 "); break; }
                case 37: { Local.SetClanTag(" Neverlo "); break; }
                case 38: { Local.SetClanTag(" Neverl0 "); break; }
                case 39: { Local.SetClanTag(" Neverl "); break; }
                case 40: { Local.SetClanTag(" Never|_ "); break; }
                case 41: { Local.SetClanTag(" Never| "); break; }
                case 42: { Local.SetClanTag(" Never "); break; }
                case 43: { Local.SetClanTag(" Neve|2 "); break; }
                case 44: { Local.SetClanTag(" Neve| "); break; }
                case 45: { Local.SetClanTag(" Neve "); break; }
                case 46: { Local.SetClanTag(" Nev3 "); break; }
                case 47: { Local.SetClanTag(" Nev "); break; }
                case 48: { Local.SetClanTag(" Ne\\/ "); break; }
                case 49: { Local.SetClanTag(" Ne\\ "); break; }
                case 50: { Local.SetClanTag(" Ne "); break; }
                case 51: { Local.SetClanTag(" N3 "); break; }
                case 52: { Local.SetClanTag(" N "); break; }
                case 53: { Local.SetClanTag(" |\\| "); break; }
				case 54: { Local.SetClanTag(" |\\ "); break; }
				case 55: { Local.SetClanTag(" | "); break; }
            }
        }
		
		if (tag == 4) 
		{
            switch ((parseInt((Globals.Curtime()))) % 11) 
			{
                case 0: { Local.SetClanTag("[Яifk⁷]"); break; }
				case 1: { Local.SetClanTag("[Яifk⁷]"); break; }
				case 2: { Local.SetClanTag("[Яifk⁷]"); break; }
				case 3: { Local.SetClanTag("[Яifk⁷]"); break; }
				case 4: { Local.SetClanTag("[Яi]"); break; }
				case 5: { Local.SetClanTag("[Яi]"); break; }
				case 6: { Local.SetClanTag("[Яi]"); break; }
				case 7: { Local.SetClanTag("[Яifk⁷]"); break; }
				case 8: { Local.SetClanTag("[Яifk⁷]"); break; }
				case 9: { Local.SetClanTag("[Яifk⁷]"); break; }
				case 10: { Local.SetClanTag("[Яifk⁷]"); break; }
            }
        }
		
		if (tag == 5) 
		{
            switch ((parseInt((Globals.Curtime() * 0.9))) % 14) 
			{
                case 0: { Local.SetClanTag("AIMWARE.net "); break; }
				case 1: { Local.SetClanTag("IMWARE.net A"); break; }
				case 2: { Local.SetClanTag("MWARE.net AI"); break; }
				case 3: { Local.SetClanTag("WARE.net AIM"); break; }
				case 4: { Local.SetClanTag("ARE.net AIMW"); break; }
				case 5: { Local.SetClanTag("RE.net AIMWA"); break; }
				case 6: { Local.SetClanTag("E.net AIMWAR"); break; }
				case 7: { Local.SetClanTag(".net AIMWARE"); break; }
				case 8: { Local.SetClanTag("net AIMWARE."); break; }
				case 9: { Local.SetClanTag("et AIMWARE.n"); break; }
				case 10: { Local.SetClanTag("t AIMWARE.ne"); break; }
				case 11: { Local.SetClanTag(" AIMWARE.net"); break; }
				case 12: { Local.SetClanTag("AIMWARE.net"); break; }
				case 13: { Local.SetClanTag("AIMWARE.net "); break; }
            }
        }
		
		if (tag == 6) 
		{
            switch ((parseInt((Globals.Curtime() * 0.9))) % 11) 
			{
                case 0: { Local.SetClanTag("getze.us "); break; }
				case 1: { Local.SetClanTag("etze.us g "); break; }
				case 2: { Local.SetClanTag("tze.us ge "); break; }
				case 3: { Local.SetClanTag("ze.us get "); break; }
				case 4: { Local.SetClanTag("e.us getz "); break; }
				case 5: { Local.SetClanTag(".us getze "); break; }
				case 6: { Local.SetClanTag("us getze. "); break; }
				case 7: { Local.SetClanTag("s getze.u "); break; }
				case 8: { Local.SetClanTag(" getze.us "); break; }
				case 9: { Local.SetClanTag("getze.us "); break; }
				case 10: { Local.SetClanTag("getze.us "); break; }
            }
        }
		
		if (tag == 7) 
		{
            switch ((parseInt((Globals.Curtime() + 1))) % 30) 
			{
                case 0: { Local.SetClanTag("           "); break; }
				case 1: { Local.SetClanTag("         e"); break; }
				case 2: { Local.SetClanTag("        ev"); break; }
				case 3: { Local.SetClanTag("       ev0"); break; }
				case 4: { Local.SetClanTag("      ev0l"); break; }
				case 5: { Local.SetClanTag("     ev0lv"); break; }
				case 6: { Local.SetClanTag("    ev0lve"); break; }
				case 7: { Local.SetClanTag("   ev0lve."); break; }
				case 8: { Local.SetClanTag("  ev0lve.x "); break; }
				case 9: { Local.SetClanTag(" ev0lve.xy "); break; }
				case 10: { Local.SetClanTag(" ev0lve.xyz "); break; }
				case 11: { Local.SetClanTag(" ev0lve.xyz "); break; }
				case 12: { Local.SetClanTag(" ev0lve.xyz "); break; }
				case 13: { Local.SetClanTag(" ev0lve.xyz "); break; }
				case 14: { Local.SetClanTag(" ev0lve.xyz "); break; }
				case 15: { Local.SetClanTag(" ev0lve.xyz "); break; }
				case 16: { Local.SetClanTag(" ev0lve.xyz "); break; }
				case 17: { Local.SetClanTag(" ev0lve.xyz "); break; }
				case 18: { Local.SetClanTag(" ev0lve.xyz "); break; }
				case 19: { Local.SetClanTag(" ev0lve.xyz "); break; }
				case 20: { Local.SetClanTag(" ev0lve.xyz "); break; }
				case 21: { Local.SetClanTag(" v0lve.xyz "); break; }
				case 22: { Local.SetClanTag(" 0lve.xyz "); break; }
				case 23: { Local.SetClanTag(" lve.xyz "); break; }
				case 24: { Local.SetClanTag("ve.xyz   "); break; }
				case 25: { Local.SetClanTag("e.xyz    "); break; }
				case 26: { Local.SetClanTag(".xyz     "); break; }
				case 27: { Local.SetClanTag("xyz      "); break; }
				case 28: { Local.SetClanTag("yz       "); break; }
				case 29: { Local.SetClanTag("z        "); break; }
            }
        }
    }
	
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");