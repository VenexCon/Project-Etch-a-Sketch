makeRows(16, 16);

const container = document.getElementById(`container`);
const gridItems = document.querySelectorAll(`.grid-item`);



function makeRows(rows, cols) {
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener(`click`, () => {
      console.log("click");
    })
    //cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};








// uses a loop to create the required divs
//function createGrid(rows, cols) {
  //const rowNum = (rows * cols); 
 // for (c = 0; c < rowNum; c++) {
    //let cell = document.createElement("div");
    //cell.classes = ['grid-item'];
    //cell.addEventListener(`click`, () => {
     // console.log("click");});
    //container.appendChild(cell).className = "grid-item";
 // };
//};


// Drawing declarations 
let drawing = false; 

    document.addEventListener('mousedown', () => {
      drawing = true; 
    }); 
    document.addEventListener('mouseup', () => {
      drawing = false; 
    });

    
function changeGridColor (e) {
  e.style.backgroundColor="#ff0000"; 
}; 

// This block targets the whole DOM and identifies the divs with the grid-item class
document.addEventListener('mouseover',function(e){
  //console.log(e.target.classes);
  if(e.target && e.target.classList.contains('grid-item') && (drawing == true)){
    changeGridColor(e.target);
   } else return ;
});


let colorSelector = document.querySelector(`input[name="color-selector"]`)
    colorSelector.addEventListener(`input`, function (){ 
    let selectedColor = colorSelector.value;
    let cell = container.children;
    for (let i = 0; i < gridItems; i++){

    }



    });





let gridSizeSelector = document.getElementById('grid-size-selector');



