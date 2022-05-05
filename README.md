# Project-Etch-a-Sketch

<hr>

<h2> Etch a Sketch time </h2>

This repo is for building an etch-a-sketch project that will contain a 16X16 grid of sqaures and be able to use RGBA and color selectors to create basic drawings and...well..sketches. 

Breifly breaking these down into smaller chunks, I can se that the below will be needed. 

<ol>
  <li>Visible 16 x 16 grid - I will use CSS:Grid for this </li> 
  <li>Using JS, I will need to colour the sqaures when the mouse button is clicked and held </li> 
  <li> The square colour will need to be using a value of color, and this will need to be selected by some sort of list or selector </li> 
  <li> an erase function to reset the sqaures back to white </li> 
  <li> I will need to have a reset button</li> 
  <li> I will need to make it responsive for mobile designs </li> 
  <li> It would be nice to be able to have a save button to save sketches, or an image of sketches. </li> 
  <li> It would be nice to be able to save and continue sketches. </li>
 </ol>
  
  These are my intiial thoughts, no doubt these will break down even further again. 
  
  <hr> 
  
  Thoughts : 05/05/22 
  
 I have began the project with a basic 16 X 16 div, but the crux is how i get the cells to be so wide and high, without haviny anything in the grid itself? I may be over thinking this but i have it so that with 16 divs, itt currently fills the top 16 rows. But, i don't fancy doing over 100 divs as this seems highly unpractical. IT seems as though i am missing something but CSS tricks has not yet englightened me so this will take some googling.
 
 So, after some brief googling, a more practical way (surpise) is to use JS to create the desired amount of divs for the page. This will aid in that the webpage will load, and then the grid will be loaded. So, i can either have the values set staticly at 16 * 16 or, this can be set by the user toggling a switch, or even entering the desired divs, up to a maximum. To change these values, and the size of the grid, the function will need to be called everytime the input changes. I am thinking of having a three or four incremental buttons i.e. 4x4, 8x8, 16x16 and 32x32. 
