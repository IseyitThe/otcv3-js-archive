
var username = Cheat.GetUsername();
var Buffer1 = 0;

		UI.AddSubTab(["Config", "SUBTAB_MGR"], "Untap")

		UI.AddSliderInt(["Config", "Untap", "Untap"],"---------------------Untap Public---------------------", 0, 0);
			
			UI.AddDropdown(["Config", "Untap", "Untap"], "Advanced AA", [ "Custom", "Low Delta", "Sway", "Opposites" , "Legit" , "BONKERS" ], 1 );

			UI.AddCheckbox(["Config", "Untap", "Untap"], "Show AA Menu" );


		UI.AddSliderInt(["Config", "Untap", "Untap"],"--------------------FAKE OFFSET--------------------", 0, 0);

			UI.AddSliderInt(["Config", "Untap", "Untap"],"Fake Offset", -80, 80);	
			UI.AddCheckbox( ["Config", "Untap", "Untap"],"Random Fake Offset" );
		
		UI.AddSliderInt(["Config", "Untap", "Untap"],"----------------REAL ADJUSTMENT----------------", 0, 0);

			UI.AddSliderInt(["Config", "Untap", "Untap"],"Real Sway Angle A", -65, 65);
			UI.AddSliderInt(["Config", "Untap", "Untap"],"Real Sway Angle B", -65,65);
			UI.AddSliderFloat(["Config", "Untap", "Untap"],"Real Sway Speed", 0, 3);	

		UI.AddSliderInt(["Config", "Untap", "Untap"],"----------------FAKE ADJUSTMENT----------------", 0, 0);

			UI.AddSliderInt(["Config", "Untap", "Untap"],"LBY Sway Angle A", -55, 55);
			UI.AddSliderInt(["Config", "Untap", "Untap"],"LBY Sway Angle B", -55, 55);
			UI.AddSliderFloat(["Config", "Untap", "Untap"],"LBY Sway Speed", 0, 2);
			
		UI.AddSliderInt(["Config", "Untap", "Untap"],"--------------------YAW OPTIONS------------------", 0, 0);

			UI.AddSliderInt(["Config", "Untap", "Untap"],"Additional Yaw", -90, 90);
			UI.AddSliderInt(["Config", "Untap", "Untap"],"Additional Yaw Inverted", -90, 90);
			UI.AddSliderInt(["Config", "Untap", "Untap"],"Yaw & Jitter", -90, 90);
			UI.AddCheckbox(["Config", "Untap", "Untap"], "Random Yaw & Jitter" );

		UI.AddSliderInt(["Config", "Untap", "Untap"],"--------------------FAKELAG JITTER-----------------", 0, 0);

			UI.AddSliderInt(["Config", "Untap", "Untap"],"Fakelag Max", 0, 16);
			UI.AddSliderInt(["Config", "Untap", "Untap"],"Fakelag Trigger", 0, 14);
			UI.AddSliderInt(["Config", "Untap", "Untap"],"Fakelag Speed", 0, 10);			

		UI.AddSliderInt(["Config", "Untap", "Untap"],"------------------------OPTIONS-----------------------", 0, 0);	
			UI.AddDropdown(["Config", "Untap", "Untap"], "Speed for Jitter", [ "Default", "SLOW AF!!", "Slow", "Normal" , "Fast" , "FAST AF!!" ], 1 );
			UI.AddSliderInt(["Config", "Untap", "Untap"],"Cool Jitter Phase 1", -60, 60);
			UI.AddSliderInt(["Config", "Untap", "Untap"],"Cool Jitter Phase 2", -60, 60);
			UI.AddSliderInt(["Config", "Untap", "Untap"],"Cool Jitter Phase 3", -60, 60);
			UI.AddSliderInt(["Config", "Untap", "Untap"],"Cool Jitter Phase 4", -60, 60);
			UI.AddSliderInt(["Config", "Untap", "Untap"],"Cool Jitter Phase 5", -60, 60);
			
			UI.AddCheckbox( ["Config", "Untap", "Untap"], "COOL JITTER" );
		
		
		UI.AddSliderInt(["Config", "Untap", "Untap"],"---------------------Untap Public---------------------", 0, 0);
		
			UI.AddSubTab(["Config", "SUBTAB_MGR"], "Indicators")
		
			UI.AddColorPicker(["Config", "Indicators", "Indicators"],"Desync Color");
			UI.AddColorPicker(["Config", "Indicators", "Indicators"],"Real Color");
			UI.AddCheckbox( ["Config", "Indicators", "Indicators"],"Debug Indicators" );
		
		UI.AddSliderInt(["Config", "Indicators", "Indicators"],"---------------------Untap Public---------------------", 0, 0);	
		UI.AddSliderInt(["Config", "Indicators", "Indicators"],"----------------------Indicators---------------------", 0, 0);
			UI.AddSliderInt(["Config", "Indicators", "Indicator Settings"],"", 0, 0);
			UI.AddCheckbox(["Config", "Indicators", "Indicators"], "Anti-Aim" );
			UI.AddCheckbox(["Config", "Indicators", "Indicators"], "Watermark" );
		UI.AddSliderInt(["Config", "Indicators", "Indicators"],"---------------------Untap Public---------------------", 0, 0);
		
		
		Cheat.PrintColor( [ 255, 150, 150, 255 ], " \n " + "Welcome: ");
		Cheat.Print(username);
		Cheat.PrintColor( [ 155, 250, 150, 255 ], " | BlorpGneezer#8932");
		Cheat.PrintColor( [ 255, 150, 150, 255 ], " hopes you enjoy Public Version :)");

		
		UI.SetColor(["Config", "Indicators", "Indicators","Real Color"], [255,0,0,100])
		UI.SetColor(["Config", "Indicators", "Indicators","Desync Color"], [100,150,255,150])
 

