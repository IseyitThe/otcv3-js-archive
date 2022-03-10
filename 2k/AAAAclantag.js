// coded by elleqt

UI.AddDropdown( "[elleqt] ClanTag", [ "Disabled", "NiggaText", "star|rude", "MEME"] );
UI.AddSliderInt( "[elleqt] ClanTag Speed", 1, 20 );
var lasttime = 0;
function onRender( )
{
    var tag = UI.GetValue( "Script Items", "{Synapse Fanboys} ClanTag" );
    var speed = UI.GetValue( "Script Items", " ClanTag Speed" );
    var time = parseInt((Globals.Curtime() * speed))
    if (time != lasttime)
    {
        if(tag == 0) { Local.SetClanTag(""); }
        if(tag == 1)
            {
            switch((time) % 25)
            {
                case 0: { Local.SetClanTag("x.synapse.to"); break; }
                case 1: { Local.SetClanTag("Synapse X"); break; }
                case 2: { Local.SetClanTag("Synapse"); break; }
                case 3: { Local.SetClanTag("3dsboy08.xyz"); break; }
             
            }
        }
    if(tag == 2)
            {
            switch((time) % 25)
            {
                case 0: { Local.SetClanTag("★HVHKING★"); break; }
                case 1: { Local.SetClanTag("★HVHKING★"); break; }
                case 2: { Local.SetClanTag("★HVHKING★"); break; }
                case 3: { Local.SetClanTag("★HVHKING★"); break; }
                case 4: { Local.SetClanTag("★HVHKING★"); break; }
                case 5: { Local.SetClanTag("★HVHKING★"); break; }
                case 6: { Local.SetClanTag("★HVHKING★"); break; }
                case 7: { Local.SetClanTag("★HVHKING"); break; }
                case 8: { Local.SetClanTag("★HVHKIN"); break; }
                case 9: { Local.SetClanTag("★HVHKI"); break; }
                case 10: { Local.SetClanTag("★HVHK"); break; }
                case 11: { Local.SetClanTag("★HVH"); break; }
                case 12: { Local.SetClanTag("★HV"); break; }
                case 13: { Local.SetClanTag("★H"); break; }
                case 14: { Local.SetClanTag("★"); break; }
                case 15: { Local.SetClanTag(""); break; }
                case 16: { Local.SetClanTag("★"); break; }
                case 17: { Local.SetClanTag("G★"); break; }
                case 18: { Local.SetClanTag("NG★"); break; }
                case 19: { Local.SetClanTag("ING★"); break; }
                case 20: { Local.SetClanTag("KING★"); break; }
                case 21: { Local.SetClanTag("HKING★"); break; }
                case 22: { Local.SetClanTag("VHKING★"); break; }
                case 23: { Local.SetClanTag("HVHKING★"); break; }
                case 24: { Local.SetClanTag("★HVHKING★"); break; }
                case 25: { Local.SetClanTag("★HVHKING★"); break; }
                case 26: { Local.SetClanTag("★HVHKING★"); break; }
                case 27: { Local.SetClanTag("★HVHKING★"); break; }
                case 28: { Local.SetClanTag("★HVHKING★"); break; }
                case 29: { Local.SetClanTag("★HVHKING★"); break; }
                case 30: { Local.SetClanTag("★HVHKING★"); break; }
              
            }
        }
    if(tag == 3)
            {
            switch((time) % 25)
            {
                case 0: { Local.SetClanTag("THIS"); break; }
                case 1: { Local.SetClanTag("IS"); break; }
                case 2: { Local.SetClanTag("THE"); break; }
                case 3: { Local.SetClanTag("BEST"); break; }
                case 4: { Local.SetClanTag("HVH"); break; }
                case 5: { Local.SetClanTag("SERVER"); break; }
                case 6: { Local.SetClanTag("AHAHAAHA"); break; }
                case 7: { Local.SetClanTag("NIGGAZ"); break; }
                case 8: { Local.SetClanTag("SKRRTT"); break; }
                case 9: { Local.SetClanTag("ABORT"); break; }
                case 10: { Local.SetClanTag("GO 5V5 NN"); break; }
                case 11: { Local.SetClanTag("xaNNe is dogshit"); break; }
                case 12: { Local.SetClanTag("UR MOM DEAD"); break; }
                case 13: { Local.SetClanTag("HDF"); break; }
                case 14: { Local.SetClanTag("50$"); break; }
                case 15: { Local.SetClanTag("卍"); break; }
                case 16: { Local.SetClanTag("★"); break; }
                case 17: { Local.SetClanTag("卍"); break; }
                case 18: { Local.SetClanTag("卐"); break; }
                case 19: { Local.SetClanTag("卍"); break; }
                case 20: { Local.SetClanTag("卐"); break; }
                case 21: { Local.SetClanTag("卍"); break; }
                case 22: { Local.SetClanTag("卐"); break; }
                case 23: { Local.SetClanTag("卍"); break; }
                case 24: { Local.SetClanTag("卐"); break; }



              
            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");

