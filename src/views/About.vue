<template>
  <div class="about">
    <h1>current team:{{teamName}}</h1>
    <button @click="updateClicks">counter</button>
    <h2>{{ $store.state.sum }}</h2>
    <p>Last team name clicked: {{ $store.state.lastTeam }}</p>
    <router-link :to="`/`">戻る</router-link>
  </div>
</template>

<script>
export default {
  props: ['teamName'],
  data() {
    return {
      teams: [
        {
          id: "c36136ef-552f-4dc9-84b6-65ecb8574e81",
          name: "Team_A",
        },
        {
          id: "ed0459f5-716d-4ef4-99ba-5dc750dfe0d0",
          name: "Team_B",
        },
        {
          id: "60d0d5d5-8ce9-41d9-a65b-13a090c10ae1",
          name: "Team_C",
        },
      ]
    };
  },
  methods: {
    updateClicks(){
      this.$store.commit('addOneMutation');
      this.$store.commit('updateLastTeamMutation', this.teamName)
    }
  }
}
</script>
