var x = 10, y = 900, local_player = Entity.GetLocalPlayer();

function getVelocity(index)
{
    players = Entity.GetPlayers();
    for (i=0; i < players.length; i++);
    {
        var velocity = Entity.GetProp( index, "CBasePlayer", "m_vecVelocity[0]" );
        var speed = Math.sqrt( velocity[0] * velocity[0] + velocity[1] * velocity[1] );
    }
   
    return speed;
}

function main() {
   
    var lp = Entity.GetLocalPlayer();
    var velocity = Math.round(getVelocity(lp)).toString();
    var shouldDraw = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Vizualize Indicator");
    if (shouldDraw)
{

        var b = Math.sqrt( 255 + velocity)
        var a = Math.sqrt( 255 + velocity + b)
       
        Render.String(x, y, 0, "FAKE", [ b, a, 0, 255 ], 4);
    }
}

Global.RegisterCallback("Draw", "main");

UI.AddLabel("=====================");
UI.AddLabel("=== Cherry's Fake Indicator ===");
UI.AddLabel("=====================");
UI.AddCheckbox("Vizualize Indicator");
UI.AddLabel("=====================");