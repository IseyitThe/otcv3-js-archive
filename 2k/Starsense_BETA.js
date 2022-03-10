const global_choked_commands = Globals.ChokedCommands, global_realtime = Globals.Realtime, global_frametime = Globals.Frametime, global_curtime = Globals.Curtime, global_tick_interval = Globals.TickInterval, global_tickrate = Globals.Tickrate, global_tickcount = Globals.Tickcount, global_frame_stage = Globals.FrameStage, ui_get_menu_position = UI.GetMenuPosition, ui_update_list = UI.UpdateList, ui_remove_item = UI.RemoveItem, ui_get_hotkey = UI.GetHotkey, ui_set_hotkey_state = UI.SetHotkeyState, ui_get_hotkey_state = UI.GetHotkeyState, ui_toggle_hotkey = UI.ToggleHotkey, ui_set_color = UI.SetColor, ui_add_sub_tab = UI.AddSubTab, ui_add_textbox = UI.AddTextbox, ui_add_color_picker = UI.AddColorPicker, ui_add_multi_dropdown = UI.AddMultiDropdown, ui_add_dropdown = UI.AddDropdown, ui_add_hotkey = UI.AddHotkey, ui_add_slider_float = UI.AddSliderFloat, ui_add_slider_int = UI.AddSliderInt, ui_add_checkbox = UI.AddCheckbox, ui_set_value = UI.SetValue, ui_get_children = UI.GetChildren, ui_get_value = UI.GetValue, ui_get_string = UI.GetString, ui_get_color = UI.GetColor, ui_is_menu_open = UI.IsMenuOpen, ui_set_enabled = UI.SetEnabled, entity_draw_flag = Entity.DrawFlag, entity_get_ccs_weapon_info = Entity.GetCCSWeaponInfo, entity_get_render_box = Entity.GetRenderBox, entity_get_weapons = Entity.GetWeapons, entity_get_entities_by_class_id = Entity.GetEntitiesByClassID, entity_get_hitbox_position = Entity.GetHitboxPosition, entity_get_eye_position = Entity.GeteyePosition, entity_get_game_rules_proxy = Entity.GetGameRulesProxy, entity_is_bot = Entity.IsBot, entity_get_weapon = Entity.GetWeapon, entity_set_prop = Entity.SetProp, entity_get_prop = Entity.GetProp, entity_get_render_origin = Entity.GetRenderOrigin, entity_get_name = Entity.GetName, entity_get_class_name = Entity.GetClassName, entity_get_class_id = Entity.GetClassID, entity_is_dormant = Entity.IsDormant, entity_is_alive = Entity.IsAlive, entity_is_valid = Entity.IsValid, entity_is_local_player = Entity.IsLocalPlayer, entity_is_enemy = Entity.IsEnemy, entity_is_teammate = Entity.IsTeammate, entity_get_entity_from_user_id = Entity.GetEntityFromUserID, entity_get_local_player = Entity.GetLocalPlayer, entity_get_teammates = Entity.GetTeammates, entity_get_enemies = Entity.GetEnemies, entity_get_players = Entity.GetPlayers, entity_get_entities = Entity.GetEntities, render_text_size = Render.TextSize, render_string = Render.String, render_filled_circle = Render.FilledCircle, render_textured_rect = Render.TexturedRect, render_add_texture = Render.AddTexture, render_find_font = Render.FindFont, render_add_font = Render.AddFont, render_polygon = Render.Polygon, render_gradient_rect = Render.GradientRect, render_get_screen_size = Render.GetScreenSize, render_world_to_screen = Render.WorldToScreen, render_circle = Render.Circle, render_filled_rect = Render.FilledRect, render_rect = Render.Rect, render_line = Render.Line, convar_set_string = Convar.SetString, convar_get_string = Convar.GetString, convar_set_float = Convar.SetFloat, convar_get_float = Convar.GetFloat, convar_set_int = Convar.SetInt, convar_get_int = Convar.GetInt, event_get_string = Event.GetString, event_get_float = Event.GetFloat, event_get_int = Event.GetInt, trace_raw_line = Trace.RawLine, trace_smoke = Trace.Smoke, trace_bullet = Trace.Bullet, trace_line = Trace.Line, usercmd_get_movement = UserCMD.GetMovement, usercmd_set_view_angles = UserCMD.SetViewAngles, usercmd_send = UserCMD.Send, usercmd_choke = UserCMD.Choke, usercmd_set_buttons = UserCMD.SetButtons, usercmd_get_buttons = UserCMD.GetButtons, usercmd_set_movement = UserCMD.SetMovement, sound_stop_microphone = Sound.StopMicrophone, sound_play_microphone = Sound.PlayMicrophone, sound_play = Sound.Play, local_get_inaccuracy = Local.GetInaccuracy, local_get_spread = Local.GetSpread, local_get_fake_yaw = Local.GetFakeYaw, local_get_real_yaw = Local.GetRealYaw, local_set_clan_tag = Local.SetClanTag, local_set_view_angles = Local.SetViewAngles, local_get_view_angles = Local.GetViewAngles, local_latency = Local.Latency, cheat_is_legit_config_active = Cheat.IsLegitConfigActive, cheat_is_rage_config_active = Cheat.IsRageConfigActive, cheat_get_username = Cheat.GetUsername, cheat_print_chat = Cheat.PrintChat, cheat_register_callback = Cheat.RegisterCallback, cheat_execute_command = Cheat.ExecuteCommand, cheat_print_color = Cheat.PrintColor, cheat_print = Cheat.Print, input_force_cursor = Input.ForceCursor, input_get_cursor_position = Input.GetCursorPosition, input_is_key_pressed = Input.IsKeyPressed, world_get_server_string = World.GetServerString, world_get_map_name = World.GetMapName, antiaim_set_lby_offset = AntiAim.SetLBYOffset, antiaim_set_real_offset = AntiAim.SetRealOffset, antiaim_set_fake_offset = AntiAim.SetFakeOffset, antiaim_get_override = AntiAim.GetOverride, antiaim_set_override = AntiAim.SetOverride, exploit_override_tolerance = Exploit.OverrideTolerance, exploit_override_shift = Exploit.OverrideShift, exploit_enable_recharge = Exploit.EnableRecharge, exploit_disable_recharge = Exploit.DisableRecharge, exploit_recharge = Exploit.Recharge, exploit_get_charge = Exploit.GetCharge, ragebot_get_targets = Ragebot.GetTargets, ragebot_ignore_target = Ragebot.IgnoreTarget, ragebot_force_hitbox_safety = Ragebot.ForceHitboxSafety, ragebot_force_target_minimum_damage = Ragebot.ForceTargetMinimumDamage, ragebot_force_target_hitchance = Ragebot.ForceTargetHitchance, ragebot_force_target_safety = Ragebot.ForceTargetSafety, ragebot_force_target = Ragebot.ForceTarget, ragebot_get_target = Ragebot.GetTarget, material_refresh = Material.Refresh, material_set_key_value = Material.SetKeyValue, material_get = Material.Get, material_destroy = Material.Destroy, material_create = Material.Create;

