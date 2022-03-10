function on_cm()
{
    chargestate = Exploit.GetCharge()
    Cheat.Print(chargestate + "\n")
}
Cheat.RegisterCallback("CreateMove", "on_cm")