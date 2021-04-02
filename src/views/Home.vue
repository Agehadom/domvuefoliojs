<template>
  <v-container>
    <div class="home mb-3 introPanel">
      <h1 class='display-3'>Welcome to my portfolio!</h1>
      <p class='subtitle'>This is the home page for my portfolio site. <br> Here you can find my projects from General Assembly above, my personal projects such as my webcomic or my game in progress. <br> Enjoy your time here.</p>
    </div>
    <div class='introPanel home'>
      <h1 class='display-3'>About me</h1>
      <p class='subtitle>'>Hey, I'm Julius Osborne. I'm a full-stack developer, software engineer, 3D generalist and digital painter.<br><br>
        If you are here, you're probably here for the full-stack development part, aren't you? I am a recent graduate of General Assembly, where I completed a 3 month long, immersive course for full-stack development and developed 4 projects over those months. Some, I'm more proud of than others but you will find my most celebrated projects within the projects tab above.<br><br>
        I have a background in the art industry including but not limited to 3D modeling, sculpting, 2D character concepts and illustration as a freelance artist. Creation is my passion and I plan to use everything that I have learnt to good use. All of the things that I have absorbed over the past few years will hopefully continue to fuel my desire to continue creating and contribute my time to valuable projects</p><br>
      <div class='resumebtn'>
        <h1 class='display-3'>Click here to see my resume</h1>
      </div>
        <br><br>
        <p>This site is always growing! This is my hub for regular updates about my projects, contact information and other, more sensitive information.</p>
    </div>
    <div class="sidebar">
      <pdfviewer/>
    </div>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <div class='introPanel home techPanel'>
        <h1 class='techFont'>Artistic Technologies</h1>
        <div class='techContainer ma-2'>
          <img class='techSpread' src="https://img.icons8.com/color/100/000000/blender-3d.png"/>
          <img class='techSpread' src="https://img.icons8.com/color/100/000000/adobe-photoshop.png"/>
          <img class='techSpread' src="https://cdn.onlinewebfonts.com/svg/img_437112.png" width="100" height="100">
          <img class='techSpread' src="https://cdn.worldvectorlogo.com/logos/substance-painter.svg?" width="100" height="100">
          <img class='techSpread' src="https://cdn.worldvectorlogo.com/logos/unity-69.svg?" width="100" height="100">
          <img class='techSpread' src="https://iconape.com/wp-content/png_logo_vector/marvelous-designer-logo.png" width="100" height="100">
          <img class='techSpread' src="https://i.imgur.com/yfQHtCX.png" width="100" height="100">
        </div>
      </div>
    </v-flex>

    <v-flex xs12 md6>
      <div class='introPanel home techPanel'>
        <h1 class='techFont'>Software Engineering Technologies and Languages</h1>
        <div class='techContainer ma-2'>
          <img class='techSpread' src="https://icongr.am/devicon/html5-original.svg?size=100color=currentColor">
          <img class='techSpread' src="https://icongr.am/devicon/css3-original.svg?size=100color=currentColor">
          <img class='techSpread' src="https://icongr.am/devicon/javascript-original.svg?size=100color=currentColor">
          <img class='techSpread' src="https://icongr.am/devicon/sass-original.svg?size=100color=currentColor">
          <img class='techSpread' src="https://icongr.am/devicon/postgresql-original.svg?size=100color=currentColor">
          <img class='techSpread' src="https://icongr.am/devicon/python-original.svg?size=100color=currentColor">
          <img class='techSpread' src="https://icongr.am/devicon/git-original.svg?size=100color=currentColor">
          <img class='techSpread' src="https://icongr.am/devicon/bootstrap-plain.svg?size=100color=583e80">
          <img class='techSpread' src="https://icongr.am/devicon/nodejs-original.svg?size=100color=583e80">
          <img class='techSpread' src="https://icongr.am/devicon/express-original.svg?size=100color=949494">
          <img class='techSpread' src="https://icongr.am/devicon/atom-original.svg?size=100color=currentColor">
          <img class='techSpread' src="https://icongr.am/devicon/react-original.svg?size=100color=currentColor">
          <img class='techSpread' src="https://icongr.am/devicon/heroku-original.svg?size=100color=currentColor">
          <img class='techSpread' src="https://icongr.am/devicon/grunt-original.svg?size=100color=currentColor">
          <img class='techSpread' src="https://icongr.am/devicon/django-original.svg?size=100color=currentColor">
          <img class='techSpread' src="https://img.icons8.com/ios-filled/100/000000/c-sharp-logo.png"/>
        </div>
      </div>
    </v-flex>
  </v-layout>

  </v-container>
</template>

<style>
  .root {
  background-color: red;
  }

  .home {
    text-align: center;
  }

  .introPanel {
    background-color: #112255;
    border-radius: 4px;
    opacity: 100%;
    /* width: auto; */
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
    color: #FFFBFC;
    box-shadow: 0px 2px 4px #000000;
  }

  .techContainer {
    display: flex;
    justify-content: center;
    position: inherit;
    top: 0;
    left: 0;
  }

  .techSpread {
    display: flex;
    margin: 4px;
    width: 100%;
    height: 100%;
  }

  .techPanel {
    /* background-color: green; */
    height: 100%;
    margin: 2px;
  }

  .techFont {
    font-style: italic;
  }

  .sidebar {
    top: 0;
    right: 0;
    position: fixed;
    height: 800px;
    width: 600px;
  }

  .resumebtn {
    background-color: pink;
  }

  .resumebtn:hover {
    background-color: red;
  }
</style>

<script>
let $ = require("jquery")

import pdfviewer from '../components/pdfviewer.vue'
export default {
  name: 'Home',

  components: {
    pdfviewer
  },

  data: () => {
    return {

    }
  },
  methods: {

  },
  beforeCreate () {
    console.log('Before Create')
    },
  created () {
    console.log('Page Created');
  },
  beforeMount () {
    console.log('Mounting, daddy.');
  },
  mounted () {
    $('.resumebtn').on('click', function() {
      console.log('Poggers') })
    console.log('Mounted, daddy.')
  },
  beforeUpdate () {
    console.log('Updating...');
  },
  updated () {
    console.log('Updated!');
  }
}
</script>
