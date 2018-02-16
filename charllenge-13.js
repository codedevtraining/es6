// método toString() - converte o obj em String.
// método concat(10) - gera um novo array com o valor passado como parâmetro 
// método pop() - remove o último item da lista
// método unshift(1) - adiciona o elemento passado pelo args, na primeira posição
// método shift() - ele remove o primerio elemento do array
// método slice(1, 4) - retorna todos os elementos á partir do elemento passado.
// método splice() - add/remove/modifica itens do array
// método forEach() - faz o papel o do for de uma forma mais rápida e elegante.
/*

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  arr.forEach(function(item, index, arr) {
    console.log(item, index, arr)
  })

  arr.forEach((item, index) => {
    console.log(index)
  }) 

*/

// método every() - retorna um booleano, que diz se todas os elementos do array correspondem ao parâmetro passado. 
/*
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  let every =  arr.every(function(item) {
    return item < 10;
  })

  console.log( every )
*/

// método some() - retorna um booleano, que diz se algum dos elementos do array corresponde ao parâmetro passado. 
/*
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  let some =  arr.some(function(item) {
    return item === 10;
  })

  console.log( some )
*/

// método map() - o map retorna um novo array que pode ser manipulado de forma bem simples

/*
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  map = arr.map(function(item, index, array) {
    return item
  })

  console.log(arr, map)
*/

// método filter() - é a mesma coisa que o map, ele retorna um novo array, mas eu consigo filtrar.

/*
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  let filter = arr.filter(function(item, index, array) {
    return item > 2;
  })

  console.log( filter );
*/

//_______________________________________________________________________________________//

/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
console.log( 'O array em formato de string é:' );

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr.toString())

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/

let sul = [
  'Paraná',
  'Santa Catarina',
  'Rio Grande do Sul'
]

let sudeste = [
  'São Paulo',
  'Minas Gerais',
  'Rio de Janeiro',
  'Espirito Santo'
]

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/

console.log( '\nAlguns Estados do Brasil:' );

let brasil = []
brasil = sudeste.concat(sul)
brasil.map(estado => console.log(estado))

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/

console.log( '\nMais estados adicionados:' );
brasil.unshift('Amazonas', 'Pará', 'Rondônia')
brasil.map(estado => console.log(estado))

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/

console.log( '\nEstado removido:' );
console.log(brasil.shift())

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/

const belongsToSul = (value) => sul.some(args => args === value);

let newSul = brasil.filter(value => belongsToSul(value) === true)

/*
Mostre no console os estados que estão em `newSul`.
*/

console.log( '\nEstados do Sul do Brasil:' );
newSul.map(estado => console.log(estado))


/*
Mostre no console todos os estados que estão em `brasil`.
*/

console.log( '\nAlguns Estados do Brasil:' );
brasil.map(estado => console.log(estado))

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/

let nordeste = []
nordeste.push('Bahia')
nordeste.push('Ceará')
nordeste.push('Alagoas')
nordeste.push('Paraíba')


/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' );
nordeste.map(estado => console.log(estado))

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/

let newSudeste = []

brasil = sudeste.map(estado => {
  newSudeste.push(estado)
  return estado;
});

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/

brasil.concat(nordeste)

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:' );
newSudeste.map(estado => console.log(estado))

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );
brasil.map(estado => console.log(estado))

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/

newBrasil = []

brasil.forEach((elemento, index) => 
  newBrasil.push({
    id: index,
    estado: elemento
  })
)

/*
Mostre o array `newBrasil` no console
*/

console.log( '\nnewBrasil:' );
newBrasil.map(elemento => console.log(elemento))

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/

// console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );

const result = brasil.some(estado => estado.length > 7)  
? 'Sim, todos os estados tem mais de 7 letras!'  
: 'Não, Nem Todos os estados tem mais de 7 letras!'
console.log(result)

/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/

console.log( '\nCeará está incluído em `brasil`?' );
const result1 = brasil.some(estado => estado === 'Ceará')
? 'Ceará está incluído!'
: 'Ceará não foi incluído :('

console.log(result1)

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/

let map = newBrasil.map(elemento => ({
  id: elemento.id + 1,
  estado: `{${elemento.estado} pertence ao Brasil.`,
})) 

/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );
console.log(map.map(estado => estado))

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/

filter = map.filter(estado => estado.id % 2 === 0)

/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
filter.map(estado => console.log(estado))