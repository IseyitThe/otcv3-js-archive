function settings()
{
    UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "Indicators")
    UI.AddCheckbox(['Visuals', "Indicators", "Indicators"],'Enable indicators');
    UI.AddMultiDropdown(["Visuals", "Indicators", "Indicators"], "Indicators", ["Doubletap", "Inverted AA", "Fakeduck", "Manual direction", "Slow walk", "Baim", "Low FPS", "High PING"]);
    UI.AddSliderInt(['Visuals', "Indicators", "Indicators"],'Offset', -600, 400);
    UI.AddSliderInt(['Visuals', "Indicators", "Indicators"],'Size', 10, 50);
    UI.AddSliderInt(['Visuals', "Indicators", "Indicators"],'Distance between indic', 0, 20);
    UI.AddDropdown(["Visuals", "Indicators", "Indicators"], "Font", ["Arial", "Arialbd", "Impact"], 0);
    UI.AddCheckbox(['Visuals', "Indicators", "Indicators"],'Text shadow');
    UI.AddSliderInt(['Visuals', "Indicators", "Indicators"],'Shadow offset', 1, 5);
    UI.AddSliderInt(['Visuals', "Indicators", "Indicators"],'High PING', 20, 200);
    UI.AddSliderInt(['Visuals', "Indicators", "Indicators"],'Low FPS', 30, 200);
    UI.AddColorPicker(["Visuals", "Indicators", "Indicators"], "Charged DT color");
    UI.AddColorPicker(["Visuals", "Indicators", "Indicators"], "Not charged DT color");
    UI.AddColorPicker(["Visuals", "Indicators", "Indicators"], "Fakeduck color");
    UI.AddColorPicker(["Visuals", "Indicators", "Indicators"], "Slow walk color");
    UI.AddColorPicker(["Visuals", "Indicators", "Indicators"], "Baim color");
    UI.AddColorPicker(["Visuals", "Indicators", "Indicators"], "Inverter color");
    UI.AddColorPicker(["Visuals", "Indicators", "Indicators"], "Direction color");
    UI.AddColorPicker(["Visuals", "Indicators", "Indicators"], "Low FPS color");
    UI.AddColorPicker(["Visuals", "Indicators", "Indicators"], "High PING color");
    GetValues();
    UI.SetValue(["Visuals", "Indicators", "Indicators", "Size"], 25);
    UI.SetValue(["Visuals", "Indicators", "Indicators", "High PING"], 100);
    UI.SetValue(["Visuals", "Indicators", "Indicators", "Low FPS"], 70);
    UI.SetValue(["Visuals", "Indicators", "Indicators", "Shadow offset"], 3);
    UI.SetColor(["Visuals", "Indicators", "Indicators", "Charged DT color"], [0, 230, 0, alpha]);
    UI.SetColor(["Visuals", "Indicators", "Indicators", "Not charged DT color"], [230, 0, 0, alpha]);
    UI.SetColor(["Visuals", "Indicators", "Indicators", "Fakeduck color"], [255, 255, 255, alpha]);
    UI.SetColor(["Visuals", "Indicators", "Indicators", "Slow walk color"], [255, 255, 255, alpha]);
    UI.SetColor(["Visuals", "Indicators", "Indicators", "Inverter color"], [255, 255, 255, alpha]);
    UI.SetColor(["Visuals", "Indicators", "Indicators", "Direction color"], [255, 255, 255, alpha]);
    UI.SetColor(["Visuals", "Indicators", "Indicators", "Low FPS color"], [230, 0, 0, alpha]);
    UI.SetColor(["Visuals", "Indicators", "Indicators", "High PING color"], [230, 0, 0, alpha]);
    UI.SetColor(["Visuals", "Indicators", "Indicators", "Baim color"], [0, 230, 0, alpha]);
}
function GetValues()
{
    lFps = Math.round(1 / Globals.Frametime());
    lPing = Local.Latency() * 1000;
    lSof = UI.GetValue(["Visuals", "Indicators", "Indicators","Shadow offset"]);
    cDtC = UI.GetColor(["Visuals", "Indicators", "Indicators", "Charged DT color"]);
    cDtNC = UI.GetColor(["Visuals", "Indicators", "Indicators", "Not charged DT color"]);
    cFd = UI.GetColor(["Visuals", "Indicators", "Indicators", "Fakeduck color"]);
    cSw = UI.GetColor(["Visuals", "Indicators", "Indicators", "Slow walk color"]);
    cInv = UI.GetColor(["Visuals", "Indicators", "Indicators", "Inverter color"]);
    cDir = UI.GetColor(["Visuals", "Indicators", "Indicators", "Direction color"]);
    cFps = UI.GetColor(["Visuals", "Indicators", "Indicators", "Low FPS color"]);
    cPing = UI.GetColor(["Visuals", "Indicators", "Indicators", "High PING color"]);
    cBaim = UI.GetColor(["Visuals", "Indicators", "Indicators", "Baim color"]);
    iEnabled = UI.GetValue(["Visuals", "Indicators", "Indicators","Enable indicators"]);
    iSize = UI.GetValue(["Visuals", "Indicators", "Indicators","Size"]);
    iBetween = UI.GetValue(["Visuals", "Indicators", "Indicators","Distance between indic"]);
    iShadow = UI.GetValue(["Visuals", "Indicators", "Indicators","Text shadow"]);
    iFont = UI.GetString(["Visuals", "Indicators", "Indicators","Font"]);
    iFps = UI.GetValue(["Visuals", "Indicators", "Indicators","Low FPS"]);
    iPing = UI.GetValue(["Visuals", "Indicators", "Indicators","High PING"]);
    iStr = UI.GetString(["Visuals", "Indicators", "Indicators", "Indicators"]);
    if(iStr.includes("Doubletap")){inDt = true}
    else{inDt = false}
    if(iStr.includes("Inverted AA")){inInv = true}
    else{inInv = false}
    if(iStr.includes("Fakeduck")){inFd = true}
    else{inFd = false}
    if(iStr.includes("Baim")){inBaim = true}
    else{inBaim = false}
    if(iStr.includes("Slow walk")){inSw = true}
    else{inSw = false}
    if(iStr.includes("Manual direction")){inMdir = true}
    else{inMdir = false}
    if(iStr.includes("Low FPS")){inFps = true}
    else{inFps = false}
    if(iStr.includes("High PING")){inPing = true}
    else{inPing = false}
    if(iEnabled == true){alpha = 255}
    else{alpha = 0}
    if(iEnabled == true && iShadow == true){sAlpha = 255}
    else{sAlpha = 0}    
    offset = UI.GetValue(["Visuals", "Indicators", "Indicators","Offset"]) + 600;
    isDoubletap = UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]);
    isFakeduck = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]);
    isSw = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]);
    isLeft = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Left direction"]);
    isRight = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Right direction"]);
    isBack = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Back direction"]);
    isInverted = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
    isBaim = UI.GetValue(["Rage", "General", "General", "Key assignment", "Force body aim"]);
    isCharged = Exploit.GetCharge();
}
function indicators()
{
    GetValues();        
    number = 0;
    var font = Render.AddFont(iFont, iSize, 900);
    mult = iSize + iBetween
    if(iEnabled == true)
    {
        if (isDoubletap == true && inDt == true)
        {
            number += 1;
            if (isCharged == true)
            {
                Render.String( 20 - lSof, offset + lSof, 0, "DT", [0, 0, 0, sAlpha], font );
                Render.String( 20, offset, 0, "DT", cDtC, font );
            }
            if (isCharged != true)
            {
                Render.String( 20 - lSof, offset + lSof, 0, "DT", [0, 0, 0, sAlpha], font );
                Render.String( 20, offset, 0, "DT", cDtNC, font );
            }
        }
        if (isInverted == true && inInv == true)
        {        
            Render.String( 20 - lSof, offset + lSof + number * mult, 0, "INVERTED", [0, 0, 0, sAlpha], font );
            Render.String( 20, offset + number * mult, 0, "INVERTED", cInv, font );
            number += 1;
        }
        if (isFakeduck == true && inFd == true)
        {
            Render.String( 20 - lSof, offset + lSof + number * mult, 0, "DUCK", [0, 0, 0, sAlpha], font );
            Render.String( 20, offset + number * mult, 0, "DUCK", cFd, font );
            number += 1;
        }
        if (isSw == true && inSw == true)
        {
            Render.String( 20 - lSof, offset + lSof + number * mult, 0, "SLOW WALK", [0, 0, 0, sAlpha], font );
            Render.String( 20, offset + number * mult, 0, "SLOW WALK", cSw, font );
            number += 1;
        }
        if (isLeft == true && inMdir == true)
        {
            Render.String( 20 - lSof, offset + lSof + number * mult, 0, "LEFT", [0, 0, 0, sAlpha], font );
            Render.String( 20, offset + number * mult, 0, "LEFT", cDir, font );
            number += 1;
        }
        if (isRight == true && inMdir == true)
        {
            Render.String( 20 - lSof, offset + lSof + number * mult, 0, "RIGHT", [0, 0, 0, sAlpha], font );
            Render.String( 20, offset + number * mult, 0, "RIGHT", cDir, font );
            number += 1;
        }
        if (isBack == true && inMdir == true)
        {
            Render.String( 20 - lSof, offset + lSof + number * mult, 0, "BACK", [0, 0, 0, sAlpha], font );
            Render.String( 20, offset + number * mult, 0, "BACK", cDir, font );
            number += 1;
        }
        if (isBaim == true && inBaim == true)
        {        
            Render.String( 20 - lSof, offset + lSof + number * mult, 0, "BAIM", [0, 0, 0, sAlpha], font );
            Render.String( 20, offset + number * mult, 0, "BAIM", cBaim, font );
            number += 1;
        }
        if (lFps < iFps && inFps == true)
        {        
            Render.String( 20 - lSof, offset + lSof + number * mult, 0, "FPS", [0, 0, 0, sAlpha], font );
            Render.String( 20, offset + number * mult, 0, "FPS", cFps, font );
            number += 1;
        }
        if (lPing > iPing && inPing == true)
        {        
            Render.String( 20 - lSof, offset + lSof + number * mult, 0, "PING", [0, 0, 0, sAlpha], font );
            Render.String( 20, offset + number * mult, 0, "PING", cPing, font );
            number += 1;
        }
    }    
}
settings();
Cheat.RegisterCallback("Draw", "indicators");