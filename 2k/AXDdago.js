UI.AddLabel("Script made by AL3gz"); 



UI.AddSliderInt("Double tap speed", 0, 3);

function can_shift_shot(ticks_to_shift) {
    var me = Entity.GetLocalPlayer();
    var wpn = Entity.GetWeapon(me);

    if (me == null || wpn == null)
        return false;

    var tickbase = Entity.GetProp(me, "CCSPlayer", "m_nTickBase");
    var curtime = Globals.TickInterval() * (tickbase-ticks_to_shift)

    if (curtime < Entity.GetProp(me, "CCSPlayer", "m_flNextAttack"))
        return false;

    if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
        return false;

    return true;
}

function _TBC_CREATE_MOVE() {
    var is_charged = Exploit.GetCharge()
    var reserve = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Double tap speed")

    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()

    if (can_shift_shot(14) && is_charged != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    }

    Exploit.OverrideTolerance(reserve);
    Exploit.OverrideShift(14-reserve);
}

function _TBC_UNLOAD() {
    Exploit.EnableRecharge();
}

Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");




function collect_keys(tbl, custom) {
    var keys = Object.keys( tbl ).sort();
 
    if ( custom ) {
        keys.unshift( "Disabled" );
        keys.push( "Custom" );
    }
 
    return keys;
}
 

var tags = {
    "fanta" : "sippin' fanta",
    "hydra" : "�hydra.cc�",
    "Flyingwar" : "flyingware v4 ",
    "aimjunkies" : "AIMJUNKIES.COM",
    "Gamesense": "gamesense",
    "uwu": "UWUware.nyet",
};
 
var tag = "";
var tag_is_dirty = false;
var tag_index = 0;
var tag_length = 0;
var tag_reverse = 0;
var tag_last_index = 0;
var time_last_update = 0;
 
var update_after = Globals.Curtime();
 
var commands = 0;
 

function staticTag() {
    if (tag == "Disabled") return;
 
    if ( tag_is_dirty ) {
        Local.SetClanTag( tag );
        tag_is_dirty = false;
    }
}
 
function timeTag() {
    var curTime = Globals.Curtime();
    if ( curTime - time_last_update < 1 ) return;
    time_last_update = curTime;
 
    var curDate = new Date();
    var hours = curDate.getHours() + "";
    if ( hours.length == 1 ) hours = "0" + hours;
    var minutes = curDate.getMinutes() + "";
    if ( minutes.length == 1 ) minutes = "0" + minutes;
    var seconds = curDate.getSeconds() + "";
    if ( seconds.length == 1 ) seconds = "0" + seconds;
 
    var time_tag = hours + ":" + minutes + ":" + seconds;
    Local.SetClanTag( time_tag );
}
 
function defaultTag() {
    if (tag_index == tag_last_index) return;
    Local.SetClanTag( tag_index == 0 ? "\0" : tag.substr( 0, tag_index ) );
}
 
function reverseTag() {
    if ( tag_index == tag_last_index ) return;
 
    if ( tag_reverse <= tag_length ) {
        Local.SetClanTag( tag.substr( 0, tag_index ) );
    } else {
        Local.SetClanTag( (tag_length - tag_index == 0) ? "\0" : tag.substr( 0, tag_length - tag_index ) );
    }
}
 
function loopTag() {
    if ( tag_index == tag_last_index ) return;
 
    var result = "";
    var loop_tag = tag;
 
    for ( var i = 0; i <= tag_index; i++ ) {
        loop_tag = loop_tag + loop_tag.substr( 0, 1 );
        loop_tag = loop_tag.substr( 1, loop_tag.length );
    }
 
    Local.SetClanTag( loop_tag );
}
 
