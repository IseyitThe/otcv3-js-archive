Render.StringOutlined = function( x, y, align, text, color, font) {
    Render.StringCustom( x + 1, y, align, text, [0, 0, 0, 255], font )
    Render.StringCustom( x - 1, y, align, text, [0, 0, 0, 255], font )
    Render.StringCustom( x, y + 1, align, text, [0, 0, 0, 255], font )
    Render.StringCustom( x, y - 1, align, text, [0, 0, 0, 255], font )
    Render.StringCustom( x, y, align, text, color, font )
}
const get_velocity = function(index) {
    const velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}
const onDraw = function() {
    const x = Global.GetScreenSize()[0] / 2, y = Global.GetScreenSize()[1] - 19;
    const font = Render.AddFont("Small Fonts", 5, 100);
    const font1 = Render.AddFont("Small Fonts", 8, 800);
    const fps = Math.floor(1 / Global.Frametime());
    const ping = Math.round(Local.Latency( ) * 1000 - 16);
    const velocity = get_velocity(Entity.GetLocalPlayer());
    const speed = Math.round(velocity);
    if(ping < 1) ping = 0; if(!speed) speed = 0;
    Render.GradientRect(x - 250, y, 250, 19, 1, [40, 40, 40, 0], [0, 0, 0, 90]);
    Render.GradientRect(x, y, 250, 19, 1, [0, 0, 0, 90], [40, 40, 40, 0]);
    Render.StringOutlined(x - 117, y + 2, 1, "" + ping, [149, 255, 0, 255], font1);
    Render.StringOutlined(x - 95, y + 4, 1, "PING", [255, 255, 255, 255], font);
    Render.StringOutlined(x - 13, y + 2, 1, "" + fps, [149, 255, 0, 255], font1);
    Render.StringOutlined(x + 10, y + 4, 1, "FPS", [255, 255, 255, 255], font);
    Render.StringOutlined(x + 75, y + 2, 1, "" + speed, [185, 185, 185, 255], font1);
    Render.StringOutlined(x + 105, y + 4, 1, "SPEED", [255, 255, 255, 255], font);
}
Cheat.RegisterCallback("Draw", "onDraw");