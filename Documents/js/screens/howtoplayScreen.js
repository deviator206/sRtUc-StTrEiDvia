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
	this.mApplication.showScreen(this.mDivName);
	
	var mObj = this.mApplication.arrImagesTrack['How-to-Play-for-the-25-years'];
	document.getElementById('new_add_on_how_to_play').appendChild(mObj);
	/*
	var sT = getAssetPath("img","img/images/image3.png")
	document.getElementById('carousel_3_img').style.backgroundImage = "url("+sT+")"*/
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
