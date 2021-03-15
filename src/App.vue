<template>
  <v-app>
    <v-app-bar
      app
      color="red"
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
        color="red"
        >
        <v-tab :to="'/'" exact>
          Homebase
        </v-tab>
        <v-tab :to="'/about'" exact>
          Projects
        </v-tab>
        <v-tab to="/temp">
          Template View
        </v-tab>
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
      <HelloWorld/>
      <charflair/>
    </v-main>
  </v-app>
</template>

<style>
.v-main {
  background-color: #993344;
}

.charflair {
  width: 400px;
  height: 400px;
  background-color: #498800;
}

.monkey-enter-active {
  transition: all .3s ease;
}

.monkey-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.monkey-enter, .monkey-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>

<script>
// import HelloWorld from './components/HelloWorld';
import charflair from './components/charflair';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    charflair
  },

  data: () => ({
    //
  }),
};
</script>
