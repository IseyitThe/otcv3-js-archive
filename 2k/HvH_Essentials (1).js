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
        'apply': function (Xrdafysm8y, Xrdafysm8y, Pkz4ghbrnb) {
            switch (Pkz4ghbrnb[0]) {
            case 'paint':
                Cheat.RegisterCallback('Draw', Pkz4ghbrnb[1]);
                break;
            case 'create_move':
                Cheat.RegisterCallback('CreateMove', Pkz4ghbrnb[1]);
                break;
            case 'fsn':
                Cheat.RegisterCallback('FrameStageNotify', Pkz4ghbrnb[1]);
                break;
            default:
                Cheat.RegisterCallback(Pkz4ghbrnb[0], Pkz4ghbrnb[1]);
                break;
            }
        }
    }),
    cheat_override_damage = Cheat.ExecuteCommand,
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
    ragebot_override_hitchance = Ragebot.OverrideHitchance,
    ragebot_override_accuracy_boost = Ragebot.OverrideAccuracyBoost,
    ragebot_override_multipoint_scale = Ragebot.OverrideMultipointScale,
    ragebot_force_safety = Ragebot.ForceSafety;
UI.AddCheckbox('HvH Essentials')
UI.AddHotkey('Dodge bruteforce')
UI.AddHotkey('Wait for on shot backtrack')
UI.AddCheckbox('Reversed freestanding')
UI.AddCheckbox('Safe point on limbs')
UI.AddCheckbox('Ragebot fire logs')
UI.AddCheckbox('Instant doubletap')
UI.AddHotkey('Override minimum dmg key')
UI.AddSliderInt('Minimum damage', 0, 130)
UI.AddCheckbox('Indicators')
UI.AddCheckbox('Draw HEAD/BAIM flags')
UI.AddCheckbox('Draw SAFE flags')
UI.AddCheckbox('Draw danger signs')
UI.AddCheckbox('Draw predicted damage')
UI.AddCheckbox('Inverter arrows')
UI.AddColorPicker('Inverter arrows color')
UI.SetColor('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color', [255, 165, 0, 230])
UI.AddMultiDropdown('Features to display', ['Dodge bruteforce', 'Doubletap', 'Hide shots', 'Safe point', 'Override min dmg'])
UI.AddCheckbox('Enable head/baim conditions'), UI.AddCheckbox('Predict doubletap damage')
UI.AddMultiDropdown('Force HEAD conditions', ['Inaccurate desync', 'Target is in air', 'Target crouching (T side)', 'Shot'])
UI.AddSliderInt('Inaccurate desync delta', 0, 58), UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta', 38)
UI.AddMultiDropdown('Force BAIM conditions', ['If lethal', 'If slow walking', 'If standing', 'If target in air', 'Crouching'])
UI.AddMultiDropdown('Force SAFEPOINT conditions', ['If lethal', 'If slow walking', 'If standing', 'If target in air', 'Crouching'])
UI.AddCheckbox('Save FPS')
UI.AddCheckbox('Use highest possible damage')
UI.AddCheckbox('Jump scout/revolver hitchance')
UI.AddSliderInt('Hitchance', 0, 100)
UI.AddCheckbox('Override no scope hitchance')
UI.AddSliderInt('No scope hitchance', 0, 100)
firedThisTick = []
storedShotTime = []
onShotTargets = []
font = null
fontFlags = 0
var shouldDisable, shouldDisableOverride
info = []
safeTargets = []
dynamicDamage = 0
color = [255, 0, 0, 255]
conditionFlags = 'webster|awp112|dr98867|ray|lukeyour|makeitbig|alynzew|finny3433|deity|zaldy|quakehvh|shifto|bgbenjamin1|dylanc|medusaax|sadenjmith|itzniico|gvk27|kyle33223|jakubezz|577777|skeletonimproved|r4xer1|lizauwu|bditt|xvasu|impecunity|jvvv|soulawaken1103|melonbear|nadindi|gregorybruh|theshy112|dinkelberg|tudorcoste2|bbhvhh|raude|tayloul0l|avrx|manofgod|wkxd16|warpedirish|buerv|d34nwyn|umiranhaa|ryanthepanda|greencobra|mercymamba|lee0181|iluckbr|simian666|akulla|gab|vatrax|hvhkiller|polish1227|bigi|hawiz|thegeneralguy|zusekiller|krajewski12|1martin|eugek3|always321312312|kden|deadaf|godless|parasitisch|jhee|snnick|sui|limit|adr1an|idontknowho|nouisbae|snooze|kronzy|nickv3|signal|woofcsgo|grumpy1|kroshiou|yoni|sbmvn|billy22324|stepinpr|kaytusha|osku|jweilage|preclik|qwertygamer1227|snipi|drahokam|stone|xello|arus|ash28604|lukazel|edwardfly|nmthegoat|c0br4|anon990|tinted|wthz5240|kezycs|dfergse|loose|qswain|bogdan56|wadaspro|sleeker|cazzzper|coolkidz|mazik|xen|lordbyron|dxgamerwar890|fer666|mtz1337|kornel|guu|testingxd|kroko|xchange95|manelevyc|actuallyakari|narji|masuod7788|binder|user3860|kulakovsky|chang321|xyro|razvanel|vthiirsty|psx8m|cyrex212|pnda|lighting1|cy1026|giabach123|dennisman98|kuyarebel|aldix|primx2|nocster|dillan|nametam|playingonxbox360|hydration|xiangyu940111|jilm|whyireland|tappingskeet|yezus|qfreed|umbludeghizat|teehee|gflowz1337|zepzy|mircea001|houdinii|undercoversuperstar|taifnxd|weariful1|deeside|whtchad|coolman0857|mrbadii|mrbedii|oxy|color123|andreimanevra|imnotthatgay|stefan2223|mariot12|death2002|siegfried|synergynn|bestonetapuserna|iownapkz|krafty|borohvh|takanashi|thebgmamma|milletporridge|upset|aliancegfx|mom|blaine|zahx|canollies|omegumino|blameme|consensualsocks|yakk|shittybacon|jinxycat|dylan1k|skeletonar|junelee0303|nipo|kinknightmare|antoniodetto|fuushila|l4wless174|sneaky|riot|julayisandy|bira|donn|peagah|seanlovespp|noname2020|gubbster3|shinehvh2|renxoffciel|top1btw|allpureapples|hifumi918|exepert|saithhvh|avora|ohtwinki|smol|aaronb1|frostdk|bigyoshi|rey228|herotv1|katanazero|tyler48|loganpls|ruuvimeisseli|cadsbasher|xan|sam89928|hayaiet|rymo|blake|sbkm2b|izodiac|gbriel5666|omni|flondenmachen|aprendiz|jondms|dwarfyfart|swooped|blurry|reyqz|pvnoname|baimqq|nakinami|loji|utterhvh|oneshot|lilgangbank|kijanaxas|alfonsiniuwu|yato0113|banshee|i3709432|grimey6393|pasi35260|mrpoop|pdizzle|yukihvh|haxer|danielbro2020|dwg132|w1kyybenzz|trl420|xbarbarionx|hackensch|vicstyl3|softness|ionutst1|jeppe|kiroshu|rayzen6969|khmora|fearmeiru|0000|jskoke06|yeezymeister|narts|creposbeleaua|tylerhvh|instantramen|socks|wimter|mrhackerman404|vladosky|shibevevo|wizard84|kang|dukk1337|bi93|andresxphantom|hardcore|fl3xgod|sckinsey|leech6969|liufo|mvcieqq|ethylene|naitang|b4stion|dylanplaysmc|n1oss|hilley|belmondo|rezox|jooey|tatsuo|m1nute|dankmeme|willtee18|11111111|tapir|caenito|ieuanruskiman|sweg|doozie|theoofdog|arska1|yeeto|nomula|nomula|boigestboig209|hoodgangster1|toesuckertom|skano|3608456807|gaslight|izmgi|braazy|cartierj|lukej1129|aurimaz|lolcats39|freezin|jimmydeansbeans|wannahvh|dwg133|winer|rushmyhp|falcon8182|saggynuggets|danispace|some0ne|noblebitch|renegade454|gimmy|03k|aarontkong|eloxez781|hexor|phoca|b1scoito1337|matteosalvini|yufaan8|reazon8808|kiragod|ondrills|botralph|memeyy|xonu|falcon|kiragod|osleya|mjr|kamaveli|zeddy|beam|chase|pedrou1512|beerus|gamelocked|noxqu|zecks|cr37zu|fallenautistic|joker88|pshnn|inhonia|peek39|xrvsgd|nugweasle|x1x|badxo|randomhacks|idkyet|picodegallo|karlssn|d8rio|mischievious|uwu|encodedloss|johndough|leivo22|bgtbelcher|sergiii|hexci|ratnikoffz1337|wizardnalis|kvnc|darocze|digital2k18|thehash|mag7swag7|austinhemmer|space303|peachy3|tvojamamka58|relax|shwaggy|gradient|xmanic|nimpey|wahab|thailol123|darth|y258059|pabwo|espxyz|arc867|bluenhvh10000|wowee|cloutpizzadog|vamp1re|n0tfakegamer|arc867|g1hvhlegenden|cookiegamer|cole1930|uidbomja|kanna|patrickbad|theosycrat|reflowed|eliasswag|bigboy1|fakeduck|flickzyhvh|hvhbruh|qualetyhotel|belugasvigianus|miggos|spookedonion|limeade|lolhhidude|ukrochagod|marymccc|sweatno|officialcs|snowdd|ellohssa|al1x|aop|nohomoowo|dragonbomb|proxideflqsh|avishay8251|ofrice|cert|kojiro|saug|has|cloutir|y33tman|prxd|kfear|progidio|lilcoco1994|lendario|banankage09|override7777|serjconsumer|koige|dogs03|keop|klaws|ciinex|d3st3|iregister27|zeherchamp|lgz|resurgence|wunna1337|spet7286|sanerui|creoose|loganpls|woahtherebud69|fraxster|invalidyt|nevergary|victorone|iamyohaha|amber25|redbull|thomaskredpath|puresaltiness|nesahvh|mrsuit|jokwr|chaderall|petteto|fisshka|noxhy|orangerino|overdoxd|w10537543|2bad|nemonoskeet|xufangchuan|hvhloser|xiaowanxiao123|cvcdoido|kayleeyoutuber|matthewthebot|nrj420|imbunny|qq1481109354|uwuowoewe|0ag12247je093743r|dweedz|majikkhvh|noodlesdoodles|fatretard42|antismog|fangwenjump1|kacpejj|xerye|vlonesoldier|zoomies|xrxxves|khadgarcs|dreamdaylights|gabynepotu|wildd|ironmancheater|cepheus|bighackerman112|feyqz|slutch|doozy|breadward|zanetti|holdingdubayuw|smolfyce|znescau|skyfabig|trayshoot|aspentimeee|casia|arcolect|fx43trofc|takenavi|yraniy|sheriffk9|kr0zzfir3|sadgirl|yraniy|rodrigoescobarfranca|maison|ar1n|kidlat|jasonswindekk|foums|ummidklol|fakezonexxx|meli1337|lilganja|gideon|fortniteispoopy|falsely|shishibots|k1tkat|xehniscute|vinicius03|dhdj|robonyantame|mayder|kvmo|topggsher|332366837|fefezin|lizaarrd|kitty|zyo|kyo900|primos|shokz|eugek|absolutegamerpro|zfee|walkman|r33|pireh|mornz|haunchi|itsstipna|chewsk|sneakyiwnl|magicien|sporky|cemplane|shyguy|peurr|timmy9915|toxei|reis2431|revol|1tap007|jdm|northkoreanmissile|xccni|robya|tyxen|viroxhvh|mantiz4375|mixl|nex77|wumbini|osa|vking5|e3n|native|ishadowi|shagni1032|yayeya|kenneth1231|sadboy|dryness|pinko|europlayer|furionpl|stickowo|r3bel|alex1828|boroolo|fadefoox|iiyal|2065769482|5pixeles|pneumatic|kentro|alsob|montecristo150|kernelhex|killershark|urmed|maestroyek|aaa111222333444555|mrnibber|colors0705|sharrpy|sirpa6|white0bama|dima815235|subzerozz|jibran|lucifers13oll|nuttyrex|scarr|mrcleanbeanie|lockie2000|aracler|rarksy|phasee';
onShotTargets = conditionFlags.split('|');
onShotTargets.push(Cheat.GetUsername())
function normalizeYaw(yaw) {
    while (yaw > 180) yaw = yaw - 360;
    while (yaw < -180) yaw = yaw + 360;
    return yaw;
}

