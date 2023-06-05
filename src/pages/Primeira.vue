<script setup></script>

<template>
  <div class="flex flex-col bg-green-600 w-full h-full">
    <div class="flex w-full">
      <span
        class="w-fit mx-auto mt-20 mb-10 font-bold text-[11rem] text-transparent bg-clip-text bg-gradient-to-b from-lime-300 to-yellow-300"
        >IBAMA</span
      >
    </div>
    <div class="flex h-full">
      <span class="font-bold text-5xl mx-auto text-lime-300">
        Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renovaveis
      </span>
    </div>
    <div class="flex justify-center mb-20">
      <router-link to="/inf" class="btn w-40 h-16 text-white border border-solid border-white text-lg">Descubra</router-link>
    </div>
    <div class="flex p-4">  
      <img src="../assets/ibama-logo-1.png" class="mt-auto w-32 h-32" />
    </div>
  </div>
</template>

<style scoped></style>
