UI.AddCheckbox("Draw locations through walls");
UI.AddHotkey("Auto throw");
UI.AddDropdown("Throw mode", ["None", "Silent (rage)", "Legit"]);
UI.AddMultiDropdown("Enabled grenades", ["Molotovs", "high explosive grenades", "Flashbangs", "Smokes"]);
UI.AddSliderFloat("Legit aim speed", 0.01, 3);
UI.AddCheckbox("Nade location tools");
UI.AddHotkey("Grenade setup");

UI.AddCheckbox("Custom colors");
UI.AddColorPicker("Background");
UI.AddColorPicker("Gradient 1");
UI.AddColorPicker("Gradient 2");
UI.AddColorPicker("Text");
UI.AddColorPicker("Circle");
UI.AddColorPicker("Circle interior");
UI.AddColorPicker("Line");


_locations = require('locations.js');

var ticks_to_run = 22;

var chat_tut = false;
var chat_stage = 0;
var chat_start = 0;
var def_rect = [45, 43, 48, 255];
var def_grad = [[124, 21, 21, 255], [184, 31, 31, 255]];
var def_text = [255, 255, 255, 255];
var def_circle = [100,100,100, 200];
var def_circle_int = [56, 200, 56, 255];
var def_line = [184, 31, 31, 255];
var rect = [45, 43, 48, 255];
var grad = [[124, 21, 21, 255], [184, 31, 31, 255]];
var text_c = [255, 255, 255, 255];
var circle = [255, 255, 255, 200];
var circle_int = [56, 200, 56, 255];
var line = [184, 31, 31, 255];
var temp_nade = [];

function print_nade_stats() {
    if (UI.IsHotkeyActive("Script items", "Grenade setup") && !chat_tut && World.GetServerString() != "") {
        chat_start = Globals.Curtime();
        Cheat.PrintChat("Please enter a name for this grenade. (Type `cancel` to cancel setup!)");
        chat_stage = 0;
        chat_tut = true;
    }
}

function on_chat() {
    if(!Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt('userid'))) || !chat_tut)
        return;

    var text = Event.GetString('text');

    if(text.toLowerCase() == "cancel") {
        chat_tut = false;
        temp_nade = [];
        chat_stage = 0;
        chat_start = 0;
        Cheat.PrintChat("You have cancelled this grenade setup!");
        return;
    }

    if(chat_stage == 0) {
        if(!~GRENADE_TYPES.indexOf(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))))
            return Cheat.PrintChat("Please hold a valid grenade!");

        temp_nade[0] = World.GetMapName();
        temp_nade[1] = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
        temp_nade[2] = Local.GetViewAngles();
        temp_nade[3] = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
        temp_nade[4] = text+"";
        Cheat.PrintChat("How do you throw this grenade? (0 = Throw, 1 = Run+Throw, 2 = Jump+Throw, 3 = Run+Jump+Throw, 4 = Half throw)");
        chat_start = Globals.Curtime();
        chat_stage++;
    } else

    if(chat_stage == 1) {
        if(isNaN(parseInt(text)) || parseInt(text) > 4 || parseInt(text) < 0) 
            return Cheat.PrintChat("Please enter a number!");

        if(parseInt(text) == 0)
            temp_nade[5] = "Throw";

        if(parseInt(text) == 1)
            temp_nade[5] = "Run+Throw";

        if(parseInt(text) == 2)
            temp_nade[5] = "Jump+Throw"

        if(parseInt(text) == 3)
            temp_nade[5] = "Run+Jump+Throw";

        if(parseInt(text) == 4)
            temp_nade[5] = "Half throw";

            chat_start = Globals.Curtime();
        
        if(parseInt(text) == 1) {
            chat_stage = 3;
            Cheat.PrintChat("How far should you run (in ticks) to throw this nade? (default = 22)");
        } else {
            temp_nade[6] = 0;
            Cheat.PrintChat("Your grenade is ready to go, check console!");
            Cheat.Print("Your grenade is ready to go!\n");
            Cheat.Print("[ \"" + World.GetMapName() + "\", [" + Entity.GetEyePosition(Entity.GetLocalPlayer()) + "], [" + Local.GetViewAngles() + "], \"" + Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) + "\",\""+ temp_nade[4] +"\", \""+temp_nade[5]+"\", 0 ]\n");
            chat_stage = 0;
            chat_tut = false;
            temp_nade = []; 
            chat_start = 0;
        }
    } else

    if(chat_stage == 3) {
        if(isNaN(parseInt(text)) || parseInt(text) < 1) 
            return Cheat.PrintChat("You must specify a valid time to run!");

        temp_nade[6] = parseInt(text);

        Cheat.PrintChat("Your grenade is ready to go, check console!");
        Cheat.Print("Your grenade is ready to go!\n");
        Cheat.Print("[ \"" + World.GetMapName() + "\", [" + Entity.GetEyePosition(Entity.GetLocalPlayer()) + "], [" + Local.GetViewAngles() + "], \"" + Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) + "\",\""+ temp_nade[4] +"\", \""+temp_nade[5]+"\","+ parseInt(text) +" ]\n");
        chat_stage = 0;
        chat_tut = [];
        temp_nade = [];
        chat_start = 0;
    }
}

