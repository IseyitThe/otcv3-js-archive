var binlib = {};

function dictLength(e) {
    var t = 0;
    for (_ in e) t++;
    return t
}

function createDropdown(e, t, n) {
    var a = {
            hgVrU: "AddMultiDropdown",
            ackdz: "AddDropdown",
            WqVWt: function (e, t) {
                return e !== t
            },
            bkpCm: "bvjNr",
            drZEs: function (e, t) {
                return e << t
            },
            eEosr: function (e, t) {
                return e - t
            }
        },
        r = a;
    UI[n ? r.hgVrU : r.ackdz](e, t);
    var i = {};
    i.multi = n, i.values = {}, binlib[e] = i, n && t.reverse();
    var o = 0;
    for (value in t)
        if (r.WqVWt(r.bkpCm, "bvjNr")) Render.StringCustom(x_1, y_1 + 20, 0, "lag", [255], Font);
        else {
            var c = n ? r.drZEs(1, r.eEosr(t.length, o + 1)) : o;
            binlib[e].values[c] = t[value], o++
        }
}

function fetchDropdown(e) {
    var t = {
            LJeWv: function (e, t) {
                return e / t
            },
            FGEuc: function (e, t) {
                return e * t
            },
            TEXsB: function (e, t) {
                return e !== t
            },
            tvpon: "mIWzL",
            gHIut: "VXhHg",
            uhDmU: function (e, t) {
                return e == t
            },
            PBnDl: function (e, t) {
                return e(t)
            },
            XvsOg: function (e, t) {
                return e >= t
            },
            nFACd: function (e, t) {
                return e === t
            },
            DRDHz: "NSNuU",
            hicOo: function (e, t) {
                return e == t
            },
            NnyuT: function (e, t) {
                return e << t
            }
        },
        n = t,
        a = e ? [] : {},
        r = UI.GetValue("Misc", e);
    if (!e && function () {
            var e = {
                    PuTBM: function (e, t) {
                        return n.LJeWv(e, t)
                    },
                    wUbyB: function (e, t) {
                        return n.FGEuc(e, t)
                    },
                    YhEIr: function (e, t) {
                        return n.LJeWv(e, t)
                    }
                },
                t = e;
            if (!n.TEXsB(n.tvpon, n.gHIut)) {
                var r = {};
                return r.x = t.PuTBM(t.wUbyB(-Math.atan2(vec.z, this.length2d(vec)), 180), Math.PI), r.y = t.YhEIr(t.wUbyB(Math.atan2(vec.y, vec.x), 180), Math.PI), r.z = 0, r
            }
            for (dropdown in binlib) a[dropdown] = fetchDropdown(dropdown)
        }(), e) {
        !binlib[e].multi && n.uhDmU(r, 0) && a.push(binlib[e].values[0]);
        for (var i = n.PBnDl(dictLength, binlib[e].values) - 1; n.XvsOg(i, 0); i--) {
            if (!n.nFACd("NSNuU", n.DRDHz)) return !0;
            if (binlib[e].multi || !n.hicOo(i, 0)) {
                var o = binlib[e].multi ? n.NnyuT(1, i) : i;
                r - o >= 0 && (r -= o, a.push(binlib[e].values[o]))
            }
        }
    }
    return a
}

