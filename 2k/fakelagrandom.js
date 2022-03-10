function gui()
{
UI.AddSliderFloat("Fake-Lag Upper And Lower Limit", 0, 5);
UI.AddSliderFloat("Fake-Lag Frequency", 0.01, 1);
UI.AddSliderFloat("Fake-Lag Center Value", 0, 16);
}

function fakelagRando()
{
var realtime = Global.Realtime();
var fllimit = UI.GetValue("Misc","JAVASCRIPT","Script items","Fake-Lag Upper And Lower Limit");
var flfreq = UI.GetValue("Misc","JAVASCRIPT","Script items","Fake-Lag Frequency");
var flcenter = UI.GetValue("Misc","JAVASCRIPT","Script items","Fake-Lag Center Value");
var fl = (fllimit*Math.cos((realtime)/flfreq) + flcenter);
return fl;
}

function Initialize()
{
UI.SetValue("Anti-Aim", "Fake-Lag", "Limit",fakelagRando());
}
gui();
Global.RegisterCallback("Draw", "Initialize");