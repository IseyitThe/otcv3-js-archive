var players = [];

function Player(index, is_ignored, is_priority, is_safe) {
    this.index = index;
    this.is_ignored = is_ignored;
    this.is_priority = is_priority;
    this.is_safe = is_safe;

    this.shots = 0;
    this.last_shot = 0;

    this.menu_elements = undefined;
    this.hitbox_dropdown = undefined;
    this.ignored_checkbox = undefined;
    this.priority_checkbox = undefined;
    this.doubletap_checkbox = undefined;
    this.hideshots_checkbox = undefined;
    this.invert_checkbox = undefined;
    this.baim_slider = undefined;
    this.setup = false;

    players.push(this);
}

Player.prototype.remove = function () {
    for (var i in players) {
        if (players[i].index == this.index) {
            players.splice(i, 1);
            /*     players = players.filter(function (value) {
                return value.index != this.index
            }); */
            return true;
        }
    }
    return false;
}

Player.prototype.is_setup = function () {
    return this.setup;
}

Player.prototype.set_menu_elements = function (arr) {
    this.menu_elements = arr;
    this.hitbox_dropdown = arr[0];
    this.ignored_checkbox = arr[1];
    this.priority_checkbox = arr[2];
    this.doubletap_checkbox = arr[3];
    this.baim_slider = arr[4];
    this.hideshots_checkbox = arr[5];
    this.invert_checkbox = arr[6];
}

Player.prototype.set_setup = function (bool) {
    this.setup = bool;
}

/* ------------------------------------------- MENU ------------------------------------------- */

/**
* @param {Number} x - x position of the shadowed text
* @param {Number} y - y position of the shadowed text
* @param {Number} width - width of menu
* @param {Number} height - height of menu
* @param {String} title - title of menu
* @param {boolean} visible - menu visibility
* @param {array} bg_color - color of background
* @param {array} fg_color - color of foreground
* @param {array} ol_color - color of outlines
* @note forget js docs lol I'm not doing it for all of them until I finish this menu base :P
**/

function Menu(x, y, width, height, title, visible, bg_color, fg_color, ol_color, text_color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.title = title;
    this.visible = visible;
    this.bg_color = bg_color;
    this.fg_color = fg_color;
    this.ol_color = ol_color;
    this.text_color = text_color;

    this.down_in_window = false;
    this.differenceX = 0;
    this.differenceY = 0;

    this.element_offset = 27;
    this.extra_offset = 0;
    this.added_extra_offset = false;
    this.elements = [];
}

Menu.prototype.draw = function () {
    if (World.GetServerString() == "") return;

    if (!this.visible) return;

    var cursor = Input.GetCursorPosition();

    if (Input.IsKeyPressed(0x01)) {
        if (inside_region(cursor, [this.x, this.y], [this.x + this.width, this.y + this.height]) && !this.down_in_window) {
            this.down_in_window = true;
            this.differenceX = (cursor[0] - this.x);
            this.differenceY = (cursor[1] - this.y);
        } else if (this.down_in_window) {
            this.x = (cursor[0] - this.differenceX);
            this.y = (cursor[1] - this.differenceY);
        }
    } else {
        this.down_in_window = false;
    }

    var text_offset = Render.TextSize(this.title, 3);

    Render.FilledRect(this.x, this.y, this.width, this.height, this.bg_color);
    Render.Rect(this.x, this.y, this.width, this.height, this.ol_color);
    Render.String(this.x + (this.width / 2), this.y + (text_offset[1] / 8) + 1, 1, this.title, [255, 255, 255, 255], 3);
    Render.FilledRect(this.x, this.y + text_offset[1] + 1, this.width, this.height - text_offset[1], this.fg_color);
    Render.Rect(this.x, this.y + text_offset[1] + 1, this.width, this.height - text_offset[1], this.ol_color);

    var current = 1;

    for (var i in this.elements) {
        var obj = this.elements[i];
        if (!obj.visible) continue;

        var skip = true;

        if(i > 0) {
            var names = [];
            for(var g = 0; g < Entity.GetEnemies().length; g++) {  
                names.push(Entity.GetName(Entity.GetEnemies()[g]));
            }

            if(!~names.indexOf(obj.player))
                skip = false;
        }

        if(!skip) {
            continue;
        }

        for (var j = 0; j < i; j++) {
            if (this.elements[j].type == "Dropdown" && this.elements[j].is_expanded) {
                if (!this.elements[j].visible) continue;
                this.extra_offset += this.elements[j].expanded_length;
            }
        }

        if (this.elements[i].type != "Dropdown" && this.elements[i].type != "Slider")
            this.element_offset = 25;

        if ((this.y + this.extra_offset + (current * this.element_offset)) > this.height) {
            this.height += ((this.extra_offset + (current * this.element_offset)) - this.height) + 20;
        } else {
            this.height = 235;
        }

        obj.draw(this.x + 10, this.y + this.extra_offset + (current * this.element_offset));

        this.extra_offset = 0;
        this.element_offset = 27;

        current++;
    }

}

