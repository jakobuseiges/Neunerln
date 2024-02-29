<template>
  <v-container fluid>
    <v-row id="player2-hand" class="player-hand">
      <v-col v-for="(card, index) in player2_hand">
        <v-img :src="card.path" @click="playCard(card, index)"></v-img>
      </v-col>
    </v-row>
    <v-divider color="warning" thickness="6px" class="mb-5 mt-5"></v-divider>
    <v-row id="neutral-area">
      <v-col>
        <v-img :src="laying_card"></v-img>
      </v-col>
      <CardStack :cards="cards" @drawCard="drawCard" />
    </v-row>
    <v-divider color="warning" thickness="6px" class="mb-5 mt-5"></v-divider>
    <v-row id="player1-hand" class="player-hand">
      <v-col v-for="(card, index) in player1_hand">
        <v-img :src="card.path" @click="playCard(card, index)"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardStack from "./Cardstack.vue";

export default {
  name: "PlayingField",
  components: {
    CardStack
  },

  props: {
    cards: Array
  },

  created() {
    this.createCards();
  },

  data() {
    return {
      activePlayer: 1,
      player1_hand: [],
      player2_hand: [],
      ablage_stapel: [],
      laying_card: "src/assets/neutralCards/Karten_Rückseite.png"
    };
  },

  methods: {
    createCards() {
      this.$emit("createCards");
      this.giveOutCards();
      this.setFirstCard();
    },

    manageTurns() {
      if (this.activePlayer === 1) {
        this.activePlayer = 2;
      } else {
        this.activePlayer = 1;
      }
    },

    drawCard(card, forced) {
      if (this.activePlayer === 1) {
        this.player1_hand.push(card);
        if (this.ablage_stapel.length > 0) {
          this.player1_hand.forEach(c => {
            if (
              c.symbol !=
                this.ablage_stapel[this.ablage_stapel.length - 1].symbol &&
              c.value !=
                this.ablage_stapel[this.ablage_stapel.length - 1].value &&
              c.value != "Neun" &&
              forced == false
            )
              this.manageTurns();
          });
        }
      } else {
        this.player2_hand.push(card);
        if (this.ablage_stapel.length > 0) {
          this.player2_hand.forEach(c => {
            if (
              c.symbol !=
                this.ablage_stapel[this.ablage_stapel.length - 1].symbol &&
              c.value !=
                this.ablage_stapel[this.ablage_stapel.length - 1].value &&
              c.value != "Neun" &&
              forced == false
            )
              this.manageTurns();
          });
        }
      }
    },

    playCard(card, index) {
      console.log(card.value);
      if (
        card.symbol ==
          this.ablage_stapel[this.ablage_stapel.length - 1].symbol ||
        card.value == this.ablage_stapel[this.ablage_stapel.length - 1].value ||
        card.value === "Neun"
      ) {
        if (this.activePlayer === 1) {
          this.playerPlaysCard(this.player1_hand, card);
        } else {
          this.playerPlaysCard(this.player2_hand, card);
        }
        this.manageTurns();
      } else {
        alert("Diese Karte kann nicht gespielt werden!");
      }
    },

    giveOutCards() {
      for (let i = 0; i < 10; i++) {
        this.drawCard(this.getRandomCard());
        this.manageTurns();
      }
    },

    setFirstCard() {
      let randomCard;
      if (this.cards.length > 0) {
        let index = Math.floor(Math.random() * this.cards.length);
        randomCard = this.cards[index];
        this.cards.splice(index, 1);
        this.ablage_stapel.push(randomCard);
        this.laying_card = this.ablage_stapel[0].path;
      }
    },

    playerPlaysCard(playerHand, card) {
      if (!playerHand.includes(card)) {
        alert("Dieser Spieler ist nicht dran!");
        this.manageTurns();
      } else {
        playerHand.splice(playerHand.indexOf(card), 1);
        this.ablage_stapel.push(card);
        this.laying_card = this.ablage_stapel[
          this.ablage_stapel.length - 1
        ].path;
        if (playerHand.length === 0) {
          alert("Spieler 1 hat gewonnen!");
        }
        if (card.value == "Acht") {
          this.manageTurns();
        }
        if (card.value == "Sieben") {
          this.takeTwo();
        }
      }
    },

    takeTwo() {
      this.drawCard(this.getRandomCard(), true);
      this.drawCard(this.getRandomCard(), false);
    },

    getRandomCard() {
      let randomCard;
      if (this.cards.length > 0) {
        let index = Math.floor(Math.random() * this.cards.length);
        randomCard = this.cards[index];
        this.cards.splice(this.cards.indexOf(randomCard), 1);
        if (this.cards.length <= 0) {
          this.cardstackImage = "src/assets/neutralCards/Leerer_Stapel.png";
        }
      }
      return randomCard;
    }
  }
};
</script>

<style scoped>
.v-container {
  background-color: rgb(212, 212, 212);
}

.v-img {
  height: 300px;
}
</style>
