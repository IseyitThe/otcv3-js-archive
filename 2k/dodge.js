/*
*
FOV while scopped!,
Smart scout!,
And many other things..!

By: rex#4116 or https://www.onetap.com/members/wokenup.8797/
*
*/

//region api
const global_print = Global.Print, global_print_chat = Global.PrintChat, global_print_color = Global.PrintColor, global_register_callback = Global.RegisterCallback, global_execute_command = Global.ExecuteCommand, global_frame_stage = Global.FrameStage, global_tickcount = Global.Tickcount, global_tickrate = Global.Tickrate, global_tick_interval = Global.TickInterval, global_curtime = Global.Curtime, global_realtime = Global.Realtime, global_frametime = Global.Frametime, global_latency = Global.Latency, global_get_view_angles = Global.GetViewAngles, global_set_view_angles = Global.SetViewAngles, global_get_map_name = Global.GetMapName, global_is_key_pressed = Global.IsKeyPressed, global_get_screen_size = Global.GetScreenSize, global_get_cursor_position = Global.GetCursorPosition, global_play_sound = Global.PlaySound, global_play_microphone = Global.PlayMicrophone, global_stop_microphone = Global.StopMicrophone, global_get_username = Global.GetUsername, global_set_clan_tag = Global.SetClanTag, globals_tickcount = Globals.Tickcount, globals_tickrate = Globals.Tickrate, globals_tick_interval = Globals.TickInterval, globals_curtime = Globals.Curtime, globals_realtime = Globals.Realtime, globals_frametime = Globals.Frametime, sound_play = Sound.Play, sound_play_microphone = Sound.PlayMicrophone, sound_stop_microphone = Sound.StopMicrophone, cheat_get_username = Cheat.GetUsername, cheat_register_callback = cheat_register_callback = new Proxy(Cheat.RegisterCallback, { apply: function(_, _, args) { switch(args[0]) { case 'paint': Cheat.RegisterCallback('Draw', args[1]); break; case 'create_move': Cheat.RegisterCallback('CreateMove', args[1]); break; case 'fsn': Cheat.RegisterCallback('FrameStageNotify', args[1]); break; default: Cheat.RegisterCallback(args[0], args[1]); break; } } }), cheat_execute_command = Cheat.ExecuteCommand, cheat_frame_stage = Cheat.FrameStage, cheat_print = Cheat.Print, cheat_print_chat = Cheat.PrintChat, cheat_print_color = Cheat.PrintColor, local_latency = Local.Latency, local_get_view_angles = Local.GetViewAngles, local_set_view_angles = Local.SetViewAngles, local_set_clan_tag = Local.SetClanTag, local_get_real_yaw = Local.GetRealYaw, local_get_fake_yaw = Local.GetFakeYaw, local_get_spread = Local.GetSpread, local_get_inaccuracy = Local.GetInaccuracy, world_get_map_name = World.GetMapName, world_get_server_string = World.GetServerString, input_get_cursor_position = Input.GetCursorPosition, input_is_key_pressed = Input.IsKeyPressed, render_string = Render.String, render_text_size = Render.TextSize, render_line = Render.Line, render_rect = Render.Rect, render_filled_rect = Render.FilledRect, render_gradient_rect = Render.GradientRect, render_circle = Render.Circle, render_filled_circle = Render.FilledCircle, render_polygon = Render.Polygon, render_world_to_screen = Render.WorldToScreen, render_add_font = Render.AddFont, render_find_font = Render.FindFont, render_string_custom = Render.StringCustom, render_textured_rect = Render.TexturedRect, render_add_texture = Render.AddTexture, render_text_size_custom = Render.TextSizeCustom, render_get_screen_size = Render.GetScreenSize, ui_get_value = UI.GetValue, ui_set_value = UI.SetValue, ui_add_checkbox = UI.AddCheckbox, ui_add_slider_int = UI.AddSliderInt, ui_add_slider_float = UI.AddSliderFloat, ui_add_hotkey = UI.AddHotkey, ui_add_label = UI.AddLabel, ui_add_dropdown = UI.AddDropdown, ui_add_multi_dropdown = UI.AddMultiDropdown, ui_add_color_picker = UI.AddColorPicker, ui_add_textbox = UI.AddTextbox, ui_set_enabled = UI.SetEnabled, ui_get_string = UI.GetString, ui_get_color = UI.GetColor, ui_set_color = UI.SetColor, ui_is_hotkey_active = UI.IsHotkeyActive, ui_toggle_hotkey = UI.ToggleHotkey, ui_is_menu_open = UI.IsMenuOpen, convar_get_int = Convar.GetInt, convar_set_int = Convar.SetInt, convar_get_float = Convar.GetFloat, convar_set_float = Convar.SetFloat, convar_get_string = Convar.GetString, convar_set_string = Convar.SetString, event_get_int = Event.GetInt, event_get_float = Event.GetFloat, event_get_string = Event.GetString, entity_get_entities = Entity.GetEntities, entity_get_entities_by_class_i_d = Entity.GetEntitiesByClassID, entity_get_players = Entity.GetPlayers, entity_get_enemies = Entity.GetEnemies, entity_get_teammates = Entity.GetTeammates, entity_get_local_player = Entity.GetLocalPlayer, entity_get_game_rules_proxy = Entity.GetGameRulesProxy, entity_get_entity_from_user_i_d = Entity.GetEntityFromUserID, entity_is_teammate = Entity.IsTeammate, entity_is_enemy = Entity.IsEnemy, entity_is_bot = Entity.IsBot, entity_is_local_player = Entity.IsLocalPlayer, entity_is_valid = Entity.IsValid, entity_is_alive = Entity.IsAlive, entity_is_dormant = Entity.IsDormant, entity_get_class_i_d = Entity.GetClassID, entity_get_class_name = Entity.GetClassName, entity_get_name = Entity.GetName, entity_get_weapon = Entity.GetWeapon, entity_get_weapons = Entity.GetWeapons, entity_get_render_origin = Entity.GetRenderOrigin, entity_get_prop = Entity.GetProp, entity_set_prop = Entity.SetProp, entity_get_hitbox_position = Entity.GetHitboxPosition, entity_get_eye_position = Entity.GetEyePosition, trace_line = Trace.Line, trace_bullet = Trace.Bullet, usercmd_set_movement = UserCMD.SetMovement, usercmd_get_movement = UserCMD.GetMovement, usercmd_set_angles = UserCMD.SetAngles, usercmd_force_jump = UserCMD.ForceJump, usercmd_force_crouch = UserCMD.ForceCrouch, antiaim_get_override = AntiAim.GetOverride, antiaim_set_override = AntiAim.SetOverride, antiaim_set_real_offset = AntiAim.SetRealOffset, antiaim_set_fake_offset = AntiAim.SetFakeOffset, antiaim_set_l_b_y_offset = AntiAim.SetLBYOffset, exploit_get_charge = Exploit.GetCharge, exploit_recharge = Exploit.Recharge, exploit_disable_recharge = Exploit.DisableRecharge, exploit_enable_recharge = Exploit.EnableRecharge, ragebot_override_minimum_damage = Ragebot.OverrideMinimumDamage, ragebot_override_hitchance = Ragebot.OverrideHitchance, ragebot_override_accuracy_boost = Ragebot.OverrideAccuracyBoost, ragebot_override_multipoint_scale = Ragebot.OverrideMultipointScale, ragebot_force_safety = Ragebot.ForceSafety;
//endregion (credits to april)

