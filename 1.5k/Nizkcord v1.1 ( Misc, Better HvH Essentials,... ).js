// Im nn shitty paster you know
// no need skills to make this free js lul
// have fun!
// pasted by a nn 
// whose name is Nizk#6261

	    UI.AddSliderInt(" ", 0, 0); // better looking




	UI.AddLabel('Nizkcord P2 | HvH Essential & Visuals');


	UI.AddLabel('	');







var global_print = Global.Print,
    global_print_chat = Global.PrintChat,
    /* global_print_color = Global.PrintColor, */
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
UI.AddCheckbox('Enable')
	UI.AddLabel('_________________________________________');

UI.AddCheckbox('Indicators')
UI.AddCheckbox('Draw HEAD/BAIM flags')
UI.AddCheckbox('Draw SAFE flags')
UI.AddCheckbox('Draw danger signs')
UI.AddCheckbox('Draw predicted damage')
UI.AddCheckbox('Inverter arrows')
UI.AddColorPicker('Inverter arrows color')
UI.SetColor('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color', [255, 165, 0, 230])


UI.AddMultiDropdown('Features to display', ['Dodge bruteforce', 'Doubletap', 'Hide shots', 'Safe point', 'Override min dmg'])
	UI.AddLabel('_________________________________________');
UI.AddHotkey('Dodge bruteforce')
UI.AddHotkey('Wait for on shot backtrack')

UI.AddHotkey( "Force head" )
var cache1 = UI.GetValue( "Rage", "GENERAL", "Targeting", "Hitboxes" )
var cache2 = UI.GetValue( "Rage", "PISTOL", "Targeting", "Hitboxes" )
var cache3 = UI.GetValue( "Rage", "HEAVY PISTOL", "Targeting", "Hitboxes" )
var cache4 = UI.GetValue( "Rage", "SCOUT", "Targeting", "Hitboxes" )
var cache5 = UI.GetValue( "Rage", "AWP", "Targeting", "Hitboxes" )
var cache6 = UI.GetValue( "Rage", "AUTOSNIPER", "Targeting", "Hitboxes" )
function on_cm(){
    if(UI.IsHotkeyActive( "Script items", "Force head" )){
        UI.SetValue("Rage", "GENERAL", "Targeting", "Hitboxes", 1)
        UI.SetValue("Rage", "PISTOL", "Targeting", "Hitboxes", 1)
        UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "Hitboxes", 1)
        UI.SetValue("Rage", "SCOUT", "Targeting", "Hitboxes", 1)
        UI.SetValue("Rage", "AWP", "Targeting", "Hitboxes", 1)
        UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Hitboxes", 1)
    }
    else{
        UI.SetValue("Rage", "GENERAL", "Targeting", "Hitboxes", cache1)
        UI.SetValue("Rage", "PISTOL", "Targeting", "Hitboxes", cache2)
        UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "Hitboxes", cache3)
        UI.SetValue("Rage", "SCOUT", "Targeting", "Hitboxes", cache4)
        UI.SetValue("Rage", "AWP", "Targeting", "Hitboxes", cache5)
        UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Hitboxes", cache6)
    }
}
Cheat.RegisterCallback("CreateMove", "on_cm")
UI.AddMultiDropdown("Force safepoint on limbs", ["Legs", "Feet"]);

function on_move()
{
    const safepoint_selection = UI.GetValue("Misc", "Force safepoint on limbs");
    if(safepoint_selection & (1 << 0)) //Webster, you don't need a library to use multidropdowns, l0l
    {
        Ragebot.ForceHitboxSafety(7);
        Ragebot.ForceHitboxSafety(8);
        Ragebot.ForceHitboxSafety(9);
        Ragebot.ForceHitboxSafety(10);
    }
    if(safepoint_selection & (1 << 1))
    {
        Ragebot.ForceHitboxSafety(11);
        Ragebot.ForceHitboxSafety(12);
    }
}

Cheat.RegisterCallback("CreateMove", "on_move");

//Whether or not the script is listening for a 'player_hurt' event
var waiting_for_hit = false;

//The target the ragebot last fired at
var target_idx = 0;

//The tick the ragebot last fired on
var tick_count = -1;

//Miss count for each individual player
var misses = [64];

//Safety state for each individual player
var safety_ents = [64];

//Set the default values for 'misses' and 'safety_ents'
reset_miss_logs()

//Add the miss slider
UI.AddSliderInt("Safety after x misses", 1, 6);

function on_ragebot_fire() {
    //The ragebot fired so now we're waiting for a 'player_hurt' event
    waiting_for_hit = true;
    //Update the current target index
    target_idx = Event.GetInt("target_index");
    //Update the tick count
    tick_count = Globals.Tickcount()
}

function on_player_hurt() {
    //The entity that was hurt
    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));

    //Don't continue if the hurt entity is the local player
    if (entity == Entity.GetLocalPlayer())
        return;

    //The entity that attacked 'entity'
    var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));

    //Don't continue unless 'attacker' is the local player
    if (attacker != Entity.GetLocalPlayer())
        return;

    //Don't continue if 'entity' isn't the last target
    if (entity != target_idx)
        return;

    //We damaged the target so we are no longer waiting for a hit. Reset the variables
    waiting_for_hit = false;
    target_idx = 0;
    tick_count = -1;
 
}

