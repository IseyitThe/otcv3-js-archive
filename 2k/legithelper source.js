//legithelper.js by https://github.com/demitriusdemarcus
//follow me on github for more quality OTC3 scripts
//please don't delete these comments if you want to paste

//watermark
UI.AddCheckbox("Enable custom watermark");
UI.AddColorPicker("Watermark color");
var color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark color");

if (color[3] == 0)
    UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Watermark color", [89, 119, 239, 255]);

function drawWatermark() {
    if (UI.GetValue("Enable custom watermark")) {
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Watermark", false);
        if (!World.GetServerString())
            return;

        var today = new Date();
        var hours1 = today.getHours();
        var minutes1 = today.getMinutes();
        var seconds1 = today.getSeconds();

        var hours = hours1 <= 9 ? "0" + hours1 + ":" : hours1 + ":";
        var minutes = minutes1 <= 9 ? "0" + minutes1 + ":" : minutes1 + ":";
        var seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;

        var server_tickrate = Globals.Tickrate().toString()
        var ebanaya_hueta = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString()

        color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark color");

        var font = Render.AddFont("Verdana", 7, 400);
        var text = "legithelper.js | " + Cheat.GetUsername() + " | delay: " + ebanaya_hueta + "ms | " + server_tickrate + "tick | " + hours + minutes + seconds;

        var w = Render.TextSizeCustom(text, font)[0] + 8;
        var x = Global.GetScreenSize()[0];

        x = x - w - 10;

        Render.FilledRect(x, 10, w, 2, [color[0], color[1], color[2], 255]);
        Render.FilledRect(x, 12, w, 18, [17, 17, 17, color[3]]);
        Render.StringCustom(x + 4, 10 + 4, 0, text, [255, 255, 255, 255], font);
    }
}
Cheat.RegisterCallback("Draw", "drawWatermark");
//aspect ratio
UI.AddSliderFloat("Aspect Ratio Value", 0.5, 2.0); // you can customize limites here (1.0 - lowest, 2.0 - highest)
UI.AddLabel("1.33 is 4:3                  1.77 is 16:9");
UI.AddCheckbox("4:3 mode");
UI.AddCheckbox("16:9 mode");

var aspect_cache = 0;

function aspect() {
    var aspect_slider = UI.GetValue("Aspect Ratio Value");
    var cht = UI.GetValue("4:3 mode");
    var shd = UI.GetValue("16:9 mode");


    if (cht != 0) {
        UI.SetValue("Aspect Ratio Value", 1.33333333);
        UI.SetValue("4:3 mode", 0);
    }

    if (shd != 0) {
        UI.SetValue("Aspect Ratio Value", 1.77777777);
        UI.SetValue("16:9 mode", 0);
    }

    if (aspect_cache != aspect_slider) {
        aspect_cache = aspect_slider;
        UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Hidden cvars", 1);
        Global.ExecuteCommand("r_aspectratio " + aspect_slider);
    }
}

Cheat.RegisterCallback("CreateMove", "aspect");

//music kit changer in game
UI.AddSliderInt("Music kit changer", 1, 41);

function fsn() {
    if (Cheat.FrameStage() != 1)
        return;

    Entity.SetProp(Entity.GetLocalPlayer(), "CCSPlayerResource", "m_nMusicID", UI.GetValue("Music kit changer"))
}
Global.RegisterCallback("FrameStageNotify", "fsn");

// new agent models
// not possible with otc3 stock api. Only use the code when you have the agents addon installed.
// UI.AddCheckbox("Agent Models")
// UI.AddDropdown("Custom CT Model", ["None", "St.Marc | Collection", "Rezan the Redshirt", "Dragomir", "Dead Cold", "1st Lieutenant Farlow", "Safecracker Voltzmann", "Sir Bloody Darryl Miami", "Sir Bloody Darryl Skullhead", "Office | Collection", "Sir Bloody Darryl Loudmouth", "B Squadron Officer", "Little Kev", "Train | Collection", "Getaway Sally", "Train | Collection", "Train | Collection", "Bio-Haz Specialist", "Danger Zone | Collection", "Danger Zone | Collection", "Street Soldier", "NSWC Seal | 'Blueberries' Buckshot", "Number K"])
// UI.AddDropdown("Custom T Model", ["None", "St.Marc | Collection", "Rezan the Redshirt", "Dragomir", "Dead Cold", "1st Lieutenant Farlow", "Safecracker Voltzmann", "Sir Bloody Darryl Miami", "Sir Bloody Darryl Skullhead", "Office | Collection", "Sir Bloody Darryl Loudmouth", "B Squadron Officer", "Little Kev", "Train | Collection", "Getaway Sally", "Train | Collection", "Train | Collection", "Bio-Haz Specialist", "Danger Zone | Collection", "Danger Zone | Collection", "Street Soldier", "NSWC Seal | 'Blueberries' Buckshot", "Number K"])

// function onFSN() {
// 	if (Cheat.FrameStage() != 2)
// 		return
// 	var team = Entity.GetProp(Entity.GetLocalPlayer(), "DT_BaseEntity", "m_iTeamNum")
// 	if (!UI.GetValue("Script Items", "Agent Models")) {
// 		UI.SetEnabled("Script Items", "Custom CT Model", false)
// 		UI.SetEnabled("Script Items", "Custom T Model", false)
// 		return;
// 	}
// 	UI.SetEnabled("Script Items", "Custom T Model", true)
// 	UI.SetEnabled("Script Items", "Custom CT Model", true)
// 	if (team == 2) {
// 		UI.SetValue("Misc", "SKINS", "Player", "Player model", UI.GetValue("Script Items", "Custom T Model"))
// 	} else if (team == 3) {
// 		UI.SetValue("Misc", "SKINS", "Player", "Player model", UI.GetValue("Script Items", "Custom CT Model"))
// 	}
// }
// Cheat.RegisterCallback("FrameStageNotify", "onFSN")

//legit quickswitch with snipers
UI.AddCheckbox("Sniper Quickswitch")
var flip = false

function OnSniperFire() {
    me = Entity.GetLocalPlayer();
    short = Event.GetInt("userid")
    short_index = Entity.GetEntityFromUserID(short);
    localplayer_weapon = Entity.GetWeapon(me);
    weapon_name = Entity.GetName(localplayer_weapon);
    if (UI.GetValue("Sniper Quickswitch") == true) {
        if (short_index == me) {
            if (weapon_name == "ssg 08") {
                Global.ExecuteCommand("slot3");
                flip = true
            }
            if (weapon_name == "awp") {
                Global.ExecuteCommand("slot3");
                flip = true
            }
        }

    }
}
Global.RegisterCallback("weapon_fire", "OnSniperFire");

function reset_tick() {
    if (flip == true) {
        Global.ExecuteCommand("slot1");
        flip = false
    }
}
Global.RegisterCallback("CreateMove", "reset_tick");

//blockbot
var UIOnKey = "Blockbot Targetting Key";
var UIDoBlock = "Blockbot On Key";
var UIMode = "Blockbot Mode";
var UIBHop = "Blockbot Bhop Retreat";

var MODE_MATCH_SPEED = "Match Speed";
var MODE_MAX_SPEED = "Maximum Speed";

var blockbotModes = [
    MODE_MATCH_SPEED,
    MODE_MAX_SPEED
];

UI.AddHotkey(UIDoBlock);
UI.AddHotkey(UIOnKey);
UI.AddDropdown(UIMode, blockbotModes);
UI.AddCheckbox(UIBHop);

var Target = null;
var CrouchBlock = false;
var LocalPlayer = null;
var NextVector = null;

var types = {
    DEFAULT: "default",
    HOTKEY: "hotkey"
};

var entities = {
    CCSPlayer: 40
};

function print3(desc, vec) {
    Global.Print(desc + ": " + vec[0] + " | " + vec[1] + " | " + vec[2] + "\n");
}

function yaw3(v) {
    var x = v[0];
    var y = v[1];
    var z = v[2];

    return Math.atan2(y, x) * 180 / Math.PI;
};

function dist3(a, b) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var bx = b[0];
    var by = b[1];
    var bz = b[2];

    var dx = ax - bx;
    var dy = ay - by;
    var dz = az - bz;

    return Math.sqrt(dx * dx + dy * dy + dz * dz);
};

function sub3(a, b) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var bx = b[0];
    var by = b[1];
    var bz = b[2];

    return [ax - bx, ay - by, az - bz];
};

function add3(a, b) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var bx = b[0];
    var by = b[1];
    var bz = b[2];

    return [ax + bx, ay + by, az + bz];
}

function len3(v) {
    return dist3(v, [0, 0, 0]);
};

function getUIVal(name, type) {
    type = type || "default";
    var value = null;

    if (type == types.HOTKEY) {
        value = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items", name);
    } else {
        value = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", name);
    }

    return value;
};

function setUIVal(name, value, type) {
    if (type == types.HOTKEY) {
        return UI.ToggleHotkey("Misc", "JAVASCRIPT", "Script Items", name);
    }

    return UI.SetValue("Misc", "JAVASCRIPT", "Script Items", name, value);
};

function getEntityVelocity(entity) {
    return Entity.GetProp(Target, "CBasePlayer", "m_vecVelocity[0]"); // This actually resolves to a vec3 instead of the first float of the vec3
};

function degToRad(deg) {
    return deg * Math.PI / 180;
};

function OnFrameMain() {
    LocalPlayer = Entity.GetLocalPlayer()

    if (!LocalPlayer) return;

    if (NextVector) {
        var screenCoords = Render.WorldToScreen(NextVector);
        Render.String(screenCoords[0] - (Render.TextSize("x")[0] / 2), screenCoords[1], 0, "x", [255, 0, 255, 255]);
    }

    if (Target && Entity.IsAlive(LocalPlayer) && Entity.IsAlive(Target)) {
        var NearPlayer_toScreen = Render.WorldToScreen(Entity.GetHitboxPosition(Target, 5));
        var targetHitboxPosition = Entity.GetHitboxPosition(Target, 0);
        var playerOrigin = Entity.GetRenderOrigin(LocalPlayer);
        var targetOrigin = Entity.GetRenderOrigin(Target);
        var color = null;

        if ((targetHitboxPosition[2] < playerOrigin[2] && dist3(playerOrigin, targetOrigin) < 100)) {
            CrouchBlock = true;
            color = [255, 255, 0, 255];
        } else {
            CrouchBlock = false;
            color = [255, 0, 0, 255];
        }

        if (NearPlayer_toScreen[0] != null && NearPlayer_toScreen[1] != null) {
            Render.String(NearPlayer_toScreen[0] - (Render.TextSize("x")[0] / 2), NearPlayer_toScreen[1], 0, "x", color);
        }
    }

    if (!getUIVal(UIOnKey, types.HOTKEY) || !Entity.IsAlive(LocalPlayer)) {
        //Global.Print( "Key not pressed or not alive; Bail...\n" );
        return;
    }

    if (getUIVal(UIOnKey, types.HOTKEY)) {
        //Global.Print( "No target selected, looking for victims...\n" );

        var cEntities = Entity.GetEntitiesByClassID(entities.CCSPlayer);

        for (var i = 0; i < cEntities.length; i++) {
            var cEntity = cEntities[i];

            if (cEntity != LocalPlayer && Entity.IsAlive(cEntity)) {
                if (!Target) {
                    Target = cEntity;
                    Global.PrintChat("[legithelper] Selected #" + Target + " - " + Entity.GetName(Target) + " as Target.\n");
                } else {
                    var playerOrigin = Entity.GetRenderOrigin(LocalPlayer);
                    var entityOrigin = Entity.GetRenderOrigin(cEntity);
                    var targetOrigin = Entity.GetRenderOrigin(Target);
                    if (dist3(playerOrigin, targetOrigin) > dist3(playerOrigin, entityOrigin)) {
                        // If entity is closer than target, use entity as target
                        Target = cEntity;
                        Global.PrintChat("[legithelper] Selected #" + Target + " - " + Entity.GetName(Target) + " as Target (closer than previous target).\n");
                    }
                }
            }
        }
    } else if (!getUIVal(UIOnKey, types.HOTKEY) || !Entity.IsAlive(Target)) {
        //Global.Print( "Key not pressed or target not alive; De-selecting...\n" );
        Target = null;
    }
}

function OnCreateMoveMain() {
    if (Target && getUIVal(UIDoBlock, types.HOTKEY)) {
        var LocalAngles = Global.GetViewAngles();
        var VecForward = sub3(Entity.GetRenderOrigin(Target), Entity.GetRenderOrigin(LocalPlayer));
        var otherYaw = yaw3(VecForward);
        var TargetSpeed = len3(getEntityVelocity(Target));

        if (CrouchBlock) {
            var cmdMove = [0, 0, 0];

            if (blockbotModes[getUIVal(UIMode)] == MODE_MATCH_SPEED) {
                cmdMove[0] = ((Math.sin(degToRad(LocalAngles[1])) * VecForward[1]) + (Math.cos(degToRad(LocalAngles[1])) * VecForward[0])) * 10;
                cmdMove[1] = ((Math.cos(degToRad(LocalAngles[1])) * -VecForward[1]) + (Math.sin(degToRad(LocalAngles[1])) * VecForward[0])) * 10;
            } else if (blockbotModes[getUIVal(UIMode)] == MODE_MAX_SPEED) {
                cmdMove[0] = ((Math.sin(degToRad(LocalAngles[1])) * VecForward[1]) + (Math.cos(degToRad(LocalAngles[1])) * VecForward[0])) * 200;
                cmdMove[1] = ((Math.cos(degToRad(LocalAngles[1])) * -VecForward[1]) + (Math.sin(degToRad(LocalAngles[1])) * VecForward[0])) * 200;
            }

            UserCMD.SetMovement(cmdMove);
        } else {
            var cmdMove = [0, 0, 0];
            var DiffYaw = otherYaw - LocalAngles[1]

            if (DiffYaw > 180) {
                DiffYaw = DiffYaw - 360
            } else if (DiffYaw < -180) {
                DiffYaw = DiffYaw + 360
            }

            if (TargetSpeed > 285 && getUIVal(UIBHop)) {
                cmdMove[0] = -Math.abs(TargetSpeed);
            }

            if (blockbotModes[getUIVal(UIMode)] == MODE_MATCH_SPEED) {
                if (Math.abs(DiffYaw) > 0.75) {
                    cmdMove[1] = 450 * -DiffYaw;
                }
            } else if (blockbotModes[getUIVal(UIMode)] == MODE_MAX_SPEED) {
                if (DiffYaw > 0.25) {
                    cmdMove[1] = -450;
                } else if (DiffYaw < -0.25) {
                    cmdMove[1] = 450;
                }
            }

            UserCMD.SetMovement(cmdMove);
        }
    }
}
Global.RegisterCallback("Draw", "OnFrameMain");
Global.RegisterCallback("CreateMove", "OnCreateMoveMain");

//knifebot (blatant paste from rage script dump)
var error = 0;
var _0x4942 = ["EnableLogs", "", "Icons", "C", "D", "E", "F", "G", "H", "Fonts", "Verdana", "Astriumtabs2", "outline", "rect", "grad", "text", "\x0A", "groups", "verdana12", "verdana12b", "verdana10", "astriumtabs", "BeginWindow", "x", "y", "w", "h", "Window ", " has been created", "opened", "alpha", "id", "is_movable", "resize", "drag", "dx", "dy", "x2", "y2", "is_sizeable", "dmx", "dmy", "hi", "AddGradient", "EndWindow", "elements", "minimal_width", "length", "multiselect", "selected", "last_id", "SetWindowMovable", "SetWindowMovable has been set to ", "SetWindowSizeable", "SetWindowSizeable has been set to ", "SetWindowDrawTexture", "draw_texture", "SetWindowDrawTexture has been set to ", "BeginGroup", "tabs", "title", "Group ", "highest_w", "highest_h", "substring", "...", "vexatiouscheff", "summer08", "keenu", "atlas321", "ultranite", "infinity1g", "quinn", "vladosky", "gaffa", "sadfacehvh", "lukeyour", "sweg", "itzguga", "excellentgoat", "elleqt", "toLowerCase", "indexOf", "EndGroup", "nextline_offset", "is_nextline", "last_y", "Checkbox", "SetGroupMoveable", "SetGroupMoveable has been set to ", "Slider", "round", "SetGroupSizeable", "SetGroupSizeable has been set to ", "Button", "Label", "BeginTab", "icon", "numID", "EndTab", "DrawTabBar", "Combo", "_child", "push", "apply", "SetEnabled", "pop", "Custom fakeduck", "Standing amount", "Better autodirection", "Fastduck", "Disable autodir slowwalk", "Kill obituary", "Instant DT", "HP / 2", "Max wall thick", "fps autodir", "static rad", "rad amount", "custom clantag", "shift amount", "tolerance", "tp on peek", "blockbot", "pred amount", "speed amount", "knifebot", "backstab only", "safe point limbs", "jitter 180", "legit knifebot", "doorspam", "indicator", "autostrafer", "autos speed", "---------------------------------------", "Fakeduck key", "TP on peek key", "Blockbot key", "Doorspam key", "SetValue", "GetValue", "custom_fd", "standing_amount", "autodirection", "fastduck", "disable_autodir_slowwalk", "killobituary", "instant_dt", "dt_hp_2", "min_wall_thickness", "fps_autodirection", "static_rad", "rad_amount", "custom_clantag", "shift_amount", "tp_on_peek", "blockbot_pred_amount", "blockbot_speed_amount", "backstab_only", "safe_point_limbs", "jitter_180", "legit_knifebot", "indicators", "Main", "Safe point on limbs", "DT Settings", "Shift", "Tolerance", "TP on peek", "I", "Maximum wall thickness", "Disable on slowwalk", "Simpler autodirection", "Static radius", "Radius", "180 jitter", "Misc", "Custom Fakeduck", "Standing", "Kill Obituary", "Indicators", "Fast duck", "Clantag", "Doorspammer", "Misc 2", "Blockbot", "Prediction amount", "Speed amount", "Knifebot", "Backstab only", "Legit mode", "splice", "Settings", "Select a player.", "bwhitelist", "Whitelist", "Vote kick", "callvote kick ", "force_safepoint", "Force Safepoint", "whitelist", "prioritize", "Prioritize", "Info", "Reset settings", "PI", "sin", "cos", "Tahoma", "toUpperCase", "tp_on_key", "teleport", "CBaseEntity", "m_vecMins", "m_vecMaxs", "sqrt", "abs", "hypot", "atan", "Anti-Aim", "Rage Anti-Aim", "Yaw offset", "CCSPlayer", "m_angEyeAngles", "knife", "includes", "DT_BaseCombatWeapon", "m_flNextPrimaryAttack", "DT_CSPlayer", "m_nTickBase", "CBasePlayer", "m_iHealth", "Rage", "GENERAL", "Exploits", "Doubletap", "random", "last_ent", "m_angRotation", "atan2", "m_hGroundEntity", "forward", "backward", "left", "right", "m_vecVelocity[0]", "asin", "min", "IsHotkeyActive", "m_flDuckAmount", "crouch", "fd", "Extra", "Slow walk", "Auto direction", "onetap               ", "floor", "substr", "last_choked", "jitter", "flip", "Fake angles", "Inverter", "m_iClip1", "was_spamming", "grace_period", "FIRST BLOOD!", "DOUBLE KILL", "TRIPLE KILL", "MULTI KILL", "ULTRA KILL", "KILLING SPREE", "attacker", "Draw", "draw", "round_start", "rroundstart", "player_death", "CreateMove", "cm"];

