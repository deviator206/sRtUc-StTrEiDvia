/*
 AUTHOR - deviator
 */

ApplicationWrapper.prototype.nextTransition = function() {
	document.getElementById('carousel_Intro').style.display = "none";
	document.getElementById('carousel_Help').style.display = "none";

	switch(this.nGameState) {
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
			this.hideCarousel();
			this.nGameState = 80;
			clearInterval(this.nQuizTimer)
			this.mCurrentScreen = new CarouselScreen(this)
			break;
		case 90:
			this.nGameState = 100;
			this.mCurrentScreen = new GamePlayScreen(this)
			break;
		case 100:
			document.getElementById('carousel_Intro').style.display = "block";
			document.getElementById('carousel_Help').style.display = "block";
			this.mCurrentScreen = new CorrectAnswerScreen(this)
			break;
		case 110:
			document.getElementById('carousel_Intro').style.display = "block";
			document.getElementById('carousel_Help').style.display = "block";
			this.mCurrentScreen = new WrongAnswerScreen(this)
			break;
		case 120:
			// from solution screen

			/*this.arrQuestion.push(this.nQuestionIndex);
			 //if(this.nQuestionIndex < config.questionSet.length-1 )
			 if (this.arrQuestion.length < config.questionSet.length - 1) {
			 if (this.nQuestionIndex < config.questionSet.length - 1)
			 this.nQuestionIndex++;
			 else
			 this.nQuestionIndex = 0;
			 this.nGameState = 90;
			 this.nextTransition()
			 } else {

			 this.nGameState = 130;
			 this.nextTransition()
			 }
			 */
			break;
		case 130:
			clearInterval(this.nQuizTimer)
			this.mCurrentScreen = new WinnerScreen(this)
			break;
	}
}

ApplicationWrapper.prototype.setGameState = function(nGameState) {
	this.nGameState = nGameState;
}

ApplicationWrapper.prototype.hideCarousel = function() {
	if (document.getElementById('SM_carouselParent_MINI') != null) {
		////console.log(document.getElementById('SM_carouselParent_MINI').parentNode);
		////console.log('::'+document.getElementById('main_game_screen'));

		document.getElementById('allinone_carousel_charming_SM_main').removeChild(document.getElementById('SM_carouselParent_MINI'));
	}

	if (document.getElementById('allinone_carousel_charming_SM') == null) {
		var newDIv = document.createElement('div');
		newDIv.setAttribute('id', 'allinone_carousel_charming_SM');
		document.getElementById('allinone_carousel_charming_SM_main').appendChild(newDIv);
	}
	document.getElementById('allinone_carousel_charming_SM').innerHTML = "";

}

ApplicationWrapper.prototype.loadMiniCarousel = function() {
	//console.log(this.mQuestionAnswered)

	if (this.mQuestionAnswered.length < config.questionSet.length) {
		this.mCarouselQuestionTrack = new Array();
		this.hideCarousel();
		var sContent = '<div class="myloader_SM"></div><ul  id ="carousel_ul_li_holder_SM" class="allinone_carousel_list_SM" style="background-color:#999966;">'
		document.getElementById('allinone_carousel_charming_SM').innerHTML = sContent;

		for (var i = 0; i < config.questionSet.length; i++) {
			if (this.mQuestionAnswered.indexOf(Number(i)) == -1) {
				this.mCarouselQuestionTrack.push(i);
				var j = i + 1;
				var ele = document.createElement('li');
				ele.setAttribute('id', "li__ele_SM" + i)
				document.getElementById('carousel_ul_li_holder_SM').appendChild(ele);
				var mObj = this.arrImagesTrack["C_" + j];
				mObj.setAttribute('id', "li_" + i);
				mObj.setAttribute('width', "50");
				mObj.setAttribute('class', "reflectBelow");
				ele.appendChild(mObj);
			} else {
				//console.log(i+ 'INDX :FOUND: ' + this.mQuestionAnswered.indexOf(Number(i)))
			}
		}

		jQuery('#allinone_carousel_charming_SM').allinone_carousel_SMALL({
			skin : 'powerful',
			width : 130,
			height : 75,
			numberOfVisibleItems : 5,
			callback : function(msg) {
				////console.log(" CLICKED");
				if (document.getElementById('SM_carouselParent_MINI') != null)
					document.getElementById('SM_carouselParent_MINI').style.display = 'none';
				CLICK_HERE_MINI_CAROUSEL(msg)
			}
		});
		document.getElementById('SM_carouselParent_MINI').style.display = 'block';

	} else {

		this.hideCarousel();
		this.nGameState = 130;
		this.nextTransition()
	}

}

ApplicationWrapper.prototype.pauseTimer = function() {
	clearInterval(_gMainApplication.nQuizTimer);
};

