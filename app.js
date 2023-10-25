// parent object
const mainBox = {
  box: document.querySelector('.box'),
  totalRow: 16,
  totalCol: 16,
  countPixel: function () {
    return this.totalCol * this.totalRow;
  }
};

// total pixel boxes
const totalPixel = mainBox.countPixel();

// calculating dimension
const pixelArea = (mainBox.box.clientWidth - mainBox.totalCol - 1) / mainBox.totalCol;

// function to add css styles
const addCss = (element, styles) => {
  Object.assign(element.style, styles);
}

// creating pixel boxes
for (let i = 0; i < totalPixel; i++) {
  let newDiv = document.createElement("div");

  let styles = {
    width: `${pixelArea}px`,
    height: `${pixelArea}px`,
  }

  addCss(newDiv, styles);

  newDiv.classList.add("pixel");
  mainBox.box.appendChild(newDiv);
}

// list of all pixel box
const pixelsList = document.querySelectorAll('.pixel');

// generates random value
let randomDigit = (value) => {
  return Math.ceil(Math.random() * value);
};

// generating css styles
pixelsList.forEach(pixel => {
  pixel.classList.add('animate');

  let styles = {
    animationDuration: `${randomDigit(4)+1}s`,
    animationDelay: `${randomDigit(6000)+1000}ms`,
    backgroundColor: `hsl(0, 0%, ${randomDigit(64)}%)`,
  }

  addCss(pixel, styles);
})