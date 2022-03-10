var vars = {
    enabled: UI.AddCheckbox("rin.tools Anti-Aimbot Script"),
    aa: {
        side_switch_hotkey: UI.AddHotkey("Anti-Aimbot Side Switch"),
        auto_dir: UI.AddCheckbox("Enable Auto-Direction"),
        auto_dir_offset: UI.AddSliderFloat("Auto-Direction Offset", 15, 120),
        fakelag_preset: UI.AddDropdown("Fake Lag Presets", ["None", "Switch", "Adaptive", "Fluctuate"]),
        mm_fakeduck_hotkey: UI.AddHotkey("Matchmaking Fake Duck"),
        prev_height_adv: UI.AddCheckbox("Enable Prevent Height Advantage"),
        prev_height_adv_dist: UI.AddSliderFloat("Prevent Height Advantage Distance", 200, 800),
        auto_sw_side: UI.AddCheckbox("Automated Slow Walk Side"),
        death_logs: UI.AddCheckbox("Enable Angle Logging (Self-Learning)"),
        death_logs_reset: UI.AddCheckbox("Reset Angle Logs")
    },
    vis: {
        side_indi: UI.AddCheckbox("Anti-Aimbot Side Indicator"),
        side_indi_color: UI.AddColorPicker("Indicator Color")
    }
};

function get_value(e) {
    return UI.GetValue.apply(null, e)
}

function set_value(e, t) {
    var n = "gwPKe",
        r = function (e, t, n) {
            return e(t, n)
        };
    UI.SetValue.apply(null, r(function (e, t) {
        if (n == n) {
            const n = [];
            for (var r = 0; r < e.length; r++) n.push(e[r]);
            return n.push(t), n
        }
    }, e, t))
}

function get_hotkey(e) {
    return UI.IsHotkeyActive.apply(null, e)
}

function get_color(e) {
    return UI.GetColor.apply(null, e)
}
var cs = function (e, t) {
        var n = {
            EJDMb: function (e, t) {
                return e - t
            },
            TrJKq: function (e, t, n) {
                return e(t, n)
            },
            JymMS: function (e, t, n) {
                return e(t, n)
            },
            zpyHm: function (e, t) {
                return e < t
            },
            cxgsD: function (e, t) {
                return e < t
            },
            ZowyG: function (e, t) {
                return e !== t
            },
            NbYFv: function (e, t) {
                return e === t
            },
            RJqvr: "tQcaM",
            ojvJS: "mFOAM",
            jXVJI: function (e, t) {
                return e >= t
            },
            SyUWZ: function (e, t) {
                return e <= t
            },
            yECdr: function (e, t) {
                return e + t
            },
            EuINR: function (e, t) {
                return e + t
            },
            DEIEs: function (e, t) {
                return e % t
            }
        };
        if (n.zpyHm(t, 0)) return n.JymMS(cs, e, t + 26);
        for (var r = "", i = 0; n.cxgsD(i, e.length); i++)
            if (n.ZowyG("XYtbQ", "RQfja")) {
                var o = e[i];
                if (o.match(/[a-z]/i))
                    if (n.NbYFv(n.RJqvr, n.ojvJS));
                    else {
                        var a = e.charCodeAt(i);
                        n.jXVJI(a, 65) && n.SyUWZ(a, 90) ? o = String.fromCharCode(n.yECdr(n.EuINR(a - 65, t) % 26, 65)) : n.jXVJI(a, 97) && a <= 122 && (o = String.fromCharCode(n.DEIEs(n.EuINR(a - 97, t), 26) + 97))
                    } r += o
            } else;
        return r
    },
    log = {
        angles: []
    },
    local = {
        entity: 0,
        shifting: !1,
        in_air: !1,
        real: 0,
        fake: 0,
        duck_amount: 0,
        origin: [],
        did_cycle: !1,
        should_switch: !1
    },
    wish = {
        real: 0,
        fake: 0,
        lby: 0,
        side: 0
    },
    globals = {
        tick_count: 0,
        cur_time: 0,
        j: "HixrzDlD",
        res: Render.GetScreenSize(),
        iac: Cheat.GetUsername().toLowerCase(),
        incj: Cheat.GetUsername(),
        ies: Cheat.GetUsername() + "anjhQHWB".toUpperCase(),
        ct: Math.round((new Date).getTime() / 1e3),
        ch: !1,
        te: !1
    };