function killDickTag() {
    // Update once every 0.3 seconds
    var curTime = Globals.Curtime();
    if ( curTime - time_last_update < 0.3 ) return;
    time_last_update = curTime;
 

    var maxAmount = getUIValue( menu.killDickLength, "text" );
 
    if ( [ "a", "t", "e" ].some(function(el) { return maxAmount.toLowerCase() == el; }) ) {
        var selector = maxAmount.toLowerCase();
        var playerEntities = selector == "a"
            ? Entity.GetPlayers() // all
            : selector == "t"
                ? Entity.GetPlayers().filter(function(e) { return Entity.IsTeammate(e); }) // teammates
                : Entity.GetPlayers().filter(function(e) { return !Entity.IsTeammate(e); }); // enemies
 
        maxAmount = Math.max.apply( Math, playerEntities.map(function(e) { return Entity.GetProp( e, "CPlayerResource", "m_iKills" ); }) );
    } else {
        maxAmount = parseInt( maxAmount );
        maxAmount = (maxAmount <= 0 || isNaN( maxAmount )) ? 1 : maxAmount;
    }
 
    
    var playerEntity = Entity.GetLocalPlayer();
    var kills = Entity.GetProp( playerEntity, "CPlayerResource", "m_iKills" );
 
    
    var p = kills / maxAmount;
    if ( p > 1 ) p = 1;
 
    
    var shaftAmount = Math.floor( p * 12 );
 
    Local.SetClanTag( "8" + "=".repeat( shaftAmount + 1 ) + "D" );
}
 
var animations = {
    "Static"  : staticTag,
    "Clock"   : timeTag,
    "Default" : defaultTag,
    "Reverse" : reverseTag,
    "Classic" : loopTag,
    "Loop"    : loopTag,
    "Killdick": killDickTag // :^)
};
 

 
function uiTransform(key, value) {
    var t = {
        "Animation" : function(value) { // index => name, name => index
            if ( typeof value == "string" ) {
                return collect_keys( animations, false ).indexOf( value );
            }
 
            return collect_keys( animations, false )[ value ];
        },
        "Tags" : function(value) { // index => name, name => index
            if ( typeof value == "string" ) {
                return collect_keys( tags, true )[ value ].indexOf( value );
            }
 
            return collect_keys( tags, true )[ value ];
        }
    };
 
    if ( t[ key ] ) return t[ key ]( value );
    return value;
}
 
function setUIValue(key, value) {
    //Global.Print( "SetValue: " + key + " to " + value + "\n" );
    UI.SetValue( "Misc", "JAVASCRIPT", "Script items", "[TC] " + key, value );
}
 
function getUIValue(key, type) {
    type = type || "default";
    var raw = null;
 
    if ( type == "default" ) raw = UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "[TC] " + key );
    if ( type == "text" ) {
        raw = UI.GetString( "Misc", "JAVASCRIPT", "Script items", "[TC] " + key );
        if ( !raw || !raw.length ) raw = "\0";
    }
 
    var val = uiTransform( key, raw );
    //Global.Print( "GetValue: " + key + " got " + val + "\n" );
    return val;
}
 
function setUIEnabled(key, value) {
    //Global.Print( "SetEnabled: " + key + " to " + value + "\n" );
    UI.SetEnabled( "Misc", "JAVASCRIPT", "Script items", "[TC] " + key, value );
}
 
var menu = {
    enabled : "Tag changer",
    tags : "Tags",
    styles : "Animation",
    killDickLength : "Kill-dick max size at kill amount",
    speed : "Speed",
    text : "Text"
};
 
UI.AddCheckbox( "[TC] Tag changer" );
UI.AddDropdown( "[TC] Tags", collect_keys( tags, true ) );
UI.AddTextbox( "[TC] Text" );
UI.AddDropdown( "[TC] Animation", collect_keys( animations, false ) );
UI.AddTextbox( "[TC] " + menu.killDickLength );
UI.AddSliderInt( "[TC] Speed", 0, 100 );
setUIValue( "Speed", 40 );
 
