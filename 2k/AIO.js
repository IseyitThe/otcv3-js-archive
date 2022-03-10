UI.AddLabel("=-=-=-=-=-=-=AIO=-=-=-=-=-=-=")
//antibruteforce
function vec_sub(A, B)
{
    var C = []
    var i;
    for (i = 0; i < 3; i++) {
        C[i] = A[i] - B[i]
    }
    return C
}

function vec_div(A, B)
{
    var C = []
    var i;
    for (i = 0; i < 3; i++) {
        C[i] = A[i] / B
    }
    return C
}

function vec_add(A, B)
{
    var C = []
    var i;
    for (i = 0; i < 3; i++) {
        C[i] = A[i] + B[i]
    }
    return C
}

function vec_mul(A, B)
{
    var C = []
    var i;
    for (i = 0; i < 3; i++) {
        C[i] = A[i] * B
    }
    return C
}

function dotProduct(A, B) 
{ 
    var product = 0.0
    var i;
    for (i = 0; i < 3; i++) {
        product += A[i] * B[i]
    }
    return product; 
} 

function getDistance(A, B)
{
    var delta = vec_sub(A, B)
    return Math.sqrt(delta[0]*delta[0]+delta[1]*delta[1]+delta[2]*delta[2])
}

function computeDistance(A, B, C) 
{
    var d = vec_div(vec_sub(C, B), getDistance(C, B)) // vec3
    var v = vec_sub(A, B) // vec3
    var t = dotProduct(v, d) // vec3
    var P = vec_add(B, vec_mul(d, t))
    return getDistance(P,A)
}

//lowdelta
var jitter_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset")
var yaw_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset")
UI.AddCheckbox("AntiAim");
UI.AddHotkey("Dangerous");
UI.AddHotkey("At Targets");
UI.AddHotkey("Ideal Yaw");
UI.AddSliderInt("Max Brute Distance", 0, 60)
UI.AddCheckbox("Anti-Onetap")
function Safe_Head()
{
    localplayer_index = Entity.GetLocalPlayer( );


        if (UI.GetValue("Misc", "JAVASCRIPT", "AntiAim") && UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Dangerous"))
        {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 10);
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 4);
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(5);
            AntiAim.SetRealOffset(-7);
        }
        else
        {
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", jitter_cache);
            AntiAim.SetOverride(0);
            
        }
}

var shots = 0 
function onBulletImpact(){
    var ent = Entity.GetEntityFromUserID(Event.GetInt("userid"))
    var local = Entity.GetLocalPlayer()
    if(ent == local || Entity.IsTeammate(ent))
        return
    var pos = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")]
    var delta = computeDistance(Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0), Entity.GetEyePosition(ent), pos)
    Cheat.Print(delta + " delta\n")
    if(delta < UI.GetValue("Max Brute Distance"))
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter")
    if(UI.GetValue("Anti-Onetap")){
        shots++
        if(!(shots % 4)) UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter")
    }
}
function playerhurt(){
    if(Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer())
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter")
}
Cheat.RegisterCallback("player_hurt", "playerhurt")
Cheat.RegisterCallback("bullet_impact", "onBulletImpact")

function Main()
{
    Cheat.RegisterCallback("CreateMove", "Safe_Head");
}
Main();


//?????? ? ????????????(???????? ???????)
var screen_size = Global.GetScreenSize();
var DT = 1;


