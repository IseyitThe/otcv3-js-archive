-- Thanks alot to duk, aviarita and w7rus
local shared    = ui.reference("Visuals", "Other Esp", "Shared ESP")
local resupdate = ui.reference("Visuals", "Other Esp", "Restrict shared ESP updates")
local namesteal = ui.reference("Misc", "Miscellaneous", "Steal player name")
local selected  = ui.reference("Players", "Players", "Player List")
local origName  = cvar.name:get_string()
local origRes   = ui.get(resupdate)
local origShare = ui.get(shared)

local enabled   = ui.new_checkbox    ("Lua", "A", "Activate Troll-Name")
local box1      = ui.new_checkbox    ("LUA", "A", "Box1")
local box2      = ui.new_checkbox    ("LUA", "A", "Box2")
local box3      = ui.new_checkbox    ("LUA", "A", "Box3")
local box4      = ui.new_checkbox    ("LUA", "A", "Take Value From Console")
local multi     = ui.new_multiselect ("LUA", "A", "Modifiers", "Auto-Disconnect", "Auto-Disconnect (Damage)", "Auto-Revert Name")
local textbox   = ui.new_textbox     ("Lua", "A", "Text")

ui.set_visible(box1, false)
ui.set_visible(box2, false)
ui.set_visible(box3, false)


local function sync1()
    local Selected = ui.get(multi)
    for i=1, #Selected do
    if Selected[i] == "Auto-Disconnect"           then ui.set(box1, true) end
    if Selected[i] == "Auto-Disconnect (Damage)"  then ui.set(box2, true) end     
    if Selected[i] == "Auto-Revert Name"          then ui.set(box3, true) end
    end
    if next(ui.get(multi)) == nil then
        ui.set(box1, false)
        ui.set(box2, false)
        ui.set(box3, false)
    end
end

local function sync2()
    local Selected = ui.get(multi)
    for i=1, #Selected do
    if Selected[i] ~= "Auto-Disconnect"           then ui.set(box1, false) end
    if Selected[i] ~= "Auto-Disconnect (Damage)"  then ui.set(box2, false) end       
    if Selected[i] ~= "Auto-Revert Name"          then ui.set(box3, false) end
    end
    sync1()
end

local function test()
    client.delay_call(0.1, test)
    if not ui.get(enabled) then return end
    sync2()
end
test()

local function setName(name)
    client.set_cvar("name", name)
end

local function voteName()
        local currentName = ''
        local tempName    = ''
        local val         = nil
            if ui.get(box4) then val = client.get_cvar("r_eyemove") else val = ui.get(textbox) end
        for _ = 1, 26 do
        tempName = tempName .. "\n";
    end
        tempName = tempName .. val;
        for _ = 1, 60 do
        tempName = tempName .. "\n";
    end
        currentName = tempName;
        setName(currentName);
end

local function bannedName()
        local val  = nil
        local name = nil
            if ui.get(box4) then val = client.get_cvar("r_eyegloss") name = string.len(val) else val = ui.get(textbox) name = string.len(val) end
        local meme = ""
        if(name < 2) and (name > 0)  then
            meme =" 👌 👌 👌 👌 👌 👌 👌 👌 👌 👌 👌 👌 "
    elseif(name < 3) and (name > 1)  then
            meme =" 👌 👌 👌 👌 👌 👌 👌 👌 👌 👌 👌 "
    elseif(name < 4) and (name > 2)  then
            meme =" 👌 👌 👌 👌 👌 👌 👌 👌 👌 👌 "
    elseif(name < 5) and (name > 3)  then
            meme =" 👌 👌 👌 👌 👌 👌 👌 👌 👌 "
    elseif(name < 6) and (name > 4)  then
            meme =" 👌 👌 👌 👌 👌 👌 👌 👌 "
    elseif(name < 7) and (name > 5)  then
            meme =" 👌 👌 👌 👌 👌 👌 👌 "
    elseif(name < 8) and (name > 6)  then
            meme =" 👌 👌 👌 👌 👌 👌 "
    elseif(name < 9) and (name > 7)  then
            meme =" 👌 👌 👌 👌 👌 "
    elseif(name < 10) and (name > 8) then
            meme =" 👌 👌 👌 👌 "
    elseif(name < 99) and (name > 9) then
            client.log("Names above 9 characters don't work properly")
    end
        if ui.get(box1) then 
            client.delay_call(0.01, setName(" \x07" .. val .. " has been permanently banned from official CS:GO servers." .. meme .. "\x01 👌 "))
            client.delay_call(0.8, client.exec, "disconnect")
            client.delay_call(2.8, setName, (origName))
            client.delay_call(5.2, client.log("Automatically disconnected from the server after setting Banned-Name."))   
        else
            setName(" \x07" .. val .. " has been permanently banned from official CS:GO servers." .. meme .. "\x01You")
    end
end

