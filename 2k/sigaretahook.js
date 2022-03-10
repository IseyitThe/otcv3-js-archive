

const menu = 
{
    menu_types: 
    {
        TYPE_VALUE: 0,
        TYPE_COLOR: 1,
        TYPE_KEYBIND: 2,
        TYPE_REFERENCE: 3
    },

    menu_array: [], 

  
    create_checkbox: function(created_var_name)
    {
        UI.AddCheckbox(created_var_name);
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: created_var_name, is_item_visible: true}) - 1;
    },

    create_slider_int: function(created_var_name, created_var_min, created_var_max)
    {
        UI.AddSliderInt(created_var_name, created_var_min, created_var_max);
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: created_var_name, is_item_visible: true}) - 1;
    },

    create_slider_float: function(created_var_name, created_var_min, created_var_max)
    {
        UI.AddSliderFloat(created_var_name, created_var_min, created_var_max);
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: created_var_name, is_item_visible: true}) - 1;
    },

    create_dropdown: function(created_var_name, created_var_dropdown_array)
    {
        UI.AddDropdown(created_var_name, created_var_dropdown_array);
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: created_var_name, is_item_visible: true}) - 1;
    },

    create_multi_dropdown: function(created_var_name, created_var_dropdown_array)
    {
        UI.AddMultiDropdown(created_var_name, created_var_dropdown_array);
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: created_var_name, is_item_visible: true}) - 1;
    },

    create_colorpicker: function(created_var_name)
    {
        UI.AddColorPicker(created_var_name);
        return this.menu_array.push({type: this.menu_types.TYPE_COLOR, var_name: created_var_name, is_item_visible: true}) - 1;
    },

    create_keybind: function(created_var_name)
    {
        UI.AddHotkey(created_var_name);
        return this.menu_array.push({type: this.menu_types.TYPE_KEYBIND, var_name: created_var_name, is_item_visible: true}) - 1;
    },

    create_menu_reference: function(var_path, var_type)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_REFERENCE, var_name: var_path, is_item_visible: true, reference_subtype: var_type}) - 1;
    },

    get_item_value: function(var_index)
    {
        if(typeof(this.menu_array[var_index]) != "undefined")
        {
            switch(this.menu_array[var_index].type)
            {
                case this.menu_types.TYPE_VALUE:
                    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", this.menu_array[var_index].var_name);
                case this.menu_types.TYPE_COLOR:
                    return UI.GetColor("Misc", "JAVASCRIPT", "Script items", this.menu_array[var_index].var_name);
                case this.menu_types.TYPE_KEYBIND:
                    return UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", this.menu_array[var_index].var_name);
                case this.menu_types.TYPE_REFERENCE:
                    switch(this.menu_array[var_index].reference_subtype)
                    { 
                        case this.menu_types.TYPE_VALUE:
                            return UI.GetValue.apply(null, this.menu_array[var_index].var_name); 
                        case this.menu_types.TYPE_COLOR:
                            return UI.GetColor.apply(null, this.menu_array[var_index].var_name);
                        case this.menu_types.TYPE_KEYBIND:


                            return UI.IsHotkeyActive.apply(null, this.menu_array[var_index].var_name);
                        default:
                            
                    }
                default:
                    
            }
        }
        throw new Error("[onetap] invalid menu item specified for get_item_value, item index " + var_index + "\n");
    },

    set_item_visibility: function(var_index, visibility_status)
    {
        if(typeof(this.menu_array[var_index]) != "undefined")
        {
            if(this.menu_array[var_index].is_item_visible != visibility_status && UI.IsMenuOpen())
            {
                switch(this.menu_array[var_index].type)
                {
                    case this.menu_types.TYPE_REFERENCE:
                        const temporary_argument_arr = this.menu_array[var_index].var_name;
                        temporary_argument_arr.push(visibility_status); 
                        UI.SetEnabled.apply(null, temporary_argument_arr);
                        break;
                    default:
                        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", this.menu_array[var_index].var_name, visibility_status);
                }
                this.menu_array[var_index].is_item_visible = visibility_status;
            }
        }
        else
        {
            throw new Error("[onetap] invalid menu item specified for set_item_visibility\n");
        }
    },

    set_item_value: function(var_index, new_value)
    {
        if(typeof(this.menu_array[var_index]) != "undefined")
        {
            switch(this.menu_array[var_index].type)
            {
                case this.menu_types.TYPE_VALUE:
                    UI.SetValue("Misc", "JAVASCRIPT", "Script items", this.menu_array[var_index].var_name, new_value);
                    break;
                case this.menu_types.TYPE_COLOR:
                    UI.SetColor("Misc", "JAVASCRIPT", "Script items", this.menu_array[var_index].var_name, new_value);
                    break;
                case this.menu_types.TYPE_REFERENCE:
                    const temporary_argument_arr = this.menu_array[var_index].var_name.concat(new_value);
                    
                    switch(this.menu_array[var_index].reference_subtype)
                    {
                        case this.menu_types.TYPE_VALUE:
                            UI.SetValue.apply(null, temporary_argument_arr);
                            break;
                        case this.menu_types.TYPE_COLOR:
                            UI.SetColor.apply(null, temporary_argument_arr);
                            break;
                        default: 
                            throw new Error("[onetap] invalid type specified for set_item_value for reference call (variable name " + menu_array[var_index].var_name + ", specified type: " + this.menu_array[var_index].reference_subtype + ")\n");
                    }
                    break;
                default:
                    throw new Error("[onetap] invalid type specified for set_item_value (variable name " + menu_array[var_index].var_name + ", specified type: " + this.menu_array[var_index].type + ")\n");
            }
        }
        else
        {
            throw new Error("[onetap] invalid menu item specified for set_item_value\n");
        }
    }
};

const setup_helpers = 
{
    weapon_types: ["Pistol", "Heavy pistol", "Rifle", "SMG", "Heavy", "SSG 08", "AWP", "Autosniper"],
    weapon_types_cfg: ["pistol", "heavy_pistol", "rifle", "smg", "heavy", "ssg08", "awp", "autosniper"],
    ragebot_weapon_types: ["GENERAL", "PISTOL", "HEAVY PISTOL", "SCOUT", "AWP", "AUTOSNIPER"],
    ragebot_weapon_types_2: ["General", "Pistol", "Heavy pistol", "Scout", "AWP", "Auto"],
    ragebot_internal_weapon_types: ["general", "pistol", "heavy_pistol", "ssg08", "awp", "auto"],
    hitboxes: ["Head", "Upper chest", "Chest", "Lower chest", "Stomach", "Pelvis"],
    autowall_modes: ["No autowall", "Legit autowall", "Autowall"],
    autowall_triggers: ["In autowall FOV", "Peeking"], 
};

