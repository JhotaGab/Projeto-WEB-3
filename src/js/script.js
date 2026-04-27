// Método de limpeza e validação

const email ="    fiap@email.com    ";
const emailLimpo = email.trim();   //Remove espaços (Inicio e Fim)
console.log(emailLimpo);

//Validar: verifica se o dominio é válido

if(emailLimpo.includes("@")){
    console.log("Email Válido")
}else{
    console.log("Email inválido")
}

//Métodos de transformação de texto (split, toLowCase, Join)

const tituloArtigo = "Aprendendo JavaScript RAIZ"

// Deixa o texto em maiusculo ou minusculo
const texto1 = tituloArtigo.toLowerCase();
console.log(texto1);

const texto2 = tituloArtigo.toUpperCase();
console.log(texto2);

// Transforma o texto em uma Array
const texto3 = tituloArtigo.split(" ");
console.log(texto3);

//Une o texto sendo ele ARRAY em uma unica string
const texto4 = texto3.join("---");
console.log(texto4);

