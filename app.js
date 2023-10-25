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

// calc widht and height
const pixelWidth = (mainBox.box.clientWidth - mainBox.totalCol - 1) / mainBox.totalCol;

console.log({pixelWidth});

// array for all index
const pixelsArray = [];

// creating pixels
for (let i = 0; i < totalPixel; i++) {
  let newDiv = document.createElement("div");

  newDiv.style.width = `${pixelWidth}px`;
  newDiv.style.height = `${pixelWidth}px`;

  newDiv.classList.add("pixel");

  pixelsArray.push(i);

  mainBox.box.appendChild(newDiv);
}

// list of all pixel box
const pixelsList = document.querySelectorAll('.pixel');

// generates random value
let randomDigit = (value) => {
  return Math.ceil(Math.random() * value);
};

// randmixing index
pixelsArray.sort(() => randomDigit(0.1));

pixelsArray.forEach(index => {
  pixelsList[index].classList.add('animate');
  pixelsList[index].style.animationDuration = `${randomDigit(4)+1}s`;
  pixelsList[index].style.animationDelay = `${randomDigit(3000)+1000}ms`;
  pixelsList[index].style.backgroundColor = `hsl(0, 0%, ${randomDigit(64)}%)`;
})