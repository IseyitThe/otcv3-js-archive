//Keybinds/speclist

function in_bounds(vec, x, y, x2, y2)
{
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}
function main()
{
    if(!World.GetServerString()) return;
    const x = 0
            y = 615
    color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Hotkeys");
    var font = Render.AddFont( "MuseoSansCyrl-500", 10, 100);
    const icon = Render.AddFont("untitled-font-1", 14, 10);
    Render.GradientRect(x, y - 58, 200, 17, 500, [ 0, 0, 0, 160 ], [ 0, 0, 0, 0 ]);
    var h = [];

                        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
                            h.push("Slowwalk")
                        }
                        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
                            h.push("Fake Duck")
                        }
                        if (UI.IsHotkeyActive("Misc", "General", "Movement", "Auto peek")) {
                            h.push("Auto peek")
                        }
                        if (UI.IsHotkeyActive("Anti-Aim", "Legit Anti-Aim", "Direction key")) {
                            h.push("Anti-Aim invert")
                        }
                        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
                            h.push("Anti-Aim invert")
                        }
                        if (UI.IsHotkeyActive("Rage", "General", "General", "Force safe point")) {
                            h.push("Safe point")
                        }
                        if (UI.IsHotkeyActive("Rage", "General", "General", "Resolver override")) {
                            h.push("Resolver override")
                        }
                        if (UI.IsHotkeyActive("Rage", "General", "General", "Force body aim")) {
                            h.push("Body aim")
                        }
                        if (UI.IsHotkeyActive("Rage", "Exploits", "Double tap")) {
                            h.push("Double tap")
                        }
                        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Desync on shot")) {
                            h.push("On shot anti-aim")
                        }
                        if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
                            h.push("Hide shots")
                        }
                        if (UI.IsHotkeyActive("Visual", "World", "View", "Zoom")) {
                            h.push("Zoom")
                        }
                        if (UI.IsHotkeyActive("Visual", "Self", "Freecam", "Enable")) {
                            h.push("Freecam")
                        }
                        if (UI.IsHotkeyActive("Misc", "Movement", "Edge jump")) {
                            h.push("Jump at edge")
                        }
                        if (UI.IsHotkeyActive("Legit", "GENERAL", "Triggerbot", "Enabled")) {
                            h.push("Triggerbot")
                        }
                        if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Minimum Damage Override")) {
                            h.push("Minimum damage")                                                    
                        }
                        if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Wait for on shot key")) {
                            h.push("Force backshot")                                                    
                        }
    if (h.length > 0) {
        for (i = 0; i < h.length; i++)
        {
            Render.StringCustom(x + 29, y - 35 + 17 * i, 0, h[i], [0, 0, 0, 180], font);
            Render.StringCustom(x + 5, y - 37 + 17 * i, 0, "a", [245, 245, 245, 255], icon);
            Render.StringCustom(x + 29, y - 35 + 17 * i, 0, h[i], [255, 255, 255, 255], font);
        }
    }
}
Global.RegisterCallback("Draw", "main")
var observators = [];
function getObservators(){
    var ents = Entity.GetPlayers();
    var local = Entity.GetLocalPlayer();
    var localtarget = Entity.GetProp(local,"DT_BasePlayer","m_hObserverTarget");
    if(!local)return;
    observators = [];
    for(i = 0; i < ents.length;i++){
        if(Entity.IsAlive(local)){
            if(!ents[i] || Entity.IsAlive(ents[i]))continue;
            var observer = Entity.GetProp(ents[i],"DT_BasePlayer","m_hObserverTarget");
            if(!observer || observer == "m_hObserverTarget")continue;
            if(observer == local)observators.push(Entity.GetName(ents[i]));
        }
        else{
            if(!ents[i] || Entity.IsAlive(ents[i]))continue;
            var observer = Entity.GetProp(ents[i],"DT_BasePlayer","m_hObserverTarget");
            if(!observer || observer == "m_hObserverTarget")continue;
            if(observer == localtarget)observators.push(Entity.GetName(ents[i]));
        }
    }
}
function drawObservators(){
  const x = 5
    var screen = Render.GetScreenSize();
    var font = Render.AddFont( "MuseoSansCyrl-500", 10, 100);
    var icon = Render.AddFont("untitled-font-1", 14, 10);
    for(i = 0; i < observators.length; i++){
        var name = observators[i];
        Render.StringCustom(x,(i*-20)+532.5,0,"d", [245, 245, 245, 255], icon);
        Render.StringCustom(x+25,(i*-20)+532.5,0,name,[255,255,255,255],font);
    }
 
}
function onRoundStart(){
    observators = [];
}


Global.RegisterCallback("Draw","getObservators");
Global.RegisterCallback("Draw","drawObservators");
Global.RegisterCallback("round_start","onRoundStart");

//Watermark

function draw() {
    if(!World.GetServerString())
        return;

    var ping = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString()

    color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");

    var font = Render.AddFont("MuseoSansCyrl-500", 10, 400);
    server = World.GetServerString();
    var username = "Unnacord";
    var text = "onetap | "+Cheat.GetUsername()+" | " + server + " | ping " + ping + "";
 
    var w = Render.TextSizeCustom(text, font)[0] + 20;
    var x = Global.GetScreenSize()[0];

    x = x - w - 10;

    Render.GradientRect( x, 10, 400, 20, 500, [ 0, 0, 0, 0 ], [ 0, 0, 0, 255 ]);
    Render.StringCustom(x+4, 10 + 3, 0, text, [ 255, 255, 255, 255 ], font);
}

Cheat.RegisterCallback("Draw", "draw");