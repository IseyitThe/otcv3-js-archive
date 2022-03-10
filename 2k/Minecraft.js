var hurt_time = 0;

function string(x, y, text, c, a, cc, s) {
    var font = Render.AddFont("Minecraftia", s ? s : 12, 400)
    var s = Render.TextSizeCustom(text, font)
    if(!a)
    Render.FilledRect(x - 2, y, s[0] + 2, s[1], [255 / 2, 255 / 2, 255 / 2, 255 / 2])
    Render.StringCustom(x, y, c ? 1 : 0, text, cc ? cc : [255, 255, 255, 255], font)
}
var safezonex = 30
var safezoney = 30
function anglevec(a) {
    var sy = Math.sin(a[1])
    var cy = Math.cos(a[1])
    var sp = Math.sin(a[0])
    var cp = Math.cos(a[0])
    return [cp * cy, cp * sy, -sp]
}
function vecmulfl(a, b) {
    return [a[0] * b, a[1] * b, a[2] * b]
}
function vecadd(a, b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
}
UI.AddCheckbox("Performance Graph")
UI.AddHotkey("F3 Menu")
var info = []
var length = 200
function draw() {
    var mute = UI.GetValue("Script items", "Mute weapons")
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Sound", "Weapon volume", mute ? 0 : 100)
    if (!Entity.IsValid(Entity.GetLocalPlayer()) || !UI.IsHotkeyActive("Script items", "F3 Menu"))
        return
    
    var x = safezonex
    var y = safezoney
    var str = function (t) {
        string(x, y, t)
        y += 22
    }
    str("Minecraft 1.15.2 (onetap 1.15.2 edition/vanilla)")
    str(Math.floor(1 / Globals.Frametime()) + " fps T: inf fast-clouds")
    
    info.push(Math.floor(1 / Globals.Frametime()))
    str(World.GetServerString() + " @ " + Globals.TickInterval() * 1000 + " ms ticks")

    str("E: " + Entity.GetEntities().length + " B: 0")
    y += 22
    var origin = Entity.GetRenderOrigin(Entity.GetLocalPlayer())
    str("XYZ: " + origin[0].toFixed(5) + " / " + origin[1].toFixed(5) + " / " + origin[2].toFixed(5))
    str("Block: " + Math.floor(origin[0]) + " " + Math.floor(origin[1]) + " " + Math.floor(origin[2]))
    str("Chunk: " + Math.floor(origin[0] / 16) + " " + Math.floor(origin[1] / 16) + " " + Math.floor(origin[2] / 16))
    var ang = Local.GetViewAngles()
    var dir = ""
    var between = function (val, min, max) {
        if (val > min && val < max)
            return true
        return false
    }
    if (between(ang[1], -30, 30))
        dir = "north"
    else if (between(ang[1], 30, 60))
        dir = "north-east"
    else if (between(ang[1], 60, 120))
        dir = "east"
    else if (between(ang[1], 120, 150))
        dir = "south-east"
    else if (ang[1] > 150 || ang[1] < -150)
        dir = "south"
    else if (between(ang[1], -150, -120))
        dir = "south-west"
    else if (between(ang[1], -120, -60))
        dir = "west"
    else if (between(ang[1], -60, -30))
        dir = "north-west"
    str("Facing: " + dir)
    var deaths = Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iDeaths") == 0 ? 1 : Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iDeaths")
    var kills = Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iKills") == 0 ? 1 : Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iKills")
    var kd = kills / deaths
    var difficulty = ["Unknown", -1]
    if (kd < 1)
        difficulty = ["Hard", 3]
    else if (kd >= 1 && kd < 3)
        difficulty = ["Normal", 2]
    else if (kd >= 3 && kd < 10)
        difficulty = ["Easy", 1]
    else if (kd >= 10)
        difficulty = ["Peaceful", 0]
    str("Local Difficulty: " + difficulty[1] + " // " + difficulty[0])

    {
        if(!UI.GetValue("Script items", "Performance Graph"))
            return
        // performance graph
        var highest = 0
        var lowest = 0
        if (info.length > length)
            info.shift()
        for (i in info) {
            if (highest < info[i])
                highest = info[i]
            if (lowest > info[i])
                lowest = info[i]
        }
        var yy = Render.GetScreenSize()
        for (i in info) {
            var height = highest / (info[i] - lowest) * 100
            var x = i
            var y = yy[1]
            var x2 = i
            var y2 = yy[1] - height
            Render.Line(parseInt(x) + safezonex, y - safezoney, parseInt(x2) + safezonex, y2 - safezoney, [(i / length) * 255, (i / length) * 255, 0, 255])

        }
    }
}
var wait_until_alive = false
var test = false
function death()
{
    if(Entity.IsAlive(Entity.GetLocalPlayer()) || wait_until_alive || !Entity.IsValid(Entity.GetLocalPlayer()))
    {
        if(Entity.IsAlive(Entity.GetLocalPlayer()))
        {
            wait_until_alive = false
        }
        return
    }

    var team = Entity.GetProp(Entity.GetLocalPlayer(), "CBaseEntity", "m_iTeamNum")
    if(team != 2 && team != 3)
        return
    var texture = Render.AddTexture("ot/scripts/mc/button.png")
    var t2 = Render.AddTexture("ot/scripts/mc/button2.png")
    var width = 500
    var height = 50
    Render.FilledRect(0,0,Render.GetScreenSize()[0],Render.GetScreenSize()[1],[255,0,0,255/3])
    var x = Render.GetScreenSize()[0]/2 - (width/2)
    var y = Render.GetScreenSize()[1] / 2 + 40
    var between = function (val, min, max) {
        if (val > min && val < max)
            return true
        return false
    }
    var m = Input.GetCursorPosition()
    if(between(m[0],x,width+x) && between(m[1],y,height+y))
    Render.TexturedRect(x,y,width,height, t2)
    else
    Render.TexturedRect(x,y,width,height, texture)
    var clicking = false
    if(!Input.IsKeyPressed(1))
        test = true
    if(test && Input.IsKeyPressed(1))
    {
        test = false
        clicking = true
    }

    if(between(m[0],x,width+x) && between(m[1],y,height+y) && clicking){
        wait_until_alive = true
        return
    }

    x += width/2
    y += 15
    string(x,y,"Spectate world",1,true, [0,0,0,255])
    string(x-2,y-2,"Spectate world",1,true)
    x = Render.GetScreenSize()[0]/2 - (width/2)
    y = Render.GetScreenSize()[1] / 2 + 100
    if(between(m[0],x,width+x) && between(m[1],y,height+y))
    Render.TexturedRect(x,y,width,height, t2)
    else
    Render.TexturedRect(x,y,width,height, texture)
    if(between(m[0],x,width+x) && between(m[1],y,height+y) && clicking){
        Cheat.ExecuteCommand("disconnect")
        return
    }
    x += width/2
    y += 15
    string(x,y,"Title screen",1,true, [0,0,0,255])
    string(x-2,y-2,"Title screen",1,true)
    
    y += 100
    string(x+5,y - 395, "You died!", 1, true, [0,0,0,255/2], 30)
    string(x,y - 400, "You died!", 1, true, [255,255,255,255], 30)
    y -= 50
    var deaths = Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iDeaths") == 0 ? 1 : Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iDeaths")
    var kills = Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iKills") == 0 ? 1 : Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iKills")
    var kd = kills / deaths
    var font = Render.AddFont("Minecraftia", 12, 400)
    var width = [
        Render.TextSizeCustom("Score: ", font)[0],
        Render.TextSizeCustom("Score: " + kd, font)[0],
        Render.TextSizeCustom("" + kd, font)[0]
    ]
    x -= width[2] / 2
    
    string(x+2,y - 248, "Score: ", 1, true, [0,0,0,255/2])
    string(x,y - 250, "Score: ", 1, true, [255,255,255,255])
    x += width[1] / 2
    string(x+2,y - 248, kd + "", 1, true, [0,0,0,255/2])
    string(x,y - 250, kd + "", 1, true, [0,255,0,255])
}
Cheat.RegisterCallback("Draw", "death")
Cheat.RegisterCallback("Draw", "draw")