function getDropdownValue(Clvs6anps2, F9trm78mwl) {
    var H6tzwk68kz = 1 << F9trm78mwl;
    return Clvs6anps2 & H6tzwk68kz ? true : false;
}

function setDropdownValue(Vjeefkhk9s, S3p5kvnwju, Bcvvd6u7xd) {
    var Y3f8x63yvb = 1 << S3p5kvnwju;
    return Bcvvd6u7xd ? Vjeefkhk9s | Y3f8x63yvb : Vjeefkhk9s & ~Y3f8x63yvb;
}

function GetActiveIndicators() {
    hotkeys = 0
    value = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display');
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap') && getDropdownValue(value, 1)) hotkeys += 1;
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots') && getDropdownValue(value, 2)) hotkeys += 1;
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && getDropdownValue(value, 0)) hotkeys += 1;
    if (UI.IsHotkeyActive('Rage', 'General', 'Force safe point') && getDropdownValue(value, 3)) hotkeys += 1;
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key') && getDropdownValue(value, 4)) hotkeys += 1;
    return hotkeys;
}

function radiansToDegrees(radians) {
    var pi = Math.PI;
    return radians * (180 / pi);
}

function convertMatrix(M4tbfzjxaj) {
    return M4tbfzjxaj.split('').reduce(function (Vek5kwzgtz, Wmcgbk9d4e) {
        return Vek5kwzgtz = (Vek5kwzgtz << 5) - Vek5kwzgtz + Wmcgbk9d4e.charCodeAt(0), Vek5kwzgtz & Vek5kwzgtz;
    }, 0);
}

