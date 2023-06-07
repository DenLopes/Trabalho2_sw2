<script setup>
import Grafico from "../components/Grafico.vue";
import { ref, onMounted, computed } from "vue";
import dadosIbama from "../assets/Ibama.json";

const dados = dadosIbama;
const tiposReceita = ref([]);
const receitaSelecionada = ref('Selecione o tipo de receita');

const separaReceita = () => {
  dados.data.forEach((item) => {
    if (!tiposReceita.value.includes(item.receita)) {
      tiposReceita.value.push(item.receita);
    }
  });
  //tira dos tipo onde tme pouco dados
	let newTiposReceita = [];
tiposReceita.value.forEach((item) => {
  let selecionada = dados.data.filter(i => i.receita == item);
  if(selecionada.length >= 8){
    newTiposReceita.push(item);
  }
});

tiposReceita.value = newTiposReceita;

};

const xAxis = computed(() => {
	if(receitaSelecionada.value != 'Selecione o tipo de receita'){
		return dados.data.filter(item => item.receita == receitaSelecionada.value).map(item => item.ano);
	}
	return [];
});

const yAxis = computed(() => {
	if(receitaSelecionada.value!= 'Selecione o tipo de receita'){
    return dados.data.filter(item => item.receita == receitaSelecionada.value).map(item => item.valor);
  }
  return [];
});

onMounted(() => {
  separaReceita();
});
</script>

<template>
  <div class="flex justify-center w-full h-full">
		<div class="flex flex-col justify-center">
			<select v-model="receitaSelecionada" class="select select-bordered w-full max-w-xs mr-auto mb-32">
				<option disabled selected>Selecione o tipo de receita</option>
				<option v-for="(tipoReceita, index) in tiposReceita" :key="index">{{ tipoReceita }}</option>
			</select>
			<Grafico :xAxis="xAxis" :yAxis="yAxis" :label="receitaSelecionada" :key="receitaSelecionada"/>
		</div>
  </div>
</template>
