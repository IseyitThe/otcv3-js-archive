Cheat.RegisterCallback("CreateMove", "aaLoop");
//Made by sanityyiwnl#3571

multiplierOptions = [-2, -1, 1, 2];

function aaLoop() {
    AntiAim.SetOverride(1);

    //if (getRandomIntInclusive(0, 4)) AntiAim.SetFakeOffset(-34);
    //else if (getRandomIntInclusive(0, 4)) AntiAim.SetFakeOffset(34);
    //else {
        AntiAim.SetFakeOffset(getRandomIntInclusive(27, 34));
        AntiAim.SetRealOffset(getRandomIntInclusive(50, 37) * multiplierOptions[getRandomIntInclusive(0, multiplierOptions.length)]);
    //}
}



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }