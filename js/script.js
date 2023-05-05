// /* <button id="meu btn">CLICK</button> */

// const btn = document.getElementById("meu-btn");

// btn.addEventListener("click", function () {
//     //Math.random = função que gera um número aleatório entre 0 e 1
//     //Math.floor = arredonda para baixo
//     //Math.ceil = arredonda para cima
//     //Math.round = arredonda para cima ou baixo (aleatório)
//     let r = 0;
//     let g = 0;
//     let b = 0;
//     //Números aleatórios gerados
//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);

//     //this.setAttribute("style", "background-color: rgb("+r+","+g+","+b+")");
//     this.setAttribute("style", `background-color: rgb(${r},${g},${b});`);
// });


// const h2 = document.querySelectorAll(".tit-sec");
// h2.addEventListener("click", () => {
//     h2.setAttribute("style","font-size:15px");
// });


// /* ARRAYS E SEUS MÉTODOS */

// let frutas = ["Banana", "Maçã", "Uva", "Pêra", "Melancia", "Morango", "Goiaba", "Ameixa"];

// console.log(frutas);

// /* a propriedade length retorna o tamanho do array */
// console.log(`Tamanho do array: ${frutas.length}`);

// /* o método push adiciona um elemento no final do array */
// frutas.push("Laranja");
// console.table(frutas);

// /* o método unshift adiciona um elemento no começo do array */
// frutas.unshift("Abacaxi");
// console.table(frutas);

// /* o método pop remove o último elemento do array */
// frutas.pop();
// console.table(frutas);

// /* o método shift remove o primeiro elemento do array */
// frutas.shift();
// console.table(frutas);

// /* o método indexOf retorna o índice do primeiro elemento encontrado */
// let indice = frutas.indexOf("Morango");
// console.log(indice);
// console.log(frutas[indice])

// /* a forma manual de fazer isso sem utilizar indexOf é: */
// console.log("FRUTA na posição 6: " + frutas[5]);

// /* o método splice remove e adiciona elementos no array */
// /* observação: o primeiro parâmetro é o índice que queremos remover e o segundo parâmetro é quantas vezes queremos remover o índice informado no primeiro parâmetro */
// frutas.splice(3, 1);
// console.table(frutas);

// /* o método forEach executa uma função para cada elemento do array */
// /* observação: o método forEach sempre recebe uma função como parâmetro. No caso abaixo, estamos usando uma arrow function */
// frutas.forEach( (fruta) => {
//     console.log(fruta);
// });

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];

/* concatenando arrays com o operador spread*/
/* observação: o operador spread é identificado por "..." */
let nr3 = [...nr1, ...nr2];
console.log(`NOVO ARRAY: ${nr3}`);

/* percorrendo arrays com forEach*/
nr3.forEach( (nr) => {
    console.log(`ITEM DO NOVO ARRAY COM SPREAD: ${nr}`);
})

