client.set_event_callback("on_enemy_kill", function()
    surface.play_sound("path + filename") --e.g surface.play_sound("C:\kill.mp3")
end)