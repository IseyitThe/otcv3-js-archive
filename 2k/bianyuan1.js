UI.AddCheckbox("Enable");
UI.AddDropdown( "RAGE", [ "ForceSafety", "MultipointScale", "Accuracy Boost", "Hitchance" ] );

UI.AddCheckbox( "safety-head" );
UI.AddCheckbox( "safety-stomach" );
UI.AddCheckbox( "safety-pelvis" );
UI.AddCheckbox( "safety-leg" );
UI.AddCheckbox( "safety-feet" );

UI.AddCheckbox("scale-head");
UI.AddSliderInt( "MultipointScale-head", 0, 100 );
UI.AddCheckbox("scale-stomach");
UI.AddSliderInt( "MultipointScale-stomach", 0, 100 );
UI.AddCheckbox("scale-pelvis");
UI.AddSliderInt( "MultipointScale-pelvis", 0, 100 );
UI.AddCheckbox("scale-leg");
UI.AddSliderInt( "MultipointScale-leg", 0, 100 );
UI.AddCheckbox("scale-feet");
UI.AddSliderInt( "MultipointScale-feet", 0, 100 );

UI.AddCheckbox("acc-head");
UI.AddSliderInt( "Accuracy Boost-head", 0, 100 );
UI.AddCheckbox("acc-stomach");
UI.AddSliderInt( "Accuracy Boost-stomach", 0, 100 );
UI.AddCheckbox("acc-pelvis");
UI.AddSliderInt( "Accuracy Boost-pelvis", 0, 100 );
UI.AddCheckbox("acc-leg");
UI.AddSliderInt( "Accuracy Boost-leg", 0, 100 );
UI.AddCheckbox("acc-feet");
UI.AddSliderInt( "Accuracy Boost-feet", 0, 100 );

UI.AddCheckbox("hit-head");
UI.AddSliderInt( "Hitchance-head", 0, 100 );
UI.AddCheckbox("hit-stomach");
UI.AddSliderInt( "Hitchance-stomach", 0, 100 );
UI.AddCheckbox("hit-pelvis");
UI.AddSliderInt( "Hitchance-pelvis", 0, 100 );
UI.AddCheckbox("hit-leg");
UI.AddSliderInt( "Hitchance-leg", 0, 100 );
UI.AddCheckbox("hit-feet");
UI.AddSliderInt( "Hitchance-feet", 0, 100 );

function safe_override_head ()
{ Ragebot.ForceSafety( 0 ) }
function safe_override_stomach ()
{ Ragebot.ForceSafety( 3 ) }
function safe_override_pelvis ()
{ Ragebot.ForceSafety( 2 ) }
function safe_override_leg ()
{ Ragebot.ForceSafety( 9 )
  Ragebot.ForceSafety( 10 )}
function safe_override_feet ()
{ Ragebot.ForceSafety( 11 )
  Ragebot.ForceSafety( 12 ) }

function run()
{
    if (UI.GetValue("Enable"))
{
	if (UI.GetValue("safety-head")) { safe_override_head() };
	if (UI.GetValue("safety-stomach")) { safe_override_stomach() };
	if (UI.GetValue("safety-pelvis")) { safe_override_pelvis() };
	if (UI.GetValue("safety-leg")) { safe_override_leg() };
	if (UI.GetValue("safety-feet")) { safe_override_feet() };
	

	
	if (UI.GetValue("scale-head")) { Ragebot.OverrideMultipointScale( 0,UI.GetValue("MultipointScale-head"))  }	;
	if (UI.GetValue("scale-stomach")) { Ragebot.OverrideMultipointScale( 3, UI.GetValue("MultipointScale-stomach"))  }	;
	if (UI.GetValue("scale-pelvis")) { Ragebot.OverrideMultipointScale( 2, UI.GetValue("MultipointScale-pelvis"))  }	;
	if (UI.GetValue("scale-leg")) { Ragebot.OverrideMultipointScale( 9, UI.GetValue("MultipointScale-leg"))
                                    Ragebot.OverrideMultipointScale( 10, UI.GetValue("MultipointScale-leg"))		}	;
	if (UI.GetValue("scale-feet")) { Ragebot.OverrideMultipointScale( 11, UI.GetValue("MultipointScale-feet"))
                                     Ragebot.OverrideMultipointScale( 12, UI.GetValue("MultipointScale-feet")) 		}	;
								 
    if (UI.GetValue("acc-head")) {Ragebot.OverrideAccuracyBoost( 0, UI.GetValue("Accuracy Boost-head") )}
	if (UI.GetValue("acc-stomach")) {Ragebot.OverrideAccuracyBoost( 3, UI.GetValue("Accuracy Boost-stomach") )}
	if (UI.GetValue("acc-pelvis")) {Ragebot.OverrideAccuracyBoost( 2, UI.GetValue("Accuracy Boost-pelvis") )}
	if (UI.GetValue("acc-leg")) {Ragebot.OverrideAccuracyBoost( 9, UI.GetValue("Accuracy Boost-leg") )
		                          Ragebot.OverrideAccuracyBoost( 10, UI.GetValue("Accuracy Boost-leg") ) }
	if (UI.GetValue("acc-feet")) {Ragebot.OverrideAccuracyBoost( 11, UI.GetValue("Accuracy Boost-feet") )
		                          Ragebot.OverrideAccuracyBoost( 12, UI.GetValue("Accuracy Boost-feet") ) }
		
		
}
}