const BOX_WIDTH = 72.222;
const BOX_HEIGHT = 64;
const SCREEN_WIDTH = Render.GetScreenSize()[0];
const SCREEN_HEIGHT = Render.GetScreenSize()[1];
const MISC_TYPES = ["high explosive grenade", "smoke grenade", "molotov", "decoy grenade", "incendiary grenade", "flashbang", "c4 explosive", "zeus x27"];
var highest_ammo = []
function render_hud() {
    
    var local = Entity.GetLocalPlayer();
    var font = Render.AddFont("Minecraftia", 12, 400);

    // handle death screen and stuff lol

    if(!Entity.IsAlive(local)) return;

    var weapons = [];
    var weapon_ids = Entity.GetWeapons(local);
    var health = Entity.GetProp(local, "CBasePlayer", "m_iHealth");
    if(health > 100)
        health = 100
    var armor = Entity.GetProp(local, "CCSPlayerResource", "m_iArmor");
    if(armor > 100)
        armor = 100
    var wep = Entity.GetWeapon(local)
    var ammo = Entity.GetProp(wep, "CBaseCombatWeapon", "m_iClip1")
    if(!highest_ammo[wep] || ammo > highest_ammo[wep])
        highest_ammo[wep] = ammo
    for(var w in weapon_ids) {
        weapons.push(Entity.GetName(weapon_ids[w]));
    }

    render_hotbar(weapons);
    render_hp(health);
    render_armor(armor);
    render_hunger(ammo / highest_ammo[wep] * 100)
}
function lerp(start,end,time)
{
    return ((end - start) * time) + start
}
var last_hp = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_iHealth") ? Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_iHealth") : 100;
var hhealth = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_iHealth") ? Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_iHealth") : 100;
UI.AddCheckbox("Cam Tilt on Hurt")
function cam_tilt()
{
    if(!UI.GetValue("Script items", "Cam Tilt on Hurt"))
        return
    var hhealth = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_iHealth")
    {
        var ang = Local.GetViewAngles()
        ang[2] = lerp(ang[2],0,Globals.Frametime() * 5)

        Local.SetViewAngles(ang)
    }
    if(hhealth < last_hp)
    {
        var ang = Local.GetViewAngles()
        ang[2] = 4
        Local.SetViewAngles(ang)
    }
    last_hp = hhealth
}
Cheat.RegisterCallback("Draw", "cam_tilt")
function render_hotbar(weapons) {

    var local = Entity.GetLocalPlayer();
    var hotbar = Render.AddTexture("ot/scripts/mc/hotbar.png");
    var selected = Render.AddTexture("ot/scripts/mc/selected.png");
    Render.TexturedRect(SCREEN_WIDTH/2 - 650/2, SCREEN_HEIGHT - BOX_HEIGHT - 16, 650, BOX_HEIGHT+12, hotbar);

    reversed_weapons = weapons.filter(function(e) {
        return !~MISC_TYPES.indexOf(e);
    }).reverse();

    var extra = weapons.filter(function(e) {
        return ~MISC_TYPES.indexOf(e);
    }).reverse();
    
    for(var i in reversed_weapons) {
        if(!reversed_weapons[i]) continue;

        if(reversed_weapons[i] == Entity.GetName(Entity.GetWeapon(local)))
            Render.TexturedRect(SCREEN_WIDTH/2 - 650/2 + (BOX_WIDTH*i), SCREEN_HEIGHT - BOX_HEIGHT - 12, BOX_WIDTH+8, BOX_HEIGHT+6, selected);

        Render.String(SCREEN_WIDTH/2 - 650/2 + 39 + (BOX_WIDTH * i), SCREEN_HEIGHT - BOX_HEIGHT/2 - 17, 1, weapon_to_icon(reversed_weapons[i]), [255,255,255,255], 5);
    }

    for(var i in extra) {
        if(extra[i] == undefined) {
            extra.splice(i, 1);
            continue;
        }
        if(extra[i] == Entity.GetName(Entity.GetWeapon(local)))
            Render.TexturedRect(SCREEN_WIDTH/2 - 650/2 + (BOX_WIDTH * i) + (BOX_WIDTH * 3), SCREEN_HEIGHT - BOX_HEIGHT - 12, BOX_WIDTH+8, BOX_HEIGHT+6, selected);

        Render.String(SCREEN_WIDTH/2 - 650/2 + 39 + (BOX_WIDTH * i) + (BOX_WIDTH * 3), SCREEN_HEIGHT - BOX_HEIGHT/2 - 17, 1, weapon_to_icon(extra[i]), [255,255,255,255], 5);
    }   
}
var random_anim_index = -1;
var anim_time = 0;