const menu_items = 
{
    script_items:
    {
        setup_menu_items: function()
        {
            
            
            menu_items.script_items.master_switch = menu.create_checkbox("sigaretahook");
            
            menu_items.script_items.currently_configured_items = menu.create_dropdown("Settings tab", ["Autofire", "AntiAim", "Misc"]);
            menu_items.script_items.currently_selected_configured_weapon = menu.create_dropdown("Configured weapon group", setup_helpers.weapon_types);

            for(var i = 0; i <= 7; i++) 
            {
                const required_weapon_string = setup_helpers.weapon_types[i];
                const required_weapon_cfg_string = setup_helpers.weapon_types_cfg[i];

                menu_items.script_items[required_weapon_cfg_string + "_current_config_setup"] = menu.create_dropdown("Current " + (i == 5 || i == 6 ? required_weapon_string : required_weapon_string.toLowerCase()) + " configuration", ["Rage"]);
                menu_items.script_items[required_weapon_cfg_string + "_dynamic_fov_min"] = menu.create_slider_int(required_weapon_string + " minimum FOV", 0, 180);
                menu_items.script_items[required_weapon_cfg_string + "_dynamic_fov_max"] = menu.create_slider_int(required_weapon_string + " maximum FOV", 0, 180);

                

                menu_items.script_items[required_weapon_cfg_string + "_legitbot_hitboxes"] = menu.create_multi_dropdown(required_weapon_string + " hitboxes", setup_helpers.hitboxes);
                menu_items.script_items[required_weapon_cfg_string + "_legitbot_static_fov"] = menu.create_slider_float(required_weapon_string + " FOV", 0.1, 180);
                menu_items.script_items[required_weapon_cfg_string + "_use_dynamic_legitbot_fov"] = menu.create_checkbox("Use " + (i == 5 || i == 6 ? required_weapon_string : required_weapon_string.toLowerCase()) + " dynamic FOV");

                menu_items.script_items[required_weapon_cfg_string + "_legitbot_dynamic_fov_min"] = menu.create_slider_float(required_weapon_string + " FOV minimum", 0.1, 180);
                menu_items.script_items[required_weapon_cfg_string + "_legitbot_dynamic_fov_max"] = menu.create_slider_float(required_weapon_string + " FOV maximum", 0.1, 180);

                menu_items.script_items[required_weapon_cfg_string + "_use_silent_fov"] = menu.create_checkbox("Use silent FOV for " + (i == 5 || i == 6 ? required_weapon_string : required_weapon_string.toLowerCase().concat("s")));
                menu_items.script_items[required_weapon_cfg_string + "_silent_fov"] = menu.create_slider_float(required_weapon_string + " silent FOV", 0.1, 10);

                menu_items.script_items[required_weapon_cfg_string + "_smoothing"] = menu.create_slider_float(required_weapon_string + " smoothing", 1, 10);
                menu_items.script_items[required_weapon_cfg_string + "_shot_delay"] = menu.create_slider_int(required_weapon_string + " shot delay (ms)", 0, 1000);
                menu_items.script_items[required_weapon_cfg_string + "_kill_delay"] = menu.create_slider_int(required_weapon_string + " kill delay (ms)", 0, 1000);

                menu_items.script_items[required_weapon_cfg_string + "_rcs_pitch"] = menu.create_slider_float(required_weapon_string + " RCS (pitch)", 0, 2);
                menu_items.script_items[required_weapon_cfg_string + "_rcs_yaw"] = menu.create_slider_float(required_weapon_string + " RCS (yaw)", 0, 2);

                menu_items.script_items[required_weapon_cfg_string + "_legitbot_mindmg"] = menu.create_slider_int(required_weapon_string + " minimum damage", 1, 100);
            }

            menu_items.script_items.legitaa_master_switch = menu.create_checkbox("Enable antiaim");
           
            menu_items.script_items.breakaa = menu.create_checkbox("sigaretahook aa");
            menu_items.script_items.jitterslow = menu.create_checkbox("JITTER ON SLOWWALK");

            menu_items.script_items.lbyaa = menu.create_checkbox("LBY aa");
            menu_items.script_items.centeredaa = menu.create_checkbox("CENTERED aa");
            menu_items.script_items.jitteraa = menu.create_checkbox("JITTER aa");
            menu_items.script_items.staticaa = menu.create_checkbox("STATIC aa");
            
            menu_items.script_items.antibrute = menu.create_dropdown("Anti Bruteforce", ["Off", "On miss"]);
            
    
            
    
            
            
            menu_items.script_items.rbot_shotlogs = menu.create_checkbox("Ragebot logs");
            menu_items.script_items.killsays = menu.create_checkbox("Trashtalk");
            menu_items.script_items.BuyLogs = menu.create_checkbox("Buy logs");
            menu_items.script_items.onVoteOptions = menu.create_checkbox("Vote revealer");
            
            menu_items.script_items.ali = menu.create_checkbox("Autowall Key");
            menu_items.script_items.allauto = menu.create_keybind("Autowall on key");

            menu_items.script_items.dmg = menu.create_keybind("Mindmg override");
            menu_items.script_items.scoutdmg = menu.create_slider_int("Scout Mindmg", 0, 130);
            menu_items.script_items.awpdmg = menu.create_slider_int("AWP Mindmg", 0, 130);
            menu_items.script_items.autodmg = menu.create_slider_int("Auto Mindmg", 0, 130);
            menu_items.script_items.heavydmg = menu.create_slider_int("Heavy Pistol Mindmg", 0, 130);
            
            
            menu_items.script_items.rainbowColors = menu.create_checkbox("Antiaim arrow");
            menu_items.script_items.getColor = menu.create_colorpicker("Arrow color");

            menu_items.script_items.aaindicator = menu.create_checkbox("Antiaim arrow 2");
            menu_items.script_items.aaindicatorcolor = menu.create_colorpicker("Arrow color 2");

            menu_items.script_items.rhookindicators = menu.create_checkbox("Antiaim arrow 3");
            menu_items.script_items.rhookindicatorscolor= menu.create_colorpicker("Arrow color 3");

            menu_items.script_items.watermark = menu.create_checkbox("Watermark");
            menu_items.script_items.watermarkcolor = menu.create_colorpicker("Watermark color");
            menu_items.script_items.draw_timer = menu.create_checkbox("Indicators");
            menu_items.script_items.fakecircle = menu.create_checkbox("Fake circle");
            menu_items.script_items.yoffset = menu.create_slider_int("Indicators Y offset", 580, 1200);
            menu_items.script_items.indicatorscolor = menu.create_colorpicker("Indicators color");

            menu_items.script_items.keybinds = menu.create_checkbox("Keybinds indicator");
            const x1 = menu_items.script_items.keyx = menu.create_slider_int("Keybinds X offset", 0, Global.GetScreenSize()[0]);
            const y1 = menu_items.script_items.keyy = menu.create_slider_int("Keybinds Y offset", 0, Global.GetScreenSize()[1]);
            menu_items.script_items.keybindscolor = menu.create_colorpicker("Keybinds indicator color");

            menu_items.script_items.clantag = menu.create_dropdown("Clantag spammer", [ "off", "sigaretahook"]);
            
            
        }
    }, 

    references:
    {
        setup_references: function()
        {
            this.ragebot_enabled_hotkey_reference = menu.create_menu_reference(["Rage", "General", "Enabled"], menu.menu_types.TYPE_KEYBIND);
            this.ragebot_resolver_hotkey_reference = menu.create_menu_reference(["Rage", "General", "Resolver override"], menu.menu_types.TYPE_KEYBIND);
            this.ragebot_bodyaim_hotkey_reference = menu.create_menu_reference(["Rage", "General", "Force body aim"], menu.menu_types.TYPE_KEYBIND);
            this.ragebot_safepoint_hotkey_reference = menu.create_menu_reference(["Rage", "General", "Force safe point"], menu.menu_types.TYPE_KEYBIND);

            this.restrictions_reference = menu.create_menu_reference(["Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions"], menu.menu_types.TYPE_VALUE);

            this.antiaim_enabled_reference = menu.create_menu_reference(["Anti-Aim", "Rage Anti-Aim", "Enabled"], menu.menu_types.TYPE_VALUE);
            this.antiaim_yaw_offset_reference = menu.create_menu_reference(["Anti-Aim", "Rage Anti-Aim", "Yaw offset"], menu.menu_types.TYPE_VALUE);
            this.antiaim_inverter_reference = menu.create_menu_reference(["Anti-Aim", "Fake angles", "Inverter"], menu.menu_types.TYPE_KEYBIND);
            this.antiaim_pitch_reference = menu.create_menu_reference(["Anti-Aim", "Extra", "Pitch"], menu.menu_types.TYPE_VALUE);

            for(var i = 0; i <= 5; i++)
            {
                const current_ragebot_weapongroup_string = setup_helpers.ragebot_weapon_types[i];
                const current_ragebot_weapongroup_string_internal = setup_helpers.ragebot_internal_weapon_types[i];

                this["ragebot_" + current_ragebot_weapongroup_string_internal + "_autowall_reference"] = menu.create_menu_reference(["Rage", current_ragebot_weapongroup_string, (i == 0 ? "Targeting" : setup_helpers.ragebot_weapon_types_2[i] + " config"), "Disable autowall"], menu.menu_types.TYPE_VALUE);
                this["ragebot_" + current_ragebot_weapongroup_string_internal + "_fov_reference"] = menu.create_menu_reference(["Rage", current_ragebot_weapongroup_string, "Targeting", "FOV"], menu.menu_types.TYPE_VALUE);
                this["ragebot_" + current_ragebot_weapongroup_string_internal + "_prefer_baim_reference"] = menu.create_menu_reference(["Rage", current_ragebot_weapongroup_string, "Accuracy", "Prefer body aim"], menu.menu_types.TYPE_VALUE);
                this["ragebot_" + current_ragebot_weapongroup_string_internal + "_prefer_safepoint_reference"] = menu.create_menu_reference(["Rage", current_ragebot_weapongroup_string, "Accuracy", "Prefer safe point"], menu.menu_types.TYPE_VALUE);
            }
        }
    },

    handle_menu_item_visibility: function()
    {
        if(UI.IsMenuOpen())
        {
            const is_script_active = menu.get_item_value(menu_items.script_items.master_switch);
            const currently_configured_tab = menu.get_item_value(menu_items.script_items.currently_configured_items);
            const selected_weapon_group = menu.get_item_value(menu_items.script_items.currently_selected_configured_weapon);
            menu.set_item_visibility(menu_items.script_items.currently_configured_items, is_script_active);
            

            menu.set_item_visibility(menu_items.script_items.currently_selected_configured_weapon, is_script_active && currently_configured_tab == 0);
            
            for(var weapon_group = 0; weapon_group <= 7; weapon_group++)
            {
                const current_weapon_config_string = setup_helpers.weapon_types_cfg[weapon_group];
                const currently_opened_weapon_mode = menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_current_config_setup"]);

                

                const using_legitbot_dynamic_fov = menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_use_dynamic_legitbot_fov"]);
                const using_legitbot_silent_fov = menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_use_silent_fov"]);

                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_current_config_setup"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group);
                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_dynamic_fov_min"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 0);
                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_dynamic_fov_max"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 0);
                

                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_legitbot_hitboxes"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 1);
                
                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_use_dynamic_legitbot_fov"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 1);
                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_legitbot_static_fov"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 1 && !using_legitbot_dynamic_fov);
                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_legitbot_dynamic_fov_min"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 1 && using_legitbot_dynamic_fov);
                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_legitbot_dynamic_fov_max"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 1 && using_legitbot_dynamic_fov);

                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_use_silent_fov"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 1);
                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_silent_fov"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 1 && using_legitbot_silent_fov);
                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_smoothing"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 1);
                
                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_shot_delay"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 1);
                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_kill_delay"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 1);
                
                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_rcs_pitch"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 1);
                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_rcs_yaw"], is_script_active && currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 1);

                menu.set_item_visibility(menu_items.script_items[current_weapon_config_string + "_legitbot_mindmg"], is_script_active &&currently_configured_tab == 0 && selected_weapon_group == weapon_group && currently_opened_weapon_mode == 1);
            }
        }

        const legitaa_enabled = menu.get_item_value(menu_items.script_items.legitaa_master_switch);
        const arrow_enabled = menu.get_item_value(menu_items.script_items.rainbowColors);
        const ali_enabled = menu.get_item_value(menu_items.script_items.ali);
        const keybinds_enabled = menu.get_item_value(menu_items.script_items.keybinds);
        
        const indicators_enabled = menu.get_item_value(menu_items.script_items.draw_timer);
        const watermark_enabled = menu.get_item_value(menu_items.script_items.watermark);
        const aaindicator_enabled = menu.get_item_value(menu_items.script_items.aaindicator);
        const rhookindicators_enabled = menu.get_item_value(menu_items.script_items.rhookindicators);
        const sigaretahookaa_enabled = menu.get_item_value(menu_items.script_items.breakaa);
        menu.set_item_visibility(menu_items.script_items.legitaa_master_switch, is_script_active && currently_configured_tab == 1);
        menu.set_item_visibility(menu_items.script_items.lbyaa, is_script_active && currently_configured_tab == 1 && legitaa_enabled);
        menu.set_item_visibility(menu_items.script_items.breakaa, is_script_active && currently_configured_tab == 1 && legitaa_enabled);
        menu.set_item_visibility(menu_items.script_items.centeredaa, is_script_active && currently_configured_tab == 1 && legitaa_enabled);
        menu.set_item_visibility(menu_items.script_items.jitteraa, is_script_active && currently_configured_tab == 1 && legitaa_enabled);
        menu.set_item_visibility(menu_items.script_items.jitterslow, is_script_active && currently_configured_tab == 1 && legitaa_enabled && sigaretahookaa_enabled);
        menu.set_item_visibility(menu_items.script_items.staticaa, is_script_active && currently_configured_tab == 1 && legitaa_enabled) ;
        menu.set_item_visibility(menu_items.script_items.antibrute, is_script_active && currently_configured_tab == 1 && legitaa_enabled);
       
       

        
        

        

        

        menu.set_item_visibility(menu_items.script_items.rbot_shotlogs, is_script_active && currently_configured_tab == 2);
        menu.set_item_visibility(menu_items.script_items.killsays, is_script_active && currently_configured_tab == 2);
        menu.set_item_visibility(menu_items.script_items.BuyLogs, is_script_active && currently_configured_tab == 2);
        menu.set_item_visibility(menu_items.script_items.onVoteOptions, is_script_active && currently_configured_tab == 2);
        menu.set_item_visibility(menu_items.script_items.clantag, is_script_active && currently_configured_tab == 2);
        menu.set_item_visibility(menu_items.script_items.ali, is_script_active && currently_configured_tab == 0);
        menu.set_item_visibility(menu_items.script_items.allauto, is_script_active && currently_configured_tab == 0 && ali_enabled);
       
        menu.set_item_visibility(menu_items.script_items.dmg, is_script_active && currently_configured_tab == 0);
        menu.set_item_visibility(menu_items.script_items.scoutdmg, is_script_active && currently_configured_tab == 0);
        menu.set_item_visibility(menu_items.script_items.heavydmg, is_script_active && currently_configured_tab == 0);
        menu.set_item_visibility(menu_items.script_items.awpdmg, is_script_active && currently_configured_tab == 0);
        menu.set_item_visibility(menu_items.script_items.autodmg, is_script_active && currently_configured_tab == 0);
        
        menu.set_item_visibility(menu_items.script_items.rainbowColors, is_script_active && currently_configured_tab == 2);
        menu.set_item_visibility(menu_items.script_items.getColor, is_script_active && currently_configured_tab == 2 && arrow_enabled);
       
        menu.set_item_visibility(menu_items.script_items.aaindicator, is_script_active && currently_configured_tab == 2);
        menu.set_item_visibility(menu_items.script_items.aaindicatorcolor, is_script_active && currently_configured_tab == 2 && aaindicator_enabled);  
       
        menu.set_item_visibility(menu_items.script_items.rhookindicators, is_script_active && currently_configured_tab == 2);
        menu.set_item_visibility(menu_items.script_items.rhookindicatorscolor, is_script_active && currently_configured_tab == 2 && rhookindicators_enabled);  
        
        menu.set_item_visibility(menu_items.script_items.draw_timer, is_script_active && currently_configured_tab == 2 );
        menu.set_item_visibility(menu_items.script_items.indicatorscolor, is_script_active && currently_configured_tab == 2 && indicators_enabled );
        menu.set_item_visibility(menu_items.script_items.fakecircle, is_script_active && currently_configured_tab == 2 && indicators_enabled );
        menu.set_item_visibility(menu_items.script_items.yoffset, is_script_active && currently_configured_tab == 2 && indicators_enabled );
        menu.set_item_visibility(menu_items.script_items.watermark, is_script_active && currently_configured_tab == 2 );
        menu.set_item_visibility(menu_items.script_items.watermarkcolor, is_script_active && currently_configured_tab == 2 && watermark_enabled);

        menu.set_item_visibility(menu_items.script_items.keybinds, is_script_active && currently_configured_tab == 2 );
        menu.set_item_visibility(menu_items.script_items.keybindscolor, is_script_active && currently_configured_tab == 2 && keybinds_enabled);
        menu.set_item_visibility(menu_items.script_items.keyx, is_script_active && currently_configured_tab == 2 && keybinds_enabled);
        menu.set_item_visibility(menu_items.script_items.keyy, is_script_active && currently_configured_tab == 2 && keybinds_enabled);
    }
};

var on_script_setup = true;

const config = 
{
    weapon_settings: [],
    reference_states: [],

    update_reference_states: function()
    {
        if(utilities.global_variables.current_weapon_group_ragebot != -1)
        {
            const current_ragebot_weapongroup_string = setup_helpers.ragebot_internal_weapon_types[utilities.global_variables.current_weapon_group_ragebot];
            this.reference_states[utilities.global_variables.current_weapon_group_ragebot] = 
            {
                prefer_baim_state: menu.get_item_value(menu_items.references["ragebot_" + current_ragebot_weapongroup_string + "_prefer_baim_reference"]),
                prefer_safepoint_state: menu.get_item_value(menu_items.references["ragebot_" + current_ragebot_weapongroup_string + "_prefer_safepoint_reference"])
            };
        }
    },

    update_weapon_settings: function()
    {
        if(menu.get_item_value(menu_items.script_items.currently_configured_items) == 0 || on_script_setup)
        {
            for(var current_selected_weapon = 0; current_selected_weapon <= 7; current_selected_weapon++)
            {
                const current_weapon_config_string = setup_helpers.weapon_types_cfg[current_selected_weapon]; 
                this.weapon_settings[current_selected_weapon] =
                {
                    ragebot_dynamic_fov_min: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_dynamic_fov_min"]),
                    ragebot_dynamic_fov_max: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_dynamic_fov_max"]),
                    
                    

                    legitbot_allowed_hitboxes: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_legitbot_hitboxes"]),

                    legitbot_static_fov: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_legitbot_static_fov"]),
                    legitbot_should_use_dynamic_fov: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_use_dynamic_legitbot_fov"]),
                    legitbot_dynamic_fov_min: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_legitbot_dynamic_fov_min"]),
                    legitbot_dynamic_fov_max: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_legitbot_dynamic_fov_max"]),

                    legitbot_use_silent_fov: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_use_silent_fov"]),
                    legitbot_silent_fov: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_silent_fov"]),

                    legitbot_smoothing: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_smoothing"]),

                    legitbot_shot_delay: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_shot_delay"]),
                    legitbot_kill_delay: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_kill_delay"]),

                    legitbot_rcs_pitch: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_rcs_pitch"]),
                    legitbot_rcs_yaw: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_rcs_yaw"]),

                    legitbot_minimum_damage: menu.get_item_value(menu_items.script_items[current_weapon_config_string + "_legitbot_mindmg"])
                }
            }
        }
    },

    generic_settings:
    {},

    update_script_settings: function()
    {
        this.update_reference_states();

        
        this.generic_settings.ragebot_enabled_hotkey_reference = menu.get_item_value(menu_items.references.ragebot_enabled_hotkey_reference);
        this.generic_settings.ragebot_resolver_hotkey_reference = menu.get_item_value(menu_items.references.ragebot_resolver_hotkey_reference);
        this.generic_settings.ragebot_safepoint_hotkey_reference = menu.get_item_value(menu_items.references.ragebot_safepoint_hotkey_reference);
        this.generic_settings.ragebot_bodyaim_hotkey_reference = menu.get_item_value(menu_items.references.ragebot_bodyaim_hotkey_reference);
        

        if(UI.IsMenuOpen() || on_script_setup)
        {
            this.generic_settings.master_switch = menu.get_item_value(menu_items.script_items.master_switch);

            this.generic_settings.legitaa_master_switch = menu.get_item_value(menu_items.script_items.legitaa_master_switch);
            

           

          

            

            this.generic_settings.rbot_shotlogs = menu.get_item_value(menu_items.script_items.rbot_shotlogs);
            this.generic_settings.killsays = menu.get_item_value(menu_items.script_items.killsays);

            this.update_weapon_settings();
        }

        if(on_script_setup)
        {
            on_script_setup = false;
        }
    }
};

