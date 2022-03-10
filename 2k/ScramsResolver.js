UI.AddCheckbox("Resolver");
var on = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Resolver");

function resolverActive() {
    if (on == 1) {
        CreateMove(ForceTarget(Head,Pelvis,random.math(-56,56)))
        CreateMove(ForceHitboxSafety(Head),random.math(-77,56))(AntiAim.ForceHitboxSafety(-56,-56))
        CreateMove(ForceTargetSafety(Head),random.math(-75,56))
        CreateMove(ForceTargetMiniumDamage,random.min(-101,101))
        CreateMove(ForceTargetHitchance,random.min(73,85))  
        
    }
} 
