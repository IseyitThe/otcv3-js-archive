var _0x2f5b=['AddHotkey','Right Hotkey','Backwards Hotkey','AddColorPicker','Script items','IsHotkeyActive','Targeting','AWP','GetWeapon','SCOUT','Polygon','Rage Anti-Aim','GetValue','Misc','SetValue','Anti-Aim','Inverter','Fake angles','Line','sqrt','GetLocalPlayer','JAVASCRIPT','Rage','r8 revolver','desert eagle','AUTOSNIPER','Prefer body aim','awp','CHEGrenade','CSmokeGrenade','CDecoyGrenade','CC4','Minimum damage','Heavy Pistol Mindmg','GetName','GetColor','Selected arrow color','LBY mode','Delay shot','StringCustom','LEFT','RIGHT','CMolotovGrenade','CIncendiaryGrenade','GENERAL','CKnife','usp s','p250','ONSHOT','SAFE','DELAY','BAIM','Yaw offset','At targets','Tickcount','General','GetInt','                 Real-Peek            ','lelysh','CreateMove','Minimum damage override','Auto Mindmg','onCreateMove','Safe_Head'];var _0x4a5e=function(_0x2f5bd9,_0x4a5e48){_0x2f5bd9=_0x2f5bd9-0x0;var _0x4538=_0x2f5b[_0x2f5bd9];return _0x4538;};var time,delay,fillbar,shotsfired,screen_size=Global['GetScreenSize']();setup1(),UI['AddHotkey']('Left Hotkey'),UI[_0x4a5e('0x0')](_0x4a5e('0x1')),UI['AddHotkey'](_0x4a5e('0x2')),UI['AddHotkey']('Forwards Hotkey'),UI[_0x4a5e('0x3')]('Selected arrow color'),UI[_0x4a5e('0x3')]('Arrow color'),UI['AddCheckbox']('Safe AWP');var isLeftActive=UI['IsHotkeyActive']('Misc','JAVASCRIPT',_0x4a5e('0x4'),'Left Hotkey'),isRightActive=UI['IsHotkeyActive']('Misc','JAVASCRIPT',_0x4a5e('0x4'),'Right Hotkey'),isBackwardsActive=UI['IsHotkeyActive']('Misc','JAVASCRIPT','Script items',_0x4a5e('0x2')),isForwardsActive=UI[_0x4a5e('0x5')]('Misc','JAVASCRIPT','Script items','Forwards Hotkey'),isInverted,drawLeft=0x0;drawHideReal=0x0;var drawRight=0x0,drawBack=0x0,leftWasPressed=![],rightWasPressed=![],backWasPressed=![],upWasPressed=![],prefer_safe_backup=![],heavy_cache=UI['GetValue']('Rage','HEAVY PISTOL',_0x4a5e('0x6'),'Minimum damage'),scout_cache=UI['GetValue']('Rage','SCOUT','Targeting','Minimum damage'),awp_cache=UI['GetValue']('Rage',_0x4a5e('0x7'),'Targeting','Minimum damage'),auto_cache=UI['GetValue']('Rage','AUTOSNIPER','Targeting','Minimum damage'),weapon_name_ds=Entity['GetName'](Entity[_0x4a5e('0x8')](Entity['GetLocalPlayer']())),heavy_cache_ds=UI['GetValue']('Rage','HEAVY PISTOL','Targeting','Minimum damage'),scout_cache_ds=UI['GetValue']('Rage',_0x4a5e('0x9'),'Targeting','Minimum damage'),auto_cache_ds=UI['GetValue']('Rage','AUTOSNIPER','Targeting','Minimum damage');function render_arc(_0x19d903,_0x2ab911,_0x3cc5fe,_0x1261a9,_0x470f78,_0x4efcb5,_0x1e4ff1,_0x8af217){while(0x1f4%_0x1e4ff1!=0x0){_0x1e4ff1++;}_0x1e4ff1=0x1f4/_0x1e4ff1;for(var _0x4dd6cb=_0x470f78;_0x4dd6cb<_0x470f78+_0x4efcb5;_0x4dd6cb=_0x4dd6cb+_0x1e4ff1){var _0x222ce6=_0x4dd6cb*Math['PI']/0xb4,_0x177c8f=(_0x4dd6cb+_0x1e4ff1)*Math['PI']/0xb4,_0x3cbca5=Math['cos'](_0x222ce6),_0x375c15=Math['sin'](_0x222ce6),_0x39d757=Math['cos'](_0x177c8f),_0xd87700=Math['sin'](_0x177c8f),_0x2b49bd=_0x19d903+_0x3cbca5*_0x3cc5fe,_0x1ce29a=_0x2ab911+_0x375c15*_0x3cc5fe,_0x459b28=_0x19d903+_0x39d757*_0x3cc5fe,_0x2046e2=_0x2ab911+_0xd87700*_0x3cc5fe,_0x46ccf8=_0x19d903+_0x3cbca5*_0x1261a9,_0x56ec13=_0x2ab911+_0x375c15*_0x1261a9,_0x2f4e1b=_0x19d903+_0x39d757*_0x1261a9,_0x4903e4=_0x2ab911+_0xd87700*_0x1261a9;Render[_0x4a5e('0xa')]([[_0x2b49bd,_0x1ce29a],[_0x459b28,_0x2046e2],[_0x46ccf8,_0x56ec13]],_0x8af217),Render[_0x4a5e('0xa')]([[_0x46ccf8,_0x56ec13],[_0x459b28,_0x2046e2],[_0x2f4e1b,_0x4903e4]],_0x8af217);}}var jitter_cache=UI['GetValue']('Anti-Aim','Rage Anti-Aim','Jitter offset'),yaw_cache=UI['GetValue']('Anti-Aim',_0x4a5e('0xb'),'Yaw offset');UI['AddCheckbox']('Safe head');function Safe_Head(){localplayer_index=Entity['GetLocalPlayer'](),UI[_0x4a5e('0xc')](_0x4a5e('0xd'),'JAVASCRIPT','Script items','Safe head')&&isSlowwalk==0x1?(UI[_0x4a5e('0xe')](_0x4a5e('0xf'),'Rage Anti-Aim','Yaw offset',0xa),UI['SetValue'](_0x4a5e('0xf'),_0x4a5e('0xb'),'Jitter offset',0x0),AntiAim['SetOverride'](0x1),AntiAim['SetFakeOffset'](0x0),AntiAim['SetRealOffset'](-0x14)):(UI['SetValue']('Anti-Aim','Rage Anti-Aim','Jitter offset',jitter_cache),AntiAim['SetOverride'](0x0));}var inverter={'get':function(){return UI['IsHotkeyActive']('Anti-Aim','Fake angles',_0x4a5e('0x10'));},'reverse':function(){return UI['ToggleHotkey'](_0x4a5e('0xf'),_0x4a5e('0x11'),'Inverter');}};function deg2rad(_0x36b442){return _0x36b442*Math['PI']/0xb4;}function angle_to_vec(_0x2a4025,_0x3ff2dc){var _0xdaff6f=deg2rad(_0x2a4025),_0x9fe275=deg2rad(_0x3ff2dc),_0x44b93e=Math['sin'](_0xdaff6f),_0x311a25=Math['cos'](_0xdaff6f),_0x5eec3b=Math['sin'](_0x9fe275),_0x3197ff=Math['cos'](_0x9fe275);return[_0x311a25*_0x3197ff,_0x311a25*_0x5eec3b,-_0x44b93e];}function trace(_0x4c84ff,_0x510ef8){var _0x1b3021=angle_to_vec(_0x510ef8[0x0],_0x510ef8[0x1]),_0x3c9eb4=Entity['GetRenderOrigin'](_0x4c84ff);_0x3c9eb4[0x2]+=0x32;var _0x41bf24=[_0x3c9eb4[0x0]+_0x1b3021[0x0]*0x2000,_0x3c9eb4[0x1]+_0x1b3021[0x1]*0x2000,_0x3c9eb4[0x2]+_0x1b3021[0x2]*0x2000],_0x3e83dd=Trace[_0x4a5e('0x12')](_0x4c84ff,_0x3c9eb4,_0x41bf24);if(_0x3e83dd[0x1]==0x1)return;_0x41bf24=[_0x3c9eb4[0x0]+_0x1b3021[0x0]*_0x3e83dd[0x1]*0x2000,_0x3c9eb4[0x1]+_0x1b3021[0x1]*_0x3e83dd[0x1]*0x2000,_0x3c9eb4[0x2]+_0x1b3021[0x2]*_0x3e83dd[0x1]*0x2000];var _0x1df984=Math[_0x4a5e('0x13')]((_0x3c9eb4[0x0]-_0x41bf24[0x0])*(_0x3c9eb4[0x0]-_0x41bf24[0x0])+(_0x3c9eb4[0x1]-_0x41bf24[0x1])*(_0x3c9eb4[0x1]-_0x41bf24[0x1])+(_0x3c9eb4[0x2]-_0x41bf24[0x2])*(_0x3c9eb4[0x2]-_0x41bf24[0x2]));_0x3c9eb4=Render['WorldToScreen'](_0x3c9eb4),_0x41bf24=Render['WorldToScreen'](_0x41bf24);if(_0x41bf24[0x2]!=0x1||_0x3c9eb4[0x2]!=0x1)return;return _0x1df984;}function on_draw(){var _0x1006f6=Entity[_0x4a5e('0x14')]();if(!Entity['IsAlive'](_0x1006f6)||!UI['GetValue']('Misc',_0x4a5e('0x15'),'Script items','Freestanding Anti-Aim'))return;if(Entity['IsValid'](_0x1006f6)&&isFreestand==0x1){var _0x31b68b,_0x4bac33=Local['GetViewAngles']();left_distance=trace(_0x1006f6,[0x0,_0x4bac33[0x1]-UI[_0x4a5e('0xc')]('Misc','JAVASCRIPT','Script items','Point distance')]),right_distance=trace(_0x1006f6,[0x0,_0x4bac33[0x1]+UI['GetValue']('Misc',_0x4a5e('0x15'),_0x4a5e('0x4'),'Point distance')]);if(left_distance<right_distance){if(inverter['get']())inverter['reverse']();}if(right_distance<left_distance){if(!inverter['get']())inverter['reverse']();}}}function isActive(_0x35969c){return UI[_0x4a5e('0x5')]('Script items',_0x35969c);}function setValue(_0x693d1e,_0x4a7639){UI[_0x4a5e('0xe')](_0x4a5e('0x16'),_0x693d1e['toUpperCase'](),'Targeting','Minimum damage',_0x4a7639);}function isHeavyPistol(_0x472e66){if(_0x472e66==_0x4a5e('0x17')||_0x472e66=='desert eagle')return!![];}function isAutoSniper(_0x3ec148){if(_0x3ec148=='scar 20'||weapon_name=='g3sg1')return!![];}function correctLBYMode(){if(isDoubletap==0x1&&isHideshots==0x1)UI['SetValue'](_0x4a5e('0xf'),'Fake angles','LBY mode',0x1);else{if(isDoubletap==0x1&&(weapon_name=='five seven'||weapon_name=='glock 18'||weapon_name=='dual berettas'||weapon_name=='usp s'||weapon_name=='tec 9'||weapon_name=='p250'||weapon_name==_0x4a5e('0x18')||weapon_name=='g3sg1'||weapon_name=='scar 20'))UI['SetValue']('Anti-Aim','Fake angles','LBY mode',0x0),UI['SetValue']('Rage',_0x4a5e('0x19'),'Prefer body aim',!![]);else{if(isDoubletap==0x0)UI['SetValue']('Anti-Aim','Fake angles','LBY mode',0x1),UI['SetValue']('Rage','AUTOSNIPER',_0x4a5e('0x1a'),![]);else isDoubletap==0x1&&(localplayer_classname=='CKnife'||weapon_name=='ssg 08'||weapon_name==_0x4a5e('0x1b')||weapon_name=='r8 revolver'||localplayer_classname==_0x4a5e('0x1c')||localplayer_classname=='CMolotovGrenade'||localplayer_classname=='CIncendiaryGrenade'||localplayer_classname=='CFlashbang'||localplayer_classname==_0x4a5e('0x1d')||localplayer_classname==_0x4a5e('0x1e')||localplayer_classname=='CWeaponTaser'||localplayer_classname==_0x4a5e('0x1f'))&&UI['SetValue']('Anti-Aim','Fake angles','LBY mode',0x1);}}}var restore_values_ds=![];function delay_shot(){if(!isActive('Delay shot')){restore_values_ds?(restore_values_ds=![],setValue('HEAVY PISTOL',heavy_cache_ds),setValue('SCOUT',scout_cache_ds),setValue('AUTOSNIPER',auto_cache_ds)):(heavy_cache_ds=UI['GetValue']('Rage','HEAVY PISTOL',_0x4a5e('0x6'),'Minimum damage'),scout_cache_ds=UI[_0x4a5e('0xc')]('Rage','SCOUT','Targeting','Minimum damage'),auto_cache_ds=UI['GetValue']('Rage','AUTOSNIPER',_0x4a5e('0x6'),'Minimum damage'));return;}restore_values_ds=!![],heavy_value_ds=0x64,scout_value_ds=0x64,auto_value_ds=0x64,weapon_name_ds=Entity['GetName'](Entity['GetWeapon'](Entity['GetLocalPlayer']())),isHeavyPistol(weapon_name_ds)&&setValue('HEAVY PISTOL',heavy_value_ds),weapon_name_ds=='ssg 08'&&setValue('SCOUT',scout_value_ds),isAutoSniper(weapon_name_ds)&&setValue('AUTOSNIPER',auto_value_ds);}var restore_values=![];function override_mindmg(){if(!isActive('Minimum damage override')){restore_values?(restore_values=![],setValue('HEAVY PISTOL',heavy_cache),setValue(_0x4a5e('0x9'),scout_cache),setValue('AWP',awp_cache),setValue('AUTOSNIPER',auto_cache)):(heavy_cache=UI['GetValue']('Rage','HEAVY PISTOL',_0x4a5e('0x6'),'Minimum damage'),scout_cache=UI['GetValue']('Rage','SCOUT','Targeting','Minimum damage'),awp_cache=UI['GetValue']('Rage','AWP','Targeting','Minimum damage'),auto_cache=UI['GetValue']('Rage','AUTOSNIPER',_0x4a5e('0x6'),_0x4a5e('0x20')));return;}restore_values=!![],heavy_value=UI['GetValue']('Script items',_0x4a5e('0x21')),scout_value=UI['GetValue']('Script items','Scout Mindmg'),awp_value=UI['GetValue'](_0x4a5e('0x4'),'AWP Mindmg'),auto_value=UI['GetValue']('Script items','Auto Mindmg'),weapon_name=Entity[_0x4a5e('0x22')](Entity[_0x4a5e('0x8')](Entity[_0x4a5e('0x14')]())),isHeavyPistol(weapon_name)&&setValue('HEAVY PISTOL',heavy_value),weapon_name=='ssg 08'&&setValue(_0x4a5e('0x9'),scout_value),weapon_name=='awp'&&setValue('AWP',awp_value),isAutoSniper(weapon_name)&&setValue('AUTOSNIPER',auto_value);}function HSVtoRGB(_0x1be927,_0x43acb7,_0x2a9ad0){var _0x3d2f35,_0x4552f7,_0x4cd34e,_0x3df8c5,_0x375306,_0x273b1f,_0x1f42c7,_0x152957;_0x3df8c5=Math['floor'](_0x1be927*0x6),_0x375306=_0x1be927*0x6-_0x3df8c5,_0x273b1f=_0x2a9ad0*(0x1-_0x43acb7),_0x1f42c7=_0x2a9ad0*(0x1-_0x375306*_0x43acb7),_0x152957=_0x2a9ad0*(0x1-(0x1-_0x375306)*_0x43acb7);switch(_0x3df8c5%0x6){case 0x0:_0x3d2f35=_0x2a9ad0,_0x4552f7=_0x152957,_0x4cd34e=_0x273b1f;break;case 0x1:_0x3d2f35=_0x1f42c7,_0x4552f7=_0x2a9ad0,_0x4cd34e=_0x273b1f;break;case 0x2:_0x3d2f35=_0x273b1f,_0x4552f7=_0x2a9ad0,_0x4cd34e=_0x152957;break;case 0x3:_0x3d2f35=_0x273b1f,_0x4552f7=_0x1f42c7,_0x4cd34e=_0x2a9ad0;break;case 0x4:_0x3d2f35=_0x152957,_0x4552f7=_0x273b1f,_0x4cd34e=_0x2a9ad0;break;case 0x5:_0x3d2f35=_0x2a9ad0,_0x4552f7=_0x273b1f,_0x4cd34e=_0x1f42c7;break;}return{'r':Math['round'](_0x3d2f35*0xff),'g':Math['round'](_0x4552f7*0xff),'b':Math['round'](_0x4cd34e*0xff)};}const draw_triangle=function(_0x41e416,_0x2ea8e4,_0x42aadf,_0x448352,_0x29cad9,_0x558a1c){for(var _0x4a9f30=0x0;_0x4a9f30<_0x42aadf;_0x4a9f30++){_0x558a1c===0x1&&Render['Line'](_0x41e416+_0x4a9f30+0x1-_0x42aadf/0x2,_0x2ea8e4-_0x4a9f30/_0x29cad9+0x1,_0x41e416+_0x4a9f30+0x1-_0x42aadf/0x2,_0x2ea8e4+_0x4a9f30/_0x29cad9+0x1,_0x448352),_0x558a1c===0x2&&Render['Line'](_0x41e416-_0x4a9f30-0x1+_0x42aadf/0x2,_0x2ea8e4-_0x4a9f30/_0x29cad9+0x1,_0x41e416-_0x4a9f30-0x1+_0x42aadf/0x2,_0x2ea8e4+_0x4a9f30/_0x29cad9+0x1,_0x448352);}};function drawString(){font=Render['AddFont']('Verdana',0x7,0x226),weapon_name=Entity[_0x4a5e('0x22')](Entity['GetWeapon'](Entity['GetLocalPlayer']())),selectedcp=UI[_0x4a5e('0x23')]('Misc','JAVASCRIPT','Script items',_0x4a5e('0x24')),selected_red=selectedcp[0x0],selected_green=selectedcp[0x1],selected_blue=selectedcp[0x2],selected_alpha=selectedcp[0x3];var _0x39bfee=UI['GetColor']('Misc','JAVASCRIPT','Script items','Selected arrow color'),_0x3fcf6b=UI['GetColor'](_0x4a5e('0xd'),'JAVASCRIPT','Script items','Arrow color');const _0x18fa24=Render['GetScreenSize']()[0x0],_0xe7d00e=Render['GetScreenSize']()[0x1],_0x3b98d6=Math['sin'](Math['abs'](-Math['PI']+Globals['Curtime']()*(0x1/0.75)%(Math['PI']*0x2)))*0xff;isHideshots=UI['IsHotkeyActive'](_0x4a5e('0x16'),'Exploits','Hide shots'),isFakeduck=UI['IsHotkeyActive']('Anti-Aim','Extra','Fake duck'),isDoubletap=UI['IsHotkeyActive']('Rage','Exploits','Doubletap'),isDmgActive=UI['IsHotkeyActive']('Misc','JAVASCRIPT','Script items','Minimum damage override'),isLbyMode=UI['GetValue']('Anti-Aim','Fake angles',_0x4a5e('0x25')),isSafepoints=UI['IsHotkeyActive']('Rage','GENERAL','General','Force safe point'),isDelayshot=UI['IsHotkeyActive']('Misc',_0x4a5e('0x15'),'Script items',_0x4a5e('0x26')),isBaim=UI['IsHotkeyActive']('Rage','GENERAL','General','Force body aim'),isSlowwalk=UI['IsHotkeyActive'](_0x4a5e('0xf'),'Extra','Slow walk'),isFreestand=UI[_0x4a5e('0x5')]('Misc',_0x4a5e('0x15'),'Script items','On key'),isInverter=UI['IsHotkeyActive']('Anti-Aim','Fake angles','Inverter'),isCharge=Exploit['GetCharge'](),MaxAngle=0x168*Exploit['GetCharge'](),center=Render['GetScreenSize'](),X=center[0x0]/0x2,Y=center[0x1]/0x2,localplayer_index=Entity[_0x4a5e('0x14')](),localplayer_alive=Entity['IsAlive'](localplayer_index),localplayer_weapon=Entity['GetWeapon'](localplayer_index),localplayer_classname=Entity['GetClassName'](localplayer_weapon);if(localplayer_alive==!![]){if(isSlowwalk==0x0)Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x65-0x1e,0x1,isLbyMode?'IDEAL YAW':'NORMAL YAW',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x64-0x1e,0x1,isLbyMode?'IDEAL YAW':'NORMAL YAW',[0xff,0x99,0x0,0xff],font);else isSlowwalk==0x1&&(Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x65-0x1e,0x1,'LOW DELTA',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x64-0x1e,0x1,'LOW DELTA',[0xff,0x99,0x0,0xff],font));if(isFreestand==0x0){if(isInverter==0x1)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x6f-0x1e,0x1,'LEFT',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x6e-0x1e,0x1,_0x4a5e('0x28'),[0x9e,0x81,0xef,0xff],font);else isInverter==0x0&&(Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x6f-0x1e,0x1,'RIGHT',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x6e-0x1e,0x1,_0x4a5e('0x29'),[0x9e,0x81,0xef,0xff],font));}else isFreestand==0x1&&(Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x6f-0x1e,0x1,'DYNAMIC',[0x0,0x0,0x0,0xff],font),Render[_0x4a5e('0x27')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x6e-0x1e,0x1,'DYNAMIC',[0x9e,0x81,0xef,0xff],font));isFakeduck==0x1&&(Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x5b-0x1e,0x1,'DUCK',[0x0,0x0,0x0,0xff],font),Render[_0x4a5e('0x27')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x5a-0x1e,0x1,'DUCK',[0xff,0xff,0xff,0xff],font));if(isDoubletap==0x1&&(localplayer_classname=='CKnife'||weapon_name=='ssg 08'||weapon_name=='awp'||weapon_name=='r8 revolver'||localplayer_classname==_0x4a5e('0x1c')||localplayer_classname==_0x4a5e('0x2a')||localplayer_classname==_0x4a5e('0x2b')||localplayer_classname=='CFlashbang'||localplayer_classname=='CSmokeGrenade'||localplayer_classname=='CDecoyGrenade'||localplayer_classname=='CWeaponTaser'||localplayer_classname==_0x4a5e('0x1f')))UI[_0x4a5e('0xe')]('Rage',_0x4a5e('0x2c'),'Exploits','Doubletap',![]),Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x79-0x1e,0x1,'DT (active weapon)',[0x0,0x0,0x0,_0x3b98d6],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x78-0x1e,0x1,'DT (active weapon)',[0xff,0x0,0x0,_0x3b98d6],font);else{if(isFakeduck&&(localplayer_classname==_0x4a5e('0x2d')||weapon_name=='five seven'||weapon_name=='glock 18'||weapon_name=='dual berettas'||weapon_name==_0x4a5e('0x2e')||weapon_name=='tec 9'||weapon_name==_0x4a5e('0x2f')||weapon_name=='desert eagle'||weapon_name=='g3sg1'||weapon_name=='scar 20'||weapon_name=='ssg 08'||weapon_name=='awp'||weapon_name=='r8 revolver'||localplayer_classname=='CHEGrenade'||localplayer_classname=='CMolotovGrenade'||localplayer_classname=='CIncendiaryGrenade'||localplayer_classname=='CFlashbang'||localplayer_classname=='CSmokeGrenade'||localplayer_classname=='CDecoyGrenade'||localplayer_classname=='CWeaponTaser'||localplayer_classname=='CC4'))UI['SetValue']('Rage',_0x4a5e('0x2c'),'Exploits','Doubletap',![]),Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x79-0x1e,0x1,'DT (fakeduck)',[0x0,0x0,0x0,_0x3b98d6],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x78-0x1e,0x1,'DT (fakeduck)',[0xff,0x0,0x0,_0x3b98d6],font);else{if(isDoubletap==0x1&&isHideshots==0x1)UI['SetValue'](_0x4a5e('0x16'),'GENERAL','Exploits','Doubletap',![]),Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x79-0x1e,0x1,'DT (onshot)',[0x0,0x0,0x0,_0x3b98d6],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x78-0x1e,0x1,'DT (onshot)',[0xff,0x0,0x0,_0x3b98d6],font);else{if(isDoubletap==0x1){UI[_0x4a5e('0xe')]('Rage','GENERAL','Exploits','Doubletap',!![]);if(isCharge<0x1)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x79-0x1e,0x1,'DT',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x78-0x1e,0x1,'DT',[0xff,0x0,0x0,0xff],font);else isCharge>=0x1&&(Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x79-0x1e,0x1,'DT',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x78-0x1e,0x1,'DT',[0x24,0xff,0x0,0xff],font));}else isDoubletap==0x0&&(UI['SetValue'](_0x4a5e('0x16'),_0x4a5e('0x2c'),'Exploits','Doubletap',![]),Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x79-0x1e,0x1,'DT',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x78-0x1e,0x1,'DT',[0xff,0x0,0x0,0xff],font));}}}if(isDmgActive==0x1&&isHideshots==0x1)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x8e-0x1e,0x1,'DMG',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x8d-0x1e,0x1,'DMG',[0xff,0xff,0xff,0xff],font);else isHideshots==0x0&&isDmgActive==0x1&&(Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x83-0x1e,0x1,'DMG',[0x0,0x0,0x0,0xff],font),Render[_0x4a5e('0x27')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x82-0x1e,0x1,'DMG',[0xff,0xff,0xff,0xff],font));isHideshots&&(Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x83-0x1e,0x1,'ONSHOT',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x82-0x1e,0x1,_0x4a5e('0x30'),[0x24,0xff,0x0,0xff],font));if(isSafepoints==0x1&&isDmgActive==0x0&&isHideshots==0x0)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x83-0x1e,0x1,'SAFE',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x82-0x1e,0x1,'SAFE',[0x24,0xff,0x0,0xff],font);else{if(isSafepoints==0x1&&isDmgActive==0x0&&isHideshots==0x1)Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x8e-0x1e,0x1,_0x4a5e('0x31'),[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x8d-0x1e,0x1,'SAFE',[0x24,0xff,0x0,0xff],font);else{if(isSafepoints==0x1&&isDmgActive==0x1&&isHideshots==0x0)Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x8e-0x1e,0x1,'SAFE',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x8d-0x1e,0x1,_0x4a5e('0x31'),[0x24,0xff,0x0,0xff],font);else isSafepoints==0x1&&isDmgActive==0x1&&isHideshots==0x1&&(Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x98-0x1e,0x1,'SAFE',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x97-0x1e,0x1,_0x4a5e('0x31'),[0x24,0xff,0x0,0xff],font));}}if(isDelayshot==0x1&&isSafepoints==0x0&&isDmgActive==0x0&&isHideshots==0x0)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x83-0x1e,0x1,'DELAY',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x82-0x1e,0x1,_0x4a5e('0x32'),[0xff,0xff,0xff,0xff],font);else{if(isDelayshot==0x1&&isSafepoints==0x0&&isDmgActive==0x0&&isHideshots==0x1)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x8e-0x1e,0x1,'DELAY',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x8d-0x1e,0x1,_0x4a5e('0x32'),[0xff,0xff,0xff,0xff],font);else{if(isDelayshot==0x1&&isSafepoints==0x0&&isDmgActive==0x1&&isHideshots==0x0)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x8e-0x1e,0x1,'DELAY',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x8d-0x1e,0x1,'DELAY',[0xff,0xff,0xff,0xff],font);else{if(isDelayshot==0x1&&isSafepoints==0x1&&isDmgActive==0x0&&isHideshots==0x0)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x8e-0x1e,0x1,'DELAY',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x8d-0x1e,0x1,'DELAY',[0xff,0xff,0xff,0xff],font);else{if(isDelayshot==0x1&&isSafepoints==0x0&&isDmgActive==0x1&&isHideshots==0x1)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x98-0x1e,0x1,'DELAY',[0x0,0x0,0x0,0xff],font),Render[_0x4a5e('0x27')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x97-0x1e,0x1,'DELAY',[0xff,0xff,0xff,0xff],font);else{if(isDelayshot==0x1&&isSafepoints==0x1&&isDmgActive==0x0&&isHideshots==0x1)Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x98-0x1e,0x1,'DELAY',[0x0,0x0,0x0,0xff],font),Render[_0x4a5e('0x27')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x97-0x1e,0x1,_0x4a5e('0x32'),[0xff,0xff,0xff,0xff],font);else{if(isDelayshot==0x1&&isSafepoints==0x1&&isDmgActive==0x1&&isHideshots==0x0)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x98-0x1e,0x1,'DELAY',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x97-0x1e,0x1,'DELAY',[0xff,0xff,0xff,0xff],font);else isDelayshot==0x1&&isSafepoints==0x1&&isDmgActive==0x1&&isHideshots==0x1&&(Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0xa2-0x1e,0x1,'DELAY',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0xa1-0x1e,0x1,'DELAY',[0xff,0xff,0xff,0xff],font));}}}}}}if(isBaim==0x1&&isDelayshot==0x0&&isSafepoints==0x0&&isDmgActive==0x0&&isHideshots==0x0)Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x83-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render[_0x4a5e('0x27')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x82-0x1e,0x1,_0x4a5e('0x33'),[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x0&&isSafepoints==0x0&&isDmgActive==0x0&&isHideshots==0x1)Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x8d-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x8c-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x0&&isSafepoints==0x0&&isDmgActive==0x1&&isHideshots==0x0)Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x8d-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x8c-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x0&&isSafepoints==0x1&&isDmgActive==0x0&&isHideshots==0x0)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x8d-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render[_0x4a5e('0x27')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x8c-0x1e,0x1,_0x4a5e('0x33'),[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x1&&isSafepoints==0x0&&isDmgActive==0x0&&isHideshots==0x0)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x8d-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x8c-0x1e,0x1,_0x4a5e('0x33'),[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x0&&isSafepoints==0x0&&isDmgActive==0x1&&isHideshots==0x1)Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x97-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render[_0x4a5e('0x27')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x96-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x0&&isSafepoints==0x1&&isDmgActive==0x0&&isHideshots==0x1)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x97-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x96-0x1e,0x1,_0x4a5e('0x33'),[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x1&&isSafepoints==0x0&&isDmgActive==0x0&&isHideshots==0x1)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x97-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x96-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x0&&isSafepoints==0x1&&isDmgActive==0x1&&isHideshots==0x0)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x97-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x96-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x0&&isSafepoints==0x0&&isDmgActive==0x1&&isHideshots==0x1)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x97-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x96-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x0&&isSafepoints==0x1&&isDmgActive==0x0&&isHideshots==0x1)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x97-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x96-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x1&&isSafepoints==0x0&&isDmgActive==0x0&&isHideshots==0x1)Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x97-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x96-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x0&&isSafepoints==0x1&&isDmgActive==0x1&&isHideshots==0x0)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x97-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x96-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x1&&isSafepoints==0x0&&isDmgActive==0x1&&isHideshots==0x0)Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x97-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x96-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x1&&isSafepoints==0x1&&isDmgActive==0x0&&isHideshots==0x0)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0x97-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render[_0x4a5e('0x27')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0x96-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x1&&isSafepoints==0x1&&isDmgActive==0x1&&isHideshots==0x0)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0xa1-0x1e,0x1,_0x4a5e('0x33'),[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0xa0-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x1&&isSafepoints==0x1&&isDmgActive==0x0&&isHideshots==0x1)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0xa1-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0xa0-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x1&&isSafepoints==0x0&&isDmgActive==0x1&&isHideshots==0x1)Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0xa1-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0xa0-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x0&&isSafepoints==0x1&&isDmgActive==0x1&&isHideshots==0x1)Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0xa1-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0xa0-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x1&&isSafepoints==0x1&&isDmgActive==0x0&&isHideshots==0x1)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0xa1-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0xa0-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x1&&isSafepoints==0x1&&isDmgActive==0x1&&isHideshots==0x0)Render[_0x4a5e('0x27')](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0xa1-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render[_0x4a5e('0x27')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0xa0-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x0&&isSafepoints==0x1&&isDmgActive==0x1&&isHideshots==0x1)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0xa1-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0xa0-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x1&&isSafepoints==0x0&&isDmgActive==0x1&&isHideshots==0x1)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0xa1-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render[_0x4a5e('0x27')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0xa0-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else{if(isBaim==0x1&&isDelayshot==0x1&&isSafepoints==0x1&&isDmgActive==0x1&&isHideshots==0x0)Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0xa1-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render[_0x4a5e('0x27')](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0xa0-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font);else isBaim==0x1&&isDelayshot==0x1&&isSafepoints==0x1&&isDmgActive==0x1&&isHideshots==0x1&&(Render['StringCustom'](screen_size[0x0]/0x2+0x1,screen_size[0x1]/0x2+0xab-0x1e,0x1,'BAIM',[0x0,0x0,0x0,0xff],font),Render['StringCustom'](screen_size[0x0]/0x2,screen_size[0x1]/0x2+0xaa-0x1e,0x1,'BAIM',[0xe0,0x63,0x3c,0xff],font));}}}}}}}}}}}}}}}}}}}}}}}draw_triangle(_0x18fa24/0x2-0x4b,_0xe7d00e/0x2,0x14,_0x3fcf6b,0x2,0x1),draw_triangle(_0x18fa24/0x2+0x4b,_0xe7d00e/0x2,0x14,_0x3fcf6b,0x2,0x2),correctLBYMode(),drawLeft==0x1&&draw_triangle(_0x18fa24/0x2-0x4b,_0xe7d00e/0x2,0x14,[selected_red,selected_green,selected_blue,_0x3b98d6],0x2,0x1),drawRight==0x1&&draw_triangle(_0x18fa24/0x2+0x4b,_0xe7d00e/0x2,0x14,[selected_red,selected_green,selected_blue,_0x3b98d6],0x2,0x2);}}var oldTick=0x0,lastPressed=0x0,IsAtTargetActive=![];function onCreateMove(){override_mindmg(),isLeftActive=UI['IsHotkeyActive']('Misc','JAVASCRIPT','Script items','Left Hotkey'),isRightActive=UI[_0x4a5e('0x5')]('Misc','JAVASCRIPT','Script items','Right Hotkey'),isBackwardsActive=UI['IsHotkeyActive'](_0x4a5e('0xd'),'JAVASCRIPT',_0x4a5e('0x4'),'Backwards Hotkey'),isForwardsActive=UI[_0x4a5e('0x5')]('Misc','JAVASCRIPT',_0x4a5e('0x4'),'Forwards Hotkey');if(isLeftActive&&leftWasPressed==![])lastPressed=Global['Tickcount'](),IsAtTargetActive=![],leftWasPressed=!![],backWasPressed=![],rightWasPressed=![],upWasPressed=![],drawLeft=0x1,drawBack=0x0,drawRight=0x0,UI['SetValue']('Anti-Aim','Rage Anti-Aim',_0x4a5e('0x34'),-0x5a),UI[_0x4a5e('0xe')]('Anti-Aim','Rage Anti-Aim','At targets',![]);else isLeftActive&&leftWasPressed==!![]&&Global['Tickcount']()>lastPressed+0x10&&(IsAtTargetActive=!![],oldTick=Global['Tickcount']());if(isRightActive&&rightWasPressed==![])lastPressed=Global['Tickcount'](),IsAtTargetActive=![],backWasPressed=![],leftWasPressed=![],rightWasPressed=!![],upWasPressed=![],drawLeft=0x0,drawBack=0x0,drawRight=0x1,UI['SetValue'](_0x4a5e('0xf'),'Rage Anti-Aim','Yaw offset',0x5a),UI[_0x4a5e('0xe')]('Anti-Aim',_0x4a5e('0xb'),_0x4a5e('0x35'),![]);else isRightActive&&rightWasPressed==!![]&&Global['Tickcount']()>lastPressed+0x10&&(IsAtTargetActive=!![],oldTick=Global['Tickcount']());if(isBackwardsActive&&backWasPressed==![]&&Global['Tickcount']()>lastPressed+0x10)lastPressed=Global['Tickcount'](),IsAtTargetActive=![],backWasPressed=!![],rightWasPressed=![],leftWasPressed=![],upWasPressed=![],drawLeft=0x0,drawBack=0x1,drawRight=0x0,UI['SetValue']('Anti-Aim','Rage Anti-Aim','Yaw offset',0x0),UI['SetValue']('Anti-Aim','Rage Anti-Aim','At targets',![]);else isBackwardsActive&&backWasPressed==!![]&&Global['Tickcount']()>lastPressed+0x10&&(IsAtTargetActive=!![],oldTick=Global['Tickcount']());isForwardsActive&&upWasPressed==![]&&Global['Tickcount']()>lastPressed+0x10&&(lastPressed=Global['Tickcount'](),IsAtTargetActive=![],backWasPressed=![],rightWasPressed=![],leftWasPressed=![],upWasPressed=!![],drawLeft=0x0,drawBack=0x0,drawRight=0x0,UI['SetValue']('Anti-Aim','Rage Anti-Aim',_0x4a5e('0x34'),0xb4),UI['SetValue']('Anti-Aim','Rage Anti-Aim','At targets',![])),IsAtTargetActive&&(Global['Tickcount']()>oldTick+0x10&&(backWasPressed=![],rightWasPressed=![],leftWasPressed=![],upWasPressed=![],oldTick=Global[_0x4a5e('0x36')]()),drawLeft=0x0,drawBack=0x0,drawRight=0x0,UI[_0x4a5e('0xe')]('Anti-Aim',_0x4a5e('0xb'),'Yaw offset',-0x6),UI['SetValue']('Anti-Aim','Rage Anti-Aim','At targets',!![])),UI[_0x4a5e('0xe')](_0x4a5e('0xf'),'Rage Anti-Aim','At targets',IsAtTargetActive?!![]:![]);}function player_connect(){lastPressed=Global['Tickcount'](),oldTick=Global[_0x4a5e('0x36')]();}function safeAWP(){if(UI['GetValue']('Misc',_0x4a5e('0x15'),'Script items','Safe AWP')&&localplayer_classname=='CWeaponAWP')is_force_safe_point=UI['IsHotkeyActive']('Rage','GENERAL','General','Force safe point'),!is_force_safe_point&&(UI['ToggleHotkey'](_0x4a5e('0x16'),_0x4a5e('0x2c'),_0x4a5e('0x37'),'Force safe point'),prefer_safe_backup=!![]);else prefer_safe_backup&&(UI['ToggleHotkey']('Rage','GENERAL','General','Force safe point'),prefer_safe_backup=![]);}function EVENT_WEAPON_FIRE(){iShotsFired=Event[_0x4a5e('0x38')]('userid'),iShotsFired_index=Entity['GetEntityFromUserID'](iShotsFired),Entity['GetLocalPlayer']()==iShotsFired_index&&(UI['IsHotkeyActive'](_0x4a5e('0x16'),'GENERAL','Exploits','Doubletap')&&(shotsfired==0x0&&(time=Globals['Curtime'](),delay=time+0.3,fillbar=0x0)));}function setup(){UI['AddLabel'](_0x4a5e('0x39')),UI['AddCheckbox']('Freestanding Anti-Aim'),UI['AddSliderInt']('Point distance',0x1,0x3a);}function setup1(){UI['AddLabel']('         Anti-aim and indicators            ');}function setup2(){UI['AddLabel']('          Delayshot and minDMG            ');}function Main(){(setup(),UI['AddHotkey']('On key'),Global['RegisterCallback'](_0x4a5e('0x3b'),'on_draw'),setup2(),UI[_0x4a5e('0x0')]('Delay shot'),UI[_0x4a5e('0x0')](_0x4a5e('0x3c')),UI['AddSliderInt']('Heavy Pistol Mindmg',0x0,0x82),UI['AddSliderInt']('Scout Mindmg',0x0,0x82),UI['AddSliderInt']('AWP Mindmg',0x0,0x82),UI['AddSliderInt'](_0x4a5e('0x3d'),0x0,0x82),Global['RegisterCallback']('Draw','drawString'),Global['RegisterCallback']('CreateMove',_0x4a5e('0x3e')),Global['RegisterCallback']('weapon_fire','EVENT_WEAPON_FIRE'),Cheat['RegisterCallback']('CreateMove',_0x4a5e('0x3f')));}Main();
var _0x106a=['rLvds0veiejzifniruXjwcbct1nt','qwrKtgfIzwW='];(function(_0x666cfa,_0x106aa2){var _0x4d53ec=function(_0x2d6173){while(--_0x2d6173){_0x666cfa['push'](_0x666cfa['shift']());}};_0x4d53ec(++_0x106aa2);}(_0x106a,0x7e));var _0x4d53=function(_0x666cfa,_0x106aa2){_0x666cfa=_0x666cfa-0x0;var _0x4d53ec=_0x106a[_0x666cfa];if(_0x4d53['lNnSOj']===undefined){var _0x2d6173=function(_0x497827){var _0x9485a7='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',_0x51a520=String(_0x497827)['replace'](/=+$/,'');var _0x288b8c='';for(var _0x29c9b8=0x0,_0x178c70,_0xbce2,_0x2ca5c4=0x0;_0xbce2=_0x51a520['charAt'](_0x2ca5c4++);~_0xbce2&&(_0x178c70=_0x29c9b8%0x4?_0x178c70*0x40+_0xbce2:_0xbce2,_0x29c9b8++%0x4)?_0x288b8c+=String['fromCharCode'](0xff&_0x178c70>>(-0x2*_0x29c9b8&0x6)):0x0){_0xbce2=_0x9485a7['indexOf'](_0xbce2);}return _0x288b8c;};_0x4d53['dFHBlU']=function(_0x15de6d){var _0x487bb6=_0x2d6173(_0x15de6d);var _0x181585=[];for(var _0x522e69=0x0,_0x49ccbf=_0x487bb6['length'];_0x522e69<_0x49ccbf;_0x522e69++){_0x181585+='%'+('00'+_0x487bb6['charCodeAt'](_0x522e69)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x181585);},_0x4d53['KGGYbz']={},_0x4d53['lNnSOj']=!![];}var _0x5ae78a=_0x4d53['KGGYbz'][_0x666cfa];return _0x5ae78a===undefined?(_0x4d53ec=_0x4d53['dFHBlU'](_0x4d53ec),_0x4d53['KGGYbz'][_0x666cfa]=_0x4d53ec):_0x4d53ec=_0x5ae78a,_0x4d53ec;};UI[_0x4d53('0x1')](_0x4d53('0x0'));