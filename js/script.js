/* <button id="meu btn">CLICK</button> */

const btn = document.getElementById("meu-btn");

btn.addEventListener("click", function () {
    //Math.random = função que gera um número aleatório entre 0 e 1
    //Math.floor = arredonda para baixo
    //Math.ceil = arredonda para cima
    //Math.round = arredonda para cima ou baixo (aleatório)
    let r = 0;
    let g = 0;
    let b = 0;
    //Números aleatórios gerados
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    //this.setAttribute("style", "background-color: rgb("+r+","+g+","+b+")");
    this.setAttribute("style", `background-color: rgb(${r},${g},${b});`);
});


const h2 = document.querySelectorAll(".tit-sec");
h2.addEventListener("click", () => {
    h2.setAttribute("style","font-size:15px");
});