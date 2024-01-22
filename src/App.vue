<template>
  <!-- <MenuInterface /> -->
  <!-- <PlayingCard
    :cardRef="cardRef"
  /> -->
  <PlayingField />
</template>

<script>
  import PlayingCard from "./components/Cards.vue"
  import MenuInterface from "./components/Menu.vue"
  import PlayingField from "./components/PlayingField.vue";

  export default {
    components: {
      MenuInterface,
      PlayingCard,
      PlayingField
    },

    data: () => ({
      cardRef: 'src/assets/cards/EichelAcht.png',
    }),
  }
</script>
