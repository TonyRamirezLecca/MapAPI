$(document).ready(function() {


    $(window).scroll(function() {

	var wScroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (wScroll <= windowHeight) {
	    $(".title-container").css({
		"transform" : "translate(0px, " + wScroll/1.5 + "%)",
		"opacity" : 1 - (wScroll / (windowHeight - (windowHeight/10)))
	    });
	}

    })

});
