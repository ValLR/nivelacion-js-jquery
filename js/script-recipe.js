$(document).ready(function(){
	console.log("it's ready, bae")
	$(".js-show-recipe").click(function(){
		$("#bod").removeClass("make");
	})
	$(".js-show-make").click(function(){
		$("#bod").addClass("make");
	})

});