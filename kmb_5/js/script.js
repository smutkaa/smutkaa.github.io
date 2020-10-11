$(function () {

	$('.catalog__slaider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		dots:false,
		responsive: [
			{
			breakpoint: 1254,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 1085,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1
				}
			}				
		]
	});
});

$(function () {

	$('.new__slaider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots:false,
		responsive: [
			{
			breakpoint: 1245,
				settings: {
					slidesToShow: 1
				}
			}	
		]
	});

});
