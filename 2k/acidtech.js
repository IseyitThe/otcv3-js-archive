const get = {
        value(S) {
            return UI.GetValue("Script items", S);
        },
        text(S) {
            return UI.GetString("Script items", S);
        },
        color(S) {
            return UI.GetColor("Script items", S);
        },
        on_map() {
            return World.GetServerString();
        },
        is_menu() {
            return UI.IsMenuOpen();
        },
        inverter() {
            return UI.IsHotkeyActive("Anti-Aim", "Fake angels", "Inverter");
        }
    },
    set = {
        enabled(S, A) {
            return UI.SetEnabled("Script items", S, A);
        },
        value(S, A) {
            return UI.SetValue("Script items", S, A);
        },
        color(S, A) {
            return UI.SetColor("Script items", S, A);
        }
    },
    add = {
        hotkey(S) {
            return UI.AddHotkey(S);
        },
        checkbox(S) {
            return UI.AddCheckbox(S);
        },
        textbox(S) {
            return UI.AddTextbox(S);
        },
        colorpicker(S) {
            return UI.AddColorPicker(S);
        },
        slider_int(S, A, E) {
            return UI.AddSliderInt(S, A, E);
        },
        slider_float(S, A, E) {
            return UI.AddSliderFloat(S, A, E);
        },
        drowpown(S, A) {
            return UI.AddDropdown(S, A);
        }
    },
    cheat = {
        register_callback(S, A) {
            return Cheat.RegisterCallback(S, A);
        }
    },
    menu_setup = function() {
        const S = get.value("         ACID - YAW"),
            A = S == 0,
            E = S == 1,
            b = S == 2,
            R = S == 3;
        set.enabled("override damage key", A), set.enabled("override damage value", A), set.enabled("override hitchance in noscope", A), set.enabled("override hitchance in air [ssg / r8]", A), set.enabled("strafer speed", A), set.enabled("faster recharge", A), set.enabled("safe point on limbs", A), set.enabled("DT peek helper [ssg / awp]", A), set.enabled("noscope only [scar20 / g3sg1]", A), set.enabled("body yaw type", E), set.enabled("real offset", E), set.enabled("lby offset", E), set.enabled("low delta on slow-walk", E), set.enabled("at targets in air", E), set.enabled("Left", E), set.enabled("Right", E), set.enabled("Off", E), set.enabled("thirdperson", b), set.enabled("arrows", b), set.enabled("hitlogs", b), set.enabled("keybinds", b), set.enabled("fake indicator", b), set.enabled("watermark", b), set.enabled("watermark username", b), set.enabled("color", R), set.enabled("load default config", R);
    },
    preset = function() {
        get.value("load default config") && (set.color("color", [122, 112, 250, 100]), set.value("override damage value", 7), set.value("override hitchance in noscope", 30), set.value("override hitchance in air [ssg / r8]", 39), set.value("strafer speed", 290), set.value("safe point on limbs", ![]), set.value("DT peek helper [ssg / awp]", !![]), set.value("noscope only [scar20 / g3sg1]", !![]), set.value("body yaw type", 2), set.value("real offset", 23), set.value("lby offset", 31), set.value("low delta on slow-walk", ![]), set.value("at targets in air", !![]), set.value("thirdperson", 82), set.value("hitlogs", !![]), set.value("keybinds", !![]), set.value("fake indicator", !![]), set.value("watermark", !![])), set.value("load default config", ![]);
    };
