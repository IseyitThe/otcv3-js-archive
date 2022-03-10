var _0xf169 = function (n, t) {
        n -= 0;
        var e = _0x10ad[n];
        if (void 0 === _0xf169.dXlzdZ) {
            ! function () {
                var n = "undefined" != typeof window ? window : "object" == typeof process && "function" == typeof require && "object" == typeof global ? global : this;
                n.atob || (n.atob = function (n) {
                    for (var t, e, r = String(n).replace(/=+$/, ""), a = "", i = 0, o = 0; e = r.charAt(o++); ~e && (t = i % 4 ? 64 * t + e : e, i++ % 4) ? a += String.fromCharCode(255 & t >> (-2 * i & 6)) : 0) e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e);
                    return a
                })
            }();
            _0xf169.UDTVae = function (n, t) {
                for (var e, r, a = [], i = 0, o = "", u = "", c = 0, f = (n = atob(n)).length; c < f; c++) u = u + "%" + ("00" + n.charCodeAt(c).toString(16)).slice(-2);
                for (n = decodeURIComponent(u), r = 0; r < 256; r++) a[r] = r;
                for (r = 0; r < 256; r++) i = (i + a[r] + t.charCodeAt(r % t.length)) % 256, e = a[r], a[r] = a[i], a[i] = e;
                r = 0, i = 0;
                for (var l = 0; l < n.length; l++) i = (i + a[r = (r + 1) % 256]) % 256, e = a[r], a[r] = a[i], a[i] = e, o += String.fromCharCode(n.charCodeAt(l) ^ a[(a[r] + a[i]) % 256]);
                return o
            }, _0xf169.DOJYXy = {}, _0xf169.dXlzdZ = !0
        }
        var r = _0xf169.DOJYXy[n];
        return void 0 === r ? (void 0 === _0xf169.VNtDyY && (_0xf169.VNtDyY = !0), e = _0xf169.UDTVae(e, t), _0xf169.DOJYXy[n] = e) : e = r, e
    },
    SCREEN_SIZE = Render.GetScreenSize(),
    screenX = SCREEN_SIZE[0],
    screenY = SCREEN_SIZE[1],
    baseX = 15,
    baseY = screenY - 200;

function time_to_ticks(n) {
    var t = {
            UhXDO: function (n, t) {
                return n + t
            },
            QUXWz: function (n, t) {
                return n / t
            }
        },
        e = t;
    return Math.floor(n / Globals.TickInterval() - 0.002)
}

function GetFlag(n) {
    var t = {
            pJSTG: "mycodeisdogshit",
            CKxWU: function (n, t) {
                return n === t
            },
            sAVuW: function (n, t) {
                return n & t
            },
            oAUol: "CBasePlayer",
            Maedh: "m_fFlags",
            kqPxb: function (n, t) {
                return n === t
            },
            gOwlI: "ebgbv",
            cKRWt: "zviqb"
        },
        e = t;
    if (e.sAVuW(Entity.GetProp(Entity.GetLocalPlayer(), e.oAUol, e.Maedh), n)) {
        if (e.kqPxb(e.gOwlI, e.gOwlI)) return !0;
        Cheat.ExecuteCommand(e.pJSTG)
    } else {
        if (e.kqPxb(e.cKRWt, e.cKRWt)) return !1;
        if (e.CKxWU(this[i], obj)) return !0
    }
}

