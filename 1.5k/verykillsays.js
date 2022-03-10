UI.AddSubTab( ["Misc.", "SUBTAB_MGR"], "Killsay");
//Kill and Deathsay
UI.AddTextbox( ["Misc.", "Killsay", "Killsay"], "Message on kill",0);
UI.AddCheckbox( ["Misc.", "Killsay", "Killsay"], "Only on Headshotkill",0);
UI.AddTextbox( ["Misc.", "Killsay", "Killsay"], "Message on death",0);
//Chatspam
UI.AddDropdown(["Misc.", "Killsay", "Killsay"], "Chatspam",["Disabled", "Custom", "Aimware", "ezfrags"],0);
UI.AddTextbox(["Misc.", "Killsay", "Killsay"], "Custom Message",0);
UI.AddSliderInt(["Misc.", "Killsay", "Killsay"], "Duration between messages (seconds)", 5,30);

var a = 0;
var start = 0;
var end = 0;
var should = 0;
var durationchange = 0;
var ezfrags = 0;
var trashtalk = 0;

//Kill and Deathsay function
function killsay( )
{
    //Getting the killed and the killer
    dead = Event.GetInt("userid")
    deadET = Entity.GetEntityFromUserID(dead)
    alive = Event.GetInt("attacker")
    aliveET = Entity.GetEntityFromUserID(alive)

    //Getting costum Message out of MessageBox
    kill = UI.GetString(["Misc.", "Killsay", "Killsay", "Message on kill"] )
    death = UI.GetString(["Misc.", "Killsay", "Killsay", "Message on death"])

    //Check if you killed the dead guy
    if(UI.GetValue(["Misc.", "Killsay", "Killsay", "Only on Headshotkill"] ) == 1)
    {
        var head = Event.GetString("headshot");
        if(head == 1)
        {
            if(Entity.IsLocalPlayer(aliveET))
            {
            //Check if message isn't empty
            if (kill == "") {return}
            else{Global.ExecuteCommand("say " + kill);};
            }
        }
    }
    else
    {
        if(Entity.IsLocalPlayer(aliveET))
        {
        //Check if message isn't empty
        if (kill == "") {return}
        else{Global.ExecuteCommand("say " + kill);};
        }  
    }

   

    //Check if you got killed
    if(Entity.IsLocalPlayer(deadET))
    {
        //Check if message isn't empty
        if (death == "") {return}
        else{Global.ExecuteCommand("say " + death);};
    }
}



//Chatspam funtion obviously
function chatspam()
{
    var Case = UI.GetValue( ["Misc.","Killsay","Killsay", "Chatspam"] );
    var message = UI.GetString(["Misc.", "Killsay", "Killsay", "Custom Message"]);
    var duration = UI.GetValue(["Misc.", "Killsay", "Killsay", "Duration between messages (seconds)"]);

    //some weird var to find out if the value of the slider changed
    if(durationchange != duration){a = 0; Case = 0;}

    //Main var for the time stuff
    //Quick explaining: loading script -> a=0   choosing duration -> a=1
    //If the time elapsed a=0 and it starts again
    //There is definetly an easier way, but its the first .js i wrote so dont judge me :D
    if(a == 0)
    {
        //Getting Current time, adding all numbers and safe them for later
        a = 1;
        CurTime = new Date();
        b = CurTime.getHours();
        c = CurTime.getMinutes();
        d = CurTime.getSeconds();
        start = b+c+d;
        should = start + duration;
        durationchange = duration;

        //All cases from Dopdownbox, feel free to add more
        if(Case == 0)
        {return};
        if(Case == 1){Global.ExecuteCommand("say " + message); }
        if(Case == 2){Global.ExecuteCommand("say " + "www.Aimware.net | Premium CS:GO Cheat");}
        if(Case == 3){
            if(ezfrags == 0)
            {Global.ExecuteCommand("say " + "Visit www.EZfrags.co.uk for the finest public & private CS:GO cheats");
            ezfrags++;
            }else if (ezfrags == 1){Global.ExecuteCommand("say " + "If I was cheating, I'd use www.EZfrags.co.uk");
            ezfrags++;
            }else if (ezfrags == 2){Global.ExecuteCommand("say " + "I'm not using www.EZfrags.co.uk, you're just bad");
            ezfrags++;
            }else if (ezfrags == 3){Global.ExecuteCommand("say " + "Stop being a noob! Get good with www.EZfrags.co.uk");
            ezfrags++;
            }else if (ezfrags == 4){Global.ExecuteCommand("say " + "Think you could do better? Not without www.EZfrags.co.uk");
            ezfrags=0;}
        }
    }
    else
    {
        //Current time again
        CurTime = new Date();
        b = CurTime.getHours();
        c = CurTime.getMinutes();
        d = CurTime.getSeconds();
        end = b+c+d;

        //Checking if the current time is greater than the safed one before
        if(end == should)
        {
            a = 0;
        }
    }
}

//Callbacks
Cheat.RegisterCallback("player_death", "killsay");
Cheat.RegisterCallback("Draw", "chatspam");
