const colors = ['#fc4103','#fcad03','#dffc03','#03fc98','#03befc','#a103fc','#aebfbf','#a103fc','#fc0390']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
btn.addEventListener('click', colorChange)


function colorChange(){
    let randomNumber = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
}


