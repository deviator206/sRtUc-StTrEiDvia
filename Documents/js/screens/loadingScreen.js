/**
author - deviator
*/


function LoadingScreen (app)
{
	this.mApplication = app;
	this.mDivName ="loadingScreen"
	this.mGameSplashLoader =null;
	this.setUp()
	
}

LoadingScreen.prototype.setUp = function()
{
	
	this.mApplication.showScreen(this.mDivName)
	var sT = getAssetPath("img","img/splash/whiteProgBar.png")
	for(var i=0;i<25;i++)
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
		
		
	this.mGameSplashLoader = null;
	this.mGameAssetLoader  = new PxLoader();
	this.mGameAssetLoader.addImage(getAssetPath("img","img/images/image2.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/images/image3.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/images/image4.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/images/image5.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/images/image7.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/images/image8.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/images/image9.png"));
	
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/1.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/2.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/3.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/4.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/5.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/6.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/7.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/8.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/9.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/10.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/11.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/12.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/13.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/14.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/15.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/16.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/17.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/18.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/19.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/20.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/21.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/22.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/23.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/24.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/25.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/dummy.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/truck-graphic.png"));
	
	this.mApplication.arrImagesTrack = {}
	this.mApplication.arrImagesTrack['Q_1'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_1-Tata-ACE.png"));
	this.mApplication.arrImagesTrack['Q_2'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_2-VVF.png"));
	this.mApplication.arrImagesTrack['Q_3'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_3-Caterpillar.png"));
	this.mApplication.arrImagesTrack['Q_4'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_4-Mariotte.png"));
	this.mApplication.arrImagesTrack['Q_5'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_5-Unilever.png"));
	this.mApplication.arrImagesTrack['Q_6'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_6-PandG.png"));
	this.mApplication.arrImagesTrack['Q_7'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_7-Trinity-Health.png"));
	this.mApplication.arrImagesTrack['Q_8'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_8-BSES_image.png"));
	this.mApplication.arrImagesTrack['Q_9'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_9-Piramal-Healthcare.png"));
	this.mApplication.arrImagesTrack['Q_10'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_10-New-York-City-311.png"));
	this.mApplication.arrImagesTrack['Q_11'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_11-Tata-Chemicals.png"));
	this.mApplication.arrImagesTrack['Q_12'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_12-United-Spirits.png"));
	this.mApplication.arrImagesTrack['Q_13'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_13-Tota-Motors-Rural.png"));
	this.mApplication.arrImagesTrack['Q_14'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_14-Engineers-India_image.png"));
	this.mApplication.arrImagesTrack['Q_15'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_15-LandT-Komatsu_image.png"));
	this.mApplication.arrImagesTrack['Q_16'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_16-LandT-Power.png"));
	this.mApplication.arrImagesTrack['Q_17'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_17-Wizard-of-OZ.png"));
	this.mApplication.arrImagesTrack['Q_18'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_18-Royal-Shakespeare.png"));
	this.mApplication.arrImagesTrack['Q_19'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_19-BPCL.png"));
	this.mApplication.arrImagesTrack['Q_20'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/images/question/Q_20-Manipur-Govt.png"));
	
	
	this.mApplication.arrImagesTrack['next-question-overlay'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/next-question_overlay.jpg"));
	this.mApplication.arrImagesTrack['next-question-normal'] = this.mGameAssetLoader.addImage(getAssetPath("img","img/iPhone/next-question.png"));
				
	
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
	var thatObject = this;
	this.mGameAssetLoader.addProgressListener(function(e){thatObject.gameAssetLoadingProgress(e);});
	this.mGameAssetLoader.addCompletionListener(function(){thatObject.gameAssetLoaded();});
	this.mGameAssetLoader.start();
	
}
LoadingScreen.prototype.gameAssetLoaded = function ()
{
	this.mApplication.nextTransition();
	
}


LoadingScreen.prototype.gameAssetLoadingProgress = function (e)
{
	var progressHighlighted=0;
	var tempNum=parseInt(e.completedCount/e.totalCount*100)/4;
	var topLimit=Math.floor(tempNum);
	var sT = getAssetPath("img","img/splash/yellowProgBar.png")
	for(var x=progressHighlighted;x<topLimit;x++) 
	{
		document.getElementById('loadBar'+x).style.background="url('"+sT+"')";
	}
	progressHighlighted=topLimit;
	setDivText(100, 70, 'Loading '+(parseInt(e.completedCount / e.totalCount * 100) >> 0) + ' %', "loadingScreen", "black", "24px", "MyriadPro-Bold");
	document.getElementById('loadingScreentxt').className = "loaderText_css"

}

