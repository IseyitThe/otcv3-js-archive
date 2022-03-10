var binlib = {};

function dictLength(e) {
    var t = 0;
    for (_ in e) t++;
    return t
}

function createDropdown(e, t, a) {
    UI[a ? "AddMultiDropdown" : "AddDropdown"](e, t);
    var i = {};
    i.multi = a, i.values = {}, binlib[e] = i, a && t.reverse();
    var r = 0;
    for (value in t) {
        var n = a ? 1 << t.length - (r + 1) : r;
        binlib[e].values[n] = t[value], r++
    }
}

function fetchDropdown(e) {
    var t = e ? [] : {},
        a = UI.GetValue("Misc", e);
    if (!e && function () {
            for (dropdown in binlib) t[dropdown] = fetchDropdown(dropdown)
        }(), e) {
        !binlib[e].multi && 0 == a && t.push(binlib[e].values[0]);
        for (var i = dictLength(binlib[e].values) - 1; i >= 0; i--)
            if (binlib[e].multi || 0 != i) {
                var r = binlib[e].multi ? 1 << i : i;
                a - r >= 0 && (a -= r, t.push(binlib[e].values[r]))
            }
    }
    return t
}

function GetVelocity(e) {
    var t = Entity.GetProp(e, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(t[0] * t[0] + t[1] * t[1])
}

function can_shift_shot(e) {
    var t = Entity.GetLocalPlayer(),
        a = Entity.GetWeapon(t);
    if (null == t || null == a) return !1;
    var i = Entity.GetProp(t, "CCSPlayer", "m_nTickBase"),
        r = Globals.TickInterval() * (i - e);
    return !(r < Entity.GetProp(t, "CCSPlayer", "m_flNextAttack")) && !(r < Entity.GetProp(a, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
}

function _TBC_CREATE_MOVE() {
    if (UI.GetValue("Misc", "JAVASCRIPT", "Faster Double-tap")) {
        var e = Exploit.GetCharge();
        Exploit[(1 != e ? "Enable" : "Disable") + "Recharge"](), Exploit.OverrideTolerance(1), Exploit.OverrideShift(14), can_shift_shot(12) && 1 != e && (Exploit.DisableRecharge(), Exploit.Recharge())
    }
}

function Awall_Check() {
    UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Disable Autowall") ? (UI.SetValue("Rage", "GENERAL", "Targeting", "Disable autowall", !0), UI.SetValue("Rage", "PISTOL", "Pistol config", "Disable autowall", !0), UI.SetValue("Rage", "SCOUT", "Scout config", "Disable autowall", !0), UI.SetValue("Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall", !0), UI.SetValue("Rage", "AWP", "AWP config", "Disable autowall", !0), UI.SetValue("Rage", "AUTOSNIPER", "Auto config", "Disable autowall", !0)) : (UI.SetValue("Rage", "GENERAL", "Targeting", "Disable autowall", !1), UI.SetValue("Rage", "PISTOL", "Pistol config", "Disable autowall", !1), UI.SetValue("Rage", "SCOUT", "Scout config", "Disable autowall", !1), UI.SetValue("Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall", !1), UI.SetValue("Rage", "AWP", "AWP config", "Disable autowall", !1), UI.SetValue("Rage", "AUTOSNIPER", "Auto config", "Disable autowall", !1))
}

function SideIndicators() {
    if (LoCla = Entity.GetLocalPlayer(), alive = Entity.IsAlive(LoCla), isDoubletap = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap"), isHs = UI.IsHotkeyActive("Rage", "Exploits", "Hide shots"), isFakelag = UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled"), x_1 = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "X indicator"), y_1 = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Y indicator"), UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Side Indicators") && 1 == alive) {
        const e = Render.AddFont("Verdana", 14, 800);
        0 == UI.GetValue("Rage", "GENERAL", "Targeting", "Disable autowall") ? Render.StringCustom(x_1, y_1, 0, "AWall", [125, 255, 30, 255], e) : Render.StringCustom(x_1, y_1, 0, "AWall", [255, 0, 0, 255], e), UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Wait for On-shot key") ? Render.StringCustom(x_1 + 70, y_1, 0, "Wait Onshot", [125, 255, 30, 255], e) : Render.StringCustom(x_1 + 70, y_1, 0, "Wait Onshot", [255, 0, 0, 255], e), UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Freestand Key") && Render.StringCustom(x_1 + 40, y_1 + 20, 0, "Freestand", [125, 255, 30, 255], e), !UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Freestand Key") && Render.StringCustom(x_1 + 40, y_1 + 20, 0, "Freestand", [255, 0, 0, 255], e), isFakelag && Render.StringCustom(x_1, y_1 + 20, 0, "lag", [125, 255, 30, 255], e), isDoubletap && Render.StringCustom(x_1, y_1 + 20, 0, "lag", [255, 0, 0, 255], e), isHs && Render.StringCustom(x_1, y_1 + 20, 0, "lag", [255, 0, 0, 255], e)
    }
}
UI.AddSliderInt("           shoppy.gg/@tician", 0, 0), createDropdown("Options", ["Misc", "Rage", "Anti-Aim", "Movement", "Weapons"], !1), createDropdown("Weapon Group", ["Auto", "Awp", "Scout", "Heavy Pistol", "Pistol"], !1), createDropdown("Force Safety [scar]", ["Head", "Baim", "Limbs"], !0), createDropdown("Force Safety [awp]", ["Head", "Baim", "Limbs"], !0), createDropdown("Force Safety [scout]", ["Head", "Baim", "Limbs"], !0), createDropdown("Force Safety [heavy pistol]", ["Head", "Baim", "Limbs"], !0), createDropdown("Force Safety [pistol]", ["Head", "Baim", "Limbs"], !0), UI.AddSliderFloat("Aspect Ratio", 0, 5), UI.AddCheckbox("Indicators"), UI.AddCheckbox("Side Indicators"), UI.AddHotkey("Disable Autowall"), UI.AddSliderInt("X indicator", 0, Global.GetScreenSize()[0]), UI.AddSliderInt("Y indicator", 0, Global.GetScreenSize()[1]), UI.AddHotkey("Wait for On-shot key"), UI.AddCheckbox("Override DMG"), UI.AddHotkey("Override DMG Key"), UI.AddSliderInt("DMG", 0, 130), UI.AddCheckbox("Faster Double-tap"), UI.AddCheckbox("Prefer baim while DT [pistol]"), UI.AddCheckbox("Prefer baim while DT [scar]"), UI.AddCheckbox("Override Fake-Lags"), UI.AddSliderInt("Send Limit", 0, 16), UI.AddSliderInt("Choke Limit", 0, 16), UI.AddCheckbox("Anti-Crash"), UI.AddCheckbox("Rage bot fire logs"), UI.AddCheckbox("Auto-Strafer fix"), UI.AddCheckbox("Enable Local Bullet tracers"), UI.AddColorPicker("Tracer color"), UI.AddCheckbox("Enable Autobuy"), UI.AddHotkey("Freestand Key"), UI.AddHotkey("Extended backtrack Key"), UI.AddCheckbox("History Chams on Extended"), UI.AddHotkey("Legit AA Key"), UI.AddCheckbox("Override Hitchane in Air"), UI.AddSliderInt("Revolver in air Hitchance", 1, 100), UI.AddSliderInt("SCOUT in air Hitchance", 1, 100), UI.AddHotkey("Static Yaw on Key"), UI.AddCheckbox("Ideal Yaw Enable"), UI.AddCheckbox("Break Prediction"), GetMindamageAWP = Cheat.GetUsername(), Cheat.GetUsername = function () {
    return GetMindamageAWP
};
var CheatGetUsername_0x36d73c = {
        Is_Valvbe: !1
    },
    ServerType = CheatGetUsername_0x36d73c;

function IsValveServer() {
    var e = "x86#0086"
    ServerType.Is_Valvbe = true; // cracked nigger hhhhhhhhhhh
}

