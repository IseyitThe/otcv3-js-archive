UI.AddDropdown( "Custom ClanTag", [ "Disabled", "pphud"] );
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
            switch((time) % 23)
            {	
            case 1: { Local.SetClanTag("P/             "); break; }
            case 2: { Local.SetClanTag("PP/            "); break; }
            case 3: { Local.SetClanTag("PPH/           "); break; }
            case 4: { Local.SetClanTag("PPHU/          "); break; }
            case 5: { Local.SetClanTag("PPHUD/         "); break; }
            case 6: { Local.SetClanTag("PPHUD /        "); break; }
            case 7: { Local.SetClanTag("PPHUD F/       "); break; }
            case 8: { Local.SetClanTag("PPHUD Fr/      "); break; }
            case 8: { Local.SetClanTag("PPHUD Fre/     "); break; }
            case 8: { Local.SetClanTag("PPHUD Free/    "); break; }
            case 8: { Local.SetClanTag("PPHUD Free /   "); break; }
            case 9: { Local.SetClanTag("PPHUD Free     "); break; }
            case 10:{ Local.SetClanTag("PPHUD Free \   "); break; }
            case 11:{ Local.SetClanTag("PPHUD Free\    "); break; }
            case 12:{ Local.SetClanTag("PPHUD Fre\     "); break; }
            case 13:{ Local.SetClanTag("PPHUD Fr\      "); break; }
            case 14:{ Local.SetClanTag("PPHUD F\       "); break; }
            case 15:{ Local.SetClanTag("PPHUD \        "); break; }
            case 16:{ Local.SetClanTag("PPHUD\         "); break; }
            case 17:{ Local.SetClanTag("PPHU\          "); break; }
            case 18:{ Local.SetClanTag("PPH\           "); break; }
            case 19:{ Local.SetClanTag("PP\            "); break; }
			case 20:{ Local.SetClanTag("P\             "); break; }
			case 21:{ Local.SetClanTag("\              "); break; }
			case 22:{ Local.SetClanTag("              "); break; }
            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");