function handle_menu(e) {
    if ( e && e.what == menu.tags && e.after == "Disabled" ) {
        Local.SetClanTag( "\0" ); // Set tag to nothing if Tags is set to Disabled.
    }
 
    var state = getUIValue( menu.enabled );
    var menu_tag = getUIValue( menu.tags );
    var tag_style = getUIValue( menu.styles );
 
    setUIEnabled( menu.tags, state );
    setUIEnabled( menu.styles, state );
    setUIEnabled( menu.speed, state );
    setUIEnabled( menu.killDickLength, state && (tag_style == "Killdick") );
    setUIEnabled( menu.text, state && (menu_tag == "Custom") );
 
    if (!state) Local.SetClanTag( "\0" );
}
 
function handle_text_change() {
    update_after = Globals.Curtime() + 1;
   
    tag_index = 0;
    tag_length = 0;
    tag_reverse = 0;
    tag_last_index = 0;
    tag_is_dirty = true;
    Local.SetClanTag( "\0" );
}
 
function handle_preset_tag_change() {
    tag_is_dirty = true;
}
 
handle_menu()
 

var listeners = {};
 
function listenerCheck() {
    Object.keys( listeners ).forEach(function(key) {
        var v = getUIValue( key, listeners[ key ].type );
        if ( v != listeners[ key ].currentValue ) {
            listeners[ key ].callbacks.forEach(function(cb) {
                cb({ before : listeners[ key ].currentValue, after : v, what : key });
            });
 
            listeners[ key ].currentValue = v;
        }
    });
}
 
function listen( onElement, callback, type ) {
    if ( !listeners[ onElement ] ) {
        listeners[ onElement ] = {
            callbacks : [ callback ],
            currentValue : getUIValue( onElement, type ),
            type : type || "default"
        };
    } else {
        listeners[ onElement ].callbacks.push( callback );
    }
}
 
listen( menu.enabled, handle_menu );
listen( menu.tags, handle_menu );
listen( menu.tags, handle_preset_tag_change );
listen( menu.styles, handle_menu );
listen( menu.text, handle_text_change, "text" );
 

function net_update_end() {
    if ( !getUIValue( menu.enabled ) ) return;
 
    var local_player  = Entity.GetLocalPlayer();
    var menu_tag      = getUIValue( menu.tags );
    var tag_style     = getUIValue( menu.styles );
    var update_tag    = Globals.Curtime() > update_after; //commands == 0 || Entity.IsAlive( local_player ) == false;
 
    if ( menu_tag == "Disabled" ) return;
 
    tag         = (menu_tag == "Custom") ? getUIValue( menu.text, "text" ).substr(0,15) : tags[ menu_tag ]; // clip to max length of 15 characters
 
    //Global.Print( "tag: " + tag + " style: " + tag_style + " update_tag: " + (update_tag ? "yes" : "no") + " local_player: " + local_player + "\n" );
 
    if ( tag_style == "Classic" && tag.length < 6 ) {
        // Work-around for classic animation. Couldn't figure out why this behaves oddly when it has less than 6 characters and right now I can't look into it :)
        tag = tag + (" ".repeat( 6 - tag.length ));
    }
 
    tag         = (tag_style == "Loop") ? tag + " " : tag;
    tag         = (tag_style == "Classic") ? (tag + " ".repeat( Math.floor( tag.length * 2 ) )) : tag;
    tag_length  = tag.length;
    tag_index   = Math.floor( ( Globals.Curtime() * getUIValue( menu.speed ) / 10 ) % tag_length + 1 );
    tag_reverse = Math.floor( ( Globals.Curtime() * getUIValue( menu.speed ) / 10 ) % ( tag_length * 2 ) + 1 );
 
    if ( !update_tag ) return;
 
    var animation = animations[ tag_style ];
    animation();
 
    tag_last_index = tag_index;
}
 

 
/*
local function shutdown()
    client_set_clan_tag("\0")
end
*/
 
function onFrameStageNotify() {
    if ( Cheat.FrameStage() == 1 ) listenerCheck();
    if ( Cheat.FrameStage() == 4 ) net_update_end();
}
 