function ValveServerClamper() {
    //if (1 == ServerType.Is_Valvbe) return Cheat.ExecuteCommand("+duck"), Cheat.ExecuteCommand("clear"), Cheat.ExecuteCommand("-duck"), Cheat.ExecuteCommand("clear"), Cheat.ExecuteCommand("rcon_password 1"), void Cheat.ExecuteCommand("clear")
}
var screen_size = Global.GetScreenSize(),
    old_index = -1,
    CheatGetUsername_0x385caf = {
        1: 5,
        2: 6,
        3: 8,
        4: 11,
        7: 0,
        8: 1,
        9: 2,
        10: 7,
        11: 9,
        13: 10,
        14: 13,
        16: 14,
        17: 16,
        19: 24,
        23: 19,
        24: 31,
        25: 33,
        26: 3,
        27: 17,
        28: 21,
        29: 26,
        30: 30,
        32: 12,
        33: 18,
        34: 20,
        35: 22,
        36: 23,
        38: 27,
        39: 28,
        40: 29,
        60: 15,
        61: 32,
        63: 4,
        64: 25,
        500: 34,
        503: 48,
        505: 35,
        506: 36,
        507: 37,
        508: 38,
        509: 45,
        512: 40,
        514: 44,
        515: 39,
        516: 42,
        519: 47,
        520: 41,
        522: 43,
        523: 46,
        517: 49,
        518: 50,
        521: 51,
        525: 52
    };
const weapons = CheatGetUsername_0x385caf;

function skins() {
    const e = Entity.GetLocalPlayer(),
        t = 65535 & Entity.GetProp(Entity.GetWeapon(e), "CBaseAttributableItem", "m_iItemDefinitionIndex");
    if (t !== old_index && (old_index = t, t in weapons)) {
        const e = weapons[t];
        UI.SetValue("Misc", "SKINS", "Skins", "Weapon", e)
    }
}
var CheatGetUsername_0x4cd590 = {
        mode: !1
    },
    aa = CheatGetUsername_0x4cd590;

function dogshit(e) {
    UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", e)
}

function AACm() {
    !UI.IsHotkeyActive("Script items", "Legit AA Key") && (UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Restrictions", !0), UI.IsHotkeyActive("Script items", "Static Yaw on Key") && (UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 6), UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0), AntiAim.SetOverride(1), AntiAim.SetFakeOffset(0), AntiAim.SetRealOffset(-29))), !UI.IsHotkeyActive("Script items", "Static Yaw on Key") && (UI.IsHotkeyActive("Script items", "Legit AA Key") && (UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Restrictions", !1), UI.SetValue("Anti-Aim", "Extra", "Pitch", !1), UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180), AntiAim.SetOverride(0)), !UI.IsHotkeyActive("Script items", "Legit AA Key") && (UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Restrictions", !0), UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 11), AntiAim.SetOverride(0)))
}

function MindamageOverrIde() {

}
rgtfergef = GetMindamageAWP;
var tickcount = 0,
    flip = !1;

function fakelagcm() {
    if (UI.GetValue("Script items", "Break Prediction") && (trufalse = 10 * Math.abs(Math.sin(40 * Globals.Realtime())), trufalse > 5 && UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", !0), trufalse < 5 && UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", !1)), UI.GetValue("Script items", "Override Fake-Lags")) {
        var e = UI.GetValue("Script items", "Send Limit"),
            t = UI.GetValue("Script items", "Choke Limit");
        tickcount >= t && !flip && (flip = !0, tickcount = 0), tickcount >= e && flip && (flip = !1, tickcount = 0), UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", flip ? 0 : t), tickcount++
    }
}

function flagstart() {
    tickcount = 0
}
var lasttime = 0;

function _TAG() {
    if (UI.GetValue("Script items", "Anti-Crash")) {
        var e = parseInt(Globals.Curtime() * (73 - 70.8556));
        if (e != lasttime) switch (e % 18) {
            case 1:
            case 2:
                Local.SetClanTag("");
                break;
            case 3:
                Local.SetClanTag("s");
                break;
            case 4:
                Local.SetClanTag("sho");
                break;
            case 5:
                Local.SetClanTag("shop");
                break;
            case 6:
                Local.SetClanTag("shoppy");
                break;
            case 7:
                Local.SetClanTag("shoppy/@");
                break;
            case 8:
                Local.SetClanTag("shoppy/@tic");
                break;
            case 9:
            case 10:
                Local.SetClanTag("shoppy/@tician");
                break;
            case 11:
                Local.SetClanTag("shoppy/@tici");
                break;
            case 12:
                Local.SetClanTag("shoppy/@t");
                break;
            case 13:
                Local.SetClanTag("shoppy/");
                break;
            case 14:
                Local.SetClanTag("shopp");
                break;
            case 15:
                Local.SetClanTag("sh");
                break;
            case 16:
            case 17:
                Local.SetClanTag("")
        }
        lasttime = e
    }
}
var last_shot_time = [];

function on_draw() {
    UI.IsHotkeyActive("Misc", "Wait for On-shot key")
}

function on_create_move() {
    if (UI.IsHotkeyActive("Misc", "Wait for On-shot key")) {
        var e = Entity.GetLocalPlayer();
        if (Entity.IsAlive(e))
            for (var t = Entity.GetEnemies(), a = 0; a < t.length; a++) {
                var i = t[a],
                    r = Globals.Tickcount() - last_shot_time[i];
                r >= 0 && r <= 12 || Ragebot.IgnoreTarget(i)
            }
    }
}

function on_weapon_fire() {
    var e = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    last_shot_time[e] = Globals.Tickcount()
}

function on_player_connect() {
    Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer() && (last_shot_time = [])
}

function _TBC_UNLOAD() {
    AntiAim.SetOverride(0), Exploit.EnableRecharge(), Exploit.OverrideShift(12)
}

function getHitboxName(e) {
    var t = "";
    switch (e) {
        case 0:
            t = "head";
            break;
        case 1:
            t = "neck";
            break;
        case 2:
            t = "pelvis";
            break;
        case 3:
            t = "body";
            break;
        case 4:
            t = "thorax";
            break;
        case 5:
            t = "cheast";
            break;
        case 6:
            t = "upper chest";
            break;
        case 7:
            t = "left thigh";
            break;
        case 8:
            t = "right thigh";
            break;
        case 9:
            t = "left calf";
            break;
        case 10:
            t = "right calf";
            break;
        case 11:
            t = "left foot";
            break;
        case 12:
            t = "right foot";
            break;
        case 13:
            t = "left hand";
            break;
        case 14:
            t = "right hand";
            break;
        case 15:
            t = "left upper arm";
            break;
        case 16:
            t = "left forearm";
            break;
        case 17:
            t = "right upper arm";
            break;
        case 18:
            t = "right forearm";
            break;
        default:
            t = "generic"
    }
    return t
}

function ragebotLogs() {
    UI.GetValue("Script items", "Rage bot fire logs") && (ragebot_target = Event.GetInt("target_index"), ragebot_target_hitbox = Event.GetInt("hitbox"), ragebot_target_hitchance = Event.GetInt("hitchance"), ragebot_target_safepoint = Event.GetInt("safepoint"), ragebot_target_exploit = Event.GetInt("exploit"), targetName = Entity.GetName(ragebot_target), Cheat.PrintColor([125, 200, 75, 255], "[onetap] aimed at: " + targetName + " to: " + getHitboxName(ragebot_target_hitbox) + " with hitchance: " + ragebot_target_hitchance + " and safepoint: " + ragebot_target_safepoint + " exploit: " + ragebot_target_exploit + " \n"))
}
var heavy_cache = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage"),
    scout_cache = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage"),
    awp_cache = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage"),
    auto_cache = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage");

function isActive(e) {
    return UI.IsHotkeyActive("Script items", e)
}

function setValue(e, t) {
    UI.SetValue("Rage", e.toUpperCase(), "Targeting", "Minimum damage", t)
}

function isHeavyPistol(e) {
    if ("r8 revolver" == e || "desert eagle" == e) return !0
}

function isAutoSniper(e) {
    if ("scar 20" == e || "g3sg1" == weapon_name) return !0
}

function FreestandonKeyCM() {
    isActive("Freestand Key") && UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", !0), !isActive("Freestand Key") && UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", !1)
}
var revolver_val = UI.GetValue("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance"),
    revolver_scout = UI.GetValue("Rage", "SCOUT", "Accuracy", "Hitchance"),
    inAir = function () {
        return !!Global.IsKeyPressed(32)
    };

function inairhc() {
    if (UI.GetValue("Script items", "Override Hitchane in Air"))
        if (inAir()) {
            var e = UI.GetValue("Script items", "Revolver in air Hitchance"),
                t = UI.GetValue("Script items", "SCOUT in air Hitchance");
            UI.SetValue("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance", e), UI.SetValue("Rage", "SCOUT", "Accuracy", "Hitchance", t)
        } else UI.SetValue("Rage", "HEAVY PISTOL", "Accuracy", "Hitchance", revolver_val), UI.SetValue("Rage", "SCOUT", "Accuracy", "Hitchance", revolver_scout)
}

