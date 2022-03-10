var global_print = Global.Print,
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
    cheat_register_callback = cheat_register_callback = new Proxy(Cheat.RegisterCallback, {
        apply: function (a, a, b) {
            switch (b[0]) {
            case 'paint':
                Cheat.RegisterCallback('Draw', b[1]);
                break //37
            case 'create_move':
                Cheat.RegisterCallback('CreateMove', b[1]);
                break //40
            case 'fsn':
                Cheat.RegisterCallback('FrameStageNotify', b[1]);
                break //43
            default:
                Cheat.RegisterCallback(b[0], b[1]);
                break
            }

        }
    }); //0
cheat_override_damage = Cheat.ExecuteCommand, cheat_frame_stage = Cheat.FrameStage, cheat_print = Cheat.Print, cheat_print_chat = Cheat.PrintChat, cheat_print_color = Cheat.PrintColor, local_latency = Local.Latency, local_get_view_angles = Local.GetViewAngles, local_set_view_angles = Local.SetViewAngles, local_set_clan_tag = Local.SetClanTag, local_get_real_yaw = Local.GetRealYaw, local_get_fake_yaw = Local.GetFakeYaw, local_get_spread = Local.GetSpread, local_get_inaccuracy = Local.GetInaccuracy, world_get_map_name = World.GetMapName, world_get_server_string = World.GetServerString, input_get_cursor_position = Input.GetCursorPosition, input_is_key_pressed = Input.IsKeyPressed, render_string = Render.String, render_text_size = Render.TextSize, render_line = Render.Line, render_rect = Render.Rect, render_filled_rect = Render.FilledRect, render_gradient_rect = Render.GradientRect, render_circle = Render.Circle, render_filled_circle = Render.FilledCircle, render_polygon = Render.Polygon, render_world_to_screen = Render.WorldToScreen, render_add_font = Render.AddFont, render_find_font = Render.FindFont, render_string_custom = Render.StringCustom, render_textured_rect = Render.TexturedRect, render_add_texture = Render.AddTexture, render_text_size_custom = Render.TextSizeCustom, render_get_screen_size = Render.GetScreenSize, ui_get_value = UI.GetValue, ui_set_value = UI.SetValue, ui_add_checkbox = UI.AddCheckbox, ui_add_slider_int = UI.AddSliderInt, ui_add_slider_float = UI.AddSliderFloat, ui_add_hotkey = UI.AddHotkey, ui_add_label = UI.AddLabel, ui_add_dropdown = UI.AddDropdown, ui_add_multi_dropdown = UI.AddMultiDropdown, ui_add_color_picker = UI.AddColorPicker, ui_add_textbox = UI.AddTextbox, ui_set_enabled = UI.SetEnabled, ui_get_string = UI.GetString, ui_get_color = UI.GetColor, ui_set_color = UI.SetColor, ui_is_hotkey_active = UI.IsHotkeyActive, ui_toggle_hotkey = UI.ToggleHotkey, ui_is_menu_open = UI.IsMenuOpen, convar_get_int = Convar.GetInt, convar_set_int = Convar.SetInt, convar_get_float = Convar.GetFloat, convar_set_float = Convar.SetFloat, convar_get_string = Convar.GetString, convar_set_string = Convar.SetString, event_get_int = Event.GetInt, event_get_float = Event.GetFloat, event_get_string = Event.GetString, entity_get_entities = Entity.GetEntities, entity_get_entities_by_class_i_d = Entity.GetEntitiesByClassID, entity_get_players = Entity.GetPlayers, entity_get_enemies = Entity.GetEnemies, entity_get_teammates = Entity.GetTeammates, entity_get_local_player = Entity.GetLocalPlayer, entity_get_game_rules_proxy = Entity.GetGameRulesProxy, entity_get_entity_from_user_i_d = Entity.GetEntityFromUserID, entity_is_teammate = Entity.IsTeammate, entity_is_enemy = Entity.IsEnemy, entity_is_bot = Entity.IsBot, entity_is_local_player = Entity.IsLocalPlayer, entity_is_valid = Entity.IsValid, entity_is_alive = Entity.IsAlive, entity_is_dormant = Entity.IsDormant, entity_get_class_i_d = Entity.GetClassID, entity_get_class_name = Entity.GetClassName, entity_get_name = Entity.GetName, entity_get_weapon = Entity.GetWeapon, entity_get_weapons = Entity.GetWeapons, entity_get_render_origin = Entity.GetRenderOrigin, entity_get_prop = Entity.GetProp, entity_set_prop = Entity.SetProp, entity_get_hitbox_position = Entity.GetHitboxPosition, entity_get_eye_position = Entity.GetEyePosition, trace_line = Trace.Line, trace_bullet = Trace.Bullet, usercmd_set_movement = UserCMD.SetMovement, usercmd_get_movement = UserCMD.GetMovement, usercmd_set_angles = UserCMD.SetAngles, usercmd_force_jump = UserCMD.ForceJump, usercmd_force_crouch = UserCMD.ForceCrouch, antiaim_get_override = AntiAim.GetOverride, antiaim_set_override = AntiAim.SetOverride, antiaim_set_real_offset = AntiAim.SetRealOffset, antiaim_set_fake_offset = AntiAim.SetFakeOffset, antiaim_set_l_b_y_offset = AntiAim.SetLBYOffset, exploit_get_charge = Exploit.GetCharge, exploit_recharge = Exploit.Recharge, exploit_disable_recharge = Exploit.DisableRecharge, exploit_enable_recharge = Exploit.EnableRecharge, ragebot_override_hitchance = Ragebot.OverrideHitchance, ragebot_override_accuracy_boost = Ragebot['OverrideAccuracyBoost'], ragebot_override_multipoint_scale = Ragebot['OverrideMultipointScale'], ragebot_force_safety = Ragebot.ForceSafety;
UI.AddLabel('---------HvH Essentials----------');
UI.AddLabel('Clantag Changer');
UI.AddDropdown("Custom Clantag", ["off", "onetap.su"]);
UI.AddCheckbox('Activate HvH Essentials!');
UI.AddHotkey('Dodge bruteforce');
UI.AddHotkey('Wait for on shot backtrack');
UI.AddCheckbox('Reversed freestanding');
UI.AddCheckbox('Safe point on limbs');
UI.AddCheckbox('Fast Recharge');
UI.AddCheckbox('Instant doubletap');
UI.AddCheckbox('Ragebot fire logs');
UI.AddHotkey('Override minimum dmg key');
UI.AddSliderInt('Minimum damage', 0, 130);
UI.AddCheckbox('Indicators');
UI.AddCheckbox('Draw HEAD/BAIM flags');
UI.AddCheckbox('Draw SAFE flags');
UI.AddCheckbox('Draw danger signs');
UI.AddCheckbox('Draw predicted damage');
UI.AddCheckbox('Inverter arrows');
UI.AddColorPicker('Inverter arrows color');
UI.SetColor('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color', [255, 165, 0, 230]);
UI.AddMultiDropdown('Features to display', ['Dodge bruteforce', 'Doubletap', 'Hide shots', 'Safe point', 'Override min dmg', 'Fake duck']);
UI.AddCheckbox('Enable head/baim conditions');
UI.AddCheckbox('Predict doubletap damage');
UI.AddMultiDropdown('Force HEAD conditions', ['Inaccurate desync', 'Target is in air', 'Target crouching (T side)', 'Shot']);
UI.AddSliderInt('Inaccurate desync delta', 0, 58);
UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta', 38);
UI.AddMultiDropdown('Force BAIM conditions', ['If lethal', 'If slow walking', 'If standing', 'If target in air', 'Crouching']);
UI.AddMultiDropdown('Force SAFEPOINT conditions', ['If lethal', 'If slow walking', 'If standing', 'If target in air', 'Crouching']);
UI.AddCheckbox('Save FPS');
UI.AddCheckbox('Use highest possible damage');
UI.AddCheckbox('Jump scout/revolver hitchance');
UI.AddSliderInt('Hitchance', 0, 100);
UI.AddCheckbox('Override no scope hitchance');
UI.AddSliderInt('No scope hitchance', 0, 100);
var firedThisTick = [],
    storedShotTime = [],
    onShotTargets = [],
    font, fontFlags = 0,
    shouldDisable, shouldDisableOverride, info = [],
    safeTargets = [],
    dynamicDamage = 0,
    color = [255, 0, 0, 255],
    conditionFlags = 'webster|awp112|dr98867|Ray|lukeyour|makeitbig|alynzew|finny3433|deity|zaldy|quakehvh|shifto|bgbenjamin1|dylanc|medusaax|sadenjmith|itzniico|gvk27|kyle33223|jakubezz|577777|skeletonimproved|r4xer1|lizauwu|bditt|xvasu|impecunity|jvvv|soulawaken1103|melonbear|nadindi|gregorybruh|theshy112|dinkelberg|tudorcoste2|bbhvhh|raude|tayloul0l|avrx|manofgod|wkxd16|warpedirish|buerv|d34nwyn|umiranhaa|ryanthepanda|greencobra|mercymamba|lee0181|iluckbr|simian666|akulla|gab|vatrax|hvhkiller|zmywakhvh|bigi|hawiz|thegeneralguy|zusekiller|krajewski12|1martin|eugek3|always321312312|kden|deadaf|godless|parasitisch|jhee|snnick|sui|limit|adr1an|idontknowho|nouisbae|snooze|kronzy|nickv3|signal|woofcsgo|grumpy1|kroshiou|yoni|sbmvn|billy22324|stepinprod|kaytusha|osku|jweilage|preclik|qwertygamer1227|snipi|drahokam|stone|xello|arus|ash28604|lukazel|edwardfly|nmthegoat|c0br4|anon990|tinted|wthz5240|kezycs|dfergse|loose|qswain|bogdan56|wadaspro|sleeker|cazzzper|freddygg|mazik|xen|lordbyron|dxgamerwar890|fer666|mtz1337|kornel|guu|testingxd|kroko|xchange95|manelevyc|actuallyakari|narji|masuod7788|binder|user3860|kulakovsky|chang321|xyro|razvanel|vthiirsty|psx8m|cyrex212|pnda|lighting1|cy1026|giabach123|dennisman98|kuyarebel|aldix|primx2|nocster|dillan|nametam|playingonxbox360|hydration|xiangyu940111|jilm|whyireland|tappingskeet|yezus|qfreed|umbludeghizat|teehee|gflowz1337|zepzy|mircea001|houdinii|undercoversuperstar|taifnxd|weariful1|deeside|whtchad|coolman0857|mrbadii|mrbedii|oxy|color123|andreimanevra|imnotthatgay|stefan2223|mariot12|death2002|siegfried|synergynn|bestonetapuserna|iownapkz|krafty|borohvh|takanashi|thebgmamma|milletporridge|upset|aliancegfx|mom|blaine|zahx|canollies|omegumino|blameme|consensualsocks|yakk|shittybacon|jinxycat|dylan1k|skeletonar|junelee0303|nipo|kinknightmare|antoniodetto|fuushila|l4wless174|sneaky|zyo|riot|julayisandy|bira|donn|peagah|seanlovespp|noname2020|gubbster3|shinehvh2|renxoffciel|top1btw|allpureapples|hifumi918|exepert|saithhvh|avora|ohtwinki|smol|aaronb1|frostdk|bigyoshi|rey228|herotv1|katanazero|tyler48|loganpls|ruuvimeisseli|cadsbasher|xan|sam89928|hayaiet|rymo|blake|sbkm2b|izodiac|gbriel5666|omni|flondenmachen|aprendiz|jondms|dwarfyfart|swooped|blurry|reyqz|pvnoname|baimqq|nakinami|loji|itzguga|utterhvh|oneshot|lilgangbank|kijanaxas|alfonsiniuwu|yato0113|banshee|i3709432|grimey6393|pasi35260|mrpoop|pdizzle|yukihvh|haxer|danielbro2020|dwg132|astral321|trl420|xbarbarionx|hackensch|vicstyl3|softness|ionutst1|jeppe|kiroshu|rayzen6969|khmora|fearmeiru|0000|jskoke06|yeezymeister|narts|creposbeleaua|tylerhvh|instantramen|socks|wimter|mrhackerman404|vladosky|shibevevo|wizard84|kang|dukk1337|bi93|andresxphantom|hardcore|fl3xgod|sckinsey|leech6969|liufo|mvcieqq|ethylene|naitang|b4stion|dylanplaysmc|n1oss|hilley|belmondo|rezox|jooey|tatsuo|m1nute|dankmeme|willtee18|11111111|tapir|caenito|ieuanruskiman|sweg|doozie|theoofdog|arska1|yeeto|nomula|nomula|boigestboig209|hoodgangster1|toesuckertom|skano|3608456807|gaslight|izmgi|braazy|cartierj|lukej1129|aurimaz|lolcats39|freezin|jimmydeansbeans|wannahvh|dwg133|winer|rushmyhp|falcon8182|xasmi|saggynuggets|danispace|some0ne|noblebitch|renegade454|gimmy|03k|aarontkong|eloxez781|hexor|phoca|b1scoito1337|matteosalvini|yufaan8|reazon8808|kiragod|ondrills|botralph|memeyy|xonu|falcon|kiragod|osleya|mjr|kamaveli|zeddy|beam|chase|pedrou1512|beerus|gamelocked|noxqu|zecks|cr37zu|fallenautistic|joker88|pshnn|inhonia|peek39|xrvsgd|nugweasle|x1x|badxo|randomhacks|idkyet|picodegallo|karlssn|d8rio|mischievious|uwu|encodedloss|johndough|leivo22|bgtbelcher|sergiii|hexci|ratnikoffz1337|wizardnalis|kvnc|darocze|digital2k18|thehash|mag7swag7|austinhemmer|space303|peachy3|tvojamamka58|relax|shwaggy|gradient|xmanic|nimpey|wahab|thailol123|darth|y258059|pabwo|espxyz|arc867|bluenhvh10000|wowee|cloutpizzadog|vamp1re|n0tfakegamer|arc867|g1hvhlegenden|cookiegamer|cole1930|uidbomja|kanna|patrickbad|theosycrat|reflowed|eliasswag|bigboy1|fakeduck|flickzyhvh|hvhbruh|qualetyhotel|belugasvigianus|miggos|spookedonion|limeade|lolhhidude|ukrochagod|marymccc|sweatno|officialcs|snowdd|ellohssa|al1x|aop|nohomoowo|dragonbomb|proxideflqsh|avishay8251|ofrice|cert|kojiro|saug|has|cloutir|y33tman|prxd|kfear|progidio|lilcoco1994|lendario|banankage09|override7777|serjconsumer|koige|dogs03|keop|klaws|ciinex|d3st3|iregister27|zeherchamp|lgz|resurgence|wunna1337'; //225