Cheat.RegisterCallback( "FrameStageNotify", "onFrameStageNotify" );
 
UI.AddLabel("slow walk modifier"); 


Cheat.RegisterCallback("CreateMove", "cMove");
UI.AddHotkey("Slow-walk:");

UI.AddSliderInt("Speed:", 0, 135);

UI.AddCheckbox("Individual speeds:", 0, 135);

UI.AddSliderInt("Forward Speed:", 0, 135);
UI.AddSliderInt("Side Speed:", 0, 135);
UI.AddSliderInt("Back Speed:", 0, 135);


function getVal(valName) {return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valName);}

function cMove() {
    //forward, side, up.
    if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Slow-walk:")) return;

    speed = getVal("Speed:");

    fSpeed = speed;
    bSpeed = speed;
    sSpeed = speed;

    if (getVal("Individual speeds:")) {
        fSpeed = getVal("Forward Speed:");
        bSpeed = getVal("Back Speed:");
        sSpeed = getVal("Side Speed:");
    }

    dir = [0, 0, 0];

    if (Input.IsKeyPressed(0x57)) {
        //'W' AKA Forward
        dir[0] += fSpeed;
    }
    if (Input.IsKeyPressed(0x44)) {
        //'D' AKA Right
        dir[1] += sSpeed;
    }
    if (Input.IsKeyPressed(0x41)) {
        //'A' AKA Left
        dir[1] -= sSpeed;
    }
    if (Input.IsKeyPressed(0x53)) {
        //'S' AKA Back
        dir[0] -= bSpeed;
    }

    UserCMD.SetMovement(dir);
}