function vec_sub(_0xb7a4x62, _0xb7a4x34) {
    return [_0xb7a4x62[0] - _0xb7a4x34[0], _0xb7a4x62[1] - _0xb7a4x34[1], _0xb7a4x62[2] - _0xb7a4x34[2]]
}

function vec_len(_0xb7a4x62) {
    return Math[_0x4942[216]](_0xb7a4x62[0] * _0xb7a4x62[0] + _0xb7a4x62[1] * _0xb7a4x62[1] + _0xb7a4x62[2] * _0xb7a4x62[2])
}

function vec_add(_0xb7a4x62, _0xb7a4x34) {
    return [_0xb7a4x62[0] + _0xb7a4x34[0], _0xb7a4x62[1] + _0xb7a4x34[1], _0xb7a4x62[2] + _0xb7a4x34[2]]
}

function vecmulfl(_0xb7a4x62, _0xb7a4x34) {
    return [_0xb7a4x62[0] * _0xb7a4x34, _0xb7a4x62[1] * _0xb7a4x34, _0xb7a4x62[2] * _0xb7a4x34]
}

function calcang(_0xb7a4x84, _0xb7a4x85) {
    var delta = [];
    delta[0] = _0xb7a4x84[0] - _0xb7a4x85[0];
    delta[1] = _0xb7a4x84[1] - _0xb7a4x85[1];
    delta[2] = _0xb7a4x84[2] - _0xb7a4x85[2];
    var _0xb7a4x86 = [];
    var _0xb7a4x87 = Local.GetViewAngles();
    _0xb7a4x86[0] = RadToDeg(Math[_0x4942[219]](delta[2] / Math[_0x4942[218]](delta[0], delta[1])));
    _0xb7a4x86[1] = RadToDeg(Math[_0x4942[219]](delta[1] / delta[0]));
    _0xb7a4x86[2] = 0;
    if (delta[0] >= 0) {
        _0xb7a4x86[1] += 180
    };
    while (_0xb7a4x86[1] > 180) {
        _0xb7a4x86[1] -= 360
    };
    while (_0xb7a4x86[1] < -180) {
        _0xb7a4x86[1] += 360
    };
    return _0xb7a4x86
}

function normalize(_0xb7a4xb3) {
    while (_0xb7a4xb3 > 180) {
        _0xb7a4xb3 -= 360
    };
    while (_0xb7a4xb3 < -180) {
        _0xb7a4xb3 += 360
    };
    return _0xb7a4xb3
}


function anglevec(_0xb7a4x62) {
    var _0xb7a4xb6 = Math[_0x4942[207]](_0xb7a4x62[1]);
    var _0xb7a4xb7 = Math[_0x4942[208]](_0xb7a4x62[1]);
    var _0xb7a4xb8 = Math[_0x4942[207]](_0xb7a4x62[0]);
    var _0xb7a4xb9 = Math[_0x4942[208]](_0xb7a4x62[0]);
    return [_0xb7a4xb9 * _0xb7a4xb7, _0xb7a4xb9 * _0xb7a4xb6, -_0xb7a4xb8]
}

function isbehind(_0xb7a4xaa) {
    var delta = vec_sub(Entity.GetRenderOrigin(_0xb7a4xaa), Entity.GetEyePosition(Entity.GetLocalPlayer()));
    delta[2] = 0;
    var _0xb7a4x95 = Entity.GetProp(_0xb7a4xaa, _0x4942[223], _0x4942[224]);
    _0xb7a4x95[0] = _0xb7a4x95[0] / 180 * Math[_0x4942[206]];
    _0xb7a4x95[1] = _0xb7a4x95[1] / 180 * Math[_0x4942[206]];
    var _0xb7a4xa0 = anglevec(_0xb7a4x95);
    _0xb7a4xa0[2] = 0;
    return (delta[0] * _0xb7a4xa0[0] + delta[1] * _0xb7a4xa0[1]) > 18
}

function RadToDeg(_0xb7a4x62) {
    return _0xb7a4x62 * 180 / Math[_0x4942[206]]
}

function auth_ok() {
    if (!UI.GetValue("Script items", "Knife bot")) return;
    const localplayerindex = Entity.GetLocalPlayer();
    const playersarray = Entity.GetEnemies();
    if (!(Entity.GetName(Entity.GetWeapon(localplayerindex)).includes('knife'))) {
        return
    };
    var playerlist = -1;
    var angless = 65;
    for (i in playersarray) {
        if (Entity.IsAlive(playersarray[i])) {
            var eyeposlocal = Entity.GetEyePosition(localplayerindex);
            var hitboxposition = Entity.GetHitboxPosition(playersarray[i], 3);
            var delta = vec_sub(eyeposlocal, hitboxposition);
            delta = vec_len(delta);
            if (delta < angless) {
                angless = delta;
                playerlist = playersarray[i]
            };
            var hitboxposition = Entity.GetHitboxPosition(playersarray[i], 5);
            var delta = vec_sub(eyeposlocal, hitboxposition);
            delta = vec_len(delta);
            if (delta < angless) {
                angless = delta;
                playerlist = playersarray[i]
            };
            var hitboxposition = Entity.GetHitboxPosition(playersarray[i], 4);
            var delta = vec_sub(eyeposlocal, hitboxposition);
            delta = vec_len(delta);
            if (delta < angless) {
                angless = delta;
                playerlist = playersarray[i]
            };
            var hitboxposition = Entity.GetRenderOrigin(playersarray[i]);
            hitboxposition[2] += 30;
            var delta = vec_sub(eyeposlocal, hitboxposition);
            delta = vec_len(delta);
            if (delta < angless) {
                angless = delta;
                playerlist = playersarray[i]
            }
        }
    };
    if (playerlist == -1) {
        return
    };
    var getbuttons = UserCMD.GetButtons();
    var isSilent = UI.GetValue("Script items", "Knife bot silent aim") ? true : false;
    var eyeposlocal = Entity.GetEyePosition(localplayerindex);
    var hitboxposition = Entity.GetHitboxPosition(playerlist, 3);
    var m_angEyeAngles = calcang(eyeposlocal, hitboxposition);
    var must_calc = false;
    if (isbehind(playersarray[i]) && angless < 70) {
        attacked = true;
        getbuttons |= 2048;
        must_calc = true
    } else {
        var isLethal = false;
        var m_iHealth = Entity.GetProp(playerlist, 'CBasePlayer', 'm_iHealth');
        if (m_iHealth <= 55) {
            isLethal = true
        };
        if (true == false) { // backstab only
            getbuttons |= 2048;
            var Active_Exploits = Exploit.GetCharge() == 1 && UI.IsHotkeyActive('Rage', 'GENERAL', 'Exploits', 'Doubletap');
            must_calc = true
        } else {

            getbuttons |= isLethal ? 2048 : 1;
            var Active_Exploits = Exploit.GetCharge() == 1 && UI.IsHotkeyActive('Rage', 'GENERAL', 'Exploits', 'Doubletap');
            if (getbuttons & 1 && Active_Exploits && (UI['GetValue']['apply'](null, settings) & 4)) {
                UI.ToggleHotkey('Rage', 'GENERAL', 'Exploits', 'Doubletap')
            };
            must_calc = true
        }
    };
    if (must_calc) {
        var localviewangles = Local.GetViewAngles();
        var delta = vec_sub(m_angEyeAngles, localviewangles);
        delta[1] = normalize(delta[1]);
        delta = vecmulfl(delta, 1);
        delta = vec_add(delta, localviewangles);
        m_angEyeAngles = delta
        UserCMD.SetViewAngles(m_angEyeAngles, isSilent)
        UserCMD.SetButtons(getbuttons)
    }
}

UI.AddCheckbox("Knife bot")
UI.AddCheckbox("Knife bot silent aim")
Cheat.RegisterCallback("CreateMove", "auth_ok")


//legit AA auto-direction
function setup() {
    UI.AddCheckbox("Legit Anti-Aim Auto-direction");
    UI.AddLabel("Change direction mode to toggle")
    UI.AddLabel("and bind it to a key for it to work")
    UI.AddSliderInt("Point distance", 1, 58); // I highly recommend using 22 as your point distance 
    UI.AddLabel("22 point distance is recommended")
    UI.AddColorPicker("Distance color");
    UI.AddColorPicker("Line color");
}
var inverter = {
    get: function() {
        return UI.IsHotkeyActive("Anti-Aim", "Legit Anti-Aim", "Inverter")
    },
    reverse: function() {
        return UI.ToggleHotkey("Anti-Aim", "Legit Anti-Aim", "Inverter")
    }
}

function deg2rad(degress) {
    return degress * Math.PI / 180.0;
}

function angle_to_vec(pitch, yaw) {
    var p = deg2rad(pitch);
    var y = deg2rad(yaw)
    var sin_p = Math.sin(p);
    var cos_p = Math.cos(p);
    var sin_y = Math.sin(y);
    var cos_y = Math.cos(y);
    return [cos_p * cos_y, cos_p * sin_y, -sin_p];
}

function trace(entity_id, entity_angles) { // pasted from kseny aimlines ;)
    var entity_vec = angle_to_vec(entity_angles[0], entity_angles[1]);
    var entity_pos = Entity.GetRenderOrigin(entity_id);
    entity_pos[2] += 50;
    var stop = [entity_pos[0] + entity_vec[0] * 8192, entity_pos[1] + entity_vec[1] * 8192, (entity_pos[2]) + entity_vec[2] * 8192];
    var traceResult = Trace.Line(entity_id, entity_pos, stop);
    if (traceResult[1] == 1.0)
        return;
    stop = [entity_pos[0] + entity_vec[0] * traceResult[1] * 8192, entity_pos[1] + entity_vec[1] * traceResult[1] * 8192, entity_pos[2] + entity_vec[2] * traceResult[1] * 8192];
    var distance = Math.sqrt((entity_pos[0] - stop[0]) * (entity_pos[0] - stop[0]) + (entity_pos[1] - stop[1]) * (entity_pos[1] - stop[1]) + (entity_pos[2] - stop[2]) * (entity_pos[2] - stop[2]));
    entity_pos = Render.WorldToScreen(entity_pos);
    stop = Render.WorldToScreen(stop);
    if (stop[2] != 1 || entity_pos[2] != 1)
        return;
    if (UI.IsHotkeyActive("Visuals", "World", "View", "Thirdperson")) {
        Render.Line(entity_pos[0], entity_pos[1], stop[0], stop[1], UI.GetColor("Script items", "Line color"));
        boo = '' + distance;
        Render.String(stop[0], stop[1], 0, boo, UI.GetColor("Script items", "Distance color"));
    }

    return distance;
}

