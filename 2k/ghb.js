UI.AddCheckbox("Draw locations through walls");
UI.AddHotkey("Activate helper");
UI.AddCheckbox("Silent throw (Rage)");
UI.AddMultiDropdown("Enabled grenades", ["Molotovs", "high explosive grenades", "Flashbangs", "Smokes"]);
UI.AddCheckbox("Nade location tools");
UI.AddHotkey("Grenade setup");
_locations = require("locations.js");
var ticks_to_run = 0x16;
var last_angle_time = 0x0;
var chat_tut = ![];
var chat_stage = 0x0;
var chat_start = 0x0;
var temp_nade = [];

function print_nade_stats() {
  if (UI.IsHotkeyActive("Script items", "Grenade setup") && !chat_tut && World.GetServerString() != '') {
    chat_start = Globals.Curtime();
    Cheat.PrintChat("Please enter a name for this grenade. (Type `cancel` to cancel setup!)");
    chat_stage = 0x0;
    chat_tut = !![];
  }
}

function on_chat() {
  if (!Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("userid"))) || !chat_tut) return;
  var _0x1ee819 = Event.GetString("text");
  if (_0x1ee819.toLowerCase() == "cancel") {
    chat_tut = ![];
    temp_nade = [];
    chat_stage = 0x0;
    chat_start = 0x0;
    Cheat.PrintChat("You have cancelled this grenade setup!");
    return;
  }
  if (chat_stage == 0x0) {
    if (!~GRENADE_TYPES.indexOf(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())))) return Cheat.PrintChat("Please hold a valid grenade!");
    temp_nade[0] = World.GetMapName();
    temp_nade[1] = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
    temp_nade[2] = Local.GetViewAngles();
    temp_nade[3] = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    temp_nade[4] = _0x1ee819 + '';
    Cheat.PrintChat('How\x20do\x20you\x20throw\x20this\x20grenade?\x20(0\x20=\x20Throw,\x201\x20=\x20Run+Throw,\x202\x20=\x20Jump+Throw,\x203\x20=\x20Run+Jump+Throw,\x204\x20=\x20Half\x20throw)');
    chat_start = Globals.Curtime();
    chat_stage++;
  } else if (chat_stage == 0x1) {
    if (isNaN(parseInt(_0x1ee819)) || parseInt(_0x1ee819) > 0x4 || parseInt(_0x1ee819) < 0x0) return Cheat.PrintChat("Please enter a number!");
    if (parseInt(_0x1ee819) == 0x0) temp_nade[5] = "Throw";
    if (parseInt(_0x1ee819) == 0x1) temp_nade[5] = "Run+Throw";
    if (parseInt(_0x1ee819) == 0x2) temp_nade[5] = "Jump+Throw";
    if (parseInt(_0x1ee819) == 0x3) temp_nade[5] = 'Run+Jump+Throw';
    if (parseInt(_0x1ee819) == 0x4) temp_nade[5] = "Half throw";
    chat_start = Globals.Curtime();
    if (parseInt(_0x1ee819) == 0x1) {
      chat_stage = 0x3;
      Cheat.PrintChat("How far should you run (in ticks) to throw this nade? (default = 22)");
    } else {
      temp_nade[6] = 0x0;
      Cheat.PrintChat("Your grenade is ready to go, check console!");
      Cheat.Print("Your grenade is ready to go!\n");
      Cheat.Print("[ \"" + World.GetMapName() + "\", [" + Entity.GetEyePosition(Entity.GetLocalPlayer()) + "], [" + Local.GetViewAngles() + "], \"" + Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) + "\",\"" + temp_nade[4] + "\", \"" + temp_nade[5] + '\x22,\x200\x20]\x0a');
      chat_stage = 0x0;
      chat_tut = ![];
      temp_nade = [];
      chat_start = 0x0;
    }
  } else if (chat_stage == 0x3) {
    if (isNaN(parseInt(_0x1ee819)) || parseInt(_0x1ee819) < 0x1) return Cheat.PrintChat("You must specify a valid time to run!");
    temp_nade[6] = parseInt(_0x1ee819);
    Cheat.PrintChat("Your grenade is ready to go, check console!");
    Cheat.Print('Your\x20grenade\x20is\x20ready\x20to\x20go!\x0a');
    Cheat.Print("[ \"" + World.GetMapName() + "\", [" + Entity.GetEyePosition(Entity.GetLocalPlayer()) + "], [" + Local.GetViewAngles() + "], \"" + Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) + '\x22,\x22' + temp_nade[4] + "\", \"" + temp_nade[5] + '\x22,' + parseInt(_0x1ee819) + " ]\n");
    chat_stage = 0x0;
    chat_tut = [];
    temp_nade = [];
    chat_start = 0x0;
  }
}
Cheat.RegisterCallback("player_say", "on_chat");
var locations = _locations.locations;
var map_cache = [];
var enabled_grenades = [];
var selection_cache = 0x0;
var hand_cache = 0x0;
const GRENADE_TYPES = ["high explosive grenade", "smoke grenade", "molotov", "decoy grenade", 'incendiary\x20grenade', "flashbang"];
import_grenade_selection();
var weapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
if (weapon == 'incendiary\x20grenade') weapon = 'molotov';
map_cache = locations.filter(function(_0x52c080) {
  return _0x52c080[0] == World.GetMapName() && ~enabled_grenades.indexOf(_0x52c080[3].toLowerCase()) && _0x52c080[3].toLowerCase() == weapon;
});
Cheat.RegisterCallback("CreateMove", "print_nade_stats");