const math = 
{
    vector: 
    {
        add: function(a, b)
        {
            return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
        },

        sub: function(a, b)
        {
            return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
        },

        mul_fl: function(a, fl)
        {
            return [a[0] * fl, a[1] * fl, a[2] * fl];
        },

        div_fl: function(a, fl)
        {
            return [a[0] / fl, a[1] / fl, a[2] / fl];
        },

        length: function(a)
        {
            return Math.sqrt(a[0] ** 2 + a[1] ** 2 + a[2] ** 2);
        },

        angle_vector: function(ang)
        {
            const sp = Math.sin(math.angle.deg2rad(ang[0])), cp = Math.cos(math.angle.deg2rad(ang[0]));
            const sy = Math.sin(math.angle.deg2rad(ang[1])), cy = Math.cos(math.angle.deg2rad(ang[1]));
            return [cp * cy, cp * sy, -sp];
        }
    },

    angle: 
    {
        rad2deg: function(rad)
        {
            return rad * (180 / Math.PI);
        },

        deg2rad: function(deg)
        {
            return deg * (Math.PI / 180);
        },

        difference: function(angle1, angle2)
        {
            var diff = angle1 - angle2;
            diff %= 360;
            if(diff > 180)
            {
                diff -= 360;
            }
            if(diff < -180)
            {
                diff += 360;
            }
            return diff;
        },

        normalize: function(angle)
        {
            const ang = angle;
            ang[0] = math.clamp(ang[0], -89, 89);
            ang[1] %= 360;
            if(ang[1] > 180)
            {
                ang[1] -= 360;
            }
            if(ang[1] < -180)
            {
                ang[1] += 360;
            }
            ang[2] = 0;
            return ang;
        },

        calculate_angle(from, to, base_angle)
        {
            const delta = math.vector.sub(from, to);
            const ret_angle = [];
            ret_angle[0] = this.rad2deg(Math.atan(delta[2] / Math.hypot(delta[0], delta[1]))) - base_angle[0];
            ret_angle[1] = this.rad2deg(Math.atan(delta[1] / delta[0])) - base_angle[1];
            ret_angle[2] = 0;
            if(delta[0] >= 0.0)
                ret_angle[1] += 180.0;

            return this.normalize(ret_angle);
        }
    },

    clamp: function(val, min, max)
    {
        return Math.max(min,Math.min(max,val));
    },

    random_float: function(min, max)
    {
        return Math.random() * (max - min) + min;
    }
};

