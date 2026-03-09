/*inputs 4 faixas ou 5 faixas?
primeira faixa, segunda ..... cores no caso
*/


const tabelaResistores = {
    "preto":   { valor: 0, 
        multiplicador: 10**0,
        tolerancia: null },
    "marrom":  { valor: 1, 
        multiplicador: 10**1,         
        tolerancia: 1 },
    "vermelho":{ valor: 2, 
        multiplicador: 10**2,        
        tolerancia: 2 },
    "laranja": { valor: 3, 
        multiplicador: 10**3,       
        tolerancia: null },
    "amarelo": { valor: 4, 
        multiplicador: 10**4,      
        tolerancia: null },
    "verde":   { valor: 5, 
        multiplicador: 10**5,     
        tolerancia: 0.5 },
    "azul":    { valor: 6, 
        multiplicador: 10**6,    
        tolerancia: 0.25 },
    "violeta": { valor: 7, 
        multiplicador: 10**7,   
        tolerancia: 0.1 },
    "cinza":   { valor: 8, 
        multiplicador: 10**8,  
        tolerancia: 0.05 },
   "branco":  { valor: 9, 
        multiplicador: 10**9, 
        tolerancia: null },
    "dourado": { valor: null, 
        multiplicador: 0.1,     
        tolerancia: 5 },
    "prata":   { valor: null, 
        multiplicador: 0.01,    
        tolerancia: 10 }
  };
      while(true){

let qtdFaixas = Number(prompt("Digite quantas faixas o resistor possue"));
let faixa = [qtdFaixas];
    if(qtdFaixas < 4 || qtdFaixas > 5){
        alert("Operação Indisponível")
        break;
    }
    else{
        for(let i = 0; i < qtdFaixas; i++){
            faixa += prompt("Digite a cor da " + [i] + "faixa: ");
    }
}
}