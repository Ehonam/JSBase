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
        //document.querySelector('.h3').innerHTML = backgroundColor;
        //console.log(colorCode);
        //window.getComputedStyle(document.querySelector(".line1")).getPropertyValue("background-color")
            //var backgroundColor = window.getComputedStyle(document.querySelector('.line1')).getPropertyValue("background-color");
            //document.querySelector('.h3').innerHTML = backgroundColor;
           //h3 = document.querySelector("h3");
            //window.getComputedStyle(h3).color;


        // Récupérez la couleur 
        const computedColor = window.getComputedStyle(squarebox).backgroundColor;

        console.log(computedColor);

        function backgroundColor() {
            document.querySelector('.h3').innerHTML = getPropertyValue("background-color");
            console.log(getPropertyValue("background-color"));
        }
        });
});
    //line1.forEach((squarebox) => {
        //squarebox.addEventListener('click', () => {
        //const color = getElementById(squareboxes).getPropertyValue('backgroundColor');
        //selection.querySelector('.h3').innerHTML = color;
    //});

    //const squareboxes = document.querySelectorAll('.squarebox');
        //squareboxes.forEach(squarebox) => {
            //const squareboxClass = squarebox.classList[1]; // Récupère la deuxième classe (ex: "red")
            //squarebox.style.backgroundColor = colorClass;

   

// exercise 3


var i = 1;

function toggleSquare(hello) {
    // Rétrécir le carré de 10%
    const currentSize = parseFloat(getComputedStyle(hello).width);
    const newSize = currentSize * 0.9;
    hello.style.width = newSize + "px";
    hello.style.height = newSize + "px";

    // Rotation de 360 degrés
    hello.style.transform = "rotate(360deg)";

    // Changer la couleur de fond en rouge
    hello.style.backgroundColor = "red";

}


// exercise 4