const utilities = 
{
    global_variables: 
    {
        local_player: -1,
        current_weapon_group_script: -1,
        current_weapon_group_ragebot: -1,
        cheat_username: Cheat.GetUsername(), 

        choked_commands: -1,
        fake_yaw: -1.0,
        real_yaw: -1.0,

        update: function()
        {
            this.local_player = Entity.GetLocalPlayer();
            this.choked_commands = Globals.ChokedCommands();
            this.fake_yaw = Local.GetFakeYaw();
            this.real_yaw = Local.GetRealYaw();

            utilities.setup_current_script_weapon_groups(); 
        }
    },

    ragebot_weapon_groups:
    {
        GROUP_DEFAULT: 0,
        GROUP_PISTOL: 1,
        GROUP_HEAVY_PISTOL: 2,
        GROUP_SCOUT: 3,
        GROUP_AWP: 4,
        GROUP_AUTOSNIPER: 5
    },

    script_weapon_groups:
    {
        GROUP_INVALID: -1,
        GROUP_PISTOL: 0,
        GROUP_HEAVY_PISTOL: 1,
        GROUP_RIFLE: 2,
        GROUP_SMG: 3,
        GROUP_HEAVY: 4,
        GROUP_SCOUT: 5,
        GROUP_AWP: 6,
        GROUP_AUTOSNIPER: 7
    },

    script_hitgroups:
    {
        HITGROUP_HEAD: 1 << 0,
        HITGROUP_UPPER_CHEST: 1 << 1,
        HITGROUP_CHEST: 1 << 2,
        HITGROUP_LOWER_CHEST: 1 << 3,
        HITGROUP_STOMACH: 1 << 4,
        HITGROUP_PELVIS: 1 << 5
    },

    hitboxes: 
    [
        "head",
        "neck",
        "pelvis",
        "body",
        "thorax",
        "chest",
        "upper chest",
        "left thigh",
        "right thigh",
        "left calf",
        "right calf",
        "left foot",
        "right foot",
        "left hand",
        "right hand",
        "left upper arm",
        "left forearm",
        "right upper arm",
        "right forearm",
        "generic"
    ],

    matchmaking_ranks: 
    [
    "None", "S1", "S2", "S3", "S4", "SE", "SEM",
    "GN1", "GN2", "GN3", "GNM", 
    "MG1", "MG2", "MGE", "DMG",
    "LE", "LEM", "Supreme", "Global"
    ],

    player_weapons:
    [
        [32, 61, 4, 36, 3, 30, 2, 63],
        [1, 64],
        [10, 13, 7, 16, 60, 39, 8],
        [34, 17, 24, 33, 23, 26, 19],
        [35, 25, 27, 29, 14, 28],
        [40], 
        [9], 
        [38, 11]
    ],

    setup_current_script_weapon_groups: function()
    {
        if(Entity.IsValid(this.global_variables.local_player) && Entity.IsAlive(this.global_variables.local_player))
        {
            const convert_weapon_group_to_ragebot_weapon_group = function(weapon_group)
            {
                switch(weapon_group)
                {
                    case utilities.script_weapon_groups.GROUP_PISTOL:
                        return utilities.ragebot_weapon_groups.GROUP_PISTOL;

                    case utilities.script_weapon_groups.GROUP_HEAVY_PISTOL:
                        return utilities.ragebot_weapon_groups.GROUP_HEAVY_PISTOL;
                    
                    case utilities.script_weapon_groups.GROUP_SCOUT:
                        return utilities.ragebot_weapon_groups.GROUP_SCOUT;
                    
                    case utilities.script_weapon_groups.GROUP_AWP:
                        return utilities.ragebot_weapon_groups.GROUP_AWP;
                    
                    case utilities.script_weapon_groups.GROUP_AUTOSNIPER:
                        return utilities.ragebot_weapon_groups.GROUP_AUTOSNIPER;

                    default:
                        return utilities.ragebot_weapon_groups.GROUP_DEFAULT;
                }
            }

            const local_player_weapon = Entity.GetProp(this.global_variables.local_player, "CBasePlayer", "m_hActiveWeapon");
            const local_player_item_definition_index = Entity.GetProp(local_player_weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF;

            var weapon_group = -1;

            for(var i = 0; i <= 7; i++) 
            {
                if(utilities.player_weapons[i].some(function(index) { return index == local_player_item_definition_index; } ))
                {
                    weapon_group = i;
                    break;
                }
            }

            this.global_variables.current_weapon_group_script = weapon_group; this.global_variables.current_weapon_group_ragebot = convert_weapon_group_to_ragebot_weapon_group(weapon_group);
        }
    },

    game: 
    {
        local_peek_check: function(local_eye_position, entity_index)
        {
            const local_velocity_length = math.vector.length(Entity.GetProp(utilities.global_variables.local_player, "CBasePlayer", "m_vecVelocity[0]"));
            if(local_velocity_length < 50)
            {
                return false;
            }
            const extrapolated_local_eyepos = math.vector.add(local_eye_position, math.vector.mul_fl(Entity.GetProp(utilities.global_variables.local_player, "CBasePlayer", "m_vecVelocity[0]"), 16 * Globals.TickInterval()));
            const entity_stomach_position = Entity.GetHitboxPosition(entity_index, 2);
            if(typeof(entity_stomach_position) != "undefined")
            {
                const trace = Trace.Line(utilities.global_variables.local_player, extrapolated_local_eyepos, entity_stomach_position);
                return trace[0] == entity_index || trace[1] == 1;
            }
            return false;
        },

        get_script_hitgroup_from_hitbox: function(hitbox)
        {
            switch(hitbox)
            {
                case 0:
                case 1:
                    return utilities.script_hitgroups.HITGROUP_HEAD;
                case 6:
                    return utilities.script_hitgroups.HITGROUP_UPPER_CHEST;
                case 5:
                    return utilities.script_hitgroups.HITGROUP_CHEST;
                case 3:
                    return utilities.script_hitgroups.HITGROUP_LOWER_CHEST;
                case 4:
                    return utilities.script_hitgroups.HITGROUP_STOMACH;
                case 2:
                    return utilities.script_hitgroups.HITGROUP_PELVIS;
                default:
                    return 1 << 32; 
            }
        },

        is_player_visible: function(local_eye_position, entity_index, require_full_scan, vis_threshold)
        {
            var visible_hitboxes_amt = 0;
            if(!require_full_scan)
            {
                const entity_head_position = Entity.GetHitboxPosition(entity_index, 0);
                if(typeof(entity_head_position) != "undefined")
                {
                    const trace_head = Trace.Line(utilities.global_variables.local_player, local_eye_position, entity_head_position);
                    const trace_origin = Trace.Line(utilities.global_variables.local_player, local_eye_position, Entity.GetRenderOrigin(entity_index));

                    if((trace_head[0] == entity_index || trace_head[1] == 1) || (trace_origin[0] == entity_index || trace_origin[1] == 1))
                    {
                        return true;
                    }
                }
            }
            

            for(var i = 0; i <= 18; i++)
            {
                const hitbox_position = Entity.GetHitboxPosition(entity_index, i);
                if(typeof(hitbox_position) != "undefined")
                {
                    const trace = Trace.Line(utilities.global_variables.local_player, local_eye_position, hitbox_position);
                    if(trace[0] == entity_index || trace[1] == 1)
                    {
                        visible_hitboxes_amt++;
                        if(visible_hitboxes_amt >= vis_threshold)
                        {
                            return true;
                        }
                    }
                }
            }
            return false;
        },

        get_dynamic_fov: function(enemy_array, min_fov, max_fov)
        {
            const local_origin = Entity.GetRenderOrigin(utilities.global_variables.local_player);
            const enemy_array_length = enemy_array.length;
            var closest_distance = Infinity;
            for(var i = 0; i < enemy_array_length; i++)
            {
                const entity_index = enemy_array[i];
                const distance = math.vector.length(math.vector.sub(local_origin, Entity.GetRenderOrigin(entity_index)));
                if(closest_distance > distance)
                {
                    closest_distance = distance;
                }
            }
            const new_fov = closest_distance != Infinity ? math.clamp((5500 / closest_distance) * 2, min_fov, max_fov) : min_fov; 
            return new_fov;
        }
    },

    log: function(text)
    {
        Cheat.PrintColor([181, 181, 181, 255], "[sigaretahook] ");
        Cheat.Print(text + "\n");
    },

    log_chat: function(text)
    {
        this.log(text);
        Cheat.PrintChat(" \x08[sigaretahook] \x01" + text);
    }
};

const features = 
{
    ragebot_handler:
    {
        helpers: 
        {
            set_ragebot_dynamic_fov: function(createmove_data)
            { 
                menu.set_item_value(menu_items.references["ragebot_" + setup_helpers.ragebot_internal_weapon_types[utilities.global_variables.current_weapon_group_ragebot] + "_fov_reference"], 
                utilities.game.get_dynamic_fov(createmove_data.enemies, config.weapon_settings[utilities.global_variables.current_weapon_group_script].ragebot_dynamic_fov_min, config.weapon_settings[utilities.global_variables.current_weapon_group_script].ragebot_dynamic_fov_max));
            }
        },
        
        handle: function(createmove_data)
        {
            if(config.generic_settings.ragebot_enabled_hotkey_reference && utilities.global_variables.current_weapon_group_script != -1)
            {
                this.helpers.set_ragebot_dynamic_fov(createmove_data);

                const autowall_state = config.generic_settings.autowall_key_down ? 2 : config.weapon_settings[utilities.global_variables.current_weapon_group_script].ragebot_autowall_mode;
                menu.set_item_value(menu_items.references["ragebot_" + setup_helpers.ragebot_internal_weapon_types[utilities.global_variables.current_weapon_group_ragebot] + "_autowall_reference"], autowall_state == 0);
                if(autowall_state != 1)
                {
                    return; 
                }

                const autowall_triggers = config.weapon_settings[utilities.global_variables.current_weapon_group_script].ragebot_autowall_triggers;

                for(var i = 0; i < createmove_data.enemy_array_length; i++)
                {
                    const entity_index = createmove_data.enemies[i];
                    if(autowall_triggers & (1 << 0))
                    {
                        const entity_head_position = Entity.GetHitboxPosition(entity_index, 0);
                        if(typeof(entity_head_position) != "undefined")
                        {
                            if(config.weapon_settings[utilities.global_variables.current_weapon_group_script].ragebot_autowall_fov > Math.hypot(math.angle.calculate_angle(createmove_data.local_eye_position, entity_head_position, createmove_data.local_viewangles)))
                            {
                                continue;
                            }
                        }
                    }
                    if((autowall_triggers & (1 << 1) && utilities.game.local_peek_check(createmove_data.local_eye_position, entity_index)) || utilities.game.is_player_visible(createmove_data.local_eye_position, entity_index, false, 1))
                    {
                        continue;
                    }
                    Ragebot.IgnoreTarget(entity_index);
                }
            }
        }
    },

    legitbot_handler:
    {
        last_fov: -1,
        last_kill_time: -1,

        last_in_attack_time: -1,
        last_punch_angle: [0, 0, 0],

        in_aim: false,
        aimbot_active: false,
        
        handle: function(createmove_data)
        {
            const IN_ATTACK = 1 << 0;
            const autowall_key_down = config.generic_settings.autowall_key_down;
            if(utilities.global_variables.current_weapon_group_script != -1 &&
            !config.generic_settings.ragebot_enabled_hotkey_reference && 
            createmove_data.usercmd_buttons & IN_ATTACK && 
            (Entity.GetProp(utilities.global_variables.local_player, "CCSPlayer", "m_flFlashDuration") < 2.0 || autowall_key_down) && 
            Globals.Realtime() > this.last_kill_time + config.weapon_settings[utilities.global_variables.current_weapon_group_script].legitbot_kill_delay / 1000 &&
            createmove_data.enemy_array_length > 0)
            {
                this.aimbot_active = true;
                const vector_forward = math.vector.add(createmove_data.local_eye_position, math.vector.mul_fl(math.vector.angle_vector(createmove_data.local_viewangles), 8192));
                const trace_forward = Trace.Line(utilities.global_variables.local_player, createmove_data.local_eye_position, vector_forward); 
                if(!(Entity.IsValid(trace_forward[0]) && Entity.IsAlive(trace_forward[0]) && Entity.IsEnemy(trace_forward[0])))
                {
                    if(!this.in_aim)
                    {
                        this.last_in_attack_time = Globals.Realtime();
                        this.in_aim = true;
                    }

                    this.last_in_attack_time + config.weapon_settings[utilities.global_variables.current_weapon_group_script].legitbot_shot_delay / 1000 > Globals.Realtime() ? UserCMD.SetButtons(createmove_data.usercmd_buttons &= ~IN_ATTACK) : this.in_aim = false;

                    const maximum_fov = config.weapon_settings[utilities.global_variables.current_weapon_group_script].legitbot_should_use_dynamic_fov ? utilities.game.get_dynamic_fov(createmove_data.enemies, 
                        config.weapon_settings[utilities.global_variables.current_weapon_group_script].legitbot_dynamic_fov_min, 
                        config.weapon_settings[utilities.global_variables.current_weapon_group_script].legitbot_dynamic_fov_max) : config.weapon_settings[utilities.global_variables.current_weapon_group_script].legitbot_static_fov;

                    this.last_fov = maximum_fov;

                    const valid_enemies = [];
                    for(var i = 0; i < createmove_data.enemy_array_length; i++)
                    {
                        const _entity_index = createmove_data.enemies[i];
                        const entity_head_position = Entity.GetHitboxPosition(_entity_index, 0);
                        if(typeof(entity_head_position) != "undefined")
                        {
                            const angle_to_head = math.angle.calculate_angle(createmove_data.local_eye_position, entity_head_position, createmove_data.local_viewangles);
                            const fov_to_head = Math.hypot(angle_to_head[0], angle_to_head[1]);
                            if(maximum_fov > fov_to_head && (utilities.game.is_player_visible(createmove_data.local_eye_position, _entity_index, false, 5) || autowall_key_down))
                            {
                                valid_enemies.push({entity_index: _entity_index, fov: fov_to_head});
                            }
                        }
                    }

                    if(valid_enemies.length == 0)
                    {
                        return;
                    }

                    const legitbot_hitboxes = config.weapon_settings[utilities.global_variables.current_weapon_group_script].legitbot_allowed_hitboxes;
                    const minimum_damage = config.weapon_settings[utilities.global_variables.current_weapon_group_script].legitbot_minimum_damage;

                    valid_enemies.sort(function (enemy_a, enemy_b) { return enemy_a.fov - enemy_b.fov; });
                    
                    var best_fov = Infinity;
                    var best_angle = [];

                    for(var ent = 0; ent < valid_enemies.length; ent++)
                    {
                        const entity = valid_enemies[0];
                        const entity_health = Entity.GetProp(entity.entity_index, "CBasePlayer", "m_iHealth");
                        const scaled_minimum_damage = entity_health * (minimum_damage / 100);
                        var should_break = false; 
                        for(var i = 0; i <= 6; i++) 
                        {
                            if(legitbot_hitboxes & utilities.game.get_script_hitgroup_from_hitbox(i))
                            {
                                const hitbox_position = Entity.GetHitboxPosition(entity.entity_index, i)
                                if(typeof(hitbox_position) != "undefined" && (!Trace.Smoke(createmove_data.local_eye_position, hitbox_position) || autowall_key_down))
                                {
                                    const angle_to_hitbox = math.angle.calculate_angle(createmove_data.local_eye_position, hitbox_position, createmove_data.local_viewangles);
                                    const fov = Math.hypot(angle_to_hitbox[0], angle_to_hitbox[1]); 
                                    if(best_fov > fov)
                                    {
                                        const trace = Trace.Bullet(utilities.global_variables.local_player, entity.entity_index, createmove_data.local_eye_position, hitbox_position);
                                        if(trace[0] == entity.entity_index && trace[1] > scaled_minimum_damage && (trace[2] || autowall_key_down))
                                        {
                                            best_fov = fov;
                                            best_angle = angle_to_hitbox;
                                            if(trace[1] > entity_health || fov < 1)
                                            {
                                                should_break = true;
                                                break;
                                            }
                                        }
                                    }
                                } 
                            }
                        }

                        if(should_break)
                        {
                            break;
                        }
                    }
                    

                    const recoil = Entity.GetProp(utilities.global_variables.local_player, "CBasePlayer", "m_aimPunchAngle");

                    if(best_fov != Infinity)
                    {
                        const using_silent_fov = config.weapon_settings[utilities.global_variables.current_weapon_group_script].legitbot_use_silent_fov;
                        const silent_fov = config.weapon_settings[utilities.global_variables.current_weapon_group_script].legitbot_silent_fov;
                        const smooth_amount = using_silent_fov && best_fov <= silent_fov ? 1 : config.weapon_settings[utilities.global_variables.current_weapon_group_script].legitbot_smoothing;
                        var final_angle = math.vector.add(createmove_data.local_viewangles, math.vector.div_fl(best_angle, smooth_amount));
                        
                        if(recoil[0] != 0 || recoil[1] != 0)
                        {
                            final_angle[0] -= (recoil[0] - this.last_punch_angle[0]) * config.weapon_settings[utilities.global_variables.current_weapon_group_script].legitbot_rcs_pitch;
                            final_angle[1] -= (recoil[1] - this.last_punch_angle[1]) * config.weapon_settings[utilities.global_variables.current_weapon_group_script].legitbot_rcs_yaw;
                        }

                        final_angle = math.angle.normalize(final_angle);
                        UserCMD.SetViewAngles(final_angle, using_silent_fov == 1 && best_fov <= silent_fov );
                    }
                    this.last_punch_angle = recoil;
                }
            }
            else
            {
                this.in_aim = false;
                this.aimbot_active = false; 
            }
        }
    },

    antiaim_handler:
    {
        jitter_flip: -1, 
        desync_side: 0,
        

        helpers:
        {
            get_autodirection_side: function(createmove_data)
            {
                const left_trace = Trace.Line(utilities.global_variables.local_player, createmove_data.local_eye_position, math.vector.add(createmove_data.local_eye_position, math.vector.mul_fl(math.vector.angle_vector([createmove_data.local_viewangles[0], createmove_data.local_viewangles[1] + 58, 0]), 90)));
                const right_trace = Trace.Line(utilities.global_variables.local_player, createmove_data.local_eye_position, math.vector.add(createmove_data.local_eye_position, math.vector.mul_fl(math.vector.angle_vector([createmove_data.local_viewangles[0], createmove_data.local_viewangles[1] - 58, 0]), 90)));

                if(left_trace[1] == right_trace[1])
                {
                    return 0;
                }

                return left_trace[1] < right_trace[1] ? 1 : -1;
            }
        },

        handle: function(createmove_data)
        {
            if(config.generic_settings.legitaa_master_switch && menu.get_item_value(menu_items.references.antiaim_enabled_reference))
            {
                menu.set_item_value(menu_items.references.restrictions_reference, 0);
                menu.set_item_value(menu_items.references.antiaim_yaw_offset_reference, 180);
                menu.set_item_value(menu_items.references.antiaim_pitch_reference, 0);

                AntiAim.SetOverride(1);

                const local_velocity_length = math.vector.length(Entity.GetProp(utilities.global_variables.local_player, "CBasePlayer", "m_vecVelocity[0]"));

                const fake_type_array = ["standing", "walking", "moving"];
                var fake_type = local_velocity_length < 3.5 ? 0 : local_velocity_length < 135 ? 1 : 2;

                var desync_direction = menu.get_item_value(menu_items.references.antiaim_inverter_reference) ? -1 : 1; 
                if(config.generic_settings.legitaa_autodirection)
                {
                    const autodirection_result = this.helpers.get_autodirection_side(createmove_data);
                    if(autodirection_result != 0)
                    {
                        desync_direction = autodirection_result;
                        if(config.generic_settings.legitaa_autodirection_peek_mode == 1 && fake_type >= 1 && createmove_data.enemies.some(function(entity_index) {  
                            return utilities.game.local_peek_check(createmove_data.local_eye_position, entity_index);
                        } ))
                        {
                            desync_direction *= -1;
                        }
                    }
                }
                
                if(utilities.global_variables.choked_commands == 0)
                {
                    this.jitter_flip *= -1;
                }

                const current_lby_extend_amount = config.generic_settings.legitaa_lby_extension_amount;
        
                this.desync_side = desync_direction;

                AntiAim.SetRealOffset((60 * config.generic_settings["legitaa_fake_delta_" + fake_type_array[fake_type]] * desync_direction * (config.generic_settings["legitaa_" + fake_type_array[fake_type] + "_mode"] == 0 ? 1 : (this.jitter_flip == -1 ? -0.5 : 1))));
                AntiAim.SetLBYOffset(config.generic_settings.legitaa_lby_mode == 1 && !(config.generic_settings.legitaa_safety_checks && (Globals.Tickrate() > 1 / Globals.Frametime() || Local.Latency() > 0.2)) ? Math.abs(math.angle.difference(utilities.global_variables.fake_yaw, utilities.global_variables.real_yaw)) > 100 && current_lby_extend_amount == 1 ? 180 : 100 * current_lby_extend_amount * -desync_direction : 0);
            }
            else
            {
                AntiAim.SetOverride(0);
            }
        }
    },

    fakelag_handler:
    {
        handle: function(createmove_data)
        {
            config.generic_settings.visible_only_fakelag && createmove_data.enemies.some(function(entity_index) { 
                return utilities.game.local_peek_check(createmove_data.local_eye_position, entity_index);
            } ) && utilities.global_variables.choked_commands < config.generic_settings.visible_fakelag_strength ? UserCMD.Choke() : null;
        }
    },

    renderer:
    {
        helpers: 
        {
            screensize: [],
            generic_color: function(fraction, desired_alpha)
            {
                return [190 - ((fraction * 60) * 75 / 40), 40 + ((fraction * 60) * 146 / 60), 10, desired_alpha];
            },
            
            render_indicators: function()
            {
                const indicator_font = Render.AddFont("Tahoma", 24, 900); 

                const indicator_selections = config.generic_settings.indicators;

                const aim_data = {active: 0, fov: 0, aim_mode: 0, aim_mode_str: ""};
                var autowall_mode = 0;

                const _fake_delta = math.angle.difference(utilities.global_variables.fake_yaw, utilities.global_variables.real_yaw);

                const aa_data = {fake_delta: _fake_delta, direction: features.antiaim_handler.desync_side, color: this.generic_color(math.clamp(Math.abs(_fake_delta) / 60, 0, 1), 200)};
                const lag_data = {color: this.generic_color(math.clamp(utilities.global_variables.choked_commands / 8, 0, 1), 200)};

                const fill_indicator_data = function()
                {
                    const is_ragebot_active = config.generic_settings.ragebot_enabled_hotkey_reference;
                    aim_data.active = is_ragebot_active ? true : features.legitbot_handler.aimbot_active;
                    aim_data.fov = is_ragebot_active ? menu.get_item_value(menu_items.references["ragebot_" + setup_helpers.ragebot_internal_weapon_types[utilities.global_variables.current_weapon_group_ragebot] + "_fov_reference"]) : Math.round(features.legitbot_handler.last_fov);
                    aim_data.aim_mode = is_ragebot_active ? 0 : 1;
                    aim_data.aim_mode_str = is_ragebot_active ? "RAGE" : "LEGIT";
                    if(is_ragebot_active)
                    {
                        aim_data.bodyaim_mode = config.generic_settings.ragebot_bodyaim_hotkey_reference ? 2 : config.reference_states[utilities.global_variables.current_weapon_group_ragebot].prefer_baim_state ? 1 : 0;
                        aim_data.safepoint_mode = config.generic_settings.ragebot_safepoint_hotkey_reference ? 2 : config.reference_states[utilities.global_variables.current_weapon_group_ragebot].prefer_safepoint_state ? 1 : 0;
                        aim_data.resolver_override = config.generic_settings.ragebot_resolver_hotkey_reference;
                    }

                    if(config.generic_settings.autowall_key_down)
                    {
                        autowall_mode = 2;
                    }
                    else
                    {
                        autowall_mode = (utilities.global_variables.current_weapon_group_script != -1 && is_ragebot_active) ? config.weapon_settings[utilities.global_variables.current_weapon_group_script].ragebot_autowall_mode : 0;
                    }
                }

                fill_indicator_data();

                const base_x = this.screensize[0] * 0.035;
                var base_y = this.screensize[1] * 0.45;

                const mode_colors = [[255, 25, 30, 200], [255, 255, 255, 200], [255, 255, 255, 200]]; 

               
                
                
                
                
                
            },

            render_mm_info: function()
            {
                const info_font = Render.AddFont("Segoe UI", 8, 750);
                const base_x = this.screensize[0] * 0.85;
                var base_y = this.screensize[1] * 0.35;

                Render.StringCustom(base_x, base_y, 1, "MM Data", [255, 255, 255, 255], info_font);
                base_y += 15;
                const players = Entity.GetPlayers();
                const players_array_length = players.length;

                for(var i = 0; i < players_array_length; i++)
                {
                    const player = players[i];
                    if(Entity.IsValid(player))
                    {
                        const player_name = Entity.GetName(player);
                        if(player_name == "GOTV") 
                        { 
                            continue; 
                        }
                        Render.StringCustom(base_x, base_y, 1, ((Entity.IsBot(player) ? "BOT " : "") + player_name.trim() + " | Rank: " + utilities.matchmaking_ranks[Entity.GetProp(player, "CCSPlayerResource", "m_iCompetitiveRanking")] + " | Wins: " + Entity.GetProp(player, "CCSPlayerResource", "m_iCompetitiveWins")), Entity.IsEnemy(player) ? [255, 20, 20, 255] : [20, 20, 255, 255], info_font);
                        base_y += 15;
                    }
                }
            }
        },

        handle: function()
        {
            this.helpers.screensize = Render.GetScreenSize();
            if(Entity.IsValid(utilities.global_variables.local_player))
            {
                if(Entity.IsAlive(utilities.global_variables.local_player))
                {
                    this.helpers.render_indicators();
                }
                if(Input.IsKeyPressed)
                {
                    
                }
            }
        }
    },

    event_handlers:
    {
        legitbot_killdelay:
        {
            handle: function()
            {
                if(utilities.global_variables.local_player == Entity.GetEntityFromUserID(Event.GetInt("attacker")) && utilities.global_variables.local_player != Entity.GetEntityFromUserID(Event.GetInt("userid")))
                {
                    features.legitbot_handler.last_kill_time = Globals.Realtime();
                }
            }
        },

        ragebot_shotlogs:
        {
            handle: function()
            {
                if(config.generic_settings.rbot_shotlogs)
                {
                    const target_index = Event.GetInt("target_index");
                    const hitbox_index = Event.GetInt("hitbox");

                    var string = "shot " + " into " + Entity.GetName(target_index).trim() + "'s " + (utilities.hitboxes[hitbox_index] || "generic") + ", hitchance: " + Event.GetInt("hitchance") + ", safepoint: " + (Event.GetInt("safepoint") == 1 ? "enabled" : "disabled");
                    const hitbox_position = Entity.GetHitboxPosition(target_index, hitbox_index);
                    if(typeof(hitbox_position) != "undefined")
                    {
                        const trace = Trace.Bullet(utilities.global_variables.local_player, target_index, Entity.GetEyePosition(utilities.global_variables.local_player), hitbox_position);
                        string += ", predicted damage: " + trace[1];
                    }

                    utilities.log_chat(string);
                }                
            }
        },

        killsay:
        {
            helpers:
            {
                normal_killsays: 
                ["ez", "too fucking easy", "effortless", "easiest kill of my life",
                "retard blasted", "cleans?", "nice memesense retard", "hello mind explaining what happened there", 
                "pounce out of your window disgusting tranny, you shouldnt exist in this world", 
                "а вы че клины???", "обоссал мемюзера лол", "ты че там отлетел то", 
                "lmao ur so ugly irl like bro doesnt it hurt to live like that, btw you know you can just end it all",
                "ROFL NICE *DEAD* HHHHHHHHHHHHHHHHHH", "take the cooldown and let your team surr retard",
                "go take some estrogen tranny", "uid police here present your user identification number right now",
                "нищий улетел", "*DEAD* пофикси нищ", "сразу видно юид иссуе хуле тут",
                "у мамки что кфг иссуе была шо тебя родила", "а ты и в жизни ньюкамыч????", "сука не позорься и ливни лол",
                "юид полиция подьехала открывай дверь уебыч", "набутылирован лол", "tranny holzed", 
                "але ты там из хрущевки выеди а потом вырыгивай блять", "как там с мамкой комнату разделять АХАХАХХАХА как ты на акк накопил блять",
                "найс 0.5х0.5м комната блять ХАХАХАХА ТЫ ТАМ ЖЕ ДАЖЕ ПОВЕСИТЬСЯ НЕ МОЖЕШЬ МЕСТА НЕТ ПХПХПХППХ", "better buy the superior hack!",
                "на мыло и веревку то деньги есть нищ????", "whatcha shootin at retard", "опущены стяги, легион и.. А БЛЯТЬ ТЫЖ ТУТ ОПУЩ НАХУЙ ПХГАХААХАХАХАХА)))))))",
                "але какая с юидом ситуация)))", "бля че тут эта нищая собака заскулила", "не хотелось даже руки об тебя марать нищ сука", "ебать ты красиво на бутылку упал",
                "прости что без смазки)))", "алло это скорая? тут такая ситуация нищ упал))) ОЙ А ВЫ НИЩАМ ТО НЕ ПОМОГАЕТЕ?? ПОНЯТНО Я ПОЙДУ ТОГДА))))))))", "nice 0.5x0.5m room you poorfag, how the fuck did you afford an acc hhhhhh", "вырыгнись из окна нахуй боберхук юзер",
                "тяжело с мемсенсом наверно????", "imagine losing at video games couldn't ever be me", "але а противники то где???", "nice chromosome count you sell??", "nice thirdworldspeak ROFL", "как ты на пк накопил даже не знаю )))))))))",
                "iq больше двух будет пмнешь ок????", "->‌> ‌si‌rg‌ay‌zo‌rh‌ac‌k.‌pw‌/в‌оз‌вр‌ат‌де‌не‌г.‌ph‌p ‌<<‌-", "god wish i had sigaretahook"
                ],

                headshot_killsays:
                [
                    "ez", "effortless", "1", "nice antiaim, you sell?", "you pay for that?", 
                    "refund right now", "consider suicide", "bro are u clean?",
                    "another retard blasted",
                    "hhhhhhhhhhhhhhhhhh 1, you pay for that? refund so maybe youll afford some food for your family thirdworld monkey",
                    "paster abandoned the match and received a 7 day competitive matchmaking cooldown",
                    "freeqn.net/refund.php", "refund your rainbowhook right now pasteuser dog",
                    "бля эт пиздец че какие то там нищи с мемсенсом рыгают блять",
                    "тебе права голоса не давали thirdworlder ебаный",
                    "на завод иди",
                    "JAJAJAJJAJA NICE RAINBOWPASTE ROFL",
                    "140er????", "get good get vantap4ik",
                    "1 but all you need to fix your problems is a rope and a chair you ugly shit",
                    "who (kto) are you (nn4ik) wattafak mens???????", "must be an uid issue", "holy shit consider refunding your trash paste rofl",
                    "hello please refund your subpar product",
                    "ебать тебя унесло", "рефандни пожалуйста", 
                    "на бутылку русак",
                    "a вы (you) сэр собственно кто (who)?",
                    "бля пиздос может рефнешь???",
                    "как там жизнь с рупастой??????",
                    "але может не будешь тратить мамкину зарплату на говнопасты???",
                    "stop spending your lunch money on shitpastes retard",
                    "бля я рядом только прошел а ты уже упал АУУ НИЩ С ТОБОЙ ВСЕ ХОРОШО??????????))))))",
                    "ой нищий упал щас скорую вызовем",
                    "ой а кто (who) ты (you) такой вотзефак мен))))))",
                    "thats going in my media compilation right there get shamed retard rofl",
                    "imagine the only thing you eat being bullets man being a thirdworlder must suck rofl", "so fucking ez", "bot_kick", "where the enemies at????",
                    "але найс упал нищ ЛОООООООЛ", "с тобой там все хорошо????????????? а да ты нищ нахуя я спрашиваю ПХАХАХАХАХХА",
                    "жаль конечно что против нищей играть надо)))", "тебе даже спин не поможет блять, нахуй ты вообще живешь", "ты можешь заселлить лишнюю хромосому???",
                    "научи потом как так сосать на хвх", "когда не накопил на гормоны и чулки)))))))))))))", "как там жизнь на мамкину пенсию???????", "але я бот_кик в консоль вроде прописал а вас там не кикнуло эт че баг??)))))))))",
                    "крякоюзер down, на завод нахуй", "я не понял ты такой жирный потомучто дошики каждый день жрешь???? нормальную работу найди может на еду денег хватит))))))))))))", "->‌> ‌si‌rg‌ay‌zo‌rh‌ac‌k.‌pw‌/в‌оз‌вр‌ат‌де‌не‌г.‌ph‌p ‌<<‌-", "god wish i had sigaretahook"
                ] 
            },

            handle: function()
            {
                if(config.generic_settings.killsays && utilities.global_variables.local_player == Entity.GetEntityFromUserID(Event.GetInt("attacker")) && utilities.global_variables.local_player != Entity.GetEntityFromUserID(Event.GetInt("userid")))
                {
                    Cheat.ExecuteCommand("say " + ((Event.GetInt("headshot") == 1 && Math.random > 0.5) ? this.helpers.headshot_killsays[Math.floor(Math.random() * this.helpers.headshot_killsays.length)] : this.helpers.normal_killsays[Math.floor(Math.random() * this.helpers.normal_killsays.length)]));
                }
            }
        }
    }
};




const callbacks = 
{
    game_functions: 
    {
        createmove:
        {
            on_function: function()
            {   
                utilities.global_variables.update();

                if(config.generic_settings.master_switch)
                {
                    const generate_createmove_data = function()
                    {
                        const object = 
                        { 
                            local_eye_position: Entity.GetEyePosition(utilities.global_variables.local_player),
                            local_viewangles: Local.GetViewAngles(),
                            usercmd_buttons: UserCMD.GetButtons(),
                            enemies: Entity.GetEnemies(),
                            enemy_array_length: 0
                        };

                        object.enemies = object.enemies.filter(function(entity_index)
                        {
                            return Entity.IsValid(entity_index) && Entity.IsAlive(entity_index) && !Entity.IsDormant(entity_index);
                        });

                        object.enemy_array_length = object.enemies.length;
                        
                        return object;
                    }

                    const createmove_data = generate_createmove_data();

                    features.legitbot_handler.handle(createmove_data);
                    features.ragebot_handler.handle(createmove_data);
                    features.antiaim_handler.handle(createmove_data);
                    features.fakelag_handler.handle(createmove_data);
                }
            }
        },

        draw:
        {
            on_function: function()
            {
                config.update_script_settings();
                features.renderer.handle();
                menu_items.handle_menu_item_visibility();
            }
        },

        unload: 
        {
            on_function: function()
            {
                AntiAim.SetOverride(0);
            }
        }
    },
    
    events:
    {
        ragebot_fire:
        {
            on_function: function()
            {
                features.event_handlers.ragebot_shotlogs.handle();
            }
        },

        player_death:
        {
            on_function: function()
            {
                features.event_handlers.killsay.handle();
                features.event_handlers.legitbot_killdelay.handle();
            }
        }
    },

    setup_callbacks: function()
    {
        Cheat.RegisterCallback("CreateMove", "callbacks.game_functions.createmove.on_function");
        Cheat.RegisterCallback("Draw", "callbacks.game_functions.draw.on_function");
        Cheat.RegisterCallback("Unload", "callbacks.game_functions.unload.on_function");

        Cheat.RegisterCallback("player_death", "callbacks.events.player_death.on_function");
        Cheat.RegisterCallback("ragebot_fire", "callbacks.events.ragebot_fire.on_function");
    }
};

const on_script_load = function()
{
    menu_items.script_items.setup_menu_items();
    menu_items.references.setup_references();

    callbacks.setup_callbacks();

    utilities.log("loaded, welcome back, " + utilities.global_variables.cheat_username);
}

on_script_load();





var lasttime = 0;
var customtext = 0;
function time_to_ticks(time) {
	var timer = time / Globals.TickInterval() + .5;
	return timer;
}
var old_text_anim = 0;
function anim(texta, indices) {
	if(!World.GetServerString()) return;
	if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Clantag spammer"))
	{
		text_anim = "               " + texta + "                      ";
	}
	else
	{ 
		text_anim = "  ";
	}
	tickinterval = Globals.TickInterval();
	tickcount = Globals.Tickcount() + time_to_ticks(Local.Latency());
	ddd = tickcount / time_to_ticks(0.30);
	ddd = ddd % indices.length;
	ddd = indices[parseInt(ddd)]+1;
	text_anim = text_anim.slice(ddd, ddd+15);
	if(text_anim != old_text_anim)
	{
		Local.SetClanTag(text_anim);
	}
	old_text_anim = text_anim;
}

function clantag() {
	var clantag = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Clantag spammer");
	if(clantag == 1)
	{
		customtext = "sigaretahook ";
	}
	if(clantag == 2)
	{
		customtext = "effecthacke ";
	}
	anim(customtext, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11, 11, 11, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23])
}

