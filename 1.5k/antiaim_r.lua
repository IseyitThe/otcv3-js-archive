--lua by rias#4990 

-- credits to
--some guy i based this shit on (kiwiaa)
-- me for beign lazy


local menu = fatality.menu
local config = fatality.config
local input = fatality.input
local render = fatality.render
local engine_client = csgo.interface_handler:get_engine_client()
local entity_list = csgo.interface_handler:get_entity_list()
local globals   = csgo.interface_handler:get_global_vars()
local engine    = csgo.interface_handler:get_engine_client()
local menu      = fatality.menu
local config    = fatality.config
local input     = fatality.input
local callbacks = fatality.callbacks
local last_tick_stand = globals.realtime
local last_tick_move = globals.realtime
local last_tick_air = globals.realtime
local in_use_stand = false
local in_use_move = false
local in_use_air = false
local ayaya = false
--lua by rias#4990 

-- credits to
--some guy i based this shit on (kiwiaa)
-- me for beign lazy

local aa_state_standing = menu:get_reference( "rage", "anti-aim", "standing", "yaw add" )
local aa_state_standing2 = menu:get_reference( "rage", "anti-aim", "standing", "add" )
local standing_faketype = menu:get_reference( "rage", "anti-aim", "standing", "fake type" )

--lua by rias#4990 

-- credits to
--some guy i based this shit on (kiwiaa)
-- me for beign lazy


local enable_spam = menu:get_reference( "rage", "anti-aim", "general", "anti-aim" )
local aa_state_moving = menu:get_reference( "rage", "anti-aim", "moving", "yaw add" )
local aa_state_moving2 = menu:get_reference( "rage", "anti-aim", "moving", "add" )
local moving_faketype = menu:get_reference( "rage", "anti-aim", "moving", "fake type" )
local fakelag = menu:get_reference( "rage", "anti-aim", "moving", "base amount" )
local aa_state_air = menu:get_reference( "rage", "anti-aim", "air", "yaw add" )
local aa_state_air2 = menu:get_reference( "rage", "anti-aim", "air", "add" )
local air_faketype = menu:get_reference( "rage", "anti-aim", "air", "fake type" )

--lua by rias#4990 

-- credits to
--some guy i based this shit on (kiwiaa)
-- me for beign lazy


local aa_jitter_item = config:add_item( "aa_jitter_item", 0 )
local aa_jitter_checkbox = menu:add_checkbox( "Fake Angles Enchancer ", "rage", "anti-aim", "general", aa_jitter_item )



--lua by rias#4990 

-- credits to
--some guy i based this shit on (kiwiaa)
-- me for beign lazy


-- fake amount stuff
local standing_amount = menu:get_reference( "rage", "anti-aim", "standing", "fake amount" )
local move_amount = menu:get_reference( "rage", "anti-aim", "moving", "fake amount" )
local air_amount = menu:get_reference( "rage", "anti-aim", "air", "fake amount" )

local fake_amount_check = config:add_item( "fake_amount_check", 0 )
local fake_amount_limit = config:add_item( "fake_amount_limit", 0 )
local fake_amount_limit2 = config:add_item( "fake_amount_limit2", 0 )


local fake_amount_checkbox = menu:add_checkbox( "Fake Amount Shift ", "rage", "anti-aim", "general", fake_amount_check )
--local fake_amount_slider = menu:add_slider( "Fake Amount Shift Limit Max", "rage", "anti-aim", "general", fake_amount_limit ,-180,180, 1)
--local fake_amount_slider2 = menu:add_slider( "Fake Amount Shift Limit Min", "rage", "anti-aim", "general", fake_amount_limit2 ,-180,180, 1)

-- combobox test
local antiaim_mode = config:add_item( "antiaim_mode", 2 )
local fake_combobox = menu:add_combo( "Fake Angles Shift Mode", "rage", "anti-aim", "general", antiaim_mode):add_item( "slide", antiaim_mode):add_item( "static", fake_type_item, antiaim_mode):add_item( "jitter", fake_type_item)





