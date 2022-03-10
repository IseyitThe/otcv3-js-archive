UI.AddCheckbox("Teleport on peek");
UI.AddHotkey("Toggle key");
UI.AddSliderInt("Predicted ticks", 2, 5);
UI.AddSliderFloat("Teleport cooldown", 1.0, 10.0);
UI.AddSliderInt("Minimum damage to trigger teleport", 1, 20);
UI.AddCheckbox("Enable doubletap after teleport");
UI.AddCheckbox("Recharge after teleport");
UI.AddCheckbox("Render indicator");
//useless js but its aight i guess
//code starting from this point is april#0001's vector thing
/**
 * @title Vector
 * @description Simple 3d vector system
 *
 * @typedef Vector {x: number, y: number, z: number}
 */
var vector = {
    _class: 'vector'
};
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
      case 'x': //multiplication by number
          return {
              x: vec.x * vec2,
              y: vec.y * vec2,
              z: vec.z * vec2
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
vector.to_array = function(vec)
{
    return [
        vec.x,
        vec.y,
        vec.z
    ];
};
//end of april's vector stuff
function extrapolate_tick(headpos, velocity, tick_amt)
{
    return vector.operate(headpos, vector.operate(velocity, tick_amt * Globals.TickInterval(), 'x'), "+"); //:flushed:
}
var has_teleported = false; //global variables are a great evil
var should_teleport = false;
var last_teleport_time = 0.0;
var js_items = ["Misc", "JAVASCRIPT", "Script Items"];
function on_move()
{
    if(UI.GetValue(js_items, "Teleport on peek") && UI.IsHotkeyActive(js_items, "Toggle key"))
    {
        var is_dt_enabled = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
        var teleport_cooldown = UI.GetValue(js_items, "Teleport cooldown");
        if(Globals.Curtime() > last_teleport_time + teleport_cooldown)
        {
            if(is_dt_enabled && Exploit.GetCharge() < 0.95) //no point attempting to teleport if charge is too little
            {
                return;
            }
            if(should_teleport && !has_teleported)
            {
                if(is_dt_enabled)
                {
                    UI.ToggleHotkey("Rage", "Exploits", "Doubletap");
                    last_teleport_time = Globals.Curtime();
                    should_teleport = false;
                    has_teleported = true;
                    return;
                }
                else
                {
                    UI.ToggleHotkey("Rage", "Exploits", "Doubletap");
                    return;
                }
            }
            var local = Entity.GetLocalPlayer();
            var local_eyepos = Entity.GetEyePosition(local);
            var local_eyepos_vector = vector.new(local_eyepos);
            var local_velocity = Entity.GetProp(local, "CBasePlayer", "m_vecVelocity[0]");
            var local_velocity_vector = vector.new(local_velocity);
            var extrapolated_headpos = extrapolate_tick(local_eyepos_vector, local_velocity_vector, UI.GetValue(js_items, "Predicted ticks"));
            var enemies = Entity.GetEnemies();
            var teleport_mindamage = UI.GetValue(js_items, "Minimum damage to trigger teleport");
            if(!should_teleport && !has_teleported)
            {
                for(var i = 0; i < enemies.length; i++)
                {
                    if(Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i]))
                    {
                        var enemy_headpos = Entity.GetHitboxPosition(enemies[i], 0);
                        var enemy_pelvispos = Entity.GetHitboxPosition(enemies[i], 2); 
                        var trace = Trace.Bullet(local, enemies[i], vector.to_array(extrapolated_headpos), enemy_pelvispos);
                        var trace2 = Trace.Bullet(local, enemies[i], vector.to_array(extrapolated_headpos), enemy_headpos);
                        if(trace[1] > teleport_mindamage || trace2[1] > teleport_mindamage)
                        {
                            should_teleport = true;
                            break;
                        }
                    }
                }
            }
        }
        else if(has_teleported)
        {
            var should_attempt_to_reenable_dt = UI.GetValue(js_items, "Enable doubletap after teleport");
            var should_attempt_to_recharge = UI.GetValue(js_items, "Recharge after teleport");
            if(should_attempt_to_reenable_dt)
            {
                if(!is_dt_enabled)
                {
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
    getValue('enable world color modulation')
      ? getColor('world color')
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
      var value = getValue('world exposure') / 10;
      Entity.SetProp(entity, tonemapClass, 'm_flCustomAutoExposureMin', value);
      Entity.SetProp(entity, tonemapClass, 'm_flCustomAutoExposureMax', value);

      Entity.SetProp(entity, tonemapClass, 'm_flCustomBloomScale', getValue('bloom scale') / 10);
    }

    Convar.SetFloat('r_modelAmbientMin', getValue('model ambient') / 10);
  }
}

function init() {
  UI.AddSliderFloat('world exposure', 0.0, 100.0);
  UI.AddSliderFloat('model ambient', 0.0, 100.0);
  UI.AddSliderFloat('bloom scale', 0.0, 100.0);
  UI.AddCheckbox('enable world color modulation');
  UI.AddColorPicker('world color');

  UI.SetValue('MISC', 'GENERAL', 'Hidden cvars', true);
  UI.SetValue('MISC', 'PERFORMANCE & INFORMATION', 'Disable post processing', false);

  Global.RegisterCallback("Draw", "onRender");
}

init();