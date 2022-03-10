Cheat.GetUsername = function() { return "Webster"; }
var global_print = Global['Print'],
 global_print_chat = Global['PrintChat'],
 global_print_color = Global['PrintColor'],
 global_register_callback = Global['RegisterCallback'],
 global_execute_command = Global['ExecuteCommand'],
 global_frame_stage = Global['FrameStage'],
 global_tickcount = Global['Tickcount'],
 global_tickrate = Global['Tickrate'],
 global_tick_interval = Global['TickInterval'],
 global_curtime = Global['Curtime'],
 global_realtime = Global['Realtime'],
 global_frametime = Global['Frametime'],
 global_latency = Global['Latency'],
 global_get_view_angles = Global['GetViewAngles'],
 global_set_view_angles = Global['SetViewAngles'],
 global_get_map_name = Global['GetMapName'],
 global_is_key_pressed = Global['IsKeyPressed'],
 global_get_screen_size = Global['GetScreenSize'],
 global_get_cursor_position = Global['GetCursorPosition'],
 global_play_sound = Global['PlaySound'],
 global_play_microphone = Global['PlayMicrophone'],
 global_stop_microphone = Global['StopMicrophone'],
 global_get_username = Global['GetUsername'],
 global_set_clan_tag = Global['SetClanTag'],
 globals_tickcount = Globals['Tickcount'],
 globals_tickrate = Globals['Tickrate'],
 globals_tick_interval = Globals['TickInterval'],
 globals_curtime = Globals['Curtime'],
 globals_realtime = Globals['Realtime'],
 globals_frametime = Globals['Frametime'],
 sound_play = Sound['Play'],
 sound_play_microphone = Sound['PlayMicrophone'],
 sound_stop_microphone = Sound['StopMicrophone'],
 cheat_get_username = Cheat['GetUsername'],
 cheat_register_callback = cheat_register_callback = new Proxy(Cheat['RegisterCallback'], {
  '\x61\x70\x70\x6c\x79': function(RLsgrdcz, RLsgrdcz, SD8jdhml) {
   switch (SD8jdhml[0x0]) {
    case 'paint':
     Cheat['RegisterCallback']('Draw', SD8jdhml[0x1]);
     break;
    case 'create_move':
     Cheat['RegisterCallback']('CreateMove', SD8jdhml[0x1]);
     break;
    case 'fsn':
     Cheat['RegisterCallback']('FrameStageNotify', SD8jdhml[0x1]);
     break;
    default:
     Cheat['RegisterCallback'](SD8jdhml[0x0], SD8jdhml[0x1]);
     break;
   }
  }
 }),
 cheat_override_damage = Cheat['ExecuteCommand'],
 cheat_frame_stage = Cheat['FrameStage'],
 cheat_print = Cheat['Print'],
 cheat_print_chat = Cheat['PrintChat'],
 cheat_print_color = Cheat['PrintColor'],
 local_latency = Local['Latency'],
 local_get_view_angles = Local['GetViewAngles'],
 local_set_view_angles = Local['SetViewAngles'],
 local_set_clan_tag = Local['SetClanTag'],
 local_get_real_yaw = Local['GetRealYaw'],
 local_get_fake_yaw = Local['GetFakeYaw'],
 local_get_spread = Local['GetSpread'],
 local_get_inaccuracy = Local['GetInaccuracy'],
 world_get_map_name = World['GetMapName'],
 world_get_server_string = World['GetServerString'],
 input_get_cursor_position = Input['GetCursorPosition'],
 input_is_key_pressed = Input['IsKeyPressed'],
 render_string = Render['String'],
 render_text_size = Render['TextSize'],
 render_line = Render['Line'],
 render_rect = Render['Rect'],
 render_filled_rect = Render['FilledRect'],
 render_gradient_rect = Render['GradientRect'],
 render_circle = Render['Circle'],
 render_filled_circle = Render['FilledCircle'],
 render_polygon = Render['Polygon'],
 render_world_to_screen = Render['WorldToScreen'],
 render_add_font = Render['AddFont'],
 render_find_font = Render['FindFont'],
 render_string_custom = Render['StringCustom'],
 render_textured_rect = Render['TexturedRect'],
 render_add_texture = Render['AddTexture'],
 render_text_size_custom = Render['TextSizeCustom'],
 render_get_screen_size = Render['GetScreenSize'],
 ui_get_value = UI['GetValue'],
 ui_set_value = UI['SetValue'],
 ui_add_checkbox = UI['AddCheckbox'],
 ui_add_slider_int = UI['AddSliderInt'],
 ui_add_slider_float = UI['AddSliderFloat'],
 ui_add_hotkey = UI['AddHotkey'],
 ui_add_label = UI['AddLabel'],
 ui_add_dropdown = UI['AddDropdown'],
 ui_add_multi_dropdown = UI['AddMultiDropdown'],
 ui_add_color_picker = UI['AddColorPicker'],
 ui_add_textbox = UI['AddTextbox'],
 ui_set_enabled = UI['SetEnabled'],
 ui_get_string = UI['GetString'],
 ui_get_color = UI['GetColor'],
 ui_set_color = UI['SetColor'],
 ui_is_hotkey_active = UI['IsHotkeyActive'],
 ui_toggle_hotkey = UI['ToggleHotkey'],
 ui_is_menu_open = UI['IsMenuOpen'],
 convar_get_int = Convar['GetInt'],
 convar_set_int = Convar['SetInt'],
 convar_get_float = Convar['GetFloat'],
 convar_set_float = Convar['SetFloat'],
 convar_get_string = Convar['GetString'],
 convar_set_string = Convar['SetString'],
 event_get_int = Event['GetInt'],
 event_get_float = Event['GetFloat'],
 event_get_string = Event['GetString'],
 entity_get_entities = Entity['GetEntities'],
 entity_get_entities_by_class_i_d = Entity['GetEntitiesByClassID'],
 entity_get_players = Entity['GetPlayers'],
 entity_get_enemies = Entity['GetEnemies'],
 entity_get_teammates = Entity['GetTeammates'],
 entity_get_local_player = Entity['GetLocalPlayer'],
 entity_get_game_rules_proxy = Entity['GetGameRulesProxy'],
 entity_get_entity_from_user_i_d = Entity['GetEntityFromUserID'],
 entity_is_teammate = Entity['IsTeammate'],
 entity_is_enemy = Entity['IsEnemy'],
 entity_is_bot = Entity['IsBot'],
 entity_is_local_player = Entity['IsLocalPlayer'],
 entity_is_valid = Entity['IsValid'],
 entity_is_alive = Entity['IsAlive'],
 entity_is_dormant = Entity['IsDormant'],
 entity_get_class_i_d = Entity['GetClassID'],
 entity_get_class_name = Entity['GetClassName'],
 entity_get_name = Entity['GetName'],
 entity_get_weapon = Entity['GetWeapon'],
 entity_get_weapons = Entity['GetWeapons'],
 entity_get_render_origin = Entity['GetRenderOrigin'],
 entity_get_prop = Entity['GetProp'],
 entity_set_prop = Entity['SetProp'],
 entity_get_hitbox_position = Entity['GetHitboxPosition'],
 entity_get_eye_position = Entity['GetEyePosition'],
 trace_line = Trace['Line'],
 trace_bullet = Trace['Bullet'],
 usercmd_set_movement = UserCMD['SetMovement'],
 usercmd_get_movement = UserCMD['GetMovement'],
 usercmd_set_angles = UserCMD['SetAngles'],
 usercmd_force_jump = UserCMD['ForceJump'],
 usercmd_force_crouch = UserCMD['ForceCrouch'],
 antiaim_get_override = AntiAim['GetOverride'],
 antiaim_set_override = AntiAim['SetOverride'],
 antiaim_set_real_offset = AntiAim['SetRealOffset'],
 antiaim_set_fake_offset = AntiAim['SetFakeOffset'],
 antiaim_set_l_b_y_offset = AntiAim['SetLBYOffset'],
 exploit_get_charge = Exploit['GetCharge'],
 exploit_recharge = Exploit['Recharge'],
 exploit_disable_recharge = Exploit['DisableRecharge'],
 exploit_enable_recharge = Exploit['EnableRecharge'],
 ragebot_override_hitchance = Ragebot['OverrideHitchance'],
 ragebot_override_accuracy_boost = Ragebot['OverrideAccuracyBoost'],
 ragebot_override_multipoint_scale = Ragebot['OverrideMultipointScale'],
 ragebot_force_safety = Ragebot['ForceSafety'];
