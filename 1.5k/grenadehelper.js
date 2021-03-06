
//         ▀▀█▀▀ █░░░█ ░▀░ █▀▀ ▀▀█▀▀ █░░█
//         ░░█░░ █▄█▄█ ▀█▀ ▀▀█ ░░█░░ █▄▄█
//         ░░▀░░ ░▀░▀░ ▀▀▀ ▀▀▀ ░░▀░░ ▄▄▄█



UI.AddCheckbox("Grenade Helper Enable")
UI.AddColorPicker("Grenade Helper Color")


UI.AddLabel("------------TwisTy LUA-------------");

var coords


function atv(pitch, yaw) {

  return [Math.cos(pitch * Math.PI / 180) * Math.cos(yaw * Math.PI / 180), Math.cos(pitch * Math.PI / 180) * Math.sin(yaw * Math.PI / 180), -Math.sin(pitch * Math.PI / 180)]

}

  var scriptitems = ["Misc", "JAVASCRIPT", "Script Items"];

  function menu_cb() {
    var enabled = UI.GetValue(scriptitems, "Grenade Helper Enable");
    UI.SetEnabled(scriptitems, "Grenade Helper Color", enabled);

  }
  

  function grenade_helper() {
    menu_cb();
  }


function dis(a, b) {

  var ax = a[0]

  var ay = a[1]

  var az = a[2]

  var bx = b[0]

  var by = b[1]

  var bz = b[2]



  var dx = ax - bx

  var dy = ay - by

  var dz = az - bz



  return Math.sqrt( dx * dx + dy * dy + dz * dz )

}



function alp(c, a) {

  return [c[0], c[1], c[2], a]

}


