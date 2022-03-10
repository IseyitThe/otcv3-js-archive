var old_index = -1;

const weapons = {
    1: 5,
    2: 6,
    3: 8,
    4: 11,
    7: 0,
    8: 1,
    9: 2,
    10: 7,
    11: 9,
    13: 10,
    14: 13,
    16: 14,
    17: 16,
    19: 24,
    23: 19,
    24: 31,
    25: 33,
    26: 3,
    27: 17,
    28: 21,
    29: 26,
    30: 30,
    32: 12,
    33: 18,
    34: 20,
    35: 22,
    36: 23,
    38: 27,
    39: 28,
    40: 29,
    60: 15,
    61: 32,
    63: 4,
    64: 25,
    500: 34,
    503: 48,
    505: 35,
    506: 36,
    507: 37,
    508: 38,
    509: 45,
    512: 40,
    514: 44,
    515: 39,
    516: 42,
    519: 47,
    520: 41,
    522: 43,
    523: 46,
    517: 49,
    518: 50,
    521: 51,
    525: 52
}

function main()
{
    const player = Entity.GetLocalPlayer();
    const wpn_index = Entity.GetProp(Entity.GetWeapon(player), "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF;
    if (wpn_index === old_index)
        return;
    old_index = wpn_index;
    if (wpn_index in weapons)
    {
        const menu = weapons[wpn_index];
        UI.SetValue("Misc", "SKINS", "Skins", "Weapon", menu);
    }
}
Cheat.RegisterCallback("CreateMove", "main");