function cores4(){
    //dicionário
    const tabelaCores1 = {
        "preto": 0, "marrom": 1, "vermelho": 2, "laranja": 3, 
        "amarelo": 4, "verde": 5, "azul": 6, "violeta": 7, 
        "cinza": 8, "branco": 9, "prata": 10, "dourado": 11
    };
    let cores1 = [];
        for(let i = 0; i < 3; i++){
            let cor1 = prompt(`Digite a ${i + 1}ª cor: `).toLowerCase().trim();
            cores1.push(cor1);
            let toleracia = cores1.at(-1);
        }
        if(toleracia == "preto"){
            toleracia == "null"
        }
        else if(toleracia == "marrom"){
            toleracia == "+- 1%"
        }
        else if(toleracia == "vermelho"){
            toleracia == "+- 2%"
        }
        else if(toleracia == "laranja"){
            toleracia == "null"
        }
        else if(toleracia == "amarelo"){
            toleracia == "null"
        }
        else if(toleracia == "verde"){
            toleracia == "+- 0.5"
        }
        else if(toleracia == "azul"){
            toleracia == "+- 0.25"
        }
        else if(toleracia == "violeta"){
            toleracia == "+- 0.1%"
        }
        else if(toleracia == "cinza"){
            toleracia == "+- 0.05%"
        }
        else if(toleracia == "branco"){
            toleracia == "null"
        }
        else if(toleracia == "dourado"){
            toleracia == "+- 5%"
        }
        else if(toleracia == "prata"){
            toleracia == "+- 10%"
        }

    const digito1 = tabelaCores1[cores1[0]];
    const digito2 = tabelaCores1[cores1[1]];
    const multiplicador = Math.pow(10, tabelaCores1[cores1[2]]);

    const valorBase = (digito1 * 10) + digito2;
    const resultadoFinal = valorBase * multiplicador;

    alert(`O valor do resistor é: ${resultadoFinal} Ω, com a tolerância: ${toleracia}`);
    
}