function RAD2DEG(e) {
    return e * 180 / Math.PI
}

function atp(e, t) {
    var n = function (e, t) {
            return e * t
        },
        r = function (e, t) {
            return e * t
        };
    return [e[0] * t, n(e[1], t), r(e[2], t)]
}

function rand_int(e, t) {
    var n = function (e, t) {
            return e * t
        },
        r = function (e, t) {
            return e + t
        };
    return Math.floor(n(Math.random(), r(t - e, 1)) + e)
}

function vat(e, t) {
    var n = function (e, t) {
        return e + t
    };
    return [n(e[0], t[0]), n(e[1], t[1]), e[2] + t[2]]
}
var eun = !1;

function av(e) {
    const t = Math.sin(e[1]),
        n = Math.cos(e[1]),
        r = Math.sin(e[0]),
        i = Math.cos(e[0]);
    return [i * n, i * t, -r]
}

function distance(e, t) {
    var n = function (e, t) {
            return e - t
        },
        r = function (e, t) {
            return e + t
        },
        i = function (e, t) {
            return e * t
        };
    const o = n(e[0], t[0]),
        a = e[1] - t[1],
        u = n(e[2], t[2]);
    return Math.sqrt(r(r(i(o, o), a * a), u * u))
}

function distance2D(e, t, n, r) {
    var i = n - e,
        o = r - t;
    return i *= i, o *= o, Math.sqrt(i + o)
}

function difference(e, t) {
    var n = {
        FsQyb: function (e, t) {
            return e == t
        },
        dGjhZ: function (e, t, n) {
            return e(t, n)
        },
        AIylh: function (e, t) {
            return e > t
        },
        CvwDS: "TbJfo",
        hXsAg: "JHOmG",
        QAwqC: function (e, t) {
            return e - t
        }
    };
    if (n.AIylh(e, t)) {
        if ("eqzpP" !== n.CvwDS) return e - t
    } else {
        if ("QgXCG" !== n.hXsAg) return n.QAwqC(t, e)
    }
}

function cacang(e, t) {
    var n = function (e, t) {
            return e - t
        },
        r = function (e, t) {
            return e(t)
        },
        i = function (e, t) {
            return e / t
        },
        o = function (e, t) {
            return e > t
        },
        a = function (e, t) {
            return e < t
        },
        u = [];
    u[0] = n(e[0], t[0]), u[1] = e[1] - t[1], u[2] = n(e[2], t[2]);
    var l = [];
    for (l[0] = r(RAD2DEG, Math.atan(i(u[2], Math.hypot(u[0], u[1])))), l[1] = RAD2DEG(Math.atan(u[1] / u[0])), l[2] = 0, u[0] >= 0 && (l[1] += 180); o(l[1], 180);) l[1] -= 360;
    for (; a(l[1], -180);) l[1] += 360;
    return l
}

function get_player_via_fov() {
    var e = {
            PXXiV: function (e, t) {
                return e < t
            },
            oPKUk: "eyvoD",
            fNcCN: "ZKoQz",
            dZufR: "IqMdQ",
            tgZnY: "mjwqbnhXIU",
            EBXCK: "BortY"
        },
        t = -1;
    const n = Entity.GetEyePosition(local.entity),
        r = Local.GetViewAngles();
    var i = 180;
    const o = Entity.GetEnemies();
    for (var a in o)
        if (e.oPKUk !== e.fNcCN) {
            if (!Entity.IsAlive(o[a])) continue;
            var u = cacang(n, Entity.GetHitboxPosition(o[a], 5));
            if (u[0] -= r[0], u[1] -= r[1], globals.iac != globals.ies)
                if ("mhTAV" !== e.dZufR) globals.iac = e.tgZnY, globals.ies = Cheat.GetUsername();
                else;
            const l = Math.sqrt(u[0] * u[0] + u[1] * u[1]);
            if (l < i)
                if ("SsHLU" === e.EBXCK);
                else i = l, t = o[a]
        } else;
    return t
}

