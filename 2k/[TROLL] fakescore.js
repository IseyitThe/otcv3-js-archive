UI.AddSliderInt("how to fake gamesense - woof", 0, 0);
function getCustomValue(name) {
  var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", name);

  return value;
}

function handler() {
  if (Global.FrameStage() != 2) {
    return;
  }

  var me = Entity.GetLocalPlayer();

  if (!getCustomValue('enable fake-score')) {
    return;
  }
 
  if (getCustomValue('kills') !== 0) {
    Entity.SetProp(me, 'CPlayerResource', 'm_iKills', getCustomValue('kills'));
  }

  if (getCustomValue('deaths') !== 0) {
    Entity.SetProp(me, 'CPlayerResource', 'm_iDeaths', getCustomValue('deaths'));
  }

  if (getCustomValue('assists') !== 0) {
    Entity.SetProp(me, 'CPlayerResource', 'm_iAssists', getCustomValue('assists'));
  }
}

function main() {
  UI.AddCheckbox('enable fake-score');

  UI.AddSliderInt('kills', 69,420, 2137);
  UI.AddSliderInt('assists', 69,420, 2137);
  UI.AddSliderInt('deaths', 69, 420, 2137);

  Global.RegisterCallback('FrameStageNotify', 'handler');
}

main();