ApplicationWrapper.prototype.resumeTimer = function() {
	clearInterval(_gMainApplication.nQuizTimer);
	this.nQuizTimer = setInterval(this.TimerFunction.bind(this), 1000);
}
function CLICK_HERE_MINI_CAROUSEL(i) {
	i = _gMainApplication.mCarouselQuestionTrack[Number(i)];
	//console.log('mini carousel selection '+i)
	_gMainApplication.nQuestionIndex = i;
	_gMainApplication.resumeTimer();
	_gMainApplication.setGameState(90);
	_gMainApplication.nextTransition();
}

ApplicationWrapper.prototype.startGameTimer = function(i) {
	this.arrQuestion = new Array();
	this.mQuestionAnswered = new Array();
	var that = this;
	this.nQuizTimeCntr = 450;
	this.nQuizScore = 0;

	//alert(config.questionSet.length);
	this.nQuestionIndex = i//Math.floor(Math.random() * config.questionSet.length - 1);

	/*if (Number(this.nQuestionIndex) > 19)
	this.nQuestionIndex = 0;
	if (Number(this.nQuestionIndex) < 0)
	this.nQuestionIndex = 0*/
	////console.log('|||| --- >'+config.questionSet.length+":FINAL: "+this.nQuestionIndex)
	this.nQuizTimer = setInterval(this.TimerFunction.bind(this), 1000);
}

ApplicationWrapper.prototype.TimerFunction = function() {
	this.nQuizTimeCntr--
	if (this.nQuizTimeCntr <= 0) {
		clearInterval(this.nQuizTimer)
		this.nGameState = 130;
		this.nextTransition()
	}
	document.getElementById('timer_txt').innerHTML = '' + this.nQuizTimeCntr;
	document.getElementById('score_txt').innerHTML = '' + this.nQuizScore;
}

ApplicationWrapper.prototype.answerSelected = function(nSelected) {
	if (nSelected == config.questionSet[this.nQuestionIndex].correct_answer) {
		this.nQuizScore = this.nQuizScore + this.nCorrectAnswer
		this.nGameState = 100;

	} else {
		this.nGameState = 110;
	}

	this.nextTransition();

}
ApplicationWrapper.prototype.showSelectedScreen = function(sDivName) {
	document.getElementById(sDivName).style.display = "block";
}
ApplicationWrapper.prototype.showScreen = function(sDivName) {

	var nIndex = 0;
	for ( nIndex = 0; nIndex < this.mScreenManager.length; nIndex++) {
		if (sDivName != this.mScreenManager[nIndex]) {
			document.getElementById(this.mScreenManager[nIndex]).style.display = "none";
		} else {
			document.getElementById(this.mScreenManager[nIndex]).style.display = "block";
		}
	}
}

ApplicationWrapper.prototype.setUp = function(config) {
	this.mScreenManager = config.screenNames;

}
function ApplicationWrapper() {
	// track game state
	this.nGameState = 0;

	this.mScreenManager = new Array();

	this.mCurrentScreen = null

	//game-logic-params
	this.nQuestionIndex = 0;
	this.nQuizTimer = 0;
	this.nQuizTimeCntr = 120;
	this.nQuizScore = 0;
	this.nCorrectAnswer = 100;
	this.nWrongAnswer = 0;
	this.nBenchmarkScore = 100;
	this.bcarouselCreated = false;
	this.arrQuestion = null;
	this.arrImagesTrack = {}
	this.mQuestionAnswered = new Array();
	this.mCarouselQuestionTrack = new Array();
	return this;
}

ApplicationWrapper.prototype.closeQuestionOverlay = function() {
	document.getElementById('overlayScreen_ForQuestion').style.display = "none";
	document.getElementById('opaqueScreen_ForQuestion').style.display = "none";
	document.getElementById('opaqueScreen_bg_forQuestion').style.block = "none";
	//DOMWrapper.nextTransition();
}

ApplicationWrapper.prototype.showQuestionOverlay = function() {
	if (document.getElementById('opaqueScreen_ForQuestion').innerHTML == '-1') {
		var sContent = 'TRY AGAIN SAME QUESTION'
		document.getElementById('opaqueScreen_ForQuestion').innerHTML = sContent;
	}
	document.getElementById('overlayScreen_ForQuestion').style.display = "block";
	document.getElementById('opaqueScreen_ForQuestion').style.display = "block";
	document.getElementById('opaqueScreen_ForQuestion').style.zIndex = 9;
	document.getElementById('opaqueScreen_bg_forQuestion').style.display = "block";
	document.getElementById('opaqueScreen_bg_forQuestion').style.zIndex = 7;

	document.getElementById('overlayScreen_ForQuestion').onclick = function() {
		_gMainApplication.closeQuestionOverlay();
	}
}

$('#carousel_Intro').click(function() {
	_gMainApplication.showQuestionOverlay();
})
$('#carousel_Help').click(function() {
	_gMainApplication.showQuestionOverlay();
})
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

