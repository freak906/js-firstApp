let pokemonList = [ {
    name: 'Scyther',
    height: 1.5,
    types: ['bug', 'flying', 'swarm']
},{
    name: 'Mewtwo',
    height: 2,
    types: ['psychic', 'pressure', 'unnerve']
},{
    name: 'Noctowl',
    height: 1.6,
    types: ['flying', 'insomnia', 'keen-eye']
}];
pokemonList.forEach(function(pokemons) {
    document.write('Name: ' + pokemons.name + ', ' + 'Height: '  + pokemons.height + ', ' + 'Type: ' + pokemons.types[1] + '<br>');
    console.log('Name: ' + pokemons.name + ', ' + 'Height: '  + pokemons.height + ', ' + 'Type: ' + pokemons.types[1] + '<br>');
});

