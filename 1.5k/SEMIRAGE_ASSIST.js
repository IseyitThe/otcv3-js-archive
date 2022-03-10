function setup_menu()
{
    UI.AddCheckbox("Enable semirage assist");
    UI.AddHotkey("Autowall");
    UI.AddDropdown("Default mode (no autowall key)", ["Legit autowall", "No autowall"]);
    UI.AddCheckbox("Enable legit AA");
    UI.AddDropdown("LBY Mode", ["Safe", "Extend"]);
    UI.AddHotkey("Legit AA juke");
    UI.AddMultiDropdown("Semirage assist indicators", ["Ragebot", "Autowall", "Legit AA", "Choke", "Inaccuracy"]);
    UI.AddCheckbox("Trashtalk");
}

setup_menu();

var js_items = ["Misc", "JAVASCRIPT", "Script Items"];

var weapon_types = ["GENERAL", "PISTOL", "HEAVY PISTOL", "SCOUT", "AWP", "AUTOSNIPER"]; //Unnecessary for now, kept for a future update

var script_config = {
rbot_active: 0,
script_active: 0,
autowall_active: 0,
autowall_mode: -1,
legitaa_active: 0,
legitaa_lby_mode: -1,
legitaa_juke_active: 0,
indicator_picks: -1,
trashtalk: 0
};
//Trying out a new model for this shit

function update_settings()
{
    script_config.rbot_active = UI.IsHotkeyActive("Rage", "General", "Enabled");
    script_config.script_active = UI.GetValue(js_items, "Enable semirage assist");
    script_config.autowall_active = UI.IsHotkeyActive(js_items, "Autowall");
    script_config.autowall_mode = UI.GetValue(js_items, "Default mode (no autowall key)");
    script_config.legitaa_active = UI.GetValue(js_items, "Enable legit AA");
    script_config.legitaa_lby_mode = UI.GetValue(js_items, "LBY Mode");
    script_config.legitaa_juke_active = UI.IsHotkeyActive(js_items, "Legit AA juke");
    script_config.indicator_picks = UI.GetValue(js_items, "Semirage assist indicators");
    script_config.trashtalk = UI.GetValue(js_items, "Trashtalk");
}

var last_script_enabled_state = -1; //Force the script to update the visibility on load
function handle_visibility()
{
    if(!UI.IsMenuOpen())
    {
        return; //What's the point of handling menu visibility if the damn thing isn't even visible?
    }  
    if(script_config.script_active != last_script_enabled_state)
    {
        UI.SetEnabled(js_items, "Autowall", script_config.script_active);
        UI.SetEnabled(js_items, "Default mode (no autowall key)", script_config.script_active);
       
        UI.SetEnabled(js_items, "Enable legit AA", script_config.script_active);
        UI.SetEnabled(js_items, "LBY Mode", script_config.script_active && script_config.legitaa_active);
        UI.SetEnabled(js_items, "Legit AA juke", script_config.script_active && script_config.legitaa_active);

        UI.SetEnabled(js_items, "Semirage assist indicators", script_config.script_active);
        UI.SetEnabled(js_items, "Trashtalk", script_config.script_active);

        last_script_enabled_state = script_config.script_active;
    }
}

handle_visibility();

var local = 0;

function handle_autowall()
{
    var local_eyepos = Entity.GetEyePosition(local);
    var enemies = Entity.GetEnemies();
    var enemy_arr_length = enemies.length;

    for(var i = 0; i < enemy_arr_length; i++)
    {
        if(Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i]))
        {
            var vis_length = 0;
            for(var j = 0; j <= 18; j++)
            {
                if(script_config.autowall_mode == 0 && vis_length > 0)
                {
                    break;
                }
                var hitbox = Entity.GetHitboxPosition(enemies[i], j);
                if(typeof(hitbox) == "undefined") //sometimes happens l0l
                {
                    Cheat.Print("hitbox " + j + " was undefined on player " + Entity.GetName(enemies[i]) + "\n");
                    continue;
                }
                var trace = Trace.Bullet(local, enemies[i], local_eyepos, hitbox);
                if(trace[2])
                {
                   vis_length++;
                }
            }
            if(script_config.autowall_mode == 1 ? vis_length < 14 : vis_length == 0) //Ghetto AF
            {
                Ragebot.IgnoreTarget(enemies[i]);
            }
        }
    }
}