Cheat.RegisterCallback("player_say", "on_chat");

var locations = _locations.locations;

var lerp_time = 0;

var map_cache = [];
var enabled_grenades = [];
var selection_cache = 0;
var hand_cache = 0;
const GRENADE_TYPES = ["high explosive grenade", "smoke grenade", "molotov", "decoy grenade", "incendiary grenade", "flashbang"];
import_grenade_selection();

var weapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
if (weapon == "incendiary grenade")
    weapon = "molotov";

map_cache = locations.filter(function (e) {
    return e[0] == World.GetMapName() && ~enabled_grenades.indexOf(e[3].toLowerCase()) && e[3].toLowerCase() == weapon
});

Cheat.RegisterCallback("CreateMove", "print_nade_stats");

function draw() {

    var cust = UI.GetValue("Script items", "Custom colors");

    UI.SetEnabled("Script items", "Background", cust)
    UI.SetEnabled("Script items", "Gradient 1", cust)
    UI.SetEnabled("Script items", "Gradient 2", cust)
    UI.SetEnabled("Script items", "Text", cust)
    UI.SetEnabled("Script items", "Circle", cust)
    UI.SetEnabled("Script items", "Circle interior", cust)
    UI.SetEnabled("Script items", "Line", cust)

    var legit = UI.GetValue("Script items", "Throw mode") == 2 ? true : false;

    UI.SetEnabled("Script items", "Legit aim speed", legit);

    if(cust) {
        rect = UI.GetColor("Script items", "Background");
        grad[0] = UI.GetColor("Script items", "Gradient 1");
        grad[1] = UI.GetColor("Script items", "Gradient 2");
        text_c = UI.GetColor("Script items", "Text");
        circle = UI.GetColor("Script items", "Circle");
        circle_int = UI.GetColor("Script items", "Circle interior");
        line = UI.GetColor("Script items", "Line");
    }

    if(chat_tut && Globals.Curtime() - chat_start > 15) {
        chat_stage = 0;
        chat_start = 0;
        chat_tut = false;
        temp_nade = [];
        Cheat.PrintChat("Grenade setup has timed out!");
    }
        
    UI.SetEnabled("Grenade setup", UI.GetValue("Script items", "Nade location tools"))

    var weapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (weapon == "incendiary grenade")
        weapon = "molotov";

    if (!~GRENADE_TYPES.indexOf(weapon))
        return;

    if ((selection_cache != UI.GetValue("Script items", "Enabled grenades")) || ((hand_cache != weapon) || !~GRENADE_TYPES.indexOf(weapon))) {
        import_grenade_selection();
        map_cache = locations.filter(function (e) {
            return e[0] == World.GetMapName() && ~enabled_grenades.indexOf(e[3].toLowerCase()) && e[3].toLowerCase() == weapon;
        });
    }

    if(map_cache.length == 0)
        return;

    for (var g in map_cache) {

        var world_stand = Render.WorldToScreen([map_cache[g][1][0], map_cache[g][1][1], map_cache[g][1][2] - 63]);

        if (!map_cache[g][7] && !UI.GetValue("Script items", "Draw locations through walls"))
            continue;


        var aim = angle_to_vec(map_cache[g][2][0], map_cache[g][2][1]);
        var eye_pos = map_cache[g][1];
        aim = Render.WorldToScreen([eye_pos[0] + aim[0] * 400, eye_pos[1] + aim[1] * 400, eye_pos[2] + aim[2] * 400]);
        var dist = calc_dist(Entity.GetRenderOrigin(Entity.GetLocalPlayer()), map_cache[g][1]);
        Render.Circle(world_stand[0], world_stand[1], 6, cust ? circle : def_circle);
        Render.Circle(world_stand[0], world_stand[1], 1, cust ? circle_int : def_circle_int);

        var size_area = Render.TextSize(map_cache[g][4], 8);
        var size_tut = Render.TextSize(map_cache[g][5], 8);
        Render.FilledRect(world_stand[0] + 9, world_stand[1] - size_area[1] / 1.5, size_area[0] + 7, size_area[1] + 4, cust ? rect : def_rect);
        Render.GradientRect(world_stand[0] + 10, world_stand[1] - size_area[1] / 1.5, size_area[0] + 5, 2, 1, cust ? grad[0] : def_grad[0], cust ? grad[1] : def_grad[1]);
        shadow(world_stand[0] + 12.5, world_stand[1] - 5, 0, map_cache[g][4], false, undefined, cust ? text_c : def_text, 8);

        if (dist > 70)
            continue;

        Render.Circle(aim[0], aim[1], 1, cust ? circle_int : def_circle_int);
        Render.FilledRect(aim[0] + 10, aim[1] - size_area[1] / 1.5, size_area[0] > size_tut[0] ? size_area[0] + 5 : size_tut[0] + 5, size_area[1] > size_tut[1] ? size_area[1] + 15 : size_tut[1] + 15, cust ? rect : def_rect);
        Render.GradientRect(aim[0] + 10, aim[1] - size_area[1] / 1.5, size_area[0] > size_tut[0] ? size_area[0] + 5 : size_tut[0] + 5, 2, 1, cust ? grad[0] : def_grad[0], cust ? grad[1] : def_grad[1]);
        
        
        shadow(aim[0] + 12.5, aim[1] - 5, 0, map_cache[g][4], false, undefined, cust ? text_c : def_text, 8);
        shadow(aim[0] + 12.5, aim[1] + 6.5, 0, map_cache[g][5], false, undefined, cust ? text_c : def_text, 8)
        Render.Circle(aim[0], aim[1], 6, [56, 200, 56, 255]);
        Render.Line(Render.GetScreenSize()[0]/2, Render.GetScreenSize()[1]/2, aim[0], aim[1], cust ? line : def_line);
    }
}