local spam_e = config:add_item( "spam_e", 0 )
--local spam_e_checkbox = menu:add_checkbox( "E Spam ", "rage", "anti-aim", "general", spam_e )


local aa_desync_invterter_item = config:add_item( "aa_state_item", 0 )
--local aa_desync_invterter_checkbox = menu:add_checkbox( "Desync inverter", "rage", "anti-aim", "general", aa_desync_invterter_item )

local jitter_droite_item = config:add_item ( "jitter_droite" , 0 )
--local jitter_droite_slider = menu:add_slider( "Yaw add right", "rage", "anti-aim", "general", jitter_droite_item ,-180,180, 1)

local jitter_gauche_item = config:add_item ( "jitter_gauche" , 0 )
--local jitter_gauche_slider = menu:add_slider( "Yaw add left", "rage", "anti-aim", "general", jitter_gauche_item ,-180,180, 1)

local jitter_delais_item = config:add_item( "jitter_delais", 0 );
--local jitter_delais_slider = menu:add_slider( "Fake Shift Delay", "Rage", "Anti-Aim", "general", jitter_delais_item, 0, 1, 0.01 )


--lua by rias#4990 

-- credits to
--some guy i based this shit on (kiwiaa)
-- me for beign lazy


local fake_type_item = config:add_item("fake_type_item", 0)
local fake_combobox = menu:add_combo( "Fake type", "rage", "anti-aim", "general", fake_type_item):add_item( "fake around real", fake_type_item):add_item( "real around fake", fake_type_item)

local font = render:create_font("arial", 25, 1,  true)
local screen_size = render:screen_size()


--lua by rias#4990 

-- credits to
--some guy i based this shit on (kiwiaa)
-- me for beign lazy



local function switch()

if fake_type_item:get_int()== 0  then

    standing_faketype:set_int(1)
    moving_faketype:set_int(1)
    air_faketype:set_float(1)

end

if fake_type_item:get_int()== 1  then

    standing_faketype:set_int(2)
    moving_faketype:set_int(2)
    air_faketype:set_int(2)

