function fazerLogin() {
    let email = document.getElementById("email-example").value;
    let senha = document.getElementById("password-example").value;
    
    // nesse caso, vamos supor que o e-mail de um usuário fictício seja aluno@senai.com 
    // e sua senha: 123456

    if(email == "" | email != "aluno@senai.com" | senha == "" | senha != "123456"){
        alert("Usuário ou senha incorretos");
        return false;
    }else{
        alert("Bem-vindo de volta, Aluno Senai");
    }
}

function cadastrarUsuario() {
    let nome = document.getElementById("name").value;
    let senha1 = document.getElementById("password-example1").value;
    let senha2 = document.getElementById("password-example2").value;
    let endereco = document.getElementById("adress").value;
    let email2 = document.getElementById("email-example-2").value;
    // let telefone = document.getElementById("tel").value;

    // a princípio, não será obrigatório informar o numero de telefone

    if(nome == "" | endereco == "" | email2 == ""){
        alert("Preencha todos os campos obrigatórios!");
        return false;
        // ou seja, se os valores não forem informados é impossível prosseguir
    }
    else if(senha1 != senha2 | senha1 == "" | senha2 == ""){
        alert("As senhas devem ser iguais!");
        return false;
    }
    else{
        alert("Cadastro realizado. Seja bem-vindo, " + nome);
        return true;
    }
}