function drawString()
{
  
 
    isDoubletap = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
    isTargets = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "At Targets");
    isLowDelta = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Dangerous");
    isFakeYaw = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Dangerous");
    isOnShot = UI.IsHotkeyActive("Rage", "Exploits", "Hide shots");
    isIdealYaw = UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Ideal Yaw");
    if (UI.GetValue("Misc", "JAVASCRIPT", "AntiAim") && UI.IsHotkeyActive("Misc", "JAVASCRIPT", "At Targets"))
        {
            UI.SetValue("Anti-Aim", "At targets", true);
            
        }   
    else
        {
            UI.SetValue("Anti-Aim", "At targets", false);
        }
    //ideal yaw omg
    if (UI.GetValue("Misc", "JAVASCRIPT", "AntiAim") && UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Ideal Yaw"))
        {
            UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', true);   
            Render.String(screen_size[0] /2.013 - 15, screen_size[1] /2.1 +45, 0, isIdealYaw ? "IDEAL YAW" : "FAKE YAW", isIdealYaw ? [ 224, 159, 94, 255 ] : [ 144, 101, 214, 255 ],2 );
        }
    else
        {
            UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', false);
            Render.String(screen_size[0] /2.013 - 15, screen_size[1] /2.1 +45, 0, isFakeYaw ? "FAKE YAW" : "FAKE YAW", isFakeYaw ? [ 79, 76, 84, 255 ] : [ 144, 101, 214, 255 ],2 );
            
            
        }
    if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap"))
        {
            UI.SetValue("Rage", "Exploits", "Hide shots", false);
            UI.SetValue("Rage", "Exploits", "Doubletap", true);
            Render.String(screen_size[0] /2.013  + 2, screen_size[1] /2.1 +75, 0, isDoubletap ? "DT" : "DT", isDoubletap ? [ 101, 163, 214, 255] : [ 101, 163, 214, 0 ],2 );
            
        }   
    else if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots"))
        {
            UI.SetValue("Rage", "Exploits", "Hide shots", true);
            UI.SetValue("Rage", "Exploits", "Doubletap", false);
            Render.String(screen_size[0] /2.013 + 2, screen_size[1] /2.1 +75, 0, isOnShot ? "AA" : "AA", isOnShot ? [ 101, 163, 214, 255 ] : [ 144, 101, 214, 0 ],2 );
        }
    else
        {
            UI.SetValue("Rage", "Exploits", "Doubletap", false);
            UI.SetValue("Rage", "Exploits", "Hide shots", false);
        }
    {
        
        
        Render.String(screen_size[0] /2.013 - 18, screen_size[1] /2.1 +55, 0, isLowDelta ? "DANGEROUS" : "DANGEROUS", isLowDelta ? [ 222, 7, 82, 255 ] : [ 79, 76, 84, 255 ],2 );
        Render.String(screen_size[0] /2.013 - 12, screen_size[1] /2.1 +35, 0, isTargets ? "DYNAMIC" : "DEFAULT", isTargets ? [ 144, 101, 214, 255 ] : [ 79, 76, 84, 255 ],2 );
    }   
}
Global.RegisterCallback("Draw", "drawString")



var hittime = 0;
var FREESTAND = false;

function OnHurt()
{
if (Entity.GetEntityFromUserID(Event.GetInt("userid")) !== Entity.GetLocalPlayer()) return;
var hitbox = Event.GetInt('hitgroup');

if (hitbox == 1 || hitbox == 6 || hitbox == 7)
{
hittime = Global.Curtime();
}
}

function Freestanding()
{
if (!UI.GetValue("Misc", "JAVASCRIPT", "Freestand On Hit"))
return;

FREESTAND = false;

if ((hittime + UI.GetValue("Misc", "JAVASCRIPT", "Freestand Duration") > Global.Curtime()))
FREESTAND = true;

UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", FREESTAND);
}

function main()
{
UI.AddCheckbox("Freestand On Hit");
UI.AddSliderFloat("Freestand Duration", 0, 5);

Cheat.RegisterCallback("player_hurt", "OnHurt");
Cheat.RegisterCallback("Draw", "Freestanding");
}
main()

