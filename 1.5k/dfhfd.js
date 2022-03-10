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
  '\x61\x70\x70\x6c\x79': function(AQm2hlen, AQm2hlen, YD2qbbsq) {
   switch (YD2qbbsq[0x0]) {
    case 'paint':
     Cheat['RegisterCallback']('Draw', YD2qbbsq[0x1]);
     break;
    case 'create_move':
     Cheat['RegisterCallback']('CreateMove', YD2qbbsq[0x1]);
     break;
    case 'fsn':
     Cheat['RegisterCallback']('FrameStageNotify', YD2qbbsq[0x1]);
     break;
    default:
     Cheat['RegisterCallback'](YD2qbbsq[0x0], YD2qbbsq[0x1]);
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
UI['AddCheckbox']('Predict doubletap damage');
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

function normalizeYaw(Q7Vhhmwz) {
 while (Q7Vhhmwz > 0xb4) Q7Vhhmwz = Q7Vhhmwz - 0x168;
 while (Q7Vhhmwz < -0xb4) Q7Vhhmwz = Q7Vhhmwz + 0x168;
 return Q7Vhhmwz;
}

function getDropdownValue(RLsgrdcz, RLvzdwyq) {
 var SD8jdhml = 0x1 << RLvzdwyq;
 return RLsgrdcz & SD8jdhml ? !![] : ![];
}

function setDropdownValue(UDu2xk2y, QTychczh, CF7qrc2d) {
 var Z3Zmcqg3 = 0x1 << QTychczh;
 return CF7qrc2d ? UDu2xk2y | Z3Zmcqg3 : UDu2xk2y & ~Z3Zmcqg3;
}

function GetActiveIndicators() {
 var GQtxkpxn = 0x0;
 var UJfxs77m = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display');
 if (UI['IsHotkeyActive']('Rage', 'Exploits', 'Doubletap') && getDropdownValue(UJfxs77m, 0x1)) GQtxkpxn += 0x1;
 if (UI['IsHotkeyActive']('Rage', 'Exploits', 'Hide shots') && getDropdownValue(UJfxs77m, 0x2)) GQtxkpxn += 0x1;
 if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && getDropdownValue(UJfxs77m, 0x0)) GQtxkpxn += 0x1;
 if (UI['IsHotkeyActive']('Rage', 'General', 'Force safe point') && getDropdownValue(UJfxs77m, 0x3)) GQtxkpxn += 0x1;
 if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key') && getDropdownValue(UJfxs77m, 0x4)) GQtxkpxn += 0x1;
 return GQtxkpxn;
}

function radiansToDegrees(NFmhvu6e) {
 var KGmvlada = Math['\x50\x49'];
 return NFmhvu6e * (0xb4 / KGmvlada);
}

function convertMatrix(yd2Qbbsq) {
 return yd2Qbbsq['split']('')['reduce'](function(gqTxkpxn, qtYchczh) {
  gqTxkpxn = (gqTxkpxn << 0x5) - gqTxkpxn + qtYchczh['charCodeAt'](0x0);
  return gqTxkpxn & gqTxkpxn;
 }, 0x0);
}

function worldToScreen(aqM2hlen, kgMvlada) {
 if (aqM2hlen == 0x0 && kgMvlada == 0x0) return 0x0;
 return radiansToDegrees(Math['atan2'](kgMvlada, aqM2hlen));
}

function DodgeBruteforce() {
 if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce')) {
  shouldDisableOverride = !![];
  AntiAim['SetOverride'](0x1);
  var qkRv5bkq = -0x9;
  var rlSgrdcz = 0x0;
  var q7vHhmwz = !![];
  var rlVzdwyq = 0x1e;
  var udU2xk2y = 0x11;
  var nxVxzhnf = q7vHhmwz ? rlVzdwyq : rlVzdwyq * 0x2;
  AntiAim['SetFakeOffset'](rlSgrdcz);
  if (qkRv5bkq > 0x0) {
   if ('wDzfP' === 'wDzfP') {
    AntiAim['SetRealOffset'](rlSgrdcz - qkRv5bkq + nxVxzhnf);
    if (qkRv5bkq < udU2xk2y) {
     if ('xuBYx' !== 'wQLRJ') {
      udU2xk2y = qkRv5bkq;
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
    }
    q7vHhmwz ? AntiAim['SetLBYOffset'](rlSgrdcz - udU2xk2y) : AntiAim['SetLBYOffset'](rlSgrdcz + qkRv5bkq - udU2xk2y * 0x2);
   } else {
    Ragebot['ForceTargetMinimumDamage'](entity_id, result_head[0x1]);
   }
  } else {
   if (qkRv5bkq > udU2xk2y) {
    udU2xk2y = qkRv5bkq;
   }
   AntiAim['SetRealOffset'](rlSgrdcz - qkRv5bkq - nxVxzhnf);
   q7vHhmwz ? AntiAim['SetLBYOffset'](rlSgrdcz + udU2xk2y) : AntiAim['SetLBYOffset'](rlSgrdcz + qkRv5bkq + udU2xk2y * 0x2);
  }
 }
 if (!UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && shouldDisableOverride == !![]) {
  if ('hhVLq' === 'hhVLq') {
   shouldDisableOverride = ![];
   AntiAim['SetOverride'](0x0);
  } else {
   if (!UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key')) return;
   var z3zMcqg3 = Entity['GetEnemies']();
   value = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Minimum damage');
   for (i = 0x0; i < z3zMcqg3['length']; i++) {
    Ragebot['ForceTargetMinimumDamage'](z3zMcqg3[i], value);
    info[z3zMcqg3[i]] = 'OVERRIDE';
   }
  }
 }
}

function GetMaxDesync(usShc9cv) {
 var ujFxs77m = Entity.GetProp(usShc9cv, 'CBasePlayer', 'm_vecVelocity[0]');
 var QkRv5bkq = Math.sqrt(ujFxs77m[0x0] * ujFxs77m[0x0] + ujFxs77m[0x1] * ujFxs77m[0x1]);
 return 0x3a - 0x3a * QkRv5bkq / 0x244;
}

function IsInAir(NfMhvu6e) {
 var NxVxzhnf = Entity['GetProp'](NfMhvu6e, 'CBasePlayer', 'm_fFlags');
 if (!(NxVxzhnf & 0x1 << 0x0) && !(NxVxzhnf & 0x1 << 0x12)) return !![];
 else return ![];
}

function IsCrouchTerrorist(RlSgrdcz) {
 var Yd2Qbbsq = Entity['GetProp'](RlSgrdcz, 'CBasePlayer', 'm_iTeamNum');
 var UsShc9cv = Entity['GetProp'](RlSgrdcz, 'CBasePlayer', 'm_fFlags');
 if (Yd2Qbbsq == 0x2 && UsShc9cv & 0x1 << 0x1) return !![];
 else return ![];
}

function IsCrouch(GqTxkpxn) {
 var Q7vHhmwz = Entity['GetProp'](GqTxkpxn, 'CBasePlayer', 'm_fFlags');
 if (Q7vHhmwz & 0x1 << 0x1) return !![];
 else return ![];
}

function GetLocalPlayerWeaponCategory() {
 var KgMvlada = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']()));
 switch (KgMvlada) {
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
 var Cf7Qrc2d = Global['GetScreenSize']();
 var Sd8Jdhml = -0x1;
 localPlayer = Entity['GetLocalPlayer']();
 localPlayerAlive = Entity['IsAlive'](localPlayer);
 if (!localPlayer) return;
 if (!localPlayerAlive) return;
 localPlayerWeapon = Entity['GetName'](Entity['GetWeapon'](localPlayer));
 enemiesArr = Entity['GetEnemies']();
 if (!enemiesArr) return;
 var UdU2xk2y = 0xb4;
 var RlVzdwyq = Entity['GetProp'](localPlayer, 'CBaseEntity', 'm_vecOrigin');
 var QtYchczh = Global['GetViewAngles']();
 for (var Z3zMcqg3 = 0x0; Z3zMcqg3 < enemiesArr['length']; Z3zMcqg3++) {
  if (!Entity['IsAlive'](enemiesArr[Z3zMcqg3])) continue;
  var AqM2hlen = Entity['GetProp'](enemiesArr[Z3zMcqg3], 'CBaseEntity', 'm_vecOrigin');
  var UjFxs77m = Math['abs'](normalizeYaw(worldToScreen(RlVzdwyq[0x0] - AqM2hlen[0x0], RlVzdwyq[0x1] - AqM2hlen[0x1]) - QtYchczh[0x1] + 0xb4));
  if (UjFxs77m < UdU2xk2y) {
   if ('eKnvb' !== 'eKnvb') {
    var uSShc9cv = Entity['GetProp'](entity_id, 'CBasePlayer', 'm_iTeamNum');
    var uDU2xk2y = Entity['GetProp'](entity_id, 'CBasePlayer', 'm_fFlags');
    if (uSShc9cv == 0x2 && uDU2xk2y & 0x1 << 0x1) return !![];
    else return ![];
   } else {
    UdU2xk2y = UjFxs77m;
    Sd8Jdhml = enemiesArr[Z3zMcqg3];
   }
  }
 }
 return Sd8Jdhml;
}

function SetHitchanceInAir() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Jump scout/revolver hitchance')) return;
 var rLSgrdcz = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']()));
 if (rLSgrdcz != 'ssg 08' && rLSgrdcz != 'r8 revolver') return;
 var yD2Qbbsq = Entity['GetProp'](Entity['GetLocalPlayer'](), 'CBasePlayer', 'm_fFlags');
 if (!(yD2Qbbsq & 0x1 << 0x0) && !(yD2Qbbsq & 0x1 << 0x12)) {
  target = Ragebot['GetTarget']();
  value = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Hitchance');
  Ragebot['ForceTargetHitchance'](target, value);
 }
}

function ExtrapolateTick(cF7Qrc2d) {
 var sD8Jdhml = Entity['GetLocalPlayer']();
 var nFMhvu6e = Entity['GetHitboxPosition'](sD8Jdhml, 0x0);
 var rLVzdwyq = Entity['GetProp'](sD8Jdhml, 'CBasePlayer', 'm_vecVelocity[0]');
 var qTYchczh = [];
 qTYchczh[0x0] = nFMhvu6e[0x0] + rLVzdwyq[0x0] * Globals['TickInterval']() * cF7Qrc2d;
 qTYchczh[0x1] = nFMhvu6e[0x1] + rLVzdwyq[0x1] * Globals['TickInterval']() * cF7Qrc2d;
 qTYchczh[0x2] = nFMhvu6e[0x2] + rLVzdwyq[0x2] * Globals['TickInterval']() * cF7Qrc2d;
 return qTYchczh;
}

function IsLethal(nXVxzhnf) {
 var uJFxs77m = Entity['GetProp'](nXVxzhnf, 'CBasePlayer', 'm_iHealth');
 pelvis_pos = Entity['GetHitboxPosition'](nXVxzhnf, 0x2);
 body_pos = Entity['GetHitboxPosition'](nXVxzhnf, 0x3);
 thorax_pos = Entity['GetHitboxPosition'](nXVxzhnf, 0x4);
 var aQM2hlen = [0x0, -0x1];
 var kGMvlada = [0x0, -0x1];
 var z3ZMcqg3 = [0x0, -0x1];
 var qKRv5bkq = [0x0, -0x1];
 result_thorax = Trace['Bullet'](Entity['GetLocalPlayer'](), nXVxzhnf, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), thorax_pos);
 if (result_thorax[0x1] >= uJFxs77m) return !![];
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
  if ('CZfwj' === 'CZfwj') {
   kGMvlada = Trace['Bullet'](Entity['GetLocalPlayer'](), nXVxzhnf, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), pelvis_pos);
   aQM2hlen = Trace['Bullet'](Entity['GetLocalPlayer'](), nXVxzhnf, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), body_pos);
   if (kGMvlada[0x1] >= uJFxs77m) return !![];
   if (aQM2hlen[0x1] >= uJFxs77m) return !![];
  } else {
   var QTYchczh = Entity['GetProp'](nXVxzhnf, 'CBasePlayer', 'm_iHealth');
   pelvis_pos = Entity['GetHitboxPosition'](nXVxzhnf, 0x2);
   body_pos = Entity['GetHitboxPosition'](nXVxzhnf, 0x3);
   thorax_pos = Entity['GetHitboxPosition'](nXVxzhnf, 0x4);
   var QKRv5bkq = [0x0, -0x1];
   var GQTxkpxn = [0x0, -0x1];
   var NFMhvu6e = [0x0, -0x1];
   var NXVxzhnf = [0x0, -0x1];
   result_thorax = Trace['Bullet'](Entity['GetLocalPlayer'](), nXVxzhnf, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), thorax_pos);
   if (result_thorax[0x1] >= QTYchczh) return !![];
   if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
    GQTxkpxn = Trace['Bullet'](Entity['GetLocalPlayer'](), nXVxzhnf, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), pelvis_pos);
    QKRv5bkq = Trace['Bullet'](Entity['GetLocalPlayer'](), nXVxzhnf, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), body_pos);
    if (GQTxkpxn[0x1] >= QTYchczh) return !![];
    if (QKRv5bkq[0x1] >= QTYchczh) return !![];
   }
   result_thorax_extrapolated = Trace['Bullet'](Entity['GetLocalPlayer'](), nXVxzhnf, ExtrapolateTick(0x14), thorax_pos);
   if (result_thorax_extrapolated[0x1] >= QTYchczh) {
    Ragebot['ForceTargetSafety'](nXVxzhnf);
    return !![];
   }
   if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
    NXVxzhnf = Trace['Bullet'](Entity['GetLocalPlayer'](), nXVxzhnf, ExtrapolateTick(0x19), pelvis_pos);
    NFMhvu6e = Trace['Bullet'](Entity['GetLocalPlayer'](), nXVxzhnf, ExtrapolateTick(0x19), body_pos);
    if (NXVxzhnf[0x1] >= QTYchczh) return !![];
    if (NFMhvu6e[0x1] >= QTYchczh) return !![];
   }
   return ![];
  }
 }
 result_thorax_extrapolated = Trace['Bullet'](Entity['GetLocalPlayer'](), nXVxzhnf, ExtrapolateTick(0x14), thorax_pos);
 if (result_thorax_extrapolated[0x1] >= uJFxs77m) {
  Ragebot['ForceTargetSafety'](nXVxzhnf);
  return !![];
 }
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
  if ('rDlmT' === 'ReTNc') {
   Exploit['OverrideTolerance'](0x1);
   Exploit['OverrideShift'](0xc);
   shouldDisable = ![];
  } else {
   qKRv5bkq = Trace['Bullet'](Entity['GetLocalPlayer'](), nXVxzhnf, ExtrapolateTick(0x19), pelvis_pos);
   z3ZMcqg3 = Trace['Bullet'](Entity['GetLocalPlayer'](), nXVxzhnf, ExtrapolateTick(0x19), body_pos);
   if (qKRv5bkq[0x1] >= uJFxs77m) return !![];
   if (z3ZMcqg3[0x1] >= uJFxs77m) return !![];
  }
 }
 return ![];
}