var logs = [];
const log = function(S, A, E) {
        this.text = S, this.time = A, this.alpha = E;
    },
    hitboxes = ["generic", "head", "chest", "stomach", "left arm", "right arm", "left leg", "right leg", "body"],
    get_velocity = function(S) {
        const A = Entity.GetProp(S, "CBasePlayer", "m_vecVelocity[0]");
        return Math.sqrt(A[0] * A[0] + A[1] * A[1]);
    },
    random = function(S, A) {
        var S = Math.ceil(S),
            A = Math.floor(A);
        return Math.floor(Math.random() * (A - S + 1)) + S;
    },
    render_circle = function(S, A, E, b, R, H, t) {
        for (var h = R; h < R + H; h++) {
            const Z = h * Math.PI / 180;
            Render.Line(S + Math.cos(Z) * E, A + Math.sin(Z) * E, S + Math.cos(Z) * b, A + Math.sin(Z) * b, t);
        }
    },
    adaptive_renderbox = function(S, A, E, b, R) {
        Render.GradientRect(S - E - 10, A + 1, E - .5, 18, 0, [25, 25, 25, 100], [0, 0, 0, 0]), Render.StringCustom(S + 4 - E - 10, A + 2, 0, b, [255, 255, 255, 255], R), Render.GradientRect(S - E - 10, A, E / 2, 1, 1, [55, 177, 218, 255], [203, 70, 205, 255]), Render.GradientRect(S + E / 2 - E - 10, A, E / 2, 1, 1, [203, 70, 205, 255], [204, 227, 53, 255]);
    },
    dt_peek_helper = function(S) {
        if (S != "ssg 08" && S != "awp") return;
        const A = UI.IsHotkeyActive("Rage", "Exploits", "Double tap") && UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek");
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", A);
    },
    override_damage = function() {
        const S = Entity.GetEnemies();
        for (i = 0; i < S.length; i++) {
            Ragebot.ForceTargetMinimumDamage(S[i], get.value("override damage value"));
        }
    },
    noscope_hitchance = function(S) {
        if (S != "scar 20" && S != "g3sg1") return;
        const A = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_bIsScoped");
        if (!A) Ragebot.ForceTargetHitchance(Ragebot.GetTarget(), get.value("override hitchance in noscope"));
    },
    air_hitchance = function(S) {
        if (S != "ssg 08" && S != "r8 revolver") return;
        const A = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_hGroundEntity");
        if (A) Ragebot.ForceTargetHitchance(Ragebot.GetTarget(), get.value("override hitchance in air [ssg / r8]"));
    },
    only_noscope = function(S) {
        S != "scar 20" && S != "g3sg1" ? UI.SetValue("Rage", "GENERAL", "General", "Auto scope", !![]) : UI.SetValue("Rage", "GENERAL", "General", "Auto scope", ![]);
    },
    can_shot = function(S) {
        const A = Entity.GetLocalPlayer(),
            E = Entity.GetWeapon(A);
        if (A == null || E == null) return ![];
        const b = Entity.GetProp(A, "CCSPlayer", "m_nTickBase"),
            R = Globals.TickInterval() * (b - S);
        if (R < Entity.GetProp(A, "CCSPlayer", "m_flNextAttack")) return ![];
        if (R < Entity.GetProp(E, "CBaseCombatWeapon", "m_flNextPrimaryAttack")) return ![];
        return !![];
    },
    better_recharge = function() {
        const S = Exploit.GetCharge();
        Exploit[(S != 1 ? "Enable" : "Disable") + "Recharge"](), can_shot(14) && S != 1 && (Exploit.DisableRecharge(), Exploit.Recharge());
    },
    hitlogs = function() {
        const S = Entity.GetEntityFromUserID(Event.GetInt("userid")),
            A = Entity.GetEntityFromUserID(Event.GetInt("attacker")),
            E = "hurt  " + Entity.GetName(S) + "  for  " + Event.GetInt("dmg_health") + "  in  " + (hitboxes[Event.GetInt("hitgroup")] || "Generic") + "\n";
        if (Entity.IsLocalPlayer(A) && A != S) logs.push(new log(E, Globals.Tickcount(), 255)), Cheat.PrintColor([255, 255, 255, 255], E);
    };

