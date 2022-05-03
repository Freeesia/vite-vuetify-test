<template>
  <v-app>
    <v-app-bar app></v-app-bar>

    <v-main>
      <v-container>
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Hello Vue 2 + Vite" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({ components: { HelloWorld } })
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
