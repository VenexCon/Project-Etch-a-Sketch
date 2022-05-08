
const gridSizeSelector50 = document.getElementById(`grid-size-selector50`)







// uses a loop to create the required divs
function makeRows(rows, cols) {
      let rows = 500/rownum; 
      let cols = 500/rownum; 
      
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);


  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.classes = ['grid-item'];
    cell.style.setProperty('background-color', 'white');
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(20, 20)


// test function for mouseover events 
function changeGridColor (e) {
  e.style.backgroundColor="red"; 
}; 

// This block targets the whole DOM and identifies the dvis with the grid-item class
document.addEventListener('mouseover',function(e){
  console.log(e.target.classes);
  if(e.target && e.target.classes.includes('grid-item')){
        changeGridColor(e.target);
   }
});

// redefines grid-size. 
gridSizeSelector50.addEventListener(`click`, () => {
  makeRows(50, 50);
});