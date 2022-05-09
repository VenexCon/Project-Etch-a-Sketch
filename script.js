
const gridSizeSelector50 = document.getElementById(`grid-size-selector50`)



// calls function to make a default grid on page load. 
window.onload = function () {
  makeRows(20, 20); 
}

// uses a loop to create the required divs
function makeRows(rows, cols) {

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.classes = ['grid-item'];
    cell.style.setProperty('background-color', 'white');
    container.appendChild(cell).className = "grid-item";
  };
};

// Drawing function 

let drawing = false; 

    document.addEventListener('mousedown', () => {
      console.log("down");
      drawing = true; 
    }); 

    document.addEventListener('mouseup', () => {
      console.log("up"); 
      drawing = false; 
    });


// test function for mouseover events 
function changeGridColor (e) {
  e.style.backgroundColor="red"; 
}; 

// This block targets the whole DOM and identifies the divs with the grid-item class
document.addEventListener('mouseover',function(e){
  console.log(e.target.classes);
  if(e.target && e.target.classes.contains('grid-item')){
        changeGridColor(e.target);
   }
});

// redefines grid-size. 
gridSizeSelector50.addEventListener(`click`, () => {
  makeRows(40, 40);
});