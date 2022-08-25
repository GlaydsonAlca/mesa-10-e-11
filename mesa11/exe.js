const jogador1 = [30, 20, 10];
const jogador2 = [30, 20, 10];

const soma = (array) => {
  let soma = 0
  for (let i = 0; i < array.length; i ++) {
    soma += array[i]
  }
  return soma
}

const ganhador = (pontosjogador1, pontosjogador2) => {
  let resultadojogador1 = [];
  let resultadojogador2 = [];

  if (pontosjogador1.length != pontosjogador2.length) {
    return false;
  } else {
    for (let i = 0; i < pontosjogador1.length; i++)
      if (pontosjogador1[i] > pontosjogador2[i]) {
        resultadojogador1.push(1)
      } else if (pontosjogador1[i] < pontosjogador2[i]) {
        resultadojogador2.push(1)
      }
  }

  const soma1 = soma(resultadojogador1)

  const soma2 = soma(resultadojogador2)

  if (soma1 > soma2) {
    console.log("Jogador 1 ganhou")
  } else if (soma1 < soma2) {
    console.log("Jogador 2 ganhou")
  } else {
    console.log("Empatou")
  }
}

ganhador(jogador1, jogador2)
