localplayer_index = Entity.GetLocalPlayer( );
localplayer_alive = Entity.IsAlive( localplayer_index );                /*lots of useless shit here, i will use all of it in the next update */
var next_tick_should_fakelag = true;
frametime = Globals.Frametime();
curtime = Globals.Curtime();
tickrate = Globals.Tickrate();
tickinterval = Globals.TickInterval();
tickcount = 0;
count = 0;
Lim = 0;
frame_count = 0;
yaw_add = 0;
can_lag = false;
can_spoof = false;
frame_amount = 0;
// menu
UI.AddLabel("-----Better AA-----");
UI.AddLabel("mob.#0592 for questions");
UI.AddCheckbox("Start");
UI.AddSliderInt("Wait Time", 0, tickrate);
UI.AddHotkey("Invert Switch");
UI.AddLabel("-------------------");
// end region
function fire(){
    var ent = Entity.GetEntityFromUserID(Event.GetInt("userid"))
    if(ent != Entity.GetLocalPlayer())
        return
    next_tick_should_fakelag = false
}
function randomIntFrom(min,max){ // get a random integer from [min] to [max]
    return Math.floor(Math.random()*(max-min+1)+min);
}
function normalize(value1, value2){
    difference = value1 - value2;
    sum = value1 + value2;
    quotient = value1 / value2;
    product = value1 * value2;
}
function info_store(){ // store information for later here
}
function aa(){
    AntiAim.SetOverride(1);
    start = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Start");
    wait_ticks = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Wait Time");
    invert_switch = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Invert Switch");
    UI.SetValue("Anti-Aim", "Fake angles", "Fake desync", false);
    UI.SetValue("Anti-Aim", "Fake angles", "Avoid overlap", true);
    if (!start)
    return;
    safe_time = tickinterval * tickrate / 4;
    normalize(safe_time, frametime);
    if (sum <= .27)
    can_spoof = true;
    Lim = Lim + 1;
    if (Lim > 14)
    Lim = 0;
    if (tickcount >= wait_ticks){
        count = count + 1;
        if (can_spoof && frame_count < sum){ // turns out the fix was wicked easy
                if (frame_count <= (sum / 2)){
                    UserCMD.Send(sum / 2);
                    realrndmjitter = randomIntFrom(-30,30);
                    realrndmyaw = randomIntFrom(-10, 10);
                    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", realrndmjitter);
                    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", realrndmyaw);
                    if (!invert_switch){
                        AntiAim.SetFakeOffset(-60);
                        AntiAim.SetRealOffset(randomIntFrom(0,60));
                        AntiAim.SetLBYOffset(randomIntFrom(-90,90));
                    }
                    else{
                        AntiAim.SetFakeOffset(60);
                        AntiAim.SetRealOffset(randomIntFrom(-60,0));
                        AntiAim.SetLBYOffset(randomIntFrom(-90,90));
                    }
                }
              
                if (frame_count >= (sum / 2)){
                    UserCMD.Choke(sum / 2);
                    realrndmjitter = randomIntFrom(-5,5);
                    realrndmyaw = randomIntFrom(-28,28);
                    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", realrndmjitter);
                    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", realrndmyaw);
                    if (Local.GetFakeYaw() > 0){
                        AntiAim.SetRealOffset(randomIntFrom(0,60));
                        AntiAim.SetFakeOffset(-60);
                        AntiAim.SetLBYOffset(0);
                    }
                    else{
                        AntiAim.SetRealOffset(randomIntFrom(-60,0));
                        AntiAim.SetFakeOffset(60);
                        AntiAim.SetLBYOffset(0);
                    }
                  
                    if ((Local.GetRealYaw() - Local.GetFakeYaw()) >= 15 || (Local.GetRealYaw() - Local.GetFakeYaw()) <= 15){
                        AntiAim.SetFakeOffset(0);
                        AntiAim.SetRealOffset(-Local.GetRealYaw());
                    }

                }
            if (!can_spoof && count == 1){
                if (!invert_switch){              
                    realrndmjitter = randomIntFrom(-71,20);
                    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", realrndmjitter);
                    AntiAim.SetFakeOffset(0);
                    AntiAim.SetRealOffset(60);
                    AntiAim.SetLBYOffset(0);
                }
                else{
                    realrndmjitter = randomIntFrom(-20,71);
                    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", realrndmjitter);
                    AntiAim.SetFakeOffset(0);
                    AntiAim.SetRealOffset(-60);
                    AntiAim.SetLBYOffset(0);
                }
            }
        }
        if (count > 1)
        count = 0;
    }
    else {
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yaw_add * 2);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", tickcount);
    }
    if (!invert_switch)
    yaw_add = yaw_add - 2;
    if (invert_switch)
    yaw_add = yaw_add + 2;
    if (yaw_add > 28 || yaw_add < -28)
        yaw_add = 0;

    if (!invert_switch){
        AntiAim.SetFakeOffset(30);
        AntiAim.SetRealOffset(-30);
        AntiAim.SetLBYOffset(randomIntFrom(0,90));
    }
    else{
        AntiAim.SetFakeOffset(-30);
        AntiAim.SetRealOffset(30);
        AntiAim.SetLBYOffset(randomIntFrom(-90,0));
    }
    tickcount = tickcount + 1;
    frame_count = frame_count + frametime;
    if (frame_count >= sum)
    frame_count = 0;
    if (tickcount > tickrate){
        tickcount = 0;
    }
    UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", true)
    if(!next_tick_should_fakelag)
    {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", false)
        next_tick_should_fakelag = true
    }
    // Fake Lag
    UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", Lim);
}
Cheat.RegisterCallback("CreateMove", "aa");
Cheat.RegisterCallback("weapon_fire", "fire")