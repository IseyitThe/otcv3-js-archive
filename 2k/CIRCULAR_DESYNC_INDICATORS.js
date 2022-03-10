// UI Elements //
UI.AddLabel("=======INDICATORS V2=======");
UI.AddSliderInt("Circle Radius", 10, 100);
UI.AddSliderInt("Arc Length", 0, 90);
UI.AddSliderInt("Arc Thickness", 0, 30);
UI.AddSliderInt("Segments (Lower = more fps)", 45, 180);
UI.AddCheckbox("Reset Indicator Colors");
UI.AddColorPicker("Circle Color");
UI.AddColorPicker("Real Color");
UI.AddColorPicker("Fake Color");
UI.AddColorPicker("Text Color");
UI.AddLabel("========================");

// Default values //
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Circle Radius", 30);
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Arc Length", 45);
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Arc Thickness", 5);
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Segments (Lower = more fps)", 45);
UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Circle Color", [120, 120, 120, 192]);
UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Real Color", [255, 0, 196, 255]);
UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Fake Color", [170, 128, 255, 255]);
UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Text Color", [255, 0, 196, 255]);

// Settings //
var circle_radius       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Circle Radius");
var arc_length          = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Length");
var arc_thickness       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Thickness");
var arc_precision       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Segments (Lower = more fps)");
var circle_color        = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Circle Color");
var real_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Real Color");
var fake_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Fake Color");
var text_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Text Color");

function update_settings()
{
    circle_radius       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Circle Radius");
    arc_length          = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Length");
    arc_thickness       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Arc Thickness");
    arc_precision       = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Segments (Lower = more fps)");
    circle_color        = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Circle Color");
    real_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Real Color");
    fake_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Fake Color");
    text_color          = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Text Color");

    if(arc_thickness > circle_radius)
        UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Arc Thickness", circle_radius);

    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Reset Indicator Colors"))
    {
        UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Circle Color", [120, 120, 120, 192]);
        UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Real Color", [255, 0, 196, 255]);
        UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Fake Color", [170, 128, 255, 255]);
        UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Text Color", [255, 0, 196, 255]);
        UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Reset Indicator Colors", false)
    }
    
}

function render_arc(x, y, radius, radius_inner, start_angle, end_angle, segments, color)
{
    segments = 360 / segments;

    for (var i = start_angle; i < start_angle + end_angle; i = i + segments)
    {

        var rad = i * Math.PI / 180;
        var rad2 = (i + segments) * Math.PI / 180;

        var rad_cos = Math.cos(rad);
        var rad_sin = Math.sin(rad);

        var rad2_cos = Math.cos(rad2);
        var rad2_sin = Math.sin(rad2);

        var x1_inner = x + rad_cos * radius_inner;
        var y1_inner = y + rad_sin * radius_inner;

        var x1_outer = x + rad_cos * radius;
        var y1_outer = y + rad_sin * radius;

        var x2_inner = x + rad2_cos * radius_inner;
        var y2_inner = y + rad2_sin * radius_inner;

        var x2_outer = x + rad2_cos * radius;
        var y2_outer = y + rad2_sin * radius;

        Render.Polygon( [
            [ x1_outer, y1_outer ],
            [ x2_outer, y2_outer ],
            [ x1_inner, y1_inner ] ],
            color
        );

        Render.Polygon( [
            [ x1_inner, y1_inner ],
            [ x2_outer, y2_outer ],
            [ x2_inner, y2_inner ] ],
            color
        );
    }
}

function adjust_angle(angle)
{
    if(angle < 0)
    {
        angle = (90 + angle * (-1));
    }
    else if(angle > 0)
    {
        angle = (90 - angle);
    }

    return angle;
}

function main()
{
    var local_player = Entity.GetLocalPlayer();

    if(!Entity.IsAlive(local_player))
        return;

    update_settings();

    var screen_size     = Render.GetScreenSize();
    var screen_middle_x = screen_size[0] * 0.5;
    var screen_middle_y = screen_size[1] * 0.5;

    var view_angles = Local.GetViewAngles();

    var real_yaw = Local.GetRealYaw();
    var fake_yaw = Local.GetFakeYaw();
    var view_yaw = view_angles[1] - 180;
  
    var real = adjust_angle(real_yaw - view_yaw);
    var fake = adjust_angle(fake_yaw - view_yaw);
    
    render_arc(screen_middle_x, screen_middle_y, circle_radius, circle_radius - arc_thickness, 1, 360, arc_precision, circle_color);

    render_arc(screen_middle_x, screen_middle_y, circle_radius, circle_radius - arc_thickness, fake - (arc_length * 0.5), arc_length, arc_precision, fake_color);
    render_arc(screen_middle_x, screen_middle_y, circle_radius, circle_radius - arc_thickness, real - (arc_length * 0.5), arc_length, arc_precision, real_color);

    var double_tap_color = UI.IsHotkeyActive( "Rage", "GENERAL", "Exploits", "Doubletap" ) ? text_color : circle_color;
    var hide_shots_color = UI.IsHotkeyActive( "Rage", "GENERAL", "Exploits", "Hide shots" ) ? text_color : circle_color;
    var safe_point_color = UI.IsHotkeyActive( "Rage", "GENERAL", "General", "Force safe point" ) ? text_color : circle_color;

    var text_offset = screen_middle_y + circle_radius;
    var text_spacing = screen_size[1] * 0.0185185185;

    Render.String(screen_middle_x, text_offset + text_spacing, 1, "ON-SHOT", hide_shots_color);
    Render.String(screen_middle_x, text_offset + (text_spacing * 2), 1, "DOUBLE TAP", double_tap_color);
    Render.String(screen_middle_x, text_offset + (text_spacing * 3), 1, "SAFE POINT", safe_point_color);
}

Cheat.RegisterCallback("Draw", "main");