UI['AddCheckbox']('HvH Essentials');
UI['AddHotkey']('Dodge bruteforce');
UI['AddHotkey']('Wait for on shot backtrack');
UI['AddCheckbox']('Reversed freestanding');
UI['AddCheckbox']('Safe point on limbs');
UI['AddCheckbox']('Ragebot fire logs');
UI['AddCheckbox']('Instant doubletap');
UI['AddHotkey']('Override minimum dmg key');
UI['AddSliderInt']('Minimum damage', 0x0, 0x82);
UI['AddCheckbox']('Indicators');
UI['AddCheckbox']('Draw HEAD/BAIM flags');
UI['AddCheckbox']('Draw SAFE flags');
UI['AddCheckbox']('Draw predicted damage');
UI['AddCheckbox']('Inverter arrows');
UI['AddColorPicker']('Inverter arrows color');
UI['SetColor']('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color', [0xff, 0xa5, 0x0, 0xe6]);
UI['AddMultiDropdown']('Features to display', ['Dodge bruteforce', 'Doubletap', 'Hide shots', 'Safe point', 'Override min dmg']);
UI['AddCheckbox']('Enable head/baim conditions');
UI['AddCheckbox']('Predict doubletap damage');
UI['AddMultiDropdown']('Force HEAD conditions', ['Inaccurate desync', 'Target is in air', 'Target crouching (T side)', 'Shot']);
UI['AddSliderInt']('Inaccurate desync delta', 0x0, 0x3a);
UI['SetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta', 0x26);
UI['AddMultiDropdown']('Force BAIM conditions', ['If lethal', 'If slow walking', 'If standing', 'If target in air']);
UI['AddMultiDropdown']('Force SAFEPOINT conditions', ['If lethal', 'If slow walking', 'If standing', 'If target in air', 'Crouching']);
UI['AddCheckbox']('Save FPS');
UI['AddCheckbox']('Use highest possible damage');
UI['AddCheckbox']('Jump scout/revolver hitchance');
UI['AddSliderInt']('Hitchance', 0x0, 0x64);
var firedThisTick = [];
var storedShotTime = [];
var onShotTargets = [];
var font = null;
var fontFlags = 0x0;
var shouldDisable;
var shouldDisableOverride;
var info = [];
var safeTargets = [];
var dynamicDamage = 0x0;
var color = [0xff, 0x0, 0x0, 0xff];

function normalizeYaw(YD2qbbsq) {
 while (YD2qbbsq > 0xb4) YD2qbbsq = YD2qbbsq - 0x168;
 while (YD2qbbsq < -0xb4) YD2qbbsq = YD2qbbsq + 0x168;
 return YD2qbbsq;
}

function getDropdownValue(AQm2hlen, UDu2xk2y) {
 var CF7qrc2d = 0x1 << UDu2xk2y;
 return AQm2hlen & CF7qrc2d ? !![] : ![];
}

function setDropdownValue(RLvzdwyq, QKrv5bkq, NFmhvu6e) {
 var KGmvlada = 0x1 << QKrv5bkq;
 return NFmhvu6e ? RLvzdwyq | KGmvlada : RLvzdwyq & ~KGmvlada;
}

function GetActiveIndicators() {
 var QTychczh = 0x0;
 var NXvxzhnf = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display');
 if (UI['IsHotkeyActive']('Rage', 'Exploits', 'Doubletap') && getDropdownValue(NXvxzhnf, 0x1)) QTychczh += 0x1;
 if (UI['IsHotkeyActive']('Rage', 'Exploits', 'Hide shots') && getDropdownValue(NXvxzhnf, 0x2)) QTychczh += 0x1;
 if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && getDropdownValue(NXvxzhnf, 0x0)) QTychczh += 0x1;
 if (UI['IsHotkeyActive']('Rage', 'General', 'Force safe point') && getDropdownValue(NXvxzhnf, 0x3)) QTychczh += 0x1;
 if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key') && getDropdownValue(NXvxzhnf, 0x4)) QTychczh += 0x1;
 return QTychczh;
}

function radiansToDegrees(Z3Zmcqg3) {
 var Q7Vhhmwz = Math['\x50\x49'];
 return Z3Zmcqg3 * (0xb4 / Q7Vhhmwz);
}

function convertMatrix(rlSgrdcz) {
 return rlSgrdcz['split']('')['reduce'](function(nxVxzhnf, cf7Qrc2d) {
  if ('mqbZx' === 'mqbZx') {
   nxVxzhnf = (nxVxzhnf << 0x5) - nxVxzhnf + cf7Qrc2d['charCodeAt'](0x0);
   return nxVxzhnf & nxVxzhnf;
  } else {
   if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Ragebot fire logs')) return;
   target = Event['GetInt']('target_index');
   targetName = Entity['GetName'](target);
   hitbox = Event['GetInt']('hitbox');
   hitchance = Event['GetInt']('hitchance');
   safepoint = Event['GetInt']('safepoint');
   exploit = Event['GetInt']('exploit');
   log = '[hvh_essentials] Fired shot at ' + targetName + '\x20\x28' + target + '\x29' + ' | Hitbox: ' + GetHitboxName(hitbox) + ' | Hitchance: ' + hitchance + ' | Safepoint: ' + safepoint + ' | Exploit: ' + exploit + ' | Flag: ' + info[target];
   log += '\x0a';
   Cheat['PrintColor']([0x0, 0xff, 0x0, 0xff], log);
  }
 }, 0x0);
}

function worldToScreen(z3zMcqg3, udU2xk2y) {
 if (z3zMcqg3 == 0x0 && udU2xk2y == 0x0) return 0x0;
 return radiansToDegrees(Math['atan2'](udU2xk2y, z3zMcqg3));
}

function DodgeBruteforce() {
 if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce')) {
  shouldDisableOverride = !![];
  AntiAim['SetOverride'](0x1);
  var yd2Qbbsq = -0x9;
  var qtYchczh = 0x0;
  var aqM2hlen = !![];
  var q7vHhmwz = 0x1e;
  var usShc9cv = 0x11;
  var kgMvlada = aqM2hlen ? q7vHhmwz : q7vHhmwz * 0x2;
  AntiAim['SetFakeOffset'](qtYchczh);
  if (yd2Qbbsq > 0x0) {
   AntiAim['SetRealOffset'](qtYchczh - yd2Qbbsq + kgMvlada);
   if (yd2Qbbsq < usShc9cv) {
    if ('PvpzT' !== 'PvpzT') {
     drawnSoFar += 0x1;
     Render['String'](screen_size[0x0] / 0x2, screen_size[0x1] / 0x2 + (enabledCount - drawnSoFar) * 0xa + 0x14, 0x1, '\x44\x54', [0x0, 0xff, 0x0, 0xff], 0x3);
    } else {
     usShc9cv = yd2Qbbsq;
    }
   }
   aqM2hlen ? AntiAim['SetLBYOffset'](qtYchczh - usShc9cv) : AntiAim['SetLBYOffset'](qtYchczh + yd2Qbbsq - usShc9cv * 0x2);
  } else {
   if ('VHaXh' !== 'VHaXh') {
    shouldDisableOverride = ![];
    AntiAim['SetOverride'](0x0);
   } else {
    if (yd2Qbbsq > usShc9cv) {
     if ('RLETo' !== 'OjygW') {
      usShc9cv = yd2Qbbsq;
     } else {
      Ragebot['ForceTargetMinimumDamage'](entity_id, max);
     }
    }
    AntiAim['SetRealOffset'](qtYchczh - yd2Qbbsq - kgMvlada);
    aqM2hlen ? AntiAim['SetLBYOffset'](qtYchczh + usShc9cv) : AntiAim['SetLBYOffset'](qtYchczh + yd2Qbbsq + usShc9cv * 0x2);
   }
  }
 }
 if (!UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && shouldDisableOverride == !![]) {
  if ('USbKv' === 'USbKv') {
   shouldDisableOverride = ![];
   AntiAim['SetOverride'](0x0);
  } else {
   if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Draw predicted damage')) return;
   if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Predict doubletap damage')) return;
   if (UI['IsHotkeyActive']('Anti-Aim', 'Extra', 'Fake duck')) return;
   var rlVzdwyq = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']()));
   if (rlVzdwyq != 'scar 20' && rlVzdwyq != 'g3sg1') return;
   if (!UI['IsHotkeyActive']('Rage', 'Exploits', 'Doubletap')) return;
   if (IsInAir(Entity['GetLocalPlayer']())) return;
   var UjFxs77m = Entity['GetLocalPlayer']();
   var Yd2Qbbsq = Entity['GetRenderOrigin'](UjFxs77m);
   var GqTxkpxn = Entity['GetProp'](UjFxs77m, 'CBasePlayer', 'm_vecVelocity[0]');
   var UdU2xk2y = 0x3e7;
   var QtYchczh = GetClosestEnemyToCrosshair();
   if (Entity['IsValid'](QtYchczh) && Entity['IsAlive'](QtYchczh) && !Entity['IsDormant'](QtYchczh)) UdU2xk2y = Entity['GetProp'](QtYchczh, 'CBasePlayer', 'm_iHealth');
   var KgMvlada = [];
   KgMvlada[0x0] = Yd2Qbbsq[0x0] + GqTxkpxn[0x0] * Globals['TickInterval']() * 0xf;
   KgMvlada[0x1] = Yd2Qbbsq[0x1] + GqTxkpxn[0x1] * Globals['TickInterval']() * 0xf;
   KgMvlada[0x2] = Yd2Qbbsq[0x2] + GqTxkpxn[0x2] * Globals['TickInterval']() * 0xf;
   var Cf7Qrc2d = Render['WorldToScreen'](KgMvlada);
   if (dynamicDamage >= UdU2xk2y / 0x2) color = [0x0, 0xff, 0x0, 0xff];
   else color = [0xff, 0x0, 0x0, 0xff];
   Render['Circle'](Cf7Qrc2d[0x0], Cf7Qrc2d[0x1], 0x5, [0xff, 0xff, 0xff, 0xff]);
   Render['String'](Cf7Qrc2d[0x0], Cf7Qrc2d[0x1] - 0x1e, 0x1, '' + dynamicDamage, color, 0x0);
  }
 }
}