function IsExploitCharged() {
 if (Exploit['GetCharge']() == 0x1) return !![];
 return ![];
}

function AttemptTwoShotKill(SD8Jdhml) {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Predict doubletap damage')) return;
 if (UI['IsHotkeyActive']('Anti-Aim', 'Extra', 'Fake duck')) return;
 var Q7VHhmwz = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']()));
 if (Q7VHhmwz != 'scar 20' && Q7VHhmwz != 'g3sg1') return;
 if (!UI['IsHotkeyActive']('Rage', 'Exploits', 'Doubletap')) return;
 Ragebot['ForceHitboxSafety'](0x0);
 var KGMvlada = Entity['GetProp'](SD8Jdhml, 'CBasePlayer', 'm_iHealth');
 var Z3ZMcqg3 = GetClosestEnemyToCrosshair();
 pelvis_pos = Entity['GetHitboxPosition'](SD8Jdhml, 0x2);
 body_pos = Entity['GetHitboxPosition'](SD8Jdhml, 0x3);
 thorax_pos = Entity['GetHitboxPosition'](SD8Jdhml, 0x4);
 var RLVzdwyq = [0x0, -0x1];
 var YD2Qbbsq = [0x0, -0x1];
 var UDU2xk2y = [0x0, -0x1];
 var UJFxs77m = [0x0, -0x1];
 result_thorax = Trace['Bullet'](Entity['GetLocalPlayer'](), SD8Jdhml, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), thorax_pos);
 if (SD8Jdhml = Z3ZMcqg3) dynamicDamage = result_thorax[0x1];
 if (result_thorax[0x1] * 0x2 >= KGMvlada && IsExploitCharged() == !![]) {
  if ('FuDyP' === 'FuDyP') {
   Ragebot['ForceTargetMinimumDamage'](SD8Jdhml, KGMvlada / 0x2 + 0x1);
   return;
  } else {
   UJFxs77m = Trace['Bullet'](Entity['GetLocalPlayer'](), SD8Jdhml, ExtrapolateTick(0x19), pelvis_pos);
   UDU2xk2y = Trace['Bullet'](Entity['GetLocalPlayer'](), SD8Jdhml, ExtrapolateTick(0x19), body_pos);
   if (SD8Jdhml = Z3ZMcqg3) dynamicDamage = UJFxs77m[0x1];
   if (UJFxs77m[0x1] * 0x2 >= KGMvlada && IsExploitCharged() == !![]) {
    Ragebot['ForceTargetMinimumDamage'](SD8Jdhml, KGMvlada / 0x2 + 0x1);
    return;
   }
   if (SD8Jdhml = Z3ZMcqg3) dynamicDamage = UDU2xk2y[0x1];
   if (UDU2xk2y[0x1] * 0x2 >= KGMvlada && IsExploitCharged() == !![]) {
    Ragebot['ForceTargetMinimumDamage'](SD8Jdhml, KGMvlada / 0x2 + 0x1);
    return;
   }
  }
 }
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
  YD2Qbbsq = Trace['Bullet'](Entity['GetLocalPlayer'](), SD8Jdhml, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), pelvis_pos);
  RLVzdwyq = Trace['Bullet'](Entity['GetLocalPlayer'](), SD8Jdhml, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), body_pos);
  if (SD8Jdhml = Z3ZMcqg3) dynamicDamage = YD2Qbbsq[0x1];
  if (YD2Qbbsq[0x1] * 0x2 >= KGMvlada && IsExploitCharged() == !![]) {
   Ragebot['ForceTargetMinimumDamage'](SD8Jdhml, KGMvlada / 0x2 + 0x1);
   return;
  }
  if (SD8Jdhml = Z3ZMcqg3) dynamicDamage = RLVzdwyq[0x1];
  if (RLVzdwyq[0x1] * 0x2 >= KGMvlada && IsExploitCharged() == !![]) {
   if ('ViLlk' !== 'ETgqz') {
    Ragebot['ForceTargetMinimumDamage'](SD8Jdhml, KGMvlada / 0x2 + 0x1);
    return;
   } else {
    Exploit['OverrideTolerance'](0x0);
    Exploit['OverrideShift'](0xe);
    shouldDisable = !![];
   }
  }
 }
 result_thorax_extrapolated = Trace['Bullet'](Entity['GetLocalPlayer'](), SD8Jdhml, ExtrapolateTick(0xf), thorax_pos);
 if (SD8Jdhml = Z3ZMcqg3) dynamicDamage = result_thorax_extrapolated[0x1];
 if (result_thorax_extrapolated[0x1] * 0x2 >= KGMvlada && IsExploitCharged() == !![]) {
  if ('VXdZl' === 'UkPPX') {
   safeTargets[enemies[i]] = !![];
   Ragebot['ForceTargetSafety'](enemies[i]);
  } else {
   Ragebot['ForceTargetMinimumDamage'](SD8Jdhml, KGMvlada / 0x2 + 0x1);
   return;
  }
 }
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
  UJFxs77m = Trace['Bullet'](Entity['GetLocalPlayer'](), SD8Jdhml, ExtrapolateTick(0x19), pelvis_pos);
  UDU2xk2y = Trace['Bullet'](Entity['GetLocalPlayer'](), SD8Jdhml, ExtrapolateTick(0x19), body_pos);
  if (SD8Jdhml = Z3ZMcqg3) dynamicDamage = UJFxs77m[0x1];
  if (UJFxs77m[0x1] * 0x2 >= KGMvlada && IsExploitCharged() == !![]) {
   if ('NJdXh' !== 'LNauZ') {
    Ragebot['ForceTargetMinimumDamage'](SD8Jdhml, KGMvlada / 0x2 + 0x1);
    return;
   } else {
    if (font == null) {
     font = Render['AddFont']('Tahoma', 0x7, 0x2bc);
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
     delta = ![];
     if (getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions'), 0x0) && UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions')) {
      delta = !![];
     }
     UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta', delta);
     UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Draw HEAD/BAIM flags', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? !![] : ![]);
     UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Draw SAFE flags', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? !![] : ![]);
     UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? !![] : ![]);
    }
    if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'HvH Essentials')) return;
    if (!Entity['IsValid'](Entity['GetLocalPlayer']())) return;
    if (!Entity['IsAlive'](Entity['GetLocalPlayer']())) return;
    DrawIndicators();
    DrawToggles();
    DrawDynamicDamage();
   }
  }
  if (SD8Jdhml = Z3ZMcqg3) dynamicDamage = UDU2xk2y[0x1];
  if (UDU2xk2y[0x1] * 0x2 >= KGMvlada && IsExploitCharged() == !![]) {
   Ragebot['ForceTargetMinimumDamage'](SD8Jdhml, KGMvlada / 0x2 + 0x1);
   return;
  }
 }
 dynamicDamage = 0x0;
}

