import dinos from './dados.js';

let botao = document.getElementById("botao");
botao.addEventListener("click", pesquisar);

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultados = "";

    if (campoPesquisa.trim() == "") {
        section.innerHTML = "<p>Nenhum resultado encontrado</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let lNome = "";
    let lNomeCi = "";
    let lDesc = "";
    let lRegiao = "";

    for (let dino of dinos) {
        lNome = dino.nomeComum.toLowerCase();
        lNomeCi = dino.nomeCientifico.toLowerCase();
        lDesc = dino.desc.toLowerCase();
        lRegiao = dino.regiao.toLowerCase();

        if (lNome.includes(campoPesquisa) || lDesc.includes(campoPesquisa) || lRegiao.includes(campoPesquisa)) {
            resultados += `
        <div class="item-resultado">
            <h2>${dino.nomeComum}</h2>
            <h3>${dino.nomeCientifico}</h3>
            <p class="descricao-meta">${dino.desc} Se quiser saber mais, este vídeo pode ajudar: <a
            href="${dino.link}" target="_blank" rel="noopener noreferrer">${dino.nomeComum}</a></p>
        </div>
        `;
        };
    };

    if (!resultados) {
        section.innerHTML = "<p>Nenhum resultado encontrado</p>";
        return;
    }

    section.innerHTML = resultados;
};