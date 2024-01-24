<template>
    <v-col
      class="playing-card"
    >
      <v-img
        src="../assets/cards/Karten_Rückseite.png"
        @click="drawCard"
      ></v-img>
    </v-col>
  </template>
    
  <script>
    let player1_hand = []
    let player2_hand = []
    let ablagestapel = []
    export default {
      name: "PlayingCard",
      props: {
        cards: Array
      },
  
      data: () => ({
        model: null,
      }),

      created(){
          let index = Math.floor(Math.random()*32);
          const randomCard = this.cards[index];
          ablagestapel.push(randomCard);
          this.cards.splice(index, 1);
      },

      methods: {
        drawCard () {
          let index = Math.floor(Math.random()*32);
          const randomCard = this.cards[index];
          player1_hand.push(randomCard);
          this.cards.splice(index, 1);
          player1_hand.forEach(element => {
            console.log(element);
          });
        }
      }
      
    }
  </script>
  
  <style scoped>
    .playing-card {
      height: 300px;
    }
  </style>