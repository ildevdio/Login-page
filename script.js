//cadastro de usuarios
const usuariosCadastrados = [];

//validação do formato do e-mail
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}

//email já cadastrado(??????)
function emailCadastrado(email) {
  return usuariosCadastrados.some((username) => username.email === email);
}

//cadastro de usuario
function cadastroUsuario(event) {
    event.preventDefault(); //evita o envio do formulário

//captur valores dos inputs
    const nome = document.getElementById("username").value.trim() ;
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value.trim();

    //validações bicho doido (-m-)
    if (!nome || !email || !senha) {
        exibirMensagem("Por favor, preencha todos os campos."); 
        return;
    }

    if(!validarEmail(email)) {
        exibirErro("Por favor, insira um e-mail válido.");
        return;
    }















}

