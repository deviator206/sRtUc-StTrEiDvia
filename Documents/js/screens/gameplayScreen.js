/**
author - deviator
*/


function GamePlayScreen (app)
{
	this.mApplication = app;
	this.mDivName ="gameplayScreen";
	this.setUp();
	
}


GamePlayScreen.prototype.setUp = function()
{
	var that = this;
	this.mApplication.showScreen(this.mDivName);
	_gMainApplication.resumeTimer();
	this.mApplication.showSelectedScreen('grey_bottom');	
	
	//console.log('>> TOTAL LENGTH OF QUESTION :'+config.questionSet.length)
	//var sB = getAssetPath("img",config.questionSet[this.mApplication.nQuestionIndex].img_url)
	//var sContent ='<div id="game_screen_logo_2" class="gameScreenLogo"></div><div id= "imgHolder_In_Question" class="gameImg"></div><div class="questionTxt"><p>'+config.questionSet[this.mApplication.nQuestionIndex].question+'</p></div><div class="answerDiv"><div id="option_1" class="ans">A. '+config.questionSet[this.mApplication.nQuestionIndex].option_1+' </div><div class="ansSpace"></div><div id="option_2" class="ans">B. '+config.questionSet[this.mApplication.nQuestionIndex].option_2+'</div><div class="ansSpace"></div><div id="option_3" class="ans">C. '+config.questionSet[this.mApplication.nQuestionIndex].option_3+'</div><div class="ansSpace"></div><div id="option_4" class="ans">D. '+config.questionSet[this.mApplication.nQuestionIndex].option_4+' </div></div>'
	var sContent ='<div id="game_screen_logo_2" class="gameScreenLogo"></div><div id= "imgHolder_In_Question" class="gameImg"></div><div class="questionTxt"><p>'+config.questionSet[this.mApplication.nQuestionIndex].question+'</p></div><div class="answerDiv">	<div id="option_1" class="ans"><div style="width:10px;">A.</div><div style="margin-top: -15px;margin-left: 20px;"> '+config.questionSet[this.mApplication.nQuestionIndex].option_1+'</div> </div><div class="ansSpace"></div><div id="option_2" class="ans"><div style="width:10px;">B.</div><div style="margin-top: -15px;margin-left: 20px;"> '+config.questionSet[this.mApplication.nQuestionIndex].option_2+'</div> </div><div class="ansSpace"></div> <div id="option_3" class="ans"><div style="width:10px;">C.</div><div style="margin-top: -15px;margin-left: 20px;"> '+config.questionSet[this.mApplication.nQuestionIndex].option_3+'</div> </div><div class="ansSpace"></div><div id="option_4" class="ans"><div style="width:10px;">D.</div><div style="margin-top: -15px;margin-left: 20px;"> '+config.questionSet[this.mApplication.nQuestionIndex].option_4+'</div> </div><div class="ansSpace"></div></div>'
    
	document.getElementById('gameplayScreen').innerHTML= ''+sContent;
	var sA = getAssetPath("img","img/images/image4.png");
	document.getElementById('game_screen_logo_2').style.backgroundImage = "url("+sA+")";	
	
	var mObj = this.mApplication.arrImagesTrack[config.questionSet[this.mApplication.nQuestionIndex].img_url]
	document.getElementById('imgHolder_In_Question').appendChild(mObj)
	
	document.getElementById('option_1').onclick= function()
	{
		that.mApplication.answerSelected(1)
	};
	document.getElementById('option_2').onclick= function()
	{
		that.mApplication.answerSelected(2)
	};
	document.getElementById('option_3').onclick= function()
	{
		that.mApplication.answerSelected(3)
	};
	document.getElementById('option_4').onclick= function()
	{
		that.mApplication.answerSelected(4)
	};
	
	
	
}
