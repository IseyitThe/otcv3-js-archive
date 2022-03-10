/* Fakelag step vars */
var last_set = 0;

/* Fakelag tick calculation & rendering */
var old_time = 0;
var choked_time = 0;
var sim_time = 0;
var ticks = 0;
var choked_ticks_arr = [];

/* used to save position of indicator/wm */
UI.AddSliderFloat("wmx", 0, 9999);
UI.SetEnabled("Script items", "wmx", false);
UI.AddSliderFloat("wmy", 0, 9999);
UI.SetEnabled("Script items", "wmy", false);
UI.AddSliderFloat("inx", 0, 9999);
UI.SetEnabled("Script items", "inx", false);
UI.AddSliderFloat("iny", 0, 9999);
UI.SetEnabled("Script items", "iny", false);

/* Indicator / Watermark */
var watermark_x = UI.GetValue("Script items", "wmx");
var watermark_y = UI.GetValue("Script items", "wmy");
var indicator_x = UI.GetValue("Script items", "inx")
var indicator_y = UI.GetValue("Script items", "iny");
var downInWindow = false;
var downInWindow2 = false;
var differenceX = 0;
var differenceY = 0;

/* UI Stuff */
UI.AddLabel("---------------------------");
UI.AddSliderFloat("Step interval", 0.01625, 4);
UI.AddSliderInt("Fakelag min", 0, 16);
UI.AddSliderInt("Fakelag max", 0, 16);
UI.AddLabel("---------------------------");
UI.AddSliderInt("Fakelag indicator length", 0, 10);
UI.AddCheckbox("Lucfig indicator");
UI.AddColorPicker("Fakelag indicator");
UI.AddColorPicker("Lucfig color");


function setFakeLag() {
    if(!Entity.IsAlive(Entity.GetLocalPlayer())) return;

    step = UI.GetValue("Script items", "Step interval");
    min = UI.GetValue("Script items", "Fakelag min");
    max = UI.GetValue("Script items", "Fakelag max");
    cur_lim = UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");

    if(Globals.Curtime() - last_set > step) {
        last_set = Globals.Curtime();
        if(cur_lim >= max) {
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", min);
        } else {
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", (cur_lim+1));
        }
    }
}

