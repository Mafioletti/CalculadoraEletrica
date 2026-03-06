function eletrodomestico(){
    let eletrodomestico = prompt("Digite qual o eletrodoméstico: ");
    let opcao = Number(prompt(`Digite qual potencia está sendo considerada:
    1 - Watt
    2 - KiloWatt`
    ));
    let potencia = Number(prompt("Digite a potência do produto: "));
    let tempo = Number(prompt("Digite o tempo em horas que o aparelho é usado no dia: "));
    let KWh;
    switch(opcao){
        case 1:
            KWh = (potencia * tempo) / 1000 ;
            break;
        case 2:
            KWh = potencia * tempo;
            break;
        default:
            alert("Operação Indisponível")
    }
    alert("Olhe no console");
    console.log("O eletrodoméstico é: " + eletrodomestico);
    console.log("O  consumo por dia é: " + (KWh.toFixed(2)) + " kilowatts");
    console.log("O valor a ser pago por ele é: "+ ((KWh * 30) * 0.9).toFixed(2))
    
    }