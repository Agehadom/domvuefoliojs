<template>
<v-container class='imgcontain'>
  <div class='charbox mb-3'>
    <img src="https://i.imgur.com/A1Rf77x.gif" alt="">
  </div>
</v-container>
</template>

<style>
.charbox {
  position: absolute;
  max-width: 250px;
  overflow: hidden;
  bottom: -10px;
  right: 0px;
}

img {
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