(function defineMustache(global,factory){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){factory(exports)}else if(typeof define==="function"&&define.amd){define(["exports"],factory)}else{global.Mustache={};factory(global.Mustache)}})(this,function mustacheFactory(mustache){var objectToString=Object.prototype.toString;var isArray=Array.isArray||function isArrayPolyfill(object){return objectToString.call(object)==="[object Array]"};function isFunction(object){return typeof object==="function"}function typeStr(obj){return isArray(obj)?"array":typeof obj}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hasProperty(obj,propName){return obj!=null&&typeof obj==="object"&&propName in obj}function primitiveHasOwnProperty(primitive,propName){return primitive!=null&&typeof primitive!=="object"&&primitive.hasOwnProperty&&primitive.hasOwnProperty(propName)}var regExpTest=RegExp.prototype.test;function testRegExp(re,string){return regExpTest.call(re,string)}var nonSpaceRe=/\S/;function isWhitespace(string){return!testRegExp(nonSpaceRe,string)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(string){return String(string).replace(/[&<>"'`=\/]/g,function fromEntityMap(s){return entityMap[s]})}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){if(!template)return[];var lineHasNonSpace=false;var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;var indentation="";var tagIndex=0;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length)delete tokens[spaces.pop()]}else{spaces=[]}hasTag=false;nonSpace=false}var openingTagRe,closingTagRe,closingCurlyRe;function compileTags(tagsToCompile){if(typeof tagsToCompile==="string")tagsToCompile=tagsToCompile.split(spaceRe,2);if(!isArray(tagsToCompile)||tagsToCompile.length!==2)throw new Error("Invalid tags: "+tagsToCompile);openingTagRe=new RegExp(escapeRegExp(tagsToCompile[0])+"\\s*");closingTagRe=new RegExp("\\s*"+escapeRegExp(tagsToCompile[1]));closingCurlyRe=new RegExp("\\s*"+escapeRegExp("}"+tagsToCompile[1]))}compileTags(tags||mustache.tags);var scanner=new Scanner(template);var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(openingTagRe);if(value){for(var i=0,valueLength=value.length;i<valueLength;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length);indentation+=chr}else{nonSpace=true;lineHasNonSpace=true;indentation+=" "}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n"){stripSpace();indentation="";tagIndex=0;lineHasNonSpace=false}}}if(!scanner.scan(openingTagRe))break;hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe)}else if(type==="{"){value=scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type="&"}else{value=scanner.scanUntil(closingTagRe)}if(!scanner.scan(closingTagRe))throw new Error("Unclosed tag at "+scanner.pos);if(type==">"){token=[type,value,start,scanner.pos,indentation,tagIndex,lineHasNonSpace]}else{token=[type,value,start,scanner.pos]}tagIndex++;tokens.push(token);if(type==="#"||type==="^"){sections.push(token)}else if(type==="/"){openSection=sections.pop();if(!openSection)throw new Error('Unopened section "'+value+'" at '+start);if(openSection[1]!==value)throw new Error('Unclosed section "'+openSection[1]+'" at '+start)}else if(type==="name"||type==="{"||type==="&"){nonSpace=true}else if(type==="="){compileTags(value)}}stripSpace();openSection=sections.pop();if(openSection)throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);return nestTokens(squashTokens(tokens))}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3]}else{squashedTokens.push(token);lastToken=token}}}return squashedTokens}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token)}}return nestedTokens}function Scanner(string){this.string=string;this.tail=string;this.pos=0}Scanner.prototype.eos=function eos(){return this.tail===""};Scanner.prototype.scan=function scan(re){var match=this.tail.match(re);if(!match||match.index!==0)return"";var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string};Scanner.prototype.scanUntil=function scanUntil(re){var index=this.tail.search(re),match;switch(index){case-1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index)}this.pos+=match.length;return match};function Context(view,parentContext){this.view=view;this.cache={".":this.view};this.parent=parentContext}Context.prototype.push=function push(view){return new Context(view,this)};Context.prototype.lookup=function lookup(name){var cache=this.cache;var value;if(cache.hasOwnProperty(name)){value=cache[name]}else{var context=this,intermediateValue,names,index,lookupHit=false;while(context){if(name.indexOf(".")>0){intermediateValue=context.view;names=name.split(".");index=0;while(intermediateValue!=null&&index<names.length){if(index===names.length-1)lookupHit=hasProperty(intermediateValue,names[index])||primitiveHasOwnProperty(intermediateValue,names[index]);intermediateValue=intermediateValue[names[index++]]}}else{intermediateValue=context.view[name];lookupHit=hasProperty(context.view,name)}if(lookupHit){value=intermediateValue;break}context=context.parent}cache[name]=value}if(isFunction(value))value=value.call(this.view);return value};function Writer(){this.cache={}}Writer.prototype.clearCache=function clearCache(){this.cache={}};Writer.prototype.parse=function parse(template,tags){var cache=this.cache;var cacheKey=template+":"+(tags||mustache.tags).join(":");var tokens=cache[cacheKey];if(tokens==null)tokens=cache[cacheKey]=parseTemplate(template,tags);return tokens};Writer.prototype.render=function render(template,view,partials,tags){var tokens=this.parse(template,tags);var context=view instanceof Context?view:new Context(view);return this.renderTokens(tokens,context,partials,template,tags)};Writer.prototype.renderTokens=function renderTokens(tokens,context,partials,originalTemplate,tags){var buffer="";var token,symbol,value;for(var i=0,numTokens=tokens.length;i<numTokens;++i){value=undefined;token=tokens[i];symbol=token[0];if(symbol==="#")value=this.renderSection(token,context,partials,originalTemplate);else if(symbol==="^")value=this.renderInverted(token,context,partials,originalTemplate);else if(symbol===">")value=this.renderPartial(token,context,partials,tags);else if(symbol==="&")value=this.unescapedValue(token,context);else if(symbol==="name")value=this.escapedValue(token,context);else if(symbol==="text")value=this.rawValue(token);if(value!==undefined)buffer+=value}return buffer};Writer.prototype.renderSection=function renderSection(token,context,partials,originalTemplate){var self=this;var buffer="";var value=context.lookup(token[1]);function subRender(template){return self.render(template,context,partials)}if(!value)return;if(isArray(value)){for(var j=0,valueLength=value.length;j<valueLength;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate)}}else if(typeof value==="object"||typeof value==="string"||typeof value==="number"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate)}else if(isFunction(value)){if(typeof originalTemplate!=="string")throw new Error("Cannot use higher-order sections without the original template");value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null)buffer+=value}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate)}return buffer};Writer.prototype.renderInverted=function renderInverted(token,context,partials,originalTemplate){var value=context.lookup(token[1]);if(!value||isArray(value)&&value.length===0)return this.renderTokens(token[4],context,partials,originalTemplate)};Writer.prototype.indentPartial=function indentPartial(partial,indentation,lineHasNonSpace){var filteredIndentation=indentation.replace(/[^ \t]/g,"");var partialByNl=partial.split("\n");for(var i=0;i<partialByNl.length;i++){if(partialByNl[i].length&&(i>0||!lineHasNonSpace)){partialByNl[i]=filteredIndentation+partialByNl[i]}}return partialByNl.join("\n")};Writer.prototype.renderPartial=function renderPartial(token,context,partials,tags){if(!partials)return;var value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null){var lineHasNonSpace=token[6];var tagIndex=token[5];var indentation=token[4];var indentedValue=value;if(tagIndex==0&&indentation){indentedValue=this.indentPartial(value,indentation,lineHasNonSpace)}return this.renderTokens(this.parse(indentedValue,tags),context,partials,indentedValue)}};Writer.prototype.unescapedValue=function unescapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return value};Writer.prototype.escapedValue=function escapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return mustache.escape(value)};Writer.prototype.rawValue=function rawValue(token){return token[1]};mustache.name="mustache.js";mustache.version="3.1.0";mustache.tags=["{{","}}"];var defaultWriter=new Writer;mustache.clearCache=function clearCache(){return defaultWriter.clearCache()};mustache.parse=function parse(template,tags){return defaultWriter.parse(template,tags)};mustache.render=function render(template,view,partials,tags){if(typeof template!=="string"){throw new TypeError('Invalid template! Template should be a "string" '+'but "'+typeStr(template)+'" was given as the first '+"argument for mustache#render(template, view, partials)")}return defaultWriter.render(template,view,partials,tags)};mustache.to_html=function to_html(template,view,partials,send){var result=mustache.render(template,view,partials);if(isFunction(send)){send(result)}else{return result}};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer;return mustache});


