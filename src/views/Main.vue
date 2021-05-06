<template>
  <div>{{ count }}</div>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

<script lang="ts">
import useCounter from "../hooks/useCounter";
import { mapGetters } from "vuex";

export default {
  name: "Main",
  setup() {
    const { increment, decrement } = useCounter();

    return { increment, decrement };
  },
  computed: {
    // I want to use computed, mapGetters in the useCounter file, but I don't know how to do it yet.
    ...mapGetters({ count: "counter/count" })
  }
};
</script>

<style scoped></style>
