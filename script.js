const eventi = [
  {"evento": "Trovi cibo andato a male, vuoi mangiarlo?", "Salute": -10, "Sete": 0, "Fame": 10, "Radio": 0},
  {"evento": "Trovi acqua sporca, Vuoi berla?", "Salute": -10, "Sete": 20, "Fame": 0, "Radio": 0},
  {"evento": "Vedi un topo passare, snack?", "Salute": -10, "Sete": 0, "Fame": 10, "Radio": 0}]

let giorno = 0

let barraSalute = 100
let barraSete = 100
let barraFame = 100
let barraRadio = 10

let ran = 0
let pulsi = false

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function nextDay(){
  const dino = document.getElementById("contatore-lbl")
  giorno = giorno + 1
  dino.innerHTML = "Giorno " + giorno 

  pulsi = true

  ran = getRandomIntInclusive(0, eventi.length)
  const element = document.getElementById("sticazzi")
  element.innerHTML = eventi[ran].evento

  barraSalute = barraSalute - barraRadio/10
  barraSete = barraSete - 10
  barraFame = barraFame - 5

  const giraffe = document.getElementById("myBar").style.width = barraSalute + "%"
  const marianne = document.getElementById("myBar1").style.width = barraSete + "%"   
  const arianne = document.getElementById("myBar2").style.width = barraFame + "%"
  const coarianne = document.getElementById("myBar3").style.width = barraRadio + "%"

  const veliu = document.getElementById("scomparire")
  veliu.value = "Sì"
}

function tastaTesticula(){
  if (pulsi) {
    barraSalute = barraSalute + eventi[ran].Salute 
    barraSete = barraSete + eventi[ran].Sete
    barraFame = barraFame + eventi[ran].Fame
    barraRadio = barraRadio + eventi[ran].Radio
    
    if (barraSalute > 100) {barraSalute = 100}
    if (barraSete > 100) {barraSete = 100}
    if (barraFame > 100) {barraFame = 100}
    if (barraRadio > 100) {barraRadio = 100}

    const giraffe = document.getElementById("myBar").style.width = barraSalute + eventi[ran].Salute + "%"
    const marianne = document.getElementById("myBar1").style.width = barraSete + eventi[ran].Sete + "%"    
    const arianne = document.getElementById("myBar2").style.width = barraFame + eventi[ran].Fame + "%"
    const coarianne = document.getElementById("myBar3").style.width = barraRadio + eventi[ran].Radio + "%"

    sticazzi.innerHTML = "Hai fatto la tua scelta"
    const veliu = document.getElementById("scomparire")
    veliu.value = "Cort"
    pulsi = false

    if (barraSalute <= 0) {}
    if (barraSete <= 0) {}
    if (barraFame <= 0) {}
    if (barraRadio <= 0) {}
  }
}
