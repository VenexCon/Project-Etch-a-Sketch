
const mainGrid = document.getElementById(`mainGrid`); 

// Make the above const responsive to selectors or player inputs. 

function createGrid (rows, cols) {

 mainGrid.style.setProperty(--grid-rows, rows)
 mainGrid.style.setProperty(--grid-cols, cols)
  for (let i=0; i<(rows * cols); i++) {
    let cell =  document.createElement("div"); 
    mainGrid.appendChild(cell).className = "grid-item";
  };
};
