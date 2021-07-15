function generateBlocks(numbers){
  for (let i = 1; i <= numbers; i++){
    let div = document.createElement('div');
    div.className = "block";
    div.style.backgroundColor = getColor();
    document.body.append(div);
  }
}
getColor = () => {
  const color = `rgb(${Math.trunc(Math.random()*255)}, ${Math.trunc(Math.random()*255)}, ${Math.trunc(Math.random()*255)})`;
  return color;
}

getRandomSquareColor = () => {
  const squares = document.querySelectorAll('.block');
  squares.forEach(square => {
    square.style.backgroundColor = getColor();
  })
}

function generateBlocksInterval(numbers){
  generateBlocks(numbers);
  setInterval( () => {
     getRandomSquareColor();
  },1000);
  document.querySelector('button').style.display = 'none';
}