Menu.prototype.set_pos = function (x, y) {
    this.x = x;
    this.y = y;
}

Menu.prototype.set_visibility = function (visible) {
    this.visible = visible;
}

Menu.prototype.set_colors = function (background, foreground, outline, text) {
    this.bg_color = background;
    this.fg_color = foreground;
    this.ol_color = outline;
    this.text_color = text;
}

Menu.prototype.get_elements = function () {
    return this.elements;
}

/* ------------------------------------------- DROPDOWN ------------------------------------------- */

function Dropdown(x, y, width, height, parent, title, list, visible, player) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.parent = parent;
    this.title = title;
    this.list = list;

    this.visible = visible;

    this.selected = 0;
    this.is_expanded = false;
    this.expanded_tick = 0;
    this.select_tick = 0;
    this.expanded_length = 0;

    parent.elements.push(this);

    this.player = player;

    this.type = "Dropdown";
}

Dropdown.prototype.set_list = function (list) {
    this.list = list;
}

Dropdown.prototype.get_selected = function () {
    return this.selected;
}

Dropdown.prototype.get_list = function () {
    return this.list;
}

Dropdown.prototype.set_visibility = function (bool) {
    this.visible = bool;
}

Dropdown.prototype.draw = function (x, y) {
    Render.String(this.x + x, this.y + y - 11, 0, this.title, this.parent.text_color, 3);
    Render.FilledRect(this.x + x, this.y + y, this.width, this.height, [0, 0, 0, 100]);
    Render.Rect(this.x + x, this.y + y, this.width, this.height, this.parent.bg_color);
    Render.Rect(this.x + x + (this.width * 5 / 6), this.y + y, this.width * 1 / 6, this.height, this.parent.bg_color);
    Render.Polygon([[this.x + x + 3 + (this.width * 5 / 6), this.y + y + 3], [this.x + x + 3 + (this.width * 5 / 6) + 19, this.y + y + 3], [this.x + x + (this.width * 5 / 6) + (this.width * 0.083), this.y + y + 12]], this.parent.bg_color);

    var selected = "...";
    var cursor = Input.GetCursorPosition();

    if (this.selected != -1) {
        selected = this.list[this.selected];
    }

    Render.String(this.x + x + 4, this.y + y + 3, 0, selected, this.parent.text_color, 3);

    if (this.is_expanded) {
        var vertical_offset = 2;
        var list_offset = calculate_list_offset(this.list, 3) - 10;
        this.expanded_length = list_offset + 15;

        Render.FilledRect(this.x + x, this.y + y + this.height, this.width, this.height + list_offset + (vertical_offset / 2 * this.list.length - 1), [0, 0, 0, 100]);
        Render.Rect(this.x + x, this.y + y + this.height - 1, this.width, this.height + list_offset + (vertical_offset / 2 * this.list.length - 1), this.parent.bg_color);
        for (var i in this.list) {
            Render.String(this.x + x + 4, this.y + y + this.height + vertical_offset, 0, this.list[i], this.parent.text_color, 3);

            if (Input.IsKeyPressed(0x01) && inside_region(cursor, [this.x + x + 2, this.y + y + this.height + vertical_offset], [this.x + x + this.width, this.y + y + this.height + vertical_offset + 6])) {
                if (Globals.Tickcount() - this.select_tick > 16) {
                    if (this.selected == i)
                        this.selected = -1;
                    else
                        this.selected = i;

                    this.select_tick = Globals.Tickcount()
                }
            }

            vertical_offset += 13;
        }
    }

    if (Input.IsKeyPressed(0x01)) {
        if (inside_region(cursor, [this.x + x, this.y + y], [this.x + x + this.width, this.y + y + this.height])) {
            if (Globals.Tickcount() - this.expanded_tick > 16) {
                this.is_expanded = !this.is_expanded;
                this.expanded_tick = Globals.Tickcount();
            }
        }
    }
}