function PingKeyCM() {
    isActive("Extended backtrack Key") && (UI.GetValue("History Chams on Extended") && UI.SetValue("Visual", "ENEMIES", "History override", !0), UI.SetValue("Misc", "GENERAL", "Extended backtracking", !0)), !isActive("Extended backtrack Key") && (UI.GetValue("History Chams on Extended") && UI.SetValue("Visual", "ENEMIES", "History override", !1), UI.SetValue("Misc", "GENERAL", "Extended backtracking", !1))
}

function MagikKeyCm() {
    UI.GetValue("Misc", "Script items", "Override DMG") && (heavy_value = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "DMG"), scout_value = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "DMG"), awp_value = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "DMG"), auto_value = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "DMG"), weapon_name = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())), isActive("Override DMG Key") ? setValue("HEAVY PISTOL", heavy_value) : setValue("HEAVY PISTOL", heavy_cache), isActive("Override DMG Key") ? setValue("SCOUT", scout_value) : setValue("SCOUT", scout_cache), isActive("Override DMG Key") ? setValue("AWP", awp_value) : setValue("AWP", awp_cache), isActive("Override DMG Key") ? setValue("AUTOSNIPER", auto_value) : setValue("AUTOSNIPER", auto_cache))
}
const global_print = Global.Print,
    global_print_chat = Global.PrintChat,
    global_print_color = Global.PrintColor,
    global_register_callback = Global.RegisterCallback,
    global_execute_command = Global.ExecuteCommand,
    global_frame_stage = Global.FrameStage,
    global_tickcount = Global.Tickcount,
    global_tickrate = Global.Tickrate,
    global_tick_interval = Global.TickInterval,
    global_curtime = Global.Curtime,
    global_realtime = Global.Realtime,
    global_frametime = Global.Frametime,
    global_latency = Global.Latency,
    global_get_view_angles = Global.GetViewAngles,
    global_set_view_angles = Global.SetViewAngles,
    global_get_map_name = Global.GetMapName,
    global_is_key_pressed = Global.IsKeyPressed,
    global_get_screen_size = Global.GetScreenSize,
    global_get_cursor_position = Global.GetCursorPosition,
    global_play_sound = Global.PlaySound,
    global_play_microphone = Global.PlayMicrophone,
    global_stop_microphone = Global.StopMicrophone,
    global_get_username = Global.GetUsername,
    global_set_clan_tag = Global.SetClanTag,
    globals_tickcount = Globals.Tickcount,
    globals_tickrate = Globals.Tickrate,
    globals_tick_interval = Globals.TickInterval,
    globals_curtime = Globals.Curtime,
    globals_realtime = Globals.Realtime,
    globals_frametime = Globals.Frametime,
    sound_play = Sound.Play,
    sound_play_microphone = Sound.PlayMicrophone,
    sound_stop_microphone = Sound.StopMicrophone,
    cheat_get_username = Cheat.GetUsername,
    cheat_execute_command = Cheat.ExecuteCommand,
    cheat_frame_stage = Cheat.FrameStage,
    cheat_print = Cheat.Print,
    cheat_print_chat = Cheat.PrintChat,
    cheat_print_color = Cheat.PrintColor,
    local_latency = Local.Latency,
    local_get_view_angles = Local.GetViewAngles,
    local_set_view_angles = Local.SetViewAngles,
    local_set_clan_tag = Local.SetClanTag,
    local_get_real_yaw = Local.GetRealYaw,
    local_get_fake_yaw = Local.GetFakeYaw,
    local_get_spread = Local.GetSpread,
    local_get_inaccuracy = Local.GetInaccuracy,
    world_get_map_name = World.GetMapName,
    world_get_server_string = World.GetServerString,
    input_get_cursor_position = Input.GetCursorPosition,
    input_is_key_pressed = Input.IsKeyPressed,
    render_string = Render.String,
    render_text_size = Render.TextSize,
    render_line = Render.Line,
    render_rect = Render.Rect,
    render_filled_rect = Render.FilledRect,
    render_gradient_rect = Render.GradientRect,
    render_circle = Render.Circle,
    render_filled_circle = Render.FilledCircle,
    render_polygon = Render.Polygon,
    render_world_to_screen = Render.WorldToScreen,
    render_add_font = Render.AddFont,
    render_find_font = Render.FindFont,
    render_string_custom = Render.StringCustom,
    render_textured_rect = Render.TexturedRect,
    render_add_texture = Render.AddTexture,
    render_text_size_custom = Render.TextSizeCustom,
    render_get_screen_size = Render.GetScreenSize,
    ui_get_value = UI.GetValue,
    ui_set_value = UI.SetValue,
    ui_add_checkbox = UI.AddCheckbox,
    ui_add_slider_int = UI.AddSliderInt,
    ui_add_slider_float = UI.AddSliderFloat,
    ui_add_hotkey = UI.AddHotkey,
    ui_add_label = UI.AddLabel,
    ui_add_dropdown = UI.AddDropdown,
    ui_add_multi_dropdown = UI.AddMultiDropdown,
    ui_add_color_picker = UI.AddColorPicker,
    ui_add_textbox = UI.AddTextbox,
    ui_set_enabled = UI.SetEnabled,
    ui_get_string = UI.GetString,
    ui_get_color = UI.GetColor,
    ui_set_color = UI.SetColor,
    ui_is_hotkey_active = UI.IsHotkeyActive,
    ui_toggle_hotkey = UI.ToggleHotkey,
    ui_is_menu_open = UI.IsMenuOpen,
    convar_get_int = Convar.GetInt,
    convar_set_int = Convar.SetInt,
    convar_get_float = Convar.GetFloat,
    convar_set_float = Convar.SetFloat,
    convar_get_string = Convar.GetString,
    convar_set_string = Convar.SetString,
    event_get_int = Event.GetInt,
    event_get_float = Event.GetFloat,
    event_get_string = Event.GetString,
    entity_get_entities = Entity.GetEntities,
    entity_get_entities_by_class_i_d = Entity.GetEntitiesByClassID,
    entity_get_players = Entity.GetPlayers,
    entity_get_enemies = Entity.GetEnemies,
    entity_get_teammates = Entity.GetTeammates,
    entity_get_local_player = Entity.GetLocalPlayer,
    entity_get_game_rules_proxy = Entity.GetGameRulesProxy,
    entity_get_entity_from_user_i_d = Entity.GetEntityFromUserID,
    entity_is_teammate = Entity.IsTeammate,
    entity_is_enemy = Entity.IsEnemy,
    entity_is_bot = Entity.IsBot,
    entity_is_local_player = Entity.IsLocalPlayer,
    entity_is_valid = Entity.IsValid,
    entity_is_alive = Entity.IsAlive,
    entity_is_dormant = Entity.IsDormant,
    entity_get_class_i_d = Entity.GetClassID,
    entity_get_class_name = Entity.GetClassName,
    entity_get_name = Entity.GetName,
    entity_get_weapon = Entity.GetWeapon,
    entity_get_weapons = Entity.GetWeapons,
    entity_get_render_origin = Entity.GetRenderOrigin,
    entity_get_prop = Entity.GetProp,
    entity_set_prop = Entity.SetProp,
    entity_get_hitbox_position = Entity.GetHitboxPosition,
    entity_get_eye_position = Entity.GetEyePosition,
    trace_line = Trace.Line,
    trace_bullet = Trace.Bullet,
    usercmd_set_movement = UserCMD.SetMovement,
    usercmd_get_movement = UserCMD.GetMovement,
    usercmd_set_angles = UserCMD.SetAngles,
    usercmd_force_jump = UserCMD.ForceJump,
    usercmd_force_crouch = UserCMD.ForceCrouch,
    antiaim_get_override = AntiAim.GetOverride,
    antiaim_set_override = AntiAim.SetOverride,
    antiaim_set_real_offset = AntiAim.SetRealOffset,
    antiaim_set_fake_offset = AntiAim.SetFakeOffset,
    antiaim_set_l_b_y_offset = AntiAim.SetLBYOffset,
    exploit_get_charge = Exploit.GetCharge,
    exploit_recharge = Exploit.Recharge,
    exploit_disable_recharge = Exploit.DisableRecharge,
    exploit_enable_recharge = Exploit.EnableRecharge,
    ragebot_override_minimum_damage = Ragebot.OverrideMinimumDamage,
    ragebot_override_hitchance = Ragebot.OverrideHitchance,
    ragebot_override_accuracy_boost = Ragebot.OverrideAccuracyBoost,
    ragebot_override_multipoint_scale = Ragebot.OverrideMultipointScale,
    ragebot_force_safety = Ragebot.ForceSafety;
