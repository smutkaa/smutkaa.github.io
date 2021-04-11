
$(document).ready(function () {
    $(".detail").mouseenter(function(){
        $('.description').html($(this).attr('description-data'));
		$('.description').show();
    });
  $(".detail").mouseleave(function(){
       $('.description').hide();
    });
});