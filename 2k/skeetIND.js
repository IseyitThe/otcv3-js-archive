UI.AddLabel("------------------------------------------");
UI.AddLabel("                  Indicators     ");
UI.AddLabel("                         Made by FanCheYu7");
UI.AddLabel("------------------------------------------");

function draw(){
var font = Render.AddFont("Verdana Bold",18,800);
// fake //
Render.StringCustom(43,860,1,"FAKE",[128,182,0,255],font);
Render.StringCustom(44,860,1,"FAKE",[45,45,45,84],font);
// fake end //

// hideshot //
if(UI.IsHotkeyActive("Rage","GENERAL","Exploits","Hide shots"))
{Render.StringCustom(77,660,1,"HIDESHOT",[128,182,0,255],font);
Render.StringCustom(78,660,1,"HIDESHOT",[45,45,45,84],font);}
// hideshot end //

// doubletap //
if(UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
Render.StringCustom(26,620,1,"DT",[128,182,0,255],font);
  Render.StringCustom(27,620,1,"DT",[45,45,45,84],font);}
// doubletap end //
}
Cheat.RegisterCallback("Draw","draw");