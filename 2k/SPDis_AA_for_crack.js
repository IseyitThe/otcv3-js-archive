enum AA_Pitch
{
    AA_PITCH_SMAC,
    AA_PITCH_NORMAL,
    AA_PITCH_STATIC,
    AA_PITCH_UP,
    AA_PITCH_FAKE_UP
};

enum AA_Yaw
{
    AA_YAW_NORMAL,
    AA_YAW_JITTER,
    AA_YAW_SPINHACK,
    AA_YAW_SIDEWAYS,
    AA_YAW_STATIC,
    AA_YAW_FAKE_SIDEWAYS,
    AA_YAW_FAKE_STATIC
};

class CAntiAim
{
public:
    void Run();
private:
    void antiAimYaw();
    void aimAtPlayer();
};

extern CAntiAim* AntiAim;
{
      AA_YAW_OFFSET,
      AA_JITTR_OFFSET,
      AA_YAW_STATIC,
      AA_YAW REAL_ANGLE,
      AA_JAW_SET,

extern AA_YAW
{
     AA_FAKE,
     AA_OFFSET,
     AA_FAKE_SIDEWAY,
     AA_JITTER_OFFSET
     AA_JITTER