function on_draw() {
    var local = Entity.GetLocalPlayer();
    if (!Entity.IsAlive(local) || !UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Legit Anti-Aim Auto-direction"))
        return;

    if (Entity.IsValid(local)) {
        var screen_pos;
        var eye_angles = Entity.GetProp(local, "CCSPlayer", "m_angEyeAngles");
        left_distance = trace(local, [0, eye_angles[1] - UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Point distance")]);
        right_distance = trace(local, [0, eye_angles[1] + UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Point distance")]);

        if (left_distance < right_distance) {
            if (inverter.get())
                inverter.reverse();
        }
        if (right_distance < left_distance) {
            if (!inverter.get())
                inverter.reverse();
        }
    }
}
Global.RegisterCallback("Draw", "on_draw");
setup();

//enemy location spam 
UI.AddCheckbox("Enable Enemy Location Spammer");

UI.AddDropdown("Send info in",
    ["Global Chat", "Team Chat"]
);

UI.AddSliderInt("Spam Delay", 64, 256);
UI.SetValue("MISC", "JAVASCRIPT", "Script Items", "Spam Delay", 256);


function GetValue(Name) {
    var Value = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", Name);
    return Value;
}

function ChatSay(String) {
    if (GetValue("Send info in") == "0") {
        Global.ExecuteCommand("say " + String); // Global Chat
    } else if (GetValue("Send info in") == "1") {
        Global.ExecuteCommand("say_team " + String); // Team Chat
    }
}

var enemies = null;
var LastTickcount = 0;

function Main() {
    if (!GetValue("Enable Enemy Location Spammer"))
        return;

    if (LastTickcount == 0) {
        LastTickcount = Global.Tickcount();
        return;
    }

    var SpamDelay = (GetValue("Spam Delay"));
    var CurrentTickcount = Global.Tickcount();
    if (CurrentTickcount - LastTickcount < SpamDelay) {
        return;
    } else if (CurrentTickcount - LastTickcount > SpamDelay) {
        LastTickcount = CurrentTickcount;
    }

    enemies = Entity.GetEnemies();

    for (i = 0; i < enemies.length; i++) {
        if (Entity.IsAlive(enemies[i])) {
            Name = Entity.GetName(enemies[i]);
            Location = Entity.GetProp(enemies[i], "CBasePlayer", "m_szLastPlaceName");
            Health = Entity.GetProp(enemies[i], "CBasePlayer", "m_iHealth");
            Weapon = Entity.GetName(Entity.GetWeapon(enemies[i]));

            var SendInfo = ("I am 100% not hacking but i'm pretty sure " + Name + " with " + Health + " HP " + " is at " + Location + " with weapon " + Weapon + ".");
            ChatSay(SendInfo);
        }
    }
}
Global.RegisterCallback("Draw", "Main");

//seperate team knife models
UI.AddCheckbox("Seperate Team Knife Models")
UI.AddDropdown('CT knife model', ['None', 'Bayonet', 'Flip knife', 'Gut knife', 'Karambit', 'M9 bayonet', 'Butterfly', 'Falchion', 'Navaja', 'Shadow daggers', 'Stiletto', 'Bowie', 'Huntsman', 'Talon', 'Ursus', 'Classic', 'Paracord', 'Survival', 'Nomad', 'Skeleton']);
UI.AddDropdown('T knife model', ['None', 'Bayonet', 'Flip knife', 'Gut knife', 'Karambit', 'M9 bayonet', 'Butterfly', 'Falchion', 'Navaja', 'Shadow daggers', 'Stiletto', 'Bowie', 'Huntsman', 'Talon', 'Ursus', 'Classic', 'Paracord', 'Survival', 'Nomad', 'Skeleton']);

function onknife() {
    if (Cheat.FrameStage() != 2)
        return
    var team = Entity.GetProp(Entity.GetLocalPlayer(), "DT_BaseEntity", "m_iTeamNum")
    if (!UI.GetValue("Script Items", "Seperate Team Knife Models")) {
        UI.SetEnabled("Script Items", "CT knife model", false)
        UI.SetEnabled("Script Items", "T knife model", false)
        return;
    }
    UI.SetEnabled("Script Items", "T knife model", true)
    UI.SetEnabled("Script Items", "CT knife model", true)
    if (team == 2) { // T
        UI.SetValue("Misc", "SKINS", "Knife", "Knife model", UI.GetValue("Script Items", "T knife model"))
    } else if (team == 3) { // CT
        UI.SetValue("Misc", "SKINS", "Knife", "Knife model", UI.GetValue("Script Items", "CT knife model"))
    }
}
Cheat.RegisterCallback("FrameStageNotify", "onknife")

//boost fps 
UI.AddCheckbox("FPS boost");

function fpsBoost() {
    if (UI.GetValue("FPS boost")) {
        //Auto turn on stock otc3's performance boosting features. Delete if you don't want to do so.
        UI.SetValue("Misc", "GENERAL", "Misc", "Force sv_cheats", true);
        UI.SetValue("Misc", "GENERAL", "Misc", "Hidden cvars", true);
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Performance", "Disable post processing", true);
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Performance", "Disable fog", true);
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Performance", "Disable shadows", true);
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Performance", "Disable blood", true);
        //set convars
        Convar.SetString("r_shadows", "0");
        Convar.SetString("cl_csm_static_prop_shadows", "0");
        Convar.SetString("cl_csm_shadows", "0");
        Convar.SetString("cl_csm_world_shadows", "0");
        Convar.SetString("cl_foot_contact_shadows", "0");
        Convar.SetString("cl_csm_viewmodel_shadows", "0");
        Convar.SetString("cl_csm_rope_shadows", "0");
        Convar.SetString("cl_csm_sprite_shadows", "0");
        Convar.SetString("cl_csm_world_shadows_in_viewmodelcascade", "0");
        Convar.SetString("cl_csm_translucent_shadows", "0");
        Convar.SetString("cl_csm_entity_shadows", "0");
        Convar.SetString("violence_hblood", "0");
        Convar.SetString("r_3dsky", "0");
        Convar.SetString("r_drawdecals", "0");
        Convar.SetString("r_drawrain", "0");
        Convar.SetString("r_drawropes", "0");
        Convar.SetString("r_drawsprites", "0");
        Convar.SetString("fog_enable", "0");
        Convar.SetString("fog_enable_water_fog", "0");
        Convar.SetString("fog_enableskybox", "0");
        Convar.SetString("@panorama_disable_blur", "1");
        Convar.SetString("dsp_slow_cpu", "1");
        Convar.SetString("cl_disable_ragdolls", "1");
        Convar.SetString("mat_disable_bloom", "1");
    } else {
        //Auto turn off stock otc3's performance boosting features. Delete if you don't want to do so.
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Performance", "Disable post processing", false);
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Performance", "Disable fog", false);
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Performance", "Disable shadows", false);
        UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Performance", "Disable blood", false);
        //reset convars
        Convar.SetString("r_shadows", "1");
        Convar.SetString("cl_csm_static_prop_shadows", "1");
        Convar.SetString("cl_csm_shadows", "1");
        Convar.SetString("cl_csm_world_shadows", "1");
        Convar.SetString("cl_foot_contact_shadows", "1");
        Convar.SetString("cl_csm_viewmodel_shadows", "1");
        Convar.SetString("cl_csm_rope_shadows", "1");
        Convar.SetString("cl_csm_sprite_shadows", "1");
        Convar.SetString("cl_csm_world_shadows_in_viewmodelcascade", "1");
        Convar.SetString("cl_csm_translucent_shadows", "1");
        Convar.SetString("cl_csm_entity_shadows", "1");
        Convar.SetString("violence_hblood", "1");
        Convar.SetString("r_3dsky", "1");
        Convar.SetString("r_drawdecals", "1");
        Convar.SetString("r_drawrain", "1");
        Convar.SetString("r_drawropes", "1");
        Convar.SetString("r_drawsprites", "1");
        Convar.SetString("fog_enable", "1");
        Convar.SetString("fog_enable_water_fog", "1");
        Convar.SetString("fog_enableskybox", "1");
        Convar.SetString("@panorama_disable_blur", "0");
        Convar.SetString("dsp_slow_cpu", "0");
        Convar.SetString("cl_disable_ragdolls", "0");
        Convar.SetString("mat_disable_bloom", "0");
    }
}

Global.RegisterCallback("Draw", "fpsBoost")

//dump rank + wins
UI.AddCheckbox("Dump Ranks + Wins");
UI.AddDropdown("Rank Dump Team", ['T', 'CT', 'All']);

if (Convar.GetString("cl_detail_max_sway") == 5) {
    Cheat.PrintColor([255, 255, 255, 255], ("["));
    Cheat.PrintColor([60, 255, 60, 255], ("SCRIPT"));
    Cheat.PrintColor([255, 255, 255, 255], ("] By"));
    Cheat.PrintColor([255, 60, 60, 255], (" Zero Two \n"));
    Convar.SetString("cl_detail_max_sway", "5.1");
}

var mm_ranks = ["NO RANK", "S1", "S2", "S3", "S4", "SE", "SEM",
    "GN1", "GN2", "GN3", "GNM",
    "MG1", "MG2", "MGE", "DMG",
    "LE", "LEM", "SMFC", "Global"
];

function drawtochat() {
    if (UI.GetValue("Script Items", "Dump Ranks + Wins")) {
        if (UI.GetValue("Script Items", "Rank Dump Team") == 2) {
            for (i = 0; i < Entity.GetPlayers().length; i++) {
                if (Entity.GetProp(Entity.GetPlayers()[i], "CBaseEntity", "m_iTeamNum") == 2) {
                    Cheat.PrintChat("\x01[\x04legithelper\x01] \x10" +
                        Entity.GetName(Entity.GetPlayers()[i]) +
                        " \x01HAS \x03" +
                        Entity.GetProp(Entity.GetPlayers()[i], "CCSPlayerResource", "m_iCompetitiveWins") +
                        "\x01 WINS (\x02" +
                        mm_ranks[Entity.GetProp(Entity.GetPlayers()[i], "CCSPlayerResource", "m_iCompetitiveRanking")] +
                        "\x01)");
                }
            }
            for (i = 0; i < Entity.GetPlayers().length; i++) {
                if (Entity.GetProp(Entity.GetPlayers()[i], "CBaseEntity", "m_iTeamNum") == 3) {
                    Cheat.PrintChat("\x01[\x04legithelper\x01] \x0B" +
                        Entity.GetName(Entity.GetPlayers()[i]) +
                        " \x01HAS \x03" +
                        Entity.GetProp(Entity.GetPlayers()[i], "CCSPlayerResource", "m_iCompetitiveWins") +
                        "\x01 WINS (\x02" +
                        mm_ranks[Entity.GetProp(Entity.GetPlayers()[i], "CCSPlayerResource", "m_iCompetitiveRanking")] +
                        "\x01)");
                }
            }
        }
        if (UI.GetValue("Script Items", "Rank Dump Team") == 1) {
            for (i = 0; i < Entity.GetPlayers().length; i++) {
                if (Entity.GetProp(Entity.GetPlayers()[i], "CBaseEntity", "m_iTeamNum") == 3) {
                    Cheat.PrintChat("\x01[\x04legithelper\x01] \x0B" +
                        Entity.GetName(Entity.GetPlayers()[i]) +
                        " \x01HAS \x03" +
                        Entity.GetProp(Entity.GetPlayers()[i], "CCSPlayerResource", "m_iCompetitiveWins") +
                        "\x01 WINS (\x02" +
                        mm_ranks[Entity.GetProp(Entity.GetPlayers()[i], "CCSPlayerResource", "m_iCompetitiveRanking")] +
                        "\x01)");
                }
            }
        }
        if (UI.GetValue("Script Items", "Rank Dump Team") == 0) {
            for (i = 0; i < Entity.GetPlayers().length; i++) {
                if (Entity.GetProp(Entity.GetPlayers()[i], "CBaseEntity", "m_iTeamNum") == 2) {
                    Cheat.PrintChat("\x01[\x04legithelper\x01] \x10" +
                        Entity.GetName(Entity.GetPlayers()[i]) +
                        " \x01HAS \x03" +
                        Entity.GetProp(Entity.GetPlayers()[i], "CCSPlayerResource", "m_iCompetitiveWins") +
                        "\x01 WINS (\x02" +
                        mm_ranks[Entity.GetProp(Entity.GetPlayers()[i], "CCSPlayerResource", "m_iCompetitiveRanking")] +
                        "\x01)");
                }
            }
        }

        UI.SetValue("Script Items", "Dump Ranks + Wins", false)
    }
}

Global.RegisterCallback("Draw", "drawtochat")

//vote reveal 
UI.AddCheckbox("Vote revealer");
var options = []

function onVoteOptions() {
    options[0] = Event.GetString("option1")
    options[1] = Event.GetString("option2")
    options[2] = Event.GetString("option3")
    options[3] = Event.GetString("option4")
    options[4] = Event.GetString("option5")
}

function onVoteCast() {
    if (UI.GetValue("Vote revealer")) {
        var entid = Event.GetInt("entityid");
        if (entid) {
            var team = Event.GetInt("team");
            var option = Event.GetInt("vote_option");
            var name = Entity.GetName(entid);
            var chTeam = "null";
            switch (team) {
                case 0:
                    chTeam = "[N] ";
                    break;
                case 1:
                    chTeam = "[S] ";
                    break;
                case 2:
                    chTeam = "[T] ";
                    break;
                case 3:
                    chTeam = "[CT] ";
                    break;
                default:
                    chTeam = "[UNK] ";
                    break;
            }

            var vote = options[option];
            Global.PrintColor([217, 217, 217, 255], "[legithelper] \0");
            Global.Print(chTeam + name + " voted " + vote + "\n");
            Global.PrintChat(chTeam + name + " voted " + vote);
        }
    }
}
Global.RegisterCallback("vote_options", "onVoteOptions");
Global.RegisterCallback("vote_cast", "onVoteCast");

//novolinehook style info box
UI.AddCheckbox("Enable novo.win info box")
UI.AddSliderInt("Info bar X", 0, Global.GetScreenSize()[0]);
UI.AddSliderInt("Info bar Y", 0, Global.GetScreenSize()[1]);
UI.SetEnabled("Info bar X", false);
UI.SetEnabled("Info bar Y", false);

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}
var fa = 0;
var sa = 0;

function Infobar() {
    if (UI.GetValue("Enable novo.win info box")) {
        if (!World.GetServerString()) return;

        const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Info bar X"),
            y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Info bar Y");
        const frametime = Math.round(1 / Global.Frametime() - 10).toString()
        var ping = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString()
        localplayer_index = Entity.GetLocalPlayer();
        localplayer_weapon = Entity.GetWeapon(localplayer_index);
        weapon_name = Entity.GetName(localplayer_weapon);
        g_Local_classname = Entity.GetClassName(localplayer_weapon);
        var nextattack = Entity.GetProp(localplayer_weapon, "CBaseCombatWeapon", "m_flNextPrimaryAttack");
        var CanShoot = false;
        if (nextattack <= Globals.Curtime()) {
            CanShoot = true;
        }

        var frames = 8 * Globals.Frametime();

        var font = Render.AddFont("Verdana", 8, 100);
        var text = "legithelper                     ";
        var text1 = "fps";
        var text2 = "                      " + frametime + "";
        var text3 = "ping";
        var text4 = "                      " + ping + "";
        var text5 = "                      disabled";
        var text6 = "                      enabled";
        var gay = "legitAA";
        var gay1 = "edgejump";
        var gay2 = "fakelag";
        var color = [89, 89, 89, 255];
        var w = Render.TextSizeCustom(text, font)[0] + 8;

        Render.FilledRect(x - 1, y, w, 85, [0, 0, 0, 255]);
        Render.FilledRect(x + 1, y, w, 85, [0, 0, 0, 255]);
        Render.FilledRect(x, y, w, 84, color);
        Render.FilledRect(x, y, w, 18, [17, 17, 17, 255]);
        Render.StringCustom(x + 3, y + 3, 0, text, [0, 0, 0, 255], font);
        Render.StringCustom(x + 2, y + 2, 0, text, [255, 255, 255, 255], font);
        /////////////////////////////////////////////////////////////////////
        Render.StringCustom(x + 3, y + 19, 0, text1, [0, 0, 0, 255], font);
        Render.StringCustom(x + 2, y + 18, 0, text1, [255, 255, 255, 255], font);
        Render.StringCustom(x + 3, y + 19, 0, text2, [0, 0, 0, 255], font);
        Render.StringCustom(x + 2, y + 18, 0, text2, [0, 255, 0, 255], font);
        /////////////////////////////////////////////////////////////////////
        Render.StringCustom(x + 3, y + 31, 0, text3, [0, 0, 0, 255], font);
        Render.StringCustom(x + 2, y + 30, 0, text3, [255, 255, 255, 255], font);
        Render.StringCustom(x + 3, y + 31, 0, text4, [0, 0, 0, 255], font);
        Render.StringCustom(x + 2, y + 30, 0, text4, [0, 255, 0, 255], font);
        /////////////////////////////////////////////////////////////////////
        if (!UI.GetValue("Anti-Aim", "Legit Anti-Aim", "Enabled")) {
            Render.StringCustom(x + 3, y + 44, 0, gay, [0, 0, 0, 255], font);
            Render.StringCustom(x + 2, y + 43, 0, gay, [255, 255, 255, 255], font);
            Render.StringCustom(x + 3, y + 44, 0, text5, [0, 0, 0, 255], font);
            Render.StringCustom(x + 2, y + 43, 0, text5, [255, 0, 0, 255], font);
        } else {
            Render.StringCustom(x + 3, y + 44, 0, gay, [0, 0, 0, 255], font);
            Render.StringCustom(x + 2, y + 43, 0, gay, [255, 255, 255, 255], font);
            Render.StringCustom(x + 3, y + 44, 0, text6, [0, 0, 0, 255], font);
            Render.StringCustom(x + 2, y + 43, 0, text6, [0, 255, 0, 255], font);
        }
        if (!UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Edge jump")) {
            Render.StringCustom(x + 3, y + 56, 0, gay1, [0, 0, 0, 255], font);
            Render.StringCustom(x + 2, y + 55, 0, gay1, [255, 255, 255, 255], font);
            Render.StringCustom(x + 3, y + 56, 0, text5, [0, 0, 0, 255], font);
            Render.StringCustom(x + 2, y + 55, 0, text5, [255, 0, 0, 255], font);
        } else {
            Render.StringCustom(x + 3, y + 56, 0, gay1, [0, 0, 0, 255], font);
            Render.StringCustom(x + 2, y + 55, 0, gay1, [255, 255, 255, 255], font);
            Render.StringCustom(x + 3, y + 56, 0, text6, [0, 0, 0, 255], font);
            Render.StringCustom(x + 2, y + 55, 0, text6, [0, 255, 0, 255], font);
        }
        if (!UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled")) {
            Render.StringCustom(x + 3, y + 69, 0, gay2, [0, 0, 0, 255], font);
            Render.StringCustom(x + 2, y + 68, 0, gay2, [255, 255, 255, 255], font);
            Render.StringCustom(x + 3, y + 69, 0, text5, [0, 0, 0, 255], font);
            Render.StringCustom(x + 2, y + 68, 0, text5, [255, 0, 0, 255], font);
        } else {
            Render.StringCustom(x + 3, y + 69, 0, gay2, [0, 0, 0, 255], font);
            Render.StringCustom(x + 2, y + 68, 0, gay2, [255, 255, 255, 255], font);
            Render.StringCustom(x + 3, y + 69, 0, text6, [0, 0, 0, 255], font);
            Render.StringCustom(x + 2, y + 68, 0, text6, [0, 255, 0, 255], font);
        }

        if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
            const mouse_pos = Global.GetCursorPosition();
            if (in_bounds(mouse_pos, x, y, x + w, y + 30)) {
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Info bar X", mouse_pos[0] - w / 2);
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Info bar Y", mouse_pos[1] - 20);
            }
        }
    }
}
Global.RegisterCallback("Draw", "Infobar");

//Standalone RCS by april#0001
var old_condition = -1;
var old_angles = [0, 0, 0];
var old_index = -1;
var condition = 0;
const weapons = [
    [1, 2, 3, 4, 30, 32, 36, 61, 63, 64],
    [7, 8, 10, 13, 14, 16, 28, 39, 60],
    [9, 11, 38, 40],
    [17, 19, 23, 24, 26, 33, 34]
]
var menu_elements_t = [];
var menu_c = [];
const menu_spacer = "                                                                                  ";
menu_c.label = function(label) {
    UI.AddLabel(label);
}
menu_c.call = function(func, name, label, properties) {
    // If the label isn't unique
    if (label in menu_elements_t)
        throw new Error("[Menu] The label must be unique!");

    // Get properties
    const final_name = name + menu_spacer + label;
    var final_props = [final_name];
    const element_info_t = {
        name: name,
        label: label,
        properties: properties
    };

    // If our properties aren't null, then pack them together.
    if (properties !== null) {
        for (var i = 0; i < properties.length; i++) {
            final_props.push(properties[i]);
        }
    }

    // Create our menu element and return properties
    func.apply(null, final_props);
    menu_elements_t[label] = element_info_t;
}
menu_c.get = function(label) {
    // If the label doesn't exist
    if (!(label in menu_elements_t))
        throw new Error("[Menu] This element's label doesn't exist!");

    // Get properties
    const properties = menu_elements_t[label];
    const final_name = properties.name + menu_spacer + properties.label;

    // Returns the element's value
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", final_name);
}
menu_c.set = function(label, value) {
    // If the label doesn't exist
    if (!(label in menu_elements_t))
        throw new Error("[Menu] This element's label doesn't exist!");

    // Get properties
    const properties = menu_elements_t[label];
    const final_name = properties.name + menu_spacer + properties.label;

    // Set the element's value
    UI.SetValue("Misc", "JAVASCRIPT", "Script items", final_name, value);
}
menu_c.visibility = function(label, visible) {
    // If the label doesn't exist
    if (!(label in menu_elements_t))
        throw new Error("[Menu] This element's label doesn't exist!");

    // Get properties
    const properties = menu_elements_t[label];
    const final_name = properties.name + menu_spacer + properties.label;

    // Change the element's visibility
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", final_name, visible);
}
const title = menu_c.label("Standalone RCS");
const current_condition = menu_c.call(UI.AddDropdown, "Current configuration", "rcs_cond", [
    ["Default", "Pistol", "Rifle", "Sniper", "SMG"]
]);
const rcs_x = [
    menu_c.call(UI.AddSliderInt, "Pitch control", "rcs_pitch_value[0]", [0, 100]),
    menu_c.call(UI.AddSliderInt, "Pitch control", "rcs_pitch_value[1]", [0, 100]),
    menu_c.call(UI.AddSliderInt, "Pitch control", "rcs_pitch_value[2]", [0, 100]),
    menu_c.call(UI.AddSliderInt, "Pitch control", "rcs_pitch_value[3]", [0, 100]),
    menu_c.call(UI.AddSliderInt, "Pitch control", "rcs_pitch_value[4]", [0, 100])
];
const rcs_y = [
    menu_c.call(UI.AddSliderInt, "Yaw control", "rcs_yaw_value[0]", [0, 100]),
    menu_c.call(UI.AddSliderInt, "Yaw control", "rcs_yaw_value[1]", [0, 100]),
    menu_c.call(UI.AddSliderInt, "Yaw control", "rcs_yaw_value[2]", [0, 100]),
    menu_c.call(UI.AddSliderInt, "Yaw control", "rcs_yaw_value[3]", [0, 100]),
    menu_c.call(UI.AddSliderInt, "Yaw control", "rcs_yaw_value[4]", [0, 100])
];
const shots = menu_c.call(UI.AddSliderInt, "After x shots fired", "rcs_aftershots", [0, 5]);

const clamp = function(v, min, max) {
    return Math.min(Math.max(v, min), max);
}

const table_contains = function(table, value) {
    // Loops for each value inside the array
    for (var i in table) {
        // If the table's value matches our value, then return true
        if (value === table[i])
            return true;
    }

    // Otherwise, we didn't find anything so, return false
    return false;
}

function normalize_angles(angle) {
    // Clamps our angles
    angle[0] = clamp(angle[0], -89, 89);
    angle[1] = clamp(angle[1], -180, 180);
    angle[2] = 0;

    // Return clamped angles
    return angle;
}

function disable_rcs() {
    // Disable Onetap's RCS
    UI.SetValue("Legit", "GENERAL", "Default config", "Recoil control", 0);
    UI.SetValue("Legit", "PISTOL", "Pistol config", "Recoil control", 0);
    UI.SetValue("Legit", "RIFLE", "Rifle config", "Recoil control", 0);
    UI.SetValue("Legit", "SNIPER", "Sniper config", "Recoil control", 0);
    UI.SetValue("Legit", "SMG", "SMG config", "Recoil control", 0);
}

function update_visibility() {
    // Gets the current configuration
    const _cond = menu_c.get("rcs_cond");

    // If the configuration hasn't been switched then no need to update the visibility
    if (_cond === old_condition)
        return;

    // Otherwise, cache the current condition
    old_condition = _cond;

    // Loops between every condition
    for (var i = 0; i < 5; i++) {
        // Check if we should enable it or not
        const enabled = _cond === i;

        // Update the element's visibility
        menu_c.visibility("rcs_pitch_value[" + i + "]", enabled);
        menu_c.visibility("rcs_yaw_value[" + i + "]", enabled);
    }
}

function get_weapon() {
    // Get our local player
    const player = Entity.GetLocalPlayer();

    // If our player ins't valid or if we're dead, return
    if (!player || !Entity.IsAlive(player))
        return;

    // Get the weapon's ID
    const weapon_id = Entity.GetProp(Entity.GetWeapon(player), "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF;

    // If we didn't switch between weapons, then no need to update
    if (weapon_id === old_index)
        return;

    // Otherwise, cache our current condition
    old_index = weapon_id;

    // Loops between our unique conditions
    for (var i = 0; i < weapons.length; i++) {
        // Checks if our weapon ID matches with any of the other IDs
        if (table_contains(weapons[i], weapon_id)) {
            // If it does, then update our condition
            condition = i + 1;
            return;
        }
    }

    // Otherwise, return default condition
    condition = 0;

}

update_visibility();
disable_rcs();

function main() {
    // Execute functions
    get_weapon();
    update_visibility();

    // Gets the properties needed
    const player = Entity.GetLocalPlayer()

    const amounts = [
        menu_c.get("rcs_pitch_value[" + condition + "]") / 50,
        menu_c.get("rcs_yaw_value[" + condition + "]") / 50
    ];

    const shots = menu_c.get("rcs_aftershots");

    // If our player isn't valid or if we're dead
    if (!player || !Entity.IsAlive(player))
        return;

    // If both RCS values are off
    if (amounts[0] === 0 && amounts[1] === 0)
        return;

    // Get more properties
    var angles = Local.GetViewAngles();
    var punch = Entity.GetProp(player, "CBasePlayer", "m_aimPunchAngle");
    var fired = Entity.GetProp(player, "CCSPlayer", "m_iShotsFired");

    // If we haven't shot the minimum amount of bullets
    if (fired <= shots) {
        // Cache our angles anyways so our aim doesn't flick
        old_angles = punch;
        return;
    }

    // If there's no recoil to compensate
    if (punch[0] === 0 && punch[1] === 0)
        return;

    // Compensate angles
    angles[0] -= (punch[0] - old_angles[0]) * amounts[0];
    angles[1] -= (punch[1] - old_angles[1]) * amounts[1];

    // And then, normalize them
    angles = normalize_angles(angles);

    // Cache our final angle so we can do our next calculations based on it
    old_angles = punch;

    // Do recoil compensation
    UserCMD.SetAngles(angles);
}

Cheat.RegisterCallback("CreateMove", "main");

//Gernade helper
UI.AddCheckbox("Enable gernade helper")
UI.AddCheckbox("Automatic Throw")
UI.AddHotkey("Automatic Throw Hotkey")
UI.AddColorPicker("Grenade Helper Color")
UI.AddCheckbox("Render nade on all map")

var delays = []

function Delay(delay, func, times) {
    this.delay = delay;
    this.resume = Globals.Curtime() + delay;
    this.func = func;
    this.times = 0;
    this.max = times || 1;
    delays.push(this);
}

Delay.prototype.run = function() {
    this.func();
    this.times++;
    this.resume += this.delay;
    return this.times >= this.max;
}

function checkDelays() {
    currTime = Globals.Curtime();

    delays.forEach(function(delay, index) {
        currTime >= delay.resume && delay.run() && delays.splice(index, 1);
    })
}

var coords

function vector_sub(vec1, vec2) {
    return [
        vec1[0] - vec2[0],
        vec1[1] - vec2[1],
        vec1[2] - vec2[2]
    ];
}

function getAngles(localPos, pos) {
    newPos = vector_sub(pos, localPos);
    xyDist = Math.sqrt((newPos[0] * newPos[0] + newPos[1] * newPos[1]));
    yaw = Math.atan2(newPos[1], newPos[0]) * 180 / Math.PI;
    pitch = Math.atan2(-newPos[2], xyDist) * 180 / Math.PI;
    roll = 0;
    angles = [pitch, yaw, roll];
    return angles;
}


function atv(pitch, yaw) {

    return [Math.cos(pitch * Math.PI / 180) * Math.cos(yaw * Math.PI / 180), Math.cos(pitch * Math.PI / 180) * Math.sin(yaw * Math.PI / 180), -Math.sin(pitch * Math.PI / 180)]

}

var scriptitems = ["Misc", "JAVASCRIPT", "Script Items"];

function menu_cb() {
    var enabled = UI.GetValue(scriptitems, "Enable gernade helper");
    UI.SetEnabled(scriptitems, "Automatic Throw", enabled);
    UI.SetEnabled(scriptitems, "Automatic Throw Hotkey", enabled);
    UI.SetEnabled(scriptitems, "Grenade Helper Color", enabled);
    UI.SetEnabled(scriptitems, "Render nade on all map", enabled);
}

function grenade_helper() {
    menu_cb();
}

function dis(a, b) {

    var ax = a[0]

    var ay = a[1]

    var az = a[2]

    var bx = b[0]

    var by = b[1]

    var bz = b[2]

    var dx = ax - bx

    var dy = ay - by

    var dz = az - bz

    return Math.sqrt(dx * dx + dy * dy + dz * dz)

}

function alp(c, a) {

    return [c[0], c[1], c[2], a]

}

test = 0
movement_autothrow = []

function drawhelper() {

    weaponnames = {
        "flashbang": [43],
        "molotov": [46, 48],
        "smoke": [45],
        "nade": [44]
    }

    weapon = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CEconEntity", "m_iItemDefinitionIndex")

    world = World.GetMapName()

    color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Grenade Helper Color")

    var enabled = UI.GetValue(scriptitems, "Enable gernade helper");

    if (enabled) {
        if (!color) color = [255, 255, 255, 255]

        if ([46, 48, 45, 43, 44].indexOf(weapon) < 0) return

        // ["", "", "",  ],
        // ["", ,[]],

        if (world == "de_cbble") {
            movement_autothrow = [
                ["Boost Corner1", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 270.74334716796875],
                    [450, 0, 270.7424011230469],
                    [450, 0, 270.7424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 245.74240112304688]
                ]],


            ]
        }
        if (world == "de_mirage") {
            movement_autothrow = [
                ["Under", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["Window", 10, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["One-Way Ramp", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469]
                ]],
            ]
        }
        if (world == "de_dust2") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_inferno") {
            movement_autothrow = [
                ["Pit", 8, [
                    [450.02211380004883, 0, 0],
                    [450.65053939819336, 0, 0],
                    [450.90695571899414, 0, 0],
                    [450.53515625, 0, 0],
                    [450.393945693969727, 0, 0],
                    [450.5786018371582, 0, 0],
                    [450.5311737060547, 0, 0],
                    [450.2818603515625, 0, 0],
                    [450.48575592041016, 0, 0],
                    [450.93397521972656, 0, 0],
                    [450.8269958496094, 0, 0],
                    [450.3787612915039, 0, 0],
                    [450.398193359375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0]
                ]],
                ["Mid", 1, [
                    [1.125562559813261, 0, 0],
                    [1.1255620624870062, 0, 0],
                    [1.12556217238307, 0, 0],
                    [1.1255620624870062, 0, 0],
                    [1.1255620624870062, 0, 0],
                    [1.124624202027917, 0, 0],
                    [1.12556217238307, 0, 0],
                    [21.543969690799713, 0, 0],
                    [36.43856465816498, 0, 0],
                    [66.22589480876923, 0, 0],
                    [81.11870193481445, 0, 0],
                    [109.75620746612549, 0, 0],
                    [122.38414692878723, 0, 0],
                    [133.98439383506775, 0, 0],
                    [133.9861981868744, 0, 0],
                    [144.6437792778015, 0, 0],
                    [163.4331409931183, 0, 0],
                    [163.4331409931183, 0, 0],
                    [179.29327392578125, 0, 0],
                    [186.26964616775513, 0, 0],
                    [192.68085193634033, 0, 0],
                    [198.56950902938843, 0, 0],
                    [192.68281269073486, 0, 0.00098419189453125],
                    [208.95178318023682, 0, 0],
                    [213.5128688812256, 0, 0],
                    [221.56566047668457, 0, 0],
                    [231.35248279571533, 0, 0],
                    [234.10069465637207, 0, 0],
                    [236.62394905090332, 0, 0],
                    [238.94390296936035, 0, 0],
                    [238.94390201568604, 0, 283.24334716796875],
                    [238.94586277008057, 0, 283.2424011230469],
                    [254.51007843017578, 0, 270.7424011230469]
                ]],
                ["Fountain", 12, [
                    [450.900423407554626, 0, 0],
                    [450.73103332519531, 0, 0],
                    [450.900423407554626, 0, 0],
                    [450.3917555809021, 0, 0],
                    [450.3917555809021, 0, 0],
                    [450.3917555809021, 0, 0],
                    [450.22231674194336, 0, 0],
                    [450.08318901062012, 0, 0],
                    [450.41434955596924, 0, 0],
                    [450.15271377563477, 0, 0],
                    [450.7157211303711, 0, 0],
                    [450.5017385482788, 0, 0],
                    [450.57388305664063, 0, 0],
                    [450.9901828765869, 0, 0],
                    [450.41479682922363, 0, 0],
                    [450.06400680541992, 0, 0],
                    [450.81544876098633, 0, 0],
                    [450.09961318969727, 0, 0],
                    [450.41479682922363, 0, 0],
                    [450.81321144104004, 0, 270.7433776855469],
                    [450.81321144104004, 0, 270.7433776855469],
                    [450.18292808532715, 0, 245.74240112304688],
                    [450.18292808532715, 0, 245.74240112304688]
                ]],
                ["Graveyard", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 258.2433776855469],
                    [450, 0, 233.24337768554688],
                    [450, 0, 220.74337768554688],
                    [450, 0, 195.74337768554688],
                    [450, 0, 183.24337768554688],
                    [450, 0, 158.24337768554688],
                    [450, 0, 145.74337768554688]
                ]],
                ["Box", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["Box A", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 270.7433776855469],
                    [450, 0, 258.2433776855469],
                    [450, 0, 245.74240112304688],
                    [450, 0, 220.74240112304688],
                    [450, 0, 208.24240112304688],
                    [450, 0, 195.74240112304688],
                    [450, 0, 170.74240112304688]
                ]],
                ["Archade", 12, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 270.7433776855469],
                    [450, 0, 270.7433776855469],
                    [450, 0, 245.74337768554688],
                    [450, 0, 245.74337768554688],
                    [450, 0, 233.2433624267578]
                ]],
            ]

        }
        if (world == "de_nuke") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_overpass") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_train") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_cache") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_shortdust") {
            movement_autothrow = [
                ["Box", 4, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["One-Way Car", 8, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],

            ]
        }

        if (world == "de_cbble") coords = [
            ["Fountain", "Throw", "nade", 280.924866, -80.187576, -12.565859, -8.844892, -94.796295],
            ["Rock", "Throw", "molotov", 591.136230, -132.038406, 0.031250, -9.724643, -145.176041],
            ["Boost Corner", "Throw", "molotov", 47.968750, -16.031250, -23.177315, -31.504919, -124.580345],
            ["Boost Corner1", "Run + JumpThrow", "molotov", -94.259033, -239.954468, -31.968748, -18.909958, 91.239822],
            ["One-way Long", "Crouch + Right click", "smoke", 272.031250, -291.031250, -63.906189, -30.971577, 17.418360],
            ["B Long", "JumpThrow", "smoke", -1540.973389, -1226.978027, -25.199188, -50.672855, 41.294445],
            ["Matrix", "Throw", "smoke", -1864.968750, -1611.968750, 96.093810, -11.221231, 136.023499],
            ["B Long", "Throw", "smoke", -288.031250, 1020.970520, 128.093811, -51.547066, -53.167721],
            ["Truck - front", "Throw", "smoke", -3295.975586, 79.968750, -29.906188, -36.680634, -52.524323],
            ["Truck - right", "Throw", "smoke", -3168.031250, 79.968750, -29.906188, -47.158157, -65.556221],
            ["Grass", "Throw", "smoke", -3167.270508, 584.685120, 0.093811, -55.144222, -61.434193],
            ["Skyfall", "Throw", "smoke", -752.031250, -80.031250, 128.093811, 5.361639, -119.332336],
            ["Hut - right", "Throw", "smoke", -155.970673, -16.010778, -31.906188, -50.869473, -69.637550],
            ["Hut - left", "Throw", "smoke", -340.020111, -80.031250, -31.907466, -53.921837, -52.166801],
            ["Sandwich", "Throw", "smoke", 47.968750, -16.031250, -23.114716, -81.378204, -89.289169],
            ["Fountain", "Throw", "smoke", -418.514893, -95.749924, -32.562836, -75.323563, -61.343159],
            ["B Door", "Throw", "smoke", -558.031250, -42.535999, 0.093811, -62.173512, -100.720726],
            ["Balcony", "JumpThrow", "smoke", -2534.005371, -272.031250, -184.407272, -17.127037, -65.392319],
            ["A Door", "Walk + Throw", "smoke", -3346.178711, 455.572449, 0.093811, -40.327240, -45.610413],
            ["A Door", "Run + Throw", "smoke", -2989.968750, -944.371948, 32.093811, -12.160514, -4.402364],
            ["Skyfall", "Throw", "flashbang", -780.031250, 111.931717, 128.093811, -4.768500, -92.183800],
            ["Skyfall", "Throw", "flashbang", -590.995239, 434.631622, -0.906188, -17.854057, -108.593758],
            ["Wood", "Throw", "flashbang", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882],
            ["Balcony", "Run + Throw", "molotov", -2989.968750, -944.036682, 32.093811, -15.675012, -32.634476],
            ["Wood", "Throw", "molotov", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882]
        ]

        if (world == "de_mirage") coords = [
            ["One-Way Ramp", "Run + JumpThrow", "molotov", -34.403679, -1916.279053, -39.968750, 2.595078, 71.391121],
            ["Car", "Throw", "molotov", -1182.872070, 679.580505, -79.968750, -9.450004, 174.482330],
            ["Under", "Walk + Throw", "molotov", -34.409924, 822.263123, -135.968750, -8.459991, -150.967743],
            ["One-Way Site", "Throw", "molotov", -538.933411, -1309.055664, -159.968750, -11.109911, -75.805000],
            ["One-Way Box", "JumpThrow", "molotov", 663.968750, -1128.005005, -127.968750, 0.395009, -136.764679],
            ["Window", "Run + Throw", "molotov", 334.825684, -149.313019, -165.968750, -17.259995, -152.143692],
            ["Ramp", "Throw", "molotov", -1119.997314, -1527.024292, -156.076477, -17.370033, 0.035920],
            ["Stairs", "Throw", "molotov", 499.251617, -1574.105713, -261.590881, -25.290028, 176.995941],
            ["Window Mid", "JumpThrow", "smoke", 1423.964355, -248.026840, -167.906188, -25.723558, -170.518921],
            ["Connector", "JumpThrow ", "smoke", 1135.968750, 647.996033, -261.322754, -34.518116, -140.291428],
            ["Catwalk", "Throw", "smoke", 1423.997803, 71.985359, -112.840103, -32.653351, -163.530762],
            ["One-way Mid", "Right click", "smoke", 369.960144, -720.522705, -162.412476, 35.376301, 124.135780],
            ["Short", "Run + Throw", "smoke", 399.998444, 4.656666, -203.571350, -22.060497, -134.482208],
            ["Window Mid", "Throw", "smoke", -624.243530, 615.992065, -78.914246, -51.595604, -109.421127],
            ["Kitchen door", "Throw", "smoke", -2325.227783, 811.800659, -119.773079, -14.883981, -94.343178],
            ["Short", "Throw", "smoke", -160.031250, 887.968750, -135.265563, -44.269619, -134.435654],
            ["Kitchen window", "Throw", "smoke", -835.001404, 615.070190, -79.065735, -63.789238, -146.581238],
            ["Short", "Throw", "smoke", 341.836212, -620.153992, -163.282486, -23.134167, 164.957458],
            ["Connector + Jungle", "Throw", "smoke", 815.999512, -1457.235596, -108.906189, -26.797188, -174.613022],
            ["Stairs", "Throw", "smoke", 1148.225586, -1183.999756, -205.509155, -41.168613, -165.354019],
            ["Window Mid", "Run + Throw", "smoke", 1391.968750, -1011.236084, -167.906188, -42.603077, 172.188919],
            ["Stairs", "JumpThrow", "smoke", -90.864479, -1418.000244, -115.906189, -31.895834, -62.464306],
            ["Fireboxes", "JumpThrow", "smoke", 1391.968750, -930.076294, -167.906188, -21.037338, -151.204865],
            ["One-way", "Throw", "smoke", 457.968750, -1711.996582, -240.886871, -10.477256, 133.144836],
            ["Bombsite A", "Throw", "smoke", 815.998718, -1272.017944, -108.906189, -32.654591, -149.503601],
            ["CT Spawn", "JumpThrow", "smoke", 1257.861938, -871.968750, -143.906188, -21.318205, -144.344666],
            ["One-way", "Throw", "smoke", -1209.077515, -873.270447, -167.906188, -48.526600, 67.790833],
            ["One-way", "Right click", "smoke", -964.056885, -2489.520264, -167.913391, -41.926632, -10.765607],
            ["Ramp", "JumpThrow", "smoke", -2026.397583, -2029.968750, -299.060150, -15.312100, 12.573707],
            ["One-way Kitchen", "Throw", "smoke", -2600.019287, 535.973022, -159.906188, -16.582365, -50.818062],
            ["B Apps", "Throw", "flashbang", -2114.031250, 830.582214, -121.516441, -69.514664, 38.815456],
            ["Connector", "Throw", "flashbang", -496.031250, -1309.031250, -159.906188, -65.176048, -10.261290],
            ["Fireboxes", "Throw", "molotov", -31.432693, -1418.005371, -167.906188, -19.768339, -138.115036],
            ["Tetris", "Throw", "molotov", -364.996552, -2173.031250, -176.139190, -26.004026, 44.655296]
        ]

        if (world == "de_dust2") coords = [
            ["B Entrance", "Throw", "smoke", -1846.553223, 1232.569824, 32.496025, -8.613732, 118.773392],
            ["CT Mid", "Throw", "smoke", -538.606567, 1382.031250, -111.957108, -35.360550, 53.845985],
            ["Xbox", "Throw", "smoke", 229.130554, 112.497559, 5.215744, -40.624023, 108.758316],
            ["Long Corner", "Throw", "smoke", 222.664124, -87.978210, 9.093811, -46.250572, 48.164497],
            ["CT Spawn", "Run + Throw", "smoke", 860.031250, 790.031250, 3.900847, -23.414322, 43.616291],
            ["Short (Close)", "Throw", "smoke", 489.998535, 1446.031250, 2.660506, -5.677320, 88.280685],
            ["Long Gate", "Throw", "smoke", 1752.049561, 2046.932739, 0.365111, -33.430305, -130.546280],
            ["Lower Mid", "Throw", "smoke", -242.031250, 2278.887695, -119.931587, -32.687481, -123.649094],
            ["Upper Tunnel", "Throw", "smoke", -985.452942, 2553.223877, 1.318862, -26.764244, -143.848251],
            ["Bombsite B", "Throw", "flashbang", -1273.968750, 2575.968750, 67.353363, -42.043125, 1.218936],
            ["Bombsite B", "Throw", "molotov", -760.031250, 2066.031250, -45.182931, -23.497030, 132.684860]
        ]

        if (world == "de_inferno") coords = [
            ["Graveyard", "Run + JumpThrow", "molotov", 2017.503174, 1225.968750, 178.031250, -33.659977, -64.684898],
            ["Mid", "Run + JumpThrow", "molotov", 2343.707520, 568.729492, 145.928940, -38.500111, -178.690613],
            ["Fountain", "Run + JumpThrow", "molotov", 362.636536, 1726.205933, 128.376053, -39.875027, 95.339996],
            ["Triple Box", "Throw", "molotov", 877.968750, 2393.092041, 150.504181, -13.529912, 168.994965],
            ["Library", "JumpThrow", "molotov", 1314.032593, 797.901489, 153.586700, -26.509958, 10.154735],
            ["Box", "Run + Throw", "molotov", 1364.515015, 277.541809, 135.426834, -17.755112, -48.144848],
            ["Archade", "Run + JumpThrow", "molotov", 1287.723633, 434.031250, 125.995117, -36.354294, 55.140560],
            ["Default", "JumpThrow", "molotov", 1961.373169, 1225.968750, 175.031250, -34.145012, -79.280289],
            ["Stove", "Throw", "molotov", 698.401245, -267.968750, 105.031250, -21.614807, 32.599926],
            ["Mid", "Run + Throw", "smoke", -857.968750, 449.902283, -31.604805, -44.401531, 1.405892],
            ["Pit", "Run + Throw", "molotov", 2105.090088, 1168.412354, 165.084000, -13.804811, -63.900101],
            ["Box A", "Run + JumpThrow", "molotov", 2079.774658, 1225.998535, 180.093811, -37.500053, -89.940086],
            ["Coffins", "Throw", "smoke", 338.871887, 1650.802856, 122.093810, -50.093639, 84.572739],
            ["B Entrance", "Throw", "smoke", 460.464905, 1828.470825, 136.182693, -25.443281, 86.280159],
            ["CT Spawn", "Throw", "smoke", 119.999580, 1587.966187, 113.307662, -34.798424, 56.149929],
            ["Long (Deep)", "Run + Throw", "smoke", 274.681335, -224.627777, 88.093810, -41.052132, 31.799410],
            ["Pit (Crack)", "Throw", "smoke", 704.160339, 11.968750, 88.797089, -52.337799, -2.135024],
            ["Short (Deep)", "Throw", "smoke", 697.511902, -242.261810, 91.093810, -53.097946, 16.442726],
            ["Library to A", "Throw", "smoke", 960.900330, 434.006409, 88.093810, -49.863846, 13.159984],
            ["Pit to Hay", "Throw", "smoke", 726.031250, 220.962921, 94.029999, -55.241890, -8.699924],
            ["Long", "Throw", "smoke", 491.936829, -267.968750, 88.093810, -42.024933, 45.854645],
            ["Bombsite B", "Throw", "smoke", 1971.687988, 2636.702393, 128.093811, -39.996227, 175.975357],
            ["Connector", "Throw", "smoke", 726.031250, 288.680084, 96.093810, -43.560978, 41.450943],
            ["One-way", "Throw", "smoke", 2631.968750, -16.031250, 84.093810, -5.692367, -179.128860],
            ["Balcony", "Throw", "smoke", 1913.227295, 1225.968750, 174.093811, -46.497322, -87.005005],
            ["B Entrance", "Throw", "flashbang", 498.968750, 2444.031250, 160.093811, 1.748943, 142.807571],
            ["Banana", "Throw", "flashbang", 610.968750, 1873.031250, 134.252365, -44.186985, -0.872295],
            ["Short", "Walk + Throw", "flashbang", 1275.968750, -111.968750, 256.093811, 9.454458, 116.691383],
            ["Bombsite A", "Crouch + Throw", "flashbang", 1329.031250, -365.989349, 256.093811, -29.733957, -22.831499],
            ["B Plant", "JumpThrow", "molotov", 929.176636, 3295.995117, 144.093811, -45.887463, -131.960571],
            ["3s", "Throw", "molotov", 999.982422, 1878.530640, 149.329788, -26.647552, 141.132538],
            ["Coffins", "Throw", "molotov", 664.968750, 1873.031250, 168.093811, -24.272781, 96.641022]
        ]

        if (world == "de_nuke") coords = [
            ["Hangar", "Throw", "smoke", -164.092941, -1954.733765, -415.916107, -13.613587, 1.278547],
            ["Red container", "Throw", "smoke", -533.003357, -833.215759, -193.634827, -30.904673, -43.816589],
            ["Between containers", "Run + Throw", "smoke", -423.996399, -1753.002075, -415.914856, -2.624159, -50.804165],
            ["T Outside", "JumpThrow", "smoke", 1664.031250, -280.002014, -351.906250, -25.048063, -135.212463]
        ]

        if (world == "de_overpass") coords = [
            ["Stairs", "Run + JumpThrow", "molotov", -3750.460938, -250.358826, 520.609863, 5.050490, 35.776577],
            ["Barrels", "Run + Throw", "molotov", -430.186157, -1551.968750, 150.031250, -16.164569, 101.556863],
            ["Heaven", "Walk + JumpThrow", "molotov", -856.031311, -639.968750, 105.031250, 4.120225, 128.027786],
            ["Barrels", "Throw", "molotov", -1580.517578, -710.171814, 135.334778, -14.950030, 60.188404],
            ["Water", "Throw", "molotov", -1276.541260, -964.551147, 10.933800, -23.484703, 82.194580],
            ["Toilet entrance", "Run + Throw", "smoke", -730.031250, -2225.143799, 240.093811, -51.612926, 149.045975],
            ["B Bridge", "Throw", "smoke", -617.486389, -1509.028809, 144.093811, -48.988934, 113.071342],
            ["B Center", "Throw", "smoke", -525.982300, -1551.984375, 144.093811, -43.807911, 110.431473],
            ["Barrels to Pillar", "Throw", "smoke", -613.014099, -1082.017212, 42.160416, -29.337307, 99.340714],
            ["B Center", "Throw", "smoke", -1567.968750, -1087.984619, 0.093811, -30.278185, 74.646019],
            ["Monster to Pillar", "Throw", "smoke", -1645.986938, -1087.982300, 96.093810, -20.015800, 55.835869],
            ["Heaven", "Throw", "smoke", -1559.968750, -728.785583, 52.574355, -33.446209, 96.293686],
            ["B Bridge", "Throw", "smoke", -1559.999390, -361.285339, 32.421722, -43.693123, 21.193089],
            ["Heaven", "Throw", "smoke", -2174.002441, -1151.968750, 398.197235, -26.368107, 71.543701],
            ["Long to Boxes", "Throw", "smoke", -2025.534058, -865.001343, 395.427856, -28.313963, 114.564102],
            ["Bank", "Throw", "smoke", -2162.000488, -519.968750, 391.460358, -29.749702, 100.836487],
            ["Truck to Bank", "Throw", "smoke", -3612.545654, -177.626740, 512.791992, -40.392601, 51.259613],
            ["Boxes to Truck", "Throw", "smoke", -3540.031250, -381.968750, 528.080200, -14.256992, 41.849758],
            ["Truck", "Throw", "smoke", -2351.968750, -815.968750, 391.089905, -34.683971, 81.500427],
            ["Trash", "Throw", "smoke", -2351.968750, -414.031250, 388.562317, -60.588089, 73.825958],
            ["Trash", "Throw", "smoke", -3383.369629, 35.247875, 516.906006, -18.035419, 31.699080],
            ["Long", "Crouch + Throw", "smoke", -1993.398926, 537.698242, 475.093810, -28.677984, -169.596695],
            ["Monster", "Throw", "smoke", -1926.860962, 1311.968750, 355.030579, -46.200985, -40.010532],
            ["One-way", "Throw", "smoke", -2191.968750, 1311.968750, 356.093811, -8.861760, -55.390415],
            ["One-way", "Right click", "smoke", -1826.375610, 629.178894, 256.093811, 26.580435, -17.457275],
            ["One-way", "Throw", "smoke", -2012.968750, -1231.968750, 240.093811, 16.218643, 63.144173],
            ["Short B", "Throw", "smoke", -2115.841309, 992.920288, 480.093810, -22.936214, -57.690578],
            ["Bombsite A", "Throw", "flashbang", -2604.023926, 1102.215088, 480.093810, -24.090078, 70.938210],
            ["Barrels", "Throw", "molotov", -1580.023315, -480.767883, 136.093811, -20.147602, 53.764153],
            ["Bombsite B", "Throw", "molotov", -1399.968750, -139.998840, 0.093811, -15.444187, 63.084324]
        ]

        if (world == "de_train") coords = [
            ["B site", "Throw", "molotov", -1085.563477, -954.344543, -55.968750, -2.244908, -11.982774],
            ["Default", "Walk + Throw", "molotov", 1054.867188, 426.185638, -215.982330, -14.129807, -158.603027],
            ["Heaven", "Throw", "molotov", 132.170197, 499.088257, -219.968750, -30.679949, -56.869923],
            ["Site", "Run + Throw", "molotov", -338.848297, 307.854095, -215.968750, -29.580017, -36.570026],
            ["B Upper", "Throw", "smoke", -1055.968750, -1607.969116, -151.906188, -9.076089, -21.028521],
            ["B Lower", "Throw", "smoke", -1159.978027, -1088.112549, -95.909508, -9.122071, 13.307947],
            ["Blue to Bombsite", "Run + Throw", "smoke", -1155.979004, -1301.504395, -95.906189, -15.857571, 38.882820],
            ["Connector", "Run + Throw", "smoke", -1159.999634, -1048.001709, -95.906189, -11.023086, 5.091055],
            ["Ivy (right)", "Throw", "smoke", 1388.426270, 1446.000488, -223.906189, -6.188282, -95.524574],
            ["Ivy (left)", "Run + Throw", "smoke", 1535.968750, 1775.968750, -223.906189, -9.818258, -112.486588],
            ["Bombsite A to Connector", "Both buttons", "smoke", -655.968750, -399.892731, 16.093811, -46.002502, 10.890710],
            ["Blue to Red train", "Throw", "smoke", -645.479370, 1697.721924, -209.906189, -41.564690, -65.086685],
            ["Electric box", "Throw", "smoke", -481.865631, 1725.011597, -209.906189, -45.937080, -78.790627],
            ["Blue train (Left)", "Throw", "smoke", -555.031250, 1262.031250, -212.532227, -68.096550, -50.974125],
            ["Green to Red train", "Throw", "smoke", -838.162292, 1268.024414, -222.906189, -37.604507, -42.064575],
            ["Ivy to Green train", "Throw", "smoke", -640.027832, -583.969666, 16.093811, -44.699406, 32.218452],
            ["Bombsite A to Red train", "Throw", "smoke", -453.358459, 1286.284668, -86.490753, -25.130558, -58.731426],
            ["Main", "Throw", "smoke", 1021.096924, -254.988556, -215.906189, -38.494926, 154.562332],
            ["Bombsite A", "Run + Throw", "flashbang", 400.031250, -420.031250, -211.777573, -28.859020, -89.674629],
            ["Blue train (Back)", "Run + Throw", "molotov", -790.028748, 375.928741, -215.906189, -11.270589, 27.332729]
        ]

        if (world == "de_cache") coords = [
            ["Ventsroom", "Throw", "smoke", 837.744141, -872.015564, 1614.093750, -15.362073, 177.850555],
            ["Headshot", "Throw", "smoke", 960.031250, -1463.968750, 1644.093750, -26.400745, 162.851730],
            ["B Center", "Throw", "smoke", 827.971313, -1463.968750, 1614.093750, -21.995483, 162.191437],
            ["Mid Center", "Throw", "smoke", 1711.974121, 463.987732, 1614.093750, -10.675973, -167.299591],
            ["Connector", "Throw", "smoke", 1160.711182, 715.841675, 1613.093750, -31.334572, -153.088974],
            ["White box", "Throw", "smoke", 2156.583740, -182.968750, 1613.483887, -22.077839, 161.943924],
            ["One-way", "Throw", "smoke", 1037.031250, 513.031250, 1613.550293, -49.137814, 104.639671],
            ["Mid (Right side)", "Throw", "smoke", 1711.968750, -71.968750, 1614.093750, -10.560504, 161.185349],
            ["Bombsite A", "Crouch + Throw", "smoke", 154.413376, 2096.080566, 1688.093750, 9.370919, -29.337667],
            ["Short", "Run + Throw", "smoke", 139.031250, 2197.968750, 1688.093750, -6.040052, -60.836231],
            ["Bombsite A", "Throw", "smoke", 1319.968750, 1520.395508, 1701.093750, -57.767025, 161.424835],
            ["Forklift", "Throw", "smoke", 1230.754150, 1612.968750, 1701.965088, -74.514435, -173.894516],
            ["Main", "Throw", "smoke", -782.198059, 1110.000366, 1689.439697, -9.703021, 24.963852],
            ["Main", "Throw", "smoke", -429.968750, 2244.968750, 1687.093750, -66.017174, -31.140173],
            ["Main", "Throw", "smoke", -50.012558, 2261.968750, 1687.093750, -18.612713, -64.612831],
            ["Vents", "Run + Throw", "smoke", -996.979553, 1440.231689, 1691.182373, -33.181599, -46.326721],
            ["Bombsite A", "Throw", "flashbang", -358.534668, 2147.728027, 1687.093750, -17.540194, 2.039984],
            ["Bombsite A", "Throw", "flashbang", 89.984558, 2244.983398, 1687.093750, -71.181236, -93.482628],
            ["Bombsite B", "Both buttons", "flashbang", -633.975891, -379.968750, 1620.093750, -41.629662, -58.865555],
            ["Mid", "Crouch + Throw", "flashbang", 114.968750, -107.322037, 1613.718506, -16.913092, -84.200432],
            ["Mid", "Run + Throw", "flashbang", 1736.970581, 308.968750, 1614.093750, -9.157659, 162.762833],
            ["Bombsite B", "Throw", "flashbang", 879.802185, -872.031250, 1614.093750, -14.157107, 177.892853],
            ["Bombsite B", "Throw", "molotov", 907.649597, -1228.031250, 1614.093750, -23.876366, -179.771790],
            ["White box", "Throw", "molotov", 605.005188, -149.968750, 1689.035889, -6.584105, 133.537994],
            ["Boost", "Throw", "molotov", 11.759085, -148.994904, 1613.093750, -32.654572, 38.675369]
        ]

        if (world == "de_shortdust") coords = [
            ["Box", "Run + Throw", "molotov", -309.406403, 1933.314819, 32.031250, -5.444888, -45.821072],
            ["Car", "Throw", "molotov", -893.477783, 956.593933, 35.031250, -11.485014, -34.438034],
            ["One-Way CT", "Throw", "molotov", -450.279297, 780.684265, 40.753510, -19.734886, -50.160259],
            ["One-Way Car", "Run + Throw", "molotov", -1279.968750, 1039.968750, -170.329315, -27.609568, -18.734381]
        ]


        var font1 = Render.AddFont("Verdana", 10, 600)

        var font2 = Render.AddFont("Verdana", 12, 600)

        var font3 = Render.AddFont("Verdana", 12, 500)

        var scsiz = Render.GetScreenSize()
        var scrmid = [Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2]

        var coordslenght = 0

        color_circle = [0, 0, 0, 0]

        while (coords[coordslenght]) {

            coordslenght++

        }
        for (var i = 0; i < coordslenght; i++) {

            crd = coords[i]

            if (weaponnames[crd[2]].indexOf(weapon) >= 0) {

                cds = Render.WorldToScreen([crd[3], crd[4], crd[5]])

                var distance = dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer()))
                var nadeallmap = UI.GetValue(scriptitems, "Render nade on all map");

                if (nadeallmap) {
                    if (distance >= 7000 - 255 && distance <= 7000) {
                        Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, Math.round(Math.min(255, 7000 - distance))), font1)
                        continue;
                    }
                    if (distance < 7000 - 255 && distance >= 10) {
                        Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, 255), font1)
                    }
                } else {
                    if (distance >= 800 - 255 && distance <= 800) {
                        Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, Math.round(Math.min(255, 800 - distance))), font1)
                        continue;
                    }
                    if (distance < 800 - 255 && distance >= 10) {
                        Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, 255), font1)
                    }
                }

                if (dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer())) < 10) {

                    Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, 255), font2)


                    vec = atv(crd[6], crd[7])

                    wec = Render.WorldToScreen([crd[3] + vec[0] * 200, crd[4] + vec[1] * 200, crd[5] + 64 + vec[2] * 200])


                    Render.StringCustom(wec[0] + 14, wec[1] - 9, 0, crd[1], alp(color, 255), font3)

                    Render.Line(scsiz[0] / 2, scsiz[1] / 2, wec[0], wec[1], alp(color, 255))


                    if ((Math.abs(wec[0] - scrmid[0]) + Math.abs(wec[1] - scrmid[1])) <= 5) {
                        color_circle = [0, 255, 0, 255]
                    } else {
                        color_circle = [255, 0, 0, 255]
                    }

                    Render.FilledCircle(wec[0], wec[1], 5, (color_circle));

                    Render.Circle(wec[0], wec[1], 5, alp(color, 255))
                }
            }
        }
    }
}