a = b = c = 0
flag = []
jitter1 = true
jitter2 = false
ui_add_label("                [dodge.js]        ")
ui_add_label(" ")
UI.AddCheckbox("FOV while scoped")
UI.AddCheckbox("[NOT WORKING] Smart scout")
UI.AddCheckbox("Information")
UI.AddColorPicker("       Color 1")
UI.AddColorPicker("       Color 2")
UI.AddCheckbox("Keybinds")
UI.AddColorPicker("       Color")
UI.AddCheckbox("[d] Enable desync anti-aim")
UI.AddDropdown("[d] Lower body yaw settings", ["crippled","experimental","lowDelta","bruteDodge", "jitter"])
UI.AddCheckbox("[d] Indicator")
UI.AddDropdown("[d] Indicator type", ["Arrows","Triangle"])
fov = ui_get_value("Visual", "WORLD", "View", "Field of view")

//UI.AddHotkey("Hitbox Override Key");
//UI.AddMultiDropdown("       Hitbox Override", [ "Head", "Upper Chest", "Chest", "Lower Chest", "Stomach", "Pelvis", "Legs", "Feet" ] );
//UI.AddMultiDropdown("       Base Hitboxes", [ "Head", "Upper Chest", "Chest", "Lower Chest", "Stomach", "Pelvis", "Legs", "Feet" ] );
ui_add_label(" ")

