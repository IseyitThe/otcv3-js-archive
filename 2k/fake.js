//import "api.js"
var screen_size = Global.GetScreenSize();
var x0 = screen_size[0] / 2, y0 = screen_size[1] / 2;
function arc(x, y, radius, start_angle, end_angle, color) {
    var radius_inner = radius - 3;
    for (var i = start_angle; i < start_angle + end_angle; i++) {
        var rad = i * Math.PI / 180;
        var rad2 = (i + 1) * Math.PI / 180;
        var rad_cos = Math.cos(rad)
        var rad_sin = Math.sin(rad)
        var rad2_cos = Math.cos(rad2);
        var rad2_sin = Math.sin(rad2);
        var x1_outer = x + rad_cos * radius;
        var y1_outer = y + rad_sin * radius;
        var x2_outer = x + rad2_cos * radius;
        var y2_outer = y + rad2_sin * radius;
        var x1_inner = x + rad_cos * radius_inner;
        var y1_inner = y + rad_sin * radius_inner;
        var x2_inner = x + rad2_cos * radius_inner;
        var y2_inner = y + rad2_sin * radius_inner;
        Render.Polygon([
            [x1_outer, y1_outer],
            [x2_outer, y2_outer],
            [x1_inner, y1_inner]
        ], color[3] > 0 ? color : [0, 0, 0, 0]);
        Render.Polygon([
            [x1_inner, y1_inner],
            [x2_outer, y2_outer],
            [x2_inner, y2_inner]
        ], color[3] > 0 ? color : [0, 0, 0, 0]);
    }
}
function _circle(x, y, val, color) {
    arc(x, y, 11.6, 0, 360, [0, 0, 0, color[3] > 15 ? 196 : 0])
    arc(x, y, 11.6, 0, val - 1, color)
}
function normalize_yaw(angle) {
    var adj = angle;
    if (adj < -180) adj += 360;
    if (adj > 180) adj -= 360;
    return adj;
}
function render() {
    var delta = Math.abs(normalize_yaw(Local.GetRealYaw() - Local.GetFakeYaw())) / 2;
    var angle = (delta / 60);
    var max_angle = angle > 0.9;
    _circle(700 + Render.TextSize("FAKE", 2)[0], y0 + -18 + Render.TextSize("FAKE", 1)[1] / 2 + 8.5, 361 * angle, [135, 196, 13, max_angle ? 255 : 196]);
}
Global.RegisterCallback("Draw", "render");