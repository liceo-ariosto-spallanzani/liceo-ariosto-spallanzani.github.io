var button = document.getElementById("incrementa-btn")
var counter = document.getElementById("contatore-lbl")

let counterValue = 0
const increment = () => {
  counterValue ++
  counter.innerHTML = counterValue
}

button.onclick = increment