function draw() {
  if (chat_tut && Globals.Curtime() - chat_start > 0xf) {
    chat_stage = 0x0;
    chat_start = 0x0;
    chat_tut = ![];
    temp_nade = [];
    Cheat.PrintChat("Grenade setup has timed out!");
  }
  UI.SetEnabled("Grenade setup", UI.GetValue('Script\x20items', "Nade location tools"));
  var _0x22384a = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
  if (_0x22384a == "incendiary grenade") _0x22384a = "molotov";
  if (!~GRENADE_TYPES.indexOf(_0x22384a)) return;
  if (selection_cache != UI.GetValue('Script\x20items', "Enabled grenades") || (hand_cache != _0x22384a || !~GRENADE_TYPES.indexOf(_0x22384a))) {
    import_grenade_selection();
    map_cache = locations.filter(function(_0x22658b) {
      return _0x22658b[0] == World.GetMapName() && ~enabled_grenades.indexOf(_0x22658b[3].toLowerCase()) && _0x22658b[3].toLowerCase() == _0x22384a;
    });
  }
  if (map_cache.length == 0x0) return;
  for (var _0x3ca876 in map_cache) {
    var _0x1b80df = Render.WorldToScreen([map_cache[_0x3ca876][1][0], map_cache[_0x3ca876][1][1], map_cache[_0x3ca876][1][2] - 0x3f]);
    if (!map_cache[_0x3ca876][7] && !UI.GetValue("Script items", "Draw locations through walls")) continue;
    var _0x548e5c = angle_to_vec(map_cache[_0x3ca876][2][0], map_cache[_0x3ca876][2][1]);
    var _0x3df22e = map_cache[_0x3ca876][1];
    _0x548e5c = Render.WorldToScreen([_0x3df22e[0] + _0x548e5c[0] * 0x190, _0x3df22e[1] + _0x548e5c[1] * 0x190, _0x3df22e[2] + _0x548e5c[2] * 0x190]);
    var _0xff469d = calc_dist(Entity.GetRenderOrigin(Entity.GetLocalPlayer()), map_cache[_0x3ca876][1]);
    Render.Circle(_0x1b80df[0], _0x1b80df[1], 0x6, [200]);
    Render.Circle(_0x1b80df[0], _0x1b80df[1], 0x1, [200]);
    var _0xcfd075 = Render.TextSize(map_cache[_0x3ca876][4], 0x8);
    var _0x508347 = Render.TextSize(map_cache[_0x3ca876][5], 0x8);
    Render.FilledRect(_0x1b80df[0] + 0x9, _0x1b80df[1] - _0xcfd075[1] / 1.5, _0xcfd075[0] + 0x7, _0xcfd075[1] + 0x4, [255]);
    Render.GradientRect(_0x1b80df[0] + 0xa, _0x1b80df[1] - _0xcfd075[1] / 1.5, _0xcfd075[0] + 0x5, 0x2, 0x1, [255], [255]);
    shadow(_0x1b80df[0] + 12.5, _0x1b80df[1] - 0x5, 0x0, map_cache[_0x3ca876][4], ![], undefined, [255], 0x8);
    if (_0xff469d > 0x46) continue;
    Render.Circle(_0x548e5c[0], _0x548e5c[1], 0x1, [200]);
    Render.FilledRect(_0x548e5c[0] + 0xa, _0x548e5c[1] - _0xcfd075[1] / 1.5, _0xcfd075[0] > _0x508347[0] ? _0xcfd075[0] + 0x5 : _0x508347[0] + 0x5, _0xcfd075[1] > _0x508347[1] ? _0xcfd075[1] + 0xf : _0x508347[1] + 0xf, [255]);
    Render.GradientRect(_0x548e5c[0] + 0xa, _0x548e5c[1] - _0xcfd075[1] / 1.5, _0xcfd075[0] > _0x508347[0] ? _0xcfd075[0] + 0x5 : _0x508347[0] + 0x6, 0x2, 0x1, [255], [255]);
    shadow(_0x548e5c[0] + 12.5, _0x548e5c[1] - 0x5, 0x0, map_cache[_0x3ca876][4], ![], undefined, [255], 0x8);
    shadow(_0x548e5c[0] + 12.5, _0x548e5c[1] + 6.5, 0x0, map_cache[_0x3ca876][5], ![], undefined, [255], 0x8);
    Render.Circle(_0x548e5c[0], _0x548e5c[1], 0x6, [255]);
    Render.Line(Render.GetScreenSize()[0] / 0x2, Render.GetScreenSize()[1] / 0x2, _0x548e5c[0], _0x548e5c[1], [255]);
  }
}

