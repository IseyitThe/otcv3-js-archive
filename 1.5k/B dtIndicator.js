
function clamp(v, min, max)
{
    return Math.min(Math.max(v, min), max);
}

/**
 * @class vec3_t
 * @description Vector3D
*/
const vec3_t = {
    new: function(x, y, z) { return {x: x, y: y, z: z} },

    add: function(vec1, vec2) { return { x: vec1.x + vec2.x, y: vec1.y + vec2.y, z: vec1.z + vec2.z } },

    sub: function(vec1, vec2) { return { x: vec1.x - vec2.x, y: vec1.y - vec2.y, z: vec1.z - vec2.z } },

    multiply: function(vec1, vec2) { return { x: vec1.x * vec2.x, y: vec1.y * vec2.y, z: vec1.z * vec2.z } },

    divide: function(vec1, vec2) { return { x: vec1.x / vec2.x, y: vec1.y / vec2.y, z: vec1.z / vec2.z } }
};

/**
 * @class col_t
 * @description RBGA Colors
 */
const col_t = {
    new: function(r, g, b, a) { return {r: r, g: g, b: b, a: a}},
    unpack: function(col) { return [col.r, col.g, col.b, col.a]},
    shift: function(color, dst, dur) {
        if (!color.r || !dst.r)
            return;

        const inc = ((1 / dur) * Global.Frametime()) * 255;
        const is_color_equal = function(col1, col2) {
            return (col1.r === col2.r) && (col1.g === col2.g) && (col1.b === col2.b) && (col1.a === col2.a);
        };

        if (is_color_equal(color, dst))
            return color;

        // Best code I've ever made.
        if (color.r > dst.r)
        {
            color.r = clamp(color.r - inc, dst.r, 255);
        }

        if (color.r < dst.r)
        {
            color.r = clamp(color.r + inc, 0, dst.r);
        }

        if (color.g > dst.g)
        {
            color.g = clamp(color.g - inc, dst.g, 255);
        }

        if (color.g < dst.g)
        {
            color.g = clamp(color.g + inc, 0, dst.g);
        }

        if (color.b > dst.b)
        {
            color.b = clamp(color.b - inc, dst.b, 255);
        }

        if (color.b < dst.b)
        {
            color.b = clamp(color.b + inc, 0, dst.b);
        }

        if (color.a > dst.a)
        {
            color.a = clamp(color.a - inc, dst.a, 255);
        }

        if (color.a < dst.a)
        {
            color.a = clamp(color.a + inc, 0, dst.a);
        }

        return color;
    }
};

const rad2deg = function(rad) {
    return (rad * 180) / Math.PI;
};

const deg2rad = function(deg) {
    return (deg * Math.PI) / 180;
};

//endregion

// Create our color value
var draw_color = col_t.new(145, 160, 251, 200);

function indicator()
{
    // Check whether the script is on or not

    // Initiate dormant and active colors
    const colors = {
        blue: col_t.new(145, 160, 251, 225),
        red: col_t.new(235, 90, 80, 255)
    };

    // Get drawing properties
    const x = Global.GetScreenSize()[0], y = Global.GetScreenSize()[1];

    // Render indicator
    Render.String(50, y - 124, 0, "DT", [2, 2, 2, 225], 4);
    Render.String(50, y - 125, 0, "DT", col_t.unpack(draw_color), 4);
    Render.FilledRect( 50, y - 90, 36, 3, [2, 2, 2, 125]);
    Render.FilledRect( 50, y - 90, (draw_color.r - 145) * 96 / 235, 3, col_t.unpack(colors.red));

    // Check whether the script is on or not
    if (!(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")))
    {
		
        // Shifts to the dormant color
        draw_color = col_t.shift(draw_color, colors.blue, 0.5);
        return;
    }

    // Shifts to the active color
    draw_color = col_t.shift(draw_color, colors.red, 1.25);

}

Global.RegisterCallback("Draw", "indicator");