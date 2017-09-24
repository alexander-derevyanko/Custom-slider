$(document).ready(function() {

	$(".slide").css({
		"position": "absolute",
		"top": "0",
		"left": "0"
	}).hide().eq(0).show();

	var slideNum = 0;
	var slideCount = $("#slider .slide").length;

	var animateSlide = function(arrow) {
		$(".slide").eq(slideNum).fadeOut();

		if (arrow === "next") {
			if (slideNum == (slideCount - 1)) {
				slideNum = 0;
			} else {
				slideNum++;
			}
		} else if (arrow === "prev") {
			if (slideNum == 0) {
				slideNum = slideCount - 1;
			} else {
				slideNum -= 1;
			}
		} else {
			slideNum = arrow;
		}

		$(".slide").eq(slideNum).fadeIn();
		$(".control-slide.active").removeClass("active");
		$('.control-slide').eq(slideNum).addClass('active');
	}

	$(".prevbutton").on("click", function() {
		animateSlide("prev");
	});

	$(".nextbutton").on("click", function() {
		animateSlide("next");
	});

	var $addImg = "";
	$(".slide").each(function(index) {
		var imgSrc = $(this).attr("data-imgsrc");
		$addImg += "<img class='control-slide' src='"+ imgSrc +"' data-index='"+ index +"' alt=''>";
	});
	$("<div class='train-block'>" + $addImg + "</div>").appendTo("#slider-wrap");
	$(".control-slide:first").addClass("active");

	$(".control-slide").on("click", function() {
		var imgIndex = $(this).attr("data-index");
		animateSlide(imgIndex);
	})

});