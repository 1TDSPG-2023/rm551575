if(localStorage.getItem("user-token")) {
    const elementoDeBoasVindas = document.querySelector("#welcome");

    //RECUPERAR O OBJETO USUÁRIO-VALIDADO DO LOCAL-STORAGE
    const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

    elementoDeBoasVindas.innerHTML = `<span><strong>Bem vindo, ${usuarioValidado.nomeCompleto}!</strong></span>`;

    //ADICIONANDO LÓGICA DE LOGOUT COM removeItem
    const botaoSair = document.querySelector("#btnSair");
    botaoSair.addEventListener("click", () => {
        localStorage.removeItem("user-validado");
        localStorage.removeItem("user-token");
        window.location.href = "../pages/login.html";
    });

} else {
    alert("Você precisa realizar o login antes de continuar.");
    window.location.href = "../pages/login.html";
}