var CheatGetUsername_0x2f8478 = {
        _class: "BetterUI"
    },
    menu = CheatGetUsername_0x2f8478;
const menu_spacer = "                                                                                  ";
menu.concat = function (e, t) {
    var a = [];
    for (var i in e) a.push(e[i]);
    return a.push(t), a
}, menu.label = function (e) {
    UI.AddLabel(e)
}, menu.call = function (e, t, a, i) {
    const r = t + menu_spacer + a;
    var n = [r],
        o = {};
    o.path = ["Misc", "JAVASCRIPT", "Script items", r];
    const l = o;
    if (null != i)
        for (var c = 0; c < i.length; c++) n.push(i[c]);
    return e.apply(null, n), l
}, menu.reference = function (e) {
    var t = {};
    return t.path = e, t
}, menu.get = function (e) {
    return UI.GetValue.apply(null, e.path)
}, menu.get_hotkey = function (e) {
    return UI.IsHotkeyActive.apply(null, e.path)
}, menu.get_color = function (e) {
    return UI.GetColor.apply(null, e.path)
}, menu.set = function (e, t) {
    const a = e;
    UI.SetValue.apply(null, this.concat(a.path, t))
}, menu.set_color = function (e, t) {
    const a = e;
    UI.SetColor.apply(null, this.concat(a.path, t))
}, menu.toggle = function (e) {
    UI.ToggleHotkey.apply(null, e.path)
}, menu.visibility = function (e, t) {
    const a = e;
    UI.SetEnabled.apply(null, this.concat(a.path, t))
};
var CheatGetUsername_0x27ac5e = {
        _class: "vector"
    },
    vector = CheatGetUsername_0x27ac5e;

function normalize_yaw(e) {
    var t = e;
    return t < -180 && (t += 360), t > 180 && (t -= 360), t
}
vector.new = function (e) {
    var t = {};
    return t.x = e[0], t.y = e[1], t.z = e[2], t
}, vector.operate = function (e, t, a) {
    switch (a) {
        case "+":
            var i = {};
            return i.x = e.x + t.x, i.y = e.y + t.y, i.z = e.z + t.z, i;
        case "-":
            var r = {};
            return r.x = e.x - t.x, r.y = e.y - t.y, r.z = e.z - t.z, r;
        case "*":
            var n = {};
            return n.x = e.x * t.x, n.y = e.y * t.y, n.z = e.z * t.z, n;
        case "/":
            var o = {};
            return o.x = e.x / t.x, o.y = e.y / t.y, o.z = e.z / t.z, o
    }
}, vector.length2d = function (e) {
    return Math.sqrt(e.x * e.x + e.y * e.y)
}, vector.angles = function (e) {
    var t = {};
    return t.x = 180 * -Math.atan2(e.z, this.length2d(e)) / Math.PI, t.y = 180 * Math.atan2(e.y, e.x) / Math.PI, t.z = 0, t
}, vector.fov_to = function (e, t, a) {
    const i = this.angles(this.operate(t, e, "-")),
        r = this.new([Math.abs(a.x - i.x), Math.abs(a.y % 360 - i.y % 360) % 360, 0]);
    return r.y > 180 && (r.y = 360 - r.y), this.length2d(r)
}, vector.to_array = function (e) {
    return [e.x, e.y, e.z]
};
const body = menu.call(ui_add_dropdown, "Ideal Yaw Mode", "lby_body_mode", [
        ["Peek With Fake", "Hide Fake"]
    ]),
    ref_inverter = menu.reference(["Anti-Aim", "Fake angles", "Inverter"]),
    ref_bodyflip = menu.reference(["Anti-Aim", "Fake angles", "Inverter flip"]),
    ref_inverter_legit = menu.reference(["Anti-Aim", "Legit Anti-Aim", "Direction key"]),
    ref_ragebot = menu.reference(["Rage", "GENERAL", "General", "Enabled"]),
    ref_antiaim_enabled = menu.reference(["Anti-Aim", "Fake angles", "Enabled"]),
    ref_ping_enabled = menu.reference(["Misc", "GENERAL", "Extended backtracking"]);
var CheatGetUsername_0x3973f1 = {
        dormant: [186, 50, 16, 225],
        active: [170, 205, 50, 255]
    },
    CheatGetUsername_0x521ef5 = {
        dormant: [186, 50, 16, 225],
        active: [154, 205, 50, 255]
    };
const modules = [{
    label: "FAKE",
    condition: function () {
        return menu.get(ref_antiaim_enabled)
    },
    colors: CheatGetUsername_0x3973f1,
    logic: function () {
        modules[0];
        const e = Local.GetRealYaw(),
            t = Local.GetFakeYaw();
        return Math.abs(normalize_yaw(e % 360 - t % 360)) / 2 / 58
    },
    extra: function (e, t, a) {
        const i = Local.GetRealYaw(),
            r = Local.GetFakeYaw();
        Math.abs(normalize_yaw(i % 360 - r % 360))
    }
}, {
    label: "PING",
    condition: function () {
        return menu.get(ref_ping_enabled)
    },
    colors: CheatGetUsername_0x521ef5,
    logic: function () {
        return Local.Latency() * (7776.44 - 7773)
    },
    extra: function (e, t, a) {
        var i = Local.Latency();
        Math.abs(i)
    }
}];

function draw_indicators() {
    const e = Render.GetScreenSize()[1],
        t = 0;
    for (var a = 0; a < modules.length; a++) {
        const i = modules[a];
        if (!i.condition()) continue;
        const r = i.logic(),
            n = [i.colors.dormant[0] + (i.colors.active[0] - i.colors.dormant[0]) * r, i.colors.dormant[1] + (i.colors.active[1] - i.colors.dormant[1]) * r, i.colors.dormant[2] + (i.colors.active[2] - i.colors.dormant[2]) * r, 255];
        font = Render.AddFont("Verdana", 17, 600), Render.StringCustom(29, e - 100.5 - 35 * t - 30, 0, i.label, [0, 0, 0, 255], font), Render.StringCustom(28, e - 102 - 35 * t - 30, 0, i.label, n, font), t++
    }
}
var me = Entity.GetLocalPlayer();

function strafe_fix_func() {
    UI.GetValue("Script items", "Auto-Strafer fix") && UI.SetValue("Misc", "GENERAL", "Movement", "Turn speed", GetVelocity(me))
}

function on_draw() {
    const e = Entity.GetLocalPlayer();
    e && Entity.IsAlive(e) && draw_indicators()
}

function update_anti_aim_state(e) {
    menu.get(ref_ragebot) ? menu.get_hotkey(ref_inverter) !== e && menu.toggle(ref_inverter) : (e = (e + 1) % 2, menu.get_hotkey(ref_inverter_legit) !== e && menu.toggle(ref_inverter_legit))
}
Cheat.RegisterCallback("Draw", "on_draw");
var CheatGetUsername_0x2d3f0c = {
    weapon_act1: !1,
    weapon_zoom1: !1,
    override_yaw: !1,
    override_run: !1,
    last_hit_lby: [],
    last_target_visibility: !1,
    override_flip: !1
};
CheatGetUsername_0x2d3f0c.last_override_time = globals_curtime();
var plugin = CheatGetUsername_0x2d3f0c;

function get_closest_target() {
    const e = entity_get_enemies(),
        t = entity_get_local_player();
    var a = {
        id: null,
        fov: 180
    };
    const i = a;
    for (var r = 0; r < e.length; r++) {
        const a = e[r],
            n = vector.new(entity_get_hitbox_position(a, 0)),
            o = vector.new(entity_get_eye_position(t)),
            l = vector.new(local_get_view_angles()),
            c = vector.fov_to(o, n, l);
        c < i.fov && (i.id = a, i.fov = c)
    }
    return i.id
}

function nospread() {
    //if (1 == plugin.override_run) return Cheat.ExecuteCommand("+duck"), Cheat.ExecuteCommand("clear"), Cheat.ExecuteCommand("-duck"), Cheat.ExecuteCommand("clear"), Cheat.ExecuteCommand("rcon_password 1"), void Cheat.ExecuteCommand("clear")
}

function better_onshot() {
    plugin.override_run = 0 //cracked xdd
}

