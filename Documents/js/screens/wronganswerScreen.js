/**
 author - deviator
 */

function WrongAnswerScreen(app) {
	this.mApplication = app;
	this.mDivName = "wronganswerScreen";
	this.setUp();

}

WrongAnswerScreen.prototype.setUp = function() {
	var that = this;
	this.mApplication.showScreen(this.mDivName)
	this.mApplication.showSelectedScreen('grey_bottom');
	//	var ss= getAssetPath("img",config.questionSet[this.mApplication.nQuestionIndex].img_url)
	var sb = getAssetPath("img", "img/iPhone/next-question.png")
	var sContent = '<div id="game_screen_logo_4" class="gameScreenLogo"></div><div id= "imgHolder_In_Revealing" class="gameImg"></div><div class="questionTxt"><p>No. You are wrong!</p></div><div class="explnDiv"><p>' + config.questionSet[this.mApplication.nQuestionIndex].solution + '</p></div><div id="wrong_next_question" class="nextQues"></div>'
	document.getElementById('wronganswerScreen').innerHTML = '' + sContent;
	var sT = getAssetPath("img", "img/images/image4.png");
	document.getElementById('game_screen_logo_4').style.backgroundImage = "url(" + sT + ")";

	var mObj = this.mApplication.arrImagesTrack[config.questionSet[this.mApplication.nQuestionIndex].img_url]
	document.getElementById('imgHolder_In_Revealing').appendChild(mObj);

	document.getElementById('wrong_next_question').onclick = function() {
		that.mApplication.setGameState(120);
		that.mApplication.nextTransition();
	};

	var that = this;
	document.getElementById('wrong_next_question').appendChild(that.mApplication.arrImagesTrack['next-question-normal']);
	document.getElementById('wrong_next_question').onmouseover = function() {
		var myDiv = document.getElementById('wrong_next_question');
		var children = myDiv.childNodes;
		var len = children.length;

		while (len--) {
			myDiv.removeChild(children[len]);
		}

		document.getElementById('wrong_next_question').appendChild(that.mApplication.arrImagesTrack['next-question-overlay']);
	}

	document.getElementById('wrong_next_question').onmouseout = function() {

		var myDiv = document.getElementById('wrong_next_question');
		var children = myDiv.childNodes;
		var len = children.length;

		while (len--) {
			myDiv.removeChild(children[len]);
		}

		document.getElementById('wrong_next_question').appendChild(that.mApplication.arrImagesTrack['next-question-normal']);
	}
	this.mApplication.loadMiniCarousel();
}
