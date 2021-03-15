<template>
  <v-container>
  <div class="home mb-3">
    <h1 class='display-2 mb-3'>My Card</h1>
    <h2 class='subheading display-3 mb-3'>Contact me via any of the platforms below</h2>
  </div>
  <div>
    <mastercardu/>
  </div>
</v-container>
</template>

<style>
  .root {
  background-color: red;
  }

  .home {
    /* background-color: #005599; */
    text-align: center;
  }
</style>

<script>
import mastercardu from '../components/cardofthemaster.vue';
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
