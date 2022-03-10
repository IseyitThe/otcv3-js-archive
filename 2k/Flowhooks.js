/*
 *
 * Customer: Godly#0003
 * Author: april#0001
 *
 */

//region dependencies

function safe_concat(a, b)
{
    var arr = [];

    for (var k in a)
        arr.push(a[k]);

    if (b instanceof Array)
    {
        for (var k in b)
            arr.push(b[k]);

        return arr;
    }

    arr.push(b);
    return arr;
}

function call(func, name, props)
{
    func.apply(null, safe_concat([name], props));
    return name;
}

function get(path)
{
    if (path instanceof Array)
        return UI.GetValue.apply(null, path);

    return UI.GetValue.apply(null, ["Script items", path]);
}

function is_mouse_inside_button(mouse_pos, x, y, w, h)
{
    return mouse_pos[0] > x && mouse_pos[1] > y && mouse_pos[0] < x + w && mouse_pos[1] < y + h;
}
//endregion

//region menu
const enabled = call(UI.AddCheckbox, "| Flowhook's Playerlist", []);

const coords = {
    x: call(UI.AddSliderInt, "coords_x", [10, 2560]),
    y: call(UI.AddSliderInt, "coords_y", [10, 1440])
};

const last_state = call(UI.AddSliderInt, "last_state", [0, 2]);
const last_pressed_button = call(UI.AddSliderInt, "last_pressed_button", [0, 1]);

Render.OutlineString = function(x, y, align, text, color, font)
{
    Render.String(x - 1, y - 1, align, text, [10, 10, 10, 200], font);
    Render.String(x - 1, y + 1, align, text, [10, 10, 10, 200], font);
    Render.String(x + 1, y - 1, align, text, [10, 10, 10, 200], font);
    Render.String(x + 1, y + 1, align, text, [10, 10, 10, 200], font);
    Render.String(x, y, align, text, color, font);
}
//endregion

//region locals
var player_list = {
    user: Cheat.GetUsername(),
    id: 0,

    states: [],

    current: {
        name: "",
        id: 0,
        competitive_rank: "",
        competitive_wins: ""
    }
};

const ranks = [
    "Unranked",
    "Silver I",
    "Silver II",
    "Silver III",
    "Silver IV",
    "Silver Elite",
    "Silver Elite Master",
    "Gold Nova I",
    "Gold Nova II",
    "Gold Nova III",
    "Gold Nova Master",
    "Master Guardian I",
    "Master Guardian II",
    "Master Guardian Elite",
    "Distinguished Master Guardian",
    "Legendary Eagle",
    "Legendary Eagle Master",
    "Supreme Master First Class",
    "The Global Elite"
];

const state_colors = [
    [235, 235, 235, 255],
    [235, 15, 25, 255],
    [15, 235, 25, 255]
];
//endregion

//region functions
function handle_menu_visibility()
{
    UI.SetEnabled("Script items", "coords_x", false);
    UI.SetEnabled("Script items", "coords_y", false);
    UI.SetEnabled("Script items", "last_state", false);
    UI.SetEnabled("Script items", "last_pressed_button", false);
}

handle_menu_visibility();

