//Credit to elleqt for code used in this script https://onetap.su/members/elleqt.6418/
UI.AddSliderInt("                     Clantag", 0, 0);
UI.AddDropdown("ClanTag", ["Disabled", "Custom Sweep", "GS", "Custom Paste Sweep", "ZuhnWare"]);
UI.AddSliderInt("ClanTag Speed", 1, 20);
UI.AddTextbox("Custom Clantag")
var lasttime = 0;

function onRender()
{
    var tag = UI.GetValue("Script Items", "ClanTag");
    var speed = UI.GetValue("Script Items", "ClanTag Speed");
    var custom = UI.GetValue("Script Items", "Custom Clantag");
    var time = parseInt((Globals.Curtime() * speed))
    var gtime = parseInt((Globals.Curtime() * 2));
    if (time != lasttime)
    {
        if (tag == 0)
        {
            return
        }
        if (tag == 1)
        {
            switch ((time) % 25)
            {
                case 0:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(0));
                    break;
                }
                case 1:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(1));
                    break;
                }
                case 2:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(2));
                    break;
                }
                case 3:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(3));
                    break;
                }
                case 4:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(4));
                    break;
                }
                case 5:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(5));
                    break;
                }
                case 6:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(6));
                    break;
                }
                case 7:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(7));
                    break;
                }
                case 8:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(8));
                    break;
                }
                case 9:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(9));
                    break;
                }
                case 10:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(10));
                    break;
                }
                case 11:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(11));
                    break;
                }
                case 12:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(12));
                    break;
                }
                case 13:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(11));
                    break;
                }
                case 14:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(10));
                    break;
                }
                case 15:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(9));
                    break;
                }
                case 16:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(8));
                    break;
                }
                case 17:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(7));
                    break;
                }
                case 18:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(6));
                    break;
                }
                case 19:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(5));
                    break;
                }
                case 20:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(4));
                    break;
                }
                case 21:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(3));
                    break;
                }
                case 22:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(2));
                    break;
                }
                case 23:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(1));
                    break;
                }
                case 24:
                {
                    Local.SetClanTag(UI.GetString("Script Items", "Custom Clantag").substring(0));
                    break;
                }

            }
        }
        if (tag == 2)
        {
            switch ((gtime) % 20)
            {
                case 0:
                {
                    Local.SetClanTag("gamesense");
                    break;
                }
                case 1:
                {
                    Local.SetClanTag("amesense");
                    break;
                }
                case 2:
                {
                    Local.SetClanTag("mesense");
                    break;
                }
                case 3:
                {
                    Local.SetClanTag("esense");
                    break;
                }
                case 4:
                {
                    Local.SetClanTag("sense");
                    break;
                }
                case 5:
                {
                    Local.SetClanTag("ense");
                    break;
                }
                case 6:
                {
                    Local.SetClanTag("nse");
                    break;
                }
                case 7:
                {
                    Local.SetClanTag("se");
                    break;
                }
                case 8:
                {
                    Local.SetClanTag("e");
                    break;
                }
                case 9:
                {
                    Local.SetClanTag("");
                    break;
                }
                case 10:
                {
                    Local.SetClanTag("");
                    break;
                }
                case 11:
                {
                    Local.SetClanTag("g");
                    break;
                }
                case 12:
                {
                    Local.SetClanTag("ga");
                    break;
                }
                case 13:
                {
                    Local.SetClanTag("gam");
                    break;
                }
                case 14:
                {
                    Local.SetClanTag("game");
                    break;
                }
                case 15:
                {
                    Local.SetClanTag("games");
                    break;
                }
                case 16:
                {
                    Local.SetClanTag("gamese");
                    break;
                }
                case 17:
                {
                    Local.SetClanTag("gamesen");
                    break;
                }
                case 18:
                {
                    Local.SetClanTag("gamesens");
                    break;
                }
                case 19:
                {
                    Local.SetClanTag("gamesense");
                    break;
                }
            }
        }
    }
    lasttime = time;
}

Cheat.RegisterCallback("Draw", "onRender");