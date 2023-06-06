<script setup>
import { SourceMapConsumer } from 'source-map-js/lib/source-map-consumer';
import { ref, onMounted, pushScopeId } from 'vue'
import dadosIbama from '../assets/Ibama.json'

const dados = dadosIbama;
const tipoReceita = ref([]);

const separaReceita = () => {
	tipoReceita.value = dados.data.map(inf =>{
		if(tipoReceita.value.find(inf => tipoReceita.value == inf.receita)){
			return inf;
		}
	});
}


onMounted(() => {
	console.log(dados);
	separaReceita();
	console.log(tipoReceita.value);
})
</script>

<template></template>
