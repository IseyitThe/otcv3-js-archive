
UI.AddTextbox( "u mad nigga" ); 

var Server_1_Loader = UI.AddCheckbox( "Load [BROKENCORE.CLUB CW #1]" );
var Server_2_Loader = UI.AddCheckbox( "Load [BROKENCORE.CLUB CW #2]" );
var Server_3_Loader = UI.AddCheckbox( "Load [BROKENCORE.CLUB CW #3]" );
var Server_4_Loader = UI.AddCheckbox( "Load [BROKENCORE.CLUB CW #4]" );
var Server_5_Loader = UI.AddCheckbox( "Load [BROKENCORE.CLUB CW #5]" );
var Server_6_Loader = UI.AddCheckbox( "Load [BROKENCORE.CLUB CW #6]" );
var Server_7_Loader = UI.AddCheckbox( "NSL1" );
var Server_7_Loader = UI.AddCheckbox( "NSL2" );
var Server_7_Loader = UI.AddCheckbox( "NSL3" );
var Server_7_Loader = UI.AddCheckbox( "ranteis1" );
var Server_7_Loader = UI.AddCheckbox( "ranteis2" );
function Default ()
{

    if (UI.GetValue( "Load [BROKENCORE.CLUB CW #1]" ) == 1) 
    {
        Cheat.ExecuteCommand( "connect cw.brokencore.club:27015;password BROKENCORE"); 

        UI.SetValue("Load [BROKENCORE.CLUB CW #1", 0 ); 
    }
    if (UI.GetValue( "Load [BROKENCORE.CLUB CW #2]" ) == 1)
    {
        Cheat.ExecuteCommand( "	connect cw.brokencore.club:27018;password BROKENCORE"); 

        UI.SetValue("Load [BROKENCORE.CLUB CW #2", 0 ); 
    }
    if (UI.GetValue( "Load [BROKENCORE.CLUB CW #3]" ) == 1) 
    {
        Cheat.ExecuteCommand( "connect cw.brokencore.club:27021;password BROKENCORE"); 

        UI.SetValue("Load [BROKENCORE.CLUB CW #3", 0 ); 
    }
    if (UI.GetValue( "Load [BROKENCORE.CLUB CW #4]" ) == 1) 
    {
        Cheat.ExecuteCommand( "connect cw.brokencore.club:27024;password BROKENCORE"); 

        UI.SetValue("Load [BROKENCORE.CLUB CW #4", 0 ); 
    }
    if (UI.GetValue( "Load [BROKENCORE.CLUB CW #5]" ) == 1) 
    {
        Cheat.ExecuteCommand( "	connect cw.brokencore.club:27027;password BROKENCORE");

        UI.SetValue("Load [BROKENCORE.CLUB CW #5", 0 ); 
    }
    if (UI.GetValue( "Load [BROKENCORE.CLUB CW #6]" ) == 1) 
    {
        Cheat.ExecuteCommand( "connect cw.brokencore.club:27030;password BROKENCORE"); 

        UI.SetValue("Load [BROKENCORE.CLUB CW #6", 0 ); 
    }
    if (UI.GetValue( "Load [BROKENCORE.CLUB CW #7]" ) == 1) 
    {
        Cheat.ExecuteCommand( "connect cw.brokencore.club:27033;password BROKENCORE"); 

        UI.SetValue("Load [BROKENCORE.CLUB CW #7", 0 ); 
    }
    if (UI.GetValue( "NSL1" ) == 1) 
    {
        Cheat.ExecuteCommand( "connect hvh.lgbt:27024; password NSLHVH4"); 

        UI.SetValue("NSL1", 0 ); 
    }
    if (UI.GetValue( "NSL2" ) == 1) 
    {
        Cheat.ExecuteCommand( "connect hvh.lgbt:27027; password NSLHVH5"); 

        UI.SetValue("NSL2", 0 );
    }
    if (UI.GetValue( "NSL3" ) == 1) 
    {
        Cheat.ExecuteCommand( "connect hvh.lgbt:27030; password NSLHVH6"); 

        UI.SetValue("NSL3", 0 ); 
    }
    if (UI.GetValue( "ranteis 1" ) == 1) 
    {
        Cheat.ExecuteCommand( "connect 62.122.215.82:1337;  password Rantei$5v5"); 

        UI.SetValue("ranteis1", 0 );
    }
    if (UI.GetValue( "ranteis2" ) == 1) 
    {
        Cheat.ExecuteCommand( "connect 62.122.215.82:1338;  password Rantei$5v5"); 

        UI.SetValue("ranteis2", 0 ); 
    }
}

Cheat.RegisterCallback("Draw", "Default");