Cheat.RegisterCallback("CreateMove", "run");



function visible ()
{


	var rage = UI.GetValue("RAGE")
	if (rage == 0) {
	UI.SetEnabled("safety-head",true)
	UI.SetEnabled("safety-stomach",true)
	UI.SetEnabled("safety-pelvis",true)
	UI.SetEnabled("safety-leg",true)
	UI.SetEnabled("safety-feet",true)
	} else{
	UI.SetEnabled("safety-head",false)
	UI.SetEnabled("safety-stomach",false)
	UI.SetEnabled("safety-pelvis",false)
	UI.SetEnabled("safety-leg",false)
	UI.SetEnabled("safety-feet",false)			
	}
	if (rage == 1) {
	UI.SetEnabled("scale-head",true)
	UI.SetEnabled("scale-stomach",true)
	UI.SetEnabled("scale-pelvis",true)
	UI.SetEnabled("scale-leg",true)
	UI.SetEnabled("scale-feet",true)	
	} else {
	UI.SetEnabled("scale-head",false)
	UI.SetEnabled("scale-stomach",false)
	UI.SetEnabled("scale-pelvis",false)
	UI.SetEnabled("scale-leg",false)
	UI.SetEnabled("scale-feet",false)			
	}
	if ( rage == 1 && UI.GetValue("scale-head"))    { UI.SetEnabled("MultipointScale-head",true) }   else { UI.SetEnabled("MultipointScale-head",false)}
	if ( rage == 1 && UI.GetValue("scale-stomach")) { UI.SetEnabled("MultipointScale-stomach",true)} else { UI.SetEnabled("MultipointScale-stomach",false)}
	if ( rage == 1 && UI.GetValue("scale-pelvis")) { UI.SetEnabled("MultipointScale-pelvis",true)} else { UI.SetEnabled("MultipointScale-pelvis",false)}
	if ( rage == 1 && UI.GetValue("scale-leg")) { UI.SetEnabled("MultipointScale-leg",true)} else { UI.SetEnabled("MultipointScale-leg",false)}
	if ( rage == 1 && UI.GetValue("scale-feet")) { UI.SetEnabled("MultipointScale-feet",true)} else { UI.SetEnabled("MultipointScale-feet",false)}
    if (rage == 2) {
	UI.SetEnabled("acc-head",true)	
	UI.SetEnabled("acc-stomach",true)
	UI.SetEnabled("acc-pelvis",true)
	UI.SetEnabled("acc-leg",true)
	UI.SetEnabled("acc-feet",true)		
	} else {
	UI.SetEnabled("acc-head",false)	
	UI.SetEnabled("acc-stomach",false)
	UI.SetEnabled("acc-pelvis",false)
	UI.SetEnabled("acc-leg",false)
	UI.SetEnabled("acc-feet",false)			
	}
	if ( rage == 2 && UI.GetValue("acc-head") ) { UI.SetEnabled("Accuracy Boost-head",true) } else {UI.SetEnabled("Accuracy Boost-head",false)}
	if ( rage == 2 && UI.GetValue("acc-stomach") ) { UI.SetEnabled("Accuracy Boost-stomach",true) } else {UI.SetEnabled("Accuracy Boost-stomach",false)}
	if ( rage == 2 && UI.GetValue("acc-pelvis") ) { UI.SetEnabled("Accuracy Boost-pelvis",true) } else {UI.SetEnabled("Accuracy Boost-pelvis",false)}
	if ( rage == 2 && UI.GetValue("acc-leg") ) { UI.SetEnabled("Accuracy Boost-leg",true) } else {UI.SetEnabled("Accuracy Boost-leg",false)}
	if ( rage == 2 && UI.GetValue("acc-feet") ) { UI.SetEnabled("Accuracy Boost-feet",true) } else {UI.SetEnabled("Accuracy Boost-feet",false)}
	if (rage == 3) {
	UI.SetEnabled("hit-head",true)
    UI.SetEnabled("hit-stomach",true)
	UI.SetEnabled("hit-pelvis",true)
	UI.SetEnabled("hit-leg",true)
	UI.SetEnabled("hit-feet",true)	
	} else {
	UI.SetEnabled("hit-head",false)
    UI.SetEnabled("hit-stomach",false)
	UI.SetEnabled("hit-pelvis",false)
	UI.SetEnabled("hit-leg",false)
	UI.SetEnabled("hit-feet",false)	
	}
	if ( rage == 3 && UI.GetValue("hit-head") ) { UI.SetEnabled("Hitchance-head",true) } else {UI.SetEnabled("Hitchance-head",false)}
	if ( rage == 3 && UI.GetValue("hit-stomach") ) { UI.SetEnabled("Hitchance-stomach",true) } else {UI.SetEnabled("Hitchance-stomach",false)}
	if ( rage == 3 && UI.GetValue("hit-pelvis") ) { UI.SetEnabled("Hitchance-pelvis",true) } else {UI.SetEnabled("Hitchance-pelvis",false)}
	if ( rage == 3 && UI.GetValue("hit-leg") ) { UI.SetEnabled("Hitchance-leg",true) } else {UI.SetEnabled("Hitchance-leg",false)}
	if ( rage == 3 && UI.GetValue("hit-feet") ) { UI.SetEnabled("Hitchance-feet",true) } else {UI.SetEnabled("Hitchance-feet",false)}
	
	
}

