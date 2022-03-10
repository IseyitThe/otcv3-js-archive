Cheat.RegisterCallback("player_say", "msgFunc");
Cheat.RegisterCallback("Draw", "dChat");

UI.AddColorPicker("Text color");
UI.AddTextbox("Message to send");
UI.AddHotkey("Send message");
var sSize = Render.GetScreenSize();
UI.AddSliderInt("X", 0, sSize[0]);
UI.AddSliderInt("Y", 0, sSize[1]);

var menuSize = [600, 200];
var textColor = [];
var messages = [];
var textBoxSize = [500, 30];
var curMsg = "";
function getVal(valName) {return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valName);}
function getStr(valName) {return UI.GetString("Misc", "JAVASCRIPT", "Script items", valName);}

function dChat() {
    var screenSize = Render.GetScreenSize();
    var cFont = Render.AddFont("Tahoma", 10, 900);

    var centerScreen = [screenSize[0] / 2, screenSize[1] / 2];
    curMsg = getStr("Message to send");
    if (curMsg != "" && UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Send message")) {
        var command = "say " + curMsg;
        Cheat.ExecuteCommand(command);
        curMsg = "";
    }
    
    textColor = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Text color");
    var foregroundPos = drawMenu(getVal("X"), getVal("Y"), menuSize[0], menuSize[1], textColor, [textColor[0] - 20, textColor[1], textColor[2], 255], "Chat", false);

    var currentPos = [foregroundPos[0] + 5, foregroundPos[1]];
    for (var i = 0; i < messages.length; i++) {
        Render.StringCustom(currentPos[0], currentPos[1], 0, Entity.GetName(messages[i][0]) + " : " + messages[i][1], textColor, cFont);
        currentPos[1] += 13;
    }
    if (messages.length > 12) {
        messages.shift();
    }
}
function msgFunc() {
    var msg = Event.GetString("text");
    messages.push([Entity.GetEntityFromUserID(Event.GetInt("userid")), msg]);
}



dMenuPos = [0, 0];
function drawMenu(x, y, sX, sY, foreColor, darkForeColor, title, draggable) {
    //We return the position of the foreground

    baseBackground = [x + 4, y + 4, sX - 8, sY - 8];

    foregroundPos = [baseBackground[0] + 4, baseBackground[1] + 28, baseBackground[2] - 8, baseBackground[3] - 32];

    //Outline
    outlineBox(x, y, sX, sY, [20, 20, 20, 255])

    //Far background
    Render.FilledRect(x, y, sX, sY, [20, 20, 20, 130]);

    //Base background outline
    outlineBox(baseBackground[0]-1, baseBackground[1]-1, baseBackground[2]+1, baseBackground[3]+1, [70, 70, 70, 255]);

    //Base background
    Render.FilledRect(baseBackground[0], baseBackground[1], baseBackground[2], baseBackground[3], [40, 40, 40, 200]);

    //Title
    Render.String( x + (sX / 2), baseBackground[1] + 5, 1, title, [230, 230, 230, 255], 8 );

    //Title 'Underline'
    stringSize = Render.TextSize(title, 8);

    Render.GradientRect(foregroundPos[0], baseBackground[1] + stringSize[1] + 5, foregroundPos[2], 5, 0, foreColor, darkForeColor);

    //Foreground outline
    outlineBox(foregroundPos[0]-1, foregroundPos[1]-1, foregroundPos[2]+1, foregroundPos[3]+1, [70, 70, 70, 255]);

    //Foreground
    Render.FilledRect(foregroundPos[0], foregroundPos[1], foregroundPos[2], foregroundPos[3], [20, 20, 20, 130]);


    return foregroundPos;
}

function outlineBox(x, y, sX, sY, color) {
    //top left -> top right
    Render.Line(x, y, x + sX, y, color);

    //top right -> bottom right
    Render.Line( x + sX, y, x + sX, y + sY, color);

    //bottom right -> bottom left
    Render.Line( x + sX, y + sY, x, y + sY, color);

    //bottom left -> top left
    Render.Line( x, y + sY, x, y, color);

}

function beingClicked(maxLeft, maxRight, maxTop, maxBottom) {
    cursorPosition = Input.GetCursorPosition();
    
    return ( Input.IsKeyPressed(0x01) && cursorPosition[0] > maxLeft && cursorPosition[0] < maxRight
    &&    cursorPosition[1] < maxBottom && cursorPosition[1] > maxTop);
}