/* Variables */
var curtime = Global.Curtime();
var Loop = 0;
var Fakelag = true;

var screen_size = Global.GetScreenSize();

function main()
{
	var font = Render.AddFont("Arialbd.ttf", 11.4, 900)	
	selectedcp = UI.GetColor(["Config", "Indicators", "Indicators", "Real Color"])
	selectedcp1 = UI.GetColor(["Config", "Indicators", "Indicators", "Desync Color"])
	if ( UI.GetValue(["Config", "Indicators", "Indicators","Debug Indicators"]) == 0){
		deysnc();
		//Cheat.Print("Desync");
	}else{
		deysnc1();
	}
		UI.SetValue(["Misc.", "Helpers", "General", "Watermark"], 0)
}

function deysnc() {
	var font = Render.AddFont("Arialbd.ttf", 11.4, 900)
	
	var Real3 = 70; //UI.GetValue(["Config", "Untap", "Untap", "Real Sway Angle A"])
	var LBY3 = -60; //UI.GetValue(["Config", "Untap", "Untap", "LBY Sway Angle B"]);
	 
	if(UI.GetValue(["Rage", "Anti Aim", "General", "AA Direction inverter"]) == 1){	
		if(UI.GetValue(["Config", "Indicators", "Indicators", "Anti-Aim"]) == 1){
			Render.FilledRect(screen_size[0] /2 + Real3 - 35, screen_size[1] /2 + 9, 46, 18, selectedcp);
			Render.FilledRect(screen_size[0] /2 + Real3 - 33, screen_size[1] /2 + 12, 42, 12, [ 50, 50, 75, 150 ]);
		
			Render.FilledRect(screen_size[0] /2 + LBY3 - 21, screen_size[1] /2 + 9, 46, 18, selectedcp1);
			Render.FilledRect(screen_size[0] /2 + LBY3 - 19, screen_size[1] /2 + 12, 42, 12, [ 50, 50, 75, 150 ]);
			 
			Render.String(screen_size[0] /2 + Real3 - 22, screen_size[1] /2 + 11, 0, "Real", selectedcp, font)
			Render.String(screen_size[0] /2 + LBY3 - 18, screen_size[1] /2 + 11, 0, "Desync", selectedcp1, font)
		}
	}else{
		if(UI.GetValue(["Config", "Indicators", "Indicators", "Anti-Aim"]) == 1){
			Render.FilledRect(screen_size[0] /2 - Real3 - 11, screen_size[1] /2 + 9, 46, 18, selectedcp);
			Render.FilledRect(screen_size[0] /2 - Real3 - 9, screen_size[1] /2 + 12, 42, 12, [ 50, 50, 75, 150 ]);
		
			Render.FilledRect(screen_size[0] /2 - LBY3 - 25, screen_size[1] /2 + 9, 46, 18, selectedcp1);
			Render.FilledRect(screen_size[0] /2 - LBY3 - 23, screen_size[1] /2 + 12, 42, 12, [ 50, 50, 75, 150 ]);
			 
			Render.String(screen_size[0] /2 - Real3 - 3, screen_size[1] /2 + 11, 0, "Real", selectedcp, font)
			Render.String(screen_size[0] /2 - LBY3 - 22, screen_size[1] /2 + 11, 0, "Desync", selectedcp1, font)
		}
    }
}
function deysnc1() {
	var font = Render.AddFont("Arialbd.ttf", 11.4, 900)
	
	var Real3 = 70; //UI.GetValue(["Config", "Untap", "Untap", "Real Sway Angle A"])
	var LBY3 = -60; //UI.GetValue(["Config", "Untap", "Untap", "LBY Sway Angle B"]);
	 
	if(UI.GetValue(["Rage", "Anti Aim", "General", "AA Direction inverter"]) == 0){	
		if(UI.GetValue(["Config", "Indicators", "Indicators", "Anti-Aim"]) == 1){
			Render.FilledRect(screen_size[0] /2 - Real3 - 11, screen_size[1] /2 + 9, 46, 18, selectedcp);
			Render.FilledRect(screen_size[0] /2 - Real3 - 9, screen_size[1] /2 + 12, 42, 12, [ 50, 50, 75, 150 ]);
		
			Render.FilledRect(screen_size[0] /2 - LBY3 - 24, screen_size[1] /2 + 9, 46, 18, selectedcp1);
			Render.FilledRect(screen_size[0] /2 - LBY3 - 22, screen_size[1] /2 + 12, 42, 12, [ 50, 50, 75, 150 ]);
			 
			Render.String(screen_size[0] /2 - Real3 + 2, screen_size[1] /2 + 11, 0, "Real", selectedcp, font)
			Render.String(screen_size[0] /2 - LBY3 - 21, screen_size[1] /2 + 11, 0, "Desync", selectedcp1, font)
		}
	}else{
		if(UI.GetValue(["Config", "Indicators", "Indicators", "Anti-Aim"]) == 1){
			Render.FilledRect(screen_size[0] /2 + Real3 - 35, screen_size[1] /2 + 9, 46, 18, selectedcp);
			Render.FilledRect(screen_size[0] /2 + Real3 - 33, screen_size[1] /2 + 12, 42, 12, [ 50, 50, 75, 150 ]);
		
			Render.FilledRect(screen_size[0] /2 + LBY3 - 22, screen_size[1] /2 + 9, 46, 18, selectedcp1);
			Render.FilledRect(screen_size[0] /2 + LBY3 - 20, screen_size[1] /2 + 12, 42, 12, [ 50, 50, 75, 150 ]);
			 
			Render.String(screen_size[0] /2 + Real3 - 25, screen_size[1] /2 + 11, 0, "Real", selectedcp, font)
			Render.String(screen_size[0] /2 + LBY3 - 19, screen_size[1] /2 + 11, 0, "Desync", selectedcp1, font)
		}
    }
}

