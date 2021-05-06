<template>
  <router-view />
</template>

<script lang="ts">
import { onMounted } from "@vue/composition-api";

export default {
  name: "App",
  setup() {
    onMounted(() => {
      document.title = "Vue 3 + VueX 4 Example";
    });
  }
};
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
