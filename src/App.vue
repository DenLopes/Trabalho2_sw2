<script setup>
</script>

<template>
  <div>
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <div class="navbar bg-base-100">
          <div class="flex-none">
            <label for="my-drawer" class="btn btn-square btn-ghost drawer-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div class="flex-1">
            <RouterLink to="/" class="btn btn-ghost normal-case text-xl">Sitios Web 2</RouterLink>
          </div>
        </div>
        <div class="h-[calc(100vh-116px)]">
          <transition enter-active-class="duration-300 ease-out" enter-from-class="transform opacity-0"
            enter-to-class="opacity-100" leave-active-class="duration-200 ease-in" leave-from-class="opacity-100"
            leave-to-class="transform opacity-0">
            <RouterView />
          </transition>
        </div>
        <footer class="footer footer-center p-4 bg-primary text-primary-content">
          <div>
            <p class="">
              Frase aleatoria que vamos colocar aqui para ter algum efeito
            </p>
          </div>
        </footer>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <!-- Sidebar content here -->
          <RouterLink to="/inf">Vai para segunda</RouterLink>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
