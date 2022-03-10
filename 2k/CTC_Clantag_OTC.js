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
                Local.SetClanTag("Chrome");
                break;
            }
            case 1:{
                Local.SetClanTag("Chrome");
                break;
            }
            case 2:{
                Local.SetClanTag("Trend");
                break;
            }
            case 3:{
                Local.SetClanTag("Trend");
                break;
            }
            case 4:{
                Local.SetClanTag("Community");
                break;
            }
            case 5:{
                Local.SetClanTag("Community");
                break;
            }
            case 6:{
                Local.SetClanTag("ctc");
                break;
            }
            case 7:{
                Local.SetClanTag("CTC");
                break;
            }
            case 8:{
                Local.SetClanTag("C");
                break;
            }
            case 9:{
                Local.SetClanTag("C");
                break;
            }
            case 10:{
                Local.SetClanTag("CT");
                break;
            }
            case 11:{
                Local.SetClanTag("CT");
                break;
            }
            case 12:{
                Local.SetClanTag("CTC");
                break;
            }
            case 13:{
                Local.SetClanTag("CTC");
                break;
            }
            case 14:{
                Local.SetClanTag("C--");
                break;
            }
            case 15:{
                Local.SetClanTag("C--");
                break;
            }
            case 16:{
                Local.SetClanTag("CT-");
                break;
            }
            case 17:{
                Local.SetClanTag("CT-");
                break;
            }
            case 18:{
                Local.SetClanTag("CTC");
                break;
            }
            case 19:{
                Local.SetClanTag("CTC");
                break;
            }
            case 20:{
                Local.SetClanTag("C");
                break;
            }
            case 21:{
                Local.SetClanTag("Ch");
                break;
            }
            case 22:{
                Local.SetClanTag("Chr");
                break;
            }
            case 23:{
                Local.SetClanTag("Chro");
                break;
            }
            case 24:{
                Local.SetClanTag("Chrom");
                break;
            }
            case 25:{
                Local.SetClanTag("Chrome");
                break;
            }
            case 26:{
                Local.SetClanTag("Chrome T");
                break;
            }
            case 27:{
                Local.SetClanTag("Chrome Tr");
                break;
            }
            case 28:{
                Local.SetClanTag("Chrome Tre");
                break;
            }
            case 29:{
                Local.SetClanTag("Chrome Tren");
                break;
            }
            case 30:{
                Local.SetClanTag("Chrome Trend");
                break;
            }
            case 31:{
                Local.SetClanTag("Chrome Trend");
                break;
            }
            case 32:{
                Local.SetClanTag("Chrome Trend");
                break;
            }
            case 33:{
                Local.SetClanTag("Chrome Tren");
                break;
            }
            case 34:{
                Local.SetClanTag("Chrome Tre");
                break;
            }
            case 35:{
                Local.SetClanTag("Chrome T");
                break;
            }
            case 36:{
                Local.SetClanTag("Chrome");
                break;
            }
            case 37:{
                Local.SetClanTag("Chrom");
                break;
            }
            case 38:{
                Local.SetClanTag("Chro");
                break;
            }
            case 39:{
                Local.SetClanTag("Chr");
                break;
            }
            case 40:{
                Local.SetClanTag("Ch");
                break;
            }
            case 41:{
                Local.SetClanTag("C");
                break;
            }
			case 42:{
                Local.SetClanTag("");
                break;
            }
        }
        if (ctag == 42){
            ctag = 0;
        }else{
            ctag = ctag+1;
        }
        lastTick = currentTick;
    }
}

Cheat.RegisterCallback("Draw", "Draw");