function GetMaxDesync(Sd8Jdhml) {
 var RlSgrdcz = Entity['GetProp'](Sd8Jdhml, 'CBasePlayer', 'm_vecVelocity[0]');
 var QkRv5bkq = Math['sqrt'](RlSgrdcz[0x0] * RlSgrdcz[0x0] + RlSgrdcz[0x1] * RlSgrdcz[0x1]);
 return 0x3a - 0x3a * QkRv5bkq / 0x244;
}

function IsInAir(NxVxzhnf) {
 var UsShc9cv = Entity['GetProp'](NxVxzhnf, 'CBasePlayer', 'm_fFlags');
 if (!(UsShc9cv & 0x1 << 0x0) && !(UsShc9cv & 0x1 << 0x12)) return !![];
 else return ![];
}

function IsCrouchTerrorist(AqM2hlen) {
 var Z3zMcqg3 = Entity['GetProp'](AqM2hlen, 'CBasePlayer', 'm_iTeamNum');
 var RlVzdwyq = Entity['GetProp'](AqM2hlen, 'CBasePlayer', 'm_fFlags');
 if (Z3zMcqg3 == 0x2 && RlVzdwyq & 0x1 << 0x1) return !![];
 else return ![];
}

function IsCrouch(NfMhvu6e) {
 var Q7vHhmwz = Entity['GetProp'](NfMhvu6e, 'CBasePlayer', 'm_fFlags');
 if (Q7vHhmwz & 0x1 << 0x1) return !![];
 else return ![];
}

function GetLocalPlayerWeaponCategory() {
 var nXVxzhnf = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']()));
 switch (nXVxzhnf) {
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
 var qTYchczh = Global['GetScreenSize']();
 var yD2Qbbsq = -0x1;
 localPlayer = Entity['GetLocalPlayer']();
 localPlayerAlive = Entity['IsAlive'](localPlayer);
 if (!localPlayer) return;
 if (!localPlayerAlive) return;
 localPlayerWeapon = Entity['GetName'](Entity['GetWeapon'](localPlayer));
 enemiesArr = Entity['GetEnemies']();
 if (!enemiesArr) return;
 var kGMvlada = 0xb4;
 var rLVzdwyq = Entity['GetProp'](localPlayer, 'CBaseEntity', 'm_vecOrigin');
 var gQTxkpxn = Global['GetViewAngles']();
 for (var q7VHhmwz = 0x0; q7VHhmwz < enemiesArr['length']; q7VHhmwz++) {
  if ('EPKBe' === 'EPKBe') {
   if (!Entity['IsAlive'](enemiesArr[q7VHhmwz])) continue;
   var z3ZMcqg3 = Entity['GetProp'](enemiesArr[q7VHhmwz], 'CBaseEntity', 'm_vecOrigin');
   var uSShc9cv = Math['abs'](normalizeYaw(worldToScreen(rLVzdwyq[0x0] - z3ZMcqg3[0x0], rLVzdwyq[0x1] - z3ZMcqg3[0x1]) - gQTxkpxn[0x1] + 0xb4));
   if (uSShc9cv < kGMvlada) {
    if ('qXbjh' !== 'qXbjh') {
     font = Render['AddFont']('Tahoma', 0x7, 0x2bc);
    } else {
     kGMvlada = uSShc9cv;
     yD2Qbbsq = enemiesArr[q7VHhmwz];
    }
   }
  } else {
   var sD8Jdhml = Entity['GetProp'](entity_id, 'CBasePlayer', 'm_fFlags');
   if (sD8Jdhml & 0x1 << 0x1) return !![];
   else return ![];
  }
 }
 return yD2Qbbsq;
}

function SetHitchanceInAir() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Jump scout/revolver hitchance')) return;
 var cF7Qrc2d = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']()));
 if (cF7Qrc2d != 'ssg 08' && cF7Qrc2d != 'r8 revolver') return;
 var uJFxs77m = Entity['GetProp'](Entity['GetLocalPlayer'](), 'CBasePlayer', 'm_fFlags');
 if (!(uJFxs77m & 0x1 << 0x0) && !(uJFxs77m & 0x1 << 0x12)) {
  if ('uzkln' !== 'uzkln') {
   ForceHead(enemies[i]);
  } else {
   target = Ragebot['GetTarget']();
   value = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Hitchance');
   Ragebot['ForceTargetHitchance'](target, value);
  }
 }
}

function ExtrapolateTick(qKRv5bkq) {
 var aQM2hlen = Entity['GetLocalPlayer']();
 var YD2Qbbsq = Entity['GetHitboxPosition'](aQM2hlen, 0x0);
 var Z3ZMcqg3 = Entity['GetProp'](aQM2hlen, 'CBasePlayer', 'm_vecVelocity[0]');
 var CF7Qrc2d = [];
 CF7Qrc2d[0x0] = YD2Qbbsq[0x0] + Z3ZMcqg3[0x0] * Globals['TickInterval']() * qKRv5bkq;
 CF7Qrc2d[0x1] = YD2Qbbsq[0x1] + Z3ZMcqg3[0x1] * Globals['TickInterval']() * qKRv5bkq;
 CF7Qrc2d[0x2] = YD2Qbbsq[0x2] + Z3ZMcqg3[0x2] * Globals['TickInterval']() * qKRv5bkq;
 return CF7Qrc2d;
}

function IsLethal(RLVzdwyq) {
 var Q7VHhmwz = Entity['GetProp'](RLVzdwyq, 'CBasePlayer', 'm_iHealth');
 pelvis_pos = Entity['GetHitboxPosition'](RLVzdwyq, 0x2);
 body_pos = Entity['GetHitboxPosition'](RLVzdwyq, 0x3);
 thorax_pos = Entity['GetHitboxPosition'](RLVzdwyq, 0x4);
 var KGMvlada = [0x0, -0x1];
 var UJFxs77m = [0x0, -0x1];
 var SD8Jdhml = [0x0, -0x1];
 var QTYchczh = [0x0, -0x1];
 result_thorax = Trace['Bullet'](Entity['GetLocalPlayer'](), RLVzdwyq, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), thorax_pos);
 if (result_thorax[0x1] >= Q7VHhmwz) return !![];
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
  UJFxs77m = Trace['Bullet'](Entity['GetLocalPlayer'](), RLVzdwyq, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), pelvis_pos);
  KGMvlada = Trace['Bullet'](Entity['GetLocalPlayer'](), RLVzdwyq, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), body_pos);
  if (UJFxs77m[0x1] >= Q7VHhmwz) return !![];
  if (KGMvlada[0x1] >= Q7VHhmwz) return !![];
 }
 result_thorax_extrapolated = Trace['Bullet'](Entity['GetLocalPlayer'](), RLVzdwyq, ExtrapolateTick(0x14), thorax_pos);
 if (result_thorax_extrapolated[0x1] >= Q7VHhmwz) {
  if ('jcxlh' !== 'KVHlJ') {
   Ragebot['ForceTargetSafety'](RLVzdwyq);
   return !![];
  } else {
   if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Jump scout/revolver hitchance')) return;
   var RLSgrdcz = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']()));
   if (RLSgrdcz != 'ssg 08' && RLSgrdcz != 'r8 revolver') return;
   var NFMhvu6e = Entity['GetProp'](Entity['GetLocalPlayer'](), 'CBasePlayer', 'm_fFlags');
   if (!(NFMhvu6e & 0x1 << 0x0) && !(NFMhvu6e & 0x1 << 0x12)) {
    target = Ragebot['GetTarget']();
    value = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Hitchance');
    Ragebot['ForceTargetHitchance'](target, value);
   }
  }
 }
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
  QTYchczh = Trace['Bullet'](Entity['GetLocalPlayer'](), RLVzdwyq, ExtrapolateTick(0x19), pelvis_pos);
  SD8Jdhml = Trace['Bullet'](Entity['GetLocalPlayer'](), RLVzdwyq, ExtrapolateTick(0x19), body_pos);
  if (QTYchczh[0x1] >= Q7VHhmwz) return !![];
  if (SD8Jdhml[0x1] >= Q7VHhmwz) return !![];
 }
 return ![];
}

