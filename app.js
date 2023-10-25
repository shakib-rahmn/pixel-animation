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

// calculating width
const pixelWidth = (mainBox.box.clientWidth - mainBox.totalCol - 1) / mainBox.totalCol;

// array for all index
const pixelsArray = [];

// creating pixel boxes
for (let i = 0; i < totalPixel; i++) {
  pixelsArray.push(i);
  let newDiv = document.createElement("div");
  newDiv.style.width = `${pixelWidth}px`;
  newDiv.style.height = `${pixelWidth}px`;
  newDiv.classList.add("pixel");
  mainBox.box.appendChild(newDiv);
}

// list of all pixel box
const pixelsList = document.querySelectorAll('.pixel');

// generates random value
let randomDigit = (value) => {
  return Math.ceil(Math.random() * value);
};

// shuffling index
pixelsArray.sort(() => randomDigit(0.1));

pixelsArray.forEach(index => {
  pixelsList[index].classList.add('animate');

  let style = {
    animationDuration: `${randomDigit(4)+1}s`,
    animationDelay: `${randomDigit(6000)+1000}ms`,
    backgroundColor: `hsl(0, 0%, ${randomDigit(64)}%)`,
  }

  Object.assign(pixelsList[index].style, style);
})