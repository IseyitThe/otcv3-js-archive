UI.AddLabel("---------------------------");
UI.AddDropdown("Clantag", ["Disabled", "Neverlose by BTSHater#8199"]);
UI.AddSliderInt("Speed", 1, 3);
UI.AddLabel("---------------------------");

var lasttime = 0;

function onRender()
{
    var tag = UI.GetValue("Script items", "Clantag");
    var speed = UI.GetValue("Script items", "Speed");
    var custom = UI.GetValue("Script items", "Clantag");
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
            switch ((time) % 55)
{
case 0: Local.SetClanTag(" "); break;
case 1: Local.SetClanTag(" |"); break;
case 2: Local.SetClanTag(" |\\ "); break;
case 3: Local.SetClanTag(" |\\|"); break;
case 4: Local.SetClanTag(" N "); break;
case 5: Local.SetClanTag(" N3 "); break;
case 6: Local.SetClanTag(" Ne "); break;
case 7: Local.SetClanTag(" Ne\\ "); break;
case 8: Local.SetClanTag(" Ne\\/ "); break;
case 9: Local.SetClanTag(" Nev "); break;
case 10: Local.SetClanTag(" Nev3 "); break;
case 11: Local.SetClanTag(" Neve "); break;
case 12: Local.SetClanTag(" Neve| "); break;
case 13: Local.SetClanTag(" Neve|2 "); break;
case 14: Local.SetClanTag(" Never| "); break;
case 15: Local.SetClanTag(" Neverl "); break;
case 16: Local.SetClanTag(" Neverl4 "); break;
case 17: Local.SetClanTag(" Neverlo "); break;
case 18: Local.SetClanTag(" Neverlos| "); break;
case 19: Local.SetClanTag(" Neverlos|D "); break;
case 20: Local.SetClanTag(" Neverlos "); break;
case 21: Local.SetClanTag(" Neverlose "); break;
case 22: Local.SetClanTag(" Neverlose. "); break;
case 23: Local.SetClanTag(" Neverlose.< "); break;
case 24: Local.SetClanTag(" Neverlose.c "); break;
case 25: Local.SetClanTag(" Neverlose.c< "); break;
case 26: Local.SetClanTag(" Neverlose.cc "); break;
case 27: Local.SetClanTag(" Neverlose.cc "); break;
case 28: Local.SetClanTag(" Neverlose.c< "); break;
case 29: Local.SetClanTag(" Neverlose.c "); break;
case 30: Local.SetClanTag(" Neverlose.< "); break;
case 31: Local.SetClanTag(" Neverlose. "); break;
case 32: Local.SetClanTag(" Neverlose "); break;
case 33: Local.SetClanTag(" Neverlo|D "); break;
case 34: Local.SetClanTag(" Neverlo| "); break;
case 35: Local.SetClanTag(" Neverlo_ "); break;
case 36: Local.SetClanTag(" Neverl4 "); break;
case 37: Local.SetClanTag(" Nevelo "); break;
case 38: Local.SetClanTag(" Neverl_ "); break;
case 39: Local.SetClanTag(" Never| "); break;
case 40: Local.SetClanTag(" Never_ "); break;
case 41: Local.SetClanTag(" Neve|2 "); break;
case 42: Local.SetClanTag(" Neve| "); break;
case 43: Local.SetClanTag(" Neve_ "); break;
case 44: Local.SetClanTag(" Nev3 "); break;
case 45: Local.SetClanTag(" Nev_ "); break;
case 46: Local.SetClanTag(" Ne\\/ "); break;
case 47: Local.SetClanTag(" Ne\\ "); break;
case 48: Local.SetClanTag(" Ne_ "); break;
case 49: Local.SetClanTag(" N3 "); break;
case 50: Local.SetClanTag(" N_ "); break;
case 51: Local.SetClanTag(" |\\|"); break;
case 52: Local.SetClanTag(" |\\ "); break;
case 53: Local.SetClanTag(" |"); break;
case 54: Local.SetClanTag(" "); break;
}
}
}
lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");