function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById("pokemon");

const url = 'https://api.pokemontcg.io/v1/cards';

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let pokemons = data.cards;

        return pokemons.map(function(pokemon) {

            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');

            img.src = pokemon.imageUrl;

            span.innerHTML = `${pokemon.name}
            ${"PokeDex #"}
            ${pokemon.nationalPokedexNumber}`;

            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })

.catch(function(error) {
    console.log(JSON.stringify(error));
})