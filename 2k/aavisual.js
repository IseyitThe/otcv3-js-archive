function drawFunc() {
   
    Cy = UI.GetValue("Y:");
    Cx = UI.GetValue("X:");
   
    r = UI.GetValue("Radius:");;
   
    stringType = UI.GetValue("Font type:");
   
    circleColor = UI.GetColor("Misc", "Script items", "Circle color");
   
    var x;
    for (x = 0; x < UI.GetValue("Circle thickness:"); x++) {
        Render.Circle(Cx, Cy, r + x, circleColor);
    }
   
    fakeColor = UI.GetColor("Misc", "Script items", "Fake color");
    realColor = UI.GetColor("Misc", "Script items", "Real color");


    //Fake yaw
    fakeYaw = (Local.GetFakeYaw());
    fakeLoc = getCircumferencePoint(Cx, Cy, r, fakeYaw);
       
    //Real yaw
    realYaw = (Local.GetRealYaw());  
    realLoc = getCircumferencePoint(Cx, Cy, r, realYaw);
   
    if (UI.GetValue("Flip fake & real data:")) {
        cFakeLoc = fakeLoc;
        fakeLoc = realLoc;
        realLoc = cFakeLoc;
    }
   
    //Fake yaw line
    Render.Line(Cx, Cy, fakeLoc[0], fakeLoc[1], fakeColor);

    //Real yaw line
    Render.Line(Cx, Cy, realLoc[0], realLoc[1], realColor);
   
    if (UI.GetValue("Misc", "JAVASCRIPT", "Show text")) {
        Render.String(fakeLoc[0], fakeLoc[1] + 0.07, 0, "Fake", fakeColor, stringType);
        Render.String(realLoc[0], realLoc[1] + 0.04, 0, "Real", realColor, stringType);
    }
    //x=Cx+(r*Math.cos(d/(180/PI));
    //y=Cy+(r*Math.cos(d/(180/PI));
}

function getCircumferencePoint(centreX, centreY, radius, angleInDegrees) {
    x = centreX + r * Math.cos(angleInDegrees * pi / 180)
    y = centreY + r * Math.sin(angleInDegrees * pi / 180)
   
    return [x, y];
}


pi = 3.14159265358979323846;


function main() {
    screenSize = Render.GetScreenSize();
   
    UI.AddDropdown("Font type:", ["Default", "Bold", "Small", "Small bold", "Big", "Icons", "Small icons"]);
   
    UI.AddSliderInt("Circle thickness:", 0, 3); //Q: Why can't we go thicker!
                                                //A: Your game will crash (I did about 80 and crashed in under 10s).
    UI.AddCheckbox("Flip fake & real data:");
    UI.AddSliderInt("Radius:", 0, 1000);
    UI.AddSliderInt("X:", 0, screenSize[0]);
    UI.AddSliderInt("Y:", 0, screenSize[1]);
    UI.AddColorPicker("Circle color");
    UI.AddColorPicker("Real color");
    UI.AddColorPicker("Fake color");
    UI.AddCheckbox("Show text");
   
    Cheat.RegisterCallback("Draw", "drawFunc");
}

main();