function IsExploitCharged() {
 if (Exploit['GetCharge']() == 0x1) return !![];
 return ![];
}

function AttemptTwoShotKill(AQM2hlen) {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Predict doubletap damage')) return ![];
 if (UI['IsHotkeyActive']('Anti-Aim', 'Extra', 'Fake duck')) return ![];
 var NXVxzhnf = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']()));
 if (NXVxzhnf != 'scar 20' && NXVxzhnf != 'g3sg1') return ![];
 if (!UI['IsHotkeyActive']('Rage', 'Exploits', 'Doubletap')) return ![];
 Ragebot['ForceHitboxSafety'](0x0);
 var USShc9cv = Entity['GetProp'](AQM2hlen, 'CBasePlayer', 'm_iHealth');
 var UDU2xk2y = GetClosestEnemyToCrosshair();
 pelvis_pos = Entity['GetHitboxPosition'](AQM2hlen, 0x2);
 body_pos = Entity['GetHitboxPosition'](AQM2hlen, 0x3);
 thorax_pos = Entity['GetHitboxPosition'](AQM2hlen, 0x4);
 var GQTxkpxn = [0x0, -0x1];
 var yd2qBbsq = [0x0, -0x1];
 var ussHc9cv = [0x0, -0x1];
 var nxvXzhnf = [0x0, -0x1];
 result_thorax = Trace['Bullet'](Entity['GetLocalPlayer'](), AQM2hlen, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), thorax_pos);
 if (AQM2hlen = UDU2xk2y) dynamicDamage = result_thorax[0x1];
 if (result_thorax[0x1] * 0x2 >= USShc9cv && IsExploitCharged() == !![]) {
  Ragebot['ForceTargetMinimumDamage'](AQM2hlen, USShc9cv / 0x2 + 0x1);
  return !![];
 }
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
  yd2qBbsq = Trace['Bullet'](Entity['GetLocalPlayer'](), AQM2hlen, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), pelvis_pos);
  GQTxkpxn = Trace['Bullet'](Entity['GetLocalPlayer'](), AQM2hlen, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), body_pos);
  if (AQM2hlen = UDU2xk2y) dynamicDamage = yd2qBbsq[0x1];
  if (yd2qBbsq[0x1] * 0x2 >= USShc9cv && IsExploitCharged() == !![]) {
   if ('xwWam' !== 'xwWam') {
    target = Ragebot['GetTarget']();
    value = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Hitchance');
    Ragebot['ForceTargetHitchance'](target, value);
   } else {
    Ragebot['ForceTargetMinimumDamage'](AQM2hlen, USShc9cv / 0x2 + 0x1);
    return !![];
   }
  }
  if (AQM2hlen = UDU2xk2y) dynamicDamage = GQTxkpxn[0x1];
  if (GQTxkpxn[0x1] * 0x2 >= USShc9cv && IsExploitCharged() == !![]) {
   Ragebot['ForceTargetMinimumDamage'](AQM2hlen, USShc9cv / 0x2 + 0x1);
   return !![];
  }
 }
 result_thorax_extrapolated = Trace['Bullet'](Entity['GetLocalPlayer'](), AQM2hlen, ExtrapolateTick(0xf), thorax_pos);
 if (AQM2hlen = UDU2xk2y) dynamicDamage = result_thorax_extrapolated[0x1];
 if (result_thorax_extrapolated[0x1] * 0x2 >= USShc9cv && IsExploitCharged() == !![]) {
  Ragebot['ForceTargetMinimumDamage'](AQM2hlen, USShc9cv / 0x2 + 0x1);
  return !![];
 }
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
  nxvXzhnf = Trace['Bullet'](Entity['GetLocalPlayer'](), AQM2hlen, ExtrapolateTick(0x19), pelvis_pos);
  ussHc9cv = Trace['Bullet'](Entity['GetLocalPlayer'](), AQM2hlen, ExtrapolateTick(0x19), body_pos);
  if (AQM2hlen = UDU2xk2y) dynamicDamage = nxvXzhnf[0x1];
  if (nxvXzhnf[0x1] * 0x2 >= USShc9cv && IsExploitCharged() == !![]) {
   if ('wJduH' !== 'PVMnp') {
    Ragebot['ForceTargetMinimumDamage'](AQM2hlen, USShc9cv / 0x2 + 0x1);
    return !![];
   } else {
    UI['ToggleHotkey']('Rage', 'GENERAL', 'General', 'Force body aim');
   }
  }
  if (AQM2hlen = UDU2xk2y) dynamicDamage = ussHc9cv[0x1];
  if (ussHc9cv[0x1] * 0x2 >= USShc9cv && IsExploitCharged() == !![]) {
   Ragebot['ForceTargetMinimumDamage'](AQM2hlen, USShc9cv / 0x2 + 0x1);
   return !![];
  }
 }
 dynamicDamage = 0x0;
}

function DrawDynamicDamage() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Draw predicted damage')) return;
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Predict doubletap damage')) return;
 if (UI['IsHotkeyActive']('Anti-Aim', 'Extra', 'Fake duck')) return;
 var cf7qRc2d = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']()));
 if (cf7qRc2d != 'scar 20' && cf7qRc2d != 'g3sg1') return;
 if (!UI['IsHotkeyActive']('Rage', 'Exploits', 'Doubletap')) return;
 if (IsInAir(Entity['GetLocalPlayer']())) return;
 var sd8jDhml = Entity['GetLocalPlayer']();
 var udu2Xk2y = Entity['GetRenderOrigin'](sd8jDhml);
 var z3zmCqg3 = Entity['GetProp'](sd8jDhml, 'CBasePlayer', 'm_vecVelocity[0]');
 var rlsGrdcz = 0x3e7;
 var qkrV5bkq = GetClosestEnemyToCrosshair();
 if (Entity['IsValid'](qkrV5bkq) && Entity['IsAlive'](qkrV5bkq) && !Entity['IsDormant'](qkrV5bkq)) rlsGrdcz = Entity['GetProp'](qkrV5bkq, 'CBasePlayer', 'm_iHealth');
 var ujfXs77m = [];
 ujfXs77m[0x0] = udu2Xk2y[0x0] + z3zmCqg3[0x0] * Globals['TickInterval']() * 0xf;
 ujfXs77m[0x1] = udu2Xk2y[0x1] + z3zmCqg3[0x1] * Globals['TickInterval']() * 0xf;
 ujfXs77m[0x2] = udu2Xk2y[0x2] + z3zmCqg3[0x2] * Globals['TickInterval']() * 0xf;
 var kgmVlada = Render['WorldToScreen'](ujfXs77m);
 if (dynamicDamage >= rlsGrdcz / 0x2) color = [0x0, 0xff, 0x0, 0xff];
 else color = [0xff, 0x0, 0x0, 0xff];
 Render['Circle'](kgmVlada[0x0], kgmVlada[0x1], 0x5, [0xff, 0xff, 0xff, 0xff]);
 Render['String'](kgmVlada[0x0], kgmVlada[0x1] - 0x1e, 0x1, '' + dynamicDamage, color, 0x0);
}

function IsStanding(q7vhHmwz) {
 var nfmHvu6e = Entity['GetProp'](q7vhHmwz, 'CBasePlayer', 'm_vecVelocity[0]');
 var qtyChczh = Math['sqrt'](nfmHvu6e[0x0] * nfmHvu6e[0x0] + nfmHvu6e[0x1] * nfmHvu6e[0x1]);
 if (qtyChczh <= 0x5) return !![];
 else return ![];
}

function IsSlowWalking(aqm2Hlen) {
 var QtyChczh = Entity['GetProp'](aqm2Hlen, 'CBasePlayer', 'm_vecVelocity[0]');
 var UjfXs77m = Math['sqrt'](QtyChczh[0x0] * QtyChczh[0x0] + QtyChczh[0x1] * QtyChczh[0x1]);
 if (UjfXs77m >= 0xa && UjfXs77m <= 0x55) return !![];
 else return ![];
}