function draw() {
	if(UI.GetValue(["Config", "Indicators", "Indicators", "Watermark"]) == 1){
		selectedcp = UI.GetColor(["Config", "Indicators", "Indicators", "Real Color"])
		selectedcp1 = UI.GetColor(["Config", "Indicators", "Indicators", "Desync Color"])
		
		red = selectedcp[0];
		green = selectedcp[1];
		blue = selectedcp[2];
		alpha = selectedcp[3];

		if(!World.GetServerString())
			return;
			var username = Cheat.GetUsername();
		var today = new Date();
			var hours1 = today.getHours();
			var minutes1 = today.getMinutes();
		var seconds1 = today.getSeconds();
		
			var hours = hours1 <= 9 ? "0"+hours1+":" : hours1+":";
			var minutes = minutes1 <= 9 ? "0" + minutes1+":" : minutes1+":";
		var seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;
		
		var server_tickrate = Globals.Tickrate().toString()
		var ebanaya_hueta = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString()

		
		var font3 = Render.AddFont("Arialbd.ttf", 12, 900)
		var text = "UnTap Public| " + username + " | rate: " + server_tickrate + " | ms: " + ebanaya_hueta + " | " + hours + minutes + seconds;
		
		var w = Render.TextSize(text, font3)[0] + 8;
		var x = Global.GetScreenSize()[0];

		x = x - w - 10;
		Render.GradientRect(x, 9, w , 3, 1, selectedcp1, selectedcp);
		//Render.FilledRect(x, 10, w, 2, selectedcp);
		Render.FilledRect(x, 12, w, 18, [ 50, 50, 75, 200 ]);
		Render.String(x+5, 10 + 5, 0, text, [ 0, 0, 0, 255 ], font3);
		Render.String(x+4, 10 + 4, 0, text, [ 255, 255, 255, 225 ], font3);
	}
} 