function render_hp(hp) {
    var hearts = Math.round(hp / 5);
    var empty = Render.AddTexture("ot/scripts/mc/empty_heart.png");
    var hurt = Render.AddTexture("ot/scripts/mc/hurt_heart.png");
    var half = Render.AddTexture("ot/scripts/mc/half_heart.png");
    var full = Render.AddTexture("ot/scripts/mc/heart.png");

    if(Math.floor(hearts/2) <= 2 && Globals.Curtime() - anim_time > .05) {
        random_anim_index = Math.round(Math.random() * 9);
        anim_time = Globals.Curtime();
    } else if(Math.floor(hearts/2) > 2) {
        random_anim_index = -1;
        anim_time = 0;
    }

    for(var i = 0; i < 10; i++) {
        if(Globals.Curtime() - hurt_time < .5) {
            Render.TexturedRect(SCREEN_WIDTH/2 - 650/2 + (30*i), SCREEN_HEIGHT - BOX_HEIGHT - 66, 24, 24, hurt);
        } else {
            hurt_time = 0;
            if(random_anim_index == i) {
                Render.TexturedRect(SCREEN_WIDTH/2 - 650/2 + (30*i), SCREEN_HEIGHT - BOX_HEIGHT - 70, 24, 24, empty);
            }
            else
                Render.TexturedRect(SCREEN_WIDTH/2 - 650/2 + (30*i), SCREEN_HEIGHT - BOX_HEIGHT - 64, 24, 24, empty);
        }
    }

    for(var i = 0; i < Math.floor(hearts/2); i++) {
        if(Math.floor(hearts/2) == 0)
            break;

        if(random_anim_index == i) {
            Render.TexturedRect(SCREEN_WIDTH/2 - 650/2 + (30*i), SCREEN_HEIGHT - BOX_HEIGHT - 72, 24, 24, full);
        }
        else
            Render.TexturedRect(SCREEN_WIDTH/2 - 650/2 + (30*i), SCREEN_HEIGHT - BOX_HEIGHT - 66, 24, 24, full);
    }

    if(hearts/2 % 1 > 0 || Math.floor(hearts/2) == 0) {
        if(random_anim_index == Math.floor(hearts/2)) {
            Render.TexturedRect(SCREEN_WIDTH/2 - 650/2 + (30*(Math.floor(hearts/2))), SCREEN_HEIGHT - BOX_HEIGHT - 72, 24, 24, half);
        }
        else
            Render.TexturedRect(SCREEN_WIDTH/2 - 650/2 + (30*(Math.floor(hearts/2))), SCREEN_HEIGHT - BOX_HEIGHT - 66, 24, 24, half);
    }

}
function render_hunger(hungerr)
{
    var hunger = Math.round(hungerr / 5);
    var empty = Render.AddTexture("ot/scripts/mc/empty_hunger.png");
    var half = Render.AddTexture("ot/scripts/mc/half_hunger.png");
    var full = Render.AddTexture("ot/scripts/mc/hunger.png");
    var x = SCREEN_WIDTH/2 + 50/2
    var y = SCREEN_HEIGHT - BOX_HEIGHT - 64
    for(var i = 0; i < 10; i++) {
        Render.TexturedRect(x + (30*i), y, 24, 24, empty);
    }

    for(var i = 0; i < Math.floor(hunger/2); i++) {
        if(Math.floor(hunger/2) == 0)
            break;
        Render.TexturedRect((x+270) - (30*i), y, 24, 24, full);
    }

    if(hunger/2 % 1 > 0) {
        Render.TexturedRect((x+270) - (30*(Math.floor(hunger/2))), y, 24, 24, half);
    }
}
function render_armor(armor) {
    var armor = Math.round(armor / 5);
    var empty = Render.AddTexture("ot/scripts/mc/empty_armor.png");
    var half = Render.AddTexture("ot/scripts/mc/half_armor.png");
    var full = Render.AddTexture("ot/scripts/mc/armor.png");

    for(var i = 0; i < 10; i++) {
        Render.TexturedRect(SCREEN_WIDTH/2 - 650/2 + (30*i), SCREEN_HEIGHT - BOX_HEIGHT - 96, 24, 24, empty);
    }

    for(var i = 0; i < Math.floor(armor/2); i++) {
        if(Math.floor(armor/2) == 0)
            break;
        Render.TexturedRect(SCREEN_WIDTH/2 - 650/2 + (30*i), SCREEN_HEIGHT - BOX_HEIGHT - 96, 24, 24, full);
    }

    if(armor/2 % 1 > 0) {
        Render.TexturedRect(SCREEN_WIDTH/2 - 650/2 + (30*(Math.floor(armor/2))), SCREEN_HEIGHT - BOX_HEIGHT - 96, 24, 24, half);
    }
}
function on_hurt() {
    if(Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("userid"))))
    {
        var path = "C:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/scripts/mc/"
        hurt_time = Globals.Curtime();
        var sounds = ["hurt_sound1.wav", "hurt_sound2.wav", "hurt_sound3.wav"]
        path += sounds[Math.floor(Math.random() * sounds.length)]
        Sound.Play(path)
    } else if(Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("attacker")))) {
        var path = "C:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/scripts/mc/"
        Sound.Play(path + "hurt_other.wav");
    }
    
}

