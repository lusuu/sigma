if(document.documentElement.clientWidth > 992) {
	$('.header .navigation > li > a').mouseover(function() {
		$('.header .navigation .menu:first-child .navigation-inside-list li:first-child').addClass('open');
	});

	$('.header .navigation-inside-list > li > a').mouseover(function() {
		$('.header .navigation .navigation-inside-list-second li:first-child').addClass('open');
	});

	$('.header .navigation .navigation-inside-list > li').mouseout(function() {
		$(this).removeClass('open');
		$('.header .navigation .navigation-inside-list li').removeClass('open');
	});

	$('.header .navigation .navigation-inside-list li').mouseover(function() {
		$(this).addClass('open');
	});
}