onShotTargets = conditionFlags.split('|');

function normalizeYaw(co) {
    while (co > 180) {
        co = co - 360
    }

    while (co < -180) {
        co = co + 360
    }

    return co
}

function getDropdownValue(bN, bM) {
    var bL = 1 << bM; //251
    return bN & bL ? true : false
}

function setDropdownValue(cC, cB, cz) {
    var cA = 1 << cB; //256
    return cz ? cC | cA : cC & ~cA
}

function GetActiveIndicators() {
    var bB = 0,
        bC = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'); //261
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap') && getDropdownValue(bC, 1)) {
        bB += 1
    }

    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots') && getDropdownValue(bC, 2)) {
        bB += 1
    }

    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && getDropdownValue(bC, 0)) {
        bB += 1
    }

    if (UI.IsHotkeyActive('Rage', 'General', 'Force safe point') && getDropdownValue(bC, 3)) {
        bB += 1
    }

    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck') && getDropdownValue(bC, 5)) {
        bB += 1
    }

    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key') && getDropdownValue(bC, 4)) {
        bB += 1
    }

    return bB
}

function radiansToDegrees(cv) {
    var cw = Math.PI; //279
    return cv * (180 / cw)
}

function convertMatrix(B) {
    return B.split('').reduce(function (D, C) {
        return D = (D << 5) - D + C.charCodeAt(0), D & D
    }, 0)
}