function $0x1c(n, t) {
    for (var e = {
            hzgiY: "gamesense ",
            DnWCt: function (n, t) {
                return n !== t
            },
            glvSp: "zWnLs",
            VgcQM: "ivavI",
            KpfTE: function (n, t) {
                return n === t
            },
            DVMgm: "TgPln"
        }, r = e, a = n.length; a--;) {
        if (!r.DnWCt(r.glvSp, r.VgcQM)) return r.hzgiY;
        if (r.KpfTE(n[a], t)) {
            if (!r.DnWCt(r.DVMgm, r.DVMgm)) return !0;
            matchend = 0
        }
    }
    return !1
}
Array.prototype.contains = function (n) {
    for (var t = {
            movdh: function (n, t) {
                return n + t
            },
            cILiU: function (n, t) {
                return n - t
            },
            VJIyJ: "gamesense clantag javascript\nmade by leed | hotline#0001",
            iGRqj: function (n, t) {
                return n === t
            },
            DdJvq: "usJyA",
            hVVEW: function (n, t) {
                return n !== t
            },
            lgMsZ: "rrtjj",
            qhNpE: "CBwmU"
        }, e = t, r = this.length; r--;) {
        if (!e.iGRqj(e.DdJvq, e.DdJvq)) return void(matchend = 0);
        if (e.iGRqj(this[r], n)) {
            if (e.hVVEW(e.lgMsZ, e.qhNpE)) return !0;
            Render.String(e.movdh(baseX, 2), e.cILiU(baseY, 250), NULL, e.VJIyJ, [255, 255, 255, 255], 16)
        }
    }
    return !1
};
var _0x183c = ["MylesBEM", "mylesbem", "Mylesbem"],
    _0x662 = null;

function _0x8122() {
    var n = {
            dqZeJ: function (n, t, e) {
                return n(t, e)
            },
            QLRqd: "gamesense",
            zqJxr: function (n, t) {
                return n != t
            },
            iMiQM: function (n, t) {
                return n + t
            },
            kZSoW: function (n, t) {
                return n / t
            },
            zXNwp: function (n, t) {
                return n > t
            },
            KUiFl: function (n, t) {
                return n === t
            },
            EZHSl: "SpXbk",
            nPRAv: "tdEyS",
            vcUBc: "mycodeisdogshit",
            oJlTr: "xmANE",
            NVZpQ: "bkRWT",
            ycVcv: function (n, t) {
                return n == t
            },
            MDnCH: function (n, t) {
                return n === t
            },
            ZDCPb: "UtXic",
            PIwaF: "Misc",
            OWMDt: "GENERAL",
            SGOsU: "Miscellaneous",
            UeOqJ: "Clantag",
            vWwLo: "Clan tag spammer",
            mimQu: "Off",
            CTPjw: function (n, t) {
                return n + t
            },
            nvTyg: "cracked by cnr",
            ghIjp: "\n\n\n",
            JwWBA: function (n) {
                return n()
            }
        },
        t = n;
    if (t.KUiFl(t.oJlTr, t.NVZpQ)) {
        var e = t.dqZeJ(gamesense_anim, t.QLRqd, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11, 11, 11, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);
        t.zqJxr(e, clan_tag_prev) && Local.SetClanTag(e), clan_tag_prev = e
    } else {
        if (t.ycVcv(_0x662, null)) {
            if (!t.MDnCH(t.ZDCPb, t.ZDCPb)) return Math.floor(t.iMiQM(t.kZSoW(e, Globals.TickInterval()), .5));
            UI.SetEnabled(t.PIwaF, t.OWMDt, t.SGOsU, t.UeOqJ, !1), UI.AddDropdown(t.vWwLo, [t.mimQu, t.QLRqd]), Cheat.Print("Deobed by x86#0086"), _0x662 = 1
        }
        t.JwWBA(on_paint)
    }
}
var clan_tag_prev = "",
    enabled_prev = "Off",
    FL_FROZEN = 64,
    matchend = 0;