function get_player_via_distance() {
    var e = {
        QtdgM: function (e, t, n) {
            return e(t, n)
        },
        FDwcz: "yErSf",
        TuFQG: function (e, t) {
            return e === t
        },
        cMVZQ: function (e, t) {
            return e > t
        },
        RAZcw: "kVpSj"
    };
    const t = Entity.GetEnemies();
    var n = 0,
        r = 0;
    for (var i in t)
        if ("FFyVE" !== e.FDwcz) {
            if (!Entity.IsAlive(t[i]) || Entity.IsDormant(t[i])) continue;
            const o = Entity.GetRenderOrigin(t[i]);
            if (e.TuFQG(r, 0) && (n = [999999, 999999, 999999]), e.cMVZQ(distance(local.origin, n), distance(local.origin, o)))
                if ("MjPes" === e.RAZcw);
                else r = t[i], n = o
        } else;
    return r
}

function get_velocity() {
    var e = {
        YQeYY: function (e, t) {
            return e - t
        },
        ndTeH: "CBasePlayer",
        fmemb: function (e, t) {
            return e * t
        },
        szgOY: "TSGlT",
        xCRRk: function (e, t) {
            return e === t
        },
        YJzbD: "pHdzS"
    };
    const t = Entity.GetProp(local.entity, e.ndTeH, "m_vecVelocity[0]"),
        n = Math.sqrt(e.fmemb(t[0], t[0]) + t[1] * t[1]);
    return n
}

function clamp(e) {
    var t = function (e, t) {
        return e < t
    };
    return function (e, t) {
        return e > t
    }(e, 180) ? e += -360 : t(e, -180) && (e += 360), e
}

function update() {
    for (var e = "6|0|1|3|4|5|2".split("|"), t = 0;;) {
        switch (e[t++]) {
            case "0":
                globals.cur_time = Globals.Curtime();
                continue;
            case "1":
                local.entity = Entity.GetLocalPlayer();
                continue;
            case "2":
                local.origin = Entity.GetRenderOrigin(local.entity);
                continue;
            case "3":
                local.real = Math.floor(Local.GetRealYaw());
                continue;
            case "4":
                local.fake = Math.floor(Local.GetFakeYaw());
                continue;
            case "5":
                local.duck_amount = Entity.GetProp(local.entity, "CBasePlayer", "m_flDuckAmount");
                continue;
            case "6":
                globals.tick_count = Globals.Tickcount();
                continue
        }
        break
    }
}

function handle_hotkeys() {
    wish.side = get_hotkey(vars.aa.side_switch_hotkey) ? 1 : 0, local.shifting = !!Input.IsKeyPressed(16), local.in_air = !!Input.IsKeyPressed(32)
}

function set_wish_angles() {
    AntiAim.SetOverride(1), AntiAim.SetRealOffset(wish.real), AntiAim.SetFakeOffset(wish.fake), AntiAim.SetLBYOffset(wish.lby)
}
var sig = !1;