function GetVelocity(e) {
    var t = {
            hxZYf: function (e, t) {
                return e * t
            }
        },
        n = t,
        a = Entity.GetProp(e, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(a[0] * a[0] + n.hxZYf(a[1], a[1]))
}

function can_shift_shot(e) {
    for (var t = {
            BjOpl: "5|3|0|1|6|4|2|7",
            fGQmc: "CCSPlayer",
            hvSDP: "m_nTickBase",
            XNJAP: "CBaseCombatWeapon",
            rVZEX: "m_flNextPrimaryAttack",
            nwZGe: function (e, t) {
                return e * t
            },
            KaRzq: function (e, t) {
                return e - t
            }
        }, n = t, a = n.BjOpl.split("|"), r = 0;;) {
        switch (a[r++]) {
            case "0":
                if (null == c || null == o) return !1;
                continue;
            case "1":
                var i = Entity.GetProp(c, n.fGQmc, n.hvSDP);
                continue;
            case "2":
                if (u < Entity.GetProp(o, n.XNJAP, n.rVZEX)) return !1;
                continue;
            case "3":
                var o = Entity.GetWeapon(c);
                continue;
            case "4":
                if (u < Entity.GetProp(c, "CCSPlayer", "m_flNextAttack")) return !1;
                continue;
            case "5":
                var c = Entity.GetLocalPlayer();
                continue;
            case "6":
                var u = n.nwZGe(Globals.TickInterval(), n.KaRzq(i, e));
                continue;
            case "7":
                return !0
        }
        break
    }
}

function _TBC_CREATE_MOVE() {
    var e = {
            qOdgL: function (e, t) {
                return e(t)
            },
            HZdJi: function (e, t) {
                return e != t
            },
            qwACj: "Misc",
            tgvSy: "JAVASCRIPT",
            vcVSg: "Faster Double-tap",
            qIQXV: "Enable",
            TwtRN: "Disable",
            tpXQZ: function (e, t) {
                return e == t
            },
            tDilq: function (e, t) {
                return e(t)
            },
            HaHCN: "iFdDH",
            epkFT: function (e, t) {
                return e == t
            }
        },
        t = e;
    if (UI.GetValue(t.qwACj, t.tgvSy, t.vcVSg)) {
        target = Ragebot.GetTarget(), target_name = Entity.GetName(target), Exploit.OverrideTolerance(1), Exploit.OverrideShift(14);
        var n = Exploit.GetCharge();
        Exploit[(t.HZdJi(n, 1) ? t.qIQXV : t.TwtRN) + "Recharge"](), t.tpXQZ(target_name, null) && t.tDilq(can_shift_shot, 1) && t.HZdJi(n, 1) && ("iFdDH" === t.HaHCN ? (Exploit.DisableRecharge(), Exploit.Recharge()) : t.qOdgL(can_shift_shot, 1) && t.HZdJi(n, 1) && (Exploit.DisableRecharge(), Exploit.Recharge())), t.epkFT(target_name, null) || Exploit.EnableRecharge()
    }
    UI.GetValue(t.qwACj, t.tgvSy, t.vcVSg) || (Exploit.EnableRecharge(), Exploit.OverrideShift(12))
}

function Awall_Check() {
    var e = {
            FsCqw: function (e, t, n) {
                return e(t, n)
            },
            GTBmb: "HEAVY PISTOL",
            bBAVV: "Misc",
            QdqhJ: "JAVASCRIPT",
            VbfLj: "Disable Autowall",
            ZXwqH: "Rage",
            cGhQg: "AWP",
            duvAf: "AWP config",
            iTvTH: "Disable autowall",
            RtFjd: "Heavy pistol config",
            mtnPn: "AUTOSNIPER",
            qYQwh: "Auto config",
            Smdzh: "GENERAL",
            WxVeV: "Targeting",
            kHNFP: "SCOUT",
            VcvcC: "PISTOL",
            uNFgE: function (e, t) {
                return e === t
            },
            yqGgV: "Vijcn",
            DxVfp: "XEUZI",
            gIpXm: "0|4|3|1|5|2",
            SVybh: "Scout config"
        },
        t = e;
    if (UI.IsHotkeyActive(t.bBAVV, t.QdqhJ, "Script items", t.VbfLj))
        for (var n = "3|5|4|1|0|2".split("|"), a = 0;;) {
            switch (n[a++]) {
                case "0":
                    UI.SetValue(t.ZXwqH, t.cGhQg, t.duvAf, t.iTvTH, !0);
                    continue;
                case "1":
                    UI.SetValue(t.ZXwqH, t.GTBmb, t.RtFjd, "Disable autowall", !0);
                    continue;
                case "2":
                    UI.SetValue(t.ZXwqH, t.mtnPn, t.qYQwh, t.iTvTH, !0);
                    continue;
                case "3":
                    UI.SetValue(t.ZXwqH, t.Smdzh, t.WxVeV, "Disable autowall", !0);
                    continue;
                case "4":
                    UI.SetValue("Rage", t.kHNFP, "Scout config", t.iTvTH, !0);
                    continue;
                case "5":
                    UI.SetValue(t.ZXwqH, t.VcvcC, "Pistol config", t.iTvTH, !0);
                    continue
            }
            break
        } else if (t.uNFgE(t.yqGgV, t.DxVfp)) t.FsCqw(setValue, t.GTBmb, heavy_cache);
        else
            for (var r = t.gIpXm.split("|"), i = 0;;) {
                switch (r[i++]) {
                    case "0":
                        UI.SetValue(t.ZXwqH, "GENERAL", "Targeting", t.iTvTH, !1);
                        continue;
                    case "1":
                        UI.SetValue("Rage", "HEAVY PISTOL", t.RtFjd, t.iTvTH, !1);
                        continue;
                    case "2":
                        UI.SetValue("Rage", t.mtnPn, "Auto config", t.iTvTH, !1);
                        continue;
                    case "3":
                        UI.SetValue(t.ZXwqH, t.kHNFP, t.SVybh, "Disable autowall", !1);
                        continue;
                    case "4":
                        UI.SetValue("Rage", t.VcvcC, "Pistol config", "Disable autowall", !1);
                        continue;
                    case "5":
                        UI.SetValue("Rage", t.cGhQg, t.duvAf, t.iTvTH, !1);
                        continue
                }
                break
            }
}

function SideIndicators() {
    var e = {
            SDBvH: "buy ",
            rSeST: "Verdana",
            EIFtM: "Script items",
            MisxG: "Anti-Aim",
            NZaDy: "Fake angles",
            UePSv: "Inverter",
            ovQXm: function (e, t) {
                return e + t
            },
            TSJHj: "Ideal Yaw",
            zhxoe: "Misc",
            CdRBB: "JAVASCRIPT",
            HFNDd: "Disable Autowall",
            ZBQYg: "Rage",
            eFBUQ: "HEAVY PISTOL",
            FcLxH: "Heavy pistol config",
            gQNHo: "GENERAL",
            lacPc: "Disable autowall",
            Tnnmi: "AWP",
            pODJd: "AWP config",
            zzxdG: "AUTOSNIPER",
            lURwx: "Auto config",
            wTPwX: "Scout config",
            pcAmS: "Pistol config",
            zLgyz: "4|1|5|2|0|3",
            LRogJ: "PISTOL",
            GuQeB: "Targeting",
            FAgLV: "SCOUT",
            DVNkl: function (e, t) {
                return e / t
            },
            lENIC: function (e, t) {
                return e * t
            },
            kVUoE: function (e, t) {
                return e + t
            },
            ghBQj: function (e, t) {
                return e + t
            },
            wIgiO: function (e, t) {
                return e + t
            },
            PIdcF: function (e, t) {
                return e * t
            },
            UgkmW: "Exploits",
            cGHNh: "Hide shots",
            PdDrc: "Fake-Lag",
            eRHAs: "X indicator",
            xLlaV: "Y indicator",
            ZdmYb: "Side Indicators",
            oxoPE: function (e, t) {
                return e == t
            },
            IJKYG: "MjqwQ",
            CepLi: function (e, t) {
                return e == t
            },
            kuBwG: "AWall",
            BeCVv: "Wait for On-shot key",
            TEPZO: "Wait Onshot",
            DEpbZ: "Freestand Key",
            zbvqE: "woiWe",
            nWspb: "XnQow",
            zIipR: "Freestand",
            FhpbD: function (e, t) {
                return e === t
            },
            FzTYY: function (e, t) {
                return e !== t
            },
            vlFwK: "afKGR",
            RFiDk: "lag",
            NdqhG: function (e, t) {
                return e !== t
            },
            aDbsY: "jyLlG",
            ohxUp: function (e, t) {
                return e + t
            }
        },
        t = e;
    if (LoCla = Entity.GetLocalPlayer(), alive = Entity.IsAlive(LoCla), isDoubletap = UI.IsHotkeyActive(t.ZBQYg, t.UgkmW, "Doubletap"), isHs = UI.IsHotkeyActive("Rage", "Exploits", t.cGHNh), isFakelag = UI.GetValue(t.MisxG, t.PdDrc, "Enabled"), x_1 = UI.GetValue(t.zhxoe, "JAVASCRIPT", t.EIFtM, t.eRHAs), y_1 = UI.GetValue(t.zhxoe, "JAVASCRIPT", t.EIFtM, t.xLlaV), UI.GetValue("Misc", t.CdRBB, t.EIFtM, t.ZdmYb) && t.oxoPE(alive, !0))
        if (t.IJKYG == t.IJKYG) {
            const e = Render.AddFont(t.rSeST, 14, 800);
            if (t.CepLi(UI.GetValue("Rage", t.gQNHo, t.GuQeB, "Disable autowall"), 0), Render.StringCustom(x_1, y_1, 0, t.kuBwG, [255], e), UI.IsHotkeyActive(t.zhxoe, t.CdRBB, "Script items", t.BeCVv) ? Render.StringCustom(x_1 + 70, y_1, 0, t.TEPZO, [255], e) : Render.StringCustom(t.wIgiO(x_1, 70), y_1, 0, "Wait Onshot", [255], e), UI.IsHotkeyActive(t.zhxoe, t.CdRBB, t.EIFtM, t.DEpbZ))
                if (t.zbvqE === t.nWspb) {
                    var n = {};
                    n.oesEi = t.SDBvH;
                    var a = n;
                    alias[index].forEach(function (e) {
                        Cheat.ExecuteCommand(a.oesEi + e)
                    }), run = !1
                } else Render.StringCustom(t.wIgiO(x_1, 40), y_1 + 20, 0, t.zIipR, [255], e);
            if (UI.IsHotkeyActive(t.zhxoe, "JAVASCRIPT", t.EIFtM, t.DEpbZ) || Render.StringCustom(x_1 + 40, t.wIgiO(y_1, 20), 0, "Freestand", [255], e), isFakelag)
                if (t.FhpbD("bvmWk", "bvmWk")) Render.StringCustom(x_1, t.wIgiO(y_1, 20), 0, "lag", [255], e);
                else {
                    const e = Render.AddFont(t.rSeST, 7, 600);
                    if (UI.GetValue(t.EIFtM, "Ideal Yaw Enable")) {
                        if (UI.IsHotkeyActive(t.MisxG, t.NZaDy, t.UePSv)) {
                            Render.AddFont(t.rSeST, 14, 600);
                            const e = Render.AddFont(t.rSeST, 7, 600);
                            Render.Polygon([LPx, LPz, LPy], [255]), Render.Polygon([RPy, RPz, RPx], ideal_col), Render.StringCustom(x + 1, t.ovQXm(y, 23), 1, t.TSJHj, ideal_col, e)
                        }
                        if (!UI.IsHotkeyActive(t.MisxG, t.NZaDy, t.UePSv)) {
                            Render.AddFont("Verdana", 14, 600);
                            const e = Render.AddFont(t.rSeST, 7, 600);
                            Render.Polygon([LPx, LPz, LPy], ideal_col), Render.Polygon([RPy, RPz, RPx], [255]), Render.StringCustom(x + 1, t.ovQXm(y, 23), 1, t.TSJHj, ideal_col, e)
                        }
                    } else Render.StringCustom(t.ovQXm(x, 1), y + 23, 1, "Default", [255], e)
                } if (isDoubletap)
                if (t.FzTYY(t.vlFwK, t.vlFwK))
                    if (UI.IsHotkeyActive(t.zhxoe, t.CdRBB, t.EIFtM, t.HFNDd))
                        for (var r = "1|5|4|0|2|3".split("|"), o = 0;;) {
                            switch (r[o++]) {
                                case "0":
                                    UI.SetValue(t.ZBQYg, t.eFBUQ, t.FcLxH, "Disable autowall", !0);
                                    continue;
                                case "1":
                                    UI.SetValue("Rage", t.gQNHo, "Targeting", t.lacPc, !0);
                                    continue;
                                case "2":
                                    UI.SetValue(t.ZBQYg, t.Tnnmi, t.pODJd, t.lacPc, !0);
                                    continue;
                                case "3":
                                    UI.SetValue(t.ZBQYg, t.zzxdG, t.lURwx, "Disable autowall", !0);
                                    continue;
                                case "4":
                                    UI.SetValue(t.ZBQYg, "SCOUT", t.wTPwX, t.lacPc, !0);
                                    continue;
                                case "5":
                                    UI.SetValue(t.ZBQYg, "PISTOL", t.pcAmS, t.lacPc, !0);
                                    continue
                            }
                            break
                        } else
                            for (var c = t.zLgyz.split("|"), u = 0;;) {
                                switch (c[u++]) {
                                    case "0":
                                        UI.SetValue(t.ZBQYg, t.Tnnmi, t.pODJd, "Disable autowall", !1);
                                        continue;
                                    case "1":
                                        UI.SetValue(t.ZBQYg, t.LRogJ, t.pcAmS, t.lacPc, !1);
                                        continue;
                                    case "2":
                                        UI.SetValue("Rage", "HEAVY PISTOL", "Heavy pistol config", t.lacPc, !1);
                                        continue;
                                    case "3":
                                        UI.SetValue(t.ZBQYg, t.zzxdG, "Auto config", t.lacPc, !1);
                                        continue;
                                    case "4":
                                        UI.SetValue("Rage", t.gQNHo, t.GuQeB, t.lacPc, !1);
                                        continue;
                                    case "5":
                                        UI.SetValue(t.ZBQYg, t.FAgLV, t.wTPwX, t.lacPc, !1);
                                        continue
                                }
                                break
                            } else Render.StringCustom(x_1, y_1 + 20, 0, t.RFiDk, [255], e);
            if (isHs)
                if (t.NdqhG(t.aDbsY, "jyLlG")) {
                    const e = elem;
                    UI.SetEnabled.apply(null, this.concat(e.path, visible))
                } else Render.StringCustom(x_1, t.ohxUp(y_1, 20), 0, "lag", [255], e)
        } else {
            var l = t.DVNkl(i * Math.PI, 180),
                s = t.lENIC(t.ovQXm(i, segments), Math.PI) / 180,
                d = Math.cos(l),
                f = Math.sin(l),
                g = Math.cos(s),
                _ = Math.sin(s),
                b = t.kVUoE(x, t.lENIC(d, radius)),
                v = y + t.lENIC(f, radius),
                I = t.ghBQj(x, g * radius),
                S = y + t.lENIC(_, radius),
                m = t.ghBQj(x, t.lENIC(d, radius_inner)),
                p = y + t.lENIC(f, radius_inner),
                A = t.wIgiO(x, t.lENIC(g, radius_inner)),
                R = t.wIgiO(y, t.PIdcF(_, radius_inner));
            Render.Polygon([
                [b, v],
                [I, S],
                [m, p]
            ], color), Render.Polygon([
                [m, p],
                [I, S],
                [A, R]
            ], color)
        }
}

function render_arc(e, t, n, a, r, i, o, c) {
    for (var u = {
            SWmMb: "Misc",
            MEqfy: "JAVASCRIPT",
            huVrS: "Enable Autobuy",
            frQCR: function (e, t) {
                return e == t
            },
            GOOnw: function (e, t) {
                return e - t
            },
            rCGpI: "userid",
            zCevB: "Script items",
            KBxJD: "Ideal Yaw Enable",
            FWMAw: function (e) {
                return e()
            },
            uNJjp: function (e, t) {
                return e != t
            },
            SWEvM: function (e, t) {
                return e % t
            },
            nLuch: "pdfRN",
            FHTQk: function (e, t) {
                return e < t
            },
            TtbXE: function (e, t) {
                return e + t
            },
            fOVPk: function (e, t) {
                return e + t
            },
            mCqse: "LuUVA",
            iUvKZ: function (e, t) {
                return e / t
            },
            bsEQJ: function (e, t) {
                return e * t
            },
            uACRs: function (e, t) {
                return e * t
            },
            vrPpA: function (e, t) {
                return e + t
            },
            nzaJv: function (e, t) {
                return e * t
            },
            qsYwY: function (e, t) {
                return e * t
            },
            DGkFQ: function (e, t) {
                return e * t
            },
            BvSJL: function (e, t) {
                return e + t
            }
        }, l = u; l.uNJjp(l.SWEvM(360, o), 0);)
        if (l.nLuch == l.nLuch) o++;
        else if (UI.GetValue(l.SWmMb, l.MEqfy, l.huVrS)) {
        if (l.frQCR(firstBuy, 0) && (firstBuy = l.GOOnw(Globals.Curtime(), estimate)), !Entity.GetEntityFromUserID(Event.GetInt(l.rCGpI)) || -1 == firstBuy) return;
        firstBuy = -1
    }
    o = 360 / o;
    for (var s = r; l.FHTQk(s, l.TtbXE(r, i)); s = l.fOVPk(s, o))
        if ("YHeXJ" === l.mCqse) {
            if (!UI.GetValue(l.zCevB, l.KBxJD)) return;
            l.FWMAw(update_anti_aim)
        } else {
            var d = l.iUvKZ(s * Math.PI, 180),
                f = l.iUvKZ(l.bsEQJ(l.fOVPk(s, o), Math.PI), 180),
                g = Math.cos(d),
                _ = Math.sin(d),
                y = Math.cos(f),
                b = Math.sin(f),
                v = l.fOVPk(e, l.bsEQJ(g, n)),
                I = l.fOVPk(t, l.uACRs(_, n)),
                S = l.vrPpA(e, l.uACRs(y, n)),
                m = l.vrPpA(t, l.nzaJv(b, n)),
                p = l.vrPpA(e, l.qsYwY(g, a)),
                A = t + l.DGkFQ(_, a),
                R = e + y * a,
                h = l.BvSJL(t, b * a);
            Render.Polygon([
                [v, I],
                [S, m],
                [p, A]
            ], c), Render.Polygon([
                [p, A],
                [S, m],
                [R, h]
            ], c)
        }
}
UI.AddSliderInt("                  cutecord", 0, 0), createDropdown("Options", ["Misc", "Rage", "Anti-Aim"], !1), UI.AddCheckbox("Indicators"), UI.AddCheckbox("Side Indicators"), UI.AddHotkey("Disable Autowall"), UI.AddSliderInt("X indicator", 0, Global.GetScreenSize()[0]), UI.AddSliderInt("Y indicator", 0, Global.GetScreenSize()[1]), UI.AddHotkey("Wait for On-shot key"), UI.AddCheckbox("Override DMG"), UI.AddHotkey("Override DMG Key"), UI.AddSliderInt("DMG", 0, 130), UI.AddCheckbox("Faster Double-tap"), createDropdown("Force Safety on", ["Head", "Baim", "Limbs"], !0), UI.AddCheckbox("Clantag Spammer"), UI.AddCheckbox("Rage bot fire logs"), UI.AddCheckbox("Enable Autobuy"), UI.AddHotkey("Freestand Key"), UI.AddHotkey("Legit AA Key"), UI.AddHotkey("Cute Yaw on Key"), UI.AddHotkey("Override Yaw on Key"), UI.AddCheckbox("Ideal Yaw Enable"), UI.AddColorPicker("Ideal Yaw color"), GetMindamageAWP = Cheat.GetUsername(), Cheat.GetUsername = function () {
    return GetMindamageAWP
};
var screen_size = Global.GetScreenSize();

function _DRAW() {
    var e = {
            tnmJK: function (e, t) {
                return e(t)
            },
            PTgvk: function (e) {
                return e()
            },
            KSrDQ: "AWall",
            ShBgK: "Verdana",
            RXOcL: function (e, t) {
                return e + t
            },
            dIaWG: "Ideal Yaw",
            toVVn: function (e, t, n) {
                return e(t, n)
            },
            wPlCZ: "HEAVY PISTOL",
            ASjWK: "AWP",
            BoYen: "Script items",
            lPbzs: "Legit AA Key",
            znrPT: "Misc",
            xMIvf: "PERFORMANCE & INFORMATION",
            pNkdD: "Restrictions",
            YJFwl: "Anti-Aim",
            RvZHm: "Extra",
            IElgK: "Pitch",
            QmUdd: "Rage Anti-Aim",
            bsKAM: "Yaw offset",
            ICVWO: function (e, t) {
                return e * t
            },
            vLSrv: function (e, t) {
                return e / t
            },
            dDILZ: "Rage",
            sOtKX: function (e, t) {
                return e - t
            },
            vDVrM: "JAVASCRIPT",
            vbmUM: "Ideal Yaw color",
            qkAeJ: "Indicators",
            Bkiwd: "Cute Yaw on Key",
            qInQq: function (e, t) {
                return e !== t
            },
            NDSOY: "XjLam",
            Nlyus: function (e, t) {
                return e + t
            },
            xQrxk: "Cute Sync",
            bvwFa: "Ideal Yaw Enable",
            GqFHc: "Fake angles",
            yaSRu: function (e, t) {
                return e + t
            },
            agOnt: "Inverter",
            CfdDJ: function (e, t) {
                return e !== t
            },
            obsxN: "mqwxp",
            QuurA: function (e, t) {
                return e + t
            },
            rIJgg: "Default",
            tKjzk: function (e, t) {
                return e >= t
            },
            HFlKa: "xKZJA",
            YINGy: function (e, t) {
                return e + t
            },
            goXGd: function (e, t) {
                return e !== t
            },
            qKgAr: "VSluX",
            eCHtk: function (e, t) {
                return e == t
            },
            wOgBe: function (e, t) {
                return e >= t
            },
            RbfId: function (e, t) {
                return e < t
            },
            pxVwK: "qQFwn",
            ZxWjT: function (e, t) {
                return e + t
            },
            QgfRk: function (e, t, n, a, r, i, o, c, u) {
                return e(t, n, a, r, i, o, c, u)
            },
            vijVE: "GENERAL",
            buyXo: "General",
            CcMuM: "Force safe point",
            XiSzP: function (e, t) {
                return e + t
            },
            ILCCL: "aZlBm",
            RPPPB: "Safe Point",
            RBBQA: function (e, t) {
                return e + t
            },
            gXTrd: function (e, t) {
                return e + t
            },
            GmZoF: "Force body aim",
            vpSlc: "HRcWm",
            VCJnQ: "Force Body",
            gNXEb: function (e, t) {
                return e + t
            },
            fZBEy: "Exploits",
            NjMXu: function (e, t) {
                return e + t
            },
            arugZ: function (e, t) {
                return e + t
            },
            ILytP: "Hide Shots",
            Skkzl: "Hide shots",
            yqaTv: function (e, t) {
                return e + t
            },
            lOJRs: "Override DMG Key",
            Spicr: function (e, t) {
                return e + t
            },
            LJyTZ: "Damage Override"
        },
        t = e;
    max_angle = t.ICVWO(360, Exploit.GetCharge()), screen = Render.GetScreenSize(), x = t.vLSrv(screen[0], 2), y = t.vLSrv(screen[1], 2), isDoubletap = UI.IsHotkeyActive(t.dDILZ, "Exploits", "Doubletap"), charge = Exploit.GetCharge(), fake = Math.abs(Local.GetFakeYaw()), real = Math.abs(Local.GetRealYaw()), delta = 0, fake > real ? delta = t.sOtKX(fake, real) : delta = t.sOtKX(real, fake), LoCla = Entity.GetLocalPlayer(), alive = Entity.IsAlive(LoCla);
    var n = UI.GetColor(t.znrPT, t.vDVrM, t.BoYen, t.vbmUM);
    if (1 == alive) {
        Render.AddFont("Verdana", 7, 100);
        if (Math.round(delta), UI.GetValue(t.BoYen, t.qkAeJ)) {
            if (UI.IsHotkeyActive(t.BoYen, t.Bkiwd)) {
                if (t.qInQq("XjLam", t.NDSOY)) return void t.tnmJK(update_anti_aim_state, t.PTgvk(get_optimal_angle)); {
                    const e = Render.AddFont(t.ShBgK, 7, 600);
                    Render.StringCustom(t.Nlyus(x, 1), t.Nlyus(y, 23), 1, t.xQrxk, [255], e)
                }
            }
            if (!UI.IsHotkeyActive(t.BoYen, "Cute Yaw on Key")) {
                const e = Render.AddFont(t.ShBgK, 7, 600);
                if (UI.GetValue("Script items", t.bvwFa)) {
                    if (UI.IsHotkeyActive(t.YJFwl, t.GqFHc, "Inverter")) {
                        Render.AddFont(t.ShBgK, 14, 600);
                        const e = Render.AddFont(t.ShBgK, 7, 600);
                        Render.Polygon([LPx, LPz, LPy], [255]), Render.Polygon([RPy, RPz, RPx], n), Render.StringCustom(t.yaSRu(x, 1), t.yaSRu(y, 23), 1, "Ideal Yaw", n, e)
                    }
                    if (!UI.IsHotkeyActive("Anti-Aim", "Fake angles", t.agOnt))
                        if (t.CfdDJ(t.obsxN, t.obsxN)) Ragebot.ForceHitboxSafety(0), Ragebot.ForceHitboxSafety(1);
                        else {
                            Render.AddFont(t.ShBgK, 14, 600);
                            const e = Render.AddFont("Verdana", 7, 600);
                            Render.Polygon([LPx, LPz, LPy], n), Render.Polygon([RPy, RPz, RPx], [255]), Render.StringCustom(t.QuurA(x, 1), t.QuurA(y, 23), 1, "Ideal Yaw", n, e)
                        }
                } else Render.StringCustom(x + 1, t.QuurA(y, 23), 1, t.rIJgg, [255], e)
            }
            if (!t.tKjzk(charge, .5) || !isDoubletap)
                if (t.HFlKa != t.HFlKa) Render.StringCustom(x_1, y_1, 0, t.KSrDQ, [255], Font);
                else {
                    const e = Render.AddFont(t.ShBgK, 7, 600);
                    Render.StringCustom(t.YINGy(x, 1), y + 35, 1, "DT", [255], e)
                } if (isDoubletap)
                if (t.goXGd("EdjKQ", t.qKgAr)) {
                    if (t.eCHtk(charge, 1)) {
                        const e = Render.AddFont(t.ShBgK, 7, 600);
                        Render.StringCustom(t.YINGy(x, 1), t.YINGy(y, 35), 1, "DT", [255], e)
                    }
                    if (t.wOgBe(charge, .5) && t.RbfId(charge, 9026 - 9025.05))
                        if (t.goXGd("qQFwn", t.pxVwK)) {
                            Render.AddFont(t.ShBgK, 14, 600);
                            const e = Render.AddFont(t.ShBgK, 7, 600);
                            Render.Polygon([LPx, LPz, LPy], [255]), Render.Polygon([RPy, RPz, RPx], n), Render.StringCustom(t.RXOcL(x, 1), t.RXOcL(y, 23), 1, t.dIaWG, n, e)
                        } else render_arc(x, t.ZxWjT(y, 40), 5.5, 2.75, -90, 360, 360, [190]), t.QgfRk(render_arc, x, t.ZxWjT(y, 40), 5.5, 2.75, -90, max_angle, 360, [255])
                } else t.toVVn(setValue, t.wPlCZ, heavy_value);
            if (UI.IsHotkeyActive("Rage", t.vijVE, t.buyXo, t.CcMuM)) {
                const e = Render.AddFont(t.ShBgK, 7, 600);
                Render.StringCustom(t.XiSzP(x, 1), t.XiSzP(y, 47), 1, "Safe Point", [255], e)
            }
            if (UI.IsHotkeyActive(t.dDILZ, t.vijVE, "General", t.CcMuM))
                if (t.goXGd(t.ILCCL, t.ILCCL)) setValue(t.ASjWK, awp_cache);
                else {
                    const e = Render.AddFont("Verdana", 7, 600);
                    Render.StringCustom(x + 1, t.XiSzP(y, 47), 1, t.RPPPB, [255], e)
                } if (!UI.IsHotkeyActive(t.dDILZ, "GENERAL", t.buyXo, t.CcMuM)) {
                const e = Render.AddFont("Verdana", 7, 600);
                Render.StringCustom(t.RBBQA(x, 1), t.gXTrd(y, 47), 1, t.RPPPB, [255], e)
            }
            if (UI.IsHotkeyActive(t.dDILZ, "GENERAL", t.buyXo, t.GmZoF))
                if (t.goXGd(t.vpSlc, t.vpSlc)) UI.IsHotkeyActive(t.BoYen, t.lPbzs) && (UI.SetValue(t.znrPT, t.xMIvf, t.pNkdD, !1), UI.SetValue(t.YJFwl, t.RvZHm, t.IElgK, !1), UI.SetValue("Anti-Aim", t.QmUdd, t.bsKAM, 180), AntiAim.SetOverride(0)), UI.IsHotkeyActive(t.BoYen, t.lPbzs) || (UI.SetValue(t.znrPT, t.xMIvf, t.pNkdD, !0), UI.SetValue(t.YJFwl, t.QmUdd, t.bsKAM, 11), AntiAim.SetOverride(0));
                else {
                    const e = Render.AddFont(t.ShBgK, 7, 600);
                    Render.StringCustom(t.gXTrd(x, 1), y + 59, 1, t.VCJnQ, [255], e)
                } if (!UI.IsHotkeyActive(t.dDILZ, t.vijVE, t.buyXo, "Force body aim")) {
                const e = Render.AddFont(t.ShBgK, 7, 600);
                Render.StringCustom(t.gXTrd(x, 1), t.gNXEb(y, 59), 1, t.VCJnQ, [255], e)
            }
            if (UI.IsHotkeyActive(t.dDILZ, t.fZBEy, "Hide shots")) {
                const e = Render.AddFont(t.ShBgK, 7, 600);
                Render.StringCustom(t.NjMXu(x, 1), t.arugZ(y, 71), 1, t.ILytP, [255], e)
            }
            if (!UI.IsHotkeyActive("Rage", t.fZBEy, t.Skkzl)) {
                const e = Render.AddFont("Verdana", 7, 600);
                Render.StringCustom(t.yqaTv(x, 1), t.yqaTv(y, 71), 1, t.ILytP, [255], e)
            }
            if (UI.IsHotkeyActive("Script items", t.lOJRs)) {
                const e = Render.AddFont("Verdana", 7, 600);
                Render.StringCustom(t.Spicr(x, 1), y + 83, 1, t.LJyTZ, [255], e)
            }
            if (!UI.IsHotkeyActive(t.BoYen, t.lOJRs)) {
                const e = Render.AddFont(t.ShBgK, 7, 600);
                Render.StringCustom(t.Spicr(x, 1), t.Spicr(y, 83), 1, t.LJyTZ, [255], e)
            }
        }
    }
}

function dogshit(e) {
    var t = {
            IbpVm: "Targeting",
            QfQiK: "Minimum damage"
        },
        n = t;
    UI.SetValue("Rage", "AUTOSNIPER", n.IbpVm, n.QfQiK, e)
}

function AACm() {
    var e = {
            mdZOj: function (e, t) {
                return e !== t
            },
            yblsB: function (e, t) {
                return e + t
            },
            MCUpz: "quit",
            XEPKx: "Script items",
            HTtkp: "Legit AA Key",
            jKLeY: "Misc",
            THOic: "PERFORMANCE & INFORMATION",
            ZPTwx: "Restrictions",
            ztUpc: "Cute Yaw on Key",
            ICyFq: "4|1|0|2|3",
            LBtKT: "Anti-Aim",
            mtAjR: "Rage Anti-Aim",
            IbWTa: "Yaw offset",
            vNGuP: "PvgDf",
            FXhqf: "Extra",
            NWWnH: function (e, t) {
                return e !== t
            },
            mZRDR: "haIzE"
        },
        t = e;
    if (!UI.IsHotkeyActive(t.XEPKx, t.HTtkp) && (UI.SetValue(t.jKLeY, t.THOic, t.ZPTwx, !0), UI.IsHotkeyActive("Script items", t.ztUpc)))
        for (var n = t.ICyFq.split("|"), a = 0;;) {
            switch (n[a++]) {
                case "0":
                    AntiAim.SetRealOffset(5);
                    continue;
                case "1":
                    AntiAim.SetFakeOffset(-22);
                    continue;
                case "2":
                    AntiAim.SetLBYOffset(-15);
                    continue;
                case "3":
                    UI.SetValue(t.LBtKT, t.mtAjR, t.IbWTa, 21);
                    continue;
                case "4":
                    AntiAim.SetOverride(1);
                    continue
            }
            break
        }
    if (!UI.IsHotkeyActive("Script items", t.ztUpc)) {
        if (UI.IsHotkeyActive(t.XEPKx, t.HTtkp))
            if (t.mdZOj(t.vNGuP, "PvgDf")) {
                if (menu.get(ref_ragebot)) return void(t.mdZOj(menu.get_hotkey(ref_inverter), state) && menu.toggle(ref_inverter));
                state = t.yblsB(state, 1) % 2, t.mdZOj(menu.get_hotkey(ref_inverter_legit), state) && menu.toggle(ref_inverter_legit)
            } else UI.SetValue(t.jKLeY, t.THOic, "Restrictions", !1), UI.SetValue(t.LBtKT, t.FXhqf, "Pitch", !1), UI.SetValue("Anti-Aim", "Rage Anti-Aim", t.IbWTa, 180), AntiAim.SetOverride(0);
        UI.IsHotkeyActive(t.XEPKx, t.HTtkp) || (UI.SetValue(t.jKLeY, t.THOic, t.ZPTwx, !0), UI.SetValue(t.LBtKT, "Rage Anti-Aim", t.IbWTa, 11), AntiAim.SetOverride(0))
    }
}

function MindamageOverrIde() {}
LPx = [screen_size[0] / 2 - 50, screen_size[1] / 2 + 10], LPy = [screen_size[0] / 2 - 50, screen_size[1] / 2 - 10], LPz = [screen_size[0] / 2 - 70, screen_size[1] / 2], RPx = [screen_size[0] / 2 + 50, screen_size[1] / 2 + 10], RPy = [screen_size[0] / 2 + 50, screen_size[1] / 2 - 10], RPz = [screen_size[0] / 2 + 70, screen_size[1] / 2], LPxx = [screen_size[0] / 2 - 49, screen_size[1] / 2 + 12], LPyy = [screen_size[0] / 2 - 49, screen_size[1] / 2 - 12], LPzz = [screen_size[0] / 2 - 73, screen_size[1] / 2], RPxx = [screen_size[0] / 2 + 49, screen_size[1] / 2 + 12], RPyy = [screen_size[0] / 2 + 49, screen_size[1] / 2 - 12], RPzz = [screen_size[0] / 2 + 73, screen_size[1] / 2], BPx = [screen_size[0] / 2 + 10, screen_size[1] / 2 + 50], BPy = [screen_size[0] / 2 - 10, screen_size[1] / 2 + 50], BPz = [screen_size[0] / 2, screen_size[1] / 2 + 70], BPxx = [screen_size[0] / 2 + 12, screen_size[1] / 2 + 49], BPyy = [screen_size[0] / 2 - 12, screen_size[1] / 2 + 49], BPzz = [screen_size[0] / 2, screen_size[1] / 2 + 73], rgtfergef = GetMindamageAWP;
var lasttime = 0;

function _TAG() {
    var t = {
            ptWlt: "5|1|4|0|3|2",
            ZfrRS: "Rage",
            vaUtL: "HEAVY PISTOL",
            fPMNq: "Heavy pistol config",
            djqyu: "Disable autowall",
            oIfPY: "PISTOL",
            euwpY: "Pistol config",
            lcThQ: "AUTOSNIPER",
            YRxcY: "Auto config",
            coLbz: "AWP",
            XVobo: "AWP config",
            NwlbF: "Scout config",
            zwSKt: "GENERAL",
            faAwv: "Targeting",
            QJtki: function (e, t) {
                return e !== t
            },
            XbklX: "2|15|0|21|17|1|9|18|14|4|16|10|3|6|11|20|12|19|8|13|7|5",
            zyAlZ: "Script items",
            UcWAr: "Cute Yaw on Key",
            MjGaO: "Ideal Yaw color",
            dZiBk: "Rage bot fire logs",
            apsrI: "Override DMG Key",
            KmJPH: "Clantag Spammer",
            jojrY: "Force Safety on",
            Mbbxo: "Y indicator",
            tHFae: "Disable Autowall",
            BAewA: "Enable Autobuy",
            OTHBO: "Indicators",
            KExSj: "X indicator",
            qLnFH: "Override DMG",
            DrGQj: "Legit AA Key",
            tZJkH: "DMG",
            vhEuk: "Ideal Yaw Enable",
            HhOVU: "Wait for On-shot key",
            mVrxT: "Side Indicators",
            uSagi: "Autobuy",
            rYNim: "Override Yaw on Key",
            rBSMa: "CBasePlayer",
            OjZYX: "m_vecVelocity[0]",
            HiuQC: function (e, t) {
                return e + t
            },
            WfqIC: function (e, t) {
                return e * t
            },
            WFJOQ: function (e, t) {
                return e * t
            },
            uiGjd: "1|0|5|6|2|4|3",
            YLYvb: "hitbox",
            FmwHK: "target_index",
            wNcjw: "exploit",
            fZdCj: function (e, t) {
                return e + t
            },
            ABXTd: function (e, t) {
                return e + t
            },
            MYHVl: function (e, t) {
                return e + t
            },
            xSPxs: "[cutecord] TARGET: ",
            DoXgh: function (e, t) {
                return e(t)
            },
            rTGgG: " HC: ",
            hgdRj: " SAFEPOINT: ",
            tsPEU: " EXPLOIT: ",
            rSstM: "hitchance",
            FVmFW: "safepoint",
            deIjc: "lag",
            MwsTB: "5|4|3|2|1|0",
            zZCvK: "SCOUT",
            fxIyi: "7|6|2|5|0|1|4|3",
            disHJ: function (e, t) {
                return e * t
            },
            IjGwO: function (e, t) {
                return e - t
            },
            meqtM: function (e, t) {
                return e < t
            },
            YSgEa: "CCSPlayer",
            POkgM: "m_flNextAttack",
            vkyMS: function (e, t) {
                return e == t
            },
            DCMwg: "CBaseCombatWeapon",
            AIUmX: "m_flNextPrimaryAttack",
            kPmWO: "m_nTickBase",
            NNmEO: "Misc",
            YrNcb: "HjzgF",
            xQNdy: "umRdJ",
            IYsFP: function (e, t) {
                return e != t
            },
            mexsc: function (e, t) {
                return e === t
            },
            tggbx: "Edmah",
            SvqWK: "HnQwI",
            JuAdK: "d      \t",
            YSgkb: "ord    \t",
            eKrZv: "XBRWI",
            DzmGK: "ofcni",
            jBmAZ: "ecord \t",
            ufsmL: "giTPP",
            OZBcy: "utecord ",
            LCFrq: "HMQnE",
            ZoQHN: "IKcLY",
            BDOyL: "cutecord",
            avHOD: function (e, t) {
                return e !== t
            },
            SpMfl: "RuMsc",
            uRgxC: function (e, t) {
                return e !== t
            },
            RwoXe: "  cuteco",
            iwqSk: function (e, t) {
                return e === t
            },
            gIRZZ: "DiYpX",
            NETKi: "   cutec",
            lNGaq: function (e, t) {
                return e === t
            },
            WiKXt: "RnMst",
            EAOWO: "daHJW"
        },
        n = t;
    if (UI.GetValue(n.zyAlZ, n.KmJPH))
        if (n.YrNcb !== n.xQNdy) {
            var a = n.DoXgh(parseInt, n.disHJ(Globals.Curtime(), 9355 - 9352.15117));
            if (n.IYsFP(a, lasttime))
                if (n.mexsc(n.tggbx, "jLngY"))
                    for (var r = n.ptWlt.split("|"), i = 0;;) {
                        switch (r[i++]) {
                            case "0":
                                UI.SetValue(n.ZfrRS, n.vaUtL, n.fPMNq, n.djqyu, !1);
                                continue;
                            case "1":
                                UI.SetValue(n.ZfrRS, n.oIfPY, n.euwpY, "Disable autowall", !1);
                                continue;
                            case "2":
                                UI.SetValue(n.ZfrRS, n.lcThQ, n.YRxcY, n.djqyu, !1);
                                continue;
                            case "3":
                                UI.SetValue(n.ZfrRS, n.coLbz, n.XVobo, n.djqyu, !1);
                                continue;
                            case "4":
                                UI.SetValue("Rage", "SCOUT", n.NwlbF, "Disable autowall", !1);
                                continue;
                            case "5":
                                UI.SetValue("Rage", n.zwSKt, n.faAwv, n.djqyu, !1);
                                continue
                        }
                        break
                    } else switch (a % 18) {
                        case 1:
                            if (n.QJtki(n.SvqWK, "HnQwI")) return void(n.QJtki(menu.get_hotkey(ref_inverter), state) && menu.toggle(ref_inverter));
                            Local.SetClanTag("\t\t");
                            break;
                        case 2:
                            Local.SetClanTag(n.JuAdK);
                            break;
                        case 3:
                            Local.SetClanTag("rd     \t");
                            break;
                        case 4:
                            Local.SetClanTag(n.YSgkb);
                            break;
                        case 5:
                            if (n.mexsc("XBRWI", n.eKrZv)) {
                                Local.SetClanTag("cord   \t");
                                break
                            }
                            for (var o = n.XbklX.split("|"), c = 0;;) {
                                switch (o[c++]) {
                                    case "0":
                                        UI.SetEnabled(n.zyAlZ, n.UcWAr, !0);
                                        continue;
                                    case "1":
                                        UI.SetEnabled(n.zyAlZ, n.MjGaO, !0);
                                        continue;
                                    case "2":
                                        UI.SetEnabled(n.zyAlZ, "Freestand Key", !0);
                                        continue;
                                    case "3":
                                        UI.SetEnabled(n.zyAlZ, n.dZiBk, !1);
                                        continue;
                                    case "4":
                                        UI.SetEnabled(n.zyAlZ, n.apsrI, !1);
                                        continue;
                                    case "5":
                                        UI.SetEnabled("Script items", n.KmJPH, !1);
                                        continue;
                                    case "6":
                                        UI.SetEnabled(n.zyAlZ, n.jojrY, !1);
                                        continue;
                                    case "7":
                                        UI.SetEnabled(n.zyAlZ, n.Mbbxo, !1);
                                        continue;
                                    case "8":
                                        UI.SetEnabled(n.zyAlZ, n.tHFae, !1);
                                        continue;
                                    case "9":
                                        menu.visibility(body, !0);
                                        continue;
                                    case "10":
                                        UI.SetEnabled(n.zyAlZ, "Faster Double-tap", !1);
                                        continue;
                                    case "11":
                                        UI.SetEnabled(n.zyAlZ, n.BAewA, !1);
                                        continue;
                                    case "12":
                                        UI.SetEnabled(n.zyAlZ, n.OTHBO, !1);
                                        continue;
                                    case "13":
                                        UI.SetEnabled(n.zyAlZ, n.KExSj, !1);
                                        continue;
                                    case "14":
                                        UI.SetEnabled(n.zyAlZ, n.qLnFH, !1);
                                        continue;
                                    case "15":
                                        UI.SetEnabled(n.zyAlZ, n.DrGQj, !0);
                                        continue;
                                    case "16":
                                        UI.SetEnabled("Script items", n.tZJkH, !1);
                                        continue;
                                    case "17":
                                        UI.SetEnabled("Script items", n.vhEuk, !0);
                                        continue;
                                    case "18":
                                        UI.SetEnabled(n.zyAlZ, n.HhOVU, !1);
                                        continue;
                                    case "19":
                                        UI.SetEnabled(n.zyAlZ, n.mVrxT, !1);
                                        continue;
                                    case "20":
                                        UI.SetEnabled(n.zyAlZ, n.uSagi, !1);
                                        continue;
                                    case "21":
                                        UI.SetEnabled(n.zyAlZ, n.rYNim, !0);
                                        continue
                                }
                                break
                            }
                            case 6:
                                if (n.QJtki(n.DzmGK, "esxkw")) {
                                    Local.SetClanTag(n.jBmAZ);
                                    break
                                }
                                if (!UI.GetValue(n.zyAlZ, n.vhEuk)) return;
                            case 7:
                                if (n.QJtki("zPXZj", n.ufsmL)) {
                                    Local.SetClanTag("tecord  ");
                                    break
                                }
                                var u = Entity.GetProp(index, n.rBSMa, n.OjZYX);
                                return Math.sqrt(n.HiuQC(n.WfqIC(u[0], u[0]), n.WFJOQ(u[1], u[1])));
                            case 8:
                                Local.SetClanTag(n.OZBcy);
                                break;
                            case 9:
                                if (n.QJtki("GMNOc", n.LCFrq)) {
                                    Local.SetClanTag("cutecord");
                                    break
                                }
                                for (var l = n.uiGjd.split("|"), s = 0;;) {
                                    switch (l[s++]) {
                                        case "0":
                                            ragebot_target_hitbox = Event.GetInt(n.YLYvb);
                                            continue;
                                        case "1":
                                            ragebot_target = Event.GetInt(n.FmwHK);
                                            continue;
                                        case "2":
                                            ragebot_target_exploit = Event.GetInt(n.wNcjw);
                                            continue;
                                        case "3":
                                            Cheat.PrintColor([255], n.fZdCj(n.ABXTd(n.MYHVl(n.MYHVl(n.xSPxs, targetName) + " HITBOX: ", n.DoXgh(getHitboxName, ragebot_target_hitbox)) + n.rTGgG + ragebot_target_hitchance, n.hgdRj), ragebot_target_safepoint) + n.tsPEU + ragebot_target_exploit + " \n");
                                            continue;
                                        case "4":
                                            targetName = Entity.GetName(ragebot_target);
                                            continue;
                                        case "5":
                                            ragebot_target_hitchance = Event.GetInt(n.rSstM);
                                            continue;
                                        case "6":
                                            ragebot_target_safepoint = Event.GetInt(n.FVmFW);
                                            continue
                                    }
                                    break
                                }
                                case 10:
                                    if (n.mexsc(n.ZoQHN, n.ZoQHN)) {
                                        Local.SetClanTag(n.BDOyL);
                                        break
                                    }
                                    Render.StringCustom(x_1, y_1 + 20, 0, n.deIjc, [255], Font);
                                case 11:
                                    if (!n.avHOD(n.SpMfl, n.SpMfl)) {
                                        Local.SetClanTag(" cutecor");
                                        break
                                    }
                                    for (var d = n.MwsTB.split("|"), f = 0;;) {
                                        switch (d[f++]) {
                                            case "0":
                                                UI.SetValue(n.ZfrRS, "AUTOSNIPER", n.YRxcY, n.djqyu, !0);
                                                continue;
                                            case "1":
                                                UI.SetValue("Rage", n.coLbz, "AWP config", n.djqyu, !0);
                                                continue;
                                            case "2":
                                                UI.SetValue("Rage", n.vaUtL, n.fPMNq, n.djqyu, !0);
                                                continue;
                                            case "3":
                                                UI.SetValue("Rage", n.zZCvK, n.NwlbF, n.djqyu, !0);
                                                continue;
                                            case "4":
                                                UI.SetValue(n.ZfrRS, n.oIfPY, n.euwpY, n.djqyu, !0);
                                                continue;
                                            case "5":
                                                UI.SetValue(n.ZfrRS, n.zwSKt, n.faAwv, n.djqyu, !0);
                                                continue
                                        }
                                        break
                                    }
                                    case 12:
                                        if (n.uRgxC("pgpiF", "ACfsa")) {
                                            Local.SetClanTag(n.RwoXe);
                                            break
                                        }
                                        data.id = e, data.fov = fov;
                                    case 13:
                                        if (n.iwqSk(n.gIRZZ, "DiYpX")) {
                                            Local.SetClanTag(n.NETKi);
                                            break
                                        }
                                        for (var g = n.fxIyi.split("|"), _ = 0;;) {
                                            switch (g[_++]) {
                                                case "0":
                                                    var y = n.disHJ(Globals.TickInterval(), n.IjGwO(b, ticks_to_shift));
                                                    continue;
                                                case "1":
                                                    if (n.meqtM(y, Entity.GetProp(I, n.YSgEa, n.POkgM))) return !1;
                                                    continue;
                                                case "2":
                                                    if (n.vkyMS(I, null) || n.vkyMS(v, null)) return !1;
                                                    continue;
                                                case "3":
                                                    return !0;
                                                case "4":
                                                    if (y < Entity.GetProp(v, n.DCMwg, n.AIUmX)) return !1;
                                                    continue;
                                                case "5":
                                                    var b = Entity.GetProp(I, n.YSgEa, n.kPmWO);
                                                    continue;
                                                case "6":
                                                    var v = Entity.GetWeapon(I);
                                                    continue;
                                                case "7":
                                                    var I = Entity.GetLocalPlayer();
                                                    continue
                                            }
                                            break
                                        }
                                        case 14:
                                            Local.SetClanTag("     cut");
                                            break;
                                        case 15:
                                            Local.SetClanTag("      cu");
                                            break;
                                        case 16:
                                            if (n.lNGaq(n.WiKXt, n.WiKXt)) {
                                                Local.SetClanTag("       c");
                                                break
                                            }
                                            Exploit.EnableRecharge(), Exploit.OverrideShift(12);
                                        case 17:
                                            if (!n.uRgxC(n.EAOWO, n.EAOWO)) {
                                                Local.SetClanTag("\t\t");
                                                break
                                            }
                                            bin -= index, selection.push(binlib[name].values[index])
                    }
            lasttime = a
        } else if (!UI.IsHotkeyActive(n.NNmEO, "Wait for On-shot key")) return
}
var last_shot_time = [];

function on_draw() {
    var e = {
            PVTQr: "Misc"
        },
        t = e;
    UI.IsHotkeyActive(t.PVTQr, "Wait for On-shot key")
}

function on_create_move() {
    for (var e = {
            XmBJL: "1|0|4|2|3",
            xprVy: "Misc",
            UXlVB: "Wait for On-shot key",
            NAzoy: function (e, t) {
                return e < t
            },
            KoTkL: function (e, t) {
                return e <= t
            }
        }, t = e, n = t.XmBJL.split("|"), a = 0;;) {
        switch (n[a++]) {
            case "0":
                var r = Entity.GetLocalPlayer();
                continue;
            case "1":
                if (!UI.IsHotkeyActive(t.xprVy, t.UXlVB)) return;
                continue;
            case "2":
                var i = Entity.GetEnemies();
                continue;
            case "3":
                for (var o = 0; t.NAzoy(o, i.length); o++) {
                    var c = i[o],
                        u = Globals.Tickcount() - last_shot_time[c];
                    u >= 0 && t.KoTkL(u, 12) || Ragebot.IgnoreTarget(c)
                }
                continue;
            case "4":
                if (!Entity.IsAlive(r)) return;
                continue
        }
        break
    }
}

function on_weapon_fire() {
    var e = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    last_shot_time[e] = Globals.Tickcount()
}

function on_player_connect() {
    var e = {
            yrqgN: "userid",
            NcdaT: function (e, t) {
                return e == t
            }
        },
        t = e,
        n = Entity.GetEntityFromUserID(Event.GetInt(t.yrqgN));
    t.NcdaT(n, Entity.GetLocalPlayer()) && (last_shot_time = [])
}

function _TBC_UNLOAD() {
    AntiAim.SetOverride(0), Exploit.EnableRecharge(), Exploit.OverrideShift(12)
}

function getHitboxName(e) {
    var t = {
            IVMfl: "Head",
            SBEfM: "Neck",
            YnCWa: "Pelvis",
            tNlfJ: "Body",
            sXlbc: "Chest",
            vQvTm: "Upper chest",
            blpAn: "Left thigh",
            FcVMN: "Right calf",
            jKkWu: "Right foot",
            fOeec: "Left hand",
            zizeU: "Right hand",
            bbGMb: "Left upper arm",
            DuhRU: "Left forearm",
            FzVOP: "Right upper arm",
            Rhleg: "Right forearm",
            UXmcK: "Generic"
        },
        n = t,
        a = "";
    switch (e) {
        case 0:
            a = n.IVMfl;
            break;
        case 1:
            a = n.SBEfM;
            break;
        case 2:
            a = n.YnCWa;
            break;
        case 3:
            a = n.tNlfJ;
            break;
        case 4:
            a = "Thorax";
            break;
        case 5:
            a = n.sXlbc;
            break;
        case 6:
            a = n.vQvTm;
            break;
        case 7:
            a = n.blpAn;
            break;
        case 8:
            a = "Right thigh";
            break;
        case 9:
            a = "Left calf";
            break;
        case 10:
            a = n.FcVMN;
            break;
        case 11:
            a = "Left foot";
            break;
        case 12:
            a = n.jKkWu;
            break;
        case 13:
            a = n.fOeec;
            break;
        case 14:
            a = n.zizeU;
            break;
        case 15:
            a = n.bbGMb;
            break;
        case 16:
            a = n.DuhRU;
            break;
        case 17:
            a = n.FzVOP;
            break;
        case 18:
            a = n.Rhleg;
            break;
        default:
            a = n.UXmcK
    }
    return a
}

function ragebotLogs() {
    var e = {
            ocRAR: "6|4|3|2|0|5|1",
            luyFU: "exploit",
            pqTfB: function (e, t) {
                return e + t
            },
            AyCdS: function (e, t) {
                return e + t
            },
            BJsnM: function (e, t) {
                return e + t
            },
            GBUJh: function (e, t) {
                return e + t
            },
            AtyUB: "[cutecord] TARGET: ",
            wnexk: " HITBOX: ",
            vBDwN: function (e, t) {
                return e(t)
            },
            xglvH: " HC: ",
            wJvPC: " SAFEPOINT: ",
            Sxsna: " EXPLOIT: ",
            xzqvQ: "safepoint",
            BisEx: "hitchance",
            HyQaT: "target_index"
        },
        t = e;
    if (UI.GetValue("Script items", "Rage bot fire logs"))
        for (var n = t.ocRAR.split("|"), a = 0;;) {
            switch (n[a++]) {
                case "0":
                    ragebot_target_exploit = Event.GetInt(t.luyFU);
                    continue;
                case "1":
                    Cheat.PrintColor([255], t.pqTfB(t.AyCdS(t.AyCdS(t.BJsnM(t.BJsnM(t.GBUJh(t.GBUJh(t.GBUJh(t.AtyUB, targetName), t.wnexk) + t.vBDwN(getHitboxName, ragebot_target_hitbox), t.xglvH), ragebot_target_hitchance), t.wJvPC), ragebot_target_safepoint), t.Sxsna), ragebot_target_exploit) + " \n");
                    continue;
                case "2":
                    ragebot_target_safepoint = Event.GetInt(t.xzqvQ);
                    continue;
                case "3":
                    ragebot_target_hitchance = Event.GetInt(t.BisEx);
                    continue;
                case "4":
                    ragebot_target_hitbox = Event.GetInt("hitbox");
                    continue;
                case "5":
                    targetName = Entity.GetName(ragebot_target);
                    continue;
                case "6":
                    ragebot_target = Event.GetInt(t.HyQaT);
                    continue
            }
            break
        }
}
var heavy_cache = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage"),
    scout_cache = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage"),
    awp_cache = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage"),
    auto_cache = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage");

function isActive(e) {
    var t = {
            OywhM: "Script items"
        },
        n = t;
    return UI.IsHotkeyActive(n.OywhM, e)
}

function setValue(e, t) {
    var n = {
            vJlqI: "Targeting",
            uFYLZ: "Minimum damage"
        },
        a = n;
    UI.SetValue("Rage", e.toUpperCase(), a.vJlqI, a.uFYLZ, t)
}

function isHeavyPistol(e) {
    var t = {
            UJiLb: function (e, t) {
                return e(t)
            },
            VLTNR: "Freestand Key",
            RqawS: "Anti-Aim",
            XqtXd: "Rage Anti-Aim",
            tqUAf: "Auto direction",
            sLVjo: function (e, t) {
                return e(t)
            },
            yqcwM: function (e, t) {
                return e == t
            },
            EFaeX: function (e, t) {
                return e === t
            },
            AfyyE: "ImXDA"
        },
        n = t;
    if (n.yqcwM(e, "r8 revolver") || n.yqcwM(e, "desert eagle")) {
        if (n.EFaeX("ImXDA", n.AfyyE)) return !0;
        n.UJiLb(isActive, n.VLTNR) && UI.SetValue(n.RqawS, n.XqtXd, n.tqUAf, !0), n.sLVjo(isActive, n.VLTNR) || UI.SetValue("Anti-Aim", n.XqtXd, n.tqUAf, !1)
    }
}

function isAutoSniper(e) {
    var t = {
            zuqmJ: function (e, t) {
                return e == t
            },
            ReVBw: "scar 20",
            ybikE: function (e, t) {
                return e == t
            }
        },
        n = t;
    if (n.zuqmJ(e, n.ReVBw) || n.ybikE(weapon_name, "g3sg1")) return !0
}

function FreestandonKeyCM() {
    var e = {
            twIVr: function (e, t) {
                return e(t)
            },
            kixyL: "Freestand Key",
            wUEgC: function (e, t) {
                return e === t
            },
            vpUrU: "GWCRM",
            CRdQU: "qXjDB",
            uqlew: "Anti-Aim",
            UXQzd: "Auto direction",
            DoZxR: "Rage Anti-Aim"
        },
        t = e;
    if (t.twIVr(isActive, t.kixyL)) {
        if (t.wUEgC(t.vpUrU, t.CRdQU)) return [vec.x, vec.y, vec.z];
        UI.SetValue(t.uqlew, "Rage Anti-Aim", t.UXQzd, !0)
    }
    t.twIVr(isActive, t.kixyL) || UI.SetValue(t.uqlew, t.DoZxR, t.UXQzd, !1)
}

function MagikKeyCm() {
    var e = {
            lAron: function (e, t) {
                return e == t
            },
            BtjoL: "desert eagle",
            WBQLz: "Misc",
            YYlOp: "Script items",
            NwvlD: "Override DMG",
            ZMvfb: "JAVASCRIPT",
            ZEUmS: "DMG",
            lPYfB: function (e, t) {
                return e(t)
            },
            ZcHcD: "Override DMG Key",
            YiFnD: function (e, t, n) {
                return e(t, n)
            },
            ZBTVT: "YfzNb",
            UdVeC: function (e, t, n) {
                return e(t, n)
            },
            tGMxc: "HEAVY PISTOL",
            tFVQA: function (e, t) {
                return e(t)
            },
            lgFWb: function (e, t, n) {
                return e(t, n)
            },
            yZSlr: "SCOUT",
            MdIjX: function (e, t) {
                return e !== t
            },
            LoygE: "wjddi",
            WRKuD: function (e, t, n) {
                return e(t, n)
            },
            mlOsT: "AWP",
            DZxOV: function (e, t, n) {
                return e(t, n)
            },
            wMvzU: "AUTOSNIPER"
        },
        t = e;
    if (UI.GetValue(t.WBQLz, t.YYlOp, t.NwvlD)) {
        if (heavy_value = UI.GetValue("Misc", t.ZMvfb, t.YYlOp, t.ZEUmS), scout_value = UI.GetValue("Misc", "JAVASCRIPT", "Script items", t.ZEUmS), awp_value = UI.GetValue("Misc", t.ZMvfb, "Script items", t.ZEUmS), auto_value = UI.GetValue(t.WBQLz, t.ZMvfb, t.YYlOp, "DMG"), weapon_name = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())), t.lPYfB(isActive, t.ZcHcD)) t.YiFnD(setValue, "HEAVY PISTOL", heavy_value);
        else {
            if ("YfzNb" !== t.ZBTVT) return UI.GetColor.apply(null, elem.path);
            t.UdVeC(setValue, t.tGMxc, heavy_cache)
        }
        if (t.tFVQA(isActive, t.ZcHcD)) t.lgFWb(setValue, t.yZSlr, scout_value);
        else if (t.MdIjX(t.LoygE, "HKTTf")) t.lgFWb(setValue, t.yZSlr, scout_cache);
        else if ("r8 revolver" == name || t.lAron(name, t.BtjoL)) return !0;
        t.tFVQA(isActive, "Override DMG Key") ? t.WRKuD(setValue, t.mlOsT, awp_value) : setValue(t.mlOsT, awp_cache), t.tFVQA(isActive, t.ZcHcD) ? t.DZxOV(setValue, t.wMvzU, auto_value) : t.DZxOV(setValue, t.wMvzU, auto_cache)
    }
}
const global_print = Global.Print,
    global_print_chat = Global.PrintChat,
    global_print_color = Global.PrintColor,
    global_register_callback = Global.RegisterCallback,
    global_execute_command = Global.ExecuteCommand,
    global_frame_stage = Global.FrameStage,
    global_tickcount = Global.Tickcount,
    global_tickrate = Global.Tickrate,
    global_tick_interval = Global.TickInterval,
    global_curtime = Global.Curtime,
    global_realtime = Global.Realtime,
    global_frametime = Global.Frametime,
    global_latency = Global.Latency,
    global_get_view_angles = Global.GetViewAngles,
    global_set_view_angles = Global.SetViewAngles,
    global_get_map_name = Global.GetMapName,
    global_is_key_pressed = Global.IsKeyPressed,
    global_get_screen_size = Global.GetScreenSize,
    global_get_cursor_position = Global.GetCursorPosition,
    global_play_sound = Global.PlaySound,
    global_play_microphone = Global.PlayMicrophone,
    global_stop_microphone = Global.StopMicrophone,
    global_get_username = Global.GetUsername,
    global_set_clan_tag = Global.SetClanTag,
    globals_tickcount = Globals.Tickcount,
    globals_tickrate = Globals.Tickrate,
    globals_tick_interval = Globals.TickInterval,
    globals_curtime = Globals.Curtime,
    globals_realtime = Globals.Realtime,
    globals_frametime = Globals.Frametime,
    sound_play = Sound.Play,
    sound_play_microphone = Sound.PlayMicrophone,
    sound_stop_microphone = Sound.StopMicrophone,
    cheat_get_username = Cheat.GetUsername,
    cheat_execute_command = Cheat.ExecuteCommand,
    cheat_frame_stage = Cheat.FrameStage,
    cheat_print = Cheat.Print,
    cheat_print_chat = Cheat.PrintChat,
    cheat_print_color = Cheat.PrintColor,
    local_latency = Local.Latency,
    local_get_view_angles = Local.GetViewAngles,
    local_set_view_angles = Local.SetViewAngles,
    local_set_clan_tag = Local.SetClanTag,
    local_get_real_yaw = Local.GetRealYaw,
    local_get_fake_yaw = Local.GetFakeYaw,
    local_get_spread = Local.GetSpread,
    local_get_inaccuracy = Local.GetInaccuracy,
    world_get_map_name = World.GetMapName,
    world_get_server_string = World.GetServerString,
    input_get_cursor_position = Input.GetCursorPosition,
    input_is_key_pressed = Input.IsKeyPressed,
    render_string = Render.String,
    render_text_size = Render.TextSize,
    render_line = Render.Line,
    render_rect = Render.Rect,
    render_filled_rect = Render.FilledRect,
    render_gradient_rect = Render.GradientRect,
    render_circle = Render.Circle,
    render_filled_circle = Render.FilledCircle,
    render_polygon = Render.Polygon,
    render_world_to_screen = Render.WorldToScreen,
    render_add_font = Render.AddFont,
    render_find_font = Render.FindFont,
    render_string_custom = Render.StringCustom,
    render_textured_rect = Render.TexturedRect,
    render_add_texture = Render.AddTexture,
    render_text_size_custom = Render.TextSizeCustom,
    render_get_screen_size = Render.GetScreenSize,
    ui_get_value = UI.GetValue,
    ui_set_value = UI.SetValue,
    ui_add_checkbox = UI.AddCheckbox,
    ui_add_slider_int = UI.AddSliderInt,
    ui_add_slider_float = UI.AddSliderFloat,
    ui_add_hotkey = UI.AddHotkey,
    ui_add_label = UI.AddLabel,
    ui_add_dropdown = UI.AddDropdown,
    ui_add_multi_dropdown = UI.AddMultiDropdown,
    ui_add_color_picker = UI.AddColorPicker,
    ui_add_textbox = UI.AddTextbox,
    ui_set_enabled = UI.SetEnabled,
    ui_get_string = UI.GetString,
    ui_get_color = UI.GetColor,
    ui_set_color = UI.SetColor,
    ui_is_hotkey_active = UI.IsHotkeyActive,
    ui_toggle_hotkey = UI.ToggleHotkey,
    ui_is_menu_open = UI.IsMenuOpen,
    convar_get_int = Convar.GetInt,
    convar_set_int = Convar.SetInt,
    convar_get_float = Convar.GetFloat,
    convar_set_float = Convar.SetFloat,
    convar_get_string = Convar.GetString,
    convar_set_string = Convar.SetString,
    event_get_int = Event.GetInt,
    event_get_float = Event.GetFloat,
    event_get_string = Event.GetString,
    entity_get_entities = Entity.GetEntities,
    entity_get_entities_by_class_i_d = Entity.GetEntitiesByClassID,
    entity_get_players = Entity.GetPlayers,
    entity_get_enemies = Entity.GetEnemies,
    entity_get_teammates = Entity.GetTeammates,
    entity_get_local_player = Entity.GetLocalPlayer,
    entity_get_game_rules_proxy = Entity.GetGameRulesProxy,
    entity_get_entity_from_user_i_d = Entity.GetEntityFromUserID,
    entity_is_teammate = Entity.IsTeammate,
    entity_is_enemy = Entity.IsEnemy,
    entity_is_bot = Entity.IsBot,
    entity_is_local_player = Entity.IsLocalPlayer,
    entity_is_valid = Entity.IsValid,
    entity_is_alive = Entity.IsAlive,
    entity_is_dormant = Entity.IsDormant,
    entity_get_class_i_d = Entity.GetClassID,
    entity_get_class_name = Entity.GetClassName,
    entity_get_name = Entity.GetName,
    entity_get_weapon = Entity.GetWeapon,
    entity_get_weapons = Entity.GetWeapons,
    entity_get_render_origin = Entity.GetRenderOrigin,
    entity_get_prop = Entity.GetProp,
    entity_set_prop = Entity.SetProp,
    entity_get_hitbox_position = Entity.GetHitboxPosition,
    entity_get_eye_position = Entity.GetEyePosition,
    trace_line = Trace.Line,
    trace_bullet = Trace.Bullet,
    usercmd_set_movement = UserCMD.SetMovement,
    usercmd_get_movement = UserCMD.GetMovement,
    usercmd_set_angles = UserCMD.SetAngles,
    usercmd_force_jump = UserCMD.ForceJump,
    usercmd_force_crouch = UserCMD.ForceCrouch,
    antiaim_get_override = AntiAim.GetOverride,
    antiaim_set_override = AntiAim.SetOverride,
    antiaim_set_real_offset = AntiAim.SetRealOffset,
    antiaim_set_fake_offset = AntiAim.SetFakeOffset,
    antiaim_set_l_b_y_offset = AntiAim.SetLBYOffset,
    exploit_get_charge = Exploit.GetCharge,
    exploit_recharge = Exploit.Recharge,
    exploit_disable_recharge = Exploit.DisableRecharge,
    exploit_enable_recharge = Exploit.EnableRecharge,
    ragebot_override_minimum_damage = Ragebot.OverrideMinimumDamage,
    ragebot_override_hitchance = Ragebot.OverrideHitchance,
    ragebot_override_accuracy_boost = Ragebot.OverrideAccuracyBoost,
    ragebot_override_multipoint_scale = Ragebot.OverrideMultipointScale,
    ragebot_force_safety = Ragebot.ForceSafety;