function check_visibility() {
  if (map_cache.length == 0x0 || World.GetServerString() == '') return;
  var _0x551bf7 = Entity.GetLocalPlayer();
  eye_angles = Local.GetViewAngles();
  head = Entity.GetProp(_0x551bf7, "CBasePlayer", "m_vecOrigin");
  offset = Entity.GetProp(_0x551bf7, "CBasePlayer", "m_vecViewOffset[2]");
  head = vector_add(head, [0x0, 0x0, offset[0]]);
  for (var _0x2b5bd3 in map_cache) {
    var _0x538d1a = Trace.Line(_0x551bf7, head, map_cache[_0x2b5bd3][1]);
    if (map_cache[_0x2b5bd3][7] == undefined) map_cache[_0x2b5bd3].push(_0x538d1a[1] == 0x1);
    else map_cache[_0x2b5bd3][7] = _0x538d1a[1] == 0x1;
  }
}

function fix_move(_0x489a8d, _0x34caa6, _0x381139) {
  var _0x2fc07f = function(_0x5a0195) {
    return _0x5a0195 / 0xb4 * Math.PI;
  };
  var _0x18298d, _0x2facd6, _0x3b626d;
  if (_0x34caa6[1] < 0x0) _0x18298d = 0x168 + _0x34caa6[1];
  else _0x18298d = _0x34caa6[1];
  if (_0x489a8d[1] < 0x0) _0x2facd6 = 0x168 + _0x489a8d[1];
  else _0x2facd6 = _0x489a8d[1];
  if (_0x2facd6 < _0x18298d) _0x3b626d = Math.abs(_0x2facd6 - _0x18298d);
  else _0x3b626d = 0x168 - Math.abs(_0x18298d - _0x2facd6);
  return [Math.cos(_0x2fc07f(_0x3b626d)) * _0x381139[0] + Math.cos(_0x2fc07f(_0x3b626d + 0x5a)) * _0x381139[1], Math.sin(_0x2fc07f(_0x3b626d)) * _0x381139[0] + Math.sin(_0x2fc07f(_0x3b626d + 0x5a)) * _0x381139[1], 0x0];
}

function move_forward(_0x5c24d7) {
  var _0x53f3c2 = Local.GetViewAngles();
  var _0x1f3343 = [0];
  var _0x5e4713 = fix_move(_0x5c24d7, _0x53f3c2, _0x1f3343);
  var _0x10dc08 = UI.GetValue("Script items", 'Silent\x20throw\x20(Rage)') == 0x1 ? !![] : ![];
  UserCMD.SetMovement(_0x5e4713);
  UserCMD.SetViewAngles(_0x5c24d7, _0x10dc08);
}

