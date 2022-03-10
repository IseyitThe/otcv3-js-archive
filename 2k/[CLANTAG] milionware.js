UI.AddDropdown( "Custom ClanTag", [ "Disabled", "milionware"] );
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
			case 1: { Local.SetClanTag("$ milionware"); break; }
            case 2: { Local.SetClanTag("$ ilionware m"); break; }
            case 3: { Local.SetClanTag("$ lionware  mi"); break; }
            case 4: { Local.SetClanTag("$ ionware mil"); break; }
            case 5: { Local.SetClanTag("$ onware mili"); break; }
            case 6: { Local.SetClanTag("$ nware milio"); break; }
            case 7: { Local.SetClanTag("$ ware milion"); break; }
            case 8: { Local.SetClanTag("$ are milionw"); break; }
            case 9: { Local.SetClanTag("$ re milionwa"); break; }
            case 10: { Local.SetClanTag("$ e milionwar"); break; }
            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");