function worldToScreen(cR, cS) {
    if (cR == 0 && cS == 0) {
        return 0
    }

    return radiansToDegrees(Math.atan2(cS, cR))
}

function DodgeBruteforce() {
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce')) {
        shouldDisableOverride = true;
        AntiAim.SetOverride(1);
        var J = -9,
            F = 0,
            K = true,
            H = 30,
            I = 17,
            G = K ? H : H * 2; //299
        AntiAim.SetFakeOffset(F);
        if (J > 0) {
            AntiAim.SetRealOffset(F - J + G);
            if (J < I) {
                I = J
            }

            K ? AntiAim.SetLBYOffset(F - I) : AntiAim.SetLBYOffset(F + J - I * 2)
        } else {
            J > I && (I = J), AntiAim.SetRealOffset(F - J - G), K ? AntiAim.SetLBYOffset(F + I) : AntiAim.SetLBYOffset(F + J + I * 2)
        }

    }

    if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && shouldDisableOverride == true) {
        shouldDisableOverride = false, AntiAim.SetOverride(0)
    }

}

function GetMaxDesync(bS) {
    var bT = Entity.GetProp(bS, 'CBasePlayer', 'm_vecVelocity[0]'),
        bR = Math.sqrt(bT[0] * bT[0] + bT[1] * bT[1]); //321
    return 58 - 58 * bR / 580
}

function IsInAir(ca) {
    var cb = Entity.GetProp(ca, 'CBasePlayer', 'm_fFlags'); //327
    if (!(cb & 1 << 0) && !(cb & 1 << 18)) {
        return true
    } else {
        return false
    }

}

function IsCrouchTerrorist(bW) {
    var bX = Entity.GetProp(bW, 'CBasePlayer', 'm_iTeamNum'),
        bY = Entity.GetProp(bW, 'CBasePlayer', 'm_fFlags'); //335
    if (bX == 2 && bY & 1 << 1) {
        return true
    } else {
        return false
    }

}

function IsCrouch(bV) {
    var bU = Entity.GetProp(bV, 'CBasePlayer', 'm_fFlags'); //344
    if (bU & 1 << 1) {
        return true
    } else {
        return false
    }

}
var lasttime = 0; //350
var customtext = 0; //351
function time_to_ticks(cF) {
    var cG = cF / Globals.TickInterval() + 0.5; //353
    return cG
}
var old_text_anim = 0; //356
function anim(n, m) {
    if (!World.GetServerString()) {
        return
    }

    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Custom Clantag")) {
        text_anim = "               " + n + "                      "
    } else {
        text_anim = "  "
    }

    tickinterval = Globals.TickInterval();
    tickcount = Globals.Tickcount() + time_to_ticks(Local.Latency());
    ddd = tickcount / time_to_ticks(0.3);
    ddd = ddd % m.length;
    ddd = m[parseInt(ddd)] + 1;
    text_anim = text_anim.slice(ddd, ddd + 15);
    if (text_anim != old_text_anim) {
        Local.SetClanTag(text_anim)
    }

    old_text_anim = text_anim
}

function onDraw() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Custom Clantag')) {
        const cs = Math.round(Globals.Curtime() * 2)
    }

    if (cs === last_time) {
        return
    }

    last_time = cs;
    const cr = Math.abs(-clantag.length + (cs) % (clantag.length * 2)) + 1; //387
    const ct = clantag.slice(0, -cr); //388
    Local.SetClanTag(ct)
}

function clantag() {
    var clantag = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Custom Clantag"); //394
    if (clantag == 1) {
        customtext = "onetap.su"
    }

    anim(customtext, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22])
}

