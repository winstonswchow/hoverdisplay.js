$.fn.hoverDisplay = function(newSettings) {

	var settings = $.extend({
		intro: "fadeIn",
		outro: "fadeOut",
		moveY: 0,
		moveX: 0,
		speed: "fast"
	}, newSettings);
	var $hoveredOver = this;
	var $show;
	var origin;

	$hoveredOver.on("mouseover", function() {
		$show = $hoveredOver.filter(this).siblings(".hoverInfo");
		// console.log("all children" + $hoveredOver.filter(this).chldren("*"));
		// console.log(".hoverInfo" + $hoveredOver.filter(this).chldren(".hoverInfo"));
		// $show = $hoveredOver.filter(this).children(".hoverInfo");
		// console.log($show);
		// origin = getOrigin();
	    // $show.addClass(settings.speed).removeClass(settings.outro).toggleClass(settings.intro).animate({left: settings.moveX.toString()});
	    $show.addClass(settings.speed).removeClass(settings.outro).toggleClass(settings.intro);
	});

	$hoveredOver.on("mouseleave", function() {
		// console.log(settings.moveX);
		// console.log("reverse: " + reverse(settings.moveX).toString());
	    // $show.toggleClass(settings.intro + " " + settings.outro).animate({left: reverse(settings.moveX).toString()});
	    $show.toggleClass(settings.intro + " " + settings.outro);
	});

	function getOrigin () {
		return $show.position(); //Do you need this?
	}

	function reverse (givenTranslation) {
		console.log(givenTranslation);
		return givenTranslation*2;
	}
}