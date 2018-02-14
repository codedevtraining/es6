// Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

/*
Crie uma variável chamada `once`, que recebe `false` como seu valor.
Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
loop, mostre no console a mensagem:
'Entrou ao menos uma vez!'
Qual loop você deve usar para que essa mensagem seja mostrada no console?
*/
// do while
let once = false;

do {
  once = true
  console.log(`Entrou ano menos uma vez!`)
} while( once === false)




/*
Crie um objeto chamado `person`, que receba as seguintes propriedades:
- 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
para o nome, idade, peso e data de nascimento dessa pessoa.
*/

person = {
  name: 'Felipe Francischetto',
  age: 23,
  weight: 115,
  birthday: '02-08-1994'
}

/*
Use um loop para percorrer o objeto criado acima, mostrando no console
a frase:
'The [PROPERTY] of person is [VALUE]'
Aproveite e crie uma variável `counter` que vai contar quantas propriedades
esse objeto tem.
Após o loop, mostre a frase:
'The person has [COUNTER] properties'
*/

let counter = 0;

for( let props in person ){
  console.log(`The ${props} of person is ${person[props]}`);
  counter ++;
}


console.log(`The person has ${counter} properties.`)
/*
Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
criado acima) é mais velha que a idade passada por parâmetro.
Se verdadeiro, retornar `true`. Senão, retornar false.props
Após a função, mostrar a mensagem no console:
'The person has more than 25 years old? [TRUE/FALSE]'
*/

const moreThan = (age) => person.age > age
console.log(`The person  has more than 23 years old? ${moreThan(24)}.`)

/*
Faça um loop de 0 a 20, que adicione cada número como um item de um
array chamado `numbers`. Se o contador for maior que 10, saia do loop.
Mostre no console os números no array.
*/
console.log( 'De 0 a 10:' );

let i = 0;
let numbers = [];

do {
  numbers.push(i)
  if(i >= 10) {break}
  i++;
} while( i <= 20 )

console.log(numbers)

/*
Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
esses. Se o número for ímpar, pular para o próximo número.
Mostrar no console os números do array.
*/
console.log( 'Pares de 0 a 20:' );

i = -1
numbers = []

do {
  i++
  if(i % 2 === 0) {
    numbers.push(i)
    continue;
  }
} while(i <= 20)

console.log( numbers )