end



    if aa_jitter_item:get_bool() then
        render:indicator( screen_size.x / 300, screen_size.y / 1.6 , "FAKE",true, -2 );  

    
        if aa_desync_invterter_item:get_bool() then
         
            if last_tick_stand + jitter_delais_item:get_float() < globals.realtime then
                if in_use_stand then
                  
                    aa_state_standing:set_bool(true)
                    standing_faketype:set_int(2)
                    if fake_amount_check:get_bool() then
                            if antiaim_mode:get_int()==2 then
                            jitter_delais_item:set_float(0.01)
                            standing_amount:set_int(-180)
                            menu:get_reference( "Rage", "Anti-Aim", "Standing", "add" ):set_int( 30 );
                            end
                            if antiaim_mode:get_int()==1 then
                            standing_amount:set_int(-180)
                            jitter_delais_item:set_float(0.01)
                            menu:get_reference( "Rage", "Anti-Aim", "Standing", "add" ):set_int( 0 );
                            end
                            if antiaim_mode:get_int()==0 then
                            jitter_delais_item:set_float(1)
                            standing_amount:set_int(-180)
                            menu:get_reference( "Rage", "Anti-Aim", "Standing", "add" ):set_int( 0 );
                            end
                        render:indicator( screen_size.x / 300, screen_size.y / 1.525 , "D216",true, -2 , false ); 
                        end
                    in_use_stand = false;

                else
                    aa_state_standing:set_bool(true)
                    standing_faketype:set_int(1)
                    if fake_amount_check:get_bool() then
                        if antiaim_mode:get_int()==2 then
                            jitter_delais_item:set_float(0.01)
                            standing_amount:set_int(0)
                            menu:get_reference( "Rage", "Anti-Aim", "Standing", "add" ):set_int( -30 );
                            end
                            if antiaim_mode:get_int()==1 then
                            standing_amount:set_int(0)
                            jitter_delais_item:set_float(0.01)
                            menu:get_reference( "Rage", "Anti-Aim", "Standing", "add" ):set_int( 0 );
                            end
                            if antiaim_mode:get_int()==0 then
                            jitter_delais_item:set_float(1)
                            standing_amount:set_int(0)
                            menu:get_reference( "Rage", "Anti-Aim", "Standing", "add" ):set_int( 0 );
                            end
                        render:indicator( screen_size.x / 300, screen_size.y / 1.525 , "D0",true, -2 , false ); 
                        end
                    in_use_stand = true;

                end
                last_tick_stand = globals.realtime;
            end
        else
            if last_tick_stand + jitter_delais_item:get_float() < globals.realtime then
                if in_use_stand then
          
                    aa_state_standing:set_bool(true)
                    in_use_stand = false;
                    if fake_amount_check:get_bool() then
                        if antiaim_mode:get_int()==2 then
                            jitter_delais_item:set_float(0.01)
                            standing_amount:set_int(-180)
                            menu:get_reference( "Rage", "Anti-Aim", "Standing", "add" ):set_int( 30 );
                            end
                            if antiaim_mode:get_int()==1 then
                            standing_amount:set_int(-180)
                            jitter_delais_item:set_float(0)
                            menu:get_reference( "Rage", "Anti-Aim", "Standing", "add" ):set_int( 0 );
                            end
                            if antiaim_mode:get_int()==0 then
                            jitter_delais_item:set_float(1)
                            standing_amount:set_int(-180)
                            menu:get_reference( "Rage", "Anti-Aim", "Standing", "add" ):set_int( 0 );
                            end
                        render:indicator( screen_size.x / 300, screen_size.y / 1.525 , "D216",true, -2 , false ); 
                        end
                else
                    menu:get_reference( "Rage", "Anti-Aim", "Standing", "add" ):set_int( 0 );
                    aa_state_standing:set_bool(true)
                    in_use_stand = true;
                    if fake_amount_check:get_bool() then
                            if antiaim_mode:get_int()==2 then
                            jitter_delais_item:set_float(0.01)
                            standing_amount:set_int(0)
                            menu:get_reference( "Rage", "Anti-Aim", "Standing", "add" ):set_int( -30 );
                            end
                            if antiaim_mode:get_int()==1 then
                            standing_amount:set_int(0)
                            jitter_delais_item:set_float(0)
                            menu:get_reference( "Rage", "Anti-Aim", "Standing", "add" ):set_int( 0 );
                            end
                            if antiaim_mode:get_int()==0 then
                            jitter_delais_item:set_float(1)
                            standing_amount:set_int(0)
                            menu:get_reference( "Rage", "Anti-Aim", "Standing", "add" ):set_int( 0 );
                            end
                    render:indicator( screen_size.x / 300, screen_size.y / 1.525 , "D0",true, -2 , false ); 
                    end
                end
                last_tick_stand = globals.realtime;
            end
        end
    end


    if aa_jitter_item:get_bool()  then
       if aa_desync_invterter_item:get_bool() then
        if last_tick_move + jitter_delais_item:get_float() < globals.realtime then
            if in_use_move then
                aa_state_moving:set_bool(true)
                moving_faketype:set_int(2)
                if fake_amount_check:get_bool() then
                    if antiaim_mode:get_int()==2 then
                        jitter_delais_item:set_float(0.01)
                        move_amount:set_int(-180)
                        menu:get_reference( "Rage", "Anti-Aim", "Moving", "add" ):set_int( -30 );
                        end
                        if antiaim_mode:get_int()==1 then
                        move_amount:set_int(-180)
                        jitter_delais_item:set_float(0.01)
                        menu:get_reference( "Rage", "Anti-Aim", "Moving", "add" ):set_int( 0 );
                        end
                        if antiaim_mode:get_int()==0 then
                        jitter_delais_item:set_float(1)
                        move_amount:set_int(-180)
                        menu:get_reference( "Rage", "Anti-Aim", "Moving", "add" ):set_int( 0 );
                        end
                end
                in_use_move = false;
            else

                aa_state_moving:set_bool(true)
                moving_faketype:set_int(1)
                if fake_amount_check:get_bool() then
                    if antiaim_mode:get_int()==2 then
                        jitter_delais_item:set_float(0.01)
                        move_amount:set_int(0)
                        menu:get_reference( "Rage", "Anti-Aim", "Moving", "add" ):set_int( 30 );
                        end
                        if antiaim_mode:get_int()==1 then
                        move_amount:set_int(0)
                        jitter_delais_item:set_float(0.01)
                        menu:get_reference( "Rage", "Anti-Aim", "Moving", "add" ):set_int( 0 );
                        end
                        if antiaim_mode:get_int()==0 then
                        jitter_delais_item:set_float(1)
                        move_amount:set_int(0)
                        menu:get_reference( "Rage", "Anti-Aim", "Moving", "add" ):set_int( 0 );
                        end
                end
                in_use_move = true;
            end
            last_tick_move = globals.realtime;
        end
    else
         if last_tick_move + jitter_delais_item:get_float() < globals.realtime then
            if in_use_move then
                aa_state_moving:set_bool(true)
                in_use_move = false;
                if fake_amount_check:get_bool() then
                    if antiaim_mode:get_int()==2 then
                        jitter_delais_item:set_float(0.01)
                        move_amount:set_int(-180)
                        menu:get_reference( "Rage", "Anti-Aim", "Moving", "add" ):set_int( -30 );
                        end
                        if antiaim_mode:get_int()==1 then
                        move_amount:set_int(-180)
                        jitter_delais_item:set_float(0.01)
                        menu:get_reference( "Rage", "Anti-Aim", "Moving", "add" ):set_int( 0 );
                        end
                        if antiaim_mode:get_int()==0 then
                        jitter_delais_item:set_float(1)
                        move_amount:set_int(-180)
                        menu:get_reference( "Rage", "Anti-Aim", "Moving", "add" ):set_int( 0 );
                        end
                end
            else
                menu:get_reference( "Rage", "Anti-Aim", "Moving", "add" ):set_int( 0 );
                aa_state_moving:set_bool(true)
                in_use_move = true;
                if fake_amount_check:get_bool() then
                    if antiaim_mode:get_int()==2 then
                        jitter_delais_item:set_float(0.01)
                        move_amount:set_int(0)
                        menu:get_reference( "Rage", "Anti-Aim", "Moving", "add" ):set_int( 30 );
                        end
                        if antiaim_mode:get_int()==1 then
                        move_amount:set_int(0)
                        jitter_delais_item:set_float(0.01)
                        menu:get_reference( "Rage", "Anti-Aim", "Moving", "add" ):set_int( 0 );
                        end
                        if antiaim_mode:get_int()==0 then
                        jitter_delais_item:set_float(1)
                        move_amount:set_int(0)
                        menu:get_reference( "Rage", "Anti-Aim", "Moving", "add" ):set_int( 0 );
                        end
                end
            end
            last_tick_move = globals.realtime;
        end
    end