//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA




var real = -60;
var up = true
var LBY = -40;
var down = true
var Fakelag = true
var Loop = 1;
var Loop2 = 1;
var Shot = 0;
var BreakLeg = true


																												//______________________Inverter Spam						 								^^^^^^^^^^^^^^^^^^^^

function LBYsway () {																							//______________________LBY SWAY															vvvvvvvvvvvvvvvvvvvv
var speed2 = (UI.GetValue(["Config", "Untap", "Untap", "LBY Sway Speed"]))
var AngleC = (UI.GetValue(["Config", "Untap", "Untap", "LBY Sway Angle A"]))							// ANGLE A HAS TO BE HIGHER THAN ANGLE B
var AngleD = (UI.GetValue(["Config", "Untap", "Untap", "LBY Sway Angle B"]))							// ANGLE A HAS TO BE HIGHER THAN ANGLE B
AngleD = 0 - AngleD;
	if  (down == true) {
		if (LBY <= AngleC && down == true) {
			LBY = LBY + speed2;																				//speed is number to subtract by, the higher, the faster
		//Cheat.Print(LBY);
		}
		if (LBY >= AngleC) {
			down = false;
		}
	}
	if (down == false) {
		if (LBY >= -AngleD && down == false) {
			LBY = LBY - speed2;																				//speed is number to subtract by, the higher, the faster
		}
		if ( LBY <= -AngleD){	
			down = true;
		}
	}
		//Cheat.Print(LBY);
}																												//______________________LBY SWAY															^^^^^^^^^^^^^^^^^^^^

function realsway () {																							//______________________REAL SWAY															vvvvvvvvvvvvvvvvvvvv
var speed = (UI.GetValue(["Config", "Untap", "Untap", "Real Sway Speed"]))
var AngleA = (UI.GetValue(["Config", "Untap", "Untap", "Real Sway Angle A"]))							// ANGLE C HAS TO BE HIGHER THAN ANGLE D
var AngleB = (UI.GetValue(["Config", "Untap", "Untap", "Real Sway Angle B"]))							// ANGLE C HAS TO BE HIGHER THAN ANGLE D
AngleB = 0 - AngleB;
	if  (up == true) {
		if (real <= AngleA && up == true) {
			real = real + speed;																			//speed is number to subtract by, the higher, the faster
		}
		if (real >= AngleA) {
			up = false;
		}	
	}
	if (up == false) {
		if (real >= -AngleB && up == false) {
			real = real - speed;																			//speed is number to subtract by, the higher, the faster
		}	
		if ( real <= -AngleB){		
			up = true;
		}
	}

}																												//______________________REAL SWAY															^^^^^^^^^^^^^^^^^^^^