const menu =
{
    menu_types:
    {
        TYPE_VALUE: 0,
        TYPE_COLOR: 1,
        TYPE_KEYBIND: 2,
        TYPE_REFERENCE: 3
    },

    menu_array: [], //where the items lie lol

    //I understand that all of those can be generalized, but this way the code is more clear.
    create_checkbox: function(created_var_name)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddCheckbox(created_var_name), is_item_visible: true}) - 1; //I guess the variable naming is a bit gay rofl
    },

    create_slider_int: function(created_var_name, created_var_min, created_var_max)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddSliderInt(created_var_name, created_var_min, created_var_max), is_item_visible: true}) - 1;
    },

    create_slider_float: function(created_var_name, created_var_min, created_var_max)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddSliderFloat(created_var_name, created_var_min, created_var_max), is_item_visible: true}) - 1;
    },

    create_dropdown: function(created_var_name, created_var_dropdown_array)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddDropdown(created_var_name, created_var_dropdown_array), is_item_visible: true}) - 1;
    },

    create_multi_dropdown: function(created_var_name, created_var_dropdown_array)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_VALUE, var_name: UI.AddMultiDropdown(created_var_name, created_var_dropdown_array), is_item_visible: true}) - 1;
    },

    create_colorpicker: function(created_var_name)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_COLOR, var_name: UI.AddColorPicker(created_var_name), is_item_visible: true}) - 1;
    },

    create_keybind: function(created_var_name)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_KEYBIND, var_name: UI.AddHotkey(created_var_name), is_item_visible: true}) - 1;
    },

    create_menu_reference: function(var_path, var_type)
    {
        return this.menu_array.push({type: this.menu_types.TYPE_REFERENCE, var_name: var_path, is_item_visible: true, reference_subtype: var_type}) - 1;
    },

    get_item_value: function(var_index)
    {
        if(typeof(this.menu_array[var_index]) != "undefined")
        {
            const var_type = this.menu_array[var_index].type == this.menu_types.TYPE_REFERENCE ? this.menu_array[var_index].reference_subtype : this.menu_array[var_index].type;
            switch(var_type)
            {
                case this.menu_types.TYPE_VALUE:
                    return UI.GetValue.apply(null, this.menu_array[var_index].var_name); //Why isn't UI.GetValue good for all menu items? llama pls fix
                case this.menu_types.TYPE_COLOR:
                    return UI.GetColor.apply(null, this.menu_array[var_index].var_name);
                case this.menu_types.TYPE_KEYBIND:
                    return UI.IsHotkeyActive.apply(null, this.menu_array[var_index].var_name);
                default:
                    throw new Error("[onetap] invalid type specified for get_script_item_value call (variable name " + menu_array[var_index].var_name + ", specified type: " + type + ")\n");
            }
        }
        throw new Error("[onetap] invalid menu item specified for get_script_item_value\n");
    },

    set_item_visibility: function(var_index, visibility_status)
    {
        if(typeof(this.menu_array[var_index]) != "undefined")
        {
            if(this.menu_array[var_index].is_item_visible != visibility_status && UI.IsMenuOpen())
            {
                UI.SetEnabled.apply(null, this.menu_array[var_index].var_name.concat(visibility_status));
                this.menu_array[var_index].is_item_visible = visibility_status;
            }
        }
        else
        {
            throw new Error("[onetap] invalid menu item specified for set_item_visibility\n");
        }
    },

    set_item_value: function(var_index, new_value)
    {
        if(typeof(this.menu_array[var_index]) != "undefined")
        {
            const var_type = this.menu_array[var_index].type == this.menu_types.TYPE_REFERENCE ? this.menu_array[var_index].reference_subtype : this.menu_array[var_index].type;
            switch(var_type)
            {
                case this.menu_types.TYPE_VALUE:
                    UI.SetValue.apply(null, this.menu_array[var_index].var_name.concat(new_value));
                    break;
                case this.menu_types.TYPE_COLOR:
                    UI.SetColor.apply(null, this.menu_array[var_index].var_name.concat(new_value));
                    break;
                case this.menu_types.TYPE_KEYBIND:
                    const keybind_state = this.get_item_value(var_index);
                    if(keybind_state != new_value)
                    {
                        UI.ToggleHotkey.apply(null, this.menu_array[var_index].var_name); //Requires hotkey to be in "Toggle" mode :(
                    }
                    break;
                default:
                    throw new Error("[onetap] invalid type specified for set_item_value (variable name " + menu_array[var_index].var_name + ", specified type: " + this.menu_array[var_index].type + ")\n");
            }
        }
        else
        {
            throw new Error("[onetap] invalid menu item specified for set_item_value\n");
        }
    }
};

