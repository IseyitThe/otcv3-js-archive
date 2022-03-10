var nameStealer = {
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
                createUiElements: function() {},
                onCreateMove: this.createEmptyCallback(),
                onDraw: this.createEmptyCallback(),
                onFSN: this.createEmptyCallback()
            };

            this.featureList.push(feature);
            return feature;
        }
    },

    entryPoint() {
	this.chatMessage();
        this.createUI();
        this.registerCallbacks();
    },

    chatMessage() {
        if(this.isInGame()) {
            Cheat.PrintChat(" \x03Name Stealer | Wet Brick ");
        }
    },

    isInGame() {
        return World.GetServerString().length > 0;
    },

    createUI() {
        UI.AddLabel("")
        UI.AddLabel("             Name Stealer")
        UI.AddLabel("_________________________________________")
        this.featureManager.featureList.forEach(function(feature) {
            UI.AddLabel(feature.name);
            feature.createUiElements();
        });
        UI.AddLabel("_________________________________________")
        UI.AddLabel("")
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

function onCreateMove() {
    nameStealer.onCreateMove();
}

function onDraw() {
    nameStealer.onDraw();
}

function onFSN() {
    nameStealer.onFSN();
}

var featureManager = nameStealer.featureManager;
var ui = nameStealer.ui;

(function() {
    var nameStealerF = featureManager.createFeature("");

    var wasEnabled;
    var ccCheckbox, ccTextBox, ccDropdown;

    var textModificators = {
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
        },
        "All namesteal": {
            lastIndex: 0,
            processText: function(text) {
                var localplayer = Entity.GetLocalPlayer();
                var players = Entity.GetPlayers();

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
        }
    };

    function isMessageEnabled()
    {
	
    }

    nameStealerF.createUiElements = function() {
        ccCheckbox = UI.AddCheckbox("Enable Name Steal");
        UI.AddLabel("");

        var textModificatorTypes = Object.getOwnPropertyNames(textModificators);

        ccDropdown = UI.AddDropdown("Name Stealer Type", textModificatorTypes);
    };

    function nameStealerFFrameStageNotify() {
	var nameStealerTagEnabled = ui.GetChecked(ccCheckbox);

        if(!nameStealerTagEnabled) {
            if(wasEnabled) {
                wasEnabled = false;

            }
            
	    return;
        }

	wasEnabled = true;

        var customText = ui.GetValue(ccTextBox);
        var textModificator = ui.GetValue(ccDropdown);


        var newText = textModificators[textModificator].processText(customText);

        Local.SetClanTag(newText);
    }

    nameStealerF.onDraw = featureManager.createTimedCallback(nameStealerFFrameStageNotify, 0.5);
})();

nameStealer.entryPoint();