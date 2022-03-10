// dropdowns //
UI.AddLabel("----------Hitbox override----------");
UI.AddHotkey("Override Hotkey");
UI.AddDropdown("weapon",["Genral","Pistol","Heavy pistol","Scout","AWP","Autosniper"]);
UI.AddMultiDropdown("General Hitboxes",["Head","Upper chest","Chest","Lower chest","Stomach","Pelvis","Legs","Feet"]);
UI.AddMultiDropdown("General override hitboxes",["Head","Upper chest","Chest","Lower chest","Stomach","Pelvis","Legs","Feet"]);
UI.AddMultiDropdown("Pistol Hitboxes",["Head","Upper chest","Chest","Lower chest","Stomach","Pelvis","Legs","Feet"]);
UI.AddMultiDropdown("Pistol override hitboxes",["Head","Upper chest","Chest","Lower chest","Stomach","Pelvis","Legs","Feet"]);
UI.AddMultiDropdown("Heavy pistol Hitboxes",["Head","Upper chest","Chest","Lower chest","Stomach","Pelvis","Legs","Feet"]);
UI.AddMultiDropdown("Heavy pistol override hitboxes",["Head","Upper chest","Chest","Lower chest","Stomach","Pelvis","Legs","Feet"]);
UI.AddMultiDropdown("Scout Hitboxes",["Head","Upper chest","Chest","Lower chest","Stomach","Pelvis","Legs","Feet"]);
UI.AddMultiDropdown("Scout override hitboxes",["Head","Upper chest","Chest","Lower chest","Stomach","Pelvis","Legs","Feet"]);
UI.AddMultiDropdown("AWP Hitboxes",["Head","Upper chest","Chest","Lower chest","Stomach","Pelvis","Legs","Feet"]);
UI.AddMultiDropdown("AWP override hitboxes",["Head","Upper chest","Chest","Lower chest","Stomach","Pelvis","Legs","Feet"]);
UI.AddMultiDropdown("Autosniper Hitboxes",["Head","Upper chest","Chest","Lower chest","Stomach","Pelvis","Legs","Feet"]);
UI.AddMultiDropdown("Autosniper override hitboxes",["Head","Upper chest","Chest","Lower chest","Stomach","Pelvis","Legs","Feet"]);
var scs = Render.GetScreenSize();
UI.AddSliderInt("Indicator X",0,scs[0]);
UI.AddSliderInt("Indicator Y",0,scs[1]);
UI.AddLabel("----------Hitbox override----------");
// dropdowns end//
//var scs = Render.GetScreenSize();
// hide ui //
function hide () {
var weapons = UI.GetValue("Script items","weapon");
switch (weapons) {
case 0 :{
UI.SetEnabled("Script items","General Hitboxes",true);
UI.SetEnabled("Script items","General override hitboxes",true);
UI.SetEnabled("Script items","Pistol Hitboxes",false);
UI.SetEnabled("Script items","Pistol override hitboxes",false);
UI.SetEnabled("Script items","Heavy pistol Hitboxes",false);
UI.SetEnabled("Script items","Heavy pistol override hitboxes",false);
UI.SetEnabled("Script items","Scout Hitboxes",false);
UI.SetEnabled("Script items","Scout override hitboxes",false);
UI.SetEnabled("Script items","AWP Hitboxes",false);
UI.SetEnabled("Script items","AWP override hitboxes",false);
UI.SetEnabled("Script items","Autosniper Hitboxes",false);
UI.SetEnabled("Script items","Autosniper override hitboxes",false);
break;}
case 1 :{
UI.SetEnabled("Script items","General Hitboxes",false);
UI.SetEnabled("Script items","General override hitboxes",false);
UI.SetEnabled("Script items","Pistol Hitboxes",true);
UI.SetEnabled("Script items","Pistol override hitboxes",true);
UI.SetEnabled("Script items","Heavy pistol Hitboxes",false);
UI.SetEnabled("Script items","Heavy pistol override hitboxes",false);
UI.SetEnabled("Script items","Scout Hitboxes",false);
UI.SetEnabled("Script items","Scout override hitboxes",false);
UI.SetEnabled("Script items","AWP Hitboxes",false);
UI.SetEnabled("Script items","AWP override hitboxes",false);
UI.SetEnabled("Script items","Autosniper Hitboxes",false);
UI.SetEnabled("Script items","Autosniper override hitboxes",false);
break;}
case 2:{
UI.SetEnabled("Script items","General Hitboxes",false);
UI.SetEnabled("Script items","General override hitboxes",false);
UI.SetEnabled("Script items","Pistol Hitboxes",false);
UI.SetEnabled("Script items","Pistol override hitboxes",false);
UI.SetEnabled("Script items","Heavy pistol Hitboxes",true);
UI.SetEnabled("Script items","Heavy pistol override hitboxes",true);
UI.SetEnabled("Script items","Scout Hitboxes",false);
UI.SetEnabled("Script items","Scout override hitboxes",false);
UI.SetEnabled("Script items","AWP Hitboxes",false);
UI.SetEnabled("Script items","AWP override hitboxes",false);
UI.SetEnabled("Script items","Autosniper Hitboxes",false);
UI.SetEnabled("Script items","Autosniper override hitboxes",false);
break;}
case 3:{
UI.SetEnabled("Script items","General Hitboxes",false);
UI.SetEnabled("Script items","General override hitboxes",false);
UI.SetEnabled("Script items","Pistol Hitboxes",false);
UI.SetEnabled("Script items","Pistol override hitboxes",false);
UI.SetEnabled("Script items","Heavy pistol Hitboxes",false);
UI.SetEnabled("Script items","Heavy pistol override hitboxes",false);
UI.SetEnabled("Script items","Scout Hitboxes",true);
UI.SetEnabled("Script items","Scout override hitboxes",true);
UI.SetEnabled("Script items","AWP Hitboxes",false);
UI.SetEnabled("Script items","AWP override hitboxes",false);
UI.SetEnabled("Script items","Autosniper Hitboxes",false);
UI.SetEnabled("Script items","Autosniper override hitboxes",false);
break;}
case 4:{
UI.SetEnabled("Script items","General Hitboxes",false);
UI.SetEnabled("Script items","General override hitboxes",false);
UI.SetEnabled("Script items","Pistol Hitboxes",false);
UI.SetEnabled("Script items","Pistol override hitboxes",false);
UI.SetEnabled("Script items","Heavy pistol Hitboxes",false);
UI.SetEnabled("Script items","Heavy pistol override hitboxes",false);
UI.SetEnabled("Script items","Scout Hitboxes",false);
UI.SetEnabled("Script items","Scout override hitboxes",false);
UI.SetEnabled("Script items","AWP Hitboxes",true);
UI.SetEnabled("Script items","AWP override hitboxes",true);
UI.SetEnabled("Script items","Autosniper Hitboxes",false);
UI.SetEnabled("Script items","Autosniper override hitboxes",false);
break;}
case 5:{
UI.SetEnabled("Script items","General Hitboxes",false);
UI.SetEnabled("Script items","General override hitboxes",false);
UI.SetEnabled("Script items","Pistol Hitboxes",false);
UI.SetEnabled("Script items","Pistol override hitboxes",false);
UI.SetEnabled("Script items","Heavy pistol Hitboxes",false);
UI.SetEnabled("Script items","Heavy pistol override hitboxes",false);
UI.SetEnabled("Script items","Scout Hitboxes",false);
UI.SetEnabled("Script items","Scout override hitboxes",false);
UI.SetEnabled("Script items","AWP Hitboxes",false);
UI.SetEnabled("Script items","AWP override hitboxes",false);
UI.SetEnabled("Script items","Autosniper Hitboxes",true);
UI.SetEnabled("Script items","Autosniper override hitboxes",true);
break; }
}
}







