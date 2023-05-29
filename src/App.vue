<script setup>
import Example from "./components/Example.vue";
</script>

<template>
  <div class="flex flex-col justify-center bg-purple-600 h-screen">
    <div class="flex justify-center">
      <div class="flex flex-col">
      <span class="text-black font-semibold text-lg mb-2">Digite para concatenar.</span>
      <Example />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
