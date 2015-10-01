$(function() {

	$('#submitPokemon').click(function() {
		var firstPokemon = $('#firstPokemon').val();

		$.ajax({
			url: 'http://pokeapi.co/api/v1/pokedex/'
		}).success(function(data) {
			var fullList = data.objects[0].pokemon;
			fullList.forEach(function(i) {
				if (firstPokemon === i.name) {
					$('#placeholder').remove();
					$('.pokemonCard').attr('id', 'searchResult');
					$.ajax({
						url: 'http://pokeapi.co/' + i.resource_uri
					}).success(function(pokemon) {
						$('#pokemonName').html(pokemon.name);
						$('#hp').html(pokemon.hp + ' HP');
						$('#cardImage').html(function() {
							var spriteLink = pokemon.sprites[0].resource_uri;
							$.ajax({
								url: 'http://pokeapi.co' + spriteLink
							}).success(function(pokePic) {
								$('#cardImage').html('<img src=\'http://pokeapi.co' + pokePic.image + '\'>');
							});
						});
						$('#stats').html(' Height: ' + pokemon.height + ' Weight: ' + pokemon.weight);
						$('#info').html('Attack: ' + pokemon.attack + '<br>Defense: ' + pokemon.defense + '<br>Happiness: ' + pokemon.happiness + '<br>Species: ' + pokemon.species);
					});
				}
			});
		});
	});
});