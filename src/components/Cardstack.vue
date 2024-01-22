<template>
    <v-col
      class="playing-card"
    >
      <v-img
        src="../assets/cards/Gras_Ober.png"
        @click="drawCard"
      ></v-img>
    </v-col>
  </template>
    
  <script>
    export default {
      name: "PlayingCard",
      props: {
        cards: Array
      },
  
      data: () => ({
        model: null,
      }),
  
      methods: {
        drawCard () {
          const randomCard = this.cards[Math.floor(Math.random() * max)]
          console.log(randomCard)
        }
      }
    }
  </script>
  
  <style scoped>
    .playing-card {
      height: 300px;
    }
  </style>