/**
author - deviator
*/


function HowToPlayScreen (app)
{
	this.mApplication = app;
	this.mDivName ="howtoplayScreen";
	this.setUp();
	
}


HowToPlayScreen.prototype.setUp = function()
{
	var that = this;
	this.mApplication.showScreen(this.mDivName)
	var sT = getAssetPath("img","img/images/image3.png")
	document.getElementById('carousel_3_img').style.backgroundImage = "url("+sT+")"
	document.getElementById('instruction_back').onclick= function()
	{
		that.mApplication.setGameState(30);
		that.mApplication.nextTransition();
	};
	
	document.getElementById('instruction_play').onclick= function()
	{
		that.mApplication.setGameState(70);
		that.mApplication.nextTransition();
	};
	
}
