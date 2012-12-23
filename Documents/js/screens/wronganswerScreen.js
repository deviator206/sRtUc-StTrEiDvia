/**
author - deviator
*/


function WrongAnswerScreen (app)
{
	this.mApplication = app;
	this.mDivName ="wronganswerScreen";
	this.setUp();
	
}


WrongAnswerScreen.prototype.setUp = function()
{
	var that = this;
	this.mApplication.showScreen(this.mDivName)
	this.mApplication.showSelectedScreen('grey_bottom');	
			var ss= getAssetPath("img",config.questionSet[this.mApplication.nQuestionIndex].img_url)
			var sb =getAssetPath("img","img/iPhone/next-question.png") 
	var sContent = '<div id="game_screen_logo_4" class="gameScreenLogo"></div><div class="gameImg"><img src="'+ss+'" style="width: 95%;"/></div><div class="questionTxt"><p>No. You are wrong!</p></div><div class="explnDiv"><p>'+config.questionSet[this.mApplication.nQuestionIndex].solution+'</p></div><div id="wrong_next_question" class="nextQues"><img src="'+sb+'"/></div>'	
	document.getElementById('wronganswerScreen').innerHTML = ''+sContent;
	var sT = getAssetPath("img","img/images/image4.png");
	document.getElementById('game_screen_logo_4').style.backgroundImage = "url("+sT+")";	
	document.getElementById('wrong_next_question').onclick= function()
	{
		that.mApplication.setGameState(120);		
		that.mApplication.nextTransition();
	};

}