function gamesense_anim(n, t) {
    var e = {
            XlzwM: function (n, t) {
                return n & t
            },
            UvhEY: "CBasePlayer",
            LSICZ: "m_fFlags",
            KJWYv: function (n, t) {
                return n + t
            },
            qVGUm: function (n, t) {
                return n + t
            },
            iULnK: "               ",
            zzhQV: "                      ",
            PpfuR: function (n, t) {
                return n(t)
            },
            hPQqw: function (n, t) {
                return n / t
            },
            kExLa: function (n, t) {
                return n(t)
            },
            cZhau: function (n, t) {
                return n % t
            },
            gtJDS: function (n, t) {
                return n(t)
            },
            gKJRM: function (n, t) {
                return n == t
            },
            bShgt: function (n, t) {
                return n === t
            },
            OwnTN: "inMbo",
            ObGyk: function (n, t) {
                return n + t
            },
            oTBUn: function (n, t) {
                return n(t)
            },
            RYRay: function (n, t) {
                return n < t
            },
            PhRgd: "iyXog",
            cUiss: "ygDNM",
            qRzmW: "gamesense ",
            zcRQG: function (n, t) {
                return n + t
            }
        },
        r = e,
        a = r.KJWYv(r.qVGUm(r.iULnK, n), r.zzhQV),
        i = r.qVGUm(Globals.Tickcount(), r.PpfuR(time_to_ticks, Local.Latency())),
        o = r.hPQqw(i, r.kExLa(time_to_ticks, .3));
    return o = Math.floor(r.cZhau(o, t.length)), o = r.qVGUm(t[r.qVGUm(o, 1)], 1), r.gtJDS(GetFlag, FL_FROZEN) && r.gKJRM(matchend, 2) ? r.bShgt(r.OwnTN, r.OwnTN) ? a.substring(o, r.ObGyk(o, 15)) : !!r.XlzwM(Entity.GetProp(Entity.GetLocalPlayer(), r.UvhEY, r.LSICZ), FLAG) : r.oTBUn(GetFlag, FL_FROZEN) && r.RYRay(matchend, 2) ? !r.bShgt(r.PhRgd, r.cUiss) && r.qRzmW : a.substring(o, r.zcRQG(o, 15))
}

function run_tag_animation() {
    var n = {
            CnuXo: function (n, t) {
                return n + t
            },
            TlXkP: function (n, t) {
                return n == t
            },
            MQXhd: "Clan tag spammer",
            WjdPp: function (n, t) {
                return n !== t
            },
            ylZfb: "HhpLL",
            cgUNS: function (n, t, e) {
                return n(t, e)
            },
            pIzwj: "gamesense",
            hPaFC: function (n, t) {
                return n != t
            },
            TgACJ: function (n, t) {
                return n !== t
            },
            dBhqZ: "sZRiq",
            AyQZa: "UMhdh"
        },
        t = n;
    if (t.TlXkP(UI.GetValue(t.MQXhd), 1)) {
        if (t.WjdPp(t.ylZfb, t.ylZfb)) return text_anim.substring(i, t.CnuXo(i, 15));
        var e = t.cgUNS(gamesense_anim, t.pIzwj, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11, 11, 11, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);
        t.hPaFC(e, clan_tag_prev) && (t.TgACJ(t.dBhqZ, t.AyQZa) ? Local.SetClanTag(e) : Local.SetClanTag("")), clan_tag_prev = e
    }
}
var NULL = 0;

