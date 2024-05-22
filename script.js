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
const maCouleur = document.querySelector('.maCouleur');

// Add click event listeners to each top square
line1.forEach((squarebox) => {
    squarebox.addEventListener('click', () => {
        // Change the color of the bottom square to match the clicked top square
        const colorCode = getComputedStyle(squarebox).getPropertyValue('background-color');
        selection.style.backgroundColor = colorCode;
        maCouleur.innerHTML = colorCode

        // Display the color code of the selected square
        //document.querySelector('.h3').innerHTML = backgroundColor;
        //console.log(colorCode);
        //window.getComputedStyle(document.querySelector(".line1")).getPropertyValue("background-color")
        //var backgroundColor = window.getComputedStyle(document.querySelector('.line1')).getPropertyValue("background-color");
        //document.querySelector('.h3').innerHTML = backgroundColor;
        //h3 = document.querySelector("h3");
        //window.getComputedStyle(h3).color;


        // // Récupérez la couleur 
        // const computedColor = window.getComputedStyle(squarebox).backgroundColor;

        // console.log(computedColor);

        // function backgroundColor() {
        //     document.querySelector('.h3').innerHTML = getPropertyValue("background-color");
        //     console.log(getPropertyValue("background-color"));
        // }
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


const hellos = document.querySelectorAll('.hello');

hellos.forEach((hello) => {
    hello.addEventListener("click", () => {
        hello.classList.toggle("red")
    })
})


// exercise 4


// toggle css .effect sur les mediasquare
const mediasquare = document.querySelectorAll('.mediasquare');

mediasquare.forEach((mediasquare) => {
    mediasquare.addEventListener("click", () => {
        mediasquare.classList.toggle("effect")
    })
})

// changements de couleurs du fond
// Get all the three squares
const line4 = document.querySelectorAll('.mediasquare');

// Get the background  
const socialmedia = document.querySelector('.socialmedia');

// Add click event listeners to each three squares
line4.forEach((mediasquare) => {
    mediasquare.addEventListener('click', () => {
        // Change the color of the background to match the three squares
        const colorCode = getComputedStyle(mediasquare).getPropertyValue('background-color');
        socialmedia.style.backgroundColor = colorCode;


        // Récupérez la couleur 
        const computedColor = window.getComputedStyle(mediasquare).backgroundColor;

        console.log(computedColor);

    });
});


// exercise 5

const euroToFrancsRate = 6.55957;

function convertEuroToFrancs(euro) {
    return (euro * euroToFrancsRate).toFixed(2);
}

const euroInput = document.getElementById('euroInput');
const resultElement = document.getElementById('result');

euroInput.addEventListener('input', () => {
    const euroValue = parseFloat(euroInput.value);
    if (!isNaN(euroValue)) {
        const francsValue = convertEuroToFrancs(euroValue);
        resultElement.textContent = `${francsValue} francs`;
    } else {
        resultElement.textContent = 'Veuillez saisir une valeur numérique.';
    }
});





    
 