var _0xd0b4c8 = {
        _class: "BetterUI"
    },
    menu = _0xd0b4c8;
const menu_spacer = "                                                                                  ";
menu.concat = function (e, t) {
    var n = [];
    for (var a in e) n.push(e[a]);
    return n.push(t), n
}, menu.label = function (e) {
    UI.AddLabel(e)
}, menu.call = function (e, t, n, a) {
    var r = {
            MizlY: "Misc",
            DBtXw: "Restrictions",
            HlJsP: "Anti-Aim",
            MOxYV: "Rage Anti-Aim",
            xeFVy: "PERFORMANCE & INFORMATION",
            LbEIo: "Extra",
            QXmWT: "Yaw offset",
            KCnVI: function (e, t) {
                return e + t
            },
            LCoPE: "JAVASCRIPT",
            tLczr: function (e, t) {
                return e != t
            },
            YULDr: function (e, t) {
                return e !== t
            },
            oHZEX: "OoHtx",
            xQrZY: "VWsoN",
            gRqDm: "szURv"
        },
        i = r;
    const o = i.KCnVI(t + menu_spacer, n);
    var c = [o],
        u = {};
    u.path = ["Misc", i.LCoPE, "Script items", o];
    const l = u;
    if (i.tLczr(a, null))
        if (i.YULDr(i.oHZEX, i.oHZEX)) UI.SetValue(i.MizlY, "PERFORMANCE & INFORMATION", i.DBtXw, !0), UI.SetValue(i.HlJsP, i.MOxYV, "Yaw offset", 11), AntiAim.SetOverride(0);
        else
            for (var s = 0; s < a.length; s++) i.xQrZY !== i.gRqDm ? c.push(a[s]) : (UI.SetValue(i.MizlY, i.xeFVy, i.DBtXw, !1), UI.SetValue(i.HlJsP, i.LbEIo, "Pitch", !1), UI.SetValue(i.HlJsP, i.MOxYV, i.QXmWT, 180), AntiAim.SetOverride(0));
    return e.apply(null, c), l
}, menu.reference = function (e) {
    var t = {};
    return t.path = e, t
}, menu.get = function (e) {
    return UI.GetValue.apply(null, e.path)
}, menu.get_hotkey = function (e) {
    return UI.IsHotkeyActive.apply(null, e.path)
}, menu.get_color = function (e) {
    return UI.GetColor.apply(null, e.path)
}, menu.set = function (e, t) {
    const n = e;
    UI.SetValue.apply(null, this.concat(n.path, t))
}, menu.set_color = function (e, t) {
    const n = e;
    UI.SetColor.apply(null, this.concat(n.path, t))
}, menu.toggle = function (e) {
    UI.ToggleHotkey.apply(null, e.path)
}, menu.visibility = function (e, t) {
    const n = e;
    UI.SetEnabled.apply(null, this.concat(n.path, t))
};
var _0x5dbdbe = {
        _class: "vector"
    },
    vector = _0x5dbdbe;

