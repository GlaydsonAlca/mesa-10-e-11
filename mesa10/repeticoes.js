let  nomes  =  [ 'Renata' ,  'Marina' ,  'Fernanda' ,  'Aline' ] ;
console.log ( nomes . comprimento ) ;
nomes [ 0 ]  =  '0 - '  +  nomes [ 0 ] ;
nomes [ 1 ]  =  '1 - '  +  nomes [ 1 ] ;
nomes [ 2 ]  =  '2 - '  +  nomes [ 2 ] ;
nomes [ 3 ]  =  '3 - '  +  nomes [ 3 ] ;
console.log ( nomes ) ;
console.log ( nomes [ 2 ] ) ;

//Modificando os elementos do array
console.log ( nomes [ 0 ]  +  " está amando estudar programação " ) ;
consola.log ( nomes [ 1 ]  +  " tem 20 anos " ) ;
consola.log ( nomes [ 2 ]  +  " tem um cachorro " ) ;
consola.log ( nomes [ 3 ]  +  " é professora " ) ;

// Acrescentando um nome ao final do array
nomes.push ( 'Júlia' ) ;
console.log ( nomes.push ) ;

//Acrescenta uma informação no começo do array
nomes.unshift ( 'Karen' ) ;
console.log ( nomes ) ;

//Remove uma informação no começo do array
nomes.deslocamento ( ) ;
console.log ( nomes ) ;

//Remove uma informação no final do array
nomes.pop ( ) ;
console.log ( nomes ) ;

let  nomes1  =  [ 'Isabel' ,  'Letícia' ] ;
//compara os elementos de dois arrays
console.log ( nomes  ==  nomes1 )
console.log ( nomes [ 0 ]  !=  nomes1 [ 0 ] ) ;

// O que esses códigos retornam?

// 1) Undefined devido a um erro de sintaxe;

// 2) Homem-Aranha

//3) Uma string qualquer

//---------- Array Invertido-------
//Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
function  imprimirInverso ( )  {
    console.log ( nomes [ 3 ] ) ;
    console.log ( nomes [ 2 ] ) ;
    console.log ( nomes [ 1 ] ) ;
    console.log ( nomes [ 0 ] ) ;
}
return inversor ( )

//Crie a função inverter que recebe um Array como argumento e retorna um novo invertido
function  inversor ( )  {
    console.log ( nomes  =  [ 'Aline' ,  'Fernanda' ,  'Marina' ,  'Renata' ] ) ;
}
inversor ( )

//Neste exercício, você vai uma somarArray() que aceita um array de números e retorna a soma de todos eles.
function  somarArray ( [ a ,  b ,  c ] )  {
    let  numb  =  [ a  +  b  +  c ] ;
    console.log ( numb ) ;
}
somarArray ( [ 4 ,  8 ,  12 ] ) ;

//Neste exercício, você criará uma chamada join que recebe um array e simula o comportamento do método Array.join().
function join ( [ a ,  b ,  c ,  d , ] )  {
    return  j  =  [ ""  +  a  +  b  +  c  +  d  +  "" ] ;
    console.log ( j ) ;
}
join ( [ "H" ,  "O" ,  "P" ,  "E" ] ) ;

//O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
//criar a estrutura para os seguintes filmes e séries:
let  filmes  =  [ 'Star Wars' ,  'Matrix' ,  'O Preço do amanhã' ,  'A vida é bela' ] ;
console.log ( filmes ) ;
console.log ( filmes [ 2 ] ) ;

//Os filmes devem estar todos em letras. Para isso, é necessário que uma função que receba um array por parâmetro e em letras converta o conteúdo de cada elemento.
function  maiuscula ( [ m ] )  {
    console.log ( filmes [ m ] .toUpperCase ( ) ) ;
maiuscula [ 0 ] ;
maiuscula [ 1 ] ;
maiuscula [ 2 ] ;
maiuscula [ 3 ] ;

//Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
let  filmes1  =  ( 'Toy Story' ,  'Procurando Nemo' ,  'Kung-fu Panda' ,  'Wally' ,  'Fortnite') ;
console.log ( filmes ) ;
function  f ( )  {
    var  soma  =  ( filmes  +  filmes1 ) ;
    console.log ( soma ) ;
}
f ( ) ;

//Durante o processo de série de um jogo, que o último elemento na série de filmes é, na verdade. Agora devemos editar o nosso, para que especificou e modificou o elemento antes do último conteúdo para o array que contém todos os filmes.
return  jogo  =  'Fortnite' ;
filmes1.pop ( ) ;
var  filmes_soma1  =  [ filmes  +1  ]
consol.log ( filmes_soma1 ) ;

//Finalmente concebidos, dois arrays com critérios de escolha nos filmes com o seguinte formato
//const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
//const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
//Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.   
const  asiaScores  =  [ 8 ,  10 ,  6 ,  9 ,  10 ,  6 ,  6 ,  8 ,  4 ] ;
const  euroScores  =  [ 8 ,  10 ,  6 ,  8 ,  10 ,  6 ,  7 ,  9 ,  5 ] ;

function  comparaMedia ( )  {
    for  ( let  media1  =  0 ;  media1  <=  asiaScores.length ;  media1 ++ )  {
        if  ( asiaScores [ media1 ]  ===  euroScores [ media1 ] )  {
            console.log ( 'As médias são iguais!' )
        }  else {
            console.log ( "As médias são diferentes!" )
        }
    }
}

} comparaMedia ( );
