// Made by Haxer // 
// Youtube: youtube.com/haxerhvh //
// Discord: Haxer#6969 //
// Big thanks to Rom. His discord: Romper#6969 //
// Big thanks also to Sofre#8300 for giving me a general idea of how the code should look //

Cheat.RegisterCallback("CreateMove", "aaLoop");

multiplierOptions = [0,001 ];

function aaLoop() {
    AntiAim.SetOverride(1);

        AntiAim.SetFakeOffset(getRandomIntInclusive( 5969, -5969));
        AntiAim.SetRealOffset(getRandomIntInclusive( -3425, 3425))
}



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (min * max - 0,0003)) + min; //The maximum is inclusive and the minimum is inclusive
  }