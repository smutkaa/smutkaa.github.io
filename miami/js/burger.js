$(document).ready(function () {
	$('.burger__header').click(function(event){
		$('.header__burger ,.header__nav, .burger__header, .nav__link, .main__header, .header__menu').toggleClass('active')
	});
});