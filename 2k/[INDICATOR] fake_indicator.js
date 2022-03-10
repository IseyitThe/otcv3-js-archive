function draw() {
	font = Render.AddFont( "Arial", 15, 100);
    fake = Math.abs(Local.GetFakeYaw());
    real = Math.abs(Local.GetRealYaw());
    delta = 0;
	//base_x = 10;
	//base_y = 800;
	base_x = 10;
	base_y = 500;
	is_negative = false
	text_position = 0;
    if (fake > real)
	{
        delta = fake - real;
		is_negative = true
	}
    else
	{
        delta = real - fake;
		is_negative = false
	}
	
	if (delta >= 60)
	{
		delta = 60
	}
	
	Render.String(base_x, base_y + 16, 0, "FAKE", [10, 10, 10, 125], 4);
	Render.String(base_x, base_y + 15, 0, "FAKE", [192 - (delta * 71 / 60), 32 + (delta * 146 / 60), 28, 200], 4);
	Render.FilledRect(base_x + 2, base_y + 46, 64, 4, [10, 10, 10, 125]);
	
	if (is_negative)
	{
		//delta = -delta
		var start_pos = base_x + 34;
		text_position = start_pos - delta * 31 / 60;
		Render.Rect(text_position - 1, base_y + 48, 4, 6, [0, 0, 0, 200]);
		Render.FilledRect(text_position, base_y + 49, 2, 5, [232, 232, 232, 200]);
		Render.FilledRect(start_pos - delta * 31 / 60, base_y + 47, delta * 31 / 60, 2, [232, 232, 232, 200]);
		delta = -delta
	}
	else
	{
		text_position = base_x + 34 + delta * 31 / 60;
		Render.Rect(text_position - 3, base_y + 48, 4, 6, [0, 0, 0, 200]);
		Render.FilledRect(text_position - 2, base_y + 49, 2, 5, [232, 232, 232, 200]);
		Render.FilledRect(base_x + 34/* - delta * 31 / 60*/, base_y + 47, delta * 31 / 60, 2, [232, 232, 232, 200]);
	}
	
	Render.String(text_position - 2, base_y + 56, 1, delta.toFixed(0).toString(), [0, 0, 0, 255], 3);
    Render.String(text_position - 3, base_y + 55, 1, delta.toFixed(0).toString(), [255, 255, 255, 255], 3);
	
	//Render.String(base_x + 23, base_y + 1, 1, delta.toFixed(0).toString(), [0, 0, 0, 255], 12);
    //Render.String(base_x + 22, base_y, 1, delta.toFixed(0).toString(), [255, 255, 255, 255], 12);
	
}

Cheat.RegisterCallback("Draw", "draw");