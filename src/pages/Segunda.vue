<script setup>
import { ref, onMounted, computed, watch } from "vue";
import Grafico from "../components/Grafico.vue";
import dadosIbama from "../assets/Ibama.json";
import imagem from "../assets/ibama-logo-1.png";

const dados = dadosIbama;
const tiposReceita = ref([]);
const receitaSelecionada = ref("Selecione o tipo de receita");

//função que separa e seleciona as receitas
const separaReceita = () => {
  //pega um array com todos os tipos de receita
  dados.data.forEach((item) => {
    if (!tiposReceita.value.includes(item.receita)) {
      tiposReceita.value.push(item.receita);
    }
  });
  //coloca só os tipos de receita que tem mais de 7 anos
  let newTiposReceita = [];
  tiposReceita.value.forEach((item) => {
    let selecionada = dados.data.filter((i) => i.receita == item);
    if (selecionada.length >= 8) {
      newTiposReceita.push(item);
    }
  });
  //coloca os tipos de receita no ref
  tiposReceita.value = newTiposReceita;
};

//computed para pegar os anos de cada receita selecionada
const xAxis = computed(() => {
  if (receitaSelecionada.value != "Selecione o tipo de receita") {
    return dados.data
      .filter((item) => item.receita == receitaSelecionada.value)
      .map((item) => item.ano);
  }
  return [];
});

//computed para pegar os valores de cada receita selecionada
const yAxis = computed(() => {
  if (receitaSelecionada.value != "Selecione o tipo de receita") {
    return dados.data
      .filter((item) => item.receita == receitaSelecionada.value)
      .map((item) => item.valor);
  }
  return [];
});

//array de botoes para o texto do corpo
const botoes = ref([
  {
    nome: "Proteção animal",
    estado: true,
    classe: "",
  },
  {
    nome: "Proteção Da Flora",
    estado: false,
    classe: "",
  },
  {
    nome: "Atuação Politica",
    estado: false,
    classe: "",
  },
]);

//array de texto do corpo
const textoBotoes = ref([
  {
    classe: "flex flex-col p-6 rounded-md text-center",
    estado: true,
    textos: [
      {
        texto:
          "O IBAMA trabalha para combater o tráfico de animais silvestres, promover a conservação de espécies ameaçadas de extinção e proteger a flora brasileira. O órgão emite licenças para atividades que envolvem animais e plantas, realiza resgates e reintroduções de espécies em perigo.",
        classeTexto: "flex font-bold text-2xl text-white",
        srcImagem: imagem,
        classImagem: "w-32 h-32 hover:scale-110",
      },
      {
        texto:
          "O IBAMA trabalha para combater o tráfico de animais silvestres, promover a conservação de espécies ameaçadas de extinção e proteger a flora brasileira. O órgão emite licenças para atividades que envolvem animais e plantas, realiza resgates e reintroduções de espécies em perigo.",
        classeTexto: "flex flex-row-reverse font-bold text-2xl text-white",
        srcImagem: imagem,
        classImagem: "w-32 h-32 hover:scale-110",
      },
    ],
  },
  {
    classe: "flex p-6 rounded-md text-center",
    estado: false,
    textos: [
      {
        texto:
          "O IBAMA trabalha para combater o tráfico de animais silvestres, promover a conservação de espécies ameaçadas de extinção e proteger a flora brasileira. O órgão emite licenças para atividades que envolvem animais e plantas, realiza resgates e reintroduções de espécies em perigo.",
        classeTexto: "font-bold text-2xl text-white",
        srcImagem: imagem,
        classImagem: "w-32 h-32 hover:scale-110",
      },
    ],
  },
  {
    classe: "flex p-6 rounded-md text-center",
    estado: false,
    textos: [
      {
        texto:
          "O IBAMA trabalha para combater o tráfico de animais silvestres, promover a conservação de espécies ameaçadas de extinção e proteger a flora brasileira. O órgão emite licenças para atividades que envolvem animais e plantas, realiza resgates e reintroduções de espécies em perigo.",
        classeTexto: "font-bold text-2xl text-white",
        srcImagem: imagem,
        classImagem: "w-32 h-32 hover:scale-110",
      },
    ],
  },
]);

//função para mudar o estado do botão
const mudaEstado = (val, index) => {
  for (var i = 0; i < val.length; i++) {
    if (i == index) {
      val[i].estado = true;
      continue;
    }
    val[i].estado = false;
  }
};

onMounted(() => {
  separaReceita();
  mudaEstado(botoes.value, 0);
});
</script>

