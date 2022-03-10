#lua redone by xhigh
local font = surface.setup_font("CourierNew", 13, 450, 0, 0, 0x010);


local frame_rate = 0.0
local get_abs_fps = function()
    frame_rate = 0.9 * frame_rate + (1.0 - 0.9) * globalvars.get_absolute_frametime()
    return math.floor((1.0 / frame_rate) + 0.5)
end

local function box(x, y, w, h, r, g, b, a)
    surface.draw_set_color(color_t.new(255, 255, 255, 255))
    surface.draw_line(x, y, x, y + h)
    surface.draw_line(x, y + h, x + w + 1, y + h)
    surface.draw_line(x + w, y, x + w, y + h)
    surface.draw_line(x, y, x + w, y)
end

local function grad(x3,y3,w3,h3,r1,g1,b1,a1,r2,g2,b2,a2)
	surface.draw_set_color(color_t.new(r1,g1,b1,a1))
	surface.draw_filled_rect_fade(x3,y3,w3,h3, a1, 0, true)
	surface.draw_set_color(color_t.new(r2,g2,b2,a2))
    surface.draw_filled_rect_fade(x3,y3,w3,h3, 0, a2, true)
end

local function grad1(x3,y3,w3,h3,r1,g1,b1,a1,r2,g2,b2,a2)
	surface.draw_set_color(color_t.new(r1,g1,b1,a1))
	surface.draw_filled_rect_fade(x3,y3,w3,h3, a1, 0, true)
	surface.draw_set_color(color_t.new(r2,g2,b2,a2))
    surface.draw_filled_rect_fade(x3,y3,w3,h3, 0, a2, true)
end

local textSize = 0


local function paint()
    ui.set_bool("visuals_other_watermark", false)

    local screen = engine.get_screen_size()

	local latency = se.get_latency()
	local latency1 = latency*1
	local a = string.format("%2.1f", latency1)
	local b = a*1
	local v = b/2

	local fps = get_abs_fps()
	local fps1 = fps*1
	local a111 = string.format("%2.1f", fps1)
	local b111 = a111*1
	local v111 = b111/2

    local rightPadding = 20
    local var = screen.x - textSize - rightPadding

    local x = var - 10 
	local y = 9
    local w = textSize + 10 
	local h = 20
    
    local x0 = var - 5 
	local y0 = 9
    local w0 = textSize + 10 
    local y1 = var + 5

    surface.draw_set_color(color_t.new(92, 96, 100, 140))
    surface.draw_outlined_rect(x0 - 10, y0 - 5, x0 + textSize + 20, h * 1.8)

    surface.draw_set_color(color_t.new(54, 62, 69, 140))
    surface.draw_filled_rect(x0 - 10, y0 - 5, x0 + textSize + 20, h * 1.8)

	surface.draw_set_color(color_t.new(92, 96, 100, 255))
    surface.draw_outlined_rect(x, y, x + textSize + 20, h * 1.5)

    surface.draw_set_color(color_t.new(26, 15, 10, 230))
    surface.draw_filled_rect(x, y, x + textSize + 20, h * 1.5)
    
	surface.draw_set_color(color_t.new(200, 255, 128, 255))
    surface.draw_filled_rect(x, y, x + textSize + 20, h - 9)

    grad(x, y, x + textSize + 20, h - 9, 51, 204, 51, 51, 102, 255, 255, 255)
    grad(x, y, x + textSize + 20, h - 9, 102, 0, 102, 128, 0, 0, 255, 255)

    grad(x, y, x + textSize + 20, h - 9, 109, 24, 219, 226, 74, 51, 255, 255)
    grad(x, y, x + textSize + 20, h - 9, 109, 24, 219, 226, 74, 51, 255, 255)
    
    local nexttext = "game"
    surface.draw_set_text_color(color_t.new(255, 255, 255, 255))
    surface.draw_set_text_font(font)
    surface.draw_set_text_pos(var, 13)
    surface.draw_print_text(nexttext)
	
	local text_size = surface.get_text_size(font, nexttext)
    local wide, tall = text_size.x, text_size.y
    var = var + wide
	
	local nexttext = "sense "
    surface.draw_set_text_color(color_t.new(108, 195, 18, 255))
    surface.draw_set_text_font(font)
    surface.draw_set_text_pos(var, 13)
    surface.draw_print_text(nexttext)
	
	local text_size = surface.get_text_size(font, nexttext)
    local wide, tall = text_size.x, text_size.y
    var = var + wide
	
	local nexttext = "|"
    surface.draw_set_text_color(color_t.new(255, 255, 255, 255))
    surface.draw_set_text_font(font)
    surface.draw_set_text_pos(var, 13)
    surface.draw_print_text(nexttext)
	
	local text_size = surface.get_text_size(font, nexttext)
    local wide, tall = text_size.x, text_size.y
    var = var + wide

    local username = string.lower(client.get_username())
    nexttext = " " .. username
    surface.draw_set_text_color(color_t.new(255, 255, 255, 255))
    surface.draw_set_text_font(font)
    surface.draw_set_text_pos(var, 13)
    surface.draw_print_text(nexttext)
	
	text_size = surface.get_text_size(font, nexttext)
    wide, tall = text_size.x, text_size.y
    var = var + wide

	local nexttext = " | "
    surface.draw_set_text_color(color_t.new(255, 255, 255, 255))
    surface.draw_set_text_font(font)
    surface.draw_set_text_pos(var, 13)
    surface.draw_print_text(nexttext)
	
	local text_size = surface.get_text_size(font, nexttext)
    local wide, tall = text_size.x, text_size.y
    var = var + wide

    nexttext = b111 .. " fps |   "
    surface.draw_set_text_color(color_t.new(255, 255, 255, 255))
    surface.draw_set_text_font(font)
    surface.draw_set_text_pos(var, 13)
    surface.draw_print_text(nexttext)

    wide, tall = text_size.x + 40, text_size.y
    var = var + wide
    
    nexttext = b .. " ms"
    surface.draw_set_text_color(color_t.new(255, 255, 255, 255))
    surface.draw_set_text_font(font)
    surface.draw_set_text_pos(var, 13)
    surface.draw_print_text(nexttext)
	
    wide, tall = text_size.x + 15, text_size.y
    var = var + wide

	textSize = var - (screen.x - textSize - rightPadding)
end

client.register_callback("paint", paint)