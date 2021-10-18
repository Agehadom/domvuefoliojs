<template>
<v-container class='imgcontain-anime'>
  <div class='charbox mb-3'>
    <img class='animegirl' src="https://i.imgur.com/A1Rf77x.gif" alt="">
  </div>
</v-container>
</template>

<style>
.charbox {
  position: fixed;
  max-width: 100px;
  overflow: hidden;
  bottom: -20px;
  right: 0px;
}

.animegirl {
  position: relative;
  top: 20px;
  width: 100%;
  object-fit: contain;
}

</style>

<script>
  export default {
    name: 'charflair',
  }
</script>
