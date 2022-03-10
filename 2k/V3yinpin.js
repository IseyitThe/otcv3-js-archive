// Created 汉化by SuSu
// QQ:
// rand_kill - 击杀音效
// rand_dead - 死亡音效
// offtime - 播放后延迟停止麦克风
// dir - 读取音乐的目录[自己设置]
script_version = 3.0;
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// SoundBase script | Config 汉化by "SuSu Q：771168806" | Script version: 3

dir = "c:\\music\\";     //读取音乐的文件夹 如果不想更改这个东西 就在D盘创建一个文件夹命名为music
rand_kill = [      //击杀音效  替换文件名即可
"3.wav",
];
rand_kill_head = [     //爆头音效  替换文件名即可
"5.wav",
];
rand_dead = [      //死亡音效  替换文件名即可
"4.wav",
];
mvp = [    //MVP音效  替换文件名即可
"2.wav",
];
rand_assist = [
 // 如果您只想在此事件中播放一个声音，请仅设置一个声音
];

offtime = 2       // 播放后延迟停止麦克风

prefix = "LEZI";
soundbase_killsound = true;
soundbase_hsound = true;
soundbase_deathsound = true;
soundbase_assistsound = false;
soundbase_mvpsound = true;
soundbase_drawsound = false;
soundbase_prefix = false;
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// ========== END CONFIG ==========










function print(str)
{
Cheat.PrintColor( [ 0, 255, 0, 255 ], "[SoundBase] " + str + "\n" );
Cheat.PrintChat("[SoundBase] " + str + "\n")
}

function ExportConfig()
{
// It's not possible to do it in 1 var and just print this var, due to overflow => crash.
dirtext = dir.replace(/\\/g, "\\\\");
print("Copy this config:");
print("\\/\\/\\/\\/\\/\\/\\/\\/\n")
Cheat.Print("// SoundBase script | Config by \"" + Cheat.GetUsername() + "\" | Script version: " + script_version + "\n\n");
Cheat.Print("dir = \"" + dirtext + "\";\n");
Cheat.Print("rand_kill = [\n");
rand_kill.forEach(function(sound){
Cheat.Print(" \"" + sound + "\",\n");
});
Cheat.Print("];\nrand_kill_head = [\n");
rand_kill_head.forEach(function(sound){
Cheat.Print(" \"" + sound + "\",\n");
});
Cheat.Print("];\nrand_dead = [\n");
rand_dead.forEach(function(sound){
Cheat.Print(" \"" + sound + "\",\n");
});
Cheat.Print("];\nmvp = [\n");
mvp.forEach(function(sound){
Cheat.Print(" \"" + sound + "\",\n");
});
Cheat.Print("];\nrand_assist = [\n");
rand_assist.forEach(function(sound){
Cheat.Print(" \"" + sound + "\",\n");
});
Cheat.Print("];\n\nofftime = " + offtime + "\n\nprefix = \"" + prefix + "\";\n");
Cheat.Print("soundbase_killsound = " + GetVar("Kill Sound") + ";\n");
Cheat.Print("soundbase_hsound = " + GetVar("HeadShot Sound") + ";\n");
Cheat.Print("soundbase_assistsound = " + GetVar("Assist Sound") + ";\n");
Cheat.Print("soundbase_deathsound = " + GetVar("Death Sound") + ";\n");
Cheat.Print("soundbase_mvpsound = " + GetVar("MVP Sound") + ";\n");
Cheat.Print("soundbase_drawsound = " + GetVar("Draw Next Sound") + ";\n");
Cheat.Print("soundbase_prefix = " + GetVar("Prefix") + ";\n\n");
print("/\\/\\/\\/\\/\\/\\/\\/\\")
}