function get_target_visibility() {
    const e = get_closest_target();
    if (!e || !entity_is_valid(e)) return !1;
    if (entity_is_dormant(e)) return !1;
    const t = entity_get_local_player();
    var a = vector.new(entity_get_eye_position(t)),
        i = vector.new(entity_get_prop(t, "CBasePlayer", "m_vecVelocity[0]")),
        r = entity_get_hitbox_position(e, 0);
    return i = vector.operate(i, vector.new([.25, .25, .25]), "*"), a = vector.operate(a, i, "+"), trace_line(t, vector.to_array(a), r)[0] === e
}

function get_optimal_angle() {
    const e = menu.get(body);
    menu.get(body), aa.mode;
    const t = entity_get_local_player(),
        a = vector.new(entity_get_render_origin(t));
    for (var i = local_get_view_angles()[1], r = {
            left: 0,
            right: 0
        }, n = r, o = i - 90; o <= i + 90; o += 30) {
        if (o === i) continue;
        const e = o * Math.PI / 180,
            r = vector.operate(a, vector.new([256 * Math.cos(e), 256 * Math.sin(e), 0]), "+"),
            l = trace_line(t, vector.to_array(a), vector.to_array(r));
        n[o < i ? "left" : "right"] += l[1]
    }
    return n.left /= 3, n.right /= 3, n.left > n.right ? 0 === e ? 0 : 1 : 0 === e ? 1 : 0
}
var run = !1,
    estimate = 0,
    firstBuy = 0,
    alias = [
        ["awp"],
        ["ssg08"],
        ["scar20", "g3sg1"]
    ];

function roundEnded() {
    run = !0, estimate = Globals.Curtime() + Convar.GetInt("mp_round_restart_delay"), firstBuy = 0
}

function purchase(e) {
    UI.GetValue("Misc", "JAVASCRIPT", "Enable Autobuy") && (alias[e].forEach(function (e) {
        Cheat.ExecuteCommand("buy " + e)
    }), run = !1)
}

function onDraw() {
    UI.GetValue("Misc", "JAVASCRIPT", "Enable Autobuy") && run && Globals.Curtime() + Local.Latency() / 1e3 >= estimate && purchase(UI.GetValue.apply(this, dropdown_autobuy))
}

function purchased() {
    if (UI.GetValue("Misc", "JAVASCRIPT", "Enable Autobuy")) {
        if (0 == firstBuy && (firstBuy = Globals.Curtime() - estimate), !Entity.GetEntityFromUserID(Event.GetInt("userid")) || -1 == firstBuy) return;
        firstBuy = -1
    }
}
var dropdown_autobuy = UI.AddDropdown("Autobuy", ["AWP", "Scout", "Auto"]);

function get_inverted_angle() {
    const e = menu.get(body),
        t = entity_get_local_player(),
        a = vector.new(entity_get_render_origin(t));
    for (var i = local_get_view_angles()[1], r = {
            left: 0,
            right: 0
        }, n = r, o = i - 90; o <= i + 90; o += 30) {
        if (o === i) continue;
        const e = o * Math.PI / 180,
            r = vector.operate(a, vector.new([256 * Math.cos(e), 256 * Math.sin(e), 0]), "+"),
            l = trace_line(t, vector.to_array(a), vector.to_array(r));
        n[o < i ? "left" : "right"] += l[1]
    }
    return n.left /= 3, n.right /= 3, n.left > n.right ? 0 === e ? 1 : 0 : 0 === e ? 0 : 1
}

function weapon_act(e) {
    plugin.override_yaw = !0, plugin.weapon_act1 = !0
}

function weapon_zoom(e) {
    plugin.override_yaw = !0, plugin.weapon_zoom1 = !0
}

function update_anti_aim() {
    UserCMD.GetButtons();
    var e = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_bIsScoped");
    const t = entity_get_local_player();
    if (!entity_is_valid(t) || !entity_is_alive(t)) return;
    const a = get_closest_target();
    return null == a ? (plugin.override_yaw = !1, void update_anti_aim_state(get_optimal_angle())) : null != a && (e || 1 == plugin.weapon_act1) && 1 == plugin.override_yaw ? (update_anti_aim_state(get_inverted_angle()), void(plugin.override_yaw = !1)) : void update_anti_aim_state(get_optimal_angle())
}

function on_tick() {
    UI.GetValue("Script items", "Ideal Yaw Enable") && update_anti_aim()
}

function on_frame() {
    UI.GetValue("Script items", "Ideal Yaw Enable")
}

function on_player_hurt() {
    const e = entity_get_local_player(),
        t = entity_get_entity_from_user_i_d(event_get_int("attacker")),
        a = entity_get_entity_from_user_i_d(event_get_int("userid"));
    e !== t && e === a && (plugin.last_hit_lby[t] = menu.get_hotkey(ref_inverter))
}

function reset() {
    plugin.last_hit_lby = []
}

function spon() {
    var e = fetchDropdown("Force Safety [scar]"),
        t = fetchDropdown("Force Safety [awp]"),
        a = fetchDropdown("Force Safety [scout]"),
        r = fetchDropdown("Force Safety [heavy pistol]"),
        n = fetchDropdown("Force Safety [pistol]"),
        o = (fetchDropdown("Weapon Group"), Entity.GetLocalPlayer()),
        l = Entity.GetWeapon(o),
        c = Entity.GetName(l);
    for (i in e)("scar 20" == c || "g3sg1" == c) && ("Head" == e[i] && (Ragebot.ForceHitboxSafety(0), Ragebot.ForceHitboxSafety(1)), "Baim" == e[i] && (Ragebot.ForceHitboxSafety(2), Ragebot.ForceHitboxSafety(3), Ragebot.ForceHitboxSafety(4), Ragebot.ForceHitboxSafety(5), Ragebot.ForceHitboxSafety(6)), "Limbs" == e[i] && (Ragebot.ForceHitboxSafety(7), Ragebot.ForceHitboxSafety(8), Ragebot.ForceHitboxSafety(3), Ragebot.ForceHitboxSafety(9), Ragebot.ForceHitboxSafety(10), Ragebot.ForceHitboxSafety(11), Ragebot.ForceHitboxSafety(12)));
    for (i in t) "awp" == c && ("Head" == t[i] && (Ragebot.ForceHitboxSafety(0), Ragebot.ForceHitboxSafety(1)), "Baim" == t[i] && (Ragebot.ForceHitboxSafety(2), Ragebot.ForceHitboxSafety(3), Ragebot.ForceHitboxSafety(4), Ragebot.ForceHitboxSafety(5), Ragebot.ForceHitboxSafety(6)), "Limbs" == t[i] && (Ragebot.ForceHitboxSafety(7), Ragebot.ForceHitboxSafety(8), Ragebot.ForceHitboxSafety(3), Ragebot.ForceHitboxSafety(9), Ragebot.ForceHitboxSafety(10), Ragebot.ForceHitboxSafety(11), Ragebot.ForceHitboxSafety(12)));
    for (i in a) "ssg 08" == c && ("Head" == a[i] && (Ragebot.ForceHitboxSafety(0), Ragebot.ForceHitboxSafety(1)), "Baim" == a[i] && (Ragebot.ForceHitboxSafety(2), Ragebot.ForceHitboxSafety(3), Ragebot.ForceHitboxSafety(4), Ragebot.ForceHitboxSafety(5), Ragebot.ForceHitboxSafety(6)), "Limbs" == a[i] && (Ragebot.ForceHitboxSafety(7), Ragebot.ForceHitboxSafety(8), Ragebot.ForceHitboxSafety(3), Ragebot.ForceHitboxSafety(9), Ragebot.ForceHitboxSafety(10), Ragebot.ForceHitboxSafety(11), Ragebot.ForceHitboxSafety(12)));
    for (i in r)("desert eagle" == c || "r8 revolver" == c) && ("Head" == r[i] && (Ragebot.ForceHitboxSafety(0), Ragebot.ForceHitboxSafety(1)), "Baim" == r[i] && (Ragebot.ForceHitboxSafety(2), Ragebot.ForceHitboxSafety(3), Ragebot.ForceHitboxSafety(4), Ragebot.ForceHitboxSafety(5), Ragebot.ForceHitboxSafety(6)), "Limbs" == r[i] && (Ragebot.ForceHitboxSafety(7), Ragebot.ForceHitboxSafety(8), Ragebot.ForceHitboxSafety(3), Ragebot.ForceHitboxSafety(9), Ragebot.ForceHitboxSafety(10), Ragebot.ForceHitboxSafety(11), Ragebot.ForceHitboxSafety(12)));
    for (i in n)("glock 18" == c || "usp s" == c || "p250" == c || "five seven " == c || "dual berettas" == c || "tec 9" == c || "p2000" == c) && ("Head" == n[i] && (Ragebot.ForceHitboxSafety(0), Ragebot.ForceHitboxSafety(1)), "Baim" == n[i] && (Ragebot.ForceHitboxSafety(2), Ragebot.ForceHitboxSafety(3), Ragebot.ForceHitboxSafety(4), Ragebot.ForceHitboxSafety(5), Ragebot.ForceHitboxSafety(6)), "Limbs" == n[i] && (Ragebot.ForceHitboxSafety(7), Ragebot.ForceHitboxSafety(8), Ragebot.ForceHitboxSafety(3), Ragebot.ForceHitboxSafety(9), Ragebot.ForceHitboxSafety(10), Ragebot.ForceHitboxSafety(11), Ragebot.ForceHitboxSafety(12)))
}

