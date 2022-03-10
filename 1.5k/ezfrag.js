UI.AddCheckbox("Ezfrag Killsay");
//Gay killsay territory yes
var normal_killsays = ["Visit www.EZfrags.co.uk for the finest public & private CS:GO cheats", "Stop being a noob! Get good with www.EZfrags.co.uk", "I'm not using www.EZfrags.co.uk, you're just bad", "You just got pwned by EZfrags, the #1 CS:GO cheat",
    "If I was cheating, I'd use www.EZfrags.co.uk",
    "Think you could do better? Not without www.EZfrags.co.uk",
];
    
var hs_killsays = ["Visit www.EZfrags.co.uk for the finest public & private CS:GO cheats", "Stop being a noob! Get good with www.EZfrags.co.uk",
    "If I was cheating, I'd use www.EZfrags.co.uk", "I'm not using www.EZfrags.co.uk, you're just bad", "You just got pwned by EZfrags, the #1 CS:GO cheat", "Think you could do better? Not without www.EZfrags.co.uk",
];

//Edited by Justikk
//I hope you haven't gotten cancer after reading those

function on_player_death()
{
    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Ezfrag Killsay"))
    {
        var victim = Entity.GetEntityFromUserID(Event.GetInt("userid"));
		var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
		var headshot = Event.GetInt("headshot") == 1;
        
        if(Entity.IsLocalPlayer(attacker) && attacker != victim)
        {
            var normal_say = normal_killsays[Math.floor(Math.random() * normal_killsays.length)];
			var hs_say = hs_killsays[Math.floor(Math.random() * hs_killsays.length)];
            
            if(headshot && Math.floor(Math.random() * 3) <= 1) //gamer style randomizer
            {
                Cheat.ExecuteCommand("say " + hs_say);
                return;
            }
            Cheat.ExecuteCommand("say " + normal_say);
        }
    }
}

var killsay_amt = normal_killsays.length + hs_killsays.length;

Cheat.Print("trashtalk js loaded, killsay count: " + killsay_amt + "\n");
Cheat.RegisterCallback("player_death", "on_player_death");