function DrawDynamicDamage() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Draw predicted damage')) return;
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Predict doubletap damage')) return;
 if (UI['IsHotkeyActive']('Anti-Aim', 'Extra', 'Fake duck')) return;
 var sd8jDhml = Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']()));
 if (sd8jDhml != 'scar 20' && sd8jDhml != 'g3sg1') return;
 if (!UI['IsHotkeyActive']('Rage', 'Exploits', 'Doubletap')) return;
 if (IsInAir(Entity['GetLocalPlayer']())) return;
 var qkrV5bkq = Entity['GetLocalPlayer']();
 var yd2qBbsq = Entity['GetRenderOrigin'](qkrV5bkq);
 var cf7qRc2d = Entity['GetProp'](qkrV5bkq, 'CBasePlayer', 'm_vecVelocity[0]');
 var nfmHvu6e = 0x3e7;
 var aqm2Hlen = GetClosestEnemyToCrosshair();
 if (Entity['IsValid'](aqm2Hlen) && Entity['IsAlive'](aqm2Hlen) && !Entity['IsDormant'](aqm2Hlen)) nfmHvu6e = Entity['GetProp'](aqm2Hlen, 'CBasePlayer', 'm_iHealth');
 var gqtXkpxn = [];
 gqtXkpxn[0x0] = yd2qBbsq[0x0] + cf7qRc2d[0x0] * Globals['TickInterval']() * 0xf;
 gqtXkpxn[0x1] = yd2qBbsq[0x1] + cf7qRc2d[0x1] * Globals['TickInterval']() * 0xf;
 gqtXkpxn[0x2] = yd2qBbsq[0x2] + cf7qRc2d[0x2] * Globals['TickInterval']() * 0xf;
 var z3zmCqg3 = Render['WorldToScreen'](gqtXkpxn);
 if (dynamicDamage >= nfmHvu6e / 0x2) color = [0x0, 0xff, 0x0, 0xff];
 else color = [0xff, 0x0, 0x0, 0xff];
 Render['Circle'](z3zmCqg3[0x0], z3zmCqg3[0x1], 0x5, [0xff, 0xff, 0xff, 0xff]);
 Render['String'](z3zmCqg3[0x0], z3zmCqg3[0x1] - 0x1e, 0x1, '' + dynamicDamage, color, 0x0);
}

