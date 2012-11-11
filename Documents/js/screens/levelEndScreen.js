/**
author - deviator
*/


function LevelEndScreen (app)
{
	this.mApplication = app;
	this.mDivName ="levelEndScreen";
	this.setUp();
	
}

LevelEndScreen.prototype.sidePanel = function ()
{
	var sHTMLContent ="";
	var sA;
	
	this.mApplication.showSelectedScreen('sidePanel');
	var arrPercent = new Array(0,0,25,50,75,100);
			sHTMLContent += '<div class="perc">You have completed<br>';
			sHTMLContent += '<span> 100%</span><br>';
			for(var i=1;i<5;i++)
			{
				console.log
				if(i < this.mApplication.nLevelCounter)
				{
					sA = getAssetPath("img","sidepanel_images/level_"+i+"_image5.png");
			
				}
				else if(i ==  this.mApplication.nLevelCounter)
				{
					//sA = getAssetPath("img","sidepanel_images/level_"+i+"_image"+this.mApplication.nQuestionIndex+ ".png");
					sA = getAssetPath("img","sidepanel_images/level_1_image5.png");
				}
				else
				{
					sA = getAssetPath("img","sidepanel_images/level_1_image1.png");
				}
				
				sHTMLContent += '<img src="'+sA+'" /><br>';	
			}
			sHTMLContent += '</div>';
			
	document.getElementById('sidePanel').innerHTML =sHTMLContent;
	document.getElementById('sidePanel').className = 'rgtMenu'
}



LevelEndScreen.prototype.setUp = function()
{
	var that = this;
	this.mApplication.showScreen(this.mDivName)
	this.mApplication.showSelectedScreen('sidePanel');
	var sContentHTML = "";
	sContentHTML = '<div id="peacockContainer1" class="levelEndImg" style="ba"></div>';
	sContentHTML += '<div stye="position:absolute;"> <p class="congEndTxt2">Congratulations!</p>';		
            sContentHTML += '<p class="successTxt">';
            sContentHTML += '	You have successfully completed';
            sContentHTML += '</p>';
            sContentHTML += '<p class="successTxt">';
            	sContentHTML += '<b>Level ' +this.mApplication.nLevelCounter+ ':</b><span>' +config['level_'+this.mApplication.nLevelCounter+'_End'].topic+ '</span>';
            sContentHTML += '</p>';
            sContentHTML += '<p class="levlComplTxt">';
            	sContentHTML += ''+ config['level_'+this.mApplication.nLevelCounter+'_End'].content
            sContentHTML += '</p>';
            sContentHTML += '<div  id="start_next_level" class="nextButton">Next Level</div>';
            sContentHTML += '<div class="nxtLink">	';
            	sContentHTML += '<br/ ><br/ ><br/ ><br/ >';
            	sContentHTML += '<a href="javascript:void(0);" id ="linkToHB" >Master the Humming Bird origami here!</a>';
            sContentHTML += '</div>';
            sContentHTML += '</div>';
            	
         document.getElementById(this.mDivName).innerHTML =sContentHTML;
         var sT = getAssetPath("img","levelend_images/Level_1.png");
         document.getElementById('peacockContainer1').style.backgroundImage = 'url('+sT+ ')'
    
    document.getElementById('start_next_level').onclick= function()
	{
		
		that.mApplication.setGameState(120);		
		that.mApplication.nextTransition();
	};
	
	this.sidePanel();
	
	
	
	document.getElementById('linkToHB').onclick= function()
	{
		
		//document.getElementById('overlayScreen').style.display = "block";
		//var sT = getAssetPath("img","images/close-image.png");	
		//document.getElementById('origamiholder').style.backgroundImage = 'url('+sT+ ')'
		//that.mApplication.setGameState(120);		
		//that.mApplication.nextTransition();
	};
	
	//document.getElementById('origamiImageCloseButton').onclick = function()
	//{
		//document.getElementById('overlayScreen').style.display = "none"
	//}
}
