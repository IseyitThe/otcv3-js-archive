var d = true;


var d = true;
UI.AddCheckbox("Clantag Enable");
UI.AddSliderInt("Add Kills", 0, 1000);
function cltag(){
local = Entity.GetLocalPlayer();
add = UI.GetValue("Script items", "Add Kills");
stt = Entity.GetProp(local, "CPlayerResource", "m_iKills") + add;
if(UI.GetValue("Script items", "Clantag Enable")){
Local.SetClanTag("StatTrak: " + stt)
d = true;
} else {
if(d){
Local.SetClanTag("");
}
d = false;
}
}
Cheat.RegisterCallback("CreateMove", "cltag");