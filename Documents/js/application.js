/*
AUTHOR - deviator
*/

ApplicationWrapper.prototype.nextTransition = function()
{
	switch(this.nGameState)
	{
		case 0:
			/*this.nGameState = 10;		
			this.mCurrentScreen = new PasswordScreen(this)	
		break;*/
		case 10:
			this.nGameState = 20;		
			this.mCurrentScreen = new LoadingScreen(this)	
		break;
		case 20:
			this.nGameState = 30;		
			this.mCurrentScreen = new SplashScreen(this)	
		break;
		case 30:
			this.nGameState = 40;		
			this.mCurrentScreen = new MenuScreen(this)	
		break;
		case 50:
			//how to play
			this.nGameState = 60;		
			this.mCurrentScreen = new HowToPlayScreen(this)	
		break;
		case 70:
			//play the game
			this.nGameState = 80;		
			clearInterval(this.nQuizTimer)
			this.mCurrentScreen = new CarouselScreen(this)	
		break;
		case 90:
			this.nGameState = 100;		
			
			this.mCurrentScreen = new GamePlayScreen(this)	
		break;
		case 100:
			this.mCurrentScreen = new CorrectAnswerScreen(this)	
		break;
		case 110:
			this.mCurrentScreen = new WrongAnswerScreen(this)	
		break;
		case 120:
		// from solution screen
			this.arrQuestion.push(this.nQuestionIndex)
			//if(this.nQuestionIndex < config.questionSet.length-1 )
			if(this.arrQuestion.length < config.questionSet.length-1)
			{
				if(this.nQuestionIndex < config.questionSet.length-1)
				this.nQuestionIndex++;
				else
				this.nQuestionIndex = 0;
				this.nGameState = 90;		
				this.nextTransition()
			}
			else
			{
				this.nGameState = 130;		
				this.nextTransition()
			}
			
		break;
		case 130:
			clearInterval(this.nQuizTimer )
			this.mCurrentScreen = new WinnerScreen(this)	
		break;
	}
}

ApplicationWrapper.prototype.setGameState = function(nGameState)
{
	this.nGameState = nGameState; 
}


ApplicationWrapper.prototype.startGameTimer = function(i)
{
	this.arrQuestion = new Array();
	var that = this;
	this.nQuizTimeCntr=120;
	this.nQuizScore=0;
	this.nQuestionIndex =  Math.floor(Math.random()*config.questionSet.length-1);
	
	
	if(Number(this.nQuestionIndex) > 19)
	this.nQuestionIndex =0;
	if(Number(this.nQuestionIndex) < 0)
	this.nQuestionIndex = 0
	//console.log('|||| --- >'+config.questionSet.length+":FINAL: "+this.nQuestionIndex)
	this.nQuizTimer = setInterval(function ()
	{
		that.nQuizTimeCntr--
		if(that.nQuizTimeCntr <=0)
		{
			clearInterval(that.nQuizTimer )
			that.nGameState = 130;		
			that.nextTransition()
		}
		document.getElementById('timer_txt').innerHTML=''+that.nQuizTimeCntr;
		document.getElementById('score_txt').innerHTML=''+that.nQuizScore;
	
		
	},1000);
}


ApplicationWrapper.prototype.answerSelected = function(nSelected)
{
	if(nSelected == config.questionSet[this.nQuestionIndex].correct_answer)
	{
		this.nQuizScore = this.nQuizScore+this.nCorrectAnswer
		this.nGameState = 100;		
			
	}
	else
	{
		this.nGameState = 110;		
	}
	
	this.nextTransition();
	
}
ApplicationWrapper.prototype.showSelectedScreen = function(sDivName)
{
	document.getElementById(sDivName).style.display = "block";
}
ApplicationWrapper.prototype.showScreen = function(sDivName)
{
	
	var nIndex =0;
	for(nIndex =0;nIndex<this.mScreenManager.length;nIndex++)
	{
		if(sDivName != this.mScreenManager[nIndex])
		{
			document.getElementById(this.mScreenManager[nIndex]).style.display = "none";
		}
		else
		{
			document.getElementById(this.mScreenManager[nIndex]).style.display = "block";
		}
	}
}


ApplicationWrapper.prototype.setUp = function (config)
{
	this.mScreenManager = config.screenNames;
	
}
function ApplicationWrapper()
{
	// track game state
	this.nGameState =0;
	
	this.mScreenManager = new Array();
	
	this.mCurrentScreen = null
	
	//game-logic-params
	this.nQuestionIndex =0;
	this.nQuizTimer =0;
	this.nQuizTimeCntr = 120;
	this.nQuizScore =0;
	this.nCorrectAnswer =100;
	this.nWrongAnswer =0;
	this.nBenchmarkScore =100;
	this.bcarouselCreated = false;
	this.arrQuestion = null;
	this.arrImagesTrack = {}
	return this;
}

/***
HELPER 
**/
function setDivText(x, y, str, id, fontColor, fontSize, fontFamily) {
	var divEle = document.getElementById('' + id);

	var tmp = document.getElementById('' + id + 'txt');
	var divToAppend;

	if (!tmp) {
		divToAppend = document.createElement('div');
		divToAppend.setAttribute("id", id + 'txt');
	} else {
		tmp.parentNode.removeChild(tmp);
		divToAppend = document.createElement('div');
		divToAppend.setAttribute("id", id + 'txt');
	}

	divToAppend.style.color = fontColor;
	divToAppend.style.fontSize = fontSize;
	divToAppend.style.position = "absolute";

	divToAppend.innerHTML = "" + str;
	divToAppend.style.marginLeft = x + 'px';
	divToAppend.style.marginTop = y + 'px';

	divEle.appendChild(divToAppend);
}