function player_footstep() {
    var path = "C:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/scripts/mc/"
    if(Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("userid")))) {
        Sound.Play(path + "grass.wav");
    }
}
var lava_start = 0;
function molotov_to_lava() {
    var path = "C:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/scripts/mc/"
    var molotovs = Entity.GetEntitiesByClassID(100);

    if(Globals.Curtime() - lava_start >= 7.5 && lava_start != 0)
        lava_start = 0;

    for(var m in molotovs) {
        if(!Entity.IsValid(molotovs[m]))
            continue;

            if(calcDist(Entity.GetRenderOrigin(Entity.GetLocalPlayer()), Entity.GetRenderOrigin(molotovs[m])) < 250 && lava_start == 0) {
                Sound.Play(path + "lava.wav");
                lava_start = Globals.Curtime();
            }
    }
}
UI.AddCheckbox("Bow Fire")
UI.AddCheckbox("Mute weapons")
var tp = UI.AddCheckbox("Texture Pack")
function weapon_fire(){
    if(!UI.GetValue("Script items", "Bow Fire"))
        return
    var ent = Entity.GetEntityFromUserID(Event.GetInt("userid"))
    var local = Entity.GetLocalPlayer()
    var weapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
    var dist = calcDist(Entity.GetRenderOrigin(Entity.GetLocalPlayer()), [Event.GetFloat("x"),Event.GetFloat("y"),Event.GetFloat("z")])
    if(ent == local && !(weapon.includes("knife") || weapon.includes("bayonet") || weapon.includes("grenade")))
    {
        Sound.Play("ot/scripts/mc/bow.wav")
    }
}
function he_grenade()
{
    var dist = calcDist(Entity.GetRenderOrigin(Entity.GetLocalPlayer()), [Event.GetFloat("x"),Event.GetFloat("y"),Event.GetFloat("z")])
    if(dist < 1000)
    Sound.Play("ot/scripts/mc/tnt.wav")
}
var last = false
var stage = 2
var updatee = 0
function update()
{
    UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Force sv_cheats", true)
    UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Hidden cvars", true)
    var val = UI.GetValue("Visual", "WORLD", "Removals")
    UI.SetValue("Visual", "WORLD", "Removals", val | (1 << 2))
    var tp_ = UI.GetValue.apply(null,tp)
    if(tp_ != last && tp_)
    {
        Cheat.ExecuteCommand("mat_showlowresimage 1")
        stage = 0
        updatee = Globals.Realtime()
        last = tp_
    }
    if(tp_ != last && !tp_)
    {
        Cheat.ExecuteCommand("mat_showlowresimage 0")
        stage = 0
        updatee = Globals.Realtime()
        last = tp_
    }
    switch(stage)
    {
        case 0:
            Cheat.ExecuteCommand("cl_drawhud 0")
            if(Globals.Realtime() - updatee > 3)
            {
                stage++
            }
            break
        case 1:
            Cheat.ExecuteCommand("cl_drawhud 1")
            stage++
            break
    }
}
Cheat.RegisterCallback("Draw", "update")
Cheat.RegisterCallback("hegrenade_detonate", "he_grenade")
Cheat.RegisterCallback("weapon_fire", "weapon_fire")
Cheat.RegisterCallback("CreateMove", "molotov_to_lava");
Cheat.RegisterCallback("player_footstep", "player_footstep");
Cheat.RegisterCallback("player_hurt", "on_hurt");
Cheat.RegisterCallback("Draw", "render_hud");