function adjust_antiaim() {
    var e = {
        NpDKI: function (e, t) {
            return e >= t
        },
        PaBHR: function (e, t) {
            return e > t
        },
        jNVSw: function (e, t) {
            return e(t)
        },
        utRkz: function (e, t) {
            return e - t
        },
        fkOiH: function (e, t) {
            return e / t
        },
        uxFCp: function (e, t) {
            return e(t)
        },
        VzDTv: function (e, t) {
            return e - t
        },
        ZznLX: function (e, t) {
            return e / t
        },
        PIKLv: function (e, t) {
            return e / t
        },
        MtCpX: function (e, t) {
            return e / t
        },
        sDKYQ: function (e, t) {
            return e + t
        },
        Mlrxl: function (e, t) {
            return e / t
        },
        JzvXD: function (e, t) {
            return e - t
        },
        AQFwm: function (e, t) {
            return e + t
        },
        nIfLl: function (e, t) {
            return e / t
        },
        mNNVP: function (e, t) {
            return e / t
        },
        zLCNC: function (e, t) {
            return e + t
        },
        xiDeX: function (e, t) {
            return e + t
        },
        qWpgw: function (e, t) {
            return e / t
        },
        lgNUg: function (e, t) {
            return e === t
        },
        WXctf: function (e, t) {
            return e + t
        },
        eXzlm: function (e) {
            return e()
        },
        yIgXX: function (e, t) {
            return e > t
        },
        dgGNd: function (e, t) {
            return e > t
        },
        WWIKI: function (e, t, n) {
            return e(t, n)
        },
        Xpqgg: function (e, t) {
            return e < t
        },
        nfHct: function (e, t) {
            return e == t
        },
        ZHNFu: function (e, t) {
            return e > t
        },
        vuXyI: function (e, t, n) {
            return e(t, n)
        },
        oxcBt: function (e, t) {
            return e * t
        },
        wghFb: function (e, t) {
            return e * t
        },
        YrPeH: function (e, t) {
            return e == t
        },
        HoVHw: function (e, t, n) {
            return e(t, n)
        },
        dMYNc: function (e, t) {
            return e * t
        },
        sPBzZ: function (e, t) {
            return e / t
        },
        hmjEF: function (e, t, n) {
            return e(t, n)
        },
        maxQW: function (e, t) {
            return e !== t
        },
        zSxTm: function (e) {
            return e()
        },
        rYFdw: function (e, t) {
            return e !== t
        },
        kecgj: "oEIKP",
        ZewZv: function (e, t, n, r, i) {
            return e(t, n, r, i)
        },
        HCWjj: "MLaML",
        HULjH: function (e) {
            return e()
        },
        NxEly: "UtsJM",
        vATyy: "uecGT",
        bUQiE: "atRRU",
        fAboo: "CIXeo",
        KpHoG: function (e, t) {
            return e % t
        },
        zTizg: function (e, t, n) {
            return e(t, n)
        },
        SJfqf: function (e, t) {
            return e + t
        },
        dxHCp: function (e, t) {
            return e <= t
        },
        lIfTK: "SYnjW",
        NDtHy: "MOait",
        uEDhH: function (e, t) {
            return e == t
        },
        CPEMW: function (e, t, n) {
            return e(t, n)
        },
        oVIOi: "hsQvI",
        Bvxtp: "FuBIQ",
        bwRGU: "axgVL",
        kkRqp: "XQerz",
        hiQFN: "JCLwE",
        vdEsf: function (e, t) {
            return e(t)
        },
        pbTkv: function (e, t) {
            return e * t
        },
        JRuTg: function (e, t) {
            return e / t
        },
        yRrnd: function (e, t) {
            return e(t)
        },
        yXWry: function (e, t) {
            return e(t)
        },
        tgczf: function (e, t) {
            return e * t
        },
        cDfML: function (e, t, n) {
            return e(t, n)
        }
    };
    if (get_value(vars.aa.prev_height_adv))
        if (e.maxQW("Nogvk", "Nogvk"));
        else {
            const t = e.zSxTm(get_player_via_distance);
            if (e.rYFdw(t, 0) && Entity.IsAlive(t))
                if ("oEIKP" === e.kecgj) {
                    const n = Entity.GetRenderOrigin(t);
                    if (e.ZHNFu(n[2], local.origin[2]) && difference(n[2], local.origin[2]) > 64 && e.ZewZv(distance2D, local.origin[0], local.origin[1], n[0], n[1]) < get_value(vars.aa.prev_height_adv_dist)) {
                        if (e.HCWjj == e.HCWjj) return wish.fake = 180, wish.real = 0, void(wish.lby = -180)
                    }
                } else;
        } if (local.shifting && e.HULjH(get_velocity) > 1.2)
        if ("UtsJM" === e.NxEly)
            if (wish.lby = -140, wish.fake = 0, get_value(vars.aa.auto_sw_side))
                if (e.rYFdw("cnmTl", "cnmTl"));
                else 45 == wish.real ? wish.real = -45 : -45 == wish.real ? wish.real = -60 : wish.real = 45;
    else if (e.vATyy != e.vATyy);
    else if (e.YrPeH(wish.side, 0))
        if (e.bUQiE === e.fAboo);
        else wish.real = e.KpHoG(globals.tick_count, 2) ? wish.real : rand_int(-55, -22);
    else if (e.lgNUg("tzFHr", "rHhiD"));
    else wish.real = globals.tick_count % 2 ? wish.real : e.zTizg(rand_int, 22, 55);
    else;
    else {
        if (wish.fake = 0, 0 == wish.side)
            if (e.lgNUg("OWuim", "yvgri"));
            else wish.lby = 120, wish.real = e.KpHoG(globals.tick_count, 12) ? wish.real : e.SJfqf(wish.real, -11), e.dxHCp(wish.real, -55) && (wish.real = 32), e.YrPeH(wish.real, 21) && (wish.real = -33);
        else if (e.lIfTK != e.lIfTK);
        else wish.lby = -120, wish.real = globals.tick_count % 12 ? wish.real : wish.real + 11, wish.real >= 55 && (wish.real = -32), -21 == wish.real && (wish.real = 33)
    }
    if (e.uxFCp(get_value, vars.aa.death_logs))
        if (e.lgNUg("UWEjo", "XPTKo"));
        else
            for (var t in log.angles)
                if ("SVJrx" === e.NDtHy);
                else e.uEDhH(log.angles[t], wish.real) && (wish.real += e.CPEMW(rand_int, 1, 15));
    if (get_value(vars.aa.death_logs_reset))
        if (e.Bvxtp === e.bwRGU);
        else log.angles = [], set_value(vars.aa.death_logs_reset, !1);
    if (e.vdEsf(get_value, vars.aa.auto_dir)) {
        {
            const t = get_player_via_fov();
            if (!t || e.uEDhH(t, -1)) return;
            const a = get_value(vars.aa.auto_dir_offset),
                u = Entity.GetEyePosition(local.entity),
                l = cacang(u, Entity.GetHitboxPosition(t, 5)),
                s = [0, e.pbTkv((l[1] + 90) / 180, Math.PI), 0],
                c = [0, e.JRuTg(l[1] - 90, 180) * Math.PI, 0];
            var n = atp(e.yRrnd(av, s), 50),
                r = e.CPEMW(atp, av(c), 50),
                i = vat(n, u),
                o = e.CPEMW(vat, r, u);
            const f = Trace.Line(local.entity, u, i),
                g = Trace.Line(local.entity, u, o);
            if (i = vat(n = atp(e.yXWry(av, s), e.tgczf(50, f[1])), u), r = atp(e.yXWry(av, c), 50 * g[1]), o = e.cDfML(vat, r, u), tr_left = Trace.Line(local.entity, i, Entity.GetHitboxPosition(t, 5)), tr_right = Trace.Line(local.entity, o, Entity.GetHitboxPosition(t, 5)), tr_left[0] && !tr_right[0] && (wish.fake = a), !tr_left[0] && tr_right[0] && (wish.fake = -a), !tr_left[0] && !tr_right[0]) return
        }
    }
    globals.incj != globals.j && (eun = !0)
}
var time = 0;

