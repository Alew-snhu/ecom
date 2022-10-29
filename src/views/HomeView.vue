<template>
  <div>

    <SalesCarousel :img-sources="vm.carouselImgSources" />

      <div class="divider"><h2>Featured Categories</h2></div>

    <GearCatGridView :gear-categories="vm.featuredCategories" />

  </div>
</template>

<script lang="ts">
import Vue from "vue";

import GearCatGridView from "@/components/GearCatGridView.vue";
import SalesCarousel from "@/components/SalesCarousel.vue";
import Component from "vue-class-component";
import HomeViewModel from "../../typescript/HomeViewModel";
@Component({
  components: {
    GearCatGridView,
    SalesCarousel,
  },
})
export default class HomeView extends Vue {

  public name = "Home";
  public vm = new HomeViewModel();
}
</script>
<style scoped>
.divider {
  text-align: center;
  font-family: "Segoe UI Variable",serif;
  justify-content: center;
  background-color: black;
  color: white;
  width:51%;
  margin:auto;
}
</style>