<template>
  <div class="bg-gray-950 min-h-screen h-full pb-96">
    <RouterLink
      to="/"
      class="sticky top-4 ml-4 btn font-bold rounded-full bg-gray-100 text-black normal-case text-xl hover:bg-white z-50 mt-4"
      >{{ "<" }}</RouterLink
    >
    <div
      class="flex flex-col justify-between content-center px-12 text-white text-xl"
    >
      <h2 class="text-green-500 text-center text-3xl font-bold mb-28">
        O QUE É O IBAMA?
      </h2>
	  
      <div class="flex flex-col justify-around mb-40 items-center m-0 sm:flex-row">
        <p class="w-[70%] leading-10 text-justify text-2xl">
          O Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais
          Renováveis <strong class="text-green-500">(IBAMA)</strong> foi criado
          em 1989, por meio da Lei nº 7.735, com o objetivo de unificar e
          fortalecer as ações de proteção e conservação do meio ambiente no
          Brasil. Desde sua criação, o IBAMA tem desempenhado um papel essencial
          na
          <strong class="text-green-500">proteção ambiental do país.</strong> O
          órgão atua em âmbito nacional, sendo vinculado ao Ministério do Meio
          Ambiente, e possui uma estrutura descentralizada, com escritórios
          regionais em todo o território brasileiro. Ao longo de sua história, o
          IBAMA tem enfrentado diversos
          <strong class="text-green-500">desafios</strong> e desenvolvido ações
          para combater crimes ambientais, promover a conservação da
          biodiversidade e assegurar o uso sustentável dos recursos naturais.
        </p>
        <img src="../assets/brasil.png" alt="brasil" class="w-44 h-44 mt-12 sm:mt-0" />
      </div>
      <div class="flex m-4  justify-around flex-col items-center sm:flex-row items-baseline">
        <div class="flex relative top-7">
          <span class="text-green-500 font-bold text-5xl text-center"
            >1.87<br />BILHÃO</span
          >
          <span class="text-green-500 font-bold text-8xl ml-2">R$</span>
        </div>
        <div class="flex flex-col w-full">
          <p class="w-full text-2xl leading-10 mb-10 ml-6 m-4 mt-20 sm:mt-0">
            O orçamento do IBAMA é direcionado para diversas áreas fundamentais
            na preservação do meio ambiente. Mas como esse recurso é dividido?
            Explore o gráfico abaixo para compreender melhor a distribuição das
            receitas do IBAMA para o ano de 2023.
          </p>
          <div class="flex w-full h-full justify-center m-4">
            <div class="flex justify-center">
              <select
                v-model="receitaSelecionada"
                class="select select-bordered w-full max-w-xs mr-2 text-black"
              >
                <option disabled selected>Selecione o tipo de receita</option>
                <option
                  v-for="(tipoReceita, index) in tiposReceita"
                  :key="index"
                >
                  {{ tipoReceita }}
                </option>
              </select>
              <Grafico
                :xAxis="xAxis"
                :yAxis="yAxis"
                :label="receitaSelecionada"
                :key="receitaSelecionada"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center mt-24">
        <h2 class="text-yellow-300 text-3xl font-bold">ATUAÇÕES DO IBAMA</h2>
        <p class="mt-16 text-2xl w-[90%] leading-10">
          O IBAMA, Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais
          Renováveis, é responsável por implementar e fazer cumprir as políticas
          ambientais do Brasil. Sua atuação é vasta, incluindo proteção da fauna
          e flora, bem como representação política. Clique nos botões abaixo
          para entender melhor sobre cada uma das
          <strong class="text-yellow-300">ações principais</strong> do IBAMA.
        </p>
      </div>

      <div class="flex flex-col mt-12 mb-44">
        <div class="flex justify-around mb-12 flex-col sm:flex-row">
          <button
            v-for="(botao, index) in botoes"
            @click="mudaEstado(botoes, index), mudaEstado(textoBotoes, index)"
            :class="botao.classe"
            class="btn m-3 sm:m-0"
          >
            {{ botao.nome }}
          </button>
        </div>
        <div v-for="(texto, index) in textoBotoes" :key="index" class="flex">
          <transition
            enter-active-class="duration-200 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="opacity-200"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="transform opacity-0 "
          >
            <div
              class="absolute w-[calc(100vw-100px)]"
              v-show="texto.estado"
              :class="texto.classe"
              :key="index"
            >
              <div v-for="(bloco, index) in texto.textos" :key="index" :class="bloco.classeTexto">
                <span class="w-[90%]"
                  >{{ bloco.texto }}
                </span>
                <img :src="bloco.srcImagem" :class="bloco.classImagem" />
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