end

    if aa_jitter_item:get_bool() then
        if aa_desync_invterter_item:get_bool() then

            if last_tick_air + jitter_delais_item:get_float() < globals.realtime then
                if in_use_air then
                aa_state_air:set_bool(true)
                air_faketype:set_int(2)
                in_use_air = false;
                if fake_amount_check:get_bool() then
                    if antiaim_mode:get_int()==2 then
                        jitter_delais_item:set_float(0.01)
                        air_amount:set_int(fake_amount_limit:get_int())
                        menu:get_reference( "Rage", "Anti-Aim", "Air", "add" ):set_int( 0 );
                        end
                        if antiaim_mode:get_int()==1 then
                        air_amount:set_int(-180)
                        jitter_delais_item:set_float(0.01)
                        menu:get_reference( "Rage", "Anti-Aim", "Air", "add" ):set_int( 0 );
                        end
                        if antiaim_mode:get_int()==0 then
                        jitter_delais_item:set_float(1)
                        air_amount:set_int(-180)
                        menu:get_reference( "Rage", "Anti-Aim", "Air", "add" ):set_int( 0 );
                        end
                end
            else
                aa_state_air:set_bool(true)
                 air_faketype:set_int(1)
                in_use_air = true;
                if fake_amount_check:get_bool() then
                    if antiaim_mode:get_int()==2 then
                        jitter_delais_item:set_float(0.01)
                       air_amount:set_int(fake_amount_limit2:get_int())
                         menu:get_reference( "Rage", "Anti-Aim", "Air", "add" ):set_int( 0 );
                        end
                        if antiaim_mode:get_int()==1 then
                        air_amount:set_int(0)
                        jitter_delais_item:set_float(0.01)
                        menu:get_reference( "Rage", "Anti-Aim", "Air", "add" ):set_int( 0 );
                        end
                        if antiaim_mode:get_int()==0 then
                        jitter_delais_item:set_float(1)
                       air_amount:set_int(0)
                       menu:get_reference( "Rage", "Anti-Aim", "Air", "add" ):set_int( 0 );
                        end
                end
            end
            last_tick_air = globals.realtime;
        end
