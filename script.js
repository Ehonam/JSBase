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

/* L’évènement DOMContentLoaded est émis lorsque le document HTML initial a été complètement chargé et analysé, sans attendre que les feuilles de style, images et sous-documents aient terminé de charger. */
window.addEventListener("DOMContentLoaded", () => {
    
    // on cible tous les éléments qui ont comme classe "carre" (attention au point)
    const carres = document.querySelectorAll(".carre")
    // on cible le section 
    const section = document.querySelector("section")
    
    // on boucle sur tous les éléments de classe "carre"
    carres.forEach(carre => {
        // quand on clique sur un de ces élément
        carre.addEventListener("click", function() {
            // on ajoute (ou on enlève la classe "active")
            carre.classList.toggle("active")

            // si l'élément ne contient PAS (!) la classe "active"
            if(!carre.classList.contains("active")){
                // la couleur du section est grise
                section.style.backgroundColor = "rgb(192, 192, 192)"
            } else {
                // sinon on récupère la couleur définie dans le data-color du HTML (data-color="#....")
                section.style.backgroundColor = carre.dataset.color
            }
        })
    })
})



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





    
 
