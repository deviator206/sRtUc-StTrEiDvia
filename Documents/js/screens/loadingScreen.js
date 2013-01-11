/**
 author - deviator
 */

function LoadingScreen(app) {
	this.mApplication = app;
	this.mDivName = "loadingScreen"
	this.mGameSplashLoader = null;
	this.mImageRow = 10;
	this.loadingProgress = new Array(-1, -1, -1);
	this.mAssetLoaded = false;

	this.setUp()

}

LoadingScreen.prototype.setUp = function() {

	this.mApplication.showScreen(this.mDivName)
	document.getElementById('loadingScreen').innerHTML = '<div id="loadingScreen_front" style="width: 117px;height: 252px;"></div>'
	//var sT = getAssetPath("img","img/splash/whiteProgBar.png")
	/*for(var i=0;i<25;i++)
	 {
	 var divToAppend=document.createElement('div');

	 divToAppend.style.background="url('"+sT+"')"
	 divToAppend.style.width="4px";
	 divToAppend.style.height="16px";
	 divToAppend.style.position="absolute";
	 divToAppend.style.marginTop= "100px";
	 divToAppend.style.marginLeft= 100 +(i*7)+"px";
	 divToAppend.style.display="block";
	 divToAppend.setAttribute("id","loadBar"+i);
	 document.getElementById(this.mDivName).appendChild(divToAppend);
	 }

	 */
	this.mGameSplashLoader = new PxLoader();
	this.mGameAssetLoader = new PxLoader();

	this.mApplication.arrImagesTrack = {}

	this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/image2.png"));
	this.mApplication.arrImagesTrack['menu_screen_carousel'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/image3.png"));
	this.mApplication.arrImagesTrack['menu_screen_logo'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/image4.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/image5.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/image7.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/image8.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/image9.png"));

	this.mApplication.arrImagesTrack['C_1'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/1.png"));
	this.mApplication.arrImagesTrack['C_2'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/2.png"));
	this.mApplication.arrImagesTrack['C_3'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/3.png"));
	this.mApplication.arrImagesTrack['C_4'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/4.png"));
	this.mApplication.arrImagesTrack['C_5'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/5.png"));
	this.mApplication.arrImagesTrack['C_6'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/6.png"));
	this.mApplication.arrImagesTrack['C_7'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/7.png"));
	this.mApplication.arrImagesTrack['C_8'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/8.png"));
	this.mApplication.arrImagesTrack['C_9'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/9.png"));
	this.mApplication.arrImagesTrack['C_10'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/10.png"));
	this.mApplication.arrImagesTrack['C_11'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/11.png"));
	this.mApplication.arrImagesTrack['C_12'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/12.png"));
	this.mApplication.arrImagesTrack['C_13'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/13.png"));
	this.mApplication.arrImagesTrack['C_14'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/14.png"));
	this.mApplication.arrImagesTrack['C_15'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/15.png"));
	this.mApplication.arrImagesTrack['C_16'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/16.png"));
	this.mApplication.arrImagesTrack['C_17'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/17.png"));
	this.mApplication.arrImagesTrack['C_18'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/18.png"));
	this.mApplication.arrImagesTrack['C_19'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/19.png"));
	this.mApplication.arrImagesTrack['C_20'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/20.png"));
	this.mApplication.arrImagesTrack['C_21'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/21.png"));
	this.mApplication.arrImagesTrack['C_22'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/22.png"));
	this.mApplication.arrImagesTrack['C_23'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/23.png"));
	this.mApplication.arrImagesTrack['C_24'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/24.png"));
	this.mApplication.arrImagesTrack['C_25'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/25.png"));

	this.mApplication.arrImagesTrack['Q_1'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_1-Tata-ACE.png"));
	this.mApplication.arrImagesTrack['Q_2'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_2-VVF.png"));
	this.mApplication.arrImagesTrack['Q_3'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_3-Caterpillar.png"));
	this.mApplication.arrImagesTrack['Q_4'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_4-Mariotte.png"));
	this.mApplication.arrImagesTrack['Q_5'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_5-Unilever.png"));
	this.mApplication.arrImagesTrack['Q_6'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_6-PandG.png"));
	this.mApplication.arrImagesTrack['Q_7'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_7-Trinity-Health.png"));
	this.mApplication.arrImagesTrack['Q_8'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_8-BSES_image.png"));
	this.mApplication.arrImagesTrack['Q_9'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_9-Piramal-Healthcare.png"));
	this.mApplication.arrImagesTrack['Q_10'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_10-New-York-City-311.png"));
	this.mApplication.arrImagesTrack['Q_11'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_11-Tata-Chemicals.png"));
	this.mApplication.arrImagesTrack['Q_12'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_12-United-Spirits.png"));
	this.mApplication.arrImagesTrack['Q_13'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_13-Tota-Motors-Rural.png"));
	this.mApplication.arrImagesTrack['Q_14'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_14-Engineers-India_image.png"));
	this.mApplication.arrImagesTrack['Q_15'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_15-LandT-Komatsu_image.png"));
	this.mApplication.arrImagesTrack['Q_16'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_16-LandT-Power.png"));
	this.mApplication.arrImagesTrack['Q_17'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_17-Wizard-of-OZ.png"));
	this.mApplication.arrImagesTrack['Q_18'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_18-Royal-Shakespeare.png"));
	this.mApplication.arrImagesTrack['Q_19'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_19-BPCL.png"));
	this.mApplication.arrImagesTrack['Q_20'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/question/Q_20-Manipur-Govt.png"));

	this.mApplication.arrImagesTrack['next-question-overlay'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/next-question_overlay.png"));
	this.mApplication.arrImagesTrack['next-question-normal'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/next-question.png"));

	this.mApplication.arrImagesTrack['leftNav_Carousel'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/leftNavbig.png"));
	this.mApplication.arrImagesTrack['rightNav_Carousel'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/rightNavbig.png"));

	this.mApplication.arrImagesTrack['leftNav_Carousel_sm'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/leftNav.png"));
	this.mApplication.arrImagesTrack['rightNav_Carousel_sm'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/rightNav.png"));

	this.mApplication.arrImagesTrack['pick_ur_question'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/iPhone/pick.jpg"));
	
	
	
	this.mApplication.arrImagesTrack['Introduction_25-years'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/Introduction_25-years.png"));
	
	this.mApplication.arrImagesTrack['How-to-Play-for-the-25-years'] = this.mGameAssetLoader.addImage(getAssetPath("img", "img/images/How-to-Play-for-the-25-years.png"));
	/*this.mGameAssetLoader.addImage("img/iPhone/set10_0004_Layer-0.png");
	 this.mGameAssetLoader.addImage("img/iPhone/set10_0001_story-flash-screen-bg.png");
	 this.mGameAssetLoader.addImage("img/iPhone/playthegame-button.png");
	 this.mGameAssetLoader.addImage("img/iPhone/Play-now-button.png");
	 this.mGameAssetLoader.addImage("img/iPhone/how-to-play-screen.png");
	 this.mGameAssetLoader.addImage("img/iPhone/how-to-play-button.png");
	 this.mGameAssetLoader.addImage("img/iPhone/25years-button.png");
	 this.mGameAssetLoader.addImage("img/iPhone/back-button.png");
	 this.mGameAssetLoader.addImage("img/iPhone/set10_0000_for-screen-3-bg.png");
	 this.mGameAssetLoader.addImage("img/iPhone/set10_0002_screen-4-bg.png");
	 this.mGameAssetLoader.addImage("img/iPhone/next-question-button.png");*/

	this.mApplication.arrImagesTrack['percent0'] = this.mGameSplashLoader.addImage(getAssetPath("img", "img/images/loading_anim_0.jpg"));
	this.mApplication.arrImagesTrack['percent10'] = this.mGameSplashLoader.addImage(getAssetPath("img", "img/images/loading_anim_10.jpg"));
	this.mApplication.arrImagesTrack['percent50'] = this.mGameSplashLoader.addImage(getAssetPath("img", "img/images/loading_anim_50.png"));
	this.mApplication.arrImagesTrack['percent90'] = this.mGameSplashLoader.addImage(getAssetPath("img", "img/images/loading_anim_90.jpg"));

	var thatObject = this;
	this.mGameAssetLoader.addProgressListener(function(e) {
		thatObject.gameAssetLoadingProgress(e);
	});
	this.mGameAssetLoader.addCompletionListener(function() {
		thatObject.gameAssetLoaded();
	});

	this.mGameSplashLoader.addCompletionListener(function() {
		thatObject.splashAssetLoaded();
	});
	this.mGameSplashLoader.addProgressListener(function(e) {
		thatObject.splashAssetLoadingProgress(e);
	});

	this.mGameSplashLoader.start();
	//this.mGameAssetLoader.start();

}

LoadingScreen.prototype.splashAssetLoaded = function() {
	document.getElementById('main_game_screen').style.display = "block"
	document.getElementById('loading_script_tags').style.display = "none"

	document.getElementById('loadingScreen_front').appendChild(this.mApplication.arrImagesTrack['percent0']);
	this.mGameAssetLoader.start();
}

LoadingScreen.prototype.splashAssetLoadingProgress = function(e) {

}

LoadingScreen.prototype.gameAssetLoaded = function() {
	//console.log('loadinded' + document.getElementById('newName'));
	if (document.getElementById('newName') != null)
		document.getElementById('newName').parentNode.removeChild(document.getElementById('newName'))
	this.mAssetLoaded = true;
	this.mApplication.nextTransition();

}

LoadingScreen.prototype.gameAssetLoadingProgress = function(e) {

	var mLoading = parseInt(e.completedCount / e.totalCount * 100);
	var doAnim = false;
	var percentage = Number( Math.round(mLoading / 10))
	

	if (percentage == 1 && Number(this.loadingProgress[0]) == -1) {
		doAnim = true;
		this.mImageRow = this.loadingProgress[0] = 10;
	} else if (percentage == 5 && this.loadingProgress[1] == -1) {
		doAnim = true;
		this.mImageRow = this.loadingProgress[1] = 50;

	} else if (percentage == 9 && this.loadingProgress[2] == -1) {
		doAnim = true;
		this.mImageRow = this.loadingProgress[2] = 90;

	}
	//console.log(percentage + " :: " + doAnim + " :: " + this.loadingProgress[0] + " > " + typeof (this.loadingProgress[0]))
	if (doAnim) {
		console.log(" showing " + this.mImageRow)
		var that = this;
		if (!this.mAssetLoaded) {
			$("#loadingScreen_front").flip({

				direction : 'rl',
				speed : 50,
				color : '#000',
				onEnd : function() {
					while (document.getElementById('loadingScreen_front').hasChildNodes()) {
						document.getElementById('loadingScreen_front').removeChild(document.getElementById('loadingScreen_front').lastChild);
					}
					document.getElementById('loadingScreen_front').appendChild(that.mApplication.arrImagesTrack['percent' + that.mImageRow]);
				}
			})
		}

	}

}