function validate_arr(arr)
{
var i = 0;
arr.forEach(function(k) {
if (k.endsWith(".wav")) {
arr[i] = k.replace(/.wav/g, "");
print('Fixing arr var "' + k + '" -> "' + arr[i] + '"');
i = i + 1
}
});
}
// fproof
dir = dir.replace(/\/\//g, "\\");
dir = dir.replace(/\//g, "\\"); // replace / to \
if (!dir.endsWith("\\")) {
dir = dir + "\\"; // Add \ to end of dir
print("Added \\ to end of dir. Now it's: " + dir );
}
validate_arr(rand_kill);
validate_arr(rand_kill_head);
validate_arr(rand_dead);
validate_arr(rand_assist);
validate_arr(mvp);
// end

UI.AddLabel("<||| SoundBase " + script_version + " |||>");
UI.AddCheckbox("Kill Sound");
UI.AddCheckbox("HeadShot Sound");
UI.AddCheckbox("Assist Sound");
UI.AddCheckbox("Death Sound");
UI.AddCheckbox("MVP Sound");
UI.AddCheckbox("Draw Next Sound");
UI.AddCheckbox("Prefix");

UI.AddCheckbox("Export config to console");

function SetConfig(varr, value)
{
UI.SetValue("Misc", "JAVASCRIPT", "Script Items", varr, value);
}

SetConfig("Kill Sound", soundbase_killsound);
SetConfig("HeadShot Sound", soundbase_hsound);
SetConfig("Assist Sound", soundbase_assistsound);
SetConfig("Death Sound", soundbase_deathsound);
SetConfig("MVP Sound", soundbase_mvpsound);
SetConfig("Draw Next Sound", soundbase_drawsound);
SetConfig("Prefix", soundbase_prefix);

mirkostate = false

function arrRandom(arr) {
return arr[Math.floor(Math.random()*arr.length)];
}

item_kill = arrRandom(rand_kill);
item_kill_head = arrRandom(rand_kill_head);
item_assist = arrRandom(rand_assist);
item_dead = arrRandom(rand_dead);
item_mpv = arrRandom(mvp);

var curTime = Globals.Curtime();

offplay = 0

function GetVar(cat)
{
return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", cat)==1?true:false;
}
function drawKSound()
{
curTime = Globals.Curtime();
screen_size = Render.GetScreenSize();
ScrW = screen_size[0];
ScrH = screen_size[1];
if (mirkostate && curTime > offplay) {
Sound.StopMicrophone();
mirkostate = false
}

if (GetVar("Draw Next Sound")) {
Render.String( 100, ScrH - 400, 1, "Kill: " + item_kill + "\n" + (GetVar("HeadShot Sound")?"Headshot: " + item_kill_head:"") + "\n" + (GetVar("Death Sound")?"Death: " + item_dead:"") + "\n" + (GetVar("Assist Sound")?"Assist: " + item_assist:"") + "\n" + (GetVar("MVP Sound")?"MVP Sound: " + item_mpv:""), [ 255, 255, 255, 255 ] );
}
if (GetVar("Export config to console")) {
UI.SetValue( "Misc", "JAVASCRIPT", "Script Items", "Export config to console", false );
ExportConfig();
Cheat.PrintChat("[SoundBase] config printed, check console!")
for (i = 0; i < 10; i++) {
Cheat.PrintChat(" ")
}
Cheat.PrintChat("[SoundBase] config printed, check console!")
Cheat.PrintChat("[SoundBase] config printed, check console!")
Cheat.PrintChat("[SoundBase] config printed, check console!")
Cheat.PrintChat("[SoundBase] config printed, check console!")
Cheat.PrintChat("[SoundBase] config printed, check console!")
}
}

Cheat.RegisterCallback("Draw", "drawKSound")

function GenRand()
{
item_kill = arrRandom(rand_kill);
item_kill_head = arrRandom(rand_kill_head);
item_dead = arrRandom(rand_dead);
item_assist = arrRandom(rand_assist);
item_mpv = arrRandom(mvp);
}

function PlaySound(sound)
{
mirkostate = true;
Sound.PlayMicrophone(dir+sound+".wav");
Sound.Play(dir+sound+".wav");
if (GetVar("Prefix")) {
Local.SetClanTag(prefix);
}
GenRand();
offplay = curTime + offtime
}


function playSoundOnKill()
{
lp = Entity.GetLocalPlayer();
attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
ishead = Event.GetInt("headshot");
assister = Entity.GetEntityFromUserID(Event.GetInt("assister"));
deadpl = Entity.GetEntityFromUserID(Event.GetInt("userid"))
if (lp == attacker) {
if (GetVar("Kill Sound")) {
if (GetVar("HeadShot Sound") && ishead == 1) {
PlaySound(item_kill_head);
} else {
PlaySound(item_kill);
}
}
} else if(lp == deadpl) {
if (GetVar("Death Sound")) {
PlaySound(item_dead);
}
} else if (lp == assister) {
if (GetVar("Assist Sound")) {
PlaySound(item_assist);
}
}
}

Cheat.RegisterCallback("player_death", "playSoundOnKill");
function playBabkaMVP()
{
lp = Entity.GetLocalPlayer();
mvppl = Entity.GetEntityFromUserID(Event.GetInt("userid"))
if (lp == mvppl && UI.GetValue("MVP Sound", "Enabled") == 1) {
PlaySound(item_mpv);
}
}
Cheat.RegisterCallback("round_mvp", "playBabkaMVP")