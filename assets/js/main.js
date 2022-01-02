$(document).ready(function() {
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		//i.e. apply safari class via jquery
		$(".navbar").addClass("fancy");
	}

	if ($("#hero-container").length > 0) {
		window.addEventListener("scroll", function() {
			if ($(window).scrollTop() > $("#hero-container").height()) {
				$("body").addClass("page-scrolled");
			} else {
				$("body").removeClass("page-scrolled");
			}
		}, { passive: true });
	}
});
