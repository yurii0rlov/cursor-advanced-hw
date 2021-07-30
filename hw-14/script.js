//Створіть нескінченний генератор ідентифікаторів.

function* createIdGenerator() {
  for (let i = 1; ; i++){
    yield i;
  }
}

const idGenerator = createIdGenerator();

let numberString = '';

document.getElementById('addNumber').addEventListener('click', function(){
  const div = document.getElementById('generateNumbers');
  div.innerHTML = '';
  numberString += String(idGenerator.next().value + ', ');
  div.insertAdjacentHTML('afterbegin', `<p>${numberString}</p>`)
})

// advanced

function* newFontGenerator(fontSize) {
  let currentFontSize = fontSize;
  let fontSizeDirection = '';

  for (let i = 1; ; i++) {

    if (fontSizeDirection === 'up') {
      currentFontSize = currentFontSize + 2;
      fontSizeDirection = yield currentFontSize;
      continue;
    }

    if (fontSizeDirection === 'down') {
      currentFontSize = currentFontSize - 2;
      fontSizeDirection = yield currentFontSize;
      continue;
    }

    else {
      fontSizeDirection = yield currentFontSize;
      continue;
    }
  }
}

const fontGenerator = newFontGenerator(14);
fontGenerator.next();

document.getElementById('smallerFont').addEventListener('click', function(){
  const div = document.getElementById('generateNumbers');
  div.style.fontSize = `${fontGenerator.next('down').value}pt`
});

document.getElementById('biggerFont').addEventListener('click', function(){
  const div = document.getElementById('generateNumbers');
  div.style.fontSize = `${fontGenerator.next('up').value}pt`
});