test = 0
function draw() {


  weaponnames = {"flashbang": [43], "molotov": [46, 48], "smoke": [45]}


  weapon = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CEconEntity", "m_iItemDefinitionIndex")

  world  = World.GetMapName()

  color  = UI.GetColor("Misc", "JAVASCRIPT", "Script itens", "Grenade Helper Color")

  var enabled = UI.GetValue(scriptitems, "Grenade Helper Enable");
  if (enabled) 
  {
    if(!color) color = [255, 255, 255, 255]



    if([46, 48, 45, 43].indexOf(weapon) < 0) return

    //["", "", "", ],

    if(world == "de_cbble")     coords = [[ "One-way Long", "Crouch / Right click", "smoke", 272.031250, -291.031250, -63.906189, -30.971577, 17.418360 ],[ "B Long", "Jump / Throw", "smoke", -1540.973389, -1226.978027, -25.199188, -50.672855, 41.294445 ],[ "Matrix", "Throw", "smoke", -1864.968750, -1611.968750, 96.093810, -11.221231, 136.023499 ],[ "B Long", "Throw", "smoke", -288.031250, 1020.970520, 128.093811, -51.547066, -53.167721 ],[ "Truck - front", "Throw", "smoke", -3295.975586, 79.968750, -29.906188, -36.680634, -52.524323 ],[ "Truck - right", "Throw", "smoke", -3168.031250, 79.968750, -29.906188, -47.158157, -65.556221 ],[ "Grass", "Throw", "smoke", -3167.270508, 584.685120, 0.093811, -55.144222, -61.434193 ],[ "Skyfall", "Throw", "smoke", -752.031250, -80.031250, 128.093811, 5.361639, -119.332336 ],[ "Hut - right", "Throw", "smoke", -155.970673, -16.010778, -31.906188, -50.869473, -69.637550 ],[ "Hut - left", "Throw", "smoke", -340.020111, -80.031250, -31.907466, -53.921837, -52.166801 ],[ "Sandwich", "Throw", "smoke", 47.968750, -16.031250, -23.114716, -81.378204, -89.289169 ],[ "Fountain", "Throw", "smoke", -418.514893, -95.749924, -32.562836, -75.323563, -61.343159 ],[ "B Door", "Throw", "smoke", -558.031250, -42.535999, 0.093811, -62.173512, -100.720726 ],[ "Balcony", "Jump / Throw", "smoke", -2534.005371, -272.031250, -184.407272, -17.127037, -65.392319 ],[ "A Door", "Walk / Throw", "smoke", -3346.178711, 455.572449, 0.093811, -40.327240, -45.610413 ],[ "A Door", "Run / Throw", "smoke", -2989.968750, -944.371948, 32.093811, -12.160514, -4.402364 ],[ "Skyfall", "Throw", "flashbang", -780.031250, 111.931717, 128.093811, -4.768500, -92.183800 ],[ "Skyfall", "Throw", "flashbang", -590.995239, 434.631622, -0.906188, -17.854057, -108.593758 ],[ "Wood", "Throw", "flashbang", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882 ],[ "Balcony", "Run / Throw", "molotov", -2989.968750, -944.036682, 32.093811, -15.675012, -32.634476 ],[ "Wood", "Throw", "molotov", -2907.962402, -1976.022705, 143.093811, -8.300402, 94.145882 ]]

    if(world == "de_mirage")    coords = [[ "Window Mid", "Jump / Throw", "smoke", 1423.964355, -248.026840, -167.906188, -25.723558, -170.518921 ],[ "Connector", "Jump / Throw", "smoke", 1135.968750, 647.996033, -261.322754, -34.518116, -140.291428 ],[ "Catwalk", "Throw", "smoke", 1423.997803, 71.985359, -112.840103, -32.653351, -163.530762 ],[ "One-way Mid", "Right click", "smoke", 369.960144, -720.522705, -162.412476, 35.376301, 124.135780 ],[ "Short", "Run / Throw", "smoke", 399.998444, 4.656666, -203.571350, -22.060497, -134.482208 ],[ "Window Mid", "Throw", "smoke", -624.243530, 615.992065, -78.914246, -51.595604, -109.421127 ],[ "Kitchen door", "Throw", "smoke", -2325.227783, 811.800659, -119.773079, -14.883981, -94.343178 ],[ "Short", "Throw", "smoke", -160.031250, 887.968750, -135.265563, -44.269619, -134.435654 ],[ "Kitchen window", "Throw", "smoke", -835.001404, 615.070190, -79.065735, -63.789238, -146.581238 ],[ "Short", "Throw", "smoke", 341.836212, -620.153992, -163.282486, -23.134167, 164.957458 ],[ "Connector / Jungle", "Throw", "smoke", 815.999512, -1457.235596, -108.906189, -26.797188, -174.613022 ],[ "Stairs", "Throw", "smoke", 1148.225586, -1183.999756, -205.509155, -41.168613, -165.354019 ],[ "Window Mid", "Run / Throw", "smoke", 1391.968750, -1011.236084, -167.906188, -42.603077, 172.188919 ],[ "Stairs", "Jump / Throw", "smoke", -90.864479, -1418.000244, -115.906189, -31.895834, -62.464306 ],[ "Fireboxes", "Jump / Throw", "smoke", 1391.968750, -930.076294, -167.906188, -21.037338, -151.204865 ],[ "One-way", "Throw", "smoke", 457.968750, -1711.996582, -240.886871, -10.477256, 133.144836 ],[ "Bombsite A", "Throw", "smoke", 815.998718, -1272.017944, -108.906189, -32.654591, -149.503601 ],[ "CT Spawn", "Jump / Throw", "smoke", 1257.861938, -871.968750, -143.906188, -21.318205, -144.344666 ],[ "One-way", "Throw", "smoke", -1209.077515, -873.270447, -167.906188, -48.526600, 67.790833 ],[ "One-way", "Right click", "smoke", -964.056885, -2489.520264, -167.913391, -41.926632, -10.765607 ],[ "Ramp", "Jump / Throw", "smoke", -2026.397583, -2029.968750, -299.060150, -15.312100, 12.573707 ],[ "One-way Kitchen", "Throw", "smoke", -2600.019287, 535.973022, -159.906188, -16.582365, -50.818062 ],[ "B Apps", "Throw", "flashbang", -2114.031250, 830.582214, -121.516441, -69.514664, 38.815456 ],[ "Connector", "Throw", "flashbang", -496.031250, -1309.031250, -159.906188, -65.176048, -10.261290 ],[ "Fireboxes", "Throw", "molotov", -31.432693, -1418.005371, -167.906188, -19.768339, -138.115036 ],[ "Tetris", "Throw", "molotov", -364.996552, -2173.031250, -176.139190, -26.004026, 44.655296 ]]

    if(world == "de_dust2")     coords = [[ "B Entrance", "Throw", "smoke", -1846.553223, 1232.569824, 32.496025, -8.613732, 118.773392 ],[ "CT Mid", "Throw", "smoke", -538.606567, 1382.031250, -111.957108, -35.360550, 53.845985 ],[ "Xbox", "Throw", "smoke", 229.130554, 112.497559, 5.215744, -40.624023, 108.758316 ],[ "Long Corner", "Throw", "smoke", 222.664124, -87.978210, 9.093811, -46.250572, 48.164497 ],[ "CT Spawn", "Run / Throw", "smoke", 860.031250, 790.031250, 3.900847, -23.414322, 43.616291 ],[ "Short (Close)", "Throw", "smoke", 489.998535, 1446.031250, 2.660506, -5.677320, 88.280685 ],[ "Long Gate", "Throw", "smoke", 1752.049561,2046.932739, 0.365111, -33.430305, -130.546280 ],[ "Lower Mid", "Throw", "smoke", -242.031250, 2278.887695, -119.931587, -32.687481, -123.649094 ],[ "Upper Tunnel", "Throw", "smoke", -985.452942, 2553.223877, 1.318862, -26.764244, -143.848251 ],[ "Bombsite B", "Throw", "flashbang", -1273.968750, 2575.968750, 67.353363, -42.043125, 1.218936 ],[ "Bombsite B", "Throw", "molotov", -760.031250, 2066.031250, -45.182931, -23.497030, 132.684860 ]]

    if(world == "de_inferno")   coords = [["Graveyard", "Run / Jump / Throw", "molotov", 2017.503174, 1225.968750, 178.031250, -33.659977, -64.684898],["Mid", "Run / Jump / Throw", "molotov", 2343.707520, 568.729492, 145.928940, -38.500111, -178.690613],["Fountain", "Run / Jump / Throw", "molotov", 362.636536, 1726.205933, 128.376053, -39.875027, 95.339996],["Triple Box", "Throw", "molotov", 877.968750, 2393.092041, 150.504181, -13.529912, 168.994965 ],["Library", "Jump / Throw", "molotov", 1314.032593, 797.901489, 153.586700, -26.509958, 10.154735 ] ,["Box A", "Run / Throw", "molotov", 1364.515015, 277.541809, 135.426834, -17.755112, -48.144848],["Archade", "Run / Jump / Throw", "molotov", 1287.723633, 434.031250, 125.995117, -36.354294, 55.140560],["Default", "Jump / Throw", "molotov", 1961.373169, 1225.968750, 175.031250, -34.145012, -79.280289],["Stove", "Throw", "molotov", 698.401245, -267.968750, 105.031250, -21.614807, 32.599926 ],["Library", "Run / Jump / Throw", "molotov", 1143.116577, 434.031250, 118.129883, -33.825024, 26.110008], [ "Mid", "Run / Throw", "smoke", -857.968750, 449.902283, -31.604805, -44.401531, 1.405892 ], ["Pit", "Run / Throw", "molotov", 2105.090088, 1168.412354, 165.084000, -13.804811, -63.900101], [ "Box A", "Run / Jump / Throw", "molotov", 2079.774658, 1225.998535, 180.093811, -37.500053, -89.940086],[ "Coffins", "Throw", "smoke", 338.871887, 1650.802856, 122.093810, -50.093639, 84.572739 ],[ "B Entrance", "Throw", "smoke", 460.464905, 1828.470825, 136.182693, -25.443281, 86.280159 ],[ "CT Spawn", "Throw", "smoke", 119.999580, 1587.966187, 113.307662, -34.798424, 56.149929 ],[ "Long (Deep)", "Run / Throw", "smoke", 274.681335, -224.627777, 88.093810, -41.052132, 31.799410 ],[ "Pit (Crack)", "Throw", "smoke", 704.160339, 11.968750, 88.797089, -52.337799, -2.135024 ],[ "Short (Deep)", "Throw", "smoke", 697.511902, -242.261810, 91.093810, -53.097946, 16.442726 ],[ "Library to A", "Throw", "smoke", 960.900330, 434.006409, 88.093810, -49.863846, 13.159984 ],[ "Pit to Hay", "Throw", "smoke", 726.031250, 220.962921,94.029999, -55.241890, -8.699924 ],[ "Long", "Throw", "smoke", 491.936829, -267.968750, 88.093810, -42.024933, 45.854645 ],[ "Bombsite B", "Throw", "smoke", 1971.687988, 2636.702393, 128.093811, -39.996227, 175.975357 ],[ "Connector", "Throw", "smoke", 726.031250, 288.680084, 96.093810, -43.560978, 41.450943 ],[ "One-way", "Throw", "smoke", 2631.968750, -16.031250, 84.093810, -5.692367, -179.128860 ],[ "Balcony", "Throw", "smoke", 1913.227295, 1225.968750, 174.093811, -46.497322, -87.005005 ],[ "B Entrance", "Throw", "flashbang", 498.968750, 2444.031250, 160.093811, 1.748943, 142.807571 ],[ "Banana", "Throw", "flashbang", 610.968750, 1873.031250, 134.252365, -44.186985, -0.872295 ],[ "Short", "Walk / Throw", "flashbang", 1275.968750, -111.968750, 256.093811, 9.454458, 116.691383 ],[ "Bombsite A", "Crouch / Throw", "flashbang", 1329.031250, -365.989349, 256.093811, -29.733957, -22.831499 ],[ "B Plant", "Jump / Throw", "molotov", 929.176636, 3295.995117, 144.093811, -45.887463, -131.960571 ],[ "3s", "Throw", "molotov", 999.982422, 1878.530640, 149.329788, -26.647552, 141.132538 ],[ "Coffins", "Throw", "molotov", 664.968750, 1873.031250, 168.093811, -24.272781, 96.641022 ]]

    if(world == "de_nuke")      coords = [[ "Hangar", "Throw", "smoke", -164.092941, -1954.733765, -415.916107, -13.613587, 1.278547 ],[ "Red container", "Throw", "smoke", -533.003357, -833.215759, -193.634827, -30.904673, -43.816589 ],[ "Between containers", "Run / Throw", "smoke", -423.996399, -1753.002075, -415.914856, -2.624159, -50.804165 ],[ "T Outside", "Jump / Throw", "smoke", 1664.031250, -280.002014, -351.906250, -25.048063, -135.212463 ]]

    if(world == "de_overpass")  coords = [["Stairs", "Run + JumpThrow", "molotov", -3750.460938, -250.358826, 520.609863, 5.050490, 35.776577 ],["Barrels", "Run + Throw", "molotov", -430.186157, -1551.968750, 150.031250, -16.164569, 101.556863 ],["Heaven", "Walk + JumpThrow", "molotov", -856.031311, -639.968750, 105.031250, 4.120225, 128.027786 ],["Barrels", "Throw", "molotov", -1580.517578, -710.171814, 135.334778, -14.950030, 60.188404 ],["Water", "Throw", "molotov", -1276.541260, -964.551147, 10.933800, -23.484703, 82.194580],[ "Toilet entrance", "Run / Throw", "smoke", -730.031250, -2225.143799, 240.093811, -51.612926, 149.045975 ],[ "B Bridge", "Throw", "smoke", -617.486389, -1509.028809, 144.093811, -48.988934, 113.071342 ],[ "B Center", "Throw", "smoke", -525.982300, -1551.984375, 144.093811, -43.807911, 110.431473 ],[ "Barrels to Pillar", "Throw", "smoke", -613.014099, -1082.017212, 42.160416, -29.337307, 99.340714 ],[ "B Center", "Throw", "smoke", -1567.968750, -1087.984619, 0.093811, -30.278185, 74.646019 ],[ "Monster to Pillar", "Throw", "smoke", -1645.986938, -1087.982300, 96.093810, -20.015800, 55.835869 ],[ "Heaven", "Throw", "smoke", -1559.968750, -728.785583, 52.574355, -33.446209, 96.293686 ],[ "B Bridge", "Throw", "smoke", -1559.999390, -361.285339, 32.421722, -43.693123, 21.193089 ],[ "Heaven", "Throw", "smoke", -2174.002441, -1151.968750, 398.197235, -26.368107, 71.543701 ],[ "Long to Boxes", "Throw", "smoke", -2025.534058, -865.001343, 395.427856, -28.313963, 114.564102 ],[ "Bank", "Throw", "smoke", -2162.000488, -519.968750, 391.460358, -29.749702, 100.836487 ],[ "Truck to Bank", "Throw", "smoke", -3612.545654, -177.626740, 512.791992, -40.392601, 51.259613 ],[ "Boxes to Truck", "Throw", "smoke", -3540.031250, -381.968750, 528.080200, -14.256992, 41.849758 ],[ "Truck", "Throw", "smoke", -2351.968750, -815.968750, 391.089905, -34.683971, 81.500427 ],[ "Trash", "Throw", "smoke", -2351.968750, -414.031250, 388.562317, -60.588089, 73.825958 ],[ "Trash", "Throw", "smoke", -3383.369629, 35.247875, 516.906006, -18.035419, 31.699080 ],[ "Long", "Crouch / Throw", "smoke", -1993.398926, 537.698242, 475.093810, -28.677984, -169.596695 ],[ "Monster", "Throw", "smoke", -1926.860962, 1311.968750, 355.030579, -46.200985, -40.010532 ],[ "One-way", "Throw", "smoke", -2191.968750, 1311.968750, 356.093811, -8.861760, -55.390415 ],[ "One-way", "Right click", "smoke", -1826.375610, 629.178894, 256.093811, 26.580435, -17.457275 ],[ "One-way", "Throw", "smoke", -2012.968750, -1231.968750, 240.093811, 16.218643, 63.144173 ],[ "Short B", "Throw", "smoke", -2115.841309, 992.920288, 480.093810, -22.936214, -57.690578 ],[ "Bombsite A", "Throw", "flashbang", -2604.023926, 1102.215088, 480.093810, -24.090078, 70.938210 ],[ "Barrels", "Throw", "molotov", -1580.023315, -480.767883, 136.093811, -20.147602, 53.764153 ],[ "Bombsite B", "Throw", "molotov", -1399.968750, -139.998840, 0.093811, -15.444187, 63.084324 ]]

    if(world == "de_train")     coords = [[ "B Upper", "Throw", "smoke", -1055.968750, -1607.969116, -151.906188, -9.076089, -21.028521 ],[ "B Lower", "Throw", "smoke", -1159.978027, -1088.112549, -95.909508, -9.122071, 13.307947 ],[ "Blue to Bombsite", "Run / Throw", "smoke", -1155.979004, -1301.504395, -95.906189, -15.857571, 38.882820 ],[ "Connector", "Run / Throw", "smoke", -1159.999634, -1048.001709, -95.906189, -11.023086, 5.091055 ],[ "Ivy (right)", "Throw", "smoke", 1388.426270, 1446.000488, -223.906189, -6.188282, -95.524574 ],[ "Ivy (left)", "Run / Throw", "smoke", 1535.968750, 1775.968750, -223.906189, -9.818258, -112.486588 ],["Bombsite A to Connector", "Both buttons", "smoke", -655.968750, -399.892731, 16.093811, -46.002502, 10.890710 ],[ "Blue to Red train", "Throw", "smoke", -645.479370, 1697.721924, -209.906189, -41.564690, -65.086685 ],[ "Electric box", "Throw", "smoke", -481.865631, 1725.011597, -209.906189, -45.937080, -78.790627 ],[ "Blue train (Left)", "Throw", "smoke", -555.031250, 1262.031250, -212.532227, -68.096550, -50.974125 ],[ "Green to Red train", "Throw", "smoke", -838.162292, 1268.024414, -222.906189, -37.604507, -42.064575 ],[ "Ivy to Green train", "Throw", "smoke", -640.027832, -583.969666, 16.093811, -44.699406, 32.218452 ],[ "Bombsite A to Red train", "Throw", "smoke", -453.358459, 1286.284668, -86.490753, -25.130558, -58.731426 ],[ "Main", "Throw", "smoke", 1021.096924, -254.988556, -215.906189, -38.494926, 154.562332 ],[ "Bombsite A", "Run / Throw", "flashbang", 400.031250, -420.031250, -211.777573, -28.859020, -89.674629 ],[ "Blue train (Back)", "Run / Throw", "molotov", -790.028748, 375.928741, -215.906189, -11.270589, 27.332729 ]]

    if(world == "de_cache")     coords = [[ "Ventsroom", "Throw", "smoke", 837.744141, -872.015564, 1614.093750, -15.362073, 177.850555 ],[ "Headshot", "Throw", "smoke", 960.031250, -1463.968750, 1644.093750, -26.400745, 162.851730 ],[ "B Center", "Throw", "smoke", 827.971313, -1463.968750, 1614.093750, -21.995483, 162.191437 ],[ "Mid Center", "Throw", "smoke", 1711.974121, 463.987732, 1614.093750, -10.675973, -167.299591 ],[ "Connector", "Throw", "smoke", 1160.711182, 715.841675, 1613.093750, -31.334572, -153.088974 ],[ "White box", "Throw", "smoke", 2156.583740, -182.968750, 1613.483887, -22.077839, 161.943924 ],[ "One-way", "Throw", "smoke", 1037.031250, 513.031250, 1613.550293, -49.137814, 104.639671 ],[ "Mid (Right side)", "Throw", "smoke", 1711.968750, -71.968750, 1614.093750, -10.560504, 161.185349 ],[ "Bombsite A", "Crouch / Throw", "smoke", 154.413376, 2096.080566, 1688.093750, 9.370919, -29.337667 ],[ "Short", "Run / Throw", "smoke", 139.031250, 2197.968750, 1688.093750, -6.040052, -60.836231 ],[ "Bombsite A", "Throw", "smoke", 1319.968750, 1520.395508, 1701.093750, -57.767025, 161.424835 ],[ "Forklift", "Throw", "smoke", 1230.754150, 1612.968750, 1701.965088, -74.514435, -173.894516 ],[ "Main", "Throw", "smoke", -782.198059, 1110.000366, 1689.439697, -9.703021, 24.963852 ],[ "Main", "Throw", "smoke", -429.968750, 2244.968750, 1687.093750, -66.017174, -31.140173 ],[ "Main", "Throw", "smoke", -50.012558, 2261.968750, 1687.093750, -18.612713, -64.612831 ],[ "Vents", "Run / Throw", "smoke", -996.979553, 1440.231689, 1691.182373, -33.181599, -46.326721 ],[ "Bombsite A", "Throw", "flashbang", -358.534668, 2147.728027, 1687.093750, -17.540194, 2.039984 ],[ "Bombsite A", "Throw", "flashbang", 89.984558, 2244.983398, 1687.093750, -71.181236, -93.482628 ],[ "Bombsite B", "Both buttons", "flashbang", -633.975891, -379.968750, 1620.093750, -41.629662, -58.865555 ],[ "Mid", "Crouch / Throw", "flashbang", 114.968750, -107.322037, 1613.718506, -16.913092, -84.200432 ],[ "Mid", "Run / Throw", "flashbang", 1736.970581, 308.968750, 1614.093750, -9.157659, 162.762833 ],[ "Bombsite B", "Throw", "flashbang", 879.802185, -872.031250, 1614.093750, -14.157107, 177.892853 ],[ "Bombsite B", "Throw", "molotov", 907.649597, -1228.031250, 1614.093750, -23.876366, -179.771790 ],[ "White box", "Throw", "molotov", 605.005188, -149.968750, 1689.035889, -6.584105, 133.537994 ],[ "Boost", "Throw", "molotov", 11.759085, -148.994904, 1613.093750, -32.654572, 38.675369 ]]



    var font1 = Render.AddFont("Verdana", 10, 600)

    var font2 = Render.AddFont("Verdana", 12, 600)

    var font3 = Render.AddFont("Verdana", 12, 500)

    var scsiz = Render.GetScreenSize()

    var scrmid = [Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2]

    var coordslenght = 0

    color_circle = [0,0,0,0]

    while(coords[coordslenght]) {

      coordslenght++

    }

    for(var i = 0; i < coordslenght; i++) {

      crd = coords[i]

      if(weaponnames[crd[2]].indexOf(weapon) >= 0) {

        cds = Render.WorldToScreen([crd[3], crd[4], crd[5]])

        var distance = dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer()))

        if(distance >= 800 - 255 && distance <= 800) {
          Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, Math.round(Math.min(255, 800 - distance))), font1)
          continue;
        }
        if(distance < 800 - 255 && distance >= 10) {
          Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, 255), font1)
        }

        

        if(dis([crd[3], crd[4], crd[5]], Entity.GetRenderOrigin(Entity.GetLocalPlayer())) < 10) {

          Render.StringCustom(cds[0], cds[1], 1, crd[0], alp(color, 255), font2)



          vec = atv(crd[6], crd[7])

          wec = Render.WorldToScreen([crd[3] + vec[0] * 200, crd[4] + vec[1] * 200, crd[5] + 64 + vec[2] * 200])

          

          Render.StringCustom(wec[0] + 14, wec[1] - 9, 0, crd[1], alp(color, 255), font3)

          Render.Line(scsiz[0] / 2, scsiz[1] / 2, wec[0], wec[1], alp(color, 255))


          if(( Math.abs(wec[0] - scrmid[0]) + Math.abs(wec[1] - scrmid[1]) ) <= 5)
          {
            color_circle = [0,255,0,255]
          }
          else {
            color_circle = [255,0,0,255]
          }

          Render.Circle(wec[0], wec[1], 4, color_circle)
          Render.Circle(wec[0], wec[1], 3, color_circle)
          Render.Circle(wec[0], wec[1], 2, color_circle)
          Render.Circle(wec[0], wec[1], 1, color_circle)
          Render.FilledRect(wec[0], wec[1], 1, 1, color_circle)

          Render.Circle(wec[0], wec[1], 5, alp(color, 255))
        } 
      } 
    } 
  }

  
}

Cheat.RegisterCallback("Draw","grenade_helper");

Global.RegisterCallback("Draw", "draw")