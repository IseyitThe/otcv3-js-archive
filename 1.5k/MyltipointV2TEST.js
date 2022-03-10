UI.AddHotkey("Override Multipoint");
UI.AddCheckbox("Override Scout MP");
UI.AddSliderInt("Scout Head Multipoint", 0, 100);
UI.AddSliderInt("Scout Body Multipoint", 0, 100);
UI.AddCheckbox("Override Autosniper MP");
UI.AddSliderInt("Auto Head Multipoint", 0, 100);
UI.AddSliderInt("Auto Body Multipoint", 0, 100);
UI.AddCheckbox("Override Pistol MP");
UI.AddSliderInt("Pistol Head Multipoint", 0, 100);
UI.AddSliderInt("Pistol Body Multipoint", 0, 100);
UI.AddCheckbox("Enable Indicator");
UI.AddSliderInt("Indicator X Offset", -1000, 1000);
UI.AddSliderInt("Indicator Y Offset", -1000, 1000);

var OG_Scout_Head = UI.GetValue("Rage", "SCOUT", "Head pointscale");
var OG_Scout_Body = UI.GetValue("Rage", "SCOUT", "Body pointscale");
var OG_Auto_Head = UI.GetValue("Rage", "AUTOSNIPER", "Head pointscale");
var OG_Auto_Body = UI.GetValue("Rage", "AUTOSNIPER", "Body pointscale");
var OG_Pistil_Head = UI.GetValue("Rage", "PISTOL", "Head pointscale");
var OG_Pistol_Body = UI.GetValue("Rage", "PISTOL", "Body pointscale");
var scriptitems = ["Misc", "JAVASCRIPT", "Script Items"];
var OG = false;
screenSize = Render.GetScreenSize();


function appmain() {
    UI_Vis();
    font = Render.AddFont("Verdana", 22, 800);
    xOffset = UI.GetValue(scriptitems, "Indicator X Offset");
    yOffset = UI.GetValue (scriptitems, "Indicator Y Offset");
    areIndicators = UI.GetValue(scriptitems, "Enable Indicator");

    if( UI.IsHotkeyActive(scriptitems, "Override Multipoint") ) {
        if( !OG ) {
            OG_Scout_Head = UI.GetValue("Rage", "SCOUT", "Head pointscale");
            OG_Scout_Body = UI.GetValue("Rage", "SCOUT", "Body pointscale");
            OG_Auto_Head = UI.GetValue("Rage", "AUTOSNIPER", "Head pointscale");
            OG_Auto_Body = UI.GetValue("Rage", "AUTOSNIPER", "Body pointscale");
            OG_Pistol_Head = UI.GetValue("Rage", "PISTOL", "Head pointscale");
            OG_Pistol_Body = UI.GetValue("Rage", "PISTOL", "Body pointscale");
            OG = true;
        }
        if ( areIndicators ) { Render.StringCustom(screenSize[0] / 2 + xOffset, screenSize[1] / 2 + 30 + yOffset, 1, "MULTIPOINT", [0, 255, 0, 255], font); }
        if( getScriptVal("Override Scout MP") ) {
            UI.SetValue("Rage", "SCOUT", "Head pointscale", getScriptVal("Scout Head Multipoint"));
            UI.SetValue("Rage", "SCOUT", "Body pointscale", getScriptVal("Scout Body Multipoint"));
        }
        if( getScriptVal("Override Autosniper MP") ) {
            UI.SetValue("Rage", "AUTOSNIPER", "Head pointscale", getScriptVal("Auto Head Multipoint"));
            UI.SetValue("Rage", "AUTOSNIPER", "Body pointscale", getScriptVal("Auto Body Multipoint"));
        }
        if( getScriptVal("Override Autosniper MP") ) {
            UI.SetValue("Rage", "PISTOL", "Head pointscale", getScriptVal("Pistol Head Multipoint"));
            UI.SetValue("Rage", "PISTOL", "Body pointscale", getScriptVal("Pistol Body Multipoint"));
        }
    } else {
        if( OG ) {
            if( getScriptVal("Override Scout MP") ) {
                UI.SetValue("Rage", "SCOUT", "Head pointscale", OG_Scout_Head);
                UI.SetValue("Rage", "SCOUT", "Body pointscale", OG_Scout_Body);
            }
            if( getScriptVal("Override Autosniper MP") ) {
                UI.SetValue("Rage", "AUTOSNIPER", "Head pointscale", OG_Auto_Head);
                UI.SetValue("Rage", "AUTOSNIPER", "Body pointscale", OG_Auto_Body);
            }
            if( getScriptVal("Override Autosniper MP") ) {
                UI.SetValue("Rage", "PISTOL", "Head pointscale", OG_Pistol_Head);
                UI.SetValue("Rage", "PISTOL", "Body pointscale", OG_Pistol_Body);            
            }
            OG = false;
        }
        if ( areIndicators ) { Render.StringCustom(screenSize[0] / 2 + xOffset, screenSize[1] / 2 + 30 + yOffset, 1, "MULTIPOINT", [255, 0, 0, 255], font); }
    }
}

function UI_Vis() {
    if( !(getScriptVal("Override Scout MP")) ) {
        setVis("Scout Head Multipoint", false);
        setVis("Scout Body Multipoint", false);
    } else {
        setVis("Scout Head Multipoint", true);
        setVis("Scout Body Multipoint", true);
    }
    if( !(getScriptVal("Override Autosniper MP")) ) {
        setVis("Auto Head Multipoint", false);
        setVis("Auto Body Multipoint", false);
    } else {
        setVis("Auto Head Multipoint", true);
        setVis("Auto Body Multipoint", true);
     if( !(getScriptVal("Override Autosniper MP")) ) {
    }
        setVis("Pistol Head Multipoint", false);
        setVis("Pistol Body Multipoint", false);
    } else {
        setVis("Pistol Head Multipoint", true);
        setVis("Pistol Body Multipoint", true);
    }
    if ( !(getScriptVal("Enable Indicator")) ) {
        setVis("Indicator X Offset", false);
        setVis("Indicator Y Offset", false);
    } else {
        setVis("Indicator X Offset", true);
        setVis("Indicator Y Offset", true);
    }
}
function getScriptVal(option) {
    return UI.GetValue(scriptitems, option);
}
function setVis(item, bool) {
    UI.SetEnabled(scriptitems, item, bool);
}
Cheat.RegisterCallback("Draw", "appmain");