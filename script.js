const container = document.getElementById(`container`);



function createGrid(rows, cols) {
 const container = document.getElementById(`container`);
 const rowNum = (rows * cols); 
  for (c = 0; c < rowNum; c++) {
    let cell = document.createElement("div");
    cell.classes = ['grid-item'];
    container.appendChild(cell).className = "grid-item";
  };
};

createGrid(16, 16);


const gridItems = document.querySelectorAll(`.grid-item`);
let gridSizeSelector = document.getElementById('grid-size-selector');


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

    
function changeGridColor (e) {
  e.style.backgroundColor= colorSelector.value; 
}; 


let colorSelector = document.querySelector(`input[name="color-selector"]`)
    colorSelector.addEventListener(`input`, function (){ 
    let selectedColor = colorSelector.value;
    console.log(selectedColor);
});






