// HitlistV2.6.4 Pasted By Pinecone (Super Unoptimized Shit Code)
// Slider Title From https://onetap.su/members/12151/ - https://onetap.su/threads/release-customizable-jitter-probably-the-best-anti-aim-available.13157/
// Original Script (Probably Better Than This One) By - https://onetap.su/members/linius.27578/ - https://onetap.su/threads/release-simple-hitlist.12731/
// UI Mouse Support (Click and Drag) Taken From Original Script
var position = {
    x: 100,
    y: 100
}

var boxdimension = {
  width:  210,
  height: 300
}

var LogAlpha = 0;
var hitboxes = [
    'Generic',
    'Head',
    'Chest',
    'Stomach',
    'Left arm',
    'Right arm',
    'Left leg',
    'Right leg',
    'Body'
];
var logs = [];
function getHitboxName(index) {
    return hitboxes[index] || 'Generic';
}
function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

function getCustomValue(name) {
    var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", name);
    return value;
}

function getColor(name) {
    var value = UI.GetColor("MISC", "JAVASCRIPT", "Script items", name);
    return value;
}

function cursorConstruct(array) {
    if (typeof array !== 'object') {
        return null;
    }
    return {
        x: array[0],
        y: array[1]
    };
}

function onObject(cursor, position, width, heigth) {
    if (!cursor || !position || !width || !heigth) {
        return;
    }
    return cursor.x <= position.x + width && cursor.x >= position.x &&
        cursor.y <= position.y + heigth && cursor.y >= position.y;
}

function render() {

  
    if (UI.IsMenuOpen()) {
        hitui();
    }
    tickcount = Global.Tickcount();
    position.x = getCustomValue('X Position');
    position.y = getCustomValue('Y Position');
    LogAlpha = getCustomValue('Log Alpha');
    TopAlpha = getCustomValue('Top Alpha');
    ListAmount = getCustomValue('Visual Max List Amount');
    DynamicListSize = getCustomValue('Dynamic List Size');

  

    var killcolor = getColor("Lethal Color")
    var pineconebarcolor = getColor("Bar Color")
    var roundcolor = getColor("Round Color")
    var selfcolor = getColor("Self Color")
    var logtextcolor = getColor("Log Text Color")
    var titlecolor = getColor("Title Text Color")

    var me = Entity.GetLocalPlayer();
    LogSize = 0;
    color = HSVtoRGB(tickcount % 350 / 350, 1, 1, 1, 255);
    if (DynamicListSize) {
        LogSize = logs.slice(-ListAmount).length
    } else var LogSize = ListAmount

    var boxdimension = {
        width:  210,
        height: LogSize * 20 + 25
    }

    if (UI.IsMenuOpen()) {
        var cursor = cursorConstruct(Global.GetCursorPosition());
        if (cursor && Global.IsKeyPressed(0x01)) {
            if (onObject(cursor, position, boxdimension.width, boxdimension.height)) {
                UI.SetValue('Script Items', 'X Position', cursor.x - boxdimension.width / 2);
                UI.SetValue('Script Items', 'Y Position', cursor.y - 21);
            }
        }
    }

    var font = getCustomValue('Font');
    Render.FilledRect(position.x, position.y + 20, boxdimension.width, LogSize * 20, [0, 0, 0, LogAlpha]);
    Render.FilledRect(position.x, position.y, boxdimension.width, 20, [0, 0, 0, TopAlpha]);
    if (getCustomValue('Display Victim')){
      var TopPlayer = "Victim";
    } else var TopPlayer = "Attacker";
    if (!getCustomValue('Display HP')){
      var TopHP = "DMG";
    } else var TopHP = "HP";
    Render.String(position.x + 5, position.y + 5, 0, TopPlayer, titlecolor, font);
    Render.String(position.x + 110, position.y + 5, 0, TopHP, titlecolor, font);
    Render.String(position.x + 150, position.y + 5, 0, "Hitbox", titlecolor, font);

    if (getCustomValue('Rainbow Bar')) {
        pineconebarcolor = [color.r, color.g, color.b, 255];
    }
    Render.Line(position.x, position.y + 20, position.x + boxdimension.width - 1, position.y + 20, pineconebarcolor);

    if (ListAmount != 0) {
        for (var i = logs.slice(-ListAmount).length, j = 0; i > 0; i--, j++) {
            if (j > ListAmount - 1) {
                j = 0;
            }
            var log = logs.slice(-ListAmount)[i - 1];
            color = logtextcolor
            if (log.kill == true) {
                color = killcolor;
            }
            if (log.name == 'Round Ended') {
                color = roundcolor;
            }
            var namecolor = color
            if (log.name == Entity.GetName(me) && getCustomValue('Display Victim')) {
                namecolor = selfcolor
            } else {
                if (log.attacker == Entity.GetName(me) && !getCustomValue('Display Victim')) {
                  namecolor = selfcolor
                }
            }
            if (!getCustomValue('Display Victim')) {
                var loggedname =    log.attacker.slice(0, 15);
            } else var loggedname = log.name.slice(0, 15);

            if (!getCustomValue('Display HP')) {
                var loggeddmg =    String(log.damage);
            } else var loggeddmg = String(log.health);

            Render.String(position.x + 5,   position.y + 20 * (j + 1.25), 0, loggedname, namecolor, font);
            Render.String(position.x + 110, position.y + 20 * (j + 1.25), 0, loggeddmg,  color,     font);
            Render.String(position.x + 150, position.y + 20 * (j + 1.25), 0, log.hitbox, color,     font);
        }
    }
    if (logs.length >= (getCustomValue('Max List Amount')+1)) {
        logs.shift();
    }
}

