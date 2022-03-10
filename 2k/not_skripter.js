/*
*
* Customer: Fulleno#8846
* 
*
*/

//region api
const global = [], globals = [], sound = [], cheat = [], local = [], world = [], input = [], render = [], ui = [], convar = [], event = [], entity = [], trace = [], usercmd = [], antiaim = [], exploit = [], ragebot = [], material = []; global.print = Global.Print, global.print_chat = Global.PrintChat, global.print_color = Global.PrintColor, global.register_callback = Global.RegisterCallback, global.execute_command = Global.ExecuteCommand, global.frame_stage = Global.FrameStage, global.tickcount = Global.Tickcount, global.tickrate = Global.Tickrate, global.tick_interval = Global.TickInterval, global.curtime = Global.Curtime, global.realtime = Global.Realtime, global.frametime = Global.Frametime, global.latency = Global.Latency, global.get_view_angles = Global.GetViewAngles, global.set_view_angles = Global.SetViewAngles, global.get_map_name = Global.GetMapName, global.is_key_pressed = Global.IsKeyPressed, global.get_screen_size = Global.GetScreenSize, global.get_cursor_position = Global.GetCursorPosition, global.play_sound = Global.PlaySound, global.play_microphone = Global.PlayMicrophone, global.stop_microphone = Global.StopMicrophone, global.get_username = Global.GetUsername, global.set_clan_tag = Global.SetClanTag, globals.tickcount = Globals.Tickcount, globals.tickrate = Globals.Tickrate, globals.tick_interval = Globals.TickInterval, globals.curtime = Globals.Curtime, globals.realtime = Globals.Realtime, globals.frametime = Globals.Frametime, sound.play = Sound.Play, sound.play_microphone = Sound.PlayMicrophone, sound.stop_microphone = Sound.StopMicrophone, cheat.get_username = Cheat.GetUsername, cheat.register_callback = function(c, f) { switch (c) { case 'create_move': Cheat.RegisterCallback("CreateMove", f); break; case 'paint': Cheat.RegisterCallback("Draw", f); break; case 'fsn': Cheat.RegisterCallback("FrameStageNotify", f); break; case 'shutdown': Cheat.RegisterCallback("Unload", f); break; default: Cheat.RegisterCallback(c, f); break; } }, cheat.execute_command = Cheat.ExecuteCommand, cheat.frame_stage = Cheat.FrameStage, cheat.print = Cheat.Print, cheat.print_chat = Cheat.PrintChat, cheat.print_color = Cheat.PrintColor, local.latency = Local.Latency, local.get_view_angles = Local.GetViewAngles, local.set_view_angles = Local.SetViewAngles, local.set_clan_tag = Local.SetClanTag, local.get_real_yaw = Local.GetRealYaw, local.get_fake_yaw = Local.GetFakeYaw, local.get_spread = Local.GetSpread, local.get_inaccuracy = Local.GetInaccuracy, world.get_map_name = World.GetMapName, world.get_server_string = World.GetServerString, input.get_cursor_position = Input.GetCursorPosition, input.is_key_pressed = Input.IsKeyPressed, render.string = Render.String, render.text_size = Render.TextSize, render.line = Render.Line, render.rect = Render.Rect, render.filled_rect = Render.FilledRect, render.gradient_rect = Render.GradientRect, render.circle = Render.Circle, render.filled_circle = Render.FilledCircle, render.polygon = Render.Polygon, render.world_to_screen = Render.WorldToScreen, render.add_font = Render.AddFont, render.find_font = Render.FindFont, render.string_custom = Render.StringCustom, render.textured_rect = Render.TexturedRect, render.add_texture = Render.AddTexture, render.text_size_custom = Render.TextSizeCustom, render.get_screen_size = Render.GetScreenSize, ui.get_value = UI.GetValue, ui.set_value = UI.SetValue, ui.add_checkbox = UI.AddCheckbox, ui.add_slider_int = UI.AddSliderInt, ui.add_slider_float = UI.AddSliderFloat, ui.add_hotkey = UI.AddHotkey, ui.add_label = UI.AddLabel, ui.add_dropdown = UI.AddDropdown, ui.add_multi_dropdown = UI.AddMultiDropdown, ui.add_color_picker = UI.AddColorPicker, ui.add_textbox = UI.AddTextbox, ui.set_enabled = UI.SetEnabled, ui.get_string = UI.GetString, ui.get_color = UI.GetColor, ui.set_color = UI.SetColor, ui.is_hotkey_active = UI.IsHotkeyActive, ui.toggle_hotkey = UI.ToggleHotkey, ui.is_menu_open = UI.IsMenuOpen, convar.get_int = Convar.GetInt, convar.set_int = Convar.SetInt, convar.get_float = Convar.GetFloat, convar.set_float = Convar.SetFloat, convar.get_string = Convar.GetString, convar.set_string = Convar.SetString, event.get_int = Event.GetInt, event.get_float = Event.GetFloat, event.get_string = Event.GetString, entity.get_entities = Entity.GetEntities, entity.get_entities_by_class_i_d = Entity.GetEntitiesByClassID, entity.get_players = Entity.GetPlayers, entity.get_enemies = Entity.GetEnemies, entity.get_teammates = Entity.GetTeammates, entity.get_local_player = Entity.GetLocalPlayer, entity.get_game_rules_proxy = Entity.GetGameRulesProxy, entity.get_entity_from_user_i_d = Entity.GetEntityFromUserID, entity.is_teammate = Entity.IsTeammate, entity.is_enemy = Entity.IsEnemy, entity.is_bot = Entity.IsBot, entity.is_local_player = Entity.IsLocalPlayer, entity.is_valid = Entity.IsValid, entity.is_alive = Entity.IsAlive, entity.is_dormant = Entity.IsDormant, entity.get_class_i_d = Entity.GetClassID, entity.get_class_name = Entity.GetClassName, entity.get_name = Entity.GetName, entity.get_weapon = Entity.GetWeapon, entity.get_weapons = Entity.GetWeapons, entity.get_render_origin = Entity.GetRenderOrigin, entity.get_render_box = Entity.GetRenderBox, entity.get_prop = Entity.GetProp, entity.set_prop = Entity.SetProp, entity.get_hitbox_position = Entity.GetHitboxPosition, entity.get_eye_position = Entity.GetEyePosition, trace.line = Trace.Line, trace.bullet = Trace.Bullet, usercmd.set_movement = UserCMD.SetMovement, usercmd.get_movement = UserCMD.GetMovement, usercmd.set_angles = UserCMD.SetAngles, usercmd.force_jump = UserCMD.ForceJump, usercmd.force_crouch = UserCMD.ForceCrouch, antiaim.get_override = AntiAim.GetOverride, antiaim.set_override = AntiAim.SetOverride, antiaim.set_real_offset = AntiAim.SetRealOffset, antiaim.set_fake_offset = AntiAim.SetFakeOffset, antiaim.set_l_b_y_offset = AntiAim.SetLBYOffset, exploit.get_charge = Exploit.GetCharge, exploit.recharge = Exploit.Recharge, exploit.disable_recharge = Exploit.DisableRecharge, exploit.enable_recharge = Exploit.EnableRecharge, ragebot.get_target = Ragebot.GetTarget, ragebot.ignore_target = Ragebot.IgnoreTarget, ragebot.force_target = Ragebot.ForceTarget, ragebot.force_target_safety = Ragebot.ForceTargetSafety, ragebot.force_target_hitchance = Ragebot.ForceTargetHitchance, ragebot.force_target_minimum_damage = Ragebot.ForceTargetMinimumDamage, ragebot.force_hitbox_safety = Ragebot.ForceHitboxSafety, material.create = Material.Create, material.destroy = Material.Destroy, material.get = Material.Get, material.set_key_value = Material.SetKeyValue, material.refresh = Material.Refresh
//endregion

//region dependencies

/**
 * @title BetterUI
 * @version 2.0.1
 * @description A better UI system for Onetap
 */

var menu = {
    _class: 'BetterUI'
};
const menu_spacer = "                                                                                  ";

/**
 * Concats two elements into an array without increasing the array length.
 * Prevents the memory leak in 2.0.0 from happening
 * 
 * @param a {array}
 * @param b {any}
 */
menu.concat = function(a, b)
{
    // Creates a new array.
    var arr = [];

    // Push all items from the array 'a' into our array.
    for (var c in a)
    {
        arr.push(a[c]);
    }

    // Push the value 'b' into our array.
    arr.push(b);

    // Return the new array.
    return arr;
}

/**
 * Creates a new menu label
 *
 * @param label {string}
 */
menu.label = function(label)
{
    // Creates the label
    UI.AddLabel(label);
};

/**
 * Creates a new menu element
 *
 * @param func {function}
 * @param name {string}
 * @param label {string},
 * @param properties {array}
 */
menu.call = function(func, name, label, properties)
{
    // Get properties
    const final_name = name + menu_spacer + label;
    var final_props = [final_name];
    const element_info_t = {
        path: ["Misc", "JAVASCRIPT", "Script Items", final_name]
    };

    // If our properties aren't null, then pack them together.
    if (properties != null)
    {
        for (var i = 0; i < properties.length; i++)
        {
            final_props.push(properties[i]);
        }
    }

    // Create our menu element and return properties
    func.apply(null, final_props);
    return element_info_t;
};

/**
 * Creates a new menu reference
 *
 * @param path {array}
 */
menu.reference = function(path)
{
    const element_info_t = {
        path: path
    };

    return element_info_t;
};

/**
 * Gets the value of a menu element
 *
 * @param elem {array}
 * @return {*}
 */
menu.get = function(elem)
{
    // If the element doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Returns the element's value
    return UI.GetValue.apply(null, elem.path);
};

/**
 * Gets the value of a menu element
 *
 * @param elem {array}
 * @return {*}
 */
menu.get_hotkey = function(elem)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Returns the element's value
    return UI.IsHotkeyActive.apply(null, elem.path);
};

/**
 * Gets the value of a menu element
 *
 * @param elem {array}
 * @return {*}
 */
menu.get_color = function(elem)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Returns the element's value
    return UI.GetColor.apply(null, elem.path);
};

/**
 * Sets the value of a menu element
 *
 * @param elem {array}
 * @param value {*}
 */
menu.set = function(elem, value)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Get properties
    const properties = elem;

    // Set the element's value
    UI.SetValue.apply(null, this.concat(properties.path, value));
};

/**
 * Sets the value of a color picker
 *
 * @param elem {array}
 * @param color {array|Color}
 */
menu.set_color = function(elem, color)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Get properties
    const properties = elem;

    // Set the element's value
    UI.SetColor.apply(null, this.concat(properties.path, color));
};

/**
 * Toggles a hotkey
 *
 * @param elem {array}
 */
menu.toggle = function(elem)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Set the element's value
    UI.ToggleHotkey.apply(null, elem.path);
};

/**
 * Changes the visibility of a menu elements
 *
 * @param elem {array}
 * @param visible {boolean}
 */
menu.visibility = function(elem, visible)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Get properties
    const properties = elem;

    // Change the element's visibility
    UI.SetEnabled.apply(null, this.concat(properties.path, visible));
};

const distance_in_ft = function(origin, destination)
{
    const sub = [destination[0] - origin[0], destination[1] - origin[1], destination[2] - origin[2]];
    return Math.round(Math.sqrt(sub[0] ** 2 + sub[1] ** 2 + sub[2] ** 2) / 12);
}

const clamp = function(v, f, c)
{
    return Math.min(Math.max(v, f), c);
}

render.arc = function(x, y, r1, r2, s, d, col)
{
    for (var i = s; i < s + d; i++)
    {

        const rad = i * Math.PI / 180;

        render.line(x + Math.cos(rad) * r1, y + Math.sin(rad) * r1, x + Math.cos(rad) * r2, y + Math.sin(rad) * r2, col);
    }
}

const is_inside_screen = function(vec)
{
    const screen_size = render.get_screen_size();
    return vec[0] > 0 && vec[1] > 0 && vec[0] < screen_size[0] && vec[1] < screen_size[1];
}

//endregion

//region globals

var positions = [];

//endregion

//region menu

