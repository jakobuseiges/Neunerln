<template>
    <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-left">
          Bezeichnung
          </th>
          <th class="text-left">
          Wert
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in stats"
          :key="item.bezeichnung"
        >
          <td>{{ item.bezeichnung }}</td>
          <td>{{ item.wert }}</td>
        </tr>
        <button class="btn" @click="backToMenu">Zurück zum Menü</button>
      </tbody>
    </v-table>
  </template>
    
  <script>
    let playedGames = 15;
    let wonGames = 12;
    export default {
      data () {       
        return {
          stats: [
            {
              bezeichnung: 'Gespielte Spiele',
              wert: playedGames,
            },
            {
              bezeichnung: 'Gewonnene Spiele',
              wert: wonGames,
            },
            {
              bezeichnung: 'Siegesquote',
              wert: Math.round(wonGames/playedGames*100) + '%',
            },
          ],
        }
      },
        methods: {
          backToMenu(){
            this.$emit('backToMenu');
          }
        }
    }
  </script>
  
  <style scoped>
    .btn{
      font-size: 150%;
      margin-left: 50%
    }
  </style>