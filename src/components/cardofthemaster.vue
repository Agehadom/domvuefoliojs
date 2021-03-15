<template>
  <v-container class='imgcontain'>
      <div class='cardu' justify-center>
        <div class='cardu-content'>
          <!-- <div class="ava">
            <img src="https://i.imgur.com/zHMA0NY.png">
          </div> -->
          <h1>Julius Osborne</h1>
          <p>Agehadon</p>
        </div>
          <v-layout>
            <v-flex ma-1><v-card rounded>
              <a href='https://twitter.com/Agehadom'>
              <div class='icon'>
                <div class='fab fa-twitter fa-3x'>
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
                <div class='fab fa-linkedin-in fa-3x'>
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
                <div class='fas fa-envelope fa-3x'>
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
                <div class='fab fa-github-alt fa-3x'>
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
  position: absolute;
  height: 275px;
  width: 500px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #0088FF;
  border-radius: 10px;
  box-shadow: 1px 2px 5px #000000;
  /* box-shadow: inset 1px 2px 5px #000000; */
}

.ava {
  display: flex;
  max-height: 100px;
}

.cardu-content {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 2px;
  /* background-color: #002299; */
  border-bottom: 1px solid #000000;
  border-radius: 4px;
  position: relative;
}

.socialmediaback {
  margin: 2px;
  justify-content: center;
  background-color: red;
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
}

h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 400;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
}

a {
  text-decoration: none;
}

</style>

<script>
  export default {
    name: 'mastercardu',
  }
</script>