function ForceHead(Aqm2Hlen) {
 DisableBaim();
 var QkrV5bkq = Entity['GetProp'](Aqm2Hlen, 'CBasePlayer', 'm_iHealth');
 head_pos = Entity['GetHitboxPosition'](Aqm2Hlen, 0x0);
 result_head = Trace['Bullet'](Entity['GetLocalPlayer'](), Aqm2Hlen, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), head_pos);
 if (result_head[0x1] > 0x0 && result_head[0x1] >= UI['GetValue']('Rage', GetLocalPlayerWeaponCategory(), 'Targeting', 'Minimum damage')) {
  Ragebot['ForceTargetMinimumDamage'](Aqm2Hlen, result_head[0x1]);
 }
}

function ForceBaim(Udu2Xk2y) {
 if (!UI['IsHotkeyActive']('Rage', 'GENERAL', 'General', 'Force body aim')) {
  UI['ToggleHotkey']('Rage', 'GENERAL', 'General', 'Force body aim');
 }
 Ragebot['ForceHitboxSafety'](0x0);
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Use highest possible damage')) return;
 var Cf7qRc2d = Entity['GetProp'](Udu2Xk2y, 'CBasePlayer', 'm_iHealth');
 pelvis_pos = Entity['GetHitboxPosition'](Udu2Xk2y, 0x2);
 body_pos = Entity['GetHitboxPosition'](Udu2Xk2y, 0x3);
 thorax_pos = Entity['GetHitboxPosition'](Udu2Xk2y, 0x4);
 var Q7vhHmwz = [0x0, -0x1];
 var RlsGrdcz = [0x0, -0x1];
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
  if ('rqIcP' === 'DlZbm') {
   DisableBaim();
   var KgmVlada = Entity['GetProp'](Udu2Xk2y, 'CBasePlayer', 'm_iHealth');
   head_pos = Entity['GetHitboxPosition'](Udu2Xk2y, 0x0);
   result_head = Trace['Bullet'](Entity['GetLocalPlayer'](), Udu2Xk2y, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), head_pos);
   if (result_head[0x1] > 0x0 && result_head[0x1] >= UI['GetValue']('Rage', GetLocalPlayerWeaponCategory(), 'Targeting', 'Minimum damage')) {
    Ragebot['ForceTargetMinimumDamage'](Udu2Xk2y, result_head[0x1]);
   }
  } else {
   RlsGrdcz = Trace['Bullet'](Entity['GetLocalPlayer'](), Udu2Xk2y, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), pelvis_pos);
   Q7vhHmwz = Trace['Bullet'](Entity['GetLocalPlayer'](), Udu2Xk2y, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), body_pos);
  }
 }
 var Yd2qBbsq = Trace['Bullet'](Entity['GetLocalPlayer'](), Udu2Xk2y, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), thorax_pos);
 var Z3zmCqg3 = Math['max'](RlsGrdcz[0x1], Q7vhHmwz[0x1], Yd2qBbsq[0x1]);
 if (Cf7qRc2d > Z3zmCqg3) {
  Ragebot['ForceTargetMinimumDamage'](Udu2Xk2y, Z3zmCqg3);
 } else {
  if ('gipQu' !== 'NPNOT') {
   Ragebot['ForceTargetMinimumDamage'](Udu2Xk2y, Cf7qRc2d);
  } else {
   var UssHc9cv = Entity['GetProp'](Udu2Xk2y, 'CBasePlayer', 'm_iHealth');
   pelvis_pos = Entity['GetHitboxPosition'](Udu2Xk2y, 0x2);
   body_pos = Entity['GetHitboxPosition'](Udu2Xk2y, 0x3);
   thorax_pos = Entity['GetHitboxPosition'](Udu2Xk2y, 0x4);
   var NfmHvu6e = [0x0, -0x1];
   var GqtXkpxn = [0x0, -0x1];
   var NxvXzhnf = [0x0, -0x1];
   var cF7qRc2d = [0x0, -0x1];
   Yd2qBbsq = Trace['Bullet'](Entity['GetLocalPlayer'](), Udu2Xk2y, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), thorax_pos);
   if (Yd2qBbsq[0x1] >= UssHc9cv) return !![];
   if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
    GqtXkpxn = Trace['Bullet'](Entity['GetLocalPlayer'](), Udu2Xk2y, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), pelvis_pos);
    NfmHvu6e = Trace['Bullet'](Entity['GetLocalPlayer'](), Udu2Xk2y, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), body_pos);
    if (GqtXkpxn[0x1] >= UssHc9cv) return !![];
    if (NfmHvu6e[0x1] >= UssHc9cv) return !![];
   }
   result_thorax_extrapolated = Trace['Bullet'](Entity['GetLocalPlayer'](), Udu2Xk2y, ExtrapolateTick(0x14), thorax_pos);
   if (result_thorax_extrapolated[0x1] >= UssHc9cv) {
    Ragebot['ForceTargetSafety'](Udu2Xk2y);
    return !![];
   }
   if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
    cF7qRc2d = Trace['Bullet'](Entity['GetLocalPlayer'](), Udu2Xk2y, ExtrapolateTick(0x19), pelvis_pos);
    NxvXzhnf = Trace['Bullet'](Entity['GetLocalPlayer'](), Udu2Xk2y, ExtrapolateTick(0x19), body_pos);
    if (cF7qRc2d[0x1] >= UssHc9cv) return !![];
    if (NxvXzhnf[0x1] >= UssHc9cv) return !![];
   }
   return ![];
  }
 }
}

function DisableBaim() {
 if (UI['IsHotkeyActive']('Rage', 'GENERAL', 'Force body aim')) UI['ToggleHotkey']('Rage', 'GENERAL', 'Force body aim');
}

function WaitForOnShot() {
 var uJfXs77m = Entity['GetEnemies']();
 for (i = 0x0; i < uJfXs77m['length']; i++) {
  if (!Entity['IsValid'](uJfXs77m[i])) continue;
  if (!Entity['IsAlive'](uJfXs77m[i])) continue;
  if (Entity['IsDormant'](uJfXs77m[i])) continue;
  var qTyChczh = Entity['GetWeapon'](uJfXs77m[i]);
  var sD8jDhml = Entity['GetProp'](qTyChczh, 'CWeaponCSBase', 'm_fLastShotTime');
  if (sD8jDhml != storedShotTime[uJfXs77m[i]]) {
   firedThisTick[uJfXs77m[i]] = !![];
   storedShotTime[uJfXs77m[i]] = sD8jDhml;
  } else {
   if ('UiYqz' !== 'UiYqz') {
    firedThisTick = [];
    storedShotTime = [];
    info = [];
   } else {
    firedThisTick[uJfXs77m[i]] = ![];
   }
  }
  if (!UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Wait for on shot backtrack')) return;
  if (firedThisTick[uJfXs77m[i]] == !![]) {
   ForceHead(uJfXs77m[i]);
  } else {
   Ragebot['IgnoreTarget'](uJfXs77m[i]);
   info[uJfXs77m[i]] = 'WAITING';
  }
 }
}

function deg2rad(yD2qBbsq) {
 return yD2qBbsq * Math['\x50\x49'] / 0xb4;
}

function angle_to_vec(rLsGrdcz, q7VhHmwz) {
 var uDu2Xk2y = deg2rad(rLsGrdcz);
 var nXvXzhnf = deg2rad(q7VhHmwz);
 var z3ZmCqg3 = Math['sin'](uDu2Xk2y);
 var nFmHvu6e = Math['cos'](uDu2Xk2y);
 var kGmVlada = Math['sin'](nXvXzhnf);
 var qKrV5bkq = Math['cos'](nXvXzhnf);
 return [nFmHvu6e * qKrV5bkq, nFmHvu6e * kGmVlada, -z3ZmCqg3];
}

function trace(uSsHc9cv, aQm2Hlen) {
 var rLvZdwyq = angle_to_vec(aQm2Hlen[0x0], aQm2Hlen[0x1]);
 var RLvZdwyq = Entity['GetRenderOrigin'](uSsHc9cv);
 RLvZdwyq[0x2] += 0x32;
 var CF7qRc2d = [RLvZdwyq[0x0] + rLvZdwyq[0x0] * 0x2000, RLvZdwyq[0x1] + rLvZdwyq[0x1] * 0x2000, RLvZdwyq[0x2] + rLvZdwyq[0x2] * 0x2000];
 var YD2qBbsq = Trace['Line'](uSsHc9cv, RLvZdwyq, CF7qRc2d);
 if (YD2qBbsq[0x1] == 0x1) return;
 CF7qRc2d = [RLvZdwyq[0x0] + rLvZdwyq[0x0] * YD2qBbsq[0x1] * 0x2000, RLvZdwyq[0x1] + rLvZdwyq[0x1] * YD2qBbsq[0x1] * 0x2000, RLvZdwyq[0x2] + rLvZdwyq[0x2] * YD2qBbsq[0x1] * 0x2000];
 var UJfXs77m = Math['sqrt']((RLvZdwyq[0x0] - CF7qRc2d[0x0]) * (RLvZdwyq[0x0] - CF7qRc2d[0x0]) + (RLvZdwyq[0x1] - CF7qRc2d[0x1]) * (RLvZdwyq[0x1] - CF7qRc2d[0x1]) + (RLvZdwyq[0x2] - CF7qRc2d[0x2]) * (RLvZdwyq[0x2] - CF7qRc2d[0x2]));
 RLvZdwyq = Render['WorldToScreen'](RLvZdwyq);
 CF7qRc2d = Render['WorldToScreen'](CF7qRc2d);
 if (CF7qRc2d[0x2] != 0x1 || RLvZdwyq[0x2] != 0x1) return;
 return UJfXs77m;
}

function ReversedFreestanding() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Reversed freestanding')) return;
 var QTyChczh = Entity['GetLocalPlayer']();
 if (Entity['IsValid'](QTyChczh)) {
  if ('XOQZy' === 'rSZYi') {
   var SD8jDhml = Entity['GetProp'](entity_id, 'CBasePlayer', 'm_vecVelocity[0]');
   var USsHc9cv = Math['sqrt'](SD8jDhml[0x0] * SD8jDhml[0x0] + SD8jDhml[0x1] * SD8jDhml[0x1]);
   if (USsHc9cv >= 0xa && USsHc9cv <= 0x55) return !![];
   else return ![];
  } else {
   var Q7VhHmwz = Entity['GetEyePosition'](QTyChczh);
   left_distance = trace(QTyChczh, [0x0, Q7VhHmwz[0x1] - 0x21]);
   right_distance = trace(QTyChczh, [0x0, Q7VhHmwz[0x1] + 0x21]);
   if (left_distance > right_distance) {
    if (UI['IsHotkeyActive']('Anti-Aim', 'Fake angles', 'Inverter')) UI['ToggleHotkey']('Anti-Aim', 'Fake angles', 'Inverter');
   }
   if (right_distance > left_distance) {
    if (!UI['IsHotkeyActive']('Anti-Aim', 'Fake angles', 'Inverter')) UI['ToggleHotkey']('Anti-Aim', 'Fake angles', 'Inverter');
   }
  }
 }
}

