console.log("the script is connected");

// DOM Objects
const mainScreeen = document.querySelector('.main-screen');
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-front-image');
const pokeBackImage = document.querySelector('.poke-back-image');
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');
const luzLed = document.querySelector('.top-section__blue');

console.log(pokeName);
console.log(pokeId);
console.log(pokeBackImage);
console.log(pokeFrontImage);

fetch('https://pokeapi.co/api/v2/pokemon/59')
    .then(res => {
        // Tengo que pasarlo a JSON para que pueda trabajar con él
        return res.json(); /*lo tengo que regresar para que se cumpla el siguiente THEN*/
    })
    .then(data => {
        console.log(data);
        /** TIPOS de Pokemons */
        const dataType = data['types']; /*Jalo los TYPES en array */
        const dataFirstType = dataType[0]; /*Pido el primer elemento del array que sería el primer tipo */
        const dataSecondType = dataType[1]; /*Pido el segundo elemento del array que sería el segundo tipo  */
        pokeTypeOne.textContent = dataFirstType['type']['name']; /*Le asigno que le pase sólo el Nombre que está dentro de TYPE; por eso primero va TYPE y luego NAME*/

        if (dataSecondType) {
            pokeTypeTwo.textContent = dataSecondType['type']['name'];
        } else {
            pokeTypeTwo.classList.add('hide'); /*Si no lo tiene que le agrege la clase de hide para que no se vea el cículo vacío*/
            pokeTypeTwo.textContent = '';
            /*Pero que en su texto le agregue un espacio para que cuando compare pokemones, no de un error porque si lo compara 
                        con uno que tiene 2 tipos daría error*/
        }

        pokeFrontImage.src = data['sprites']['front_default'] || ''; /*Pongo el espacio por si no tengo la imagen, simplemente ponga un vacío, usando OR*/
        pokeBackImage.src = data['sprites']['back_default'] || '';


        mainScreeen.classList.add(dataFirstType['type']['name']);
        mainScreeen.classList.remove('hide');
        luzLed.classList.add('led-light-blue');

        pokeName.textContent = data['name'];
        pokeId.textContent = data['id'];
        pokeHeight.textContent = data['height'];
        pokeWeight.textContent = data['weight'];

    });