function move_on_key() {
  if (map_cache.length == 0x0) return;
  if (!~GRENADE_TYPES.indexOf(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())))) return;
  var _0x3e5ca0 = UI.GetValue("Script items", "Silent throw (Rage)") == 0x1 ? !![] : ![];
  if (!UI.IsHotkeyActive("Script items", "Activate helper")) {
    this.running = ![];
    this.ignore_input = ![];
    this.start_tick = 0x0;
    this.next_tick_ang = [];
    this.attacked = ![];
    this.moved_base = ![];
    this.run_start = 0x0;
    return;
  }
  if (this.next_tick_ang == null) this.next_tick_ang = [];
  if (this.ignore_input) {
    UserCMD.SetViewAngles(this.next_tick_ang, _0x3e5ca0);
    return;
  }
  if (this.next_tick_ang.length) {
    UserCMD.SetViewAngles(this.next_tick_ang, _0x3e5ca0);
  }
  if (this.attacked == null) this.attacked = ![];
  if (this.start_tick == null) this.start_tick = 0x0;
  if (this.running == null) this.running = ![];
  if (this.closest == null) this.closest = [];
  if (this.ignore_input == null) this.ignore_input = ![];
  if (this.run_start == null) this.run_start = 0x0;
  var _0x2e9279 = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
  var _0x45d624 = map_cache.sort(function(_0x1d5a8a, _0x177623) {
    return calc_dist(_0x2e9279, _0x1d5a8a[1]) - calc_dist(_0x2e9279, _0x177623[1]);
  })[0];
  if (this.closest.length) {
    _0x45d624 = this.closest;
  }
  if (calc_dist(_0x2e9279, _0x45d624[1]) > 0xc8 && !this.ignore_input) {
    return;
  }
  var _0xc8d6ad = move_to_target(_0x45d624[1]);
  if (_0xc8d6ad || this.running) {
    if (_0x45d624[5] == "Throw") {
      UserCMD.SetButtons(UserCMD.GetButtons() | 0x1);
      this.attacked = !![];
      this.ignore_input = !![];
      this.next_tick_ang = _0x45d624[2];
    } else if (_0x45d624[5] == "Run+Throw") {
      if (!this.closest.length) this.closest = _0x45d624;
      if (this.start_tick == 0x0) {
        this.start_tick = Globals.Tickcount();
      }
      this.running = !![];
      if (this.run_start == 0x0) this.run_start = Globals.Tickcount();
      move_forward(_0x45d624[2]);
      if (this.running && Globals.Tickcount() - this.run_start > _0x45d624[6]) {
        if (!this.attacked) {
          UserCMD.SetButtons(UserCMD.GetButtons() | 0x1);
          this.attacked = !![];
        }
        if (Globals.Tickcount() - this.run_start > _0x45d624[6] + 0x8) {
          this.running = ![];
          this.attacked = ![];
          this.closest = [];
          this.ignore_input = !![];
          this.next_tick_ang = _0x45d624[2];
          this.run_start = 0x0;
        }
      }
    } else if (_0x45d624[5] == "Jump+Throw") {
      UserCMD.SetButtons(UserCMD.GetButtons() | 0x1 | 0x2);
      this.next_tick_ang = _0x45d624[2];
      this.ignore_input = !![];
      this.attacked = !![];
    } else if (_0x45d624[5] == "Run+Jump+Throw") {
      if (!this.closest.length) this.closest = _0x45d624;
      if (this.start_tick == 0x0) {
        this.start_tick = Globals.Tickcount();
      }
      var _0x5f318a = angle_to_vec(_0x45d624[2][0], _0x45d624[2][1]);
      _0x5f318a = vec_mul_fl(_0x5f318a, 0x82);
      this.running = !![];
      move_forward(_0x45d624[2]);
      var _0x2909fa = vector_sub(vector_add(_0x5f318a, _0x45d624[1]), Entity.GetRenderOrigin(Entity.GetLocalPlayer()));
      var _0x5541df = Math.hypot(_0x2909fa[0], _0x2909fa[1]);
      if (_0x5541df < 0x50) {
        UserCMD.SetButtons(UserCMD.GetButtons() | 0x1 | 0x2);
        this.attacked = !![];
        this.running = ![];
        this.closest = [];
        this.ignore_input = !![];
        this.next_tick_ang = _0x45d624[2];
      }
    } else if (_0x45d624[5] == 'Half\x20throw') {
      if (this.start_tick == 0x0) {
        this.start_tick = Globals.Tickcount();
      }
      UserCMD.SetButtons(UserCMD.GetButtons() | 0x1 << 0x0 | 0x1 << 0xb);
      if (Globals.Tickcount() - this.start_tick > 0x18) {
        this.attacked = !![];
        this.ignore_input = !![];
        this.next_tick_ang = _0x45d624[2];
      }
    }
  } else {
    this.running = ![];
    this.closest = [];
    this.ignore_input = ![];
    this.start_tick = 0x0;
    this.moved_base = ![];
    this.run_start = 0x0;
  }
}