function DrawToggles() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators')) return;
 var QKrV5bkq = Global['GetScreenSize']();
 var NFmHvu6e;
 NFmHvu6e = UI['GetColor']('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color');
 if (!UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows'))
  if (UI['IsHotkeyActive']('Anti-Aim', 'Fake angles', 'Inverter')) {
   Render['Polygon']([
    [QKrV5bkq[0x0] / 0x2 - 0x31, QKrV5bkq[0x1] / 0x2 + 0x9],
    [QKrV5bkq[0x0] / 0x2 - 0x41, QKrV5bkq[0x1] / 0x2],
    [QKrV5bkq[0x0] / 0x2 - 0x31, QKrV5bkq[0x1] / 0x2 - 0x9]
   ], [0x0, 0x0, 0x0, 0x50]);
   Render['Polygon']([
    [QKrV5bkq[0x0] / 0x2 + 0x31, QKrV5bkq[0x1] / 0x2 - 0x9],
    [QKrV5bkq[0x0] / 0x2 + 0x41, QKrV5bkq[0x1] / 0x2],
    [QKrV5bkq[0x0] / 0x2 + 0x31, QKrV5bkq[0x1] / 0x2 + 0x9]
   ], NFmHvu6e);
  } else {
   Render['Polygon']([
    [QKrV5bkq[0x0] / 0x2 - 0x31, QKrV5bkq[0x1] / 0x2 + 0x9],
    [QKrV5bkq[0x0] / 0x2 - 0x41, QKrV5bkq[0x1] / 0x2],
    [QKrV5bkq[0x0] / 0x2 - 0x31, QKrV5bkq[0x1] / 0x2 - 0x9]
   ], NFmHvu6e);
   Render['Polygon']([
    [QKrV5bkq[0x0] / 0x2 + 0x31, QKrV5bkq[0x1] / 0x2 - 0x9],
    [QKrV5bkq[0x0] / 0x2 + 0x41, QKrV5bkq[0x1] / 0x2],
    [QKrV5bkq[0x0] / 0x2 + 0x31, QKrV5bkq[0x1] / 0x2 + 0x9]
   ], [0x0, 0x0, 0x0, 0x50]);
  } var RLsGrdcz = GetActiveIndicators();
 var Z3ZmCqg3 = 0x0;
 if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 0x0)) {
  Z3ZmCqg3 += 0x1;
  Render['String'](QKrV5bkq[0x0] / 0x2, QKrV5bkq[0x1] / 0x2 + (RLsGrdcz - Z3ZmCqg3) * 0xa + 0x14, 0x1, 'DODGE', [0xff, 0xff, 0x0, 0xff], 0x3);
 }
 if (UI['IsHotkeyActive']('Rage', 'Exploits', 'Doubletap') && getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 0x1)) {
  Z3ZmCqg3 += 0x1;
  Render['String'](QKrV5bkq[0x0] / 0x2, QKrV5bkq[0x1] / 0x2 + (RLsGrdcz - Z3ZmCqg3) * 0xa + 0x14, 0x1, '\x44\x54', [0x0, 0xff, 0x0, 0xff], 0x3);
 }
 if (UI['IsHotkeyActive']('Rage', 'General', 'Force safe point') && getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 0x3)) {
  Z3ZmCqg3 += 0x1;
  Render['String'](QKrV5bkq[0x0] / 0x2, QKrV5bkq[0x1] / 0x2 + (RLsGrdcz - Z3ZmCqg3) * 0xa + 0x14, 0x1, 'SAFE', [0x0, 0xff, 0xff, 0xff], 0x3);
 }
 if (UI['IsHotkeyActive']('Rage', 'Exploits', 'Hide shots') && getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 0x2)) {
  if ('jiwpi' !== 'wEfjk') {
   Z3ZmCqg3 += 0x1;
   Render['String'](QKrV5bkq[0x0] / 0x2, QKrV5bkq[0x1] / 0x2 + (RLsGrdcz - Z3ZmCqg3) * 0xa + 0x14, 0x1, 'HIDE', [0x9b, 0xff, 0x9b, 0xff], 0x3);
  } else {
   result_pelvis_extrapolated = Trace['Bullet'](Entity['GetLocalPlayer'](), entity_id, ExtrapolateTick(0x19), pelvis_pos);
   result_body_extrapolated = Trace['Bullet'](Entity['GetLocalPlayer'](), entity_id, ExtrapolateTick(0x19), body_pos);
   if (entity_id = closest) dynamicDamage = result_pelvis_extrapolated[0x1];
   if (result_pelvis_extrapolated[0x1] * 0x2 >= hp && IsExploitCharged() == !![]) {
    Ragebot['ForceTargetMinimumDamage'](entity_id, hp / 0x2 + 0x1);
    return !![];
   }
   if (entity_id = closest) dynamicDamage = result_body_extrapolated[0x1];
   if (result_body_extrapolated[0x1] * 0x2 >= hp && IsExploitCharged() == !![]) {
    Ragebot['ForceTargetMinimumDamage'](entity_id, hp / 0x2 + 0x1);
    return !![];
   }
  }
 }
 if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key') && getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 0x4)) {
  Z3ZmCqg3 += 0x1;
  Render['String'](QKrV5bkq[0x0] / 0x2, QKrV5bkq[0x1] / 0x2 + (RLsGrdcz - Z3ZmCqg3) * 0xa + 0x14, 0x1, 'DMG', [0xff, 0x80, 0x0, 0xff], 0x3);
 }
}