/* ------------------------------------------- DROPDOWN ------------------------------------------- */

/* ------------------------------------------- CHECKBOX ------------------------------------------- */

function Checkbox(x, y, width, height, parent, title, visible, player) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.parent = parent;
    this.title = title;

    this.visible = visible == undefined ? true : visible;

    this.enabled = 0;
    this.enabled_tick = 0;

    parent.elements.push(this);

    this.player = player;

    this.type = "Checkbox";
}

Checkbox.prototype.is_enabled = function () {
    return this.enabled;
}

Checkbox.prototype.set_visibility = function (bool) {
    this.visible = bool;
}

Checkbox.prototype.draw = function (x, y) {
    Render.FilledRect(this.x + x, this.y + y, this.width, this.height, [0, 0, 0, 100]);
    Render.Rect(this.x + x, this.y + y, this.width, this.height, this.parent.bg_color);

    if (this.enabled) {
        Render.FilledRect(this.x + x, this.y + y, this.width, this.height, this.parent.bg_color);
    }

    var title_width = Render.TextSize(this.title, 3);

    Render.String(this.x + x + this.width + 5, this.y + y + (title_width[1] / 5), 0, this.title, this.parent.text_color, 3);

    var cursor = Input.GetCursorPosition();

    if (Input.IsKeyPressed(0x01) && inside_region(cursor, [this.x + x, this.y + y], [this.x + x + this.width + title_width[0] + 5, this.y + y + this.height])) {
        if (Globals.Tickcount() - this.enabled_tick > 16) {
            this.enabled = !this.enabled;
            this.enabled_tick = Globals.Tickcount();
        }
    }
}

/* ------------------------------------------- CHECKBOX ------------------------------------------- */

/* ------------------------------------------- SLIDER ------------------------------------------- */

function Slider(x, y, width, height, parent, title, min, max, value, visible, player) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.parent = parent;
    this.title = title;
    this.min = min;
    this.max = max;
    this.value = value;

    this.visible = visible == undefined ? true : visible;

    parent.elements.push(this);

    this.player = player;

    this.type = "Slider";
}

Slider.prototype.set_visibility = function (bool) {
    this.visible = bool;
}

Slider.prototype.draw = function (x, y) {
    Render.String(this.x + x, this.y + y - 11, 0, this.title, this.parent.text_color, 3);
    Render.FilledRect(this.x + x, this.y + y, this.width, this.height, [0, 0, 0, 100]);
    Render.Rect(this.x + x, this.y + y, this.width, this.height, this.parent.bg_color);

    var fraction = this.width / this.max;

    var cursor = Input.GetCursorPosition();

    for (var i = 0; i <= this.max; i++) {
        if (inside_region(cursor, [this.x + x + 1, this.y + y + 1], [this.x + x + 1 + this.width, this.y + y + 1 + this.height - 2])) {
            shadow(this.x + x + 1 + (fraction * this.value), this.y + y + 1 + this.height, 1, this.value + "", false, undefined, this.parent.text_color, 3);
        }

        if (inside_region(cursor, [this.x + x + 1 + (fraction * (i - 1)), this.y + y + 1], [this.x + x + 1 + (fraction * i), this.y + y + 1 + this.height - 2]) && Input.IsKeyPressed(0x01)) {
            this.value = i;
        }
    }

    Render.FilledRect(this.x + x + 1, this.y + y + 1, (fraction * this.value), this.height - 2, this.parent.bg_color);
}

