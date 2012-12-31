(function($) {

	var arrowClicked = false;

	// navigation
	function allinone_carousel_navigation_SMALL(direction, options, current_obj, bottomNavButs, imgs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight, total_images, allinone_carousel_playOver, allinone_carousel_elementTitle) {

		var new_width;
		var new_height;
		var new_left;
		var new_top;
		//reinit content to stop videos
		if (jQuery(imgs[current_obj.current_img_no]).attr('data-video') == 'true')
			jQuery('#SM_contentHolderUnit_' + current_obj.current_img_no, allinone_carousel_container).html(jQuery(imgs[current_obj.current_img_no]).html());

		//deactivate previous
		jQuery(bottomNavButs[current_obj.current_img_no]).removeClass('bottomNavButtonON_SM');

		//set current img no
		current_obj.current_img_no = set_img_no_SMALL(current_obj.current_img_no, direction, total_images);
		//alert(current_obj.current_img_no)

		if (jQuery(imgs[current_obj.current_img_no]).attr('data-video') != 'true')
			allinone_carousel_playOver.css('display', 'none');

		//activate current
		jQuery(bottomNavButs[current_obj.current_img_no]).addClass('bottomNavButtonON_SM');

		//animate current one
		current_obj.currentZ_index = 100;
		//current_obj.currentImg = jQuery('#contentHolderUnit_'+current_obj.current_img_no);
		current_obj.currentImg = jQuery('#SM_contentHolderUnit_' + current_obj.current_img_no, allinone_carousel_container);
		new_width = contentHolderUnitOrigWidth;
		new_height = contentHolderUnitOrigHeight;
		new_left = parseInt((options.width - contentHolderUnitOrigWidth) / 2);
		new_top = parseInt(options.height - contentHolderUnitOrigHeight) - options.verticalAdjustment;

		animateDiv_SMALL(current_obj.currentImg, new_left, new_top, new_width, new_height, 1, false, direction, current_obj, options, allinone_carousel_elementTitle, imgs, total_images, allinone_carousel_playOver, bottomNavButs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight);

		//animate left wing
		aux_img_no = current_obj.current_img_no;
		for ( m = 1; m <= Math.floor(options.numberOfVisibleItems / 2); m++) {
			current_obj.currentZ_index--;
			aux_img_no = set_img_no_SMALL(aux_img_no, -1, total_images);
			current_obj.currentImg = jQuery('#SM_contentHolderUnit_' + aux_img_no);
			current_obj.currentImg = jQuery('#SM_contentHolderUnit_' + aux_img_no, allinone_carousel_container);
			current_obj.currentImg.css('z-index', current_obj.currentZ_index);
			
			//pozition last to enter the scene
			if (m == Math.floor(options.numberOfVisibleItems / 2)) {
				if (direction === 1) {
					last_aux_img_no = set_img_no_SMALL(aux_img_no, -1, total_images);
					//last_currentImg = jQuery('#contentHolderUnit_'+last_aux_img_no);
					last_currentImg = jQuery('#SM_contentHolderUnit_' + last_aux_img_no, allinone_carousel_container);
					//last_currentImg.css('z-index',current_obj.currentZ_index-1);
					new_height = contentHolderUnitOrigHeight - 2 * (m + 1) * options.elementsVerticalSpacing;
					new_width = parseInt(new_height * current_obj.aspectOrig);
					new_left = parseInt((options.width - contentHolderUnitOrigWidth) / 2) - (m + 1) * options.elementsHorizontalSpacing;
					new_top = parseInt(options.height - contentHolderUnitOrigHeight) - options.verticalAdjustment + (m + 1) * options.elementsVerticalSpacing;
				
					animateDiv_SMALL(last_currentImg, new_left, new_top, new_width, new_height, 0, false, direction, current_obj, options, allinone_carousel_elementTitle, imgs, total_images, allinone_carousel_playOver, bottomNavButs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight);
				} else {//direction=-1
					new_height = contentHolderUnitOrigHeight - 2 * (m + 1) * options.elementsVerticalSpacing;
					new_width = parseInt(new_height * current_obj.aspectOrig);
					resizeDiv_SMALL(current_obj.currentImg, (m + 1), options, contentHolderUnitOrigHeight, current_obj);

					new_left = parseInt((options.width - contentHolderUnitOrigWidth) / 2) - (m + 1) * options.elementsHorizontalSpacing;
					new_top = parseInt(options.height - contentHolderUnitOrigHeight) - options.verticalAdjustment + (m + 1) * options.elementsVerticalSpacing;
				
					current_obj.currentImg.css('left', new_left);
					current_obj.currentImg.css('top', new_top);
					current_obj.currentImg.css('opacity', 0);

					//alert (current_obj.currentImg.html());
				}

			}
			current_obj.currentImg.css('display', 'block');

			new_height = contentHolderUnitOrigHeight - 2 * m * options.elementsVerticalSpacing;
			new_width = parseInt(new_height * current_obj.aspectOrig);
			new_left = parseInt((options.width - contentHolderUnitOrigWidth) / 2) - m * options.elementsHorizontalSpacing;
			new_top = parseInt(options.height - contentHolderUnitOrigHeight) - options.verticalAdjustment + m * options.elementsVerticalSpacing;

			animateDiv_SMALL(current_obj.currentImg, new_left, new_top, new_width, new_height, 1, false, direction, current_obj, options, allinone_carousel_elementTitle, imgs, total_images, allinone_carousel_playOver, bottomNavButs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight);

		}

		//animate right wing
		var aux_img_no = current_obj.current_img_no;
		for ( m = 1; m <= Math.floor(options.numberOfVisibleItems / 2); m++) {
			current_obj.currentZ_index--;
			aux_img_no = set_img_no_SMALL(aux_img_no, 1, total_images);
			//current_obj.currentImg = jQuery('#contentHolderUnit_'+aux_img_no);
			current_obj.currentImg = jQuery('#SM_contentHolderUnit_' + aux_img_no, allinone_carousel_container);
			current_obj.currentImg.css('z-index', current_obj.currentZ_index);
			
			//pozition last to enter the scene
			if (m == Math.floor(options.numberOfVisibleItems / 2)) {
				if (direction === 1) {
					resizeDiv_SMALL(current_obj.currentImg, (m + 1), options, contentHolderUnitOrigHeight, current_obj);
					//alert (m+'--'+aux_img_no)
					
					current_obj.currentImg.css('left', parseInt((options.width - contentHolderUnitOrigWidth) / 2) + (contentHolderUnitOrigWidth + (m + 1) * options.elementsHorizontalSpacing - current_obj.currentImg.width()) + 'px');
					current_obj.currentImg.css('top', parseInt(options.height - contentHolderUnitOrigHeight) - options.verticalAdjustment + (m + 1) * options.elementsVerticalSpacing + 'px');
					current_obj.currentImg.css('opacity', 0);
				} else {

					last_aux_img_no = set_img_no_SMALL(aux_img_no, 1, total_images);
					//last_currentImg = jQuery('#contentHolderUnit_'+last_aux_img_no);
					last_currentImg = jQuery('#SM_contentHolderUnit_' + last_aux_img_no, allinone_carousel_container);
					//last_currentImg.css('z-index',current_obj.currentZ_index-1);
					new_height = contentHolderUnitOrigHeight - 2 * (m + 1) * options.elementsVerticalSpacing;
					new_width = parseInt(new_height * current_obj.aspectOrig);
					new_left = parseInt((options.width - contentHolderUnitOrigWidth) / 2) + (contentHolderUnitOrigWidth + (m + 1) * options.elementsHorizontalSpacing - new_width);
					new_top = parseInt(options.height - contentHolderUnitOrigHeight) - options.verticalAdjustment + (m + 1) * options.elementsVerticalSpacing;

					animateDiv_SMALL(last_currentImg, new_left, new_top, new_width, new_height, 0, false, direction, current_obj, options, allinone_carousel_elementTitle, imgs, total_images, allinone_carousel_playOver, bottomNavButs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight);
				}
			}
			current_obj.currentImg.css('display', 'block');

			new_height = contentHolderUnitOrigHeight - 2 * m * options.elementsVerticalSpacing;
			new_width = parseInt(new_height * current_obj.aspectOrig);
			new_left = parseInt((options.width - contentHolderUnitOrigWidth) / 2) + (contentHolderUnitOrigWidth + m * options.elementsHorizontalSpacing - new_width);
			new_top = parseInt(options.height - contentHolderUnitOrigHeight) - options.verticalAdjustment + m * options.elementsVerticalSpacing;

			if (m == Math.floor(options.numberOfVisibleItems / 2))
				animateDiv_SMALL(current_obj.currentImg, new_left, new_top, new_width, new_height, 1, true, direction, current_obj, options, allinone_carousel_elementTitle, imgs, total_images, allinone_carousel_playOver, bottomNavButs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight);
			else
				animateDiv_SMALL(current_obj.currentImg, new_left, new_top, new_width, new_height, 1, false, direction, current_obj, options, allinone_carousel_elementTitle, imgs, total_images, allinone_carousel_playOver, bottomNavButs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight);

		}

	};

	function resizeDiv_SMALL(the_div, curNumber, options, contentHolderUnitOrigHeight, current_obj) {
		//aspect = the_div.width() / the_div.height();
		var new_height = contentHolderUnitOrigHeight - 2 * curNumber * options.elementsVerticalSpacing;
		var new_width = parseInt(new_height * current_obj.aspectOrig);

		the_div.css('height', new_height + 'px');
		the_div.css('width', new_width + 'px');

		if (options.resizeImages) {
			imgInside = the_div.find('img:first');
			if (imgInside.is('img')) {
				imgInside.css('height', new_height + 'px');
				imgInside.css('width', new_width + 'px');
			}
		}
	}

	function animateDiv_SMALL(the_div, new_left, new_top, new_width, new_height, new_opacity, autoplay_next, direction, current_obj, options, allinone_carousel_elementTitle, imgs, total_images, allinone_carousel_playOver, bottomNavButs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight) {
		current_obj.slideIsRunning = true;
		// the title
		allinone_carousel_elementTitle.html(jQuery(imgs[current_obj.current_img_no]).attr('data-title'));
		//alert (current_obj.current_img_no)

		//new_opacity=0.5;
		if (new_opacity === 0)
			the_div.css('z-index', current_obj.currentZ_index - 1);
		else
			the_div.css('z-index', current_obj.currentZ_index);
		the_div.css('display', 'block');
		the_div.animate({
			left : new_left + 'px',
			top : new_top + 'px',
			width : new_width + 'px',
			height : new_height + 'px',
			opacity : new_opacity
		}, options.animationTime * 1000, options.easing, function() {
			// Animation complete.
			if (autoplay_next) {
				current_obj.slideIsRunning = false;

				if (jQuery(imgs[current_obj.current_img_no]).attr('data-video') == 'true')
					allinone_carousel_playOver.css('display', 'block');

				if ((options.autoPlay > 0 && total_images > 1 && !current_obj.mouseOverBanner && !current_obj.fastForwardRunning) || (current_obj.current_img_no != current_obj.img_no_where_to_stop && current_obj.fastForwardRunning)) {
					clearTimeout(current_obj.timeoutID);
					//current_obj.timeoutID=setTimeout(function(){ allinone_carousel_navigation_SMALL(direction,options,current_obj,bottomNavButs,imgs,allinone_carousel_container,contentHolderUnitOrigWidth,contentHolderUnitOrigHeight,total_images,allinone_carousel_playOver,allinone_carousel_elementTitle)},options.autoPlay*1000);
				}
				// jQuery('#log').html(current_obj.current_img_no+' == '+current_obj.img_no_where_to_stop);
				if (current_obj.current_img_no == current_obj.img_no_where_to_stop && current_obj.fastForwardRunning) {
					//alert (current_obj.fastForwardRunning);
					current_obj.fastForwardRunning = false;
					options.animationTime = current_obj.animationTimeOrig;
					options.autoPlay = current_obj.autoPlayOrig;
					clearTimeout(current_obj.timeoutID);
					//current_obj.timeoutID=setTimeout(function(){ allinone_carousel_navigation_SMALL(1,options,current_obj,bottomNavButs,imgs,allinone_carousel_container,contentHolderUnitOrigWidth,contentHolderUnitOrigHeight,total_images,allinone_carousel_playOver,allinone_carousel_elementTitle)},options.autoPlay*1000);
				}
			}
		});

		if (options.resizeImages) {
			imgInside = the_div.find('img:first');
			if (imgInside.is('img')) {
				imgInside.animate({
					width : new_width + 'px',
					height : new_height + 'px'
				}, options.animationTime * 1000, options.easing, function() {
					// Animation complete.
				});
			}
		}
	}

	function set_img_no_SMALL(the_number, direction, total_images) {
		if (the_number + direction >= total_images) {
			the_number = 0;
		} else if (the_number + direction < 0) {
			the_number = total_images - 1;
		} else {
			the_number += direction;
		}

		return the_number;
	}

	function fastForwardMove_SMALL(i, options, current_obj, bottomNavButs, imgs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight, total_images, allinone_carousel_playOver, allinone_carousel_elementTitle) {
		if (current_obj.current_img_no - i === -1) {
			allinone_carousel_navigation_SMALL(1, options, current_obj, bottomNavButs, imgs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight, total_images, allinone_carousel_playOver, allinone_carousel_elementTitle);
		} else if (current_obj.current_img_no - i === 1) {
			allinone_carousel_navigation_SMALL(-1, options, current_obj, bottomNavButs, imgs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight, total_images, allinone_carousel_playOver, allinone_carousel_elementTitle);
		} else {
			current_obj.fastForwardRunning = true;
			options.animationTime = 0.4;
			options.autoPlay = 0.1;
			current_obj.img_no_where_to_stop = i;
			if (current_obj.current_img_no < i) {//possible fast forward
				if (i - current_obj.current_img_no < (total_images - i + current_obj.current_img_no))
					allinone_carousel_navigation_SMALL(1, options, current_obj, bottomNavButs, imgs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight, total_images, allinone_carousel_playOver, allinone_carousel_elementTitle);
				else
					allinone_carousel_navigation_SMALL(-1, options, current_obj, bottomNavButs, imgs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight, total_images, allinone_carousel_playOver, allinone_carousel_elementTitle);
			} else if (current_obj.current_img_no > i) {//possible fast backward
				if ((current_obj.current_img_no - i) < (total_images - current_obj.current_img_no + i))
					allinone_carousel_navigation_SMALL(-1, options, current_obj, bottomNavButs, imgs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight, total_images, allinone_carousel_playOver, allinone_carousel_elementTitle);
				else
					allinone_carousel_navigation_SMALL(1, options, current_obj, bottomNavButs, imgs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight, total_images, allinone_carousel_playOver, allinone_carousel_elementTitle);
			}
		}
	}


	$.fn.allinone_carousel_SMALL = function(options) {
		callback_function_carousel = options.callback;

		var options
		options = $.extend({}, $.fn.allinone_carousel_SMALL.defaults_SMALL, options);

		return this.each(function() {
			
			var allinone_carousel_the = jQuery(this);

var allinone_carousel_wrap 
var bannerControls 
			//the controllers
			
			//if(document.getElementById('SM_mini_wrapper') == null)
			//{
				//console.log(""+options.skin);	
				allinone_carousel_wrap = jQuery('<div id="SM_mini_wrapper"></div>').addClass('allinone_carousel_SM').addClass(options.skin);
				bannerControls = jQuery('<div class="bannerControls">   <div  id="carousel_leftNav_sm" class="leftNav"></div>   <div id="carousel_rightNav_sm" class="rightNav"></div>    </div>  <div  id= "SM_contentHolder_actualcontainer"class="SM_contentHolder"></div>   <div class="elementTitle"></div>	<div class="playOver"></div>');
				allinone_carousel_the.wrap(allinone_carousel_wrap);
				allinone_carousel_the.after(bannerControls);
			//}
			
			document.getElementById('carousel_leftNav_sm').appendChild(_gMainApplication.arrImagesTrack['leftNav_Carousel_sm']);
			document.getElementById('carousel_rightNav_sm').appendChild(_gMainApplication.arrImagesTrack['rightNav_Carousel_sm']);
			_gMainApplication.arrImagesTrack['leftNav_Carousel_sm'].className = "leftNav_img";
			_gMainApplication.arrImagesTrack['rightNav_Carousel_sm'].className = "rightNav_img";
			

			//the elements
			var allinone_carousel_container = allinone_carousel_the.parent('.allinone_carousel_SM');
			var bannerControls = jQuery('.bannerControls', allinone_carousel_container);

			var isCarouselScrolling = false;
			var carouselStep = 0;
			var allinone_carousel_contentHolder = jQuery('.SM_contentHolder', allinone_carousel_container);

			//if(document.getElementById('bottomNav_m1') == null)
			//{
				var bottomNavLeft_aux = jQuery('<div id="bottomNav_m1" class="bottomNavLeft"></div>');
			var bottomNav_aux = jQuery('<div id="bottomNav_m2" class="bottomNav"></div>');
			var bottomNavRight_aux = jQuery('<div id="bottomNav_m3" class="bottomNavRight"></div>');

			allinone_carousel_the.after(bottomNavLeft_aux);
			allinone_carousel_the.after(bottomNav_aux);
			allinone_carousel_the.after(bottomNavRight_aux);	
			//}
			

			if (!options.showAllControllers)
				bannerControls.css("display", "none");

			var allinone_carousel_leftNav = jQuery('.leftNav', allinone_carousel_container);
			var allinone_carousel_rightNav = jQuery('.rightNav', allinone_carousel_container);
			allinone_carousel_leftNav.css("display", "none");
			allinone_carousel_rightNav.css("display", "none");
			if (options.showNavArrows) {
				if (options.showOnInitNavArrows) {
					allinone_carousel_leftNav.css("display", "block");
					allinone_carousel_rightNav.css("display", "block");
				}
			}

			var allinone_carousel_bottomNav = jQuery('.bottomNav', allinone_carousel_container);
			
			var allinone_carousel_bottomNavLeft = jQuery('.bottomNavLeft', allinone_carousel_container);
			var allinone_carousel_bottomNavRight = jQuery('.bottomNavRight', allinone_carousel_container);
			var allinone_carousel_bottomOverThumb;
			allinone_carousel_bottomNav.css("display", "block");
			allinone_carousel_bottomNavLeft.css("display", "block");
			allinone_carousel_bottomNavRight.css("display", "block");
			if (!options.showBottomNav) {
				allinone_carousel_bottomNav.css("display", "none");
				allinone_carousel_bottomNavLeft.css("display", "none");
				allinone_carousel_bottomNavRight.css("display", "none");
			}
			if (!options.showOnInitBottomNav) {
				allinone_carousel_bottomNav.css("left", "-5000px");
				allinone_carousel_bottomNavLeft.css("left", "-5000px");
				allinone_carousel_bottomNavRight.css("left", "-5000px");
			}

			var allinone_carousel_elementTitle = jQuery('.elementTitle', allinone_carousel_container);
			if (!options.showElementTitle)
				allinone_carousel_elementTitle.css('display', 'none');

			var allinone_carousel_playOver = jQuery('.playOver', allinone_carousel_container);

			//the vars
			var total_images = 0;
			var current_obj = {
				current_img_no : 0,
				currentImg : 0,
				currentZ_index : 101,
				slideIsRunning : false,
				mouseOverBanner : false,
				fastForwardRunning : false,
				isVideoPlaying : false,
				img_no_where_to_stop : 0,
				aspectOrig : 0,
				timeoutID : '',
				animationTimeOrig : options.animationTime,
				autoPlayOrig : options.autoPlay
			};
			var imgInside;
			//var current_obj.timeoutID; // the autoplay timeout ID

			//var animationTimeOrig = options.animationTime;
			//var autoPlayOrig = options.autoPlay;
			var i = 0;

			//set banner size
			allinone_carousel_container.width(options.width);
			allinone_carousel_container.height(options.height);

			allinone_carousel_contentHolder.width(options.width);
			//initial width
			allinone_carousel_contentHolder.height(options.height);

			//bannerControls.width('100%');
			//bannerControls.height('100%');
			bannerControls.css('margin-top', parseInt((options.height - allinone_carousel_leftNav.height())) + 'px');

			//get images
			var theul = allinone_carousel_the.find('ul:first');
			var imgs = theul.children();
			//alert (allinone_carousel_the.find('ul:first li').length+'  --  '+imgs.length)

			if (options.numberOfVisibleItems > allinone_carousel_the.find('ul:first li').length)
				options.numberOfVisibleItems = allinone_carousel_the.find('ul:first li').length;
			if (!(options.numberOfVisibleItems % 2))
				options.numberOfVisibleItems--;

			var contentHolderUnit;
			var contentHolderUnitOrigWidth = 0;
			var contentHolderUnitOrigHeight = 0;
			var bottomNavBut;
			var bottomNavWidth = 0;
			var bottomNavMarginTop = 0;
			//document.getElementById('SM_contentHolder_actualcontainer').innerHTML ="";
			imgs.each(function() {
				
				current_obj.currentImg = jQuery(this);
				if (!current_obj.currentImg.is('li')) {
					current_obj.currentImg = current_obj.currentImg.find('li:first');
				}

				//alert (current_obj.currentImg.attr('title'))

				if (current_obj.currentImg.is('li')) {
					total_images++;
					//'+current_obj.currentImg.html()+'
					contentHolderUnit = jQuery('<div class="SM_contentHolderUnit" rel="' + (total_images - 1) + '" id="SM_contentHolderUnit_' + (total_images - 1) + '">' + current_obj.currentImg.html() + '</div>');
					allinone_carousel_contentHolder.append(contentHolderUnit);
					contentHolderUnit.css('display', 'none');

					if (contentHolderUnitOrigWidth === 0) {
						contentHolderUnitOrigWidth = 40//contentHolderUnit.width();
						contentHolderUnitOrigHeight = 75// contentHolderUnit.height();
						current_obj.aspectOrig = contentHolderUnitOrigWidth / contentHolderUnitOrigHeight;
					}

					resizeDiv_SMALL(contentHolderUnit, 0, options, contentHolderUnitOrigHeight, current_obj);
					//contentHolderUnit.css('left',parseInt((options.width-contentHolderUnit.width())/2)+'px');
					contentHolderUnit.css('top', parseInt(options.height - contentHolderUnit.height()) - options.verticalAdjustment + 'px');

					if (total_images == 1) {
						//contentHolderUnit.css('left',parseInt((options.width-contentHolderUnit.width())/2)+'px');
						contentHolderUnit.css('top', parseInt(options.height - contentHolderUnit.height()) - options.verticalAdjustment + 'px');
						contentHolderUnit.css('z-index', current_obj.currentZ_index);
						contentHolderUnit.css('display', 'block');
						if (jQuery(imgs[current_obj.current_img_no]).attr('data-video') == 'true')
							allinone_carousel_playOver.css('display', 'block');
					} else {
						if (total_images <= Math.ceil(options.numberOfVisibleItems / 2)) {
							current_obj.currentZ_index--;
							resizeDiv_SMALL(contentHolderUnit, (total_images - 1), options, contentHolderUnitOrigHeight, current_obj);
							

							contentHolderUnit.css('left', parseInt((options.width - contentHolderUnitOrigWidth) / 2) + (contentHolderUnitOrigWidth + (total_images - 1) * options.elementsHorizontalSpacing - contentHolderUnit.width()) + 'px');
							contentHolderUnit.css('top', parseInt(options.height - contentHolderUnitOrigHeight) - options.verticalAdjustment + (total_images - 1) * options.elementsVerticalSpacing + 'px');
							contentHolderUnit.css('z-index', current_obj.currentZ_index);
							contentHolderUnit.css('display', 'block');

						}
					}

					//generate bottomNav
					//if(document.getElementById('mini_bottonNav_on_off') == null)
					//{
						bottomNavBut = jQuery('<div id="mini_bottonNav_on_off" class="bottomNavButtonOFF" rel="' + (total_images - 1) + '"></div>');
					allinone_carousel_bottomNav.append(bottomNavBut);	
					 
					

					bottomNavWidth += parseInt(bottomNavBut.css('padding-left').substring(0, bottomNavBut.css('padding-left').length - 2)) + bottomNavBut.width();
					bottomNavMarginTop = parseInt((allinone_carousel_bottomNav.height() - parseInt(bottomNavBut.css('height').substring(0, bottomNavBut.css('height').length - 2))) / 2);
					//alert (bottomNavMarginTop);
					bottomNavBut.css('margin-top', bottomNavMarginTop + 'px');
				/*	}
					else
					{
						bottomNavBut = jQuery('#mini_bottonNav_on_off');
					}*/
				}

			});
			//bottomNavWidth+=parseInt(bottomNavBut.css('padding-left').substring(0, bottomNavBut.css('padding-left').length-2));
			
			allinone_carousel_playOver.css('left', parseInt((options.width - allinone_carousel_playOver.width()) / 2) + 'px');
			allinone_carousel_playOver.css('top', parseInt(options.height - contentHolderUnit.height() - options.verticalAdjustment + (jQuery('#SM_contentHolderUnit_' + current_obj.current_img_no, allinone_carousel_container).height() - allinone_carousel_playOver.height()) / 2) + 'px');

			//rearange left wing
			current_obj.currentZ_index = 100;
			for ( m = 1; m <= Math.floor(options.numberOfVisibleItems / 2); m++) {
				current_obj.currentZ_index--;
				

				//resizeDiv_SMALL(jQuery('#contentHolderUnit_'+(total_images-m), allinone_carousel_container),m,options,contentHolderUnitOrigHeight,current_obj);
				jQuery('#SM_contentHolderUnit_' + (total_images - m), allinone_carousel_container).css('left', parseInt((options.width - contentHolderUnitOrigWidth) / 2) - m * options.elementsHorizontalSpacing + 'px');
				jQuery('#SM_contentHolderUnit_' + (total_images - m), allinone_carousel_container).css('top', parseInt(options.height - contentHolderUnitOrigHeight) - options.verticalAdjustment + m * options.elementsVerticalSpacing + 'px');
				jQuery('#SM_contentHolderUnit_' + (total_images - m), allinone_carousel_container).css('z-index', current_obj.currentZ_index);
				jQuery('#SM_contentHolderUnit_' + (total_images - m), allinone_carousel_container).css('display', 'block');
			}

			allinone_carousel_elementTitle.html(jQuery(imgs[0]).attr('data-title'));

			allinone_carousel_bottomNav.width(bottomNavWidth);
			if (options.showOnInitBottomNav) {
				
				//console.log(' LINE :: '+allinone_carousel_bottomNavLeft+" : "+allinone_carousel_bottomNav.css('left')+' :: '+bottomNavBut)
				allinone_carousel_bottomNav.css("left", parseInt((allinone_carousel_container.width() - bottomNavWidth) / 2) + 'px');
				allinone_carousel_bottomNavLeft.css("left", parseInt(allinone_carousel_bottomNav.css('left').substring(0, allinone_carousel_bottomNav.css('left').length - 2)) - allinone_carousel_bottomNavLeft.width() + 'px');
				allinone_carousel_bottomNavRight.css("left", parseInt(allinone_carousel_bottomNav.css('left').substring(0, allinone_carousel_bottomNav.css('left').length - 2)) + allinone_carousel_bottomNav.width() + parseInt(bottomNavBut.css('padding-left').substring(0, bottomNavBut.css('padding-left').length - 2)) + 'px');
			}
			//for youtube iframes
			jQuery("iframe").each(function() {
				var ifr_source = jQuery(this).attr('src');
				var wmode = "?wmode=transparent";
				jQuery(this).attr('src', ifr_source + wmode);
			});

			//initialize first number image
			current_obj.current_img_no = 0;
			current_obj.currentImg = jQuery(imgs[current_obj.current_img_no]);

			//pause on hover
			allinone_carousel_container.mouseenter(function() {
				current_obj.mouseOverBanner = true;
				clearTimeout(current_obj.timeoutID);
				if (options.autoHideNavArrows && options.showNavArrows) {
					allinone_carousel_leftNav.css("display", "block");
					allinone_carousel_rightNav.css("display", "block");
				}
				if (options.autoHideBottomNav && options.showBottomNav) {
					allinone_carousel_bottomNav.css("display", "block");
					allinone_carousel_bottomNav.css("left", parseInt((allinone_carousel_container.width() - bottomNavWidth) / 2) + 'px');

					allinone_carousel_bottomNavLeft.css("display", "block");
					allinone_carousel_bottomNavLeft.css("left", parseInt(allinone_carousel_bottomNav.css('left').substring(0, allinone_carousel_bottomNav.css('left').length - 2)) - allinone_carousel_bottomNavLeft.width() + 'px');

					allinone_carousel_bottomNavRight.css("display", "block");
					allinone_carousel_bottomNavRight.css("left", parseInt(allinone_carousel_bottomNav.css('left').substring(0, allinone_carousel_bottomNav.css('left').length - 2)) + allinone_carousel_bottomNav.width() + parseInt(bottomNavBut.css('padding-left').substring(0, bottomNavBut.css('padding-left').length - 2)) + 'px');

				}
			});

			/*allinone_carousel_container.mouseleave(function() {
			current_obj.mouseOverBanner=false;
			if (options.autoHideNavArrows && options.showNavArrows) {
			allinone_carousel_leftNav.css("display","none");
			allinone_carousel_rightNav.css("display","none");
			}
			if (options.autoHideBottomNav && options.showBottomNav) {
			allinone_carousel_bottomNav.css("display","none");
			allinone_carousel_bottomNavLeft.css("display","none");
			allinone_carousel_bottomNavRight.css("display","none");
			}
			if (options.autoPlay>0 && total_images>1 && !current_obj.fastForwardRunning && !current_obj.isVideoPlaying) {
			clearTimeout(current_obj.timeoutID);
			current_obj.timeoutID=setTimeout(function(){ allinone_carousel_navigation_SMALL(1,options,current_obj,bottomNavButs,imgs,allinone_carousel_container,contentHolderUnitOrigWidth,contentHolderUnitOrigHeight,total_images,allinone_carousel_playOver,allinone_carousel_elementTitle)},options.autoPlay*1000);
			}
			});*/

			//contentHolderUnit click
			//var contentHolderUnit=jQuery(".contentHolderUnit");

			var contentHolderUnit = jQuery('.SM_contentHolderUnit', allinone_carousel_container);
			contentHolderUnit.click(function() {
				var i = jQuery(this).attr('rel');
				callback_function_carousel(i);

			});

			/*allinone_carousel_playOver.click(function() {

			allinone_carousel_playOver.css('display','none');
			//imgInside = jQuery('#contentHolderUnit_'+current_obj.current_img_no).find('img:first');
			imgInside = jQuery('#contentHolderUnit_'+current_obj.current_img_no, allinone_carousel_container).find('img:first');
			imgInside.css('display','none');
			current_obj.isVideoPlaying=true;
			});*/

			//controllers
			allinone_carousel_leftNav.mousedown(function() {
				arrowClicked = true;
				if (!current_obj.slideIsRunning && !current_obj.fastForwardRunning) {
					//current_obj.mouseOverBanner=false;
					current_obj.isVideoPlaying = false;
					clearTimeout(current_obj.timeoutID);
					allinone_carousel_navigation_SMALL(-1, options, current_obj, bottomNavButs, imgs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight, total_images, allinone_carousel_playOver, allinone_carousel_elementTitle);
				}
			});
			allinone_carousel_leftNav.mouseup(function() {
				arrowClicked = false;
			});
			allinone_carousel_rightNav.mousedown(function() {
				arrowClicked = true;
				if (!current_obj.slideIsRunning && !current_obj.fastForwardRunning) {
					//current_obj.mouseOverBanner=false;
					current_obj.isVideoPlaying = false;
					clearTimeout(current_obj.timeoutID);
					allinone_carousel_navigation_SMALL(1, options, current_obj, bottomNavButs, imgs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight, total_images, allinone_carousel_playOver, allinone_carousel_elementTitle);
				}
			});
			allinone_carousel_rightNav.mouseup(function() {
				arrowClicked = false;
			});

			allinone_carousel_leftNav.mousedown(null);
			allinone_carousel_rightNav.mousedown(null);

			//bottom nav
			//var bottomNavButs=jQuery(".bottomNavButtonOFF");
			var bottomNavButs = jQuery('.bottomNavButtonOFF', allinone_carousel_container);
			bottomNavButs.mousedown(function() {
				arrowClicked = true;
				if (!current_obj.slideIsRunning && !current_obj.fastForwardRunning) {
					var i = jQuery(this).attr('rel');
					if (i != current_obj.current_img_no) {
						//alert (i+'  --  '+current_obj.current_img_no+'  --  '+total_images);
						//deactivate previous
						current_obj.isVideoPlaying = false;
						jQuery(bottomNavButs[current_obj.current_img_no]).removeClass('bottomNavButtonON_SM');

						fastForwardMove_SMALL(parseInt(i), options, current_obj, bottomNavButs, imgs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight, total_images, allinone_carousel_playOver, allinone_carousel_elementTitle);
					}
				}
			});

			/*bottomNavButs.mouseup(function() {
			 arrowClicked=false;
			 });

			 bottomNavButs.mouseenter(function() {
			 var currentBut=jQuery(this);
			 var i=currentBut.attr('rel');

			 if (options.showPreviewThumbs) {
			 allinone_carousel_bottomOverThumb = jQuery('<div class="bottomOverThumb"></div>');
			 currentBut.append(allinone_carousel_bottomOverThumb);
			 var image_name=jQuery(imgs[i]).attr('data-bottom-thumb');
			 allinone_carousel_bottomOverThumb.html('<img src="'+ image_name + '">');
			 }

			 currentBut.addClass('bottomNavButtonON');
			 });

			 bottomNavButs.mouseleave(function() {
			 var currentBut=jQuery(this);
			 var i=currentBut.attr('rel');

			 if (options.showPreviewThumbs) {
			 allinone_carousel_bottomOverThumb.remove();
			 }

			 if (current_obj.current_img_no!=i)
			 currentBut.removeClass('bottomNavButtonON');
			 });
			 */

			if (options.enableTouchScreen) {
				var randomNo = Math.floor(Math.random() * 100000);
			
				//if(document.getElementById('SM_carouselParent_MINI') == null)
				//{
					allinone_carousel_container.wrap('<div id="SM_carouselParent_MINI" style="position:absolute;" />');
					jQuery('#SM_carouselParent_MINI').width(options.width + 1);
					jQuery('#SM_carouselParent_MINI').height(options.height);
				//}	
				//allinone_carousel_container.css('cursor','url(skins/hand.cur),url(skins/hand.cur),move');
				allinone_carousel_container.css('left', '0px');
				allinone_carousel_container.css('position', 'absolute');

				rightVal = parseInt(allinone_carousel_rightNav.css('right').substring(0, allinone_carousel_rightNav.css('right').length - 2));

				//alert(allinone_carousel_container.parent().attr('id'));

				//jQuery("body").css("overflow", "hidden");

				allinone_carousel_container.mousedown(function() {
					rightVal = parseInt(allinone_carousel_rightNav.css('right').substring(0, allinone_carousel_rightNav.css('right').length - 2));
					if (rightVal < 0 && !arrowClicked) {
						//allinone_carousel_rightNav.css('visibility', 'hidden');
						//allinone_carousel_leftNav.css('visibility', 'hidden');
						allinone_carousel_rightNav.css('right', '0');
					}
				});
				allinone_carousel_container.mouseup(function() {
					arrowClicked = false;
					if (rightVal < 0) {
						allinone_carousel_rightNav.css('right', rightVal + 'px');
						//allinone_carousel_rightNav.css('visibility', 'visible');
						//allinone_carousel_leftNav.css('visibility', 'visible');
					}
				});

				allinone_carousel_container.draggable({
					axis : 'x',
					containment : 'parent',
					distance : 10,
					start : function(event, ui) {
						origLeft = jQuery(this).css('left');
					},
					stop : function(event, ui) {
						if (!current_obj.effectIsRunning) {
							finalLeft = jQuery(this).css('left');
							direction = 1;
							if (origLeft < finalLeft) {
								direction = -1;
							}
							//alert (origLeft+'<'+finalLeft+'-'+direction);
							allinone_carousel_navigation_SMALL(direction, options, current_obj, bottomNavButs, imgs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight, total_images, allinone_carousel_playOver, allinone_carousel_elementTitle);
						}
						if (rightVal < 0) {
							allinone_carousel_rightNav.css('right', rightVal + 'px');
							allinone_carousel_rightNav.css('visibility', 'visible');
							allinone_carousel_leftNav.css('visibility', 'visible');
						}
						jQuery(this).css('left', '0px');
					}
				});
			}

			allinone_carousel_navigation_SMALL(1, options, current_obj, bottomNavButs, imgs, allinone_carousel_container, contentHolderUnitOrigWidth, contentHolderUnitOrigHeight, total_images, allinone_carousel_playOver, allinone_carousel_elementTitle);
			//first start autoplay
			/*jQuery(bottomNavButs[current_obj.current_img_no]).addClass('bottomNavButtonON_SM');
			if (options.autoPlay > 0 && total_images > 1) {
				current_obj.timeoutID = setTimeout(function() {
					
				}, 500);
			}*/

		});
	};

	//
	// plugin skins
	//
	$.fn.allinone_carousel_SMALL.defaults_SMALL = {
		skin : 'attractive',
		width : 960,
		height : 384,
		autoPlay : 4,
		numberOfVisibleItems : 7, // odd number: 3,5,7,9
		elementsHorizontalSpacing : 34,
		elementsVerticalSpacing : 5,
		verticalAdjustment : 0,
		animationTime : 0.8,
		easing : 'easeOutQuad',
		resizeImages : true,
		showElementTitle : true,
		showAllControllers : true,
		showNavArrows : true,
		showOnInitNavArrows : true, // o1
		autoHideNavArrows : true, // o1
		showBottomNav : true,
		showOnInitBottomNav : true, // o2
		autoHideBottomNav : true, // o2
		showPreviewThumbs : true,
		enableTouchScreen : true
	};

	

})(jQuery); 