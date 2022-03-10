function get_velocity(index) {
    var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

function onDraw() {
    var screen = Global.GetScreenSize(),
    x = screen[0] / 2, y = screen[1]  - 17;
    var font = Render.AddFont("Verdana", 6, 800);
    var font1 = Render.AddFont("Verdana", 7, 800);
    var fps = Math.floor(1 / Global.Frametime());
    var ping = Math.round(Local.Latency( ) * 1000 - 16)
    var velocity = get_velocity(Entity.GetLocalPlayer());
    var speed = Math.round(velocity);

    Render.GradientRect(x - 250, y, 250, 17, 1, [40, 40, 40, 0], [0, 0, 0, 90]);
    Render.GradientRect(x, y, 250, 17, 1, [0, 0, 0, 90], [40, 40, 40, 0]);

    Render.StringCustom(x - 100, y + 1, 1, "" + ping, [149, 255, 0, 255], font1);
    Render.StringCustom(x - 80, y + 2, 1, "ping", [185, 185, 185, 255], font);

    Render.StringCustom(x - 18, y + 1, 1, "" + fps, [149, 255, 0, 255], font1);
    Render.StringCustom(x, y + 2, 1, "fps", [185, 185, 185, 255], font);

    Render.StringCustom(x + 75, y + 1, 1, "" + speed, [149, 255, 0, 255], font1);
    Render.StringCustom(x + 100, y + 2, 1, "speed", [185, 185, 185, 255], font);
}
Global.RegisterCallback("Draw", "onDraw")