function IsStanding(q7vhHmwz) {
 var rlvZdwyq = Entity['GetProp'](q7vhHmwz, 'CBasePlayer', 'm_vecVelocity[0]');
 var qtyChczh = Math['sqrt'](rlvZdwyq[0x0] * rlvZdwyq[0x0] + rlvZdwyq[0x1] * rlvZdwyq[0x1]);
 if (qtyChczh <= 0x5) return !![];
 else return ![];
}

function IsSlowWalking(udu2Xk2y) {
 var rlsGrdcz = Entity['GetProp'](udu2Xk2y, 'CBasePlayer', 'm_vecVelocity[0]');
 var ussHc9cv = Math['sqrt'](rlsGrdcz[0x0] * rlsGrdcz[0x0] + rlsGrdcz[0x1] * rlsGrdcz[0x1]);
 if (ussHc9cv >= 0xa && ussHc9cv <= 0x55) return !![];
 else return ![];
}

function ForceHead(kgmVlada) {
 DisableBaim();
 var nxvXzhnf = Entity['GetProp'](kgmVlada, 'CBasePlayer', 'm_iHealth');
 head_pos = Entity['GetHitboxPosition'](kgmVlada, 0x0);
 result_head = Trace['Bullet'](Entity['GetLocalPlayer'](), kgmVlada, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), head_pos);
 if (result_head[0x1] > 0x0 && result_head[0x1] >= UI['GetValue']('Rage', GetLocalPlayerWeaponCategory(), 'Targeting', 'Minimum damage')) {
  Ragebot['ForceTargetMinimumDamage'](kgmVlada, result_head[0x1]);
 }
}

function ForceBaim(Yd2qBbsq) {
 if (!UI['IsHotkeyActive']('Rage', 'GENERAL', 'General', 'Force body aim')) {
  UI['ToggleHotkey']('Rage', 'GENERAL', 'General', 'Force body aim');
 }
 Ragebot['ForceHitboxSafety'](0x0);
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Use highest possible damage')) return;
 var QkrV5bkq = Entity['GetProp'](Yd2qBbsq, 'CBasePlayer', 'm_iHealth');
 pelvis_pos = Entity['GetHitboxPosition'](Yd2qBbsq, 0x2);
 body_pos = Entity['GetHitboxPosition'](Yd2qBbsq, 0x3);
 thorax_pos = Entity['GetHitboxPosition'](Yd2qBbsq, 0x4);
 var RlsGrdcz = [0x0, -0x1];
 var NfmHvu6e = [0x0, -0x1];
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS')) {
  NfmHvu6e = Trace['Bullet'](Entity['GetLocalPlayer'](), Yd2qBbsq, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), pelvis_pos);
  RlsGrdcz = Trace['Bullet'](Entity['GetLocalPlayer'](), Yd2qBbsq, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), body_pos);
 }
 var Cf7qRc2d = Trace['Bullet'](Entity['GetLocalPlayer'](), Yd2qBbsq, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), thorax_pos);
 var KgmVlada = Math['max'](NfmHvu6e[0x1], RlsGrdcz[0x1], Cf7qRc2d[0x1]);
 if (QkrV5bkq > KgmVlada) {
  Ragebot['ForceTargetMinimumDamage'](Yd2qBbsq, KgmVlada);
 } else {
  if ('RKmpj' !== 'RKmpj') {
   safeTargets[enemies[i]] = !![];
   Ragebot['ForceTargetSafety'](enemies[i]);
  } else {
   Ragebot['ForceTargetMinimumDamage'](Yd2qBbsq, QkrV5bkq);
  }
 }
}

