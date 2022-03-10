UI.AddDropdown( "Custom ClanTag", [ "Disabled", "GaySense", "Neverlose", "Skeet.cc", "AIMWARE.net", "fatality.win", "GaySex", "chlen"] );
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
            switch((time) % 20)
            {
                case 1:  { Local.SetClanTag("  "); break; }
                case 2:  { Local.SetClanTag(" g "); break; }
                case 3:  { Local.SetClanTag(" ga "); break; }
                case 4:  { Local.SetClanTag(" gay "); break; }
                case 5:  { Local.SetClanTag(" gays "); break; }
                case 6:  { Local.SetClanTag(" gayse "); break; }
                case 7:  { Local.SetClanTag(" gaysen "); break; }
                case 8:  { Local.SetClanTag(" gaysens "); break; }
                case 9:  { Local.SetClanTag(" gaysense "); break; }
                case 10: { Local.SetClanTag(" gaysense "); break; }
                case 11: { Local.SetClanTag(" gaysense "); break; }
                case 12: { Local.SetClanTag(" gaysens "); break; }
                case 13: { Local.SetClanTag(" gaysen "); break; }
                case 14: { Local.SetClanTag(" gayse "); break; }
                case 15: { Local.SetClanTag(" gays "); break; }
                case 16: { Local.SetClanTag(" gay "); break; }
                case 17: { Local.SetClanTag(" ga "); break; }
                case 18: { Local.SetClanTag(" g "); break; }
                case 19: { Local.SetClanTag("  "); break; }
                case 20: { Local.SetClanTag("  "); break; }
            }
        }
        if(tag == 2)
            {
            switch((time) % 53)
            {
                case 1:  { Local.SetClanTag("  "); break; }
                case 2:  { Local.SetClanTag(" | "); break; }
                case 3:  { Local.SetClanTag(" |\\ "); break; }
                case 4:  { Local.SetClanTag(" |\\| "); break; }
                case 5:  { Local.SetClanTag(" N "); break; }
                case 6:  { Local.SetClanTag(" N3 "); break; }
                case 7:  { Local.SetClanTag(" Ne "); break; }
                case 8:  { Local.SetClanTag(" Ne\\ "); break; }
                case 9:  { Local.SetClanTag(" Ne\\/ "); break; }
                case 10: { Local.SetClanTag(" Nev "); break; }
                case 11: { Local.SetClanTag(" Nev3 "); break; }
                case 12: { Local.SetClanTag(" Neve "); break; }
                case 13: { Local.SetClanTag(" Neve| "); break; }
                case 14: { Local.SetClanTag(" Neve|2 "); break; }
                case 15: { Local.SetClanTag(" Never|_ "); break; }
                case 16: { Local.SetClanTag(" Neverl "); break; }
                case 17: { Local.SetClanTag(" Neverl0 "); break; }
                case 18: { Local.SetClanTag(" Neverlo "); break; }
                case 19: { Local.SetClanTag(" Neverlo5 "); break; }
                case 20: { Local.SetClanTag(" Neverlos "); break; }
                case 21: { Local.SetClanTag(" Neverlos3 "); break; }
                case 22: { Local.SetClanTag(" Neverlose "); break; }
                case 23: { Local.SetClanTag(" Neverlose. "); break; }
                case 24: { Local.SetClanTag(" Neverlose.< "); break; }
                case 25: { Local.SetClanTag(" Neverlose.c< "); break; }
                case 26: { Local.SetClanTag(" Neverlose.cc "); break; }
                case 27: { Local.SetClanTag(" Neverlose.cc "); break; }
                case 28: { Local.SetClanTag(" Neverlose.c< "); break; }
                case 29: { Local.SetClanTag(" Neverlose.< "); break; }
                case 30: { Local.SetClanTag(" Neverlose. "); break; }
                case 31: { Local.SetClanTag(" Neverlose "); break; }
                case 32: { Local.SetClanTag(" Neverlos3 "); break; }
                case 33: { Local.SetClanTag(" Neverlos "); break; }
                case 34: { Local.SetClanTag(" Neverlo5 "); break; }
                case 35: { Local.SetClanTag(" Neverlo "); break; }
                case 36: { Local.SetClanTag(" Neverl0 "); break; }
                case 37: { Local.SetClanTag(" Neverl "); break; }
                case 38: { Local.SetClanTag(" Never|_ "); break; }
                case 39: { Local.SetClanTag(" Never|2 "); break; }
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
        if(tag == 3)
            {
            switch((time) % 20)
            {
                case 1:  { Local.SetClanTag("  "); break; }
                case 2:  { Local.SetClanTag(" S "); break; }
                case 3:  { Local.SetClanTag(" Sk "); break; }
                case 4:  { Local.SetClanTag(" Ske "); break; }
                case 5:  { Local.SetClanTag(" Skee "); break; }
                case 6:  { Local.SetClanTag(" Skeet "); break; }
                case 7:  { Local.SetClanTag(" Skeet. "); break; }
                case 8:  { Local.SetClanTag(" Skeet.c "); break; }
                case 9:  { Local.SetClanTag(" Skeet.cc "); break; }
                case 10: { Local.SetClanTag(" Skeet.cc "); break; }
                case 11: { Local.SetClanTag(" Skeet.cc "); break; }
                case 12: { Local.SetClanTag(" Skeet.c "); break; }
                case 13: { Local.SetClanTag(" Skeet. "); break; }
                case 14: { Local.SetClanTag(" Skeet "); break; }
                case 15: { Local.SetClanTag(" Skee "); break; }
                case 16: { Local.SetClanTag(" Ske "); break; }
                case 17: { Local.SetClanTag(" Sk "); break; }
                case 18: { Local.SetClanTag(" S "); break; }
                case 19: { Local.SetClanTag("  "); break; }
                case 20: { Local.SetClanTag("  "); break; }
            }
        }
        if(tag == 4)
            {
            switch((time) % 14)
            {
                case 1:  { Local.SetClanTag(" AIMWARE.net "); break; }
                case 2:  { Local.SetClanTag(" AIMWARE.net "); break; }
                case 3:  { Local.SetClanTag(" AIMWARE.net "); break; }
                case 4:  { Local.SetClanTag(" IMWARE.net  "); break; }
                case 5:  { Local.SetClanTag(" MWARE.net A "); break; }
                case 6:  { Local.SetClanTag(" WARE.net AI "); break; }
                case 7:  { Local.SetClanTag(" ARE.net AIM "); break; }
                case 8:  { Local.SetClanTag(" RE.net AIMW "); break; }
                case 9:  { Local.SetClanTag(" E.net AIMWA "); break; }
                case 10: { Local.SetClanTag(" .net AIMWAR "); break; }
                case 11: { Local.SetClanTag(" net AIMWARE "); break; }
                case 12: { Local.SetClanTag(" et AIMWARE. "); break; }
                case 13: { Local.SetClanTag(" t AIMWARE.n "); break; }
                case 14: { Local.SetClanTag("  AIMWARE.ne "); break; }
            }
        }
        if(tag == 5)
            {
            switch((time) % 27)
            {
                case 1:  { Local.SetClanTag("            "); break; }
                case 2:  { Local.SetClanTag("           f"); break; }
                case 3:  { Local.SetClanTag("          fa"); break; }
                case 4:  { Local.SetClanTag("         fat"); break; }
                case 5:  { Local.SetClanTag("        fata"); break; }
                case 6:  { Local.SetClanTag("       fatal"); break; }
                case 7:  { Local.SetClanTag("      fatali"); break; }
                case 8:  { Local.SetClanTag("     fatalit"); break; }
                case 9:  { Local.SetClanTag("    fatality"); break; }
                case 10: { Local.SetClanTag("   fatality."); break; }
                case 11: { Local.SetClanTag("  fatality.w"); break; }
                case 12: { Local.SetClanTag(" fatality.wi"); break; }
                case 13: { Local.SetClanTag("fatality.win"); break; }
                case 14: { Local.SetClanTag("fatality.win"); break; }
                case 15: { Local.SetClanTag("fatality.win"); break; }
                case 16: { Local.SetClanTag(" fatality.wi"); break; }
                case 17: { Local.SetClanTag("  fatality.w"); break; }
                case 18: { Local.SetClanTag("   fatality."); break; }
                case 19: { Local.SetClanTag("    fatality"); break; }
                case 20: { Local.SetClanTag("     fatalit"); break; }
                case 21: { Local.SetClanTag("      fatali"); break; }
                case 22: { Local.SetClanTag("       fatal"); break; }
                case 23: { Local.SetClanTag("        fata"); break; }
                case 24: { Local.SetClanTag("         fat"); break; }
                case 25: { Local.SetClanTag("          fa"); break; }
                case 26: { Local.SetClanTag("           f"); break; }
                case 27: { Local.SetClanTag("            "); break; }
            }
        }
        if(tag == 6)
            {
            switch((time) % 16)
            {
                case 1:  { Local.SetClanTag("  "); break; }
                case 2:  { Local.SetClanTag(" G "); break; }
                case 3:  { Local.SetClanTag(" Ga "); break; }
                case 4:  { Local.SetClanTag(" Gay "); break; }
                case 5:  { Local.SetClanTag(" Gays "); break; }
                case 6:  { Local.SetClanTag(" Gayse "); break; }
                case 7:  { Local.SetClanTag(" Gaysex "); break; }
                case 8:  { Local.SetClanTag(" Gaysex "); break; }
                case 9:  { Local.SetClanTag(" Gaysex "); break; }
                case 10: { Local.SetClanTag(" Gayse "); break; }
                case 11: { Local.SetClanTag(" Gays "); break; }
                case 12: { Local.SetClanTag(" Gay "); break; }
                case 13: { Local.SetClanTag(" Ga "); break; }
                case 14: { Local.SetClanTag(" G "); break; }
                case 15: { Local.SetClanTag("  "); break; }
                case 16: { Local.SetClanTag("  "); break; }
            }
        }
        if(tag == 7)
            {
            switch((time) % 30)
            {
                case 1:  { Local.SetClanTag("  "); break; }
                case 2:  { Local.SetClanTag(" c "); break; }
                case 3:  { Local.SetClanTag(" ch "); break; }
                case 4:  { Local.SetClanTag(" chl "); break; }
                case 5:  { Local.SetClanTag(" chle "); break; }
                case 6:  { Local.SetClanTag(" chlen "); break; }
                case 7:  { Local.SetClanTag(" chlenv "); break; }
                case 8:  { Local.SetClanTag(" chlenvo "); break; }
                case 9:  { Local.SetClanTag(" chlenvor "); break; }
                case 10: { Local.SetClanTag(" chlenvort "); break; }
                case 11: { Local.SetClanTag(" chlenvortu "); break; }
                case 12: { Local.SetClanTag(" chlenvortu. "); break; }
                case 13: { Local.SetClanTag(" chlenvortu.c "); break; }
                case 14: { Local.SetClanTag(" chlenvortu.cc "); break; }
                case 15: { Local.SetClanTag(" chlenvortu.cc "); break; }
                case 16: { Local.SetClanTag(" chlenvortu.cc "); break; }
                case 17: { Local.SetClanTag(" chlenvortu.c "); break; }
                case 18: { Local.SetClanTag(" chlenvortu. "); break; }
                case 19: { Local.SetClanTag(" chlenvortu "); break; }
                case 20: { Local.SetClanTag(" chlenvort "); break; }
                case 21: { Local.SetClanTag(" chlenvor "); break; }
                case 22: { Local.SetClanTag(" chlenvo "); break; }
                case 23: { Local.SetClanTag(" chlenv "); break; }
                case 24: { Local.SetClanTag(" chlen "); break; }
                case 25: { Local.SetClanTag(" chle "); break; }
                case 26: { Local.SetClanTag(" chl "); break; }
                case 27: { Local.SetClanTag(" ch "); break; }
                case 28: { Local.SetClanTag(" c "); break; }
                case 29: { Local.SetClanTag("  "); break; }
                case 30: { Local.SetClanTag("  "); break; }

            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");