const enable = menu.call(ui.add_checkbox, "| Grenade warning", "gw_enable", []);
const tracer = menu.call(ui.add_checkbox, "| Grenade tracer", "gw_tracer", []);
const tracer_color = menu.call(ui.add_color_picker, "| Grenade tracer color", "gw_tracer_clr", []);
const max_dst = menu.call(ui.add_slider_int, "| Maximum distance", "gw_dist", [0, 500]);

//endregion

//region main

function import_nades() 
{
    if (!(menu.get(tracer)))
        return;

    grenades = entity.get_entities_by_class_i_d(9).concat(entity.get_entities_by_class_i_d(113)).concat(entity.get_entities_by_class_i_d(100));
    for (e in grenades) 
    {

        should_pass = false;

        for (g in positions) 
        {
            if (positions[g][0] == grenades[e]) {
                should_pass = true;
                continue;
            }
        }

        if (should_pass)
            continue;

        positions.push([grenades[e], Globals.Curtime(), [entity.get_render_origin(grenades[e])], Globals.Curtime()]);
    }
}

function render_trails() 
{
    const length = 256, rate = 0.1;
    const color = menu.get_color(tracer_color);

    for (g in positions) 
    {
        if (globals.curtime() - positions[g][3] > 3 || !entity.is_valid(positions[g][0])) 
        {
            positions.shift();
            continue;
        }

        if (globals.curtime() - positions[g][1] > rate) 
        {
            if (positions[g][2].length > length) 
            {
                positions[g][2].shift();
                positions[g][1] = globals.curtime();
            }

            positions[g][2].push(entity.get_render_origin(positions[g][0]));
        }

        for (l in positions[g][2]) 
        {
            pos = render.world_to_screen(positions[g][2][l]);

            if (l > 0) 
            {
                last = render.world_to_screen(positions[g][2][l - 1]);

                render.line(pos[0] - 1, pos[1] - 1, last[0] - 1, last[1] - 1, color);
                render.line(pos[0] - 1, pos[1] + 1, last[0] - 1, last[1] + 1, color);
                render.line(pos[0] + 1, pos[1] - 1, last[0] + 1, last[1] - 1, color);
                render.line(pos[0] + 1, pos[1] + 1, last[0] + 1, last[1] + 1, color);
                render.line(pos[0], pos[1], last[0], last[1], color);
            }

            last = render.world_to_screen(positions[g][2][positions[g][2].length - 1]);
        }
    }
}

function on_paint( )
{
    if (!(menu.get(enable)) && !(menu.get(tracer)))
        return;
    
    const grenades = entity.get_entities_by_class_i_d(9).concat(entity.get_entities_by_class_i_d(113)).concat(entity.get_entities_by_class_i_d(100));

    const me = entity.get_local_player( );

    if (!me)
        return;
    
    if (!entity.is_alive(me))
    {
        const obs = entity.get_prop(me, "CBasePlayer", "m_hObserverTarget");

        if (!entity.is_valid(obs))
            return;
        
        me = obs;
    }

    const origin = entity.get_eye_position(me);

    for (var i = 0; i < grenades.length; i++)
    {
        const g = grenades[i];

        const destination = entity.get_render_origin(g);
        const distance = distance_in_ft(origin, destination);

        if (distance > menu.get(max_dst))
        {
            continue;
        }

        const screen = render.world_to_screen(destination);
        const is_he = entity.get_class_i_d(g) === 9, is_inferno = entity.get_class_i_d(g) === 100;

        const trace = Trace.Line(me, origin, destination);

        const is_safe = distance > (is_inferno ? 15 : 20) || trace[1] < 0.61;

        if (is_he && entity.get_prop(g, "CBaseCSGrenadeProjectile", "m_nExplodeEffectTickBegin"))
        {
            continue;
        }

        render.filled_circle(screen[0], screen[1] - 50, 30, !is_safe ? [225, 20, 20, 175 ] : [20, 20, 20, 175]);
        render.string(screen[0], screen[1] - 75, 1, "!", [255, 250, 175, 200], 4);
        render.string(screen[0], screen[1] - 40, 1, distance + " ft", [232, 232, 232, 200], 3);

        if (is_inferno)
        {
            const time = entity.get_prop(g, "CInferno", "m_nFireEffectTickBegin") * globals.tick_interval();
            const factor = clamp(((time + 7) - globals.curtime()) / 7, 0, 7);
            
            render.arc(screen[0], screen[1] - 50, 30, 32, -90, 360 * factor, [232, 232, 232, 200]);
        }
    }
}

//endregion

//region callbacks

cheat.register_callback("paint", "import_nades");
cheat.register_callback("paint", "render_trails");
cheat.register_callback("paint", "on_paint");

//endregion

UI.AddLabel("=======================");
UI.AddLabel("watermark")
UI.AddColorPicker("color");

var color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");

if (color[3] == 0)
    UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Watermark", [89, 119, 239, 255]);

function draw() {
    if(!World.GetServerString())
        return;

    var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();

    var hours = hours1 <= 9 ? "0"+hours1+":" : hours1+":";
    var minutes = minutes1 <= 9 ? "0" + minutes1+":" : minutes1+":";
    var seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;

    var server_tickrate = Globals.Tickrate().toString()
    var ping = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString()

    color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");

    var font = Render.AddFont("Verdana", 7, 400);
    var text = " not skripter | "+ Cheat.GetUsername() + " | delay: " + ping + "ms | " + server_tickrate + "tick | " + hours + minutes + seconds;

    var w = Render.TextSizeCustom(text, font)[0] + 8;
    var x = Global.GetScreenSize()[0];

    x = x - w - 10;

    Render.FilledRect(x, 10, w, 2, [ color[0], color[1], color[2], 255 ]);

    Render.StringCustom(x+4, 10 + 4, 0, text, [ 255, 255, 255, 255 ], font);
}

Cheat.RegisterCallback("Draw", "draw");

UI.AddLabel("=======================");

UI.AddSliderInt("Double tap speed", 0, 3);

function can_shift_shot(ticks_to_shift) {
    var me = Entity.GetLocalPlayer();
    var wpn = Entity.GetWeapon(me);

    if (me == null || wpn == null)
        return false;

    var tickbase = Entity.GetProp(me, "CCSPlayer", "m_nTickBase");
    var curtime = Globals.TickInterval() * (tickbase-ticks_to_shift)

    if (curtime < Entity.GetProp(me, "CCSPlayer", "m_flNextAttack"))
        return false;

    if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
        return false;

    return true;
}

function _TBC_CREATE_MOVE() {
    var is_charged = Exploit.GetCharge()
    var reserve = UI.GetValue("Misc", "JAVASCRIPT", "Double tap speed")

    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()

    if (can_shift_shot(14) && is_charged != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    }

    Exploit.OverrideTolerance(reserve);
    Exploit.OverrideShift(14-reserve);
}

function _TBC_UNLOAD() {
    Exploit.EnableRecharge();
}

Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");

function isVisible() {
  localPlayer_index = Entity['Ge' + 'tL' + 'oc' + 'al' + 'Pl' + 'ay' + 'er'](), localPlayer_eyepos = Entity['Ge' + 'tE' + 'ye' + 'Po' + 'si' + 'ti' + 'on'](localPlayer_index), enemies = Entity['Ge' + 'tE' + 'ne' + 'mi' + 'es']();
  for (i = -0x878 + 0x1a + 0x42f * 0x2; i < enemies['le' + 'ng' + 'th']; i++) {
      Entity['Is' + 'Va' + 'li' + 'd'](enemies[i]) == !![] && Entity['Is' + 'Al' + 'iv' + 'e'](enemies[i]) && Entity['Is' + 'Do' + 'rm' + 'an' + 't'](enemies[i]) == ![] && (hitbox_pos = Entity['Ge' + 'tH' + 'it' + 'bo' + 'xP' + 'os' + 'it' + 'io' + 'n'](localPlayer_index, -0x63 * -0x59 + -0x1f03 + 0xda * -0x4), bot_eyepos = Entity['Ge' + 'tE' + 'ye' + 'Po' + 'si' + 'ti' + 'on'](enemies[i]));
  }
}
var canhit = ![];
UI['Ad' + 'dC' + 'he' + 'ck' + 'bo' + 'x']('Pr' + 'es' + 'er' + 've' + '\x20d' + 'ou' + 'bl' + 'e\x20' + 'ta' + 'p'), UI['Ad' + 'dC' + 'he' + 'ck' + 'bo' + 'x']('Ac' + 'cu' + 'ra' + 'te' + '\x20p' + 're' + 'se' + 'rv' + 'e\x20' + 'ch' + 'ec' + 'k');

function cm() {
  canhit = ![];
  if (UI['Ge' + 'tV' + 'al' + 'ue']('Pr' + 'es' + 'er' + 've' + '\x20d' + 'ou' + 'bl' + 'e\x20' + 'ta' + 'p')) {
      localPlayer_index = Entity['Ge' + 'tL' + 'oc' + 'al' + 'Pl' + 'ay' + 'er'](), localPlayer_eyepos = Local['Ge' + 'tV' + 'ie' + 'wA' + 'ng' + 'le' + 's'](), enemies = Entity['Ge' + 'tE' + 'ne' + 'mi' + 'es']();
      for (i = 0x194c + -0x1f92 + 0x646; i < enemies['le' + 'ng' + 'th']; i++) {
          Entity['Is' + 'Va' + 'li' + 'd'](enemies[i]) == !![] && Entity['Is' + 'Al' + 'iv' + 'e'](enemies[i]) && Entity['Is' + 'Do' + 'rm' + 'an' + 't'](enemies[i]) == ![] && (hitbox_pos = Entity['Ge' + 'tH' + 'it' + 'bo' + 'xP' + 'os' + 'it' + 'io' + 'n'](localPlayer_index, -0xf27 * -0x2 + 0xc1 * 0x16 + 0x4 * -0xbb9), UI['Ge' + 'tV' + 'al' + 'ue']('Ac' + 'cu' + 'ra' + 'te' + '\x20p' + 're' + 'se' + 'rv' + 'e\x20' + 'ch' + 'ec' + 'k') && (hitbox_pos1 = Entity['Ge' + 'tH' + 'it' + 'bo' + 'xP' + 'os' + 'it' + 'io' + 'n'](localPlayer_index, -0x16a2 * -0x1 + -0x1 * -0x9d7 + 0x2077 * -0x1), hitbox_pos2 = Entity['Ge' + 'tH' + 'it' + 'bo' + 'xP' + 'os' + 'it' + 'io' + 'n'](localPlayer_index, 0x596 + 0x1e28 + -0x1 * 0x23b3), hitbox_pos3 = Entity['Ge' + 'tH' + 'it' + 'bo' + 'xP' + 'os' + 'it' + 'io' + 'n'](localPlayer_index, 0x1d0e + -0x9b * -0x26 + -0x2 * 0x1a02)), bot_eyepos = Entity['Ge' + 'tH' + 'it' + 'bo' + 'xP' + 'os' + 'it' + 'io' + 'n'](enemies[i], 0x24a4 + -0x4a7 * 0x7 + -0x413 * 0x1), result = Trace['Bu' + 'll' + 'et'](enemies[i], localPlayer_index, bot_eyepos, hitbox_pos), UI['Ge' + 'tV' + 'al' + 'ue']('Ac' + 'cu' + 'ra' + 'te' + '\x20p' + 're' + 'se' + 'rv' + 'e\x20' + 'ch' + 'ec' + 'k') && (result1 = Trace['Bu' + 'll' + 'et'](enemies[i], localPlayer_index, bot_eyepos, hitbox_pos1), result2 = Trace['Bu' + 'll' + 'et'](enemies[i], localPlayer_index, bot_eyepos, hitbox_pos2), result3 = Trace['Bu' + 'll' + 'et'](enemies[i], localPlayer_index, bot_eyepos, hitbox_pos3)), UI['Ge' + 'tV' + 'al' + 'ue']('Ac' + 'cu' + 'ra' + 'te' + '\x20p' + 're' + 'se' + 'rv' + 'e\x20' + 'ch' + 'ec' + 'k') ? (result[-0x153a + 0x1886 + -0x34b] > -0x1ace + -0x679 * 0x4 + -0x5 * -0xa8a || result1[-0x4 * -0x394 + -0x75f * 0x1 + 0x8 * -0xde] > -0x728 + 0xab3 + -0x1 * 0x38b || result2[-0x5 * -0x7c + 0x19d8 + -0x1c43 * 0x1] > -0xb83 + 0x96c + -0x1 * -0x217 || result3[-0x3d * -0xb + -0x34c * -0x3 + -0xc82] > -0x1b * -0x34 + 0x126c + -0x264 * 0xa) && (canhit = !![]) : result[0x183 * 0x17 + -0x1 * -0x95f + 0x1 * -0x2c23] > 0x6d7 * 0x5 + 0xc2 + -0x22f5 && (canhit = !![]));
      }
      if (canhit == !![]) Exploit['DisableRecharge']();
  }
}
Cheat['Re' + 'gi' + 'st' + 'er' + 'Ca' + 'll' + 'ba' + 'ck']('Dr' + 'aw', 'is' + 'Vi' + 'si' + 'bl' + 'e'), Cheat['Re' + 'gi' + 'st' + 'er' + 'Ca' + 'll' + 'ba' + 'ck']('Cr' + 'ea' + 'te' + 'Mo' + 've', 'cm');