function on_create_move() {
    //Time in milliseconds between each tick
    var tick_interval = 1000 / Globals.Tickrate();

    //The amount of ticks we're going to wait for a player_hurt event
    var wait_ticks = 1 + Math.ceil((Local.Latency() * 2) / tick_interval);

    //Run this block if more than 'wait_ticks" has passed since the ragebot fired
    if (Globals.Tickcount() - tick_count >= wait_ticks && waiting_for_hit) {
        //Increment the misses for the current target
        misses[target_idx]++;

        //Force safety on the current target if more than x misses
        if (misses[target_idx] >= UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Safety after x misses")) {
            safety_ents[target_idx] = 1;
        }

        //Reset the variables
        waiting_for_hit = false;
        target_idx = 0;
        tick_count = -1;
    }

    //Current target
    var rbot_target = Ragebot.GetTarget();

    //If there is no target, don't continue
    if (rbot_target == 0)
        return;

    //Force safety on the target
    if (safety_ents[rbot_target] == 1) {
        Ragebot.ForceTargetSafety(rbot_target);
    }
}

//Reset variables on death
function on_player_death() {
    var idx = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    reset_specific_miss_logs(idx)
}

//Resets 'misses[]' and 'safety_ents[]'
function reset_miss_logs() {
    for (var i = 0; i < 64; i++) {
        reset_specific_miss_logs(i)
    }
}

//Resets 'misses' and 'safety_ents' for a specific entity
function reset_specific_miss_logs(idx) {
    misses[idx] = 0;
    safety_ents[idx] = 0;
}

//Register callbacks
Cheat.RegisterCallback("ragebot_fire", "on_ragebot_fire");
Cheat.RegisterCallback("player_hurt", "on_player_hurt");
Cheat.RegisterCallback("CreateMove", "on_create_move");
Cheat.RegisterCallback("player_death", "on_player_death")
Cheat.RegisterCallback("round_start", "reset_miss_logs");
	UI.AddLabel('_________________________________________');
UI.AddCheckbox('Reversed freestanding')
UI.AddCheckbox('Safe point on limbs')
UI.AddCheckbox('Ragebot fire logs')
UI.AddCheckbox('Minor autowall fixes')
UI.AddCheckbox('Body-aim when target unresolved')
	UI.AddLabel('_________________________________________');

UI.AddCheckbox('Enable head/baim conditions'), UI.AddCheckbox('Predict doubletap damage')
UI.AddMultiDropdown('Force HEAD conditions', ['Inaccurate desync', 'Target is in air', 'Target crouching (T side)', 'Shot'])
UI.AddSliderInt('Inaccurate desync delta', 0, 58), UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta', 38)
UI.AddMultiDropdown('Force BAIM conditions', ['If lethal', 'If slow walking', 'If standing', 'If target in air', 'Crouching'])
UI.AddMultiDropdown('Force SAFEPOINT conditions', ['If lethal', 'If slow walking', 'If standing', 'If target in air', 'Crouching'])
UI.AddCheckbox('Save FPS')
UI.AddCheckbox('Use highest possible damage')
	UI.AddLabel('_________________________________________');
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
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable')) return;
    if (!Entity.IsValid(Entity.GetLocalPlayer())) return;
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    DrawIndicators()
    DrawToggles()
    DrawDynamicDamage()
    DrawDangerSigns();
}

function CreateMove() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Enable')) return;
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




	UI.AddLabel('_________________________________________');



var valid_dt_weapons = ["Pistol", "Desert Eagle", "Autosniper"]; //Will you DT with other weapons?
for(var i = 0; i < valid_dt_weapons.length; i++)
{
    UI.AddSliderInt(valid_dt_weapons[i] + " doubletap hitchance", 0, 100);
}



var should_override_hc = false;

var cached_weapon_classid = -1;
var cached_weapon_type = -1;

function get_current_weapon_doubletap_hitchance()
{
    var local = Entity.GetLocalPlayer();
    var local_player_weapon_classid = Entity.GetClassID(Entity.GetWeapon(local));
    if(local_player_weapon_classid == cached_weapon_classid && current_weapon_type != -1)
    {
        return UI.GetValue("Misc", "JAVASCRIPT", "Script items", (valid_dt_weapons[cached_weapon_type] + " doubletap hitchance"));
    } 
    var current_weapon_type = -1;
    switch(local_player_weapon_classid)
    {
        case 244: //glock
        case 245: //p2k
        case 271: //usp
        case 257: //p250
        case 238: //dualies
        case 240: //57
        case 268: //tec9
            current_weapon_type = 0;
            break;
        case 46: //deagle
            current_weapon_type = 1;
            break;
        case 241: //g3sg1
        case 260: //scar-20
            current_weapon_type = 2;
            break;
    }
    cached_weapon_classid = local_player_weapon_classid;
    cached_weapon_type = current_weapon_type;
    if(current_weapon_type == -1)
    {
        return -1;
    }
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valid_dt_weapons[current_weapon_type] + " doubletap hitchance");
}