function clamp(val,min,max){
    if(val > max)
        return max
    if(val < min)
        return min
    return val
}
function lerp(start,end,time){
    var delta = end - start
    delta *= time
    delta += start
    return delta
}

function check_visibility() {
    if (map_cache.length == 0 || World.GetServerString() == "")
        return;

    var local = Entity.GetLocalPlayer();

    eye_angles = Local.GetViewAngles();
    head = Entity.GetProp(local, "CBasePlayer", "m_vecOrigin");
    offset = Entity.GetProp(local, "CBasePlayer", "m_vecViewOffset[2]");
    head = vector_add(head, [0, 0, offset[0]]);

    for (var g in map_cache) {
        var result = Trace.Line(local, head, map_cache[g][1]);

        if (map_cache[g][7] == undefined)
            map_cache[g].push(result[1] == 1);
        else
            map_cache[g][7] = result[1] == 1;
    }
}

var angles_met = false;

// thanks vex
function fix_move(ang, old_ang, old_move) {
    var deg2rad = function (a) {
        return a / 180 * Math.PI
    }
    var f1, f2, delta_y
    if (old_ang[1] < 0)
        f1 = 360 + old_ang[1]
    else
        f1 = old_ang[1]

    if (ang[1] < 0)
        f2 = 360 + ang[1]
    else
        f2 = ang[1]
    if (f2 < f1)
        delta_y = Math.abs(f2 - f1)
    else
        delta_y = 360 - Math.abs(f1 - f2)

    return [
        Math.cos(deg2rad(delta_y)) * old_move[0] + Math.cos(deg2rad(delta_y + 90)) * old_move[1],
        Math.sin(deg2rad(delta_y)) * old_move[0] + Math.sin(deg2rad(delta_y + 90)) * old_move[1],
        0
    ]
}

