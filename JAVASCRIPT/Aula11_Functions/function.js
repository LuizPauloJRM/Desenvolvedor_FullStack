/**
 * Funções - Bloco de código reutilizável
 * Declaração de funções
 * Parâmetros e argumentos
 *  Retorno de valores  
 *  Escopo de variáveis
 * Funções anônimas e arrow functions
 * Funções como objetos de primeira classe  
 * Callbacks e funções de ordem superior
 * Recursão
 * Boas práticas na criação e uso de funções
 * Exemplos práticos de funções
 *      Uso de funções nativas do JavaScript
 *    Criação de funções personalizadas
 *  
 * Exercícios para fixação
 * Desafios avançados com funções
 * Aplicações reais de funções em projetos
 * Integração de funções com outros conceitos do JavaScript
 * Otimização e performance de funções  
 */
// Declaração de uma função simples
function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo ao curso de JavaScript.`;
}
// Chamando a função e exibindo o resultado
console.log(saudacao("João"));
console.log(saudacao("Maria"));
// Função com múltiplos parâmetros
function soma(a, b) {
    return a + b;
}
console.log("Soma de 5 e 3:", soma(5, 3));
console.log("Soma de 10 e 20:", soma(10, 20));
// Função anônima atribuída a uma variável  
const multiplicacao = function (a, b) {
    return a * b;
}
console.log("Multiplicação de 4 e 2:", multiplicacao(4, 2));
// Arrow function
const divisao = (a, b) => a / b;
console.log("Divisão de 10 por 2:", divisao(10, 2));
console.log("Divisão de 20 por 4:", divisao(20, 4));
// Função recursiva para calcular o fatorial de um número
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}
console.log("Fatorial de 5:", fatorial(5)); // 120
console.log("Fatorial de 6:", fatorial(6)); // 720                  
// Função de ordem superior que recebe outra função como argumento
function aplicarOperacao(a, b, operacao) {
    return operacao(a, b);
}
console.log("Aplicar soma:", aplicarOperacao(7, 3, soma)); // 10
console.log("Aplicar multiplicação:", aplicarOperacao(7, 3, multiplicacao)); // 21      
console.log("Aplicar divisão:", aplicarOperacao(20, 4, divisao)); // 5      
// Função com escopo de variável    
function escopoExemplo() {
    let variavelLocal = "Eu sou local";
    console.log(variavelLocal); // Acessível aqui   
}
escopoExemplo();
// console.log(variavelLocal); // Erro: variavelLocal is not defined    
// Boas práticas: nomeação clara e comentários
function calcularAreaRetangulo(largura, altura) {
    return largura * altura; // Retorna a área do retângulo         
}
console.log("Área do retângulo 5x10:", calcularAreaRetangulo(5, 10)); // 50             
console.log("Área do retângulo 7x3:", calcularAreaRetangulo(7, 3)); // 21                                       
// Uso de função nativa do JavaScript: Math.max 
console.log("Maior número entre 10, 5 e 8:", Math.max(10, 5, 8)); // 10 
console.log("Maior número entre -1, -5 e -3:", Math.max(-1, -5, -3)); // -1
// Exercício: Função para verificar se um número é par ou ímpar
function ehPar(numero) {
    return numero % 2 === 0;
}
console.log("O número 4 é par?", ehPar(4)); // true                 
console.log("O número 7 é par?", ehPar(7)); // false    

// Desafio: Função para encontrar o maior número em um array
function encontrarMaiorNumero(array) {
    return Math.max(...array);
}
console.log("Maior número no array [3, 5, 1, 8, 2]:", encontrarMaiorNumero([3, 5, 1, 8, 2])); // 8  
console.log("Maior número no array [-10, -5, -1, -8]:", encontrarMaiorNumero([-10, -5, -1, -8])); // -1 
// Integração com outros conceitos: Função que manipula arrays  
function dobrarElementos(array) {
    return array.map(elemento => elemento * 2);
}


console.log("Array original: [1, 2, 3]");
console.log("Array com elementos dobrados:", dobrarElementos([1, 2, 3])); // [2, 4, 6]                          


// Otimização: Função para calcular a soma de um array usando reduce
function somaArray(array) {
    return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}
console.log("Soma do array [1, 2, 3, 4, 5]:", somaArray([1, 2, 3, 4, 5])); // 15
console.log("Soma do array [10, 20, 30]:", somaArray([10, 20, 30])); // 60          