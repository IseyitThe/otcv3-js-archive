

UI.AddMultiDropdown("Flags", ["Choke", "Desync", "Height", "Extend"])
var values = []
function addFlag(val, text){
    values.push([val, text])
}
function finishRender(){
    var scr = Render.GetScreenSize()
    var render_with_offset = function(offset){
        Render.FilledRect(20,scr[1]/2+offset, 100, 18, [50,50,50,100])
        var width = val * 96
        Render.FilledRect(22,scr[1]/2+offset+2, width, 14, [176, 204, 46,255])
        var font = Render.AddFont("Verdana", 8, 400)
        Render.StringCustom(71,scr[1]/2-14+offset,1,text,[0,0,0,255], font)
        Render.StringCustom(70,scr[1]/2-15+offset,1,text,[255,255,255,255], font)
    }
    for(i in values){
        var text = values[i][1]
        var val = values[i][0]
        render_with_offset(i*40)
    }
 
}
function clamp(val,min,max){
    if(val > max)
        return max
    if(val < min)
        return min
    return val
}
var fl_amount = 0
function onDraw(){
    values = []
    var flags = UI.GetValue("Script Items", "Flags")
    var local = Entity.GetLocalPlayer()
    if(!local || !Entity.IsAlive(local))
        return
    if(flags & (1 << 0)){
        var simulation_time = Entity.GetProp(local, "DT_BaseEntity", "m_flSimulationTime");
        var simulation_time_delta = Globals.Curtime() - simulation_time;
        fl_amount = (simulation_time_delta / Globals.TickInterval());
        addFlag(clamp(Math.floor(fl_amount) / 16, 0, 1),"choke")
    }
     
    if(flags & (1 << 1)){
        var real = Local.GetRealYaw()
        var fake = Local.GetFakeYaw()
 
        var desync = real - fake
        if(desync > 180) desync -= 360
        if(desync < -180) desync += 360
        desync = Math.abs(desync) / 120
        addFlag(desync,"desync")
    }
    if(flags & (1 << 2)){
        var height = 1-Entity.GetProp(local, "DT_CSPlayer", "m_flDuckAmount")
        addFlag(height, "height")
    }
    if(flags & (1 << 3)){
        var extend = UI.GetValue("Misc", "GENERAL", "Miscellaneous", "Extended backtracking")
        addFlag(extend ? 1 : 0, "extend")
    }
    finishRender()
}
Cheat.RegisterCallback("Draw", "onDraw")

