var _0x57a0=['removeClass','287708WayQoN','sounds/','fadeIn','Level\x20:\x20','blue','red','click','length','text','keydown','#level-title','attr','body','play','fadeOut','addClass','sounds/wrong.mp3','push','random','296104SPkyUb','yellow','661ZFJpKs','119706uqniBb','game-over','293XXYJai','484912gczCXp','57521jWVtSm','.btn','pressed','351546DnFnUT'];function _0x6596(_0x300807,_0x1922ce){_0x300807=_0x300807-0x109;var _0x57a0aa=_0x57a0[_0x300807];return _0x57a0aa;}var _0x2fe207=_0x6596;(function(_0x47f641,_0x189d62){var _0x2fee15=_0x6596;while(!![]){try{var _0x13669c=parseInt(_0x2fee15(0x113))+-parseInt(_0x2fee15(0x119))+parseInt(_0x2fee15(0x11f))+parseInt(_0x2fee15(0x11d))+-parseInt(_0x2fee15(0x11a))+parseInt(_0x2fee15(0x118))*-parseInt(_0x2fee15(0x115))+parseInt(_0x2fee15(0x116));if(_0x13669c===_0x189d62)break;else _0x47f641['push'](_0x47f641['shift']());}catch(_0x58ed56){_0x47f641['push'](_0x47f641['shift']());}}}(_0x57a0,0x4ddee));var gameStarted=![],levelCount=0x0,gamePattern=[],userClickedPattern=[],buttonColors=[_0x2fe207(0x124),_0x2fe207(0x123),'green',_0x2fe207(0x114)];$(document)['on'](_0x2fe207(0x109),function(){!gameStarted&&(level(levelCount),toggleNextSequence(),gameStarted=!![]);}),$(_0x2fe207(0x11b))['on'](_0x2fe207(0x125),function(){var _0x5d97f7=_0x2fe207;if(gameStarted){var _0x302bf0=$(this)[_0x5d97f7(0x10b)]('id');userClickedPattern['push'](_0x302bf0),checkAnswer(userClickedPattern[_0x5d97f7(0x126)]-0x1),playSound(_0x302bf0),animatePress(_0x302bf0);}});function level(_0x7a1e4a){var _0xb26a7d=_0x2fe207;$(_0xb26a7d(0x10a))[_0xb26a7d(0x127)](_0xb26a7d(0x122)+_0x7a1e4a);}function toggleNextSequence(){var _0x5b7502=_0x2fe207;userClickedPattern=[],levelCount++,level(levelCount);var _0x55e304=nextSequence(),_0x5d3f17=buttonColors[_0x55e304];gamePattern[_0x5b7502(0x111)](_0x5d3f17),animateRandomButtonChosen(_0x5d3f17),playSound(_0x5d3f17);}function nextSequence(){var _0x178520=_0x2fe207,_0x28643f=Math[_0x178520(0x112)]();return _0x28643f=_0x28643f*0x4,_0x28643f=Math['floor'](_0x28643f),_0x28643f;}function animateRandomButtonChosen(_0x31b26c){var _0xe7caf1=_0x2fe207;$('#'+_0x31b26c)[_0xe7caf1(0x121)](0x64)[_0xe7caf1(0x10e)](0x64)['fadeIn'](0x64);}function checkAnswer(_0x28b8bb){var _0x3b195f=_0x2fe207;userClickedPattern[_0x28b8bb]===gamePattern[_0x28b8bb]?userClickedPattern[_0x3b195f(0x126)]===gamePattern[_0x3b195f(0x126)]&&setTimeout(function(){toggleNextSequence();},0x3e8):gameOver();}function gameOver(){var _0x2350b7=_0x2fe207;gameOverSound(),$(_0x2350b7(0x10c))['addClass']('game-over'),setTimeout(function(){var _0x5c33bc=_0x2350b7;$(_0x5c33bc(0x10c))[_0x5c33bc(0x11e)](_0x5c33bc(0x117));},0xc8),startOver();}function gameOverSound(){var _0x1d6706=_0x2fe207,_0x3ed390=new Audio(_0x1d6706(0x110));_0x3ed390['play']();}function startOver(){var _0x1ae373=_0x2fe207;$('#level-title')[_0x1ae373(0x127)]('Game\x20Over,\x20Press\x20Any\x20Key\x20To\x20Restart!'),gameStarted=![],levelCount=0x0,gamePattern=[];}function playSound(_0x3bc773){var _0x5a2942=_0x2fe207,_0x10893d=new Audio(_0x5a2942(0x120)+_0x3bc773+'.mp3');_0x10893d[_0x5a2942(0x10d)]();}function animatePress(_0x4220b2){var _0x43e878=_0x2fe207;$('#'+_0x4220b2)[_0x43e878(0x10f)](_0x43e878(0x11c)),setTimeout(function(){var _0x503ce5=_0x43e878;$('#'+_0x4220b2)[_0x503ce5(0x11e)]('pressed');},0x64);}
