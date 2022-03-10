//region menu
UI.AddCheckbox("Enable Predict targeted hitbox");
//endregion

//region functions
//region Render
Render.FadedCircle = function(x, y, radius, color) {
    const step = color[3] / radius;

    for (var i = 0; i <= radius; i++) {
        Render.FilledCircle(x, y, i, [color[0], color[1], color[2], color[3] - step * i]);
    }
}
//endregion

//region Math
function radToDeg(radians) {
    return radians * 180 / Math.PI;
}
//endregion

//region Utilities
var Cache = {
    values: []
};

Cache.InvokeCallback = function(label, state, func, args) {
    if (this.values[label] == null)
        this.values[label] = null;
    
    if (this.values[label] === state)
        return;
    
    this.values[label] = state;

    func.apply(null, args);
}
//endregion

//region Targeting
var Targeting = {
    currentData: {target: null, hitbox: 0, last_hitbox: -1},
    
    hitboxMap: [6, 5, 4, 3, 2],

    weaponId: [
        [2, 3, 4, 30, 32, 36, 61, 63],
        [1, 64],
        [40],
        [9],
        [11, 38]
    ],
    
    configuration: [
        "GENERAL",
        "PISTOL",
        "HEAVY PISTOL",
        "SCOUT",
        "AWP",
        "AUTOSNIPER"
    ],

    HITBOX: {
        "UNSURE": -1,
        "BODY": 3,
        "HEAD": 0
    }
};

Targeting.FindOptimalTarget = function() {
    const players = Entity.GetEnemies();
    const me = Entity.GetLocalPlayer();

    if (!me || !Entity.IsAlive(me))
        return null;

    const eye_position = Entity.GetEyePosition(me);
    const view_angles = Local.GetViewAngles();

    var data = {fov: 180, id: null};

    for (var i = 0; i < players.length; i++) {
        const e = players[i];

        if (!Entity.IsAlive(e) || Entity.IsDormant(e))
            continue;

        const head_position = Entity.GetHitboxPosition(e, 0);
        const sub = [head_position[0] - eye_position[0], head_position[1] - eye_position[1], head_position[2] - eye_position[2]];
        
        const pitch = -radToDeg(Math.atan2(sub[2], Math.sqrt(sub[0] ** 2 + sub[1] ** 2)));
        const yaw = radToDeg(Math.atan2(sub[1], sub[0]));

        const delta_x = Math.abs(view_angles[0] - pitch);
        const delta_y = Math.abs(view_angles[1] % 360 - yaw % 360) % 360;

        const fov = Math.sqrt(delta_x * delta_x + delta_y * delta_y);

        if (fov < data.fov) {
            data.fov = fov;
            data.id = e;
        }
    }

    return data.id;
}

Targeting.GetNextTargetedHitbox = function(e) {
    if (!e)
        return this.HITBOX.UNSURE;

    const me = Entity.GetLocalPlayer();
    const wpn = Entity.GetWeapon(me);

    if (!me || !wpn)
        return this.HITBOX.UNSURE;

    const eye_position = Entity.GetEyePosition(me);
    
    const wpn_id = Entity.GetProp(wpn, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF;
    const tab = "GENERAL";

    for (var i = 0; i < this.weaponId.length; i++)
        for (var j = 0; j < this.weaponId[i].length; j++)
            if (this.weaponId[i][j] === wpn_id)
                tab = this.configuration[i+1];

    const prefer_baim = UI.GetValue("Rage", tab, "Accuracy", "Prefer body aim");
    const is_head_aiming = UI.GetValue("Rage", tab, "Targeting", "Hitboxes") & (1 << 0);

    if (prefer_baim)
        return this.HITBOX.BODY;
        
    if (!is_head_aiming)
        return this.HITBOX.BODY;
        
    const head = Trace.Bullet(me, e, eye_position, Entity.GetHitboxPosition(e, 0));
    const stomach = Trace.Bullet(me, e, eye_position, Entity.GetHitboxPosition(e, 3));
    const health = Entity.GetProp(e, "CBasePlayer", "m_iHealth");

    /*for (var i = 0; i < this.hitboxMap.length; i++) {
        const body_dmg = Trace.Bullet(me, e, eye_position, Entity.GetHitboxPosition(e, this.hitboxMap[i]))[1];

        if (body_dmg > dmg)
            return this.HITBOX.BODY;
    }*/

    if (!head[2] && this.currentData.last_hitbox === 0)
    {
        if (health < 25)
            return this.HITBOX.BODY;

        return this.HITBOX.HEAD;
    }

    this.currentData.last_hitbox = -1;

    if (health < stomach[1])
    {
        return this.HITBOX.BODY;
    }            

    return this.HITBOX.HEAD;
}
//endregion

//region Callbacks
function hkCreateMove() {
    const enabled = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Predict targeted hitbox");

    if (!enabled)
        return;

    const target = Targeting.FindOptimalTarget();
    const hitbox = Targeting.GetNextTargetedHitbox(target);

    Targeting.currentData.target = target;
    Targeting.currentData.hitbox = hitbox;
}

function hkRagebotFire() {
    const enabled = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Predict targeted hitbox");

    if (!enabled)
        return;

    const target = Event.GetInt("target_index");

    if (target !== Targeting.currentData.target)
        return;
    
    Targeting.currentData.last_hitbox = Event.GetInt("hitbox");
}

function hkDraw() {
    const enabled = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Predict targeted hitbox");

    if (!enabled)
        return;
    
    const me = Entity.GetLocalPlayer();

    if (!me || !Entity.IsAlive(me))
        return;

    if (!Targeting.currentData.target || !Entity.IsAlive(Targeting.currentData.target) || Targeting.currentData.hitbox < 0)
        return;

    const wts = Render.WorldToScreen(Entity.GetHitboxPosition(Targeting.currentData.target, Targeting.currentData.hitbox));
    const ssize = Render.GetScreenSize();

    if (!wts)
        return;

    if (wts[0] < 0 || wts[0] > ssize[0] || wts[1] < 0 || wts[1] > ssize[1])
        return;
    
    Render.FadedCircle(wts[0], wts[1], 15, [25, 10, 230, 75]);
}

Cheat.RegisterCallback("CreateMove", "hkCreateMove");
Cheat.RegisterCallback("Draw", "hkDraw");
Cheat.RegisterCallback("ragebot_fire", "hkRagebotFire");
//endregion
//endregion