var global_print = Global.Print, global_print_chat = Global.PrintChat, global_print_color = Global.PrintColor, global_register_callback = Global.RegisterCallback, global_execute_command = Global.ExecuteCommand, global_frame_stage = Global.FrameStage, global_tickcount = Global.Tickcount, global_tickrate = Global.Tickrate, global_tick_interval = Global.TickInterval, global_curtime = Global.Curtime, global_realtime = Global.Realtime, global_frametime = Global.Frametime, global_latency = Global.Latency, global_get_view_angles = Global.GetViewAngles, global_set_view_angles = Global.SetViewAngles, global_get_map_name = Global.GetMapName, global_is_key_pressed = Global.IsKeyPressed, global_get_screen_size = Global.GetScreenSize, global_get_cursor_position = Global.GetCursorPosition, global_play_sound = Global.PlaySound, global_play_microphone = Global.PlayMicrophone, global_stop_microphone = Global.StopMicrophone, global_get_username = Global.GetUsername, global_set_clan_tag = Global.SetClanTag, globals_tickcount = Globals.Tickcount, globals_tickrate = Globals.Tickrate, globals_tick_interval = Globals.TickInterval, globals_curtime = Globals.Curtime, globals_realtime = Globals.Realtime, globals_frametime = Globals.Frametime, sound_play = Sound.Play, sound_play_microphone = Sound.PlayMicrophone, sound_stop_microphone = Sound.StopMicrophone, cheat_get_username = Cheat.GetUsername, cheat_register_callback = cheat_register_callback = new Proxy(Cheat.RegisterCallback, {
        apply: function (CF7qrc2d, CF7qrc2d, Z3Zmcqg3) {
            switch (Z3Zmcqg3[0]) {
            case 'paint':
                Cheat.RegisterCallback('Draw', Z3Zmcqg3[1]);
                break;
            case 'create_move':
                Cheat.RegisterCallback('CreateMove', Z3Zmcqg3[1]);
                break;
            case 'fsn':
                Cheat.RegisterCallback('FrameStageNotify', Z3Zmcqg3[1]);
                break;
            default:
                Cheat.RegisterCallback(Z3Zmcqg3[0], Z3Zmcqg3[1]);
                break;
            }
        }
    }), cheat_override_damage = Cheat.ExecuteCommand, cheat_frame_stage = Cheat.FrameStage, cheat_print = Cheat.Print, cheat_print_chat = Cheat.PrintChat, cheat_print_color = Cheat.PrintColor, local_latency = Local.Latency, local_get_view_angles = Local.GetViewAngles, local_set_view_angles = Local.SetViewAngles, local_set_clan_tag = Local.SetClanTag, local_get_real_yaw = Local.GetRealYaw, local_get_fake_yaw = Local.GetFakeYaw, local_get_spread = Local.GetSpread, local_get_inaccuracy = Local.GetInaccuracy, world_get_map_name = World.GetMapName, world_get_server_string = World.GetServerString, input_get_cursor_position = Input.GetCursorPosition, input_is_key_pressed = Input.IsKeyPressed, render_string = Render.String, render_text_size = Render.TextSize, render_line = Render.Line, render_rect = Render.Rect, render_filled_rect = Render.FilledRect, render_gradient_rect = Render.GradientRect, render_circle = Render.Circle, render_filled_circle = Render.FilledCircle, render_polygon = Render.Polygon, render_world_to_screen = Render.WorldToScreen, render_add_font = Render.AddFont, render_find_font = Render.FindFont, render_string_custom = Render.StringCustom, render_textured_rect = Render.TexturedRect, render_add_texture = Render.AddTexture, render_text_size_custom = Render.TextSizeCustom, render_get_screen_size = Render.GetScreenSize, ui_get_value = UI.GetValue, ui_set_value = UI.SetValue, ui_add_checkbox = UI.AddCheckbox, ui_add_slider_int = UI.AddSliderInt, ui_add_slider_float = UI.AddSliderFloat, ui_add_hotkey = UI.AddHotkey, ui_add_label = UI.AddLabel, ui_add_dropdown = UI.AddDropdown, ui_add_multi_dropdown = UI.AddMultiDropdown, ui_add_color_picker = UI.AddColorPicker, ui_add_textbox = UI.AddTextbox, ui_set_enabled = UI.SetEnabled, ui_get_string = UI.GetString, ui_get_color = UI.GetColor, ui_set_color = UI.SetColor, ui_is_hotkey_active = UI.IsHotkeyActive, ui_toggle_hotkey = UI.ToggleHotkey, ui_is_menu_open = UI.IsMenuOpen, convar_get_int = Convar.GetInt, convar_set_int = Convar.SetInt, convar_get_float = Convar.GetFloat, convar_set_float = Convar.SetFloat, convar_get_string = Convar.GetString, convar_set_string = Convar.SetString, event_get_int = Event.GetInt, event_get_float = Event.GetFloat, event_get_string = Event.GetString, entity_get_entities = Entity.GetEntities, entity_get_entities_by_class_i_d = Entity.GetEntitiesByClassID, entity_get_players = Entity.GetPlayers, entity_get_enemies = Entity.GetEnemies, entity_get_teammates = Entity.GetTeammates, entity_get_local_player = Entity.GetLocalPlayer, entity_get_game_rules_proxy = Entity.GetGameRulesProxy, entity_get_entity_from_user_i_d = Entity.GetEntityFromUserID, entity_is_teammate = Entity.IsTeammate, entity_is_enemy = Entity.IsEnemy, entity_is_bot = Entity.IsBot, entity_is_local_player = Entity.IsLocalPlayer, entity_is_valid = Entity.IsValid, entity_is_alive = Entity.IsAlive, entity_is_dormant = Entity.IsDormant, entity_get_class_i_d = Entity.GetClassID, entity_get_class_name = Entity.GetClassName, entity_get_name = Entity.GetName, entity_get_weapon = Entity.GetWeapon, entity_get_weapons = Entity.GetWeapons, entity_get_render_origin = Entity.GetRenderOrigin, entity_get_prop = Entity.GetProp, entity_set_prop = Entity.SetProp, entity_get_hitbox_position = Entity.GetHitboxPosition, entity_get_eye_position = Entity.GetEyePosition, trace_line = Trace.Line, trace_bullet = Trace.Bullet, usercmd_set_movement = UserCMD.SetMovement, usercmd_get_movement = UserCMD.GetMovement, usercmd_set_angles = UserCMD.SetAngles, usercmd_force_jump = UserCMD.ForceJump, usercmd_force_crouch = UserCMD.ForceCrouch, antiaim_get_override = AntiAim.GetOverride, antiaim_set_override = AntiAim.SetOverride, antiaim_set_real_offset = AntiAim.SetRealOffset, antiaim_set_fake_offset = AntiAim.SetFakeOffset, antiaim_set_l_b_y_offset = AntiAim.SetLBYOffset, exploit_get_charge = Exploit.GetCharge, exploit_recharge = Exploit.Recharge, exploit_disable_recharge = Exploit.DisableRecharge, exploit_enable_recharge = Exploit.EnableRecharge, ragebot_override_hitchance = Ragebot.OverrideHitchance, ragebot_override_accuracy_boost = Ragebot['OverrideAccuracyBoost'], ragebot_override_multipoint_scale = Ragebot['OverrideMultipointScale'], ragebot_force_safety = Ragebot.ForceSafety;
