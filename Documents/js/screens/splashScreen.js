/**
author - deviator
*/


function SplashScreen (app)
{
	this.mApplication = app;
	this.mDivName ="splashScreen";
	this.setUp();
	
}


SplashScreen.prototype.setUp = function()
{
	var that = this;
	this.mApplication.showScreen(this.mDivName)
	var sT = getAssetPath("img","img/images/image2.png")
	document.getElementById('25yrslogo').style.backgroundImage = "url('"+sT+"')"
	document.getElementById('enterGame').onclick= function()
	{
		that.mApplication.nextTransition();
	};
	
}
