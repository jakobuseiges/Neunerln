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
            src="../assets/cards/Eichel_Acht.png"
          ></v-img>
        </v-col>
        <CardStack 
          :cards="cards"
        />
      </v-row>
      <v-divider color="warning" thickness="6px" class="mb-5 mt-5"></v-divider>
      <v-row id="player2-hand" class="player-hand">
        <v-col>
          <v-img
            src="../assets/cards/Eichel_Acht.png"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </template>
    
  <script>
    import CardStack from './Cardstack.vue'
    export default {
      name: "PlayingField",
      components: {
        CardStack
      },

      props: {
        cards: Array
      },

      created () {
        this.createCards()
      },

      data () {
        return {
          
        }
      },

      methods: {
        createCards () {
          this.$emit('createCards')
        }
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