let giorno = 0
const barre = [100, 100, 100, 10];

let ran = 0
let pulsi = false
let victLose = true

const eventi = [
  {"evento": "E' rimasto del cibo che però è andato a male, vuoi mangiarlo?", 
  "risultato": "Buono era buono, ma di sicuro bene non ti ha fatto.",
  "valori": [-10, 0, 10, 0]},

  {"evento": "C'è un'infiltrazione di acqua sporca, vuoi berla?",
  "risultato": "Non è stata un'idea saggissima, ma almeno hai meno sete",
  "valori": [-5, 24, 0, 0]},

  {"evento": "Un topo si è nascosto nel bunker, snack?", 
  "risultato": "Non è esattamente il tipo di snack che sponsorizzerebbe un atleta... ti ha sfamato, ma ora stai uno schifo.",
  "valori": [-20, 0, 10, 0]},

  {"evento": "Senti rumori provenire dall'esterno, potrebbero esserci provviste... Vuoi controllare?",
  "risultato": "Hai trovato un cassa piena cibo e bibite, ma sei stato troppo tempo all'esterno e ti sei contaminato con le radiazioni.",
  "valori": [0, 20, 20, 30]},

  {"evento": "Senti bussare alla porta, vuoi controllare?", 
  "risultato": "Ad aspettarti c'erano dei banditi, li ha sconfitti e rubato le loro provviste, ma sei malconcio e hai subito una piccola dose di radiazioni.",
  "valori": [-20, 10, 10, 10]},

  {"evento": "Senti bussare alla porta, vuoi controllare?", 
  "risultato": "Sull'uscio c'è l'addetto alla mensa della caritas, che in questo momento di difficoltà sta smistando cibo.",
  "valori": [0, 0, 10, 10]},
  
  {"evento": "Vuoi fare un po' di esercizio fisico nel rifugio?", 
  "risultato": "Bondi sarebbe fiero di te, però ti sei stancato e hai sia usato molte energie che espulso molto sudore",
  "valori": [20, -10, -10, -10]},

  {"evento": "Vuoi fare un po' di esercizio fisico all'esterno?", 
  "risultato": "Sei proprio un pesce! Con un'emergenza nucleare pensi sia una buona idea uscire a prendere un po' d'aria fresca?",
  "valori": [20, -10, -10, 40]},
  
  {"evento": "Nascosto nel bunker trovi del lembas, il pan da via elfico, vuoi mangiarlo?", 
  "risultato": "Come Legolas insegna ne basta una minima quantità per riempire lo stomaco di un viaggiatore esausto.",
  "valori": [10, 0, 100, 0]},

  {"evento": "Sono venuti a prelevarti i militari, vuoi andare con loro?", 
  "risultato": "Eccome se ci vai! Lasci questo orrendo posto e inizi la tua nuova vita al di fuori di queste mura, in un mondo che aspetta di essere ricostruito.",
  "valori": [100, 100, 100, -100]},

  {"evento": "Sono venute a prelevarti delle persone che ti promettono la salvezza, vuoi andare con loro?",
  "risultato": "Oh no, questa volta ti hanno fregato! Infatti le persone fuori dalla porta in realtà sono alieni che ti hanno rapito per studiarti. Sei destinato ad una vita di torture strazianti, ed una morte lunga e infelice. Ah e quasi dimenticavo, TU PARTORIRAI CON DOLORE.",
  "valori": [0, 0, 0, 0]}
]

funFacts = [
  {"immagine": "https://ak1.picdn.net/shutterstock/videos/3159301/thumb/9.jpg", 
  "fatto": "Fidarsi è bene, ma non fidarsi è meglio... Non sempre aprire la porta a degli sconosciuti è una buona idea."},

  {"immagine": "https://adozioneadistanza.actionaid.it/magazine/wp-content/uploads/2018/04/malattie-mancanza-acqua.jpeg", 
  "fatto": "L'acqua non potabile potrebbe causare febbre, epatite e disordini gastrointestinali."},

  {"immagine": "https://www.lercio.it/wp-content/uploads/2017/11/napoli-scarrafone-scopre-che-la-mamma-trova-pi-bello-suo-cugino.jpg", 
  "fatto": "Gli scarafaggi sono così tanto delle bestie di Satana, che neanche un fallout nucleare li ucciderebbe..."},

  {"immagine": "https://thumbs-prod.si-cdn.com/yG9DSYOVI4uGhYyvoKhvW1RGtik=/fit-in/1600x0/https://public-media.si-cdn.com/filer/01/fb/01fb1828-7c3e-4a54-8228-a9dc21fbcaf8/waterglass_edit.jpg", 
  "fatto": "Secondo uno studio dell'università di Campeggine tutte le persone che sono morte hanno bevuto acqua nell'ultima settimana, sta attento!"},
  
  {"immagine": "https://best5.it/b5/wp-content/uploads/2019/01/sciacallo-5-800x400-800x400.jpg", 
  "fatto": "Non c'è limite al peggio, infatti, gli sciacalli non si arrendono mai, tanto che anche in questi periodi di crisi organizzano incursioni."},

  {"immagine": "https://www.corso-antincendio.org/wp-content/uploads/2017/10/disidratazione.png", 
  "fatto": "Senza acqua si resiste in media 10 giorni, ma attenzione a portare il fisico al limite..."},

  {"immagine": "https://www.filippo-ongaro.com/hubfs/resistere-attacchi-fame.jpg", 
  "fatto": "Mangiare un boccone ogni tanto non può far male, ma attenzione a ciò che si ingurgita."},

  {"immagine": "https://mr.comingsoon.it/imgdb/PrimoPiano/73651_ppl.jpg", 
  "fatto": "Le radiazioni non ti faranno diventare uno dei Fantastici Quattro."},

  {"immagine": "https://www.ottopagine.it/public/thumb/658x370/5-2017/9/news123956.jpg", 
  "fatto": "A volte, se i banditi ti colpiscono abbastanza forte, possono procurati un bel trauma cranico, a quel punto farai un sacco di bei sogni, chiamati allucinazioni."}
]

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}




