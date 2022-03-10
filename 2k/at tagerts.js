

// Global Variables //
var isInAir;
var isStanding;
var isMoving;
var oldTime;
var newTime;
var melee = ["x27zeus", "knifegut", "bayonet", "knifeflip", "karambit", "m9 bayonet", "butterfly knife", "falchion knife", "navaja knife", "shadow daggers", "stiletto knife", "bowie knife", "bowie knife", "huntsman knife", "talon knife", "ursus knife", "classic knife", "paracord knife", "survival knife", "nomad knife", "skeleton knife"];
var isActiveInAir;
var isActiveStanding;
var isActiveMoving;
var localplayer_index = Entity.GetLocalPlayer();



// --------------- //

Global.PrintColor([255, 255, 0, 255], "\n------------------------\n[AtTarget Conditional] v1.5 by Ultranite\n------------------------\n");

// UI //
UI.AddHotkey("At Targets in-air");
UI.AddHotkey("At Targets standing");
UI.AddHotkey("At Targets moving");

UI.AddColorPicker("Color of Status");
UI.AddColorPicker("Color of Outline");
UI.AddColorPicker("Color of Text");

UI.AddSliderInt("Size of Text", 0, 41);
UI.AddSliderInt("Size of Status", 0, 250);
UI.AddSliderInt("X Pos of Status", 0, 1150);
UI.AddSliderInt("Y Pos of Status", 0, 600);

UI.AddCheckbox("Show Status");
UI.AddCheckbox("In-Air Knife + Zeus Only");
// -- //



// Functions //
function inAir() {
    var lpIndex = Entity.GetLocalPlayer();
    var lpWeapon = Entity.GetWeapon(lpIndex);
    var wepName = Entity.GetName(lpWeapon);
    var inAirKAZ = UI.GetValue("Script items", "In-Air Knife + Zeus Only", "Enabled");
    var fv = Entity.GetProp(localplayer_index, "CBasePlayer", "m_flFallVelocity");

    isActiveInAir = UI.IsHotkeyActive("Script items", "At Targets in-air");

    if (fv < -1 || fv > 1) {
        if (isActiveInAir == 1) {
            if (Entity.IsAlive(localplayer_index)) {
                if (inAirKAZ == 0) {
                    UI.SetValue("Anti-Aim", "At targets", "Enabled", true);
                    isInAir = 1;
                } else {
                    if (inArray(wepName, melee)) {
                        UI.SetValue("Anti-Aim", "At targets", "Enabled", true);
                        isInAir = 1;
                    }
                }
            } else
            if ((isInAir == 0 || isInAir == undefined) && (isMoving == 0 || isMoving == undefined))
                UI.SetValue("Anti-Aim", "At targets", "Enabled", false);
        }
    }
}

function inArray(string, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == string)
            return true;
    }
}

function standing() {
    var velocity = Entity.GetProp(localplayer_index, "CBasePlayer", "m_vecVelocity[0]");
    var speed = Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
    isActiveStanding = UI.IsHotkeyActive("Script items", "At Targets standing");
    var fv = Entity.GetProp(localplayer_index, "CBasePlayer", "m_flFallVelocity");

    if ((isInAir == 0 && isActiveInAir == 0) && (isMoving == 0 && isActiveMoving == 0) && (isStanding == 0 && isActiveStanding == 0))
        UI.SetValue("Anti-Aim", "At targets", "Enabled", false);



    if (speed < 1.5) {
        if (isInAir == 1) {
            isInAir = 0;
            UI.SetValue("Anti-Aim", "At targets", "Enabled", false);
        }

        if (isMoving == 1) {
            isMoving = 0;
            UI.SetValue("Anti-Aim", "At targets", "Enabled", false);
        }

        if (isActiveStanding == 1) {
            UI.SetValue("Anti-Aim", "At targets", "Enabled", true);
        }
    } else {
        if ((isInAir == 0 || isInAir == undefined) && (isMoving == 0 || isMoving == undefined))
            UI.SetValue("Anti-Aim", "At targets", "Enabled", false);
    }
}

function moving() {
    var velocity = Entity.GetProp(localplayer_index, "CBasePlayer", "m_vecVelocity[0]");
    var speed = Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
    isActiveMoving = UI.IsHotkeyActive("Script items", "At Targets moving");
    var fv = Entity.GetProp(localplayer_index, "CBasePlayer", "m_flFallVelocity");

    if (isInAir == 1 && (fv > -1 && fv < 1))
        UI.SetValue("Anti-Aim", "At targets", "Enabled", false);

    if (speed > 2) {
        if (isActiveMoving == 1) {
            UI.SetValue("Anti-Aim", "At targets", "Enabled", true);
            isMoving = 1;
        }
    } else
    if ((isInAir == 0 || isInAir == undefined) && (isMoving == 0 || isMoving == undefined))
        UI.SetValue("Anti-Aim", "At targets", "Enabled", false);


}

function draw() {
    var showStatus = UI.GetValue("Script items", "Show Status", "Enabled");

    if (showStatus == 1) {
        var size = UI.GetValue("Script items", "Size of Status", "Int");
        var color = UI.GetColor("Script items", "Color of Status");
        var colorOutline = UI.GetColor("Script items", "Color of Outline");
        var colorText = UI.GetColor("Script items", "Color of Text");
        var x = UI.GetValue("Script items", "X Pos of Status", "Int");
        var y = UI.GetValue("Script items", "Y Pos of Status", "Int");
        var textSize = UI.GetValue("Script items", "Size of Text", "Int") + 7;

        var airEnabled = UI.IsHotkeyActive("Script items", "At Targets in-air");
        var moveEnabled = UI.IsHotkeyActive("Script items", "At Targets moving");
        var standEnabled = UI.IsHotkeyActive("Script items", "At Targets standing");


        Render.FilledRect(x, y, size + 100, size - 25, color);
        Render.Rect(x, y, size + 101, size - 24, colorOutline);

        var print = "Standing: " + (standEnabled == 1 ? "true" : "false") + "\n" +
            "Moving: " + (moveEnabled == 1 ? "true" : "false") + "\n" +
            "In Air: " + (airEnabled == 1 ? "true" : "false");

        Render.String(x + 10, y + 10, 0, print, colorText, textSize);
    }
}

Global.RegisterCallback("Draw", "draw");
Global.RegisterCallback("Draw", "inAir")
Global.RegisterCallback("Draw", "moving");
Global.RegisterCallback("Draw", "standing");