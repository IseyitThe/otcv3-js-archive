main();

function main() 
{
    Cheat.RegisterCallback("CreateMove", "Fix");
}

function Fix() 
{
    AntiAim.SetOverride(UI.GetValue("Anti-aim", "Fake angles", "Inverter", "Toggle"));
}