function on_paint()
{   
    if (ui_get_value("Misc", "JAVASCRIPT", "Script items", "FOV while scoped")){
    var scoped = entity_get_prop(entity_get_local_player(), "CCSPlayer", "m_bIsScoped");
    
    if (ui_is_menu_open() || !entity_is_alive(entity_get_local_player()) || !entity_get_local_player()) return;
    ui_set_value("Visual", "WORLD", "View", "Field of view", scoped ? fov - 15 : fov);
    ui_set_value("Visual", "WORLD", "View", "FOV while scoped", true);  
    }
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSL representation
 */
function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  l       The lightness
 * @return  Array           The RGB representation
 */
function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [r * 255, g * 255, b * 255];
}

function alp(c, a) {
    return [c[0], c[1], c[2], a]
  }



/**
 * @brief Normalizes an yaw angle.
 * @param angle {number}
 * @returns {number}
 */
function normalize_yaw(angle)
{
    var adjusted_yaw = angle;

    if (adjusted_yaw < -180)
        adjusted_yaw += 360;

    if (adjusted_yaw > 180)
        adjusted_yaw -= 360;

    return adjusted_yaw;
}


function main()
{    if (ui_get_value("Misc", "JAVASCRIPT", "Script items", "Information")){
    chk = UI.GetValue("Anti-Aim","Fake-Lag","Limit")
    color1 = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "       Color 1")
    color2 = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "       Color 2")
   
    font = Render.AddFont("Verdana", 7, 800)
    fontT = Render.AddFont("Tahoma", 5, 800)
    font0 = Render.AddFont("Verdana", 7, 500)

    color1hsv = rgbToHsl(color1[0],color1[1],color1[2])
    color1rbg = hslToRgb(color1hsv[0],color1hsv[1] - 0.2,color1hsv[2] - 0.35 )
    color1dark0 = rgbToHsl(color1[0],color1[1],color1[2])
    color1dark1 = hslToRgb(color1dark0[0],color1dark0[1] - 0.4, 0.07)

    color2hsv = rgbToHsl(color2[0],color2[1],color2[2])
    color2rbg = hslToRgb(color2hsv[0] ,color2hsv[1] - 0.2,color2hsv[2] -0.35 )
    const yaw = local_get_real_yaw( ), fake = local_get_fake_yaw( );
    var dsy = Math.round(normalize_yaw(yaw - fake) / 2) 

    if (UI.IsHotkeyActive("Anti-Aim","Extra","Fake duck")) a = 10
    if (UI.IsHotkeyActive("Rage","GENERAL","Exploits", "Doubletap")) b = 10
    if (UI.IsHotkeyActive("Rage","GENERAL","Exploits", "Hide shots"))  c = 10

    exploits = a+b+c-10
    if (exploits <1) exploits = 0
    ss = Render.GetScreenSize()
    ts1 = Render.TextSizeCustom("[information]", font)
    ts2 = Render.TextSizeCustom("chk:", font0)
    Render.GradientRect( ss[0] - ss[0] + 20, ss[1]/2 , 140, 60 + exploits , 0, alp(color1, 255) , alp(color2, 255 ));
    Render.GradientRect( ss[0] - ss[0] + 21, ss[1]/2 +1, 138, 58 + exploits, 0, alp(color1rbg, 255) , alp(color2rbg,255) );
    Render.StringCustom( ss[0] - ss[0]+23 + ts1[0]/2 , ss[1]/2 +3, 0, "[information]", [ 0, 0, 0, 155], font);
    Render.StringCustom( ss[0] - ss[0]+22 + ts1[0]/2 , ss[1]/2 +2, 0, "[information]", [ 255, 255, 255, 255], font);
    Render.GradientRect( ss[0] - ss[0] + 26, ss[1]/2 +16, 128, 2, 1, alp(color1, 255) , alp(color2, 255));
    Render.StringCustom( ss[0] -ss[0] +27, ss[1]/2 +21, 0, "chk:", [ 0, 0, 0 , 255], font0 );
    Render.StringCustom( ss[0] -ss[0] +26, ss[1]/2 +20, 0, "chk:", [ 255, 255, 255 ,255], font0 );

    Render.StringCustom( ss[0] -ss[0] +136, ss[1]/2 +25, 0,chk.toString() , [ 0, 0, 0 ,255], fontT );
    Render.StringCustom( ss[0] -ss[0] +134, ss[1]/2 +25, 0,chk.toString() , [ 0, 0, 0 ,255], fontT);
    Render.StringCustom( ss[0] -ss[0] +134, ss[1]/2 +23, 0,chk.toString() , [ 0, 0, 0 ,255], fontT );
    Render.StringCustom( ss[0] -ss[0] +136, ss[1]/2 +23, 0,chk.toString() , [ 0, 0, 0 ,255], fontT );
    Render.StringCustom( ss[0] -ss[0] +135, ss[1]/2 +24, 0,chk.toString(), [ 255, 255, 255 ,255], fontT);

    Render.StringCustom( ss[0] -ss[0] +134, ss[1]/2 +35, 0, dsy.toString(), [ 0 , 0 ,0 , 155], fontT );
    Render.StringCustom( ss[0] -ss[0] +136, ss[1]/2 +35, 0, dsy.toString(), [ 0 , 0 ,0 , 155], fontT );
    Render.StringCustom( ss[0] -ss[0] +134, ss[1]/2 +37, 0, dsy.toString(), [ 0 , 0 ,0 , 155], fontT );
    Render.StringCustom( ss[0] -ss[0] +136, ss[1]/2 +37, 0, dsy.toString(), [ 0 , 0 ,0 , 155], fontT );
    Render.StringCustom( ss[0] -ss[0] +135, ss[1]/2 +36, 0, dsy.toString(), [ 255 ,255 ,255 , 255], fontT );

    Render.StringCustom( ss[0] -ss[0] +27, ss[1]/2 +33, 0, "dsy:", [ 0 ,0 ,0 , 255], font0 );
    Render.StringCustom( ss[0] -ss[0] +26, ss[1]/2 +32, 0, "dsy:", [ 255, 255, 255, 255], font0 );
    Render.FilledRect(ss[0] -ss[0] +28 + ts2[0], ss[1]/2 +19 + ts2[1]/2, 82, 6, alp(color1dark1, 155))
    Render.FilledRect(ss[0] -ss[0] +28 + ts2[0], ss[1]/2 +30 + ts2[1]/2, 82, 6, alp(color1dark1, 155))
    Render.StringCustom( ss[0] -ss[0] +107, ss[1]/2 +46, 0, "rex#4116", [ 0, 0, 0, 155], font );
    Render.StringCustom( ss[0] -ss[0] +106, ss[1]/2 +45, 0, "rex#4116", [ 255, 255, 255, 255], font );
    Render.GradientRect(ss[0] -ss[0] +29 + ts2[0], ss[1]/2 +20 + ts2[1]/2, chk.toString() * 5 - 2, 4, 1, alp(color1, 255) , alp(color2,255) )
    Render.GradientRect( ss[0] -ss[0] +29 + ts2[0], ss[1]/2 +37, Math.round( 42- dsy/1.5) - 2, 4, 1, alp(color1, 255), alp(color2, 255) );
    if (UI.IsHotkeyActive("Anti-Aim","Extra","Fake duck"))
    {
        const alpha = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / 1)) % (Math.PI * 2))) * 255;
        Render.StringCustom( ss[0] -ss[0] +28, ss[1]/2 +45, 0, "fd",alp(color1, alpha) , font );
        a = 10
    }
    if (UI.IsHotkeyActive("Rage","GENERAL","Exploits", "Doubletap"))
    {
        const alpha = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / 1)) % (Math.PI * 2))) * 255;
        Render.StringCustom( ss[0] -ss[0] +28, ss[1]/2 +45+a, 0, "dt",alp(color1, alpha) , font );
        b = 10
    }
    if (UI.IsHotkeyActive("Rage","GENERAL","Exploits", "Hide shots"))
    {
        const alpha = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / 1)) % (Math.PI * 2))) * 255;
        Render.StringCustom( ss[0] -ss[0] +28, ss[1]/2 +45+a+b, 0, "hs",alp(color1, alpha) , font );
        c = 10
        
    }
    a = b = c = 0
    }
}

