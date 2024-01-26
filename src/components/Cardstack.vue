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

export default {
  name: "PlayingCard",
  props: {
    cards: Array
  },

  data: () => ({
    model: null,
    player1_hand: [],
    player2_hand:[],
    ablagestapel: [],
    cardstackImage: "src/assets/cards/Karten_Rückseite.png"
  }),

  created() {
    let index = Math.floor(Math.random() * this.cards.length);
    const randomCard = this.cards[index];
    this.ablagestapel.push(randomCard);
    this.cards.splice(index, 1);
  },

  methods: {
    drawCard() {
      if (this.cards.length > 0) {
        let index = Math.floor(Math.random() * this.cards.length);
        const randomCard = this.cards[index];
        this.player1_hand.push(randomCard);
        this.cards.splice(index, 1);
        this.player1_hand.forEach(element => {});
        console.log(this.cards.length);
        if (this.cards.length <= 0) {
          this.cardstackImage = "src/assets/cards/Leerer_Stapel.png";
        }
      }
    }
  }
};
</script>

<style scoped>
.playing-card {
  height: 300px;
}
</style>
