UI.AddMultiDropdown( "AutoMindmg weapons", [ "Auto", "Scout", "AWP", "R8" ] );
UI.AddHotkey("Auto DT Hc");
var exploits = ["Rage", "Exploits"];
function onCM(){
    localplayer_index = Entity.GetLocalPlayer( );
    localplayer_weapon = Entity.GetWeapon(localplayer_index);
    weapon_name = Entity.GetName(localplayer_weapon);
    inaccuracy = Local.GetInaccuracy();
    spread = Local.GetSpread();
    localPlayer_index = Entity.GetLocalPlayer();
    localPlayer_eyepos = Entity.GetEyePosition(localPlayer_index);
    const aumnwp = UI.GetValue("AutoMindmg weapons");
    var target = Ragebot.GetTarget()
    var health = Entity.GetProp(target, "CBasePlayer", "m_iHealth")
    var charge = Exploit.GetCharge()
    var active = UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && charge == 1
    for ( i = 0; i < target.length; i++){
        hitbox_pos_head = Entity.GetHitboxPosition(target[i], 0);
        hitbox_pos_body = Entity.GetHitboxPosition(target[i], 3);
        hitbox_pos_thorax = Entity.GetHitboxPosition(target[i], 4);
        hitbox_pos_chest = Entity.GetHitboxPosition(target[i], 5);
        hitbox_pos_upp_chest = Entity.GetHitboxPosition(target[i], 6);
        result_head = Trace.Line(localPlayer_index, localPlayer_eyepos, hitbox_pos_head);
        result_body = Trace.Line(localPlayer_index, localPlayer_eyepos, hitbox_pos_body);
        result_thorax = Trace.Line(localPlayer_index, localPlayer_eyepos, hitbox_pos_thorax);
        result_chest = Trace.Line(localPlayer_index, localPlayer_eyepos, hitbox_pos_chest);
        result_upp_chest = Trace.Line(localPlayer_index, localPlayer_eyepos, hitbox_pos_upp_chest);
    }
        if(result_head = "undefined")return;
        if(result_body = "undefined")return;
        if(result_thorax = "undefined")return;
        if(result_chest = "undefined")return;
        if(result_upp_chest = "undefined")return;
    for (k = 0; k < 12; k++)   {
        if(active && inaccuracy > 0.3 && spread > 0.3 && aumnwp & (1 << 0) && weapon_name == "scar 20" && Entity.IsAlive(target) && Entity.IsValid(target)){
            Ragebot.OverrideMinimumDamage(k, health / 3)}
        else if(active && inaccuracy < 0.3 && spread < 0.3 && aumnwp & (1 << 0) && weapon_name == "scar 20" && Entity.IsAlive(target) && Entity.IsValid(target)){
            Ragebot.OverrideMinimumDamage(k, (health / 2) + 3)}
        else if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && aumnwp & (1 << 0) && weapon_name == "scar 20" && Entity.IsAlive(target) && Entity.IsValid(target)){
            Ragebot.OverrideMinimumDamage(k, health)}
        else if(active && inaccuracy > 0.3 && spread > 0.3 && aumnwp & (1 << 0) && weapon_name == "g3sg1" && Entity.IsAlive(target) && Entity.IsValid(target)){
            Ragebot.OverrideMinimumDamage(k, health / 3)}
        else if(active && inaccuracy < 0.3 && spread < 0.3 && aumnwp & (1 << 0) && weapon_name == "g3sg1" && Entity.IsAlive(target) && Entity.IsValid(target)){
            Ragebot.OverrideMinimumDamage(k, (health / 2) + 3)}
        else if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && aumnwp & (1 << 0) && weapon_name == "g3sg1" && Entity.IsAlive(target) && Entity.IsValid(target)){
            Ragebot.OverrideMinimumDamage(k, health)}
        else if(inaccuracy > 0.5 && spread > 0.5 && aumnwp & (1 << 3) && weapon_name == "r8 revolver" && Entity.IsAlive(target) && Entity.IsValid(target)){
            Ragebot.OverrideMinimumDamage(k, health / 3)}
        else if(inaccuracy > 0.2 && spread > 0.2 && aumnwp & (1 << 3) && weapon_name == "r8 revolver" && Entity.IsAlive(target) && Entity.IsValid(target)){
            Ragebot.OverrideMinimumDamage(k, health / 2)}
        else if(inaccuracy < 0.15 && spread < 0.15 && aumnwp & (1 << 3) && weapon_name == "r8 revolver" && Entity.IsAlive(target) && Entity.IsValid(target)){
            Ragebot.OverrideMinimumDamage(k, health)}
/*        else if(inaccuracy > 0.5 && spread > 0.5 && aumnwp & (1 << 2) && weapon_name == "awp"){
            Ragebot.OverrideMinimumDamage(k, health / 3)}
        else if(inaccuracy > 0.2 && spread > 0.2 && aumnwp & (1 << 2) && weapon_name == "awp"){
            Ragebot.OverrideMinimumDamage(k, health / 2)}*/
        else if((result_head > 0.80 || result_body > 0.85 || result_thorax > 0.85 || result_chest > 0.85 || result_upp_chest > 0.85) && aumnwp & (1 << 2) && weapon_name == "awp" && Entity.IsAlive(target) && Entity.IsValid(target)){
            Ragebot.OverrideMinimumDamage(k, health)}
        else if((result_head < 0.80 || result_body < 0.85 || result_thorax < 0.85 || result_chest < 0.85 || result_upp_chest < 0.85) && aumnwp & (1 << 2) && weapon_name == "awp" && Entity.IsAlive(target) && Entity.IsValid(target)){
            Ragebot.OverrideMinimumDamage(k, health * 0.75)}
}
}
function dtHC(){
    inaccuracy = Local.GetInaccuracy();
    spread = Local.GetSpread();
    var active2 = UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && charge == 1 && UI.IsHotkeyActive("Auto DT Hc");
    var dthcc = UI.GetValue(exploits, "Doubletap hitchance");
    if(active2 && inaccuracy > 0.3 && spread > 0.3)
        UI.SetValue(exploits, "Doubletap hitchance",(inaccuracy/2.5)*100 + (spread/2.5)*100);
    else if(active2 && inaccuracy < 0.3 && spread < 0.3)
        UI.SetValue(exploits, "Doubletap hitchance", 15);
}
Cheat.RegisterCallback("CreateMove", "onCM", "dtHC")