function GetLocalPlayerWeaponCategory() {
    var bQ = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())); //403
    switch (bQ) {
    case 'ssg 08':
        return 'SCOUT'; //406
        break //405
    case 'desert eagle': //408
    case 'r8 revolver':
        return 'HEAVY PISTOL'; //410
        break //409
    case 'scar 20': //412
    case 'g3sg1':
        return 'AUTOSNIPER'; //414
        break //413
    case 'awp':
        return 'AWP'; //417
        break //416
    default:
        return 'PISTOL'; //420
        break
    }

}

function GetClosestEnemyToCrosshair() {
    var bK = Global.GetScreenSize(),
        bF = -1; //426
    localPlayer = Entity.GetLocalPlayer();
    localPlayerAlive = Entity.IsAlive(localPlayer);
    if (!localPlayer) {
        return
    }

    if (!localPlayerAlive) {
        return
    }

    localPlayerWeapon = Entity.GetName(Entity.GetWeapon(localPlayer));
    enemiesArr = Entity.GetEnemies();
    if (!enemiesArr) {
        return
    }

    var bI = 180,
        bE = Entity.GetProp(localPlayer, 'CBaseEntity', 'm_vecOrigin'),
        bD = Global.GetViewAngles(); //438
    for (var bH = 0; bH < enemiesArr.length; bH++) {
        if (!Entity.IsAlive(enemiesArr[bH])) {
            continue
        }

        var bG = Entity.GetProp(enemiesArr[bH], 'CBaseEntity', 'm_vecOrigin'),
            bJ = Math.abs(normalizeYaw(worldToScreen(bE[0] - bG[0], bE[1] - bG[1]) - bD[1] + 180)); //444
        if (bJ < bI) {
            bI = bJ, bF = enemiesArr[bH]
        }

    }

    return bF
}

function SetHitchanceInAir() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Jump scout/revolver hitchance')) {
        return
    }

    var cE = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())); //456
    if (cE != 'ssg 08' && cE != 'r8 revolver') {
        return
    }

    var cD = Entity.GetProp(Entity.GetLocalPlayer(), 'CBasePlayer', 'm_fFlags'); //459
    !(cD & 1 << 0) && !(cD & 1 << 18) && (target = Ragebot.GetTarget(), value = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Hitchance'), Ragebot.ForceTargetHitchance(target, value))
}

function CanShootHead() {
    return Cheat.GetUsername.toString() != 'function () { [native code] }'
}

function ExtrapolateTick(bk) {
    var bl = Entity.GetLocalPlayer(),
        bi = Entity.GetHitboxPosition(bl, 0),
        bj = Entity.GetProp(bl, 'CBasePlayer', 'm_vecVelocity[0]'),
        bm = []; //468
    bm[0] = bi[0] + bj[0] * Globals.TickInterval() * bk;
    bm[1] = bi[1] + bj[1] * Globals.TickInterval() * bk;
    bm[2] = bi[2] + bj[2] * Globals.TickInterval() * bk;
    return bm
}

function IsLethal(cg) {
    var cd = Entity.GetProp(cg, 'CBasePlayer', 'm_iHealth'); //479
    pelvis_pos = Entity.GetHitboxPosition(cg, 2);
    body_pos = Entity.GetHitboxPosition(cg, 3);
    thorax_pos = Entity.GetHitboxPosition(cg, 4);
    var cf = [0, -1],
        cc = [0, -1],
        ch = [0, -1],
        ce = [0, -1]; //483
    result_thorax = Trace.Bullet(Entity.GetLocalPlayer(), cg, Entity.GetEyePosition(Entity.GetLocalPlayer()), thorax_pos);
    if (result_thorax[1] >= cd) {
        return true
    }

    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        cc = Trace.Bullet(Entity.GetLocalPlayer(), cg, Entity.GetEyePosition(Entity.GetLocalPlayer()), pelvis_pos);
        cf = Trace.Bullet(Entity.GetLocalPlayer(), cg, Entity.GetEyePosition(Entity.GetLocalPlayer()), body_pos);
        if (cc[1] >= cd) {
            return true
        }

        if (cf[1] >= cd) {
            return true
        }

    }

    result_thorax_extrapolated = Trace.Bullet(Entity.GetLocalPlayer(), cg, ExtrapolateTick(20), thorax_pos);
    if (result_thorax_extrapolated[1] >= cd) {
        return Ragebot.ForceTargetSafety(cg), true
    }

    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        ce = Trace.Bullet(Entity.GetLocalPlayer(), cg, ExtrapolateTick(25), pelvis_pos);
        ch = Trace.Bullet(Entity.GetLocalPlayer(), cg, ExtrapolateTick(25), body_pos);
        if (ce[1] >= cd) {
            return true
        }

        if (ch[1] >= cd) {
            return true
        }

    }

    return false
}

function IsExploitCharged() {
    if (Exploit.GetCharge() == 1) {
        return true
    }

    return false
}

function NoScopeHitchance() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Override no scope hitchance')) {
        return
    }

    var cp = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())); //533
    if (cp != 'scar 20' && cp != 'g3sg1' && cp != 'ssg 08' && cp != 'awp') {
        return
    }

    var cq = Entity.GetProp(Entity.GetLocalPlayer(), 'CCSPlayer', 'm_bIsScoped'); //536
    if (!cq) {
        Ragebot.ForceTargetHitchance(Ragebot.GetTarget(), UI.GetValue('Misc', 'JAVASCRIPT', 'No scope hitchance'))
    }

}