function safe_on_limbs() {
    Ragebot.ForceHitboxSafety(12), Ragebot.ForceHitboxSafety(11), Ragebot.ForceHitboxSafety(10), Ragebot.ForceHitboxSafety(9);
}
const watermark = function(S, A, E) {
        const b = get.text("watermark username") == "" ? Cheat.GetUsername() : get.text("watermark username"),
            R = "acidtech | " + b + "";
        get.on_map() != "" ? R += " | [ " + Math.round(Local.Latency() * 1e3 - 16).toString() + " / " + Globals.Tickrate() + " ]" : "";
        const H = Render.TextSizeCustom(R, E)[0] + 10;
        adaptive_renderbox(S, A, H, R, E);
    },
    fake = function(S, A, E) {
        const b = Math.floor(Globals.Curtime() - Entity.GetProp(Entity.GetLocalPlayer(), "DT_CSPlayer", "m_flSimulationTime")) + 1,
            R = Math.min(Math.abs(Local.GetRealYaw() - Local.GetFakeYaw()) / 2, 60).toFixed(0),
            H = get_velocity(Entity.GetLocalPlayer()),
            t = Math.round(H),
            h = get.value("watermark"),
            Z = "FAKE:     choke:     speed:    ",
            Y = Render.TextSizeCustom(Z, A)[0] + 10;
        adaptive_renderbox(S, h ? 35 : 10, Y, Z, A), render_circle(S + 90 - Y - 10, h ? 44 : 19, 3.2, 3.8, 0, 16 * b, [E[0], E[1], E[2], 255]), render_circle(S + 43 - Y - 10, h ? 44 : 19, 3.2, 3.8, 0, 6 * R, [E[0], E[1], E[2], 255]), render_circle(S + 140 - Y - 10, h ? 44 : 19, 3.2, 3.8, 0, 1.411764705882353 * t, [E[0], E[1], E[2], 255]);
    },
    arrows = function(S, A, E) {
        const b = UI.IsHotkeyActive("Anti-Aim", "Fake angels", "Inverter"),
            R = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset"),
            H = b ? 25 : -27,
            t = [],
            h = [
                [S + 43, A],
                [S + 30, A + 7],
                [S + 30, A - 7]
            ],
            Z = [
                [S - 43, A],
                [S - 30, A - 7],
                [S - 30, A + 7]
            ];
        if (R == 90) t = h;
        else R == -90 && (t = Z);;
        Render.FilledRect(S + 25, A - 6, 2, 13, [0, 0, 0, E[3]]), Render.FilledRect(S - 27, A - 6, 2, 13, [0, 0, 0, E[3]]), Render.Polygon(h, [0, 0, 0, E[3]]), Render.Polygon(Z, [0, 0, 0, E[3]]), Render.Polygon(t, [E[0], E[1], E[2], 255]), Render.FilledRect(S + H, A - 6, 2, 13, [E[0], E[1], E[2], 255]);
    },
    at_targets = function() {
        const S = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_hGroundEntity");
        if (S) UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", !![]);
        else UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", ![]);
    },
    draw = function() {
        const S = Math.sin(Math.abs(-3.14 + Globals.Curtime() * 1.3333333333333333 % 6.28)) * 255,
            A = Global.GetScreenSize(),
            E = get.color("color"),
            b = Render.AddFont("Verdana", 7, 100);
        get.value("arrows") && get.on_map() && arrows(A[0] / 2, A[1] / 2, E);
        if (get.value("watermark")) watermark(A[0], 10, b);
        if (get.value("fake indicator")) fake(A[0], b, E);
        if (get.on_map()) Render.StringCustom(A[0] / 2, A[1] / 2 + 10, 1, UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction") ? "FREESTAND" : "ACID  YAW", [110, 127, 255, 255], b);
        if (get.value("hitlogs"))
            for (var R in logs) {
                Render.StringCustom(5, 5 - R * -15, 0, logs[R].text, [255, 255, 255, logs[R].alpha], b);
                if (logs[R].time + 200 < Globals.Tickcount()) logs[R].alpha -= Globals.Frametime() * 600;
                if (logs[R].alpha < 0) logs.shift();
            }
        if (get.value("keybinds") && get.on_map()) {
            var H = [];
            const t = Exploit.GetCharge(),
                h = UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck"),
                x = [157 + 255 * t / 1, 0 + 255 * t / 1, 20 + -20 * t / 1, 255];
            UI.IsHotkeyActive("Rage", "Exploits", "Double tap") && H.push({
                name: h ? "DT (fakeduck)" : "    DT",
                color: x,
                render: h ? "" : render_circle(A[0] / 2 - 8, A[1] / 2 + 29, 3.2, 3.8, 0, 360 * t, x)
            });;
            UI.IsHotkeyActive("Rage", "Exploits", "Hide shots") && H.push({
                name: "HIDE",
                color: [255, 255, 255, 255]
            });;
            UI.IsHotkeyActive("Rage", "General", "General", "Force safe point") && H.push({
                name: "SAFE",
                color: [155, 155, 255, 255]
            });;
            UI.IsHotkeyActive("Rage", "General", "General", "Force body aim") && H.push({
                name: "BAIM",
                color: [155, 155, 255, 255]
            });;
            UI.IsHotkeyActive("Script items", "override damage key") && H.push({
                name: "DMG",
                color: [255, 207, 105, 255]
            });;
            for (R = 0; R < H.length; R++) {
                Render.StringCustom(A[0] / 2, A[1] / 2 + 23 - R * -13, 1, H[R].name, H[R].color, b);
            }
        }
        if (get.is_menu()) menu_setup(), preset();
    },
    create_move = function() {
        const S = get.inverter(),
            A = get.value("body yaw type");
        A == 0 ? AntiAim.SetOverride(0) : AntiAim.SetOverride(1);
        if (get.value("low delta on slow-walk") && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) AntiAim.SetOverride(1), S ? AntiAim.SetRealOffset(18) && AntiAim.SetLBYOffset(-13) : AntiAim.SetRealOffset(-18) && AntiAim.SetLBYOffset(13);
        else {
            if (A == 1) AntiAim.SetRealOffset(random(-get.value("real offset"), get.value("real offset"))), AntiAim.SetLBYOffset(random(-get.value("lby offset"), get.value("lby offset")));
            else A == 2 && (S ? AntiAim.SetRealOffset(get.value("real offset")) && AntiAim.SetLBYOffset(-get.value("lby offset")) : AntiAim.SetRealOffset(-get.value("real offset")) && AntiAim.SetLBYOffset(get.value("lby offset")));
        }
        UI.IsHotkeyActive("Script items", "Left") && UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -90);;
        UI.IsHotkeyActive("Script items", "Right") && UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 90);;
        UI.IsHotkeyActive("Script items", "Off") && UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);;
        const E = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
        noscope_hitchance(E), air_hitchance(E), UI.SetValue("Misc", "GENERAL", "Movement", "Turn speed", get.value("strafer speed"));
        if (get.value("thirdperson") > 61) UI.SetValue("Visual", "WORLD", "View", "Thirdperson", get.value("thirdperson"));
        if (UI.IsHotkeyActive("Script items", "override damage key")) override_damage();
        if (get.value("at targets in air")) at_targets();
        if (get.value("DT peek helper [ssg / awp]")) dt_peek_helper(E);
        if (get.value("noscope only [scar20 / g3sg1]")) only_noscope(E);
        get.value("faster recharge") ? better_recharge() : Exploit.EnableRecharge();
    };
