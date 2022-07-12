const input = document.getElementById("input")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

let calculations = {
    feet: 3.281,
    gallon: 0.264,
    pound: 2.204

}

function toggleClick() {
    const val = input.value
    let {feet, gallon, pound} = calculations
    length.textContent = calConversion(val, feet)
    volume.textContent = calConversion(val, gallon)
    mass.textContent = calConversion(val, pound)
}

function calConversion(unit, conversion) {
    return `${unit} meters = ${(unit * conversion).toFixed(3)} | ${unit} feet = ${(unit / conversion).toFixed(3)}`
}