Cheat.RegisterCallback("CreateMove", "visible");

var _0xodc = 'jsjiami.com.v6',
    _0xbe9e = [_0xodc, 'E2Aqw4fDr8KyTTg=', 'w491G8KIMUY=', 'wqIHeMOJwps=', 'U8KDC8OKw6Uww71gw68=', 'w7VYTcOLwpw=', 'I8KAw790w5E=', 'f18Ke0E=', 'H8OrEcKKag==', 'W+WYreWZuuWahMK95aag54OT', 'wpjDisOpwphS', 'wqTCuHlMwqYUwro2QMOIw7rDqgTCh8Ktw7UPakE=', 'InHCoxMCw40=', 'cht+dz0=', 'L13Ds8OHwpLDvMKdwqTDn8OAVlXDpsOg', 'citkVRheQmnCh8OOQMOJSEI=', 'wrIUw7FSwpV8woTCncKWwoJGFHnCnMOvCcOxTsKp', 'wqA8wqPDjw8=', 'wqTCuHlHwqkNwrY=', 'woXDrkTDmMOL', 'L13Ds8OCwpPDqw==', 'w7I6TxLDjjfDhl0=', 'WsO3FsOhwrA=', 'DSQKwr1p', 'w4ZgZsObwrk=', 'EmNIw63CoA==', 'E8KuQE54', 'E8OncMKeDw==', 'DE07HjE=', 'NOS9quWuozk=', 'wq7Cv29MwoY=', 'wq/CvQEvw4Q=', 'IEYHd+exqOWFp+W7neS5oj0=', 'w4gow4rDuiE=', 'wpTCqXV/wq0=', 'wosTwovDpDE=', 'wpwlLemjiOmRj+acg+iuguisscKywoFA5a+NWA==', 'QeS8reWuiMKP', 'B2wfPgI=', 'w4Llmpblm7jlmr925aa554OM', 'T8KSPcK1w7Y=', 'w59IXhMJ', 'fcO6JsOLwqM0w6bCrcONwp7CuA==', 'wp0Yw7F7wpRv', 'w7oDwp/Dg03CjMOyBQQ=', 'VMKOLMOSwpUv', 'w6cawo/DgVHCiMOUDxXCoMKBwqjCtm/DqA==', 'w5XCg2xzw54mwoprw7zDpA==', 'w502TybDnyrDlkjCqjYuw7dq', 'YsKMH8K8w6PCnn/CgQ==', 'wo/DpcO/wpZ/w7rDk0k=', 'wr7DkMOnwqLDplQ6R8KBTCbDmcOJfQ==', 'w71FEkrDrWg6wqk=', 'VgbCp8Krw53CssORw6XCosKBGgzCo8KywqrDknYkfcKMwqUxwoxtPQwDSsOOw45vesOkwrTDpcOYw4A=', 'w4l0C8KCN1fDvsKQwrbClcKk', 'W8KCLMK7wpc0wqA=', 'LeWauuWYrOWamR3lpq7ngrc=', 'GOaKv+WekOS6oOiCpeWNk+S6iQ==', 'LeaLjeWcoOS4u+iDvuS7mXzlpZ3nlqXDvg==', 'YOW3r+iDiOiEpeihs+a3sueBheWVtA==', 'ReW3suiGqOeZouS7quWTpeWSjQ==', 'feaLnOWfneS6reWnheiBoeWthOS5qhM=', 'NjU3UD7CtW0=', 'w6IUccK+w5LDvnQ=', 'wqTDtHDDuFou', 'wr4MX+mhjemQkeadqOivmeiuuyXDrsON5a+dXg==', 'eOmCjOaIuuS5iw==', 'w6Lkv7nlrr4p', 'w4NQw6bDv+eysuWHmeW7s+S4kng=', 'Gn0qw4HDvsK2XTo=', 'wpXlm5blmoDlm4bCg+WkiueDnQ==', 'wpfDhsOmwpvDvA==', 'McKhamh2ByIjekk=', 'bsKlw4DCo8K8', 'w7RIAibDoGU4', 'YMKnN8Oww7A=', 'wqwAw6pgwq0=', 'w7g5w4bDmiUGw4vDoA==', 'fMK/CcOuwpQ=', 'DcKQwoxabcOMwrLCsUrDmys=', 'wpDCrWFgwrw=', 'L13Ds8OOwpPDq8KVwrzDtsOqRUPDrsOHw7nClyRNGQ==', 'SsOzM8O7wqgy', 'jHsejKiCaxfmZeiKCe.coOm.v6Dlz=='];