--lua by rias#4990 

-- credits to
--some guy i based this shit on (kiwiaa)
-- me for beign lazy

    else
         if last_tick_air + jitter_delais_item:get_float() < globals.realtime then
            if in_use_air then

                aa_state_air:set_bool(true)               
                in_use_air = false;
                if fake_amount_check:get_bool() then
                    if antiaim_mode:get_int()==2 then
                        jitter_delais_item:set_float(0.01)
                        air_amount:set_int(fake_amount_limit:get_int())
                        menu:get_reference( "Rage", "Anti-Aim", "Air", "add" ):set_int( 0 );
                        end
                        if antiaim_mode:get_int()==1 then
                        air_amount:set_int(-180)
                        jitter_delais_item:set_float(0.01)
                        menu:get_reference( "Rage", "Anti-Aim", "Air", "add" ):set_int( 0 );
                        end
                        if antiaim_mode:get_int()==0 then
                        jitter_delais_item:set_float(1)
                        air_amount:set_int(-180)
                        menu:get_reference( "Rage", "Anti-Aim", "Air", "add" ):set_int( 0 );
                        end
                end
            else
--lua by rias#4990 

-- credits to
--some guy i based this shit on (kiwiaa)
-- me for beign lazy

                aa_state_air:set_bool(true)
                if fake_amount_check:get_bool() then
                    if antiaim_mode:get_int()==2 then
                        jitter_delais_item:set_float(0.01)
                       air_amount:set_int(fake_amount_limit2:get_int())
                       menu:get_reference( "Rage", "Anti-Aim", "Air", "add" ):set_int( 0 );
                        end
                        if antiaim_mode:get_int()==1 then
                        air_amount:set_int(0)
                        jitter_delais_item:set_float(0.01)
                        menu:get_reference( "Rage", "Anti-Aim", "Air", "add" ):set_int( 0 );
                        end
                        if antiaim_mode:get_int()==0 then
                        jitter_delais_item:set_float(1)
                       air_amount:set_int(0)
                       menu:get_reference( "Rage", "Anti-Aim", "Air", "add" ):set_int( 0 );
                        end
                end

                in_use_air = true;
            end
            last_tick_air = globals.realtime;
        end
    end
end
end

--lua by rias#4990 

-- credits to
--some guy i based this shit on (kiwiaa)
-- me for beign lazy

if spam_e:get_bool() then

    if aa_desync_invterter_item:get_bool() then
     
        if last_tick_stand + jitter_delais_item:get_float() < globals.realtime then
            if in_use_stand then
                enable_spam:set_bool(true)
            else
                enable_spam:set_bool(false)
            end
            last_tick_stand = globals.realtime;
        end
    else
        if last_tick_stand + jitter_delais_item:get_float() < globals.realtime then
            if in_use_stand then
                enable_spam:set_bool(true)
            else
                enable_spam:set_bool(false)
            end
            last_tick_stand = globals.realtime;
        end
    end
end
--lua by rias#4990 

-- credits to
--some guy i based this shit on (kiwiaa)
-- me for beign lazy

