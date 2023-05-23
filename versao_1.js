/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de BlackJack!");
const decision = confirm("Quer iniciar uma nova rodada?")
let carta1
let carta2
let carta1Computador
let carta2Computador


if (decision) {
   carta1 = comprarCarta()
   carta2 = comprarCarta()
   carta1Computador = comprarCarta()
   carta2Computador = comprarCarta()
   const pontuação = carta1.valor + carta2.valor
   const pontuaçãoComputador = carta1Computador.valor + carta2Computador.valor

   console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${pontuação} ${"\n"}Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${pontuaçãoComputador}
   `);
   if (pontuação === pontuaçãoComputador) {
      console.log("Empate");
   } else if (pontuação > pontuaçãoComputador) {
      console.log("O usuário ganhou!");
   } else if (pontuação < pontuaçãoComputador) {
      console.log("O computador ganhou!");
   }

} else {
   console.log("O jogo acabou");
}

