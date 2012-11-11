/**
author - deviator
*/


function GamePlayScreen (app)
{
	this.mApplication = app;
	this.mDivName ="questionScreen";
	this.setUp();
	
}

GamePlayScreen.prototype.drawFooterImages = function(arr,color)
{
	var sCnt ="";
	var sA;
	for(var i =0;i<arr.length;i++)
	{
		sA = getAssetPath("img", "footer_images/" +arr[i]+""+color+".png");
		sCnt += '<img src="'+sA+'" />';
	}
	
	return sCnt;
	
}
GamePlayScreen.prototype.setUp = function()
{
	var that = this;
	this.mApplication.showScreen(this.mDivName)
	
	var sHTMLContent = "";
	var objContent  = config['questionSet'+this.mApplication.nLevelCounter];	
	sHTMLContent += '<div class="levelTxt"><span>Level '+this.mApplication.nLevelCounter+'</span> | Q. No: ' +this.mApplication.nQuestionIndex+ '/' +this.mApplication.arrLevelTotalQuestion[this.mApplication.nLevelCounter]+ '</div>';
				sHTMLContent += '<div class="qCont">';
					sHTMLContent += '<div class="questDiv">';
						sHTMLContent += '<div class="quesTxt">';
							//sHTMLContent += 'By 2050, India will have 160,000,000 wireless broadbandand optic fiber-based connections. That\'s equal to....';
							sHTMLContent += objContent[this.mApplication.nQuestionIndex].question; 
						sHTMLContent += '</div>';
						sHTMLContent += '<div class="ansBox">';
							sHTMLContent += '<div id ="option_1" class="ansTxt">A. '+ objContent[this.mApplication.nQuestionIndex].option_1+ '</div>';
							sHTMLContent += '<div id ="option_2"  class="ansTxt">B. '+ objContent[this.mApplication.nQuestionIndex].option_2+ '</div>';
							sHTMLContent += '<div id ="option_3"  class="ansTxt">C. '+ objContent[this.mApplication.nQuestionIndex].option_3+ '</div>';
							sHTMLContent += '<div id ="option_4"  class="ansTxt">D. '+ objContent[this.mApplication.nQuestionIndex].option_4+ '</div>';
						sHTMLContent += '</div>';
					sHTMLContent += '</div>';
					sHTMLContent += '<div class="qeusImg">';
					var sA = getAssetPath("img",objContent[this.mApplication.nQuestionIndex].img_url);
						sHTMLContent += '<img src="'+sA+'"  width=300/>';
					sHTMLContent += '</div>';
					
				sHTMLContent += '</div>';
		
				sHTMLContent += '<div class="footer">';
				for(var i=1;i<5;i++)
				{
					var objContent_loop  = config['questionSet'+this.mApplication.nLevelCounter];
					if(i < this.mApplication.nQuestionIndex)
					{
						
						sHTMLContent += this.drawFooterImages(objContent_loop[i].q_cnt,'_red')	
					}
					else
					{
						sHTMLContent += this.drawFooterImages(objContent_loop[i].q_cnt,'')
					}
				}
				sHTMLContent += '</div>';
	
	
	document.getElementById(this.mDivName).innerHTML =sHTMLContent;
	sHTMLContent ="";
	 this.sidePanel();
	
	
	document.getElementById('option_1').onclick= function()
	{
		that.mApplication.answerSelected(1)
	};
	document.getElementById('option_2').onclick= function()
	{
		that.mApplication.answerSelected(2)
	};
	document.getElementById('option_3').onclick= function()
	{
		that.mApplication.answerSelected(3)
	};
	document.getElementById('option_4').onclick= function()
	{
		that.mApplication.answerSelected(4)
	};
	
}


GamePlayScreen.prototype.sidePanel = function ()
{
	var sHTMLContent ="";
	var sA;
	this.mApplication.showSelectedScreen('sidePanel');
	var arrPercent = new Array(0,0,25,50,75,100);
			sHTMLContent += '<div class="perc">You have completed<br>';
			sHTMLContent += '<span> ' +arrPercent[this.mApplication.nQuestionIndex]+ '%</span><br>';
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
					sA = getAssetPath("img","sidepanel_images/level_1_image"+this.mApplication.nQuestionIndex+ ".png");
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
