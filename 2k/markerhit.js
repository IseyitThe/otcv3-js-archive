const enabled = UI.AddCheckbox("Draw tracers");

const tracer_color = UI.AddColorPicker("Tracer color");
const xhair_color = UI.AddColorPicker("Crosshair color");

var bullets = [];

function IsPointInsideScreen(point) {
  const screen_size = Render.GetScreenSize();
  return point[0] >= 0 && point[1] >= 0 && point[1] <= screen_size[1] && point[0] <= screen_size[0];
}

function onDraw() {
  if (!UI.GetValue.apply(null, enabled))
      return;

  const colors = {
    tracer: UI.GetColor.apply(null, tracer_color),
    xhair: UI.GetColor.apply(null, xhair_color)
  };

  for (var i = 0; i < bullets.length; i++) {
    const data = bullets[i];

    if (data.anim_time === 1) {
      bullets.splice(i, 1);
      continue;
    }

    bullets[i].anim_time = Math.min(bullets[i].anim_time + Globals.Frametime() * 0.25, 1);

    const from_wts = Render.WorldToScreen(data.from), to_wts = Render.WorldToScreen(data.to);
    
    if (!from_wts || !to_wts)  continue;
    if (!IsPointInsideScreen(from_wts) || !IsPointInsideScreen(to_wts))  continue;

    Render.Line(from_wts[0], from_wts[1], to_wts[0], to_wts[1], [colors.tracer[0], colors.tracer[1], colors.tracer[2], colors.tracer[3] * (1 - data.anim_time)]);
    Render.Line(to_wts[0] - 5, to_wts[1], to_wts[0] + 5, to_wts[1], [colors.xhair[0], colors.xhair[1], colors.xhair[2], colors.xhair[3] * (1 - data.anim_time)]);
    Render.Line(to_wts[0], to_wts[1] - 5, to_wts[0], to_wts[1] + 5, [colors.xhair[0], colors.xhair[1], colors.xhair[2], colors.xhair[3] * (1 - data.anim_time)]);
  }
}

function onBulletImpact() {
  if (!UI.GetValue.apply(null, enabled))
      return;

  const me = Entity.GetLocalPlayer();
  const userid = Entity.GetEntityFromUserID(Event.GetInt("userid"));
  
  if (me !== userid)
    return;

  const x = Event.GetFloat("x"), y = Event.GetFloat("y"), z = Event.GetFloat("z");
  const eye_pos = Entity.GetEyePosition(me);
  
  bullets.push({
    anim_time: 0,
    from: eye_pos,
    to: [x, y, z]
  });
}

Cheat.RegisterCallback("Draw", "onDraw");
Cheat.RegisterCallback("bullet_impact", "onBulletImpact");