(function(_0x26ff82, _0x443c15, _0x39d0f9) {
    var _0x382e0a = function(_0x5d5b33, _0x4e2621, _0x308cd1, _0x1e2f2d, _0xe1fff0) {
        _0x4e2621 = _0x4e2621 >> 0x8, _0xe1fff0 = 'po';
        var _0x196da8 = 'shift',
            _0x147ebf = 'push';
        if (_0x4e2621 < _0x5d5b33) {
            while (--_0x5d5b33) {
                _0x1e2f2d = _0x26ff82[_0x196da8]();
                if (_0x4e2621 === _0x5d5b33) {
                    _0x4e2621 = _0x1e2f2d;
                    _0x308cd1 = _0x26ff82[_0xe1fff0 + 'p']();
                } else if (_0x4e2621 && _0x308cd1['replace'](/[HeKCxfZeKCeODlz=]/g, '') === _0x4e2621) {
                    _0x26ff82[_0x147ebf](_0x1e2f2d);
                }
            }
            _0x26ff82[_0x147ebf](_0x26ff82[_0x196da8]());
        }
        return 0x40ea6;
    };
    return _0x382e0a(++_0x443c15, _0x39d0f9) >> _0x443c15 ^ _0x39d0f9;
}(_0xbe9e, 0xd2, 0xd200));
var _0x3309 = function(_0x570291, _0x49badb) {
    _0x570291 = ~~'0x' ['concat'](_0x570291);
    var _0x4ba751 = _0xbe9e[_0x570291];
    if (_0x3309['Ndhcuw'] === undefined) {
        (function() {
            var _0x4afbcf = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x3a42b3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x4afbcf['atob'] || (_0x4afbcf['atob'] = function(_0x5018fd) {
                var _0x21508a = String(_0x5018fd)['replace'](/=+$/, '');
                for (var _0xf04eac = 0x0, _0x5641d1, _0x5c75f5, _0x13fe8e = 0x0, _0x4a3e07 = ''; _0x5c75f5 = _0x21508a['charAt'](_0x13fe8e++); ~_0x5c75f5 && (_0x5641d1 = _0xf04eac % 0x4 ? _0x5641d1 * 0x40 + _0x5c75f5 : _0x5c75f5, _0xf04eac++ % 0x4) ? _0x4a3e07 += String['fromCharCode'](0xff & _0x5641d1 >> (-0x2 * _0xf04eac & 0x6)) : 0x0) {
                    _0x5c75f5 = _0x3a42b3['indexOf'](_0x5c75f5);
                }
                return _0x4a3e07;
            });
        }());
        var _0x7359f4 = function(_0x4850d1, _0x49badb) {
            var _0x4c91c9 = [],
                _0x20f96d = 0x0,
                _0x3668a4, _0x515f85 = '',
                _0x37ec16 = '';
            _0x4850d1 = atob(_0x4850d1);
            for (var _0x1fde6b = 0x0, _0x5ca2cf = _0x4850d1['length']; _0x1fde6b < _0x5ca2cf; _0x1fde6b++) {
                _0x37ec16 += '%' + ('00' + _0x4850d1['charCodeAt'](_0x1fde6b)['toString'](0x10))['slice'](-0x2);
            }
            _0x4850d1 = decodeURIComponent(_0x37ec16);
            for (var _0x109456 = 0x0; _0x109456 < 0x100; _0x109456++) {
                _0x4c91c9[_0x109456] = _0x109456;
            }
            for (_0x109456 = 0x0; _0x109456 < 0x100; _0x109456++) {
                _0x20f96d = (_0x20f96d + _0x4c91c9[_0x109456] + _0x49badb['charCodeAt'](_0x109456 % _0x49badb['length'])) % 0x100;
                _0x3668a4 = _0x4c91c9[_0x109456];
                _0x4c91c9[_0x109456] = _0x4c91c9[_0x20f96d];
                _0x4c91c9[_0x20f96d] = _0x3668a4;
            }
            _0x109456 = 0x0;
            _0x20f96d = 0x0;
            for (var _0x3891f9 = 0x0; _0x3891f9 < _0x4850d1['length']; _0x3891f9++) {
                _0x109456 = (_0x109456 + 0x1) % 0x100;
                _0x20f96d = (_0x20f96d + _0x4c91c9[_0x109456]) % 0x100;
                _0x3668a4 = _0x4c91c9[_0x109456];
                _0x4c91c9[_0x109456] = _0x4c91c9[_0x20f96d];
                _0x4c91c9[_0x20f96d] = _0x3668a4;
                _0x515f85 += String['fromCharCode'](_0x4850d1['charCodeAt'](_0x3891f9) ^ _0x4c91c9[(_0x4c91c9[_0x109456] + _0x4c91c9[_0x20f96d]) % 0x100]);
            }
            return _0x515f85;
        };
        _0x3309['dFUgbd'] = _0x7359f4;
        _0x3309['eCFNSn'] = {};
        _0x3309['Ndhcuw'] = !![];
    }
    var _0x2239f3 = _0x3309['eCFNSn'][_0x570291];
    if (_0x2239f3 === undefined) {
        if (_0x3309['BNjBOd'] === undefined) {
            _0x3309['BNjBOd'] = !![];
        }
        _0x4ba751 = _0x3309['dFUgbd'](_0x4ba751, _0x49badb);
        _0x3309['eCFNSn'][_0x570291] = _0x4ba751;
    } else {
        _0x4ba751 = _0x2239f3;
    }
    return _0x4ba751;
};
var scriptitems = ('Misc', _0x3309('0', 'ahD0'), 'Script\x20items');
var height = Render[_0x3309('1', '9e]D')]()[0x1];
var hitchance = '';
UI[_0x3309('2', '7@oj')]('>>\x20\x20\x20------\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20------\x20\x20\x20<<');
UI[_0x3309('3', 'Gf[F')](_0x3309('4', '@N$z'));
UI[_0x3309('5', '^u@K')]('QQ\x3267417657');
UI['AddLabel'](_0x3309('6', 'FmO2'));
UI[_0x3309('7', '^z*p')](_0x3309('8', 'uCGe'));
hitboxes = [_0x3309('9', '%^k@'), '\x20e你狗头！', _0x3309('a', 'cQ7Z'), _0x3309('b', '%^k@'), _0x3309('c', '5TU&'), '\x20打你的右胳膊！', _0x3309('d', 'VWR^'), '\x20打到你的右腿了！', _0x3309('e', 'PMdH')];

