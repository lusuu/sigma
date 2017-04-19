$('.main-search-btn').on('click', function() {
	$('.main-search-btn').toggleClass('active');
	$('.main-search-input-box').toggleClass('active');
	$('.navigation-holder .navigation').toggleClass('hide');
	$('.navigation-holder').toggleClass('active');
});