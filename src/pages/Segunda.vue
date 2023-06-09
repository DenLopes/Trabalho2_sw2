<script setup>
import { ref, onMounted, computed } from "vue";
import Grafico from "../components/Grafico.vue";
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

const botoes = ref([
  {
    nome: "Proteção animal",
    estado: true,
    classe: "bg-yellow-400 text-black hover:text-white",
  },
  {
    nome: "Proteção Da Flora",
    estado: false,
    classe: "bg-pink-400 text-black hover:text-white",
  },
  {
    nome: "Atuação Politica",
    estado: false,
    classe: "bg-lime-400 text-black hover:text-white",
  },
]);

const textoBotoes = ref([
  {
    texto: "Ecrava algo sobre Proteção animal, TEXTOOOOOOOOOOO TEXTOOOOOOOOOOO TEXTOOOOOOOOOOO TEXTOOOOOOOOOOO TEXTOOOOOOOOOOO TEXTOOOOOOOOOOOTEXTOOOOOOOOOOOTEXTOOOOOOOOOOO",
    estado: true,
    classe: "bg-yellow-500",
  },
  {
    texto: "Ecrava algo sobre Proteção Da Flora, TEXTOOOOOOOOOOO TEXTOOOOOOOOOOO TEXTOOOOOOOOOOO TEXTOOOOOOOOOOO TEXTOOOOOOOOOOO TEXTOOOOOOOOOOOTEXTOOOOOOOOOOOTEXTOOOOOOOOOOO",
    estado: false,
    classe: "bg-pink-500",
  },
  {
    texto: "Ecrava algo sobre Atuação Politica, TEXTOOOOOOOOOOO TEXTOOOOOOOOOOO TEXTOOOOOOOOOOO TEXTOOOOOOOOOOO TEXTOOOOOOOOOOO TEXTOOOOOOOOOOOTEXTOOOOOOOOOOOTEXTOOOOOOOOOOO",
    estado: false,
    classe: "bg-lime-500",
  },
]);

const mudaEstadoBotao = (val, index) => {
	console.log(val[index].estado);
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
});
</script>

<template>
  <div class="relative bg-gray-950 min-h-screen">
      <RouterLink to="/" class="sticky top-4 mt-4 ml-4 btn text-center items-center font-bold rounded-full bg-gray-100 text-black normal-case text-xl hover:bg-white z-50"
        >{{ "<" }}</RouterLink
      >

    <div
      class="flex flex-col justify-between content-center p-8 text-white text-xl"
    >
      <h2 class="text-green-500 text-center text-3xl font-bold mb-28">
        O QUE É O IBAMA?
      </h2>
      <div class="flex flex-row m-4 justify-around mb-40 items-center">
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
        <img src="../assets/brasil.png" alt="brasil" class="w-44 h-44" />
      </div>
      <div class="flex flex-row m-4 justify-around items-center">
        <div class="flex justify-center items-center">
          <span class="text-green-500 font-bold text-5xl text-center"
            >1.87<br />BILHÃO</span
          >
          <span class="text-green-500 font-bold text-8xl ml-2">R$</span>
        </div>
        <p class="w-[70%] text-2xl leading-10">
          É o orçamento previsto para o ano de 2023, mas para onde vai todo esté
          gasto?(insirir um texto decente.)
        </p>
      </div>
			<div class="flex justify-end w-full h-full">
		<div class="flex justify-center">
			<select v-model="receitaSelecionada" class="select select-bordered w-full max-w-xs mr-2 text-black">
				<option disabled selected>Selecione o tipo de receita</option>
				<option v-for="(tipoReceita, index) in tiposReceita" :key="index">{{ tipoReceita }}</option>
			</select>
			<Grafico :xAxis="xAxis" :yAxis="yAxis" :label="receitaSelecionada" :key="receitaSelecionada"/>
		</div>
  </div>

      <div class="flex flex-col items-center mt-24">
        <h2 class="text-yellow-300 text-3xl font-bold">ATUAÇÕES DO IBAMA</h2>
        <p class="mt-16 text-2xl w-[90%] leading-10">
          Entenda sobre as atuações do IBAMA. a Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Reprehenderit quisquam fugit,
          accusantium commodi praesentium quo esse quidem, sint quis ea nemo
          ratione temporibus est. Atque quisquam vero nisi quam
          distinctio!(INSIRA MAIS TEXTO, usar STRONG para
          <strong class="text-yellow-300">negrito</strong> com text-yellow-300).
        </p>
      </div>

      <div class="flex flex-col mt-12">
        <div class="flex justify-around mb-12">
          <button
            v-for="(botao, index) in botoes"
            @click="
              mudaEstadoBotao(botoes, index),
              mudaEstadoBotao(textoBotoes, index)
            "
            :class="botao.classe"
            class="btn"
          >
            {{ botao.nome }}
          </button>
        </div>
        <div
          v-for="(texto, index) in textoBotoes"
          :key="index"
        >
				<transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0"
      	>
				<span class="absolute w-[calc(100vw-100px)]" v-if="texto.estado" :class="texto.classe">{{ texto.texto }}</span>
				</transition>
				</div>
      </div>

      <div class="flex flex-row m-4 justify-around mb-40 mt-96">
        <p class="w-[70%] leading-9">
          Proteção da fauna e flora: O IBAMA trabalha para combater o tráfico de
          animais silvestres, promover a conservação de espécies ameaçadas de
          extinção e proteger a flora brasileira. O órgão emite licenças para
          atividades que envolvem animais e plantas, realiza resgates e
          reintroduções de espécies em perigo, e desenvolve programas de
          conservação.
        </p>
        <img src="" alt="brasil" class="w-44 h-44" />
      </div>
      <div class="flex flex-row m-4 justify-around">
        <img src="" alt="brasil" class="w-44 h-44" />
        <p class="w-[70%]">
          Criação e gestão de unidades de conservação: O IBAMA tem participado
          ativamente na criação e gestão de unidades de conservação no Brasil,
          como parques nacionais, reservas biológicas e áreas de proteção
          ambiental. Essas áreas protegidas desempenham um papel fundamental na
          preservação de ecossistemas, na conservação da biodiversidade e no
          desenvolvimento de pesquisas científicas.
        </p>
      </div>
      <div class="flex flex-row m-4 justify-around mb-40">
        <p class="w-[70%] leading-9">
          Fiscalização e aplicação de sanções: O IBAMA possui uma importante
          atuação na fiscalização e aplicação de sanções administrativas para
          infrações e crimes ambientais. Os agentes do IBAMA realizam operações
          de campo, autuam os responsáveis por irregularidades e aplicam multas
          e outras penalidades previstas em lei.
        </p>
        <img src="" alt="brasil" class="w-44 h-44" />
      </div>
      <div class="flex flex-row m-4 justify-around">
        <img src="" alt="brasil" class="w-44 h-44" />
        <p class="w-[70%]">
          Educação ambiental: O IBAMA promove a educação e conscientização
          ambiental por meio de campanhas, programas e projetos que visam
          sensibilizar a população sobre a importância da conservação do meio
          ambiente. São desenvolvidas ações educativas em escolas, comunidades e
          meios de comunicação, buscando incentivar práticas sustentáveis e a
          participação da sociedade na proteção ambiental.
        </p>
      </div>
      <div class="flex items-center m-4">
        <p class="w-[70%]">
          É importante destacar que o IBAMA atua em parceria com outros órgãos
          governamentais, como as polícias federal e militar ambiental, e com
          entidades da sociedade civil para fortalecer a proteção ambiental no
          Brasil.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
