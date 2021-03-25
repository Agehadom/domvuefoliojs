<template>
  <v-container>
  <div class="home mb-3 introPanel">
    <h1 class='display-3'>My Card</h1>
    <p class='subtitle'>Contact me via any of the platforms below</p>
    <mastercardu/>
  </div>
</v-container>
</template>

<style>
  .home {
    text-align: center;
  }
</style>

<script>
import mastercardu from '../components/cardofthemaster.vue'
export default {
  name: 'Contact',

  components: {
    mastercardu
  },

  data: () => ({
    //
  }),
};
</script>