function on_local_connect() {
  if (Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt('userid')))) {
    map_cache = locations.filter(function(_0x2dec9d) {
      return _0x2dec9d[0] == World.GetMapName();
    });
  }
}
Cheat.RegisterCallback("Draw", "draw");
Cheat.RegisterCallback("CreateMove", "check_visibility");
Cheat.RegisterCallback("CreateMove", "move_on_key");
Cheat.RegisterCallback("player_connect_full", 'on_local_connect');

function getAngles(_0x2ca2d6, _0x15fc31) {
  newPos = vector_sub(_0x15fc31, _0x2ca2d6);
  xyDist = Math.sqrt(newPos[0] * newPos[0] + newPos[1] * newPos[1]);
  yaw = Math.atan2(newPos[1], newPos[0]) * 0xb4 / Math.PI;
  pitch = Math.atan2(-newPos[2], xyDist) * 0xb4 / Math.PI;
  roll = 0x0;
  angles = [pitch, yaw, roll];
  return angles;
}

function vector_sub(_0x591db9, _0x1986c9) {
  return [_0x591db9[0] - _0x1986c9[0], _0x591db9[1] - _0x1986c9[1], _0x591db9[2] - _0x1986c9[2]];
}

function degreesToRadians(_0x4e7ec5) {
  return _0x4e7ec5 * Math.PI / 0xb4;
}

function angle_to_vec(_0x36b95e, _0x1eb3e5) {
  var _0xfe92c4 = degreesToRadians(_0x36b95e);
  var _0x4e5b2b = degreesToRadians(_0x1eb3e5);
  var _0x17a29a = Math.sin(_0xfe92c4);
  var _0x4460da = Math.cos(_0xfe92c4);
  var _0x3d66b0 = Math.sin(_0x4e5b2b);
  var _0x52d66b = Math.cos(_0x4e5b2b);
  return [_0x4460da * _0x52d66b, _0x4460da * _0x3d66b0, -_0x17a29a];
}

function vector_add(_0x479eae, _0x1116a9) {
  newVec = [_0x479eae[0] + _0x1116a9[0], _0x479eae[1] + _0x1116a9[1], _0x479eae[2] + _0x1116a9[2]];
  return newVec;
}

function shadow(_0x8a89f0, _0x3b057e, _0x440bee, _0xa7182e, _0x36af0d, _0x3d242f, _0xfc6d3e, _0xab371f) {
  if (_0x36af0d) {
    Render.StringCustom(_0x8a89f0 + _0xab371f / 7.17, _0x3b057e + _0xab371f / 7.17, _0x440bee, _0xa7182e, [255], _0x3d242f);
    Render.StringCustom(_0x8a89f0, _0x3b057e, _0x440bee, _0xa7182e, _0xfc6d3e, _0x3d242f);
  } else {
    Render.String(_0x8a89f0 + _0xab371f / 7.17, _0x3b057e + _0xab371f / 7.17, _0x440bee, _0xa7182e, [255], _0xab371f);
    Render.String(_0x8a89f0, _0x3b057e, _0x440bee, _0xa7182e, _0xfc6d3e, _0xab371f);
  }
}