var screen_size = render_get_screen_size();
var sv_cheats_cache = 0;
var removals_cache = 0;

UI.AddCheckbox("Custom scope lines");
UI.AddColorPicker("Scope lines color");
UI.AddSliderInt("Scope lines height", 0, 500);
UI.AddSliderInt("Scope lines offset", 0, 500);

function get_weapon(entity) {
    if (entity_get_name(entity_get_weapon(entity)) == 'g3sg1' || entity_get_name(entity_get_weapon(entity)) == 'scar 20') return 'auto';
    else if (entity_get_name(entity_get_weapon(entity)) == 'awp') return 'awp';
    else if (entity_get_name(entity_get_weapon(entity)) == 'desert eagle') return 'deagle';
    else if (entity_get_name(entity_get_weapon(entity)) == 'r8 revolver') return 'revolver';
    else if (entity_get_name(entity_get_weapon(entity)) == 'ssg 08') return 'scout';
    else return 'other';
}

function set_dropdown_value(value, index, enable) /*credits to ed*/ {
    var mask = 1 << index;
    return enable ? (value | mask) : (value & ~mask);
}

function draw() {
    var local_player = entity_get_local_player();

    if (entity_is_alive(local_player)) {
        if (ui_get_value("Misc", "JAVASCRIPT", "Script items", "Custom scope lines")) {
            var scoped = entity_get_prop(local_player, "CCSPlayer", "m_bIsScoped");
            var offset = ui_get_value("Misc", "JAVASCRIPT", "Script items", "Scope lines offset");
            var height = ui_get_value("Misc", "JAVASCRIPT", "Script items", "Scope lines height");
            var color = ui_get_color("Misc", "JAVASCRIPT", "Script items", "Scope lines color");
            sv_cheats_cache = ui_get_value("Misc.", "GENERAL", "Miscellaneous", "Force sv_cheats");
            removals_cache = ui_get_value("Visual", "WORLD", "Entities", "Removals");
            if (scoped) {
                if (get_weapon(local_player) == "auto" || get_weapon(local_player) == "awp" || get_weapon(local_player) == "scout") {
                    ui_set_value("Misc.", "GENERAL", "Miscellaneous", "Force sv_cheats", 1);
                    convar_set_float("r_drawvgui", 0);
                    ui_set_value("Visual", "WORLD", "Entities", "Removals", set_dropdown_value(removals_cache, 2, false));
                    render_gradient_rect(screen_size[0] / 2 + offset, screen_size[1] / 2, height, 1, 1, [color[0], color[1], color[2], color[3]], [color[0], color[1], color[2], 0]);
                    render_gradient_rect(screen_size[0] / 2 - height - offset, screen_size[1] / 2, height, 1, 1, [color[0], color[1], color[2], 0], [color[0], color[1], color[2], color[3]]);
                    render_gradient_rect(screen_size[0] / 2, screen_size[1] / 2 + offset, 1, height, 0, [color[0], color[1], color[2], color[3]], [color[0], color[1], color[2], 0]);
                    render_gradient_rect(screen_size[0] / 2, screen_size[1] / 2 - height - offset, 1, height, 0, [color[0], color[1], color[2], 0], [color[0], color[1], color[2], color[3]]);
                }
            } if (!scoped) {
                convar_set_float("r_drawvgui", 1);
                ui_set_value("Misc.", "GENERAL", "Miscellaneous", "Force sv_cheats", 1);
                ui_set_value("Visual", "WORLD", "Entities", "Removals", set_dropdown_value(removals_cache, 2, true));
            }
        }
    } else {
        convar_set_float("r_drawvgui", 1);
    }
}

