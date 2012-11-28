/**
 author - deviator
 */

function CorrectAnswerScreen(app) {
	this.mApplication = app;
	this.mDivName = "correctanswerScreen";
	this.setUp();

}

CorrectAnswerScreen.prototype.setUp = function() {
	var that = this;
	this.mApplication.showScreen(this.mDivName)
	this.mApplication.showSelectedScreen('grey_bottom');
	var sA = getAssetPath("img", "img/iPhone/next-question.png");
	//var sB = getAssetPath("img",config.questionSet[this.mApplication.nQuestionIndex].img_url);
	var sContent = '<div id="game_screen_logo_3" class="gameScreenLogo"></div><div id="imgHolder_In_CorrectAnswerScreen" class="gameImg"></div><div class="questionTxt"><p>Yes. You are correct!</p></div><div class="explnDiv"><p>' + config.questionSet[this.mApplication.nQuestionIndex].solution + '</p></div><div id="correct_next_question" class="nextQues"></div>'

	var sC = getAssetPath("img", "img/images/image4.png");
	document.getElementById('correctanswerScreen').innerHTML = '' + sContent;
	document.getElementById('game_screen_logo_3').style.backgroundImage = "url(" + sC + ")";

	var that = this;
	document.getElementById('correct_next_question').appendChild(that.mApplication.arrImagesTrack['next-question-normal']);
	document.getElementById('correct_next_question').onmouseover = function() {
		var myDiv = document.getElementById('correct_next_question');
		var children = myDiv.childNodes;
		var len = children.length;

		while (len--) {
			myDiv.removeChild(children[len]);
		}

		document.getElementById('correct_next_question').appendChild(that.mApplication.arrImagesTrack['next-question-overlay']);
	}

	document.getElementById('correct_next_question').onmouseout = function() {

		var myDiv = document.getElementById('correct_next_question');
		var children = myDiv.childNodes;
		var len = children.length;

		while (len--) {
			myDiv.removeChild(children[len]);
		}

		document.getElementById('correct_next_question').appendChild(that.mApplication.arrImagesTrack['next-question-normal']);
	}
	
	
	var mObj = this.mApplication.arrImagesTrack[config.questionSet[this.mApplication.nQuestionIndex].img_url]
	document.getElementById('imgHolder_In_CorrectAnswerScreen').appendChild(mObj);

	document.getElementById('correct_next_question').onclick = function() {

		that.mApplication.setGameState(120);
		that.mApplication.nextTransition();
	};

}