function getHitboxName(_0x338578) {
    return hitboxes[_0x338578] || _0x3309('f', 'dBRC');
}

function hitlog() {
    var _0xed05ca = {
        'oTQuo': _0x3309('10', 'zMBX'),
        'gsAAu': _0x3309('11', '(SNM'),
        'vLOKu': function(_0x59106a, _0xefbbf2) {
            return _0x59106a(_0xefbbf2);
        },
        'REEUW': function(_0x4e5819, _0x35653b) {
            return _0x4e5819 == _0x35653b;
        },
        'kPIHN': function(_0x5ea727, _0x18f96c) {
            return _0x5ea727 + _0x18f96c;
        },
        'kjcXG': function(_0x4cd376, _0x43f36e) {
            return _0x4cd376 + _0x43f36e;
        },
        'orxBW': function(_0x39300f, _0x28dc47) {
            return _0x39300f + _0x28dc47;
        },
        'jKZSD': _0x3309('12', '4$Iq'),
        'gUJep': _0x3309('13', 'aoH5'),
        'cNOSL': _0x3309('14', '7U*H'),
        'VKrBL': function(_0x526c8c, _0x4b787d) {
            return _0x526c8c + _0x4b787d;
        },
        'ypKld': _0x3309('15', '1nax'),
        'GUnnJ': _0x3309('16', 'Uz#]'),
        'cRLtq': function(_0x3cc90c, _0x5a1696) {
            return _0x3cc90c + _0x5a1696;
        },
        'FbMyf': function(_0x2678e3, _0x5b3deb) {
            return _0x2678e3 + _0x5b3deb;
        },
        'BzZWF': function(_0x471de6, _0x7b0ea5) {
            return _0x471de6 + _0x7b0ea5;
        },
        'MbbEN': _0x3309('17', '(#Ue'),
        'EPZxc': function(_0x14399d, _0x42d2d4) {
            return _0x14399d + _0x42d2d4;
        },
        'wtxve': function(_0x307c76, _0x2ab385) {
            return _0x307c76 + _0x2ab385;
        },
        'cVUTa': function(_0x28bebb, _0x4d4b5f) {
            return _0x28bebb !== _0x4d4b5f;
        },
        'YqowV': _0x3309('18', '@N$z'),
        'WaQSv': _0x3309('19', 'XA9w'),
        'ltnEC': function(_0x50500a, _0x48af8a) {
            return _0x50500a == _0x48af8a;
        },
        'XhbXk': function(_0x170479, _0x3cac07) {
            return _0x170479 === _0x3cac07;
        },
        'RjsBx': _0x3309('1a', '5JTC'),
        'VDTEb': 'QMiCJ',
        'lzFEt': function(_0x356fd4, _0x51ca6e) {
            return _0x356fd4 + _0x51ca6e;
        },
        'BseQF': function(_0x503461, _0x4f7803) {
            return _0x503461 + _0x4f7803;
        }
    };
    if (UI['GetValue'](scriptitems, _0x3309('1b', '^u@K'))) {
        if (_0xed05ca[_0x3309('1c', 'Y93m')](_0xed05ca['YqowV'], _0xed05ca[_0x3309('1d', 'e*1o')])) {
            if (UI[_0x3309('1e', 'EEpz')](scriptitems, _0xed05ca[_0x3309('1f', 'uCGe')])) {
                var _0x4bbf7f = _0x3309('20', 'cQ7Z')[_0x3309('21', '7U*H')]('|'),
                    _0x401615 = 0x0;
                while (!![]) {
                    switch (_0x4bbf7f[_0x401615++]) {
                        case '0':
                            victim = Entity['GetName'](Entity[_0x3309('22', 'FmO2')](Event[_0x3309('23', 'irOZ')](_0xed05ca['gsAAu'])));
                            continue;
                        case '1':
                            hitgroup = _0xed05ca['vLOKu'](getHitboxName, Event['GetInt'](_0x3309('24', 'Uz#]')));
                            continue;
                        case '2':
                            damage = Event[_0x3309('25', '^z*p')]('dmg_health');
                            continue;
                        case '3':
                            if (_0xed05ca[_0x3309('26', 'Yo3)')](localPlayer, attacker)) {
                                Global[_0x3309('27', 'Y93m')](_0xed05ca[_0x3309('28', '4$Iq')](_0xed05ca[_0x3309('29', 'U*#S')](_0xed05ca['orxBW'](_0xed05ca['jKZSD'] + '敌人' + _0xed05ca[_0x3309('2a', 'R#1x')], damage), _0xed05ca['cNOSL']), hitgroup) + (_0xed05ca[_0x3309('2b', '6mOJ')](hitgroup, _0x3309('2c', 'Uz#]')) ? '' : _0xed05ca[_0x3309('2d', 'Gf[F')](_0xed05ca['ypKld'], hitchance) + ')'));
                            }
                            continue;
                        case '4':
                            attacker = Entity[_0x3309('2e', '7U*H')](Event[_0x3309('2f', 'VWR^')](_0xed05ca[_0x3309('30', 'ENcX')]));
                            continue;
                        case '5':
                            localPlayer = Entity[_0x3309('31', 'FmO2')]();
                            continue;
                    }
                    break;
                }
            }
        } else {
            localPlayer = Entity[_0x3309('32', 'ENcX')]();
            attacker = Entity[_0x3309('33', 'e*1o')](Event[_0x3309('23', 'irOZ')](_0xed05ca[_0x3309('34', 'DQAO')]));
            victim = Entity[_0x3309('35', '7U*H')](Entity['GetEntityFromUserID'](Event['GetInt'](_0xed05ca[_0x3309('36', 'zn[h')])));
            hitgroup = _0xed05ca['vLOKu'](getHitboxName, Event[_0x3309('37', 'FmO2')](_0x3309('38', '9e]D')));
            damage = Event['GetInt'](_0xed05ca[_0x3309('39', 'irOZ')]);
            if (_0xed05ca[_0x3309('3a', 'yqQQ')](localPlayer, attacker)) {
                if (_0xed05ca[_0x3309('3b', '4$Iq')](_0xed05ca[_0x3309('3c', '5TU&')], _0xed05ca['VDTEb'])) {
                    Global['PrintChat'](_0xed05ca['VKrBL'](_0xed05ca['cRLtq'](_0xed05ca['cRLtq'](_0xed05ca[_0x3309('3d', 'XA9w')](_0xed05ca['BzZWF'](_0xed05ca[_0x3309('3e', 'aoH5')], '敌人'), _0xed05ca[_0x3309('3f', 'jwf(')]), damage), _0x3309('40', 'ENcX')) + hitgroup, _0xed05ca['REEUW'](hitgroup, _0xed05ca[_0x3309('41', '7U*H')]) ? '' : _0xed05ca[_0x3309('42', 'I8@s')](_0xed05ca['wtxve'](_0x3309('43', 'ktu9'), hitchance), ')')));
                } else {
                    Global['PrintChat'](_0xed05ca[_0x3309('44', 'EEpz')](_0xed05ca[_0x3309('45', '7U*H')](_0xed05ca[_0x3309('46', 'DQAO')]("xiaossem踢你小鸡鸡：  " + '敌人' + _0xed05ca['gUJep'], damage) + _0x3309('48', '5TU&'), hitgroup), _0xed05ca[_0x3309('49', 'jwf(')](hitgroup, _0x3309('4a', 'ITIL')) ? '' : _0xed05ca[_0x3309('4b', '7@oj')](_0xed05ca['BseQF'](_0xed05ca[_0x3309('4c', 'VwoS')], hitchance), ')')));
                }
            }
        }
    }
}
Global['RegisterCallback'](_0x3309('4d', 'irOZ'), _0x3309('4e', 'e*1o'));

function updateHitchance() {
    var _0x4dd1f0 = {
        'Hgvaz': _0x3309('4f', 'RUIB')
    };
    hitchance = Event[_0x3309('50', 'uCGe')](_0x4dd1f0['Hgvaz']);
}
Cheat['RegisterCallback']('ragebot_fire', _0x3309('51', 'RUIB'));;
_0xodc = 'jsjiami.com.v6';

Global.PrintChat("[onetap] 欢迎使用")
Global.PrintChat("[onetap] 正在加载潇森顶级参数 ")
Global.PrintChat("[onetap] loading...      ")
Global.PrintChat("[onetap] 加载成功~  ")
Global.PrintChat("[onetap] 感谢您的支持 ")

const clantag = ""; 
var last_time = 0;

function onDraw()
{
    const now = Math.round(Globals.Curtime() * 2);
    
    if (now === last_time)
        return;
    
    last_time = now;

    const iterator = Math.abs(-clantag.length + (now) % (clantag.length * 2)) + 1;
    const tag = clantag.slice(0, -iterator);

    Local.SetClanTag(tag);
}

Cheat.RegisterCallback("Draw", "onDraw");