function on_move()
{
    if(should_override_hc)
    {
        var proper_hitchance = get_current_weapon_doubletap_hitchance();
        if(proper_hitchance == -1)
        {
            return;
        }
        var enemies = Entity.GetEnemies();
        var enemy_arr_length = enemies.length;
        for(var i = 0; i < enemy_arr_length; i++)
        {
            if(Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i]))
            {
                Ragebot.ForceTargetHitchance(enemies[i], proper_hitchance);
            }
        }
    }
}

function on_ragebot_fire()
{
    var current_exploit = Event.GetInt("exploit");
    should_override_hc = current_exploit == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
}

Cheat.RegisterCallback("CreateMove", "on_move");
Cheat.RegisterCallback("ragebot_fire", "on_ragebot_fire");



	UI.AddLabel('_________________________________________');
// shit for italian

//region api
const global = [], globals = [], sound = [], cheat = [], local = [], world = [], input = [], render = [], ui = [], convar = [], event = [], entity = [], trace = [], usercmd = [], antiaim = [], exploit = [], ragebot = [], material = [], __filename = [], f = [], f2 = [], already_parsed = [], format = [], g = [], keys = [], k = []; global.print = Global.Print, global.print_chat = Global.PrintChat, global.print_color = Global.PrintColor, global.register_callback = Global.RegisterCallback, global.execute_command = Global.ExecuteCommand, global.frame_stage = Global.FrameStage, global.tickcount = Global.Tickcount, global.tickrate = Global.Tickrate, global.tick_interval = Global.TickInterval, global.curtime = Global.Curtime, global.realtime = Global.Realtime, global.frametime = Global.Frametime, global.latency = Global.Latency, global.get_view_angles = Global.GetViewAngles, global.set_view_angles = Global.SetViewAngles, global.get_map_name = Global.GetMapName, global.is_key_pressed = Global.IsKeyPressed, global.get_screen_size = Global.GetScreenSize, global.get_cursor_position = Global.GetCursorPosition, global.play_sound = Global.PlaySound, global.play_microphone = Global.PlayMicrophone, global.stop_microphone = Global.StopMicrophone, global.get_username = Global.GetUsername, global.set_clan_tag = Global.SetClanTag, globals.tickcount = Globals.Tickcount, globals.tickrate = Globals.Tickrate, globals.tick_interval = Globals.TickInterval, globals.curtime = Globals.Curtime, globals.realtime = Globals.Realtime, globals.frametime = Globals.Frametime, sound.play = Sound.Play, sound.play_microphone = Sound.PlayMicrophone, sound.stop_microphone = Sound.StopMicrophone, cheat.get_username = Cheat.GetUsername, cheat.register_callback = function(c, f) { switch (c) { case 'create_move': Cheat.RegisterCallback("CreateMove", f); break; case 'paint': Cheat.RegisterCallback("Draw", f); break; case 'fsn': Cheat.RegisterCallback("FrameStageNotify", f); break; case 'shutdown': Cheat.RegisterCallback("Unload", f); break; default: Cheat.RegisterCallback(c, f); break; } }, cheat.execute_command = Cheat.ExecuteCommand, cheat.frame_stage = Cheat.FrameStage, cheat.print = Cheat.Print, cheat.print_chat = Cheat.PrintChat, cheat.print_color = Cheat.PrintColor, local.latency = Local.Latency, local.get_view_angles = Local.GetViewAngles, local.set_view_angles = Local.SetViewAngles, local.set_clan_tag = Local.SetClanTag, local.get_real_yaw = Local.GetRealYaw, local.get_fake_yaw = Local.GetFakeYaw, local.get_spread = Local.GetSpread, local.get_inaccuracy = Local.GetInaccuracy, world.get_map_name = World.GetMapName, world.get_server_string = World.GetServerString, input.get_cursor_position = Input.GetCursorPosition, input.is_key_pressed = Input.IsKeyPressed, render.string = Render.String, render.text_size = Render.TextSize, render.line = Render.Line, render.rect = Render.Rect, render.filled_rect = Render.FilledRect, render.gradient_rect = Render.GradientRect, render.circle = Render.Circle, render.filled_circle = Render.FilledCircle, render.polygon = Render.Polygon, render.world_to_screen = Render.WorldToScreen, render.add_font = Render.AddFont, render.find_font = Render.FindFont, render.string_custom = Render.StringCustom, render.textured_rect = Render.TexturedRect, render.add_texture = Render.AddTexture, render.text_size_custom = Render.TextSizeCustom, render.get_screen_size = Render.GetScreenSize, ui.get_value = UI.GetValue, ui.set_value = UI.SetValue, ui.add_checkbox = UI.AddCheckbox, ui.add_slider_int = UI.AddSliderInt, ui.add_slider_float = UI.AddSliderFloat, ui.add_hotkey = UI.AddHotkey, ui.add_label = UI.AddLabel, ui.add_dropdown = UI.AddDropdown, ui.add_multi_dropdown = UI.AddMultiDropdown, ui.add_color_picker = UI.AddColorPicker, ui.add_textbox = UI.AddTextbox, ui.set_enabled = UI.SetEnabled, ui.get_string = UI.GetString, ui.get_color = UI.GetColor, ui.set_color = UI.SetColor, ui.is_hotkey_active = UI.IsHotkeyActive, ui.toggle_hotkey = UI.ToggleHotkey, ui.is_menu_open = UI.IsMenuOpen, convar.get_int = Convar.GetInt, convar.set_int = Convar.SetInt, convar.get_float = Convar.GetFloat, convar.set_float = Convar.SetFloat, convar.get_string = Convar.GetString, convar.set_string = Convar.SetString, event.get_int = Event.GetInt, event.get_float = Event.GetFloat, event.get_string = Event.GetString, entity.get_entities = Entity.GetEntities, entity.get_entities_by_class_i_d = Entity.GetEntitiesByClassID, entity.get_players = Entity.GetPlayers, entity.get_enemies = Entity.GetEnemies, entity.get_teammates = Entity.GetTeammates, entity.get_local_player = Entity.GetLocalPlayer, entity.get_game_rules_proxy = Entity.GetGameRulesProxy, entity.get_entity_from_user_i_d = Entity.GetEntityFromUserID, entity.is_teammate = Entity.IsTeammate, entity.is_enemy = Entity.IsEnemy, entity.is_bot = Entity.IsBot, entity.is_local_player = Entity.IsLocalPlayer, entity.is_valid = Entity.IsValid, entity.is_alive = Entity.IsAlive, entity.is_dormant = Entity.IsDormant, entity.get_class_i_d = Entity.GetClassID, entity.get_class_name = Entity.GetClassName, entity.get_name = Entity.GetName, entity.get_weapon = Entity.GetWeapon, entity.get_weapons = Entity.GetWeapons, entity.get_render_origin = Entity.GetRenderOrigin, entity.get_render_box = Entity.GetRenderBox, entity.get_prop = Entity.GetProp, entity.set_prop = Entity.SetProp, entity.get_hitbox_position = Entity.GetHitboxPosition, entity.get_eye_position = Entity.GetEyePosition, trace.line = Trace.Line, trace.bullet = Trace.Bullet, usercmd.set_movement = UserCMD.SetMovement, usercmd.get_movement = UserCMD.GetMovement, usercmd.set_angles = UserCMD.SetAngles, usercmd.force_jump = UserCMD.ForceJump, usercmd.force_crouch = UserCMD.ForceCrouch, antiaim.get_override = AntiAim.GetOverride, antiaim.set_override = AntiAim.SetOverride, antiaim.set_real_offset = AntiAim.SetRealOffset, antiaim.set_fake_offset = AntiAim.SetFakeOffset, antiaim.set_l_b_y_offset = AntiAim.SetLBYOffset, exploit.get_charge = Exploit.GetCharge, exploit.recharge = Exploit.Recharge, exploit.disable_recharge = Exploit.DisableRecharge, exploit.enable_recharge = Exploit.EnableRecharge, ragebot.get_target = Ragebot.GetTarget, ragebot.ignore_target = Ragebot.IgnoreTarget, ragebot.force_target = Ragebot.ForceTarget, ragebot.force_target_safety = Ragebot.ForceTargetSafety, ragebot.force_target_hitchance = Ragebot.ForceTargetHitchance, ragebot.force_target_minimum_damage = Ragebot.ForceTargetMinimumDamage, ragebot.force_hitbox_safety = Ragebot.ForceHitboxSafety, material.create = Material.Create, material.destroy = Material.Destroy, material.get = Material.Get, material.set_key_value = Material.SetKeyValue, material.refresh = Material.Refresh
//endregion