function handle_legitaa()
{
    if(script_config.script_active && script_config.legitaa_active)
    {
        AntiAim.SetOverride(1);
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0);
        UI.SetValue("Anti-Aim", "Extra", "Pitch", 0);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", 1);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180);
        var fake_side = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter");
        //I far prefer doing legit AA this way l0l + it lets us do the juke meme
        var local_velocity = Entity.GetProp(local, "CBasePlayer", "m_vecVelocity[0]");
        var local_velocity_length = Math.sqrt(local_velocity[0] ** 2 + local_velocity[1] ** 2);
        var should_juke = script_config.legitaa_juke_active && local_velocity_length < 3.5;
        var real_yaw_offset = fake_side == 1 ? 60 : -60;
        var lowerbody_offset = script_config.legitaa_lby_mode ? (fake_side == 1 ? (should_juke ? 100 : -100) : (should_juke ? -100 : 100)) : 0;
        AntiAim.SetRealOffset(real_yaw_offset);
        AntiAim.SetLBYOffset(lowerbody_offset);
    }
    else if(!script_config.legitaa_active)
    {
        AntiAim.SetOverride(0);
    }
}

function handle_indicators()
{
    if(script_config.script_active && script_config.indicator_picks && Entity.IsValid(local) && Entity.IsAlive(local))
    {
        var screensize = Render.GetScreenSize();

        var fake_yaw = Local.GetFakeYaw();
        var real_yaw = Local.GetRealYaw();

        var difference = fake_yaw - real_yaw; //i could implement anglediff as a wholly new fn but i cant be arsed, its used like once
        difference %= 360;
        if(difference > 180)
        {
            difference -= 360;
        }

        var base_yaw = screensize[1] * 0.7;
        if(script_config.indicator_picks & (1 << 0))
        {
            var string_size = Render.TextSize("Ragebot: ", 1);
            Render.String(15, base_yaw, 0, "Ragebot: ", [255, 255, 255, 255], 1);
            Render.String(15 + string_size[0], base_yaw, 0, (script_config.rbot_active ? "ON" : "OFF"), (script_config.rbot_active ? [0, 255, 0, 255] : [255, 0, 0, 255]), 1);
            base_yaw += 15;
        }
        if(script_config.indicator_picks & (1 << 1))
        {
            var string_size = Render.TextSize("Autowall: ", 1);
            Render.String(15, base_yaw, 0, "Autowall: " , [255, 255, 255, 255], 1);
            Render.String(15 + string_size[0], base_yaw, 0, (script_config.autowall_active ? "ON" : (script_config.autowall_mode == 0 ? "LEGIT" : "OFF")), (script_config.autowall_active ? [0, 255, 0, 255] : (script_config.autowall_mode == 0 ? [232, 216, 35, 255] : [255, 0, 0, 255])), 1);
            base_yaw += 15;
        }
        if(script_config.indicator_picks & (1 << 2))
        {
            var string_size = Render.TextSize("Legit AA: ", 1);
            Render.String(15, base_yaw, 0, "Legit AA: ", [255, 255, 255, 255], 1);
            Render.String(15 + string_size[0], base_yaw, 0, (script_config.legitaa_active ? (("ON" + (", fake delta: ") + Math.round(difference)) + (script_config.legitaa_juke_active ? " (in juke)" : "")) : "OFF"), (script_config.legitaa_active ? (script_config.legitaa_juke_active ? [150, 35, 232, 255] : [0, 255, 0, 255]) : [255, 0, 0, 255]), 1);
            base_yaw += 15;
        }
        if(script_config.indicator_picks & (1 << 3))
        {
            var string_size = Render.TextSize("Choke: ", 1);
            var choked_fl_ticks = Math.max(0, Math.min(Math.floor((Globals.Curtime() - Entity.GetProp(local, "CBaseEntity", "m_flSimulationTime")) / Globals.TickInterval(), 16))); //could have implemented a clamping fn, but who cares tbqh
            var cool_representation = "";
            for(var i = 0; i < choked_fl_ticks; i++)
            {
                cool_representation += "/";
            }
            Render.String(15, base_yaw, 0, "Choke: " + cool_representation, [255, 255, 255, 255], 1);
            Render.String(15 + string_size[0], base_yaw, 0, cool_representation, [0, 255, 0, 255], 1);
            base_yaw += 15;
        }
        if(script_config.indicator_picks & (1 << 4))
        {
            var string_size = Render.TextSize("Inaccuracy: ", 1);
            var inaccuracy = Local.GetInaccuracy();
            if(inaccuracy == 0)
            {
                inaccuracy = 0.001;
            }
            var inaccuracy_text = 1 / inaccuracy < 50 ? "High" : "Low";
            Render.String(15, base_yaw, 0, "Inaccuracy: ", [255, 255, 255, 255], 1);
            Render.String(15 + string_size[0], base_yaw, 0, inaccuracy_text, (inaccuracy_text == "Low" ? [0, 255, 0, 255] : [255, 0, 0, 255]));
        }
    }
}


