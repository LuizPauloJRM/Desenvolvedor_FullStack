/**
 * Objeto - coleção de propriedades e valores
 * Pode conter diferentes tipos de dados, incluindo outros objetos
 * Exemplo de objeto com propriedades e valores
 * Acessando propriedades do objeto
 * Modificando propriedades do objeto
 * Adicionando novas propriedades ao objeto
 * Removendo propriedades do objeto
 * Iterando sobre as propriedades do objeto
 */
const pessoa = {
    nome: "João", // propriedade nome com valor "João"
    idade: 30, // propriedade idade com valor 30
    profissao: "Desenvolvedor", // propriedade profissao com valor "Desenvolvedor"          
}
console.log("Nome:", pessoa.nome); // acessando propriedade nome
console.log("Idade:", pessoa.idade); // acessando propriedade idade
console.log("Profissão:", pessoa.profissao); // acessando propriedade profissao     
// Modificando propriedade idade
pessoa.idade = 31;
console.log("Idade após modificação:", pessoa.idade); // 31
// Adicionando nova propriedade
pessoa.cidade = "São Paulo";
console.log("Cidade adicionada:", pessoa.cidade); // São Paulo
// Removendo propriedade profissao
delete pessoa.profissao;
console.log("Profissão após remoção:", pessoa.profissao); // undefined
// Iterando sobre as propriedades do objeto
console.log("Propriedades do objeto pessoa:");
for (let chave in pessoa) {
    console.log(chave + ":", pessoa[chave]);
}
// Exemplo de objeto com propriedades que são outros objetos
const empresa = {
    nome: "Tech Solutions",
    endereco: {
        rua: "Av. Paulista",
        numero: 1000,
        cidade: "São Paulo",
        estado: "SP"
    },
    funcionarios: 200
};  