// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

console.log("Boas vindas ao jogo de BlackJack!");
let decision = confirm("Quer iniciar uma nova rodada?")


let arrayCartasJogador = []
let arrayCartasComputador = []


let pontuacaoJogador = 0
let cartasJogador = ""
let pontuacaoComputador = 0
let cartasComputador = ""

let controle = true
if (decision) {
   while (controle) {
      arrayCartasJogador.push(comprarCarta())
      arrayCartasJogador.push(comprarCarta())
      arrayCartasComputador.push(comprarCarta())
      arrayCartasComputador.push(comprarCarta())
      for (let index = 0; index < arrayCartasJogador.length; index++) {
         pontuacaoJogador += arrayCartasJogador[index].valor
         cartasJogador += arrayCartasJogador[index].texto
      }
      for (let index = 0; index < arrayCartasComputador.length; index++) {
         pontuacaoComputador += arrayCartasComputador[index].valor
         cartasComputador += arrayCartasComputador[index].texto
      }
      if (pontuacaoJogador === 22 || pontuacaoComputador === 22) {
         arrayCartasComputador = []
         arrayCartasJogador = []
      } else {
         controle = false
      }
   }

   let escolha = confirm(`Suas cartas são ${cartasJogador}. A carta revelada do computador é ${arrayCartasComputador[0].texto}.
   \n
   Deseja comprar mais uma carta?`)

   while (escolha) {
      let cartasJogadorCompradas = ""
      let pontuacaoJogadorComprada = 0
      arrayCartasJogador.push(comprarCarta())
      for (let carta of arrayCartasJogador) {
         console.log(carta.valor);
         pontuacaoJogadorComprada += carta.valor
         cartasJogadorCompradas += carta.texto
      }
      if (pontuacaoJogadorComprada > 21) {
         escolha = false
      } else {
         escolha = confirm(`Suas cartas são ${cartasJogadorCompradas}. A carta revelada do computador é ${arrayCartasComputador[0].texto}.
      \n
      Deseja comprar mais uma carta?`)
         console.log(pontuacaoJogadorComprada);
      }
   }
   let pontosJogador = 0
   for (const cartas of arrayCartasJogador) {
      pontosJogador += cartas.valor
   }

   let controle2 = true
   if (pontosJogador <= 21) {
      while (controle2) {
         let cartasCOmputadorComprada = ""
         let pontuacaoCOmputadorCOmprada = 0
         arrayCartasComputador.push(comprarCarta())
         for (const cartasCOmputador of arrayCartasComputador) {
            pontuacaoCOmputadorCOmprada += cartasCOmputador.valor
            cartasCOmputadorComprada += cartasCOmputador.texto
         }
         if (pontuacaoCOmputadorCOmprada > pontosJogador) {
            controle2 = false
         }
      }
   }

   console.log("não quer mais carta");
   //RESULTADO
   let resultadoJogador = 0
   let resultadoCartasJogador = ""
   let resultadoComputador = 0
   let resultadoCartasComputador = ""

   for (const carta of arrayCartasJogador) {
      resultadoJogador += carta.valor
      resultadoCartasJogador += carta.texto
   }
   for (const carta of arrayCartasComputador) {
      resultadoComputador += carta.valor
      resultadoCartasComputador += carta.texto
   }
   console.log(resultadoJogador);
   console.log(resultadoCartasJogador);
   console.log(resultadoComputador);
   console.log(resultadoCartasComputador);
   if (resultadoJogador === resultadoComputador) {
      alert(`
      Suas cartas são ${resultadoCartasJogador}. Sua pontuação é ${resultadoJogador}.
      As cartas do computador são ${resultadoCartasComputador}. 
      A pontuação do computador é ${resultadoComputador}. 
      EMPATOU!😎`)
   } else if (resultadoJogador <= 21 && (resultadoJogador > resultadoComputador || resultadoComputador > 21)) {
      alert(`
      Suas cartas são ${resultadoCartasJogador}. Sua pontuação é ${resultadoJogador}.
      As cartas do computador são ${resultadoCartasComputador}.
      A pontuação do computador é ${resultadoComputador}. 
      O JOGADOR GANHOU🎉`)
   } else if (resultadoJogador < resultadoComputador || resultadoJogador > 21) {
      alert(`
      Suas cartas são ${resultadoCartasJogador}. Sua pontuação é ${resultadoJogador}.
      As cartas do computador são ${resultadoCartasComputador}. 
      A pontuação do computador é ${resultadoComputador}. 
      O COMPUTADOR GANHOU🤖`)
   }

} else {
   console.log("o jogo acabou");
   alert("O jogo acabou")
}