function can_shift_shot(d) {
  var T = Entity['Ge' + 'tL' + 'oc' + 'al' + 'Pl' + 'ay' + 'er'](),
      t = Entity['Ge' + 'tW' + 'ea' + 'po' + 'n'](T);
  if (T == null || t == null) return ![];
  var r = Entity['Ge' + 'tP' + 'ro' + 'p'](T, 'CC' + 'SP' + 'la' + 'ye' + 'r', 'm_' + 'nT' + 'ic' + 'kB' + 'as' + 'e'),
      g = Globals['Ti' + 'ck' + 'In' + 'te' + 'rv' + 'al']() * (r - d);
  if (g < Entity['Ge' + 'tP' + 'ro' + 'p'](T, 'CC' + 'SP' + 'la' + 'ye' + 'r', 'm_' + 'fl' + 'Ne' + 'xt' + 'At' + 'ta' + 'ck')) return ![];
  if (g < Entity['Ge' + 'tP' + 'ro' + 'p'](t, 'CB' + 'as' + 'eC' + 'om' + 'ba' + 'tW' + 'ea' + 'po' + 'n', 'm_' + 'fl' + 'Ne' + 'xt' + 'Pr' + 'im' + 'ar' + 'yA' + 'tt' + 'ac' + 'k')) return ![];
  return !![];
}

function _TBC_CREATE_MOVE() {
  var d = Exploit['Ge' + 'tC' + 'ha' + 'rg' + 'e']();
  can_shift_shot(-0x2e6 + -0x3c * -0x4 + 0x204) && d != -0xc6e + -0x1c18 + 0x19 * 0x19f && canhit == ![] && UI['Is' + 'Ho' + 'tk' + 'ey' + 'Ac' + 'ti' + 've']('Ra' + 'ge', 'Ex' + 'pl' + 'oi' + 'ts', 'Do' + 'ub' + 'le' + 'ta' + 'p') && !UI['Is' + 'Ho' + 'tk' + 'ey' + 'Ac' + 'ti' + 've']('An' + 'ti' + '-A' + 'im', 'Ex' + 'tr' + 'a', 'Fa' + 'ke' + '\x20d' + 'uc' + 'k') && (Exploit['Di' + 'sa' + 'bl' + 'eR' + 'ec' + 'ha' + 'rg' + 'e'](), Exploit['Re' + 'ch' + 'ar' + 'ge']()), Exploit['Ov' + 'er' + 'ri' + 'de' + 'To' + 'le' + 'ra' + 'nc' + 'e'](-0x21de + -0x336 + 0x2514), Exploit['Ov' + 'er' + 'ri' + 'de' + 'Sh' + 'if' + 't'](-0x1 * 0x2027 + -0x17d8 + 0x380d);
}

function _TBC_UNLOAD() {
  Exploit['En' + 'ab' + 'le' + 'Re' + 'ch' + 'ar' + 'ge']();
}
Cheat['Re' + 'gi' + 'st' + 'er' + 'Ca' + 'll' + 'ba' + 'ck']('Cr' + 'ea' + 'te' + 'Mo' + 've', '_T' + 'BC' + '_C' + 'RE' + 'AT' + 'E_' + 'MO' + 'VE'), Cheat['Re' + 'gi' + 'st' + 'er' + 'Ca' + 'll' + 'ba' + 'ck']('Un' + 'lo' + 'ad', '_T' + 'BC' + '_U' + 'NL' + 'OA' + 'D');

var print_color = [89, 119, 255, 255];
var print_color2 = [112, 137, 255, 255];


function get_icon(a) {
    var letter = ""
    switch (a) {
        case "desert eagle":
            letter = "a"
            break
        case "dual berettas":
            letter = "b"
            break
        case "five seven":
            letter = "c"
            break
        case "glock 18":
            letter = "d"
            break
        case "ak 47":
            letter = "e"
            break
        case "aug":
            letter = "f"
            break
        case "awp":
            letter = "g"
            break
        case "famas":
            letter = "h"
            break
        case "m249":
            letter = "i"
            break
        case "g3sg1":
            letter = "j"
            break
        case "galil ar":
            letter = "k"
            break
        case "m4a4":
            letter = "l"
            break
        case "m4a1 s":
            letter = "m"
            break
        case "mac 10":
            letter = "n"
            break
        case "p2000":
            letter = "o"
            break
        case "mp5 sd":
            letter = "p"
            break
        case "ump 45":
            letter = "q"
            break
        case "xm1014":
            letter = "r"
            break
        case "pp bizon":
            letter = "s"
            break
        case "mag 7":
            letter = "t"
            break
        case "negev":
            letter = "u"
            break
        case "sawed off":
            letter = "v"
            break
        case "tec 9":
            letter = "w"
            break
        case "zeus x27":
            letter = "x"
            break
        case "p250":
            letter = "y"
            break
        case "mp7":
            letter = "z"
            break
        case "mp9":
            letter = "A"
            break
        case "nova":
            letter = "B"
            break
        case "p90":
            letter = "C"
            break
        case "scar 20":
            letter = "D"
            break
        case "sg 553":
            letter = "E"
            break
        case "ssg 08":
            letter = "F"
            break
        case "knife":
            letter = "G"
            break
        case "flashbang":
            letter = "H"
            break
        case "high explosive grenade":
            letter = "I"
            break
        case "smoke grenade":
            letter = "J"
            break
        case "molotov":
            letter = "K"
            break
        case "decoy grenade":
            letter = "L"
            break
        case "incendiary grenade":
            letter = "M"
            break
        case "c4 explosive":
            letter = "N"
            break
        case "usp s":
            letter = "P"
            break
        case "cz75 auto":
            letter = "Q"
            break
        case "r8 revolver":
            letter = "R"
            break
        case "bayonet":
            letter = "V"
            break
        case "flip knife":
            letter = "W"
            break
        case "gut knife":
            letter = "X"
            break
        case "karambit":
            letter = "Y"
            break
        case "m9 bayonet":
            letter = "Z"
            break
        case "falchion knife":
            letter = "1"
            break
        case "bowie knife":
            letter = "2"
            break
        case "butterfly knife":
            letter = "3"
            break
        case "shadow daggers":
            letter = "4"
            break
        case "ursus knife":
            letter = "5"
            break
        case "navaja knife":
            letter = "6"
            break
        case "stiletto knife":
            letter = "7"
            break
        case "skeleton knife":
            letter = "8"
            break
        case "huntsman knife":
            letter = "0"
            break
        case "talon knife":
            letter = "8"
            break
        case "classic knife":
            letter = "25"
            break
        case "paracord knife":
            letter = "Z"
            break
        case "survival knife":
            letter = "Z"
            break
        case "nomad knife":
            letter = "Z"
            break
        default:
            letter = ""
            break
    }
    return letter
}

UI.AddSliderInt("Tickbase_x", 0, Global.GetScreenSize()[0]);
UI.AddSliderInt("Tickbase_y", 0, Global.GetScreenSize()[1]);

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}
var fa = 0;
var sa = 0;

function main_dt() {
    if (!World.GetServerString()) return;

    const x = UI.GetValue("Misc", "JAVASCRIPT", "Tickbase_x"),
        y = UI.GetValue("Misc", "JAVASCRIPT", "Tickbase_y");

    localplayer_index = Entity.GetLocalPlayer();
    localplayer_weapon = Entity.GetWeapon(localplayer_index);
    weapon_name = Entity.GetName(localplayer_weapon);
    g_Local_classname = Entity.GetClassName(localplayer_weapon);
    var nextattack = Entity.GetProp(localplayer_weapon, "CBaseCombatWeapon", "m_flNextPrimaryAttack");
    var CanShoot = false;
    if (nextattack <= Globals.Curtime()) {
        CanShoot = true;
    }

    var frames = 8 * Globals.Frametime();

    var font = Render.AddFont("Verdana", 7, 100);
    var fontbullet = Render.AddFont("bullet", 18, 100);
    if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
        var text = "DT not skripter | tickbase(v): 17";
        var color = [89, 119, 239, 255];
    } else if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
        var text = "DT not skripter | tickbase(v): 7";
        var color = [89, 119, 239, 255];
    } else {
        var text = "DT not skripter | tickbase(v): 0";
        var color = [89, 89, 89, 255];
    }
    var w = Render.TextSizeCustom(text, font)[0] + 8;

    Render.FilledRect(x, y, w, 2, color);
    Render.FilledRect(x, y + 2, w, 18, [17, 17, 17, 60]);
    Render.StringCustom(x + 5, y + 5, 0, text, [0, 0, 0, 180], font);
    Render.StringCustom(x + 4, y + 4, 0, text, [255, 255, 255, 255], font);

    Render.String(x + 4, y + 22, 0, get_icon(weapon_name), [255, 255, 255, 255], 5);
    if ((g_Local_classname == "CKnife" || g_Local_classname == "CWeaponSSG08" || g_Local_classname == "CWeaponAWP" || weapon_name == "r8 revolver" || g_Local_classname == "CHEGrenade" || g_Local_classname == "CMolotovGrenade" || g_Local_classname == "CIncendiaryGrenade" || g_Local_classname == "CFlashbang" || g_Local_classname == "CSmokeGrenade" || g_Local_classname == "CDecoyGrenade" || g_Local_classname == "CWeaponTaser" || g_Local_classname == "CC4")) {
        //return
    } else {
        if (CanShoot) {
            fa = Math.min(fa + frames, 1);
            Render.StringCustom(x + 10 + Render.TextSize(get_icon(weapon_name), 5)[0], y + 18, 0, "A", [255, 255, 255, fa * 255], fontbullet);
        } else {
            fa = 0;
        }
        if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            sa = Math.min(sa + frames, 1);
            Render.StringCustom(x + 30 + Render.TextSize(get_icon(weapon_name), 5)[0], y + 18, 0, "A", [255, 255, 255, sa * 255], fontbullet);
        } else {
            sa = 0;
        }
    }


    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x, y, x + w, y + 30)) {
            UI.SetValue("Misc", "JAVASCRIPT", "Tickbase_x", mouse_pos[0] - w / 2);
            UI.SetValue("Misc", "JAVASCRIPT", "Tickbase_y", mouse_pos[1] - 20);
        }
    }
}
Global.RegisterCallback("Draw", "main_dt");

UI.AddLabel("=======================");
UI.AddLabel("                   Antiaim            ");
UI.AddSliderInt("Antiaim_x", 0, Global.GetScreenSize()[0]);
UI.AddSliderInt("Antiaim_y", 0, Global.GetScreenSize()[1]);

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

function draw_arc(x, y, radius, start_angle, percent, thickness, color) {
        var precision = (2 * Math.PI) / 30;
        var step = Math.PI / 180;
        var inner = radius - thickness;
        var end_angle = (start_angle + percent) * step;
        var start_angle = (start_angle * Math.PI) / 180;

        for (; radius > inner; --radius) {
            for (var angle = start_angle; angle < end_angle; angle += precision) {
                var cx = Math.round(x + radius * Math.cos(angle));
                var cy = Math.round(y + radius * Math.sin(angle));

                var cx2 = Math.round(x + radius * Math.cos(angle + precision));
                var cy2 = Math.round(y + radius * Math.sin(angle + precision));

                Render.Line(cx, cy, cx2, cy2, color);
            }
        }
}

UI.AddLabel("=======================");