//region dependencies

/**
 * @title BetterUI
 * @version 2.0.1
 * @description A better UI system for Onetap
 */

var menu = {};
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

/**
 * @title Vector
 * @description Simple 3d vector system
 *
 * @typedef Vector {x: number, y: number, z: number}
 */
var vector = {};

/**
 * @brief Creates a new 3d vector instance.
 * @param data {array}
 * @returns {Vector}
 */
vector.new = function(data)
{
    return {
        x: data[0],
        y: data[1],
        z: data[2]
    };
};

/**
 * @brief Realizes a mathematical operation between two vectors.
 * @param vec {Vector}
 * @param vec2 {Vector}
 * @param operation {string}
 * @returns {Vector}
 */
vector.operate = function(vec, vec2, operation)
{
  switch (operation)
  {
      case '+':
          return {
              x: vec.x + vec2.x,
              y: vec.y + vec2.y,
              z: vec.z + vec2.z
          };

      case '-':
          return {
              x: vec.x - vec2.x,
              y: vec.y - vec2.y,
              z: vec.z - vec2.z
          };

      case '*':
          return {
              x: vec.x * vec2.x,
              y: vec.y * vec2.y,
              z: vec.z * vec2.z
          };

      case '/':
          return {
              x: vec.x / vec2.x,
              y: vec.y / vec2.y,
              z: vec.z / vec2.z
          };

      default:
          throw new Error("[Vector] Invalid operation type.");
  }
};

/**
 * @brief Returns the 2d length of a vector.
 * @param vec {Vector}
 * @returns {number}
 */