function unload() {
    convar_set_float("r_drawvgui", 1);
    ui_set_value("Visual", "WORLD", "Entities", "Removals", set_dropdown_value(removals_cache, 2, true));
    ui_set_value("Misc.", "GENERAL", "Miscellaneous", "Force sv_cheats", sv_cheats_cache);
}

cheat_register_callback("Unload", "unload");
cheat_register_callback("Draw", "draw");

currentTime = Globals.Curtime();
delay = 0;
delayedTime = currentTime + delay;

function changeAA() {zz
    currentTime = Globals.Curtime();
    if (currentTime >= delayedTime) {
        delay = getVal("Delay (seconds)");
        
        if (getVal("Random delay:")) {
            delay = generateRandomNumber(0, 0.3);
        }
                    
        delayedTime = currentTime + delay;
        
        fakeYawLower = getVal("Fake 1:");
        fakeYawUpper = getVal("Fake 2:");       
        fakeYaw = getRandomInt(fakeYawLower, fakeYawUpper);
        
        realLower = getVal("Real 1:");
        realUpper = getVal("Real 2:");
        realYaw = getRandomInt(realLower, realUpper);
        
        AntiAim.SetRealOffset(realYaw);
        AntiAim.SetFakeOffset(fakeYaw);
        AntiAim.SetLBYOffset(fakeYaw);
        
    }
}

function getVal(valName) {
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valName);
}

function main() {
    AntiAim.SetOverride(1);
    UI.AddSliderFloat("Delay (seconds)", 0, 2);
    
    UI.AddSliderInt("Fake 1:", -20, 20);
    UI.AddSliderInt("Fake 2:", -20, 20);
    
    UI.AddSliderInt("Real 1:", -99, 99);
    UI.AddSliderInt("Real 2:", -99, 99);
    
    UI.AddCheckbox("Random delay:");
    Cheat.RegisterCallback("Draw", "changeAA");
}

main();


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive
}

function generateRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
};

//Indicators

Render.GetScreenSize()

function onDraw() {
    Render.Polygon([[50, 0], [25, 50], [75, 50]], [255, 0, 0, 255]);
}
Cheat.RegisterCallback("Draw", "onDraw");