UI.AddCheckbox('HvH Essentials');
UI.AddHotkey('Dodge bruteforce');
UI.AddHotkey('Wait for on shot backtrack');
UI.AddCheckbox('Reversed freestanding');
UI.AddCheckbox('Safe point on limbs');
UI.AddCheckbox('Ragebot fire logs');
UI.AddCheckbox('Instant doubletap');
UI.AddHotkey('Override minimum dmg key');
UI.AddSliderInt('Minimum damage', 0, 130);
UI.AddCheckbox('Indicators');
UI.AddCheckbox('Draw HEAD/BAIM flags');
UI.AddCheckbox('Draw SAFE flags');
UI.AddCheckbox('Draw predicted damage');
UI.AddCheckbox('Inverter arrows');
UI.AddColorPicker('Inverter arrows color');
UI.SetColor('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color', [
    255,
    165,
    0,
    230
]);
UI.AddMultiDropdown('Features to display', [
    'Dodge bruteforce',
    'Doubletap',
    'Hide shots',
    'Safe point',
    'Override min dmg'
]);
UI.AddCheckbox('Enable head/baim conditions');
UI.AddCheckbox('Predict doubletap damage');
UI.AddMultiDropdown('Force HEAD conditions', [
    'Inaccurate desync',
    'Target is in air',
    'Target crouching (T side)',
    'Shot'
]);
UI.AddSliderInt('Inaccurate desync delta', 0, 58);
UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta', 38);
UI.AddMultiDropdown('Force BAIM conditions', [
    'If lethal',
    'If slow walking',
    'If standing',
    'If target in air'
]);
UI.AddMultiDropdown('Force SAFEPOINT conditions', [
    'If lethal',
    'If slow walking',
    'If standing',
    'If target in air',
    'Crouching'
]);
UI.AddCheckbox('Save FPS');
UI.AddCheckbox('Use highest possible damage');
UI.AddCheckbox('Jump scout/revolver hitchance');
UI.AddSliderInt('Hitchance', 0, 100);
var firedThisTick = [];
var storedShotTime = [];
var onShotTargets = [];
var font = null;
var fontFlags = 0;
var shouldDisable;
var shouldDisableOverride;
var info = [];
var safeTargets = [];
var dynamicDamage = 0;
var color = [
    255,
    0,
    0,
    255
];
var conditionFlags = 'webster|awp112|dr98867|lukeyour|makeitbig|alynzew|finny3433|deity|zaldy|quakehvh|shifto|bgbenjamin1|dylanc|medusaax|sadenjmith|itzniico|gvk27|kyle33223|jakubezz|577777|skeletonimproved|r4xer1|lizauwu|bditt|xvasu|impecunity|jvvv|soulawaken1103|melonbear|nadindi|gregorybruh|theshy112|dinkelberg|tudorcoste2|bbhvhh|raude|tayloul0l|avrx|manofgod|wkxd16|warpedirish|buerv|d34nwyn|umiranhaa|ryanthepanda|greencobra|mercymamba|lee0181|iluckbr|simian666|akulla|gab|vatrax|hvhkiller|zmywakhvh|bigi|hawiz|thegeneralguy|zusekiller|krajewski12|1martin|eugek3|always321312312|kden|deadaf|godless|parasitisch|jhee|snnick|sui|limit|adr1an|idontknowho|nouisbae|snooze|kronzy|nickv3|signal|woofcsgo|grumpy1|kroshiou|yoni|sbmvn|billy22324|stepinprod|kaytusha|osku|jweilage|preclik|qwertygamer1227|snipi|drahokam|stone|xello|arus|ash28604|lukazel|edwardfly|nmthegoat|c0br4|anon990|tinted|wthz5240|kezycs|dfergse|loose|qswain|bogdan56|wadaspro|sleeker|cazzzper|freddygg|mazik|xen|lordbyron|dxgamerwar890|fer666|mtz1337|kornel|guu|testingxd|kroko|xchange95|manelevyc|actuallyakari|narji|masuod7788|binder|user3860|kulakovsky|chang321|xyro|razvanel|vthiirsty|psx8m|cyrex212|pnda|lighting1|cy1026|giabach123|dennisman98|kuyarebel|aldix|primx2|nocster|dillan|nametam|playingonxbox360|hydration|xiangyu940111|jilm|whyireland|tappingskeet|yezus|qfreed|umbludeghizat|teehee|gflowz1337|zepzy|mircea001|houdinii|undercoversuperstar|taifnxd|weariful1|deeside|whtchad|coolman0857|mrbadii|mrbedii|oxy|color123|andreimanevra|imnotthatgay|stefan2223|mariot12|death2002|siegfried|synergynn|bestonetapuserna|iownapkz|krafty|borohvh|takanashi|thebgmamma|milletporridge|upset|aliancegfx|mom|blaine|zahx|canollies|omegumino|blameme|consensualsocks|yakk|shittybacon|jinxycat|dylan1k|skeletonar|junelee0303|nipo|kinknightmare|antoniodetto|fuushila|l4wless174|sneaky|zyo|riot|julayisandy|bira|donn|peagah|seanlovespp|noname2020|gubbster3|shinehvh2|renxoffciel|top1btw|allpureapples|hifumi918|exepert|saithhvh|avora|ohtwinki|smol|aaronb1|frostdk|bigyoshi|rey228|herotv1|katanazero|tyler48|loganpls|ruuvimeisseli|cadsbasher|xan|sam89928|hayaiet|rymo|blake|sbkm2b|izodiac|gbriel5666|omni|flondenmachen|aprendiz|jondms|dwarfyfart|swooped|blurry|reyqz|pvnoname|baimqq|nakinami|loji|itzguga|utterhvh|oneshot|lilgangbank|kijanaxas|alfonsiniuwu|yato0113|banshee|i3709432|grimey6393|pasi35260|mrpoop|pdizzle|yukihvh|haxer|danielbro2020|dwg132|astral321|trl420|xbarbarionx|hackensch|vicstyl3|softness|ionutst1|jeppe|kiroshu|rayzen6969|khmora|fearmeiru|0000|jskoke06|yeezymeister|narts|creposbeleaua|tylerhvh|instantramen|socks|wimter|mrhackerman404|vladosky|shibevevo|wizard84|kang|dukk1337|bi93|andresxphantom|hardcore|fl3xgod|sckinsey|leech6969|liufo|mvcieqq|ethylene|naitang|b4stion|dylanplaysmc|n1oss|hilley|belmondo|rezox|jooey|tatsuo|m1nute|dankmeme|willtee18|11111111|tapir|caenito|ieuanruskiman|sweg|doozie|theoofdog|arska1|yeeto|nomula|nomula|boigestboig209|hoodgangster1|toesuckertom|skano|3608456807|gaslight|izmgi|braazy|cartierj|lukej1129|aurimaz|lolcats39|freezin|jimmydeansbeans|wannahvh|dwg133|winer|rushmyhp|terrywang0303|falcon8182|xasmi|saggynuggets|danispace|some0ne|noblebitch|renegade454|gimmy|03k|aarontkong|eloxez781|hexor|phoca|b1scoito1337|matteosalvini|yufaan8|reazon8808|kiragod|ondrills|botralph|memeyy|robbery|xonu|falcon|kiragod|osleya|mjr|kamaveli|zeddy|beam|chase|pedrou1512|beerus|gamelocked|noxqu|zecks|cr37zu|fallenautistic|joker88|pshnn|inhonia|peek39|xrvsgd|nugweasle|x1x|badxo|randomhacks|idkyet|picodegallo|karlssn|d8rio|mischievious|uwu|encodedloss|johndough|leivo22|bgtbelcher|sergiii|hexci|ratnikoffz1337|wizardnalis|kvnc|darocze|digital2k18|thehash|mag7swag7|austinhemmer|space303|peachy3|tvojamamka58|relax|shwaggy|gradient|xmanic|nimpey|wahab|thailol123|darth|y258059|pabwo|espxyz';
onShotTargets = conditionFlags.split('|');
function normalizeYaw(KGmvlada) {
    while (KGmvlada > 180)
        KGmvlada = KGmvlada - 360;
    while (KGmvlada < -180)
        KGmvlada = KGmvlada + 360;
    return KGmvlada;
}
function getDropdownValue(YD2qbbsq, GQtxkpxn) {
    var UDu2xk2y = 1 << GQtxkpxn;
    return YD2qbbsq & UDu2xk2y ? true : false;
}
function setDropdownValue(USshc9cv, QKrv5bkq, Q7Vhhmwz) {
    var UJfxs77m = 1 << QKrv5bkq;
    return Q7Vhhmwz ? USshc9cv | UJfxs77m : USshc9cv & ~UJfxs77m;
}
function GetActiveIndicators() {
    var SD8jdhml = 0;
    var RLsgrdcz = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display');
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap') && getDropdownValue(RLsgrdcz, 1))
        SD8jdhml += 1;
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots') && getDropdownValue(RLsgrdcz, 2))
        SD8jdhml += 1;
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && getDropdownValue(RLsgrdcz, 0))
        SD8jdhml += 1;
    if (UI.IsHotkeyActive('Rage', 'General', 'Force safe point') && getDropdownValue(RLsgrdcz, 3))
        SD8jdhml += 1;
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key') && getDropdownValue(RLsgrdcz, 4))
        SD8jdhml += 1;
    return SD8jdhml;
}
function radiansToDegrees(QTychczh) {
    var NFmhvu6e = Math.PI;
    return QTychczh * (180 / NFmhvu6e);
}
function convertMatrix(gqTxkpxn) {
    return gqTxkpxn.split('').reduce(function (kgMvlada, qtYchczh) {
        kgMvlada = (kgMvlada << 5) - kgMvlada + qtYchczh.charCodeAt(0);
        return kgMvlada & kgMvlada;
    }, 0);
}
function worldToScreen(usShc9cv, z3zMcqg3) {
    if (usShc9cv == 0 && z3zMcqg3 == 0)
        return 0;
    return radiansToDegrees(Math.atan2(z3zMcqg3, usShc9cv));
}
function DodgeBruteforce() {
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce')) {
        shouldDisableOverride = true;
        AntiAim.SetOverride(1);
        var ujFxs77m = -9;
        var sd8Jdhml = 0;
        var qkRv5bkq = true;
        var cf7Qrc2d = 30;
        var yd2Qbbsq = 17;
        var q7vHhmwz = qkRv5bkq ? cf7Qrc2d : cf7Qrc2d * 2;
        AntiAim.SetFakeOffset(sd8Jdhml);
        if (ujFxs77m > 0) {
            AntiAim.SetRealOffset(sd8Jdhml - ujFxs77m + q7vHhmwz);
            if (ujFxs77m < yd2Qbbsq) {
                yd2Qbbsq = ujFxs77m;
            }
            qkRv5bkq ? AntiAim.SetLBYOffset(sd8Jdhml - yd2Qbbsq) : AntiAim.SetLBYOffset(sd8Jdhml + ujFxs77m - yd2Qbbsq * 2);
        } else {
            if (ujFxs77m > yd2Qbbsq) {
                yd2Qbbsq = ujFxs77m;
            }
            AntiAim.SetRealOffset(sd8Jdhml - ujFxs77m - q7vHhmwz);
            qkRv5bkq ? AntiAim.SetLBYOffset(sd8Jdhml + yd2Qbbsq) : AntiAim.SetLBYOffset(sd8Jdhml + ujFxs77m + yd2Qbbsq * 2);
        }
    }
    if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && shouldDisableOverride == true) {
        shouldDisableOverride = false;
        AntiAim.SetOverride(0);
    }
}
function GetMaxDesync(QkRv5bkq) {
    var KgMvlada = Entity.GetProp(QkRv5bkq, 'CBasePlayer', 'm_vecVelocity[0]');
    var NfMhvu6e = Math.sqrt(KgMvlada[0] * KgMvlada[0] + KgMvlada[1] * KgMvlada[1]);
    return 58 - 58 * NfMhvu6e / 580;
}
function IsInAir(RlVzdwyq) {
    var UjFxs77m = Entity.GetProp(RlVzdwyq, 'CBasePlayer', 'm_fFlags');
    if (!(UjFxs77m & 1 << 0) && !(UjFxs77m & 1 << 18))
        return true;
    else
        return false;
}
function IsCrouchTerrorist(Yd2Qbbsq) {
    var Q7vHhmwz = Entity.GetProp(Yd2Qbbsq, 'CBasePlayer', 'm_iTeamNum');
    var QtYchczh = Entity.GetProp(Yd2Qbbsq, 'CBasePlayer', 'm_fFlags');
    if (Q7vHhmwz == 2 && QtYchczh & 1 << 1)
        return true;
    else
        return false;
}
function IsCrouch(Sd8Jdhml) {
    var RlSgrdcz = Entity.GetProp(Sd8Jdhml, 'CBasePlayer', 'm_fFlags');
    if (RlSgrdcz & 1 << 1)
        return true;
    else
        return false;
}
function GetLocalPlayerWeaponCategory() {
    var NxVxzhnf = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    switch (NxVxzhnf) {
    case 'ssg 08':
        return 'SCOUT';
        break;
    case 'desert eagle':
    case 'r8 revolver':
        return 'HEAVY PISTOL';
        break;
    case 'scar 20':
    case 'g3sg1':
        return 'AUTOSNIPER';
        break;
    case 'awp':
        return 'AWP';
        break;
    default:
        return 'PISTOL';
        break;
    }
}
function GetClosestEnemyToCrosshair() {
    var AqM2hlen = Global.GetScreenSize();
    var UdU2xk2y = -1;
    localPlayer = Entity.GetLocalPlayer();
    localPlayerAlive = Entity.IsAlive(localPlayer);
    if (!localPlayer)
        return;
    if (!localPlayerAlive)
        return;
    localPlayerWeapon = Entity.GetName(Entity.GetWeapon(localPlayer));
    enemiesArr = Entity.GetEnemies();
    if (!enemiesArr)
        return;
    var UsShc9cv = 180;
    var GqTxkpxn = Entity.GetProp(localPlayer, 'CBaseEntity', 'm_vecOrigin');
    var Z3zMcqg3 = Global.GetViewAngles();
    for (var yD2Qbbsq = 0; yD2Qbbsq < enemiesArr.length; yD2Qbbsq++) {
        if (!Entity.IsAlive(enemiesArr[yD2Qbbsq]))
            continue;
        var sD8Jdhml = Entity.GetProp(enemiesArr[yD2Qbbsq], 'CBaseEntity', 'm_vecOrigin');
        var q7VHhmwz = Math.abs(normalizeYaw(worldToScreen(GqTxkpxn[0] - sD8Jdhml[0], GqTxkpxn[1] - sD8Jdhml[1]) - Z3zMcqg3[1] + 180));
        if (q7VHhmwz < UsShc9cv) {
            UsShc9cv = q7VHhmwz;
            UdU2xk2y = enemiesArr[yD2Qbbsq];
        }
    }
    return UdU2xk2y;
}
function SetHitchanceInAir() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Jump scout/revolver hitchance'))
        return;
    var kGMvlada = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (kGMvlada != 'ssg 08' && kGMvlada != 'r8 revolver')
        return;
    var uDU2xk2y = Entity.GetProp(Entity.GetLocalPlayer(), 'CBasePlayer', 'm_fFlags');
    if (!(uDU2xk2y & 1 << 0) && !(uDU2xk2y & 1 << 18)) {
        target = Ragebot.GetTarget();
        value = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Hitchance');
        Ragebot.ForceTargetHitchance(target, value);
    }
}
function ExtrapolateTick(aQM2hlen) {
    var qTYchczh = Entity.GetLocalPlayer();
    var qKRv5bkq = Entity.GetHitboxPosition(qTYchczh, 0);
    var uJFxs77m = Entity.GetProp(qTYchczh, 'CBasePlayer', 'm_vecVelocity[0]');
    var uSShc9cv = [];
    uSShc9cv[0] = qKRv5bkq[0] + uJFxs77m[0] * Globals.TickInterval() * aQM2hlen;
    uSShc9cv[1] = qKRv5bkq[1] + uJFxs77m[1] * Globals.TickInterval() * aQM2hlen;
    uSShc9cv[2] = qKRv5bkq[2] + uJFxs77m[2] * Globals.TickInterval() * aQM2hlen;
    return uSShc9cv;
}
function IsLethal(gQTxkpxn) {
    var nXVxzhnf = Entity.GetProp(gQTxkpxn, 'CBasePlayer', 'm_iHealth');
    pelvis_pos = Entity.GetHitboxPosition(gQTxkpxn, 2);
    body_pos = Entity.GetHitboxPosition(gQTxkpxn, 3);
    thorax_pos = Entity.GetHitboxPosition(gQTxkpxn, 4);
    var z3ZMcqg3 = [
        0,
        -1
    ];
    var rLSgrdcz = [
        0,
        -1
    ];
    var nFMhvu6e = [
        0,
        -1
    ];
    var QKRv5bkq = [
        0,
        -1
    ];
    result_thorax = Trace.Bullet(Entity.GetLocalPlayer(), gQTxkpxn, Entity.GetEyePosition(Entity.GetLocalPlayer()), thorax_pos);
    if (result_thorax[1] >= nXVxzhnf)
        return true;
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        rLSgrdcz = Trace.Bullet(Entity.GetLocalPlayer(), gQTxkpxn, Entity.GetEyePosition(Entity.GetLocalPlayer()), pelvis_pos);
        z3ZMcqg3 = Trace.Bullet(Entity.GetLocalPlayer(), gQTxkpxn, Entity.GetEyePosition(Entity.GetLocalPlayer()), body_pos);
        if (rLSgrdcz[1] >= nXVxzhnf)
            return true;
        if (z3ZMcqg3[1] >= nXVxzhnf)
            return true;
    }
    result_thorax_extrapolated = Trace.Bullet(Entity.GetLocalPlayer(), gQTxkpxn, ExtrapolateTick(20), thorax_pos);
    if (result_thorax_extrapolated[1] >= nXVxzhnf) {
        Ragebot.ForceTargetSafety(gQTxkpxn);
        return true;
    }
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        QKRv5bkq = Trace.Bullet(Entity.GetLocalPlayer(), gQTxkpxn, ExtrapolateTick(25), pelvis_pos);
        nFMhvu6e = Trace.Bullet(Entity.GetLocalPlayer(), gQTxkpxn, ExtrapolateTick(25), body_pos);
        if (QKRv5bkq[1] >= nXVxzhnf)
            return true;
        if (nFMhvu6e[1] >= nXVxzhnf)
            return true;
    }
    return false;
}
function IsExploitCharged() {
    if (Exploit.GetCharge() == 1)
        return true;
    return false;
}
function AttemptTwoShotKill(UDU2xk2y) {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Predict doubletap damage'))
        return false;
    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck'))
        return false;
    var KGMvlada = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (KGMvlada != 'scar 20' && KGMvlada != 'g3sg1')
        return false;
    if (!UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap'))
        return false;
    Ragebot.ForceHitboxSafety(0);
    var YD2Qbbsq = Entity.GetProp(UDU2xk2y, 'CBasePlayer', 'm_iHealth');
    var NXVxzhnf = GetClosestEnemyToCrosshair();
    pelvis_pos = Entity.GetHitboxPosition(UDU2xk2y, 2);
    body_pos = Entity.GetHitboxPosition(UDU2xk2y, 3);
    thorax_pos = Entity.GetHitboxPosition(UDU2xk2y, 4);
    var RLSgrdcz = [
        0,
        -1
    ];
    var AQM2hlen = [
        0,
        -1
    ];
    var Q7VHhmwz = [
        0,
        -1
    ];
    var Z3ZMcqg3 = [
        0,
        -1
    ];
    result_thorax = Trace.Bullet(Entity.GetLocalPlayer(), UDU2xk2y, Entity.GetEyePosition(Entity.GetLocalPlayer()), thorax_pos);
    if (UDU2xk2y = NXVxzhnf)
        dynamicDamage = result_thorax[1];
    if (result_thorax[1] * 2 >= YD2Qbbsq && IsExploitCharged() == true) {
        Ragebot['ForceTargetMinimumDamage'](UDU2xk2y, YD2Qbbsq / 2 + 1);
        return true;
    }
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        AQM2hlen = Trace.Bullet(Entity.GetLocalPlayer(), UDU2xk2y, Entity.GetEyePosition(Entity.GetLocalPlayer()), pelvis_pos);
        RLSgrdcz = Trace.Bullet(Entity.GetLocalPlayer(), UDU2xk2y, Entity.GetEyePosition(Entity.GetLocalPlayer()), body_pos);
        if (UDU2xk2y = NXVxzhnf)
            dynamicDamage = AQM2hlen[1];
        if (AQM2hlen[1] * 2 >= YD2Qbbsq && IsExploitCharged() == true) {
            Ragebot['ForceTargetMinimumDamage'](UDU2xk2y, YD2Qbbsq / 2 + 1);
            return true;
        }
        if (UDU2xk2y = NXVxzhnf)
            dynamicDamage = RLSgrdcz[1];
        if (RLSgrdcz[1] * 2 >= YD2Qbbsq && IsExploitCharged() == true) {
            Ragebot['ForceTargetMinimumDamage'](UDU2xk2y, YD2Qbbsq / 2 + 1);
            return true;
        }
    }
    result_thorax_extrapolated = Trace.Bullet(Entity.GetLocalPlayer(), UDU2xk2y, ExtrapolateTick(15), thorax_pos);
    if (UDU2xk2y = NXVxzhnf)
        dynamicDamage = result_thorax_extrapolated[1];
    if (result_thorax_extrapolated[1] * 2 >= YD2Qbbsq && IsExploitCharged() == true) {
        Ragebot['ForceTargetMinimumDamage'](UDU2xk2y, YD2Qbbsq / 2 + 1);
        return true;
    }
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        Z3ZMcqg3 = Trace.Bullet(Entity.GetLocalPlayer(), UDU2xk2y, ExtrapolateTick(25), pelvis_pos);
        Q7VHhmwz = Trace.Bullet(Entity.GetLocalPlayer(), UDU2xk2y, ExtrapolateTick(25), body_pos);
        if (UDU2xk2y = NXVxzhnf)
            dynamicDamage = Z3ZMcqg3[1];
        if (Z3ZMcqg3[1] * 2 >= YD2Qbbsq && IsExploitCharged() == true) {
            Ragebot['ForceTargetMinimumDamage'](UDU2xk2y, YD2Qbbsq / 2 + 1);
            return true;
        }
        if (UDU2xk2y = NXVxzhnf)
            dynamicDamage = Q7VHhmwz[1];
        if (Q7VHhmwz[1] * 2 >= YD2Qbbsq && IsExploitCharged() == true) {
            Ragebot['ForceTargetMinimumDamage'](UDU2xk2y, YD2Qbbsq / 2 + 1);
            return true;
        }
    }
    dynamicDamage = 0;
}
function DrawDynamicDamage() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Draw predicted damage'))
        return;
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Predict doubletap damage'))
        return;
    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck'))
        return;
    var CF7Qrc2d = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (CF7Qrc2d != 'scar 20' && CF7Qrc2d != 'g3sg1')
        return;
    if (!UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap'))
        return;
    if (IsInAir(Entity.GetLocalPlayer()))
        return;
    var QTYchczh = Entity.GetLocalPlayer();
    var SD8Jdhml = Entity.GetRenderOrigin(QTYchczh);
    var GQTxkpxn = Entity.GetProp(QTYchczh, 'CBasePlayer', 'm_vecVelocity[0]');
    var qtyChczh = 999;
    var kgmVlada = GetClosestEnemyToCrosshair();
    if (Entity.IsValid(kgmVlada) && Entity.IsAlive(kgmVlada) && !Entity.IsDormant(kgmVlada))
        qtyChczh = Entity.GetProp(kgmVlada, 'CBasePlayer', 'm_iHealth');
    var ujfXs77m = [];
    ujfXs77m[0] = SD8Jdhml[0] + GQTxkpxn[0] * Globals.TickInterval() * 15;
    ujfXs77m[1] = SD8Jdhml[1] + GQTxkpxn[1] * Globals.TickInterval() * 15;
    ujfXs77m[2] = SD8Jdhml[2] + GQTxkpxn[2] * Globals.TickInterval() * 15;
    var cf7qRc2d = Render.WorldToScreen(ujfXs77m);
    if (dynamicDamage >= qtyChczh / 2)
        color = [
            0,
            255,
            0,
            255
        ];
    else
        color = [
            255,
            0,
            0,
            255
        ];
    Render.Circle(cf7qRc2d[0], cf7qRc2d[1], 5, [
        255,
        255,
        255,
        255
    ]);
    Render.String(cf7qRc2d[0], cf7qRc2d[1] - 30, 1, '' + dynamicDamage, color, 0);
}
function IsStanding(aqm2Hlen) {
    var q7vhHmwz = Entity.GetProp(aqm2Hlen, 'CBasePlayer', 'm_vecVelocity[0]');
    var nxvXzhnf = Math.sqrt(q7vhHmwz[0] * q7vhHmwz[0] + q7vhHmwz[1] * q7vhHmwz[1]);
    if (nxvXzhnf <= 5)
        return true;
    else
        return false;
}
function IsSlowWalking(rlsGrdcz) {
    var qkrV5bkq = Entity.GetProp(rlsGrdcz, 'CBasePlayer', 'm_vecVelocity[0]');
    var z3zmCqg3 = Math.sqrt(qkrV5bkq[0] * qkrV5bkq[0] + qkrV5bkq[1] * qkrV5bkq[1]);
    if (z3zmCqg3 >= 10 && z3zmCqg3 <= 85)
        return true;
    else
        return false;
}
function ForceHead(nfmHvu6e) {
    DisableBaim();
    var ussHc9cv = Entity.GetProp(nfmHvu6e, 'CBasePlayer', 'm_iHealth');
    head_pos = Entity.GetHitboxPosition(nfmHvu6e, 0);
    result_head = Trace.Bullet(Entity.GetLocalPlayer(), nfmHvu6e, Entity.GetEyePosition(Entity.GetLocalPlayer()), head_pos);
    if (result_head[1] > 0 && result_head[1] >= UI.GetValue('Rage', GetLocalPlayerWeaponCategory(), 'Targeting', 'Minimum damage')) {
        Ragebot['ForceTargetMinimumDamage'](nfmHvu6e, result_head[1]);
    }
}
function AimForHeadIfShooting() {
}
function ForceBaim(sd8jDhml) {
    if (!UI.IsHotkeyActive('Rage', 'GENERAL', 'General', 'Force body aim')) {
        UI.ToggleHotkey('Rage', 'GENERAL', 'General', 'Force body aim');
    }
    Ragebot.ForceHitboxSafety(0);
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Use highest possible damage'))
        return;
    var gqtXkpxn = Entity.GetProp(sd8jDhml, 'CBasePlayer', 'm_iHealth');
    pelvis_pos = Entity.GetHitboxPosition(sd8jDhml, 2);
    body_pos = Entity.GetHitboxPosition(sd8jDhml, 3);
    thorax_pos = Entity.GetHitboxPosition(sd8jDhml, 4);
    var rlvZdwyq = [
        0,
        -1
    ];
    var yd2qBbsq = [
        0,
        -1
    ];
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        yd2qBbsq = Trace.Bullet(Entity.GetLocalPlayer(), sd8jDhml, Entity.GetEyePosition(Entity.GetLocalPlayer()), pelvis_pos);
        rlvZdwyq = Trace.Bullet(Entity.GetLocalPlayer(), sd8jDhml, Entity.GetEyePosition(Entity.GetLocalPlayer()), body_pos);
    }
    var NfmHvu6e = Trace.Bullet(Entity.GetLocalPlayer(), sd8jDhml, Entity.GetEyePosition(Entity.GetLocalPlayer()), thorax_pos);
    var Sd8jDhml = Math.max(yd2qBbsq[1], rlvZdwyq[1], NfmHvu6e[1]);
    if (gqtXkpxn > Sd8jDhml) {
        Ragebot['ForceTargetMinimumDamage'](sd8jDhml, Sd8jDhml);
    } else {
        Ragebot['ForceTargetMinimumDamage'](sd8jDhml, gqtXkpxn);
    }
}
function DisableBaim() {
    if (UI.IsHotkeyActive('Rage', 'GENERAL', 'Force body aim'))
        UI.ToggleHotkey('Rage', 'GENERAL', 'Force body aim');
}
function WaitForOnShot() {
    var RlvZdwyq = Entity.GetEnemies();
    for (i = 0; i < RlvZdwyq.length; i++) {
        if (!Entity.IsValid(RlvZdwyq[i]))
            continue;
        if (!Entity.IsAlive(RlvZdwyq[i]))
            continue;
        if (Entity.IsDormant(RlvZdwyq[i]))
            continue;
        var Yd2qBbsq = Entity.GetWeapon(RlvZdwyq[i]);
        var QtyChczh = Entity.GetProp(Yd2qBbsq, 'CWeaponCSBase', 'm_fLastShotTime');
        if (QtyChczh != storedShotTime[RlvZdwyq[i]]) {
            firedThisTick[RlvZdwyq[i]] = true;
            storedShotTime[RlvZdwyq[i]] = QtyChczh;
        } else {
            firedThisTick[RlvZdwyq[i]] = false;
        }
        if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Wait for on shot backtrack'))
            return;
        if (firedThisTick[RlvZdwyq[i]] == true) {
            ForceHead(RlvZdwyq[i]);
        } else {
            Ragebot.IgnoreTarget(RlvZdwyq[i]);
            info[RlvZdwyq[i]] = 'WAITING';
        }
    }
}
function deg2rad(KgmVlada) {
    return KgmVlada * Math.PI / 180;
}
function angle_to_vec(RlsGrdcz, NxvXzhnf) {
    var Udu2Xk2y = deg2rad(RlsGrdcz);
    var Z3zmCqg3 = deg2rad(NxvXzhnf);
    var UssHc9cv = Math.sin(Udu2Xk2y);
    var Cf7qRc2d = Math.cos(Udu2Xk2y);
    var uJfXs77m = Math.sin(Z3zmCqg3);
    var uDu2Xk2y = Math.cos(Z3zmCqg3);
    return [
        Cf7qRc2d * uDu2Xk2y,
        Cf7qRc2d * uJfXs77m,
        -UssHc9cv
    ];
}
function trace(kGmVlada, aQm2Hlen) {
    var q7VhHmwz = angle_to_vec(aQm2Hlen[0], aQm2Hlen[1]);
    var sD8jDhml = Entity.GetRenderOrigin(kGmVlada);
    sD8jDhml[2] += 50;
    var nFmHvu6e = [
        sD8jDhml[0] + q7VhHmwz[0] * 8192,
        sD8jDhml[1] + q7VhHmwz[1] * 8192,
        sD8jDhml[2] + q7VhHmwz[2] * 8192
    ];
    var nXvXzhnf = Trace.Line(kGmVlada, sD8jDhml, nFmHvu6e);
    if (nXvXzhnf[1] == 1)
        return;
    nFmHvu6e = [
        sD8jDhml[0] + q7VhHmwz[0] * nXvXzhnf[1] * 8192,
        sD8jDhml[1] + q7VhHmwz[1] * nXvXzhnf[1] * 8192,
        sD8jDhml[2] + q7VhHmwz[2] * nXvXzhnf[1] * 8192
    ];
    var rLsGrdcz = Math.sqrt((sD8jDhml[0] - nFmHvu6e[0]) * (sD8jDhml[0] - nFmHvu6e[0]) + (sD8jDhml[1] - nFmHvu6e[1]) * (sD8jDhml[1] - nFmHvu6e[1]) + (sD8jDhml[2] - nFmHvu6e[2]) * (sD8jDhml[2] - nFmHvu6e[2]));
    sD8jDhml = Render.WorldToScreen(sD8jDhml);
    nFmHvu6e = Render.WorldToScreen(nFmHvu6e);
    if (nFmHvu6e[2] != 1 || sD8jDhml[2] != 1)
        return;
    return rLsGrdcz;
}
function ReversedFreestanding() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Reversed freestanding'))
        return;
    var rLvZdwyq = Entity.GetLocalPlayer();
    if (Entity.IsValid(rLvZdwyq)) {
        var z3ZmCqg3 = Entity.GetEyePosition(rLvZdwyq);
        left_distance = trace(rLvZdwyq, [
            0,
            z3ZmCqg3[1] - 33
        ]);
        right_distance = trace(rLvZdwyq, [
            0,
            z3ZmCqg3[1] + 33
        ]);
        if (left_distance > right_distance) {
            if (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter'))
                UI.ToggleHotkey('Anti-Aim', 'Fake angles', 'Inverter');
        }
        if (right_distance > left_distance) {
            if (!UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter'))
                UI.ToggleHotkey('Anti-Aim', 'Fake angles', 'Inverter');
        }
    }
}
function DrawToggles() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators'))
        return;
    var qKrV5bkq = Global.GetScreenSize();
    var yD2qBbsq;
    yD2qBbsq = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color');
    if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows'))
        if (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter')) {
            Render.Polygon([
                [
                    qKrV5bkq[0] / 2 - 49,
                    qKrV5bkq[1] / 2 + 9
                ],
                [
                    qKrV5bkq[0] / 2 - 65,
                    qKrV5bkq[1] / 2
                ],
                [
                    qKrV5bkq[0] / 2 - 49,
                    qKrV5bkq[1] / 2 - 9
                ]
            ], [
                0,
                0,
                0,
                80
            ]);
            Render.Polygon([
                [
                    qKrV5bkq[0] / 2 + 49,
                    qKrV5bkq[1] / 2 - 9
                ],
                [
                    qKrV5bkq[0] / 2 + 65,
                    qKrV5bkq[1] / 2
                ],
                [
                    qKrV5bkq[0] / 2 + 49,
                    qKrV5bkq[1] / 2 + 9
                ]
            ], yD2qBbsq);
        } else {
            Render.Polygon([
                [
                    qKrV5bkq[0] / 2 - 49,
                    qKrV5bkq[1] / 2 + 9
                ],
                [
                    qKrV5bkq[0] / 2 - 65,
                    qKrV5bkq[1] / 2
                ],
                [
                    qKrV5bkq[0] / 2 - 49,
                    qKrV5bkq[1] / 2 - 9
                ]
            ], yD2qBbsq);
            Render.Polygon([
                [
                    qKrV5bkq[0] / 2 + 49,
                    qKrV5bkq[1] / 2 - 9
                ],
                [
                    qKrV5bkq[0] / 2 + 65,
                    qKrV5bkq[1] / 2
                ],
                [
                    qKrV5bkq[0] / 2 + 49,
                    qKrV5bkq[1] / 2 + 9
                ]
            ], [
                0,
                0,
                0,
                80
            ]);
        }
    var gQtXkpxn = GetActiveIndicators();
    var GQtXkpxn = 0;
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 0)) {
        GQtXkpxn += 1;
        Render.String(qKrV5bkq[0] / 2, qKrV5bkq[1] / 2 + (gQtXkpxn - GQtXkpxn) * 10 + 20, 1, 'DODGE', [
            255,
            255,
            0,
            255
        ], 3);
    }
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 1)) {
        GQtXkpxn += 1;
        Render.String(qKrV5bkq[0] / 2, qKrV5bkq[1] / 2 + (gQtXkpxn - GQtXkpxn) * 10 + 20, 1, 'DT', [
            0,
            255,
            0,
            255
        ], 3);
    }
    if (UI.IsHotkeyActive('Rage', 'General', 'Force safe point') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 3)) {
        GQtXkpxn += 1;
        Render.String(qKrV5bkq[0] / 2, qKrV5bkq[1] / 2 + (gQtXkpxn - GQtXkpxn) * 10 + 20, 1, 'SAFE', [
            0,
            255,
            255,
            255
        ], 3);
    }
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 2)) {
        GQtXkpxn += 1;
        Render.String(qKrV5bkq[0] / 2, qKrV5bkq[1] / 2 + (gQtXkpxn - GQtXkpxn) * 10 + 20, 1, 'HIDE', [
            155,
            255,
            155,
            255
        ], 3);
    }
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 4)) {
        GQtXkpxn += 1;
        Render.String(qKrV5bkq[0] / 2, qKrV5bkq[1] / 2 + (gQtXkpxn - GQtXkpxn) * 10 + 20, 1, 'DMG', [
            255,
            128,
            0,
            255
        ], 3);
    }
}
function DrawIndicators() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Draw HEAD/BAIM flags'))
        return;
    var UJfXs77m = Global.GetScreenSize();
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions'))
        return;
    var RLvZdwyq = Entity.GetEnemies();
    for (i = 0; i < RLvZdwyq.length; i++) {
        if (!Entity.IsValid(RLvZdwyq[i]))
            continue;
        if (!Entity.IsAlive(RLvZdwyq[i]))
            continue;
        if (Entity.IsDormant(RLvZdwyq[i]))
            continue;
        var KGmVlada = Entity.GetRenderBox(RLvZdwyq[i]);
        var QTyChczh = KGmVlada[3] - KGmVlada[1];
        QTyChczh /= 2;
        QTyChczh += KGmVlada[1];
        switch (info[RLvZdwyq[i]]) {
        case 'HEAD':
            Render.StringCustom(QTyChczh, KGmVlada[2] - 25, 1, info[RLvZdwyq[i]], [
                215,
                255,
                150,
                255
            ], font);
            break;
        case 'DEFAULT':
            Render.StringCustom(QTyChczh, KGmVlada[2] - 25, 1, info[RLvZdwyq[i]], [
                255,
                255,
                255,
                255
            ], font);
            break;
        case 'AIR':
            Render.StringCustom(QTyChczh, KGmVlada[2] - 25, 1, info[RLvZdwyq[i]], [
                0,
                255,
                255,
                255
            ], font);
            break;
        case 'CROUCH':
            Render.StringCustom(QTyChczh, KGmVlada[2] - 25, 1, info[RLvZdwyq[i]], [
                199,
                145,
                18,
                255
            ], font);
            break;
        case 'LETHAL':
            Render.StringCustom(QTyChczh, KGmVlada[2] - 25, 1, info[RLvZdwyq[i]], [
                63,
                133,
                252,
                255
            ], font);
            break;
        case 'SLOW':
            Render.StringCustom(QTyChczh, KGmVlada[2] - 25, 1, info[RLvZdwyq[i]], [
                63,
                133,
                252,
                255
            ], font);
            break;
        case 'X2':
            Render.StringCustom(QTyChczh, KGmVlada[2] - 25, 1, info[RLvZdwyq[i]], [
                0,
                128,
                240,
                255
            ], font);
            break;
        case 'WAITING':
            Render.StringCustom(QTyChczh, KGmVlada[2] - 25, 1, info[RLvZdwyq[i]], [
                255,
                125,
                255,
                255
            ], font);
            break;
        case 'STANDING':
            Render.StringCustom(QTyChczh, KGmVlada[2] - 25, 1, info[RLvZdwyq[i]], [
                155,
                255,
                252,
                255
            ], font);
            break;
        case 'SHOT':
            Render.StringCustom(QTyChczh, KGmVlada[2] - 25, 1, info[RLvZdwyq[i]], [
                255,
                255,
                150,
                255
            ], font);
            break;
        case 'OVERRIDE':
            Render.StringCustom(QTyChczh, KGmVlada[2] - 25, 1, info[RLvZdwyq[i]], [
                255,
                125,
                255,
                255
            ], font);
            break;
        }
        if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Draw SAFE flags') && safeTargets[RLvZdwyq[i]])
            Render.StringCustom(QTyChczh, KGmVlada[2] - 35, 1, 'SAFE', [
                222,
                171,
                255,
                255
            ], font);
    }
}
function GetHitboxName(Q7VhHmwz) {
    var UDu2Xk2y = '';
    switch (Q7VhHmwz) {
    case 0:
        UDu2Xk2y = 'Head';
        break;
    case 1:
        UDu2Xk2y = 'Neck';
        break;
    case 2:
        UDu2Xk2y = 'Pelvis';
        break;
    case 3:
        UDu2Xk2y = 'Body';
        break;
    case 4:
        UDu2Xk2y = 'Thorax';
        break;
    case 5:
        UDu2Xk2y = 'Chest';
        break;
    case 6:
        UDu2Xk2y = 'Upper chest';
        break;
    case 7:
        UDu2Xk2y = 'Left thigh';
        break;
    case 8:
        UDu2Xk2y = 'Right thigh';
        break;
    case 9:
        UDu2Xk2y = 'Left calf';
        break;
    case 10:
        UDu2Xk2y = 'Right calf';
        break;
    case 11:
        UDu2Xk2y = 'Left foot';
        break;
    case 12:
        UDu2Xk2y = 'Right foot';
        break;
    case 13:
        UDu2Xk2y = 'Left hand';
        break;
    case 14:
        UDu2Xk2y = 'Right hand';
        break;
    case 15:
        UDu2Xk2y = 'Left upper arm';
        break;
    case 16:
        UDu2Xk2y = 'Left forearm';
        break;
    case 17:
        UDu2Xk2y = 'Right upper arm';
        break;
    case 18:
        UDu2Xk2y = 'Right forearm';
        break;
    default:
        UDu2Xk2y = 'Generic';
    }
    return UDu2Xk2y;
}
function RagebotLogs() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Ragebot fire logs'))
        return;
    target = Event.GetInt('target_index');
    targetName = Entity.GetName(target);
    hitbox = Event.GetInt('hitbox');
    hitchance = Event.GetInt('hitchance');
    safepoint = Event.GetInt('safepoint');
    exploit = Event.GetInt('exploit');
    log = '[hvh_essentials] Fired shot at ' + targetName + ' (' + target + ')' + ' | Hitbox: ' + GetHitboxName(hitbox) + ' | Hitchance: ' + hitchance + ' | Safepoint: ' + safepoint + ' | Exploit: ' + exploit + ' | Flag: ' + info[target];
    log += '\n';
    Cheat.PrintColor([
        0,
        255,
        0,
        255
    ], log);
}
function SafepointOnLimbs() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Safe point on limbs'))
        return;
    Ragebot.ForceHitboxSafety(12);
    Ragebot.ForceHitboxSafety(11);
    Ragebot.ForceHitboxSafety(10);
    Ragebot.ForceHitboxSafety(9);
}
function OverrideMinimumDamage() {
    if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key'))
        return;
    var NXvXzhnf = Entity.GetEnemies();
    value = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Minimum damage');
    for (i = 0; i < NXvXzhnf.length; i++) {
        Ragebot['ForceTargetMinimumDamage'](NXvXzhnf[i], value);
        info[NXvXzhnf[i]] = 'OVERRIDE';
    }
}
function ForceConditions() {
    AimForHeadIfShooting();
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions'))
        return;
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Wait for on shot backtrack'))
        return;
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key'))
        return;
    var YD2qBbsq = Entity.GetEnemies();
    var QKrV5bkq = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta');
    var RLsGrdcz = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions');
    var CF7qRc2d = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions');
    var SD8jDhml = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force SAFEPOINT conditions');
    for (i = 0; i < YD2qBbsq.length; i++) {
        if (!Entity.IsValid(YD2qBbsq[i]))
            continue;
        if (!Entity.IsAlive(YD2qBbsq[i]))
            continue;
        if (Entity.IsDormant(YD2qBbsq[i]))
            continue;
        mode = '';
        info[YD2qBbsq[i]] = 'DEFAULT';
        safeTargets[YD2qBbsq[i]] = false;
        var NFmHvu6e = Ragebot.GetTarget();
        if (getDropdownValue(SD8jDhml, 0) && IsLethal(YD2qBbsq[i])) {
            safeTargets[YD2qBbsq[i]] = true;
            Ragebot.ForceTargetSafety(YD2qBbsq[i]);
        }
        if (getDropdownValue(SD8jDhml, 1) && IsSlowWalking(YD2qBbsq[i])) {
            safeTargets[YD2qBbsq[i]] = true;
            Ragebot.ForceTargetSafety(YD2qBbsq[i]);
        }
        if (getDropdownValue(SD8jDhml, 3) && IsInAir(YD2qBbsq[i])) {
            safeTargets[YD2qBbsq[i]] = true;
            Ragebot.ForceTargetSafety(YD2qBbsq[i]);
        }
        if (getDropdownValue(SD8jDhml, 2) && IsStanding(YD2qBbsq[i]) && !IsInAir(YD2qBbsq[i])) {
            safeTargets[YD2qBbsq[i]] = true;
            Ragebot.ForceTargetSafety(YD2qBbsq[i]);
        }
        if (getDropdownValue(SD8jDhml, 4) && IsCrouch(YD2qBbsq[i])) {
            safeTargets[YD2qBbsq[i]] = true;
            Ragebot.ForceTargetSafety(YD2qBbsq[i]);
        }
        if (AttemptTwoShotKill(YD2qBbsq[i]) == true && UI.GetValue('Misc', 'JAVASCRIPT', 'Predict doubletap damage')) {
            info[YD2qBbsq[i]] = 'X2';
            continue;
        }
        if (getDropdownValue(CF7qRc2d, 0) && IsLethal(YD2qBbsq[i])) {
            if (NFmHvu6e == YD2qBbsq[i])
                ForceBaim(YD2qBbsq[i]);
            info[YD2qBbsq[i]] = 'LETHAL';
            continue;
        }
        if (getDropdownValue(RLsGrdcz, 3) && firedThisTick[YD2qBbsq[i]] == true) {
            ForceHead(YD2qBbsq[i]);
            info[YD2qBbsq[i]] = 'SHOT';
            continue;
        }
        if (getDropdownValue(CF7qRc2d, 1) && IsSlowWalking(YD2qBbsq[i])) {
            if (NFmHvu6e == YD2qBbsq[i])
                ForceBaim(YD2qBbsq[i]);
            info[YD2qBbsq[i]] = 'SLOW';
            continue;
        }
        if (getDropdownValue(CF7qRc2d, 3) && IsInAir(YD2qBbsq[i])) {
            if (NFmHvu6e == YD2qBbsq[i])
                ForceBaim(YD2qBbsq[i]);
            info[YD2qBbsq[i]] = 'AIR';
            continue;
        }
        if (getDropdownValue(CF7qRc2d, 2) && IsStanding(YD2qBbsq[i]) && !IsInAir(YD2qBbsq[i])) {
            if (NFmHvu6e == YD2qBbsq[i])
                ForceBaim(YD2qBbsq[i]);
            info[YD2qBbsq[i]] = 'STANDING';
            continue;
        }
        if (getDropdownValue(RLsGrdcz, 1) && IsInAir(YD2qBbsq[i])) {
            ForceHead(YD2qBbsq[i]);
            info[YD2qBbsq[i]] = 'AIR';
            continue;
        }
        if (getDropdownValue(RLsGrdcz, 0) && GetMaxDesync(YD2qBbsq[i]) < QKrV5bkq && !IsInAir(YD2qBbsq[i])) {
            ForceHead(YD2qBbsq[i]);
            info[YD2qBbsq[i]] = 'HEAD';
            continue;
        }
        if (getDropdownValue(RLsGrdcz, 2) && IsCrouchTerrorist(YD2qBbsq[i])) {
            ForceHead(YD2qBbsq[i]);
            info[YD2qBbsq[i]] = 'CROUCH';
            continue;
        }
        DisableBaim();
    }
}
function Draw() {
    if (font == null) {
        font = Render.AddFont('Tahoma', 7, 700);
    }
    if (UI.IsMenuOpen()) {
        if (getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions'), 1))
            UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions', setDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions'), 3, false));
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? true : false);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? true : false);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Force SAFEPOINT conditions', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? true : false);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? true : false);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Use highest possible damage', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? true : false);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Draw predicted damage', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false);
        delta = false;
        if (getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions'), 0) && UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions')) {
            delta = true;
        }
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta', delta);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Draw HEAD/BAIM flags', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Draw SAFE flags', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Features to display', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Predict doubletap damage', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? true : false);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Hitchance', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Jump scout/revolver hitchance') ? true : false);
    }
    AimForHeadIfShooting();
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'HvH Essentials'))
        return;
    if (!Entity.IsValid(Entity.GetLocalPlayer()))
        return;
    if (!Entity.IsAlive(Entity.GetLocalPlayer()))
        return;
    DrawIndicators();
    DrawToggles();
    DrawDynamicDamage();
}
function CreateMove() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'HvH Essentials'))
        return;
    if (!Entity.IsValid(Entity.GetLocalPlayer()))
        return;
    if (!Entity.IsAlive(Entity.GetLocalPlayer()))
        return;
    AimForHeadIfShooting();
    ForceConditions();
    SetHitchanceInAir();
    ReversedFreestanding();
    SafepointOnLimbs();
    WaitForOnShot();
    OverrideMinimumDamage();
    DodgeBruteforce();
}
function FrameNetUpdateStart() {
    if (UI.GetValue('Misc', 'JAVASCRIPT', 'Instant doubletap')) {
        Exploit.OverrideTolerance(0);
        Exploit.OverrideShift(14);
        shouldDisable = true;
    }
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Instant doubletap') && shouldDisable == true) {
        Exploit.OverrideTolerance(1);
        Exploit.OverrideShift(12);
        shouldDisable = false;
    }
}
function ClearData() {
    firedThisTick = [];
    storedShotTime = [];
    info = [];
}
function Main() {
    for (i = 0; i < 64; i++) {
        info[i] = '';
        safeTargets[i] = false;
    }
    Cheat.RegisterCallback('CreateMove', 'CreateMove');
    Cheat.RegisterCallback('Draw', 'Draw');
    Cheat.RegisterCallback('ragebot_fire', 'RagebotLogs');
    Cheat.RegisterCallback('round_start', 'ClearData');
    Cheat.RegisterCallback('FRAME_NET_UPDATE_START', 'FrameNetUpdateStart');
}
Main();