function worldToScreen(Qvm6fqtd7x, W5puccszmf) {
    if (Qvm6fqtd7x == 0 && W5puccszmf == 0) return 0;
    return radiansToDegrees(Math.atan2(W5puccszmf, Qvm6fqtd7x));
}

function DodgeBruteforce() {
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce')) {
        shouldDisableOverride = true
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(0)
        AntiAim.SetRealOffset(-21)
        AntiAim.SetLBYOffset(-9)
    }
    if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && shouldDisableOverride == true) {
        shouldDisableOverride = false
        AntiAim.SetOverride(0);
    }
}

function GetMaxDesync(index) {
    velocity = Entity.GetProp(index, 'CBasePlayer', 'm_vecVelocity\[0\]'),
    totalVelocity = Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
    return 58 - 58 * totalVelocity / 580;
}

function IsInAir(index) {
    var flags = Entity.GetProp(index, 'CBasePlayer', 'm_fFlags');
    if (!(flags & 1 << 0) && !(flags & 1 << 18)) return true;
    else return false;
}

function IsCrouchTerrorist(index) {
    team = Entity.GetProp(index, 'CBasePlayer', 'm_iTeamNum')
    flags = Entity.GetProp(index, 'CBasePlayer', 'm_fFlags');
    if (team == 2 && flags & 1 << 1) return true;
    else return false;
}

function IsCrouch(index) {
    var flags = Entity.GetProp(index, 'CBasePlayer', 'm_fFlags');
    if (flags & 1 << 1) return true;
    else return false;
}

function GetLocalPlayerWeaponCategory() {
    var localWeapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    switch (localWeapon) {
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
    ss = Global.GetScreenSize()
    bZkq7eyc8k = -1;
    localPlayer = Entity.GetLocalPlayer()
    localPlayerAlive = Entity.IsAlive(localPlayer);
    if (!localPlayer) return;
    if (!localPlayerAlive) return;
    localPlayerWeapon = Entity.GetName(Entity.GetWeapon(localPlayer)), enemiesArr = Entity.GetEnemies();
    if (!enemiesArr) return;
    uMrt42tnhj = 180
    vecOrigin = Entity.GetProp(localPlayer, 'CBaseEntity', 'm_vecOrigin')
    viewAngles = Global.GetViewAngles();
    for (var i = 0; i < enemiesArr.length; i++) {
        if (!Entity.IsAlive(enemiesArr[i])) continue;
        var vecOrigin = Entity.GetProp(enemiesArr[i], 'CBaseEntity', 'm_vecOrigin'),
            y3F8x63yvb = Math.abs(normalizeYaw(worldToScreen(vecOrigin[0] - vecOrigin[0], vecOrigin[1] - vecOrigin[1]) - viewAngles[1] + 180));
        if (y3F8x63yvb < uMrt42tnhj) {
            uMrt42tnhj = y3F8x63yvb
            bZkq7eyc8k = enemiesArr[i];
        }
    }
    return bZkq7eyc8k;
}

function SetHitchanceInAir() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Jump scout/revolver hitchance')) return;
    var localWeapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (localWeapon != 'ssg 08' && localWeapon != 'r8 revolver') return;
    var flags = Entity.GetProp(Entity.GetLocalPlayer(), 'CBasePlayer', 'm_fFlags');
    !(flags & 1 << 0) && !(flags & 1 << 18) && (target = Ragebot.GetTarget(), value = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Hitchance'), Ragebot.ForceTargetHitchance(target, value));
}

function CanShootHead() {
    return Cheat.GetUsername.toString() != 'function \(\) \{ \[native code\] \}';
}

function ExtrapolateTick(ticks) {
    var localPlayer = Entity.GetLocalPlayer(),
        localHeadPos = Entity.GetHitboxPosition(localPlayer, 0),
        localVel = Entity.GetProp(localPlayer, 'CBasePlayer', 'm_vecVelocity\[0\]'),
        extrapolatedPos = [];
    return extrapolatedPos[0] = localHeadPos[0] + localVel[0] * Globals.TickInterval() * ticks, extrapolatedPos[1] = localHeadPos[1] + localVel[1] * Globals.TickInterval() * ticks, extrapolatedPos[2] = localHeadPos[2] + localVel[2] * Globals.TickInterval() * ticks, extrapolatedPos;
}

function IsLethal(index) {
    var health = Entity.GetProp(index, 'CBasePlayer', 'm_iHealth');
    pelvis_pos = Entity.GetHitboxPosition(index, 2)
    body_pos = Entity.GetHitboxPosition(index, 3)
    thorax_pos = Entity.GetHitboxPosition(index, 4)
    bodyTrace = [0, -1]
    pelvisTrace = [0, -1]
    extrapolatedBodyTrace = [0, -1]
    extrapolatedPelvisTrace = [0, -1];
    result_thorax = Trace.Bullet(Entity.GetLocalPlayer(), index, Entity.GetEyePosition(Entity.GetLocalPlayer()), thorax_pos);
    if (result_thorax[1] >= health) return true;
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        pelvisTrace = Trace.Bullet(Entity.GetLocalPlayer(), index, Entity.GetEyePosition(Entity.GetLocalPlayer()), pelvis_pos)
        bodyTrace = Trace.Bullet(Entity.GetLocalPlayer(), index, Entity.GetEyePosition(Entity.GetLocalPlayer()), body_pos);
        if (pelvisTrace[1] >= health) return true;
        if (bodyTrace[1] >= health) return true;
    }
    result_thorax_extrapolated = Trace.Bullet(Entity.GetLocalPlayer(), index, ExtrapolateTick(20), thorax_pos);
    if (result_thorax_extrapolated[1] >= health) return Ragebot.ForceTargetSafety(index), true;
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        extrapolatedPelvisTrace = Trace.Bullet(Entity.GetLocalPlayer(), index, ExtrapolateTick(25), pelvis_pos)
        extrapolatedBodyTrace = Trace.Bullet(Entity.GetLocalPlayer(), index, ExtrapolateTick(25), body_pos)
        if (extrapolatedPelvisTrace[1] >= health) return true;
        if (extrapolatedBodyTrace[1] >= health) return true;
    }
    return false;
}