function onscreen()
{
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items","Keybinds") == true) 
    {
    color3 = UI.GetColor("Misc", "JAVASCRIPT", "Script items","       Color")
    ss = Render.GetScreenSize()
    font2 = Render.AddFont( "Verdana", 7, 2000 )

    Render.StringCustom( ss[0]/2 +1, ss[1]/2+41, 1, "GLOBAL", [10,10,10,255], font2 );
    Render.StringCustom( ss[0]/2, ss[1]/2+40, 1, "GLOBAL", alp(color3,255), font2 );

    if (UI.IsHotkeyActive("Rage","GENERAL","Exploits", "Hide shots"))
    {
    Render.StringCustom( ss[0]/2 +1, ss[1]/2+56, 1, "ON-SHOT", [10,10,10,255], font2 );
    Render.StringCustom( ss[0]/2, ss[1]/2+55, 1, "ON-SHOT", alp(color3,255), font2 );
    }
    else
    {
    Render.StringCustom( ss[0]/2 +1, ss[1]/2+56, 1, "ON-SHOT", [10,10,10,255], font2 );
    Render.StringCustom( ss[0]/2, ss[1]/2+55, 1, "ON-SHOT", [50,50,50,255], font2 );
    }

    if (UI.IsHotkeyActive("Rage","GENERAL","Exploits", "Doubletap"))
    {
    Render.StringCustom( ss[0]/2 +1, ss[1]/2+71, 1, "DOUBLE TAP", [10,10,10,255], font2 );
    Render.StringCustom( ss[0]/2, ss[1]/2+70, 1, "DOUBLE TAP", alp(color3,255), font2 );
    }
    else 
    {
    Render.StringCustom( ss[0]/2 +1, ss[1]/2+71, 1, "DOUBLE TAP", [10,10,10,255], font2 );
    Render.StringCustom( ss[0]/2, ss[1]/2+70, 1, "DOUBLE TAP", [50,50,50,255], font2 );
    }

    if (UI.IsHotkeyActive("Rage","GENERAL","General", "Force safe point"))
    {
    Render.StringCustom( ss[0]/2 +1, ss[1]/2+86, 1, "SAFE POINT", [10,10,10,255], font2 );
    Render.StringCustom( ss[0]/2, ss[1]/2+85, 1, "SAFE POINT", alp(color3,255), font2 );
    }
    else 
    {
    Render.StringCustom( ss[0]/2 +1, ss[1]/2+86, 1, "SAFE POINT", [10,10,10,255], font2 );
    Render.StringCustom( ss[0]/2, ss[1]/2+85, 1, "SAFE POINT", [50,50,50,255], font2 );
    }
}
}

