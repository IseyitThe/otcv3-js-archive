/*
* Made by b1g UIDer exnull
* You can take code from this script but mention me please.
* Still in development!
* 574265328bc422cdecaafe191bc16a785afe831a8c669de388b389e2cdf0f5ea
* 5e5a67e79d277bb8b0f5ffac2a90ceded134c9e08fa5fd6739c2fb12bf780849
* null#7403
*/

var hentaiScripts = {
    colorHelper: {
        getColor(r, g, b) {
            return [r, g, b, 255];
        },

        getColorAlpha(r, g, b, a) {
            var alpha = 255 * a;

            if(alpha < 0) {
                alpha = 0;
            } else if(alpha > 255) {
                alpha = 255;
            }

            return [r, g, b, alpha];
        }
    },

    ui: {
        GetValue(uiItem) {
            return UI.GetString.apply(this, uiItem);
        },

        GetChecked(uiCheckbox) {
            return UI.GetString.apply(this, uiCheckbox) == "true";
        }
    },

    featureManager: {
        featureList: [],

        createEmptyCallback() {
            return {
                callback: function() {}
            }
        },

        createTimedCallback(realCallback, interval) {
            return {
                lastExecution: 0,
                interval: interval,

                callback: function() {
                    var currTime =  Globals.Realtime();
                    var timeSinceLastExecution = currTime - this.lastExecution;
                   
                    if(timeSinceLastExecution > interval) {
                        this.lastExecution = currTime;
                        realCallback();
                    }
                },

                realCallback: realCallback
            };
        },

        createFeature(name) {
            var feature = {
                name: name,

                /* ui elements initialization */

                createUiElements: function() {},

                /* callbacks */

                onCreateMove: this.createEmptyCallback(),
                onDraw: this.createEmptyCallback(),
                onFSN: this.createEmptyCallback()
            };

            this.featureList.push(feature);
            return feature;
        }
    },

    entryPoint() {
        this.createUI();
        this.registerCallbacks();
    },

    isInGame() {
        return World.GetServerString().length > 0;
    },


    createUI() {
        UI.AddLabel("====== Bun's clantag ======");
        UI.AddSliderFloat("", 0, 100);

        this.featureManager.featureList.forEach(function(feature) {
            UI.AddLabel(feature.name);
            feature.createUiElements();
            UI.AddSliderFloat("", 0, 0);
        });

        UI.AddSliderFloat("", 0, 0);
        UI.AddLabel("===========================");
    },

    registerCallbacks() {
        Cheat.RegisterCallback("CreateMove", "onCreateMove");
        Cheat.RegisterCallback("Draw", "onDraw");
        Cheat.RegisterCallback("FrameStageNotify", "onFSN");
    },

    onCreateMove() {
        this.featureManager.featureList.forEach(function(e) {
            e.onCreateMove.callback();
        });
    },

    onDraw() {
        this.featureManager.featureList.forEach(function(e) {
            e.onDraw.callback();
        });
    },

    onFSN() {
        this.featureManager.featureList.forEach(function(e) {
            e.onFSN.callback();
        });
    }
}

/* callback workaround, onetap can't find functions inside of the object and can't receive it by pass-by-reference */

function onCreateMove() {
    hentaiScripts.onCreateMove();
}

function onDraw() {
    hentaiScripts.onDraw();
}

function onFSN() {
    hentaiScripts.onFSN();
}

/* Features! */

var featureManager = hentaiScripts.featureManager;
var ui = hentaiScripts.ui;

// Custom clantag feature

