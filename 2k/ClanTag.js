//hey, ty elleq for base, @kPa#0001 in discord
UI.AddSliderInt("                     Clantag", 0, 0);
UI.AddDropdown("ClanTag", ["Disabled", "Custom Sweep", "GS", "Custom Paste Sweep", "Fatality.win", "Crack7", "smokeware" ]);
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
        if (tag == 3)
        {
            switch ((time) % 18	)
            {
                case 0:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(0));
                    break;
                }
                case 1:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(1));
                    break;
                }
                case 2:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(2));
                    break;
                }
                case 3:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(3));
                    break;
                }
                case 4:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(4));
                    break;
                }
                case 5:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(5));
                    break;
                }
                case 6:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(6));
                    break;
                }
                case 7:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(7));
                    break;
                }
                case 8:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(8));
                    break;
                }
                case 9:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(9));
                    break;
                }
                case 10:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(10));
                    break;
                }
                case 11:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(11));
                    break;
                }
                case 12:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(12));
                    break;
                }
                case 13:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(11));
                    break;
                }
                case 14:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(10));
                    break;
                }
                case 15:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(9));
                    break;
                }
                case 16:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(8));
                    break;
                }
                case 17:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(7));
                    break;
                }
                case 18:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(6));
                    break;
                }
                case 19:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(5));
                    break;
                }
                case 20:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(4));
                    break;
                }
                case 21:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(3));
                    break;
                }
                case 22:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(2));
                    break;
                }
                case 23:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(1));
                    break;
                }
                case 24:
                {
                    Local.SetClanTag("$ " + UI.GetString("Script Items", "Custom Clantag").substring(0));
                    break;
                }

            }
        }
        if (tag == 4)
            switch ((time) % 31)
            {
                case 0:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
                case 1:
                {
                    Local.SetClanTag("Fatality.wi");
                    break;
                }
                case 2:
                {
                    Local.SetClanTag("Fatality.w");
                    break;
                }
                case 3:
                {
                    Local.SetClanTag("Fatality.");
                    break;
                }
                case 4:
                {
                    Local.SetClanTag("Fatality");
                    break;
                }
                case 5:
                {
                    Local.SetClanTag("Fatalit");
                    break;
                }
                case 6:
                {
                    Local.SetClanTag("Fatali");
                    break;
                }
                case 7:
                {
                    Local.SetClanTag("Fatal");
                    break;
                }
                case 8:
                {
                    Local.SetClanTag("Fata");
                    break;
                }
                case 9:
                {
                    Local.SetClanTag("Fat");
                    break;
                }
                case 10:
                {
                    Local.SetClanTag("Fa");
                    break;
                }
                case 11:
                {
                    Local.SetClanTag("F");
                    break;
                }
                case 12:
                {
                    Local.SetClanTag("");
                    break;
                }
                case 13:
                {
                    Local.SetClanTag("");
                    break;
                }
                case 14:
                {
                    Local.SetClanTag("F");
                    break;
                }
                case 15:
                {
                    Local.SetClanTag("Fa");
                    break;
                }
                case 16:
                {
                    Local.SetClanTag("Fat");
                    break;
                }
                case 17:
                {
                    Local.SetClanTag("Fata");
                    break;
                }
				case 18:
                {
                    Local.SetClanTag("Fatal");
                    break;
                }
				case 19:
                {
                    Local.SetClanTag("Fatali");
                    break;
                }
				case 20:
                {
                    Local.SetClanTag("Fatalit");
                    break;
                }
				case 21:
                {
                    Local.SetClanTag("Fatality");
                    break;
                }
				case 22:
                {
                    Local.SetClanTag("Fatality.");
                    break;
                }
				case 23:
                {
                    Local.SetClanTag("Fatality.w");
                    break;
                }
				case 24:
                {
                    Local.SetClanTag("Fatality.wi");
                    break;
                }
				case 25:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
				case 26:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
				case 27:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
				case 28:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
				case 29:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
				case 30:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
				case 31:
                {
                    Local.SetClanTag("Fatality.win");
                    break;
                }
            }
		if (tag == 5)
            switch ((time) % 27)
            {
                case 0:
                {
                    Local.SetClanTag("[]");
                    break;
                }
                case 1:
                {
                    Local.SetClanTag("[C]");
                    break;
                }
                case 2:
                {
                    Local.SetClanTag("[C]");
                    break;
                }
                case 3:
                {
                    Local.SetClanTag("[Cr");
                    break;
                }
                case 4:
                {
                    Local.SetClanTag("[Cr]");
                    break;
                }
                case 5:
                {
                    Local.SetClanTag("[Cra]");
                    break;
                }
                case 6:
                {
                    Local.SetClanTag("[Cra]");
                    break;
                }
                case 7:
                {
                    Local.SetClanTag("[Crac]");
                    break;
                }
                case 8:
                {
                    Local.SetClanTag("[Crac]");
                    break;
                }
                case 9:
                {
                    Local.SetClanTag("[Crack]");
                    break;
                }
                case 10:
                {
                    Local.SetClanTag("[Crack]");
                    break;
                }
                case 11:
                {
                    Local.SetClanTag("[Crack7]");
                    break;
                }
                case 12:
                {
                    Local.SetClanTag("[Crack7]");
                    break;
                }
                case 13:
                {
                    Local.SetClanTag("[Crack7]");
                    break;
                }
				case 14:
                {
                    Local.SetClanTag("[Crack]");
                    break;
                }
                case 15:
                {
                    Local.SetClanTag("[Crack]");
                    break;
                }
                case 16:
                {
                    Local.SetClanTag("[Crac]");
                    break;
                }
                case 17:
                {
                    Local.SetClanTag("[Crac]");
                    break;
                }
				case 18:
                {
                    Local.SetClanTag("[Cra]");
                    break;
                }
				case 19:
                {
                    Local.SetClanTag("[Cra]");
                    break;
                }
				case 20:
                {
                    Local.SetClanTag("[Cr]");
                    break;
                }
				case 21:
                {
                    Local.SetClanTag("[Cr]");
                    break;
                }
				case 22:
                {
                    Local.SetClanTag("[C]");
                    break;
                }
				case 23:
                {
                    Local.SetClanTag("[C]");
                    break;
                }
				case 24:
                {
                    Local.SetClanTag("[]");
                    break;
                }
				case 25:
                {
                    Local.SetClanTag("[]");
                    break;
                }
				case 26:
                {
                    Local.SetClanTag("[]");
                    break;
                }
			}
		if (tag == 6)
            switch ((time) % 31)
            {
                case 0:
                {
                    Local.SetClanTag("sub to smoke");
                    break;
                }
                case 1:
                {
                    Local.SetClanTag("ub to smoke");
                    break;
                }
                case 2:
                {
                    Local.SetClanTag("b to smoke");
                    break;
                }
                case 3:
                {
                    Local.SetClanTag(" to smoke");
                    break;
                }
                case 4:
                {
                    Local.SetClanTag("to smoke");
                    break;
                }
                case 5:
                {
                    Local.SetClanTag("o smoke");
                    break;
                }
                case 6:
                {
                    Local.SetClanTag(" smoke");
                    break;
                }
                case 7:
                {
                    Local.SetClanTag("smoke");
                    break;
                }
                case 8:
                {
                    Local.SetClanTag("moke");
                    break;
                }
                case 9:
                {
                    Local.SetClanTag("oke");
                    break;
                }
                case 10:
                {
                    Local.SetClanTag("ke");
                    break;
                }
                case 11:
                {
                    Local.SetClanTag("k");
                    break;
                }
                case 12:
                {
                    Local.SetClanTag("");
                    break;
                }
                case 13:
                {
                    Local.SetClanTag("");
                    break;
                }
                case 14:
                {
                    Local.SetClanTag("s");
                    break;
                }
                case 15:
                {
                    Local.SetClanTag("su");
                    break;
                }
                case 16:
                {
                    Local.SetClanTag("sub");
                    break;
                }
                case 17:
                {
                    Local.SetClanTag("sub ");
                    break;
                }
				case 18:
                {
                    Local.SetClanTag("sub t");
                    break;
                }
				case 19:
                {
                    Local.SetClanTag("sub to");
                    break;
                }
				case 20:
                {
                    Local.SetClanTag("sub to ");
                    break;
                }
				case 21:
                {
                    Local.SetClanTag("sub to s");
                    break;
                }
				case 22:
                {
                    Local.SetClanTag("sub to sm");
                    break;
                }
				case 23:
                {
                    Local.SetClanTag("sub to smo");
                    break;
                }
				case 24:
                {
                    Local.SetClanTag("sub to smok");
                    break;
                }
				case 25:
                {
                    Local.SetClanTag("sub to smoke");
                    break;
                }
				case 26:
                {
                    Local.SetClanTag("sub to smoke");
                    break;
                }
            }
    }
    lasttime = time;
}

Cheat.RegisterCallback("Draw", "onRender");