coords_auto_throw = []
tickcount = 0
running = false;

function on_create_move() {

    weaponnames = {
        "flashbang": [43],
        "molotov": [46, 48],
        "smoke": [45],
        "nade": [44]
    }

    weapon = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CEconEntity", "m_iItemDefinitionIndex")

    world = World.GetMapName()

    color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Grenade Helper Color")

    var enabled = UI.GetValue(scriptitems, "Enable gernade helper");

    if (enabled) {
        if (!color) color = [255, 255, 255, 255]

        if ([46, 48, 45, 43, 44].indexOf(weapon) < 0) return

        // ["", "", "",  ],
        // ["", ,[]],

        if (world == "de_cbble") {
            movement_autothrow = [
                ["Boost Corner1", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 270.74334716796875],
                    [450, 0, 270.7424011230469],
                    [450, 0, 270.7424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 258.2424011230469],
                    [450, 0, 245.74240112304688]
                ]],


            ]
        }
        if (world == "de_mirage") {
            movement_autothrow = [
                ["Under", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["Window", 10, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["One-Way Ramp", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469]
                ]],
            ]
        }
        if (world == "de_dust2") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_inferno") {
            movement_autothrow = [
                ["Pit", 8, [
                    [450.02211380004883, 0, 0],
                    [450.65053939819336, 0, 0],
                    [450.90695571899414, 0, 0],
                    [450.53515625, 0, 0],
                    [450.393945693969727, 0, 0],
                    [450.5786018371582, 0, 0],
                    [450.5311737060547, 0, 0],
                    [450.2818603515625, 0, 0],
                    [450.48575592041016, 0, 0],
                    [450.93397521972656, 0, 0],
                    [450.8269958496094, 0, 0],
                    [450.3787612915039, 0, 0],
                    [450.398193359375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0],
                    [450.009521484375, 0, 0]
                ]],
                ["Mid", 1, [
                    [1.125562559813261, 0, 0],
                    [1.1255620624870062, 0, 0],
                    [1.12556217238307, 0, 0],
                    [1.1255620624870062, 0, 0],
                    [1.1255620624870062, 0, 0],
                    [1.124624202027917, 0, 0],
                    [1.12556217238307, 0, 0],
                    [21.543969690799713, 0, 0],
                    [36.43856465816498, 0, 0],
                    [66.22589480876923, 0, 0],
                    [81.11870193481445, 0, 0],
                    [109.75620746612549, 0, 0],
                    [122.38414692878723, 0, 0],
                    [133.98439383506775, 0, 0],
                    [133.9861981868744, 0, 0],
                    [144.6437792778015, 0, 0],
                    [163.4331409931183, 0, 0],
                    [163.4331409931183, 0, 0],
                    [179.29327392578125, 0, 0],
                    [186.26964616775513, 0, 0],
                    [192.68085193634033, 0, 0],
                    [198.56950902938843, 0, 0],
                    [192.68281269073486, 0, 0.00098419189453125],
                    [208.95178318023682, 0, 0],
                    [213.5128688812256, 0, 0],
                    [221.56566047668457, 0, 0],
                    [231.35248279571533, 0, 0],
                    [234.10069465637207, 0, 0],
                    [236.62394905090332, 0, 0],
                    [238.94390296936035, 0, 0],
                    [238.94390201568604, 0, 283.24334716796875],
                    [238.94586277008057, 0, 283.2424011230469],
                    [254.51007843017578, 0, 270.7424011230469]
                ]],
                ["Fountain", 12, [
                    [450.900423407554626, 0, 0],
                    [450.73103332519531, 0, 0],
                    [450.900423407554626, 0, 0],
                    [450.3917555809021, 0, 0],
                    [450.3917555809021, 0, 0],
                    [450.3917555809021, 0, 0],
                    [450.22231674194336, 0, 0],
                    [450.08318901062012, 0, 0],
                    [450.41434955596924, 0, 0],
                    [450.15271377563477, 0, 0],
                    [450.7157211303711, 0, 0],
                    [450.5017385482788, 0, 0],
                    [450.57388305664063, 0, 0],
                    [450.9901828765869, 0, 0],
                    [450.41479682922363, 0, 0],
                    [450.06400680541992, 0, 0],
                    [450.81544876098633, 0, 0],
                    [450.09961318969727, 0, 0],
                    [450.41479682922363, 0, 0],
                    [450.81321144104004, 0, 270.7433776855469],
                    [450.81321144104004, 0, 270.7433776855469],
                    [450.18292808532715, 0, 245.74240112304688],
                    [450.18292808532715, 0, 245.74240112304688]
                ]],
                ["Graveyard", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 258.2433776855469],
                    [450, 0, 233.24337768554688],
                    [450, 0, 220.74337768554688],
                    [450, 0, 195.74337768554688],
                    [450, 0, 183.24337768554688],
                    [450, 0, 158.24337768554688],
                    [450, 0, 145.74337768554688]
                ]],
                ["Box", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["Box A", 1, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 270.7433776855469],
                    [450, 0, 258.2433776855469],
                    [450, 0, 245.74240112304688],
                    [450, 0, 220.74240112304688],
                    [450, 0, 208.24240112304688],
                    [450, 0, 195.74240112304688],
                    [450, 0, 170.74240112304688]
                ]],
                ["Archade", 12, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 283.2433776855469],
                    [450, 0, 283.2433776855469],
                    [450, 0, 270.7433776855469],
                    [450, 0, 270.7433776855469],
                    [450, 0, 245.74337768554688],
                    [450, 0, 245.74337768554688],
                    [450, 0, 233.2433624267578]
                ]],
            ]

        }
        if (world == "de_nuke") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_overpass") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_train") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_cache") {
            movement_autothrow = [
                []

            ]
        }
        if (world == "de_shortdust") {
            movement_autothrow = [
                ["Box", 4, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],
                ["One-Way Car", 8, [
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0],
                    [450, 0, 0]
                ]],

            ]
        }

        if (world == "de_cbble") coords = [
            ["Fountain", "Throw", "nade", 280.924866, -80.187576, -12.565859, -8.844892, -94.796295],
            ["Rock", "Throw", "molotov", 591.136230, -132.038406, 0.031250, -9.724643, -145.176041],
            ["Boost Corner", "Throw", "molotov", 47.968750, -16.031250, -23.177315, -31.504919, -124.580345],
            ["Boost Corner1", "Run + JumpThrow", "molotov", -94.259033, -239.954468, -31.968748, -18.909958, 91.239822],
            ["One-way Long", "Crouch + Right click", "smoke", 272.031250, -291.031250, -63.906189, -30.971577, 17.418360],
            ["B Long", "JumpThrow", "smoke", -1540.973389, -1226.978027, -25.199188, -50.672855, 41.294445],
            ["Matrix", "Throw", "smoke", -1864.968750, -1611.968750, 96.093810, -11.221231, 136.023499],
            ["B Long", "Throw", "smoke", -288.031250, 1020.970520, 128.093811, -51.547066, -53.167721],
            ["Truck - front", "Throw", "smoke", -3295.975586, 79.968750, -29.906188, -36.680634, -52.524323],
            ["Truck - right", "Throw", "smoke", -3168.031250, 79.968750, -29.906188, -47.158157, -65.556221],
            ["Grass", "Throw", "smoke", -3167.270508, 584.685120, 0.093811, -55.144222, -61.434193],
            ["Skyfall", "Throw", "smoke", -752.031250, -80.031250, 128.093811, 5.361639, -119.332336],
            ["Hut - right", "Throw", "smoke", -155.970673, -16.010778, -31.906188, -50.869473, -69.637550],
            ["Hut - left", "Throw", "smoke", -340.020111, -80.031250, -31.907466, -53.921837, -52.166801],
            ["Sandwich", "Throw", "smoke", 47.968750, -16.031250, -23.114716, -81.378204, -89.289169],
            ["Fountain", "Throw", "smoke", -418.514893, -95.749924, -32.562836, -75.323563, -61.343159],
            ["B Door", "Throw", "smoke", -558.031250, -42.535999, 0.093811, -62.173512, -100.720726],
            ["Balcony", "JumpThrow", "smoke", -2534.005371, -272.031250, -184.407272, -17.127037, -65.392319],
            ["A Door", "Walk + Throw", "smoke", -3346.178711, 455.572449, 0.093811, -40.327240, -45.610413],
            ["A Door", "Run + Throw", "smoke", -2989.968750, -944.371948, 32.093811, -12.160514, -4.402364],
            ["Skyfall", "Throw", "flashbang", -780.031250, 111.931717, 128.093811, -4.768500, -92.183800],
            ["Skyfall", "Throw", "flashbang", -590.995239, 434.631622, -0.906188, -17.854057, -108.593758],
            ["Wood", "Throw", "flashbang", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882],
            ["Balcony", "Run + Throw", "molotov", -2989.968750, -944.036682, 32.093811, -15.675012, -32.634476],
            ["Wood", "Throw", "molotov", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882]
        ]

        if (world == "de_mirage") coords = [
            ["One-Way Ramp", "Run + JumpThrow", "molotov", -34.403679, -1916.279053, -39.968750, 2.595078, 71.391121],
            ["Car", "Throw", "molotov", -1182.872070, 679.580505, -79.968750, -9.450004, 174.482330],
            ["Under", "Walk + Throw", "molotov", -34.409924, 822.263123, -135.968750, -8.459991, -150.967743],
            ["One-Way Site", "Throw", "molotov", -538.933411, -1309.055664, -159.968750, -11.109911, -75.805000],
            ["One-Way Box", "JumpThrow", "molotov", 663.968750, -1128.005005, -127.968750, 0.395009, -136.764679],
            ["Window", "Run + Throw", "molotov", 334.825684, -149.313019, -165.968750, -17.259995, -152.143692],
            ["Ramp", "Throw", "molotov", -1119.997314, -1527.024292, -156.076477, -17.370033, 0.035920],
            ["Stairs", "Throw", "molotov", 499.251617, -1574.105713, -261.590881, -25.290028, 176.995941],
            ["Window Mid", "JumpThrow", "smoke", 1423.964355, -248.026840, -167.906188, -25.723558, -170.518921],
            ["Connector", "JumpThrow ", "smoke", 1135.968750, 647.996033, -261.322754, -34.518116, -140.291428],
            ["Catwalk", "Throw", "smoke", 1423.997803, 71.985359, -112.840103, -32.653351, -163.530762],
            ["One-way Mid", "Right click", "smoke", 369.960144, -720.522705, -162.412476, 35.376301, 124.135780],
            ["Short", "Run + Throw", "smoke", 399.998444, 4.656666, -203.571350, -22.060497, -134.482208],
            ["Window Mid", "Throw", "smoke", -624.243530, 615.992065, -78.914246, -51.595604, -109.421127],
            ["Kitchen door", "Throw", "smoke", -2325.227783, 811.800659, -119.773079, -14.883981, -94.343178],
            ["Short", "Throw", "smoke", -160.031250, 887.968750, -135.265563, -44.269619, -134.435654],
            ["Kitchen window", "Throw", "smoke", -835.001404, 615.070190, -79.065735, -63.789238, -146.581238],
            ["Short", "Throw", "smoke", 341.836212, -620.153992, -163.282486, -23.134167, 164.957458],
            ["Connector + Jungle", "Throw", "smoke", 815.999512, -1457.235596, -108.906189, -26.797188, -174.613022],
            ["Stairs", "Throw", "smoke", 1148.225586, -1183.999756, -205.509155, -41.168613, -165.354019],
            ["Window Mid", "Run + Throw", "smoke", 1391.968750, -1011.236084, -167.906188, -42.603077, 172.188919],
            ["Stairs", "JumpThrow", "smoke", -90.864479, -1418.000244, -115.906189, -31.895834, -62.464306],
            ["Fireboxes", "JumpThrow", "smoke", 1391.968750, -930.076294, -167.906188, -21.037338, -151.204865],
            ["One-way", "Throw", "smoke", 457.968750, -1711.996582, -240.886871, -10.477256, 133.144836],
            ["Bombsite A", "Throw", "smoke", 815.998718, -1272.017944, -108.906189, -32.654591, -149.503601],
            ["CT Spawn", "JumpThrow", "smoke", 1257.861938, -871.968750, -143.906188, -21.318205, -144.344666],
            ["One-way", "Throw", "smoke", -1209.077515, -873.270447, -167.906188, -48.526600, 67.790833],
            ["One-way", "Right click", "smoke", -964.056885, -2489.520264, -167.913391, -41.926632, -10.765607],
            ["Ramp", "JumpThrow", "smoke", -2026.397583, -2029.968750, -299.060150, -15.312100, 12.573707],
            ["One-way Kitchen", "Throw", "smoke", -2600.019287, 535.973022, -159.906188, -16.582365, -50.818062],
            ["B Apps", "Throw", "flashbang", -2114.031250, 830.582214, -121.516441, -69.514664, 38.815456],
            ["Connector", "Throw", "flashbang", -496.031250, -1309.031250, -159.906188, -65.176048, -10.261290],
            ["Fireboxes", "Throw", "molotov", -31.432693, -1418.005371, -167.906188, -19.768339, -138.115036],
            ["Tetris", "Throw", "molotov", -364.996552, -2173.031250, -176.139190, -26.004026, 44.655296]
        ]

        if (world == "de_dust2") coords = [
            ["B Entrance", "Throw", "smoke", -1846.553223, 1232.569824, 32.496025, -8.613732, 118.773392],
            ["CT Mid", "Throw", "smoke", -538.606567, 1382.031250, -111.957108, -35.360550, 53.845985],
            ["Xbox", "Throw", "smoke", 229.130554, 112.497559, 5.215744, -40.624023, 108.758316],
            ["Long Corner", "Throw", "smoke", 222.664124, -87.978210, 9.093811, -46.250572, 48.164497],
            ["CT Spawn", "Run + Throw", "smoke", 860.031250, 790.031250, 3.900847, -23.414322, 43.616291],
            ["Short (Close)", "Throw", "smoke", 489.998535, 1446.031250, 2.660506, -5.677320, 88.280685],
            ["Long Gate", "Throw", "smoke", 1752.049561, 2046.932739, 0.365111, -33.430305, -130.546280],
            ["Lower Mid", "Throw", "smoke", -242.031250, 2278.887695, -119.931587, -32.687481, -123.649094],
            ["Upper Tunnel", "Throw", "smoke", -985.452942, 2553.223877, 1.318862, -26.764244, -143.848251],
            ["Bombsite B", "Throw", "flashbang", -1273.968750, 2575.968750, 67.353363, -42.043125, 1.218936],
            ["Bombsite B", "Throw", "molotov", -760.031250, 2066.031250, -45.182931, -23.497030, 132.684860]
        ]

        if (world == "de_inferno") coords = [
            ["Graveyard", "Run + JumpThrow", "molotov", 2017.503174, 1225.968750, 178.031250, -33.659977, -64.684898],
            ["Mid", "Run + JumpThrow", "molotov", 2343.707520, 568.729492, 145.928940, -38.500111, -178.690613],
            ["Fountain", "Run + JumpThrow", "molotov", 362.636536, 1726.205933, 128.376053, -39.875027, 95.339996],
            ["Triple Box", "Throw", "molotov", 877.968750, 2393.092041, 150.504181, -13.529912, 168.994965],
            ["Library", "JumpThrow", "molotov", 1314.032593, 797.901489, 153.586700, -26.509958, 10.154735],
            ["Box", "Run + Throw", "molotov", 1364.515015, 277.541809, 135.426834, -17.755112, -48.144848],
            ["Archade", "Run + JumpThrow", "molotov", 1287.723633, 434.031250, 125.995117, -36.354294, 55.140560],
            ["Default", "JumpThrow", "molotov", 1961.373169, 1225.968750, 175.031250, -34.145012, -79.280289],
            ["Stove", "Throw", "molotov", 698.401245, -267.968750, 105.031250, -21.614807, 32.599926],
            ["Mid", "Run + Throw", "smoke", -857.968750, 449.902283, -31.604805, -44.401531, 1.405892],
            ["Pit", "Run + Throw", "molotov", 2105.090088, 1168.412354, 165.084000, -13.804811, -63.900101],
            ["Box A", "Run + JumpThrow", "molotov", 2079.774658, 1225.998535, 180.093811, -37.500053, -89.940086],
            ["Coffins", "Throw", "smoke", 338.871887, 1650.802856, 122.093810, -50.093639, 84.572739],
            ["B Entrance", "Throw", "smoke", 460.464905, 1828.470825, 136.182693, -25.443281, 86.280159],
            ["CT Spawn", "Throw", "smoke", 119.999580, 1587.966187, 113.307662, -34.798424, 56.149929],
            ["Long (Deep)", "Run + Throw", "smoke", 274.681335, -224.627777, 88.093810, -41.052132, 31.799410],
            ["Pit (Crack)", "Throw", "smoke", 704.160339, 11.968750, 88.797089, -52.337799, -2.135024],
            ["Short (Deep)", "Throw", "smoke", 697.511902, -242.261810, 91.093810, -53.097946, 16.442726],
            ["Library to A", "Throw", "smoke", 960.900330, 434.006409, 88.093810, -49.863846, 13.159984],
            ["Pit to Hay", "Throw", "smoke", 726.031250, 220.962921, 94.029999, -55.241890, -8.699924],
            ["Long", "Throw", "smoke", 491.936829, -267.968750, 88.093810, -42.024933, 45.854645],
            ["Bombsite B", "Throw", "smoke", 1971.687988, 2636.702393, 128.093811, -39.996227, 175.975357],
            ["Connector", "Throw", "smoke", 726.031250, 288.680084, 96.093810, -43.560978, 41.450943],
            ["One-way", "Throw", "smoke", 2631.968750, -16.031250, 84.093810, -5.692367, -179.128860],
            ["Balcony", "Throw", "smoke", 1913.227295, 1225.968750, 174.093811, -46.497322, -87.005005],
            ["B Entrance", "Throw", "flashbang", 498.968750, 2444.031250, 160.093811, 1.748943, 142.807571],
            ["Banana", "Throw", "flashbang", 610.968750, 1873.031250, 134.252365, -44.186985, -0.872295],
            ["Short", "Walk + Throw", "flashbang", 1275.968750, -111.968750, 256.093811, 9.454458, 116.691383],
            ["Bombsite A", "Crouch + Throw", "flashbang", 1329.031250, -365.989349, 256.093811, -29.733957, -22.831499],
            ["B Plant", "JumpThrow", "molotov", 929.176636, 3295.995117, 144.093811, -45.887463, -131.960571],
            ["3s", "Throw", "molotov", 999.982422, 1878.530640, 149.329788, -26.647552, 141.132538],
            ["Coffins", "Throw", "molotov", 664.968750, 1873.031250, 168.093811, -24.272781, 96.641022]
        ]

        if (world == "de_nuke") coords = [
            ["Hangar", "Throw", "smoke", -164.092941, -1954.733765, -415.916107, -13.613587, 1.278547],
            ["Red container", "Throw", "smoke", -533.003357, -833.215759, -193.634827, -30.904673, -43.816589],
            ["Between containers", "Run + Throw", "smoke", -423.996399, -1753.002075, -415.914856, -2.624159, -50.804165],
            ["T Outside", "JumpThrow", "smoke", 1664.031250, -280.002014, -351.906250, -25.048063, -135.212463]
        ]

        if (world == "de_overpass") coords = [
            ["Stairs", "Run + JumpThrow", "molotov", -3750.460938, -250.358826, 520.609863, 5.050490, 35.776577],
            ["Barrels", "Run + Throw", "molotov", -430.186157, -1551.968750, 150.031250, -16.164569, 101.556863],
            ["Heaven", "Walk + JumpThrow", "molotov", -856.031311, -639.968750, 105.031250, 4.120225, 128.027786],
            ["Barrels", "Throw", "molotov", -1580.517578, -710.171814, 135.334778, -14.950030, 60.188404],
            ["Water", "Throw", "molotov", -1276.541260, -964.551147, 10.933800, -23.484703, 82.194580],
            ["Toilet entrance", "Run + Throw", "smoke", -730.031250, -2225.143799, 240.093811, -51.612926, 149.045975],
            ["B Bridge", "Throw", "smoke", -617.486389, -1509.028809, 144.093811, -48.988934, 113.071342],
            ["B Center", "Throw", "smoke", -525.982300, -1551.984375, 144.093811, -43.807911, 110.431473],
            ["Barrels to Pillar", "Throw", "smoke", -613.014099, -1082.017212, 42.160416, -29.337307, 99.340714],
            ["B Center", "Throw", "smoke", -1567.968750, -1087.984619, 0.093811, -30.278185, 74.646019],
            ["Monster to Pillar", "Throw", "smoke", -1645.986938, -1087.982300, 96.093810, -20.015800, 55.835869],
            ["Heaven", "Throw", "smoke", -1559.968750, -728.785583, 52.574355, -33.446209, 96.293686],
            ["B Bridge", "Throw", "smoke", -1559.999390, -361.285339, 32.421722, -43.693123, 21.193089],
            ["Heaven", "Throw", "smoke", -2174.002441, -1151.968750, 398.197235, -26.368107, 71.543701],
            ["Long to Boxes", "Throw", "smoke", -2025.534058, -865.001343, 395.427856, -28.313963, 114.564102],
            ["Bank", "Throw", "smoke", -2162.000488, -519.968750, 391.460358, -29.749702, 100.836487],
            ["Truck to Bank", "Throw", "smoke", -3612.545654, -177.626740, 512.791992, -40.392601, 51.259613],
            ["Boxes to Truck", "Throw", "smoke", -3540.031250, -381.968750, 528.080200, -14.256992, 41.849758],
            ["Truck", "Throw", "smoke", -2351.968750, -815.968750, 391.089905, -34.683971, 81.500427],
            ["Trash", "Throw", "smoke", -2351.968750, -414.031250, 388.562317, -60.588089, 73.825958],
            ["Trash", "Throw", "smoke", -3383.369629, 35.247875, 516.906006, -18.035419, 31.699080],
            ["Long", "Crouch + Throw", "smoke", -1993.398926, 537.698242, 475.093810, -28.677984, -169.596695],
            ["Monster", "Throw", "smoke", -1926.860962, 1311.968750, 355.030579, -46.200985, -40.010532],
            ["One-way", "Throw", "smoke", -2191.968750, 1311.968750, 356.093811, -8.861760, -55.390415],
            ["One-way", "Right click", "smoke", -1826.375610, 629.178894, 256.093811, 26.580435, -17.457275],
            ["One-way", "Throw", "smoke", -2012.968750, -1231.968750, 240.093811, 16.218643, 63.144173],
            ["Short B", "Throw", "smoke", -2115.841309, 992.920288, 480.093810, -22.936214, -57.690578],
            ["Bombsite A", "Throw", "flashbang", -2604.023926, 1102.215088, 480.093810, -24.090078, 70.938210],
            ["Barrels", "Throw", "molotov", -1580.023315, -480.767883, 136.093811, -20.147602, 53.764153],
            ["Bombsite B", "Throw", "molotov", -1399.968750, -139.998840, 0.093811, -15.444187, 63.084324]
        ]

        if (world == "de_train") coords = [
            ["B site", "Throw", "molotov", -1085.563477, -954.344543, -55.968750, -2.244908, -11.982774],
            ["Default", "Walk + Throw", "molotov", 1054.867188, 426.185638, -215.982330, -14.129807, -158.603027],
            ["Heaven", "Throw", "molotov", 132.170197, 499.088257, -219.968750, -30.679949, -56.869923],
            ["Site", "Run + Throw", "molotov", -338.848297, 307.854095, -215.968750, -29.580017, -36.570026],
            ["B Upper", "Throw", "smoke", -1055.968750, -1607.969116, -151.906188, -9.076089, -21.028521],
            ["B Lower", "Throw", "smoke", -1159.978027, -1088.112549, -95.909508, -9.122071, 13.307947],
            ["Blue to Bombsite", "Run + Throw", "smoke", -1155.979004, -1301.504395, -95.906189, -15.857571, 38.882820],
            ["Connector", "Run + Throw", "smoke", -1159.999634, -1048.001709, -95.906189, -11.023086, 5.091055],
            ["Ivy (right)", "Throw", "smoke", 1388.426270, 1446.000488, -223.906189, -6.188282, -95.524574],
            ["Ivy (left)", "Run + Throw", "smoke", 1535.968750, 1775.968750, -223.906189, -9.818258, -112.486588],
            ["Bombsite A to Connector", "Both buttons", "smoke", -655.968750, -399.892731, 16.093811, -46.002502, 10.890710],
            ["Blue to Red train", "Throw", "smoke", -645.479370, 1697.721924, -209.906189, -41.564690, -65.086685],
            ["Electric box", "Throw", "smoke", -481.865631, 1725.011597, -209.906189, -45.937080, -78.790627],
            ["Blue train (Left)", "Throw", "smoke", -555.031250, 1262.031250, -212.532227, -68.096550, -50.974125],
            ["Green to Red train", "Throw", "smoke", -838.162292, 1268.024414, -222.906189, -37.604507, -42.064575],
            ["Ivy to Green train", "Throw", "smoke", -640.027832, -583.969666, 16.093811, -44.699406, 32.218452],
            ["Bombsite A to Red train", "Throw", "smoke", -453.358459, 1286.284668, -86.490753, -25.130558, -58.731426],
            ["Main", "Throw", "smoke", 1021.096924, -254.988556, -215.906189, -38.494926, 154.562332],
            ["Bombsite A", "Run + Throw", "flashbang", 400.031250, -420.031250, -211.777573, -28.859020, -89.674629],
            ["Blue train (Back)", "Run + Throw", "molotov", -790.028748, 375.928741, -215.906189, -11.270589, 27.332729]
        ]

        if (world == "de_cache") coords = [
            ["Ventsroom", "Throw", "smoke", 837.744141, -872.015564, 1614.093750, -15.362073, 177.850555],
            ["Headshot", "Throw", "smoke", 960.031250, -1463.968750, 1644.093750, -26.400745, 162.851730],
            ["B Center", "Throw", "smoke", 827.971313, -1463.968750, 1614.093750, -21.995483, 162.191437],
            ["Mid Center", "Throw", "smoke", 1711.974121, 463.987732, 1614.093750, -10.675973, -167.299591],
            ["Connector", "Throw", "smoke", 1160.711182, 715.841675, 1613.093750, -31.334572, -153.088974],
            ["White box", "Throw", "smoke", 2156.583740, -182.968750, 1613.483887, -22.077839, 161.943924],
            ["One-way", "Throw", "smoke", 1037.031250, 513.031250, 1613.550293, -49.137814, 104.639671],
            ["Mid (Right side)", "Throw", "smoke", 1711.968750, -71.968750, 1614.093750, -10.560504, 161.185349],
            ["Bombsite A", "Crouch + Throw", "smoke", 154.413376, 2096.080566, 1688.093750, 9.370919, -29.337667],
            ["Short", "Run + Throw", "smoke", 139.031250, 2197.968750, 1688.093750, -6.040052, -60.836231],
            ["Bombsite A", "Throw", "smoke", 1319.968750, 1520.395508, 1701.093750, -57.767025, 161.424835],
            ["Forklift", "Throw", "smoke", 1230.754150, 1612.968750, 1701.965088, -74.514435, -173.894516],
            ["Main", "Throw", "smoke", -782.198059, 1110.000366, 1689.439697, -9.703021, 24.963852],
            ["Main", "Throw", "smoke", -429.968750, 2244.968750, 1687.093750, -66.017174, -31.140173],
            ["Main", "Throw", "smoke", -50.012558, 2261.968750, 1687.093750, -18.612713, -64.612831],
            ["Vents", "Run + Throw", "smoke", -996.979553, 1440.231689, 1691.182373, -33.181599, -46.326721],
            ["Bombsite A", "Throw", "flashbang", -358.534668, 2147.728027, 1687.093750, -17.540194, 2.039984],
            ["Bombsite A", "Throw", "flashbang", 89.984558, 2244.983398, 1687.093750, -71.181236, -93.482628],
            ["Bombsite B", "Both buttons", "flashbang", -633.975891, -379.968750, 1620.093750, -41.629662, -58.865555],
            ["Mid", "Crouch + Throw", "flashbang", 114.968750, -107.322037, 1613.718506, -16.913092, -84.200432],
            ["Mid", "Run + Throw", "flashbang", 1736.970581, 308.968750, 1614.093750, -9.157659, 162.762833],
            ["Bombsite B", "Throw", "flashbang", 879.802185, -872.031250, 1614.093750, -14.157107, 177.892853],
            ["Bombsite B", "Throw", "molotov", 907.649597, -1228.031250, 1614.093750, -23.876366, -179.771790],
            ["White box", "Throw", "molotov", 605.005188, -149.968750, 1689.035889, -6.584105, 133.537994],
            ["Boost", "Throw", "molotov", 11.759085, -148.994904, 1613.093750, -32.654572, 38.675369]
        ]

        if (world == "de_shortdust") coords = [
            ["Box", "Run + Throw", "molotov", -309.406403, 1933.314819, 32.031250, -5.444888, -45.821072],
            ["Car", "Throw", "molotov", -893.477783, 956.593933, 35.031250, -11.485014, -34.438034],
            ["One-Way CT", "Throw", "molotov", -450.279297, 780.684265, 40.753510, -19.734886, -50.160259],
            ["One-Way Car", "Run + Throw", "molotov", -1279.968750, 1039.968750, -170.329315, -27.609568, -18.734381]
        ]

        var scsiz = Render.GetScreenSize()
        var scrmid = [Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2]

        var coordslenght = 0

        color_circle = [0, 0, 0, 0]

        while (coords[coordslenght]) {

            coordslenght++

        }
        for (var i = 0; i < coordslenght; i++) {

            crd = coords[i]

            if (weaponnames[crd[2]].indexOf(weapon) >= 0) {

                cds = Render.WorldToScreen([crd[3], crd[4], crd[5]])

                var distance = dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer()))
                var nadeallmap = UI.GetValue(scriptitems, "Render nade on all map");
                if (dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer())) < 10) {

                    vec = atv(crd[6], crd[7])
                    local_player = Entity.GetLocalPlayer()

                    if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Automatic Throw Hotkey") && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Automatic Throw") && !running) {
                        eye_pos = Entity.GetEyePosition(local_player)
                        angles = getAngles(eye_pos, [crd[3] + vec[0] * 200, crd[4] + vec[1] * 200, crd[5] + 64 + vec[2] * 200])
                        UserCMD.SetAngles([angles[0], angles[1], angles[2]])
                        tickcount = Global.Tickcount()

                        running = true
                        //  coords_auto_throw = crd
                        for (t = 0; t < movement_autothrow.length; t++) {
                            if (movement_autothrow[t][0] == crd[0]) {
                                crd[8] = movement_autothrow[t][2]
                                crd[9] = movement_autothrow[t][1]
                            }
                        }
                        coords_auto_throw = crd
                        auto_throw_repeat()
                    }
                }
            }
        }
    }
}

