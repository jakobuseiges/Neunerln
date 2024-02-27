<template>
    <v-card>
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Neunerln</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>

      </v-app-bar>
      <v-main>
        <!-- <MenuInterface /> -->
        <!-- <PlayingCard
          :cardRef="cardRef"
        /> -->
        <PlayingField 
          :cards="cards"
          @createCards="createCards"
        />
        <v-btn
          @click="getPlayer('jakob', 'test2')"
        >
          Spieler bekommen
        </v-btn>
        <v-btn
          @click="addPlayer('jakob', 'test2')"
        >
          Spieler hinzufügen
        </v-btn>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
  import PlayingCard from "./components/Cards.vue"
  import MenuInterface from "./components/Menu.vue"
  import PlayingField from "./components/PlayingField.vue"

  import axios from "axios"

  export default {
    components: {
      MenuInterface,
      PlayingCard,
      PlayingField
    },

    data: () => ({
      cardRef: 'src/assets/cards/EichelAcht.png',
      cards: []
    }),

    methods: {
      async createCards() {
        let url = 'http://localhost:8000/functions/getCards'
        let response = await axios({
          method: 'get',
          url
        })
      },
      async getPlayer (username, password) {
        let url = 'http://localhost:8000/functions/getPlayer'
        let response = await axios({
          method: 'get',
          url,
          params: {
            username,
            password
          }
        })
        console.log(response.data)
      },
      async addPlayer (username, password) {
        let url = 'http://localhost:8000/functions/addPlayer'
        let response = await axios({
          method: 'get',
          url,
          params: {
            username,
            password
          }
        })
        console.log(response.data)
      }
    }
  }
</script>