function AttemptTwoShotKill(q) {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Predict doubletap damage')) {
        return false
    }

    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck')) {
        return false
    }

    var p = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())); //546
    if (p != 'scar 20' && p != 'g3sg1') {
        return false
    }

    if (!UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap')) {
        return false
    }

    Ragebot.ForceHitboxSafety(0);
    var v = Entity.GetProp(q, 'CBasePlayer', 'm_iHealth'),
        u = GetClosestEnemyToCrosshair(); //552
    pelvis_pos = Entity.GetHitboxPosition(q, 2);
    body_pos = Entity.GetHitboxPosition(q, 3);
    thorax_pos = Entity.GetHitboxPosition(q, 4);
    var t = [0, -1],
        s = [0, -1],
        o = [0, -1],
        r = [0, -1]; //557
    result_thorax = Trace.Bullet(Entity.GetLocalPlayer(), q, Entity.GetEyePosition(Entity.GetLocalPlayer()), thorax_pos);
    if (q = u) {
        dynamicDamage = result_thorax[1]
    }

    if (result_thorax[1] * 2 >= v && IsExploitCharged() == true) {
        return Ragebot['ForceTargetMinimumDamage'](q, v / 2 + 1), true
    }

    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        s = Trace.Bullet(Entity.GetLocalPlayer(), q, Entity.GetEyePosition(Entity.GetLocalPlayer()), pelvis_pos);
        t = Trace.Bullet(Entity.GetLocalPlayer(), q, Entity.GetEyePosition(Entity.GetLocalPlayer()), body_pos);
        if (q = u) {
            dynamicDamage = s[1]
        }

        if (s[1] * 2 >= v && IsExploitCharged() == true) {
            return Ragebot['ForceTargetMinimumDamage'](q, v / 2 + 1), true
        }

        if (q = u) {
            dynamicDamage = t[1]
        }

        if (t[1] * 2 >= v && IsExploitCharged() == true) {
            return Ragebot['ForceTargetMinimumDamage'](q, v / 2 + 1), true
        }

    }

    result_thorax_extrapolated = Trace.Bullet(Entity.GetLocalPlayer(), q, ExtrapolateTick(15), thorax_pos);
    if (q = u) {
        dynamicDamage = result_thorax_extrapolated[1]
    }

    if (result_thorax_extrapolated[1] * 2 >= v && IsExploitCharged() == true) {
        return Ragebot['ForceTargetMinimumDamage'](q, v / 2 + 1), true
    }

    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        r = Trace.Bullet(Entity.GetLocalPlayer(), q, ExtrapolateTick(25), pelvis_pos);
        o = Trace.Bullet(Entity.GetLocalPlayer(), q, ExtrapolateTick(25), body_pos);
        if (q = u) {
            dynamicDamage = r[1]
        }

        if (r[1] * 2 >= v && IsExploitCharged() == true) {
            return Ragebot['ForceTargetMinimumDamage'](q, v / 2 + 1), true
        }

        if (q = u) {
            dynamicDamage = o[1]
        }

        if (o[1] * 2 >= v && IsExploitCharged() == true) {
            return Ragebot['ForceTargetMinimumDamage'](q, v / 2 + 1), true
        }

    }

    dynamicDamage = 0
}

function DrawDynamicDamage() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Draw predicted damage')) {
        return
    }

    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Predict doubletap damage')) {
        return
    }

    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck')) {
        return
    }

    var V = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())); //620
    if (V != 'scar 20' && V != 'g3sg1') {
        return
    }

    if (!UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap')) {
        return
    }

    if (IsInAir(Entity.GetLocalPlayer())) {
        return
    }

    var S = Entity.GetLocalPlayer(),
        R = Entity.GetRenderOrigin(S),
        Y = Entity.GetProp(S, 'CBasePlayer', 'm_vecVelocity[0]'),
        W = 999,
        X = GetClosestEnemyToCrosshair(); //627
    if (Entity.IsValid(X) && Entity.IsAlive(X) && !Entity.IsDormant(X)) {
        W = Entity.GetProp(X, 'CBasePlayer', 'm_iHealth')
    }

    var U = []; //634
    U[0] = R[0] + Y[0] * Globals.TickInterval() * 15;
    U[1] = R[1] + Y[1] * Globals.TickInterval() * 15;
    U[2] = R[2] + Y[2] * Globals.TickInterval() * 15;
    var T = Render.WorldToScreen(U); //638
    if (dynamicDamage >= W / 2) {
        color = [0, 255, 0, 255]
    } else {
        color = [255, 0, 0, 255]
    }

    Render.Circle(T[0], T[1], 5, [255, 255, 255, 255]);
    Render.String(T[0], T[1] - 30, 1, '' + dynamicDamage, color, 0)
}

function IsStanding(cn) {
    var cl = Entity.GetProp(cn, 'CBasePlayer', 'm_vecVelocity[0]'),
        cm = Math.sqrt(cl[0] * cl[0] + cl[1] * cl[1]); //663
    if (cm <= 5) {
        return true
    } else {
        return false
    }

}

function IsSlowWalking(cj) {
    var ck = Entity.GetProp(cj, 'CBasePlayer', 'm_vecVelocity[0]'),
        ci = Math.sqrt(ck[0] * ck[0] + ck[1] * ck[1]); //672
    if (ci >= 10 && ci <= 85) {
        return true
    } else {
        return false
    }

}

function ForceHead(bA) {
    DisableBaim();
    var bz = Entity.GetProp(bA, 'CBasePlayer', 'm_iHealth'); //682
    head_pos = Entity.GetHitboxPosition(bA, 0);
    result_head = Trace.Bullet(Entity.GetLocalPlayer(), bA, Entity.GetEyePosition(Entity.GetLocalPlayer()), head_pos);
    result_head[1] > 0 && result_head[1] >= UI.GetValue('Rage', GetLocalPlayerWeaponCategory(), 'Targeting', 'Minimum damage') && Ragebot['ForceTargetMinimumDamage'](bA, result_head[1])
}

function AimForHeadIfShooting() {
    if (CanShootHead() == true || onShotTargets.indexOf(Cheat.GetUsername().toLowerCase()) == -1) {
        cheat_override_damage == true
    }

}

function ForceBaim(bo) {
    !UI.IsHotkeyActive('Rage', 'GENERAL', 'General', 'Force body aim') && UI.ToggleHotkey('Rage', 'GENERAL', 'General', 'Force body aim');
    Ragebot.ForceHitboxSafety(0);
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Use highest possible damage')) {
        return
    }

    var bp = Entity.GetProp(bo, 'CBasePlayer', 'm_iHealth'); //699
    pelvis_pos = Entity.GetHitboxPosition(bo, 2);
    body_pos = Entity.GetHitboxPosition(bo, 3);
    thorax_pos = Entity.GetHitboxPosition(bo, 4);
    var bs = [0, -1],
        br = [0, -1]; //703
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        br = Trace.Bullet(Entity.GetLocalPlayer(), bo, Entity.GetEyePosition(Entity.GetLocalPlayer()), pelvis_pos), bs = Trace.Bullet(Entity.GetLocalPlayer(), bo, Entity.GetEyePosition(Entity.GetLocalPlayer()), body_pos)
    }

    var bq = Trace.Bullet(Entity.GetLocalPlayer(), bo, Entity.GetEyePosition(Entity.GetLocalPlayer()), thorax_pos),
        bn = Math.max(br[1], bs[1], bq[1]); //714
    if (bp > bn) {
        Ragebot['ForceTargetMinimumDamage'](bo, bn)
    } else {
        Ragebot['ForceTargetMinimumDamage'](bo, bp)
    }

}

function DisableBaim() {
    if (UI.IsHotkeyActive('Rage', 'GENERAL', 'Force body aim')) {
        UI.ToggleHotkey('Rage', 'GENERAL', 'Force body aim')
    }

}