function DrawIndicators() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Draw HEAD/BAIM flags')) return;
 var UDu2Xk2y = Global['GetScreenSize']();
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions')) return;
 var AQm2Hlen = Entity['GetEnemies']();
 for (i = 0x0; i < AQm2Hlen['length']; i++) {
  if ('yfoPL' === 'owXKr') {
   var nfMHvu6e = Entity['GetProp'](entity_id, 'CBasePlayer', 'm_fFlags');
   if (!(nfMHvu6e & 0x1 << 0x0) && !(nfMHvu6e & 0x1 << 0x12)) return !![];
   else return ![];
  } else {
   if (!Entity['IsValid'](AQm2Hlen[i])) continue;
   if (!Entity['IsAlive'](AQm2Hlen[i])) continue;
   if (Entity['IsDormant'](AQm2Hlen[i])) continue;
   var NXvXzhnf = Entity['GetRenderBox'](AQm2Hlen[i]);
   var ujFXs77m = NXvXzhnf[0x3] - NXvXzhnf[0x1];
   ujFXs77m /= 0x2;
   ujFXs77m += NXvXzhnf[0x1];
   switch (info[AQm2Hlen[i]]) {
    case 'HEAD':
     Render['StringCustom'](ujFXs77m, NXvXzhnf[0x2] - 0x19, 0x1, info[AQm2Hlen[i]], [0xd7, 0xff, 0x96, 0xff], font);
     break;
    case 'DEFAULT':
     Render['StringCustom'](ujFXs77m, NXvXzhnf[0x2] - 0x19, 0x1, info[AQm2Hlen[i]], [0xff, 0xff, 0xff, 0xff], font);
     break;
    case 'AIR':
     Render['StringCustom'](ujFXs77m, NXvXzhnf[0x2] - 0x19, 0x1, info[AQm2Hlen[i]], [0x0, 0xff, 0xff, 0xff], font);
     break;
    case 'CROUCH':
     Render['StringCustom'](ujFXs77m, NXvXzhnf[0x2] - 0x19, 0x1, info[AQm2Hlen[i]], [0xc7, 0x91, 0x12, 0xff], font);
     break;
    case 'LETHAL':
     Render['StringCustom'](ujFXs77m, NXvXzhnf[0x2] - 0x19, 0x1, info[AQm2Hlen[i]], [0x3f, 0x85, 0xfc, 0xff], font);
     break;
    case 'SLOW':
     Render['StringCustom'](ujFXs77m, NXvXzhnf[0x2] - 0x19, 0x1, info[AQm2Hlen[i]], [0x3f, 0x85, 0xfc, 0xff], font);
     break;
    case '\x58\x32':
     Render['StringCustom'](ujFXs77m, NXvXzhnf[0x2] - 0x19, 0x1, info[AQm2Hlen[i]], [0x0, 0x80, 0xf0, 0xff], font);
     break;
    case 'WAITING':
     Render['StringCustom'](ujFXs77m, NXvXzhnf[0x2] - 0x19, 0x1, info[AQm2Hlen[i]], [0xff, 0x7d, 0xff, 0xff], font);
     break;
    case 'STANDING':
     Render['StringCustom'](ujFXs77m, NXvXzhnf[0x2] - 0x19, 0x1, info[AQm2Hlen[i]], [0x9b, 0xff, 0xfc, 0xff], font);
     break;
    case 'SHOT':
     Render['StringCustom'](ujFXs77m, NXvXzhnf[0x2] - 0x19, 0x1, info[AQm2Hlen[i]], [0xff, 0xff, 0x96, 0xff], font);
     break;
    case 'OVERRIDE':
     Render['StringCustom'](ujFXs77m, NXvXzhnf[0x2] - 0x19, 0x1, info[AQm2Hlen[i]], [0xff, 0x7d, 0xff, 0xff], font);
     break;
   }
   if (UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Draw SAFE flags') && safeTargets[AQm2Hlen[i]]) Render['StringCustom'](ujFXs77m, NXvXzhnf[0x2] - 0x23, 0x1, 'SAFE', [0xde, 0xab, 0xff, 0xff], font);
  }
 }
}

function GetHitboxName(kgMVlada) {
 var q7vHHmwz = '';
 switch (kgMVlada) {
  case 0x0:
   q7vHHmwz = 'Head';
   break;
  case 0x1:
   q7vHHmwz = 'Neck';
   break;
  case 0x2:
   q7vHHmwz = 'Pelvis';
   break;
  case 0x3:
   q7vHHmwz = 'Body';
   break;
  case 0x4:
   q7vHHmwz = 'Thorax';
   break;
  case 0x5:
   q7vHHmwz = 'Chest';
   break;
  case 0x6:
   q7vHHmwz = 'Upper chest';
   break;
  case 0x7:
   q7vHHmwz = 'Left thigh';
   break;
  case 0x8:
   q7vHHmwz = 'Right thigh';
   break;
  case 0x9:
   q7vHHmwz = 'Left calf';
   break;
  case 0xa:
   q7vHHmwz = 'Right calf';
   break;
  case 0xb:
   q7vHHmwz = 'Left foot';
   break;
  case 0xc:
   q7vHHmwz = 'Right foot';
   break;
  case 0xd:
   q7vHHmwz = 'Left hand';
   break;
  case 0xe:
   q7vHHmwz = 'Right hand';
   break;
  case 0xf:
   q7vHHmwz = 'Left upper arm';
   break;
  case 0x10:
   q7vHHmwz = 'Left forearm';
   break;
  case 0x11:
   q7vHHmwz = 'Right upper arm';
   break;
  case 0x12:
   q7vHHmwz = 'Right forearm';
   break;
  default:
   q7vHHmwz = 'Generic';
 }
 return q7vHHmwz;
}

function RagebotLogs() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Ragebot fire logs')) return;
 target = Event['GetInt']('target_index');
 targetName = Entity['GetName'](target);
 hitbox = Event['GetInt']('hitbox');
 hitchance = Event['GetInt']('hitchance');
 safepoint = Event['GetInt']('safepoint');
 exploit = Event['GetInt']('exploit');
 log = '[hvh_essentials] Fired shot at ' + targetName + '\x20\x28' + target + '\x29' + ' | Hitbox: ' + GetHitboxName(hitbox) + ' | Hitchance: ' + hitchance + ' | Safepoint: ' + safepoint + ' | Exploit: ' + exploit + ' | Flag: ' + info[target];
 log += '\x0a';
 Cheat['PrintColor']([0x0, 0xff, 0x0, 0xff], log);
}

function SafepointOnLimbs() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Safe point on limbs')) return;
 Ragebot['ForceHitboxSafety'](0xc);
 Ragebot['ForceHitboxSafety'](0xb);
 Ragebot['ForceHitboxSafety'](0xa);
 Ragebot['ForceHitboxSafety'](0x9);
}