function smartscout()
{
    classid = Entity.GetClassName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    ss = Render.GetScreenSize()
    if(classid == "CWeaponSSG08")
    {
        target = Ragebot.GwetTarget()
        
        target_health = Entity.GetProp(target, "CBasePlayer", "m_iHealth")
        Cheat.Print(target_health)
        if (target_health < 88)
        {
            UI.SetValue ("Rage","GENERAL", "General", "Force safe point", 1)
            Render.StringCustom( ss[0] + 20, ss[1]/2+85, 1, "FORCE", alp(color1,255), font2 );
    

        }
        else if (target_health < 92)
        {
            UI.SetValue ("Rage","SCOUT", "Accuracy", "Prefer body aim", true)
            Render.StringCustom( ss[0] + 20, ss[1]/2+85, 1, "PREFER", alp(color1,255), font2 );
        }


    }
}



var timerticks;
var timed;
var change = false;
function aa1()
{
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items","[d] Enable desync anti-aim") == true)
    {
    AntiAim.SetOverride(1)
    fakelagamount = UI.GetValue("Anti-Aim","Fake-Lag","Limit")

    //Cheat.Print(UI.GetValue("Misc", "JAVASCRIPT", "Script items","Desync style").toString())
    switch (UI.GetValue("Misc", "JAVASCRIPT", "Script items","[d] Lower body yaw settings"))
    {
        case 0:
            f = 0
            r = 39
            lby = -140
            yaw = 10

            fInv = 0
            rInv = -60
            lbyInv = 30
            break;
        case 1:
            f = 0
            r= 61
            lby = -60
            yaw = 0

            fInv = 0
            rInv = -61 
            lbyInv = 146
            break;
        case 2:
            f = 0
            r= 12
            lby = 90
            yaw = 0

            fInv = 0
            rInv = -12
            lbyInv = -20
            break;
        case 3:
            f = 0
            r= 30
            lby = -0
            yaw = 0

            fInv = 0
            rInv = -30
            lbyInv = 60
            break;
        case 4: 
            f = 0
            r= 60
            lby = 25
            yaw = -20

            fInv = 0
            rInv = 60
            lbyInv = -10
    }

    
    if(!timed) 
    {
    timerticks = Globals.Tickcount()
    timed = true
    }

    if (UI.IsHotkeyActive("Rage","GENERAL","Exploits", "Doubletap")) fakelagamount = 3

    if(!change)
    {
    
    
        
    if (Globals.Tickcount() - timerticks == fakelagamount)
    {
        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter"))
        {
        AntiAim.SetFakeOffset(f);
        AntiAim.SetRealOffset(r);
        AntiAim.SetLBYOffset(lby);
        UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yaw)
       change = true;
        }
        else
        {

        AntiAim.SetFakeOffset(fInv);
        AntiAim.SetRealOffset(rInv);
        AntiAim.SetLBYOffset(lbyInv);
        UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yaw)
       change = true;
        }
       
    timed = false 
    }
    
    }
    else if(change)
    {
    if (Globals.Tickcount() - timerticks == fakelagamount)
    {
        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter"))
        {

        AntiAim.SetFakeOffset(-fInv);
        AntiAim.SetRealOffset(-rInv);
        AntiAim.SetLBYOffset(-lbyInv);
        UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -yaw)
        change = false;
        }
        else 
        {
        AntiAim.SetFakeOffset(-f);
        AntiAim.SetRealOffset(-r);
        AntiAim.SetLBYOffset(-lby);
        UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -yaw)
        change = false;
        }

    timed = false;
    }
    }
    if(Globals.Tickcount() - timerticks > 20)
    {
        timed = false;
    }
    }
    else 
    {
        AntiAim.SetOverride(0)
    }
}
    