Cheat.RegisterCallback("Draw", "clantag");

function BuyLogs(){    
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Buy logs")) {
        var ent = Entity.GetEntityFromUserID(Event.GetInt('userid'))
        var team = Event.GetInt('team')
        if (team != Entity.GetProp(Entity.GetLocalPlayer(), "CBaseEntity", "m_iTeamNum")) {
            var item = Event.GetString('weapon')
            item = item.replace("weapon_", "")
            item = item.replace("item_", "")
            item = item.replace("assaultsuit", "kevlar + helmet")
            item = item.replace("incgrenade", "molotov")
            if (item != "unknown") {
                var name = Entity.GetName(ent)
                Global.PrintChat(" \x08[sigaretahook] \x01" + name + " bought \x08" + item + " \n");
            }
        }
    }
}
Global.RegisterCallback("item_purchase", "BuyLogs");

var options = []
function onVoteOptions() {
    options[0] = Event.GetString("option1")
    options[1] = Event.GetString("option2")
    options[2] = Event.GetString("option3")
    options[3] = Event.GetString("option4")
    options[4] = Event.GetString("option5")
}
function onVoteCast() {
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Vote revealer"))  {
    var entid = Event.GetInt("entityid");
    if (entid) {
        var team = Event.GetInt("team");
        var option = Event.GetInt("vote_option");
        var name = Entity.GetName(entid);
        var chTeam = "null";
        switch (team) {
            case 0: chTeam = "[N] "; break; case 1: chTeam = "S "; break;
            case 2: chTeam = "T "; break; case 3: chTeam = "Ct "; break;
            default: chTeam = "[UNK] "; break;
        }
        
        var vote = options[option];
        Global.PrintColor([ 128, 128, 128, 255 ], "[sigaretahook] \0");
        Global.Print(name + "voted " + vote + " on " + chTeam + "\n");
        Global.PrintChat(" \x08[sigaretahook] \x01" + name + " voted " + vote + " on " + chTeam);
    }
}
}
Global.RegisterCallback("vote_options", "onVoteOptions");
Global.RegisterCallback("vote_cast", "onVoteCast");

var wCategory = {
    "usp s": "PISTOL",
    "glock 18": "PISTOL",
    "p2000": "PISTOL",
    "dual berettas": "PISTOL",
    "r8 revolver": "HEAVY PISTOL",
    "desert eagle": "HEAVY PISTOL",
    "p250": "PISTOL",
    "tec 9": "Pistol",
    "mp9": "SMG",
    "mac 10": "SMG",
    "pp bizon": "SMG",
    "ump 45": "SMG",
    "ak 47": "RIFLE",
    "sg 553": "RIFLE",
    "aug": "RIFLE",
    "m4a1 s": "RIFLE",
    "m4a4": "RIFLE",
    "ssg 08": "SCOUT",
    "awp": "AWP",
    "g3sg1": "AUTO",
    "scar 20": "AUTO",
    "nova": "HEAVY",
    "xm1014": "HEAVY",
    "mag 7": "HEAVY",
    "m249": "HEAVY",
    "negev": "HEAVY"
};

