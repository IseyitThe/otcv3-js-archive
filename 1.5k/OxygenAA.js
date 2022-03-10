/* Script made by white#8807, I tried to replicate OxygenAA from Fatality using the lua 5.3, not all fetures are here because of onetaps limitations */

UI.AddDropdown( "AA Type", [ "Off", "Skeet killer", "Backwords Desync", "onetap breaker", "Static Switch(x)" ] );
UI.AddDropdown( "AA Type while moving", [ "None", "Head Flick", "Semi Aggresive", "Aggresive Mode"] );
UI.AddDropdown( "RNV Still", ["backwards breaker", "desync breaker", "Desync Breaker v2"] );
var side = false;


function getValue(key) {
	return UI.GetValue("Misc", "JAVASCRIPT", "Script items", key);
}

function sum_MaxValue(partialValue, totalValue) {
    /* This made my brain hurt, i suck */
    if (totalValue < 0 && partialValue < 0){
        var newValue = Math.round(((-(partialValue) * -(totalValue)) / 100));
        if(UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")){
            AntiAim.SetLBYOffset((Math.floor(Math.random() * (90 - 70 + 1) + 70)));
            return newValue;
        }else{
            AntiAim.SetLBYOffset(-(Math.floor(Math.random() * (90 - 70 + 1) + 70)));
        /* this fucking lby shit does not make any sense should fix it in the future but for now i'll just leave it here
            if (lby3 > 0){
                bool ? AntiAim.SetLBYOffset(lby1 - lby2) : AntiAim.SetLBYOffset(lby1 + lby3 - lby2 * 2)
                if (lby3 > lby2){
                    lby2 = lby3;
                }
            }else{
                if (lby3 > lby2){
                    lby2 = lby3;
                }
                bool ? AntiAim.SetLBYOffset(lby1 + lby2) : AntiAim.SetLBYOffset(lby1 + lby3 + lby2 * 2)
            }
            */
        return -(newValue);

        }
    }
    if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")){
        AntiAim.SetLBYOffset(Math.floor(Math.random() * (90 - 70 + 1) + 70));
        return Math.round(((partialValue * totalValue) / 100));
    }else{
        AntiAim.SetLBYOffset(-(Math.floor(Math.random() * (90 - 70 + 1) + 70)));
    return Math.round(((-(partialValue) * -(totalValue)) / 100));
    }
}
/*
var lby3 = -50, lby1 = 0, lby2 = 72;
*/

function setMaxDesync(fakeMaxAmmount, AAtype){
    switch(AAtype){
        case 0:
            // i have no idea what None means in fake type so i disabled override
            AntiAim.SetOverride(0);
            break;
        case 1:
            AntiAim.SetOverride(1);
            AntiAim.SetRealOffset(0);

            if (fakeMaxAmmount < 0){
                AntiAim.SetFakeOffset(sum_MaxValue(fakeMaxAmmount, -60));
                
            }else{
                AntiAim.SetFakeOffset(sum_MaxValue(fakeMaxAmmount, 60)); 

            }
            break;
        case 2:
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(0)
            if (fakeMaxAmmount < 0){
                AntiAim.SetRealOffset(sum_MaxValue(fakeMaxAmmount, -60));

            }else {
                AntiAim.SetRealOffset(sum_MaxValue(fakeMaxAmmount, 60));

            }
            break;
    }
}

function antiaim_update(){

    var movement = UserCMD.GetMovement();
    /* i really don't like getting the local speed like this, there has to be a better way */
    var forward = movement[0];
    var side = movement[1];
    var up = movement[2];
    var speed = forward + side + up;
    /*
    var speed = movement[0] + movement[1] + movement[2];
    this does not work for some reason
    */

    side = !side;
    switch(getValue("AA Type")){
        case 1:
            if(side){
                if(speed == 0){
                        // standing
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -2 );
                        setMaxDesync(-70, 1);
                       

                    }else{
                        // moving
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 25 );
                        setMaxDesync(-70, 1);
                       

                    }
                }else{
                    if(speed == 0){
                        // standing
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -17 );
                    }else{
                        //moving
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -45 );
                        setMaxDesync(-65, 1);
                    }
                }
                break;
            case 2:
                if(side){
                    if(speed == 0){
                        // standing
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -30 );
                        setMaxDesync(-70, 1);
                       

                    }else{
                        // moving
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 25 );
                        setMaxDesync(-70, 1);
                       

                    }
                }else{
                    // standing & moving
                    UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -25 );
                    setMaxDesync(-65, 1);
                }
                break;
            case 3:
                if(side){
                    if(speed == 0){
                        // standing
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 25 );
                        setMaxDesync(100, 1);
                       

                    }else{
                        // moving
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 25 );
                        setMaxDesync(100, 1);
                       

                    }
                }else{
                        // standing & moving
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -15 );
                        setMaxDesync(100, 1);
                         
                }
                break;
            case 4: 
            if(side){
                    // standing & moving
                    UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 25 );
                    setMaxDesync(-70, 1);
                    

            }else{
                if(speed = 0){
                    // standing
                    UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -20 );
                    setMaxDesync(-68, 1);
                }else{
                    //moving
                    UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -20 );
                    setMaxDesync(-70, 1);
                }
            }
    
        }
        if(speed != 0){
            switch(getValue("RNV Still")){
                case 0:
                    if (side){
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -14);
                        setMaxDesync(-60, 2);

                    }else{
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -12);
                        setMaxDesync(-60, 2);

                    }
                    break;
                case 1:
                    if(side){
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 24);
                        setMaxDesync(-100, 1);;

                    }else {
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
                        setMaxDesync(20, 2);
                    }
                    break;
                case 2:
                    if (side){
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 24);
                        setMaxDesync(-80, 1);

                    }else{
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 17);
                        setMaxDesync(20, 2);

                    }
                    break;
            }
        }
        if(speed == 0){
            switch(getValue("AA Type while moving")){
                case 1:
                    if (side){
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -20);
                        setMaxDesync(-100, 1);

                    }else{
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
                        setMaxDesync(100, 1);

                    }
                    break;
                case 2:
                    if (side){
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -14);
                        setMaxDesync(NULL, 0);

                    }else{
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
                        setMaxDesync(NULL, 0);

                    }
                    break;
                case 3:
                    if (side){
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 24);
                        setMaxDesync(-80, 1);

                    }else{
                        UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 17);
                        setMaxDesync(20, 2);

                    }
                    break;
            }
        }
}
function unload(){
    AntiAim.SetOverride(0);
}
Cheat.RegisterCallback("CreateMove", "antiaim_update");
Cheat.RegisterCallback("Unload", "unload");