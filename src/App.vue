<script setup>
</script>

<template>
  <div class="h-screen">
    <transition 
      enter-active-class="duration-300 ease-out"  
      enter-from-class="transform opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0" 
      leave-active-class="duration-200 ease-in" 
      leave-from-class="opacity-100 translate-x-0" 
      leave-to-class="transform opacity-0 translate-x-full"
      >
      <router-view />
    </transition>
  </div>
</template>

<style scoped>
</style>
