var _0x3186=['Yaw\x20offset','DUCK','Rage\x20Anti-Aim','RegisterCallback','Polygon','onCreateMove','|\x20\x20Fake\x20Duck','LEFT','GENERAL','Hide\x20shots','AddHotkey','Misc','Left\x20Hotkey','drawString','Back\x20Hotkey','Hide\x20Shots\x20Disabled','Rage','Extra','Anti-Aim','Arrow\x20Background','OVERRIDE','JAVASCRIPT','Draw','LBY\x20mode','String','DMG','Fake\x20duck','|\x20\x20LBY\x20Mode','GetValue','Doubletap\x20Disabled','NORM','Script\x20Items','Zope\x27s\x20Indicators','OPPOSITE','|\x20\x20Hide\x20Shots','GetLocalPlayer','Back\x20Offset','Arrow','GetScreenSize','Accuracy','sin','Hide\x20Shots','Exploits','AddSliderInt','DOUBLETAP','IsHotkeyActive','|\x20\x20Arrow','GetColor','Left\x20Offset','Min\x20Dmg\x20Ovr','SILENT','Right\x20Hotkey','RIGHT','AddLabel','SetValue','Hide\x20real\x20angle','ONSHOT','Fake\x20angles','Fake\x20Angles','Curtime','Doubletap','Inverter','|\x20\x20Min-Dmg\x20Ovr','|\x20\x20Doubletap','Right\x20Offset','Fake\x20Duck','Min\x20Dmg\x20Ovr\x20Disabled','|\x20\x20Inverter','AddColorPicker','Script\x20items'];(function(_0x3ca783,_0x23f8ec){var _0x48a141=function(_0x1348b3){while(--_0x1348b3){_0x3ca783['push'](_0x3ca783['shift']());}};_0x48a141(++_0x23f8ec);}(_0x3186,0x1c2));var _0xdfea=function(_0x3ca783,_0x23f8ec){_0x3ca783=_0x3ca783-0x0;var _0x48a141=_0x3186[_0x3ca783];return _0x48a141;};var screen_size=Global[_0xdfea('0x8')]();var isLeftActive=UI[_0xdfea('0xf')](_0xdfea('0x33'),_0xdfea('0x3d'),_0xdfea('0x27'),'Left\x20Hotkey');var isBackActive=UI[_0xdfea('0xf')]('Misc',_0xdfea('0x3d'),'Script\x20items',_0xdfea('0x36'));var isRightActive=UI[_0xdfea('0xf')]('Misc',_0xdfea('0x3d'),_0xdfea('0x27'),'Right\x20Hotkey');var isInverted;var leftoffset;var backoffset;var rightoffset;var drawLeft=0x0;var drawBack=0x1;var drawRight=0x0;function addToMenu(){UI['AddSliderInt'](_0xdfea('0x2'),-0x1,0x0);UI[_0xdfea('0x17')](_0xdfea('0x10'));UI[_0xdfea('0x26')](_0xdfea('0x7'));UI[_0xdfea('0x26')](_0xdfea('0x3b'));UI[_0xdfea('0x17')](_0xdfea('0x43'));UI['AddColorPicker']('LBY\x20Mode');UI[_0xdfea('0x17')](_0xdfea('0x25'));UI[_0xdfea('0x26')](_0xdfea('0x1f'));UI[_0xdfea('0x17')](_0xdfea('0x21'));UI[_0xdfea('0x26')]('Doubletap');UI[_0xdfea('0x26')](_0xdfea('0x45'));UI[_0xdfea('0x17')](_0xdfea('0x20'));UI[_0xdfea('0x26')](_0xdfea('0x13'));UI[_0xdfea('0x26')]('Min\x20Dmg\x20Ovr\x20Disabled');UI[_0xdfea('0x17')](_0xdfea('0x4'));UI[_0xdfea('0x26')](_0xdfea('0xb'));UI[_0xdfea('0x26')](_0xdfea('0x37'));UI[_0xdfea('0x17')](_0xdfea('0x2e'));UI[_0xdfea('0x26')](_0xdfea('0x23'));UI['AddLabel']('|\x20\x20Arrow\x20Keys');UI[_0xdfea('0x32')](_0xdfea('0x34'));UI['AddSliderInt'](_0xdfea('0x12'),-0xb4,0xb4);UI[_0xdfea('0x32')](_0xdfea('0x36'));UI[_0xdfea('0xd')]('Back\x20Offset',-0xb4,0xb4);UI[_0xdfea('0x32')](_0xdfea('0x15'));UI[_0xdfea('0xd')](_0xdfea('0x22'),-0xb4,0xb4);UI[_0xdfea('0xd')]('',-0x1,0x0);}LPx=[screen_size[0x0]/0x2-0x28,screen_size[0x1]/0x2+0xa];LPy=[screen_size[0x0]/0x2-0x28,screen_size[0x1]/0x2-0xa];LPz=[screen_size[0x0]/0x2-0x3c,screen_size[0x1]/0x2];LPxx=[screen_size[0x0]/0x2-0x28,screen_size[0x1]/0x2+0xa];LPyy=[screen_size[0x0]/0x2-0x28,screen_size[0x1]/0x2-0xa];LPzz=[screen_size[0x0]/0x2-0x3c,screen_size[0x1]/0x2];RPx=[screen_size[0x0]/0x2+0x28,screen_size[0x1]/0x2+0xa];RPy=[screen_size[0x0]/0x2+0x28,screen_size[0x1]/0x2-0xa];RPz=[screen_size[0x0]/0x2+0x3c,screen_size[0x1]/0x2];RPxx=[screen_size[0x0]/0x2+0x28,screen_size[0x1]/0x2+0xa];RPyy=[screen_size[0x0]/0x2+0x28,screen_size[0x1]/0x2-0xa];RPzz=[screen_size[0x0]/0x2+0x3c,screen_size[0x1]/0x2];BPx=[screen_size[0x0]/0x2+0xa,screen_size[0x1]/0x2+0x28];BPy=[screen_size[0x0]/0x2-0xa,screen_size[0x1]/0x2+0x28];BPz=[screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x3c];BPxx=[screen_size[0x0]/0x2+0xa,screen_size[0x1]/0x2+0x28];BPyy=[screen_size[0x0]/0x2-0xa,screen_size[0x1]/0x2+0x28];BPzz=[screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x3c];;function drawString(){selectedA=UI[_0xdfea('0x11')](_0xdfea('0x33'),_0xdfea('0x3d'),_0xdfea('0x27'),_0xdfea('0x7'));selected_red=selectedA[0x0];selected_green=selectedA[0x1];selected_blue=selectedA[0x2];selectedAB=UI[_0xdfea('0x11')]('Misc','JAVASCRIPT',_0xdfea('0x27'),_0xdfea('0x3b'));selected_red0=selectedAB[0x0];selected_green0=selectedAB[0x1];selected_blue0=selectedAB[0x2];selected_alpha0=selectedAB[0x3];selectedLM=UI[_0xdfea('0x11')](_0xdfea('0x33'),_0xdfea('0x3d'),'Script\x20items','LBY\x20Mode');selected_red1=selectedLM[0x0];selected_green1=selectedLM[0x1];selected_blue1=selectedLM[0x2];selectedIC=UI[_0xdfea('0x11')](_0xdfea('0x33'),_0xdfea('0x3d'),_0xdfea('0x27'),_0xdfea('0x1f'));selected_red2=selectedIC[0x0];selected_green2=selectedIC[0x1];selected_blue2=selectedIC[0x2];selectedDTC=UI['GetColor'](_0xdfea('0x33'),_0xdfea('0x3d'),_0xdfea('0x27'),_0xdfea('0x1e'));selected_red3=selectedDTC[0x0];selected_green3=selectedDTC[0x1];selected_blue3=selectedDTC[0x2];selectedDTDC=UI[_0xdfea('0x11')]('Misc',_0xdfea('0x3d'),_0xdfea('0x27'),'Doubletap\x20Disabled');selected_red4=selectedDTDC[0x0];selected_green4=selectedDTDC[0x1];selected_blue4=selectedDTDC[0x2];selectedMDO=UI[_0xdfea('0x11')]('Misc',_0xdfea('0x3d'),_0xdfea('0x27'),'Min\x20Dmg\x20Ovr');selected_red5=selectedMDO[0x0];selected_green5=selectedMDO[0x1];selected_blue5=selectedMDO[0x2];selectedMDOD=UI[_0xdfea('0x11')](_0xdfea('0x33'),_0xdfea('0x3d'),_0xdfea('0x27'),_0xdfea('0x24'));selected_red6=selectedMDOD[0x0];selected_green6=selectedMDOD[0x1];selected_blue6=selectedMDOD[0x2];selectedHS=UI[_0xdfea('0x11')](_0xdfea('0x33'),'JAVASCRIPT',_0xdfea('0x27'),_0xdfea('0xb'));selected_red7=selectedHS[0x0];selected_green7=selectedHS[0x1];selected_blue7=selectedHS[0x2];selectedHSD=UI[_0xdfea('0x11')]('Misc',_0xdfea('0x3d'),_0xdfea('0x27'),_0xdfea('0x37'));selected_red8=selectedHSD[0x0];selected_green8=selectedHSD[0x1];selected_blue8=selectedHSD[0x2];selectedFD=UI[_0xdfea('0x11')]('Misc',_0xdfea('0x3d'),'Script\x20items','Fake\x20Duck');selected_red9=selectedFD[0x0];selected_green9=selectedFD[0x1];selected_blue9=selectedFD[0x2];const _0x2cf24d=Math[_0xdfea('0xa')](Math['abs'](-Math['PI']+Globals[_0xdfea('0x1d')]()*(0x1/0.75)%(Math['PI']*0x2)))*0xff;isHideshots=UI[_0xdfea('0xf')](_0xdfea('0x38'),_0xdfea('0xc'),_0xdfea('0x31'));isFakeduck=UI['IsHotkeyActive']('Anti-Aim',_0xdfea('0x39'),_0xdfea('0x42'));isDoubletap=UI[_0xdfea('0xf')]('Rage',_0xdfea('0xc'),_0xdfea('0x1e'));isInverted=UI[_0xdfea('0xf')]('Anti-Aim',_0xdfea('0x1b'),_0xdfea('0x1f'));isDmgActive=UI['IsHotkeyActive'](_0xdfea('0x38'),_0xdfea('0x30'),_0xdfea('0x9'),'Minimum\x20damage\x20(on\x20key)');isLbyMode=UI[_0xdfea('0x44')](_0xdfea('0x3a'),_0xdfea('0x1b'),_0xdfea('0x3f'));localplayer_index=Entity[_0xdfea('0x5')]();localplayer_alive=Entity['IsAlive'](localplayer_index);if(localplayer_alive==!![]){Render['Polygon']([LPxx,LPzz,LPyy],[selected_red0,selected_green0,selected_blue0,selected_alpha0]);Render[_0xdfea('0x2c')]([RPyy,RPzz,RPxx],[selected_red0,selected_green0,selected_blue0,selected_alpha0]);Render[_0xdfea('0x2c')]([BPyy,BPxx,BPzz],[selected_red0,selected_green0,selected_blue0,selected_alpha0]);Render['String'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x51,0x1,isLbyMode?'OPPOSITE':_0xdfea('0x0'),isLbyMode?[0x0,0x0,0x0,0xff]:[0x0,0x0,0x0,0xff],0x3);Render[_0xdfea('0x40')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x5b,0x1,isInverted?'RIGHT':_0xdfea('0x2f'),isInverted?[0x0,0x0,0x0,0xff]:[0x0,0x0,0x0,0xff],0x3);Render[_0xdfea('0x40')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x65,0x1,isDoubletap?_0xdfea('0xe'):_0xdfea('0xe'),isDoubletap?[0x0,0x0,0x0,0xff]:[0x0,0x0,0x0,0xff],0x3);Render['String'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x6f,0x1,isDmgActive?_0xdfea('0x3c'):_0xdfea('0x41'),isDmgActive?[0x0,0x0,0x0,0xff]:[0x0,0x0,0x0,0xff],0x3);Render['String'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x79,0x1,isHideshots?'SILENT':_0xdfea('0x1a'),isHideshots?[0x0,0x0,0x0,0xff]:[0x0,0x0,0x0,0xff],0x3);Render[_0xdfea('0x40')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x83,0x1,isFakeduck?_0xdfea('0x29'):'',isFakeduck?[0x0,0x0,0x0,0xff]:[0x0,0x0,0x0,0x0],0x3);Render[_0xdfea('0x40')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x50,0x1,isLbyMode?_0xdfea('0x3'):_0xdfea('0x0'),[selected_red1,selected_green1,selected_blue1,0xff],0x3);Render[_0xdfea('0x40')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x5a,0x1,isInverted?_0xdfea('0x16'):_0xdfea('0x2f'),[selected_red2,selected_green2,selected_blue2,0xff],0x3);Render[_0xdfea('0x40')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x64,0x1,isDoubletap?_0xdfea('0xe'):_0xdfea('0xe'),isDoubletap?[selected_red3,selected_green3,selected_blue3,0xff]:[selected_red4,selected_green4,selected_blue4,0xff],0x3);Render[_0xdfea('0x40')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x6e,0x1,isDmgActive?_0xdfea('0x3c'):_0xdfea('0x41'),isDmgActive?[selected_red5,selected_green5,selected_blue5,0xff]:[selected_red6,selected_green6,selected_blue6,0xff],0x3);Render[_0xdfea('0x40')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x78,0x1,isHideshots?_0xdfea('0x14'):_0xdfea('0x1a'),isHideshots?[selected_red7,selected_green7,selected_blue7,0xff]:[selected_red8,selected_green8,selected_blue8,_0x2cf24d],0x3);Render['String'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x82,0x1,isFakeduck?_0xdfea('0x29'):'',isFakeduck?[selected_red9,selected_green9,selected_blue9,_0x2cf24d]:[0x0,0x0,0x0,0x0],0x3);if(drawLeft){Render['Polygon']([LPx,LPz,LPy],[selected_red,selected_green,selected_blue,_0x2cf24d]);}else if(drawBack){Render[_0xdfea('0x2c')]([BPy,BPx,BPz],[selected_red,selected_green,selected_blue,_0x2cf24d]);}else if(drawRight){Render[_0xdfea('0x2c')]([RPy,RPz,RPx],[selected_red,selected_green,selected_blue,_0x2cf24d]);}}}function onCreateMove(){isLeftActive=UI[_0xdfea('0xf')](_0xdfea('0x33'),_0xdfea('0x3d'),_0xdfea('0x27'),'Left\x20Hotkey');isRightActive=UI['IsHotkeyActive'](_0xdfea('0x33'),_0xdfea('0x3d'),_0xdfea('0x27'),_0xdfea('0x15'));isBackActive=UI[_0xdfea('0xf')](_0xdfea('0x33'),_0xdfea('0x3d'),'Script\x20items',_0xdfea('0x36'));if(isLeftActive){drawLeft=0x1;drawBack=0x0;drawRight=0x0;leftoffset=UI[_0xdfea('0x44')]('Misc','JAVASCRIPT','Script\x20Items',_0xdfea('0x12'));UI[_0xdfea('0x18')](_0xdfea('0x3a'),_0xdfea('0x2a'),_0xdfea('0x28'),leftoffset);UI[_0xdfea('0x18')](_0xdfea('0x3a'),_0xdfea('0x1c'),'Hide\x20real\x20angle',![]);}else if(isRightActive){drawLeft=0x0;drawBack=0x0;drawRight=0x1;rightoffset=UI['GetValue'](_0xdfea('0x33'),_0xdfea('0x3d'),_0xdfea('0x1'),_0xdfea('0x22'));UI[_0xdfea('0x18')]('Anti-Aim',_0xdfea('0x2a'),_0xdfea('0x28'),rightoffset);UI['SetValue'](_0xdfea('0x3a'),_0xdfea('0x1c'),'Hide\x20real\x20angle',![]);}else if(isBackActive){drawLeft=0x0;drawBack=0x1;drawRight=0x0;backoffset=UI[_0xdfea('0x44')](_0xdfea('0x33'),_0xdfea('0x3d'),_0xdfea('0x1'),_0xdfea('0x6'));UI[_0xdfea('0x18')](_0xdfea('0x3a'),_0xdfea('0x2a'),'Yaw\x20offset',backoffset);UI['SetValue'](_0xdfea('0x3a'),_0xdfea('0x1c'),_0xdfea('0x19'),![]);}}function Main(){addToMenu();Global[_0xdfea('0x2b')](_0xdfea('0x3e'),_0xdfea('0x35'));Global[_0xdfea('0x2b')]('CreateMove',_0xdfea('0x2d'));}Main();