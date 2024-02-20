<template>
  <v-col class="playing-card">
    <v-img
      id="cardstack"
      alt="Kartenruecken"
      :src="cardstackImage"
      @click="drawCard"
    ></v-img>
  </v-col>
</template>

<script>
import { toRaw } from 'vue';

export default {
  name: "PlayingCard",
  props: {
    cards: Array
  },

  data: () => ({
    model: null,
    cardstackImage: "src/assets/neutralCards/Karten_Rückseite.png"
  }),

  methods: {
    drawCard() {
      let randomCard
      if (this.cards.length > 0) {
        let index = Math.floor(Math.random() * this.cards.length)
        randomCard = this.cards[index]
        this.cards.splice(index, 1)
        console.log(this.cards.length)
        if (this.cards.length <= 0) {
          this.cardstackImage = "src/assets/neutralCards/Leerer_Stapel.png";
        }
      }
      this.$emit('drawCard', randomCard)
    },
  }
};
</script>

<style scoped>
.playing-card {
  height: 300px;
}
</style>