add.drowpown("         ACID - YAW", ["Rage", "Anti-Aim", "Visual", "Settings"]), add.hotkey("override damage key"), add.slider_int("override damage value", 1, 130), add.slider_int("override hitchance in noscope", 1, 130), add.slider_int("override hitchance in air [ssg / r8]", 1, 130), add.slider_int("strafer speed", 1, 350), add.checkbox("faster recharge"), add.checkbox("safe point on limbs"), add.checkbox("DT peek helper [ssg / awp]"), add.checkbox("noscope only [scar20 / g3sg1]"), add.drowpown("body yaw type", ["off", "random jitter", "static"]), add.slider_int("real offset", 1, 60), add.slider_int("lby offset", 1, 60), add.checkbox("low delta on slow-walk"), add.checkbox("at targets in air"), add.hotkey("Left"), add.hotkey("Right"), add.hotkey("Off"), add.slider_int("thirdperson", 60, 300), add.checkbox("arrows"), add.checkbox("hitlogs"), add.checkbox("keybinds"), add.checkbox("fake indicator"), add.checkbox("watermark"), add.textbox("watermark username"), add.colorpicker("color"), add.checkbox("load default config"), cheat.register_callback("player_hurt", "hitlogs"), cheat.register_callback("CreateMove", "create_move"), cheat.register_callback("Draw", "draw");