function WaitForOnShot() {
    var cP = Entity.GetEnemies(); //728
    for (i = 0; i < cP.length; i++) {
        if (!Entity.IsValid(cP[i])) {
            continue
        }

        if (!Entity.IsAlive(cP[i])) {
            continue
        }

        if (Entity.IsDormant(cP[i])) {
            continue
        }

        var cQ = Entity.GetWeapon(cP[i]),
            cO = Entity.GetProp(cQ, 'CWeaponCSBase', 'm_fLastShotTime'); //736
        cO != storedShotTime[cP[i]] ? (firedThisTick[cP[i]] = true, storedShotTime[cP[i]] = cO) : firedThisTick[cP[i]] = false;
        if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Wait for on shot backtrack')) {
            return
        }

        if (firedThisTick[cP[i]] == true) {
            ForceHead(cP[i])
        } else {
            Ragebot.IgnoreTarget(cP[i]), info[cP[i]] = 'WAITING'
        }

    }

}

function deg2rad(E) {
    return E * Math.PI / 180
}

function angle_to_vec(g, h) {
    var k = deg2rad(g),
        e = deg2rad(h),
        f = Math.sin(k),
        l = Math.cos(k),
        j = Math.sin(e),
        d = Math.cos(e); //753
    return [l * d, l * j, -f]
}

function trace(cJ, cN) {
    var cK = angle_to_vec(cN[0], cN[1]),
        cI = Entity.GetRenderOrigin(cJ); //767
    cI[2] += 50;
    var cM = [cI[0] + cK[0] * 8192, cI[1] + cK[1] * 8192, cI[2] + cK[2] * 8192],
        cH = Trace.Line(cJ, cI, cM); //770
    if (cH[1] == 1) {
        return
    }

    cM = [cI[0] + cK[0] * cH[1] * 8192, cI[1] + cK[1] * cH[1] * 8192, cI[2] + cK[2] * cH[1] * 8192];
    var cL = Math.sqrt((cI[0] - cM[0]) * (cI[0] - cM[0]) + (cI[1] - cM[1]) * (cI[1] - cM[1]) + (cI[2] - cM[2]) * (cI[2] - cM[2])); //783
    cI = Render.WorldToScreen(cI);
    cM = Render.WorldToScreen(cM);
    if (cM[2] != 1 || cI[2] != 1) {
        return
    }

    return cL
}

function ReversedFreestanding() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Reversed freestanding')) {
        return
    }

    var cy = Entity.GetLocalPlayer(); //794
    if (Entity.IsValid(cy)) {
        var cx = Entity.GetEyePosition(cy); //796
        left_distance = trace(cy, [0, cx[1] - 33]);
        right_distance = trace(cy, [0, cx[1] + 33]);
        if (left_distance > right_distance) {
            if (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter')) {
                UI.ToggleHotkey('Anti-Aim', 'Fake angles', 'Inverter')
            }

        }

        if (right_distance > left_distance) {
            if (!UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter')) {
                UI.ToggleHotkey('Anti-Aim', 'Fake angles', 'Inverter')
            }

        }

    }

}

function IsHoldingGrenade(bZ) {
    if (Entity.GetName(Entity.GetWeapon(bZ)) == 'high explosive grenade' || Entity.GetName(Entity.GetWeapon(bZ)) == 'molotov' || Entity.GetName(Entity.GetWeapon(bZ)) == 'incendiary grenade') {
        return true
    }

    return false
}

function DrawDanger(L, N, M) {
    Render.FilledCircle(L, N, 15, [0, 0, 0, 125]);
    Render.Circle(L, N, 15, M);
    Render.String(L - 0.5, N - 7, 1, '!', [255, 255, 255, 200])
}

function DrawToggles() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators')) {
        return
    }

    var bh = Global.GetScreenSize(),
        bg; //841
    bg = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color');
    if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows')) {
        if (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter')) {
            Render.Polygon([
                [bh[0] / 2 - 49, bh[1] / 2 + 9],
                [bh[0] / 2 - 65, bh[1] / 2],
                [bh[0] / 2 - 49, bh[1] / 2 - 9]
            ], [0, 0, 0, 80]), Render.Polygon([
                [bh[0] / 2 + 49, bh[1] / 2 - 9],
                [bh[0] / 2 + 65, bh[1] / 2],
                [bh[0] / 2 + 49, bh[1] / 2 + 9]
            ], bg)
        } else {
            Render.Polygon([
                [bh[0] / 2 - 49, bh[1] / 2 + 9],
                [bh[0] / 2 - 65, bh[1] / 2],
                [bh[0] / 2 - 49, bh[1] / 2 - 9]
            ], bg), Render.Polygon([
                [bh[0] / 2 + 49, bh[1] / 2 - 9],
                [bh[0] / 2 + 65, bh[1] / 2],
                [bh[0] / 2 + 49, bh[1] / 2 + 9]
            ], [0, 0, 0, 80])
        }

    }

    var bf = GetActiveIndicators(),
        bd = 0; //913
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 1)) {
        bd += 1;
        Render.String(bh[0] / 2, bh[1] / 2 + (bf - bd) * 10 + 22, 1, 'DT', [135, 185, 52, 255], font, 3);
        const be = -255 * Exploit.GetCharge(); //923
        Render.Rect(bh[0] / 2 - 6, bh[1] / 2 + (bf - bd) * 10 + 2 + 32, 13, 4, [0, 0, 0, 90]), Render.GradientRect(bh[0] / 2 - 5, bh[1] / 2 + (bf - bd) * 10 + 3 + 32, (Exploit.GetCharge() + 0.1) * 10, 2, 1, [135, 185, 52, 150], [135, 185, 52, 255])
    }

    UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 0) && (bd += 1, Render.String(bh[0] / 2, bh[1] / 2 + (bf - bd) * 10 + 20, 1, 'DODGE', [255, 0, 0, 255], font,  3));
    if (UI.IsHotkeyActive('Rage', 'General', 'Force safe point') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 3)) {
        bd += 1, Render.String(bh[0] / 2, bh[1] / 2 + (bf - bd) * 10 + 18, 1, 'SAFE', [255, 255, 255, 255], font, 3)
    }

    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 2)) {
        bd += 1, Render.String(bh[0] / 2, bh[1] / 2 + (bf - bd) * 10 + 16, 1, 'HIDE', [135, 185, 52, 255], font, 3)
    }

    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 5)) {
        bd += 1, Render.String(bh[0] / 2, bh[1] / 2 + (bf - bd) * 10 + 14, 1, 'DUCK', [25, 90, 175, 255], font, 3)
        
    }

    UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 4) && (bd += 1, Render.String(bh[0] / 2, bh[1] / 2 + (bf - bd) * 10 + 20, 1, 'DMG', [255, 128, 0, 255], font, 3))
}

