UI.AddDropdown( "Custom ClanTag", [ "Disabled", "nemesis", "pphud FREE", "twin towers"] );
var lasttime = 0;
function onRender( )
{
    var tag = UI.GetValue( "Script Items", "Custom ClanTag" );
    var time = parseInt((Globals.Curtime() * 3))
    if (time != lasttime)
    {
        if(tag == 0) { Local.SetClanTag(""); }
        if(tag == 1)
            {
            switch((time) % 11 )
            {

            case 1: { Local.SetClanTag("n3m3sis "); break; }
            case 2: { Local.SetClanTag("n3m3sis "); break; }
            case 3: { Local.SetClanTag("nemesis "); break; }
            case 4: { Local.SetClanTag("nemesis "); break; }
            case 5: { Local.SetClanTag("n3m3sis "); break; }
            case 6: { Local.SetClanTag("n3m3sis "); break; }
            case 7: { Local.SetClanTag("nemesis "); break; }
            case 8: { Local.SetClanTag("nemesis "); break; }
            case 9: { Local.SetClanTag("n3m3sis "); break; }
            case 10:{ Local.SetClanTag("n3m3sis "); break; }
			case 11:{ Local.SetClanTag("nemesis"); break; }
            case 12:{ Local.SetClanTag("nemesis"); break; }
            case 13:{ Local.SetClanTag("n3m3sis"); break; }
            case 14:{ Local.SetClanTag("n3m3sis"); break; }
            case 15:{ Local.SetClanTag("nemesis"); break; }
            case 16:{ Local.SetClanTag("nemesis"); break; }
            case 17:{ Local.SetClanTag("n3m3sis"); break; }
            case 18:{ Local.SetClanTag("n3m3sis"); break; }
			case 19:{ Local.SetClanTag("nemesis؜ "); break; }
			case 20:{ Local.SetClanTag("nemesis؜ "); break; }




            }
        }
    if(tag == 2)
            {
            switch((time) % 22)
            {
                case 0: { Local.SetClanTag("             "); break; }
                case 1: { Local.SetClanTag("p/           "); break; }
                case 2: { Local.SetClanTag("pp/          "); break; }
                case 3: { Local.SetClanTag("pph/         "); break; }
                case 4: { Local.SetClanTag("pphu/        "); break; }
                case 5: { Local.SetClanTag("pphud /      "); break; }
                case 6: { Local.SetClanTag("pphud F/     "); break; }
                case 7: { Local.SetClanTag("pphud FR/    "); break; }
                case 8: { Local.SetClanTag("pphud FRE/   "); break; }
                case 9: { Local.SetClanTag("pphud FREE   "); break; }
                case 10:{ Local.SetClanTag("pphud FREE   "); break; }
                case 11:{ Local.SetClanTag("pphud FREE   "); break; }
                case 12:{ Local.SetClanTag("pphud FRE\   "); break; }
                case 13:{ Local.SetClanTag("pphud FR\    "); break; }
                case 14:{ Local.SetClanTag("pphud F\     "); break; }
                case 15:{ Local.SetClanTag("pphud \      "); break; }
                case 16:{ Local.SetClanTag("pphu\        "); break; }
                case 17:{ Local.SetClanTag("pph\         "); break; }
                case 18:{ Local.SetClanTag("pp\          "); break; }
		        case 19:{ Local.SetClanTag("p\           "); break; }
		        case 20:{ Local.SetClanTag("\            "); break; }
		        case 21:{ Local.SetClanTag("             "); break; }




           
            }
        }
    
      if(tag == 3)
            {
            switch((time) % 5)
            {
                case 0: { Local.SetClanTag("✈__▮_▮ "); break; }
                case 1: { Local.SetClanTag("_✈_▮_▮ "); break; }
                case 2: { Local.SetClanTag("__✈▮_▮ "); break; }
                case 3: { Local.SetClanTag("___☠✈▮ "); break; }
                case 4: { Local.SetClanTag("___☠_☠ "); break; }

            }
         }
	

	
	}
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");