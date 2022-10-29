<template>
    <v-row justify="center" class="ml-10 mt-5">
      <v-col
        xl="1"
        lg="3"
        md="4"
        v-for="(gc, i) in gearCategories"
        :key="i">
        <v-card  height="330px" width="300px" color="green">
          <v-card-title>{{ gc.name }}</v-card-title>
          <router-link :to="gc.routerPath">
            <v-img
              height="250px"
              :src="gc.imgSrc">
            </v-img>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  props:{
    gearCategories: Array,
  }
})
export default class GearCatGridView extends Vue {
  public name = "GearCatGridView";

}
</script>

<style scoped></style>
