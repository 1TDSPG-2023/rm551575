// GERANDO UM TOKEN COM Math.
let tokenGerado = Math.random().toString(16).substring(2);


// DECLARANDO OBJETOS
const usuario1 = {
    nomeUsuario : "andre",
    senhaUsuario : "123",
    gravaDados : true,
    token : tokenGerado
}

tokenGerado = Math.random().toString(16).substring(2);

const usuario2 = {
    nomeUsuario : "andre2",
    senhaUsuario : "123",
    gravaDados : true,
    token : tokenGerado
}

// LISTANDO OBJETOS
let listaUsuarios = [];
listaUsuarios.push(usuario1);
listaUsuarios.push(usuario2);


// evt é abreviação de event.
// Essa função está retornando o elemento html no console do dev tools ao clicar no elemento com id "btnSubmit" através de "target".
// A propriedade "value" serve para definir o valor da constante.
// O segundo if mostra no console se o acesso será liberado ou negado caso o usuário digite as credenciais corretas e clique no botão login.
addEventListener("click", (evt) => {

    if (evt.target.id == "btnSubmit") {
        const inputUser = document.querySelector("#idUser");
        const inputPass = document.querySelector("#idPass");
        // console.log(inputUser.value)
        // console.log(inputPass.value)

        try {
            listaUsuarios.forEach( (usuario) => {
            
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
            } else {
                msgError.setAttribute("style","color:#ff0000;");
                msgError.innerHTML = "<span><strong>Login ou senha inválidos.</strong></span>";
            }
        }

    }


});