const script = {hide:[]};
const colours = {
	white: '',
	green: '',
	blue: '',
	darkblue: '',
	darkred: '',
	gold: '',
	grey: '',
	lightgreen: '',
	lightred: '',
	lime: '',
	orchid: '',
	yellow: '   ',
	palered: ''
}

script.init = function(){
	UI.AddCheckbox('Kill Message')
	UI.AddTextbox('Template');
	script.hide.push('Template')
	var HelpLabels = [
		'Template Tags:',
		'{n} Your name',
		'{v} Victims Name',
		'{a} Assists Name',
		'{kda.k} Victims Kills',
		'{kda.d} Victims Deaths',
		'{kda.a} Victims Assists',
		'{w} Weapon Name',
		'{s} Suicide (Boolean)',
		'{ivb} Is Victim Bot? (Boolean)',
		'{iab} Is Assist Bot? (Boolean)',
		'{hs} Headshot (Boolean)',
		'{p} Penetrated (Boolean)',
		'COLORS:',
		'{#c.g}text{/c.g} - Green',
		'{#c.b}text{/c.b} - Blue',
		'{#c.db}text{/c.db} - Dark Blue',
		'{#c.dr}text{/c.dr} - Dark Red',
		'{#c.gl}text{/c.gl} - Gold',
		'{#c.gr}text{/c.gr} - Grey',
		'{#c.lg}text{/c.lg} - Light Green',
		'{#c.lr}text{/c.lr} - Light Red',
		'{#c.l}text{/c.l} - Lime',
		'{#c.o}text{/c.o} - Orchid',
		'{#c.y}text{/c.y} - Yellow',
		'{#c.pr}text{/c.pr} - Pale Red'
	];
	for ( i = 0; i < HelpLabels.length; i++ ) {
		var Label = HelpLabels[i];
		script.hide.push(Label);
		UI.AddLabel(Label);
	}
	
	Mustache.escape = function (value){
		return value;
	};
	
	Mustache.tags = ['{', '}'];

	Global.RegisterCallback('player_death', 'script.player_death');
	Global.RegisterCallback('Draw', 'script.updateVisibility');
}

