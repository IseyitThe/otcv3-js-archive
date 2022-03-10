function clamp(min, max, value)
{
    if ( max > min )
        return Math.min( max, Math.max(min, value) );
    else
        return Math.min( min, Math.max(max, value) );
}

function strafeHelper()
{
    var sv_airaccelerate = Convar.GetInt("sv_airaccelerate");
    var turnSpeed = 100;
    turnSpeed = clamp(70, 500, sv_airaccelerate * 3.45 );
    UI.SetValue(["Misc.", "Movement", "Turn speed"], turnSpeed);
}
Cheat.RegisterCallback("Draw", "strafeHelper");