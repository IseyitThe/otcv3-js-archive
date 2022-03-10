var js_items = ["Misc", "JAVASCRIPT", "Script Items"];
var fakelag_conditions = ["Generic", "Standing", "Moving", "Slowwalking", "Aerial"]; //I use those way too much, so might as well move them here to avoid typing that much bullshit
var fakelag_modes = ["Passive", "Step", "Jitter", "Ping-pong"];

function vec_length_2d(vec)
{
    return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
}

function setup_menu() //far too much of a pita to do that many items without a special func tbqh
{
    UI.AddCheckbox("Enable modified fakelag");
    UI.AddMultiDropdown("Fakelag conditions", fakelag_conditions);
    UI.AddDropdown("Currently configured fakelag condition", fakelag_conditions);
    for(var i = 0; i <= 4; i++)
    {
        UI.AddDropdown("Fakelag mode for " + fakelag_conditions[i].toLowerCase() + " condition", fakelag_modes);
        UI.SetEnabled("Fakelag mode for " + fakelag_conditions[i].toLowerCase() + " condition", false);

        UI.AddSliderInt(fakelag_conditions[i] + " passive limit", 1, 16);
        UI.AddSliderInt(fakelag_conditions[i] + " passive jitter", 1, 100);

        UI.SetEnabled(js_items, fakelag_conditions[i] + " passive limit", false);
        UI.SetEnabled(js_items, fakelag_conditions[i] + " passive jitter", false);

        UI.AddSliderInt(fakelag_conditions[i] + " step", 1, 16); //I have no idea what this will do if "Maximum step" is set to less than "Step", it will probably reset and start over again every simtime update.
        UI.AddSliderInt(fakelag_conditions[i] + " maximum step", 1, 16);

        UI.SetEnabled(js_items, fakelag_conditions[i] + " step", false);
        UI.SetEnabled(js_items, fakelag_conditions[i] + " maximum step", false);

        UI.AddSliderInt(fakelag_conditions[i] + " jitter minimum", 1, 16);
        UI.AddSliderInt(fakelag_conditions[i] + " jitter maximum", 1, 16);

        UI.SetEnabled(js_items, fakelag_conditions[i] + " jitter minimum", false);
        UI.SetEnabled(js_items, fakelag_conditions[i] + " jitter maximum", false);
      
        UI.AddSliderInt(fakelag_conditions[i] + " ping-pong minimum", 1, 16);
        UI.AddSliderInt(fakelag_conditions[i] + " ping-pong maximum", 1, 16);

        UI.SetEnabled(js_items, fakelag_conditions[i] + " ping-pong minimum", false);
        UI.SetEnabled(js_items, fakelag_conditions[i] + " ping-pong maximum", false);
    }
    UI.SetEnabled(js_items, "Fakelag conditions", false);
    UI.SetEnabled(js_items, "Currently configured fakelag condition", false);
}

setup_menu();

function handle_visibility()
{
    var is_script_enabled = UI.GetValue(js_items, "Enable modified fakelag");
    UI.SetEnabled(js_items, "Fakelag conditions", is_script_enabled);
    var script_flags = UI.GetValue(js_items, "Fakelag conditions"); //If no flag for the mode is present, why bother setting things visible?
    UI.SetValue(js_items, "Fakelag conditions", script_flags |= (1 << 0)); //Generic is always picked, regardless of user choice because I don't wish to hear complaints on OT forums about "RRRREEEEEE WHY SCRIPT NO WORK" when there are no conditions selected
    var enabled_flag_array = [script_flags & (1 << 0), script_flags & (1 << 1), script_flags & (1 << 2), script_flags & (1 << 3), script_flags & (1 << 4)];

    UI.SetEnabled(js_items, "Currently configured fakelag condition", is_script_enabled);
    var currently_configured_fl_condition = UI.GetValue(js_items, "Currently configured fakelag condition");

    for(var i = 0; i <= 4; i++)
    {
        UI.SetEnabled(js_items, "Fakelag mode for " + fakelag_conditions[i].toLowerCase() + " condition", i == currently_configured_fl_condition && enabled_flag_array[i] && is_script_enabled);
        var fl_mode_for_condition = UI.GetValue(js_items, "Fakelag mode for " + fakelag_conditions[i].toLowerCase() + " condition");
        UI.SetEnabled(js_items, fakelag_conditions[i] + " passive limit", i == currently_configured_fl_condition && fl_mode_for_condition == 0 && enabled_flag_array[i] && is_script_enabled);
        UI.SetEnabled(js_items, fakelag_conditions[i] + " passive jitter", i == currently_configured_fl_condition && fl_mode_for_condition == 0 && enabled_flag_array[i] && is_script_enabled);
        UI.SetEnabled(js_items, fakelag_conditions[i] + " step", i == currently_configured_fl_condition && fl_mode_for_condition == 1 && enabled_flag_array[i] && is_script_enabled);
        UI.SetEnabled(js_items, fakelag_conditions[i] + " maximum step", i == currently_configured_fl_condition && fl_mode_for_condition == 1 && enabled_flag_array[i] && is_script_enabled);
        UI.SetEnabled(js_items, fakelag_conditions[i] + " jitter minimum", i == currently_configured_fl_condition && fl_mode_for_condition == 2 && enabled_flag_array[i] && is_script_enabled);
        UI.SetEnabled(js_items, fakelag_conditions[i] + " jitter maximum", i == currently_configured_fl_condition && fl_mode_for_condition == 2 && enabled_flag_array[i] && is_script_enabled);
        UI.SetEnabled(js_items, fakelag_conditions[i] + " ping-pong minimum", i == currently_configured_fl_condition && fl_mode_for_condition == 3 && enabled_flag_array[i] && is_script_enabled);
        UI.SetEnabled(js_items, fakelag_conditions[i] + " ping-pong maximum", i == currently_configured_fl_condition && fl_mode_for_condition == 3 && enabled_flag_array[i] && is_script_enabled);
    }
}

