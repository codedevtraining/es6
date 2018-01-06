// Crie uma função que receba dois argumentos e retorne a soma dos mesmcos.
soma = (num1, num2) => num1 + num2

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
const somar = soma(3, 2)

// Qual o valor atualizado dessa variável
// console.log(somar)

// Declare uma nova variável, sem valor.
let vars
/*
    Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
    Onde VALOR é o novo valor da variável.
*/

altera = (vars) => this.vars = 'VALOR'

// Qual o retorno da função (Use comentários de bloco).
// console.log(altera())

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
multiplica = (n1, n2, n3) => n1 && n2 && n3 == null ? 'Preencha toods os valores corretamente!' : n1 * n2 * n3;

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).
// console.log(multiplica(2, 3))

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
// console.log(multiplica(2, 2, 2))

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado,c retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
const somaDesafio = (n1, n2, n3) => {
    if (n1 && n2 == null && n3 == null) {
        return '1 param = ' + n1
    } else if (n1 && n2 && n3 == null) {
        const soma = n1 + n2
        return '2 params = ' + soma
    } else if (n1 && n2 && n3) {
        return '3 params = ' + (n1 + n2) / n3
    } else if (n1 == null && n2 == null && n3 == null) {
        return false
    } else {
        return null
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(somaDesafio())
console.log(somaDesafio(1))
console.log(somaDesafio(1, 2))
console.log(somaDesafio(3, 3, 3))