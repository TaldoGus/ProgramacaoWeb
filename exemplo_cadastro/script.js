// Adicionando um evento para capturar o envio do formulário
document.getElementById("cadastroForm").addEventListener("submit", function(event) {

    event.preventDefault();//Previnindo página de recarregar ao enviar o formulário

    // Capturando os valores digitados pelo usuário no campos 
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    // Verifica se os campos foram preenchidos corretamente
    if (nome && email) {
        // Se ambos os campos estiverem preenchidos, exibe um alerta de sucesso
        alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nE-mail: ${email}`);
    } else {
        // Se algum campo estiver vazio, exibe um alerta de erro
        alert("Por favor, preencha todos os campos.");
    }
});
