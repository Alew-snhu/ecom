<template>
  <v-app class="backgroundColor">
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center" >
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
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
<style scoped>
.backgroundColor {
  background-color: steelblue;
}
</style>