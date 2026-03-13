function cores5() {
    // Tradutor para converter o nome em português para a cor que o CSS entende
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
        "verde":    { valor: 5, mult: 100000,     tol: "± 0.5%" },
        "azul":     { valor: 6, mult: 1000000,    tol: "± 0.25%" },
        "violeta":  { valor: 7, mult: 10000000,   tol: "± 0.1%" },
        "cinza":    { valor: 8, mult: 100000000,  tol: "± 0.05%" },
        "branco":   { valor: 9, mult: 1000000000, tol: null },
        "dourado":  { valor: null, mult: 0.1,     tol: "± 5%" },
        "prata":    { valor: null, mult: 0.01,    tol: "± 10%" }
    };

    let cores = [];
    for (let i = 0; i < 5; i++) {
        let entrada = prompt(`Digite a ${i + 1}ª cor:`).toLowerCase().trim();
        
        if (!tabela[entrada]) {
            alert(`A cor "${entrada}" é inválida!`);
            return;
        }
        cores.push(entrada);
    }

    // --- ATUALIZAÇÃO VISUAL (Link com o HTML/CSS) ---
    // Garante que a 5ª faixa esteja visível e pinta todas as faixas
    document.getElementById('s5').style.display = "block"; 
    document.getElementById('s1').style.backgroundColor = tradutorCores[cores[0]];
    document.getElementById('s2').style.backgroundColor = tradutorCores[cores[1]];
    document.getElementById('s3').style.backgroundColor = tradutorCores[cores[2]];
    document.getElementById('s4').style.backgroundColor = tradutorCores[cores[3]];
    document.getElementById('s5').style.backgroundColor = tradutorCores[cores[4]];

    const d1 = tabela[cores[0]].valor;
    const d2 = tabela[cores[1]].valor;
    const d3 = tabela[cores[2]].valor;   
    const multiplicador = tabela[cores[3]].mult;
    const tolerancia = tabela[cores[4]]?.tol;

    // Nos resistores de 5 faixas, as 3 primeiras são dígitos significativos
    const valorOhm = (d1 * 100 + d2 * 10 + d3) * multiplicador;

    let exibicao = valorOhm >= 1000000 ? (valorOhm / 1000000).toFixed(1) + " M" :
                   valorOhm >= 1000 ? (valorOhm / 1000).toFixed(1) + " k" :
                   valorOhm % 1 === 0 ? valorOhm : valorOhm.toFixed(2);

    // --- EXIBIÇÃO NA TELA ---
    document.getElementById('valor-ohm').innerHTML = `${exibicao} Ω <small style="font-size: 0.8rem; color: #64748b;">(${tolerancia})</small>`;
}