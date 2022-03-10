const menu =
{
    menu_types:
    {
        TYPE_VALUE: 0,
        TYPE_COLOR: 1,
        TYPE_KEYBIND: 2,
        TYPE_REFERENCE: 3
    },

    menu_array: [], //where the items lie lol

    //I understand that all of those can be generalized, but this way the code is more clear.
    create_checkbox: function(created_var_name)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddCheckbox(created_var_name), is_item_visible: true}) - 1; //I guess the variable naming is a bit gay rofl
    },

    create_slider_int: function(created_var_name, created_var_min, created_var_max)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddSliderInt(created_var_name, created_var_min, created_var_max), is_item_visible: true}) - 1;
    },

    create_slider_float: function(created_var_name, created_var_min, created_var_max)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddSliderFloat(created_var_name, created_var_min, created_var_max), is_item_visible: true}) - 1;
    },

    create_dropdown: function(created_var_name, created_var_dropdown_array)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddDropdown(created_var_name, created_var_dropdown_array), is_item_visible: true}) - 1;
    },

    create_multi_dropdown: function(created_var_name, created_var_dropdown_array)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddMultiDropdown(created_var_name, created_var_dropdown_array), is_item_visible: true}) - 1;
    },

    create_colorpicker: function(created_var_name)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_COLOR, var_name: UI.AddColorPicker(created_var_name), is_item_visible: true}) - 1;
    },

    create_keybind: function(created_var_name)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_KEYBIND, var_name: UI.AddHotkey(created_var_name), is_item_visible: true}) - 1;
    },

    create_menu_reference: function(var_path, var_type)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_REFERENCE, var_name: var_path, is_item_visible: true, reference_subtype: var_type}) - 1;
    },

    get_item_value: function(var_index)
    {
        if(typeof(this.menu_array[var_index]) != "undefined")
        {
            const var_type = this.menu_array[var_index].type == this.menu_types.TYPE_REFERENCE ? this.menu_array[var_index].reference_subtype : this.menu_array[var_index].type;
            switch(var_type)
            {
                case this.menu_types.TYPE_VALUE:
                    return UI.GetValue.apply(null, this.menu_array[var_index].var_name); //Why isn't UI.GetValue good for all menu items? llama pls fix
                case this.menu_types.TYPE_COLOR:
                    return UI.GetColor.apply(null, this.menu_array[var_index].var_name);
                case this.menu_types.TYPE_KEYBIND:
                    return UI.IsHotkeyActive.apply(null, this.menu_array[var_index].var_name);
                default:
                    throw new Error("[onetap] invalid type specified for get_script_item_value call (variable name " + menu_array[var_index].var_name + ", specified type: " + type + ")\n");
            }
        }
        throw new Error("[onetap] invalid menu item specified for get_script_item_value\n");
    },

    set_item_visibility: function(var_index, visibility_status)
    {
        if(typeof(this.menu_array[var_index]) != "undefined")
        {
            if(this.menu_array[var_index].is_item_visible != visibility_status && UI.IsMenuOpen())
            {
                UI.SetEnabled.apply(null, this.menu_array[var_index].var_name.concat(visibility_status));
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
            const var_type = this.menu_array[var_index].type == this.menu_types.TYPE_REFERENCE ? this.menu_array[var_index].reference_subtype : this.menu_array[var_index].type;
            switch(var_type)
            {
                case this.menu_types.TYPE_VALUE:
                    UI.SetValue.apply(null, this.menu_array[var_index].var_name.concat(new_value));
                    break;
                case this.menu_types.TYPE_COLOR:
                    UI.SetColor.apply(null, this.menu_array[var_index].var_name.concat(new_value));
                    break;
                case this.menu_types.TYPE_KEYBIND:
                    const keybind_state = this.get_item_value(var_index);
                    if(keybind_state != new_value)
                    {
                        UI.ToggleHotkey.apply(null, this.menu_array[var_index].var_name); //Requires hotkey to be in "Toggle" mode :(
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

const master_switch = menu.create_checkbox("Doubletap improvements");
const doubletap_speed = menu.create_slider_int("Speed", 0, 4);

const doubletap_enabled_hotkey_reference = menu.create_menu_reference(["Rage", "Doubletap"], menu.menu_types.TYPE_KEYBIND);
const doubletap_enabled_value_reference = menu.create_menu_reference(["Rage", "Doubletap"], menu.menu_types.TYPE_VALUE);

const utility = { log_prefix: "[doubletap_improvements] ", log_prefix_col: [0, 255, 0, 200], log: function(string) { Cheat.PrintColor(this.log_prefix_col, this.log_prefix); Cheat.Print(string + "\n"); } };

const able_to_shift_shot = function(local, ticks_to_shift) //From Salvatore :)
{
    const server_time = (Entity.GetProp(local, "CCSPlayer", "m_nTickBase") - ticks_to_shift) * Globals.TickInterval();
    return server_time > Entity.GetProp(local, "CCSPlayer", "m_flNextAttack") && server_time > Entity.GetProp(Entity.GetWeapon(local), "CBaseCombatWeapon", "m_flNextPrimaryAttack");
};

const on_move = function()
{
    if(menu.get_item_value(doubletap_enabled_value_reference) && menu.get_item_value(doubletap_enabled_hotkey_reference) && menu.get_item_value(master_switch))
    {
        const desired_doubletap_speed = menu.get_item_value(doubletap_speed);

        Exploit.OverrideShift(12 + desired_doubletap_speed); // suicide 16 ticks lmao shift
        Exploit.OverrideTolerance(4 - desired_doubletap_speed); //yes i know its clamped to 1 but its PRETTY this way!

        const local = Entity.GetLocalPlayer();

        const exploit_charge = Exploit.GetCharge();
        exploit_charge != 1 ? Exploit.EnableRecharge() : Exploit.DisableRecharge();

        const able_to_shift = able_to_shift_shot(local, 12 + desired_doubletap_speed);

        const can_doubletap = exploit_charge == 1 && able_to_shift;
        var should_recharge_doubletap = !can_doubletap && able_to_shift;

        const enemies = Entity.GetEnemies().filter(function(entity_index) { return Entity.IsValid(entity_index) && Entity.IsAlive(entity_index) && !Entity.IsDormant(entity_index); });

        const local_eyepos = Entity.GetEyePosition(local);

        if(can_doubletap || should_recharge_doubletap)
        {
            for(var i = 0; i < enemies.length; i++)
            {
                const entity_index = enemies[i];
                const entity_health = Entity.GetProp(entity_index, "CBasePlayer", "m_iHealth");
                for(var hitbox = 2; hitbox <= 4; hitbox++)
                {
                    const hitbox_position = Entity.GetHitboxPosition(entity_index, hitbox);
                    if(typeof(hitbox_position) != "undefined")
                    {
                        const trace = Trace.Bullet(local, entity_index, local_eyepos, hitbox_position);
                        if(can_doubletap && (trace[1] >= entity_health / 2))
                        {
                            Ragebot.ForceTargetMinimumDamage(entity_index, entity_health / 2);
                        }
                        else if(should_recharge_doubletap && trace[2])
                        {
                            should_recharge_doubletap = false; //DO NOT RECHARGE DOUBLETAP IF THERE'S SOMEONE VISIBLE
                            break;
                        }
                    }
                }
            }
        }
       

        if(should_recharge_doubletap)
        {
            Exploit.DisableRecharge();
            Exploit.Recharge();
        }
    }
};

const on_unload = function()
{
    Exploit.EnableRecharge();
};

Cheat.RegisterCallback("CreateMove", "on_move");
Cheat.RegisterCallback("Unload", "on_unload");

utility.log("DT loaded ");