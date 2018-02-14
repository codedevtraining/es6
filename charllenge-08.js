/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/

const sum = function calculateSum(a, b) {
  return a + b
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/

console.log(`A soma entre ${a = 1} e ${b = 2} é igual a ${sum(a, b)}.`)

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/

console.log(sum.name)

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/

function showName(){
  return 'Felipe Francischetto'
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/

const varShowName = showName()

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/

console.log(`A função ${varShowName.name} retorna ${varShowName}.`)

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/

const calculator = (operacao) => (n1,n2) => {
  switch(operacao){
    case '+':
      console.log(`Resultado da operação: ${n1} ${operacao} ${n2} = ${n1+n2}.`)
      break;
    case '-':
      console.log(`Resultado da operação: ${n1} ${operacao} ${n2} = ${n1-n2}.`)
      break;
    case '*':
      console.log(`Resultado da operação: ${n1} ${operacao} ${n2} = ${n1*n2}.`)
      break;
    case '/':
      console.log(`Resultado da operação: ${n1} ${operacao} ${n2} = ${n1/n2}.`)
      break;
    case '%':
      console.log(`Resultado da operação: ${n1} ${operacao} ${n2} = ${n1%n2}.`)
      break;
    default:
      console.log('Insira as operações corretamente.')
      break;        
  }
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/

const soma = calculator('+')

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/

console.log(soma(1, 3))

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/

const subtraction = calculator('-')
const multiplication = calculator('*')
const division = calculator('/')
const mod = calculator('%')

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/

console.log(subtraction(10, 1))
console.log(multiplication(10, 10))
console.log(division(10, 10))
console.log(mod(10, 10))