//===============================================================================================


// let jogador = []
// let computador = []

// if(confirm("Bem-vinde ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")){

//    // Sortear 2 cartas iniciais
//    let cartasOk = false
//    while (!cartasOk){
//       jogador.push(comprarCarta())
//       jogador.push(comprarCarta())
//       computador.push(comprarCarta())
//       computador.push(comprarCarta())
//       if ((jogador[0].valor === 11 && jogador[1].valor === 11) ||
//          (computador[0].valor === 11 && computador[1].valor === 11)) {
//             jogador = []
//             computador = []
//       } else {
//          cartasOk = true
//       }
//    }

//    // Mostrar cartas do usuário e primeira do computador
//    // Perguntar se o usuário deseja comprar mais até que ele diga que não
//    let comprando = true

//    while(comprando){
//       let textos = ""
//       let pontos = 0
//       for (let carta of jogador){
//          textos += carta.texto + " "
//          pontos += carta.valor
//       }

//       if (pontos > 21){
//          comprando = false
//       } else {
//          let confirmCompra = confirm(
//             `Suas cartas são ${textos}. A carta revelada do computador é ${computador[0].texto}.` +
//             "\n"+ 
//             "Deseja comprar mais uma carta?"
//          )
      
//          if (confirmCompra){
//             jogador.push(comprarCarta())
//          } else {
//             comprando = false
//          }
//       }
//    }
   
//    // Cálculo dos pontos do usuário e do computador
//    let pontosComputador = 0
//    let pontosJogador = 0
//    let textosComputador = ""
//    let textosJogador = ""

//    for (let carta of computador){
//       pontosComputador += carta.valor
//       textosComputador += carta.texto + " "
//    }
//    for (let carta of jogador){
//       pontosJogador += carta.valor
//       textosJogador += carta.texto + " "
//    }

//    // Compra de cartas do computador
//    if (pontosJogador <= 21){
//       while (pontosComputador < pontosJogador && pontosComputador <= 21){
//          computador.push(comprarCarta())
//          pontosComputador = 0
//          textosComputador = ""
//          for (let carta of computador){
//             pontosComputador += carta.valor
//             textosComputador += carta.texto + " "
//          }
//       }
//    }
  
//    let resultado = ""
//    // Verificação de quem ganhou
//    if (pontosJogador > pontosComputador && pontosJogador <= 21){
//       resultado = "O usuário ganhou!"
//    } else if (pontosComputador > pontosJogador && pontosComputador <= 21){
//       resultado = "O computador ganhou!"
//    } else if (pontosComputador > 21 && pontosJogador <= 21){
//       resultado = "O usuário ganhou!"
//    } else if (pontosJogador > 21 && pontosComputador <= 21){
//       resultado = "O computador ganhou!"
//    } else {
//       resultado = "Empate!"
//    }

//    // Imprimir cartas dos dois lados
//    alert(
//       `Usuario - Cartas: ${textosJogador} - Pontuação: ${pontosJogador}` + 
//       "\n" + 
//       `Computador - Cartas: ${textosComputador} - Pontuação: ${pontosComputador}` + 
//       "\n" + 
//       resultado
//    )
   
// } else {
//    alert("O jogo acabou.")
// }