// set normal hitboxes
function normal () {
var normal_1 = UI.GetValue("Script items","General Hitboxes");
var normal_2 = UI.GetValue("Script items","Pistol Hitboxes");
var normal_3 = UI.GetValue("Script items","Heavy pistol Hitboxes");
var normal_4 = UI.GetValue("Script items","Scout Hitboxes");
var normal_5 = UI.GetValue("Script items","AWP Hitboxes");
var normal_6 = UI.GetValue("Script items","Autosniper Hitboxes");
UI.SetValue("Rage","GENERAL","Hitboxes",normal_1);
UI.SetValue("Rage","PISTOL","Hitboxes",normal_2);
UI.SetValue("Rage","HEAVY PISTOL","Hitboxes",normal_3);
UI.SetValue("Rage","SCOUT","Hitboxes",normal_4);
UI.SetValue("Rage","AWP","Hitboxes",normal_5);
UI.SetValue("Rage","AUTOSNIPER","Hitboxes",normal_6);
}
// set override hitboxes //
function override () {
var override_1 = UI.GetValue("Script items","General override hitboxes");
var override_2 = UI.GetValue("Script items","Pistol override hitboxes");
var override_3 = UI.GetValue("Script items","Heavy pistol override hitboxes");
var override_4 = UI.GetValue("Script items","Scout override hitboxes");
var override_5 = UI.GetValue("Script items","AWP override hitboxes");
var override_6 = UI.GetValue("Script items","Autosniper override hitboxes");
if(UI.IsHotkeyActive("Script items","Override Hotkey")){
UI.SetValue("Rage","GENERAL","Hitboxes",override_1);
UI.SetValue("Rage","PISTOL","Hitboxes",override_2);
UI.SetValue("Rage","HEAVY PISTOL","Hitboxes",override_3);
UI.SetValue("Rage","SCOUT","Hitboxes",override_4);
UI.SetValue("Rage","AWP","Hitboxes",override_5);
UI.SetValue("Rage","AUTOSNIPER","Hitboxes",override_6);
}
}


Cheat.RegisterCallback("Draw","indicator");
Cheat.RegisterCallback("CreateMove","normal");
Cheat.RegisterCallback("CreateMove","override");
Cheat.RegisterCallback("Draw","hide");