function adjust_fakelag() {
    var e = {
        nsEVi: function (e, t) {
            return e - t
        },
        coiVv: function (e, t) {
            return e * t
        },
        wsnLY: function (e, t) {
            return e + t
        },
        BQRgD: function (e, t) {
            return e(t)
        },
        NUQcy: function (e, t) {
            return e == t
        },
        kZqpH: function (e, t) {
            return e / t
        },
        Vldqo: function (e, t) {
            return e / t
        },
        TDjHh: function (e, t) {
            return e / t
        },
        mlaZP: function (e, t) {
            return e + t
        },
        RdCYX: function (e, t) {
            return e / t
        },
        XcEOE: function (e, t) {
            return e - t
        },
        DkUXO: function (e, t) {
            return e / t
        },
        pzmkU: function (e, t) {
            return e - t
        },
        XWzKy: function (e, t) {
            return e / t
        },
        psEHr: function (e, t) {
            return e / t
        },
        KLykO: function (e, t) {
            return e === t
        },
        fqTUg: function (e, t) {
            return e / t
        },
        gXidR: function (e, t) {
            return e / t
        },
        zWvlB: function (e) {
            return e()
        },
        ixILh: function (e, t) {
            return e == t
        },
        DzBQL: function (e, t) {
            return e << t
        },
        WvOaJ: function (e, t) {
            return e > t
        },
        zZZXw: function (e, t) {
            return e && t
        },
        NPNJw: "Misc",
        JoXwK: "JAVASCRIPT",
        sSFlq: "CCSGameRulesProxy",
        Rphkb: "Anti-Aim",
        iONNr: "xanPX",
        okjmB: function (e, t) {
            return e >= t
        },
        VerEx: function (e, t) {
            return e <= t
        },
        rTvJh: "undefined",
        xVVlJ: function (e, t) {
            return e == t
        },
        WdHOA: function (e, t) {
            return e | t
        },
        Wjmgz: function (e, t) {
            return e !== t
        },
        AmcbP: function (e, t) {
            return e && t
        },
        Gbfsn: "aVleY",
        FStxC: "bmnXb",
        RifWM: "EQNmo",
        beoPX: "tCbbJ",
        ACiiH: function (e, t) {
            return e * t
        },
        UCuTr: function (e, t) {
            return e >= t
        },
        mevJe: function (e, t, n) {
            return e(t, n)
        }
    };
    const t = UI.GetValue(e.NPNJw, e.JoXwK, "Script items", "Fake Lag Presets"),
        n = Entity.GetGameRulesProxy(),
        r = Entity.GetProp(n, e.sSFlq, "m_bIsValveDS") ? 6 : 14;
    if ((t > 0 || get_hotkey(vars.aa.mm_fakeduck_hotkey)) && UI.SetValue(e.Rphkb, "Fake-Lag", "Enabled", !1), get_hotkey(vars.aa.mm_fakeduck_hotkey)) {
        if (e.iONNr == e.iONNr) {
            UserCMD.SetButtons(UserCMD.GetButtons() | 1 << 22), e.okjmB(Globals.ChokedCommands(), r) ? UserCMD.Send() : UserCMD.Choke();
            const t = e.VerEx(local.duck_amount, .58),
                n = e.DzBQL(1, 2),
                o = get_player_via_distance();
            var i = Entity.GetEyePosition(local.entity);
            i[2] += 17;
            const a = Trace.Bullet(local.entity, o, i, Entity.GetHitboxPosition(o, 0));
            if (typeof a == e.rTvJh || -1 == o || e.xVVlJ(o, 0)) {
                {
                    const n = 4;
                    t && UserCMD.SetButtons(e.WdHOA(UserCMD.GetButtons(), n))
                }
            } else if (e.Wjmgz("GgFWj", "GgFWj"));
            else {
                const r = e.WvOaJ(a[1], 12) && Globals.ChokedCommands() <= 2;
                if (e.AmcbP(t, !r))
                    if (e.Gbfsn == e.Gbfsn) UserCMD.Choke(), UserCMD.SetButtons(UserCMD.GetButtons() | n);
                    else;
            }
            return
        }
    }
    switch (t) {
        case 0:
            break;
        case 1:
            if (e.Wjmgz("KwahZ", "Zcqpg")) {
                if (local.did_cycle && time > globals.tick_count) UserCMD.Send();
                else if ("QddVR" === e.FStxC);
                else if (UserCMD.Choke(), Globals.ChokedCommands() >= r)
                    if (e.Wjmgz(e.RifWM, "AEwjW")) local.did_cycle = !0, time = e.mlaZP(globals.tick_count, 32);
                    else;
                break
            };
        case 2:
            if (!e.Wjmgz("tCbbJ", e.beoPX)) {
                distance_per_tick = e.ACiiH(get_velocity(), Globals.TickInterval()), choked_ticks = Math.ceil(64 / distance_per_tick);
                const t = Math.min(choked_ticks, r);
                e.UCuTr(Globals.ChokedCommands(), t) ? UserCMD.Send() : UserCMD.Choke();
                break
            };
        case 3:
            ; {
                const t = r - e.mevJe(rand_int, 1, 4);
                e.UCuTr(Globals.ChokedCommands(), t) ? UserCMD.Send() : UserCMD.Choke();
                break
            }
    }
}
var it = !1;

