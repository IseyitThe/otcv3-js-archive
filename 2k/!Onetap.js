  UI.AddLabel("                   Onetap            ");
function draw() {
    if(!World.GetServerString())
        return;

    var ping = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString()

    color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark");

    var font = Render.AddFont("Verdana", 8, 400);
    server = World.GetServerString();
    var username = "fichuhvh";
    var text = "onetap | " + username + " | " + server + " | ping " + ping + "";
    
    var w = Render.TextSizeCustom(text, font)[0] + 20;
    var x = Global.GetScreenSize()[0];

    x = x - w - 10;

    Render.GradientRect( x, 10, 400, 20, 500, [ 0, 0, 0, 0 ], [ 0, 0, 0, 255 ]);
    Render.StringCustom(x+4, 10 + 3, 0, text, [ 255, 255, 255, 255 ], font);
}

Cheat.RegisterCallback("Draw", "draw");

const x1 = UI.AddSliderInt("Onetap", 0, 0);
const y1 = UI.AddSliderInt("onetap", 556, 556);
function in_bounds(vec, x, y, x2, y2)
{
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}
function main()
{
    if(!World.GetServerString()) return;
    const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Onetap"),
            y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "onetap");
    color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Hotkeys");
    var font = Render.AddFont( "Verdana", 7, 100);
    Render.GradientRect(x, y, 200, 20, 500, [ 0, 0, 0, 255 ], [ 0, 0, 0, 0 ]);
    var h = [];

     if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
       h.push("Slow walk")
     }
     if (UI.IsHotkeyActive("Anti-Aim", "Rage Anti-Aim", "Jitter offset")) {
       h.push("Jitter offset")
     }
     if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
       h.push("Fake duck")
     }
     if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
       h.push("Auto peek")
     }
     if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
       h.push("Anti-aim inverter")
     }
     if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
       h.push("Safe point override")
     }
     if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
       h.push("Force body aim")
     }
     if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
       h.push("Doubletap")
     }
     if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
       h.push("Hide shots")
     }
     if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Minimum damage override")) {
       h.push("Damage override")
     }
    if (h.length > 0) {
        for (i = 0; i < h.length; i++)
        {
            Render.StringCustom(x + 70 - (Render.TextSizeCustom(h[i], font)[0] / 2), y + 26 + 18 * i, 0, h[i], [0, 0, 0, 180], font);
            Render.StringCustom(x + 70 - (Render.TextSizeCustom(h[i], font)[0] / 2), y + 26 + 18 * i, 0, h[i], [255, 255, 255, 255], font);
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
    var screen = Render.GetScreenSize();
    var type = UI.GetValue("Script Items","type");
    var font = Render.AddFont("Verdana",8,100);
    for(i = 0; i < observators.length; i++){
        var name = observators[i];
        var size = Render.TextSizeCustom(name,font);
        Render.StringCustom(screen[0]-size[0]-1850,(i*-20)+540,0,name,[255,255,255,255],font);
    }
    
}
function onRoundStart(){
    observators = [];
}
Global.RegisterCallback("Draw","getObservators");
Global.RegisterCallback("Draw","drawObservators");
Global.RegisterCallback("round_start","onRoundStart");