function import_grenade_selection() {
  var _0x2c9e77 = UI.GetValue("Script items", "Enabled grenades");
  if (_0x2c9e77 == 0x0) enabled_grenades = [];
  if (getDropdownValue(_0x2c9e77, 0x0) && !~enabled_grenades.indexOf('molotov')) enabled_grenades.push("molotov");
  else if (~enabled_grenades.indexOf("molotov") && !getDropdownValue(_0x2c9e77, 0x0)) enabled_grenades.splice(enabled_grenades.indexOf("molotov"), 0x1);
  if (getDropdownValue(_0x2c9e77, 0x1) && !~enabled_grenades.indexOf("high explosive grenade")) enabled_grenades.push("high explosive grenade");
  else if (~enabled_grenades.indexOf('high\x20explosive\x20grenade') && !getDropdownValue(_0x2c9e77, 0x1)) enabled_grenades.splice(enabled_grenades.indexOf("high explosive grenade"), 0x1);
  if (getDropdownValue(_0x2c9e77, 0x2) && !~enabled_grenades.indexOf("flashbang")) enabled_grenades.push("flashbang");
  else if (~enabled_grenades.indexOf("flashbang") && !getDropdownValue(_0x2c9e77, 0x2)) enabled_grenades.splice(enabled_grenades.indexOf("flashbang"), 0x1);
  if (getDropdownValue(_0x2c9e77, 0x3) && !~enabled_grenades.indexOf('smoke\x20grenade')) enabled_grenades.push('smoke\x20grenade');
  else if (~enabled_grenades.indexOf("smoke grenade") && !getDropdownValue(_0x2c9e77, 0x3)) enabled_grenades.splice(enabled_grenades.indexOf('smoke\x20grenade'), 0x1);
  selection_cache = _0x2c9e77;
  hand_cache = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
}

function vec_mul_fl(_0x4237dd, _0x241cdc) {
  return [_0x4237dd[0] * _0x241cdc, _0x4237dd[1] * _0x241cdc, _0x4237dd[2] * _0x241cdc];
}

function calc_dist(_0x5c2b22, _0x30def9) {
  x = _0x5c2b22[0] - _0x30def9[0];
  y = _0x5c2b22[1] - _0x30def9[1];
  z = _0x5c2b22[2] - _0x30def9[2];
  return Math.sqrt(x * x + y * y + z * z);
}

function move_to_target(_0x3b01eb, _0x54339c) {
  var _0x4e4f43 = Entity.GetLocalPlayer();
  var _0x31c9d6 = Entity.GetRenderOrigin(_0x4e4f43);
  _0x31c9d6[2] = Entity.GetEyePosition(_0x4e4f43)[2];
  var _0x58318d = [_0x3b01eb[0] - _0x31c9d6[0], _0x3b01eb[1] - _0x31c9d6[1], _0x3b01eb[2] - _0x31c9d6[2]];
  var _0x1533a8 = Local.GetViewAngles()[1];
  var _0x4f69d5 = [];
  var _0x31e5cb = 0x14;
  _0x4f69d5[0] = (Math.sin(_0x1533a8 / 0xb4 * Math.PI) * _0x58318d[1] + Math.cos(_0x1533a8 / 0xb4 * Math.PI) * _0x58318d[0]) * _0x31e5cb;
  _0x4f69d5[1] = (Math.sin(_0x1533a8 / 0xb4 * Math.PI) * _0x58318d[0] + Math.cos(_0x1533a8 / 0xb4 * Math.PI) * -_0x58318d[1]) * _0x31e5cb;
  _0x4f69d5[2] = 0x0;
  var _0x418918 = Math.sqrt(_0x58318d[0] * _0x58318d[0] + _0x58318d[1] * _0x58318d[1] + _0x58318d[2] * _0x58318d[2]);
  var _0x6229fe = Entity.GetProp(_0x4e4f43, 'DT_CSPlayer', 'm_vecVelocity[0]');
  var _0x52a76f = Math.sqrt(_0x6229fe[0] * _0x6229fe[0] + _0x6229fe[1] * _0x6229fe[1] + _0x6229fe[2] * _0x6229fe[2]);
  UserCMD.SetMovement(_0x4f69d5);
  return _0x418918 < (_0x54339c ? _0x54339c : 0x1) && (_0x52a76f < 0x2 || _0x54339c);
}

function getDropdownValue(_0x499a6f, _0x2c71b6) {
  var _0x42da07 = 0x1 << _0x2c71b6;
  return _0x499a6f & _0x42da07 ? !![] : ![];
}