var lerp_time = 0;

// thanks vex
function move_forward(angle) {
    var speed = UI.GetValue("Script items", "Legit aim speed");
    var orig_angle = Local.GetViewAngles()
    var orig_inp = angle;
    var forward = [450, 0, 0]
    var newmove = fix_move(angle, orig_angle, forward)
    var silent = UI.GetValue("Script items", "Throw mode") == 1 ? true : false;
    var legit = UI.GetValue("Script items", "Throw mode") == 2 ? true : false;
    if(legit) {
        silent = false;
        lerp_time = clamp(lerp_time + Globals.TickInterval() * (1/speed), 0, 1);

        var p = lerp(Local.GetViewAngles()[0], closest[2][0], lerp_time);
        var y = lerp(Local.GetViewAngles()[1], closest[2][1], lerp_time);
        angle = [p, normalize(y), 0];
    }
    UserCMD.SetViewAngles(angle, silent);

    if(Math.abs(angle[0]-orig_inp[0]) > 0.01 && Math.abs(angle[1]-orig_inp[1]) > .01 && legit) 
        return false;

    UserCMD.SetMovement(newmove);
    angles_met = true;
    return true;
    
}

function normalize(yaw) {
    while (yaw > 180)
        yaw -= 360
    while (yaw < -180)
        yaw += 360
    return yaw
}

var closest = [];

