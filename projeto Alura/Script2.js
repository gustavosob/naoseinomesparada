// Função de pesquisa
function pesquisar() {
    const section = document.getElementById("resultado");
    const campoPesquisaElement = document.getElementById("campo-pesquisa");

    if (!campoPesquisaElement) {
        console.error("Elemento com id 'campo-pesquisa' não encontrado.");
        return;
    }

    let campoPesquisa = campoPesquisaElement.value.trim().toLowerCase();

    if (campoPesquisa === "") {
        section.innerHTML = "";
        return;
    }

    let resultados = "";

    for (let dado of dados) {
        // Comparar o campo de pesquisa com o título da linguagem exatamente
        const tituloLower = dado.titulo.toLowerCase();

        // Verificar se o título corresponde exatamente ao termo pesquisado
        if (tituloLower === campoPesquisa) {
            resultados += `
                <div class="container">
                  <!-- Card de Descrição e Título -->
                  <div class="card card-descricao">
                    <div class="titulo">${dado.titulo}</div>
                    <div class="descricao">${dado.descricao}</div>
                  </div>

                  <!-- Card de Desempenho -->
                  <div class="card card-desempenho">
                    <div class="desempenho">${dado.desempenho}</div>
                  </div>

                  <!-- Card de Ola Mundo -->
                  <div class="card card-ola-mundo">
                    <pre><code>${dado.olaMundo}</code></pre>
                  </div>
                </div>`;
        }
    }

    // Exibir os resultados ou uma mensagem caso não haja correspondências
    section.innerHTML = resultados || "<p>Nenhum resultado encontrado.</p>";
}