function weaponType() {
    var localEnt = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    if (wCategory[weapon] == undefined)
        return "";

    return wCategory[weapon];
}

//germany indicators boss

function normalize_yaw(angle)
{
    var adjusted_yaw = angle;

    if (adjusted_yaw < -180)
        adjusted_yaw += 360;

    if (adjusted_yaw > 180)
        adjusted_yaw -= 360;

    return adjusted_yaw;
}

Render.Arc = function(x, y, r1, r2, s, d, col)
{
    for (var i = s; i < s + d; i++)
    {
        const rad = i * Math.PI / 180;

        Render.Line(x + Math.cos(rad) * r1, y + Math.sin(rad) * r1, x + Math.cos(rad) * r2, y + Math.sin(rad) * r2, col);
    }
}




var heavy_cache = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage")
var scout_cache = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage")
var awp_cache = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage")
var auto_cache = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage")
function isActive(a)
{
    return UI.IsHotkeyActive("Script items", a)
}
function setValue(cat, value)
{
    UI.SetValue("Rage", cat.toUpperCase(), "Targeting", "Minimum damage", value)
}
function isHeavyPistol(name)
{
    if (name == "r8 revolver" || name == "desert eagle")
    {
        return true
    }
}
function isAutoSniper(name)
{
    if(name == "scar 20" || weapon_name == "g3sg1")
    {
        return true
    }
}
function onCM()
{
    heavy_value = UI.GetValue("Script items", "Heavy Pistol Mindmg")
    scout_value = UI.GetValue("Script items", "Scout Mindmg")
    awp_value = UI.GetValue("Script items", "AWP Mindmg")
    auto_value = UI.GetValue("Script items", "Auto Mindmg")
    weapon_name =  Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
  
    if (isActive("Mindmg override") && isHeavyPistol(weapon_name))
    {
        setValue("HEAVY PISTOL", heavy_value)
    }
    else{
        setValue("HEAVY PISTOL", heavy_cache)
    }
  
    if (isActive("Mindmg override") && weapon_name == "ssg 08")
    {
        setValue("SCOUT", scout_value)
    }
    else{
        setValue("SCOUT", scout_cache)
    }

    if (isActive("Mindmg override") && weapon_name == "awp")
    {
        setValue("AWP", awp_value)
    }
    else{
        setValue("AWP", awp_cache)
    }

    if (isActive("Mindmg override") && isAutoSniper(weapon_name))
    {
      
        setValue("AUTOSNIPER", auto_value)
    }
    else
    {
        setValue("AUTOSNIPER", auto_cache)
    }
  
}
function indicator()
{
    screen = Render.GetScreenSize()
    wep = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
    x = screen[0]/2
    y = screen[1]/2
    heavy = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage")
    scout = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage")
    awp = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage")
    auto = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage")
    var str = ""
	const font = Render.AddFont("Verdana", 24, 500);
    
        if (isHeavyPistol(wep))
        {
            str = heavy
        }
        else if(wep == "ssg 08")
        {
            str = scout
        }
        else if(wep == "awp")
        {
            str = awp
        }
        else if (isAutoSniper(wep))
        {
            str = auto
        }
    
    
}

Cheat.RegisterCallback("CreateMove", "onCM")

const ref_slow = UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk");
const ref_antiaim_enabled = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled");
const ref_fakelag_enabled = UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled");
const ref_doubletap = UI.GetValue("Rage", "GENERAL", "Exploits", "Doubletap");
const ref_doubletap_hk = UI.GetValue("Rage", "GENERAL", "Exploits", "Doubletap", UI.AddHotkey);
const ref_hideshots_hk = UI.GetValue("Rage", "GENERAL", "Exploits", "Hide shots", UI.AddHotkey);
const ref_autowall = UI.GetValue("Rage", "GENERAL", "Targeting", "Disable autowall");
const ref_ragebot_hk = UI.IsHotkeyActive("Rage", "GENERAL", "Enabled"); 
const ref_ragebot = UI.GetValue("Rage", "GENERAL", "Enabled");
const ref_brute = UI.IsHotkeyActive("Rage", "GENERAL", "Resolver override");
const ref_sp = UI.IsHotkeyActive("Rage", "GENERAL", "Force safe point");
const ref_baim = UI.IsHotkeyActive("Rage", "GENERAL", "Force body aim");
const ref_mindmg = UI.IsHotkeyActive("Script items", "Mindmg override");
colori = UI.GetColor("Script items", "Indicators color");
current_map = World.GetMapName();
weaponT = weaponType();




//region locals
var last_time = 0;
var planted = false;
var bombsite = 0;
var offset = 0;


