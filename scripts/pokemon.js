$(function() {

	$('#submitPokemon').click(function() {
		var firstPokemon = $('#firstPokemon').val();
		console.log(firstPokemon);

		$.ajax({
			url: 'http://pokeapi.co/api/v1/pokedex/'
		}).success(function(data) {
			var fullList = data.objects[0].pokemon;
			fullList.forEach(function(i) {
				if (firstPokemon === i.name) {
					console.log('For' + i.name + ' you want ' , i.resource_uri);
					$('#placeholder').remove();
					$('.pokemonCard').attr('id', 'searchResult');
					$.ajax({
						url: 'http://pokeapi.co/' + i.resource_uri
					}).success(function(pokemon) {
						console.log('Here:' + pokemon.name);
						$('#pokemonName').html(pokemon.name);
						$('#hp').html(pokemon.hp + ' HP');
						$('#stats').html(' Height: ' + pokemon.height + ' Weight: ' + pokemon.weight);
						$('#info').html('Attack: ' + pokemon.attack + '<br>Defense: ' + pokemon.defense + '<br>Happiness: ' + pokemon.happiness + '<br>Species: ' + pokemon.species);
					});
				}
			});
		});
	});

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