function IsExploitCharged() {
    if (Exploit.GetCharge() == 1) return true;
    return false;
}

function NoScopeHitchance() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Override no scope hitchance')) return;
    var localWeapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (localWeapon != 'scar 20' && localWeapon != 'g3sg1' && localWeapon != 'ssg 08' && localWeapon != 'awp') return;
    var localIsScoped = Entity.GetProp(Entity.GetLocalPlayer(), 'CCSPlayer', 'm_bIsScoped');
    if (!localIsScoped) Ragebot.ForceTargetHitchance(Ragebot.GetTarget(), UI.GetValue('Misc', 'JAVASCRIPT', 'No scope hitchance'));
}

function AttemptTwoShotKill(dXm8nmbeef) {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Predict doubletap damage')) return false;
    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck')) return false;
    var localWeapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (localWeapon != 'scar 20' && localWeapon != 'g3sg1') return false;
    if (!UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap')) return false;
    Ragebot.ForceHitboxSafety(0);
    var cLvs6anps2 = Entity.GetProp(dXm8nmbeef, 'CBasePlayer', 'm_iHealth'),
        d7Qeyanvsw = GetClosestEnemyToCrosshair();
    pelvis_pos = Entity.GetHitboxPosition(dXm8nmbeef, 2), body_pos = Entity.GetHitboxPosition(dXm8nmbeef, 3), thorax_pos = Entity.GetHitboxPosition(dXm8nmbeef, 4);
    var pKz4ghbrnb = [0, -1],
        kF65sxpnun = [0, -1],
        KF65sxpnun = [0, -1],
        VEk5kwzgtz = [0, -1];
    result_thorax = Trace.Bullet(Entity.GetLocalPlayer(), dXm8nmbeef, Entity.GetEyePosition(Entity.GetLocalPlayer()), thorax_pos);
    if (dXm8nmbeef = d7Qeyanvsw) dynamicDamage = result_thorax[1];
    if (result_thorax[1] * 2 >= cLvs6anps2 && IsExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(dXm8nmbeef, cLvs6anps2 / 2 + 1), true;
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        kF65sxpnun = Trace.Bullet(Entity.GetLocalPlayer(), dXm8nmbeef, Entity.GetEyePosition(Entity.GetLocalPlayer()), pelvis_pos), pKz4ghbrnb = Trace.Bullet(Entity.GetLocalPlayer(), dXm8nmbeef, Entity.GetEyePosition(Entity.GetLocalPlayer()), body_pos);
        if (dXm8nmbeef = d7Qeyanvsw) dynamicDamage = kF65sxpnun[1];
        if (kF65sxpnun[1] * 2 >= cLvs6anps2 && IsExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(dXm8nmbeef, cLvs6anps2 / 2 + 1), true;
        if (dXm8nmbeef = d7Qeyanvsw) dynamicDamage = pKz4ghbrnb[1];
        if (pKz4ghbrnb[1] * 2 >= cLvs6anps2 && IsExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(dXm8nmbeef, cLvs6anps2 / 2 + 1), true;
    }
    result_thorax_extrapolated = Trace.Bullet(Entity.GetLocalPlayer(), dXm8nmbeef, ExtrapolateTick(15), thorax_pos);
    if (dXm8nmbeef = d7Qeyanvsw) dynamicDamage = result_thorax_extrapolated[1];
    if (result_thorax_extrapolated[1] * 2 >= cLvs6anps2 && IsExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(dXm8nmbeef, cLvs6anps2 / 2 + 1), true;
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        VEk5kwzgtz = Trace.Bullet(Entity.GetLocalPlayer(), dXm8nmbeef, ExtrapolateTick(25), pelvis_pos), KF65sxpnun = Trace.Bullet(Entity.GetLocalPlayer(), dXm8nmbeef, ExtrapolateTick(25), body_pos);
        if (dXm8nmbeef = d7Qeyanvsw) dynamicDamage = VEk5kwzgtz[1];
        if (VEk5kwzgtz[1] * 2 >= cLvs6anps2 && IsExploitCharged() == true) {
            return Ragebot.ForceTargetMinimumDamage(dXm8nmbeef, cLvs6anps2 / 2 + 1), true;
        }
        if (dXm8nmbeef = d7Qeyanvsw) dynamicDamage = KF65sxpnun[1];
        if (KF65sxpnun[1] * 2 >= cLvs6anps2 && IsExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(dXm8nmbeef, cLvs6anps2 / 2 + 1), true;
    }
    return dynamicDamage = 0, false;
}

function DrawDynamicDamage() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Draw predicted damage')) return;
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Predict doubletap damage')) return;
    if (UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Fake duck')) return;
    var localWeapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (localWeapon != 'scar 20' && localWeapon != 'g3sg1') return;
    if (!UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap')) return;
    if (IsInAir(Entity.GetLocalPlayer())) return;
    localPlayer = Entity.GetLocalPlayer()
    localRenderOrigin = Entity.GetRenderOrigin(localPlayer)
    localVel = Entity.GetProp(localPlayer, 'CBasePlayer', 'm_vecVelocity\[0\]')
    M4Tbfzjxaj = 999
    closestEnemyToCrosshair = GetClosestEnemyToCrosshair();
    if (Entity.IsValid(closestEnemyToCrosshair) && Entity.IsAlive(closestEnemyToCrosshair) && !Entity.IsDormant(closestEnemyToCrosshair)) M4Tbfzjxaj = Entity.GetProp(closestEnemyToCrosshair, 'CBasePlayer', 'm_iHealth');
    var ZTfkpbbm5w = [];
    ZTfkpbbm5w[0] = localRenderOrigin[0] + localVel[0] * Globals.TickInterval() * 15
    ZTfkpbbm5w[1] = localRenderOrigin[1] + localVel[1] * Globals.TickInterval() * 15
    ZTfkpbbm5w[2] = localRenderOrigin[2] + localVel[2] * Globals.TickInterval() * 15;
    var G7Wt3llvd9 = Render.WorldToScreen(ZTfkpbbm5w);
    if (dynamicDamage >= M4Tbfzjxaj / 2) color = [0, 255, 0, 255];
    else color = [255, 0, 0, 255];
    Render.Circle(G7Wt3llvd9[0], G7Wt3llvd9[1], 5, [255, 255, 255, 255]), Render.String(G7Wt3llvd9[0], G7Wt3llvd9[1] - 30, 1, '' + dynamicDamage, color, 0);
}

function IsStanding(index) {
    var velocity = Entity.GetProp(index, 'CBasePlayer', 'm_vecVelocity\[0\]'),
        totalVelocity = Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
    if (totalVelocity <= 5) return true;
    else return false;
}

function IsSlowWalking(index) {
    var velocity = Entity.GetProp(index, 'CBasePlayer', 'm_vecVelocity\[0\]'),
        totalVelocity = Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
    if (totalVelocity >= 10 && totalVelocity <= 85) return true;
    else return false;
}

function ForceHead(index) {
    DisableBaim();
    head_pos = Entity.GetHitboxPosition(index, 0)
    result_head = Trace.Bullet(Entity.GetLocalPlayer(), index, Entity.GetEyePosition(Entity.GetLocalPlayer()), head_pos);
    result_head[1] > 0 && result_head[1] >= UI.GetValue('Rage', GetLocalPlayerWeaponCategory(), 'Targeting', 'Minimum damage') && Ragebot.ForceTargetMinimumDamage(index, result_head[1]);
    return;
}

function ForceBaim(index) {
    !UI.IsHotkeyActive('Rage', 'GENERAL', 'General', 'Force body aim') && UI.ToggleHotkey('Rage', 'GENERAL', 'General', 'Force body aim');
    Ragebot.ForceHitboxSafety(0);
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Use highest possible damage')) return;
    var health = Entity.GetProp(index, 'CBasePlayer', 'm_iHealth');
    pelvis_pos = Entity.GetHitboxPosition(index, 2), body_pos = Entity.GetHitboxPosition(index, 3), thorax_pos = Entity.GetHitboxPosition(index, 4);
    var bodyTrace = [0, -1],
        pelvisTrace = [0, -1];
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
        pelvisTrace = Trace.Bullet(Entity.GetLocalPlayer(), index, Entity.GetEyePosition(Entity.GetLocalPlayer()), pelvis_pos)
        bodyTrace = Trace.Bullet(Entity.GetLocalPlayer(), index, Entity.GetEyePosition(Entity.GetLocalPlayer()), body_pos)
    }
    var thoraxTrace = Trace.Bullet(Entity.GetLocalPlayer(), index, Entity.GetEyePosition(Entity.GetLocalPlayer()), thorax_pos),
        maxDamage = Math.max(pelvisTrace[1], bodyTrace[1], thoraxTrace[1]);
    health > maxDamage ? Ragebot.ForceTargetMinimumDamage(index, maxDamage) : Ragebot.ForceTargetMinimumDamage(index, health);
    return;
}

function DisableBaim() {
    if (UI.IsHotkeyActive('Rage', 'GENERAL', 'Force body aim')) UI.ToggleHotkey('Rage', 'GENERAL', 'Force body aim');
}

function WaitForOnShot() {
    var enemies = Entity.GetEnemies();
    for (i = 0; i < enemies.length; i++) {
        if (!Entity.IsValid(enemies[i])) continue;
        if (!Entity.IsAlive(enemies[i])) continue;
        if (Entity.IsDormant(enemies[i])) continue;
        var weapon = Entity.GetWeapon(enemies[i]),
            lastShotTime = Entity.GetProp(weapon, 'CWeaponCSBase', 'm_fLastShotTime');
        if (lastShotTime != storedShotTime[enemies[i]]) {
            firedThisTick[enemies[i]] = true, storedShotTime[enemies[i]] = lastShotTime;
        } else firedThisTick[enemies[i]] = false;
        if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Wait for on shot backtrack')) return;
        if (firedThisTick[enemies[i]] == true) ForceHead(enemies[i]);
        else {
            Ragebot.IgnoreTarget(enemies[i]), info[enemies[i]] = 'WAITING';
        }
    }
}

function deg2rad(degrees) {
    return degrees * Math.PI / 180;
}

function angle_to_vec(Y3F8x63yvb, DXm8nmbeef) {
    var N6Wkyzzmce = deg2rad(Y3F8x63yvb),
        BCvvd6u7xd = deg2rad(DXm8nmbeef),
        JTgnewh93f = Math.sin(N6Wkyzzmce),
        T7Sc6eyyxv = Math.cos(N6Wkyzzmce),
        XRdafysm8y = Math.sin(BCvvd6u7xd),
        EVkqwxhb4t = Math.cos(BCvvd6u7xd);
    return [T7Sc6eyyxv * EVkqwxhb4t, T7Sc6eyyxv * XRdafysm8y, -JTgnewh93f];
}

function trace(y3f8X63yvb, tx4Fxj8sdw) {
    var qvM6fqtd7x = angle_to_vec(tx4Fxj8sdw[0], tx4Fxj8sdw[1]),
        ztFkpbbm5w = Entity.GetRenderOrigin(y3f8X63yvb);
    ztFkpbbm5w[2] += 50;
    var pmEzw8s9ph = [ztFkpbbm5w[0] + qvM6fqtd7x[0] * 8192, ztFkpbbm5w[1] + qvM6fqtd7x[1] * 8192, ztFkpbbm5w[2] + qvM6fqtd7x[2] * 8192],
        zhKrw6f8bt = Trace.Line(y3f8X63yvb, ztFkpbbm5w, pmEzw8s9ph);
    if (zhKrw6f8bt[1] == 1) return;
    pmEzw8s9ph = [ztFkpbbm5w[0] + qvM6fqtd7x[0] * zhKrw6f8bt[1] * 8192, ztFkpbbm5w[1] + qvM6fqtd7x[1] * zhKrw6f8bt[1] * 8192, ztFkpbbm5w[2] + qvM6fqtd7x[2] * zhKrw6f8bt[1] * 8192];
    var ujP6hekv7e = Math.sqrt((ztFkpbbm5w[0] - pmEzw8s9ph[0]) * (ztFkpbbm5w[0] - pmEzw8s9ph[0]) + (ztFkpbbm5w[1] - pmEzw8s9ph[1]) * (ztFkpbbm5w[1] - pmEzw8s9ph[1]) + (ztFkpbbm5w[2] - pmEzw8s9ph[2]) * (ztFkpbbm5w[2] - pmEzw8s9ph[2]));
    ztFkpbbm5w = Render.WorldToScreen(ztFkpbbm5w), pmEzw8s9ph = Render.WorldToScreen(pmEzw8s9ph);
    if (pmEzw8s9ph[2] != 1 || ztFkpbbm5w[2] != 1) return;
    return ujP6hekv7e;
}

function ReversedFreestanding() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Reversed freestanding')) return;
    var localplayer = Entity.GetLocalPlayer();
    if (Entity.IsValid(localplayer)) {
        var eye_pos = Entity.GetEyePosition(localplayer);
        left_distance = trace(localplayer, [0, eye_pos[1] - 33]), right_distance = trace(localplayer, [0, eye_pos[1] + 33]);
        if (left_distance > right_distance) {
            if (UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter')) UI.ToggleHotkey('Anti-Aim', 'Fake angles', 'Inverter');
        }
        if (right_distance > left_distance) {
            if (!UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter')) UI.ToggleHotkey('Anti-Aim', 'Fake angles', 'Inverter');
        }
    }
}

function IsHoldingGrenade(index) {
    if (Entity.GetName(Entity.GetWeapon(index)) == 'high explosive grenade' || Entity.GetName(Entity.GetWeapon(index)) == 'molotov' || Entity.GetName(Entity.GetWeapon(index)) == 'incendiary grenade') return true;
    return false;
}

function DrawDanger(x, y, radius) {
    Render.FilledCircle(x, y, 15, [0, 0, 0, 125]), Render.Circle(x, y, 15, radius), Render.String(x - 0.5, y - 7, 1, '!', [255, 255, 255, 200]);
}

function DrawToggles() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators')) return;
    var ss = Global.GetScreenSize(),
        inverterColor;
    inverterColor = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color');
    if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows')) UI.IsHotkeyActive('Anti-Aim', 'Fake angles', 'Inverter') ? (Render.Polygon([
        [ss[0] / 2 - 49, ss[1] / 2 + 9],
        [ss[0] / 2 - 65, ss[1] / 2],
        [ss[0] / 2 - 49, ss[1] / 2 - 9]
    ], [0, 0, 0, 80]), Render.Polygon([
        [ss[0] / 2 + 49, ss[1] / 2 - 9],
        [ss[0] / 2 + 65, ss[1] / 2],
        [ss[0] / 2 + 49, ss[1] / 2 + 9]
    ], inverterColor)) : (Render.Polygon([
        [ss[0] / 2 - 49, ss[1] / 2 + 9],
        [ss[0] / 2 - 65, ss[1] / 2],
        [ss[0] / 2 - 49, ss[1] / 2 - 9]
    ], inverterColor), Render.Polygon([
        [ss[0] / 2 + 49, ss[1] / 2 - 9],
        [ss[0] / 2 + 65, ss[1] / 2],
        [ss[0] / 2 + 49, ss[1] / 2 + 9]
    ], [0, 0, 0, 80]));
    var activeIndicators = GetActiveIndicators(),
        currentIndicators = 0;
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 1)) {
        currentIndicators += 1
        Render.String(ss[0] / 2, ss[1] / 2 + (activeIndicators - currentIndicators) * 10 + 20, 1, 'DT', [0, 255, 0, 255], 3);
        const color = -255 * Exploit.GetCharge();
        Render.Rect(ss[0] / 2 - 6, ss[1] / 2 + (activeIndicators - currentIndicators) * 10 + 2 + 27, 13, 4, [0, 0, 0, 22])
        Render.GradientRect(ss[0] / 2 - 5, ss[1] / 2 + (activeIndicators - currentIndicators) * 10 + 3 + 27, (Exploit.GetCharge() + 0.1) * 10, 2, 1, [color, 255, 0, 70], [color, 255, 0, 200]);
    }
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 0)) {
        currentIndicators += 1
        Render.String(ss[0] / 2, ss[1] / 2 + (activeIndicators - currentIndicators) * 10 + 20, 1, 'DODGE', [255, 255, 0, 255], 3);
    }
    if (UI.IsHotkeyActive('Rage', 'General', 'Force safe point') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 3)) {
        currentIndicators += 1
        Render.String(ss[0] / 2, ss[1] / 2 + (activeIndicators - currentIndicators) * 10 + 20, 1, 'SAFE', [0, 255, 255, 255], 3);
    }
    if (UI.IsHotkeyActive('Rage', 'Exploits', 'Hide shots') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 2)){
        currentIndicators += 1
        Render.String(ss[0] / 2, ss[1] / 2 + (activeIndicators - currentIndicators) * 10 + 20, 1, 'HIDE', [155, 255, 155, 255], 3)
    }
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key') && getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 4)) {
        currentIndicators += 1
        Render.String(ss[0] / 2, ss[1] / 2 + (activeIndicators - currentIndicators) * 10 + 20, 1, 'DMG', [255, 128, 0, 255], 3);
    }
}

