//CFG BY TsMelon CHINA NO.2***************************************************************************//
var _$_1d21=["\x41\x6E\x74\x69\x2D\x41\x69\x6D","\x46\x61\x6B\x65\x2D\x4C\x61\x67","\x4C\x69\x6D\x69\x74","\x47\x65\x74\x56\x61\x6C\x75\x65","\x4A\x69\x74\x74\x65\x72","\x54\x72\x69\x67\x67\x65\x72\x20\x6C\x69\x6D\x69\x74","\x47\x65\x74\x53\x63\x72\x65\x65\x6E\x53\x69\x7A\x65","\x52\x65\x61\x6C\x74\x69\x6D\x65","\x46\x41\x4B\x45\x2D\x4C\x49\x4D\x49\x54\x20\x4D\x49\x4E","\x41\x64\x64\x53\x6C\x69\x64\x65\x72\x49\x6E\x74","\x46\x41\x4B\x45\x2D\x4C\x49\x4D\x49\x54\x20\x4D\x41\x58","\x46\x41\x4B\x45\x2D\x4A\x49\x54\x54\x45\x52\x20\x4D\x49\x4E","\x46\x41\x4B\x45\x2D\x4A\x49\x54\x54\x45\x52\x20\x4D\x41\x58","\x46\x41\x4B\x45\x2D\x54\x52\x49\x47\x47\x45\x52\x20\x4D\x49\x4E","\x46\x41\x4B\x45\x2D\x54\x52\x49\x47\x47\x45\x52\x20\x4D\x41\x58","\x46\x41\x4B\x45\x2D\x53\x57\x49\x54\x43\x48\x20\x64\x65\x6C\x61\x79\x28\x73\x29","\x41\x64\x64\x53\x6C\x69\x64\x65\x72\x46\x6C\x6F\x61\x74","\x4D\x69\x73\x63","\x4A\x41\x56\x41\x53\x43\x52\x49\x50\x54","\x53\x63\x72\x69\x70\x74\x20\x49\x74\x65\x6D\x73","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x53\x65\x74\x56\x61\x6C\x75\x65","\x4C\x6F\x6E\x65\x6C\x69\x6E\x65\x73\x73","\x53\x74\x72\x69\x6E\x67","\x46\x41\x4B\x45","\x2D","\x44\x72\x61\x77","\x6D\x61\x69\x6E","\x52\x65\x67\x69\x73\x74\x65\x72\x43\x61\x6C\x6C\x62\x61\x63\x6B"];var limit=UI[_$_1d21[3]](_$_1d21[0],_$_1d21[1],_$_1d21[2]);var jitter=UI[_$_1d21[3]](_$_1d21[0],_$_1d21[1],_$_1d21[4]);var tlimit=UI[_$_1d21[3]](_$_1d21[0],_$_1d21[1],_$_1d21[5]);var nlimit=UI[_$_1d21[3]](_$_1d21[0],_$_1d21[1],_$_1d21[2]);var njitter=UI[_$_1d21[3]](_$_1d21[0],_$_1d21[1],_$_1d21[4]);var ntlimit=UI[_$_1d21[3]](_$_1d21[0],_$_1d21[1],_$_1d21[5]);var screen_size=Global[_$_1d21[6]]();var lasttime=Global[_$_1d21[7]]();var realtime=Global[_$_1d21[7]]();var r=255;var g=255;var b=255;var r1=1;var g1=1;var b1=1;function addtomenu(){UI[_$_1d21[9]](_$_1d21[8],0,16);UI[_$_1d21[9]](_$_1d21[10],0,16);UI[_$_1d21[9]](_$_1d21[11],0,100);UI[_$_1d21[9]](_$_1d21[12],0,100);UI[_$_1d21[9]](_$_1d21[13],0,16);UI[_$_1d21[9]](_$_1d21[14],0,16);UI[_$_1d21[16]](_$_1d21[15],0,5)}function SFAKE(){var _0x17C79=UI[_$_1d21[3]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[8]);var _0x17C17=UI[_$_1d21[3]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[10]);var _0x17CDB=_0x17C79+ Math[_$_1d21[21]](Math[_$_1d21[20]]()* (_0x17C17- _0x17C79+ 1));UI[_$_1d21[22]](_$_1d21[0],_$_1d21[1],_$_1d21[2],_0x17CDB);var _0x17C79=UI[_$_1d21[3]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[11]);var _0x17C17=UI[_$_1d21[3]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[12]);var _0x17CDB=_0x17C79+ Math[_$_1d21[21]](Math[_$_1d21[20]]()* (_0x17C17- _0x17C79+ 1));UI[_$_1d21[22]](_$_1d21[0],_$_1d21[1],_$_1d21[4],_0x17CDB);var _0x17C79=UI[_$_1d21[3]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[13]);var _0x17C17=UI[_$_1d21[3]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[14]);var _0x17CDB=_0x17C79+ Math[_$_1d21[21]](Math[_$_1d21[20]]()* (_0x17C17- _0x17C79+ 1));UI[_$_1d21[22]](_$_1d21[0],_$_1d21[1],_$_1d21[5],_0x17CDB)}function check(){var _0x17C79=UI[_$_1d21[3]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[8]);var _0x17C17=UI[_$_1d21[3]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[10]);if(_0x17C79> _0x17C17){UI[_$_1d21[22]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[8],_0x17C17)};var _0x17C79=UI[_$_1d21[3]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[11]);var _0x17C17=UI[_$_1d21[3]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[12]);if(_0x17C79> _0x17C17){UI[_$_1d21[22]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[11],_0x17C17)};var _0x17C79=UI[_$_1d21[3]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[13]);var _0x17C17=UI[_$_1d21[3]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[14]);if(_0x17C79> _0x17C17){UI[_$_1d21[22]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[13],_0x17C17)}}function main(){check();limit= UI[_$_1d21[3]](_$_1d21[0],_$_1d21[1],_$_1d21[2]);jitter= UI[_$_1d21[3]](_$_1d21[0],_$_1d21[1],_$_1d21[4]);tlimit= UI[_$_1d21[3]](_$_1d21[0],_$_1d21[1],_$_1d21[5]);screen_size= Global[_$_1d21[6]]();Render[_$_1d21[24]](20,screen_size[1]- 400,0,_$_1d21[23],[r,g,b,255],4);Render[_$_1d21[24]](20,screen_size[1]- 370,0,_$_1d21[25],[0,255,51,255],4);Render[_$_1d21[24]](20,screen_size[1]- 340,0,String(limit)+ _$_1d21[26]+ String(jitter)+ _$_1d21[26]+ String(tlimit),[r,g,b,255],4);de= UI[_$_1d21[3]](_$_1d21[17],_$_1d21[18],_$_1d21[19],_$_1d21[15]);r= r- 1* r1;g= g- 2* g1;b= b- 3* b1;if(r== 1){r1=  -r1};if(g== 1){g1=  -g1};if(b== 1){b1=  -b1};if(r== 255){r1=  -r1};if(g== 255){g1=  -g1};if(b== 255){b1=  -b1};realtime= Global[_$_1d21[7]]();if(realtime- lasttime>= de){SFAKE();lasttime= realtime};if(realtime< lasttime){lasttime= Global[_$_1d21[7]]();realtime= Global[_$_1d21[7]]()}}addtomenu();Global[_$_1d21[29]](_$_1d21[27],_$_1d21[28])