function hitloger() {
    var me = Entity.GetLocalPlayer();
    var victim = Event.GetInt('userid');
    var victimIndex = Entity.GetEntityFromUserID(victim);
    var attacker = Event.GetInt('attacker');
    var attackerIndex = Entity.GetEntityFromUserID(attacker);
    var damage = Event.GetInt('dmg_health');
    var health = Event.GetInt('health');
    var hitbox = Event.GetInt('hitgroup');
    var name = Entity.GetName(victimIndex);
    var attackerName = Entity.GetName(attackerIndex);
    if (health <= 0) {
        var killed = true;
    } else var killed = false;
    if (me == victimIndex && getCustomValue('Record Dmg to Self') == true) {
        push(name, getHitboxName(hitbox), damage, killed, attackerName, health);
    } else {
        if (me !== victimIndex && me == attackerIndex) {
            push(name, getHitboxName(hitbox), damage, killed, attackerName, health);
        } else {
            return;
        }
    }



    while (logs.length >= (getCustomValue('Max List Amount')+1)) {
        logs.shift();
    }
}



function hitui() {
    var enabled = true
    if (!getCustomValue('Show Hit List Settings')) {
        var enabled = false;
        var disabled = true;
    }



    if (getCustomValue('Set Hit List Defaults')){
        UI.SetValue("Script Items", "Set Hit List Defaults", false);
        UI.SetValue("Script Items", "X Position", 18);
        UI.SetValue("Script Items", "Y Position", 346);
        UI.SetValue("Script Items", "Show Hit List Settings", true);
        UI.SetValue("Script Items", "Font",                   8);
        UI.SetValue("Script Items", "Visual Max List Amount", 22);
        UI.SetValue("Script Items", "Max List Amount",        50);
        UI.SetValue("Script Items", "End of Round Message", true);
        UI.SetValue("Script Items", "Dynamic List Size",    true);
        UI.SetValue("Script Items", "Record Dmg to Self",   true);
        UI.SetValue("Script Items", "Colors",               true);
        UI.SetColor("Script Items", "Bar Color",        [33, 249, 212, 254]);
        UI.SetColor("Script Items", "Title Text Color", [115, 255, 219, 245]);
        UI.SetColor("Script Items", "Log Text Color",   [122, 251, 218, 242]);
        UI.SetColor("Script Items", "Lethal Color",     [255, 105, 220, 242]);
        UI.SetColor("Script Items", "Self Color",       [255, 49, 49, 220]);
        UI.SetColor("Script Items", "Round Color",      [255, 167, 58, 216]);
    }
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Colors",                 enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Reset Every Round",      enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Display Victim",         enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Set Hit List Defaults",  enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Record Dmg to Self",     enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Dynamic List Size",      enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Display HP",             enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "X Position",             enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Y Position",             enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Font",                   enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Log Alpha",              enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Top Alpha",              enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Visual Max List Amount", enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Max List Amount",        enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Lethal Color",           disabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "End of Round Message",   disabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Bar Color",              enabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Rainbow Bar",            disabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Round Color",            disabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Self Color",             disabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Log Text Color",         disabled);
    UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Title Text Color",       disabled);

    if (!getCustomValue('Reset Every Round')) {
        UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "End of Round Message", enabled);
    }
    if (getCustomValue('Colors')) {
        UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Lethal Color",  enabled);
        if ((getCustomValue('Rainbow Bar')) && (getCustomValue('Show Hit List Settings'))) {
            UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Bar Color", disabled);
        }
        UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Round Color",      enabled);
        UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Self Color",       enabled);
        UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Log Text Color",   enabled);
        UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Title Text Color", enabled);
        UI.SetEnabled("MISC", "JAVASCRIPT", "Script items", "Rainbow Bar",      enabled);
    }
}

