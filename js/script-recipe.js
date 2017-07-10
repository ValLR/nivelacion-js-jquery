$(document).ready(function(){
	console.log("it's ready, bae")
	$(".js-show-recipe").click(function(){
		$("#bod").removeClass("make");
		$(".js-show-recipe").addClass("active");
		$(".js-show-make").removeClass("active");
	})
	$(".js-show-make").click(function(){
		$("#bod").addClass("make");
		$(".js-show-make").addClass("active");
		$(".js-show-remove").removeClass("active");
			})

});