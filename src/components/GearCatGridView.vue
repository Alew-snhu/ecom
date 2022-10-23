<template>
  <div class="d-flex mt-5">
    <v-row justify="center">
      <v-col
        cols="2"
        v-for="(gc, i) in vm.gearCategories"
        :key="i">
        <v-card  height="330px" width="300px" color="green">
          <v-card-title>{{ gc.name }}</v-card-title>
          <router-link to="/about">
            <v-img
              height="250px"
              :src="gc.imgSrc">
            </v-img>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TestViewModel from "../../typescript/TestViewModel";
import Component from "vue-class-component";
@Component
export default class GearCatGridView extends Vue {
  public name = "GearCatGridView";
  public vm = new TestViewModel();
}
</script>

<style scoped></style>
