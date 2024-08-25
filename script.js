document.getElementById('search-button').addEventListener('click', async () => {
    const searchInput = document.getElementById('search-input').value.trim();
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`);
        if (!response.ok) throw new Error('Pokémon not found');
        
        const pokemon = await response.json();
        document.getElementById('pokemon-name').textContent = pokemon.name.toUpperCase();
        document.getElementById('pokemon-id').textContent = `#${pokemon.id}`;
        document.getElementById('weight').textContent = pokemon.weight;
        document.getElementById('height').textContent = pokemon.height;
        document.getElementById('hp').textContent = pokemon.stats[0].base_stat;
        document.getElementById('attack').textContent = pokemon.stats[1].base_stat;
        document.getElementById('defense').textContent = pokemon.stats[2].base_stat;
        document.getElementById('special-attack').textContent = pokemon.stats[3].base_stat;
        document.getElementById('special-defense').textContent = pokemon.stats[4].base_stat;
        document.getElementById('speed').textContent = pokemon.stats[5].base_stat;
        
        // Handle types
        const typesElement = document.getElementById('types');
        typesElement.innerHTML = '';  // Clear previous types
        pokemon.types.forEach(typeInfo => {
            const typeSpan = document.createElement('span');
            typeSpan.textContent = typeInfo.type.name.toUpperCase();
            typesElement.appendChild(typeSpan);
        });
        
        // Handle sprite image
        let spriteElement = document.getElementById('sprite');
        if (!spriteElement) {
            spriteElement = document.createElement('img');
            spriteElement.id = 'sprite';
            document.getElementById('pokemon-info').appendChild(spriteElement);
        }
        spriteElement.src = pokemon.sprites.front_default;

    } catch (error) {
        alert(error.message);
    }
});
