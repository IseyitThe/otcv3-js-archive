var traceContainer = [];
function tracer(eyepos, hitpos, time,color) {
    this.eyepos = eyepos
    this.position = hitpos
    this.time = time
    this.col = color
    
}
var impact = 0;
function onBulletImpact() {
    
        if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) {
            var x = Event.GetFloat("x")
            var y = Event.GetFloat("y")
            var z = Event.GetFloat("z")

            var pos = [x, y, z - 1]
            var color = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', "Tracer color")
            
            var view = Entity.GetEyePosition(Entity.GetLocalPlayer());
             view = [view[0],view[1],view[2] - 1]
            traceContainer.push(new tracer(view, pos, Globals.Tickcount(),color))
        }
        
    
}
function onDraw() {
    if (!(Entity.IsAlive(Entity.GetLocalPlayer())) ) {
        traceContainer = [];
        return
    }
    if(traceContainer.length < 1)
    return    
    var t = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', "Ticks tracer lasts")
    for (i in traceContainer) {
        //Cheat.Print("lol")
        var ss = Render.GetScreenSize()
        var view2s = Render.WorldToScreen(traceContainer[i].eyepos)
        var pos2s = Render.WorldToScreen(traceContainer[i].position)
        var col = traceContainer[i].col
        
        
        
            /*
            this is what i did to check for w2s throwing garbage invalid numbers 
            not sure why it considers -20k valid but whatever
            all this check does it check if the number given is too far out of the bounds of the screen size to make sense
            the +- 100 is because small overflows are ok and still end up rendering properly you can probably do more/less 
            but i figured that this much looks ok
            */
            
            if ((view2s[0] < -100 || view2s[0] > ss[0] + 100 || pos2s[0] < -100 || pos2s[0] > ss[0] + 100
                || view2s[1] < -100 || view2s[1] > ss[1] + 100 || pos2s[1] < -100 || pos2s[1] > ss[1] + 100) == false) {
                currenteye = Entity.GetEyePosition(Entity.GetLocalPlayer())
                //pasted from google : ) 
                var dx = currenteye[0] - traceContainer[i].eyepos[0];
                var dy = currenteye[1] - traceContainer[i].eyepos[1];
                var dz = currenteye[2] - traceContainer[i].eyepos[2];

                var dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (UI.IsHotkeyActive("Visual", "WORLD", "View", "Thirdperson") == 0 || dist > 0.3) {
                    //Center main line
                    Render.Line(view2s[0], view2s[1], pos2s[0], pos2s[1], col)

                    if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', "Type") == 1) {
                        //+1 on width
                        Render.Line(view2s[0] + 1, view2s[1], pos2s[0] + 1, pos2s[1], col)

                        //+1 on height
                        Render.Line(view2s[0], view2s[1] + 1, pos2s[0], pos2s[1] + 1, col)

                        //-1 on width
                        Render.Line(view2s[0] - 1, view2s[1], pos2s[0] - 1, pos2s[1], col)

                        //-1 on height
                        Render.Line(view2s[0], view2s[1] - 1, pos2s[0], pos2s[1] - 1, col)
                    }
                }
            }
        
            
               
               
        if (traceContainer[i].time + t < Globals.Tickcount()) {
            traceContainer[i].col = [traceContainer[i].col[0],traceContainer[i].col[1],traceContainer[i].col[2],clamp(traceContainer[i].col[3] - 2.5,0,255)]
        }
        
        if(traceContainer[i].col[3] <= 15){
            traceContainer.shift()
        }

        if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', "Max tracers") < traceContainer.length) {
            traceContainer[i].col = [traceContainer[i].col[0],traceContainer[i].col[1],traceContainer[i].col[2],clamp(traceContainer[i].col[3] - 2.5,0,255)]
        }
    }
}

clamp = function (val, min, max) {
    if (val > max)
       return max
    if (min > val)
       return min
    return val
 }
function menu_cb()
{   
    if (!UI.IsMenuOpen())
    return
   enabled = UI.GetValue( "Local Bullets");
   UI.SetEnabled( "Tracer color", enabled);
   UI.SetEnabled( "Ticks tracer lasts", enabled);
   UI.SetEnabled( "Max tracers", enabled);
   UI.SetEnabled( "Type", enabled);
}

UI.AddSliderInt(" ", 0, 0);
UI.AddCheckbox("Local Bullets")
UI.AddColorPicker("Tracer color")
UI.AddSliderInt("Ticks tracer lasts", 1, 640)
UI.AddSliderInt("Max tracers", 1, 50)
UI.AddDropdown("Type", ["Thin", "Thick"])
UI.AddLabel(" ");
Cheat.RegisterCallback("Draw", "onDraw")
Cheat.RegisterCallback("bullet_impact", "onBulletImpact")
Global.RegisterCallback("Draw", "menu_cb")