function on_paint() {
    var n = {
            qrUVw: function (n, t) {
                return n === t
            },
            hBuPw: "1|5|4|2|0|6|3",
            bbWAM: function (n, t) {
                return n + t
            },
            YDWZE: function (n, t) {
                return n + t
            },
            novCC: function (n, t) {
                return n + t
            },
            VqWfH: "               ",
            Qhegd: "                      ",
            sLyOi: function (n, t) {
                return n % t
            },
            kEITM: function (n, t) {
                return n / t
            },
            xuTZN: function (n, t) {
                return n(t)
            },
            pmeuI: function (n, t) {
                return n + t
            },
            YPSZp: function (n, t) {
                return n(t)
            },
            cYOdF: function (n, t) {
                return n(t)
            },
            sDaEy: function (n, t) {
                return n == t
            },
            HBYns: function (n, t) {
                return n < t
            },
            AAlaC: "gamesense ",
            RbsTd: function (n) {
                return n()
            },
            nNckH: "Misc",
            ULQKR: "GENERAL",
            lBjFL: "Miscellaneous",
            kHmYo: "Clantag",
            ibFNm: "Clan tag spammer",
            XirvG: "Off",
            gwFvC: "gamesense",
            jSEeO: function (n, t) {
                return n + t
            },
            JsaYs: "cracked by cnr",
            uLaGw: "\n\n\n",
            FyAUx: function (n, t, e) {
                return n(t, e)
            },
            XKZZV: function (n, t) {
                return n != t
            },
            CLoyn: function (n, t) {
                return n !== t
            },
            SJeek: "function",
            pVAiB: "EsVkk",
            omTpA: "mycodeisdogshit",
            rAtlv: "CPlayerResource",
            ixouv: "m_bConnected",
            YhPmp: function (n, t) {
                return n != t
            },
            wIpqd: "leed",
            VaQSC: "KBZDf",
            aatHr: "NprlL",
            qwCXB: function (n, t) {
                return n - t
            },
            oxcIX: "gamesense clantag javascript\nmade by leed | hotline#0001",
            SmGUa: function (n, t) {
                return n == t
            },
            IKsGZ: "wWnws",
            NaQjN: function (n, t) {
                return n == t
            },
            FSyMP: "IIfNR",
            iYSQs: "YuISe",
            XqBHZ: "HcgCr",
            QSQLe: function (n) {
                return n()
            },
            UAkGJ: function (n, t) {
                return n == t
            },
            YBXcR: function (n, t) {
                return n !== t
            },
            KKrfX: "xbdsa",
            ERgeZ: "AQtum"
        },
        t = n;
    if (t.CLoyn(typeof _0x8122, t.SJeek)) {
        if (t.CLoyn(t.pVAiB, t.pVAiB)) {
            for (var e = a.length; e--;)
                if (t.qrUVw(a[e], obj)) return !0;
            return !1
        }
        Cheat.ExecuteCommand(t.omTpA)
    }
    var r = UI.GetValue(t.ibFNm),
        o = Entity.GetLocalPlayer(),
        u = Entity.GetProp(o, t.rAtlv, t.ixouv);
    if (t.YhPmp(Cheat.GetUsername(), Cheat.GetUsername())) {
        if (Cheat.print("Niggggggggaaaaa"), t.CLoyn(t.VaQSC, t.VaQSC)) return !0;
        if (UI.IsMenuOpen())
            if (t.qrUVw(t.aatHr, t.aatHr)) Render.String(t.jSEeO(baseX, 2), t.qwCXB(baseY, 250), NULL, t.oxcIX, [255, 255, 255, 255], 16);
            else if (t.qrUVw(a[i], obj)) return !0
    }
    if (!World.GetServerString() || !o || t.SmGUa(u.toString(), t.ixouv) || t.SmGUa(Global.GetMapName(), "")) {
        if (!t.CLoyn(t.IKsGZ, t.IKsGZ)) return void(matchend = 0);
        for (var c = t.hBuPw.split("|"), f = 0;;) {
            switch (c[f++]) {
                case "0":
                    s = t.bbWAM(indices[t.bbWAM(s, 1)], 1);
                    continue;
                case "1":
                    var l = t.YDWZE(t.novCC(t.VqWfH, text), t.Qhegd);
                    continue;
                case "2":
                    s = Math.floor(t.sLyOi(s, indices.length));
                    continue;
                case "3":
                    return l.substring(s, t.novCC(s, 15));
                case "4":
                    var s = t.kEITM(g, t.xuTZN(time_to_ticks, .3));
                    continue;
                case "5":
                    var g = t.pmeuI(Globals.Tickcount(), t.YPSZp(time_to_ticks, Local.Latency()));
                    continue;
                case "6":
                    if (t.cYOdF(GetFlag, FL_FROZEN) && t.sDaEy(matchend, 2)) return l.substring(s, t.pmeuI(s, 15));
                    if (t.cYOdF(GetFlag, FL_FROZEN) && t.HBYns(matchend, 2)) return t.AAlaC;
                    continue
            }
            break
        }
    }
    if (t.NaQjN(r, 1)) t.CLoyn(t.FSyMP, t.FSyMP) ? t.RbsTd(run_tag_animation) : o && t.NaQjN(t.sLyOi(Globals.Tickcount(), 2), 0) && (t.qrUVw(t.iYSQs, t.XqBHZ) ? (UI.SetEnabled(t.nNckH, t.ULQKR, t.lBjFL, t.kHmYo, !1), UI.AddDropdown(t.ibFNm, [t.XirvG, t.gwFvC]), Cheat.PrintColor([108, 195, 18, 255], t.jSEeO(t.jSEeO(t.jSEeO("\n\n", t.JsaYs), Cheat.GetUsername().toString()), t.uLaGw)), _0x662 = 1) : t.QSQLe(run_tag_animation));
    else if (t.UAkGJ(enabled_prev, 1))
        if (t.YBXcR(t.KKrfX, t.ERgeZ)) Local.SetClanTag("");
        else if (t.sDaEy(UI.GetValue(t.ibFNm), 1)) {
        r = t.FyAUx(gamesense_anim, t.gwFvC, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11, 11, 11, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);
        t.XKZZV(r, clan_tag_prev) && Local.SetClanTag(r), clan_tag_prev = r
    }
    enabled_prev = r
}

