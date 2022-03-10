UI.AddCheckbox("youtube link killsay");
//Gay killsay territory yes
var normal_killsays = ["Visit youtube.com/channel/UCpsk0KQGWw-GqUX_VWyu5MA for the best cfg CS:GO cheats",
   "you have been killed by Creator.xyz, the top 1 cheats in everything", 
   "go subcribe to Creative, he will make best cfg if u want to pay for that"
];
    
var hs_killsays = ["u can find my best cfg in discord.gg/YpgnnqPmBM​", "Stop being a noob with ur crack cheats man"
];


var knife_killsays= ["oh no get kill by knife, so noob and suck nn doga"
];

//Edited by Creative
//I hope you haven't gotten cancer after reading those

function on_player_death()
{
    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "youtube link killsay"))
    {
        var victim = Entity.GetEntityFromUserID(Event.GetInt("userid"));
		var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
		var headshot = Event.GetInt("headshot") == 1;
        
        if(Entity.IsLocalPlayer(attacker) && attacker != victim)
        {
            var normal_say = normal_killsays[Math.floor(Math.random() * normal_killsays.length)];
			var hs_say = hs_killsays[Math.floor(Math.random() * hs_killsays.length)];
            var knife_say = knife_killsays[Math.floor(Math.random() * normal_killsays.length)];
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