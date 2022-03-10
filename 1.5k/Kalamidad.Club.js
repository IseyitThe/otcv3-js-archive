/*

	Script Name: KALAMIDAD Tag
	Script Author: Lonewolf
	Script Version: 1.0
	Script Description: Onetap Gamesense Tag
*/

var CS_LastClantag = '';
function CS_UpdateClantag(tag){
	if ( CS_LastClantag != tag ) {
		Local.SetClanTag(tag);
		CS_LastClantag = tag;
	}
}

function CS_Clantag() {
	switch (Math.ceil(Globals.Curtime() * 2.4) % 30) {
		case 0: CS_UpdateClantag(' K'); break;
		case 1: CS_UpdateClantag(' KA'); break;
		case 2: CS_UpdateClantag(' KAL'); break;
		case 3: CS_UpdateClantag(' KALA'); break;
		case 4: CS_UpdateClantag(' KALAM'); break;
		case 5: CS_UpdateClantag(' KALAMI'); break;
		case 6: CS_UpdateClantag(' KALAMID'); break;
		case 7: CS_UpdateClantag(' KALAMIDA'); break;
		case 8: CS_UpdateClantag(' KALAMIDAD'); break;
		case 9: CS_UpdateClantag(' KALAMIDAD. '); break;
		case 10:CS_UpdateClantag(' KALAMIDAD.C '); break;
                case 11:CS_UpdateClantag(' KALAMIDAD.CL '); break;
                case 12:CS_UpdateClantag(' KALAMIDAD.CLU '); break;
                case 13:CS_UpdateClantag(' KALAMIDAD.CLUB '); break;
                case 14:CS_UpdateClantag(' KALAMIDAD.CLUB '); break;
                case 15:CS_UpdateClantag(' KALAMIDAD.CLUB '); break;
		case 16:CS_UpdateClantag(' KALAMIDAD.CLUB '); break;
		case 17:CS_UpdateClantag(' KALAMIDAD.CLUB '); break;
		case 18:CS_UpdateClantag(' KALAMIDAD.CLU '); break;
		case 19:CS_UpdateClantag(' KALAMIDAD.CL '); break;
		case 20:CS_UpdateClantag(' KALAMIDAD.C '); break;
		case 21:CS_UpdateClantag(' KALAMIDAD. '); break;
		case 22:CS_UpdateClantag('KALAMIDAD '); break;
		case 23:CS_UpdateClantag('ALAMIDAD '); break;
		case 24:CS_UpdateClantag('LAMIDAD '); break;
		case 25:CS_UpdateClantag('AMIDAD '); break;
		case 26:CS_UpdateClantag('MIDAD '); break;
		case 27:CS_UpdateClantag('IDAD '); break;
		case 28:CS_UpdateClantag('DAD '); break;
		case 29:CS_UpdateClantag('AD '); break;
		case 30:CS_UpdateClantag('D '); break;
	}
}
Cheat.RegisterCallback("Draw", "CS_Clantag");