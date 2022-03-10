function slider(name,min,max)
{
    UI.AddSliderFloat(name,min,max)
}
slider("Default Crosshair Size", 0, 10)
slider("Default Crosshair Thickness", 0, 10)
slider("Default Crosshair Gap", 0, 5)
UI.AddColorPicker("Default Crosshair Color")
UI.AddSliderInt("Default Outline Thickness", 0, 3)
function onDraw()
{
    var local = Entity.GetLocalPlayer()
   
    if(!Entity.IsValid(local))
    {
        Convar.SetFloat("cl_crosshairthickness", 300)
        Convar.SetFloat("cl_crosshairsize", 1000)
        Convar.SetFloat("cl_crosshair_outlinethickness", 0)
        Convar.SetFloat("cl_crosshairgap", -1000)
        var col = [206,250,5,255]
        Convar.SetFloat("cl_crosshaircolor_r", col[0])
        Convar.SetFloat("cl_crosshaircolor_g", col[1])
        Convar.SetFloat("cl_crosshaircolor_b", col[2])
        Convar.SetFloat("cl_crosshairalpha", col[3])
    }
    else if(Entity.IsAlive(local))
    {
        Convar.SetFloat("cl_crosshairthickness", UI.GetValue("Script items", "Default Crosshair Size"))
        Convar.SetFloat("cl_crosshairsize", UI.GetValue("Script items", "Default Crosshair Thickness"))
        Convar.SetFloat("cl_crosshair_outlinethickness", UI.GetValue("Script items", "Default Outline Thickness"))
        Convar.SetFloat("cl_crosshairgap", UI.GetValue("Script items", "Default Crosshair Gap"))
        var col = UI.GetColor("Script items", "Default Crosshair Color")
        Convar.SetFloat("cl_crosshaircolor_r", col[0])
        Convar.SetFloat("cl_crosshaircolor_g", col[1])
        Convar.SetFloat("cl_crosshaircolor_b", col[2])
        Convar.SetFloat("cl_crosshairalpha", col[3])
    }
}
function onUnload()
{
    Convar.SetFloat("cl_crosshairthickness", UI.GetValue("Script items", "Default Crosshair Size"))
    Convar.SetFloat("cl_crosshairsize", UI.GetValue("Script items", "Default Crosshair Thickness"))
    Convar.SetFloat("cl_crosshair_outlinethickness", UI.GetValue("Script items", "Default Outline Thickness"))
    Convar.SetFloat("cl_crosshairgap", UI.GetValue("Script items", "Default Crosshair Gap"))
    var col = UI.GetColor("Script items", "Default Crosshair Color")
    Convar.SetFloat("cl_crosshaircolor_r", col[0])
    Convar.SetFloat("cl_crosshaircolor_g", col[1])
    Convar.SetFloat("cl_crosshaircolor_b", col[2])
    Convar.SetFloat("cl_crosshairalpha", col[3])
}
Cheat.RegisterCallback("Unload", "onUnload")
Cheat.RegisterCallback("Draw", "onDraw")