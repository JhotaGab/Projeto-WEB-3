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

//Metodo toFixed

const precoProduto = 199.99;
const desconto = 0.15;
const precoFinal = precoProduto * (1 - desconto);
console.log(precoFinal);
console.log(`R$ ${precoFinal.toFixed(2)}`); // Crase é utilizada para concatenar seguida do ${}

//DOM (Document Object Model) Modelo de Documento
//Permite o JavaScript conversar com o navegador para manipular HTML e CSS

//Mudou o texto utilizando o ID
const titulo = document.getElementById("titulo");
titulo.innerText = "Dom transformando o texto"

//Mudou cor do texto sem CSS
titulo.style.color="blue";

//Criação de lista para mostrar no navegador
const produtos = [
    {nome:"Teclado Gamer", preco:199,emPromocao:true},
    {nome:"Mouse", preco:165,emPromocao:false},
    {nome:"Mouse Pad", preco:49,emPromocao:true},
    {nome:"Monitor", preco:599,emPromocao:false},
];
console.log(produtos)

//vinculou com o ID
const container=document.getElementById("lista-produtos")
const mostrarTotal=document.getElementById("resultado-total")
//Criando os Cards e replicando automaticamente

// => arrow phant / uma função executando outra dentro (CALLBACK)
//MAP verifica os dados / percorre a lista e seleciona o que pode e não 
// shift + ` + espaço

function produtosCard(lista){
    mostrarTotal.innerHTML=""; // Mostra tudo imagem,card,video,td conteudo
    const htmlProdutos = lista.map(item => `
        <div class="card">
            <h3>${item.nome}</h3>
            <p>Preço R$ ${item.preco}</p>
            ${item.emPromocao ? '<span>Promoção</span>': ''}
        </div>
        `).join(''); //transforma o ARRAY em uma unica STRING

        container.innerHTML=htmlProdutos;
}

//FILTER - CRIA UMA NOVA LISTA APENAS COM O QUE PESQUISAR

function filtrarPromocoes(){
    const promocionais = produtos.filter(item => item.emPromocao);
    produtosCard(promocionais);
}

//REDUCE - Reduz o array em um unico valor(soma de preços)

function calcularTotal(){
    const total = produtos.reduce((acumulador,item)=>{
        return acumulador + item.preco;
    },0);
    mostrarTotal.innerText =`Valor Total R$ ${total}`;
}