function auto_throw() {
    tick = Global.Tickcount()
    if (coords_auto_throw[8] == null) {

        if ((coords_auto_throw[1].includes("Jump") || coords_auto_throw[1].includes("Throw")) && !coords_auto_throw[1].includes("Run") && !coords_auto_throw[1].includes("Walk")) {

            if (tick - tickcount == 1) {
                Cheat.ExecuteCommand("+attack");
            }
            if (tick - tickcount == 2) {
                if (coords_auto_throw[1].includes("Jump"))
                    UserCMD.ForceJump()
                Cheat.ExecuteCommand("-attack");
                new Delay(Global.TickInterval() * 2 - Global.TickInterval() / 100, stop_attack);
                running = false;
            }
            return
        }

        running = false
        return
    }
    jump_throw = false;
    for (i = 0; i < coords_auto_throw[8].length; i++) {
        if (coords_auto_throw[8][i][2] != 0) {
            jump_throw = true;
            break;
        }
    }
    if (tick - tickcount < coords_auto_throw[8].length) {
        UserCMD.SetMovement([coords_auto_throw[8][tick - tickcount][0], 0, 0]);
        if (tick - tickcount < coords_auto_throw[8].length - 1) {
            if (coords_auto_throw[8][tick - tickcount + 1][2] != 0 && coords_auto_throw[8][tick - tickcount][2] == 0) {
                Cheat.ExecuteCommand("+attack");
            }
        }
        if (tick - tickcount - 1 >= 0 && coords_auto_throw[8][tick - tickcount][2] != 0 && coords_auto_throw[8][tick - tickcount - 1][2] == 0) {
            UserCMD.ForceJump()
            Cheat.ExecuteCommand("-attack");
            running = false;
        }
        if (!jump_throw) {
            if (tick - tickcount == 1)
                Cheat.ExecuteCommand("+attack");
            if (tick - tickcount == coords_auto_throw[8].length - coords_auto_throw[9]) {
                Cheat.ExecuteCommand("-attack");

                running = false;
            }
        }
    }
}
throw_tick = 0