function drawRight() {
    
    colorpicker = UI.GetColor("Misc", "JAVASCRIPT", "       Color")
    inverter = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")
    legitInverter = UI.IsHotkeyActive("Anti-Aim", "Direction key")
    var screen_size = Render.GetScreenSize();
    legit = UI.GetValue( "Legit", "GENERAL", "General", "Enabled" );
    const alpha = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / 1)) % (Math.PI * 2))) * 255;
    const lolw = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / 1)) % (Math.PI * 2))) * 100;
    const yaw = local_get_real_yaw( ), fake = local_get_fake_yaw( );
    var dsy = Math.round(normalize_yaw(yaw - fake) / 2) 
    font = Render.AddFont( "Tahoma", 10, 1000 )
    
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items","[d] Indicator") == true && UI.GetValue("Misc", "JAVASCRIPT", "Script items","[d] Indicator type") == 1) 
        {
            
            if (inverter == 1)
            {
            
                LPx = [(screen_size[0] / 2) - 25, (screen_size[1] / 2) + 7];
                LPy = [(screen_size[0] / 2) - 25, (screen_size[1] / 2) - 7];
                LPz = [(screen_size[0] / 2) - 37, (screen_size[1] / 2)];
                Render.Polygon([[LPx[0] + 1, LPx[1] + 1], [LPz[0] + 1, LPz[1] + 1], [LPy[0] + 1, LPy[1] + 1]], [0, 0, 0, lolw])
                Render.Polygon([LPx, LPz, LPy], alp(colorpicker, alpha))

            
                RPx = [(screen_size[0] / 2) + 25, (screen_size[1] / 2) + 7];
                RPy = [(screen_size[0] / 2) + 25, (screen_size[1] / 2) - 7];
                RPz = [(screen_size[0] / 2) + 37, (screen_size[1] / 2)];
                //Render.Polygon([[RPy[0] + 1, RPy[1] + 1], [RPz[0] + 1, RPz[1] + 1], [RPx[0] + 1, RPx[1] + 1]], [0, 0, 0, 100])
                Render.Polygon([RPy, RPz, RPx], alp(colorpicker, 50))
                }
                if (inverter == 0)  
                {
                RPx = [(screen_size[0] / 2) + 25, (screen_size[1] / 2) + 7];
                RPy = [(screen_size[0] / 2) + 25, (screen_size[1] / 2) - 7];
                RPz = [(screen_size[0] / 2) + 37, (screen_size[1] / 2)];
                Render.Polygon([[RPy[0] + 1, RPy[1] + 1], [RPz[0] + 1, RPz[1] + 1], [RPx[0] + 1, RPx[1] + 1]], [0, 0, 0, lolw])
                Render.Polygon([RPy, RPz, RPx], alp(colorpicker, alpha))

                LPx = [(screen_size[0] / 2) - 25, (screen_size[1] / 2) + 7];
                LPy = [(screen_size[0] / 2) - 25, (screen_size[1] / 2) - 7];
                LPz = [(screen_size[0] / 2) - 37, (screen_size[1] / 2)];
                //Render.Polygon([[LPx[0] + 1, LPx[1] + 1], [LPz[0] + 1, LPz[1] + 1], [LPy[0] + 1, LPy[1] + 1]], [0, 0, 0, 100])
                Render.Polygon([LPx, LPz, LPy], alp(colorpicker, 50))
            }
            
        }
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items","[d] Indicator") == true && UI.GetValue("Misc", "JAVASCRIPT", "Script items","[d] Indicator type") == 0) 
        {
            if (inverter == 1)
            {
            dsyValue = Math.abs(dsy) > 35 ? "<<" : "<"
            Render.StringCustom(screen_size[0]/2 - 49, screen_size[1]/2 - 6, 0,   dsyValue ,[0,0,0,100] , font)
            Render.StringCustom(screen_size[0]/2 - 50, screen_size[1]/2 - 7, 0,   dsyValue ,alp(colorpicker, 255) , font)
            }
            if (inverter == 0)  
            {
            dsyValue = Math.abs(dsy) > 35 ? ">>" : ">"
            Render.StringCustom(screen_size[0]/2 + 49, screen_size[1]/2 - 6, 1,   dsyValue ,[0,0,0,100] , font)
            Render.StringCustom(screen_size[0]/2 + 50, screen_size[1]/2 - 7, 1,   dsyValue ,alp(colorpicker, 255) , font)
            }
        }
        
        
}