vector.length2d = function(vec)
{
    return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
};

/**
 * @brief Converts a vector to angles.
 * @param vec
 * @returns {Vector}
 */
vector.angles = function(vec)
{
    return {
        x: -Math.atan2(vec.z, this.length2d(vec)) * 180 / Math.PI,
        y: Math.atan2(vec.y, vec.x) * 180 / Math.PI,
        z: 0
    };
};

/**
 * @brief Calculates the fov delta between two points based on a specific view angles.
 * @param origin {Vector}
 * @param destination {Vector}
 * @param view {Vector}
 * @returns {number}
 */
vector.fov_to = function(origin, destination, view)
{
    const angles = this.angles(this.operate(destination, origin, '-'));

    const delta = this.new(
        [
            Math.abs(view.x - angles.x),
            Math.abs(view.y % 360 - angles.y % 360) % 360,
            0
        ]
    );

    if (delta.y > 180)
        delta.y = 360 - delta.y;

    return this.length2d(delta);
};

/**
 * @brief Unpacks a vector object into an array.
 * @param vec {Vector}
 * @returns {[number, number, number]}
 */
vector.to_array = function(vec)
{
    return [
        vec.x,
        vec.y,
        vec.z
    ];
};

/**
 * Checks whether or not a value is contained inside an array
 * 
 * @param {Array} array 
 * @param {any} value 
 * @returns {Boolean}
 */
function contains(array, value)
{
    for (var k in array)
    {
        var v = array[k];
        if (k === value || v === value)
            return true;
    }

    return false;
}

//endregion

//region locals

// Maps our weapon IDs into each configuration
const ids = [
    [2, 3, 4, 30, 32, 36, 61, 63],
    [1, 64],
    [40],
    [9],
    [11, 38]
];

// Maps our configuration names
const weapons = [
    "General",
    "Pistol",
    "Heavy Pistol",
    "Scout",
    "AWP",
    "Autosniper"
];

//endregion

//region menu

// Create our menu
const config = menu.call(ui.add_dropdown, "Current configuration", "italy_config", [weapons]);
const options = [

    // General configuration
    {
        dmg: menu.call(ui.add_slider_int, "Minimum damage (visible)", "italy_general_dmg", [0, 130]),
        dmg_override: menu.call(ui.add_slider_int, "Minimum damage (on key)", "italy_general_dmg_override", [0, 130]),
        dmg_autowall: menu.call(ui.add_slider_int, "Minimum damage (auto wall)", "italy_general_dmg_autowall", [0, 130])
    },

    // Pistol configuration
    {
        dmg: menu.call(ui.add_slider_int, "Minimum damage (visible)", "italy_pistol_dmg", [0, 130]),
        dmg_override: menu.call(ui.add_slider_int, "Minimum damage (on key)", "italy_pistol_dmg_override", [0, 130]),
        dmg_autowall: menu.call(ui.add_slider_int, "Minimum damage (auto wall)", "italy_pistol_dmg_autowall", [0, 130])
    },

    // Heavy pistol configuration
    {
        dmg: menu.call(ui.add_slider_int, "Minimum damage (visible)", "italy_hpistol_dmg", [0, 130]),
        dmg_override: menu.call(ui.add_slider_int, "Minimum damage (on key)", "italy_hpistol_dmg_override", [0, 130]),
        dmg_autowall: menu.call(ui.add_slider_int, "Minimum damage (auto wall)", "italy_hpistol_dmg_autowall", [0, 130])
    },

    // Scout configuration
    {
        dmg: menu.call(ui.add_slider_int, "Minimum damage (visible)", "italy_scout_dmg", [0, 130]),
        dmg_override: menu.call(ui.add_slider_int, "Minimum damage (on key)", "italy_scout_dmg_override", [0, 130]),
        dmg_autowall: menu.call(ui.add_slider_int, "Minimum damage (auto wall)", "italy_scout_dmg_autowall", [0, 130])
    },

    // AWP configuration
    {
        dmg: menu.call(ui.add_slider_int, "Minimum damage (visible)", "italy_awp_dmg", [0, 130]),
        dmg_override: menu.call(ui.add_slider_int, "Minimum damage (on key)", "italy_awp_dmg_override", [0, 130]),
        dmg_autowall: menu.call(ui.add_slider_int, "Minimum damage (auto wall)", "italy_awp_dmg_autowall", [0, 130])
    },

    // Autosniper configuration
    {
        dmg: menu.call(ui.add_slider_int, "Minimum damage (visible)", "italy_auto_dmg", [0, 130]),
        dmg_override: menu.call(ui.add_slider_int, "Minimum damage (on key)", "italy_auto_dmg_override", [0, 130]),
        dmg_autowall: menu.call(ui.add_slider_int, "Minimum damage (auto wall)", "italy_auto_dmg_autowall", [0, 130])
    }
];

const override_key = menu.call(ui.add_hotkey, "Damage override", "italy_override", []);
const show_dmg = menu.call(ui.add_checkbox, "Show minimum damage", "italy_indicator", []);

//endregion

//region function

/**
 * @class target
 * @brief Handles the targeting system
 */
var target = {};

