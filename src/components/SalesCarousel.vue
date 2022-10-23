<template>
  <v-row class="mt-5" justify="center">
    <v-carousel
      cycle
      height="400"
      style="width:50%;"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(src, i) in vm.imgSources"
        :key="i"
      >
        <v-img
          :src="src"
          height="100%"
        >
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import CarouselViewModel from "../../typescript/CarouselViewModel";
import Component from "vue-class-component";
@Component
export default class SalesCarousel extends Vue {
  public name = "SalesCarousel";
  public vm = new CarouselViewModel()
}
</script>

<style scoped>

</style>