function Options () {
	var AddYaw = UI.GetValue(["Config", "Untap", "Untap", "Additional Yaw"])
	var MaxYaw = UI.GetValue(["Config", "Untap", "Untap", "Yaw & Jitter"])								//______________________JITTER START														vvvvvvvvvvvvvvvvvvvv
	var InvYaw = UI.GetValue(["Config", "Untap", "Untap", "Additional Yaw Inverted"])
	var MinYaw = 0 - UI.GetValue(["Config", "Untap", "Untap", "Yaw & Jitter"])
	var yaw = Math.random() * (MaxYaw - MinYaw) + MinYaw;														//yaw is a random number in between YawA and YawB		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yaw);

	var RandomYawJitter = UI.GetValue(["Config", "Untap", "Untap", "Random Yaw & Jitter"])
	if (UI.GetValue(["Config", "Untap", "Untap", "COOL JITTER"]) == 1) {												// I want it to work when I slow walk so i have it OnKey
		
		Anti_Aim ();
	}else if (RandomYawJitter == 1 ) {
		if(UI.GetValue(["Rage", "Anti Aim", "General", "AA Direction inverter"]) == 0 )
		{
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], yaw + AddYaw);
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], yaw + AddYaw);
		}else{
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], yaw + InvYaw);
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], yaw + InvYaw);
		}
	}else {
		if(UI.GetValue(["Rage", "Anti Aim", "General", "AA Direction inverter"]) == 0 )
		{
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], MaxYaw);
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], MaxYaw + AddYaw);
		}else{
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], MaxYaw);
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], MaxYaw +  InvYaw);
		}
	}
																												//______________________Jitter End															^^^^^^^^^^^^^^^^^^^^

	var MaxFake = UI.GetValue(["Config", "Untap", "Untap", "Fake Offset"])								//______________________Fake offset START													vvvvvvvvvvvvvvvvvvvv
	var MinFake = 0 - MaxFake ;
	var offset = Math.random() * (MaxFake - MinFake) + MinFake;
	
	var RandomFakeOffset = UI.GetValue(["Config", "Untap", "Untap", "Random Fake Offset"])
	
		
	if (RandomFakeOffset == true ) {
		AntiAim.SetFakeOffset(offset)
	}else {
		AntiAim.SetFakeOffset(MaxFake)
	}																											//______________________Fake offset END  													^^^^^^^^^^^^^^^^^^^^
	
	var FakeLagSpeed = 20 * UI.GetValue(["Config", "Untap", "Untap", "Fakelag Speed"])					//______________________Fakelag Start														vvvvvvvvvvvvvvvvvvvv
	var MinFakelag = UI.GetValue(["Config", "Untap", "Untap", "Fakelag Trigger"])
	var MaxFakelag = UI.GetValue(["Config", "Untap", "Untap", "Fakelag Max"])	
	if (Fakelag == false) {						
		if ( Loop >= FakeLagSpeed ){																				// The higher the FakeLag speed the less Often you get MinFakelag
			UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], MaxFakelag);
			Loop = 0
		}
		Loop = Loop + 1 ;
		Fakelag = true;
	}
	if (Fakelag == true) {
		if ( Loop >= FakeLagSpeed ){																				// The higher the FakeLag speed the less Often you get MinFakelag
			UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], MinFakelag);
			Loop = 0
		}
		Loop = Loop + 1 ;
		Fakelag = false
																												//______________________FakeLag End															^^^^^^^^^^^^^^^^^^^^
	}
}

 function antiaim1 () {
	realsway ();
	LBYsway ();
	AntiAim.SetOverride(1)
	if(UI.GetValue(["Rage", "Anti Aim", "General", "AA Direction inverter"]) == 1 ){
			
			AntiAim.SetRealOffset(real)
			AntiAim.SetLBYOffset(LBY) 
	}else{
			AntiAim.SetRealOffset(real * -1)																		// Inverted aa
			AntiAim.SetLBYOffset(LBY * -1)																		// Inverted aa

    }
}

function onUnload() {
    AntiAim.SetOverride(0);
}
																												//______________________BruteForce Start													vvvvvvvvvvvvvvvvvvvv
																												// anti brute on hit
																											//______________________BruteForce End														^^^^^^^^^^^^^^^^^^^^
																												//______________________BreakLegSpam End														^^^^^^^^^^^^^^^^^^^^


function DropDown() {
	//Cheat.Print("tag");
    var tag = UI.GetValue(["Config", "Untap", "Untap", "Advanced AA"]);

    if (tag == 0)
    {
		/*
        UI.SetEnabled( ["Config", "Untap", "Untap"], "|                      Custom                       |", true );

		*/
    }  else if (tag == 1)
    {

		Preset(-5,0,55,45,0.5,-10,-20,0.75,5,-5,0,0,14,13,8,1);
		
    } else if (tag == 2)
    {

		Preset(10,0,65,35,0.5,-1,-55,0.5,5,-5,0,0,14,13,8,1);
		
    } else if (tag==3)
    {
		
		Preset(15,0,65,64,2,-54,-55,2,5,-5,0,0,14,13,8,1);
		
	}else if (tag == 4)
	{
		Preset(5,0,65,64,2,-54,-55,2,90,90,90,0,2,1,1,0);
		UI.SetValue(["Rage", "Anti Aim", "General", "Jitter"], 0)
	}else if (tag == 5)
	{

		Preset(20,1,65,-65,3,65,-65,2,-5,0,12,1,14,12,8,1);
		
	}
}