function main_aa() {
    if (!World.GetServerString()) return;

    const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Antiaim_x"),
        y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Antiaim_y");

    var font = Render.AddFont("Verdana", 7, 100);
    var RealYaw = Local.GetRealYaw();
    var FakeYaw = Local.GetFakeYaw();
    var delta = Math.min(Math.abs(RealYaw - FakeYaw) / 2, 60).toFixed(1);
    var safety = Math.min(Math.round(1.7 * Math.abs(delta)), 100);
    if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
        var side = "<";
    } else {
        var side = ">";
    }
    var text = "    FAKE (" + delta.toString() + "  ) | safety: " + safety.toString() + "% | side: " + side;
    var w = Render.TextSizeCustom(text, font)[0] + 8;

    Render.StringCustom(x + 5 - w, y + 5, 0, text, [0, 0, 0, 180], font);
    Render.StringCustom(x + 4 - w, y + 4, 0, text, [255, 255, 255, 255], font);
    Render.Circle(x + 18 - w + Render.TextSizeCustom("FAKE (" + delta.toString(), font)[0], y + 8, 1, [255, 255, 255, 255]);
    draw_arc(x + 7 - w, y + 10, 5, 0, delta * 6, 2, [89, 119, 239, 255]);
    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x - w, y, x + w, y + 30)) {
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Antiaim_x", mouse_pos[0] + w / 2);
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Antiaim_y", mouse_pos[1] - 20);
        }
    }
}
Global.RegisterCallback("Draw", "main_aa");


function render_arc(x, y, _0x42b4x6, _0x42b4x7, _0x42b4x8, _0x42b4x9, _0x42b4xa, _0x42b4xb) {
    while (360 % _0x42b4xa != 0) {
        _0x42b4xa++
    };
    _0x42b4xa = 360 / _0x42b4xa;
    for (var _0x42b4xc = _0x42b4x8; _0x42b4xc < _0x42b4x8 + _0x42b4x9; _0x42b4xc = _0x42b4xc + _0x42b4xa) {
        var _0x42b4xd = _0x42b4xc * Math['PI'] / 180;
        var _0x42b4xe = (_0x42b4xc + _0x42b4xa) * Math['PI'] / 180;
        var _0x42b4xf = Math['cos'](_0x42b4xd);
        var _0x42b4x10 = Math['sin'](_0x42b4xd);
        var _0x42b4x11 = Math['cos'](_0x42b4xe);
        var _0x42b4x12 = Math['sin'](_0x42b4xe);
        var _0x42b4x13 = x + _0x42b4xf * _0x42b4x6;
        var _0x42b4x14 = y + _0x42b4x10 * _0x42b4x6;
        var _0x42b4x15 = x + _0x42b4x11 * _0x42b4x6;
        var _0x42b4x16 = y + _0x42b4x12 * _0x42b4x6;
        var _0x42b4x17 = x + _0x42b4xf * _0x42b4x7;
        var _0x42b4x18 = y + _0x42b4x10 * _0x42b4x7;
        var _0x42b4x19 = x + _0x42b4x11 * _0x42b4x7;
        var _0x42b4x1a = y + _0x42b4x12 * _0x42b4x7;
        Render.Polygon([
            [_0x42b4x13, _0x42b4x14],
            [_0x42b4x15, _0x42b4x16],
            [_0x42b4x17, _0x42b4x18]
        ], _0x42b4xb);
        Render.Polygon([
            [_0x42b4x17, _0x42b4x18],
            [_0x42b4x15, _0x42b4x16],
            [_0x42b4x19, _0x42b4x1a]
        ], _0x42b4xb)
    }
}
Render['GradientSkeet'] = function (x, y, _0x42b4x1b, _0x42b4x1c, _0x42b4x1d, _0x42b4x1e, _0x42b4x1f) {
    Render.GradientRect(x, y, _0x42b4x1b / 4, _0x42b4x1c, _0x42b4x1d, _0x42b4x1f, _0x42b4x1e);
    Render.GradientRect(x + (_0x42b4x1b / 4), y, _0x42b4x1b / 4, _0x42b4x1c, _0x42b4x1d, _0x42b4x1e, _0x42b4x1f)
};

function calcDist(_0x42b4x21, _0x42b4x22) {
    var _0x42b4x23 = _0x42b4x21[0];
    var _0x42b4x24 = _0x42b4x21[1];
    var _0x42b4x25 = _0x42b4x21[2];
    var _0x42b4x26 = _0x42b4x22[0];
    var _0x42b4x27 = _0x42b4x22[1];
    var _0x42b4x28 = _0x42b4x22[2];
    var _0x42b4x29 = _0x42b4x23 - _0x42b4x26;
    var _0x42b4x2a = _0x42b4x24 - _0x42b4x27;
    var _0x42b4x2b = _0x42b4x25 - _0x42b4x28;
    return Math['sqrt'](_0x42b4x29 * _0x42b4x29 + _0x42b4x2a * _0x42b4x2a + _0x42b4x2b * _0x42b4x2b)
}
var x = Render.GetScreenSize()[0] / 115;
var y = Render.GetScreenSize()[1] / 1.13;

function getSite(_0x42b4x2d) {
    bombsite = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_nBombSite');
    if (bombsite == 0) {
        return 'A - '
    } else {
        return 'B - '
    }
}
function getVelocity(_0x42b4x2f) {
    players = Entity.GetPlayers();
    for (i = 0; i < players['length']; i++) {;
    }; {
        var _0x42b4x30 = Entity.GetProp(_0x42b4x2f, 'CBasePlayer', 'm_vecVelocity[0]');
        var _0x42b4x31 = Math['sqrt'](_0x42b4x30[0] * _0x42b4x30[0] + _0x42b4x30[1] * _0x42b4x30[1])
    }
    return _0x42b4x31
}
Render['Arc'] = function (x, y, _0x42b4x32, _0x42b4x33, _0x42b4x34, _0x42b4x35, _0x42b4x1e) {
    for (var _0x42b4xc = _0x42b4x34; _0x42b4xc < _0x42b4x34 + _0x42b4x35; _0x42b4xc++) {
        const _0x42b4xd = _0x42b4xc * Math['PI'] / 180;
        Render.Line(x + Math['cos'](_0x42b4xd) * _0x42b4x32, y + Math['sin'](_0x42b4xd) * _0x42b4x32, x + Math['cos'](_0x42b4xd) * _0x42b4x33, y + Math['sin'](_0x42b4xd) * _0x42b4x33, _0x42b4x1e)
    }
};
var planting = false;
var fill = 0;
var isbomb = 0;
var cur1 = Globals.Curtime();
var bombsiteonplant = '';
var on_plant_time;

function bomb_exploded() {
    isbomb = 0;
    on_plant_time = 0;
    fill = 0;
    planting = false
}
function abs2() {
    on_plant_time = Globals.Curtime();
    bombsite = Event.GetInt('site');
    if (bombsite % 2 == 1) {
        bombsiteonplant = 'Bombsite A'
    } else {
        bombsiteonplant = 'Bombsite B'
    };
    isbomb = 35;
    planting = true
}
function abs1() {
    isbomb = 0;
    on_plant_time = 0;
    fill = 0;
    planting = false
}
function abs3() {
    isbomb = 0;
    on_plant_time = 0;
    fill = 0;
    planting = false
}
function on_round_start() {
    on_plant_time = 0;
    fill = 0;
    planting = false;
    isbomb = 0
}
function bomb_planted() {
    on_plant_time = 0;
    isbomb = 70;
    fill = 0;
    planting = false
}
var bombtick = false;
var screen_size = Global.GetScreenSize();
UI.AddCheckbox('Under Crosshair');
UI.AddHotkey('Left Hotkey');
UI.AddHotkey('Right Hotkey');
UI.AddHotkey('Backwards Hotkey');
UI.AddHotkey('Forward Hotkey');
UI.AddColorPicker('Arrows color');
UI.AddColorPicker('Selected arrow color');
var pingiunas = UI.AddHotkey('Ping spike');
var isLeftActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Left Hotkey');
var isRightActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Right Hotkey');
var isBackwardsActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Backwards Hotkey');
var isForwardActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Forward Hotkey');
var isInverted;
var drawLeft = 0;
drawHideReal = 1;
var drawRight = 0,

    drawBack = 0;
var leftWasPressed = false;
var rightWasPressed = false;
var backWasPressed = false;
var upWasPressed = false;

function HSVtoRGB(_0x42b4x1c, _0x42b4x34, _0x42b4x52) {
    var _0x42b4x53, _0x42b4x54, _0x42b4x55, _0x42b4xc, _0x42b4x56, _0x42b4x57, _0x42b4x58, _0x42b4x59;
    _0x42b4xc = Math['floor'](_0x42b4x1c * 6);
    _0x42b4x56 = _0x42b4x1c * 6 - _0x42b4xc;
    _0x42b4x57 = _0x42b4x52 * (1 - _0x42b4x34);
    _0x42b4x58 = _0x42b4x52 * (1 - _0x42b4x56 * _0x42b4x34);
    _0x42b4x59 = _0x42b4x52 * (1 - (1 - _0x42b4x56) * _0x42b4x34);
    switch (_0x42b4xc % 4) {
    case 0:
        _0x42b4x53 = _0x42b4x52,
        _0x42b4x54 = _0x42b4x59,
        _0x42b4x55 = _0x42b4x57;
        break;
    case 1:
        _0x42b4x53 = _0x42b4x58,
        _0x42b4x54 = _0x42b4x52,
        _0x42b4x55 = _0x42b4x57;
        break;
    case 2:
        _0x42b4x53 = _0x42b4x57,
        _0x42b4x54 = _0x42b4x52,
        _0x42b4x55 = _0x42b4x59;
        break;
    case 3:
        _0x42b4x53 = _0x42b4x57,
        _0x42b4x54 = _0x42b4x58,
        _0x42b4x55 = _0x42b4x52;
        break;
    case 4:
        _0x42b4x53 = _0x42b4x59,
        _0x42b4x54 = _0x42b4x57,
        _0x42b4x55 = _0x42b4x52;
        break;
    case 5:
        _0x42b4x53 = _0x42b4x52,
        _0x42b4x54 = _0x42b4x57,
        _0x42b4x55 = _0x42b4x58;
        break
    };
    return {
        r: Math['round'](_0x42b4x53 * 255),
        g: Math['round'](_0x42b4x54 * 255),
        b: Math['round'](_0x42b4x55 * 255)
    }
}
var screen_size = Global.GetScreenSize();
var other_weapons = ['knife', 'knife_t', 'knife_karambit', 'knife_m9_bayonet', 'knife_survival_bowie', 'knife_butterfly', 'knife_flip', 'knife_push', 'knife_tactical', 'knife_falchion', 'knife_gut', 'knife_ursus', 'knife_gypsy_jackknife', 'knife_stiletto', 'knife_widowmaker', 'knife_css', 'knife_cord', 'knife_canis', 'knife_outdoor', 'knife_skeleton', 'bayonet', 'hegrenade', 'smokegrenade', 'molotov', 'incgrenade', 'flashbang', 'decoy', 'taser'];

