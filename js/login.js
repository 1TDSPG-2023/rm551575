// // LISTANDO OBJETOS
// let listaUsuarios = [

//     {
//         nomeCompleto: "André Sant'Ana",
//         nomeUsuario: "andre",
//         senhaUsuario: "123"
//     }
// ];

// // GUARDAR A LISTA DE OBJETOS NO LOCAL-STORAGE
// localStorage.setItem("listaUser", JSON.stringify(listaUsuarios));


// evt é abreviação de event.
// Essa função está retornando o elemento html no console do dev tools ao clicar no elemento com id "btnSubmit" através de "target".
// A propriedade "value" serve para definir o valor da constante.
// O segundo if mostra no console se o acesso será liberado ou negado caso o usuário digite as credenciais corretas e clique no botão login.
addEventListener("click", (evt) => {

    const inputUser = document.querySelector("#idUser");
    const inputPass = document.querySelector("#idPass");

    //CRIANDO OBJETO USER-LOGADO
    const usuarioLogado = {
        nomeUsuarioLogado: inputUser.value,
        senhaUsuarioLogado: inputPass.value
    }

    //CRIANDO OBJETO USUÁRIO-VALIDADO
    let usuarioValidado = {};



    if (evt.target.id == "btnSubmit") {

        try {

            // Recuperar a lista de usuários do localStorage

            let listaUsuarios = JSON.parse(localStorage.getItem("listaUser"));

            listaUsuarios.forEach((usuario) => {
            
                if (usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario) {
                    usuarioValidado = usuario;
                    throw"acesso liberado";
                }

            });

            throw "acesso negado"

        } catch (msg) {
            const msgError = document.querySelector("#msgError");
            if (msg == "acesso liberado") {
                msgError.setAttribute("style","color:#00ff00;");
                msgError.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} efetuou o login com sucesso.</strong></span>`;
                
                //ADICIONANDO O OBJETO USUÁRIO-VALIDADO AO LOCAL-STORAGE
                localStorage.setItem("user-validado", JSON.stringify(usuarioValidado));

                //CRIANDO O TOKEN DE AUTENTICAÇÃO
                const token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                
                //ADICIONANDO O TOKEN AO LOCAL-STORAGE
                localStorage.setItem("user-token", token);
                
                //Redirect
                setTimeout(() => {
                    window.location.href = "../pages/sucesso.html"
                }, 2000);
            } else {
                msgError.setAttribute("style","color:#ff0000;");
                msgError.innerHTML = "<span><strong>Login ou senha inválidos.</strong></span>";
            }
        }

    } else if (evt.target.className == "fa fa-eye" || evt.target.className == "fa fa-eye-slash") {
        if(inputPass.getAttribute("type") == "password") {
            inputPass.setAttribute("type","text");
            evt.target.setAttribute("class","fa fa-eye-slash");
        } else if (evt.target.className == "fa fa-eye-slash") {
            inputPass.setAttribute("type","password");
            evt.target.setAttribute("class","fa fa-eye");
        }
    }

});