UI.AddSliderInt("DT Tolerance", 0, 3);

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
    var reserve = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "DT Tolerance")

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


UI.AddSliderFloat( "Aspect Ratio", 0.0, 5.0 );


function aspectratio( ) {
menu_val = UI.GetValue("Aspect Ratio");
string_menu_val = menu_val.toString();

Convar.SetString ("r_aspectratio", string_menu_val );
}
Cheat.RegisterCallback( "FrameStageNotify", "aspectratio" );

delay = 0;
curTime = Globals.Curtime();
delayedTime = curTime + delay;
function aaLoop() {
  curTime = Globals.Curtime();
  delay = 0.2;
  if (curTime >= delayedTime) {
    delayedTime = curTime + delay;
    AntiAim.SetOverride(1);
    AntiAim.SetFakeOffset(Math.random(-5, 5));
    AntiAim.SetRealOffset(Math.random(-28, 48));
  }
}
Cheat.RegisterCallback("CreateMove", "aaLoop");

const watermark = function() {
    const user = Cheat.GetUsername();
    const server = World.GetServerString();
    const ping = Math.round(Local.Latency() * 1000 - 16);
    const now = new Date();
    const hours = now.getHours(), mins = now.getMinutes(), secs = now.getSeconds();
    const time = (hours < 10 ? "0" + hours : hours) + ":" + (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs);
    if(ping < 1) ping = 0;
    if(!server != "") server = "offline";

    const font = Render.AddFont("MuseoSansCyrl-900", 10, 900);
    const font1 = Render.AddFont("MuseoSansCyrl-900", 11, 900);

    const text = "|  "+ user +"  |  "+ ping +" ms  |  "+ server +"  |  "+ time +"";

    const w = Render.TextSizeCustom(text, font)[0] + 40;
    const x = Global.GetScreenSize()[0];
    x = x - w - 10;

    Render.FilledRect(x, 9 , w - 8, 19, [19, 11, 20, 200]);
    Render.FilledRect(x - 47, 10, w, 23, [19, 11, 20, 200]);
    Render.StringCustom(x + 33, 14, 0, text, [355, 255, 255, 255], font);

    Render.StringCustom(x + -40, 12, 0, "Starsense", [78, 179, 246, 255], font1);
    Render.StringCustom(x + -40, 11, 0, "Starsense", [355, 355, 355, 355], font1);
}

Cheat.RegisterCallback("Draw", "watermark");

UI.AddSliderFloat("LBY offset", -180, 180)
UI.AddSliderFloat("Real offset", -180, 180)
UI.AddSliderFloat("Fake offset", -180, 180)

UI.AddSliderFloat("Inverted LBY offset", -180, 180)
UI.AddSliderFloat("Inverted Real offset", -180, 180)
UI.AddSliderFloat("Inverted Fake offset", -180, 180)


function main(){
    var LBYOffset = UI.GetValue ("Misc", "JAVASCRIPT", "Script Items", "LBY offset")
    var RealOffset = UI.GetValue ("Misc", "JAVASCRIPT", "Script Items", "Real offset")
    var FakeOffset = UI.GetValue ("Misc", "JAVASCRIPT", "Script Items", "Fake offset")

    var LBYInvert = UI.GetValue ("Misc", "JAVASCRIPT", "Script Items", "Inverted LBY offset")
    var RealInvert = UI.GetValue ("Misc", "JAVASCRIPT", "Script Items", "Inverted Real offset")
    var FakeInvert = UI.GetValue ("Misc", "JAVASCRIPT", "Script Items", "Inverted Fake offset")

    AntiAim.SetOverride(1);
    AntiAim.SetFakeOffset(FakeOffset);
    AntiAim.SetRealOffset(RealOffset);
    AntiAim.SetLBYOffset(LBYOffset);

    var inverted = UI.IsHotkeyActive("Anti-Aim", "Fake angles","Inverter")

    if(inverted){
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(FakeInvert);
        AntiAim.SetRealOffset(RealInvert);
        AntiAim.SetLBYOffset(LBYInvert);
    } else {
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(FakeOffset);
        AntiAim.SetRealOffset(RealOffset);
        AntiAim.SetLBYOffset(LBYOffset);
    }


}

Cheat.RegisterCallback("CreateMove", "main");