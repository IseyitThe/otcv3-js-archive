function ragdollForce( )
{
    
    framestage = Cheat.FrameStage();
    if (framestage == 3)
    {   
        // Cheat.Print(Convar.GetFloat("cl_ragdoll_gravity") + '\n')
        // Cheat.ExecuteCommand( "cl_ragdoll_gravity -5000" );
        entities = Entity.GetEntities();
        for (i = 0; i < entities.length; i++)
        {
            classID = Entity.GetClassID(entities[i]);
            if (classID == 42)
            {
                dir = Entity.GetProp(entities[i], "CCSRagdoll", "m_vecRagdollVelocity");
                dir[0] = 0
                dir[1] = 0
                dir[2] = 999999
                dir1 = Entity.GetProp(entities[i], "CBaseAnimating", "m_vecForce");
                dir1[0] = 0
                dir1[1] = 0
                dir1[2] = 999999
                Entity.SetProp(entities[i], "CCSRagdoll", "m_vecRagdollVelocity", dir);
                Entity.SetProp(entities[i], "CBaseAnimating", "m_vecForce", dir1);
            }
        }
        
    }
}

Cheat.RegisterCallback("FrameStageNotify", "ragdollForce");