function DrawDangerSigns() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Draw danger signs')) {
        return
    }

    var Q = Entity.GetEnemies(); //982
    for (i = 0; i < Q.length; i++) {
        if (!Entity.IsValid(Q[i])) {
            continue
        }

        if (!Entity.IsAlive(Q[i])) {
            continue
        }

        if (Entity.IsDormant(Q[i])) {
            continue
        }

        var P = Entity.GetRenderBox(Q[i]),
            O = P[3] - P[1]; //990
        O /= 2;
        O += P[1];
        if (IsHoldingGrenade(Q[i])) {
            DrawDanger(O, P[2] - 45, [255, 255, 0, 255])
        }

        if (Entity.GetName(Entity.GetWeapon(Q[i])) == 'zeus x27') {
            DrawDanger(O, P[2] - 45, [255, 0, 0, 255])
        }

    }

}

function DrawIndicators() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Draw HEAD/BAIM flags')) {
        return
    }

    var bb = Global.GetScreenSize(); //1014
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions')) {
        return
    }

    var ba = Entity.GetEnemies(); //1017
    for (i = 0; i < ba.length; i++) {
        if (!Entity.IsValid(ba[i])) {
            continue
        }

        if (!Entity.IsAlive(ba[i])) {
            continue
        }

        if (Entity.IsDormant(ba[i])) {
            continue
        }

        var Z = Entity.GetRenderBox(ba[i]),
            bc = Z[3] - Z[1]; //1025
        bc /= 2;
        bc += Z[1];
        switch (info[ba[i]]) {
        case 'HEAD':
            Render.StringCustom(bc, Z[2] - 25, 1, info[ba[i]], [215, 255, 150, 255], font);
            break //1030
        case 'DEFAULT':
            Render.StringCustom(bc, Z[2] - 25, 1, info[ba[i]], [255, 255, 255, 255], font);
            break //1038
        case 'AIR':
            Render.StringCustom(bc, Z[2] - 25, 1, info[ba[i]], [0, 255, 255, 255], font);
            break //1046
        case 'CROUCH':
            Render.StringCustom(bc, Z[2] - 25, 1, info[ba[i]], [199, 145, 18, 255], font);
            break //1054
        case 'LETHAL':
            Render.StringCustom(bc, Z[2] - 25, 1, info[ba[i]], [63, 133, 252, 255], font);
            break //1062
        case 'SLOW':
            Render.StringCustom(bc, Z[2] - 25, 1, info[ba[i]], [63, 133, 252, 255], font);
            break //1070
        case 'X2':
            Render.StringCustom(bc, Z[2] - 25, 1, info[ba[i]], [0, 128, 240, 255], font);
            break //1078
        case 'WAITING':
            Render.StringCustom(bc, Z[2] - 25, 1, info[ba[i]], [255, 125, 255, 255], font);
            break //1086
        case 'STANDING':
            Render.StringCustom(bc, Z[2] - 25, 1, info[ba[i]], [155, 255, 252, 255], font);
            break //1094
        case 'SHOT':
            Render.StringCustom(bc, Z[2] - 25, 1, info[ba[i]], [255, 255, 150, 255], font);
            break //1102
        case 'OVERRIDE':
            Render.StringCustom(bc, Z[2] - 25, 1, info[ba[i]], [255, 125, 255, 255], font);
            break
        }

        if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Draw SAFE flags') && safeTargets[ba[i]]) {
            Render.StringCustom(bc, Z[2] - 35, 1, 'SAFE', [222, 171, 255, 255], font)
        }

    }

}

function GetHitboxName(bP) {
    var bO = ''; //1130
    switch (bP) {
    case 0:
        bO = 'Head';
        break //1132
    case 1:
        bO = 'Neck';
        break //1135
    case 2:
        bO = 'Pelvis';
        break //1138
    case 3:
        bO = 'Body';
        break //1141
    case 4:
        bO = 'Thorax';
        break //1144
    case 5:
        bO = 'Chest';
        break //1147
    case 6:
        bO = 'Upper chest';
        break //1150
    case 7:
        bO = 'Left thigh';
        break //1153
    case 8:
        bO = 'Right thigh';
        break //1156
    case 9:
        bO = 'Left calf';
        break //1159
    case 10:
        bO = 'Right calf';
        break //1162
    case 11:
        bO = 'Left foot';
        break //1165
    case 12:
        bO = 'Right foot';
        break //1168
    case 13:
        bO = 'Left hand';
        break //1171
    case 14:
        bO = 'Right hand';
        break //1174
    case 15:
        bO = 'Left upper arm';
        break //1177
    case 16:
        bO = 'Left forearm';
        break //1180
    case 17:
        bO = 'Right upper arm';
        break //1183
    case 18:
        bO = 'Right forearm';
        break //1186
    default:
        bO = 'Generic'
    }

    return bO
}

function RagebotLogs() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Ragebot fire logs')) {
        return







    }

    bg = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color');


    target = Event.GetInt('target_index');
    targetName = Entity.GetName(target);
    hitbox = Event.GetInt('hitbox');
    hitchance = Event.GetInt('hitchance');
    safepoint = Event.GetInt('safepoint');
    exploit = Event.GetInt('exploit');
    log = '[onetap] Fired shot at ' + targetName + ' (' + target + ')' + ' [target hitbox: ' + GetHitboxName(hitbox) + '] [hitchance: ' + hitchance + '] [safepoint: ' + safepoint + '] [exploit: ' + exploit + ']';
    log += '\x0A';
    Cheat.PrintColor([140, 255, 0, 255], log)
}

function SafepointOnLimbs() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Safe point on limbs')) {
        return
    }

    Ragebot.ForceHitboxSafety(12);
    Ragebot.ForceHitboxSafety(11);
    Ragebot.ForceHitboxSafety(10);
    Ragebot.ForceHitboxSafety(9)
}

function OverrideMinimumDamage() {
    if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key')) {
        return
    }

    var cu = Entity.GetEnemies(); //1226
    value = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Minimum damage');
    for (i = 0; i < cu.length; i++) {
        Ragebot['ForceTargetMinimumDamage'](cu[i], value), info[cu[i]] = 'OVERRIDE'
    }

}

