// Dropdown button

function createOptions () {
  const select = document.querySelector('.select');
  const selectElements = [];

  for (let i = 0; i < 64; i++) {
    selectElements[i] = document.createElement('option');
    selectElements[i].classList.add(`${(i + 1)}`);
    selectElements[i].textContent = `${i + 1} x ${i + 1}`;
    select.appendChild(selectElements[i]);
  }
  return selectElements;
}

createOptions();

// Create an eventlistener for all Options that grabs the class of the option element

let optionChoice = document.getElementById("size");

optionChoice.addEventListener("click", getClassName);

function getClassName () {
  let collection = optionChoice.selectedOptions;
  let output = "";
  for (let i = 0; i < collection.length; i++) {
    output = collection[i].className;
  }
    removeDivs();
    createDivs(output);
  };

// This function creates divs based on a chosen number, and it appends them to the DOM + it decides the height and width attributes + color them

function createDivs (a) {
  
  const container = document.querySelector('.container');
  const divs = [];
  const height = 510/a;
  const width = 510/a;

  for (let i = 0; i < (a*a); i++) {
    divs[i] = document.createElement('div');
    divs[i].classList.add('new');
    divs[i].setAttribute('style', `height: ${height -1*2}px; width: ${width -1*2}px;`);
    container.appendChild(divs[i]);
  }
  divs.forEach(newDiv => newDiv.addEventListener('mouseover', mouseOver))
}

createDivs(1);
// Hover event - it adds a class

function mouseOver(e) {
  this.classList.add('hovered');
  this.style.backgroundColor = `${randColor()}`;
}

// event that colors the divs randomly

function randColor () {
     return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

function removeDivs () {
  const container = document.querySelector('.container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

