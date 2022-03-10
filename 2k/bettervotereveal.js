var options = [];
var votes = [];

function vote_options() {
    votes = [];
   
    for (var i = 0; i <= Event.GetInt("count"); i++) {
        options[i] = Event.GetString("option" + (i + 1)).toLowerCase();
    }
   
    cur = Global.Curtime();
}  

function vote_cast() {
    var entid = Event.GetInt("entityid");
    var option = Event.GetInt("vote_option");
    var name = Entity.GetName(entid);
    var chosen = options[option];
   
    votes.push({
        player: name,
        vote: chosen
    });
}

function draw_votes() {
    if (!Entity.GetLocalPlayer()) {
        votes = [];
        options = [];
        return;
    }
    for (i = 0; i < votes.length; i++) {
        if (votes[i].vote == "no")
            Render.String(310, 440 + (i * 15), 0, votes[i].player + " voted " + votes[i].vote, [255, 0, 0, 255]);
        else if (votes[i].vote == "yes")
            Render.String(310, 440 + (i * 15), 0, votes[i].player + " voted " + votes[i].vote, [0, 255, 0, 255]);
        else
            Render.String(310, 440 + (i * 15), 0, votes[i].player + " voted " + votes[i].vote, [255, 255, 255, 255]);
    }
}

Global.RegisterCallback("vote_options", "vote_options");
Global.RegisterCallback("vote_cast", "vote_cast");
Global.RegisterCallback("Draw", "draw_votes");