<template>
    <NavBar/>
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
</template>

<script>
  import PlayingCard from "./components/Cards.vue"
  import MenuInterface from "./components/Menu.vue"
  import PlayingField from "./components/PlayingField.vue"
  import NavBar from "./components/NavBar.vue"

  import axios from "axios"

  export default {
    components: {
      MenuInterface,
      PlayingCard,
      PlayingField,
      NavBar
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
        this.cards = response.data
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
