//Start
//Cheat.PrintChat("Hey Geoo" + "\n");

var lasttime = 0;


function clanTag(){
    var speed = 4;
    var time = parseInt((Globals.Curtime()* speed))
    var clanType = 1;

    if (time != lasttime){
        if(clanType == 0){Local.SetClanTag("");}
        if (clanType == 1){
                switch((time) % 25)
                {
                case 1: { Local.SetClanTag("              ☂B"); break; }
                case 2: { Local.SetClanTag("             ☂Bi"); break; }
                case 3: { Local.SetClanTag("            ☂Big"); break; }
                case 4: { Local.SetClanTag("           ☂BigB"); break; }
                case 5: { Local.SetClanTag("          ☂BigBo"); break; }
                case 6: { Local.SetClanTag("         ☂BigBoy$"); break; }
                case 7: { Local.SetClanTag("        ☂BigBoy$."); break; }
                case 8: { Local.SetClanTag("       ☂BigBoy$.clu"); break; }
                case 8: { Local.SetClanTag("     ☂BigBoy$.club "); break; }
                case 8: { Local.SetClanTag("    ☂BigBoy$.cl  "); break; }
                case 9: { Local.SetClanTag("   ☂BigBoy$.   "); break; }
                case 10:{ Local.SetClanTag("  ☂BigBoy$   "); break; }
                case 11:{ Local.SetClanTag(" ☂BigBoy$     "); break; }
                case 12:{ Local.SetClanTag("☂BigBoy$.club     "); break; }
                case 13:{ Local.SetClanTag("☂BigBoy$.clu     "); break; }
                case 14:{ Local.SetClanTag("☂BigBoy$.cl    "); break; }
                case 15:{ Local.SetClanTag("☂BigBoy$.c     "); break; }
                case 16:{ Local.SetClanTag("☂BigBoy$.     "); break; }
                case 17:{ Local.SetClanTag("☂BigBoy$     "); break; }
                case 18:{ Local.SetClanTag("☂BigBo      "); break; }
                case 19:{ Local.SetClanTag("☂BigBoy$        "); break; }
                case 20:{ Local.SetClanTag("☂BigBo         "); break; }
                case 21:{ Local.SetClanTag("☂Big            "); break; }
                case 22:{ Local.SetClanTag("☂Bi             "); break; }
                case 23:{ Local.SetClanTag("☂B              "); break; }
                case 24:{ Local.SetClanTag(" ☂              "); break; }
                }
            }
            
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "clanTag");
