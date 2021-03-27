<template>
  <v-container>
    <div class="about introPanel">
      <h1 class='display-3 lineFix'>Welcome to my gallery</h1>
      <p class='subtitle'>Below you will find select works of art from various mediums, all created by Me.</p>
    </div>
    <div>
        <artprojectpanels/>
      </div>
  </v-container>
</template>

<script>
import artprojectpanels from '../components/artprojectpanels.vue'
export default {
  components: {
    artprojectpanels,
  }


}
</script>