(function() {
    var clantagFeature = featureManager.createFeature("Custom clantags");

    var wasEnabled;
    var ccCheckbox, ccTextBox, ccDropdown;

    var textModificators = {
        "CAPS toggle": {
            capsFlag: false,
            processText: function(text) {
                this.capsFlag = !this.capsFlag;
               
                if(this.capsFlag) {
                    // we need to add first space because CSGO wont change clantag (probably check if prev. is equals, ignoring case)
                    text = " " + text.toUpperCase();
                }

                return text;
            }
        },
        "Random numbers": {
            processText: function(text) {
                return Math.floor(Math.random() * 100000000000).toString(); // pseudorandom smh
            }
        },
        "nemesis": {
            animation: [
                "nemesis",
                "n3m3sis",
                "nemesis",
                "n3m3sis",
            ],
            lastIndex: 0,
            processText: function(text) {
                this.lastIndex++;

                if(this.lastIndex > this.animation.length - 150) {
                    this.lastIndex = 0;
                }

                return this.animation[this.lastIndex];
            }
        },
        "Big Hopper": {
            animation: [


" ",
"_",                
"B_",
"B1",
"Bi6_",
"Big ",
"Big H_",
"Big H0",
"Big Hop_",
"Big Hopp",
"Big Hopp3_",
"Big Hopper",
"Big Hopper",
"Big Hopper",
"B16 H0pp3r",
"Big Hopper",
"B16 H0pp3r",
"Big Hopper",
"B16 H0pp3r",
"Big Hopper",
"Big Hopper",
"Big Hopper_",
"Big Hoppe_",
"Big Hopp_r",
"Big Hop_3r",
"Big Ho_per",
"Big H_pper",
"Big _0pper",
"Big_Hopper",
"Bi_ Hopper",
"B_6 Hopper",
"_1g Hopper",
"_ig Hopper",
"g Hopper",
"_ Hopper",
"Hopper",
"_opper",
"pper",
"_per",
"_er",
"_r",
"_",
" ",














            ],
            lastIndex: 0,
            processText: function(text) {
                this.lastIndex++;

                if(this.lastIndex > this.animation.length - 1) {
                    this.lastIndex = 0;
                }

                return this.animation[this.lastIndex];
            }
        },

        "Femboyware Staff": {
            animation: [



                
"FemboywareStaff",
"_3mboywareStaff",
"F_mboywareStaff",
"F3_boywareStaff",
"Fem_0ywareStaff",
"Femb_ywareStaff",
"Femb0_wareStaff",
"Femboy_4reStaff",
"Femboyw_reStaff",
"Femboyw4_3Staff",
"Femboywar_$taff",
"Femboywar3_taff",
"Femboyware$_4ff",
"FemboywareSt_ff",
"FemboywareSt4_f",
"FemboywareStaf_",
"FemboywareSt4_f",
"FemboywareSt_ff",
"Femboyware$_4ff",
"Femboywar3_taff",
"Femboywar_$taff",
"Femboyw4_3Staff",
"Femboyw_reStaff",
"Femboy_4reStaff",
"Femb0_wareStaff",
"Femb_ywareStaff",
"Fem_0ywareStaff",
"F3_boywareStaff",
"F_mboywareStaff",
"_3mboywareStaff",
"F3mboywareStaff",
"Femb0ywareStaff",
"Femboyw4reStaff",
"Femboywar3Staff",
"FemboywareSt4ff",
"FemboywareStaff",
"FemboywareStaff",
















            ],
            lastIndex: 0,
            processText: function(text) {
                this.lastIndex++;

                if(this.lastIndex > this.animation.length - 1) {
                    this.lastIndex = 0;
                }

                return this.animation[this.lastIndex];
            }
        },




        "MEDIAMONKEY": {
            animation: [


        
                        " ",
                        " ",
                        " ",
                        " ",
        
                        "~ ",
                        "-",
                        "* ",
                        "^",
        
                        "M~ ",
                        "M-",
                        "M* ",
                        "M^",
        
                        "M3~ ",
                        "M3-",
                        "ME* ",
                        "ME^",
        
                        "MED~ ",
                        "M3D-",
                        "MED* ",
                        "MED^",
        
                        "MEDI~ ",
                        "MED1-",
                        "MEDI* ",
                        "MEDI^",
        
                        "MED14~ ",
                        "M3DIA-",
                        "MED1A* ",
                        "MEDIA^",
              
                        "M3DIAM~ ",
                        "MEDIAM-",
                        "M3D14M* ",
                        "MEDIAM^",
        
                        "M3DI4MO~ ",
                        "MED1AM0-",
                        "MEDIAMO* ",
                        "MEDI4MO^",
        
                        "MEDIAMON~ ",
                        "M3D14M0N-",
                        "MEDIAMON* ",
                        "MEDIAM0N^",
        
                        "M3D14M0NK~ ",
                        "MEDIAMONK-",
                        "MEDIAMONK* ",
                        "MEDIAMONK^",
        
                        "M3D14M0NK3~ ",
                        "MEDIAMONKE-",
                        "MEDIAM0NKE* ",
                        "MEDIAMONKE^",

        
                        "M3D1AMONKEY",
                        "MEDIAM0NK3Y",
                        "M3DIAMONK3Y",
                        "MEDI4-ONKEY",
                        "MEDI-NKEY",
                        "MED-KEY",
                        "ME-EY",
                        "M-Y",
                        "-",
                        "M-Y",
                        "ME-EY",
                        "MED-KEY",
                        "MEDI-NKEY",
                        "MEDI4-ONK3Y",
                        "MEDIAMONKEY",
                        "M3DIAM0NKEY",
                        "MEDI4MONKEY",
                        
        
                        "M3D1AMONK3~ ",
                        "MEDIAMONK3-",
                        "MEDI4M0NKE* ",
                        "MEDIAMONKE^",
        
                        "MED1AM0NK~ ",
                        "MEDIAMONK-",
                        "M3DI4MONK* ",
                        "M3D14M0NK^",
        
                        "MEDI4M0N~ ",
                        "MEDIAMON-",
                        "M3D1AMON* ",
                        "MED14MON^",
        
                        "MED14MO",
                        "M3D1AM0",
                        "MEDIAMO*",
                        "MED14M0^",
        
                        "MED1AM~",
                        "MEDI4M-",
                        "M3DI4M* ",
                        "M3D1AM^",
        
                        "MEDIA~ ",
                        "M3D1A-",
                        "MEDI4* ",
                        "M3DI4^",
        
                        "MED1~ ",
                        "M3DI-",
                        "M3D1* ",
                        "MEDI^",
        
                        "MED~ ",
                        "MED-",
                        "M3D* ",
                        "MED^",
        
                        "M3~ ",
                        "ME-",
                        "M3* ",
                        "M3^",
        
                        "M~ ",
                        "M-",
                        "M* ",
                        "M^", 
                        
                        "~",
                        "-",
                        "*",
                        "^",

                        "",
                        "",
                        "",
                        "^",

            ],
            lastIndex: 0,
            processText: function(text) {
                this.lastIndex++;

                if(this.lastIndex > this.animation.length - 1) {
                    this.lastIndex = 0;
                }

                return this.animation[this.lastIndex];
            }
        },
        "SCARIFICATION": {
            animation: [



"",                
"",
"^",
"$*",
"SC'",
"$C4~",
"SCAR-",
"$C4R1^",
"SCARIF*",
"$C4R1F1'",
"SCARIFIC~",
"$C4R1F1C4-",
"SCARIFICAT^",
"$C4RF1C4T10*",
"SCARIFICATION'",
"SCARIFICATION'",
"SCARIFICATION'",
"$C4R1F1C4T10|/|'",
"SCARIFICATION'",
"SCARIFICATION'",
"SCARIFICATION'",
"$C4RF1C4T10*",
"SCARIFICAT^",
"$C4R1F1C4-",
"SCARIFIC~",
"$C4R1F1'",
"SCARIF*",
"$C4R1^",
"SCAR-",
"$C4~",
"SC'",
"$*",
"^",
"",
"",















            ],
            lastIndex: 0,
            processText: function(text) {
                this.lastIndex++;

                if(this.lastIndex > this.animation.length - 1) {
                    this.lastIndex = 0;
                }

                return this.animation[this.lastIndex];
            }
        },
        "911": {
            animation: [
                "____█_█",
                "✈___█_█",
                "_✈__█_█",
                "__✈_█_█",
                "___✈█_█",
                "_____☠_█",
                "____☠✈█",
                "____☠_☠"
            ],
            lastIndex: 0,
            processText: function(text) {
                this.lastIndex++;

                if(this.lastIndex > this.animation.length - 1) {
                    this.lastIndex = 0;
                }

                return this.animation[this.lastIndex];
            }
        },
        "Anime": {
            animation: [
                "(≧◡≦✿)",
                "(≧◡≦✿)",
                "(≧◡≦✿)",
                "(≧◡≦✿)",
                "(≧◡≦✿)",
                "(✿≧◡≦)",
                "(✿≧◡≦)",
                "(✿≧◡≦)",
                "(✿≧◡≦)",
                "(≧◡≦✿)",
                "(≧◡≦✿)",
                "(≧◡≦✿)",
                "(≧◡≦✿)",
                "(✿∪◡∪)",
                "(✿∪◡∪)",
                "(∪◡∪✿)",
                "(∪◡∪✿)",
                "✿✿✿✿✿",
                "✿✿✿✿",
                "✿✿✿",
                "✿✿",
                "✿",
                "(≧◡≦✿)",


            ],
            lastIndex: 0,
            processText: function(text) {
                this.lastIndex++;

                if(this.lastIndex > this.animation.length - 1) {
                    this.lastIndex = 0;
                }

                return this.animation[this.lastIndex];
            }
        },
    
        "gaymsensei": {
            animation: [






"",
"g",
"ga_",
"gay",

"gaym_",
"gayms",
"gaymse_",

"gaymsen",
"gaymsens_",
"gaymsense",

"gaymsensei_",
"gaymsensei_",
"gaymsensei",

"gaymsensei",

"gaymsensei",
"gaymsensei",

"gaymsensei_",
"gaymsensei_",

"gaymsense_",
"gaymsens_i",
"gaymsen_ei",
"gaymse_sei",
"gayms_nsei",
"gaym_ensei",
"gay_sensei",
"ga_msensei",
"g_ymsensei",
"_aymsensei",

"_aymsensei",
"ymsensei",
"_msensei",
"sensei",
"_ensei",
"nsei",
"_sei",
"ei",
"_i",
"_",






            ],
            lastIndex: 0,
            processText: function(text) {
                this.lastIndex++;

                if(this.lastIndex > this.animation.length - 1) {
                    this.lastIndex = 0;
                }

                return this.animation[this.lastIndex];
            }
        },
        "sub 2 yonen": {
            animation: [




"|",
"S|",
"SU|",
"SUB|",
"SUB2|",
"SUB2Y|",
"SUB2YO|",
"SUB2YON|",
"SUB2YONE|",
"SUB2YONEN|",
"SUB2YONEN|",
"SUB2YONEN|",
"SUB2YONEN|",
"SUB2YONE|",
"SUB2YON|",
"SUB2YO|",
"SUB2Y|",
"SUB2|",
"SUB|",
"SU|",
"S|",
"|",







            ],
            lastIndex: 0,
            processText: function(text) {
                this.lastIndex++;

                if(this.lastIndex > this.animation.length - 1) {
                    this.lastIndex = 0;
                }

                return this.animation[this.lastIndex];
            }
        },
     "heart angel": {
            animation: [
                ">",
                ">_",
                ">h",
                ">h_",
                ">h3",
                ">he_",
                ">heA",
                ">h3a_",
                ">hEar",
                ">Hear_",
                ">he4rt",
                ">heart_",
                ">h3aRt ",
                ">ha4rT _ ",
                ">hEaRt a",
                ">he4rt a_",
                ">He4rt a|/|",
                ">heaRt an_",
                ">h3arT 4ng",
                ">he4rt an6_",
                ">hEaRt anGe",
                ">heart ange_",
                ">h3art Angel",
                ">heart an6el_",
                ">he4rt ange7",
                ">Heart anGel_",
                ">hearT Angel♥",
                ">heart angel♥",
                ">heart angel_",
                ">Heart Ang3",
                ">h3arT anGe_",
                ">heArt anG",
                ">he4rt a|/|_",
                ">hEaRt an",
                ">HearT a_",
                ">HeArt A",
                ">hEart _",
                ">h3aRt ",
                ">heaRt_ ",
                ">heart ",
                ">H3ar_",
                ">hea",
                ">hea_",
                ">He",
                ">h3",
                ">h",
                ">h",
                ">_",
                ">",
                ">♥",
                ">♥_",
                ">♥",
                ">",
                ">_",
            ],
            lastIndex: 0,
            processText: function(text) {
                this.lastIndex++;

                if(this.lastIndex > this.animation.length - 1) {
                    this.lastIndex = 0;
                }

                return this.animation[this.lastIndex];
            }
        },
        "Typewriter": {
            lastLength: 0,
            cursorBlink: false,
            processText: function(text) {
                this.lastLength++;

                if(this.lastLength > text.length) {
                    this.lastLength = 0;
                }

                var typedText = text.substr(0, this.lastLength);

                this.cursorBlink = !this.cursorBlink;

                if(this.cursorBlink) {
                    typedText += "|";
                }

                var processed = "[" + typedText + "]";
                return processed;
            }
        },
        "garbage": {
            lastLength: 0,
            cursorBlink: false,
            processText: function(text) {
                this.lastLength++;

                if(this.lastLength > text.length) {
                    this.lastLength = 0;
                }

                var typedText = text.substr(0, this.lastLength);

                this.cursorBlink = !this.cursorBlink;

                if(this.cursorBlink) {
                    typedText += "-";
                }

                var processed = "$" + typedText + "$";
                return processed;
            }
        },
        "Prefix: warning": {
            processText: function(text) { return "⚠ " + text; }
        },
        "Prefix: lightning": {
            processText: function(text) { return "⚡ " + text; }
        },
        "Prefix: check": {
            processText: function(text) { return "✓ " + text; }
        },
        "Prefix: star": {
            processText: function(text) { return "★ " + text; }
        },
        "Prefix: skull": {
            processText: function(text) { return "☠ " + text; }
        },
        "Static: Onetap username": {
            processText: function(text) { return Cheat.GetUsername(); }
        },
        "Skull blink": {
            blink: false,
            processText: function(text) {
                this.blink = !this.blink;

                if(this.blink) {
                    text = "☠".repeat(text.length);
                }

                return text;
            }
        },
        "Hide name (break)": {
            processText: function(text) {
                return "\t\x0d";
            }
        },
        "Hide name (overflow)": {
            processText: function(text) {
                return "\t".repeat(15);
            }
        },
        "Hide name (newline)": {
            processText: function(text) {
                return "\n".repeat(15);
            }
        },
        "Custom name": {
            processText: function(text) {
                return text + "\n\n";
            }
        },
        "Random clantag": {
            // https://stackoverflow.com/a/1497512; too lazy to make my own
            generateRandomText: function() {
                var length = 15,
                    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                    retVal = "";
                for (var i = 0, n = charset.length; i < length; ++i) {
                    retVal += charset.charAt(Math.floor(Math.random() * n));
                }
                return retVal;
            },
            processText: function(text) {
                return this.generateRandomText();
            }
        },
        "Random name": {
            // TODO: remove repeating code?
            generateRandomText: function() {
                var length = 13,
                    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                    retVal = "";
                for (var i = 0, n = charset.length; i < length; ++i) {
                    retVal += charset.charAt(Math.floor(Math.random() * n));
                }
                return retVal;
            },
            processText: function(text) {
                return this.generateRandomText() + "\n\n";
            }
        },
        "Teammate namesteal": {
            lastIndex: 0,
            processText: function(text) {
                var localplayer = Entity.GetLocalPlayer();
                var players = Entity.GetTeammates();

                if(this.lastIndex > players.length - 1) {
                    this.lastIndex = 0;
                }

                var entId = players[this.lastIndex];

                if(entId == localplayer) {
                    this.lastIndex++;
                    entId = players[this.lastIndex];
                }

                var name = Entity.GetName(entId);
                var isBot = Entity.IsBot(entId);

                if(isBot) {
                    name = "BOT " + name;
                }

                this.lastIndex++;

                return name + "\n\n";
            }
        },
        "Enemy namesteal": {
            lastIndex: 0,
            processText: function(text) {
                var players = Entity.GetEnemies();

                if(this.lastIndex > players.length - 1) {
                    this.lastIndex = 0;
                }

                var entId = players[this.lastIndex];
                var name = Entity.GetName(entId);
                var isBot = Entity.IsBot(entId);

                if(isBot) {
                    name = "BOT " + name;
                }

                this.lastIndex++;

                return name + "\n\n";
            }
        }
    };

    clantagFeature.createUiElements = function() {
        ccCheckbox = UI.AddCheckbox("Enable custom clantag");
        ccTextBox = UI.AddTextbox("Custom clantag text");

        var textModificatorTypes = Object.getOwnPropertyNames(textModificators);

        ccDropdown = UI.AddDropdown("Custom clantag animation type", textModificatorTypes);
    };

    function clantagFeatureFrameStageNotify() {
        var customClantagEnabled = ui.GetChecked(ccCheckbox);

        if(!customClantagEnabled) {
            if(wasEnabled) {
                wasEnabled = false;
                Local.SetClanTag("");
            }

            return;
        }

        wasEnabled = true;

        var customText = ui.GetValue(ccTextBox);
        var textModificator = ui.GetValue(ccDropdown);

        var newText = textModificators[textModificator].processText(customText);

        Local.SetClanTag(newText);
    }

    clantagFeature.onDraw = featureManager.createTimedCallback(clantagFeatureFrameStageNotify, 0.5);
})();

