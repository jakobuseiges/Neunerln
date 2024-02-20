  <template>
    <v-container fluid>
      <v-row id="player1-hand" class="player-hand">
        <v-col>
          <v-img
            src="../assets/cards/Eichel_Acht.png"            
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
          @updatePlayerHands="updatePlayerHands"
        />
      </v-row>
      <v-divider color="warning" thickness="6px" class="mb-5 mt-5"></v-divider>
      <v-row id="player2-hand" class="player-hand">
        <v-col>
          <v-img
            src="../assets/cards/Eichel_Acht.png"
            @click="ShowCards"
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
          player1_hand: [],
          player2_hand: [],
          laying_card: "src/assets/cards/Karten_Rückseite.png"
        }
      },

      methods: {
        createCards () {
          this.$emit('createCards')
        },
        updatePlayerHands(player1, player2){
          this.player1_hand = player1
          this.player2_hand = player2
        },
        ShowCards(){
          toRaw(this.player1_hand).forEach(element => {
            console.log(element.symbol + " " + element.value)
          });
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