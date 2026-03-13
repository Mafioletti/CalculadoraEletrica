function cores4() {
    // Objeto de tradução para o CSS entender o que foi digitado
    const tradutorCores = {
        "preto": "black",
        "marrom": "#795548",
        "vermelho": "red",
        "laranja": "orange",
        "amarelo": "yellow",
        "verde": "green",
        "azul": "blue",
        "violeta": "purple",
        "cinza": "gray",
        "branco": "white",
        "dourado": "#d4af37", // Tom de ouro mais visível
        "prata": "#c0c0c0"    // Tom de prata
    };

    const tabela = {
        "preto":    { valor: 0, mult: 1,          tol: null },
        "marrom":   { valor: 1, mult: 10,         tol: "± 1%" },
        "vermelho": { valor: 2, mult: 100,        tol: "± 2%" },
        "laranja":  { valor: 3, mult: 1000,       tol: null },
        "amarelo":  { valor: 4, mult: 10000,      tol: null },
        "verde":    { valor: 5, mult: 100000,     tol: null },
        "azul":     { valor: 6, mult: 1000000,    tol: null },
        "violeta":  { valor: 7, mult: 10000000,   tol: null },
        "cinza":    { valor: 8, mult: 100000000,  tol: null },
        "branco":   { valor: 9, mult: 1000000000, tol: null },
        "dourado":  { valor: null, mult: 0.1,     tol: "± 5%" },
        "prata":    { valor: null, mult: 0.01,    tol: "± 10%" }
    };

    let cores = [];
    for (let i = 0; i < 4; i++) {
        let entrada = prompt(`Digite a ${i + 1}ª cor: `).toLowerCase().trim();
        
        // Verifica se a cor existe na nossa tabela
        if (!tabela[entrada]) {
            alert(`A cor "${entrada}" é inválida!`);
            return;
        }
        cores.push(entrada);
    }

    // --- ATUALIZAÇÃO VISUAL ---
    // Selecionamos as faixas do HTML e aplicamos a cor traduzida
    document.getElementById('s1').style.backgroundColor = tradutorCores[cores[0]];
    document.getElementById('s2').style.backgroundColor = tradutorCores[cores[1]];
    document.getElementById('s3').style.backgroundColor = tradutorCores[cores[2]];
    document.getElementById('s4').style.backgroundColor = tradutorCores[cores[3]];

    const d1 = tabela[cores[0]].valor;
    const d2 = tabela[cores[1]].valor;
    const multiplicador = tabela[cores[2]].mult;
    const tolerância = tabela[cores[3]]?.tol;

    const valorOhm = (d1 * 10 + d2) * multiplicador;

    let exibicao = valorOhm >= 1000000 ? (valorOhm / 1000000).toFixed(1) + " M" :
                   valorOhm >= 1000 ? (valorOhm / 1000).toFixed(1) + " k" :
                   valorOhm.toFixed(0);

    // --- EXIBIÇÃO NO HTML ---
    // Em vez de alert, jogamos o valor dentro da div de resultado
    document.getElementById('valor-ohm').innerHTML = `${exibicao} Ω <small style="font-size: 0.8rem; color: #666;">(${tolerância})</small>`;
}