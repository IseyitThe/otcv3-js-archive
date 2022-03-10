UI.AddLabel("---------------------------");
UI.AddDropdown("Clantag", ["Disabled", "VACBAN"]);
UI.AddSliderInt("Speed", 1, 15);
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
            switch ((time) % 80)
{
case 0:Local.SetClanTag(" [&]");break;
case 1: Local.SetClanTag(" [.]"); break;
case 2: Local.SetClanTag(" [s] "); break;
case 3: Local.SetClanTag(" [u]"); break;
case 4: Local.SetClanTag(" [V]"); break;
case 5: Local.SetClanTag(" [V]"); break;
case 6: Local.SetClanTag(" [V]"); break;
case 7: Local.SetClanTag(" [Vh]"); break;
case 8: Local.SetClanTag(" [V*]"); break;
case 9: Local.SetClanTag(" [Ve]"); break;
case 10: Local.SetClanTag(" [Va]"); break;
case 11: Local.SetClanTag(" [Va]"); break;
case 12: Local.SetClanTag(" [Va]"); break;
case 13: Local.SetClanTag(" [Vak]"); break;
case 14: Local.SetClanTag(" [Va3]"); break;
case 15: Local.SetClanTag(" [Vas]"); break;
case 16: Local.SetClanTag(" [Vac]"); break;
case 17: Local.SetClanTag(" [Vac]"); break;
case 18: Local.SetClanTag(" [Vac]"); break;
case 19: Local.SetClanTag(" [Vacn]"); break;
case 20: Local.SetClanTag(" [Vact]"); break;
case 21: Local.SetClanTag(" [Vac&] "); break;
case 22: Local.SetClanTag(" [VacB]"); break;
case 23: Local.SetClanTag(" [VacB]"); break;
case 24: Local.SetClanTag(" [VacB]"); break;
case 25: Local.SetClanTag(" [VacBj]"); break;
case 26: Local.SetClanTag(" [VacBc]"); break;
case 27: Local.SetClanTag(" [VacBz]"); break;
case 28: Local.SetClanTag(" [VacBai]"); break;
case 29: Local.SetClanTag(" [VacBan]"); break;
case 30: Local.SetClanTag(" [VacBaz]"); break;
case 31: Local.SetClanTag(" [VacBann]"); break;
case 32: Local.SetClanTag(" [VacBank]"); break;
case 33: Local.SetClanTag(" [VacBanx]"); break;
case 34: Local.SetClanTag(" [VacBan.]"); break;
case 35: Local.SetClanTag(" [VacBan.]"); break;
case 36: Local.SetClanTag(" [VacBan.]"); break;
case 37: Local.SetClanTag(" [VacBan.d]"); break;
case 38: Local.SetClanTag(" [VacBan.3]"); break;
case 39: Local.SetClanTag(" [VacBan.x]"); break;
case 40: Local.SetClanTag(" [VacBan.B]"); break;
case 41: Local.SetClanTag(" [VacBan.W]"); break;
case 42: Local.SetClanTag(" [VacBan.W]"); break;
case 43: Local.SetClanTag(" [VacBan.W2]"); break;
case 44: Local.SetClanTag(" [VacBan.Wn]"); break;
case 45: Local.SetClanTag(" [VacBan.Wq]"); break;
case 46: Local.SetClanTag(" [VacBan.WT]"); break;
case 47: Local.SetClanTag(" [VacBan.WT]"); break;
case 48: Local.SetClanTag(" [VacBan.WT]"); break;
case 49: Local.SetClanTag(" [VacBan.WTg]"); break;
case 50: Local.SetClanTag(" [VacBan.WTz]"); break;
case 51: Local.SetClanTag(" [VacBan.WT9]"); break;
case 52: Local.SetClanTag(" [VacBan.WTF]"); break;
case 53: Local.SetClanTag(" [VacBan.WTF]"); break;
case 54: Local.SetClanTag(" [VacBan.WTF]"); break;
case 55: Local.SetClanTag(" [VacBan.WTa]"); break;
case 56: Local.SetClanTag(" [VacBan.WT5]"); break;
case 57: Local.SetClanTag(" [VacBan.WTm]"); break;
case 58: Local.SetClanTag(" [VacBan.W,]"); break;
case 59: Local.SetClanTag(" [VacBan.W2]"); break;
case 60: Local.SetClanTag(" [VacBan.Wq]"); break;
case 61: Local.SetClanTag(" [VacBan.g]"); break;
case 62: Local.SetClanTag(" [VacBan.y]"); break;
case 63: Local.SetClanTag(" [VacBan.4]"); break;
case 64: Local.SetClanTag(" [VacBan&]"); break;
case 65: Local.SetClanTag(" [VacBanj]"); break;
case 66: Local.SetClanTag(" [VacBan2]"); break;
case 67: Local.SetClanTag(" [VacBand]"); break;
case 68: Local.SetClanTag(" [VacBay]"); break;
case 69: Local.SetClanTag(" [VacBa&]"); break;
case 70: Local.SetClanTag(" [VacBa4]"); break;
case 71: Local.SetClanTag(" [VacBb]"); break;
case 72: Local.SetClanTag(" [VacB7]"); break;
case 73: Local.SetClanTag(" [VacBz]"); break;
case 74: Local.SetClanTag(" [Vac6]"); break;
case 75: Local.SetClanTag(" [Vacg]"); break;
case 76: Local.SetClanTag(" [Vac&]"); break;
case 77: Local.SetClanTag(" [Va?]"); break;
case 78: Local.SetClanTag(" [Va9]"); break;
case 79: Local.SetClanTag(" [Vap]"); break;
case 80: Local.SetClanTag(" [V/]"); break;
case 81: Local.SetClanTag(" [Vi]"); break;
case 82: Local.SetClanTag(" [Vq]"); break;
case 83: Local.SetClanTag(" [a]"); break;
case 84: Local.SetClanTag(" [j]"); break;
case 85: Local.SetClanTag(" [l]"); break;
case 86: Local.SetClanTag(" []"); break;
}
}
}
lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");