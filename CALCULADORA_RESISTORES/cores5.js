function cores5() {
    // Tabela de cores atualizada para resistores de precisão (5 faixas)
    const tabela = {
        "preto":    { valor: 0, mult: 1,          tol: null },
        "marrom":   { valor: 1, mult: 10,         tol: "± 1%" },
        "vermelho": { valor: 2, mult: 100,        tol: "± 2%" },
        "laranja":  { valor: 3, mult: 1000,       tol: null },
        "amarelo":  { valor: 4, mult: 10000,      tol: null },
        "verde":    { valor: 5, mult: 100000,     tol: "± 0,5%" },
        "azul":     { valor: 6, mult: 1000000,    tol: "± 0,25%" },
        "violeta":  { valor: 7, mult: 10000000,   tol: "± 0,1%" },
        "cinza":    { valor: 8, mult: 100000000,  tol: "± 0,05%" },
        "branco":   { valor: 9, mult: 1000000000, tol: null },
        "dourado":  { valor: null, mult: 0.1,     tol: "± 5%" },
        "prata":    { valor: null, mult: 0.01,    tol: "± 10%" }
    };

    let cores = [];
    for (let i = 0; i < 5; i++) {
        let entrada = prompt(`Digite a ${i + 1}ª cor:`).toLowerCase().trim();
        cores.push(entrada);
    }

    for (let i = 0; i < 5; i++) {
        if (!tabela[cores[i]]) {
            alert(`A cor "${cores[i]}" é inválida!`);
            return;
        }
    }

    const d1 = tabela[cores[0]].valor;
    const d2 = tabela[cores[1]].valor;
    const d3 = tabela[cores[2]].valor;   
    
    const multiplicador = tabela[cores[3]].mult;
    const tolerancia = tabela[cores[4]]?.tol || "± 20%";

    const valorOhm = (d1 * 100 + d2 * 10 + d3) * multiplicador;

    let exibicao = valorOhm >= 1000000 ? (valorOhm / 1000000) + "M" :
                   valorOhm >= 1000 ? (valorOhm / 1000) + "k" :
                   valorOhm % 1 === 0 ? valorOhm : valorOhm.toFixed(2);

    alert(`Resistência: ${exibicao} Ohm\nTolerância: ${tolerancia} `);
}