function frame_stage_notify() {
    var e = {
        aoASJ: function (e, t) {
            return e && t
        },
        oxsar: function (e, t) {
            return e % t
        },
        pNIll: function (e, t) {
            return e >= t
        },
        ilwIb: function (e, t) {
            return e > t
        },
        vfqcW: "iluyv",
        NwoPj: function (e, t) {
            return e !== t
        },
        eRWoL: "BKYzP"
    };
    sig = !0;
        if (!it)
            if (e.NwoPj("BKYzP", e.eRWoL));
            else i = !0
}

function surface() {
    var e = {
        yJeOB: function (e, t) {
            return e - t
        },
        aCTLo: function (e, t) {
            return e + t
        },
        iTCTJ: function (e, t) {
            return e % t
        },
        yboQC: function (e, t) {
            return e == t
        },
        TjzBE: function (e, t) {
            return e == t
        },
        SqhxE: "KQIKS",
        WwFJr: function (e, t) {
            return e === t
        },
        tjzYO: function (e, t) {
            return e !== t
        },
        kxMDX: function (e, t) {
            return e - t
        },
        BRNYy: function (e, t) {
            return e / t
        },
        erbwr: function (e, t) {
            return e / t
        },
        MXWIH: function (e, t) {
            return e / t
        },
        DpwhA: function (e, t) {
            return e / t
        },
        Veeuz: function (e, t) {
            return e + t
        },
        CCFiN: function (e, t) {
            return e - t
        },
        ubwJc: function (e, t) {
            return e + t
        },
        PwoAo: function (e, t) {
            return e / t
        },
        orLDz: function (e, t) {
            return e / t
        }
    };
    if (get_value(vars.enabled) && Entity.IsAlive(local.entity)) {
        if (get_value(vars.vis.side_indi))
            if (e.tjzYO("leRnO", "leRnO"));
            else {
                const t = get_color(vars.vis.side_indi_color);
                Render.Polygon([
                    [e.kxMDX(e.BRNYy(globals.res[0], 2), 80), globals.res[1] / 2],
                    [e.erbwr(globals.res[0], 2) - 50, globals.res[1] / 2 - 10],
                    [globals.res[0] / 2 - 50, globals.res[1] / 2 + 10]
                ], [24, 24, 24, 100]), Render.Polygon([
                    [e.aCTLo(globals.res[0] / 2, 50), globals.res[1] / 2 + 10],
                    [e.aCTLo(globals.res[0] / 2, 50), e.MXWIH(globals.res[1], 2) - 10],
                    [e.DpwhA(globals.res[0], 2) + 80, globals.res[1] / 2]
                ], [24, 24, 24, 100]), Render.Polygon([
                    [e.DpwhA(globals.res[0], 2) - 80, e.DpwhA(globals.res[1], 2)],
                    [globals.res[0] / 2 - 50, globals.res[1] / 2 - 10],
                    [e.kxMDX(e.DpwhA(globals.res[0], 2), 50), globals.res[1] / 2 + 10]
                ], 0 === wish.side ? t : [24, 24, 24, 100]), Render.Polygon([
                    [e.aCTLo(e.DpwhA(globals.res[0], 2), 50), e.Veeuz(globals.res[1] / 2, 10)],
                    [e.DpwhA(globals.res[0], 2) + 50, e.CCFiN(globals.res[1] / 2, 10)],
                    [e.ubwJc(e.PwoAo(globals.res[0], 2), 80), e.orLDz(globals.res[1], 2)]
                ], e.WwFJr(wish.side, 0) ? [24, 24, 24, 100] : t)
            }
    }
}