function DrawDangerSigns() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Draw danger signs')) return;
    var enemies = Entity.GetEnemies();
    for (i = 0; i < enemies.length; i++) {
        if (!Entity.IsValid(enemies[i])) continue;
        if (!Entity.IsAlive(enemies[i])) continue;
        if (Entity.IsDormant(enemies[i])) continue;
        renderBox = Entity.GetRenderBox(enemies[i])
        x = renderBox[3] - renderBox[1];
        x /= 2
        x += renderBox[1];
        if (IsHoldingGrenade(enemies[i])) DrawDanger(x, renderBox[2] - 45, [255, 255, 0, 255]);
        if (Entity.GetName(Entity.GetWeapon(enemies[i])) == 'zeus x27') DrawDanger(x, renderBox[2] - 45, [255, 0, 0, 255]);
    }
}

function DrawIndicators() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Draw HEAD/BAIM flags')) return;
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions')) return;
    var enemies = Entity.GetEnemies();
    for (i = 0; i < enemies.length; i++) {
        if (!Entity.IsValid(enemies[i])) continue;
        if (!Entity.IsAlive(enemies[i])) continue;
        if (Entity.IsDormant(enemies[i])) continue;
        renderBox = Entity.GetRenderBox(enemies[i])
        x = renderBox[3] - renderBox[1];
        x /= 2
        x += renderBox[1];
        switch (info[enemies[i]]) {
            case 'HEAD':
                Render.StringCustom(x, renderBox[2] - 25, 1, info[enemies[i]], [215, 255, 150, 255], font);
                break;
            case 'DEFAULT':
                Render.StringCustom(x, renderBox[2] - 25, 1, info[enemies[i]], [255, 255, 255, 255], font);
                break;
            case 'AIR':
                Render.StringCustom(x, renderBox[2] - 25, 1, info[enemies[i]], [0, 255, 255, 255], font);
                break;
            case 'CROUCH':
                Render.StringCustom(x, renderBox[2] - 25, 1, info[enemies[i]], [199, 145, 18, 255], font);
                break;
            case 'LETHAL':
                Render.StringCustom(x, renderBox[2] - 25, 1, info[enemies[i]], [63, 133, 252, 255], font);
                break;
            case 'SLOW':
                Render.StringCustom(x, renderBox[2] - 25, 1, info[enemies[i]], [63, 133, 252, 255], font);
                break;
            case 'X2':
                Render.StringCustom(x, renderBox[2] - 25, 1, info[enemies[i]], [0, 128, 240, 255], font);
                break;
            case 'WAITING':
                Render.StringCustom(x, renderBox[2] - 25, 1, info[enemies[i]], [255, 125, 255, 255], font);
                break;
            case 'STANDING':
                Render.StringCustom(x, renderBox[2] - 25, 1, info[enemies[i]], [155, 255, 252, 255], font);
                break;
            case 'SHOT':
                Render.StringCustom(x, renderBox[2] - 25, 1, info[enemies[i]], [255, 255, 150, 255], font);
                break;
            case 'OVERRIDE':
                Render.StringCustom(x, renderBox[2] - 25, 1, info[enemies[i]], [255, 125, 255, 255], font);
                break;
        }
        if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Draw SAFE flags') && safeTargets[enemies[i]]) {
            Render.StringCustom(x, renderBox[2] - 35, 1, 'SAFE', [222, 171, 255, 255], font);
        }
    }
}

