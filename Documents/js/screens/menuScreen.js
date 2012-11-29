/**
author - deviator
*/


function MenuScreen (app)
{
	this.mApplication = app;
	this.mDivName ="menuScreen";
	this.setUp();
	
}


MenuScreen.prototype.setUp = function()
{
	var that = this;
	var sT = getAssetPath("img","img/images/image4.png")
	this.mApplication.showScreen(this.mDivName)
	document.getElementById('screen_2_logo').style.backgroundImage = "url('"+sT+"')"
	var sT1 = getAssetPath("img","img/images/image3.png")
	document.getElementById('carousel_2_img').style.backgroundImage = "url('"+sT1+"')"

	document.getElementById('how_to_play').onclick= function()
	{
		that.mApplication.setGameState(50);
		that.mApplication.nextTransition();
	};
	
	document.getElementById('play_the_game').onclick= function()
	{
		
		that.mApplication.setGameState(70);
		that.mApplication.nextTransition();
	};
	
}
