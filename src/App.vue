<template>
  <!-- <MenuInterface /> -->
  <!-- <PlayingCard
    :cardRef="cardRef"
  /> -->
  <PlayingField 
    :cards="cards"
    @createCards="createCards"
  />
</template>

<script>
  import PlayingCard from "./components/Cards.vue"
  import MenuInterface from "./components/Menu.vue"
  import PlayingField from "./components/PlayingField.vue";

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
        this.cards = response.data
      }
    }
  }
</script>
