var _0x2324=['1060789NNebUG','game-over','removeClass','3CNQeMC','481173oBtLDn','floor','yellow','slideUp','text','click','1572326BzENie','fadeOut','#about-section','addClass','attr','1LAxnAi','random','373211GddyDO','length','touchend','red','sounds/wrong.mp3','play','push','#level-title','fadeIn','1837873mjQLff','Level\x20:\x20','384fxATbp','.mp3','#about-history-section','231846efOnya','keydown','body','sounds/','slideDown','4960stRSAn','blue','green','1NCOsUx'];function _0x2807(_0x3220dd,_0x14b548){_0x3220dd=_0x3220dd-0xd4;var _0x2324fe=_0x2324[_0x3220dd];return _0x2324fe;}var _0x5c3345=_0x2807;(function(_0x22711c,_0x1db6c2){var _0x2ea56f=_0x2807;while(!![]){try{var _0xa26924=-parseInt(_0x2ea56f(0xf1))+-parseInt(_0x2ea56f(0xe1))*-parseInt(_0x2ea56f(0xe9))+-parseInt(_0x2ea56f(0xd4))*parseInt(_0x2ea56f(0xe4))+-parseInt(_0x2ea56f(0xf0))*-parseInt(_0x2ea56f(0xd6))+parseInt(_0x2ea56f(0xf7))+-parseInt(_0x2ea56f(0xed))+parseInt(_0x2ea56f(0xdf))*-parseInt(_0x2ea56f(0xec));if(_0xa26924===_0x1db6c2)break;else _0x22711c['push'](_0x22711c['shift']());}catch(_0x25cb05){_0x22711c['push'](_0x22711c['shift']());}}}(_0x2324,0xf0756));var gameStarted=![],levelCount=0x0,gamePattern=[],userClickedPattern=[],buttonColors=[_0x5c3345(0xd9),_0x5c3345(0xea),_0x5c3345(0xeb),_0x5c3345(0xf3)];$(document)['on'](_0x5c3345(0xe5),function(){!gameStarted&&(level(levelCount),setTimeout(function(){toggleNextSequence();},0xbb8),gameStarted=!![]);}),$(_0x5c3345(0xdd))['on'](_0x5c3345(0xd8),function(){!gameStarted&&(level(levelCount),setTimeout(function(){toggleNextSequence();},0xbb8),gameStarted=!![]);}),$('.btn-ext-css')['on'](_0x5c3345(0xf6),function(){var _0x199897=_0x5c3345;if(gameStarted){var _0x56e35a=$(this)[_0x199897(0xfb)]('id');userClickedPattern['push'](_0x56e35a),checkAnswer(userClickedPattern[_0x199897(0xd7)]-0x1),playSound(_0x56e35a),animatePress(_0x56e35a);}});function level(_0x2be986){var _0x329b40=_0x5c3345;$(_0x329b40(0xdd))[_0x329b40(0xf5)](_0x329b40(0xe0)+_0x2be986);}function toggleNextSequence(){var _0x574c7e=_0x5c3345;userClickedPattern=[],levelCount++,level(levelCount);var _0x244aca=nextSequence(),_0x57a0f2=buttonColors[_0x244aca];gamePattern[_0x574c7e(0xdc)](_0x57a0f2),animateRandomButtonChosen(_0x57a0f2),playSound(_0x57a0f2);}function nextSequence(){var _0x50651b=_0x5c3345,_0x5ab141=Math[_0x50651b(0xd5)]();return _0x5ab141=_0x5ab141*0x4,_0x5ab141=Math[_0x50651b(0xf2)](_0x5ab141),_0x5ab141;}function animateRandomButtonChosen(_0x3e95d1){var _0x1ad5dd=_0x5c3345;$('#'+_0x3e95d1)[_0x1ad5dd(0xde)](0x64)[_0x1ad5dd(0xf8)](0x64)[_0x1ad5dd(0xde)](0x64);}function checkAnswer(_0x3662a5){var _0x2f2b51=_0x5c3345;userClickedPattern[_0x3662a5]===gamePattern[_0x3662a5]?userClickedPattern[_0x2f2b51(0xd7)]===gamePattern[_0x2f2b51(0xd7)]&&setTimeout(function(){toggleNextSequence();},0x3e8):gameOver();}function gameOver(){var _0x292b07=_0x5c3345;gameOverSound(),$(_0x292b07(0xe6))[_0x292b07(0xfa)](_0x292b07(0xee)),setTimeout(function(){var _0xe28c84=_0x292b07;$(_0xe28c84(0xe6))[_0xe28c84(0xef)](_0xe28c84(0xee));},0xc8),startOver();}function gameOverSound(){var _0x275249=_0x5c3345,_0x5dcecf=new Audio(_0x275249(0xda));_0x5dcecf[_0x275249(0xdb)]();}function startOver(){var _0x196e47=_0x5c3345;$(_0x196e47(0xdd))['text']('Game\x20Over,\x20Press\x20Any\x20Key/Touch\x20Here\x20To\x20Restart!'),gameStarted=![],levelCount=0x0,gamePattern=[];}function playSound(_0x160742){var _0x5dd477=_0x5c3345,_0x2472ec=new Audio(_0x5dd477(0xe7)+_0x160742+_0x5dd477(0xe2));_0x2472ec[_0x5dd477(0xdb)]();}function animatePress(_0x50a29b){var _0x5092df=_0x5c3345;$('#'+_0x50a29b)[_0x5092df(0xfa)]('pressed'),setTimeout(function(){var _0x48273b=_0x5092df;$('#'+_0x50a29b)[_0x48273b(0xef)]('pressed');},0x64);}$('#about-history-section')[_0x5c3345(0xf4)](0x0),$(_0x5c3345(0xf9))['on']('click',function(){var _0x2904e1=_0x5c3345;$(_0x2904e1(0xf9))[_0x2904e1(0xf8)]()[_0x2904e1(0xf4)](),setTimeout(function(){var _0x1de29d=_0x2904e1;$(_0x1de29d(0xe3))[_0x1de29d(0xef)]('user-action')[_0x1de29d(0xde)]()[_0x1de29d(0xe8)]();},0xbb8);});
