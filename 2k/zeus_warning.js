//taser warning
//by giperfast
//prod. shitcode
var scale = 15;
var alpha = 255;
var enemy_index = Entity.GetEnemies();
var local = Entity.GetLocalPlayer();
var render = 0;
UI.AddCheckbox("Enable Taser Warning");
UI.AddDropdown("Themes", ["Default", "Custom"]);
UI.AddColorPicker("Safe");
UI.AddColorPicker("Danger");
UI.AddSliderInt("X", -200,200);
UI.AddSliderInt("Y", -200,200);
UI.AddSliderInt("Scale", 15,100);
UI.AddSliderInt("Render distance", 0,100);

function get_metric_distance(a, b){
    return Math.floor(Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2)) * 0.0254 );
}
function Main(){
      Checkbox =  UI.GetValue("Script items", "Enable Taser Warning");
      Dropdown = UI.GetString("Script items", "Themes") == "Default";

      UI.SetEnabled ("Themes", Checkbox);
      UI.SetEnabled ("Safe",Checkbox && !Dropdown);
      UI.SetEnabled ("Danger",Checkbox && !Dropdown);
      UI.SetEnabled ("X",Checkbox && !Dropdown);
      UI.SetEnabled ("Y",Checkbox && !Dropdown);
      UI.SetEnabled ("Scale",Checkbox && !Dropdown);
      UI.SetEnabled ("Render distance", Checkbox);

        if(UI.GetString("Script items", "Themes") == "Default") {
            render = UI.GetValue("Script items", "Render distance");
            UI.SetValue("Script items", "Scale",15);
            scale=15;
            x=0;
            y=0;
            safe = [0,200,0,255];
            danger = [255,0,0,255];
        }
        if(UI.GetString("Script items", "Themes") == "Custom") {
            render = UI.GetValue("Script items", "Render distance");
            x = UI.GetValue("Script items", "X");
            y = UI.GetValue("Script items", "Y");
            scale = UI.GetValue("Script items", "Scale");
            safe = UI.GetColor("Script items", "Safe");
            danger = UI.GetColor("Script items", "Danger");
        }
    if(!Entity.IsAlive(local) || !UI.GetValue("Script items", "Enable Taser Warning"))
        return;

    localPos = Entity.GetHitboxPosition(local, 5);
    for (i=0; i < enemy_index.length; i++){
        weapon_index = Entity.GetWeapon(enemy_index[i]);
        weapon_name = Entity.GetClassID(weapon_index);
        if(weapon_name == '267'){
            if ( Entity.IsAlive( enemy_index[i] ) ){
                world = Entity.GetRenderOrigin( enemy_index[i] );
                screen_bot = Render.WorldToScreen( world );
                duckamount = Entity.GetProp( enemy_index[i], "DT_BasePlayer", "m_flDuckAmount" );
                world_top = world;//80
                world_top[2] = world_top[2] + 80;
                screen_top = Render.WorldToScreen( world_top );
                if ( screen_bot[2] == 1 && screen_top[2] == 1 ){
                    distance = get_metric_distance(localPos,world);
                    if(duckamount){y=50;}
                    if(distance > render)
                        continue;
                    if(Entity.IsDormant(enemy_index[i])){alpha=100;}else{alpha=255;}
                    if(scale>50){size=48;q=35;}else{size=4;q=17;}
                    if(distance > 4){
                        Render.FilledCircle( screen_top[0]+x, screen_top[1]+y, scale, [ safe[0], safe[1], safe[2], alpha ] );
                        Render.Circle( screen_top[0]+x, screen_top[1]+y, scale, [ 0, 0, 0, alpha ] );
                        Render.String( screen_top[0]+x, screen_top[1]-q+y, scale, "!", [ 255, 255, 255, alpha ],size );
                    }else{
                        Render.FilledCircle( screen_top[0]+x, screen_top[1]+y, scale, [ danger[0], danger[1], danger[2], danger[3] ] );
                        Render.Circle( screen_top[0]+x, screen_top[1]+y, scale, [ 0, 0, 0, 255 ] );
                        Render.String( screen_top[0]+x, screen_top[1]-q+y, scale, "!", [ 255, 255, 255, 255 ],size );           
                    }
                }
            }
        }
    }
}

Cheat.RegisterCallback("Draw", "Main");