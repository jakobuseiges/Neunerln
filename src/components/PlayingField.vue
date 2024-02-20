  <template>
    <v-container fluid>
      <v-row id="player1-hand" class="player-hand">
        <v-col v-for="card in player1_hand">
          <v-img
            :src="card.path"            
          ></v-img>         
        </v-col>
      </v-row>
      <v-divider color="warning" thickness="6px" class="mb-5 mt-5"></v-divider>
      <v-row id="neutral-area">
        <v-col>
          <v-img
            :src="laying_card"
          ></v-img>
        </v-col>
        <CardStack 
          :cards="cards"
          @drawCard="drawCard"
        />
      </v-row>
      <v-divider color="warning" thickness="6px" class="mb-5 mt-5"></v-divider>
      <v-row id="player2-hand" class="player-hand">
        <v-col v-for="card in player2_hand">
          <v-img
            :src="card.path"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </template>
    
  <script>
    import CardStack from './Cardstack.vue'
    import { toRaw } from 'vue'
    
    export default {
      name: "PlayingField",
      components: {
        CardStack
      },

      props: {
        cards: Array,
      },

      created () {
        this.createCards()
      },

      data () {       
        return {
          activePlayer: 1,
          player1_hand: [],
          player2_hand: [],
          laying_card: "src/assets/neutralCards/Karten_Rückseite.png"
        }
      },

      methods: {
        createCards () {
          this.$emit('createCards')
        },
        manageTurns () {
          if (this.activePlayer === 1) {
            this.activePlayer = 2
          } else {
            this.activePlayer = 1
          }
        },
        drawCard (card) {
          console.log(this.activePlayer)
          if (this.activePlayer === 1) {
            this.player1_hand.push(card)
          } else {
            this.player2_hand.push(card)
          }
          this.manageTurns()
        },
      }
    }
  </script>
  
  <style scoped>
    .v-container {
      background-color: rgb(212, 212, 212);
    }

    .v-img {
      height: 300px;
    }
  </style>