<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"
        >Vite Documentation</a
      >
      |
      <a href="https://vuejs.org/v2/guide/" target="_blank"
        >Vue 2 Documentation</a
      >
    </p>

    <v-btn @click="click()">count is: {{ count }}</v-btn>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop({ type: String })
  public readonly msg!: string;
  public count = 0;

  public click() {
    this.count++;
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