const master_switch = menu.create_checkbox("Doubletap improvements");
const doubletap_speed = menu.create_slider_int("Speed", 0, 4);

const doubletap_enabled_hotkey_reference = menu.create_menu_reference(["Rage", "Doubletap"], menu.menu_types.TYPE_KEYBIND);
const doubletap_enabled_value_reference = menu.create_menu_reference(["Rage", "Doubletap"], menu.menu_types.TYPE_VALUE);

const utility = { log_prefix: "[doubletap_improvements] ", log_prefix_col: [0, 255, 0, 200], log: function(string) { Cheat.PrintColor(this.log_prefix_col, this.log_prefix); Cheat.Print(string + "\n"); } };

const able_to_shift_shot = function(local, ticks_to_shift) //From Salvatore :)
{
    const server_time = (Entity.GetProp(local, "CCSPlayer", "m_nTickBase") - ticks_to_shift) * Globals.TickInterval();
    return server_time > Entity.GetProp(local, "CCSPlayer", "m_flNextAttack") && server_time > Entity.GetProp(Entity.GetWeapon(local), "CBaseCombatWeapon", "m_flNextPrimaryAttack");
};

const on_move = function()
{
    if(menu.get_item_value(doubletap_enabled_value_reference) && menu.get_item_value(doubletap_enabled_hotkey_reference) && menu.get_item_value(master_switch))
    {
        const desired_doubletap_speed = menu.get_item_value(doubletap_speed);

        Exploit.OverrideShift(12 + desired_doubletap_speed); // suicide 16 ticks lmao shift
        Exploit.OverrideTolerance(4 - desired_doubletap_speed); //yes i know its clamped to 1 but its PRETTY this way!

        const local = Entity.GetLocalPlayer();

        const exploit_charge = Exploit.GetCharge();
        exploit_charge != 1 ? Exploit.EnableRecharge() : Exploit.DisableRecharge();

        const able_to_shift = able_to_shift_shot(local, 12 + desired_doubletap_speed);

        const can_doubletap = exploit_charge == 1 && able_to_shift;
        var should_recharge_doubletap = !can_doubletap && able_to_shift;

        const enemies = Entity.GetEnemies().filter(function(entity_index) { return Entity.IsValid(entity_index) && Entity.IsAlive(entity_index) && !Entity.IsDormant(entity_index); });

        const local_eyepos = Entity.GetEyePosition(local);

        if(can_doubletap || should_recharge_doubletap)
        {
            for(var i = 0; i < enemies.length; i++)
            {
                const entity_index = enemies[i];
                const entity_health = Entity.GetProp(entity_index, "CBasePlayer", "m_iHealth");
                for(var hitbox = 2; hitbox <= 4; hitbox++)
                {
                    const hitbox_position = Entity.GetHitboxPosition(entity_index, hitbox);
                    if(typeof(hitbox_position) != "undefined")
                    {
                        const trace = Trace.Bullet(local, entity_index, local_eyepos, hitbox_position);
                        if(can_doubletap && (trace[1] >= entity_health / 2))
                        {
                            Ragebot.ForceTargetMinimumDamage(entity_index, entity_health / 2);
                        }
                        else if(should_recharge_doubletap && trace[2])
                        {
                            should_recharge_doubletap = false; //DO NOT RECHARGE DOUBLETAP IF THERE'S SOMEONE VISIBLE
                            break;
                        }
                    }
                }
            }
        }
       

        if(should_recharge_doubletap)
        {
            Exploit.DisableRecharge();
            Exploit.Recharge();
        }
    }
};

const on_unload = function()
{
    Exploit.EnableRecharge();
};

Cheat.RegisterCallback("CreateMove", "on_move");
Cheat.RegisterCallback("Unload", "on_unload");

utility.log("DT loaded ");
UI.AddLabel("=-=-=-=-=-=-=^_^=-=-=-=-=-=-=")