function is_gun(_0x42b4x5c) {
    for (var _0x42b4xc = 0; _0x42b4xc < other_weapons['length']; _0x42b4xc++) {
        if (_0x42b4x5c == 'weapon_' + other_weapons[_0x42b4xc]) {
            return false
        }
    };
    return true
}
function drawString() {
    arrows_color = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Arrows color');
    s_arrows_color = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Selected arrow color');
    crack_font = Render.AddFont('Verdana', 8, 100);
    arrows_red = arrows_color[0];
    arrows_green = arrows_color[1];
    arrows_blue = arrows_color[2];
    arrows_alpha = arrows_color[3];
    selected_red = s_arrows_color[0];
    selected_green = s_arrows_color[1];
    selected_blue = s_arrows_color[2];
    selected_alpha = Math['sin'](Math['abs'](-Math['PI'] + (Globals.Curtime() * (1 / 0.75)) % (Math['PI'] * 2))) * 255;
    isInverted = UI.IsHotkeyActive('Anti-Aim', 'Inverter');
    fonts = Render.AddFont('Arrows', 49, 400);
    font1 = Render.AddFont('Verdana', 10, 100);
    localplayer_index = Entity.GetLocalPlayer();
    localplayer_alive = Entity.IsAlive(localplayer_index);
    g_Local = Entity.GetLocalPlayer();
    g_Local_weapon = Entity.GetWeapon(g_Local);
    weapon_name = Entity.GetName(g_Local_weapon);
    g_Local_classname = Entity.GetClassName(g_Local_weapon);
    isFD = UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck');
    isDoubletap = UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap');
    DT = 'DT ';
    add_y = 0;
    if (localplayer_alive == true) {
        if (!UI.GetValue('Script items', 'Under Crosshair')) {
            return
        };
        if ((g_Local_classname == 'CKnife' || g_Local_classname == 'CWeaponSSG08' || g_Local_classname == 'CWeaponAWP' || weapon_name == 'r8 revolver' || g_Local_classname == 'CHEGrenade' || g_Local_classname == 'CMolotovGrenade' || g_Local_classname == 'CIncendiaryGrenade' || g_Local_classname == 'CFlashbang' || g_Local_classname == 'CSmokeGrenade' || g_Local_classname == 'CDecoyGrenade' || g_Local_classname == 'CWeaponTaser' || g_Local_classname == 'CC4')) {
            if (isFD) {
                DT = DT + '(fakeduck)'
            } else {
                DT = DT + '(active weapon)'
            };
            is_DT = false
        } else {
            DT = isFD ? 'DT (fakeduck)' : 'DT ';
            is_DT = !isFD & isDoubletap
        };
        delta = (Exploit.GetCharge() * 60);
        UI.SetValue('Rage', 'Exploits', 'Doubletap', is_DT);
        var _0x42b4x5e;
        if (isDoubletap) {
            _0x42b4x5e = 12;
            if (is_DT) {
                Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, drawHideReal ? Render.GetScreenSize()[1] / 2 + 26 : Render.GetScreenSize()[1] / 2 + 14, 0, DT, Exploit.GetCharge() == 1 ? [0, 0, 0, 255] : [0, 0, 0, selected_alpha], crack_font);
                Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, drawHideReal ? Render.GetScreenSize()[1] / 2 + 25 : Render.GetScreenSize()[1] / 2 + 13, 0, DT, Exploit.GetCharge() == 1 ? [0, 255, 0, 255] : [255, 0, 0, selected_alpha], crack_font)
            } else {
                Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, drawHideReal ? Render.GetScreenSize()[1] / 2 + 26 : Render.GetScreenSize()[1] / 2 + 14, 0, DT, [0, 0, 0, selected_alpha], crack_font);
                Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, drawHideReal ? Render.GetScreenSize()[1] / 2 + 25 : Render.GetScreenSize()[1] / 2 + 13, 0, DT, [255, 0, 0, selected_alpha], crack_font)
            }
        } else {
            _0x42b4x5e = 0
        };
        if (drawHideReal) {
            Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, Render.GetScreenSize()[1] / 2 + 14, 0, 'DYNAMIC', [0, 0, 0, 255], crack_font);
            Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, Render.GetScreenSize()[1] / 2 + 13, 0, 'DYNAMIC', [135, 147, 255, 255], crack_font)
        };
        if (is_gun(weapon_name)) {
            Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, drawHideReal ? Render.GetScreenSize()[1] / 2 + 26 + _0x42b4x5e : Render.GetScreenSize()[1] / 2 + 14 + _0x42b4x5e, 0, 'PREDICTION', [0, 0, 0, 255], crack_font);
            Render.StringCustom(Render.GetScreenSize()[0] / 2 - 23, drawHideReal ? Render.GetScreenSize()[1] / 2 + 25 + _0x42b4x5e : Render.GetScreenSize()[1] / 2 + 13 + _0x42b4x5e, 0, 'PREDICTION', [132, 0, 255, 255], crack_font)
        };
        Render.StringCustom(screen_size[0] / 2 - 40, screen_size[1] / 2 - 15 + 1, 1, '<', [0, 0, 0, arrows_alpha], Render.AddFont('Verdana', 15, 900));
        Render.StringCustom(screen_size[0] / 2 + 45, screen_size[1] / 2 - 15 + 1, 1, '>', [0, 0, 0, arrows_alpha], Render.AddFont('Verdana', 15, 900));
        Render.StringCustom(screen_size[0] / 2 - 40, screen_size[1] / 2 - 15, 1, '<', arrows_color, Render.AddFont('Verdana', 15, 900));
        Render.StringCustom(screen_size[0] / 2 + 45, screen_size[1] / 2 - 15, 1, '>', arrows_color, Render.AddFont('Verdana', 15, 900));
        Render.StringCustom(screen_size[0] / 2 - 40, screen_size[1] / 2 - 15, 1, '<', drawLeft ? [selected_red, selected_green, selected_blue, 255] : arrows_color, Render.AddFont('Verdana', 15, 900));
        Render.StringCustom(screen_size[0] / 2 + 45, screen_size[1] / 2 - 15, 1, '>', drawRight ? [selected_red, selected_green, selected_blue, 255] : arrows_color, Render.AddFont('Verdana', 15, 900))
    }
}
var Inair = function () {
    if (Entity.GetProp(Entity.GetLocalPlayer(), 'CBasePlayer', 'm_hGroundEntity')) {
        return true
    } else {
        return false
    }
};

function weapon_fire1() {
    shotsfired++
}
var misses = 0;
var shotsfired = 0;
var shotshurt = 0;

function player_hurt() {
    if (Entity.GetEntityFromUserID(Event.GetInt('attacker')) == Entity.GetLocalPlayer()) {
        shotshurt++
    }
}
Global.RegisterCallback('ragebot_fire', 'weapon_fire1');
Cheat.RegisterCallback('player_hurt', 'player_hurt');

