UI.AddTextbox("Chat Spam");

function chatSpamOnKill()

{

    textboxString = UI.GetString( "Misc", "JAVASCRIPT", "Script items", "Chat Spam" );

    localplayer_index = Entity.GetLocalPlayer();

    attacker = Event.GetInt("attacker");

    attacker_index = Entity.GetEntityFromUserID(attacker);

    if (attacker_index == localplayer_index)

    {

        Global.ExecuteCommand( "say " + textboxString );

    }

}

Global.RegisterCallback("player_death", "chatSpamOnKill");