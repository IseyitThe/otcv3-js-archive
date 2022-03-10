var locations = [
   [ "de_inferno", [875.9984130859375,2388.717529296875,209.15281677246094], [-15.088058471679688,167.61131286621094,0], "molotov","boost", "Throw", 0 ],
	[ "de_inferno", [363.1495666503906,1729.6339111328125,185.4627685546875], [-42.11574172973633,95.83378601074219,0], "molotov","fountain", "Run+Jump+Throw", 0 ],
	[ "de_inferno", [677.5061645507813,1873.083251953125,275.97381591796875], [-24.77174987792969,94.12499237060547,0], "molotov","Back of coffins", "Run+Throw", 8],
	[ "de_inferno", [929.793701171875,3297.88427734375,208.03125], [-45.240116119384766,-131.6338348388672,0], "molotov","b plant", "Jump+Throw", 0 ],
	[ "de_inferno", [1354.9896240234375,562.964111328125,194.08775329589844], [-34.980167388916016,-1.4850000143051147,0], "molotov", "Site/Box", "Jump+Throw" ],
    [ "de_inferno", [2016.1488037109375,1225.9681396484375,238.09381103515625], [-34.54010772705078,-64.21525573730469,0], "molotov", "Graveyard", "Run+Jump+Throw" ],
    [ "de_inferno", [2103.02734375,1225.9996337890625,238.03125], [-32.284767150878906,-89.29568481445313,0], "molotov", "A Box", "Run+Jump+Throw" ],
    [ "de_inferno", [1956.4254150390625,1225.9969482421875,238.03125], [-36.13465118408203,-87.0395278930664,0], "molotov", "A Box+Site", "Run+Jump+Throw" ],
    [ "de_inferno", [2101.66455078125,1170.7098388671875,228.4114532470703], [-16.804609298706055,-63.30951690673828,0], "molotov", "Pit", "Run+Throw", 22 ],
    [ "de_inferno", [2349.379638671875,568.1921997070313,212.2619171142578], [-37.12451934814453,-178.91851806640625,0], "molotov", "MID", "Run+Jump+Throw" ],
    [ "de_inferno", [1362.193115234375,278.77166748046875,192.34524536132813], [-19.46942138671875,-47.9648551940918,0], "molotov", "A Box", "Run+Throw", 22 ],
    [ "de_inferno", [1762.0330810546875,1360.9228515625,224.03125], [-19.634239196777344,-54.91761779785156,0], "molotov", "Graveyard v2", "Throw" ],
    [ "de_inferno", [2088.603759765625,1010.026123046875,223.90396118164063], [-2.529167413711548,20.762910842895508,0], "molotov", "Library", "Run+Throw", 22 ],
    [ "de_inferno", [2209.47265625,949.91162109375,224.4017791748047], [-12.594948768615723,-94.87490844726563,0], "molotov", "Under Balcony", "Throw" ],
    [ "de_inferno", [2076.50244140625,1166.2220458984375,227.57781982421875], [-10.779888153076172,-58.55031967163086,0], "high explosive grenade", "A Box", "Run+Throw", 22 ],
    [ "de_inferno", [430.74438476563,1792.8693847656,290.03125], [-16.198610305786,88.217079162598,0], "molotov", "banana", "Run+Throw", 1 ],
	[ "de_inferno", [2037.94384765625,1109.1815185546875,220.62876892089844], [-16.537595558166504,-37.23824005126953,0], "high explosive grenade","Onspot-91HP", "Run+Throw",33 ],
    [ "de_inferno", [1971.43017578125,1094.82421875,220.17811584472656], [-48.11808776855469,-88.9716796875,0], "molotov", "Right side", "Jump+Throw" ],
    [ "de_inferno", [1370.03125,929.795166015625,210.65403747558594], [-15.146607398986816,30.065826416015625,0], "molotov", "CT Spawn", "Run+Throw", 22 ],
    [ "de_inferno", [1900.05712890625,501.0020751953125,224.09381103515625], [-45.50659942626953,50.22550582885742,0], "molotov", "Library", "Run+Jump+Throw" ],
	[ "de_inferno", [1289.9197998046875,540.9373168945313,185.51490783691406], [-46.20145034790039,54.244258880615234,0], "molotov","Archade", "Run+Jump+Throw", 0 ],
	[ "de_inferno", [1764.96875,-108.96875,194.13592529296875], [-27.57658576965332,60.56570053100586,0], "molotov", "Under balcony", "Throw" ],
    [ "de_inferno", [339.9753723144531,2027.8807373046875,192.09381103515625], [-48.52350616455078,83.03205108642578,0], "molotov","sandwich", "Jump+Throw", 0 ],
	[ "de_inferno", [442.907470703125,2622.138916015625,224.09381103515625], [-49.4201774597168,-81.290771484375,0], "molotov","back molly", "Run+Jump+Throw", 0 ],
	[ "de_inferno", [442.907470703125,2622.138916015625,224.09381103515625], [-49.4201774597168,-81.290771484375,0], "high explosive grenade","back he", "Run+Jump+Throw", 0 ],
    [ "de_inferno", [1813.5391845703,35.910182952881,192.06773376465], [-11.584044456482,44.004806518555,0], "high explosive grenade","Onspot", "Throw", 0 ],
    [ "de_inferno", [1733.215210,-44.736149,194.06773376465], [-12.087965965271,43.120056152344,0], "high explosive grenade","Onspot/Far corner", "Run+Throw", 10 ],
    [ "de_inferno", [2028.1564941406,2583.8244628906,390.19512939453], [-12.903814315796,173.18667602539,0], "molotov","Tayfyn-And-Zorry", "Run+Throw", 8 ],
    [ "de_inferno", [1733.215210,-44.736149,194.06773376465], [-12.087965965271,43.120056152344,0], "molotov","Onspot/Far corner", "Run+Throw", 2 ],
    [ "de_inferno", [1643.802490234375,1214.0023193359375,225.2711944580078], [12.230835247039795,-125.15312042236328,0], "high explosive grenade","mid", "Run+Jump+Throw", 0 ],
	[ "de_cbble", [418.25445556640625,-291.0088195800781,-15.969482421875], [-11.940940856933594,-141.7146453857422,0], "molotov", "Rock", "Throw", 0 ],
    [ "de_cbble", [-158.22752380371094,-16.013084411621094,32.03125], [-33.66744613647461,-48.10280990600586,0], "molotov", "Drop", "Throw" ],
    [ "de_cbble", [-134.26361083984375,-472.07763671875,32.03125], [8.260692596435547,-82.8593978881836,0], "molotov", "Fountain", "Jump+Throw" ],
    [ "de_cbble", [212.24295043945313,-120.43531036376953,45.717777252197266], [-7.2488813400268555,-68.04000854492188,0], "molotov", "Chicken Coop", "Run+Throw", 22 ],
    [ "de_cbble", [271.10662841796875,-199.01580810546875,50.6855354309082], [-7.755178928375244,-97.36959075927734,0], "molotov", "Fountain", "Throw" ],
    [ "de_cbble", [54.487701416016,-108.96550750732,31.6855354309082], [4.35141799449921,-29.683708572388,0], "molotov", "Fountain", "Run+Jump+Throw" ],
    [ "de_cbble", [281.586548,-76.822685,51.6855354309082], [-2.7429327201843,-94.529113769531,0], "high explosive grenade", "Fountain", "Run+Throw", 1 ],
    [ "de_cbble", [-300.03118896484,-16.15541458129,32.03125], [-13.9155866622925,-34.958048248291,0], "molotov", "Corner / Drop", "Run+Jump+Throw", 1 ],
    [ "de_cbble", [-64.657661437988,-355.10583496094,32.03125], [-4.5250657081604,-66.865000915527,0], "high explosive grenade", "Fountain", "Throw", 1 ],
    [ "de_overpass", [-1058.0670166015625,-614.3963623046875,160.03125], [-11.882340431213379,85.58399963378906,0], "molotov", "Water", "Throw", 0 ],
	[ "de_overpass", [-431.083984375,-1551.96875,208.03125], [-17.816823959350586,101.29425048828125,0], "molotov","barrels", "Run+Throw",22 ],
    [ "de_overpass", [-1275.1700439453125,-967.4072265625,69.54157257080078], [-23.194683074951172,81.81474304199219,0], "molotov", "Water", "Throw", ],
    [ "de_overpass", [-1565.90380859375,-1085.5133056640625,64.03125], [-26.96200942993164,65.58547973632813,0], "molotov", "Barrels", "Run+Throw", 22 ],
    [ "de_overpass", [-1276.89990234375,481.6439514160156,99.29470825195313], [-1.6839944124221802,-40.52040481567383,0], "molotov", "Long", "Run+Throw", 22 ],
    [ "de_overpass", [-1017.0237426757813,-564.472900390625,160.03125], [-11.917777061462402,74.4395654296875,0], "high explosive grenade", "Barrels fakelag-off", "Throw" ],
    [ "de_overpass", [-2079.580322265625,558.7537841796875,579.5204467773438], [-58.783111572265625,-139.71771240234375,0], "molotov","fd", "Jump+Throw", 0 ],	
    [ "de_overpass", [-856.03125,-638.96875,160.09381103515625], [2.931612968444824,128.65623474121094,0], "molotov","heaven", "Run+Jump+Throw", 0 ],
    [ "de_overpass", [-258.62713623046875,-1085.50732421875,79.9764404296875], [-30.743484497070313,152.96783447265625,0], "molotov","short on 1w", "Run+Throw",18 ],
    [ "de_overpass", [-1580.9578857421875,-1087.9552001953125,200.03125], [-8.577723503112793,76.9768295288086,0], "high explosive grenade","Water", "Run+Throw",1 ],
    [ "de_overpass", [-1045.7066650390625,-563.4999389648438,160.03125], [-13.383971214294434,86.06208038330078,0], "high explosive grenade","fakeduck-70HP", "Run+Throw",5 ]
    [ "de_overpass", [-1744.03125,1307.96875,419.4472961425781], [-16.4783992767334,-125.31370544433594,0], "molotov","plant", "Run+Throw",1 ],
	[ "de_overpass", [-3264.019287109375,162.6830291748047,576.2027587890625], [-15.415439414978027,32.65627212524414,0], "molotov","fd", "Run+Throw",0 ],
	[ "de_overpass", [-265.4296569824219,-1014.823974609375,75.08824157714844], [-3.481962299346924,153.0970001220703,0], "high explosive grenade","short oneway fakelag-off 54hp", "Run+Jump+Throw", 0 ],
	[ "de_overpass", [-2474.96875,-1987.7607421875,578.5694580078125], [-13.23123550415039,82.03817749023438,0], "molotov","toilet", "Throw", 0 ],
	[ "de_overpass", [-2474.96875,-1987.7607421875,578.5694580078125], [-13.23123550415039,82.03817749023438,0], "high explosive grenade","toilet", "Run+Throw", 1 ],
	[ "de_overpass", [-3261.715087890625,278.5001220703125,559.061279296875], [-21.940736770629883,13.571399688720703,0], "molotov","car", "Throw", 0 ],
    [ "de_overpass", [-996.966796875,-539.15863037109,160.03125], [-2.2674403190613,101.00357055664,0], "high explosive grenade", "85-NOSAFE", "Run+Throw", 23 ],
    [ "de_overpass", [-728.95941162109,-14.095175743103,115.512382507324], [-12.903607368469,124.07155609131,0], "molotov", "Under-Water", "Run+Throw", 28 ],
    [ "de_overpass", [-612.40386962891,-1157.0159912109,134.742225646973], [-22.717077255249,97.221946716309,0], "molotov", "Barrels", "Run+Throw", 1 ],
    [ "de_overpass", [-1543.564697,-902.474121,115.742225646973], [4.0240458488464,61.69671585083,0], "high explosive grenade", "Barrels", "Run+Jump+Throw", 1 ],
    [ "de_overpass", [-768.15313720703,80.262344360352,135.107666015625], [-12.491834640503,-133.96389770508,0], "molotov","Water", "Run+Throw", 7 ],
    [ "de_overpass", [-1037.2846679688,-638.74468994141,160.03125], [-15.649391174316,74.50463104248,0], "molotov","Barrels", "Throw", ],
    [ "de_overpass", [-1293.7613525390625,-1078.581298828125,64.03125], [-23.324857711791992,93.77328491210938,0], "molotov","Under-Water", "Throw", 0 ],
    [ "de_overpass", [-1045.7066650390625,-563.4999389648438,160.03125], [-13.383971214294434,86.06208038330078,0], "high explosive grenade","424", "Run+Throw",5 ],
    [ "de_overpass", [-2081.110595703125,594.3135375976563,577.717041015625], [20.970415115356445,-44.016475677490234,0], "molotov","b push", "Run+Jump+Throw", 0 ],
    [ "de_overpass", [-2441.76806640625,95.25958251953125,472.5286865234375], [-16.950772857666016,66.34442291259766,0], "high explosive grenade","fakeduck-70HP", "Throw", 0 ],
    [ "de_overpass", [-2441.76806640625,95.25958251953125,472.5286865234375], [-16.650772857666016,66.34442291259766,0], "molotov","fakeduck", "Throw", 0 ],
    [ "de_overpass", [-611.7730102539063,-1120.4915771484375,122.72051239013672], [2.627079010009766,109.64917907714844,0], "molotov","water-by-player", "Jump+Throw", 0 ],
	[ "de_shortdust", [-768.921936,795.664001,100.03125], [6.8205275535583,-41.455672454834,0], "high explosive grenade", "43HP-CT", "Run+Jump+Throw" ],
    [ "de_shortdust", [-880.750244140625,950.0850830078125,99.03125], [-14.542377471923828,-35.758758544921875,0], "molotov", "Car", "Run+Throw", 4 ],
    [ "de_shortdust", [-1247.96875,1154.4630126953125,-121.49449157714844], [-32.16046142578125,-30.957191467285156,0], "molotov","pit holder", "Run+Throw",0 ],
    [ "de_shortdust", [654.0101928710938,1008.4571533203125,96.03125], [-9.028057098388672,-120.85869598388672,0], "molotov", "Barrels", "Run+Throw", 1 ],
    [ "de_shortdust", [-1279.95751953125,1039.959716796875,-106.33393859863281], [-28.097429275512695,-18.630277633666992,0], "molotov", "Oneway-Car", "Run+Throw", 2 ],
	[ "de_shortdust", [-309.7664794921875,1931.7659912109375,96.09381103515625], [-5.443653583526611,-45.43484878540039,0], "molotov","box", "Run+Throw",22 ],
    [ "de_shortdust", [-391.27145385742,786.81726074219,100.03125], [-21.001636505127,-53.710342407227,0], "molotov","fakeduck-ct", "Throw",0 ],
    [ "de_shortdust", [-910.35992431641,970.1240234375,99.09381103515625], [13.721249580383,-35.259700775146,0], "high explosive grenade","Car", "Run+Jump+Throw",4 ],
    [ "de_shortdust", [-911.27862548828,898.36340332031,99.09381103515625], [6.5889212608337,-40.6231980896,0], "high explosive grenade","75HP-CT-FAKELAG-OFF", "Run+Jump+Throw",4 ],
    [ "de_shortdust", [-318.39669799805,634.10119628906,28.09381103515625], [-18.187553405762,-35.989849090576,0], "molotov","Barrels", "Run+Throw",7 ],
    [ "de_shortdust", [-223.39918518066,531.02197265625,47.09381103515625], [-13.178301811218,22.96457862854,0], "molotov","Tunnel", "Run+Throw",3 ],
    [ "de_shortdust", [-227.63909912109,531.01525878906,47.09381103515625], [-13.178354263306,23.428928375244,0], "high explosive grenade","Tunnel-70HP", "Run+Throw",4 ],
    [ "de_shortdust", [-179.1764831543,414.03912353516,63.09381103515625], [-10.364782333374,31.167345046997,0], "high explosive grenade","Tunnel-80HP", "Run+Throw",5 ],
    [ "de_shortdust", [-176.642471,1805.493286,96.09381103515625], [-6.5653779029846,-45.643031311035,0], "high explosive grenade","Tunnel", "Run+Throw",7 ],
    [ "de_shortdust", [-176.642471,1805.493286,96.09381103515625], [-6.5653779029846,-45.643031311035,0], "molotov","Tunnel", "Run+Throw",4 ],
    [ "de_shortdust", [-1303.968384,1095.969116,95.09381103515625], [1.756760025024,-36.840308380127,0], "molotov","fakeduck-ct Safe", "Run+Jump+Throw",4 ],
    [ "de_shortdust", [-912.1661987304688,854.3309326171875,99.03125], [6.84832893371582,-39.04734390258789,0], "high explosive grenade","fakeduck-77HP NOSAFE", "Run+Jump+Throw", 0 ],
	[ "de_train", [-337.395263671875,306.5303955078125,-151.96875], [-29.86281967163086,-36.48215103149414,0], "molotov","site", "Run+Throw",22 ],
	[ "de_train", [89.01020812988281,418.96875,-151.96875], [-31.59599494934082,-50.71765899658203,0], "molotov","heaven", "Throw", 0 ],
    [ "de_train", [869.979736328125,-271.7411804199219,-151.96875], [-22.132932662963867,150.2006072998047,0], "molotov","mein ", "Run+Throw",19 ],
    [ "de_train", [1294.4680175781,400.02404785156,-151.96875], [-9.8842000961304,175.49682617188,0], "molotov","fiveseven-spot", "Throw", ],
    [ "de_train", [1294.3596191406,400.02493286133,-151.96875], [-4.9444236755371,175.48867797852,0], "high explosive grenade","fiveseven-spot", "Throw", ],
    [ "de_train", [-648.96697998047,615.21185302734,-151.96875], [0.20607188344002,-30.658504486084,0], "molotov","A-site", "Jump+Throw", ],
    [ "de_train", [1180.5014648438,-196.05508422852,-151.96875], [-32.183605194092,-167.6908416748,0], "molotov","Sniper-Nest", "Throw", 0 ],
    [ "de_train", [-628.4265747070313,557.722900390625,-151.96875], [-1.281444549560547,-33.17278289794922,0], "high explosive grenade","heaven-Fakelag-off", "Run+Jump+Throw",1 ],
    [ "de_mirage", [660.7953491210938,-1128.0538330078125,-63.96875], [0.714964747428894,-136.20022583007813,0], "molotov","Box 1-Way 2", "Jump+Throw", 0 ],
    [ "de_mirage", [497.6351318359375,-1570.1383056640625,-196.78262329101563], [-25.29862403869629,178.2367401123047,0], "molotov","stairs", "Throw", 0 ],
    [ "de_mirage", [-543.8424682617188,-1309.03125,-95.96875], [-11.039438247680664,-74.42620086669922,0], "molotov","one-way site", "Throw", 0 ],
    [ "de_mirage", [-1119.972412109375,-1526.9805908203125,-92.08175659179688], [-17.373607635498047,0.02280529960989952,0], "molotov","ramp", "Throw", 0 ],
    [ "de_mirage", [-1180.7381591796875,679.6217651367188,-15.96875], [-9.351309776306152,174.55308532714844,0], "molotov","car", "Throw", 0 ],
    [ "de_mirage", [-36.230712890625,821.3238525390625,-71.96875], [-8.639360427856445,-150.7427215576172,0], "molotov","under", "Run+Throw",5 ],
    [ "de_mirage", [-1044.3841552734375,-2518.940185546875,-103.96875], [-12.823919296264648,38.4881477355957,0], "molotov","rush a", "Run+Throw",5 ],
    [ "de_mirage", [-988.4798583984375,-463.10052490234375,-240.414794921875], [-32.62140655517578,-116.92143249511719,0], "molotov","a to b", "Half throw", 0 ],
    [ "de_mirage", [-1017.2653198242188,-276.7893371582031,-303.96875], [-27.152263641357422,-102.46926879882813,0], "molotov","secret near jungle", "Throw", 0 ],
    [ "de_mirage", [-813.2587280273438,-1342.4200439453125,-103.96875], [-25.164628982543945,-92.21912384033203,0], "molotov","boost", "Throw", 0 ],
    [ "de_mirage", [-1512.7239990234375,-2347.41748046875,-180.6666259765625], [-10.286823272705078,1.1564241647720337,0], "molotov","a plant from ct ", "Run+Throw",22 ],
    [ "de_mirage", [362.7731018066406,-1711.981689453125,-129.35638427734375], [-12.263968467712402,123.63943481445313,0], "molotov","pit 1w", "Run+Throw",26 ],
    [ "de_mirage", [637.1300048828125,-1442.285888671875,-199.96875], [-11.592479705810547,-131.1429901123047,0], "molotov"," near pit", "Run+Throw",10 ],
    [ "de_mirage", [-33.552635192871094,-1916.558837890625,24.03125], [2.6190600395202637,71.7715835571289,0], "molotov","one-way ramp", "Run+Jump+Throw", 0 ],
    [ "de_mirage", [94.5410385131836,-2366.99169921875,24.03125], [18.764753341674805,115.38932037353516,0], "molotov","a plant", "Run+Throw",10 ],
    [ "de_mirage", [78.44137573242188,-2347.5078125,24.03125], [17.709062576293945,113.60216522216797,0], "high explosive grenade","a plant", "Run+Throw",2 ],
	[ "de_mirage", [942.4389038085938,-1240.2662353515625,-44.96875], [-18.37839698791504,-165.95553588867188,0], "molotov","stairs/tron", "Run+Throw",0 ],
    [ "de_mirage", [-1037.25390625,-155.898681640625,-303.96875], [-10.188270568847656,-76.55209350585938,0], "molotov","short", "Run+Throw",18 ],
    [ "de_mirage", [-1943.2867431640625,765.7467041015625,16.03125], [-1.156121921539307,-89.85923767089844,0], "molotov","kitchen", "Run+Throw",1 ],
    [ "de_mirage", [351.62335205078125,-141.22793579101563,-101.96875], [-16.597803115844727,-152.40158081054688,0], "molotov","window", "Run+Throw",28 ],
    [ "de_mirage", [-1033.08837890625,-162.3196258544922,-303.96875], [-10.437341690063477,-76.62198638916016,0], "high explosive grenade","short", "Run+Throw",22 ],
    [ "de_mirage", [-401.9287109375,-1587.27294921875,24.03125], [-17.93248748779297,2.9161977767944336,0], "molotov","ramp 1w", "Throw", 0 ],
    [ "de_aztec", [-687.39367675781,-790.27362060547,-312.30386352539], [-20.45291519165,113.42259979248,0], "molotov","Stone", "Run+Throw", 4 ],
    [ "de_aztec", [-687.39367675781,-790.27362060547,-312.30386352539], [-20.45291519165,113.42259979248,0], "high explosive grenade","Stone -93hp", "Run+Throw", 4 ],
    [ "de_aztec", [-918.66717529297,-623.76849365234,-288.30386352539], [-26.354013442993,99.820770263672,0], "high explosive grenade","Stone -90hp", "Throw",0 ],
    [ "de_aztec", [-918.66717529297,-623.76849365234,-288.30386352539], [-26.354013442993,99.820770263672,0], "molotov","Stone", "Throw",0 ],
    [ "de_aztec", [226.29455566406,-490.97604370117,-160.30386352539], [-16.746335983276,-131.89080810547,0], "molotov","Door-Fakelag-off", "Run+Throw", 25 ],
    [ "de_aztec", [-701.8319702148438,-327.07470703125,-159.96875], [-9.834869,162.928897,0], "high explosive grenade","Stone", "Run+Throw",19 ],
    [ "de_aztec", [-701.8319702148438,-327.07470703125,-159.96875], [-9.834869,162.928897,0], "molotov","Stone", "Run+Throw",19 ],
    [ "de_aztec_HT", [-687.39367675781,-790.27362060547,-312.30386352539], [-20.45291519165,113.42259979248,0], "molotov","Stone", "Run+Throw", 4 ],
    [ "de_aztec_HT", [-687.39367675781,-790.27362060547,-312.30386352539], [-20.45291519165,113.42259979248,0], "high explosive grenade","Stone -93hp", "Run+Throw", 4 ],
    [ "de_aztec_HT", [-918.66717529297,-623.76849365234,-288.30386352539], [-26.354013442993,99.820770263672,0], "high explosive grenade","Stone -90hp", "Throw",0 ],
    [ "de_aztec_HT", [-918.66717529297,-623.76849365234,-288.30386352539], [-26.354013442993,99.820770263672,0], "molotov","Stone", "Throw",0 ],
    [ "de_aztec_HT", [226.29455566406,-490.97604370117,-160.30386352539], [-16.746335983276,-131.89080810547,0], "molotov","Door-Fakelag-off", "Run+Throw", 25 ],
    [ "de_aztec_HT", [-701.8319702148438,-327.07470703125,-159.96875], [-9.834869,162.928897,0], "high explosive grenade","Stone", "Run+Throw",19 ],
    [ "de_aztec_HT", [-701.8319702148438,-327.07470703125,-159.96875], [-9.834869,162.928897,0], "molotov","Stone", "Run+Throw",19 ],
    [ "de_vertigo", [-1839.6301269531,-214.72941589355,11840.637695313], [-13.315687179565,66.154853820801,0], "high explosive grenade","fakeduck", "Throw",0 ],
    [ "de_vertigo", [-1839.6301269531,-214.72941589355,11840.637695313], [-13.315687179565,66.154853820801,0], "molotov","fakeduck", "Throw",0 ],
    [ "de_vertigo", [-1834.6168212891,-180.30085754395,11840.637695313], [-16.746797561646,59.094627380371,0], "molotov","fakeduck down", "Throw",0 ],
    [ "de_vertigo", [-1433.408203125,972.87274169922,11840.637695313], [-8.855263710022,-134.87399291992,0], "molotov","Back of B", "Run+Throw",39 ],
    [ "de_vertigo", [-1380.7994384766,963.830078125,11840.637695313], [-20.658113479614,-145.78451538086,0], "molotov","boxes-left", "Run+Throw",7 ],
    [ "de_vertigo", [-2032.29833984375,-578.7349243164063,11840.03125], [-22.08106803894043,62.26222610473633,0], "molotov","fakeduck", "Throw", 0 ],
    [ "de_bank", [-532.20855712891,-243.56062316895,210.21447753906], [-3.5713124275208,-2.9621315002441,0], "high explosive grenade","fakelag-off", "Run+Throw", 17 ],
    [ "de_bank", [-444.82104492188,-395.07797241211,252.21447753906], [-2.1272838115692,1.4907883405685,0], "high explosive grenade","fakelag-off-02", "Run+Throw", 6 ],
    [ "de_bank", [-551.46569824219,-245.79716491699,212.21447753906], [-1.4017670154572,-3.5105814933777,0], "molotov","fakelag-off-molotov", "Run+Throw", 13 ],
    [ "de_bank", [-500.65835571289,-396.25863647461,252.21447753906], [-1.4310672283173,2.2615494728088,0], "molotov","fakelag-off-02-molotov", "Run+Throw", 1 ],
    [ "de_bank", [-520.721130,-584.290344,252.21447753906], [9.018405,2.088689,0], "molotov","molotov-FBICAR", "Run+Jump+Throw", 101 ],
    [ "de_bank", [-124.025764,-777.672363,252.03125], [-7.324351,-9.790358,0], "molotov","trash-UNSAFE", "Run+Throw",22 ],
    [ "de_tulip", [6283.4453125,4458.3481445313,-56.88412475586], [3.2317614555359,-135.34457397461,0], "molotov","Boost", "Run+Jump+Throw",22 ],
    [ "de_tulip", [6299.3696289063,4425.8061523438,-55.88412475586], [3.4833682060242,-138.59098815918,0], "high explosive grenade","Boost", "Run+Jump+Throw",22 ],
    [ "de_tulip", [6262.509765625,4549.84912109375,-59.96875], [-25.941469192504883,-127.37826538085938,0], "high explosive grenade","boost", "Run+Throw",18 ],
    [ "de_tulip", [5893.810546875,2735.4509277344,0.46875], [-11.370895195007,131.24389648438,0], "molotov","boost", "Throw", ],
    [ "de_tulip", [6050.4140625,2933.3586425781,0.46875], [9.8783960342407,-135.06419372559,0], "molotov","car", "Run+Jump+Throw", ],
    [ "de_tulip", [6068.712890625,2926.1301269531,0.46875], [14.135782089233,-136.14909362793,0], "high explosive grenade","Fountain", "Run+Jump+Throw", ],
    [ "de_tulip", [6249.771484375,3081.824951171875,-63.96875], [-20.02602195739746,-136.83094482421875,0], "molotov","Fountain", "Run+Throw",5 ],
    [ "de_tulip", [6096.97265625,2913.6115722656,0.46875], [0.94903161525726,-135.95407104492,0], "molotov","Fake-Duck", "Run+Jump+Throw", ],
    [ "de_tulip", [6874.513672,2407.673584,0.46875], [9.8890829086304,175.40585327148,0], "molotov","Fake-Duck", "Run+Jump+Throw", ],
    [ "de_tulip_HT", [6283.4453125,4458.3481445313,-56.88412475586], [3.2317614555359,-135.34457397461,0], "molotov","Boost", "Run+Jump+Throw",22 ],
    [ "de_tulip_HT", [6299.3696289063,4425.8061523438,-55.88412475586], [3.4833682060242,-138.59098815918,0], "high explosive grenade","Boost", "Run+Jump+Throw",22 ],
    [ "de_tulip_HT", [6262.509765625,4549.84912109375,-59.96875], [-25.941469192504883,-127.37826538085938,0], "high explosive grenade","boost", "Run+Throw",18 ],
    [ "de_tulip_HT", [5893.810546875,2735.4509277344,1.46875], [-11.370895195007,131.24389648438,0], "molotov","boost", "Throw", ],
    [ "de_tulip_HT", [6050.4140625,2933.3586425781,0.46875], [9.8783960342407,-135.06419372559,0], "molotov","car", "Run+Jump+Throw", ],
    [ "de_tulip_HT", [6068.712890625,2926.1301269531,0.46875], [14.135782089233,-136.14909362793,0], "high explosive grenade","Fountain", "Run+Jump+Throw", ],
    [ "de_tulip_HT", [6249.771484375,3081.824951171875,-63.96875], [-20.02602195739746,-136.83094482421875,0], "molotov","Fountain", "Run+Throw",5 ],
    [ "de_tulip_HT", [6096.97265625,2913.6115722656,0.46875], [0.94903161525726,-135.95407104492,0], "molotov","Fake-Duck", "Run+Jump+Throw", ],
    [ "de_tulip_HT", [6874.513672,2407.673584,0.46875], [9.8890829086304,175.40585327148,0], "molotov","Fake-Duck", "Run+Jump+Throw", ],
    [ "cs_agency", [-1124.0197753906,-258.64184570313,576.03125], [-10.705142021179,59.04243850708,0], "molotov","Table", "Run+Throw", 1 ],
    [ "cs_agency", [-879.290222,-257.425018,601.870605], [-3.9801921844482,103.2504196167,0], "molotov","Utility room", "Run+Throw", 1 ],
    [ "cs_agency", [-1190.766602,194.278305,384.031250], [-28.321235656738,82.861663818359,0], "molotov","Far corridor", "Run+Throw", 1 ],
    [ "cs_agency", [-956.81817626953,240.07005310059,384.031250], [-27.681365203857,47.253944396973,0], "molotov","Front Hall", "Run+Throw", 4 ],
    [ "cs_agency", [-1123.9649658203,-258.65048217773,576.03125], [-10.129358520508,59.272856903076,0], "high explosive grenade","Table-96HP", "Run+Throw", 1 ],
    [ "cs_agency", [-956.72924804688,240.17779541016,384.031250], [-28.11051361084,47.477611541748,0], "high explosive grenade","Front Hall fakelag-off", "Run+Throw", 9 ],
    [ "cs_agency", [-432.03573608398,937.15594482422,384.031250], [-39.849617,-26.572783,0], "molotov","Table", "Throw", 0 ],
    [ "cs_office", [1013.5485229492,-667.89953613281,-95.96875], [-4.2577028274536,97.964347839355,0], "molotov","Trash", "Run+Throw", 32 ],
    [ "cs_office", [1013.5485229492,-667.89953613281,-95.96875], [-2.577028274536,97.964347839355,0], "high explosive grenade","Trash-70HP", "Run+Throw", 13 ],
    [ "cs_office", [1081.1618652344,1039.9720458984,-68.96875], [-1.3204689025879,-14.662360191345,0], "molotov","Sofa", "Throw", 0 ],
    [ "cs_office", [1044.3316650391,1039.96484375,-95.96875], [-5.8989114761353,-13.769506454468,0], "molotov","Sofa", "Throw", 0 ],
    [ "cs_office", [1044.3316650391,1039.96484375,-95.96875], [-5.8989114761353,-13.769506454468,0], "molotov","Sofa", "Throw", 0 ],
    [ "de_cache", [90.618309020996,257.1057434082,1677.093750], [-29.98804473877,124.62944030762,0], "molotov","fakeduck barrels", "Run+Throw", 21 ],
    [ "de_cache", [806.5239868164063,-1246.503662109375,1677.1964111328125], [-23.699928283691406,177.82098388671875,0], "molotov","fakeduck", "Throw", 0 ],
    [ "de_cache", [-120.183487,424.871674,1677.093750], [-24.213342,4.959707,0], "molotov","Boost down", "Throw", 0 ],
    [ "de_cache", [-198.205246,418.773346,1677.093750], [-24.513342,5.459707,0], "molotov","Boost up", "Throw", 0 ],
    [ "de_cache", [-982.153381,971.216309,1739.836060], [-18.033867,41.925247,0], "molotov","Squeaky", "Run+Throw", 11 ],
    [ "de_cache", [605.2061157226563,-148.96875,1756.1883544921875], [-6.2148091316223145,135.8157196044922,0], "molotov","White Box", "Throw", 0 ],
    [ "de_cache", [4.893680572509766,-103.95784759521484,1683.6702880859375], [-28.058530807495117,40.2496223449707,0], "molotov","boost", "Throw", 0 ],
    [ "de_cache", [592.7044677734375,515.6970825195313,1677.03125], [-17.722537994384766,-162.96670532226563,0], "molotov","rip esp 1w", "Run+Throw",2 ],
    [ "de_cache", [592.7044677734375,515.6970825195313,1677.03125], [-15.962537994384766,-163.76670532226563,0], "high explosive grenade","rip-esp -91hp fakelag-off SAFE", "Run+Throw",9 ],
    [ "de_cache", [624.07080078125,417.5489196777344,1677.0311279296875], [-16.049680786132813,-167.93629150390625,0], "high explosive grenade","rip-esp -87HP fakelag-off", "Run+Throw",9 ],
    [ "de_cache", [397.38348388671875,-327.3841857910156,1678.03125], [-12.9865083694458,-120.57734680175781,0], "molotov","fakeduck", "Run+Throw",22 ],
    [ "de_cache", [931.7955322265625,612.8370361328125,1885.9783935546875], [-5.694046020507813,-163.06387329101563,0], "molotov","ripesp", "Run+Throw",8 ],
    [ "de_cache", [85.21552276611328,159.5667724609375,1677.03125], [12.351604461669922,111.44610595703125,0], "high explosive grenade","barrels fakeduck", "Run+Jump+Throw", 0 ],
    [ "de_cache", [57.78672409057617,453.6738586425781,1821.3572998046875], [-19.456786422729492,157.21087646484375,0], "molotov","car", "Throw", 0 ],
    [ "de_dust_HT", [449.747406,828.226624,191.031250], [-11.824121,-11.690033,0], "molotov","A-plantBox", "Run+Throw",11 ],
    [ "de_dust_HT", [561.233276,874.968750,191.031250], [-15.952633,-104.639442,0], "molotov","box one-way", "Run+Throw",11 ],
    [ "de_dust_HT", [483.620483,870.224365,191.031250], [-14.982905,-91.878998,0], "molotov","ct one-way", "Run+Throw",11 ],
    [ "de_dust_HT", [483.620483,870.224365,191.031250], [-14.982905,-91.878998,0], "molotov","one-way", "Throw",0 ],
    [ "de_dust", [449.747406,828.226624,191.031250], [-11.824121,-11.690033,0], "molotov","A-plantBox", "Run+Throw",11 ],
    [ "de_dust", [561.233276,874.968750,191.031250], [-15.952633,-104.639442,0], "molotov","box one-way", "Run+Throw",11 ],
    [ "de_dust", [483.620483,870.224365,191.031250], [-14.982905,-91.878998,0], "molotov","ct one-way", "Run+Throw",11 ],
    [ "de_dust", [483.620483,870.224365,191.031250], [-14.982905,-91.878998,0], "molotov","one-way", "Throw",0 ],
    [ "de_nuke", [-172.30587768555,-1193.8751220703,-90.906189], [0.6968215322495,31.411325515747,0], "molotov","heaven", "Jump+Throw",0 ],
    [ "cs_italy", [-819.4080810546875,1231.4410400390625,64.09381103515625], [-5.1755001544952393,63.53955764770508,0], "molotov","Wine Cellar", "Run+Throw",35 ],
    [ "cs_italy", [-1519.96875,417.61517333984375,72.03125], [6.70923900604248,55.570396423339844,0], "molotov","T spawn", "Run+Jump+Throw", 0 ],
    [ "cs_italy", [855.8480834960938,1609.6368408203125,30.028339385986328], [-4.243151664733887,129.0799835205078,0], "molotov","fakeduck", "Run+Throw",10 ],
    [ "cs_italy", [855.8480834960938,1609.6368408203125,30.028339385986328], [-4.243151664733887,128.7999835205078,0], "high explosive grenade","fakeduck-93HP", "Run+Throw",14 ],
    [ "cs_italy", [-835.4000854492188,1204.1595458984375,64.03125], [-2.1563305854797363,63.26720428466797,0], "high explosive grenade","Wine Cellar", "Run+Throw",28 ],
    [ "de_stmarc", [-7998.14892578125,6865.51953125,96.03125], [-16.196417808532715,1.1712183952331543,0], "molotov","plant fakeduck", "Throw", 0 ],
    [ "de_stmarc", [-8175.8369140625,6801.56640625,104.19894409179688], [-12.079442024230957,5.280690670013428,0], "high explosive grenade","fakeduck", "Run+Throw",4 ],
    [ "de_stmarc", [-6841.109863,6921.820801,116.466354], [-15.496530532836914,-176.56068420410156,0], "molotov","car (DUCK)", "Throw", 0 ],
    [ "de_stmarc", [-6840.3720703125,6924.4267578125,116.46635437011719], [-7.845247745513916,178.0292510986328,0], "high explosive grenade","Car (Duck)", "Throw", 0 ],
    [ "de_shortnuke", [1336.028076171875,-618.1556396484375,-575.9061889648438], [-5.354787826538086,149.40060424804688,0], "high explosive grenade","Ramp fakelag-off", "Run+Throw",26 ],
    [ "de_shortnuke", [1290.805908203125,-592.1639404296875,-575.96875], [-6.258520030975342,149.50087890625,0], "molotov","Ramp fakelag-off", "Run+Throw",36 ],




]
exports.locations = locations;