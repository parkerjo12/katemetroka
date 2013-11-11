$(window).load(function() {	
	
	var w = $(window).width();
	var left=378, eps = 20;
	var speed=1200, easing='easeOutExpo';
	$('.scroll').find('> div').data('left',0)
	$('.marker_left, .marker_right').css({opacity:'0', display:'none'})
	
	$('.scroll').mouseenter(function(){
		th=$(this);
		var anim=th.find('> div');
			anim.data('width', parseInt(anim.css('width')));
			var mleft=anim.data('left');
				$('.marker_left, .marker_right').css({display:'block'}).stop().animate({opacity:'1'},400, function(){$(this).css({opacity:'none'})})
			if (anim.data('width')<=w-left) {
				$('.marker_left, .marker_right').css({opacity:'0', display:'none'})
			}
			if (anim.data('width')<=w-left) {
				anim.stop().animate({marginLeft:0},speed, easing);return false;
			} else {
				$('.marker_left').click(function(){
				if ((mleft<0)) {
					if (mleft+300<0) {
						mleft=mleft+300; 
					} else {
						mleft=0;
					}
					anim.data('left',mleft);
					anim.stop().animate({marginLeft:mleft},speed, easing, function(){$(this).animate({marginLeft:mleft},speed, easing)});
				}
				})
				$('.marker_right').click(function(){
				if ((anim.data('width')+mleft>=w-left)) {
					if (anim.data('width')+mleft-300>=w-left) {
						mleft=mleft-300;
					} else {
						mleft=w-left-anim.data('width')
					}
					anim.data('left',mleft);
					anim.stop().animate({marginLeft:mleft},speed, easing);
				} 
				})
			}
		
	}).mouseleave(function(){
		$('.marker_left, .marker_right').stop().animate({opacity:'0'},400, function(){$(this).css({display:'block'})})
	})
	$('.marker_left, .marker_right').mouseenter(function(){
			$('.marker_left, .marker_right').css({display:'block'}).stop().animate({opacity:'1'},400, function(){$(this).css({opacity:'none'})})
	}).mouseleave(function(){
		$('.marker_left, .marker_right').stop().animate({opacity:'0'},400, function(){$(this).css({display:'block'})})
	})	
									 
	$('.scroll').mousewheel(function(e, d){
		th=$(this);
		var anim=th.find('> div');
		anim.data('width', parseInt(anim.css('width')));
					var mleft=anim.data('left');
			if (anim.data('width')<=w-left) {
				anim.stop().animate({marginLeft:0},speed, easing);
			} else {
				if ((d>0)&&(mleft<0)) {
					d=0;
					if (mleft+100<0) {
						mleft=mleft+100; 
					} else {
						mleft=0
					}
					anim.data('left',mleft);
					anim.stop().animate({marginLeft:mleft},speed, easing, function(){$(this).animate({marginLeft:mleft},speed, easing)});
				}
				if ((d<0)&&(anim.data('width')+mleft>=w-left)) {
					d=0;
					if (anim.data('width')+mleft-100>=w-left) {
						mleft=mleft-100;
					} else {
						mleft=-anim.data('width')+w-left
					}
					anim.data('left',mleft);
					anim.stop().animate({marginLeft:mleft},speed, easing);
				} 
				return false
			}
		})
	function setWidth(){
		new_w=$(window).width();
	}
	setInterval(setNew,1);
	function setNew(){
		setWidth();
		if ((w!=new_w)) {
			w=new_w;
		}
	}
})
