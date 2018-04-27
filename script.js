$(document).ready(function () {
	$(".burger").on('click', function(e) {
		$(".menu").addClass( "show" );
	});
	$(".close").on('click', function(e) {
		$(".menu").removeClass( "show" );
	});

	$(".video-screenshot").on('click', function(e) {
		$(".video-screenshot iframe").show();
		$(".video-screenshot .play").hide();
		$(".video-screenshot img").hide();
	});

	$(".full-width-img").on('click', function(e) {
		$(".image-popup .full-width-img").remove();
		$(e.target).clone().appendTo(".image-popup");
		// $(".image-popup").html(target);
		$(".image-popup").show();
		$("body").css("overflow-y", "hidden");
	});

	$(".image-popup").on('click', function(e) {
		if($(e.target).children('img').length > 0) {
			$(".image-popup").hide();
			$("body").css("overflow-y", "visible");
	 }
	});

	$(".image-popup svg").on('click', function(e) {
		if($(e.target).parents(".image-popup").children('img').length > 0) {
			$(".image-popup").hide();
			$("body").css("overflow-y", "visible");
	 }
	});
	var $root = $('html, body');

	$('a[href^="#"]').click(function() {
			var href = $.attr(this, 'href');
			$root.animate({
					scrollTop: $(href).offset().top
			}, 500, function () {
				scrollTop: 0;
			});
			return false;
	});
});