function push(name, hitbox, damage, killed, attacker, health) {
    logs.push({
        name: name,
        hitbox: hitbox,
        damage: damage,
        kill: killed,
        attacker: attacker,
        health: health
    });
}

function roundEndListener() {
    if (!getCustomValue('Reset Every Round')) {
        if (getCustomValue('End of Round Message')) {
            push('Round Ended', '', '', true, 'Round Ended', '');
            return;
        }
        return;
    }
    logs = [];
}
function disconnectListener () {
    logs = [];
}
function main() {
    UI.AddSliderInt("                     Hitlist", 0, 0);
    var sizes = Global.GetScreenSize();
    UI.AddCheckbox('Show Hit List Settings');
    UI.AddCheckbox('Set Hit List Defaults');
    UI.AddCheckbox('Record Dmg to Self');
    UI.AddCheckbox('Reset Every Round');
    UI.AddCheckbox('End of Round Message');
    //UI.AddCheckbox('');
    UI.AddCheckbox('Display Victim');
    UI.AddCheckbox('Display HP');
    UI.AddCheckbox('Dynamic List Size');
    UI.AddSliderInt('X Position', 0, (sizes[0] - 210)); // screen width - box width so box cannot go halfway off screen
    UI.AddSliderInt('Y Position', 0, (sizes[1] - 21));
    UI.AddSliderInt('Font', 0, 48);
    UI.AddSliderInt('Top Alpha', 0, 255);
    UI.AddSliderInt('Log Alpha', 0, 255);
    UI.AddSliderInt('Visual Max List Amount', 1, 50);
    UI.AddSliderInt('Max List Amount', 1, 50);
    UI.AddCheckbox('Colors');
    UI.AddCheckbox('Rainbow Bar');
    UI.AddColorPicker("Lethal Color");
    UI.AddColorPicker("Bar Color");
    UI.AddColorPicker("Round Color");
    UI.AddColorPicker("Self Color");
    UI.AddColorPicker("Log Text Color");
    UI.AddColorPicker("Title Text Color");
    Global.RegisterCallback('Draw', 'render');
    Global.RegisterCallback('player_hurt', 'hitloger');
    Global.RegisterCallback('round_end', 'roundEndListener');
    Global.RegisterCallback('cs_game_disconnected', 'disconnectListener');
}
main();