let nome1 = prompt("Qual é o seu nome");
let cor1 = prompt("Qual é seu cor favorito");

let nome2 = prompt("Qual é o seu nome");
let cor2 = prompt("Qual é seu cor favorito");

console.log ("Bem-vindos Adoramos tê-lo aqui, abaixo os dados que forneço para nós");
console.log("");
console.log('Dados do usuario');
console.table(
    {
        'Nome1': nome1, 
        'Cor1' : cor1,
        'Nome2': nome2, 
        'Cor2' : cor2,
    }
)

if (cor1==cor2)  {
    console.log (`A cor preferida de ${nome1}, e a mesma de ${nome2}`);
}