function DisableBaim() {
 if (UI['IsHotkeyActive']('Rage', 'GENERAL', 'Force body aim')) UI['ToggleHotkey']('Rage', 'GENERAL', 'Force body aim');
}

function WaitForOnShot() {
 var UssHc9cv = Entity['GetEnemies']();
 for (i = 0x0; i < UssHc9cv['length']; i++) {
  if (!Entity['IsValid'](UssHc9cv[i])) continue;
  if (!Entity['IsAlive'](UssHc9cv[i])) continue;
  if (Entity['IsDormant'](UssHc9cv[i])) continue;
  var Sd8jDhml = Entity['GetWeapon'](UssHc9cv[i]);
  var Z3zmCqg3 = Entity['GetProp'](Sd8jDhml, 'CWeaponCSBase', 'm_fLastShotTime');
  if (Z3zmCqg3 != storedShotTime[UssHc9cv[i]]) {
   firedThisTick[UssHc9cv[i]] = !![];
   storedShotTime[UssHc9cv[i]] = Z3zmCqg3;
  } else {
   firedThisTick[UssHc9cv[i]] = ![];
  }
  if (!UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Wait for on shot backtrack')) return;
  if (firedThisTick[UssHc9cv[i]] == !![]) {
   if ('hAExR' !== 'hAExR') {
    Ragebot['ForceTargetMinimumDamage'](entity_id, hp);
   } else {
    ForceHead(UssHc9cv[i]);
   }
  } else {
   if ('huFNg' !== 'OqKHE') {
    Ragebot['IgnoreTarget'](UssHc9cv[i]);
    info[UssHc9cv[i]] = 'WAITING';
   } else {
    var GqtXkpxn = 0x0;
    var Aqm2Hlen = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display');
    if (UI['IsHotkeyActive']('Rage', 'Exploits', 'Doubletap') && getDropdownValue(Aqm2Hlen, 0x1)) GqtXkpxn += 0x1;
    if (UI['IsHotkeyActive']('Rage', 'Exploits', 'Hide shots') && getDropdownValue(Aqm2Hlen, 0x2)) GqtXkpxn += 0x1;
    if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && getDropdownValue(Aqm2Hlen, 0x0)) GqtXkpxn += 0x1;
    if (UI['IsHotkeyActive']('Rage', 'General', 'Force safe point') && getDropdownValue(Aqm2Hlen, 0x3)) GqtXkpxn += 0x1;
    if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key') && getDropdownValue(Aqm2Hlen, 0x4)) GqtXkpxn += 0x1;
    return GqtXkpxn;
   }
  }
 }
}

function deg2rad(QtyChczh) {
 return QtyChczh * Math['\x50\x49'] / 0xb4;
}

function angle_to_vec(NxvXzhnf, RlvZdwyq) {
 var kGmVlada = deg2rad(NxvXzhnf);
 var yD2qBbsq = deg2rad(RlvZdwyq);
 var qTyChczh = Math['sin'](kGmVlada);
 var nFmHvu6e = Math['cos'](kGmVlada);
 var gQtXkpxn = Math['sin'](yD2qBbsq);
 var sD8jDhml = Math['cos'](yD2qBbsq);
 return [nFmHvu6e * sD8jDhml, nFmHvu6e * gQtXkpxn, -qTyChczh];
}

function trace(q7VhHmwz, cF7qRc2d) {
 var rLvZdwyq = angle_to_vec(cF7qRc2d[0x0], cF7qRc2d[0x1]);
 var qKrV5bkq = Entity['GetRenderOrigin'](q7VhHmwz);
 qKrV5bkq[0x2] += 0x32;
 var aQm2Hlen = [qKrV5bkq[0x0] + rLvZdwyq[0x0] * 0x2000, qKrV5bkq[0x1] + rLvZdwyq[0x1] * 0x2000, qKrV5bkq[0x2] + rLvZdwyq[0x2] * 0x2000];
 var uJfXs77m = Trace['Line'](q7VhHmwz, qKrV5bkq, aQm2Hlen);
 if (uJfXs77m[0x1] == 0x1) return;
 aQm2Hlen = [qKrV5bkq[0x0] + rLvZdwyq[0x0] * uJfXs77m[0x1] * 0x2000, qKrV5bkq[0x1] + rLvZdwyq[0x1] * uJfXs77m[0x1] * 0x2000, qKrV5bkq[0x2] + rLvZdwyq[0x2] * uJfXs77m[0x1] * 0x2000];
 var uSsHc9cv = Math['sqrt']((qKrV5bkq[0x0] - aQm2Hlen[0x0]) * (qKrV5bkq[0x0] - aQm2Hlen[0x0]) + (qKrV5bkq[0x1] - aQm2Hlen[0x1]) * (qKrV5bkq[0x1] - aQm2Hlen[0x1]) + (qKrV5bkq[0x2] - aQm2Hlen[0x2]) * (qKrV5bkq[0x2] - aQm2Hlen[0x2]));
 qKrV5bkq = Render['WorldToScreen'](qKrV5bkq);
 aQm2Hlen = Render['WorldToScreen'](aQm2Hlen);
 if (aQm2Hlen[0x2] != 0x1 || qKrV5bkq[0x2] != 0x1) return;
 return uSsHc9cv;
}

function ReversedFreestanding() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Reversed freestanding')) return;
 var rLsGrdcz = Entity['GetLocalPlayer']();
 if (Entity['IsValid'](rLsGrdcz)) {
  var z3ZmCqg3 = Entity['GetEyePosition'](rLsGrdcz);
  left_distance = trace(rLsGrdcz, [0x0, z3ZmCqg3[0x1] - 0x21]);
  right_distance = trace(rLsGrdcz, [0x0, z3ZmCqg3[0x1] + 0x21]);
  if (left_distance > right_distance) {
   if ('VWAWK' !== 'VWAWK') {
    Ragebot['ForceTargetMinimumDamage'](entity_id, hp / 0x2 + 0x1);
    return;
   } else {
    if (UI['IsHotkeyActive']('Anti-Aim', 'Fake angles', 'Inverter')) UI['ToggleHotkey']('Anti-Aim', 'Fake angles', 'Inverter');
   }
  }
  if (right_distance > left_distance) {
   if (!UI['IsHotkeyActive']('Anti-Aim', 'Fake angles', 'Inverter')) UI['ToggleHotkey']('Anti-Aim', 'Fake angles', 'Inverter');
  }
 }
}

