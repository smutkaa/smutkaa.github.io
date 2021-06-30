$(document).ready(function () {
	$('.burger__header').click(function(event){
		$('.header__burger ,.header__nav, .header__menu, .burger__header, .nav__link, .rooms__menu, .tworoom__menu, .threeroom__menu, .fourroom__menu').toggleClass('active')
	});
});