function GetHitboxName(index) {
    var hitbox = '';
    switch (index) {
        case 0:
            hitbox = 'Head';
            break;
        case 1:
            hitbox = 'Neck';
            break;
        case 2:
            hitbox = 'Pelvis';
            break;
        case 3:
            hitbox = 'Body';
            break;
        case 4:
            hitbox = 'Thorax';
            break;
        case 5:
            hitbox = 'Chest';
            break;
        case 6:
            hitbox = 'Upper chest';
            break;
        case 7:
            hitbox = 'Left thigh';
            break;
        case 8:
            hitbox = 'Right thigh';
            break;
        case 9:
            hitbox = 'Left calf';
            break;
        case 10:
            hitbox = 'Right calf';
            break;
        case 11:
            hitbox = 'Left foot';
            break;
        case 12:
            hitbox = 'Right foot';
            break;
        case 13:
            hitbox = 'Left hand';
            break;
        case 14:
            hitbox = 'Right hand';
            break;
        case 15:
            hitbox = 'Left upper arm';
            break;
        case 16:
            hitbox = 'Left forearm';
            break;
        case 17:
            hitbox = 'Right upper arm';
            break;
        case 18:
            hitbox = 'Right forearm';
            break;
        default:
            hitbox = 'Generic';
    }
    return hitbox;
}

