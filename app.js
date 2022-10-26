let binary = document.getElementById("binary")
let result = document.getElementsByClassName("result")
let binaryValue = 0 // assign zero to initially
binary.addEventListener("input", function (e) {
    binaryValue = e.target.value // assigning input value to binaryValue variable
})

addEventListener('submit', (event) => {
    event.preventDefault(); // used to prevent default variable
    result[0].innerHTML = `Decimal Number: ${parseInt(binaryValue, 2)}` // assigning decimal converted value to result element
});