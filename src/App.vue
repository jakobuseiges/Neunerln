<template>
  <!-- <v-card
    class="mx-auto my-8"
    max-width="344"
    elevation="16"
  >
    <v-card-item>
      <v-card-title>
        Card title
      </v-card-title>
      <v-card-subtitle>
        Card subtitle secondary text
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </v-card-text>
  </v-card> -->
  <MenuInterface />
  <!-- <PlayingCard
    :cardRef="cardRef"
  /> -->
</template>

<script>
  import PlayingCard from "./components/Cards.vue"
  import MenuInterface from "./components/Menu.vue"

  export default {
    components: {
      MenuInterface,
      PlayingCard
    },

    data: () => ({
      cardRef: 'src/assets/cards/EichelAcht.png',
    }),
  }
</script>