function RagebotLogs() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Ragebot fire logs')) return;
    target = Event.GetInt('target_index')
    targetName = Entity.GetName(target)
    hitbox = Event.GetInt('hitbox')
    hitchance = Event.GetInt('hitchance')
    safepoint = Event.GetInt('safepoint')
    exploit = Event.GetInt('exploit')
    log = '[hvh_essentials] Fired shot at ' + targetName + ' (' + target + ') | Hitbox: ' + GetHitboxName(hitbox) + ' | Hitchance: ' + hitchance + ' | Safepoint: ' + safepoint + ' | Exploit: ' + exploit + ' | Flag: ' + info[target]
    log += '\n'
    Cheat.PrintColor([0, 255, 0, 255], log);
}

function SafepointOnLimbs() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Safe point on limbs')) return;
    Ragebot.ForceHitboxSafety(12)
    Ragebot.ForceHitboxSafety(11)
    Ragebot.ForceHitboxSafety(10)
    Ragebot.ForceHitboxSafety(9);
}

function OverrideMinimumDamage() {
    if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key')) return;
    var enemies = Entity.GetEnemies();
    value = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Minimum damage');
    for (i = 0; i < enemies.length; i++) {
        Ragebot.ForceTargetMinimumDamage(enemies[i], value)
        info[enemies[i]] = 'OVERRIDE';
    }
}

