<template>
  <main>
<v-container class='canvaswrapper introPanel'>
  <v-flex>
  <div class='canvastab'>
    <h1 class='restxt'>Gimme a call.</h1>
    <div class="closebtn restxt">X</div>
  </div>
  <div class='canvas'>
      <!-- <img src='../../public/docs/JosborneRefreshTechResumeImageVer.png'/> -->
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vSbLoZ8fIEv2hKE5MkZ9Pvnspn6H1j73fQJCAB2dOHh93hHrp9czEoeZNX9UenqmXIxxWB4GA_dJMZb/pub?embedded=true"></iframe>
  </div>
  </v-flex>
</v-container>
</main>
</template>

<style>
.restxt {
  font-style: italic;
}

.canvaswrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #660088;
  min-height: 100%;
  margin: 2px;
  min-width: 1000px;
}

.canvastab {
  display: flex;
  flex-direction: column;
  margin: 2px;
  min-width: 10%;
  position: relative;
  text-align: center;
}

.closebtn {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  font-size: 24px;
}

.closebtn:hover {
  color: #EC058E;
}

.canvas {
  margin: 2px;
  display: flex;
  border: 1px solid black;
  direction: ltr;
  min-height: 100%;
  width: 100%;
}

.canvas iframe {
  margin: 2px;
  background-color: red;
  width: 100%;
  min-height: 100%;
  height: 1000px;
}

</style>

<script>
// const { PDFObject } = require('pdfobject')

  export default {
    name: 'pdfviewer',

  }
</script>