function hideTriggerbotCheckbox()
{
	var ShowAAMenu = UI.GetValue(["Config", "Untap", "Untap", "Show AA Menu"])
	if (ShowAAMenu == 0){


UI.SetEnabled( ["Config", "Untap", "Untap", "--------------------FAKE OFFSET--------------------"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Fake Offset"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Random Fake Offset"],0);
		
UI.SetEnabled( ["Config", "Untap", "Untap", "----------------REAL ADJUSTMENT----------------"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Real Sway Angle A"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Real Sway Angle B"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Real Sway Speed"],0);
		
UI.SetEnabled( ["Config", "Untap", "Untap", "----------------FAKE ADJUSTMENT----------------"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "LBY Sway Angle A"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "LBY Sway Angle B"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "LBY Sway Speed"],0);
		
UI.SetEnabled( ["Config", "Untap", "Untap", "--------------------YAW OPTIONS------------------"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Additional Yaw"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Additional Yaw Inverted"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Yaw & Jitter"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Random Yaw & Jitter"],0);
		
		
UI.SetEnabled( ["Config", "Untap", "Untap", "--------------------FAKELAG JITTER-----------------"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Fakelag Max"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Fakelag Trigger"],0);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Fakelag Speed"],0);

UI.SetEnabled( ["Config", "Untap", "Untap", "------------------------OPTIONS-----------------------"],0);
		UI.SetEnabled(["Config", "Untap", "Untap","Cool Jitter Phase 1"], 0);
		UI.SetEnabled(["Config", "Untap", "Untap","Cool Jitter Phase 2"], 0);
		UI.SetEnabled(["Config", "Untap", "Untap","Cool Jitter Phase 3"], 0);
		UI.SetEnabled(["Config", "Untap", "Untap","Cool Jitter Phase 4"], 0);
		UI.SetEnabled(["Config", "Untap", "Untap","Cool Jitter Phase 5"], 0);
		UI.SetEnabled(["Config", "Untap", "Untap", "Speed for Jitter"], 0 );
		UI.SetEnabled( ["Config", "Untap", "Untap", "COOL JITTER"], 0 );
		
	}else if (ShowAAMenu == 1){
		
UI.SetEnabled( ["Config", "Untap", "Untap", "--------------------FAKE OFFSET--------------------"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Fake Offset"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Random Fake Offset"],1);
		
UI.SetEnabled( ["Config", "Untap", "Untap", "----------------REAL ADJUSTMENT----------------"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Real Sway Angle A"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Real Sway Angle B"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Real Sway Speed"],1);
		
UI.SetEnabled( ["Config", "Untap", "Untap", "----------------FAKE ADJUSTMENT----------------"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "LBY Sway Angle A"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "LBY Sway Angle B"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "LBY Sway Speed"],1);
		
UI.SetEnabled( ["Config", "Untap", "Untap", "--------------------YAW OPTIONS------------------"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Additional Yaw"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Additional Yaw Inverted"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Yaw & Jitter"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Random Yaw & Jitter"],1);
		
		
UI.SetEnabled( ["Config", "Untap", "Untap", "--------------------FAKELAG JITTER-----------------"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Fakelag Max"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Fakelag Trigger"],1);
		UI.SetEnabled( ["Config", "Untap", "Untap", "Fakelag Speed"],1);

UI.SetEnabled( ["Config", "Untap", "Untap", "------------------------OPTIONS-----------------------"],1);
		UI.SetEnabled(["Config", "Untap", "Untap","Cool Jitter Phase 1"], 1);
		UI.SetEnabled(["Config", "Untap", "Untap","Cool Jitter Phase 2"], 1);
		UI.SetEnabled(["Config", "Untap", "Untap","Cool Jitter Phase 3"], 1);
		UI.SetEnabled(["Config", "Untap", "Untap","Cool Jitter Phase 4"], 1);
		UI.SetEnabled(["Config", "Untap", "Untap","Cool Jitter Phase 5"], 1);
		UI.SetEnabled(["Config", "Untap", "Untap", "Speed for Jitter"], 1 );
		UI.SetEnabled( ["Config", "Untap", "Untap", "COOL JITTER"], 1 );
	}
}



function SetYaw(Yaw){
	UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], Yaw);
}

function Anti_Aim(){
	//Yaw section (slider)
	Yaw1 = UI.GetValue(["Config", "Untap", "Untap", "Cool Jitter Phase 1"])
	Yaw2 = UI.GetValue(["Config", "Untap", "Untap", "Cool Jitter Phase 2"])
	Yaw3 = UI.GetValue(["Config", "Untap", "Untap", "Cool Jitter Phase 3"])
	Yaw4 = UI.GetValue(["Config", "Untap", "Untap", "Cool Jitter Phase 4"])
	Yaw5 = UI.GetValue(["Config", "Untap", "Untap", "Cool Jitter Phase 5"])
	//Invert section (checkbox)

	//Get value from dropdown
	var Speed3 = UI.GetValue(["Config", "Untap", "Untap", "Speed for Jitter"]);
	
	if(Speed3 == 0){
		Loop2 = Loop2 + 0.25;
		
	}else if ( Speed3 == 1 ){
		Loop2 = Loop2 + 0.01;
		
	}else if ( Speed3 == 2 ){
		Loop2 = Loop2 + 0.1;
		
	}else if ( Speed3 == 3 ){
		Loop2 = Loop2 + 0.5;
		
	}else if ( Speed3 == 4 ){
		Loop2 = Loop2 + 1;
		
	}else if ( Speed3 == 5 ){
		Loop2 = Loop2 + 2;
		
	}
	
	if( Math.floor(Loop2) == 0){
		SetYaw(Yaw1)

	}else if( Math.floor(Loop2) == 2 ){
		SetYaw(Yaw2)

	}else if( Math.floor(Loop2) == 4 ){
		SetYaw(Yaw3)

	}else if( Math.floor(Loop2) == 6 ){
		SetYaw(Yaw4)

	}else if( Math.floor(Loop2) >= 8 ){
		SetYaw(Yaw5)

		Loop2 = -2;
	}
}

function OnDraw (){
		DropDown();	
		antiaim1 ();
		Options();
		hideTriggerbotCheckbox();
		draw ();
		main ();

}

function OnUnload() {
    AntiAim.SetOverride(0);
}

	Cheat.RegisterCallback("Draw", "OnDraw");
	Cheat.RegisterCallback("Unload", "OnUnload");


// BlorpGneezer#8932 https://www.onetap.com/members/mredoz.60729/
function Preset (A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){
	UI.SetValue(["Config", "Untap", "Untap", "Fake Offset"] , (A))
	UI.SetValue(["Config", "Untap", "Untap", "Random Fake Offset"] , (B))
	
	UI.SetValue(["Config", "Untap", "Untap", "Real Sway Angle A"] , (C))
	UI.SetValue(["Config", "Untap", "Untap", "Real Sway Angle B"] , (D))
	UI.SetValue(["Config", "Untap", "Untap", "Real Sway Speed"] , (E))
	
	UI.SetValue(["Config", "Untap", "Untap", "LBY Sway Angle A"] , (F))
	UI.SetValue(["Config", "Untap", "Untap", "LBY Sway Angle B"] , (G))
	UI.SetValue(["Config", "Untap", "Untap", "LBY Sway Speed"] , (H))
	
	UI.SetValue(["Config", "Untap", "Untap", "Additional Yaw"] , (I))
	UI.SetValue(["Config", "Untap", "Untap", "Additional Yaw Inverted"] , (J))
	
	UI.SetValue(["Config", "Untap", "Untap", "Yaw & Jitter"] , (K))
	UI.SetValue(["Config", "Untap", "Untap", "Random Yaw & Jitter"] , (L))
	
	UI.SetValue(["Config", "Untap", "Untap", "Fakelag Max"] , (M))
	UI.SetValue(["Config", "Untap", "Untap", "Fakelag Trigger"] , (N))
	UI.SetValue(["Config", "Untap", "Untap", "Fakelag Speed"] , (O) )
	
	UI.SetValue(["Rage", "Anti Aim", "General", "Pitch mode"], (P));
		
	UI.SetValue(["Config", "Untap", "Untap", "Advanced AA"] , 0)
}