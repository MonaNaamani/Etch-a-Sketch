// This function creates divs based on a chosen number, and it appends them to the DOM + it decides the height and width attributes.
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
  return divs;
}

// Hover event - it adds a class

const allNewDivs = createDivs(5);

allNewDivs.forEach(newDiv => newDiv.addEventListener('mouseover', mouseOver))

function mouseOver(e) {
  this.classList.add('hovered');
  this.style.backgroundColor = `${randColor()}`;
}

// Hover event - it removes a class

allNewDivs.forEach(newDiv => newDiv.addEventListener('mouseout', mouseOut))

function mouseOut(e) {
  this.classList.remove('hovered');
}

// event that colors the divs randomly

function randColor () {
     return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

// Dropdown button

function createOptions () {
  const select = document.querySelector('.select');
  const selectElements = [];

  for (let i = 0; i < 64; i++) {
    selectElements[i] = document.createElement('option');
    selectElements[i].classList.add(`option${(i + 1)}`);
    selectElements[i].textContent = `${i + 1} x ${i + 1}`;
    select.appendChild(selectElements[i]);
  }
}