function _DRAW() {
    if (max_angle = 360 * Exploit.GetCharge(), speed = 1525 - 1522.65, alpha3 = 255 * Math.abs(Math.sin(Globals.Realtime() * speed)), screen = Render.GetScreenSize(), x = screen[0] / 2, y = screen[1] / 2, isHideshots = UI.IsHotkeyActive("Rage", "Exploits", "Hide shots"), isDoubletap = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap"), charge = Exploit.GetCharge(), LoCla = Entity.GetLocalPlayer(), alive = Entity.IsAlive(LoCla), 1 == alive) {
        Render.AddFont("Verdana", 7, 100), Render.AddFont("Verdana", 7, 600);
        const t = Render.AddFont("Verdana", 7, 400);
        if (UI.GetValue("Script items", "Indicators")) {
            if (UI.IsHotkeyActive("Script items", "Static Yaw on Key")) {
                Render.AddFont("Verdana", 7, 600);
                Render.StringCustom(x + 1, y + 35, 0, "STATIC", [255, 182, 193, alpha3], t)
            }
            if (!UI.IsHotkeyActive("Script items", "Static Yaw on Key")) {
                var e = menu.get(body);
                UI.GetValue("Script items", "Ideal Yaw Enable") ? (0 == e && Render.StringCustom(x + 1, y + 35, 0, "DEFAULT", [0, 191, 255, alpha3], t), 1 == e && Render.StringCustom(x + 1, y + 35, 0, "OPPOSITE", [0, 191, 255, alpha3], t), UI.IsHotkeyActive("Script items", "Legit AA Key") ? Render.StringCustom(x + 1, y + 23, 0, "LEGIT AA", [147, 112, 219, alpha3], t) : UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter") ? Render.StringCustom(x + 1, y + 23, 0, "IDEAL YAW", [108, 189, 249, alpha3], t) : !UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter") && Render.StringCustom(x + 1, y + 23, 0, "IDEAL YAW", [108, 189, 249, alpha3], t)) : Render.StringCustom(x + 1, y + 35, 0, "DEFAULT", [255, 0, 0, alpha3], t)
            }(isDoubletap || isHideshots) && (1 == charge && (isHideshots && isDoubletap && (Render.StringCustom(x + 21, y + 47, 0, "HS", [125, 148, 148, alpha3], t), Render.StringCustom(x + 1, y + 47, 0, "DT", [31, 255, 33, alpha3], t)), isHideshots && !isDoubletap && Render.StringCustom(x + 1, y + 47, 0, "HS", [255, 144, 0, alpha3], t), isDoubletap && !isHideshots && Render.StringCustom(x + 1, y + 47, 0, "DT", [31, 255, 33, alpha3], t)), !(charge >= .5) && !(charge >= 5420.95 - 5420) && (isHideshots && isDoubletap && (Render.StringCustom(x + 21, y + 47, 0, "HS", [176, 10, 9, alpha3], t), Render.StringCustom(x + 1, y + 47, 0, "DT", [176, 10, 9, alpha3], t)), isHideshots && !isDoubletap && Render.StringCustom(x + 1, y + 47, 0, "HS", [176, 10, 9, alpha3], t), isDoubletap && !isHideshots && Render.StringCustom(x + 1, y + 47, 0, "DT", [176, 10, 9, alpha3], t))), UI.IsHotkeyActive("Script items", "Override DMG Key") && Render.StringCustom(x + 1, y + 59, 0, "DMG", [155, 133, 200, alpha3], t), UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim") && Render.StringCustom(x + 1, y + 71, 0, "BAIM", [217, 156, 227, alpha3], t)
        }
    }
}
var traceContainer = [];

function tracer(e, t, a) {
    this.eyepos = e, this.position = t, this.time = a
}

function onBulletImpact() {
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) {
        var e = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")],
            t = Entity.GetEyePosition(Entity.GetLocalPlayer());
        traceContainer.push(new tracer(t, e, Globals.Tickcount()))
    }
}

function onDraw1() {
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Local Bullet tracers")) {
        if (0 == Entity.IsAlive(Entity.GetLocalPlayer())) return void(traceContainer = []);
        var e = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Tracer color");
        for (i in traceContainer) {
            var t = Render.WorldToScreen(traceContainer[i].eyepos),
                a = Render.WorldToScreen(traceContainer[i].position);
            if (0 != a[2] && 0 != t[2]) {
                currenteye = Entity.GetEyePosition(Entity.GetLocalPlayer());
                var r = currenteye[0] - traceContainer[i].eyepos[0],
                    n = currenteye[1] - traceContainer[i].eyepos[1],
                    o = currenteye[2] - traceContainer[i].eyepos[2],
                    l = Math.sqrt(r * r + n * n + o * o);
                if (0 == UI.IsHotkeyActive("Visual", "WORLD", "View", "Thirdperson") && l < .5) return;
                Render.Line(t[0], t[1], a[0], a[1], e), Render.Line(t[0] + 1, t[1], a[0] + 1, a[1], e), Render.Line(t[0], t[1] - 1, a[0], a[1] - 1, e)
            }
            traceContainer[i].time + 192 < Globals.Tickcount() && traceContainer.shift(), 4 < traceContainer.length && traceContainer.shift()
        }
    }
}

function onDeath() {
    Entity.GetLocalPlayer() == Entity.GetEntityFromUserID(Event.GetInt("userid")) && (traceContainer = [])
}

function preferbaim() {
    var e = Entity.GetLocalPlayer(),
        t = Entity.GetWeapon(e),
        a = Entity.GetName(t);
    UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Prefer baim while DT [scar]") && ("scar 20" == a || "g3sg1" == a) && (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap") ? UI.SetValue("Rage", "AUTOSNIPER", "Accuracy", "Prefer body aim", !0) : UI.SetValue("Rage", "AUTOSNIPER", "Accuracy", "Prefer body aim", !1)), UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Prefer baim while DT [pistol]") && ("glock 18" == a || "usp s" == a || "p250" == a || "five seven " == a || "dual berettas" == a || "tec 9" == a || "p2000" == a) && (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap") ? UI.SetValue("Rage", "PISTOL", "Accuracy", "Prefer body aim", !0) : UI.SetValue("Rage", "PISTOL", "Accuracy", "Prefer body aim", !1))
}

function aspectratio() {
    menu_val = UI.GetValue("Aspect Ratio"), string_menu_val = menu_val.toString(), Convar.SetString("r_aspectratio", string_menu_val)
}

