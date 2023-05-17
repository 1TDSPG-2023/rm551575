// // LISTANDO OBJETOS
// let listaUsuarios = [

//     {
//         nomeCompleto: "Andre",
//         nomeUsuario: "andre",
//         senhaUsuario: "123"
//     },
//     {
//         nomeCompleto: "João",
//         nomeUsuario: "joao",
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

    if (evt.target.id == "btnSubmit") {

        try {

            // Recuperar a lista de usuários do localStorage

            let listaUsuarios = JSON.parse(localStorage.getItem("listaUser"));

            listaUsuarios.forEach((usuario) => {
            
                if (inputUser.value == usuario.nomeUsuario && inputPass.value == usuario.senhaUsuario) {
                    throw"acesso liberado";
                }

            });

            throw "acesso negado"

        } catch (msg) {
            const msgError = document.querySelector("#msgError");
            if (msg == "acesso liberado") {
                msgError.setAttribute("style","color:#00ff00;");
                msgError.innerHTML = "<span><strong>Login efeuado com sucesso.</strong></span>";
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