function move_on_key() {
    if(map_cache.length == 0)
        return;

    if(!~GRENADE_TYPES.indexOf(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))))
        return;

    var silent = UI.GetValue("Script items", "Throw mode") == 1 ? true : false;
    var legit = UI.GetValue("Script items", "Throw mode") == 2 ? true : false;
    
    if (!UI.IsHotkeyActive("Script items", "Auto throw") && Globals.Tickcount() - this.throw_time > 8) {
        this.running = false
        this.closest = [];
        this.ignore_input = false
        this.start_tick = 0
        this.next_tick_ang = []
        this.attacked = false;
        this.moved_base = false;
        this.run_start = 0;
        lerp_time = 0;
        this.hold = false;
        angles_met = false;
        closest = [];
        return;
    }

    if (this.attacked == null)
        this.attacked = false
    if (this.start_tick == null)
        this.start_tick = 0
    if (this.running == null)
        this.running = false
    if (this.closest == null)
        this.closest = []
    if (this.ignore_input == null)
        this.ignore_input = false
    if (this.run_start == null)
        this.run_start = 0;
    if(this.throw_time == null)
        this.throw_time = 0;

    var local = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
    if(!this.running && !this.ignore_input) {
        closest = map_cache.sort(function (a, b) {
            return calc_dist(local, a[1]) - calc_dist(local, b[1]);
        })[0];
        this.closest = closest;
    }
 
    if (this.closest.length) {
        closest = this.closest
    }

    if (this.next_tick_ang == null)
        this.next_tick_ang = []

    if (this.next_tick_ang.length || Globals.Tickcount() - this.throw_time < 8) {
        if(legit) {
            silent = false;
            var speed = UI.GetValue("Script items", "Legit aim speed");
            lerp_time = clamp(lerp_time + Globals.TickInterval() * (1/speed), 0, 1);
            var angle = closest[2];
            var local_angs = Local.GetViewAngles();
    
            var p = lerp(local_angs[0], angle[0], lerp_time);
            var y = lerp(local_angs[1], angle[1], lerp_time);

            if(Math.abs(local_angs[0]-angle[0]) > 0.05 && Math.abs(local_angs[1]-angle[1]) > 0.05) {
                angles_met = false
            } else {
                angles_met = true;
            }
            this.next_tick_ang = [p, normalize(y), 0];
        } else {
            angles_met = true;
        }
        UserCMD.SetViewAngles(this.next_tick_ang, silent)
    }

    if (this.ignore_input) {
        return;
    }

    if (calc_dist(local, closest[1]) > 200 && !this.ignore_input && !this.running) {
        return;
    }

    var moved = move_to_target(closest[1]);
    

    if (moved || this.running) {
        if (closest[5] == "Throw") {
            this.next_tick_ang = closest[2]
            if(angles_met) {
                UserCMD.SetButtons(UserCMD.GetButtons() | 1)
                this.throw_time = Globals.Tickcount();
                this.attacked = true
                this.ignore_input = true
            }
        }
        else if (closest[5] == "Run+Throw") {
            if (!this.closest.length)
                this.closest = closest

            this.next_tick_ang = closest[2]

            if(!angles_met)
                return;

            if (this.start_tick == 0) {
                this.start_tick = Globals.Tickcount()
            }

            if (this.run_start == 0)
                this.run_start = Globals.Tickcount();

            if(!move_forward(closest[2]))
                return;

            this.running = true

            if (this.running && (Globals.Tickcount() - this.run_start > closest[6])) {
                if(!this.attacked && angles_met) {
                    UserCMD.SetButtons(UserCMD.GetButtons() | 1)
                    this.throw_time = Globals.Tickcount();
                    this.attacked = true
                }
                if(Globals.Tickcount() - this.run_start > closest[6] + 8) {
                    this.running = false
                    this.attacked = false;
                    this.ignore_input = true
                    this.next_tick_ang = closest[2]
                    this.run_start = 0;
                }

            }
        }
        else if (closest[5] == "Jump+Throw") {
            this.next_tick_ang = closest[2]
            if(angles_met) {
                UserCMD.SetButtons(UserCMD.GetButtons() | 1 | 2)
                this.ignore_input = true
                this.attacked = true
                this.throw_time = Globals.Tickcount();
            }
        }
        else if (closest[5] == "Run+Jump+Throw") {
            if (!this.closest.length)
                this.closest = closest
            if (this.start_tick == 0) {
                this.start_tick = Globals.Tickcount()
            }
            var forward = angle_to_vec(closest[2][0], closest[2][1])
            forward = vec_mul_fl(forward, 130)
            this.next_tick_ang = closest[2]

            if(!move_forward(closest[2]))
                return;

            this.running = true
            
            var delta = vector_sub(vector_add(forward, closest[1]), Entity.GetRenderOrigin(Entity.GetLocalPlayer()))
            var len = Math.hypot(delta[0], delta[1])
            if (len < 80 && angles_met) {
                UserCMD.SetButtons(UserCMD.GetButtons() | 1 | 2)

                this.attacked = true
                this.throw_time = Globals.Tickcount();
                this.running = false
                this.ignore_input = true
                this.next_tick_ang = closest[2]
            }
        } else if(closest[5] == "Half throw") {
            if (this.start_tick == 0) {
                this.start_tick = Globals.Tickcount()
            }
            if(angles_met)
                UserCMD.SetButtons(UserCMD.GetButtons() | 1<<0 | 1<<11)
            if(Globals.Tickcount() - this.start_tick > 24 && angles_met) {
                this.attacked = true
                this.throw_time = Globals.Tickcount();
                this.ignore_input = true
                this.next_tick_ang = closest[2]
            }
        }
    }
    /* else {
        this.running = false
        this.closest = []
        this.ignore_input = false
        this.start_tick = 0
        this.moved_base = false;
        this.run_start = 0;
    } */
}

function on_local_connect() {
    if (Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("userid")))) {
        // cache all locations for the player's map into an array
        map_cache = locations.filter(function (e) {
            return e[0] == World.GetMapName();
        });
    }
}

Cheat.RegisterCallback("Draw", "draw");
Cheat.RegisterCallback("CreateMove", "check_visibility");
Cheat.RegisterCallback("CreateMove", "move_on_key");
Cheat.RegisterCallback("player_connect_full", "on_local_connect");

function getAngles(localPos, pos) {
    newPos = vector_sub(pos, localPos);
    xyDist = Math.sqrt((newPos[0] * newPos[0] + newPos[1] * newPos[1]));
    yaw = Math.atan2(newPos[1], newPos[0]) * 180 / Math.PI;
    pitch = Math.atan2(-newPos[2], xyDist) * 180 / Math.PI;
    roll = 0;
    angles = [pitch, yaw, roll];
    return angles;
}
function vector_sub(vec1, vec2) {
    return [
        vec1[0] - vec2[0],
        vec1[1] - vec2[1],
        vec1[2] - vec2[2]
    ];
}
function degreesToRadians(degress) {
    return degress * Math.PI / 180.0;
}
function angle_to_vec(pitch, yaw) {
    var p = degreesToRadians(pitch);
    var y = degreesToRadians(yaw)
    var sin_p = Math.sin(p);
    var cos_p = Math.cos(p);
    var sin_y = Math.sin(y);
    var cos_y = Math.cos(y);
    return [cos_p * cos_y, cos_p * sin_y, -sin_p];
}

