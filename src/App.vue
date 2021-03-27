<template>
  <v-app>
    <svg class="wave-top" width="100" viewBox="0 0 1200 1000">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V-8.5451e-06H1150C1100 -8.5451e-06 1000 -8.5451e-06 900 -8.5451e-06C800 -8.5451e-06 700 -8.5451e-06 600 -8.5451e-06C500 -8.5451e-06 400 -8.5451e-06 300 -8.5451e-06C200 -8.5451e-06 100 -8.5451e-06 50 -8.5451e-06H0V108.306Z" fill="#303090"/>
    </svg>
    <svg class='wave-bottom' width='100' viewBox="0 0 1200 1000">
      <path fill-rule="evenodd" clip-rule='evenodd' d="M0,0L120,32C240,64,480,128,720,149.3C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" fill='#62BBFF'/>
    </svg>
    <v-app-bar
      app
      color="#112255"
      dark
    >
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div> -->

      <v-spacer></v-spacer>

    <div class="d-flex align-center">
      <v-tabs
        center-active
        color="#EC058E"
        >
        <v-tab :to="'/'" exact>
          Homebase
        </v-tab>
        <v-tab :to="'/engineering'" exact>
          Software Engineering
        </v-tab>
        <!-- <v-tab to="/funnycolors">
          Artistic Projects
        </v-tab> -->
        <v-tab to="/contact">
          Contact Me
        </v-tab>
      </v-tabs>
    </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <transition name='monkey'>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
      <charflair/>
    </v-main>
    <background/>
  </v-app>
</template>

<style>
.v-main {
  height: 100%;
  background-color: #1188CC;
}

.charflair {
  width: 400px;
  height: 400px;
}

.monkey-enter-active {
  transition: all .6s ease;
}

.monkey-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.monkey-enter, .monkey-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

</style>

<script>
// import charflair from './components/charflair'
import background from './components/background'


export default {
  name: 'App',

  components: {
    // charflair,
    background
  },

  data: () => ({
    //
  }),
};
</script>
