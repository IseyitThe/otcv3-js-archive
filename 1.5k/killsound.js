const TIME_TO_PLAY = 2.20;
const MAX_STREAK = 5;

var g_bPlaying = false;
var g_flFinishPlaying = 0.0;
var g_nKillStreak = 0;

function start_playing(nKills, bHeadshot)
{
	if(nKills > MAX_STREAK)
	{
		return;
	}

	const sSuffix = nKills == 1 && bHeadshot ? "_hs" : "";

	g_bPlaying = true;
	g_flFinishPlaying = Global.Realtime() + TIME_TO_PLAY;
	Cheat.ExecuteCommand("voice_loopback 1");
	Sound.PlayMicrophone("ot/killsounds/" + nKills + sSuffix + ".wav");
}

function stop_playing()
{
	g_bPlaying = false;
	Cheat.ExecuteCommand("voice_loopback 0");
	Sound.StopMicrophone();
}

function reset()
{
	g_flFinishPlaying = 0.0;
	g_nKillStreak = 0;
	stop_playing();
}

function player_spawn()
{
	const nUserID = Event.GetInt("userid");
	const nEntityID = Entity.GetEntityFromUserID(nUserID);

	if(Entity.IsLocalPlayer(nEntityID))
	{
		reset();
	}
}

function player_death()
{
	const nAttackerID = Event.GetInt("attacker");
	const nVictimID = Event.GetInt("userid");
	const nAttackerEntityID = Entity.GetEntityFromUserID(nAttackerID);

	if(nAttackerID != nVictimID && Entity.IsLocalPlayer(nAttackerEntityID))
	{
		const bHeadshot = Event.GetInt("headshot") == 1;
		start_playing(++g_nKillStreak, bHeadshot);
	}
}

function frame_stage_notify()
{
	if(g_bPlaying && Global.Realtime() > g_flFinishPlaying)
	{
		stop_playing();
	}
}

Global.RegisterCallback("player_death", "player_death");
Global.RegisterCallback("player_spawn", "player_spawn");
Global.RegisterCallback("FrameStageNotify", "frame_stage_notify");

reset();
