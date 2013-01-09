/**
 author - deviator
 */

function WinnerScreen(app) {
	this.mApplication = app;
	this.mDivName = "winnerScreen";
	this.setUp();

}

WinnerScreen.prototype.setUp = function() {
	var that = this;
	this.mApplication.showScreen(this.mDivName)
	this.mApplication.showSelectedScreen('grey_bottom');

	var nCurrentScore = Number(this.mApplication.nQuizScore);
	var nBenchmark = Number(this.mApplication.nBenchmarkScore);

	var v1 = ''
	var v2 = ''
	/*if (nCurrentScore >= nBenchmark) {
		v1 = 'Congratulations!'
		v2 = 'You have won the Silver star'
	} else {
		v1 = 'Oops!'
		v2 = 'Try Again'
	}*/
	if(nCurrentScore <= 100 )
	{
		v1 = 'Congratulations!'
		v2 = "You’ve won the Copper Star!"
		
	}
	else if(nCurrentScore > 100 && nCurrentScore <= 200 )
	{
		v1 = 'Congratulations!'
		v2 = "You’ve won the Bronze Star!"
	}
	else if(nCurrentScore > 200)
	{
		v1 = 'Congratulations!'
		v2 = "You’ve won the Silver Star! <br>(In honour of Accenture’s Silver Anniversary)"
	}
	
	var sContent = '<div id="final_screen" class="finalScreen"><div id="game_screen_logo_5" class="gameScreenLogo"></div><div class="congratsTxt">' + v1 + '</div><div class="conMsg">' + v2 + '</div></div>'

	document.getElementById('winnerScreen').innerHTML = '' + sContent;
	var sT = getAssetPath("img", "img/images/image4.png");
	document.getElementById('game_screen_logo_5').style.backgroundImage = "url('" + sT + "')";
	var sT1 = getAssetPath("img", "img/images/image7.png");
	document.getElementById('final_screen').style.backgroundImage = "url(" + sT1 + ")";
	
	document.getElementById('carousel_back').innerHTML="Play Again"
	/*document.getElementById('correct_next_question').onclick= function()
	 {

	 that.mApplication.setGameState(120);
	 that.mApplication.nextTransition();
	 };*/

}
