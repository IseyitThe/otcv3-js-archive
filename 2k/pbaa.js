var master = {
    dir: "back",
    cycle: false,

    ManualLeft: function () { return UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items", "Left") },
    ManualRight: function () { return UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items", "Right") },
    ManualBack: function () { return UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items", "Back") },

    GetYawOffset: function() { return UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset") },
    SetYawOffset: function (yaw) { return UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yaw) },
    GetJitterOffset: function () { return UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset") },
    SetJitterOffset: function (jitter) { return UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", jitter) },

    RandomYaw: function () { return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Yaw offset randomization") },
    RandomJitter: function () { return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Jitter offset randomization") },

    JitterOffsetJitter: function () { return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Jitter offset jitter") },

    aa_arrows: function () { return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "AA Arrows") },
}

var colors = {
    neg: [255, 255, 255, 255],
    pos: [255, 128, 128, 255]
}

function antiaimarrows()
{
    var offset = 30;
    var x = Global.GetScreenSize()[0] / 2, y = Global.GetScreenSize()[1] / 2;

    if (master.aa_arrows)
    {
        Render.String(x - 50, y - 20, 1, "<", master.dir == "left" ? colors.pos : colors.neg, 4);
        Render.String(x, y + 30, 1, "v", master.dir == "back" ? colors.pos : colors.neg, 4);
        Render.String(x + 50, y - 20, 1, ">", master.dir == "right" ? colors.pos : colors.neg, 4);
    }
}

function ui() {
    UI.AddLabel("Ghoul's JS");
    UI.AddSliderInt("Yaw offset randomization", 0, 90);
    UI.AddSliderInt("Jitter offset randomization", 0, 90);
    UI.AddSliderInt("Jitter offset jitter", 0, 90);
    UI.AddHotkey("Left");
    UI.AddHotkey("Back");
    UI.AddHotkey("Right");
    UI.AddCheckbox("AA Arrows");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function jitter() {
    master.cycle = !master.cycle;

    if (master.dir == "left") master.SetYawOffset((master.cycle ? -90 : -90) + getRandomInt(-master.RandomYaw(), master.RandomYaw()));
    else if (master.dir == "back") master.SetYawOffset((master.cycle ? 1 : -1) + getRandomInt(-master.RandomYaw(), master.RandomYaw()));
    else if (master.dir == "right") master.SetYawOffset((master.cycle ? 90 : 90) + getRandomInt(-master.RandomYaw(), master.RandomYaw()));

    master.SetJitterOffset((master.cycle ? (master.JitterOffsetJitter() / 2) * 2 : -(master.JitterOffsetJitter() / 2) * 2) + getRandomInt(-master.RandomJitter(), master.RandomJitter()));
}

function keys() {
    if (master.ManualLeft()) master.dir = "left";
    if (master.ManualRight()) master.dir = "right";
    if (master.ManualBack()) master.dir = "back";
}

var screen_width = Math.round(Global.GetScreenSize()[0]);

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;

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

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

function onDrawEvent() {
    var colors = HSVtoRGB(Global.Realtime() * 0.1, 1, 1);

    Render.GradientRect(0, 0, screen_width / 2, 4, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
    Render.GradientRect(screen_width / 2, 0, screen_width / 2, 4, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.r, colors.g, 255]);
}


function main() {
    ui();
    Global.RegisterCallback("CreateMove", "jitter");
    Global.RegisterCallback("Draw", "onDrawEvent");
    Global.RegisterCallback("Draw", "aaarrow");
    Global.RegisterCallback("Draw", "keys");
} main();