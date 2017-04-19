// Scroll to Top 
$('.arrow-top-scroll').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});

// Open Footer Menu
$('.arrow-top-open').on('click', function() {
	$('.arrow-top').toggleClass('active');
	$('.sitemap').toggleClass('active');
	$('.inside-sitemap-list').toggleClass('active');
});