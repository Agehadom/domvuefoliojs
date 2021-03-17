<template>
  <main>
    <div class='pPanel'>
      <ul>
        <li v-for='pPanel in pPanels' :key='pPanel.id' v-on:click='pPanel.show = !pPanel.show'>
          <h1 class='display-3'>{{ pPanel.name }}</h1>
          <v-img :src='pPanel.img'></v-img>
          <p class='subtitle' v-show='pPanel.show'>{{ pPanel.desc }}</p>
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
  background-color: white;
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  box-shadow: 0px 6px 2px #000000;
  margin: 10px;
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
          show: false
        },
        {
          name: 'Rocket-Up',
          desc: 'A Rocket League training application, made to house useful information for players like training pack IDs and practice help.',
          img: 'https://i.imgur.com/mNcATrp.gif',
          show: false
        },
        {
          name: 'This site!',
          desc: 'This site was made with Vue, Vuetify, Javascript and animeJS for any of the cooler animations that you may see here. Mainly, the background waves!',
          img: 'https://raw.githubusercontent.com/juliangarnier/anime/master/documentation/assets/img/animejs-v3-header-animation.gif',
          show: false
        }
      ],
    }),
  }
</script>