/**
 * Returns the entity ID of the closest player to your crosshair.
 * 
 * @returns {Number|null}
 */
target.get_closest = function( ) 
{
    // Get our entities.
    const players = entity.get_enemies();
    const me = entity.get_local_player();

    // Initialize our data struct.
    const data = {id: null, fov: 180};

    // Get our player's eye position and view angles to make the FOV calculations
    const origin = vector.new(entity.get_eye_position(me));
    const angles = vector.new(local.get_view_angles( ));

    // Loop for each enemy.
    for (var i = 0; i < players.length; i++) {
        // Get our current enemy
        const e = players[i];

        // Get the target's position
        const destination = vector.new(entity.get_hitbox_position(e, 0));
        
        // Calculate the FOV.
        const fov = vector.fov_to(origin, destination, angles);

        // If our FOV is lower than the cached one, then this player is closer to our crosshair than the last one.
        if (fov < data.fov) {
            // Cache its data.
            data.id = e;
            data.fov = fov;
        }
    }

    // Return the best target.
    return data.id;
}

/**
 * @class config_system
 * @brief Handles the configuration updates and the menu visibility.
 */
var config_system = {
    current_config_id: 0,
    last_weapon: 0,

    override: false
};

/**
 * Handles the menu visibility.
 */
config_system.handle_visibility = function()
{
    // Loop for each configuration we have.
    for (var i = 0; i < options.length; i++)
    {
        // Check if this configuration is the selected one.
        // Doing this because we only want to display the selected configuration's elements.
        const draw = i === menu.get(config);

        // Loop for each menu element our current configuration has.
        for (var j in options[i])
        {
            // Update the visibility.
            menu.visibility(options[i][j], draw);
        }
    }
}

// Update the menu visibility every time the script is loaded.
config_system.handle_visibility( );

/**
 * Updates the current configuration
 */
config_system.update = function( )
{
    // Get our local player.
    const me = entity.get_local_player( );

    // If our local player isn't valid or if we're dead then there's no need to update anything.
    if (!me || !entity.is_alive(me))
        return;

    // Get our active weapon entity handle and then get its item ID.
    // More about item IDs here: https://tf2b.com/itemlist.php?gid=730.
    const weapon_hndl = entity.get_prop(me, "CBasePlayer", "m_hActiveWeapon");
    const weapon_id = entity.get_prop(weapon_hndl, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF;

    // If our active weapon item ID is the same as the cached one then we didn't switch weapons.
    // So there's no need to update the current configuration.
    if (weapon_id === this.last_weapon)
        return;

    // Cache our active weapon item ID for further checks.
    this.last_weapon = weapon_id;

    // Loop through every item ID array inside our IDs map.
    for (var i = 0; i < ids.length; i++)
    {
        // Check if the current item ID array contains our active weapon ID.
        if (contains(ids[i], weapon_id))
        {
            // If so, then our active weapon is part of this configuration group, so update our current configuration index.
            // Doing the '+ 1' because the "GENERAL" configuration isn't mapped.
            this.current_config_id = i + 1;
            return;
        }
    }

    // If our IDs map doesn't contain our current item ID then it means that this weapon does not belong to any configuration.
    // So this weapon belongs to the GENERAL configuration.
    this.current_config_id = 0;
}

/**
 * @class damage_system
 * @brief Handles the updates of the minimum damage.
 */
var damage_system = {};

/**
 * Updates the cheat's minimum damage.
 * 
 * @param {Number} target
 */
damage_system.update = function(target)
{
    // Get our local player.
    const me = entity.get_local_player( );

    // If our local player doesn't exist or if we're not alive then there's no need to update the minimum damage.
    if (!me || !entity.is_alive(me))
        return;

    // Get our current configuration and minimum damage reference.
    const current_config = options[config_system.current_config_id];
    const ref = menu.reference(["Rage", weapons[config_system.current_config_id].toUpperCase( ), "Targeting", "Minimum damage"])
    
    // Check if we were overriding our minimum damage.
    if (config_system.override)
    {
        // If so, revert our minimum damage.
        menu.set(ref, menu.get(current_config.dmg));
        config_system.override = false;
    }
        
    // If our target doesn't exist or if the target isn't alive then there's no need to update the minimum damage.
    if (!target || !entity.is_alive(target))
        return;

    // Check if we are pressing the override key.
    if (menu.get_hotkey(override_key))
    {
        // If so, update our minimum damage.
        config_system.override = true;
        menu.set(ref, menu.get(current_config.dmg_override))
        return;
    }

    // Get our local player's eye position so we can do the tracings later.
    const origin = entity.get_eye_position(me);
    
    // Loops for every hitbox except limbs.
    for (var i = 0; i < 7; i++)
    {
        // Get our current hitbox's position.
        const hitbox = entity.get_hitbox_position(target, i);

        // Trace a line from our eye position to the hitbox position in order to see if it is visible.
        const trace = Trace.Line(me, origin, hitbox);

        // Check if the trace didn't hit an entity or if the trace's length is lower than 0.87
        if (!trace[0] || trace[1] < 0.87)
        {
            // If so, our target is not visible so update the minimum damage.
            // Returning after because we don't need to further check for visibility.
            config_system.override = true;
            menu.set(ref, menu.get(current_config.dmg_autowall))
            return;
        }
    }
}

/**
 * @callback Draw
 * @brief Callbacks the configuration system updates and the indicator rendering.
 */
function on_paint( )
{
    // Handle the menu visibility.
    config_system.handle_visibility( );
    
    // Return if our indicator is not enabled.
    if (!menu.get(show_dmg))
        return;
    
    // Get our drawing properties.
    const ref = menu.reference(["Rage", weapons[config_system.current_config_id].toUpperCase( ), "Targeting", "Minimum damage"])
    const y = render.get_screen_size( )[1];

    // Render the minimum damage indicator.
    Render.String(15, y - 125, 0, (menu.get(ref)).toString(), [255, 255, 255, 200], 4);
}

/**
 * @callback CreateMove
 * @brief Handles the menu visibility and the damage system updates.
 */
function on_create_move( )
{
    // Update our configuration.
    config_system.update( );
    
    // Update our minimum damage settings.
    damage_system.update(target.get_closest( ));
}

//endregion

//region callbacks

// Register our callbacks
cheat.register_callback("Draw", "on_paint");
cheat.register_callback("CreateMove", "on_create_move");

//endregion


	UI.AddLabel('_________________________________________');







UI.AddCheckbox("Low delta");
UI.AddDropdown( "Low delta type", [ "Custom", "On key" ] );
const lowdelta_modes = UI.AddMultiDropdown("Low delta modes", [ "Slow walk", "Low HP", "Standing" ]);
UI.AddHotkey("Low delta on key");

function SetEnabled()
{
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta type", 1)
    }
    else
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta type", 0)
    }

    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 0 && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta modes", 1)
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta on key", 0)
    }
    else if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 1 && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta modes", 0)
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta on key", 1)
    }
    else
    {
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta modes", 0)
       UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta on key", 0)
    }
}

