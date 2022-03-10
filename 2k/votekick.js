var options = [];
var votes = [];
var screen_size = Render.GetScreenSize();
var connected_server = World.GetServerString();

UI.AddCheckbox("Enable Vote Reveal");

function onVoteOptions() {
    votes = [];
    for (var i = 0; i <= Event.GetInt("count"); i++) {
        options[i] = Event.GetString("option" + (i + 1)).toLowerCase();
    }
}  

function onVoteCast() {
    var entid = Event.GetInt("entityid");
    var option = Event.GetInt("vote_option");
    var name = Entity.GetName(entid);
    var chosen = options[option];

    var color = (chosen == "yes") ? [0, 255, 0, 255] : [255, 0, 0, 255];

    const voteMessage = [
        [[255, 255, 255, 255], "Player: "],
        [color, name.substring(0, 28)],
        [[255, 255, 255, 255], " Voted: "],
        [color, chosen]
    ]

    Global.PrintColor(color, "Player: " + name + " Voted: " + chosen + "\n");

    votes.push({
        text: voteMessage,
        delay: Global.Realtime() + 5,
        firstLayer: 0,
        secondLayer: 0,
        color: color
    });

}

function getMultiColorTextSize(lines) {
    var w = 0;
    for (var x = 0; x < lines.length; x++) {
        w += Render.TextSize(lines[x][1], 8)[0];
    }
    return w;
}

function drawMultiColorText(x, y, lines) {
    var x_pad = 0;
    for (var i = 0; i < lines.length; i++) {
        const line = lines[i];
        const text = line[1];
        var color = line[0];
        Render.String(x + x_pad, y, 0, text, color, 8);
        const w = Render.TextSize(text, 8)[0];
        x_pad += w;
    }
}

function showLog(count, layer){
    const text = layer.text;
    const w = getMultiColorTextSize(text);
    const expiry = Global.Realtime() < layer.delay;
    const y = (screen_size[1] / 2) + 185 + (42 * (count - 1));
    const h = 12;
    const logW = (w < 150) ? 150 : (w + 15);
    const speed = 3;
    const layerSize = 15;

    layer.firstLayer = expiry ? Math.min(layer.firstLayer + logW * 0.025, logW + layerSize) : Math.max(layer.firstLayer - speed, 0);
    layer.secondLayer = expiry ? Math.min(layer.secondLayer + logW * 0.015, logW) : Math.max(layer.secondLayer - 2 * speed, 0);
    var color = layer.color;
    Render.FilledRect(layer.firstLayer - layer.firstLayer, y, layer.firstLayer, h + 20, color);
    Render.FilledRect(layer.secondLayer - layer.secondLayer, y, layer.secondLayer, h + 20, [16, 0, 0, 255]);

    drawMultiColorText(layer.secondLayer - logW + 5, y + 3 + 6, text);
    votes[count] = layer;
    if (layer.secondLayer === 0) {
        votes.splice(count, 1);
    }
}

function onDraw(){
    if(connected_server != World.GetServerString())
    {
        votes = []; // fix issue with some votes remaining until next vote if you leave server before vote ends.
        connected_server = World.GetServerString();
    }
    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Vote Reveal"))
        for(var x = 0; x < votes.length; x++){
            showLog(x, votes[x]);
        }

    Render.String(32, 32, 0, World.GetServerString(), [255, 255, 255, 255]);
}

Global.RegisterCallback("vote_options", "onVoteOptions");
Global.RegisterCallback("vote_cast", "onVoteCast");
Global.RegisterCallback("Draw", "onDraw");