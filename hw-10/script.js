const animals = document.querySelectorAll('div');

let animalSound = new Audio('');

function playAnimalSound(animal){
    animalSound.pause();
    animalSound = new Audio(`sounds/${animal.id}.mp3`);
    animalSound.play();
}

animals.forEach(animal => {

    animal.addEventListener('click', function(e) {
        animals.forEach(animal => {
             animal.classList.remove('click'); 
        })
        animal.classList.add('click')
        playAnimalSound(animal);
    });
    
    document.addEventListener('keyup', (e) =>{
        if(e.code === `Key${animal.querySelector("key").innerHTML}`){
            playAnimalSound(animal.querySelector("key").closest('div'));
            animal.querySelector("key").closest('div').classList.add('click');
        }

        document.addEventListener('keydown', (e) => {
        animal.querySelector("key").closest('div').classList.remove('click');
        })
    })
})