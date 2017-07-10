$(document).ready( function(){
	$("#arrow-container").hide();
	$("#imenu-container").hide();
	$("#print-news").append("NUEVAS RECETAS");

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activitiesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	var matches = $.grep(recipesArray, function(n,i){
		return (n.highlighted===true);
	})

	matches.forEach(renderRecipe);

	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {

	$(".list-recipes").append("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'>"+ $(recipe).attr("title") +"</span><span class='metadata-recipe'><span class='author-recipe'>"+ $(recipe).attr("name") +"</span><span class='bookmarks-recipe'><span class='icon-bookmark'></span></span></span></span><img src= 'img/recipes/320x350/"+ $(recipe).attr("name") +".jpg'></a>")
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	activitiesArray.forEach(renderActivity);
	if (activitiesArray.length > 0){
		$(".wrapper-message").hide();
	}
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