function renderFakeLag() {
    if(!Entity.IsAlive(Entity.GetLocalPlayer()) || World.GetServerString() == "") return;

    local = Entity.GetLocalPlayer();
    length = UI.GetValue("Script items", "Fakelag indicator length");
    fl_color = UI.GetColor("Script items", "Fakelag indicator");
    lucfig_color = UI.GetColor("Script items", "Lucfig color");

    sim_time = Entity.GetProp(local, "CBaseEntity", "m_flSimulationTime");

    choked_time = sim_time - old_time;

    if (sim_time != old_time) {
        ticks = 0;
        old_time = sim_time;
        ticks = choked_time;
        choked_ticks_arr.push(Math.round(ticks/(1/Globals.Tickrate())));
        choked_time = 0;
    }

    if(choked_ticks_arr.length > length)
        choked_ticks_arr.shift();


    str = "";

    for(t = 0; t < choked_ticks_arr.length; t++) {
        if(choked_ticks_arr[t] > 16)
            continue;
        str+= choked_ticks_arr[t];

        if(t != choked_ticks_arr.length-1) {
            str += " - ";
        }
    }

    font = Render.AddFont("Verdana Bold", 12, 100);
    font_small = Render.AddFont("Verdana Bold", 7, 100);
    font_medium = Render.AddFont("Verdana Bold", 10, 100);
    text_size = Render.TextSizeCustom(str, font_medium);
    text_size_wm = Render.TextSizeCustom("LUCFIG", font);

    cursor = Input.GetCursorPosition();

    if(choked_ticks_arr.length > 0 && UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled")) {
        Render.FilledRect(indicator_x-3, indicator_y-3, text_size[0]+18, text_size[1]+28, [120,120,120,255]);
        Render.Rect(indicator_x-3, indicator_y-3, text_size[0]+18, text_size[1]+28, [0,0,0,255]);
        Render.FilledRect(indicator_x, indicator_y, text_size[0]+12, text_size[1]+22, [45,45,45,255]);
        Render.Rect(indicator_x, indicator_y, text_size[0]+12, text_size[1]+22, [0,0,0,255]);
        Render.Line(indicator_x, indicator_y+((text_size[1]-1)), indicator_x+((text_size[0]+12)), indicator_y+((text_size[1]-1)), [255,255,255,100]);
        if(UI.GetValue("Script items", "Fakelag indicator length") > 3) {
            Render.StringCustom(indicator_x+((text_size[0]+12)/2), indicator_y+1, 1, "Choked ticks", fl_color, font_small);
        } else {
            Render.StringCustom(indicator_x+((text_size[0]+12)/2), indicator_y+1, 1, "FL", fl_color, font_small);
        }
        Render.StringCustom(indicator_x+((text_size[0]+12)/2), indicator_y+18, 1, str, fl_color, font_medium);
    }

    if(UI.GetValue("Script items", "Lucfig indicator")) {
        Render.FilledRect(watermark_x-3, watermark_y-3, text_size_wm[0]+18, text_size_wm[1]+26, [120,120,120,255]);
        Render.Rect(watermark_x-3, watermark_y-3, text_size_wm[0]+18, text_size_wm[1]+26, [0,0,0,255]);
        Render.FilledRect(watermark_x, watermark_y, text_size_wm[0]+12, text_size_wm[1]+20, [45,45,45,255]);
        Render.Rect(watermark_x, watermark_y, text_size_wm[0]+12, text_size_wm[1]+20, [0,0,0,255]);
        Render.StringCustom(watermark_x+((text_size_wm[0]+12)/2), watermark_y+2, 1, "LUCFIG", lucfig_color, font);
        Render.Line(watermark_x, watermark_y+((text_size_wm[1]+12)-6), watermark_x+((text_size_wm[0]+12)), watermark_y+((text_size_wm[1]+12)-6), [255,255,255,100]);
        Render.StringCustom(watermark_x+((text_size_wm[0]+12)/2), watermark_y+24, 1, Cheat.GetUsername(), lucfig_color, font_small);
    }

    if(Input.IsKeyPressed(0x01) && UI.IsMenuOpen()) {

        if(inside_region(cursor, [watermark_x, watermark_y], [watermark_x+text_size_wm[0]+18, watermark_y+text_size_wm[1]+26]) && !downInWindow) {
            cursor = Input.GetCursorPosition();
            downInWindow = true;
            differenceX = (cursor[0]-watermark_x);
            differenceY = (cursor[1]-watermark_y);
        } else if (downInWindow) {
          watermark_x = cursor[0] - differenceX;
          watermark_y = cursor[1] - differenceY;
          UI.SetValue("wmx", watermark_x);
          UI.SetValue("wmy", watermark_y);
        }

        if(inside_region(cursor, [indicator_x, indicator_y], [indicator_x+text_size[0]+18, indicator_y+text_size[1]+28]) && !downInWindow2) {
            cursor = Input.GetCursorPosition();
            downInWindow2 = true;
            differenceX = (cursor[0]-indicator_x);
            differenceY = (cursor[1]-indicator_y);
        } else if (downInWindow2) {
          indicator_x = cursor[0] - differenceX;
          indicator_y = cursor[1] - differenceY;
          UI.SetValue("inx", indicator_x);
          UI.SetValue("iny", indicator_y);
        }
    } else {
      downInWindow = false;
      downInWindow2 = false;
    }
}

function inside_region(input,min,max) {
  return ((input[0] >= min[0] && input[0] <= max[0]) && (input[1] >= min[1] && input[1] <= max[1])); 
}

Cheat.RegisterCallback("Draw", "setFakeLag");
Cheat.RegisterCallback("Draw", "renderFakeLag");