// End of custom clantag feature

// Player revealer feature

(function() {
    var playerRevealer = featureManager.createFeature("Player revealer");

    var prCheckbox, prRevealFriendly, prRevealEnemy, prRevealSelf, prTeamChatOnly;
    var lastPlayerIndex = 0;

    playerRevealer.createUiElements = function() {
        prCheckbox = UI.AddCheckbox("Enable player revealer");

        prRevealFriendly = UI.AddCheckbox("Reveal friendly players");
        prRevealEnemy = UI.AddCheckbox("Reveal enemy players");
        prRevealSelf = UI.AddCheckbox("Reveal self");

        prTeamChatOnly = UI.AddCheckbox("Team chat only");
    };

    function clantagFeatureCreateMove() {
        var playerRevealerEnabled = ui.GetChecked(prCheckbox);

        if(!playerRevealerEnabled) {
            return;
        }

        var revealEnemies = ui.GetChecked(prRevealEnemy);
        var revealFriendly = ui.GetChecked(prRevealFriendly);
        var revealSelf = ui.GetChecked(prRevealSelf);

        if(!revealEnemies && !revealFriendly) {
            return;
        }

        var players;

        if(revealEnemies && revealFriendly) {
            players = Entity.GetPlayers();
        } else {
            players = revealFriendly ?
                            Entity.GetTeammates() :
                            Entity.GetEnemies();
        }

        if(!revealSelf) {
            var localplayer = Entity.GetLocalPlayer();
            var selfIndex = players.indexOf(localplayer);

            if (selfIndex != -1) {
                players.splice(selfIndex, 1);
            }
        }

        if(lastPlayerIndex > players.length - 1) {
            lastPlayerIndex = 0;
        }

        var player = players[lastPlayerIndex];

        while(!Entity.IsAlive(player)) {
            lastPlayerIndex++;

            if(lastPlayerIndex > players.length - 1) {
                return;
            }

            player = players[lastPlayerIndex];
        }

        lastPlayerIndex++;

        var name = Entity.GetName(player);
        var loc = Entity.GetProp(player, "CBasePlayer", "m_szLastPlaceName");
        var hp = Entity.GetProp(player, "CBasePlayer", "m_iHealth");

        var teamChatOnly = ui.GetChecked(prTeamChatOnly);
        var command = !teamChatOnly ? "say" : "say_team";

        Cheat.ExecuteCommand(command + " Player " + name + " is at " + loc + " with " + hp + "hp");
    }

    playerRevealer.onDraw = featureManager.createTimedCallback(clantagFeatureCreateMove, 1);
})();

// End of player revealer feature

hentaiScripts.entryPoint();