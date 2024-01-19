<template>
    <v-col
      class="playing-card"
    >
      <v-img
        src="../assets/cards/GrasOber.png"
      ></v-img>
    </v-col>
  </template>
    
  <script>
    export default {
      name: "PlayingCard",
      props: {
        cardRef: String,
      },
  
      data: () => ({
        model: null,
      }),
  
      methods: {
  
      }
    }
  </script>
  
  <style scoped>
    .playing-card {
      height: 300px;
    }
  </style>