const modules = [
    
    {

        label: "SL",
        condition: function() {
            if(UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk") == 1)
            
            return menu.get_item_value(ref_slow);
        
        },
        colors: {
            dormant: [186, 0, 16, 225],
            active: colori
        },
        logic: function() {
            const self = modules[8];

            const sl = menu.get_item_value(ref_slow);

            self.colors.active = sl === 1 ? colori : [186, 0, 16, 225];

            return 1;
        },
       
    },

    {
        label: "BAIM",
        condition: function() {
            if(UI.IsHotkeyActive( "Rage", "GENERAL", "Force body aim" ) == 1)
            
            return menu.get_item_value(ref_baim);
        
        },
        colors: {
            dormant: [186, 0, 16, 225],
            active: colori
        },
        logic: function() {
            const self = modules[8];

            const sp = menu.get_item_value(ref_sp);

            self.colors.active = sp === 1 ? [154, 205, 50, 255] : [186, 0, 16, 225];

            return 1;
        },
       
    },


    {
        label: "SAFE",
        condition: function() {
            if(UI.IsHotkeyActive( "Rage", "GENERAL", "Force safe point" ) == 1)
            
            return menu.get_item_value(ref_sp);
        
        },
        colors: {
            dormant: [186, 0, 16, 225],
            active: colori
        },
        logic: function() {
            const self = modules[8];

            const sp = menu.get_item_value(ref_sp);

            self.colors.active = sp === 1 ? [154, 205, 50, 255] : [186, 0, 16, 225];

            return 1;
        },
       
    },


    {
        label: "BRUTE",
        condition: function() {
            if(UI.IsHotkeyActive( "Rage", "GENERAL", "Resolver override" ) == 1)
            
            return menu.get_item_value(ref_brute);
        
        },
        colors: {
            dormant: [186, 0, 16, 225],
            active: colori
        },
        logic: function() {
            const self = modules[7];

            const brute = menu.get_item_value(ref_brute);

            self.colors.active = brute === 1 ? [255, 255, 255, 225] : [186, 0, 16, 225];

            return 1;
        },
       
    },




    {
        label: "AW",
        condition: function() {
            if(UI.GetValue( "Rage", "GENERAL", "Targeting", "Disable autowall" ) == 0)
            
            return menu.get_item_value(ref_ragebot);
        
        },
        colors: {
            dormant: [186, 0, 16, 225],
            active: colori
        },
        logic: function() {
            const self = modules[6];

            const autowall = menu.get_item_value(ref_autowall);

            self.colors.active = autowall === 1 ? [154, 205, 50, 255] : [186, 0, 16, 225];

            return 1;
        },
       
    },

    {
        label: "RAGE",
        condition: function() {
            if(UI.IsHotkeyActive( "Rage", "GENERAL", "Enabled" ) == 1)
            return menu.get_item_value(ref_ragebot_hk);
        },
        colors: {
            dormant: [186, 0, 16, 225],
            active: colori  
        },
        logic: function() {
            const self = modules[6];

            const rbot = menu.get_item_value(ref_ragebot_hk);

            self.colors.active = rbot === 1 ? [154, 205, 50, 255]  : [186, 0, 16, 225];

            return 1;  
        },
       
    },/*  {
        label: "FOV: " + UI.GetValue("Rage", weaponT, "FOV"),
        condition: function() {
            if(UI.IsHotkeyActive( "Rage", "GENERAL", "Enabled" ) == 1)
           return menu.get_item_value(ref_ragebot);
        },
        colors: {
            dormant: colori ,
            active: colori  
        },
        logic: function() {
            const self = modules[10];

            const fovv = UI.GetValue("Rage", weaponT, "FOV");

            self.colors.active = fovv === 1 ? colori : colori ;

            return 1;  
        },
       
    },
*/

    {
        label: "FAKE",
        condition: function() {
            if(UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Enabled") == 1);
            return menu.get_item_value(ref_antiaim_enabled);
        },
        colors: {
            dormant: [186, 0, 16, 225],
            active: [154, 205, 50, 255]
        },
        logic: function() {
            const self = modules[0];

            const real = Local.GetRealYaw(), fake = Local.GetFakeYaw();
            const delta = Math.abs(normalize_yaw(real % 360 - fake % 360)) / 2;

            return delta / 60;
        },
        extra: function(x, y, color) 
        {

            const real = Local.GetRealYaw(), fake = Local.GetFakeYaw();
            const delta = Math.abs(normalize_yaw(real % 360 - fake % 360)) / 2;

            const frac = delta / 60;
    
            if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Fake circle") == 1)
            {

                Render.Arc(x+5, y, 7, 9.5, 0, 360, [10, 10, 10, 60]);

                Render.Arc(x+5, y, 7, 9.5, 0, 360 * frac, color);

      
            }
        }
    },
    {
        label: "DMG",
        condition: function() {
            if(UI.IsHotkeyActive("Script items", "Mindmg override") == 1)
            return menu.get_item_value(ref_mindmg);
        },
        colors: {
            dormant: [186, 0, 16, 225],
            active:  [255, 255, 255, 225]
        },
        logic: function() {
            const self = modules[9];
    
            const mindmg = menu.get_item_value(ref_mindmg);
    
            self.colors.active = mindmg === 1 ? [255, 255, 255, 225] : [186, 0, 16, 225];
    
            return 1;  
        },
    },
    {
        label: "LC",
        condition: function() {
            const me = Entity.GetLocalPlayer();
            const on_ground = Entity.GetProp(me, "CBasePlayer", "m_fFlags") & 1;

            return menu.get_item_value(ref_fakelag_enabled) & (!on_ground || Input.IsKeyPressed(0x20)) & !menu.get_item_value(ref_doubletap_hk) & !menu.get_item_value(ref_hideshots_hk);
        },
        colors: {
            dormant: [186, 0, 16, 225],
            active: [154, 205, 50, 255]
        },
        logic: function() {
            const self = modules[1];

            const me = Entity.GetLocalPlayer();
            const vec = Entity.GetProp(me, "CBasePlayer", "m_vecVelocity[0]");
            const vel = Math.sqrt(vec[0] ** 2 + vec[1] ** 2 + vec[2] ** 2);

            if (vel > 370)
                return 1;

            return 0;
        }
    },
    
    
    {
        label: "",
        condition: function() {
            return planted;
        },
        colors: {
            dormant: [186, 0, 16, 225],
            active: [154, 205, 50, 255]
        },
        logic: function() {
            const self = modules[5];

            var c4 = Entity.GetEntitiesByClassID(128)[0];

            if (!c4)
                return 0;

            var timer = (Entity.GetProp(c4, "CPlantedC4", "m_flC4Blow") - Globals.Curtime());


            return 1;
        }
    },
    {
        label: "",
        condition: function() {
            return planted;
        },
        colors: {
            dormant: [186, 0, 16, 225],
            active: [154, 205, 50, 255]
        },
        logic: function() {
            const self = modules[6];

            const me = Entity.GetLocalPlayer();

            if (!me || !Entity.IsAlive(me))
                return 0;

            const c4 = Entity.GetEntitiesByClassID(128)[0];

            if (!c4)
                return 0;

            const armor = Entity.GetProp(me, "CCSPlayerResource", "m_iArmor");
            const health = Entity.GetProp(me, "CBasePlayer", "m_iHealth");

            const origin = Entity.GetRenderOrigin(c4);
            const my_origin = Entity.GetRenderOrigin(me);

            const distance = Math.sqrt((origin[0] - my_origin[0]) ** 2 + (origin[1] - my_origin[1]) ** 2 + (origin[2] - my_origin[2]) ** 2);

            // Ultranite
            const a = 450.7;
            const b = 75.68;
            const c = 789.2;
      
            const d = (distance - b) / c;
      
            var damage = a * Math.exp(-d * d);
      
            if (armor > 0) {
                var newDmg = damage * 0.5;
                var armorDmg = (damage - newDmg) * 0.5;
      
                if (armorDmg > armor) {
                    armor = armor * (1 / .5);
                    newDmg = damage - armorDmg;
                }

                damage = Math.round(newDmg);
            }



            return Math.max(1 -damage / health, 0);
        }
    }
];








function draw_timer()
{
    if (!planted)
        return;

    const me = Entity.GetLocalPlayer();

    if (!me)
        return;

    if (!Entity.IsAlive(me))
    {
        if (Entity.GetProp(me, "CBasePlayer", "m_iObserverMode") < 4)
            return;

        me = Entity.GetProp(me, "CBasePlayer", "m_hObserverTarget");
    }

    var c4 = Entity.GetEntitiesByClassID(128)[0];

    if (!c4)
        return;

    const y = Render.GetScreenSize()[1];
    const color = [154, 205, 50, 255];

    var bombsite_label = bombsite % 2 == 0 ? "" : "";

    var timer = (Entity.GetProp(c4, "CPlantedC4", "m_flC4Blow") - Globals.Curtime());


    
}


function draw_indicators()

{
    
    
    
   
    
    const drawn = 0;
    
    screen = Render.GetScreenSize()
    x = screen[0]/2
    y = UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Indicators Y offset" )
    
    for (var i = 0; i < modules.length; i++)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Indicators" ) == 1)
    {

        const mod = modules[i];

        if (!mod.condition()) continue;

        const result = mod.logic();
        const label_width = Render.TextSize(mod.label, 16)[0];
        const color = [
            mod.colors.dormant[0] + (mod.colors.active[0] - mod.colors.dormant[0]) * result,
            mod.colors.dormant[1] + (mod.colors.active[1] - mod.colors.dormant[1]) * result,
            mod.colors.dormant[2] + (mod.colors.active[2] - mod.colors.dormant[2]) * result,
            255
        ];
        
        /* 
        Render.GradientRect(Screex - 25 + offset, y - 130 - 55 * drawn, label_width + 15, 45, 1, [10, 10, 10, 20], [10, 10, 10, 0]); 
        Render.String(x - 25 + offset, y - 123 - 55 * drawn, 0, mod.label, [10, 10, 10, 255], 4); 
        Render.String(x - 25 + offset, y - 125 - 55 * drawn, 0, mod.label, color, 4); 
        */
       const font = Render.AddFont( "Verdana", 16, 650);
       Render.GradientRect(5 + offset, y - 15 - 45 * drawn, label_width + 30, 35, 1, [10, 10, 10, 20], [10, 10, 10, 4]);
       Render.StringCustom(10 + offset, y - 8 - 45 * drawn, 0, mod.label, [10, 10, 10, 255], font); 
       Render.StringCustom(10 + offset, y - 10 - 45 * drawn, 0, mod.label, color, font);
       
        if (mod.extra)
            mod.extra(32 + offset + label_width, y + 4 - 45 * drawn, color);

        drawn++;
    }
}

function on_draw() {
    const me = Entity.GetLocalPlayer();

    if (!me || !Entity.IsAlive(me))
        return;

    draw_indicators();
    ;
    draw_timer();
}

function on_bomb_beginplant()
{
    bombsite = Event.GetInt("site");
    last_time = Globals.Curtime();
}

function on_bomb_planted()
{
    planted = true;
    bombsite = -1;
    offset = 15;
}

function on_bomb_abortplant()
{
    bombsite = -1;
}

function on_bomb_exploded()
{
    planted = false;
    offset = 0;
}

function on_round_prestart()
{
    planted = false;
    offset = 0;
    bombsite = -1;
    last_time = 0;
}

function on_player_connect()
{
    var c4 = Entity.GetEntitiesByClassID(128)[0];

    last_time = 0;

    if (!c4)
    {
        planted = false;
        offset = 0;
        bombsite = -1;
        return;
    }

    planted = true;
    offset = 15;
    bombsite = Entity.GetProp(c4, "CPlantedC4", "m_nBombSite");
}

Cheat.RegisterCallback("Draw", "on_draw");
Cheat.RegisterCallback("bomb_beginplant", "on_bomb_beginplant");
Cheat.RegisterCallback("bomb_planted", "on_bomb_planted");
Cheat.RegisterCallback("bomb_abortplant", "on_bomb_abortplant");
Cheat.RegisterCallback("bomb_exploded", "on_bomb_exploded");
Cheat.RegisterCallback("round_prestart", "on_round_prestart");
Cheat.RegisterCallback("player_connect_full", "on_player_connect");

ScreenSize = Render.GetScreenSize();







function allauto(){

    
   
    var osa = UI.GetValue( "Script items", "Autowall Key");  
    var enable = (UI.IsHotkeyActive( "Script items", "Autowall on key"));
   
    if (osa == 1) {
       
    if(enable == 0) {
        UI.SetValue( "Rage", "GENERAL", "Targeting", "Disable autowall", true )
        UI.SetValue( "Rage", "PISTOL", "Pistol config", "Disable autowall", true )
        UI.SetValue( "Rage", "SCOUT", "Scout config", "Disable autowall", true )
        UI.SetValue( "Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall", true )
        UI.SetValue( "Rage", "AWP", "AWP config", "Disable autowall", true )
        UI.SetValue( "Rage", "AUTOSNIPER", "Auto config", "Disable autowall", true )
    }
    if (enable == 1) {
        UI.SetValue( "Rage", "GENERAL", "Targeting", "Disable autowall", false )
        UI.SetValue( "Rage", "PISTOL", "Pistol config", "Disable autowall", false )
        UI.SetValue( "Rage", "SCOUT", "Scout config", "Disable autowall", false )
        UI.SetValue( "Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall", false )
        UI.SetValue( "Rage", "AWP", "AWP config", "Disable autowall", false )
        UI.SetValue( "Rage", "AUTOSNIPER", "Auto config", "Disable autowall", false )
    }
    }
}

Cheat.RegisterCallback( "CreateMove", "allauto" )









function getColor(str) 
{

    return UI.GetColor("Misc", "JAVASCRIPT", "Script items", str);

}



function rainbowColors()
{



tickcount = Globals.Tickcount();






localplayer_index = Entity.GetLocalPlayer( );

localplayer_alive = Entity.IsAlive( localplayer_index );

if (localplayer_alive == true)
if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Antiaim arrow") == 1)
{
    
    var font = Render.AddFont("Arrows", 20, 900);
    var ScreenSize = Render.GetScreenSize()
    
    color_1 = UI.GetColor("Script items", "Arrow color");
    if(UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter"))
    {
        Render.StringCustom(ScreenSize[0]/2-125, ScreenSize[1]/2-10, 1, "b", color_1, font);
    }

    else
    {
        Render.StringCustom(ScreenSize[0]/2+125, ScreenSize[1]/2-10, 1, "a", color_1, font);
    }

}

}

function aaindicator()
{



tickcount = Globals.Tickcount();
var screen_size = Global.GetScreenSize();




localplayer_index = Entity.GetLocalPlayer( );

localplayer_alive = Entity.IsAlive( localplayer_index );

if (localplayer_alive == true)
if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Antiaim arrow 2") == 1)
{
    i = 1
function alp(c, a) {
    return [c[0], c[1], c[2], a]
}
    
    
    color_2 = UI.GetColor("Script items", "Arrow color 2");
    if(UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter"))
    {
        LPx = [(screen_size[0] / 2) - 25, (screen_size[1] / 2) + 7];
            LPy = [(screen_size[0] / 2) - 25, (screen_size[1] / 2) - 7];
            LPz = [(screen_size[0] / 2) - 37, (screen_size[1] / 2)];
            Render.Polygon([[LPx[0] + 1, LPx[1] + 1] , [LPz[0] + 1, LPz[1] + 1], [LPy[0] + 1, LPy[1] + 1]], [0, 0, 0, 100])
            Render.Polygon([LPx, LPz, LPy], [100, 100, 100, 200])
            Render.Polygon([LPx, LPz, LPy], alp(color_2, 255))
      
    }

    else
    {
        RPx = [(screen_size[0] / 2) + 25, (screen_size[1] / 2) + 7];
        RPy = [(screen_size[0] / 2) + 25, (screen_size[1] / 2) - 7];
        RPz = [(screen_size[0] / 2) + 37, (screen_size[1] / 2)];
        Render.Polygon([[RPy[0] + 1, RPy[1] + 1], [RPz[0] + 1, RPz[1] + 1], [RPx[0] + 1, RPx[1] + 1]], [0, 0, 0, 100])
        Render.Polygon([RPy, RPz, RPx], [100, 100, 100, 200])
        Render.Polygon([RPy, RPz, RPx], alp(color_2, 255))
        
    }

}

}
function rhookindicators()
{



tickcount = Globals.Tickcount();
var screen_size = Global.GetScreenSize();





localplayer_index = Entity.GetLocalPlayer( );

localplayer_alive = Entity.IsAlive( localplayer_index );

if (localplayer_alive == true)
if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Antiaim arrow 3") == 1)
{
    
    
    var font = Render.AddFont("Arial", 24, 0); 
    var font_2 = Render.AddFont("Arrows", 24, 0);
    color_3 = UI.GetColor("Script items", "Arrow color 3");
    if(UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter"))
    {
        
        
        Render.StringCustom(ScreenSize[0]/2-100, ScreenSize[1]/2 - 21, 1, "-", color_3, font);
        
    }

    else
    {
        
        Render.StringCustom(ScreenSize[0]/2+100, ScreenSize[1]/2 - 21, 1, "-", color_3, font);
       
    }

}

}

Cheat.RegisterCallback("Draw", "rhookindicators");
Cheat.RegisterCallback("Draw", "rainbowColors");
Cheat.RegisterCallback("Draw", "aaindicator");

function vector_length(a)
{
    return Math.sqrt(a[0] ** 2 + a[1] ** 2 + a[2] ** 2);
}


function angle_diff(angle1, angle2)
{
    var diff = angle1 - angle2;
    diff %= 360;
    if(diff > 180)
    {
        diff -= 360;
    }
    if(diff < -180)
    {
        diff += 360;
    }
    return diff;
}

function random_float(min, max)
{
    return Math.random() * (max - min) + min;
}
    





function aatypes()
{
    
            
    
    var local = 0;
    current_inversion = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter") == 1 ? -1 : 1;
    var real_yaw_offset = 60 * current_inversion
    
 
    var lower_body_yaw_offset = 0;
    var local_velocity = Entity.GetProp(local, "CBasePlayer", "m_vecVelocity[0]");
    var local_velocity_length = vector_length(local_velocity);
    
    
   
    
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "sigaretahook aa") == 1)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "LBY aa") == 0)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "CENTERED aa") == 0)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "JITTER aa") == 0)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "STATIC aa") == 0)
   
    {
        
        var fake_yaw = Local.GetFakeYaw();
        
        var real_yaw = Local.GetRealYaw();
        
        var local_eye_yaw_netvar = Entity.GetProp(local, "CCSPlayer", "m_angEyeAngles")[1];
            
            var local_eye_yaw_real_delta = angle_diff(local_eye_yaw_netvar, real_yaw);
            var local_eye_yaw_fake_delta = angle_diff(local_eye_yaw_netvar, fake_yaw);

           
            real_yaw_offset = local_eye_yaw_real_delta > 35 ? (15 * -current_inversion) : (60 * random_float(0.6, 2.5) * -current_inversion); 
           
            lower_body_yaw_offset = 160 * current_inversion + local_eye_yaw_fake_delta < 50 ? ((Globals.Curtime() * 180 / random_float(-5, 5) % 240) * current_inversion) : ((Globals.Curtime() * 360 / random_float(-0.1, 0.3) % 91) * current_inversion);
           
           
            if(Globals.Tickcount() % 3 == 0)
           
            {
                lower_body_yaw_offset *= -1.5;
            }
            
            
            
            if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "JITTER ON SLOWWALK") == 1)
            if(UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk"))
            {
                    
            
                real_yaw_offset = ((Globals.Curtime() * 360 / random_float(0, 180)));
            
                // real_yaw_offset = 30 * random_float(0, 180);
                    
        
            
                lower_body_yaw_offset = 0;
            
                if(Globals.Tickcount() % 7 == 0)
            
                {
            
                    lower_body_yaw_offset = Math.random() < 0.5 ? 0 : 15;
            
                }
                AntiAim.SetRealOffset(real_yaw_offset);
                AntiAim.SetLBYOffset(lower_body_yaw_offset);
                
            }
                
             
       AntiAim.SetRealOffset(real_yaw_offset);
       AntiAim.SetLBYOffset(lower_body_yaw_offset);
    } 



    
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "LBY aa") == 1)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "CENTERED aa") == 0)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "sigaretahook aa") == 0)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "JITTER aa") == 0)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "STATIC aa") == 0)
    {
        
        real_yaw_offset = (local_velocity_length > 3.3 ? 0 : 120) * -current_inversion;
        lower_body_yaw_offset = 120 * current_inversion;
        if(Globals.Tickcount() % 7 == 0)
        {
            lower_body_yaw_offset = Math.random() < 0.5 ? 0 : 120;
        }
    }
    AntiAim.SetRealOffset(real_yaw_offset);
    AntiAim.SetLBYOffset(lower_body_yaw_offset);
    
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "STATIC aa") == 1)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "LBY aa") == 0)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "CENTERED aa") == 0)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "sigaretahook aa") == 0)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "JITTER aa") == 0)
    {
        {
            real_yaw_offset = 120 * -current_inversion;
            
            lower_body_yaw_offset = 0;
            
        }
        AntiAim.SetRealOffset(real_yaw_offset);
        AntiAim.SetLBYOffset(lower_body_yaw_offset);
     
    }

    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "CENTERED aa") == 1)
        if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "LBY aa") == 0)
        if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "sigaretahook aa") == 0)
        if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "JITTER aa") == 0)
        if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "STATIC aa") == 0)
    {
        
        real_yaw_offset = (local_velocity_length > 3.3 ? 60 : 15) * -current_inversion;
        lower_body_yaw_offset = 120 * current_inversion;
        if(Globals.Tickcount() % 7 == 0)
        {
            lower_body_yaw_offset = Math.random() < 0.5 ? 0 : 180;
        }
    }
    AntiAim.SetRealOffset(real_yaw_offset);
    AntiAim.SetLBYOffset(lower_body_yaw_offset);
    
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "JITTER aa") == 1)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "CENTERED aa") == 0)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "LBY aa") == 0)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "sigaretahook aa") == 0)
    if(UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "STATIC aa") == 0)
    {
        {
            
                real_yaw_offset = ((Globals.Curtime() * 360 / random_float(0, 180)));
               // real_yaw_offset = 30 * random_float(0, 180);
            

               lower_body_yaw_offset = 0;
               if(Globals.Tickcount() % 7 == 0)
               {
                   lower_body_yaw_offset = Math.random() < 0.5 ? 0 : 15;
               }
            
        }
        AntiAim.SetRealOffset(real_yaw_offset);
        AntiAim.SetLBYOffset(lower_body_yaw_offset);
     
    }
    
}
Cheat.RegisterCallback( "CreateMove", "aatypes" )




