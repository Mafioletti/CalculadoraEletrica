    // Opções de potências de 10 para cada unidade (expoentes)
    const escalas = {
        1: 9,  // giga (10^9)
        2: 6,  // mega (10^6)
        3: 3,  // quilo (10^3)
        4: 0,  // base (10^0)
        5: -3, // mili (10^-3)
        6: -6, // micro (10^-6)
        7: -9, // nano (10^-9)
        8: -12 // pico (10^-12)
    };

    let atual = prompt(`Digite a unidade de ORIGEM:
    1 - giga 
    2 - mega
    3 - quilo
    4 - base  
    5 - mili  
    6 - micro 
    7 - nano  
    8 - pico`);
    
    if (!escalas[atual] && escalas[atual] !== 0) {
        alert("Operação indisponível: Unidade inválida.");
    }

    let startValue = parseFloat(prompt("Digite o valor inicial:"));

    let convertion = prompt(`Digite para qual unidade DESEJA CONVERTER:
    1 - giga 
    2 - mega
    3 - quilo
    4 - base  
    5 - mili  
    6 - micro 
    7 - nano  
    8 - pico`);

    if (!escalas[convertion] && escalas[convertion] !== 0) {
        alert("Operação indisponível: Unidade inválida.");
    }

    // Lógica de conversão:
    // Valor * 10^(origem - destino)
    let expoenteOrigem = escalas[atual];
    let expoenteDestino = escalas[convertion];
    
    let resultado = startValue * Math.pow(10, expoenteOrigem - expoenteDestino);

    alert("Resultado enviado para o console!");
    console.log(`Convertendo de 10^${expoenteOrigem} para 10^${expoenteDestino}`);
    console.log("O valor final é: " + resultado);