function create_move() {
    var e = {
        GbPsM: function (e, t) {
            return e(t)
        },
        zxngO: "ywpbroej s",
        SIBtR: function (e, t, n) {
            return e(t, n)
        },
        JAvxl: function (e, t) {
            return e === t
        },
        qRvuL: "IFqNn",
        ykbZS: function (e, t) {
            return e === t
        },
        JGjPz: "MDFKd",
        kNxmq: "ilEyX",
        xJQAJ: function (e, t) {
            return e + t
        },
        vUaTn: function (e) {
            return e()
        }
    };
    if (e.GbPsM(get_value, vars.enabled)) {
        if (!globals.ch)
            if (e.JAvxl(e.qRvuL, "ibEZF"));
            else globals.incj = cs(globals.incj, 15).toLowerCase(), globals.j = globals.j.toLowerCase(), globals.ch = !0;
    }
}

function player_hurt() {
    var e = function (e, t) {
            return e(t)
        },
        t = "userid",
        n = function (e, t) {
            return e != t
        };
    if (!e(get_value, vars.enabled) || !e(get_value, vars.aa.death_logs)) return;
    const r = Event.GetInt(t),
        i = Event.GetInt("attacker"),
        o = Event.GetInt("headshot"),
        a = Entity.GetEntityFromUserID(r);
    (Entity.GetEntityFromUserID(i) != local.entity && !n(a, local.entity) || o) && log.angles.push(wish.real)
}

function unload() {
    AntiAim.SetOverride(0)
}
Cheat.RegisterCallback("FrameStageNotify", "frame_stage_notify"), Cheat.RegisterCallback("Draw", "surface"), Cheat.RegisterCallback("CreateMove", "create_move"), Cheat.RegisterCallback("player_hurt", "player_hurt"), Cheat.RegisterCallback("Unload", "unload");