function normalize_yaw(e) {
    var t = e;
    return t < -180 && (t += 360), t > 180 && (t -= 360), t
}
vector.new = function (e) {
    var t = {};
    return t.x = e[0], t.y = e[1], t.z = e[2], t
}, vector.operate = function (e, t, n) {
    var a = {
            njOdC: function (e, t) {
                return e + t
            },
            ImjEa: function (e, t) {
                return e + t
            },
            sggAy: function (e, t) {
                return e - t
            },
            LPZjB: function (e, t) {
                return e - t
            },
            moQzZ: function (e, t) {
                return e - t
            },
            xoswK: function (e, t) {
                return e * t
            },
            eoUtF: function (e, t) {
                return e * t
            },
            SmfFe: function (e, t) {
                return e / t
            }
        },
        r = a;
    switch (n) {
        case "+":
            var i = {};
            return i.x = r.njOdC(e.x, t.x), i.y = r.njOdC(e.y, t.y), i.z = r.ImjEa(e.z, t.z), i;
        case "-":
            var o = {};
            return o.x = r.sggAy(e.x, t.x), o.y = r.LPZjB(e.y, t.y), o.z = r.moQzZ(e.z, t.z), o;
        case "*":
            var c = {};
            return c.x = r.xoswK(e.x, t.x), c.y = e.y * t.y, c.z = r.eoUtF(e.z, t.z), c;
        case "/":
            var u = {};
            return u.x = e.x / t.x, u.y = r.SmfFe(e.y, t.y), u.z = e.z / t.z, u
    }
}, vector.length2d = function (e) {
    var t = {
            GtBxH: function (e, t) {
                return e * t
            },
            dkSTU: function (e, t) {
                return e * t
            }
        },
        n = t;
    return Math.sqrt(n.GtBxH(e.x, e.x) + n.dkSTU(e.y, e.y))
}, vector.angles = function (e) {
    var t = {
            kssNf: function (e, t) {
                return e / t
            },
            OoXsT: function (e, t) {
                return e * t
            }
        },
        n = t,
        a = {};
    return a.x = n.kssNf(n.OoXsT(-Math.atan2(e.z, this.length2d(e)), 180), Math.PI), a.y = n.kssNf(180 * Math.atan2(e.y, e.x), Math.PI), a.z = 0, a
}, vector.fov_to = function (e, t, n) {
    var a = {
            zErna: function (e, t) {
                return e - t
            },
            wwmKG: function (e, t) {
                return e % t
            },
            FlpaH: function (e, t) {
                return e % t
            },
            vqelU: function (e, t) {
                return e % t
            },
            FlRyw: function (e, t) {
                return e > t
            },
            hawQZ: function (e, t) {
                return e - t
            }
        },
        r = a;
    const i = this.angles(this.operate(t, e, "-")),
        o = this.new([Math.abs(r.zErna(n.x, i.x)), r.wwmKG(Math.abs(r.zErna(r.FlpaH(n.y, 360), r.vqelU(i.y, 360))), 360), 0]);
    return r.FlRyw(o.y, 180) && (o.y = r.hawQZ(360, o.y)), this.length2d(o)
}, vector.to_array = function (e) {
    return [e.x, e.y, e.z]
};
const body = menu.call(ui_add_dropdown, "Ideal Yaw Mode", "lby_body_mode", [
        ["Peek With Fake", "Hide Fake"]
    ]),
    ref_inverter = menu.reference(["Anti-Aim", "Fake angles", "Inverter"]),
    ref_bodyflip = menu.reference(["Anti-Aim", "Fake angles", "Inverter flip"]),
    ref_inverter_legit = menu.reference(["Anti-Aim", "Legit Anti-Aim", "Direction key"]),
    ref_ragebot = menu.reference(["Rage", "GENERAL", "General", "Enabled"]);

