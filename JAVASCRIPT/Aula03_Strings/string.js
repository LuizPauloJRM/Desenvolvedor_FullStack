/*
String- Textos
texto com aspas duplas " " para textos curtos
texto com aspas simples ' ' para textos curtos
texto com crase ` ` (Template String)

*/
nomeAluno = "João";
console.log("Nome do Aluno:", nomeAluno);

textoAspasSimples = 'Curso de JavaScript';
console.log("Texto com Aspas Simples:", textoAspasSimples);

textoComCrase = `Curso de JavaScript com Template String`;
console.log("Texto com Crase:", textoComCrase);

// Exemplo de Template String com variável dentro do texto ele pode ser usado para criar textos maiores
console.log(`Bem-vindo ao ${textoComCrase}, ${nomeAluno}!`);    