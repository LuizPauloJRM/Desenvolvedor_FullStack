/**
 * Array - Vetores
 * Uma lista de elementos
 * Pode conter qualquer tipo de dado
 * Exemplo de array com diferentes tipos de dados
 * Acessando elementos do array
 * Modificando elementos do array
 * Adicionando novos elementos ao array
 * Removendo elementos do array
 * Iterando sobre os elementos do array
 * Métodos comuns de array (push, pop, shift, unshift, indexOf, etc.)
 * Arrays multidimensionais 
 */
const numeros = [1, 2, 3, 4, 5]; // array de números
const frutas = ["maçã", "banana", "laranja"];
const misturado = [1, "texto", true, null, undefined, { nome: "objeto" }, [1, 2, 3]]; // array com diferentes tipos de dados
console.log("Números:", numeros);

console.log("Frutas:", frutas);
console.log("Misturado:", misturado);
console.log("Primeiro número:", numeros[0]); // acessando o primeiro elemento
console.log("Segunda fruta:", frutas[1]); // acessando o segundo elemento
console.log("Elemento misturado:", misturado[5]); // acessando o sexto elemento (objeto)    
// Modificando o terceiro número    
numeros[2] = 10;


console.log("Números após modificação:", numeros); // [1, 2, 10, 4, 5]          
// Adicionando um novo número ao final do array
numeros.push(6);
console.log("Números após adicionar 6:", numeros);
// Removendo o primeiro número do array
numeros.shift();
console.log("Números após remover o primeiro elemento:", numeros); // [2, 10, 4, 5, 6]
// Iterando sobre os elementos do array de frutas
console.log("Frutas no array:");

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
// Exemplo de array multidimensional    
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matriz:", matriz);
console.log("Elemento na posição [1][2]:", matriz[1][2]); // 6              