function stop_attack() {
    Cheat.ExecuteCommand("-attack");
}

function set_false() {
    running = false
}

function auto_throw_repeat() {
    if (coords_auto_throw[8] == null) {
        if ((coords_auto_throw[1].includes("Jump") || coords_auto_throw[1].includes("Throw")) && !coords_auto_throw[1].includes("Run") && !coords_auto_throw[1].includes("Walk")) {

            for (i = 0; i < 2; i++) {
                new Delay(Global.TickInterval() * i - Global.TickInterval() / 100, auto_throw);
            }
            new Delay(Global.TickInterval() * 3 - Global.TickInterval() / 100, set_false);
            return
        }
        new Delay(Global.TickInterval() * 0 - Global.TickInterval() / 100, set_false)
        return
    }
    for (i = 1; i <= coords_auto_throw[8].length; i++) {
        new Delay(Global.TickInterval() * i - Global.TickInterval() / 100, auto_throw);
    }
}

Cheat.RegisterCallback("CreateMove", "checkDelays");

Cheat.RegisterCallback("CreateMove", "on_create_move");

Cheat.RegisterCallback("Draw", "grenade_helper");

Global.RegisterCallback("Draw", "drawhelper")

//Snake 
var screenSize = Global.GetScreenSize();
var gameBoxSize = 300;

