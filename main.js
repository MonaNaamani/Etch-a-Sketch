// Several colors to choose from
// All different sizes the div can be (Height and width) 16x16
// How to position them inside the container

// This function creates divs based on a chosen number, and it appends them to the DOM.+ it decides the height and width attributes.
function divQuantity (a) {
  const container = document.querySelector('.container');
  const divs = [];
  const height = 510/a;
  const width = 510/a;

  for (let i = 1; i < (a*a + 1); i++) {
    divs[i] = document.createElement('div');
    divs[i].classList.add('new');
    divs[i].setAttribute('style', `height: ${height -1*2}px; width: ${width -1*2}px;`);
    container.appendChild(divs[i]);
  }
  return divs;
}

const allNewDivs = divQuantity(4);
// console.log(divQuantity(4));
// console.log(allNewDivs);

allNewDivs.forEach(newDiv => newDiv.addEventListener('mouseover', mouseOver))

function mouseOver(e) {
  this.classList.add('hovered');
}

allNewDivs.forEach(newDiv => newDiv.addEventListener('mouseout', mouseOut))

function mouseOut(e) {
  this.classList.remove('hovered');
}




    // divs[i].addEventListener("mouseover", mouseOver);
    // divs[i].addEventListener("mouseout", mouseOut);