UI.AddDropdown( "Custom ClanTag", [ "Disabled", "best"] );
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
            switch((time) % 56)
            {
                case 1: { Local.SetClanTag(" "); break; }
                case 2: { Local.SetClanTag(" n"); break; }
                case 3: { Local.SetClanTag(" ne"); break; }
                case 4: { Local.SetClanTag(" Ne"); break; }
                case 5: { Local.SetClanTag(" New"); break; }
                case 6: { Local.SetClanTag(" Newo"); break; }
                case 7: { Local.SetClanTag(" Newo"); break; }
                case 8: { Local.SetClanTag(" Newon"); break; }
                case 9: { Local.SetClanTag(" NewOne"); break; }
                case 10: { Local.SetClanTag(" NewOnes"); break; }
                case 11: { Local.SetClanTag(" Newones"); break; }
                case 12: { Local.SetClanTag(" NewOnes"); break; }
                case 13: { Local.SetClanTag(" Newones"); break; }
                case 14: { Local.SetClanTag(" NewOnes"); break; }
                case 15: { Local.SetClanTag(" N3wOnes"); break; }
                case 16: { Local.SetClanTag(" NewOnes"); break; }
                case 17: { Local.SetClanTag(" NewOnes"); break; }
                case 18: { Local.SetClanTag(" NewOnes"); break; }
                case 19: { Local.SetClanTag(" New0nes"); break; }
                case 20: { Local.SetClanTag(" NewOnes"); break; }
                case 21: { Local.SetClanTag(" NewOnes<"); break; }
                case 22: { Local.SetClanTag(" NewOn<"); break; }
                case 23: { Local.SetClanTag(" NewO<"); break; }
                case 24: { Local.SetClanTag(" New<"); break; }
                case 25: { Local.SetClanTag(" New<"); break; }
                case 26: { Local.SetClanTag(" Ne<"); break; }
                case 27: { Local.SetClanTag(" ne<"); break; }
                case 28: { Local.SetClanTag(" n<"); break; }
                case 29: { Local.SetClanTag(" <"); break; }
                case 30: { Local.SetClanTag(" >"); break; }
                case 31: { Local.SetClanTag(" >"); break; }
                case 32: { Local.SetClanTag(" >"); break; }

            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");