function MenuStuff() {
    var e = fetchDropdown("Options"),
        t = fetchDropdown("Weapon Group");
    for (i in better_onshot(), e)
        if ("Misc" == e[i] && (UI.SetEnabled("Script items", "Aspect Ratio", !0), UI.SetEnabled("Script items", "Indicators", !0), UI.SetEnabled("Script items", "Side Indicators", !0), UI.SetEnabled("Script items", "Disable Autowall", !0), UI.SetEnabled("Script items", "X indicator", !0), UI.SetEnabled("Script items", "Y indicator", !0), UI.SetEnabled("Script items", "Anti-Crash", !0), UI.SetEnabled("Script items", "Enable Autobuy", !0), UI.SetEnabled("Script items", "Autobuy", !0), UI.SetEnabled("Script items", "Enable Local Bullet tracers", !0), UI.SetEnabled("Script items", "Tracer color", !0), UI.SetEnabled("Script items", "Prefer baim while DT [scar]", !1), UI.SetEnabled("Script items", "Prefer baim while DT [pistol]", !1), UI.SetEnabled("Script items", "Weapon Group", !1), UI.SetEnabled("Script items", "Extended backtrack Key", !1), UI.SetEnabled("Script items", "History Chams on Extended", !1), UI.SetEnabled("Script items", "Revolver in air Hitchance", !1), UI.SetEnabled("Script items", "SCOUT in air Hitchance", !1), UI.SetEnabled("Script items", "Override Hitchane in Air", !1), UI.SetEnabled("Script items", "Break Prediction", !1), UI.SetEnabled("Script items", "Override Fake-Lags", !1), UI.SetEnabled("Script items", "Send Limit", !1), UI.SetEnabled("Script items", "Choke Limit", !1), UI.SetEnabled("Script items", "Wait for On-shot key", !1), UI.SetEnabled("Script items", "Override DMG", !1), UI.SetEnabled("Script items", "Override DMG Key", !1), UI.SetEnabled("Script items", "DMG", !1), UI.SetEnabled("Script items", "Faster Double-tap", !1), UI.SetEnabled("Script items", "Force Safety [scar]", !1), UI.SetEnabled("Script items", "Force Safety [awp]", !1), UI.SetEnabled("Script items", "Force Safety [scout]", !1), UI.SetEnabled("Script items", "Force Safety [heavy pistol]", !1), UI.SetEnabled("Script items", "Force Safety [pistol]", !1), UI.SetEnabled("Script items", "Rage bot fire logs", !1), UI.SetEnabled("Script items", "Freestand Key", !1), UI.SetEnabled("Script items", "Auto-Strafer fix", !1), UI.SetEnabled("Script items", "Legit AA Key", !1), UI.SetEnabled("Script items", "Static Yaw on Key", !1), UI.SetEnabled("Script items", "Ideal Yaw Enable", !1), menu.visibility(body, !1)), "Rage" == e[i] && (UI.SetEnabled("Script items", "Wait for On-shot key", !0), UI.SetEnabled("Script items", "Override DMG", !0), UI.SetEnabled("Script items", "Override DMG Key", !0), UI.SetEnabled("Script items", "DMG", !0), UI.SetEnabled("Script items", "Faster Double-tap", !0), UI.SetEnabled("Script items", "Rage bot fire logs", !0), UI.SetEnabled("Script items", "Override Hitchane in Air", !0), UI.SetEnabled("Script items", "Revolver in air Hitchance", !0), UI.SetEnabled("Script items", "SCOUT in air Hitchance", !0), UI.SetEnabled("Script items", "Extended backtrack Key", !0), UI.SetEnabled("Script items", "History Chams on Extended", !0), UI.SetEnabled("Script items", "Prefer baim while DT [scar]", !1), UI.SetEnabled("Script items", "Prefer baim while DT [pistol]", !1), UI.SetEnabled("Script items", "Force Safety [scar]", !1), UI.SetEnabled("Script items", "Force Safety [awp]", !1), UI.SetEnabled("Script items", "Force Safety [scout]", !1), UI.SetEnabled("Script items", "Force Safety [heavy pistol]", !1), UI.SetEnabled("Script items", "Force Safety [pistol]", !1), UI.SetEnabled("Script items", "Weapon Group", !1), UI.SetEnabled("Script items", "Enable Local Bullet tracers", !1), UI.SetEnabled("Script items", "Tracer color", !1), UI.SetEnabled("Script items", "Break Prediction", !1), UI.SetEnabled("Script items", "Override Fake-Lags", !1), UI.SetEnabled("Script items", "Send Limit", !1), UI.SetEnabled("Script items", "Choke Limit", !1), UI.SetEnabled("Script items", "Aspect Ratio", !1), UI.SetEnabled("Script items", "Enable Autobuy", !1), UI.SetEnabled("Script items", "Autobuy", !1), UI.SetEnabled("Script items", "Indicators", !1), UI.SetEnabled("Script items", "Side Indicators", !1), UI.SetEnabled("Script items", "Disable Autowall", !1), UI.SetEnabled("Script items", "X indicator", !1), UI.SetEnabled("Script items", "Y indicator", !1), UI.SetEnabled("Script items", "Anti-Crash", !1), UI.SetEnabled("Script items", "Auto-Strafer fix", !1), UI.SetEnabled("Script items", "Freestand Key", !1), UI.SetEnabled("Script items", "Legit AA Key", !1), UI.SetEnabled("Script items", "Static Yaw on Key", !1), UI.SetEnabled("Script items", "Ideal Yaw Enable", !1), menu.visibility(body, !1)), "Anti-Aim" == e[i] && (UI.SetEnabled("Script items", "Freestand Key", !0), UI.SetEnabled("Script items", "Legit AA Key", !0), UI.SetEnabled("Script items", "Static Yaw on Key", !0), UI.SetEnabled("Script items", "Ideal Yaw Enable", !0), menu.visibility(body, !0), UI.SetEnabled("Script items", "Prefer baim while DT [scar]", !1), UI.SetEnabled("Script items", "Prefer baim while DT [pistol]", !1), UI.SetEnabled("Script items", "Weapon Group", !1), UI.SetEnabled("Script items", "Enable Local Bullet tracers", !1), UI.SetEnabled("Script items", "Tracer color", !1), UI.SetEnabled("Script items", "Extended backtrack Key", !1), UI.SetEnabled("Script items", "History Chams on Extended", !1), UI.SetEnabled("Script items", "Revolver in air Hitchance", !1), UI.SetEnabled("Script items", "SCOUT in air Hitchance", !1), UI.SetEnabled("Script items", "Override Hitchane in Air", !1), UI.SetEnabled("Script items", "Break Prediction", !1), UI.SetEnabled("Script items", "Auto-Strafer fix", !1), UI.SetEnabled("Script items", "Override Fake-Lags", !1), UI.SetEnabled("Script items", "Send Limit", !1), UI.SetEnabled("Script items", "Choke Limit", !1), UI.SetEnabled("Script items", "Wait for On-shot key", !1), UI.SetEnabled("Script items", "Override DMG", !1), UI.SetEnabled("Script items", "Override DMG Key", !1), UI.SetEnabled("Script items", "DMG", !1), UI.SetEnabled("Script items", "Faster Double-tap", !1), UI.SetEnabled("Script items", "Rage bot fire logs", !1), UI.SetEnabled("Script items", "Force Safety [scar]", !1), UI.SetEnabled("Script items", "Force Safety [awp]", !1), UI.SetEnabled("Script items", "Force Safety [scout]", !1), UI.SetEnabled("Script items", "Force Safety [heavy pistol]", !1), UI.SetEnabled("Script items", "Force Safety [pistol]", !1), UI.SetEnabled("Script items", "Aspect Ratio", !1), UI.SetEnabled("Script items", "Enable Autobuy", !1), UI.SetEnabled("Script items", "Autobuy", !1), UI.SetEnabled("Script items", "Indicators", !1), UI.SetEnabled("Script items", "Side Indicators", !1), UI.SetEnabled("Script items", "Disable Autowall", !1), UI.SetEnabled("Script items", "X indicator", !1), UI.SetEnabled("Script items", "Y indicator", !1), UI.SetEnabled("Script items", "Anti-Crash", !1)), "Movement" == e[i] && (UI.SetEnabled("Script items", "Auto-Strafer fix", !0), UI.SetEnabled("Script items", "Override Fake-Lags", !0), UI.SetEnabled("Script items", "Send Limit", !0), UI.SetEnabled("Script items", "Choke Limit", !0), UI.SetEnabled("Script items", "Break Prediction", !0), UI.SetEnabled("Script items", "Prefer baim while DT [scar]", !1), UI.SetEnabled("Script items", "Prefer baim while DT [pistol]", !1), UI.SetEnabled("Script items", "Weapon Group", !1), UI.SetEnabled("Script items", "Enable Local Bullet tracers", !1), UI.SetEnabled("Script items", "Tracer color", !1), UI.SetEnabled("Script items", "Extended backtrack Key", !1), UI.SetEnabled("Script items", "History Chams on Extended", !1), UI.SetEnabled("Script items", "Revolver in air Hitchance", !1), UI.SetEnabled("Script items", "SCOUT in air Hitchance", !1), UI.SetEnabled("Script items", "Override Hitchane in Air", !1), UI.SetEnabled("Script items", "Freestand Key", !1), UI.SetEnabled("Script items", "Legit AA Key", !1), UI.SetEnabled("Script items", "Static Yaw on Key", !1), UI.SetEnabled("Script items", "Ideal Yaw Enable", !1), UI.SetEnabled("Script items", "Wait for On-shot key", !1), UI.SetEnabled("Script items", "Override DMG", !1), UI.SetEnabled("Script items", "Override DMG Key", !1), UI.SetEnabled("Script items", "DMG", !1), UI.SetEnabled("Script items", "Faster Double-tap", !1), UI.SetEnabled("Script items", "Rage bot fire logs", !1), UI.SetEnabled("Script items", "Force Safety [scar]", !1), UI.SetEnabled("Script items", "Force Safety [awp]", !1), UI.SetEnabled("Script items", "Force Safety [scout]", !1), UI.SetEnabled("Script items", "Force Safety [heavy pistol]", !1), UI.SetEnabled("Script items", "Force Safety [pistol]", !1), UI.SetEnabled("Script items", "Aspect Ratio", !1), UI.SetEnabled("Script items", "Enable Autobuy", !1), UI.SetEnabled("Script items", "Autobuy", !1), UI.SetEnabled("Script items", "Indicators", !1), UI.SetEnabled("Script items", "Side Indicators", !1), UI.SetEnabled("Script items", "Disable Autowall", !1), UI.SetEnabled("Script items", "X indicator", !1), UI.SetEnabled("Script items", "Y indicator", !1), UI.SetEnabled("Script items", "Anti-Crash", !1), menu.visibility(body, !1)), "Weapons" == e[i]) {
            for (i in UI.SetEnabled("Script items", "Weapon Group", !0), t) "Auto" == t[i] && (UI.SetEnabled("Script items", "Force Safety [scar]", !0), UI.SetEnabled("Script items", "Force Safety [awp]", !1), UI.SetEnabled("Script items", "Force Safety [scout]", !1), UI.SetEnabled("Script items", "Force Safety [heavy pistol]", !1), UI.SetEnabled("Script items", "Force Safety [pistol]", !1), UI.SetEnabled("Script items", "Prefer baim while DT [scar]", !0), UI.SetEnabled("Script items", "Prefer baim while DT [pistol]", !1)), "Awp" == t[i] && (UI.SetEnabled("Script items", "Force Safety [scar]", !1), UI.SetEnabled("Script items", "Force Safety [awp]", !0), UI.SetEnabled("Script items", "Force Safety [scout]", !1), UI.SetEnabled("Script items", "Force Safety [heavy pistol]", !1), UI.SetEnabled("Script items", "Force Safety [pistol]", !1), UI.SetEnabled("Script items", "Prefer baim while DT [scar]", !1), UI.SetEnabled("Script items", "Prefer baim while DT [pistol]", !1)), "Scout" == t[i] && (UI.SetEnabled("Script items", "Force Safety [scar]", !1), UI.SetEnabled("Script items", "Force Safety [awp]", !1), UI.SetEnabled("Script items", "Force Safety [scout]", !0), UI.SetEnabled("Script items", "Force Safety [heavy pistol]", !1), UI.SetEnabled("Script items", "Force Safety [pistol]", !1), UI.SetEnabled("Script items", "Prefer baim while DT [scar]", !1), UI.SetEnabled("Script items", "Prefer baim while DT [pistol]", !1)), "Heavy Pistol" == t[i] && (UI.SetEnabled("Script items", "Force Safety [scar]", !1), UI.SetEnabled("Script items", "Force Safety [awp]", !1), UI.SetEnabled("Script items", "Force Safety [scout]", !1), UI.SetEnabled("Script items", "Force Safety [heavy pistol]", !0), UI.SetEnabled("Script items", "Force Safety [pistol]", !1), UI.SetEnabled("Script items", "Prefer baim while DT [scar]", !1), UI.SetEnabled("Script items", "Prefer baim while DT [pistol]", !1)), "Pistol" == t[i] && (UI.SetEnabled("Script items", "Force Safety [scar]", !1), UI.SetEnabled("Script items", "Force Safety [awp]", !1), UI.SetEnabled("Script items", "Force Safety [scout]", !1), UI.SetEnabled("Script items", "Force Safety [heavy pistol]", !1), UI.SetEnabled("Script items", "Force Safety [pistol]", !0), UI.SetEnabled("Script items", "Prefer baim while DT [scar]", !1), UI.SetEnabled("Script items", "Prefer baim while DT [pistol]", !0));
            UI.SetEnabled("Script items", "Auto-Strafer fix", !1), UI.SetEnabled("Script items", "Override Fake-Lags", !1), UI.SetEnabled("Script items", "Send Limit", !1), UI.SetEnabled("Script items", "Choke Limit", !1), UI.SetEnabled("Script items", "Break Prediction", !1), UI.SetEnabled("Script items", "Enable Local Bullet tracers", !1), UI.SetEnabled("Script items", "Tracer color", !1), UI.SetEnabled("Script items", "Extended backtrack Key", !1), UI.SetEnabled("Script items", "History Chams on Extended", !1), UI.SetEnabled("Script items", "Revolver in air Hitchance", !1), UI.SetEnabled("Script items", "SCOUT in air Hitchance", !1), UI.SetEnabled("Script items", "Override Hitchane in Air", !1), UI.SetEnabled("Script items", "Freestand Key", !1), UI.SetEnabled("Script items", "Legit AA Key", !1), UI.SetEnabled("Script items", "Static Yaw on Key", !1), UI.SetEnabled("Script items", "Ideal Yaw Enable", !1), UI.SetEnabled("Script items", "Wait for On-shot key", !1), UI.SetEnabled("Script items", "Override DMG", !1), UI.SetEnabled("Script items", "Override DMG Key", !1), UI.SetEnabled("Script items", "DMG", !1), UI.SetEnabled("Script items", "Faster Double-tap", !1), UI.SetEnabled("Script items", "Rage bot fire logs", !1), UI.SetEnabled("Script items", "Aspect Ratio", !1), UI.SetEnabled("Script items", "Enable Autobuy", !1), UI.SetEnabled("Script items", "Autobuy", !1), UI.SetEnabled("Script items", "Indicators", !1), UI.SetEnabled("Script items", "Side Indicators", !1), UI.SetEnabled("Script items", "Disable Autowall", !1), UI.SetEnabled("Script items", "X indicator", !1), UI.SetEnabled("Script items", "Y indicator", !1), UI.SetEnabled("Script items", "Anti-Crash", !1), menu.visibility(body, !1)
        }
}
UI.AddSliderInt("                  ", 0, 0), Cheat.RegisterCallback("player_death", "onDeath"), Cheat.RegisterCallback("Draw", "onDraw1"), Cheat.RegisterCallback("bullet_impact", "onBulletImpact"), Cheat.RegisterCallback("CreateMove", "on_tick"), Cheat.RegisterCallback("Draw", "on_frame"), Cheat.RegisterCallback("player_connect_full", "reset"), Cheat.RegisterCallback("player_hurt", "on_player_hurt"), Cheat.RegisterCallback("CreateMove", "skins"), Global.RegisterCallback("CreateMove", "inairhc"), Cheat.RegisterCallback("FrameStageNotify", "aspectratio"), Cheat.RegisterCallback("round_start", "flagstart"), Cheat.RegisterCallback("CreateMove", "fakelagcm"), Cheat.RegisterCallback("round_end", "roundEnded"), Cheat.RegisterCallback("Draw", "onDraw"), Cheat.RegisterCallback("Draw", "preferbaim"), Cheat.RegisterCallback("item_purchase", "purchased"), Cheat.RegisterCallback("Draw", "strafe_fix_func"), Cheat.RegisterCallback("CreateMove", "FreestandonKeyCM"), Cheat.RegisterCallback("CreateMove", "PingKeyCM"), Cheat.RegisterCallback("CreateMove", "MagikKeyCm"), Cheat.RegisterCallback("weapon_fire", "on_weapon_fire"), Cheat.RegisterCallback("weapon_fire", "weapon_act"), Cheat.RegisterCallback("weapon_fire", "weapon_zoom"), Cheat.RegisterCallback("player_connect_full", "on_player_connect"), Cheat.RegisterCallback("CreateMove", "on_create_move"), Cheat.RegisterCallback("Draw", "MindamageOverrIde"), Cheat.RegisterCallback("Draw", "on_draw"), Cheat.RegisterCallback("Draw", "MenuStuff"), Cheat.RegisterCallback("ragebot_fire", "ragebotLogs"), Cheat.RegisterCallback("CreateMove", "spon"), Cheat.RegisterCallback("CreateMove", "Awall_Check"), Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE"), Cheat.RegisterCallback("Unload", "_TBC_UNLOAD"), Cheat.RegisterCallback("Draw", "_TAG"), Cheat.RegisterCallback("CreateMove", "AACm"), Cheat.RegisterCallback("Draw", "_DRAW"), Cheat.RegisterCallback("Draw", "SideIndicators");