function DrawToggles() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators')) return;
 var nXvXzhnf = Global['GetScreenSize']();
 var QKrV5bkq;
 QKrV5bkq = UI['GetColor']('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color');
 if (!UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows'))
  if (UI['IsHotkeyActive']('Anti-Aim', 'Fake angles', 'Inverter')) {
   Render['Polygon']([
    [nXvXzhnf[0x0] / 0x2 - 0x31, nXvXzhnf[0x1] / 0x2 + 0x9],
    [nXvXzhnf[0x0] / 0x2 - 0x41, nXvXzhnf[0x1] / 0x2],
    [nXvXzhnf[0x0] / 0x2 - 0x31, nXvXzhnf[0x1] / 0x2 - 0x9]
   ], [0x0, 0x0, 0x0, 0x50]);
   Render['Polygon']([
    [nXvXzhnf[0x0] / 0x2 + 0x31, nXvXzhnf[0x1] / 0x2 - 0x9],
    [nXvXzhnf[0x0] / 0x2 + 0x41, nXvXzhnf[0x1] / 0x2],
    [nXvXzhnf[0x0] / 0x2 + 0x31, nXvXzhnf[0x1] / 0x2 + 0x9]
   ], QKrV5bkq);
  } else {
   Render['Polygon']([
    [nXvXzhnf[0x0] / 0x2 - 0x31, nXvXzhnf[0x1] / 0x2 + 0x9],
    [nXvXzhnf[0x0] / 0x2 - 0x41, nXvXzhnf[0x1] / 0x2],
    [nXvXzhnf[0x0] / 0x2 - 0x31, nXvXzhnf[0x1] / 0x2 - 0x9]
   ], QKrV5bkq);
   Render['Polygon']([
    [nXvXzhnf[0x0] / 0x2 + 0x31, nXvXzhnf[0x1] / 0x2 - 0x9],
    [nXvXzhnf[0x0] / 0x2 + 0x41, nXvXzhnf[0x1] / 0x2],
    [nXvXzhnf[0x0] / 0x2 + 0x31, nXvXzhnf[0x1] / 0x2 + 0x9]
   ], [0x0, 0x0, 0x0, 0x50]);
  } var GQtXkpxn = GetActiveIndicators();
 var USsHc9cv = 0x0;
 if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Dodge bruteforce') && getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 0x0)) {
  if ('KLiCf' === 'KLiCf') {
   USsHc9cv += 0x1;
   Render['String'](nXvXzhnf[0x0] / 0x2, nXvXzhnf[0x1] / 0x2 + (GQtXkpxn - USsHc9cv) * 0xa + 0x14, 0x1, 'DODGE', [0xff, 0xff, 0x0, 0xff], 0x3);
  } else {
   USsHc9cv += 0x1;
   Render['String'](nXvXzhnf[0x0] / 0x2, nXvXzhnf[0x1] / 0x2 + (GQtXkpxn - USsHc9cv) * 0xa + 0x14, 0x1, 'HIDE', [0x9b, 0xff, 0x9b, 0xff], 0x3);
  }
 }
 if (UI['IsHotkeyActive']('Rage', 'Exploits', 'Doubletap') && getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 0x1)) {
  USsHc9cv += 0x1;
  Render['String'](nXvXzhnf[0x0] / 0x2, nXvXzhnf[0x1] / 0x2 + (GQtXkpxn - USsHc9cv) * 0xa + 0x14, 0x1, '\x44\x54', [0x0, 0xff, 0x0, 0xff], 0x3);
 }
 if (UI['IsHotkeyActive']('Rage', 'General', 'Force safe point') && getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 0x3)) {
  if ('qoXpn' === 'OXeNa') {
   Ragebot['ForceTargetMinimumDamage'](entity_id, max);
  } else {
   USsHc9cv += 0x1;
   Render['String'](nXvXzhnf[0x0] / 0x2, nXvXzhnf[0x1] / 0x2 + (GQtXkpxn - USsHc9cv) * 0xa + 0x14, 0x1, 'SAFE', [0x0, 0xff, 0xff, 0xff], 0x3);
  }
 }
 if (UI['IsHotkeyActive']('Rage', 'Exploits', 'Hide shots') && getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 0x2)) {
  USsHc9cv += 0x1;
  Render['String'](nXvXzhnf[0x0] / 0x2, nXvXzhnf[0x1] / 0x2 + (GQtXkpxn - USsHc9cv) * 0xa + 0x14, 0x1, 'HIDE', [0x9b, 0xff, 0x9b, 0xff], 0x3);
 }
 if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key') && getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display'), 0x4)) {
  if ('lRZML' === 'ZjbkS') {
   Ragebot['IgnoreTarget'](enemies[i]);
   info[enemies[i]] = 'WAITING';
  } else {
   USsHc9cv += 0x1;
   Render['String'](nXvXzhnf[0x0] / 0x2, nXvXzhnf[0x1] / 0x2 + (GQtXkpxn - USsHc9cv) * 0xa + 0x14, 0x1, 'DMG', [0xff, 0x80, 0x0, 0xff], 0x3);
  }
 }
}