var lastMove = 0;
var currentMovingDirection = 0;
var snake = [{
    x: 150,
    y: 150
}, {
    x: 140,
    y: 150
}, {
    x: 130,
    y: 150
}];

var playerScore = 0;
var highestScore = 0;
var gameOver = false;
var gameOverShowTime = 0;

var food = null;
// https://github.com/CodingWith-Adam/snake
UI.AddCheckbox("Play Snake");
UI.AddHotkey("Pause Snake game");

function randomPositionInBox(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

function generateFood() {
    var good_positions = true;

    do {
        good_positions = true;
        var x = randomPositionInBox(0, gameBoxSize - 10);
        var y = randomPositionInBox(0, gameBoxSize - 10);

        for (var i = 0; i < snake.length; i++) {
            if (snake[i].x == x && snake[i].y == y) {
                good_positions = false;
                break;
            }
        }
    }
    while (good_positions == false);

    food = {
        x: x,
        y: y
    };
}

function moveSnake() {

    var x_axis = 0;
    var y_axis = 0;

    switch (currentMovingDirection) {
        case 0: {
            x_axis = 10;
            break;
        }
        case 1: {
            x_axis = -10;
            break;
        }
        case 2: {
            y_axis = -10;
            break;
        }
        case 3: {
            y_axis = 10;
            break;
        }
    }

    if (snake[0].x + x_axis >= gameBoxSize || snake[0].x + x_axis < 0 || snake[0].y + y_axis >= gameBoxSize || snake[0].y + y_axis < 0) {
        gameOver = true;
        gameOverShowTime = Global.Realtime() + 5;
        return;
    } else {
        for (var i = 1; i < snake.length; i++) {
            if (snake[i].x == snake[0].x + x_axis && snake[i].y == snake[0].y + y_axis) {
                gameOver = true;
                gameOverShowTime = Global.Realtime() + 5;
                return;
            }
        }

        snake.unshift({
            x: snake[0].x + x_axis,
            y: snake[0].y + y_axis
        });
        snake.pop();

        if (food == null) {
            generateFood();
        } else {
            if (snake[0].x == food.x && snake[0].y == food.y) {
                playerScore++;

                if (playerScore > highestScore)
                    highestScore = playerScore;

                snake.unshift({
                    x: snake[0].x + x_axis,
                    y: snake[0].y + y_axis
                });

                generateFood();
            }
        }
    }
}

function onDrawEvent1() {
    if (!UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Play Snake") || !UI.IsMenuOpen())
        return;

    Render.GradientRect(screenSize[0] / 2 - gameBoxSize / 2 - 5, screenSize[1] / 2 - gameBoxSize / 2 - 34 - 2, gameBoxSize + 10, 4, 1, [217, 157, 86, 255], [223, 174, 97, 255]);
    Render.FilledRect(screenSize[0] / 2 - gameBoxSize / 2 - 5, screenSize[1] / 2 - gameBoxSize / 2 - 30 - 2, gameBoxSize + 10, 25, [44, 48, 55, 255]);
    Render.String(screenSize[0] / 2, screenSize[1] / 2 - gameBoxSize / 2 - 25 - 2, 1, "Snake Game" + " [score: " + playerScore + "]", [255, 255, 255, 255]);


    Render.FilledRect(screenSize[0] / 2 - gameBoxSize / 2 - 5, screenSize[1] / 2 - gameBoxSize / 2 - 5, gameBoxSize + 10, gameBoxSize + 10, [44, 48, 55, 255]);
    Render.Rect(screenSize[0] / 2 - gameBoxSize / 2, screenSize[1] / 2 - gameBoxSize / 2, gameBoxSize, gameBoxSize, [100, 100, 100, 150]);

    var snakeIsPaused = UI.IsHotkeyActive("MISC", "JAVASCRIPT", "Script Items", "Pause Snake game");

    if (snakeIsPaused) {
        Render.String(screenSize[0] / 2, screenSize[1] / 2 - 5, 1, "The game is paused", [255, 0, 0, 255]);
    }

    if (gameOver) {
        Render.String(screenSize[0] / 2, screenSize[1] / 2 - 25, 1, "Game over!", [255, 0, 0, 255]);
        Render.String(screenSize[0] / 2, screenSize[1] / 2 - 10, 1, "Score: " + playerScore, [255, 0, 0, 255]);
        Render.String(screenSize[0] / 2, screenSize[1] / 2 + 5, 1, "Highest score: " + highestScore, [255, 0, 0, 255]);

        if (Global.Realtime() > gameOverShowTime) {
            playerScore = 0;
            gameOver = false;
            gameOverShowTime = 0;
            currentMovingDirection = 0;
            snake = [{
                x: 150,
                y: 150
            }, {
                x: 140,
                y: 150
            }, {
                x: 130,
                y: 150
            }];
        }
        return;
    }

    if (!snakeIsPaused && !gameOver) {

        if (food != null) {
            Render.FilledRect(screenSize[0] / 2 - gameBoxSize / 2 + food.x, screenSize[1] / 2 - gameBoxSize / 2 + food.y, 10, 10, [255, 0, 0, 255]);
            Render.Rect(screenSize[0] / 2 - gameBoxSize / 2 + food.x, screenSize[1] / 2 - gameBoxSize / 2 + food.y, 10, 10, [0, 0, 0, 255]);
        }

        for (var i = 0; i < snake.length; i++) {
            Render.FilledRect(screenSize[0] / 2 - gameBoxSize / 2 + snake[i].x, screenSize[1] / 2 - gameBoxSize / 2 + snake[i].y, 10, 10, [17, 102, 9, 255]);
            Render.Rect(screenSize[0] / 2 - gameBoxSize / 2 + snake[i].x, screenSize[1] / 2 - gameBoxSize / 2 + snake[i].y, 10, 10, [0, 0, 0, 255]);
        }
    }

    if (snakeIsPaused)
        return;

    if (Global.IsKeyPressed(0x26) && currentMovingDirection != 3) {
        currentMovingDirection = 2;
    } else if (Global.IsKeyPressed(0x28) && currentMovingDirection != 2) {
        currentMovingDirection = 3;
    } else if (Global.IsKeyPressed(0x27) && currentMovingDirection != 1) {
        currentMovingDirection = 0;
    } else if (Global.IsKeyPressed(0x25) && currentMovingDirection != 0) {
        currentMovingDirection = 1;
    }

    if (Global.Realtime() - lastMove > 0.2) {
        moveSnake();
        lastMove = Global.Realtime();
    }
}

Global.RegisterCallback("Draw", "onDrawEvent1");

//Tetris 
// https://github.com/andysterks/JS-Tetris
var screenSize = Global.GetScreenSize();

var boxWidth = 240;
var boxHeight = 400;

function createGamePiece(type) {
    switch (type) {
        case 't':
            return [
                [0, 0, 0],
                [5, 5, 5],
                [0, 5, 0]
            ];
        case 'o':
            return [
                [7, 7],
                [7, 7]
            ];
        case 'l':
            return [
                [0, 4, 0],
                [0, 4, 0],
                [0, 4, 4]
            ];
        case 'j':
            return [
                [0, 1, 0],
                [0, 1, 0],
                [1, 1, 0]
            ];
        case 'i':
            return [
                [0, 2, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 0, 0]
            ];
        case 's':
            return [
                [0, 3, 3],
                [3, 3, 0],
                [0, 0, 0]
            ];
        case 'z':
            return [
                [6, 6, 0],
                [0, 6, 6],
                [0, 0, 0]
            ];
    }
}

var tetrominoesColors = [null, [255, 0, 0, 255],
    [255, 20, 147, 255],
    [255, 69, 0, 255],
    [255, 255, 0, 255],
    [128, 0, 128, 255],
    [50, 205, 50, 255],
    [0, 139, 139, 255]
];

function makeMatrix(w, h) {
    var matrix = [];

    for (var i = 0; i < h; i++) {
        matrix[i] = [];
        for (var j = 0; j < w; j++)
            matrix[i][j] = 0;
    }

    return matrix;
}

var area = makeMatrix(12, 20);
var player = {
    pos: {
        x: 0,
        y: 0
    },
    matrix: null,
    score: 0
};
var move = 1;
var pieces = "ijlostz";
var gameRun = true;

function points() {
    var rowCount = 1;

    outer: for (var y = area.length - 1; y > 0; --y) {
        for (var x = 0; x < area[y].length; ++x) {
            if (area[y][x] === 0) {
                continue outer;
            }
        }

        var row = area.splice(y, 1)[0];

        for (var k = 0; k < row.length; k++)
            row[k] = 0;

        area.unshift(row);
        ++y;

        player.score += rowCount * 100;
        rowCount *= 2;
    }
}

function collide(area, player) {
    var m = player.matrix;
    var o = player.pos;

    for (var y = 0; y < m.length; ++y) {
        for (var x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 && (area[y + o.y] && area[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
};


function drawMatrix(matrix, offset) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] != 0) {
                Render.FilledRect(screenSize[0] / 2 - boxWidth / 2 + j * 20 + offset.x * 20, screenSize[1] / 2 - boxHeight / 2 + i * 20 + offset.y * 20, 20, 20, tetrominoesColors[matrix[i][j]]);
                Render.Rect(screenSize[0] / 2 - boxWidth / 2 + j * 20 + offset.x * 20, screenSize[1] / 2 - boxHeight / 2 + i * 20 + offset.y * 20, 20, 20, [0, 0, 0, 255]);
            }
        }
    }
};


function merge(area, player) {
    for (var y = 0; y < player.matrix.length; y++)
        for (var x = 0; x < player.matrix[y].length; x++)
            if (player.matrix[y][x]) area[y + player.pos.y][x + player.pos.x] = player.matrix[y][x];
}

function rotate(matrix, dir) {
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < y; ++x) {
            var tmp = matrix[x][y];
            matrix[x][y] = matrix[y][x];
            matrix[y][x] = tmp;
        }
    }

    if (dir > 0)
        for (var i = 0; i < matrix.length; i++)
            matrix[i].reverse();
    else
        matrix.reverse();
}

