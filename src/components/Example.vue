<script setup>
import { ref } from "vue";

const model = ref("");
const total = ref("");

const concat = () => {
  total.value = total.value + model.value;
  model.value = "";
};

const clear = () => {
  total.value = "";
};
</script>

<template>
  <div class="flex flex-col">
    <div class="flex">
      <div class="form-control mr-4">
        <div class="input-group">
          <input
						v-model="model"
            type="text"
            placeholder="Digite o que voce quer"
            class="input input-bordered"
          />
          <button class="btn btn-square px-8" @click="concat">Concat</button>
        </div>
      </div>
      <button class="btn btn-square bg-white text-black px-8" @click="clear">Limpar</button>
    </div>
		<span class="text-xl mt-6 h-2">{{ total }}</span>
  </div>
</template>

<style scoped></style>
