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
	if(document.getElementById(this.mDivName).innerHTML == "")
	{
			var sContent =""
			sContent = '<div class="introScreen">';
			sContent +=	'<div>';
						sContent +=	'<h2 style="margin-left:30px; margin-top:30px;">Introduction</h2>';
						sContent +=	'<p class="intropara">';
							sContent +=	'India is on an important journey to become a High<br />';
							sContent +=	'Performance Nation and Accenture is proud to be a part<br />';
							sContent +=	'of it. Our vision for this journey is built on four strong<br />';
							sContent +=	'pillars:';
						sContent +=	'</p>';
					sContent +=	'</div>';
					var sT = getAssetPath("img","images/red.png");			
					sContent +=	'<div class="introImgs"><img src="'+sT+'" /><div class="figTitle">Digital Citizen</div></div>';
					sT = getAssetPath("img","images/blue.png");
					sContent +=	'<div class="introImgs"><img src="'+sT+'" /><div class="figTitle" style="margin-top: 32px !important;">Empowered People</div></div>';
					sT = getAssetPath("img","images/yellow.png");
					sContent +=	'<div class="introImgs"><img src="'+sT+'" /><div class="figTitle">Innovation Economy</div></div>';
					sT = getAssetPath("img","images/green.png");
					sContent +=	'<div class="introImgs"><img src="'+sT+'" /><div class="figTitle" style="margin-left:-2px !important">Collaborative Ecosystem</div></div>';
					
				sContent +=	'</div>';
				sContent +=	'<div class="introScreen">';
					sContent +=	'<ul>';
						sContent +=	'<li>Digital Citizen</li>';
						sContent +=	'<li>Empowered People</li>';
						sContent +=	'<li>Innovation Economy</li>';
						sContent +=	'<li>Collaborative Ecosystem</li>';
					sContent +=	'</ul>';
					sContent +=	'<p class="intropara">';
						sContent +=	'Each pillar conveys a distinct, strategic imperative and the <br />';
						sContent +=	'four pillars contribute to the evolution of a High<br />';
						sContent +=	'Performance Nation- represented by four birds riding on the<br />';
						sContent +=	'back of the Peacock, the nationalbird of India.';
					sContent +=	'</p>';
	                sContent +=	'<p class="intropara">';
						sContent +=	'India: A Flight of Ideas celebrates this journey Join the<br />';
						sContent +=	'adventure by answering questions that will help create the<br />';
						sContent +=	'four origami birds, which descends on the Peacock- creating<br />';
						sContent +=	'a unified vision of our High Performance Nation';
					sContent +=	'</p>';
	                sContent +=	'<div  id= "intro_play_now" class="playButton">Play now</div>';
				sContent +=	'</div>';
				document.getElementById(this.mDivName).innerHTML = sContent;
	
	}
	
	
	
				
	document.getElementById('intro_play_now').onclick= function()
	{
		that.mApplication.nextTransition();
	};
	
}
