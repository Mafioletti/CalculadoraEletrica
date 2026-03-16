⚡ Calculadora de Resistores Pro
Uma ferramenta web interativa projetada para entusiastas de eletrônica e engenheiros. Calcule a resistência de componentes de forma visual, rápida e precisa.

🎨 Preview da Interface
A aplicação simula um resistor real na tela, onde as faixas ganham cores dinamicamente conforme a entrada do usuário, facilitando a conferência visual do componente físico.

🚀 Funcionalidades
Seleção de Modelo: Alternância dinâmica entre resistores de 4 e 5 faixas.

Feedback Visual: O corpo do resistor no HTML é atualizado em tempo real via CSS.

Tratamento de Unidades: Conversão inteligente para Ω, kΩ e MΩ.

Interface Moderna: Design focado em legibilidade com tipografia Inter e sombras suaves.

🛠️ Tecnologias
🧠 Lógica de Funcionamento
O projeto utiliza uma estrutura modular. O arquivo principal captura a intenção do usuário e direciona para o cálculo correto:

Fluxo de Chamada
O sistema utiliza um seletor no index.html que dispara a função iniciarCalculo(). Esta, por sua vez, verifica a quantidade de faixas para chamar o script específico:

// Trecho da lógica de controle integrada
function iniciarCalculo() {
    const tipo = document.getElementById('tipo-resistor').value;
    
    if (tipo === "4") {
        cores4(); // Executa lógica para 2 dígitos + multiplicador
    } else if (tipo === "5") {
        cores5(); // Executa lógica para 3 dígitos + multiplicador
    } else {
        alert("Opção indisponível");
    }
}
Diferença de Cálculos

  Modelo      Fórmula de Cálculo        Precisão
4 Faixas       (D1×10+D2)×Mult           Padrão
5 Faixas    (D1×100+D2×10+D3)×Mult        Alta 


📁 Como Instalar
Clone o repositório:

git clone https://github.com/seu-usuario/calculadora-resistores.git

Navegue até a pasta do projeto e abra o arquivo index.html em seu navegador de preferência.

📝 Notas de Uso
Ao clicar em "Definir Cores", digite os nomes das cores em português (ex: azul, vermelho, dourado). O script converterá automaticamente para os valores e atualizará o visual do componente.