function OverrideMinimumDamage() {
 if (!UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key')) return;
 var udU2Xk2y = Entity['GetEnemies']();
 value = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Minimum damage');
 for (i = 0x0; i < udU2Xk2y['length']; i++) {
  Ragebot['ForceTargetMinimumDamage'](udU2Xk2y[i], value);
  info[udU2Xk2y[i]] = 'OVERRIDE';
 }
}

function ForceConditions() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions')) return;
 if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Wait for on shot backtrack')) return;
 if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key')) return;
 var usSHc9cv = Entity['GetEnemies']();
 var qtYChczh = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta');
 var sd8JDhml = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions');
 var cf7QRc2d = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions');
 var aqM2Hlen = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force SAFEPOINT conditions');
 for (i = 0x0; i < usSHc9cv['length']; i++) {
  if ('YhUFg' !== 'YhUFg') {
   var rlSGrdcz = Entity['GetProp'](entity_id, 'CBasePlayer', 'm_iTeamNum');
   var gqTXkpxn = Entity['GetProp'](entity_id, 'CBasePlayer', 'm_fFlags');
   if (rlSGrdcz == 0x2 && gqTXkpxn & 0x1 << 0x1) return !![];
   else return ![];
  } else {
   if (!Entity['IsValid'](usSHc9cv[i])) continue;
   if (!Entity['IsAlive'](usSHc9cv[i])) continue;
   if (Entity['IsDormant'](usSHc9cv[i])) continue;
   mode = '';
   info[usSHc9cv[i]] = 'DEFAULT';
   safeTargets[usSHc9cv[i]] = ![];
   var qkRV5bkq = Ragebot['GetTarget']();
   if (getDropdownValue(aqM2Hlen, 0x0) && IsLethal(usSHc9cv[i])) {
    safeTargets[usSHc9cv[i]] = !![];
    Ragebot['ForceTargetSafety'](usSHc9cv[i]);
   }
   if (getDropdownValue(aqM2Hlen, 0x1) && IsSlowWalking(usSHc9cv[i])) {
    safeTargets[usSHc9cv[i]] = !![];
    Ragebot['ForceTargetSafety'](usSHc9cv[i]);
   }
   if (getDropdownValue(aqM2Hlen, 0x3) && IsInAir(usSHc9cv[i])) {
    safeTargets[usSHc9cv[i]] = !![];
    Ragebot['ForceTargetSafety'](usSHc9cv[i]);
   }
   if (getDropdownValue(aqM2Hlen, 0x2) && IsStanding(usSHc9cv[i]) && !IsInAir(usSHc9cv[i])) {
    safeTargets[usSHc9cv[i]] = !![];
    Ragebot['ForceTargetSafety'](usSHc9cv[i]);
   }
   if (getDropdownValue(aqM2Hlen, 0x4) && IsCrouch(usSHc9cv[i])) {
    safeTargets[usSHc9cv[i]] = !![];
    Ragebot['ForceTargetSafety'](usSHc9cv[i]);
   }
   if (AttemptTwoShotKill(usSHc9cv[i]) == !![] && UI['GetValue']('Misc', 'JAVASCRIPT', 'Predict doubletap damage')) {
    info[usSHc9cv[i]] = '\x58\x32';
    continue;
   }
   if (getDropdownValue(cf7QRc2d, 0x0) && IsLethal(usSHc9cv[i])) {
    if ('mJiEu' !== 'mJiEu') {
     var yd2QBbsq = Entity['GetProp'](entity_id, 'CBasePlayer', 'm_vecVelocity[0]');
     var Yd2QBbsq = Math['sqrt'](yd2QBbsq[0x0] * yd2QBbsq[0x0] + yd2QBbsq[0x1] * yd2QBbsq[0x1]);
     return 0x3a - 0x3a * Yd2QBbsq / 0x244;
    } else {
     if (qkRV5bkq == usSHc9cv[i]) ForceBaim(usSHc9cv[i]);
     info[usSHc9cv[i]] = 'LETHAL';
     continue;
    }
   }
   if (getDropdownValue(sd8JDhml, 0x3) && firedThisTick[usSHc9cv[i]] == !![]) {
    if ('AyKeC' === 'AyKeC') {
     ForceHead(usSHc9cv[i]);
     info[usSHc9cv[i]] = 'SHOT';
     continue;
    } else {
     if (UI['IsHotkeyActive']('Anti-Aim', 'Fake angles', 'Inverter')) UI['ToggleHotkey']('Anti-Aim', 'Fake angles', 'Inverter');
    }
   }
   if (getDropdownValue(cf7QRc2d, 0x1) && IsSlowWalking(usSHc9cv[i])) {
    if ('kLkdL' !== 'YlDGr') {
     if (qkRV5bkq == usSHc9cv[i]) ForceBaim(usSHc9cv[i]);
     info[usSHc9cv[i]] = 'SLOW';
     continue;
    } else {
     Render['Polygon']([
      [screen_size[0x0] / 0x2 - 0x31, screen_size[0x1] / 0x2 + 0x9],
      [screen_size[0x0] / 0x2 - 0x41, screen_size[0x1] / 0x2],
      [screen_size[0x0] / 0x2 - 0x31, screen_size[0x1] / 0x2 - 0x9]
     ], [0x0, 0x0, 0x0, 0x50]);
     Render['Polygon']([
      [screen_size[0x0] / 0x2 + 0x31, screen_size[0x1] / 0x2 - 0x9],
      [screen_size[0x0] / 0x2 + 0x41, screen_size[0x1] / 0x2],
      [screen_size[0x0] / 0x2 + 0x31, screen_size[0x1] / 0x2 + 0x9]
     ], color);
    }
   }
   if (getDropdownValue(cf7QRc2d, 0x3) && IsInAir(usSHc9cv[i])) {
    if ('ywYmR' !== 'ywYmR') {
     Render['Polygon']([
      [screen_size[0x0] / 0x2 - 0x31, screen_size[0x1] / 0x2 + 0x9],
      [screen_size[0x0] / 0x2 - 0x41, screen_size[0x1] / 0x2],
      [screen_size[0x0] / 0x2 - 0x31, screen_size[0x1] / 0x2 - 0x9]
     ], color);
     Render['Polygon']([
      [screen_size[0x0] / 0x2 + 0x31, screen_size[0x1] / 0x2 - 0x9],
      [screen_size[0x0] / 0x2 + 0x41, screen_size[0x1] / 0x2],
      [screen_size[0x0] / 0x2 + 0x31, screen_size[0x1] / 0x2 + 0x9]
     ], [0x0, 0x0, 0x0, 0x50]);
    } else {
     if (qkRV5bkq == usSHc9cv[i]) ForceBaim(usSHc9cv[i]);
     info[usSHc9cv[i]] = 'AIR';
     continue;
    }
   }
   if (getDropdownValue(cf7QRc2d, 0x2) && IsStanding(usSHc9cv[i]) && !IsInAir(usSHc9cv[i])) {
    if (qkRV5bkq == usSHc9cv[i]) ForceBaim(usSHc9cv[i]);
    info[usSHc9cv[i]] = 'STANDING';
    continue;
   }
   if (getDropdownValue(sd8JDhml, 0x1) && IsInAir(usSHc9cv[i])) {
    ForceHead(usSHc9cv[i]);
    info[usSHc9cv[i]] = 'AIR';
    continue;
   }
   if (getDropdownValue(sd8JDhml, 0x0) && GetMaxDesync(usSHc9cv[i]) < qtYChczh && !IsInAir(usSHc9cv[i])) {
    ForceHead(usSHc9cv[i]);
    info[usSHc9cv[i]] = 'HEAD';
    continue;
   }
   if (getDropdownValue(sd8JDhml, 0x2) && IsCrouchTerrorist(usSHc9cv[i])) {
    ForceHead(usSHc9cv[i]);
    info[usSHc9cv[i]] = 'CROUCH';
    continue;
   }
   DisableBaim();
  }
 }
}

function Draw() {
 if (font == null) {
  if ('iPzmQ' !== 'iPzmQ') {
   Ragebot['ForceTargetMinimumDamage'](entity_id, hp);
  } else {
   font = Render['AddFont']('Tahoma', 0x7, 0x2bc);
  }
 }
 if (UI['IsMenuOpen']()) {
  if (getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions'), 0x1)) UI['SetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions', setDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions'), 0x3, ![]));
  UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? !![] : ![]);
  UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? !![] : ![]);
  UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? !![] : ![]);
  UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? !![] : ![]);
  UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Force SAFEPOINT conditions', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? !![] : ![]);
  UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? !![] : ![]);
  UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Use highest possible damage', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? !![] : ![]);
  UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Draw predicted damage', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? !![] : ![]);
  delta = ![];
  if (getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions'), 0x0) && UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions')) {
   delta = !![];
  }
  UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta', delta);
  UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Draw HEAD/BAIM flags', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? !![] : ![]);
  UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Draw SAFE flags', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? !![] : ![]);
  UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? !![] : ![]);
  UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Predict doubletap damage', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? !![] : ![]);
  UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Hitchance', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Jump scout/revolver hitchance') ? !![] : ![]);
 }
 
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'HvH Essentials')) return;
 if (!Entity['IsValid'](Entity['GetLocalPlayer']())) return;
 if (!Entity['IsAlive'](Entity['GetLocalPlayer']())) return;
 DrawIndicators();
 DrawToggles();
 DrawDynamicDamage();
}

function CreateMove() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'HvH Essentials')) return;
 if (!Entity['IsValid'](Entity['GetLocalPlayer']())) return;
 if (!Entity['IsAlive'](Entity['GetLocalPlayer']())) return;
 ForceConditions();
 SetHitchanceInAir();
 ReversedFreestanding();
 SafepointOnLimbs();
 WaitForOnShot();
 OverrideMinimumDamage();
 DodgeBruteforce();
}

function FrameNetUpdateStart() {
 if (UI['GetValue']('Misc', 'JAVASCRIPT', 'Instant doubletap')) {
  if ('Ghifw' !== 'mVYCO') {
   Exploit['OverrideTolerance'](0x0);
   Exploit['OverrideShift'](0xe);
   shouldDisable = !![];
  } else {
   var NxVXzhnf = 0x0;
   var Sd8JDhml = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display');
   if (UI['IsHotkeyActive']('Rage', 'Exploits', 'Doubletap') && getDropdownValue(Sd8JDhml, 0x1)) NxVXzhnf += 0x1;
   if (UI['IsHotkeyActive']('Rage', 'Exploits', 'Hide shots') && getDropdownValue(Sd8JDhml, 0x2)) NxVXzhnf += 0x1;
   if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && getDropdownValue(Sd8JDhml, 0x0)) NxVXzhnf += 0x1;
   if (UI['IsHotkeyActive']('Rage', 'General', 'Force safe point') && getDropdownValue(Sd8JDhml, 0x3)) NxVXzhnf += 0x1;
   if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key') && getDropdownValue(Sd8JDhml, 0x4)) NxVXzhnf += 0x1;
   return NxVXzhnf;
  }
 }
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Instant doubletap') && shouldDisable == !![]) {
  Exploit['OverrideTolerance'](0x1);
  Exploit['OverrideShift'](0xc);
  shouldDisable = ![];
 }
}

function ClearData() {
 firedThisTick = [];
 storedShotTime = [];
 info = [];
}

function Main() {
 for (i = 0x0; i < 0x40; i++) {
  if ('iRrCh' !== 'iRrCh') {
   a = (a << 0x5) - a + b['charCodeAt'](0x0);
   return a & a;
  } else {
   info[i] = '';
   safeTargets[i] = ![];
  }
 }
 Cheat['RegisterCallback']('CreateMove', 'CreateMove');
 Cheat['RegisterCallback']('Draw', 'Draw');
 Cheat['RegisterCallback']('ragebot_fire', 'RagebotLogs');
 Cheat['RegisterCallback']('round_start', 'ClearData');
 Cheat['RegisterCallback']('FRAME_NET_UPDATE_START', 'FrameNetUpdateStart');
}
Main();