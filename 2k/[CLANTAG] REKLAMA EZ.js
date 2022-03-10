UI.AddDropdown( "Custom ClanTag", [ "Disabled", "gamesense"] );
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
            switch((time) % 29)
            {
			case 1: { Local.SetClanTag("$"); break; }
			case 2: { Local.SetClanTag("<"); break; }
			case 3: { Local.SetClanTag(">"); break; }
			case 4: { Local.SetClanTag("M"); break; }
			case 5: { Local.SetClanTag("M$"); break; }
			case 6: { Local.SetClanTag("M<"); break; }
			case 7: { Local.SetClanTag("M>"); break; }
			case 8: { Local.SetClanTag("Ma"); break; }
			case 9: { Local.SetClanTag("Ma$"); break; }
			case 10: { Local.SetClanTag("Ma<"); break; }
			case 11: { Local.SetClanTag("Ma>"); break; }
			case 12: { Local.SetClanTag("Mac"); break; }
			case 13: { Local.SetClanTag("Mac$"); break; }
			case 14: { Local.SetClanTag("Mac<"); break; }
			case 15: { Local.SetClanTag("Mac>"); break; }
			case 16: { Local.SetClanTag("Maci"); break; }
			case 17: { Local.SetClanTag("Maci$"); break; }
			case 18: { Local.SetClanTag("Maci<"); break; }
			case 19: { Local.SetClanTag("Maci>"); break; }
			case 20: { Local.SetClanTag("Maciu"); break; }
			case 21: { Local.SetClanTag("Maciu$"); break; }
			case 22: { Local.SetClanTag("Maciu<"); break; }
			case 23: { Local.SetClanTag("Maciu>"); break; }
			case 24: { Local.SetClanTag("Macius"); break; }
			case 25: { Local.SetClanTag("Macius$"); break; }
			case 26: { Local.SetClanTag("Macius<"); break; }
			case 27: { Local.SetClanTag("Macius>"); break; }
			case 28: { Local.SetClanTag("Macius♥"); break; }
			case 29: { Local.SetClanTag("Macius$"); break; }
			case 30: { Local.SetClanTag("Maciu$$"); break; }
			case 31: { Local.SetClanTag("Maci$$$"); break; }
			case 32: { Local.SetClanTag("Mac$$$$"); break; }
			case 33: { Local.SetClanTag("Ma$$$$$"); break; }
			case 34: { Local.SetClanTag("M$$$$$"); break; }
			case 35: { Local.SetClanTag("$$$$$$"); break; }
			case 36: { Local.SetClanTag("                  "); break; }
            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");