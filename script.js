
/* =========================================
   MATEMÁTICA ACESSÍVEL
   Aprendizado por explicações escritas
   ========================================= */

// Seleciona os elementos do HTML
const botoesOperacao = document.querySelectorAll("[data-operacao]");
const tituloAula = document.getElementById("titulo-aula");
const descricaoAula = document.getElementById("descricao-aula");
const conteudoAula = document.getElementById("conteudo-aula");

const botaoIniciar = document.getElementById("iniciar-desafio");
const areaDesafio = document.getElementById("area-desafio");
const feedbackDesafio = document.getElementById("feedback-desafio");

const pontuacaoElemento = document.getElementById("pontuacao");
const contadorQuestao = document.getElementById("contador-questao");
const textoProgresso = document.getElementById("texto-progresso");
const progressoBarra = document.getElementById("progresso-barra");
const progressoTrilho = document.getElementById("progresso-trilho");

// =========================================
// 1. CONTEÚDO DAS AULAS
// =========================================

const aulas = {
    adicao: {
        titulo: "Adição",
        descricao: "Aprenda a somar números passo a passo.",
        explicacao: `
            <div class="aula-cartao">
                <h3>O que é adição?</h3>
                <p>
                    Adição é a operação matemática usada para juntar
                    quantidades. O sinal utilizado é o <strong>+</strong>.
                </p>
            </div>

            <div class="aula-exemplo">
                <h3>Exemplo: 3 + 2</h3>
                <p>Imagine que você tem 3 maçãs e ganha mais 2.</p>
                <div class="aula-conta">3 + 2 = 5</div>

                <div class="etapa-resolucao">
                    <strong>Passo 1:</strong>
                    Comece com o número 3.
                </div>

                <div class="etapa-resolucao">
                    <strong>Passo 2:</strong>
                    Acrescente mais 2 unidades: 4, 5.
                </div>

                <div class="etapa-resolucao">
                    <strong>Passo 3:</strong>
                    Você chegou ao número 5.
                    Portanto, <strong>3 + 2 = 5</strong>.
                </div>
            </div>
        `
    },

    subtracao: {
        titulo: "Subtração",
        descricao: "Aprenda a retirar quantidades e descobrir a diferença.",
        explicacao: `
            <div class="aula-cartao">
                <h3>O que é subtração?</h3>
                <p>
                    Subtração é a operação usada para retirar uma quantidade
                    de outra ou descobrir a diferença entre números.
                    O sinal utilizado é o <strong>−</strong>.
                </p>
            </div>

            <div class="aula-exemplo">
                <h3>Exemplo: 7 − 3</h3>
                <p>Imagine que você tem 7 balas e dá 3 para um amigo.</p>
                <div class="aula-conta">7 − 3 = 4</div>

                <div class="etapa-resolucao">
                    <strong>Passo 1:</strong>
                    Comece com 7 balas.
                </div>

                <div class="etapa-resolucao">
                    <strong>Passo 2:</strong>
                    Retire 3 balas: 6, 5, 4.
                </div>

                <div class="etapa-resolucao">
                    <strong>Passo 3:</strong>
                    Restaram 4 balas.
                    Portanto, <strong>7 − 3 = 4</strong>.
                </div>
            </div>
        `
    },

    multiplicacao: {
        titulo: "Multiplicação",
        descricao: "Aprenda a somar grupos iguais de maneira mais rápida.",
        explicacao: `
            <div class="aula-cartao">
                <h3>O que é multiplicação?</h3>
                <p>
                    Multiplicação é uma maneira rápida de somar a mesma
                    quantidade várias vezes. O sinal utilizado é o
                    <strong>×</strong>.
                </p>
            </div>

            <div class="aula-exemplo">
                <h3>Exemplo: 3 × 4</h3>
                <p>
                    Imagine 3 grupos, cada um com 4 objetos.
                </p>
                <div class="aula-conta">3 × 4 = 12</div>

                <div class="etapa-resolucao">
                    <strong>Passo 1:</strong>
                    Identifique os 3 grupos.
                </div>

                <div class="etapa-resolucao">
                    <strong>Passo 2:</strong>
                    Cada grupo tem 4 objetos.
                    Podemos somar: 4 + 4 + 4.
                </div>

                <div class="etapa-resolucao">
                    <strong>Passo 3:</strong>
                    4 + 4 + 4 = 12.
                    Portanto, <strong>3 × 4 = 12</strong>.
                </div>
            </div>
        `
    },

    divisao: {
        titulo: "Divisão",
        descricao: "Aprenda a repartir quantidades em partes iguais.",
        explicacao: `
            <div class="aula-cartao">
                <h3>O que é divisão?</h3>
                <p>
                    Divisão é a operação usada para repartir uma quantidade
                    em partes iguais. O sinal utilizado é o <strong>÷</strong>.
                </p>
            </div>

            <div class="aula-exemplo">
                <h3>Exemplo: 12 ÷ 3</h3>
                <p>
                    Imagine que você tem 12 balas para dividir igualmente
                    entre 3 pessoas.
                </p>
                <div class="aula-conta">12 ÷ 3 = 4</div>

                <div class="etapa-resolucao">
                    <strong>Passo 1:</strong>
                    Separe as 12 balas.
                </div>

                <div class="etapa-resolucao">
                    <strong>Passo 2:</strong>
                    Distribua as balas igualmente entre as 3 pessoas.
                </div>

                <div class="etapa-resolucao">
                    <strong>Passo 3:</strong>
                    Cada pessoa receberá 4 balas.
                    Portanto, <strong>12 ÷ 3 = 4</strong>.
                </div>
            </div>
        `
    }
};

