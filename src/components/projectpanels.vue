<template>
  <main>
    <div class='pPanel'>
      <ul>
        <li v-for='pPanel in pPanels' :key='pPanel.id' v-on:click='pPanel.show = !pPanel.show'>
          <h1 class='display-3'>{{ pPanel.name }}</h1>
          <v-img :src='pPanel.img'></v-img>
          <p class='subtitle' v-show='pPanel.show'>{{ pPanel.desc }}</p>
          <a v-bind:href='pPanel.link' v-show='pPanel.show'>{{ pPanel.link }}</a>
        </li>
      </ul>
    </div>
  </main>
</template>

<style>
.pPanel {
  border-radius: 10px;
  opacity: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  opacity: 100%
}

li {
  color: #FFFBFC;
  background-color: #112255;
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  box-shadow: 0px 6px 2px #000000;
  margin: 10px;
}

a {
  font-style: italic;
}


</style>

<script>
  export default {
    name: 'projectpanels',

    data: () => ({
      pPanels: [
        {
          name: 'ReGambit',
          desc: 'A Chess Application designed to help beginners and intermediate players better understand the theory behind their actions.',
          img: 'https://imgur.com/HYANOhh.gif',
          link: 'https://delusionaly-tired.github.io/ReGambit-client/',
          show: false
        },
        {
          name: 'Rocket-Up',
          desc: 'A Rocket League training application, made to house useful information for players like training pack IDs and practice help.',
          img: 'https://i.imgur.com/mNcATrp.gif',
          link: 'https://agehadom.github.io/rocket-up-client/',
          show: false
        },
        {
          name: 'Witch School',
          desc: 'A game made in the Unity Engine, written in C#. Using Top-Down Engine as a foundation.',
          img: 'https://i.imgur.com/eTQqoNT.png',
          link: 'https://github.com/Agehadom/Magical-Game',
          show: false
        },
        {
          name: 'This site!',
          desc: 'This site was made with Vue, Vuetify, Javascript and animeJS for any of the cooler animations that you may see here. Mainly, the background waves!',
          img: 'https://raw.githubusercontent.com/juliangarnier/anime/master/documentation/assets/img/animejs-v3-header-animation.gif',
          link: 'https://animejs.com/',
          show: false
        },
        {
          name: 'To Be Announced',
          desc: 'No project to add here right now, check now later!',
          link: '',
          img: 'https://i.imgur.com/ytbr6BW.png',
          show: false
        },
        {
          name: 'To Be Announced',
          desc: 'No project to add here right now, check now later!',
          link: '',
          img: 'https://i.imgur.com/ytbr6BW.png',
          show: false
        },
      ],
    }),
  }
</script>
