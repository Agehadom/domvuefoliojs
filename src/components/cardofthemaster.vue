<template>
    <v-container class='imgcontain'>
        <div class='cardu'>
          <div class='cardu-content'>
            <img class='ava' src="https://i.imgur.com/zHMA0NY.png">
            <h1 class='cardTxt'>Julius Osborne</h1>
            <p class='cardTxt'>Agehadon</p>
          </div>
            <v-layout>
              <v-flex ma-1><v-card rounded>
                <a href='https://twitter.com/Agehadom'>
                <div class='icon'>
                  <div class='fab fa-twitter fa-3x iconAlign'>
                  </div>
                </div>
                  <v-card-text>
                  <div class='socialtxt'>
                  Twitter
                </div>
              </v-card-text>
            </a>
              </v-card></v-flex>
              <v-flex ma-1><v-card rounded>
                <a href='https://www.linkedin.com/in/julius-osborne-52a10a1ba/'>
                <div class='icon'>
                  <div class='fab fa-linkedin-in fa-3x iconAlign'>
                  </div>
                </div>
                  <v-card-text>
                  <div class='socialtxt'>
                  Linkedin
                </div>
              </v-card-text>
            </a>
                </v-card></v-flex>
              <v-flex ma-1><v-card rounded>
                <a href='mailto:josbornerara@gmail.com'>
                <div class='icon'>
                  <div class='fas fa-envelope fa-3x iconAlign'>
                  </div>
                </div>
                  <v-card-text>
                  <div class='socialtxt'>
                  Email
                </div>
              </v-card-text>
            </a>
                </v-card></v-flex>
              <v-flex ma-1><v-card rounded>
                <a href='https://github.com/Agehadom'>
                <div class='icon'>
                  <div class='fab fa-github-alt fa-3x iconAlign'>
                  </div>
                </div>
                  <v-card-text>
                  <div class='socialtxt'>
                  Github
                </div>
              </v-card-text>
              </a>
                </v-card></v-flex>
            </v-layout>
        </div>
    </v-container>
</template>

<style>
.cardu {
  position: sticky;
  height: 270px;
  width: 530px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #112255;
  border-radius: 10px;
  box-shadow: 2px 8px 2px #000000;
  /* box-shadow: inset 1px 2px 5px #000000; */
}

.ava {
  display: flex;
  border: 1px solid #000000;
  flex-direction: row;
  position: absolute;
  margin: 20px;
  top: 0;
  left: 0;
  max-height: 100px;
}

.cardu-content {
  color: white;
  font-style: italic;
  display: flex;
  background-color: #303090;
  flex-direction: column;
  text-align: center;
  height: 50%;
  margin: auto;
  /* border-bottom: 1px solid #000000; */
  border-radius: 2px;
  position: relative;
}

.socialtxt {
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  color: black;
}

.icon {
  display: flex;
  justify-content: center;
  margin: 2px;
}

.iconAlign {
  display: flex;
  position: relative;
  top: 10px;
}

.cardTxt {
  display: flex;
  flex-direction: row-reverse;
  text-align: right;
  position: relative;
  top: 20%;
  left: 0;
  margin: 2px 10px;
}

h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 400;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 300;
  font-style: italic;
}

a {
  text-decoration: none;
}

.imgcontain {
  height: auto;
  width: 100%;
  /* background-color: chartreuse; */
  overflow-y: visible;
}

</style>

<script>
  import anime from 'animejs/lib/anime.es.js'
  export default {
    name: 'mastercardu',

    mounted () {
      anime({
      targets: '.cardu',
      easing: 'easeInOutQuad',
      duration: 2000,
      direction: 'alternate',
      translateX: -10,
      translateY: 20,
      loop: true,
      keyframes: [
        {translateX: 20},
        {translateX: -20},
      ]
      })
    }
  }
</script>