function get_velocity(index)
{
    var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

function get_health(index)
{
    health_override = Entity.GetProp(index, "CBasePlayer", "m_iHealth");
    return health_override;
}

function Low_delta()
{
	localplayer_index = Entity.GetLocalPlayer( );
	const lowdelta_dropdown_value = UI.GetValue.apply(null, lowdelta_modes);
	
	var velocity = get_velocity(localplayer_index)
    var health = get_health(localplayer_index)
	var LowHP = false
    var SlowWalk = false
	var Standing = false
	var Onkey = false

	if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 0)
	{
	   if (lowdelta_dropdown_value & (1 << 0) && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk"))
       SlowWalk = true
       else
       SlowWalk = false

       if (lowdelta_dropdown_value & (1 << 1) && health < 50)
       LowHP = true
       else
       LowHP = false

       if (lowdelta_dropdown_value & (1 << 2) && velocity < 3)
       Standing = true
       else
       Standing = false
	}
    else if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 1)
	{
	   if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Low delta on key"))
       Onkey = true
       else
       Onkey = false
	}
   
        if (Standing == true || LowHP == true || SlowWalk == true || Onkey == true && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta"))
        {
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 10);
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(-20);
		}
        else
		{
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
            AntiAim.SetOverride(0);
		}
}

