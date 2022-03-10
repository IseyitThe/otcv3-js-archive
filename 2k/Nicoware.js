//hitlist
var position = {
  x: 100,
  y: 100
}
var alpha = 0;
var hitboxes = [
  'Generic',
  'Head',
  'Chest',
  'Stomach',
  'Left arm',
  'Right arm',
  'Left leg',
  'Right leg',
  'Body'
];
function getHitboxName(index) {
  return hitboxes[index] || 'Generic';
}
var logs = [];
function HSVtoRGB(h, s, v) {
  var r, g, b, i, f, p, q, t;
  if (arguments.length === 1) {
    s = h.s, v = h.v, h = h.h;
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}
function getCustomValue(name) {
  var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", name);
  return value;
}
function render() {
  if (!getCustomValue('hitlist')) {
    return;
  }
  tickcount = Global.Tickcount();
  position.x = getCustomValue('position x');
  position.y = getCustomValue('position y');
  alpha = getCustomValue('alpha');
  color = HSVtoRGB(tickcount % 350 / 350, 1, 1, 1, 255);
  Render.FilledRect(position.x, position.y, 260, 160, [0, 0, 0, alpha]);
  Render.String(position.x + 5, position.y + 5, 0, "NAME", [255, 255, 255, 255], 8);
  Render.String(position.x + 110, position.y + 5, 0, "DMG", [255, 255, 255, 255], 8);
  Render.String(position.x + 150, position.y + 5, 0, "HITBOX", [255, 255, 255, 255], 8);
  Render.Line(position.x, position.y + 20, position.x + 259, position.y + 20, [color.r, color.g, color.b, 255]);
  for (var i = logs.slice(-7).length, j = 0; i > 0; i-- , j++) {
    // brain issue, sry
    if (j > 6) {
      j = 0;
    }
    var log = logs.slice(-7)[i - 1];
    Render.String(position.x + 5, position.y + 20 * (j + 1.25), 0, log.name.slice(0, 15), [255, 255, 255, 255], 8);
    Render.String(position.x + 110, position.y + 20 * (j + 1.25), 0, String(log.damage), [255, 255, 255, 255], 8);
    Render.String(position.x + 150, position.y + 20 * (j + 1.25), 0, log.hitbox, [255, 255, 255, 255], 8);
  }
}
function hitloger() {
  var me = Entity.GetLocalPlayer();
  var victim = Event.GetInt('userid');
  var attacker = Event.GetInt('attacker');
  var damage = Event.GetInt('dmg_health');
  var hitbox = Event.GetInt('hitgroup');
  var victimIndex = Entity.GetEntityFromUserID(victim);
  var attackerIndex = Entity.GetEntityFromUserID(attacker);
  var name = Entity.GetName(victimIndex);
  if (me == attackerIndex && me != victimIndex) {
    logs.push({
      name: name,
      hitbox: getHitboxName(hitbox),
      damage: damage
    });
  }
}
function roundStartListener() {
  if (!getCustomValue('update every round')) {
    return;
  }
  logs = [];
}
function main() {
  var sizes = Global.GetScreenSize();
  UI.AddCheckbox('hitlist');
  UI.AddCheckbox('update every round');
  UI.AddSliderInt('position x', 0, sizes[0]);
  UI.AddSliderInt('position y', 0, sizes[1]);
  UI.AddSliderInt('alpha', 0, 255);
  Global.RegisterCallback('Draw', 'render');
  Global.RegisterCallback('player_hurt', 'hitloger');
  Global.RegisterCallback('round_start', 'roundStartListener');
}
main();
//hitlist

// Skeet Indicators
var UI_IND_SCREENY = '[SKI] Indicators Screen Y'
var UI_IND_OUTLINEB = '[SKI] Indicators Outline (Black)'
var SCREEN_SIZE = Global.GetScreenSize()
var screenX = SCREEN_SIZE[0]
var screenY = SCREEN_SIZE[1]

var baseX = 15,
  baseY = screenY - 200 // bottom left corner

var COLOR_WHITE = [255, 255, 255, 255],
  COLOR_GREEN = [124, 195, 13, 255],
  COLOR_RED = [195, 13, 35, 255]

var ANTIAIM_DIR = ''
var DENULL = false
function checkAntiAim() {
  // shit code, please help me improve
  var leftActive = UI.IsHotkeyActive('Anti-Aim', 'Rage Anti-Aim', 'Left dir'),
    rightActive = UI.IsHotkeyActive('Anti-Aim', 'Rage Anti-Aim', 'Right dir'),
    backActive = UI.IsHotkeyActive('Anti-Aim', 'Rage Anti-Aim', 'Back dir'),
    nulled =
      (leftActive && (rightActive || backActive)) ||
      (rightActive && (leftActive || backActive)) ||
      (backActive && (rightActive || leftActive))
  if (DENULL) {
    DENULL = false
    if (leftActive) {
      ANTIAIM_DIR = 'left'
      return
    }
    if (rightActive) {
      ANTIAIM_DIR = 'right'
      return
    }
    if (backActive) {
      ANTIAIM_DIR = 'back'
      return
    }
  }
  if (leftActive) {
    ANTIAIM_DIR = 'left'
    if (nulled) return (DENULL = true)
  }
  if (rightActive) {
    ANTIAIM_DIR = 'right'
    if (nulled) return (DENULL = true)
  }
  if (backActive) {
    ANTIAIM_DIR = 'back'
    if (nulled) return (DENULL = true)
  }
}

function MANUAL_AA(val) {
  return val === ANTIAIM_DIR
}

/* 
  Function lookup
    [key]   : function ref
  
  Indicators
    [0]     : function key
    [1]     : text that shows in indicator list
    [2]     : color (see COLOR_WHITE)
    [3]     : arguments to the function reference in the lookup table
*/
var functionLookup = { hotkey: UI.IsHotkeyActive, manual: MANUAL_AA },
  indicators = [
    ['hotkey', 'MINWALK', COLOR_WHITE, ['Anti-Aim', 'Extra', 'Slow walk']],
    ['hotkey', 'FD', COLOR_WHITE, ['Anti-Aim', 'Extra', 'Fake duck']],
    ['manual', 'LEFT', COLOR_GREEN, ['left']],
    ['manual', 'RIGHT', COLOR_GREEN, ['right']],
    ['manual', 'BACK', COLOR_GREEN, ['back']],
    ['hotkey', 'DT', COLOR_RED, ['Rage', 'Exploits', 'Doubletap']],
    ['hotkey', 'HS', COLOR_RED, ['Rage', 'Exploits', 'Hide shots']],
    [
      'hotkey',
      'SP',
      COLOR_WHITE,
      ['Rage', 'General', 'General', 'Safe point override']
    ],
    [
      'hotkey',
      'DMG',
      COLOR_GREEN,
      ['Rage', 'Pistol', 'Damage', 'Minimum damage (on key)']
    ],
    [
      'hotkey',
      'BAIM',
      COLOR_GREEN,
      ['Rage', 'Pistol', 'Pistol config', 'Hitbox override']
    ],
    [
      'hotkey',
      'AUTOPEEK',
      COLOR_GREEN,
      ['Misc', 'General', 'Movement', 'Auto peek']
    ]
  ]

// Draw Callback
function r_skeetindicators() {
  baseY = screenY - UI.GetValue(UI_IND_SCREENY)

  checkAntiAim()
  var activeIndicators = []
  indicators.forEach(function(ind) {
    var type = ind[0],
      text = ind[1],
      color = ind[2],
      map = ind[3]
    var fn = functionLookup[type]
    // call function with argument array "map "
    if (fn.apply(this, map)) {
      activeIndicators.push(ind)
    }
  })

  var index = 0
  activeIndicators.forEach(function(ind) {
    var type = ind[0],
      text = ind[1],
      color = ind[2],
      map = ind[3]
    index = index + 1
    var x = baseX,
      y = baseY + index * 25
    if (UI.GetValue(UI_IND_OUTLINEB)) {
      Render.String(x + 2, y + 2, 0, text, [0, 0, 0, 255], 4)
    }
    Render.String(x, y, 0, text, color, 4)
  })
}

// Add baseY slider
UI.AddSliderInt(UI_IND_SCREENY, 0, 1000)
UI.AddCheckbox(UI_IND_OUTLINEB)
// Register callbacks
Global.RegisterCallback('Draw', 'r_skeetindicators')

//skeetindicators

//HITLOGS

const hitgroup = ['Head', 'Neck', 'Pelvis', 'Body', 'Thorax', 'Chest', 'Upper chest', 'Left thigh', 'Right thigh', 'Left calf', 'Right calf', 'Left foot', 'Right foot', 'Left hand', 'Right hand', 'Left upper arm', 'Left forearm', 'Right upper arm', 'Right forearm'];

const activeLogs = [];

const ragebotTarget = {};

UI.AddColorPicker("Hitlog Color");

//Check if color is unset
var color = UI.GetColor("MISC", "JAVASCRIPT", "Script Items", "Hitlog Color");
if (color[0] === 0 && color[1] === 0 && color[2] === 0 && color[3] === 0)
    UI.SetColor("MISC", "JAVASCRIPT", "Script Items", "Hitlog Color", [255, 0, 0, 255]);


/**
 * Description returns width of multi colored text lines
 * @param {array}   lines  (0 == color, 1 == text);
 */

function getMultiColorTextSize(lines) {
    var w = 0;
    for (var x = 0; x < lines.length; x++) {
        w += Render.TextSize(lines[x][1], 8)[0];
    }
    return w;
}

/**
 * Description draws Multiple text with different color
 * @param {int}      x      x cords
 * @param {number}   y      y cords
 * @param {array}   lines  (0 == color, 1 == text);
 */
function drawMultiColorText(x, y, lines) {
    var x_pad = 0;
    for (var i = 0; i < lines.length; i++) {
        const line = lines[i];
        const text = line[1];
        var color = line[0];
        if (typeof line[0] == "number") {
            color = UI.GetColor("MISC", "JAVASCRIPT", "Script Items", "Hitlog Color");
        }
        Render.String(x + x_pad, y, 0, text, color, 8);
        const w = Render.TextSize(text, 8)[0];
        x_pad += w;
    }
}


/**
 * Description Displays the log detail on screen
 * @param {int}      count      Index of the log.
 * @param {number}   layer      Log Details .
 */
function showLog(count, layer) {
    const text = layer.text;
    const w = getMultiColorTextSize(text);
    const expiry = Global.Realtime() < layer.delay;
    const y = 45 + (42 * (count - 1));
    const h = 12;
    const logW = (w < 150) ? 150 : (w + 15);
    const speed = 3;
    const layerSize = 15;

    layer.firstLayer = expiry ? Math.min(layer.firstLayer + logW * 0.025, logW + layerSize) : Math.max(layer.firstLayer - speed, 0);
    layer.secondLayer = expiry ? Math.min(layer.secondLayer + logW * 0.015, logW) : Math.max(layer.secondLayer - 2 * speed, 0);
    var color = UI.GetColor("MISC", "JAVASCRIPT", "Script Items", "Hitlog Color");
    Render.FilledRect(layer.firstLayer - layer.firstLayer, y, layer.firstLayer, h + 20, color);
    Render.FilledRect(layer.secondLayer - layer.secondLayer, y, layer.secondLayer, h + 20, [16, 0, 0, 255]);

    drawMultiColorText(layer.secondLayer - logW + 5, y + 3 + 6, text);
    activeLogs[count] = layer;
    if (layer.secondLayer === 0) {
        activeLogs.splice(count, 1);
    }
}

function onDraw() {
    for (var x = 0; x < activeLogs.length; x++) {
        showLog(x, activeLogs[x]);
    }
}

function onRagebotFire() {
    ragebotTarget[Entity.GetName(Event.GetInt("target_index"))] = {
        hitgroup: hitgroup[Event.GetInt("hitbox")],
        hc: Event.GetInt("hitchance"),
        safepoint: Event.GetInt("safepoint"),
        exploit: Event.GetInt("exploit")
    }
}

function onPlayerHurt() {
    const attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    const victim = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    const victimName = Entity.GetName(victim);
    if (attacker === Entity.GetLocalPlayer() && victim !== Entity.GetLocalPlayer()) {
        const target = ragebotTarget[victimName];
        if (target != null) {
            const hitMessage = [
                [[255, 255, 255, 255], "Hit "],
                [0, victimName.substring(0, 28)],
                [[255, 255, 255, 255], " in the "],
                [0, target.hitgroup],
                [[255, 255, 255, 255], " for "],
                [0, Event.GetInt("dmg_health").toString()],
                [[255, 255, 255, 255], " damage ("],
                [0, Event.GetInt("health") + " health remaining"],
                [[255, 255, 255, 255], ")"]
            ];
            activeLogs.push({
                    text: hitMessage,
                    delay: Global.Realtime() + 5,
                    firstLayer: 0,
                    secondLayer: 0
                }
            );
        }
    }
}


//Register Callbacks
Global.RegisterCallback("Draw", "onDraw");
Global.RegisterCallback("ragebot_fire", "onRagebotFire");
Global.RegisterCallback("player_hurt", "onPlayerHurt");

