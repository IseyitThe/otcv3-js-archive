var  screen_size  =  Revar  screen_size  =  Render . GetScreenSize (  ) ;
függvény  onDraw ( )
{ 
    if ( ! Entity . GetLocalPlayer (  )  || ! Entity . IsAlive (  Entity . GetLocalPlayer (  )  )  || ! Entity . IsValid (  Entity . GetLocalPlayer (  )  )  )
    visszatérés ;
    Render . Karakterlánc ( 5 ,  screen_size [ 1 ]  -  400 ,  0 ,  "DT" ,  felhasználói felület . IsHotkeyActive ( "Rage" ,  "Exploits" ,  "Doubletap" ) ? [ 108 ,  195 ,  18 ,  255 ] : [ 255 ,  0 ,  0 ,  255 ] ,  4,6 ) ;
    Render . Karakterlánc ( 5 ,  screen_size [ 1 ]  -  399 ,  0 ,  "DT" ,  felhasználói felület . IsHotkeyActive ( "Rage" ,  "Exploits" ,  "Doubletap" ) ? [ 108 ,  195 ,  18 ,  255 ] : [ 255 ,  0 ,  0 ,  255 ] ,  4,6 ) ;

    Render . Karakterlánc ( 5 ,  screen_size [ 1 ]  -  375 ,  0 ,  "DUCK" ,  UI . IsHotkeyActive ( "Anti-Aim" ,  "Extra" ,  "Hamis kacsa" ) ? [ 255 ,  255 ,  255 ,  255 ] : [ 255 ,  255 ,  255 ] ,  4,5 ) ;
    Render . Karakterlánc ( 5 ,  screen_size [ 1 ]  -  374 ,  0 ,  "DUCK" ,  UI . IsHotkeyActive ( "Anti-Aim" ,  "Extra" ,  "Hamis kacsa" ) ? [ 255 ,  255 ,  255 ,  255 ] : [ 255 ,  255 ,  255 ] ,  4,5 ) ;

    Render . Karakterlánc ( 5 ,  screen_size [ 1 ]  -  350 ,  0 ,  "HS" ,  felhasználói felület . IsHotkeyActive ( "Rage" ,  "Exploits" ,  " Képek elrejtése" ) ? [ 255 ,  255 ,  255 ,  255 ] : [ 255 ,  255 ,  255 ] ,  4,5 ) ;
    Render . Karakterlánc ( 5 ,  screen_size [ 1 ]  -  349 ,  0 ,  "HS" ,  felhasználói felület . IsHotkeyActive ( "Rage" ,  "Exploits" ,  " Képek elrejtése" ) ? [ 255 ,  255 ,  255 ,  255 ] : [ 255 ,  255 ,  255 ] ,  4,5 ) ;
}
    Globális . RegisterCallback ( "Draw" ,  "onDraw" ) ;