function update_anti_aim_state(e) {
    var t = {
            aiVSk: function (e, t) {
                return e !== t
            },
            pZWtp: function (e, t) {
                return e + t
            },
            FZXau: function (e, t) {
                return e !== t
            }
        },
        n = t;
    menu.get(ref_ragebot) ? n.aiVSk(menu.get_hotkey(ref_inverter), e) && menu.toggle(ref_inverter) : (e = n.pZWtp(e, 1) % 2, n.FZXau(menu.get_hotkey(ref_inverter_legit), e) && menu.toggle(ref_inverter_legit))
}
var _0x4f7f5a = {
    weapon_act1: !1,
    weapon_zoom1: !1,
    override_yaw: !1,
    last_hit_lby: [],
    last_target_visibility: !1,
    override_flip: !1
};
_0x4f7f5a.last_override_time = globals_curtime();
var plugin = _0x4f7f5a;

function get_closest_target() {
    var e = {
            ZFRYN: "4|0|3|2|1",
            WxIMK: function (e, t) {
                return e < t
            },
            KGMYM: function (e, t) {
                return e - t
            },
            mqOdX: function (e, t) {
                return e >= t
            },
            ERGJK: function (e, t) {
                return e <= t
            },
            rmdyH: function (e) {
                return e()
            },
            LvISY: function (e) {
                return e()
            },
            MqIjh: "MmUda",
            ZoccW: function (e, t, n) {
                return e(t, n)
            },
            vkwNJ: function (e, t) {
                return e(t)
            },
            SwVTh: function (e) {
                return e()
            }
        },
        t = e;
    const n = t.rmdyH(entity_get_enemies),
        a = t.LvISY(entity_get_local_player);
    var r = {
        id: null,
        fov: 180
    };
    const i = r;
    for (var o = 0; t.WxIMK(o, n.length); o++)
        if (t.MqIjh != t.MqIjh)
            for (var c = t.ZFRYN.split("|"), u = 0;;) {
                switch (c[u++]) {
                    case "0":
                        var l = Entity.GetLocalPlayer();
                        continue;
                    case "1":
                        for (var s = 0; t.WxIMK(s, g.length); s++) {
                            var d = g[s],
                                f = t.KGMYM(Globals.Tickcount(), last_shot_time[d]);
                            t.mqOdX(f, 0) && t.ERGJK(f, 12) || Ragebot.IgnoreTarget(d)
                        }
                        continue;
                    case "2":
                        var g = Entity.GetEnemies();
                        continue;
                    case "3":
                        if (!Entity.IsAlive(l)) return;
                        continue;
                    case "4":
                        if (!UI.IsHotkeyActive("Misc", "Wait for On-shot key")) return;
                        continue
                }
                break
            } else {
                const e = n[o],
                    r = vector.new(t.ZoccW(entity_get_hitbox_position, e, 0)),
                    c = vector.new(t.vkwNJ(entity_get_eye_position, a)),
                    u = vector.new(t.SwVTh(local_get_view_angles)),
                    l = vector.fov_to(c, r, u);
                t.WxIMK(l, i.fov) && (i.id = e, i.fov = l)
            }
    return i.id
}

