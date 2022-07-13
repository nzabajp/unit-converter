const input = document.getElementById("input")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const resultSection = document.getElementById("result-section")
const result = document.querySelectorAll(".result")

const outerSwitch = document.getElementById("outer-switch")
const innerSwitch = document.getElementById("inner-switch")

let lightMode = true

outerSwitch.addEventListener("click", () => {
    if(lightMode) {
        innerSwitch.style.transform = "translateY(-50%) translateX(19px)"
        resultSection.style.backgroundColor = "#1F2937"
        for(let i = 0; i < result.length; i++) {
            result[i].style.backgroundColor = "#273549"
            result[i].style.color = "#CCC1FF"
        }
        mass.style.color = "white"
        length.style.color = "white"
        volume.style.color = "white"
        lightMode = false
    } else {
        innerSwitch.style.transform = "translateY(-50%)"
        resultSection.style.backgroundColor = "#F4F4F4"
        for(let i = 0; i < result.length; i++) {
            result[i].style.backgroundColor = "white"
            result[i].style.color = "#5A537B"
        }
        mass.style.color = "#353535"
        length.style.color = "#353535"
        volume.style.color = "#353535"
        lightMode = true
    }
})

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