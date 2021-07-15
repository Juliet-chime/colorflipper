const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
btn.addEventListener('click', colorChange)


function colorChange(){
    let hexColor = '#'
    let randomNumber = Math.floor(Math.random() * hex.length)
    for(let i = 0; i < 6; i++){
        hexColor += hex[randomNumber]
    }

    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
}