function get_target_visibility() {
    var e = {
            lXGXn: function (e) {
                return e()
            },
            lvzfr: function (e, t) {
                return e(t)
            },
            mooXb: function (e) {
                return e()
            },
            gdfsY: function (e, t) {
                return e(t)
            },
            Nqgdr: function (e, t, n, a) {
                return e(t, n, a)
            },
            zdeVK: function (e, t, n, a) {
                return e(t, n, a)
            },
            HLAsd: function (e, t) {
                return e === t
            }
        },
        t = e;
    const n = t.lXGXn(get_closest_target);
    if (!n || !t.lvzfr(entity_is_valid, n)) return !1;
    if (entity_is_dormant(n)) return !1;
    const a = t.mooXb(entity_get_local_player);
    var r = vector.new(t.gdfsY(entity_get_eye_position, a)),
        i = vector.new(t.Nqgdr(entity_get_prop, a, "CBasePlayer", "m_vecVelocity[0]")),
        o = entity_get_hitbox_position(n, 0);
    i = vector.operate(i, vector.new([.25, .25, .25]), "*"), r = vector.operate(r, i, "+");
    const c = t.zdeVK(trace_line, a, vector.to_array(r), o)[0];
    return t.HLAsd(c, n)
}

function get_optimal_angle() {
    var e = {
            rPGuz: function (e) {
                return e()
            },
            sEGUt: function (e, t) {
                return e <= t
            },
            uzWIf: function (e, t) {
                return e + t
            },
            TEvfJ: function (e, t) {
                return e === t
            },
            JSyEn: function (e, t) {
                return e / t
            },
            YCuzn: function (e, t) {
                return e * t
            },
            NPiQY: function (e, t, n, a) {
                return e(t, n, a)
            },
            wVrRD: "right",
            hMTYo: function (e, t) {
                return e > t
            },
            tWJgY: function (e, t) {
                return e === t
            }
        },
        t = e;
    const n = menu.get(body),
        a = t.rPGuz(entity_get_local_player),
        r = vector.new(entity_get_render_origin(a));
    for (var i = t.rPGuz(local_get_view_angles)[1], o = {
            left: 0,
            right: 0
        }, c = o, u = i - 90; t.sEGUt(u, t.uzWIf(i, 90)); u += 30) {
        if (t.TEvfJ(u, i)) continue;
        const e = t.JSyEn(u * Math.PI, 180),
            n = vector.operate(r, vector.new([t.YCuzn(256, Math.cos(e)), t.YCuzn(256, Math.sin(e)), 0]), "+"),
            o = t.NPiQY(trace_line, a, vector.to_array(r), vector.to_array(n));
        c[u < i ? "left" : t.wVrRD] += o[1]
    }
    return c.left /= 3, c.right /= 3, t.hMTYo(c.left, c.right) ? t.tWJgY(n, 0) ? 0 : 1 : t.tWJgY(n, 0) ? 1 : 0
}
var run = !1,
    estimate = 0,
    firstBuy = 0,
    alias = [
        ["awp"],
        ["ssg08"],
        ["scar20", "g3sg1"]
    ];