function watermark() 
{

    
    localplayer_alive = Entity.IsAlive( localplayer_index );
    
    if (localplayer_alive == true)
    
    {
    
        if(UI.GetValue("Script items", "Watermark") == false) return;
    
        var watermark_font = Render.AddFont("Verdana", 8, 250);

        var watermark_font_2 = Render.AddFont("Verdana", 8, 500);
    
        var screensize = Render.GetScreenSize();
    
        const ping = Math.floor(Global.Latency() * 1000 / 1.5);
  
        const fps = Math.floor( 1 / Global.Frametime() );
  
        const now = new Date();
  
        const hours = now.getHours(), mins = now.getMinutes(), secs = now.getSeconds();
  
        var datetime = (hours < 10 ? "0" + hours : hours) + ":" + (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs);
  
        var tickrate = Global.Tickrate()
        
        
        var username = Cheat.GetUsername();
  
        var ip = World.GetServerString();

        var watermark_string = "sigaretahook [beta] | " + username;

        var colorw = UI.GetColor("Script items", "Watermark color");


        if(ping == 0) {

            watermark_string  += (" | " + datetime);

        }

        else {

            watermark_string += (" | "  + "ping: " + ping + " | fps: " + fps + " | " + datetime);

        }

        var string_size = Render.TextSizeCustom(watermark_string, watermark_font);

        Render.FilledRect(screensize[0] * 0.99 - string_size[0], 8, string_size[0] + 10, 23, [56, 60, 67, 60]);

        Render.GradientRect(screensize[0] * 0.99 - string_size[0], 6, string_size[0] + 10, 3, 1, colorw, [colorw[0] * 0.75, colorw[1]*0.75, colorw[2]*0.75,colorw[3] * 0.75]);

        Render.GradientRect(screensize[0] * 0.99 - string_size[0], 7, string_size[0] + 10, 3, 1, colorw, [colorw[0] * 0.75, colorw[1]*0.75, colorw[2]*0.75,colorw[3] * 0.75]);

        Render.StringCustom(screensize[0] * 0.99  - string_size[0] + 6, 13, 0, watermark_string, [0, 0, 0, 255], watermark_font_2);  
 

        Render.StringCustom(screensize[0] * 0.99 - string_size[0] + 5, 13, 0, watermark_string, [255, 255, 255, 255], watermark_font);
  


    }
}
Cheat.RegisterCallback("Draw", "watermark");



function GetScriptOption(name)
{
    var Value = UI.GetValue("Misc", "JAVASCRIPT", "Script items", name);
    return Value;
}

function radian(degree)
{
    return degree * Math.PI / 180.0;
}

function ExtendVector(vector, angle, extension)
{
    var radianAngle = radian(angle);
    return [extension * Math.cos(radianAngle) + vector[0], extension * Math.sin(radianAngle) + vector[1], vector[2]];
}

function VectorAdd(a, b)
{
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function VectorSubtract(a, b)
{
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function VectorMultiply(a, b)
{
    return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
}

function VectorLength(x, y, z)
{
    return Math.sqrt(x * x + y * y + z * z);
}

function VectorNormalize(vec)
{
    var length = VectorLength(vec[0], vec[1], vec[2]);
    return [vec[0] / length, vec[1] / length, vec[2] / length];
}

function VectorDot(a, b)
{
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function VectorDistance(a, b)
{
    return VectorLength(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

function ClosestPointOnRay(target, rayStart, rayEnd)
{
    var to = VectorSubtract(target, rayStart);
    var dir = VectorSubtract(rayEnd, rayStart);
    var length = VectorLength(dir[0], dir[1], dir[2]);
    dir = VectorNormalize(dir);

    var rangeAlong = VectorDot(dir, to);
    if (rangeAlong < 0.0)
    {
        return rayStart;
    }
    if (rangeAlong > length)
    {
        return rayEnd;
    }
    return VectorAdd(rayStart, VectorMultiply(dir, [rangeAlong, rangeAlong, rangeAlong]));
}

function Flip()
{
    UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
}

var lastHitTime = 0.0;
var lastImpactTimes =
[
    0.0
];
var lastImpacts =
[
    [0.0, 0.0, 0.0]
];



function OnBulletImpact()
{
    if (GetScriptOption("Anti Bruteforce") !== 1) return;

    var curtime = Global.Curtime();
    if (Math.abs(lastHitTime - curtime) < 0.5) return;

    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var impact = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z"), curtime];
    var source;
    if (Entity.IsValid(entity) && Entity.IsEnemy(entity))
    {
        if (!Entity.IsDormant(entity))
        {
            source = Entity.GetEyePosition(entity);
        }
        else if (Math.abs(lastImpactTimes[entity] - curtime) < 0.1)
        {
            source = lastImpacts[entity];
        }
        else
        {
            lastImpacts[entity] = impact;
            lastImpactTimes[entity] = curtime;
            return;
        }
        var local = Entity.GetLocalPlayer();
        var localEye = Entity.GetEyePosition(local);
        var localOrigin = Entity.GetProp(local, "CBaseEntity", "m_vecOrigin");
        var localBody = VectorMultiply(VectorAdd(localEye, localOrigin), [0.5, 0.5, 0.5]);

        var bodyVec = ClosestPointOnRay(localBody, source, impact);
        var bodyDist = VectorDistance(localBody, bodyVec);
        
        if (bodyDist < 128.0)       //he clearly shot at us!
        {
            var realAngle = Local.GetRealYaw();
            var fakeAngle = Local.GetFakeYaw();

            var headVec = ClosestPointOnRay(localEye, source, impact);
            var headDist = VectorDistance(localEye, headVec);
            var feetVec = ClosestPointOnRay(localOrigin, source, impact);
            var feetDist = VectorDistance(localOrigin, feetVec);

            var closestRayPoint;
            var realPos;
            var fakePos;

            if (bodyDist < headDist && bodyDist < feetDist)     //that's a pelvis
            {                                                   //pelvis direction = goalfeetyaw + 180       
                closestRayPoint = bodyVec;
                realPos = ExtendVector(bodyVec, realAngle + 180.0, 10.0);
                fakePos = ExtendVector(bodyVec, fakeAngle + 180.0, 10.0);
            }
            else if (feetDist < headDist)                       //ow my toe
            {                                                   //toe direction = goalfeetyaw -30 +- 90
                closestRayPoint = feetVec;
                var realPos1 = ExtendVector(bodyVec, realAngle - 30.0 + 90.0, 10.0);
                var realPos2 = ExtendVector(bodyVec, realAngle - 30.0 - 90.0, 10.0);
                var fakePos1 = ExtendVector(bodyVec, fakeAngle - 30.0 + 90.0, 10.0);
                var fakePos2 = ExtendVector(bodyVec, fakeAngle - 30.0 - 90.0, 10.0);
                if (VectorDistance(feetVec, realPos1) < VectorDistance(feetVec, realPos2))
                {
                    realPos = realPos1;
                }
                else
                {
                    realPos = realPos2;
                }
                if (VectorDistance(feetVec, fakePos1) < VectorDistance(feetVec, fakePos2))
                {
                    fakePos = fakePos1;
                }
                else
                {
                    fakePos = fakePos2;
                }
            }
            else                                                //ow my head i feel like i slept for 2 days
            {
                closestRayPoint = headVec;
                realPos = ExtendVector(bodyVec, realAngle, 10.0);
                fakePos = ExtendVector(bodyVec, fakeAngle, 10.0);
            }

            if (VectorDistance(closestRayPoint, fakePos) < VectorDistance(closestRayPoint, realPos))        //they shot at our fake. they will probably not gonna shoot it again.
            {
                lastHitTime = curtime;
                Flip();
            }
        }

        lastImpacts[entity] = impact;
        lastImpactTimes[entity] = curtime;
    }
}


Cheat.RegisterCallback("bullet_impact", "OnBulletImpact");


var colorhotkeys = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Keybinds indicator color");
if (colorhotkeys[3] == 0) {
    UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Keybinds indicator color", [213, 147, 224, 255]);
}
var alpha = 0;
var maxwidth = 0;
var swalpha = 0;
var fdalpha = 0;
var apalpha = 0;
var aialpha = 0;
var spalpha = 0;
var fbalpha = 0;
var dtalpha = 0;
var hsalpha = 0;
var doalpha = 0;
var edalpha = 0;
var textalpha = 0;
var h = new Array();

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

function main_hotkeys() 
{

    

    if (!World.GetServerString()) return;
    if(UI.GetValue("Script items", "Keybinds indicator") == 1)
    {

        

        const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Keybinds X offset"),

        y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Keybinds Y offset");

        colorhotkeys = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Keybinds indicator color");
        var font = Render.AddFont("Verdana", 8, 250);
        var frames = 8 * Globals.Frametime();
        var width = 75;
        var maxwidth = 0;
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            swalpha = Math.min(swalpha + frames, 1);
        } else {
            swalpha = swalpha - frames;
            if (swalpha < 0) swalpha = 0;
            if (swalpha == 0) {
                h.splice(h.indexOf("Slow walk"));
            }
        }

        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
            fdalpha = Math.min(fdalpha + frames, 1);
        } else {
            fdalpha = fdalpha - frames;
            if (fdalpha < 0) fdalpha = 0;
            if (fdalpha == 0) {
                h.splice(h.indexOf("Duck peek assist"));
            }
        }
        if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Edge jump")) {
            edalpha = Math.min(edalpha + frames, 1);
        } else {
            edalpha = edalpha - frames;
            if (edalpha < 0) edalpha = 0;
            if (edalpha == 0) {
                h.splice(h.indexOf("Jump at edge"));
            }
        }
        if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
            apalpha = Math.min(apalpha + frames, 1);
        } else {
            apalpha = apalpha - frames;
            if (apalpha < 0) apalpha = 0;
            if (apalpha == 0) {
                h.splice(h.indexOf("Auto peek"));
            }
        }

        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            aialpha = Math.min(aialpha + frames, 1);
        } else {
            aialpha = aialpha - frames;
            if (aialpha < 0) aialpha = 0;
            if (aialpha == 0) {
                h.splice(h.indexOf("Anti-aim inverter"));
            }
        }

        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            aialpha = Math.min(aialpha + frames, 1);
        } else {
            aialpha = aialpha - frames;
            if (aialpha < 0) aialpha = 0;
            if (aialpha == 0) {
                h.splice(h.indexOf("Inverter"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
            spalpha = Math.min(spalpha + frames, 1);
        } else {
            spalpha = spalpha - frames;
            if (spalpha < 0) spalpha = 0;
            if (spalpha == 0) {
                h.splice(h.indexOf("Safe point override"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
            fbalpha = Math.min(fbalpha + frames, 1);
        } else {
            fbalpha = fbalpha - frames;
            if (fbalpha < 0) fbalpha = 0;
            if (fbalpha == 0) {
                h.splice(h.indexOf("Force body aim"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            dtalpha = Math.min(dtalpha + frames, 1);
        } else {
            dtalpha = dtalpha - frames;
            if (dtalpha < 0) dtalpha = 0;
            if (dtalpha == 0) {
                h.splice(h.indexOf("Double tap"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
            hsalpha = Math.min(hsalpha + frames, 1);
        } else {
            hsalpha = hsalpha - frames;
            if (hsalpha < 0) hsalpha = 0;
            if (hsalpha == 0) {
                h.splice(h.indexOf("Hide shots"));
            }
        }

        

        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            if (h.indexOf("Slow walk") == -1)
                h.push("Slow walk")
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
            if (h.indexOf("Duck peek assist") == -1)
                h.push("Duck peek assist")
        }
        if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
            if (h.indexOf("Auto peek") == -1)
                h.push("Auto peek")
        }
        if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Edge jump")) {
            if (h.indexOf("Jump at edge") == -1)
                h.push("Jump at edge")
        }
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
            if (h.indexOf("Safe point override") == -1)
                h.push("Safe point override")
        }
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
            if (h.indexOf("Force body aim") == -1)
                h.push("Force body aim")
        }
        
        if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
            if (h.indexOf("Hide shots") == -1)
                h.push("Hide shots")
        }
        

        if (h.length > 0) {
            alpha = Math.min(alpha + frames, 1);
        } else {
            alpha = alpha - frames;
            if (alpha < 0) alpha = 0;
        }
        for (i = 0; i < h.length; i++) {
            if (Render.TextSizeCustom(h[i], font)[0] > maxwidth) {
                maxwidth = Render.TextSizeCustom(h[i], font)[0];
            }
        }
        if (maxwidth == 0) maxwidth = 50;
        width = width + maxwidth;
        if (alpha > 0) {
                Render.FilledRect(x, y + 3, width, 2, [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], alpha * 255]);
                Render.FilledRect(x, y + 5, width, 18, [17, 17, 17, alpha * 0]);
                Render.StringCustom(x + width / 2 - (Render.TextSizeCustom("keybinds", font)[0] / 2) + 2, y + 9, 0, "keybinds", [0, 0, 0, alpha * 255 / 1.3], font);
                Render.StringCustom(x + width / 2 - (Render.TextSizeCustom("keybinds", font)[0] / 2) + 1, y + 8, 0, "keybinds", [255, 255, 255, alpha * 255], font);
                Render.FilledRect(x, y + 23, width, 18 * h.length, [17, 17, 17, Math.min(colorhotkeys[3], alpha * 0)]);
                for (i = 0; i < h.length; i++) {
                    switch (h[i]) {
                        case 'Slow walk':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(swalpha * 0, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, swalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, swalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, swalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, swalpha * 255], font);
                            break;
                        case 'Duck peek assist':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(swalpha * 0, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, fdalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, fdalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, fdalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, fdalpha * 255], font);
                            break;
                        case 'Auto peek':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(swalpha * 0, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, apalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, apalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, apalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, apalpha * 255], font);
                            break;
                        
                        case 'Safe point override':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(swalpha * 0, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, spalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, spalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, spalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, spalpha * 255], font);
                            break;
                        case 'Jump at edge':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(swalpha * 0, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, edalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, edalpha * 255], font);
    
                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, edalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, edalpha * 255], font);
                            break;
                    
                            
                        case 'Force body aim':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(swalpha * 0, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, fbalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, fbalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, fbalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, fbalpha * 255], font);
                            break;
                        
                        case 'Damage override':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(swalpha * 0, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, doalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, doalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, doalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, doalpha * 255], font);
                            break;
                    }

                }
        }
        if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
            const mouse_pos = Global.GetCursorPosition();
            if (in_bounds(mouse_pos, x, y, x + width, y + 30)) {
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Keybinds X offset", mouse_pos[0] - width / 2);
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Keybinds Y offset", mouse_pos[1] - 20);
            }
        }
}   }
Global.RegisterCallback("Draw", "main_hotkeys")



UI.AddLabel("            sigaretahook"); 




