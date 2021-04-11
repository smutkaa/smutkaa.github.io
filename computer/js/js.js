$('.detail').hover(
	function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	},
	function() {
		$('.description').delay(1000).fadeOut(500);
	}
)