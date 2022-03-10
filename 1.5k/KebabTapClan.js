//Wannabe Neverlose Clantag xddd, If you are reading this you are gay,,,,,//
UI.AddLabel("---------------------------");
UI.AddDropdown("Clantag", ["Disabled", "*KeBaBTaP ClanTag"]);
UI.AddLabel("Creator: RakloMindž#4639");
UI.AddLabel("Gay: Kebabar#0101");
UI.AddSliderInt("Speed", 1, 3);
UI.AddSliderInt("How Long Is Your PP", 1, 3);
UI.AddSliderInt("Skill", 1, 10);
UI.AddLabel("---------------------------");
UI.AddLabel("If You Turn Off The Clantag");
UI.AddLabel("Your Game Will Crash Lol"); //True
UI.AddLabel("Maybe");
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
case 4: Local.SetClanTag(" K "); break;
case 5: Local.SetClanTag(" K3 "); break;
case 6: Local.SetClanTag(" Ke "); break;
case 7: Local.SetClanTag(" Ke\\ "); break;
case 8: Local.SetClanTag(" Ke\\/ "); break;
case 9: Local.SetClanTag(" KeB "); break;
case 10: Local.SetClanTag(" KeB3 "); break;
case 11: Local.SetClanTag(" KeBa "); break;
case 12: Local.SetClanTag(" KeBa| "); break;
case 13: Local.SetClanTag(" KeBa|2 "); break;
case 14: Local.SetClanTag(" KeBaB| "); break;
case 15: Local.SetClanTag(" KeBaB "); break;
case 16: Local.SetClanTag(" KeBaBT4 "); break;
case 17: Local.SetClanTag(" KeBaBTaP "); break;
case 18: Local.SetClanTag(" Ke8a8Ta9| "); break;
case 19: Local.SetClanTag(" -_-KebabTaP-_- "); break;
case 20: Local.SetClanTag(" Ke8a8Ta9 "); break;
case 21: Local.SetClanTag(" KeBaBTaP "); break;
case 22: Local.SetClanTag(" Ke8a8Ta9 "); break;
case 23: Local.SetClanTag(" |/KeBaBTaP/| "); break;
case 24: Local.SetClanTag(" |KeBaBTaP-| "); break;
case 25: Local.SetClanTag(" |/KeBaBTaP/|/ "); break;
case 26: Local.SetClanTag(" |-KeBaBTaP| "); break;
case 27: Local.SetClanTag(" |/KeBaBTaP/| "); break;
case 28: Local.SetClanTag(" |KeBaBTaP-| "); break;
case 29: Local.SetClanTag(" |/KeBaBTaP/| "); break;
case 30: Local.SetClanTag(" |-KeBaBTaP| "); break;
case 31: Local.SetClanTag(" |/KeBaBTaP/| "); break;
case 32: Local.SetClanTag(" KeBaBTaP "); break;
case 33: Local.SetClanTag(" KeBaBTa|P "); break;
case 34: Local.SetClanTag(" KeBaBT| "); break;
case 35: Local.SetClanTag(" Ke8a8_ "); break;
case 36: Local.SetClanTag(" KeBa4 "); break;
case 37: Local.SetClanTag(" KeBaB "); break;
case 38: Local.SetClanTag(" KeBa_ "); break;
case 39: Local.SetClanTag(" KeB| "); break;
case 40: Local.SetClanTag(" KeBa_ "); break;
case 41: Local.SetClanTag(" KeB|2 "); break;
case 42: Local.SetClanTag(" Ke| "); break;
case 43: Local.SetClanTag(" K_ "); break;
case 44: Local.SetClanTag(" |KeBaBTaP-| "); break;
case 45: Local.SetClanTag(" |/KeBaBTaP/| "); break;
case 46: Local.SetClanTag(" |-KeBaBTaP| "); break;
case 47: Local.SetClanTag(" |/KeBaBTaP/| "); break;
case 48: Local.SetClanTag(" |KeBaBTaP-| "); break;
case 49: Local.SetClanTag(" |/KeBaBTaP/| "); break;
case 50: Local.SetClanTag(" |-KeBaBTaP| "); break;
case 51: Local.SetClanTag(" |\\|"); break;
case 52: Local.SetClanTag(" |//|"); break;
case 53: Local.SetClanTag(" |\\|"); break;
case 54: Local.SetClanTag("|//| "); break;
}
}
}
lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");