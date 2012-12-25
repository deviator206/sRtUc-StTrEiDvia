/**
 author - deviator
 */
var callback_function_carousel = null

function CarouselScreen(app) {
	this.mApplication = app;
	this.mDivName = "carouselScreen";
	this.setUp();

}

CarouselScreen.prototype.setUp = function() {
	var that = this;
	this.mApplication.showScreen(this.mDivName)
	this.mApplication.showSelectedScreen('grey_bottom')
	document.getElementById('timer_txt').innerHTML = '000';
	document.getElementById('score_txt').innerHTML = '000';

	if (!this.mApplication.bcarouselCreated) {
		this.mApplication.bcarouselCreated = true;

		var sContent = '<div class="myloader"></div><ul  id ="carousel_ul_li_holder" class="allinone_carousel_list" style="background-color:#999966;">'
		document.getElementById('allinone_carousel_charming').innerHTML = sContent;
		for (var i = 1; i <= 25; i++) {
			//var km = getAssetPath("img","img/iPhone/"+i+".png");
			var ele = document.createElement('li');
			ele.setAttribute('id', "li_ele_" + i)
			document.getElementById('carousel_ul_li_holder').appendChild(ele);
			var mObj = this.mApplication.arrImagesTrack["C_" + i];
			mObj.setAttribute('id', "li_" + i);
			mObj.setAttribute('width', "50");
			mObj.setAttribute('class', "reflectBelow");
			ele.appendChild(mObj);

			//sContent +='<li ><img class="reflectBelow" src="'+km+'" alt="" id="li_'+i+'" width="200" /></li>'
		}
		
		/*
		 skin: 'powerful',
								width: 150,
								height: 75,
								responsive:true,
								autoPlay: 0,
								resizeImages:true,
								autoHideBottomNav:false,
								showElementTitle:false,
								verticalAdjustment:50,
								showPreviewThumbs:false,
								
								numberOfVisibleItems:5,
								nextPrevMarginTop:0,
								playMovieMarginTop:0,
								bottomNavMarginBottom:0,
								callback:function(msg)
								{
									
									CLICK_HERE(msg)
								}
		 
		 */
		jQuery('#allinone_carousel_charming').allinone_carousel({
			skin : 'powerful',
			width : 150,
			height : 75,
			/*responsive:true,
			 autoPlay: 0,
			 resizeImages:true,
			 autoHideBottomNav:false,
			 showElementTitle:false,
			 verticalAdjustment:50,
			 showPreviewThumbs:false,
			 easing:'easeOutBounce',*/
			numberOfVisibleItems : 5,
			/*nextPrevMarginTop:0,
			 playMovieMarginTop:0,
			 bottomNavMarginBottom:0,*/
			callback : function(msg) {

				CLICK_HERE(msg)
			}
		});

	}
	document.getElementById('carousel_back').onclick = function() {
		if (that.mApplication.nGameState == 80) {
			//that.mApplication.startGameTimer()
			that.mApplication.setGameState(30);
			that.mApplication.nextTransition();
		} else if (that.mApplication.nGameState == 130) {
			that.mApplication.setGameState(70);
			that.mApplication.nextTransition();
		} else {
			that.mApplication.setGameState(70);
			that.mApplication.nextTransition();
		}
	};

}
function CLICK_HERE(i) {
	console.log('slected ' + i)
	_gMainApplication.startGameTimer(i)
	_gMainApplication.setGameState(90);
	_gMainApplication.nextTransition();

}
