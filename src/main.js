async function verificarApi() {
  const elementoStatus = document.getElementById("api-status");

  try {
    const resposta = await fetch("/api/health");
    const dados = await resposta.json();
    elementoStatus.textContent = `${dados.status.toUpperCase()} - ${dados.mensagem}`;
  } catch (erro) {
    elementoStatus.textContent = "Erro ao conectar com a API.";
  }
}

verificarApi();