local function bannedName2()
    local plistval = entity.get_player_name(ui.get(selected))
    local name = string.len(plistval)
    local meme = ""
        if(name < 2) and (name > 0)  then
            meme =" 👌 👌 👌 👌 👌 👌 👌 👌 👌 👌 👌 👌 "
    elseif(name < 3) and (name > 1)  then
            meme =" 👌 👌 👌 👌 👌 👌 👌 👌 👌 👌 👌 "
    elseif(name < 4) and (name > 2)  then
            meme =" 👌 👌 👌 👌 👌 👌 👌 👌 👌 👌 "
    elseif(name < 5) and (name > 3)  then
            meme =" 👌 👌 👌 👌 👌 👌 👌 👌 👌 "
    elseif(name < 6) and (name > 4)  then
            meme =" 👌 👌 👌 👌 👌 👌 👌 👌 "
    elseif(name < 7) and (name > 5)  then
            meme =" 👌 👌 👌 👌 👌 👌 👌 "
    elseif(name < 8) and (name > 6)  then
            meme =" 👌 👌 👌 👌 👌 👌 "
    elseif(name < 9) and (name > 7)  then
            meme =" 👌 👌 👌 👌 👌 "
    elseif(name < 10) and (name > 8) then
            meme =" 👌 👌 👌 👌 "
    elseif(name < 99) and (name > 9) then
            client.log("Names above 9 characters don't work properly")
    end
    if ui.get(box1) then 
        client.delay_call(0.01, setName(" \x07" .. plistval .. " has been permanently banned from official CS:GO servers." .. meme .. "\x01 👌 "))
        client.delay_call(0.8, client.exec, "disconnect")
        client.delay_call(2.8, setName, (origName))
        client.delay_call(5.2, client.log("Automatically disconnected from the server after setting Banned-Name."))
    else
        setName(" \x07" .. plistval .. " has been permanently banned from official CS:GO servers." .. meme .. "\x01You");
    end
end

local function handleUpdate()
    if ui.is_menu_open() then
        ui.set(resupdate, true)
        ui.set(shared, true)
        else
        ui.set(resupdate, origRes)
        ui.set(shared, origShare)
    end
end

local function killMe()
    if ui.get(enabled) then
        handleUpdate()
    end
end

client.set_event_callback("paint", killMe)

local button1    = ui.new_button   ("Lua", "A", "Set Vote-Name", voteName)
local button2    = ui.new_button   ("Lua", "A", "Set Banned-Name", bannedName)
local button3    = ui.new_button   ("Players", "Players", "Set Banned-Name", bannedName2)

local function consoleHelp()
        if ui.get(box4) then
        client.exec("clear; status")
        client.log('Console command for Vote-Name value is "r_eyemove"')   
        client.log('Console command for Banned-Name value is "r_eyegloss"')
        ui.set_visible(textbox, false)
    else
        if ui.get(enabled) then   
        ui.set_visible(textbox, true)   
        end
    end
end   

local function handleMenu()
    local state = ui.get(enabled)
        ui.set_visible(multi, state)
        ui.set_visible(box4, state)
        ui.set_visible(textbox, state)
        ui.set_visible(button1, state)
        ui.set_visible(button2, state)
        ui.set_visible(button3, state)
    if state then
        origName  = cvar.name:get_string()
        origRes   = ui.get(resupdate)
        origShare = ui.get(shared)
        ui.set(namesteal, true)
        setName("\n\xAD\xAD\xAD\xAD")
    else
        setName(origName)
        ui.set(resupdate, origRes)
        ui.set(shared, origShare)
        ui.set(box1, false)
        ui.set(box2, false)
        ui.set(box3, false)
        ui.set(box4, false)
    end
end

handleMenu()
ui.set_callback(enabled, handleMenu)
ui.set_callback(box4, consoleHelp)

client.set_event_callback("player_hurt", function(e) -- thx 2 w7rus
    local localEntPlayer            = entity.get_local_player()
    local localEntPlayer_iTeamNum   = entity.get_prop(localEntPlayer, "m_iTeamNum")
    local victimIsTeammate = entity.get_prop(client.userid_to_entindex(e.userid), "m_iTeamNum") == localEntPlayer_iTeamNum
    local attackerIsLocalPlayer = client.userid_to_entindex(e.attacker) == localEntPlayer
    if victimIsTeammate and attackerIsLocalPlayer then
        if ui.get(box2) then ui.set(enabled, false) handleMenu() client.delay_call(0.8, client.exec, "disconnect") print("Reverted name back to normal and Disconnected from the server after damaging a teammate.")
    elseif ui.get(box3) then ui.set(enabled, false) handleMenu() print("Reverted name back to normal and disabled the main checkbox for the script.") end
    end
end)

client.set_event_callback("vote_cast", function(event) -- my peanut brain can't do any better than this
    local local_player  = entity.get_local_player()   
    local currentName   = entity.get_player_name(local_player)
    local playerName    = entity.get_player_name(event.entityid)   
     if not ui.get(box3) then return end
     if not event.team == entity.get_prop(local_player, "m_iTeamNum") then return end
     if playerName == currentName then ui.set(enabled, false) handleMenu() print("Reverted name back to normal (AFTER A VOTE) and disabled the main checkbox for the script.") end
end)