var esp = {
    /*#define*/ hitmarker_alpha: 0, // The rendering alpha for our hitmarker
    /*#define*/ health: [] // The array that contains all of the player's health. Handles the health bar animation.
};

/**
 * @brief Renders a hitmarker on the center of the screen whenever you hurt another player.
 */
/*private function*/ esp.hitmarker = function()
{
    // Checks whether or not we should draw the hitmarker
    if (this.hitmarker_alpha === 0)
        return;

    // Get our drawing properties
    const x = render_get_screen_size()[0], y = render_get_screen_size()[1];
    const inc = globals_frametime() * 255;

    // Update our hitmarker's alpha
    this.hitmarker_alpha = clamp(this.hitmarker_alpha - inc, 0, 255);

    // Renders the lines in order to form the hitmarker
    render_line(x / 2 - 10, y / 2 - 10, x / 2 - 5, y / 2 - 5, [225, 225, 225, this.hitmarker_alpha]);
    render_line(x / 2 - 10, y / 2 + 10, x / 2 - 5, y / 2 + 5, [225, 225, 225, this.hitmarker_alpha]);
    render_line(x / 2 + 5, y / 2 - 5, x / 2 + 10, y / 2 - 10, [225, 225, 225, this.hitmarker_alpha]);
    render_line(x / 2 + 5, y / 2 + 5, x / 2 + 10, y / 2 + 10, [225, 225, 225, this.hitmarker_alpha]);
}

/**
 * @brief Updates the hitmarker's alpha whenever you hurt another player.
 */
/*private function*/ esp.handle_damage = function()
{
    // Get our entities
    const attacker = entity_get_entity_from_user_i_d(event_get_int("attacker"));
    const userid = entity_get_entity_from_user_i_d(event_get_int("userid"));
    const me = entity_get_local_player();

    // Check if we're the one who attacked and not the one who got hurt.
    if (attacker == me && userid !== me)
    {
        // If so, update the hitmaker's alpha
        this.hitmarker_alpha = 255;
    }
}



Cheat.RegisterCallback("Draw", "drawRight");
cheat_register_callback("CreateMove", "on_paint");
cheat_register_callback("Draw", "main");
cheat_register_callback("Draw", "onscreen")
cheat_register_callback("CreateMove", "aa1")
cheat_register_callback("CreateMove", "aa1")
cheat_register_callback('player_hurt', 'esp.handle_damage');
cheat_register_callback('paint', 'esp.hitmarker');
cheat_register_callback("Draw", "onscreen")
//cheat_register_callback("Draw", "smartscout")