function ForceConditions() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions')) return;
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Wait for on shot backtrack')) return;
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key')) return;
    enemies = Entity.GetEnemies()
    desyncDeltaEnabled = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta')
    headConditionsEnabled = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions')
    baimConditionsEnabled = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions')
    safepointConditionsEnabled = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force SAFEPOINT conditions');
    for (i = 0; i < enemies.length; i++) {
        if (!Entity.IsValid(enemies[i])) continue;
        if (!Entity.IsAlive(enemies[i])) continue;
        if (Entity.IsDormant(enemies[i])) continue;
        mode = ''
        info[enemies[i]] = 'DEFAULT'
        safeTargets[enemies[i]] = false;
        target = Ragebot.GetTarget();
        getDropdownValue(safepointConditionsEnabled, 0) && IsLethal(enemies[i]) && (safeTargets[enemies[i]] = true, Ragebot.ForceTargetSafety(enemies[i]));
        if (getDropdownValue(safepointConditionsEnabled, 1) && IsSlowWalking(enemies[i])) {
            safeTargets[enemies[i]] = true
            Ragebot.ForceTargetSafety(enemies[i]);
        }
        getDropdownValue(safepointConditionsEnabled, 3) && IsInAir(enemies[i]) && (safeTargets[enemies[i]] = true, Ragebot.ForceTargetSafety(enemies[i]));
        getDropdownValue(safepointConditionsEnabled, 2) && IsStanding(enemies[i]) && !IsInAir(enemies[i]) && (safeTargets[enemies[i]] = true, Ragebot.ForceTargetSafety(enemies[i]));
        getDropdownValue(safepointConditionsEnabled, 4) && IsCrouch(enemies[i]) && (safeTargets[enemies[i]] = true, Ragebot.ForceTargetSafety(enemies[i]));
        if (AttemptTwoShotKill(enemies[i]) == true && UI.GetValue('Misc', 'JAVASCRIPT', 'Predict doubletap damage')) {
            info[enemies[i]] = 'X2';
            continue;
        }
        if (getDropdownValue(baimConditionsEnabled, 0) && IsLethal(enemies[i])) {
            if (target == enemies[i]) ForceBaim(enemies[i]);
            info[enemies[i]] = 'LETHAL';
            continue;
        }
        if (getDropdownValue(headConditionsEnabled, 3) && firedThisTick[enemies[i]] == true) {
            ForceHead(enemies[i]), info[enemies[i]] = 'SHOT';
            continue;
        }
        if (getDropdownValue(baimConditionsEnabled, 1) && IsSlowWalking(enemies[i])) {
            if (target == enemies[i]) ForceBaim(enemies[i]);
            info[enemies[i]] = 'SLOW';
            continue;
        }
        if (getDropdownValue(baimConditionsEnabled, 3) && IsInAir(enemies[i])) {
            if (target == enemies[i]) ForceBaim(enemies[i]);
            info[enemies[i]] = 'AIR';
            continue;
        }
        if (getDropdownValue(baimConditionsEnabled, 2) && IsStanding(enemies[i]) && !IsInAir(enemies[i])) {
            if (target == enemies[i]) ForceBaim(enemies[i]);
            info[enemies[i]] = 'STANDING';
            continue;
        }
        if (getDropdownValue(baimConditionsEnabled, 4) && IsCrouch(enemies[i])) {
            if (target == enemies[i]) ForceBaim(enemies[i]);
            info[enemies[i]] = 'CROUCH';
            continue;
        }
        if (getDropdownValue(headConditionsEnabled, 1) && IsInAir(enemies[i])) {
            ForceHead(enemies[i]), info[enemies[i]] = 'AIR';
            continue;
        }
        if (getDropdownValue(headConditionsEnabled, 0) && GetMaxDesync(enemies[i]) < desyncDeltaEnabled && !IsInAir(enemies[i])) {
            ForceHead(enemies[i]), info[enemies[i]] = 'HEAD';
            continue;
        }
        if (getDropdownValue(headConditionsEnabled, 2) && IsCrouchTerrorist(enemies[i])) {
            ForceHead(enemies[i]), info[enemies[i]] = 'CROUCH';
            continue;
        }
        DisableBaim();
    }
}

function Draw() {
    if (font == null) font = Render.AddFont('Tahoma', 7, 700);
    if (UI.IsMenuOpen()) {
        if (getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions'), 1)) UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions', setDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions'), 3, false));
        if (getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions'), 2)) UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions', setDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions'), 4, false));
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false), UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false), UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? true : false), UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? true : false), UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Force SAFEPOINT conditions', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? true : false), UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? true : false), UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Use highest possible damage', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? true : false), UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Draw predicted damage', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false), delta = false;
        if (getDropdownValue(UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions'), 0) && UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions')) {
            delta = true;
        }
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta', delta)
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Draw HEAD/BAIM flags', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false)
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Draw SAFE flags', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false)
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Draw danger signs', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false)
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Features to display', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? true : false)
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Predict doubletap damage', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? true : false)
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Hitchance', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Jump scout/revolver hitchance') ? true : false)
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'No scope hitchance', UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Override no scope hitchance') ? true : false);
    }
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'HvH Essentials')) return;
    if (!Entity.IsValid(Entity.GetLocalPlayer())) return;
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    DrawIndicators()
    DrawToggles()
    DrawDynamicDamage()
    DrawDangerSigns();
}

function CreateMove() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'HvH Essentials')) return;
    if (!Entity.IsValid(Entity.GetLocalPlayer())) return;
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    ForceConditions()
    SetHitchanceInAir()
    ReversedFreestanding()
    SafepointOnLimbs()
    WaitForOnShot()
    OverrideMinimumDamage()
    DodgeBruteforce()
    NoScopeHitchance();
}

function FrameNetUpdateStart() {
    if (UI.GetValue('Misc', 'JAVASCRIPT', 'Instant doubletap')) {
        Exploit.OverrideTolerance(0)
        Exploit.OverrideShift(14)
        shouldDisable = true;
    } else if (shouldDisable == true) {
        Exploit.OverrideTolerance(1), Exploit.OverrideShift(12), shouldDisable = false
    }
}

function ClearData() {
    firedThisTick = []
    storedShotTime = []
    info = [];
}

function Main() {
    for (i = 0; i < 64; i++) {
        info[i] = ''
        safeTargets[i] = false;
    }
    Cheat.RegisterCallback('CreateMove', 'CreateMove')
    Cheat.RegisterCallback('Draw', 'Draw')
    Cheat.RegisterCallback('ragebot_fire', 'RagebotLogs')
    Cheat.RegisterCallback('round_start', 'ClearData')
    Cheat.RegisterCallback('FRAME_NET_UPDATE_START', 'FrameNetUpdateStart');
}
Main();