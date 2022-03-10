UI.AddDropdown( "Custom ClanTag", [ "Disabled", "mac1u$"] );
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
			case 1: { Local.SetClanTag(" "); break; }
			case 2: { Local.SetClanTag("d"); break; }
			case 3: { Local.SetClanTag("de"); break; }
			case 4: { Local.SetClanTag("dep"); break; }
			case 5: { Local.SetClanTag("depr"); break; }
			case 6: { Local.SetClanTag("depre"); break; }
			case 7: { Local.SetClanTag("depres"); break; }
			case 8: { Local.SetClanTag("depress"); break; }
			case 9: { Local.SetClanTag("depressi"); break; }
			case 10: { Local.SetClanTag("depressio"); break; }
			case 11: { Local.SetClanTag("depression"); break; }
			case 12: { Local.SetClanTag("depression♥"); break; }
			case 13: { Local.SetClanTag("depression"); break; }
			case 14: { Local.SetClanTag("depressio"); break; }
			case 15: { Local.SetClanTag("depressi"); break; }
			case 16: { Local.SetClanTag("depress"); break; }
			case 17: { Local.SetClanTag("depres"); break; }
			case 18: { Local.SetClanTag("depre"); break; }
			case 19: { Local.SetClanTag("depr"); break; }
			case 20: { Local.SetClanTag("dep"); break; }
			case 21: { Local.SetClanTag("de"); break; }
			case 22: { Local.SetClanTag("d"); break; }
			case 23: { Local.SetClanTag(" "); break; }
            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");