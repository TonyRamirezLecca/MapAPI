$(document).ready(function() {

    function checkWindowSize() {
	wSize = $(window).width();
	console.log(wSize);
	if (wSize < 900) {
	    $(".header").removeClass("header-fixed");
	    $(".header").addClass("removeFixedHeader");
	    $(".image-scenery").removeClass("image-scenery-fixed");
	    $(".image-scenery").addClass("removeFixedScenery");
	}
	else {
	    $(".header").removeClass("removeFixedHeader");
	    $(".header").addClass("header-fixed");
	    $(".image-scenery").removeClass("removeFixedScenery");
	    $(".image-scenery").addClass("image-scenery-fixed");
	}
    }

    checkWindowSize();

    $(window).scroll(function() {
	var wScroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (wScroll <= windowHeight) {
	    $(".title-container").css({
		"transform" : "translate(0px, " + wScroll/1.5 + "%)",
		"opacity" : 1 - (wScroll / (windowHeight - (windowHeight/4)))
	    });
	}
    })
    $(window).resize(function() {
	checkWindowSize();
    });

});
