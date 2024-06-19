alert("Boas vindas ao jogo do numero secreto");
let  numeroSecreto = 1;
console.log(numeroSecreto);
let chute = prompt ('Escolha um numero entre 1 e 10');


while(numeroSecreto != chute){
    alert('Voce errou');
    chute = prompt ('Escolha um numero entre 1 e 10');
}
alert(`Isso aí, voce acertou o numero secreto ${numeroSecreto}`);

//if (numeroSecreto == chute) {
    //alert(`Isso aí, voce acertou o numero secreto ${numeroSecreto}`);

//}else {
  //  alert('Voce errou');
//}