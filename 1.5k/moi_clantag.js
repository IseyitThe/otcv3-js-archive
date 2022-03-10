var currentTick = 0;
var lastTick = 0;
var special = false
var speed = 22;
var ctag = 0

function Draw(){
    currentTick = parseInt(Globals.Curtime() * 1000);
    if (currentTick - (10000 / speed) >= lastTick){
        switch ((ctag) % 42){
            case 0:{
                Local.SetClanTag("             ");
                break;
            }
            case 1:{
                Local.SetClanTag("P          \n");
                break;
            }
            case 2:{
                Local.SetClanTag("Pi         \n");
                break;
            }
            case 3:{
                Local.SetClanTag("Pis        \n");
                break;
            }
            case 4:{
                Local.SetClanTag("Pist       \n");
                break;
            }
            case 5:{
                Local.SetClanTag("Pisto      \n");
                break;
            }
            case 6:{
                Local.SetClanTag("Piston     \n");
                break;
            }
            case 7:{
                Local.SetClanTag("Piston#    \n");
                break;
            }
            case 8:{
                Local.SetClanTag("Piston#    \n");
                break;
            }
            case 9:{
                Local.SetClanTag("Piston#0   \n");
                break;
            }
            case 10:{
                Local.SetClanTag("Piston#01  \n");
                break;
            }
            case 11:{
                Local.SetClanTag("Piston#014 \n");
                break;
            }
            case 12:{
                Local.SetClanTag("Piston#0148\n");
                break;
            }
            case 13:{
                Local.SetClanTag("Piston#0148\n");
                break;
            }
            case 14:{
                Local.SetClanTag("Piston#0148\n");
                break;
            }
            case 15:{
                Local.SetClanTag("Piston#014 \n");
                break;
            }
            case 16:{
                Local.SetClanTag("Piston#01  \n");
                break;
            }
            case 17:{
                Local.SetClanTag("Piston#0   \n");
                break;
            }
            case 18:{
                Local.SetClanTag("Piston#    \n");
                break;
            }
            case 19:{
                Local.SetClanTag("Piston     \n");
                break;
            }
            case 20:{
                Local.SetClanTag("Pisto      \n");
                break;
            }
            case 21:{
                Local.SetClanTag("Pist       \n");
                break;
            }
            case 22:{
                Local.SetClanTag("Pis        \n");
                break;
            }
            case 23:{
                Local.SetClanTag("Pi         \n");
                break;
            }
            case 24:{
                Local.SetClanTag("P          \n");
                break;
            }
			case 25:{
                Local.SetClanTag("           \n");
                break;
            }
			case 26:{
                Local.SetClanTag("             ");
                break;
            }
        }
        if (ctag == 26){
            ctag = 0;
        }else{
            ctag = ctag+1;
        }
        lastTick = currentTick;
    }
}

Cheat.RegisterCallback("Draw", "Draw");