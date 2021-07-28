document.getElementById('submit').addEventListener('click', getFilm);
document.getElementById('planets').addEventListener('click', getPlanets);

section = document.querySelector('section');
title = document.querySelector('h1');

async function getFilm(){
    section.innerHTML = '';
    title.innerHTML = '';
    const input = document.querySelector('input');
    if(input.value > 6 || input.value < 1 || isNaN(input.value) || !Number.isInteger(+input.value)){
        alert("Введіть від 1 до 6");
        return
    }
    await axios.get(`https://swapi.dev/api/films/${input.value}`)
        .then((response) => {
            response.data.characters.forEach(character => {
                axios.get(character)
                    .then((response) => {
                        const character = {
                            name : response.data.name,
                            birth : response.data.birth_year,
                            gender : getGenderIcon(response.data.gender),
                            image : `img/${response.data.name}.jpg`
                        }
                        
                        section.insertAdjacentHTML('afterbegin', 
                        `<div class = 'character'>
                        <img src = "${character.image}">
                        <p>Name : ${character.name}</p>
                        <p>Date of birth : ${character.birth}</p>
                        <p>Gender : ${character.gender}</p></div>`);
                    })
            });
        })
}   

function getGenderIcon(gender){
    if(gender === 'male'){
        return "♂"
    }
    if(gender === 'female'){
        return "♀"
    }
    if(gender === "hermaphrodite"){
        return "⚧"
    }
    else return '&#128683;'
}

let page = 1;

async function getPlanets(){
    title.innerHTML = '';
    section.innerHTML = '';
    title.insertAdjacentHTML('afterbegin',`
                <div class = 'naviButtons'>
                <button id = "previous">&#11013;</button>
                <button id = "next">&#10145;</button>
                </div>`);
    await axios.get(`https://swapi.dev/api/planets/?page=${page}`)
        .then((response) => {
                response.data.results.forEach(planet => {
                    const planetName = planet.name;                        
                    section.insertAdjacentHTML('afterbegin', 
                    `<div class='planet'>
                    <p>${planetName}</p></div>`);
                })
        });
        document.getElementById('next').addEventListener('click', function(){
            if(page >= 6)return;
            else{
                page ++;
                getPlanets()
            }
        });
        document.getElementById('previous').addEventListener('click', function(){
            if(page <= 1)return;
            else{
                page --;
                getPlanets()
            }
        });
}