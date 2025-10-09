/**
 * Controlador de fluxo
 * If- Se a condição for verdadeira, executa o bloco de código
 * Else- Se a condição for falsa, executa o bloco de código alternativo
 * Exemplo de uso do If e Else  
 */
let idade = 18; // idade do usuário

if (idade >= 18) {  // condição para verificar se o usuário é maior de idade    
    console.log("Você é maior de idade."); // executa se a condição for verdadeira
} else {
    console.log("Você é menor de idade."); // executa se a condição for falsa
}
// Exemplo com outra condição
let temperatura = 30; // temperatura em graus Celsius       
if (temperatura > 25) { // condição para verificar se está quente       
    console.log("Está quente!"); // executa se a condição for verdadeira    
} else {
    console.log("Está frio!"); // executa se a condição for falsa       
}

// Exemplo com outra condição   
let hora = 10; // hora do dia em formato 24 horas                   
if (hora < 12) { // condição para verificar se é manhã

    console.log("Bom dia!"); // executa se a condição for verdadeira            
} else {
    console.log("Boa tarde!"); // executa se a condição for falsa       
}
// Exemplo com outra condição       
let saldo = 100; // saldo da conta bancária     
let valorSaque = 50; // valor a ser sacado
if (valorSaque <= saldo) { // condição para verificar se há saldo suficiente        
    console.log("Saque realizado com sucesso!"); // executa se a condição for verdadeira                                    
    saldo -= valorSaque; // atualiza o saldo após o saque
    console.log("Saldo restante:", saldo); // exibe o saldo restante
} else {
    console.log("Saldo insuficiente para o saque!"); // executa se a condição for falsa       
}       