UI.AddDropdown( "Custom ClanTag", [ "Disabled", "suicidee.cf"] );
UI.AddSliderInt( "Custom ClanTag Speed", 1, 10 );
var lasttime = 0;
function onRender(){
    var tag = UI.GetValue( "Script Items", "Custom ClanTag");
    var speed = UI.GetValue( "Script Items", "Custom ClanTag Speed");
    var time = parseInt((Globals.Curtime() * speed))
    if (time != lasttime){
        if(tag == 0) { Local.SetClanTag(""); }
        if(tag == 1){
            switch((time) % 31)
            {
            case 1: { Local.SetClanTag("                  "); break; }
            case 2: { Local.SetClanTag("              $"); break; }
            case 3: { Local.SetClanTag("             $u"); break; }
            case 4: { Local.SetClanTag("            $ui"); break; }
            case 5: { Local.SetClanTag("           $ui$"); break; }
            case 6: { Local.SetClanTag("          $ui$e"); break; }
            case 7: { Local.SetClanTag("         $ui$en"); break; }
            case 8: { Local.SetClanTag("        $ui$ens"); break; }
            case 9: { Local.SetClanTag("       $ui$ense"); break; }
            case 10:{ Local.SetClanTag("      $ui$ense "); break; }
            case 11:{ Local.SetClanTag("     $ui$ense  "); break; }
            case 12:{ Local.SetClanTag("    $ui$ense   "); break; }
            //case 13:{ Local.SetClanTag("   $ui$ense    "); break; }
            case 14:{ Local.SetClanTag("   $ui$ense      "); break; }
            case 15:{ Local.SetClanTag("  $ui$ense        "); break; }
            case 16:{ Local.SetClanTag(" $ui$ense        "); break; }
            case 17:{ Local.SetClanTag("ui$ense           "); break; }
            case 18:{ Local.SetClanTag("i$ense         "); break; }
            case 19:{ Local.SetClanTag("$ense             "); break; }
            case 20:{ Local.SetClanTag("ense              "); break; }
            case 21:{ Local.SetClanTag("nse                  "); break; }
            case 22:{ Local.SetClanTag("se                  "); break; }
            case 23:{ Local.SetClanTag("e                  "); break; }
            case 24:{ Local.SetClanTag("                  "); break; }
            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");