function drawindicators() {
    lp = Entity.GetLocalPlayer();
    velocity = Math['round'](getVelocity(lp)).toString();
    var _0x42b4x66, _0x42b4x67, _0x42b4x68, _0x42b4x69, _0x42b4x6a, _0x42b4x6b;
    font = Render.AddFont('Calibri', 18, 900);
    var _0x42b4x6c = Render.AddFont('Tahoma', 10, 100);
    fake = Math['abs'](Local.GetFakeYaw());
    real = Math['abs'](Local.GetRealYaw());
    if (fake > real) {
        delta = (fake - real) / 2
    } else {
        delta = (real - fake) / 2
    };
    if (drawHideReal) {
        _0x42b4x68 = 35
    } else {
        _0x42b4x68 = 0
    };
    if (UI.IsHotkeyActive('Script items', 'Scout Override')) {
        _0x42b4x67 = 35
    } else {
        _0x42b4x67 = 0
    };
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap')) {
        _0x42b4x69 = 35
    } else {
        _0x42b4x69 = 0
    };
    if (Inair() & velocity > 250) {
        _0x42b4x6b = 35
    } else {
        _0x42b4x6b = 0
    };
    if (UI.IsHotkeyActive('Rage', 'General', 'Force safe point')) {
        _0x42b4x66 = 35
    } else {
        _0x42b4x66 = 0
    };
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots')) {
        _0x42b4x6a = 35
    } else {
        _0x42b4x6a = 0
    };
    if (Entity.IsAlive(Entity.GetLocalPlayer())) {
        if (UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap')) {
            Render.GradientSkeet(7, y - 350 + 70 - _0x42b4x66 - _0x42b4x6b - isbomb, 50, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 70 - _0x42b4x66 - _0x42b4x6b - isbomb, 0, 'DT', [17, 17, 17, 255], font);
            if (Exploit.GetCharge() == 1) {
                Render.StringCustom(x, y - 350 + 70 - _0x42b4x66 - _0x42b4x6b - isbomb, 0, 'DT', [255, 255, 255, 255], font)
            } else {
                Render.StringCustom(x, y - 350 + 70 - _0x42b4x66 - _0x42b4x6b - isbomb, 0, 'DT', [255, 0, 0, 255], font)
            }
        };
        if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck')) {
            Render.GradientSkeet(7, y - 350 + 70 - _0x42b4x66 - _0x42b4x69 - _0x42b4x6b - isbomb, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 70 - _0x42b4x66 - _0x42b4x69 - _0x42b4x6b - isbomb, 0, 'DUCK', [17, 17, 17, 255], font);
            Render.StringCustom(x, y - 350 + 70 - _0x42b4x66 - _0x42b4x69 - _0x42b4x6b - isbomb, 0, 'DUCK', [255, 255, 255, 255], font)
        };
        if (UI.IsHotkeyActive('Rage', 'General', 'Force safe point')) {
            Render.GradientSkeet(7, y - 350 + 70 - _0x42b4x6b, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 70 - _0x42b4x6b, 0, 'SAFE', [17, 17, 17, 255], font);
            Render.StringCustom(x, y - 350 + 70 - _0x42b4x6b, 0, 'SAFE', [132, 195, 16, 255], font)
        };
        if (velocity > 295) {
            color1 = 132;
            color2 = 195;
            color3 = 16
        } else {
            color1 = 255;
            color2 = 0;
            color3 = 0
        };
        if (Inair() & velocity > 250) {
            Render.GradientSkeet(7, y - 350 + 70, 50, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 70, 0, 'LC', [17, 17, 17, 255], font);
            Render.StringCustom(x, y - 350 + 70, 0, 'LC', [color1, color2, color3, 255], font)
        };
        if (UI.IsHotkeyActive('Script items', 'Scout Override')) {
            Render.GradientSkeet(7, y - 350 + 105 + _0x42b4x6a, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 105 + _0x42b4x6a, 0, 'DMG', [17, 17, 17, 255], font);
            Render.StringCustom(x, y - 350 + 105 + _0x42b4x6a, 0, 'DMG', [255, 255, 255, 255], font)
        };
        if (drawHideReal) {
            Render.GradientSkeet(7, y - 350 + 105 + _0x42b4x6a + _0x42b4x67, 50, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 105 + _0x42b4x6a + _0x42b4x67, 0, 'FS', [17, 17, 17, 255], font);
            Render.StringCustom(x, y - 350 + 105 + _0x42b4x6a + _0x42b4x67, 0, 'FS', [132, 195, 16, 255], font)
        };
        if (UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots')) {
            Render.GradientSkeet(7, y - 350 + 105, 170, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 105, 0, 'HS', [17, 17, 17, 255], font);
            Render.StringCustom(x, y - 350 + 105, 0, 'HS', [132, 195, 16, 255], font)
        };
        if (UI.GetValue('Misc', 'GENERAL', 'Miscellaneous', 'Extended backtracking')) {
            Render.GradientSkeet(7, y - 350 + 105 + _0x42b4x6a + _0x42b4x67 + _0x42b4x68, 75, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y + 1 - 350 + 105 + _0x42b4x6a + _0x42b4x67 + _0x42b4x68, 0, 'PING', [17, 17, 17, 255], font);
            Render.StringCustom(x, y - 350 + 105 + _0x42b4x6a + _0x42b4x67 + _0x42b4x68, 0, 'PING', [255 - ((Entity.GetProp(Entity.GetLocalPlayer(), 'CPlayerResource', 'm_iPing') / 189 * 60) * 2.29824561404), (Entity.GetProp(Entity.GetLocalPlayer(), 'CPlayerResource', 'm_iPing') / 189 * 60) * 3.42105263158, (Entity.GetProp(Entity.GetLocalPlayer(), 'CPlayerResource', 'm_iPing') / 189 * 60) * 0.22807017543, 255], font)
        }
    };
    fill = 3.3 - (3.3 + on_plant_time - Globals.Curtime());
    if (fill > 3.3) {
        fill = 3.3
    };
    if (planting) {
        Render.GradientSkeet(7, y - 350 + 70 + 1 - _0x42b4x66 - _0x42b4x6b, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
        Render.StringCustom(x, y + 1 - 350 + 70 - _0x42b4x66 - _0x42b4x6b, 0, bombsiteonplant, [0, 0, 0, 255], font);
        Render.StringCustom(x, y - 350 + 70 - _0x42b4x66 - _0x42b4x6b, 0, bombsiteonplant, [210, 216, 112, 255], font);
        Render.Arc(x + 135, y - 350 + 85 - _0x42b4x66 - _0x42b4x6b, 11, 7, 0, 360, [17, 17, 17, 255]);
        Render.Arc(x + 135, y - 350 + 85 - _0x42b4x66 - _0x42b4x6b, 10, 8, 0, (fill / 3.3) * 360, [255, 255, 255, 255])
    };
    local = Entity.GetLocalPlayer();
    var _0x42b4x2d = Entity.GetEntitiesByClassID(128)[0];
    if (_0x42b4x2d == undefined) {
        return
    };
    var _0x42b4x6d = Entity.GetRenderOrigin(_0x42b4x2d);
    var _0x42b4x6e;
    _0x42b4x6e = Entity.GetRenderOrigin(local);
    var _0x42b4x6f = calcDist(_0x42b4x6d, _0x42b4x6e);
    var _0x42b4x70 = false;
    var _0x42b4x71;
    var _0x42b4x72 = Entity.GetProp(local, 'CCSPlayerResource', 'm_iArmor');
    var _0x42b4x73 = Entity.GetProp(local, 'CBasePlayer', 'm_iHealth');
    var _0x42b4x74 = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_bBombTicking');
    var _0x42b4x75 = (Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_flC4Blow') - Globals.Curtime());
    var _0x42b4x76 = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_flTimerLength');
    var _0x42b4x77 = (((Render.GetScreenSize()[1] - 50) / _0x42b4x76) * (_0x42b4x75));
    var _0x42b4x78 = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_flDefuseLength');
    var _0x42b4x79 = (Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_flDefuseCountDown') - Globals.Curtime());
    var _0x42b4x7a = (((Render.GetScreenSize()[1] - 50) / _0x42b4x78) * (_0x42b4x79));
    var _0x42b4x7b = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_hBombDefuser');
    var _0x42b4x7c = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_bBombDefused');
    const _0x42b4x7d = 450.7;
    const _0x42b4x55 = 75.68;
    const _0x42b4x7e = 789.2;
    const _0x42b4x35 = (_0x42b4x6f - _0x42b4x55) / _0x42b4x7e;
    var _0x42b4x7f = _0x42b4x7d * Math['exp'](-_0x42b4x35 * _0x42b4x35);
    if (_0x42b4x72 > 0) {
        var _0x42b4x80 = _0x42b4x7f * 0.5;
        var _0x42b4x81 = (_0x42b4x7f - _0x42b4x80) * 0.5;
        if (_0x42b4x81 > _0x42b4x72) {
            _0x42b4x72 = _0x42b4x72 * (1 / 0.5);
            _0x42b4x80 = _0x42b4x7f - _0x42b4x81
        };
        _0x42b4x7f = _0x42b4x80
    };
    _0x42b4x71 = Math['ceil'](_0x42b4x7f);
    if (_0x42b4x71 >= _0x42b4x73) {
        _0x42b4x70 = true
    } else {
        _0x42b4x70 = false
    };
    _0x42b4x75 = parseFloat(_0x42b4x75['toPrecision'](3));
    timer2 = parseFloat(_0x42b4x75['toPrecision'](2));
    timer3 = parseFloat(_0x42b4x75['toPrecision'](1));
    if (!_0x42b4x74) {
        return
    };
    if (_0x42b4x7c) {
        return
    };
    if (_0x42b4x75 >= 1) {
        Render.GradientSkeet(7, y - 350 + 70 + 1 - _0x42b4x66 - _0x42b4x6b, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
        Render.StringCustom(x, y - 350 + 70 + 1 - _0x42b4x66 - _0x42b4x6b, 0, getSite(_0x42b4x2d) + _0x42b4x75['toFixed'](1) + 's', [0, 0, 0, 255], font);
        Render.StringCustom(x, y - 350 + 70 - _0x42b4x66 - _0x42b4x6b, 0, getSite(_0x42b4x2d) + _0x42b4x75['toFixed'](1) + 's', [255, 255, 255, 255], font)
    };
    if (_0x42b4x7b > 0) {
        if (_0x42b4x75 > _0x42b4x78 && _0x42b4x75 >= 0.1) {
            Render.FilledRect(0, 0, 10, 1080, [25, 25, 25, 120]);
            Render.FilledRect(0, 1080 - _0x42b4x7a, 10, 1080, [58, 191, 54, 120]);
            Render.Rect(0, 0, 10, 1080, [25, 25, 25, 120])
        } else {
            Render.FilledRect(0, 0, 10, 1080, [25, 25, 25, 120]);
            Render.FilledRect(0, 1080 - _0x42b4x7a, 10, 1080, [252, 18, 19, 120]);
            Render.Rect(0, 0, 10, 1080, [25, 25, 25, 120])
        }
    };
    if (_0x42b4x70) {
        Render.GradientSkeet(7, y - 315 + 1 - _0x42b4x66 - _0x42b4x6b, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
        Render.StringCustom(x, y - 315 + 1 - _0x42b4x66 - _0x42b4x6b, 0, 'FATAL', [0, 0, 0, 255], font);
        Render.StringCustom(x, y - 315 - _0x42b4x66 - _0x42b4x6b, 0, 'FATAL', [255, 0, 0, 255], font)
    } else {
        if (_0x42b4x7f > 0.5) {
            Render.GradientSkeet(7, y - 315 + 1 - _0x42b4x66 - _0x42b4x6b, 100, 30, 1, [0, 0, 0, 55], [0, 0, 0, 0]);
            Render.StringCustom(x, y - 315 + 1 - _0x42b4x66 - _0x42b4x6b, 0, '-' + _0x42b4x71 + 'HP', [0, 0, 0, 255], font);
            Render.StringCustom(x, y - 315 - _0x42b4x66 - _0x42b4x6b, 0, '-' + _0x42b4x71 + 'HP', [210, 216, 112, 255], font)
        }
    }
}
var oldTick = 0;
var lastPressed = 0;
var isHideRealActive = false;

function onCreateMove() {
    if (UI.IsHotkeyActive('Script items', 'Ping spike')) {
        UI.SetValue('Misc', 'GENERAL', 'Miscellaneous', 'Extended backtracking', 1)
    } else {
        UI.SetValue('Misc', 'GENERAL', 'Miscellaneous', 'Extended backtracking', 0)
    };
    misses = shotsfired - shotshurt;
    isLeftActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Left Hotkey');
    isRightActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Right Hotkey');
    isBackwardsActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Backwards Hotkey');
    isForwardActive = UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Forward Hotkey');
    if (isLeftActive && leftWasPressed == false) {
        lastPressed = Global.Tickcount();
        isHideRealActive = false;
        leftWasPressed = true;
        backWasPressed = false;
        rightWasPressed = false;
        upWasPressed = false;
        drawLeft = 1;
        drawBack = 0;
        drawRight = 0;
        drawHideReal = 0;
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', -90);
        UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', false)
    } else {
        if (isLeftActive && leftWasPressed == true && Global.Tickcount() > lastPressed + 16) {
            isHideRealActive = true;
            oldTick = Global.Tickcount();
            drawHideReal = 1
        }
    };
    if (isRightActive && rightWasPressed == false) {
        lastPressed = Global.Tickcount();
        isHideRealActive = false;
        backWasPressed = false;
        leftWasPressed = false;
        rightWasPressed = true;
        upWasPressed = false;
        drawLeft = 0;
        drawBack = 0;
        drawRight = 1;
        drawHideReal = 0;
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 90);
        UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', false)
    } else {
        if (isRightActive && rightWasPressed == true && Global.Tickcount() > lastPressed + 16) {
            isHideRealActive = true;
            oldTick = Global.Tickcount();
            drawHideReal = 1
        }
    };
    if (isBackwardsActive && backWasPressed == false && Global.Tickcount() > lastPressed + 16) {
        lastPressed = Global.Tickcount();
        isHideRealActive = false;
        backWasPressed = true;
        rightWasPressed = false;
        leftWasPressed = false;
        upWasPressed = false;
        drawLeft = 0;
        drawHideReal = 0;
        drawBack = 1;
        drawRight = 0;
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 0);
        UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', false)
    } else {
        if (isBackwardsActive && backWasPressed == true && Global.Tickcount() > lastPressed + 16) {
            isHideRealActive = true;
            oldTick = Global.Tickcount();
            drawHideReal = 1
        }
    };
    if (isForwardActive && upWasPressed == false && Global.Tickcount() > lastPressed + 16) {
        lastPressed = Global.Tickcount();
        isHideRealActive = false;
        backWasPressed = false;
        rightWasPressed = false;
        drawHideReal = 0;
        leftWasPressed = false;
        upWasPressed = true;
        drawLeft = 0;
        drawBack = 0;
        drawRight = 0;
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 180);
        UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', false)
    };
    if (isHideRealActive) {
        if (Global.Tickcount() > oldTick + 16) {
            backWasPressed = false;
            rightWasPressed = false;
            leftWasPressed = false;
            upWasPressed = false;
            oldTick = Global.Tickcount();
            drawHideReal = 1
        };
        drawLeft = 0;
        drawBack = 0;
        drawRight = 0;
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 0);
        UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', true)
    };  
}
function player_connect() {
    lastPressed = Global.Tickcount();
    oldTick = Global.Tickcount();
    on_plant_time = 0;
    fill = 0;
    planting = false;
    var _0x42b4x2d = Entity.GetEntitiesByClassID(128)[0];
    if (_0x42b4x2d == undefined) {
        return
    };
    var _0x42b4x74 = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_bBombTicking');
    if (_0x42b4x74) {
        isbomb = 70
    } else {
        isbomb = 0
    }
}
function player_connect() {
    lastPressed = Global.Tickcount();
    oldTick = Global.Tickcount();
    on_plant_time = 0;
    fill = 0;
    planting = false;
    var _0x42b4x2d = Entity.GetEntitiesByClassID(128)[0];
    if (_0x42b4x2d == undefined) {
        return
    };
    var _0x42b4x74 = Entity.GetProp(_0x42b4x2d, 'CPlantedC4', 'm_bBombTicking');
    if (_0x42b4x74) {
        isbomb = 70
    } else {
        isbomb = 0
    }
}
Global.RegisterCallback('Draw', 'drawString');
Global.RegisterCallback('CreateMove', 'onCreateMove');
Global.RegisterCallback('player_connect_full', 'player_connect');
Global.RegisterCallback('Draw', 'drawindicators');
Cheat.RegisterCallback('bomb_beginplant', 'abs2');
Cheat.RegisterCallback('bomb_abortplant', 'abs1');
Cheat.RegisterCallback('bomb_defused', 'abs3');
Cheat.RegisterCallback('round_start', 'on_round_start');
Cheat.RegisterCallback('bomb_planted', 'bomb_planted');
Cheat.RegisterCallback('bomb_exploded', 'bomb_exploded')

UI.AddLabel("=======================");
UI.AddDropdown("Custom Clantags",  ["disabled", "not skripter"]);
trigger = true;
halftimeval = false;
var lasttime = 0;

UI.AddLabel("=======================");

function start( )
{
    var tag = UI.GetValue( "Script items", "Custom Clantags" );
    if(trigger){
        if(tag == 0){
            speed = 0;
        }
        if(tag == 1){
            speed = 3;
        }
    }
    var time = parseInt(Math.round(Globals.Curtime() * speed))

    if (time != lasttime)
    {
        if(tag == 0) { Local.SetClanTag(""); }

        if(tag == 1)
        {
    
            tag = [

"",           
" ",
"n",
"no",
"not",
"not ",
"not s",
"not sk",
"not skr",
"not skri",
"not skrip",
"not skript",
"not skripte",
"not skripter",
"not skripte",
"not skript",
"not skrip",
"not skri",
"not skr",
"not sk",
"not s",
"not ",
"not",
"no",
"n",
" ", 
"",

            ]

            Num = time % tag.length;

            Local.SetClanTag(tag[Num]);
        }
    }
    lasttime = time;
}

Cheat.RegisterCallback("Draw", "start");


