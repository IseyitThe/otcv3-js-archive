/*
 *
 * Customer: momi#1276
 * Author: april#0001
 *
 */

//region dependencies
function safe_concat(a, b)
{
    var arr = [];

    for (var k in a)
        arr.push(a[k]);

    if (b instanceof Array)
    {
        for (var k in b)
            arr.push(b[k]);

        return arr;
    }

    arr.push(b);
    return arr;
}

function call(func, name, props)
{
    func.apply(null, safe_concat([name], props));
    return name;
}

function get(path, color, hotkey)
{
    if (color && hotkey)
        throw new Error("This element's type converges!");

    const func = color ? UI.GetColor : (hotkey ? UI.IsHotkeyActive : UI.GetValue);

    if (path instanceof Array)
        return func.apply(null, path);

    return func.apply(null, ["Script items", path]);
}

function set(path, value)
{
    const func = (value instanceof Array) ? UI.SetColor : UI.SetValue;

    if (path instanceof Array)
       return func.apply(null, safe_concat(path, value));

   func.apply(null, safe_concat(path, value));
}

function visible(path, value)
{
    if (path instanceof Array)
       return UI.SetEnabled.apply(null, safe_concat(path, value));

   UI.SetEnabled.apply(null, safe_concat(["Script items", path], value));
}

const deg2rad = function(deg) {
    return deg * Math.PI / 180;
}

const normalize_yaw = function(angle) {
    var adjusted_yaw = angle;

    if (adjusted_yaw < -180)
        adjusted_yaw += 360;

    if (adjusted_yaw > 180)
        adjusted_yaw -= 360;

    return adjusted_yaw;
}

//endregion

//region menu
const enable = call(UI.AddHotkey, "| Ideal yaw", []);

const disable_in_air = call(UI.AddCheckbox, "| Disable while in air", []);
const precision = call(UI.AddDropdown, "| Precision", [["Low", "Normal", "High"]]);
const extension = call(UI.AddSliderInt, "| Extension", [0, 5]);

const indicators = call(UI.AddCheckbox, "| Render indicators", []);

const ref_yaw_offset = ["Anti-Aim", "Rage Anti-Aim", "Yaw offset"];
const ref_at_targets = ["Anti-Aim", "Rage Anti-Aim", "At targets"];
const ref_fakeduck = ["Anti-Aim", "Extra", "Fake duck"];
//endregion

//region locals
const callback = Cheat.RegisterCallback;
const local_player = Entity.GetLocalPlayer, alive = Entity.IsAlive, eye_position = Entity.GetEyePosition, get_prop = Entity.GetProp;
const view_angles = Local.GetViewAngles;
const cos = Math.cos, sin = Math.sin;
const trace = Trace.Line;
const charge = Exploit.GetCharge;
const render_string = Render.String, screen_size = Render.GetScreenSize;
//endregion

//region locals
const steps = [7, 13, 21];
const distances = [64, 102, 140, 179, 217, 256];

const modules = [
    {ref: enable, label: "IDEAL YAW", colors: {active: [235, 145, 30, 255], dormant: [135, 50, 50, 255]}, is_hotkey: true},
    {ref: indicators, label: "DYNAMIC", colors: {active: [200, 151, 239, 255], dormant: [145, 120, 140, 255]}, is_hotkey: false},
    {ref: ["Rage", "GENERAL", "Exploits", "Doubletap"], label: "DT", colors: {active: [90, 180, 75, 255], dormant: [135, 50, 50, 255]}, is_hotkey: false},
    
];

var current_side = 0;
var once = true;
//endregion

//region functions
const get_closest_edge = function() {
    current_side = 0;

    if (!get(enable, false, true)) {
        if (once) {
            once = false;
            set(ref_yaw_offset, 1);
            set(ref_at_targets, false);
        }

        return;
    }

    once = true;

    const me = local_player();

    if (!me || !alive(me))
        return;

    const flags = get_prop(me, "CBasePlayer", "m_fFlags");

    if (!(flags & 1) && get(disable_in_air)) {
        set(ref_yaw_offset, 0);
        set(ref_at_targets, false);
        return;
    }

    set(ref_at_targets, true);

    const step = steps[get(precision)];
    const distance = distances[get(extension)];

    const eye_pos = eye_position(me);
    const angles = view_angles()[1];

    var data = {left: 0, right: 0};
    var side = "left";

    for (var i = angles - 90; i < angles + 90; i += 180 / step) {
        const rot = deg2rad(i);

        if (i > angles)
            side = "right";

        const point = [
            eye_pos[0] + distance * cos(rot),
            eye_pos[1] + distance * sin(rot),
            eye_pos[2]
        ];

        const fraction = trace(me, eye_pos, point)[1];

        data[side] += fraction;
    }

    data.left /= step;
    data.right /= step;

    if (data.left > 0.5 && data.right > 0.5)
    {
        set(ref_yaw_offset, 0);
        return;
    }

    var offset = data.left > data.right ? -25 : 25;

    current_side = offset > 5 ? 2 : 5;

    set(ref_yaw_offset, offset);
}

const do_indicators = function() {
    if (!get(indicators, false, false))
       return;



    const x = screen_size()[0], y = screen_size()[1];
 

   render_string(x / 2 + 0, y / 2 - -14, 1, "", [135,206,250 , 255] , 4);

 
   render_string(x / 2 - 50, y / 2 - 19, 1, "<", current_side === 1 ? [235, 145, 30, 255] : [200, 200, 200, 255], 4);
   render_string(x / 2 + 50, y / 2 - 19, 1, ">", current_side === 2 ? [235, 145, 30, 255] : [200, 200, 200, 255], 4);


    for (var i = 0; i < modules.length; i++) {
        const current = modules[i];

        const active = get(current.ref, false, current.is_hotkey);
        const label = current.label;

        if (i === 2) {
            const is_fakeducking = get(ref_fakeduck, false, true);
            const is_charged = charge() === 1;
           
		   if (!is_charged && active)
                label = "";

            if (is_fakeducking && active)
                label = "DT (fakeducking)";
			

            active = active && !is_fakeducking && is_charged;
        }

        const color = active ? current.colors.active : current.colors.dormant;

        render_string(x / 2, y / 2 + 50 + i * 10, 0, label, color, 3);
    }
}


callback("CreateMove", "get_closest_edge");
callback("Draw", "do_indicators");

//endregion