script.get = {
    value(v) {
        return UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', v);
    },
    string(s) {
        return UI.GetString('Misc', 'JAVASCRIPT', 'Script items', s);
    }
}

script.set = function(s,v){
	UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', s, v);
}

script.visible = function(s,v){
	UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', s, v);
}

script.say = function(msg){
	Global.ExecuteCommand('say ' + msg)
}

script.colourFunction = function(color){

	return function(){
		return function(text, render){
			return colours[color] + render(text) + colours.white
		}
	}
}

script.player_death = function() {
	if ( !script.get.value('Kill Message') )
		return
	
	var AttackerEntity = Entity.GetEntityFromUserID(Event.GetInt('attacker')),
		VictimEntity = Entity.GetEntityFromUserID(Event.GetInt('userid')),
		AssisterEntity = Entity.GetEntityFromUserID(Event.GetInt('assister'));
	
	if ( !Entity.IsLocalPlayer(AttackerEntity) )
		return
	
	var eData = {
		n: Entity.GetName(Entity.GetLocalPlayer()), //attacker
		v: Entity.GetName(VictimEntity), //victim
		a: Entity.GetName(AssisterEntity), //assister
		kda: {k: Entity.GetProp(VictimEntity, 'CPlayerResource', 'm_iKills'), d: Entity.GetProp(VictimEntity, 'CPlayerResource', 'm_iDeaths') + 1, a: Entity.GetProp(VictimEntity, 'CPlayerResource', 'm_iAssists')},
		w: Event.GetString('weapon'), //weapon
		s: (AttackerEntity == VictimEntity), //suicide
		ivb: Entity.IsBot(VictimEntity), //isVictimBot
		iab: Entity.IsBot(AssisterEntity), //isAssisterBot
		hs: Event.GetInt('headshot'), //headshot
		d: Event.GetInt('dominated'), //dominated
		r: Event.GetInt('revenge'), //revenge
		p: (Event.GetInt('penetrated') > 0), //penetrated
		c: {
			g: script.colourFunction('green'),
			b: script.colourFunction('blue'),
			db: script.colourFunction('darkblue'),
			dr: script.colourFunction('darkred'),
			gl: script.colourFunction('gold'),
			gr: script.colourFunction('grey'),
			lg: script.colourFunction('lightgreen'),
			lr: script.colourFunction('lightred'),
			l: script.colourFunction('lime'),
			o: script.colourFunction('orchid'),
			y: script.colourFunction('yellow'),
			pr: script.colourFunction('palered')
		}
	};
	
	var output = Mustache.render(script.get.string('Template'), eData, {}, ['{', '}']);
	if ( output ) {
		script.say(output);
	} else {
		Global.Print('KILLSAY: Malformed Template, try again\n');
	}
}

script.updateVisibility = function(){
	var Toggle = (script.get.value('Kill Message') == 1) && true || false;
	for ( i = 0; i < script.hide.length; i++ ) {
		script.visible(script.hide[i], Toggle);
	}
}

script.init();

UI.AddLabel("Aspect ratio"); 




UI.AddSliderFloat( "Aspect Ratio", 0.0, 5.0 );


function aspectratio( ) {
menu_val = UI.GetValue("Aspect Ratio");
string_menu_val = menu_val.toString();

Convar.SetString ("r_aspectratio", string_menu_val );
}

Cheat.RegisterCallback( "FrameStageNotify", "aspectratio" );

