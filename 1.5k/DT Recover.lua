--Reference
local fakeduck = ui.reference("RAGE", "Other", "Duck peek assist")
local doubleTap,dt_key = ui.reference("RAGE", "Other", "Double Tap");

-- UI 
local enable = ui.new_checkbox("RAGE", "Other", "Enable Delay")


-- Cache
local enemy = true;
local shots = 0;
local nextReset = 0;
local shd_reset = false;
-- Disables double tap 
local function DisableDoubleTap()
ui.set(doubleTap,false)
end
--Enables double tap
local function EnableDoubleTap()
ui.set(doubleTap,true)
end
--main event


client.set_event_callback("paint", function()
    local entindex = entity.get_local_player()
    local active_weapon = entity.get_prop(entindex, "m_hActiveWeapon")
    if entindex == nil or not entity.is_alive(entindex) or active_weapon == nil then
        return
    end

	
	if ui.get(enable) then
		if ui.get(dt_key) then
			if (shots ~= 0)then
				DisableDoubleTap();
				shd_reset = true
			end
		end

	
		if shd_reset == true then
			if (globals.realtime() >= nextReset) then
				shots = 0;
				EnableDoubleTap()
				shd_reset = false
				nextReset = globals.realtime() + 1.5;
			end	
		end
	end
end)
--log shots	
client.set_event_callback("aim_fire", function(_)
    shots = shots + 1;
end);

client.set_event_callback("setup_command", function(cmd) 

    if client.key_state(0x01) then
           shots = shots + 1;
    end


end)