function get_condition(local) //code is retarded, but it works, so who honestly cares?
{
    var local_flags = Entity.GetProp(local, "CBasePlayer", "m_fFlags");
    var local_velocity = Entity.GetProp(local, "CBasePlayer", "m_vecVelocity[0]");
    var local_vel_length = vec_length_2d(local_velocity);
    var slowwalk_toggled = UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk") && local_vel_length > 3.5; //Just in case.
    var script_flags = UI.GetValue(js_items, "Fakelag conditions");

    if(!(local_flags & (1 << 0))) //if we are not on ground (for the people who dont remember player flags by heart)
    {
        return script_flags & (1 << 4) ? 4 : 0; //if script flag is set, return aerial, else return generic
    } //could be improved into returning moving if that flag is active?

    if(slowwalk_toggled)
    {
        return script_flags & (1 << 3) ? 3 : 0; //obviously
    } //can be improved in the same way as the latter

    if(local_vel_length > 3.5)
    {
        return script_flags & (1 << 2) ? 2 : 0; //easy enough to understand aswell, 3.5 cause sometimes local vel seems to get fucked up lol (idk why, might be due to my inability to code)
    }
    else
    {
        return script_flags & (1 << 1) ? 1 : 0;
    }

    return 0;
}

function get_fl_data_based_on_conditions(local)
{
    var condition = get_condition(local);
    var fl_data = {fl_mode: 0, min_lag: 0, max_lag: 1}; //Passive will place its lag amount into min_lag and jitter into max_lag (Can't be arsed to make anything separate for passive)
    fl_data.fl_mode = UI.GetValue(js_items, "Fakelag mode for " + fakelag_conditions[condition].toLowerCase() + " condition")
    switch(fl_data.fl_mode)
    {
        case 0:
            fl_data.min_lag = UI.GetValue(js_items, fakelag_conditions[condition] + " passive limit");
            fl_data.max_lag = UI.GetValue(js_items, fakelag_conditions[condition] + " passive jitter");
            break;
        case 1:
            fl_data.min_lag = UI.GetValue(js_items, fakelag_conditions[condition] + " step");
            fl_data.max_lag = UI.GetValue(js_items, fakelag_conditions[condition] + " maximum step");
            break;
        case 2:
            fl_data.min_lag = UI.GetValue(js_items, fakelag_conditions[condition] + " jitter minimum");
            fl_data.max_lag = UI.GetValue(js_items, fakelag_conditions[condition] + " jitter maximum");
            break;
        case 3:
            fl_data.min_lag = UI.GetValue(js_items, fakelag_conditions[condition] + " ping-pong minimum");
            fl_data.max_lag = UI.GetValue(js_items, fakelag_conditions[condition] + " ping-pong maximum");
            break;
    }
    return fl_data;
}

function clamp(val, min, max)
{
    return Math.max(min,Math.min(max,val));
}

function random_int(min, max)
{
    return Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min) + 1)) + Math.floor(min);
}

var old_simtime = 0.0;

function handle_fakelag()
{
    handle_visibility(); //Could separate that into another callback?
    if(UI.GetValue(js_items, "Enable modified fakelag") && World.GetServerString() != "")
    {
        var local = Entity.GetLocalPlayer();
        if(Entity.IsValid(local) && Entity.IsAlive(local))
        {
            UI.SetValue("Anti-Aim", "Fake-Lag", "Triggers", 0); //Triggers may interfere with the script's work, so I'll just set them to zero for the meantime. Could restore them if script is disabled/unloaded?
            var fl_data = get_fl_data_based_on_conditions(local);
            var local_current_simtime = Entity.GetProp(local, "DT_BaseEntity", "m_flSimulationTime");
            var current_fakelag_amt = UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");
            if(fl_data.fl_mode == 0)
            {
                UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", fl_data.min_lag);
                UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", fl_data.max_lag);
                return;
            }
            else
            {
                UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 0); // I don't know how that will interfere with the script's own fakelag modes, so better disable it?
            }
            if(local_current_simtime != old_simtime)
            {
                var proper_fl_amt = 0;
                old_simtime = local_current_simtime;
                switch(fl_data.fl_mode)
                {
                case 1: //Steps in step sizes you have set up to maximum amount you set on simulation time updates, then sets fakelag to 0 and starts over again.
                    if(current_fakelag_amt >= fl_data.max_lag)
                    {
                        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 0);
                        break;
                    }
                    proper_fl_amt = current_fakelag_amt + fl_data.min_lag;
                    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", clamp(proper_fl_amt, 0, fl_data.max_lag));
                    break;
                case 2: //Not really a "jitter" and probably useless, sets fakelag to a random integer between min and max amounts every simulation time update.
                    proper_fl_amt = random_int(fl_data.min_lag, fl_data.max_lag);
                    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", proper_fl_amt);
                    break;
                case 3:  //Switches between minimum and maximum fakelag every simulation time update.
                    proper_fl_amt = fl_data.min_lag == current_fakelag_amt ? fl_data.max_lag : fl_data.min_lag;
                    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", proper_fl_amt);
                    break;
                }
            }
        }
    }
}
Cheat.RegisterCallback("Draw", "handle_fakelag"); //Why not do it in Draw, I guess? Doesn't really make a difference anyway.