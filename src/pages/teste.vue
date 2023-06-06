<script setup>
import Chart from "chart.js/auto";
import { ref, onMounted } from "vue";
import dadosIbama from "../assets/Ibama.json";

const dados = dadosIbama;
const tipoReceita = ref([]);
const canvas = ref(null);

const separaReceita = () => {
  dados.data.forEach((item) => {
    if (!tipoReceita.value.includes(item.receita)) {
      tipoReceita.value.push(item.receita);
    }
  });
};

onMounted(() => {
  canvas.value = document.querySelector("canvas");

  const chartConfig = {
    title: "My Chart",
    xAxis: ["Label 1", "Label 2", "Label 3"],
    yAxis: [10, 20, 30],
  };

  new Chart(canvas, chartConfig);
	
  console.log(dados);
  separaReceita();
  console.log(tipoReceita.value);
});
</script>

<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>
