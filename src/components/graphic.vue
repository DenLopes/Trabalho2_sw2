<script setup>
import axios from 'axios'

axios.get('https://dadosabertos.ibama.gov.br/dados/SICAFI/AC/Arrecadacao/arrecadacaoTCFA.json')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error)
    })
</script>