// clean dist func, thanks rzr
function calcDist(a, b)
{
    x = a[0] - b[0];
    y = a[1] - b[1];
    z = a[2] - b[2];
    return Math.sqrt( x * x + y * y + z * z );
}


function round(val)
{
    var base = Math.floor(val)
    if(val > base && val < base + 0.25)
        return base
    else if(val >= base + 0.25 && val < base + 0.5)
        return base + 0.5
    else if(val >= base + 0.5 && val < 0.75)
        return base + 0.5
    else if(val >= base + 0.75 && val < base + 1)
        return base + 1
    return val
}

function weapon_to_icon(a) {
    var letter = ""
    switch (a) {
        case "desert eagle":
            letter = "a"
            break
        case "dual berettas":
            letter = "b"
            break
        case "five seven":
            letter = "c"
            break
        case "glock 18":
            letter = "d"
            break
        case "ak 47":
            letter = "e"
            break
        case "aug":
            letter = "f"
            break
        case "awp":
            letter = "g"
            break
        case "famas":
            letter = "h"
            break
        case "m249":
            letter = "i"
            break
        case "g3sg1":
            letter = "j"
            break
        case "galil ar":
            letter = "k"
            break
        case "m4a4":
            letter = "l"
            break
        case "m4a1 s":
            letter = "m"
            break
        case "mac 10":
            letter = "n"
            break
        case "p2000":
            letter = "o"
            break
        case "mp5 sd":
            letter = "p"
            break
        case "ump 45":
            letter = "q"
            break
        case "xm1014":
            letter = "r"
            break
        case "pp bizon":
            letter = "s"
            break
        case "mag 7":
            letter = "t"
            break
        case "negev":
            letter = "u"
            break
        case "sawed off":
            letter = "v"
            break
        case "tec 9":
            letter = "w"
            break
        case "zeus x27":
            letter = "x"
            break
        case "p250":
            letter = "y"
            break
        case "mp7":
            letter = "z"
            break
        case "mp9":
            letter = "A"
            break
        case "nova":
            letter = "B"
            break
        case "p90":
            letter = "C"
            break
        case "scar 20":
            letter = "D"
            break
        case "sg 553":
            letter = "E"
            break
        case "ssg 08":
            letter = "F"
            break
        case "knife":
            letter = "G"
            break
        case "flashbang":
            letter = "H"
            break
        case "high explosive grenade":
            letter = "I"
            break
        case "smoke grenade":
            letter = "J"
            break
        case "molotov":
            letter = "K"
            break
        case "decoy grenade":
            letter = "L"
            break
        case "incendiary grenade":
            letter = "M"
            break
        case "c4 explosive":
            letter = "N"
            break
        case "usp s":
            letter = "P"
            break
        case "cz75 auto":
            letter = "Q"
            break
        case "r8 revolver":
            letter = "R"
            break
        case "bayonet":
            letter = "V"
            break
        case "flip knife":
            letter = "W"
            break
        case "gut knife":
            letter = "X"
            break
        case "karambit":
            letter = "Y"
            break
        case "m9 bayonet":
            letter = "Z"
            break
        case "falchion knife":
            letter = "1"
            break
        case "bowie knife":
            letter = "2"
            break
        case "butterfly knife":
            letter = "3"
            break
        case "shadow daggers":
            letter = "4"
            break
        case "ursus knife":
            letter = "5"
            break
        case "navaja knife":
            letter = "6"
            break
        case "stiletto knife":
            letter = "7"
            break
        case "karambit":
            letter = "8"
            break
        case "huntsman knife":
            letter = "0"
            break
        default:
            letter = ""
            break
    }
    return letter
}