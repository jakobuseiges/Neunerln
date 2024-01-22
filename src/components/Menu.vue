<template>
<div>
    <v-container v-if="!statsDisplayed">
      <div class="center"><h1>Neunerln</h1><hr><br/></div>
      <v-row justify="center">
        <v-col cols="4">
          <v-btn 
            variant="outlined"
            href=""
            block
            size="x-large"
          >
            Spiel starten
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-btn 
            variant="outlined"
            id="viewStats"
            href=""
            block
            size="x-large"
            @click="showStats"
          >
            Statistiken ansehen
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-btn 
            variant="outlined"
            id="endgame"
            block
            size="x-large"
            @click="endGame"
          >
            Spiel beenden
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <StatInterface v-if="statsDisplayed" @backToMenu="backToMenu"/>
</div>
  </template>
    
  <script>
    import StatInterface from './StatInterface.vue';

    export default {
      name: "Menu",

      components: {
        StatInterface
      },
      props: {
        cardRef: String,
      },
  
      data: () => ({
        model: null,
        statsDisplayed: false,
      }),
  
      methods: {
        showStats () {
          if (this.statsDisplayed === true) {
            this.statsDisplayed = false
          } else {
            this.statsDisplayed = true
          }
        },
        endGame(){
          close();
        },
        backToMenu(){
          this.statsDisplayed = false;
        }
      }
    }
  </script>
  
  <style scoped>
    .playing-card {
      height: 300px;
    }

    .center{
      text-align: center;
    }
  </style>