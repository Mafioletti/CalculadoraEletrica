let opcao = parseInt(prompt(`Digite qual operação deseja fazer:
    1. Calculadora Consumo
    2. Calculadora Mult&Sub
    `));

    switch(opcao){
        case 1:
            calculadoraConsumo();
        break;
        case 2:
            calculadoraMultSub();
        break;
        default:
            alert("Opção Indisponível");
    }