function geometry()
{
    const x = get(coords.x), y = get(coords.y);
    const players = Entity.GetPlayers();

    // Outline
    Render.Rect(x - 1, y - 1, 502, 300 + players.length * 15 + 2, [10, 10, 10, 200]);

    // Top bar
    Render.GradientRect(x, y, 500, 15, 0, [75, 75, 75, 255], [15, 15, 15, 255]);

    // Fill
    Render.FilledRect(x, y + 15, 500, 300 + players.length * 15 - 15, [15, 15, 15, 255]);

    // Inner line #1
    Render.Rect(x + 5, y + 15, 490, 300 + players.length * 15 - 20, [10, 10, 10, 200]);
    Render.FilledRect(x + 6, y + 16, 488, 20, [57, 57, 57, 255]);
    Render.Rect(x + 6, y + 35, 488, 2, [10, 10, 10, 200]);
    Render.GradientRect(x + 6, y + 36, 488, 300 + players.length * 15 - 42, 0, [45, 45, 45, 255], [35, 35, 35, 255]);

    // Tabs
    Render.FilledRect(x + 6, y + 16, 50, 20, [45, 45, 45, 255]);
    Render.FilledRect(x + 56, y + 16, 1, 20, [10, 10, 10, 200]);

    Render.FilledRect(x + 57, y + 16, 50, 19, [26, 26, 26, 255]);
    Render.FilledRect(x + 107, y + 16, 1, 19, [10, 10, 10, 200]);

    Render.FilledRect(x + 6, y + 16, 50, 2, [230, 145, 30, 255]);

    // Inner line #2
    Render.Rect(x + 15, y + 46, 470, 300 + players.length * 15 - 221, [10, 10, 10, 200]);
    Render.FilledRect(x + 16, y + 47, 468, 15, [57, 57, 57, 255]);
    Render.FilledRect(x + 16, y + 62, 468, 300 + players.length * 15 - 238, [25, 25, 25, 255]);

    // Inner line #3
    Render.Rect(x + 15, y + 156 + players.length * 15, 470, 129, [10, 10, 10, 200]);

    // Player list divs
    Render.Rect(x + 15, y + 61, 470, 1, [10, 10, 10, 200]);
    Render.Rect(x + 55, y + 46, 1, 15, [10, 10, 10, 200]);
    Render.Rect(x + 225, y + 46, 1, 15, [10, 10, 10, 200]);
    Render.Rect(x + 280, y + 46, 1, 15, [10, 10, 10, 200]);
    Render.Rect(x + 335, y + 46, 1, 15, [10, 10, 10, 200]);
    Render.Rect(x + 390, y + 46, 1, 15, [10, 10, 10, 200]);

    // Scroll bar
    Render.FilledRect(x + 475, y + 47, 10, 300 + players.length * 15 - 223, [12, 12, 12, 255]);

    // Inner line #4
    Render.Rect(x + 255, y + 166 + players.length * 15, 1, 109, [10, 10, 10, 200]);

    // State buttons
    Render.GradientRect(x + 270, y + 167 + players.length * 15, 50, 15, 0, [75, 75, 75, 255], [15, 15, 15, 255]);
    Render.OutlineString(x + 295, y + 169 + players.length * 15, 1, "Set neutral", [235, 235, 235, 255], 2);

    Render.GradientRect(x + 345, y + 167 + players.length * 15, 50, 15, 0, [75, 75, 75, 255], [15, 15, 15, 255]);
    Render.OutlineString(x + 370, y + 169 + players.length * 15, 1, "Set rage", [235, 235, 235, 255], 2);

    Render.GradientRect(x + 420, y + 167 + players.length * 15, 50, 15, 0, [75, 75, 75, 255], [15, 15, 15, 255]);
    Render.OutlineString(x + 445, y + 169 + players.length * 15, 1, "Set friend", [235, 235, 235, 255], 2);

    // Title
    Render.OutlineString(x + 250, y + 2, 1, "Player List", [235, 235, 235, 255], 2);

    // Tabs strings
    Render.OutlineString(x + 15, y + 21, 0, "Players           Records", [235, 235, 235, 255], 2);

    // Player list strings
    Render.OutlineString(x + 24, y + 49, 0, "Index                                     Username                                     Hitgroup               Pitch                  Yaw                      OT-User", [235, 235, 235, 255], 2);

    // Settings strings
    Render.OutlineString(x + 17, y + 151 + players.length * 15, 0, "Player Settings", [235, 235, 235, 255], 2);
    Render.OutlineString(x + 19, y + 170 + players.length * 15, 0, "Name: " + player_list.current.name, [235, 235, 235, 255], 2);
    Render.OutlineString(x + 19, y + 195 + players.length * 15, 0, "ID: " + player_list.current.id, [235, 235, 235, 255], 2);
    Render.OutlineString(x + 19, y + 220 + players.length * 15, 0, "Competitive Rank: " + player_list.current.competitive_rank, [235, 235, 235, 255], 2);
    Render.OutlineString(x + 19, y + 245 + players.length * 15, 0, "Competitive Wins: " + player_list.current.competitive_rank, [235, 235, 235, 255], 2);

    for (var i = 0; i < players.length; i++)
    {
        const ent = players[i];

        if (player_list.states[ent] == undefined)
        {
            player_list.states[ent] = 0;
        }

        if (player_list.id === i)
        {
            Render.FilledRect(x + 16, y + 62 + 15 * i, 459, 15, [230, 145, 30, 125]);
            player_list.current.name = Entity.GetName(ent);
            player_list.current.id = ent;
            player_list.current.competitive_wins = Entity.GetProp(ent, "CCSPlayerResource", "m_iCompetitiveWins");
            player_list.current.competitive_rank = ranks[Entity.GetProp(ent, "CCSPlayerResource", "m_iCompetitiveRanking")];
        }

        Render.OutlineString(x + 16, y + 63 + 15 * i, 0, ent.toString(), [235, 235, 235, 200], 2);
        Render.OutlineString(x + 59, y + 63 + 15 * i, 0, Entity.GetName(ent), state_colors[player_list.states[ent]], 2);
        Render.OutlineString(x + 227, y + 63 + 15 * i, 0, "Auto                  Auto                  Auto", [235, 235, 235, 200], 2);
        Render.OutlineString(x + 395, y + 63 + 15 * i, 0, Entity.IsLocalPlayer(ent) ? player_list.user : "N/A", [235, 235, 235, 200], 2);
    }
}