function roundEnded() {
    var e = {
            SCkbc: function (e, t) {
                return e + t
            },
            wyZJb: "mp_round_restart_delay"
        },
        t = e;
    run = !0, estimate = t.SCkbc(Globals.Curtime(), Convar.GetInt(t.wyZJb)), firstBuy = 0
}

function purchase(e) {
    var t = {
            xamAJ: function (e, t) {
                return e == t
            },
            AmuTS: function (e) {
                return e()
            },
            yEAqc: function (e, t) {
                return e(t)
            },
            cKHGL: "XjvfZ",
            ggCbt: "Misc",
            BiUna: "JAVASCRIPT",
            FxxvH: "Enable Autobuy",
            nIAfO: function (e, t) {
                return e !== t
            },
            VZexM: "Oqeyc"
        },
        n = t;
    UI.GetValue(n.ggCbt, n.BiUna, n.FxxvH) && (n.nIAfO(n.VZexM, n.VZexM) ? (Ragebot.ForceHitboxSafety(7), Ragebot.ForceHitboxSafety(8), Ragebot.ForceHitboxSafety(3), Ragebot.ForceHitboxSafety(9), Ragebot.ForceHitboxSafety(10), Ragebot.ForceHitboxSafety(11), Ragebot.ForceHitboxSafety(12)) : (alias[e].forEach(function (e) {
        var t = {
                THNsx: function (e, t) {
                    return n.xamAJ(e, t)
                },
                KBcvT: function (e) {
                    return n.AmuTS(e)
                },
                pidQN: function (e, t) {
                    return n.yEAqc(e, t)
                }
            },
            a = t;
        if ("OIOVg" === n.cKHGL) return is_scoped || a.THNsx(plugin.weapon_act1, !0) ? a.THNsx(plugin.override_yaw, !0) ? (update_anti_aim_state(a.KBcvT(get_inverted_angle)), void(plugin.override_yaw = !1)) : void a.pidQN(update_anti_aim_state, a.KBcvT(get_optimal_angle)) : void a.pidQN(update_anti_aim_state, get_optimal_angle());
        Cheat.ExecuteCommand("buy " + e)
    }), run = !1))
}

function onDraw() {
    var e = {
            okCpV: function (e) {
                return e()
            },
            WgBKe: function (e, t) {
                return e(t)
            },
            yaNgq: function (e) {
                return e()
            },
            cEqQY: function (e, t) {
                return e(t)
            },
            kAdiJ: function (e, t, n, a) {
                return e(t, n, a)
            },
            NSHox: "CBasePlayer",
            ORmQQ: "m_vecVelocity[0]",
            YQtGm: function (e, t, n) {
                return e(t, n)
            },
            jQdRz: function (e, t, n, a) {
                return e(t, n, a)
            },
            eCzFf: function (e, t) {
                return e === t
            },
            goTIH: "Misc",
            Oqvjf: "JAVASCRIPT",
            AHOHW: "Enable Autobuy",
            jchDv: "azhnb",
            zQsMd: function (e, t) {
                return e + t
            },
            FmbTd: function (e, t) {
                return e / t
            },
            tWTcE: function (e, t) {
                return e(t)
            }
        },
        t = e;
    if (UI.GetValue(t.goTIH, t.Oqvjf, t.AHOHW)) {
        if (!t.eCzFf(t.jchDv, t.jchDv)) {
            const e = t.okCpV(get_closest_target);
            if (!e || !t.WgBKe(entity_is_valid, e)) return !1;
            if (t.WgBKe(entity_is_dormant, e)) return !1;
            const i = t.yaNgq(entity_get_local_player);
            var n = vector.new(t.cEqQY(entity_get_eye_position, i)),
                a = vector.new(t.kAdiJ(entity_get_prop, i, t.NSHox, t.ORmQQ)),
                r = t.YQtGm(entity_get_hitbox_position, e, 0);
            a = vector.operate(a, vector.new([.25, .25, .25]), "*"), n = vector.operate(n, a, "+");
            const o = t.jQdRz(trace_line, i, vector.to_array(n), r)[0];
            return t.eCzFf(o, e)
        }
        run && t.zQsMd(Globals.Curtime(), t.FmbTd(Local.Latency(), 1e3)) >= estimate && t.tWTcE(purchase, UI.GetValue.apply(this, dropdown_autobuy))
    }
}

function purchased() {
    var e = {
            MIqfx: function (e, t) {
                return e + t
            },
            djfix: function (e, t) {
                return e + t
            },
            wzwOR: "Misc",
            VMsJs: "Enable Autobuy",
            ghCkE: "PnCxH",
            OjPnZ: function (e, t) {
                return e - t
            },
            noECx: "userid",
            kehSm: function (e, t) {
                return e == t
            }
        },
        t = e;
    if (UI.GetValue(t.wzwOR, "JAVASCRIPT", t.VMsJs))
        if ("CyrLy" !== t.ghCkE) {
            if (0 == firstBuy && (firstBuy = t.OjPnZ(Globals.Curtime(), estimate)), !Entity.GetEntityFromUserID(Event.GetInt(t.noECx)) || t.kehSm(firstBuy, -1)) return;
            firstBuy = -1
        } else Render.StringCustom(t.MIqfx(x_1, 40), t.djfix(y_1, 20), 0, "Freestand", [255], Font)
}
var dropdown_autobuy = UI.AddDropdown("Autobuy", ["AWP", "Scout", "Auto"]);

function get_inverted_angle() {
    var e = {
            eMjQn: function (e, t) {
                return e + t
            },
            scMmB: "Wait Onshot",
            hYsEc: function (e) {
                return e()
            },
            kligF: function (e, t) {
                return e - t
            },
            HsvIT: function (e, t) {
                return e <= t
            },
            bWVbC: function (e, t) {
                return e !== t
            },
            UewHM: "RBVjg",
            irKUv: function (e, t) {
                return e === t
            },
            akvyW: function (e, t) {
                return e / t
            },
            WrHnt: function (e, t) {
                return e * t
            },
            fTrGn: function (e, t) {
                return e * t
            },
            gMyJM: function (e, t, n, a) {
                return e(t, n, a)
            },
            GhQzk: function (e, t) {
                return e < t
            },
            qDVbw: "left",
            ZcGTy: "right",
            yCZaA: function (e, t) {
                return e > t
            }
        },
        t = e;
    const n = menu.get(body),
        a = t.hYsEc(entity_get_local_player),
        r = vector.new(entity_get_render_origin(a));
    for (var i = t.hYsEc(local_get_view_angles)[1], o = {
            left: 0,
            right: 0
        }, c = o, u = t.kligF(i, 90); t.HsvIT(u, t.eMjQn(i, 90)); u += 30)
        if (t.bWVbC(t.UewHM, t.UewHM)) Render.StringCustom(t.eMjQn(x_1, 70), y_1, 0, t.scMmB, [255], Font);
        else {
            if (t.irKUv(u, i)) continue;
            const e = t.akvyW(t.WrHnt(u, Math.PI), 180),
                n = vector.operate(r, vector.new([t.fTrGn(256, Math.cos(e)), t.fTrGn(256, Math.sin(e)), 0]), "+"),
                o = t.gMyJM(trace_line, a, vector.to_array(r), vector.to_array(n));
            c[t.GhQzk(u, i) ? t.qDVbw : t.ZcGTy] += o[1]
        } return c.left /= 3, c.right /= 3, t.yCZaA(c.left, c.right) ? 0 === n ? 1 : 0 : t.irKUv(n, 0) ? 0 : 1
}

function weapon_act(e) {
    plugin.override_yaw = !0, plugin.weapon_act1 = !0
}

function weapon_zoom(e) {
    plugin.override_yaw = !0, plugin.weapon_zoom1 = !0
}

