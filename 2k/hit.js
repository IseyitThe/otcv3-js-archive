function format(string, values) {
	var array = string.split("%");
	var final_string = array[0];

	if (array.length - 1 != values.length) {
		throw new Error("[Format] The amount of placeholders does not match the amount of values.");
	}

	for (var i = 1; i < array.length; i++) {
		final_string += values[i - 1] + array[i];
	}

	return final_string;
}

var hitlog = {};

function onRoundStart() {
	hitlog = {};
}

function onRoundEnd() {
	var enemies = Entity.GetEnemies();
	for (var i = 0; i < enemies.length; i++) {
		if (!hitlog[enemies[i]]) {
			hitlog[enemies[i]] = {};
			hitlog[enemies[i]]["dmgGiven"] = 0;
			hitlog[enemies[i]]["hitsGiven"] = 0;
			hitlog[enemies[i]]["dmgTaken"] = 0;
			hitlog[enemies[i]]["hitsTaken"] = 0;
		}
	}

	var keys = Object.keys(hitlog);
	for (var i = 0; i < keys.length; i++) {
		var val = hitlog[keys[i]];
		var entity = parseInt(keys[i]);
		var health = 0;
		if (Entity.IsAlive(entity)) {
			health = Entity.GetProp(entity, "CBasePlayer", "m_iHealth");
		}
		var name = Entity.GetName(entity);
		Cheat.PrintChat(format("--> (% dmg / % hits) to (% dmg / % hits) from % (% hp)\n", [
			val.dmgGiven || 0, val.hitsGiven || 0,
			val.dmgTaken || 0, val.hitsTaken || 0,
			name, health
		]));
	}
}

function onPlayerHurt() {
	var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
	var victim = Entity.GetEntityFromUserID(Event.GetInt("userid"));
	if (Entity.IsLocalPlayer(attacker) && !Entity.IsLocalPlayer(victim) && Entity.IsEnemy(victim)) {
		if (!hitlog[victim]) {
			hitlog[victim] = {};
			hitlog[victim]["dmgGiven"] = 0;
			hitlog[victim]["hitsGiven"] = 0;
			hitlog[victim]["dmgTaken"] = 0;
			hitlog[victim]["hitsTaken"] = 0;
		}

		hitlog[victim]["dmgGiven"] += Event.GetInt("dmg_health");
		hitlog[victim]["hitsGiven"]++;
	}

	if (!Entity.IsLocalPlayer(attacker) && Entity.IsLocalPlayer(victim) && !Entity.IsTeammate(attacker)) {
		if (!hitlog[attacker]) {
			hitlog[attacker] = {};
			hitlog[attacker]["dmgGiven"] = 0;
			hitlog[attacker]["hitsGiven"] = 0;
			hitlog[attacker]["dmgTaken"] = 0;
			hitlog[attacker]["hitsTaken"] = 0;
		}

		hitlog[attacker]["dmgTaken"] += Event.GetInt("dmg_health");
		hitlog[attacker]["hitsTaken"]++;

	}
}

Cheat.RegisterCallback("round_start", "onRoundStart");
Cheat.RegisterCallback("round_end", "onRoundEnd");
Cheat.RegisterCallback("player_hurt", "onPlayerHurt");