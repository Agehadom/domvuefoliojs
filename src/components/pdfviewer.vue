<template>
  <main>
<v-container class='canvaswrapper'>
  <div class='canvas'>
      <img src='../../public/docs/JosborneRefreshTechResumeImageVer.png' type='application/png'/>
  </div>
</v-container>
</main>
</template>

<style>
.canvaswrapper {
  display: flex;
  background-color: #660088;
  height: auto;
  margin: 2px;
}

.canvas {
  margin: 2px;
  display: flex;
  border: 1px solid black;
  direction: ltr;
  height: auto;
}

</style>

<script>
// const { PDFObject } = require('pdfobject')

  export default {
    name: 'pdfviewer',

  }
</script>
