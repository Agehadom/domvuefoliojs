<template>
  <v-container>
    <div class="about introPanel">
      <h1 class='display-3 lineFix'>Welcome to my projects page</h1>
      <p class='subtitle'>Below are my projects, both WIP and completed. <br>More details are available upon interacting with the card below for each project!</p>
    </div>
    <div>
        <projectpanels/>
      </div>
  </v-container>
</template>

<style>
  .about {
    text-align: center;
  }

  .subtitle {
    font-size: 18px;
    margin: 2px;
    line-height: normal;
    padding: 4px;
  }

  .display-3 {
    display: inline-block;
    font-style: italic;
    margin: 6px;
    text-rendering: auto;
  }

  .lineFix {
    line-height: 5rem !important;
  }
</style>

<script>
import projectpanels from '../components/projectpanels.vue'
export default {
  components: {
    projectpanels,
  }


}
</script>