/* ------------------------------------------- SLIDER ------------------------------------------- */

/* --------------------------------------- HELPER + SETUP --------------------------------------- */

var wepname_category = {
    "usp s": "Pistol",
    "glock 18": "Pistol",
    "p2000": "Pistol",
    "dual berettas": "Pistol",
    "r8 revolver": "Heavy Pistol",
    "desert eagle": "Heavy Pistol",
    "p250": "Pistol",
    "tec 9": "Pistol",
    "mp9": "General",
    "mac 10": "General",
    "pp bizon": "General",
    "ump 45": "General",
    "ak 47": "General",
    "sg 553": "General",
    "aug": "General",
    "m4a1 s": "General",
    "m4a4": "General",
    "ssg 08": "Scout",
    "awp": "AWP",
    "g3sg1": "Auto",
    "scar 20": "Auto",
    "nova": "General",
    "xm1014": "General",
    "mag 7": "General",
    "m249": "General",
    "negev": "General"
};

function setup() {
    var server_players = Entity.GetEnemies();

    for (var p in server_players) {
        if (Entity.IsLocalPlayer(server_players[p])) continue;

        if (!get_player(server_players[p]) && Entity.IsEnemy(server_players[p])) {
            new Player(server_players[p], false, false, false);
        }
    }
}

setup();

var menu = new Menu(1300, 400, 170, 215, "Advanced Ragebot", true, [45, 152, 218, 255], [75, 101, 132, 255], [15, 41, 72, 255], [255, 255, 255, 255]);
var player_dropdown = new Dropdown(0, 0, 150, 15, menu, "Players", indexes_to_names(players_to_indexes_list()), true);

function players_to_indexes_list() {
    var list = [];

    for (var i in players) {
        if (!~list.indexOf(players[i].index) && Entity.IsValid(players[i].index)) {
            list.push(players[i].index);
        }
    }

    return list;
}

function name_to_index(name) {
    var enemies = Entity.GetEnemies();
    for (var i in enemies) {
        if (Entity.GetName(enemies[i]) == name) {
            return enemies[i];
        }
    }
}

function calculate_list_offset(list, size) {
    var list_offset = 0;
    for (var i in list) {
        list_offset += Render.TextSize(list[i], size)[1];
    }
    return list_offset;
}

function indexes_to_names(arr) {
    var list = [];

    for (var i in arr) {
        if (!Entity.IsEnemy(arr[i])) continue;
        list.push(Entity.GetName(arr[i]));
    }

    return list;
}

function shadow(x, y, align, text, custom, font, color, size) {
    if (custom) {
        Render.StringCustom(x + ((size / 7.17)), y + ((size / 7.17)), align, text, [0, 0, 0, 255], font);
        Render.StringCustom(x, y, align, text, color, font);
    } else {
        Render.String(x + ((size / 7.17)), y + ((size / 7.17)), align, text, [0, 0, 0, 255], size);
        Render.String(x, y, align, text, color, size);
    }
}

function get_player(ind) {
    for (var p in players) {
        if (players[p].index == ind) {
            return players[p];
        }
    }
}

function inside_region(input, min, max) {
    return ((input[0] >= min[0] && input[0] <= max[0]) && (input[1] >= min[1] && input[1] <= max[1]));
}

// clean dist func, thanks rzr
function calcDist(a, b) {
    x = a[0] - b[0];
    y = a[1] - b[1];
    z = a[2] - b[2];
    return Math.sqrt(x * x + y * y + z * z);
}

