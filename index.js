const convertBTn = document.getElementById("convert-btn")
const numberInput = document.getElementById("number-input")
const volumePar =document.getElementById("volume-par")
const massPar =document.getElementById("mass-par")
const lengthPar =document.getElementById("length-par")

const lengthMultiplier = 3.2808399
const volumeMultiplier = 0.264172052
const massMultiplier = 2.20462262

function convert(value){



    let convertedToGallon = (value * volumeMultiplier).toFixed(3)
    let convertedToLiter = (value / volumeMultiplier).toFixed(3)
    let convertedToPound = (value * massMultiplier).toFixed(3)
    let convertedToKilo = (value / massMultiplier).toFixed(3)
    let convertedToFeet = (value * lengthMultiplier).toFixed(3)
    let convertedToMeter = (value / lengthMultiplier).toFixed(3)
    
    volumePar.textContent = `${value}liters = ${convertedToGallon} gallons | ${value} gallons = ${convertedToLiter} liters`
    massPar.textContent = `${value} kilos = ${convertedToPound} pounds | ${value} pounds = ${convertedToKilo} kilos`
    lengthPar.textContent = `${value} meters = ${convertedToFeet} feet | ${value} feet = ${convertedToMeter} meters`
}

convertBTn.addEventListener("click",()=>convert(numberInput.value))