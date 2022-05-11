const container = document.getElementById(`container`);
const eraserBtn = document.getElementById(`eraser-btn`);
const resetBtn = document.getElementById("resetbtn");
const gridSizeSelector = document.getElementById(`grid-size-selector`); 
const randomDrawing = ["Pig", "rat", "policeman", "cup", "phone", "keyboard", "plane", "wand", "The Mona Lisa?"];



let colorSelector = document.querySelector(`input[name="color-selector"]`);
let color;

// CreateGrids and appends it to container
function createGrid(rows, cols) {
 const container = document.getElementById(`container`);
 container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
 container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

 const rowNum = (rows * cols); 
      for (c = 0; c < rowNum; c++) {
        let cell = document.createElement("div");
        cell.classes = ['grid-item'];
        container.appendChild(cell).className = "grid-item";
      };
};

// declares default grid. 
createGrid(20, 20);


// grabs grid-items
let gridItems = document.querySelectorAll(`.grid-item`);



// removes all divs ready for new entry. 
function gridReset () {
  let gridItems = document.querySelectorAll(`.grid-item`);
  gridItems.forEach ((gridItems) => gridItems.remove()); 
};


// Selects the size of the grid and calls the gridReset function. 
gridSizeSelector.addEventListener(`input`, () => {
  let newSize = gridSizeSelector.value;
  console.log(newSize);
  gridReset()
  createGrid(newSize, newSize); 
})


// Reset grid to clear any color 
resetBtn.addEventListener(`click`, function (){
  let gridItems = container.querySelectorAll(`grid-items`);
  gridItems.forEach((gridItems) => gridItems.backgroundColor = "white");
});


// Drawing Function. 
container.addEventListener(`mouseover`, function (e){
  if(e.target && e.target.classList.contains('grid-item') &&  (drawing == true)){
    changeGridColor(e.target);
  } else return ""; 
})


// Drawing declarations 
let drawing = false; 

    document.addEventListener('mousedown', () => {
      drawing = true; 
    }); 
    document.addEventListener('mouseup', () => {
      drawing = false; 
    });




// Changes drawing color
function changeGridColor (e) {
  let colorSelector = document.querySelector(`input[name="color-selector"]`)
  e.style.backgroundColor= colorSelector.value; 
}; 



// resets color input to white. 
eraserBtn.addEventListener(`click`, function eraseColor (){
  colorSelector.value = "#FFFFFF";
})
    


// obtains random innerhtml from declared array. 
window.onload = function () {
  let item = randomDrawing[Math.floor(Math.random()*randomDrawing.length)];
  console.log(item)
  console.log(typeof(item))
  const drawingSuggestion = document.getElementById(`random-drawing`); 
  return drawingSuggestion.innerHTML = item
};