function imgCard(){
  cas = getRandomIntInclusive(0, funFacts.length)
  document.getElementById("pCard1").innerHTML = funFacts[cas].fatto
  document.getElementById("cardImg1").src = funFacts[cas].immagine

  ces = getRandomIntInclusive(0, funFacts.length)
  document.getElementById("pCard2").innerHTML = funFacts[ces].fatto
  document.getElementById("cardImg2").src = funFacts[ces].immagine
}


function ded(){
  pulsi = false
  victLose = false

  document.getElementById("COD").value="Mission Failed"
  document.getElementById("paragrafoEventoQuotidiano").innerHTML = "Sei morto... Unlucky!"
  document.getElementById("scomparire").value="You Died"

  document.getElementById("card1").innerHTML = "La morte non fa bene, cerca di evitarla il più possibile!"
  document.getElementById("cardImg1").src = "https://images.squarespace-cdn.com/content/v1/57ab394cbe659454809bdef9/1536080082784-N2B02QF5J5021A2PVNEJ/ke17ZwdGBToddI8pDm48kO7Rg1Gpu728H4UqxUIfecJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PICj5SdZHY9KUswDgTH3eH8sP5PrkY15Dr7CE2CPSRiTEKMshLAGzx4R3EDFOm1kBS/skull.jpg"

  document.getElementById("card2").innerHTML = "Se continui a finire qui, prova a cercare di non morire, vedrai che farai passi da gigante!"
  document.getElementById("cardImg2").src = "https://www.taxidrivers.it/wp-content/uploads/2018/04/Taxi-Drivers_Storia-di-un-fantasma_A-Ghost-Story_David-Lowery_Luca-Biscontini_home-video.png"
}


function chickenDinner(){
  document.getElementById("paragrafoEventoQuotidiano").innerHTML = eventi[ran].risultato
  document.getElementById("scomparire").value = "Bravo!! Hai vinto!"
  document.getElementById("COD").value = "Campione"
  pulsi = false
  victLose = false
}


function alieni(){
  victLose = false

  document.getElementById("paragrafoEventoQuotidiano").innerHTML = eventi[ran].risultato
  document.getElementById("scomparire").value = "Luser!1!1!1!1!"
  document.getElementById("COD").value = "yourIQ = ForrestGumpIQ"
  document.getElementById("card1").innerHTML = "Gli alieni stanno colonizzando la Terra."
  document.getElementById("cardImg1").src = "https://us.123rf.com/450wm/sarah5/sarah51802/sarah5180200021/96174775-ritratto-di-un-alieno-grigio-in-piedi-e-ti-guarda-rendering-3d-sfondo-nero-.jpg?ver=6"

  document.getElementById("card2").innerHTML = "Gli alieni sono sadici."
  document.getElementById("cardImg2").src = "https://www.ilmattino.it/photos/HIGH/77/84/4317784_1813_alieni.jpg"
}


function nextDay(){
  if (victLose){
    pulsi = true
    giorno += 1
    ran = getRandomIntInclusive(0, eventi.length)
    barre[0] -=  barre[3]/10
    barre[1] -= 8
    barre[2] -= 4

    while (giorno<=15 && eventi[ran].evento == "Sono venuti a prelevarti i militari, vuoi andare con loro?") {
      ran = getRandomIntInclusive(0, eventi.length)
    }

    document.getElementById("contatore-lbl").innerHTML = "Giorno " + giorno
    document.getElementById("paragrafoEventoQuotidiano").innerHTML = eventi[ran].evento
    
    barre.forEach((e,i) => {
      if (e > 0) {document.getElementById("myBar" + i).style.width = e + "%"}
      else {document.getElementById("myBar" + i).style.width = "0%"}
      }
    )

    document.getElementById("scomparire").value = "Sì"
    imgCard()

    if (barre[0] <= 0 || barre[1] <= 0 || barre[2] <= 0 || barre[3] > 80) {ded()}
  }
}


function eventoQuotidiano(){
  if (pulsi) {
    pulsi = false
    
    barre.forEach((e,i) => barre[i] = e + eventi[ran].valori[i])
    barre.forEach((e,i) => {if (e > 100) {barre[i] = 100}})
    barre.forEach((e,i) => {
      if (e > 0) {document.getElementById("myBar" + i).style.width = e + eventi[ran].valori[i] + "%"}
      else {document.getElementById("myBar" + i).style.width = "0%"}
      }
    )  

    document.getElementById("paragrafoEventoQuotidiano").innerHTML = eventi[ran].risultato 
    document.getElementById("scomparire").value = "Hai fatto la tua scelta."

    if (eventi[ran].evento === "Sono venuti a prelevarti i militari, vuoi andare con loro?"){chickenDinner()}

    if (eventi[ran].evento === "Sono venute a prelevarti delle persone che ti promettono la salvezza, vuoi andare con loro?") {alieni()}

    if (barre[0] <= 0 || barre[1] <= 0 || barre[2] <= 0 || barre[3] > 80) {ded()}
  }
}