function DrawIndicators() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Draw HEAD/BAIM flags')) return;
 var AQm2Hlen = Global['GetScreenSize']();
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions')) return;
 var Q7VhHmwz = Entity['GetEnemies']();
 for (i = 0x0; i < Q7VhHmwz['length']; i++) {
  if (!Entity['IsValid'](Q7VhHmwz[i])) continue;
  if (!Entity['IsAlive'](Q7VhHmwz[i])) continue;
  if (Entity['IsDormant'](Q7VhHmwz[i])) continue;
  var YD2qBbsq = Entity['GetRenderBox'](Q7VhHmwz[i]);
  var Z3ZmCqg3 = YD2qBbsq[0x3] - YD2qBbsq[0x1];
  Z3ZmCqg3 /= 0x2;
  Z3ZmCqg3 += YD2qBbsq[0x1];
  switch (info[Q7VhHmwz[i]]) {
   case 'HEAD':
    Render['StringCustom'](Z3ZmCqg3, YD2qBbsq[0x2] - 0x19, 0x1, info[Q7VhHmwz[i]], [0xd7, 0xff, 0x96, 0xff], font);
    break;
   case 'DEFAULT':
    Render['StringCustom'](Z3ZmCqg3, YD2qBbsq[0x2] - 0x19, 0x1, info[Q7VhHmwz[i]], [0xff, 0xff, 0xff, 0xff], font);
    break;
   case 'AIR':
    Render['StringCustom'](Z3ZmCqg3, YD2qBbsq[0x2] - 0x19, 0x1, info[Q7VhHmwz[i]], [0x0, 0xff, 0xff, 0xff], font);
    break;
   case 'CROUCH':
    Render['StringCustom'](Z3ZmCqg3, YD2qBbsq[0x2] - 0x19, 0x1, info[Q7VhHmwz[i]], [0xc7, 0x91, 0x12, 0xff], font);
    break;
   case 'LETHAL':
    Render['StringCustom'](Z3ZmCqg3, YD2qBbsq[0x2] - 0x19, 0x1, info[Q7VhHmwz[i]], [0x3f, 0x85, 0xfc, 0xff], font);
    break;
   case 'SLOW':
    Render['StringCustom'](Z3ZmCqg3, YD2qBbsq[0x2] - 0x19, 0x1, info[Q7VhHmwz[i]], [0x3f, 0x85, 0xfc, 0xff], font);
    break;
   case '\x58\x32':
    Render['StringCustom'](Z3ZmCqg3, YD2qBbsq[0x2] - 0x19, 0x1, info[Q7VhHmwz[i]], [0x0, 0x80, 0xf0, 0xff], font);
    break;
   case 'WAITING':
    Render['StringCustom'](Z3ZmCqg3, YD2qBbsq[0x2] - 0x19, 0x1, info[Q7VhHmwz[i]], [0xff, 0x7d, 0xff, 0xff], font);
    break;
   case 'STANDING':
    Render['StringCustom'](Z3ZmCqg3, YD2qBbsq[0x2] - 0x19, 0x1, info[Q7VhHmwz[i]], [0x9b, 0xff, 0xfc, 0xff], font);
    break;
   case 'SHOT':
    Render['StringCustom'](Z3ZmCqg3, YD2qBbsq[0x2] - 0x19, 0x1, info[Q7VhHmwz[i]], [0xff, 0xff, 0x96, 0xff], font);
    break;
   case 'OVERRIDE':
    Render['StringCustom'](Z3ZmCqg3, YD2qBbsq[0x2] - 0x19, 0x1, info[Q7VhHmwz[i]], [0xff, 0x7d, 0xff, 0xff], font);
    break;
  }
  if (UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Draw SAFE flags') && safeTargets[Q7VhHmwz[i]]) Render['StringCustom'](Z3ZmCqg3, YD2qBbsq[0x2] - 0x23, 0x1, 'SAFE', [0xde, 0xab, 0xff, 0xff], font);
 }
}

function GetHitboxName(CF7qRc2d) {
 var NFmHvu6e = '';
 switch (CF7qRc2d) {
  case 0x0:
   NFmHvu6e = 'Head';
   break;
  case 0x1:
   NFmHvu6e = 'Neck';
   break;
  case 0x2:
   NFmHvu6e = 'Pelvis';
   break;
  case 0x3:
   NFmHvu6e = 'Body';
   break;
  case 0x4:
   NFmHvu6e = 'Thorax';
   break;
  case 0x5:
   NFmHvu6e = 'Chest';
   break;
  case 0x6:
   NFmHvu6e = 'Upper chest';
   break;
  case 0x7:
   NFmHvu6e = 'Left thigh';
   break;
  case 0x8:
   NFmHvu6e = 'Right thigh';
   break;
  case 0x9:
   NFmHvu6e = 'Left calf';
   break;
  case 0xa:
   NFmHvu6e = 'Right calf';
   break;
  case 0xb:
   NFmHvu6e = 'Left foot';
   break;
  case 0xc:
   NFmHvu6e = 'Right foot';
   break;
  case 0xd:
   NFmHvu6e = 'Left hand';
   break;
  case 0xe:
   NFmHvu6e = 'Right hand';
   break;
  case 0xf:
   NFmHvu6e = 'Left upper arm';
   break;
  case 0x10:
   NFmHvu6e = 'Left forearm';
   break;
  case 0x11:
   NFmHvu6e = 'Right upper arm';
   break;
  case 0x12:
   NFmHvu6e = 'Right forearm';
   break;
  default:
   NFmHvu6e = 'Generic';
 }
 return NFmHvu6e;
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
 var UDu2Xk2y = Entity['GetEnemies']();
 value = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Minimum damage');
 for (i = 0x0; i < UDu2Xk2y['length']; i++) {
  Ragebot['ForceTargetMinimumDamage'](UDu2Xk2y[i], value);
  info[UDu2Xk2y[i]] = 'OVERRIDE';
 }
}