function playerReset() {
    player.matrix = createGamePiece(pieces[Math.floor(Math.random() * pieces.length)]);
    player.pos.y = 0;
    player.pos.x = (Math.floor(area[0].length / 2)) - (Math.floor(player.matrix[0].length / 2));

    if (collide(area, player)) {
        for (var i = 0; i < area.length; i++)
            for (var j = 0; j < area[i].length; j++)
                area[i][j] = 0;

        player.score = 0;
        gameRun = false;
    }
}

function playerDrop() {
    player.pos.y++;

    if (collide(area, player)) {
        player.pos.y--;

        merge(area, player);
        points();
        playerReset();
    }
}

function playerMove(dir) {
    player.pos.x += dir;

    if (collide(area, player)) {
        player.pos.x -= dir;
    }
}

function playerRotate(dir) {
    var pos = player.pos.x;
    var offset = 1;

    rotate(player.matrix, dir);

    while (collide(area, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));

        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

var lastUpdate = 0;
var lastKeyPress = 0;

function onDrawEvent2() {
    if (!UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Play Tetris") || !UI.IsMenuOpen())
        return;

    Render.GradientRect(screenSize[0] / 2 - boxWidth / 2 - 5, screenSize[1] / 2 - boxHeight / 2 - 34 - 2, boxWidth + 10, 4, 1, [217, 157, 86, 255], [223, 174, 97, 255]);
    Render.FilledRect(screenSize[0] / 2 - boxWidth / 2 - 5, screenSize[1] / 2 - boxHeight / 2 - 30 - 2, boxWidth + 10, 25, [44, 48, 55, 255]);
    Render.String(screenSize[0] / 2, screenSize[1] / 2 - boxHeight / 2 - 25 - 2, 1, "Tetris Game" + " [score: " + player.score + "]", [255, 255, 255, 255]);


    Render.FilledRect(screenSize[0] / 2 - boxWidth / 2 - 5, screenSize[1] / 2 - boxHeight / 2 - 5, boxWidth + 10, boxHeight + 10, [44, 48, 55, 255]);
    Render.Rect(screenSize[0] / 2 - boxWidth / 2, screenSize[1] / 2 - boxHeight / 2, boxWidth, boxHeight, [100, 100, 100, 150]);

    var gameIsPaused = UI.IsHotkeyActive("MISC", "JAVASCRIPT", "Script Items", "Pause Tetris game");

    if (gameIsPaused) {
        Render.String(screenSize[0] / 2, screenSize[1] / 2 - 5, 1, "The game is paused", [255, 0, 0, 255]);
        return;
    }

    if (!gameRun) {
        Render.String(screenSize[0] / 2, screenSize[1] / 2 - 15, 1, "Game over!", [255, 0, 0, 255]);
        Render.String(screenSize[0] / 2, screenSize[1] / 2, 1, "Press ENTER to start again", [255, 0, 0, 255]);

        if (Global.IsKeyPressed(0x0D))
            gameRun = true;
        return;
    }

    var realTime = Global.Realtime();

    if (realTime - lastKeyPress > 0.1) {
        if (Global.IsKeyPressed(0x25)) {
            playerMove(-move);
        } else if (Global.IsKeyPressed(0x27)) {
            playerMove(+move);
        } else if (Global.IsKeyPressed(0x26)) {
            playerRotate(-move);
        } else if (Global.IsKeyPressed(0x28)) {
            playerDrop();
        }

        lastKeyPress = realTime;
    }

    if (realTime - lastUpdate > UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Tetris speed")) {
        playerDrop();
        lastUpdate = realTime;
    }

    drawMatrix(area, {
        x: 0,
        y: 0
    });
    drawMatrix(player.matrix, player.pos);
}

Global.RegisterCallback("Draw", "onDrawEvent2");

UI.AddCheckbox("Play Tetris");
UI.AddHotkey("Pause Tetris game");
UI.AddSliderFloat("Tetris speed", 0.05, 0.5);

function onScriptInit() {
    gameRun = true;
    playerReset();
}

onScriptInit();

//Minesweeper
var screenSize = Global.GetScreenSize();

var boxSize = 200;

var playingGame = false;
var revealBombs = false;
var gameMatrix = [];
var bombsCount = 20;


function onCellClick(i, j) {
    switch (gameMatrix[i][j]) {
        case -1: {
            playingGame = false;
            revealBombs = true;
            break;
        }
        case -2: {
            mineCount = 0;

            for (a = Math.max(i - 1, 0); a <= Math.min(i + 1, 9); a++)
                for (b = Math.max(j - 1, 0); b <= Math.min(j + 1, 9); b++)
                    if (gameMatrix[a][b] == -1)
                        mineCount++;

            gameMatrix[i][j] = mineCount;

            if (mineCount == 0)
                for (a = Math.max(i - 1, 0); a <= Math.min(i + 1, 9); a++)
                    for (b = Math.max(j - 1, 0); b <= Math.min(j + 1, 9); b++)
                        onCellClick(a, b);
        }
    }

    gameCompleted = true;

    for (i = 0; i < 10; i++)
        for (j = 0; j < 10; j++)
            if (gameMatrix[i][j] == -2)
                gameCompleted = false;

    if (gameCompleted)
        playingGame = false;
}

function onDrawEvent3() {
    if (!UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Play Minesweeper Game") || !UI.IsMenuOpen())
        return;

    Render.GradientRect(screenSize[0] / 2 - boxSize / 2 - 5, screenSize[1] / 2 - boxSize / 2 - 34 - 2, boxSize + 10, 4, 1, [217, 157, 86, 255], [223, 174, 97, 255]);
    Render.FilledRect(screenSize[0] / 2 - boxSize / 2 - 5, screenSize[1] / 2 - boxSize / 2 - 30 - 2, boxSize + 10, 25, [44, 48, 55, 255]);
    Render.String(screenSize[0] / 2, screenSize[1] / 2 - boxSize / 2 - 25 - 2, 1, "Minesweeper", [255, 255, 255, 255]);

    Render.FilledRect(screenSize[0] / 2 - boxSize / 2 - 5, screenSize[1] / 2 - boxSize / 2 - 5, boxSize + 10, boxSize + 10, [44, 48, 55, 255]);
    Render.Rect(screenSize[0] / 2 - boxSize / 2, screenSize[1] / 2 - boxSize / 2, boxSize, boxSize, [100, 100, 100, 150]);

    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            if (gameMatrix[i][j] == -1 && revealBombs)
                Render.FilledRect(screenSize[0] / 2 - boxSize / 2 + i * 20, screenSize[1] / 2 - boxSize / 2 + j * 20, 19, 19, [255, 0, 0, 255]);

            if (gameMatrix[i][j] > -1)
                Render.String(screenSize[0] / 2 - boxSize / 2 + i * 20 + 10, screenSize[1] / 2 - boxSize / 2 + j * 20 + 7, 1, gameMatrix[i][j].toString(), [255, 255, 255, 255], 2);

            Render.Rect(screenSize[0] / 2 - boxSize / 2 + i * 20, screenSize[1] / 2 - boxSize / 2 + j * 20, 20, 20, [255, 255, 255, 255]);
        }
    }

    if (playingGame) {
        var cursorPosition = Global.GetCursorPosition();

        if (Global.IsKeyPressed(0x01))
            for (i = 0; i < 10; i++)
                for (j = 0; j < 10; j++)
                    if (cursorPosition[0] >= screenSize[0] / 2 - boxSize / 2 + i * 20 && cursorPosition[0] <= screenSize[0] / 2 - boxSize / 2 + (i + 1) * 20 && cursorPosition[1] >= screenSize[1] / 2 - boxSize / 2 + j * 20 && cursorPosition[1] <= screenSize[1] / 2 - boxSize / 2 + (j + 1) * 20)
                        onCellClick(i, j);
    } else {
        Render.FilledRect(screenSize[0] / 2 - boxSize / 2 - 5, screenSize[1] / 2 + boxSize / 2 + 15, boxSize + 10, 47, [0, 0, 0, 120]);

        if (revealBombs == true)
            Render.String(screenSize[0] / 2, screenSize[1] / 2 + boxSize / 2 + 22.5, 1, "You lost", [255, 0, 0, 255]);
        else
            Render.String(screenSize[0] / 2, screenSize[1] / 2 + boxSize / 2 + 22.5, 1, "You Won", [0, 255, 0, 255]);

        Render.String(screenSize[0] / 2, screenSize[1] / 2 + boxSize / 2 + 38, 1, "Press ENTER to start a new game", [255, 255, 255, 255]);

        if (Global.IsKeyPressed(0x0D))
            startNewGame();
    }
}

function startNewGame() {
    gameMatrix = [];

    for (i = 0; i < 10; i++) {
        gameMatrix[i] = [];

        for (j = 0; j < 10; j++)
            gameMatrix[i][j] = -2;
    }

    for (i = 0; i < bombsCount; i++)
        gameMatrix[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)] = -1;

    playingGame = true;
    revealBombs = false;
}


startNewGame();
UI.AddCheckbox("Play Minesweeper Game");
Global.RegisterCallback("Draw", "onDrawEvent3");
