const eventi = [
  {"evento": "E' rimasto del cibo che però è andato a male, vuoi mangiarlo?", 
  "risultato": "Buono era buono, ma di sicuro bene non ti ha fatto.",
  "Salute": -10, "Sete": 0, "Fame": 10, "Radio": 0},

  {"evento": "C'è un'infiltrazione di acqua sporca, vuoi berla?",
  "risultato": "Non è stata un'idea saggissima, ma almeno hai meno sete",
  "Salute": -10, "Sete": 20, "Fame": 0, "Radio": 0},

  {"evento": "Un topo si è nascosto nel bunker, snack?", 
  "risultato": "Non è esattamente il tipo di snack che sponsorizzerebbe un atleta... ti ha sfamato, ma ora stai uno schifo.",
  "Salute": -20, "Sete": 0, "Fame": 10, "Radio": 0},

  {"evento": "Senti rumori provenire dall'esterno, potrebbero esserci provviste... Vuoi controllare?",
  "risultato": "Hai trovato un cassa piena cibo e bibite, ma sei stato troppo tempo all'esterno e ti sei contaminato con le radiazioni.",
  "Salute": 0, "Sete": 20, "Fame": 20, "Radio": 30},

  {"evento": "Senti bussare alla porta, vuoi controllare?", 
  "risultato": "Ad aspettarti c'erano dei banditi, li ha sconfitti e rubato le loro provviste, ma sei malconcio e hai subito una piccola dose di radiazioni.",
  "Salute": -20, "Sete": 10, "Fame": 10, "Radio": 10},

  {"evento": "Senti bussare alla porta, vuoi controllare?", 
  "risultato": "Sull'uscio c'è l'addetto alla mensa della caritas, che in questo momento di difficoltà sta smistando cibo.",
  "Salute": 0, "Sete": 0, "Fame": 10, "Radio": 10},
  
  {"evento": "Vuoi fare un po' di esercizio fisico nel rifugio?", 
  "risultato": "Bondi sarebbe fiero di te, però ti sei stancato e hai sia usato molte energie che espulso molto sudore",
  "Salute": 20, "Sete": -10, "Fame": -10, "Radio": -10},

  {"evento": "Vuoi fare un po' di esercizio fisico all'esterno?", 
  "risultato": "Sei proprio un pesce! Con un'emergenza necleare pensi sia una buona idea uscire a prendere un po' d'aria fresca?",
  "Salute": 20, "Sete": -10, "Fame": -10, "Radio": 40},
  
  {"evento": "Nascosto nel bunker trovi del lembas, il pan da via elfico, vuoi mangiarlo?", 
  "risultato": "Come Legolas insegna ne basta una minima quantità per riempire lo stomaco di un viaggiatore esausto.",
  "Salute": 10, "Sete": 0, "Fame": 100, "Radio": 0},

  {"evento": "Sono venuti a prelevarti i militari, vuoi andare con loro?", 
  "risultato": "Eccome se ci vai! Lasci questo orrendo posto e inizi la tua nuova vita al di fuori di queste mura, in un mondo che aspetta di essere ricostruito.",
  "Salute": 100, "Sete": 100, "Fame": 100, "Radio": -100},

  {"evento": "Sono venute a prelevarti delle persone che ti promettono la salvezza, vuoi andare con loro?",
  "risultato": "Cretino, mai fidarsi degli sconosciuti! Infatti in realtà sono alieni che ti hanno rapito per studiarti. Sei destinato ad una vita di torture strazianti, ed una morte lunga e infelice. Ah e quasi dimenticavo, TU PARTORIRAI CON DOLORE.",
  "Salute": 0, "Sete": 0, "Fame": 0, "Radio": 0}
  ]

let giorno = 0

var barraSalute = 100
var barraSete = 100
var barraFame = 100
var barraRadio = 10

