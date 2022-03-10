UI.AddSliderInt("RGB Speed", 10, 60);

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

function rainbowColors() {

    var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();
    var hours = hours1 <= 9 ? "0" + hours1 + ":" : hours1 + ":";
    var minutes = minutes1 <= 9 ? "0" + minutes1 + ":" : minutes1 + ":";
    var seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;
    var fps = Math.floor(1 / Global.Frametime());
    var text = " one      | Aueno A60 | " + hours + minutes + seconds + " | fps:" + fps;
    var font = Render.AddFont("Arial", 7, 400);

    var w = 190;
    var x = Global.GetScreenSize()[0];
    x = x - w - 10;


    Render.FilledRect(x + 0, 10, w - 0, 28, [18, 18, 18, 255]); //框1
    Render.FilledRect(x + 1, 11, w - 2, 26, [62, 62, 62, 255]); //框2
    Render.FilledRect(x + 2, 12, w - 4, 24, [44, 44, 44, 255]); //框3
    Render.FilledRect(x + 4, 14, w - 8, 20, [62, 62, 62, 255]); //框4
    Render.FilledRect(x + 5, 15, w - 10, 18, [20, 20, 20, 255]); //框4
    Render.StringCustom(x + 5, 20, 0, text, [231, 231, 231, 255], font);
    Render.StringCustom(x + 25, 20, 0, "tap", [217, 157, 86, 255], font);


    rs = UI.GetValue("RGB Speed") * 10;
    //RGB线条
    tickcount = Globals.Tickcount();
    r0 = HSVtoRGB(tickcount % rs / rs + 0.00, 1, 1, 1, 255);
    r1 = HSVtoRGB(tickcount % rs / rs + 0.01, 1, 1, 1, 255);
    r2 = HSVtoRGB(tickcount % rs / rs + 0.02, 1, 1, 1, 255);
    r3 = HSVtoRGB(tickcount % rs / rs + 0.03, 1, 1, 1, 255);
    r4 = HSVtoRGB(tickcount % rs / rs + 0.04, 1, 1, 1, 255);
    r5 = HSVtoRGB(tickcount % rs / rs + 0.05, 1, 1, 1, 255);
    r6 = HSVtoRGB(tickcount % rs / rs + 0.06, 1, 1, 1, 255);
    r7 = HSVtoRGB(tickcount % rs / rs + 0.07, 1, 1, 1, 255);
    r8 = HSVtoRGB(tickcount % rs / rs + 0.08, 1, 1, 1, 255);
    r9 = HSVtoRGB(tickcount % rs / rs + 0.09, 1, 1, 1, 255);

    r10 = HSVtoRGB(tickcount % rs / rs + 0.10, 1, 1, 1, 255);
    r11 = HSVtoRGB(tickcount % rs / rs + 0.11, 1, 1, 1, 255);
    r12 = HSVtoRGB(tickcount % rs / rs + 0.12, 1, 1, 1, 255);
    r13 = HSVtoRGB(tickcount % rs / rs + 0.13, 1, 1, 1, 255);
    r14 = HSVtoRGB(tickcount % rs / rs + 0.14, 1, 1, 1, 255);
    r15 = HSVtoRGB(tickcount % rs / rs + 0.15, 1, 1, 1, 255);
    r16 = HSVtoRGB(tickcount % rs / rs + 0.16, 1, 1, 1, 255);
    r17 = HSVtoRGB(tickcount % rs / rs + 0.17, 1, 1, 1, 255);
    r18 = HSVtoRGB(tickcount % rs / rs + 0.18, 1, 1, 1, 255);
    r19 = HSVtoRGB(tickcount % rs / rs + 0.19, 1, 1, 1, 255);

    r20 = HSVtoRGB(tickcount % rs / rs + 0.20, 1, 1, 1, 255);
    r21 = HSVtoRGB(tickcount % rs / rs + 0.21, 1, 1, 1, 255);
    r22 = HSVtoRGB(tickcount % rs / rs + 0.22, 1, 1, 1, 255);
    r23 = HSVtoRGB(tickcount % rs / rs + 0.23, 1, 1, 1, 255);
    r24 = HSVtoRGB(tickcount % rs / rs + 0.24, 1, 1, 1, 255);
    r25 = HSVtoRGB(tickcount % rs / rs + 0.25, 1, 1, 1, 255);
    r26 = HSVtoRGB(tickcount % rs / rs + 0.26, 1, 1, 1, 255);
    r27 = HSVtoRGB(tickcount % rs / rs + 0.27, 1, 1, 1, 255);
    r28 = HSVtoRGB(tickcount % rs / rs + 0.28, 1, 1, 1, 255);
    r29 = HSVtoRGB(tickcount % rs / rs + 0.29, 1, 1, 1, 255);

    r30 = HSVtoRGB(tickcount % rs / rs + 0.30, 1, 1, 1, 255);
    r31 = HSVtoRGB(tickcount % rs / rs + 0.31, 1, 1, 1, 255);
    r32 = HSVtoRGB(tickcount % rs / rs + 0.32, 1, 1, 1, 255);
    r33 = HSVtoRGB(tickcount % rs / rs + 0.33, 1, 1, 1, 255);
    r34 = HSVtoRGB(tickcount % rs / rs + 0.34, 1, 1, 1, 255);
    r35 = HSVtoRGB(tickcount % rs / rs + 0.35, 1, 1, 1, 255);
    r36 = HSVtoRGB(tickcount % rs / rs + 0.36, 1, 1, 1, 255);
    r37 = HSVtoRGB(tickcount % rs / rs + 0.37, 1, 1, 1, 255);
    r38 = HSVtoRGB(tickcount % rs / rs + 0.38, 1, 1, 1, 255);
    r39 = HSVtoRGB(tickcount % rs / rs + 0.39, 1, 1, 1, 255);

    r40 = HSVtoRGB(tickcount % rs / rs + 0.40, 1, 1, 1, 255);
    r41 = HSVtoRGB(tickcount % rs / rs + 0.41, 1, 1, 1, 255);
    r42 = HSVtoRGB(tickcount % rs / rs + 0.42, 1, 1, 1, 255);
    r43 = HSVtoRGB(tickcount % rs / rs + 0.43, 1, 1, 1, 255);
    r44 = HSVtoRGB(tickcount % rs / rs + 0.44, 1, 1, 1, 255);
    r45 = HSVtoRGB(tickcount % rs / rs + 0.45, 1, 1, 1, 255);
    r46 = HSVtoRGB(tickcount % rs / rs + 0.46, 1, 1, 1, 255);
    r47 = HSVtoRGB(tickcount % rs / rs + 0.47, 1, 1, 1, 255);
    r48 = HSVtoRGB(tickcount % rs / rs + 0.48, 1, 1, 1, 255);
    r49 = HSVtoRGB(tickcount % rs / rs + 0.49, 1, 1, 1, 255);

    r50 = HSVtoRGB(tickcount % rs / rs + 0.50, 1, 1, 1, 255);
    r51 = HSVtoRGB(tickcount % rs / rs + 0.51, 1, 1, 1, 255);
    r52 = HSVtoRGB(tickcount % rs / rs + 0.52, 1, 1, 1, 255);
    r53 = HSVtoRGB(tickcount % rs / rs + 0.53, 1, 1, 1, 255);
    r54 = HSVtoRGB(tickcount % rs / rs + 0.54, 1, 1, 1, 255);
    r55 = HSVtoRGB(tickcount % rs / rs + 0.55, 1, 1, 1, 255);
    r56 = HSVtoRGB(tickcount % rs / rs + 0.56, 1, 1, 1, 255);
    r57 = HSVtoRGB(tickcount % rs / rs + 0.57, 1, 1, 1, 255);
    r58 = HSVtoRGB(tickcount % rs / rs + 0.58, 1, 1, 1, 255);
    r59 = HSVtoRGB(tickcount % rs / rs + 0.59, 1, 1, 1, 255);

    rx = x + 6
    ry = 16
    ryy = ry + 1
    rw = w - 12 - (3 * 58)
    rww = rw - 1
    rh = 1

    Render.FilledRect(rx + 3 * 0, ry, rw, rh, [r0.r, r0.g, r0.b, 255]);
    Render.FilledRect(rx + 3 * 1, ry, rw, rh, [r1.r, r1.g, r1.b, 255]);
    Render.FilledRect(rx + 3 * 2, ry, rw, rh, [r2.r, r2.g, r2.b, 255]);
    Render.FilledRect(rx + 3 * 3, ry, rw, rh, [r3.r, r3.g, r3.b, 255]);
    Render.FilledRect(rx + 3 * 4, ry, rw, rh, [r4.r, r4.g, r4.b, 255]);
    Render.FilledRect(rx + 3 * 5, ry, rw, rh, [r5.r, r5.g, r5.b, 255]);
    Render.FilledRect(rx + 3 * 6, ry, rw, rh, [r6.r, r6.g, r6.b, 255]);
    Render.FilledRect(rx + 3 * 7, ry, rw, rh, [r7.r, r7.g, r7.b, 255]);
    Render.FilledRect(rx + 3 * 8, ry, rw, rh, [r8.r, r8.g, r8.b, 255]);
    Render.FilledRect(rx + 3 * 9, ry, rw, rh, [r9.r, r9.g, r9.b, 255]);
    Render.FilledRect(rx + 3 * 10, ry, rw, rh, [r10.r, r10.g, r10.b, 255]);
    Render.FilledRect(rx + 3 * 11, ry, rw, rh, [r11.r, r11.g, r11.b, 255]);
    Render.FilledRect(rx + 3 * 12, ry, rw, rh, [r12.r, r12.g, r12.b, 255]);
    Render.FilledRect(rx + 3 * 13, ry, rw, rh, [r13.r, r13.g, r13.b, 255]);
    Render.FilledRect(rx + 3 * 14, ry, rw, rh, [r14.r, r14.g, r14.b, 255]);
    Render.FilledRect(rx + 3 * 15, ry, rw, rh, [r15.r, r15.g, r15.b, 255]);
    Render.FilledRect(rx + 3 * 16, ry, rw, rh, [r16.r, r16.g, r16.b, 255]);
    Render.FilledRect(rx + 3 * 17, ry, rw, rh, [r17.r, r17.g, r17.b, 255]);
    Render.FilledRect(rx + 3 * 18, ry, rw, rh, [r18.r, r18.g, r18.b, 255]);
    Render.FilledRect(rx + 3 * 19, ry, rw, rh, [r19.r, r19.g, r19.b, 255]);
    Render.FilledRect(rx + 3 * 20, ry, rw, rh, [r20.r, r20.g, r20.b, 255]);
    Render.FilledRect(rx + 3 * 21, ry, rw, rh, [r21.r, r21.g, r21.b, 255]);
    Render.FilledRect(rx + 3 * 22, ry, rw, rh, [r22.r, r22.g, r22.b, 255]);
    Render.FilledRect(rx + 3 * 23, ry, rw, rh, [r23.r, r23.g, r23.b, 255]);
    Render.FilledRect(rx + 3 * 24, ry, rw, rh, [r24.r, r24.g, r24.b, 255]);
    Render.FilledRect(rx + 3 * 25, ry, rw, rh, [r25.r, r25.g, r25.b, 255]);
    Render.FilledRect(rx + 3 * 26, ry, rw, rh, [r26.r, r26.g, r26.b, 255]);
    Render.FilledRect(rx + 3 * 27, ry, rw, rh, [r27.r, r27.g, r27.b, 255]);
    Render.FilledRect(rx + 3 * 28, ry, rw, rh, [r28.r, r28.g, r28.b, 255]);
    Render.FilledRect(rx + 3 * 29, ry, rw, rh, [r29.r, r29.g, r29.b, 255]);
    Render.FilledRect(rx + 3 * 30, ry, rw, rh, [r30.r, r30.g, r30.b, 255]);
    Render.FilledRect(rx + 3 * 31, ry, rw, rh, [r31.r, r31.g, r31.b, 255]);
    Render.FilledRect(rx + 3 * 32, ry, rw, rh, [r32.r, r32.g, r32.b, 255]);
    Render.FilledRect(rx + 3 * 33, ry, rw, rh, [r33.r, r33.g, r33.b, 255]);
    Render.FilledRect(rx + 3 * 34, ry, rw, rh, [r34.r, r34.g, r34.b, 255]);
    Render.FilledRect(rx + 3 * 35, ry, rw, rh, [r35.r, r35.g, r35.b, 255]);
    Render.FilledRect(rx + 3 * 36, ry, rw, rh, [r36.r, r36.g, r36.b, 255]);
    Render.FilledRect(rx + 3 * 37, ry, rw, rh, [r37.r, r37.g, r37.b, 255]);
    Render.FilledRect(rx + 3 * 38, ry, rw, rh, [r38.r, r38.g, r38.b, 255]);
    Render.FilledRect(rx + 3 * 39, ry, rw, rh, [r39.r, r39.g, r39.b, 255]);
    Render.FilledRect(rx + 3 * 40, ry, rw, rh, [r40.r, r40.g, r40.b, 255]);
    Render.FilledRect(rx + 3 * 41, ry, rw, rh, [r41.r, r41.g, r41.b, 255]);
    Render.FilledRect(rx + 3 * 42, ry, rw, rh, [r42.r, r42.g, r42.b, 255]);
    Render.FilledRect(rx + 3 * 43, ry, rw, rh, [r43.r, r43.g, r43.b, 255]);
    Render.FilledRect(rx + 3 * 44, ry, rw, rh, [r44.r, r44.g, r44.b, 255]);
    Render.FilledRect(rx + 3 * 45, ry, rw, rh, [r45.r, r45.g, r45.b, 255]);
    Render.FilledRect(rx + 3 * 46, ry, rw, rh, [r46.r, r46.g, r46.b, 255]);
    Render.FilledRect(rx + 3 * 47, ry, rw, rh, [r47.r, r47.g, r47.b, 255]);
    Render.FilledRect(rx + 3 * 48, ry, rw, rh, [r48.r, r48.g, r48.b, 255]);
    Render.FilledRect(rx + 3 * 49, ry, rw, rh, [r49.r, r49.g, r49.b, 255]);
    Render.FilledRect(rx + 3 * 50, ry, rw, rh, [r50.r, r50.g, r50.b, 255]);
    Render.FilledRect(rx + 3 * 51, ry, rw, rh, [r51.r, r51.g, r51.b, 255]);
    Render.FilledRect(rx + 3 * 52, ry, rw, rh, [r52.r, r52.g, r52.b, 255]);
    Render.FilledRect(rx + 3 * 53, ry, rw, rh, [r53.r, r53.g, r53.b, 255]);
    Render.FilledRect(rx + 3 * 54, ry, rw, rh, [r54.r, r54.g, r54.b, 255]);
    Render.FilledRect(rx + 3 * 55, ry, rw, rh, [r55.r, r55.g, r55.b, 255]);
    Render.FilledRect(rx + 3 * 56, ry, rw, rh, [r56.r, r56.g, r56.b, 255]);
    Render.FilledRect(rx + 3 * 57, ry, rw, rh, [r57.r, r57.g, r57.b, 255]);
    Render.FilledRect(rx + 3 * 58, ry, rw, rh, [r58.r, r58.g, r58.b, 255]);

    Render.FilledRect(rx + 3 * 0, ryy, rww, rh, [r0.r, r0.g, r0.b, 122]);
    Render.FilledRect(rx + 3 * 1, ryy, rww, rh, [r1.r, r1.g, r1.b, 122]);
    Render.FilledRect(rx + 3 * 2, ryy, rww, rh, [r2.r, r2.g, r2.b, 122]);
    Render.FilledRect(rx + 3 * 3, ryy, rww, rh, [r3.r, r3.g, r3.b, 122]);
    Render.FilledRect(rx + 3 * 4, ryy, rww, rh, [r4.r, r4.g, r4.b, 122]);
    Render.FilledRect(rx + 3 * 5, ryy, rww, rh, [r5.r, r5.g, r5.b, 122]);
    Render.FilledRect(rx + 3 * 6, ryy, rww, rh, [r6.r, r6.g, r6.b, 122]);
    Render.FilledRect(rx + 3 * 7, ryy, rww, rh, [r7.r, r7.g, r7.b, 122]);
    Render.FilledRect(rx + 3 * 8, ryy, rww, rh, [r8.r, r8.g, r8.b, 122]);
    Render.FilledRect(rx + 3 * 9, ryy, rww, rh, [r9.r, r9.g, r9.b, 122]);
    Render.FilledRect(rx + 3 * 10, ryy, rww, rh, [r10.r, r10.g, r10.b, 122]);
    Render.FilledRect(rx + 3 * 11, ryy, rww, rh, [r11.r, r11.g, r11.b, 122]);
    Render.FilledRect(rx + 3 * 12, ryy, rww, rh, [r12.r, r12.g, r12.b, 122]);
    Render.FilledRect(rx + 3 * 13, ryy, rww, rh, [r13.r, r13.g, r13.b, 122]);
    Render.FilledRect(rx + 3 * 14, ryy, rww, rh, [r14.r, r14.g, r14.b, 122]);
    Render.FilledRect(rx + 3 * 15, ryy, rww, rh, [r15.r, r15.g, r15.b, 122]);
    Render.FilledRect(rx + 3 * 16, ryy, rww, rh, [r16.r, r16.g, r16.b, 122]);
    Render.FilledRect(rx + 3 * 17, ryy, rww, rh, [r17.r, r17.g, r17.b, 122]);
    Render.FilledRect(rx + 3 * 18, ryy, rww, rh, [r18.r, r18.g, r18.b, 122]);
    Render.FilledRect(rx + 3 * 19, ryy, rww, rh, [r19.r, r19.g, r19.b, 122]);
    Render.FilledRect(rx + 3 * 20, ryy, rww, rh, [r20.r, r20.g, r20.b, 122]);
    Render.FilledRect(rx + 3 * 21, ryy, rww, rh, [r21.r, r21.g, r21.b, 122]);
    Render.FilledRect(rx + 3 * 22, ryy, rww, rh, [r22.r, r22.g, r22.b, 122]);
    Render.FilledRect(rx + 3 * 23, ryy, rww, rh, [r23.r, r23.g, r23.b, 122]);
    Render.FilledRect(rx + 3 * 24, ryy, rww, rh, [r24.r, r24.g, r24.b, 122]);
    Render.FilledRect(rx + 3 * 25, ryy, rww, rh, [r25.r, r25.g, r25.b, 122]);
    Render.FilledRect(rx + 3 * 26, ryy, rww, rh, [r26.r, r26.g, r26.b, 122]);
    Render.FilledRect(rx + 3 * 27, ryy, rww, rh, [r27.r, r27.g, r27.b, 122]);
    Render.FilledRect(rx + 3 * 28, ryy, rww, rh, [r28.r, r28.g, r28.b, 122]);
    Render.FilledRect(rx + 3 * 29, ryy, rww, rh, [r29.r, r29.g, r29.b, 122]);
    Render.FilledRect(rx + 3 * 30, ryy, rww, rh, [r30.r, r30.g, r30.b, 122]);
    Render.FilledRect(rx + 3 * 31, ryy, rww, rh, [r31.r, r31.g, r31.b, 122]);
    Render.FilledRect(rx + 3 * 32, ryy, rww, rh, [r32.r, r32.g, r32.b, 122]);
    Render.FilledRect(rx + 3 * 33, ryy, rww, rh, [r33.r, r33.g, r33.b, 122]);
    Render.FilledRect(rx + 3 * 34, ryy, rww, rh, [r34.r, r34.g, r34.b, 122]);
    Render.FilledRect(rx + 3 * 35, ryy, rww, rh, [r35.r, r35.g, r35.b, 122]);
    Render.FilledRect(rx + 3 * 36, ryy, rww, rh, [r36.r, r36.g, r36.b, 122]);
    Render.FilledRect(rx + 3 * 37, ryy, rww, rh, [r37.r, r37.g, r37.b, 122]);
    Render.FilledRect(rx + 3 * 38, ryy, rww, rh, [r38.r, r38.g, r38.b, 122]);
    Render.FilledRect(rx + 3 * 39, ryy, rww, rh, [r39.r, r39.g, r39.b, 122]);
    Render.FilledRect(rx + 3 * 40, ryy, rww, rh, [r40.r, r40.g, r40.b, 122]);
    Render.FilledRect(rx + 3 * 41, ryy, rww, rh, [r41.r, r41.g, r41.b, 122]);
    Render.FilledRect(rx + 3 * 42, ryy, rww, rh, [r42.r, r42.g, r42.b, 122]);
    Render.FilledRect(rx + 3 * 43, ryy, rww, rh, [r43.r, r43.g, r43.b, 122]);
    Render.FilledRect(rx + 3 * 44, ryy, rww, rh, [r44.r, r44.g, r44.b, 122]);
    Render.FilledRect(rx + 3 * 45, ryy, rww, rh, [r45.r, r45.g, r45.b, 122]);
    Render.FilledRect(rx + 3 * 46, ryy, rww, rh, [r46.r, r46.g, r46.b, 122]);
    Render.FilledRect(rx + 3 * 47, ryy, rww, rh, [r47.r, r47.g, r47.b, 122]);
    Render.FilledRect(rx + 3 * 48, ryy, rww, rh, [r48.r, r48.g, r48.b, 122]);
    Render.FilledRect(rx + 3 * 49, ryy, rww, rh, [r49.r, r49.g, r49.b, 122]);
    Render.FilledRect(rx + 3 * 50, ryy, rww, rh, [r50.r, r50.g, r50.b, 122]);
    Render.FilledRect(rx + 3 * 51, ryy, rww, rh, [r51.r, r51.g, r51.b, 122]);
    Render.FilledRect(rx + 3 * 52, ryy, rww, rh, [r52.r, r52.g, r52.b, 122]);
    Render.FilledRect(rx + 3 * 53, ryy, rww, rh, [r53.r, r53.g, r53.b, 122]);
    Render.FilledRect(rx + 3 * 54, ryy, rww, rh, [r54.r, r54.g, r54.b, 122]);
    Render.FilledRect(rx + 3 * 55, ryy, rww, rh, [r55.r, r55.g, r55.b, 122]);
    Render.FilledRect(rx + 3 * 56, ryy, rww, rh, [r56.r, r56.g, r56.b, 122]);
    Render.FilledRect(rx + 3 * 57, ryy, rww, rh, [r57.r, r57.g, r57.b, 122]);
    Render.FilledRect(rx + 3 * 58, ryy, rww + 1, rh, [r58.r, r58.g, r58.b, 122]);
}
Cheat.RegisterCallback("Draw", "rainbowColors");