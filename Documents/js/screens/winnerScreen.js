/**
author - deviator
*/


function WinnerScreen (app)
{
	this.mApplication = app;
	this.mDivName ="winnerScreen";
	this.setUp();
	
}
	
					

WinnerScreen.prototype.setUp = function()
{
	var that = this;
	this.mApplication.showScreen(this.mDivName)
	//this.mApplication.showSelectedScreen('grey_bottom');
	var sContentHTML = "";
	sContentHTML = '<h1 class="congEndTxt">CONGRATULATIONS</h1>';		
            sContentHTML += '<p class="congEndPara">';
            	sContentHTML += 'You are now a master!';
            sContentHTML += '</p>';
             sContentHTML += '<p class="congEndPara">';
            	sContentHTML += '<b>Join us in building a High Performance Nation.</b>';
            sContentHTML += '</p>';
            
            sContentHTML += '<div id= "learn_more" class="clickButton">Click here to learn more!</div>';
            
            sContentHTML += '<div id="peacockContainer" class="peacockImg" style="ba"></div>';
            
    
	document.getElementById('winnerScreen').innerHTML = ''+sContentHTML;
	var sT = getAssetPath("img","images/congratsEnd.png");
	document.getElementById('peacockContainer').style.backgroundImage = 'url('+sT+ ')'
	document.getElementById('learn_more').onclick= function()
	{
		that.mApplication.setGameState(140);		
		that.mApplication.nextTransition();
	};
	
}
