/*
OBJETIVOS: 
Quando clicar na seta de avancar temos que mostrar o proximo cartao
     -passo 1 - dae um jeito de pegar o elemento HTML da seta avancar
     -passo 2 - dar um jeitode identificar o clique do usuario na seta de avancar 
     -passo 3 - fazer aparecer o proximo cartao da lista 
     -passo 4 - buscar o aartao que esta selecionado em esconder



*/
//passo 1 -dar um jeito de pegar o elemento html de set avancar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;
// passo 2 - dar um jeito de identificar o clique do usuario na seta av 

btnAvancar.addEventListener("click", function (){
     //-passo 3 - fazer aparecer o proximo cartão da lista 
     if( cartaoAtual === cartoes.length - 1) return;
     

     cartaoAtual++;
     cartoes[cartaoAtual].classList.add("selecionado");

     // -passo 4 - buscar o aartao que esta selecionado em esconder
     const cartaoSelecionado = document.querySelector(".selecionado");
     cartaoSelecionado.classList.remove("selecionado");

});

btnVoltar.addEventListener("click", function (){

     if( cartaoAtual === 0 ) return;
     
     
     const cartaoSelecionado = document.querySelector(".selecionado");
     cartaoSelecionado.classList.remove("selecionado");
          
     
     cartaoAtual--;
     cartoes[cartaoAtual].classList.add("selecionado");
     
     // -passo 4 - buscar o aartao que esta selecionado em esconder
     
});