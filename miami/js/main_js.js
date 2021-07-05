$(function () {
	$('.gallery__slider').slick({
		slidesToShow:3,
		centerMode:true,
		speed: 800,
		responsive: [
			{
			breakpoint: 1600,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});
$(function () {
	$('.slaider_room').slick({
		slidesToShow:1,
		dots:true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000
	});
});
