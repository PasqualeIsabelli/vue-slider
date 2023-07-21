'use strict'

/* ESERCIZIO: Vue Slider
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l’immagine corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
*/

const app = Vue.createApp({
  data() {
    return {
      // VARIABILE: Array
      slides: [
        {
          image: 'img/01.webp',
          title: 'Marvel\'s Spiderman Miles Morale',
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
          alt: 'Spiderman'
        }, {
          image: 'img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
          alt: 'Ratchet & Clank'
        }, {
          image: 'img/03.webp',
          title: 'Fortnite',
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
          alt: 'Fortnite'
        }, {
          image: 'img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
          alt: 'Stray'
        }, {
          image: 'img/05.webp',
          title: "Marvel's Avengers",
          text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
          alt: 'Avenger'
        }
      ],
      // Imposto una variabile globale di valore 0 che rappresenta l'immagine corrente
      currentImage: 0,
      // Imposto una variabile globale di valore null che rappresenta il tempo di intervallo per lo scorrimento delle immagini
      intervalCurrentImage: null,
    }
  },
  methods: {
    //EVENT CLICK: Click sulla thumb che fa vedere come immagine corrente l'immagine cliccata
    onClick(i){
      this.currentImage = i;
    },
    // EVENT CLICK: Click sul button prev che fa vedere l'immagine precedente
    onPrevClick(){
      this.currentImage--;
      if (this.currentImage < 0) {
        this.currentImage = this.slides.length - 1
      }
    },
    // EVENT CLICK: Click sul button next che fa vedere la prossima immagine
    onNextClick(){
      this.currentImage++;
      if (this.currentImage > this.slides.length - 1)
      this.currentImage = 0
    },
    // SET INTERVAL: Imposto lo scorrimento automatico per le immagini
    startAutoplay () {
      this.intervalCurrentImage = setInterval(() => {
        this.onNextClick()
      }, 3000)
    },
    // CLEAR INTERVAL: Imposto il blocco dello scorrimento automatico delle immagini con il mouse over
    stopAutoplay() {
      clearInterval(this.intervalCurrentImage)
    }
  },
  mounted() {
    // Richiamo la funzione del setInterval
    this.startAutoplay()
  } 
}).mount("#app")