<template>
  <v-row class="mt-5 mb-5" justify="center">
    <v-carousel
      cycle
      height="100%"
      style="width:50%;"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(img, i) in imgSources"
        :key="i"
        :src="img.src"
      >
        <v-sheet></v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  props:{
    imgSources: Array,
  }
})
export default class SalesCarousel extends Vue {
  public name = "SalesCarousel";

}
</script>

<style scoped>

</style>