function drawString()
{
    const fontpixel = Render.AddFont( "Verdana", 8, 100);
    const lowdelta_dropdown_value = UI.GetValue.apply(null, lowdelta_modes);
    var SFOnkey = false
    var screen_size = Global.GetScreenSize();

    localplayer_index = Entity.GetLocalPlayer( );
    localplayer_alive = Entity.IsAlive( localplayer_index );

    var velocity = get_velocity(localplayer_index)
    var health = get_health(localplayer_index)

    SlowWalk = false
    LowHP = false
    Standing = false
    Onkey = false

    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 0)
	{
	   if (lowdelta_dropdown_value & (1 << 0) && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk"))
       SlowWalk = true
       else
       SlowWalk = false

       if (lowdelta_dropdown_value & (1 << 1) && health < 50)
       LowHP = true
       else
       LowHP = false

       if (lowdelta_dropdown_value & (1 << 2) && velocity < 3)
       Standing = true
       else
       Standing = false
	}
    else if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta type") == 1)
	{
	   if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Low delta on key"))
       Onkey = true
       else
       Onkey = false
    }
    
    if (Standing == true || LowHP == true || SlowWalk == true || Onkey == true)
    {
        drawIND = true
    }
    else
    {
        drawIND = false
    }
    
    if (drawIND == true && localplayer_alive == true && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta") == true)
	{
	   Render.StringCustom(screen_size[0] /2 , screen_size[1] /2 +25, 1, "", [ 255, 0, 0, 255 ], fontpixel );
    }
}

Global.RegisterCallback("Draw", "drawString");
Global.RegisterCallback("Draw", "SetEnabled");
Cheat.RegisterCallback("CreateMove", "Low_delta");


	    UI.AddSliderInt(" ", 0, 0)
		
			UI.AddLabel('          	    Other Visuals');
			
			
			
				UI.AddLabel('_________________________________________');

			//Author: GHOST#5125

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

const enable = menu.call(ui.add_checkbox, "Grenade warning", "gw_enable", []);
const tracer = menu.call(ui.add_checkbox, "Grenade tracer", "gw_tracer", []);
const tracer_color = menu.call(ui.add_color_picker, "Grenade tracer color", "gw_tracer_clr", []);
const max_dst = menu.call(ui.add_slider_int, "Maximum distance", "gw_dist", [0, 500]);

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
			
			
			
			
			
			
			
			
			
			
			
			
			
			
	UI.AddLabel('_________________________________________');

	/**
 *
 * Title: Color enhancements
 * Author: april#0001
 * Description: Enhances the color of your game
 *
*/

//region menu

// Our main switch
const enable = UI.AddCheckbox("Enable color enhancement");

// Our menu elements
const cc = UI.AddCheckbox("Color correction");
const cc_tint = UI.AddSliderInt("Tint", 0, 100);
const cc_intensity = UI.AddSliderInt("Intensity", 0, 100);

const fog = UI.AddCheckbox("Fog correction");
const fog_color = UI.AddColorPicker("Color");
const fog_distance = UI.AddSliderInt("Distance", 0, 2500);
const fog_density = UI.AddSliderInt("Density", 0, 100);

//endregion

//region functions

/**
 * Handles the visibility of our menu elements
 */
const handle_visibility = function()
{
    // Get booleans to make our life easier
    const main = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable color enhancement");
    const cc = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Color correction");
    const fog = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Fog correction");

    // Our main switch should always be visible
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable color enhancement", true);

    // Update other elements based on their parents
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Color correction", main);
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Tint", cc);
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Intensity", cc);

    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Fog correction", main);
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Color", fog);
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Distance", fog);
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Density", fog);
};

/**
 * Updates the fog values
 */
const update_fog = function()
{
    // Check if Fog correction is enabled
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Fog correction"))
    {
        // Check if the fog isn't already disabled (optimization)
        if (Convar.GetString("fog_override") !== "0")
        {
            Convar.SetString("fog_override", "0");
        }

        return;
    }

    // Check if the fog isn't already enabled (optimization)
    if (Convar.GetString("fog_override") !== "1")
    {
        Convar.SetString("fog_override", "1");
    }


    // Get our fog properties
    const clr = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Color");
    const clr_value = clr[0] + " " + clr[1] + " " + clr[2];

    const dist = UI.GetString("Misc", "JAVASCRIPT", "Script items", "Distance");
    const dens = (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Density") / 100).toString();

    // Check if the fog's color isn't the same as our desired color
    if (Convar.GetString("fog_color") !== clr_value)
    {
        // Update color
        Convar.SetString("fog_color", clr_value);
    }

    // Check if the fog's end distance isn't the same as our desired end distance
    if (Convar.GetString("fog_end") !== dist)
    {
        // Update distance
        Convar.SetString("fog_start", "0");
        Convar.SetString("fog_end", dist);
    }

    // Check if the fog's density isn't the same as our desired density
    if (Convar.GetString("fog_maxdensity") !== dens)
    {
        // Update density
        Convar.SetString("fog_maxdensity", dens);
    }

}

const draw_cc = function()
{
    // Check if Color correction isn't on
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Color correction"))
        return;

    // Get our drawing properties
    const tint = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tint");
    const intensity = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Intensity");

    const x = Global.GetScreenSize()[0], y = Global.GetScreenSize()[1];

    // Draw our color correction layer
    Render.FilledRect(
        0,
        0,
        x,
        y,
        [tint,
         0,
         255 - tint,
         intensity
        ]
    );

}

// Handles the visibility whenever the script is loaded
handle_visibility();

// Disables the 3D skybox for better looking fog
Convar.SetString("r_3dsky", "0");

function main()
{

    // Callback our functions
    handle_visibility();
    update_fog();
    draw_cc();

}

//endregion

//region callbacks

// Register our callbacks
Global.RegisterCallback("Draw", "main");

//endregion












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
    getValue('Enable world color modulation')
      ? getColor('World color')
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
      var value = getValue('World exposure') / 10;
      Entity.SetProp(entity, tonemapClass, 'm_flCustomAutoExposureMin', value);
      Entity.SetProp(entity, tonemapClass, 'm_flCustomAutoExposureMax', value);

      Entity.SetProp(entity, tonemapClass, 'm_flCustomBloomScale', getValue('bloom scale') / 10);
    }

    Convar.SetFloat('r_modelAmbientMin', getValue('Model ambient') / 10);
  }
}

function init() {
  UI.AddSliderFloat('World exposure', 0.0, 100.0);
  UI.AddSliderFloat('Model ambient', 0.0, 100.0);
  UI.AddSliderFloat('bloom scale', 0.0, 100.0);
  UI.AddCheckbox('Enable world color modulation');
  UI.AddColorPicker('World color');

  UI.SetValue('MISC', 'GENERAL', 'Hidden cvars', true);
  UI.SetValue('MISC', 'PERFORMANCE & INFORMATION', 'Disable post processing', false);

  Global.RegisterCallback("Draw", "onRender");
}

init();


	UI.AddLabel('_________________________________________');

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