function closest_target() {
    var local = Entity.GetLocalPlayer();
    var enemies = Entity.GetEnemies();

    var dists = [];

    for (e in enemies) {
        if (!Entity.IsAlive(enemies[e]) || Entity.IsDormant(enemies[e]) || !Entity.IsValid(enemies[e])) continue;
        dists.push([enemies[e], calcDist(Entity.GetHitboxPosition(local, 0), Entity.GetHitboxPosition(enemies[e], 0))]);
    }

    dists.sort(function (a, b) {
        return a[1] - b[1];
    });

    if (dists.length == 0 || dists == []) return target = -1;

    return dists[0][0];
}

function weapon_type() {
    var local = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(local));

    if (wepname_category[weapon] == undefined)
        return "";

    return wepname_category[weapon];
}

/* --------------------------------------- HELPER + SETUP --------------------------------------- */

/* --------------------------------------- MAIN FUNCTIONS --------------------------------------- */

var cur_player = -1;
var update_time = Globals.Curtime();

function render_menu() {
    menu.set_visibility(UI.IsMenuOpen() && players.length > 0);
    menu.draw();

    // contingency plan for buggy rendering lmao
    for (var e in menu.get_elements()) {
        menu.get_elements()[e].set_visibility(menu.visible);
    }

    var selected_name = player_dropdown.get_list()[player_dropdown.get_selected()];

    if (selected_name != undefined) {
        cur_player = get_player(name_to_index(selected_name));

        if (!cur_player.is_setup()) {
            setup_player(cur_player);
        }
    }

    for (var p in players) {
        for (var e in players[p].menu_elements) {
            if (players[p].menu_elements[e] != undefined) {
                players[p].menu_elements[e].set_visibility(players[p].index == cur_player.index);
            }
        }
    }
}

function setup_player(player) {
    if (!player.is_setup()) {
        var shots_slider = new Slider(0, 2, 150, 7, menu, "Hitbox after x shots", 0, 5, 0, true, Entity.GetName(player.index));
        var hitbox_dropdown = new Dropdown(0, 0, 150, 15, menu, "Hitbox after x shots", ["None", "All", "Head", "Body"], true, Entity.GetName(player.index));
        var priority_checkbox = new Checkbox(0, 0, 15, 15, menu, "Priority", true, Entity.GetName(player.index));
        var ignored_checkbox = new Checkbox(0, 0, 15, 15, menu, "Ignored", true, Entity.GetName(player.index));
        // enabling this will not let you use doubletap normally
        // you also need to enable it where the second comment is in the "handle_conditions" function
        //var doubletap_checkbox = new Checkbox(0,0,15,15,menu,"Doubletap",true);
        var hideshots_checkbox = new Checkbox(0, 0, 15, 15, menu, "Hide shots", true, Entity.GetName(player.index));
        var invert_checkbox = new Checkbox(0, 0, 15, 15, menu, "Invert AA", true, Entity.GetName(player.index));
        player.set_menu_elements([hitbox_dropdown, ignored_checkbox, priority_checkbox, undefined, shots_slider, hideshots_checkbox, invert_checkbox]);

        player.set_setup(true);
    }
}

function update_menu() {
    if (World.GetServerString() != "") {

        /* if (Entity.GetEnemies().length <= 0) {
            update_time = Globals.Curtime();
            player_dropdown.set_list([]);
            return;
        } */

        var server_players = Entity.GetEnemies();

        for (var i in players) {
            if (!~server_players.indexOf(players[i].index)) {
                for (var e in players[i].menu_elements) {
                    if (players[i].menu_elements[e] != undefined) {
                        players[i].menu_elements[e].set_visibility(false);
                        players[i].menu_elements[e] = undefined;
                    }
                }
                players[i].remove();

                player_dropdown.selected = 0;
                continue;
            }
        }

        for (var p in server_players) {
            if (Entity.IsLocalPlayer(server_players[p])) continue;

            if (!get_player(server_players[p]) && Entity.IsEnemy(server_players[p])) {
                new Player(server_players[p], false, false, false);
            }
        }

        player_dropdown.set_list(indexes_to_names(players_to_indexes_list()));
        update_time = Globals.Curtime();


    }
}

