var pos1 = {
    x: 100,
    y: 100
}

var checkbox1 = false;
var checkbox2 = false;
var checkbox3 = false;
var intslider1 = 36;
var intslider2 = 3;
var floatslider1 = 14.982;
var floatslider2 = 58.63;
var floatslider3 = -8.45;
var dropdown1 = 0;
var hotkey1 = 0;
var hotkey2 = 0;

function _main_() {
    if (!UI.IsMenuOpen())
        return;
  
    begin_ui();
    push_window("Test Window 1", pos1, 450, 155);
    set_columns(3);
    checkbox1 = push_checkbox("Checkbox1", checkbox1);
    intslider1 = push_int_slider("Int Slider1", intslider1, 0, 35);
    next_column();
    floatslider1 = push_float_slider("Float Slider1", floatslider1, 0, 45, 3);
    dropdown1 = push_dropdown("Dropdown14", dropdown1, ["Item 1", "Item 2", "Item 3"]);
    hotkey1 = push_hotkey("Hotkey1", hotkey1);
    next_column();
    intslider2 = push_int_slider("Int Slider2", intslider2, 0, 33);
    hotkey2 = push_hotkey("Hotkey2", hotkey2);
    next_column();
    set_columns(1);
    push_newline();
    set_columns(2);
    floatslider2 = push_float_slider("Float Slider2", floatslider2, 53, 102, 2);
    floatslider3 = push_float_slider("Float Slider3", floatslider3, -20, 22, 1);
    next_column();
    checkbox2 = push_checkbox("Checkbox2", checkbox2);
    checkbox3 = push_checkbox("Checkbox3", checkbox3);
    pop_window();
}