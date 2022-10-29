<template>
  <v-app class="backgroundColor">
    <v-app-bar app color="black" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <div class="d-flex align-center" >
        <v-img
          alt="Anubis Logo"
          class="shrink mr-2"
          contain
          src="./assets/anubis_head.png"
          transition="scale-transition"
          width="70"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="500"
          src="./assets/Anubis_Logo.png"
          width="500"
        />
      </div>

      <v-spacer></v-spacer>
        <v-col cols="3">
          <v-text-field
            class="mt-6 mr-3"
            dense
            outlined
            placeholder="Search"
            color="white"
            prepend-icon="mdi-magnify" >
          </v-text-field>
        </v-col>
        <v-btn class="mr-2">
          <v-icon>mdi-home-account</v-icon>
        </v-btn>

        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
        >
          <v-icon>mdi-cart-variant</v-icon>
        </v-btn>

    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  public name = "App"
  public drawer = false;
}
</script>
<style scoped>
.backgroundColor {
  background-color: #883838;
}
</style>