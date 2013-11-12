$(window).load(function() {	
	$('.select_color a').click(function(){
		var color = $(this).attr('class');
		$('body').attr({id:color});
		Cufon.refresh();
	});
	$('.slider').nivoSlider({
        effect:'fade', //Specify sets like: 'fold,fade,sliceDown, sliceDownLeft, sliceUp, sliceUpLeft, sliceUpDown, sliceUpDownLeft' 
        slices:15,
        animSpeed:400,
        pauseTime: 999999999,		
        startSlide:0, //Set starting Slide (0 index)
        directionNav:false, //Next & Prev
        directionNavHide:false, //Only show on hover
        controlNav:true, //1,2,3...
        controlNavThumbs:false, //Use thumbnails for Control Nav
        controlNavThumbsFromRel:false, //Use image rel for thumbs
        controlNavThumbsSearch: '.jpg', //Replace this with...
        controlNavThumbsReplace: '_thumb.jpg', //...this in thumb Image src
        keyboardNav:true, //Use left & right arrows
        pauseOnHover:true, //Stop animation while hovering
        manualAdvance:false, //Force manual transitions
        captionOpacity:1, //Universal caption opacity
        beforeChange: function(){},
        afterChange: function(){Cufon.refresh();},
        slideshowEnd: function(){} //Triggers after all slides have been shown
    });
	$('.jScrollPaneTrack, .jScrollPaneDrag').css({opacity:'0'});
	$('.jScrollPaneContainer').hover(function(){
		$('.jScrollPaneTrack, .jScrollPaneDrag').stop().animate({opacity:'1'});									  
	}, function(){
		$('.jScrollPaneTrack, .jScrollPaneDrag').stop().animate({opacity:'0'});
	})
	//content & menu
	var content=$('#content'),
		nav=$('.menu');
	nav.navs({
		useHash:true,
		hoverIn:function(li){
			Cufon.replace($('> a',li), { fontFamily: 'Kozuka Gothic Pro OpenType', textShadow:'rgba( 255, 255, 255, .5) 1px 1px, rgba( 255, 255, 255, .2) 2px 2px, rgba( 255, 255, 255, .1) 3px 3px' });
		},
		hoverOut:function(li){
			Cufon.replace($('> a',li), { fontFamily: 'Kozuka Gothic Pro OpenType', fontWeight:'none' });
		},
		hover:true
	})
	nav.navs(function(n){
			content.cont_sw(n);
	})	
	content.cont_sw({
		showFu:function(){
			var _=this
			$.when(_.li).then(function(){	
				$('#page_splash').stop().animate({marginLeft:'-4000'},700, 'easeInCirc', function(){
					$(this).css({display:'none'});
					_.next.css({display:'block'});
					_.next.stop().animate({marginLeft:'-0'},700, 'easeOutCirc');
				})
			});	
			
		},
		hideFu:function(){
			var _=this
				_.li.stop().animate({marginLeft:'-100%'},700, 'easeInCirc',function(){
					_.li.css({display:'none'});	
					if ((location.hash=='')||(location.hash=='#')) {
						$('#page_splash').css({display:'block'}).stop().animate({marginLeft:'0'},700, 'easeOutCirc')	
					}
				})
				
		},
		preFu:function(){
			var _=this
			_.li.css({position:'absolute', display:'none', marginLeft:'-100%'});
			$('#page_splash').css({marginLeft:'-4000', display:'none'});
			if ((location.hash=='')||(location.hash=='#')) {
				$('#page_splash').css({display:'block'}).stop().animate({marginLeft:'0'},700, 'easeOutCirc')	
			}
		}
	})
	$('a').click(function(){
		if ($(this).attr('href').substr(0,3)=='#!/') {	
			
		}
	})
	$('.close').click(function(){
		if ($(this).attr('data-type')=='close') {	
			$.when($('#content > ul > li')).then(function(){	
			})
		}
	})
	// for lightbox
	if ($("a[rel^='photos']").length) {
			$(document).ready(function() {
				// prettyPhoto
				$("a[rel^='photos']").prettyPhoto({ theme: 'light_square' });
			});
	}
})

$(window).load(function() {	
	$('.spinner').fadeOut();
	$('body').css({overflow:'inherit'})
})