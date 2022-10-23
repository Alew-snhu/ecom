<template>
  <div>
    <SalesCarousel />
    <GearCatGridView />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import GearCatGridView from "@/components/GearCatGridView.vue";
import SalesCarousel from "@/components/SalesCarousel.vue";
export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  components: {
    GearCatGridView,
    SalesCarousel,
  },
});
</script>