function player_connect() {
    var event_player = Entity.GetEntityFromUserID(Event.GetInt("userid"));

    if (Entity.IsLocalPlayer(event_player)) {
        var server_players = Entity.GetEnemies();
        for (var p in server_players) {
            new Player(server_players[p], false, false, false);
        }
        update_time = Globals.Curtime();
    }
}

var hitbox_default = {
    "General": 0,
    "Auto": 0,
    "AWP": 0,
    "Scout": 0,
    "Heavy Pistol": 0,
    "Pistol": 0
};

var keys = Object.keys(hitbox_default);

for (var k in keys) {
    hitbox_default[keys[k]] = UI.GetValue("Rage", keys[k].toUpperCase(), "Targeting", "Hitboxes");
}

function handle_conditions() {
    var local = Entity.GetLocalPlayer();

    if (!Entity.IsAlive(local)) return;

    var player = get_player(closest_target());

    if (Ragebot.GetTarget() != undefined && Ragebot.GetTarget() != 0)
        player = get_player(Ragebot.GetTarget());

    for (var p in players) {
        if (!players[p].setup) {
            setup_player(players[p]);
            continue;
        }

        if ((Globals.Curtime() - players[p].last_shot > 4 || !Entity.IsAlive(players[p].index)) && players[p].last_shot != 0) {
            players[p].shots = 0;
            players[p].last_shot = 0;
            UI.SetValue("Rage", weapon_type().toUpperCase(), "Targeting", "Hitboxes", hitbox_default[weapon_type()]);
        }

        if (players[p].priority_checkbox.enabled && Entity.IsAlive(players[p].index)) {
            if (players[p].ignored_checkbox.enabled)
                players[p].ignored_checkbox.enabled = 0;
            Ragebot.ForceTarget(players[p].index);
            player = players[p];
        }

        if (players[p].ignored_checkbox.enabled && Entity.IsAlive(players[p].index)) {
            Ragebot.IgnoreTarget(players[p].index);
        }
    }

    if (!Entity.IsAlive(player.index) || !Entity.IsValid(player.index)) return;



    if (player.hitbox_dropdown.selected > 0) {
        if (player.shots >= player.baim_slider.value) {
            if (player.hitbox_dropdown.selected == 1) {
                UI.SetValue("Rage", weapon_type().toUpperCase(), "Targeting", "Hitboxes", 255);
            } else if (player.hitbox_dropdown.selected == 2) {
                UI.SetValue("Rage", weapon_type().toUpperCase(), "Targeting", "Hitboxes", 3);
            } else if (player.hitbox_dropdown.selected == 3) {
                UI.SetValue("Rage", weapon_type().toUpperCase(), "Targeting", "Hitboxes", 60);
            }
        }
    } else {
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point"))
            UI.ToggleHotkey("Rage", "GENERAL", "General", "Force safe point");
    }

    // uncomment the commented code below for the doubletap checkbox to work 
    // (must also enable it above in the "setup_player" function)

    /* if(player.doubletap_checkbox.enabled && !UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")) {
        UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Doubletap");
    } else if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && !player.doubletap_checkbox.enabled) {
            UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Doubletap");
    }*/

    if (player.hideshots_checkbox.enabled && !UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots")) {
        UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Hide shots");
    } else if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots") && !player.hideshots_checkbox.enabled) {
        UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Hide shots");
    }

    if (player.invert_checkbox.enabled) {
        if (!UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter"))
            UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
    } else if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter") && !player.invert_checkbox.enabled) {
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
    }


}

function ragebot_fire() {
    var target = get_player(Event.GetInt("target_index"));

    target.shots++;
    target.last_shot = Globals.Curtime();
}

/* --------------------------------------- MAIN FUNCTIONS --------------------------------------- */

Cheat.RegisterCallback("ragebot_fire", "ragebot_fire");
Cheat.RegisterCallback("CreateMove", "handle_conditions");
Cheat.RegisterCallback("Draw", "render_menu");
Cheat.RegisterCallback("Draw", "update_menu");
Cheat.RegisterCallback("player_connect_full", "player_connect");