// =========================================
// 2. ABRIR OS MÓDULOS DE APRENDIZADO
// =========================================

botoesOperacao.forEach((botao) => {
    botao.addEventListener("click", () => {
        const operacao = botao.dataset.operacao;
        const aula = aulas[operacao];

        if (!aula) {
            return;
        }

        tituloAula.textContent = aula.titulo;
        descricaoAula.textContent = aula.descricao;
        conteudoAula.innerHTML = aula.explicacao;

        // Destaca o módulo selecionado
        botoesOperacao.forEach((outroBotao) => {
            outroBotao.classList.remove("selecionado");
            outroBotao.setAttribute("aria-pressed", "false");
        });

        botao.classList.add("selecionado");
        botao.setAttribute("aria-pressed", "true");

        // Mostra a aula na tela
        document.getElementById("area-aula").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// =========================================
// 3. CONFIGURAÇÃO DOS EXERCÍCIOS
// =========================================

const quantidadeQuestoes = 10;

let questoes = [];
let indiceQuestao = 0;
let pontuacao = 0;
let desafioIniciado = false;
let respostaEscolhida = false;

// Cria perguntas e alternativas
function criarQuestao(operacao, numero1, numero2) {
    let simbolo;
    let resposta;

    switch (operacao) {
        case "adicao":
            simbolo = "+";
            resposta = numero1 + numero2;
            break;

        case "subtracao":
            simbolo = "−";
            resposta = numero1 - numero2;
            break;

        case "multiplicacao":
            simbolo = "×";
            resposta = numero1 * numero2;
            break;

        case "divisao":
            simbolo = "÷";
            resposta = numero1 / numero2;
            break;

        default:
            return null;
    }

    const alternativas = new Set([resposta]);

    while (alternativas.size < 4) {
        const variacao = Math.floor(Math.random() * 9) - 4;
        const alternativa = resposta + variacao;

        if (alternativa >= 0) {
            alternativas.add(alternativa);
        }
    }

    return {
        operacao,
        numero1,
        numero2,
        simbolo,
        resposta,
        alternativas: [...alternativas].sort(() => Math.random() - 0.5)
    };
}

// Gera números para cada operação
function gerarQuestaoAleatoria(operacao) {
    let a;
    let b;

    switch (operacao) {
        case "adicao":
            a = Math.floor(Math.random() * 20) + 1;
            b = Math.floor(Math.random() * 20) + 1;
            break;

        case "subtracao":
            a = Math.floor(Math.random() * 20) + 1;
            b = Math.floor(Math.random() * a) + 1;
            break;

        case "multiplicacao":
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            break;

        case "divisao":
            b = Math.floor(Math.random() * 9) + 2;
            const resultado = Math.floor(Math.random() * 10) + 1;
            a = b * resultado;
            break;

        default:
            return null;
    }

    return criarQuestao(operacao, a, b);
}

// =========================================
// 4. INICIAR O DESAFIO
// =========================================

botaoIniciar.addEventListener("click", () => {
    questoes = [];

    const operacoes = [
        "adicao",
        "subtracao",
        "multiplicacao",
        "divisao"
    ];

    // Cria 10 questões, alternando as operações
    for (let i = 0; i < quantidadeQuestoes; i++) {
        const operacao = operacoes[i % operacoes.length];
        questoes.push(gerarQuestaoAleatoria(operacao));
    }

    indiceQuestao = 0;
    pontuacao = 0;
    desafioIniciado = true;
    respostaEscolhida = false;

    pontuacaoElemento.textContent = pontuacao;
    feedbackDesafio.textContent = "";
    feedbackDesafio.className = "";

    botaoIniciar.textContent = "Reiniciar desafio";

    atualizarProgresso();
    mostrarQuestao();
});

// =========================================
// 5. MOSTRAR UMA QUESTÃO
// =========================================

function mostrarQuestao() {
    if (indiceQuestao >= questoes.length) {
        mostrarResultadoFinal();
        return;
    }

    respostaEscolhida = false;

    const questao = questoes[indiceQuestao];

    areaDesafio.innerHTML = `
        <div class="questao">
            <h3>
                Questão ${indiceQuestao + 1} de ${quantidadeQuestoes}
            </h3>

            <p class="pergunta">
                Quanto é ${questao.numero1} ${questao.simbolo} ${questao.numero2}?
            </p>

            <div class="alternativas" role="group" aria-label="Escolha sua resposta">
                ${questao.alternativas.map((alternativa) => `
                    <button
                        type="button"
                        class="alternativa"
                        data-resposta="${alternativa}"
                    >
                        ${alternativa}
                    </button>
                `).join("")}
            </div>
        </div>
    `;

    areaDesafio.querySelectorAll("[data-resposta]").forEach((botao) => {
        botao.addEventListener("click", () => {
            verificarResposta(Number(botao.dataset.resposta), botao);
        });
    });

    feedbackDesafio.textContent = "";
    feedbackDesafio.className = "";

    atualizarProgresso();
}

// =========================================
// 6. VERIFICAR A RESPOSTA
// =========================================

function verificarResposta(resposta, botaoSelecionado) {
    if (respostaEscolhida || !desafioIniciado) {
        return;
    }

    respostaEscolhida = true;

    const questao = questoes[indiceQuestao];
    const acertou = resposta === questao.resposta;

    // Desativa as alternativas após a escolha
    const alternativas = areaDesafio.querySelectorAll("[data-resposta]");

    alternativas.forEach((botao) => {
        botao.disabled = true;

        if (Number(botao.dataset.resposta) === questao.resposta) {
            botao.classList.add("correta");
        }
    });

    if (acertou) {
        pontuacao++;
        pontuacaoElemento.textContent = pontuacao;

        feedbackDesafio.className = "feedback sucesso";
        feedbackDesafio.innerHTML = `
            <strong>Parabéns! Você acertou!</strong>
            <p>
                A resposta correta é ${questao.resposta}.
                Continue assim!
            </p>
        `;
    } else {
        botaoSelecionado.classList.add("incorreta");

        feedbackDesafio.className = "feedback erro";
        feedbackDesafio.innerHTML = `
            <strong>Quase lá! Vamos aprender com o erro.</strong>
            <p>
                A resposta correta é ${questao.resposta}.
            </p>
            <p>
                Tente resolver novamente mentalmente antes de continuar.
            </p>
        `;
    }

    atualizarProgresso();

    // Cria o botão para avançar
    const botaoContinuar = document.createElement("button");
    botaoContinuar.type = "button";
    botaoContinuar.className = "botao botao-principal";
    botaoContinuar.textContent =
        indiceQuestao === questoes.length - 1
            ? "Ver resultado"
            : "Próxima questão";

    botaoContinuar.addEventListener("click", () => {
        indiceQuestao++;
        mostrarQuestao();
    });

    feedbackDesafio.appendChild(botaoContinuar);
    botaoContinuar.focus();
}

// =========================================
// 7. ATUALIZAR O PROGRESSO
// =========================================

function atualizarProgresso() {
    const respondidas = Math.min(indiceQuestao, quantidadeQuestoes);
    const porcentagem = (respondidas / quantidadeQuestoes) * 100;

    contadorQuestao.textContent =
        `${respondidas} de ${quantidadeQuestoes} questões`;

    textoProgresso.textContent =
        `${Math.round(porcentagem)}% concluído`;

    progressoBarra.style.width = `${porcentagem}%`;

    if (progressoTrilho) {
        progressoTrilho.setAttribute("aria-valuenow", String(Math.round(porcentagem)));
    }
}

// =========================================
// 8. RESULTADO FINAL
// =========================================

function mostrarResultadoFinal() {
    desafioIniciado = false;

    const porcentagem = (pontuacao / quantidadeQuestoes) * 100;

    let mensagem;

    if (porcentagem === 100) {
        mensagem = "Excelente! Você acertou todas as questões!";
    } else if (porcentagem >= 70) {
        mensagem = "Muito bem! Você está aprendendo bastante.";
    } else if (porcentagem >= 40) {
        mensagem = "Bom esforço! Continue praticando para melhorar.";
    } else {
        mensagem = "Não desista! Revise as aulas e tente novamente.";
    }

    areaDesafio.innerHTML = `
        <div class="resultado-final">
            <h3>Desafio concluído!</h3>
            <p class="resultado-pontos">
                Você acertou ${pontuacao} de ${quantidadeQuestoes} questões.
            </p>
            <p>${mensagem}</p>
            <p>
                Aproveite para revisar as explicações e praticar mais.
            </p>
        </div>
    `;

    feedbackDesafio.textContent = "";
    feedbackDesafio.className = "";

    contadorQuestao.textContent =
        `${quantidadeQuestoes} de ${quantidadeQuestoes} questões`;

    textoProgresso.textContent = "100% concluído";
    progressoBarra.style.width = "100%";

    if (progressoTrilho) {
        progressoTrilho.setAttribute("aria-valuenow", "100");
    }

    botaoIniciar.textContent = "Jogar novamente";
}

// =========================================
// 9. PREPARAÇÃO INICIAL
// =========================================

if (pontuacaoElemento) {
    pontuacaoElemento.textContent = "0";
}

if (contadorQuestao) {
    contadorQuestao.textContent = `0 de ${quantidadeQuestoes} questões`;
}

if (textoProgresso) {
    textoProgresso.textContent = "0% concluído";
}

if (progressoBarra) {
    progressoBarra.style.width = "0%";
}

console.log("Matemática Acessível carregada com sucesso!");