function on_move()
{
    local = Entity.GetLocalPlayer();
    if(script_config.script_active)
    {
        if(script_config.rbot_active && !script_config.autowall_active)
        {
            handle_autowall();
        }
        handle_legitaa();
    }
}

function on_draw()
{
    update_settings();
    handle_visibility();
    handle_indicators();
}

//Gay killsay territory
var normal_killsays = ["ez", "too fucking easy", "effortless", "easiest kill of my life",
    "retard blasted", "cleans?", "а вы че клины???", "обоссал мемюзера лол", "ты че там отлетел то",
    "pounce out of your window disgusting tranny, you shouldnt exist in this world",
    "lmao ur so ugly irl like bro doesnt it hurt to live like that, btw you know you can just end it all"];
   
    var hs_killsays = ["ez", "effortless", "1", "nice antiaim, you sell?", "you pay for that?",
    "refund right now", "consider suicide", "bro are u clean?", "ебать тебя унесло", "рефандни пожалуйста",
    "на бутылку русак", "another retard blasted",
    "hhhhhhhhhhhhhhhhhh 1, you pay for that? refund so maybe youll afford some food for your family thirdworld monkey",
    "paster abandoned the match and received a 7 day competitive matchmaking cooldown",
    "freeqn.net/refund.php", "refund your rainbowhook right now pasteuser dog",
    "1 but all you need to fix your problems is a rope and a chair you ugly shit",
    "a вы (you) сэр собственно кто (who)?"];

    var awall_killsays = ["ez", "effortless", "sorry for awall bro",
    "get autoballed monkey",
    "too ez", "legit wallbang", "my awall > your awall", "1 hhhh", "бля случайно аволл прожал",
    "sorry i held down my awall key bro", "thats going in my media compilation right there get shamed retard rofl",
    "нищий отлетел от супериор аволла лол рефни"];

//I hope you haven't gotten cancer after reading those

function on_player_death()
{
    if(script_config.trashtalk)
    {
        var victim = Entity.GetEntityFromUserID(Event.GetInt("userid"));
        var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
        var headshot = Event.GetInt("headshot") == 1;
        var autowalled = Event.GetInt("penetrated");
       
        if(attacker == local && attacker != victim)
        {
            var normal_say = normal_killsays[Math.floor(Math.random() * normal_killsays.length)];
            var hs_say = hs_killsays[Math.floor(Math.random() * hs_killsays.length)];
            var awall_say = awall_killsays[Math.floor(Math.random() * awall_killsays.length)];
           
            if(headshot && Math.floor(Math.random() * 3) <= 2) //gamer style randomizer
            {
                Cheat.ExecuteCommand("say " + hs_say);
                return;
            }
            if(autowalled && Math.floor(Math.random() * 3) <= 2)
            {
                Cheat.ExecuteCommand("say " + awall_say);
                return;
            }
            Cheat.ExecuteCommand("say " + normal_say);
        }
    }
}

Cheat.RegisterCallback("player_death", "on_player_death");
Cheat.RegisterCallback("CreateMove", "on_move");
Cheat.RegisterCallback("Draw", "on_draw");