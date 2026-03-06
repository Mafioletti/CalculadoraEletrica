function Inicial(){
    let convertion = prompt(`
    1 - giga 
    2 - mega
    3 - quilo: 
    4 - base:  
    5 - mili:  
    6 - micro: 
    7 - nano:  
    8 - pico:  
    `)
    let startValue = prompt(("Digite o valor inicial"))
    switch(convertion){
        case 1:
            startValue *= 1000000000;
            break;
        case 2:
            startValue *= 1000000;
            break;
        case 3: 
            startValue *= 1000;
            break;
        case 4:
            startValue = 1;
            break;
        case 5:
            startValue *= 0.001;
            break;
        case 6:
            startValue *= 0.000001;
            break;
        case 7:
            startValue *= 0.000000001;
            break;
        case 8:
            startValue *= 0.000000000001;
            break;
        default:
            alert("Operação indisponível")

    }
}
        
    
    

    /*μ*/