var input_state = {down: false, up: false};
function input()
{
    const players = Entity.GetPlayers();

    if (Input.IsKeyPressed(0x26) === input_state.up
     && Input.IsKeyPressed(0x28) === input_state.down)
        return;

    input_state.down = Input.IsKeyPressed(0x28);
    input_state.up = Input.IsKeyPressed(0x26);

    const state = get(last_state);

    UI.SetValue("Script items", "last_state", 0);

    if (input_state.up && state !== 1)
    {
        UI.SetValue("Script items", "last_state", 1);

        if (player_list.id < 1)
        {
            player_list.id = players.length - 1;
            return;
        }

        player_list.id = (player_list.id - 1) % players.length;
    }

    if (input_state.down && state !== 2)
    {
        UI.SetValue("Script items", "last_state", 2);
        player_list.id = (player_list.id + 1) % players.length;
    }
}

function logic()
{
    const is_pressing_mouse = Input.IsKeyPressed(0x1);

    if (!is_pressing_mouse)
    {
        UI.SetValue("Script items", "last_pressed_button", 0);
        return;
    }

    const x = get(coords.x), y = get(coords.y);
    const players = Entity.GetPlayers();
    const mouse_pos = Input.GetCursorPosition();
    const state = get(last_pressed_button);

    if (is_mouse_inside_button(mouse_pos, x, y, 500, 15))
    {
        UI.SetValue("Script items", "coords_x", mouse_pos[0] - 250)
        UI.SetValue("Script items", "coords_y", mouse_pos[1] - 5)
        return;
    }

    if (is_mouse_inside_button(mouse_pos, x + 270, y + 167 + players.length * 15, 50, 15) && state !== 1)
    {
        player_list.states[player_list.current.id] = 0;
        UI.SetValue("Script items", "last_pressed_button", 1);
    }

    if (is_mouse_inside_button(mouse_pos, x + 345, y + 167 + players.length * 15, 50, 15) && state !== 1)
    {
        player_list.states[player_list.current.id] = 1;
        UI.SetValue("Script items", "last_pressed_button", 1);
    }

    if (is_mouse_inside_button(mouse_pos, x + 420, y + 167 + players.length * 15, 50, 15) && state !== 1)
    {
        player_list.states[player_list.current.id] = 2;
        UI.SetValue("Script items", "last_pressed_button", 1);
    }
}

function do_ragebot_adjusments()
{
    for (var ent in player_list.states)
    {
        ent = parseInt(ent);
        const state = player_list.states[ent];

        if (state === 2)
        {
            Cheat.Print(Entity.GetName(ent)+"\n");
            Ragebot.IgnoreTarget(ent);
        }
    }
}

function render_rage_indicator()
{
    for (var ent in player_list.states)
    {
        ent = parseInt(ent);
        const state = player_list.states[ent];

        if (state > 0)
        {
	    const label = state === 1 ? "RAGE" : "FRIENDLY";
            const box = Entity.GetRenderBox(ent);

            if (!box[0] || Entity.IsDormant(ent))
                continue;

            const w = box[3] - box[1];

            Render.String(box[1] + w / 2, box[2] - 20, 1, label, [235, 15, 25, 200], 3);
        }
    }
}

function on_create_move()
{
    do_ragebot_adjusments();
}

function on_draw()
{
    render_rage_indicator();

    if (!UI.IsMenuOpen())
        return;

    geometry();
    input();
    logic();
}
//endregion

//region callbacks

Cheat.RegisterCallback("Draw", "on_draw");
Cheat.RegisterCallback("CreateMove", "on_create_move");

//endregion
