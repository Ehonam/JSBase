//   exercise 1 JS

function alertBox() {
    // Getting the informations about the element
    const squareStyle = getComputedStyle(document.getElementById("square"))
    const textColor = squareStyle.color;
    const backgroundColor = squareStyle.backgroundColor;
    const height = squareStyle.height;
    const width = squareStyle.width;
    const className = ''
    const fontFamily = squareStyle.fontFamily;
    const fontSize = squareStyle.fontSize;
  
    // the message to display in the alert dialog box
    const message =
      "Text color: " + textColor + "\n" +
      "Background color: " + backgroundColor + "\n" +
      "Height: " + height + "\n" +
      "Width: " + width + "\n" +
      "Class: " + document.getElementById("square").className + "\n" +
      "Font: " + fontFamily + "\n" +
      "Size: " + fontSize;
  
    // Display the message in an alert dialog box
    alert(message);
  
    
}
// exercise 2

    //By clicking on any of the top squares, the bottom square takes on its color and the color code of the selected square is displayed.
    // Get all the top squares
    const line1 = document.querySelectorAll('.squarebox');

    // Get the bottom square
    const selection = document.querySelector('.selection');

    // Add click event listeners to each top square
    line1.forEach((squarebox) => {
        squarebox.addEventListener('click', () => {
            // Change the color of the bottom square to match the clicked top square
            const colorCode = getComputedStyle(squarebox).getPropertyValue('background-color');
            selection.style.backgroundColor = colorCode;
            
            // Display the color code of the selected square
            // console.log(colorCode);

        });
});