UI.AddCheckbox("trashtalk");
const normal_killsays = ["а у вас походу умирать это семейное)", "нахуя пидораса убил?", "чао персик дозревай", "уважаемый в тюрьме вы будете водолазом",
    "говори буду плохо говорить буду сосать, буду плохо сосать буду пересасывать", "долбаеб иди башмачки в сундучок школьный собирай", "ботинок ебаный чо слетел", "братик маме привет передай",
    "не противник",
    "а ты че клоун???", "я обоссал тебя (", "ты че там отлетел то?",
    "упал хуета ебаная , но в боди забрал да похуй все равно упал",
    "*DEAD* ливай с хвх (", "до связи башмак",
    "нищета глупейшая играть учись", "опущен сын твари",
    "нищий улетел", "*DEAD* пофикси нищ", "сразу видно кфг иссуе мб конфиг у меня прикупишь ?",
    "животное аддон скачай а то падаешь", "оттарабанен армянская королева", "сука не позорься и ливни",
    "улетел тапочек ебаный", "единицей свалился фуфлыжник",
    "зачем ты играешь тут безмозглый", "иди кумыса попей очередняра",
    "откисай сочняра", "АХАХА ЕБАТЬ У ТЕБЯ ЧЕРЕПНАЯ КОРОБКА ПРЯМ КАК [XML-RPC] No-Spread 24/7 | aim_ag_texture_2 ONLY!",
    "на мыло и веревку то деньги есть????", "ИЩИ СЕБЯ НА pornoeb.cc/sochniki",
    "свежий кабанчик", "до связи на подскоке кабанчик", "скажи маме сухарики купить долбаеб", "ебать ты красиво на бутылку присел , тебе дать альт ?",
    "прости что без смазки)", "алло это скорая? тут такая ситуация пареню который упал нужна скорая)", "ало ты мапу лузаешь дура очнись",
    "тяжело с кряком????", "ЕБУЧЕСТЬ ВТОРОГО РАЗРЯДА ВЫДВИЖЕНЕЦ ОТКИС", "але а противники то где???", "ты по легиту играешь ?", "ХУЕПРЫГАЛО ТУСОВОЧНОЕ КУДА ПОЛЕТЕЛО", "ты куда жертва козьего аборта",
    "iq?", "·٠●•۩۞۩ОтДыХаЙ (ٿ) НуБяРа۩۞۩•●٠·", "ты то куда лезешь сын фантомного стационарного спец изолированого металлформовочного механизма", "╭∩╮( ⚆ ʖ ⚆)╭∩╮ ДоПрыГался(ت)ДрУжоЧеК"
];
    
const hs_killsays = ["держи зонтик ☂, тебя обоссали", "Держи ✈ и лети нахуй !", "слишком сочный для Djamic.technologies",
    "сьебался нахуй таракан усатый", "мать твою ебал", "нахуй ты упал иди вставай и на завод",
    "не по сезону шуршишь фраер",
    "ИЗИ ЧМО ЕБАНОЕ",
    "ливай блять не позорься",
    "AХАХ ПИДОР УПАЛ С ВАНВЕЯ ХАХАХА ОНЛИ БАИМ В БОДИ ПОТЕЕТ НА ФД АХА", "АХАХА УЛЕТЕЛ ЧМОШНИК",
    "1 МАТЬ ЖАЛЬ",
    "тебе права голоса не давали thirdworlder ебаный",
    "на завод иди",
    "не не он опять упал на конлени",
    "вставай заебал , завтра в школу", "гет гуд гет иди нахуй",
    "by SANCHEZj hvh boss",
    "ну нет почему он ложится когда я прохожу", "у тебя ник нейм адео?", "парень тебе ник придумать?",
    "такой тупой :(",
    "хватит получать хс ,лучше возьми свою руку и иди дрочи",
    "нет нет этот крякер такой смешной",
    "1 сын шлюхи",
    "1 мать твою ебал",
    "преобрети мой кфг клоун",
    "об кафель голову разбил?",
    "мать твою ебал",
    "хуесос дальше адайся ко мне",
    "ещё раз позови к себе на бекап",
    "не противник",
    "ник нейм дориан(",
    "iq ?",
    "упал = минус мать", "не пиши мне",
    "жаль конечно что против тебя играю, но куда деваться", "адиничкой упал", "сынок зачем тебе это ?",
    "давно в рот берёшь?", "мне можно", "ты меня так заебал , ливни уже",
    "ничему жизнь не учит (", "я не понял, ты такой жирный потомучто дошики каждый день жрешь?",
    "братка го я тебе бекап позову", "толстяк даже пройти спокойно не может"
];

function on_player_death()
{
    if(UI.GetValue("Misc", "trashtalk"))
    {
        const victim = Entity.GetEntityFromUserID(Event.GetInt("userid"));
        const attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
        const headshot = Event.GetInt("headshot") == 1;
        
        if(Entity.IsLocalPlayer(attacker) && attacker != victim)
        {
            const normal_say = normal_killsays[Math.floor(Math.random() * normal_killsays.length)];
            const hs_say = hs_killsays[Math.floor(Math.random() * hs_killsays.length)];
            
            if(headshot && Math.random() * 2 > 1) //gamer style randomizer
            {
                Cheat.ExecuteCommand("say " + hs_say);
                return;
            }
            Cheat.ExecuteCommand("say " + normal_say);
        }
    }
}

var killsay_amt = normal_killsays.length + hs_killsays.length;

Cheat.Print("trashtalk js loaded, killsay count: " + killsay_amt + "\n");
Cheat.RegisterCallback("player_death", "on_player_death");

UI.AddLabel("=======================");

var killsay_amt = normal_killsays.length + hs_killsays.length;

Cheat.Print("trashtalk js loaded, killsay count: " + killsay_amt + "\n");
Cheat.RegisterCallback("player_death", "on_player_death");

UI.AddSliderInt("Send Limit", 0, 16)
UI.AddSliderInt("Choke Limit", 0, 16)
var tickcount = 0
var flip = false
function onCM()
{
    var send = UI.GetValue("Script items", "Send Limit")
    var choke = UI.GetValue("Script items", "Choke Limit")
    if(tickcount >= choke && !flip)
    {
        flip = true
        tickcount = 0
    }
    if(tickcount >= send && flip)
    {
        flip = false
        tickcount = 0
    }
    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", !flip ? choke : 0)
    tickcount++
}
function roundstart()
{
    tickcount = 0
}


Cheat.RegisterCallback("round_start", "roundstart")
Cheat.RegisterCallback("CreateMove", "onCM")

UI.AddLabel("=======================");
UI.AddSliderFloat("Aspect Ratio",1.0,2.0); // you can customize limites here (1.0 - lowest, 2.0 - highest)
UI.AddLabel("1.33 is 4:3                  1.77 is 16:9");
UI.AddCheckbox("4:3 mode");
UI.AddCheckbox("16:9 mode");

var aspect_cache = 0;

function aspect(){
	var aspect_slider = UI.GetValue("Aspect Ratio");
	var cht = UI.GetValue("4:3 mode");
	var shd = UI.GetValue("16:9 mode");
	
	
	if (cht != 0) {
		UI.SetValue("Aspect Ratio", 1.33333333);
		UI.SetValue("4:3 mode", 0);
	}
	
	if (shd != 0) {
		UI.SetValue("Aspect Ratio", 1.77777777);
		UI.SetValue("16:9 mode", 0);
	}
	
	if (aspect_cache != aspect_slider) {
		aspect_cache = aspect_slider;
		UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Hidden cvars", 1);
		Global.ExecuteCommand("r_aspectratio " + aspect_slider);
	}
}

UI.AddLabel("=======================");
const x1 = UI.AddSliderInt("Hotkeys_x", 0, Global.GetScreenSize()[0]);
const y1 = UI.AddSliderInt("Hotkeys_y", 0, Global.GetScreenSize()[1]);
UI.AddColorPicker("Hotkeys");
var colorhotkeys = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Hotkeys");
if (colorhotkeys[3] == 0) {
    UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Hotkeys", [89, 119, 239, 3]);
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
var textalpha = 0;
var h = new Array();

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

function main_hotkeys() {
        if (!World.GetServerString()) return;
        const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_x"),
            y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_y");
        colorhotkeys = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Hotkeys");
        var font = Render.AddFont("Verdana", 7, 100);
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

        if (UI.IsHotkeyActive("Script items", "Scout Override")) {
            doalpha = Math.min(doalpha + frames, 1);
        } else {
            doalpha = doalpha - frames;
            if (doalpha < 0) doalpha = 0;
            if (doalpha == 0) {
                h.splice(h.indexOf("Damage override"));
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
        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            if (h.indexOf("Anti-aim inverter") == -1)
                h.push("Anti-aim inverter")
        }
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
            if (h.indexOf("Safe point override") == -1)
                h.push("Safe point override")
        }
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
            if (h.indexOf("Force body aim") == -1)
                h.push("Force body aim")
        }
        if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            if (h.indexOf("Double tap") == -1)
                h.push("Double tap")
        }
        if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
            if (h.indexOf("Hide shots") == -1)
                h.push("Hide shots")
        }
        if (UI.IsHotkeyActive("Script items", "Scout Override")) {
            if (h.indexOf("Damage override") == -1)
                h.push("Damage override")
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
                //Render.FilledRect(x, y + 23, width, 18 * h.length, [17, 17, 17, Math.min(colorhotkeys[3], alpha * 255)]);
                for (i = 0; i < h.length; i++) {
                    switch (h[i]) {
                        case 'Slow walk':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(swalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, swalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, swalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, swalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, swalpha * 255], font);
                            break;
                        case 'Duck peek assist':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(fdalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, fdalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, fdalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, fdalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, fdalpha * 255], font);
                            break;
                        case 'Auto peek':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(apalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, apalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, apalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, apalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, apalpha * 255], font);
                            break;
                        case 'Anti-aim inverter':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(aialpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, aialpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, aialpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, aialpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, aialpha * 255], font);
                            break;
                        case 'Safe point override':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(spalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, spalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, spalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, spalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, spalpha * 255], font);
                            break;
                        case 'Force body aim':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(fbalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, fbalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, fbalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, fbalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, fbalpha * 255], font);
                            break;
                        case 'Double tap':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(dtalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, dtalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, dtalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, dtalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, dtalpha * 255], font);
                            break;
                        case 'Hide shots':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(hsalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, hsalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, hsalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [0, 0, 0, hsalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[toggled]", font)[0], y + 26 + 18 * i, 0, "[toggled]", [255, 255, 255, hsalpha * 255], font);
                            break;
                        case 'Damage override':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(doalpha * 255, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, doalpha * 255 / 1.3], font);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, doalpha * 255], font);

                            Render.StringCustom(x - 3 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [0, 0, 0, doalpha * 255 / 1.3], font);
                            Render.StringCustom(x - 2 + width - Render.TextSizeCustom("[holding]", font)[0], y + 26 + 18 * i, 0, "[holding]", [255, 255, 255, doalpha * 255], font);
                            break;
                    }

                }
        }
        if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
            const mouse_pos = Global.GetCursorPosition();
            if (in_bounds(mouse_pos, x, y, x + width, y + 30)) {
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_x", mouse_pos[0] - width / 2);
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Hotkeys_y", mouse_pos[1] - 20);
            }
        }
}
Global.RegisterCallback("Draw", "main_hotkeys")

Cheat.RegisterCallback("CreateMove","aspect");

UI.AddLabel("=======================");
UI.AddCheckbox( "Enable chat logging" );

hitboxes = [
    'generic',
    'head',
    'chest',
    'stomach',
    'left arm',
    'right arm',
    'left leg',
    'right leg',
    '?'
];
var scriptitems = ("Misc", "JAVASCRIPT", "Script items");
var shots = 0;
var predicthc = 0;
var safety = 0;
var hitboxName = "";
var choked = 0;
var exploit = 0;
var logs = [];
var logsct = [];
var logsalpha = [];
function getHitboxName(index)
{
    switch (index)
    {
        case 0:
            hitboxName = "head";
            break;
        case 1:
            hitboxName = "head";
            break;
        case 2:
            hitboxName = "stomach";
            break;
        case 3:
            hitboxName = "stomach";
            break;
        case 4:
            hitboxName = "stomach";
            break;
        case 5:
            hitboxName = "chest";
            break;
        case 6:
            hitboxName = "chest";
            break;
        case 7:
            hitboxName = "left leg";
            break;
        case 8:
            hitboxName = "right leg";
            break;
        case 9:
            hitboxName = "left leg";
            break;
        case 10:
            hitboxName = "right leg";
            break;
        case 11:
            hitboxName = "left leg";
            break;
        case 12:
            hitboxName = "right leg";
            break;
        case 13:
            hitboxName = "left arm";
            break;
        case 14:
            hitboxName = "right arm";
            break;
        case 15:
            hitboxName = "left arm";
            break;
        case 16:
            hitboxName = "left arm";
            break;
        case 17:
            hitboxName = "right arm";
            break;
        case 18:
            hitboxName = "right arm";
            break;
        default:
            hitboxName = "body";
    }
    return hitboxName;
}
function HitgroupName(index) {
    return hitboxes[index] || 'body';
}

