UI.AddCheckbox("Enable riN");
UI.AddLabel("#                Anti-Aimbot                 #")
UI.AddCheckbox("Adjust Anti-Aimbot");
UI.AddHotkey("Anti-Aimbot Side Switch");
UI.AddLabel("#                Lag Amount                  #");
UI.AddCheckbox("Adjust Lag Amount");
UI.AddCheckbox("log");
function get_velocity() {
    velocity = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_vecVelocity[0]");
    speed = Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
    return speed;
}
function rand_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var death_angles = [];
var wish = { 
    real: 0,
    fake: 0,
    lby: 0,
    side: 0,
    limit: 0
};
var local = {
    real: 0,
    fake: 0,
    duck_amount: 0,
    shifting: false,
    in_air: false
};
var globals = {
    tick_count: 0,
    cur_time: 0,
    debug: true
}
function update() {
    globals.tick_count = Globals.Tickcount();
    globals.cur_time = Globals.Curtime();
    local.real = Math.floor(Local.GetRealYaw());
    local.fake = Math.floor(Local.GetFakeYaw());
    local.duck_amount = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_flDuckAmount");
}
function set_wish_angles() {
    AntiAim.SetOverride(1);
    AntiAim.SetRealOffset(wish.real);
    AntiAim.SetFakeOffset(wish.fake);
    AntiAim.SetLBYOffset(wish.lby);
}
function handle_hotkeys() {
    wish.side = UI.IsHotkeyActive("Misc", "Javascript", "Script items", "Anti-Aimbot Side Switch") ? 1 : 0;
    local.shifting = Input.IsKeyPressed(0x10) ? true : false;// ensure you use misc->accurate walk
    local.in_air = Input.IsKeyPressed(0x20) ? true : false; // ¯\_(ツ)_/¯
}
function adjust_antiaim() {
    if (!UI.GetValue("Misc", "Javascript", "Script items", "Adjust Anti-Aimbot"))
        return;
    
    if (local.shifting && get_velocity() > 1.11) {
        wish.lby = -140;
        wish.real = globals.tick_count % 2 ? rand_int(-55, -22) : rand_int(22, 55);
    }
    else {
        if (wish.side == 0) {
            wish.lby = 120;
            wish.real = globals.tick_count % 12 ? wish.real : wish.real - 11;
            if (wish.real <= -55)
                wish.real = 32;
            if (wish.real == 21)
                wish.real = -33;
        }
        else if (wish.side == 1) {
            wish.lby = -120;
            wish.real = globals.tick_count % 12 ? wish.real : wish.real + 11;           
            if (wish.real >= 55)
                wish.real = -32;
            if (wish.real == -21)
                wish.real = 33;
        }
    }
    set_wish_angles();
}
function adjust_lag() {
    if (!UI.GetValue("Misc", "Javascript", "Script items", "Adjust Lag Amount"))
        return;
    if (local.in_air) {
        distance_per_tick = get_velocity() * Globals.TickInterval();
        choked_ticks = Math.ceil(64.0 / distance_per_tick);
        wish.limit = Math.min(choked_ticks, 16);
    } else {
        wish.limit = rand_int(1, 9);
    }
    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", wish.limit);
}
function player_death() {
    death_angles.push(wish.real);
}
function create_move() {
    if (!UI.GetValue("Misc", "Javascript", "Script items", "Enable riN"))
        return;
    update();
    handle_hotkeys();
    adjust_antiaim();
    adjust_lag();
    if (UI.GetValue("log"))
        Cheat.Print("#"+death_angles.toString() + "#\n");
}
function draw() {
    if (!UI.GetValue("Misc", "Javascript", "Script items", "Enable riN") || !globals.debug)
        return;
    
    font = Render.AddFont("Verdana", 10, 100);
    Render.FilledRect(300, 14, 270, 62, [200, 200, 200, 255]);
    Render.StringCustom( 
        301, 12, 0,
        "wish.real " + wish.real,
        [0, 0, 0, 255], font 
    );
    Render.StringCustom( 
        301, 24, 0,
        "wish.fake " + wish.fake,
        [0, 0, 0, 255], font 
    );
    Render.StringCustom( 
        301, 36, 0,
        "wish.lby " + wish.lby,
        [0, 0, 0, 255], font 
    );
    Render.StringCustom( 
        301, 48, 0,
        "wish.side " + wish.side,
        [0, 0, 0, 255], font 
    );
    Render.StringCustom( 
        301, 60, 0,
        "wish.limit " + wish.limit,
        [0, 0, 0, 255], font 
    );
    Render.StringCustom( 
        420, 12, 0,
        "local.real " + local.real,
        [0, 0, 0, 255], font 
    );
    Render.StringCustom( 
        420, 24, 0,
        "local.fake " + local.fake,
        [0, 0, 0, 255], font 
    );
    Render.StringCustom( 
        420, 36, 0,
        "local.duck_amount " + local.duck_amount.toFixed(1),
        [0, 0, 0, 255], font 
    );
    Render.StringCustom( 
        420, 48, 0,
        "local.shifting " + local.shifting.toString(),
        [0, 0, 0, 255], font 
    );
    Render.StringCustom( 
        420, 60, 0,
        "local.in_air " + local.in_air.toString(),
        [0, 0, 0, 255], font 
    );
}
Cheat.RegisterCallback("CreateMove", "create_move");
Cheat.RegisterCallback("Draw", "draw");
Cheat.RegisterCallback("player_death", "player_death");