function RoundStartListener() {
    var n = {
            XLUDZ: function (n, t) {
                return n > t
            },
            bvUtg: "mycodeisdogshit",
            kyWHz: function (n, t) {
                return n == t
            },
            NbpGY: "Misc",
            lDiqR: "GENERAL",
            lApDb: "Miscellaneous",
            NSEgK: "Clantag",
            zxthg: "Clan tag spammer",
            lUaNs: "Off",
            bMWDL: "gamesense",
            aWOyM: function (n, t) {
                return n + t
            },
            sfZzM: function (n, t) {
                return n + t
            },
            vPnqI: "cracked by cnr",
            zgWMJ: "\n\n\n",
            WFUKg: function (n) {
                return n()
            },
            povYO: function (n, t) {
                return n == t
            },
            LpxLc: function (n, t) {
                return n % t
            },
            bfVGt: function (n, t) {
                return n == t
            },
            eJxyO: function (n, t) {
                return n !== t
            },
            gQgOt: "WFQNN",
            KZcfg: "Elakp",
            jNyXe: function (n, t) {
                return n === t
            },
            aubYY: "cKiuu",
            lqwtj: "azVmm"
        },
        t = n;
    t.bfVGt(matchend, 1) ? t.eJxyO(t.gQgOt, t.KZcfg) ? matchend = 2 : t.XLUDZ(_0x183c.indexOf(Cheat.GetUsername()), -1) ? (t.kyWHz(_0x662, null) && (UI.SetEnabled(t.NbpGY, t.lDiqR, t.lApDb, t.NSEgK, !1), UI.AddDropdown(t.zxthg, [t.lUaNs, t.bMWDL]), Cheat.PrintColor([108, 195, 18, 255], t.aWOyM(t.aWOyM(t.sfZzM("\n\n", t.vPnqI), Cheat.GetUsername().toString()), t.zgWMJ)), _0x662 = 1), t.WFUKg(on_paint)) : Cheat.ExecuteCommand(t.bvUtg) : t.jNyXe(t.aubYY, t.lqwtj) ? local_player && t.povYO(t.LpxLc(Globals.Tickcount(), 2), 0) && t.WFUKg(run_tag_animation) : matchend = 0
}

function win_match() {
    matchend = 2
}

function halftime() {
    matchend = 1
}
Cheat.RegisterCallback("Draw", "_0x8122"), Cheat.RegisterCallback("round_start", "RoundStartListener"), Cheat.RegisterCallback("cs_win_panel_match", "win_match"), Cheat.RegisterCallback("announce_phase_end", "halftime");