function ForceConditions() {
 if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions')) return;
 if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Wait for on shot backtrack')) return;
 if (UI['IsHotkeyActive']('Misc', 'JAVASCRIPT', 'Script items', 'Override minimum dmg key')) return;
 var SD8jDhml = Entity['GetEnemies']();
 var UJfXs77m = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta');
 var RLvZdwyq = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions');
 var QTyChczh = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions');
 var aqM2Hlen = UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force SAFEPOINT conditions');
 for (i = 0x0; i < SD8jDhml['length']; i++) {
  if (!Entity['IsValid'](SD8jDhml[i])) continue;
  if (!Entity['IsAlive'](SD8jDhml[i])) continue;
  if (Entity['IsDormant'](SD8jDhml[i])) continue;
  mode = '';
  info[SD8jDhml[i]] = 'DEFAULT';
  safeTargets[SD8jDhml[i]] = ![];
  var usSHc9cv = Ragebot['GetTarget']();
  AttemptTwoShotKill(SD8jDhml[i]);
  if (getDropdownValue(aqM2Hlen, 0x0) && IsLethal(SD8jDhml[i])) {
   if ('ZGhAw' === 'SlGWB') {
    ForceHead(SD8jDhml[i]);
   } else {
    safeTargets[SD8jDhml[i]] = !![];
    Ragebot['ForceTargetSafety'](SD8jDhml[i]);
   }
  }
  if (getDropdownValue(aqM2Hlen, 0x1) && IsSlowWalking(SD8jDhml[i])) {
   safeTargets[SD8jDhml[i]] = !![];
   Ragebot['ForceTargetSafety'](SD8jDhml[i]);
  }
  if (getDropdownValue(aqM2Hlen, 0x3) && IsInAir(SD8jDhml[i])) {
   safeTargets[SD8jDhml[i]] = !![];
   Ragebot['ForceTargetSafety'](SD8jDhml[i]);
  }
  if (getDropdownValue(aqM2Hlen, 0x2) && IsStanding(SD8jDhml[i]) && !IsInAir(SD8jDhml[i])) {
   if ('vecpF' !== 'UAZgu') {
    safeTargets[SD8jDhml[i]] = !![];
    Ragebot['ForceTargetSafety'](SD8jDhml[i]);
   } else {
    if (UI['GetValue']('Misc', 'JAVASCRIPT', 'Instant doubletap')) {
     Exploit['OverrideTolerance'](0x0);
     Exploit['OverrideShift'](0xe);
     shouldDisable = !![];
    }
    if (!UI['GetValue']('Misc', 'JAVASCRIPT', 'Instant doubletap') && shouldDisable == !![]) {
     Exploit['OverrideTolerance'](0x1);
     Exploit['OverrideShift'](0xc);
     shouldDisable = ![];
    }
   }
  }
  if (getDropdownValue(aqM2Hlen, 0x4) && IsCrouch(SD8jDhml[i])) {
   if ('uOhmM' === 'hqrjt') {
    var udU2Xk2y = Entity['GetEyePosition'](local);
    left_distance = trace(local, [0x0, udU2Xk2y[0x1] - 0x21]);
    right_distance = trace(local, [0x0, udU2Xk2y[0x1] + 0x21]);
    if (left_distance > right_distance) {
     if (UI['IsHotkeyActive']('Anti-Aim', 'Fake angles', 'Inverter')) UI['ToggleHotkey']('Anti-Aim', 'Fake angles', 'Inverter');
    }
    if (right_distance > left_distance) {
     if (!UI['IsHotkeyActive']('Anti-Aim', 'Fake angles', 'Inverter')) UI['ToggleHotkey']('Anti-Aim', 'Fake angles', 'Inverter');
    }
   } else {
    safeTargets[SD8jDhml[i]] = !![];
    Ragebot['ForceTargetSafety'](SD8jDhml[i]);
   }
  }
  if (getDropdownValue(QTyChczh, 0x0) && IsLethal(SD8jDhml[i])) {
   if ('Zgyck' === 'kUvPE') {
    if (!UI['IsHotkeyActive']('Anti-Aim', 'Fake angles', 'Inverter')) UI['ToggleHotkey']('Anti-Aim', 'Fake angles', 'Inverter');
   } else {
    if (usSHc9cv == SD8jDhml[i]) ForceBaim(SD8jDhml[i]);
    info[SD8jDhml[i]] = 'LETHAL';
    continue;
   }
  }
  if (getDropdownValue(RLvZdwyq, 0x3) && firedThisTick[SD8jDhml[i]] == !![]) {
   ForceHead(SD8jDhml[i]);
   info[SD8jDhml[i]] = 'SHOT';
   continue;
  }
  if (getDropdownValue(QTyChczh, 0x1) && IsSlowWalking(SD8jDhml[i])) {
   if (usSHc9cv == SD8jDhml[i]) ForceBaim(SD8jDhml[i]);
   info[SD8jDhml[i]] = 'SLOW';
   continue;
  }
  if (getDropdownValue(QTyChczh, 0x3) && IsInAir(SD8jDhml[i])) {
   if ('EOkyJ' !== 'EOkyJ') {
    Ragebot['ForceTargetMinimumDamage'](entity_id, hp / 0x2 + 0x1);
    return;
   } else {
    if (usSHc9cv == SD8jDhml[i]) ForceBaim(SD8jDhml[i]);
    info[SD8jDhml[i]] = 'AIR';
    continue;
   }
  }
  if (getDropdownValue(QTyChczh, 0x2) && IsStanding(SD8jDhml[i]) && !IsInAir(SD8jDhml[i])) {
   if ('lCGgr' !== 'oNsdZ') {
    if (usSHc9cv == SD8jDhml[i]) ForceBaim(SD8jDhml[i]);
    info[SD8jDhml[i]] = 'STANDING';
    continue;
   } else {
    UI['ToggleHotkey']('Rage', 'GENERAL', 'General', 'Force body aim');
   }
  }
  if (getDropdownValue(RLvZdwyq, 0x1) && IsInAir(SD8jDhml[i])) {
   ForceHead(SD8jDhml[i]);
   info[SD8jDhml[i]] = 'AIR';
   continue;
  }
  if (getDropdownValue(RLvZdwyq, 0x0) && GetMaxDesync(SD8jDhml[i]) < UJfXs77m && !IsInAir(SD8jDhml[i])) {
   ForceHead(SD8jDhml[i]);
   info[SD8jDhml[i]] = 'HEAD';
   continue;
  }
  if (getDropdownValue(RLvZdwyq, 0x2) && IsCrouchTerrorist(SD8jDhml[i])) {
   if ('gljzJ' !== 'gljzJ') {
    result_pelvis = Trace['Bullet'](Entity['GetLocalPlayer'](), entity_id, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), pelvis_pos);
    result_body = Trace['Bullet'](Entity['GetLocalPlayer'](), entity_id, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), body_pos);
   } else {
    ForceHead(SD8jDhml[i]);
    info[SD8jDhml[i]] = 'CROUCH';
    continue;
   }
  }
  DisableBaim();
 }
}

function Draw() {
 if (font == null) {
  font = Render['AddFont']('Tahoma', 0x7, 0x2bc);
 }
 if (UI['IsMenuOpen']()) {
  if ('fjajv' === 'fjajv') {
   if (getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions'), 0x1)) UI['SetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions', setDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions'), 0x3, ![]));
   UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? !![] : ![]);
   UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Inverter arrows color', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? !![] : ![]);
   UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? !![] : ![]);
   UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Force BAIM conditions', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? !![] : ![]);
   UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Force SAFEPOINT conditions', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? !![] : ![]);
   UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Save FPS', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? !![] : ![]);
   UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Use highest possible damage', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions') ? !![] : ![]);
   delta = ![];
   if (getDropdownValue(UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Force HEAD conditions'), 0x0) && UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Enable head/baim conditions')) {
    delta = !![];
   }
   UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Inaccurate desync delta', delta);
   UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Draw HEAD/BAIM flags', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? !![] : ![]);
   UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Draw SAFE flags', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? !![] : ![]);
   UI['SetEnabled']('Misc', 'JAVASCRIPT', 'Script items', 'Features to display', UI['GetValue']('Misc', 'JAVASCRIPT', 'Script items', 'Indicators') ? !![] : ![]);
  } else {
   DisableBaim();
   var sd8JDhml = Entity['GetProp'](entity_id, 'CBasePlayer', 'm_iHealth');
   head_pos = Entity['GetHitboxPosition'](entity_id, 0x0);
   result_head = Trace['Bullet'](Entity['GetLocalPlayer'](), entity_id, Entity['GetEyePosition'](Entity['GetLocalPlayer']()), head_pos);
   if (result_head[0x1] > 0x0 && result_head[0x1] >= UI['GetValue']('Rage', GetLocalPlayerWeaponCategory(), 'Targeting', 'Minimum damage')) {
    Ragebot['ForceTargetMinimumDamage'](entity_id, result_head[0x1]);
   }
  }
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
  if ('lvkOe' === 'HjduS') {
   info[i] = '';
   safeTargets[i] = ![];
  } else {
   Exploit['OverrideTolerance'](0x0);
   Exploit['OverrideShift'](0xe);
   shouldDisable = !![];
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
  if ('laMSC' !== 'laMSC') {
   Ragebot['ForceTargetMinimumDamage'](entity_id, hp / 0x2 + 0x1);
   return;
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