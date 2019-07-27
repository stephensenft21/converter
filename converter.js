// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button  that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.









// references to the button elements in the DOM
let converterButton = document.getElementById("converter");
let clearButton = document.getElementById("clear-text");
let inputF = document.getElementById("fahrenheit");
let inputC = document.getElementById("celsius");



let outputToDom = (value) => {
    document.getElementById("output").innerHTML = value;
}


//let = button.addEventListener("click", converterFunction);


let clearContainer = () => {
    document.getElementById("number").value = "";
    // clearButton = "";
    document.getElementById("output").innerHTML = "";
    inputF.checked = false;
    inputC.checked = false;
}
// To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
toFahrenheit = (temperature) => {
    let fahrenheitValue = (temperature * 1.8) + 32;
    if (fahrenheitValue > 90) {
        output.style.color = "red";
    } else if (fahrenheitValue < 32) {
        output.style.color = "blue";
    } else output.style.color = "green";

    return fahrenheitValue;
}
//To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
toCelsius = (temperature) => {
    let celsiusValue = (temperature - 32) * .5556;
    if (celsiusValue > 32) {
        output.style.color = "red";
    } else if (celsiusValue < 0) {
        output.style.color = "blue";
    } else output.style.color = "green";

    return celsiusValue;
}
let converterFunction = () => {
    let temperature = document.getElementById("number").value
    let convertedTemp = null;
    if (inputF.checked) {
        convertedTemp = toFahrenheit(temperature);
    } else {
        convertedTemp = toCelsius(temperature);
    }
    outputToDom(convertedTemp);
};



clearButton.addEventListener("click", function () {
    let numInput = document.getElementById("number").value;
    numInput.value = "";
})
converterButton.addEventListener("click", converterFunction);
clearButton.addEventListener("click", clearContainer)