let ran = 0
let pulsi = false
let victLose = true

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function nextDay(){
  if (victLose){
    const dino = document.getElementById("contatore-lbl")
    giorno = giorno + 1
    dino.innerHTML = "Giorno " + giorno 

    pulsi = true

    ran = getRandomIntInclusive(0, eventi.length)
    while (giorno<=17 && eventi[ran].evento == "Sono venuti a prelevarti i militari, vuoi andare con loro?") {
      ran = getRandomIntInclusive(0, eventi.length)
    }
    const element = document.getElementById("sticazzi")
    element.innerHTML = eventi[ran].evento

    barraSalute = barraSalute - barraRadio/10
    barraSete = barraSete - 8
    barraFame = barraFame - 4

    if (barraSalute > 0) {const giraffe = document.getElementById("myBar").style.width = barraSalute + "%"} 
    else {const giraffe = document.getElementById("myBar").style.width = barraSalute - barraSalute  + "%"}
    
    if (barraSete > 0) {const marianne = document.getElementById("myBar1").style.width = barraSete + "%"} 
    else {const marianne = document.getElementById("myBar1").style.width = barraSete - barraSete + "%"}
    
    if (barraSalute > 0) {const arianne = document.getElementById("myBar2").style.width = barraFame + "%"}
    else {const arianne = document.getElementById("myBar2").style.width = barraFame - barraFame + "%"}
    
    if (barraRadio > 0) {const coarianne = document.getElementById("myBar3").style.width = barraRadio + "%"} 
    else {const coarianne = document.getElementById("myBar3").style.width = barraRadio - barraRadio + "%"}

    const veliu = document.getElementById("scomparire")
    veliu.value = "Sì"

    if (barraSalute <= 0 || barraSete <= 0 || barraFame <= 0 || barraRadio > 80) {
      document.getElementById("sticazzi").innerHTML = "Sei morto... Unlucky! https://youtu.be/CaUR7h4WunY"
      document.getElementById("scomparire").value="Qifsha Ropt"
      document.getElementById("COD").value="Qija me arusha"
      
      pulsi = false
      victLose = false
    }

    if (giorno == 1){
      document.getElementById("inizZziazZzione").innerHTML = ""
    }
  }
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

    if (barraSalute > 0) {const giraffe = document.getElementById("myBar").style.width = barraSalute + eventi[ran].Salute + "%"} 
    else {const giraffe = document.getElementById("myBar").style.width = barraSalute - barraSalute  + "%"}
    
    if (barraSete > 0) {const marianne = document.getElementById("myBar1").style.width = barraSete + eventi[ran].Sete + "%"} 
    else {const marianne = document.getElementById("myBar1").style.width = barraSete - barraSete + "%"}
    
    if (barraSalute > 0) {const arianne = document.getElementById("myBar2").style.width = barraFame + eventi[ran].Fame + "%"}
    else {const arianne = document.getElementById("myBar2").style.width = barraFame - barraFame + "%"}
    
    if (barraRadio > 0) {const coarianne = document.getElementById("myBar3").style.width = barraRadio + eventi[ran].Radio + "%"} 
    else {const coarianne = document.getElementById("myBar3").style.width = barraRadio - barraRadio + "%"}
    
    document.getElementById("sticazzi").innerHTML = eventi[ran].risultato 
    const veliu = document.getElementById("scomparire")
    veliu.value = "Cort"
    pulsi = false

    if (eventi[ran].evento == "Sono venuti a prelevarti i militari, vuoi andare con loro?"){
      document.getElementById("sticazzi").innerHTML = eventi[ran].risultato
      document.getElementById("scomparire").value = "Bravo!! Hai vinto!"
      document.getElementById("COD").value = "Campione"
      pulsi = false
      victLose = false
      document.getElementById("morte").innerHTML = "Guarda questo fantastico video!!!!"
    }

    if (eventi[ran].evento == "Sono venute a prelevarti delle persone che ti promettono la salvezza, vuoi andare con loro?"){
      document.getElementById("sticazzi").innerHTML = eventi[ran].risultato
      document.getElementById("scomparire").value = "CoG-Li0n31!1!1!1!1!i"
      document.getElementById("COD").value = "yourIQ = ForrestGumpIQ"
      pulsi = false
      victLose = false
      document.getElementById("morte").innerHTML = "Guarda questo fantastico video!!!!"
    }
     
    if (barraSalute <= 0 || barraSete <= 0 || barraFame <= 0 || barraRadio > 80) { 
      document.getElementById("sticazzi").innerHTML = "Hah Gayyyyyy, estas muerto!! Hey non ti arrendere, crediamo in te, ricarica la pagina e riprovaci!"
      document.getElementById("scomparire").value="Qifsha Ropt"
      document.getElementById("COD").value="Qija me arusha"
      pulsi = false
      victLose = false  
      document.getElementById("morte").innerHTML = "Guarda questo fantastico video!!!!"
    }
  }
}