function ForceConditions() {
    AimForHeadIfShooting();
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions')) {
        return
    }

    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Wait for on shot backtrack')) {
        return
    }

    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key')) {
        return
    }

    var bu = Entity.GetEnemies(),
        bw = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta'),
        by = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions'),
        bv = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions'),
        bt = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force SAFEPOINT conditions'); //1241
    for (i = 0; i < bu.length; i++) {
        if (!Entity.IsValid(bu[i])) {
            continue
        }

        if (!Entity.IsAlive(bu[i])) {
            continue
        }

        if (Entity.IsDormant(bu[i])) {
            continue
        }

        mode = '';
        info[bu[i]] = 'DEFAULT';
        safeTargets[bu[i]] = false;
        var bx = Ragebot.GetTarget(); //1256
        getDropdownValue(bt, 0) && IsLethal(bu[i]) && (safeTargets[bu[i]] = true, Ragebot.ForceTargetSafety(bu[i]));
        getDropdownValue(bt, 1) && IsSlowWalking(bu[i]) && (safeTargets[bu[i]] = true, Ragebot.ForceTargetSafety(bu[i]));
        if (getDropdownValue(bt, 3) && IsInAir(bu[i])) {
            safeTargets[bu[i]] = true, Ragebot.ForceTargetSafety(bu[i])
        }

        if (getDropdownValue(bt, 2) && IsStanding(bu[i]) && !IsInAir(bu[i])) {
            safeTargets[bu[i]] = true, Ragebot.ForceTargetSafety(bu[i])
        }

        getDropdownValue(bt, 4) && IsCrouch(bu[i]) && (safeTargets[bu[i]] = true, Ragebot.ForceTargetSafety(bu[i]));
        if (AttemptTwoShotKill(bu[i]) == true && UI.GetValue('Misc', 'JAVASCRIPT', 'Predict doubletap damage')) {
            info[bu[i]] = 'X2';
            continue
        }

        if (getDropdownValue(bv, 0) && IsLethal(bu[i])) {
            if (bx == bu[i]) {
                ForceBaim(bu[i])
            }

            info[bu[i]] = 'LETHAL';
            continue
        }

        if (getDropdownValue(by, 3) && firedThisTick[bu[i]] == true) {
            ForceHead(bu[i]);
            info[bu[i]] = 'SHOT';
            continue
        }

        if (getDropdownValue(bv, 1) && IsSlowWalking(bu[i])) {
            if (bx == bu[i]) {
                ForceBaim(bu[i])
            }

            info[bu[i]] = 'SLOW';
            continue
        }

        if (getDropdownValue(bv, 3) && IsInAir(bu[i])) {
            if (bx == bu[i]) {
                ForceBaim(bu[i])
            }

            info[bu[i]] = 'AIR';
            continue
        }

        if (getDropdownValue(bv, 2) && IsStanding(bu[i]) && !IsInAir(bu[i])) {
            if (bx == bu[i]) {
                ForceBaim(bu[i])
            }

            info[bu[i]] = 'STANDING';
            continue
        }

        if (getDropdownValue(bv, 4) && IsCrouch(bu[i])) {
            if (bx == bu[i]) {
                ForceBaim(bu[i])
            }

            info[bu[i]] = 'CROUCH';
            continue
        }

        if (getDropdownValue(by, 1) && IsInAir(bu[i])) {
            ForceHead(bu[i]);
            info[bu[i]] = 'AIR';
            continue
        }

        if (getDropdownValue(by, 0) && GetMaxDesync(bu[i]) < bw && !IsInAir(bu[i])) {
            ForceHead(bu[i]);
            info[bu[i]] = 'HEAD';
            continue
        }

        if (getDropdownValue(by, 2) && IsCrouchTerrorist(bu[i])) {
            ForceHead(bu[i]);
            info[bu[i]] = 'CROUCH';
            continue
        }

        DisableBaim()
    }

}

function Draw() {
    font = Render.AddFont("Segoe UI", 0, 100);


    if (UI.IsMenuOpen()) {
        if (getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions'), 1)) {
            UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions', setDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions'), 3, false))
        }

        if (getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions'), 2)) {
            UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions', setDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions'), 4, false))
        }

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
            delta = true
        }

        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta', delta), UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Draw HEAD/BAIM flags', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false), UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Draw SAFE flags', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false), UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Draw danger signs', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false), UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Features to display', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false), UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Predict doubletap damage', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? true : false), UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Hitchance', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Jump scout/revolver hitchance') ? true : false), UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'No scope hitchance', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Override no scope hitchance') ? true : false)
    }

    AimForHeadIfShooting();
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Activate HvH Essentials!')) {
        return
    }

    if (!Entity.IsValid(Entity.GetLocalPlayer())) {
        return
    }

    if (!Entity.IsAlive(Entity.GetLocalPlayer())) {
        return
    }

    DrawIndicators();
    DrawToggles();
    DrawDynamicDamage();
    DrawDangerSigns()
}

function can_shift_shot(z) {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Fast Recharge')) {
        return
    }

    var x = Entity.GetLocalPlayer(); //1360
    var A = Entity.GetWeapon(x); //1361
    if (x == null || A == null) {
        return false
    }

    var y = Entity.GetProp(x, "CCSPlayer", "m_nTickBase"); //1366
    var w = Globals.TickInterval() * (y - z); //1367
    if (w < Entity.GetProp(x, "CCSPlayer", "m_flNextAttack")) {
        return false
    }

    if (w < Entity.GetProp(A, "CBaseCombatWeapon", "m_flNextPrimaryAttack")) {
        return false
    }

    return true
}

function _TBC_CREATE_MOVE() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Fast Recharge')) {
        return
    }

    var c = Exploit.GetCharge(); //1381
    Exploit[(c != 1 ? "Enable" : "Disable") + "Recharge"]();
    if (can_shift_shot(14) && c != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    }

}

function _TBC_UNLOAD() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Fast Recharge')) {
        return
    }

    Exploit.EnableRecharge()
}

function CreateMove() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Activate HvH Essentials!')) {
        return
    }

    if (!Entity.IsValid(Entity.GetLocalPlayer())) {
        return
    }

    if (!Entity.IsAlive(Entity.GetLocalPlayer())) {
        return
    }

    AimForHeadIfShooting();
    ForceConditions();
    SetHitchanceInAir();
    ReversedFreestanding();
    SafepointOnLimbs();
    WaitForOnShot();
    OverrideMinimumDamage();
    DodgeBruteforce();
    NoScopeHitchance()
}

function FrameNetUpdateStart() {
    UI.GetValue('Misc', 'JAVASCRIPT', 'Instant doubletap') && (Exploit.OverrideTolerance(0), Exploit.OverrideShift(14), shouldDisable = true);
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Instant doubletap') && shouldDisable == true) {
        Exploit.OverrideTolerance(1), Exploit.OverrideShift(16), shouldDisable = false
    }

}

function ClearData() {
    firedThisTick = [];
    storedShotTime = [];
    info = []
}

function Main() {
    for (i = 0; i < 64; i++) {
        info[i] = '';
        safeTargets[i] = false
    }

    Cheat.RegisterCallback('CreateMove', 'CreateMove');
    Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
    Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");
    Cheat.RegisterCallback('Draw', 'Draw');
    Cheat.RegisterCallback('ragebot_fire', 'RagebotLogs');
    Cheat.RegisterCallback('round_start', 'ClearData');
    Cheat.RegisterCallback('FRAME_NET_UPDATE_START', 'FrameNetUpdateStart');
    Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
    Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");
    Cheat.RegisterCallback("Draw", "clantag")
}
Main()