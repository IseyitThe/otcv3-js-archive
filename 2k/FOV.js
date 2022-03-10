function rotateAroundPoint(center,point,angle){
    angle = angle / 180 * Math.PI
    var x = Math.cos(angle) * (point[0]-center[0])-Math.sin(angle)*(point[1]-center[1])+center[0]
    var y = Math.sin(angle) * (point[0]-center[0])+Math.cos(angle)*(point[1]-center[1])+center[1]
    return [x,y]
}
UI.AddColorPicker("OOV Color 1")
UI.AddColorPicker("OOV Color 2")
UI.AddSliderFloat("OOV Length", 0, 2)
UI.AddSliderFloat("OOV Radius", 0, 300)
function renderPoint(offset, alpha){
    var points = []
    var radius = UI.GetValue("Script items", "OOV Radius")
    var length = UI.GetValue("Script items", "OOV Length")
    var inc = 0.1
    for(i = -length; i < length + inc; i+=0.1){
        points.push([Math.sin(i), Math.cos(i)])
    }
    var first = true
    var last = []
    var screen = Render.GetScreenSize()
    screen[0]/=2
    screen[1]/=2
    var col = UI.GetColor("Script items", "OOV Color 1")
    var col2 = UI.GetColor("Script items", "OOV Color 2")
    for(i in points){
        var point = rotateAroundPoint([0,0], [points[i][0] * radius, points[i][1] * radius], offset)
        if(!first)
            Render.Line(last[0]+screen[0],last[1]+screen[1],point[0]+screen[0],point[1]+screen[1],[col[0],col[1],col[2],alpha])
        first = false
        last = point
    }
   
    for(offsett = 4; offsett < 6; offsett+=0.5){
        first = true
        last = []
        for(i in points){
            var point = rotateAroundPoint([0,0], [points[i][0] * (radius+offsett), points[i][1] * (radius+offsett)], offset)
            if(!first)
                Render.Line(last[0]+screen[0],last[1]+screen[1],point[0]+screen[0],point[1]+screen[1],[col2[0],col2[1],col2[2],alpha])
            first = false
            last = point
        }
    }
   
}
function clamp(val,min,max){
    if(val > max)
        return max
    if(val < min)
        return min
    return val
}
function RADTODEG(radians){
    return radians * 180 / Math.PI
}
function calcAngle(source,entityPos){
    var delta = []
    delta[0] = source[0] - entityPos[0]
    delta[1] = source[1] - entityPos[1]
    delta[2] = source[2] - entityPos[2]
    var angles = []
    var viewangles = Local.GetViewAngles()
    angles[0] = RADTODEG(Math.atan(delta[2] / Math.hypot(delta[0], delta[1]))) - viewangles[0]
    angles[1] = RADTODEG(Math.atan(delta[1] / delta[0])) - viewangles[1]
    angles[2] = 0
    if(delta[0] >= 0)
        angles[1] += 180
    angles[1] = angles[1] % 360
    return angles
}
UI.AddSliderInt("OOV Fade Speed", 0, 5000)
UI.AddSliderFloat("OOV Max FOV", 0, 45)
function vecSub(a,b){
    return [a[0]-b[0],a[1]-b[1],a[2]-b[2]]
}
function vecLength(a){
    return Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])
}
var fade = []
function onDraw(){
    var local = Entity.GetLocalPlayer()
    if(!local || !Entity.IsAlive(local))
        return
    var enemies = Entity.GetEnemies()
    var localangles = Local.GetViewAngles()
    var screen = Render.GetScreenSize()
    var left = 0 + 500
    var right = screen[0]-500
    var top = 0 + 200
    var bot = screen[1]-200
    screen[0]/=2
    screen[1]/=2
    var speed = Globals.Frametime() * UI.GetValue("Script items", "OOV Fade Speed")
    for(i in enemies){
        if(Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i])){
            var hitbox = Entity.GetHitboxPosition(enemies[i],5)
            var pos = Render.WorldToScreen(hitbox)
            if(pos[0] == screen[0]){
                continue
            }
            var angtoent = calcAngle(Entity.GetEyePosition(local), hitbox)
            var fov = vecLength(angtoent)
           
            var delta = [pos[0]-screen[0],pos[1]-screen[1]]
            var ang = Math.atan2(-delta[0], delta[1]) * 180 / Math.PI

           
            if(fov > UI.GetValue("Script items", "OOV Max FOV") && !Entity.IsDormant(enemies[i])){
               
                if(!fade[enemies[i]])
                    fade[enemies[i]] = 0
                fade[enemies[i]]+=speed
            }
            else if(!Entity.IsDormant(enemies[i])){
                fade[enemies[i]]-=speed
            }
            else if(Entity.IsDormant(enemies[i])){
                fade[enemies[i]] = clamp(fade[enemies[i]]-speed, 100, 255)
            }
            fade[enemies[i]] = clamp(fade[enemies[i]], 0, 255)
            renderPoint(ang % 360, clamp(fade[enemies[i]], 0, 255))
        }
    }
   
}
Cheat.RegisterCallback("Draw", "onDraw")