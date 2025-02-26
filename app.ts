// ex1 - Exibir "Olá, Mundo!" no console.
const world:string = "Olá Mundo";

console.log(world)

//ex2 - Declarar variáveis (let, const, var) e exibir seus valores.
const numero:number = 5
let numero1:number = 6
var numero2:number = 4

console.log("Os números são:", numero, numero1, numero2)

// ex3 - Criar uma função que soma dois números.
function soma(a:number, b:number) {
    console.log("A soma dos números são:", (a+b) )
};

// ex4 - Criar uma função que verifica se um número é par ou ímpar.
function verificacao(numb:number):string | number{
    if (numb % 2 == 0) {
        return numb+"É par";
    } else if (numb % 2 == 1){
        return numb+"É impar";
    } else{
        return "Algo deu errado!"
    }
};


//ex5 - Criar uma função que retorna o maior entre dois números.
function maior(a1:number, b2:number):string | number{
    if (a1 > b2){
        return `${a1} é maior que ${b2}`;
    }else if (a1 < b2){
        return `${a1} é menor que ${b2}`;
    }else{
        return "Os números são iguais."
    }
};

//ex6 - Criar uma função que recebe um nome e retorna "Olá, [nome]!".
function saudacao(nome:string):string{
    return `Olá, ${nome}`;
};

console.log(saudacao("Z"))

//7 - Criar uma função que calcula o quadrado de um número.
function calcularQuadrado(numb:number):number{
    return(numb*numb)
};

console.log(calcularQuadrado(7))

//8 - Criar uma função que retorna a média de três números.
function calcularmedia(n1:number, n2:number, n3:number):number{
    return((n1+n1+n3)/3)
};

console.log(calcularmedia(5,4,2))

//9 - Criar uma função que converte graus Celsius para Fahrenheit.
function conversaoFahrenheit(n1:number):number{
    return((n1*1.8)+32)
};

console.log("O resultado é:",conversaoFahrenheit(30))

//10 - Criar um loop for que exibe números de 1 a 10.
for (let i = 0; i <= 10; i++){
    console.log(i)
};

//11 - Criar um loop while que exibe números de 1 a 10.
let i = 0
while (i <=10) {
    console.log(i++)
};

//12 - Criar uma função que recebe um array de números e retorna a soma de seus elementos.
let array = [14,13,15]
const sum= array.reduce((accumulator, item) => accumulator +item)
console.log(sum)

//13 - Criar uma função que verifica se um número está dentro de um intervalo específico.
let array1 = [10,12,3,13,18,6] 
const veri= array1.some((item) => item === 15)
console.log(veri)

//14 - Criar um array com 5 nomes e exibi-los um por um no console.
let arr:string[] = ["João", "Roberta" , "Ivan" , "José", "Maria" ]

    arr.forEach(arr => {
        console.log(arr)
    })

//15 - Criar uma função que conta quantas vezes uma letra aparece em uma palavra.

function contarLetra(palavra: string, letra: string) {
    let contador = 0;
    for(let i = 0; i < palavra.length; i++) {
        if(palavra[i] === letra) {
            contador++;
        }
    }
    return contador;
}

console.log(contarLetra("Prisma, Tecnologia, Biologia, Matemática", "a")); 

//16 - Criar uma função que inverte uma string.

//17 - Criar uma função que remove espaços extras de uma string.


//18 - Criar uma função que formata uma string para começar com letra maiúscula.
function formtMaiusc(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(formtMaiusc("joão")); 




//21 - Criar uma função que retorna o maior número de um array.