----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------
---------------------------------------fakewalk-----------------------------------------
----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------
--inputs
local render = fatality.render
local config = fatality.config
local menu = fatality.menu
local cvar = csgo.interface_handler:get_cvar( )
local engine_client = csgo.interface_handler:get_engine_client( )
local entity_list = csgo.interface_handler:get_entity_list( )
local global_vars = csgo.interface_handler:get_global_vars( )
local input = fatality.input

--menu checkbox
local fakewalk_item = config:add_item( "fakewalk_rage_v2", 0.0 )
local fakewalk_checkbox = menu:add_checkbox( "Fakewalk", "rage", "anti-aim", "general", fakewalk_item )

--references
local slowwalk = menu:get_reference( "RAGE", "AIMBOT", "Aimbot", "Slide" )
local autostop_off_auto = menu:get_reference( "RAGE", "WEAPONS", "Auto", "Autostop" )
local autostop_off_awp = menu:get_reference( "RAGE", "WEAPONS", "AWP", "Autostop" )
local autostop_off_pistols = menu:get_reference( "RAGE", "WEAPONS", "Pistols", "Autostop" )
local autostop_off_scout = menu:get_reference( "RAGE", "WEAPONS", "Scout", "Autostop" )
local autostop_off_heavy_pistols = menu:get_reference( "RAGE", "WEAPONS", "Heavy pistols", "Autostop" )
local autostop_off_other = menu:get_reference( "RAGE", "WEAPONS", "Other", "Autostop" )

--cvars
sidespeed = cvar:find_var( "cl_sidespeed" )

forwardspeed = cvar:find_var( "cl_forwardspeed" )

backspeed = cvar:find_var( "cl_backspeed" )

--newspeed function
function newspeed( new_speed )
    if ( sidespeed:get_int( ) == 450 and new_speed == 450 ) then
        return
    end
     sidespeed:set_float( new_speed )
     forwardspeed:set_float( new_speed )
     backspeed:set_float( new_speed )
end

--switches and tickcounts
local switch_bool = false
local switch_bool2 = false
local switch_bool3 = false
local tickcount = 0
local tickcount2 = 0
local tick = math.floor( 1.0 / global_vars.interval_per_tick )

function on_paint()
    --if you arent in game, returnghu
    if not engine_client:is_in_game( ) then
       return end
        
    local local_player = entity_list:get_localplayer( )

    --if you arent alive, return
    if not local_player:is_alive( ) then
        return end

    --define shift key (its binded on shift)    
    local shift_key = input:is_key_down( 16 )
    
    --if not on shift key, set speed value to normal
    if not shift_key then
        newspeed( 450 )    
        autostop_off_auto:set_int( 1 )
        autostop_off_awp:set_int( 1 )
        autostop_off_pistols:set_int( 1 )
        autostop_off_scout:set_int( 1 )
        autostop_off_heavy_pistols:set_int( 1 )
        autostop_off_other:set_int( 1 )
    else --else fakewalk code
        if fakewalk_item:get_bool( ) then
            slowwalk:set_bool( false )
            autostop_off_auto:set_int( 0 )
            autostop_off_awp:set_int( 0 )
            autostop_off_pistols:set_int( 0 )
            autostop_off_scout:set_int( 0 )
            autostop_off_heavy_pistols:set_int( 0 )
            autostop_off_other:set_int( 0 )
            if ( global_vars.tickcount > ( tickcount + 7 ) ) then     
                tickcount = global_vars.tickcount
                switch_bool = not switch_bool
                switch_bool2 = not switch_bool2
                switch_bool3 = not switch_bool3
                
                local final_val = 250 * 100 / 100  
                if switch_bool3 then
                    if switch_bool2 then
                        if switch_bool then
                            newspeed( 240 )
                        else
                            newspeed( final_val )
                        end    
                    else
                        if switch_bool then
                            newspeed( 48 )
                        else
                            newspeed( final_val / 15 )
                        end
                    end    
                else
                    newspeed( 14 )
                end
            end    
        end
    end
end --end

local callbacks = fatality.callbacks
----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------
---------------------------------------fakewalk-----------------------------------------
----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------




























callbacks:add( "paint", on_paint )
callbacks:add("paint", switch)