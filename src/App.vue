<script setup>
</script>

<template>
  <div class="bg-image h-screen">
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
.bg-image {
  background-image: url(C:\Users\aluno\Trabalho2_sw2\src\assets\bg_1.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>