function vector_add(vec, vec2) {
    newVec = [
        vec[0] + vec2[0],
        vec[1] + vec2[1],
        vec[2] + vec2[2]
    ]
    return newVec;
}

function shadow(x,y,align,text,custom,font,color,size) {
    if(custom) {
        Render.StringCustom(x+((size/7.17)),y+((size/7.17)),align,text,[0,0,0,255],font);
        Render.StringCustom(x,y,align,text,color,font);
    } else {
        Render.String(x+((size/7.17)),y+((size/7.17)),align,text,[0,0,0,255],size);
        Render.String(x,y,align,text,color,size);
    }
}

function import_grenade_selection() {
    var val = UI.GetValue("Script items", "Enabled grenades");

    if (val == 0)
        enabled_grenades = [];

    if (getDropdownValue(val, 0) && !~enabled_grenades.indexOf("molotov"))
        enabled_grenades.push("molotov");
    else if (~enabled_grenades.indexOf("molotov") && !getDropdownValue(val, 0))
        enabled_grenades.splice(enabled_grenades.indexOf("molotov"), 1);

    if (getDropdownValue(val, 1) && !~enabled_grenades.indexOf("high explosive grenade"))
        enabled_grenades.push("high explosive grenade");
    else if (~enabled_grenades.indexOf("high explosive grenade") && !getDropdownValue(val, 1))
        enabled_grenades.splice(enabled_grenades.indexOf("high explosive grenade"), 1);

    if (getDropdownValue(val, 2) && !~enabled_grenades.indexOf("flashbang"))
        enabled_grenades.push("flashbang");
    else if (~enabled_grenades.indexOf("flashbang") && !getDropdownValue(val, 2))
        enabled_grenades.splice(enabled_grenades.indexOf("flashbang"), 1);


    if (getDropdownValue(val, 3) && !~enabled_grenades.indexOf("smoke grenade"))
        enabled_grenades.push("smoke grenade");
    else if (~enabled_grenades.indexOf("smoke grenade") && !getDropdownValue(val, 3))
        enabled_grenades.splice(enabled_grenades.indexOf("smoke grenade"), 1);


    selection_cache = val;
    hand_cache = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
}
function vec_mul_fl(a, b) {
    return [a[0] * b, a[1] * b, a[2] * b]
}

function calc_dist(a, b) {
    x = a[0] - b[0];
    y = a[1] - b[1];
    z = a[2] - b[2];
    return Math.sqrt(x * x + y * y + z * z);
}

// thanks depresso man (vex)
function move_to_target(destination, a) {
    var local = Entity.GetLocalPlayer()
    var origin = Entity.GetRenderOrigin(local)
    origin[2] = Entity.GetEyePosition(local)[2]
    var delta = [destination[0] - origin[0], destination[1] - origin[1], destination[2] - origin[2]]
    var yaw = Local.GetViewAngles()[1]
    var cmdMove = []

    var speed = 20

    cmdMove[0] = (((Math.sin(yaw / 180 * Math.PI)) * delta[1]) + (Math.cos(yaw / 180 * Math.PI) * delta[0])) * speed
    cmdMove[1] = (((Math.sin(yaw / 180 * Math.PI)) * delta[0]) + (Math.cos(yaw / 180 * Math.PI) * -delta[1])) * speed
    cmdMove[2] = 0

    var length = Math.sqrt(delta[0] * delta[0] + delta[1] * delta[1] + delta[2] * delta[2])
    var velo = Entity.GetProp(local, "DT_CSPlayer", "m_vecVelocity[0]")
    var length2 = Math.sqrt(velo[0] * velo[0] + velo[1] * velo[1] + velo[2] * velo[2])

    UserCMD.SetMovement(cmdMove);
    return length < (a ? a : 1) && (length2 < 2 || a);
}

// thanks ed
function getDropdownValue(value, index) {
    var mask = 1 << index;
    return value & mask ? true : false;
}
