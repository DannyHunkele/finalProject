$(function() {

	$('#submitPokemon').click(function() {
		alert($('#firstPokemon').val());
	})

	//This is how to generate a full list of the pokemon needed for user input

//	var fakeInput = 'bulbasaur';
//
//	$.ajax({
//		url: 'http://pokeapi.co/api/v1/pokedex/'
//	}).success(function(data) {
//		var fullList = data.objects[0].pokemon;
//		fullList.forEach(function(i) {
//			if (fakeInput === i.name) {
//				console.log('For' + i.name + ' you want ' , i.resourcce_uri);
//			}
//		});
//	});

});