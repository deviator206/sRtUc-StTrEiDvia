/**
 author - deviator
 */

function LoadingScreen(app) {
	this.mApplication = app;
	this.mDivName = "loadingScreen"
	this.mGameSplashLoader = null;
	this.mImageRow = 0;

	this.mAssetLoaded = false;

	this.setUp()

}

LoadingScreen.prototype.setUp = function() {

	this.mApplication.showScreen(this.mDivName)
	document.getElementById('loadingScreen').innerHTML = '<img id="loadingScreen_front"/>'
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
	this.mGameSplashLoader = null;
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

	this.flippingAnim();
	var thatObject = this;
	this.mGameAssetLoader.addProgressListener(function(e) {
		thatObject.gameAssetLoadingProgress(e);
	});
	this.mGameAssetLoader.addCompletionListener(function() {
		thatObject.gameAssetLoaded();
	});
	this.mGameAssetLoader.start();

}

LoadingScreen.prototype.flippingAnim = function() {
	/*
	 var sLoadingImg1 = getAssetPath("img", "img/images/loading_anim_1.jpg");
	 document.getElementById('loadingScreen_front').style.backgroundImage = "url( ' " + sLoadingImg1 + " ')";
	 document.getElementById('loadingScreen_front').style.width = "177px";
	 document.getElementById('loadingScreen_front').style.height = "252px";
	 var sLoadingImg2 = getAssetPath("img", "img/images/loading_anim_2.jpg");
	 document.getElementById('loadingScreen_back').style.backgroundImage = "url( ' " + sLoadingImg2 + " ')";
	 document.getElementById('loadingScreen_back').style.width = "177px";
	 document.getElementById('loadingScreen_back').style.height = "252px";
	 */

	/*$("#loadingScreen_front").flip({
	 direction : 'rl',
	 speed:100,
	 color:'#fff',
	 onBefore : function() {
	 console.log('before starting the animation');
	 },
	 onAnimation : function() {
	 console.log('in the middle of the animation');
	 },
	 onEnd : function() {
	 console.log('when the animation has already ended');
	 }
	 })*/
	/*
	 var that  = this;
	 $("#loadingScreen_back").stop().css({
	 width : '0px',
	 height : '' + that.height + 'px',
	 marginLeft : '' + that.margin + 'px',
	 opacity : '0.5'
	 });

	 $("#loadingScreen_front").stop().animate({width:'0px',height:''+that.height+'px',marginLeft:''+that.width+'px',opacity:'0.5'},{duration:500});
	 window.setTimeout(function() {
	 $("#loadingScreen_front").attr( "src", getAssetPath("img", "img/images/loading_anim_2.jpg"));
	 $("#loadingScreen_front").stop().animate({width:''+that.width+'px',height:''+that.height+'px',marginLeft:'0px',opacity:'1'},{duration:500});
	 //$("#loadingScreen_back").stop().animate({width:''+that.width+'px',height:''+that.height+'px',marginLeft:'0px',opacity:'1'},{duration:500});
	 },500);*/
	$('#loadingScreen_front').attr('src', getAssetPath("img", "img/images/loading_anim_0.jpg"));
}
/*$("#loadingScreen_front").click(function(){
 $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:500});
 $("#reflection1").stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px'},{duration:500});
 window.setTimeout(function() {
 $("#image2").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:500});
 $("#reflection2").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px'},{duration:500});
 },500);
 });*/

LoadingScreen.prototype.gameAssetLoaded = function() {
	console.log('loadinded' + document.getElementById('newName'));
	if (document.getElementById('newName') != null)
		document.getElementById('newName').parentNode.removeChild(document.getElementById('newName'))
	this.mAssetLoaded = true;
	this.mApplication.nextTransition();

}

LoadingScreen.prototype.gameAssetLoadingProgress = function(e) {
	var progressHighlighted = 0;
	var tempNum = parseInt(e.completedCount / e.totalCount * 100) / 4;
	var topLimit = Math.floor(tempNum);

	//var sT = getAssetPath("img","img/splash/yellowProgBar.png")
	/*for(var x=progressHighlighted;x<topLimit;x++)
	{
	document.getElementById('loadBar'+x).style.background="url('"+sT+"')";
	}
	progressHighlighted=topLimit;
	setDivText(100, 70, 'Loading '+(parseInt(e.completedCount / e.totalCount * 100) >> 0) + ' %', "loadingScreen", "black", "24px", "MyriadPro-Bold");
	document.getElementById('loadingScreentxt').className = "loaderText_css"
	*/
	//var percent = 0;
	var mLoading = parseInt(e.completedCount / e.totalCount * 100);
	//var mWidth = 174;
	//var mHeight = 253;
	//var mPercent = mLoading % 2;
	//var finalVal = mLoading % 5
	//var divideByTen = mLoading % 10
	if (mLoading % 10 == 0) {
		//var mName = 10;
		var doAnim = false;

		if (mLoading <= 10) {
			this.mImageRow = 10;
		} else if (mLoading <= 50) {
			this.mImageRow = 50;
		} else {
			this.mImageRow = 90;
		}
		/*
		onBefore : function() {
		console.log('before starting the animation');
		},
		onAnimation : function() {
		console.log('in the middle of the animation');
		},

		* */
		//if (mLoading == 10 || mLoading == 50 ||  mLoading == 80) {
		var that = this;
		if (!this.mAssetLoaded) {
			$("#loadingScreen_front").flip({

				direction : 'rl',
				speed : 100,
				color : '#000',
				onEnd : function() {
					
					$('#loadingScreen_front').attr('src', getAssetPath("img", "img/images/loading_anim_" + that.mImageRow + ".jpg"));
				}
			})
		}
		console.log(' percent ' + mLoading)
		//}

		//document.getElementById('loadingScreen').style.backgroundImage = "url(" + sT + ")";
		//document.getElementById('loadingScreen').style.height = mHeight + 'px'
		//document.getElementById('loadingScreen').style.width = mWidth + 'px'
		//	document.getElementById('loadingScreen').style.backgroundPosition = mWidth * finalVal + 'px ' + mHeight * this.mImageRow + 'px'

	}
	//percent = Math.round(parseInt(e.completedCount / e.totalCount * 100) / 10).toFixed(0)

}

$("#loadingScreen_front").click(function() {
	console.log(" freak");
	$("#loadingScreen_front").flip({
		direction : 'rl',
		speed : 10000,
		color : '#000',
		onBefore : function() {
			console.log('before starting the animation');
		},
		onAnimation : function() {
			console.log('in the middle of the animation');
		},
		onEnd : function() {
			console.log('when the animation has already ended>>');
			$('#loadingScreen_front').attr('src', getAssetPath("img", "img/images/loading_anim_90.jpg"));
		}
	})

});