var target = -1;
var shots_fired = 0;
var hits = 0;
var lastUpdate = 0;
var logged = false;

function ragebot_fire() {
	predicthc = Event.GetInt("hitchance");
	safety = Event.GetInt("safepoint");
	hitboxName = getHitboxName(Event.GetInt("hitbox"));
	exploit = (Event.GetInt("exploit")+1).toString();
  target = Event.GetInt("target_index");
  shots_fired++;
  logged = false;
  lastUpdate = Globals.Curtime();
}

function hitlog() {
    var hit = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    if (attacker == Entity.GetLocalPlayer() && hit == target) hits++;

    var hittype = "Hit ";
    me = Entity.GetLocalPlayer();
    hitbox = Event.GetInt('hitgroup');
    target_damage = Event.GetInt("dmg_health");
    target_health = Event.GetInt("health");
    victim = Event.GetInt('userid');
    attacker = Event.GetInt('attacker');
    weapon = Event.GetString('weapon');
    victimIndex = Entity.GetEntityFromUserID(victim);
    attackerIndex = Entity.GetEntityFromUserID(attacker);
    name = Entity.GetName(victimIndex);
  	var simtime = Globals.Tickcount() % 17;

    var flags = "";

    if (exploit == 2)
      flags += "T";

    flags += "B";

    if (hitbox == 1)
      flags += "H";

  	if (safety == 1) {
  		safety = "true";
  	}
  	else {
  		safety = "false";
  	}

    if (weapon == "hegrenade")
      hittype = "Naded ";
    else if (weapon == "inferno")
      hittype = "Burned ";
    else if (weapon == "knife")
      hittype = "Knifed ";

    if (me == attackerIndex && me != victimIndex) {
		Cheat.PrintColor([89, 119, 239, 255], "[not skripter] ");
    if (hittype == "Hit ") {
        if (UI.GetValue("Script items", "Enable chat logging")) {
            Cheat.PrintChat(" \x08[\x0cnot skripter\x08] [\x0c"+shots.toString()+"\x08] "+hittype+name+"'s \x10"+HitgroupName(hitbox)+"\x08 for \x07"+target_damage.toString()+"\x08 ("+target_health.toString()+" remaining) aimed=\x10"+hitboxName+"\x08("+predicthc.toString()+"%%) safety=\x03"+safety+"\x08 (\x10"+flags+"\x08) (\x10"+simtime+"\x08:\x10"+exploit+"\x08)\n");
        }
      Cheat.Print("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining) aimed="+hitboxName+"("+predicthc.toString()+"%%) safety="+safety+" ("+flags+") ("+simtime+":"+exploit+")\n");
  		logs.push("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining) aimed="+hitboxName+"("+predicthc.toString()+"%%) safety="+safety+" ("+flags+") ("+simtime+":"+exploit+")");
    }
    else {
      Cheat.Print("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining) \n");
  		logs.push("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining)");
    }

		logsct.push(Globals.Curtime());
		logsalpha.push(255);
	}

  if (shots == 99)
    shots = 0;
  else
    shots++;

}

function removelogs() {
	if (logs.length > 6) {
		logs.shift();
		logsct.shift();
		logsalpha.shift();
	}

	if (logsct[0] + 6.5 < Globals.Curtime()) {
		logsalpha[0] -= Globals.Frametime() * 600;
		if (logsalpha[0] < 0) {
			logs.shift();
			logsct.shift();
			logsalpha.shift();
		}
	}
}

function item_purchase() {
	Cheat.PrintColor([89, 119, 239, 255], "[not skripter] ");
	Cheat.Print(Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))+" bought "+Event.GetString("weapon")+"\n");
	logs.push(Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))+" bought "+Event.GetString("weapon")+"");
	logsct.push(Globals.Curtime());
	logsalpha.push(255);
}

function onDraw() {
    if (!World.GetServerString()) return;
    var font = Render.AddFont("Lucida Console", 8, 0);


	for (i = 0; i < logs.length; i++) {
        Render.StringCustom(4, 4 + 13*i, 0, logs[i], [0, 0, 0, logsalpha[i]], font);
		Render.StringCustom(3, 3 + 13*i, 0, logs[i], [255, 255, 255, logsalpha[i]], font);
    }

    if (shots_fired > hits && (Globals.Curtime() - lastUpdate > 0.33)) {
      if (Globals.Curtime() - lastUpdate > 1) {
        shots_fired = 0;
        hits = 0;
      }
      if (!logged) {
        var simtime = Globals.Tickcount() % 16;
        logged = true;
        var issafe = "true";
        var reason = "?";
        if (safety == 0) {
          issafe = "false";
        }

		if (Entity.IsAlive(target) == false)
			reason = "death";
		else if (Entity.IsAlive(Entity.GetLocalPlayer()) == false)
			reason = "dead";
        else if (safety == true && predicthc < 76)
            reason = "spread";
        else if (safety == true && predicthc > 76)
            reason = "prediction error";

        var flags = "";

        if (exploit == 2)
          flags += "T";

          flags += "B";

      }
    }
}

function main() {
	Global.RegisterCallback("ragebot_fire", "ragebot_fire");
	Global.RegisterCallback("item_purchase", "item_purchase");
  Global.RegisterCallback("player_hurt", "hitlog");
	Global.RegisterCallback("Draw", "onDraw");
	Global.RegisterCallback("Draw", "removelogs");
}

main();

UI.AddLabel("=======================");

UI.AddCheckbox("Display indicator")
UI.AddHotkey("Heavy Pistol Override")
UI.AddSliderInt("Heavy Pistol Mindmg", 0, 130)
UI.AddHotkey("Scout Override")
UI.AddSliderInt("Scout Mindmg", 0, 130)
UI.AddHotkey("AWP Override")
UI.AddSliderInt("AWP Mindmg", 0, 130)
UI.AddHotkey("Auto Override")
UI.AddSliderInt("Auto Mindmg", 0, 130)

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
    weapon_name = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
    
    if (isActive("Heavy Pistol Override") && isHeavyPistol(weapon_name))
    {
        setValue("HEAVY PISTOL", heavy_value)
    }
    else{
        setValue("HEAVY PISTOL", heavy_cache)
    }
    
    if (isActive("Scout Override") && weapon_name == "ssg 08")
    {
        setValue("SCOUT", scout_value)
    }
    else{
        setValue("SCOUT", scout_cache)
    }

    if (isActive("AWP Override") && weapon_name == "awp")
    {
        setValue("AWP", awp_value)
    }
    else{
        setValue("AWP", awp_cache)
    }

    if (isActive("Auto Override") && isAutoSniper(weapon_name))
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
    font = Render.AddFont("Tahoma", 17, 600 )
    screen = Render.GetScreenSize()
    wep = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
    x = screen[0]-screen[0] + 20
    y = screen[1] - 100
    heavy ="" + UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage")
    scout ="" +UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage")
    awp ="" +UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage")
    auto ="" +UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage")
    var str = ""
    if (UI.GetValue("Script items", "Display indicator") && Entity.IsValid(Entity.GetLocalPlayer()) && Entity.IsAlive(Entity.GetLocalPlayer()))
    {
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
    
    if (str == "" + 0)
    {
        str = "DYNAMIC"
    }
    Render.StringCustom(x+1, y+1, 0, str+"", [0,0,0,255], font)
    Render.StringCustom(x, y, 0, str+"", [255,255,255,255], font)
}
Cheat.RegisterCallback("Draw", "indicator")
Cheat.RegisterCallback("CreateMove", "onCM")

UI.AddLabel("=======================");

var a = UI.AddSliderInt("Turn speed",200, 500)
function d()
{
    UI.SetValue("Misc", "GENERAL", "Movement", "Turn speed", UI.GetValue.apply(null,a))
}
Cheat.RegisterCallback("Draw", "d")

UI.AddLabel("=======================");

var props = false;
var tonemapClass = 'CEnvTonemapController';

function getValue(name) {
  var value = UI.GetValue('Script Items', name);

  return value;
}

function getColor(name) {
  var value = UI.GetColor('MISC', 'JAVASCRIPT', 'Script items', name);

  return value;
}

function onRender() {
  if (!Entity.GetLocalPlayer()) {
    return;
  }

  var worldColor = (
    getValue('enable world color modulation')
      ? getColor('world color')
      : [0, 0, 0]
  );

  Convar.SetFloat('mat_ambient_light_r', worldColor[0] / 100);
  Convar.SetFloat('mat_ambient_light_g', worldColor[1] / 100);
  Convar.SetFloat('mat_ambient_light_b', worldColor[2] / 100);

  var entities = Entity.GetEntities();

  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
    var name = Entity.GetClassName(entity);

    if (name !== tonemapClass) {
      continue;
    }

    if (!props) {
      Entity.SetProp(entity, tonemapClass, 'm_bUseCustomAutoExposureMin', true);
      Entity.SetProp(entity, tonemapClass, 'm_bUseCustomAutoExposureMax', true);
      Entity.SetProp(entity, tonemapClass, 'm_bUseCustomBloomScale', true);

      props = true;
    }

    if (props) {
      var value = getValue('world exposure') / 10;
      Entity.SetProp(entity, tonemapClass, 'm_flCustomAutoExposureMin', value);
      Entity.SetProp(entity, tonemapClass, 'm_flCustomAutoExposureMax', value);

      Entity.SetProp(entity, tonemapClass, 'm_flCustomBloomScale', getValue('bloom scale') / 10);
    }

    Convar.SetFloat('r_modelAmbientMin', getValue('model ambient') / 10);
  }
}

function init() {
  UI.AddSliderFloat('world exposure', 0.0, 100.0);
  UI.AddSliderFloat('model ambient', 0.0, 100.0);
  UI.AddSliderFloat('bloom scale', 0.0, 100.0);
  UI.AddCheckbox('enable world color modulation');
  UI.AddColorPicker('world color');

  UI.SetValue('MISC', 'GENERAL', 'Hidden cvars', true);
  UI.SetValue('MISC', 'PERFORMANCE & INFORMATION', 'Disable post processing', false);

  Global.RegisterCallback("Draw", "onRender");
}

init();

UI.AddLabel("=======================");

var materials = [];

function SkeetChams() {
    for (i in materials) {
        var a = materials[i],
            b = Material.Get(a + " chams");
        if (b > 0) {
            Material.SetKeyValue(b, "$baseTexture", "vgui/white");
            Material.SetKeyValue(b, "$additive", "0");
            Material.SetKeyValue(b, "$envmap", "models/effects/cube_white");
            Material.SetKeyValue(b, "$envmapfresnel", "1");
            var d = UI.GetColor("Script items", a + " chams");
            Material.SetKeyValue(b, "$envmaptint", "[" + d[0] / 255 + " " + parseInt(d[1] / 25.5)/10 + " " + d[2] / 255 + "]");
            var tickcount = Globals.Tickcount();
            var color = HSVtoRGB(tickcount % 350 / 350, 1, 1, 1, 255);
            //UI.SetColor("Visual", "ENEMIES", "ESP", "Glow", [color.r, color.g, color.b, 255]);
            Material.SetKeyValue(b, "$alpha", "1");
            Material.Refresh(b);
        }
    }
}

function createMat(a) {
    UI.AddColorPicker(a + " chams");
    Material.Create(a + " chams");
    materials.push(a)
}

function HSVtoRGB(h, s, v)
{
    var r, g, b, i, f, p, q, t;

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6)
    {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

function onUnload()
{
    for(var i in materials)
    {
        Material.Destroy(materials[i] + " chams");
    }
}

UI.AddLabel("Cracked to source by Galster");
UI.AddLabel("Also fixed by Galster");
createMat("Skeet Self");
createMat("Skeet Enemy");
Cheat.RegisterCallback("Material", "SkeetChams");
Cheat.RegisterCallback("Unload", "onUnload");

UI.AddLabel("=======================");
