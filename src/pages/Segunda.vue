<script setup>
import { ref, onMounted, computed, watch } from "vue";
import Grafico from "../components/Grafico.vue";
import dadosIbama from "../assets/Ibama.json";

const dados = dadosIbama;
const tiposReceita = ref([]);
const receitaSelecionada = ref("Selecione o tipo de receita");

//refs para pegar elemantos do template e mudar o css
const refCorpoText = ref(null);
const refDivCorpoText = ref(null);

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
    estado: false,
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

//array de texto do corpo
const textoBotoes = ref([
  {
    texto: "O IBAMA tem um desempenho importante na proteção animal no Brasil. Algumas das ações realizadas pelo IBAMA na proteção animal incluem, combate ao tráfico de animais, fiscalização de atividades que evolvem animais, monitoramento de espécies ameaçadas, resgate e reabilitação de animais e educação e conscientização.",
    estado: true,
    classe: "bg-yellow-500 rounded-md",
  },
  {
    texto: "O IBAMA tem um desempenho importante na proteção da flora no Brasil. Algumas das ações realizadas pelo IBAMA na proteção da flora incluem, licenciamento e controle de atividades florestais, fiscalização e combate ao desmatamento ilegal, monitoramento de áreas protegidas e proteção de espécies ameaçadas.",
    estado: false,
    classe: "bg-pink-500 rounded-md",
  },
  {
    texto: "O IBAMA, como um orgão governamental, tem uma atuação política que se baseia na execução das políticas públicas relacionadas ai meio ambiente e na implementação de leis ambientais. Sua atuação política abrange, formulação de políticas ambientais, implementação de legislação ambiental, representação em fóruns e negociações internacionais, articulação com outros orgões e entidades e promoção da participação social.",
    estado: false,
    classe: "bg-lime-500 rounded-md",
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

//gambiarra para o testo ter o height to tamanho do texto mesmo sendo absolute
watch(botoes.value, () => {
  if(refCorpoText.value != null){
    refCorpoText.value.forEach((item, index) => {
      if (botoes.value[index].estado) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
      refDivCorpoText.value[index].style.height = refCorpoText.value[index].clientHeight + 'px';
    })  
  }
})

onMounted(() => {
  separaReceita();
  //gambiarra para o dar update no texto
  mudaEstado(botoes.value, 0);
});
</script>

<template>
  <div class="relative bg-gray-950 min-h-screen">
    <RouterLink
      to="/"
      class="sticky top-4 mt-4 ml-4 btn text-center items-center font-bold rounded-full bg-gray-100 text-black normal-case text-xl hover:bg-white z-50"
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
      <div class="flex m-4 justify-around">
        <div class="flex">
          <span class="text-green-500 font-bold text-5xl text-center"
            >1.87<br />BILHÃO</span
          >
          <span class="text-green-500 font-bold text-8xl ml-2">R$</span>
        </div>
        <p class="w-[70%] text-2xl leading-10">
          É o orçamento previsto para o ano de 2023, mas para onde vai todo este
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
          Entenda sobre as atuações do IBAMA. 
          <strong class="text-yellow-300">negrito</strong>
        </p>
      </div>

      <div class="flex flex-col mt-12 mb-36">
        <div class="flex justify-around mb-12">
          <button
            v-for="(botao, index) in botoes"
            @click="
              mudaEstado(botoes, index),
              mudaEstado(textoBotoes, index)
            "
            :class="botao.classe"
            class="btn"
          >
            {{ botao.nome }}
          </button>
        </div>
        <div ref="refDivCorpoText" v-for="(texto, index) in textoBotoes" :key="index" class="flex">
          <transition
        enter-active-class="duration-100 ease-out"
        enter-from-class="transform opacity-0 translate-x-full"
        enter-to-class="opacity-50 translate-x-0"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="transform opacity-0 translate-x-full"
          >
            <span
            ref="refCorpoText"
              class="absolute w-[calc(100vw-100px)]"
              v-show="texto.estado"
              :key="index"
              :class="texto.classe"
              >{{ texto.texto }}</span
            >
          </transition>
        </div>
      </div>

      <div class="flex flex-row m-4 justify-around">
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
      <div class="flex justify-items-center m-4">
          É importante destacar que o IBAMA atua em parceria com outros órgãos
          governamentais, como as polícias federal e militar ambiental, e com
          entidades da sociedade civil para fortalecer a proteção ambiental no
          Brasil.
      </div>
    </div>
  </div>
</template>

<style scoped></style>