function update_anti_aim() {
    var e = {
            aaVMM: "Verdana",
            JwSRX: function (e, t) {
                return e + t
            },
            imomH: function (e, t) {
                return e + t
            },
            NsKgE: "Hide Shots",
            gTVtw: "Anti-Aim",
            QBeGQ: "Rage Anti-Aim",
            NNwHL: "Auto direction",
            cvTxO: "m_bIsScoped",
            FcDcM: function (e) {
                return e()
            },
            lxDDv: function (e, t) {
                return e(t)
            },
            rDdnY: function (e, t) {
                return e(t)
            },
            nxhks: function (e, t) {
                return e == t
            },
            nykCq: function (e, t) {
                return e === t
            },
            FHYoQ: "UCVqe",
            vFDoD: "pKOAm",
            SsgUN: function (e, t) {
                return e == t
            },
            CLzkh: function (e, t) {
                return e(t)
            },
            saeSF: function (e, t) {
                return e === t
            },
            fFgCL: "faWVw"
        },
        t = e,
        n = (UserCMD.GetButtons(), Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", t.cvTxO));
    const a = t.FcDcM(entity_get_local_player);
    if (!t.lxDDv(entity_is_valid, a) || !t.rDdnY(entity_is_alive, a)) return;
    get_closest_target();
    const r = Ragebot.GetTarget(),
        o = Entity.GetName(r);
    if (t.nxhks(o, null)) {
        if (t.nykCq(t.FHYoQ, t.FHYoQ)) return plugin.override_yaw = !1, void t.rDdnY(update_anti_aim_state, get_optimal_angle());
        final_props.push(properties[i])
    }
    if (null != o) {
        if (t.nykCq(t.vFDoD, "pKOAm")) {
            if (n || t.nxhks(plugin.weapon_act1, !0)) {
                if (t.SsgUN(plugin.override_yaw, !0)) return t.CLzkh(update_anti_aim_state, t.FcDcM(get_inverted_angle)), void(plugin.override_yaw = !1);
                if (!t.saeSF("MmgLs", t.fFgCL)) return void update_anti_aim_state(get_optimal_angle()); {
                    const e = Render.AddFont(t.aaVMM, 7, 600);
                    Render.StringCustom(t.JwSRX(x, 1), t.imomH(y, 71), 1, t.NsKgE, [255], e)
                }
            }
            return void update_anti_aim_state(t.FcDcM(get_optimal_angle))
        }
        UI.SetValue(t.gTVtw, t.QBeGQ, t.NNwHL, !0)
    }
    t.CLzkh(update_anti_aim_state, t.FcDcM(get_optimal_angle))
}

function on_tick() {
    var e = {
            jvxWX: "Script items",
            spnCg: "Ideal Yaw Enable",
            DnVAp: function (e) {
                return e()
            }
        },
        t = e;
    UI.GetValue(t.jvxWX, t.spnCg) && t.DnVAp(update_anti_aim)
}

function on_frame() {
    var e = {
            fdPlE: "Script items",
            NdUYp: "Ideal Yaw Enable"
        },
        t = e;
    UI.GetValue(t.fdPlE, t.NdUYp)
}

function on_player_hurt() {
    var e = {
            WfKAp: "Verdana",
            GnGCv: function (e, t) {
                return e + t
            },
            akvKC: function (e) {
                return e()
            },
            myuyY: "attacker",
            DPkYN: function (e, t) {
                return e(t)
            },
            ZpMVF: function (e, t) {
                return e(t)
            },
            VpXjQ: function (e, t) {
                return e !== t
            },
            oTkla: function (e, t) {
                return e === t
            },
            xsYbZ: "XFsAm",
            cdswO: "IvSjJ"
        },
        t = e;
    const n = t.akvKC(entity_get_local_player),
        a = entity_get_entity_from_user_i_d(event_get_int(t.myuyY)),
        r = t.DPkYN(entity_get_entity_from_user_i_d, t.ZpMVF(event_get_int, "userid"));
    if (t.VpXjQ(n, a) && t.oTkla(n, r))
        if (t.xsYbZ === t.cdswO) {
            const e = Render.AddFont(t.WfKAp, 7, 600);
            Render.StringCustom(x + 1, t.GnGCv(y, 35), 1, "DT", [255], e)
        } else plugin.last_hit_lby[a] = menu.get_hotkey(ref_inverter)
}

function reset() {
    plugin.last_hit_lby = []
}

function spon() {
    var e = {
            RagSO: "Verdana",
            aTtOp: function (e, t) {
                return e + t
            },
            cQFAl: "Anti-Aim",
            Erdai: "Rage Anti-Aim",
            Gqshv: "Auto direction",
            hNuWq: "Head",
            dXGam: "Baim",
            fHbQp: "3|2|4|0|1",
            TrSWB: "0|6|5|4|3|2|1",
            UsKHx: "Force Safety on",
            SrsIa: "zZwxI",
            itraF: function (e, t) {
                return e == t
            },
            Qztxm: function (e, t) {
                return e === t
            },
            CJcsp: "JCCgF",
            WNXkR: "Limbs",
            UFsFt: function (e, t) {
                return e !== t
            },
            KBVeU: "ZQQlI"
        },
        t = e,
        n = fetchDropdown(t.UsKHx);
    for (i in n)
        if (t.SrsIa != t.SrsIa) {
            Render.AddFont(t.RagSO, 14, 600);
            const e = Render.AddFont(t.RagSO, 7, 600);
            Render.Polygon([LPx, LPz, LPy], ideal_col), Render.Polygon([RPy, RPz, RPx], [255]), Render.StringCustom(t.aTtOp(x, 1), y + 23, 1, "Ideal Yaw", ideal_col, e)
        } else if (t.itraF(n[i], t.hNuWq) && (Ragebot.ForceHitboxSafety(0), Ragebot.ForceHitboxSafety(1)), t.itraF(n[i], "Baim") && (t.Qztxm("xnuua", t.CJcsp) ? UI.SetValue(t.cQFAl, t.Erdai, t.Gqshv, !1) : (Ragebot.ForceHitboxSafety(2), Ragebot.ForceHitboxSafety(3), Ragebot.ForceHitboxSafety(4), Ragebot.ForceHitboxSafety(5), Ragebot.ForceHitboxSafety(6))), t.itraF(n[i], t.WNXkR))
        if (t.UFsFt(t.KBVeU, t.KBVeU)) {
            if (n[i] == t.hNuWq && (Ragebot.ForceHitboxSafety(0), Ragebot.ForceHitboxSafety(1)), n[i] == t.dXGam)
                for (var a = t.fHbQp.split("|"), r = 0;;) {
                    switch (a[r++]) {
                        case "0":
                            Ragebot.ForceHitboxSafety(5);
                            continue;
                        case "1":
                            Ragebot.ForceHitboxSafety(6);
                            continue;
                        case "2":
                            Ragebot.ForceHitboxSafety(3);
                            continue;
                        case "3":
                            Ragebot.ForceHitboxSafety(2);
                            continue;
                        case "4":
                            Ragebot.ForceHitboxSafety(4);
                            continue
                    }
                    break
                }
            if ("Limbs" == n[i])
                for (var o = t.TrSWB.split("|"), c = 0;;) {
                    switch (o[c++]) {
                        case "0":
                            Ragebot.ForceHitboxSafety(7);
                            continue;
                        case "1":
                            Ragebot.ForceHitboxSafety(12);
                            continue;
                        case "2":
                            Ragebot.ForceHitboxSafety(11);
                            continue;
                        case "3":
                            Ragebot.ForceHitboxSafety(10);
                            continue;
                        case "4":
                            Ragebot.ForceHitboxSafety(9);
                            continue;
                        case "5":
                            Ragebot.ForceHitboxSafety(3);
                            continue;
                        case "6":
                            Ragebot.ForceHitboxSafety(8);
                            continue
                    }
                    break
                }
        } else Ragebot.ForceHitboxSafety(7), Ragebot.ForceHitboxSafety(8), Ragebot.ForceHitboxSafety(3), Ragebot.ForceHitboxSafety(9), Ragebot.ForceHitboxSafety(10), Ragebot.ForceHitboxSafety(11), Ragebot.ForceHitboxSafety(12)
}

function MenuStuff() {
    var e = {
            YpZfI: "Rage",
            Uywvk: "AUTOSNIPER",
            JCWma: "Targeting",
            REiVw: "Minimum damage",
            gotUJ: function (e, t) {
                return e(t)
            },
            pGbyt: "Options",
            pyPJU: function (e, t) {
                return e == t
            },
            zYKeS: "Misc",
            pnHcD: "Script items",
            AzdyM: "Y indicator",
            vrfPb: "Clantag Spammer",
            kqoYo: "Autobuy",
            zXuqx: "Cute Yaw on Key",
            FrCxJ: "X indicator",
            PLayx: "Legit AA Key",
            Wvlsh: "Wait for On-shot key",
            DiRIX: "Override DMG",
            cCDtN: "Rage bot fire logs",
            EWVLb: "Disable Autowall",
            HdMMM: "Override DMG Key",
            FVmiO: "Override Yaw on Key",
            CaWZl: "Enable Autobuy",
            tOLPz: "Indicators",
            GAPyl: "Ideal Yaw Enable",
            SdaJG: "Ideal Yaw color",
            aLUgl: function (e, t) {
                return e == t
            },
            Woate: function (e, t) {
                return e !== t
            },
            IYHkf: "ZtaPS",
            JEhUL: "4|11|18|21|20|12|19|1|0|13|14|10|16|15|2|8|9|5|17|6|3|7",
            agZkU: "Force Safety on",
            SWLsA: "Faster Double-tap",
            pcBtf: "DMG",
            ICZye: "Anti-Aim",
            UQQIr: "Freestand Key",
            RTtnS: "Side Indicators"
        },
        t = e,
        n = t.gotUJ(fetchDropdown, t.pGbyt);
    for (i in n) {
        if (t.pyPJU(n[i], t.zYKeS))
            for (var a = "16|17|10|4|0|1|13|2|6|7|11|14|20|19|8|9|5|3|12|18|21|15".split("|"), r = 0;;) {
                switch (a[r++]) {
                    case "0":
                        UI.SetEnabled(t.pnHcD, t.AzdyM, !0);
                        continue;
                    case "1":
                        UI.SetEnabled(t.pnHcD, t.vrfPb, !0);
                        continue;
                    case "2":
                        UI.SetEnabled(t.pnHcD, t.kqoYo, !0);
                        continue;
                    case "3":
                        UI.SetEnabled("Script items", t.zXuqx, !1);
                        continue;
                    case "4":
                        UI.SetEnabled(t.pnHcD, t.FrCxJ, !0);
                        continue;
                    case "5":
                        UI.SetEnabled(t.pnHcD, t.PLayx, !1);
                        continue;
                    case "6":
                        UI.SetEnabled(t.pnHcD, t.Wvlsh, !1);
                        continue;
                    case "7":
                        UI.SetEnabled(t.pnHcD, t.DiRIX, !1);
                        continue;
                    case "8":
                        UI.SetEnabled("Script items", t.cCDtN, !1);
                        continue;
                    case "9":
                        UI.SetEnabled("Script items", "Freestand Key", !1);
                        continue;
                    case "10":
                        UI.SetEnabled(t.pnHcD, t.EWVLb, !0);
                        continue;
                    case "11":
                        UI.SetEnabled("Script items", t.HdMMM, !1);
                        continue;
                    case "12":
                        UI.SetEnabled(t.pnHcD, t.FVmiO, !1);
                        continue;
                    case "13":
                        UI.SetEnabled(t.pnHcD, t.CaWZl, !0);
                        continue;
                    case "14":
                        UI.SetEnabled(t.pnHcD, "DMG", !1);
                        continue;
                    case "15":
                        menu.visibility(body, !1);
                        continue;
                    case "16":
                        UI.SetEnabled("Script items", t.tOLPz, !0);
                        continue;
                    case "17":
                        UI.SetEnabled(t.pnHcD, "Side Indicators", !0);
                        continue;
                    case "18":
                        UI.SetEnabled(t.pnHcD, t.GAPyl, !1);
                        continue;
                    case "19":
                        UI.SetEnabled("Script items", "Force Safety on", !1);
                        continue;
                    case "20":
                        UI.SetEnabled(t.pnHcD, "Faster Double-tap", !1);
                        continue;
                    case "21":
                        UI.SetEnabled(t.pnHcD, t.SdaJG, !1);
                        continue
                }
                break
            }
        if (t.aLUgl(n[i], "Rage"))
            if (t.Woate(t.IYHkf, "ZtaPS")) UI.SetValue(t.YpZfI, t.Uywvk, t.JCWma, t.REiVw, value);
            else
                for (var o = t.JEhUL.split("|"), c = 0;;) {
                    switch (o[c++]) {
                        case "0":
                            UI.SetEnabled(t.pnHcD, t.kqoYo, !1);
                            continue;
                        case "1":
                            UI.SetEnabled(t.pnHcD, "Enable Autobuy", !1);
                            continue;
                        case "2":
                            UI.SetEnabled(t.pnHcD, "Clantag Spammer", !1);
                            continue;
                        case "3":
                            UI.SetEnabled(t.pnHcD, t.SdaJG, !1);
                            continue;
                        case "4":
                            UI.SetEnabled(t.pnHcD, "Wait for On-shot key", !0);
                            continue;
                        case "5":
                            UI.SetEnabled(t.pnHcD, "Cute Yaw on Key", !1);
                            continue;
                        case "6":
                            UI.SetEnabled(t.pnHcD, t.FVmiO, !1);
                            continue;
                        case "7":
                            menu.visibility(body, !1);
                            continue;
                        case "8":
                            UI.SetEnabled(t.pnHcD, "Freestand Key", !1);
                            continue;
                        case "9":
                            UI.SetEnabled(t.pnHcD, "Legit AA Key", !1);
                            continue;
                        case "10":
                            UI.SetEnabled(t.pnHcD, "Disable Autowall", !1);
                            continue;
                        case "11":
                            UI.SetEnabled(t.pnHcD, t.DiRIX, !0);
                            continue;
                        case "12":
                            UI.SetEnabled(t.pnHcD, t.agZkU, !0);
                            continue;
                        case "13":
                            UI.SetEnabled("Script items", t.tOLPz, !1);
                            continue;
                        case "14":
                            UI.SetEnabled(t.pnHcD, "Side Indicators", !1);
                            continue;
                        case "15":
                            UI.SetEnabled("Script items", t.AzdyM, !1);
                            continue;
                        case "16":
                            UI.SetEnabled(t.pnHcD, "X indicator", !1);
                            continue;
                        case "17":
                            UI.SetEnabled("Script items", t.GAPyl, !1);
                            continue;
                        case "18":
                            UI.SetEnabled("Script items", t.HdMMM, !0);
                            continue;
                        case "19":
                            UI.SetEnabled(t.pnHcD, "Rage bot fire logs", !0);
                            continue;
                        case "20":
                            UI.SetEnabled(t.pnHcD, t.SWLsA, !0);
                            continue;
                        case "21":
                            UI.SetEnabled(t.pnHcD, t.pcBtf, !0);
                            continue
                    }
                    break
                }
        n[i] == t.ICZye && (UI.SetEnabled(t.pnHcD, t.UQQIr, !0), UI.SetEnabled("Script items", "Legit AA Key", !0), UI.SetEnabled("Script items", t.zXuqx, !0), UI.SetEnabled(t.pnHcD, "Override Yaw on Key", !0), UI.SetEnabled(t.pnHcD, t.GAPyl, !0), UI.SetEnabled(t.pnHcD, "Ideal Yaw color", !0), menu.visibility(body, !0), UI.SetEnabled("Script items", "Wait for On-shot key", !1), UI.SetEnabled(t.pnHcD, t.DiRIX, !1), UI.SetEnabled(t.pnHcD, t.HdMMM, !1), UI.SetEnabled("Script items", "DMG", !1), UI.SetEnabled(t.pnHcD, t.SWLsA, !1), UI.SetEnabled(t.pnHcD, t.cCDtN, !1), UI.SetEnabled("Script items", t.agZkU, !1), UI.SetEnabled(t.pnHcD, "Enable Autobuy", !1), UI.SetEnabled(t.pnHcD, t.kqoYo, !1), UI.SetEnabled(t.pnHcD, t.tOLPz, !1), UI.SetEnabled(t.pnHcD, t.RTtnS, !1), UI.SetEnabled("Script items", t.EWVLb, !1), UI.SetEnabled(t.pnHcD, "X indicator", !1), UI.SetEnabled(t.pnHcD, t.AzdyM, !1), UI.SetEnabled("Script items", t.vrfPb, !1))
    }
}
UI.AddSliderInt("                  ", 0, 0), Cheat.RegisterCallback("CreateMove", "on_tick"), Cheat.RegisterCallback("Draw", "on_frame"), Cheat.RegisterCallback("player_connect_full", "reset"), Cheat.RegisterCallback("player_hurt", "on_player_hurt"), Cheat.RegisterCallback("round_end", "roundEnded"), Cheat.RegisterCallback("Draw", "onDraw"), Cheat.RegisterCallback("item_purchase", "purchased"), Cheat.RegisterCallback("CreateMove", "FreestandonKeyCM"), Cheat.RegisterCallback("CreateMove", "MagikKeyCm"), Cheat.RegisterCallback("weapon_fire", "on_weapon_fire"), Cheat.RegisterCallback("weapon_fire", "weapon_act"), Cheat.RegisterCallback("weapon_fire", "weapon_zoom"), Cheat.RegisterCallback("player_connect_full", "on_player_connect"), Cheat.RegisterCallback("CreateMove", "on_create_move"), Cheat.RegisterCallback("Draw", "MindamageOverrIde"), Cheat.RegisterCallback("Draw", "on_draw"), Cheat.RegisterCallback("Draw", "MenuStuff"), Cheat.RegisterCallback("ragebot_fire", "ragebotLogs"), Cheat.RegisterCallback("CreateMove", "spon"), Cheat.RegisterCallback("CreateMove", "Awall_Check"), Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE"), Cheat.RegisterCallback("Unload", "_TBC_UNLOAD"), Cheat.RegisterCallback("Draw", "_TAG"), Cheat.RegisterCallback("CreateMove", "AACm"), Cheat.RegisterCallback("Draw", "_DRAW"), Cheat.RegisterCallback("Draw", "SideIndicators");