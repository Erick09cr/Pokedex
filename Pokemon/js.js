document.getElementById('fetch-pokemon').addEventListener('click', function() {
    const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Conversión de decímetros a centímetros (1 decímetro = 10 centímetros)
            const heightInCm = data.height * 10;
            // Conversión de hectogramos a kilogramos (1 hectogramo = 0.1 kilogramos)
            const weightInKg = data.weight * 0.1;

            const pokemonDataDiv = document.getElementById('pokemon-data');
            pokemonDataDiv.innerHTML = `
                <h2>${data.name} (#${data.id})</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}" class="pokemon-image">
                <p>Altura: ${heightInCm} cm</p>
                <p>Peso: ${weightInKg} kg</p>
                <p>Tipo: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
            `;
        })
        .catch(error => {
            const pokemonDataDiv = document.getElementById('pokemon-data');
            pokemonDataDiv.innerHTML = '<p>Pokémon no encontrado. Por favor, intenta de nuevo.</p>';
        });
});